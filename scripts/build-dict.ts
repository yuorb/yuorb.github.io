import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as OpenCC from 'opencc-js';

// 🎯 ES Module 环境下兼容获取 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🎯 根据你的实际项目目录调整路径（假设 term.md 存放在 src/docs/term.md）
const termFilePath = path.resolve(__dirname, '../src/docs/term.md');
const outputPath = path.resolve(__dirname, '../src/.vuepress/utils/protected-terms.json');

if (!fs.existsSync(termFilePath)) {
  console.error(`❌ 未找到术语表文件：${termFilePath}`);
  process.exit(1);
}

const markdownContent = fs.readFileSync(termFilePath, 'utf-8');

// 匹配 Markdown 术语行
const termRegex = /[*|\d+\.]\s+([\u4e00-\u9fa5A-Za-z0-9\-–—\s\/]+?)(?=\s*(?:<abbr>|\(|\b[a-zA-Z]+\b|$))/g;

const terms = new Set<string>();
let match;

while ((match = termRegex.exec(markdownContent)) !== null) {
  const term = match[1].trim();
  if (/[\u4e00-\u9fa5]/.test(term) && term.length > 1) {
    terms.add(term);
  }
}

// 初始化 OpenCC 基础转换器
const converter = OpenCC.Converter({ from: 'cn', to: 't' });

const protectedDict: Record<string, string> = {};

// 1. 字符级精准替换映射表
const CHAR_MAP: Record<string, string> = {
  '复': '複', // 术语表中的“复”统一定向为“複”（复构、复数、复似离等）
  '干': '幹', // 词干
};

// 2. 极少数特例词组全词匹配
// scripts/build-dict.ts 中的特例覆盖
const EXACT_EXCEPTIONS: Record<string, string> = {
  '恢复': '恢復',
  '答复': '答復',
  '复兴': '復興',
  '着迷观': '著迷觀',  // 🎯 修正“着” -> “著”
  '刚才体': '剛才體',  // 🎯 修正“纔” -> “才”（更符合现代繁体习惯）
};

Array.from(terms).forEach((cnTerm) => {
  if (EXACT_EXCEPTIONS[cnTerm]) {
    protectedDict[cnTerm] = EXACT_EXCEPTIONS[cnTerm];
    return;
  }

  let hantTerm = converter(cnTerm);

  for (const [cnChar, hantChar] of Object.entries(CHAR_MAP)) {
    if (cnTerm.includes(cnChar)) {
      const wrongHantChar = converter(cnChar);
      hantTerm = hantTerm.replaceAll(wrongHantChar, hantChar);
    }
  }

  protectedDict[cnTerm] = hantTerm;
});

// 确保目标输出目录存在
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入文件
fs.writeFileSync(outputPath, JSON.stringify(protectedDict, null, 2));

console.log(`✅ 成功生成术语词典：${outputPath}`);
console.log(`共提取了 ${Object.keys(protectedDict).length} 条专有名词。`);