import{ao as l,ap as h,aq as o,ar as p,o as b,as as g,at as n,l as c,al as y}from"./vidstack-1H0xyD-V-hgVHqCLM.js";import{H as f}from"./vidstack-2gN4S9Em-mKZjYLRU.js";import"./app-adpMbaRp.js";class P{constructor(t,e){this.ya=t,this.d=e,t.textTracks.onaddtrack=this.ib.bind(this),b(this.jb.bind(this))}ib(t){const e=t.track;if(!e||k(this.ya,e))return;const i=new g({id:e.id,kind:e.kind,label:e.label,language:e.language,type:"vtt"});i[n.kb]={track:e},i[n.Ya]=2,i[n.lb]=!0;let s=0;const u=d=>{if(e.cues)for(let a=s;a<e.cues.length;a++)i.addCue(e.cues[a],d),s++};u(t),e.oncuechange=u,this.d.textTracks.add(i,t),i.setMode(e.mode,t)}jb(){var t;this.ya.textTracks.onaddtrack=null;for(const e of this.d.textTracks){const i=(t=e[n.kb])==null?void 0:t.track;i!=null&&i.oncuechange&&(i.oncuechange=null)}}}function k(r,t){return Array.from(r.children).find(e=>e.track===t)}class m{constructor(t,e){this.mb=(i,s)=>{this.b.delegate.a("picture-in-picture-change",i,s)},this.ya=t,this.b=e,c(this.ya,"enterpictureinpicture",this.nb.bind(this)),c(this.ya,"leavepictureinpicture",this.ob.bind(this))}get active(){return document.pictureInPictureElement===this.ya}get supported(){return o(this.ya)}async enter(){return this.ya.requestPictureInPicture()}exit(){return document.exitPictureInPicture()}nb(t){this.mb(!0,t)}ob(t){this.mb(!1,t)}}class T{constructor(t,e){this.pb="inline",this.ya=t,this.b=e,c(this.ya,"webkitpresentationmodechanged",this.Za.bind(this))}get sb(){return h(this.ya)}async rb(t){this.pb!==t&&this.ya.webkitSetPresentationMode(t)}Za(t){var i;const e=this.pb;this.pb=this.ya.webkitPresentationMode,(i=this.b.player)==null||i.dispatch(new y("video-presentation-change",{detail:this.pb,trigger:t})),["fullscreen","picture-in-picture"].forEach(s=>{(this.pb===s||e===s)&&this.b.delegate.a(`${s}-change`,this.pb===s,t)})}}class q{constructor(t){this.qb=t}get active(){return this.qb.pb==="fullscreen"}get supported(){return this.qb.sb}async enter(){this.qb.rb("fullscreen")}async exit(){this.qb.rb("inline")}}class x{constructor(t){this.qb=t}get active(){return this.qb.pb==="picture-in-picture"}get supported(){return this.qb.sb}async enter(){this.qb.rb("picture-in-picture")}async exit(){this.qb.rb("inline")}}class E extends f{constructor(t,e){super(t),this.$$PROVIDER_TYPE="VIDEO",l(()=>{if(h(t)){const i=new T(t,e);this.fullscreen=new q(i),this.pictureInPicture=new x(i)}else o(t)&&(this.pictureInPicture=new m(t,e))},this.scope)}get type(){return"video"}setup(t){super.setup(t),p(this.video)&&new P(this.video,t),t.textRenderers.S(this.video),b(()=>{t.textRenderers.S(null)}),this.type==="video"&&t.delegate.a("provider-setup",this)}get video(){return this.b}}export{E as VideoProvider};