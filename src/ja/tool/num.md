---
title: 数変換
icon: fas fa-hashtag
sidebar: false

---

<input type="text" id="数字" pattern="^[0-9]+$" placeholder="数字のみ" required @input="验证()">

<select id="类型" @input="验证()">
    <option value="0">名目数詞: S0</option>
    <option value="1">基数詞: S1</option>
    <option value="2">次元数詞: S2</option>
    <option value="3">序数詞: S3</option>
</select>

<select id="极性" @input="验证()">
    <option value="0">正数</option>
    <option value="1">負数</option>
</select>

<select id="简化" @input="验证()">
    <option value="0">ショートカットあり</option>
    <option value="1">ショートカットなし</option>
</select>

<select id="省略" @input="验证()">
    <option value="0">デフォルト</option>
    <option value="1">百を省略</option>
    <option value="2">省略せず</option>
</select>

<!-- <button onclick="验证()">转换</button><br><br> -->
<h6>変換結果</h6>
<div id="输出区域">
    <p>数字を入力して( ⓛ ω ⓛ *)</p>
</div>

<script setup>
function 删前置零(text) {
    // 如果文本全为 0,返回单个 0
    if (text.trim() === '0'.repeat(text.length)) {
        return '0';
    }

    // 去除前导 0
    let result = text.replace(/^0+/, '');

    return result;
}

function 简替(数字, 极性) {
    var result = "";
    // 判断数字是否为空
    if (数字 !== "") {
        // 执行进一步的操作
        if (极性 === "1")
            result = "%#-" + 数字 + "&a";
        else if (极性 === "0")
            result = "%#" + 数字 + "&a";
        console.log("数字不为空，可以执行进一步的操作");
    } else {
        console.log("数字为空");
    }
    return result;
}

function 分节(数字串) {
    let result = '';
    var count = 0;

    // 从字符串的最后一位开始遍历
    for (var i = 数字串.length - 1; i >= 0; i--) {
        result = 数字串.charAt(i) + result; // 将当前字符添加到结果的前面
        count++;

        // 每逢4位数字，添加一个逗号（分节号）
        if (count % 4 === 0 && i !== 0) {
            result = "," + result;
        }
    }

    return result;
}

function 分节替换(input, type) {
    input = '' + input;
    var splitnum = input.split(',');
    var n = splitnum.length - 1;
    var result = '';
    let 单位表 = '';
    if (type === 0) {
        for (var i = n; i >= 0; i--) {
            if (splitnum[i] === '0000') continue;
            单位表 = 替换表(n);
            result = 删前置零(splitnum[i]) + 单位表[n - i] + result;
        }
    } else if (type === 1) {
        for (var i = n; i >= 0; i--) {
            if (splitnum[i] === '0000') continue;
            单位表 = 替换表(n);
            result = "%#" + 删前置零(splitnum[i]) + "&ëʼi" + 单位表[n - i] + result;
        }
        result = result.replace("ëʼi", "a");
    } else if (type === 2) {
        for (var i = n; i >= 0; i--) {
            if (splitnum[i] === '0000') continue;
            单位表 = 替换表(n);
            result = 千数转换(删前置零(splitnum[i])) + 单位表[n - i] + result;
        }
        result = result.replace("ëʼi", "a");
    } else
        console.log("分节类型为空");

    return result;
}

function 表记分节替换(input) {
    input = '' + input;
    var splitnum = input.split(',');
    var n = splitnum.length - 1;
    var result = '';
    for (var i = n; i >= 0; i--) {
        if (splitnum[i] === '0000') continue;
        单位表 = 替换表(n);
        result = "%#" + splitnum[i] + "&ëʼi" + 单位表[n - i] + result;
    }
    result = result.replace("ëʼi", "a");
    return result;
}

function 词干(text, type) {
    var result = "";

    for (var i = 0; i < text.length; i++) {
        if (text[i] === "#") {
            if (type === "0") {
                result += "o";
            } else if (type === "1") {
                result += "a";
            } else if (type === "2") {
                result += "e";
            } else if (type === "3") {
                result += "u";
            }
        } else {
            result += text[i];
        }
    }

    return result;
}

function 简替形(text, value) {
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === '%') {
            if (value === "0") {
                char = 'w';
            } else if (value === "1") {
                char = '';
            }
        } else if (char === '&') {
            if (value === "0") {
                char = '';
            } else if (value === "1") {
                char = 'al';
            }
        }
        newText += char;
    }
    return newText;
}

function 位置名数替换(文本, 个数, 极性) {
    var 替换后的文本 = "";
    for (var i = 0; i < 文本.length; i++) {
        var 数字 = parseInt(文本[i]);
        if (!isNaN(数字) && 数字 >= 0 && 数字 < 个数.length) {
            if (i === 0) {
                替换后的文本 += 个数[数字] + "a" + " ";
            } else {
                替换后的文本 += 个数[数字] + "ëʼi" + " ";
            }
        }
    }

    return 替换后的文本.trim();
}

const 替换表 = (n) => {
    const patterns = ['', ' %#pc&ui ', ' %#kẓ&ui ', ' %#pc&ui %#kẓ&ui ', ' %#čg&ui '];
    const result = [];

    for (let i = 0; i < n; i++) {
        const level = Math.floor(i / 4);
        const patternIndex = i % 4 + 1;
        let pattern = patterns[patternIndex];

        for (let j = 0; j < level; j++) {
            pattern += '%#čg&ui ';
        }
        result.push(pattern);
    }

    let newArray = [].concat("", result);

    return newArray;
};

var 个数 = ["%#vr&", "%#ll&", "%#ks&", "%#z&", "%#pš&", "%#st&", "%#cp&", "%#ns&", "%#čk&", "%#lẓ&"];
var 十倍 = ["", "ars", "ärs", "ers", "irs", "ëirs", "örs", "ors", "ürs", "urs"];

function 千数转换(text) {
    // 检查输入文本是否长度为4
    // if (text.length !== 4) {
    //     return "输入文本必须为4个字符长度";
    // }

    if (text.length === 4) {
        // 提取前两个和后两个字符
        let a = text.slice(0, 2);
        let b = text.slice(2, 4);

        // 将a和b的第二个字符转换为数字并访问个数数组
        let a_index = parseInt(a[1]);
        let b_index = parseInt(b[1]);
        let a1 = 个数[a_index];
        let b1 = 个数[b_index];

        // 将a和b的第一个字符转换为数字并访问十倍数组
        let a_num = parseInt(a[0]);
        let b_num = parseInt(b[0]);
        let a2 = 十倍[a_num];
        let b2 = 十倍[b_num];

        // 拼接结果并返回
        let new_a = a1 + a2;
        let new_b = b1 + b2;
        return new_a + "@ (%#gz&ui) " + new_b + "üň";
    } else if (text.length < 2) {
        let a = text;
        let a_index = parseInt(a);
        let a1 = 个数[a_index]
        return a1 + "@";
    } else if (text.length < 3) {
        let a = text
        let a_index = parseInt(a[1]);
        let a_num = parseInt(a[0]);
        let a1 = 个数[a_index]
        let a2 = 十倍[a_num];
        return a1 + a2 + "@";
    } else if (text.length < 4) {
        // 提取前一个和后两个字符
        let a = text.slice(0, 1);
        let b = text.slice(1, 3);

        // 将a和b的第二个字符转换为数字并访问个数数组
        let a_index = parseInt(a);
        let b_index = parseInt(b[1]);
        let a1 = 个数[a_index];
        let b1 = 个数[b_index];

        // 将b的第一个字符转换为数字并访问十倍数组
        let b_num = parseInt(b[0]);
        let b2 = 十倍[b_num];

        // 拼接结果并返回
        let new_b = b1 + b2;
        return a1 + "@ (%#gz&ui) " + new_b + "üň";
    } else {
        return "输入文本必须为4个字符长度";
    }
}

function 格和音渡处理(text) {
    // 对零的处理
    let a = text.replace(/(w)?(\S)vr(al)?ars/g, '$1$2j$3');
    a = a.replace(/\((w)?(\S)gz(al)?ui\) (?:w)?\Svr(?:al)?üň/g, '$1$2gz$3ui');
    a = a.replace(/\s(?:w)?\Svr(?:al)?üň/g, '');
    // 对一的处理
    a = a.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)gz(al)?ui/g, '$2$3gz$4$1');
    a = a.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)pc(al)?ui/g, '$2$3pc$4$1');
    a = a.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)kẓ(al)?ui/g, '$2$3kẓ$4$1');
    a = a.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)čg(al)?ui/g, '$2$3čg$4$1');

    // 将文本中所有的 "@" 替换成 "e"
    let result = a.replace(/@/g, 'ëʼi').replace("ëʼi", "a");

    // 使用正则表达式匹配 "un w#(一至两个非空白字符)ui"
    // 并将匹配到的字符串中的 "(一至两个非空白字符)" 部分提取出来替换回去
    result = result.replace(/üň w(\S{1,3})ui/g, (match, p1) => {
        return `üň ${p1}alui`;
    });

    return result;
}

function 省略处理(text, type) {
    let result = text;
    if (type === "0") {
        return result;
    } else if (type === "1") {
        result = result.replace(/\s\((w)?(\S)gz(al)?ui\)/g, '');
        return result;
    } else {
        result = result.replace(/(\(|\))/g, '');
        return result;
    }
}

function 验证() {
    var 匹配 = document.getElementById("数字").getAttribute("pattern");
    var 数字串 = document.getElementById("数字").value;

    var re = new RegExp(匹配);

    var 输出区域 = document.getElementById("输出区域");

    if (re.test(数字串)) {
        解析并显示结果();
    } else if (数字串 === "") {
        输出区域.innerHTML = `<p>すごく空いていたので埋めさせていただきますヾ(•ω•\`)o</p>`;
    }
    else {
        // 显示结果
        输出区域.innerHTML = `<p>入力した内容は数字ではありませんね(・ω・)ノ</p>`;
    }
}

function 解析并显示结果() {
    var 数字串 = document.getElementById("数字").value;
    var 类型 = document.getElementById("类型").value;
    var 极性 = document.getElementById("极性").value;
    var 简化 = document.getElementById("简化").value;
    var 数字 = Math.abs(parseInt(数字串));
    var 省略 = document.getElementById("省略").value;

    // 简替
    var 简替数 = 词干(简替(数字串, 极性), 类型);
    const 简化简替数 = 简替形(简替数, 简化);

    const 位置名数 = 简替形(词干(位置名数替换(数字串, 个数, 极性), 类型), 简化);

    数字串 = 删前置零(数字串)

    // 分节
    let 分节数 = '';
    var 绝对值分节数 = 分节(数字串);
    if (极性 === "1")
        分节数 = "-" + 绝对值分节数;
    else if (极性 === "0")
        分节数 = 绝对值分节数;

    var 分数替串 = ""
    var 表记数 = ""
    const n = 数字;

    数字串 = 删前置零(数字串)

    const 简化分替串 = 简替形(词干(分节替换(绝对值分节数, 0), 类型), 简化)
    const 简化表分替串 = 简替形(词干(分节替换(绝对值分节数, 1), 类型), 简化)
    const 简化千位转数 = 格和音渡处理(简替形(词干(分节替换(绝对值分节数, 2), 类型), 简化))
    let 表记分数替串 = '';
    let 千位转数 = '';
    let 位置名数串 = "";

    if (极性 === "1") {
        分数替串 = "wetvyahnuʼu " + 简化分替串;
        表记分数替串 = "wetvyahnuʼu " + 简化表分替串;
        千位转数 = "wetvyahnuʼu " + 简化千位转数;
        位置名数串 = "wetvyalša " + 位置名数.replace("a ", "ëʼi ");
    }
    else if (n == 0n) {
        分数替串 = 简化分替串;
        表记分数替串 = 简替形(词干("%#vr&a", 类型), 简化);
        千位转数 = 简替形(词干("%#vr&a", 类型), 简化);
        位置名数串 = 位置名数;
    }
    else {
        分数替串 = 简化分替串;
        表记分数替串 = 简化表分替串;
        千位转数 = 简化千位转数;
        位置名数串 = 位置名数;
    }

    const 是否省略千位转数 = 省略处理(千位转数, 省略);

    // 显示结果

    var 输出区域 = document.getElementById("输出区域");

    let 输出 = `<p>ルートとしての記数法：${简化简替数}</p>
    <p>Ithkuil 桁の区切り: ${分节数}</p>
    <p>Ithkuil 底置換の準備: ${分数替串}</p>
    <p>Ithkuil 底置換: ${表记分数替串}</p>
    <p>Ithkuil 指数置換: ${是否省略千位转数}</p>
    `;

    if (类型 === "0") {
        输出 += `<p>数量ではなく位置に基づく記数法：${位置名数串}</p>`;
    }

    输出区域.innerHTML = 输出;
}
</script>

<style>
input[type="text"],
select {
  padding: 5px 10px; /* 添加内边距 */
  border: 1px solid #ccc; /* 添加边框 */
  border-radius: 4px; /* 添加圆角 */
  font-size: 14px; /* 设置字体大小 */
  margin-right: 10px; /* 添加水平间距 */
}

/* Buttons, forms and input */
input, textarea {
  border: 1px solid var(--grey-light);
}
input:focus, textarea:focus {
  border: 1px solid var(--grey-light);
}

textarea {
  width: 100%;
}

.button, button, input[type=submit], input[type=reset], input[type=button], input[type=file]::file-selector-button {
  display: inline-block;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  background-color: var(--theme-color);
  color: var(--text-color);
  border-radius: 1px;
  border: 1px solid var(--grey-light);
  cursor: pointer;
  box-sizing: border-box;
}
.button[disabled], button[disabled], input[type=submit][disabled], input[type=reset][disabled], input[type=button][disabled], input[type=file]::file-selector-button[disabled] {
  cursor: default;
  opacity: 0.5;
}
.button:hover, button:hover, input[type=submit]:hover, input[type=reset]:hover, input[type=button]:hover, input[type=file]::file-selector-button:hover {
  background-color: var(--bg-color-secondary);
  color: var(--text-color);
  outline: 0;
}
.button:focus-visible, button:focus-visible, input[type=submit]:focus-visible, input[type=reset]:focus-visible, input[type=button]:focus-visible, input[type=file]::file-selector-button:focus-visible {
  outline-style: solid;
  outline-width: 2px;
}

textarea, select, input {
  color: var(--text-color);
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  margin-bottom: 10px;
  background-color: var(--bg-color-secondary);
  border: 1px solid var(--grey-light);
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
}
textarea:focus, select:focus, input:focus {
  border: 1px solid var(--theme-color);
  outline: 0;
}

input[type=checkbox]:focus {
  outline: 1px dotted var(--theme-color);
}

label, legend, fieldset {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

</style>