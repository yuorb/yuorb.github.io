var ie=Object.getPrototypeOf;var le=Reflect.get;var Z=(e,t,s)=>le(ie(e),s,t);import{c as _,p as Pt,e as T,w as Dt,o as P,g as B,C as re,u as g,q as Mt,ag as ue,W as At,F as st,A as at,ah as x,a9 as ce,k as C,ai as Ot,aj as nt,x as Vt,ak as W,i as It,H as ot,l as j,al as de,am as pe,an as me,ao as Ct,s as Lt,ap as ve,y as fe,aq as be,ar as $e,as as m,at as he,ae as ge,a1 as ye,T as Bt,a0 as Ft,d as it}from"./vidstack-iVChOPoI-jn5iU3Z9.js";import{e as _e,c as xe,t as wt,A as Ce,l as lt,D as we,x as n,o as Te,n as N,L as rt,a as Rt}from"./vidstack-AMhtWyPB-LYXNAf2v.js";import{_ as Nt}from"./app-DiurdpuK.js";class ke extends xe{constructor(t){super(t),this.h=null,this.w=!1,this.ra=null,this.w=t.type===wt.ATTRIBUTE||t.type===wt.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Si()),this.h?this.el(Pt(this.h)):Ce}reconnected(){this.Si()}disconnected(){var t;(t=this.ra)==null||t.call(this),this.ra=null}Si(){this.h&&(this.ra=T(this.o.bind(this)))}el(t){return this.w?lt(t):t}hl(t){this.setValue(this.el(t))}o(){var t;this.hl((t=this.h)==null?void 0:t.call(this))}}function i(e){return _e(ke)(_(e))}class Et{constructor(t,s){this.Wj=t,this.Ca=s,this.elements=new Set,this.vf=Dt(this.ea.bind(this))}connect(){this.ea();const t=new MutationObserver(this.vf);t.observe(this.Wj,{childList:!0,subtree:!0}),P(()=>t.disconnect()),P(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){t instanceof Node?(s.textContent="",s.append(t)):we(t,s),s.style.display||(s.style.display="contents");const a=s.firstElementChild;if(!a)return;const o=s.getAttribute("data-class");o&&a.classList.add(...o.split(" "))}ea(t){if(t&&!t.some(o=>o.addedNodes.length))return;let s=!1,a=this.Wj.querySelectorAll("slot");for(const o of a)!o.hasAttribute("name")||this.elements.has(o)||(this.elements.add(o),s=!0);s&&this.Ca(this.elements)}}let Se=0,E="data-slot-id";class ut{constructor(t){this.Wj=t,this.vf=Dt(this.ea.bind(this)),this.slots=new Et(t,this.ea.bind(this))}connect(){this.slots.connect(),this.ea();const t=new MutationObserver(this.vf);t.observe(this.Wj,{childList:!0}),P(()=>t.disconnect())}ea(){for(const t of this.Wj.children){if(t.nodeType!==1)continue;const s=t.getAttribute("slot");if(!s)continue;t.style.display="none";let a=t.getAttribute(E);a||t.setAttribute(E,a=++Se+"");for(const o of this.slots.elements){if(o.getAttribute("name")!==s||o.getAttribute(E)===a)continue;const l=document.importNode(t,!0);s.includes("-icon")&&l.classList.add("vds-icon"),l.style.display="",l.removeAttribute("slot"),this.slots.assign(l,o),o.setAttribute(E,a)}}}}function jt({name:e,class:t,state:s,paths:a,viewBox:o="0 0 32 32"}){return n`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${o}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${lt(e??s)}
  >
    ${B(a)?Te(a):i(a)}
  </svg>`}class Pe{constructor(t){this.Wj=t,this.Zj={},this.bk=!1,this.slots=new Et(t,this.ck.bind(this))}connect(){this.slots.connect(),P(this.disconnect.bind(this))}load(){this.xe().then(t=>{this.Zj=t,this.bk=!0,this.ck()})}disconnect(){for(const{slot:t}of this.dk())t.textContent=""}*dk(){for(const t of Object.keys(this.Zj)){const s=`${t}-icon`;for(const a of this.slots.elements)a.name===s&&(yield{icon:this.Zj[t],slot:a})}}ck(){if(this.bk)for(const{icon:t,slot:s}of this.dk())this.slots.assign(t,s)}}class Wt extends Pe{connect(){super.connect();const t=this.Wj.parentElement;if(!t)return;let s,a=new IntersectionObserver(o=>{var l;(l=o[0])!=null&&l.isIntersecting&&(s==null||s(),s=void 0,this.load())});a.observe(t),s=P(()=>a.disconnect())}}const Gt=At();function c(){return st(Gt)}const De={when:!1,smallWhen:!1,thumbnails:null,customIcons:!1,translations:null,menuGroup:"bottom",noModal:!1,sliderChaptersMinWidth:325,disableTimeSlider:!1,noGestures:!1,noKeyboardActionDisplay:!1,seekStep:10};var Me=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,ct=(e,t,s,a)=>{for(var o=a>1?void 0:a?Ae(t,s):t,l=e.length-1,r;l>=0;l--)(r=e[l])&&(o=(a?r(t,s,o):r(o))||o);return a&&o&&Me(t,s,o),o};const yt=class yt extends re{constructor(){super(...arguments),this._m=_(()=>{const t=this.$props.when();return this.$m(t)}),this.Ym=_(()=>{const t=this.$props.smallWhen();return this.$m(t)}),this.menuContainer=null}get isMatch(){return this._m()}get isSmallLayout(){return this.Ym()}onSetup(){this.a=g(),this.setAttributes({"data-match":this._m,"data-size":()=>this.Ym()?"sm":null});const t=this;Mt(Gt,{...this.$props,when:this._m,smallWhen:this.Ym,get menuContainer(){return t.menuContainer}})}$m(t){return t!=="never"&&(ue(t)?t:_(()=>t(this.a.player.state))())}};yt.props=De;let I=yt;ct([at],I.prototype,"menuContainer",2);ct([at],I.prototype,"isMatch",1);ct([at],I.prototype,"isSmallLayout",1);function h(e,t){var s;return((s=e())==null?void 0:s[t])??t}function F({label:e,icon:t,hint:s}){return n`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      ${t?n`<slot name="${t}-icon" data-class="vds-menu-button-icon"></slot>`:null}
      <span class="vds-menu-button-label">${i(e)}</span>
      <span class="vds-menu-button-hint" data-part="hint">${s?i(s):null} </span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `}function Oe({value:e=null,options:t,hideLabel:s=!1,children:a=null,onChange:o=null}){function l(r){const{value:b,label:u}=r;return n`
      <media-radio class="vds-radio" value=${b}>
        <div class="vds-radio-check"></div>
        ${s?null:n`
              <span class="vds-radio-label" data-part="label">
                ${B(u)?u:i(u)}
              </span>
            `}
        ${nt(a)?a(r):a}
      </media-radio>
    `}return n`
    <media-radio-group
      class="vds-radio-group"
      value=${B(e)?e:e?i(e):""}
      @change=${o}
    >
      ${It(t)?t.map(l):i(()=>t().map(l))}
    </media-radio-group>
  `}function Ve(e){return It(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}const dt=["White","Yellow","Green","Cyan","Blue","Magenta","Red","Black"],pt=["0%","25%","50%","75%","100%"],Ie={"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"},Le=["50%","75%","100%","150%","200%","300%","400%"],Be=["None","Drop Shadow","Raised","Depressed","Outline"],mt=At();function Fe(){return i(()=>{const{hasCaptions:e}=x(),{translations:t}=c();return e()?(Mt(mt,{all:new Set}),n`
      <media-menu class="vds-font-menu vds-menu">
        ${F({label:()=>h(t,"Font Styles"),icon:"menu-font"})}
        <media-menu-items class="vds-menu-items">
          ${Re()}${Ne()}${Ee()}${je()}${We()}
          ${Ge()}${qe()}${Ke()}
          ${Ue()}${ze()}
        </media-menu-items>
      </media-menu>
    `):null})}function Re(){return A({label:"Font Family",options:Ie,defaultValue:"pro-sans",cssVarName:"font-family",getCssVarValue(e,t){var a;const s=e==="capitals"?"small-caps":"";return(a=t.el)==null||a.style.setProperty("--media-user-font-variant",s),He(e)}})}function Ne(){return A({label:"Font Size",options:Le,defaultValue:"100%",cssVarName:"font-size",getCssVarValue:K})}function Ee(){return A({label:"Text Color",options:dt,defaultValue:"white",cssVarName:"text-color",getCssVarValue(e){return`rgb(${vt(e)} / var(--media-user-text-opacity, 1))`}})}function je(){return A({label:"Text Opacity",options:pt,defaultValue:"100%",cssVarName:"text-opacity",getCssVarValue:K})}function We(){return A({label:"Text Shadow",options:Be,defaultValue:"none",cssVarName:"text-shadow",getCssVarValue:Ye})}function Ge(){return A({label:"Background Color",options:dt,defaultValue:"black",cssVarName:"text-bg",getCssVarValue(e){return`rgb(${vt(e)} / var(--media-user-text-bg-opacity, 1))`}})}function qe(){return A({label:"Background Opacity",options:pt,defaultValue:"100%",cssVarName:"text-bg-opacity",getCssVarValue:K})}function Ke(){return A({label:"Display Background Color",options:dt,defaultValue:"black",cssVarName:"display-bg",getCssVarValue(e){return`rgb(${vt(e)} / var(--media-user-display-bg-opacity, 1))`}})}function Ue(){return A({label:"Display Background Opacity",options:pt,defaultValue:"0%",cssVarName:"display-bg-opacity",getCssVarValue:K})}function ze(){const{translations:e}=c(),t=()=>h(e,"Reset"),s=st(mt);function a(){s.current?s.current():s.all.forEach(o=>o())}return n`
    <button class="vds-menu-button" role="menuitem" @click=${a}>
      <span class="vds-menu-button-label">${i(t)}</span>
    </button>
  `}function A({label:e,options:t,defaultValue:s,cssVarName:a,getCssVarValue:o}){const{player:l}=g(),{translations:r}=c(),b=st(mt),u=Ve(t),f=`${e.toLowerCase().replace(/\s/g,"-")}`,d=C(s),y=()=>h(r,e),k=()=>{var xt;const S=d(),L=((xt=u.find(oe=>oe.value===S))==null?void 0:xt.label)||"";return h(r,B(L)?L:L())},$=localStorage.getItem(`vds-player:${f}`);$&&D($);function D(S){var L;d.set(S),localStorage.setItem(`vds-player:${f}`,S),(L=l.el)==null||L.style.setProperty(`--media-user-${a}`,(o==null?void 0:o(S,l))??S)}b.all.add(O),P(()=>void b.all.delete(O));function O(){D(s)}function w(){b.current=O}function M(){b.current=void 0}return n`
    <media-menu class=${`vds-${f}-menu vds-menu`} @open=${w} @close=${M}>
      ${F({label:y,hint:k})}
      <media-menu-items class="vds-menu-items">
        ${Oe({value:d,options:u,onChange({detail:S}){D(S)}})}
      </media-menu-items>
    </media-menu>
  `}function K(e){return(parseInt(e)/100).toString()}function vt(e){switch(e){case"white":return"255 255 255";case"yellow":return"255 255 0";case"green":return"0 128 0";case"cyan":return"0 255 255";case"blue":return"0 0 255";case"magenta":return"255 0 255";case"red":return"255 0 0";case"black":return"0 0 0"}}function He(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function Ye(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}function qt({tooltip:e}){const{translations:t}=c(),{remotePlaybackState:s}=x(),a=i(()=>{const l=h(t,"AirPlay"),r=Vt(s());return`${l} ${r}`}),o=p(t,"AirPlay");return n`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${a}>
          <slot name="airplay-icon" data-class="vds-airplay-icon"></slot>
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Kt({tooltip:e}){const{translations:t}=c(),{remotePlaybackState:s}=x(),a=i(()=>{const l=h(t,"Google Cast"),r=Vt(s());return`${l} ${r}`}),o=p(t,"Google Cast");return n`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${a}>
          <slot name="google-cast-icon" data-class="vds-google-cast-icon"></slot>
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function U({tooltip:e}){const{translations:t}=c(),{paused:s}=x(),a=i(()=>h(t,s()?"Play":"Pause")),o=p(t,"Play"),l=p(t,"Pause");return n`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button class="vds-play-button vds-button" aria-label=${a}>
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${o}</span>
        <span class="vds-pause-tooltip-text">${l}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ft({tooltip:e,ref:t=ce}){const{translations:s}=c(),{muted:a}=x(),o=i(()=>h(s,(a(),"Unmute"))),l=p(s,"Mute"),r=p(s,"Unmute");return n`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button class="vds-mute-button vds-button" aria-label=${o} ${N(t)}>
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${r}</span>
        <span class="vds-unmute-tooltip-text">${l}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function bt({tooltip:e}){const{translations:t}=c(),{textTrack:s}=x(),a=i(()=>h(t,s()?"Closed-Captions Off":"Closed-Captions On")),o=p(t,"Closed-Captions On"),l=p(t,"Closed-Captions Off");return n`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button class="vds-caption-button vds-button" aria-label=${a}>
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${l}</span>
        <span class="vds-cc-off-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Qe(){const{translations:e}=c(),{pictureInPicture:t}=x(),s=i(()=>h(e,t()?"Exit PiP":"Enter PiP")),a=p(e,"Enter PiP"),o=p(e,"Exit PiP");return n`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button class="vds-pip-button vds-button" aria-label=${s}>
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${a}</span>
        <span class="vds-pip-exit-tooltip-text">${o}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ut({tooltip:e}){const{translations:t}=c(),{fullscreen:s}=x(),a=i(()=>h(t,s()?"Exit Fullscreen":"Enter Fullscreen")),o=p(t,"Enter Fullscreen"),l=p(t,"Exit Fullscreen");return n`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button class="vds-fullscreen-button vds-button" aria-label=${a}>
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${o}</span>
        <span class="vds-fs-exit-tooltip-text">${l}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Tt({backward:e,tooltip:t}){const{translations:s,seekStep:a}=c(),o=e?"Seek Backward":"Seek Forward",l=p(s,o);return n`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${i(()=>(e?-1:1)*a())}
          aria-label=${l}
        >
          ${e?n`<slot name="seek-backward-icon"></slot>`:n`<slot name="seek-forward-icon"></slot>`}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${p(s,o)}
      </media-tooltip-content>
    </media-tooltip>
  `}function zt({orientation:e}={}){const{translations:t}=c(),s=p(t,"Volume");return n`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${lt(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function $t(){const e=C(void 0),t=C(0),{thumbnails:s,translations:a,sliderChaptersMinWidth:o,disableTimeSlider:l,seekStep:r}=c(),b=p(a,"Seek"),u=i(l),f=i(()=>t()<o()),d=i(s);return Ot(e,()=>{const y=e();y&&t.set(y.clientWidth)}),n`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${b}
      key-step=${i(r)}
      ?disabled=${u}
      ${N(e.set)}
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
          .src=${d}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Ht(){const{translations:e}=c(),{live:t}=x(),s=p(e,"Skip To Live"),a=p(e,"LIVE");return t()?n`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${a}</span>
        </media-live-button>
      `:null}function Ze(){return n`
    <div class="vds-time-group">
      ${i(()=>{const{duration:e}=x();return e()?[n`<media-time class="vds-time" type="current"></media-time>`,n`<div class="vds-time-divider">/</div>`,n`<media-time class="vds-time" type="duration"></media-time>`].filter(t=>t||null):null})}
    </div>
  `}function Xe(){return i(()=>{const{live:e,duration:t}=x();return e()?Ht():t()?n`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function z(){return n`<div class="vds-controls-spacer"></div>`}function Yt(){return i(()=>{const{live:e}=x();return e()?Ht():Ze()})}function Qt(e,t){return n`
    <media-menu-portal .container=${e} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function ht(){return n`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}function Zt({placement:e,tooltip:t,portal:s}){const{viewType:a}=x(),{translations:o,thumbnails:l,menuContainer:r,noModal:b,menuGroup:u,smallWhen:f}=c(),d=_(()=>b()?W(e):f()?null:W(e)),y=_(()=>!f()&&u()==="bottom"&&a()==="video"?26:0),k=n`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${i(d)}
      offset=${i(y)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        .thumbnails=${i(l)}
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
  `;return n`
    <media-menu class="vds-chapters-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${p(o,"Chapters")}
          >
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${nt(t)?i(t):t}
        >
          ${p(o,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?Qt(r,k):k}
    </media-menu>
  `}function Xt({placement:e,portal:t,tooltip:s}){return i(()=>{const{viewType:a,canSetPlaybackRate:o,canSetQuality:l,qualities:r,audioTracks:b,hasCaptions:u}=x(),{translations:f,menuContainer:d,noModal:y,menuGroup:k,smallWhen:$}=c(),D=_(()=>y()?W(e):$()?null:W(e)),O=_(()=>!$()&&k()==="bottom"&&a()==="video"?26:0);if(!_(()=>o()||!!(l()&&r().length)||!!b().length||u())())return null;const M=n`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${i(D)}
        offset=${i(O)}
      >
        ${[Je(),ts(),es(),ss(),Fe()]}
      </media-menu-items>
    `;return n`
      <media-menu class="vds-settings-menu vds-menu">
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${p(f,"Settings")}
            >
              <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${nt(s)?i(s):s}
          >
            ${p(f,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?Qt(d,M):M}
      </media-menu>
    `})}function Je(){const{translations:e}=c(),t=p(e,"Default");return n`
    <media-menu class="vds-audio-menu vds-menu">
      ${F({label:()=>h(e,"Audio"),icon:"menu-audio"})}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${t}
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
  `}function ts(){const{translations:e}=c(),t=p(e,"Normal");return n`
    <media-menu class="vds-speed-menu vds-menu">
      ${F({label:()=>h(e,"Speed"),icon:"menu-speed"})}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${t}
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
  `}function es(){const{translations:e}=c(),t=p(e,"Auto");return n`
    <media-menu class="vds-quality-menu vds-menu">
      ${F({label:()=>h(e,"Quality"),icon:"menu-quality"})}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${t}
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
  `}function ss(){const{translations:e}=c(),t=p(e,"Off");return n`
    <media-menu class="vds-captions-menu vds-menu">
      ${F({label:()=>h(e,"Captions"),icon:"menu-captions"})}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${t}
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
  `}function Jt(e){let t=document.querySelector(`body > .${e}`);return t||(t=document.createElement("div"),t.style.display="contents",t.classList.add(e),document.body.append(t)),t}function p(e,t){return i(()=>h(e,t))}class te extends Wt{async xe(){const t=(await Nt(()=>import("./vidstack-EWeIzV2w-bdRKJ_hs.js"),__vite__mapDeps([0,1]))).icons,s={};for(const a of Object.keys(t))s[a]=jt({name:a,paths:t[a]});return s}}var V;let as=(V=class extends I{},V.props={...Z(V,V,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576},V);function ns(){return[n`<media-captions class="vds-captions"></media-captions>`,n`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Tt({backward:!0,tooltip:"top start"}),U({tooltip:"top"}),Tt({tooltip:"top"}),os(),$t(),Xe(),is(),bt({tooltip:"top"}),ls()]}
        </media-controls-group>
      </media-controls>
    `]}function os(){return i(()=>{let e=C(void 0),t=C(!1),s=g(),{title:a,started:o,currentTime:l,ended:r}=x(),{translations:b}=c(),u=de(e),f=()=>o()||l()>0;const d=()=>{const $=r()?"Replay":f()?"Continue":"Play";return`${h(b,$)}: ${a()}`};T(()=>{var $;u()&&document.activeElement===document.body&&(($=s.player.el)==null||$.focus())});function y(){const $=e(),D=!!$&&!u()&&$.clientWidth<$.children[0].clientWidth;$&&ve($,"vds-marquee",D),t.set(D)}function k(){return n`
        <span class="vds-title-text">
          ${i(d)}${i(()=>f()?ht():null)}
        </span>
      `}return Ot(e,y),a()?n`
          <span class="vds-title" title=${i(d)} ${N(e.set)}>
            ${[k(),i(()=>t()&&!u()?k():null)]}
          </span>
        `:z()})}function is(){return i(()=>{const{pointer:e,muted:t}=x();if(e()==="coarse"&&!t())return null;const s=C(void 0),a=C(void 0),o=C(void 0),l=pe(s),r=me(a);return T(()=>{r()&&(Ct(s,a,"trigger"),Ct(s,o,"popper"))}),n`
      <div class="vds-volume" ?data-active=${i(l)} ${N(s.set)}>
        ${ft({tooltip:"top",ref:a.set})}
        <div class="vds-volume-popup" ${N(o.set)}>
          ${zt({orientation:"vertical"})}
        </div>
      </div>
    `})}function ls(){const e="top end";return[Zt({tooltip:"top",placement:e,portal:!0}),Xt({tooltip:"top end",placement:e,portal:!0})]}const G=class G extends ot(rt,as){constructor(){super(...arguments),this.jn=C(!1)}onSetup(){this.forwardKeepAlive=!1,this.a=g(),this.classList.add("vds-audio-layout"),this.menuContainer=Jt("vds-audio-layout"),T(()=>{this.menuContainer&&Lt(this.menuContainer,"data-size",this.isSmallLayout&&"sm")});const{pointer:t}=this.a.$state;T(()=>{t()==="coarse"&&T(this.kn.bind(this))}),P(()=>{var s;return(s=this.menuContainer)==null?void 0:s.remove()})}onConnect(){var t;(t=this.a.player.el)==null||t.setAttribute("data-layout","audio"),P(()=>{var s;return(s=this.a.player.el)==null?void 0:s.removeAttribute("data-layout")}),T(()=>{this.$props.customIcons()?new ut(this).connect():new te(this).connect()})}render(){return n`${i(this._j.bind(this))}`}_j(){return this.isMatch?ns():null}kn(){if(!this.jn()){j(this,"pointerdown",this.ln.bind(this),{capture:!0});return}j(this,"pointerdown",t=>t.stopPropagation()),j(window,"pointerdown",this.mn.bind(this))}ln(t){const{target:s}=t;s instanceof HTMLElement&&s.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.jn.set(!0))}mn(){this.jn.set(!1),this.removeAttribute("data-scrubbing")}};G.tagName="media-audio-layout",G.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let X=G;const R=class R extends I{};R.props={...Z(R,R,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380};let J=R;function rs(){return i(()=>{const e=C(!1),t=g(),{noKeyboardActionDisplay:s}=c(),{lastKeyboardAction:a}=t.$state;if(s())return null;T(()=>{e.set(!!a());const d=setTimeout(()=>e.set(!1),500);return()=>{e.set(!1),window.clearTimeout(d)}});const o=_(()=>{var y;const d=(y=a())==null?void 0:y.action;return d&&e()?fe(d):null}),l=_(()=>`vds-kb-action${e()?"":" hidden"}`),r=_(us),b=_(ds),u=_(()=>{const d=cs();return d?be(d):null});function f(){return u()?n`
            <div class="vds-kb-bezel" role="status" aria-label=${i(b)}>
              <div class="vds-kb-icon">${u()}</div>
            </div>
          `:null}return n`
      <div class=${i(l)} data-action=${i(o)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${i(r)}</div>
        </div>
        ${i(f)}
      </div>
    `})}function us(){var s;const{$state:e}=g();switch((s=e.lastKeyboardAction())==null?void 0:s.action){case"toggleMuted":return e.muted()?"0%":kt(e.volume());case"volumeUp":case"volumeDown":return kt(e.volume());default:return""}}function kt(e){return`${Math.round(e*100)}%`}function cs(){var s;const{$state:e}=g();switch((s=e.lastKeyboardAction())==null?void 0:s.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";default:return null}}function ds(){const e=ps(),{translations:t}=c();return e?h(t,e):null}function ps(){var a,o;const{$state:e}=g(),t=(a=e.lastKeyboardAction())==null?void 0:a.action,{translations:s}=c();switch(t){case"togglePaused":return e.paused()?"Pause":"Play";case"toggleFullscreen":return e.fullscreen()?"Enter Fullscreen":"Exit Fullscreen";case"togglePictureInPicture":return e.pictureInPicture()?"Enter PiP":"Exit PiP";case"toggleCaptions":return e.textTrack()?"Closed-Captions On":"Closed-Captions Off";case"toggleMuted":case"volumeUp":case"volumeDown":return e.muted()||e.volume()===0?"Mute":`${Math.round(e.volume()*100)}% ${((o=s())==null?void 0:o.Volume)??"Volume"}`;default:return null}}function ms(){return[ee(),H(),rs(),n`<media-captions class="vds-captions"></media-captions>`,n`<div class="vds-scrim"></div>`,n`
      <media-controls class="vds-controls">
        ${[fs(),z(),n`
            <media-controls-group class="vds-controls-group">
              ${$t()}
            </media-controls-group>
          `,n`
            <media-controls-group class="vds-controls-group">
              ${[U({tooltip:"top start"}),ft({tooltip:"top"}),zt(),Yt(),ht(),bt({tooltip:"top"}),vs(),qt({tooltip:"top"}),Kt({tooltip:"top"}),Qe(),Ut({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function vs(){return i(()=>{const{menuGroup:e}=c();return e()==="bottom"?gt():null})}function fs(){return n`
    <media-controls-group class="vds-controls-group">
      ${i(()=>{const{menuGroup:e}=c();return e()==="top"?[z(),gt()]:null})}
    </media-controls-group>
  `}function bs(){return[ee(),H(),n`<media-captions class="vds-captions"></media-captions>`,n`<div class="vds-scrim"></div>`,n`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[qt({tooltip:"top start"}),Kt({tooltip:"bottom start"}),z(),bt({tooltip:"bottom"}),gt(),ft({tooltip:"bottom end"})]}
        </media-controls-group>

        <div class="vds-controls-group">${U({tooltip:"top"})}</div>

        <media-controls-group class="vds-controls-group">
          ${[Yt(),ht(),Ut({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${$t()}
        </media-controls-group>
      </media-controls>
    `,hs()]}function $s(){return n`
    <div class="vds-load-container">
      ${[H(),U({tooltip:"top"})]}
    </div>
  `}function hs(){return i(()=>{const{duration:e}=x();return e()===0?null:n`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function H(){return n`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function gt(){const{menuGroup:e,smallWhen:t}=c(),s=()=>e()==="top"||t()?"bottom":"top",a=_(()=>`${s()} ${e()==="top"?"end":"center"}`),o=_(()=>`${s()} end`);return[Zt({tooltip:a,placement:o,portal:!0}),Xt({tooltip:a,placement:o,portal:!0})]}function ee(){return i(()=>{const{noGestures:e}=c();return e()?null:n`
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
    `})}const q=class q extends ot(rt,J){onSetup(){this.forwardKeepAlive=!1,this.a=g(),this.classList.add("vds-video-layout"),this.menuContainer=Jt("vds-video-layout"),T(()=>{this.menuContainer&&Lt(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),P(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){var t;(t=this.a.player.el)==null||t.setAttribute("data-layout","video"),P(()=>{var s;return(s=this.a.player.el)==null?void 0:s.removeAttribute("data-layout")}),T(()=>{this.$props.customIcons()?new ut(this).connect():new te(this).connect()})}render(){return n`${i(this._j.bind(this))}`}_j(){const{load:t}=this.a.$props,{canLoad:s,streamType:a}=this.a.$state;return this.isMatch?t()==="play"&&!s()?$s():a()==="unknown"?H():this.isSmallLayout?bs():ms():null}};q.tagName="media-video-layout",q.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let tt=q;class gs extends Wt{async xe(){const t=(await Nt(()=>import("./vidstack-e6uUyFko-pmgBYJSv.js"),__vite__mapDeps([]))).icons,s={};for(const a of Object.keys(t))s[a]=jt({name:a,paths:t[a],viewBox:"0 0 18 18"});return s}}function Y(e,t){var s;return((s=e())==null?void 0:s[t])??t}function ys(){return ws()}function _s(){const e=g(),{load:t}=e.$props,{canLoad:s}=e.$state;return _(()=>t()==="play"&&!s())()?[se(),St()]:[xs(),Cs(),St(),Ts(),Es(),js()]}function se(){const e=g(),{translations:t}=m(),{title:s}=e.$state,a=i(()=>`${Y(t,"Play")}, ${s()}`);return n`
    <media-play-button
      class="plyr__control plyr__control--overlaid"
      aria-label=${a}
      data-plyr="play"
    >
      <slot name="play-icon"></slot>
    </button>
  `}function xs(){const{controls:e}=m();return i(()=>e().includes("play-large")?se():null)}function Cs(){const{thumbnails:e,previewTime:t}=m();return n`
    <media-thumbnail
      .src=${i(e)}
      class="plyr__preview-scrubbing"
      time=${i(()=>t())}
    ></media-thumbnail>
  `}function St(){const e=g(),{poster:t}=e.$state,s=i(()=>`background-image: url("${t()}");`);return n`<div class="plyr__poster" style=${s}></div>`}function ws(){const e=new Set(["captions","pip","airplay","fullscreen"]),{controls:t}=m(),s=i(()=>t().filter(a=>!e.has(a)).map(ae));return n`<div class="plyr__controls">${s}</div>`}function Ts(){const{controls:e}=m(),t=i(()=>e().map(ae));return n`<div class="plyr__controls">${t}</div>`}function ae(e){switch(e){case"airplay":return ks();case"captions":return Ss();case"current-time":return Rs();case"download":return Ns();case"duration":return ne();case"fast-forward":return Is();case"fullscreen":return Ps();case"mute":case"volume":case"mute+volume":return Bs(e);case"pip":return Ms();case"play":return As();case"progress":return Ls();case"restart":return Os();case"rewind":return Vs();case"settings":return Ws();default:return null}}function ks(){const{translations:e}=m();return n`
    <media-airplay-button class="plyr__controls__item plyr__control" data-plyr="airplay">
      <slot name="airplay-icon"></slot>
      <span class="plyr__tooltip">${v(e,"AirPlay")}</span>
    </media-airplay-button>
  `}function Ss(){const{translations:e}=m(),t=v(e,"Disable captions"),s=v(e,"Enable captions");return n`
    <media-caption-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="captions"
    >
      <slot name="captions-on-icon" data-class="icon--pressed"></slot>
      <slot name="captions-off-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${t}</span>
      <span class="label--not-pressed plyr__tooltip">${s}</span>
    </media-caption-button>
  `}function Ps(){const{translations:e}=m(),t=v(e,"Enter Fullscreen"),s=v(e,"Exit Fullscreen");return n`
    <media-fullscreen-button
      class="plyr__controls__item plyr__control"
      data-no-label
      data-plyr="fullscreen"
    >
      <slot name="enter-fullscreen-icon" data-class="icon--pressed"></slot>
      <slot name="exit-fullscreen-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-fullscreen-button>
  `}function Ds(){const{translations:e}=m(),t=v(e,"Mute"),s=v(e,"Unmute");return n`
    <media-mute-button class="plyr__control" data-no-label data-plyr="mute">
      <slot name="muted-icon" data-class="icon--pressed"></slot>
      <slot name="volume-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-mute-button>
  `}function Ms(){const{translations:e}=m(),t=v(e,"Enter PiP"),s=v(e,"Exit PiP");return n`
    <media-pip-button class="plyr__controls__item plyr__control" data-no-label data-plyr="pip">
      <slot name="enter-pip-icon" data-class="icon--pressed"></slot>
      <slot name="exit-pip-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-pip-button>
  `}function As(){const{translations:e}=m(),t=v(e,"Play"),s=v(e,"Pause");return n`
    <media-play-button class="plyr__controls__item plyr__control" data-no-label data-plyr="play">
      <slot name="pause-icon" data-class="icon--pressed"></slot>
      <slot name="play-icon" data-class="icon--not-pressed"></slot>
      <span class="label--pressed plyr__tooltip">${s}</span>
      <span class="label--not-pressed plyr__tooltip">${t}</span>
    </media-play-button>
  `}function Os(){const{translations:e}=m(),{remote:t}=g(),s=v(e,"Restart");function a(o){Bt(o)&&!Ft(o)||t.seek(0,o)}return n`
    <button
      type="button"
      class="plyr__control"
      data-plyr="restart"
      @pointerup=${a}
      @keydown=${a}
    >
      <slot name="restart-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </button>
  `}function Vs(){const{translations:e,seekTime:t}=m(),s=i(()=>`${Y(e,"Rewind")} ${t()}s`),a=i(()=>-1*t());return n`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${a}
      data-no-label
      data-plyr="rewind"
    >
      <slot name="rewind-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}function Is(){const{translations:e,seekTime:t}=m(),s=i(()=>`${Y(e,"Forward")} ${t()}s`),a=i(t);return n`
    <media-seek-button
      class="plyr__controls__item plyr__control"
      seconds=${a}
      data-no-label
      data-plyr="fast-forward"
    >
      <slot name="fast-forward-icon"></slot>
      <span class="plyr__tooltip">${s}</span>
    </media-seek-button>
  `}function Ls(){let e=g(),{duration:t,viewType:s}=e.$state,{translations:a,markers:o,thumbnails:l,seekTime:r,previewTime:b}=m(),u=v(a,"Seek"),f=C(null),d=i(()=>{const w=f();return w?n`<span class="plyr__progress__marker-label">${Rt(w.label)}<br /></span>`:null});function y(w){b.set(w.detail)}function k(){f.set(this)}function $(){f.set(null)}function D(){const w=l(),M=i(()=>s()==="audio");return w?n`
          <media-slider-preview class="plyr__slider__preview" ?no-clamp=${M}>
            <media-slider-thumbnail .src=${w} class="plyr__slider__preview__thumbnail">
              <span class="plyr__slider__preview__time-container">
                ${d}
                <media-slider-value class="plyr__slider__preview__time"></media-slider-value>
              </span>
            </media-slider-thumbnail>
          </media-slider-preview>
        `:n`
          <span class="plyr__tooltip">
            ${d}
            <media-slider-value></media-slider-value>
          </span>
        `}function O(){var M;const w=t();return Number.isFinite(w)?(M=o())==null?void 0:M.map(S=>n`
        <span
          class="plyr__progress__marker"
          @mouseenter=${k.bind(S)}
          @mouseleave=${$}
          style=${`left: ${S.time/w*100}%;`}
        ></span>
      `):null}return n`
    <div class="plyr__controls__item plyr__progress__container">
      <div class="plyr__progress">
        <media-time-slider
          class="plyr__slider"
          data-plyr="seek"
          pause-while-dragging
          key-step=${i(r)}
          aria-label=${u}
          @media-seeking-request=${y}
        >
          <div class="plyr__slider__track"></div>
          <div class="plyr__slider__thumb"></div>
          <div class="plyr__slider__buffer"></div>
          ${i(D)}${i(O)}
        </media-time-slider>
      </div>
    </div>
  `}function Bs(e){return i(()=>{const t=e==="mute"||e==="mute+volume",s=e==="volume"||e==="mute+volume";return n`
      <div class="plyr__controls__item plyr__volume">
        ${[t?Ds():null,s?Fs():null]}
      </div>
    `})}function Fs(){const{translations:e}=m(),t=v(e,"Volume");return n`
    <media-volume-slider class="plyr__slider" data-plyr="volume" aria-label=${t}>
      <div class="plyr__slider__track"></div>
      <div class="plyr__slider__thumb"></div>
    </media-volume-slider>
  `}function Rs(){const e=g(),{translations:t,invertTime:s,toggleTime:a,displayDuration:o}=m(),l=C(Pt(s));function r(u){!a()||o()||Bt(u)&&!Ft(u)||l.set(f=>!f)}function b(){return i(()=>o()?ne():null)}return i(()=>{const{streamType:u}=e.$state,f=v(t,"LIVE"),d=v(t,"Current time"),y=i(()=>!o()&&l());return u()==="live"||u()==="ll-live"?n`
          <media-live-button
            class="plyr__controls__item plyr__control plyr__live-button"
            data-plyr="live"
          >
            <span class="plyr__live-button__text">${f}</span>
          </media-live-button>
        `:n`
          <media-time
            type="current"
            class="plyr__controls__item plyr__time plyr__time--current"
            tabindex="0"
            role="timer"
            aria-label=${d}
            ?remainder=${y}
            @pointerup=${r}
            @keydown=${r}
          ></media-time>
          ${b()}
        `})}function ne(){const{translations:e}=m(),t=v(e,"Duration");return n`
    <media-time
      type="duration"
      class="plyr__controls__item plyr__time plyr__time--duration"
      role="timer"
      tabindex="0"
      aria-label=${t}
    ></media-time>
  `}function Ns(){return i(()=>{const e=g(),{translations:t,download:s}=m(),{source:a}=e.$state,o=a(),l=s(),r=B(l)?l:l==null?void 0:l.url,b=(B(l)?null:l==null?void 0:l.filename)||"media",u=v(t,"Download");return r||ge(o)||ye(o)?n`
          <a
            class="plyr__controls__item plyr__control"
            href=${r||o.src+`?download=${b}`}
            download=${b}
            target="_blank"
          >
            <slot name="download-icon" />
            <span class="plyr__tooltip">${u}</span>
          </a>
        `:null})}function Es(){return i(()=>{const{clickToPlay:e,clickToFullscreen:t}=m();return[e()?n`
            <media-gesture
              class="plyr__gesture"
              event="pointerup"
              action="toggle:paused"
            ></media-gesture>
          `:null,t()?n`
            <media-gesture
              class="plyr__gesture"
              event="dblpointerup"
              action="toggle:fullscreen"
            ></media-gesture>
          `:null]})}function js(){const e=g(),t=C(void 0),s=i(()=>{var a;return Rt((a=t())==null?void 0:a.text)});return T(()=>{const a=e.$state.textTrack();if(!a)return;function o(){t.set(a==null?void 0:a.activeCues[0])}return o(),j(a,"cue-change",o)}),n`
    <div class="plyr__captions" dir="auto">
      <span class="plyr__caption">${s}</span>
    </div>
  `}function Ws(){const{translations:e}=m(),t=v(e,"Settings");return n`
    <div class="plyr__controls__item plyr__menu">
      <media-menu>
        <media-menu-button class="plyr__control" data-plyr="settings">
          <slot name="settings-icon" />
          <span class="plyr__tooltip">${t}</span>
        </media-menu-button>
        <media-menu-items class="plyr__menu__container" placement="top end">
          <div><div>${[qs(),Hs(),Qs(),Us()]}</div></div>
        </media-menu-items>
      </media-menu>
    </div>
  `}function Q({label:e,children:t}){const s=C(!1);return n`
    <media-menu @open=${()=>s.set(!0)} @close=${()=>s.set(!1)}>
      ${Gs({label:e,open:s})}
      <media-menu-items>${t}</media-menu-items>
    </media-menu>
  `}function Gs({open:e,label:t}){const{translations:s}=m(),a=i(()=>`plyr__control plyr__control--${e()?"back":"forward"}`);function o(){const l=v(s,"Go back to previous menu");return i(()=>e()?n`<span class="plyr__sr-only">${l}</span>`:null)}return n`
    <media-menu-button class=${a} data-plyr="settings">
      <span class="plyr__menu__label" aria-hidden=${Xs(e)}>
        ${v(s,t)}
      </span>
      <span class="plyr__menu__value" data-part="hint"></span>
      ${o()}
    </media-menu-button>
  `}function qs(){return Q({label:"Audio",children:Ks()})}function Ks(){const{translations:e}=m();return n`
    <media-audio-radio-group empty-label=${v(e,"Default")}>
      <template>
        <media-radio class="plyr__control" data-plyr="audio">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-audio-radio-group>
  `}function Us(){return Q({label:"Speed",children:zs()})}function zs(){const{translations:e,speed:t}=m();return n`
    <media-speed-radio-group .rates=${t} normal-label=${v(e,"Normal")}>
      <template>
        <media-radio class="plyr__control" data-plyr="speed">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-speed-radio-group>
  `}function Hs(){return Q({label:"Captions",children:Ys()})}function Ys(){const{translations:e}=m();return n`
    <media-captions-radio-group off-label=${v(e,"Disabled")}>
      <template>
        <media-radio class="plyr__control" data-plyr="captions">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-captions-radio-group>
  `}function Qs(){return Q({label:"Quality",children:Zs()})}function Zs(){const{translations:e}=m();return n`
    <media-quality-radio-group auto-label=${v(e,"Auto")}>
      <template>
        <media-radio class="plyr__control" data-plyr="quality">
          <span data-part="label"></span>
        </media-radio>
      </template>
    </media-quality-radio-group>
  `}function Xs(e){return i(()=>e()?"true":"false")}function v(e,t){return i(()=>Y(e,t))}const _t=class _t extends ot(rt,he){onSetup(){this.forwardKeepAlive=!1,this.a=g()}onConnect(){var t;(t=this.a.player.el)==null||t.setAttribute("data-layout","plyr"),P(()=>{var s;return(s=this.a.player.el)==null?void 0:s.removeAttribute("data-layout")}),$e(this,this.a),T(()=>{this.$props.customIcons()?new ut(this).connect():new gs(this).connect()})}render(){return n`${i(this._j.bind(this))}`}_j(){const{viewType:t}=this.a.$state;return t()==="audio"?ys():t()==="video"?_s():null}};_t.tagName="media-plyr-layout";let et=_t;it(X);it(tt);it(et);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/vidstack-EWeIzV2w-bdRKJ_hs.js","assets/vidstack-0CorJr-x-FUyOJuAD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
