var Ug=Object.defineProperty;var Bg=(n,t,e)=>t in n?Ug(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Kt=(n,t,e)=>Bg(n,typeof t!="symbol"?t+"":t,e);function fn(n){return n.renderCount=n.renderCount||0,n.varCounter=0,n.state={newer:{state:[],states:[]}},n.global={blocked:[]}}function qs(){return st.stateConfig.support}function _i(n){return Jt(n.context),st.stateConfig.support=n}const Ot=function(){};let Ut=[];const Ws=[];let te=[],zt=[],zs=[];const gt={locks:0};function jg(n,t){t.textContent=n}function ye(){gt.locks>0||$g()}function $g(){++gt.locks,Wg(),--gt.locks,Hg()}function Hg(){zg();const n=zs;zs=[];for(const t of n)t[0](...t[1])}function qg(){for(const n of Ws)n[0](...n[1])}function Wg(){const n=Ws.length;qg(),Ws.splice(0,n);for(const t of te)t[0](...t[1]);for(const t of zt)t[0](...t[1]);for(const t of Ut)t[0](...t[1])}function zg(){Ut=[],te=[],zt=[]}function Dr(n,t){Ws.push([Jg,[n,t]])}function Jg(n,t){n.parentNode.removeChild(n)}function $e(n,t,e){n.parentNode.insertBefore(t,n)}function ee(n,t){n.appendChild(t)}const Mn=typeof document=="object"&&document.createElement("div");function Gg(n){return Mn.innerHTML=n,document.createTextNode(Mn.innerHTML)}function hh(n,t,e=Ot,r){const s=Gg(t);$e(n,s),e(s)}function Kg(n,t,e=Ot){Mn.innerHTML=t;const r=document.createTextNode(Mn.textContent);$e(n,r),e(r)}function Qg(n,t,e){Mn.innerHTML=t;const r=document.createTextNode(Mn.textContent);ee(n,r),e(r)}const pn="";var Js;(function(n){n.string="string",n.number="number",n.boolean="boolean",n.undefined="undefined"})(Js||(Js={}));var Q;(function(n){n.function="function",n.date="date",n.unknown="unknown",n.object="object"})(Q||(Q={}));const Yg=Date.now(),J={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",renderOnce:"renderOnce",stateRender:"stateRender",version:Yg};function dh(n){if(!n)return!1;switch(n.tagJsType){case J.dom:case J.tag:case J.templater:return!0}return!1}function Jr(n){const t=n==null?void 0:n.tagJsType;return t===J.tagComponent||t===J.stateRender}function Xg(n){return yi(n)&&typeof n.subscribe===Q.function}function zn(n){return n&&He(n.then)}function He(n){return typeof n===Q.function}function yi(n){return typeof n===Q.object&&n!==null}function Ft(n){return Array.isArray(n)}function fh(n){const t=n.state;if(t&&t.newest&&t.newest)return t.newest;if(n.parentContext)return fh(n.parentContext)}function Gr(n){let t=n;for(;t.ownerSupport&&!Jr(t.templater);)t=t.ownerSupport;const r=t.context.state;return r&&r.newest||t}function Zg(...n){return n}function ph(n){const t=st.stateConfig;return t.states[t.statesIndex]=n,++t.statesIndex,n(Zg)}function tm(n){const t=st.stateConfig,e=t.statesIndex,l=Gr(t.prevSupport).context.state.older.states[e];let h=[];l(function(...m){return h=m,l.lastValues=h,m});const f=function(...m){return h};return t.states[t.statesIndex]=n,++t.statesIndex,n(f)}function gh(n){Jt(n);const t=st.stateConfig;t.handlers.handler=mh,t.handlers.statesHandler=ph,t.rearray=[];const e=t.state=[],r=t.states=[];t.statesIndex=0;const s=n.state=n.state||{};s.newer={state:e,states:r}}class em{}function nm(n){const[t]=n(em),[e]=n(t);return[t,e]}function rm(n){const t=n.callback;if(!t)return n.defaultValue;const[e]=nm(t);return e}function sm(){const n=st.stateConfig,e=n.rearray[n.state.length];return n.state.push(e),e.defaultValue}function mh(n){var a,c;const t=st.stateConfig,e=le();if(!e||!e.state){const l="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(l,{config:t,context:e,function:(c=(a=t.support)==null?void 0:a.templater.wrapper)==null?void 0:c.original}),new Error(l)}const r=e.state.newer;t.state=r.state;let s=n;if(typeof n===Q.function&&(s=n()),typeof s===Q.function){const l=s;s=function(...f){return l(...f)},s.original=l}const i={get:function(){return rm(i)},defaultValue:s};return t.state.push(i),s}function im(n){const t=new Z,e=r=>{const s=[],i=[],a=(g,m)=>{if(s[m]=!0,i[m]=g,s.length===n.length){for(const S of s)if(!S)return;r(i,h)}},c=[...n],h=c.shift().subscribe(g=>a(g,0)),f=c.map((g,m)=>g.subscribe(b=>a(b,m+1)));return h.subscriptions=f,h};return t.subscribeWith=e,t}function om(n,t){const e=n.findIndex(r=>r.callback===t);e!==-1&&n.splice(e,1)}function am(n,t,e){const r=Z.globalSubCount$;Z.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=t,s.subscriptions=[],s.unsubscribe=function(){return cm(s,e,t)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{t(i,s)},s}function _h(n,t,e){const r=[...t],s=r.shift(),i=f=>{if(r.length)return _h(f,r,e);e(f)};let a=i;const h=s(n,{setHandler:f=>a=f,next:i});a(h)}function cm(n,t,e){om(t,e);const r=Z.globalSubCount$;Z.globalSubCount$.next(r.value-1),n.unsubscribe=()=>n;const s=n.subscriptions;for(const i of s)i.unsubscribe();return n}const Sn=class Sn{constructor(t,e){Kt(this,"onSubscription");Kt(this,"methods",[]);Kt(this,"isSubject",!0);Kt(this,"subscribers",[]);Kt(this,"subscribeWith");Kt(this,"value");Kt(this,"set",this.next.bind(this));this.onSubscription=e,arguments.length>0&&(this.value=t)}subscribe(t){const e=am(this,t,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=t;t=i=>{_h(i,this.methods,a=>s(a,e))}}return r(t)}return this.subscribers.push(e),this.onSubscription&&this.onSubscription(e),e}next(t){this.value=t,this.emit()}emit(){const t=this.value,e=this.subscribers;for(const r of e)r.callback(t,r)}toPromise(){return new Promise(t=>{this.subscribe((e,r)=>{r.unsubscribe(),t(e)})})}toCallback(t){const e=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>e.unsubscribe(),0),t(r)});return e}pipe(...t){const e=[];"value"in this&&e.push(this.value);const r=new Sn(...e);return r.setMethods(t),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(t){this.methods=t}static all(t){const e=t.map(r=>Xg(r)?r:new Sn(r,i=>(i.next(r),i)));return im(e)}};Kt(Sn,"globalSubCount$",new Sn(0));let Z=Sn;const um=new Z(void 0,function(t){qs()||t.next()}),st={stateConfig:{state:[],version:Date.now(),handlers:{handler:mh,statesHandler:ph}},tagClosed$:um};function lm(n,t){const r=n.templater.tag.values;for(const s of t)hm(r,s,n);return t}function hm(n,t,e){if(t.deleted)return;const r=t.valueIndex,s=n[r],i=t.tagJsVar;Jt(t),i.processUpdate(s,t,e,n),Bt(),t.value=s}function yh(n,t){const e=n.context.contexts;dm(n,t),++gt.locks,lm(n,e),--gt.locks,ye()}function dm(n,t){const e=t.templater,r=t.templater.tag,s=e.values||r.values,i=n.templater.tag;i.values=s}function fm(n,t){return ko(n,t)}function ko(n,t){if(n===null||typeof n!==Q.object||t<0)return n;if(n instanceof Date)return new Date(n);if(n instanceof RegExp)return new RegExp(n);const e=Ft(n)?[]:Object.create(Object.getPrototypeOf(n));if(Ft(n))for(let r=0;r<n.length;r++)e[r]=ko(n[r],t-1);else for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=ko(n[r],t-1));return e}function Th(n,t,e){return oa(n,t,e)}function oa(n,t,e){return n===t||mm(n,t)||e<0?!0:typeof n===Q.object&&typeof t===Q.object?n instanceof Date&&t instanceof Date?n.getTime()===t.getTime():Ft(n)&&Ft(t)?gm(n,t,e-1):Ft(n)||Ft(t)?!1:pm(n,t,e-1):!1}function pm(n,t,e){const r=Object.keys(n),s=Object.keys(t);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!oa(n[i],t[i],e-1))return!1;return!0}function gm(n,t,e){if(n.length!==t.length)return!1;for(let r=0;r<n.length;r++)if(!oa(n[r],t[r],e-1))return!1;return!0}function mm(n,t){return He(n)&&He(t)&&n.toString()===t.toString()}function wu(n){return n.map(aa)}function aa(n,t){const e=n,r=n==null?void 0:n.tagJsType;if(r)switch(r){case J.signal:case J.subscribe:case J.stateRender:return;case J.dom:case J.tag:case J.templater:return wu(e.values)}return Ft(n)?wu(e):fm(n,t)}function Eh(n,t){const e=n.length;for(let r=0;r<e;++r){const s=n[r],i=t[r];if(Ft(s)&&Ft(i)){if(s===i)continue;return 3}if(!(typeof s===Q.function&&typeof i===Q.function)){if(typeof s===Q.object){if(!s&&!i)continue;if(typeof t===Q.object){const a=Object.entries(s);for(const c of a)if(!_m(c,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function _m([n,t],e){const r=e[n];return typeof t===Q.function&&typeof r===Q.function?!0:r===t}function Ih(n,t){const e=n.context.providers;if(e)for(const r of e)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===t&&r.children.splice(s,1);n.context.destroy$.next(),n.context.renderCount=0}function Vo(n,t){for(const e of n){const r=e.lastArray;if(r){Vo(r,t);continue}const s=e.value;if((s==null?void 0:s.tagJsType)===J.subscribe){s.destroy(e,t),e.deleted=!0;continue}const i=e.global;if(!i)continue;const a=e.state.newest,c=i.subscriptions;c&&c.forEach(vh),Jr(a.templater)&&Ih(a,i);const l=e.contexts;Vo(l,a),i.deleted=!0}}function wh(n,t=[],e=[]){for(const r of n){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){t.push(i);const c=s.subscriptions;c&&e.push(...c)}const a=r.contexts;a&&wh(a,t,e)}return{tags:t,subs:e}}function vh(n){n.unsubscribe()}function gn(n,t,e){const r=t.tagJsVar.tagJsType;return r&&["tag-conversion","element"].includes(r)?(t.tagJsVar.processUpdate(n,t,e,[]),t.value=n,0):n===t.value?0:(++t.updateCount,Ia(t,n,e))}function Ah(n,t,e,r,s){const i=t.context;i.locked=3,e.target=e.target||r,Jt(e),e.tagJsVar.processInit(n,e,t,s,r),Bt(),e.value=n,delete i.locked}function Ti(n){switch(n){case void 0:case!1:case null:return pn}return n}function ym(n,t){const e=Ti(n);if(t.paint){t.paint[1][1]=e;return}const r=t.simpleValueElm;te.push([jg,[e,r]])}function Tm(n,t){t.value=n,t.oldTagJsVar=t.tagJsVar,t.tagJsVar=Sh(n);const e=t.placeholder,r=Ti(n),s=t.paint=[hh,[e,r,function(a){t.simpleValueElm=a,delete t.paint},"processNowRegularValue"]];Ut.push(s)}function Ei(n){if(n.startsWith("class."))return"class";const t=Em(n);return t!==!1?t:n.startsWith("style.")?"style":!1}function Em(n){switch(n){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function bh(n,t,e,r){switch(r){case"autofocus":zs.push([Cm,[e]]);return;case"autoselect":zs.push([bm,[e]]);return;case"style":{const s=n.split(".");te.push([Im,[e,s,t]]);return}case"class":wm(n,t,e);return}throw new Error(`Invalid special attribute of ${r}. ${n}`)}function Im(n,t,e){const r=t[1];n.style[r]=e,n.style.setProperty(r,e)}function wm(n,t,e){const r=n.split(".");if(r.shift(),t){for(const s of r)te.push([vm,[e,s]]);return}for(const s of r)te.push([Am,[e,s]])}function vm(n,t){n.classList.add(t)}function Am(n,t){n.classList.remove(t)}function bm(n){n.select()}function Cm(n){n.focus()}function Sm(n,t,e){typeof n[t]!="object"&&(n[t]={});for(const r in e){const s=e[r];te.push([km,[n,t,r,s]])}if(n[t].setProperty)for(const r in e){const s=e[r];te.push([Pm,[n,t,r,s]])}}function Rm(n,t,e){n.setAttribute(t,"")}function Jn(n,t,e){if(yi(e))return Sm(n,t,e);Ch(n,t,e)}function fo(n,t,e){e?n[t]=!0:n[t]=!1}function Ch(n,t,e){if(n[t]=e,e===void 0||e===!1||e===null){n.removeAttribute(t);return}n.setAttribute(t,e)}function Pm(n,t,e,r){n[t].setProperty(e,r)}function km(n,t,e,r){n[t][e]=r}function Vm(n,t,e,r,s){const i=n(),a={tagJsType:"dynamic-attr",matchesInjection:h=>{const f=c.tagJsVar;if(f.matchesInjection)return f.matchesInjection(h,c)},hasValueChanged:(h,f,g)=>{const m=n();return c.tagJsVar.hasValueChanged(m,c,g)},processInit:Ot,processInitAttribute:Ot,destroy:(h,f)=>{c.tagJsVar.destroy(c,f)},processUpdate:(h,f,g,m)=>{++f.updateCount;const b=h();c.tagJsVar.processUpdate(b,c,g,m),c.value=b}},c={updateCount:0,isAttr:!0,target:r,parentContext:t,value:i,tagJsVar:Gn(i),valueIndex:-1,withinOwnerElement:!0,destroy$:new Z,render$:new Z},l={updateCount:0,isAttr:!0,contexts:[c],target:r,parentContext:t,value:n,tagJsVar:a,valueIndex:-1,withinOwnerElement:!0,destroy$:new Z,render$:new Z};return c.tagJsVar.processInitAttribute(e,i,r,c.tagJsVar,c,{},s),l}function Dm(n,t,e,r,s,i,a){return e.target=r,e.howToSet=s,e.attrName=n,e.isSpecial=a,t!=null&&t.tagJsType?Nm(n,t,e,i,r):ca(n,t,r,s,a,e)}function Nm(n,t,e,r,s){t.processInitAttribute(n,t,s,t,e,r,Jn),e.tagJsVar=t}function ca(n,t,e,r,s,i){if(typeof t=="function")return Vm(t,i,n,e,r);if(s)return bh(n,t,e,s);r(e,n,t)}function Om(n,t,e,r,s,i){const a=t.tagJsVar,c=n;if(a.hasValueChanged(c,t,e)>0){a.destroy(t,e),r.removeAttribute(s);const h=Gn(n);h.isAttr=!0,h.processInitAttribute(s,n,r,h,t,e,i),t.tagJsVar=h;return}}function Mm(n,t,e,r,s,i,a){r.destroy=Lm,r.hasValueChanged=Um,r.processUpdate=(l,h,f)=>Om(l,h,f,e,n,a);const c=Ei(n);ca(n,t,e,a,c,s),s.tagJsVar=r}function Lm(n){const t=n.target,e=n.attrName;t.removeAttribute(e)}function Sh(n){return{tagJsType:"simple",value:n,processInitAttribute:Mm,processInit:Fm,destroy:Rh,hasValueChanged:Bm,processUpdate:xm}}function xm(n,t,e){return n===t.value?0:Ia(t,n,e)}function Fm(n,t,e,r,s){const i=Ti(n);r=t.placeholder;const a=t.paint=[hh,[r,i,function(l){t.simpleValueElm=l,delete t.paint},"processSimpleValueInit"]];Ut.push(a)}function Rh(n){if(!n.simpleValueElm&&n.paint){n.paint[0]=Ot;return}const t=n.simpleValueElm;delete n.simpleValueElm,Dr(t,"deleteSimpleValue")}function Um(n,t){return n==null||n===t.value?0:6}function Bm(n,t){return n==null||typeof n!==Q.object?(ym(n,t),0):(Rh(t),6)}function jm(n,t){return Ft(n)?0:(Vh(t),9)}function Ph(n){return{tagJsType:"array",value:n,processInitAttribute:Ot,processInit:Hm,processUpdate:$m,hasValueChanged:jm,destroy:Vh}}function $m(n,t,e){if(++t.updateCount,Array.isArray(n)){Gs(t,n,e);return}gn(n,t,e)===0&&Gs(t,n,e)}function Hm(n,t,e,r,s){Gs(t,n,e,s)}function Gn(n){return(n==null?void 0:n.tagJsType)?n:qm(n)}function qm(n){return Ft(n)?Ph(n):Sh(n)}function Kr(n,t,e,r){return{updateCount:0,value:n,destroy$:new Z,render$:new Z,tagJsVar:Gn(n),withinOwnerElement:e,parentContext:r,valueIndex:r.varCounter}}function Wm(n,t,e,r){const s=Kr(n,t,e,r);return t.push(s),++r.varCounter,s}function ua(n,t,e,r,s){const i=document.createTextNode(pn),a=Kr(n,e,!0,t.context);return a.withinOwnerElement=!1,a.placeholder=i,s||(a.placeholder=r),Ah(n,t,a,s,r),s&&zt.push([ee,[s,i]]),a}function Gs(n,t,e,r){const s=n.lastArray===void 0;s&&(n.lastArray=[]);const i=n.lastArray;let a=n.placeholder,c=0;const l=[];if(!s){for(let f=0;f<i.length;++f){const g=i[f],m=Gm(t,f,i,c);if(m===0){l.push(g);continue}if(m===2){f=f-1;continue}c=c+m}n.lastArray=l}const h=t.length;for(let f=0;f<h;++f)a=zm(t,f,n.lastArray,e,a,r).placeholder}function zm(n,t,e,r,s,i){const a=kh(n[t]),c=e[t];if(c)return Jm(a,c,e,r,t,s,i);const l=ua(a,r,e,s,i);return e.push(l),l}function Jm(n,t,e,r,s,i,a){if(e.length>s)return Array.isArray(n)?(t.tagJsVar.processUpdate(n,t,r,[]),t.value=n,t):(gn(n,t,r),t);const l=ua(n,r,e,i,a);return e.push(l),l}function kh(n){return typeof n=="function"&&n.tagJsType===void 0&&(n=n()),n}function Gm(n,t,e,r){const s=n.length-1,i=t-r,a=i<0||s<i,c=e[t];if(a)return la(c),1;const l=c.value.arrayValue,h=kh(n[t]);return Km(l,h,c,e,t)}function Km(n,t,e,r,s){return t&&n!==t.arrayValue?(la(e),r.splice(s,1),2):0}function la(n){const t=n.global;Qm(t,n)}function Qm(n,t){var e;if(n&&((e=t.state)!=null&&e.oldest)){const r=t.state.oldest;Kn(r,n);return}t.tagJsVar.destroy(t,{})}function Vh(n){++n.updateCount;const t=n.lastArray;Dh(n,t)}function Dh(n,t){for(let e=0;e<t.length;++e)la(t[e]);delete n.lastArray}function ha(n){for(let t=n.length-1;t>=0;--t){const e=n[t];Ym(e),n.splice(t,1)}}function Ym(n){const t=n.marker;t&&Dr(t,"destroyMarker");const e=n.domElement;Dr(e,"destroyClone")}function da(n,t){const e=n.contexts;Xm(e,t),fa(n)}function fa(n){ha(n.htmlDomMeta)}function Xm(n,t){var e;for(const r of n){if(r.withinOwnerElement){const l=r.tagJsVar;if(l&&l.tagJsType==="host"){const h=r.supportOwner,f=l.destroy(r,h);zn(f)&&t.push(f)}continue}const s=r.lastArray;if(s){Dh(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,Dr(i,"smartRemoveByContext");continue}const a=r.global;if(a===void 0)continue;if(a.deleted=!0,(e=r.state)==null?void 0:e.oldest){da(r,t);continue}}}function Kn(n,t){const e=n.context;t.deleted=!0,e.renderCount=0;const r=[],s=e.contexts;return Vo(s,n),n.templater.wrapper&&Ih(n,t),da(e,r),delete e.state,delete e.contexts,delete e.returnValue,delete e.providers,r}function Ii(n,t){var r;const e=vu(n,t);return!e&&((r=t.templater.tag)!=null&&r._innerHTML)&&vu(n.outerHTML,t)?!0:e}function vu(n,t){const e=n.templater,r=t.templater,s=(e==null?void 0:e.tag)||n,i=r.tag;if((e==null?void 0:e.tagJsType)===J.stateRender)return e.dom===r.dom;switch(s.tagJsType){case J.dom:return(i==null?void 0:i.tagJsType)!==J.dom?!1:Zm(s,i);case J.tag:return t_(s,i,n,t)}throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function Zm(n,t){const e=n.dom,r=t.dom;return e===r}function t_(n,t,e,r){const s=n.strings,i=t.strings;if(s.length!==i.length||!s.every((h,f)=>i[f].length===h.length))return!1;const c=e.templater.values||n.values,l=r.templater.values||t.values;return e_(c,l)}function e_(n,t){return n.length===t.length?!!t.every(function(i,a){const c=n[a];return typeof i===Q.function&&typeof c===Q.function?i.toString()===c.toString():!0}):!1}function Qr(n){++n.updateCount;const t=n.global,r=n.state.newest;Kn(r,t),n_(n)}function n_(n){n.htmlDomMeta=[],delete n.contexts,delete n.state,delete n.global,n.renderCount=0}function r_(n,t){var a,c,l;const e=(a=t.state)==null?void 0:a.newest,r=dh(n),s=n;return r?Ii(s,e)?0:7:(n==null?void 0:n.tagJsType)?((c=n.wrapper)==null?void 0:c.original)===((l=t.value.wrapper)==null?void 0:l.original)?0:88:8}function wi(n,t){var c;const e=t.global,r=(c=t.state)==null?void 0:c.newest,s=dh(n),i=n;if(s)return Ii(i,r)?(No(t,n,r),0):(Kn(r,e),fn(t),7);if(n==null?void 0:n.tagJsType){const f=t.state.newest.ownerSupport;return No(t,n,f)===!0?0:88}return Qr(t),8}function s_(n,t,e,r,s,i,a){const c=document.createTextNode(pn),l=s>0,h=Wm(n,t,l,r);return h.placeholder=c,h.target=i,i?zt.push([ee,[i,c]]):Ut.push([$e,[a,c,"attachDynamicDom.attachDynamicDom"]]),Ah(n,e,h,i,a),h}function i_(n,t){return o_(n,t)}function o_(n,t,e=[]){const r=n.context;e.push({support:n,renderCount:r.renderCount,provider:t});const s=t.children;for(let i=s.length-1;i>=0;--i){const a=s[i],c=a.context;e.push({support:a,renderCount:c.renderCount,provider:t})}return e}function a_(n){const e=n.context.providers;if(!e)return[];const r=[];for(const s of e){const i=s.owner,a=i_(i,s);r.push(...a.map(c_))}return r}function c_(n){return n.support}function pa(n,t,e){return n}function u_(n){return typeof n!==Q.object||!n||n.tagJsType}function l_(n,t,e,r,s,i){var c;const a=Object.keys(n);for(const l of a){const h=n[l],f=t[l],g=ga(f,h,e,r,i,s+1);h===g||(c=Object.getOwnPropertyDescriptor(n,l))!=null&&c.set||(n[l]=g)}return n}function h_(n,t,e,r,s,i){for(let a=n.length-1;a>=0;--a){const c=n[a],l=t[a];n[a]=ga(l,c,e,r,i,s+1)}return n}function ga(n,t,e,r,s,i){return n==null||i>s?t:typeof n===Q.function?t.mem?(n.mem=t.mem,t):(n.mem=t,n):u_(t)?t:Ft(t)?h_(t,n,e,r,i,s):l_(t,n,e,r,i,s)}function d_(n,t,e){var m;const r=e.global,s=e.state.newest,i=s.templater.wrapper;let a=t.templater.wrapper,c=!1;const l=t.templater.tagJsType,h=J.stateRender===l||J.renderOnce===l;if(h)c=t.templater.tagJsType===J.renderOnce||Ii(s,t);else if(i&&a){((m=s.templater.tag)==null?void 0:m._innerHTML)&&(a=t.outerHTML);const S=i.original,k=a.original;c=S===k}const f=t.templater;if(!c){g_(e,f,n);return}if(!(h||nT(s,f))){const b=f.propWatch===Rt.DEEP?Xr:Ta;p_(f,t,s,n,b);return}if(e.locked){r.blocked.push(t);return}Nr(t),++e.renderCount}function Nh(n,t,e,r,s,i=-1){const a=t.context;if(!a.global||!a.state.newest){const b=pa(r);r.push(...b);const S=n.propsConfig;return S.castProps=b,r}t=a.state.newest||t;const f=t.propsConfig.castProps,g=[];for(let b=0;b<r.length;++b){const S=r[b],k=f[b],V=ga(k,S,n,e,s,i+1);g.push(V)}const m=n.propsConfig;return m.castProps=g,g}function f_(n,t){const e=n.context,r=e.global;let s=-1;const i=e.providers=e.providers||[],a=i.length-1;for(;s++<a;){const c=i[s];let l=-1;const h=c.children.length-1;for(;l++<h;){const f=c.children[l];if(r===f.context.global){c.children.splice(l,1),c.children.push(t);return}}}}function p_(n,t,e,r,s){const i=n.props,a=Nh(t,e,r,i,s),c=t.propsConfig;c.castProps=a;const l=e.propsConfig;return l.latest=c.latest,e}function g_(n,t,e){const r=n.global,s=n.state.oldest;Kn(s,r),fn(n),t.processInit(t,n,e,n.placeholder)}function Do(n){const t=n.context,e=t.global,{subs:r,tags:s}=wh(t.contexts);Au(t);for(const a of s){if(a.context.global.deleted===!0)return;Au(a.context)}e.subscriptions&&r.forEach(vh),fn(t)}function Au(n){n.global.deleted=!0,da(n,[]),delete n.contexts}function Oh(n,t,e,r){const s=t.original,i=n.tagJsType===J.stateRender,a=st.stateConfig;_i(e);let c;return i?c=n():(c=s(...r),typeof c===Q.function&&c.tagJsType===void 0&&(c=c())),e.context.returnValue=c,e.returnValue=c,c.templater=n,n.tag=c,e.context.state.newer={...a},Bt(),e}function m_(n,t){const e=n.context;++e.renderCount,__(n.context),st.tagClosed$.next(t)}function __(n){y_(n),T_()}function y_(n){const t=st.stateConfig,e=n||t.context;e.state=e.state||{},e.state.newer={...t};const r=t.support;e.state.newest=r}function T_(){const n=st.stateConfig;delete n.prevSupport,delete n.support,delete n.state,delete n.states,Bt()}function Mh(n,t,e,r){let s;const i=n.templater;if(i.tagJsType===J.stateRender){const a=i;s=Zr(i,e,r,n.appSupport),Oh(i,a,s)}else{const a=i.wrapper;s=a(n,e,t)}return m_(s,r),s.ownerSupport=n.ownerSupport,s}function E_(n){const t=st.stateConfig;return t.rearray=n,t.state=[],t.states=[],t.statesIndex=0,t.handlers.handler=sm,t.handlers.statesHandler=tm,t}function I_(n,t,e){E_(e);const r=st.stateConfig;r.prevSupport=t,_i(n)}function w_(n,t,e,r){const i=e.state.older.state;return I_(n,t,i),Mh(n,t,e,r)}function ma(n,t,e,r){gh(n.context),_i(n);const s=Mh(n,t,e,r);return Bt(),s}function v_(n){var r;const t=n==null?void 0:n.context,e=t==null?void 0:t.state;return(r=e==null?void 0:e.older)==null?void 0:r.state}function A_(n,t,e){let r;v_(t)?r=w_(n,t,e):r=ma(n,t,e);const i=!t||Ii(t,r);if(i){if(t){const a=t.templater.tag;if(a&&e.renderCount>0){const c=t==null?void 0:t.templater,l=c==null?void 0:c.tag;b_(a,t,l)}}}else{f_(t,r),Do(t);const a=r.context;a.state.oldest=r,a.state.newest=r}return r.ownerSupport=n.ownerSupport,{support:r,wasLikeTags:i}}function b_(n,t,e){if(n.tagJsType===J.dom){const r=e==null?void 0:e.dom,s=n.dom;r!==s&&Do(t);return}if(e){const r=e.strings;if(r){const s=r==null?void 0:r.length,i=n.strings.length;s!==i&&Do(t)}}}function C_(n,t,e){const r=A_(t,n,e);if(r.wasLikeTags){const s=e.state.oldest;return yh(s,r.support),r.support}return sd(t,e)}function Lh(n){return J.templater===n.tagJsType}function Nr(n){const t=n.context,e=t.global,r=n.templater,s=Lh(r);if(t.locked)return e.blocked.push(n),n;if(s)return S_(n);t.locked=4,e.blocked.length&&(n=e.blocked.pop(),e.blocked=[]);const i=C_(t.state.newest,n,t);return delete t.locked,i}function S_(n){const r=Gr(n).context.state.newest;return Nr(r)}function R_(n,t){const e=t.context.global;return e&&e.deleted?!1:!!P_(n,t)}function P_(n,t){const e=n.props,s=t.propsConfig.latest;if(xh(e,s))return!0;switch(n.propWatch){case Rt.IMMUTABLE:return md(e,s);case Rt.SHALLOW:return Eh(e,s)}return!Th(e,s,Xr)}function xh(n,t){const e=n.length,r=t.length;return e!==r}function Ks(n,t=[]){const e=n.context,r=n.templater,s=Lh(r),i=n.ownerSupport;if(e.locked)return t.push(n),t;if(s)return Ks(i,t);const a=n.context.global;if(a&&a.deleted===!0)return t;const c=n,l=Jr(c.templater),h=n.templater.tagJsType,g=i&&h!==J.stateRender&&(!l||R_(c.templater,c));if(c.context.providers){const b=a_(c);t.push(...b)}return g?(Ks(i,t),l&&t.push(c),t):(t.push(c),t)}function _a(n){++gt.locks,n.forEach(k_),--gt.locks,ye()}function k_(n){const t=n.context;if(!t.global){t.tagJsVar.processUpdate(t.value,t,n.ownerSupport,[]);return}const r=t.state;Nr(r.newest)}function V_(n,t){const e=n.context.state,r=t.context.state,s=e.newer.states,i=r.newer.states;return D_(s,i)}function D_(n,t){for(let e=0;e<n.length;++e){const r=n[e],s=t[e];M_(r,s)}}let Fh;function N_(...n){return Fh=n,n}function O_(){return Fh}function M_(n,t){n(N_,1),t(O_,2)}function L_(n,t,e,r){for(let s=n.length-1;s>=0;--s){const a=n[s].get(),l=t[s].callback;l&&l(a)}for(let s=r.length-1;s>=0;--s){ya.length=0,Uh=0;const i=r[s];i(x_),e[s](F_)}}let Uh=0;const ya=[];function x_(...n){return ya.push(n),n}function F_(...n){return ya[Uh++]}function Bh(n,t,{resolvePromise:e,resolveValue:r}){if(zn(n)){const i=t.context;return i.locked=2,n.then(U_(t,e))}return r(n)}function U_(n,t){return e=>{const r=n.context,s=r.global;if(delete r.locked,r.deleted===!0||(s==null?void 0:s.deleted)===!0)return t(e);V_(n,r.state.newest);const i=Ks(n);return _a(i),t(e)}}function B_(n,t){const e=t.context.global,r=function(i,a){if(e.deleted!==!0)return j_(r.tagFunction,r.support,i,a)};return r.tagFunction=n,r.support=t,r}function j_(n,t,e,r){const s=Gr(t),i=s.context;i.locked=1;const a=n.apply(e,r);return delete i.locked,jh(a,s)}function jh(n,t){const e=t.context.global;if(e!=null&&e.deleted)return;const r=Ks(t);return _a(r),Bh(n,t,{resolvePromise:q_,resolveValue:W_})}const $_="no-data-ever",H_="promise-no-data-ever";function q_(){return H_}function W_(){return $_}function $h(n,t,e){const r=e[t];if(r){let i=!1;if(n.originalStopPropagation=n.stopPropagation,n.stopPropagation=function(){i=!0,n.originalStopPropagation.call(n),n.stopPropagation=n.originalStopPropagation,delete n.originalStopPropagation},r(n),n.defaultPrevented||i)return}const s=e.parentNode;s&&$h(n,t,s)}function Hh(n,t,e,r){const s=n.appElement,i=z_(t);t==="blur"&&(t="focusout");const c=n.context.events;if(!c[t]){const l=function(f){$h(f,i,f.target)};c[t]=l,s.addEventListener(t,l)}e[i]=r,e[t]=r}function z_(n){return n==="blur"&&(n="focusout"),"_"+n}function qh(n,t,e,r){const s=function(...i){return s.tagFunction(n,i)};s.tagFunction=t,s.support=e,Hh(e.appSupport,r,n,s)}function Wh(n){return n==null||n===!1}function zh(n,t,e,r,s,i,a){if(Wh(t))return;const c=[];if(typeof t===Q.object){for(const l in t){const h=Ei(l),f=t[l],m=Kh(l,f,n,e,r,Jn,i,a,h);m!==void 0&&(Array.isArray(m)?c.push(...m):c.push(m))}return c}t.length!==0&&s(e,t,pn)}function J_(n,t,e,r,s,i,a,c){if(e){if(Wh(t)||t===""){r.removeAttribute(e);return}if(typeof e===Q.object)if(typeof t===Q.object)for(const f in e)f in t||te.push([bu,[r,f]]);else for(const f in e)te.push([bu,[r,f]])}const l=zh(n,t,r,s,i,a,c);l&&a.push(...l)}function bu(n,t){n.removeAttribute(t)}function Jh(n,t,e,r){const s=t,i=n;if(i!=null&&i.tagJsType){const c=t.value;if(!(c!=null&&c.tagJsType)){i.isAttr=!0,Jt(t),i.processInitAttribute(s.attrName,n,s.target,i,s,e,Jn),Bt(),s.tagJsVar=i;return}c.hasValueChanged(i,t,e);return}if(s.isNameOnly){J_(r,n,s.value,s.target,e,s.howToSet,[],s.parentContext),s.value=n;return}const a=s.target;X_(n,s.attrName,s,a,e,s.howToSet,s.isSpecial),t.value=n}const lt=":tagvar",ne=":",Qs=new RegExp(lt+"(\\d+)"+ne,"g");function Gh(n){return n.search&&n.startsWith(lt)?n.search(Qs):-1}function G_(n,t,e,r,s,i,a){const c=r.length,l=[];t.forEach(f=>{if(Gh(f)>=0){const m=r.length,b=Gn(f),S={updateCount:0,isAttr:!0,target:e,attrName:n,withinOwnerElement:!0,tagJsVar:b,valueIndex:a.varCounter,parentContext:a,destroy$:new Z,render$:new Z};b.processUpdate=function(x,B,H,ct){++B.updateCount,h(ct)};const k=i[m];S.value=k,l.push(S),++a.varCounter}});function h(f){const g=K_(t,f,c).join("");s(e,n,g)}return h(i),l}function K_(n,t,e){return n.reduce((r,s)=>{if(Gh(s)>=0){const a=e++,c=t[a];return r.push(c),r}return r.push(s),r},[])}function Q_(n,t,e,r,s,i,a,c,l){if(typeof t===Q.function)return++s.varCounter,Yh(t,a,n,e);const h=Gn(t),f={updateCount:0,isAttr:!0,target:e,attrName:n,howToSet:i,value:t,withinOwnerElement:!0,tagJsVar:h,destroy$:new Z,render$:new Z,valueIndex:l,parentContext:s};return r.push(f),h.processUpdate=Jh,Dm(n,t,f,e,i,a,c),f.value=t,f}function Cu(n){return yi(n)&&"tagJsVar"in n?n.tagJsVar:-1}function Y_(n,t,e,r,s,i,a,c,l){const h=Kr(n,t||[],!0,e);return h.target=c,h.valueIndex=s,h.isAttr=!0,h.isNameOnly=l,h.stateOwner=Gr(i),h.supportOwner=i,Jt(h),r.processInitAttribute(a,n,c,r,h,i,Jn),Bt(),h.oldTagJsVar=h.tagJsVar,h.tagJsVar=r,h}function Kh(n,t,e,r,s,i,a,c,l){const h=Cu(n);let f=h>=0||t===void 0&&typeof n!="string",g=e[h];t!=null&&t.tagJsType?g=t:n!=null&&n.tagJsType&&(f=!0,g=n,t=n);const m=g;if(m!=null&&m.tagJsType)return Y_(t,[],c,m,h,s,n,r,f);if(f){h===-1&&f&&(g=n);const S=Kr(g,[],!0,c);S.valueIndex=h,S.isAttr=!0,S.target=r,S.isNameOnly=!0,S.howToSet=i;const k=S.tagJsVar;k.processUpdate=Jh;const V=zh(e,g,r,s,i,a,c);return V&&a.push(...V),S}if(Array.isArray(t))return G_(n,t,r,[],i,e,s.context);const b=Cu(t);if(b>=0){const S=e[b];return Q_(n,S,r,[],c,i,s,l,b)}return ca(n,t,r,i,l,c)}function X_(n,t,e,r,s,i,a){return He(n)?Z_(s,n,r,t,a,i):Qh(n,r,t,a,i,s)}function Qh(n,t,e,r,s,i){if(r!==!1){bh(e,n,t,r);return}switch(n){case void 0:case!1:case null:te.push([ty,[t,e]]);return}if(He(n))return qh(t,n,i,e);s(t,e,n)}function Z_(n,t,e,r,s,i,a){var f;const c=n.templater.wrapper;return((c==null?void 0:c.tagJsType)||((f=c==null?void 0:c.original)==null?void 0:f.tagJsType))===J.renderOnce?Qh(t,e,r,s,i,n):Yh(t,n,r,e)}function Yh(n,t,e,r){return n=B_(n,t),qh(r,n,t,e)}function ty(n,t){n.removeAttribute(t)}function Xh(n,t,e,r,s){for(const i of n){const a=i[0],c=i[1],l=i[2]||!1;let h=i.length>1?Jn:Rm;i[3]&&(h=i[3]);const f=s.contexts,g=Kh(a,c,t,e,r,h,f,s,l)||void 0;typeof g=="object"&&(f.push(g),++s.varCounter)}}function ey(n,t,e,r,s,i,a){t.at&&Xh(t.at,e,n,r,s),i?zt.push([ee,[i,n,"appendToAttachDomElement"]]):Ut.push([$e,[a,n,"insertBeforeAttachDomElement"]])}function Zh(n,t,e,r,s,i,a){const c=e.context,l=c.contexts;r=c;const h=[];i&&a===void 0&&(a=document.createTextNode(pn),zt.push([ee,[i,a]]),i=void 0);for(let f=0;f<n.length;++f){const g=n[f],m=g.v;if(!isNaN(m)){const x=Number(m),B=t[x];if(He(B)&&B.tagJsType===void 0){++r.varCounter;continue}const ct=s_(B,l,e,r,s,i,a);ct.valueIndex=x;continue}const S={};if(h.push(S),g.nn==="text"){ny(S,g,i,a);continue}const k=S.domElement=document.createElement(g.nn),V={updateCount:0,isAttrs:!0,target:k,parentContext:r,contexts:[],destroy$:new Z,render$:new Z,tagJsVar:{tagJsType:"new-parent-context"},valueIndex:-1,withinOwnerElement:!0};V.varCounter=0,ey(k,g,t,e,V,i,a),V.target=k,g.ch&&(S.ch=Zh(g.ch,t,e,V,s+1,k,a).dom)}return{dom:h,contexts:l}}function ny(n,t,e,r){const s=n,i=s.tc=t.tc;if(e){zt.push([Qg,[e,i,function(c){s.domElement=c}]]);return}Ut.push([Kg,[r,i,function(c){s.domElement=c}]])}const td=/(:tagvar\d+:)/,Su="ondoubleclick",ry=/([:_a-zA-Z0-9\-.]+)\s*(?:=\s*"([^"]*)"|=\s*(\S+))?/g,sy=/<\/?([a-zA-Z0-9-]+)((?:\s+[a-zA-Z_:*][\w:.-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)+\s*|\s*)\/?>/g;function iy(n){const t=[],e=[],r=[];let s=null,i=-1,a=0;const c=new RegExp(sy,"g");for(n=ay(n);a<n.length;){const l=c.exec(n);if(!l)break;const[h,f,g]=l,m=h.startsWith("</"),b=h.endsWith("/>");if(a<l.index){const x=n.slice(a,l.index);if(x.trim()){const B=Pu(x);for(let H of B)H.startsWith(lt)&&H.search(td)>=0&&H.search(nd)===-1&&(H=lt+ ++i+ne),Ru(s,e,H)}}if(a=l.index+h.length,m){s=r.pop()||null;continue}const S=[];let k;for(;(k=ry.exec(g))!==null;)i=dy(k,i,t,S);const V={nn:f};S.length&&(V.at=S),s?(s.ch||(s.ch=[]),s.ch.push(V)):e.push(V),b||(r.push(s),s=V)}if(a<n.length){const l=n.slice(a);if(l.trim()){const h=Pu(l);for(const f of h)f.startsWith(lt)&&++i,Ru(s,e,f)}}return e}const oy=new RegExp("(<!--[\\s\\S]*?-->)","g");function ay(n){return n.replace(oy,function(t){return t.replace(/\[l t\]/g,"[l&nbsp;t]").replace(/\[g t\]/g,"[g&nbsp;t]").replace(/</g,"[l t]").replace(/>/g,"[g t]")})}function cy(n){return n.startsWith("on")?n.length===Su.length&&n===Su?"dblclick":n.slice(2,n.length):n}function Ru(n,t,e){const r={nn:"text",tc:uy(e)};ly(n,t,r)}function uy(n){return n.replace(/(\[l t\]!--[\s\S]*?--\[g t\])/g,function(t){return t.replace(/\[l t\]/g,"<").replace(/\[g t\]/g,">").replace(/\[l&nbsp;t\]/g,"[l t]").replace(/\[g&nbsp;t\]/g,"[g t]")})}function ly(n,t,e){n?(n.ch||(n.ch=[]),n.ch.push(e)):t.push(e)}function Pu(n){return n.split(td).filter(hy)}function hy(n){return n!==""}function dy(n,t,e,r){const s=n[1]||n[3]||n[5];let a=n[2]||n[4]||n[6];if(s===void 0)return t;const c=n[2]!=="",l=a===void 0&&c,h=s.toLowerCase(),f=h.startsWith("on")?cy(h):h;if(l){if(s.slice(0,lt.length)===lt){const H=lt+ ++t+ne;return e.push(["at",H]),r.push([H]),t}if(n[0].startsWith(s)&&n[0].slice(s.length,n[0].length).search(/\s+$/)>=0)return r.push([f]),t;const x=n[3];if(x.search(nd)>=0){a=x;const H=[f,a];return r.push(H),t}else a=lt+ ++t+ne}c||(a=n[2]);const g=a.split(py).filter(S=>S.length>0);g.length>1&&(a=g,g.forEach(S=>{S.search(Qs)>=0&&++t}));const m=[f,a],b=Ei(h);return b&&m.push(b),f==="style"?(r.unshift(m),t):(r.push(m),t)}const fy=new RegExp(lt+"(\\d+)"+ne,"gi"),py=new RegExp("("+lt+"\\d+"+ne+")","gi"),ed=lt.slice(0,lt.length-1),nd=new RegExp(ed+"&#x72;(\\d+)"+ne,"gi"),gy=ed+"&#x72;$1"+ne;function my(n,t){const e=_y(n,t).join("");return iy(e)}function _y(n,t){return yy(n,t)}function yy(n,t){const e=[];for(let r=0;r<n.length;++r){const i=n[r].replace(fy,gy);if(r<t.length){e.push(i+lt+r+ne);continue}e.push(i)}return Ty(e,n,t),e}function Ty(n,t,e){const r=e.length-t.length;if(r>0)for(let s=r;s>0;--s)n.push(lt+(t.length+s-1)+ne)}const Ey="ch";function rd(n,t,e=[],r=[]){const s=n;for(let i=0;i<s.length;i++){const a=[...r,i],c=s[i];if(c.at){const l=c.at;c.at=wy(l,t)}if(c.ch){const l=c.ch,h=[...a,Ey];c.ch=rd(l,t,e,h)}i=Iy(c,t,s,i)}return s}function Iy(n,t,e,r){if(n.nn!=="text")return r;const s=n;let i=s.tc;if(typeof i!==Js.string)return r;let a;for(;(a=Qs.exec(i))!==null;){const c=a[1],l=parseInt(c,10);if(!isNaN(l)&&l<t){const f=lt+l+ne,g=i.slice(a.index+f.length);e.splice(r,1,{nn:"text",v:l}),i=g,Qs.lastIndex=0}}return s.tc=i,r}function wy(n,t){const e=[];for(const r of n){const[s,i,a]=r;if(s.startsWith(lt)){const c=parseInt(s.replace(lt,""),10);if(!isNaN(c)&&c<t){e.push([{tagJsVar:c}]);continue}}if(typeof i===Js.string&&i.startsWith(lt)){const c=parseInt(i.replace(lt,""),10);if(!isNaN(c)&&c<t){e.push([s,{tagJsVar:c},a]);continue}}e.push(r)}return e}function vy(n,t,e){return!!(e&&e.strings.length===n.length&&e.strings.every((s,i)=>s===n[i])&&e.values.length===t.length)}function Ay(n){const t=n.map(by);return t.push(n.length),Number(t.join(""))}function by(n){return n.length}const ku={};function Cy(n,t){const e=Ay(n),r=ku[e];if(r&&vy(n,t,r))return r.domMetaMap;const i=my(n,t),a=rd(i,t.length),c={interpolation:void 0,string:void 0,strings:n,values:t,domMetaMap:a};return ku[e]=c,a}function vi(n,t,e){const r=n.context;r.state=r.state||{};const s=r.state;s.oldest=n,s.newest=n,r.state.older=r.state.newer,++gt.locks;const i=Sy(n,n.context,t,e);return r.htmlDomMeta=i.dom,--gt.locks,i}function Sy(n,t,e,r){const s=Ry(n),a=n.templater.tag.values,c=[],l=n.context;return t=l,l.contexts=c,Zh(s,a,n,t,0,e,r)}function Ry(n){const e=n.templater.tag;if(e.tagJsType===J.dom)return e.dom;const r=e.strings;return Cy(r,e.values)}function sd(n,t){const e=t.state.newest,r=t.placeholder;return e.ownerSupport=n,vi(e,void 0,r),e}function id(n,t,e){const r=oT(n,t,t.appSupport,e);return e.contexts=e.contexts||[],r}function od(n,t,e,r,s){const i=id(n,e,t);i.ownerSupport=e;const a=vi(i,r,r?void 0:s);for(const c of a.dom)c.marker&&(r?zt.push([ee,[r,c.marker]]):Ut.push([$e,[s,c.marker,"subMarker"]])),c.domElement&&(r?zt.push([ee,[r,c.domElement,"subAppendTo"]]):Ut.push([$e,[s,c.domElement,"subInsertBefore"]]));return i}function Py(n,t,e,r,s){return t.state={},s?od(n,t,e,s,r):sd(e,t)}function ad(n,t){const e={tagJsType:J.templater,processInit:Py,processInitAttribute:Ot,processUpdate:gn,hasValueChanged:wi,destroy:Qr,propWatch:n,props:t,key:function(s){return e.arrayValue=s,e},matchesInjection(r,s){var i;if(e.wrapper===r||((i=e.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return e}const Or=[];function ky(n,t){return function(s,i,a){const c=cd(n,s,a),l=s.ownerSupport,h=Zr(n,i,l,s.appSupport,c);return Oh(n,t,h,c)}}function cd(n,t,e){const r=n.propWatch===Rt.DEEP?Xr:Ta,s=n.props,i=t.propsConfig;let a=i.castProps;const c=e==null?void 0:e.propsConfig,l=c==null?void 0:c.castProps;return l&&(i.castProps=l,a=Nh(t,e,e.ownerSupport,s,r)),a||pa(s)}function Vy(n,t,e){const r=ad(Rt.DEEP);r.tagJsType=n.tagJsType;const s=id(r,e,t);function i(){return r.tag=n(),s}return r.wrapper=i,i.tagJsType=n.tagJsType,i.original=n.original||n,s}function Dy(n,t,e,r,s){fn(t);const i=Vy(n,t,e);return ma(i,void 0,t),od(i.templater,t,e,s,r)}function Ny(n,t){const e=vi(n,t,void 0);for(const r of e.dom)r.domElement&&zt.push([ee,[t,r.domElement]]),r.marker&&zt.push([ee,[t,r.marker]]);return n}function Oy(n,t){++n.updateCount;const e=n.subContext,r=My(e,t);return delete n.subContext,r}function My(n,t){n.deleted=!0;const e=n.appendMarker;if(e&&(Dr(e,"deleteSubContext"),delete n.appendMarker),!n.hasEmitted)return;const r=n.contextItem;return r.tagJsVar.destroy(r,t),76}function Ly(n,t,e,r){return t.hasEmitted=!0,t.contextItem=ua(n,e,[],r)}function ud(n,t,e){var a;++t.updateCount;const s=n.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(a=t.subContext)==null?void 0:a.contextItem;Ia(i,s,e)}function xy(n,t,e,r,s){t.subContext={},n.processUpdate=ud,Fy(n,e,t,r,s)}function Fy(n,t,e,r,s){const{appendMarker:i,insertBefore:a}=uT(s,r),c=e.subContext;c.appendMarker=i;const h=n.owner._innerHTML;h.processInit=h.oldProcessInit,Ly(h,c,t,a)}function ld(){return{tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:Ot,processInit:xy,processUpdate:ud,destroy:Oy}}function Uy(n,t,e,r){const s={tagJsType:"tag-conversion",processInitAttribute:Ot,processInit:(i,a,c)=>{const l=n.returnValue;return t.tagJsVar.processInit(l,t,e,r.placeholder)},processUpdate:(i,a,c)=>{if(a.locked||a.deleted)return;++a.updateCount;const h=a.value.tagJsType,g=(i==null?void 0:i.tagJsType)!==h;if(r_(i,a)||g||s.hasValueChanged(i,a,e)){s.destroy(a,e),Ea(i,a,c,789);return}a.locked=467,a.render$.next();const S=a.returnValue;By(t,i,a,S,e),delete a.locked},hasValueChanged:(i,a,c)=>{const l=n.returnValue;return t.tagJsVar.hasValueChanged(l,t,c)},destroy:(i,a)=>{++n.updateCount,n.deleted=!0,delete n.returnValue;const c=t.tagJsVar.destroy(t,e);return zn(c)?c.then(()=>{const l=Vu(n);return ye(),l}):(n.destroy$.next(),Vu(n))}};return s}function hd(n,t,e){const r=n.context,s=n.returnValue,i=Gn(s);delete r.global,r.contexts=[];const a={updateCount:0,value:s,tagJsVar:i,destroy$:new Z,render$:new Z,placeholder:r.placeholder,valueIndex:-1,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},c=Uy(r,a,n,e);return r.tagJsVar=c,i.processInit(s,a,n,e.placeholder),n}function dd(n,t,e){const r=Zr(n,t,e,e==null?void 0:e.appSupport),s=r.propsConfig;if(s){const a=n.tagJsType!==J.tagComponent?[]:cd(n,r);s.castProps=a}return ma(r,t.state.newest,t)}function fd(n,t,e){const r=dd(n,t,e),s=r.templater.tag;return["dom","html"].includes(s.tagJsType)?(vi(r,void 0,t.placeholder),r):hd(r,r.ownerSupport,t)}function By(n,t,e,r,s){const i=pa(t.props);n.value.props=i;const a=s.propsConfig;if(a&&(a.castProps=i),n.updatesHandler=e.updatesHandler,e.updatesHandler){Jt(e);const c=e.updatesHandler;c(i),Bt()}n.tagJsVar.processUpdate(r,n,s,[]),n.value=r}function Vu(n,t){delete n.returnValue,delete n.global,n.contexts=[],n.htmlDomMeta=[],delete n.updatesHandler}function jy(n,t,e,r){const s=dd(n,t,e),i=s.templater.tag;return["dom","html"].includes(i.tagJsType)?Ny(s,r):hd(s,e,t)}function pd(n,t,e,r,s){return fn(t),s?jy(n,t,e,s):fd(n,t,e)}function $y(n){var s,i;const t=le();if(!t)throw new Error("tag.inject can only be called within a tag or host context");let e=t.parentContext;for(;e;){const a=e.contexts;if(a){for(const c of a)if(c.isAttr&&((s=c.tagJsVar)!=null&&s.matchesInjection)){const l=c.tagJsVar.matchesInjection(n,c);if(l!==void 0)return l.returnValue}}if((i=e.tagJsVar)!=null&&i.matchesInjection&&e.tagJsVar.matchesInjection(n,e))return e.returnValue;e=e.parentContext}const r=`Could not find parent context for tag.inject ${n}`;throw console.error(r,{targetItem:n,context:t}),new Error(r)}function Wt(n){return st.stateConfig.handlers.handler(n)}function Hy(n){return Wt(()=>{const t=n();if(le().global){const r=qs();return Bh(t,r,{resolvePromise:qy,resolveValue:Wy})}}),tt}function qy(n){return n}function Wy(n){return n}function zy(n){return Wt(function(){le().destroy$.toCallback(n)}),tt}function Jy(n){const t=le(),e=i=>{const a=le();Jt(t);const c=n();return Bt(),Jt(a),c},r=t.render$.subscribe(()=>e()),s=e();return tt.onDestroy(()=>r.unsubscribe()),s}let Gy=0;const br=gd("click"),Rn=gd("mousedown");function gd(n){return function(e){const r=gT(e);return Wt(()=>{Ed().addEventListener(n,r)}),r}}const Ky={get:Ed,onclick:br,click:br,onClick:br,mousedown:Rn,onmousedown:Rn,onMouseDown:Rn};Yr("onclick",br);Yr("click",br);Yr("onMouseDown",Rn);Yr("onmousedown",Rn);Yr("mousedown",Rn);function Yr(n,t){Object.defineProperty(tt,n,{get(){return t},set(e){return t(e)}})}var Rt;(function(n){n.DEEP="deep",n.SHALLOW="shallow",n.NONE="none",n.IMMUTABLE="immutable"})(Rt||(Rt={}));function tt(n,t=Rt.SHALLOW){const e=function(...a){const c=ad(t,a);c.tagJsType=J.tagComponent,c.processInit=pd,c.hasValueChanged=wi;const l=ky(c,e);return l.original=n,c.wrapper=l,c},r=n;e.original=n,r.tags=Or,r.setUse=st,r.ValueTypes=J,r.tagIndex=Gy++,Or.push(e);const s=e;return s.updates=i=>{const a=le();return a.updatesHandler=i,!0},s.getInnerHTML=ld,s}function Qy(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function Yy(){throw new Error("Do not call tag.renderOnce as a function but instead set it as: `(props) => tag.renderOnce = () => html`` `")}function Xy(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}tt.element=Ky;tt.renderOnce=Yy;tt.use=Xy;tt.deepPropWatch=tt;tt.route=Qy;tt.inject=$y;tt.onInit=Hy;tt.onDestroy=zy;tt.onRender=Jy;tt.getInnerHTML=ld;tt.app=function(n){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};tt.immutableProps=function(t){return tt(t,Rt.IMMUTABLE)};tt.watchProps=function(t){return tt(t,Rt.SHALLOW)};Object.defineProperty(tt,"renderOnce",{set(n){n.tagJsType=J.renderOnce,n.processInit=Dy,n.processUpdate=gn,n.destroy=Qr,n.hasValueChanged=function(){return 0}}});Object.defineProperty(tt,"use",{set(n){n.original={setUse:st,tags:Or},n.tagJsType=J.stateRender,n.processInit=pd,n.processUpdate=gn,n.hasValueChanged=wi,n.destroy=Qr}});Object.defineProperty(tt,"promise",{set(n){_T(n)}});function Zy(n,t,e){if(xh(n,t))return 11;switch(e){case Rt.NONE:return 1;case Rt.SHALLOW:return Eh(n,t);case Rt.IMMUTABLE:return md(n,t)}return tT(n,t)}function tT(n,t){let e=n,r=t;return e=[...n],r=[...t||[]],e.every((i,a)=>eT(i,a,e,r))?!1:7}function eT(n,t,e,r){const s=r[t];if(typeof n===Q.object){const i={...n},a={...s||{}};return Object.entries(i).every(([l,h])=>Du(h,a[l],()=>{delete i[l],delete a[l]}))}return Du(n,s,function(){e.splice(t,1),r.splice(t,1)})}function Du(n,t,e){if(typeof n!==Q.function)return Th(n,t,Xr)?4:!1;if(typeof t!==Q.function)return!1;const s=t==null?void 0:t.original;s&&(t=s),n.original&&(n=n.original);const a=n.toString(),c=t.toString();return a===c?(e(),5):(e(),6)}function nT(n,t){const e=t.props,s=n.propsConfig.latest;return Zy(e,s,n.templater.propWatch)}function md(n,t){const e=n.length;for(let r=0;r<e;++r){const s=n[r],i=t[r];if(s!==i)return 2}return!1}const Ta=3,Xr=10;function rT(n,t,e){const r=n.templater;if(r.tagJsType!==J.stateRender){switch(r.propWatch){case Rt.IMMUTABLE:return n.propsConfig={latest:t,castProps:e};case Rt.SHALLOW:return n.propsConfig={latest:t.map(sT),castProps:e}}return n.propsConfig={latest:t.map(iT),castProps:e}}}function sT(n){return aa(n,Ta)}function iT(n){return aa(n,Xr)}function _d(n,t,e){const r={templater:n,context:t,castedProps:e,appSupport:void 0},s=t.global;return s.blocked=[],t.state||(t.state={newer:{state:[],states:[]}}),r}function yd(n,t,e,r){t.appSupport=e||t;const s=n.props;return s&&(t.propsConfig=rT(t,s,r)),t}function oT(n,t,e,r,s){const i={templater:n,context:r,castedProps:s,appSupport:void 0};return i.ownerSupport=t,i.appSupport=e,i}function Zr(n,t,e,r,s){const i=_d(n,t,s);return i.ownerSupport=e||i,i.ownerSupport.appSupport=r||i.ownerSupport,yd(n,i,r,s)}function aT(n,t,e,r){let s=e.templater||e;const i=n.templater.tag;i&&i._innerHTML&&(s=e.outerHTML||e._innerHTML.outerHTML);const a=Zr(s,t,r,r.appSupport),l=n.context.state.oldest;yh(l,a)}function No(n,t,e){if(Jr(t))return n.global===void 0&&fn(n),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=t,cT(t,n,e),!0;if(n.global){n.oldTagJsVar=n.tagJsVar,n.tagJsVar=t;const i=n.state.newest;if(i)return typeof t===Q.function||aT(i,n,t,e),!0}return t.processInit(t,n,e,n.placeholder),n.oldTagJsVar=n.tagJsVar,n.tagJsVar=t,!0}function cT(n,t,e){if(!t.state.newest){n.processInit(n,t,e,t.placeholder);return}const r=Zr(n,t,e,e.appSupport);d_(e,r,t)}function Ea(n,t,e,r){const s=n&&n.tagJsType;if(delete t.deleted,s){if(s===J.renderOnce)return;No(t,n,e);return}if(Ft(n)){Gs(t,n,e),t.oldTagJsVar=t.tagJsVar,t.tagJsVar=Ph(n);return}if(typeof n===Q.function){t.value=n;return}r&&Tm(n,t)}function Ia(n,t,e){const s=n.tagJsVar.hasValueChanged(t,n,e);return s===0||Ea(t,n,e,s),s}function uT(n,t){let e;return n&&(e=t=document.createTextNode(pn),zt.push([ee,[n,t]])),{appendMarker:e,insertBefore:t}}class lT extends Z{constructor(e){super(e);Kt(this,"value");this.value=e}subscribe(e){const r=super.subscribe(e);return e(this.value,r),r}}const hT=((n,t)=>wa(n,t).pastResult),dT=n=>n;function fT(n){const t=(e,r)=>wa(e,r,n).pastResult;return t.setup=n,va(()=>t,t),t}const wa=(n,t,{init:e,before:r,final:s=dT}={})=>{const i=Wt({pastResult:void 0,values:void 0}),c=typeof n=="function"?n():n,l=i.values===void 0;let h=0;l&&typeof n=="function"&&tt.onRender(()=>{if(++h,h===1)return;const g=n();f(g)});function f(g){if(i.values===void 0){if(r&&!r(g))return i.values=g,i;const k=(e||t)(g,i.values);return i.pastResult=s(k),i.values=g,i}if(g.every((S,k)=>S===i.values[k]))return i;if(r&&!r(g))return i.values=g,i;const b=t(g,i.values);return i.pastResult=s(b),i.values.length=0,i.values.push(...g),i}return f(c)};function va(n,t){return Object.defineProperty(t,"noInit",{get(){const e=n();return e.setup.init=()=>{},e}}),Object.defineProperty(t,"asSubject",{get(){const e=n(),r=Wt(()=>qs()),s=Wt(()=>new lT(void 0)),i=Wt(()=>({state:st.stateConfig.state,states:st.stateConfig.states})),a=(c,l)=>(wa(c,(f,g)=>{const m=qs(),b=l(f,g);if(m!==r){const S=i.state,x=r.context.state.older;if(x){const B=x.state,H=i.states,ct=x.states;L_(S,B,H,ct)}}s.next(b)},e.setup),s);return a.setup=e.setup,va(()=>a,a),a}}),Object.defineProperty(t,"truthy",{get(){const e=n();return e.setup.before=r=>r.every(s=>s),e}}),t}va(()=>fT({}),hT);class Aa extends Error{constructor(e,r,s={}){super(e);Kt(this,"details");this.name=Aa.name,this.details={...s,errorCode:r}}}class ba extends Aa{constructor(t,e){super(t,"sync-callback-error",e),this.name=ba.name}}function pT(n,t,e,...r){const s=e(...r),i=fh(n);if(!i)return s;if(i.context.global)Nr(i);else{const a=i.context;a.tagJsVar.processUpdate(a.value,a,i.ownerSupport,[])}return zn(s)&&s.finally(()=>{if(n.global)Nr(i);else{const a=i.context;a.tagJsVar.processUpdate(a.value,a,i.ownerSupport,[])}}),s}function gT(n){const t=le(),e=Wt({callback:n}),r=Wt(()=>Td(t,st.stateConfig,e));return e.callback=n,r}function Td(n,t,e){const r=t.states;return function(...i){const a=pT(n,r,e.callback,...i);return ye(),a}}new ba("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const mT=()=>{};function _T(n){const t=le(),e=Wt({callback:mT}),r=Wt({current:void 0}),s=Wt(()=>Td(t,st.stateConfig,e));if(r.current!==n){r.current=n;const i=n;n.then(()=>{r.current===i&&s()})}}function le(){return st.stateConfig.context}function Ed(){return le().target}function Jt(n){return st.stateConfig.context=n}function Bt(){delete st.stateConfig.context}function yT(n,t,e,r,s,i,a){const c=document.createTextNode(pn);if(Or.push(e.wrapper||{original:e}),i.placeholder=c,t.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const g=i.events;for(const b in g){const S=g[b];s.removeEventListener(b,S)}i.events={},++gt.locks;const m=Kn(f,t);return--gt.locks,ye(),m},++gt.locks;const l=document.createDocumentFragment();l.appendChild(c);const f=fd(e,i,{appSupport:{appElement:s,context:i},appElement:s});return f.appElement=s,a&&(r.tag=f.templater.tag),--gt.locks,ye(),s.appendChild(l),{support:f,tags:Or,ValueTypes:J}}function TT(n,t,e){const r=_d(n,t);return yd(n,r,r),r.appElement=e,t.state.oldest||(t.state.oldest=r,t.state.older=t.state.newer),t.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const po=[],Nu="__taggedjs_tag_element__";function ET(n,t,e){const r=t[Nu],s=po.findIndex(m=>m.element===t);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:t}),s>=0){const m=po[s].support;Kn(m,m.context.global),po.splice(s,1)}t[Nu]=!0;let i=(()=>h(e));i.propWatch=Rt.NONE,i.tagJsType=J.stateRender,i.processUpdate=gn,i.props=[e],i.isApp=!0;const a=IT(i,t),c=a.global,l=a.state.newest;gh(l.context),_i(l);let h=n(e);const f=typeof h==Q.function;f||(Jr(h)?(a.state.newest.propsConfig={latest:[e],castProps:[e]},i.propWatch=h.propWatch,i.tagJsType=h.tagJsType,i.wrapper=h.wrapper,i=h):(i.tag=h,h=n));const g=yT(n,c,i,h,t,a,f);return Bt(),g}function IT(n,t){const e={tagJsType:"templater",hasValueChanged:wi,destroy:Qr,processInitAttribute:Ot,processInit:function(){console.debug("do nothing app function")},processUpdate:gn},r={updateCount:0,value:n,valueIndex:0,varCounter:0,destroy$:new Z,render$:new Z,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:e};return fn(r),r.events={},TT(n,r,t),r}function wT(n){return Array.isArray(n)&&Object.prototype.hasOwnProperty.call(n,"raw")}function Gt(n,t){return function(e,r,s){if(wT(r)){const i=r.reduce((a,c,l)=>a+c+(s[l]??""),"");return t(e,[n,i])}return t(e,[n,r])}}function vT(n,t,e){const r=ts(n,n.elementFunctions);return Id(r,t,e)}function Id(n,t,e){function r(s){return r.toCallback(s)}return r.toCallback=e,n.listeners.push([t,r]),n.allListeners.push([t,r]),n}function jt(n,t){const e=ts(n,n.elementFunctions);return e.attributes.push(t),an(t[0])?Ln(t[0],e):an(t[1])&&Ln(t[1],e),e}function AT(n,t){const e=ts(n,n.elementFunctions);return Object.entries(t).map(r=>{e.attributes.push(r),an(r[0])?Ln(r[0],e):an(r[1])&&Ln(r[1],e)}),e}const bT=Gt("style",jt),CT=Gt("id",jt),ST=Gt("class",jt),RT=Gt("href",jt),PT=Gt("value",jt),kT=Gt("placeholder",jt),VT=Gt("src",jt),DT=Gt("title",jt),NT=Gt("type",jt),OT=Gt("checked",jt),MT=Gt("disabled",jt),LT=Gt("selected",jt);function wd(n,t){return n.attributes.push(t),an(t[0])?Ln(t[0],n):an(t[1])&&Ln(t[1],n),n}function Ca(n){function t(r){return function(s){return vT(n,r,s)}}return{onClose:t("onclose"),onDoubleClick:t("ondblclick"),onClick:t("click"),onBlur:t("onblur"),onChange:t("onchange"),onInput:t("oninput"),onMousedown:t("onmousedown"),onMouseup:t("onmouseup"),onMouseover:t("onmouseover"),onMouseout:t("onmouseout"),onKeydown:t("onkeydown"),onKeyup:t("onkeyup"),attr:(...r)=>jt(n,r),attrs:r=>AT(n,r),key:function(r){return this.arrayValue=r,this},style:((r,...s)=>bT(n,r,s)),id:((r,...s)=>CT(n,r,s)),class:((r,...s)=>ST(n,r,s)),href:((r,...s)=>RT(n,r,s)),value:((r,...s)=>PT(n,r,s)),placeholder:((r,...s)=>kT(n,r,s)),src:((r,...s)=>VT(n,r,s)),type:((r,...s)=>NT(n,r,s)),title:((r,...s)=>DT(n,r,s)),checked:((r,...s)=>OT(n,r,s)),disabled:((r,...s)=>MT(n,r,s)),selected:((r,...s)=>LT(n,r,s))}}function xT(n,t,e){if(yi(e)){Object.entries(e).forEach(([r,s])=>{s?n.classList.add(r):n.classList.remove(r)});return}Ch(n,t,e)}function Ln(n,t){t.contexts||(t.contexts=[]),t.contexts.push(n)}function an(n){return Array.isArray(n)||He(n)||(n==null?void 0:n.tagJsType)}function Cs(n,t){return(e,r)=>wd(e,[n,r,!1,t])}function ft(n){return(t,e)=>Id(t,n,e)}const FT={onClose:ft("onclose"),onClick:ft("click"),onDoubleClick:ft("ondblclick"),onDblClick:ft("ondblclick"),onBlur:ft("onblur"),onChange:ft("onchange"),onInput:ft("oninput"),onMousedown:ft("onmousedown"),onMouseDown:ft("onmousedown"),onMouseup:ft("onmouseup"),onMouseUp:ft("onmouseup"),onMouseover:ft("onmouseover"),onMouseOver:ft("onmouseup"),onMouseout:ft("onmouseout"),onMouseOut:ft("onmouseout"),onKeyup:ft("onkeyup"),onKeyUp:ft("onkeyup"),onKeydown:ft("onkeydown"),onKeyDown:ft("onkeydown")},Ou={checked:Cs("checked",fo),disabled:Cs("disabled",fo),selected:Cs("selected",fo),class:Cs("class",xT),...FT};function UT(n,t){return Object.entries(t).reduce((r,[s,i])=>s in Ou?Ou[s](n,i):wd(n,[s,i,!1,Jn]),n)}function vd(n,t){++n.updateCount;const e=n.contexts,r=[];if(e.length&&(Ys(e,t,r),e.length=0,r.length)){const s=n.htmlDomMeta;return n.deleted=!0,Promise.all(r).then(()=>{++gt.locks,ha(s),n.htmlDomMeta=[],--gt.locks,ye()})}fa(n),n.htmlDomMeta=[],delete n.contexts,n.deleted=!0}function Ys(n,t,e){const r=n[0],s=r.tagJsVar.destroy(r,t);if(r.deleted=!0,zn(s))return e.push(s.then(()=>{if(n.length>1)return Ys(n.slice(1,n.length),t,e)}));if(r.htmlDomMeta&&(fa(r),delete r.htmlDomMeta),n.length>1)return Ys(n.slice(1,n.length),t,e)}function Ad(n,t,e){if(t.locked||t.deleted===!0)return;if(++t.updateCount,Sa(n,t)){vd(t,e),t.htmlDomMeta=[],delete t.deleted,Ea(n,t,e,789);return}const i=t.contexts,a=n.contexts||[],c=t.tagJsVar.allListeners;if(n.allListeners.forEach((h,f)=>{const g=c[f][1];g.toCallback=h[1].toCallback}),i.length!==a.length)throw console.info("context mismatch",{value:n,context:t,conValues:i.map(h=>h.value),vContexts:a,deleted:t.deleted}),new Error("super issue discovered");t.locked=79,i.forEach((h,f)=>{h.tagJsVar.processUpdate(a[f],h,e)}),delete t.locked}function Sa(n,t){if(t.value===n)return 0;if(!n||n.tagJsType!=="element")return 1;const s=n.innerHTML.length,i=t.value.innerHTML.length;if(s!==i)return 1;const c=n.attributes.length,l=t.value.attributes.length;return c!==l?1:0}function BT(n,t,e,r,s){const i=[],a={updateCount:0,parentContext:e,contexts:i,target:t,value:n,htmlDomMeta:[],tagJsVar:{tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:Ot,processInitAttribute:Ot,destroy:(g,m)=>{++a.updateCount,i.forEach(b=>b.tagJsVar.destroy(b,m))},processUpdate:(g,m,b,S)=>{++a.updateCount,Jt(h);let k=g(h);const V=a.underFunction;delete a.underFunction,k instanceof Function&&!k.tagJsType&&(V&&k.toString()===V.toString()?k=h.value:(a.underFunction=k,k=k()));const x=h.tagJsVar.processUpdate(k,h,b,S);return h.value=k,m.value=g,Bt(),x}},valueIndex:-1,withinOwnerElement:!0,destroy$:new Z,render$:new Z};Jt(a);let c=n();He(c)&&!c.tagJsType&&(a.underFunction=c,c=c());const h=Cd(c,a,t,r,s);return e.contexts.push(a),Bt(),h}function bd(n,t,e,r,s){n.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return Mu(i,r,s);case"function":{if(i.tagJsType==="element")break;return BT(i,r,t,e,s)}}if(i==null)return Mu(i,r,s);if(i.tagJsType==="element"){const c=Sd(i,t,e,t.contexts);Ut.push([s,[r,c]]),t.htmlDomMeta.push({nn:c.tagName,domElement:c,at:[]});return}return Cd(i,t,r,e,s)})}function Cd(n,t,e,r,s){const i=Kr(n,[],!0,t);return t.contexts.push(i),i.target=e,i.placeholder=document.createTextNode(""),Ut.push([s,[e,i.placeholder]]),Jt(i),i.tagJsVar.processInit(n,i,r,i.placeholder),Bt(),i}function Mu(n,t,e){const r=Ti(n),s=document.createTextNode(r);return Ut.push([e,[t,s]]),s}function Sd(n,t,e,r){const s=document.createElement(n.tagName);return t.target=s,n.attributes.forEach(i=>{const a=i[0];typeof a=="string"&&(i[2]=Ei(a))}),Xh(n.attributes,[],s,e,t),bd(n.innerHTML,t,e,s,ee),n.listeners.forEach((i,a)=>jT(n,a,e,i,s)),s}function jT(n,t,e,r,s){const i=(...a)=>{const l=n.listeners[t][1],h=Gr(e),f=h.context.updateCount;h.context.locked=1,++gt.locks;const g=l(...a);return--gt.locks,delete h.context.locked,f===h.context.updateCount?jh(g,h):(ye(),zn(g)?g.then(()=>{const b=h.context.state.newest;return _a([b]),"promise-no-data-ever"}):"no-data-ever")};Hh(e.appSupport,r[0],s,i)}function $T(n,t,e,r){t.contexts=t.contexts||[],t.htmlDomMeta=[],t.locked=34;const s=Sd(n,t,e,t.contexts);delete t.locked,Ut.push([$e,[r,s,"htmlTag.processInit"]]);const i={nn:n.tagName,domElement:s,at:n.attributes};return t.htmlDomMeta=[i],s}function M(n){const e=ts({tagJsType:"element",processInitAttribute:Ot,processInit:$T,destroy:vd,processUpdate:Ad,hasValueChanged:Sa,tagName:n,innerHTML:[],attributes:[],listeners:[],allListeners:[],elementFunctions:Ca});return e.tagName=n,e}function ts(n,t){const e=(...r)=>{const s={...e};return s.attributes=[...e.attributes],s.listeners=[...e.listeners],s.allListeners=[...e.allListeners],r.length>0&&typeof r[0]=="object"&&!Array.isArray(r[0])&&!r[0].tagJsType&&(UT(s,r[0]),r.splice(0,1)),s.innerHTML=r,r.forEach(i=>{if(an(i)){if(i.tagJsType==="element"){s.allListeners.push(...i.allListeners),i.contexts&&(s.contexts?s.contexts.push(...i.contexts):s.contexts=i.contexts);return}HT(i,s)}}),s};return Object.assign(e,n),Object.assign(e,Ca(e)),e.attributes=[...n.attributes],e.listeners=[...n.listeners],e.allListeners=[...n.allListeners],e}function HT(n,t){t.contexts||(t.contexts=[]),t.contexts.push(n)}const pS=qT();function qT(){const t=ts({tagJsType:"element",processInitAttribute:Ot,processInit:WT,destroy:zT,processUpdate:Ad,hasValueChanged:Sa,tagName:"no-element",innerHTML:[],attributes:[],listeners:[],allListeners:[],elementFunctions:Ca});return t.tagName="no-element",t}function WT(n,t,e,r){t.contexts=t.contexts||[],t.htmlDomMeta=[],bd(n.innerHTML,t,e,r,$e)}function zT(n,t){++n.updateCount;const e=n.contexts,r=[];if(e.length&&(Ys(e,t,r),e.length=0,r.length)){const s=n.htmlDomMeta;return Promise.all(r).then(()=>{++gt.locks,ha(s),--gt.locks,ye()})}}const Oo=M("button"),gS=M("select"),mS=M("option"),_S=M("input");M("textarea");M("html");M("head");M("title");M("meta");M("link");M("style");M("body");M("noscript");M("hr");const yS=M("h1"),Lu=M("h2");M("h3");M("h4");M("h5");M("h6");M("ol");M("ul");M("li");const Mr=M("div"),TS=M("main"),go=M("section"),ES=M("header");M("footer");M("form");M("fieldset");M("legend");const IS=M("dialog"),wS=M("pre");M("table");M("tr");M("td");M("th");M("thead");M("tbody");M("tfoot");const Ss=M("a"),JT=M("img");M("br");const vS=M("label"),mo=M("p");M("small");const xu=M("span"),AS=M("strong");M("b");M("sup");M("nav");M("figure");M("figcaption");M("code");const GT=n=>{if(!(n!=null&&n.email))return null;const t=n.photoURL?JT({class:"user-avatar-image",src:n.photoURL,alt:n.email,referrerPolicy:"no-referrer"}):xu.class`user-avatar-fallback`((n.email||"?")[0].toUpperCase());return Mr.class`user-badge`(t,xu.class`user-email`(n.email))},KT=tt((n,t)=>(KT.updates(e=>{[n,t]=e}),Mr.class`menu-bar`(GT(t),Mr.class`menu-actions`(Ss({class:"menu-button",href:"/"},"🏠 Home"),Ss({class:"menu-button",href:"./index.html"},"🎨 Swatch editor"),Ss({class:"menu-button",href:"./manufacturers.html"},"🏭 Manage manufacturers"),Ss({class:"menu-button",href:"./admins.html"},"🛡️ Manage admins"),n?Oo({type:"button",class:"menu-button",onClick:n},"🚪 Sign out"):null)))),QT=()=>{};var Fu={};/**
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
 */const Rd=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},YT=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],a=n[e++],c=n[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(m=64)),r.push(e[f],e[g],e[m],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Rd(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):YT(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const h=s<n.length?e[n.charAt(s)]:64;++s;const g=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new XT;const m=i<<2|c>>4;if(r.push(m),h!==64){const b=c<<4&240|h>>2;if(r.push(b),g!==64){const S=h<<6&192|g;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class XT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZT=function(n){const t=Rd(n);return Pd.encodeByteArray(t,!0)},Xs=function(n){return ZT(n).replace(/\./g,"")},kd=function(n){try{return Pd.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function tE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eE=()=>tE().__FIREBASE_DEFAULTS__,nE=()=>{if(typeof process>"u"||typeof Fu>"u")return;const n=Fu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&kd(n[1]);return t&&JSON.parse(t)},Ai=()=>{try{return QT()||eE()||nE()||rE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vd=n=>{var t,e;return(e=(t=Ai())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},sE=n=>{const t=Vd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Dd=()=>{var n;return(n=Ai())==null?void 0:n.config},Nd=n=>{var t;return(t=Ai())==null?void 0:t[`_${n}`]};/**
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
 */class iE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Qn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Od(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function oE(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Xs(JSON.stringify(e)),Xs(JSON.stringify(a)),""].join(".")}const Cr={};function aE(){const n={prod:[],emulator:[]};for(const t of Object.keys(Cr))Cr[t]?n.emulator.push(t):n.prod.push(t);return n}function cE(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Uu=!1;function Md(n,t){if(typeof window>"u"||typeof document>"u"||!Qn(window.location.host)||Cr[n]===t||Cr[n]||Uu)return;Cr[n]=t;function e(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=aE().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,b){m.setAttribute("width","24"),m.setAttribute("id",b),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Uu=!0,a()},m}function f(m,b){m.setAttribute("id",b),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=cE(r),b=e("text"),S=document.getElementById(b)||document.createElement("span"),k=e("learnmore"),V=document.getElementById(k)||document.createElement("a"),x=e("preprendIcon"),B=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const H=m.element;c(H),f(V,k);const ct=h();l(B,x),H.append(B,S,V,ct),document.body.appendChild(H)}i?(S.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function lE(){var t;const n=(t=Ai())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pE(){const n=Pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gE(){return!lE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mE(){try{return typeof indexedDB=="object"}catch{return!1}}function _E(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const yE="FirebaseError";class ve extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=yE,Object.setPrototypeOf(this,ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?TE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ve(s,c,r)}}function TE(n,t){return n.replace(EE,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const EE=/\{\$([^}]+)}/g;function IE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function cn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],a=t[s];if(Bu(i)&&Bu(a)){if(!cn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Bu(n){return n!==null&&typeof n=="object"}/**
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
 */function ns(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function wE(n,t){const e=new vE(n,t);return e.subscribe.bind(e)}class vE{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");AE(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=_o),s.error===void 0&&(s.error=_o),s.complete===void 0&&(s.complete=_o);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AE(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function _o(){}/**
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
 */function Mt(n){return n&&n._delegate?n._delegate:n}class un{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const nn="[DEFAULT]";/**
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
 */class bE{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new iE;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(SE(t))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=nn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=nn){return this.instances.has(t)}getOptions(t=nn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CE(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=nn){return this.component?this.component.multipleInstances?t:nn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CE(n){return n===nn?void 0:n}function SE(n){return n.instantiationMode==="EAGER"}/**
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
 */class RE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new bE(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const PE={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},kE=W.INFO,VE={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},DE=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=VE[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ra{constructor(t){this.name=t,this._logLevel=kE,this._logHandler=DE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?PE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const NE=(n,t)=>t.some(e=>n instanceof e);let ju,$u;function OE(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ME(){return $u||($u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ld=new WeakMap,Mo=new WeakMap,xd=new WeakMap,yo=new WeakMap,Pa=new WeakMap;function LE(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{e(Me(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Ld.set(e,n)}).catch(()=>{}),Pa.set(t,n),t}function xE(n){if(Mo.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Mo.set(n,t)}let Lo={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Mo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||xd.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Me(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function FE(n){Lo=n(Lo)}function UE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(To(this),t,...e);return xd.set(r,t.sort?t.sort():[t]),Me(r)}:ME().includes(n)?function(...t){return n.apply(To(this),t),Me(Ld.get(this))}:function(...t){return Me(n.apply(To(this),t))}}function BE(n){return typeof n=="function"?UE(n):(n instanceof IDBTransaction&&xE(n),NE(n,OE())?new Proxy(n,Lo):n)}function Me(n){if(n instanceof IDBRequest)return LE(n);if(yo.has(n))return yo.get(n);const t=BE(n);return t!==n&&(yo.set(n,t),Pa.set(t,n)),t}const To=n=>Pa.get(n);function jE(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,t),c=Me(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Me(a.result),l.oldVersion,l.newVersion,Me(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const $E=["get","getKey","getAll","getAllKeys","count"],HE=["put","add","delete","clear"],Eo=new Map;function Hu(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Eo.get(t))return Eo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=HE.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$E.includes(e)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[e](...c),s&&l.done]))[0]};return Eo.set(t,i),i}FE(n=>({...n,get:(t,e,r)=>Hu(t,e)||n.get(t,e,r),has:(t,e)=>!!Hu(t,e)||n.has(t,e)}));/**
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
 */class qE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(WE(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function WE(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xo="@firebase/app",qu="0.14.7";/**
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
 */const Te=new Ra("@firebase/app"),zE="@firebase/app-compat",JE="@firebase/analytics-compat",GE="@firebase/analytics",KE="@firebase/app-check-compat",QE="@firebase/app-check",YE="@firebase/auth",XE="@firebase/auth-compat",ZE="@firebase/database",tI="@firebase/data-connect",eI="@firebase/database-compat",nI="@firebase/functions",rI="@firebase/functions-compat",sI="@firebase/installations",iI="@firebase/installations-compat",oI="@firebase/messaging",aI="@firebase/messaging-compat",cI="@firebase/performance",uI="@firebase/performance-compat",lI="@firebase/remote-config",hI="@firebase/remote-config-compat",dI="@firebase/storage",fI="@firebase/storage-compat",pI="@firebase/firestore",gI="@firebase/ai",mI="@firebase/firestore-compat",_I="firebase",yI="12.8.0";/**
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
 */const Fo="[DEFAULT]",TI={[xo]:"fire-core",[zE]:"fire-core-compat",[GE]:"fire-analytics",[JE]:"fire-analytics-compat",[QE]:"fire-app-check",[KE]:"fire-app-check-compat",[YE]:"fire-auth",[XE]:"fire-auth-compat",[ZE]:"fire-rtdb",[tI]:"fire-data-connect",[eI]:"fire-rtdb-compat",[nI]:"fire-fn",[rI]:"fire-fn-compat",[sI]:"fire-iid",[iI]:"fire-iid-compat",[oI]:"fire-fcm",[aI]:"fire-fcm-compat",[cI]:"fire-perf",[uI]:"fire-perf-compat",[lI]:"fire-rc",[hI]:"fire-rc-compat",[dI]:"fire-gcs",[fI]:"fire-gcs-compat",[pI]:"fire-fst",[mI]:"fire-fst-compat",[gI]:"fire-vertex","fire-js":"fire-js",[_I]:"fire-js-all"};/**
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
 */const Zs=new Map,EI=new Map,Uo=new Map;function Wu(n,t){try{n.container.addComponent(t)}catch(e){Te.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function xn(n){const t=n.name;if(Uo.has(t))return Te.debug(`There were multiple attempts to register component ${t}.`),!1;Uo.set(t,n);for(const e of Zs.values())Wu(e,n);for(const e of EI.values())Wu(e,n);return!0}function ka(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function $t(n){return n==null?!1:n.settings!==void 0}/**
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
 */const II={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Le=new es("app","Firebase",II);/**
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
 */class wI{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
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
 */const Yn=yI;function Fd(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Fo,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Le.create("bad-app-name",{appName:String(s)});if(e||(e=Dd()),!e)throw Le.create("no-options");const i=Zs.get(s);if(i){if(cn(e,i.options)&&cn(r,i.config))return i;throw Le.create("duplicate-app",{appName:s})}const a=new RE(s);for(const l of Uo.values())a.addComponent(l);const c=new wI(e,r,a);return Zs.set(s,c),c}function Ud(n=Fo){const t=Zs.get(n);if(!t&&n===Fo&&Dd())return Fd();if(!t)throw Le.create("no-app",{appName:n});return t}function xe(n,t,e){let r=TI[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Te.warn(a.join(" "));return}xn(new un(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const vI="firebase-heartbeat-database",AI=1,Lr="firebase-heartbeat-store";let Io=null;function Bd(){return Io||(Io=jE(vI,AI,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Lr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Le.create("idb-open",{originalErrorMessage:n.message})})),Io}async function bI(n){try{const e=(await Bd()).transaction(Lr),r=await e.objectStore(Lr).get(jd(n));return await e.done,r}catch(t){if(t instanceof ve)Te.warn(t.message);else{const e=Le.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Te.warn(e.message)}}}async function zu(n,t){try{const r=(await Bd()).transaction(Lr,"readwrite");await r.objectStore(Lr).put(t,jd(n)),await r.done}catch(e){if(e instanceof ve)Te.warn(e.message);else{const r=Le.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Te.warn(r.message)}}}function jd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const CI=1024,SI=30;class RI{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new kI(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ju();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>SI){const a=VI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Te.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ju(),{heartbeatsToSend:r,unsentEntries:s}=PI(this._heartbeatsCache.heartbeats),i=Xs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Te.warn(e),""}}}function Ju(){return new Date().toISOString().substring(0,10)}function PI(n,t=CI){const e=[];let r=n.slice();for(const s of n){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Gu(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Gu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class kI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mE()?_E().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await bI(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return zu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return zu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Gu(n){return Xs(JSON.stringify({version:2,heartbeats:n})).length}function VI(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function DI(n){xn(new un("platform-logger",t=>new qE(t),"PRIVATE")),xn(new un("heartbeat",t=>new RI(t),"PRIVATE")),xe(xo,qu,n),xe(xo,qu,"esm2020"),xe("fire-js","")}DI("");var NI="firebase",OI="12.8.0";/**
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
 */xe(NI,OI,"app");function $d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MI=$d,Hd=new es("auth","Firebase",$d());/**
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
 */const ti=new Ra("@firebase/auth");function LI(n,...t){ti.logLevel<=W.WARN&&ti.warn(`Auth (${Yn}): ${n}`,...t)}function Os(n,...t){ti.logLevel<=W.ERROR&&ti.error(`Auth (${Yn}): ${n}`,...t)}/**
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
 */function he(n,...t){throw Da(n,...t)}function Xt(n,...t){return Da(n,...t)}function Va(n,t,e){const r={...MI(),[t]:e};return new es("auth","Firebase",r).create(t,{appName:n.name})}function Fe(n){return Va(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&he(n,"argument-error"),Va(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Da(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Hd.create(n,...t)}function U(n,t,...e){if(!n)throw Da(t,...e)}function ge(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Os(t),new Error(t)}function Ee(n,t){n||ge(t)}/**
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
 */function Bo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function xI(){return Ku()==="http:"||Ku()==="https:"}function Ku(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function FI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xI()||dE()||"connection"in navigator)?navigator.onLine:!0}function UI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class rs{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ee(e>t,"Short delay should be less than long delay!"),this.isMobile=uE()||fE()}get(){return FI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Na(n,t){Ee(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Wd{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$I=new rs(3e4,6e4);function Oa(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function Xn(n,t,e,r,s={}){return zd(n,s,async()=>{let i={},a={};r&&(t==="GET"?a=r:i={body:JSON.stringify(r)});const c=ns({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:t,headers:l,...i};return hE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Qn(n.emulatorConfig.host)&&(h.credentials="include"),Wd.fetch()(await Jd(n,n.config.apiHost,e,c),h)})}async function zd(n,t,e){n._canInitEmulator=!1;const r={...BI,...t};try{const s=new qI(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Rs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rs(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Rs(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Rs(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Va(n,f,h);he(n,f)}}catch(s){if(s instanceof ve)throw s;he(n,"network-request-failed",{message:String(s)})}}async function HI(n,t,e,r,s={}){const i=await Xn(n,t,e,r,s);return"mfaPendingCredential"in i&&he(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Jd(n,t,e,r){const s=`${t}${e}?${r}`,i=n,a=i.config.emulator?Na(n.config,s):`${n.config.apiScheme}://${s}`;return jI.includes(e)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class qI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),$I.get())})}}function Rs(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=Xt(n,t,r);return s.customData._tokenResponse=e,s}/**
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
 */async function WI(n,t){return Xn(n,"POST","/v1/accounts:delete",t)}async function ei(n,t){return Xn(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Sr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function zI(n,t=!1){const e=Mt(n),r=await e.getIdToken(t),s=Ma(r);U(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Sr(wo(s.auth_time)),issuedAtTime:Sr(wo(s.iat)),expirationTime:Sr(wo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wo(n){return Number(n)*1e3}function Ma(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Os("JWT malformed, contained fewer than 3 sections"),null;try{const s=kd(e);return s?JSON.parse(s):(Os("Failed to decode base64 JWT payload"),null)}catch(s){return Os("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qu(n){const t=Ma(n);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function xr(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof ve&&JI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function JI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class GI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jo{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ni(n){var g;const t=n.auth,e=await n.getIdToken(),r=await xr(n,ei(t,{idToken:e}));U(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?Gd(s.providerUserInfo):[],a=QI(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function KI(n){const t=Mt(n);await ni(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function QI(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Gd(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
 */async function YI(n,t){const e=await zd(n,{},async()=>{const r=ns({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Jd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Qn(n.emulatorConfig.host)&&(l.credentials="include"),Wd.fetch()(a,l)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function XI(n,t){return Xn(n,"POST","/v2/accounts:revokeToken",Oa(n,t))}/**
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
 */class Pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Qu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){U(t.length!==0,"internal-error");const e=Qu(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await YI(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,a=new Pn;return r&&(U(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Pn,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
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
 */function ke(n,t){U(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Qt{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new GI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await xr(this,this.stsTokenManager.getToken(this.auth,t));return U(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return zI(this,t)}reload(){return KI(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Qt({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(Fe(this.auth));const t=await this.getIdToken();return await xr(this,WI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,i=e.phoneNumber??void 0,a=e.photoURL??void 0,c=e.tenantId??void 0,l=e._redirectEventId??void 0,h=e.createdAt??void 0,f=e.lastLoginAt??void 0,{uid:g,emailVerified:m,isAnonymous:b,providerData:S,stsTokenManager:k}=e;U(g&&k,t,"internal-error");const V=Pn.fromJSON(this.name,k);U(typeof g=="string",t,"internal-error"),ke(r,t.name),ke(s,t.name),U(typeof m=="boolean",t,"internal-error"),U(typeof b=="boolean",t,"internal-error"),ke(i,t.name),ke(a,t.name),ke(c,t.name),ke(l,t.name),ke(h,t.name),ke(f,t.name);const x=new Qt({uid:g,auth:t,email:s,emailVerified:m,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:V,createdAt:h,lastLoginAt:f});return S&&Array.isArray(S)&&(x.providerData=S.map(B=>({...B}))),l&&(x._redirectEventId=l),x}static async _fromIdTokenResponse(t,e,r=!1){const s=new Pn;s.updateFromServerResponse(e);const i=new Qt({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ni(i),i}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Pn;c.updateFromIdToken(r);const l=new Qt({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new jo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Yu=new Map;function me(n){Ee(n instanceof Function,"Expected a class definition");let t=Yu.get(n);return t?(Ee(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Yu.set(n,t),t)}/**
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
 */class Kd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Kd.type="NONE";const Xu=Kd;/**
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
 */function Ms(n,t,e){return`firebase:${n}:${t}:${e}`}class kn{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ms(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ms("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await ei(this.auth,{idToken:t}).catch(()=>{});return e?Qt._fromGetAccountInfoResponse(this.auth,e,t):null}return Qt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new kn(me(Xu),t,r);const s=(await Promise.all(e.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||me(Xu);const a=Ms(r,t.config.apiKey,t.name);let c=null;for(const h of e)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const m=await ei(t,{idToken:f}).catch(()=>{});if(!m)break;g=await Qt._fromGetAccountInfoResponse(t,m,f)}else g=Qt._fromJSON(t,f);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new kn(i,t,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(e.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new kn(i,t,r))}}/**
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
 */function Zu(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zd(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Qd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ef(t))return"Blackberry";if(nf(t))return"Webos";if(Yd(t))return"Safari";if((t.includes("chrome/")||Xd(t))&&!t.includes("edge/"))return"Chrome";if(tf(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qd(n=Pt()){return/firefox\//i.test(n)}function Yd(n=Pt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Xd(n=Pt()){return/crios\//i.test(n)}function Zd(n=Pt()){return/iemobile/i.test(n)}function tf(n=Pt()){return/android/i.test(n)}function ef(n=Pt()){return/blackberry/i.test(n)}function nf(n=Pt()){return/webos/i.test(n)}function La(n=Pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ZI(n=Pt()){var t;return La(n)&&!!((t=window.navigator)!=null&&t.standalone)}function tw(){return pE()&&document.documentMode===10}function rf(n=Pt()){return La(n)||tf(n)||nf(n)||ef(n)||/windows phone/i.test(n)||Zd(n)}/**
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
 */function sf(n,t=[]){let e;switch(n){case"Browser":e=Zu(Pt());break;case"Worker":e=`${Zu(Pt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Yn}/${r}`}/**
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
 */class ew{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((a,c)=>{try{const l=t(i);a(l)}catch(l){c(l)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nw(n,t={}){return Xn(n,"GET","/v2/passwordPolicy",Oa(n,t))}/**
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
 */const rw=6;class sw{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??rw,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class iw{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tl(this),this.idTokenSubscription=new tl(this),this.beforeStateQueue=new ew(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=me(e)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await kn.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await ei(this,{idToken:t}),r=await Qt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if($t(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ni(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=UI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if($t(this.app))return Promise.reject(Fe(this));const e=t?Mt(t):null;return e&&U(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(Fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return $t(this.app)?Promise.reject(Fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(me(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await nw(this),e=new sw(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new es("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await XI(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&me(t)||this._popupRedirectResolver;U(e,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[me(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,r,s);return()=>{a=!0,l()}}else{const l=t.addObserver(e);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=sf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&LI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zn(n){return Mt(n)}class tl{constructor(t){this.auth=t,this.observer=null,this.addObserver=wE(e=>this.observer=e)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ow(n){xa=n}function aw(n){return xa.loadJS(n)}function cw(){return xa.gapiScript}function uw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function lw(n,t){const e=ka(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(cn(i,t??{}))return s;he(s,"already-initialized")}return e.initialize({options:t})}function hw(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(me);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function dw(n,t,e){const r=Zn(n);U(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=of(t),{host:a,port:c}=fw(t),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(cn(h,r.config.emulator)&&cn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Qn(a)?(Od(`${i}//${a}${l}`),Md("Auth",!0)):pw()}function of(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function fw(n){const t=of(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:el(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:el(a)}}}function el(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function pw(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class af{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ge("not implemented")}_getIdTokenResponse(t){return ge("not implemented")}_linkToIdToken(t,e){return ge("not implemented")}_getReauthenticationResolver(t){return ge("not implemented")}}/**
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
 */async function Vn(n,t){return HI(n,"POST","/v1/accounts:signInWithIdp",Oa(n,t))}/**
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
 */const gw="http://localhost";class ln extends af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ln(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):he("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=e;if(!r||!s)return null;const a=new ln(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return Vn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Vn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Vn(t,e)}buildRequest(){const t={requestUri:gw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=ns(e)}return t}}/**
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
 */class bi{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ss extends bi{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ve extends ss{constructor(){super("facebook.com")}static credential(t){return ln._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ve.credentialFromTaggedObject(t)}static credentialFromError(t){return Ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ve.credential(t.oauthAccessToken)}catch{return null}}}Ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ve.PROVIDER_ID="facebook.com";/**
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
 */class pe extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ln._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return pe.credential(e,r)}catch{return null}}}pe.GOOGLE_SIGN_IN_METHOD="google.com";pe.PROVIDER_ID="google.com";/**
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
 */class De extends ss{constructor(){super("github.com")}static credential(t){return ln._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return De.credentialFromTaggedObject(t)}static credentialFromError(t){return De.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return De.credential(t.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com";De.PROVIDER_ID="github.com";/**
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
 */class Ne extends ss{constructor(){super("twitter.com")}static credential(t,e){return ln._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ne.credentialFromTaggedObject(t)}static credentialFromError(t){return Ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Ne.credential(e,r)}catch{return null}}}Ne.TWITTER_SIGN_IN_METHOD="twitter.com";Ne.PROVIDER_ID="twitter.com";/**
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
 */class Fn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await Qt._fromIdTokenResponse(t,r,s),a=nl(r);return new Fn({user:i,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=nl(r);return new Fn({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function nl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ri extends ve{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new ri(t,e,r,s)}}function cf(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,i,t,r):i})}async function mw(n,t,e=!1){const r=await xr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Fn._forOperation(n,"link",r)}/**
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
 */async function _w(n,t,e=!1){const{auth:r}=n;if($t(r.app))return Promise.reject(Fe(r));const s="reauthenticate";try{const i=await xr(n,cf(r,s,t,n),e);U(i.idToken,r,"internal-error");const a=Ma(i.idToken);U(a,r,"internal-error");const{sub:c}=a;return U(n.uid===c,r,"user-mismatch"),Fn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&he(r,"user-mismatch"),i}}/**
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
 */async function yw(n,t,e=!1){if($t(n.app))return Promise.reject(Fe(n));const r="signIn",s=await cf(n,r,t),i=await Fn._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}/**
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
 */function Tw(n,t){return Mt(n).setPersistence(t)}function Ew(n,t,e,r){return Mt(n).onIdTokenChanged(t,e,r)}function Iw(n,t,e){return Mt(n).beforeAuthStateChanged(t,e)}function ww(n,t,e,r){return Mt(n).onAuthStateChanged(t,e,r)}function vw(n){return Mt(n).signOut()}const si="__sak";/**
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
 */class uf{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(si,"1"),this.storage.removeItem(si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Aw=1e3,bw=10;class lf extends uf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);tw()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,bw):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}lf.type="LOCAL";const hf=lf;/**
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
 */class df extends uf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}df.type="SESSION";const Fa=df;/**
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
 */function Cw(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Ci{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new Ci(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(e.origin,i)),l=await Cw(c);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ci.receivers=[];/**
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
 */function Ua(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Sw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Ua("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function oe(){return window}function Rw(n){oe().location.href=n}/**
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
 */function ff(){return typeof oe().WorkerGlobalScope<"u"&&typeof oe().importScripts=="function"}async function Pw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Vw(){return ff()?self:null}/**
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
 */const pf="firebaseLocalStorageDb",Dw=1,ii="firebaseLocalStorage",gf="fbase_key";class is{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Si(n,t){return n.transaction([ii],t?"readwrite":"readonly").objectStore(ii)}function Nw(){const n=indexedDB.deleteDatabase(pf);return new is(n).toPromise()}function $o(){const n=indexedDB.open(pf,Dw);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ii,{keyPath:gf})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ii)?t(r):(r.close(),await Nw(),t(await $o()))})})}async function rl(n,t,e){const r=Si(n,!0).put({[gf]:t,value:e});return new is(r).toPromise()}async function Ow(n,t){const e=Si(n,!1).get(t),r=await new is(e).toPromise();return r===void 0?null:r.value}function sl(n,t){const e=Si(n,!0).delete(t);return new is(e).toPromise()}const Mw=800,Lw=3;class mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $o(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Lw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ff()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ci._getInstance(Vw()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await Pw(),!this.activeServiceWorker)return;this.sender=new Sw(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||kw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await $o();return await rl(t,si,"1"),await sl(t,si),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>rl(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Ow(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>sl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Si(s,!1).getAll();return new is(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mf.type="LOCAL";const _f=mf;new rs(3e4,6e4);/**
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
 */function Ba(n,t){return t?me(t):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ja extends af{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Vn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Vn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function xw(n){return yw(n.auth,new ja(n),n.bypassAuthState)}function Fw(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),_w(e,new ja(n),n.bypassAuthState)}async function Uw(n){const{auth:t,user:e}=n;return U(e,t,"internal-error"),mw(e,new ja(n),n.bypassAuthState)}/**
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
 */class yf{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xw;case"linkViaPopup":case"linkViaRedirect":return Uw;case"reauthViaPopup":case"reauthViaRedirect":return Fw;default:he(this.auth,"internal-error")}}resolve(t){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bw=new rs(2e3,1e4);async function jw(n,t,e){if($t(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=Zn(n);qd(n,t,bi);const s=Ba(r,e);return new rn(r,"signInViaPopup",t,s).executeNotNull()}class rn extends yf{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const t=Ua();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Bw.get())};t()}}rn.currentPopupAction=null;/**
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
 */const $w="pendingRedirect",Ls=new Map;class Hw extends yf{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Ls.get(this.auth._key());if(!t){try{const r=await qw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Ls.set(this.auth._key(),t)}return this.bypassAuthState||Ls.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qw(n,t){const e=Ef(t),r=Tf(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}async function Ww(n,t){return Tf(n)._set(Ef(t),"true")}function zw(n,t){Ls.set(n._key(),t)}function Tf(n){return me(n._redirectPersistence)}function Ef(n){return Ms($w,n.config.apiKey,n.name)}/**
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
 */function Jw(n,t,e){return Gw(n,t,e)}async function Gw(n,t,e){if($t(n.app))return Promise.reject(Fe(n));const r=Zn(n);qd(n,t,bi),await r._initializationPromise;const s=Ba(r,e);return await Ww(s,r),s._openRedirect(r,t,"signInViaRedirect")}async function Kw(n,t){return await Zn(n)._initializationPromise,If(n,t,!1)}async function If(n,t,e=!1){if($t(n.app))return Promise.reject(Fe(n));const r=Zn(n),s=Ba(r,t),a=await new Hw(r,s,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const Qw=600*1e3;class Yw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Xw(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!wf(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(Xt(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Qw&&this.cachedEventUids.clear(),this.cachedEventUids.has(il(t))}saveEventToCache(t){this.cachedEventUids.add(il(t)),this.lastProcessedEventTime=Date.now()}}function il(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function wf({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Xw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wf(n);default:return!1}}/**
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
 */async function Zw(n,t={}){return Xn(n,"GET","/v1/projects",t)}/**
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
 */const tv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ev=/^https?/;async function nv(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Zw(n);for(const e of t)try{if(rv(e))return}catch{}he(n,"unauthorized-domain")}function rv(n){const t=Bo(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!ev.test(e))return!1;if(tv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const sv=new rs(3e4,6e4);function ol(){const n=oe().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function iv(n){return new Promise((t,e)=>{var s,i,a;function r(){ol(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ol(),e(Xt(n,"network-request-failed"))},timeout:sv.get()})}if((i=(s=oe().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)t(gapi.iframes.getContext());else if((a=oe().gapi)!=null&&a.load)r();else{const c=uw("iframefcb");return oe()[c]=()=>{gapi.load?r():e(Xt(n,"network-request-failed"))},aw(`${cw()}?onload=${c}`).catch(l=>e(l))}}).catch(t=>{throw xs=null,t})}let xs=null;function ov(n){return xs=xs||iv(n),xs}/**
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
 */const av=new rs(5e3,15e3),cv="__/auth/iframe",uv="emulator/auth/iframe",lv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dv(n){const t=n.config;U(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Na(t,uv):`https://${n.config.authDomain}/${cv}`,r={apiKey:t.apiKey,appName:n.name,v:Yn},s=hv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${ns(r).slice(1)}`}async function fv(n){const t=await ov(n),e=oe().gapi;return U(e,n,"internal-error"),t.open({where:document.body,url:dv(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Xt(n,"network-request-failed"),c=oe().setTimeout(()=>{i(a)},av.get());function l(){oe().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const pv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gv=500,mv=600,_v="_blank",yv="http://localhost";class al{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tv(n,t,e,r=gv,s=mv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...pv,width:r.toString(),height:s.toString(),top:i,left:a},h=Pt().toLowerCase();e&&(c=Xd(h)?_v:e),Qd(h)&&(t=t||yv,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[b,S])=>`${m}${b}=${S},`,"");if(ZI(h)&&c!=="_self")return Ev(t||"",c),new al(null);const g=window.open(t||"",c,f);U(g,n,"popup-blocked");try{g.focus()}catch{}return new al(g)}function Ev(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Iv="__/auth/handler",wv="emulator/auth/handler",vv=encodeURIComponent("fac");async function cl(n,t,e,r,s,i){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Yn,eventId:s};if(t instanceof bi){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",IE(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(t instanceof ss){const f=t.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${vv}=${encodeURIComponent(l)}`:"";return`${Av(n)}?${ns(c).slice(1)}${h}`}function Av({config:n}){return n.emulator?Na(n,wv):`https://${n.authDomain}/${Iv}`}/**
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
 */const vo="webStorageSupport";class bv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fa,this._completeRedirectFn=If,this._overrideRedirectResult=zw}async _openPopup(t,e,r,s){var a;Ee((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await cl(t,e,r,Bo(),s);return Tv(t,i,Ua())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await cl(t,e,r,Bo(),s);return Rw(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(Ee(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await fv(t),r=new Yw(t);return e.register("authEvent",s=>(U(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(vo,{type:vo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[vo];i!==void 0&&e(!!i),he(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=nv(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return rf()||Yd()||La()}}const Cv=bv;var ul="@firebase/auth",ll="1.12.0";/**
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
 */class Sv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pv(n){xn(new un("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sf(n)},h=new iw(r,s,i,l);return hw(h,e),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),xn(new un("auth-internal",t=>{const e=Zn(t.getProvider("auth").getImmediate());return(r=>new Sv(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(ul,ll,Rv(n)),xe(ul,ll,"esm2020")}/**
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
 */const kv=300,Vv=Nd("authIdTokenMaxAge")||kv;let hl=null;const Dv=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Vv)return;const s=e==null?void 0:e.token;hl!==s&&(hl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Nv(n=Ud()){const t=ka(n,"auth");if(t.isInitialized())return t.getImmediate();const e=lw(n,{popupRedirectResolver:Cv,persistence:[_f,hf,Fa]}),r=Nd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Dv(i.toString());Iw(e,a,()=>a(e.currentUser)),Ew(e,c=>a(c))}}const s=Vd("auth");return s&&dw(e,`http://${s}`),e}function Ov(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}ow({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=Xt("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",Ov().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pv("Browser");var dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ue,vf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,_){function T(){}T.prototype=_.prototype,I.F=_.prototype,I.prototype=new T,I.prototype.constructor=I,I.D=function(w,E,A){for(var y=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)y[Dt-2]=arguments[Dt];return _.prototype[E].apply(w,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,T){T||(T=0);const w=Array(16);if(typeof _=="string")for(var E=0;E<16;++E)w[E]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(E=0;E<16;++E)w[E]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=I.g[0],T=I.g[1],E=I.g[2];let A=I.g[3],y;y=_+(A^T&(E^A))+w[0]+3614090360&4294967295,_=T+(y<<7&4294967295|y>>>25),y=A+(E^_&(T^E))+w[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=E+(T^A&(_^T))+w[2]+606105819&4294967295,E=A+(y<<17&4294967295|y>>>15),y=T+(_^E&(A^_))+w[3]+3250441966&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(A^T&(E^A))+w[4]+4118548399&4294967295,_=T+(y<<7&4294967295|y>>>25),y=A+(E^_&(T^E))+w[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=E+(T^A&(_^T))+w[6]+2821735955&4294967295,E=A+(y<<17&4294967295|y>>>15),y=T+(_^E&(A^_))+w[7]+4249261313&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(A^T&(E^A))+w[8]+1770035416&4294967295,_=T+(y<<7&4294967295|y>>>25),y=A+(E^_&(T^E))+w[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=E+(T^A&(_^T))+w[10]+4294925233&4294967295,E=A+(y<<17&4294967295|y>>>15),y=T+(_^E&(A^_))+w[11]+2304563134&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(A^T&(E^A))+w[12]+1804603682&4294967295,_=T+(y<<7&4294967295|y>>>25),y=A+(E^_&(T^E))+w[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=E+(T^A&(_^T))+w[14]+2792965006&4294967295,E=A+(y<<17&4294967295|y>>>15),y=T+(_^E&(A^_))+w[15]+1236535329&4294967295,T=E+(y<<22&4294967295|y>>>10),y=_+(E^A&(T^E))+w[1]+4129170786&4294967295,_=T+(y<<5&4294967295|y>>>27),y=A+(T^E&(_^T))+w[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(A^_))+w[11]+643717713&4294967295,E=A+(y<<14&4294967295|y>>>18),y=T+(A^_&(E^A))+w[0]+3921069994&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(E^A&(T^E))+w[5]+3593408605&4294967295,_=T+(y<<5&4294967295|y>>>27),y=A+(T^E&(_^T))+w[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(A^_))+w[15]+3634488961&4294967295,E=A+(y<<14&4294967295|y>>>18),y=T+(A^_&(E^A))+w[4]+3889429448&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(E^A&(T^E))+w[9]+568446438&4294967295,_=T+(y<<5&4294967295|y>>>27),y=A+(T^E&(_^T))+w[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(A^_))+w[3]+4107603335&4294967295,E=A+(y<<14&4294967295|y>>>18),y=T+(A^_&(E^A))+w[8]+1163531501&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(E^A&(T^E))+w[13]+2850285829&4294967295,_=T+(y<<5&4294967295|y>>>27),y=A+(T^E&(_^T))+w[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=E+(_^T&(A^_))+w[7]+1735328473&4294967295,E=A+(y<<14&4294967295|y>>>18),y=T+(A^_&(E^A))+w[12]+2368359562&4294967295,T=E+(y<<20&4294967295|y>>>12),y=_+(T^E^A)+w[5]+4294588738&4294967295,_=T+(y<<4&4294967295|y>>>28),y=A+(_^T^E)+w[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=E+(A^_^T)+w[11]+1839030562&4294967295,E=A+(y<<16&4294967295|y>>>16),y=T+(E^A^_)+w[14]+4259657740&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(T^E^A)+w[1]+2763975236&4294967295,_=T+(y<<4&4294967295|y>>>28),y=A+(_^T^E)+w[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=E+(A^_^T)+w[7]+4139469664&4294967295,E=A+(y<<16&4294967295|y>>>16),y=T+(E^A^_)+w[10]+3200236656&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(T^E^A)+w[13]+681279174&4294967295,_=T+(y<<4&4294967295|y>>>28),y=A+(_^T^E)+w[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=E+(A^_^T)+w[3]+3572445317&4294967295,E=A+(y<<16&4294967295|y>>>16),y=T+(E^A^_)+w[6]+76029189&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(T^E^A)+w[9]+3654602809&4294967295,_=T+(y<<4&4294967295|y>>>28),y=A+(_^T^E)+w[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=E+(A^_^T)+w[15]+530742520&4294967295,E=A+(y<<16&4294967295|y>>>16),y=T+(E^A^_)+w[2]+3299628645&4294967295,T=E+(y<<23&4294967295|y>>>9),y=_+(E^(T|~A))+w[0]+4096336452&4294967295,_=T+(y<<6&4294967295|y>>>26),y=A+(T^(_|~E))+w[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=E+(_^(A|~T))+w[14]+2878612391&4294967295,E=A+(y<<15&4294967295|y>>>17),y=T+(A^(E|~_))+w[5]+4237533241&4294967295,T=E+(y<<21&4294967295|y>>>11),y=_+(E^(T|~A))+w[12]+1700485571&4294967295,_=T+(y<<6&4294967295|y>>>26),y=A+(T^(_|~E))+w[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=E+(_^(A|~T))+w[10]+4293915773&4294967295,E=A+(y<<15&4294967295|y>>>17),y=T+(A^(E|~_))+w[1]+2240044497&4294967295,T=E+(y<<21&4294967295|y>>>11),y=_+(E^(T|~A))+w[8]+1873313359&4294967295,_=T+(y<<6&4294967295|y>>>26),y=A+(T^(_|~E))+w[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=E+(_^(A|~T))+w[6]+2734768916&4294967295,E=A+(y<<15&4294967295|y>>>17),y=T+(A^(E|~_))+w[13]+1309151649&4294967295,T=E+(y<<21&4294967295|y>>>11),y=_+(E^(T|~A))+w[4]+4149444226&4294967295,_=T+(y<<6&4294967295|y>>>26),y=A+(T^(_|~E))+w[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=E+(_^(A|~T))+w[2]+718787259&4294967295,E=A+(y<<15&4294967295|y>>>17),y=T+(A^(E|~_))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.v=function(I,_){_===void 0&&(_=I.length);const T=_-this.blockSize,w=this.C;let E=this.h,A=0;for(;A<_;){if(E==0)for(;A<=T;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(w[E++]=I.charCodeAt(A++),E==this.blockSize){s(this,w),E=0;break}}else for(;A<_;)if(w[E++]=I[A++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=_},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var T=I.length-8;T<I.length;++T)I[T]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,T=0;T<4;++T)for(let w=0;w<32;w+=8)I[_++]=this.g[T]>>>w&255;return I};function i(I,_){var T=c;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=_(I)}function a(I,_){this.h=_;const T=[];let w=!0;for(let E=I.length-1;E>=0;E--){const A=I[E]|0;w&&A==_||(T[E]=A,w=!1)}this.g=T}var c={};function l(I){return-128<=I&&I<128?i(I,function(_){return new a([_|0],_<0?-1:0)}):new a([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return V(h(-I));const _=[];let T=1;for(let w=0;I>=T;w++)_[w]=I/T|0,T*=4294967296;return new a(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return V(f(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(_,8));let w=g;for(let A=0;A<I.length;A+=8){var E=Math.min(8,I.length-A);const y=parseInt(I.substring(A,A+E),_);E<8?(E=h(Math.pow(_,E)),w=w.j(E).add(h(y))):(w=w.j(T),w=w.add(h(y)))}return w}var g=l(0),m=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();let I=0,_=1;for(let T=0;T<this.g.length;T++){const w=this.i(T);I+=(w>=0?w:4294967296+w)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(k(this))return"-"+V(this).toString(I);const _=h(Math.pow(I,6));var T=this;let w="";for(;;){const E=ct(T,_).g;T=x(T,E.j(_));let A=((T.g.length>0?T.g[0]:T.h)>>>0).toString(I);if(T=E,S(T))return A+w;for(;A.length<6;)A="0"+A;w=A+w}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=x(this,I),k(I)?-1:S(I)?0:1};function V(I){const _=I.g.length,T=[];for(let w=0;w<_;w++)T[w]=~I.g[w];return new a(T,~I.h).add(m)}n.abs=function(){return k(this)?V(this):this},n.add=function(I){const _=Math.max(this.g.length,I.g.length),T=[];let w=0;for(let E=0;E<=_;E++){let A=w+(this.i(E)&65535)+(I.i(E)&65535),y=(A>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);w=y>>>16,A&=65535,y&=65535,T[E]=y<<16|A}return new a(T,T[T.length-1]&-2147483648?-1:0)};function x(I,_){return I.add(V(_))}n.j=function(I){if(S(this)||S(I))return g;if(k(this))return k(I)?V(this).j(V(I)):V(V(this).j(I));if(k(I))return V(this.j(V(I)));if(this.l(b)<0&&I.l(b)<0)return h(this.m()*I.m());const _=this.g.length+I.g.length,T=[];for(var w=0;w<2*_;w++)T[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<I.g.length;E++){const A=this.i(w)>>>16,y=this.i(w)&65535,Dt=I.i(E)>>>16,Qe=I.i(E)&65535;T[2*w+2*E]+=y*Qe,B(T,2*w+2*E),T[2*w+2*E+1]+=A*Qe,B(T,2*w+2*E+1),T[2*w+2*E+1]+=y*Dt,B(T,2*w+2*E+1),T[2*w+2*E+2]+=A*Dt,B(T,2*w+2*E+2)}for(I=0;I<_;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=_;I<2*_;I++)T[I]=0;return new a(T,0)};function B(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function H(I,_){this.g=I,this.h=_}function ct(I,_){if(S(_))throw Error("division by zero");if(S(I))return new H(g,g);if(k(I))return _=ct(V(I),_),new H(V(_.g),V(_.h));if(k(_))return _=ct(I,V(_)),new H(V(_.g),_.h);if(I.g.length>30){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,w=_;w.l(I)<=0;)T=Lt(T),w=Lt(w);var E=vt(T,1),A=vt(w,1);for(w=vt(w,2),T=vt(T,2);!S(w);){var y=A.add(w);y.l(I)<=0&&(E=E.add(T),A=y),w=vt(w,1),T=vt(T,1)}return _=x(I,E.j(_)),new H(E,_)}for(E=g;I.l(_)>=0;){for(T=Math.max(1,Math.floor(I.m()/_.m())),w=Math.ceil(Math.log(T)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),A=h(T),y=A.j(_);k(y)||y.l(I)>0;)T-=w,A=h(T),y=A.j(_);S(A)&&(A=m),E=E.add(A),I=x(I,y)}return new H(E,I)}n.B=function(I){return ct(this,I).h},n.and=function(I){const _=Math.max(this.g.length,I.g.length),T=[];for(let w=0;w<_;w++)T[w]=this.i(w)&I.i(w);return new a(T,this.h&I.h)},n.or=function(I){const _=Math.max(this.g.length,I.g.length),T=[];for(let w=0;w<_;w++)T[w]=this.i(w)|I.i(w);return new a(T,this.h|I.h)},n.xor=function(I){const _=Math.max(this.g.length,I.g.length),T=[];for(let w=0;w<_;w++)T[w]=this.i(w)^I.i(w);return new a(T,this.h^I.h)};function Lt(I){const _=I.g.length+1,T=[];for(let w=0;w<_;w++)T[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(T,I.h)}function vt(I,_){const T=_>>5;_%=32;const w=I.g.length-T,E=[];for(let A=0;A<w;A++)E[A]=_>0?I.i(A+T)>>>_|I.i(A+T+1)<<32-_:I.i(A+T);return new a(E,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,vf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Ue=a}).apply(typeof dl<"u"?dl:typeof self<"u"?self:typeof window<"u"?window:{});var Ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Af,Ir,bf,Fs,Ho,Cf,Sf,Rf;(function(){var n,t=Object.defineProperty;function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ps=="object"&&Ps];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=e(this);function s(o,u){if(u)t:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var v=o[p];if(!(v in d))break t;d=d[v]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&t(d,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=l,h.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,v,C){for(var D=Array(arguments.length-2),q=2;q<arguments.length;q++)D[q-2]=arguments[q];return u.prototype[v].apply(p,D)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const u=o.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function S(o,u){for(let p=1;p<arguments.length;p++){const v=arguments[p];var d=typeof v;if(d=d!="object"?d:v?Array.isArray(v)?"array":d:"null",d=="array"||d=="object"&&typeof v.length=="number"){d=o.length||0;const C=v.length||0;o.length=d+C;for(let D=0;D<C;D++)o[d+D]=v[D]}else o.push(v)}}class k{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(o){a.setTimeout(()=>{throw o},0)}function x(){var o=I;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class B{constructor(){this.h=this.g=null}add(u,d){const p=H.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var H=new k(()=>new ct,o=>o.reset());class ct{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Lt,vt=!1,I=new B,_=()=>{const o=Promise.resolve(void 0);Lt=()=>{o.then(T)}};function T(){for(var o;o=x();){try{o.h.call(o.g)}catch(d){V(d)}var u=H;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}vt=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o})();function y(o){return/^[\s\xa0]*$/.test(o)}function Dt(o,u){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}g(Dt,E),Dt.prototype.init=function(o,u){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Dt.Z.h.call(this)},Dt.prototype.h=function(){Dt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Qe="closure_listenable_"+(Math.random()*1e6|0),ag=0;function cg(o,u,d,p,v){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=v,this.key=++ag,this.da=this.fa=!1}function hs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ds(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function ug(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function Ic(o){const u={};for(const d in o)u[d]=o[d];return u}const wc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vc(o,u){let d,p;for(let v=1;v<arguments.length;v++){p=arguments[v];for(d in p)o[d]=p[d];for(let C=0;C<wc.length;C++)d=wc[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function fs(o){this.src=o,this.g={},this.h=0}fs.prototype.add=function(o,u,d,p,v){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const D=Hi(o,u,p,v);return D>-1?(u=o[D],d||(u.fa=!1)):(u=new cg(u,this.src,C,!!p,v),u.fa=d,o.push(u)),u};function $i(o,u){const d=u.type;if(d in o.g){var p=o.g[d],v=Array.prototype.indexOf.call(p,u,void 0),C;(C=v>=0)&&Array.prototype.splice.call(p,v,1),C&&(hs(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Hi(o,u,d,p){for(let v=0;v<o.length;++v){const C=o[v];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==p)return v}return-1}var qi="closure_lm_"+(Math.random()*1e6|0),Wi={};function Ac(o,u,d,p,v){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Ac(o,u[C],d,p,v);return null}return d=Sc(d),o&&o[Qe]?o.J(u,d,c(p)?!!p.capture:!1,v):lg(o,u,d,!1,p,v)}function lg(o,u,d,p,v,C){if(!u)throw Error("Invalid event type");const D=c(v)?!!v.capture:!!v;let q=Ji(o);if(q||(o[qi]=q=new fs(o)),d=q.add(u,d,p,D,C),d.proxy)return d;if(p=hg(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)A||(v=D),v===void 0&&(v=!1),o.addEventListener(u.toString(),p,v);else if(o.attachEvent)o.attachEvent(Cc(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function hg(){function o(d){return u.call(o.src,o.listener,d)}const u=dg;return o}function bc(o,u,d,p,v){if(Array.isArray(u))for(var C=0;C<u.length;C++)bc(o,u[C],d,p,v);else p=c(p)?!!p.capture:!!p,d=Sc(d),o&&o[Qe]?(o=o.i,C=String(u).toString(),C in o.g&&(u=o.g[C],d=Hi(u,d,p,v),d>-1&&(hs(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[C],o.h--)))):o&&(o=Ji(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Hi(u,d,p,v)),(d=o>-1?u[o]:null)&&zi(d))}function zi(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Qe])$i(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(Cc(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Ji(u))?($i(d,o),d.h==0&&(d.src=null,u[qi]=null)):hs(o)}}}function Cc(o){return o in Wi?Wi[o]:Wi[o]="on"+o}function dg(o,u){if(o.da)o=!0;else{u=new Dt(u,this);const d=o.listener,p=o.ha||o.src;o.fa&&zi(o),o=d.call(p,u)}return o}function Ji(o){return o=o[qi],o instanceof fs?o:null}var Gi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Sc(o){return typeof o=="function"?o:(o[Gi]||(o[Gi]=function(u){return o.handleEvent(u)}),o[Gi])}function At(){w.call(this),this.i=new fs(this),this.M=this,this.G=null}g(At,w),At.prototype[Qe]=!0,At.prototype.removeEventListener=function(o,u,d,p){bc(this,o,u,d,p)};function kt(o,u){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new E(u,o);else if(u instanceof E)u.target=u.target||o;else{var v=u;u=new E(p,o),vc(u,v)}v=!0;let C,D;if(d)for(D=d.length-1;D>=0;D--)C=u.g=d[D],v=ps(C,p,!0,u)&&v;if(C=u.g=o,v=ps(C,p,!0,u)&&v,v=ps(C,p,!1,u)&&v,d)for(D=0;D<d.length;D++)C=u.g=d[D],v=ps(C,p,!1,u)&&v}At.prototype.N=function(){if(At.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let p=0;p<d.length;p++)hs(d[p]);delete o.g[u],o.h--}}this.G=null},At.prototype.J=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},At.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function ps(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let v=!0;for(let C=0;C<u.length;++C){const D=u[C];if(D&&!D.da&&D.capture==d){const q=D.listener,dt=D.ha||D.src;D.fa&&$i(o.i,D),v=q.call(dt,p)!==!1&&v}}return v&&!p.defaultPrevented}function fg(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Rc(o){o.g=fg(()=>{o.g=null,o.i&&(o.i=!1,Rc(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class pg extends w{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Rc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sr(o){w.call(this),this.h=o,this.g={}}g(sr,w);var Pc=[];function kc(o){ds(o.g,function(u,d){this.g.hasOwnProperty(d)&&zi(u)},o),o.g={}}sr.prototype.N=function(){sr.Z.N.call(this),kc(this)},sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ki=a.JSON.stringify,gg=a.JSON.parse,mg=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Vc(){}function Dc(){}var ir={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Qi(){E.call(this,"d")}g(Qi,E);function Yi(){E.call(this,"c")}g(Yi,E);var Ye={},Nc=null;function gs(){return Nc=Nc||new At}Ye.Ia="serverreachability";function Oc(o){E.call(this,Ye.Ia,o)}g(Oc,E);function or(o){const u=gs();kt(u,new Oc(u))}Ye.STAT_EVENT="statevent";function Mc(o,u){E.call(this,Ye.STAT_EVENT,o),this.stat=u}g(Mc,E);function Vt(o){const u=gs();kt(u,new Mc(u,o))}Ye.Ja="timingevent";function Lc(o,u){E.call(this,Ye.Ja,o),this.size=u}g(Lc,E);function ar(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function cr(){this.g=!0}cr.prototype.ua=function(){this.g=!1};function _g(o,u,d,p,v,C){o.info(function(){if(o.g)if(C){var D="",q=C.split("&");for(let X=0;X<q.length;X++){var dt=q[X].split("=");if(dt.length>1){const yt=dt[0];dt=dt[1];const se=yt.split("_");D=se.length>=2&&se[1]=="type"?D+(yt+"="+dt+"&"):D+(yt+"=redacted&")}}}else D=null;else D=C;return"XMLHTTP REQ ("+p+") [attempt "+v+"]: "+u+`
`+d+`
`+D})}function yg(o,u,d,p,v,C,D){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+v+"]: "+u+`
`+d+`
`+C+" "+D})}function En(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Eg(o,d)+(p?" "+p:"")})}function Tg(o,u){o.info(function(){return"TIMEOUT: "+u})}cr.prototype.info=function(){};function Eg(o,u){if(!o.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var d=C[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var v=p[0];if(v!="noop"&&v!="stop"&&v!="close")for(let D=1;D<p.length;D++)p[D]=""}}}}return Ki(C)}catch{return u}}var ms={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},xc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fc;function Xi(){}g(Xi,Vc),Xi.prototype.g=function(){return new XMLHttpRequest},Fc=new Xi;function ur(o){return encodeURIComponent(String(o))}function Ig(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Ae(o,u,d,p){this.j=o,this.i=u,this.l=d,this.S=p||1,this.V=new sr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Uc}function Uc(){this.i=null,this.g="",this.h=!1}var Bc={},Zi={};function to(o,u,d){o.M=1,o.A=ys(re(u)),o.u=d,o.R=!0,jc(o,null)}function jc(o,u){o.F=Date.now(),_s(o),o.B=re(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),tu(d.i,"t",p),o.C=0,d=o.j.L,o.h=new Uc,o.g=yu(o.j,d?u:null,!o.u),o.P>0&&(o.O=new pg(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,p=o.ba;var v="readystatechange";Array.isArray(v)||(v&&(Pc[0]=v.toString()),v=Pc);for(let C=0;C<v.length;C++){const D=Ac(d,v[C],p||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=o.J?Ic(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),or(),_g(o.i,o.v,o.B,o.l,o.S,o.u)}Ae.prototype.ba=function(o){o=o.target;const u=this.O;u&&Se(o)==3?u.j():this.Y(o)},Ae.prototype.Y=function(o){try{if(o==this.g)t:{const q=Se(this.g),dt=this.g.ya(),X=this.g.ca();if(!(q<3)&&(q!=3||this.g&&(this.h.h||this.g.la()||au(this.g)))){this.K||q!=4||dt==7||(dt==8||X<=0?or(3):or(2)),eo(this);var u=this.g.ca();this.X=u;var d=wg(this);if(this.o=u==200,yg(this.i,this.v,this.B,this.l,this.S,q,u),this.o){if(this.U&&!this.L){e:{if(this.g){var p,v=this.g;if((p=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var C=p;break e}}C=null}if(o=C)En(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,no(this,o);else{this.o=!1,this.m=3,Vt(12),Xe(this),lr(this);break t}}if(this.R){o=!0;let yt;for(;!this.K&&this.C<d.length;)if(yt=vg(this,d),yt==Zi){q==4&&(this.m=4,Vt(14),o=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==Bc){this.m=4,Vt(15),En(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else En(this.i,this.l,yt,null),no(this,yt);if($c(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||d.length!=0||this.h.h||(this.m=1,Vt(16),o=!1),this.o=this.o&&o,!o)En(this.i,this.l,d,"[Invalid Chunked Response]"),Xe(this),lr(this);else if(d.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),lo(D),D.P=!0,Vt(11))}}else En(this.i,this.l,d,null),no(this,d);q==4&&Xe(this),this.o&&!this.K&&(q==4?pu(this.j,this):(this.o=!1,_s(this)))}else xg(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Vt(12)):(this.m=0,Vt(13)),Xe(this),lr(this)}}}catch{}finally{}};function wg(o){if(!$c(o))return o.g.la();const u=au(o.g);if(u==="")return"";let d="";const p=u.length,v=Se(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Xe(o),lr(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<p;C++)o.h.h=!0,d+=o.h.i.decode(u[C],{stream:!(v&&C==p-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function $c(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function vg(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Zi:(d=Number(u.substring(d,p)),isNaN(d)?Bc:(p+=1,p+d>u.length?Zi:(u=u.slice(p,p+d),o.C=p+d,u)))}Ae.prototype.cancel=function(){this.K=!0,Xe(this)};function _s(o){o.T=Date.now()+o.H,Hc(o,o.H)}function Hc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ar(h(o.aa,o),u)}function eo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ae.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Tg(this.i,this.B),this.M!=2&&(or(),Vt(17)),Xe(this),this.m=2,lr(this)):Hc(this,this.T-o)};function lr(o){o.j.I==0||o.K||pu(o.j,o)}function Xe(o){eo(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,kc(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function no(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||ro(d.h,o))){if(!o.L&&ro(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var v=p;if(v[0]==0){t:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)vs(d),Is(d);else break t;uo(d),Vt(18)}}else d.xa=v[1],0<d.xa-d.K&&v[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ar(h(d.Va,d),6e3));zc(d.h)<=1&&d.ta&&(d.ta=void 0)}else tn(d,11)}else if((o.L||d.g==o)&&vs(d),!y(u))for(v=d.Ba.g.parse(u),u=0;u<v.length;u++){let X=v[u];const yt=X[0];if(!(yt<=d.K))if(d.K=yt,X=X[1],d.I==2)if(X[0]=="c"){d.M=X[1],d.ba=X[2];const se=X[3];se!=null&&(d.ka=se,d.j.info("VER="+d.ka));const en=X[4];en!=null&&(d.za=en,d.j.info("SVER="+d.za));const Re=X[5];Re!=null&&typeof Re=="number"&&Re>0&&(p=1.5*Re,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Pe=o.g;if(Pe){const bs=Pe.g?Pe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var C=p.h;C.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(so(C,C.h),C.h=null))}if(p.G){const ho=Pe.g?Pe.g.getResponseHeader("X-HTTP-Session-Id"):null;ho&&(p.wa=ho,et(p.J,p.G,ho))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var D=o;if(p.na=_u(p,p.L?p.ba:null,p.W),D.L){Jc(p.h,D);var q=D,dt=p.O;dt&&(q.H=dt),q.D&&(eo(q),_s(q)),p.g=D}else du(p);d.i.length>0&&ws(d)}else X[0]!="stop"&&X[0]!="close"||tn(d,7);else d.I==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?tn(d,7):co(d):X[0]!="noop"&&d.l&&d.l.qa(X),d.A=0)}}or(4)}catch{}}var Ag=class{constructor(o,u){this.g=o,this.map=u}};function qc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Wc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function zc(o){return o.h?1:o.g?o.g.size:0}function ro(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function so(o,u){o.g?o.g.add(u):o.h=u}function Jc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}qc.prototype.cancel=function(){if(this.i=Gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Gc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return b(o.i)}var Kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bg(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let v,C=null;p>=0?(v=o[d].substring(0,p),C=o[d].substring(p+1)):v=o[d],u(v,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function be(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof be?(this.l=o.l,hr(this,o.j),this.o=o.o,this.g=o.g,dr(this,o.u),this.h=o.h,io(this,eu(o.i)),this.m=o.m):o&&(u=String(o).match(Kc))?(this.l=!1,hr(this,u[1]||"",!0),this.o=fr(u[2]||""),this.g=fr(u[3]||"",!0),dr(this,u[4]),this.h=fr(u[5]||"",!0),io(this,u[6]||"",!0),this.m=fr(u[7]||"")):(this.l=!1,this.i=new gr(null,this.l))}be.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(pr(u,Qc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(pr(u,Qc,!0),"@"),o.push(ur(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(pr(d,d.charAt(0)=="/"?Rg:Sg,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",pr(d,kg)),o.join("")},be.prototype.resolve=function(o){const u=re(this);let d=!!o.j;d?hr(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var p=o.h;if(d)dr(u,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var v=u.h.lastIndexOf("/");v!=-1&&(p=u.h.slice(0,v+1)+p)}if(v=p,v==".."||v==".")p="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){p=v.lastIndexOf("/",0)==0,v=v.split("/");const C=[];for(let D=0;D<v.length;){const q=v[D++];q=="."?p&&D==v.length&&C.push(""):q==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&D==v.length&&C.push("")):(C.push(q),p=!0)}p=C.join("/")}else p=v}return d?u.h=p:d=o.i.toString()!=="",d?io(u,eu(o.i)):d=!!o.m,d&&(u.m=o.m),u};function re(o){return new be(o)}function hr(o,u,d){o.j=d?fr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function dr(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function io(o,u,d){u instanceof gr?(o.i=u,Vg(o.i,o.l)):(d||(u=pr(u,Pg)),o.i=new gr(u,o.l))}function et(o,u,d){o.i.set(u,d)}function ys(o){return et(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function fr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function pr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Cg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Cg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Qc=/[#\/\?@]/g,Sg=/[#\?:]/g,Rg=/[#\?]/g,Pg=/[#\?@]/g,kg=/#/g;function gr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Ze(o){o.g||(o.g=new Map,o.h=0,o.i&&bg(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=gr.prototype,n.add=function(o,u){Ze(this),this.i=null,o=In(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Yc(o,u){Ze(o),u=In(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Xc(o,u){return Ze(o),u=In(o,u),o.g.has(u)}n.forEach=function(o,u){Ze(this),this.g.forEach(function(d,p){d.forEach(function(v){o.call(u,v,p,this)},this)},this)};function Zc(o,u){Ze(o);let d=[];if(typeof u=="string")Xc(o,u)&&(d=d.concat(o.g.get(In(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return Ze(this),this.i=null,o=In(this,o),Xc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Zc(this,o),o.length>0?String(o[0]):u):u};function tu(o,u,d){Yc(o,u),d.length>0&&(o.i=null,o.g.set(In(o,u),b(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const v=ur(d);d=Zc(this,d);for(let C=0;C<d.length;C++){let D=v;d[C]!==""&&(D+="="+ur(d[C])),o.push(D)}}return this.i=o.join("&")};function eu(o){const u=new gr;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function In(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Vg(o,u){u&&!o.j&&(Ze(o),o.i=null,o.g.forEach(function(d,p){const v=p.toLowerCase();p!=v&&(Yc(this,p),tu(this,v,d))},o)),o.j=u}function Dg(o,u){const d=new cr;if(a.Image){const p=new Image;p.onload=f(Ce,d,"TestLoadImage: loaded",!0,u,p),p.onerror=f(Ce,d,"TestLoadImage: error",!1,u,p),p.onabort=f(Ce,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=f(Ce,d,"TestLoadImage: timeout",!1,u,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Ng(o,u){const d=new cr,p=new AbortController,v=setTimeout(()=>{p.abort(),Ce(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(v),C.ok?Ce(d,"TestPingServer: ok",!0,u):Ce(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),Ce(d,"TestPingServer: error",!1,u)})}function Ce(o,u,d,p,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),p(d)}catch{}}function Og(){this.g=new mg}function oo(o){this.i=o.Sb||null,this.h=o.ab||!1}g(oo,Vc),oo.prototype.g=function(){return new Ts(this.i,this.h)};function Ts(o,u){At.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Ts,At),n=Ts.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,_r(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;nu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function nu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?mr(this):_r(this),this.readyState==3&&nu(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,mr(this))},n.Na=function(o){this.g&&(this.response=o,mr(this))},n.ga=function(){this.g&&mr(this)};function mr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,_r(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function _r(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ru(o){let u="";return ds(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function ao(o,u,d){t:{for(p in d){var p=!1;break t}p=!0}p||(d=ru(d),typeof o=="string"?d!=null&&ur(d):et(o,u,d))}function ot(o){At.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ot,At);var Mg=/^https?$/i,Lg=["POST","PUT"];n=ot.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fc.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){su(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var v in p)d.set(v,p[v]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),v=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Lg,u,void 0)>=0)||p||v||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,D]of d)this.g.setRequestHeader(C,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){su(this,C)}};function su(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,iu(o),Es(o)}function iu(o){o.A||(o.A=!0,kt(o,"complete"),kt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,kt(this,"complete"),kt(this,"abort"),Es(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Es(this,!0)),ot.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ou(this):this.Xa())},n.Xa=function(){ou(this)};function ou(o){if(o.h&&typeof i<"u"){if(o.v&&Se(o)==4)setTimeout(o.Ca.bind(o),0);else if(kt(o,"readystatechange"),Se(o)==4){o.h=!1;try{const C=o.ca();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var d;if(!(d=u)){var p;if(p=C===0){let D=String(o.D).match(Kc)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),p=!Mg.test(D?D.toLowerCase():"")}d=p}if(d)kt(o,"complete"),kt(o,"success");else{o.o=6;try{var v=Se(o)>2?o.g.statusText:""}catch{v=""}o.l=v+" ["+o.ca()+"]",iu(o)}}finally{Es(o)}}}}function Es(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||kt(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Se(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Se(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),gg(u)}};function au(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function xg(o){const u={};o=(o.g&&Se(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(y(o[p]))continue;var d=Ig(o[p]);const v=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[v]||[];u[v]=C,C.push(d)}ug(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function yr(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function cu(o){this.za=0,this.i=[],this.j=new cr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=yr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=yr("baseRetryDelayMs",5e3,o),this.Za=yr("retryDelaySeedMs",1e4,o),this.Ta=yr("forwardChannelMaxRetries",2,o),this.va=yr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new qc(o&&o.concurrentRequestLimit),this.Ba=new Og,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=cu.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,p){Vt(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=_u(this,null,this.W),ws(this)};function co(o){if(uu(o),o.I==3){var u=o.V++,d=re(o.J);if(et(d,"SID",o.M),et(d,"RID",u),et(d,"TYPE","terminate"),Tr(o,d),u=new Ae(o,o.j,u),u.M=2,u.A=ys(re(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=yu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),_s(u)}mu(o)}function Is(o){o.g&&(lo(o),o.g.cancel(),o.g=null)}function uu(o){Is(o),o.v&&(a.clearTimeout(o.v),o.v=null),vs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ws(o){if(!Wc(o.h)&&!o.m){o.m=!0;var u=o.Ea;Lt||_(),vt||(Lt(),vt=!0),I.add(u,o),o.D=0}}function Fg(o,u){return zc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ar(h(o.Ea,o,u),gu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const v=new Ae(this,this.j,o);let C=this.o;if(this.U&&(C?(C=Ic(C),vc(C,this.U)):C=this.U),this.u!==null||this.R||(v.J=C,C=null),this.S)t:{for(var u=0,d=0;d<this.i.length;d++){e:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break t}if(u===4096||d===this.i.length-1){u=d+1;break t}}u=1e3}else u=1e3;u=hu(this,v,u),d=re(this.J),et(d,"RID",o),et(d,"CVER",22),this.G&&et(d,"X-HTTP-Session-Id",this.G),Tr(this,d),C&&(this.R?u="headers="+ur(ru(C))+"&"+u:this.u&&ao(d,this.u,C)),so(this.h,v),this.Ra&&et(d,"TYPE","init"),this.S?(et(d,"$req",u),et(d,"SID","null"),v.U=!0,to(v,d,null)):to(v,d,u),this.I=2}}else this.I==3&&(o?lu(this,o):this.i.length==0||Wc(this.h)||lu(this))};function lu(o,u){var d;u?d=u.l:d=o.V++;const p=re(o.J);et(p,"SID",o.M),et(p,"RID",d),et(p,"AID",o.K),Tr(o,p),o.u&&o.o&&ao(p,o.u,o.o),d=new Ae(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=hu(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),so(o.h,d),to(d,p,u)}function Tr(o,u){o.H&&ds(o.H,function(d,p){et(u,p,d)}),o.l&&ds({},function(d,p){et(u,p,d)})}function hu(o,u,d){d=Math.min(o.i.length,d);const p=o.l?h(o.l.Ka,o.l,o):null;t:{var v=o.i;let q=-1;for(;;){const dt=["count="+d];q==-1?d>0?(q=v[0].g,dt.push("ofs="+q)):q=0:dt.push("ofs="+q);let X=!0;for(let yt=0;yt<d;yt++){var C=v[yt].g;const se=v[yt].map;if(C-=q,C<0)q=Math.max(0,v[yt].g-100),X=!1;else try{C="req"+C+"_"||"";try{var D=se instanceof Map?se:Object.entries(se);for(const[en,Re]of D){let Pe=Re;c(Re)&&(Pe=Ki(Re)),dt.push(C+en+"="+encodeURIComponent(Pe))}}catch(en){throw dt.push(C+"type="+encodeURIComponent("_badmap")),en}}catch{p&&p(se)}}if(X){D=dt.join("&");break t}}D=void 0}return o=o.i.splice(0,d),u.G=o,D}function du(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;Lt||_(),vt||(Lt(),vt=!0),I.add(u,o),o.A=0}}function uo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ar(h(o.Da,o),gu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,fu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ar(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Vt(10),Is(this),fu(this))};function lo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function fu(o){o.g=new Ae(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=re(o.na);et(u,"RID","rpc"),et(u,"SID",o.M),et(u,"AID",o.K),et(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&et(u,"TO",o.ia),et(u,"TYPE","xmlhttp"),Tr(o,u),o.u&&o.o&&ao(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=ys(re(u)),d.u=null,d.R=!0,jc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Is(this),uo(this),Vt(19))};function vs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function pu(o,u){var d=null;if(o.g==u){vs(o),lo(o),o.g=null;var p=2}else if(ro(o.h,u))d=u.G,Jc(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var v=o.D;p=gs(),kt(p,new Lc(p,d)),ws(o)}else du(o);else if(v=u.m,v==3||v==0&&u.X>0||!(p==1&&Fg(o,u)||p==2&&uo(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),v){case 1:tn(o,5);break;case 4:tn(o,10);break;case 3:tn(o,6);break;default:tn(o,2)}}}function gu(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function tn(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),p=o.Ua;const v=!p;p=new be(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||hr(p,"https"),ys(p),v?Dg(p.toString(),d):Ng(p.toString(),d)}else Vt(2);o.I=0,o.l&&o.l.pa(u),mu(o),uu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function mu(o){if(o.I=0,o.ja=[],o.l){const u=Gc(o.h);(u.length!=0||o.i.length!=0)&&(S(o.ja,u),S(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function _u(o,u,d){var p=d instanceof be?re(d):new be(d);if(p.g!="")u&&(p.g=u+"."+p.g),dr(p,p.u);else{var v=a.location;p=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;const C=new be(null);p&&hr(C,p),u&&(C.g=u),v&&dr(C,v),d&&(C.h=d),p=C}return d=o.G,u=o.wa,d&&u&&et(p,d,u),et(p,"VER",o.ka),Tr(o,p),p}function yu(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ot(new oo({ab:d})):new ot(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tu(){}n=Tu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function As(){}As.prototype.g=function(o,u){return new xt(o,u)};function xt(o,u){At.call(this),this.g=new cu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!y(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new wn(this)}g(xt,At),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){co(this.g)},xt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Ki(o),o=d);u.i.push(new Ag(u.Ya++,o)),u.I==3&&ws(u)},xt.prototype.N=function(){this.g.l=null,delete this.j,co(this.g),delete this.g,xt.Z.N.call(this)};function Eu(o){Qi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const d in u){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}g(Eu,Qi);function Iu(){Yi.call(this),this.status=1}g(Iu,Yi);function wn(o){this.g=o}g(wn,Tu),wn.prototype.ra=function(){kt(this.g,"a")},wn.prototype.qa=function(o){kt(this.g,new Eu(o))},wn.prototype.pa=function(o){kt(this.g,new Iu)},wn.prototype.oa=function(){kt(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Rf=function(){return new As},Sf=function(){return gs()},Cf=Ye,Ho={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,Fs=ms,xc.COMPLETE="complete",bf=xc,Dc.EventType=ir,ir.OPEN="a",ir.CLOSE="b",ir.ERROR="c",ir.MESSAGE="d",At.prototype.listen=At.prototype.J,Ir=Dc,ot.prototype.listenOnce=ot.prototype.K,ot.prototype.getLastError=ot.prototype.Ha,ot.prototype.getLastErrorCode=ot.prototype.ya,ot.prototype.getStatus=ot.prototype.ca,ot.prototype.getResponseJson=ot.prototype.La,ot.prototype.getResponseText=ot.prototype.la,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Fa,Af=ot}).apply(typeof Ps<"u"?Ps:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
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
 */let tr="12.8.0";function Mv(n){tr=n}/**
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
 */const hn=new Ra("@firebase/firestore");function vn(){return hn.logLevel}function N(n,...t){if(hn.logLevel<=W.DEBUG){const e=t.map($a);hn.debug(`Firestore (${tr}): ${n}`,...e)}}function Ie(n,...t){if(hn.logLevel<=W.ERROR){const e=t.map($a);hn.error(`Firestore (${tr}): ${n}`,...e)}}function Un(n,...t){if(hn.logLevel<=W.WARN){const e=t.map($a);hn.warn(`Firestore (${tr}): ${n}`,...e)}}function $a(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function F(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Pf(n,r,e)}function Pf(n,t,e){let r=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ie(r),new Error(r)}function Y(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Pf(t,s,r)}function $(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ve{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Be{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class kf{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Lv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ct.UNAUTHENTICATED)))}shutdown(){}}class xv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Fv{constructor(t){this.t=t,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let i=new Be;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Be,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;t.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Be)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new kf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string",2055,{h:t}),new Ct(t)}}class Uv{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Bv{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Uv(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Ct.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jv{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$t(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0,3512);const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>r(i)))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fl(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Y(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new fl(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $v(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Ha{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=$v(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function qo(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return Ao(s)===Ao(i)?z(s,i):Ao(s)?1:-1}return z(n.length,t.length)}const Hv=55296,qv=57343;function Ao(n){const t=n.charCodeAt(0);return t>=Hv&&t<=qv}function Bn(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
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
 */const pl="__name__";class ie{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&F(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ie.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ie?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=ie.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return z(t.length,e.length)}static compareSegments(t,e){const r=ie.isNumericId(t),s=ie.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?ie.extractNumericId(t).compare(ie.extractNumericId(e)):qo(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ue.fromString(t.substring(4,t.length-2))}}class rt extends ie{construct(t,e,r){return new rt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new rt(e)}static emptyPath(){return new rt([])}}const Wv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends ie{construct(t,e,r){return new It(t,e,r)}static isValidIdentifier(t){return Wv.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pl}static keyField(){return new It([pl])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new It(e)}static emptyPath(){return new It([])}}/**
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
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(rt.fromString(t))}static fromName(t){return new L(rt.fromString(t).popFirst(5))}static empty(){return new L(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return rt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new rt(t.slice()))}}/**
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
 */function zv(n,t,e){if(!e)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Jv(n,t,e,r){if(t===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function gl(n){if(!L.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Vf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function qa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function je(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=qa(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function ht(n,t){const e={typeString:n};return t&&(e.value=t),e}function os(n,t){if(!Vf(n))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new O(P.INVALID_ARGUMENT,e);return!0}/**
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
 */const ml=-62135596800,_l=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*_l);return new nt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ml)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_l}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(os(t,nt._jsonSchema))return new nt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ml;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:ht("string",nt._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
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
 */class j{static fromTimestamp(t){return new j(t)}static min(){return new j(new nt(0,0))}static max(){return new j(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fr=-1;function Gv(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=j.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new qe(s,L.empty(),t)}function Kv(n){return new qe(n.readTime,n.key,Fr)}class qe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new qe(j.min(),L.empty(),Fr)}static max(){return new qe(j.max(),L.empty(),Fr)}}function Qv(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
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
 */const Yv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function er(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Yv)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,r)=>{e(t)}))}static reject(t){return new R(((e,r)=>{r(t)}))}static waitFor(t){return new R(((e,r)=>{let s=0,i=0,a=!1;t.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&e()}),(l=>r(l)))})),a=!0,i===s&&e()}))}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next((s=>s?R.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,i)=>{r.push(e.call(this,s,i))})),this.waitFor(r)}static mapArray(t,e){return new R(((r,s)=>{const i=t.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;e(t[h]).next((f=>{a[h]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(t,e){return new R(((r,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):r()};i()}))}}function Zv(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function nr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ri{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ri.ce=-1;/**
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
 */const Wa=-1;function Pi(n){return n==null}function oi(n){return n===0&&1/n==-1/0}function tA(n){return typeof n=="number"&&Number.isInteger(n)&&!oi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Df="";function eA(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=yl(t)),t=nA(n.get(e),t);return yl(t)}function nA(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":e+="";break;case Df:e+="";break;default:e+=i}}return e}function yl(n){return n+Df+""}/**
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
 */function Tl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function mn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Nf(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class it{constructor(t,e){this.comparator=t,this.root=e||Et.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ks(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ks(this.root,t,this.comparator,!1)}getReverseIterator(){return new ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ks(this.root,t,this.comparator,!0)}}class ks{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Et{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??Et.RED,this.left=s??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new Et(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _t{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new El(this.data.getIterator())}getIteratorFrom(t){return new El(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof _t)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new _t(this.comparator);return e.data=t,e}}class El{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yt{constructor(t){this.fields=t,t.sort(It.comparator)}static empty(){return new Yt([])}unionWith(t){let e=new _t(It.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Yt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Bn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Of extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Of("Invalid base64 string: "+i):i}})(t);return new wt(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const rA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function We(n){if(Y(!!n,39018),typeof n=="string"){let t=0;const e=rA.exec(n);if(Y(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ze(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}/**
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
 */const Mf="server_timestamp",Lf="__type__",xf="__previous_value__",Ff="__local_write_time__";function za(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Lf])==null?void 0:r.stringValue)===Mf}function ki(n){const t=n.mapValue.fields[xf];return za(t)?ki(t):t}function Ur(n){const t=We(n.mapValue.fields[Ff].timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class sA{constructor(t,e,r,s,i,a,c,l,h,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=g}}const ai="(default)";class Br{constructor(t,e){this.projectId=t,this.database=e||ai}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database===ai}isEqual(t){return t instanceof Br&&t.projectId===this.projectId&&t.database===this.database}}function iA(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(n.options.projectId,t)}/**
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
 */const Uf="__type__",oA="__max__",Vs={mapValue:{}},Bf="__vector__",ci="value";function Je(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?za(n)?4:cA(n)?9007199254740991:aA(n)?10:11:F(28295,{value:n})}function de(n,t){if(n===t)return!0;const e=Je(n);if(e!==Je(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ur(n).isEqual(Ur(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=We(s.timestampValue),c=We(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,i){return ze(s.bytesValue).isEqual(ze(i.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)})(n,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=at(s.doubleValue),c=at(i.doubleValue);return a===c?oi(a)===oi(c):isNaN(a)&&isNaN(c)}return!1})(n,t);case 9:return Bn(n.arrayValue.values||[],t.arrayValue.values||[],de);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Tl(a)!==Tl(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!de(a[l],c[l])))return!1;return!0})(n,t);default:return F(52216,{left:n})}}function jr(n,t){return(n.values||[]).find((e=>de(e,t)))!==void 0}function jn(n,t){if(n===t)return 0;const e=Je(n),r=Je(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return(function(i,a){const c=at(i.integerValue||i.doubleValue),l=at(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,t);case 3:return Il(n.timestampValue,t.timestampValue);case 4:return Il(Ur(n),Ur(t));case 5:return qo(n.stringValue,t.stringValue);case 6:return(function(i,a){const c=ze(i),l=ze(a);return c.compareTo(l)})(n.bytesValue,t.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=z(c[h],l[h]);if(f!==0)return f}return z(c.length,l.length)})(n.referenceValue,t.referenceValue);case 8:return(function(i,a){const c=z(at(i.latitude),at(a.latitude));return c!==0?c:z(at(i.longitude),at(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return wl(n.arrayValue,t.arrayValue);case 10:return(function(i,a){var m,b,S,k;const c=i.fields||{},l=a.fields||{},h=(m=c[ci])==null?void 0:m.arrayValue,f=(b=l[ci])==null?void 0:b.arrayValue,g=z(((S=h==null?void 0:h.values)==null?void 0:S.length)||0,((k=f==null?void 0:f.values)==null?void 0:k.length)||0);return g!==0?g:wl(h,f)})(n.mapValue,t.mapValue);case 11:return(function(i,a){if(i===Vs.mapValue&&a===Vs.mapValue)return 0;if(i===Vs.mapValue)return 1;if(a===Vs.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const m=qo(l[g],f[g]);if(m!==0)return m;const b=jn(c[l[g]],h[f[g]]);if(b!==0)return b}return z(l.length,f.length)})(n.mapValue,t.mapValue);default:throw F(23264,{he:e})}}function Il(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=We(n),r=We(t),s=z(e.seconds,r.seconds);return s!==0?s:z(e.nanos,r.nanos)}function wl(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=jn(e[s],r[s]);if(i)return i}return z(e.length,r.length)}function $n(n){return Wo(n)}function Wo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=We(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ze(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return L.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=Wo(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Wo(e.fields[a])}`;return s+"}"})(n.mapValue):F(61005,{value:n})}function Us(n){switch(Je(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ki(n);return t?16+Us(t):16;case 5:return 2*n.stringValue.length;case 6:return ze(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Us(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return mn(r.fields,((i,a)=>{s+=i.length+Us(a)})),s})(n.mapValue);default:throw F(13486,{value:n})}}function zo(n){return!!n&&"integerValue"in n}function Ja(n){return!!n&&"arrayValue"in n}function vl(n){return!!n&&"nullValue"in n}function Al(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bs(n){return!!n&&"mapValue"in n}function aA(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Uf])==null?void 0:r.stringValue)===Bf}function Rr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return mn(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Rr(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Rr(n.arrayValue.values[e]);return t}return{...n}}function cA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===oA}/**
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
 */class Ht{constructor(t){this.value=t}static empty(){return new Ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Bs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Rr(e)}setAll(t){let e=It.emptyPath(),r={},s=[];t.forEach(((a,c)=>{if(!e.isImmediateParentOf(c)){const l=this.getFieldsMap(e);this.applyChanges(l,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=Rr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Bs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return de(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Bs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){mn(e,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new Ht(Rr(this.value))}}function jf(n){const t=[];return mn(n.fields,((e,r)=>{const s=new It([e]);if(Bs(r)){const i=jf(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new Yt(t)}/**
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
 */class St{constructor(t,e,r,s,i,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new St(t,0,j.min(),j.min(),j.min(),Ht.empty(),0)}static newFoundDocument(t,e,r,s){return new St(t,1,e,j.min(),r,s,0)}static newNoDocument(t,e){return new St(t,2,e,j.min(),j.min(),Ht.empty(),0)}static newUnknownDocument(t,e){return new St(t,3,e,j.min(),j.min(),Ht.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ui{constructor(t,e){this.position=t,this.inclusive=e}}function bl(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],a=n.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),e.key):r=jn(a,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!de(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class li{constructor(t,e="asc"){this.field=t,this.dir=e}}function uA(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class $f{}class pt extends $f{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new hA(t,e,r):e==="array-contains"?new pA(t,r):e==="in"?new gA(t,r):e==="not-in"?new mA(t,r):e==="array-contains-any"?new _A(t,r):new pt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new dA(t,r):new fA(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(jn(e,this.value)):e!==null&&Je(this.value)===Je(e)&&this.matchesComparison(jn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fe extends $f{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new fe(t,e)}matches(t){return Hf(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Hf(n){return n.op==="and"}function qf(n){return lA(n)&&Hf(n)}function lA(n){for(const t of n.filters)if(t instanceof fe)return!1;return!0}function Jo(n){if(n instanceof pt)return n.field.canonicalString()+n.op.toString()+$n(n.value);if(qf(n))return n.filters.map((t=>Jo(t))).join(",");{const t=n.filters.map((e=>Jo(e))).join(",");return`${n.op}(${t})`}}function Wf(n,t){return n instanceof pt?(function(r,s){return s instanceof pt&&r.op===s.op&&r.field.isEqual(s.field)&&de(r.value,s.value)})(n,t):n instanceof fe?(function(r,s){return s instanceof fe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Wf(a,s.filters[c])),!0):!1})(n,t):void F(19439)}function zf(n){return n instanceof pt?(function(e){return`${e.field.canonicalString()} ${e.op} ${$n(e.value)}`})(n):n instanceof fe?(function(e){return e.op.toString()+" {"+e.getFilters().map(zf).join(" ,")+"}"})(n):"Filter"}class hA extends pt{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class dA extends pt{constructor(t,e){super(t,"in",e),this.keys=Jf("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class fA extends pt{constructor(t,e){super(t,"not-in",e),this.keys=Jf("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Jf(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>L.fromName(r.referenceValue)))}class pA extends pt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ja(e)&&jr(e.arrayValue,this.value)}}class gA extends pt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&jr(this.value.arrayValue,e)}}class mA extends pt{constructor(t,e){super(t,"not-in",e)}matches(t){if(jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!jr(this.value.arrayValue,e)}}class _A extends pt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ja(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>jr(this.value.arrayValue,r)))}}/**
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
 */class yA{constructor(t,e=null,r=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Sl(n,t=null,e=[],r=[],s=null,i=null,a=null){return new yA(n,t,e,r,s,i,a)}function Ga(n){const t=$(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Jo(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Pi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>$n(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>$n(r))).join(",")),t.Te=e}return t.Te}function Ka(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!uA(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Wf(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Cl(n.startAt,t.startAt)&&Cl(n.endAt,t.endAt)}function Go(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Vi{constructor(t,e=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function TA(n,t,e,r,s,i,a,c){return new Vi(n,t,e,r,s,i,a,c)}function Di(n){return new Vi(n)}function Rl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function EA(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function IA(n){return n.collectionGroup!==null}function Pr(n){const t=$(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new _t(It.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new li(i,r))})),e.has(It.keyField().canonicalString())||t.Ie.push(new li(It.keyField(),r))}return t.Ie}function ae(n){const t=$(n);return t.Ee||(t.Ee=wA(t,Pr(n))),t.Ee}function wA(n,t){if(n.limitType==="F")return Sl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new li(s.field,i)}));const e=n.endAt?new ui(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ui(n.startAt.position,n.startAt.inclusive):null;return Sl(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ko(n,t,e){return new Vi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ni(n,t){return Ka(ae(n),ae(t))&&n.limitType===t.limitType}function Gf(n){return`${Ga(ae(n))}|lt:${n.limitType}`}function An(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>zf(s))).join(", ")}]`),Pi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>$n(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>$n(s))).join(",")),`Target(${r})`})(ae(n))}; limitType=${n.limitType})`}function Oi(n,t){return t.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):L.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,t)&&(function(r,s){for(const i of Pr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=bl(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,Pr(r),s)||r.endAt&&!(function(a,c,l){const h=bl(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,Pr(r),s))})(n,t)}function vA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kf(n){return(t,e)=>{let r=!1;for(const s of Pr(n)){const i=AA(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function AA(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?jn(l,h):F(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
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
 */class _n{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){mn(this.inner,((e,r)=>{for(const[s,i]of r)t(s,i)}))}isEmpty(){return Nf(this.inner)}size(){return this.innerSize}}/**
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
 */const bA=new it(L.comparator);function we(){return bA}const Qf=new it(L.comparator);function wr(...n){let t=Qf;for(const e of n)t=t.insert(e.key,e);return t}function Yf(n){let t=Qf;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function sn(){return kr()}function Xf(){return kr()}function kr(){return new _n((n=>n.toString()),((n,t)=>n.isEqual(t)))}const CA=new it(L.comparator),SA=new _t(L.comparator);function G(...n){let t=SA;for(const e of n)t=t.add(e);return t}const RA=new _t(z);function PA(){return RA}/**
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
 */function Qa(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oi(t)?"-0":t}}function Zf(n){return{integerValue:""+n}}function kA(n,t){return tA(t)?Zf(t):Qa(n,t)}/**
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
 */class Mi{constructor(){this._=void 0}}function VA(n,t,e){return n instanceof $r?(function(s,i){const a={fields:{[Lf]:{stringValue:Mf},[Ff]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&za(i)&&(i=ki(i)),i&&(a.fields[xf]=i),{mapValue:a}})(e,t):n instanceof Hr?ep(n,t):n instanceof qr?np(n,t):(function(s,i){const a=tp(s,i),c=Pl(a)+Pl(s.Ae);return zo(a)&&zo(s.Ae)?Zf(c):Qa(s.serializer,c)})(n,t)}function DA(n,t,e){return n instanceof Hr?ep(n,t):n instanceof qr?np(n,t):e}function tp(n,t){return n instanceof hi?(function(r){return zo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(t)?t:{integerValue:0}:null}class $r extends Mi{}class Hr extends Mi{constructor(t){super(),this.elements=t}}function ep(n,t){const e=rp(t);for(const r of n.elements)e.some((s=>de(s,r)))||e.push(r);return{arrayValue:{values:e}}}class qr extends Mi{constructor(t){super(),this.elements=t}}function np(n,t){let e=rp(t);for(const r of n.elements)e=e.filter((s=>!de(s,r)));return{arrayValue:{values:e}}}class hi extends Mi{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Pl(n){return at(n.integerValue||n.doubleValue)}function rp(n){return Ja(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class NA{constructor(t,e){this.field=t,this.transform=e}}function OA(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof Hr&&s instanceof Hr||r instanceof qr&&s instanceof qr?Bn(r.elements,s.elements,de):r instanceof hi&&s instanceof hi?de(r.Ae,s.Ae):r instanceof $r&&s instanceof $r})(n.transform,t.transform)}class MA{constructor(t,e){this.version=t,this.transformResults=e}}class _e{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _e}static exists(t){return new _e(void 0,t)}static updateTime(t){return new _e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function js(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Li{}function sp(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new op(n.key,_e.none()):new as(n.key,n.data,_e.none());{const e=n.data,r=Ht.empty();let s=new _t(It.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new yn(n.key,r,new Yt(s.toArray()),_e.none())}}function LA(n,t,e){n instanceof as?(function(s,i,a){const c=s.value.clone(),l=Vl(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,t,e):n instanceof yn?(function(s,i,a){if(!js(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Vl(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(ip(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Vr(n,t,e,r){return n instanceof as?(function(i,a,c,l){if(!js(i.precondition,a))return c;const h=i.value.clone(),f=Dl(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,t,e,r):n instanceof yn?(function(i,a,c,l){if(!js(i.precondition,a))return c;const h=Dl(i.fieldTransforms,l,a),f=a.data;return f.setAll(ip(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,t,e,r):(function(i,a,c){return js(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,t,e)}function xA(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=tp(r.transform,s||null);i!=null&&(e===null&&(e=Ht.empty()),e.set(r.field,i))}return e||null}function kl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bn(r,s,((i,a)=>OA(i,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class as extends Li{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yn extends Li{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ip(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Vl(n,t,e){const r=new Map;Y(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const i=n[s],a=i.transform,c=t.data.field(i.field);r.set(i.field,DA(a,c,e[s]))}return r}function Dl(n,t,e){const r=new Map;for(const s of n){const i=s.transform,a=e.data.field(s.field);r.set(s.field,VA(i,a,t))}return r}class op extends Li{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FA extends Li{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class UA{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&LA(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Vr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Vr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Xf();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=e.has(s.key)?null:c;const l=sp(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(j.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),G())}isEqual(t){return this.batchId===t.batchId&&Bn(this.mutations,t.mutations,((e,r)=>kl(e,r)))&&Bn(this.baseMutations,t.baseMutations,((e,r)=>kl(e,r)))}}class Ya{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Y(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return CA})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ya(t,e,r,s)}}/**
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
 */class BA{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class jA{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ut,K;function $A(n){switch(n){case P.OK:return F(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function ap(n){if(n===void 0)return Ie("GRPC error has no .code"),P.UNKNOWN;switch(n){case ut.OK:return P.OK;case ut.CANCELLED:return P.CANCELLED;case ut.UNKNOWN:return P.UNKNOWN;case ut.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ut.INTERNAL:return P.INTERNAL;case ut.UNAVAILABLE:return P.UNAVAILABLE;case ut.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ut.NOT_FOUND:return P.NOT_FOUND;case ut.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ut.ABORTED:return P.ABORTED;case ut.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ut.DATA_LOSS:return P.DATA_LOSS;default:return F(39323,{code:n})}}(K=ut||(ut={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function HA(){return new TextEncoder}/**
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
 */const qA=new Ue([4294967295,4294967295],0);function Nl(n){const t=HA().encode(n),e=new vf;return e.update(t),new Uint8Array(e.digest())}function Ol(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ue([e,r],0),new Ue([s,i],0)]}class Xa{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new vr(`Invalid padding: ${e}`);if(r<0)throw new vr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new vr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new vr(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Ue.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(Ue.fromNumber(r)));return s.compare(qA)===1&&(s=new Ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Nl(t),[r,s]=Ol(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Xa(i,s,e);return r.forEach((c=>a.insert(c))),a}insert(t){if(this.ge===0)return;const e=Nl(t),[r,s]=Ol(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.be(a)}}be(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xi{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,cs.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new xi(j.min(),s,new it(z),we(),G())}}class cs{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new cs(r,e,G(),G(),G())}}/**
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
 */class $s{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.De=s}}class cp{constructor(t,e){this.targetId=t,this.Ce=e}}class up{constructor(t,e,r=wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ml{constructor(){this.ve=0,this.Fe=Ll(),this.Me=wt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=G(),e=G(),r=G();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:i})}})),new cs(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=Ll()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,Y(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class WA{constructor(t){this.Ge=t,this.ze=new Map,this.je=we(),this.He=Ds(),this.Je=Ds(),this.Ze=new it(z)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:F(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(Go(i))if(r===0){const a=new L(i.path);this.et(e,a,St.newNoDocument(a,j.min()))}else Y(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const c=this.ut(t),l=c?this.ct(c,t,a):1;if(l!==0){this.it(e);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,h)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let a,c;try{a=ze(r).toUint8Array()}catch(l){if(l instanceof Of)return Un("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Xa(a,s,i)}catch(l){return Un(l instanceof vr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(e,i,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Go(c.target)){const l=new L(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,St.newNoDocument(l,t))}i.Be&&(e.set(a,i.ke()),i.Ke())}}));let r=G();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(t)));const s=new xi(t,e,this.Ze,this.je,r);return this.je=we(),this.He=Ds(),this.Je=Ds(),this.Ze=new it(z),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Ml,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new _t(z),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new _t(z),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ml),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Ds(){return new it(L.comparator)}function Ll(){return new it(L.comparator)}const zA={asc:"ASCENDING",desc:"DESCENDING"},JA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GA={and:"AND",or:"OR"};class KA{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Qo(n,t){return n.useProto3Json||Pi(t)?t:{value:t}}function di(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lp(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function QA(n,t){return di(n,t.toTimestamp())}function ce(n){return Y(!!n,49232),j.fromTimestamp((function(e){const r=We(e);return new nt(r.seconds,r.nanos)})(n))}function Za(n,t){return Yo(n,t).canonicalString()}function Yo(n,t){const e=(function(s){return new rt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function hp(n){const t=rt.fromString(n);return Y(mp(t),10190,{key:t.toString()}),t}function Xo(n,t){return Za(n.databaseId,t.path)}function bo(n,t){const e=hp(t);if(e.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new L(fp(e))}function dp(n,t){return Za(n.databaseId,t)}function YA(n){const t=hp(n);return t.length===4?rt.emptyPath():fp(t)}function Zo(n){return new rt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fp(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function xl(n,t,e){return{name:Xo(n,t),fields:e.value.mapValue.fields}}function XA(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(Y(f===void 0||typeof f=="string",58123),wt.fromBase64String(f||"")):(Y(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),wt.fromUint8Array(f||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(h){const f=h.code===void 0?P.UNKNOWN:ap(h.code);return new O(f,h.message||"")})(a);e=new up(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=bo(n,r.document.name),i=ce(r.document.updateTime),a=r.document.createTime?ce(r.document.createTime):j.min(),c=new Ht({mapValue:{fields:r.document.fields}}),l=St.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];e=new $s(h,f,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=bo(n,r.document),i=r.readTime?ce(r.readTime):j.min(),a=St.newNoDocument(s,i),c=r.removedTargetIds||[];e=new $s([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=bo(n,r.document),i=r.removedTargetIds||[];e=new $s([],i,s,null)}else{if(!("filter"in t))return F(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new jA(s,i),c=r.targetId;e=new cp(c,a)}}return e}function ZA(n,t){let e;if(t instanceof as)e={update:xl(n,t.key,t.value)};else if(t instanceof op)e={delete:Xo(n,t.key)};else if(t instanceof yn)e={update:xl(n,t.key,t.data),updateMask:cb(t.fieldMask)};else{if(!(t instanceof FA))return F(16599,{dt:t.type});e={verify:Xo(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof $r)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Hr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof qr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof hi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw F(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:QA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)})(n,t.precondition)),e}function tb(n,t){return n&&n.length>0?(Y(t!==void 0,14353),n.map((e=>(function(s,i){let a=s.updateTime?ce(s.updateTime):ce(i);return a.isEqual(j.min())&&(a=ce(i)),new MA(a,s.transformResults||[])})(e,t)))):[]}function eb(n,t){return{documents:[dp(n,t.path)]}}function nb(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=dp(n,s);const i=(function(h){if(h.length!==0)return gp(fe.create(h,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:bn(m.field),direction:ib(m.dir)}})(f)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Qo(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(t.endAt)),{ft:e,parent:s}}function rb(n){let t=YA(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Y(r===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=(function(g){const m=pp(g);return m instanceof fe&&qf(m)?m.getFilters():[m]})(e.where));let a=[];e.orderBy&&(a=(function(g){return g.map((m=>(function(S){return new li(Cn(S.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(e.orderBy));let c=null;e.limit&&(c=(function(g){let m;return m=typeof g=="object"?g.value:g,Pi(m)?null:m})(e.limit));let l=null;e.startAt&&(l=(function(g){const m=!!g.before,b=g.values||[];return new ui(b,m)})(e.startAt));let h=null;return e.endAt&&(h=(function(g){const m=!g.before,b=g.values||[];return new ui(b,m)})(e.endAt)),TA(t,s,a,i,c,"F",l,h)}function sb(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function pp(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Cn(e.unaryFilter.field);return pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Cn(e.unaryFilter.field);return pt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cn(e.unaryFilter.field);return pt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Cn(e.unaryFilter.field);return pt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(n):n.fieldFilter!==void 0?(function(e){return pt.create(Cn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return fe.create(e.compositeFilter.filters.map((r=>pp(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(e.compositeFilter.op))})(n):F(30097,{filter:n})}function ib(n){return zA[n]}function ob(n){return JA[n]}function ab(n){return GA[n]}function bn(n){return{fieldPath:n.canonicalString()}}function Cn(n){return It.fromServerFormat(n.fieldPath)}function gp(n){return n instanceof pt?(function(e){if(e.op==="=="){if(Al(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NAN"}};if(vl(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Al(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NAN"}};if(vl(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(e.field),op:ob(e.op),value:e.value}}})(n):n instanceof fe?(function(e){const r=e.getFilters().map((s=>gp(s)));return r.length===1?r[0]:{compositeFilter:{op:ab(e.op),filters:r}}})(n):F(54877,{filter:n})}function cb(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function mp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function _p(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Oe{constructor(t,e,r,s,i=j.min(),a=j.min(),c=wt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(t){return new Oe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class ub{constructor(t){this.yt=t}}function lb(n){const t=rb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ko(t,t.limit,"L"):t}/**
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
 */class hb{constructor(){this.Sn=new db}addToCollectionParentIndex(t,e){return this.Sn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(qe.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(qe.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class db{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new _t(rt.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new _t(rt.comparator)).toArray()}}/**
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
 */const Fl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yp=41943040;class Nt{static withCacheSize(t){return new Nt(t,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(yp,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */class Hn{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Hn(0)}static ar(){return new Hn(-1)}}/**
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
 */const Ul="LruGarbageCollector",fb=1048576;function Bl([n,t],[e,r]){const s=z(n,e);return s===0?z(t,r):s}class pb{constructor(t){this.Pr=t,this.buffer=new _t(Bl),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Bl(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class gb{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){N(Ul,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){nr(e)?N(Ul,"Ignoring IndexedDB error during garbage collection: ",e):await er(e)}await this.Ar(3e5)}))}}class mb{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(Ri.ce);const r=new pb(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Fl)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fl):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(t,r,e)))).next((g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(t,r)))).next((g=>(h=Date.now(),vn()<=W.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function _b(n,t){return new mb(n,t)}/**
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
 */class yb{constructor(){this.changes=new _n((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,St.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Tb{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Eb{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Vr(r.mutation,s,Yt.empty(),nt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,G()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=G()){const s=sn();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((i=>{let a=wr();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=sn();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,G())))}populateOverlays(t,e,r){const s=[];return r.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,c)=>{e.set(a,c)}))}))}computeViews(t,e,r,s){let i=we();const a=kr(),c=(function(){return kr()})();return e.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof yn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Vr(f.mutation,h,f.mutation.getFieldMask(),nt.now())):a.set(h.key,Yt.empty())})),this.recalculateAndSaveOverlays(t,i).next((l=>(l.forEach(((h,f)=>a.set(h,f))),e.forEach(((h,f)=>c.set(h,new Tb(f,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(t,e){const r=kr();let s=new it(((a,c)=>a-c)),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=e.get(l);if(h===null)return;let f=r.get(l)||Yt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const g=(s.get(c.batchId)||G()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,g=Xf();f.forEach((m=>{if(!i.has(m)){const b=sp(e.get(m),r.get(m));b!==null&&g.set(m,b),i=i.add(m)}})),a.push(this.documentOverlayCache.saveOverlays(t,h,g))}return R.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return EA(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):IA(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):R.resolve(sn());let c=Fr,l=i;return a.next((h=>R.forEach(h,((f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(t,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(t,h,i))).next((()=>this.computeViews(t,l,h,G()))).next((f=>({batchId:c,changes:Yf(f)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next((r=>{let s=wr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let a=wr();return this.indexManager.getCollectionParents(t,i).next((c=>R.forEach(c,(l=>{const h=(function(g,m){return new Vi(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next((f=>{f.forEach(((g,m)=>{a=a.insert(g,m)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,St.newInvalidDocument(f)))}));let c=wr();return a.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&Vr(f.mutation,h,Yt.empty(),nt.now()),Oi(e,h)&&(c=c.insert(l,h))})),c}))}}/**
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
 */class Ib{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return R.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:ce(s.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(s){return{name:s.name,query:lb(s.bundledQuery),readTime:ce(s.readTime)}})(e)),R.resolve()}}/**
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
 */class wb{constructor(){this.overlays=new it(L.comparator),this.Lr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=sn();return R.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,i)=>{this.bt(t,e,i)})),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=sn(),i=e.length+1,a=new L(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new it(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=sn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=sn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return R.resolve(c)}bt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new BA(e,r));let i=this.Lr.get(e);i===void 0&&(i=G(),this.Lr.set(e,i)),this.Lr.set(e,i.add(r.key))}}/**
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
 */class vb{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class tc{constructor(){this.kr=new _t(Tt.Kr),this.qr=new _t(Tt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new Tt(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new Tt(t,e))}Qr(t,e){t.forEach((r=>this.removeReference(r,e)))}Gr(t){const e=new L(new rt([])),r=new Tt(e,t),s=new Tt(e,t+1),i=[];return this.qr.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new L(new rt([])),r=new Tt(e,t),s=new Tt(e,t+1);let i=G();return this.qr.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new Tt(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Tt{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return L.comparator(t.key,e.key)||z(t.Hr,e.Hr)}static Ur(t,e){return z(t.Hr,e.Hr)||L.comparator(t.key,e.key)}}/**
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
 */class Ab{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new _t(Tt.Kr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new UA(i,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Jr=this.Jr.add(new Tt(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Wa:this.Yn-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Tt(e,0),s=new Tt(e,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new _t(z);return e.forEach((s=>{const i=new Tt(s,0),a=new Tt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const a=new Tt(new L(i),0);let c=new _t(z);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),R.resolve(this.Yr(c))}Yr(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){Y(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return R.forEach(e.mutations,(s=>{const i=new Tt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Jr=r}))}nr(t){}containsKey(t,e){const r=new Tt(e,0),s=this.Jr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class bb{constructor(t){this.ti=t,this.docs=(function(){return new it(L.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():St.newInvalidDocument(e))}getEntries(t,e){let r=we();return e.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=we();const a=e.path,c=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Qv(Kv(f),r)<=0||(s.has(f.key)||Oi(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(t,e,r,s){F(9500)}ni(t,e){return R.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Cb(this)}getSize(t){return R.resolve(this.size)}}class Cb extends yb{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)})),R.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class Sb{constructor(t){this.persistence=t,this.ri=new _n((e=>Ga(e)),Ka),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.ii=0,this.si=new tc,this.targetCount=0,this.oi=Hn._r()}forEachTarget(t,e){return this.ri.forEach(((r,s)=>e(s))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),R.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Hn(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.lr(e),R.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),R.waitFor(i).next((()=>s))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),R.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.si.containsKey(e))}}/**
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
 */class Tp{constructor(t,e){this._i={},this.overlays={},this.ai=new Ri(0),this.ui=!1,this.ui=!0,this.ci=new vb,this.referenceDelegate=t(this),this.li=new Sb(this),this.indexManager=new hb,this.remoteDocumentCache=(function(s){return new bb(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new ub(e),this.Pi=new Ib(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new wb,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Ab(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new Rb(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(t,e){return R.or(Object.values(this._i).map((r=>()=>r.containsKey(t,e))))}}class Rb extends Xv{constructor(t){super(),this.currentSequenceNumber=t}}class ec{constructor(t){this.persistence=t,this.Ri=new tc,this.Ai=null}static Vi(t){return new ec(t)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,(r=>{const s=L.fromPath(r);return this.mi(t,s).next((i=>{i||e.removeEntry(s,j.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class fi{constructor(t,e){this.persistence=t,this.fi=new _n((r=>eA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=_b(this,e)}static Vi(t,e){return new fi(t,e)}Ti(){}Ii(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}pr(t){let e=0;return this.mr(t,(r=>{e++})).next((()=>e))}mr(t,e){return R.forEach(this.fi,((r,s)=>this.wr(t,r,s).next((i=>i?R.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(t,(a=>this.wr(t,a,e).next((c=>{c||(r++,i.removeEntry(a,j.min()))})))).next((()=>i.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),R.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Us(t.data.value)),e}wr(t,e,r){return R.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class nc{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=G(),s=G();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nc(t,e.fromCache,r,s)}}/**
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
 */class Pb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class kb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return gE()?8:Zv(Pt())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.gs(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ps(t,e,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Pb;return this.ys(t,e,a).next((c=>{if(i.result=c,this.As)return this.ws(t,e,a,c.size)}))})).next((()=>i.result))}ws(t,e,r,s){return r.documentReadCount<this.Vs?(vn()<=W.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",An(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(vn()<=W.DEBUG&&N("QueryEngine","Query:",An(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(vn()<=W.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",An(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ae(e))):R.resolve())}gs(t,e){if(Rl(e))return R.resolve(null);let r=ae(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Ko(e,null,"F"),r=ae(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((i=>{const a=G(...i);return this.fs.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,r).next((l=>{const h=this.bs(e,c);return this.Ss(e,h,a,l.readTime)?this.gs(t,Ko(e,null,"F")):this.Ds(t,h,e,l)}))))})))))}ps(t,e,r,s){return Rl(e)||s.isEqual(j.min())?R.resolve(null):this.fs.getDocuments(t,r).next((i=>{const a=this.bs(e,i);return this.Ss(e,a,r,s)?R.resolve(null):(vn()<=W.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),An(e)),this.Ds(t,a,e,Gv(s,Fr)).next((c=>c)))}))}bs(t,e){let r=new _t(Kf(t));return e.forEach(((s,i)=>{Oi(t,i)&&(r=r.add(i))})),r}Ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(t,e,r){return vn()<=W.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",An(e)),this.fs.getDocumentsMatchingQuery(t,e,qe.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const rc="LocalStore",Vb=3e8;class Db{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new it(z),this.Fs=new _n((i=>Ga(i)),Ka),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Eb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function Nb(n,t,e,r){return new Db(n,t,e,r)}async function Ep(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,e.Os(t),e.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=G();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return e.localDocuments.getDocuments(r,l).next((h=>({Ns:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function Ob(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),i=e.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const g=h.batch,m=g.keys();let b=R.resolve();return m.forEach((S=>{b=b.next((()=>f.getEntry(l,S))).next((k=>{const V=h.docVersions.get(S);Y(V!==null,48541),k.version.compareTo(V)<0&&(g.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,g)))})(e,r,t,i).next((()=>i.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=G();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Ip(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function Mb(n,t){const e=$(n),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const c=[];t.targetChanges.forEach(((f,g)=>{const m=s.get(g);if(!m)return;c.push(e.li.removeMatchingKeys(i,f.removedDocuments,g).next((()=>e.li.addMatchingKeys(i,f.addedDocuments,g))));let b=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?b=b.withResumeToken(wt.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(g,b),(function(k,V,x){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Vb?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(m,b,f)&&c.push(e.li.updateTargetData(i,b))}));let l=we(),h=G();if(t.documentUpdates.forEach((f=>{t.resolvedLimboDocuments.has(f)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(Lb(i,a,t.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!r.isEqual(j.min())){const f=e.li.getLastRemoteSnapshotVersion(i).next((g=>e.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return R.waitFor(c).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(e.vs=s,i)))}function Lb(n,t,e){let r=G(),s=G();return e.forEach((i=>r=r.add(i))),t.getEntries(n,r).next((i=>{let a=we();return e.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(j.min())?(t.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(l),a=a.insert(c,l)):N(rc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:a,Ls:s}}))}function xb(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Wa),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function Fb(n,t){const e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.li.getTargetData(r,t).next((i=>i?(s=i,R.resolve(s)):e.li.allocateTargetId(r).next((a=>(s=new Oe(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r}))}async function ta(n,t,e){const r=$(n),s=r.vs.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!nr(a))throw a;N(rc,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function jl(n,t,e){const r=$(n);let s=j.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,f){const g=$(l),m=g.Fs.get(f);return m!==void 0?R.resolve(g.vs.get(m)):g.li.getTargetData(h,f)})(r,a,ae(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:j.min(),e?i:G()))).next((c=>(Ub(r,vA(t),c),{documents:c,ks:i})))))}function Ub(n,t,e){let r=n.Ms.get(t)||j.min();e.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(t,r)}class $l{constructor(){this.activeTargetIds=PA()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Bb{constructor(){this.vo=new $l,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new $l,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class jb{Mo(t){}shutdown(){}}/**
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
 */const Hl="ConnectivityMonitor";class ql{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(Hl,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){N(Hl,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ns=null;function ea(){return Ns===null?Ns=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ns++,"0x"+Ns.toString(16)}/**
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
 */const Co="RestConnection",$b={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Hb{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===ai?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,i){const a=ea(),c=this.Qo(t,e.toUriEncodedString());N(Co,`Sending RPC '${t}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:h}=new URL(c),f=Qn(h);return this.zo(t,c,l,r,f).then((g=>(N(Co,`Received RPC '${t}' ${a}: `,g),g)),(g=>{throw Un(Co,`RPC '${t}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}jo(t,e,r,s,i,a){return this.Wo(t,e,r,s,i)}Go(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+tr})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s))}Qo(t,e){const r=$b[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class qb{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const bt="WebChannelConnection",Er=(n,t,e)=>{n.listen(t,(r=>{try{e(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Dn extends Hb{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Dn.c_){const t=Sf();Er(t,Cf.STAT_EVENT,(e=>{e.stat===Ho.PROXY?N(bt,"STAT_EVENT: detected buffering proxy"):e.stat===Ho.NOPROXY&&N(bt,"STAT_EVENT: detected no buffering proxy")})),Dn.c_=!0}}zo(t,e,r,s,i){const a=ea();return new Promise(((c,l)=>{const h=new Af;h.setWithCredentials(!0),h.listenOnce(bf.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Fs.NO_ERROR:const g=h.getResponseJson();N(bt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),c(g);break;case Fs.TIMEOUT:N(bt,`RPC '${t}' ${a} timed out`),l(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Fs.HTTP_ERROR:const m=h.getStatus();if(N(bt,`RPC '${t}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const S=b==null?void 0:b.error;if(S&&S.status&&S.message){const k=(function(x){const B=x.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN})(S.status);l(new O(k,S.message))}else l(new O(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new O(P.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{N(bt,`RPC '${t}' ${a} completed.`)}}));const f=JSON.stringify(s);N(bt,`RPC '${t}' ${a} sending request:`,s),h.send(e,"POST",f,r,15)}))}T_(t,e,r){const s=ea(),i=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const h=i.join("");N(bt,`Creating RPC '${t}' stream ${s}: ${h}`,c);const f=a.createWebChannel(h,c);this.I_(f);let g=!1,m=!1;const b=new qb({Ho:S=>{m?N(bt,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(g||(N(bt,`Opening RPC '${t}' stream ${s} transport.`),f.open(),g=!0),N(bt,`RPC '${t}' stream ${s} sending:`,S),f.send(S))},Jo:()=>f.close()});return Er(f,Ir.EventType.OPEN,(()=>{m||(N(bt,`RPC '${t}' stream ${s} transport opened.`),b.i_())})),Er(f,Ir.EventType.CLOSE,(()=>{m||(m=!0,N(bt,`RPC '${t}' stream ${s} transport closed`),b.o_(),this.E_(f))})),Er(f,Ir.EventType.ERROR,(S=>{m||(m=!0,Un(bt,`RPC '${t}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),b.o_(new O(P.UNAVAILABLE,"The operation could not be completed")))})),Er(f,Ir.EventType.MESSAGE,(S=>{var k;if(!m){const V=S.data[0];Y(!!V,16349);const x=V,B=(x==null?void 0:x.error)||((k=x[0])==null?void 0:k.error);if(B){N(bt,`RPC '${t}' stream ${s} received error:`,B);const H=B.status;let ct=(function(I){const _=ut[I];if(_!==void 0)return ap(_)})(H),Lt=B.message;ct===void 0&&(ct=P.INTERNAL,Lt="Unknown error status: "+H+" with message "+B.message),m=!0,b.o_(new O(ct,Lt)),f.close()}else N(bt,`RPC '${t}' stream ${s} received:`,V),b.__(V)}})),Dn.u_(),setTimeout((()=>{b.s_()}),0),b}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Rf()}}/**
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
 */function Wb(n){return new Dn(n)}function So(){return typeof document<"u"?document:null}/**
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
 */function Fi(n){return new KA(n,!0)}/**
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
 */Dn.c_=!1;class wp{constructor(t,e,r=1e3,s=1.5,i=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Wl="PersistentStream";class vp{constructor(t,e,r,s,i,a,c,l){this.Ci=t,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wp(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ie(e.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return N(Wl,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(N(Wl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zb extends vp{constructor(t,e,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=XA(this.serializer,t),r=(function(i){if(!("targetChange"in i))return j.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?j.min():a.readTime?ce(a.readTime):j.min()})(t);return this.listener.J_(e,r)}Z_(t){const e={};e.database=Zo(this.serializer),e.addTarget=(function(i,a){let c;const l=a.target;if(c=Go(l)?{documents:eb(i,l)}:{query:nb(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=lp(i,a.resumeToken);const h=Qo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(j.min())>0){c.readTime=di(i,a.snapshotVersion.toTimestamp());const h=Qo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,t);const r=sb(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Zo(this.serializer),e.removeTarget=t,this.K_(e)}}class Jb extends vp{constructor(t,e,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return Y(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Y(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=tb(t.writeResults,t.commitTime),r=ce(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Zo(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>ZA(this.serializer,r)))};this.K_(e)}}/**
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
 */class Gb{}class Kb extends Gb{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(t,Yo(e,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(P.UNKNOWN,i.toString())}))}jo(t,e,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(t,Yo(e,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Qb(n,t,e,r){return new Kb(n,t,e,r)}class Yb{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ie(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const dn="RemoteStore";class Xb{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((a=>{r.enqueueAndForget((async()=>{Tn(this)&&(N(dn,"Restarting streams for network reachability change."),await(async function(l){const h=$(l);h.Ea.add(4),await us(h),h.Va.set("Unknown"),h.Ea.delete(4),await Ui(h)})(this))}))})),this.Va=new Yb(r,s)}}async function Ui(n){if(Tn(n))for(const t of n.Ra)await t(!0)}async function us(n){for(const t of n.Ra)await t(!1)}function Ap(n,t){const e=$(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),ac(e)?oc(e):rr(e).O_()&&ic(e,t))}function sc(n,t){const e=$(n),r=rr(e);e.Ia.delete(t),r.O_()&&bp(e,t),e.Ia.size===0&&(r.O_()?r.L_():Tn(e)&&e.Va.set("Unknown"))}function ic(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}rr(n).Z_(t)}function bp(n,t){n.da.$e(t),rr(n).X_(t)}function oc(n){n.da=new WA({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),rr(n).start(),n.Va.ua()}function ac(n){return Tn(n)&&!rr(n).x_()&&n.Ia.size>0}function Tn(n){return $(n).Ea.size===0}function Cp(n){n.da=void 0}async function Zb(n){n.Va.set("Online")}async function tC(n){n.Ia.forEach(((t,e)=>{ic(n,t)}))}async function eC(n,t){Cp(n),ac(n)?(n.Va.ha(t),oc(n)):n.Va.set("Unknown")}async function nC(n,t,e){if(n.Va.set("Online"),t instanceof up&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.da.removeTarget(c))})(n,t)}catch(r){N(dn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await pi(n,r)}else if(t instanceof $s?n.da.Xe(t):t instanceof cp?n.da.st(t):n.da.tt(t),!e.isEqual(j.min()))try{const r=await Ip(n.localStore);e.compareTo(r)>=0&&await(function(i,a){const c=i.da.Tt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(wt.EMPTY_BYTE_STRING,f.snapshotVersion)),bp(i,l);const g=new Oe(f.target,l,h,f.sequenceNumber);ic(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){N(dn,"Failed to raise snapshot:",r),await pi(n,r)}}async function pi(n,t,e){if(!nr(t))throw t;n.Ea.add(1),await us(n),n.Va.set("Offline"),e||(e=()=>Ip(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(dn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Ui(n)}))}function Sp(n,t){return t().catch((e=>pi(n,e,t)))}async function Bi(n){const t=$(n),e=Ge(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Wa;for(;rC(t);)try{const s=await xb(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,sC(t,s)}catch(s){await pi(t,s)}Rp(t)&&Pp(t)}function rC(n){return Tn(n)&&n.Ta.length<10}function sC(n,t){n.Ta.push(t);const e=Ge(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function Rp(n){return Tn(n)&&!Ge(n).x_()&&n.Ta.length>0}function Pp(n){Ge(n).start()}async function iC(n){Ge(n).ra()}async function oC(n){const t=Ge(n);for(const e of n.Ta)t.ea(e.mutations)}async function aC(n,t,e){const r=n.Ta.shift(),s=Ya.from(r,t,e);await Sp(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Bi(n)}async function cC(n,t){t&&Ge(n).Y_&&await(async function(r,s){if((function(a){return $A(a)&&a!==P.ABORTED})(s.code)){const i=r.Ta.shift();Ge(r).B_(),await Sp(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Bi(r)}})(n,t),Rp(n)&&Pp(n)}async function zl(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),N(dn,"RemoteStore received new credentials");const r=Tn(e);e.Ea.add(3),await us(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Ui(e)}async function uC(n,t){const e=$(n);t?(e.Ea.delete(2),await Ui(e)):t||(e.Ea.add(2),await us(e),e.Va.set("Unknown"))}function rr(n){return n.ma||(n.ma=(function(e,r,s){const i=$(e);return i.sa(),new zb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Zb.bind(null,n),Yo:tC.bind(null,n),t_:eC.bind(null,n),J_:nC.bind(null,n)}),n.Ra.push((async t=>{t?(n.ma.B_(),ac(n)?oc(n):n.Va.set("Unknown")):(await n.ma.stop(),Cp(n))}))),n.ma}function Ge(n){return n.fa||(n.fa=(function(e,r,s){const i=$(e);return i.sa(),new Jb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:iC.bind(null,n),t_:cC.bind(null,n),ta:oC.bind(null,n),na:aC.bind(null,n)}),n.Ra.push((async t=>{t?(n.fa.B_(),await Bi(n)):(await n.fa.stop(),n.Ta.length>0&&(N(dn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class cc{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Be,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,c=new cc(t,e,a,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uc(n,t){if(Ie("AsyncQueue",`${t}: ${n}`),nr(n))return new O(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Nn{static emptySet(t){return new Nn(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||L.comparator(e.key,r.key):(e,r)=>L.comparator(e.key,r.key),this.keyedMap=wr(),this.sortedSet=new it(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Nn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Nn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Jl{constructor(){this.ga=new it(L.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):F(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class qn{constructor(t,e,r,s,i,a,c,l,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,s,i){const a=[];return e.forEach((c=>{a.push({type:0,doc:c})})),new qn(t,e,Nn.emptySet(e),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ni(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class lC{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class hC{constructor(){this.queries=Gl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=$(e),i=s.queries;s.queries=Gl(),i.forEach(((a,c)=>{for(const l of c.ba)l.onError(r)}))})(this,new O(P.ABORTED,"Firestore shutting down"))}}function Gl(){return new _n((n=>Gf(n)),Ni)}async function kp(n,t){const e=$(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.Sa()&&t.Da()&&(r=2):(i=new lC,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=uc(a,`Initialization of query '${An(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.ba.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&lc(e)}async function Vp(n,t){const e=$(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const a=i.ba.indexOf(t);a>=0&&(i.ba.splice(a,1),i.ba.length===0?s=t.Da()?0:1:!i.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function dC(n,t){const e=$(n);let r=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const c of a.ba)c.Fa(s)&&(r=!0);a.wa=s}}r&&lc(e)}function fC(n,t,e){const r=$(n),s=r.queries.get(t);if(s)for(const i of s.ba)i.onError(e);r.queries.delete(t)}function lc(n){n.Ca.forEach((t=>{t.next()}))}var na,Kl;(Kl=na||(na={})).Ma="default",Kl.Cache="cache";class Dp{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new qn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.Ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=qn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==na.Cache}}/**
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
 */class Np{constructor(t){this.key=t}}class Op{constructor(t){this.key=t}}class pC{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=G(),this.mutatedKeys=G(),this.eu=Kf(t),this.tu=new Nn(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new Jl,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((f,g)=>{const m=s.get(f),b=Oi(this.query,g)?g:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let V=!1;m&&b?m.data.isEqual(b.data)?S!==k&&(r.track({type:3,doc:b}),V=!0):this.su(m,b)||(r.track({type:2,doc:b}),V=!0,(l&&this.eu(b,l)>0||h&&this.eu(b,h)<0)&&(c=!0)):!m&&b?(r.track({type:0,doc:b}),V=!0):m&&!b&&(r.track({type:1,doc:m}),V=!0,(l||h)&&(c=!0)),V&&(b?(a=a.add(b),i=k?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Ss:c,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((f,g)=>(function(b,S){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:V})}};return k(b)-k(S)})(f.type,g.type)||this.eu(f.doc,g.doc))),this.ou(r),s=s??!1;const c=e&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,a.length!==0||h?{snapshot:new qn(this.query,t.tu,i,a,t.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Jl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=G(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const e=[];return t.forEach((r=>{this.Ya.has(r)||e.push(new Op(r))})),this.Ya.forEach((r=>{t.has(r)||e.push(new Np(r))})),e}cu(t){this.Za=t.ks,this.Ya=G();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return qn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const hc="SyncEngine";class gC{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class mC{constructor(t){this.key=t,this.hu=!1}}class _C{constructor(t,e,r,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new _n((c=>Gf(c)),Ni),this.Iu=new Map,this.Eu=new Set,this.Ru=new it(L.comparator),this.Au=new Map,this.Vu=new tc,this.du={},this.mu=new Map,this.fu=Hn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function yC(n,t,e=!0){const r=Bp(n);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Mp(r,t,e,!0),s}async function TC(n,t){const e=Bp(n);await Mp(e,t,!0,!1)}async function Mp(n,t,e,r){const s=await Fb(n.localStore,ae(t)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,e);let c;return r&&(c=await EC(n,t,i,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ap(n.remoteStore,s),c}async function EC(n,t,e,r,s){n.pu=(g,m,b)=>(async function(k,V,x,B){let H=V.view.ru(x);H.Ss&&(H=await jl(k.localStore,V.query,!1).then((({documents:I})=>V.view.ru(I,H))));const ct=B&&B.targetChanges.get(V.targetId),Lt=B&&B.targetMismatches.get(V.targetId)!=null,vt=V.view.applyChanges(H,k.isPrimaryClient,ct,Lt);return Yl(k,V.targetId,vt.au),vt.snapshot})(n,g,m,b);const i=await jl(n.localStore,t,!0),a=new pC(t,i.ks),c=a.ru(i.documents),l=cs.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);Yl(n,e,h.au);const f=new gC(t,e,a);return n.Tu.set(t,f),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),h.snapshot}async function IC(n,t,e){const r=$(n),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!Ni(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ta(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&sc(r.remoteStore,s.targetId),ra(r,s.targetId)})).catch(er)):(ra(r,s.targetId),await ta(r.localStore,s.targetId,!0))}async function wC(n,t){const e=$(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),sc(e.remoteStore,r.targetId))}async function vC(n,t,e){const r=kC(n);try{const s=await(function(a,c){const l=$(a),h=nt.now(),f=c.reduce(((b,S)=>b.add(S.key)),G());let g,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let S=we(),k=G();return l.xs.getEntries(b,f).next((V=>{S=V,S.forEach(((x,B)=>{B.isValidDocument()||(k=k.add(x))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,S))).next((V=>{g=V;const x=[];for(const B of c){const H=xA(B,g.get(B.key).overlayedDocument);H!=null&&x.push(new yn(B.key,H,jf(H.value.mapValue),_e.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,x,c)})).next((V=>{m=V;const x=V.applyToLocalDocumentSet(g,k);return l.documentOverlayCache.saveOverlays(b,V.batchId,x)}))})).then((()=>({batchId:m.batchId,changes:Yf(g)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.du[a.currentUser.toKey()];h||(h=new it(z)),h=h.insert(c,l),a.du[a.currentUser.toKey()]=h})(r,s.batchId,e),await ls(r,s.changes),await Bi(r.remoteStore)}catch(s){const i=uc(s,"Failed to persist write");e.reject(i)}}async function Lp(n,t){const e=$(n);try{const r=await Mb(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Au.get(i);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Y(a.hu,14607):s.removedDocuments.size>0&&(Y(a.hu,42227),a.hu=!1))})),await ls(e,r,t)}catch(r){await er(r)}}function Ql(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=$(a);l.onlineState=c;let h=!1;l.queries.forEach(((f,g)=>{for(const m of g.ba)m.va(c)&&(h=!0)})),h&&lc(l)})(r.eventManager,t),s.length&&r.Pu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function AC(n,t,e){const r=$(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new it(L.comparator);a=a.insert(i,St.newNoDocument(i,j.min()));const c=G().add(i),l=new xi(j.min(),new Map,new it(z),a,c);await Lp(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(t),dc(r)}else await ta(r.localStore,t,!1).then((()=>ra(r,t,e))).catch(er)}async function bC(n,t){const e=$(n),r=t.batch.batchId;try{const s=await Ob(e.localStore,t);Fp(e,r,null),xp(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ls(e,s)}catch(s){await er(s)}}async function CC(n,t,e){const r=$(n);try{const s=await(function(a,c){const l=$(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((g=>(Y(g!==null,37113),f=g.keys(),l.mutationQueue.removeMutationBatch(h,g)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,t);Fp(r,t,e),xp(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await ls(r,s)}catch(s){await er(s)}}function xp(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Fp(n,t,e){const r=$(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function ra(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach((r=>{n.Vu.containsKey(r)||Up(n,r)}))}function Up(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(sc(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),dc(n))}function Yl(n,t,e){for(const r of e)r instanceof Np?(n.Vu.addReference(r.key,t),SC(n,r)):r instanceof Op?(N(hc,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,t),n.Vu.containsKey(r.key)||Up(n,r.key)):F(19791,{wu:r})}function SC(n,t){const e=t.key,r=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(r)||(N(hc,"New document in limbo: "+e),n.Eu.add(r),dc(n))}function dc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new L(rt.fromString(t)),r=n.fu.next();n.Au.set(r,new mC(e)),n.Ru=n.Ru.insert(e,r),Ap(n.remoteStore,new Oe(ae(Di(e.path)),r,"TargetPurposeLimboResolution",Ri.ce))}}async function ls(n,t,e){const r=$(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{a.push(r.pu(l,t,e).then((h=>{var f;if((h||e)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=nc.Es(l.targetId,h);i.push(g)}})))})),await Promise.all(a),r.Pu.J_(s),await(async function(l,h){const f=$(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>R.forEach(h,(m=>R.forEach(m.Ts,(b=>f.persistence.referenceDelegate.addReference(g,m.targetId,b))).next((()=>R.forEach(m.Is,(b=>f.persistence.referenceDelegate.removeReference(g,m.targetId,b)))))))))}catch(g){if(!nr(g))throw g;N(rc,"Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const b=f.vs.get(m),S=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(S);f.vs=f.vs.insert(m,k)}}})(r.localStore,i))}async function RC(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){N(hc,"User change. New user:",t.toKey());const r=await Ep(e.localStore,t);e.currentUser=t,(function(i,a){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new O(P.CANCELLED,a))}))})),i.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ls(e,r.Ns)}}function PC(n,t){const e=$(n),r=e.Au.get(t);if(r&&r.hu)return G().add(r.key);{let s=G();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Bp(n){const t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Lp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=PC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=AC.bind(null,t),t.Pu.J_=dC.bind(null,t.eventManager),t.Pu.yu=fC.bind(null,t.eventManager),t}function kC(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=bC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=CC.bind(null,t),t}class gi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Fi(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Nb(this.persistence,new kb,t.initialUser,this.serializer)}Cu(t){return new Tp(ec.Vi,this.serializer)}Du(t){return new Bb}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gi.provider={build:()=>new gi};class VC extends gi{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Y(this.persistence.referenceDelegate instanceof fi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new gb(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Tp((r=>fi.Vi(r,e)),this.serializer)}}class sa{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ql(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RC.bind(null,this.syncEngine),await uC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new hC})()}createDatastore(t){const e=Fi(t.databaseInfo.databaseId),r=Wb(t.databaseInfo);return Qb(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,i,a,c){return new Xb(r,s,i,a,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Ql(this.syncEngine,e,0)),(function(){return ql.v()?new ql:new jb})())}createSyncEngine(t,e){return(function(s,i,a,c,l,h,f){const g=new _C(s,i,a,c,l,h);return f&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=$(s);N(dn,"RemoteStore shutting down."),i.Ea.add(5),await us(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}sa.provider={build:()=>new sa};/**
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
 */class jp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ie("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const Ke="FirestoreClient";class DC{constructor(t,e,r,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=Ha.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{N(Ke,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(N(Ke,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Be;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=uc(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ro(n,t){n.asyncQueue.verifyOperationInProgress(),N(Ke,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Ep(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Xl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await NC(n);N(Ke,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>zl(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>zl(t.remoteStore,s))),n._onlineComponents=t}async function NC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Ke,"Using user provided OfflineComponentProvider");try{await Ro(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Un("Error using user provided cache. Falling back to memory cache: "+e),await Ro(n,new gi)}}else N(Ke,"Using default OfflineComponentProvider"),await Ro(n,new VC(void 0));return n._offlineComponents}async function $p(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Ke,"Using user provided OnlineComponentProvider"),await Xl(n,n._uninitializedComponentsProvider._online)):(N(Ke,"Using default OnlineComponentProvider"),await Xl(n,new sa))),n._onlineComponents}function OC(n){return $p(n).then((t=>t.syncEngine))}async function ia(n){const t=await $p(n),e=t.eventManager;return e.onListen=yC.bind(null,t.syncEngine),e.onUnlisten=IC.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=TC.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=wC.bind(null,t.syncEngine),e}function MC(n,t,e,r){const s=new jp(r),i=new Dp(t,s,e);return n.asyncQueue.enqueueAndForget((async()=>kp(await ia(n),i))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>Vp(await ia(n),i)))}}function LC(n,t,e={}){const r=new Be;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const f=new jp({next:m=>{f.Nu(),a.enqueueAndForget((()=>Vp(i,g)));const b=m.docs.has(c);!b&&m.fromCache?h.reject(new O(P.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&m.fromCache&&l&&l.source==="server"?h.reject(new O(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new Dp(Di(c.path),f,{includeMetadataChanges:!0,Ka:!0});return kp(i,g)})(await ia(n),n.asyncQueue,t,e,r))),r.promise}function xC(n,t){const e=new Be;return n.asyncQueue.enqueueAndForget((async()=>vC(await OC(n),t,e))),e.promise}/**
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
 */function Hp(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const FC="ComponentProvider",Zl=new Map;function UC(n,t,e,r,s){return new sA(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Hp(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const qp="firestore.googleapis.com",th=!0;class eh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qp,this.ssl=th}else this.host=t.host,this.ssl=t.ssl??th;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=yp;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<fb)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Jv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hp(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fc{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Lv;switch(r.type){case"firstParty":return new Bv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Zl.get(e);r&&(N(FC,"Removing Datastore"),Zl.delete(e),r.terminate())})(this),Promise.resolve()}}function BC(n,t,e,r={}){var h;n=je(n,fc);const s=Qn(t),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;s&&(Od(`https://${c}`),Md("Firestore",!0)),i.host!==qp&&i.host!==c&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!cn(l,a)&&(n._setSettings(l),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=Ct.MOCK_USER;else{f=oE(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ct(m)}n._authCredentials=new xv(new kf(f,g))}}/**
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
 */class ji{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ji(this.firestore,t,this._query)}}class mt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(os(e,mt._jsonSchema))return new mt(t,r||null,new L(rt.fromString(e.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:ht("string",mt._jsonSchemaVersion),referencePath:ht("string")};class Wr extends ji{constructor(t,e,r){super(t,e,Di(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new L(t))}withConverter(t){return new Wr(this.firestore,t,this._path)}}function pc(n,t,...e){if(n=Mt(n),arguments.length===1&&(t=Ha.newId()),zv("doc","path",t),n instanceof fc){const r=rt.fromString(t,...e);return gl(r),new mt(n,null,new L(r))}{if(!(n instanceof mt||n instanceof Wr))throw new O(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(rt.fromString(t,...e));return gl(r),new mt(n.firestore,n instanceof Wr?n.converter:null,new L(r))}}/**
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
 */const nh="AsyncQueue";class rh{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new wp(this,"async_queue_retry"),this._c=()=>{const r=So();r&&N(nh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=So();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=So();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Be;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!nr(t))throw t;N(nh,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Ie("INTERNAL UNHANDLED ERROR: ",sh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=cc.createAndSchedule(this,t,e,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&F(47125,{Pc:sh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function sh(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class zr extends fc{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new rh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new rh(t),this._firestoreClient=void 0,await t}}}function jC(n,t){const e=typeof n=="object"?n:Ud(),r=typeof n=="string"?n:ai,s=ka(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=sE("firestore");i&&BC(s,...i)}return s}function gc(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$C(n),n._firestoreClient}function $C(n){var r,s,i,a;const t=n._freezeSettings(),e=UC(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new DC(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
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
 */class qt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qt(wt.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qt(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(os(t,qt._jsonSchema))return qt.fromBase64String(t.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:ht("string",qt._jsonSchemaVersion),bytes:ht("string")};/**
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
 */class Wp{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class mc{constructor(t){this._methodName=t}}/**
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
 */class ue{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ue._jsonSchemaVersion}}static fromJSON(t){if(os(t,ue._jsonSchema))return new ue(t.latitude,t.longitude)}}ue._jsonSchemaVersion="firestore/geoPoint/1.0",ue._jsonSchema={type:ht("string",ue._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
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
 */class Zt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(os(t,Zt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Zt(t.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zt._jsonSchemaVersion="firestore/vectorValue/1.0",Zt._jsonSchema={type:ht("string",Zt._jsonSchemaVersion),vectorValues:ht("object")};/**
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
 */const HC=/^__.*__$/;class qC{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new yn(t,this.data,this.fieldMask,e,this.fieldTransforms):new as(t,this.data,e,this.fieldTransforms)}}function zp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:n})}}class _c{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new _c({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return mi(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(zp(this.dataSource)&&HC.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class WC{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Fi(t)}createContext(t,e,r,s=!1){return new _c({dataSource:t,methodName:e,targetDoc:r,path:It.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zC(n){const t=n._freezeSettings(),e=Fi(n._databaseId);return new WC(n._databaseId,!!t.ignoreUndefinedProperties,e)}function JC(n,t,e,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,t,e,s);Qp("Data must be an object, but it was:",a,r);const c=Gp(r,a);let l,h;if(i.merge)l=new Yt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=Tc(t,g,e);if(!a.contains(m))throw new O(P.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);QC(f,m)||f.push(m)}l=new Yt(f),h=a.fieldTransforms.filter((g=>l.covers(g.field)))}else l=null,h=a.fieldTransforms;return new qC(new Ht(c),l,h)}class yc extends mc{_toFieldTransform(t){return new NA(t.path,new $r)}isEqual(t){return t instanceof yc}}function Jp(n,t){if(Kp(n=Mt(n)))return Qp("Unsupported field value:",t,n),Gp(n,t);if(n instanceof mc)return(function(r,s){if(!zp(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=Jp(c,s.childContextForArray(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,t)}return(function(r,s){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:di(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:di(s.serializer,i)}}if(r instanceof ue)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:lp(s.serializer,r._byteString)};if(r instanceof mt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Za(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Zt)return(function(a,c){const l=a instanceof Zt?a.toArray():a;return{mapValue:{fields:{[Uf]:{stringValue:Bf},[ci]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return Qa(c.serializer,f)}))}}}}}})(r,s);if(_p(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${qa(r)}`)})(n,t)}function Gp(n,t){const e={};return Nf(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):mn(n,((r,s)=>{const i=Jp(s,t.childContextForField(r));i!=null&&(e[r]=i)})),{mapValue:{fields:e}}}function Kp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof ue||n instanceof qt||n instanceof mt||n instanceof mc||n instanceof Zt||_p(n))}function Qp(n,t,e){if(!Kp(e)||!Vf(e)){const r=qa(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Tc(n,t,e){if((t=Mt(t))instanceof Wp)return t._internalPath;if(typeof t=="string")return KC(n,t);throw mi("Field path arguments must be of type string or ",n,!1,void 0,e)}const GC=new RegExp("[~\\*/\\[\\]]");function KC(n,t,e){if(t.search(GC)>=0)throw mi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Wp(...t.split("."))._internalPath}catch{throw mi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function mi(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new O(P.INVALID_ARGUMENT,c+n+l)}function QC(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class YC{convertValue(t,e="none"){switch(Je(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ze(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return mn(t,((s,i)=>{r[s]=this.convertValue(i,e)})),r}convertVectorValue(t){var r,s,i;const e=(i=(s=(r=t.fields)==null?void 0:r[ci].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>at(a.doubleValue)));return new Zt(e)}convertGeoPoint(t){return new ue(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ki(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ur(t));default:return null}}convertTimestamp(t){const e=We(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=rt.fromString(t);Y(mp(r),9688,{name:t});const s=new Br(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(e)||Ie(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */class Yp extends YC{constructor(t){super(),this.firestore=t}convertBytes(t){return new qt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,e)}}function Xp(){return new yc("serverTimestamp")}const ih="@firebase/firestore",oh="4.10.0";/**
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
 */function ah(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class Zp{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new XC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Tc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class XC extends Zp{data(){return super.data()}}/**
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
 */function ZC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function tS(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Ar{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class on extends Zp{constructor(t,e,r,s,i,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Hs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Tc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=on._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}on._jsonSchemaVersion="firestore/documentSnapshot/1.0",on._jsonSchema={type:ht("string",on._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class Hs extends on{data(t={}){return super.data(t)}}class On{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ar(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Hs(this._firestore,this._userDataWriter,r.key,r,new Ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new Hs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ar(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Hs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ar(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:eS(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=On._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ha.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function eS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
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
 */On._jsonSchemaVersion="firestore/querySnapshot/1.0",On._jsonSchema={type:ht("string",On._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};/**
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
 */function tg(n){n=je(n,mt);const t=je(n.firestore,zr),e=gc(t);return LC(e,n._key).then((r=>ng(t,n,r)))}function eg(n,t,e){n=je(n,mt);const r=je(n.firestore,zr),s=tS(n.converter,t,e),i=zC(r);return rS(r,[JC(i,"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,_e.none())])}function nS(n,...t){var h,f,g;n=Mt(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||ah(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(ah(t[r])){const m=t[r];t[r]=(h=m.next)==null?void 0:h.bind(m),t[r+1]=(f=m.error)==null?void 0:f.bind(m),t[r+2]=(g=m.complete)==null?void 0:g.bind(m)}let i,a,c;if(n instanceof mt)a=je(n.firestore,zr),c=Di(n._key.path),i={next:m=>{t[r]&&t[r](ng(a,n,m))},error:t[r+1],complete:t[r+2]};else{const m=je(n,ji);a=je(m.firestore,zr),c=m._query;const b=new Yp(a);i={next:S=>{t[r]&&t[r](new On(a,b,m,S))},error:t[r+1],complete:t[r+2]},ZC(n._query)}const l=gc(a);return MC(l,c,s,i)}function rS(n,t){const e=gc(n);return xC(e,t)}function ng(n,t,e){const r=e.docs.get(t._key),s=new Yp(n);return new on(n,s,t._key,r,new Ar(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){Mv(Yn),xn(new un("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new zr(new Fv(r.getProvider("auth-internal")),new jv(a,r.getProvider("app-check-internal")),iA(a,s),a);return i={useFetchStreams:e,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),xe(ih,oh,t),xe(ih,oh,"esm2020")})();const sS={apiKey:"AIzaSyC8oBLWyTpzWLLjWdZxo8YgQ1IcYICxdcU",authDomain:"auth.3dlocalprint.com",projectId:"threedlocalprint",storageBucket:"threedlocalprint.firebasestorage.app",messagingSenderId:"770972495364",appId:"1:770972495364:web:b1015eaaf0de32d9b84f51"},rg=Fd(sS),Wn=Nv(rg),ch=new pe,Ec=jC(rg),sg=pc(Ec,"swatches","list"),ig=pc(Ec,"manufacturers","list"),iS=pc(Ec,"admins","list"),uh=(n="")=>n.trim().toLowerCase(),oS=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),aS=async()=>{const n=[{key:"indexedDB",value:_f},{key:"local",value:hf},{key:"session",value:Fa}];let t=null;for(const e of n)try{return await Tw(Wn,e.value),{persistence:e.key,error:null}}catch(r){t=r,console.warn(`Failed to set ${e.key} persistence`,r)}return{persistence:"none",error:t}},CS=async()=>{let n=null,t=null;try{t=await Kw(Wn)}catch(r){n=r,console.error("Firebase redirect sign-in failed",r)}const e=await aS();return{redirectError:n,redirectResult:t,persistence:e}},SS=async()=>{try{return await jw(Wn,ch)}catch(n){if(!oS())throw n;return console.warn("Popup sign-in failed on iOS, falling back to redirect",n),Jw(Wn,ch)}},RS=()=>vw(Wn),PS=n=>ww(Wn,n),kS=async()=>{const n=await tg(sg);if(!n.exists())return null;const t=n.data();return Array.isArray(t.items)?t.items:[]},VS=n=>eg(sg,{items:n,updatedAt:Xp()},{merge:!0}),DS=n=>nS(ig,t=>{if(!t.exists()){n(null);return}const e=t.data();n(Array.isArray(e.items)?e.items:[])},t=>{console.error("Failed to subscribe to manufacturers",t),n(null)}),NS=n=>eg(ig,{items:n,updatedAt:Xp()},{merge:!0}),cS=async()=>{const n=await tg(iS);if(!n.exists())return[];const t=n.data();return Array.isArray(t.items)?t.items:[]},OS=async(n="")=>(await cS()).map(uh).includes(uh(n)),MS=["Bambu","PolyMaker","Hatchbox","3DHoJor"],og=tt((n,t,e,r,s)=>(og.updates(i=>{[n,t,e,r,s]=i}),n==="loading"?go.class`panel auth-panel`(mo("Checking login...")):n==="denied"?go.class`panel auth-panel`(Lu("Access denied"),mo.class`auth-warning`(()=>t||"This account"," is not authorized."),Mr.class`auth-actions`(Oo({type:"button",class:"add-button",onClick:s},"Sign out"))):go.class`panel auth-panel`(Lu("Sign in"),mo("Use Google to access the swatch editor."),Mr.class`auth-actions`(Oo({type:"button",class:"add-button",onClick:r},"Sign in with Google"))))),uS=n=>{const t=n==null?void 0:n.current;if(!t)return null;const e=t.cloneNode(!1);return t.replaceWith(e),n.current=e,e},LS=({rootRef:n,status:t,userEmail:e,adminEmail:r,onSignIn:s,onSignOut:i,setAppMounted:a})=>{const c=uS(n);if(!c)return;a&&a(!1),c.replaceChildren();const l=tt(()=>og(t,e,r,s,i));ET(l,c)},lh="toast-root",lS=6e3,hS=()=>{let n=document.getElementById(lh);return n||(n=document.createElement("div"),n.id=lh,n.className="toast-root",document.body.appendChild(n),n)},dS=(n,t)=>{const e=document.createElement("div");return e.className=`toast toast-${t}`,e.setAttribute("role","status"),e.textContent=n,e},Po=(n,t={})=>{if(!n)return;const{tone:e="info",duration:r=lS}=t,s=hS(),i=dS(n,e);s.appendChild(i);const a=window.setTimeout(()=>{i.remove()},r);i.addEventListener("click",()=>{window.clearTimeout(a),i.remove()},{once:!0})},xS={info:(n,t)=>Po(n,{...t,tone:"info"}),success:(n,t)=>Po(n,{...t,tone:"success"}),error:(n,t)=>Po(n,{...t,tone:"error"})};export{pS as A,ES as B,TS as C,yS as D,mo as E,go as F,VS as G,kS as H,MS as I,RS as J,xS as K,LS as L,CS as M,PS as N,OS as O,DS as P,uS as Q,ET as R,KT as S,SS as T,NS as U,C_ as a,Ot as b,gt as c,ye as d,gT as e,fh as f,le as g,M as h,Lh as i,Mr as j,xu as k,wS as l,IS as m,Lu as n,Hy as o,zs as p,Oo as q,S_ as r,D_ as s,tt as t,vS as u,_S as v,gS as w,mS as x,AS as y,Ss as z};
