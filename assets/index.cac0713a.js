var Nt=Object.defineProperty;var Mt=(e,t,n)=>t in e?Nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ue=(e,t,n)=>(Mt(e,typeof t!="symbol"?t+"":t,n),n);import{s as at,r as D,R as Lt}from"./vendor.abe2ed9a.js";import{j as h,a as Rt,b as Ut,c as Bt,m as Ht}from"./index.fcea98e0.js";import{s as Gt,I as it,j as zt,k as Vt,F as _e,l as Ne,m as Kt,f as Me,n as kt,o as Wt}from"./layout.b781c6f7.js";var oe={exports:{}};const qt=at(Gt);var ct={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],m=0;m<arguments.length;m++){var c=arguments[m];if(!!c){var u=typeof c;if(u==="string"||u==="number")r.push(c);else if(Array.isArray(c)){if(c.length){var g=n.apply(null,c);g&&r.push(g)}}else if(u==="object")if(c.toString===Object.prototype.toString)for(var d in c)t.call(c,d)&&c[d]&&r.push(d);else r.push(c.toString())}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(ct);var Jt="Invariant failed";function Yt(e,t){if(!e)throw new Error(Jt)}const Xt=Object.freeze(Object.defineProperty({__proto__:null,default:Yt},Symbol.toStringTag,{value:"Module"})),Zt=at(Xt);(function(e){var t=qt,n=ct.exports,r=D.exports,m=Zt;function c(s){return s&&s.__esModule?s.default:s}function u(s,o,i,l){Object.defineProperty(s,o,{get:i,set:l,enumerable:!0,configurable:!0})}function g(s,o){return Object.keys(o).forEach(function(i){i==="default"||i==="__esModule"||s.hasOwnProperty(i)||Object.defineProperty(s,i,{enumerable:!0,get:function(){return o[i]}})}),s}u(e.exports,"Sortable",()=>$882b6d93070905b3$re_export$Sortable),u(e.exports,"Direction",()=>$882b6d93070905b3$re_export$Direction),u(e.exports,"DOMRect",()=>$882b6d93070905b3$re_export$DOMRect),u(e.exports,"GroupOptions",()=>$882b6d93070905b3$re_export$GroupOptions),u(e.exports,"MoveEvent",()=>$882b6d93070905b3$re_export$MoveEvent),u(e.exports,"Options",()=>$882b6d93070905b3$re_export$Options),u(e.exports,"PullResult",()=>$882b6d93070905b3$re_export$PullResult),u(e.exports,"PutResult",()=>$882b6d93070905b3$re_export$PutResult),u(e.exports,"SortableEvent",()=>$882b6d93070905b3$re_export$SortableEvent),u(e.exports,"SortableOptions",()=>$882b6d93070905b3$re_export$SortableOptions),u(e.exports,"Utils",()=>$882b6d93070905b3$re_export$Utils),u(e.exports,"ReactSortable",()=>C);function d(s){s.parentElement!==null&&s.parentElement.removeChild(s)}function f(s,o,i){const l=s.children[i]||null;s.insertBefore(o,l)}function j(s){s.forEach(o=>d(o.element))}function w(s){s.forEach(o=>{f(o.parentElement,o.element,o.oldIndex)})}function S(s,o){const i=T(s),l={parentElement:s.from};let b=[];switch(i){case"normal":b=[{element:s.item,newIndex:s.newIndex,oldIndex:s.oldIndex,parentElement:s.from}];break;case"swap":const v={element:s.item,oldIndex:s.oldIndex,newIndex:s.newIndex,...l},I={element:s.swapItem,oldIndex:s.newIndex,newIndex:s.oldIndex,...l};b=[v,I];break;case"multidrag":b=s.oldIndicies.map((A,z)=>({element:A.multiDragElement,oldIndex:A.index,newIndex:s.newIndicies[z].index,...l}));break}return a(b,o)}function L(s,o){const i=F(s,o);return N(s,i)}function F(s,o){const i=[...o];return s.concat().reverse().forEach(l=>i.splice(l.oldIndex,1)),i}function N(s,o,i,l){const b=[...o];return s.forEach(p=>{const y=l&&i&&l(p.item,i);b.splice(p.newIndex,0,y||p.item)}),b}function T(s){return s.oldIndicies&&s.oldIndicies.length>0?"multidrag":s.swapItem?"swap":"normal"}function a(s,o){return s.map(l=>({...l,item:o[l.oldIndex]})).sort((l,b)=>l.oldIndex-b.oldIndex)}function O(s){const{list:o,setList:i,children:l,tag:b,style:p,className:y,clone:v,onAdd:I,onChange:A,onChoose:z,onClone:Ae,onEnd:q,onFilter:Ee,onRemove:ne,onSort:De,onStart:Pe,onUnchoose:Fe,onUpdate:da,onMove:fa,onSpill:ba,onSelect:ha,onDeselect:ma,...Ft}=s;return Ft}const x={dragging:null};class C extends r.Component{constructor(o){super(o),this.ref=(0,r.createRef)();const i=[...o.list].map(l=>Object.assign(l,{chosen:!1,selected:!1}));o.setList(i,this.sortable,x),c(m)(!o.plugins,`
Plugins prop is no longer supported.
Instead, mount it with "Sortable.mount(new MultiDrag())"
Please read the updated README.md at https://github.com/SortableJS/react-sortablejs.
      `)}componentDidMount(){if(this.ref.current===null)return;const o=this.makeOptions();c(t).create(this.ref.current,o)}componentDidUpdate(o){o.disabled!==this.props.disabled&&this.sortable&&this.sortable.option("disabled",this.props.disabled)}render(){const{tag:o,style:i,className:l,id:b}=this.props,p={style:i,className:l,id:b},y=!o||o===null?"div":o;return(0,r.createElement)(y,{ref:this.ref,...p},this.getChildren())}getChildren(){const{children:o,dataIdAttr:i,selectedClass:l="sortable-selected",chosenClass:b="sortable-chosen",dragClass:p="sortable-drag",fallbackClass:y="sortable-falback",ghostClass:v="sortable-ghost",swapClass:I="sortable-swap-highlight",filter:A="sortable-filter",list:z}=this.props;if(!o||o==null)return null;const Ae=i||"data-id";return r.Children.map(o,(q,Ee)=>{if(q===void 0)return;const ne=z[Ee]||{},{className:De}=q.props,Pe=typeof A=="string"&&{[A.replace(".","")]:!!ne.filtered},Fe=c(n)(De,{[l]:ne.selected,[b]:ne.chosen,...Pe});return(0,r.cloneElement)(q,{[Ae]:q.key,className:Fe})})}get sortable(){const o=this.ref.current;if(o===null)return null;const i=Object.keys(o).find(l=>l.includes("Sortable"));return i?o[i]:null}makeOptions(){const o=["onAdd","onChoose","onDeselect","onEnd","onRemove","onSelect","onSpill","onStart","onUnchoose","onUpdate"],i=["onChange","onClone","onFilter","onSort"],l=O(this.props);return o.forEach(p=>l[p]=this.prepareOnHandlerPropAndDOM(p)),i.forEach(p=>l[p]=this.prepareOnHandlerProp(p)),{...l,onMove:(p,y)=>{const{onMove:v}=this.props,I=p.willInsertAfter||-1;if(!v)return I;const A=v(p,y,this.sortable,x);return typeof A>"u"?!1:A}}}prepareOnHandlerPropAndDOM(o){return i=>{this.callOnHandlerProp(i,o),this[o](i)}}prepareOnHandlerProp(o){return i=>{this.callOnHandlerProp(i,o)}}callOnHandlerProp(o,i){const l=this.props[i];l&&l(o,this.sortable,x)}onAdd(o){const{list:i,setList:l,clone:b}=this.props,p=[...x.dragging.props.list],y=S(o,p);j(y);const v=N(y,i,o,b).map(I=>Object.assign(I,{selected:!1}));l(v,this.sortable,x)}onRemove(o){const{list:i,setList:l}=this.props,b=T(o),p=S(o,i);w(p);let y=[...i];if(o.pullMode!=="clone")y=F(p,y);else{let v=p;switch(b){case"multidrag":v=p.map((I,A)=>({...I,element:o.clones[A]}));break;case"normal":v=p.map(I=>({...I,element:o.clone}));break;case"swap":default:c(m)(!0,`mode "${b}" cannot clone. Please remove "props.clone" from <ReactSortable/> when using the "${b}" plugin`)}j(v),p.forEach(I=>{const A=I.oldIndex,z=this.props.clone(I.item,o);y.splice(A,1,z)})}y=y.map(v=>Object.assign(v,{selected:!1})),l(y,this.sortable,x)}onUpdate(o){const{list:i,setList:l}=this.props,b=S(o,i);j(b),w(b);const p=L(b,i);return l(p,this.sortable,x)}onStart(){x.dragging=this}onEnd(){x.dragging=null}onChoose(o){const{list:i,setList:l}=this.props,b=i.map((p,y)=>{let v=p;return y===o.oldIndex&&(v=Object.assign(p,{chosen:!0})),v});l(b,this.sortable,x)}onUnchoose(o){const{list:i,setList:l}=this.props,b=i.map((p,y)=>{let v=p;return y===o.oldIndex&&(v=Object.assign(v,{chosen:!1})),v});l(b,this.sortable,x)}onSpill(o){const{removeOnSpill:i,revertOnSpill:l}=this.props;i&&!l&&d(o.item)}onSelect(o){const{list:i,setList:l}=this.props,b=i.map(p=>Object.assign(p,{selected:!1}));o.newIndicies.forEach(p=>{const y=p.index;if(y===-1){console.log(`"${o.type}" had indice of "${p.index}", which is probably -1 and doesn't usually happen here.`),console.log(o);return}b[y].selected=!0}),l(b,this.sortable,x)}onDeselect(o){const{list:i,setList:l}=this.props,b=i.map(p=>Object.assign(p,{selected:!1}));o.newIndicies.forEach(p=>{const y=p.index;y!==-1&&(b[y].selected=!0)}),l(b,this.sortable,x)}}ue(C,"defaultProps",{clone:o=>o});var E={};g(e.exports,E)})(oe);class lt{constructor(){ue(this,"subs");this.subs=[]}watch(t){this.subs.push(t)}emit(t){this.subs.forEach(n=>{n(t)})}destroy(){this.subs=[]}}const he=new lt,me=new lt;function re({noMask:e=!1,children:t,eventData:n}){return h.exports.jsxs("div",{className:`form-sandbox__payground__item ${!e&&"form-sandbox__payground--mask"||"under-delete"}`,onClick:r=>{r.stopPropagation(),me.emit(n)},children:[h.exports.jsx("div",{className:"form-sandbox__payground--delete",onClick:r=>{r.stopPropagation(),he.emit(n)},children:"-"}),t]})}const{FormItem:pe}=_e;function Le(e,{renderChild:t,parent:n=null}){return e&&e.map((r,m)=>{var f,j;let c=null;const u=`${((f=r.formData)==null?void 0:f.formName)||r.compName}:${r.itemId}`,g=`${((j=r.formData)==null?void 0:j.placeHolder)||r.compName}`,d={idx:m,parent:n,current:e};switch(r.compType){case"wrap":c=h.exports.jsxs(re,{eventData:d,noMask:!0,children:[h.exports.jsx("p",{children:u}),t&&t(r)]});break;case"date-picker":c=h.exports.jsx(re,{eventData:d,children:h.exports.jsx(pe,{labelAlign:"top",label:u,children:h.exports.jsx(Vt,{mode:"date",placeholder:g})})});break;case"selector":c=h.exports.jsx(re,{eventData:d,children:h.exports.jsx(pe,{labelAlign:"top",label:u,children:h.exports.jsx(zt,{options:[{label:"\u9009\u9879\u4E00",value:"1"}],placeholder:g})})});break;default:c=h.exports.jsx(re,{eventData:d,children:h.exports.jsx(pe,{labelAlign:"top",label:u,children:h.exports.jsx(it,{readonly:!0,placeholder:g})})})}return h.exports.jsx("div",{className:"form-sandbox__payground__box","comp-type":r.compType,children:c},r.itemId)})}function Qt(){this.__data__=[],this.size=0}function ut(e,t){return e===t||e!==e&&t!==t}function ie(e,t){for(var n=e.length;n--;)if(ut(e[n][0],t))return n;return-1}var en=Array.prototype,tn=en.splice;function nn(e){var t=this.__data__,n=ie(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():tn.call(t,n,1),--this.size,!0}function rn(e){var t=this.__data__,n=ie(t,e);return n<0?void 0:t[n][1]}function on(e){return ie(this.__data__,e)>-1}function sn(e,t){var n=this.__data__,r=ie(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function M(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}M.prototype.clear=Qt;M.prototype.delete=nn;M.prototype.get=rn;M.prototype.has=on;M.prototype.set=sn;function an(){this.__data__=new M,this.size=0}function cn(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function ln(e){return this.__data__.get(e)}function un(e){return this.__data__.has(e)}var pn=typeof global=="object"&&global&&global.Object===Object&&global;const pt=pn;var dn=typeof self=="object"&&self&&self.Object===Object&&self,fn=pt||dn||Function("return this")();const P=fn;var bn=P.Symbol;const V=bn;var dt=Object.prototype,hn=dt.hasOwnProperty,mn=dt.toString,J=V?V.toStringTag:void 0;function gn(e){var t=hn.call(e,J),n=e[J];try{e[J]=void 0;var r=!0}catch{}var m=mn.call(e);return r&&(t?e[J]=n:delete e[J]),m}var xn=Object.prototype,yn=xn.toString;function $n(e){return yn.call(e)}var _n="[object Null]",vn="[object Undefined]",Re=V?V.toStringTag:void 0;function Q(e){return e==null?e===void 0?vn:_n:Re&&Re in Object(e)?gn(e):$n(e)}function ee(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var jn="[object AsyncFunction]",wn="[object Function]",Tn="[object GeneratorFunction]",On="[object Proxy]";function ft(e){if(!ee(e))return!1;var t=Q(e);return t==wn||t==Tn||t==jn||t==On}var In=P["__core-js_shared__"];const de=In;var Ue=function(){var e=/[^.]+$/.exec(de&&de.keys&&de.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Sn(e){return!!Ue&&Ue in e}var Cn=Function.prototype,An=Cn.toString;function H(e){if(e!=null){try{return An.call(e)}catch{}try{return e+""}catch{}}return""}var En=/[\\^$.*+?()[\]{}|]/g,Dn=/^\[object .+?Constructor\]$/,Pn=Function.prototype,Fn=Object.prototype,Nn=Pn.toString,Mn=Fn.hasOwnProperty,Ln=RegExp("^"+Nn.call(Mn).replace(En,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Rn(e){if(!ee(e)||Sn(e))return!1;var t=ft(e)?Ln:Dn;return t.test(H(e))}function Un(e,t){return e==null?void 0:e[t]}function G(e,t){var n=Un(e,t);return Rn(n)?n:void 0}var Bn=G(P,"Map");const X=Bn;var Hn=G(Object,"create");const Z=Hn;function Gn(){this.__data__=Z?Z(null):{},this.size=0}function zn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Vn="__lodash_hash_undefined__",Kn=Object.prototype,kn=Kn.hasOwnProperty;function Wn(e){var t=this.__data__;if(Z){var n=t[e];return n===Vn?void 0:n}return kn.call(t,e)?t[e]:void 0}var qn=Object.prototype,Jn=qn.hasOwnProperty;function Yn(e){var t=this.__data__;return Z?t[e]!==void 0:Jn.call(t,e)}var Xn="__lodash_hash_undefined__";function Zn(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Z&&t===void 0?Xn:t,this}function B(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}B.prototype.clear=Gn;B.prototype.delete=zn;B.prototype.get=Wn;B.prototype.has=Yn;B.prototype.set=Zn;function Qn(){this.size=0,this.__data__={hash:new B,map:new(X||M),string:new B}}function er(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ce(e,t){var n=e.__data__;return er(t)?n[typeof t=="string"?"string":"hash"]:n.map}function tr(e){var t=ce(this,e).delete(e);return this.size-=t?1:0,t}function nr(e){return ce(this,e).get(e)}function rr(e){return ce(this,e).has(e)}function or(e,t){var n=ce(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function k(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}k.prototype.clear=Qn;k.prototype.delete=tr;k.prototype.get=nr;k.prototype.has=rr;k.prototype.set=or;var sr=200;function ar(e,t){var n=this.__data__;if(n instanceof M){var r=n.__data__;if(!X||r.length<sr-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new k(r)}return n.set(e,t),this.size=n.size,this}function W(e){var t=this.__data__=new M(e);this.size=t.size}W.prototype.clear=an;W.prototype.delete=cn;W.prototype.get=ln;W.prototype.has=un;W.prototype.set=ar;function ir(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var cr=function(){try{var e=G(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Be=cr;function bt(e,t,n){t=="__proto__"&&Be?Be(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var lr=Object.prototype,ur=lr.hasOwnProperty;function ht(e,t,n){var r=e[t];(!(ur.call(e,t)&&ut(r,n))||n===void 0&&!(t in e))&&bt(e,t,n)}function le(e,t,n,r){var m=!n;n||(n={});for(var c=-1,u=t.length;++c<u;){var g=t[c],d=r?r(n[g],e[g],g,n,e):void 0;d===void 0&&(d=e[g]),m?bt(n,g,d):ht(n,g,d)}return n}function pr(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function te(e){return e!=null&&typeof e=="object"}var dr="[object Arguments]";function He(e){return te(e)&&Q(e)==dr}var mt=Object.prototype,fr=mt.hasOwnProperty,br=mt.propertyIsEnumerable,hr=He(function(){return arguments}())?He:function(e){return te(e)&&fr.call(e,"callee")&&!br.call(e,"callee")};const mr=hr;var gr=Array.isArray;const ve=gr;function xr(){return!1}var gt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ge=gt&&typeof module=="object"&&module&&!module.nodeType&&module,yr=Ge&&Ge.exports===gt,ze=yr?P.Buffer:void 0,$r=ze?ze.isBuffer:void 0,_r=$r||xr;const xt=_r;var vr=9007199254740991,jr=/^(?:0|[1-9]\d*)$/;function wr(e,t){var n=typeof e;return t=t==null?vr:t,!!t&&(n=="number"||n!="symbol"&&jr.test(e))&&e>-1&&e%1==0&&e<t}var Tr=9007199254740991;function yt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Tr}var Or="[object Arguments]",Ir="[object Array]",Sr="[object Boolean]",Cr="[object Date]",Ar="[object Error]",Er="[object Function]",Dr="[object Map]",Pr="[object Number]",Fr="[object Object]",Nr="[object RegExp]",Mr="[object Set]",Lr="[object String]",Rr="[object WeakMap]",Ur="[object ArrayBuffer]",Br="[object DataView]",Hr="[object Float32Array]",Gr="[object Float64Array]",zr="[object Int8Array]",Vr="[object Int16Array]",Kr="[object Int32Array]",kr="[object Uint8Array]",Wr="[object Uint8ClampedArray]",qr="[object Uint16Array]",Jr="[object Uint32Array]",_={};_[Hr]=_[Gr]=_[zr]=_[Vr]=_[Kr]=_[kr]=_[Wr]=_[qr]=_[Jr]=!0;_[Or]=_[Ir]=_[Ur]=_[Sr]=_[Br]=_[Cr]=_[Ar]=_[Er]=_[Dr]=_[Pr]=_[Fr]=_[Nr]=_[Mr]=_[Lr]=_[Rr]=!1;function Yr(e){return te(e)&&yt(e.length)&&!!_[Q(e)]}function je(e){return function(t){return e(t)}}var $t=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Y=$t&&typeof module=="object"&&module&&!module.nodeType&&module,Xr=Y&&Y.exports===$t,fe=Xr&&pt.process,Zr=function(){try{var e=Y&&Y.require&&Y.require("util").types;return e||fe&&fe.binding&&fe.binding("util")}catch{}}();const K=Zr;var Ve=K&&K.isTypedArray,Qr=Ve?je(Ve):Yr;const eo=Qr;var to=Object.prototype,no=to.hasOwnProperty;function _t(e,t){var n=ve(e),r=!n&&mr(e),m=!n&&!r&&xt(e),c=!n&&!r&&!m&&eo(e),u=n||r||m||c,g=u?pr(e.length,String):[],d=g.length;for(var f in e)(t||no.call(e,f))&&!(u&&(f=="length"||m&&(f=="offset"||f=="parent")||c&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||wr(f,d)))&&g.push(f);return g}var ro=Object.prototype;function we(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||ro;return e===n}function vt(e,t){return function(n){return e(t(n))}}var oo=vt(Object.keys,Object);const so=oo;var ao=Object.prototype,io=ao.hasOwnProperty;function co(e){if(!we(e))return so(e);var t=[];for(var n in Object(e))io.call(e,n)&&n!="constructor"&&t.push(n);return t}function jt(e){return e!=null&&yt(e.length)&&!ft(e)}function Te(e){return jt(e)?_t(e):co(e)}function lo(e,t){return e&&le(t,Te(t),e)}function uo(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var po=Object.prototype,fo=po.hasOwnProperty;function bo(e){if(!ee(e))return uo(e);var t=we(e),n=[];for(var r in e)r=="constructor"&&(t||!fo.call(e,r))||n.push(r);return n}function Oe(e){return jt(e)?_t(e,!0):bo(e)}function ho(e,t){return e&&le(t,Oe(t),e)}var wt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ke=wt&&typeof module=="object"&&module&&!module.nodeType&&module,mo=Ke&&Ke.exports===wt,ke=mo?P.Buffer:void 0,We=ke?ke.allocUnsafe:void 0;function go(e,t){if(t)return e.slice();var n=e.length,r=We?We(n):new e.constructor(n);return e.copy(r),r}function xo(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function yo(e,t){for(var n=-1,r=e==null?0:e.length,m=0,c=[];++n<r;){var u=e[n];t(u,n,e)&&(c[m++]=u)}return c}function Tt(){return[]}var $o=Object.prototype,_o=$o.propertyIsEnumerable,qe=Object.getOwnPropertySymbols,vo=qe?function(e){return e==null?[]:(e=Object(e),yo(qe(e),function(t){return _o.call(e,t)}))}:Tt;const Ie=vo;function jo(e,t){return le(e,Ie(e),t)}function Ot(e,t){for(var n=-1,r=t.length,m=e.length;++n<r;)e[m+n]=t[n];return e}var wo=vt(Object.getPrototypeOf,Object);const It=wo;var To=Object.getOwnPropertySymbols,Oo=To?function(e){for(var t=[];e;)Ot(t,Ie(e)),e=It(e);return t}:Tt;const St=Oo;function Io(e,t){return le(e,St(e),t)}function Ct(e,t,n){var r=t(e);return ve(e)?r:Ot(r,n(e))}function So(e){return Ct(e,Te,Ie)}function Co(e){return Ct(e,Oe,St)}var Ao=G(P,"DataView");const ge=Ao;var Eo=G(P,"Promise");const xe=Eo;var Do=G(P,"Set");const ye=Do;var Po=G(P,"WeakMap");const $e=Po;var Je="[object Map]",Fo="[object Object]",Ye="[object Promise]",Xe="[object Set]",Ze="[object WeakMap]",Qe="[object DataView]",No=H(ge),Mo=H(X),Lo=H(xe),Ro=H(ye),Uo=H($e),R=Q;(ge&&R(new ge(new ArrayBuffer(1)))!=Qe||X&&R(new X)!=Je||xe&&R(xe.resolve())!=Ye||ye&&R(new ye)!=Xe||$e&&R(new $e)!=Ze)&&(R=function(e){var t=Q(e),n=t==Fo?e.constructor:void 0,r=n?H(n):"";if(r)switch(r){case No:return Qe;case Mo:return Je;case Lo:return Ye;case Ro:return Xe;case Uo:return Ze}return t});const Se=R;var Bo=Object.prototype,Ho=Bo.hasOwnProperty;function Go(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&Ho.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var zo=P.Uint8Array;const et=zo;function Ce(e){var t=new e.constructor(e.byteLength);return new et(t).set(new et(e)),t}function Vo(e,t){var n=t?Ce(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Ko=/\w*$/;function ko(e){var t=new e.constructor(e.source,Ko.exec(e));return t.lastIndex=e.lastIndex,t}var tt=V?V.prototype:void 0,nt=tt?tt.valueOf:void 0;function Wo(e){return nt?Object(nt.call(e)):{}}function qo(e,t){var n=t?Ce(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Jo="[object Boolean]",Yo="[object Date]",Xo="[object Map]",Zo="[object Number]",Qo="[object RegExp]",es="[object Set]",ts="[object String]",ns="[object Symbol]",rs="[object ArrayBuffer]",os="[object DataView]",ss="[object Float32Array]",as="[object Float64Array]",is="[object Int8Array]",cs="[object Int16Array]",ls="[object Int32Array]",us="[object Uint8Array]",ps="[object Uint8ClampedArray]",ds="[object Uint16Array]",fs="[object Uint32Array]";function bs(e,t,n){var r=e.constructor;switch(t){case rs:return Ce(e);case Jo:case Yo:return new r(+e);case os:return Vo(e,n);case ss:case as:case is:case cs:case ls:case us:case ps:case ds:case fs:return qo(e,n);case Xo:return new r;case Zo:case ts:return new r(e);case Qo:return ko(e);case es:return new r;case ns:return Wo(e)}}var rt=Object.create,hs=function(){function e(){}return function(t){if(!ee(t))return{};if(rt)return rt(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const ms=hs;function gs(e){return typeof e.constructor=="function"&&!we(e)?ms(It(e)):{}}var xs="[object Map]";function ys(e){return te(e)&&Se(e)==xs}var ot=K&&K.isMap,$s=ot?je(ot):ys;const _s=$s;var vs="[object Set]";function js(e){return te(e)&&Se(e)==vs}var st=K&&K.isSet,ws=st?je(st):js;const Ts=ws;var Os=1,Is=2,Ss=4,At="[object Arguments]",Cs="[object Array]",As="[object Boolean]",Es="[object Date]",Ds="[object Error]",Et="[object Function]",Ps="[object GeneratorFunction]",Fs="[object Map]",Ns="[object Number]",Dt="[object Object]",Ms="[object RegExp]",Ls="[object Set]",Rs="[object String]",Us="[object Symbol]",Bs="[object WeakMap]",Hs="[object ArrayBuffer]",Gs="[object DataView]",zs="[object Float32Array]",Vs="[object Float64Array]",Ks="[object Int8Array]",ks="[object Int16Array]",Ws="[object Int32Array]",qs="[object Uint8Array]",Js="[object Uint8ClampedArray]",Ys="[object Uint16Array]",Xs="[object Uint32Array]",$={};$[At]=$[Cs]=$[Hs]=$[Gs]=$[As]=$[Es]=$[zs]=$[Vs]=$[Ks]=$[ks]=$[Ws]=$[Fs]=$[Ns]=$[Dt]=$[Ms]=$[Ls]=$[Rs]=$[Us]=$[qs]=$[Js]=$[Ys]=$[Xs]=!0;$[Ds]=$[Et]=$[Bs]=!1;function se(e,t,n,r,m,c){var u,g=t&Os,d=t&Is,f=t&Ss;if(n&&(u=m?n(e,r,m,c):n(e)),u!==void 0)return u;if(!ee(e))return e;var j=ve(e);if(j){if(u=Go(e),!g)return xo(e,u)}else{var w=Se(e),S=w==Et||w==Ps;if(xt(e))return go(e,g);if(w==Dt||w==At||S&&!m){if(u=d||S?{}:gs(e),!g)return d?Io(e,ho(u,e)):jo(e,lo(u,e))}else{if(!$[w])return m?e:{};u=bs(e,w,g)}}c||(c=new W);var L=c.get(e);if(L)return L;c.set(e,u),Ts(e)?e.forEach(function(T){u.add(se(T,t,n,T,e,c))}):_s(e)&&e.forEach(function(T,a){u.set(a,se(T,t,n,a,e,c))});var F=f?d?Co:So:d?Oe:Te,N=j?void 0:F(e);return ir(N||e,function(T,a){N&&(a=T,T=e[a]),ht(u,a,se(T,t,n,a,e,c))}),u}var Zs=1,Qs=4;function ae(e){return se(e,Zs|Qs)}var U=(e=>(e.ON_ADD="add",e.ON_REMOVE="remove",e.ON_UPDATE="update",e.ON_RESET="reset",e))(U||{});const ea=Lt.createContext(null),ta=[{label:"\u5E03\u5C40",type:"radio",name:"layout",defaultValue:"single",options:[{label:"\u5355\u5217",value:"single"},{label:"\u591A\u5217",value:"multi"}]}],na=[{label:"\u8868\u5355\u540D\u79F0",type:"input",name:"formName"},{label:"\u8868\u5355\u5360\u4F4D\u7B26",type:"input",name:"placeHolder"}],ra=[{label:"\u8868\u5355\u540D\u79F0",type:"input",name:"formName"},{label:"\u8868\u5355\u5360\u4F4D\u7B26",type:"input",name:"placeHolder"}],oa=[{label:"\u8868\u5355\u540D\u79F0",type:"input",name:"formName"},{label:"\u8868\u5355\u5360\u4F4D\u7B26",type:"input",name:"placeHolder"}],sa={wrap:ta,input:na,selector:ra,"data-picker":oa};const{FormItem:aa}=_e;function ia({onClose:e,data:t,visible:n}){const[r,m]=D.exports.useState({}),c=D.exports.useRef(),u=async()=>{const d=c.current,[,f]=await Rt(d.validate());if(f===!0){const j=d.getFieldsValue(!0);Object.assign(r.formData,j),console.log("\u8868\u5355\u9879\u4FEE\u6539\uFF1A",r),e()}},g=D.exports.useMemo(()=>{var d;return(d=sa[r.compType])==null?void 0:d.map((f,j)=>{let w=null;const{formData:S,itemId:L}=r,F=`${L}-dispose-${j}`,{options:N,defaultValue:T}=f;switch(f.type){case"radio":w=h.exports.jsx(Ne.Group,{value:S[f.name]||T,children:N.map((a,O)=>h.exports.jsx(Ne,{defaultChecked:S[f.name]===a.value,value:a.value,children:a.label},`${F}-${a.value}`))});break;default:w=h.exports.jsx(it,{})}return h.exports.jsx(aa,{label:f.label,name:f.name,children:w},F)})},[r.compType]);return D.exports.useEffect(()=>{const{idx:d,current:f}=t;if(!f)return;const j=c.current,{formData:w}=f[d];console.log("\u5F53\u524D\u8868\u5355\uFF1A",f[d]),m(f[d]),w&&j.setFieldsValue(w)},[t,r.formData]),h.exports.jsx(Kt,{header:`${r.compName}:${r.itemId}`,visible:n,onClose:e,onConfirm:u,children:h.exports.jsx("div",{className:"form-sandbox__dispose",children:h.exports.jsx(_e,{ref:c,labelAlign:"top",labelWidth:80,children:(r==null?void 0:r.compType)&&g})})})}const ca=[{compId:"2",compName:"\u8F93\u5165\u6846",compType:"input",chosen:!1,selected:!1,itemId:"formId-Q2rezGsi",parentId:null,nodeIndex:0,formData:{},children:[]},{compId:"3",compName:"\u4E0B\u62C9\u9009\u62E9\u5668",compType:"selector",chosen:!1,selected:!1,itemId:"formId-Ed2MGdaZ",parentId:null,nodeIndex:1,formData:{},children:[]}];const la=[{compId:"1",compName:"\u6805\u683C",compType:"wrap"},{compId:"2",compName:"\u8F93\u5165\u6846",compType:"input"},{compId:"3",compName:"\u4E0B\u62C9\u9009\u62E9\u5668",compType:"selector"},{compId:"4",compName:"\u65E5\u671F\u9009\u62E9\u5668",compType:"date-picker"}],Pt=ae(ca),ua={value:Pt,hash:{}};let be=[];function pa(e,t){let n;const{eventType:r,selected:m,toDelete:c}=t;switch(r){case U.ON_RESET:n=m;break;case U.ON_REMOVE:const d=f=>f.itemId===c.itemId&&f.parentId===c.parentId;n=be.filter(f=>!d(f));break;default:n=[...be.filter(f=>m.findIndex(j=>j.itemId===f.itemId)===-1),...m]}be=n;const[u,g]=Ut(n,null);return{value:u,hash:g}}function _a(){const[e,t]=D.exports.useState(la),[n,r]=D.exports.useReducer(pa,ua),[m,c]=D.exports.useState(!1),[u,g]=D.exports.useState({}),d=(a,O,x,C)=>{const E=ae(x),s=ae(a),o=Ht(s,E);r({eventType:O,selected:o,toDelete:C})},f=a=>{const O=a.getAttribute("comp-type");return e.find(C=>C.compType===O)},j=(a,O,x)=>{const{item:C,newDraggableIndex:E}=a,s=f(C);if(!s)return;const o=O;o.splice(E,0,s),d(o,U.ON_ADD,x)},w=(a,O,x)=>{const{newDraggableIndex:C,oldDraggableIndex:E}=a,s=Bt(ae(O),E,C);d(s,U.ON_UPDATE,x)},S=(a,O,x)=>{const{oldDraggableIndex:C}=a,E=O,s=E[C];E.splice(C,1),d(E,U.ON_REMOVE,x,s)},L=()=>{r({eventType:U.ON_RESET,selected:Pt})},F=()=>{console.log(n.value)},N=()=>{const a=kt.confirm({header:"\u63D0\u793A",body:"\u786E\u8BA4\u91CD\u7F6E\u8868\u5355\u5417\uFF1F",theme:"warning",onConfirm:()=>{L(),a.hide()},onClose:()=>{a.hide()}})};function T(a){var O;return h.exports.jsx(oe.exports.ReactSortable,{tag:"div",className:Wt("form-sandbox__payground__wrap",`form-sandbox__payground__wrap--direction--${(O=a.formData)==null?void 0:O.layout}`),group:{name:"component",pull:!0,put:!0},swap:!0,direction:"horizontal",fallbackOnBody:!0,swapThreshold:1,animation:200,list:a.children,onUpdate:x=>{console.log("child-onUpdate\u64CD\u4F5C------------------->"),w(x,a.children,a)},onAdd:x=>{console.log("child-onAdd\u64CD\u4F5C------------------->"),j(x,a.children,a)},onRemove:x=>{console.log("child-onRemove\u64CD\u4F5C------------------->"),S(x,a.children,a)},setList:()=>{},children:a.children&&Le(a.children,{renderChild:T,parent:a})||null})}return D.exports.useEffect(()=>(he.watch(a=>{console.log("\u5220\u9664\u64CD\u4F5C\u6765\u6E90\uFF1A",a),S({oldDraggableIndex:a.idx},a.current,a.parent)}),me.watch(a=>{c(!0),g(a)}),console.log(n),()=>{he.destroy(),me.destroy()}),[n.value]),h.exports.jsx(ea.Provider,{value:{containerState:n},children:h.exports.jsxs("div",{className:"form-sandbox__main",children:[h.exports.jsxs("div",{className:"form-sandbox__components",children:[h.exports.jsx("p",{className:"form-sandbox__components--title",children:"\u9009\u62E9\u7EC4\u4EF6"}),h.exports.jsx(oe.exports.ReactSortable,{tag:"div",group:{name:"component",pull:"clone",put:!1},sort:!1,list:e,setList:a=>{t(a)},children:e.map(a=>h.exports.jsx("div",{className:`form-sandbox__components__item form-sandbox__components--${a.compType}`,"comp-type":a.compType,children:a.compName},a.compId))})]}),h.exports.jsxs("div",{className:"form-sandbox__content",children:[h.exports.jsxs("div",{className:"form-sandbox__operation",children:[h.exports.jsx(Me,{theme:"primary",type:"submit",style:{marginRight:10},onClick:F,children:"\u63D0\u4EA4"}),h.exports.jsx(Me,{type:"reset",onClick:N,children:"\u91CD\u7F6E"})]}),h.exports.jsx(oe.exports.ReactSortable,{tag:"div",className:"form-sandbox__payground",group:{name:"component",pull:!0,put:!0},swap:!0,direction:"horizontal",fallbackOnBody:!0,swapThreshold:1,animation:200,list:n.value,onUpdate:a=>{console.log("container-onUpdate\u64CD\u4F5C------------------->"),w(a,n.value,null)},onAdd:a=>{console.log("container-onAdd\u64CD\u4F5C------------------->",a),j(a,n.value,null)},onRemove:a=>{console.log("container-onRemove\u64CD\u4F5C------------------->"),S(a,n.value,null)},setList:()=>{},children:Le(n.value,{renderChild:T})})]}),h.exports.jsx(ia,{visible:m,data:u,onClose:()=>{c(!1)}})]})})}export{_a as default};
