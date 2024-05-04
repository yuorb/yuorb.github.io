const __vite__fileDeps=["assets/vidstack-CRlTZX3Z-PBDNdscv.js","assets/vidstack-DQ6dSZwe-BTtv5vWE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var ve=Object.getPrototypeOf;var fe=Reflect.get;var lt=(e,t,s)=>fe(ve(e),s,t);import{P as h,Q as Nt,R as L,S as k,U as he,V as j,W as Bt,X as A,Y as $e,Z as Rt,$ as x,a0 as Ft,a1 as be,a2 as mt,a3 as E,a4 as v,_ as ge,a5 as Wt,a6 as pt,a7 as Et,a8 as ye,a9 as xe,aa as _t,ab as U,ac as vt,ad as Ce,ae as Kt,af as Se,ag as O,ah as we,ai as ke,aj as Te,ak as Qt,al as rt,am as De,an as Ae,ao as Me,ap as Pe,aq as Ie,ar as Ht}from"./app-Coc2m_2S.js";import{e as Oe,D as It,x as o,l as ft,o as Ve,c as Ge,t as Ot,A as Le,n as X,L as qt,i as Ne}from"./vidstack-rsZGrNIW-BiUwPbUx.js";class Be extends Ge{constructor(t){super(t),this.h=null,this.w=!1,this.$=null,this.w=t.type===Ot.ATTRIBUTE||t.type===Ot.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Gl()),this.h?this.x(Bt(this.h)):Le}reconnected(){this.Gl()}disconnected(){var t;(t=this.$)==null||t.call(this),this.$=null}Gl(){this.h&&(this.$=A(this.l.bind(this)))}x(t){return this.w?ft(t):t}y(t){this.setValue(this.x(t))}l(){var t;this.y((t=this.h)==null?void 0:t.call(this))}}function i(e){return Oe(Be)(h(e))}class zt{constructor(t,s){this._m=t,this.La=s,this.elements=new Set,this.Gc=Nt(this.Ha.bind(this))}connect(){this.Ha();const t=new MutationObserver(this.Gc);for(const s of this._m)t.observe(s,{childList:!0,subtree:!0});L(()=>t.disconnect()),L(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){he(t)?(s.textContent="",s.append(t)):(It(null,s),It(t,s)),s.style.display||(s.style.display="contents");const n=s.firstElementChild;if(!n)return;const a=s.getAttribute("data-class");a&&n.classList.add(...a.split(" "))}Ha(t){if(t&&!t.some(a=>a.addedNodes.length))return;let s=!1,n=this._m.flatMap(a=>[...a.querySelectorAll("slot")]);for(const a of n)!a.hasAttribute("name")||this.elements.has(a)||(this.elements.add(a),s=!0);s&&this.La(this.elements)}}let Re=0,z="data-slot-id";class jt{constructor(t){this._m=t,this.Gc=Nt(this.Ha.bind(this)),this.slots=new zt(t,this.Ha.bind(this))}connect(){this.slots.connect(),this.Ha();const t=new MutationObserver(this.Gc);for(const s of this._m)t.observe(s,{childList:!0});L(()=>t.disconnect())}Ha(){for(const t of this._m)for(const s of t.children){if(s.nodeType!==1)continue;const n=s.getAttribute("slot");if(!n)continue;s.style.display="none";let a=s.getAttribute(z);a||s.setAttribute(z,a=++Re+"");for(const l of this.slots.elements){if(l.getAttribute("name")!==n||l.getAttribute(z)===a)continue;const r=document.importNode(s,!0);n.includes("-icon")&&r.classList.add("vds-icon"),r.style.display="",r.removeAttribute("slot"),this.slots.assign(r,l),l.setAttribute(z,a)}}}}function Fe({name:e,class:t,state:s,paths:n,viewBox:a="0 0 32 32"}){return o`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${a}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${ft(e??s)}
  >
    ${j(n)?Ve(n):i(n)}
  </svg>`}class We{constructor(t){this._m=t,this.dn={},this.gn=!1,this.slots=new zt(t,this.hn.bind(this))}connect(){this.slots.connect()}load(){this.Pf().then(t=>{this.dn=t,this.gn=!0,this.hn()})}*jn(){for(const t of Object.keys(this.dn)){const s=`${t}-icon`;for(const n of this.slots.elements)n.name===s&&(yield{icon:this.dn[t],slot:n})}}hn(){if(this.gn)for(const{icon:t,slot:s}of this.jn())this.slots.assign(t,s)}}class Ee extends We{connect(){super.connect();const{player:t}=k();if(!t.el)return;let s,n=new IntersectionObserver(a=>{var l;(l=a[0])!=null&&l.isIntersecting&&(s==null||s(),s=void 0,this.load())});n.observe(t.el),s=L(()=>n.disconnect())}}const Ut=Wt();function u(){return pt(Ut)}const _e={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,ht=(e,t,s,n)=>{for(var a=n>1?void 0:n?Qe(t,s):t,l=e.length-1,r;l>=0;l--)(r=e[l])&&(a=(n?r(t,s,a):r(a))||a);return n&&a&&Ke(t,s,a),a};const Mt=class Mt extends $e{constructor(){super(...arguments),this.cn=h(()=>{const t=this.$props.when();return this.fn(t)}),this.$m=h(()=>{const t=this.$props.smallWhen();return this.fn(t)}),this.menuContainer=null}get isMatch(){return this.cn()}get isSmallLayout(){return this.$m()}onSetup(){this.a=k(),this.setAttributes({"data-match":this.cn,"data-sm":()=>this.$m()?"":null,"data-lg":()=>this.$m()?null:"","data-size":()=>this.$m()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture});const t=this;Rt(Ut,{...this.$props,when:this.cn,smallWhen:this.$m,userPrefersAnnouncements:x(!0),userPrefersKeyboardAnimations:x(!0),get menuContainer(){return t.menuContainer}})}onAttach(t){Ft(t,this.$props.colorScheme)}fn(t){return t!=="never"&&(be(t)?t:h(()=>t(this.a.player.state))())}};Mt.props=_e;let N=Mt;ht([mt],N.prototype,"menuContainer",2);ht([mt],N.prototype,"isMatch",1);ht([mt],N.prototype,"isSmallLayout",1);function Zt(e,t){A(()=>{const{player:s}=k(),n=s.el;return n&&E(n,"data-layout",t()&&e),()=>n==null?void 0:n.removeAttribute("data-layout")})}function S(e,t){var s;return((s=e())==null?void 0:s[t])??t}function $t(){return i(()=>{const{translations:e,userPrefersAnnouncements:t}=u();return t()?o`<media-announcer .translations=${i(e)}></media-announcer>`:null})}function T(e,t=""){return o`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function K(e){return e.map(t=>T(t))}function d(e,t){return i(()=>S(e,t))}function bt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=v(),n=i(()=>{const l=S(t,"AirPlay"),r=Et(s());return`${l} ${r}`}),a=d(t,"AirPlay");return o`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${n}>
          ${T("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Yt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=v(),n=i(()=>{const l=S(t,"Google Cast"),r=Et(s());return`${l} ${r}`}),a=d(t,"Google Cast");return o`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${n}>
          ${T("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function J({tooltip:e}){const{translations:t}=u(),s=d(t,"Play"),n=d(t,"Pause");return o`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(t,"Play")}
        >
          ${K(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Vt({tooltip:e,ref:t=Se}){const{translations:s}=u(),n=d(s,"Mute"),a=d(s,"Unmute");return o`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(s,"Mute")}
          ${X(t)}
        >
          ${K(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${a}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function gt({tooltip:e}){const{translations:t}=u(),s=d(t,"Closed-Captions On"),n=d(t,"Closed-Captions Off");return o`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(t,"Captions")}
        >
          ${K(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function He(){const{translations:e}=u(),t=d(e,"Enter PiP"),s=d(e,"Exit PiP");return o`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(e,"PiP")}
        >
          ${K(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Xt({tooltip:e}){const{translations:t}=u(),s=d(t,"Enter Fullscreen"),n=d(t,"Exit Fullscreen");return o`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(t,"Fullscreen")}
        >
          ${K(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Gt({backward:e,tooltip:t}){const{translations:s,seekStep:n}=u(),a=e?"Seek Backward":"Seek Forward",l=d(s,a);return o`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${i(()=>(e?-1:1)*n())}
          aria-label=${l}
        >
          ${T(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${d(s,a)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Jt(){const{translations:e}=u(),{live:t}=v(),s=d(e,"Skip To Live"),n=d(e,"LIVE");return t()?o`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function yt(){return i(()=>{const{download:e,translations:t}=u(),s=e();if(ye(s))return null;const{source:n,title:a}=v(),l=n(),r=xe({title:a(),src:l,download:s});return r?o`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${d(t,"Download")}
                href=${r.url+`?download=${r.name}`}
                download=${r.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${d(t,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function xt(){const{translations:e}=u();return o`
    <media-captions
      class="vds-captions"
      .exampleText=${d(e,"Captions look like this")}
    ></media-captions>
  `}function M(){return o`<div class="vds-controls-spacer"></div>`}function te(e,t){return o`
    <media-menu-portal .container=${e} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function ee(e,t){let s=document.querySelector(`body > .${e}`);s||(s=document.createElement("div"),s.style.display="contents",s.classList.add(e),document.body.append(s));const{viewType:n}=v(),{colorScheme:a}=u();return A(()=>{if(!s)return;const l=t();E(s,"data-view-type",n()),E(s,"data-sm",l),E(s,"data-lg",!l),E(s,"data-size",l?"sm":"lg")}),Ft(s,a),s}function se({placement:e,tooltip:t,portal:s}){const{textTracks:n}=k(),{viewType:a,clipStartTime:l,clipEndTime:r}=v(),{translations:p,thumbnails:c,menuContainer:$,noModal:f,menuGroup:m,smallWhen:b}=u();if(h(()=>{var q;const V=l(),F=r()||1/0,H=x(null);_t(n,"chapters",H.set);const W=(q=H())==null?void 0:q.cues.filter(Pt=>Pt.startTime<=F&&Pt.endTime>=V);return!(W!=null&&W.length)})())return null;const y=h(()=>f()?U(e):b()?null:U(e)),I=h(()=>!b()&&m()==="bottom"&&a()==="video"?26:0),R=x(!1);function ot(){R.set(!0)}function C(){R.set(!1)}const w=o`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${i(y)}
      offset=${i(I)}
    >
      ${i(()=>R()?o`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${i(c)}
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
        `:null)}
    </media-menu-items>
  `;return o`
    <media-menu class="vds-chapters-menu vds-menu" @open=${ot} @close=${C}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(p,"Chapters")}
          >
            ${T("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${vt(t)?i(t):t}
        >
          ${d(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?te($,w):w}
    </media-menu>
  `}function Ct(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}let qe=0;function D({label:e="",value:t="",children:s}){if(!e)return o`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n=`vds-menu-section-${++qe}`;return o`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${e}</header>
        ${t?o`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function Q({label:e,children:t}){return o`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function B({label:e,icon:t,hint:s}){return o`
    <media-menu-button class="vds-menu-item">
      ${T("menu-arrow-left","vds-menu-close-icon")}
      ${t?T(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${i(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?i(s):null} </span>
      ${T("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function ze({value:e=null,options:t,hideLabel:s=!1,children:n=null,onChange:a=null}){function l(r){const{value:p,label:c}=r;return o`
      <media-radio class="vds-radio" value=${p}>
        ${T("menu-radio-check")}
        ${s?null:o`
              <span class="vds-radio-label" data-part="label">
                ${j(c)?c:i(c)}
              </span>
            `}
        ${vt(n)?n(r):n}
      </media-radio>
    `}return o`
    <media-radio-group
      class="vds-radio-group"
      value=${j(e)?e:e?i(e):""}
      @change=${a}
    >
      ${O(t)?t.map(l):i(()=>t().map(l))}
    </media-radio-group>
  `}function je(e){return O(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function tt(){return o`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function et(){return o`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function st({label:e=null,value:t=null,upIcon:s="",downIcon:n="",children:a,isMin:l,isMax:r}){const p=e||t,c=[n?T(n,"down"):null,a,s?T(s,"up"):null];return o`
    <div
      class=${`vds-menu-item vds-menu-slider-item${p?" group":""}`}
      data-min=${i(()=>l()?"":null)}
      data-max=${i(()=>r()?"":null)}
    >
      ${p?o`
            <div class="vds-menu-slider-title">
              ${[e?o`<div>${e}</div>`:null,t?o`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const St={type:"color"},Ue={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},Ze={type:"slider",min:0,max:400,step:25,upIcon:"menu-font-size-up",downIcon:"menu-font-size-down"},wt={type:"slider",min:0,max:100,step:5,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},Ye={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},kt=Wt();function Xe(){return i(()=>{const{hasCaptions:e}=v(),{translations:t}=u();return e()?(Rt(kt,{all:new Set}),o`
      <media-menu class="vds-font-menu vds-menu">
        ${B({label:()=>S(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[D({label:d(t,"Font"),children:[Je(),ts()]}),D({label:d(t,"Text"),children:[es(),ns(),ss()]}),D({label:d(t,"Text Background"),children:[as(),is()]}),D({label:d(t,"Display Background"),children:[os(),ls()]}),D({children:[rs()]})]}
        </media-menu-items>
      </media-menu>
    `):null})}function Je(){return P({group:"font",label:"Family",option:Ue,defaultValue:"pro-sans",cssVarName:"font-family",getCssVarValue(e,t){var n;const s=e==="capitals"?"small-caps":"";return(n=t.el)==null||n.style.setProperty("--media-user-font-variant",s),us(e)}})}function ts(){return P({group:"font",label:"Size",option:Ze,defaultValue:"100%",cssVarName:"font-size",getCssVarValue:nt})}function es(){return P({group:"text",label:"Color",option:St,defaultValue:"#ffffff",cssVarName:"text-color",getCssVarValue(e){return`rgb(${Ct(e)} / var(--media-user-text-opacity, 1))`}})}function ss(){return P({group:"text",label:"Opacity",option:wt,defaultValue:"100%",cssVarName:"text-opacity",getCssVarValue:nt})}function ns(){return P({group:"text",label:"Shadow",option:Ye,defaultValue:"none",cssVarName:"text-shadow",getCssVarValue:ds})}function as(){return P({group:"text-bg",label:"Color",option:St,defaultValue:"#000000",cssVarName:"text-bg",getCssVarValue(e){return`rgb(${Ct(e)} / var(--media-user-text-bg-opacity, 1))`}})}function is(){return P({group:"text-bg",label:"Opacity",option:wt,defaultValue:"100%",cssVarName:"text-bg-opacity",getCssVarValue:nt})}function os(){return P({group:"display",label:"Color",option:St,defaultValue:"#000000",cssVarName:"display-bg",getCssVarValue(e){return`rgb(${Ct(e)} / var(--media-user-display-bg-opacity, 1))`}})}function ls(){return P({group:"display",label:"Opacity",option:wt,defaultValue:"0%",cssVarName:"display-bg-opacity",getCssVarValue:nt})}function rs(){const{translations:e}=u(),t=()=>S(e,"Reset"),s=pt(kt);function n(){s.all.forEach(a=>a())}return o`
    <button class="vds-menu-item" role="menuitem" @click=${n}>
      <span class="vds-menu-item-label">${i(t)}</span>
    </button>
  `}function P({group:e,label:t,option:s,defaultValue:n,cssVarName:a,getCssVarValue:l}){const{player:r}=k(),{translations:p}=u(),c=pt(kt),$=`${e}-${t.toLowerCase()}`,f=x(n),m=()=>S(p,t),b=localStorage.getItem(`vds-player:${$}`);b&&g(b);function g(C){var w;f.set(C),localStorage.setItem(`vds-player:${$}`,C),(w=r.el)==null||w.style.setProperty(`--media-user-${a}`,(l==null?void 0:l(C,r))??C)}c.all.add(y),L(()=>void c.all.delete(y));function y(){g(n),I()}function I(){r.dispatchEvent(new Event("vds-font-change"))}if(s.type==="color"){let C=function(w){g(w.target.value),I()};return Q({label:i(m),children:o`
        <input
          class="vds-color-picker"
          type="color"
          .value=${i(f)}
          @input=${C}
        />
      `})}if(s.type==="slider"){let C=function(q){g(q.detail+"%"),I()};const{min:w,max:V,step:F,upIcon:H,downIcon:W}=s;return st({label:i(m),value:i(f),upIcon:H,downIcon:W,isMin:()=>f()===w+"%",isMax:()=>f()===V+"%",children:o`
        <media-slider
          class="vds-slider"
          min=${w}
          max=${V}
          step=${F}
          key-step=${F}
          .value=${i(()=>parseInt(f()))}
          aria-label=${i(m)}
          @value-change=${C}
          @drag-value-change=${C}
        >
          ${tt()}${et()}
        </media-slider>
      `})}const R=je(s.values),ot=()=>{var V;const C=f(),w=((V=R.find(F=>F.value===C))==null?void 0:V.label)||"";return S(p,j(w)?w:w())};return o`
    <media-menu class=${`vds-${$}-menu vds-menu`}>
      ${B({label:m,hint:ot})}
      <media-menu-items class="vds-menu-items">
        ${ze({value:f,options:R,onChange({detail:C}){g(C),I()}})}
      </media-menu-items>
    </media-menu>
  `}function nt(e){return(parseInt(e)/100).toString()}function us(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function ds(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}function at({label:e,checked:t,defaultChecked:s=!1,storageKey:n,onChange:a}){const{translations:l}=u(),r=n?localStorage.getItem(n):null,p=x(!!(r??s)),c=x(!1),$=i(ke(p)),f=d(l,e);n&&a(Bt(p)),t&&A(()=>void p.set(t()));function m(y){(y==null?void 0:y.button)!==1&&(p.set(I=>!I),n&&localStorage.setItem(n,p()?"1":""),a(p(),y),c.set(!1))}function b(y){Te(y)&&m()}function g(y){y.button===0&&c.set(!0)}return o`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${f}
      aria-checked=${$}
      data-active=${i(()=>c()?"":null)}
      @pointerup=${m}
      @pointerdown=${g}
      @keydown=${b}
    ></div>
  `}function cs(){return i(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${B({label:()=>S(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:[ms(),ps()]}),D({children:[Xe()]})]}
        </media-menu-items>
      </media-menu>
    `})}function ms(){const{userPrefersAnnouncements:e,translations:t}=u(),s="Announcements";return Q({label:d(t,s),children:at({label:s,storageKey:"vds-player::announcements",onChange(n){e.set(n)}})})}function ps(){return i(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:s}=u(),{viewType:n}=v();if(h(()=>n()!=="video"||s())())return null;const l="Keyboard Animations";return Q({label:d(e,l),children:at({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){t.set(r)}})})})}function vs(){return i(()=>{const{noAudioGain:e,translations:t}=u(),{audioTracks:s,canSetAudioGain:n}=v();return h(()=>!(n()&&!e())&&s().length<=1)()?null:o`
      <media-menu class="vds-audio-menu vds-menu">
        ${B({label:()=>S(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[fs(),hs()]}
        </media-menu-items>
      </media-menu>
    `})}function fs(){return i(()=>{const{translations:e}=u(),{audioTracks:t}=v(),s=d(e,"Default");return h(()=>t().length<=1)()?null:D({children:o`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${B({label:()=>S(e,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${s}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function hs(){return i(()=>{const{noAudioGain:e,translations:t}=u(),{canSetAudioGain:s}=v();if(h(()=>!s()||e())())return null;const{audioGain:a}=v();return D({label:d(t,"Boost"),value:i(()=>Math.round(((a()??1)-1)*100)+"%"),children:[st({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:$s(),isMin:()=>((a()??1)-1)*100<=ne(),isMax:()=>((a()??1)-1)*100===ae()})]})})}function $s(){const{translations:e}=u(),t=d(e,"Boost"),s=ne,n=ae,a=bs;return o`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${i(s)}
      max=${i(n)}
      step=${i(a)}
      key-step=${i(a)}
    >
      ${tt()}${et()}
    </media-audio-gain-slider>
  `}function ne(){const{audioGains:e}=u(),t=e();return O(t)?t[0]??0:t.min}function ae(){const{audioGains:e}=u(),t=e();return O(t)?t[t.length-1]??300:t.max}function bs(){const{audioGains:e}=u(),t=e();return O(t)?t[1]-t[0]||25:t.step}function gs(){return i(()=>{const{translations:e}=u(),{hasCaptions:t}=v(),s=d(e,"Off");return t()?o`
      <media-menu class="vds-captions-menu vds-menu">
        ${B({label:()=>S(e,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${s}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function ys(){return i(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-playback-menu vds-menu">
        ${B({label:()=>S(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[D({children:xs()}),Cs(),Ts()]}
        </media-menu-items>
      </media-menu>
    `})}function xs(){const{remote:e}=k(),{translations:t}=u(),s="Loop";return Q({label:d(t,s),children:at({label:s,storageKey:"vds-player::user-loop",onChange(n,a){e.userPrefersLoopChange(n,a)}})})}function Cs(){return i(()=>{const{translations:e}=u(),{canSetPlaybackRate:t,playbackRate:s}=v();return t()?D({label:d(e,"Speed"),value:i(()=>s()===1?S(e,"Normal"):s()+"x"),children:[st({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:ws(),isMin:()=>s()===ie(),isMax:()=>s()===oe()})]}):null})}function ie(){const{playbackRates:e}=u(),t=e();return O(t)?t[0]??0:t.min}function oe(){const{playbackRates:e}=u(),t=e();return O(t)?t[t.length-1]??2:t.max}function Ss(){const{playbackRates:e}=u(),t=e();return O(t)?t[1]-t[0]||.25:t.step}function ws(){const{translations:e}=u(),t=d(e,"Speed"),s=ie,n=oe,a=Ss;return o`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${i(s)}
      max=${i(n)}
      step=${i(a)}
      key-step=${i(a)}
    >
      ${tt()}${et()}
    </media-speed-slider>
  `}function ks(){const{remote:e,qualities:t}=k(),{autoQuality:s,canSetQuality:n,qualities:a}=v(),{translations:l}=u(),r="Auto";return h(()=>!n()||a().length<=1)()?null:Q({label:d(l,r),children:at({label:r,checked:s,onChange(c,$){c?e.requestAutoQuality($):e.changeQuality(t.selectedIndex,$)}})})}function Ts(){return i(()=>{const{hideQualityBitrate:e,translations:t}=u(),{canSetQuality:s,qualities:n,quality:a}=v(),l=h(()=>!s()||n().length<=1),r=h(()=>we(n()));return l()?null:D({label:d(t,"Quality"),value:i(()=>{var m,b;const p=(m=a())==null?void 0:m.height,c=e()?null:(b=a())==null?void 0:b.bitrate,$=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,f=S(t,"Auto");return p?`${p}p${$?` (${$})`:""}`:f}),children:[st({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:Ds(),isMin:()=>r()[0]===a(),isMax:()=>r().at(-1)===a()}),ks()]})})}function Ds(){const{translations:e}=u(),t=d(e,"Quality");return o`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${tt()}${et()}
    </media-quality-slider>
  `}function le({placement:e,portal:t,tooltip:s}){return i(()=>{const{viewType:n}=v(),{translations:a,menuContainer:l,noModal:r,menuGroup:p,smallWhen:c}=u(),$=h(()=>r()?U(e):c()?null:U(e)),f=h(()=>!c()&&p()==="bottom"&&n()==="video"?26:0),m=x(!1);function b(){m.set(!0)}function g(){m.set(!1)}const y=o`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${i($)}
        offset=${i(f)}
      >
        ${i(()=>m()?[ys(),cs(),vs(),gs()]:null)}
      </media-menu-items>
    `;return o`
      <media-menu class="vds-settings-menu vds-menu" @open=${b} @close=${g}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(a,"Settings")}
            >
              ${T("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${vt(s)?i(s):s}
          >
            ${d(a,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?te(l,y):y}
      </media-menu>
    `})}function Tt({orientation:e,tooltip:t}){return i(()=>{const{pointer:s,muted:n,canSetVolume:a}=v();if(s()==="coarse"&&!n())return null;if(!a())return Vt({tooltip:t});const l=x(void 0),r=Ce(l);return o`
      <div class="vds-volume" ?data-active=${i(r)} ${X(l.set)}>
        ${Vt({tooltip:t})}
        <div class="vds-volume-popup">${As({orientation:e})}</div>
      </div>
    `})}function As({orientation:e}={}){const{translations:t}=u(),s=d(t,"Volume");return o`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${ft(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function Dt(){const e=x(void 0),t=x(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:a,disableTimeSlider:l,seekStep:r,noScrubGesture:p}=u(),c=d(n,"Seek"),$=i(l),f=i(()=>t()<a()),m=i(s);return Kt(e,()=>{const b=e();b&&t.set(b.clientWidth)}),o`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${i(r)}
      ?disabled=${$}
      ?no-swipe-gesture=${i(p)}
      ${X(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${f}>
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
          .src=${m}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Ms(){return o`
    <div class="vds-time-group">
      ${i(()=>{const{duration:e}=v();return e()?[o`<media-time class="vds-time" type="current"></media-time>`,o`<div class="vds-time-divider">/</div>`,o`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function Ps(){return i(()=>{const{live:e,duration:t}=v();return e()?Jt():t()?o`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function re(){return i(()=>{const{live:e}=v();return e()?Jt():Ms()})}function ue(){return i(()=>{const{textTracks:e}=k(),{title:t,started:s}=v(),n=x(null);return _t(e,"chapters",n.set),n()&&(s()||!t())?de():o`<media-title class="vds-chapter-title"></media-title>`})}function de(){return o`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class ce extends Ee{async Pf(){const t=(await ge(()=>import("./vidstack-CRlTZX3Z-PBDNdscv.js"),__vite__mapDeps([0,1]))).icons,s={};for(const n of Object.keys(t))s[n]=Fe({name:n,paths:t[n]});return s}}var G;let Is=(G=class extends N{},G.props={...lt(G,G,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576},G);function Os(){return[$t(),xt(),o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Gt({backward:!0,tooltip:"top start"}),J({tooltip:"top"}),Gt({tooltip:"top"}),Vs(),Dt(),Ps(),Tt({orientation:"vertical",tooltip:"top"}),gt({tooltip:"top"}),yt(),bt({tooltip:"top"}),Gs()]}
        </media-controls-group>
      </media-controls>
    `]}function Vs(){return i(()=>{let e=x(void 0),t=x(!1),s=k(),{title:n,started:a,currentTime:l,ended:r}=v(),{translations:p}=u(),c=Ae(e),$=()=>a()||l()>0;const f=()=>{const g=r()?"Replay":$()?"Continue":"Play";return`${S(p,g)}: ${n()}`};A(()=>{var g;c()&&document.activeElement===document.body&&((g=s.player.el)==null||g.focus())});function m(){const g=e(),y=!!g&&!c()&&g.clientWidth<g.children[0].clientWidth;g&&Me(g,"vds-marquee",y),t.set(y)}function b(){return o`
        <span class="vds-title-text">
          ${i(f)}${i(()=>$()?de():null)}
        </span>
      `}return Kt(e,m),n()?o`
          <span class="vds-title" title=${i(f)} ${X(e.set)}>
            ${[b(),i(()=>t()&&!c()?b():null)]}
          </span>
        `:M()})}function Gs(){const e="top end";return[se({tooltip:"top",placement:e,portal:!0}),le({tooltip:"top end",placement:e,portal:!0})]}const Z=class Z extends Qt(qt,Is){constructor(){super(...arguments),this.en=x(!1)}onSetup(){this.forwardKeepAlive=!1,this.a=k(),this.classList.add("vds-audio-layout"),this.menuContainer=ee("vds-audio-layout",()=>this.isSmallLayout);const{pointer:t}=this.a.$state;A(()=>{t()==="coarse"&&A(this.rn.bind(this))}),L(()=>{var s;return(s=this.menuContainer)==null?void 0:s.remove()})}onConnect(){Zt("audio",()=>this.isMatch),A(()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new jt(t).connect():new ce(t).connect()})}render(){return i(this.Zm.bind(this))}Zm(){return this.isMatch?Os():null}rn(){if(!this.en()){rt(this,"pointerdown",this.sn.bind(this),{capture:!0});return}rt(this,"pointerdown",t=>t.stopPropagation()),rt(window,"pointerdown",this.tn.bind(this))}sn(t){const{target:s}=t;De(s)&&s.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.en.set(!0))}tn(){this.en.set(!1),this.removeAttribute("data-scrubbing")}};Z.tagName="media-audio-layout",Z.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let ut=Z;const _=class _ extends N{};_.props={...lt(_,_,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380};let dt=_;function me(){return i(()=>{const e=k(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:s}=u();if(h(()=>t()||!s())())return null;const a=x(!1),{lastKeyboardAction:l}=e.$state;A(()=>{a.set(!!l());const m=setTimeout(()=>a.set(!1),500);return()=>{a.set(!1),window.clearTimeout(m)}});const r=h(()=>{var b;const m=(b=l())==null?void 0:b.action;return m&&a()?Pe(m):null}),p=h(()=>`vds-kb-action${a()?"":" hidden"}`),c=h(Ls),$=h(()=>{const m=Ns();return m?Ie(m):null});function f(){const m=$();return m?o`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${m}</div>
        </div>
      `:null}return o`
      <div class=${i(p)} data-action=${i(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${i(c)}</div>
        </div>
        ${i(()=>Ne(l(),f()))}
      </div>
    `})}function Ls(){var n;const{$state:e}=k(),t=(n=e.lastKeyboardAction())==null?void 0:n.action,s=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":Lt(e.volume(),s);case"volumeUp":case"volumeDown":return Lt(e.volume(),s);default:return""}}function Lt(e,t){return`${Math.round(e*t*100)}%`}function Ns(){var s;const{$state:e}=k();switch((s=e.lastKeyboardAction())==null?void 0:s.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function Bs(){return[$t(),pe(),it(),me(),xt(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        ${[Fs(),M(),o`<media-controls-group class="vds-controls-group"></media-controls-group>`,M(),o`
            <media-controls-group class="vds-controls-group">
              ${Dt()}
            </media-controls-group>
          `,o`
            <media-controls-group class="vds-controls-group">
              ${[J({tooltip:"top start"}),Tt({orientation:"horizontal",tooltip:"top"}),re(),ue(),gt({tooltip:"top"}),Rs(),bt({tooltip:"top"}),Yt({tooltip:"top"}),yt(),He(),Xt({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Rs(){return i(()=>{const{menuGroup:e}=u();return e()==="bottom"?At():null})}function Fs(){return o`
    <media-controls-group class="vds-controls-group">
      ${i(()=>{const{menuGroup:e}=u();return e()==="top"?[M(),At()]:null})}
    </media-controls-group>
  `}function Ws(){return[$t(),pe(),it(),xt(),me(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[bt({tooltip:"top start"}),Yt({tooltip:"bottom start"}),M(),gt({tooltip:"bottom"}),yt(),At(),Tt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${M()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[M(),J({tooltip:"top"}),M()]}
        </media-controls-group>

        ${M()}

        <media-controls-group class="vds-controls-group">
          ${[re(),ue(),Xt({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${Dt()}
        </media-controls-group>
      </media-controls>
    `,_s()]}function Es(){return o`
    <div class="vds-load-container">
      ${[it(),J({tooltip:"top"})]}
    </div>
  `}function _s(){return i(()=>{const{duration:e}=v();return e()===0?null:o`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function it(){return o`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function At(){const{menuGroup:e,smallWhen:t}=u(),s=()=>e()==="top"||t()?"bottom":"top",n=h(()=>`${s()} ${e()==="top"?"end":"center"}`),a=h(()=>`${s()} end`);return[se({tooltip:n,placement:a,portal:!0}),le({tooltip:n,placement:a,portal:!0})]}function pe(){return i(()=>{const{noGestures:e}=u();return e()?null:o`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}const Y=class Y extends Qt(qt,dt){onSetup(){this.forwardKeepAlive=!1,this.a=k(),this.classList.add("vds-video-layout"),this.menuContainer=ee("vds-video-layout",()=>this.isSmallLayout),L(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){Zt("video",()=>this.isMatch),A(()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new jt(t).connect():new ce(t).connect()})}render(){return i(this.Zm.bind(this))}Zm(){const{load:t}=this.a.$props,{canLoad:s,streamType:n,nativeControls:a}=this.a.$state;return!a()&&this.isMatch?t()==="play"&&!s()?Es():n()==="unknown"?it():this.isSmallLayout?Ws():Bs():null}};Y.tagName="media-video-layout",Y.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let ct=Y;Ht(ut);Ht(ct);
