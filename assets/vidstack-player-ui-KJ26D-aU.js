import{C as N,m as ss,F as as,o as Vt,r as nt,n as kt,t as Bt,p as Rt,H as a,q as es,G as is,P as ns,u as T,e as c,T as cs,v as Pt,w as os,x as hs,y as rs,c as ms,z as ls,A as ps,B as us,E as gs,I as xs,J as ds,K as Ns,S as Ts,L as bs,N as Hs,O as Ls,Q as fs,R as ys,U as Cs,V as vs,W as $s,j as Gt,X as qs,Y as As,Z as Ss,_ as ws,$ as zs,a0 as Os,a1 as Et,a2 as Fs,a3 as js,a4 as Ds,a5 as Js,a6 as Ks,a7 as Qs,a8 as Us,a9 as Ws,aa as _t,s as o,ab as Mt,l as Xs,d as s}from"./vidstack-1H0xyD-V-hgVHqCLM.js";import"./app-adpMbaRp.js";class Ys extends N{onAttach(t){ss(t,"pointer-events","auto")}}class Zs extends N{constructor(){super(),new as}onConnect(t){Vt(nt(()=>{if(!this.connectScope)return;this.Cd();const i=kt(Bt);Vt(()=>{const e=this.Bd();e&&i.vd(e)})}))}Cd(){const t=this.Bd(),i=kt(Bt);t&&i.ud(t)}Bd(){const t=this.el.firstElementChild;return(t==null?void 0:t.localName)==="button"||(t==null?void 0:t.getAttribute("role"))==="button"?t:this.el}}class Is extends Rt{}const ct=class ct extends a(HTMLElement,es){};ct.tagName="media-captions";let b=ct;const ot=class ot extends a(HTMLElement,is){};ot.tagName="media-gesture";let H=ot;const ht=class ht extends a(HTMLElement,ns){constructor(){super(...arguments),this.pa=document.createElement("img")}onSetup(){this.b=T(),this.$state.img.set(this.pa)}onConnect(){const{src:t,alt:i}=this.$state,{crossorigin:e}=this.b.$state;this.pa.parentNode!==this&&this.prepend(this.pa),c(()=>{o(this.pa,"src",t()),o(this.pa,"alt",i()),o(this.pa,"crossorigin",/ytimg\.com|vimeo/.test(t()||"")?null:e())})}};ht.tagName="media-poster";let L=ht;const Vs=Mt('<img loading="eager" decoding="async" aria-hidden="true">'),rt=class rt extends a(HTMLElement,cs){constructor(){super(...arguments),this.pa=this.qa()}onSetup(){this.b=T(),this.$state.img.set(this.pa)}onConnect(){const{src:t}=this.$state,{crossorigin:i}=this.b.$props;this.pa.parentNode!==this&&this.prepend(this.pa),c(()=>{o(this.pa,"src",t()),o(this.pa,"crossorigin",i())})}qa(){return Pt(Vs)}};rt.tagName="media-thumbnail";let g=rt;const mt=class mt extends a(HTMLElement,os){onConnect(){c(()=>{this.textContent=this.$state.timeText()})}};mt.tagName="media-time";let f=mt;const lt=class lt extends a(HTMLElement,hs){};lt.tagName="media-controls";let y=lt;const pt=class pt extends a(HTMLElement,Ys){};pt.tagName="media-controls-group";let C=pt;class ks extends N{}const ut=class ut extends a(HTMLElement,ks){onSetup(){this.b=T(),this.ra=rs(""),this.sa=ms(this.ta.bind(this))}onConnect(){ls(this.b.textTracks,"chapters",t=>{if(!t){this.ra.set("");return}const i=()=>{const e=t==null?void 0:t.activeCues[0];this.ra.set((e==null?void 0:e.text)||"")};i(),Xs(t,"cue-change",i)}),c(()=>{this.textContent=this.sa()})}ta(){const{title:t,started:i}=this.b.$state,e=t(),n=this.ra();return i()?n||e:e||n}};ut.tagName="media-chapter-title";let v=ut;const gt=class gt extends N{};gt.props={when:""};let $=gt;const xt=class xt extends a(HTMLElement,$){onSetup(){this.query=ps.create(this.$props.when)}onConnect(){c(this.ua.bind(this))}ua(){const t=this.firstElementChild,i=(t==null?void 0:t.localName)==="template",e=t instanceof HTMLElement;if(!this.query.matches){if(i)for(const n of this.children)n.localName!=="template"&&n.remove();else e&&(t.style.display="none");return}i?this.append(t.content.cloneNode(!0)):e&&(t.style.display="")}};xt.tagName="media-layout";let q=xt;const dt=class dt extends a(HTMLElement,us){};dt.tagName="media-play-button";let A=dt;const Nt=class Nt extends a(HTMLElement,gs){};Nt.tagName="media-mute-button";let S=Nt;const Tt=class Tt extends a(HTMLElement,xs){};Tt.tagName="media-caption-button";let w=Tt;const bt=class bt extends a(HTMLElement,ds){};bt.tagName="media-fullscreen-button";let z=bt;const Ht=class Ht extends a(HTMLElement,Ns){};Ht.tagName="media-pip-button";let O=Ht;const Lt=class Lt extends a(HTMLElement,Ts){};Lt.tagName="media-seek-button";let F=Lt;const ft=class ft extends a(HTMLElement,bs){};ft.tagName="media-toggle-button";let j=ft;const yt=class yt extends a(HTMLElement,Hs){};yt.tagName="media-live-button";let D=yt;const Ct=class Ct extends a(HTMLElement,Ls){};Ct.tagName="media-tooltip";let J=Ct;const vt=class vt extends a(HTMLElement,Zs){onConnect(){this.style.display="contents"}};vt.tagName="media-tooltip-trigger";let K=vt;const $t=class $t extends a(HTMLElement,fs){};$t.tagName="media-tooltip-content";let Q=$t;function p(h,t){nt(()=>{if(!h.connectScope)return;const i=h.querySelector("template");i&&c(()=>{const e=h.getOptions();_t(i,e.length,(n,l)=>{const{label:r,value:u}=e[l],m=n.querySelector('[data-part="label"]');n.setAttribute("value",u),m&&(Gt(r)?m.textContent=r:c(()=>{m.textContent=r()})),t==null||t(n,e[l],l)})})})}const qt=class qt extends a(HTMLElement,ys){onConnect(){p(this)}};qt.tagName="media-audio-radio-group";let U=qt;const At=class At extends a(HTMLElement,Cs){onConnect(){p(this)}};At.tagName="media-captions-radio-group";let W=At;const St=class St extends a(HTMLElement,vs){};St.tagName="media-menu";let X=St;const wt=class wt extends a(HTMLElement,Rt){};wt.tagName="media-menu-button";let Y=wt;const x=class x extends a(HTMLElement,$s){};x.tagName="media-menu-portal",x.attrs={disabled:{converter(t){return Gt(t)?t:t!==null}}};let Z=x;const zt=class zt extends a(HTMLElement,Is){};zt.tagName="media-menu-item";let I=zt;const Ot=class Ot extends a(HTMLElement,qs){};Ot.tagName="media-menu-items";let V=Ot;const Ft=class Ft extends a(HTMLElement,As){onConnect(){p(this,(t,i)=>{const{cue:e,startTime:n,duration:l}=i,r=t.querySelector(".vds-thumbnail,media-thumbnail"),u=t.querySelector('[data-part="start-time"]'),m=t.querySelector('[data-part="duration"]');u&&(u.textContent=n),m&&(m.textContent=l),r&&(r.setAttribute("time",e.startTime+""),c(()=>{const{thumbnails:ts}=this.$props;r.setAttribute("src",ts())}))})}};Ft.tagName="media-chapters-radio-group";let k=Ft;const jt=class jt extends a(HTMLElement,Ss){onConnect(){p(this)}};jt.tagName="media-speed-radio-group";let B=jt;const Dt=class Dt extends a(HTMLElement,ws){onConnect(){p(this,(t,i)=>{const e=i.bitrate,n=t.querySelector('[data-part="bitrate"]');e&&n&&c(()=>{n.textContent=e()||""})})}};Dt.tagName="media-quality-radio-group";let R=Dt;const Jt=class Jt extends a(HTMLElement,zs){};Jt.tagName="media-radio";let P=Jt;const Kt=class Kt extends a(HTMLElement,Os){};Kt.tagName="media-radio-group";let G=Kt;const Qt=class Qt extends a(HTMLElement,Et){};Qt.tagName="media-slider";let E=Qt;const Ut=class Ut extends g{onSetup(){super.onSetup(),this.wa=Fs(Et.state)}onConnect(){super.onConnect(),c(this.xa.bind(this))}xa(){const{duration:t}=this.b.$state;this.time=this.wa.pointerRate()*t()}};Ut.tagName="media-slider-thumbnail";let _=Ut;const d=class d extends a(HTMLElement,js){onConnect(){c(()=>{this.textContent=this.getValueText()})}};d.tagName="media-slider-value",d.attrs={padMinutes:{converter:Ds}};let M=d;const Bs=Mt('<video muted playsinline preload="none" style="max-width: unset;"></video>'),Wt=class Wt extends a(HTMLElement,Js){constructor(){super(...arguments),this.ya=this.oa()}onSetup(){this.b=T(),this.$state.video.set(this.ya)}onConnect(){const{crossorigin:t,canLoad:i}=this.b.$state,{src:e}=this.$state;this.ya.parentNode!==this&&this.prepend(this.ya),c(()=>{o(this.ya,"src",e()),o(this.ya,"crossorigin",t()),o(this.ya,"preload",i()?"auto":"none")})}oa(){return Pt(Bs)}};Wt.tagName="media-slider-video";let tt=Wt;const Xt=class Xt extends a(HTMLElement,Ks){};Xt.tagName="media-time-slider";let st=Xt;const Yt=class Yt extends a(HTMLElement,Qs){};Yt.tagName="media-slider-preview";let at=Yt;const Zt=class Zt extends a(HTMLElement,Us){};Zt.tagName="media-volume-slider";let et=Zt;const It=class It extends a(HTMLElement,Ws){constructor(){super(...arguments),this.za=null}onConnect(){nt(()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.za=t,c(this.Aa.bind(this)))})}Aa(){if(!this.za)return;const t=_t(this.za,this.cues.length||1);this.setRefs(t)}};It.tagName="media-slider-chapters";let it=It;s(q);s(y);s(C);s(L);s(w);s(z);s(S);s(O);s(A);s(F);s(j);s(E);s(et);s(st);s(it);s(at);s(M);s(_);s(tt);s(X);s(Y);s(Z);s(V);s(I);s(U);s(W);s(B);s(R);s(k);s(G);s(P);s(J);s(K);s(Q);s(H);s(g);s(b);s(D);s(f);s(v);