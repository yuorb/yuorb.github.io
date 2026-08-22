import protectedTermsJson from './protected-terms.json';

export type BCP47Lang = 'zh-Hans' | 'zh-Hant' | 'zh-Hant-TW' | 'zh-Hant-HK';

let baseConverter: any = null;
let twVariant: any = null;
let hkVariant: any = null;

const PROTECTED_TERMS: Record<string, string> = {
  ...(protectedTermsJson as Record<string, string>),
};

// 🎯 1. 手动补充极少数不构成独立词汇的符号/边缘组合映射
const EXTRA_PATTERNS: Record<string, string> = {
  '复/双': '複/雙',
  '双/复': '雙/複',
  '单/复': '單/複',
  '干/根': '幹/根',
};

// 🎯 2. 从已有 435 条术语集中动态生成的“安全单字/短词修正”
// 当 OpenCC 把未拦截的“复”错转成了“復”时，强制救回为“複”
const FALLBACK_CHAR_FIXES: Record<string, string> = {
  '復/': '複/',
  '/復': '/複',
  '復)': '複)',
  '(復': '(複',
  '干/': '幹/',
  '/干': '/幹',
};

async function initConverters() {
  if (!baseConverter) {
    const OpenCCModule = await import('opencc-js');
    baseConverter = OpenCCModule.Converter({ from: 'cn', to: 't' });
    twVariant = OpenCCModule.Converter({ from: 't', to: 'twp' });
    hkVariant = OpenCCModule.Converter({ from: 't', to: 'hkp' });
  }
}

export async function convertText(text: string, lang: BCP47Lang): Promise<string> {
  if (lang === 'zh-Hans' || !text.trim()) return text;

  await initConverters();

  // 🛡️ 阶段一：合并字典与符号组合，用 Token 占位保护
  const fullDict = { ...EXTRA_PATTERNS, ...PROTECTED_TERMS };
  const tokens: string[] = [];
  let protectedText = text;

  // 严格按词长倒序（优先匹配“复合型词缀”，再匹配“复/双”，最后匹配短词）
  const sortedKeys = Object.keys(fullDict).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    if (protectedText.includes(key)) {
      const token = `__OPENCC_PROTECT_${tokens.length}__`;
      tokens.push(fullDict[key]);
      protectedText = protectedText.replaceAll(key, token);
    }
  }

  // ⚙️ 阶段二：OpenCC 标准转换及地区变体转换
  let convertedText = baseConverter(protectedText);

  switch (lang) {
    case 'zh-Hant-TW':
      convertedText = twVariant(convertedText);
      break;
    case 'zh-Hant-HK':
      convertedText = hkVariant(convertedText);
      break;
  }

  // 🔓 阶段三：还原被保护的专有名词
  tokens.forEach((targetText, index) => {
    const token = `__OPENCC_PROTECT_${index}__`;
    convertedText = convertedText.replaceAll(token, targetText);
  });

  // 🚑 阶段四（兜底防线）：修正未被字典捕获到的斜杠/括号残余错字
  for (const [wrong, right] of Object.entries(FALLBACK_CHAR_FIXES)) {
    if (convertedText.includes(wrong)) {
      convertedText = convertedText.replaceAll(wrong, right);
    }
  }

  return convertedText;
}