import{c as w,b as g,u as $,i as ft,g as k,f as j,e as P,h as gt,o as D,j as Ut,l as Qt,H as $t,D as zt,s as bt,k as Kt,d as yt}from"./vidstack-1H0xyD-V-sLzNMOel.js";import{_ as Wt}from"./app-gyFXkyxF.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;const q=window,S=q.trustedTypes,dt=S?S.createPolicy("lit-html",{createHTML:s=>s}):void 0,Z="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,kt="?"+x,Xt=`<${kt}>`,L=document,B=()=>L.createComment(""),I=s=>s===null||typeof s!="object"&&typeof s!="function",xt=Array.isArray,Jt=s=>xt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Y=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,ut=/>/g,E=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,mt=/"/g,Et=/^(?:script|style|textarea|title)$/i,Yt=s=>(t,...e)=>({Lh:s,strings:t,values:e}),r=Yt(1),T=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pt=new WeakMap,C=L.createTreeWalker(L,129,null,!1);function Ct(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}const Zt=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",a=N;for(let u=0;u<e;u++){const l=s[u];let d,h,c=-1,v=0;for(;v<l.length&&(a.lastIndex=v,h=a.exec(l),h!==null);)v=a.lastIndex,a===N?h[1]==="!--"?a=ct:h[1]!==void 0?a=ut:h[2]!==void 0?(Et.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=E):h[3]!==void 0&&(a=E):a===E?h[0]===">"?(a=o??N,c=-1):h[1]===void 0?c=-2:(c=a.lastIndex-h[2].length,d=h[1],a=h[3]===void 0?E:h[3]==='"'?mt:ht):a===mt||a===ht?a=E:a===ct||a===ut?a=N:(a=E,o=void 0);const y=a===E&&s[u+1].startsWith("/>")?" ":"";n+=a===N?l+Xt:c>=0?(i.push(d),l.slice(0,c)+Z+l.slice(c)+x+y):l+x+(c===-2?(i.push(void 0),u):y)}return[Ct(s,n+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class F{constructor({strings:t,Lh:e},i){let o;this.parts=[];let n=0,a=0;const u=t.length-1,l=this.parts,[d,h]=Zt(t,e);if(this.el=F.createElement(d,i),C.currentNode=this.el.content,e===2){const c=this.el.content,v=c.firstChild;v.remove(),c.append(...v.childNodes)}for(;(o=C.nextNode())!==null&&l.length<u;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const v of o.getAttributeNames())if(v.endsWith(Z)||v.startsWith(x)){const y=h[a++];if(c.push(v),y!==void 0){const Rt=o.getAttribute(y.toLowerCase()+Z).split(x),V=/([.?@])?(.*)/.exec(y);l.push({type:1,index:n,name:V[2],strings:Rt,ctor:V[1]==="."?te:V[1]==="?"?se:V[1]==="@"?ie:Q})}else l.push({type:6,index:n})}for(const v of c)o.removeAttribute(v)}if(Et.test(o.tagName)){const c=o.textContent.split(x),v=c.length-1;if(v>0){o.textContent=S?S.emptyScript:"";for(let y=0;y<v;y++)o.append(c[y],B()),C.nextNode(),l.push({type:2,index:++n});o.append(c[v],B())}}}else if(o.nodeType===8)if(o.data===kt)l.push({type:2,index:n});else{let c=-1;for(;(c=o.data.indexOf(x,c+1))!==-1;)l.push({type:7,index:n}),c+=x.length-1}n++}}static createElement(t,e){const i=L.createElement("template");return i.innerHTML=t,i}}function A(s,t,e=s,i){var o,n,a,u;if(t===T)return t;let l=i!==void 0?(o=e.Nh)===null||o===void 0?void 0:o[i]:e.Sh;const d=I(t)?void 0:t.Wh;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l.Xh)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(s),l.Yh(s,e,i)),i!==void 0?((a=(u=e).Nh)!==null&&a!==void 0?a:u.Nh=[])[i]=l:e.Sh=l),l!==void 0&&(t=A(s,l.Zh(s,t.values),l,i)),t}class _t{constructor(t,e){this.Oh=[],this.Mh=void 0,this.Ph=t,this.Fh=e}get parentNode(){return this.Fh.parentNode}get Gh(){return this.Fh.Gh}u(t){var e;const{el:{content:i},parts:o}=this.Ph,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:L).importNode(i,!0);C.currentNode=n;let a=C.nextNode(),u=0,l=0,d=o[0];for(;d!==void 0;){if(u===d.index){let h;d.type===2?h=new H(a,a.nextSibling,this,t):d.type===1?h=new d.ctor(a,d.name,d.strings,this,t):d.type===6&&(h=new oe(a,this,t)),this.Oh.push(h),d=o[++l]}u!==(d==null?void 0:d.index)&&(a=C.nextNode(),u++)}return C.currentNode=L,n}v(t){let e=0;for(const i of this.Oh)i!==void 0&&(i.strings!==void 0?(i.Hh(t,i,e),e+=i.strings.length-2):i.Hh(t[e])),e++}}class H{constructor(t,e,i,o){var n;this.type=2,this.Eh=p,this.Mh=void 0,this.Ih=t,this.Jh=e,this.Fh=i,this.options=o,this.Qh=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get Gh(){var t,e;return(e=(t=this.Fh)===null||t===void 0?void 0:t.Gh)!==null&&e!==void 0?e:this.Qh}get parentNode(){let t=this.Ih.parentNode;const e=this.Fh;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this.Ih}get endNode(){return this.Jh}Hh(t,e=this){t=A(this,t,e),I(t)?t===p||t==null||t===""?(this.Eh!==p&&this.Kh(),this.Eh=p):t!==this.Eh&&t!==T&&this.Rh(t):t.Lh!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Jt(t)?this.T(t):this.Rh(t)}k(t){return this.Ih.parentNode.insertBefore(t,this.Jh)}$(t){this.Eh!==t&&(this.Kh(),this.Eh=this.k(t))}Rh(t){this.Eh!==p&&I(this.Eh)?this.Ih.nextSibling.data=t:this.$(L.createTextNode(t)),this.Eh=t}g(t){var e;const{values:i,Lh:o}=t,n=typeof o=="number"?this.Th(t):(o.el===void 0&&(o.el=F.createElement(Ct(o.h,o.h[0]),this.options)),o);if(((e=this.Eh)===null||e===void 0?void 0:e.Ph)===n)this.Eh.v(i);else{const a=new _t(n,this),u=a.u(this.options);a.v(i),this.$(u),this.Eh=a}}Th(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new F(t)),e}T(t){xt(this.Eh)||(this.Eh=[],this.Kh());const e=this.Eh;let i,o=0;for(const n of t)o===e.length?e.push(i=new H(this.k(B()),this.k(B()),this,this.options)):i=e[o],i.Hh(n),o++;o<e.length&&(this.Kh(i&&i.Jh.nextSibling,o),e.length=o)}Kh(t=this.Ih.nextSibling,e){var i;for((i=this.Uh)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this.Jh;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this.Fh===void 0&&(this.Qh=t,(e=this.Uh)===null||e===void 0||e.call(this,t))}}class Q{constructor(t,e,i,o,n){this.type=1,this.Eh=p,this.Mh=void 0,this.element=t,this.name=e,this.Fh=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this.Eh=Array(i.length-1).fill(new String),this.strings=i):this.Eh=p}get tagName(){return this.element.tagName}get Gh(){return this.Fh.Gh}Hh(t,e=this,i,o){const n=this.strings;let a=!1;if(n===void 0)t=A(this,t,e,0),a=!I(t)||t!==this.Eh&&t!==T,a&&(this.Eh=t);else{const u=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=A(this,u[i+l],e,l),d===T&&(d=this.Eh[l]),a||(a=!I(d)||d!==this.Eh[l]),d===p?t=p:t!==p&&(t+=(d??"")+n[l+1]),this.Eh[l]=d}a&&!o&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class te extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const ee=S?S.emptyScript:"";class se extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,ee):this.element.removeAttribute(this.name)}}class ie extends Q{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}Hh(t,e=this){var i;if((t=(i=A(this,t,e,0))!==null&&i!==void 0?i:p)===T)return;const o=this.Eh,n=t===p&&o!==p||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==p&&(o===p||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this.Eh=t}handleEvent(t){var e,i;typeof this.Eh=="function"?this.Eh.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this.Eh.handleEvent(t)}}class oe{constructor(t,e,i){this.element=t,this.type=6,this.Mh=void 0,this.Fh=e,this.options=i}get Gh(){return this.Fh.Gh}Hh(t){A(this,t)}}const vt=q.litHtmlPolyfillSupport;vt==null||vt(F,H),((J=q.litHtmlVersions)!==null&&J!==void 0?J:q.litHtmlVersions=[]).push("2.8.0");const wt=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let a=n.Vh;if(a===void 0){const u=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n.Vh=a=new H(t.insertBefore(B(),u),u,void 0,e??{})}return a.Hh(s),a};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=s=>(...t)=>({Wh:s,values:t});class Dt{constructor(t){}get Gh(){return this.Fh.Gh}Yh(t,e,i){this.jk=t,this.Fh=e,this.lk=i}Zh(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=(s,t)=>{var e,i;const o=s.Mh;if(o===void 0)return!1;for(const n of o)(i=(e=n).Xh)===null||i===void 0||i.call(e,t,!1),M(n,t);return!0},R=s=>{let t,e;do{if((t=s.Fh)===void 0)break;e=t.Mh,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},St=s=>{for(let t;t=s.Fh;s=t){let e=t.Mh;if(e===void 0)t.Mh=e=new Set;else if(e.has(s))break;e.add(s),re(t)}};function ae(s){this.Mh!==void 0?(R(this),this.Fh=s,St(this)):this.Fh=s}function le(s,t=!1,e=0){const i=this.Eh,o=this.Mh;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)M(i[n],!1),R(i[n]);else i!=null&&(M(i,!1),R(i));else M(this,s)}const re=s=>{var t,e,i,o;s.type==it.CHILD&&((t=(i=s).Uh)!==null&&t!==void 0||(i.Uh=le),(e=(o=s).kk)!==null&&e!==void 0||(o.kk=ae))};class de extends Dt{constructor(){super(...arguments),this.Mh=void 0}Yh(t,e,i){super.Yh(t,e,i),St(this),this.isConnected=t.Gh}Xh(t,e=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),e&&(M(this,t),R(this))}setValue(t){if(ne(this.jk))this.jk.Hh(t,this);else{const e=[...this.jk.Eh];e[this.lk]=t,this.jk.Hh(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=s=>s??p;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _ extends Dt{constructor(t){if(super(t),this.et=p,t.type!==it.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this.ft=void 0,this.et=t;if(t===T)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={Lh:this.constructor.resultType,strings:e,values:[]}}}_.directiveName="unsafeHTML",_.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tt extends _{}tt.directiveName="unsafeSVG",tt.resultType=2;const ce=Lt(tt);class ue extends de{constructor(t){super(t),this.Bh=null,this.Xa=null,this.Ch=!1,this.Ch=t.type===it.ATTRIBUTE}render(t){this.Bh!==t&&(this.Bh=t,this.disconnected(),this.isConnected&&this.Ve());const e=this.Bh();return this.Ch?Tt(e):e}reconnected(){this.Ve()}disconnected(){var t;this.Ch||this.setValue(null),(t=this.Xa)==null||t.call(this),this.Xa=null}Ve(){this.Bh&&(this.Xa=P(this.oe.bind(this)))}oe(){var t;this.setValue((t=this.Bh)==null?void 0:t.call(this))}}const b=Lt(ue);function f(s){return b(w(s))}class At extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=wt(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){var t;(t=this.rootPart)==null||t.setConnected(!1),this.rootPart=null}}class Nt{constructor(t,e){this.elements=new Set,this.md=gt(this.Lb.bind(this)),this.Dh=t,this.eb=e}connect(){this.Lb();const t=new MutationObserver(this.md);t.observe(this.Dh,{childList:!0}),D(()=>t.disconnect()),D(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,e){t instanceof Node?(e.textContent="",e.append(t)):wt(t,e),e.style.display||(e.style.display="contents");const i=e.firstElementChild;if(!i)return;const o=e.getAttribute("data-class");o&&i.classList.add(...o.split(" "))}Lb(){for(const t of this.Dh.querySelectorAll("slot"))t.hasAttribute("name")&&this.elements.add(t);this.eb(this.elements)}}let he=0,O="data-slot-id";class Mt{constructor(t){this.md=gt(this.Lb.bind(this)),this.Dh=t,this.slots=new Nt(t,this.Lb.bind(this))}connect(){this.slots.connect(),this.Lb();const t=new MutationObserver(this.md);t.observe(this.Dh,{childList:!0}),D(()=>t.disconnect())}Lb(){for(const t of this.Dh.children){if(t.nodeType!==1)continue;const e=t.getAttribute("slot");if(!e)continue;t.style.display="none";let i=t.getAttribute(O);i||t.setAttribute(O,i=++he+"");for(const o of this.slots.elements){if(o.getAttribute("name")!==e||o.getAttribute(O)===i)continue;const n=document.importNode(t,!0);e.includes("-icon")&&n.classList.add("vds-icon"),n.style.display="",n.removeAttribute("slot"),this.slots.assign(n,o),o.setAttribute(O,i)}}}}function z({label:s,icon:t}){return r`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      <slot name="${t}-icon" data-class="vds-menu-button-icon"></slot>
      <span class="vds-menu-button-label">${b(s)}</span>
      <span class="vds-menu-button-hint" data-part="hint"></span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `}function m(s,t){return f(()=>k(s,t))}function G({tooltip:s}){const{translations:t}=g(),{paused:e}=$().$state,i=f(()=>k(t,e()?"Play":"Pause"));return r`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button class="vds-play-button vds-button" aria-label=${i}>
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-play-tooltip-text">${m(t,"Play")}</span>
        <span class="vds-pause-tooltip-text">${m(t,"Pause")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function K({tooltip:s}){const{translations:t}=g(),{muted:e}=$().$state,i=f(()=>k(t,(e(),"Unmute")));return r`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button class="vds-mute-button vds-button" aria-label=${i}>
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-mute-tooltip-text">${m(t,"Unmute")}</span>
        <span class="vds-unmute-tooltip-text">${m(t,"Mute")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function W({tooltip:s}){const{translations:t}=g(),{textTrack:e}=$().$state,i=f(()=>k(t,e()?"Closed-Captions Off":"Closed-Captions On"));return r`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button class="vds-caption-button vds-button" aria-label=${i}>
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-cc-on-tooltip-text">${m(t,"Closed-Captions Off")}</span>
        <span class="vds-cc-off-tooltip-text">${m(t,"Closed-Captions On")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function me(){const{translations:s}=g(),{pictureInPicture:t}=$().$state,e=f(()=>k(s,t()?"Exit PiP":"Enter PiP"));return r`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button class="vds-pip-button vds-button" aria-label=${e}>
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${m(s,"Enter PiP")}</span>
        <span class="vds-pip-exit-tooltip-text">${m(s,"Exit PiP")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Pt({tooltip:s}){const{translations:t}=g(),{fullscreen:e}=$().$state,i=f(()=>k(t,e()?"Exit Fullscreen":"Enter Fullscreen"));return r`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button class="vds-fullscreen-button vds-button" aria-label=${i}>
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${s}>
        <span class="vds-fs-enter-tooltip-text">${m(t,"Enter Fullscreen")}</span>
        <span class="vds-fs-exit-tooltip-text">${m(t,"Exit Fullscreen")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function U({seconds:s,tooltip:t}){const{translations:e}=g(),i=s>=0?"Seek Forward":"Seek Backward",o=m(e,i);return r`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${s}
          aria-label=${o}
        >
          ${s>=0?r`<slot name="seek-forward-icon"></slot>`:r`<slot name="seek-backward-icon"></slot>`}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${m(e,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Bt(){const{translations:s}=g(),t=m(s,"Volume");return r`
    <media-volume-slider class="vds-volume-slider vds-slider" aria-label=${t}>
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function X(){const{width:s}=$().$state,{thumbnails:t,translations:e}=g(),i=m(e,"Seek");return r`
    <media-time-slider class="vds-time-slider vds-slider" aria-label=${i}>
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${b(()=>s()<768)}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          src=${b(t)}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function It(){const{translations:s}=g(),{live:t}=$().$state,e=m(s,"Skip To Live"),i=m(s,"LIVE");return t()?r`
    <media-live-button class="vds-live-button" aria-label=${e}>
      <span class="vds-live-button-text">${i}</span>
    </media-live-button
  `:null}function pe(){return r`
    <div class="vds-time-group">
      <media-time class="vds-time" type="current"></media-time>
      <div class="vds-time-divider">/</div>
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function ot(){const{live:s}=$().$state;return s()?It():pe()}function Ft(s,t){return r`
    <media-menu-portal .container=${s} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Ht({placement:s,tooltip:t,portal:e}){const{viewType:i}=$().$state,{translations:o,smQueryList:n,thumbnails:a,menuContainer:u,noModal:l,menuGroup:d}=g(),h=w(()=>l()?j(s):n.matches?null:j(s)),c=w(()=>!n.matches&&d()==="bottom"&&i()==="video"?26:0),v=r`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${b(h)}
      offset=${b(c)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        thumbnails=${b(a)}
      >
        <template>
          <media-radio class="vds-chapter-radio vds-radio">
            <media-thumbnail class="vds-thumbnail"></media-thumbnail>
            <div class="vds-chapter-radio-content">
              <span class="vds-chapter-radio-label" data-part="label"></span>
              <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
              <span class="vds-chapter-radio-duration" data-part="duration"></span>
            </div>
          </media-radio>
        </template>
      </media-chapters-radio-group>
    </media-menu-items>
  `;return r`
    <!-- Chapters Menu -->
    <media-menu class="vds-chapters-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${m(o,"Chapters")}
          >
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${ft(t)?b(t):t}
        >
          ${m(o,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${e?Ft(u,v):v}
    </media-menu>
  `}function Gt({placement:s,portal:t,tooltip:e}){const{viewType:i}=$().$state,{translations:o,smQueryList:n,menuContainer:a,noModal:u,menuGroup:l}=g(),d=w(()=>u()?j(s):n.matches?null:j(s)),h=w(()=>!n.matches&&l()==="bottom"&&i()==="video"?26:0),c=r`
    <media-menu-items
      class="vds-settings-menu-items vds-menu-items"
      placement=${b(d)}
      offset=${b(h)}
    >
      ${ve()}${fe()}${ge()}${$e()}
    </media-menu-items>
  `;return r`
    <media-menu class="vds-settings-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${m(o,"Settings")}
          >
            <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${ft(e)?b(e):e}
        >
          ${m(o,"Settings")}
        </media-tooltip-content>
      </media-tooltip>
      ${t?Ft(a,c):c}
    </media-menu>
  `}function ve(){const{translations:s}=g();return r`
    <!-- Audio Menu -->
    <media-menu class="vds-audio-menu vds-menu">
      ${z({label:()=>k(s,"Audio"),icon:"menu-audio"})}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${m(s,"Default")}
        >
          <template>
            <media-radio class="vds-audio-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-audio-radio-group>
      </media-menu-items>
    </media-menu>
  `}function fe(){const{translations:s}=g();return r`
    <!-- Speed Menu -->
    <media-menu class="vds-speed-menu vds-menu">
      ${z({label:()=>k(s,"Speed"),icon:"menu-speed"})}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${m(s,"Normal")}
        >
          <template>
            <media-radio class="vds-speed-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-speed-radio-group>
      </media-menu-items>
    </media-menu>
  `}function ge(){const{translations:s}=g();return r`
    <!-- Quality Menu -->
    <media-menu class="vds-quality-menu vds-menu">
      ${z({label:()=>k(s,"Quality"),icon:"menu-quality"})}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${m(s,"Auto")}
        >
          <template>
            <media-radio class="vds-quality-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
              <span class="vds-radio-hint" data-part="bitrate"></span>
            </media-radio>
          </template>
        </media-quality-radio-group>
      </media-menu-items>
    </media-menu>
  `}function $e(){const{translations:s}=g();return r`
    <!-- Captions Menu -->
    <media-menu class="vds-captions-menu vds-menu">
      ${z({label:()=>k(s,"Captions"),icon:"menu-captions"})}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${m(s,"Off")}
        >
          <template>
            <media-radio class="vds-caption-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-captions-radio-group>
      </media-menu-items>
    </media-menu>
  `}function Vt(s){let t=document.querySelector(`body > .${s}`);return t||(t=document.createElement("div"),t.style.display="contents",t.classList.add(s),document.body.append(t)),t}function be({name:s,class:t,state:e,paths:i}){return r`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${Tt(s??e)}
  >
    ${Ut(i)?ce(i):b(i)}
  </svg>`}class ye{constructor(t){this.nk={},this.ok=!1,this.Dh=t,this.slots=new Nt(t,this.pk.bind(this))}connect(){this.slots.connect(),D(this.disconnect.bind(this))}load(){this.ec().then(t=>{this.nk=t,this.ok=!0,this.pk()})}disconnect(){for(const{slot:t}of this.qk())t.textContent=""}*qk(){for(const t of Object.keys(this.nk)){const e=`${t}-icon`;for(const i of this.slots.elements)i.name===e&&(yield{icon:this.nk[t],slot:i})}}pk(){if(this.ok)for(const{icon:t,slot:e}of this.qk())this.slots.assign(t,e)}}class ke extends ye{connect(){const t=this.ik();t&&(super.connect(),t.$state.canLoad()?this.load():Qt(t,"can-load",()=>this.load(),{once:!0}))}ik(){let t=this.Dh.parentElement;for(;t&&t.localName!=="media-player";)t=t.parentElement;return t}}class Ot extends ke{async ec(){const t=(await Wt(()=>import("./vidstack-7cTzfr-b-ccbreklR.js"),__vite__mapDeps([]))).icons,e={};for(const i of Object.keys(t))e[i]=be({name:i,paths:t[i]});return e}}function xe(){return r`
    <media-captions class="vds-captions"></media-captions>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">${X()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${U({seconds:-10,tooltip:"top start"})}
        ${G({tooltip:"top"})}${U({tooltip:"top",seconds:10})}
        ${f(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${K({tooltip:"top"})}
        ${Bt()}${W({tooltip:"top"})} ${jt()}
      </media-controls-group>
    </media-controls>
  `}function Ee(){return r`
    <media-captions class="vds-captions"></media-captions>
    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        ${f(Ce)}
        ${K({tooltip:"top start"})}${f(It)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${W({tooltip:"top"})}${jt()}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${X()}</media-controls-group>

      ${f(we)}${f(Le)}
    </media-controls>
  `}function Ce(){const{live:s,canSeek:t}=$().$state;return s()&&!t()?G({tooltip:"top start"}):null}function we(){const{live:s}=$().$state;return s()?null:r`
        <media-controls-group class="vds-controls-group">
          <media-time class="vds-time" type="current"></media-time>
          <div class="vds-controls-spacer"></div>
          <media-time class="vds-time" type="duration"></media-time>
        </media-controls-group>
      `}function Le(){const{canSeek:s}=$().$state;return s()?r`
        <media-controls-group class="vds-controls-group">
          <div class="vds-controls-spacer"></div>
          ${U({seconds:-10,tooltip:"top"})}
          ${G({tooltip:"top"})}
          ${U({tooltip:"top",seconds:10})}
          <div class="vds-controls-spacer"></div>
        </media-controls-group>
      `:null}function jt(){const s="top end";return r`
    ${Ht({tooltip:"top",placement:s,portal:!0})}
    ${Gt({tooltip:"top end",placement:s,portal:!0})}
  `}const lt=class lt extends $t(At,zt){onSetup(){this.forwardKeepAlive=!1,this.b=$(),this.classList.add("vds-audio-layout"),this.menuContainer=Vt("vds-audio-layout"),P(()=>{this.menuContainer&&bt(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),D(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){P(()=>{this.$props.customIcons()?new Mt(this).connect():new Ot(this).connect()})}va(){const{streamType:t}=this.b.$state;return this.isMatch&&t()!=="unknown"?this.isSmallLayout?Ee():xe():null}render(){return r`${f(this.va.bind(this))}`}};lt.tagName="media-audio-layout";let et=lt;function De(){return r`
    ${qt()}${nt()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      ${f(Te)}

      <div class="vds-controls-spacer"></div>

      <media-controls-group class="vds-controls-group">${X()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${G({tooltip:"top start"})}
        ${K({tooltip:"top"})}${Bt()}
        ${f(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${W({tooltip:"top"})}${f(Se)}
        ${me()} ${Pt({tooltip:"top end"})}
      </media-controls-group>
    </media-controls>
  `}function Se(){const{menuGroup:s}=g();return s()==="bottom"?at():null}function Te(){const{menuGroup:s}=g(),t=s()==="top"?r`
            <div class="vds-controls-spacer"></div>
            ${at()}
          `:null;return r`
    <media-controls-group class="vds-controls-group">${t}</media-controls-group>
  `}function Ae(){return r`
    ${qt()}${nt()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        <div class="vds-controls-spacer"></div>
        ${W({tooltip:"bottom"})}
        ${at()}${K({tooltip:"bottom end"})}
      </media-controls-group>

      <div class="vds-controls-group">${G({tooltip:"top"})}</div>

      <media-controls-group class="vds-controls-group">
        ${f(ot)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        <div class="vds-controls-spacer"></div>
        ${Pt({tooltip:"top end"})}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${X()}</media-controls-group>
    </media-controls>

    ${f(Ne)}
  `}function Ne(){const{duration:s}=$().$state;return s()===0?null:r`
    <div class="vds-start-duration">
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function nt(){return r`
    <div class="vds-buffering-indicator">
      <svg class="vds-buffering-icon" fill="none" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="vds-buffering-track" cx="60" cy="60" r="54" stroke="currentColor"></circle>
        <circle
          class="vds-buffering-track-fill"
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
        ></circle>
      </svg>
    </div>
  `}function at(){const{menuGroup:s,smQueryList:t}=g(),e=()=>s()==="top"||t.matches?"bottom":"top",i=w(()=>`${e()} ${s()==="top"?"end":"center"}`),o=w(()=>`${e()} end`);return r`
    ${Ht({tooltip:i,placement:o,portal:!0})}
    ${Gt({tooltip:i,placement:o,portal:!0})}
  `}function qt(){return r`
    <div class="vds-gestures">
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:controls"></media-gesture>
      <media-gesture
        class="vds-gesture"
        event="dblpointerup"
        action="toggle:fullscreen"
      ></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
    </div>
  `}const rt=class rt extends $t(At,Kt){onSetup(){this.forwardKeepAlive=!1,this.b=$(),this.classList.add("vds-video-layout"),this.menuContainer=Vt("vds-video-layout"),P(()=>{this.menuContainer&&bt(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),D(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){P(()=>{this.$props.customIcons()?new Mt(this).connect():new Ot(this).connect()})}va(){const{streamType:t}=this.b.$state;return this.isMatch?t()==="unknown"?nt():this.isSmallLayout?Ae():De():null}render(){return r`${f(this.va.bind(this))}`}};rt.tagName="media-video-layout";let st=rt;yt(et);yt(st);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}