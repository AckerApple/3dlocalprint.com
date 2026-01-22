var rm=Object.defineProperty;var sm=(n,t,e)=>t in n?rm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Zt=(n,t,e)=>sm(n,typeof t!="symbol"?t+"":t,e);function mn(n){return n.renderCount=n.renderCount||0,n.varCounter=0,n.state={newer:{state:[],states:[]}},n.global={blocked:[]}}function Ws(){return it.stateConfig.support}function Ii(n){return Yt(n.context),it.stateConfig.support=n}const Bt=function(){};let Jt=[];const Js=[];let ne=[],Xt=[],Gs=[];const _t={locks:0};function im(n,t){t.textContent=n}function we(){_t.locks>0||om()}function om(){++_t.locks,um(),--_t.locks,am()}function am(){lm();const n=Gs;Gs=[];for(const t of n)t[0](...t[1])}function cm(){for(const n of Js)n[0](...n[1])}function um(){const n=Js.length;cm(),Js.splice(0,n);for(const t of ne)t[0](...t[1]);for(const t of Xt)t[0](...t[1]);for(const t of Jt)t[0](...t[1])}function lm(){Jt=[],ne=[],Xt=[]}function Or(n,t){Js.push([hm,[n,t]])}function hm(n,t){n.parentNode.removeChild(n)}function He(n,t,e){n.parentNode.insertBefore(t,n)}function re(n,t){n.appendChild(t)}const Ln=typeof document=="object"&&document.createElement("div");function dm(n){return Ln.innerHTML=n,document.createTextNode(Ln.innerHTML)}function Rh(n,t,e=Bt,r){const s=dm(t);He(n,s),e(s)}function fm(n,t,e=Bt){Ln.innerHTML=t;const r=document.createTextNode(Ln.textContent);He(n,r),e(r)}function pm(n,t,e){Ln.innerHTML=t;const r=document.createTextNode(Ln.textContent);re(n,r),e(r)}const _n="";var Ks;(function(n){n.string="string",n.number="number",n.boolean="boolean",n.undefined="undefined"})(Ks||(Ks={}));var X;(function(n){n.function="function",n.date="date",n.unknown="unknown",n.object="object"})(X||(X={}));const gm=Date.now(),J={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",renderOnce:"renderOnce",stateRender:"stateRender",version:gm};function Ph(n){if(!n)return!1;switch(n.tagJsType){case J.dom:case J.tag:case J.templater:return!0}return!1}function Jr(n){const t=n==null?void 0:n.tagJsType;return t===J.tagComponent||t===J.stateRender}function mm(n){return vi(n)&&typeof n.subscribe===X.function}function Gn(n){return n&&ze(n.then)}function ze(n){return typeof n===X.function}function vi(n){return typeof n===X.object&&n!==null}function Ht(n){return Array.isArray(n)}function kh(n){const t=n.state;if(t&&t.newest&&t.newest)return t.newest;if(n.parentContext)return kh(n.parentContext)}function Gr(n){let t=n;for(;t.ownerSupport&&!Jr(t.templater);)t=t.ownerSupport;const r=t.context.state;return r&&r.newest||t}function _m(...n){return n}function Vh(n){const t=it.stateConfig;return t.states[t.statesIndex]=n,++t.statesIndex,n(_m)}function ym(n){const t=it.stateConfig,e=t.statesIndex,l=Gr(t.prevSupport).context.state.older.states[e];let h=[];l(function(...m){return h=m,l.lastValues=h,m});const f=function(...m){return h};return t.states[t.statesIndex]=n,++t.statesIndex,n(f)}function Dh(n){Yt(n);const t=it.stateConfig;t.handlers.handler=Nh,t.handlers.statesHandler=Vh,t.rearray=[];const e=t.state=[],r=t.states=[];t.statesIndex=0;const s=n.state=n.state||{};s.newer={state:e,states:r}}class Tm{}function Em(n){const[t]=n(Tm),[e]=n(t);return[t,e]}function wm(n){const t=n.callback;if(!t)return n.defaultValue;const[e]=Em(t);return e}function Im(){const n=it.stateConfig,e=n.rearray[n.state.length];return n.state.push(e),e.defaultValue}function Nh(n){var a,c;const t=it.stateConfig,e=de();if(!e||!e.state){const l="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(l,{config:t,context:e,function:(c=(a=t.support)==null?void 0:a.templater.wrapper)==null?void 0:c.original}),new Error(l)}const r=e.state.newer;t.state=r.state;let s=n;if(typeof n===X.function&&(s=n()),typeof s===X.function){const l=s;s=function(...f){return l(...f)},s.original=l}const i={get:function(){return wm(i)},defaultValue:s};return t.state.push(i),s}function vm(n){const t=new Z,e=r=>{const s=[],i=[],a=(p,m)=>{if(s[m]=!0,i[m]=p,s.length===n.length){for(const S of s)if(!S)return;r(i,h)}},c=[...n],h=c.shift().subscribe(p=>a(p,0)),f=c.map((p,m)=>p.subscribe(v=>a(v,m+1)));return h.subscriptions=f,h};return t.subscribeWith=e,t}function Am(n,t){const e=n.findIndex(r=>r.callback===t);e!==-1&&n.splice(e,1)}function bm(n,t,e){const r=Z.globalSubCount$;Z.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=t,s.subscriptions=[],s.unsubscribe=function(){return Cm(s,e,t)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{t(i,s)},s}function Oh(n,t,e){const r=[...t],s=r.shift(),i=f=>{if(r.length)return Oh(f,r,e);e(f)};let a=i;const h=s(n,{setHandler:f=>a=f,next:i});a(h)}function Cm(n,t,e){Am(t,e);const r=Z.globalSubCount$;Z.globalSubCount$.next(r.value-1),n.unsubscribe=()=>n;const s=n.subscriptions;for(const i of s)i.unsubscribe();return n}const Pn=class Pn{constructor(t,e){Zt(this,"onSubscription");Zt(this,"methods",[]);Zt(this,"isSubject",!0);Zt(this,"subscribers",[]);Zt(this,"subscribeWith");Zt(this,"value");Zt(this,"set",this.next.bind(this));this.onSubscription=e,arguments.length>0&&(this.value=t)}subscribe(t){const e=bm(this,t,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=t;t=i=>{Oh(i,this.methods,a=>s(a,e))}}return r(t)}return this.subscribers.push(e),this.onSubscription&&this.onSubscription(e),e}next(t){this.value=t,this.emit()}emit(){const t=this.value,e=this.subscribers;for(const r of e)r.callback(t,r)}toPromise(){return new Promise(t=>{this.subscribe((e,r)=>{r.unsubscribe(),t(e)})})}toCallback(t){const e=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>e.unsubscribe(),0),t(r)});return e}pipe(...t){const e=[];"value"in this&&e.push(this.value);const r=new Pn(...e);return r.setMethods(t),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(t){this.methods=t}static all(t){const e=t.map(r=>mm(r)?r:new Pn(r,i=>(i.next(r),i)));return vm(e)}};Zt(Pn,"globalSubCount$",new Pn(0));let Z=Pn;const Sm=new Z(void 0,function(t){Ws()||t.next()}),it={stateConfig:{state:[],version:Date.now(),handlers:{handler:Nh,statesHandler:Vh}},tagClosed$:Sm};function Rm(n,t){const r=n.templater.tag.values;for(const s of t)Pm(r,s,n);return t}function Pm(n,t,e){if(t.deleted)return;const r=t.valueIndex,s=n[r],i=t.tagJsVar;Yt(t),i.processUpdate(s,t,e,n),Gt(),t.value=s}function Mh(n,t){const e=n.context.contexts;km(n,t),++_t.locks,Rm(n,e),--_t.locks,we()}function km(n,t){const e=t.templater,r=t.templater.tag,s=e.values||r.values,i=n.templater.tag;i.values=s}function Vm(n,t){return jo(n,t)}function jo(n,t){if(n===null||typeof n!==X.object||t<0)return n;if(n instanceof Date)return new Date(n);if(n instanceof RegExp)return new RegExp(n);const e=Ht(n)?[]:Object.create(Object.getPrototypeOf(n));if(Ht(n))for(let r=0;r<n.length;r++)e[r]=jo(n[r],t-1);else for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=jo(n[r],t-1));return e}function Lh(n,t,e){return ma(n,t,e)}function ma(n,t,e){return n===t||Om(n,t)||e<0?!0:typeof n===X.object&&typeof t===X.object?n instanceof Date&&t instanceof Date?n.getTime()===t.getTime():Ht(n)&&Ht(t)?Nm(n,t,e-1):Ht(n)||Ht(t)?!1:Dm(n,t,e-1):!1}function Dm(n,t,e){const r=Object.keys(n),s=Object.keys(t);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!ma(n[i],t[i],e-1))return!1;return!0}function Nm(n,t,e){if(n.length!==t.length)return!1;for(let r=0;r<n.length;r++)if(!ma(n[r],t[r],e-1))return!1;return!0}function Om(n,t){return ze(n)&&ze(t)&&n.toString()===t.toString()}function Fu(n){return n.map(_a)}function _a(n,t){const e=n,r=n==null?void 0:n.tagJsType;if(r)switch(r){case J.signal:case J.subscribe:case J.stateRender:return;case J.dom:case J.tag:case J.templater:return Fu(e.values)}return Ht(n)?Fu(e):Vm(n,t)}function xh(n,t){const e=n.length;for(let r=0;r<e;++r){const s=n[r],i=t[r];if(Ht(s)&&Ht(i)){if(s===i)continue;return 3}if(!(typeof s===X.function&&typeof i===X.function)){if(typeof s===X.object){if(!s&&!i)continue;if(typeof t===X.object){const a=Object.entries(s);for(const c of a)if(!Mm(c,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function Mm([n,t],e){const r=e[n];return typeof t===X.function&&typeof r===X.function?!0:r===t}function Fh(n,t){const e=n.context.providers;if(e)for(const r of e)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===t&&r.children.splice(s,1);n.context.destroy$.next(),n.context.renderCount=0}function $o(n,t){for(const e of n){const r=e.lastArray;if(r){$o(r,t);continue}const s=e.value;if((s==null?void 0:s.tagJsType)===J.subscribe){s.destroy(e,t),e.deleted=!0;continue}const i=e.global;if(!i)continue;const a=e.state.newest,c=i.subscriptions;c&&c.forEach(Bh),Jr(a.templater)&&Fh(a,i);const l=e.contexts;$o(l,a),i.deleted=!0}}function Uh(n,t=[],e=[]){for(const r of n){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){t.push(i);const c=s.subscriptions;c&&e.push(...c)}const a=r.contexts;a&&Uh(a,t,e)}return{tags:t,subs:e}}function Bh(n){n.unsubscribe()}function yn(n,t,e){const r=t.tagJsVar.tagJsType;return r&&["tag-conversion","element"].includes(r)?(t.tagJsVar.processUpdate(n,t,e,[]),t.value=n,0):n===t.value?0:(++t.updateCount,Va(t,n,e))}function jh(n,t,e,r,s){const i=t.context;i.locked=3,e.target=e.target||r,Yt(e),e.tagJsVar.processInit(n,e,t,s,r),Gt(),e.value=n,delete i.locked}function Ai(n){switch(n){case void 0:case!1:case null:return _n}return n}function Lm(n,t){const e=Ai(n);if(t.paint){t.paint[1][1]=e;return}const r=t.simpleValueElm;ne.push([im,[e,r]])}function xm(n,t){t.value=n,t.oldTagJsVar=t.tagJsVar,t.tagJsVar=Hh(n);const e=t.placeholder,r=Ai(n),s=t.paint=[Rh,[e,r,function(a){t.simpleValueElm=a,delete t.paint},"processNowRegularValue"]];Jt.push(s)}function bi(n){if(n.startsWith("class."))return"class";const t=Fm(n);return t!==!1?t:n.startsWith("style.")?"style":!1}function Fm(n){switch(n){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function $h(n,t,e,r){switch(r){case"autofocus":Gs.push([Hm,[e]]);return;case"autoselect":Gs.push([qm,[e]]);return;case"style":{const s=n.split(".");ne.push([Um,[e,s,t]]);return}case"class":Bm(n,t,e);return}throw new Error(`Invalid special attribute of ${r}. ${n}`)}function Um(n,t,e){const r=t[1];n.style[r]=e,n.style.setProperty(r,e)}function Bm(n,t,e){const r=n.split(".");if(r.shift(),t){for(const s of r)ne.push([jm,[e,s]]);return}for(const s of r)ne.push([$m,[e,s]])}function jm(n,t){n.classList.add(t)}function $m(n,t){n.classList.remove(t)}function qm(n){n.select()}function Hm(n){n.focus()}function zm(n,t,e){typeof n[t]!="object"&&(n[t]={});for(const r in e){const s=e[r];ne.push([Gm,[n,t,r,s]])}if(n[t].setProperty)for(const r in e){const s=e[r];ne.push([Jm,[n,t,r,s]])}}function Wm(n,t,e){n.setAttribute(t,"")}function Kn(n,t,e){if(vi(e))return zm(n,t,e);qh(n,t,e)}function Ao(n,t,e){e?n[t]=!0:n[t]=!1}function qh(n,t,e){if(n[t]=e,e===void 0||e===!1||e===null){n.removeAttribute(t);return}n.setAttribute(t,e)}function Jm(n,t,e,r){n[t].setProperty(e,r)}function Gm(n,t,e,r){n[t][e]=r}function Km(n,t,e,r,s){const i=n(),a={tagJsType:"dynamic-attr",matchesInjection:h=>{const f=c.tagJsVar;if(f.matchesInjection)return f.matchesInjection(h,c)},hasValueChanged:(h,f,p)=>{const m=n();return c.tagJsVar.hasValueChanged(m,c,p)},processInit:Bt,processInitAttribute:Bt,destroy:(h,f)=>{c.tagJsVar.destroy(c,f)},processUpdate:(h,f,p,m)=>{++f.updateCount;const v=h();c.tagJsVar.processUpdate(v,c,p,m),c.value=v}},c={updateCount:0,isAttr:!0,target:r,parentContext:t,value:i,tagJsVar:Qn(i),valueIndex:-1,withinOwnerElement:!0,destroy$:new Z,render$:new Z},l={updateCount:0,isAttr:!0,contexts:[c],target:r,parentContext:t,value:n,tagJsVar:a,valueIndex:-1,withinOwnerElement:!0,destroy$:new Z,render$:new Z};return c.tagJsVar.processInitAttribute(e,i,r,c.tagJsVar,c,{},s),l}function Qm(n,t,e,r,s,i,a){return e.target=r,e.howToSet=s,e.attrName=n,e.isSpecial=a,t!=null&&t.tagJsType?Xm(n,t,e,i,r):ya(n,t,r,s,a,e)}function Xm(n,t,e,r,s){t.processInitAttribute(n,t,s,t,e,r,Kn),e.tagJsVar=t}function ya(n,t,e,r,s,i){if(typeof t=="function")return Km(t,i,n,e,r);if(s)return $h(n,t,e,s);r(e,n,t)}function Ym(n,t,e,r,s,i){const a=t.tagJsVar,c=n;if(a.hasValueChanged(c,t,e)>0){a.destroy(t,e),r.removeAttribute(s);const h=Qn(n);h.isAttr=!0,h.processInitAttribute(s,n,r,h,t,e,i),t.tagJsVar=h;return}}function Zm(n,t,e,r,s,i,a){r.destroy=t_,r.hasValueChanged=r_,r.processUpdate=(l,h,f)=>Ym(l,h,f,e,n,a);const c=bi(n);ya(n,t,e,a,c,s),s.tagJsVar=r}function t_(n){const t=n.target,e=n.attrName;t.removeAttribute(e)}function Hh(n){return{tagJsType:"simple",value:n,processInitAttribute:Zm,processInit:n_,destroy:zh,hasValueChanged:s_,processUpdate:e_}}function e_(n,t,e){return n===t.value?0:Va(t,n,e)}function n_(n,t,e,r,s){const i=Ai(n);r=t.placeholder;const a=t.paint=[Rh,[r,i,function(l){t.simpleValueElm=l,delete t.paint},"processSimpleValueInit"]];Jt.push(a)}function zh(n){if(!n.simpleValueElm&&n.paint){n.paint[0]=Bt;return}const t=n.simpleValueElm;delete n.simpleValueElm,Or(t,"deleteSimpleValue")}function r_(n,t){return n==null||n===t.value?0:6}function s_(n,t){return n==null||typeof n!==X.object?(Lm(n,t),0):(zh(t),6)}function i_(n,t){return Ht(n)?0:(Gh(t),9)}function Wh(n){return{tagJsType:"array",value:n,processInitAttribute:Bt,processInit:a_,processUpdate:o_,hasValueChanged:i_,destroy:Gh}}function o_(n,t,e){if(++t.updateCount,Array.isArray(n)){Qs(t,n,e);return}yn(n,t,e)===0&&Qs(t,n,e)}function a_(n,t,e,r,s){Qs(t,n,e,s)}function Qn(n){return(n==null?void 0:n.tagJsType)?n:c_(n)}function c_(n){return Ht(n)?Wh(n):Hh(n)}function Kr(n,t,e,r){return{updateCount:0,value:n,destroy$:new Z,render$:new Z,tagJsVar:Qn(n),withinOwnerElement:e,parentContext:r,valueIndex:r.varCounter}}function u_(n,t,e,r){const s=Kr(n,t,e,r);return t.push(s),++r.varCounter,s}function Ta(n,t,e,r,s){const i=document.createTextNode(_n),a=Kr(n,e,!0,t.context);return a.withinOwnerElement=!1,a.placeholder=i,s||(a.placeholder=r),jh(n,t,a,s,r),s&&Xt.push([re,[s,i]]),a}function Qs(n,t,e,r){const s=n.lastArray===void 0;s&&(n.lastArray=[]);const i=n.lastArray;let a=n.placeholder,c=0;const l=[];if(!s){for(let f=0;f<i.length;++f){const p=i[f];if(p.value===null){l.push(p);continue}const m=d_(t,f,i,c);if(m===0){l.push(p);continue}if(m===2){f=f-1;continue}c=c+m}n.lastArray=l}const h=t.length;for(let f=0;f<h;++f)a=l_(t,f,n.lastArray,e,a,r).placeholder}function l_(n,t,e,r,s,i){const a=Jh(n[t]),c=e[t];if(c)return h_(a,c,e,r,t,s,i);const l=Ta(a,r,e,s,i);return e.push(l),a&&(l.arrayValue=(a==null?void 0:a.arrayValue)||l.arrayValue||t),l}function h_(n,t,e,r,s,i,a){if(e.length>s)return Array.isArray(n)?(t.tagJsVar.processUpdate(n,t,r,[]),t.value=n,t):(yn(n,t,r),t);const l=Ta(n,r,e,i,a);return e.push(l),l}function Jh(n){return typeof n=="function"&&n.tagJsType===void 0&&(n=n()),n}function d_(n,t,e,r){const s=n.length-1,i=t-r,a=i<0||s<i,c=e[t];if(a)return Ea(c),1;c.arrayValue===void 0&&(c.arrayValue=t);const l=c.arrayValue,h=Jh(n[t]);return f_(l,h,c,e,t)}function f_(n,t,e,r,s){const i=t.arrayValue||s;return t&&n!==i?(Ea(e),r.splice(s,1),2):0}function Ea(n){const t=n.global;p_(t,n)}function p_(n,t){var e;if(n&&((e=t.state)!=null&&e.oldest)){const r=t.state.oldest;Xn(r,n);return}t.tagJsVar.destroy(t,{})}function Gh(n){++n.updateCount;const t=n.lastArray;Kh(n,t)}function Kh(n,t){for(let e=0;e<t.length;++e)Ea(t[e]);delete n.lastArray}function wa(n){for(let t=n.length-1;t>=0;--t){const e=n[t];g_(e),n.splice(t,1)}}function g_(n){const t=n.marker;t&&Or(t,"destroyMarker");const e=n.domElement;Or(e,"destroyClone")}function Ia(n,t){const e=n.contexts;m_(e,t),va(n)}function va(n){wa(n.htmlDomMeta)}function m_(n,t){var e;for(const r of n){if(r.withinOwnerElement){const l=r.tagJsVar;if(l&&l.tagJsType==="host"){const h=r.supportOwner,f=l.destroy(r,h);Gn(f)&&t.push(f)}continue}const s=r.lastArray;if(s){Kh(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,Or(i,"smartRemoveByContext");continue}const a=r.global;if(a===void 0)continue;if(a.deleted=!0,(e=r.state)==null?void 0:e.oldest){Ia(r,t);continue}}}function Xn(n,t){const e=n.context;t.deleted=!0,e.renderCount=0;const r=[],s=e.contexts;return $o(s,n),n.templater.wrapper&&Fh(n,t),Ia(e,r),delete e.state,delete e.contexts,delete e.returnValue,delete e.providers,r}function Ci(n,t){var r;const e=Uu(n,t);return!e&&((r=t.templater.tag)!=null&&r._innerHTML)&&Uu(n.outerHTML,t)?!0:e}function Uu(n,t){const e=n.templater,r=t.templater,s=(e==null?void 0:e.tag)||n,i=r.tag;if((e==null?void 0:e.tagJsType)===J.stateRender)return e.dom===r.dom;switch(s.tagJsType){case J.dom:return(i==null?void 0:i.tagJsType)!==J.dom?!1:__(s,i);case J.tag:return y_(s,i,n,t)}throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function __(n,t){const e=n.dom,r=t.dom;return e===r}function y_(n,t,e,r){const s=n.strings,i=t.strings;if(s.length!==i.length||!s.every((h,f)=>i[f].length===h.length))return!1;const c=e.templater.values||n.values,l=r.templater.values||t.values;return T_(c,l)}function T_(n,t){return n.length===t.length?!!t.every(function(i,a){const c=n[a];return typeof i===X.function&&typeof c===X.function?i.toString()===c.toString():!0}):!1}function Qr(n){++n.updateCount;const t=n.global,r=n.state.newest;Xn(r,t),E_(n)}function E_(n){n.htmlDomMeta=[],delete n.contexts,delete n.state,delete n.global,n.renderCount=0}function w_(n,t){var a,c,l;const e=(a=t.state)==null?void 0:a.newest,r=Ph(n),s=n;return r?Ci(s,e)?0:7:(n==null?void 0:n.tagJsType)?((c=n.wrapper)==null?void 0:c.original)===((l=t.value.wrapper)==null?void 0:l.original)?0:88:8}function Si(n,t){var c;const e=t.global,r=(c=t.state)==null?void 0:c.newest,s=Ph(n),i=n;if(s)return Ci(i,r)?(Ho(t,n,r),0):(Xn(r,e),mn(t),7);if(n==null?void 0:n.tagJsType){const f=t.state.newest.ownerSupport;return Ho(t,n,f)===!0?0:88}return Qr(t),8}function I_(n,t,e,r,s,i,a){const c=document.createTextNode(_n),l=s>0,h=u_(n,t,l,r);return h.placeholder=c,h.target=i,i?Xt.push([re,[i,c]]):Jt.push([He,[a,c,"attachDynamicDom.attachDynamicDom"]]),jh(n,e,h,i,a),h}function v_(n,t){return A_(n,t)}function A_(n,t,e=[]){const r=n.context;e.push({support:n,renderCount:r.renderCount,provider:t});const s=t.children;for(let i=s.length-1;i>=0;--i){const a=s[i],c=a.context;e.push({support:a,renderCount:c.renderCount,provider:t})}return e}function b_(n){const e=n.context.providers;if(!e)return[];const r=[];for(const s of e){const i=s.owner,a=v_(i,s);r.push(...a.map(C_))}return r}function C_(n){return n.support}function Aa(n,t,e){return n}function S_(n){return typeof n!==X.object||!n||n.tagJsType}function R_(n,t,e,r,s,i){var c;const a=Object.keys(n);for(const l of a){const h=n[l],f=t[l],p=ba(f,h,e,r,i,s+1);h===p||(c=Object.getOwnPropertyDescriptor(n,l))!=null&&c.set||(n[l]=p)}return n}function P_(n,t,e,r,s,i){for(let a=n.length-1;a>=0;--a){const c=n[a],l=t[a];n[a]=ba(l,c,e,r,i,s+1)}return n}function ba(n,t,e,r,s,i){return n==null||i>s?t:typeof n===X.function?t.mem?(n.mem=t.mem,t):(n.mem=t,n):S_(t)?t:Ht(t)?P_(t,n,e,r,i,s):R_(t,n,e,r,i,s)}function k_(n,t,e){var m;const r=e.global,s=e.state.newest,i=s.templater.wrapper;let a=t.templater.wrapper,c=!1;const l=t.templater.tagJsType,h=J.stateRender===l||J.renderOnce===l;if(h)c=t.templater.tagJsType===J.renderOnce||Ci(s,t);else if(i&&a){((m=s.templater.tag)==null?void 0:m._innerHTML)&&(a=t.outerHTML);const S=i.original,V=a.original;c=S===V}const f=t.templater;if(!c){N_(e,f,n);return}if(!(h||ET(s,f))){const v=f.propWatch===Dt.DEEP?Yr:Pa;D_(f,t,s,n,v);return}if(e.locked){r.blocked.push(t);return}Mr(t),++e.renderCount}function Qh(n,t,e,r,s,i=-1){const a=t.context;if(!a.global||!a.state.newest){const v=Aa(r);r.push(...v);const S=n.propsConfig;return S.castProps=v,r}t=a.state.newest||t;const f=t.propsConfig.castProps,p=[];for(let v=0;v<r.length;++v){const S=r[v],V=f[v],k=ba(V,S,n,e,s,i+1);p.push(k)}const m=n.propsConfig;return m.castProps=p,p}function V_(n,t){const e=n.context,r=e.global;let s=-1;const i=e.providers=e.providers||[],a=i.length-1;for(;s++<a;){const c=i[s];let l=-1;const h=c.children.length-1;for(;l++<h;){const f=c.children[l];if(r===f.context.global){c.children.splice(l,1),c.children.push(t);return}}}}function D_(n,t,e,r,s){const i=n.props,a=Qh(t,e,r,i,s),c=t.propsConfig;c.castProps=a;const l=e.propsConfig;return l.latest=c.latest,e}function N_(n,t,e){const r=n.global,s=n.state.oldest;Xn(s,r),mn(n),t.processInit(t,n,e,n.placeholder)}function qo(n){const t=n.context,e=t.global,{subs:r,tags:s}=Uh(t.contexts);Bu(t);for(const a of s){if(a.context.global.deleted===!0)return;Bu(a.context)}e.subscriptions&&r.forEach(Bh),mn(t)}function Bu(n){n.global.deleted=!0,Ia(n,[]),delete n.contexts}function Xh(n,t,e,r){const s=t.original,i=n.tagJsType===J.stateRender,a=it.stateConfig;Ii(e);let c;return i?c=n():(c=s(...r),typeof c===X.function&&c.tagJsType===void 0&&(c=c())),e.context.returnValue=c,e.returnValue=c,c.templater=n,n.tag=c,e.context.state.newer={...a},Gt(),e}function O_(n,t){const e=n.context;++e.renderCount,M_(n.context),it.tagClosed$.next(t)}function M_(n){L_(n),x_()}function L_(n){const t=it.stateConfig,e=n||t.context;e.state=e.state||{},e.state.newer={...t};const r=t.support;e.state.newest=r}function x_(){const n=it.stateConfig;delete n.prevSupport,delete n.support,delete n.state,delete n.states,Gt()}function Yh(n,t,e,r){let s;const i=n.templater;if(i.tagJsType===J.stateRender){const a=i;s=Zr(i,e,r,n.appSupport),Xh(i,a,s)}else{const a=i.wrapper;s=a(n,e,t)}return O_(s,r),s.ownerSupport=n.ownerSupport,s}function F_(n){const t=it.stateConfig;return t.rearray=n,t.state=[],t.states=[],t.statesIndex=0,t.handlers.handler=Im,t.handlers.statesHandler=ym,t}function U_(n,t,e){F_(e);const r=it.stateConfig;r.prevSupport=t,Ii(n)}function B_(n,t,e,r){const i=e.state.older.state;return U_(n,t,i),Yh(n,t,e,r)}function Ca(n,t,e,r){Dh(n.context),Ii(n);const s=Yh(n,t,e,r);return Gt(),s}function j_(n){var r;const t=n==null?void 0:n.context,e=t==null?void 0:t.state;return(r=e==null?void 0:e.older)==null?void 0:r.state}function $_(n,t,e){let r;j_(t)?r=B_(n,t,e):r=Ca(n,t,e);const i=!t||Ci(t,r);if(i){if(t){const a=t.templater.tag;if(a&&e.renderCount>0){const c=t==null?void 0:t.templater,l=c==null?void 0:c.tag;q_(a,t,l)}}}else{V_(t,r),qo(t);const a=r.context;a.state.oldest=r,a.state.newest=r}return r.ownerSupport=n.ownerSupport,{support:r,wasLikeTags:i}}function q_(n,t,e){if(n.tagJsType===J.dom){const r=e==null?void 0:e.dom,s=n.dom;r!==s&&qo(t);return}if(e){const r=e.strings;if(r){const s=r==null?void 0:r.length,i=n.strings.length;s!==i&&qo(t)}}}function H_(n,t,e){const r=$_(t,n,e);if(r.wasLikeTags){const s=e.state.oldest;return Mh(s,r.support),r.support}return wd(t,e)}function Zh(n){return J.templater===n.tagJsType}function Mr(n){const t=n.context,e=t.global,r=n.templater,s=Zh(r);if(t.locked)return e.blocked.push(n),n;if(s)return z_(n);t.locked=4,e.blocked.length&&(n=e.blocked.pop(),e.blocked=[]);const i=H_(t.state.newest,n,t);return delete t.locked,i}function z_(n){const r=Gr(n).context.state.newest;return Mr(r)}function W_(n,t){const e=t.context.global;return e&&e.deleted?!1:!!J_(n,t)}function J_(n,t){const e=n.props,s=t.propsConfig.latest;if(td(e,s))return!0;switch(n.propWatch){case Dt.IMMUTABLE:return Nd(e,s);case Dt.SHALLOW:return xh(e,s)}return!Lh(e,s,Yr)}function td(n,t){const e=n.length,r=t.length;return e!==r}function Xs(n,t=[]){const e=n.context,r=n.templater,s=Zh(r),i=n.ownerSupport;if(e.locked)return t.push(n),t;if(s)return Xs(i,t);const a=n.context.global;if(a&&a.deleted===!0)return t;const c=n,l=Jr(c.templater),h=n.templater.tagJsType,p=i&&h!==J.stateRender&&(!l||W_(c.templater,c));if(c.context.providers){const v=b_(c);t.push(...v)}return p?(Xs(i,t),l&&t.push(c),t):(t.push(c),t)}function Sa(n){++_t.locks,n.forEach(G_),--_t.locks,we()}function G_(n){const t=n.context;if(!t.global){t.tagJsVar.processUpdate(t.value,t,n.ownerSupport,[]);return}const r=t.state;Mr(r.newest)}function K_(n,t){const e=n.context.state,r=t.context.state,s=e.newer.states,i=r.newer.states;return Q_(s,i)}function Q_(n,t){for(let e=0;e<n.length;++e){const r=n[e],s=t[e];Z_(r,s)}}let ed;function X_(...n){return ed=n,n}function Y_(){return ed}function Z_(n,t){n(X_,1),t(Y_,2)}function ty(n,t,e,r){for(let s=n.length-1;s>=0;--s){const a=n[s].get(),l=t[s].callback;l&&l(a)}for(let s=r.length-1;s>=0;--s){Ra.length=0,nd=0;const i=r[s];i(ey),e[s](ny)}}let nd=0;const Ra=[];function ey(...n){return Ra.push(n),n}function ny(...n){return Ra[nd++]}function rd(n,t,{resolvePromise:e,resolveValue:r}){if(Gn(n)){const i=t.context;return i.locked=2,n.then(ry(t,e))}return r(n)}function ry(n,t){return e=>{const r=n.context,s=r.global;if(delete r.locked,r.deleted===!0||(s==null?void 0:s.deleted)===!0)return t(e);K_(n,r.state.newest);const i=Xs(n);return Sa(i),t(e)}}function sy(n,t){const e=t.context.global,r=function(i,a){if(e.deleted!==!0)return iy(r.tagFunction,r.support,i,a)};return r.tagFunction=n,r.support=t,r}function iy(n,t,e,r){const s=Gr(t),i=s.context;i.locked=1;const a=n.apply(e,r);return delete i.locked,sd(a,s)}function sd(n,t){const e=t.context.global;if(e!=null&&e.deleted)return;const r=Xs(t);return Sa(r),rd(n,t,{resolvePromise:cy,resolveValue:uy})}const oy="no-data-ever",ay="promise-no-data-ever";function cy(){return ay}function uy(){return oy}function id(n,t,e){const r=e[t];if(r){let i=!1;if(n.originalStopPropagation=n.stopPropagation,n.stopPropagation=function(){i=!0,n.originalStopPropagation.call(n),n.stopPropagation=n.originalStopPropagation,delete n.originalStopPropagation},r(n),n.defaultPrevented||i)return}const s=e.parentNode;s&&id(n,t,s)}function od(n,t,e,r){const s=n.appElement,i=ly(t);t==="blur"&&(t="focusout");const c=n.context.events;if(!c[t]){const l=function(f){id(f,i,f.target)};c[t]=l,s.addEventListener(t,l)}e[i]=r,e[t]=r}function ly(n){return n==="blur"&&(n="focusout"),"_"+n}function ad(n,t,e,r){const s=function(...i){return s.tagFunction(n,i)};s.tagFunction=t,s.support=e,od(e.appSupport,r,n,s)}function cd(n){return n==null||n===!1}function ud(n,t,e,r,s,i,a){if(cd(t))return;const c=[];if(typeof t===X.object){for(const l in t){const h=bi(l),f=t[l],m=dd(l,f,n,e,r,Kn,i,a,h);m!==void 0&&(Array.isArray(m)?c.push(...m):c.push(m))}return c}t.length!==0&&s(e,t,_n)}function hy(n,t,e,r,s,i,a,c){if(e){if(cd(t)||t===""){r.removeAttribute(e);return}if(typeof e===X.object)if(typeof t===X.object)for(const f in e)f in t||ne.push([ju,[r,f]]);else for(const f in e)ne.push([ju,[r,f]])}const l=ud(n,t,r,s,i,a,c);l&&a.push(...l)}function ju(n,t){n.removeAttribute(t)}function ld(n,t,e,r){const s=t,i=n;if(i!=null&&i.tagJsType){const c=t.value;if(!(c!=null&&c.tagJsType)){i.isAttr=!0,Yt(t),i.processInitAttribute(s.attrName,n,s.target,i,s,e,Kn),Gt(),s.tagJsVar=i;return}c.hasValueChanged(i,t,e);return}if(s.isNameOnly){hy(r,n,s.value,s.target,e,s.howToSet,[],s.parentContext),s.value=n;return}const a=s.target;my(n,s.attrName,s,a,e,s.howToSet,s.isSpecial),t.value=n}const lt=":tagvar",se=":",Ys=new RegExp(lt+"(\\d+)"+se,"g");function hd(n){return n.search&&n.startsWith(lt)?n.search(Ys):-1}function dy(n,t,e,r,s,i,a){const c=r.length,l=[];t.forEach(f=>{if(hd(f)>=0){const m=r.length,v=Qn(f),S={updateCount:0,isAttr:!0,target:e,attrName:n,withinOwnerElement:!0,tagJsVar:v,valueIndex:a.varCounter,parentContext:a,destroy$:new Z,render$:new Z};v.processUpdate=function(F,j,q,st){++j.updateCount,h(st)};const V=i[m];S.value=V,l.push(S),++a.varCounter}});function h(f){const p=fy(t,f,c).join("");s(e,n,p)}return h(i),l}function fy(n,t,e){return n.reduce((r,s)=>{if(hd(s)>=0){const a=e++,c=t[a];return r.push(c),r}return r.push(s),r},[])}function py(n,t,e,r,s,i,a,c,l){if(typeof t===X.function)return++s.varCounter,pd(t,a,n,e);const h=Qn(t),f={updateCount:0,isAttr:!0,target:e,attrName:n,howToSet:i,value:t,withinOwnerElement:!0,tagJsVar:h,destroy$:new Z,render$:new Z,valueIndex:l,parentContext:s};return r.push(f),h.processUpdate=ld,Qm(n,t,f,e,i,a,c),f.value=t,f}function $u(n){return vi(n)&&"tagJsVar"in n?n.tagJsVar:-1}function gy(n,t,e,r,s,i,a,c,l){const h=Kr(n,t||[],!0,e);return h.target=c,h.valueIndex=s,h.isAttr=!0,h.isNameOnly=l,h.stateOwner=Gr(i),h.supportOwner=i,Yt(h),r.processInitAttribute(a,n,c,r,h,i,Kn),Gt(),h.oldTagJsVar=h.tagJsVar,h.tagJsVar=r,h}function dd(n,t,e,r,s,i,a,c,l){const h=$u(n);let f=h>=0||t===void 0&&typeof n!="string",p=e[h];t!=null&&t.tagJsType?p=t:n!=null&&n.tagJsType&&(f=!0,p=n,t=n);const m=p;if(m!=null&&m.tagJsType)return gy(t,[],c,m,h,s,n,r,f);if(f){h===-1&&f&&(p=n);const S=Kr(p,[],!0,c);S.valueIndex=h,S.isAttr=!0,S.target=r,S.isNameOnly=!0,S.howToSet=i;const V=S.tagJsVar;V.processUpdate=ld;const k=ud(e,p,r,s,i,a,c);return k&&a.push(...k),S}if(Array.isArray(t))return dy(n,t,r,[],i,e,s.context);const v=$u(t);if(v>=0){const S=e[v];return py(n,S,r,[],c,i,s,l,v)}return ya(n,t,r,i,l,c)}function my(n,t,e,r,s,i,a){return ze(n)?_y(s,n,r,t,a,i):fd(n,r,t,a,i,s)}function fd(n,t,e,r,s,i){if(r!==!1){$h(e,n,t,r);return}switch(n){case void 0:case!1:case null:ne.push([yy,[t,e]]);return}if(ze(n))return ad(t,n,i,e);s(t,e,n)}function _y(n,t,e,r,s,i,a){var f;const c=n.templater.wrapper;return((c==null?void 0:c.tagJsType)||((f=c==null?void 0:c.original)==null?void 0:f.tagJsType))===J.renderOnce?fd(t,e,r,s,i,n):pd(t,n,r,e)}function pd(n,t,e,r){return n=sy(n,t),ad(r,n,t,e)}function yy(n,t){n.removeAttribute(t)}function gd(n,t,e,r,s){for(const i of n){const a=i[0],c=i[1],l=i[2]||!1;let h=i.length>1?Kn:Wm;i[3]&&(h=i[3]);const f=s.contexts,p=dd(a,c,t,e,r,h,f,s,l)||void 0;typeof p=="object"&&(f.push(p),++s.varCounter)}}function Ty(n,t,e,r,s,i,a){t.at&&gd(t.at,e,n,r,s),i?Xt.push([re,[i,n,"appendToAttachDomElement"]]):Jt.push([He,[a,n,"insertBeforeAttachDomElement"]])}function md(n,t,e,r,s,i,a){const c=e.context,l=c.contexts;r=c;const h=[];i&&a===void 0&&(a=document.createTextNode(_n),Xt.push([re,[i,a]]),i=void 0);for(let f=0;f<n.length;++f){const p=n[f],m=p.v;if(!isNaN(m)){const F=Number(m),j=t[F];if(ze(j)&&j.tagJsType===void 0){++r.varCounter;continue}const st=I_(j,l,e,r,s,i,a);st.valueIndex=F;continue}const S={};if(h.push(S),p.nn==="text"){Ey(S,p,i,a);continue}const V=S.domElement=document.createElement(p.nn),k={updateCount:0,isAttrs:!0,target:V,parentContext:r,contexts:[],destroy$:new Z,render$:new Z,tagJsVar:{tagJsType:"new-parent-context"},valueIndex:-1,withinOwnerElement:!0};k.varCounter=0,Ty(V,p,t,e,k,i,a),k.target=V,p.ch&&(S.ch=md(p.ch,t,e,k,s+1,V,a).dom)}return{dom:h,contexts:l}}function Ey(n,t,e,r){const s=n,i=s.tc=t.tc;if(e){Xt.push([pm,[e,i,function(c){s.domElement=c}]]);return}Jt.push([fm,[r,i,function(c){s.domElement=c}]])}const _d=/(:tagvar\d+:)/,qu="ondoubleclick",wy=/([:_a-zA-Z0-9\-.]+)\s*(?:=\s*"([^"]*)"|=\s*(\S+))?/g,Iy=/<\/?([a-zA-Z0-9-]+)((?:\s+[a-zA-Z_:*][\w:.-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)+\s*|\s*)\/?>/g;function vy(n){const t=[],e=[],r=[];let s=null,i=-1,a=0;const c=new RegExp(Iy,"g");for(n=by(n);a<n.length;){const l=c.exec(n);if(!l)break;const[h,f,p]=l,m=h.startsWith("</"),v=h.endsWith("/>");if(a<l.index){const F=n.slice(a,l.index);if(F.trim()){const j=zu(F);for(let q of j)q.startsWith(lt)&&q.search(_d)>=0&&q.search(Td)===-1&&(q=lt+ ++i+se),Hu(s,e,q)}}if(a=l.index+h.length,m){s=r.pop()||null;continue}const S=[];let V;for(;(V=wy.exec(p))!==null;)i=ky(V,i,t,S);const k={nn:f};S.length&&(k.at=S),s?(s.ch||(s.ch=[]),s.ch.push(k)):e.push(k),v||(r.push(s),s=k)}if(a<n.length){const l=n.slice(a);if(l.trim()){const h=zu(l);for(const f of h)f.startsWith(lt)&&++i,Hu(s,e,f)}}return e}const Ay=new RegExp("(<!--[\\s\\S]*?-->)","g");function by(n){return n.replace(Ay,function(t){return t.replace(/\[l t\]/g,"[l&nbsp;t]").replace(/\[g t\]/g,"[g&nbsp;t]").replace(/</g,"[l t]").replace(/>/g,"[g t]")})}function Cy(n){return n.startsWith("on")?n.length===qu.length&&n===qu?"dblclick":n.slice(2,n.length):n}function Hu(n,t,e){const r={nn:"text",tc:Sy(e)};Ry(n,t,r)}function Sy(n){return n.replace(/(\[l t\]!--[\s\S]*?--\[g t\])/g,function(t){return t.replace(/\[l t\]/g,"<").replace(/\[g t\]/g,">").replace(/\[l&nbsp;t\]/g,"[l t]").replace(/\[g&nbsp;t\]/g,"[g t]")})}function Ry(n,t,e){n?(n.ch||(n.ch=[]),n.ch.push(e)):t.push(e)}function zu(n){return n.split(_d).filter(Py)}function Py(n){return n!==""}function ky(n,t,e,r){const s=n[1]||n[3]||n[5];let a=n[2]||n[4]||n[6];if(s===void 0)return t;const c=n[2]!=="",l=a===void 0&&c,h=s.toLowerCase(),f=h.startsWith("on")?Cy(h):h;if(l){if(s.slice(0,lt.length)===lt){const q=lt+ ++t+se;return e.push(["at",q]),r.push([q]),t}if(n[0].startsWith(s)&&n[0].slice(s.length,n[0].length).search(/\s+$/)>=0)return r.push([f]),t;const F=n[3];if(F.search(Td)>=0){a=F;const q=[f,a];return r.push(q),t}else a=lt+ ++t+se}c||(a=n[2]);const p=a.split(Dy).filter(S=>S.length>0);p.length>1&&(a=p,p.forEach(S=>{S.search(Ys)>=0&&++t}));const m=[f,a],v=bi(h);return v&&m.push(v),f==="style"?(r.unshift(m),t):(r.push(m),t)}const Vy=new RegExp(lt+"(\\d+)"+se,"gi"),Dy=new RegExp("("+lt+"\\d+"+se+")","gi"),yd=lt.slice(0,lt.length-1),Td=new RegExp(yd+"&#x72;(\\d+)"+se,"gi"),Ny=yd+"&#x72;$1"+se;function Oy(n,t){const e=My(n,t).join("");return vy(e)}function My(n,t){return Ly(n,t)}function Ly(n,t){const e=[];for(let r=0;r<n.length;++r){const i=n[r].replace(Vy,Ny);if(r<t.length){e.push(i+lt+r+se);continue}e.push(i)}return xy(e,n,t),e}function xy(n,t,e){const r=e.length-t.length;if(r>0)for(let s=r;s>0;--s)n.push(lt+(t.length+s-1)+se)}const Fy="ch";function Ed(n,t,e=[],r=[]){const s=n;for(let i=0;i<s.length;i++){const a=[...r,i],c=s[i];if(c.at){const l=c.at;c.at=By(l,t)}if(c.ch){const l=c.ch,h=[...a,Fy];c.ch=Ed(l,t,e,h)}i=Uy(c,t,s,i)}return s}function Uy(n,t,e,r){if(n.nn!=="text")return r;const s=n;let i=s.tc;if(typeof i!==Ks.string)return r;let a;for(;(a=Ys.exec(i))!==null;){const c=a[1],l=parseInt(c,10);if(!isNaN(l)&&l<t){const f=lt+l+se,p=i.slice(a.index+f.length);e.splice(r,1,{nn:"text",v:l}),i=p,Ys.lastIndex=0}}return s.tc=i,r}function By(n,t){const e=[];for(const r of n){const[s,i,a]=r;if(s.startsWith(lt)){const c=parseInt(s.replace(lt,""),10);if(!isNaN(c)&&c<t){e.push([{tagJsVar:c}]);continue}}if(typeof i===Ks.string&&i.startsWith(lt)){const c=parseInt(i.replace(lt,""),10);if(!isNaN(c)&&c<t){e.push([s,{tagJsVar:c},a]);continue}}e.push(r)}return e}function jy(n,t,e){return!!(e&&e.strings.length===n.length&&e.strings.every((s,i)=>s===n[i])&&e.values.length===t.length)}function $y(n){const t=n.map(qy);return t.push(n.length),Number(t.join(""))}function qy(n){return n.length}const Wu={};function Hy(n,t){const e=$y(n),r=Wu[e];if(r&&jy(n,t,r))return r.domMetaMap;const i=Oy(n,t),a=Ed(i,t.length),c={interpolation:void 0,string:void 0,strings:n,values:t,domMetaMap:a};return Wu[e]=c,a}function Ri(n,t,e){const r=n.context;r.state=r.state||{};const s=r.state;s.oldest=n,s.newest=n,r.state.older=r.state.newer,++_t.locks;const i=zy(n,n.context,t,e);return r.htmlDomMeta=i.dom,--_t.locks,i}function zy(n,t,e,r){const s=Wy(n),a=n.templater.tag.values,c=[],l=n.context;return t=l,l.contexts=c,md(s,a,n,t,0,e,r)}function Wy(n){const e=n.templater.tag;if(e.tagJsType===J.dom)return e.dom;const r=e.strings;return Hy(r,e.values)}function wd(n,t){const e=t.state.newest,r=t.placeholder;return e.ownerSupport=n,Ri(e,void 0,r),e}function Id(n,t,e){const r=AT(n,t,t.appSupport,e);return e.contexts=e.contexts||[],r}function vd(n,t,e,r,s){const i=Id(n,e,t);i.ownerSupport=e;const a=Ri(i,r,r?void 0:s);for(const c of a.dom)c.marker&&(r?Xt.push([re,[r,c.marker]]):Jt.push([He,[s,c.marker,"subMarker"]])),c.domElement&&(r?Xt.push([re,[r,c.domElement,"subAppendTo"]]):Jt.push([He,[s,c.domElement,"subInsertBefore"]]));return i}function Jy(n,t,e,r,s){return t.state={},s?vd(n,t,e,s,r):wd(e,t)}function Ad(n,t){const e={tagJsType:J.templater,processInit:Jy,processInitAttribute:Bt,processUpdate:yn,hasValueChanged:Si,destroy:Qr,propWatch:n,props:t,key:function(s){return e.arrayValue=s,e},matchesInjection(r,s){var i;if(e.wrapper===r||((i=e.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return e}const Lr=[];function Gy(n,t){return function(s,i,a){const c=bd(n,s,a),l=s.ownerSupport,h=Zr(n,i,l,s.appSupport,c);return Xh(n,t,h,c)}}function bd(n,t,e){const r=n.propWatch===Dt.DEEP?Yr:Pa,s=n.props,i=t.propsConfig;let a=i.castProps;const c=e==null?void 0:e.propsConfig,l=c==null?void 0:c.castProps;return l&&(i.castProps=l,a=Qh(t,e,e.ownerSupport,s,r)),a||Aa(s)}function Ky(n,t,e){const r=Ad(Dt.DEEP);r.tagJsType=n.tagJsType;const s=Id(r,e,t);function i(){return r.tag=n(),s}return r.wrapper=i,i.tagJsType=n.tagJsType,i.original=n.original||n,s}function Qy(n,t,e,r,s){mn(t);const i=Ky(n,t,e);return Ca(i,void 0,t),vd(i.templater,t,e,s,r)}function Xy(n,t){const e=Ri(n,t,void 0);for(const r of e.dom)r.domElement&&Xt.push([re,[t,r.domElement]]),r.marker&&Xt.push([re,[t,r.marker]]);return n}function Yy(n,t){++n.updateCount;const e=n.subContext,r=Zy(e,t);return delete n.subContext,r}function Zy(n,t){n.deleted=!0;const e=n.appendMarker;if(e&&(Or(e,"deleteSubContext"),delete n.appendMarker),!n.hasEmitted)return;const r=n.contextItem;return r.tagJsVar.destroy(r,t),76}function tT(n,t,e,r){return t.hasEmitted=!0,t.contextItem=Ta(n,e,[],r)}function Cd(n,t,e){var a;++t.updateCount;const s=n.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(a=t.subContext)==null?void 0:a.contextItem;Va(i,s,e)}function eT(n,t,e,r,s){t.subContext={},n.processUpdate=Cd,nT(n,e,t,r,s)}function nT(n,t,e,r,s){const{appendMarker:i,insertBefore:a}=ST(s,r),c=e.subContext;c.appendMarker=i;const h=n.owner._innerHTML;h.processInit=h.oldProcessInit,tT(h,c,t,a)}function Sd(){return{tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:Bt,processInit:eT,processUpdate:Cd,destroy:Yy}}function rT(n,t,e,r){const s={tagJsType:"tag-conversion",processInitAttribute:Bt,processInit:(i,a,c)=>{const l=n.returnValue;return t.tagJsVar.processInit(l,t,e,r.placeholder)},processUpdate:(i,a,c)=>{if(a.locked||a.deleted)return;++a.updateCount;const h=a.value.tagJsType,p=(i==null?void 0:i.tagJsType)!==h;if(w_(i,a)||p||s.hasValueChanged(i,a,e)){s.destroy(a,e),ka(i,a,c,789);return}a.locked=467,a.render$.next();const S=a.returnValue;sT(t,i,a,S,e),delete a.locked},hasValueChanged:(i,a,c)=>{const l=n.returnValue;return t.tagJsVar.hasValueChanged(l,t,c)},destroy:(i,a)=>{++n.updateCount,n.deleted=!0,delete n.returnValue;const c=t.tagJsVar.destroy(t,e);return Gn(c)?c.then(()=>{const l=Ju(n);return we(),l}):(n.destroy$.next(),Ju(n))}};return s}function Rd(n,t,e){const r=n.context,s=n.returnValue,i=Qn(s);delete r.global,r.contexts=[];const a={updateCount:0,value:s,tagJsVar:i,destroy$:new Z,render$:new Z,placeholder:r.placeholder,valueIndex:-1,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},c=rT(r,a,n,e);return r.tagJsVar=c,i.processInit(s,a,n,e.placeholder),n}function Pd(n,t,e){const r=Zr(n,t,e,e==null?void 0:e.appSupport),s=r.propsConfig;if(s){const a=n.tagJsType!==J.tagComponent?[]:bd(n,r);s.castProps=a}return Ca(r,t.state.newest,t)}function kd(n,t,e){const r=Pd(n,t,e),s=r.templater.tag;return["dom","html"].includes(s.tagJsType)?(Ri(r,void 0,t.placeholder),r):Rd(r,r.ownerSupport,t)}function sT(n,t,e,r,s){const i=Aa(t.props);n.value.props=i;const a=s.propsConfig;if(a&&(a.castProps=i),n.updatesHandler=e.updatesHandler,e.updatesHandler){Yt(e);const c=e.updatesHandler;c(i),Gt()}n.tagJsVar.processUpdate(r,n,s,[]),n.value=r}function Ju(n,t){delete n.returnValue,delete n.global,n.contexts=[],n.htmlDomMeta=[],delete n.updatesHandler}function iT(n,t,e,r){const s=Pd(n,t,e),i=s.templater.tag;return["dom","html"].includes(i.tagJsType)?Xy(s,r):Rd(s,e,t)}function Vd(n,t,e,r,s){return mn(t),s?iT(n,t,e,s):kd(n,t,e)}function oT(n){var s,i;const t=de();if(!t)throw new Error("tag.inject can only be called within a tag or host context");let e=t.parentContext;for(;e;){const a=e.contexts;if(a){for(const c of a)if(c.isAttr&&((s=c.tagJsVar)!=null&&s.matchesInjection)){const l=c.tagJsVar.matchesInjection(n,c);if(l!==void 0)return l.returnValue}}if((i=e.tagJsVar)!=null&&i.matchesInjection&&e.tagJsVar.matchesInjection(n,e))return e.returnValue;e=e.parentContext}const r=`Could not find parent context for tag.inject ${n}`;throw console.error(r,{targetItem:n,context:t}),new Error(r)}function Qt(n){return it.stateConfig.handlers.handler(n)}function aT(n){return Qt(()=>{const t=n();if(de().global){const r=Ws();return rd(t,r,{resolvePromise:cT,resolveValue:uT})}}),tt}function cT(n){return n}function uT(n){return n}function lT(n){return Qt(function(){de().destroy$.toCallback(n)}),tt}function hT(n){const t=de(),e=i=>{const a=de();Yt(t);const c=n();return Gt(),Yt(a),c},r=t.render$.subscribe(()=>e()),s=e();return tt.onDestroy(()=>r.unsubscribe()),s}let dT=0;const Cr=Dd("click"),kn=Dd("mousedown");function Dd(n){return function(e){const r=NT(e);return Qt(()=>{xd().addEventListener(n,r)}),r}}const fT={get:xd,onclick:Cr,click:Cr,onClick:Cr,mousedown:kn,onmousedown:kn,onMouseDown:kn};Xr("onclick",Cr);Xr("click",Cr);Xr("onMouseDown",kn);Xr("onmousedown",kn);Xr("mousedown",kn);function Xr(n,t){Object.defineProperty(tt,n,{get(){return t},set(e){return t(e)}})}var Dt;(function(n){n.DEEP="deep",n.SHALLOW="shallow",n.NONE="none",n.IMMUTABLE="immutable"})(Dt||(Dt={}));function tt(n,t=Dt.SHALLOW){const e=function(...a){const c=Ad(t,a);c.tagJsType=J.tagComponent,c.processInit=Vd,c.hasValueChanged=Si;const l=Gy(c,e);return l.original=n,c.wrapper=l,c},r=n;e.original=n,r.tags=Lr,r.setUse=it,r.ValueTypes=J,r.tagIndex=dT++,Lr.push(e);const s=e;return s.updates=i=>{const a=de();return a.updatesHandler=i,!0},s.getInnerHTML=Sd,s}function pT(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function gT(){throw new Error("Do not call tag.renderOnce as a function but instead set it as: `(props) => tag.renderOnce = () => html`` `")}function mT(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}tt.element=fT;tt.renderOnce=gT;tt.use=mT;tt.deepPropWatch=tt;tt.route=pT;tt.inject=oT;tt.onInit=aT;tt.onDestroy=lT;tt.onRender=hT;tt.getInnerHTML=Sd;tt.app=function(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};tt.immutableProps=function(t){return tt(t,Dt.IMMUTABLE)};tt.watchProps=function(t){return tt(t,Dt.SHALLOW)};Object.defineProperty(tt,"renderOnce",{set(n){n.tagJsType=J.renderOnce,n.processInit=Qy,n.processUpdate=yn,n.destroy=Qr,n.hasValueChanged=function(){return 0}}});Object.defineProperty(tt,"use",{set(n){n.original={setUse:it,tags:Lr},n.tagJsType=J.stateRender,n.processInit=Vd,n.processUpdate=yn,n.hasValueChanged=Si,n.destroy=Qr}});Object.defineProperty(tt,"promise",{set(n){MT(n)}});function _T(n,t,e){if(td(n,t))return 11;switch(e){case Dt.NONE:return 1;case Dt.SHALLOW:return xh(n,t);case Dt.IMMUTABLE:return Nd(n,t)}return yT(n,t)}function yT(n,t){let e=n,r=t;return e=[...n],r=[...t||[]],e.every((i,a)=>TT(i,a,e,r))?!1:7}function TT(n,t,e,r){const s=r[t];if(typeof n===X.object){const i={...n},a={...s||{}};return Object.entries(i).every(([l,h])=>Gu(h,a[l],()=>{delete i[l],delete a[l]}))}return Gu(n,s,function(){e.splice(t,1),r.splice(t,1)})}function Gu(n,t,e){if(typeof n!==X.function)return Lh(n,t,Yr)?4:!1;if(typeof t!==X.function)return!1;const s=t==null?void 0:t.original;s&&(t=s),n.original&&(n=n.original);const a=n.toString(),c=t.toString();return a===c?(e(),5):(e(),6)}function ET(n,t){const e=t.props,s=n.propsConfig.latest;return _T(e,s,n.templater.propWatch)}function Nd(n,t){const e=n.length;for(let r=0;r<e;++r){const s=n[r],i=t[r];if(s!==i)return 2}return!1}const Pa=3,Yr=10;function wT(n,t,e){const r=n.templater;if(r.tagJsType!==J.stateRender){switch(r.propWatch){case Dt.IMMUTABLE:return n.propsConfig={latest:t,castProps:e};case Dt.SHALLOW:return n.propsConfig={latest:t.map(IT),castProps:e}}return n.propsConfig={latest:t.map(vT),castProps:e}}}function IT(n){return _a(n,Pa)}function vT(n){return _a(n,Yr)}function Od(n,t,e){const r={templater:n,context:t,castedProps:e,appSupport:void 0},s=t.global;return s.blocked=[],t.state||(t.state={newer:{state:[],states:[]}}),r}function Md(n,t,e,r){t.appSupport=e||t;const s=n.props;return s&&(t.propsConfig=wT(t,s,r)),t}function AT(n,t,e,r,s){const i={templater:n,context:r,castedProps:s,appSupport:void 0};return i.ownerSupport=t,i.appSupport=e,i}function Zr(n,t,e,r,s){const i=Od(n,t,s);return i.ownerSupport=e||i,i.ownerSupport.appSupport=r||i.ownerSupport,Md(n,i,r,s)}function bT(n,t,e,r){let s=e.templater||e;const i=n.templater.tag;i&&i._innerHTML&&(s=e.outerHTML||e._innerHTML.outerHTML);const a=Zr(s,t,r,r.appSupport),l=n.context.state.oldest;Mh(l,a)}function Ho(n,t,e){if(Jr(t))return n.global===void 0&&mn(n),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=t,CT(t,n,e),!0;if(n.global){n.oldTagJsVar=n.tagJsVar,n.tagJsVar=t;const i=n.state.newest;if(i)return typeof t===X.function||bT(i,n,t,e),!0}return t.processInit(t,n,e,n.placeholder),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=t,!0}function CT(n,t,e){if(!t.state.newest){n.processInit(n,t,e,t.placeholder);return}const r=Zr(n,t,e,e.appSupport);k_(e,r,t)}function ka(n,t,e,r){const s=n&&n.tagJsType;if(delete t.deleted,s){if(s===J.renderOnce)return;Ho(t,n,e);return}if(Ht(n)){Qs(t,n,e),t.oldTagJsVar=t.tagJsVar,t.tagJsVar=Wh(n);return}if(typeof n===X.function){t.value=n;return}r&&xm(n,t)}function Va(n,t,e){const s=n.tagJsVar.hasValueChanged(t,n,e);return s===0||ka(t,n,e,s),s}function ST(n,t){let e;return n&&(e=t=document.createTextNode(_n),Xt.push([re,[n,t]])),{appendMarker:e,insertBefore:t}}class RT extends Z{constructor(e){super(e);Zt(this,"value");this.value=e}subscribe(e){const r=super.subscribe(e);return e(this.value,r),r}}const PT=((n,t)=>Da(n,t).pastResult),kT=n=>n;function VT(n){const t=(e,r)=>Da(e,r,n).pastResult;return t.setup=n,Na(()=>t,t),t}const Da=(n,t,{init:e,before:r,final:s=kT}={})=>{const i=Qt({pastResult:void 0,values:void 0}),c=typeof n=="function"?n():n,l=i.values===void 0;let h=0;l&&typeof n=="function"&&tt.onRender(()=>{if(++h,h===1)return;const p=n();f(p)});function f(p){if(i.values===void 0){if(r&&!r(p))return i.values=p,i;const V=(e||t)(p,i.values);return i.pastResult=s(V),i.values=p,i}if(p.every((S,V)=>S===i.values[V]))return i;if(r&&!r(p))return i.values=p,i;const v=t(p,i.values);return i.pastResult=s(v),i.values.length=0,i.values.push(...p),i}return f(c)};function Na(n,t){return Object.defineProperty(t,"noInit",{get(){const e=n();return e.setup.init=()=>{},e}}),Object.defineProperty(t,"asSubject",{get(){const e=n(),r=Qt(()=>Ws()),s=Qt(()=>new RT(void 0)),i=Qt(()=>({state:it.stateConfig.state,states:it.stateConfig.states})),a=(c,l)=>(Da(c,(f,p)=>{const m=Ws(),v=l(f,p);if(m!==r){const S=i.state,F=r.context.state.older;if(F){const j=F.state,q=i.states,st=F.states;ty(S,j,q,st)}}s.next(v)},e.setup),s);return a.setup=e.setup,Na(()=>a,a),a}}),Object.defineProperty(t,"truthy",{get(){const e=n();return e.setup.before=r=>r.every(s=>s),e}}),t}Na(()=>VT({}),PT);class Oa extends Error{constructor(e,r,s={}){super(e);Zt(this,"details");this.name=Oa.name,this.details={...s,errorCode:r}}}class Ma extends Oa{constructor(t,e){super(t,"sync-callback-error",e),this.name=Ma.name}}function DT(n,t,e,...r){const s=e(...r),i=kh(n);if(!i)return s;if(i.context.global)Mr(i);else{const a=i.context;a.tagJsVar.processUpdate(a.value,a,i.ownerSupport,[])}return Gn(s)&&s.finally(()=>{if(n.global)Mr(i);else{const a=i.context;a.tagJsVar.processUpdate(a.value,a,i.ownerSupport,[])}}),s}function NT(n){const t=de(),e=Qt({callback:n}),r=Qt(()=>Ld(t,it.stateConfig,e));return e.callback=n,r}function Ld(n,t,e){const r=t.states;return function(...i){const a=DT(n,r,e.callback,...i);return we(),a}}new Ma("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const OT=()=>{};function MT(n){const t=de(),e=Qt({callback:OT}),r=Qt({current:void 0}),s=Qt(()=>Ld(t,it.stateConfig,e));if(r.current!==n){r.current=n;const i=n;n.then(()=>{r.current===i&&s()})}}function de(){return it.stateConfig.context}function xd(){return de().target}function Yt(n){return it.stateConfig.context=n}function Gt(){delete it.stateConfig.context}function LT(n,t,e,r,s,i,a){const c=document.createTextNode(_n);if(Lr.push(e.wrapper||{original:e}),i.placeholder=c,t.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const p=i.events;for(const v in p){const S=p[v];s.removeEventListener(v,S)}i.events={},++_t.locks;const m=Xn(f,t);return--_t.locks,we(),m},++_t.locks;const l=document.createDocumentFragment();l.appendChild(c);const f=kd(e,i,{appSupport:{appElement:s,context:i},appElement:s});return f.appElement=s,a&&(r.tag=f.templater.tag),--_t.locks,we(),s.appendChild(l),{support:f,tags:Lr,ValueTypes:J}}function xT(n,t,e){const r=Od(n,t);return Md(n,r,r),r.appElement=e,t.state.oldest||(t.state.oldest=r,t.state.older=t.state.newer),t.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const bo=[],Ku="__taggedjs_tag_element__";function FT(n,t,e){const r=t[Ku],s=bo.findIndex(m=>m.element===t);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:t}),s>=0){const m=bo[s].support;Xn(m,m.context.global),bo.splice(s,1)}t[Ku]=!0;let i=(()=>h(e));i.propWatch=Dt.NONE,i.tagJsType=J.stateRender,i.processUpdate=yn,i.props=[e],i.isApp=!0;const a=UT(i,t),c=a.global,l=a.state.newest;Dh(l.context),Ii(l);let h=n(e);const f=typeof h==X.function;f||(Jr(h)?(a.state.newest.propsConfig={latest:[e],castProps:[e]},i.propWatch=h.propWatch,i.tagJsType=h.tagJsType,i.wrapper=h.wrapper,i=h):(i.tag=h,h=n));const p=LT(n,c,i,h,t,a,f);return Gt(),p}function UT(n,t){const e={tagJsType:"templater",hasValueChanged:Si,destroy:Qr,processInitAttribute:Bt,processInit:function(){console.debug("do nothing app function")},processUpdate:yn},r={updateCount:0,value:n,valueIndex:0,varCounter:0,destroy$:new Z,render$:new Z,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:e};return mn(r),r.events={},xT(n,r,t),r}function BT(n){return Array.isArray(n)&&Object.prototype.hasOwnProperty.call(n,"raw")}function Rt(n,t){return function(e,r,s){if(BT(r)){const i=r.reduce((a,c,l)=>a+c+(s[l]??""),"");return t(e,[n,i])}return t(e,[n,r])}}function jT(n,t,e){const r=ts(n,n.elementFunctions);return Fd(r,t,e)}function Fd(n,t,e){function r(s){return r.toCallback(s)}return r.toCallback=e,n.listeners.push([t,r]),n.allListeners.push([t,r]),n}function vt(n,t){const e=ts(n,n.elementFunctions);return e.attributes.push(t),xa(e,t[1]),ln(t[0])?xn(t[0],e):ln(t[1])&&xn(t[1],e),e}function $T(n,t){const e=ts(n,n.elementFunctions);return Object.entries(t).map(r=>{e.attributes.push(r),xa(e,r[1]),ln(r[0])?xn(r[0],e):ln(r[1])&&xn(r[1],e)}),e}const qT=Rt("style",vt),HT=Rt("id",vt),zT=Rt("class",vt),WT=Rt("href",vt),JT=Rt("value",vt),GT=Rt("placeholder",vt),KT=Rt("src",vt),QT=Rt("title",vt),XT=Rt("type",vt),YT=Rt("checked",vt),ZT=Rt("disabled",vt),tE=Rt("selected",vt),eE=Rt("minLength",vt),nE=Rt("maxLength",vt),rE=Rt("cellpadding",vt),sE=Rt("cellspacing",vt),iE=Rt("border",vt);function Ud(n,t){return n.attributes.push(t),xa(n,t[1]),ln(t[0])?xn(t[0],n):ln(t[1])&&xn(t[1],n),n}function La(n){function t(r){return function(s){return jT(n,r,s)}}return{onClose:t("onclose"),onDoubleClick:t("ondblclick"),onClick:t("click"),onBlur:t("onblur"),onChange:t("onchange"),onInput:t("oninput"),contextMenu:t("contextmenu"),onMousedown:t("onmousedown"),onMouseup:t("onmouseup"),onMouseover:t("onmouseover"),onMouseout:t("onmouseout"),onKeydown:t("onkeydown"),onKeyup:t("onkeyup"),attr:(...r)=>vt(n,r),attrs:r=>$T(n,r),key:function(r){return this.arrayValue=r,this},style:At(qT,n),id:At(HT,n),class:At(zT,n),href:At(WT,n),value:At(JT,n),placeholder:At(GT,n),src:At(KT,n),type:At(XT,n),title:At(QT,n),checked:At(YT,n),disabled:At(ZT,n),selected:At(tE,n),cellSpacing:At(sE,n),cellPadding:At(rE,n),border:At(iE,n),minLength:At(eE,n),maxLength:At(nE,n)}}function xa(n,t){let e=1;t!=null&&typeof t!="function"&&typeof t.length=="number"&&(e+=t.length),n.contentId+=e}function At(n,t){return((e,...r)=>n(t,e,r))}function oE(n,t,e){if(vi(e)){Object.entries(e).forEach(([r,s])=>{s?n.classList.add(r):n.classList.remove(r)});return}qh(n,t,e)}function xn(n,t){t.contexts||(t.contexts=[]),t.contexts.push(n)}function ln(n){return Array.isArray(n)||ze(n)||(n==null?void 0:n.tagJsType)}function Ps(n,t){return(e,r)=>Ud(e,[n,r,!1,t])}function gt(n){return(t,e)=>Fd(t,n,e)}const aE={onClose:gt("onclose"),onClick:gt("click"),onDoubleClick:gt("ondblclick"),onDblClick:gt("ondblclick"),onBlur:gt("onblur"),onChange:gt("onchange"),onInput:gt("oninput"),onMousedown:gt("onmousedown"),onMouseDown:gt("onmousedown"),onMouseup:gt("onmouseup"),onMouseUp:gt("onmouseup"),onMouseover:gt("onmouseover"),onMouseOver:gt("onmouseup"),onMouseout:gt("onmouseout"),onMouseOut:gt("onmouseout"),onKeyup:gt("onkeyup"),onKeyUp:gt("onkeyup"),onKeydown:gt("onkeydown"),onKeyDown:gt("onkeydown")},Qu={checked:Ps("checked",Ao),disabled:Ps("disabled",Ao),selected:Ps("selected",Ao),class:Ps("class",oE),...aE};function cE(n,t){return Object.entries(t).reduce((r,[s,i])=>s in Qu?Qu[s](n,i):Ud(n,[s,i,!1,Kn]),n)}function uE(n){return Bd(n)}function Bd(n){const t=lE(n.attributes),e=jd(n.innerHTML);return`<${n.tagName}${t}>${e}</${n.tagName}>`}function lE(n){if(!n||n.length===0)return"";const t=[];return n.forEach(e=>{const r=e[0];if(typeof r!="string"||r.length===0)return;const s=qd(e[1]);if(s===!0){t.push(r);return}s===!1||s===void 0||s===null||t.push(`${r}="${$d(String(s))}"`)}),t.length>0?` ${t.join(" ")}`:""}function jd(n){return!n||n.length===0?"":n.map(t=>{const e=qd(t);return hE(e)?Bd(e):Array.isArray(e)?jd(e):e==null||e===!1?"":$d(String(e))}).join("")}function hE(n){return!!n&&typeof n=="object"&&typeof n.tagName=="string"}function $d(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function qd(n){return typeof n=="function"?n():n}function Hd(n,t){++n.updateCount;const e=n.contexts,r=[];if(e.length&&(Zs(e,t,r),e.length=0,r.length)){const s=n.htmlDomMeta;return n.deleted=!0,Promise.all(r).then(()=>{++_t.locks,wa(s),n.htmlDomMeta=[],--_t.locks,we()})}va(n),n.htmlDomMeta=[],delete n.contexts,n.deleted=!0}function Zs(n,t,e){const r=n[0],s=r.tagJsVar.destroy(r,t);if(r.deleted=!0,Gn(s))return e.push(s.then(()=>{if(n.length>1)return Zs(n.slice(1,n.length),t,e)}));if(r.htmlDomMeta&&(va(r),delete r.htmlDomMeta),n.length>1)return Zs(n.slice(1,n.length),t,e)}function zd(n,t,e){if(t.locked||t.deleted===!0)return;if(++t.updateCount,Fa(n,t)){Hd(t,e),t.htmlDomMeta=[],delete t.deleted,ka(n,t,e,789);return}const i=t.contexts,a=n.contexts||[],c=t.tagJsVar.allListeners;if(n.allListeners.forEach((h,f)=>{const p=c[f][1];p.toCallback=h[1].toCallback}),i.length!==a.length)throw console.info("context mismatch",{value:n,context:t,conValues:i.map(h=>h.value),vContexts:a,deleted:t.deleted}),new Error("super issue discovered");t.locked=79,i.forEach((h,f)=>{h.tagJsVar.processUpdate(a[f],h,e)}),delete t.locked}function Fa(n,t){if(t.value===n)return 0;if(!n||n.tagJsType!=="element")return 1;const s=n.contentId,i=t.value.contentId;if(s!==i)return 1;const a=n.innerHTML.length,c=t.value.innerHTML.length;return a!==c?1:0}function dE(n,t,e,r,s){const i=[],a={updateCount:0,parentContext:e,contexts:i,target:t,value:n,htmlDomMeta:[],tagJsVar:{tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:Bt,processInitAttribute:Bt,destroy:(p,m)=>{++a.updateCount,i.forEach(v=>v.tagJsVar.destroy(v,m))},processUpdate:(p,m,v,S)=>{++a.updateCount,Yt(h);let V=p(h);const k=a.underFunction;delete a.underFunction,V instanceof Function&&!V.tagJsType&&(k&&V.toString()===k.toString()?V=h.value:(a.underFunction=V,V=V()));const F=h.tagJsVar.processUpdate(V,h,v,S);return h.value=V,m.value=p,Gt(),F}},valueIndex:-1,withinOwnerElement:!0,destroy$:new Z,render$:new Z};Yt(a);let c=n();ze(c)&&!c.tagJsType&&(a.underFunction=c,c=c());const h=Jd(c,a,t,r,s);return e.contexts.push(a),Gt(),h}function Wd(n,t,e,r,s){n.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return Xu(i,r,s);case"function":{if(i.tagJsType==="element")break;return dE(i,r,t,e,s)}}if(i==null)return Xu(i,r,s);if(i.tagJsType==="element"){const c=Gd(i,t,e,t.contexts);Jt.push([s,[r,c]]),t.htmlDomMeta.push({nn:c.tagName,domElement:c,at:[]});return}return Jd(i,t,r,e,s)})}function Jd(n,t,e,r,s){const i=Kr(n,[],!0,t);return t.contexts.push(i),i.target=e,i.placeholder=document.createTextNode(""),Jt.push([s,[e,i.placeholder]]),Yt(i),i.tagJsVar.processInit(n,i,r,i.placeholder),Gt(),i}function Xu(n,t,e){const r=Ai(n),s=document.createTextNode(r);return Jt.push([e,[t,s]]),s}function Gd(n,t,e,r){const s=document.createElement(n.tagName);return t.target=s,n.attributes.forEach(i=>{const a=i[0];typeof a=="string"&&(i[2]=bi(a))}),gd(n.attributes,[],s,e,t),Wd(n.innerHTML,t,e,s,re),n.listeners.forEach((i,a)=>fE(n,a,e,i,s)),s}function fE(n,t,e,r,s){const i=(...a)=>{const l=n.listeners[t][1],h=Gr(e),f=h.context.updateCount;h.context.locked=1,++_t.locks;const p=l(...a);return--_t.locks,delete h.context.locked,f===h.context.updateCount?sd(p,h):(we(),Gn(p)?p.then(()=>{const v=h.context.state.newest;return Sa([v]),"promise-no-data-ever"}):"no-data-ever")};od(e.appSupport,r[0],s,i)}function pE(n,t,e,r){t.contexts=t.contexts||[],t.htmlDomMeta=[],t.locked=34;const s=Gd(n,t,e,t.contexts);delete t.locked,Jt.push([He,[r,s,"htmlTag.processInit"]]);const i={nn:n.tagName,domElement:s,at:n.attributes};return t.htmlDomMeta=[i],s}function M(n){const e=ts({tagJsType:"element",processInitAttribute:Bt,processInit:pE,destroy:Hd,processUpdate:zd,hasValueChanged:Fa,tagName:n,innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:La});return e.tagName=n,e}function ts(n,t){const e=(...r)=>{const s={...e};return s.attributes=[...e.attributes],s.listeners=[...e.listeners],s.allListeners=[...e.allListeners],r.length>0&&typeof r[0]=="object"&&!Array.isArray(r[0])&&!r[0].tagJsType&&(cE(s,r[0]),r.splice(0,1)),s.innerHTML=r,r.forEach(i=>{if(ln(i)){if(i.tagJsType==="element"){s.allListeners.push(...i.allListeners),i.contexts&&(s.contexts?s.contexts.push(...i.contexts):s.contexts=i.contexts);return}gE(i,s)}}),s};return Object.assign(e,n),Object.assign(e,La(e)),e.attributes=[...n.attributes],e.listeners=[...n.listeners],e.allListeners=[...n.allListeners],e.toString=function(){return uE(this)},e}function gE(n,t){t.contexts||(t.contexts=[]),t.contexts.push(n)}const PS=mE();function mE(){const t=ts({tagJsType:"element",processInitAttribute:Bt,processInit:_E,destroy:yE,processUpdate:zd,hasValueChanged:Fa,tagName:"no-element",innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:La});return t.tagName="no-element",t}function _E(n,t,e,r){t.contexts=t.contexts||[],t.htmlDomMeta=[],Wd(n.innerHTML,t,e,r,He)}function yE(n,t){++n.updateCount;const e=n.contexts,r=[];if(e.length&&(Zs(e,t,r),e.length=0,r.length)){const s=n.htmlDomMeta;return Promise.all(r).then(()=>{++_t.locks,wa(s),--_t.locks,we()})}}const Yu=M("button"),kS=M("select"),VS=M("option"),DS=M("input");M("textarea");M("html");M("head");M("title");M("meta");M("link");M("style");M("body");M("script");M("noscript");M("hr");const NS=M("h1"),Zu=M("h2");M("h3");M("h4");M("h5");M("h6");M("ol");M("ul");M("li");const tl=M("div"),OS=M("main"),Co=M("section"),MS=M("header");M("footer");M("form");M("fieldset");M("legend");const LS=M("dialog"),xS=M("pre");M("table");M("tr");M("td");M("th");M("thead");M("tbody");M("tfoot");const FS=M("a"),US=M("img");M("br");const BS=M("label"),So=M("p");M("small");const jS=M("span"),$S=M("strong");M("b");M("sup");M("nav");M("figure");M("figcaption");M("code");M("canvas");M("svg");M("path");M("polygon");M("rect");const TE=()=>{};var el={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},EE=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],a=n[e++],c=n[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Qd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,v=h&63;l||(v=64,a||(m=64)),r.push(e[f],e[p],e[m],e[v])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Kd(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):EE(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const h=s<n.length?e[n.charAt(s)]:64;++s;const p=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new wE;const m=i<<2|c>>4;if(r.push(m),h!==64){const v=c<<4&240|h>>2;if(r.push(v),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IE=function(n){const t=Kd(n);return Qd.encodeByteArray(t,!0)},ti=function(n){return IE(n).replace(/\./g,"")},Xd=function(n){try{return Qd.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=()=>vE().__FIREBASE_DEFAULTS__,bE=()=>{if(typeof process>"u"||typeof el>"u")return;const n=el.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},CE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Xd(n[1]);return t&&JSON.parse(t)},Pi=()=>{try{return TE()||AE()||bE()||CE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yd=n=>{var t,e;return(e=(t=Pi())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},SE=n=>{const t=Yd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Zd=()=>{var n;return(n=Pi())==null?void 0:n.config},tf=n=>{var t;return(t=Pi())==null?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ef(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ti(JSON.stringify(e)),ti(JSON.stringify(a)),""].join(".")}const Sr={};function kE(){const n={prod:[],emulator:[]};for(const t of Object.keys(Sr))Sr[t]?n.emulator.push(t):n.prod.push(t);return n}function VE(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let nl=!1;function nf(n,t){if(typeof window>"u"||typeof document>"u"||!Yn(window.location.host)||Sr[n]===t||Sr[n]||nl)return;Sr[n]=t;function e(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=kE().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{nl=!0,a()},m}function f(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=VE(r),v=e("text"),S=document.getElementById(v)||document.createElement("span"),V=e("learnmore"),k=document.getElementById(V)||document.createElement("a"),F=e("preprendIcon"),j=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;c(q),f(k,V);const st=h();l(j,F),q.append(j,S,k,st),document.body.appendChild(q)}i?(S.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function NE(){var t;const n=(t=Pi())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ME(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function LE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xE(){const n=Nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function FE(){return!NE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UE(){try{return typeof indexedDB=="object"}catch{return!1}}function BE(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="FirebaseError";class Ce extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=jE,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?$E(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ce(s,c,r)}}function $E(n,t){return n.replace(qE,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const qE=/\{\$([^}]+)}/g;function HE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function hn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],a=t[s];if(rl(i)&&rl(a)){if(!hn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function rl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function zE(n,t){const e=new WE(n,t);return e.subscribe.bind(e)}class WE{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");JE(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=Ro),s.error===void 0&&(s.error=Ro),s.complete===void 0&&(s.complete=Ro);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JE(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Ro(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n){return n&&n._delegate?n._delegate:n}class dn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new RE;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(QE(t))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=an){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=an){return this.instances.has(t)}getOptions(t=an){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KE(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=an){return this.component?this.component.multipleInstances?t:an:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KE(n){return n===an?void 0:n}function QE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new GE(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const YE={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},ZE=z.INFO,tw={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},ew=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=tw[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ua{constructor(t){this.name=t,this._logLevel=ZE,this._logHandler=ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?YE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const nw=(n,t)=>t.some(e=>n instanceof e);let sl,il;function rw(){return sl||(sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sw(){return il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rf=new WeakMap,zo=new WeakMap,sf=new WeakMap,Po=new WeakMap,Ba=new WeakMap;function iw(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{e(Fe(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&rf.set(e,n)}).catch(()=>{}),Ba.set(t,n),t}function ow(n){if(zo.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});zo.set(n,t)}let Wo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return zo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||sf.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Fe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function aw(n){Wo=n(Wo)}function cw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ko(this),t,...e);return sf.set(r,t.sort?t.sort():[t]),Fe(r)}:sw().includes(n)?function(...t){return n.apply(ko(this),t),Fe(rf.get(this))}:function(...t){return Fe(n.apply(ko(this),t))}}function uw(n){return typeof n=="function"?cw(n):(n instanceof IDBTransaction&&ow(n),nw(n,rw())?new Proxy(n,Wo):n)}function Fe(n){if(n instanceof IDBRequest)return iw(n);if(Po.has(n))return Po.get(n);const t=uw(n);return t!==n&&(Po.set(n,t),Ba.set(t,n)),t}const ko=n=>Ba.get(n);function lw(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,t),c=Fe(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Fe(a.result),l.oldVersion,l.newVersion,Fe(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const hw=["get","getKey","getAll","getAllKeys","count"],dw=["put","add","delete","clear"],Vo=new Map;function ol(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Vo.get(t))return Vo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=dw.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hw.includes(e)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[e](...c),s&&l.done]))[0]};return Vo.set(t,i),i}aw(n=>({...n,get:(t,e,r)=>ol(t,e)||n.get(t,e,r),has:(t,e)=>!!ol(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(pw(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function pw(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jo="@firebase/app",al="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Ua("@firebase/app"),gw="@firebase/app-compat",mw="@firebase/analytics-compat",_w="@firebase/analytics",yw="@firebase/app-check-compat",Tw="@firebase/app-check",Ew="@firebase/auth",ww="@firebase/auth-compat",Iw="@firebase/database",vw="@firebase/data-connect",Aw="@firebase/database-compat",bw="@firebase/functions",Cw="@firebase/functions-compat",Sw="@firebase/installations",Rw="@firebase/installations-compat",Pw="@firebase/messaging",kw="@firebase/messaging-compat",Vw="@firebase/performance",Dw="@firebase/performance-compat",Nw="@firebase/remote-config",Ow="@firebase/remote-config-compat",Mw="@firebase/storage",Lw="@firebase/storage-compat",xw="@firebase/firestore",Fw="@firebase/ai",Uw="@firebase/firestore-compat",Bw="firebase",jw="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="[DEFAULT]",$w={[Jo]:"fire-core",[gw]:"fire-core-compat",[_w]:"fire-analytics",[mw]:"fire-analytics-compat",[Tw]:"fire-app-check",[yw]:"fire-app-check-compat",[Ew]:"fire-auth",[ww]:"fire-auth-compat",[Iw]:"fire-rtdb",[vw]:"fire-data-connect",[Aw]:"fire-rtdb-compat",[bw]:"fire-fn",[Cw]:"fire-fn-compat",[Sw]:"fire-iid",[Rw]:"fire-iid-compat",[Pw]:"fire-fcm",[kw]:"fire-fcm-compat",[Vw]:"fire-perf",[Dw]:"fire-perf-compat",[Nw]:"fire-rc",[Ow]:"fire-rc-compat",[Mw]:"fire-gcs",[Lw]:"fire-gcs-compat",[xw]:"fire-fst",[Uw]:"fire-fst-compat",[Fw]:"fire-vertex","fire-js":"fire-js",[Bw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Map,qw=new Map,Ko=new Map;function cl(n,t){try{n.container.addComponent(t)}catch(e){Ie.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fn(n){const t=n.name;if(Ko.has(t))return Ie.debug(`There were multiple attempts to register component ${t}.`),!1;Ko.set(t,n);for(const e of ei.values())cl(e,n);for(const e of qw.values())cl(e,n);return!0}function ja(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Kt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ue=new es("app","Firebase",Hw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=jw;function of(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Go,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Ue.create("bad-app-name",{appName:String(s)});if(e||(e=Zd()),!e)throw Ue.create("no-options");const i=ei.get(s);if(i){if(hn(e,i.options)&&hn(r,i.config))return i;throw Ue.create("duplicate-app",{appName:s})}const a=new XE(s);for(const l of Ko.values())a.addComponent(l);const c=new zw(e,r,a);return ei.set(s,c),c}function af(n=Go){const t=ei.get(n);if(!t&&n===Go&&Zd())return of();if(!t)throw Ue.create("no-app",{appName:n});return t}function Be(n,t,e){let r=$w[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ie.warn(a.join(" "));return}Fn(new dn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="firebase-heartbeat-database",Jw=1,xr="firebase-heartbeat-store";let Do=null;function cf(){return Do||(Do=lw(Ww,Jw,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(xr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),Do}async function Gw(n){try{const e=(await cf()).transaction(xr),r=await e.objectStore(xr).get(uf(n));return await e.done,r}catch(t){if(t instanceof Ce)Ie.warn(t.message);else{const e=Ue.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ie.warn(e.message)}}}async function ul(n,t){try{const r=(await cf()).transaction(xr,"readwrite");await r.objectStore(xr).put(t,uf(n)),await r.done}catch(e){if(e instanceof Ce)Ie.warn(e.message);else{const r=Ue.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ie.warn(r.message)}}}function uf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=1024,Qw=30;class Xw{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Zw(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ll();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Qw){const a=tI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ie.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ll(),{heartbeatsToSend:r,unsentEntries:s}=Yw(this._heartbeatsCache.heartbeats),i=ti(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Ie.warn(e),""}}}function ll(){return new Date().toISOString().substring(0,10)}function Yw(n,t=Kw){const e=[];let r=n.slice();for(const s of n){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),hl(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),hl(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Zw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UE()?BE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Gw(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ul(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ul(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function hl(n){return ti(JSON.stringify({version:2,heartbeats:n})).length}function tI(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n){Fn(new dn("platform-logger",t=>new fw(t),"PRIVATE")),Fn(new dn("heartbeat",t=>new Xw(t),"PRIVATE")),Be(Jo,al,n),Be(Jo,al,"esm2020"),Be("fire-js","")}eI("");var nI="firebase",rI="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be(nI,rI,"app");function lf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sI=lf,hf=new es("auth","Firebase",lf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Ua("@firebase/auth");function iI(n,...t){ni.logLevel<=z.WARN&&ni.warn(`Auth (${Zn}): ${n}`,...t)}function Ls(n,...t){ni.logLevel<=z.ERROR&&ni.error(`Auth (${Zn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n,...t){throw qa(n,...t)}function ee(n,...t){return qa(n,...t)}function $a(n,t,e){const r={...sI(),[t]:e};return new es("auth","Firebase",r).create(t,{appName:n.name})}function je(n){return $a(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function df(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&fe(n,"argument-error"),$a(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qa(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return hf.create(n,...t)}function B(n,t,...e){if(!n)throw qa(t,...e)}function _e(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Ls(t),new Error(t)}function ve(n,t){n||_e(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function oI(){return dl()==="http:"||dl()==="https:"}function dl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oI()||ME()||"connection"in navigator)?navigator.onLine:!0}function cI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e){this.shortDelay=t,this.longDelay=e,ve(e>t,"Short delay should be less than long delay!"),this.isMobile=DE()||LE()}get(){return aI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n,t){ve(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hI=new rs(3e4,6e4);function za(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function tr(n,t,e,r,s={}){return pf(n,s,async()=>{let i={},a={};r&&(t==="GET"?a=r:i={body:JSON.stringify(r)});const c=ns({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:t,headers:l,...i};return OE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(h.credentials="include"),ff.fetch()(await gf(n,n.config.apiHost,e,c),h)})}async function pf(n,t,e){n._canInitEmulator=!1;const r={...uI,...t};try{const s=new fI(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ks(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ks(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ks(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ks(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw $a(n,f,h);fe(n,f)}}catch(s){if(s instanceof Ce)throw s;fe(n,"network-request-failed",{message:String(s)})}}async function dI(n,t,e,r,s={}){const i=await tr(n,t,e,r,s);return"mfaPendingCredential"in i&&fe(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function gf(n,t,e,r){const s=`${t}${e}?${r}`,i=n,a=i.config.emulator?Ha(n.config,s):`${n.config.apiScheme}://${s}`;return lI.includes(e)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class fI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ee(this.auth,"network-request-failed")),hI.get())})}}function ks(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=ee(n,t,r);return s.customData._tokenResponse=e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(n,t){return tr(n,"POST","/v1/accounts:delete",t)}async function ri(n,t){return tr(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gI(n,t=!1){const e=It(n),r=await e.getIdToken(t),s=Wa(r);B(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Rr(No(s.auth_time)),issuedAtTime:Rr(No(s.iat)),expirationTime:Rr(No(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function No(n){return Number(n)*1e3}function Wa(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xd(e);return s?JSON.parse(s):(Ls("Failed to decode base64 JWT payload"),null)}catch(s){return Ls("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fl(n){const t=Wa(n);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ce&&mI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function mI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(n){var p;const t=n.auth,e=await n.getIdToken(),r=await Fr(n,ri(t,{idToken:e}));B(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?mf(s.providerUserInfo):[],a=TI(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Xo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function yI(n){const t=It(n);await si(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function TI(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function mf(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(n,t){const e=await pf(n,{},async()=>{const r=ns({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await gf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(l.credentials="include"),ff.fetch()(a,l)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function wI(n,t){return tr(n,"POST","/v2/accounts:revokeToken",za(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):fl(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){B(t.length!==0,"internal-error");const e=fl(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await EI(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,a=new Vn;return r&&(B(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return _e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n,t){B(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class te{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new _I(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Fr(this,this.stsTokenManager.getToken(this.auth,t));return B(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return gI(this,t)}reload(){return yI(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new te({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await si(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(je(this.auth));const t=await this.getIdToken();return await Fr(this,pI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,i=e.phoneNumber??void 0,a=e.photoURL??void 0,c=e.tenantId??void 0,l=e._redirectEventId??void 0,h=e.createdAt??void 0,f=e.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:S,stsTokenManager:V}=e;B(p&&V,t,"internal-error");const k=Vn.fromJSON(this.name,V);B(typeof p=="string",t,"internal-error"),Ne(r,t.name),Ne(s,t.name),B(typeof m=="boolean",t,"internal-error"),B(typeof v=="boolean",t,"internal-error"),Ne(i,t.name),Ne(a,t.name),Ne(c,t.name),Ne(l,t.name),Ne(h,t.name),Ne(f,t.name);const F=new te({uid:p,auth:t,email:s,emailVerified:m,displayName:r,isAnonymous:v,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:k,createdAt:h,lastLoginAt:f});return S&&Array.isArray(S)&&(F.providerData=S.map(j=>({...j}))),l&&(F._redirectEventId=l),F}static async _fromIdTokenResponse(t,e,r=!1){const s=new Vn;s.updateFromServerResponse(e);const i=new te({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await si(i),i}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?mf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Vn;c.updateFromIdToken(r);const l=new te({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map;function ye(n){ve(n instanceof Function,"Expected a class definition");let t=pl.get(n);return t?(ve(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,pl.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}_f.type="NONE";const gl=_f;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n,t,e){return`firebase:${n}:${t}:${e}`}class Dn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xs(this.userKey,s.apiKey,i),this.fullPersistenceKey=xs("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await ri(this.auth,{idToken:t}).catch(()=>{});return e?te._fromGetAccountInfoResponse(this.auth,e,t):null}return te._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Dn(ye(gl),t,r);const s=(await Promise.all(e.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||ye(gl);const a=xs(r,t.config.apiKey,t.name);let c=null;for(const h of e)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const m=await ri(t,{idToken:f}).catch(()=>{});if(!m)break;p=await te._fromGetAccountInfoResponse(t,m,f)}else p=te._fromJSON(t,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Dn(i,t,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(e.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Dn(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(yf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vf(t))return"Blackberry";if(Af(t))return"Webos";if(Tf(t))return"Safari";if((t.includes("chrome/")||Ef(t))&&!t.includes("edge/"))return"Chrome";if(If(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yf(n=Nt()){return/firefox\//i.test(n)}function Tf(n=Nt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ef(n=Nt()){return/crios\//i.test(n)}function wf(n=Nt()){return/iemobile/i.test(n)}function If(n=Nt()){return/android/i.test(n)}function vf(n=Nt()){return/blackberry/i.test(n)}function Af(n=Nt()){return/webos/i.test(n)}function Ja(n=Nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function II(n=Nt()){var t;return Ja(n)&&!!((t=window.navigator)!=null&&t.standalone)}function vI(){return xE()&&document.documentMode===10}function bf(n=Nt()){return Ja(n)||If(n)||Af(n)||vf(n)||/windows phone/i.test(n)||wf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n,t=[]){let e;switch(n){case"Browser":e=ml(Nt());break;case"Worker":e=`${ml(Nt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Zn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((a,c)=>{try{const l=t(i);a(l)}catch(l){c(l)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(n,t={}){return tr(n,"GET","/v2/passwordPolicy",za(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=6;class SI{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??CI,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _l(this),this.idTokenSubscription=new _l(this),this.beforeStateQueue=new AI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ye(e)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await ri(this,{idToken:t}),r=await te._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Kt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await si(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=cI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Kt(this.app))return Promise.reject(je(this));const e=t?It(t):null;return e&&B(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Kt(this.app)?Promise.reject(je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ye(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bI(this),e=new SI(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new es("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await wI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ye(t)||this._popupRedirectResolver;B(e,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[ye(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,r,s);return()=>{a=!0,l()}}else{const l=t.addObserver(e);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Cf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&iI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function er(n){return It(n)}class _l{constructor(t){this.auth=t,this.observer=null,this.addObserver=zE(e=>this.observer=e)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PI(n){Ga=n}function kI(n){return Ga.loadJS(n)}function VI(){return Ga.gapiScript}function DI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(n,t){const e=ja(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(hn(i,t??{}))return s;fe(s,"already-initialized")}return e.initialize({options:t})}function OI(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(ye);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function MI(n,t,e){const r=er(n);B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=Sf(t),{host:a,port:c}=LI(t),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(hn(h,r.config.emulator)&&hn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Yn(a)?(ef(`${i}//${a}${l}`),nf("Auth",!0)):xI()}function Sf(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function LI(n){const t=Sf(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:yl(a)}}}function yl(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function xI(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return _e("not implemented")}_getIdTokenResponse(t){return _e("not implemented")}_linkToIdToken(t,e){return _e("not implemented")}_getReauthenticationResolver(t){return _e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(n,t){return dI(n,"POST","/v1/accounts:signInWithIdp",za(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="http://localhost";class fn extends Rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):fe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=e;if(!r||!s)return null;const a=new fn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return Nn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Nn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Nn(t,e)}buildRequest(){const t={requestUri:FI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=ns(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends ki{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends ss{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Oe.credentialFromTaggedObject(t)}static credentialFromError(t){return Oe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Oe.credential(t.oauthAccessToken)}catch{return null}}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Oe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return fn._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return me.credential(e,r)}catch{return null}}}me.GOOGLE_SIGN_IN_METHOD="google.com";me.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends ss{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Me.credential(t.oauthAccessToken)}catch{return null}}}Me.GITHUB_SIGN_IN_METHOD="github.com";Me.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends ss{constructor(){super("twitter.com")}static credential(t,e){return fn._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Le.credentialFromTaggedObject(t)}static credentialFromError(t){return Le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Le.credential(e,r)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await te._fromIdTokenResponse(t,r,s),a=Tl(r);return new Un({user:i,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=Tl(r);return new Un({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function Tl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Ce{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ii.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new ii(t,e,r,s)}}function Pf(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ii._fromErrorAndOperation(n,i,t,r):i})}async function UI(n,t,e=!1){const r=await Fr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Un._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(n,t,e=!1){const{auth:r}=n;if(Kt(r.app))return Promise.reject(je(r));const s="reauthenticate";try{const i=await Fr(n,Pf(r,s,t,n),e);B(i.idToken,r,"internal-error");const a=Wa(i.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),Un._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(n,t,e=!1){if(Kt(n.app))return Promise.reject(je(n));const r="signIn",s=await Pf(n,r,t),i=await Un._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(n,t){return It(n).setPersistence(t)}function qI(n,t,e,r){return It(n).onIdTokenChanged(t,e,r)}function HI(n,t,e){return It(n).beforeAuthStateChanged(t,e)}function zI(n,t,e,r){return It(n).onAuthStateChanged(t,e,r)}function WI(n){return It(n).signOut()}const oi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(oi,"1"),this.storage.removeItem(oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=1e3,GI=10;class Vf extends kf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);vI()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,GI):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},JI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Vf.type="LOCAL";const Df=Vf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends kf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Nf.type="SESSION";const Ka=Nf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new Vi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(e.origin,i)),l=await KI(c);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Qa("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return window}function XI(n){ce().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function YI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function tv(){return Of()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="firebaseLocalStorageDb",ev=1,ai="firebaseLocalStorage",Lf="fbase_key";class is{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Di(n,t){return n.transaction([ai],t?"readwrite":"readonly").objectStore(ai)}function nv(){const n=indexedDB.deleteDatabase(Mf);return new is(n).toPromise()}function Yo(){const n=indexedDB.open(Mf,ev);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ai,{keyPath:Lf})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ai)?t(r):(r.close(),await nv(),t(await Yo()))})})}async function El(n,t,e){const r=Di(n,!0).put({[Lf]:t,value:e});return new is(r).toPromise()}async function rv(n,t){const e=Di(n,!1).get(t),r=await new is(e).toPromise();return r===void 0?null:r.value}function wl(n,t){const e=Di(n,!0).delete(t);return new is(e).toPromise()}const sv=800,iv=3;class xf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yo(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>iv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Of()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vi._getInstance(tv()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await YI(),!this.activeServiceWorker)return;this.sender=new QI(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ZI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Yo();return await El(t,oi,"1"),await wl(t,oi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>El(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>rv(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>wl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Di(s,!1).getAll();return new is(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xf.type="LOCAL";const Ff=xf;new rs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n,t){return t?ye(t):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends Rf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Nn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Nn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Nn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function ov(n){return jI(n.auth,new Ya(n),n.bypassAuthState)}function av(n){const{auth:t,user:e}=n;return B(e,t,"internal-error"),BI(e,new Ya(n),n.bypassAuthState)}async function cv(n){const{auth:t,user:e}=n;return B(e,t,"internal-error"),UI(e,new Ya(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ov;case"linkViaPopup":case"linkViaRedirect":return cv;case"reauthViaPopup":case"reauthViaRedirect":return av;default:fe(this.auth,"internal-error")}}resolve(t){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new rs(2e3,1e4);async function lv(n,t,e){if(Kt(n.app))return Promise.reject(ee(n,"operation-not-supported-in-this-environment"));const r=er(n);df(n,t,ki);const s=Xa(r,e);return new cn(r,"signInViaPopup",t,s).executeNotNull()}class cn extends Uf{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){ve(this.filter.length===1,"Popup operations only handle one event");const t=Qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,uv.get())};t()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="pendingRedirect",Fs=new Map;class dv extends Uf{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Fs.get(this.auth._key());if(!t){try{const r=await fv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Fs.set(this.auth._key(),t)}return this.bypassAuthState||Fs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fv(n,t){const e=jf(t),r=Bf(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}async function pv(n,t){return Bf(n)._set(jf(t),"true")}function gv(n,t){Fs.set(n._key(),t)}function Bf(n){return ye(n._redirectPersistence)}function jf(n){return xs(hv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n,t,e){return _v(n,t,e)}async function _v(n,t,e){if(Kt(n.app))return Promise.reject(je(n));const r=er(n);df(n,t,ki),await r._initializationPromise;const s=Xa(r,e);return await pv(s,r),s._openRedirect(r,t,"signInViaRedirect")}async function yv(n,t){return await er(n)._initializationPromise,$f(n,t,!1)}async function $f(n,t,e=!1){if(Kt(n.app))return Promise.reject(je(n));const r=er(n),s=Xa(r,t),a=await new dv(r,s,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=600*1e3;class Ev{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!wv(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!qf(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(ee(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Tv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Il(t))}saveEventToCache(t){this.cachedEventUids.add(Il(t)),this.lastProcessedEventTime=Date.now()}}function Il(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function qf({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function wv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(n,t={}){return tr(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Av=/^https?/;async function bv(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Iv(n);for(const e of t)try{if(Cv(e))return}catch{}fe(n,"unauthorized-domain")}function Cv(n){const t=Qo(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!Av.test(e))return!1;if(vv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=new rs(3e4,6e4);function vl(){const n=ce().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Rv(n){return new Promise((t,e)=>{var s,i,a;function r(){vl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vl(),e(ee(n,"network-request-failed"))},timeout:Sv.get()})}if((i=(s=ce().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)t(gapi.iframes.getContext());else if((a=ce().gapi)!=null&&a.load)r();else{const c=DI("iframefcb");return ce()[c]=()=>{gapi.load?r():e(ee(n,"network-request-failed"))},kI(`${VI()}?onload=${c}`).catch(l=>e(l))}}).catch(t=>{throw Us=null,t})}let Us=null;function Pv(n){return Us=Us||Rv(n),Us}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=new rs(5e3,15e3),Vv="__/auth/iframe",Dv="emulator/auth/iframe",Nv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ov=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mv(n){const t=n.config;B(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Ha(t,Dv):`https://${n.config.authDomain}/${Vv}`,r={apiKey:t.apiKey,appName:n.name,v:Zn},s=Ov.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${ns(r).slice(1)}`}async function Lv(n){const t=await Pv(n),e=ce().gapi;return B(e,n,"internal-error"),t.open({where:document.body,url:Mv(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ee(n,"network-request-failed"),c=ce().setTimeout(()=>{i(a)},kv.get());function l(){ce().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fv=500,Uv=600,Bv="_blank",jv="http://localhost";class Al{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $v(n,t,e,r=Fv,s=Uv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...xv,width:r.toString(),height:s.toString(),top:i,left:a},h=Nt().toLowerCase();e&&(c=Ef(h)?Bv:e),yf(h)&&(t=t||jv,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,S])=>`${m}${v}=${S},`,"");if(II(h)&&c!=="_self")return qv(t||"",c),new Al(null);const p=window.open(t||"",c,f);B(p,n,"popup-blocked");try{p.focus()}catch{}return new Al(p)}function qv(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="__/auth/handler",zv="emulator/auth/handler",Wv=encodeURIComponent("fac");async function bl(n,t,e,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Zn,eventId:s};if(t instanceof ki){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",HE(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(t instanceof ss){const f=t.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${Wv}=${encodeURIComponent(l)}`:"";return`${Jv(n)}?${ns(c).slice(1)}${h}`}function Jv({config:n}){return n.emulator?Ha(n,zv):`https://${n.authDomain}/${Hv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="webStorageSupport";class Gv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ka,this._completeRedirectFn=$f,this._overrideRedirectResult=gv}async _openPopup(t,e,r,s){var a;ve((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await bl(t,e,r,Qo(),s);return $v(t,i,Qa())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await bl(t,e,r,Qo(),s);return XI(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(ve(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Lv(t),r=new Ev(t);return e.register("authEvent",s=>(B(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Oo,{type:Oo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Oo];i!==void 0&&e(!!i),fe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=bv(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bf()||Tf()||Ja()}}const Kv=Gv;var Cl="@firebase/auth",Sl="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yv(n){Fn(new dn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cf(n)},h=new RI(r,s,i,l);return OI(h,e),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Fn(new dn("auth-internal",t=>{const e=er(t.getProvider("auth").getImmediate());return(r=>new Qv(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(Cl,Sl,Xv(n)),Be(Cl,Sl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=300,tA=tf("authIdTokenMaxAge")||Zv;let Rl=null;const eA=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>tA)return;const s=e==null?void 0:e.token;Rl!==s&&(Rl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nA(n=af()){const t=ja(n,"auth");if(t.isInitialized())return t.getImmediate();const e=NI(n,{popupRedirectResolver:Kv,persistence:[Ff,Df,Ka]}),r=tf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=eA(i.toString());HI(e,a,()=>a(e.currentUser)),qI(e,c=>a(c))}}const s=Yd("auth");return s&&MI(e,`http://${s}`),e}function rA(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}PI({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=ee("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",rA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yv("Browser");var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $e,Hf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,_){function T(){}T.prototype=_.prototype,w.F=_.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(I,E,b){for(var y=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)y[xt-2]=arguments[xt];return _.prototype[E].apply(I,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,T){T||(T=0);const I=Array(16);if(typeof _=="string")for(var E=0;E<16;++E)I[E]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(E=0;E<16;++E)I[E]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=w.g[0],T=w.g[1],E=w.g[2];let b=w.g[3],y;y=_+(b^T&(E^b))+I[0]+3614090360&4294967295,_=T+(y<<7&4294967295|y>>>25),y=b+(E^_&(T^E))+I[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(T^b&(_^T))+I[2]+606105819&4294967295,E=b+(y<<17&4294967295|y>>>15),y=T+(_^E&(b^_))+I[3]+3250441966&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(b^T&(E^b))+I[4]+4118548399&4294967295,_=T+(y<<7&4294967295|y>>>25),y=b+(E^_&(T^E))+I[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(T^b&(_^T))+I[6]+2821735955&4294967295,E=b+(y<<17&4294967295|y>>>15),y=T+(_^E&(b^_))+I[7]+4249261313&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(b^T&(E^b))+I[8]+1770035416&4294967295,_=T+(y<<7&4294967295|y>>>25),y=b+(E^_&(T^E))+I[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(T^b&(_^T))+I[10]+4294925233&4294967295,E=b+(y<<17&4294967295|y>>>15),y=T+(_^E&(b^_))+I[11]+2304563134&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(b^T&(E^b))+I[12]+1804603682&4294967295,_=T+(y<<7&4294967295|y>>>25),y=b+(E^_&(T^E))+I[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(T^b&(_^T))+I[14]+2792965006&4294967295,E=b+(y<<17&4294967295|y>>>15),y=T+(_^E&(b^_))+I[15]+1236535329&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(E^b&(T^E))+I[1]+4129170786&4294967295,_=T+(y<<5&4294967295|y>>>27),y=b+(T^E&(_^T))+I[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(b^_))+I[11]+643717713&4294967295,E=b+(y<<14&4294967295|y>>>18),y=T+(b^_&(E^b))+I[0]+3921069994&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(E^b&(T^E))+I[5]+3593408605&4294967295,_=T+(y<<5&4294967295|y>>>27),y=b+(T^E&(_^T))+I[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(b^_))+I[15]+3634488961&4294967295,E=b+(y<<14&4294967295|y>>>18),y=T+(b^_&(E^b))+I[4]+3889429448&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(E^b&(T^E))+I[9]+568446438&4294967295,_=T+(y<<5&4294967295|y>>>27),y=b+(T^E&(_^T))+I[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(b^_))+I[3]+4107603335&4294967295,E=b+(y<<14&4294967295|y>>>18),y=T+(b^_&(E^b))+I[8]+1163531501&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(E^b&(T^E))+I[13]+2850285829&4294967295,_=T+(y<<5&4294967295|y>>>27),y=b+(T^E&(_^T))+I[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(b^_))+I[7]+1735328473&4294967295,E=b+(y<<14&4294967295|y>>>18),y=T+(b^_&(E^b))+I[12]+2368359562&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(T^E^b)+I[5]+4294588738&4294967295,_=T+(y<<4&4294967295|y>>>28),y=b+(_^T^E)+I[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^T)+I[11]+1839030562&4294967295,E=b+(y<<16&4294967295|y>>>16),y=T+(E^b^_)+I[14]+4259657740&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(T^E^b)+I[1]+2763975236&4294967295,_=T+(y<<4&4294967295|y>>>28),y=b+(_^T^E)+I[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^T)+I[7]+4139469664&4294967295,E=b+(y<<16&4294967295|y>>>16),y=T+(E^b^_)+I[10]+3200236656&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(T^E^b)+I[13]+681279174&4294967295,_=T+(y<<4&4294967295|y>>>28),y=b+(_^T^E)+I[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^T)+I[3]+3572445317&4294967295,E=b+(y<<16&4294967295|y>>>16),y=T+(E^b^_)+I[6]+76029189&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(T^E^b)+I[9]+3654602809&4294967295,_=T+(y<<4&4294967295|y>>>28),y=b+(_^T^E)+I[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^T)+I[15]+530742520&4294967295,E=b+(y<<16&4294967295|y>>>16),y=T+(E^b^_)+I[2]+3299628645&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(E^(T|~b))+I[0]+4096336452&4294967295,_=T+(y<<6&4294967295|y>>>26),y=b+(T^(_|~E))+I[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~T))+I[14]+2878612391&4294967295,E=b+(y<<15&4294967295|y>>>17),y=T+(b^(E|~_))+I[5]+4237533241&4294967295,T=E+(y<<21&4294967295|y>>>11),y=_+(E^(T|~b))+I[12]+1700485571&4294967295,_=T+(y<<6&4294967295|y>>>26),y=b+(T^(_|~E))+I[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~T))+I[10]+4293915773&4294967295,E=b+(y<<15&4294967295|y>>>17),y=T+(b^(E|~_))+I[1]+2240044497&4294967295,T=E+(y<<21&4294967295|y>>>11),y=_+(E^(T|~b))+I[8]+1873313359&4294967295,_=T+(y<<6&4294967295|y>>>26),y=b+(T^(_|~E))+I[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~T))+I[6]+2734768916&4294967295,E=b+(y<<15&4294967295|y>>>17),y=T+(b^(E|~_))+I[13]+1309151649&4294967295,T=E+(y<<21&4294967295|y>>>11),y=_+(E^(T|~b))+I[4]+4149444226&4294967295,_=T+(y<<6&4294967295|y>>>26),y=b+(T^(_|~E))+I[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~T))+I[2]+718787259&4294967295,E=b+(y<<15&4294967295|y>>>17),y=T+(b^(E|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const T=_-this.blockSize,I=this.C;let E=this.h,b=0;for(;b<_;){if(E==0)for(;b<=T;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<_;)if(I[E++]=w.charCodeAt(b++),E==this.blockSize){s(this,I),E=0;break}}else for(;b<_;)if(I[E++]=w[b++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,T=0;T<4;++T)for(let I=0;I<32;I+=8)w[_++]=this.g[T]>>>I&255;return w};function i(w,_){var T=c;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=_(w)}function a(w,_){this.h=_;const T=[];let I=!0;for(let E=w.length-1;E>=0;E--){const b=w[E]|0;I&&b==_||(T[E]=b,I=!1)}this.g=T}var c={};function l(w){return-128<=w&&w<128?i(w,function(_){return new a([_|0],_<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return k(h(-w));const _=[];let T=1;for(let I=0;w>=T;I++)_[I]=w/T|0,T*=4294967296;return new a(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return k(f(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(_,8));let I=p;for(let b=0;b<w.length;b+=8){var E=Math.min(8,w.length-b);const y=parseInt(w.substring(b,b+E),_);E<8?(E=h(Math.pow(_,E)),I=I.j(E).add(h(y))):(I=I.j(T),I=I.add(h(y)))}return I}var p=l(0),m=l(1),v=l(16777216);n=a.prototype,n.m=function(){if(V(this))return-k(this).m();let w=0,_=1;for(let T=0;T<this.g.length;T++){const I=this.i(T);w+=(I>=0?I:4294967296+I)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(V(this))return"-"+k(this).toString(w);const _=h(Math.pow(w,6));var T=this;let I="";for(;;){const E=st(T,_).g;T=F(T,E.j(_));let b=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=E,S(T))return b+I;for(;b.length<6;)b="0"+b;I=b+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=F(this,w),V(w)?-1:S(w)?0:1};function k(w){const _=w.g.length,T=[];for(let I=0;I<_;I++)T[I]=~w.g[I];return new a(T,~w.h).add(m)}n.abs=function(){return V(this)?k(this):this},n.add=function(w){const _=Math.max(this.g.length,w.g.length),T=[];let I=0;for(let E=0;E<=_;E++){let b=I+(this.i(E)&65535)+(w.i(E)&65535),y=(b>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);I=y>>>16,b&=65535,y&=65535,T[E]=y<<16|b}return new a(T,T[T.length-1]&-2147483648?-1:0)};function F(w,_){return w.add(k(_))}n.j=function(w){if(S(this)||S(w))return p;if(V(this))return V(w)?k(this).j(k(w)):k(k(this).j(w));if(V(w))return k(this.j(k(w)));if(this.l(v)<0&&w.l(v)<0)return h(this.m()*w.m());const _=this.g.length+w.g.length,T=[];for(var I=0;I<2*_;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<w.g.length;E++){const b=this.i(I)>>>16,y=this.i(I)&65535,xt=w.i(E)>>>16,tn=w.i(E)&65535;T[2*I+2*E]+=y*tn,j(T,2*I+2*E),T[2*I+2*E+1]+=b*tn,j(T,2*I+2*E+1),T[2*I+2*E+1]+=y*xt,j(T,2*I+2*E+1),T[2*I+2*E+2]+=b*xt,j(T,2*I+2*E+2)}for(w=0;w<_;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=_;w<2*_;w++)T[w]=0;return new a(T,0)};function j(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function q(w,_){this.g=w,this.h=_}function st(w,_){if(S(_))throw Error("division by zero");if(S(w))return new q(p,p);if(V(w))return _=st(k(w),_),new q(k(_.g),k(_.h));if(V(_))return _=st(w,k(_)),new q(k(_.g),_.h);if(w.g.length>30){if(V(w)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,I=_;I.l(w)<=0;)T=jt(T),I=jt(I);var E=ft(T,1),b=ft(I,1);for(I=ft(I,2),T=ft(T,2);!S(I);){var y=b.add(I);y.l(w)<=0&&(E=E.add(T),b=y),I=ft(I,1),T=ft(T,1)}return _=F(w,E.j(_)),new q(E,_)}for(E=p;w.l(_)>=0;){for(T=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),b=h(T),y=b.j(_);V(y)||y.l(w)>0;)T-=I,b=h(T),y=b.j(_);S(b)&&(b=m),E=E.add(b),w=F(w,y)}return new q(E,w)}n.B=function(w){return st(this,w).h},n.and=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<_;I++)T[I]=this.i(I)&w.i(I);return new a(T,this.h&w.h)},n.or=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<_;I++)T[I]=this.i(I)|w.i(I);return new a(T,this.h|w.h)},n.xor=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<_;I++)T[I]=this.i(I)^w.i(I);return new a(T,this.h^w.h)};function jt(w){const _=w.g.length+1,T=[];for(let I=0;I<_;I++)T[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(T,w.h)}function ft(w,_){const T=_>>5;_%=32;const I=w.g.length-T,E=[];for(let b=0;b<I;b++)E[b]=_>0?w.i(b+T)>>>_|w.i(b+T+1)<<32-_:w.i(b+T);return new a(E,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Hf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,$e=a}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});var Vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zf,Ir,Wf,Bs,Zo,Jf,Gf,Kf;(function(){var n,t=Object.defineProperty;function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vs=="object"&&Vs];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=e(this);function s(o,u){if(u)t:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var A=o[g];if(!(A in d))break t;d=d[A]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&t(d,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=l,h.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(g,A,C){for(var D=Array(arguments.length-2),H=2;H<arguments.length;H++)D[H-2]=arguments[H];return u.prototype[A].apply(g,D)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function v(o){const u=o.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function S(o,u){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const C=A.length||0;o.length=d+C;for(let D=0;D<C;D++)o[d+D]=A[D]}else o.push(A)}}class V{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function k(o){a.setTimeout(()=>{throw o},0)}function F(){var o=w;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class j{constructor(){this.h=this.g=null}add(u,d){const g=q.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var q=new V(()=>new st,o=>o.reset());class st{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let jt,ft=!1,w=new j,_=()=>{const o=Promise.resolve(void 0);jt=()=>{o.then(T)}};function T(){for(var o;o=F();){try{o.h.call(o.g)}catch(d){k(d)}var u=q;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ft=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o})();function y(o){return/^[\s\xa0]*$/.test(o)}function xt(o,u){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(xt,E),xt.prototype.init=function(o,u){const d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&xt.Z.h.call(this)},xt.prototype.h=function(){xt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var tn="closure_listenable_"+(Math.random()*1e6|0),bg=0;function Cg(o,u,d,g,A){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=A,this.key=++bg,this.da=this.fa=!1}function ps(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function gs(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function Sg(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function xc(o){const u={};for(const d in o)u[d]=o[d];return u}const Fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Uc(o,u){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)o[d]=g[d];for(let C=0;C<Fc.length;C++)d=Fc[C],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function ms(o){this.src=o,this.g={},this.h=0}ms.prototype.add=function(o,u,d,g,A){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const D=to(o,u,g,A);return D>-1?(u=o[D],d||(u.fa=!1)):(u=new Cg(u,this.src,C,!!g,A),u.fa=d,o.push(u)),u};function Zi(o,u){const d=u.type;if(d in o.g){var g=o.g[d],A=Array.prototype.indexOf.call(g,u,void 0),C;(C=A>=0)&&Array.prototype.splice.call(g,A,1),C&&(ps(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function to(o,u,d,g){for(let A=0;A<o.length;++A){const C=o[A];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==g)return A}return-1}var eo="closure_lm_"+(Math.random()*1e6|0),no={};function Bc(o,u,d,g,A){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Bc(o,u[C],d,g,A);return null}return d=qc(d),o&&o[tn]?o.J(u,d,c(g)?!!g.capture:!1,A):Rg(o,u,d,!1,g,A)}function Rg(o,u,d,g,A,C){if(!u)throw Error("Invalid event type");const D=c(A)?!!A.capture:!!A;let H=so(o);if(H||(o[eo]=H=new ms(o)),d=H.add(u,d,g,D,C),d.proxy)return d;if(g=Pg(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)b||(A=D),A===void 0&&(A=!1),o.addEventListener(u.toString(),g,A);else if(o.attachEvent)o.attachEvent($c(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Pg(){function o(d){return u.call(o.src,o.listener,d)}const u=kg;return o}function jc(o,u,d,g,A){if(Array.isArray(u))for(var C=0;C<u.length;C++)jc(o,u[C],d,g,A);else g=c(g)?!!g.capture:!!g,d=qc(d),o&&o[tn]?(o=o.i,C=String(u).toString(),C in o.g&&(u=o.g[C],d=to(u,d,g,A),d>-1&&(ps(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[C],o.h--)))):o&&(o=so(o))&&(u=o.g[u.toString()],o=-1,u&&(o=to(u,d,g,A)),(d=o>-1?u[o]:null)&&ro(d))}function ro(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[tn])Zi(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent($c(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=so(u))?(Zi(d,o),d.h==0&&(d.src=null,u[eo]=null)):ps(o)}}}function $c(o){return o in no?no[o]:no[o]="on"+o}function kg(o,u){if(o.da)o=!0;else{u=new xt(u,this);const d=o.listener,g=o.ha||o.src;o.fa&&ro(o),o=d.call(g,u)}return o}function so(o){return o=o[eo],o instanceof ms?o:null}var io="__closure_events_fn_"+(Math.random()*1e9>>>0);function qc(o){return typeof o=="function"?o:(o[io]||(o[io]=function(u){return o.handleEvent(u)}),o[io])}function Pt(){I.call(this),this.i=new ms(this),this.M=this,this.G=null}p(Pt,I),Pt.prototype[tn]=!0,Pt.prototype.removeEventListener=function(o,u,d,g){jc(this,o,u,d,g)};function Ot(o,u){var d,g=o.G;if(g)for(d=[];g;g=g.G)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new E(u,o);else if(u instanceof E)u.target=u.target||o;else{var A=u;u=new E(g,o),Uc(u,A)}A=!0;let C,D;if(d)for(D=d.length-1;D>=0;D--)C=u.g=d[D],A=_s(C,g,!0,u)&&A;if(C=u.g=o,A=_s(C,g,!0,u)&&A,A=_s(C,g,!1,u)&&A,d)for(D=0;D<d.length;D++)C=u.g=d[D],A=_s(C,g,!1,u)&&A}Pt.prototype.N=function(){if(Pt.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let g=0;g<d.length;g++)ps(d[g]);delete o.g[u],o.h--}}this.G=null},Pt.prototype.J=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},Pt.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function _s(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let C=0;C<u.length;++C){const D=u[C];if(D&&!D.da&&D.capture==d){const H=D.listener,pt=D.ha||D.src;D.fa&&Zi(o.i,D),A=H.call(pt,g)!==!1&&A}}return A&&!g.defaultPrevented}function Vg(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Hc(o){o.g=Vg(()=>{o.g=null,o.i&&(o.i=!1,Hc(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Dg extends I{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Hc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function or(o){I.call(this),this.h=o,this.g={}}p(or,I);var zc=[];function Wc(o){gs(o.g,function(u,d){this.g.hasOwnProperty(d)&&ro(u)},o),o.g={}}or.prototype.N=function(){or.Z.N.call(this),Wc(this)},or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oo=a.JSON.stringify,Ng=a.JSON.parse,Og=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Jc(){}function Gc(){}var ar={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ao(){E.call(this,"d")}p(ao,E);function co(){E.call(this,"c")}p(co,E);var en={},Kc=null;function ys(){return Kc=Kc||new Pt}en.Ia="serverreachability";function Qc(o){E.call(this,en.Ia,o)}p(Qc,E);function cr(o){const u=ys();Ot(u,new Qc(u))}en.STAT_EVENT="statevent";function Xc(o,u){E.call(this,en.STAT_EVENT,o),this.stat=u}p(Xc,E);function Mt(o){const u=ys();Ot(u,new Xc(u,o))}en.Ja="timingevent";function Yc(o,u){E.call(this,en.Ja,o),this.size=u}p(Yc,E);function ur(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function lr(){this.g=!0}lr.prototype.ua=function(){this.g=!1};function Mg(o,u,d,g,A,C){o.info(function(){if(o.g)if(C){var D="",H=C.split("&");for(let Y=0;Y<H.length;Y++){var pt=H[Y].split("=");if(pt.length>1){const Tt=pt[0];pt=pt[1];const oe=Tt.split("_");D=oe.length>=2&&oe[1]=="type"?D+(Tt+"="+pt+"&"):D+(Tt+"=redacted&")}}}else D=null;else D=C;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+u+`
`+d+`
`+D})}function Lg(o,u,d,g,A,C,D){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+u+`
`+d+`
`+C+" "+D})}function wn(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Fg(o,d)+(g?" "+g:"")})}function xg(o,u){o.info(function(){return"TIMEOUT: "+u})}lr.prototype.info=function(){};function Fg(o,u){if(!o.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var d=C[o];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let D=1;D<g.length;D++)g[D]=""}}}}return oo(C)}catch{return u}}var Ts={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tu;function uo(){}p(uo,Jc),uo.prototype.g=function(){return new XMLHttpRequest},tu=new uo;function hr(o){return encodeURIComponent(String(o))}function Ug(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Se(o,u,d,g){this.j=o,this.i=u,this.l=d,this.S=g||1,this.V=new or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new eu}function eu(){this.i=null,this.g="",this.h=!1}var nu={},lo={};function ho(o,u,d){o.M=1,o.A=ws(ie(u)),o.u=d,o.R=!0,ru(o,null)}function ru(o,u){o.F=Date.now(),Es(o),o.B=ie(o.A);var d=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),mu(d.i,"t",g),o.C=0,d=o.j.L,o.h=new eu,o.g=Ou(o.j,d?u:null,!o.u),o.P>0&&(o.O=new Dg(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,g=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(zc[0]=A.toString()),A=zc);for(let C=0;C<A.length;C++){const D=Bc(d,A[C],g||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=o.J?xc(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),cr(),Mg(o.i,o.v,o.B,o.l,o.S,o.u)}Se.prototype.ba=function(o){o=o.target;const u=this.O;u&&ke(o)==3?u.j():this.Y(o)},Se.prototype.Y=function(o){try{if(o==this.g)t:{const H=ke(this.g),pt=this.g.ya(),Y=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||vu(this.g)))){this.K||H!=4||pt==7||(pt==8||Y<=0?cr(3):cr(2)),fo(this);var u=this.g.ca();this.X=u;var d=Bg(this);if(this.o=u==200,Lg(this.i,this.v,this.B,this.l,this.S,H,u),this.o){if(this.U&&!this.L){e:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var C=g;break e}}C=null}if(o=C)wn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,po(this,o);else{this.o=!1,this.m=3,Mt(12),nn(this),dr(this);break t}}if(this.R){o=!0;let Tt;for(;!this.K&&this.C<d.length;)if(Tt=jg(this,d),Tt==lo){H==4&&(this.m=4,Mt(14),o=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==nu){this.m=4,Mt(15),wn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else wn(this.i,this.l,Tt,null),po(this,Tt);if(su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||d.length!=0||this.h.h||(this.m=1,Mt(16),o=!1),this.o=this.o&&o,!o)wn(this.i,this.l,d,"[Invalid Chunked Response]"),nn(this),dr(this);else if(d.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Io(D),D.P=!0,Mt(11))}}else wn(this.i,this.l,d,null),po(this,d);H==4&&nn(this),this.o&&!this.K&&(H==4?ku(this.j,this):(this.o=!1,Es(this)))}else em(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Mt(12)):(this.m=0,Mt(13)),nn(this),dr(this)}}}catch{}finally{}};function Bg(o){if(!su(o))return o.g.la();const u=vu(o.g);if(u==="")return"";let d="";const g=u.length,A=ke(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return nn(o),dr(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<g;C++)o.h.h=!0,d+=o.h.i.decode(u[C],{stream:!(A&&C==g-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function su(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function jg(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?lo:(d=Number(u.substring(d,g)),isNaN(d)?nu:(g+=1,g+d>u.length?lo:(u=u.slice(g,g+d),o.C=g+d,u)))}Se.prototype.cancel=function(){this.K=!0,nn(this)};function Es(o){o.T=Date.now()+o.H,iu(o,o.H)}function iu(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ur(h(o.aa,o),u)}function fo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Se.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(xg(this.i,this.B),this.M!=2&&(cr(),Mt(17)),nn(this),this.m=2,dr(this)):iu(this,this.T-o)};function dr(o){o.j.I==0||o.K||ku(o.j,o)}function nn(o){fo(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Wc(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function po(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||go(d.h,o))){if(!o.L&&go(d.h,o)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){t:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Cs(d),As(d);else break t;wo(d),Mt(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ur(h(d.Va,d),6e3));cu(d.h)<=1&&d.ta&&(d.ta=void 0)}else sn(d,11)}else if((o.L||d.g==o)&&Cs(d),!y(u))for(A=d.Ba.g.parse(u),u=0;u<A.length;u++){let Y=A[u];const Tt=Y[0];if(!(Tt<=d.K))if(d.K=Tt,Y=Y[1],d.I==2)if(Y[0]=="c"){d.M=Y[1],d.ba=Y[2];const oe=Y[3];oe!=null&&(d.ka=oe,d.j.info("VER="+d.ka));const on=Y[4];on!=null&&(d.za=on,d.j.info("SVER="+d.za));const Ve=Y[5];Ve!=null&&typeof Ve=="number"&&Ve>0&&(g=1.5*Ve,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const De=o.g;if(De){const Rs=De.g?De.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rs){var C=g.h;C.g||Rs.indexOf("spdy")==-1&&Rs.indexOf("quic")==-1&&Rs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(mo(C,C.h),C.h=null))}if(g.G){const vo=De.g?De.g.getResponseHeader("X-HTTP-Session-Id"):null;vo&&(g.wa=vo,et(g.J,g.G,vo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var D=o;if(g.na=Nu(g,g.L?g.ba:null,g.W),D.L){uu(g.h,D);var H=D,pt=g.O;pt&&(H.H=pt),H.D&&(fo(H),Es(H)),g.g=D}else Ru(g);d.i.length>0&&bs(d)}else Y[0]!="stop"&&Y[0]!="close"||sn(d,7);else d.I==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?sn(d,7):Eo(d):Y[0]!="noop"&&d.l&&d.l.qa(Y),d.A=0)}}cr(4)}catch{}}var $g=class{constructor(o,u){this.g=o,this.map=u}};function ou(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function au(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function cu(o){return o.h?1:o.g?o.g.size:0}function go(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function mo(o,u){o.g?o.g.add(u):o.h=u}function uu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ou.prototype.cancel=function(){if(this.i=lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function lu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return v(o.i)}var hu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qg(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const g=o[d].indexOf("=");let A,C=null;g>=0?(A=o[d].substring(0,g),C=o[d].substring(g+1)):A=o[d],u(A,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Re(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Re?(this.l=o.l,fr(this,o.j),this.o=o.o,this.g=o.g,pr(this,o.u),this.h=o.h,_o(this,_u(o.i)),this.m=o.m):o&&(u=String(o).match(hu))?(this.l=!1,fr(this,u[1]||"",!0),this.o=gr(u[2]||""),this.g=gr(u[3]||"",!0),pr(this,u[4]),this.h=gr(u[5]||"",!0),_o(this,u[6]||"",!0),this.m=gr(u[7]||"")):(this.l=!1,this.i=new _r(null,this.l))}Re.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(mr(u,du,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(mr(u,du,!0),"@"),o.push(hr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(mr(d,d.charAt(0)=="/"?Wg:zg,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",mr(d,Gg)),o.join("")},Re.prototype.resolve=function(o){const u=ie(this);let d=!!o.j;d?fr(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var g=o.h;if(d)pr(u,o.u);else if(d=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=u.h.lastIndexOf("/");A!=-1&&(g=u.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const C=[];for(let D=0;D<A.length;){const H=A[D++];H=="."?g&&D==A.length&&C.push(""):H==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&D==A.length&&C.push("")):(C.push(H),g=!0)}g=C.join("/")}else g=A}return d?u.h=g:d=o.i.toString()!=="",d?_o(u,_u(o.i)):d=!!o.m,d&&(u.m=o.m),u};function ie(o){return new Re(o)}function fr(o,u,d){o.j=d?gr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function pr(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function _o(o,u,d){u instanceof _r?(o.i=u,Kg(o.i,o.l)):(d||(u=mr(u,Jg)),o.i=new _r(u,o.l))}function et(o,u,d){o.i.set(u,d)}function ws(o){return et(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function gr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function mr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Hg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Hg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var du=/[#\/\?@]/g,zg=/[#\?:]/g,Wg=/[#\?]/g,Jg=/[#\?@]/g,Gg=/#/g;function _r(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function rn(o){o.g||(o.g=new Map,o.h=0,o.i&&qg(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=_r.prototype,n.add=function(o,u){rn(this),this.i=null,o=In(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function fu(o,u){rn(o),u=In(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function pu(o,u){return rn(o),u=In(o,u),o.g.has(u)}n.forEach=function(o,u){rn(this),this.g.forEach(function(d,g){d.forEach(function(A){o.call(u,A,g,this)},this)},this)};function gu(o,u){rn(o);let d=[];if(typeof u=="string")pu(o,u)&&(d=d.concat(o.g.get(In(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return rn(this),this.i=null,o=In(this,o),pu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=gu(this,o),o.length>0?String(o[0]):u):u};function mu(o,u,d){fu(o,u),d.length>0&&(o.i=null,o.g.set(In(o,u),v(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const A=hr(d);d=gu(this,d);for(let C=0;C<d.length;C++){let D=A;d[C]!==""&&(D+="="+hr(d[C])),o.push(D)}}return this.i=o.join("&")};function _u(o){const u=new _r;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function In(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Kg(o,u){u&&!o.j&&(rn(o),o.i=null,o.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(fu(this,g),mu(this,A,d))},o)),o.j=u}function Qg(o,u){const d=new lr;if(a.Image){const g=new Image;g.onload=f(Pe,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f(Pe,d,"TestLoadImage: error",!1,u,g),g.onabort=f(Pe,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f(Pe,d,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Xg(o,u){const d=new lr,g=new AbortController,A=setTimeout(()=>{g.abort(),Pe(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(A),C.ok?Pe(d,"TestPingServer: ok",!0,u):Pe(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Pe(d,"TestPingServer: error",!1,u)})}function Pe(o,u,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function Yg(){this.g=new Og}function yo(o){this.i=o.Sb||null,this.h=o.ab||!1}p(yo,Jc),yo.prototype.g=function(){return new Is(this.i,this.h)};function Is(o,u){Pt.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Is,Pt),n=Is.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Tr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function yu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?yr(this):Tr(this),this.readyState==3&&yu(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,yr(this))},n.Na=function(o){this.g&&(this.response=o,yr(this))},n.ga=function(){this.g&&yr(this)};function yr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Tr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Tr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Tu(o){let u="";return gs(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function To(o,u,d){t:{for(g in d){var g=!1;break t}g=!0}g||(d=Tu(d),typeof o=="string"?d!=null&&hr(d):et(o,u,d))}function at(o){Pt.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(at,Pt);var Zg=/^https?$/i,tm=["POST","PUT"];n=at.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tu.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Eu(this,C);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())d.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(tm,u,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,D]of d)this.g.setRequestHeader(C,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){Eu(this,C)}};function Eu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,wu(o),vs(o)}function wu(o){o.A||(o.A=!0,Ot(o,"complete"),Ot(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ot(this,"complete"),Ot(this,"abort"),vs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vs(this,!0)),at.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Iu(this):this.Xa())},n.Xa=function(){Iu(this)};function Iu(o){if(o.h&&typeof i<"u"){if(o.v&&ke(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ot(o,"readystatechange"),ke(o)==4){o.h=!1;try{const C=o.ca();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var d;if(!(d=u)){var g;if(g=C===0){let D=String(o.D).match(hu)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),g=!Zg.test(D?D.toLowerCase():"")}d=g}if(d)Ot(o,"complete"),Ot(o,"success");else{o.o=6;try{var A=ke(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",wu(o)}}finally{vs(o)}}}}function vs(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||Ot(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ke(o){return o.g?o.g.readyState:0}n.ca=function(){try{return ke(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Ng(u)}};function vu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function em(o){const u={};o=(o.g&&ke(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(y(o[g]))continue;var d=Ug(o[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[A]||[];u[A]=C,C.push(d)}Sg(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Au(o){this.za=0,this.i=[],this.j=new lr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Er("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Er("baseRetryDelayMs",5e3,o),this.Za=Er("retryDelaySeedMs",1e4,o),this.Ta=Er("forwardChannelMaxRetries",2,o),this.va=Er("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ou(o&&o.concurrentRequestLimit),this.Ba=new Yg,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Au.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,g){Mt(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Nu(this,null,this.W),bs(this)};function Eo(o){if(bu(o),o.I==3){var u=o.V++,d=ie(o.J);if(et(d,"SID",o.M),et(d,"RID",u),et(d,"TYPE","terminate"),wr(o,d),u=new Se(o,o.j,u),u.M=2,u.A=ws(ie(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=Ou(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Es(u)}Du(o)}function As(o){o.g&&(Io(o),o.g.cancel(),o.g=null)}function bu(o){As(o),o.v&&(a.clearTimeout(o.v),o.v=null),Cs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function bs(o){if(!au(o.h)&&!o.m){o.m=!0;var u=o.Ea;jt||_(),ft||(jt(),ft=!0),w.add(u,o),o.D=0}}function nm(o,u){return cu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ur(h(o.Ea,o,u),Vu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Se(this,this.j,o);let C=this.o;if(this.U&&(C?(C=xc(C),Uc(C,this.U)):C=this.U),this.u!==null||this.R||(A.J=C,C=null),this.S)t:{for(var u=0,d=0;d<this.i.length;d++){e:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break t}if(u===4096||d===this.i.length-1){u=d+1;break t}}u=1e3}else u=1e3;u=Su(this,A,u),d=ie(this.J),et(d,"RID",o),et(d,"CVER",22),this.G&&et(d,"X-HTTP-Session-Id",this.G),wr(this,d),C&&(this.R?u="headers="+hr(Tu(C))+"&"+u:this.u&&To(d,this.u,C)),mo(this.h,A),this.Ra&&et(d,"TYPE","init"),this.S?(et(d,"$req",u),et(d,"SID","null"),A.U=!0,ho(A,d,null)):ho(A,d,u),this.I=2}}else this.I==3&&(o?Cu(this,o):this.i.length==0||au(this.h)||Cu(this))};function Cu(o,u){var d;u?d=u.l:d=o.V++;const g=ie(o.J);et(g,"SID",o.M),et(g,"RID",d),et(g,"AID",o.K),wr(o,g),o.u&&o.o&&To(g,o.u,o.o),d=new Se(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Su(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),mo(o.h,d),ho(d,g,u)}function wr(o,u){o.H&&gs(o.H,function(d,g){et(u,g,d)}),o.l&&gs({},function(d,g){et(u,g,d)})}function Su(o,u,d){d=Math.min(o.i.length,d);const g=o.l?h(o.l.Ka,o.l,o):null;t:{var A=o.i;let H=-1;for(;;){const pt=["count="+d];H==-1?d>0?(H=A[0].g,pt.push("ofs="+H)):H=0:pt.push("ofs="+H);let Y=!0;for(let Tt=0;Tt<d;Tt++){var C=A[Tt].g;const oe=A[Tt].map;if(C-=H,C<0)H=Math.max(0,A[Tt].g-100),Y=!1;else try{C="req"+C+"_"||"";try{var D=oe instanceof Map?oe:Object.entries(oe);for(const[on,Ve]of D){let De=Ve;c(Ve)&&(De=oo(Ve)),pt.push(C+on+"="+encodeURIComponent(De))}}catch(on){throw pt.push(C+"type="+encodeURIComponent("_badmap")),on}}catch{g&&g(oe)}}if(Y){D=pt.join("&");break t}}D=void 0}return o=o.i.splice(0,d),u.G=o,D}function Ru(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;jt||_(),ft||(jt(),ft=!0),w.add(u,o),o.A=0}}function wo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ur(h(o.Da,o),Vu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Pu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ur(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Mt(10),As(this),Pu(this))};function Io(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Pu(o){o.g=new Se(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=ie(o.na);et(u,"RID","rpc"),et(u,"SID",o.M),et(u,"AID",o.K),et(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&et(u,"TO",o.ia),et(u,"TYPE","xmlhttp"),wr(o,u),o.u&&o.o&&To(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=ws(ie(u)),d.u=null,d.R=!0,ru(d,o)}n.Va=function(){this.C!=null&&(this.C=null,As(this),wo(this),Mt(19))};function Cs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function ku(o,u){var d=null;if(o.g==u){Cs(o),Io(o),o.g=null;var g=2}else if(go(o.h,u))d=u.G,uu(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var A=o.D;g=ys(),Ot(g,new Yc(g,d)),bs(o)}else Ru(o);else if(A=u.m,A==3||A==0&&u.X>0||!(g==1&&nm(o,u)||g==2&&wo(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),A){case 1:sn(o,5);break;case 4:sn(o,10);break;case 3:sn(o,6);break;default:sn(o,2)}}}function Vu(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function sn(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),g=o.Ua;const A=!g;g=new Re(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fr(g,"https"),ws(g),A?Qg(g.toString(),d):Xg(g.toString(),d)}else Mt(2);o.I=0,o.l&&o.l.pa(u),Du(o),bu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function Du(o){if(o.I=0,o.ja=[],o.l){const u=lu(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ja,u),S(o.ja,o.i),o.h.i.length=0,v(o.i),o.i.length=0),o.l.oa()}}function Nu(o,u,d){var g=d instanceof Re?ie(d):new Re(d);if(g.g!="")u&&(g.g=u+"."+g.g),pr(g,g.u);else{var A=a.location;g=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const C=new Re(null);g&&fr(C,g),u&&(C.g=u),A&&pr(C,A),d&&(C.h=d),g=C}return d=o.G,u=o.wa,d&&u&&et(g,d,u),et(g,"VER",o.ka),wr(o,g),g}function Ou(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new at(new yo({ab:d})):new at(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}n=Mu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ss(){}Ss.prototype.g=function(o,u){return new $t(o,u)};function $t(o,u){Pt.call(this),this.g=new Au(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!y(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new vn(this)}p($t,Pt),$t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Eo(this.g)},$t.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=oo(o),o=d);u.i.push(new $g(u.Ya++,o)),u.I==3&&bs(u)},$t.prototype.N=function(){this.g.l=null,delete this.j,Eo(this.g),delete this.g,$t.Z.N.call(this)};function Lu(o){ao.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const d in u){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Lu,ao);function xu(){co.call(this),this.status=1}p(xu,co);function vn(o){this.g=o}p(vn,Mu),vn.prototype.ra=function(){Ot(this.g,"a")},vn.prototype.qa=function(o){Ot(this.g,new Lu(o))},vn.prototype.pa=function(o){Ot(this.g,new xu)},vn.prototype.oa=function(){Ot(this.g,"b")},Ss.prototype.createWebChannel=Ss.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Kf=function(){return new Ss},Gf=function(){return ys()},Jf=en,Zo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Bs=Ts,Zc.COMPLETE="complete",Wf=Zc,Gc.EventType=ar,ar.OPEN="a",ar.CLOSE="b",ar.ERROR="c",ar.MESSAGE="d",Pt.prototype.listen=Pt.prototype.J,Ir=Gc,at.prototype.listenOnce=at.prototype.K,at.prototype.getLastError=at.prototype.Ha,at.prototype.getLastErrorCode=at.prototype.ya,at.prototype.getStatus=at.prototype.ca,at.prototype.getResponseJson=at.prototype.La,at.prototype.getResponseText=at.prototype.la,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Fa,zf=at}).apply(typeof Vs<"u"?Vs:typeof self<"u"?self:typeof window<"u"?window:{});const kl="@firebase/firestore",Vl="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Ua("@firebase/firestore");function An(){return pn.logLevel}function N(n,...t){if(pn.logLevel<=z.DEBUG){const e=t.map(Za);pn.debug(`Firestore (${nr}): ${n}`,...e)}}function Ae(n,...t){if(pn.logLevel<=z.ERROR){const e=t.map(Za);pn.error(`Firestore (${nr}): ${n}`,...e)}}function Bn(n,...t){if(pn.logLevel<=z.WARN){const e=t.map(Za);pn.warn(`Firestore (${nr}): ${n}`,...e)}}function Za(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Qf(n,r,e)}function Qf(n,t,e){let r=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ae(r),new Error(r)}function Q(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Qf(t,s,r)}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Ce{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Vt.UNAUTHENTICATED)))}shutdown(){}}class iA{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class oA{constructor(t){this.t=t,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let i=new Te;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Te,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;t.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Te)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new Xf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string",2055,{h:t}),new Vt(t)}}class aA{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cA{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new aA(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Dl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uA{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Q(this.o===void 0,3512);const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>r(i)))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Dl(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Q(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Dl(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=lA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function W(n,t){return n<t?-1:n>t?1:0}function ta(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return Mo(s)===Mo(i)?W(s,i):Mo(s)?1:-1}return W(n.length,t.length)}const hA=55296,dA=57343;function Mo(n){const t=n.charCodeAt(0);return t>=hA&&t<=dA}function jn(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="__name__";class ae{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ae.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ae?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=ae.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return W(t.length,e.length)}static compareSegments(t,e){const r=ae.isNumericId(t),s=ae.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?ae.extractNumericId(t).compare(ae.extractNumericId(e)):ta(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return $e.fromString(t.substring(4,t.length-2))}}class nt extends ae{construct(t,e,r){return new nt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new nt(e)}static emptyPath(){return new nt([])}}const fA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends ae{construct(t,e,r){return new Ct(t,e,r)}static isValidIdentifier(t){return fA.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nl}static keyField(){return new Ct([Nl])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ct(e)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(nt.fromString(t))}static fromName(t){return new x(nt.fromString(t).popFirst(5))}static empty(){return new x(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new nt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(n,t,e){if(!e)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function gA(n,t,e,r){if(t===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ol(n){if(!x.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ec(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function Ee(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ec(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,t){const e={typeString:n};return t&&(e.value=t),e}function os(n,t){if(!Yf(n))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new O(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=-62135596800,Ll=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ll);return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ml)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ll}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(os(t,rt._jsonSchema))return new rt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ml;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:ht("string",rt._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new rt(0,0))}static max(){return new U(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=-1;function mA(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new We(s,x.empty(),t)}function _A(n){return new We(n.readTime,n.key,Ur)}class We{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new We(U.min(),x.empty(),Ur)}static max(){return new We(U.max(),x.empty(),Ur)}}function yA(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:W(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==TA)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,r)=>{e(t)}))}static reject(t){return new R(((e,r)=>{r(t)}))}static waitFor(t){return new R(((e,r)=>{let s=0,i=0,a=!1;t.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&e()}),(l=>r(l)))})),a=!0,i===s&&e()}))}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next((s=>s?R.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,i)=>{r.push(e.call(this,s,i))})),this.waitFor(r)}static mapArray(t,e){return new R(((r,s)=>{const i=t.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;e(t[h]).next((f=>{a[h]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(t,e){return new R(((r,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):r()};i()}))}}function wA(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function sr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ni.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=-1;function as(n){return n==null}function ci(n){return n===0&&1/n==-1/0}function IA(n){return typeof n=="number"&&Number.isInteger(n)&&!ci(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="";function vA(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=xl(t)),t=AA(n.get(e),t);return xl(t)}function AA(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":e+="";break;case Zf:e+="";break;default:e+=i}}return e}function xl(n){return n+Zf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ye(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function tp(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){this.comparator=t,this.root=e||bt.EMPTY}insert(t,e){return new ot(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(t){return new ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ds(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ds(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ds(this.root,t,this.comparator,!0)}}class Ds{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class bt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??bt.RED,this.left=s??bt.EMPTY,this.right=i??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new bt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.comparator=t,this.data=new ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ul(this.data.getIterator())}getIteratorFrom(t){return new Ul(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof yt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new yt(this.comparator);return e.data=t,e}}class Ul{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.fields=t,t.sort(Ct.comparator)}static empty(){return new zt([])}unionWith(t){let e=new yt(Ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new zt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return jn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ep("Invalid base64 string: "+i):i}})(t);return new St(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new St(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}St.EMPTY_BYTE_STRING=new St("");const bA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Je(n){if(Q(!!n,39018),typeof n=="string"){let t=0;const e=bA.exec(n);if(Q(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ge(n){return typeof n=="string"?St.fromBase64String(n):St.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="server_timestamp",rp="__type__",sp="__previous_value__",ip="__local_write_time__";function rc(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[rp])==null?void 0:r.stringValue)===np}function Oi(n){const t=n.mapValue.fields[sp];return rc(t)?Oi(t):t}function Br(n){const t=Je(n.mapValue.fields[ip].timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(t,e,r,s,i,a,c,l,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const ui="(default)";class jr{constructor(t,e){this.projectId=t,this.database=e||ui}static empty(){return new jr("","")}get isDefaultDatabase(){return this.database===ui}isEqual(t){return t instanceof jr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="__type__",SA="__max__",Ns={mapValue:{}},ap="__vector__",li="value";function Ke(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rc(n)?4:PA(n)?9007199254740991:RA(n)?10:11:L(28295,{value:n})}function pe(n,t){if(n===t)return!0;const e=Ke(n);if(e!==Ke(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Br(n).isEqual(Br(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Je(s.timestampValue),c=Je(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,i){return Ge(s.bytesValue).isEqual(Ge(i.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,i){return ct(s.geoPointValue.latitude)===ct(i.geoPointValue.latitude)&&ct(s.geoPointValue.longitude)===ct(i.geoPointValue.longitude)})(n,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ct(s.integerValue)===ct(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ct(s.doubleValue),c=ct(i.doubleValue);return a===c?ci(a)===ci(c):isNaN(a)&&isNaN(c)}return!1})(n,t);case 9:return jn(n.arrayValue.values||[],t.arrayValue.values||[],pe);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Fl(a)!==Fl(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!pe(a[l],c[l])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function $r(n,t){return(n.values||[]).find((e=>pe(e,t)))!==void 0}function $n(n,t){if(n===t)return 0;const e=Ke(n),r=Ke(t);if(e!==r)return W(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,t.booleanValue);case 2:return(function(i,a){const c=ct(i.integerValue||i.doubleValue),l=ct(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,t);case 3:return Bl(n.timestampValue,t.timestampValue);case 4:return Bl(Br(n),Br(t));case 5:return ta(n.stringValue,t.stringValue);case 6:return(function(i,a){const c=Ge(i),l=Ge(a);return c.compareTo(l)})(n.bytesValue,t.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=W(c[h],l[h]);if(f!==0)return f}return W(c.length,l.length)})(n.referenceValue,t.referenceValue);case 8:return(function(i,a){const c=W(ct(i.latitude),ct(a.latitude));return c!==0?c:W(ct(i.longitude),ct(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return jl(n.arrayValue,t.arrayValue);case 10:return(function(i,a){var m,v,S,V;const c=i.fields||{},l=a.fields||{},h=(m=c[li])==null?void 0:m.arrayValue,f=(v=l[li])==null?void 0:v.arrayValue,p=W(((S=h==null?void 0:h.values)==null?void 0:S.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:jl(h,f)})(n.mapValue,t.mapValue);case 11:return(function(i,a){if(i===Ns.mapValue&&a===Ns.mapValue)return 0;if(i===Ns.mapValue)return 1;if(a===Ns.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=ta(l[p],f[p]);if(m!==0)return m;const v=$n(c[l[p]],h[f[p]]);if(v!==0)return v}return W(l.length,f.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function Bl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return W(n,t);const e=Je(n),r=Je(t),s=W(e.seconds,r.seconds);return s!==0?s:W(e.nanos,r.nanos)}function jl(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=$n(e[s],r[s]);if(i)return i}return W(e.length,r.length)}function qn(n){return ea(n)}function ea(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Je(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Ge(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return x.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=ea(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ea(e.fields[a])}`;return s+"}"})(n.mapValue):L(61005,{value:n})}function js(n){switch(Ke(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Oi(n);return t?16+js(t):16;case 5:return 2*n.stringValue.length;case 6:return Ge(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+js(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ye(r.fields,((i,a)=>{s+=i.length+js(a)})),s})(n.mapValue);default:throw L(13486,{value:n})}}function na(n){return!!n&&"integerValue"in n}function sc(n){return!!n&&"arrayValue"in n}function $l(n){return!!n&&"nullValue"in n}function ql(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $s(n){return!!n&&"mapValue"in n}function RA(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[op])==null?void 0:r.stringValue)===ap}function Pr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Ye(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Pr(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Pr(n.arrayValue.values[e]);return t}return{...n}}function PA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===SA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.value=t}static empty(){return new Lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!$s(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pr(e)}setAll(t){let e=Ct.emptyPath(),r={},s=[];t.forEach(((a,c)=>{if(!e.isImmediateParentOf(c)){const l=this.getFieldsMap(e);this.applyChanges(l,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=Pr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());$s(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return pe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];$s(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ye(e,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new Lt(Pr(this.value))}}function cp(n){const t=[];return Ye(n.fields,((e,r)=>{const s=new Ct([e]);if($s(r)){const i=cp(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new zt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e,r,s,i,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new wt(t,0,U.min(),U.min(),U.min(),Lt.empty(),0)}static newFoundDocument(t,e,r,s){return new wt(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new wt(t,2,e,U.min(),U.min(),Lt.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,U.min(),U.min(),Lt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e){this.position=t,this.inclusive=e}}function Hl(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],a=n.position[s];if(i.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=$n(a,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!pe(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e="asc"){this.field=t,this.dir=e}}function kA(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{}class mt extends up{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new DA(t,e,r):e==="array-contains"?new MA(t,r):e==="in"?new LA(t,r):e==="not-in"?new xA(t,r):e==="array-contains-any"?new FA(t,r):new mt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new NA(t,r):new OA(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison($n(e,this.value)):e!==null&&Ke(this.value)===Ke(e)&&this.matchesComparison($n(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ge extends up{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new ge(t,e)}matches(t){return lp(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lp(n){return n.op==="and"}function hp(n){return VA(n)&&lp(n)}function VA(n){for(const t of n.filters)if(t instanceof ge)return!1;return!0}function ra(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+qn(n.value);if(hp(n))return n.filters.map((t=>ra(t))).join(",");{const t=n.filters.map((e=>ra(e))).join(",");return`${n.op}(${t})`}}function dp(n,t){return n instanceof mt?(function(r,s){return s instanceof mt&&r.op===s.op&&r.field.isEqual(s.field)&&pe(r.value,s.value)})(n,t):n instanceof ge?(function(r,s){return s instanceof ge&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&dp(a,s.filters[c])),!0):!1})(n,t):void L(19439)}function fp(n){return n instanceof mt?(function(e){return`${e.field.canonicalString()} ${e.op} ${qn(e.value)}`})(n):n instanceof ge?(function(e){return e.op.toString()+" {"+e.getFilters().map(fp).join(" ,")+"}"})(n):"Filter"}class DA extends mt{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class NA extends mt{constructor(t,e){super(t,"in",e),this.keys=pp("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class OA extends mt{constructor(t,e){super(t,"not-in",e),this.keys=pp("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function pp(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>x.fromName(r.referenceValue)))}class MA extends mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return sc(e)&&$r(e.arrayValue,this.value)}}class LA extends mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&$r(this.value.arrayValue,e)}}class xA extends mt{constructor(t,e){super(t,"not-in",e)}matches(t){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!$r(this.value.arrayValue,e)}}class FA extends mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!sc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>$r(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(t,e=null,r=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Wl(n,t=null,e=[],r=[],s=null,i=null,a=null){return new UA(n,t,e,r,s,i,a)}function ic(n){const t=$(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>ra(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),as(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>qn(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>qn(r))).join(",")),t.Te=e}return t.Te}function oc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!kA(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!dp(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!zl(n.startAt,t.startAt)&&zl(n.endAt,t.endAt)}function sa(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function BA(n,t,e,r,s,i,a,c){return new Mi(n,t,e,r,s,i,a,c)}function Li(n){return new Mi(n)}function Jl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jA(n){return n.collectionGroup!==null}function kr(n){const t=$(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new yt(Ct.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new di(i,r))})),e.has(Ct.keyField().canonicalString())||t.Ie.push(new di(Ct.keyField(),r))}return t.Ie}function ue(n){const t=$(n);return t.Ee||(t.Ee=$A(t,kr(n))),t.Ee}function $A(n,t){if(n.limitType==="F")return Wl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new di(s.field,i)}));const e=n.endAt?new hi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hi(n.startAt.position,n.startAt.inclusive):null;return Wl(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ia(n,t,e){return new Mi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function xi(n,t){return oc(ue(n),ue(t))&&n.limitType===t.limitType}function gp(n){return`${ic(ue(n))}|lt:${n.limitType}`}function bn(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>fp(s))).join(", ")}]`),as(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>qn(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>qn(s))).join(",")),`Target(${r})`})(ue(n))}; limitType=${n.limitType})`}function Fi(n,t){return t.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):x.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,t)&&(function(r,s){for(const i of kr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=Hl(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,kr(r),s)||r.endAt&&!(function(a,c,l){const h=Hl(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,kr(r),s))})(n,t)}function qA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mp(n){return(t,e)=>{let r=!1;for(const s of kr(n)){const i=HA(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HA(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?$n(l,h):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ye(this.inner,((e,r)=>{for(const[s,i]of r)t(s,i)}))}isEmpty(){return tp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new ot(x.comparator);function be(){return zA}const _p=new ot(x.comparator);function vr(...n){let t=_p;for(const e of n)t=t.insert(e.key,e);return t}function yp(n){let t=_p;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function un(){return Vr()}function Tp(){return Vr()}function Vr(){return new Tn((n=>n.toString()),((n,t)=>n.isEqual(t)))}const WA=new ot(x.comparator),JA=new yt(x.comparator);function G(...n){let t=JA;for(const e of n)t=t.add(e);return t}const GA=new yt(W);function KA(){return GA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ci(t)?"-0":t}}function Ep(n){return{integerValue:""+n}}function QA(n,t){return IA(t)?Ep(t):ac(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this._=void 0}}function XA(n,t,e){return n instanceof qr?(function(s,i){const a={fields:{[rp]:{stringValue:np},[ip]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rc(i)&&(i=Oi(i)),i&&(a.fields[sp]=i),{mapValue:a}})(e,t):n instanceof Hr?Ip(n,t):n instanceof zr?vp(n,t):(function(s,i){const a=wp(s,i),c=Gl(a)+Gl(s.Ae);return na(a)&&na(s.Ae)?Ep(c):ac(s.serializer,c)})(n,t)}function YA(n,t,e){return n instanceof Hr?Ip(n,t):n instanceof zr?vp(n,t):e}function wp(n,t){return n instanceof fi?(function(r){return na(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(t)?t:{integerValue:0}:null}class qr extends Ui{}class Hr extends Ui{constructor(t){super(),this.elements=t}}function Ip(n,t){const e=Ap(t);for(const r of n.elements)e.some((s=>pe(s,r)))||e.push(r);return{arrayValue:{values:e}}}class zr extends Ui{constructor(t){super(),this.elements=t}}function vp(n,t){let e=Ap(t);for(const r of n.elements)e=e.filter((s=>!pe(s,r)));return{arrayValue:{values:e}}}class fi extends Ui{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Gl(n){return ct(n.integerValue||n.doubleValue)}function Ap(n){return sc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(t,e){this.field=t,this.transform=e}}function tb(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof Hr&&s instanceof Hr||r instanceof zr&&s instanceof zr?jn(r.elements,s.elements,pe):r instanceof fi&&s instanceof fi?pe(r.Ae,s.Ae):r instanceof qr&&s instanceof qr})(n.transform,t.transform)}class eb{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qs(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Bi{}function bp(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new cc(n.key,Ut.none()):new cs(n.key,n.data,Ut.none());{const e=n.data,r=Lt.empty();let s=new yt(Ct.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Ze(n.key,r,new zt(s.toArray()),Ut.none())}}function nb(n,t,e){n instanceof cs?(function(s,i,a){const c=s.value.clone(),l=Ql(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,t,e):n instanceof Ze?(function(s,i,a){if(!qs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Ql(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Cp(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Dr(n,t,e,r){return n instanceof cs?(function(i,a,c,l){if(!qs(i.precondition,a))return c;const h=i.value.clone(),f=Xl(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,t,e,r):n instanceof Ze?(function(i,a,c,l){if(!qs(i.precondition,a))return c;const h=Xl(i.fieldTransforms,l,a),f=a.data;return f.setAll(Cp(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,t,e,r):(function(i,a,c){return qs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,t,e)}function rb(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=wp(r.transform,s||null);i!=null&&(e===null&&(e=Lt.empty()),e.set(r.field,i))}return e||null}function Kl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&jn(r,s,((i,a)=>tb(i,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class cs extends Bi{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ze extends Bi{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cp(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Ql(n,t,e){const r=new Map;Q(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const i=n[s],a=i.transform,c=t.data.field(i.field);r.set(i.field,YA(a,c,e[s]))}return r}function Xl(n,t,e){const r=new Map;for(const s of n){const i=s.transform,a=e.data.field(s.field);r.set(s.field,XA(i,a,t))}return r}class cc extends Bi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sp extends Bi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&nb(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Dr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Dr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Tp();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=e.has(s.key)?null:c;const l=bp(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),G())}isEqual(t){return this.batchId===t.batchId&&jn(this.mutations,t.mutations,((e,r)=>Kl(e,r)))&&jn(this.baseMutations,t.baseMutations,((e,r)=>Kl(e,r)))}}class uc{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Q(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return WA})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new uc(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,K;function Rp(n){switch(n){case P.OK:return L(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function Pp(n){if(n===void 0)return Ae("GRPC error has no .code"),P.UNKNOWN;switch(n){case ut.OK:return P.OK;case ut.CANCELLED:return P.CANCELLED;case ut.UNKNOWN:return P.UNKNOWN;case ut.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ut.INTERNAL:return P.INTERNAL;case ut.UNAVAILABLE:return P.UNAVAILABLE;case ut.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ut.NOT_FOUND:return P.NOT_FOUND;case ut.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ut.ABORTED:return P.ABORTED;case ut.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ut.DATA_LOSS:return P.DATA_LOSS;default:return L(39323,{code:n})}}(K=ut||(ut={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=new $e([4294967295,4294967295],0);function Yl(n){const t=ab().encode(n),e=new Hf;return e.update(t),new Uint8Array(e.digest())}function Zl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new $e([e,r],0),new $e([s,i],0)]}class lc{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ar(`Invalid padding: ${e}`);if(r<0)throw new Ar(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ar(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ar(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=$e.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply($e.fromNumber(r)));return s.compare(cb)===1&&(s=new $e([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Yl(t),[r,s]=Zl(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new lc(i,s,e);return r.forEach((c=>a.insert(c))),a}insert(t){if(this.ge===0)return;const e=Yl(t),[r,s]=Zl(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,us.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ji(U.min(),s,new ot(W),be(),G())}}class us{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new us(r,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class kp{constructor(t,e){this.targetId=t,this.Ce=e}}class Vp{constructor(t,e,r=St.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class th{constructor(){this.ve=0,this.Fe=eh(),this.Me=St.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=G(),e=G(),r=G();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:i})}})),new us(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=eh()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ub{constructor(t){this.Ge=t,this.ze=new Map,this.je=be(),this.Je=Os(),this.He=Os(),this.Ye=new ot(W)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(sa(i))if(r===0){const a=new x(i.path);this.et(e,a,wt.newNoDocument(a,U.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const c=this.ut(t),l=c?this.ct(c,t,a):1;if(l!==0){this.it(e);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,h)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let a,c;try{a=Ge(r).toUint8Array()}catch(l){if(l instanceof ep)return Bn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new lc(a,s,i)}catch(l){return Bn(l instanceof Ar?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(e,i,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&sa(c.target)){const l=new x(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,wt.newNoDocument(l,t))}i.Be&&(e.set(a,i.ke()),i.qe())}}));let r=G();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(t)));const s=new ji(t,e,this.Ye,this.je,r);return this.je=be(),this.Je=Os(),this.He=Os(),this.Ye=new ot(W),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new th,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new yt(W),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new yt(W),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new th),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Os(){return new ot(x.comparator)}function eh(){return new ot(x.comparator)}const lb={asc:"ASCENDING",desc:"DESCENDING"},hb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},db={and:"AND",or:"OR"};class fb{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function oa(n,t){return n.useProto3Json||as(t)?t:{value:t}}function pi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Dp(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function pb(n,t){return pi(n,t.toTimestamp())}function Wt(n){return Q(!!n,49232),U.fromTimestamp((function(e){const r=Je(e);return new rt(r.seconds,r.nanos)})(n))}function hc(n,t){return aa(n,t).canonicalString()}function aa(n,t){const e=(function(s){return new nt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Np(n){const t=nt.fromString(n);return Q(Up(t),10190,{key:t.toString()}),t}function gi(n,t){return hc(n.databaseId,t.path)}function Nr(n,t){const e=Np(t);if(e.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(Mp(e))}function Op(n,t){return hc(n.databaseId,t)}function gb(n){const t=Np(n);return t.length===4?nt.emptyPath():Mp(t)}function ca(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mp(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function nh(n,t,e){return{name:gi(n,t),fields:e.value.mapValue.fields}}function mb(n,t){return"found"in t?(function(r,s){Q(!!s.found,43571),s.found.name,s.found.updateTime;const i=Nr(r,s.found.name),a=Wt(s.found.updateTime),c=s.found.createTime?Wt(s.found.createTime):U.min(),l=new Lt({mapValue:{fields:s.found.fields}});return wt.newFoundDocument(i,a,c,l)})(n,t):"missing"in t?(function(r,s){Q(!!s.missing,3894),Q(!!s.readTime,22933);const i=Nr(r,s.missing),a=Wt(s.readTime);return wt.newNoDocument(i,a)})(n,t):L(7234,{result:t})}function _b(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:L(39313,{state:h})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(Q(f===void 0||typeof f=="string",58123),St.fromBase64String(f||"")):(Q(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),St.fromUint8Array(f||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(h){const f=h.code===void 0?P.UNKNOWN:Pp(h.code);return new O(f,h.message||"")})(a);e=new Vp(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nr(n,r.document.name),i=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):U.min(),c=new Lt({mapValue:{fields:r.document.fields}}),l=wt.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];e=new Hs(h,f,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Nr(n,r.document),i=r.readTime?Wt(r.readTime):U.min(),a=wt.newNoDocument(s,i),c=r.removedTargetIds||[];e=new Hs([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Nr(n,r.document),i=r.removedTargetIds||[];e=new Hs([],i,s,null)}else{if(!("filter"in t))return L(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ob(s,i),c=r.targetId;e=new kp(c,a)}}return e}function Lp(n,t){let e;if(t instanceof cs)e={update:nh(n,t.key,t.value)};else if(t instanceof cc)e={delete:gi(n,t.key)};else if(t instanceof Ze)e={update:nh(n,t.key,t.data),updateMask:Cb(t.fieldMask)};else{if(!(t instanceof Sp))return L(16599,{Vt:t.type});e={verify:gi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof qr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Hr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof zr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw L(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:pb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:L(27497)})(n,t.precondition)),e}function yb(n,t){return n&&n.length>0?(Q(t!==void 0,14353),n.map((e=>(function(s,i){let a=s.updateTime?Wt(s.updateTime):Wt(i);return a.isEqual(U.min())&&(a=Wt(i)),new eb(a,s.transformResults||[])})(e,t)))):[]}function Tb(n,t){return{documents:[Op(n,t.path)]}}function Eb(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Op(n,s);const i=(function(h){if(h.length!==0)return Fp(ge.create(h,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:Cn(m.field),direction:vb(m.dir)}})(f)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=oa(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(t.endAt)),{ft:e,parent:s}}function wb(n){let t=gb(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Q(r===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=(function(p){const m=xp(p);return m instanceof ge&&hp(m)?m.getFilters():[m]})(e.where));let a=[];e.orderBy&&(a=(function(p){return p.map((m=>(function(S){return new di(Sn(S.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(e.orderBy));let c=null;e.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,as(m)?null:m})(e.limit));let l=null;e.startAt&&(l=(function(p){const m=!!p.before,v=p.values||[];return new hi(v,m)})(e.startAt));let h=null;return e.endAt&&(h=(function(p){const m=!p.before,v=p.values||[];return new hi(v,m)})(e.endAt)),BA(t,s,a,i,c,"F",l,h)}function Ib(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xp(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Sn(e.unaryFilter.field);return mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Sn(e.unaryFilter.field);return mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Sn(e.unaryFilter.field);return mt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Sn(e.unaryFilter.field);return mt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return mt.create(Sn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return ge.create(e.compositeFilter.filters.map((r=>xp(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function vb(n){return lb[n]}function Ab(n){return hb[n]}function bb(n){return db[n]}function Cn(n){return{fieldPath:n.canonicalString()}}function Sn(n){return Ct.fromServerFormat(n.fieldPath)}function Fp(n){return n instanceof mt?(function(e){if(e.op==="=="){if(ql(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NAN"}};if($l(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ql(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NAN"}};if($l(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(e.field),op:Ab(e.op),value:e.value}}})(n):n instanceof ge?(function(e){const r=e.getFilters().map((s=>Fp(s)));return r.length===1?r[0]:{compositeFilter:{op:bb(e.op),filters:r}}})(n):L(54877,{filter:n})}function Cb(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Up(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,e,r,s,i=U.min(),a=U.min(),c=St.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(t){return new xe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(t){this.yt=t}}function Rb(n){const t=wb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ia(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.Cn=new kb}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(We.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(We.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class kb{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new yt(nt.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new yt(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bp=41943040;class Ft{static withCacheSize(t){return new Ft(t,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(Bp,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Hn(0)}static cr(){return new Hn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="LruGarbageCollector",Vb=1048576;function ih([n,t],[e,r]){const s=W(n,e);return s===0?W(t,r):s}class Db{constructor(t){this.Ir=t,this.buffer=new yt(ih),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ih(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Nb{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(sh,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){sr(e)?N(sh,"Ignoring IndexedDB error during garbage collection: ",e):await rr(e)}await this.Vr(3e5)}))}}class Ob{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(Ni.ce);const r=new Db(e);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(rh)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rh):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(t,r,e)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(t,r)))).next((p=>(h=Date.now(),An()<=z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Mb(n,t){return new Ob(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.changes=new Tn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Dr(r.mutation,s,zt.empty(),rt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,G()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=G()){const s=un();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((i=>{let a=vr();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=un();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,G())))}populateOverlays(t,e,r){const s=[];return r.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,c)=>{e.set(a,c)}))}))}computeViews(t,e,r,s){let i=be();const a=Vr(),c=(function(){return Vr()})();return e.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Ze)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Dr(f.mutation,h,f.mutation.getFieldMask(),rt.now())):a.set(h.key,zt.empty())})),this.recalculateAndSaveOverlays(t,i).next((l=>(l.forEach(((h,f)=>a.set(h,f))),e.forEach(((h,f)=>c.set(h,new xb(f,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(t,e){const r=Vr();let s=new ot(((a,c)=>a-c)),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=e.get(l);if(h===null)return;let f=r.get(l)||zt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||G()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Tp();f.forEach((m=>{if(!i.has(m)){const v=bp(e.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}})),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return R.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):jA(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):R.resolve(un());let c=Ur,l=i;return a.next((h=>R.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(t,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(t,h,i))).next((()=>this.computeViews(t,l,h,G()))).next((f=>({batchId:c,changes:yp(f)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next((r=>{let s=vr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let a=vr();return this.indexManager.getCollectionParents(t,i).next((c=>R.forEach(c,(l=>{const h=(function(p,m){return new Mi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next((f=>{f.forEach(((p,m)=>{a=a.insert(p,m)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,wt.newInvalidDocument(f)))}));let c=vr();return a.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&Dr(f.mutation,h,zt.empty(),rt.now()),Fi(e,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:Rb(s.bundledQuery),readTime:Wt(s.readTime)}})(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.overlays=new ot(x.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=un();return R.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,i)=>{this.St(t,e,i)})),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=un(),i=e.length+1,a=new x(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new ot(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=un(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=un(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return R.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ib(e,r));let i=this.qr.get(e);i===void 0&&(i=G(),this.qr.set(e,i)),this.qr.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.sessionToken=St.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.Qr=new yt(Et.$r),this.Ur=new yt(Et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new Et(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new Et(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new x(new nt([])),r=new Et(e,t),s=new Et(e,t+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new x(new nt([])),r=new Et(e,t),s=new Et(e,t+1);let i=G();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new Et(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Et{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return x.comparator(t.key,e.key)||W(t.Yr,e.Yr)}static Kr(t,e){return W(t.Yr,e.Yr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new yt(Et.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sb(i,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Et(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?nc:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Et(e,0),s=new Et(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new yt(W);return e.forEach((s=>{const i=new Et(s,0),a=new Et(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{r=r.add(c.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;x.isDocumentKey(i)||(i=i.child(""));const a=new Et(new x(i),0);let c=new yt(W);return this.Zr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)}),a),R.resolve(this.ti(c))}ti(t){const e=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){Q(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,(s=>{const i=new Et(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new Et(e,0),s=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(t){this.ri=t,this.docs=(function(){return new ot(x.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let r=be();return e.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=be();const a=e.path,c=new x(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||yA(_A(f),r)<=0||(s.has(f.key)||Fi(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(t,e,r,s){L(9500)}ii(t,e){return R.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Hb(this)}getSize(t){return R.resolve(this.size)}}class Hb extends Lb{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(t){this.persistence=t,this.si=new Tn((e=>ic(e)),oc),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.oi=0,this._i=new dc,this.targetCount=0,this.ai=Hn.ur()}forEachTarget(t,e){return this.si.forEach(((r,s)=>e(s))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Hn(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),R.waitFor(i).next((()=>s))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),R.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(t,e){this.ui={},this.overlays={},this.ci=new Ni(0),this.li=!1,this.li=!0,this.hi=new jb,this.referenceDelegate=t(this),this.Pi=new zb(this),this.indexManager=new Pb,this.remoteDocumentCache=(function(s){return new qb(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Sb(e),this.Ii=new Ub(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Bb,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new $b(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new Wb(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(t,e){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class Wb extends EA{constructor(t){super(),this.currentSequenceNumber=t}}class fc{constructor(t){this.persistence=t,this.Ri=new dc,this.Vi=null}static mi(t){return new fc(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const s=x.fromPath(r);return this.gi(t,s).next((i=>{i||e.removeEntry(s,U.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class mi{constructor(t,e){this.persistence=t,this.pi=new Tn((r=>vA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Mb(this,e)}static mi(t,e){return new mi(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return R.forEach(this.pi,((r,s)=>this.br(t,r,s).next((i=>i?R.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,e).next((c=>{c||(r++,i.removeEntry(a,U.min()))})))).next((()=>i.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=js(t.data.value)),e}br(t,e,r){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=G(),s=G();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pc(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return FE()?8:wA(Nt())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ys(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(t,e,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Jb;return this.Ss(t,e,a).next((c=>{if(i.result=c,this.Vs)return this.bs(t,e,a,c.size)}))})).next((()=>i.result))}bs(t,e,r,s){return r.documentReadCount<this.fs?(An()<=z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",bn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(An()<=z.DEBUG&&N("QueryEngine","Query:",bn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(An()<=z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",bn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ue(e))):R.resolve())}ys(t,e){if(Jl(e))return R.resolve(null);let r=ue(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=ia(e,null,"F"),r=ue(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((i=>{const a=G(...i);return this.ps.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,r).next((l=>{const h=this.Ds(e,c);return this.Cs(e,h,a,l.readTime)?this.ys(t,ia(e,null,"F")):this.vs(t,h,e,l)}))))})))))}ws(t,e,r,s){return Jl(e)||s.isEqual(U.min())?R.resolve(null):this.ps.getDocuments(t,r).next((i=>{const a=this.Ds(e,i);return this.Cs(e,a,r,s)?R.resolve(null):(An()<=z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bn(e)),this.vs(t,a,e,mA(s,Ur)).next((c=>c)))}))}Ds(t,e){let r=new yt(mp(t));return e.forEach(((s,i)=>{Fi(t,i)&&(r=r.add(i))})),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,r){return An()<=z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",bn(e)),this.ps.getDocumentsMatchingQuery(t,e,We.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="LocalStore",Kb=3e8;class Qb{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new ot(W),this.xs=new Tn((i=>ic(i)),oc),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Fb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Xb(n,t,e,r){return new Qb(n,t,e,r)}async function $p(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=G();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return e.localDocuments.getDocuments(r,l).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function Yb(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,m=p.keys();let v=R.resolve();return m.forEach((S=>{v=v.next((()=>f.getEntry(l,S))).next((V=>{const k=h.docVersions.get(S);Q(k!==null,48541),V.version.compareTo(k)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))}))})),v.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(e,r,t,i).next((()=>i.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=G();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function qp(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function Zb(n,t){const e=$(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const c=[];t.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(e.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>e.Pi.addMatchingKeys(i,f.addedDocuments,p))));let v=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?v=v.withResumeToken(St.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),(function(V,k,F){return V.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Kb?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(m,v,f)&&c.push(e.Pi.updateTargetData(i,v))}));let l=be(),h=G();if(t.documentUpdates.forEach((f=>{t.resolvedLimboDocuments.has(f)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(tC(i,a,t.documentUpdates).next((f=>{l=f.ks,h=f.qs}))),!r.isEqual(U.min())){const f=e.Pi.getLastRemoteSnapshotVersion(i).next((p=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return R.waitFor(c).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(e.Ms=s,i)))}function tC(n,t,e){let r=G(),s=G();return e.forEach((i=>r=r.add(i))),t.getEntries(n,r).next((i=>{let a=be();return e.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(U.min())?(t.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(l),a=a.insert(c,l)):N(gc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{ks:a,qs:s}}))}function eC(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=nc),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function nC(n,t){const e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.Pi.getTargetData(r,t).next((i=>i?(s=i,R.resolve(s)):e.Pi.allocateTargetId(r).next((a=>(s=new xe(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function ua(n,t,e){const r=$(n),s=r.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!sr(a))throw a;N(gc,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function oh(n,t,e){const r=$(n);let s=U.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,f){const p=$(l),m=p.xs.get(f);return m!==void 0?R.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,f)})(r,a,ue(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?i:G()))).next((c=>(rC(r,qA(t),c),{documents:c,Qs:i})))))}function rC(n,t,e){let r=n.Os.get(t)||U.min();e.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(t,r)}class ah{constructor(){this.activeTargetIds=KA()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class sC{constructor(){this.Mo=new ah,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new ah,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="ConnectivityMonitor";class uh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(ch,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(ch,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms=null;function la(){return Ms===null?Ms=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ms++,"0x"+Ms.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="RestConnection",oC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aC{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ui?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,i){const a=la(),c=this.zo(t,e.toUriEncodedString());N(Lo,`Sending RPC '${t}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=Yn(h);return this.Jo(t,c,l,r,f).then((p=>(N(Lo,`Received RPC '${t}' ${a}: `,p),p)),(p=>{throw Bn(Lo,`RPC '${t}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(t,e,r,s,i,a){return this.Go(t,e,r,s,i)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+nr})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s))}zo(t,e){const r=oC[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="WebChannelConnection";class uC extends aC{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,i){const a=la();return new Promise(((c,l)=>{const h=new zf;h.setWithCredentials(!0),h.listenOnce(Wf.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Bs.NO_ERROR:const p=h.getResponseJson();N(kt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),c(p);break;case Bs.TIMEOUT:N(kt,`RPC '${t}' ${a} timed out`),l(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Bs.HTTP_ERROR:const m=h.getStatus();if(N(kt,`RPC '${t}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v==null?void 0:v.error;if(S&&S.status&&S.message){const V=(function(F){const j=F.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN})(S.status);l(new O(V,S.message))}else l(new O(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new O(P.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{N(kt,`RPC '${t}' ${a} completed.`)}}));const f=JSON.stringify(s);N(kt,`RPC '${t}' ${a} sending request:`,s),h.send(e,"POST",f,r,15)}))}T_(t,e,r){const s=la(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Kf(),c=Gf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const f=i.join("");N(kt,`Creating RPC '${t}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);this.I_(p);let m=!1,v=!1;const S=new cC({Yo:k=>{v?N(kt,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(m||(N(kt,`Opening RPC '${t}' stream ${s} transport.`),p.open(),m=!0),N(kt,`RPC '${t}' stream ${s} sending:`,k),p.send(k))},Zo:()=>p.close()}),V=(k,F,j)=>{k.listen(F,(q=>{try{j(q)}catch(st){setTimeout((()=>{throw st}),0)}}))};return V(p,Ir.EventType.OPEN,(()=>{v||(N(kt,`RPC '${t}' stream ${s} transport opened.`),S.o_())})),V(p,Ir.EventType.CLOSE,(()=>{v||(v=!0,N(kt,`RPC '${t}' stream ${s} transport closed`),S.a_(),this.E_(p))})),V(p,Ir.EventType.ERROR,(k=>{v||(v=!0,Bn(kt,`RPC '${t}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),S.a_(new O(P.UNAVAILABLE,"The operation could not be completed")))})),V(p,Ir.EventType.MESSAGE,(k=>{var F;if(!v){const j=k.data[0];Q(!!j,16349);const q=j,st=(q==null?void 0:q.error)||((F=q[0])==null?void 0:F.error);if(st){N(kt,`RPC '${t}' stream ${s} received error:`,st);const jt=st.status;let ft=(function(T){const I=ut[T];if(I!==void 0)return Pp(I)})(jt),w=st.message;ft===void 0&&(ft=P.INTERNAL,w="Unknown error status: "+jt+" with message "+st.message),v=!0,S.a_(new O(ft,w)),p.close()}else N(kt,`RPC '${t}' stream ${s} received:`,j),S.u_(j)}})),V(c,Jf.STAT_EVENT,(k=>{k.stat===Zo.PROXY?N(kt,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===Zo.NOPROXY&&N(kt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function xo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n){return new fb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,e,r=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="PersistentStream";class Hp{constructor(t,e,r,s,i,a,c,l){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new mc(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ae(e.toString()),Ae("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return N(lh,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(N(lh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lC extends Hp{constructor(t,e,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=_b(this.serializer,t),r=(function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Wt(a.readTime):U.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=ca(this.serializer),e.addTarget=(function(i,a){let c;const l=a.target;if(c=sa(l)?{documents:Tb(i,l)}:{query:Eb(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Dp(i,a.resumeToken);const h=oa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=pi(i,a.snapshotVersion.toTimestamp());const h=oa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,t);const r=Ib(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=ca(this.serializer),e.removeTarget=t,this.q_(e)}}class hC extends Hp{constructor(t,e,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Q(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Q(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Q(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=yb(t.writeResults,t.commitTime),r=Wt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=ca(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Lp(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{}class fC extends dC{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(t,aa(e,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(P.UNKNOWN,i.toString())}))}Ho(t,e,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(t,aa(e,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class pC{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ae(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="RemoteStore";class gC{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{En(this)&&(N(gn,"Restarting streams for network reachability change."),await(async function(l){const h=$(l);h.Ea.add(4),await ls(h),h.Ra.set("Unknown"),h.Ea.delete(4),await qi(h)})(this))}))})),this.Ra=new pC(r,s)}}async function qi(n){if(En(n))for(const t of n.da)await t(!0)}async function ls(n){for(const t of n.da)await t(!1)}function zp(n,t){const e=$(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Ec(e)?Tc(e):ir(e).O_()&&yc(e,t))}function _c(n,t){const e=$(n),r=ir(e);e.Ia.delete(t),r.O_()&&Wp(e,t),e.Ia.size===0&&(r.O_()?r.L_():En(e)&&e.Ra.set("Unknown"))}function yc(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ir(n).Y_(t)}function Wp(n,t){n.Va.Ue(t),ir(n).Z_(t)}function Tc(n){n.Va=new ub({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),ir(n).start(),n.Ra.ua()}function Ec(n){return En(n)&&!ir(n).x_()&&n.Ia.size>0}function En(n){return $(n).Ea.size===0}function Jp(n){n.Va=void 0}async function mC(n){n.Ra.set("Online")}async function _C(n){n.Ia.forEach(((t,e)=>{yc(n,t)}))}async function yC(n,t){Jp(n),Ec(n)?(n.Ra.ha(t),Tc(n)):n.Ra.set("Unknown")}async function TC(n,t,e){if(n.Ra.set("Online"),t instanceof Vp&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(n,t)}catch(r){N(gn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await _i(n,r)}else if(t instanceof Hs?n.Va.Ze(t):t instanceof kp?n.Va.st(t):n.Va.tt(t),!e.isEqual(U.min()))try{const r=await qp(n.localStore);e.compareTo(r)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(St.EMPTY_BYTE_STRING,f.snapshotVersion)),Wp(i,l);const p=new xe(f.target,l,h,f.sequenceNumber);yc(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){N(gn,"Failed to raise snapshot:",r),await _i(n,r)}}async function _i(n,t,e){if(!sr(t))throw t;n.Ea.add(1),await ls(n),n.Ra.set("Offline"),e||(e=()=>qp(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(gn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await qi(n)}))}function Gp(n,t){return t().catch((e=>_i(n,e,t)))}async function Hi(n){const t=$(n),e=Qe(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:nc;for(;EC(t);)try{const s=await eC(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,wC(t,s)}catch(s){await _i(t,s)}Kp(t)&&Qp(t)}function EC(n){return En(n)&&n.Ta.length<10}function wC(n,t){n.Ta.push(t);const e=Qe(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Kp(n){return En(n)&&!Qe(n).x_()&&n.Ta.length>0}function Qp(n){Qe(n).start()}async function IC(n){Qe(n).ra()}async function vC(n){const t=Qe(n);for(const e of n.Ta)t.ea(e.mutations)}async function AC(n,t,e){const r=n.Ta.shift(),s=uc.from(r,t,e);await Gp(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Hi(n)}async function bC(n,t){t&&Qe(n).X_&&await(async function(r,s){if((function(a){return Rp(a)&&a!==P.ABORTED})(s.code)){const i=r.Ta.shift();Qe(r).B_(),await Gp(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Hi(r)}})(n,t),Kp(n)&&Qp(n)}async function hh(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),N(gn,"RemoteStore received new credentials");const r=En(e);e.Ea.add(3),await ls(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await qi(e)}async function CC(n,t){const e=$(n);t?(e.Ea.delete(2),await qi(e)):t||(e.Ea.add(2),await ls(e),e.Ra.set("Unknown"))}function ir(n){return n.ma||(n.ma=(function(e,r,s){const i=$(e);return i.sa(),new lC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:mC.bind(null,n),t_:_C.bind(null,n),r_:yC.bind(null,n),H_:TC.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),Ec(n)?Tc(n):n.Ra.set("Unknown")):(await n.ma.stop(),Jp(n))}))),n.ma}function Qe(n){return n.fa||(n.fa=(function(e,r,s){const i=$(e);return i.sa(),new hC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:IC.bind(null,n),r_:bC.bind(null,n),ta:vC.bind(null,n),na:AC.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Hi(n)):(await n.fa.stop(),n.Ta.length>0&&(N(gn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,c=new wc(t,e,a,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ic(n,t){if(Ae("AsyncQueue",`${t}: ${n}`),sr(n))return new O(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{static emptySet(t){return new On(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=vr(),this.sortedSet=new ot(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof On)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new On;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.ga=new ot(x.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class zn{constructor(t,e,r,s,i,a,c,l,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,s,i){const a=[];return e.forEach((c=>{a.push({type:0,doc:c})})),new zn(t,e,On.emptySet(e),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class RC{constructor(){this.queries=fh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=$(e),i=s.queries;s.queries=fh(),i.forEach(((a,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new O(P.ABORTED,"Firestore shutting down"))}}function fh(){return new Tn((n=>gp(n)),xi)}async function Xp(n,t){const e=$(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new SC,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Ic(a,`Initialization of query '${bn(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&vc(e)}async function Yp(n,t){const e=$(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function PC(n,t){const e=$(n);let r=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&vc(e)}function kC(n,t,e){const r=$(n),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);r.queries.delete(t)}function vc(n){n.Ca.forEach((t=>{t.next()}))}var ha,ph;(ph=ha||(ha={})).Ma="default",ph.Cache="cache";class Zp{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new zn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=zn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ha.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t){this.key=t}}class eg{constructor(t){this.key=t}}class VC{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=G(),this.mutatedKeys=G(),this.eu=mp(t),this.tu=new On(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new dh,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((f,p)=>{const m=s.get(f),v=Fi(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),V=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;m&&v?m.data.isEqual(v.data)?S!==V&&(r.track({type:3,doc:v}),k=!0):this.su(m,v)||(r.track({type:2,doc:v}),k=!0,(l&&this.eu(v,l)>0||h&&this.eu(v,h)<0)&&(c=!0)):!m&&v?(r.track({type:0,doc:v}),k=!0):m&&!v&&(r.track({type:1,doc:m}),k=!0,(l||h)&&(c=!0)),k&&(v?(a=a.add(v),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((f,p)=>(function(v,S){const V=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Rt:k})}};return V(v)-V(S)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=e&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,a.length!==0||h?{snapshot:new zn(this.query,t.tu,i,a,t.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new dh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=G(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new eg(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new tg(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=G();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return zn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ac="SyncEngine";class DC{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class NC{constructor(t){this.key=t,this.hu=!1}}class OC{constructor(t,e,r,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Tn((c=>gp(c)),xi),this.Iu=new Map,this.Eu=new Set,this.du=new ot(x.comparator),this.Au=new Map,this.Ru=new dc,this.Vu={},this.mu=new Map,this.fu=Hn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function MC(n,t,e=!0){const r=ag(n);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ng(r,t,e,!0),s}async function LC(n,t){const e=ag(n);await ng(e,t,!0,!1)}async function ng(n,t,e,r){const s=await nC(n.localStore,ue(t)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,e);let c;return r&&(c=await xC(n,t,i,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&zp(n.remoteStore,s),c}async function xC(n,t,e,r,s){n.pu=(p,m,v)=>(async function(V,k,F,j){let q=k.view.ru(F);q.Cs&&(q=await oh(V.localStore,k.query,!1).then((({documents:w})=>k.view.ru(w,q))));const st=j&&j.targetChanges.get(k.targetId),jt=j&&j.targetMismatches.get(k.targetId)!=null,ft=k.view.applyChanges(q,V.isPrimaryClient,st,jt);return mh(V,k.targetId,ft.au),ft.snapshot})(n,p,m,v);const i=await oh(n.localStore,t,!0),a=new VC(t,i.Qs),c=a.ru(i.documents),l=us.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);mh(n,e,h.au);const f=new DC(t,e,a);return n.Tu.set(t,f),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),h.snapshot}async function FC(n,t,e){const r=$(n),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!xi(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ua(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&_c(r.remoteStore,s.targetId),da(r,s.targetId)})).catch(rr)):(da(r,s.targetId),await ua(r.localStore,s.targetId,!0))}async function UC(n,t){const e=$(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),_c(e.remoteStore,r.targetId))}async function BC(n,t,e){const r=JC(n);try{const s=await(function(a,c){const l=$(a),h=rt.now(),f=c.reduce(((v,S)=>v.add(S.key)),G());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let S=be(),V=G();return l.Ns.getEntries(v,f).next((k=>{S=k,S.forEach(((F,j)=>{j.isValidDocument()||(V=V.add(F))}))})).next((()=>l.localDocuments.getOverlayedDocuments(v,S))).next((k=>{p=k;const F=[];for(const j of c){const q=rb(j,p.get(j.key).overlayedDocument);q!=null&&F.push(new Ze(j.key,q,cp(q.value.mapValue),Ut.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,F,c)})).next((k=>{m=k;const F=k.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(v,k.batchId,F)}))})).then((()=>({batchId:m.batchId,changes:yp(p)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Vu[a.currentUser.toKey()];h||(h=new ot(W)),h=h.insert(c,l),a.Vu[a.currentUser.toKey()]=h})(r,s.batchId,e),await hs(r,s.changes),await Hi(r.remoteStore)}catch(s){const i=Ic(s,"Failed to persist write");e.reject(i)}}async function rg(n,t){const e=$(n);try{const r=await Zb(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Au.get(i);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Q(a.hu,14607):s.removedDocuments.size>0&&(Q(a.hu,42227),a.hu=!1))})),await hs(e,r,t)}catch(r){await rr(r)}}function gh(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=$(a);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(h=!0)})),h&&vc(l)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function jC(n,t,e){const r=$(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new ot(x.comparator);a=a.insert(i,wt.newNoDocument(i,U.min()));const c=G().add(i),l=new ji(U.min(),new Map,new ot(W),a,c);await rg(r,l),r.du=r.du.remove(i),r.Au.delete(t),bc(r)}else await ua(r.localStore,t,!1).then((()=>da(r,t,e))).catch(rr)}async function $C(n,t){const e=$(n),r=t.batch.batchId;try{const s=await Yb(e.localStore,t);ig(e,r,null),sg(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await hs(e,s)}catch(s){await rr(s)}}async function qC(n,t,e){const r=$(n);try{const s=await(function(a,c){const l=$(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Q(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,t);ig(r,t,e),sg(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await hs(r,s)}catch(s){await rr(s)}}function sg(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function ig(n,t,e){const r=$(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function da(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||og(n,r)}))}function og(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(_c(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),bc(n))}function mh(n,t,e){for(const r of e)r instanceof tg?(n.Ru.addReference(r.key,t),HC(n,r)):r instanceof eg?(N(Ac,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||og(n,r.key)):L(19791,{wu:r})}function HC(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(N(Ac,"New document in limbo: "+e),n.Eu.add(r),bc(n))}function bc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new x(nt.fromString(t)),r=n.fu.next();n.Au.set(r,new NC(e)),n.du=n.du.insert(e,r),zp(n.remoteStore,new xe(ue(Li(e.path)),r,"TargetPurposeLimboResolution",Ni.ce))}}async function hs(n,t,e){const r=$(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{a.push(r.pu(l,t,e).then((h=>{var f;if((h||e)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=pc.As(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(l,h){const f=$(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>R.forEach(h,(m=>R.forEach(m.Es,(v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v))).next((()=>R.forEach(m.ds,(v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))))))}catch(p){if(!sr(p))throw p;N(gc,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=f.Ms.get(m),S=v.snapshotVersion,V=v.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(m,V)}}})(r.localStore,i))}async function zC(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){N(Ac,"User change. New user:",t.toKey());const r=await $p(e.localStore,t);e.currentUser=t,(function(i,a){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new O(P.CANCELLED,a))}))})),i.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await hs(e,r.Ls)}}function WC(n,t){const e=$(n),r=e.Au.get(t);if(r&&r.hu)return G().add(r.key);{let s=G();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function ag(n){const t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=rg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=WC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jC.bind(null,t),t.Pu.H_=PC.bind(null,t.eventManager),t.Pu.yu=kC.bind(null,t.eventManager),t}function JC(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$C.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qC.bind(null,t),t}class yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$i(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Xb(this.persistence,new Gb,t.initialUser,this.serializer)}Cu(t){return new jp(fc.mi,this.serializer)}Du(t){return new sC}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yi.provider={build:()=>new yi};class GC extends yi{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Q(this.persistence.referenceDelegate instanceof mi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Nb(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new jp((r=>mi.mi(r,e)),this.serializer)}}class fa{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zC.bind(null,this.syncEngine),await CC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new RC})()}createDatastore(t){const e=$i(t.databaseInfo.databaseId),r=(function(i){return new uC(i)})(t.databaseInfo);return(function(i,a,c,l){return new fC(i,a,c,l)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,i,a,c){return new gC(r,s,i,a,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>gh(this.syncEngine,e,0)),(function(){return uh.v()?new uh:new iC})())}createSyncEngine(t,e){return(function(s,i,a,c,l,h,f){const p=new OC(s,i,a,c,l,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=$(s);N(gn,"RemoteStore shutting down."),i.Ea.add(5),await ls(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}fa.provider={build:()=>new fa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ae("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await(async function(s,i){const a=$(s),c={documents:i.map((p=>gi(a.serializer,p)))},l=await a.Ho("BatchGetDocuments",a.serializer.databaseId,nt.emptyPath(),c,i.length),h=new Map;l.forEach((p=>{const m=mb(a.serializer,p);h.set(m.key.toString(),m)}));const f=[];return i.forEach((p=>{const m=h.get(p.toString());Q(!!m,55234,{key:p}),f.push(m)})),f})(this.datastore,t);return e.forEach((r=>this.recordVersion(r))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new cc(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((e,r)=>{const s=x.fromPath(r);this.mutations.push(new Sp(s,this.precondition(s)))})),await(async function(r,s){const i=$(r),a={writes:s.map((c=>Lp(i.serializer,c)))};await i.Go("Commit",i.serializer.databaseId,nt.emptyPath(),a)})(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw L(50498,{Gu:t.constructor.name});e=U.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new O(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(U.min())?Ut.exists(!1):Ut.updateTime(e):Ut.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(U.min()))throw new O(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ut.updateTime(e)}return Ut.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(t,e,r,s,i){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=i,this.zu=r.maxAttempts,this.M_=new mc(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const t=new KC(this.datastore),e=this.Hu(t);e&&e.then((r=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Yu(s)}))))})).catch((r=>{this.Yu(r)}))}))}Hu(t){try{const e=this.updateFunction(t);return!as(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Yu(t){this.zu>0&&this.Zu(t)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(t)}Zu(t){if((t==null?void 0:t.name)==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Rp(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="FirestoreClient";class XC{constructor(t,e,r,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Vt.UNAUTHENTICATED,this.clientId=tc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{N(Xe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(N(Xe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ic(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Fo(n,t){n.asyncQueue.verifyOperationInProgress(),N(Xe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await $p(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function _h(n,t){n.asyncQueue.verifyOperationInProgress();const e=await YC(n);N(Xe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>hh(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>hh(t.remoteStore,s))),n._onlineComponents=t}async function YC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Xe,"Using user provided OfflineComponentProvider");try{await Fo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Bn("Error using user provided cache. Falling back to memory cache: "+e),await Fo(n,new yi)}}else N(Xe,"Using default OfflineComponentProvider"),await Fo(n,new GC(void 0));return n._offlineComponents}async function Cc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Xe,"Using user provided OnlineComponentProvider"),await _h(n,n._uninitializedComponentsProvider._online)):(N(Xe,"Using default OnlineComponentProvider"),await _h(n,new fa))),n._onlineComponents}function ZC(n){return Cc(n).then((t=>t.syncEngine))}function tS(n){return Cc(n).then((t=>t.datastore))}async function pa(n){const t=await Cc(n),e=t.eventManager;return e.onListen=MC.bind(null,t.syncEngine),e.onUnlisten=FC.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=LC.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=UC.bind(null,t.syncEngine),e}function eS(n,t,e={}){const r=new Te;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const f=new cg({next:m=>{f.Nu(),a.enqueueAndForget((()=>Yp(i,p)));const v=m.docs.has(c);!v&&m.fromCache?h.reject(new O(P.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?h.reject(new O(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Zp(Li(c.path),f,{includeMetadataChanges:!0,qa:!0});return Xp(i,p)})(await pa(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="firestore.googleapis.com",Th=!0;class Eh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lg,this.ssl=Th}else this.host=t.host,this.ssl=t.ssl??Th;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Bp;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Vb)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}gA("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ug(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Sc{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new sA;switch(r.type){case"firstParty":return new cA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=yh.get(e);r&&(N("ComponentProvider","Removing Datastore"),yh.delete(e),r.terminate())})(this),Promise.resolve()}}function nS(n,t,e,r={}){var h;n=Ee(n,Sc);const s=Yn(t),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;s&&(ef(`https://${c}`),nf("Firestore",!0)),i.host!==lg&&i.host!==c&&Bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!hn(l,a)&&(n._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Vt.MOCK_USER;else{f=PE(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Vt(m)}n._authCredentials=new iA(new Xf(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zi(this.firestore,t,this._query)}}class dt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(os(e,dt._jsonSchema))return new dt(t,r||null,new x(nt.fromString(e.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:ht("string",dt._jsonSchemaVersion),referencePath:ht("string")};class Wr extends zi{constructor(t,e,r){super(t,e,Li(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new x(t))}withConverter(t){return new Wr(this.firestore,t,this._path)}}function Wi(n,t,...e){if(n=It(n),arguments.length===1&&(t=tc.newId()),pA("doc","path",t),n instanceof Sc){const r=nt.fromString(t,...e);return Ol(r),new dt(n,null,new x(r))}{if(!(n instanceof dt||n instanceof Wr))throw new O(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(t,...e));return Ol(r),new dt(n.firestore,n instanceof Wr?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="AsyncQueue";class Ih{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new mc(this,"async_queue_retry"),this._c=()=>{const r=xo();r&&N(wh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=xo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=xo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Te;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!sr(t))throw t;N(wh,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Ae("INTERNAL UNHANDLED ERROR: ",vh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=wc.createAndSchedule(this,t,e,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:vh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function vh(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class Wn extends Sc{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ih,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ih(t),this._firestoreClient=void 0,await t}}}function rS(n,t){const e=typeof n=="object"?n:af(),r=typeof n=="string"?n:ui,s=ja(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=SE("firestore");i&&nS(s,...i)}return s}function Ji(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||sS(n),n._firestoreClient}function sS(n){var r,s,i;const t=n._freezeSettings(),e=(function(c,l,h,f){return new CA(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ug(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new XC(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qt(St.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qt(St.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(os(t,qt._jsonSchema))return qt.fromBase64String(t.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:ht("string",qt._jsonSchemaVersion),bytes:ht("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:le._jsonSchemaVersion}}static fromJSON(t){if(os(t,le._jsonSchema))return new le(t.latitude,t.longitude)}}le._jsonSchemaVersion="firestore/geoPoint/1.0",le._jsonSchema={type:ht("string",le._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:he._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(os(t,he._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new he(t.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}he._jsonSchemaVersion="firestore/vectorValue/1.0",he._jsonSchema={type:ht("string",he._jsonSchemaVersion),vectorValues:ht("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=/^__.*__$/;class oS{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ze(t,this.data,this.fieldMask,e,this.fieldTransforms):new cs(t,this.data,e,this.fieldTransforms)}}class hg{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ze(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function dg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:n})}}class Rc{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Rc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Ti(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(dg(this.Ac)&&iS.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class aS{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||$i(t)}Cc(t,e,r,s=!1){return new Rc({Ac:t,methodName:e,Dc:r,path:Ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fg(n){const t=n._freezeSettings(),e=$i(n._databaseId);return new aS(n._databaseId,!!t.ignoreUndefinedProperties,e)}function pg(n,t,e,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,t,e,s);kc("Data must be an object, but it was:",a,r);const c=gg(r,a);let l,h;if(i.merge)l=new zt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=ga(t,p,e);if(!a.contains(m))throw new O(P.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_g(f,m)||f.push(m)}l=new zt(f),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new oS(new Lt(c),l,h)}class Qi extends Ki{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Qi}}class Pc extends Ki{_toFieldTransform(t){return new ZA(t.path,new qr)}isEqual(t){return t instanceof Pc}}function cS(n,t,e,r){const s=n.Cc(1,t,e);kc("Data must be an object, but it was:",s,r);const i=[],a=Lt.empty();Ye(r,((l,h)=>{const f=Vc(t,l,e);h=It(h);const p=s.yc(f);if(h instanceof Qi)i.push(f);else{const m=Xi(h,p);m!=null&&(i.push(f),a.set(f,m))}}));const c=new zt(i);return new hg(a,c,s.fieldTransforms)}function uS(n,t,e,r,s,i){const a=n.Cc(1,t,e),c=[ga(t,r,e)],l=[s];if(i.length%2!=0)throw new O(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(ga(t,i[m])),l.push(i[m+1]);const h=[],f=Lt.empty();for(let m=c.length-1;m>=0;--m)if(!_g(h,c[m])){const v=c[m];let S=l[m];S=It(S);const V=a.yc(v);if(S instanceof Qi)h.push(v);else{const k=Xi(S,V);k!=null&&(h.push(v),f.set(v,k))}}const p=new zt(h);return new hg(f,p,a.fieldTransforms)}function Xi(n,t){if(mg(n=It(n)))return kc("Unsupported field value:",t,n),gg(n,t);if(n instanceof Ki)return(function(r,s){if(!dg(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=Xi(c,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,t)}return(function(r,s){if((r=It(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:pi(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pi(s.serializer,i)}}if(r instanceof le)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:Dp(s.serializer,r._byteString)};if(r instanceof dt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof he)return(function(a,c){return{mapValue:{fields:{[op]:{stringValue:ap},[li]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return ac(c.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${ec(r)}`)})(n,t)}function gg(n,t){const e={};return tp(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ye(n,((r,s)=>{const i=Xi(s,t.mc(r));i!=null&&(e[r]=i)})),{mapValue:{fields:e}}}function mg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof le||n instanceof qt||n instanceof dt||n instanceof Ki||n instanceof he)}function kc(n,t,e){if(!mg(e)||!Yf(e)){const r=ec(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function ga(n,t,e){if((t=It(t))instanceof Gi)return t._internalPath;if(typeof t=="string")return Vc(n,t);throw Ti("Field path arguments must be of type string or ",n,!1,void 0,e)}const lS=new RegExp("[~\\*/\\[\\]]");function Vc(n,t,e){if(t.search(lS)>=0)throw Ti(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Gi(...t.split("."))._internalPath}catch{throw Ti(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ti(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new O(P.INVALID_ARGUMENT,c+n+l)}function _g(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(yg("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class hS extends Ei{data(){return super.data()}}function yg(n,t){return typeof t=="string"?Vc(n,t):t instanceof Gi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tg{convertValue(t,e="none"){switch(Ke(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ge(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ye(t,((s,i)=>{r[s]=this.convertValue(i,e)})),r}convertVectorValue(t){var r,s,i;const e=(i=(s=(r=t.fields)==null?void 0:r[li].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>ct(a.doubleValue)));return new he(e)}convertGeoPoint(t){return new le(ct(t.latitude),ct(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Oi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Br(t));default:return null}}convertTimestamp(t){const e=Je(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=nt.fromString(t);Q(Up(r),9688,{name:t});const s=new jr(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(e)||Ae(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class fS extends Tg{constructor(t){super(),this.firestore=t}convertBytes(t){return new qt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dt(this.firestore,null,e)}}class Rn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qe extends Ei{constructor(t,e,r,s,i,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(yg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=qe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}qe._jsonSchemaVersion="firestore/documentSnapshot/1.0",qe._jsonSchema={type:ht("string",qe._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class zs extends qe{data(t={}){return super.data(t)}}class Mn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Rn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new zs(this._firestore,this._userDataWriter,r.key,r,new Rn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new zs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Rn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new zs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Rn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:pS(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Mn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=tc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function pS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n){n=Ee(n,dt);const t=Ee(n.firestore,Wn);return eS(Ji(t),n._key).then((e=>wg(t,n,e)))}Mn._jsonSchemaVersion="firestore/querySnapshot/1.0",Mn._jsonSchema={type:ht("string",Mn._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class Nc extends Tg{constructor(t){super(),this.firestore=t}convertBytes(t){return new qt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dt(this.firestore,null,e)}}function Yi(n,t,e){n=Ee(n,dt);const r=Ee(n.firestore,Wn),s=Eg(n.converter,t,e);return gS(r,[pg(fg(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ut.none())])}function Oc(n,...t){var l,h,f;n=It(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Ah(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Ah(t[r])){const p=t[r];t[r]=(l=p.next)==null?void 0:l.bind(p),t[r+1]=(h=p.error)==null?void 0:h.bind(p),t[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,a,c;if(n instanceof dt)a=Ee(n.firestore,Wn),c=Li(n._key.path),i={next:p=>{t[r]&&t[r](wg(a,n,p))},error:t[r+1],complete:t[r+2]};else{const p=Ee(n,zi);a=Ee(p.firestore,Wn),c=p._query;const m=new Nc(a);i={next:v=>{t[r]&&t[r](new Mn(a,m,p,v))},error:t[r+1],complete:t[r+2]},dS(n._query)}return(function(m,v,S,V){const k=new cg(V),F=new Zp(v,k,S);return m.asyncQueue.enqueueAndForget((async()=>Xp(await pa(m),F))),()=>{k.Nu(),m.asyncQueue.enqueueAndForget((async()=>Yp(await pa(m),F)))}})(Ji(a),c,s,i)}function gS(n,t){return(function(r,s){const i=new Te;return r.asyncQueue.enqueueAndForget((async()=>BC(await ZC(r),s,i))),i.promise})(Ji(n),t)}function wg(n,t,e){const r=e.docs.get(t._key),s=new Nc(n);return new qe(n,s,t._key,r,new Rn(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS={maxAttempts:5};function br(n,t){if((n=It(n)).firestore!==t)throw new O(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=fg(t)}get(t){const e=br(t,this._firestore),r=new fS(this._firestore);return this._transaction.lookup([e._key]).then((s=>{if(!s||s.length!==1)return L(24041);const i=s[0];if(i.isFoundDocument())return new Ei(this._firestore,r,i.key,i,e.converter);if(i.isNoDocument())return new Ei(this._firestore,r,e._key,null,e.converter);throw L(18433,{doc:i})}))}set(t,e,r){const s=br(t,this._firestore),i=Eg(s.converter,e,r),a=pg(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,a),this}update(t,e,r,...s){const i=br(t,this._firestore);let a;return a=typeof(e=It(e))=="string"||e instanceof Gi?uS(this._dataReader,"Transaction.update",i._key,e,r,s):cS(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,a),this}delete(t){const e=br(t,this._firestore);return this._transaction.delete(e._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS extends _S{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=br(t,this._firestore),r=new Nc(this._firestore);return super.get(t).then((s=>new qe(this._firestore,r,e._key,s._document,new Rn(!1,!1),e.converter)))}}function TS(n,t,e){n=Ee(n,Wn);const r={...mS,...e};return(function(i){if(i.maxAttempts<1)throw new O(P.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(i,a,c){const l=new Te;return i.asyncQueue.enqueueAndForget((async()=>{const h=await tS(i);new QC(i.asyncQueue,h,c,a,l).ju()})),l.promise})(Ji(n),(s=>t(new yS(n,s))),r)}function ds(){return new Pc("serverTimestamp")}(function(t,e=!0){(function(s){nr=s})(Zn),Fn(new dn("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Wn(new oA(r.getProvider("auth-internal")),new uA(a,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jr(h.options.projectId,f)})(a,s),a);return i={useFetchStreams:e,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Be(kl,Vl,t),Be(kl,Vl,"esm2020")})();const Uo=(n="")=>n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),ES={apiKey:"AIzaSyC8oBLWyTpzWLLjWdZxo8YgQ1IcYICxdcU",authDomain:"auth.3dlocalprint.com",projectId:"threedlocalprint",storageBucket:"threedlocalprint.firebasestorage.app",messagingSenderId:"770972495364",appId:"1:770972495364:web:b1015eaaf0de32d9b84f51"},Ig=of(ES),Jn=nA(Ig),bh=new me,fs=rS(Ig),wi=Wi(fs,"filament_inventory","list"),Mc=Wi(fs,"filament_types","list"),vg=Wi(fs,"manufacturers","list"),Lc=Wi(fs,"admins","list"),Ch=(n="")=>n.trim().toLowerCase(),wS=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),IS=async()=>{const n=[{key:"indexedDB",value:Ff},{key:"local",value:Df},{key:"session",value:Ka}];let t=null;for(const e of n)try{return await $I(Jn,e.value),{persistence:e.key,error:null}}catch(r){t=r,console.warn(`Failed to set ${e.key} persistence`,r)}return{persistence:"none",error:t}},HS=async()=>{let n=null,t=null;try{t=await yv(Jn)}catch(r){n=r,console.error("Firebase redirect sign-in failed",r)}const e=await IS();return{redirectError:n,redirectResult:t,persistence:e}},zS=async()=>{try{return await lv(Jn,bh)}catch(n){if(!wS())throw n;return console.warn("Popup sign-in failed on iOS, falling back to redirect",n),mv(Jn,bh)}},WS=()=>WI(Jn),JS=n=>zI(Jn,n),GS=async()=>{const n=await Dc(wi);if(!n.exists())return null;const t=n.data();return Array.isArray(t.items)?t.items:[]},KS=n=>Yi(wi,{items:n,updatedAt:ds()},{merge:!0}),QS=async()=>{const n=await Dc(Mc);if(!n.exists())return null;const t=n.data();return Array.isArray(t.items)?t.items:[]},XS=n=>Oc(Mc,t=>{if(!t.exists()){n(null);return}const e=t.data();n(Array.isArray(e.items)?e.items:[])},t=>{console.error("Failed to subscribe to filament types",t),n(null)}),YS=n=>Yi(Mc,{items:n,updatedAt:ds()},{merge:!0}),ZS=async({location:n="",adjustments:t={}}={})=>{const e=Uo(n),r=Object.entries(t).filter(([,s])=>Number(s));if(!(!e||!r.length))return TS(fs,async s=>{const i=await s.get(wi);if(!i.exists())throw new Error("Filament inventory list not found.");const a=i.data(),c=Array.isArray(a.items)?a.items:[],l=c.map(f=>{if(Uo(f.location||"")!==e)return f;const p=f.filament_type_id||"";if(!p||!(p in t))return f;const m=Number(t[p])||0;if(!m)return f;const v=Number(f.spool_inventory)||0,S=Math.max(0,v+m);return{...f,spool_inventory:S}}),h=new Set(c.filter(f=>Uo(f.location||"")===e).map(f=>f.filament_type_id).filter(Boolean));r.forEach(([f,p])=>{const m=Number(p)||0;m<=0||h.has(f)||l.push({filament_type_id:f,location:n,spool_inventory:m})}),s.set(wi,{items:l,updatedAt:ds()},{merge:!0})})},tR=n=>Oc(vg,t=>{if(!t.exists()){n(null);return}const e=t.data();n(Array.isArray(e.items)?e.items:[])},t=>{console.error("Failed to subscribe to 🏭 manufacturers",t),n(null)}),eR=n=>Oc(Lc,t=>{if(!t.exists()){n(null);return}const e=t.data();n(Array.isArray(e.items)?e.items:[])},t=>{console.error("Failed to subscribe to admins",t),n(null)}),nR=n=>Yi(vg,{items:n,updatedAt:ds()},{merge:!0}),vS=async()=>{const n=await Dc(Lc);if(!n.exists())return[];const t=n.data();return Array.isArray(t.items)?t.items:[]},rR=async(n="")=>(await vS()).map(Ch).includes(Ch(n)),sR=n=>Yi(Lc,{items:n,updatedAt:ds()},{merge:!0}),Ag=tt((n,t,e,r,s)=>(Ag.updates(i=>{[n,t,e,r,s]=i}),n==="loading"?Co.class`panel auth-panel`(So("Checking login...")):n==="denied"?Co.class`panel auth-panel`(Zu("Access denied"),So.class`auth-warning`(()=>t||"This account"," is not authorized."),tl.class`auth-actions`(Yu({type:"button",class:"add-button",onClick:s},"Sign out"))):Co.class`panel auth-panel`(Zu("Sign in"),So("Use Google to access the filament inventory."),tl.class`auth-actions`(Yu({type:"button",class:"add-button",onClick:r},"Sign in with Google"))))),AS=n=>{const t=n==null?void 0:n.current;if(!t)return null;const e=t.cloneNode(!1);return t.replaceWith(e),n.current=e,e},iR=({rootRef:n,status:t,userEmail:e,adminEmail:r,onSignIn:s,onSignOut:i,setAppMounted:a})=>{const c=AS(n);if(!c)return;a&&a(!1),c.replaceChildren();const l=tt(()=>Ag(t,e,r,s,i));FT(l,c)},Sh="toast-root",bS=6e3,CS=()=>{let n=document.getElementById(Sh);return n||(n=document.createElement("div"),n.id=Sh,n.className="toast-root",document.body.appendChild(n),n)},SS=(n,t)=>{const e=document.createElement("div");return e.className=`toast toast-${t}`,e.setAttribute("role","status"),e.textContent=n,e},Bo=(n,t={})=>{if(!n)return;const{tone:e="info",duration:r=bS}=t,s=CS(),i=SS(n,e);s.appendChild(i);const a=window.setTimeout(()=>{i.remove()},r);i.addEventListener("click",()=>{window.clearTimeout(a),i.remove()},{once:!0})},oR={info:(n,t)=>Bo(n,{...t,tone:"info"}),success:(n,t)=>Bo(n,{...t,tone:"success"}),error:(n,t)=>Bo(n,{...t,tone:"error"})};export{de as $,XS as A,AS as B,FT as C,zS as D,US as E,M as F,NT as G,aT as H,xS as I,LS as J,tR as K,YS as L,Dc as M,Wi as N,fs as O,Yi as P,ds as Q,nR as R,eR as S,sR as T,QS as U,ZS as V,lT as W,Zh as X,z_ as Y,H_ as Z,Bt as _,kS as a,kh as a0,Q_ as a1,Gs as a2,_t as a3,we as a4,Yu as b,$S as c,tl as d,FS as e,NS as f,Co as g,MS as h,DS as i,Zu as j,Uo as k,BS as l,OS as m,PS as n,VS as o,So as p,KS as q,GS as r,jS as s,tt as t,WS as u,oR as v,iR as w,HS as x,JS as y,rR as z};
