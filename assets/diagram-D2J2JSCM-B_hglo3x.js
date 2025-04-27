import{c as B}from"./chunk-4KE642ED-C_Eogibp.js";import{p as P}from"./gitGraph-YCYPL57B-MEVJTYR7-Cn7LOful.js";import{ar as F,m as i,as as $,at as S,v as W,J as x,aT as v,k as z,w as T,B as A,L as D,A as L,M as E,F as H}from"./mermaid.esm.min-BewRsfUF.js";import"./chunk-5ZJXQJOJ-DGBt3g63.js";import"./app-DoseiyqZ.js";var w={packet:[]},u=structuredClone(w),M=F.packet,R=i(()=>{let t=$({...M,...S().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),Y=i(()=>u.packet,"getPacket"),N=i(t=>{t.length>0&&u.packet.push(t)},"pushWord"),I=i(()=>{W(),u=structuredClone(w)},"clear"),m={pushWord:N,getPacket:Y,getConfig:R,clear:I,setAccTitle:T,getAccTitle:A,setDiagramTitle:D,getDiagramTitle:L,getAccDescription:E,setAccDescription:H},X=1e4,q=i(t=>{B(t,m);let e=-1,l=[],n=1,{bitsPerRow:s}=m.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${p}`);l.length<=s+1&&m.getPacket().length<X;){let[g,d]=J({start:a,end:r,label:p},n,s);if(l.push(g),g.end+1===n*s&&(m.pushWord(l),l=[],n++),!d)break;({start:a,end:r,label:p}=d)}}m.pushWord(l)},"populate"),J=i((t,e,l)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*l?[t,void 0]:[{start:t.start,end:e*l-1,label:t.label},{start:e*l,end:t.end,label:t.label}]},"getNextFittingBlock"),K={parse:i(async t=>{let e=await P("packet",t);x.debug(e),q(e)},"parse")},O=i((t,e,l,n)=>{let s=n.db,a=s.getConfig(),{rowHeight:r,paddingY:p,bitWidth:g,bitsPerRow:d}=a,h=s.getPacket(),o=s.getDiagramTitle(),k=r+p,c=k*(h.length+1)-(o?0:r),b=g*d+2,f=v(e);f.attr("viewbox",`0 0 ${b} ${c}`),z(f,c,b,a.useMaxWidth);for(let[y,C]of h.entries())U(f,C,y,a);f.append("text").text(o).attr("x",b/2).attr("y",c-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=i((t,e,l,{rowHeight:n,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:g})=>{let d=t.append("g"),h=l*(n+a)+a;for(let o of e){let k=o.start%p*r+1,c=(o.end-o.start+1)*r-s;if(d.append("rect").attr("x",k).attr("y",h).attr("width",c).attr("height",n).attr("class","packetBlock"),d.append("text").attr("x",k+c/2).attr("y",h+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(o.label),!g)continue;let b=o.end===o.start,f=h-2;d.append("text").attr("x",k+(b?c/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(o.start),b||d.append("text").attr("x",k+c).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(o.end)}},"drawWord"),V={draw:O},_={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},j=i(({packet:t}={})=>{let e=$(_,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),at={parser:K,db:m,renderer:V,styles:j};export{at as diagram};
