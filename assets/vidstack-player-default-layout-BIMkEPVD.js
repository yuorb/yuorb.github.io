const __vite__fileDeps=["assets/vidstack-CRlTZX3Z-PBDNdscv.js","assets/vidstack-DQ6dSZwe-BTtv5vWE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var me=Object.getPrototypeOf;var ve=Reflect.get;var tt=(e,t,s)=>ve(me(e),s,t);import{P as b,Q as Gt,R as M,S as Bt,U as k,V as fe,W,X as w,Y as he,Z as $e,$ as at,a0 as E,a1 as be,a2 as ge,a3 as ye,a4 as x,a5 as Lt,a6 as xe,a7 as F,a8 as h,a9 as Se,aa as we,ab as rt,ac as Ft,ad as Te,ae as Ce,af as Nt,ag as K,ah as ut,ai as ke,aj as _t,_ as De,ak as Ae,al as O,am as Oe,an as Ie,ao as Me,ap as Pe,aq as dt,ar as Ge,as as Be,at as Le,au as Fe,av as Ne,aw as Rt,ax as et,ay as _e,az as Re,aA as Ve,aB as We,aC as Vt}from"./app-CcLtv9kw.js";import{e as Ee,c as Ke,t as Dt,A as He,l as ct,D as At,x as o,o as Qe,n as q,L as Wt,i as qe}from"./vidstack-rsZGrNIW-BiUwPbUx.js";class ze extends Ke{constructor(t){super(t),this.h=null,this.w=!1,this.$=null,this.w=t.type===Dt.ATTRIBUTE||t.type===Dt.BOOLEAN_ATTRIBUTE}render(t){return t!==this.h&&(this.disconnected(),this.h=t,this.isConnected&&this.Gl()),this.h?this.x(Bt(this.h)):He}reconnected(){this.Gl()}disconnected(){var t;(t=this.$)==null||t.call(this),this.$=null}Gl(){this.h&&(this.$=k(this.l.bind(this)))}x(t){return this.w?ct(t):t}y(t){this.setValue(this.x(t))}l(){var t;this.y((t=this.h)==null?void 0:t.call(this))}}function i(e){return Ee(ze)(b(e))}class Et{constructor(t,s){this._m=t,this.La=s,this.elements=new Set,this.Gc=Gt(this.Ha.bind(this))}connect(){this.Ha();const t=new MutationObserver(this.Gc);for(const s of this._m)t.observe(s,{childList:!0,subtree:!0});M(()=>t.disconnect()),M(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){fe(t)?(s.textContent="",s.append(t)):(At(null,s),At(t,s)),s.style.display||(s.style.display="contents");const n=s.firstElementChild;if(!n)return;const a=s.getAttribute("data-class");a&&n.classList.add(...a.split(" "))}Ha(t){if(t&&!t.some(a=>a.addedNodes.length))return;let s=!1,n=this._m.flatMap(a=>[...a.querySelectorAll("slot")]);for(const a of n)!a.hasAttribute("name")||this.elements.has(a)||(this.elements.add(a),s=!0);s&&this.La(this.elements)}}let Ue=0,V="data-slot-id";class Kt{constructor(t){this._m=t,this.Gc=Gt(this.Ha.bind(this)),this.slots=new Et(t,this.Ha.bind(this))}connect(){this.slots.connect(),this.Ha();const t=new MutationObserver(this.Gc);for(const s of this._m)t.observe(s,{childList:!0});M(()=>t.disconnect())}Ha(){for(const t of this._m)for(const s of t.children){if(s.nodeType!==1)continue;const n=s.getAttribute("slot");if(!n)continue;s.style.display="none";let a=s.getAttribute(V);a||s.setAttribute(V,a=++Ue+"");for(const l of this.slots.elements){if(l.getAttribute("name")!==n||l.getAttribute(V)===a)continue;const r=document.importNode(s,!0);n.includes("-icon")&&r.classList.add("vds-icon"),r.style.display="",r.removeAttribute("slot"),this.slots.assign(r,l),l.setAttribute(V,a)}}}}function je({name:e,class:t,state:s,paths:n,viewBox:a="0 0 32 32"}){return o`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${a}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${ct(e??s)}
  >
    ${W(n)?Qe(n):i(n)}
  </svg>`}class Ze{constructor(t){this._m=t,this.dn={},this.gn=!1,this.slots=new Et(t,this.hn.bind(this))}connect(){this.slots.connect()}load(){this.Pf().then(t=>{this.dn=t,this.gn=!0,this.hn()})}*jn(){for(const t of Object.keys(this.dn)){const s=`${t}-icon`;for(const n of this.slots.elements)n.name===s&&(yield{icon:this.dn[t],slot:n})}}hn(){if(this.gn)for(const{icon:t,slot:s}of this.jn())this.slots.assign(t,s)}}class Ye extends Ze{connect(){super.connect();const{player:t}=w();if(!t.el)return;let s,n=new IntersectionObserver(a=>{var l;(l=a[0])!=null&&l.isIntersecting&&(s==null||s(),s=void 0,this.load())});n.observe(t.el),s=M(()=>n.disconnect())}}function st(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}let Ot=!1,nt=new Set;function Xe(){const{player:e}=w();nt.add(e),M(()=>nt.delete(e)),Ot||(he(()=>{for(const t of $e(at)){const s=at[t],n=be[t],a=`--media-user-${E(t)}`,l=`vds-player:${E(t)}`;k(()=>{var $;const r=s(),m=r===n,p=m?null:Je(e,t,r);for(const v of nt)($=v.el)==null||$.style.setProperty(a,p);m?localStorage.removeItem(l):localStorage.setItem(l,r)})}},null),Ot=!0)}function Je(e,t,s){var n;switch(t){case"fontFamily":const a=s==="capitals"?"small-caps":"";return(n=e.el)==null||n.style.setProperty("--media-user-font-variant",a),es(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return ts(s);case"textColor":return`rgb(${st(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return ss(s);case"textBg":return`rgb(${st(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${st(s)} / var(--media-user-display-bg-opacity, 1))`}}function ts(e){return(parseInt(e)/100).toString()}function es(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function ss(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}const Ht=Se();function u(){return we(Ht)}const ns={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var as=Object.defineProperty,is=Object.getOwnPropertyDescriptor,pt=(e,t,s,n)=>{for(var a=n>1?void 0:n?is(t,s):t,l=e.length-1,r;l>=0;l--)(r=e[l])&&(a=(n?r(t,s,a):r(a))||a);return n&&a&&as(t,s,a),a};const St=class St extends ge{constructor(){super(...arguments),this.cn=b(()=>{const t=this.$props.when();return this.fn(t)}),this.$m=b(()=>{const t=this.$props.smallWhen();return this.fn(t)}),this.menuContainer=null}get isMatch(){return this.cn()}get isSmallLayout(){return this.$m()}onSetup(){this.a=w(),this.setAttributes({"data-match":this.cn,"data-sm":()=>this.$m()?"":null,"data-lg":()=>this.$m()?null:"","data-size":()=>this.$m()?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture});const t=this;ye(Ht,{...this.$props,when:this.cn,smallWhen:this.$m,userPrefersAnnouncements:x(!0),userPrefersKeyboardAnimations:x(!0),get menuContainer(){return t.menuContainer}})}onAttach(t){Lt(t,this.$props.colorScheme)}fn(t){return t!=="never"&&(xe(t)?t:b(()=>t(this.a.player.state))())}};St.props=ns;let P=St;pt([rt],P.prototype,"menuContainer",2);pt([rt],P.prototype,"isMatch",1);pt([rt],P.prototype,"isSmallLayout",1);function Qt(e,t){k(()=>{const{player:s}=w(),n=s.el;return n&&F(n,"data-layout",t()&&e),()=>n==null?void 0:n.removeAttribute("data-layout")})}function S(e,t){var s;return((s=e())==null?void 0:s[t])??t}function mt(){return i(()=>{const{translations:e,userPrefersAnnouncements:t}=u();return t()?o`<media-announcer .translations=${i(e)}></media-announcer>`:null})}function T(e,t=""){return o`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function _(e){return e.map(t=>T(t))}function d(e,t){return i(()=>S(e,t))}function vt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=h(),n=i(()=>{const l=S(t,"AirPlay"),r=Ft(s());return`${l} ${r}`}),a=d(t,"AirPlay");return o`
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
  `}function qt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=h(),n=i(()=>{const l=S(t,"Google Cast"),r=Ft(s());return`${l} ${r}`}),a=d(t,"Google Cast");return o`
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
  `}function z({tooltip:e}){const{translations:t}=u(),s=d(t,"Play"),n=d(t,"Pause");return o`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(t,"Play")}
        >
          ${_(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function It({tooltip:e,ref:t=Ae}){const{translations:s}=u(),n=d(s,"Mute"),a=d(s,"Unmute");return o`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(s,"Mute")}
          ${q(t)}
        >
          ${_(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${a}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function ft({tooltip:e}){const{translations:t}=u(),s=d(t,"Closed-Captions On"),n=d(t,"Closed-Captions Off");return o`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(t,"Captions")}
        >
          ${_(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function os(){const{translations:e}=u(),t=d(e,"Enter PiP"),s=d(e,"Exit PiP");return o`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(e,"PiP")}
        >
          ${_(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function zt({tooltip:e}){const{translations:t}=u(),s=d(t,"Enter Fullscreen"),n=d(t,"Exit Fullscreen");return o`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(t,"Fullscreen")}
        >
          ${_(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Mt({backward:e,tooltip:t}){const{translations:s,seekStep:n}=u(),a=e?"Seek Backward":"Seek Forward",l=d(s,a);return o`
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
  `}function Ut(){const{translations:e}=u(),{live:t}=h(),s=d(e,"Skip To Live"),n=d(e,"LIVE");return t()?o`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function ht(){return i(()=>{const{download:e,translations:t}=u(),s=e();if(Te(s))return null;const{source:n,title:a}=h(),l=n(),r=Ce({title:a(),src:l,download:s});return r?o`
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
        `:null})}function $t(){const{translations:e}=u();return o`
    <media-captions
      class="vds-captions"
      .exampleText=${d(e,"Captions look like this")}
    ></media-captions>
  `}function D(){return o`<div class="vds-controls-spacer"></div>`}function jt(e,t){return o`
    <media-menu-portal .container=${e} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Zt(e,t){let s=document.querySelector(`body > .${e}`);s||(s=document.createElement("div"),s.style.display="contents",s.classList.add(e),document.body.append(s));const{viewType:n}=h(),{colorScheme:a}=u();return k(()=>{if(!s)return;const l=t();F(s,"data-view-type",n()),F(s,"data-sm",l),F(s,"data-lg",!l),F(s,"data-size",l?"sm":"lg")}),Lt(s,a),s}function Yt({placement:e,tooltip:t,portal:s}){const{textTracks:n}=w(),{viewType:a,clipStartTime:l,clipEndTime:r}=h(),{translations:m,thumbnails:p,menuContainer:$,noModal:v,menuGroup:c,smallWhen:f}=u();if(b(()=>{var Ct;const ce=l(),pe=r()||1/0,Tt=x(null);Nt(n,"chapters",Tt.set);const J=(Ct=Tt())==null?void 0:Ct.cues.filter(kt=>kt.startTime<=pe&&kt.endTime>=ce);return!(J!=null&&J.length)})())return null;const y=b(()=>v()?K(e):f()?null:K(e)),B=b(()=>!f()&&c()==="bottom"&&a()==="video"?26:0),L=x(!1);function ue(){L.set(!0)}function de(){L.set(!1)}const wt=o`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${i(y)}
      offset=${i(B)}
    >
      ${i(()=>L()?o`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${i(p)}
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
    <media-menu class="vds-chapters-menu vds-menu" @open=${ue} @close=${de}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(m,"Chapters")}
          >
            ${T("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${ut(t)?i(t):t}
        >
          ${d(m,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?jt($,wt):wt}
    </media-menu>
  `}let ls=0;function C({label:e="",value:t="",children:s}){if(!e)return o`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n=`vds-menu-section-${++ls}`;return o`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${e}</header>
        ${t?o`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function R({label:e,children:t}){return o`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function G({label:e,icon:t,hint:s}){return o`
    <media-menu-button class="vds-menu-item">
      ${T("menu-arrow-left","vds-menu-close-icon")}
      ${t?T(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${i(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?i(s):null} </span>
      ${T("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function rs({value:e=null,options:t,hideLabel:s=!1,children:n=null,onChange:a=null}){function l(r){const{value:m,label:p}=r;return o`
      <media-radio class="vds-radio" value=${m}>
        ${T("menu-radio-check")}
        ${s?null:o`
              <span class="vds-radio-label" data-part="label">
                ${W(p)?p:i(p)}
              </span>
            `}
        ${ut(n)?n(r):n}
      </media-radio>
    `}return o`
    <media-radio-group
      class="vds-radio-group"
      value=${W(e)?e:e?i(e):""}
      @change=${a}
    >
      ${O(t)?t.map(l):i(()=>t().map(l))}
    </media-radio-group>
  `}function us(e){return O(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function U(){return o`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function j(){return o`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function Z({label:e=null,value:t=null,upIcon:s="",downIcon:n="",children:a,isMin:l,isMax:r}){const m=e||t,p=[n?T(n,"down"):null,a,s?T(s,"up"):null];return o`
    <div
      class=${`vds-menu-item vds-menu-slider-item${m?" group":""}`}
      data-min=${i(()=>l()?"":null)}
      data-max=${i(()=>r()?"":null)}
    >
      ${m?o`
            <div class="vds-menu-slider-title">
              ${[e?o`<div>${e}</div>`:null,t?o`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${p}</div>
          `:p}
    </div>
  `}const ds={...Le,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},bt={...Fe,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function cs(){return i(()=>{const{hasCaptions:e}=h(),{translations:t}=u();return e()?o`
      <media-menu class="vds-font-menu vds-menu">
        ${G({label:()=>S(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[C({label:d(t,"Font"),children:[ps(),ms()]}),C({label:d(t,"Text"),children:[vs(),hs(),fs()]}),C({label:d(t,"Text Background"),children:[$s(),bs()]}),C({label:d(t,"Display Background"),children:[gs(),ys()]}),C({children:[xs()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function ps(){return A({label:"Family",option:Pe,type:"fontFamily"})}function ms(){return A({label:"Size",option:ds,type:"fontSize"})}function vs(){return A({label:"Color",option:dt,type:"textColor"})}function fs(){return A({label:"Opacity",option:bt,type:"textOpacity"})}function hs(){return A({label:"Shadow",option:Ge,type:"textShadow"})}function $s(){return A({label:"Color",option:dt,type:"textBg"})}function bs(){return A({label:"Opacity",option:bt,type:"textBgOpacity"})}function gs(){return A({label:"Color",option:dt,type:"displayBg"})}function ys(){return A({label:"Opacity",option:bt,type:"displayBgOpacity"})}function xs(){const{translations:e}=u();return o`
    <button class="vds-menu-item" role="menuitem" @click=${Ie}>
      <span class="vds-menu-item-label">${i(()=>S(e,"Reset"))}</span>
    </button>
  `}function A({label:e,option:t,type:s}){const{player:n}=w(),{translations:a}=u(),l=at[s],r=()=>S(a,e);function m(){Ne(),n.dispatchEvent(new Event("vds-font-change"))}if(t.type==="color"){let v=function(c){l.set(c.target.value),m()};return R({label:i(r),children:o`
        <input
          class="vds-color-picker"
          type="color"
          .value=${i(l)}
          @input=${v}
        />
      `})}if(t.type==="slider"){let v=function(L){l.set(L.detail+"%"),m()};const{min:c,max:f,step:g,upIcon:y,downIcon:B}=t;return Z({label:i(r),value:i(l),upIcon:y,downIcon:B,isMin:()=>l()===c+"%",isMax:()=>l()===f+"%",children:o`
        <media-slider
          class="vds-slider"
          min=${c}
          max=${f}
          step=${g}
          key-step=${g}
          .value=${i(()=>parseInt(l()))}
          aria-label=${i(r)}
          @value-change=${v}
          @drag-value-change=${v}
        >
          ${U()}${j()}
        </media-slider>
      `})}const p=us(t.values),$=()=>{var f;const v=l(),c=((f=p.find(g=>g.value===v))==null?void 0:f.label)||"";return S(a,W(c)?c:c())};return o`
    <media-menu class=${`vds-${E(s)}-menu vds-menu`}>
      ${G({label:r,hint:$})}
      <media-menu-items class="vds-menu-items">
        ${rs({value:l,options:p,onChange({detail:v}){l.set(v),m()}})}
      </media-menu-items>
    </media-menu>
  `}function Y({label:e,checked:t,defaultChecked:s=!1,storageKey:n,onChange:a}){const{translations:l}=u(),r=n?localStorage.getItem(n):null,m=x(!!(r??s)),p=x(!1),$=i(Me(m)),v=d(l,e);n&&a(Bt(m)),t&&k(()=>void m.set(t()));function c(y){(y==null?void 0:y.button)!==1&&(m.set(B=>!B),n&&localStorage.setItem(n,m()?"1":""),a(m(),y),p.set(!1))}function f(y){Be(y)&&c()}function g(y){y.button===0&&p.set(!0)}return o`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${v}
      aria-checked=${$}
      data-active=${i(()=>p()?"":null)}
      @pointerup=${c}
      @pointerdown=${g}
      @keydown=${f}
    ></div>
  `}function Ss(){return i(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${G({label:()=>S(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[C({children:[ws(),Ts()]}),C({children:[cs()]})]}
        </media-menu-items>
      </media-menu>
    `})}function ws(){const{userPrefersAnnouncements:e,translations:t}=u(),s="Announcements";return R({label:d(t,s),children:Y({label:s,storageKey:"vds-player::announcements",onChange(n){e.set(n)}})})}function Ts(){return i(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:s}=u(),{viewType:n}=h();if(b(()=>n()!=="video"||s())())return null;const l="Keyboard Animations";return R({label:d(e,l),children:Y({label:l,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){t.set(r)}})})})}function Cs(){return i(()=>{const{noAudioGain:e,translations:t}=u(),{audioTracks:s,canSetAudioGain:n}=h();return b(()=>!(n()&&!e())&&s().length<=1)()?null:o`
      <media-menu class="vds-audio-menu vds-menu">
        ${G({label:()=>S(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[ks(),Ds()]}
        </media-menu-items>
      </media-menu>
    `})}function ks(){return i(()=>{const{translations:e}=u(),{audioTracks:t}=h(),s=d(e,"Default");return b(()=>t().length<=1)()?null:C({children:o`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${G({label:()=>S(e,"Track")})}
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
      `})})}function Ds(){return i(()=>{const{noAudioGain:e,translations:t}=u(),{canSetAudioGain:s}=h();if(b(()=>!s()||e())())return null;const{audioGain:a}=h();return C({label:d(t,"Boost"),value:i(()=>Math.round(((a()??1)-1)*100)+"%"),children:[Z({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:As(),isMin:()=>((a()??1)-1)*100<=Xt(),isMax:()=>((a()??1)-1)*100===Jt()})]})})}function As(){const{translations:e}=u(),t=d(e,"Boost"),s=Xt,n=Jt,a=Os;return o`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${i(s)}
      max=${i(n)}
      step=${i(a)}
      key-step=${i(a)}
    >
      ${U()}${j()}
    </media-audio-gain-slider>
  `}function Xt(){const{audioGains:e}=u(),t=e();return O(t)?t[0]??0:t.min}function Jt(){const{audioGains:e}=u(),t=e();return O(t)?t[t.length-1]??300:t.max}function Os(){const{audioGains:e}=u(),t=e();return O(t)?t[1]-t[0]||25:t.step}function Is(){return i(()=>{const{translations:e}=u(),{hasCaptions:t}=h(),s=d(e,"Off");return t()?o`
      <media-menu class="vds-captions-menu vds-menu">
        ${G({label:()=>S(e,"Captions"),icon:"menu-captions"})}
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
    `:null})}function Ms(){return i(()=>{const{translations:e}=u();return o`
      <media-menu class="vds-playback-menu vds-menu">
        ${G({label:()=>S(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[C({children:Ps()}),Gs(),Ns()]}
        </media-menu-items>
      </media-menu>
    `})}function Ps(){const{remote:e}=w(),{translations:t}=u(),s="Loop";return R({label:d(t,s),children:Y({label:s,storageKey:"vds-player::user-loop",onChange(n,a){e.userPrefersLoopChange(n,a)}})})}function Gs(){return i(()=>{const{translations:e}=u(),{canSetPlaybackRate:t,playbackRate:s}=h();return t()?C({label:d(e,"Speed"),value:i(()=>s()===1?S(e,"Normal"):s()+"x"),children:[Z({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Ls(),isMin:()=>s()===te(),isMax:()=>s()===ee()})]}):null})}function te(){const{playbackRates:e}=u(),t=e();return O(t)?t[0]??0:t.min}function ee(){const{playbackRates:e}=u(),t=e();return O(t)?t[t.length-1]??2:t.max}function Bs(){const{playbackRates:e}=u(),t=e();return O(t)?t[1]-t[0]||.25:t.step}function Ls(){const{translations:e}=u(),t=d(e,"Speed"),s=te,n=ee,a=Bs;return o`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${i(s)}
      max=${i(n)}
      step=${i(a)}
      key-step=${i(a)}
    >
      ${U()}${j()}
    </media-speed-slider>
  `}function Fs(){const{remote:e,qualities:t}=w(),{autoQuality:s,canSetQuality:n,qualities:a}=h(),{translations:l}=u(),r="Auto";return b(()=>!n()||a().length<=1)()?null:R({label:d(l,r),children:Y({label:r,checked:s,onChange(p,$){p?e.requestAutoQuality($):e.changeQuality(t.selectedIndex,$)}})})}function Ns(){return i(()=>{const{hideQualityBitrate:e,translations:t}=u(),{canSetQuality:s,qualities:n,quality:a}=h(),l=b(()=>!s()||n().length<=1),r=b(()=>Oe(n()));return l()?null:C({label:d(t,"Quality"),value:i(()=>{var c,f;const m=(c=a())==null?void 0:c.height,p=e()?null:(f=a())==null?void 0:f.bitrate,$=p&&p>0?`${(p/1e6).toFixed(2)} Mbps`:null,v=S(t,"Auto");return m?`${m}p${$?` (${$})`:""}`:v}),children:[Z({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:_s(),isMin:()=>r()[0]===a(),isMax:()=>r().at(-1)===a()}),Fs()]})})}function _s(){const{translations:e}=u(),t=d(e,"Quality");return o`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${U()}${j()}
    </media-quality-slider>
  `}function se({placement:e,portal:t,tooltip:s}){return i(()=>{const{viewType:n}=h(),{translations:a,menuContainer:l,noModal:r,menuGroup:m,smallWhen:p}=u(),$=b(()=>r()?K(e):p()?null:K(e)),v=b(()=>!p()&&m()==="bottom"&&n()==="video"?26:0),c=x(!1);Xe();function f(){c.set(!0)}function g(){c.set(!1)}const y=o`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${i($)}
        offset=${i(v)}
      >
        ${i(()=>c()?[Ms(),Ss(),Cs(),Is()]:null)}
      </media-menu-items>
    `;return o`
      <media-menu class="vds-settings-menu vds-menu" @open=${f} @close=${g}>
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
            placement=${ut(s)?i(s):s}
          >
            ${d(a,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${t?jt(l,y):y}
      </media-menu>
    `})}function gt({orientation:e,tooltip:t}){return i(()=>{const{pointer:s,muted:n,canSetVolume:a}=h();if(s()==="coarse"&&!n())return null;if(!a())return It({tooltip:t});const l=x(void 0),r=ke(l);return o`
      <div class="vds-volume" ?data-active=${i(r)} ${q(l.set)}>
        ${It({tooltip:t})}
        <div class="vds-volume-popup">${Rs({orientation:e})}</div>
      </div>
    `})}function Rs({orientation:e}={}){const{translations:t}=u(),s=d(t,"Volume");return o`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${ct(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function yt(){const e=x(void 0),t=x(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:a,disableTimeSlider:l,seekStep:r,noScrubGesture:m}=u(),p=d(n,"Seek"),$=i(l),v=i(()=>t()<a()),c=i(s);return _t(e,()=>{const f=e();f&&t.set(f.clientWidth)}),o`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${p}
      key-step=${i(r)}
      ?disabled=${$}
      ?no-swipe-gesture=${i(m)}
      ${q(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${v}>
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
          .src=${c}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Vs(){return o`
    <div class="vds-time-group">
      ${i(()=>{const{duration:e}=h();return e()?[o`<media-time class="vds-time" type="current"></media-time>`,o`<div class="vds-time-divider">/</div>`,o`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function Ws(){return i(()=>{const{live:e,duration:t}=h();return e()?Ut():t()?o`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function ne(){return i(()=>{const{live:e}=h();return e()?Ut():Vs()})}function ae(){return i(()=>{const{textTracks:e}=w(),{title:t,started:s}=h(),n=x(null);return Nt(e,"chapters",n.set),n()&&(s()||!t())?ie():o`<media-title class="vds-chapter-title"></media-title>`})}function ie(){return o`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class oe extends Ye{async Pf(){const t=(await De(()=>import("./vidstack-CRlTZX3Z-PBDNdscv.js"),__vite__mapDeps([0,1]))).icons,s={};for(const n of Object.keys(t))s[n]=je({name:n,paths:t[n]});return s}}var I;let Es=(I=class extends P{},I.props={...tt(I,I,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576},I);function Ks(){return[mt(),$t(),o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Mt({backward:!0,tooltip:"top start"}),z({tooltip:"top"}),Mt({tooltip:"top"}),Hs(),yt(),Ws(),gt({orientation:"vertical",tooltip:"top"}),ft({tooltip:"top"}),ht(),vt({tooltip:"top"}),Qs()]}
        </media-controls-group>
      </media-controls>
    `]}function Hs(){return i(()=>{let e=x(void 0),t=x(!1),s=w(),{title:n,started:a,currentTime:l,ended:r}=h(),{translations:m}=u(),p=Re(e),$=()=>a()||l()>0;const v=()=>{const g=r()?"Replay":$()?"Continue":"Play";return`${S(m,g)}: ${n()}`};k(()=>{var g;p()&&document.activeElement===document.body&&((g=s.player.el)==null||g.focus())});function c(){const g=e(),y=!!g&&!p()&&g.clientWidth<g.children[0].clientWidth;g&&Ve(g,"vds-marquee",y),t.set(y)}function f(){return o`
        <span class="vds-title-text">
          ${i(v)}${i(()=>$()?ie():null)}
        </span>
      `}return _t(e,c),n()?o`
          <span class="vds-title" title=${i(v)} ${q(e.set)}>
            ${[f(),i(()=>t()&&!p()?f():null)]}
          </span>
        `:D()})}function Qs(){const e="top end";return[Yt({tooltip:"top",placement:e,portal:!0}),se({tooltip:"top end",placement:e,portal:!0})]}const H=class H extends Rt(Wt,Es){constructor(){super(...arguments),this.en=x(!1)}onSetup(){this.forwardKeepAlive=!1,this.a=w(),this.classList.add("vds-audio-layout"),this.menuContainer=Zt("vds-audio-layout",()=>this.isSmallLayout);const{pointer:t}=this.a.$state;k(()=>{t()==="coarse"&&k(this.rn.bind(this))}),M(()=>{var s;return(s=this.menuContainer)==null?void 0:s.remove()})}onConnect(){Qt("audio",()=>this.isMatch),k(()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new Kt(t).connect():new oe(t).connect()})}render(){return i(this.Zm.bind(this))}Zm(){return this.isMatch?Ks():null}rn(){if(!this.en()){et(this,"pointerdown",this.sn.bind(this),{capture:!0});return}et(this,"pointerdown",t=>t.stopPropagation()),et(window,"pointerdown",this.tn.bind(this))}sn(t){const{target:s}=t;_e(s)&&s.closest(".vds-time-slider")&&(t.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),this.en.set(!0))}tn(){this.en.set(!1),this.removeAttribute("data-scrubbing")}};H.tagName="media-audio-layout",H.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let it=H;const N=class N extends P{};N.props={...tt(N,N,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380};let ot=N;function le(){return i(()=>{const e=w(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:s}=u();if(b(()=>t()||!s())())return null;const a=x(!1),{lastKeyboardAction:l}=e.$state;k(()=>{a.set(!!l());const c=setTimeout(()=>a.set(!1),500);return()=>{a.set(!1),window.clearTimeout(c)}});const r=b(()=>{var f;const c=(f=l())==null?void 0:f.action;return c&&a()?E(c):null}),m=b(()=>`vds-kb-action${a()?"":" hidden"}`),p=b(qs),$=b(()=>{const c=zs();return c?We(c):null});function v(){const c=$();return c?o`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${c}</div>
        </div>
      `:null}return o`
      <div class=${i(m)} data-action=${i(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${i(p)}</div>
        </div>
        ${i(()=>qe(l(),v()))}
      </div>
    `})}function qs(){var n;const{$state:e}=w(),t=(n=e.lastKeyboardAction())==null?void 0:n.action,s=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":Pt(e.volume(),s);case"volumeUp":case"volumeDown":return Pt(e.volume(),s);default:return""}}function Pt(e,t){return`${Math.round(e*t*100)}%`}function zs(){var s;const{$state:e}=w();switch((s=e.lastKeyboardAction())==null?void 0:s.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function Us(){return[mt(),re(),X(),le(),$t(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        ${[Zs(),D(),o`<media-controls-group class="vds-controls-group"></media-controls-group>`,D(),o`
            <media-controls-group class="vds-controls-group">
              ${yt()}
            </media-controls-group>
          `,o`
            <media-controls-group class="vds-controls-group">
              ${[z({tooltip:"top start"}),gt({orientation:"horizontal",tooltip:"top"}),ne(),ae(),ft({tooltip:"top"}),js(),vt({tooltip:"top"}),qt({tooltip:"top"}),ht(),os(),zt({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function js(){return i(()=>{const{menuGroup:e}=u();return e()==="bottom"?xt():null})}function Zs(){return o`
    <media-controls-group class="vds-controls-group">
      ${i(()=>{const{menuGroup:e}=u();return e()==="top"?[D(),xt()]:null})}
    </media-controls-group>
  `}function Ys(){return[mt(),re(),X(),$t(),le(),o`<div class="vds-scrim"></div>`,o`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[vt({tooltip:"top start"}),qt({tooltip:"bottom start"}),D(),ft({tooltip:"bottom"}),ht(),xt(),gt({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${D()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[D(),z({tooltip:"top"}),D()]}
        </media-controls-group>

        ${D()}

        <media-controls-group class="vds-controls-group">
          ${[ne(),ae(),zt({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${yt()}
        </media-controls-group>
      </media-controls>
    `,Js()]}function Xs(){return o`
    <div class="vds-load-container">
      ${[X(),z({tooltip:"top"})]}
    </div>
  `}function Js(){return i(()=>{const{duration:e}=h();return e()===0?null:o`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function X(){return o`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function xt(){const{menuGroup:e,smallWhen:t}=u(),s=()=>e()==="top"||t()?"bottom":"top",n=b(()=>`${s()} ${e()==="top"?"end":"center"}`),a=b(()=>`${s()} end`);return[Yt({tooltip:n,placement:a,portal:!0}),se({tooltip:n,placement:a,portal:!0})]}function re(){return i(()=>{const{noGestures:e}=u();return e()?null:o`
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
    `})}const Q=class Q extends Rt(Wt,ot){onSetup(){this.forwardKeepAlive=!1,this.a=w(),this.classList.add("vds-video-layout"),this.menuContainer=Zt("vds-video-layout",()=>this.isSmallLayout),M(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){Qt("video",()=>this.isMatch),k(()=>{const t=this.menuContainer?[this,this.menuContainer]:[this];this.$props.customIcons()?new Kt(t).connect():new oe(t).connect()})}render(){return i(this.Zm.bind(this))}Zm(){const{load:t}=this.a.$props,{canLoad:s,streamType:n,nativeControls:a}=this.a.$state;return!a()&&this.isMatch?t()==="play"&&!s()?Xs():n()==="unknown"?X():this.isSmallLayout?Ys():Us():null}};Q.tagName="media-video-layout",Q.attrs={smallWhen:{converter(t){return t!=="never"&&!!t}}};let lt=Q;Vt(it);Vt(lt);
