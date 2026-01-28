var em=Object.defineProperty;var nm=(n,t,e)=>t in n?em(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Zt=(n,t,e)=>nm(n,typeof t!="symbol"?t+"":t,e);function mn(n){return n.renderCount=n.renderCount||0,n.varCounter=0,n.state={newer:{state:[],states:[]}},n.global={blocked:[]}}function Ws(){return it.stateConfig.support}function wi(n){return $t(n.context),it.stateConfig.support=n}const xt=function(){};let Kt=[];const Js=[];let ne=[],Yt=[],Or=[];const st={locks:0};function rm(n,t){t.textContent=n}function re(){st.locks>0||sm()}function sm(){++st.locks,am(),--st.locks,im()}function im(){cm();const n=Or;Or=[];for(const t of n)t[0](...t[1])}function om(){for(const n of Js)n[0](...n[1])}function am(){const n=Js.length;om(),Js.splice(0,n);for(const t of ne)t[0](...t[1]);for(const t of Yt)t[0](...t[1]);for(const t of Kt)t[0](...t[1])}function cm(){Kt=[],ne=[],Yt=[]}function Mr(n,t){Js.push([um,[n,t]])}function um(n,t){n.parentNode.removeChild(n)}function qe(n,t,e){n.parentNode.insertBefore(t,n)}function se(n,t){n.appendChild(t)}const Ln=typeof document=="object"&&document.createElement("div");function lm(n){return Ln.innerHTML=n,document.createTextNode(Ln.innerHTML)}function Sh(n,t,e=xt,r){const s=lm(t);qe(n,s),e(s)}function hm(n,t,e=xt){Ln.innerHTML=t;const r=document.createTextNode(Ln.textContent);qe(n,r),e(r)}function dm(n,t,e){Ln.innerHTML=t;const r=document.createTextNode(Ln.textContent);se(n,r),e(r)}const _n="";var Gs;(function(n){n.string="string",n.number="number",n.boolean="boolean",n.undefined="undefined"})(Gs||(Gs={}));var X;(function(n){n.function="function",n.date="date",n.unknown="unknown",n.object="object"})(X||(X={}));const fm=Date.now(),J={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",renderOnce:"renderOnce",stateRender:"stateRender",version:fm};function Ph(n){if(!n)return!1;switch(n.tagJsType){case J.dom:case J.tag:case J.templater:return!0}return!1}function Gr(n){const t=n==null?void 0:n.tagJsType;return t===J.tagComponent||t===J.stateRender}function pm(n){return Ii(n)&&typeof n.subscribe===X.function}function Gn(n){return n&&ze(n.then)}function ze(n){return typeof n===X.function}function Ii(n){return typeof n===X.object&&n!==null}function Wt(n){return Array.isArray(n)}function ma(n){const t=n.state;if(t&&t.newest&&t.newest)return t.newest;if(n.parentContext)return ma(n.parentContext)}function Kr(n){let t=n;for(;t.ownerSupport&&!Gr(t.templater);)t=t.ownerSupport;const r=t.context.state;return r&&r.newest||t}function gm(...n){return n}function kh(n){const t=it.stateConfig;return t.states[t.statesIndex]=n,++t.statesIndex,n(gm)}function mm(n){const t=it.stateConfig,e=t.statesIndex,l=Kr(t.prevSupport).context.state.older.states[e];let h=[];l(function(...m){return h=m,l.lastValues=h,m});const f=function(...m){return h};return t.states[t.statesIndex]=n,++t.statesIndex,n(f)}function Vh(n){$t(n);const t=it.stateConfig;t.handlers.handler=Dh,t.handlers.statesHandler=kh,t.rearray=[];const e=t.state=[],r=t.states=[];t.statesIndex=0;const s=n.state=n.state||{};s.newer={state:e,states:r}}class _m{}function ym(n){const[t]=n(_m),[e]=n(t);return[t,e]}function Tm(n){const t=n.callback;if(!t)return n.defaultValue;const[e]=ym(t);return e}function Em(){const n=it.stateConfig,e=n.rearray[n.state.length];return n.state.push(e),e.defaultValue}function Dh(n){var o,c;const t=it.stateConfig,e=oe();if(!e||!e.state){const l="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(l,{config:t,context:e,function:(c=(o=t.support)==null?void 0:o.templater.wrapper)==null?void 0:c.original}),new Error(l)}const r=e.state.newer;t.state=r.state;let s=n;if(typeof n===X.function&&(s=n()),typeof s===X.function){const l=s;s=function(...f){return l(...f)},s.original=l}const i={get:function(){return Tm(i)},defaultValue:s};return t.state.push(i),s}function wm(n){const t=new Z,e=r=>{const s=[],i=[],o=(p,m)=>{if(s[m]=!0,i[m]=p,s.length===n.length){for(const R of s)if(!R)return;r(i,h)}},c=[...n],h=c.shift().subscribe(p=>o(p,0)),f=c.map((p,m)=>p.subscribe(A=>o(A,m+1)));return h.subscriptions=f,h};return t.subscribeWith=e,t}function Im(n,t){const e=n.findIndex(r=>r.callback===t);e!==-1&&n.splice(e,1)}function vm(n,t,e){const r=Z.globalSubCount$;Z.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=t,s.subscriptions=[],s.unsubscribe=function(){return Am(s,e,t)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{t(i,s)},s}function Nh(n,t,e){const r=[...t],s=r.shift(),i=f=>{if(r.length)return Nh(f,r,e);e(f)};let o=i;const h=s(n,{setHandler:f=>o=f,next:i});o(h)}function Am(n,t,e){Im(t,e);const r=Z.globalSubCount$;Z.globalSubCount$.next(r.value-1),n.unsubscribe=()=>n;const s=n.subscriptions;for(const i of s)i.unsubscribe();return n}const Pn=class Pn{constructor(t,e){Zt(this,"onSubscription");Zt(this,"methods",[]);Zt(this,"isSubject",!0);Zt(this,"subscribers",[]);Zt(this,"subscribeWith");Zt(this,"value");Zt(this,"set",this.next.bind(this));this.onSubscription=e,arguments.length>0&&(this.value=t)}subscribe(t){const e=vm(this,t,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=t;t=i=>{Nh(i,this.methods,o=>s(o,e))}}return r(t)}return this.subscribers.push(e),this.onSubscription&&this.onSubscription(e),e}next(t){this.value=t,this.emit()}emit(){const t=this.value,e=this.subscribers;for(const r of e)r.callback(t,r)}toPromise(){return new Promise(t=>{this.subscribe((e,r)=>{r.unsubscribe(),t(e)})})}toCallback(t){const e=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>e.unsubscribe(),0),t(r)});return e}pipe(...t){const e=[];"value"in this&&e.push(this.value);const r=new Pn(...e);return r.setMethods(t),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(t){this.methods=t}static all(t){const e=t.map(r=>pm(r)?r:new Pn(r,i=>(i.next(r),i)));return wm(e)}};Zt(Pn,"globalSubCount$",new Pn(0));let Z=Pn;const bm=new Z(void 0,function(t){Ws()||t.next()}),it={stateConfig:{state:[],version:Date.now(),handlers:{handler:Dh,statesHandler:kh}},tagClosed$:bm};function Cm(n,t){const r=n.templater.tag.values;for(const s of t)Rm(r,s,n);return t}function Rm(n,t,e){if(t.deleted)return;const r=t.valueIndex,s=n[r],i=t.tagJsVar;$t(t),i.processUpdate(s,t,e,n),Ft(),t.value=s}function Oh(n,t){const e=n.context.contexts;Sm(n,t),++st.locks,Cm(n,e),--st.locks,re()}function Sm(n,t){const e=t.templater,r=t.templater.tag,s=e.values||r.values,i=n.templater.tag;i.values=s}function Pm(n,t){return jo(n,t)}function jo(n,t){if(n===null||typeof n!==X.object||t<0)return n;if(n instanceof Date)return new Date(n);if(n instanceof RegExp)return new RegExp(n);const e=Wt(n)?[]:Object.create(Object.getPrototypeOf(n));if(Wt(n))for(let r=0;r<n.length;r++)e[r]=jo(n[r],t-1);else for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=jo(n[r],t-1));return e}function Mh(n,t,e){return _a(n,t,e)}function _a(n,t,e){return n===t||Dm(n,t)||e<0?!0:typeof n===X.object&&typeof t===X.object?n instanceof Date&&t instanceof Date?n.getTime()===t.getTime():Wt(n)&&Wt(t)?Vm(n,t,e-1):Wt(n)||Wt(t)?!1:km(n,t,e-1):!1}function km(n,t,e){const r=Object.keys(n),s=Object.keys(t);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!_a(n[i],t[i],e-1))return!1;return!0}function Vm(n,t,e){if(n.length!==t.length)return!1;for(let r=0;r<n.length;r++)if(!_a(n[r],t[r],e-1))return!1;return!0}function Dm(n,t){return ze(n)&&ze(t)&&n.toString()===t.toString()}function Fu(n){return n.map(ya)}function ya(n,t){const e=n,r=n==null?void 0:n.tagJsType;if(r)switch(r){case J.signal:case J.subscribe:case J.stateRender:return;case J.dom:case J.tag:case J.templater:return Fu(e.values)}return Wt(n)?Fu(e):Pm(n,t)}function Lh(n,t){const e=n.length;for(let r=0;r<e;++r){const s=n[r],i=t[r];if(Wt(s)&&Wt(i)){if(s===i)continue;return 3}if(!(typeof s===X.function&&typeof i===X.function)){if(typeof s===X.object){if(!s&&!i)continue;if(typeof t===X.object){const o=Object.entries(s);for(const c of o)if(!Nm(c,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function Nm([n,t],e){const r=e[n];return typeof t===X.function&&typeof r===X.function?!0:r===t}function xh(n,t){const e=n.context.providers;if(e)for(const r of e)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===t&&r.children.splice(s,1);n.context.destroy$.next(),n.context.renderCount=0}function $o(n,t){for(const e of n){const r=e.lastArray;if(r){$o(r,t);continue}const s=e.value;if((s==null?void 0:s.tagJsType)===J.subscribe){s.destroy(e,t),e.deleted=!0;continue}const i=e.global;if(!i)continue;const o=e.state.newest,c=i.subscriptions;c&&c.forEach(Uh),Gr(o.templater)&&xh(o,i);const l=e.contexts;$o(l,o),i.deleted=!0}}function Fh(n,t=[],e=[]){for(const r of n){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){t.push(i);const c=s.subscriptions;c&&e.push(...c)}const o=r.contexts;o&&Fh(o,t,e)}return{tags:t,subs:e}}function Uh(n){n.unsubscribe()}function yn(n,t,e){const r=t.tagJsVar.tagJsType;return r&&["tag-conversion","element"].includes(r)?(t.tagJsVar.processUpdate(n,t,e,[]),t.value=n,0):n===t.value?0:(++t.updateCount,Va(t,n,e))}function Bh(n,t,e,r,s){const i=t.context;if(i.locked=3,e.target=e.target||r,$t(e),e.inputsHandler){const o=t.propsConfig;console.log("init tag props 55",{props:o}),e.inputsHandler(o)}e.tagJsVar.processInit(n,e,t,s,r),Ft(),e.value=n,delete i.locked}function vi(n){switch(n){case void 0:case!1:case null:return _n}return n}function Om(n,t){const e=vi(n);if(t.paint){t.paint[1][1]=e;return}const r=t.simpleValueElm;ne.push([rm,[e,r]])}function Mm(n,t){t.value=n,t.oldTagJsVar=t.tagJsVar,t.tagJsVar=Hh(n);const e=t.placeholder,r=vi(n),s=t.paint=[Sh,[e,r,function(o){t.simpleValueElm=o,delete t.paint},"processNowRegularValue"]];Kt.push(s)}function Ai(n){if(n.startsWith("class."))return"class";const t=Lm(n);return t!==!1?t:n.startsWith("style.")?"style":!1}function Lm(n){switch(n){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function jh(n,t,e,r){switch(r){case"autofocus":Or.push([$m,[e]]);return;case"autoselect":Or.push([jm,[e]]);return;case"style":{const s=n.split(".");ne.push([xm,[e,s,t]]);return}case"class":Fm(n,t,e);return}throw new Error(`Invalid special attribute of ${r}. ${n}`)}function xm(n,t,e){const r=t[1];n.style[r]=e,n.style.setProperty(r,e)}function Fm(n,t,e){const r=n.split(".");if(r.shift(),t){for(const s of r)ne.push([Um,[e,s]]);return}for(const s of r)ne.push([Bm,[e,s]])}function Um(n,t){n.classList.add(t)}function Bm(n,t){n.classList.remove(t)}function jm(n){n.select()}function $m(n){n.focus()}function Hm(n,t,e){typeof n[t]!="object"&&(n[t]={});for(const r in e){const s=e[r];ne.push([Wm,[n,t,r,s]])}if(n[t].setProperty)for(const r in e){const s=e[r];ne.push([zm,[n,t,r,s]])}}function qm(n,t,e){n.setAttribute(t,"")}function Kn(n,t,e){if(Ii(e))return Hm(n,t,e);$h(n,t,e)}function Ao(n,t,e){e?n[t]=!0:n[t]=!1}function $h(n,t,e){if(n[t]=e,e===void 0||e===!1||e===null){n.removeAttribute(t);return}n.setAttribute(t,e)}function zm(n,t,e,r){n[t].setProperty(e,r)}function Wm(n,t,e,r){n[t][e]=r}function Jm(n,t,e,r,s){const i=n(),o={tagJsType:"dynamic-attr",matchesInjection:h=>{const f=c.tagJsVar;if(f.matchesInjection)return f.matchesInjection(h,c)},hasValueChanged:(h,f,p)=>{const m=n();return c.tagJsVar.hasValueChanged(m,c,p)},processInit:xt,processInitAttribute:xt,destroy:(h,f)=>{c.tagJsVar.destroy(c,f)},processUpdate:(h,f,p,m)=>{++f.updateCount;const A=h();c.tagJsVar.processUpdate(A,c,p,m),c.value=A}},c={updateCount:0,isAttr:!0,target:r,parentContext:t,value:i,tagJsVar:Qn(i),valueIndex:-1,withinOwnerElement:!0,destroy$:new Z,render$:new Z},l={updateCount:0,isAttr:!0,contexts:[c],target:r,parentContext:t,value:n,tagJsVar:o,valueIndex:-1,withinOwnerElement:!0,destroy$:new Z,render$:new Z};return c.tagJsVar.processInitAttribute(e,i,r,c.tagJsVar,c,{},s),l}function Gm(n,t,e,r,s,i,o){return e.target=r,e.howToSet=s,e.attrName=n,e.isSpecial=o,t!=null&&t.tagJsType?Km(n,t,e,i,r):Ta(n,t,r,s,o,e)}function Km(n,t,e,r,s){t.processInitAttribute(n,t,s,t,e,r,Kn),e.tagJsVar=t}function Ta(n,t,e,r,s,i){if(typeof t=="function")return Jm(t,i,n,e,r);if(s)return jh(n,t,e,s);r(e,n,t)}function Qm(n,t,e,r,s,i){const o=t.tagJsVar,c=n;if(o.hasValueChanged(c,t,e)>0){o.destroy(t,e),r.removeAttribute(s);const h=Qn(n);h.isAttr=!0,h.processInitAttribute(s,n,r,h,t,e,i),t.tagJsVar=h;return}}function Xm(n,t,e,r,s,i,o){r.destroy=Ym,r.hasValueChanged=e_,r.processUpdate=(l,h,f)=>Qm(l,h,f,e,n,o);const c=Ai(n);Ta(n,t,e,o,c,s),s.tagJsVar=r}function Ym(n){const t=n.target,e=n.attrName;t.removeAttribute(e)}function Hh(n){return{tagJsType:"simple",value:n,processInitAttribute:Xm,processInit:t_,destroy:qh,hasValueChanged:n_,processUpdate:Zm}}function Zm(n,t,e){return n===t.value?0:Va(t,n,e)}function t_(n,t,e,r,s){const i=vi(n);r=t.placeholder;const o=t.paint=[Sh,[r,i,function(l){t.simpleValueElm=l,delete t.paint},"processSimpleValueInit"]];Kt.push(o)}function qh(n){if(!n.simpleValueElm&&n.paint){n.paint[0]=xt;return}const t=n.simpleValueElm;delete n.simpleValueElm,Mr(t,"deleteSimpleValue")}function e_(n,t){return n==null||n===t.value?0:6}function n_(n,t){return n==null||typeof n!==X.object?(Om(n,t),0):(qh(t),6)}function r_(n,t){return Wt(n)?0:(Jh(t),9)}function zh(n){return{tagJsType:"array",value:n,processInitAttribute:xt,processInit:i_,processUpdate:s_,hasValueChanged:r_,destroy:Jh}}function s_(n,t,e){if(++t.updateCount,Array.isArray(n)){Ks(t,n,e);return}yn(n,t,e)===0&&Ks(t,n,e)}function i_(n,t,e,r,s){Ks(t,n,e,s)}function Qn(n){return(n==null?void 0:n.tagJsType)?n:o_(n)}function o_(n){return Wt(n)?zh(n):Hh(n)}function Qr(n,t,e,r){return{updateCount:0,value:n,destroy$:new Z,render$:new Z,tagJsVar:Qn(n),withinOwnerElement:e,parentContext:r,valueIndex:r.varCounter}}function a_(n,t,e,r){const s=Qr(n,t,e,r);return t.push(s),++r.varCounter,s}function Ea(n,t,e,r,s){const i=document.createTextNode(_n),o=Qr(n,e,!0,t.context);return o.withinOwnerElement=!1,o.placeholder=i,s||(o.placeholder=r),Bh(n,t,o,s,r),s&&Yt.push([se,[s,i]]),o}function Ks(n,t,e,r){const s=n.lastArray===void 0;s&&(n.lastArray=[]);const i=n.lastArray;let o=n.placeholder,c=0;const l=[];if(!s){for(let f=0;f<i.length;++f){const p=i[f];if(p.value===null){l.push(p);continue}const m=l_(t,f,i,c);if(m===0){l.push(p);continue}if(m===2){f=f-1;continue}c=c+m}n.lastArray=l}const h=t.length;for(let f=0;f<h;++f)o=c_(t,f,n.lastArray,e,o,r).placeholder}function c_(n,t,e,r,s,i){const o=Wh(n[t]),c=e[t];if(c)return u_(o,c,e,r,t,s,i);const l=Ea(o,r,e,s,i);return e.push(l),o&&(l.arrayValue=(o==null?void 0:o.arrayValue)||l.arrayValue||t),l}function u_(n,t,e,r,s,i,o){if(e.length>s)return Array.isArray(n)?(t.tagJsVar.processUpdate(n,t,r,[]),t.value=n,t):(yn(n,t,r),t);const l=Ea(n,r,e,i,o);return e.push(l),l}function Wh(n){return typeof n=="function"&&n.tagJsType===void 0&&(n=n()),n}function l_(n,t,e,r){const s=n.length-1,i=t-r,o=i<0||s<i,c=e[t];if(o)return wa(c),1;c.arrayValue===void 0&&(c.arrayValue=t);const l=c.arrayValue,h=Wh(n[t]);return h_(l,h,c,e,t)}function h_(n,t,e,r,s){const i=t.arrayValue||s;return t&&n!==i?(wa(e),r.splice(s,1),2):0}function wa(n){const t=n.global;d_(t,n)}function d_(n,t){var e;if(n&&((e=t.state)!=null&&e.oldest)){const r=t.state.oldest;Xn(r,n);return}t.tagJsVar.destroy(t,{})}function Jh(n){++n.updateCount;const t=n.lastArray;Gh(n,t)}function Gh(n,t){for(let e=0;e<t.length;++e)wa(t[e]);delete n.lastArray}function Ia(n){for(let t=n.length-1;t>=0;--t){const e=n[t];f_(e),n.splice(t,1)}}function f_(n){const t=n.marker;t&&Mr(t,"destroyMarker");const e=n.domElement;Mr(e,"destroyClone")}function va(n,t){const e=n.contexts;p_(e,t),Aa(n)}function Aa(n){Ia(n.htmlDomMeta)}function p_(n,t){var e;for(const r of n){if(r.withinOwnerElement){const l=r.tagJsVar;if(l&&l.tagJsType==="host"){const h=r.supportOwner,f=l.destroy(r,h);Gn(f)&&t.push(f)}continue}const s=r.lastArray;if(s){Gh(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,Mr(i,"smartRemoveByContext");continue}const o=r.global;if(o===void 0)continue;if(o.deleted=!0,(e=r.state)==null?void 0:e.oldest){va(r,t);continue}}}function Xn(n,t){const e=n.context;t.deleted=!0,e.renderCount=0;const r=[],s=e.contexts;return $o(s,n),n.templater.wrapper&&xh(n,t),va(e,r),delete e.state,delete e.contexts,delete e.returnValue,delete e.providers,r}function bi(n,t){var r;const e=Uu(n,t);return!e&&((r=t.templater.tag)!=null&&r._innerHTML)&&Uu(n.outerHTML,t)?!0:e}function Uu(n,t){const e=n.templater,r=t.templater,s=(e==null?void 0:e.tag)||n,i=r.tag;if((e==null?void 0:e.tagJsType)===J.stateRender)return e.dom===r.dom;switch(s.tagJsType){case J.dom:return(i==null?void 0:i.tagJsType)!==J.dom?!1:g_(s,i);case J.tag:return m_(s,i,n,t)}throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function g_(n,t){const e=n.dom,r=t.dom;return e===r}function m_(n,t,e,r){const s=n.strings,i=t.strings;if(s.length!==i.length||!s.every((h,f)=>i[f].length===h.length))return!1;const c=e.templater.values||n.values,l=r.templater.values||t.values;return __(c,l)}function __(n,t){return n.length===t.length?!!t.every(function(i,o){const c=n[o];return typeof i===X.function&&typeof c===X.function?i.toString()===c.toString():!0}):!1}function Xr(n){++n.updateCount;const t=n.global,r=n.state.newest;delete n.inputsHandler,delete n.updatesHandler,Xn(r,t),y_(n)}function y_(n){n.htmlDomMeta=[],delete n.contexts,delete n.state,delete n.global,n.renderCount=0}function T_(n,t){var o,c,l;const e=(o=t.state)==null?void 0:o.newest,r=Ph(n),s=n;return r?bi(s,e)?0:7:(n==null?void 0:n.tagJsType)?((c=n.wrapper)==null?void 0:c.original)===((l=t.value.wrapper)==null?void 0:l.original)?0:88:8}function Ci(n,t){var c;const e=t.global,r=(c=t.state)==null?void 0:c.newest,s=Ph(n),i=n;if(s)return bi(i,r)?(qo(t,n,r),0):(Xn(r,e),mn(t),7);if(n==null?void 0:n.tagJsType){const f=t.state.newest.ownerSupport;return qo(t,n,f)===!0?0:88}return Xr(t),8}function E_(n,t,e,r,s,i,o){const c=document.createTextNode(_n),l=s>0,h=a_(n,t,l,r);return h.placeholder=c,h.target=i,i?Yt.push([se,[i,c]]):Kt.push([qe,[o,c,"attachDynamicDom.attachDynamicDom"]]),Bh(n,e,h,i,o),h}function w_(n,t){return I_(n,t)}function I_(n,t,e=[]){const r=n.context;e.push({support:n,renderCount:r.renderCount,provider:t});const s=t.children;for(let i=s.length-1;i>=0;--i){const o=s[i],c=o.context;e.push({support:o,renderCount:c.renderCount,provider:t})}return e}function v_(n){const e=n.context.providers;if(!e)return[];const r=[];for(const s of e){const i=s.owner,o=w_(i,s);r.push(...o.map(A_))}return r}function A_(n){return n.support}function b_(n){const t=n.context;return Sa(n.templater)?Yh(n):Xh(n,n,t)}function ba(n,t,e){return n}function C_(n){return typeof n!==X.object||!n||n.tagJsType}function R_(n,t,e,r,s,i){var c;const o=Object.keys(n);for(const l of o){const h=n[l],f=t[l],p=Ca(f,h,e,r,i,s+1);h===p||(c=Object.getOwnPropertyDescriptor(n,l))!=null&&c.set||(n[l]=p)}return n}function S_(n,t,e,r,s,i){for(let o=n.length-1;o>=0;--o){const c=n[o],l=t[o];n[o]=Ca(l,c,e,r,i,s+1)}return n}function Ca(n,t,e,r,s,i){return n==null||i>s?t:typeof n===X.function?t.mem?(n.mem=t.mem,t):(n.mem=t,n):C_(t)?t:Wt(t)?S_(t,n,e,r,i,s):R_(t,n,e,r,i,s)}function P_(n,t,e){var m;const r=e.global,s=e.state.newest,i=s.templater.wrapper;let o=t.templater.wrapper,c=!1;const l=t.templater.tagJsType,h=J.stateRender===l||J.renderOnce===l;if(h)c=t.templater.tagJsType===J.renderOnce||bi(s,t);else if(i&&o){((m=s.templater.tag)==null?void 0:m._innerHTML)&&(o=t.outerHTML);const R=i.original,V=o.original;c=R===V}const f=t.templater;if(!c){D_(e,f,n);return}if(h||hT(s,f)){if(e.locked){r.blocked.push(t);return}Lr(t),++e.renderCount}}function k_(n,t,e,r,s,i=-1){const o=t.context;if(!o.global||!o.state.newest){const A=ba(r);r.push(...A);const R=n.propsConfig;return R.castProps=A,r}t=o.state.newest||t;const f=t.propsConfig.castProps,p=[];for(let A=0;A<r.length;++A){const R=r[A],V=f[A],k=Ca(V,R,n,e,s,i+1);p.push(k)}const m=n.propsConfig;return m.castProps=p,p}function V_(n,t){const e=n.context,r=e.global;let s=-1;const i=e.providers=e.providers||[],o=i.length-1;for(;s++<o;){const c=i[s];let l=-1;const h=c.children.length-1;for(;l++<h;){const f=c.children[l];if(r===f.context.global){c.children.splice(l,1),c.children.push(t);return}}}}function D_(n,t,e){const r=n.global,s=n.state.oldest;Xn(s,r),mn(n),t.processInit(t,n,e,n.placeholder)}function Ho(n){const t=n.context,e=t.global,{subs:r,tags:s}=Fh(t.contexts);Bu(t);for(const o of s){if(o.context.global.deleted===!0)return;Bu(o.context)}e.subscriptions&&r.forEach(Uh),mn(t)}function Bu(n){n.global.deleted=!0,va(n,[]),delete n.contexts}function Kh(n,t,e,r){const s=t.original,i=n.tagJsType===J.stateRender,o=it.stateConfig;wi(e);let c;return i?c=n():(c=s(...r),typeof c===X.function&&c.tagJsType===void 0&&(c=c())),e.context.returnValue=c,e.returnValue=c,c.templater=n,n.tag=c,e.context.state.newer={...o},e.context.inputsHandler&&e.context.inputsHandler(r),Ft(),e}function N_(n,t){const e=n.context;++e.renderCount,O_(n.context),it.tagClosed$.next(t)}function O_(n){M_(n),L_()}function M_(n){const t=it.stateConfig,e=n||t.context;e.state=e.state||{},e.state.newer={...t};const r=t.support;e.state.newest=r}function L_(){const n=it.stateConfig;delete n.prevSupport,delete n.support,delete n.state,delete n.states,Ft()}function Qh(n,t,e,r){let s;const i=n.templater;if(i.tagJsType===J.stateRender){const o=i;s=Zr(i,e,r,n.appSupport),Kh(i,o,s)}else{const o=i.wrapper;s=o(n,e,t)}return N_(s,r),s.ownerSupport=n.ownerSupport,s}function x_(n){const t=it.stateConfig;return t.rearray=n,t.state=[],t.states=[],t.statesIndex=0,t.handlers.handler=Em,t.handlers.statesHandler=mm,t}function F_(n,t,e){x_(e);const r=it.stateConfig;r.prevSupport=t,wi(n)}function U_(n,t,e,r){const i=e.state.older.state;return F_(n,t,i),Qh(n,t,e,r)}function Ra(n,t,e,r){Vh(n.context),wi(n);const s=Qh(n,t,e,r);return Ft(),s}function B_(n){var r;const t=n==null?void 0:n.context,e=t==null?void 0:t.state;return(r=e==null?void 0:e.older)==null?void 0:r.state}function j_(n,t,e){let r;B_(t)?r=U_(n,t,e):r=Ra(n,t,e);const i=!t||bi(t,r);if(i){if(t){const o=t.templater.tag;if(o&&e.renderCount>0){const c=t==null?void 0:t.templater,l=c==null?void 0:c.tag;$_(o,t,l)}}}else{V_(t,r),Ho(t);const o=r.context;o.state.oldest=r,o.state.newest=r}return r.ownerSupport=n.ownerSupport,{support:r,wasLikeTags:i}}function $_(n,t,e){if(n.tagJsType===J.dom){const r=e==null?void 0:e.dom,s=n.dom;r!==s&&Ho(t);return}if(e){const r=e.strings;if(r){const s=r==null?void 0:r.length,i=n.strings.length;s!==i&&Ho(t)}}}function Xh(n,t,e){const r=j_(t,n,e);if(r.wasLikeTags){const s=e.state.oldest;return Oh(s,r.support),r.support}return yd(t,e)}function Sa(n){return J.templater===n.tagJsType}function Lr(n){const t=n.context,e=t.global,r=n.templater,s=Sa(r);if(t.locked)return e.blocked.push(n),n;if(s)return Yh(n);t.locked=4,e.blocked.length&&(n=e.blocked.pop(),e.blocked=[]);const i=Xh(t.state.newest,n,t);return delete t.locked,i}function Yh(n){const r=Kr(n).context.state.newest;return Lr(r)}function H_(n,t){const e=t.context.global;return e&&e.deleted?!1:!!q_(n,t)}function q_(n,t){const e=n.props,s=t.propsConfig.latest;if(Zh(e,s))return!0;switch(n.propWatch){case Lt.IMMUTABLE:return kd(e,s);case Lt.SHALLOW:return Lh(e,s)}return!Mh(e,s,Si)}function Zh(n,t){const e=n.length,r=t.length;return e!==r}function Qs(n,t=[]){const e=n.context,r=n.templater,s=Sa(r),i=n.ownerSupport;if(e.locked)return t.push(n),t;if(s)return Qs(i,t);const o=n.context.global;if(o&&o.deleted===!0)return t;const c=n,l=Gr(c.templater),h=n.templater.tagJsType,p=i&&h!==J.stateRender&&(!l||H_(c.templater,c));if(c.context.providers){const A=v_(c);t.push(...A)}return p?(Qs(i,t),l&&t.push(c),t):(t.push(c),t)}function Pa(n){++st.locks,n.forEach(z_),--st.locks,re()}function z_(n){const t=n.context;if(!t.global){t.tagJsVar.processUpdate(t.value,t,n.ownerSupport,[]);return}const r=t.state;Lr(r.newest)}function td(n,t,{resolvePromise:e,resolveValue:r}){return Gn(n)?n.then(W_(t,e)):r(n)}function W_(n,t){return e=>{const r=n.context,s=r.global;if(r.deleted===!0||(s==null?void 0:s.deleted)===!0)return t(e);const i=Qs(n);return Pa(i),t(e)}}function J_(n,t){const e=t.context.global,r=function(i,o){if(e.deleted!==!0)return G_(r.tagFunction,r.support,i,o)};return r.tagFunction=n,r.support=t,r}function G_(n,t,e,r){const s=Kr(t),i=s.context;i.locked=1;const o=n.apply(e,r);return delete i.locked,ed(o,s)}function ed(n,t){const e=t.context.global;if(e!=null&&e.deleted)return;const r=Qs(t);return Pa(r),td(n,t,{resolvePromise:X_,resolveValue:Y_})}const K_="no-data-ever",Q_="promise-no-data-ever";function X_(){return Q_}function Y_(){return K_}function nd(n,t,e){const r=e[t];if(r){let i=!1;if(n.originalStopPropagation=n.stopPropagation,n.stopPropagation=function(){i=!0,n.originalStopPropagation.call(n),n.stopPropagation=n.originalStopPropagation,delete n.originalStopPropagation},r(n),n.defaultPrevented||i)return}const s=e.parentNode;s&&nd(n,t,s)}function rd(n,t,e,r){const s=n.appElement,i=Z_(t);t==="blur"&&(t="focusout");const c=n.context.events;if(!c[t]){const l=function(f){nd(f,i,f.target)};c[t]=l,s.addEventListener(t,l)}e[i]=r,e[t]=r}function Z_(n){return n==="blur"&&(n="focusout"),"_"+n}function sd(n,t,e,r){const s=function(...i){return s.tagFunction(n,i)};s.tagFunction=t,s.support=e,rd(e.appSupport,r,n,s)}function id(n){return n==null||n===!1}function od(n,t,e,r,s,i,o){if(id(t))return;const c=[];if(typeof t===X.object){for(const l in t){const h=Ai(l),f=t[l],m=ud(l,f,n,e,r,Kn,i,o,h);m!==void 0&&(Array.isArray(m)?c.push(...m):c.push(m))}return c}t.length!==0&&s(e,t,_n)}function ty(n,t,e,r,s,i,o,c){if(e){if(id(t)||t===""){r.removeAttribute(e);return}if(typeof e===X.object)if(typeof t===X.object)for(const f in e)f in t||ne.push([ju,[r,f]]);else for(const f in e)ne.push([ju,[r,f]])}const l=od(n,t,r,s,i,o,c);l&&o.push(...l)}function ju(n,t){n.removeAttribute(t)}function ad(n,t,e,r){const s=t,i=n;if(i!=null&&i.tagJsType){const c=t.value;if(!(c!=null&&c.tagJsType)){i.isAttr=!0,$t(t),i.processInitAttribute(s.attrName,n,s.target,i,s,e,Kn),Ft(),s.tagJsVar=i;return}c.hasValueChanged(i,t,e);return}if(s.isNameOnly){ty(r,n,s.value,s.target,e,s.howToSet,[],s.parentContext),s.value=n;return}const o=s.target;iy(n,s.attrName,s,o,e,s.howToSet,s.isSpecial),t.value=n}const dt=":tagvar",ie=":",Xs=new RegExp(dt+"(\\d+)"+ie,"g");function cd(n){return n.search&&n.startsWith(dt)?n.search(Xs):-1}function ey(n,t,e,r,s,i,o){const c=r.length,l=[];t.forEach(f=>{if(cd(f)>=0){const m=r.length,A=Qn(f),R={updateCount:0,isAttr:!0,target:e,attrName:n,withinOwnerElement:!0,tagJsVar:A,valueIndex:o.varCounter,parentContext:o,destroy$:new Z,render$:new Z};A.processUpdate=function(U,$,H,at){++$.updateCount,h(at)};const V=i[m];R.value=V,l.push(R),++o.varCounter}});function h(f){const p=ny(t,f,c).join("");s(e,n,p)}return h(i),l}function ny(n,t,e){return n.reduce((r,s)=>{if(cd(s)>=0){const o=e++,c=t[o];return r.push(c),r}return r.push(s),r},[])}function ry(n,t,e,r,s,i,o,c,l){if(typeof t===X.function)return++s.varCounter,hd(t,o,n,e);const h=Qn(t),f={updateCount:0,isAttr:!0,target:e,attrName:n,howToSet:i,value:t,withinOwnerElement:!0,tagJsVar:h,destroy$:new Z,render$:new Z,valueIndex:l,parentContext:s};return r.push(f),h.processUpdate=ad,Gm(n,t,f,e,i,o,c),f.value=t,f}function $u(n){return Ii(n)&&"tagJsVar"in n?n.tagJsVar:-1}function sy(n,t,e,r,s,i,o,c,l){const h=Qr(n,t||[],!0,e);return h.target=c,h.valueIndex=s,h.isAttr=!0,h.isNameOnly=l,h.stateOwner=Kr(i),h.supportOwner=i,$t(h),r.processInitAttribute(o,n,c,r,h,i,Kn),Ft(),h.oldTagJsVar=h.tagJsVar,h.tagJsVar=r,h}function ud(n,t,e,r,s,i,o,c,l){const h=$u(n);let f=h>=0||t===void 0&&typeof n!="string",p=e[h];t!=null&&t.tagJsType?p=t:n!=null&&n.tagJsType&&(f=!0,p=n,t=n);const m=p;if(m!=null&&m.tagJsType)return sy(t,[],c,m,h,s,n,r,f);if(f){h===-1&&f&&(p=n);const R=Qr(p,[],!0,c);R.valueIndex=h,R.isAttr=!0,R.target=r,R.isNameOnly=!0,R.howToSet=i;const V=R.tagJsVar;V.processUpdate=ad;const k=od(e,p,r,s,i,o,c);return k&&o.push(...k),R}if(Array.isArray(t))return ey(n,t,r,[],i,e,s.context);const A=$u(t);if(A>=0){const R=e[A];return ry(n,R,r,[],c,i,s,l,A)}return Ta(n,t,r,i,l,c)}function iy(n,t,e,r,s,i,o){return ze(n)?oy(s,n,r,t,o,i):ld(n,r,t,o,i,s)}function ld(n,t,e,r,s,i){if(r!==!1){jh(e,n,t,r);return}switch(n){case void 0:case!1:case null:ne.push([ay,[t,e]]);return}if(ze(n))return sd(t,n,i,e);s(t,e,n)}function oy(n,t,e,r,s,i,o){var f;const c=n.templater.wrapper;return((c==null?void 0:c.tagJsType)||((f=c==null?void 0:c.original)==null?void 0:f.tagJsType))===J.renderOnce?ld(t,e,r,s,i,n):hd(t,n,r,e)}function hd(n,t,e,r){return n=J_(n,t),sd(r,n,t,e)}function ay(n,t){n.removeAttribute(t)}function dd(n,t,e,r,s){for(const i of n){const o=i[0],c=i[1],l=i[2]||!1;let h=i.length>1?Kn:qm;i[3]&&(h=i[3]);const f=s.contexts,p=ud(o,c,t,e,r,h,f,s,l)||void 0;typeof p=="object"&&(f.push(p),++s.varCounter)}}function cy(n,t,e,r,s,i,o){t.at&&dd(t.at,e,n,r,s),i?Yt.push([se,[i,n,"appendToAttachDomElement"]]):Kt.push([qe,[o,n,"insertBeforeAttachDomElement"]])}function fd(n,t,e,r,s,i,o){const c=e.context,l=c.contexts;r=c;const h=[];i&&o===void 0&&(o=document.createTextNode(_n),Yt.push([se,[i,o]]),i=void 0);for(let f=0;f<n.length;++f){const p=n[f],m=p.v;if(!isNaN(m)){const U=Number(m),$=t[U];if(ze($)&&$.tagJsType===void 0){++r.varCounter;continue}const at=E_($,l,e,r,s,i,o);at.valueIndex=U;continue}const R={};if(h.push(R),p.nn==="text"){uy(R,p,i,o);continue}const V=R.domElement=document.createElement(p.nn),k={updateCount:0,isAttrs:!0,target:V,parentContext:r,contexts:[],destroy$:new Z,render$:new Z,tagJsVar:{tagJsType:"new-parent-context"},valueIndex:-1,withinOwnerElement:!0};k.varCounter=0,cy(V,p,t,e,k,i,o),k.target=V,p.ch&&(R.ch=fd(p.ch,t,e,k,s+1,V,o).dom)}return{dom:h,contexts:l}}function uy(n,t,e,r){const s=n,i=s.tc=t.tc;if(e){Yt.push([dm,[e,i,function(c){s.domElement=c}]]);return}Kt.push([hm,[r,i,function(c){s.domElement=c}]])}const pd=/(:tagvar\d+:)/,Hu="ondoubleclick",ly=/([:_a-zA-Z0-9\-.]+)\s*(?:=\s*"([^"]*)"|=\s*(\S+))?/g,hy=/<\/?([a-zA-Z0-9-]+)((?:\s+[a-zA-Z_:*][\w:.-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)+\s*|\s*)\/?>/g;function dy(n){const t=[],e=[],r=[];let s=null,i=-1,o=0;const c=new RegExp(hy,"g");for(n=py(n);o<n.length;){const l=c.exec(n);if(!l)break;const[h,f,p]=l,m=h.startsWith("</"),A=h.endsWith("/>");if(o<l.index){const U=n.slice(o,l.index);if(U.trim()){const $=zu(U);for(let H of $)H.startsWith(dt)&&H.search(pd)>=0&&H.search(md)===-1&&(H=dt+ ++i+ie),qu(s,e,H)}}if(o=l.index+h.length,m){s=r.pop()||null;continue}const R=[];let V;for(;(V=ly.exec(p))!==null;)i=Ty(V,i,t,R);const k={nn:f};R.length&&(k.at=R),s?(s.ch||(s.ch=[]),s.ch.push(k)):e.push(k),A||(r.push(s),s=k)}if(o<n.length){const l=n.slice(o);if(l.trim()){const h=zu(l);for(const f of h)f.startsWith(dt)&&++i,qu(s,e,f)}}return e}const fy=new RegExp("(<!--[\\s\\S]*?-->)","g");function py(n){return n.replace(fy,function(t){return t.replace(/\[l t\]/g,"[l&nbsp;t]").replace(/\[g t\]/g,"[g&nbsp;t]").replace(/</g,"[l t]").replace(/>/g,"[g t]")})}function gy(n){return n.startsWith("on")?n.length===Hu.length&&n===Hu?"dblclick":n.slice(2,n.length):n}function qu(n,t,e){const r={nn:"text",tc:my(e)};_y(n,t,r)}function my(n){return n.replace(/(\[l t\]!--[\s\S]*?--\[g t\])/g,function(t){return t.replace(/\[l t\]/g,"<").replace(/\[g t\]/g,">").replace(/\[l&nbsp;t\]/g,"[l t]").replace(/\[g&nbsp;t\]/g,"[g t]")})}function _y(n,t,e){n?(n.ch||(n.ch=[]),n.ch.push(e)):t.push(e)}function zu(n){return n.split(pd).filter(yy)}function yy(n){return n!==""}function Ty(n,t,e,r){const s=n[1]||n[3]||n[5];let o=n[2]||n[4]||n[6];if(s===void 0)return t;const c=n[2]!=="",l=o===void 0&&c,h=s.toLowerCase(),f=h.startsWith("on")?gy(h):h;if(l){if(s.slice(0,dt.length)===dt){const H=dt+ ++t+ie;return e.push(["at",H]),r.push([H]),t}if(n[0].startsWith(s)&&n[0].slice(s.length,n[0].length).search(/\s+$/)>=0)return r.push([f]),t;const U=n[3];if(U.search(md)>=0){o=U;const H=[f,o];return r.push(H),t}else o=dt+ ++t+ie}c||(o=n[2]);const p=o.split(wy).filter(R=>R.length>0);p.length>1&&(o=p,p.forEach(R=>{R.search(Xs)>=0&&++t}));const m=[f,o],A=Ai(h);return A&&m.push(A),f==="style"?(r.unshift(m),t):(r.push(m),t)}const Ey=new RegExp(dt+"(\\d+)"+ie,"gi"),wy=new RegExp("("+dt+"\\d+"+ie+")","gi"),gd=dt.slice(0,dt.length-1),md=new RegExp(gd+"&#x72;(\\d+)"+ie,"gi"),Iy=gd+"&#x72;$1"+ie;function vy(n,t){const e=Ay(n,t).join("");return dy(e)}function Ay(n,t){return by(n,t)}function by(n,t){const e=[];for(let r=0;r<n.length;++r){const i=n[r].replace(Ey,Iy);if(r<t.length){e.push(i+dt+r+ie);continue}e.push(i)}return Cy(e,n,t),e}function Cy(n,t,e){const r=e.length-t.length;if(r>0)for(let s=r;s>0;--s)n.push(dt+(t.length+s-1)+ie)}const Ry="ch";function _d(n,t,e=[],r=[]){const s=n;for(let i=0;i<s.length;i++){const o=[...r,i],c=s[i];if(c.at){const l=c.at;c.at=Py(l,t)}if(c.ch){const l=c.ch,h=[...o,Ry];c.ch=_d(l,t,e,h)}i=Sy(c,t,s,i)}return s}function Sy(n,t,e,r){if(n.nn!=="text")return r;const s=n;let i=s.tc;if(typeof i!==Gs.string)return r;let o;for(;(o=Xs.exec(i))!==null;){const c=o[1],l=parseInt(c,10);if(!isNaN(l)&&l<t){const f=dt+l+ie,p=i.slice(o.index+f.length);e.splice(r,1,{nn:"text",v:l}),i=p,Xs.lastIndex=0}}return s.tc=i,r}function Py(n,t){const e=[];for(const r of n){const[s,i,o]=r;if(s.startsWith(dt)){const c=parseInt(s.replace(dt,""),10);if(!isNaN(c)&&c<t){e.push([{tagJsVar:c}]);continue}}if(typeof i===Gs.string&&i.startsWith(dt)){const c=parseInt(i.replace(dt,""),10);if(!isNaN(c)&&c<t){e.push([s,{tagJsVar:c},o]);continue}}e.push(r)}return e}function ky(n,t,e){return!!(e&&e.strings.length===n.length&&e.strings.every((s,i)=>s===n[i])&&e.values.length===t.length)}function Vy(n){const t=n.map(Dy);return t.push(n.length),Number(t.join(""))}function Dy(n){return n.length}const Wu={};function Ny(n,t){const e=Vy(n),r=Wu[e];if(r&&ky(n,t,r))return r.domMetaMap;const i=vy(n,t),o=_d(i,t.length),c={interpolation:void 0,string:void 0,strings:n,values:t,domMetaMap:o};return Wu[e]=c,o}function Ri(n,t,e){const r=n.context;r.state=r.state||{};const s=r.state;s.oldest=n,s.newest=n,r.state.older=r.state.newer,++st.locks;const i=Oy(n,n.context,t,e);return r.htmlDomMeta=i.dom,--st.locks,i}function Oy(n,t,e,r){const s=My(n),o=n.templater.tag.values,c=[],l=n.context;return t=l,l.contexts=c,fd(s,o,n,t,0,e,r)}function My(n){const e=n.templater.tag;if(e.tagJsType===J.dom)return e.dom;const r=e.strings;return Ny(r,e.values)}function yd(n,t){const e=t.state.newest,r=t.placeholder;return e.ownerSupport=n,Ri(e,void 0,r),e}function Td(n,t,e){const r=gT(n,t,t.appSupport,e);return e.contexts=e.contexts||[],r}function Ed(n,t,e,r,s){const i=Td(n,e,t);i.ownerSupport=e;const o=Ri(i,r,r?void 0:s);for(const c of o.dom)c.marker&&(r?Yt.push([se,[r,c.marker]]):Kt.push([qe,[s,c.marker,"subMarker"]])),c.domElement&&(r?Yt.push([se,[r,c.domElement,"subAppendTo"]]):Kt.push([qe,[s,c.domElement,"subInsertBefore"]]));return i}function Ly(n,t,e,r,s){if(t.state={},t.inputsHandler){const i=e.propsConfig;console.log("init tag props",{props:i}),t.inputsHandler(i)}return s?Ed(n,t,e,s,r):yd(e,t)}function wd(n,t){const e={tagJsType:J.templater,processInit:Ly,processInitAttribute:xt,processUpdate:yn,hasValueChanged:Ci,destroy:Xr,propWatch:n,props:t,key:function(s){return e.arrayValue=s,e},matchesInjection(r,s){var i;if(e.wrapper===r||((i=e.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return e}const xr=[];function xy(n,t){return function(s,i,o){const c=Id(n,s,o),l=s.ownerSupport,h=Zr(n,i,l,s.appSupport,c);return Kh(n,t,h,c)}}function Id(n,t,e){const r=n.propWatch===Lt.DEEP?Si:Vd,s=n.props,i=t.propsConfig;let o=i.castProps;const c=e==null?void 0:e.propsConfig,l=c==null?void 0:c.castProps;return l&&(i.castProps=l,o=k_(t,e,e.ownerSupport,s,r)),o||ba(s)}function Fy(n,t,e){const r=wd(Lt.DEEP);r.tagJsType=n.tagJsType;const s=Td(r,e,t);function i(){return r.tag=n(),s}return r.wrapper=i,i.tagJsType=n.tagJsType,i.original=n.original||n,s}function Uy(n,t,e,r,s){mn(t);const i=Fy(n,t,e);return Ra(i,void 0,t),Ed(i.templater,t,e,s,r)}function By(n,t){const e=Ri(n,t,void 0);for(const r of e.dom)r.domElement&&Yt.push([se,[t,r.domElement]]),r.marker&&Yt.push([se,[t,r.marker]]);return n}function jy(n,t){++n.updateCount;const e=n.subContext,r=$y(e,t);return delete n.subContext,r}function $y(n,t){n.deleted=!0;const e=n.appendMarker;if(e&&(Mr(e,"deleteSubContext"),delete n.appendMarker),!n.hasEmitted)return;const r=n.contextItem;return r.tagJsVar.destroy(r,t),76}function Hy(n,t,e,r){return t.hasEmitted=!0,t.contextItem=Ea(n,e,[],r)}function vd(n,t,e){var o;++t.updateCount;const s=n.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(o=t.subContext)==null?void 0:o.contextItem;Va(i,s,e)}function qy(n,t,e,r,s){t.subContext={},n.processUpdate=vd,zy(n,e,t,r,s)}function zy(n,t,e,r,s){const{appendMarker:i,insertBefore:o}=yT(s,r),c=e.subContext;c.appendMarker=i;const h=n.owner._innerHTML;h.processInit=h.oldProcessInit,Hy(h,c,t,o)}function Ad(){return{tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:xt,processInit:qy,processUpdate:vd,destroy:jy}}function Wy(n){if(!n)return xt;const t=oe();if(!t)throw new Error("output must be used in render sync with a parent context");const e=ma(t);if(!e)throw new Error("output must be used in render sync fashion");if(n.wrapped===!0)return n;const r=(...s)=>{const i=e.ownerSupport;return Jy(s,n,i.context)};return r.wrapped=!0,r}function Jy(n,t,e){$t(e);const s=t(...n);return Ft(),Or.push([()=>{const i=e.global;if(i===void 0||i.deleted===!0){++st.locks;const c=e;c.tagJsVar.processUpdate(c.value,c,void 0,[]),--st.locks,re();return}++st.locks,b_(void 0),--st.locks,re()},[]]),s}function Gy(n,t,e,r){const s={tagJsType:"tag-conversion",processInitAttribute:xt,processInit:(i,o,c)=>{if(n.inputsHandler){const h=e.propsConfig;console.log("init tag props 88",{props:h}),n.inputsHandler(h)}if(t.inputsHandler){const h=e.propsConfig;console.log("init tag props 22",{props:h}),t.inputsHandler(h)}if(o.inputsHandler){const h=e.propsConfig;console.log("init tag props 33",{props:h}),o.inputsHandler(h)}const l=n.returnValue;return t.tagJsVar.processInit(l,t,e,r.placeholder)},processUpdate:(i,o,c)=>{if(o.locked||o.deleted)return;++o.updateCount;const h=o.value.tagJsType,p=(i==null?void 0:i.tagJsType)!==h;if(T_(i,o)||p||s.hasValueChanged(i,o,e)){s.destroy(o,e),ka(i,o,c,789);return}o.locked=467,o.render$.next();const R=o.returnValue;Ky(t,i,o,R,e),delete o.locked},hasValueChanged:(i,o,c)=>{const l=n.returnValue;return t.tagJsVar.hasValueChanged(l,t,c)},destroy:(i,o)=>{++n.updateCount,n.deleted=!0,delete n.returnValue;const c=t.tagJsVar.destroy(t,e);return Gn(c)?c.then(()=>{const l=Ju(n);return re(),l}):(n.destroy$.next(),Ju(n))}};return s}function bd(n,t,e){const r=n.context,s=n.returnValue,i=Qn(s);delete r.global,r.contexts=[];const o={updateCount:0,value:s,tagJsVar:i,destroy$:new Z,render$:new Z,placeholder:r.placeholder,valueIndex:-1,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},c=Gy(r,o,n,e);return r.tagJsVar=c,i.processInit(s,o,n,e.placeholder),n}function Cd(n,t,e){const r=Zr(n,t,e,e==null?void 0:e.appSupport),s=r.propsConfig;if(s){const o=n.tagJsType!==J.tagComponent?[]:Id(n,r);s.castProps=o}return Ra(r,t.state.newest,t)}function Rd(n,t,e){const r=Cd(n,t,e),s=r.templater.tag;return["dom","html"].includes(s.tagJsType)?(Ri(r,void 0,t.placeholder),r):bd(r,r.ownerSupport,t)}function Ky(n,t,e,r,s){const i=ba(t.props);n.value.props=i;const o=s.propsConfig;if(o&&(o.castProps=i),(t==null?void 0:t.tagJsType)==="tagComponent"){if(n.inputsHandler=e.inputsHandler,n.updatesHandler=e.updatesHandler,e.inputsHandler){$t(e);const c=e.inputsHandler;c(i),Ft()}if(e.updatesHandler){$t(e);const c=e.updatesHandler;c(i),Ft()}}n.tagJsVar.processUpdate(r,n,s,[]),n.value=r}function Ju(n,t){delete n.returnValue,delete n.global,n.contexts=[],n.htmlDomMeta=[],delete n.inputsHandler,delete n.updatesHandler}function Qy(n,t,e,r){const s=Cd(n,t,e),i=s.templater.tag;return["dom","html"].includes(i.tagJsType)?By(s,r):bd(s,e,t)}function Sd(n,t,e,r,s){return mn(t),s?Qy(n,t,e,s):Rd(n,t,e)}function Xy(n){var s,i;const t=oe();if(!t)throw new Error("tag.inject can only be called within a tag or host context");let e=t.parentContext;for(;e;){const o=e.contexts;if(o){for(const c of o)if(c.isAttr&&((s=c.tagJsVar)!=null&&s.matchesInjection)){const l=c.tagJsVar.matchesInjection(n,c);if(l!==void 0)return l.returnValue}}if((i=e.tagJsVar)!=null&&i.matchesInjection&&e.tagJsVar.matchesInjection(n,e))return e.returnValue;e=e.parentContext}const r=`Could not find parent context for tag.inject ${n}`;throw console.error(r,{targetItem:n,context:t}),new Error(r)}function Xt(n){return it.stateConfig.handlers.handler(n)}function Yy(n){return Xt(()=>{var r;const t=n(),e=Ws();return(r=e==null?void 0:e.context)!=null&&r.global?td(t,e,{resolvePromise:Zy,resolveValue:tT}):t}),tt}function Zy(n){return n}function tT(n){return n}function eT(n){return Xt(function(){oe().destroy$.toCallback(n)}),tt}function nT(n){const t=oe(),e=i=>{const o=oe();$t(t);const c=n();return Ft(),$t(o),c},r=t.render$.subscribe(()=>e()),s=e();return tt.onDestroy(()=>r.unsubscribe()),s}let rT=0;const Cr=Pd("click"),kn=Pd("mousedown");function Pd(n){return function(e){const r=AT(e);return Xt(()=>{Md().addEventListener(n,r)}),r}}const sT={get:Md,onclick:Cr,click:Cr,onClick:Cr,mousedown:kn,onmousedown:kn,onMouseDown:kn};Yr("onclick",Cr);Yr("click",Cr);Yr("onMouseDown",kn);Yr("onmousedown",kn);Yr("mousedown",kn);function Yr(n,t){Object.defineProperty(tt,n,{get(){return t},set(e){return t(e)}})}var Lt;(function(n){n.DEEP="deep",n.SHALLOW="shallow",n.NONE="none",n.IMMUTABLE="immutable"})(Lt||(Lt={}));function tt(n,t=Lt.SHALLOW){const e=function(...o){const c=wd(t,o);c.tagJsType=J.tagComponent,c.processInit=Sd,c.hasValueChanged=Ci;const l=xy(c,e);return l.original=n,c.wrapper=l,c},r=n;e.original=n,r.tags=xr,r.setUse=it,r.ValueTypes=J,r.tagIndex=rT++,xr.push(e);const s=e;return s.inputs=i=>{const o=oe();return o.inputsHandler=i,!0},s.updates=i=>{const o=oe();return o.updatesHandler=i,!0},s.getInnerHTML=Ad,s}function iT(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function oT(){throw new Error("Do not call tag.renderOnce as a function but instead set it as: `(props) => tag.renderOnce = () => html`` `")}function aT(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}tt.element=sT;tt.renderOnce=oT;tt.use=aT;tt.deepPropWatch=tt;tt.route=iT;tt.inject=Xy;tt.output=Wy;tt.onInit=Yy;tt.onDestroy=eT;tt.onRender=nT;tt.getInnerHTML=Ad;tt.app=function(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};tt.immutableProps=function(t){return tt(t,Lt.IMMUTABLE)};tt.watchProps=function(t){return tt(t,Lt.SHALLOW)};Object.defineProperty(tt,"renderOnce",{set(n){n.tagJsType=J.renderOnce,n.processInit=Uy,n.processUpdate=yn,n.destroy=Xr,n.hasValueChanged=function(){return 0}}});Object.defineProperty(tt,"use",{set(n){n.original={setUse:it,tags:xr},n.tagJsType=J.stateRender,n.processInit=Sd,n.processUpdate=yn,n.hasValueChanged=Ci,n.destroy=Xr}});Object.defineProperty(tt,"promise",{set(n){CT(n)}});function cT(n,t,e){if(Zh(n,t))return 11;switch(e){case Lt.NONE:return 1;case Lt.SHALLOW:return Lh(n,t);case Lt.IMMUTABLE:return kd(n,t)}return uT(n,t)}function uT(n,t){let e=n,r=t;return e=[...n],r=[...t||[]],e.every((i,o)=>lT(i,o,e,r))?!1:7}function lT(n,t,e,r){const s=r[t];if(typeof n===X.object){const i={...n},o={...s||{}};return Object.entries(i).every(([l,h])=>Gu(h,o[l],()=>{delete i[l],delete o[l]}))}return Gu(n,s,function(){e.splice(t,1),r.splice(t,1)})}function Gu(n,t,e){if(typeof n!==X.function)return Mh(n,t,Si)?4:!1;if(typeof t!==X.function)return!1;const s=t==null?void 0:t.original;s&&(t=s),n.original&&(n=n.original);const o=n.toString(),c=t.toString();return o===c?(e(),5):(e(),6)}function hT(n,t){const e=t.props,s=n.propsConfig.latest;return cT(e,s,n.templater.propWatch)}function kd(n,t){const e=n.length;for(let r=0;r<e;++r){const s=n[r],i=t[r];if(s!==i)return 2}return!1}const Vd=3,Si=10;function dT(n,t,e){const r=n.templater;if(r.tagJsType!==J.stateRender){switch(r.propWatch){case Lt.IMMUTABLE:return n.propsConfig={latest:t,castProps:e};case Lt.SHALLOW:return n.propsConfig={latest:t.map(fT),castProps:e}}return n.propsConfig={latest:t.map(pT),castProps:e}}}function fT(n){return ya(n,Vd)}function pT(n){return ya(n,Si)}function Dd(n,t,e){const r={templater:n,context:t,castedProps:e,appSupport:void 0},s=t.global;return s.blocked=[],t.state||(t.state={newer:{state:[],states:[]}}),r}function Nd(n,t,e,r){t.appSupport=e||t;const s=n.props;return s&&(t.propsConfig=dT(t,s,r)),t}function gT(n,t,e,r,s){const i={templater:n,context:r,castedProps:s,appSupport:void 0};return i.ownerSupport=t,i.appSupport=e,i}function Zr(n,t,e,r,s){const i=Dd(n,t,s);return i.ownerSupport=e||i,i.ownerSupport.appSupport=r||i.ownerSupport,Nd(n,i,r,s)}function mT(n,t,e,r){let s=e.templater||e;const i=n.templater.tag;i&&i._innerHTML&&(s=e.outerHTML||e._innerHTML.outerHTML);const o=Zr(s,t,r,r.appSupport),l=n.context.state.oldest;Oh(l,o)}function qo(n,t,e){if(Gr(t))return n.global===void 0&&mn(n),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=t,_T(t,n,e),!0;if(n.global){n.oldTagJsVar=n.tagJsVar,n.tagJsVar=t;const i=n.state.newest;if(i)return typeof t===X.function||mT(i,n,t,e),!0}if(n.inputsHandler){const i=e.propsConfig;console.log("init tag props 55",{props:i}),n.inputsHandler(i)}return t.processInit(t,n,e,n.placeholder),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=t,!0}function _T(n,t,e){if(!t.state.newest){if(t.inputsHandler){const s=e.propsConfig;console.log("init tag props 66",{props:s}),t.inputsHandler(s)}n.processInit(n,t,e,t.placeholder);return}const r=Zr(n,t,e,e.appSupport);P_(e,r,t)}function ka(n,t,e,r){const s=n&&n.tagJsType;if(delete t.deleted,s){if(s===J.renderOnce)return;qo(t,n,e);return}if(Wt(n)){Ks(t,n,e),t.oldTagJsVar=t.tagJsVar,t.tagJsVar=zh(n);return}if(typeof n===X.function){t.value=n;return}r&&Mm(n,t)}function Va(n,t,e){const s=n.tagJsVar.hasValueChanged(t,n,e);return s===0||ka(t,n,e,s),s}function yT(n,t){let e;return n&&(e=t=document.createTextNode(_n),Yt.push([se,[n,t]])),{appendMarker:e,insertBefore:t}}class TT extends Z{constructor(e){super(e);Zt(this,"value");this.value=e}subscribe(e){const r=super.subscribe(e);return e(this.value,r),r}}const ET=((n,t)=>Da(n,t).pastResult),wT=n=>n;function IT(n){const t=(e,r)=>Da(e,r,n).pastResult;return t.setup=n,Na(()=>t,t),t}const Da=(n,t,{init:e,before:r,final:s=wT}={})=>{const i=Xt({pastResult:void 0,values:void 0}),c=typeof n=="function"?n():n,l=i.values===void 0;let h=0;l&&typeof n=="function"&&tt.onRender(()=>{if(++h,h===1)return;const p=n();f(p)});function f(p){if(i.values===void 0){if(r&&!r(p))return i.values=p,i;const V=(e||t)(p,i.values);return i.pastResult=s(V),i.values=p,i}if(p.every((R,V)=>R===i.values[V]))return i;if(r&&!r(p))return i.values=p,i;const A=t(p,i.values);return i.pastResult=s(A),i.values.length=0,i.values.push(...p),i}return f(c)};function Na(n,t){return Object.defineProperty(t,"noInit",{get(){const e=n();return e.setup.init=()=>{},e}}),Object.defineProperty(t,"asSubject",{get(){const e=n(),r=Xt(()=>Ws()),s=Xt(()=>new TT(void 0)),i=Xt(()=>({state:it.stateConfig.state,states:it.stateConfig.states})),o=(c,l)=>(Da(c,(f,p)=>{const m=Ws(),A=l(f,p);m!==r&&(i.state,r.context.state.older),s.next(A)},e.setup),s);return o.setup=e.setup,Na(()=>o,o),o}}),Object.defineProperty(t,"truthy",{get(){const e=n();return e.setup.before=r=>r.every(s=>s),e}}),t}Na(()=>IT({}),ET);class Oa extends Error{constructor(e,r,s={}){super(e);Zt(this,"details");this.name=Oa.name,this.details={...s,errorCode:r}}}class Ma extends Oa{constructor(t,e){super(t,"sync-callback-error",e),this.name=Ma.name}}function vT(n,t,e,...r){const s=e(...r),i=ma(n);if(!i)return s;if(i.context.global)Lr(i);else{const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}return Gn(s)&&s.finally(()=>{if(n.global)Lr(i);else{const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}}),s}function AT(n){const t=oe(),e=Xt({callback:n}),r=Xt(()=>Od(t,it.stateConfig,e));return e.callback=n,r}function Od(n,t,e){const r=t.states;return function(...i){const o=vT(n,r,e.callback,...i);return re(),o}}new Ma("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const bT=()=>{};function CT(n){const t=oe(),e=Xt({callback:bT}),r=Xt({current:void 0}),s=Xt(()=>Od(t,it.stateConfig,e));if(r.current!==n){r.current=n;const i=n;n.then(()=>{r.current===i&&(s(),console.log("fired promise trigger"))})}}function oe(){return it.stateConfig.context}function Md(){return oe().target}function $t(n){return it.stateConfig.context=n}function Ft(){delete it.stateConfig.context}function RT(n,t,e,r,s,i,o){const c=document.createTextNode(_n);if(xr.push(e.wrapper||{original:e}),i.placeholder=c,t.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const p=i.events;for(const A in p){const R=p[A];s.removeEventListener(A,R)}i.events={},++st.locks;const m=Xn(f,t);return--st.locks,re(),m},++st.locks;const l=document.createDocumentFragment();l.appendChild(c);const f=Rd(e,i,{appSupport:{appElement:s,context:i},appElement:s,context:i,isRoot:!0});return f.appElement=s,o&&(r.tag=f.templater.tag),--st.locks,re(),s.appendChild(l),{support:f,tags:xr,ValueTypes:J}}function ST(n,t,e){const r=Dd(n,t);return Nd(n,r,r),r.appElement=e,r.context=t,t.state.oldest||(t.state.oldest=r,t.state.older=t.state.newer),t.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const bo=[],Ku="__taggedjs_tag_element__";function PT(n,t,e){const r=t[Ku],s=bo.findIndex(m=>m.element===t);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:t}),s>=0){const m=bo[s].support;Xn(m,m.context.global),bo.splice(s,1)}t[Ku]=!0,t.innerHTML="";let i=(()=>h(e));i.propWatch=Lt.NONE,i.tagJsType=J.stateRender,i.processUpdate=yn,i.props=[e],i.isApp=!0;const o=kT(i,t),c=o.global,l=o.state.newest;Vh(l.context),wi(l);let h=n(e);const f=typeof h==X.function;f||(Gr(h)?(o.state.newest.propsConfig={latest:[e],castProps:[e]},i.propWatch=h.propWatch,i.tagJsType=h.tagJsType,i.wrapper=h.wrapper,i=h):(i.tag=h,h=n));const p=RT(n,c,i,h,t,o,f);return Ft(),p}function kT(n,t){const e={tagJsType:"templater",hasValueChanged:Ci,destroy:Xr,processInitAttribute:xt,processInit:function(){console.debug("do nothing app function")},processUpdate:yn},r={updateCount:0,value:n,valueIndex:0,varCounter:0,destroy$:new Z,render$:new Z,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:e};return mn(r),r.events={},ST(n,r,t),r}function VT(n){return Array.isArray(n)&&Object.prototype.hasOwnProperty.call(n,"raw")}function bt(n,t){return function(e,r,s){if(VT(r)){const i=r.reduce((o,c,l)=>o+c+(s[l]??""),"");return t(e,[n,i])}return t(e,[n,r])}}function DT(n,t,e){const r=ts(n,n.elementFunctions);return Ld(r,t,e)}function Ld(n,t,e){function r(s){return r.toCallback(s)}return r.toCallback=e,n.listeners.push([t,r]),n.allListeners.push([t,r]),n}function Tt(n,t){const e=ts(n,n.elementFunctions);return e.attributes.push(t),xa(e,t[1]),ln(t[0])?xn(t[0],e):ln(t[1])&&xn(t[1],e),e}function NT(n,t){const e=ts(n,n.elementFunctions);return Object.entries(t).map(r=>{e.attributes.push(r),xa(e,r[1]),ln(r[0])?xn(r[0],e):ln(r[1])&&xn(r[1],e)}),e}const OT=bt("style",Tt),MT=bt("id",Tt),LT=bt("class",Tt),xT=bt("href",Tt),FT=bt("value",Tt),UT=bt("placeholder",Tt),BT=bt("src",Tt),jT=bt("title",Tt),$T=bt("type",Tt),HT=bt("checked",Tt),qT=bt("disabled",Tt),zT=bt("selected",Tt),WT=bt("minLength",Tt),JT=bt("maxLength",Tt),GT=bt("open",Tt),KT=bt("cellpadding",Tt),QT=bt("cellspacing",Tt),XT=bt("border",Tt);function xd(n,t){return n.attributes.push(t),xa(n,t[1]),ln(t[0])?xn(t[0],n):ln(t[1])&&xn(t[1],n),n}function La(n){function t(r){return function(s){return DT(n,r,s)}}return{onClose:t("onclose"),onCancel:t("oncancel"),onDoubleClick:t("ondblclick"),onClick:t("click"),onBlur:t("onblur"),onChange:t("onchange"),onInput:t("oninput"),contextMenu:t("contextmenu"),onMousedown:t("onmousedown"),onMouseup:t("onmouseup"),onMouseover:t("onmouseover"),onMouseout:t("onmouseout"),onKeydown:t("onkeydown"),onKeyup:t("onkeyup"),attr:(...r)=>Tt(n,r),attrs:r=>NT(n,r),key:function(r){return this.arrayValue=r,this},style:wt(OT,n),id:wt(MT,n),class:wt(LT,n),href:wt(xT,n),value:wt(FT,n),placeholder:wt(UT,n),src:wt(BT,n),type:wt($T,n),title:wt(jT,n),checked:wt(HT,n),disabled:wt(qT,n),selected:wt(zT,n),cellSpacing:wt(QT,n),cellPadding:wt(KT,n),border:wt(XT,n),minLength:wt(WT,n),maxLength:wt(JT,n),open:wt(GT,n)}}function xa(n,t){let e=1;t!=null&&typeof t!="function"&&typeof t.length=="number"&&(e+=t.length),n.contentId+=e}function wt(n,t){return((e,...r)=>n(t,e,r))}function YT(n,t,e){if(Ii(e)){Object.entries(e).forEach(([r,s])=>{s?n.classList.add(r):n.classList.remove(r)});return}$h(n,t,e)}function xn(n,t){t.contexts||(t.contexts=[]),t.contexts.push(n)}function ln(n){return Array.isArray(n)||ze(n)||(n==null?void 0:n.tagJsType)}function Ps(n,t){return(e,r)=>xd(e,[n,r,!1,t])}function lt(n){return(t,e)=>Ld(t,n,e)}const ZT={onClick:lt("click"),onDoubleClick:lt("ondblclick"),onDblClick:lt("ondblclick"),onBlur:lt("onblur"),onChange:lt("onchange"),onCancel:lt("oncancel"),onClose:lt("onclose"),onInput:lt("oninput"),onMousedown:lt("onmousedown"),onMouseDown:lt("onmousedown"),onMouseup:lt("onmouseup"),onMouseUp:lt("onmouseup"),onMouseover:lt("onmouseover"),onMouseOver:lt("onmouseup"),onMouseout:lt("onmouseout"),onMouseOut:lt("onmouseout"),onKeyup:lt("onkeyup"),onKeyUp:lt("onkeyup"),onKeydown:lt("onkeydown"),onKeyDown:lt("onkeydown")},Qu={checked:Ps("checked",Ao),disabled:Ps("disabled",Ao),selected:Ps("selected",Ao),class:Ps("class",YT),...ZT};function tE(n,t){return Object.entries(t).reduce((r,[s,i])=>s in Qu?Qu[s](n,i):xd(n,[s,i,!1,Kn]),n)}function eE(n){return Fd(n)}function Fd(n){const t=nE(n.attributes),e=Ud(n.innerHTML);return`<${n.tagName}${t}>${e}</${n.tagName}>`}function nE(n){if(!n||n.length===0)return"";const t=[];return n.forEach(e=>{const r=e[0];if(typeof r!="string"||r.length===0)return;const s=jd(e[1]);if(s===!0){t.push(r);return}s===!1||s===void 0||s===null||t.push(`${r}="${Bd(String(s))}"`)}),t.length>0?` ${t.join(" ")}`:""}function Ud(n){return!n||n.length===0?"":n.map(t=>{const e=jd(t);return rE(e)?Fd(e):Array.isArray(e)?Ud(e):e==null||e===!1?"":Bd(String(e))}).join("")}function rE(n){return!!n&&typeof n=="object"&&typeof n.tagName=="string"}function Bd(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function jd(n){return typeof n=="function"?n():n}function $d(n,t){++n.updateCount;const e=n.contexts,r=[];if(e.length&&(Ys(e,t,r),e.length=0,r.length)){const s=n.htmlDomMeta;return n.deleted=!0,Promise.all(r).then(()=>{++st.locks,Ia(s),n.htmlDomMeta=[],--st.locks,re()})}Aa(n),n.htmlDomMeta=[],delete n.contexts,n.deleted=!0}function Ys(n,t,e){const r=n[0],s=r.tagJsVar.destroy(r,t);if(r.deleted=!0,Gn(s))return e.push(s.then(()=>{if(n.length>1)return Ys(n.slice(1,n.length),t,e)}));if(r.htmlDomMeta&&(Aa(r),delete r.htmlDomMeta),n.length>1)return Ys(n.slice(1,n.length),t,e)}function Hd(n,t,e){if(t.locked||t.deleted===!0)return;if(++t.updateCount,Fa(n,t)){$d(t,e),t.htmlDomMeta=[],delete t.deleted,ka(n,t,e,789);return}const i=t.contexts,o=n.contexts||[],c=t.tagJsVar.allListeners;if(n.allListeners.forEach((h,f)=>{const p=c[f][1];p.toCallback=h[1].toCallback}),i.length!==o.length)throw console.info("context mismatch",{value:n,context:t,conValues:i.map(h=>h.value),vContexts:o,deleted:t.deleted}),new Error("super issue discovered");t.locked=79,i.forEach((h,f)=>{h.tagJsVar.processUpdate(o[f],h,e)}),delete t.locked}function Fa(n,t){if(t.value===n)return 0;if(!n||n.tagJsType!=="element")return 1;const s=n.contentId,i=t.value.contentId;if(s!==i)return 1;const o=n.innerHTML.length,c=t.value.innerHTML.length;return o!==c?1:0}function sE(n,t,e,r,s){const i=[],o={updateCount:0,parentContext:e,contexts:i,target:t,value:n,htmlDomMeta:[],tagJsVar:{tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:xt,processInitAttribute:xt,destroy:(p,m)=>{++o.updateCount,i.forEach(A=>A.tagJsVar.destroy(A,m))},processUpdate:(p,m,A,R)=>{++o.updateCount,$t(h);let V=p(h);const k=o.underFunction;delete o.underFunction,V instanceof Function&&!V.tagJsType&&(k&&V.toString()===k.toString()?V=h.value:(o.underFunction=V,V=V()));const U=h.tagJsVar.processUpdate(V,h,A,R);return h.value=V,m.value=p,Ft(),U}},valueIndex:-1,withinOwnerElement:!0,destroy$:new Z,render$:new Z};$t(o);let c=n();ze(c)&&!c.tagJsType&&(o.underFunction=c,c=c());const h=zd(c,o,t,r,s);return e.contexts.push(o),Ft(),h}function qd(n,t,e,r,s){n.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return Xu(i,r,s);case"function":{if(i.tagJsType==="element")break;return sE(i,r,t,e,s)}}if(i==null)return Xu(i,r,s);if(i.tagJsType==="element"){const c=Wd(i,t,e,t.contexts);Kt.push([s,[r,c]]),t.htmlDomMeta.push({nn:c.tagName,domElement:c,at:[]});return}return zd(i,t,r,e,s)})}function zd(n,t,e,r,s){const i=Qr(n,[],!0,t);if(t.contexts.push(i),i.target=e,i.placeholder=document.createTextNode(""),Kt.push([s,[e,i.placeholder]]),$t(i),i.inputsHandler){const c=r.propsConfig;console.log("init tag props 44",{props:c}),i.inputsHandler(c)}if(t.inputsHandler){const c=r.propsConfig;console.log("init tag props 00",{props:c})}return i.tagJsVar.processInit(n,i,r,i.placeholder),Ft(),i}function Xu(n,t,e){const r=vi(n),s=document.createTextNode(r);return Kt.push([e,[t,s]]),s}function Wd(n,t,e,r){const s=document.createElement(n.tagName);return t.target=s,n.attributes.forEach(i=>{const o=i[0];typeof o=="string"&&(i[2]=Ai(o))}),dd(n.attributes,[],s,e,t),qd(n.innerHTML,t,e,s,se),n.listeners.forEach((i,o)=>iE(n,o,e,i,s)),s}function iE(n,t,e,r,s){const i=(...o)=>{const l=n.listeners[t][1],h=Kr(e),f=h.context.updateCount;h.context.locked=1,++st.locks;const p=l(...o);return--st.locks,delete h.context.locked,f===h.context.updateCount?ed(p,h):(re(),Gn(p)?p.then(()=>{const A=h.context.state.newest;return Pa([A]),"promise-no-data-ever"}):"no-data-ever")};rd(e.appSupport,r[0],s,i)}function oE(n,t,e,r){t.contexts=t.contexts||[],t.htmlDomMeta=[],t.locked=34;const s=Wd(n,t,e,t.contexts);delete t.locked,Kt.push([qe,[r,s,"htmlTag.processInit"]]);const i={nn:n.tagName,domElement:s,at:n.attributes};return t.htmlDomMeta=[i],s}function M(n){const e=ts({tagJsType:"element",processInitAttribute:xt,processInit:oE,destroy:$d,processUpdate:Hd,hasValueChanged:Fa,tagName:n,innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:La});return e.tagName=n,e}function ts(n,t){const e=(...r)=>{const s={...e};return s.attributes=[...e.attributes],s.listeners=[...e.listeners],s.allListeners=[...e.allListeners],r.length>0&&typeof r[0]=="object"&&!Array.isArray(r[0])&&!r[0].tagJsType&&(tE(s,r[0]),r.splice(0,1)),s.innerHTML=r,r.forEach(i=>{if(ln(i)){if(i.tagJsType==="element"){s.allListeners.push(...i.allListeners),i.contexts&&(s.contexts?s.contexts.push(...i.contexts):s.contexts=i.contexts);return}aE(i,s)}}),s};return Object.assign(e,n),Object.assign(e,La(e)),e.attributes=[...n.attributes],e.listeners=[...n.listeners],e.allListeners=[...n.allListeners],e.toString=function(){return eE(this)},e}function aE(n,t){t.contexts||(t.contexts=[]),t.contexts.push(n)}const bR=cE();function cE(){const t=ts({tagJsType:"element",processInitAttribute:xt,processInit:uE,destroy:lE,processUpdate:Hd,hasValueChanged:Fa,tagName:"no-element",innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:La});return t.tagName="no-element",t}function uE(n,t,e,r){t.contexts=t.contexts||[],t.htmlDomMeta=[],qd(n.innerHTML,t,e,r,qe)}function lE(n,t){++n.updateCount;const e=n.contexts,r=[];if(e.length&&(Ys(e,t,r),e.length=0,r.length)){const s=n.htmlDomMeta;return Promise.all(r).then(()=>{++st.locks,Ia(s),--st.locks,re()})}}const Yu=M("button"),CR=M("select"),RR=M("option"),SR=M("input");M("textarea");M("html");M("head");M("title");M("meta");M("link");M("style");M("body");M("script");M("noscript");M("hr");const PR=M("h1"),Zu=M("h2");M("h3");M("h4");M("h5");M("h6");M("ol");M("ul");M("li");const tl=M("div"),kR=M("main"),Co=M("section"),VR=M("header");M("footer");M("form");M("fieldset");M("legend");const DR=M("dialog"),NR=M("pre");M("table");M("tr");M("td");M("th");M("thead");M("tbody");M("tfoot");M("iframe");const OR=M("a"),MR=M("img");M("br");const LR=M("label"),Ro=M("p");M("small");const xR=M("span"),FR=M("strong");M("b");M("sup");M("nav");M("figure");M("figcaption");M("code");M("canvas");M("svg");M("path");M("polygon");M("rect");const hE=()=>{};var el={};/**
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
 */const Jd=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},dE=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],o=n[e++],c=n[e++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[e++],o=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,A=h&63;l||(A=64,o||(m=64)),r.push(e[f],e[p],e[m],e[A])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Jd(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):dE(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const h=s<n.length?e[n.charAt(s)]:64;++s;const p=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new fE;const m=i<<2|c>>4;if(r.push(m),h!==64){const A=c<<4&240|h>>2;if(r.push(A),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pE=function(n){const t=Jd(n);return Gd.encodeByteArray(t,!0)},Zs=function(n){return pE(n).replace(/\./g,"")},Kd=function(n){try{return Gd.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function gE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mE=()=>gE().__FIREBASE_DEFAULTS__,_E=()=>{if(typeof process>"u"||typeof el>"u")return;const n=el.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Kd(n[1]);return t&&JSON.parse(t)},Pi=()=>{try{return hE()||mE()||_E()||yE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Qd=n=>{var t,e;return(e=(t=Pi())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},TE=n=>{const t=Qd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Xd=()=>{var n;return(n=Pi())==null?void 0:n.config},Yd=n=>{var t;return(t=Pi())==null?void 0:t[`_${n}`]};/**
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
 */class EE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function wE(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Zs(JSON.stringify(e)),Zs(JSON.stringify(o)),""].join(".")}const Rr={};function IE(){const n={prod:[],emulator:[]};for(const t of Object.keys(Rr))Rr[t]?n.emulator.push(t):n.prod.push(t);return n}function vE(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let nl=!1;function tf(n,t){if(typeof window>"u"||typeof document>"u"||!Yn(window.location.host)||Rr[n]===t||Rr[n]||nl)return;Rr[n]=t;function e(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=IE().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,A){m.setAttribute("width","24"),m.setAttribute("id",A),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{nl=!0,o()},m}function f(m,A){m.setAttribute("id",A),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=vE(r),A=e("text"),R=document.getElementById(A)||document.createElement("span"),V=e("learnmore"),k=document.getElementById(V)||document.createElement("a"),U=e("preprendIcon"),$=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;c(H),f(k,V);const at=h();l($,U),H.append($,R,k,at),document.body.appendChild(H)}i?(R.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function bE(){var t;const n=(t=Pi())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function SE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PE(){const n=Dt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kE(){return!bE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VE(){try{return typeof indexedDB=="object"}catch{return!1}}function DE(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const NE="FirebaseError";class Ce extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=NE,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?OE(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ce(s,c,r)}}function OE(n,t){return n.replace(ME,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ME=/\{\$([^}]+)}/g;function LE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function hn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],o=t[s];if(rl(i)&&rl(o)){if(!hn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function rl(n){return n!==null&&typeof n=="object"}/**
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
 */function ns(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function xE(n,t){const e=new FE(n,t);return e.subscribe.bind(e)}class FE{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");UE(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=So),s.error===void 0&&(s.error=So),s.complete===void 0&&(s.complete=So);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UE(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function So(){}/**
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
 */function At(n){return n&&n._delegate?n._delegate:n}class dn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class BE{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new EE;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($E(t))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=an){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=an){return this.instances.has(t)}getOptions(t=an){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jE(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=an){return this.component?this.component.multipleInstances?t:an:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jE(n){return n===an?void 0:n}function $E(n){return n.instantiationMode==="EAGER"}/**
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
 */class HE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new BE(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const qE={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},zE=z.INFO,WE={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},JE=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=WE[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ua{constructor(t){this.name=t,this._logLevel=zE,this._logHandler=JE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const GE=(n,t)=>t.some(e=>n instanceof e);let sl,il;function KE(){return sl||(sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QE(){return il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ef=new WeakMap,zo=new WeakMap,nf=new WeakMap,Po=new WeakMap,Ba=new WeakMap;function XE(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(Fe(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&ef.set(e,n)}).catch(()=>{}),Ba.set(t,n),t}function YE(n){if(zo.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});zo.set(n,t)}let Wo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return zo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||nf.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Fe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ZE(n){Wo=n(Wo)}function tw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ko(this),t,...e);return nf.set(r,t.sort?t.sort():[t]),Fe(r)}:QE().includes(n)?function(...t){return n.apply(ko(this),t),Fe(ef.get(this))}:function(...t){return Fe(n.apply(ko(this),t))}}function ew(n){return typeof n=="function"?tw(n):(n instanceof IDBTransaction&&YE(n),GE(n,KE())?new Proxy(n,Wo):n)}function Fe(n){if(n instanceof IDBRequest)return XE(n);if(Po.has(n))return Po.get(n);const t=ew(n);return t!==n&&(Po.set(n,t),Ba.set(t,n)),t}const ko=n=>Ba.get(n);function nw(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,t),c=Fe(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fe(o.result),l.oldVersion,l.newVersion,Fe(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const rw=["get","getKey","getAll","getAllKeys","count"],sw=["put","add","delete","clear"],Vo=new Map;function ol(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Vo.get(t))return Vo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=sw.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rw.includes(e)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[e](...c),s&&l.done]))[0]};return Vo.set(t,i),i}ZE(n=>({...n,get:(t,e,r)=>ol(t,e)||n.get(t,e,r),has:(t,e)=>!!ol(t,e)||n.has(t,e)}));/**
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
 */class iw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ow(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ow(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jo="@firebase/app",al="0.14.6";/**
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
 */const Ie=new Ua("@firebase/app"),aw="@firebase/app-compat",cw="@firebase/analytics-compat",uw="@firebase/analytics",lw="@firebase/app-check-compat",hw="@firebase/app-check",dw="@firebase/auth",fw="@firebase/auth-compat",pw="@firebase/database",gw="@firebase/data-connect",mw="@firebase/database-compat",_w="@firebase/functions",yw="@firebase/functions-compat",Tw="@firebase/installations",Ew="@firebase/installations-compat",ww="@firebase/messaging",Iw="@firebase/messaging-compat",vw="@firebase/performance",Aw="@firebase/performance-compat",bw="@firebase/remote-config",Cw="@firebase/remote-config-compat",Rw="@firebase/storage",Sw="@firebase/storage-compat",Pw="@firebase/firestore",kw="@firebase/ai",Vw="@firebase/firestore-compat",Dw="firebase",Nw="12.6.0";/**
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
 */const Go="[DEFAULT]",Ow={[Jo]:"fire-core",[aw]:"fire-core-compat",[uw]:"fire-analytics",[cw]:"fire-analytics-compat",[hw]:"fire-app-check",[lw]:"fire-app-check-compat",[dw]:"fire-auth",[fw]:"fire-auth-compat",[pw]:"fire-rtdb",[gw]:"fire-data-connect",[mw]:"fire-rtdb-compat",[_w]:"fire-fn",[yw]:"fire-fn-compat",[Tw]:"fire-iid",[Ew]:"fire-iid-compat",[ww]:"fire-fcm",[Iw]:"fire-fcm-compat",[vw]:"fire-perf",[Aw]:"fire-perf-compat",[bw]:"fire-rc",[Cw]:"fire-rc-compat",[Rw]:"fire-gcs",[Sw]:"fire-gcs-compat",[Pw]:"fire-fst",[Vw]:"fire-fst-compat",[kw]:"fire-vertex","fire-js":"fire-js",[Dw]:"fire-js-all"};/**
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
 */const ti=new Map,Mw=new Map,Ko=new Map;function cl(n,t){try{n.container.addComponent(t)}catch(e){Ie.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fn(n){const t=n.name;if(Ko.has(t))return Ie.debug(`There were multiple attempts to register component ${t}.`),!1;Ko.set(t,n);for(const e of ti.values())cl(e,n);for(const e of Mw.values())cl(e,n);return!0}function ja(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Qt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ue=new es("app","Firebase",Lw);/**
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
 */class xw{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
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
 */const Zn=Nw;function rf(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Go,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Ue.create("bad-app-name",{appName:String(s)});if(e||(e=Xd()),!e)throw Ue.create("no-options");const i=ti.get(s);if(i){if(hn(e,i.options)&&hn(r,i.config))return i;throw Ue.create("duplicate-app",{appName:s})}const o=new HE(s);for(const l of Ko.values())o.addComponent(l);const c=new xw(e,r,o);return ti.set(s,c),c}function sf(n=Go){const t=ti.get(n);if(!t&&n===Go&&Xd())return rf();if(!t)throw Ue.create("no-app",{appName:n});return t}function Be(n,t,e){let r=Ow[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ie.warn(o.join(" "));return}Fn(new dn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Fw="firebase-heartbeat-database",Uw=1,Fr="firebase-heartbeat-store";let Do=null;function of(){return Do||(Do=nw(Fw,Uw,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Fr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),Do}async function Bw(n){try{const e=(await of()).transaction(Fr),r=await e.objectStore(Fr).get(af(n));return await e.done,r}catch(t){if(t instanceof Ce)Ie.warn(t.message);else{const e=Ue.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ie.warn(e.message)}}}async function ul(n,t){try{const r=(await of()).transaction(Fr,"readwrite");await r.objectStore(Fr).put(t,af(n)),await r.done}catch(e){if(e instanceof Ce)Ie.warn(e.message);else{const r=Ue.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ie.warn(r.message)}}}function af(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jw=1024,$w=30;class Hw{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new zw(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ll();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$w){const o=Ww(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ie.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ll(),{heartbeatsToSend:r,unsentEntries:s}=qw(this._heartbeatsCache.heartbeats),i=Zs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Ie.warn(e),""}}}function ll(){return new Date().toISOString().substring(0,10)}function qw(n,t=jw){const e=[];let r=n.slice();for(const s of n){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hl(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),hl(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class zw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VE()?DE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bw(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ul(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ul(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function hl(n){return Zs(JSON.stringify({version:2,heartbeats:n})).length}function Ww(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Jw(n){Fn(new dn("platform-logger",t=>new iw(t),"PRIVATE")),Fn(new dn("heartbeat",t=>new Hw(t),"PRIVATE")),Be(Jo,al,n),Be(Jo,al,"esm2020"),Be("fire-js","")}Jw("");var Gw="firebase",Kw="12.7.0";/**
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
 */Be(Gw,Kw,"app");function cf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qw=cf,uf=new es("auth","Firebase",cf());/**
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
 */const ei=new Ua("@firebase/auth");function Xw(n,...t){ei.logLevel<=z.WARN&&ei.warn(`Auth (${Zn}): ${n}`,...t)}function Ls(n,...t){ei.logLevel<=z.ERROR&&ei.error(`Auth (${Zn}): ${n}`,...t)}/**
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
 */function pe(n,...t){throw Ha(n,...t)}function ee(n,...t){return Ha(n,...t)}function $a(n,t,e){const r={...Qw(),[t]:e};return new es("auth","Firebase",r).create(t,{appName:n.name})}function je(n){return $a(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lf(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&pe(n,"argument-error"),$a(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ha(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return uf.create(n,...t)}function B(n,t,...e){if(!n)throw Ha(t,...e)}function ye(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Ls(t),new Error(t)}function ve(n,t){n||ye(t)}/**
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
 */function Qo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Yw(){return dl()==="http:"||dl()==="https:"}function dl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Zw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yw()||RE()||"connection"in navigator)?navigator.onLine:!0}function tI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class rs{constructor(t,e){this.shortDelay=t,this.longDelay=e,ve(e>t,"Short delay should be less than long delay!"),this.isMobile=AE()||SE()}get(){return Zw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qa(n,t){ve(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class hf{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rI=new rs(3e4,6e4);function za(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function tr(n,t,e,r,s={}){return df(n,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const c=ns({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:t,headers:l,...i};return CE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(h.credentials="include"),hf.fetch()(await ff(n,n.config.apiHost,e,c),h)})}async function df(n,t,e){n._canInitEmulator=!1;const r={...eI,...t};try{const s=new iI(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ks(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ks(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ks(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ks(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw $a(n,f,h);pe(n,f)}}catch(s){if(s instanceof Ce)throw s;pe(n,"network-request-failed",{message:String(s)})}}async function sI(n,t,e,r,s={}){const i=await tr(n,t,e,r,s);return"mfaPendingCredential"in i&&pe(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ff(n,t,e,r){const s=`${t}${e}?${r}`,i=n,o=i.config.emulator?qa(n.config,s):`${n.config.apiScheme}://${s}`;return nI.includes(e)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class iI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ee(this.auth,"network-request-failed")),rI.get())})}}function ks(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=ee(n,t,r);return s.customData._tokenResponse=e,s}/**
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
 */async function oI(n,t){return tr(n,"POST","/v1/accounts:delete",t)}async function ni(n,t){return tr(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Sr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function aI(n,t=!1){const e=At(n),r=await e.getIdToken(t),s=Wa(r);B(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Sr(No(s.auth_time)),issuedAtTime:Sr(No(s.iat)),expirationTime:Sr(No(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function No(n){return Number(n)*1e3}function Wa(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=Kd(e);return s?JSON.parse(s):(Ls("Failed to decode base64 JWT payload"),null)}catch(s){return Ls("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fl(n){const t=Wa(n);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ur(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ce&&cI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function cI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class uI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xo{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ri(n){var p;const t=n.auth,e=await n.getIdToken(),r=await Ur(n,ni(t,{idToken:e}));B(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?pf(s.providerUserInfo):[],o=hI(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function lI(n){const t=At(n);await ri(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function hI(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function pf(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
 */async function dI(n,t){const e=await df(n,{},async()=>{const r=ns({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await ff(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(l.credentials="include"),hf.fetch()(o,l)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function fI(n,t){return tr(n,"POST","/v2/accounts:revokeToken",za(n,t))}/**
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
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):fl(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){B(t.length!==0,"internal-error");const e=fl(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await dI(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,o=new Vn;return r&&(B(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return ye("not implemented")}}/**
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
 */function Ne(n,t){B(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class te{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new uI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Ur(this,this.stsTokenManager.getToken(this.auth,t));return B(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return aI(this,t)}reload(){return lI(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new te({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await ri(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(je(this.auth));const t=await this.getIdToken();return await Ur(this,oI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,i=e.phoneNumber??void 0,o=e.photoURL??void 0,c=e.tenantId??void 0,l=e._redirectEventId??void 0,h=e.createdAt??void 0,f=e.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:A,providerData:R,stsTokenManager:V}=e;B(p&&V,t,"internal-error");const k=Vn.fromJSON(this.name,V);B(typeof p=="string",t,"internal-error"),Ne(r,t.name),Ne(s,t.name),B(typeof m=="boolean",t,"internal-error"),B(typeof A=="boolean",t,"internal-error"),Ne(i,t.name),Ne(o,t.name),Ne(c,t.name),Ne(l,t.name),Ne(h,t.name),Ne(f,t.name);const U=new te({uid:p,auth:t,email:s,emailVerified:m,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:k,createdAt:h,lastLoginAt:f});return R&&Array.isArray(R)&&(U.providerData=R.map($=>({...$}))),l&&(U._redirectEventId=l),U}static async _fromIdTokenResponse(t,e,r=!1){const s=new Vn;s.updateFromServerResponse(e);const i=new te({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ri(i),i}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?pf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Vn;c.updateFromIdToken(r);const l=new te({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const pl=new Map;function Te(n){ve(n instanceof Function,"Expected a class definition");let t=pl.get(n);return t?(ve(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,pl.set(n,t),t)}/**
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
 */class gf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}gf.type="NONE";const gl=gf;/**
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
 */function xs(n,t,e){return`firebase:${n}:${t}:${e}`}class Dn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xs(this.userKey,s.apiKey,i),this.fullPersistenceKey=xs("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await ni(this.auth,{idToken:t}).catch(()=>{});return e?te._fromGetAccountInfoResponse(this.auth,e,t):null}return te._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Dn(Te(gl),t,r);const s=(await Promise.all(e.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Te(gl);const o=xs(r,t.config.apiKey,t.name);let c=null;for(const h of e)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await ni(t,{idToken:f}).catch(()=>{});if(!m)break;p=await te._fromGetAccountInfoResponse(t,m,f)}else p=te._fromJSON(t,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Dn(i,t,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(e.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Dn(i,t,r))}}/**
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
 */function ml(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Tf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wf(t))return"Blackberry";if(If(t))return"Webos";if(_f(t))return"Safari";if((t.includes("chrome/")||yf(t))&&!t.includes("edge/"))return"Chrome";if(Ef(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mf(n=Dt()){return/firefox\//i.test(n)}function _f(n=Dt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yf(n=Dt()){return/crios\//i.test(n)}function Tf(n=Dt()){return/iemobile/i.test(n)}function Ef(n=Dt()){return/android/i.test(n)}function wf(n=Dt()){return/blackberry/i.test(n)}function If(n=Dt()){return/webos/i.test(n)}function Ja(n=Dt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pI(n=Dt()){var t;return Ja(n)&&!!((t=window.navigator)!=null&&t.standalone)}function gI(){return PE()&&document.documentMode===10}function vf(n=Dt()){return Ja(n)||Ef(n)||If(n)||wf(n)||/windows phone/i.test(n)||Tf(n)}/**
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
 */function Af(n,t=[]){let e;switch(n){case"Browser":e=ml(Dt());break;case"Worker":e=`${ml(Dt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Zn}/${r}`}/**
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
 */class mI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((o,c)=>{try{const l=t(i);o(l)}catch(l){c(l)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _I(n,t={}){return tr(n,"GET","/v2/passwordPolicy",za(n,t))}/**
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
 */const yI=6;class TI{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??yI,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class EI{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _l(this),this.idTokenSubscription=new _l(this),this.beforeStateQueue=new mI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Te(e)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await ni(this,{idToken:t}),r=await te._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ri(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=tI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Qt(this.app))return Promise.reject(je(this));const e=t?At(t):null;return e&&B(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Qt(this.app)?Promise.reject(je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await _I(this),e=new TI(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new es("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await fI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Te(t)||this._popupRedirectResolver;B(e,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[Te(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,r,s);return()=>{o=!0,l()}}else{const l=t.addObserver(e);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Af(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&Xw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function er(n){return At(n)}class _l{constructor(t){this.auth=t,this.observer=null,this.addObserver=xE(e=>this.observer=e)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wI(n){Ga=n}function II(n){return Ga.loadJS(n)}function vI(){return Ga.gapiScript}function AI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function bI(n,t){const e=ja(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(hn(i,t??{}))return s;pe(s,"already-initialized")}return e.initialize({options:t})}function CI(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Te);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function RI(n,t,e){const r=er(n);B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=bf(t),{host:o,port:c}=SI(t),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(hn(h,r.config.emulator)&&hn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Yn(o)?(Zd(`${i}//${o}${l}`),tf("Auth",!0)):PI()}function bf(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function SI(n){const t=bf(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yl(o)}}}function yl(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function PI(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Cf{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ye("not implemented")}_getIdTokenResponse(t){return ye("not implemented")}_linkToIdToken(t,e){return ye("not implemented")}_getReauthenticationResolver(t){return ye("not implemented")}}/**
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
 */async function Nn(n,t){return sI(n,"POST","/v1/accounts:signInWithIdp",za(n,t))}/**
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
 */const kI="http://localhost";class fn extends Cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):pe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=e;if(!r||!s)return null;const o=new fn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Nn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Nn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Nn(t,e)}buildRequest(){const t={requestUri:kI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=ns(e)}return t}}/**
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
 */class _e extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return fn._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return _e.credential(e,r)}catch{return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";/**
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
 */class Un{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await te._fromIdTokenResponse(t,r,s),o=Tl(r);return new Un({user:i,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=Tl(r);return new Un({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function Tl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class si extends Ce{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,si.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new si(t,e,r,s)}}function Rf(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?si._fromErrorAndOperation(n,i,t,r):i})}async function VI(n,t,e=!1){const r=await Ur(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Un._forOperation(n,"link",r)}/**
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
 */async function DI(n,t,e=!1){const{auth:r}=n;if(Qt(r.app))return Promise.reject(je(r));const s="reauthenticate";try{const i=await Ur(n,Rf(r,s,t,n),e);B(i.idToken,r,"internal-error");const o=Wa(i.idToken);B(o,r,"internal-error");const{sub:c}=o;return B(n.uid===c,r,"user-mismatch"),Un._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&pe(r,"user-mismatch"),i}}/**
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
 */async function NI(n,t,e=!1){if(Qt(n.app))return Promise.reject(je(n));const r="signIn",s=await Rf(n,r,t),i=await Un._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}/**
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
 */function OI(n,t){return At(n).setPersistence(t)}function MI(n,t,e,r){return At(n).onIdTokenChanged(t,e,r)}function LI(n,t,e){return At(n).beforeAuthStateChanged(t,e)}function xI(n,t,e,r){return At(n).onAuthStateChanged(t,e,r)}function FI(n){return At(n).signOut()}const ii="__sak";/**
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
 */class Sf{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ii,"1"),this.storage.removeItem(ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UI=1e3,BI=10;class Pf extends Sf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gI()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,BI):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},UI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Pf.type="LOCAL";const kf=Pf;/**
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
 */class Vf extends Sf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Vf.type="SESSION";const Ka=Vf;/**
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
 */function jI(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Vi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new Vi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(e.origin,i)),l=await jI(c);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vi.receivers=[];/**
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
 */class $I{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Qa("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function le(){return window}function HI(n){le().location.href=n}/**
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
 */function Df(){return typeof le().WorkerGlobalScope<"u"&&typeof le().importScripts=="function"}async function qI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function WI(){return Df()?self:null}/**
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
 */const Nf="firebaseLocalStorageDb",JI=1,oi="firebaseLocalStorage",Of="fbase_key";class is{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Di(n,t){return n.transaction([oi],t?"readwrite":"readonly").objectStore(oi)}function GI(){const n=indexedDB.deleteDatabase(Nf);return new is(n).toPromise()}function Yo(){const n=indexedDB.open(Nf,JI);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(oi,{keyPath:Of})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(oi)?t(r):(r.close(),await GI(),t(await Yo()))})})}async function El(n,t,e){const r=Di(n,!0).put({[Of]:t,value:e});return new is(r).toPromise()}async function KI(n,t){const e=Di(n,!1).get(t),r=await new is(e).toPromise();return r===void 0?null:r.value}function wl(n,t){const e=Di(n,!0).delete(t);return new is(e).toPromise()}const QI=800,XI=3;class Mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yo(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>XI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Df()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vi._getInstance(WI()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await qI(),!this.activeServiceWorker)return;this.sender=new $I(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||zI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Yo();return await El(t,ii,"1"),await wl(t,ii),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>El(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>KI(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>wl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Di(s,!1).getAll();return new is(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mf.type="LOCAL";const Lf=Mf;new rs(3e4,6e4);/**
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
 */function Xa(n,t){return t?Te(t):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ya extends Cf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Nn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Nn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Nn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function YI(n){return NI(n.auth,new Ya(n),n.bypassAuthState)}function ZI(n){const{auth:t,user:e}=n;return B(e,t,"internal-error"),DI(e,new Ya(n),n.bypassAuthState)}async function tv(n){const{auth:t,user:e}=n;return B(e,t,"internal-error"),VI(e,new Ya(n),n.bypassAuthState)}/**
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
 */class xf{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return YI;case"linkViaPopup":case"linkViaRedirect":return tv;case"reauthViaPopup":case"reauthViaRedirect":return ZI;default:pe(this.auth,"internal-error")}}resolve(t){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ev=new rs(2e3,1e4);async function nv(n,t,e){if(Qt(n.app))return Promise.reject(ee(n,"operation-not-supported-in-this-environment"));const r=er(n);lf(n,t,ki);const s=Xa(r,e);return new cn(r,"signInViaPopup",t,s).executeNotNull()}class cn extends xf{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){ve(this.filter.length===1,"Popup operations only handle one event");const t=Qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ev.get())};t()}}cn.currentPopupAction=null;/**
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
 */const rv="pendingRedirect",Fs=new Map;class sv extends xf{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Fs.get(this.auth._key());if(!t){try{const r=await iv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Fs.set(this.auth._key(),t)}return this.bypassAuthState||Fs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iv(n,t){const e=Uf(t),r=Ff(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}async function ov(n,t){return Ff(n)._set(Uf(t),"true")}function av(n,t){Fs.set(n._key(),t)}function Ff(n){return Te(n._redirectPersistence)}function Uf(n){return xs(rv,n.config.apiKey,n.name)}/**
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
 */function cv(n,t,e){return uv(n,t,e)}async function uv(n,t,e){if(Qt(n.app))return Promise.reject(je(n));const r=er(n);lf(n,t,ki),await r._initializationPromise;const s=Xa(r,e);return await ov(s,r),s._openRedirect(r,t,"signInViaRedirect")}async function lv(n,t){return await er(n)._initializationPromise,Bf(n,t,!1)}async function Bf(n,t,e=!1){if(Qt(n.app))return Promise.reject(je(n));const r=er(n),s=Xa(r,t),o=await new sv(r,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const hv=600*1e3;class dv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!fv(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!jf(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(ee(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=hv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Il(t))}saveEventToCache(t){this.cachedEventUids.add(Il(t)),this.lastProcessedEventTime=Date.now()}}function Il(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function jf({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function fv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jf(n);default:return!1}}/**
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
 */async function pv(n,t={}){return tr(n,"GET","/v1/projects",t)}/**
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
 */const gv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mv=/^https?/;async function _v(n){if(n.config.emulator)return;const{authorizedDomains:t}=await pv(n);for(const e of t)try{if(yv(e))return}catch{}pe(n,"unauthorized-domain")}function yv(n){const t=Qo(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!mv.test(e))return!1;if(gv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Tv=new rs(3e4,6e4);function vl(){const n=le().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Ev(n){return new Promise((t,e)=>{var s,i,o;function r(){vl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vl(),e(ee(n,"network-request-failed"))},timeout:Tv.get()})}if((i=(s=le().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)t(gapi.iframes.getContext());else if((o=le().gapi)!=null&&o.load)r();else{const c=AI("iframefcb");return le()[c]=()=>{gapi.load?r():e(ee(n,"network-request-failed"))},II(`${vI()}?onload=${c}`).catch(l=>e(l))}}).catch(t=>{throw Us=null,t})}let Us=null;function wv(n){return Us=Us||Ev(n),Us}/**
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
 */const Iv=new rs(5e3,15e3),vv="__/auth/iframe",Av="emulator/auth/iframe",bv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rv(n){const t=n.config;B(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?qa(t,Av):`https://${n.config.authDomain}/${vv}`,r={apiKey:t.apiKey,appName:n.name,v:Zn},s=Cv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${ns(r).slice(1)}`}async function Sv(n){const t=await wv(n),e=le().gapi;return B(e,n,"internal-error"),t.open({where:document.body,url:Rv(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ee(n,"network-request-failed"),c=le().setTimeout(()=>{i(o)},Iv.get());function l(){le().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Pv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kv=500,Vv=600,Dv="_blank",Nv="http://localhost";class Al{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ov(n,t,e,r=kv,s=Vv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Pv,width:r.toString(),height:s.toString(),top:i,left:o},h=Dt().toLowerCase();e&&(c=yf(h)?Dv:e),mf(h)&&(t=t||Nv,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[A,R])=>`${m}${A}=${R},`,"");if(pI(h)&&c!=="_self")return Mv(t||"",c),new Al(null);const p=window.open(t||"",c,f);B(p,n,"popup-blocked");try{p.focus()}catch{}return new Al(p)}function Mv(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Lv="__/auth/handler",xv="emulator/auth/handler",Fv=encodeURIComponent("fac");async function bl(n,t,e,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Zn,eventId:s};if(t instanceof ki){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",LE(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(t instanceof ss){const f=t.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${Fv}=${encodeURIComponent(l)}`:"";return`${Uv(n)}?${ns(c).slice(1)}${h}`}function Uv({config:n}){return n.emulator?qa(n,xv):`https://${n.authDomain}/${Lv}`}/**
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
 */const Oo="webStorageSupport";class Bv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ka,this._completeRedirectFn=Bf,this._overrideRedirectResult=av}async _openPopup(t,e,r,s){var o;ve((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await bl(t,e,r,Qo(),s);return Ov(t,i,Qa())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await bl(t,e,r,Qo(),s);return HI(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(ve(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Sv(t),r=new dv(t);return e.register("authEvent",s=>(B(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Oo,{type:Oo},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Oo];i!==void 0&&e(!!i),pe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=_v(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return vf()||_f()||Ja()}}const jv=Bv;var Cl="@firebase/auth",Rl="1.12.0";/**
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
 */class $v{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qv(n){Fn(new dn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Af(n)},h=new EI(r,s,i,l);return CI(h,e),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Fn(new dn("auth-internal",t=>{const e=er(t.getProvider("auth").getImmediate());return(r=>new $v(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(Cl,Rl,Hv(n)),Be(Cl,Rl,"esm2020")}/**
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
 */const zv=300,Wv=Yd("authIdTokenMaxAge")||zv;let Sl=null;const Jv=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Wv)return;const s=e==null?void 0:e.token;Sl!==s&&(Sl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gv(n=sf()){const t=ja(n,"auth");if(t.isInitialized())return t.getImmediate();const e=bI(n,{popupRedirectResolver:jv,persistence:[Lf,kf,Ka]}),r=Yd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Jv(i.toString());LI(e,o,()=>o(e.currentUser)),MI(e,c=>o(c))}}const s=Qd("auth");return s&&RI(e,`http://${s}`),e}function Kv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}wI({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=ee("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",Kv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qv("Browser");var Pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $e,$f;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,_){function T(){}T.prototype=_.prototype,w.F=_.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(I,E,b){for(var y=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)y[Ut-2]=arguments[Ut];return _.prototype[E].apply(I,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,T){T||(T=0);const I=Array(16);if(typeof _=="string")for(var E=0;E<16;++E)I[E]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(E=0;E<16;++E)I[E]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=w.g[0],T=w.g[1],E=w.g[2];let b=w.g[3],y;y=_+(b^T&(E^b))+I[0]+3614090360&4294967295,_=T+(y<<7&4294967295|y>>>25),y=b+(E^_&(T^E))+I[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(T^b&(_^T))+I[2]+606105819&4294967295,E=b+(y<<17&4294967295|y>>>15),y=T+(_^E&(b^_))+I[3]+3250441966&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(b^T&(E^b))+I[4]+4118548399&4294967295,_=T+(y<<7&4294967295|y>>>25),y=b+(E^_&(T^E))+I[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(T^b&(_^T))+I[6]+2821735955&4294967295,E=b+(y<<17&4294967295|y>>>15),y=T+(_^E&(b^_))+I[7]+4249261313&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(b^T&(E^b))+I[8]+1770035416&4294967295,_=T+(y<<7&4294967295|y>>>25),y=b+(E^_&(T^E))+I[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(T^b&(_^T))+I[10]+4294925233&4294967295,E=b+(y<<17&4294967295|y>>>15),y=T+(_^E&(b^_))+I[11]+2304563134&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(b^T&(E^b))+I[12]+1804603682&4294967295,_=T+(y<<7&4294967295|y>>>25),y=b+(E^_&(T^E))+I[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(T^b&(_^T))+I[14]+2792965006&4294967295,E=b+(y<<17&4294967295|y>>>15),y=T+(_^E&(b^_))+I[15]+1236535329&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(E^b&(T^E))+I[1]+4129170786&4294967295,_=T+(y<<5&4294967295|y>>>27),y=b+(T^E&(_^T))+I[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(b^_))+I[11]+643717713&4294967295,E=b+(y<<14&4294967295|y>>>18),y=T+(b^_&(E^b))+I[0]+3921069994&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(E^b&(T^E))+I[5]+3593408605&4294967295,_=T+(y<<5&4294967295|y>>>27),y=b+(T^E&(_^T))+I[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(b^_))+I[15]+3634488961&4294967295,E=b+(y<<14&4294967295|y>>>18),y=T+(b^_&(E^b))+I[4]+3889429448&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(E^b&(T^E))+I[9]+568446438&4294967295,_=T+(y<<5&4294967295|y>>>27),y=b+(T^E&(_^T))+I[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(b^_))+I[3]+4107603335&4294967295,E=b+(y<<14&4294967295|y>>>18),y=T+(b^_&(E^b))+I[8]+1163531501&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(E^b&(T^E))+I[13]+2850285829&4294967295,_=T+(y<<5&4294967295|y>>>27),y=b+(T^E&(_^T))+I[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(b^_))+I[7]+1735328473&4294967295,E=b+(y<<14&4294967295|y>>>18),y=T+(b^_&(E^b))+I[12]+2368359562&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(T^E^b)+I[5]+4294588738&4294967295,_=T+(y<<4&4294967295|y>>>28),y=b+(_^T^E)+I[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^T)+I[11]+1839030562&4294967295,E=b+(y<<16&4294967295|y>>>16),y=T+(E^b^_)+I[14]+4259657740&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(T^E^b)+I[1]+2763975236&4294967295,_=T+(y<<4&4294967295|y>>>28),y=b+(_^T^E)+I[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^T)+I[7]+4139469664&4294967295,E=b+(y<<16&4294967295|y>>>16),y=T+(E^b^_)+I[10]+3200236656&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(T^E^b)+I[13]+681279174&4294967295,_=T+(y<<4&4294967295|y>>>28),y=b+(_^T^E)+I[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^T)+I[3]+3572445317&4294967295,E=b+(y<<16&4294967295|y>>>16),y=T+(E^b^_)+I[6]+76029189&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(T^E^b)+I[9]+3654602809&4294967295,_=T+(y<<4&4294967295|y>>>28),y=b+(_^T^E)+I[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^T)+I[15]+530742520&4294967295,E=b+(y<<16&4294967295|y>>>16),y=T+(E^b^_)+I[2]+3299628645&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(E^(T|~b))+I[0]+4096336452&4294967295,_=T+(y<<6&4294967295|y>>>26),y=b+(T^(_|~E))+I[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~T))+I[14]+2878612391&4294967295,E=b+(y<<15&4294967295|y>>>17),y=T+(b^(E|~_))+I[5]+4237533241&4294967295,T=E+(y<<21&4294967295|y>>>11),y=_+(E^(T|~b))+I[12]+1700485571&4294967295,_=T+(y<<6&4294967295|y>>>26),y=b+(T^(_|~E))+I[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~T))+I[10]+4293915773&4294967295,E=b+(y<<15&4294967295|y>>>17),y=T+(b^(E|~_))+I[1]+2240044497&4294967295,T=E+(y<<21&4294967295|y>>>11),y=_+(E^(T|~b))+I[8]+1873313359&4294967295,_=T+(y<<6&4294967295|y>>>26),y=b+(T^(_|~E))+I[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~T))+I[6]+2734768916&4294967295,E=b+(y<<15&4294967295|y>>>17),y=T+(b^(E|~_))+I[13]+1309151649&4294967295,T=E+(y<<21&4294967295|y>>>11),y=_+(E^(T|~b))+I[4]+4149444226&4294967295,_=T+(y<<6&4294967295|y>>>26),y=b+(T^(_|~E))+I[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~T))+I[2]+718787259&4294967295,E=b+(y<<15&4294967295|y>>>17),y=T+(b^(E|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const T=_-this.blockSize,I=this.C;let E=this.h,b=0;for(;b<_;){if(E==0)for(;b<=T;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<_;)if(I[E++]=w.charCodeAt(b++),E==this.blockSize){s(this,I),E=0;break}}else for(;b<_;)if(I[E++]=w[b++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,T=0;T<4;++T)for(let I=0;I<32;I+=8)w[_++]=this.g[T]>>>I&255;return w};function i(w,_){var T=c;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=_(w)}function o(w,_){this.h=_;const T=[];let I=!0;for(let E=w.length-1;E>=0;E--){const b=w[E]|0;I&&b==_||(T[E]=b,I=!1)}this.g=T}var c={};function l(w){return-128<=w&&w<128?i(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return k(h(-w));const _=[];let T=1;for(let I=0;w>=T;I++)_[I]=w/T|0,T*=4294967296;return new o(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return k(f(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(_,8));let I=p;for(let b=0;b<w.length;b+=8){var E=Math.min(8,w.length-b);const y=parseInt(w.substring(b,b+E),_);E<8?(E=h(Math.pow(_,E)),I=I.j(E).add(h(y))):(I=I.j(T),I=I.add(h(y)))}return I}var p=l(0),m=l(1),A=l(16777216);n=o.prototype,n.m=function(){if(V(this))return-k(this).m();let w=0,_=1;for(let T=0;T<this.g.length;T++){const I=this.i(T);w+=(I>=0?I:4294967296+I)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(V(this))return"-"+k(this).toString(w);const _=h(Math.pow(w,6));var T=this;let I="";for(;;){const E=at(T,_).g;T=U(T,E.j(_));let b=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=E,R(T))return b+I;for(;b.length<6;)b="0"+b;I=b+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=U(this,w),V(w)?-1:R(w)?0:1};function k(w){const _=w.g.length,T=[];for(let I=0;I<_;I++)T[I]=~w.g[I];return new o(T,~w.h).add(m)}n.abs=function(){return V(this)?k(this):this},n.add=function(w){const _=Math.max(this.g.length,w.g.length),T=[];let I=0;for(let E=0;E<=_;E++){let b=I+(this.i(E)&65535)+(w.i(E)&65535),y=(b>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);I=y>>>16,b&=65535,y&=65535,T[E]=y<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function U(w,_){return w.add(k(_))}n.j=function(w){if(R(this)||R(w))return p;if(V(this))return V(w)?k(this).j(k(w)):k(k(this).j(w));if(V(w))return k(this.j(k(w)));if(this.l(A)<0&&w.l(A)<0)return h(this.m()*w.m());const _=this.g.length+w.g.length,T=[];for(var I=0;I<2*_;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<w.g.length;E++){const b=this.i(I)>>>16,y=this.i(I)&65535,Ut=w.i(E)>>>16,tn=w.i(E)&65535;T[2*I+2*E]+=y*tn,$(T,2*I+2*E),T[2*I+2*E+1]+=b*tn,$(T,2*I+2*E+1),T[2*I+2*E+1]+=y*Ut,$(T,2*I+2*E+1),T[2*I+2*E+2]+=b*Ut,$(T,2*I+2*E+2)}for(w=0;w<_;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=_;w<2*_;w++)T[w]=0;return new o(T,0)};function $(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function H(w,_){this.g=w,this.h=_}function at(w,_){if(R(_))throw Error("division by zero");if(R(w))return new H(p,p);if(V(w))return _=at(k(w),_),new H(k(_.g),k(_.h));if(V(_))return _=at(w,k(_)),new H(k(_.g),_.h);if(w.g.length>30){if(V(w)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,I=_;I.l(w)<=0;)T=Ht(T),I=Ht(I);var E=gt(T,1),b=gt(I,1);for(I=gt(I,2),T=gt(T,2);!R(I);){var y=b.add(I);y.l(w)<=0&&(E=E.add(T),b=y),I=gt(I,1),T=gt(T,1)}return _=U(w,E.j(_)),new H(E,_)}for(E=p;w.l(_)>=0;){for(T=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),b=h(T),y=b.j(_);V(y)||y.l(w)>0;)T-=I,b=h(T),y=b.j(_);R(b)&&(b=m),E=E.add(b),w=U(w,y)}return new H(E,w)}n.B=function(w){return at(this,w).h},n.and=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<_;I++)T[I]=this.i(I)&w.i(I);return new o(T,this.h&w.h)},n.or=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<_;I++)T[I]=this.i(I)|w.i(I);return new o(T,this.h|w.h)},n.xor=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<_;I++)T[I]=this.i(I)^w.i(I);return new o(T,this.h^w.h)};function Ht(w){const _=w.g.length+1,T=[];for(let I=0;I<_;I++)T[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(T,w.h)}function gt(w,_){const T=_>>5;_%=32;const I=w.g.length-T,E=[];for(let b=0;b<I;b++)E[b]=_>0?w.i(b+T)>>>_|w.i(b+T+1)<<32-_:w.i(b+T);return new o(E,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,$f=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,$e=o}).apply(typeof Pl<"u"?Pl:typeof self<"u"?self:typeof window<"u"?window:{});var Vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hf,Ir,qf,Bs,Zo,zf,Wf,Jf;(function(){var n,t=Object.defineProperty;function e(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vs=="object"&&Vs];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=e(this);function s(a,u){if(u)t:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var v=a[g];if(!(v in d))break t;d=d[v]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&t(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&d.push([g,u[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,v,C){for(var D=Array(arguments.length-2),q=2;q<arguments.length;q++)D[q-2]=arguments[q];return u.prototype[v].apply(g,D)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const u=a.length;if(u>0){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function R(a,u){for(let g=1;g<arguments.length;g++){const v=arguments[g];var d=typeof v;if(d=d!="object"?d:v?Array.isArray(v)?"array":d:"null",d=="array"||d=="object"&&typeof v.length=="number"){d=a.length||0;const C=v.length||0;a.length=d+C;for(let D=0;D<C;D++)a[d+D]=v[D]}else a.push(v)}}class V{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function k(a){o.setTimeout(()=>{throw a},0)}function U(){var a=w;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ${constructor(){this.h=this.g=null}add(u,d){const g=H.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var H=new V(()=>new at,a=>a.reset());class at{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ht,gt=!1,w=new $,_=()=>{const a=Promise.resolve(void 0);Ht=()=>{a.then(T)}};function T(){for(var a;a=U();){try{a.h.call(a.g)}catch(d){k(d)}var u=H;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}gt=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Ut(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(Ut,E),Ut.prototype.init=function(a,u){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ut.Z.h.call(this)},Ut.prototype.h=function(){Ut.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tn="closure_listenable_"+(Math.random()*1e6|0),vg=0;function Ag(a,u,d,g,v){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=v,this.key=++vg,this.da=this.fa=!1}function ps(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function gs(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function bg(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function xc(a){const u={};for(const d in a)u[d]=a[d];return u}const Fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Uc(a,u){let d,g;for(let v=1;v<arguments.length;v++){g=arguments[v];for(d in g)a[d]=g[d];for(let C=0;C<Fc.length;C++)d=Fc[C],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function ms(a){this.src=a,this.g={},this.h=0}ms.prototype.add=function(a,u,d,g,v){const C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);const D=to(a,u,g,v);return D>-1?(u=a[D],d||(u.fa=!1)):(u=new Ag(u,this.src,C,!!g,v),u.fa=d,a.push(u)),u};function Zi(a,u){const d=u.type;if(d in a.g){var g=a.g[d],v=Array.prototype.indexOf.call(g,u,void 0),C;(C=v>=0)&&Array.prototype.splice.call(g,v,1),C&&(ps(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function to(a,u,d,g){for(let v=0;v<a.length;++v){const C=a[v];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==g)return v}return-1}var eo="closure_lm_"+(Math.random()*1e6|0),no={};function Bc(a,u,d,g,v){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Bc(a,u[C],d,g,v);return null}return d=Hc(d),a&&a[tn]?a.J(u,d,c(g)?!!g.capture:!1,v):Cg(a,u,d,!1,g,v)}function Cg(a,u,d,g,v,C){if(!u)throw Error("Invalid event type");const D=c(v)?!!v.capture:!!v;let q=so(a);if(q||(a[eo]=q=new ms(a)),d=q.add(u,d,g,D,C),d.proxy)return d;if(g=Rg(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)b||(v=D),v===void 0&&(v=!1),a.addEventListener(u.toString(),g,v);else if(a.attachEvent)a.attachEvent($c(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Rg(){function a(d){return u.call(a.src,a.listener,d)}const u=Sg;return a}function jc(a,u,d,g,v){if(Array.isArray(u))for(var C=0;C<u.length;C++)jc(a,u[C],d,g,v);else g=c(g)?!!g.capture:!!g,d=Hc(d),a&&a[tn]?(a=a.i,C=String(u).toString(),C in a.g&&(u=a.g[C],d=to(u,d,g,v),d>-1&&(ps(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[C],a.h--)))):a&&(a=so(a))&&(u=a.g[u.toString()],a=-1,u&&(a=to(u,d,g,v)),(d=a>-1?u[a]:null)&&ro(d))}function ro(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[tn])Zi(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent($c(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=so(u))?(Zi(d,a),d.h==0&&(d.src=null,u[eo]=null)):ps(a)}}}function $c(a){return a in no?no[a]:no[a]="on"+a}function Sg(a,u){if(a.da)a=!0;else{u=new Ut(u,this);const d=a.listener,g=a.ha||a.src;a.fa&&ro(a),a=d.call(g,u)}return a}function so(a){return a=a[eo],a instanceof ms?a:null}var io="__closure_events_fn_"+(Math.random()*1e9>>>0);function Hc(a){return typeof a=="function"?a:(a[io]||(a[io]=function(u){return a.handleEvent(u)}),a[io])}function Pt(){I.call(this),this.i=new ms(this),this.M=this,this.G=null}p(Pt,I),Pt.prototype[tn]=!0,Pt.prototype.removeEventListener=function(a,u,d,g){jc(this,a,u,d,g)};function Nt(a,u){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var v=u;u=new E(g,a),Uc(u,v)}v=!0;let C,D;if(d)for(D=d.length-1;D>=0;D--)C=u.g=d[D],v=_s(C,g,!0,u)&&v;if(C=u.g=a,v=_s(C,g,!0,u)&&v,v=_s(C,g,!1,u)&&v,d)for(D=0;D<d.length;D++)C=u.g=d[D],v=_s(C,g,!1,u)&&v}Pt.prototype.N=function(){if(Pt.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let g=0;g<d.length;g++)ps(d[g]);delete a.g[u],a.h--}}this.G=null},Pt.prototype.J=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},Pt.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function _s(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let v=!0;for(let C=0;C<u.length;++C){const D=u[C];if(D&&!D.da&&D.capture==d){const q=D.listener,mt=D.ha||D.src;D.fa&&Zi(a.i,D),v=q.call(mt,g)!==!1&&v}}return v&&!g.defaultPrevented}function Pg(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function qc(a){a.g=Pg(()=>{a.g=null,a.i&&(a.i=!1,qc(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class kg extends I{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:qc(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function or(a){I.call(this),this.h=a,this.g={}}p(or,I);var zc=[];function Wc(a){gs(a.g,function(u,d){this.g.hasOwnProperty(d)&&ro(u)},a),a.g={}}or.prototype.N=function(){or.Z.N.call(this),Wc(this)},or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oo=o.JSON.stringify,Vg=o.JSON.parse,Dg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Jc(){}function Gc(){}var ar={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ao(){E.call(this,"d")}p(ao,E);function co(){E.call(this,"c")}p(co,E);var en={},Kc=null;function ys(){return Kc=Kc||new Pt}en.Ia="serverreachability";function Qc(a){E.call(this,en.Ia,a)}p(Qc,E);function cr(a){const u=ys();Nt(u,new Qc(u))}en.STAT_EVENT="statevent";function Xc(a,u){E.call(this,en.STAT_EVENT,a),this.stat=u}p(Xc,E);function Ot(a){const u=ys();Nt(u,new Xc(u,a))}en.Ja="timingevent";function Yc(a,u){E.call(this,en.Ja,a),this.size=u}p(Yc,E);function ur(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function lr(){this.g=!0}lr.prototype.ua=function(){this.g=!1};function Ng(a,u,d,g,v,C){a.info(function(){if(a.g)if(C){var D="",q=C.split("&");for(let Y=0;Y<q.length;Y++){var mt=q[Y].split("=");if(mt.length>1){const Et=mt[0];mt=mt[1];const ce=Et.split("_");D=ce.length>=2&&ce[1]=="type"?D+(Et+"="+mt+"&"):D+(Et+"=redacted&")}}}else D=null;else D=C;return"XMLHTTP REQ ("+g+") [attempt "+v+"]: "+u+`
`+d+`
`+D})}function Og(a,u,d,g,v,C,D){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+v+"]: "+u+`
`+d+`
`+C+" "+D})}function wn(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Lg(a,d)+(g?" "+g:"")})}function Mg(a,u){a.info(function(){return"TIMEOUT: "+u})}lr.prototype.info=function(){};function Lg(a,u){if(!a.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(a=0;a<C.length;a++)if(Array.isArray(C[a])){var d=C[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var v=g[0];if(v!="noop"&&v!="stop"&&v!="close")for(let D=1;D<g.length;D++)g[D]=""}}}}return oo(C)}catch{return u}}var Ts={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tu;function uo(){}p(uo,Jc),uo.prototype.g=function(){return new XMLHttpRequest},tu=new uo;function hr(a){return encodeURIComponent(String(a))}function xg(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Re(a,u,d,g){this.j=a,this.i=u,this.l=d,this.S=g||1,this.V=new or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new eu}function eu(){this.i=null,this.g="",this.h=!1}var nu={},lo={};function ho(a,u,d){a.M=1,a.A=ws(ae(u)),a.u=d,a.R=!0,ru(a,null)}function ru(a,u){a.F=Date.now(),Es(a),a.B=ae(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),mu(d.i,"t",g),a.C=0,d=a.j.L,a.h=new eu,a.g=Ou(a.j,d?u:null,!a.u),a.P>0&&(a.O=new kg(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,g=a.ba;var v="readystatechange";Array.isArray(v)||(v&&(zc[0]=v.toString()),v=zc);for(let C=0;C<v.length;C++){const D=Bc(d,v[C],g||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=a.J?xc(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),cr(),Ng(a.i,a.v,a.B,a.l,a.S,a.u)}Re.prototype.ba=function(a){a=a.target;const u=this.O;u&&ke(a)==3?u.j():this.Y(a)},Re.prototype.Y=function(a){try{if(a==this.g)t:{const q=ke(this.g),mt=this.g.ya(),Y=this.g.ca();if(!(q<3)&&(q!=3||this.g&&(this.h.h||this.g.la()||vu(this.g)))){this.K||q!=4||mt==7||(mt==8||Y<=0?cr(3):cr(2)),fo(this);var u=this.g.ca();this.X=u;var d=Fg(this);if(this.o=u==200,Og(this.i,this.v,this.B,this.l,this.S,q,u),this.o){if(this.U&&!this.L){e:{if(this.g){var g,v=this.g;if((g=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var C=g;break e}}C=null}if(a=C)wn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,po(this,a);else{this.o=!1,this.m=3,Ot(12),nn(this),dr(this);break t}}if(this.R){a=!0;let Et;for(;!this.K&&this.C<d.length;)if(Et=Ug(this,d),Et==lo){q==4&&(this.m=4,Ot(14),a=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==nu){this.m=4,Ot(15),wn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else wn(this.i,this.l,Et,null),po(this,Et);if(su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||d.length!=0||this.h.h||(this.m=1,Ot(16),a=!1),this.o=this.o&&a,!a)wn(this.i,this.l,d,"[Invalid Chunked Response]"),nn(this),dr(this);else if(d.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Io(D),D.P=!0,Ot(11))}}else wn(this.i,this.l,d,null),po(this,d);q==4&&nn(this),this.o&&!this.K&&(q==4?ku(this.j,this):(this.o=!1,Es(this)))}else Zg(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ot(12)):(this.m=0,Ot(13)),nn(this),dr(this)}}}catch{}finally{}};function Fg(a){if(!su(a))return a.g.la();const u=vu(a.g);if(u==="")return"";let d="";const g=u.length,v=ke(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return nn(a),dr(a),"";a.h.i=new o.TextDecoder}for(let C=0;C<g;C++)a.h.h=!0,d+=a.h.i.decode(u[C],{stream:!(v&&C==g-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function su(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ug(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?lo:(d=Number(u.substring(d,g)),isNaN(d)?nu:(g+=1,g+d>u.length?lo:(u=u.slice(g,g+d),a.C=g+d,u)))}Re.prototype.cancel=function(){this.K=!0,nn(this)};function Es(a){a.T=Date.now()+a.H,iu(a,a.H)}function iu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ur(h(a.aa,a),u)}function fo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Re.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Mg(this.i,this.B),this.M!=2&&(cr(),Ot(17)),nn(this),this.m=2,dr(this)):iu(this,this.T-a)};function dr(a){a.j.I==0||a.K||ku(a.j,a)}function nn(a){fo(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Wc(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function po(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||go(d.h,a))){if(!a.L&&go(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var v=g;if(v[0]==0){t:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Cs(d),As(d);else break t;wo(d),Ot(18)}}else d.xa=v[1],0<d.xa-d.K&&v[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ur(h(d.Va,d),6e3));cu(d.h)<=1&&d.ta&&(d.ta=void 0)}else sn(d,11)}else if((a.L||d.g==a)&&Cs(d),!y(u))for(v=d.Ba.g.parse(u),u=0;u<v.length;u++){let Y=v[u];const Et=Y[0];if(!(Et<=d.K))if(d.K=Et,Y=Y[1],d.I==2)if(Y[0]=="c"){d.M=Y[1],d.ba=Y[2];const ce=Y[3];ce!=null&&(d.ka=ce,d.j.info("VER="+d.ka));const on=Y[4];on!=null&&(d.za=on,d.j.info("SVER="+d.za));const Ve=Y[5];Ve!=null&&typeof Ve=="number"&&Ve>0&&(g=1.5*Ve,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const De=a.g;if(De){const Ss=De.g?De.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ss){var C=g.h;C.g||Ss.indexOf("spdy")==-1&&Ss.indexOf("quic")==-1&&Ss.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(mo(C,C.h),C.h=null))}if(g.G){const vo=De.g?De.g.getResponseHeader("X-HTTP-Session-Id"):null;vo&&(g.wa=vo,et(g.J,g.G,vo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var D=a;if(g.na=Nu(g,g.L?g.ba:null,g.W),D.L){uu(g.h,D);var q=D,mt=g.O;mt&&(q.H=mt),q.D&&(fo(q),Es(q)),g.g=D}else Su(g);d.i.length>0&&bs(d)}else Y[0]!="stop"&&Y[0]!="close"||sn(d,7);else d.I==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?sn(d,7):Eo(d):Y[0]!="noop"&&d.l&&d.l.qa(Y),d.A=0)}}cr(4)}catch{}}var Bg=class{constructor(a,u){this.g=a,this.map=u}};function ou(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function au(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function cu(a){return a.h?1:a.g?a.g.size:0}function go(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function mo(a,u){a.g?a.g.add(u):a.h=u}function uu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ou.prototype.cancel=function(){if(this.i=lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return A(a.i)}var hu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jg(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let v,C=null;g>=0?(v=a[d].substring(0,g),C=a[d].substring(g+1)):v=a[d],u(v,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Se(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Se?(this.l=a.l,fr(this,a.j),this.o=a.o,this.g=a.g,pr(this,a.u),this.h=a.h,_o(this,_u(a.i)),this.m=a.m):a&&(u=String(a).match(hu))?(this.l=!1,fr(this,u[1]||"",!0),this.o=gr(u[2]||""),this.g=gr(u[3]||"",!0),pr(this,u[4]),this.h=gr(u[5]||"",!0),_o(this,u[6]||"",!0),this.m=gr(u[7]||"")):(this.l=!1,this.i=new _r(null,this.l))}Se.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(mr(u,du,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(mr(u,du,!0),"@"),a.push(hr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(mr(d,d.charAt(0)=="/"?qg:Hg,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",mr(d,Wg)),a.join("")},Se.prototype.resolve=function(a){const u=ae(this);let d=!!a.j;d?fr(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var g=a.h;if(d)pr(u,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var v=u.h.lastIndexOf("/");v!=-1&&(g=u.h.slice(0,v+1)+g)}if(v=g,v==".."||v==".")g="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){g=v.lastIndexOf("/",0)==0,v=v.split("/");const C=[];for(let D=0;D<v.length;){const q=v[D++];q=="."?g&&D==v.length&&C.push(""):q==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&D==v.length&&C.push("")):(C.push(q),g=!0)}g=C.join("/")}else g=v}return d?u.h=g:d=a.i.toString()!=="",d?_o(u,_u(a.i)):d=!!a.m,d&&(u.m=a.m),u};function ae(a){return new Se(a)}function fr(a,u,d){a.j=d?gr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function pr(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function _o(a,u,d){u instanceof _r?(a.i=u,Jg(a.i,a.l)):(d||(u=mr(u,zg)),a.i=new _r(u,a.l))}function et(a,u,d){a.i.set(u,d)}function ws(a){return et(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function gr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,$g),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $g(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var du=/[#\/\?@]/g,Hg=/[#\?:]/g,qg=/[#\?]/g,zg=/[#\?@]/g,Wg=/#/g;function _r(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function rn(a){a.g||(a.g=new Map,a.h=0,a.i&&jg(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=_r.prototype,n.add=function(a,u){rn(this),this.i=null,a=In(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function fu(a,u){rn(a),u=In(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function pu(a,u){return rn(a),u=In(a,u),a.g.has(u)}n.forEach=function(a,u){rn(this),this.g.forEach(function(d,g){d.forEach(function(v){a.call(u,v,g,this)},this)},this)};function gu(a,u){rn(a);let d=[];if(typeof u=="string")pu(a,u)&&(d=d.concat(a.g.get(In(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return rn(this),this.i=null,a=In(this,a),pu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=gu(this,a),a.length>0?String(a[0]):u):u};function mu(a,u,d){fu(a,u),d.length>0&&(a.i=null,a.g.set(In(a,u),A(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var d=u[g];const v=hr(d);d=gu(this,d);for(let C=0;C<d.length;C++){let D=v;d[C]!==""&&(D+="="+hr(d[C])),a.push(D)}}return this.i=a.join("&")};function _u(a){const u=new _r;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function In(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Jg(a,u){u&&!a.j&&(rn(a),a.i=null,a.g.forEach(function(d,g){const v=g.toLowerCase();g!=v&&(fu(this,g),mu(this,v,d))},a)),a.j=u}function Gg(a,u){const d=new lr;if(o.Image){const g=new Image;g.onload=f(Pe,d,"TestLoadImage: loaded",!0,u,g),g.onerror=f(Pe,d,"TestLoadImage: error",!1,u,g),g.onabort=f(Pe,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=f(Pe,d,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Kg(a,u){const d=new lr,g=new AbortController,v=setTimeout(()=>{g.abort(),Pe(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(C=>{clearTimeout(v),C.ok?Pe(d,"TestPingServer: ok",!0,u):Pe(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),Pe(d,"TestPingServer: error",!1,u)})}function Pe(a,u,d,g,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),g(d)}catch{}}function Qg(){this.g=new Dg}function yo(a){this.i=a.Sb||null,this.h=a.ab||!1}p(yo,Jc),yo.prototype.g=function(){return new Is(this.i,this.h)};function Is(a,u){Pt.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Is,Pt),n=Is.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Tr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yr(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function yu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?yr(this):Tr(this),this.readyState==3&&yu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,yr(this))},n.Na=function(a){this.g&&(this.response=a,yr(this))},n.ga=function(){this.g&&yr(this)};function yr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Tr(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Tr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tu(a){let u="";return gs(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function To(a,u,d){t:{for(g in d){var g=!1;break t}g=!0}g||(d=Tu(d),typeof a=="string"?d!=null&&hr(d):et(a,u,d))}function ct(a){Pt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ct,Pt);var Xg=/^https?$/i,Yg=["POST","PUT"];n=ct.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tu.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){Eu(this,C);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var v in g)d.set(v,g[v]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())d.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),v=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Yg,u,void 0)>=0)||g||v||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,D]of d)this.g.setRequestHeader(C,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(C){Eu(this,C)}};function Eu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,wu(a),vs(a)}function wu(a){a.A||(a.A=!0,Nt(a,"complete"),Nt(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Nt(this,"complete"),Nt(this,"abort"),vs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vs(this,!0)),ct.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Iu(this):this.Xa())},n.Xa=function(){Iu(this)};function Iu(a){if(a.h&&typeof i<"u"){if(a.v&&ke(a)==4)setTimeout(a.Ca.bind(a),0);else if(Nt(a,"readystatechange"),ke(a)==4){a.h=!1;try{const C=a.ca();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var d;if(!(d=u)){var g;if(g=C===0){let D=String(a.D).match(hu)[1]||null;!D&&o.self&&o.self.location&&(D=o.self.location.protocol.slice(0,-1)),g=!Xg.test(D?D.toLowerCase():"")}d=g}if(d)Nt(a,"complete"),Nt(a,"success");else{a.o=6;try{var v=ke(a)>2?a.g.statusText:""}catch{v=""}a.l=v+" ["+a.ca()+"]",wu(a)}}finally{vs(a)}}}}function vs(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||Nt(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ke(a){return a.g?a.g.readyState:0}n.ca=function(){try{return ke(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Vg(u)}};function vu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Zg(a){const u={};a=(a.g&&ke(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=xg(a[g]);const v=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[v]||[];u[v]=C,C.push(d)}bg(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Au(a){this.za=0,this.i=[],this.j=new lr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Er("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Er("baseRetryDelayMs",5e3,a),this.Za=Er("retryDelaySeedMs",1e4,a),this.Ta=Er("forwardChannelMaxRetries",2,a),this.va=Er("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ou(a&&a.concurrentRequestLimit),this.Ba=new Qg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Au.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,g){Ot(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Nu(this,null,this.W),bs(this)};function Eo(a){if(bu(a),a.I==3){var u=a.V++,d=ae(a.J);if(et(d,"SID",a.M),et(d,"RID",u),et(d,"TYPE","terminate"),wr(a,d),u=new Re(a,a.j,u),u.M=2,u.A=ws(ae(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Ou(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Es(u)}Du(a)}function As(a){a.g&&(Io(a),a.g.cancel(),a.g=null)}function bu(a){As(a),a.v&&(o.clearTimeout(a.v),a.v=null),Cs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function bs(a){if(!au(a.h)&&!a.m){a.m=!0;var u=a.Ea;Ht||_(),gt||(Ht(),gt=!0),w.add(u,a),a.D=0}}function tm(a,u){return cu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ur(h(a.Ea,a,u),Vu(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const v=new Re(this,this.j,a);let C=this.o;if(this.U&&(C?(C=xc(C),Uc(C,this.U)):C=this.U),this.u!==null||this.R||(v.J=C,C=null),this.S)t:{for(var u=0,d=0;d<this.i.length;d++){e:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=d;break t}if(u===4096||d===this.i.length-1){u=d+1;break t}}u=1e3}else u=1e3;u=Ru(this,v,u),d=ae(this.J),et(d,"RID",a),et(d,"CVER",22),this.G&&et(d,"X-HTTP-Session-Id",this.G),wr(this,d),C&&(this.R?u="headers="+hr(Tu(C))+"&"+u:this.u&&To(d,this.u,C)),mo(this.h,v),this.Ra&&et(d,"TYPE","init"),this.S?(et(d,"$req",u),et(d,"SID","null"),v.U=!0,ho(v,d,null)):ho(v,d,u),this.I=2}}else this.I==3&&(a?Cu(this,a):this.i.length==0||au(this.h)||Cu(this))};function Cu(a,u){var d;u?d=u.l:d=a.V++;const g=ae(a.J);et(g,"SID",a.M),et(g,"RID",d),et(g,"AID",a.K),wr(a,g),a.u&&a.o&&To(g,a.u,a.o),d=new Re(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Ru(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),mo(a.h,d),ho(d,g,u)}function wr(a,u){a.H&&gs(a.H,function(d,g){et(u,g,d)}),a.l&&gs({},function(d,g){et(u,g,d)})}function Ru(a,u,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;t:{var v=a.i;let q=-1;for(;;){const mt=["count="+d];q==-1?d>0?(q=v[0].g,mt.push("ofs="+q)):q=0:mt.push("ofs="+q);let Y=!0;for(let Et=0;Et<d;Et++){var C=v[Et].g;const ce=v[Et].map;if(C-=q,C<0)q=Math.max(0,v[Et].g-100),Y=!1;else try{C="req"+C+"_"||"";try{var D=ce instanceof Map?ce:Object.entries(ce);for(const[on,Ve]of D){let De=Ve;c(Ve)&&(De=oo(Ve)),mt.push(C+on+"="+encodeURIComponent(De))}}catch(on){throw mt.push(C+"type="+encodeURIComponent("_badmap")),on}}catch{g&&g(ce)}}if(Y){D=mt.join("&");break t}}D=void 0}return a=a.i.splice(0,d),u.G=a,D}function Su(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;Ht||_(),gt||(Ht(),gt=!0),w.add(u,a),a.A=0}}function wo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ur(h(a.Da,a),Vu(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Pu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ur(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ot(10),As(this),Pu(this))};function Io(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Pu(a){a.g=new Re(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=ae(a.na);et(u,"RID","rpc"),et(u,"SID",a.M),et(u,"AID",a.K),et(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&et(u,"TO",a.ia),et(u,"TYPE","xmlhttp"),wr(a,u),a.u&&a.o&&To(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ws(ae(u)),d.u=null,d.R=!0,ru(d,a)}n.Va=function(){this.C!=null&&(this.C=null,As(this),wo(this),Ot(19))};function Cs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ku(a,u){var d=null;if(a.g==u){Cs(a),Io(a),a.g=null;var g=2}else if(go(a.h,u))d=u.G,uu(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var v=a.D;g=ys(),Nt(g,new Yc(g,d)),bs(a)}else Su(a);else if(v=u.m,v==3||v==0&&u.X>0||!(g==1&&tm(a,u)||g==2&&wo(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),v){case 1:sn(a,5);break;case 4:sn(a,10);break;case 3:sn(a,6);break;default:sn(a,2)}}}function Vu(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function sn(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),g=a.Ua;const v=!g;g=new Se(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||fr(g,"https"),ws(g),v?Gg(g.toString(),d):Kg(g.toString(),d)}else Ot(2);a.I=0,a.l&&a.l.pa(u),Du(a),bu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Du(a){if(a.I=0,a.ja=[],a.l){const u=lu(a.h);(u.length!=0||a.i.length!=0)&&(R(a.ja,u),R(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Nu(a,u,d){var g=d instanceof Se?ae(d):new Se(d);if(g.g!="")u&&(g.g=u+"."+g.g),pr(g,g.u);else{var v=o.location;g=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;const C=new Se(null);g&&fr(C,g),u&&(C.g=u),v&&pr(C,v),d&&(C.h=d),g=C}return d=a.G,u=a.wa,d&&u&&et(g,d,u),et(g,"VER",a.ka),wr(a,g),g}function Ou(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new ct(new yo({ab:d})):new ct(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}n=Mu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Rs(){}Rs.prototype.g=function(a,u){return new qt(a,u)};function qt(a,u){Pt.call(this),this.g=new Au(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!y(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new vn(this)}p(qt,Pt),qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Eo(this.g)},qt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=oo(a),a=d);u.i.push(new Bg(u.Ya++,a)),u.I==3&&bs(u)},qt.prototype.N=function(){this.g.l=null,delete this.j,Eo(this.g),delete this.g,qt.Z.N.call(this)};function Lu(a){ao.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){t:{for(const d in u){a=d;break t}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Lu,ao);function xu(){co.call(this),this.status=1}p(xu,co);function vn(a){this.g=a}p(vn,Mu),vn.prototype.ra=function(){Nt(this.g,"a")},vn.prototype.qa=function(a){Nt(this.g,new Lu(a))},vn.prototype.pa=function(a){Nt(this.g,new xu)},vn.prototype.oa=function(){Nt(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Jf=function(){return new Rs},Wf=function(){return ys()},zf=en,Zo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Bs=Ts,Zc.COMPLETE="complete",qf=Zc,Gc.EventType=ar,ar.OPEN="a",ar.CLOSE="b",ar.ERROR="c",ar.MESSAGE="d",Pt.prototype.listen=Pt.prototype.J,Ir=Gc,ct.prototype.listenOnce=ct.prototype.K,ct.prototype.getLastError=ct.prototype.Ha,ct.prototype.getLastErrorCode=ct.prototype.ya,ct.prototype.getStatus=ct.prototype.ca,ct.prototype.getResponseJson=ct.prototype.La,ct.prototype.getResponseText=ct.prototype.la,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Fa,Hf=ct}).apply(typeof Vs<"u"?Vs:typeof self<"u"?self:typeof window<"u"?window:{});const kl="@firebase/firestore",Vl="4.9.3";/**
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
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Gf(n,r,e)}function Gf(n,t,e){let r=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ae(r),new Error(r)}function Q(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Gf(t,s,r)}function j(n,t){return n}/**
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
 */class Ee{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Kf{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Qv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Vt.UNAUTHENTICATED)))}shutdown(){}}class Xv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Yv{constructor(t){this.t=t,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let i=new Ee;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ee,t.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;t.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ee)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new Kf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string",2055,{h:t}),new Vt(t)}}class Zv{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tA{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Zv(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Dl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eA{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Q(this.o===void 0,3512);const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>r(i)))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Dl(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Q(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Dl(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nA(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class tc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function W(n,t){return n<t?-1:n>t?1:0}function ta(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return Mo(s)===Mo(i)?W(s,i):Mo(s)?1:-1}return W(n.length,t.length)}const rA=55296,sA=57343;function Mo(n){const t=n.charCodeAt(0);return t>=rA&&t<=sA}function jn(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
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
 */const Nl="__name__";class ue{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ue.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ue?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=ue.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return W(t.length,e.length)}static compareSegments(t,e){const r=ue.isNumericId(t),s=ue.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?ue.extractNumericId(t).compare(ue.extractNumericId(e)):ta(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return $e.fromString(t.substring(4,t.length-2))}}class nt extends ue{construct(t,e,r){return new nt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new nt(e)}static emptyPath(){return new nt([])}}const iA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends ue{construct(t,e,r){return new Rt(t,e,r)}static isValidIdentifier(t){return iA.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nl}static keyField(){return new Rt([Nl])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Rt(e)}static emptyPath(){return new Rt([])}}/**
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
 */function oA(n,t,e){if(!e)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function aA(n,t,e,r){if(t===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ol(n){if(!x.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ec(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function we(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ec(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function ft(n,t){const e={typeString:n};return t&&(e.value=t),e}function os(n,t){if(!Qf(n))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new O(P.INVALID_ARGUMENT,e);return!0}/**
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
 */const Ml=-62135596800,Ll=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ll);return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ml)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ll}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(os(t,rt._jsonSchema))return new rt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ml;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:ft("string",rt._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
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
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new rt(0,0))}static max(){return new F(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Br=-1;function cA(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new We(s,x.empty(),t)}function uA(n){return new We(n.readTime,n.key,Br)}class We{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new We(F.min(),x.empty(),Br)}static max(){return new We(F.max(),x.empty(),Br)}}function lA(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:W(n.largestBatchId,t.largestBatchId))}/**
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
 */const hA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function rr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==hA)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let s=0,i=0,o=!1;t.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&e()}),(l=>r(l)))})),o=!0,i===s&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((s=>s?S.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,i)=>{r.push(e.call(this,s,i))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,s)=>{const i=t.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;e(t[h]).next((f=>{o[h]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(t,e){return new S(((r,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):r()};i()}))}}function fA(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function sr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const nc=-1;function as(n){return n==null}function ai(n){return n===0&&1/n==-1/0}function pA(n){return typeof n=="number"&&Number.isInteger(n)&&!ai(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Xf="";function gA(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=xl(t)),t=mA(n.get(e),t);return xl(t)}function mA(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":e+="";break;case Xf:e+="";break;default:e+=i}}return e}function xl(n){return n+Xf+""}/**
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
 */function Fl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ye(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Yf(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class ot{constructor(t,e){this.comparator=t,this.root=e||Ct.EMPTY}insert(t,e){return new ot(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(t){return new ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ds(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ds(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ds(this.root,t,this.comparator,!0)}}class Ds{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ct{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??Ct.RED,this.left=s??Ct.EMPTY,this.right=i??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new Ct(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new Ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Jt{constructor(t){this.fields=t,t.sort(Rt.comparator)}static empty(){return new Jt([])}unionWith(t){let e=new yt(Rt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Jt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return jn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Zf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class St{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zf("Invalid base64 string: "+i):i}})(t);return new St(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(t);return new St(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}St.EMPTY_BYTE_STRING=new St("");const _A=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Je(n){if(Q(!!n,39018),typeof n=="string"){let t=0;const e=_A.exec(n);if(Q(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ge(n){return typeof n=="string"?St.fromBase64String(n):St.fromUint8Array(n)}/**
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
 */const tp="server_timestamp",ep="__type__",np="__previous_value__",rp="__local_write_time__";function rc(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[ep])==null?void 0:r.stringValue)===tp}function Oi(n){const t=n.mapValue.fields[np];return rc(t)?Oi(t):t}function jr(n){const t=Je(n.mapValue.fields[rp].timestampValue);return new rt(t.seconds,t.nanos)}/**
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
 */class yA{constructor(t,e,r,s,i,o,c,l,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const ci="(default)";class $r{constructor(t,e){this.projectId=t,this.database=e||ci}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database===ci}isEqual(t){return t instanceof $r&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const sp="__type__",TA="__max__",Ns={mapValue:{}},ip="__vector__",ui="value";function Ke(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rc(n)?4:wA(n)?9007199254740991:EA(n)?10:11:L(28295,{value:n})}function ge(n,t){if(n===t)return!0;const e=Ke(n);if(e!==Ke(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return jr(n).isEqual(jr(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Je(s.timestampValue),c=Je(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,i){return Ge(s.bytesValue).isEqual(Ge(i.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,i){return ut(s.geoPointValue.latitude)===ut(i.geoPointValue.latitude)&&ut(s.geoPointValue.longitude)===ut(i.geoPointValue.longitude)})(n,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ut(s.integerValue)===ut(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ut(s.doubleValue),c=ut(i.doubleValue);return o===c?ai(o)===ai(c):isNaN(o)&&isNaN(c)}return!1})(n,t);case 9:return jn(n.arrayValue.values||[],t.arrayValue.values||[],ge);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Fl(o)!==Fl(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!ge(o[l],c[l])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function Hr(n,t){return(n.values||[]).find((e=>ge(e,t)))!==void 0}function $n(n,t){if(n===t)return 0;const e=Ke(n),r=Ke(t);if(e!==r)return W(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,t.booleanValue);case 2:return(function(i,o){const c=ut(i.integerValue||i.doubleValue),l=ut(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,t);case 3:return Bl(n.timestampValue,t.timestampValue);case 4:return Bl(jr(n),jr(t));case 5:return ta(n.stringValue,t.stringValue);case 6:return(function(i,o){const c=Ge(i),l=Ge(o);return c.compareTo(l)})(n.bytesValue,t.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=W(c[h],l[h]);if(f!==0)return f}return W(c.length,l.length)})(n.referenceValue,t.referenceValue);case 8:return(function(i,o){const c=W(ut(i.latitude),ut(o.latitude));return c!==0?c:W(ut(i.longitude),ut(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return jl(n.arrayValue,t.arrayValue);case 10:return(function(i,o){var m,A,R,V;const c=i.fields||{},l=o.fields||{},h=(m=c[ui])==null?void 0:m.arrayValue,f=(A=l[ui])==null?void 0:A.arrayValue,p=W(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:jl(h,f)})(n.mapValue,t.mapValue);case 11:return(function(i,o){if(i===Ns.mapValue&&o===Ns.mapValue)return 0;if(i===Ns.mapValue)return 1;if(o===Ns.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=ta(l[p],f[p]);if(m!==0)return m;const A=$n(c[l[p]],h[f[p]]);if(A!==0)return A}return W(l.length,f.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function Bl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return W(n,t);const e=Je(n),r=Je(t),s=W(e.seconds,r.seconds);return s!==0?s:W(e.nanos,r.nanos)}function jl(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=$n(e[s],r[s]);if(i)return i}return W(e.length,r.length)}function Hn(n){return ea(n)}function ea(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Je(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Ge(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return x.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=ea(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ea(e.fields[o])}`;return s+"}"})(n.mapValue):L(61005,{value:n})}function js(n){switch(Ke(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Oi(n);return t?16+js(t):16;case 5:return 2*n.stringValue.length;case 6:return Ge(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+js(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ye(r.fields,((i,o)=>{s+=i.length+js(o)})),s})(n.mapValue);default:throw L(13486,{value:n})}}function na(n){return!!n&&"integerValue"in n}function sc(n){return!!n&&"arrayValue"in n}function $l(n){return!!n&&"nullValue"in n}function Hl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $s(n){return!!n&&"mapValue"in n}function EA(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[sp])==null?void 0:r.stringValue)===ip}function Pr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Ye(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Pr(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Pr(n.arrayValue.values[e]);return t}return{...n}}function wA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===TA}/**
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
 */class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!$s(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pr(e)}setAll(t){let e=Rt.emptyPath(),r={},s=[];t.forEach(((o,c)=>{if(!e.isImmediateParentOf(c)){const l=this.getFieldsMap(e);this.applyChanges(l,r,s),r={},s=[],e=c.popLast()}o?r[c.lastSegment()]=Pr(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());$s(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ge(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];$s(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ye(e,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new Mt(Pr(this.value))}}function op(n){const t=[];return Ye(n.fields,((e,r)=>{const s=new Rt([e]);if($s(r)){const i=op(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)})),new Jt(t)}/**
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
 */class vt{constructor(t,e,r,s,i,o,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(t){return new vt(t,0,F.min(),F.min(),F.min(),Mt.empty(),0)}static newFoundDocument(t,e,r,s){return new vt(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new vt(t,2,e,F.min(),F.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,F.min(),F.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class li{constructor(t,e){this.position=t,this.inclusive=e}}function ql(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],o=n.position[s];if(i.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),e.key):r=$n(o,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ge(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class hi{constructor(t,e="asc"){this.field=t,this.dir=e}}function IA(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ap{}class _t extends ap{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new AA(t,e,r):e==="array-contains"?new RA(t,r):e==="in"?new SA(t,r):e==="not-in"?new PA(t,r):e==="array-contains-any"?new kA(t,r):new _t(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new bA(t,r):new CA(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison($n(e,this.value)):e!==null&&Ke(this.value)===Ke(e)&&this.matchesComparison($n(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class me extends ap{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new me(t,e)}matches(t){return cp(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function cp(n){return n.op==="and"}function up(n){return vA(n)&&cp(n)}function vA(n){for(const t of n.filters)if(t instanceof me)return!1;return!0}function ra(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+Hn(n.value);if(up(n))return n.filters.map((t=>ra(t))).join(",");{const t=n.filters.map((e=>ra(e))).join(",");return`${n.op}(${t})`}}function lp(n,t){return n instanceof _t?(function(r,s){return s instanceof _t&&r.op===s.op&&r.field.isEqual(s.field)&&ge(r.value,s.value)})(n,t):n instanceof me?(function(r,s){return s instanceof me&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&lp(o,s.filters[c])),!0):!1})(n,t):void L(19439)}function hp(n){return n instanceof _t?(function(e){return`${e.field.canonicalString()} ${e.op} ${Hn(e.value)}`})(n):n instanceof me?(function(e){return e.op.toString()+" {"+e.getFilters().map(hp).join(" ,")+"}"})(n):"Filter"}class AA extends _t{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class bA extends _t{constructor(t,e){super(t,"in",e),this.keys=dp("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class CA extends _t{constructor(t,e){super(t,"not-in",e),this.keys=dp("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function dp(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>x.fromName(r.referenceValue)))}class RA extends _t{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return sc(e)&&Hr(e.arrayValue,this.value)}}class SA extends _t{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Hr(this.value.arrayValue,e)}}class PA extends _t{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Hr(this.value.arrayValue,e)}}class kA extends _t{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!sc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Hr(this.value.arrayValue,r)))}}/**
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
 */class VA{constructor(t,e=null,r=[],s=[],i=null,o=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Wl(n,t=null,e=[],r=[],s=null,i=null,o=null){return new VA(n,t,e,r,s,i,o)}function ic(n){const t=j(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>ra(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),as(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Hn(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Hn(r))).join(",")),t.Te=e}return t.Te}function oc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!IA(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!lp(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!zl(n.startAt,t.startAt)&&zl(n.endAt,t.endAt)}function sa(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Mi{constructor(t,e=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function DA(n,t,e,r,s,i,o,c){return new Mi(n,t,e,r,s,i,o,c)}function Li(n){return new Mi(n)}function Jl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function NA(n){return n.collectionGroup!==null}function kr(n){const t=j(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new yt(Rt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new hi(i,r))})),e.has(Rt.keyField().canonicalString())||t.Ie.push(new hi(Rt.keyField(),r))}return t.Ie}function he(n){const t=j(n);return t.Ee||(t.Ee=OA(t,kr(n))),t.Ee}function OA(n,t){if(n.limitType==="F")return Wl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new hi(s.field,i)}));const e=n.endAt?new li(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new li(n.startAt.position,n.startAt.inclusive):null;return Wl(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ia(n,t,e){return new Mi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function xi(n,t){return oc(he(n),he(t))&&n.limitType===t.limitType}function fp(n){return`${ic(he(n))}|lt:${n.limitType}`}function bn(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>hp(s))).join(", ")}]`),as(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>Hn(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>Hn(s))).join(",")),`Target(${r})`})(he(n))}; limitType=${n.limitType})`}function Fi(n,t){return t.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):x.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,t)&&(function(r,s){for(const i of kr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const h=ql(o,c,l);return o.inclusive?h<=0:h<0})(r.startAt,kr(r),s)||r.endAt&&!(function(o,c,l){const h=ql(o,c,l);return o.inclusive?h>=0:h>0})(r.endAt,kr(r),s))})(n,t)}function MA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pp(n){return(t,e)=>{let r=!1;for(const s of kr(n)){const i=LA(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function LA(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):(function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?$n(l,h):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
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
 */class Tn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ye(this.inner,((e,r)=>{for(const[s,i]of r)t(s,i)}))}isEmpty(){return Yf(this.inner)}size(){return this.innerSize}}/**
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
 */const xA=new ot(x.comparator);function be(){return xA}const gp=new ot(x.comparator);function vr(...n){let t=gp;for(const e of n)t=t.insert(e.key,e);return t}function mp(n){let t=gp;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function un(){return Vr()}function _p(){return Vr()}function Vr(){return new Tn((n=>n.toString()),((n,t)=>n.isEqual(t)))}const FA=new ot(x.comparator),UA=new yt(x.comparator);function G(...n){let t=UA;for(const e of n)t=t.add(e);return t}const BA=new yt(W);function jA(){return BA}/**
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
 */function ac(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(t)?"-0":t}}function yp(n){return{integerValue:""+n}}function $A(n,t){return pA(t)?yp(t):ac(n,t)}/**
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
 */class Ui{constructor(){this._=void 0}}function HA(n,t,e){return n instanceof qr?(function(s,i){const o={fields:{[ep]:{stringValue:tp},[rp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rc(i)&&(i=Oi(i)),i&&(o.fields[np]=i),{mapValue:o}})(e,t):n instanceof zr?Ep(n,t):n instanceof Wr?wp(n,t):(function(s,i){const o=Tp(s,i),c=Gl(o)+Gl(s.Ae);return na(o)&&na(s.Ae)?yp(c):ac(s.serializer,c)})(n,t)}function qA(n,t,e){return n instanceof zr?Ep(n,t):n instanceof Wr?wp(n,t):e}function Tp(n,t){return n instanceof di?(function(r){return na(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(t)?t:{integerValue:0}:null}class qr extends Ui{}class zr extends Ui{constructor(t){super(),this.elements=t}}function Ep(n,t){const e=Ip(t);for(const r of n.elements)e.some((s=>ge(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Wr extends Ui{constructor(t){super(),this.elements=t}}function wp(n,t){let e=Ip(t);for(const r of n.elements)e=e.filter((s=>!ge(s,r)));return{arrayValue:{values:e}}}class di extends Ui{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Gl(n){return ut(n.integerValue||n.doubleValue)}function Ip(n){return sc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class zA{constructor(t,e){this.field=t,this.transform=e}}function WA(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof zr&&s instanceof zr||r instanceof Wr&&s instanceof Wr?jn(r.elements,s.elements,ge):r instanceof di&&s instanceof di?ge(r.Ae,s.Ae):r instanceof qr&&s instanceof qr})(n.transform,t.transform)}class JA{constructor(t,e){this.version=t,this.transformResults=e}}class jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jt}static exists(t){return new jt(void 0,t)}static updateTime(t){return new jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hs(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Bi{}function vp(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new cc(n.key,jt.none()):new cs(n.key,n.data,jt.none());{const e=n.data,r=Mt.empty();let s=new yt(Rt.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ze(n.key,r,new Jt(s.toArray()),jt.none())}}function GA(n,t,e){n instanceof cs?(function(s,i,o){const c=s.value.clone(),l=Ql(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,t,e):n instanceof Ze?(function(s,i,o){if(!Hs(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ql(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Ap(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,t,e):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function Dr(n,t,e,r){return n instanceof cs?(function(i,o,c,l){if(!Hs(i.precondition,o))return c;const h=i.value.clone(),f=Xl(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(n,t,e,r):n instanceof Ze?(function(i,o,c,l){if(!Hs(i.precondition,o))return c;const h=Xl(i.fieldTransforms,l,o),f=o.data;return f.setAll(Ap(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,t,e,r):(function(i,o,c){return Hs(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,t,e)}function KA(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=Tp(r.transform,s||null);i!=null&&(e===null&&(e=Mt.empty()),e.set(r.field,i))}return e||null}function Kl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&jn(r,s,((i,o)=>WA(i,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class cs extends Bi{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ze extends Bi{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ap(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Ql(n,t,e){const r=new Map;Q(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const i=n[s],o=i.transform,c=t.data.field(i.field);r.set(i.field,qA(o,c,e[s]))}return r}function Xl(n,t,e){const r=new Map;for(const s of n){const i=s.transform,o=e.data.field(s.field);r.set(s.field,HA(i,o,t))}return r}class cc extends Bi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bp extends Bi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QA{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&GA(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Dr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Dr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=_p();return this.mutations.forEach((s=>{const i=t.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=e.has(s.key)?null:c;const l=vp(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),G())}isEqual(t){return this.batchId===t.batchId&&jn(this.mutations,t.mutations,((e,r)=>Kl(e,r)))&&jn(this.baseMutations,t.baseMutations,((e,r)=>Kl(e,r)))}}class uc{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Q(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return FA})();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new uc(t,e,r,s)}}/**
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
 */class XA{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class YA{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ht,K;function Cp(n){switch(n){case P.OK:return L(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function Rp(n){if(n===void 0)return Ae("GRPC error has no .code"),P.UNKNOWN;switch(n){case ht.OK:return P.OK;case ht.CANCELLED:return P.CANCELLED;case ht.UNKNOWN:return P.UNKNOWN;case ht.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ht.INTERNAL:return P.INTERNAL;case ht.UNAVAILABLE:return P.UNAVAILABLE;case ht.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ht.NOT_FOUND:return P.NOT_FOUND;case ht.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ht.ABORTED:return P.ABORTED;case ht.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ht.DATA_LOSS:return P.DATA_LOSS;default:return L(39323,{code:n})}}(K=ht||(ht={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ZA(){return new TextEncoder}/**
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
 */const tb=new $e([4294967295,4294967295],0);function Yl(n){const t=ZA().encode(n),e=new $f;return e.update(t),new Uint8Array(e.digest())}function Zl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new $e([e,r],0),new $e([s,i],0)]}class lc{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ar(`Invalid padding: ${e}`);if(r<0)throw new Ar(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ar(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ar(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=$e.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply($e.fromNumber(r)));return s.compare(tb)===1&&(s=new $e([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Yl(t),[r,s]=Zl(e);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new lc(i,s,e);return r.forEach((c=>o.insert(c))),o}insert(t){if(this.ge===0)return;const e=Yl(t),[r,s]=Zl(e);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ji{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,us.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ji(F.min(),s,new ot(W),be(),G())}}class us{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new us(r,e,G(),G(),G())}}/**
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
 */class qs{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Sp{constructor(t,e){this.targetId=t,this.Ce=e}}class Pp{constructor(t,e,r=St.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class th{constructor(){this.ve=0,this.Fe=eh(),this.Me=St.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=G(),e=G(),r=G();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:i})}})),new us(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=eh()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class eb{constructor(t){this.Ge=t,this.ze=new Map,this.je=be(),this.Je=Os(),this.He=Os(),this.Ye=new ot(W)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(sa(i))if(r===0){const o=new x(i.path);this.et(e,o,vt.newNoDocument(o,F.min()))}else Q(r===1,20013,{expectedCount:r});else{const o=this._t(e);if(o!==r){const c=this.ut(t),l=c?this.ct(c,t,o):1;if(l!==0){this.it(e);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,h)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let o,c;try{o=Ge(r).toUint8Array()}catch(l){if(l instanceof Zf)return Bn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new lc(o,s,i)}catch(l){return Bn(l instanceof Ar?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(e,i,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&sa(c.target)){const l=new x(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,t))}i.Be&&(e.set(o,i.ke()),i.qe())}}));let r=G();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(t)));const s=new ji(t,e,this.Ye,this.je,r);return this.je=be(),this.Je=Os(),this.He=Os(),this.Ye=new ot(W),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new th,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new yt(W),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new yt(W),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new th),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Os(){return new ot(x.comparator)}function eh(){return new ot(x.comparator)}const nb={asc:"ASCENDING",desc:"DESCENDING"},rb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sb={and:"AND",or:"OR"};class ib{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function oa(n,t){return n.useProto3Json||as(t)?t:{value:t}}function fi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kp(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ob(n,t){return fi(n,t.toTimestamp())}function Gt(n){return Q(!!n,49232),F.fromTimestamp((function(e){const r=Je(e);return new rt(r.seconds,r.nanos)})(n))}function hc(n,t){return aa(n,t).canonicalString()}function aa(n,t){const e=(function(s){return new nt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Vp(n){const t=nt.fromString(n);return Q(xp(t),10190,{key:t.toString()}),t}function pi(n,t){return hc(n.databaseId,t.path)}function Nr(n,t){const e=Vp(t);if(e.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(Np(e))}function Dp(n,t){return hc(n.databaseId,t)}function ab(n){const t=Vp(n);return t.length===4?nt.emptyPath():Np(t)}function ca(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Np(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function nh(n,t,e){return{name:pi(n,t),fields:e.value.mapValue.fields}}function cb(n,t){return"found"in t?(function(r,s){Q(!!s.found,43571),s.found.name,s.found.updateTime;const i=Nr(r,s.found.name),o=Gt(s.found.updateTime),c=s.found.createTime?Gt(s.found.createTime):F.min(),l=new Mt({mapValue:{fields:s.found.fields}});return vt.newFoundDocument(i,o,c,l)})(n,t):"missing"in t?(function(r,s){Q(!!s.missing,3894),Q(!!s.readTime,22933);const i=Nr(r,s.missing),o=Gt(s.readTime);return vt.newNoDocument(i,o)})(n,t):L(7234,{result:t})}function ub(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:L(39313,{state:h})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(Q(f===void 0||typeof f=="string",58123),St.fromBase64String(f||"")):(Q(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),St.fromUint8Array(f||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?P.UNKNOWN:Rp(h.code);return new O(f,h.message||"")})(o);e=new Pp(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nr(n,r.document.name),i=Gt(r.document.updateTime),o=r.document.createTime?Gt(r.document.createTime):F.min(),c=new Mt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];e=new qs(h,f,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Nr(n,r.document),i=r.readTime?Gt(r.readTime):F.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];e=new qs([],c,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Nr(n,r.document),i=r.removedTargetIds||[];e=new qs([],i,s,null)}else{if(!("filter"in t))return L(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new YA(s,i),c=r.targetId;e=new Sp(c,o)}}return e}function Op(n,t){let e;if(t instanceof cs)e={update:nh(n,t.key,t.value)};else if(t instanceof cc)e={delete:pi(n,t.key)};else if(t instanceof Ze)e={update:nh(n,t.key,t.data),updateMask:yb(t.fieldMask)};else{if(!(t instanceof bp))return L(16599,{Vt:t.type});e={verify:pi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof qr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof zr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Wr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof di)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw L(20930,{transform:o.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:ob(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:L(27497)})(n,t.precondition)),e}function lb(n,t){return n&&n.length>0?(Q(t!==void 0,14353),n.map((e=>(function(s,i){let o=s.updateTime?Gt(s.updateTime):Gt(i);return o.isEqual(F.min())&&(o=Gt(i)),new JA(o,s.transformResults||[])})(e,t)))):[]}function hb(n,t){return{documents:[Dp(n,t.path)]}}function db(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Dp(n,s);const i=(function(h){if(h.length!==0)return Lp(me.create(h,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:Cn(m.field),direction:gb(m.dir)}})(f)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const c=oa(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(t.endAt)),{ft:e,parent:s}}function fb(n){let t=ab(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Q(r===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=(function(p){const m=Mp(p);return m instanceof me&&up(m)?m.getFilters():[m]})(e.where));let o=[];e.orderBy&&(o=(function(p){return p.map((m=>(function(R){return new hi(Rn(R.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(e.orderBy));let c=null;e.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,as(m)?null:m})(e.limit));let l=null;e.startAt&&(l=(function(p){const m=!!p.before,A=p.values||[];return new li(A,m)})(e.startAt));let h=null;return e.endAt&&(h=(function(p){const m=!p.before,A=p.values||[];return new li(A,m)})(e.endAt)),DA(t,s,o,i,c,"F",l,h)}function pb(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Mp(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Rn(e.unaryFilter.field);return _t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rn(e.unaryFilter.field);return _t.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rn(e.unaryFilter.field);return _t.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rn(e.unaryFilter.field);return _t.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return _t.create(Rn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return me.create(e.compositeFilter.filters.map((r=>Mp(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function gb(n){return nb[n]}function mb(n){return rb[n]}function _b(n){return sb[n]}function Cn(n){return{fieldPath:n.canonicalString()}}function Rn(n){return Rt.fromServerFormat(n.fieldPath)}function Lp(n){return n instanceof _t?(function(e){if(e.op==="=="){if(Hl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NAN"}};if($l(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Hl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NAN"}};if($l(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(e.field),op:mb(e.op),value:e.value}}})(n):n instanceof me?(function(e){const r=e.getFilters().map((s=>Lp(s)));return r.length===1?r[0]:{compositeFilter:{op:_b(e.op),filters:r}}})(n):L(54877,{filter:n})}function yb(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function xp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class xe{constructor(t,e,r,s,i=F.min(),o=F.min(),c=St.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(t){return new xe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Tb{constructor(t){this.yt=t}}function Eb(n){const t=fb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ia(t,t.limit,"L"):t}/**
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
 */class wb{constructor(){this.Cn=new Ib}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(We.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(We.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Ib{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new yt(nt.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new yt(nt.comparator)).toArray()}}/**
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
 */const rh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fp=41943040;class Bt{static withCacheSize(t){return new Bt(t,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(Fp,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);/**
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
 */class qn{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new qn(0)}static cr(){return new qn(-1)}}/**
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
 */const sh="LruGarbageCollector",vb=1048576;function ih([n,t],[e,r]){const s=W(n,e);return s===0?W(t,r):s}class Ab{constructor(t){this.Ir=t,this.buffer=new yt(ih),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ih(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class bb{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(sh,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){sr(e)?N(sh,"Ignoring IndexedDB error during garbage collection: ",e):await rr(e)}await this.Vr(3e5)}))}}class Cb{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Ni.ce);const r=new Ab(e);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(rh)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rh):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(t,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(t,r,e)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(t,r)))).next((p=>(h=Date.now(),An()<=z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Rb(n,t){return new Cb(n,t)}/**
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
 */class Sb{constructor(){this.changes=new Tn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Pb{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class kb{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Dr(r.mutation,s,Jt.empty(),rt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,G()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=G()){const s=un();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((i=>{let o=vr();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const r=un();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,G())))}populateOverlays(t,e,r){const s=[];return r.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((o,c)=>{e.set(o,c)}))}))}computeViews(t,e,r,s){let i=be();const o=Vr(),c=(function(){return Vr()})();return e.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Ze)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Dr(f.mutation,h,f.mutation.getFieldMask(),rt.now())):o.set(h.key,Jt.empty())})),this.recalculateAndSaveOverlays(t,i).next((l=>(l.forEach(((h,f)=>o.set(h,f))),e.forEach(((h,f)=>c.set(h,new Pb(f,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(t,e){const r=Vr();let s=new ot(((o,c)=>o-c)),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=e.get(l);if(h===null)return;let f=r.get(l)||Jt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||G()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=_p();f.forEach((m=>{if(!i.has(m)){const A=vp(e.get(m),r.get(m));A!==null&&p.set(m,A),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(t,h,p))}return S.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(o){return x.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):NA(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):S.resolve(un());let c=Br,l=i;return o.next((h=>S.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?S.resolve():this.remoteDocumentCache.getEntry(t,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(t,h,i))).next((()=>this.computeViews(t,l,h,G()))).next((f=>({batchId:c,changes:mp(f)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next((r=>{let s=vr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let o=vr();return this.indexManager.getCollectionParents(t,i).next((c=>S.forEach(c,(l=>{const h=(function(p,m){return new Mi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s)))).next((o=>{i.forEach(((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))}));let c=vr();return o.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&Dr(f.mutation,h,Jt.empty(),rt.now()),Fi(e,h)&&(c=c.insert(l,h))})),c}))}}/**
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
 */class Vb{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:Eb(s.bundledQuery),readTime:Gt(s.readTime)}})(e)),S.resolve()}}/**
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
 */class Db{constructor(){this.overlays=new ot(x.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=un();return S.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,i)=>{this.St(t,e,i)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=un(),i=e.length+1,o=new x(e.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new ot(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=un(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=un(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return S.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new XA(e,r));let i=this.qr.get(e);i===void 0&&(i=G(),this.qr.set(e,i)),this.qr.set(e,i.add(r.key))}}/**
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
 */class Nb{constructor(){this.sessionToken=St.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
 */class dc{constructor(){this.Qr=new yt(It.$r),this.Ur=new yt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new It(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new It(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new x(new nt([])),r=new It(e,t),s=new It(e,t+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new x(new nt([])),r=new It(e,t),s=new It(e,t+1);let i=G();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(t){const e=new It(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class It{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return x.comparator(t.key,e.key)||W(t.Yr,e.Yr)}static Kr(t,e){return W(t.Yr,e.Yr)||x.comparator(t.key,e.key)}}/**
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
 */class Ob{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new yt(It.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QA(i,e,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new It(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(o)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?nc:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new It(e,0),s=new It(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new yt(W);return e.forEach((s=>{const i=new It(s,0),o=new It(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;x.isDocumentKey(i)||(i=i.child(""));const o=new It(new x(i),0);let c=new yt(W);return this.Zr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)}),o),S.resolve(this.ti(c))}ti(t){const e=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){Q(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,(s=>{const i=new It(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new It(e,0),s=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Mb{constructor(t){this.ri=t,this.docs=(function(){return new ot(x.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let r=be();return e.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=be();const o=e.path,c=new x(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||lA(uA(f),r)<=0||(s.has(f.key)||Fi(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(t,e,r,s){L(9500)}ii(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Lb(this)}getSize(t){return S.resolve(this.size)}}class Lb extends Sb{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class xb{constructor(t){this.persistence=t,this.si=new Tn((e=>ic(e)),oc),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.oi=0,this._i=new dc,this.targetCount=0,this.ai=qn.ur()}forEachTarget(t,e){return this.si.forEach(((r,s)=>e(s))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new qn(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),S.waitFor(i).next((()=>s))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((o=>{i.push(s.markPotentiallyOrphaned(t,o))})),S.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
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
 */class Up{constructor(t,e){this.ui={},this.overlays={},this.ci=new Ni(0),this.li=!1,this.li=!0,this.hi=new Nb,this.referenceDelegate=t(this),this.Pi=new xb(this),this.indexManager=new wb,this.remoteDocumentCache=(function(s){return new Mb(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Tb(e),this.Ii=new Vb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Db,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Ob(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new Fb(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(t,e){return S.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class Fb extends dA{constructor(t){super(),this.currentSequenceNumber=t}}class fc{constructor(t){this.persistence=t,this.Ri=new dc,this.Vi=null}static mi(t){return new fc(t)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(r=>{const s=x.fromPath(r);return this.gi(t,s).next((i=>{i||e.removeEntry(s,F.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class gi{constructor(t,e){this.persistence=t,this.pi=new Tn((r=>gA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Rb(this,e)}static mi(t,e){return new gi(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return S.forEach(this.pi,((r,s)=>this.br(t,r,s).next((i=>i?S.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,(o=>this.br(t,o,e).next((c=>{c||(r++,i.removeEntry(o,F.min()))})))).next((()=>i.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=js(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ub{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Bb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return kE()?8:fA(Dt())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ys(t,e).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(t,e,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Ub;return this.Ss(t,e,o).next((c=>{if(i.result=c,this.Vs)return this.bs(t,e,o,c.size)}))})).next((()=>i.result))}bs(t,e,r,s){return r.documentReadCount<this.fs?(An()<=z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",bn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(An()<=z.DEBUG&&N("QueryEngine","Query:",bn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(An()<=z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",bn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,he(e))):S.resolve())}ys(t,e){if(Jl(e))return S.resolve(null);let r=he(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=ia(e,null,"F"),r=he(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((i=>{const o=G(...i);return this.ps.getDocuments(t,o).next((c=>this.indexManager.getMinOffset(t,r).next((l=>{const h=this.Ds(e,c);return this.Cs(e,h,o,l.readTime)?this.ys(t,ia(e,null,"F")):this.vs(t,h,e,l)}))))})))))}ws(t,e,r,s){return Jl(e)||s.isEqual(F.min())?S.resolve(null):this.ps.getDocuments(t,r).next((i=>{const o=this.Ds(e,i);return this.Cs(e,o,r,s)?S.resolve(null):(An()<=z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bn(e)),this.vs(t,o,e,cA(s,Br)).next((c=>c)))}))}Ds(t,e){let r=new yt(pp(t));return e.forEach(((s,i)=>{Fi(t,i)&&(r=r.add(i))})),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,r){return An()<=z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",bn(e)),this.ps.getDocumentsMatchingQuery(t,e,We.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((i=>(e.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const gc="LocalStore",jb=3e8;class $b{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new ot(W),this.xs=new Tn((i=>ic(i)),oc),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Hb(n,t,e,r){return new $b(n,t,e,r)}async function Bp(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=G();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return e.localDocuments.getDocuments(r,l).next((h=>({Ls:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function qb(n,t){const e=j(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,m=p.keys();let A=S.resolve();return m.forEach((R=>{A=A.next((()=>f.getEntry(l,R))).next((V=>{const k=h.docVersions.get(R);Q(k!==null,48541),V.version.compareTo(k)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))}))})),A.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(e,r,t,i).next((()=>i.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=G();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function jp(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function zb(n,t){const e=j(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const c=[];t.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(e.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>e.Pi.addMatchingKeys(i,f.addedDocuments,p))));let A=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?A=A.withResumeToken(St.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(p,A),(function(V,k,U){return V.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=jb?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(m,A,f)&&c.push(e.Pi.updateTargetData(i,A))}));let l=be(),h=G();if(t.documentUpdates.forEach((f=>{t.resolvedLimboDocuments.has(f)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(Wb(i,o,t.documentUpdates).next((f=>{l=f.ks,h=f.qs}))),!r.isEqual(F.min())){const f=e.Pi.getLastRemoteSnapshotVersion(i).next((p=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return S.waitFor(c).next((()=>o.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(e.Ms=s,i)))}function Wb(n,t,e){let r=G(),s=G();return e.forEach((i=>r=r.add(i))),t.getEntries(n,r).next((i=>{let o=be();return e.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(F.min())?(t.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(l),o=o.insert(c,l)):N(gc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function Jb(n,t){const e=j(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=nc),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function Gb(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.Pi.getTargetData(r,t).next((i=>i?(s=i,S.resolve(s)):e.Pi.allocateTargetId(r).next((o=>(s=new xe(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function ua(n,t,e){const r=j(n),s=r.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!sr(o))throw o;N(gc,`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function oh(n,t,e){const r=j(n);let s=F.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,f){const p=j(l),m=p.xs.get(f);return m!==void 0?S.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,f)})(r,o,he(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,t,e?s:F.min(),e?i:G()))).next((c=>(Kb(r,MA(t),c),{documents:c,Qs:i})))))}function Kb(n,t,e){let r=n.Os.get(t)||F.min();e.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(t,r)}class ah{constructor(){this.activeTargetIds=jA()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qb{constructor(){this.Mo=new ah,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new ah,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Xb{Oo(t){}shutdown(){}}/**
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
 */const Lo="RestConnection",Yb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Zb{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ci?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,i){const o=la(),c=this.zo(t,e.toUriEncodedString());N(Lo,`Sending RPC '${t}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=Yn(h);return this.Jo(t,c,l,r,f).then((p=>(N(Lo,`Received RPC '${t}' ${o}: `,p),p)),(p=>{throw Bn(Lo,`RPC '${t}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(t,e,r,s,i,o){return this.Go(t,e,r,s,i)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+nr})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s))}zo(t,e){const r=Yb[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
 */class tC{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const kt="WebChannelConnection";class eC extends Zb{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,i){const o=la();return new Promise(((c,l)=>{const h=new Hf;h.setWithCredentials(!0),h.listenOnce(qf.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Bs.NO_ERROR:const p=h.getResponseJson();N(kt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),c(p);break;case Bs.TIMEOUT:N(kt,`RPC '${t}' ${o} timed out`),l(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Bs.HTTP_ERROR:const m=h.getStatus();if(N(kt,`RPC '${t}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const V=(function(U){const $=U.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN})(R.status);l(new O(V,R.message))}else l(new O(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new O(P.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{N(kt,`RPC '${t}' ${o} completed.`)}}));const f=JSON.stringify(s);N(kt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)}))}T_(t,e,r){const s=la(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Jf(),c=Wf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const f=i.join("");N(kt,`Creating RPC '${t}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,A=!1;const R=new tC({Yo:k=>{A?N(kt,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(m||(N(kt,`Opening RPC '${t}' stream ${s} transport.`),p.open(),m=!0),N(kt,`RPC '${t}' stream ${s} sending:`,k),p.send(k))},Zo:()=>p.close()}),V=(k,U,$)=>{k.listen(U,(H=>{try{$(H)}catch(at){setTimeout((()=>{throw at}),0)}}))};return V(p,Ir.EventType.OPEN,(()=>{A||(N(kt,`RPC '${t}' stream ${s} transport opened.`),R.o_())})),V(p,Ir.EventType.CLOSE,(()=>{A||(A=!0,N(kt,`RPC '${t}' stream ${s} transport closed`),R.a_(),this.E_(p))})),V(p,Ir.EventType.ERROR,(k=>{A||(A=!0,Bn(kt,`RPC '${t}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),R.a_(new O(P.UNAVAILABLE,"The operation could not be completed")))})),V(p,Ir.EventType.MESSAGE,(k=>{var U;if(!A){const $=k.data[0];Q(!!$,16349);const H=$,at=(H==null?void 0:H.error)||((U=H[0])==null?void 0:U.error);if(at){N(kt,`RPC '${t}' stream ${s} received error:`,at);const Ht=at.status;let gt=(function(T){const I=ht[T];if(I!==void 0)return Rp(I)})(Ht),w=at.message;gt===void 0&&(gt=P.INTERNAL,w="Unknown error status: "+Ht+" with message "+at.message),A=!0,R.a_(new O(gt,w)),p.close()}else N(kt,`RPC '${t}' stream ${s} received:`,$),R.u_($)}})),V(c,zf.STAT_EVENT,(k=>{k.stat===Zo.PROXY?N(kt,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===Zo.NOPROXY&&N(kt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{R.__()}),0),R}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function xo(){return typeof document<"u"?document:null}/**
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
 */function $i(n){return new ib(n,!0)}/**
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
 */const lh="PersistentStream";class $p{constructor(t,e,r,s,i,o,c,l){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new mc(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ae(e.toString()),Ae("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return N(lh,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(N(lh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nC extends $p{constructor(t,e,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=ub(this.serializer,t),r=(function(i){if(!("targetChange"in i))return F.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?Gt(o.readTime):F.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=ca(this.serializer),e.addTarget=(function(i,o){let c;const l=o.target;if(c=sa(l)?{documents:hb(i,l)}:{query:db(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=kp(i,o.resumeToken);const h=oa(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(F.min())>0){c.readTime=fi(i,o.snapshotVersion.toTimestamp());const h=oa(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,t);const r=pb(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=ca(this.serializer),e.removeTarget=t,this.q_(e)}}class rC extends $p{constructor(t,e,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Q(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Q(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Q(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=lb(t.writeResults,t.commitTime),r=Gt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=ca(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Op(this.serializer,r)))};this.q_(e)}}/**
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
 */class sC{}class iC extends sC{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(t,aa(e,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(P.UNKNOWN,i.toString())}))}Ho(t,e,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(t,aa(e,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(P.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class oC{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
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
 */const gn="RemoteStore";class aC{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{En(this)&&(N(gn,"Restarting streams for network reachability change."),await(async function(l){const h=j(l);h.Ea.add(4),await ls(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Hi(h)})(this))}))})),this.Ra=new oC(r,s)}}async function Hi(n){if(En(n))for(const t of n.da)await t(!0)}async function ls(n){for(const t of n.da)await t(!1)}function Hp(n,t){const e=j(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Ec(e)?Tc(e):ir(e).O_()&&yc(e,t))}function _c(n,t){const e=j(n),r=ir(e);e.Ia.delete(t),r.O_()&&qp(e,t),e.Ia.size===0&&(r.O_()?r.L_():En(e)&&e.Ra.set("Unknown"))}function yc(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ir(n).Y_(t)}function qp(n,t){n.Va.Ue(t),ir(n).Z_(t)}function Tc(n){n.Va=new eb({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),ir(n).start(),n.Ra.ua()}function Ec(n){return En(n)&&!ir(n).x_()&&n.Ia.size>0}function En(n){return j(n).Ea.size===0}function zp(n){n.Va=void 0}async function cC(n){n.Ra.set("Online")}async function uC(n){n.Ia.forEach(((t,e)=>{yc(n,t)}))}async function lC(n,t){zp(n),Ec(n)?(n.Ra.ha(t),Tc(n)):n.Ra.set("Unknown")}async function hC(n,t,e){if(n.Ra.set("Online"),t instanceof Pp&&t.state===2&&t.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(n,t)}catch(r){N(gn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await mi(n,r)}else if(t instanceof qs?n.Va.Ze(t):t instanceof Sp?n.Va.st(t):n.Va.tt(t),!e.isEqual(F.min()))try{const r=await jp(n.localStore);e.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(St.EMPTY_BYTE_STRING,f.snapshotVersion)),qp(i,l);const p=new xe(f.target,l,h,f.sequenceNumber);yc(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){N(gn,"Failed to raise snapshot:",r),await mi(n,r)}}async function mi(n,t,e){if(!sr(t))throw t;n.Ea.add(1),await ls(n),n.Ra.set("Offline"),e||(e=()=>jp(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(gn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Hi(n)}))}function Wp(n,t){return t().catch((e=>mi(n,e,t)))}async function qi(n){const t=j(n),e=Qe(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:nc;for(;dC(t);)try{const s=await Jb(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,fC(t,s)}catch(s){await mi(t,s)}Jp(t)&&Gp(t)}function dC(n){return En(n)&&n.Ta.length<10}function fC(n,t){n.Ta.push(t);const e=Qe(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Jp(n){return En(n)&&!Qe(n).x_()&&n.Ta.length>0}function Gp(n){Qe(n).start()}async function pC(n){Qe(n).ra()}async function gC(n){const t=Qe(n);for(const e of n.Ta)t.ea(e.mutations)}async function mC(n,t,e){const r=n.Ta.shift(),s=uc.from(r,t,e);await Wp(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await qi(n)}async function _C(n,t){t&&Qe(n).X_&&await(async function(r,s){if((function(o){return Cp(o)&&o!==P.ABORTED})(s.code)){const i=r.Ta.shift();Qe(r).B_(),await Wp(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await qi(r)}})(n,t),Jp(n)&&Gp(n)}async function hh(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),N(gn,"RemoteStore received new credentials");const r=En(e);e.Ea.add(3),await ls(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Hi(e)}async function yC(n,t){const e=j(n);t?(e.Ea.delete(2),await Hi(e)):t||(e.Ea.add(2),await ls(e),e.Ra.set("Unknown"))}function ir(n){return n.ma||(n.ma=(function(e,r,s){const i=j(e);return i.sa(),new nC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:cC.bind(null,n),t_:uC.bind(null,n),r_:lC.bind(null,n),H_:hC.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),Ec(n)?Tc(n):n.Ra.set("Unknown")):(await n.ma.stop(),zp(n))}))),n.ma}function Qe(n){return n.fa||(n.fa=(function(e,r,s){const i=j(e);return i.sa(),new rC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:pC.bind(null,n),r_:_C.bind(null,n),ta:gC.bind(null,n),na:mC.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await qi(n)):(await n.fa.stop(),n.Ta.length>0&&(N(gn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class wc{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,c=new wc(t,e,o,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ic(n,t){if(Ae("AsyncQueue",`${t}: ${n}`),sr(n))return new O(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class dh{constructor(){this.ga=new ot(x.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class zn{constructor(t,e,r,s,i,o,c,l,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,s,i){const o=[];return e.forEach((c=>{o.push({type:0,doc:c})})),new zn(t,e,On.emptySet(e),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class TC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class EC{constructor(){this.queries=fh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=j(e),i=s.queries;s.queries=fh(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new O(P.ABORTED,"Firestore shutting down"))}}function fh(){return new Tn((n=>fp(n)),xi)}async function Kp(n,t){const e=j(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new TC,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const c=Ic(o,`Initialization of query '${bn(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&vc(e)}async function Qp(n,t){const e=j(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const o=i.Sa.indexOf(t);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function wC(n,t){const e=j(n);let r=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&vc(e)}function IC(n,t,e){const r=j(n),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);r.queries.delete(t)}function vc(n){n.Ca.forEach((t=>{t.next()}))}var ha,ph;(ph=ha||(ha={})).Ma="default",ph.Cache="cache";class Xp{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new zn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=zn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ha.Cache}}/**
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
 */class Yp{constructor(t){this.key=t}}class Zp{constructor(t){this.key=t}}class vC{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=G(),this.mutatedKeys=G(),this.eu=pp(t),this.tu=new On(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new dh,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((f,p)=>{const m=s.get(f),A=Fi(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let k=!1;m&&A?m.data.isEqual(A.data)?R!==V&&(r.track({type:3,doc:A}),k=!0):this.su(m,A)||(r.track({type:2,doc:A}),k=!0,(l&&this.eu(A,l)>0||h&&this.eu(A,h)<0)&&(c=!0)):!m&&A?(r.track({type:0,doc:A}),k=!0):m&&!A&&(r.track({type:1,doc:m}),k=!0,(l||h)&&(c=!0)),k&&(A?(o=o.add(A),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const o=t.iu.ya();o.sort(((f,p)=>(function(A,R){const V=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Rt:k})}};return V(A)-V(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=e&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new zn(this.query,t.tu,i,o,t.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new dh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=G(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new Zp(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new Yp(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=G();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return zn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ac="SyncEngine";class AC{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class bC{constructor(t){this.key=t,this.hu=!1}}class CC{constructor(t,e,r,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Tn((c=>fp(c)),xi),this.Iu=new Map,this.Eu=new Set,this.du=new ot(x.comparator),this.Au=new Map,this.Ru=new dc,this.Vu={},this.mu=new Map,this.fu=qn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function RC(n,t,e=!0){const r=ig(n);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await tg(r,t,e,!0),s}async function SC(n,t){const e=ig(n);await tg(e,t,!0,!1)}async function tg(n,t,e,r){const s=await Gb(n.localStore,he(t)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,e);let c;return r&&(c=await PC(n,t,i,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&Hp(n.remoteStore,s),c}async function PC(n,t,e,r,s){n.pu=(p,m,A)=>(async function(V,k,U,$){let H=k.view.ru(U);H.Cs&&(H=await oh(V.localStore,k.query,!1).then((({documents:w})=>k.view.ru(w,H))));const at=$&&$.targetChanges.get(k.targetId),Ht=$&&$.targetMismatches.get(k.targetId)!=null,gt=k.view.applyChanges(H,V.isPrimaryClient,at,Ht);return mh(V,k.targetId,gt.au),gt.snapshot})(n,p,m,A);const i=await oh(n.localStore,t,!0),o=new vC(t,i.Qs),c=o.ru(i.documents),l=us.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);mh(n,e,h.au);const f=new AC(t,e,o);return n.Tu.set(t,f),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),h.snapshot}async function kC(n,t,e){const r=j(n),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!xi(o,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ua(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&_c(r.remoteStore,s.targetId),da(r,s.targetId)})).catch(rr)):(da(r,s.targetId),await ua(r.localStore,s.targetId,!0))}async function VC(n,t){const e=j(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),_c(e.remoteStore,r.targetId))}async function DC(n,t,e){const r=UC(n);try{const s=await(function(o,c){const l=j(o),h=rt.now(),f=c.reduce(((A,R)=>A.add(R.key)),G());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let R=be(),V=G();return l.Ns.getEntries(A,f).next((k=>{R=k,R.forEach(((U,$)=>{$.isValidDocument()||(V=V.add(U))}))})).next((()=>l.localDocuments.getOverlayedDocuments(A,R))).next((k=>{p=k;const U=[];for(const $ of c){const H=KA($,p.get($.key).overlayedDocument);H!=null&&U.push(new Ze($.key,H,op(H.value.mapValue),jt.exists(!0)))}return l.mutationQueue.addMutationBatch(A,h,U,c)})).next((k=>{m=k;const U=k.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(A,k.batchId,U)}))})).then((()=>({batchId:m.batchId,changes:mp(p)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new ot(W)),h=h.insert(c,l),o.Vu[o.currentUser.toKey()]=h})(r,s.batchId,e),await hs(r,s.changes),await qi(r.remoteStore)}catch(s){const i=Ic(s,"Failed to persist write");e.reject(i)}}async function eg(n,t){const e=j(n);try{const r=await zb(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const o=e.Au.get(i);o&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Q(o.hu,14607):s.removedDocuments.size>0&&(Q(o.hu,42227),o.hu=!1))})),await hs(e,r,t)}catch(r){await rr(r)}}function gh(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=j(o);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(h=!0)})),h&&vc(l)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function NC(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),i=s&&s.key;if(i){let o=new ot(x.comparator);o=o.insert(i,vt.newNoDocument(i,F.min()));const c=G().add(i),l=new ji(F.min(),new Map,new ot(W),o,c);await eg(r,l),r.du=r.du.remove(i),r.Au.delete(t),bc(r)}else await ua(r.localStore,t,!1).then((()=>da(r,t,e))).catch(rr)}async function OC(n,t){const e=j(n),r=t.batch.batchId;try{const s=await qb(e.localStore,t);rg(e,r,null),ng(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await hs(e,s)}catch(s){await rr(s)}}async function MC(n,t,e){const r=j(n);try{const s=await(function(o,c){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Q(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,t);rg(r,t,e),ng(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await hs(r,s)}catch(s){await rr(s)}}function ng(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function rg(n,t,e){const r=j(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function da(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||sg(n,r)}))}function sg(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(_c(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),bc(n))}function mh(n,t,e){for(const r of e)r instanceof Yp?(n.Ru.addReference(r.key,t),LC(n,r)):r instanceof Zp?(N(Ac,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||sg(n,r.key)):L(19791,{wu:r})}function LC(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(N(Ac,"New document in limbo: "+e),n.Eu.add(r),bc(n))}function bc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new x(nt.fromString(t)),r=n.fu.next();n.Au.set(r,new bC(e)),n.du=n.du.insert(e,r),Hp(n.remoteStore,new xe(he(Li(e.path)),r,"TargetPurposeLimboResolution",Ni.ce))}}async function hs(n,t,e){const r=j(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,t,e).then((h=>{var f;if((h||e)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=pc.As(l.targetId,h);i.push(p)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,h){const f=j(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>S.forEach(h,(m=>S.forEach(m.Es,(A=>f.persistence.referenceDelegate.addReference(p,m.targetId,A))).next((()=>S.forEach(m.ds,(A=>f.persistence.referenceDelegate.removeReference(p,m.targetId,A)))))))))}catch(p){if(!sr(p))throw p;N(gc,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const A=f.Ms.get(m),R=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(m,V)}}})(r.localStore,i))}async function xC(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){N(Ac,"User change. New user:",t.toKey());const r=await Bp(e.localStore,t);e.currentUser=t,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new O(P.CANCELLED,o))}))})),i.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await hs(e,r.Ls)}}function FC(n,t){const e=j(n),r=e.Au.get(t);if(r&&r.hu)return G().add(r.key);{let s=G();const i=e.Iu.get(t);if(!i)return s;for(const o of i){const c=e.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function ig(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=eg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=FC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=NC.bind(null,t),t.Pu.H_=wC.bind(null,t.eventManager),t.Pu.yu=IC.bind(null,t.eventManager),t}function UC(n){const t=j(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=OC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=MC.bind(null,t),t}class _i{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$i(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Hb(this.persistence,new Bb,t.initialUser,this.serializer)}Cu(t){return new Up(fc.mi,this.serializer)}Du(t){return new Qb}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_i.provider={build:()=>new _i};class BC extends _i{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Q(this.persistence.referenceDelegate instanceof gi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new bb(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new Up((r=>gi.mi(r,e)),this.serializer)}}class fa{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xC.bind(null,this.syncEngine),await yC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new EC})()}createDatastore(t){const e=$i(t.databaseInfo.databaseId),r=(function(i){return new eC(i)})(t.databaseInfo);return(function(i,o,c,l){return new iC(i,o,c,l)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,i,o,c){return new aC(r,s,i,o,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>gh(this.syncEngine,e,0)),(function(){return uh.v()?new uh:new Xb})())}createSyncEngine(t,e){return(function(s,i,o,c,l,h,f){const p=new CC(s,i,o,c,l,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=j(s);N(gn,"RemoteStore shutting down."),i.Ea.add(5),await ls(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}fa.provider={build:()=>new fa};/**
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
 */class og{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ae("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */class jC{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await(async function(s,i){const o=j(s),c={documents:i.map((p=>pi(o.serializer,p)))},l=await o.Ho("BatchGetDocuments",o.serializer.databaseId,nt.emptyPath(),c,i.length),h=new Map;l.forEach((p=>{const m=cb(o.serializer,p);h.set(m.key.toString(),m)}));const f=[];return i.forEach((p=>{const m=h.get(p.toString());Q(!!m,55234,{key:p}),f.push(m)})),f})(this.datastore,t);return e.forEach((r=>this.recordVersion(r))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new cc(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((e,r)=>{const s=x.fromPath(r);this.mutations.push(new bp(s,this.precondition(s)))})),await(async function(r,s){const i=j(r),o={writes:s.map((c=>Op(i.serializer,c)))};await i.Go("Commit",i.serializer.databaseId,nt.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw L(50498,{Gu:t.constructor.name});e=F.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new O(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(F.min())?jt.exists(!1):jt.updateTime(e):jt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(F.min()))throw new O(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return jt.updateTime(e)}return jt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class $C{constructor(t,e,r,s,i){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=s,this.deferred=i,this.zu=r.maxAttempts,this.M_=new mc(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const t=new jC(this.datastore),e=this.Hu(t);e&&e.then((r=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Yu(s)}))))})).catch((r=>{this.Yu(r)}))}))}Hu(t){try{const e=this.updateFunction(t);return!as(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Yu(t){this.zu>0&&this.Zu(t)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(t)}Zu(t){if((t==null?void 0:t.name)==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Cp(e)}return!1}}/**
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
 */const Xe="FirestoreClient";class HC{constructor(t,e,r,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Vt.UNAUTHENTICATED,this.clientId=tc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{N(Xe,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(N(Xe,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ic(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Fo(n,t){n.asyncQueue.verifyOperationInProgress(),N(Xe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Bp(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function _h(n,t){n.asyncQueue.verifyOperationInProgress();const e=await qC(n);N(Xe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>hh(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>hh(t.remoteStore,s))),n._onlineComponents=t}async function qC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Xe,"Using user provided OfflineComponentProvider");try{await Fo(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Bn("Error using user provided cache. Falling back to memory cache: "+e),await Fo(n,new _i)}}else N(Xe,"Using default OfflineComponentProvider"),await Fo(n,new BC(void 0));return n._offlineComponents}async function Cc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Xe,"Using user provided OnlineComponentProvider"),await _h(n,n._uninitializedComponentsProvider._online)):(N(Xe,"Using default OnlineComponentProvider"),await _h(n,new fa))),n._onlineComponents}function zC(n){return Cc(n).then((t=>t.syncEngine))}function WC(n){return Cc(n).then((t=>t.datastore))}async function pa(n){const t=await Cc(n),e=t.eventManager;return e.onListen=RC.bind(null,t.syncEngine),e.onUnlisten=kC.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=SC.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=VC.bind(null,t.syncEngine),e}function JC(n,t,e={}){const r=new Ee;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new og({next:m=>{f.Nu(),o.enqueueAndForget((()=>Qp(i,p)));const A=m.docs.has(c);!A&&m.fromCache?h.reject(new O(P.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&l&&l.source==="server"?h.reject(new O(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Xp(Li(c.path),f,{includeMetadataChanges:!0,qa:!0});return Kp(i,p)})(await pa(n),n.asyncQueue,t,e,r))),r.promise}/**
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
 */function ag(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const cg="firestore.googleapis.com",Th=!0;class Eh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cg,this.ssl=Th}else this.host=t.host,this.ssl=t.ssl??Th;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Fp;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<vb)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}aA("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ag(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rc{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Qv;switch(r.type){case"firstParty":return new tA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=yh.get(e);r&&(N("ComponentProvider","Removing Datastore"),yh.delete(e),r.terminate())})(this),Promise.resolve()}}function GC(n,t,e,r={}){var h;n=we(n,Rc);const s=Yn(t),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;s&&(Zd(`https://${c}`),tf("Firestore",!0)),i.host!==cg&&i.host!==c&&Bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!hn(l,o)&&(n._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Vt.MOCK_USER;else{f=wE(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Vt(m)}n._authCredentials=new Xv(new Kf(f,p))}}/**
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
 */class zi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zi(this.firestore,t,this._query)}}class pt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pt(this.firestore,t,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(os(e,pt._jsonSchema))return new pt(t,r||null,new x(nt.fromString(e.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:ft("string",pt._jsonSchemaVersion),referencePath:ft("string")};class Jr extends zi{constructor(t,e,r){super(t,e,Li(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pt(this.firestore,null,new x(t))}withConverter(t){return new Jr(this.firestore,t,this._path)}}function Wi(n,t,...e){if(n=At(n),arguments.length===1&&(t=tc.newId()),oA("doc","path",t),n instanceof Rc){const r=nt.fromString(t,...e);return Ol(r),new pt(n,null,new x(r))}{if(!(n instanceof pt||n instanceof Jr))throw new O(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(nt.fromString(t,...e));return Ol(r),new pt(n.firestore,n instanceof Jr?n.converter:null,new x(r))}}/**
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
 */const wh="AsyncQueue";class Ih{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new mc(this,"async_queue_retry"),this._c=()=>{const r=xo();r&&N(wh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=xo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=xo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Ee;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!sr(t))throw t;N(wh,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Ae("INTERNAL UNHANDLED ERROR: ",vh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=wc.createAndSchedule(this,t,e,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:vh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function vh(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Ah(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class Wn extends Rc{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ih,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ih(t),this._firestoreClient=void 0,await t}}}function KC(n,t){const e=typeof n=="object"?n:sf(),r=typeof n=="string"?n:ci,s=ja(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=TE("firestore");i&&GC(s,...i)}return s}function Ji(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||QC(n),n._firestoreClient}function QC(n){var r,s,i;const t=n._freezeSettings(),e=(function(c,l,h,f){return new yA(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ag(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new HC(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class zt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zt(St.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new zt(St.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(os(t,zt._jsonSchema))return zt.fromBase64String(t.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:ft("string",zt._jsonSchemaVersion),bytes:ft("string")};/**
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
 */class Gi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class de{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:de._jsonSchemaVersion}}static fromJSON(t){if(os(t,de._jsonSchema))return new de(t.latitude,t.longitude)}}de._jsonSchemaVersion="firestore/geoPoint/1.0",de._jsonSchema={type:ft("string",de._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class fe{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:fe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(os(t,fe._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new fe(t.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fe._jsonSchemaVersion="firestore/vectorValue/1.0",fe._jsonSchema={type:ft("string",fe._jsonSchemaVersion),vectorValues:ft("object")};/**
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
 */const XC=/^__.*__$/;class YC{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ze(t,this.data,this.fieldMask,e,this.fieldTransforms):new cs(t,this.data,e,this.fieldTransforms)}}class ug{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ze(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function lg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:n})}}class Sc{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Sc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return yi(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(lg(this.Ac)&&XC.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class ZC{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||$i(t)}Cc(t,e,r,s=!1){return new Sc({Ac:t,methodName:e,Dc:r,path:Rt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hg(n){const t=n._freezeSettings(),e=$i(n._databaseId);return new ZC(n._databaseId,!!t.ignoreUndefinedProperties,e)}function dg(n,t,e,r,s,i={}){const o=n.Cc(i.merge||i.mergeFields?2:0,t,e,s);kc("Data must be an object, but it was:",o,r);const c=fg(r,o);let l,h;if(i.merge)l=new Jt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=ga(t,p,e);if(!o.contains(m))throw new O(P.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);gg(f,m)||f.push(m)}l=new Jt(f),h=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=o.fieldTransforms;return new YC(new Mt(c),l,h)}class Qi extends Ki{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Qi}}class Pc extends Ki{_toFieldTransform(t){return new zA(t.path,new qr)}isEqual(t){return t instanceof Pc}}function tR(n,t,e,r){const s=n.Cc(1,t,e);kc("Data must be an object, but it was:",s,r);const i=[],o=Mt.empty();Ye(r,((l,h)=>{const f=Vc(t,l,e);h=At(h);const p=s.yc(f);if(h instanceof Qi)i.push(f);else{const m=Xi(h,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Jt(i);return new ug(o,c,s.fieldTransforms)}function eR(n,t,e,r,s,i){const o=n.Cc(1,t,e),c=[ga(t,r,e)],l=[s];if(i.length%2!=0)throw new O(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(ga(t,i[m])),l.push(i[m+1]);const h=[],f=Mt.empty();for(let m=c.length-1;m>=0;--m)if(!gg(h,c[m])){const A=c[m];let R=l[m];R=At(R);const V=o.yc(A);if(R instanceof Qi)h.push(A);else{const k=Xi(R,V);k!=null&&(h.push(A),f.set(A,k))}}const p=new Jt(h);return new ug(f,p,o.fieldTransforms)}function Xi(n,t){if(pg(n=At(n)))return kc("Unsupported field value:",t,n),fg(n,t);if(n instanceof Ki)return(function(r,s){if(!lg(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Xi(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,t)}return(function(r,s){if((r=At(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $A(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:fi(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fi(s.serializer,i)}}if(r instanceof de)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:kp(s.serializer,r._byteString)};if(r instanceof pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof fe)return(function(o,c){return{mapValue:{fields:{[sp]:{stringValue:ip},[ui]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return ac(c.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${ec(r)}`)})(n,t)}function fg(n,t){const e={};return Yf(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ye(n,((r,s)=>{const i=Xi(s,t.mc(r));i!=null&&(e[r]=i)})),{mapValue:{fields:e}}}function pg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof de||n instanceof zt||n instanceof pt||n instanceof Ki||n instanceof fe)}function kc(n,t,e){if(!pg(e)||!Qf(e)){const r=ec(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function ga(n,t,e){if((t=At(t))instanceof Gi)return t._internalPath;if(typeof t=="string")return Vc(n,t);throw yi("Field path arguments must be of type string or ",n,!1,void 0,e)}const nR=new RegExp("[~\\*/\\[\\]]");function Vc(n,t,e){if(t.search(nR)>=0)throw yi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Gi(...t.split("."))._internalPath}catch{throw yi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function yi(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new O(P.INVALID_ARGUMENT,c+n+l)}function gg(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class Ti{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new rR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(mg("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class rR extends Ti{data(){return super.data()}}function mg(n,t){return typeof t=="string"?Vc(n,t):t instanceof Gi?t._internalPath:t._delegate._internalPath}/**
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
 */function sR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _g{convertValue(t,e="none"){switch(Ke(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ge(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ye(t,((s,i)=>{r[s]=this.convertValue(i,e)})),r}convertVectorValue(t){var r,s,i;const e=(i=(s=(r=t.fields)==null?void 0:r[ui].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>ut(o.doubleValue)));return new fe(e)}convertGeoPoint(t){return new de(ut(t.latitude),ut(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Oi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(jr(t));default:return null}}convertTimestamp(t){const e=Je(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=nt.fromString(t);Q(xp(r),9688,{name:t});const s=new $r(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(e)||Ae(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function yg(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class iR extends _g{constructor(t){super(),this.firestore=t}convertBytes(t){return new zt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new pt(this.firestore,null,e)}}class Sn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class He extends Ti{constructor(t,e,r,s,i,o){super(t,e,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(mg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=He._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}He._jsonSchemaVersion="firestore/documentSnapshot/1.0",He._jsonSchema={type:ft("string",He._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class zs extends He{data(t={}){return super.data(t)}}class Mn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Sn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new zs(this._firestore,this._userDataWriter,r.key,r,new Sn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new zs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Sn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new zs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Sn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:oR(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Mn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=tc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function oR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
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
 */function Dc(n){n=we(n,pt);const t=we(n.firestore,Wn);return JC(Ji(t),n._key).then((e=>Tg(t,n,e)))}Mn._jsonSchemaVersion="firestore/querySnapshot/1.0",Mn._jsonSchema={type:ft("string",Mn._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class Nc extends _g{constructor(t){super(),this.firestore=t}convertBytes(t){return new zt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new pt(this.firestore,null,e)}}function Yi(n,t,e){n=we(n,pt);const r=we(n.firestore,Wn),s=yg(n.converter,t,e);return aR(r,[dg(hg(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,jt.none())])}function Oc(n,...t){var l,h,f;n=At(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Ah(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Ah(t[r])){const p=t[r];t[r]=(l=p.next)==null?void 0:l.bind(p),t[r+1]=(h=p.error)==null?void 0:h.bind(p),t[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,o,c;if(n instanceof pt)o=we(n.firestore,Wn),c=Li(n._key.path),i={next:p=>{t[r]&&t[r](Tg(o,n,p))},error:t[r+1],complete:t[r+2]};else{const p=we(n,zi);o=we(p.firestore,Wn),c=p._query;const m=new Nc(o);i={next:A=>{t[r]&&t[r](new Mn(o,m,p,A))},error:t[r+1],complete:t[r+2]},sR(n._query)}return(function(m,A,R,V){const k=new og(V),U=new Xp(A,k,R);return m.asyncQueue.enqueueAndForget((async()=>Kp(await pa(m),U))),()=>{k.Nu(),m.asyncQueue.enqueueAndForget((async()=>Qp(await pa(m),U)))}})(Ji(o),c,s,i)}function aR(n,t){return(function(r,s){const i=new Ee;return r.asyncQueue.enqueueAndForget((async()=>DC(await zC(r),s,i))),i.promise})(Ji(n),t)}function Tg(n,t,e){const r=e.docs.get(t._key),s=new Nc(n);return new He(n,s,t._key,r,new Sn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const cR={maxAttempts:5};function br(n,t){if((n=At(n)).firestore!==t)throw new O(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class uR{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=hg(t)}get(t){const e=br(t,this._firestore),r=new iR(this._firestore);return this._transaction.lookup([e._key]).then((s=>{if(!s||s.length!==1)return L(24041);const i=s[0];if(i.isFoundDocument())return new Ti(this._firestore,r,i.key,i,e.converter);if(i.isNoDocument())return new Ti(this._firestore,r,e._key,null,e.converter);throw L(18433,{doc:i})}))}set(t,e,r){const s=br(t,this._firestore),i=yg(s.converter,e,r),o=dg(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(t,e,r,...s){const i=br(t,this._firestore);let o;return o=typeof(e=At(e))=="string"||e instanceof Gi?eR(this._dataReader,"Transaction.update",i._key,e,r,s):tR(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,o),this}delete(t){const e=br(t,this._firestore);return this._transaction.delete(e._key),this}}/**
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
 */class lR extends uR{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=br(t,this._firestore),r=new Nc(this._firestore);return super.get(t).then((s=>new He(this._firestore,r,e._key,s._document,new Sn(!1,!1),e.converter)))}}function hR(n,t,e){n=we(n,Wn);const r={...cR,...e};return(function(i){if(i.maxAttempts<1)throw new O(P.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(i,o,c){const l=new Ee;return i.asyncQueue.enqueueAndForget((async()=>{const h=await WC(i);new $C(i.asyncQueue,h,c,o,l).ju()})),l.promise})(Ji(n),(s=>t(new lR(n,s))),r)}function ds(){return new Pc("serverTimestamp")}(function(t,e=!0){(function(s){nr=s})(Zn),Fn(new dn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Wn(new Yv(r.getProvider("auth-internal")),new eA(o,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(h.options.projectId,f)})(o,s),o);return i={useFetchStreams:e,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Be(kl,Vl,t),Be(kl,Vl,"esm2020")})();const Uo=(n="")=>n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),dR={apiKey:"AIzaSyC8oBLWyTpzWLLjWdZxo8YgQ1IcYICxdcU",authDomain:"auth.3dlocalprint.com",projectId:"threedlocalprint",storageBucket:"threedlocalprint.firebasestorage.app",messagingSenderId:"770972495364",appId:"1:770972495364:web:b1015eaaf0de32d9b84f51"},Eg=rf(dR),Jn=Gv(Eg),bh=new _e,fs=KC(Eg),Ei=Wi(fs,"filament_inventory","list"),Mc=Wi(fs,"filament_types","list"),wg=Wi(fs,"manufacturers","list"),Lc=Wi(fs,"admins","list"),Ch=(n="")=>n.trim().toLowerCase(),fR=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),pR=async()=>{const n=[{key:"indexedDB",value:Lf},{key:"local",value:kf},{key:"session",value:Ka}];let t=null;for(const e of n)try{return await OI(Jn,e.value),{persistence:e.key,error:null}}catch(r){t=r,console.warn(`Failed to set ${e.key} persistence`,r)}return{persistence:"none",error:t}},gR=async()=>{let n=null,t=null;try{t=await lv(Jn)}catch(r){n=r,console.error("Firebase redirect sign-in failed",r)}const e=await pR();return{redirectError:n,redirectResult:t,persistence:e}},BR=async()=>{try{return await nv(Jn,bh)}catch(n){if(!fR())throw n;return console.warn("Popup sign-in failed on iOS, falling back to redirect",n),cv(Jn,bh)}},jR=()=>FI(Jn),mR=n=>xI(Jn,n),$R=async()=>{const n=await Dc(Ei);if(!n.exists())return null;const t=n.data();return Array.isArray(t.items)?t.items:[]},HR=n=>Yi(Ei,{items:n,updatedAt:ds()},{merge:!0}),qR=async()=>{const n=await Dc(Mc);if(!n.exists())return null;const t=n.data();return Array.isArray(t.items)?t.items:[]},zR=n=>Oc(Mc,t=>{if(!t.exists()){n(null);return}const e=t.data();n(Array.isArray(e.items)?e.items:[])},t=>{console.error("Failed to subscribe to filament types",t),n(null)}),WR=n=>Yi(Mc,{items:n,updatedAt:ds()},{merge:!0}),JR=async({location:n="",adjustments:t={}}={})=>{const e=Uo(n),r=Object.entries(t).filter(([,s])=>Number(s));if(!(!e||!r.length))return hR(fs,async s=>{const i=await s.get(Ei);if(!i.exists())throw new Error("Filament inventory list not found.");const o=i.data(),c=Array.isArray(o.items)?o.items:[],l=c.map(f=>{if(Uo(f.location||"")!==e)return f;const p=f.filament_type_id||"";if(!p||!(p in t))return f;const m=Number(t[p])||0;if(!m)return f;const A=Number(f.spool_inventory)||0,R=Math.max(0,A+m);return{...f,spool_inventory:R}}),h=new Set(c.filter(f=>Uo(f.location||"")===e).map(f=>f.filament_type_id).filter(Boolean));r.forEach(([f,p])=>{const m=Number(p)||0;m<=0||h.has(f)||l.push({filament_type_id:f,location:n,spool_inventory:m})}),s.set(Ei,{items:l,updatedAt:ds()},{merge:!0})})},GR=n=>Oc(wg,t=>{if(!t.exists()){n(null);return}const e=t.data();n(Array.isArray(e.items)?e.items:[])},t=>{console.error("Failed to subscribe to 🏭 manufacturers",t),n(null)}),KR=n=>Oc(Lc,t=>{if(!t.exists()){n(null);return}const e=t.data();n(Array.isArray(e.items)?e.items:[])},t=>{console.error("Failed to subscribe to admins",t),n(null)}),QR=n=>Yi(wg,{items:n,updatedAt:ds()},{merge:!0}),_R=async()=>{const n=await Dc(Lc);if(!n.exists())return[];const t=n.data();return Array.isArray(t.items)?t.items:[]},yR=async(n="")=>(await _R()).map(Ch).includes(Ch(n)),XR=n=>Yi(Lc,{items:n,updatedAt:ds()},{merge:!0}),Ig=tt((n,t,e,r,s)=>(Ig.updates(i=>{[n,t,e,r,s]=i}),n==="loading"?Co.class`panel auth-panel`(Ro("Checking login...")):n==="denied"?Co.class`panel auth-panel`(Zu("Access denied"),Ro.class`auth-warning`(()=>t||"This account"," is not authorized."),tl.class`auth-actions`(Yu({type:"button",class:"add-button",onClick:s},"Sign out"))):Co.class`panel auth-panel`(Zu("Sign in"),Ro("Use Google to access the filament inventory."),tl.class`auth-actions`(Yu({type:"button",class:"add-button",onClick:r},"Sign in with Google"))))),TR=n=>{const t=n==null?void 0:n.current;if(!t)return null;const e=t.cloneNode(!1);return t.replaceWith(e),n.current=e,e},YR=({rootRef:n,status:t,userEmail:e,adminEmail:r,onSignIn:s,onSignOut:i,setAppMounted:o})=>{const c=TR(n);if(!c)return;o&&o(!1),c.replaceChildren();const l=tt(()=>Ig(t,e,r,s,i));PT(l,c)},Rh="toast-root",ER=6e3,wR=()=>{let n=document.getElementById(Rh);return n||(n=document.createElement("div"),n.id=Rh,n.className="toast-root",document.body.appendChild(n),n)},IR=(n,t)=>{const e=document.createElement("div");return e.className=`toast toast-${t}`,e.setAttribute("role","status"),e.textContent=n,e},Bo=(n,t={})=>{if(!n)return;const{tone:e="info",duration:r=ER}=t,s=wR(),i=IR(n,e);s.appendChild(i);const o=window.setTimeout(()=>{i.remove()},r);i.addEventListener("click",()=>{window.clearTimeout(o),i.remove()},{once:!0})},ZR={info:(n,t)=>Bo(n,{...t,tone:"info"}),success:(n,t)=>Bo(n,{...t,tone:"success"}),error:(n,t)=>Bo(n,{...t,tone:"error"})},tS=({onUser:n,toast:t}={})=>{if(typeof n!="function")throw new Error("startAuthFlow requires an onUser callback.");gR().then(({redirectError:e,redirectResult:r,persistence:s})=>{var i,o;e&&((i=t==null?void 0:t.error)==null||i.call(t,"Sign-in failed after redirect. Try again.")),s!=null&&s.error&&((o=t==null?void 0:t.error)==null||o.call(t,"Safari blocked login storage. Check cookie settings.")),r!=null&&r.user&&n(r.user,"redirectResult")}).catch(e=>{var r;console.error("Failed to prepare auth",e),(r=t==null?void 0:t.error)==null||r.call(t,"Sign-in setup failed. Try again.")}),mR(e=>{n(e,"onAuthChanged")})},vR=async({user:n,mountSso:t,toast:e,onDenied:r,onPermissionsError:s}={})=>{let i=!1;try{i=await yR((n==null?void 0:n.email)||"")}catch(o){return console.error("Failed to load admin list",o),typeof s=="function"&&s(o),e!=null&&e.error&&e.error("Unable to verify access. Check Firestore rules."),typeof t=="function"&&t("denied",(n==null?void 0:n.email)||"","auth:permissions"),!1}return i?!0:(typeof r=="function"&&r(),e!=null&&e.error&&e.error(`Signed in as ${(n==null?void 0:n.email)||"unknown"} but not authorized.`),typeof t=="function"&&t("denied",(n==null?void 0:n.email)||"","auth:denied"),!1)},eS=async({user:n,mountSso:t,toast:e,setCurrentUser:r,onSignedOut:s,onDenied:i,onAuthorized:o,reason:c=""}={})=>n?(typeof r=="function"&&r({email:n.email||"",photoURL:n.photoURL||""}),await vR({user:n,mountSso:t,toast:e,onDenied:i,onPermissionsError:i})?(typeof o=="function"&&o(n,c),!0):!1):(typeof r=="function"&&r(null),typeof s=="function"&&s(),typeof t=="function"&&t("login","","auth:logged-out"),!1);export{BR as A,eS as B,TR as C,PT as D,MR as E,M as F,AT as G,Yy as H,NR as I,eT as J,DR as K,zR as L,GR as M,WR as N,QR as O,KR as P,XR as Q,JR as R,CR as a,RR as b,Yu as c,tl as d,OR as e,FR as f,PR as g,VR as h,SR as i,Co as j,Zu as k,LR as l,kR as m,bR as n,Wy as o,Ro as p,Uo as q,HR as r,xR as s,tt as t,qR as u,$R as v,jR as w,tS as x,ZR as y,YR as z};
