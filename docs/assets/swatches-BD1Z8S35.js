import{i as Xa,r as Ya,a as Qa,b as Za,g as ec,f as tc,s as ti,p as nc,c as wn,d as ni,h as to,t as pe,e as no,o as so,j as F,k as le,l as ro,m as sc,n as io,q as te,u as ce,v as ye,w as Pn,x as $e,y as oo,z as Es,A as Ss,B as rc,C as si,D as ic,E as oc,F as ac,G as ao}from"./manufacturers.array-CB2DVwmx.js";const cc=[{number:0,label:"PolyTerra PLA",color_name:"Cotton White",manufacturer:"PolyMaker",material_type:"PLA",qr_search_data:"1100302042",barcode_search_data:"6938936708209",hex:"#ffffff",spool_inventory:1},{number:1,label:"3DHoJor - Silk PLA",color_name:"Blue",hex:"#2483ff",url:"https://www.amazon.com/dp/B0C581VC14",spool_inventory:1},{number:15,label:"PLA Matte Ivory",color_name:"White",manufacturer:"Bambu",swatch_code:"11100",hex:"#f0f0f0",url:"https://us.store.bambulab.com/products/pla-matte",spool_inventory:1},{number:25,label:"PLA Matte",color_name:"Matte Lemon Yellow",manufacturer:"Bambu",material_type:"PLA",swatch_code:"11400",hex:"#fff700",url:"https://us.store.bambulab.com/products/pla-matte?id=40489681911944",spool_inventory:1},{number:35,label:"PLA MAX V2",color_name:"Flesh/Light Brown",manufacturer:"Hatchbox",hex:"#ba8861",url:"https://www.amazon.com/dp/B0FGZ9S77Y",spool_inventory:1},{number:40,label:"",color_name:"Red",manufacturer:"PolyMaker",hex:"#D90102",url:"https://www.amazon.com/dp/B099KD9GYK",spool_inventory:1},{number:55,label:"",color_name:"Black",manufacturer:"PolyMaker",hex:"#030305",url:"https://www.amazon.com/dp/B099JXQN6K",spool_inventory:1}];function lc(s){const e=s.context;return Xa(s.templater)?Ya(s):Qa(s,s,e)}function ae(s){if(!s)return Za;const e=ec();if(!e)throw new Error("output must be used in render sync with a parent context");const t=tc(e);if(!t)throw new Error("output must be used in render sync fashion");if(s.wrapped===!0)return s;const r=(...i)=>{const c=t.ownerSupport;return hc(i,s,c.context)};return r.wrapped=!0,r}function hc(s,e,t){const r=t.state,i=r.newer.states,c=r.older?r.older.states:i,l=r.newest;ti(i,c);const p=e(...s);return ti(c,i),nc.push([()=>{const _=l.context.global;if(_===void 0||_.deleted===!0){++wn.locks,l.context.tagJsVar.processUpdate(l.context.value,l.context,l,[]),--wn.locks,ni();return}++wn.locks,lc(l),--wn.locks,ni()},[]]),p}const uc=/\d+/g,co=s=>{if(!s)return"";const e=s.split("#").filter(Boolean),t=s.match(uc)||[],r=[...e,...t].filter(i=>i);return r.length?r.reduce((i,c)=>c.length>i.length?c:i,""):""},dc=(s,e)=>{if(!e)return[];const t=e.toLowerCase();return s.filter(r=>[r.qr_search_data,r.swatch_code,r.number,r.label,r.color_name].filter(c=>c!=null).map(c=>c.toString().toLowerCase()).some(c=>c.includes(t)))},fc=/\d+/g,lo=s=>{if(!s)return"";const e=s.split("#").filter(Boolean),t=s.match(fc)||[],r=[...e,...t].filter(i=>i);return r.length?r.reduce((i,c)=>c.length>i.length?c:i,""):""},pc=(s,e)=>{if(!e)return[];const t=e.toLowerCase();return s.filter(r=>[r.barcode_search_data,r.swatch_code,r.number,r.label,r.color_name].filter(c=>c!=null).map(c=>c.toString().toLowerCase()).some(c=>c.includes(t)))},gc="modulepreload",mc=function(s){return"/"+s},ri={},yc=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let l=function(I){return Promise.all(I.map(T=>Promise.resolve(T).then(A=>({status:"fulfilled",value:A}),A=>({status:"rejected",reason:A}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),_=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));i=l(t.map(I=>{if(I=mc(I),I in ri)return;ri[I]=!0;const T=I.endsWith(".css"),A=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${I}"]${A}`))return;const S=document.createElement("link");if(S.rel=T?"stylesheet":gc,T||(S.as="script"),S.crossOrigin="",S.href=I,_&&S.setAttribute("nonce",_),document.head.appendChild(S),T)return new Promise((C,D)=>{S.addEventListener("load",C),S.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${I}`)))})}))}function c(l){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=l,window.dispatchEvent(p),!p.defaultPrevented)throw l}return i.then(l=>{for(const p of l||[])p.status==="rejected"&&c(p.reason);return e().catch(c)})};class L{constructor(e,t,r,i,c){this._legacyCanvasSize=L.DEFAULT_CANVAS_SIZE,this._preferredCamera="environment",this._maxScansPerSecond=25,this._lastScanTimestamp=-1,this._destroyed=this._flashOn=this._paused=this._active=!1,this.$video=e,this.$canvas=document.createElement("canvas"),r&&typeof r=="object"?this._onDecode=t:(console.warn(r||i||c?"You're using a deprecated version of the QrScanner constructor which will be removed in the future":"Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),this._legacyOnDecode=t),t=typeof r=="object"?r:{},this._onDecodeError=t.onDecodeError||(typeof r=="function"?r:this._onDecodeError),this._calculateScanRegion=t.calculateScanRegion||(typeof i=="function"?i:this._calculateScanRegion),this._preferredCamera=t.preferredCamera||c||this._preferredCamera,this._legacyCanvasSize=typeof r=="number"?r:typeof i=="number"?i:this._legacyCanvasSize,this._maxScansPerSecond=t.maxScansPerSecond||this._maxScansPerSecond,this._onPlay=this._onPlay.bind(this),this._onLoadedMetaData=this._onLoadedMetaData.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this._updateOverlay=this._updateOverlay.bind(this),e.disablePictureInPicture=!0,e.playsInline=!0,e.muted=!0;let l=!1;if(e.hidden&&(e.hidden=!1,l=!0),document.body.contains(e)||(document.body.appendChild(e),l=!0),r=e.parentElement,t.highlightScanRegion||t.highlightCodeOutline){if(i=!!t.overlay,this.$overlay=t.overlay||document.createElement("div"),c=this.$overlay.style,c.position="absolute",c.display="none",c.pointerEvents="none",this.$overlay.classList.add("scan-region-highlight"),!i&&t.highlightScanRegion){this.$overlay.innerHTML='<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';try{this.$overlay.firstElementChild.animate({transform:["scale(.98)","scale(1.01)"]},{duration:400,iterations:1/0,direction:"alternate",easing:"ease-in-out"})}catch{}r.insertBefore(this.$overlay,this.$video.nextSibling)}t.highlightCodeOutline&&(this.$overlay.insertAdjacentHTML("beforeend",'<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'),this.$codeOutlineHighlight=this.$overlay.lastElementChild)}this._scanRegion=this._calculateScanRegion(e),requestAnimationFrame(()=>{let p=window.getComputedStyle(e);p.display==="none"&&(e.style.setProperty("display","block","important"),l=!0),p.visibility!=="visible"&&(e.style.setProperty("visibility","visible","important"),l=!0),l&&(console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."),e.style.opacity="0",e.style.width="0",e.style.height="0",this.$overlay&&this.$overlay.parentElement&&this.$overlay.parentElement.removeChild(this.$overlay),delete this.$overlay,delete this.$codeOutlineHighlight),this.$overlay&&this._updateOverlay()}),e.addEventListener("play",this._onPlay),e.addEventListener("loadedmetadata",this._onLoadedMetaData),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._updateOverlay),this._qrEnginePromise=L.createQrEngine()}static set WORKER_PATH(e){console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.")}static async hasCamera(){try{return!!(await L.listCameras(!1)).length}catch{return!1}}static async listCameras(e=!1){if(!navigator.mediaDevices)return[];let t=async()=>(await navigator.mediaDevices.enumerateDevices()).filter(i=>i.kind==="videoinput"),r;try{e&&(await t()).every(i=>!i.label)&&(r=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0}))}catch{}try{return(await t()).map((i,c)=>({id:i.deviceId,label:i.label||(c===0?"Default Camera":`Camera ${c+1}`)}))}finally{r&&(console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"),L._stopVideoStream(r))}}async hasFlash(){let e;try{if(this.$video.srcObject){if(!(this.$video.srcObject instanceof MediaStream))return!1;e=this.$video.srcObject}else e=(await this._getCameraStream()).stream;return"torch"in e.getVideoTracks()[0].getSettings()}catch{return!1}finally{e&&e!==this.$video.srcObject&&(console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"),L._stopVideoStream(e))}}isFlashOn(){return this._flashOn}async toggleFlash(){this._flashOn?await this.turnFlashOff():await this.turnFlashOn()}async turnFlashOn(){if(!this._flashOn&&!this._destroyed&&(this._flashOn=!0,this._active&&!this._paused))try{if(!await this.hasFlash())throw"No flash available";await this.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:!0}]})}catch(e){throw this._flashOn=!1,e}}async turnFlashOff(){this._flashOn&&(this._flashOn=!1,await this._restartVideoStream())}destroy(){this.$video.removeEventListener("loadedmetadata",this._onLoadedMetaData),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._updateOverlay),this._destroyed=!0,this._flashOn=!1,this.stop(),L._postWorkerMessage(this._qrEnginePromise,"close")}async start(){if(this._destroyed)throw Error("The QR scanner can not be started as it had been destroyed.");if((!this._active||this._paused)&&(window.location.protocol!=="https:"&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,!document.hidden))if(this._paused=!1,this.$video.srcObject)await this.$video.play();else try{let{stream:e,facingMode:t}=await this._getCameraStream();!this._active||this._paused?L._stopVideoStream(e):(this._setVideoMirror(t),this.$video.srcObject=e,await this.$video.play(),this._flashOn&&(this._flashOn=!1,this.turnFlashOn().catch(()=>{})))}catch(e){if(!this._paused)throw this._active=!1,e}}stop(){this.pause(),this._active=!1}async pause(e=!1){if(this._paused=!0,!this._active)return!0;this.$video.pause(),this.$overlay&&(this.$overlay.style.display="none");let t=()=>{this.$video.srcObject instanceof MediaStream&&(L._stopVideoStream(this.$video.srcObject),this.$video.srcObject=null)};return e?(t(),!0):(await new Promise(r=>setTimeout(r,300)),this._paused?(t(),!0):!1)}async setCamera(e){e!==this._preferredCamera&&(this._preferredCamera=e,await this._restartVideoStream())}static async scanImage(e,t,r,i,c=!1,l=!1){let p,_=!1;t&&("scanRegion"in t||"qrEngine"in t||"canvas"in t||"disallowCanvasResizing"in t||"alsoTryWithoutScanRegion"in t||"returnDetailedScanResult"in t)?(p=t.scanRegion,r=t.qrEngine,i=t.canvas,c=t.disallowCanvasResizing||!1,l=t.alsoTryWithoutScanRegion||!1,_=!0):console.warn(t||r||i||c||l?"You're using a deprecated api for scanImage which will be removed in the future.":"Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),t=!!r;try{let I,T;[r,I]=await Promise.all([r||L.createQrEngine(),L._loadImage(e)]),[i,T]=L._drawToCanvas(I,p,i,c);let A;if(r instanceof Worker){let S=r;t||L._postWorkerMessageSync(S,"inversionMode","both"),A=await new Promise((C,D)=>{let k,O,j,$=-1;O=x=>{x.data.id===$&&(S.removeEventListener("message",O),S.removeEventListener("error",j),clearTimeout(k),x.data.data!==null?C({data:x.data.data,cornerPoints:L._convertPoints(x.data.cornerPoints,p)}):D(L.NO_QR_CODE_FOUND))},j=x=>{S.removeEventListener("message",O),S.removeEventListener("error",j),clearTimeout(k),D("Scanner error: "+(x?x.message||x:"Unknown Error"))},S.addEventListener("message",O),S.addEventListener("error",j),k=setTimeout(()=>j("timeout"),1e4);let P=T.getImageData(0,0,i.width,i.height);$=L._postWorkerMessageSync(S,"decode",P,[P.data.buffer])})}else A=await Promise.race([new Promise((S,C)=>window.setTimeout(()=>C("Scanner error: timeout"),1e4)),(async()=>{try{var[S]=await r.detect(i);if(!S)throw L.NO_QR_CODE_FOUND;return{data:S.rawValue,cornerPoints:L._convertPoints(S.cornerPoints,p)}}catch(C){if(S=C.message||C,/not implemented|service unavailable/.test(S))return L._disableBarcodeDetector=!0,L.scanImage(e,{scanRegion:p,canvas:i,disallowCanvasResizing:c,alsoTryWithoutScanRegion:l});throw`Scanner error: ${S}`}})()]);return _?A:A.data}catch(I){if(!p||!l)throw I;let T=await L.scanImage(e,{qrEngine:r,canvas:i,disallowCanvasResizing:c});return _?T:T.data}finally{t||L._postWorkerMessage(r,"close")}}setGrayscaleWeights(e,t,r,i=!0){L._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:e,green:t,blue:r,useIntegerApproximation:i})}setInversionMode(e){L._postWorkerMessage(this._qrEnginePromise,"inversionMode",e)}static async createQrEngine(e){if(e&&console.warn("Specifying a worker path is not required and not supported anymore."),e=()=>yc(()=>import("./qr-scanner-worker.min-D85Z9gVD.js"),[]).then(r=>r.createWorker()),!(!L._disableBarcodeDetector&&"BarcodeDetector"in window&&BarcodeDetector.getSupportedFormats&&(await BarcodeDetector.getSupportedFormats()).includes("qr_code")))return e();let t=navigator.userAgentData;return t&&t.brands.some(({brand:r})=>/Chromium/i.test(r))&&/mac ?OS/i.test(t.platform)&&await t.getHighEntropyValues(["architecture","platformVersion"]).then(({architecture:r,platformVersion:i})=>/arm/i.test(r||"arm")&&13<=parseInt(i||"13")).catch(()=>!0)?e():new BarcodeDetector({formats:["qr_code"]})}_onPlay(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay(),this.$overlay&&(this.$overlay.style.display=""),this._scanFrame()}_onLoadedMetaData(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_calculateScanRegion(e){let t=Math.round(.6666666666666666*Math.min(e.videoWidth,e.videoHeight));return{x:Math.round((e.videoWidth-t)/2),y:Math.round((e.videoHeight-t)/2),width:t,height:t,downScaledWidth:this._legacyCanvasSize,downScaledHeight:this._legacyCanvasSize}}_updateOverlay(){requestAnimationFrame(()=>{if(this.$overlay){var e=this.$video,t=e.videoWidth,r=e.videoHeight,i=e.offsetWidth,c=e.offsetHeight,l=e.offsetLeft,p=e.offsetTop,_=window.getComputedStyle(e),I=_.objectFit,T=t/r,A=i/c;switch(I){case"none":var S=t,C=r;break;case"fill":S=i,C=c;break;default:(I==="cover"?T>A:T<A)?(C=c,S=C*T):(S=i,C=S/T),I==="scale-down"&&(S=Math.min(S,t),C=Math.min(C,r))}var[D,k]=_.objectPosition.split(" ").map((j,$)=>{const P=parseFloat(j);return j.endsWith("%")?($?c-C:i-S)*P/100:P});_=this._scanRegion.width||t,A=this._scanRegion.height||r,I=this._scanRegion.x||0;var O=this._scanRegion.y||0;T=this.$overlay.style,T.width=`${_/t*S}px`,T.height=`${A/r*C}px`,T.top=`${p+k+O/r*C}px`,r=/scaleX\(-1\)/.test(e.style.transform),T.left=`${l+(r?i-D-S:D)+(r?t-I-_:I)/t*S}px`,T.transform=e.style.transform}})}static _convertPoints(e,t){if(!t)return e;let r=t.x||0,i=t.y||0,c=t.width&&t.downScaledWidth?t.width/t.downScaledWidth:1;t=t.height&&t.downScaledHeight?t.height/t.downScaledHeight:1;for(let l of e)l.x=l.x*c+r,l.y=l.y*t+i;return e}_scanFrame(){!this._active||this.$video.paused||this.$video.ended||("requestVideoFrameCallback"in this.$video?this.$video.requestVideoFrameCallback.bind(this.$video):requestAnimationFrame)(async()=>{if(!(1>=this.$video.readyState)){var e=Date.now()-this._lastScanTimestamp,t=1e3/this._maxScansPerSecond;e<t&&await new Promise(i=>setTimeout(i,t-e)),this._lastScanTimestamp=Date.now();try{var r=await L.scanImage(this.$video,{scanRegion:this._scanRegion,qrEngine:this._qrEnginePromise,canvas:this.$canvas})}catch(i){if(!this._active)return;this._onDecodeError(i)}!L._disableBarcodeDetector||await this._qrEnginePromise instanceof Worker||(this._qrEnginePromise=L.createQrEngine()),r?(this._onDecode?this._onDecode(r):this._legacyOnDecode&&this._legacyOnDecode(r.data),this.$codeOutlineHighlight&&(clearTimeout(this._codeOutlineHighlightRemovalTimeout),this._codeOutlineHighlightRemovalTimeout=void 0,this.$codeOutlineHighlight.setAttribute("viewBox",`${this._scanRegion.x||0} ${this._scanRegion.y||0} ${this._scanRegion.width||this.$video.videoWidth} ${this._scanRegion.height||this.$video.videoHeight}`),this.$codeOutlineHighlight.firstElementChild.setAttribute("points",r.cornerPoints.map(({x:i,y:c})=>`${i},${c}`).join(" ")),this.$codeOutlineHighlight.style.display="")):this.$codeOutlineHighlight&&!this._codeOutlineHighlightRemovalTimeout&&(this._codeOutlineHighlightRemovalTimeout=setTimeout(()=>this.$codeOutlineHighlight.style.display="none",100))}this._scanFrame()})}_onDecodeError(e){e!==L.NO_QR_CODE_FOUND&&console.log(e)}async _getCameraStream(){if(!navigator.mediaDevices)throw"Camera not found.";let e=/^(environment|user)$/.test(this._preferredCamera)?"facingMode":"deviceId",t=[{width:{min:1024}},{width:{min:768}},{}],r=t.map(i=>Object.assign({},i,{[e]:{exact:this._preferredCamera}}));for(let i of[...r,...t])try{let c=await navigator.mediaDevices.getUserMedia({video:i,audio:!1}),l=this._getFacingMode(c)||(i.facingMode?this._preferredCamera:this._preferredCamera==="environment"?"user":"environment");return{stream:c,facingMode:l}}catch{}throw"Camera not found."}async _restartVideoStream(){let e=this._paused;await this.pause(!0)&&!e&&this._active&&await this.start()}static _stopVideoStream(e){for(let t of e.getTracks())t.stop(),e.removeTrack(t)}_setVideoMirror(e){this.$video.style.transform="scaleX("+(e==="user"?-1:1)+")"}_getFacingMode(e){return(e=e.getVideoTracks()[0])?/rear|back|environment/i.test(e.label)?"environment":/front|user|face/i.test(e.label)?"user":null:null}static _drawToCanvas(e,t,r,i=!1){r=r||document.createElement("canvas");let c=t&&t.x?t.x:0,l=t&&t.y?t.y:0,p=t&&t.width?t.width:e.videoWidth||e.width,_=t&&t.height?t.height:e.videoHeight||e.height;return i||(i=t&&t.downScaledWidth?t.downScaledWidth:p,t=t&&t.downScaledHeight?t.downScaledHeight:_,r.width!==i&&(r.width=i),r.height!==t&&(r.height=t)),t=r.getContext("2d",{alpha:!1}),t.imageSmoothingEnabled=!1,t.drawImage(e,c,l,p,_,0,0,r.width,r.height),[r,t]}static async _loadImage(e){if(e instanceof Image)return await L._awaitImageLoad(e),e;if(e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement||e instanceof SVGImageElement||"OffscreenCanvas"in window&&e instanceof OffscreenCanvas||"ImageBitmap"in window&&e instanceof ImageBitmap)return e;if(e instanceof File||e instanceof Blob||e instanceof URL||typeof e=="string"){let t=new Image;t.src=e instanceof File||e instanceof Blob?URL.createObjectURL(e):e.toString();try{return await L._awaitImageLoad(t),t}finally{(e instanceof File||e instanceof Blob)&&URL.revokeObjectURL(t.src)}}else throw"Unsupported image type."}static async _awaitImageLoad(e){e.complete&&e.naturalWidth!==0||await new Promise((t,r)=>{let i=c=>{e.removeEventListener("load",i),e.removeEventListener("error",i),c instanceof ErrorEvent?r("Image load error"):t()};e.addEventListener("load",i),e.addEventListener("error",i)})}static async _postWorkerMessage(e,t,r,i){return L._postWorkerMessageSync(await e,t,r,i)}static _postWorkerMessageSync(e,t,r,i){if(!(e instanceof Worker))return-1;let c=L._workerMessageId++;return e.postMessage({id:c,type:t,data:r},i),c}}L.DEFAULT_CANVAS_SIZE=400;L.NO_QR_CODE_FOUND="No QR code found";L._disableBarcodeDetector=!1;L._workerMessageId=0;L.WORKER_PATH=new URL("/assets/qr-scanner-worker.min-PJMWJc5V.js",import.meta.url).toString();const _c=to("video"),Ts=pe(({onResult:s})=>{Ts.updates(I=>{[{onResult:s}]=I,s=ae(s)}),s=ae(s);let e=null,t="Idle.",r="";const i=`qrPreview-${Math.random().toString(36).slice(2,9)}`,c=I=>{console.log("[qr] status:",I),t=I},l=()=>{e&&(console.log("[qr] stop"),e.stop(),e.destroy(),e=null,c("Camera stopped."))},p=no(I=>{console.log("[qr] decode result:",I),r=(I==null?void 0:I.data)||"",c("QR detected."),s(r)}),_=async()=>{try{console.log("[qr] start"),c("Requesting camera access...");const I=await new Promise((T,A)=>{let S=0;const C=()=>{const D=document.getElementById(i);if(D)return T(D);if(S+=1,S>30)return A(new Error("QR preview element not found"));requestAnimationFrame(C)};C()});console.log("[qr] preview element:",I),e=new L(I,p,{highlightScanRegion:!0,highlightCodeOutline:!0,preferredCamera:"environment"}),console.log("[qr] scanner created:",e),await e.start(),console.log("[qr] scanner started"),c("Scanning...")}catch(I){console.error("[qr] camera error:",I),c(`Camera error: ${I.message||I}`)}};return pe.onDestroy(()=>{l(),console.log("🔴 stop scanner")}),so(()=>{_()}),F({class:"qr-panel"},F({class:"qr-preview"},_c({id:i,playsInline:!0,muted:!0})),F({class:"qr-output"},le({class:"qr-label"},"QR Text"),ro({class:"qr-text"},()=>r||"(no scan yet)")),F({class:"qr-status"},()=>t))}),Wt=pe(({title:s,onClose:e,onApply:t,applyLabel:r,ScannerPanel:i})=>{Wt.updates(C=>{[{title:s,onClose:e,onApply:t,applyLabel:r,ScannerPanel:i}]=C,e=ae(e),t&&(t=ae(t)),typeof i!="function"&&(i=Ts)}),e=ae(e),t&&(t=ae(t)),typeof i!="function"&&(i=Ts);const c=`qr-modal-${Math.random().toString(36).slice(2,9)}`,l=()=>{const C=document.getElementById(c);C!=null&&C.close&&C.close()};let p="";const _=C=>{p=C||"",console.log("pendingText",p),t(p)},I=()=>{console.log(">>> pendingText",p),t&&t(p),l()};return sc({id:c,class:"qr-modal",open:!0,onClick:C=>{C.target.nodeName==="DIALOG"&&l()},onClose:()=>{e(),console.log("closed scanner")},onCancel:C=>{C!=null&&C.preventDefault&&C.preventDefault(),l(),console.log("cancel scanner")}},F({class:"qr-modal-card"},F({class:"qr-modal-header"},io({class:"qr-modal-title"},s),F({class:"qr-modal-actions"},C=>p&&te({type:"button",class:"qr-modal-apply",onClick:I},r||"Apply"),te({type:"button",class:"qr-modal-close","aria-label":"Close",onClick:()=>l()},"Close"))),F({class:"qr-modal-body"},C=>i({onResult:_}))))}),wc=to("video"),Ls=pe(({onResult:s})=>{Ls.updates(k=>{[{onResult:s}]=k,s=ae(s)}),s=ae(s);let e="Idle.",t="",r="",i=null,c=null,l=null;const p=`barcodePreview-${Math.random().toString(36).slice(2,9)}`,_=k=>{console.log("[barcode] status:",k),e=k},I=(k,O)=>{t=k,r=O||""},T=()=>{l&&(cancelAnimationFrame(l),l=null),c&&(c.getTracks().forEach(k=>k.stop()),c=null),i=null,_("Camera stopped.")},A=no(k=>{s(k)}),S=async k=>{if(!(!i||!c)){try{if(k.readyState>=HTMLMediaElement.HAVE_ENOUGH_DATA){const O=await i.detect(k);if(O.length>0){const[j]=O,$=j.rawValue||"",P=j.format||"";$&&A($),I($||"(no data)",P),_("Barcode detected.")}else _("Scanning...")}}catch(O){_(`Scan error: ${O.message||O}`)}l=requestAnimationFrame(()=>S(k))}},C=async()=>{if(!("BarcodeDetector"in window)){_("BarcodeDetector API is not supported in this browser.");return}try{_("Requesting camera access...");const k=await new Promise((O,j)=>{let $=0;const P=()=>{const x=document.getElementById(p);if(x)return O(x);if($+=1,$>30)return j(new Error("Barcode preview element not found"));requestAnimationFrame(P)};P()});i=new BarcodeDetector({formats:["code_128","code_39","code_93","ean_13","ean_8","itf","upc_a","upc_e","qr_code"]}),c=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}),k.srcObject=c,await k.play(),_("Scanning..."),S(k)}catch(k){console.error("[barcode] camera error:",k),_(`Camera error: ${k.message||k}`),T()}};pe.onDestroy(()=>{T(),console.log("🔴 stop barcode scanner")}),so(()=>{C()});const D=()=>t?r?`${t}

format: ${r}`:t:"";return F({class:"qr-panel"},F({class:"qr-preview"},wc({id:p,playsInline:!0,muted:!0})),F({class:"qr-output"},le({class:"qr-label"},"Barcode Data"),ro({class:"qr-text"},()=>D()||"(no scan yet)")),F({class:"qr-status"},()=>e))}),ho=["PETG","PLA","TPU"],uo=s=>/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(s),zt=(s,e,t)=>{s[e]=t},Ze=(s,e,{trim:t=!1}={})=>({onChange:r=>zt(s,e,t?r.target.value.trim():r.target.value),onKeyup:r=>zt(s,e,t?r.target.value.trim():r.target.value)}),ii=(s,e)=>({onChange:t=>zt(s,e,t.target.value)}),oi=(s,e)=>({onChange:t=>{var r;return zt(s,e,((r=t==null?void 0:t.target)==null?void 0:r.value)||"")}}),fo=pe((s,e,t)=>{fo.updates(p=>{[s,e,t]=p}),t=ae(t);let r=!1,i=!1;const c=p=>{const _=co(p||"");s.qr_search_data=_||p||"",r=!1,console.log("👉 APPLIED",p)},l=p=>{const _=lo(p||"");s.barcode_search_data=_||p||"",i=!1,console.log("👉 BARCODE APPLIED",p)};return F({class:"swatch-card"},p=>r&&Wt({title:"Scan QR for this spool",onClose:()=>r=!1,onApply:c,applyLabel:"Apply QR"}),p=>i&&Wt({title:"Scan barcode for this spool",onClose:()=>i=!1,onApply:l,applyLabel:"Apply barcode",ScannerPanel:Ls}),F({class:"edit-card-header"},le({class:"edit-card-title"},`Swatch ${s.number||"-"}`),te({type:"button",class:"edit-card-toggle",onClick:()=>t(e),"aria-label":"Stop editing swatch"},"Done")),ce("Number",ye({type:"number",value:()=>s.number??"",...ii(s,"number")})),F({class:"fields"},ce("Hex Color",F({class:"hex-input-row"},ye({type:"color",value:()=>uo(s.hex)?s.hex:"#000000",style:"width:56px; min-width:56px; padding:0; height:42px;",onChange:p=>zt(s,"hex",p.target.value.trim())}),ye({value:()=>s.hex??"",style:"flex:1;",...Ze(s,"hex",{trim:!0})}))),ce("Spool Inventory",ye({type:"number",value:()=>s.spool_inventory??"",...ii(s,"spool_inventory")})),ce("Label",ye({value:()=>s.label??"",...Ze(s,"label")})),ce("Manufacturer",Pn.value(()=>s.manufacturer??"")({...oi(s,"manufacturer")},$e.value``("Select manufacturer"),...oo.map(p=>$e.value(p)(p)))),ce("Material Type",Pn.value(()=>s.material_type??"")({...oi(s,"material_type")},$e({value:""},"Select material"),...ho.map(p=>$e({value:p},p)))),ce("Color name",ye({value:()=>s.color_name??"",...Ze(s,"color_name")})),ce("Swatch code",ye({value:()=>s.swatch_code??"",...Ze(s,"swatch_code")})),ce("QR Search Data",F({class:"qr-input-row"},ye({class:"qr-edit-input",value:()=>s.qr_search_data??"",...Ze(s,"qr_search_data")}),te({type:"button",class:"qr-scan-button",onClick:()=>r=!0},"Scan QR"))),ce("Bar Code",F({class:"qr-input-row"},ye({class:"qr-edit-input",value:()=>s.barcode_search_data??"",...Ze(s,"barcode_search_data")}),te({type:"button",class:"qr-scan-button",onClick:()=>i=!0},"Scan barcode"))),ce("URL",ye({type:"url",value:()=>s.url??"",...Ze(s,"url")}))))}),po=pe((s,e,t)=>(po.updates(r=>{[s,e,t]=r}),t=ae(t),F({class:"summary-row"},F(()=>s.number||"-"),F({class:"summary-swatch"},F({class:"summary-chip","style.background":()=>uo(s.hex)?s.hex:""}),le({class:"summary-swatch-name"},()=>s.color_name||"Unnamed")),F({class:"summary-details"},F({class:"summary-title-row"},Es(()=>s.label||"Untitled"),te({type:"button",class:"summary-edit-button",onClick:()=>t(e),"aria-label":"Edit swatch"},"✏️")),()=>{const r=[];return s.manufacturer&&r.push(le({class:"summary-meta-item"},`Maker: ${s.manufacturer}`)),s.swatch_code&&r.push(le({class:"summary-meta-item"},`Code: ${s.swatch_code}`)),s.hex&&r.push(le({class:"summary-meta-item"},`Hex: ${s.hex}`)),s.spool_inventory!==void 0&&s.spool_inventory!==""&&r.push(le({class:"summary-meta-item"},`Spool Inventory: ${s.spool_inventory}`)),s.url&&r.push(le({class:"summary-meta-item"},Ss({href:s.url,target:"_blank",rel:"noopener noreferrer"},s.url))),r.length?F({class:"summary-meta"},...r):""})))),go=pe((s,e,t,r,i)=>(go.updates(c=>{[s,e,t,r,i]=c,i=ae(i)}),i=ae(i),rc(c=>t||r===e?fo(s,e,i):po(s,e,i))));let et="summary",He=!1,Gt=null;const vc=s=>{He&&(He=!1),Gt=Gt===s?null:s},ai=s=>{et=s},Ic=()=>{He=!He,He&&(Gt=null)},Ec=s=>{He=!1,Gt=s},mo=pe((s,e,t)=>{mo.updates(P=>{[s,e,t]=P});let r=!1,i=!1,c="",l="",p="",_="",I="",T="";const A=P=>{c=P||"",l=co(c),r=!1,console.log("app apply",P)},S=P=>P?P.trim():"",C=P=>{p=S(P),_=lo(p)||p,i=!1,console.log("app barcode apply",P)},D=P=>!I||(P.manufacturer||"").toLowerCase()===I.toLowerCase(),k=P=>!T||(P.material_type||"").toLowerCase()===T.toLowerCase(),O=P=>!l||dc([P],l).length>0,j=P=>!_||pc([P],_).length>0,$=()=>s.reduce((P,x,ne)=>(O(x)&&j(x)&&D(x)&&k(x)&&P.push({item:x,index:ne}),P),[]);return[si.class`panel`(F.class`meta`(F.class`controls`(F({class:"toggle",role:"tablist","aria-label":"View toggle"},te({id:"summaryViewButton",class:()=>et==="summary"?"active":"",role:"tab",type:"button",onClick:()=>ai("summary")},"Summary"),te({id:"jsonViewButton",class:()=>et==="json"?"active":"",role:"tab",type:"button",onClick:()=>ai("json")},"JSON")),te({id:"editAllButton",class:"add-button",type:"button",onClick:Ic},()=>He?"Exit edit all":"Edit all"),te({id:"addSwatchButton",class:"add-button",type:"button",onClick:e},"+ Add swatch"),te({id:"qrSearchButton",class:"add-button",type:"button",onClick:()=>r=!0},"Search by QR read"),te({id:"barcodeSearchButton",class:"add-button",type:"button",onClick:()=>i=!0},"Search by barcode read"),Pn({value:()=>I??"",onChange:P=>{var x;return I=((x=P==null?void 0:P.target)==null?void 0:x.value)||""}},$e({value:""},"Filter by manufacturer"),...oo.map(P=>$e({value:P},P))),Pn({value:()=>T??"",onChange:P=>{var x;return T=((x=P==null?void 0:P.target)==null?void 0:x.value)||""}},$e({value:""},"Filter by material type"),...ho.map(P=>$e({value:P},P))),F.id`count`(P=>`${s.length} swatches`))),P=>r&&Wt({title:"Search by QR read",onClose:()=>{r=!1,console.log("showQrScanner",r)},onApply:A,applyLabel:"Apply QR"}),P=>i&&Wt({title:"Search by barcode read",onClose:()=>i=!1,onApply:C,applyLabel:"Apply barcode",ScannerPanel:Ls}),F({class:"qr-search-pill",hidden:()=>et!=="summary"||!c},le.class`qr-label`("Active QR search"),Es.class`qr-value`(()=>c||"(empty)"),te({type:"button",class:"qr-clear-button",onClick:()=>{c="",l=""}},"Clear search")),F({class:"qr-search-pill",hidden:()=>et!=="summary"||!p},le.class`qr-label`("Active barcode search"),Es.class`qr-value`(()=>p||"(empty)"),te({type:"button",class:"qr-clear-button",onClick:()=>{p="",_=""}},"Clear search")),F.id`summaryList`.class`summary-list`({hidden:()=>et!=="summary"},P=>$().map(({item:x,index:ne})=>go(x,ne,He,Gt,vc).key(x.number||ne)))),si.class`panel`({id:"jsonPanel",hidden:()=>et!=="json"},io.class`output-title`("JSON output"),ic({id:"jsonOutput",spellcheck:"false",readOnly:!0,value:()=>JSON.stringify(t(),null,2)}))]}),Sc=()=>{};var ci={};/**
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
 */const yo=function(s){const e=[];let t=0;for(let r=0;r<s.length;r++){let i=s.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(s.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Tc=function(s){const e=[];let t=0,r=0;for(;t<s.length;){const i=s[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const c=s[t++];e[r++]=String.fromCharCode((i&31)<<6|c&63)}else if(i>239&&i<365){const c=s[t++],l=s[t++],p=s[t++],_=((i&7)<<18|(c&63)<<12|(l&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const c=s[t++],l=s[t++];e[r++]=String.fromCharCode((i&15)<<12|(c&63)<<6|l&63)}}return e.join("")},_o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<s.length;i+=3){const c=s[i],l=i+1<s.length,p=l?s[i+1]:0,_=i+2<s.length,I=_?s[i+2]:0,T=c>>2,A=(c&3)<<4|p>>4;let S=(p&15)<<2|I>>6,C=I&63;_||(C=64,l||(S=64)),r.push(t[T],t[A],t[S],t[C])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(yo(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Tc(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<s.length;){const c=t[s.charAt(i++)],p=i<s.length?t[s.charAt(i)]:0;++i;const I=i<s.length?t[s.charAt(i)]:64;++i;const A=i<s.length?t[s.charAt(i)]:64;if(++i,c==null||p==null||I==null||A==null)throw new bc;const S=c<<2|p>>4;if(r.push(S),I!==64){const C=p<<4&240|I>>2;if(r.push(C),A!==64){const D=I<<6&192|A;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class bc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ac=function(s){const e=yo(s);return _o.encodeByteArray(e,!0)},kn=function(s){return Ac(s).replace(/\./g,"")},wo=function(s){try{return _o.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pc=()=>Cc().__FIREBASE_DEFAULTS__,kc=()=>{if(typeof process>"u"||typeof ci>"u")return;const s=ci.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Rc=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&wo(s[1]);return e&&JSON.parse(e)},Ms=()=>{try{return Sc()||Pc()||kc()||Rc()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},vo=s=>{var e,t;return(t=(e=Ms())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Oc=s=>{const e=vo(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Io=()=>{var s;return(s=Ms())==null?void 0:s.config},Eo=s=>{var e;return(e=Ms())==null?void 0:e[`_${s}`]};/**
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
 */class Dc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Qt(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function So(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function Nc(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...s};return[kn(JSON.stringify(t)),kn(JSON.stringify(l)),""].join(".")}const Bt={};function Lc(){const s={prod:[],emulator:[]};for(const e of Object.keys(Bt))Bt[e]?s.emulator.push(e):s.prod.push(e);return s}function Mc(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let li=!1;function To(s,e){if(typeof window>"u"||typeof document>"u"||!Qt(window.location.host)||Bt[s]===e||Bt[s]||li)return;Bt[s]=e;function t(S){return`__firebase__banner__${S}`}const r="__firebase__banner",c=Lc().prod.length>0;function l(){const S=document.getElementById(r);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function _(S,C){S.setAttribute("width","24"),S.setAttribute("id",C),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function I(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{li=!0,l()},S}function T(S,C){S.setAttribute("id",C),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function A(){const S=Mc(r),C=t("text"),D=document.getElementById(C)||document.createElement("span"),k=t("learnmore"),O=document.getElementById(k)||document.createElement("a"),j=t("preprendIcon"),$=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const P=S.element;p(P),T(O,k);const x=I();_($,j),P.append($,D,O,x),document.body.appendChild(P)}c?(D.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function xc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vc(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Fc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bc(){const s=Z();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function jc(){try{return typeof indexedDB=="object"}catch{return!1}}function $c(){return new Promise((s,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),s(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var c;e(((c=i.error)==null?void 0:c.message)||"")}}catch(t){e(t)}})}/**
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
 */const Hc="FirebaseError";class Re extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hc,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}}class Zt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,c=this.errors[e],l=c?qc(c,r):"Error",p=`${this.serviceName}: ${l} (${i}).`;return new Re(i,p,r)}}function qc(s,e){return s.replace(Wc,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Wc=/\{\$([^}]+)}/g;function zc(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function at(s,e){if(s===e)return!0;const t=Object.keys(s),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const c=s[i],l=e[i];if(hi(c)&&hi(l)){if(!at(c,l))return!1}else if(c!==l)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function hi(s){return s!==null&&typeof s=="object"}/**
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
 */function en(s){const e=[];for(const[t,r]of Object.entries(s))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gc(s,e){const t=new Kc(s,e);return t.subscribe.bind(t)}class Kc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Jc(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=fs),i.error===void 0&&(i.error=fs),i.complete===void 0&&(i.complete=fs);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jc(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function fs(){}/**
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
 */function Oe(s){return s&&s._delegate?s._delegate:s}class ct{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tt="[DEFAULT]";/**
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
 */class Xc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Dc;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qc(e))try{this.getOrInitializeService({instanceIdentifier:tt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:i});r.resolve(c)}catch{}}}}clearInstance(e=tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tt){return this.instances.has(e)}getOptions(e=tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[c,l]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);r===p&&l.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const c=this.instances.get(r);return c&&e(c,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yc(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tt){return this.component?this.component.multipleInstances?e:tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yc(s){return s===tt?void 0:s}function Qc(s){return s.instantiationMode==="EAGER"}/**
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
 */class Zc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(B||(B={}));const el={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},tl=B.INFO,nl={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},sl=(s,e,...t)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),i=nl[e];if(i)console[i](`[${r}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Us{constructor(e){this.name=e,this._logLevel=tl,this._logHandler=sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?el[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const rl=(s,e)=>e.some(t=>s instanceof t);let ui,di;function il(){return ui||(ui=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ol(){return di||(di=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bo=new WeakMap,bs=new WeakMap,Ao=new WeakMap,ps=new WeakMap,xs=new WeakMap;function al(s){const e=new Promise((t,r)=>{const i=()=>{s.removeEventListener("success",c),s.removeEventListener("error",l)},c=()=>{t(qe(s.result)),i()},l=()=>{r(s.error),i()};s.addEventListener("success",c),s.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&bo.set(t,s)}).catch(()=>{}),xs.set(e,s),e}function cl(s){if(bs.has(s))return;const e=new Promise((t,r)=>{const i=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",l),s.removeEventListener("abort",l)},c=()=>{t(),i()},l=()=>{r(s.error||new DOMException("AbortError","AbortError")),i()};s.addEventListener("complete",c),s.addEventListener("error",l),s.addEventListener("abort",l)});bs.set(s,e)}let As={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return bs.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Ao.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qe(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function ll(s){As=s(As)}function hl(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=s.call(gs(this),e,...t);return Ao.set(r,e.sort?e.sort():[e]),qe(r)}:ol().includes(s)?function(...e){return s.apply(gs(this),e),qe(bo.get(this))}:function(...e){return qe(s.apply(gs(this),e))}}function ul(s){return typeof s=="function"?hl(s):(s instanceof IDBTransaction&&cl(s),rl(s,il())?new Proxy(s,As):s)}function qe(s){if(s instanceof IDBRequest)return al(s);if(ps.has(s))return ps.get(s);const e=ul(s);return e!==s&&(ps.set(s,e),xs.set(e,s)),e}const gs=s=>xs.get(s);function dl(s,e,{blocked:t,upgrade:r,blocking:i,terminated:c}={}){const l=indexedDB.open(s,e),p=qe(l);return r&&l.addEventListener("upgradeneeded",_=>{r(qe(l.result),_.oldVersion,_.newVersion,qe(l.transaction),_)}),t&&l.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{c&&_.addEventListener("close",()=>c()),i&&_.addEventListener("versionchange",I=>i(I.oldVersion,I.newVersion,I))}).catch(()=>{}),p}const fl=["get","getKey","getAll","getAllKeys","count"],pl=["put","add","delete","clear"],ms=new Map;function fi(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(ms.get(e))return ms.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=pl.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fl.includes(t)))return;const c=async function(l,...p){const _=this.transaction(l,i?"readwrite":"readonly");let I=_.store;return r&&(I=I.index(p.shift())),(await Promise.all([I[t](...p),i&&_.done]))[0]};return ms.set(e,c),c}ll(s=>({...s,get:(e,t,r)=>fi(e,t)||s.get(e,t,r),has:(e,t)=>!!fi(e,t)||s.has(e,t)}));/**
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
 */class gl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ml(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ml(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cs="@firebase/app",pi="0.14.6";/**
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
 */const Pe=new Us("@firebase/app"),yl="@firebase/app-compat",_l="@firebase/analytics-compat",wl="@firebase/analytics",vl="@firebase/app-check-compat",Il="@firebase/app-check",El="@firebase/auth",Sl="@firebase/auth-compat",Tl="@firebase/database",bl="@firebase/data-connect",Al="@firebase/database-compat",Cl="@firebase/functions",Pl="@firebase/functions-compat",kl="@firebase/installations",Rl="@firebase/installations-compat",Ol="@firebase/messaging",Dl="@firebase/messaging-compat",Nl="@firebase/performance",Ll="@firebase/performance-compat",Ml="@firebase/remote-config",Ul="@firebase/remote-config-compat",xl="@firebase/storage",Vl="@firebase/storage-compat",Fl="@firebase/firestore",Bl="@firebase/ai",jl="@firebase/firestore-compat",$l="firebase",Hl="12.6.0";/**
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
 */const Ps="[DEFAULT]",ql={[Cs]:"fire-core",[yl]:"fire-core-compat",[wl]:"fire-analytics",[_l]:"fire-analytics-compat",[Il]:"fire-app-check",[vl]:"fire-app-check-compat",[El]:"fire-auth",[Sl]:"fire-auth-compat",[Tl]:"fire-rtdb",[bl]:"fire-data-connect",[Al]:"fire-rtdb-compat",[Cl]:"fire-fn",[Pl]:"fire-fn-compat",[kl]:"fire-iid",[Rl]:"fire-iid-compat",[Ol]:"fire-fcm",[Dl]:"fire-fcm-compat",[Nl]:"fire-perf",[Ll]:"fire-perf-compat",[Ml]:"fire-rc",[Ul]:"fire-rc-compat",[xl]:"fire-gcs",[Vl]:"fire-gcs-compat",[Fl]:"fire-fst",[jl]:"fire-fst-compat",[Bl]:"fire-vertex","fire-js":"fire-js",[$l]:"fire-js-all"};/**
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
 */const Rn=new Map,Wl=new Map,ks=new Map;function gi(s,e){try{s.container.addComponent(e)}catch(t){Pe.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function wt(s){const e=s.name;if(ks.has(e))return Pe.debug(`There were multiple attempts to register component ${e}.`),!1;ks.set(e,s);for(const t of Rn.values())gi(t,s);for(const t of Wl.values())gi(t,s);return!0}function Vs(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function he(s){return s==null?!1:s.settings!==void 0}/**
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
 */const zl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},We=new Zt("app","Firebase",zl);/**
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
 */class Gl{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
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
 */const Et=Hl;function Co(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const r={name:Ps,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw We.create("bad-app-name",{appName:String(i)});if(t||(t=Io()),!t)throw We.create("no-options");const c=Rn.get(i);if(c){if(at(t,c.options)&&at(r,c.config))return c;throw We.create("duplicate-app",{appName:i})}const l=new Zc(i);for(const _ of ks.values())l.addComponent(_);const p=new Gl(t,r,l);return Rn.set(i,p),p}function Po(s=Ps){const e=Rn.get(s);if(!e&&s===Ps&&Io())return Co();if(!e)throw We.create("no-app",{appName:s});return e}function ze(s,e,t){let r=ql[s]??s;t&&(r+=`-${t}`);const i=r.match(/\s|\//),c=e.match(/\s|\//);if(i||c){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pe.warn(l.join(" "));return}wt(new ct(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Kl="firebase-heartbeat-database",Jl=1,Kt="firebase-heartbeat-store";let ys=null;function ko(){return ys||(ys=dl(Kl,Jl,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Kt)}catch(t){console.warn(t)}}}}).catch(s=>{throw We.create("idb-open",{originalErrorMessage:s.message})})),ys}async function Xl(s){try{const t=(await ko()).transaction(Kt),r=await t.objectStore(Kt).get(Ro(s));return await t.done,r}catch(e){if(e instanceof Re)Pe.warn(e.message);else{const t=We.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pe.warn(t.message)}}}async function mi(s,e){try{const r=(await ko()).transaction(Kt,"readwrite");await r.objectStore(Kt).put(e,Ro(s)),await r.done}catch(t){if(t instanceof Re)Pe.warn(t.message);else{const r=We.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pe.warn(r.message)}}}function Ro(s){return`${s.name}!${s.options.appId}`}/**
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
 */const Yl=1024,Ql=30;class Zl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new th(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=yi();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:i}),this._heartbeatsCache.heartbeats.length>Ql){const l=nh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yi(),{heartbeatsToSend:r,unsentEntries:i}=eh(this._heartbeatsCache.heartbeats),c=kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(t){return Pe.warn(t),""}}}function yi(){return new Date().toISOString().substring(0,10)}function eh(s,e=Yl){const t=[];let r=s.slice();for(const i of s){const c=t.find(l=>l.agent===i.agent);if(c){if(c.dates.push(i.date),_i(t)>e){c.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),_i(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class th{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jc()?$c().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Xl(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _i(s){return kn(JSON.stringify({version:2,heartbeats:s})).length}function nh(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let r=1;r<s.length;r++)s[r].date<t&&(t=s[r].date,e=r);return e}/**
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
 */function sh(s){wt(new ct("platform-logger",e=>new gl(e),"PRIVATE")),wt(new ct("heartbeat",e=>new Zl(e),"PRIVATE")),ze(Cs,pi,s),ze(Cs,pi,"esm2020"),ze("fire-js","")}sh("");var rh="firebase",ih="12.7.0";/**
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
 */ze(rh,ih,"app");function Oo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oh=Oo,Do=new Zt("auth","Firebase",Oo());/**
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
 */const On=new Us("@firebase/auth");function ah(s,...e){On.logLevel<=B.WARN&&On.warn(`Auth (${Et}): ${s}`,...e)}function Sn(s,...e){On.logLevel<=B.ERROR&&On.error(`Auth (${Et}): ${s}`,...e)}/**
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
 */function Ee(s,...e){throw Bs(s,...e)}function fe(s,...e){return Bs(s,...e)}function Fs(s,e,t){const r={...oh(),[e]:t};return new Zt("auth","Firebase",r).create(e,{appName:s.name})}function rt(s){return Fs(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ch(s,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ee(s,"argument-error"),Fs(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bs(s,...e){if(typeof s!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(t,...r)}return Do.create(s,...e)}function R(s,e,...t){if(!s)throw Bs(e,...t)}function be(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Sn(e),new Error(e)}function ke(s,e){s||be(e)}/**
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
 */function Rs(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function lh(){return wi()==="http:"||wi()==="https:"}function wi(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
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
 */function hh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lh()||Vc()||"connection"in navigator)?navigator.onLine:!0}function uh(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class tn{constructor(e,t){this.shortDelay=e,this.longDelay=t,ke(t>e,"Short delay should be less than long delay!"),this.isMobile=Uc()||Fc()}get(){return hh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function js(s,e){ke(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class No{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ph=new tn(3e4,6e4);function $s(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function St(s,e,t,r,i={}){return Lo(s,i,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const p=en({key:s.config.apiKey,...l}).slice(1),_=await s._getAdditionalHeaders();_["Content-Type"]="application/json",s.languageCode&&(_["X-Firebase-Locale"]=s.languageCode);const I={method:e,headers:_,...c};return xc()||(I.referrerPolicy="no-referrer"),s.emulatorConfig&&Qt(s.emulatorConfig.host)&&(I.credentials="include"),No.fetch()(await Mo(s,s.config.apiHost,t,p),I)})}async function Lo(s,e,t){s._canInitEmulator=!1;const r={...dh,...e};try{const i=new mh(s),c=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw vn(s,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const p=c.ok?l.errorMessage:l.error.message,[_,I]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw vn(s,"credential-already-in-use",l);if(_==="EMAIL_EXISTS")throw vn(s,"email-already-in-use",l);if(_==="USER_DISABLED")throw vn(s,"user-disabled",l);const T=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(I)throw Fs(s,T,I);Ee(s,T)}}catch(i){if(i instanceof Re)throw i;Ee(s,"network-request-failed",{message:String(i)})}}async function gh(s,e,t,r,i={}){const c=await St(s,e,t,r,i);return"mfaPendingCredential"in c&&Ee(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function Mo(s,e,t,r){const i=`${e}${t}?${r}`,c=s,l=c.config.emulator?js(s.config,i):`${s.config.apiScheme}://${i}`;return fh.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}class mh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(fe(this.auth,"network-request-failed")),ph.get())})}}function vn(s,e,t){const r={appName:s.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=fe(s,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function yh(s,e){return St(s,"POST","/v1/accounts:delete",e)}async function Dn(s,e){return St(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function jt(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _h(s,e=!1){const t=Oe(s),r=await t.getIdToken(e),i=Hs(r);R(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const c=typeof i.firebase=="object"?i.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:i,token:r,authTime:jt(_s(i.auth_time)),issuedAtTime:jt(_s(i.iat)),expirationTime:jt(_s(i.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function _s(s){return Number(s)*1e3}function Hs(s){const[e,t,r]=s.split(".");if(e===void 0||t===void 0||r===void 0)return Sn("JWT malformed, contained fewer than 3 sections"),null;try{const i=wo(t);return i?JSON.parse(i):(Sn("Failed to decode base64 JWT payload"),null)}catch(i){return Sn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vi(s){const e=Hs(s);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jt(s,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Re&&wh(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function wh({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class vh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Os{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jt(this.lastLoginAt),this.creationTime=jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nn(s){var A;const e=s.auth,t=await s.getIdToken(),r=await Jt(s,Dn(e,{idToken:t}));R(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];s._notifyReloadListener(i);const c=(A=i.providerUserInfo)!=null&&A.length?Uo(i.providerUserInfo):[],l=Eh(s.providerData,c),p=s.isAnonymous,_=!(s.email&&i.passwordHash)&&!(l!=null&&l.length),I=p?_:!1,T={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Os(i.createdAt,i.lastLoginAt),isAnonymous:I};Object.assign(s,T)}async function Ih(s){const e=Oe(s);await Nn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Eh(s,e){return[...s.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Uo(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Sh(s,e){const t=await Lo(s,{},async()=>{const r=en({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:c}=s.config,l=await Mo(s,i,"/v1/token",`key=${c}`),p=await s._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return s.emulatorConfig&&Qt(s.emulatorConfig.host)&&(_.credentials="include"),No.fetch()(l,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Th(s,e){return St(s,"POST","/v2/accounts:revokeToken",$s(s,e))}/**
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
 */class gt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){R(e.length!==0,"internal-error");const t=vi(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:c}=await Sh(e,t);this.updateTokensAndExpiration(r,i,Number(c))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:c}=t,l=new gt;return r&&(R(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),c&&(R(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gt,this.toJSON())}_performRefresh(){return be("not implemented")}}/**
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
 */function Ve(s,e){R(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class ue{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new vh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Os(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Jt(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _h(this,e)}reload(){return Ih(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Nn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(he(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await Jt(this,yh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,c=t.phoneNumber??void 0,l=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,I=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:A,emailVerified:S,isAnonymous:C,providerData:D,stsTokenManager:k}=t;R(A&&k,e,"internal-error");const O=gt.fromJSON(this.name,k);R(typeof A=="string",e,"internal-error"),Ve(r,e.name),Ve(i,e.name),R(typeof S=="boolean",e,"internal-error"),R(typeof C=="boolean",e,"internal-error"),Ve(c,e.name),Ve(l,e.name),Ve(p,e.name),Ve(_,e.name),Ve(I,e.name),Ve(T,e.name);const j=new ue({uid:A,auth:e,email:i,emailVerified:S,displayName:r,isAnonymous:C,photoURL:l,phoneNumber:c,tenantId:p,stsTokenManager:O,createdAt:I,lastLoginAt:T});return D&&Array.isArray(D)&&(j.providerData=D.map($=>({...$}))),_&&(j._redirectEventId=_),j}static async _fromIdTokenResponse(e,t,r=!1){const i=new gt;i.updateFromServerResponse(t);const c=new ue({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nn(c),c}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];R(i.localId!==void 0,"internal-error");const c=i.providerUserInfo!==void 0?Uo(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(c!=null&&c.length),p=new gt;p.updateFromIdToken(r);const _=new ue({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:l}),I={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Os(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(c!=null&&c.length)};return Object.assign(_,I),_}}/**
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
 */const Ii=new Map;function Ae(s){ke(s instanceof Function,"Expected a class definition");let e=Ii.get(s);return e?(ke(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Ii.set(s,e),e)}/**
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
 */class xo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xo.type="NONE";const Ei=xo;/**
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
 */function Tn(s,e,t){return`firebase:${s}:${e}:${t}`}class mt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:c}=this.auth;this.fullUserKey=Tn(this.userKey,i.apiKey,c),this.fullPersistenceKey=Tn("persistence",i.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Dn(this.auth,{idToken:e}).catch(()=>{});return t?ue._fromGetAccountInfoResponse(this.auth,t,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new mt(Ae(Ei),e,r);const i=(await Promise.all(t.map(async I=>{if(await I._isAvailable())return I}))).filter(I=>I);let c=i[0]||Ae(Ei);const l=Tn(r,e.config.apiKey,e.name);let p=null;for(const I of t)try{const T=await I._get(l);if(T){let A;if(typeof T=="string"){const S=await Dn(e,{idToken:T}).catch(()=>{});if(!S)break;A=await ue._fromGetAccountInfoResponse(e,S,T)}else A=ue._fromJSON(e,T);I!==c&&(p=A),c=I;break}}catch{}const _=i.filter(I=>I._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new mt(c,e,r):(c=_[0],p&&await c._set(l,p.toJSON()),await Promise.all(t.map(async I=>{if(I!==c)try{await I._remove(l)}catch{}})),new mt(c,e,r))}}/**
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
 */function Si(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ho(e))return"Blackberry";if(qo(e))return"Webos";if(Fo(e))return"Safari";if((e.includes("chrome/")||Bo(e))&&!e.includes("edge/"))return"Chrome";if($o(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vo(s=Z()){return/firefox\//i.test(s)}function Fo(s=Z()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bo(s=Z()){return/crios\//i.test(s)}function jo(s=Z()){return/iemobile/i.test(s)}function $o(s=Z()){return/android/i.test(s)}function Ho(s=Z()){return/blackberry/i.test(s)}function qo(s=Z()){return/webos/i.test(s)}function qs(s=Z()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function bh(s=Z()){var e;return qs(s)&&!!((e=window.navigator)!=null&&e.standalone)}function Ah(){return Bc()&&document.documentMode===10}function Wo(s=Z()){return qs(s)||$o(s)||qo(s)||Ho(s)||/windows phone/i.test(s)||jo(s)}/**
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
 */function zo(s,e=[]){let t;switch(s){case"Browser":t=Si(Z());break;case"Worker":t=`${Si(Z())}-${s}`;break;default:t=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Et}/${r}`}/**
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
 */class Ch{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=c=>new Promise((l,p)=>{try{const _=e(c);l(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ph(s,e={}){return St(s,"GET","/v2/passwordPolicy",$s(s,e))}/**
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
 */const kh=6;class Rh{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??kh,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Oh{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ti(this),this.idTokenSubscription=new Ti(this),this.beforeStateQueue=new Ch(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Do,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ae(t)),this._initializationPromise=this.queue(async()=>{var r,i,c;if(!this._deleted&&(this.persistenceManager=await mt.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Dn(this,{idToken:e}),r=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if(he(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(p,p))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(c=this.redirectUser)==null?void 0:c._redirectEventId,p=r==null?void 0:r._redirectEventId,_=await this.tryRedirectSignIn(e);(!l||l===p)&&(_!=null&&_.user)&&(r=_.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Nn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(he(this.app))return Promise.reject(rt(this));const t=e?Oe(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return he(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return he(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ph(this),t=new Rh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Th(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ae(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await mt.create(this,[Ae(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let l=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(p,this,"internal-error"),p.then(()=>{l||c(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{l=!0,_()}}else{const _=e.addObserver(t);return()=>{l=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(he(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ah(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Vn(s){return Oe(s)}class Ti{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gc(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dh(s){Ws=s}function Nh(s){return Ws.loadJS(s)}function Lh(){return Ws.gapiScript}function Mh(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Uh(s,e){const t=Vs(s,"auth");if(t.isInitialized()){const i=t.getImmediate(),c=t.getOptions();if(at(c,e??{}))return i;Ee(i,"already-initialized")}return t.initialize({options:e})}function xh(s,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ae);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Vh(s,e,t){const r=Vn(s);R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,c=Go(e),{host:l,port:p}=Fh(e),_=p===null?"":`:${p}`,I={url:`${c}//${l}${_}/`},T=Object.freeze({host:l,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){R(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),R(at(I,r.config.emulator)&&at(T,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=I,r.emulatorConfig=T,r.settings.appVerificationDisabledForTesting=!0,Qt(l)?(So(`${c}//${l}${_}`),To("Auth",!0)):Bh()}function Go(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function Fh(s){const e=Go(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const c=i[1];return{host:c,port:bi(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:bi(l)}}}function bi(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function Bh(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class Ko{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return be("not implemented")}_getIdTokenResponse(e){return be("not implemented")}_linkToIdToken(e,t){return be("not implemented")}_getReauthenticationResolver(e){return be("not implemented")}}/**
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
 */async function yt(s,e){return gh(s,"POST","/v1/accounts:signInWithIdp",$s(s,e))}/**
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
 */const jh="http://localhost";class lt extends Ko{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ee("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...c}=t;if(!r||!i)return null;const l=new lt(r,i);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return yt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,yt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yt(e,t)}buildRequest(){const e={requestUri:jh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=en(t)}return e}}/**
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
 */class zs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nn extends zs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fe extends nn{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fe.PROVIDER_ID="facebook.com";/**
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
 */class Se extends nn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lt._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Se.credential(t,r)}catch{return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com";Se.PROVIDER_ID="google.com";/**
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
 */class Be extends nn{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Be.credential(e.oauthAccessToken)}catch{return null}}}Be.GITHUB_SIGN_IN_METHOD="github.com";Be.PROVIDER_ID="github.com";/**
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
 */class je extends nn{constructor(){super("twitter.com")}static credential(e,t){return lt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return je.credential(t,r)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com";je.PROVIDER_ID="twitter.com";/**
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
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const c=await ue._fromIdTokenResponse(e,r,i),l=Ai(r);return new vt({user:c,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ai(r);return new vt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ai(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Ln extends Re{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ln.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ln(e,t,r,i)}}function Jo(s,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Ln._fromErrorAndOperation(s,c,e,r):c})}async function $h(s,e,t=!1){const r=await Jt(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return vt._forOperation(s,"link",r)}/**
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
 */async function Hh(s,e,t=!1){const{auth:r}=s;if(he(r.app))return Promise.reject(rt(r));const i="reauthenticate";try{const c=await Jt(s,Jo(r,i,e,s),t);R(c.idToken,r,"internal-error");const l=Hs(c.idToken);R(l,r,"internal-error");const{sub:p}=l;return R(s.uid===p,r,"user-mismatch"),vt._forOperation(s,i,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Ee(r,"user-mismatch"),c}}/**
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
 */async function qh(s,e,t=!1){if(he(s.app))return Promise.reject(rt(s));const r="signIn",i=await Jo(s,r,e),c=await vt._fromIdTokenResponse(s,r,i);return t||await s._updateCurrentUser(c.user),c}function Wh(s,e,t,r){return Oe(s).onIdTokenChanged(e,t,r)}function zh(s,e,t){return Oe(s).beforeAuthStateChanged(e,t)}function Gh(s,e,t,r){return Oe(s).onAuthStateChanged(e,t,r)}function Kh(s){return Oe(s).signOut()}const Mn="__sak";/**
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
 */class Xo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mn,"1"),this.storage.removeItem(Mn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Jh=1e3,Xh=10;class Yo extends Xo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,p,_)=>{this.notifyListeners(l,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);Ah()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Xh):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Jh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yo.type="LOCAL";const Yh=Yo;/**
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
 */class Qo extends Xo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qo.type="SESSION";const Zo=Qo;/**
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
 */function Qh(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Fn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Fn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:c}=t.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(l).map(async I=>I(t.origin,c)),_=await Qh(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fn.receivers=[];/**
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
 */function Gs(s="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class Zh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let c,l;return new Promise((p,_)=>{const I=Gs("",20);i.port1.start();const T=setTimeout(()=>{_(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(A){const S=A;if(S.data.eventId===I)switch(S.data.status){case"ack":clearTimeout(T),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(S.data.response);break;default:clearTimeout(T),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:I,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function Ie(){return window}function eu(s){Ie().location.href=s}/**
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
 */function ea(){return typeof Ie().WorkerGlobalScope<"u"&&typeof Ie().importScripts=="function"}async function tu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nu(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function su(){return ea()?self:null}/**
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
 */const ta="firebaseLocalStorageDb",ru=1,Un="firebaseLocalStorage",na="fbase_key";class sn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bn(s,e){return s.transaction([Un],e?"readwrite":"readonly").objectStore(Un)}function iu(){const s=indexedDB.deleteDatabase(ta);return new sn(s).toPromise()}function Ds(){const s=indexedDB.open(ta,ru);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Un,{keyPath:na})}catch(i){t(i)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Un)?e(r):(r.close(),await iu(),e(await Ds()))})})}async function Ci(s,e,t){const r=Bn(s,!0).put({[na]:e,value:t});return new sn(r).toPromise()}async function ou(s,e){const t=Bn(s,!1).get(e),r=await new sn(t).toPromise();return r===void 0?null:r.value}function Pi(s,e){const t=Bn(s,!0).delete(e);return new sn(t).toPromise()}const au=800,cu=3;class sa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ds(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>cu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ea()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fn._getInstance(su()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await tu(),!this.activeServiceWorker)return;this.sender=new Zh(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ds();return await Ci(e,Mn,"1"),await Pi(e,Mn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ci(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ou(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pi(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const c=Bn(i,!1).getAll();return new sn(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:c}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(c)&&(this.notifyListeners(i,c),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),au)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sa.type="LOCAL";const lu=sa;new tn(3e4,6e4);/**
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
 */function ra(s,e){return e?Ae(e):(R(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Ks extends Ko{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hu(s){return qh(s.auth,new Ks(s),s.bypassAuthState)}function uu(s){const{auth:e,user:t}=s;return R(t,e,"internal-error"),Hh(t,new Ks(s),s.bypassAuthState)}async function du(s){const{auth:e,user:t}=s;return R(t,e,"internal-error"),$h(t,new Ks(s),s.bypassAuthState)}/**
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
 */class ia{constructor(e,t,r,i,c=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:c,error:l,type:p}=e;if(l){this.reject(l);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:c||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(I){this.reject(I)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hu;case"linkViaPopup":case"linkViaRedirect":return du;case"reauthViaPopup":case"reauthViaRedirect":return uu;default:Ee(this.auth,"internal-error")}}resolve(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fu=new tn(2e3,1e4);async function pu(s,e,t){if(he(s.app))return Promise.reject(fe(s,"operation-not-supported-in-this-environment"));const r=Vn(s);ch(s,e,zs);const i=ra(r,t);return new st(r,"signInViaPopup",e,i).executeNotNull()}class st extends ia{constructor(e,t,r,i,c){super(e,t,i,c),this.provider=r,this.authWindow=null,this.pollId=null,st.currentPopupAction&&st.currentPopupAction.cancel(),st.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){ke(this.filter.length===1,"Popup operations only handle one event");const e=Gs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,st.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fu.get())};e()}}st.currentPopupAction=null;/**
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
 */const gu="pendingRedirect",bn=new Map;class mu extends ia{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=bn.get(this.auth._key());if(!e){try{const r=await yu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}bn.set(this.auth._key(),e)}return this.bypassAuthState||bn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yu(s,e){const t=vu(e),r=wu(s);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function _u(s,e){bn.set(s._key(),e)}function wu(s){return Ae(s._redirectPersistence)}function vu(s){return Tn(gu,s.config.apiKey,s.name)}async function Iu(s,e,t=!1){if(he(s.app))return Promise.reject(rt(s));const r=Vn(s),i=ra(r,e),l=await new mu(r,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const Eu=600*1e3;class Su{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!oa(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(fe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Eu&&this.cachedEventUids.clear(),this.cachedEventUids.has(ki(e))}saveEventToCache(e){this.cachedEventUids.add(ki(e)),this.lastProcessedEventTime=Date.now()}}function ki(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function oa({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tu(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oa(s);default:return!1}}/**
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
 */async function bu(s,e={}){return St(s,"GET","/v1/projects",e)}/**
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
 */const Au=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cu=/^https?/;async function Pu(s){if(s.config.emulator)return;const{authorizedDomains:e}=await bu(s);for(const t of e)try{if(ku(t))return}catch{}Ee(s,"unauthorized-domain")}function ku(s){const e=Rs(),{protocol:t,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const l=new URL(s);return l.hostname===""&&r===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!Cu.test(t))return!1;if(Au.test(s))return r===s;const i=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ru=new tn(3e4,6e4);function Ri(){const s=Ie().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function Ou(s){return new Promise((e,t)=>{var i,c,l;function r(){Ri(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ri(),t(fe(s,"network-request-failed"))},timeout:Ru.get()})}if((c=(i=Ie().gapi)==null?void 0:i.iframes)!=null&&c.Iframe)e(gapi.iframes.getContext());else if((l=Ie().gapi)!=null&&l.load)r();else{const p=Mh("iframefcb");return Ie()[p]=()=>{gapi.load?r():t(fe(s,"network-request-failed"))},Nh(`${Lh()}?onload=${p}`).catch(_=>t(_))}}).catch(e=>{throw An=null,e})}let An=null;function Du(s){return An=An||Ou(s),An}/**
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
 */const Nu=new tn(5e3,15e3),Lu="__/auth/iframe",Mu="emulator/auth/iframe",Uu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vu(s){const e=s.config;R(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?js(e,Mu):`https://${s.config.authDomain}/${Lu}`,r={apiKey:e.apiKey,appName:s.name,v:Et},i=xu.get(s.config.apiHost);i&&(r.eid=i);const c=s._getFrameworks();return c.length&&(r.fw=c.join(",")),`${t}?${en(r).slice(1)}`}async function Fu(s){const e=await Du(s),t=Ie().gapi;return R(t,s,"internal-error"),e.open({where:document.body,url:Vu(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uu,dontclear:!0},r=>new Promise(async(i,c)=>{await r.restyle({setHideOnLeave:!1});const l=fe(s,"network-request-failed"),p=Ie().setTimeout(()=>{c(l)},Nu.get());function _(){Ie().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{c(l)})}))}/**
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
 */const Bu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ju=500,$u=600,Hu="_blank",qu="http://localhost";class Oi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wu(s,e,t,r=ju,i=$u){const c=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...Bu,width:r.toString(),height:i.toString(),top:c,left:l},I=Z().toLowerCase();t&&(p=Bo(I)?Hu:t),Vo(I)&&(e=e||qu,_.scrollbars="yes");const T=Object.entries(_).reduce((S,[C,D])=>`${S}${C}=${D},`,"");if(bh(I)&&p!=="_self")return zu(e||"",p),new Oi(null);const A=window.open(e||"",p,T);R(A,s,"popup-blocked");try{A.focus()}catch{}return new Oi(A)}function zu(s,e){const t=document.createElement("a");t.href=s,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Gu="__/auth/handler",Ku="emulator/auth/handler",Ju=encodeURIComponent("fac");async function Di(s,e,t,r,i,c){R(s.config.authDomain,s,"auth-domain-config-required"),R(s.config.apiKey,s,"invalid-api-key");const l={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:r,v:Et,eventId:i};if(e instanceof zs){e.setDefaultLanguage(s.languageCode),l.providerId=e.providerId||"",zc(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,A]of Object.entries({}))l[T]=A}if(e instanceof nn){const T=e.getScopes().filter(A=>A!=="");T.length>0&&(l.scopes=T.join(","))}s.tenantId&&(l.tid=s.tenantId);const p=l;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const _=await s._getAppCheckToken(),I=_?`#${Ju}=${encodeURIComponent(_)}`:"";return`${Xu(s)}?${en(p).slice(1)}${I}`}function Xu({config:s}){return s.emulator?js(s,Ku):`https://${s.authDomain}/${Gu}`}/**
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
 */const ws="webStorageSupport";class Yu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zo,this._completeRedirectFn=Iu,this._overrideRedirectResult=_u}async _openPopup(e,t,r,i){var l;ke((l=this.eventManagers[e._key()])==null?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Di(e,t,r,Rs(),i);return Wu(e,c,Gs())}async _openRedirect(e,t,r,i){await this._originValidation(e);const c=await Di(e,t,r,Rs(),i);return eu(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:c}=this.eventManagers[t];return i?Promise.resolve(i):(ke(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Fu(e),r=new Su(e);return t.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ws,{type:ws},i=>{var l;const c=(l=i==null?void 0:i[0])==null?void 0:l[ws];c!==void 0&&t(!!c),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wo()||Fo()||qs()}}const Qu=Yu;var Ni="@firebase/auth",Li="1.12.0";/**
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
 */class Zu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ed(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function td(s){wt(new ct("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:p}=r.options;R(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:l,authDomain:p,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zo(s)},I=new Oh(r,i,c,_);return xh(I,t),I},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),wt(new ct("auth-internal",e=>{const t=Vn(e.getProvider("auth").getImmediate());return(r=>new Zu(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(Ni,Li,ed(s)),ze(Ni,Li,"esm2020")}/**
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
 */const nd=300,sd=Eo("authIdTokenMaxAge")||nd;let Mi=null;const rd=s=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>sd)return;const i=t==null?void 0:t.token;Mi!==i&&(Mi=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function id(s=Po()){const e=Vs(s,"auth");if(e.isInitialized())return e.getImmediate();const t=Uh(s,{popupRedirectResolver:Qu,persistence:[lu,Yh,Zo]}),r=Eo("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=rd(c.toString());zh(t,l,()=>l(t.currentUser)),Wh(t,p=>l(p))}}const i=vo("auth");return i&&Vh(t,`http://${i}`),t}function od(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}Dh({loadJS(s){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=i=>{const c=fe("internal-error");c.customData=i,t(c)},r.type="text/javascript",r.charset="UTF-8",od().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});td("Browser");var Ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Js;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,u){function f(){}f.prototype=u.prototype,m.F=u.prototype,m.prototype=new f,m.prototype.constructor=m,m.D=function(y,g,v){for(var d=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)d[ee-2]=arguments[ee];return u.prototype[g].apply(y,d)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(m,u,f){f||(f=0);const y=Array(16);if(typeof u=="string")for(var g=0;g<16;++g)y[g]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(g=0;g<16;++g)y[g]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=m.g[0],f=m.g[1],g=m.g[2];let v=m.g[3],d;d=u+(v^f&(g^v))+y[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(g^u&(f^g))+y[1]+3905402710&4294967295,v=u+(d<<12&4294967295|d>>>20),d=g+(f^v&(u^f))+y[2]+606105819&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(u^g&(v^u))+y[3]+3250441966&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(v^f&(g^v))+y[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(g^u&(f^g))+y[5]+1200080426&4294967295,v=u+(d<<12&4294967295|d>>>20),d=g+(f^v&(u^f))+y[6]+2821735955&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(u^g&(v^u))+y[7]+4249261313&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(v^f&(g^v))+y[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(g^u&(f^g))+y[9]+2336552879&4294967295,v=u+(d<<12&4294967295|d>>>20),d=g+(f^v&(u^f))+y[10]+4294925233&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(u^g&(v^u))+y[11]+2304563134&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(v^f&(g^v))+y[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=v+(g^u&(f^g))+y[13]+4254626195&4294967295,v=u+(d<<12&4294967295|d>>>20),d=g+(f^v&(u^f))+y[14]+2792965006&4294967295,g=v+(d<<17&4294967295|d>>>15),d=f+(u^g&(v^u))+y[15]+1236535329&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(g^v&(f^g))+y[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(u^f))+y[6]+3225465664&4294967295,v=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(v^u))+y[11]+643717713&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(g^v))+y[0]+3921069994&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^v&(f^g))+y[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(u^f))+y[10]+38016083&4294967295,v=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(v^u))+y[15]+3634488961&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(g^v))+y[4]+3889429448&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^v&(f^g))+y[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(u^f))+y[14]+3275163606&4294967295,v=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(v^u))+y[3]+4107603335&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(g^v))+y[8]+1163531501&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^v&(f^g))+y[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=v+(f^g&(u^f))+y[2]+4243563512&4294967295,v=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(v^u))+y[7]+1735328473&4294967295,g=v+(d<<14&4294967295|d>>>18),d=f+(v^u&(g^v))+y[12]+2368359562&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(f^g^v)+y[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^g)+y[8]+2272392833&4294967295,v=u+(d<<11&4294967295|d>>>21),d=g+(v^u^f)+y[11]+1839030562&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^u)+y[14]+4259657740&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^v)+y[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^g)+y[4]+1272893353&4294967295,v=u+(d<<11&4294967295|d>>>21),d=g+(v^u^f)+y[7]+4139469664&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^u)+y[10]+3200236656&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^v)+y[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^g)+y[0]+3936430074&4294967295,v=u+(d<<11&4294967295|d>>>21),d=g+(v^u^f)+y[3]+3572445317&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^u)+y[6]+76029189&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^v)+y[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=v+(u^f^g)+y[12]+3873151461&4294967295,v=u+(d<<11&4294967295|d>>>21),d=g+(v^u^f)+y[15]+530742520&4294967295,g=v+(d<<16&4294967295|d>>>16),d=f+(g^v^u)+y[2]+3299628645&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(g^(f|~v))+y[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~g))+y[7]+1126891415&4294967295,v=u+(d<<10&4294967295|d>>>22),d=g+(u^(v|~f))+y[14]+2878612391&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~u))+y[5]+4237533241&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~v))+y[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~g))+y[3]+2399980690&4294967295,v=u+(d<<10&4294967295|d>>>22),d=g+(u^(v|~f))+y[10]+4293915773&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~u))+y[1]+2240044497&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~v))+y[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~g))+y[15]+4264355552&4294967295,v=u+(d<<10&4294967295|d>>>22),d=g+(u^(v|~f))+y[6]+2734768916&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~u))+y[13]+1309151649&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~v))+y[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=v+(f^(u|~g))+y[11]+3174756917&4294967295,v=u+(d<<10&4294967295|d>>>22),d=g+(u^(v|~f))+y[2]+718787259&4294967295,g=v+(d<<15&4294967295|d>>>17),d=f+(v^(g|~u))+y[9]+3951481745&4294967295,m.g[0]=m.g[0]+u&4294967295,m.g[1]=m.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+v&4294967295}r.prototype.v=function(m,u){u===void 0&&(u=m.length);const f=u-this.blockSize,y=this.C;let g=this.h,v=0;for(;v<u;){if(g==0)for(;v<=f;)i(this,m,v),v+=this.blockSize;if(typeof m=="string"){for(;v<u;)if(y[g++]=m.charCodeAt(v++),g==this.blockSize){i(this,y),g=0;break}}else for(;v<u;)if(y[g++]=m[v++],g==this.blockSize){i(this,y),g=0;break}}this.h=g,this.o+=u},r.prototype.A=function(){var m=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);m[0]=128;for(var u=1;u<m.length-8;++u)m[u]=0;u=this.o*8;for(var f=m.length-8;f<m.length;++f)m[f]=u&255,u/=256;for(this.v(m),m=Array(16),u=0,f=0;f<4;++f)for(let y=0;y<32;y+=8)m[u++]=this.g[f]>>>y&255;return m};function c(m,u){var f=p;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=u(m)}function l(m,u){this.h=u;const f=[];let y=!0;for(let g=m.length-1;g>=0;g--){const v=m[g]|0;y&&v==u||(f[g]=v,y=!1)}this.g=f}var p={};function _(m){return-128<=m&&m<128?c(m,function(u){return new l([u|0],u<0?-1:0)}):new l([m|0],m<0?-1:0)}function I(m){if(isNaN(m)||!isFinite(m))return A;if(m<0)return O(I(-m));const u=[];let f=1;for(let y=0;m>=f;y++)u[y]=m/f|0,f*=4294967296;return new l(u,0)}function T(m,u){if(m.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(m.charAt(0)=="-")return O(T(m.substring(1),u));if(m.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=I(Math.pow(u,8));let y=A;for(let v=0;v<m.length;v+=8){var g=Math.min(8,m.length-v);const d=parseInt(m.substring(v,v+g),u);g<8?(g=I(Math.pow(u,g)),y=y.j(g).add(I(d))):(y=y.j(f),y=y.add(I(d)))}return y}var A=_(0),S=_(1),C=_(16777216);s=l.prototype,s.m=function(){if(k(this))return-O(this).m();let m=0,u=1;for(let f=0;f<this.g.length;f++){const y=this.i(f);m+=(y>=0?y:4294967296+y)*u,u*=4294967296}return m},s.toString=function(m){if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(D(this))return"0";if(k(this))return"-"+O(this).toString(m);const u=I(Math.pow(m,6));var f=this;let y="";for(;;){const g=x(f,u).g;f=j(f,g.j(u));let v=((f.g.length>0?f.g[0]:f.h)>>>0).toString(m);if(f=g,D(f))return v+y;for(;v.length<6;)v="0"+v;y=v+y}},s.i=function(m){return m<0?0:m<this.g.length?this.g[m]:this.h};function D(m){if(m.h!=0)return!1;for(let u=0;u<m.g.length;u++)if(m.g[u]!=0)return!1;return!0}function k(m){return m.h==-1}s.l=function(m){return m=j(this,m),k(m)?-1:D(m)?0:1};function O(m){const u=m.g.length,f=[];for(let y=0;y<u;y++)f[y]=~m.g[y];return new l(f,~m.h).add(S)}s.abs=function(){return k(this)?O(this):this},s.add=function(m){const u=Math.max(this.g.length,m.g.length),f=[];let y=0;for(let g=0;g<=u;g++){let v=y+(this.i(g)&65535)+(m.i(g)&65535),d=(v>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);y=d>>>16,v&=65535,d&=65535,f[g]=d<<16|v}return new l(f,f[f.length-1]&-2147483648?-1:0)};function j(m,u){return m.add(O(u))}s.j=function(m){if(D(this)||D(m))return A;if(k(this))return k(m)?O(this).j(O(m)):O(O(this).j(m));if(k(m))return O(this.j(O(m)));if(this.l(C)<0&&m.l(C)<0)return I(this.m()*m.m());const u=this.g.length+m.g.length,f=[];for(var y=0;y<2*u;y++)f[y]=0;for(y=0;y<this.g.length;y++)for(let g=0;g<m.g.length;g++){const v=this.i(y)>>>16,d=this.i(y)&65535,ee=m.i(g)>>>16,Ke=m.i(g)&65535;f[2*y+2*g]+=d*Ke,$(f,2*y+2*g),f[2*y+2*g+1]+=v*Ke,$(f,2*y+2*g+1),f[2*y+2*g+1]+=d*ee,$(f,2*y+2*g+1),f[2*y+2*g+2]+=v*ee,$(f,2*y+2*g+2)}for(m=0;m<u;m++)f[m]=f[2*m+1]<<16|f[2*m];for(m=u;m<2*u;m++)f[m]=0;return new l(f,0)};function $(m,u){for(;(m[u]&65535)!=m[u];)m[u+1]+=m[u]>>>16,m[u]&=65535,u++}function P(m,u){this.g=m,this.h=u}function x(m,u){if(D(u))throw Error("division by zero");if(D(m))return new P(A,A);if(k(m))return u=x(O(m),u),new P(O(u.g),O(u.h));if(k(u))return u=x(m,O(u)),new P(O(u.g),u.h);if(m.g.length>30){if(k(m)||k(u))throw Error("slowDivide_ only works with positive integers.");for(var f=S,y=u;y.l(m)<=0;)f=ne(f),y=ne(y);var g=ie(f,1),v=ie(y,1);for(y=ie(y,2),f=ie(f,2);!D(y);){var d=v.add(y);d.l(m)<=0&&(g=g.add(f),v=d),y=ie(y,1),f=ie(f,1)}return u=j(m,g.j(u)),new P(g,u)}for(g=A;m.l(u)>=0;){for(f=Math.max(1,Math.floor(m.m()/u.m())),y=Math.ceil(Math.log(f)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),v=I(f),d=v.j(u);k(d)||d.l(m)>0;)f-=y,v=I(f),d=v.j(u);D(v)&&(v=S),g=g.add(v),m=j(m,d)}return new P(g,m)}s.B=function(m){return x(this,m).h},s.and=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)&m.i(y);return new l(f,this.h&m.h)},s.or=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)|m.i(y);return new l(f,this.h|m.h)},s.xor=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)^m.i(y);return new l(f,this.h^m.h)};function ne(m){const u=m.g.length+1,f=[];for(let y=0;y<u;y++)f[y]=m.i(y)<<1|m.i(y-1)>>>31;return new l(f,m.h)}function ie(m,u){const f=u>>5;u%=32;const y=m.g.length-f,g=[];for(let v=0;v<y;v++)g[v]=u>0?m.i(v+f)>>>u|m.i(v+f+1)<<32-u:m.i(v+f);return new l(g,m.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=I,l.fromString=T,Js=l}).apply(typeof Ui<"u"?Ui:typeof self<"u"?self:typeof window<"u"?window:{});var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,e=Object.defineProperty;function t(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof In=="object"&&In];for(var o=0;o<n.length;++o){var a=n[o];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=t(this);function i(n,o){if(o)e:{var a=r;n=n.split(".");for(var h=0;h<n.length-1;h++){var w=n[h];if(!(w in a))break e;a=a[w]}n=n[n.length-1],h=a[n],o=o(h),o!=h&&o!=null&&e(a,n,{configurable:!0,writable:!0,value:o})}}i("Symbol.dispose",function(n){return n||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(n){return n||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(n){return n||function(o){var a=[],h;for(h in o)Object.prototype.hasOwnProperty.call(o,h)&&a.push([h,o[h]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function p(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function _(n,o,a){return n.call.apply(n.bind,arguments)}function I(n,o,a){return I=_,I.apply(null,arguments)}function T(n,o){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function A(n,o){function a(){}a.prototype=o.prototype,n.Z=o.prototype,n.prototype=new a,n.prototype.constructor=n,n.Ob=function(h,w,E){for(var b=Array(arguments.length-2),N=2;N<arguments.length;N++)b[N-2]=arguments[N];return o.prototype[w].apply(h,b)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?n=>n&&AsyncContext.Snapshot.wrap(n):n=>n;function C(n){const o=n.length;if(o>0){const a=Array(o);for(let h=0;h<o;h++)a[h]=n[h];return a}return[]}function D(n,o){for(let h=1;h<arguments.length;h++){const w=arguments[h];var a=typeof w;if(a=a!="object"?a:w?Array.isArray(w)?"array":a:"null",a=="array"||a=="object"&&typeof w.length=="number"){a=n.length||0;const E=w.length||0;n.length=a+E;for(let b=0;b<E;b++)n[a+b]=w[b]}else n.push(w)}}class k{constructor(o,a){this.i=o,this.j=a,this.h=0,this.g=null}get(){let o;return this.h>0?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function O(n){l.setTimeout(()=>{throw n},0)}function j(){var n=m;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class ${constructor(){this.h=this.g=null}add(o,a){const h=P.get();h.set(o,a),this.h?this.h.next=h:this.g=h,this.h=h}}var P=new k(()=>new x,n=>n.reset());class x{constructor(){this.next=this.g=this.h=null}set(o,a){this.h=o,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,ie=!1,m=new $,u=()=>{const n=Promise.resolve(void 0);ne=()=>{n.then(f)}};function f(){for(var n;n=j();){try{n.h.call(n.g)}catch(a){O(a)}var o=P;o.j(n),o.h<100&&(o.h++,n.next=o.g,o.g=n)}ie=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function g(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}g.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};l.addEventListener("test",a,o),l.removeEventListener("test",a,o)}catch{}return n})();function d(n){return/^[\s\xa0]*$/.test(n)}function ee(n,o){g.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n&&this.init(n,o)}A(ee,g),ee.prototype.init=function(n,o){const a=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget,o||(a=="mouseover"?o=n.fromElement:a=="mouseout"&&(o=n.toElement)),this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=n.pointerType,this.state=n.state,this.i=n,n.defaultPrevented&&ee.Z.h.call(this)},ee.prototype.h=function(){ee.Z.h.call(this);const n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),ma=0;function ya(n,o,a,h,w){this.listener=n,this.proxy=null,this.src=o,this.type=a,this.capture=!!h,this.ha=w,this.key=++ma,this.da=this.fa=!1}function an(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function cn(n,o,a){for(const h in n)o.call(a,n[h],h,n)}function _a(n,o){for(const a in n)o.call(void 0,n[a],a,n)}function nr(n){const o={};for(const a in n)o[a]=n[a];return o}const sr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rr(n,o){let a,h;for(let w=1;w<arguments.length;w++){h=arguments[w];for(a in h)n[a]=h[a];for(let E=0;E<sr.length;E++)a=sr[E],Object.prototype.hasOwnProperty.call(h,a)&&(n[a]=h[a])}}function ln(n){this.src=n,this.g={},this.h=0}ln.prototype.add=function(n,o,a,h,w){const E=n.toString();n=this.g[E],n||(n=this.g[E]=[],this.h++);const b=$n(n,o,h,w);return b>-1?(o=n[b],a||(o.fa=!1)):(o=new ya(o,this.src,E,!!h,w),o.fa=a,n.push(o)),o};function jn(n,o){const a=o.type;if(a in n.g){var h=n.g[a],w=Array.prototype.indexOf.call(h,o,void 0),E;(E=w>=0)&&Array.prototype.splice.call(h,w,1),E&&(an(o),n.g[a].length==0&&(delete n.g[a],n.h--))}}function $n(n,o,a,h){for(let w=0;w<n.length;++w){const E=n[w];if(!E.da&&E.listener==o&&E.capture==!!a&&E.ha==h)return w}return-1}var Hn="closure_lm_"+(Math.random()*1e6|0),qn={};function ir(n,o,a,h,w){if(Array.isArray(o)){for(let E=0;E<o.length;E++)ir(n,o[E],a,h,w);return null}return a=cr(a),n&&n[Ke]?n.J(o,a,p(h)?!!h.capture:!1,w):wa(n,o,a,!1,h,w)}function wa(n,o,a,h,w,E){if(!o)throw Error("Invalid event type");const b=p(w)?!!w.capture:!!w;let N=zn(n);if(N||(n[Hn]=N=new ln(n)),a=N.add(o,a,h,b,E),a.proxy)return a;if(h=va(),a.proxy=h,h.src=n,h.listener=a,n.addEventListener)v||(w=b),w===void 0&&(w=!1),n.addEventListener(o.toString(),h,w);else if(n.attachEvent)n.attachEvent(ar(o.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function va(){function n(a){return o.call(n.src,n.listener,a)}const o=Ia;return n}function or(n,o,a,h,w){if(Array.isArray(o))for(var E=0;E<o.length;E++)or(n,o[E],a,h,w);else h=p(h)?!!h.capture:!!h,a=cr(a),n&&n[Ke]?(n=n.i,E=String(o).toString(),E in n.g&&(o=n.g[E],a=$n(o,a,h,w),a>-1&&(an(o[a]),Array.prototype.splice.call(o,a,1),o.length==0&&(delete n.g[E],n.h--)))):n&&(n=zn(n))&&(o=n.g[o.toString()],n=-1,o&&(n=$n(o,a,h,w)),(a=n>-1?o[n]:null)&&Wn(a))}function Wn(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[Ke])jn(o.i,n);else{var a=n.type,h=n.proxy;o.removeEventListener?o.removeEventListener(a,h,n.capture):o.detachEvent?o.detachEvent(ar(a),h):o.addListener&&o.removeListener&&o.removeListener(h),(a=zn(o))?(jn(a,n),a.h==0&&(a.src=null,o[Hn]=null)):an(n)}}}function ar(n){return n in qn?qn[n]:qn[n]="on"+n}function Ia(n,o){if(n.da)n=!0;else{o=new ee(o,this);const a=n.listener,h=n.ha||n.src;n.fa&&Wn(n),n=a.call(h,o)}return n}function zn(n){return n=n[Hn],n instanceof ln?n:null}var Gn="__closure_events_fn_"+(Math.random()*1e9>>>0);function cr(n){return typeof n=="function"?n:(n[Gn]||(n[Gn]=function(o){return n.handleEvent(o)}),n[Gn])}function J(){y.call(this),this.i=new ln(this),this.M=this,this.G=null}A(J,y),J.prototype[Ke]=!0,J.prototype.removeEventListener=function(n,o,a,h){or(this,n,o,a,h)};function X(n,o){var a,h=n.G;if(h)for(a=[];h;h=h.G)a.push(h);if(n=n.M,h=o.type||o,typeof o=="string")o=new g(o,n);else if(o instanceof g)o.target=o.target||n;else{var w=o;o=new g(h,n),rr(o,w)}w=!0;let E,b;if(a)for(b=a.length-1;b>=0;b--)E=o.g=a[b],w=hn(E,h,!0,o)&&w;if(E=o.g=n,w=hn(E,h,!0,o)&&w,w=hn(E,h,!1,o)&&w,a)for(b=0;b<a.length;b++)E=o.g=a[b],w=hn(E,h,!1,o)&&w}J.prototype.N=function(){if(J.Z.N.call(this),this.i){var n=this.i;for(const o in n.g){const a=n.g[o];for(let h=0;h<a.length;h++)an(a[h]);delete n.g[o],n.h--}}this.G=null},J.prototype.J=function(n,o,a,h){return this.i.add(String(n),o,!1,a,h)},J.prototype.K=function(n,o,a,h){return this.i.add(String(n),o,!0,a,h)};function hn(n,o,a,h){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();let w=!0;for(let E=0;E<o.length;++E){const b=o[E];if(b&&!b.da&&b.capture==a){const N=b.listener,G=b.ha||b.src;b.fa&&jn(n.i,b),w=N.call(G,h)!==!1&&w}}return w&&!h.defaultPrevented}function Ea(n,o){if(typeof n!="function")if(n&&typeof n.handleEvent=="function")n=I(n.handleEvent,n);else throw Error("Invalid listener argument");return Number(o)>2147483647?-1:l.setTimeout(n,o||0)}function lr(n){n.g=Ea(()=>{n.g=null,n.i&&(n.i=!1,lr(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class Sa extends y{constructor(o,a){super(),this.m=o,this.l=a,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:lr(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tt(n){y.call(this),this.h=n,this.g={}}A(Tt,y);var hr=[];function ur(n){cn(n.g,function(o,a){this.g.hasOwnProperty(a)&&Wn(o)},n),n.g={}}Tt.prototype.N=function(){Tt.Z.N.call(this),ur(this)},Tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kn=l.JSON.stringify,Ta=l.JSON.parse,ba=class{stringify(n){return l.JSON.stringify(n,void 0)}parse(n){return l.JSON.parse(n,void 0)}};function dr(){}function Aa(){}var bt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Jn(){g.call(this,"d")}A(Jn,g);function Xn(){g.call(this,"c")}A(Xn,g);var ut={},fr=null;function Yn(){return fr=fr||new J}ut.Ia="serverreachability";function pr(n){g.call(this,ut.Ia,n)}A(pr,g);function At(n){const o=Yn();X(o,new pr(o))}ut.STAT_EVENT="statevent";function gr(n,o){g.call(this,ut.STAT_EVENT,n),this.stat=o}A(gr,g);function Y(n){const o=Yn();X(o,new gr(o,n))}ut.Ja="timingevent";function mr(n,o){g.call(this,ut.Ja,n),this.size=o}A(mr,g);function Ct(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){n()},o)}function Pt(){this.g=!0}Pt.prototype.ua=function(){this.g=!1};function Ca(n,o,a,h,w,E){n.info(function(){if(n.g)if(E){var b="",N=E.split("&");for(let H=0;H<N.length;H++){var G=N[H].split("=");if(G.length>1){const K=G[0];G=G[1];const me=K.split("_");b=me.length>=2&&me[1]=="type"?b+(K+"="+G+"&"):b+(K+"=redacted&")}}}else b=null;else b=E;return"XMLHTTP REQ ("+h+") [attempt "+w+"]: "+o+`
`+a+`
`+b})}function Pa(n,o,a,h,w,E,b){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+w+"]: "+o+`
`+a+`
`+E+" "+b})}function dt(n,o,a,h){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+Ra(n,a)+(h?" "+h:"")})}function ka(n,o){n.info(function(){return"TIMEOUT: "+o})}Pt.prototype.info=function(){};function Ra(n,o){if(!n.g)return o;if(!o)return null;try{const E=JSON.parse(o);if(E){for(n=0;n<E.length;n++)if(Array.isArray(E[n])){var a=E[n];if(!(a.length<2)){var h=a[1];if(Array.isArray(h)&&!(h.length<1)){var w=h[0];if(w!="noop"&&w!="stop"&&w!="close")for(let b=1;b<h.length;b++)h[b]=""}}}}return Kn(E)}catch{return o}}var Qn={NO_ERROR:0,TIMEOUT:8},Oa={},yr;function Zn(){}A(Zn,dr),Zn.prototype.g=function(){return new XMLHttpRequest},yr=new Zn;function kt(n){return encodeURIComponent(String(n))}function Da(n){var o=1;n=n.split(":");const a=[];for(;o>0&&n.length;)a.push(n.shift()),o--;return n.length&&a.push(n.join(":")),a}function De(n,o,a,h){this.j=n,this.i=o,this.l=a,this.S=h||1,this.V=new Tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _r}function _r(){this.i=null,this.g="",this.h=!1}var wr={},es={};function ts(n,o,a){n.M=1,n.A=dn(ge(o)),n.u=a,n.R=!0,vr(n,null)}function vr(n,o){n.F=Date.now(),un(n),n.B=ge(n.A);var a=n.B,h=n.S;Array.isArray(h)||(h=[String(h)]),Nr(a.i,"t",h),n.C=0,a=n.j.L,n.h=new _r,n.g=Yr(n.j,a?o:null,!n.u),n.P>0&&(n.O=new Sa(I(n.Y,n,n.g),n.P)),o=n.V,a=n.g,h=n.ba;var w="readystatechange";Array.isArray(w)||(w&&(hr[0]=w.toString()),w=hr);for(let E=0;E<w.length;E++){const b=ir(a,w[E],h||o.handleEvent,!1,o.h||o);if(!b)break;o.g[b.key]=b}o=n.J?nr(n.J):{},n.u?(n.v||(n.v="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.B,n.v,n.u,o)):(n.v="GET",n.g.ea(n.B,n.v,null,o)),At(),Ca(n.i,n.v,n.B,n.l,n.S,n.u)}De.prototype.ba=function(n){n=n.target;const o=this.O;o&&Me(n)==3?o.j():this.Y(n)},De.prototype.Y=function(n){try{if(n==this.g)e:{const N=Me(this.g),G=this.g.ya(),H=this.g.ca();if(!(N<3)&&(N!=3||this.g&&(this.h.h||this.g.la()||Br(this.g)))){this.K||N!=4||G==7||(G==8||H<=0?At(3):At(2)),ns(this);var o=this.g.ca();this.X=o;var a=Na(this);if(this.o=o==200,Pa(this.i,this.v,this.B,this.l,this.S,N,o),this.o){if(this.U&&!this.L){t:{if(this.g){var h,w=this.g;if((h=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(h)){var E=h;break t}}E=null}if(n=E)dt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ss(this,n);else{this.o=!1,this.m=3,Y(12),Je(this),Rt(this);break e}}if(this.R){n=!0;let K;for(;!this.K&&this.C<a.length;)if(K=La(this,a),K==es){N==4&&(this.m=4,Y(14),n=!1),dt(this.i,this.l,null,"[Incomplete Response]");break}else if(K==wr){this.m=4,Y(15),dt(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}else dt(this.i,this.l,K,null),ss(this,K);if(Ir(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),N!=4||a.length!=0||this.h.h||(this.m=1,Y(16),n=!1),this.o=this.o&&n,!n)dt(this.i,this.l,a,"[Invalid Chunked Response]"),Je(this),Rt(this);else if(a.length>0&&!this.W){this.W=!0;var b=this.j;b.g==this&&b.aa&&!b.P&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),us(b),b.P=!0,Y(11))}}else dt(this.i,this.l,a,null),ss(this,a);N==4&&Je(this),this.o&&!this.K&&(N==4?Gr(this.j,this):(this.o=!1,un(this)))}else Ka(this.g),o==400&&a.indexOf("Unknown SID")>0?(this.m=3,Y(12)):(this.m=0,Y(13)),Je(this),Rt(this)}}}catch{}finally{}};function Na(n){if(!Ir(n))return n.g.la();const o=Br(n.g);if(o==="")return"";let a="";const h=o.length,w=Me(n.g)==4;if(!n.h.i){if(typeof TextDecoder>"u")return Je(n),Rt(n),"";n.h.i=new l.TextDecoder}for(let E=0;E<h;E++)n.h.h=!0,a+=n.h.i.decode(o[E],{stream:!(w&&E==h-1)});return o.length=0,n.h.g+=a,n.C=0,n.h.g}function Ir(n){return n.g?n.v=="GET"&&n.M!=2&&n.j.Aa:!1}function La(n,o){var a=n.C,h=o.indexOf(`
`,a);return h==-1?es:(a=Number(o.substring(a,h)),isNaN(a)?wr:(h+=1,h+a>o.length?es:(o=o.slice(h,h+a),n.C=h+a,o)))}De.prototype.cancel=function(){this.K=!0,Je(this)};function un(n){n.T=Date.now()+n.H,Er(n,n.H)}function Er(n,o){if(n.D!=null)throw Error("WatchDog timer not null");n.D=Ct(I(n.aa,n),o)}function ns(n){n.D&&(l.clearTimeout(n.D),n.D=null)}De.prototype.aa=function(){this.D=null;const n=Date.now();n-this.T>=0?(ka(this.i,this.B),this.M!=2&&(At(),Y(17)),Je(this),this.m=2,Rt(this)):Er(this,this.T-n)};function Rt(n){n.j.I==0||n.K||Gr(n.j,n)}function Je(n){ns(n);var o=n.O;o&&typeof o.dispose=="function"&&o.dispose(),n.O=null,ur(n.V),n.g&&(o=n.g,n.g=null,o.abort(),o.dispose())}function ss(n,o){try{var a=n.j;if(a.I!=0&&(a.g==n||rs(a.h,n))){if(!n.L&&rs(a.h,n)&&a.I==3){try{var h=a.Ba.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var w=h;if(w[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<n.F)yn(a),gn(a);else break e;hs(a),Y(18)}}else a.xa=w[1],0<a.xa-a.K&&w[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=Ct(I(a.Va,a),6e3));br(a.h)<=1&&a.ta&&(a.ta=void 0)}else Ye(a,11)}else if((n.L||a.g==n)&&yn(a),!d(o))for(w=a.Ba.g.parse(o),o=0;o<w.length;o++){let H=w[o];const K=H[0];if(!(K<=a.K))if(a.K=K,H=H[1],a.I==2)if(H[0]=="c"){a.M=H[1],a.ba=H[2];const me=H[3];me!=null&&(a.ka=me,a.j.info("VER="+a.ka));const Qe=H[4];Qe!=null&&(a.za=Qe,a.j.info("SVER="+a.za));const Ue=H[5];Ue!=null&&typeof Ue=="number"&&Ue>0&&(h=1.5*Ue,a.O=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const xe=n.g;if(xe){const _n=xe.g?xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_n){var E=h.h;E.g||_n.indexOf("spdy")==-1&&_n.indexOf("quic")==-1&&_n.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(is(E,E.h),E.h=null))}if(h.G){const ds=xe.g?xe.g.getResponseHeader("X-HTTP-Session-Id"):null;ds&&(h.wa=ds,q(h.J,h.G,ds))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-n.F,a.j.info("Handshake RTT: "+a.T+"ms")),h=a;var b=n;if(h.na=Xr(h,h.L?h.ba:null,h.W),b.L){Ar(h.h,b);var N=b,G=h.O;G&&(N.H=G),N.D&&(ns(N),un(N)),h.g=b}else Wr(h);a.i.length>0&&mn(a)}else H[0]!="stop"&&H[0]!="close"||Ye(a,7);else a.I==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?Ye(a,7):ls(a):H[0]!="noop"&&a.l&&a.l.qa(H),a.A=0)}}At(4)}catch{}}var Ma=class{constructor(n,o){this.g=n,this.map=o}};function Sr(n){this.l=n||10,l.PerformanceNavigationTiming?(n=l.performance.getEntriesByType("navigation"),n=n.length>0&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Tr(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function br(n){return n.h?1:n.g?n.g.size:0}function rs(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function is(n,o){n.g?n.g.add(o):n.h=o}function Ar(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}Sr.prototype.cancel=function(){if(this.i=Cr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Cr(n){if(n.h!=null)return n.i.concat(n.h.G);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const a of n.g.values())o=o.concat(a.G);return o}return C(n.i)}var Pr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ua(n,o){if(n){n=n.split("&");for(let a=0;a<n.length;a++){const h=n[a].indexOf("=");let w,E=null;h>=0?(w=n[a].substring(0,h),E=n[a].substring(h+1)):w=n[a],o(w,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Ne(n){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let o;n instanceof Ne?(this.l=n.l,Ot(this,n.j),this.o=n.o,this.g=n.g,Dt(this,n.u),this.h=n.h,os(this,Lr(n.i)),this.m=n.m):n&&(o=String(n).match(Pr))?(this.l=!1,Ot(this,o[1]||"",!0),this.o=Nt(o[2]||""),this.g=Nt(o[3]||"",!0),Dt(this,o[4]),this.h=Nt(o[5]||"",!0),os(this,o[6]||"",!0),this.m=Nt(o[7]||"")):(this.l=!1,this.i=new Mt(null,this.l))}Ne.prototype.toString=function(){const n=[];var o=this.j;o&&n.push(Lt(o,kr,!0),":");var a=this.g;return(a||o=="file")&&(n.push("//"),(o=this.o)&&n.push(Lt(o,kr,!0),"@"),n.push(kt(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&n.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(Lt(a,a.charAt(0)=="/"?Fa:Va,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",Lt(a,ja)),n.join("")},Ne.prototype.resolve=function(n){const o=ge(this);let a=!!n.j;a?Ot(o,n.j):a=!!n.o,a?o.o=n.o:a=!!n.g,a?o.g=n.g:a=n.u!=null;var h=n.h;if(a)Dt(o,n.u);else if(a=!!n.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var w=o.h.lastIndexOf("/");w!=-1&&(h=o.h.slice(0,w+1)+h)}if(w=h,w==".."||w==".")h="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){h=w.lastIndexOf("/",0)==0,w=w.split("/");const E=[];for(let b=0;b<w.length;){const N=w[b++];N=="."?h&&b==w.length&&E.push(""):N==".."?((E.length>1||E.length==1&&E[0]!="")&&E.pop(),h&&b==w.length&&E.push("")):(E.push(N),h=!0)}h=E.join("/")}else h=w}return a?o.h=h:a=n.i.toString()!=="",a?os(o,Lr(n.i)):a=!!n.m,a&&(o.m=n.m),o};function ge(n){return new Ne(n)}function Ot(n,o,a){n.j=a?Nt(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function Dt(n,o){if(o){if(o=Number(o),isNaN(o)||o<0)throw Error("Bad port number "+o);n.u=o}else n.u=null}function os(n,o,a){o instanceof Mt?(n.i=o,$a(n.i,n.l)):(a||(o=Lt(o,Ba)),n.i=new Mt(o,n.l))}function q(n,o,a){n.i.set(o,a)}function dn(n){return q(n,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),n}function Nt(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Lt(n,o,a){return typeof n=="string"?(n=encodeURI(n).replace(o,xa),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function xa(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var kr=/[#\/\?@]/g,Va=/[#\?:]/g,Fa=/[#\?]/g,Ba=/[#\?@]/g,ja=/#/g;function Mt(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Xe(n){n.g||(n.g=new Map,n.h=0,n.i&&Ua(n.i,function(o,a){n.add(decodeURIComponent(o.replace(/\+/g," ")),a)}))}s=Mt.prototype,s.add=function(n,o){Xe(this),this.i=null,n=ft(this,n);let a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(o),this.h+=1,this};function Rr(n,o){Xe(n),o=ft(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function Or(n,o){return Xe(n),o=ft(n,o),n.g.has(o)}s.forEach=function(n,o){Xe(this),this.g.forEach(function(a,h){a.forEach(function(w){n.call(o,w,h,this)},this)},this)};function Dr(n,o){Xe(n);let a=[];if(typeof o=="string")Or(n,o)&&(a=a.concat(n.g.get(ft(n,o))));else for(n=Array.from(n.g.values()),o=0;o<n.length;o++)a=a.concat(n[o]);return a}s.set=function(n,o){return Xe(this),this.i=null,n=ft(this,n),Or(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},s.get=function(n,o){return n?(n=Dr(this,n),n.length>0?String(n[0]):o):o};function Nr(n,o,a){Rr(n,o),a.length>0&&(n.i=null,n.g.set(ft(n,o),C(a)),n.h+=a.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(let h=0;h<o.length;h++){var a=o[h];const w=kt(a);a=Dr(this,a);for(let E=0;E<a.length;E++){let b=w;a[E]!==""&&(b+="="+kt(a[E])),n.push(b)}}return this.i=n.join("&")};function Lr(n){const o=new Mt;return o.i=n.i,n.g&&(o.g=new Map(n.g),o.h=n.h),o}function ft(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function $a(n,o){o&&!n.j&&(Xe(n),n.i=null,n.g.forEach(function(a,h){const w=h.toLowerCase();h!=w&&(Rr(this,h),Nr(this,w,a))},n)),n.j=o}function Ha(n,o){const a=new Pt;if(l.Image){const h=new Image;h.onload=T(Le,a,"TestLoadImage: loaded",!0,o,h),h.onerror=T(Le,a,"TestLoadImage: error",!1,o,h),h.onabort=T(Le,a,"TestLoadImage: abort",!1,o,h),h.ontimeout=T(Le,a,"TestLoadImage: timeout",!1,o,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else o(!1)}function qa(n,o){const a=new Pt,h=new AbortController,w=setTimeout(()=>{h.abort(),Le(a,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:h.signal}).then(E=>{clearTimeout(w),E.ok?Le(a,"TestPingServer: ok",!0,o):Le(a,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(w),Le(a,"TestPingServer: error",!1,o)})}function Le(n,o,a,h,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),h(a)}catch{}}function Wa(){this.g=new ba}function as(n){this.i=n.Sb||null,this.h=n.ab||!1}A(as,dr),as.prototype.g=function(){return new fn(this.i,this.h)};function fn(n,o){J.call(this),this.H=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(fn,J),s=fn.prototype,s.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=n,this.D=o,this.readyState=1,xt(this)},s.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const o={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};n&&(o.body=n),(this.H||l).fetch(new Request(this.D,o)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ut(this)),this.readyState=0},s.Pa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,xt(this)),this.g&&(this.readyState=3,xt(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Mr(this)}else n.text().then(this.Oa.bind(this),this.ga.bind(this))};function Mr(n){n.j.read().then(n.Ma.bind(n)).catch(n.ga.bind(n))}s.Ma=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.B.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?Ut(this):xt(this),this.readyState==3&&Mr(this)}},s.Oa=function(n){this.g&&(this.response=this.responseText=n,Ut(this))},s.Na=function(n){this.g&&(this.response=n,Ut(this))},s.ga=function(){this.g&&Ut(this)};function Ut(n){n.readyState=4,n.l=null,n.j=null,n.B=null,xt(n)}s.setRequestHeader=function(n,o){this.A.append(n,o)},s.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var a=o.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=o.next();return n.join(`\r
`)};function xt(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(fn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Ur(n){let o="";return cn(n,function(a,h){o+=h,o+=":",o+=a,o+=`\r
`}),o}function cs(n,o,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=Ur(a),typeof n=="string"?a!=null&&kt(a):q(n,o,a))}function W(n){J.call(this),this.headers=new Map,this.L=n||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(W,J);var za=/^https?$/i,Ga=["POST","PUT"];s=W.prototype,s.Fa=function(n){this.H=n},s.ea=function(n,o,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yr.g(),this.g.onreadystatechange=S(I(this.Ca,this));try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(E){xr(this,E);return}if(n=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var w in h)a.set(w,h[w]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const E of h.keys())a.set(E,h.get(E));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(E=>E.toLowerCase()=="content-type"),w=l.FormData&&n instanceof l.FormData,!(Array.prototype.indexOf.call(Ga,o,void 0)>=0)||h||w||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,b]of a)this.g.setRequestHeader(E,b);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(n),this.v=!1}catch(E){xr(this,E)}};function xr(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.o=5,Vr(n),pn(n)}function Vr(n){n.A||(n.A=!0,X(n,"complete"),X(n,"error"))}s.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=n||7,X(this,"complete"),X(this,"abort"),pn(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pn(this,!0)),W.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Fr(this):this.Xa())},s.Xa=function(){Fr(this)};function Fr(n){if(n.h&&typeof c<"u"){if(n.v&&Me(n)==4)setTimeout(n.Ca.bind(n),0);else if(X(n,"readystatechange"),Me(n)==4){n.h=!1;try{const E=n.ca();e:switch(E){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var a;if(!(a=o)){var h;if(h=E===0){let b=String(n.D).match(Pr)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),h=!za.test(b?b.toLowerCase():"")}a=h}if(a)X(n,"complete"),X(n,"success");else{n.o=6;try{var w=Me(n)>2?n.g.statusText:""}catch{w=""}n.l=w+" ["+n.ca()+"]",Vr(n)}}finally{pn(n)}}}}function pn(n,o){if(n.g){n.m&&(clearTimeout(n.m),n.m=null);const a=n.g;n.g=null,o||X(n,"ready");try{a.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Me(n){return n.g?n.g.readyState:0}s.ca=function(){try{return Me(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),Ta(o)}};function Br(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.F){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Ka(n){const o={};n=(n.g&&Me(n)>=2&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if(d(n[h]))continue;var a=Da(n[h]);const w=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const E=o[w]||[];o[w]=E,E.push(a)}_a(o,function(h){return h.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vt(n,o,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||o}function jr(n){this.za=0,this.i=[],this.j=new Pt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vt("failFast",!1,n),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vt("baseRetryDelayMs",5e3,n),this.Za=Vt("retryDelaySeedMs",1e4,n),this.Ta=Vt("forwardChannelMaxRetries",2,n),this.va=Vt("forwardChannelRequestTimeoutMs",2e4,n),this.ma=n&&n.xmlHttpFactory||void 0,this.Ua=n&&n.Rb||void 0,this.Aa=n&&n.useFetchStreams||!1,this.O=void 0,this.L=n&&n.supportsCrossDomainXhr||!1,this.M="",this.h=new Sr(n&&n.concurrentRequestLimit),this.Ba=new Wa,this.S=n&&n.fastHandshake||!1,this.R=n&&n.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=n&&n.Pb||!1,n&&n.ua&&this.j.ua(),n&&n.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&n&&n.detectBufferingProxy||!1,this.ia=void 0,n&&n.longPollingTimeout&&n.longPollingTimeout>0&&(this.ia=n.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=jr.prototype,s.ka=8,s.I=1,s.connect=function(n,o,a,h){Y(0),this.W=n,this.H=o||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.J=Xr(this,null,this.W),mn(this)};function ls(n){if($r(n),n.I==3){var o=n.V++,a=ge(n.J);if(q(a,"SID",n.M),q(a,"RID",o),q(a,"TYPE","terminate"),Ft(n,a),o=new De(n,n.j,o),o.M=2,o.A=dn(ge(a)),a=!1,l.navigator&&l.navigator.sendBeacon)try{a=l.navigator.sendBeacon(o.A.toString(),"")}catch{}!a&&l.Image&&(new Image().src=o.A,a=!0),a||(o.g=Yr(o.j,null),o.g.ea(o.A)),o.F=Date.now(),un(o)}Jr(n)}function gn(n){n.g&&(us(n),n.g.cancel(),n.g=null)}function $r(n){gn(n),n.v&&(l.clearTimeout(n.v),n.v=null),yn(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&l.clearTimeout(n.m),n.m=null)}function mn(n){if(!Tr(n.h)&&!n.m){n.m=!0;var o=n.Ea;ne||u(),ie||(ne(),ie=!0),m.add(o,n),n.D=0}}function Ja(n,o){return br(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=o.G.concat(n.i),!0):n.I==1||n.I==2||n.D>=(n.Sa?0:n.Ta)?!1:(n.m=Ct(I(n.Ea,n,o),Kr(n,n.D)),n.D++,!0)}s.Ea=function(n){if(this.m)if(this.m=null,this.I==1){if(!n){this.V=Math.floor(Math.random()*1e5),n=this.V++;const w=new De(this,this.j,n);let E=this.o;if(this.U&&(E?(E=nr(E),rr(E,this.U)):E=this.U),this.u!==null||this.R||(w.J=E,E=null),this.S)e:{for(var o=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(o+=h,o>4096){o=a;break e}if(o===4096||a===this.i.length-1){o=a+1;break e}}o=1e3}else o=1e3;o=qr(this,w,o),a=ge(this.J),q(a,"RID",n),q(a,"CVER",22),this.G&&q(a,"X-HTTP-Session-Id",this.G),Ft(this,a),E&&(this.R?o="headers="+kt(Ur(E))+"&"+o:this.u&&cs(a,this.u,E)),is(this.h,w),this.Ra&&q(a,"TYPE","init"),this.S?(q(a,"$req",o),q(a,"SID","null"),w.U=!0,ts(w,a,null)):ts(w,a,o),this.I=2}}else this.I==3&&(n?Hr(this,n):this.i.length==0||Tr(this.h)||Hr(this))};function Hr(n,o){var a;o?a=o.l:a=n.V++;const h=ge(n.J);q(h,"SID",n.M),q(h,"RID",a),q(h,"AID",n.K),Ft(n,h),n.u&&n.o&&cs(h,n.u,n.o),a=new De(n,n.j,a,n.D+1),n.u===null&&(a.J=n.o),o&&(n.i=o.G.concat(n.i)),o=qr(n,a,1e3),a.H=Math.round(n.va*.5)+Math.round(n.va*.5*Math.random()),is(n.h,a),ts(a,h,o)}function Ft(n,o){n.H&&cn(n.H,function(a,h){q(o,h,a)}),n.l&&cn({},function(a,h){q(o,h,a)})}function qr(n,o,a){a=Math.min(n.i.length,a);const h=n.l?I(n.l.Ka,n.l,n):null;e:{var w=n.i;let N=-1;for(;;){const G=["count="+a];N==-1?a>0?(N=w[0].g,G.push("ofs="+N)):N=0:G.push("ofs="+N);let H=!0;for(let K=0;K<a;K++){var E=w[K].g;const me=w[K].map;if(E-=N,E<0)N=Math.max(0,w[K].g-100),H=!1;else try{E="req"+E+"_"||"";try{var b=me instanceof Map?me:Object.entries(me);for(const[Qe,Ue]of b){let xe=Ue;p(Ue)&&(xe=Kn(Ue)),G.push(E+Qe+"="+encodeURIComponent(xe))}}catch(Qe){throw G.push(E+"type="+encodeURIComponent("_badmap")),Qe}}catch{h&&h(me)}}if(H){b=G.join("&");break e}}b=void 0}return n=n.i.splice(0,a),o.G=n,b}function Wr(n){if(!n.g&&!n.v){n.Y=1;var o=n.Da;ne||u(),ie||(ne(),ie=!0),m.add(o,n),n.A=0}}function hs(n){return n.g||n.v||n.A>=3?!1:(n.Y++,n.v=Ct(I(n.Da,n),Kr(n,n.A)),n.A++,!0)}s.Da=function(){if(this.v=null,zr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var n=4*this.T;this.j.info("BP detection timer enabled: "+n),this.B=Ct(I(this.Wa,this),n)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Y(10),gn(this),zr(this))};function us(n){n.B!=null&&(l.clearTimeout(n.B),n.B=null)}function zr(n){n.g=new De(n,n.j,"rpc",n.Y),n.u===null&&(n.g.J=n.o),n.g.P=0;var o=ge(n.na);q(o,"RID","rpc"),q(o,"SID",n.M),q(o,"AID",n.K),q(o,"CI",n.F?"0":"1"),!n.F&&n.ia&&q(o,"TO",n.ia),q(o,"TYPE","xmlhttp"),Ft(n,o),n.u&&n.o&&cs(o,n.u,n.o),n.O&&(n.g.H=n.O);var a=n.g;n=n.ba,a.M=1,a.A=dn(ge(o)),a.u=null,a.R=!0,vr(a,n)}s.Va=function(){this.C!=null&&(this.C=null,gn(this),hs(this),Y(19))};function yn(n){n.C!=null&&(l.clearTimeout(n.C),n.C=null)}function Gr(n,o){var a=null;if(n.g==o){yn(n),us(n),n.g=null;var h=2}else if(rs(n.h,o))a=o.G,Ar(n.h,o),h=1;else return;if(n.I!=0){if(o.o)if(h==1){a=o.u?o.u.length:0,o=Date.now()-o.F;var w=n.D;h=Yn(),X(h,new mr(h,a)),mn(n)}else Wr(n);else if(w=o.m,w==3||w==0&&o.X>0||!(h==1&&Ja(n,o)||h==2&&hs(n)))switch(a&&a.length>0&&(o=n.h,o.i=o.i.concat(a)),w){case 1:Ye(n,5);break;case 4:Ye(n,10);break;case 3:Ye(n,6);break;default:Ye(n,2)}}}function Kr(n,o){let a=n.Qa+Math.floor(Math.random()*n.Za);return n.isActive()||(a*=2),a*o}function Ye(n,o){if(n.j.info("Error code "+o),o==2){var a=I(n.bb,n),h=n.Ua;const w=!h;h=new Ne(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ot(h,"https"),dn(h),w?Ha(h.toString(),a):qa(h.toString(),a)}else Y(2);n.I=0,n.l&&n.l.pa(o),Jr(n),$r(n)}s.bb=function(n){n?(this.j.info("Successfully pinged google.com"),Y(2)):(this.j.info("Failed to ping google.com"),Y(1))};function Jr(n){if(n.I=0,n.ja=[],n.l){const o=Cr(n.h);(o.length!=0||n.i.length!=0)&&(D(n.ja,o),D(n.ja,n.i),n.h.i.length=0,C(n.i),n.i.length=0),n.l.oa()}}function Xr(n,o,a){var h=a instanceof Ne?ge(a):new Ne(a);if(h.g!="")o&&(h.g=o+"."+h.g),Dt(h,h.u);else{var w=l.location;h=w.protocol,o=o?o+"."+w.hostname:w.hostname,w=+w.port;const E=new Ne(null);h&&Ot(E,h),o&&(E.g=o),w&&Dt(E,w),a&&(E.h=a),h=E}return a=n.G,o=n.wa,a&&o&&q(h,a,o),q(h,"VER",n.ka),Ft(n,h),h}function Yr(n,o,a){if(o&&!n.L)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Aa&&!n.ma?new W(new as({ab:a})):new W(n.ma),o.Fa(n.L),o}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qr(){}s=Qr.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function oe(n,o){J.call(this),this.g=new jr(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.sa&&(n?n["X-WebChannel-Client-Profile"]=o.sa:n={"X-WebChannel-Client-Profile":o.sa}),this.g.U=n,(n=o&&o.Qb)&&!d(n)&&(this.g.u=n),this.A=o&&o.supportsCrossDomainXhr||!1,this.v=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!d(o)&&(this.g.G=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new pt(this)}A(oe,J),oe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},oe.prototype.close=function(){ls(this.g)},oe.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.v&&(a={},a.__data__=Kn(n),n=a);o.i.push(new Ma(o.Ya++,n)),o.I==3&&mn(o)},oe.prototype.N=function(){this.g.l=null,delete this.j,ls(this.g),delete this.g,oe.Z.N.call(this)};function Zr(n){Jn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){e:{for(const a in o){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}A(Zr,Jn);function ei(){Xn.call(this),this.status=1}A(ei,Xn);function pt(n){this.g=n}A(pt,Qr),pt.prototype.ra=function(){X(this.g,"a")},pt.prototype.qa=function(n){X(this.g,new Zr(n))},pt.prototype.pa=function(n){X(this.g,new ei)},pt.prototype.oa=function(){X(this.g,"b")},oe.prototype.send=oe.prototype.o,oe.prototype.open=oe.prototype.m,oe.prototype.close=oe.prototype.close,Qn.NO_ERROR=0,Qn.TIMEOUT=8,Qn.HTTP_ERROR=6,Oa.COMPLETE="complete",Aa.EventType=bt,bt.OPEN="a",bt.CLOSE="b",bt.ERROR="c",bt.MESSAGE="d",J.prototype.listen=J.prototype.J,W.prototype.listenOnce=W.prototype.K,W.prototype.getLastError=W.prototype.Ha,W.prototype.getLastErrorCode=W.prototype.ya,W.prototype.getStatus=W.prototype.ca,W.prototype.getResponseJson=W.prototype.La,W.prototype.getResponseText=W.prototype.la,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Fa}).apply(typeof In<"u"?In:typeof self<"u"?self:typeof window<"u"?window:{});const xi="@firebase/firestore",Vi="4.9.3";/**
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
 */class Q{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
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
 */let rn="12.7.0";/**
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
 */const It=new Us("@firebase/firestore");function de(s,...e){if(It.logLevel<=B.DEBUG){const t=e.map(Xs);It.debug(`Firestore (${rn}): ${s}`,...t)}}function aa(s,...e){if(It.logLevel<=B.ERROR){const t=e.map(Xs);It.error(`Firestore (${rn}): ${s}`,...t)}}function ad(s,...e){if(It.logLevel<=B.WARN){const t=e.map(Xs);It.warn(`Firestore (${rn}): ${s}`,...t)}}function Xs(s){if(typeof s=="string")return s;try{/**
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
*/return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
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
 */function Xt(s,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ca(s,r,t)}function ca(s,e,t){let r=`FIRESTORE (${rn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw aa(r),new Error(r)}function $t(s,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,s||ca(e,i,r)}/**
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
 */const M={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class U extends Re{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ht{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class la{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Q.UNAUTHENTICATED)))}shutdown(){}}class ld{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class hd{constructor(e){this.t=e,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$t(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let c=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ht,e.enqueueRetryable((()=>i(this.currentUser)))};const l=()=>{const _=c;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ht)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($t(typeof r.accessToken=="string",31837,{l:r}),new la(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $t(e===null||typeof e=="string",2055,{h:e}),new Q(e)}}class ud{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class dd{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ud(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Q.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Fi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fd{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,he(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$t(this.o===void 0,3512);const r=c=>{c.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.m;return this.m=c.token,de("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>r(c)))};const i=c=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>i(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?i(c):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Fi(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($t(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Fi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pd(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<s;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ha{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=pd(40);for(let c=0;c<i.length;++c)r.length<20&&i[c]<t&&(r+=e.charAt(i[c]%62))}return r}}function Ge(s,e){return s<e?-1:s>e?1:0}function gd(s,e){const t=Math.min(s.length,e.length);for(let r=0;r<t;r++){const i=s.charAt(r),c=e.charAt(r);if(i!==c)return vs(i)===vs(c)?Ge(i,c):vs(i)?1:-1}return Ge(s.length,e.length)}const md=55296,yd=57343;function vs(s){const e=s.charCodeAt(0);return e>=md&&e<=yd}/**
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
 */const Bi="__name__";class _e{constructor(e,t,r){t===void 0?t=0:t>e.length&&Xt(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Xt(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return _e.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _e?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const c=_e.compareSegments(e.get(i),t.get(i));if(c!==0)return c}return Ge(e.length,t.length)}static compareSegments(e,t){const r=_e.isNumericId(e),i=_e.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?_e.extractNumericId(e).compare(_e.extractNumericId(t)):gd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Js.fromString(e.substring(4,e.length-2))}}class se extends _e{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new se(t)}static emptyPath(){return new se([])}}const _d=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends _e{construct(e,t,r){return new nt(e,t,r)}static isValidIdentifier(e){return _d.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bi}static keyField(){return new nt([Bi])}static fromServerFormat(e){const t=[];let r="",i=0;const c=()=>{if(r.length===0)throw new U(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new U(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new U(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(l=!l,i++):p!=="."||l?(r+=p,i++):(c(),i++)}if(c(),l)throw new U(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(t)}static emptyPath(){return new nt([])}}/**
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
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(se.fromString(e))}static fromName(e){return new ve(se.fromString(e).popFirst(5))}static empty(){return new ve(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new se(e.slice()))}}/**
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
 */function wd(s,e,t){if(!t)throw new U(M.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function vd(s,e,t,r){if(e===!0&&r===!0)throw new U(M.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function ji(s){if(!ve.isDocumentKey(s))throw new U(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Id(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function Ed(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":Xt(12329,{type:typeof s})}function Sd(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new U(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ed(s);throw new U(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
 */function z(s,e){const t={typeString:s};return e&&(t.value=e),t}function on(s,e){if(!Id(s))throw new U(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,c="value"in e[r]?{value:e[r].value}:void 0;if(!(r in s)){t=`JSON missing required field: '${r}'`;break}const l=s[r];if(i&&typeof l!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(c!==void 0&&l!==c.value){t=`Expected '${r}' field to equal '${c.value}'`;break}}if(t)throw new U(M.INVALID_ARGUMENT,t);return!0}/**
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
 */const $i=-62135596800,Hi=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Hi);return new we(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$i)throw new U(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hi}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(on(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$i;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:z("string",we._jsonSchemaVersion),seconds:z("number"),nanoseconds:z("number")};function Td(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new bd("Invalid base64 string: "+c):c}})(e);return new ht(t)}static fromUint8Array(e){const t=(function(i){let c="";for(let l=0;l<i.length;++l)c+=String.fromCharCode(i[l]);return c})(e);return new ht(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Ns="(default)";class xn{constructor(e,t){this.projectId=e,this.database=t||Ns}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database===Ns}isEqual(e){return e instanceof xn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Ad{constructor(e,t=null,r=[],i=[],c=null,l="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=c,this.limitType=l,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Cd(s){return new Ad(s)}/**
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
 */var qi,V;(V=qi||(qi={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Js([4294967295,4294967295],0);/**
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
 */const Pd=41943040;/**
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
 */const kd=1048576;function Is(){return typeof document<"u"?document:null}/**
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
 */class Rd{constructor(e,t,r=1e3,i=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&de("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class Ys{constructor(e,t,r,i,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=c,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,c){const l=Date.now()+r,p=new Ys(e,t,l,i,c);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Wi,zi;(zi=Wi||(Wi={})).Ma="default",zi.Cache="cache";/**
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
 */function Od(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */const Gi=new Map;/**
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
 */const ua="firestore.googleapis.com",Ki=!0;class Ji{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ua,this.ssl=Ki}else this.host=e.host,this.ssl=e.ssl??Ki;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kd)throw new U(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Od(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ji({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ji(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new cd;switch(r.type){case"firstParty":return new dd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Gi.get(t);r&&(de("ComponentProvider","Removing Datastore"),Gi.delete(t),r.terminate())})(this),Promise.resolve()}}function Dd(s,e,t,r={}){var I;s=Sd(s,Qs);const i=Qt(e),c=s._getSettings(),l={...c,emulatorOptions:s._getEmulatorOptions()},p=`${e}:${t}`;i&&(So(`https://${p}`),To("Firestore",!0)),c.host!==ua&&c.host!==p&&ad("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...c,host:p,ssl:i,emulatorOptions:r};if(!at(_,l)&&(s._setSettings(_),r.mockUserToken)){let T,A;if(typeof r.mockUserToken=="string")T=r.mockUserToken,A=Q.MOCK_USER;else{T=Nc(r.mockUserToken,(I=s._app)==null?void 0:I.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new U(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Q(S)}s._authCredentials=new ld(new la(T,A))}}/**
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
 */class Zs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zs(this.firestore,e,this._query)}}class re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}toJSON(){return{type:re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(on(t,re._jsonSchema))return new re(e,r||null,new ve(se.fromString(t.referencePath)))}}re._jsonSchemaVersion="firestore/documentReference/1.0",re._jsonSchema={type:z("string",re._jsonSchemaVersion),referencePath:z("string")};class Yt extends Zs{constructor(e,t,r){super(e,t,Cd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new ve(e))}withConverter(e){return new Yt(this.firestore,e,this._path)}}function Nd(s,e,...t){if(s=Oe(s),arguments.length===1&&(e=ha.newId()),wd("doc","path",e),s instanceof Qs){const r=se.fromString(e,...t);return ji(r),new re(s,null,new ve(r))}{if(!(s instanceof re||s instanceof Yt))throw new U(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(se.fromString(e,...t));return ji(r),new re(s.firestore,s instanceof Yt?s.converter:null,new ve(r))}}/**
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
 */const Xi="AsyncQueue";class Yi{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rd(this,"async_queue_retry"),this._c=()=>{const r=Is();r&&de(Xi,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Is();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Is();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ht;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Td(e))throw e;de(Xi,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,aa("INTERNAL UNHANDLED ERROR: ",Qi(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Ys.createAndSchedule(this,e,t,r,(c=>this.hc(c)));return this.tc.push(i),i}uc(){this.nc&&Xt(47125,{Pc:Qi(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Qi(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class Ld extends Qs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Yi,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yi(e),this._firestoreClient=void 0,await e}}}function Md(s,e){const t=typeof s=="object"?s:Po(),r=typeof s=="string"?s:Ns,i=Vs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const c=Oc("firestore");c&&Dd(i,...c)}return i}/**
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
 */class Te{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Te(ht.fromBase64String(e))}catch(t){throw new U(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Te(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Te._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(on(e,Te._jsonSchema))return Te.fromBase64String(e.bytes)}}Te._jsonSchemaVersion="firestore/bytes/1.0",Te._jsonSchema={type:z("string",Te._jsonSchemaVersion),bytes:z("string")};/**
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
 */class da{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class it{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:it._jsonSchemaVersion}}static fromJSON(e){if(on(e,it._jsonSchema))return new it(e.latitude,e.longitude)}}it._jsonSchemaVersion="firestore/geoPoint/1.0",it._jsonSchema={type:z("string",it._jsonSchemaVersion),latitude:z("number"),longitude:z("number")};/**
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
 */class ot{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let c=0;c<r.length;++c)if(r[c]!==i[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ot._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(on(e,ot._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ot(e.vectorValues);throw new U(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ot._jsonSchemaVersion="firestore/vectorValue/1.0",ot._jsonSchema={type:z("string",ot._jsonSchemaVersion),vectorValues:z("object")};const Ud=new RegExp("[~\\*/\\[\\]]");function xd(s,e,t){if(e.search(Ud)>=0)throw Zi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s);try{return new da(...e.split("."))._internalPath}catch{throw Zi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s)}}function Zi(s,e,t,r,i){let c=`Function ${e}() called with invalid data`;c+=". ";let l="";return new U(M.INVALID_ARGUMENT,c+s+l)}/**
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
 */class fa{constructor(e,t,r,i,c){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Vd extends fa{data(){return super.data()}}function pa(s,e){return typeof e=="string"?xd(s,e):e instanceof da?e._internalPath:e._delegate._internalPath}class En{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _t extends fa{constructor(e,t,r,i,c,l){super(e,t,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(pa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_t._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_t._jsonSchemaVersion="firestore/documentSnapshot/1.0",_t._jsonSchema={type:z("string",_t._jsonSchemaVersion),bundleSource:z("string","DocumentSnapshot"),bundleName:z("string"),bundle:z("string")};class Cn extends _t{data(e={}){return super.data(e)}}class qt{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new En(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Cn(this._firestore,this._userDataWriter,r.key,r,new En(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,c){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map((p=>{const _=new Cn(i._firestore,i._userDataWriter,p.doc.key,p.doc,new En(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:l++}}))}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const _=new Cn(i._firestore,i._userDataWriter,p.doc.key,p.doc,new En(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let I=-1,T=-1;return p.type!==0&&(I=l.indexOf(p.doc.key),l=l.delete(p.doc.key)),p.type!==1&&(l=l.add(p.doc),T=l.indexOf(p.doc.key)),{type:Fd(p.type),doc:_,oldIndex:I,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ha.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),i.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Fd(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Xt(61501,{type:s})}}qt._jsonSchemaVersion="firestore/querySnapshot/1.0",qt._jsonSchema={type:z("string",qt._jsonSchemaVersion),bundleSource:z("string","QuerySnapshot"),bundleName:z("string"),bundle:z("string")};(function(e,t=!0){(function(i){rn=i})(Et),wt(new ct("firestore",((r,{instanceIdentifier:i,options:c})=>{const l=r.getProvider("app").getImmediate(),p=new Ld(new hd(r.getProvider("auth-internal")),new fd(l,r.getProvider("app-check-internal")),(function(I,T){if(!Object.prototype.hasOwnProperty.apply(I.options,["projectId"]))throw new U(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(I.options.projectId,T)})(l,i),l);return c={useFetchStreams:t,...c},p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),ze(xi,Vi,e),ze(xi,Vi,"esm2020")})();const Bd={apiKey:"AIzaSyC8oBLWyTpzWLLjWdZxo8YgQ1IcYICxdcU",authDomain:"threedlocalprint.firebaseapp.com",projectId:"threedlocalprint",storageBucket:"threedlocalprint.firebasestorage.app",messagingSenderId:"770972495364",appId:"1:770972495364:web:b1015eaaf0de32d9b84f51"},ga=Co(Bd),er=id(ga),jd=new Se,$d=Md(ga),Hd=["acker.dawn.apple@gmail.com"];Nd($d,"swatches","list");const qd=s=>!!(s&&Hd.includes(s.email||"")),Wd=()=>pu(er,jd),zd=()=>Kh(er),Gd=s=>Gh(er,s),eo=document.getElementById("swatchHeader"),Ce=document.getElementById("swatchApp"),Kd=pe(()=>[F.class`menu-actions`(Ss({class:"menu-button",href:"./manufacturers.html"},"Manage manufacturers"),Ss({class:"menu-button",href:"/"},"Home")),oc("Swatch Editor"),ac("Edit swatches in place. The preview updates instantly, and the JSON at","the bottom is ready to copy back into your source file.")]);eo&&ao(Kd,eo);const tr=cc.map(s=>({...s})).sort((s,e)=>(Number(s.number)||0)-(Number(e.number)||0)),Jd=()=>tr.map(s=>{const e={number:Number(s.number)||0,label:s.label||""};return s.color_name&&(e.color_name=s.color_name),s.manufacturer&&(e.manufacturer=s.manufacturer),s.material_type&&(e.material_type=s.material_type),s.swatch_code&&(e.swatch_code=s.swatch_code),s.qr_search_data&&(e.qr_search_data=s.qr_search_data),s.barcode_search_data&&(e.barcode_search_data=s.barcode_search_data),s.hex&&(e.hex=s.hex),s.url&&(e.url=s.url),s.spool_inventory!==void 0&&s.spool_inventory!==""&&(e.spool_inventory=Number(s.spool_inventory)||0),e}),Xd=()=>{tr.unshift({number:0,label:"",manufacturer:"",material_type:"",color_name:"",swatch_code:"",qr_search_data:"",barcode_search_data:"",hex:"",url:"",spool_inventory:1}),Ec(0)},Yd=pe(()=>mo(tr,Xd,Jd)),Qd=()=>{Ce&&(Ce.innerHTML=`
    <section class="panel auth-panel">
      <p>Checking login...</p>
    </section>
  `)},Zd=()=>{if(!Ce)return;Ce.innerHTML=`
    <section class="panel auth-panel">
      <h2>Sign in</h2>
      <p>Use Google to access the swatch editor.</p>
      <div class="auth-actions">
        <button class="add-button" type="button" id="loginButton">
          Sign in with Google
        </button>
      </div>
    </section>
  `;const s=document.getElementById("loginButton");s&&s.addEventListener("click",()=>{Wd().catch(e=>{console.error("Firebase sign-in failed",e),alert("Sign in failed. Check the console for details.")})})},ef=s=>{if(!Ce)return;Ce.innerHTML=`
    <section class="panel auth-panel">
      <h2>Access denied</h2>
      <p class="auth-warning">
        ${(s==null?void 0:s.email)||"This account"} is not authorized. Sign in with
        <span class="auth-email">acker.dawn.apple@gmail.com</span>.
      </p>
      <div class="auth-actions">
        <button class="add-button" type="button" id="logoutButton">
          Sign out
        </button>
      </div>
    </section>
  `;const e=document.getElementById("logoutButton");e&&e.addEventListener("click",()=>{zd().catch(t=>{console.error("Firebase sign-out failed",t),alert("Sign out failed. Check the console for details.")})})},tf=()=>{Ce&&(Ce.replaceChildren(),ao(Yd,Ce))};Qd();Gd(s=>{if(!s){Zd();return}if(!qd(s)){ef(s);return}tf()});
