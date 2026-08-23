const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-H72EDyqs-CPSFiCPF.js","assets/vidstack-CRlI3Mh7-C4Vqq-gs.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-Czpn1I53.js";import{At as t,B as n,Ct as r,Dt as i,Et as a,Ft as o,H as s,J as c,Nt as l,Pt as u,St as d,U as f,W as p,_t as m,bt as h,et as g,ft as _,it as ee,jt as te,kt as v,n as ne,nt as re,o as ie,q as ae,rt as oe,st as se,tt as ce,vt as le,wt as ue,xt as y}from"./vidstack-CRlI3Mh7-C4Vqq-gs.js";import{n as de,t as fe}from"./vidstack-A9j--j6J-B6CowV1O.js";import{a as pe,c as me,i as he,n as b,o as x,r as ge,s as _e,t as ve}from"./vidstack-CwTj4H1w-CVynv6dk.js";import{n as ye}from"./vidstack-lwuXewh7-CBPY4Voh.js";import{F as be,M as xe,N as Se,P as Ce,T as we,h as S,m as C,y as Te}from"./vidstack-player-ziMdopN-.js";var Ee=e=>e??b,w={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},T=e=>(...t)=>({_$litDirective$:e,values:t}),E=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},De=class extends E{constructor(e){if(super(e),this.et=b,e.type!==w.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===b||e==null)return this.ft=void 0,this.et=e;if(e===he)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.et)return this.ft;this.et=e;let t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};De.directiveName=`unsafeHTML`,De.resultType=1;var Oe=class extends De{};Oe.directiveName=`unsafeSVG`,Oe.resultType=2;var ke=T(Oe),{I:Ae}=pe,je=e=>e.strings===void 0,Me={},Ne=(e,t=Me)=>e._$AH=t,D=(e,t)=>{var n,r;let i=e._$AN;if(i===void 0)return!1;for(let e of i)(r=(n=e)._$AO)==null||r.call(n,t,!1),D(e,t);return!0},O=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Pe=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Le(t)}};function Fe(e){this._$AN===void 0?this._$AM=e:(O(this),this._$AM=e,Pe(this))}function Ie(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)D(r[e],!1),O(r[e]);else r!=null&&(D(r,!1),O(r))}else D(this,e)}}var Le=e=>{var t,n;e.type==w.CHILD&&((t=e)._$AP??(t._$AP=Ie),(n=e)._$AQ??(n._$AQ=Fe))},Re=class extends E{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Pe(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),t&&(D(this,e),O(this))}setValue(e){if(je(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},ze=class extends Re{#e=null;#t=!1;#n=null;constructor(e){super(e),this.#t=e.type===w.ATTRIBUTE||e.type===w.BOOLEAN_ATTRIBUTE}render(e){return e!==this.#e&&(this.disconnected(),this.#e=e,this.isConnected&&this.#r()),this.#e?this.#i(d(this.#e)):b}reconnected(){this.#r()}disconnected(){this.#n?.(),this.#n=null}#r(){this.#e&&(this.#n=c(this.#o.bind(this)))}#i(e){return this.#t?Ee(e):e}#a(e){this.setValue(this.#i(e))}#o(){this.#a(this.#e?.())}};function k(e){return T(ze)(f(e))}var Be=class{#e;#t;elements=new Set;constructor(e,t){this.#e=e,this.#t=t}connect(){this.#r();let e=new MutationObserver(this.#n);for(let t of this.#e)e.observe(t,{childList:!0,subtree:!0});y(()=>e.disconnect()),y(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(e,t){re(e)?(t.textContent=``,t.append(e)):(ge(null,t),ge(e,t)),t.style.display||(t.style.display=`contents`);let n=t.firstElementChild;if(!n)return;let r=t.getAttribute(`data-class`);r&&n.classList.add(...r.split(` `))}#n=n(this.#r.bind(this));#r(e){if(e&&!e.some(e=>e.addedNodes.length))return;let t=!1,n=this.#e.flatMap(e=>[...e.querySelectorAll(`slot`)]);for(let e of n)!e.hasAttribute(`name`)||this.elements.has(e)||(this.elements.add(e),t=!0);t&&this.#t(this.elements)}},Ve=0,A=`data-slot-id`,He=class{#e;slots;constructor(e){this.#e=e,this.slots=new Be(e,this.#n.bind(this))}connect(){this.slots.connect(),this.#n();let e=new MutationObserver(this.#t);for(let t of this.#e)e.observe(t,{childList:!0});y(()=>e.disconnect())}#t=n(this.#n.bind(this));#n(){for(let e of this.#e)for(let t of e.children){if(t.nodeType!==1)continue;let e=t.getAttribute(`slot`);if(!e)continue;t.style.display=`none`;let n=t.getAttribute(A);n||t.setAttribute(A,n=++Ve+``);for(let r of this.slots.elements){if(r.getAttribute(`name`)!==e||r.getAttribute(A)===n)continue;let i=document.importNode(t,!0);e.includes(`-icon`)&&i.classList.add(`vds-icon`),i.style.display=``,i.removeAttribute(`slot`),this.slots.assign(i,r),r.setAttribute(A,n)}}}};function Ue({name:e,class:t,state:n,paths:r,viewBox:i=`0 0 32 32`}){return x`<svg
    class="${`vds-icon`+(t?` ${t}`:``)}"
    viewBox="${i}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${Ee(e??n)}
  >
    ${_(r)?ke(r):k(r)}
  </svg>`}var We=class{#e={};#t=!1;slots;constructor(e){this.slots=new Be(e,this.#r.bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(e=>{this.#e=e,this.#t=!0,this.#r()})}*#n(){for(let e of Object.keys(this.#e)){let t=`${e}-icon`;for(let n of this.slots.elements)n.name===t&&(yield{icon:this.#e[e],slot:n})}}#r(){if(this.#t)for(let{icon:e,slot:t}of this.#n())this.slots.assign(e,t)}},Ge=class extends We{connect(){super.connect();let{player:e}=C();if(!e.el)return;let t,n=new IntersectionObserver(e=>{e[0]?.isIntersecting&&(t?.(),t=void 0,this.load())});n.observe(e.el),t=y(()=>n.disconnect())}},j=new WeakMap,M=T(class extends Re{render(e){return b}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=e.options?.host,this.ot(this.lt=e.element)),b}ot(e){if(typeof this.G==`function`){let t=this.dt??globalThis,n=j.get(t);n===void 0&&(n=new WeakMap,j.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){return typeof this.G==`function`?j.get(this.dt??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Ke=p();function N(){return o(Ke)}var qe={colorScheme:`system`,download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:`bottom`,noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1},Je=class extends ne{static props=qe;#e;#t=f(()=>{let e=this.$props.when();return this.#r(e)});#n=f(()=>{let e=this.$props.smallWhen();return this.#r(e)});get isMatch(){return this.#t()}get isSmallLayout(){return this.#n()}onSetup(){this.#e=C(),this.setAttributes({"data-match":this.#t,"data-sm":()=>this.#n()?``:null,"data-lg":()=>this.#n()?null:``,"data-size":()=>this.#n()?`sm`:`lg`,"data-no-scrub-gesture":this.$props.noScrubGesture}),ue(Ke,{...this.$props,when:this.#t,smallWhen:this.#n,userPrefersAnnouncements:v(!0),userPrefersKeyboardAnimations:v(!0),menuPortal:v(null)})}onAttach(e){be(e,this.$props.colorScheme)}#r(e){return e!==`never`&&(ce(e)?e:f(()=>e(this.#e.player.state))())}},Ye=Je.prototype;r(Ye,`isMatch`),r(Ye,`isSmallLayout`);function Xe(e,t){c(()=>{let{player:n}=C(),r=n.el;return r&&i(r,`data-layout`,t()&&e),()=>r?.removeAttribute(`data-layout`)})}function P(e,t){return e()?.[t]??t}function Ze(){return k(()=>{let{translations:e,userPrefersAnnouncements:t}=N();return t()?x`<media-announcer .translations=${k(e)}></media-announcer>`:null})}function F(e,t=``){return x`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:``}`}
  ></slot>`}function I(e){return e.map(e=>F(e))}function L(e,t){return k(()=>P(e,t))}function Qe({tooltip:e}){let{translations:t}=N(),{remotePlaybackState:n}=S(),r=k(()=>`${P(t,`AirPlay`)} ${u(n())}`),i=L(t,`AirPlay`);return x`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${r}>
          ${F(`airplay`)}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function $e({tooltip:e}){let{translations:t}=N(),{remotePlaybackState:n}=S(),r=k(()=>`${P(t,`Google Cast`)} ${u(n())}`),i=L(t,`Google Cast`);return x`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${r}>
          ${F(`google-cast`)}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function R({tooltip:e}){let{translations:t}=N(),n=L(t,`Play`),r=L(t,`Pause`);return x`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${L(t,`Play`)}
        >
          ${I([`play`,`pause`,`replay`])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${n}</span>
        <span class="vds-pause-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function et({tooltip:e,ref:t=h}){let{translations:n}=N(),r=L(n,`Mute`),i=L(n,`Unmute`);return x`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${L(n,`Mute`)}
          ${M(t)}
        >
          ${I([`mute`,`volume-low`,`volume-high`])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function tt({tooltip:e}){let{translations:t}=N(),n=L(t,`Closed-Captions On`),r=L(t,`Closed-Captions Off`);return x`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${L(t,`Captions`)}
        >
          ${I([`cc-on`,`cc-off`])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${r}</span>
        <span class="vds-cc-off-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function nt(){let{translations:e}=N(),t=L(e,`Enter PiP`),n=L(e,`Exit PiP`);return x`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${L(e,`PiP`)}
        >
          ${I([`pip-enter`,`pip-exit`])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function rt({tooltip:e}){let{translations:t}=N(),n=L(t,`Enter Fullscreen`),r=L(t,`Exit Fullscreen`);return x`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${L(t,`Fullscreen`)}
        >
          ${I([`fs-enter`,`fs-exit`])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${n}</span>
        <span class="vds-fs-exit-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function it({backward:e,tooltip:t}){let{translations:n,seekStep:r}=N(),i=e?`Seek Backward`:`Seek Forward`,a=L(n,i);return x`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${k(()=>(e?-1:1)*r())}
          aria-label=${a}
        >
          ${F(e?`seek-backward`:`seek-forward`)}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${L(n,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function at(){let{translations:e}=N(),{live:t}=S(),n=L(e,`Skip To Live`),r=L(e,`LIVE`);return t()?x`
        <media-live-button class="vds-live-button" aria-label=${n}>
          <span class="vds-live-button-text">${r}</span>
        </media-live-button>
      `:null}function ot(){return k(()=>{let{download:e,translations:t}=N(),n=e();if(se(n))return null;let{source:r,title:i}=S(),a=r(),o=de({title:i(),src:a,download:n});return _(o?.url)?x`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${L(t,`Download`)}
                href=${fe(o.url,{download:o.name})}
                download=${o.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${L(t,`Download`)}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function z(){let{translations:e}=N();return x`
    <media-captions
      class="vds-captions"
      .exampleText=${L(e,`Captions look like this`)}
    ></media-captions>
  `}function B(){return x`<div class="vds-controls-spacer"></div>`}function st(e,t){return x`
    <media-menu-portal .container=${k(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function ct(e,t,n,r){let a=_(t)?document.querySelector(t):t;a||=e?.closest(`dialog`),a||=document.body;let o=document.createElement(`div`);o.style.display=`contents`,o.classList.add(n),a.append(o),c(()=>{if(!o)return;let{viewType:e}=S(),t=r();i(o,`data-view-type`,e()),i(o,`data-sm`,t),i(o,`data-lg`,!t),i(o,`data-size`,t?`sm`:`lg`)});let{colorScheme:s}=N();return be(o,s),o}function lt({placement:e,tooltip:t,portal:n}){let{textTracks:r}=C(),{viewType:i,seekableStart:a,seekableEnd:o}=S(),{translations:s,thumbnails:c,menuPortal:u,noModal:d,menuGroup:p,smallWhen:m}=N();if(f(()=>{let e=a(),t=o(),n=v(null);return ye(r,`chapters`,n.set),!n()?.cues.filter(n=>n.startTime<=t&&n.endTime>=e)?.length})())return null;let h=f(()=>d()?l(e):m()?null:l(e)),g=f(()=>!m()&&p()===`bottom`&&i()===`video`?26:0),_=v(!1);function ee(){_.set(!0)}function te(){_.set(!1)}let ne=x`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${k(h)}
      offset=${k(g)}
    >
      ${k(()=>_()?x`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${k(c)}
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
  `;return x`
    <media-menu class="vds-chapters-menu vds-menu" @open=${ee} @close=${te}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${L(s,`Chapters`)}
          >
            ${F(`menu-chapters`)}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${oe(t)?k(t):t}
        >
          ${L(s,`Chapters`)}
        </media-tooltip-content>
      </media-tooltip>
      ${n?st(u,ne):ne}
    </media-menu>
  `}function V(e){let{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g,` `)}var H={type:`color`},ut={type:`radio`,values:{"Monospaced Serif":`mono-serif`,"Proportional Serif":`pro-serif`,"Monospaced Sans-Serif":`mono-sans`,"Proportional Sans-Serif":`pro-sans`,Casual:`casual`,Cursive:`cursive`,"Small Capitals":`capitals`}},dt={type:`slider`,min:0,max:400,step:25,upIcon:null,downIcon:null},ft={type:`slider`,min:0,max:100,step:5,upIcon:null,downIcon:null},pt={type:`radio`,values:[`None`,`Drop Shadow`,`Raised`,`Depressed`,`Outline`]},U={fontFamily:`pro-sans`,fontSize:`100%`,textColor:`#ffffff`,textOpacity:`100%`,textShadow:`none`,textBg:`#000000`,textBgOpacity:`100%`,displayBg:`#000000`,displayBgOpacity:`0%`},W=Object.keys(U).reduce((e,t)=>({...e,[t]:v(U[t])}),{});for(let e of Object.keys(W)){let t=localStorage.getItem(`vds-player:${s(e)}`);_(t)&&W[e].set(t)}function mt(){for(let e of Object.keys(W)){let t=U[e];W[e].set(t)}}var ht=!1,gt=new Set;function _t(){let{player:e}=C();gt.add(e),y(()=>gt.delete(e)),ht||=(a(()=>{for(let t of m(W)){let n=W[t],r=U[t],i=`--media-user-${s(t)}`,a=`vds-player:${s(t)}`;c(()=>{let o=n(),s=o===r,c=s?null:vt(e,t,o);for(let e of gt)e.el?.style.setProperty(i,c);s?localStorage.removeItem(a):localStorage.setItem(a,o)})}},null),!0)}function vt(e,t,n){switch(t){case`fontFamily`:let t=n===`capitals`?`small-caps`:``;return e.el?.style.setProperty(`--media-user-font-variant`,t),bt(n);case`fontSize`:case`textOpacity`:case`textBgOpacity`:case`displayBgOpacity`:return yt(n);case`textColor`:return`rgb(${V(n)} / var(--media-user-text-opacity, 1))`;case`textShadow`:return xt(n);case`textBg`:return`rgb(${V(n)} / var(--media-user-text-bg-opacity, 1))`;case`displayBg`:return`rgb(${V(n)} / var(--media-user-display-bg-opacity, 1))`}}function yt(e){return(parseInt(e)/100).toString()}function bt(e){switch(e){case`mono-serif`:return`"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace`;case`mono-sans`:return`"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace`;case`pro-sans`:return`Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif`;case`casual`:return`"Comic Sans MS", Impact, Handlee, fantasy`;case`cursive`:return`"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive`;case`capitals`:return`"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps`;default:return`"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif`}}function xt(e){switch(e){case`drop shadow`:return`rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px`;case`raised`:return`rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px`;case`depressed`:return`rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px`;case`outline`:return`rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px`;default:return``}}var St=0;function G({label:e=``,value:t=``,children:n}){if(!e)return x`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${n}</div>
      </div>
    `;let r=`vds-menu-section-${++St}`;return x`
    <section class="vds-menu-section" role="group" aria-labelledby=${r}>
      <div class="vds-menu-section-title">
        <header id=${r}>${e}</header>
        ${t?x`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${n}</div>
    </section>
  `}function K({label:e,children:t}){return x`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function q({label:e,icon:t,hint:n}){return x`
    <media-menu-button class="vds-menu-item">
      ${F(`menu-arrow-left`,`vds-menu-close-icon`)}
      ${t?F(t,`vds-menu-item-icon`):null}
      <span class="vds-menu-item-label">${k(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${n?k(n):null} </span>
      ${F(`menu-arrow-right`,`vds-menu-open-icon`)}
    </media-menu-button>
  `}function Ct({value:e=null,options:t,hideLabel:n=!1,children:r=null,onChange:i=null}){function a(e){let{value:t,label:i}=e;return x`
      <media-radio class="vds-radio" value=${t}>
        ${F(`menu-radio-check`)}
        ${n?null:x`
              <span class="vds-radio-label" data-part="label">
                ${_(i)?i:k(i)}
              </span>
            `}
        ${oe(r)?r(e):r}
      </media-radio>
    `}return x`
    <media-radio-group
      class="vds-radio-group"
      value=${_(e)?e:e?k(e):``}
      @change=${i}
    >
      ${g(t)?t.map(a):k(()=>t().map(a))}
    </media-radio-group>
  `}function wt(e){return g(e)?e.map(e=>({label:e,value:e.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function J(){return x`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function Y(){return x`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function X({label:e=null,value:t=null,upIcon:n=``,downIcon:r=``,children:i,isMin:a,isMax:o}){let s=e||t,c=[r?F(r,`down`):null,i,n?F(n,`up`):null];return x`
    <div
      class=${`vds-menu-item vds-menu-slider-item${s?` group`:``}`}
      data-min=${k(()=>a()?``:null)}
      data-max=${k(()=>o()?``:null)}
    >
      ${s?x`
            <div class="vds-menu-slider-title">
              ${[e?x`<div>${e}</div>`:null,t?x`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}var Tt={...dt,upIcon:`menu-opacity-up`,downIcon:`menu-opacity-down`},Et={...ft,upIcon:`menu-opacity-up`,downIcon:`menu-opacity-down`};function Dt(){return k(()=>{let{hasCaptions:e}=S(),{translations:t}=N();return e()?x`
      <media-menu class="vds-font-menu vds-menu">
        ${q({label:()=>P(t,`Caption Styles`)})}
        <media-menu-items class="vds-menu-items">
          ${[G({label:L(t,`Font`),children:[Ot(),kt()]}),G({label:L(t,`Text`),children:[At(),Mt(),jt()]}),G({label:L(t,`Text Background`),children:[Nt(),Pt()]}),G({label:L(t,`Display Background`),children:[Ft(),It()]}),G({children:[Lt()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function Ot(){return Z({label:`Family`,option:ut,type:`fontFamily`})}function kt(){return Z({label:`Size`,option:Tt,type:`fontSize`})}function At(){return Z({label:`Color`,option:H,type:`textColor`})}function jt(){return Z({label:`Opacity`,option:Et,type:`textOpacity`})}function Mt(){return Z({label:`Shadow`,option:pt,type:`textShadow`})}function Nt(){return Z({label:`Color`,option:H,type:`textBg`})}function Pt(){return Z({label:`Opacity`,option:Et,type:`textBgOpacity`})}function Ft(){return Z({label:`Color`,option:H,type:`displayBg`})}function It(){return Z({label:`Opacity`,option:Et,type:`displayBgOpacity`})}function Lt(){let{translations:e}=N();return x`
    <button class="vds-menu-item" role="menuitem" @click=${mt}>
      <span class="vds-menu-item-label">${k(()=>P(e,`Reset`))}</span>
    </button>
  `}function Z({label:e,option:n,type:r}){let{player:i}=C(),{translations:a}=N(),o=W[r],c=()=>P(a,e);function l(){t(),i.dispatchEvent(new Event(`vds-font-change`))}if(n.type===`color`)return K({label:k(c),children:x`
        <input
          class="vds-color-picker"
          type="color"
          .value=${k(o)}
          @input=${function(e){o.set(e.target.value),l()}}
        />
      `});if(n.type===`slider`){let e=function(e){o.set(e.detail+`%`),l()},{min:t,max:r,step:i,upIcon:a,downIcon:s}=n;return X({label:k(c),value:k(o),upIcon:a,downIcon:s,isMin:()=>o()===t+`%`,isMax:()=>o()===r+`%`,children:x`
        <media-slider
          class="vds-slider"
          min=${t}
          max=${r}
          step=${i}
          key-step=${i}
          .value=${k(()=>parseInt(o()))}
          aria-label=${k(c)}
          @value-change=${e}
          @drag-value-change=${e}
        >
          ${J()}${Y()}
        </media-slider>
      `})}let u=wt(n.values);return x`
    <media-menu class=${`vds-${s(r)}-menu vds-menu`}>
      ${q({label:c,hint:()=>{let e=o(),t=u.find(t=>t.value===e)?.label||``;return P(a,_(t)?t:t())}})}
      <media-menu-items class="vds-menu-items">
        ${Ct({value:o,options:u,onChange({detail:e}){o.set(e),l()}})}
      </media-menu-items>
    </media-menu>
  `}function Q({label:e,checked:t,defaultChecked:n=!1,storageKey:r,onChange:i}){let{translations:a}=N(),o=r?localStorage.getItem(r):null,s=v(!!(o??n)),l=v(!1),u=k(_e(s)),f=L(a,e);r&&i(d(s)),t&&c(()=>void s.set(t()));function p(e){e?.button!==1&&(s.set(e=>!e),r&&localStorage.setItem(r,s()?`1`:``),i(s(),e),l.set(!1))}function m(e){ee(e)&&p()}function h(e){e.button===0&&l.set(!0)}return x`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${f}
      aria-checked=${u}
      data-active=${k(()=>l()?``:null)}
      @pointerup=${p}
      @pointerdown=${h}
      @keydown=${m}
    ></div>
  `}function Rt(){return k(()=>{let{translations:e}=N();return x`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${q({label:()=>P(e,`Accessibility`),icon:`menu-accessibility`})}
        <media-menu-items class="vds-menu-items">
          ${[G({children:[zt(),Bt()]}),G({children:[Dt()]})]}
        </media-menu-items>
      </media-menu>
    `})}function zt(){let{userPrefersAnnouncements:e,translations:t}=N(),n=`Announcements`;return K({label:L(t,n),children:Q({label:n,storageKey:`vds-player::announcements`,onChange(t){e.set(t)}})})}function Bt(){return k(()=>{let{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:n}=N(),{viewType:r}=S();if(f(()=>r()!==`video`||n())())return null;let i=`Keyboard Animations`;return K({label:L(e,i),children:Q({label:i,defaultChecked:!0,storageKey:`vds-player::keyboard-animations`,onChange(e){t.set(e)}})})})}function Vt(){return k(()=>{let{noAudioGain:e,translations:t}=N(),{audioTracks:n,canSetAudioGain:r}=S();return f(()=>!(r()&&!e())&&n().length<=1)()?null:x`
      <media-menu class="vds-audio-menu vds-menu">
        ${q({label:()=>P(t,`Audio`),icon:`menu-audio`})}
        <media-menu-items class="vds-menu-items">
          ${[Ht(),Ut()]}
        </media-menu-items>
      </media-menu>
    `})}function Ht(){return k(()=>{let{translations:e}=N(),{audioTracks:t}=S(),n=L(e,`Default`);return f(()=>t().length<=1)()?null:G({children:x`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${q({label:()=>P(e,`Track`)})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${n}
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
      `})})}function Ut(){return k(()=>{let{noAudioGain:e,translations:t}=N(),{canSetAudioGain:n}=S();if(f(()=>!n()||e())())return null;let{audioGain:r}=S();return G({label:L(t,`Boost`),value:k(()=>Math.round(((r()??1)-1)*100)+`%`),children:[X({upIcon:`menu-audio-boost-up`,downIcon:`menu-audio-boost-down`,children:Wt(),isMin:()=>((r()??1)-1)*100<=Gt(),isMax:()=>((r()??1)-1)*100===Kt()})]})})}function Wt(){let{translations:e}=N(),t=L(e,`Boost`),n=Gt,r=Kt,i=qt;return x`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${k(n)}
      max=${k(r)}
      step=${k(i)}
      key-step=${k(i)}
    >
      ${J()}${Y()}
    </media-audio-gain-slider>
  `}function Gt(){let{audioGains:e}=N(),t=e();return g(t)?t[0]??0:t.min}function Kt(){let{audioGains:e}=N(),t=e();return g(t)?t[t.length-1]??300:t.max}function qt(){let{audioGains:e}=N(),t=e();return g(t)?t[1]-t[0]||25:t.step}function Jt(){return k(()=>{let{translations:e}=N(),{hasCaptions:t}=S(),n=L(e,`Off`);return t()?x`
      <media-menu class="vds-captions-menu vds-menu">
        ${q({label:()=>P(e,`Captions`),icon:`menu-captions`})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${n}
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
    `:null})}function Yt(){return k(()=>{let{translations:e}=N();return x`
      <media-menu class="vds-playback-menu vds-menu">
        ${q({label:()=>P(e,`Playback`),icon:`menu-playback`})}
        <media-menu-items class="vds-menu-items">
          ${[G({children:Xt()}),Zt(),rn()]}
        </media-menu-items>
      </media-menu>
    `})}function Xt(){let{remote:e}=C(),{translations:t}=N(),n=`Loop`;return K({label:L(t,n),children:Q({label:n,storageKey:`vds-player::user-loop`,onChange(t,n){e.userPrefersLoopChange(t,n)}})})}function Zt(){return k(()=>{let{translations:e}=N(),{canSetPlaybackRate:t,playbackRate:n}=S();return t()?G({label:L(e,`Speed`),value:k(()=>n()===1?P(e,`Normal`):n()+`x`),children:[X({upIcon:`menu-speed-up`,downIcon:`menu-speed-down`,children:tn(),isMin:()=>n()===Qt(),isMax:()=>n()===$t()})]}):null})}function Qt(){let{playbackRates:e}=N(),t=e();return g(t)?t[0]??0:t.min}function $t(){let{playbackRates:e}=N(),t=e();return g(t)?t[t.length-1]??2:t.max}function en(){let{playbackRates:e}=N(),t=e();return g(t)?t[1]-t[0]||.25:t.step}function tn(){let{translations:e}=N(),t=L(e,`Speed`),n=Qt,r=$t,i=en;return x`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${k(n)}
      max=${k(r)}
      step=${k(i)}
      key-step=${k(i)}
    >
      ${J()}${Y()}
    </media-speed-slider>
  `}function nn(){let{remote:e,qualities:t}=C(),{autoQuality:n,canSetQuality:r,qualities:i}=S(),{translations:a}=N(),o=`Auto`;return f(()=>!r()||i().length<=1)()?null:K({label:L(a,o),children:Q({label:o,checked:n,onChange(n,r){n?e.requestAutoQuality(r):e.changeQuality(t.selectedIndex,r)}})})}function rn(){return k(()=>{let{hideQualityBitrate:e,translations:t}=N(),{canSetQuality:n,qualities:r,quality:i}=S(),a=f(()=>!n()||r().length<=1),o=f(()=>me(r()));return a()?null:G({label:L(t,`Quality`),value:k(()=>{let n=i()?.height,r=e()?null:i()?.bitrate,a=r&&r>0?`${(r/1e6).toFixed(2)} Mbps`:null,o=P(t,`Auto`);return n?`${n}p${a?` (${a})`:``}`:o}),children:[X({upIcon:`menu-quality-up`,downIcon:`menu-quality-down`,children:an(),isMin:()=>o()[0]===i(),isMax:()=>o().at(-1)===i()}),nn()]})})}function an(){let{translations:e}=N(),t=L(e,`Quality`);return x`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${J()}${Y()}
    </media-quality-slider>
  `}function on({placement:e,portal:t,tooltip:n}){return k(()=>{let{viewType:r}=S(),{translations:i,menuPortal:a,noModal:o,menuGroup:s,smallWhen:c}=N(),u=f(()=>o()?l(e):c()?null:l(e)),d=f(()=>!c()&&s()===`bottom`&&r()===`video`?26:0),p=v(!1);_t();function m(){p.set(!0)}function h(){p.set(!1)}let g=x`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${k(u)}
        offset=${k(d)}
      >
        ${k(()=>p()?[Yt(),Rt(),Vt(),Jt()]:null)}
      </media-menu-items>
    `;return x`
      <media-menu class="vds-settings-menu vds-menu" @open=${m} @close=${h}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${L(i,`Settings`)}
            >
              ${F(`menu-settings`,`vds-rotate-icon`)}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${oe(n)?k(n):n}
          >
            ${L(i,`Settings`)}
          </media-tooltip-content>
        </media-tooltip>
        ${t?st(a,g):g}
      </media-menu>
    `})}function sn({orientation:e,tooltip:t}){return k(()=>{let{pointer:n,muted:r,canSetVolume:i}=S();if(n()===`coarse`&&!r())return null;if(!i())return et({tooltip:t});let a=v(void 0),o=xe(a);return x`
      <div class="vds-volume" ?data-active=${k(o)} ${M(a.set)}>
        ${et({tooltip:t})}
        <div class="vds-volume-popup">${cn({orientation:e})}</div>
      </div>
    `})}function cn({orientation:e}={}){let{translations:t}=N(),n=L(t,`Volume`);return x`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${n}
      orientation=${Ee(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function ln(){let e=v(void 0),t=v(0),{thumbnails:n,translations:r,sliderChaptersMinWidth:i,disableTimeSlider:a,seekStep:o,noScrubGesture:s}=N(),c=L(r,`Seek`),l=k(a),u=k(()=>t()<i()),d=k(n);return Se(e,()=>{let n=e();n&&t.set(n.clientWidth)}),x`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${k(o)}
      ?disabled=${l}
      ?no-swipe-gesture=${k(s)}
      ${M(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${u}>
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
  `}function un(){return x`
    <div class="vds-time-group">
      ${k(()=>{let{duration:e}=S();return e()?[x`<media-time class="vds-time" type="current"></media-time>`,x`<div class="vds-time-divider">/</div>`,x`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function dn(){return k(()=>{let{live:e,duration:t}=S();return e()?at():t()?x`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function fn(){return k(()=>{let{live:e}=S();return e()?at():un()})}function pn(){return k(()=>{let{textTracks:e}=C(),{title:t,started:n}=S(),r=v(null);return ye(e,`chapters`,r.set),r()&&(n()||!t())?mn():x`<media-title class="vds-chapter-title"></media-title>`})}function mn(){return x`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}var hn=class extends Ge{async loadIcons(){let t=(await e(async()=>{let{icons:e}=await import(`./vidstack-H72EDyqs-CPSFiCPF.js`);return{icons:e}},__vite__mapDeps([0,1]))).icons,n={};for(let e of Object.keys(t))n[e]=Ue({name:e,paths:t[e]});return n}},gn=class extends Je{static props={...super.props,when:({viewType:e})=>e===`audio`,smallWhen:({width:e})=>e<576}};function _n(){return[Ze(),z(),x`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[it({backward:!0,tooltip:`top start`}),R({tooltip:`top`}),it({tooltip:`top`}),vn(),ln(),dn(),sn({orientation:`vertical`,tooltip:`top`}),tt({tooltip:`top`}),ot(),Qe({tooltip:`top`}),yn()]}
        </media-controls-group>
      </media-controls>
    `]}function vn(){return k(()=>{let e=v(void 0),t=v(!1),n=C(),{title:r,started:i,currentTime:a,ended:o}=S(),{translations:s}=N(),l=Ce(e),u=()=>i()||a()>0,d=()=>{let e=o()?`Replay`:u()?`Continue`:`Play`;return`${P(s,e)}: ${r()}`};c(()=>{l()&&document.activeElement===document.body&&n.player.el?.focus({preventScroll:!0})});function f(){let n=e(),r=!!n&&!l()&&n.clientWidth<n.children[0].clientWidth;n&&te(n,`vds-marquee`,r),t.set(r)}function p(){return x`
        <span class="vds-title-text">
          ${k(d)}${k(()=>u()?mn():null)}
        </span>
      `}return Se(e,f),r()?x`
          <span class="vds-title" title=${k(d)} ${M(e.set)}>
            ${[p(),k(()=>t()&&!l()?p():null)]}
          </span>
        `:B()})}function yn(){let e=`top end`;return[lt({tooltip:`top`,placement:e,portal:!0}),on({tooltip:`top end`,placement:e,portal:!0})]}var bn=class extends ie(ve,gn){static tagName=`media-audio-layout`;static attrs={smallWhen:{converter(e){return e!==`never`&&!!e}}};#e;#t=v(!1);onSetup(){this.forwardKeepAlive=!1,this.#e=C(),this.classList.add(`vds-audio-layout`),this.#i()}onConnect(){Xe(`audio`,()=>this.isMatch),this.#r()}render(){return k(this.#n.bind(this))}#n(){return this.isMatch?_n():null}#r(){let{menuPortal:e}=N();c(()=>{if(!this.isMatch)return;let t=ct(this,this.menuContainer,`vds-audio-layout`,()=>this.isSmallLayout),n=t?[this,t]:[this];return(this.$props.customIcons()?new He(n):new hn(n)).connect(),e.set(t),()=>{t.remove(),e.set(null)}})}#i(){let{pointer:e}=this.#e.$state;c(()=>{e()===`coarse`&&c(this.#a.bind(this))})}#a(){if(!this.#t()){le(this,`pointerdown`,this.#o.bind(this),{capture:!0});return}le(this,`pointerdown`,e=>e.stopPropagation()),le(window,`pointerdown`,this.#s.bind(this))}#o(e){let{target:t}=e;we(t)&&t.closest(`.vds-time-slider`)&&(e.stopImmediatePropagation(),this.setAttribute(`data-scrubbing`,``),this.#t.set(!0))}#s(){this.#t.set(!1),this.removeAttribute(`data-scrubbing`)}},xn=T(class extends E{constructor(){super(...arguments),this.key=b}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(Ne(e),this.key=t),n}}),Sn=class extends Je{static props={...super.props,when:({viewType:e})=>e===`video`,smallWhen:({width:e,height:t})=>e<576||t<380}};function Cn(){return k(()=>{let e=C(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:n}=N();if(f(()=>t()||!n())())return null;let r=v(!1),{lastKeyboardAction:i}=e.$state;c(()=>{r.set(!!i());let e=setTimeout(()=>r.set(!1),500);return()=>{r.set(!1),window.clearTimeout(e)}});let a=f(()=>{let e=i()?.action;return e&&r()?s(e):null}),o=f(()=>`vds-kb-action${r()?``:` hidden`}`),l=f(wn),u=f(()=>{let e=En();return e?Te(e):null});function d(){let e=u();return e?x`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${e}</div>
        </div>
      `:null}return x`
      <div class=${k(o)} data-action=${k(a)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${k(l)}</div>
        </div>
        ${k(()=>xn(i(),d()))}
      </div>
    `})}function wn(){let{$state:e}=C(),t=e.lastKeyboardAction()?.action,n=e.audioGain()??1;switch(t){case`toggleMuted`:return e.muted()?`0%`:Tn(e.volume(),n);case`volumeUp`:case`volumeDown`:return Tn(e.volume(),n);default:return``}}function Tn(e,t){return`${Math.round(e*t*100)}%`}function En(){let{$state:e}=C();switch(e.lastKeyboardAction()?.action){case`togglePaused`:return e.paused()?`kb-pause-icon`:`kb-play-icon`;case`toggleMuted`:return e.muted()||e.volume()===0?`kb-mute-icon`:e.volume()>=.5?`kb-volume-up-icon`:`kb-volume-down-icon`;case`toggleFullscreen`:return`kb-fs-${e.fullscreen()?`enter`:`exit`}-icon`;case`togglePictureInPicture`:return`kb-pip-${e.pictureInPicture()?`enter`:`exit`}-icon`;case`toggleCaptions`:return e.hasCaptions()?`kb-cc-${e.textTrack()?`on`:`off`}-icon`:null;case`volumeUp`:return`kb-volume-up-icon`;case`volumeDown`:return`kb-volume-down-icon`;case`seekForward`:return`kb-seek-forward-icon`;case`seekBackward`:return`kb-seek-backward-icon`;default:return null}}function Dn(){return[Ze(),Pn(),$(),Cn(),z(),x`<div class="vds-scrim"></div>`,x`
      <media-controls class="vds-controls">
        ${[kn(),B(),x`<media-controls-group class="vds-controls-group"></media-controls-group>`,B(),x`
            <media-controls-group class="vds-controls-group">
              ${ln()}
            </media-controls-group>
          `,x`
            <media-controls-group class="vds-controls-group">
              ${[R({tooltip:`top start`}),sn({orientation:`horizontal`,tooltip:`top`}),fn(),pn(),tt({tooltip:`top`}),On(),Qe({tooltip:`top`}),$e({tooltip:`top`}),ot(),nt(),rt({tooltip:`top end`})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function On(){return k(()=>{let{menuGroup:e}=N();return e()===`bottom`?Nn():null})}function kn(){return x`
    <media-controls-group class="vds-controls-group">
      ${k(()=>{let{menuGroup:e}=N();return e()===`top`?[B(),Nn()]:null})}
    </media-controls-group>
  `}function An(){return[Ze(),Pn(),$(),z(),Cn(),x`<div class="vds-scrim"></div>`,x`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Qe({tooltip:`top start`}),$e({tooltip:`bottom start`}),B(),tt({tooltip:`bottom`}),ot(),Nn(),sn({orientation:`vertical`,tooltip:`bottom end`})]}
        </media-controls-group>

        ${B()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[B(),R({tooltip:`top`}),B()]}
        </media-controls-group>

        ${B()}

        <media-controls-group class="vds-controls-group">
          ${[fn(),pn(),rt({tooltip:`top end`})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${ln()}
        </media-controls-group>
      </media-controls>
    `,Mn()]}function jn(){return x`
    <div class="vds-load-container">
      ${[$(),R({tooltip:`top`})]}
    </div>
  `}function Mn(){return k(()=>{let{duration:e}=S();return e()===0?null:x`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function $(){return x`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function Nn(){let{menuGroup:e,smallWhen:t}=N(),n=()=>e()===`top`||t()?`bottom`:`top`,r=f(()=>`${n()} ${e()===`top`?`end`:`center`}`),i=f(()=>`${n()} end`);return[lt({tooltip:r,placement:i,portal:!0}),on({tooltip:r,placement:i,portal:!0})]}function Pn(){return k(()=>{let{noGestures:e}=N();return e()?null:x`
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
    `})}var Fn=class extends ie(ve,Sn){static tagName=`media-video-layout`;static attrs={smallWhen:{converter(e){return e!==`never`&&!!e}}};#e;onSetup(){this.forwardKeepAlive=!1,this.#e=C(),this.classList.add(`vds-video-layout`)}onConnect(){Xe(`video`,()=>this.isMatch),this.#t()}render(){return k(this.#n.bind(this))}#t(){let{menuPortal:e}=N();c(()=>{if(!this.isMatch)return;let t=ct(this,this.menuContainer,`vds-video-layout`,()=>this.isSmallLayout),n=t?[this,t]:[this];return(this.$props.customIcons()?new He(n):new hn(n)).connect(),e.set(t),()=>{t.remove(),e.set(null)}})}#n(){let{load:e}=this.#e.$props,{canLoad:t,streamType:n,nativeControls:r}=this.#e.$state;return!r()&&this.isMatch?e()===`play`&&!t()?jn():n()===`unknown`?$():this.isSmallLayout?An():Dn():null}};ae(bn),ae(Fn);