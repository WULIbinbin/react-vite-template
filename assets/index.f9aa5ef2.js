import{r as x,a as Mr,f as nr,g as kr,i as or,j as Hr,k as zr,u as Vr,l as Wr,m as sr,n as Jr,R as Xr,o as Kr,p as Te,N as Gr,L as ir,P as Qr,B as Yr}from"./vendor.84c21b23.js";import{M as ye,A as Zr,S as et,a as rt,C as tt,b as nt,_,B as ar,L as ot,c as O,R as ur,d as k}from"./layout.cecaaf06.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();var c={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var st=x.exports,it=Symbol.for("react.element"),at=Symbol.for("react.fragment"),ut=Object.prototype.hasOwnProperty,ct=st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lt={key:!0,ref:!0,__self:!0,__source:!0};function cr(e,r,t){var o,n={},s=null,i=null;t!==void 0&&(s=""+t),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(i=r.ref);for(o in r)ut.call(r,o)&&!lt.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)n[o]===void 0&&(n[o]=r[o]);return{$$typeof:it,type:e,key:s,ref:i,props:n,_owner:ct.current}}V.Fragment=at;V.jsx=cr;V.jsxs=cr;(function(e){e.exports=V})(c);var lr,Ne=Mr.exports;lr=Ne.createRoot,Ne.hydrateRoot;const ft=[{name:"\u4EEA\u8868\u76D8",to:"/index"},{name:"\u53D1\u7968\u7BA1\u7406",to:"/invoice",children:[{name:"\u53D1\u7968\u67E5\u8BE2",to:"/invoice/invoice-query"},{name:"\u53D1\u7968\u67E5\u9A8C",to:"/invoice/invoice-check"}]},{name:"\u8868\u5355\u7BA1\u7406",to:"/form",children:[{name:"\u8868\u5355\u8BBE\u8BA1",to:"/form/form-sandbox"}]}];var b=(e=>(e.Topbar="Topbar",e.Mix="Mix",e.FullPage="FullPage",e))(b||{}),H=(e=>(e.light="light",e.dark="dark",e))(H||{});const dt={layoutStyle:b.Mix,theme:H.light,showSidebar:!0},fr=nr({name:"layout",initialState:dt,reducers:{switchTheme(e,r){r!=null&&r.payload?(e.theme=H.dark,document.documentElement.setAttribute("theme-mode","dark")):(e.theme=H.light,document.documentElement.removeAttribute("theme-mode"))},toggleSidebar(e,r){e.showSidebar=r.payload},setLayoutStyle(e,r){e.layoutStyle=r.payload}}});var dr={exports:{}},Ee={exports:{}},pr=function(r,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return r.apply(t,n)}},pt=pr,Re=Object.prototype.toString,be=function(e){return function(r){var t=Re.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function C(e){return e=e.toLowerCase(),function(t){return be(t)===e}}function Se(e){return Array.isArray(e)}function z(e){return typeof e>"u"}function ht(e){return e!==null&&!z(e)&&e.constructor!==null&&!z(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var hr=C("ArrayBuffer");function mt(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&hr(e.buffer),r}function vt(e){return typeof e=="string"}function xt(e){return typeof e=="number"}function mr(e){return e!==null&&typeof e=="object"}function $(e){if(be(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var yt=C("Date"),Et=C("File"),Rt=C("Blob"),bt=C("FileList");function we(e){return Re.call(e)==="[object Function]"}function St(e){return mr(e)&&we(e.pipe)}function wt(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Re.call(e)===r||we(e.toString)&&e.toString()===r)}var At=C("URLSearchParams");function gt(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Ot(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Ae(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),Se(e))for(var t=0,o=e.length;t<o;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function xe(){var e={};function r(n,s){$(e[s])&&$(n)?e[s]=xe(e[s],n):$(n)?e[s]=xe({},n):Se(n)?e[s]=n.slice():e[s]=n}for(var t=0,o=arguments.length;t<o;t++)Ae(arguments[t],r);return e}function _t(e,r,t){return Ae(r,function(n,s){t&&typeof n=="function"?e[s]=pt(n,t):e[s]=n}),e}function Ct(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function jt(e,r,t,o){e.prototype=Object.create(r.prototype,o),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function Pt(e,r,t){var o,n,s,i={};r=r||{};do{for(o=Object.getOwnPropertyNames(e),n=o.length;n-- >0;)s=o[n],i[s]||(r[s]=e[s],i[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function Tt(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var o=e.indexOf(r,t);return o!==-1&&o===t}function Nt(e){if(!e)return null;var r=e.length;if(z(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var Dt=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:Se,isArrayBuffer:hr,isBuffer:ht,isFormData:wt,isArrayBufferView:mt,isString:vt,isNumber:xt,isObject:mr,isPlainObject:$,isUndefined:z,isDate:yt,isFile:Et,isBlob:Rt,isFunction:we,isStream:St,isURLSearchParams:At,isStandardBrowserEnv:Ot,forEach:Ae,merge:xe,extend:_t,trim:gt,stripBOM:Ct,inherits:jt,toFlatObject:Pt,kindOf:be,kindOfTest:C,endsWith:Tt,toArray:Nt,isTypedArray:Dt,isFileList:bt},N=v;function De(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var vr=function(r,t,o){if(!t)return r;var n;if(o)n=o(t);else if(N.isURLSearchParams(t))n=t.toString();else{var s=[];N.forEach(t,function(u,p){u===null||typeof u>"u"||(N.isArray(u)?p=p+"[]":u=[u],N.forEach(u,function(h){N.isDate(h)?h=h.toISOString():N.isObject(h)&&(h=JSON.stringify(h)),s.push(De(p)+"="+De(h))}))}),n=s.join("&")}if(n){var i=r.indexOf("#");i!==-1&&(r=r.slice(0,i)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},Bt=v;function W(){this.handlers=[]}W.prototype.use=function(r,t,o){return this.handlers.push({fulfilled:r,rejected:t,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1};W.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};W.prototype.forEach=function(r){Bt.forEach(this.handlers,function(o){o!==null&&r(o)})};var Lt=W,Ft=v,It=function(r,t){Ft.forEach(r,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[s])})},xr=v;function B(e,r,t,o,n){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),t&&(this.config=t),o&&(this.request=o),n&&(this.response=n)}xr.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var yr=B.prototype,Er={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Er[e]={value:e}});Object.defineProperties(B,Er);Object.defineProperty(yr,"isAxiosError",{value:!0});B.from=function(e,r,t,o,n,s){var i=Object.create(yr);return xr.toFlatObject(e,i,function(u){return u!==Error.prototype}),B.call(i,e.message,r,t,o,n),i.name=e.name,s&&Object.assign(i,s),i};var F=B,Rr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=v;function Ut(e,r){r=r||new FormData;var t=[];function o(s){return s===null?"":w.isDate(s)?s.toISOString():w.isArrayBuffer(s)||w.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,i){if(w.isPlainObject(s)||w.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+i);t.push(s),w.forEach(s,function(u,p){if(!w.isUndefined(u)){var d=i?i+"."+p:p,h;if(u&&!i&&typeof u=="object"){if(w.endsWith(p,"{}"))u=JSON.stringify(u);else if(w.endsWith(p,"[]")&&(h=w.toArray(u))){h.forEach(function(l){!w.isUndefined(l)&&r.append(d,o(l))});return}}n(u,d)}}),t.pop()}else r.append(i,o(s))}return n(e),r}var br=Ut,re,Be;function qt(){if(Be)return re;Be=1;var e=F;return re=function(t,o,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):o(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},re}var te,Le;function $t(){if(Le)return te;Le=1;var e=v;return te=e.isStandardBrowserEnv()?function(){return{write:function(o,n,s,i,a,u){var p=[];p.push(o+"="+encodeURIComponent(n)),e.isNumber(s)&&p.push("expires="+new Date(s).toGMTString()),e.isString(i)&&p.push("path="+i),e.isString(a)&&p.push("domain="+a),u===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(o){var n=document.cookie.match(new RegExp("(^|;\\s*)("+o+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(o){this.write(o,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),te}var Mt=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},kt=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},Ht=Mt,zt=kt,Sr=function(r,t){return r&&!Ht(t)?zt(r,t):t},ne,Fe;function Vt(){if(Fe)return ne;Fe=1;var e=v,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return ne=function(o){var n={},s,i,a;return o&&e.forEach(o.split(`
`),function(p){if(a=p.indexOf(":"),s=e.trim(p.substr(0,a)).toLowerCase(),i=e.trim(p.substr(a+1)),s){if(n[s]&&r.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([i]):n[s]=n[s]?n[s]+", "+i:i}}),n},ne}var oe,Ie;function Wt(){if(Ie)return oe;Ie=1;var e=v;return oe=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a"),n;function s(i){var a=i;return t&&(o.setAttribute("href",a),a=o.href),o.setAttribute("href",a),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:o.pathname.charAt(0)==="/"?o.pathname:"/"+o.pathname}}return n=s(window.location.href),function(a){var u=e.isString(a)?s(a):a;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),oe}var se,Ue;function J(){if(Ue)return se;Ue=1;var e=F,r=v;function t(o){e.call(this,o==null?"canceled":o,e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),se=t,se}var ie,qe;function Jt(){return qe||(qe=1,ie=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),ie}var ae,$e;function Me(){if($e)return ae;$e=1;var e=v,r=qt(),t=$t(),o=vr,n=Sr,s=Vt(),i=Wt(),a=Rr,u=F,p=J(),d=Jt();return ae=function(l){return new Promise(function(Ir,j){var I=l.data,U=l.headers,q=l.responseType,P;function Ce(){l.cancelToken&&l.cancelToken.unsubscribe(P),l.signal&&l.signal.removeEventListener("abort",P)}e.isFormData(I)&&e.isStandardBrowserEnv()&&delete U["Content-Type"];var f=new XMLHttpRequest;if(l.auth){var Ur=l.auth.username||"",qr=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";U.Authorization="Basic "+btoa(Ur+":"+qr)}var Y=n(l.baseURL,l.url);f.open(l.method.toUpperCase(),o(Y,l.params,l.paramsSerializer),!0),f.timeout=l.timeout;function je(){if(!!f){var S="getAllResponseHeaders"in f?s(f.getAllResponseHeaders()):null,T=!q||q==="text"||q==="json"?f.responseText:f.response,g={data:T,status:f.status,statusText:f.statusText,headers:S,config:l,request:f};r(function(ee){Ir(ee),Ce()},function(ee){j(ee),Ce()},g),f=null}}if("onloadend"in f?f.onloadend=je:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(je)},f.onabort=function(){!f||(j(new u("Request aborted",u.ECONNABORTED,l,f)),f=null)},f.onerror=function(){j(new u("Network Error",u.ERR_NETWORK,l,f,f)),f=null},f.ontimeout=function(){var T=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",g=l.transitional||a;l.timeoutErrorMessage&&(T=l.timeoutErrorMessage),j(new u(T,g.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,l,f)),f=null},e.isStandardBrowserEnv()){var Pe=(l.withCredentials||i(Y))&&l.xsrfCookieName?t.read(l.xsrfCookieName):void 0;Pe&&(U[l.xsrfHeaderName]=Pe)}"setRequestHeader"in f&&e.forEach(U,function(T,g){typeof I>"u"&&g.toLowerCase()==="content-type"?delete U[g]:f.setRequestHeader(g,T)}),e.isUndefined(l.withCredentials)||(f.withCredentials=!!l.withCredentials),q&&q!=="json"&&(f.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&f.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",l.onUploadProgress),(l.cancelToken||l.signal)&&(P=function(S){!f||(j(!S||S&&S.type?new p:S),f.abort(),f=null)},l.cancelToken&&l.cancelToken.subscribe(P),l.signal&&(l.signal.aborted?P():l.signal.addEventListener("abort",P))),I||(I=null);var Z=d(Y);if(Z&&["http","https","file"].indexOf(Z)===-1){j(new u("Unsupported protocol "+Z+":",u.ERR_BAD_REQUEST,l));return}f.send(I)})},ae}var ue,ke;function Xt(){return ke||(ke=1,ue=null),ue}var m=v,He=It,ze=F,Kt=Rr,Gt=br,Qt={"Content-Type":"application/x-www-form-urlencoded"};function Ve(e,r){!m.isUndefined(e)&&m.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function Yt(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Me()),e}function Zt(e,r,t){if(m.isString(e))try{return(r||JSON.parse)(e),m.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(t||JSON.stringify)(e)}var X={transitional:Kt,adapter:Yt(),transformRequest:[function(r,t){if(He(t,"Accept"),He(t,"Content-Type"),m.isFormData(r)||m.isArrayBuffer(r)||m.isBuffer(r)||m.isStream(r)||m.isFile(r)||m.isBlob(r))return r;if(m.isArrayBufferView(r))return r.buffer;if(m.isURLSearchParams(r))return Ve(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var o=m.isObject(r),n=t&&t["Content-Type"],s;if((s=m.isFileList(r))||o&&n==="multipart/form-data"){var i=this.env&&this.env.FormData;return Gt(s?{"files[]":r}:r,i&&new i)}else if(o||n==="application/json")return Ve(t,"application/json"),Zt(r);return r}],transformResponse:[function(r){var t=this.transitional||X.transitional,o=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!o&&this.responseType==="json";if(s||n&&m.isString(r)&&r.length)try{return JSON.parse(r)}catch(i){if(s)throw i.name==="SyntaxError"?ze.from(i,ze.ERR_BAD_RESPONSE,this,null,this.response):i}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xt()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};m.forEach(["delete","get","head"],function(r){X.headers[r]={}});m.forEach(["post","put","patch"],function(r){X.headers[r]=m.merge(Qt)});var ge=X,en=v,rn=ge,tn=function(r,t,o){var n=this||rn;return en.forEach(o,function(i){r=i.call(n,r,t)}),r},ce,We;function wr(){return We||(We=1,ce=function(r){return!!(r&&r.__CANCEL__)}),ce}var Je=v,le=tn,nn=wr(),on=ge,sn=J();function fe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new sn}var an=function(r){fe(r),r.headers=r.headers||{},r.data=le.call(r,r.data,r.headers,r.transformRequest),r.headers=Je.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),Je.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||on.adapter;return t(r).then(function(n){return fe(r),n.data=le.call(r,n.data,n.headers,r.transformResponse),n},function(n){return nn(n)||(fe(r),n&&n.response&&(n.response.data=le.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},R=v,Ar=function(r,t){t=t||{};var o={};function n(d,h){return R.isPlainObject(d)&&R.isPlainObject(h)?R.merge(d,h):R.isPlainObject(h)?R.merge({},h):R.isArray(h)?h.slice():h}function s(d){if(R.isUndefined(t[d])){if(!R.isUndefined(r[d]))return n(void 0,r[d])}else return n(r[d],t[d])}function i(d){if(!R.isUndefined(t[d]))return n(void 0,t[d])}function a(d){if(R.isUndefined(t[d])){if(!R.isUndefined(r[d]))return n(void 0,r[d])}else return n(void 0,t[d])}function u(d){if(d in t)return n(r[d],t[d]);if(d in r)return n(void 0,r[d])}var p={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return R.forEach(Object.keys(r).concat(Object.keys(t)),function(h){var l=p[h]||s,y=l(h);R.isUndefined(y)&&l!==u||(o[h]=y)}),o},de,Xe;function gr(){return Xe||(Xe=1,de={version:"0.27.2"}),de}var un=gr().version,A=F,Oe={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){Oe[e]=function(o){return typeof o===e||"a"+(r<1?"n ":" ")+e}});var Ke={};Oe.transitional=function(r,t,o){function n(s,i){return"[Axios v"+un+"] Transitional option '"+s+"'"+i+(o?". "+o:"")}return function(s,i,a){if(r===!1)throw new A(n(i," has been removed"+(t?" in "+t:"")),A.ERR_DEPRECATED);return t&&!Ke[i]&&(Ke[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(s,i,a):!0}};function cn(e,r,t){if(typeof e!="object")throw new A("options must be an object",A.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(e),n=o.length;n-- >0;){var s=o[n],i=r[s];if(i){var a=e[s],u=a===void 0||i(a,s,e);if(u!==!0)throw new A("option "+s+" must be "+u,A.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new A("Unknown option "+s,A.ERR_BAD_OPTION)}}var ln={assertOptions:cn,validators:Oe},Or=v,fn=vr,Ge=Lt,Qe=an,K=Ar,dn=Sr,_r=ln,D=_r.validators;function L(e){this.defaults=e,this.interceptors={request:new Ge,response:new Ge}}L.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=K(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var o=t.transitional;o!==void 0&&_r.assertOptions(o,{silentJSONParsing:D.transitional(D.boolean),forcedJSONParsing:D.transitional(D.boolean),clarifyTimeoutError:D.transitional(D.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(t)===!1||(s=s&&y.synchronous,n.unshift(y.fulfilled,y.rejected))});var i=[];this.interceptors.response.forEach(function(y){i.push(y.fulfilled,y.rejected)});var a;if(!s){var u=[Qe,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(i),a=Promise.resolve(t);u.length;)a=a.then(u.shift(),u.shift());return a}for(var p=t;n.length;){var d=n.shift(),h=n.shift();try{p=d(p)}catch(l){h(l);break}}try{a=Qe(p)}catch(l){return Promise.reject(l)}for(;i.length;)a=a.then(i.shift(),i.shift());return a};L.prototype.getUri=function(r){r=K(this.defaults,r);var t=dn(r.baseURL,r.url);return fn(t,r.params,r.paramsSerializer)};Or.forEach(["delete","get","head","options"],function(r){L.prototype[r]=function(t,o){return this.request(K(o||{},{method:r,url:t,data:(o||{}).data}))}});Or.forEach(["post","put","patch"],function(r){function t(o){return function(s,i,a){return this.request(K(a||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}L.prototype[r]=t(),L.prototype[r+"Form"]=t(!0)});var pn=L,pe,Ye;function hn(){if(Ye)return pe;Ye=1;var e=J();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(i){o=i});var n=this;this.promise.then(function(s){if(!!n._listeners){var i,a=n._listeners.length;for(i=0;i<a;i++)n._listeners[i](s);n._listeners=null}}),this.promise.then=function(s){var i,a=new Promise(function(u){n.subscribe(u),i=u}).then(s);return a.cancel=function(){n.unsubscribe(i)},a},t(function(i){n.reason||(n.reason=new e(i),o(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]},r.prototype.unsubscribe=function(o){if(!!this._listeners){var n=this._listeners.indexOf(o);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var o,n=new r(function(i){o=i});return{token:n,cancel:o}},pe=r,pe}var he,Ze;function mn(){return Ze||(Ze=1,he=function(r){return function(o){return r.apply(null,o)}}),he}var me,er;function vn(){if(er)return me;er=1;var e=v;return me=function(t){return e.isObject(t)&&t.isAxiosError===!0},me}var rr=v,xn=pr,M=pn,yn=Ar,En=ge;function Cr(e){var r=new M(e),t=xn(M.prototype.request,r);return rr.extend(t,M.prototype,r),rr.extend(t,r),t.create=function(n){return Cr(yn(e,n))},t}var E=Cr(En);E.Axios=M;E.CanceledError=J();E.CancelToken=hn();E.isCancel=wr();E.VERSION=gr().version;E.toFormData=br;E.AxiosError=F;E.Cancel=E.CanceledError;E.all=function(r){return Promise.all(r)};E.spread=mn();E.isAxiosError=vn();Ee.exports=E;Ee.exports.default=E;(function(e){e.exports=Ee.exports})(dr);const Rn=kr(dr.exports),bn=5e3,Sn="https://wulibinbin.github.io/",wn=0,G=Rn.create({baseURL:Sn,withCredentials:!0,timeout:bn});G.interceptors.request.use(e=>e,e=>Promise.reject(e));G.interceptors.response.use(e=>{const{status:r,data:t}=e;return console.log(e),r===200&&t.code===wn?t:Promise.reject(e)},e=>Promise.reject(e));function An(e={}){return G({url:"/login",data:e,method:"POST"})}function gn(e={}){return G({url:"/checkSession",data:e,method:"POST"})}function On(e){return new Promise(r=>{e.then(t=>{r([null,t])}).catch(t=>{r([t,null])})})}function io(e,r){var n;const t=[],o={};for(const s of e){const{parentId:i,itemId:a}=s;o[a]={...s,children:((n=o[a])==null?void 0:n.children)||[]};const u=o[a];i===r?t.push(u):(o[i]||(o[i]={children:[]}),o[i].children.splice(u.nodeIndex,0,u))}return[t,o]}function ao(e,r){if(!e)return[];const t=[];function o(n,s){n.forEach((i,a)=>{i.itemId=i.itemId||Cn(),i.parentId=i.parentId||(s==null?void 0:s.itemId)||null,i.nodeIndex=a,i.formData=i.formData||{},i.compType==="wrap"&&(i.children=i.children||[],o(i.children,i)),t.push(i)})}return o(e,r),t}const _n="formId";function Cn(e=8){const r="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",t=r.length;let o="";for(let n=0;n<e;n++)o+=r.charAt(Math.floor(Math.random()*t));return`${_n}-${o}`}function uo(e,r,t){const o=Math.abs(r-t),n=[];for(let s=0;s<e.length;s++)if(r>t){if((s>r||s<t)&&(n[s]=e[s]),s===t){n[s]=e[r];for(let i=0;i<o;i++)n[s+i+1]=e[s+i]}}else if((s>t||s<r)&&(n[s]=e[s]),s===r){for(let i=0;i<o;i++)n[s+i]=e[s+i+1];n[s+o]=e[r]}return n}const jn={accountInfo:{name:""},loginStatus:"LOGOUT"};or("account/checkSession",async()=>{try{return(await gn()).data}catch{return null}});const tr=or("account/login",async()=>{const[e,r]=await On(An());return e?Promise.reject(e):r.data}),Pn=nr({name:"account",initialState:jn,reducers:{},extraReducers:e=>{e.addCase(tr.fulfilled,r=>{console.log(r),r.loginStatus="LOGIN"}),e.addCase(tr.rejected,r=>{r.loginStatus="LOGERR"})}}),Tn=Hr({layout:fr.reducer,account:Pn.reducer}),Nn=zr({reducer:Tn}),jr=()=>Vr(),Q=Wr,Pr=fr.actions,{MenuItem:Dn,SubMenu:Bn}=ye;function Tr(e){return e.map(r=>r.children?c.exports.jsx(Bn,{value:r.to,title:r.name,children:Tr(r.children)},r.to):c.exports.jsx(Dn,{value:r.to,children:c.exports.jsx("span",{children:r.name})},r.to))}function Ln(){const[e,r]=x.exports.useState(""),t=sr(),{pathname:o}=Jr(),n=Q(i=>i.layout);x.exports.useEffect(()=>{r(o)},[o]);const s=x.exports.useCallback(i=>{console.log(i),r(i),t(i)},[e]);return c.exports.jsx(ye,{value:e,theme:n.theme,onChange:s,children:Tr(ft)})}const{HeadMenu:Fn,SubMenu:In,MenuItem:ve}=ye;function Un(){const e=Q(i=>i.layout),r=jr(),t=sr();function o(i){}function n(i){r(Pr.switchTheme(!!i))}function s(){t("/account/login",{replace:!0})}return c.exports.jsxs(Fn,{theme:e.theme,expandType:"popup",onChange:o,children:[c.exports.jsxs(In,{value:"0",title:c.exports.jsx(Zr,{hideOnLoadFailed:!1,image:"https://tdesign.gtimg.com/site/avatar.jpg",shape:"circle"}),children:[c.exports.jsx(ve,{value:"mine",children:"\u4E2A\u4EBA\u4E2D\u5FC3"}),c.exports.jsx(ve,{value:"switch",children:"\u5207\u6362\u8D26\u53F7"}),c.exports.jsx(ve,{value:"logout",onClick:s,children:"\u9000\u51FA\u767B\u5F55"})]}),c.exports.jsxs(et,{align:"center",size:"small",children:[c.exports.jsx(rt,{size:"large",label:[c.exports.jsx(tt,{},"0"),c.exports.jsx(nt,{},"1")],onChange:n}),c.exports.jsx("span",{children:"\u9ED1\u6697\u6A21\u5F0F"})]})]})}const Nr=Xr.memo(Un),qn=x.exports.lazy(()=>_(()=>import("./index.c2d07ef2.js"),["./index.c2d07ef2.js","./vendor.84c21b23.js","./index.df2db80c.js","./layout.cecaaf06.js"],import.meta.url)),$n=x.exports.lazy(()=>_(()=>import("./index.cdbf84fa.js"),["./index.cdbf84fa.js","./vendor.84c21b23.js","./layout.cecaaf06.js"],import.meta.url)),Mn=x.exports.lazy(()=>_(()=>import("./index.c662107f.js"),["./index.c662107f.js","./vendor.84c21b23.js","./layout.cecaaf06.js"],import.meta.url)),kn=x.exports.lazy(()=>_(()=>import("./index.12e5d9f4.js"),["./index.12e5d9f4.js","./vendor.84c21b23.js","./layout.cecaaf06.js"],import.meta.url)),Hn=x.exports.lazy(()=>_(()=>import("./index.2c3f8ef7.js"),["./index.2c3f8ef7.js","./vendor.84c21b23.js","./layout.cecaaf06.js"],import.meta.url)),zn=x.exports.lazy(()=>_(()=>import("./index.e70bb2d3.js"),["./index.e70bb2d3.js","./vendor.84c21b23.js","./layout.cecaaf06.js"],import.meta.url)),Vn=x.exports.lazy(()=>_(()=>import("./index.b6130a89.js"),["./index.b6130a89.js","./vendor.84c21b23.js","./layout.cecaaf06.js","./index.df2db80c.js"],import.meta.url)),Wn=[{path:"*",redirect:"/index"},{path:"/error/:type",meta:{title:"\u8DF3\u8F6C\u9519\u8BEF",layoutStyle:b.FullPage},component:Mn},{path:"/",index:!0,redirect:"/account/login"},{path:"/index",meta:{title:"\u9996\u9875",showBreadcrumb:!0,layoutStyle:b.Mix},component:qn},{path:"/account",redirect:"/account/login"},{path:"/account",children:[{path:"/login",meta:{title:"\u7528\u6237\u767B\u5F55",layoutStyle:b.FullPage},component:$n}]},{path:"/invoice",meta:{title:"\u53D1\u7968\u7BA1\u7406",showBreadcrumb:!0},children:[{path:"/invoice-query",meta:{title:"\u53D1\u7968\u67E5\u8BE2",showBreadcrumb:!0,layoutStyle:b.Mix},component:kn},{path:"/invoice-detail",meta:{title:"\u53D1\u7968\u8BE6\u60C5",showBreadcrumb:!0,layoutStyle:b.FullPage},component:zn},{path:"/invoice-check",meta:{title:"\u53D1\u7968\u67E5\u9A8C",showBreadcrumb:!0,layoutStyle:b.Mix},component:Hn}]},{path:"/invoice",redirect:"/invoice/invoice-query"},{path:"/form",meta:{title:"\u8868\u5355\u7BA1\u7406",showBreadcrumb:!0},children:[{path:"/form-sandbox",meta:{title:"\u8868\u5355\u8BBE\u8BA1",showBreadcrumb:!0,layoutStyle:b.Mix},component:Vn}]},{path:"/form",redirect:"/form/sandbox"}],{BreadcrumbItem:Jn}=ar,Xn=x.exports.memo(e=>{const r=Q(i=>i.layout),{layoutStyle:t,children:o,breadcrumbs:n}=e,s=jr();return x.exports.useEffect(()=>{s(Pr.setLayoutStyle(t))},[t]),c.exports.jsxs("div",{className:"g-container",children:[n.length>0&&c.exports.jsx(ar,{maxItemWidth:"200px",theme:r.theme,children:n.map((i,a)=>c.exports.jsx(Jn,{children:i},a))}),c.exports.jsx("div",{className:"g-container-body",children:o})]})}),Kn=(e="",r="")=>{let t="/";return(e.endsWith("/")||r.startsWith("/"))&&(t=""),`${e}${t}${r}`},Dr=(e,r="",t=[])=>e.map((o,n)=>{const{component:s,children:i,redirect:a,meta:u,index:p=!1}=o,d=Kn(r,o.path);let h=null,l=t;const y=(u==null?void 0:u.layoutStyle)||b.Mix;return(u==null?void 0:u.showBreadcrumb)&&(u==null?void 0:u.title)&&(l=l.concat([u==null?void 0:u.title])),i&&(h=Dr(i,d,l)),a?c.exports.jsx(Te,{path:d,element:c.exports.jsx(Gr,{to:a,replace:!0}),children:h},n):s?c.exports.jsx(Te,{path:d,index:p,element:c.exports.jsx(Xn,{breadcrumbs:l,layoutStyle:y,children:c.exports.jsx(x.exports.Suspense,{fallback:c.exports.jsx(ot,{delay:200,fullscreen:!0,indicator:!0,inheritColor:!1,loading:!0,preventScrollThrough:!0,showOverlay:!0,size:"medium"}),children:c.exports.jsx(s,{})})})},n):h});function _e(){return c.exports.jsx(x.exports.Suspense,{children:c.exports.jsx(Kr,{children:Dr(Wn)})})}const{Header:Br,Content:Lr,Footer:Fr,Aside:Gn}=O,Qn=()=>c.exports.jsxs(O,{className:"g-layout",children:[c.exports.jsx(Br,{children:c.exports.jsxs(ur,{className:"g-header",children:[c.exports.jsx(k,{className:"g-header-left",children:c.exports.jsx(ir,{to:"/index",children:c.exports.jsx("h3",{children:"WEB"})})}),c.exports.jsx(k,{className:"g-header-right",children:c.exports.jsx(Nr,{})})]})}),c.exports.jsxs(O,{children:[c.exports.jsx(Gn,{children:c.exports.jsx(Ln,{})}),c.exports.jsxs(O,{children:[c.exports.jsx(Lr,{className:"g-content",children:c.exports.jsx(_e,{})}),c.exports.jsx(Fr,{className:"g-footer",children:"\u6211\u662F\u5E95\u90E8"})]})]})]}),Yn=()=>c.exports.jsxs(O,{className:"g-layout",children:[c.exports.jsx(Br,{children:c.exports.jsxs(ur,{className:"g-header",children:[c.exports.jsx(k,{className:"g-header-left",children:c.exports.jsx(ir,{to:"/index",children:c.exports.jsx("h3",{children:"WEB"})})}),c.exports.jsx(k,{className:"g-header-right",children:c.exports.jsx(Nr,{})})]})}),c.exports.jsxs(O,{children:[c.exports.jsx(Lr,{className:"g-content",children:c.exports.jsx(_e,{})}),c.exports.jsx(Fr,{className:"g-footer",children:"\u6211\u662F\u5E95\u90E8"})]})]}),Zn=()=>c.exports.jsx(O,{className:"g-layout",children:c.exports.jsx(_e,{})}),eo={[b.Mix]:Qn,[b.FullPage]:Zn,[b.Topbar]:Yn};function ro(){const e=Q(t=>t.layout),r=eo[e.layoutStyle];return c.exports.jsx(r,{})}function to(){return c.exports.jsx(Qr,{store:Nn,children:c.exports.jsx(Yr,{children:c.exports.jsx(ro,{})})})}const no=lr(document.getElementById("container"));no.render(c.exports.jsx(to,{}));export{On as a,io as b,uo as c,c as j,tr as l,ao as m};