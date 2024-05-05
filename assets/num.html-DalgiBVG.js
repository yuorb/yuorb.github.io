import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as O,c as x,a as i}from"./app-nHzx6Ad5.js";const Z=i("option",{value:"0"},"Nominal: S0",-1),q=i("option",{value:"1"},"Cardinal: S1",-1),J=i("option",{value:"2"},"Dimensional: S2",-1),R=i("option",{value:"3"},"Ordinal: S3",-1),U=[Z,q,J,R],G=i("option",{value:"0"},"Positive",-1),V=i("option",{value:"1"},"Negative",-1),F=[G,V],K=i("option",{value:"0"},"Shortcut",-1),Q=i("option",{value:"1"},"No shortcut",-1),W=[K,Q],X=i("option",{value:"0"},"Default",-1),Y=i("option",{value:"1"},"Omit hundreds",-1),ee=i("option",{value:"2"},"Don’t omit",-1),te=[X,Y,ee],ne=i("h6",null,"Conversion result",-1),re=i("div",{id:"输出区域"},[i("p",null,"Please enter the number ( ⓛ ω ⓛ *)")],-1),le={__name:"num.html",setup(oe){function v(n){return n.trim()==="0".repeat(n.length)?"0":n.replace(/^0+/,"")}function T(n,e){var t="";return n!==""?(e==="1"?t="%#-"+n+"&a":e==="0"&&(t="%#"+n+"&a"),console.log("数字不为空，可以执行进一步的操作")):console.log("数字为空"),t}function C(n){let e="";for(var t=0,r=n.length-1;r>=0;r--)e=n.charAt(r)+e,t++,t%4===0&&r!==0&&(e=","+e);return e}function b(n,e){n=""+n;var t=n.split(","),r=t.length-1,l="";let a="";if(e===0)for(var o=r;o>=0;o--)t[o]!=="0000"&&(a=w(r),l=v(t[o])+a[r-o]+l);else if(e===1){for(var o=r;o>=0;o--)t[o]!=="0000"&&(a=w(r),l="%#"+v(t[o])+"&ëʼi"+a[r-o]+l);l=l.replace("ëʼi","a")}else if(e===2){for(var o=r;o>=0;o--)t[o]!=="0000"&&(a=w(r),l=D(v(t[o]))+a[r-o]+l);l=l.replace("ëʼi","a")}else console.log("分节类型为空");return l}function p(n,e){for(var t="",r=0;r<n.length;r++)n[r]==="#"?e==="0"?t+="o":e==="1"?t+="a":e==="2"?t+="e":e==="3"&&(t+="u"):t+=n[r];return t}function c(n,e){let t="";for(let r=0;r<n.length;r++){let l=n[r];l==="%"?e==="0"?l="w":e==="1"&&(l=""):l==="&"&&(e==="0"?l="":e==="1"&&(l="al")),t+=l}return t}function j(n,e,t){for(var r="",l=0;l<n.length;l++){var a=parseInt(n[l]);!isNaN(a)&&a>=0&&a<e.length&&(l===0?r+=e[a]+"a ":r+=e[a]+"ëʼi ")}return r.trim()}const w=n=>{const e=[""," %#pc&ui "," %#kẓ&ui "," %#pc&ui %#kẓ&ui "," %#čg&ui "],t=[];for(let l=0;l<n;l++){const a=Math.floor(l/4),o=l%4+1;let u=e[o];for(let s=0;s<a;s++)u+="%#čg&ui ";t.push(u)}return[].concat("",t)};var m=["%#vr&","%#ll&","%#ks&","%#z&","%#pš&","%#st&","%#cp&","%#ns&","%#čk&","%#lẓ&"],_=["","ars","ärs","ers","irs","ëirs","örs","ors","ürs","urs"];function D(n){if(n.length===4){let e=n.slice(0,2),t=n.slice(2,4),r=parseInt(e[1]),l=parseInt(t[1]),a=m[r],o=m[l],u=parseInt(e[0]),s=parseInt(t[0]),d=_[u],f=_[s],h=a+d,S=o+f;return h+"@ (%#gz&ui) "+S+"üň"}else if(n.length<2){let t=parseInt(n);return m[t]+"@"}else if(n.length<3){let e=n,t=parseInt(e[1]),r=parseInt(e[0]),l=m[t],a=_[r];return l+a+"@"}else if(n.length<4){let e=n.slice(0,1),t=n.slice(1,3),r=parseInt(e),l=parseInt(t[1]),a=m[r],o=m[l],u=parseInt(t[0]),s=_[u],d=o+s;return a+"@ (%#gz&ui) "+d+"üň"}else return"输入文本必须为4个字符长度"}function M(n){let e=n.replace(/(w)?(\S)vr(al)?ars/g,"$1$2j$3");e=e.replace(/\((w)?(\S)gz(al)?ui\) (?:w)?\Svr(?:al)?üň/g,"$1$2gz$3ui"),e=e.replace(/\s(?:w)?\Svr(?:al)?üň/g,""),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)gz(al)?ui/g,"$2$3gz$4$1"),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)pc(al)?ui/g,"$2$3pc$4$1"),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)kẓ(al)?ui/g,"$2$3kẓ$4$1"),e=e.replace(/(?:w)?(?:\S)?ll(?:al)?(@)\s(w)?(\S)čg(al)?ui/g,"$2$3čg$4$1");let t=e.replace(/@/g,"ëʼi").replace("ëʼi","a");return t=t.replace(/üň w(\S{1,3})ui/g,(r,l)=>`üň ${l}alui`),t}function P(n,e){let t=n;return e==="0"?t:e==="1"?(t=t.replace(/\s\((w)?(\S)gz(al)?ui\)/g,""),t):(t=t.replace(/(\(|\))/g,""),t)}function g(){var n=document.getElementById("数字").getAttribute("pattern"),e=document.getElementById("数字").value,t=new RegExp(n);if(t.test(e))k();else{var r=document.getElementById("输出区域");r.innerHTML=`
    <p>你知道你输入的不是数字吗 (・ω・)ノ</p>
    `}var r=document.getElementById("输出区域");t.test(e)?k():e===""?r.innerHTML="<p>It was so empty so I came to fill it ヾ(•ω•`)o</p>":r.innerHTML="<p>入力した内容は数字ではありませんね(・ω・)ノ</p>"}function k(){var n=document.getElementById("数字").value,e=document.getElementById("类型").value,t=document.getElementById("极性").value,r=document.getElementById("简化").value,l=Math.abs(parseInt(n)),a=document.getElementById("省略").value,o=p(T(n,t),e);const u=c(o,r),s=c(p(j(n,m),e),r);n=v(n);let d="";var f=C(n);t==="1"?d="-"+f:t==="0"&&(d=f);var h="";const S=l;n=v(n);const N=c(p(b(f,0),e),r),B=c(p(b(f,1),e),r),z=M(c(p(b(f,2),e),r));let y="",$="",I="";t==="1"?(h="wetvyahnuʼu "+N,y="wetvyahnuʼu "+B,$="wetvyahnuʼu "+z,I="wetvyalša "+s.replace("a ","ëʼi ")):S==0n?(h=N,y=c(p("%#vr&a",e),r),$=c(p("%#vr&a",e),r),I=s):(h=N,y=B,$=z,I=s);const A=P($,a);var L=document.getElementById("输出区域");let E=`<p>Number-as-root notation: ${u}</p>
    <p>Ithkuil number grouping: ${d}</p>
    <p>Ithkuil radix replacement preparation: ${h}</p>
    <p>Ithkuil radix replacement: ${y}</p>
    <p>Ithkuil index replacement: ${A}</p>
    `;e==="0"&&(E+=`<p>Nominal number notation based on position rather than quantity: ${I}</p>`),L.innerHTML=E}return(n,e)=>(O(),x("div",null,[i("input",{type:"text",id:"数字",pattern:"^[0-9]+$",placeholder:"Number Only",required:"",onInput:e[0]||(e[0]=t=>g())},null,32),i("select",{id:"类型",onInput:e[1]||(e[1]=t=>g())},U,32),i("select",{id:"极性",onInput:e[2]||(e[2]=t=>g())},F,32),i("select",{id:"简化",onInput:e[3]||(e[3]=t=>g())},W,32),i("select",{id:"省略",onInput:e[4]||(e[4]=t=>g())},te,32),ne,re]))}},se=H(le,[["__file","num.html.vue"]]),ue=JSON.parse('{"path":"/en/tool/num.html","title":"Numeral Converter","lang":"en-US","frontmatter":{"title":"Numeral Converter","icon":"fas fa-hashtag","sidebar":false,"description":"Conversion result Please enter the number ( ⓛ ω ⓛ *)","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://yuorb.github.io/tool/num.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://yuorb.github.io/ja/tool/num.html"}],["meta",{"property":"og:url","content":"https://yuorb.github.io/en/tool/num.html"}],["meta",{"property":"og:site_name","content":"NiGHT"}],["meta",{"property":"og:title","content":"Numeral Converter"}],["meta",{"property":"og:description","content":"Conversion result Please enter the number ( ⓛ ω ⓛ *)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2024-05-03T19:36:22.000Z"}],["meta",{"property":"article:author","content":"天邪弱 Lucifer Caelius Delicatus"}],["meta",{"property":"article:modified_time","content":"2024-05-03T19:36:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Numeral Converter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-03T19:36:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"天邪弱 Lucifer Caelius Delicatus\\",\\"url\\":\\"https://www.zhihu.com/people/ryanlo713\\"}]}"]]},"headers":[],"git":{"createdTime":1713516417000,"updatedTime":1714764982000,"contributors":[{"name":"ryanlo713","email":"12672523+ryanlo713@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":8.16,"words":2447},"filePathRelative":"en/tool/num.md","localizedDate":"April 19, 2024","autoDesc":true}');export{se as comp,ue as data};