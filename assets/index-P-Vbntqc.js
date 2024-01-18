(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const K={},ye=[],yt=()=>{},ms=()=>!1,Bn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xr=t=>t.startsWith("onUpdate:"),at=Object.assign,qr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hs=Object.prototype.hasOwnProperty,U=(t,e)=>hs.call(t,e),R=Array.isArray,xe=t=>Dn(t)==="[object Map]",Fa=t=>Dn(t)==="[object Set]",j=t=>typeof t=="function",it=t=>typeof t=="string",Se=t=>typeof t=="symbol",Q=t=>t!==null&&typeof t=="object",ja=t=>(Q(t)||j(t))&&j(t.then)&&j(t.catch),za=Object.prototype.toString,Dn=t=>za.call(t),ps=t=>Dn(t).slice(8,-1),Ba=t=>Dn(t)==="[object Object]",Jr=t=>it(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_n=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$n=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gs=/-(\w)/g,Nt=$n(t=>t.replace(gs,(e,n)=>n?n.toUpperCase():"")),vs=/\B([A-Z])/g,Oe=$n(t=>t.replace(vs,"-$1").toLowerCase()),Un=$n(t=>t.charAt(0).toUpperCase()+t.slice(1)),or=$n(t=>t?`on${Un(t)}`:""),Gt=(t,e)=>!Object.is(t,e),wn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},In=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ti;const Da=()=>Ti||(Ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ie(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=it(r)?_s(r):ie(r);if(i)for(const a in i)e[a]=i[a]}return e}else if(it(t)||Q(t))return t}const bs=/;(?![^(]*\))/g,ys=/:([^]+)/,xs=/\/\*[^]*?\*\//g;function _s(t){const e={};return t.replace(xs,"").split(bs).forEach(n=>{if(n){const r=n.split(ys);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qr(t){let e="";if(it(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=Qr(t[n]);r&&(e+=r+" ")}else if(Q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ws="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",As=Gr(ws);function $a(t){return!!t||t===""}const an=t=>it(t)?t:t==null?"":R(t)||Q(t)&&(t.toString===za||!j(t.toString))?JSON.stringify(t,Ua,2):String(t),Ua=(t,e)=>e&&e.__v_isRef?Ua(t,e.value):xe(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],a)=>(n[sr(r,a)+" =>"]=i,n),{})}:Fa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>sr(n))}:Se(e)?sr(e):Q(e)&&!R(e)&&!Ba(e)?String(e):e,sr=(t,e="")=>{var n;return Se(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _t;class ks{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Cs(t,e=_t){e&&e.active&&e.effects.push(t)}function Es(){return _t}let le;class Zr{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Cs(this,i)}get dirty(){if(this._dirtyLevel===1){de();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Ss(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),me()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Vt,n=le;try{return Vt=!0,le=this,this._runnings++,Ni(this),this.fn()}finally{Mi(this),this._runnings--,le=n,Vt=e}}stop(){var e;this.active&&(Ni(this),Mi(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Ss(t){return t.value}function Ni(t){t._trackId++,t._depsLength=0}function Mi(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ha(t.deps[e],t);t.deps.length=t._depsLength}}function Ha(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Vt=!0,_r=0;const Ya=[];function de(){Ya.push(Vt),Vt=!1}function me(){const t=Ya.pop();Vt=t===void 0?!0:t}function ti(){_r++}function ei(){for(_r--;!_r&&wr.length;)wr.shift()()}function Wa(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ha(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const wr=[];function Va(t,e,n){ti();for(const r of t.keys())if(t.get(r)===r._trackId){if(r._dirtyLevel<e&&!(r._runnings&&!r.allowRecurse)){const i=r._dirtyLevel;r._dirtyLevel=e,i===0&&(r._shouldSchedule=!0,r.trigger())}r.scheduler&&r._shouldSchedule&&(!r._runnings||r.allowRecurse)&&(r._shouldSchedule=!1,wr.push(r.scheduler))}ei()}const Ka=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ar=new WeakMap,fe=Symbol(""),kr=Symbol("");function mt(t,e,n){if(Vt&&le){let r=Ar.get(t);r||Ar.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Ka(()=>r.delete(n))),Wa(le,i)}}function Lt(t,e,n,r,i,a){const o=Ar.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&R(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Se(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":R(t)?Jr(n)&&s.push(o.get("length")):(s.push(o.get(fe)),xe(t)&&s.push(o.get(kr)));break;case"delete":R(t)||(s.push(o.get(fe)),xe(t)&&s.push(o.get(kr)));break;case"set":xe(t)&&s.push(o.get(fe));break}ti();for(const l of s)l&&Va(l,2);ei()}const Os=Gr("__proto__,__v_isRef,__isVue"),Ga=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Se)),Ri=Ps();function Ps(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let a=0,o=this.length;a<o;a++)mt(r,"get",a+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Y)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){de(),ti();const r=Y(this)[e].apply(this,n);return ei(),me(),r}}),t}function Is(t){const e=Y(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Xa{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,a=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?Hs:Za:a?Qa:Ja).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=R(e);if(!i){if(o&&U(Ri,n))return Reflect.get(Ri,n,r);if(n==="hasOwnProperty")return Is}const s=Reflect.get(e,n,r);return(Se(n)?Ga.has(n):Os(n))||(i||mt(e,"get",n),a)?s:ht(s)?o&&Jr(n)?s:s.value:Q(s)?i?to(s):ii(s):s}}class qa extends Xa{constructor(e=!1){super(!1,e)}set(e,n,r,i){let a=e[n];if(!this._shallow){const l=ke(a);if(!Tn(r)&&!ke(r)&&(a=Y(a),r=Y(r)),!R(e)&&ht(a)&&!ht(r))return l?!1:(a.value=r,!0)}const o=R(e)&&Jr(n)?Number(n)<e.length:U(e,n),s=Reflect.set(e,n,r,i);return e===Y(i)&&(o?Gt(r,a)&&Lt(e,"set",n,r):Lt(e,"add",n,r)),s}deleteProperty(e,n){const r=U(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Lt(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Se(n)||!Ga.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",R(e)?"length":fe),Reflect.ownKeys(e)}}class Ts extends Xa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ns=new qa,Ms=new Ts,Rs=new qa(!0),ni=t=>t,Hn=t=>Reflect.getPrototypeOf(t);function on(t,e,n=!1,r=!1){t=t.__v_raw;const i=Y(t),a=Y(e);n||(Gt(e,a)&&mt(i,"get",e),mt(i,"get",a));const{has:o}=Hn(i),s=r?ni:n?oi:De;if(o.call(i,e))return s(t.get(e));if(o.call(i,a))return s(t.get(a));t!==i&&t.get(e)}function sn(t,e=!1){const n=this.__v_raw,r=Y(n),i=Y(t);return e||(Gt(t,i)&&mt(r,"has",t),mt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ln(t,e=!1){return t=t.__v_raw,!e&&mt(Y(t),"iterate",fe),Reflect.get(t,"size",t)}function Li(t){t=Y(t);const e=Y(this);return Hn(e).has.call(e,t)||(e.add(t),Lt(e,"add",t,t)),this}function Fi(t,e){e=Y(e);const n=Y(this),{has:r,get:i}=Hn(n);let a=r.call(n,t);a||(t=Y(t),a=r.call(n,t));const o=i.call(n,t);return n.set(t,e),a?Gt(e,o)&&Lt(n,"set",t,e):Lt(n,"add",t,e),this}function ji(t){const e=Y(this),{has:n,get:r}=Hn(e);let i=n.call(e,t);i||(t=Y(t),i=n.call(e,t)),r&&r.call(e,t);const a=e.delete(t);return i&&Lt(e,"delete",t,void 0),a}function zi(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&Lt(t,"clear",void 0,void 0),n}function fn(t,e){return function(r,i){const a=this,o=a.__v_raw,s=Y(o),l=e?ni:t?oi:De;return!t&&mt(s,"iterate",fe),o.forEach((c,u)=>r.call(i,l(c),l(u),a))}}function cn(t,e,n){return function(...r){const i=this.__v_raw,a=Y(i),o=xe(a),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?ni:e?oi:De;return!e&&mt(a,"iterate",l?kr:fe),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function $t(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ls(){const t={get(a){return on(this,a)},get size(){return ln(this)},has:sn,add:Li,set:Fi,delete:ji,clear:zi,forEach:fn(!1,!1)},e={get(a){return on(this,a,!1,!0)},get size(){return ln(this)},has:sn,add:Li,set:Fi,delete:ji,clear:zi,forEach:fn(!1,!0)},n={get(a){return on(this,a,!0)},get size(){return ln(this,!0)},has(a){return sn.call(this,a,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:fn(!0,!1)},r={get(a){return on(this,a,!0,!0)},get size(){return ln(this,!0)},has(a){return sn.call(this,a,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=cn(a,!1,!1),n[a]=cn(a,!0,!1),e[a]=cn(a,!1,!0),r[a]=cn(a,!0,!0)}),[t,n,e,r]}const[Fs,js,zs,Bs]=Ls();function ri(t,e){const n=e?t?Bs:zs:t?js:Fs;return(r,i,a)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(U(n,i)&&i in r?n:r,i,a)}const Ds={get:ri(!1,!1)},$s={get:ri(!1,!0)},Us={get:ri(!0,!1)},Ja=new WeakMap,Qa=new WeakMap,Za=new WeakMap,Hs=new WeakMap;function Ys(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ws(t){return t.__v_skip||!Object.isExtensible(t)?0:Ys(ps(t))}function ii(t){return ke(t)?t:ai(t,!1,Ns,Ds,Ja)}function Vs(t){return ai(t,!1,Rs,$s,Qa)}function to(t){return ai(t,!0,Ms,Us,Za)}function ai(t,e,n,r,i){if(!Q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=i.get(t);if(a)return a;const o=Ws(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return i.set(t,s),s}function _e(t){return ke(t)?_e(t.__v_raw):!!(t&&t.__v_isReactive)}function ke(t){return!!(t&&t.__v_isReadonly)}function Tn(t){return!!(t&&t.__v_isShallow)}function eo(t){return _e(t)||ke(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function no(t){return In(t,"__v_skip",!0),t}const De=t=>Q(t)?ii(t):t,oi=t=>Q(t)?to(t):t;class ro{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Zr(()=>e(this._value),()=>Cr(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Y(this);return(!e._cacheable||e.effect.dirty)&&Gt(e._value,e._value=e.effect.run())&&Cr(e,2),io(e),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ks(t,e,n=!1){let r,i;const a=j(t);return a?(r=t,i=yt):(r=t.get,i=t.set),new ro(r,i,a||!i,n)}function io(t){Vt&&le&&(t=Y(t),Wa(le,t.dep||(t.dep=Ka(()=>t.dep=void 0,t instanceof ro?t:void 0))))}function Cr(t,e=2,n){t=Y(t);const r=t.dep;r&&Va(r,e)}function ht(t){return!!(t&&t.__v_isRef===!0)}function lr(t){return Gs(t,!1)}function Gs(t,e){return ht(t)?t:new Xs(t,e)}class Xs{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:De(e)}get value(){return io(this),this._value}set value(e){const n=this.__v_isShallow||Tn(e)||ke(e);e=n?e:Y(e),Gt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:De(e),Cr(this,2))}}function qs(t){return ht(t)?t.value:t}const Js={get:(t,e,n)=>qs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return ht(i)&&!ht(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function ao(t){return _e(t)?t:new Proxy(t,Js)}/**
* @vue/runtime-core v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(a){Yn(a,e,n)}return i}function kt(t,e,n,r){if(j(t)){const a=Kt(t,e,n,r);return a&&ja(a)&&a.catch(o=>{Yn(o,e,n)}),a}const i=[];for(let a=0;a<t.length;a++)i.push(kt(t[a],e,n,r));return i}function Yn(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let a=e.parent;const o=e.proxy,s=`https://vuejs.org/errors/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,s)===!1)return}a=a.parent}const l=e.appContext.config.errorHandler;if(l){Kt(l,null,10,[t,o,s]);return}}Qs(t,n,i,r)}function Qs(t,e,n,r=!0){console.error(t)}let $e=!1,Er=!1;const ot=[];let It=0;const we=[];let Ht=null,re=0;const oo=Promise.resolve();let si=null;function Zs(t){const e=si||oo;return t?e.then(this?t.bind(this):t):e}function tl(t){let e=It+1,n=ot.length;for(;e<n;){const r=e+n>>>1,i=ot[r],a=Ue(i);a<t||a===t&&i.pre?e=r+1:n=r}return e}function li(t){(!ot.length||!ot.includes(t,$e&&t.allowRecurse?It+1:It))&&(t.id==null?ot.push(t):ot.splice(tl(t.id),0,t),so())}function so(){!$e&&!Er&&(Er=!0,si=oo.then(fo))}function el(t){const e=ot.indexOf(t);e>It&&ot.splice(e,1)}function nl(t){R(t)?we.push(...t):(!Ht||!Ht.includes(t,t.allowRecurse?re+1:re))&&we.push(t),so()}function Bi(t,e,n=$e?It+1:0){for(;n<ot.length;n++){const r=ot[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ot.splice(n,1),n--,r()}}}function lo(t){if(we.length){const e=[...new Set(we)].sort((n,r)=>Ue(n)-Ue(r));if(we.length=0,Ht){Ht.push(...e);return}for(Ht=e,re=0;re<Ht.length;re++)Ht[re]();Ht=null,re=0}}const Ue=t=>t.id==null?1/0:t.id,rl=(t,e)=>{const n=Ue(t)-Ue(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function fo(t){Er=!1,$e=!0,ot.sort(rl);try{for(It=0;It<ot.length;It++){const e=ot[It];e&&e.active!==!1&&Kt(e,null,14)}}finally{It=0,ot.length=0,lo(),$e=!1,si=null,(ot.length||we.length)&&fo()}}function il(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||K;let i=n;const a=e.startsWith("update:"),o=a&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[u]||K;v&&(i=n.map(A=>it(A)?A.trim():A)),m&&(i=n.map(xr))}let s,l=r[s=or(e)]||r[s=or(Nt(e))];!l&&a&&(l=r[s=or(Oe(e))]),l&&kt(l,t,6,i);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,kt(c,t,6,i)}}function co(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const a=t.emits;let o={},s=!1;if(!j(t)){const l=c=>{const u=co(c,e,!0);u&&(s=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!a&&!s?(Q(t)&&r.set(t,null),null):(R(a)?a.forEach(l=>o[l]=null):at(o,a),Q(t)&&r.set(t,o),o)}function Wn(t,e){return!t||!Bn(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Oe(e))||U(t,e))}let dt=null,Vn=null;function Nn(t){const e=dt;return dt=t,Vn=t&&t.type.__scopeId||null,e}function al(t){Vn=t}function ol(){Vn=null}function sl(t,e=dt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&qi(-1);const a=Nn(e);let o;try{o=t(...i)}finally{Nn(a),r._d&&qi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fr(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:v,setupState:A,ctx:z,inheritAttrs:N}=t;let $,w;const S=Nn(t);try{if(n.shapeFlag&4){const B=i||r,H=B;$=Pt(u.call(H,B,m,a,A,v,z)),w=l}else{const B=e;$=Pt(B.length>1?B(a,{attrs:l,slots:s,emit:c}):B(a,null)),w=e.props?l:ll(l)}}catch(B){je.length=0,Yn(B,t,1),$=et(He)}let P=$;if(w&&N!==!1){const B=Object.keys(w),{shapeFlag:H}=P;B.length&&H&7&&(o&&B.some(Xr)&&(w=fl(w,o)),P=Ce(P,w))}return n.dirs&&(P=Ce(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),$=P,Nn(S),$}const ll=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bn(n))&&((e||(e={}))[n]=t[n]);return e},fl=(t,e)=>{const n={};for(const r in t)(!Xr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cl(t,e,n){const{props:r,children:i,component:a}=t,{props:o,children:s,patchFlag:l}=e,c=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Di(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(o[v]!==r[v]&&!Wn(c,v))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Di(r,o,c):!0:!!o;return!1}function Di(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(e[a]!==t[a]&&!Wn(n,a))return!0}return!1}function ul({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const uo="components";function mo(t,e){return ml(uo,t,!0,e)||t}const dl=Symbol.for("v-ndc");function ml(t,e,n=!0,r=!1){const i=dt||st;if(i){const a=i.type;if(t===uo){const s=uf(a,!1);if(s&&(s===e||s===Nt(e)||s===Un(Nt(e))))return a}const o=$i(i[t]||a[t],e)||$i(i.appContext[t],e);return!o&&r?a:o}}function $i(t,e){return t&&(t[e]||t[Nt(e)]||t[Un(Nt(e))])}const hl=t=>t.__isSuspense;function pl(t,e){e&&e.pendingBranch?R(t)?e.effects.push(...t):e.effects.push(t):nl(t)}const gl=Symbol.for("v-scx"),vl=()=>Cn(gl),un={};function An(t,e,n){return ho(t,e,n)}function ho(t,e,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:s}=K){if(e&&a){const F=e;e=(...tt)=>{F(...tt),H()}}const l=st,c=F=>r===!0?F:ae(F,r===!1?1:void 0);let u,m=!1,v=!1;if(ht(t)?(u=()=>t.value,m=Tn(t)):_e(t)?(u=()=>c(t),m=!0):R(t)?(v=!0,m=t.some(F=>_e(F)||Tn(F)),u=()=>t.map(F=>{if(ht(F))return F.value;if(_e(F))return c(F);if(j(F))return Kt(F,l,2)})):j(t)?e?u=()=>Kt(t,l,2):u=()=>(A&&A(),kt(t,l,3,[z])):u=yt,e&&r){const F=u;u=()=>ae(F())}let A,z=F=>{A=P.onStop=()=>{Kt(F,l,4),A=P.onStop=void 0}},N;if(qn)if(z=yt,e?n&&kt(e,l,3,[u(),v?[]:void 0,z]):u(),i==="sync"){const F=vl();N=F.__watcherHandles||(F.__watcherHandles=[])}else return yt;let $=v?new Array(t.length).fill(un):un;const w=()=>{if(!(!P.active||!P.dirty))if(e){const F=P.run();(r||m||(v?F.some((tt,ct)=>Gt(tt,$[ct])):Gt(F,$)))&&(A&&A(),kt(e,l,3,[F,$===un?void 0:v&&$[0]===un?[]:$,z]),$=F)}else P.run()};w.allowRecurse=!!e;let S;i==="sync"?S=w:i==="post"?S=()=>ut(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),S=()=>li(w));const P=new Zr(u,yt,S),B=Es(),H=()=>{P.stop(),B&&qr(B.effects,P)};return e?n?w():$=P.run():i==="post"?ut(P.run.bind(P),l&&l.suspense):P.run(),N&&N.push(H),H}function bl(t,e,n){const r=this.proxy,i=it(t)?t.includes(".")?po(r,t):()=>r[t]:t.bind(r,r);let a;j(e)?a=e:(a=e.handler,n=e);const o=qe(this),s=ho(i,a.bind(r),n);return o(),s}function po(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ae(t,e,n=0,r){if(!Q(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ht(t))ae(t.value,e,n,r);else if(R(t))for(let i=0;i<t.length;i++)ae(t[i],e,n,r);else if(Fa(t)||xe(t))t.forEach(i=>{ae(i,e,n,r)});else if(Ba(t))for(const i in t)ae(t[i],e,n,r);return t}function yl(t,e){if(dt===null)return t;const n=Jn(dt)||dt.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[a,o,s,l=K]=e[i];a&&(j(a)&&(a={mounted:a,updated:a}),a.deep&&ae(o),r.push({dir:a,instance:n,value:o,oldValue:void 0,arg:s,modifiers:l}))}return t}function te(t,e,n,r){const i=t.dirs,a=e&&e.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(de(),kt(l,n,8,[t.el,s,t,e]),me())}}/*! #__NO_SIDE_EFFECTS__ */function xl(t,e){return j(t)?at({name:t.name},e,{setup:t}):t}const kn=t=>!!t.type.__asyncLoader,go=t=>t.type.__isKeepAlive;function _l(t,e){vo(t,"a",e)}function wl(t,e){vo(t,"da",e)}function vo(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Kn(e,r,n),n){let i=n.parent;for(;i&&i.parent;)go(i.parent.vnode)&&Al(r,e,n,i),i=i.parent}}function Al(t,e,n,r){const i=Kn(e,t,r,!0);yo(()=>{qr(r[e],i)},n)}function Kn(t,e,n=st,r=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;de();const s=qe(n),l=kt(e,n,t,o);return s(),me(),l});return r?i.unshift(a):i.push(a),a}}const Bt=t=>(e,n=st)=>(!qn||t==="sp")&&Kn(t,(...r)=>e(...r),n),kl=Bt("bm"),bo=Bt("m"),Cl=Bt("bu"),El=Bt("u"),Sl=Bt("bum"),yo=Bt("um"),Ol=Bt("sp"),Pl=Bt("rtg"),Il=Bt("rtc");function Tl(t,e=st){Kn("ec",t,e)}const Sr=t=>t?Mo(t)?Jn(t)||t.proxy:Sr(t.parent):null,Fe=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sr(t.parent),$root:t=>Sr(t.root),$emit:t=>t.emit,$options:t=>fi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,li(t.update)}),$nextTick:t=>t.n||(t.n=Zs.bind(t.proxy)),$watch:t=>bl.bind(t)}),cr=(t,e)=>t!==K&&!t.__isScriptSetup&&U(t,e),Nl={get({_:t},e){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const A=o[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return a[e]}else{if(cr(r,e))return o[e]=1,r[e];if(i!==K&&U(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&U(c,e))return o[e]=3,a[e];if(n!==K&&U(n,e))return o[e]=4,n[e];Or&&(o[e]=0)}}const u=Fe[e];let m,v;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==K&&U(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,U(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:a}=t;return cr(i,e)?(i[e]=n,!0):r!==K&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||t!==K&&U(t,o)||cr(e,o)||(s=a[0])&&U(s,o)||U(r,o)||U(Fe,o)||U(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ui(t){return R(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Or=!0;function Ml(t){const e=fi(t),n=t.proxy,r=t.ctx;Or=!1,e.beforeCreate&&Hi(e.beforeCreate,t,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:A,updated:z,activated:N,deactivated:$,beforeDestroy:w,beforeUnmount:S,destroyed:P,unmounted:B,render:H,renderTracked:F,renderTriggered:tt,errorCaptured:ct,serverPrefetch:bt,expose:Mt,inheritAttrs:Ie,components:tn,directives:en,filters:nr}=e;if(c&&Rl(c,r,null),o)for(const J in o){const V=o[J];j(V)&&(r[J]=V.bind(n))}if(i){const J=i.call(n,n);Q(J)&&(t.data=ii(J))}if(Or=!0,a)for(const J in a){const V=a[J],Qt=j(V)?V.bind(n,n):j(V.get)?V.get.bind(n,n):yt,nn=!j(V)&&j(V.set)?V.set.bind(n):yt,Zt=ne({get:Qt,set:nn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Ct=>Zt.value=Ct})}if(s)for(const J in s)xo(s[J],r,n,J);if(l){const J=j(l)?l.call(n):l;Reflect.ownKeys(J).forEach(V=>{Dl(V,J[V])})}u&&Hi(u,t,"c");function lt(J,V){R(V)?V.forEach(Qt=>J(Qt.bind(n))):V&&J(V.bind(n))}if(lt(kl,m),lt(bo,v),lt(Cl,A),lt(El,z),lt(_l,N),lt(wl,$),lt(Tl,ct),lt(Il,F),lt(Pl,tt),lt(Sl,S),lt(yo,B),lt(Ol,bt),R(Mt))if(Mt.length){const J=t.exposed||(t.exposed={});Mt.forEach(V=>{Object.defineProperty(J,V,{get:()=>n[V],set:Qt=>n[V]=Qt})})}else t.exposed||(t.exposed={});H&&t.render===yt&&(t.render=H),Ie!=null&&(t.inheritAttrs=Ie),tn&&(t.components=tn),en&&(t.directives=en)}function Rl(t,e,n=yt){R(t)&&(t=Pr(t));for(const r in t){const i=t[r];let a;Q(i)?"default"in i?a=Cn(i.from||r,i.default,!0):a=Cn(i.from||r):a=Cn(i),ht(a)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function Hi(t,e,n){kt(R(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xo(t,e,n,r){const i=r.includes(".")?po(n,r):()=>n[r];if(it(t)){const a=e[t];j(a)&&An(i,a)}else if(j(t))An(i,t.bind(n));else if(Q(t))if(R(t))t.forEach(a=>xo(a,e,n,r));else{const a=j(t.handler)?t.handler.bind(n):e[t.handler];j(a)&&An(i,a,t)}}function fi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=t.appContext,s=a.get(e);let l;return s?l=s:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Mn(l,c,o,!0)),Mn(l,e,o)),Q(e)&&a.set(e,l),l}function Mn(t,e,n,r=!1){const{mixins:i,extends:a}=e;a&&Mn(t,a,n,!0),i&&i.forEach(o=>Mn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Ll[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Ll={data:Yi,props:Wi,emits:Wi,methods:Me,computed:Me,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Me,directives:Me,watch:jl,provide:Yi,inject:Fl};function Yi(t,e){return e?t?function(){return at(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Fl(t,e){return Me(Pr(t),Pr(e))}function Pr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function Me(t,e){return t?at(Object.create(null),t,e):e}function Wi(t,e){return t?R(t)&&R(e)?[...new Set([...t,...e])]:at(Object.create(null),Ui(t),Ui(e??{})):e}function jl(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function _o(){return{app:null,config:{isNativeTag:ms,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Bl(t,e){return function(r,i=null){j(r)||(r=at({},r)),i!=null&&!Q(i)&&(i=null);const a=_o(),o=new WeakSet;let s=!1;const l=a.app={_uid:zl++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:hf,get config(){return a.config},set config(c){},use(c,...u){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...u)):j(c)&&(o.add(c),c(l,...u))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,u){return u?(a.components[c]=u,l):a.components[c]},directive(c,u){return u?(a.directives[c]=u,l):a.directives[c]},mount(c,u,m){if(!s){const v=et(r,i);return v.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),u&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,Jn(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return a.provides[c]=u,l},runWithContext(c){Rn=l;try{return c()}finally{Rn=null}}};return l}}let Rn=null;function Dl(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Cn(t,e,n=!1){const r=st||dt;if(r||Rn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Rn._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function $l(t,e,n,r=!1){const i={},a={};In(a,Xn,1),t.propsDefaults=Object.create(null),wo(t,e,i,a);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Vs(i):t.type.props?t.props=i:t.props=a,t.attrs=a}function Ul(t,e,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=t,s=Y(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(Wn(t.emitsOptions,v))continue;const A=e[v];if(l)if(U(a,v))A!==a[v]&&(a[v]=A,c=!0);else{const z=Nt(v);i[z]=Ir(l,s,z,A,t,!1)}else A!==a[v]&&(a[v]=A,c=!0)}}}else{wo(t,e,i,a)&&(c=!0);let u;for(const m in s)(!e||!U(e,m)&&((u=Oe(m))===m||!U(e,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=Ir(l,s,m,void 0,t,!0)):delete i[m]);if(a!==s)for(const m in a)(!e||!U(e,m))&&(delete a[m],c=!0)}c&&Lt(t,"set","$attrs")}function wo(t,e,n,r){const[i,a]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(_n(l))continue;const c=e[l];let u;i&&U(i,u=Nt(l))?!a||!a.includes(u)?n[u]=c:(s||(s={}))[u]=c:Wn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(a){const l=Y(n),c=s||K;for(let u=0;u<a.length;u++){const m=a[u];n[m]=Ir(i,l,m,c[m],t,!U(c,m))}}return o}function Ir(t,e,n,r,i,a){const o=t[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=qe(i);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Oe(n))&&(r=!0))}return r}function Ao(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const a=t.props,o={},s=[];let l=!1;if(!j(t)){const u=m=>{l=!0;const[v,A]=Ao(m,e,!0);at(o,v),A&&s.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!a&&!l)return Q(t)&&r.set(t,ye),ye;if(R(a))for(let u=0;u<a.length;u++){const m=Nt(a[u]);Vi(m)&&(o[m]=K)}else if(a)for(const u in a){const m=Nt(u);if(Vi(m)){const v=a[u],A=o[m]=R(v)||j(v)?{type:v}:at({},v);if(A){const z=Xi(Boolean,A.type),N=Xi(String,A.type);A[0]=z>-1,A[1]=N<0||z<N,(z>-1||U(A,"default"))&&s.push(m)}}}const c=[o,s];return Q(t)&&r.set(t,c),c}function Vi(t){return t[0]!=="$"}function Ki(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Gi(t,e){return Ki(t)===Ki(e)}function Xi(t,e){return R(e)?e.findIndex(n=>Gi(n,t)):j(e)&&Gi(e,t)?0:-1}const ko=t=>t[0]==="_"||t==="$stable",ci=t=>R(t)?t.map(Pt):[Pt(t)],Hl=(t,e,n)=>{if(e._n)return e;const r=sl((...i)=>ci(e(...i)),n);return r._c=!1,r},Co=(t,e,n)=>{const r=t._ctx;for(const i in t){if(ko(i))continue;const a=t[i];if(j(a))e[i]=Hl(i,a,r);else if(a!=null){const o=ci(a);e[i]=()=>o}}},Eo=(t,e)=>{const n=ci(e);t.slots.default=()=>n},Yl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),In(e,"_",n)):Co(e,t.slots={})}else t.slots={},e&&Eo(t,e);In(t.slots,Xn,1)},Wl=(t,e,n)=>{const{vnode:r,slots:i}=t;let a=!0,o=K;if(r.shapeFlag&32){const s=e._;s?n&&s===1?a=!1:(at(i,e),!n&&s===1&&delete i._):(a=!e.$stable,Co(e,i)),o=e}else e&&(Eo(t,e),o={default:1});if(a)for(const s in i)!ko(s)&&o[s]==null&&delete i[s]};function Tr(t,e,n,r,i=!1){if(R(t)){t.forEach((v,A)=>Tr(v,e&&(R(e)?e[A]:e),n,r,i));return}if(kn(r)&&!i)return;const a=r.shapeFlag&4?Jn(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=t,c=e&&e.r,u=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(it(c)?(u[c]=null,U(m,c)&&(m[c]=null)):ht(c)&&(c.value=null)),j(l))Kt(l,s,12,[o,u]);else{const v=it(l),A=ht(l);if(v||A){const z=()=>{if(t.f){const N=v?U(m,l)?m[l]:u[l]:l.value;i?R(N)&&qr(N,a):R(N)?N.includes(a)||N.push(a):v?(u[l]=[a],U(m,l)&&(m[l]=u[l])):(l.value=[a],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,U(m,l)&&(m[l]=o)):A&&(l.value=o,t.k&&(u[t.k]=o))};o?(z.id=-1,ut(z,n)):z()}}}const ut=pl;function Vl(t){return Kl(t)}function Kl(t,e){const n=Da();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:A=yt,insertStaticContent:z}=t,N=(f,d,h,p=null,g=null,x=null,k=void 0,y=null,_=!!d.dynamicChildren)=>{if(f===d)return;f&&!Ne(f,d)&&(p=rn(f),Ct(f,g,x,!0),f=null),d.patchFlag===-2&&(_=!1,d.dynamicChildren=null);const{type:b,ref:E,shapeFlag:T}=d;switch(b){case Gn:$(f,d,h,p);break;case He:w(f,d,h,p);break;case En:f==null&&S(d,h,p,k);break;case Ot:tn(f,d,h,p,g,x,k,y,_);break;default:T&1?H(f,d,h,p,g,x,k,y,_):T&6?en(f,d,h,p,g,x,k,y,_):(T&64||T&128)&&b.process(f,d,h,p,g,x,k,y,_,he)}E!=null&&g&&Tr(E,f&&f.ref,x,d||f,!d)},$=(f,d,h,p)=>{if(f==null)r(d.el=s(d.children),h,p);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},w=(f,d,h,p)=>{f==null?r(d.el=l(d.children||""),h,p):d.el=f.el},S=(f,d,h,p)=>{[f.el,f.anchor]=z(f.children,d,h,p,f.el,f.anchor)},P=({el:f,anchor:d},h,p)=>{let g;for(;f&&f!==d;)g=v(f),r(f,h,p),f=g;r(d,h,p)},B=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=v(f),i(f),f=h;i(d)},H=(f,d,h,p,g,x,k,y,_)=>{d.type==="svg"?k="svg":d.type==="math"&&(k="mathml"),f==null?F(d,h,p,g,x,k,y,_):bt(f,d,g,x,k,y,_)},F=(f,d,h,p,g,x,k,y)=>{let _,b;const{props:E,shapeFlag:T,transition:I,dirs:M}=f;if(_=f.el=o(f.type,x,E&&E.is,E),T&8?u(_,f.children):T&16&&ct(f.children,_,null,p,g,ur(f,x),k,y),M&&te(f,null,p,"created"),tt(_,f,f.scopeId,k,p),E){for(const W in E)W!=="value"&&!_n(W)&&a(_,W,null,E[W],x,f.children,p,g,Rt);"value"in E&&a(_,"value",null,E.value,x),(b=E.onVnodeBeforeMount)&&St(b,p,f)}M&&te(f,null,p,"beforeMount");const D=Gl(g,I);D&&I.beforeEnter(_),r(_,d,h),((b=E&&E.onVnodeMounted)||D||M)&&ut(()=>{b&&St(b,p,f),D&&I.enter(_),M&&te(f,null,p,"mounted")},g)},tt=(f,d,h,p,g)=>{if(h&&A(f,h),p)for(let x=0;x<p.length;x++)A(f,p[x]);if(g){let x=g.subTree;if(d===x){const k=g.vnode;tt(f,k,k.scopeId,k.slotScopeIds,g.parent)}}},ct=(f,d,h,p,g,x,k,y,_=0)=>{for(let b=_;b<f.length;b++){const E=f[b]=y?Yt(f[b]):Pt(f[b]);N(null,E,d,h,p,g,x,k,y)}},bt=(f,d,h,p,g,x,k)=>{const y=d.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:E}=d;_|=f.patchFlag&16;const T=f.props||K,I=d.props||K;let M;if(h&&ee(h,!1),(M=I.onVnodeBeforeUpdate)&&St(M,h,d,f),E&&te(d,f,h,"beforeUpdate"),h&&ee(h,!0),b?Mt(f.dynamicChildren,b,y,h,p,ur(d,g),x):k||V(f,d,y,null,h,p,ur(d,g),x,!1),_>0){if(_&16)Ie(y,d,T,I,h,p,g);else if(_&2&&T.class!==I.class&&a(y,"class",null,I.class,g),_&4&&a(y,"style",T.style,I.style,g),_&8){const D=d.dynamicProps;for(let W=0;W<D.length;W++){const q=D[W],rt=T[q],xt=I[q];(xt!==rt||q==="value")&&a(y,q,rt,xt,g,f.children,h,p,Rt)}}_&1&&f.children!==d.children&&u(y,d.children)}else!k&&b==null&&Ie(y,d,T,I,h,p,g);((M=I.onVnodeUpdated)||E)&&ut(()=>{M&&St(M,h,d,f),E&&te(d,f,h,"updated")},p)},Mt=(f,d,h,p,g,x,k)=>{for(let y=0;y<d.length;y++){const _=f[y],b=d[y],E=_.el&&(_.type===Ot||!Ne(_,b)||_.shapeFlag&70)?m(_.el):h;N(_,b,E,null,p,g,x,k,!0)}},Ie=(f,d,h,p,g,x,k)=>{if(h!==p){if(h!==K)for(const y in h)!_n(y)&&!(y in p)&&a(f,y,h[y],null,k,d.children,g,x,Rt);for(const y in p){if(_n(y))continue;const _=p[y],b=h[y];_!==b&&y!=="value"&&a(f,y,b,_,k,d.children,g,x,Rt)}"value"in p&&a(f,"value",h.value,p.value,k)}},tn=(f,d,h,p,g,x,k,y,_)=>{const b=d.el=f?f.el:s(""),E=d.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:M}=d;M&&(y=y?y.concat(M):M),f==null?(r(b,h,p),r(E,h,p),ct(d.children||[],h,E,g,x,k,y,_)):T>0&&T&64&&I&&f.dynamicChildren?(Mt(f.dynamicChildren,I,h,g,x,k,y),(d.key!=null||g&&d===g.subTree)&&So(f,d,!0)):V(f,d,h,E,g,x,k,y,_)},en=(f,d,h,p,g,x,k,y,_)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,h,p,k,_):nr(d,h,p,g,x,k,_):Ci(f,d,_)},nr=(f,d,h,p,g,x,k)=>{const y=f.component=of(f,p,g);if(go(f)&&(y.ctx.renderer=he),sf(y),y.asyncDep){if(g&&g.registerDep(y,lt),!f.el){const _=y.subTree=et(He);w(null,_,d,h)}}else lt(y,f,d,h,g,x,k)},Ci=(f,d,h)=>{const p=d.component=f.component;if(cl(f,d,h))if(p.asyncDep&&!p.asyncResolved){J(p,d,h);return}else p.next=d,el(p.update),p.effect.dirty=!0,p.update();else d.el=f.el,p.vnode=d},lt=(f,d,h,p,g,x,k)=>{const y=()=>{if(f.isMounted){let{next:E,bu:T,u:I,parent:M,vnode:D}=f;{const pe=Oo(f);if(pe){E&&(E.el=D.el,J(f,E,k)),pe.asyncDep.then(()=>{f.isUnmounted||y()});return}}let W=E,q;ee(f,!1),E?(E.el=D.el,J(f,E,k)):E=D,T&&wn(T),(q=E.props&&E.props.onVnodeBeforeUpdate)&&St(q,M,E,D),ee(f,!0);const rt=fr(f),xt=f.subTree;f.subTree=rt,N(xt,rt,m(xt.el),rn(xt),f,g,x),E.el=rt.el,W===null&&ul(f,rt.el),I&&ut(I,g),(q=E.props&&E.props.onVnodeUpdated)&&ut(()=>St(q,M,E,D),g)}else{let E;const{el:T,props:I}=d,{bm:M,m:D,parent:W}=f,q=kn(d);if(ee(f,!1),M&&wn(M),!q&&(E=I&&I.onVnodeBeforeMount)&&St(E,W,d),ee(f,!0),T&&ar){const rt=()=>{f.subTree=fr(f),ar(T,f.subTree,f,g,null)};q?d.type.__asyncLoader().then(()=>!f.isUnmounted&&rt()):rt()}else{const rt=f.subTree=fr(f);N(null,rt,h,p,f,g,x),d.el=rt.el}if(D&&ut(D,g),!q&&(E=I&&I.onVnodeMounted)){const rt=d;ut(()=>St(E,W,rt),g)}(d.shapeFlag&256||W&&kn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ut(f.a,g),f.isMounted=!0,d=h=p=null}},_=f.effect=new Zr(y,yt,()=>li(b),f.scope),b=f.update=()=>{_.dirty&&_.run()};b.id=f.uid,ee(f,!0),b()},J=(f,d,h)=>{d.component=f;const p=f.vnode.props;f.vnode=d,f.next=null,Ul(f,d.props,p,h),Wl(f,d.children,h),de(),Bi(f),me()},V=(f,d,h,p,g,x,k,y,_=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,T=d.children,{patchFlag:I,shapeFlag:M}=d;if(I>0){if(I&128){nn(b,T,h,p,g,x,k,y,_);return}else if(I&256){Qt(b,T,h,p,g,x,k,y,_);return}}M&8?(E&16&&Rt(b,g,x),T!==b&&u(h,T)):E&16?M&16?nn(b,T,h,p,g,x,k,y,_):Rt(b,g,x,!0):(E&8&&u(h,""),M&16&&ct(T,h,p,g,x,k,y,_))},Qt=(f,d,h,p,g,x,k,y,_)=>{f=f||ye,d=d||ye;const b=f.length,E=d.length,T=Math.min(b,E);let I;for(I=0;I<T;I++){const M=d[I]=_?Yt(d[I]):Pt(d[I]);N(f[I],M,h,null,g,x,k,y,_)}b>E?Rt(f,g,x,!0,!1,T):ct(d,h,p,g,x,k,y,_,T)},nn=(f,d,h,p,g,x,k,y,_)=>{let b=0;const E=d.length;let T=f.length-1,I=E-1;for(;b<=T&&b<=I;){const M=f[b],D=d[b]=_?Yt(d[b]):Pt(d[b]);if(Ne(M,D))N(M,D,h,null,g,x,k,y,_);else break;b++}for(;b<=T&&b<=I;){const M=f[T],D=d[I]=_?Yt(d[I]):Pt(d[I]);if(Ne(M,D))N(M,D,h,null,g,x,k,y,_);else break;T--,I--}if(b>T){if(b<=I){const M=I+1,D=M<E?d[M].el:p;for(;b<=I;)N(null,d[b]=_?Yt(d[b]):Pt(d[b]),h,D,g,x,k,y,_),b++}}else if(b>I)for(;b<=T;)Ct(f[b],g,x,!0),b++;else{const M=b,D=b,W=new Map;for(b=D;b<=I;b++){const pt=d[b]=_?Yt(d[b]):Pt(d[b]);pt.key!=null&&W.set(pt.key,b)}let q,rt=0;const xt=I-D+1;let pe=!1,Oi=0;const Te=new Array(xt);for(b=0;b<xt;b++)Te[b]=0;for(b=M;b<=T;b++){const pt=f[b];if(rt>=xt){Ct(pt,g,x,!0);continue}let Et;if(pt.key!=null)Et=W.get(pt.key);else for(q=D;q<=I;q++)if(Te[q-D]===0&&Ne(pt,d[q])){Et=q;break}Et===void 0?Ct(pt,g,x,!0):(Te[Et-D]=b+1,Et>=Oi?Oi=Et:pe=!0,N(pt,d[Et],h,null,g,x,k,y,_),rt++)}const Pi=pe?Xl(Te):ye;for(q=Pi.length-1,b=xt-1;b>=0;b--){const pt=D+b,Et=d[pt],Ii=pt+1<E?d[pt+1].el:p;Te[b]===0?N(null,Et,h,Ii,g,x,k,y,_):pe&&(q<0||b!==Pi[q]?Zt(Et,h,Ii,2):q--)}}},Zt=(f,d,h,p,g=null)=>{const{el:x,type:k,transition:y,children:_,shapeFlag:b}=f;if(b&6){Zt(f.component.subTree,d,h,p);return}if(b&128){f.suspense.move(d,h,p);return}if(b&64){k.move(f,d,h,he);return}if(k===Ot){r(x,d,h);for(let T=0;T<_.length;T++)Zt(_[T],d,h,p);r(f.anchor,d,h);return}if(k===En){P(f,d,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(x),r(x,d,h),ut(()=>y.enter(x),g);else{const{leave:T,delayLeave:I,afterLeave:M}=y,D=()=>r(x,d,h),W=()=>{T(x,()=>{D(),M&&M()})};I?I(x,D,W):W()}else r(x,d,h)},Ct=(f,d,h,p=!1,g=!1)=>{const{type:x,props:k,ref:y,children:_,dynamicChildren:b,shapeFlag:E,patchFlag:T,dirs:I}=f;if(y!=null&&Tr(y,null,h,f,!0),E&256){d.ctx.deactivate(f);return}const M=E&1&&I,D=!kn(f);let W;if(D&&(W=k&&k.onVnodeBeforeUnmount)&&St(W,d,f),E&6)ds(f.component,h,p);else{if(E&128){f.suspense.unmount(h,p);return}M&&te(f,null,d,"beforeUnmount"),E&64?f.type.remove(f,d,h,g,he,p):b&&(x!==Ot||T>0&&T&64)?Rt(b,d,h,!1,!0):(x===Ot&&T&384||!g&&E&16)&&Rt(_,d,h),p&&Ei(f)}(D&&(W=k&&k.onVnodeUnmounted)||M)&&ut(()=>{W&&St(W,d,f),M&&te(f,null,d,"unmounted")},h)},Ei=f=>{const{type:d,el:h,anchor:p,transition:g}=f;if(d===Ot){us(h,p);return}if(d===En){B(f);return}const x=()=>{i(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:y}=g,_=()=>k(h,x);y?y(f.el,x,_):_()}else x()},us=(f,d)=>{let h;for(;f!==d;)h=v(f),i(f),f=h;i(d)},ds=(f,d,h)=>{const{bum:p,scope:g,update:x,subTree:k,um:y}=f;p&&wn(p),g.stop(),x&&(x.active=!1,Ct(k,f,d,h)),y&&ut(y,d),ut(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Rt=(f,d,h,p=!1,g=!1,x=0)=>{for(let k=x;k<f.length;k++)Ct(f[k],d,h,p,g)},rn=f=>f.shapeFlag&6?rn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el);let rr=!1;const Si=(f,d,h)=>{f==null?d._vnode&&Ct(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,h),rr||(rr=!0,Bi(),lo(),rr=!1),d._vnode=f},he={p:N,um:Ct,m:Zt,r:Ei,mt:nr,mc:ct,pc:V,pbc:Mt,n:rn,o:t};let ir,ar;return e&&([ir,ar]=e(he)),{render:Si,hydrate:ir,createApp:Bl(Si,ir)}}function ur({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ee({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function So(t,e,n=!1){const r=t.children,i=e.children;if(R(r)&&R(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=Yt(i[a]),s.el=o.el),n||So(o,s)),s.type===Gn&&(s.el=o.el)}}function Xl(t){const e=t.slice(),n=[0];let r,i,a,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,t[n[s]]<c?a=s+1:o=s;c<t[n[a]]&&(a>0&&(e[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=e[o];return n}function Oo(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Oo(e)}const ql=t=>t.__isTeleport,Ot=Symbol.for("v-fgt"),Gn=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),En=Symbol.for("v-stc"),je=[];let wt=null;function Po(t=!1){je.push(wt=t?null:[])}function Jl(){je.pop(),wt=je[je.length-1]||null}let Ye=1;function qi(t){Ye+=t}function Io(t){return t.dynamicChildren=Ye>0?wt||ye:null,Jl(),Ye>0&&wt&&wt.push(t),t}function Ql(t,e,n,r,i,a){return Io(L(t,e,n,r,i,a,!0))}function Zl(t,e,n,r,i){return Io(et(t,e,n,r,i,!0))}function Nr(t){return t?t.__v_isVNode===!0:!1}function Ne(t,e){return t.type===e.type&&t.key===e.key}const Xn="__vInternal",To=({key:t})=>t??null,Sn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?it(t)||ht(t)||j(t)?{i:dt,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,r=0,i=null,a=t===Ot?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&To(e),ref:e&&Sn(e),scopeId:Vn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:dt};return s?(ui(l,n),a&128&&t.normalize(l)):n&&(l.shapeFlag|=it(n)?8:16),Ye>0&&!o&&wt&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&wt.push(l),l}const et=tf;function tf(t,e=null,n=null,r=0,i=null,a=!1){if((!t||t===dl)&&(t=He),Nr(t)){const s=Ce(t,e,!0);return n&&ui(s,n),Ye>0&&!a&&wt&&(s.shapeFlag&6?wt[wt.indexOf(t)]=s:wt.push(s)),s.patchFlag|=-2,s}if(df(t)&&(t=t.__vccOpts),e){e=ef(e);let{class:s,style:l}=e;s&&!it(s)&&(e.class=Qr(s)),Q(l)&&(eo(l)&&!R(l)&&(l=at({},l)),e.style=ie(l))}const o=it(t)?1:hl(t)?128:ql(t)?64:Q(t)?4:j(t)?2:0;return L(t,e,n,r,i,o,a,!0)}function ef(t){return t?eo(t)||Xn in t?at({},t):t:null}function Ce(t,e,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=t,s=e?nf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&To(s),ref:e&&e.ref?n&&i?R(i)?i.concat(Sn(e)):[i,Sn(e)]:Sn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ce(t.ssContent),ssFallback:t.ssFallback&&Ce(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Mr(t=" ",e=0){return et(Gn,null,t,e)}function No(t,e){const n=et(En,null,t);return n.staticCount=e,n}function Pt(t){return t==null||typeof t=="boolean"?et(He):R(t)?et(Ot,null,t.slice()):typeof t=="object"?Yt(t):et(Gn,null,String(t))}function Yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ce(t)}function ui(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(R(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),ui(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Xn in e)?e._ctx=dt:i===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),r&64?(n=16,e=[Mr(e)]):n=8);t.children=e,t.shapeFlag|=n}function nf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Qr([e.class,r.class]));else if(i==="style")e.style=ie([e.style,r.style]);else if(Bn(i)){const a=e[i],o=r[i];o&&a!==o&&!(R(a)&&a.includes(o))&&(e[i]=a?[].concat(a,o):o)}else i!==""&&(e[i]=r[i])}return e}function St(t,e,n,r=null){kt(t,e,7,[n,r])}const rf=_o();let af=0;function of(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||rf,a={uid:af++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ks(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ao(r,i),emitsOptions:co(r,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=il.bind(null,a),t.ce&&t.ce(a),a}let st=null,Ln,Rr;{const t=Da(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};Ln=e("__VUE_INSTANCE_SETTERS__",n=>st=n),Rr=e("__VUE_SSR_SETTERS__",n=>qn=n)}const qe=t=>{const e=st;return Ln(t),t.scope.on(),()=>{t.scope.off(),Ln(e)}},Ji=()=>{st&&st.scope.off(),Ln(null)};function Mo(t){return t.vnode.shapeFlag&4}let qn=!1;function sf(t,e=!1){e&&Rr(e);const{props:n,children:r}=t.vnode,i=Mo(t);$l(t,n,i,e),Yl(t,r);const a=i?lf(t,e):void 0;return e&&Rr(!1),a}function lf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=no(new Proxy(t.ctx,Nl));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?cf(t):null,a=qe(t);de();const o=Kt(r,t,0,[t.props,i]);if(me(),a(),ja(o)){if(o.then(Ji,Ji),e)return o.then(s=>{Qi(t,s,e)}).catch(s=>{Yn(s,t,0)});t.asyncDep=o}else Qi(t,o,e)}else Ro(t,e)}function Qi(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Q(e)&&(t.setupState=ao(e)),Ro(t,n)}let Zi;function Ro(t,e,n){const r=t.type;if(!t.render){if(!e&&Zi&&!r.render){const i=r.template||fi(t).template;if(i){const{isCustomElement:a,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=at(at({isCustomElement:a,delimiters:s},o),l);r.render=Zi(i,c)}}t.render=r.render||yt}{const i=qe(t);de();try{Ml(t)}finally{me(),i()}}}function ff(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function cf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ff(t)},slots:t.slots,emit:t.emit,expose:e}}function Jn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ao(no(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fe)return Fe[n](t)},has(e,n){return n in e||n in Fe}}))}function uf(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function df(t){return j(t)&&"__vccOpts"in t}const ne=(t,e)=>Ks(t,e,qn);function mf(t,e,n){const r=arguments.length;return r===2?Q(e)&&!R(e)?Nr(e)?et(t,null,[e]):et(t,e):et(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Nr(n)&&(n=[n]),et(t,e,n))}const hf="3.4.14";/**
* @vue/runtime-dom v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const pf="http://www.w3.org/2000/svg",gf="http://www.w3.org/1998/Math/MathML",Wt=typeof document<"u"?document:null,ta=Wt&&Wt.createElement("template"),vf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Wt.createElementNS(pf,t):e==="mathml"?Wt.createElementNS(gf,t):Wt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Wt.createTextNode(t),createComment:t=>Wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,a){const o=n?n.previousSibling:e.lastChild;if(i&&(i===a||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ta.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const s=ta.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bf=Symbol("_vtc");function yf(t,e,n){const r=t[bf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xf=Symbol("_vod"),_f=Symbol("");function wf(t,e,n){const r=t.style,i=r.display,a=it(n);if(n&&!a){if(e&&!it(e))for(const o in e)n[o]==null&&Lr(r,o,"");for(const o in n)Lr(r,o,n[o])}else if(a){if(e!==n){const o=r[_f];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");xf in t&&(r.display=i)}const ea=/\s*!important$/;function Lr(t,e,n){if(R(n))n.forEach(r=>Lr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Af(t,e);ea.test(n)?t.setProperty(Oe(r),n.replace(ea,""),"important"):t[r]=n}}const na=["Webkit","Moz","ms"],dr={};function Af(t,e){const n=dr[e];if(n)return n;let r=Nt(e);if(r!=="filter"&&r in t)return dr[e]=r;r=Un(r);for(let i=0;i<na.length;i++){const a=na[i]+r;if(a in t)return dr[e]=a}return e}const ra="http://www.w3.org/1999/xlink";function kf(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ra,e.slice(6,e.length)):t.setAttributeNS(ra,e,n);else{const a=As(e);n==null||a&&!$a(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function Cf(t,e,n,r,i,a,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,a),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=$a(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ge(t,e,n,r){t.addEventListener(e,n,r)}function Ef(t,e,n,r){t.removeEventListener(e,n,r)}const ia=Symbol("_vei");function Sf(t,e,n,r,i=null){const a=t[ia]||(t[ia]={}),o=a[e];if(r&&o)o.value=r;else{const[s,l]=Of(e);if(r){const c=a[e]=Tf(r,i);ge(t,s,c,l)}else o&&(Ef(t,s,o,l),a[e]=void 0)}}const aa=/(?:Once|Passive|Capture)$/;function Of(t){let e;if(aa.test(t)){e={};let r;for(;r=t.match(aa);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Oe(t.slice(2)),e]}let mr=0;const Pf=Promise.resolve(),If=()=>mr||(Pf.then(()=>mr=0),mr=Date.now());function Tf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kt(Nf(r,n.value),e,5,[r])};return n.value=t,n.attached=If(),n}function Nf(t,e){if(R(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Mf=(t,e,n,r,i,a,o,s,l)=>{const c=i==="svg";e==="class"?yf(t,r,c):e==="style"?wf(t,n,r):Bn(e)?Xr(e)||Sf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rf(t,e,r,c))?Cf(t,e,r,a,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),kf(t,e,r,c))};function Rf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&oa(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return oa(e)&&it(n)?!1:e in t}const sa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return R(e)?n=>wn(e,n):e};function Lf(t){t.target.composing=!0}function la(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hr=Symbol("_assign"),Ff={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[hr]=sa(i);const a=r||i.props&&i.props.type==="number";ge(t,e?"change":"input",o=>{if(o.target.composing)return;let s=t.value;n&&(s=s.trim()),a&&(s=xr(s)),t[hr](s)}),n&&ge(t,"change",()=>{t.value=t.value.trim()}),e||(ge(t,"compositionstart",Lf),ge(t,"compositionend",la),ge(t,"change",la))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},a){if(t[hr]=sa(a),t.composing)return;const o=i||t.type==="number"?xr(t.value):t.value,s=e??"";o!==s&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===s)||(t.value=s))}},jf=at({patchProp:Mf},vf);let fa;function zf(){return fa||(fa=Vl(jf))}const Bf=(...t)=>{const e=zf().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=$f(r);if(!i)return;const a=e._component;!j(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Df(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Df(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $f(t){return it(t)?document.querySelector(t):t}const Lo=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},gt=t=>(al("data-v-8bd67104"),t=t(),ol(),t),Uf={class:"container"},Hf={class:"card"},Yf=gt(()=>L("div",{class:"cardImg"},[L("img",{src:"https://picsum.photos/300/200/?random=1"})],-1)),Wf={class:"descBox"},Vf=gt(()=>L("div",{class:"hr"},[L("hr")],-1)),Kf={id:"section2",class:"descBox"},Gf=gt(()=>L("p",null,"警告標語",-1)),Xf=gt(()=>L("p",null,"注意標語",-1)),qf={class:"activity"},Jf=gt(()=>L("span",{class:"bonus"},"活動",-1)),Qf=gt(()=>L("span",null,"最新活動之類的標語",-1)),Zf={id:"section3"},tc={style:{"margin-bottom":"8px"}},ec=No('<div class="select" data-v-8bd67104><button class="selectBtn" data-v-8bd67104>正常冰</button><button class="selectBtn" data-v-8bd67104>少冰</button><button class="selectBtn" data-v-8bd67104>微冰</button><button class="selectBtn" data-v-8bd67104>去冰</button><button class="selectBtn" data-v-8bd67104>溫</button><button class="blockedBtn" data-v-8bd67104>熱</button></div>',1),nc=No('<div class="select" data-v-8bd67104><button class="blockedBtn" data-v-8bd67104>正常糖</button><button class="selectBtn" data-v-8bd67104>多糖</button><button class="selectBtn" data-v-8bd67104>半糖</button><button class="selectBtn" data-v-8bd67104>少糖</button><button class="selectBtn" data-v-8bd67104>微糖</button><button class="selectBtn" data-v-8bd67104>二分糖</button><button class="selectBtn" data-v-8bd67104>一分糖</button><button class="selectBtn" data-v-8bd67104>無糖</button></div>',1),rc={id:"section4"},ic=gt(()=>L("h4",null,"訂購人姓名 (選填) ",-1)),ac={class:"icon-wrapper"},oc=gt(()=>L("input",{type:"text",placeholder:"避免使用特殊符號，最多n字"},null,-1)),sc=gt(()=>L("p",{style:{"font-size":"14px",color:"#ccc","text-align":"right","margin-top":"4px"}},"此門市支援姓名貼紙",-1)),lc=gt(()=>L("h4",null,"備註 (選填)",-1)),fc=gt(()=>L("textarea",{cols:"30",rows:"10",placeholder:"單品特殊需求(如: 不要香菜)"},null,-1)),cc=gt(()=>L("p",{style:{"font-size":"14px",color:"#ccc","margin-top":"4px"}},"(0/100)",-1)),uc={class:"addCartBar"},dc={class:"col"},mc={class:"priceText"},hc={class:"counter"},pc=gt(()=>L("div",{class:"col"},[L("div",{class:"cartBtn"},"加入購物車")],-1)),gc={props:{title:{type:String,default:"標題"},descripitionImage:{type:String,default:"描述"},price:{type:Number,default:0},textColor:{type:String,default:"#000"},borderRadius:{type:String,default:"4px"},descBoxColor:{type:String,default:"#ccc"},warningBoxColor:{type:String,default:"#f99"},infoBoxColor:{type:String,default:"#ffc"},descripitionBox:{type:String,default:"商品詳細介紹"}}},vc=Object.assign(gc,{__name:"Card",props:["price","title","descripitionImage","textColor","descBoxColor","warningBoxColor","descripitionBox","infoBoxColor","borderRadius"],setup(t){const e=t,n=lr(1),r=lr(e.price||0),i=lr(a());bo(()=>{i.value=a()});function a(){return n.value*r.value}function o(s){n.value+=s,i.value=a()}return(s,l)=>{const c=mo("font-awesome-icon");return Po(),Ql(Ot,null,[L("div",{class:"topBar",style:ie({color:t.textColor})},[L("span",null,an(t.title),1),L("button",null,[et(c,{icon:["fas","xmark"],class:"closeSize"})])],4),L("div",Uf,[L("div",Hf,[Yf,L("div",Wf,[L("div",{class:"content-box",style:ie({color:t.textColor,backgroundColor:t.descBoxColor,borderRadius:t.borderRadius})},an(t.descripitionImage),5)])]),Vf,L("div",Kf,[L("div",{class:"warningBox",style:ie({color:t.textColor,backgroundColor:t.warningBoxColor,borderRadius:t.borderRadius})},[et(c,{icon:["fas","circle-info"],style:{color:"#fd6082"}}),Gf],4),L("div",{class:"warningBox",style:ie({color:t.textColor,backgroundColor:t.infoBoxColor,borderRadius:t.borderRadius})},[et(c,{icon:["fas","circle-info"],style:{color:"#ff7b00"}}),Xf],4),L("div",qf,[Jf,Qf,et(c,{icon:["fas","chevron-right"],style:{color:"#b5b5b5","margin-left":"auto"}})]),L("div",null,[L("p",null,an(t.descripitionBox),1)])]),L("div",Zf,[L("h4",tc,[et(c,{icon:["fas","star-of-life"],style:{color:"#ff708d"}}),Mr("溫度")]),ec,L("h4",null,[et(c,{icon:["fas","star-of-life"],style:{color:"#ff708d"}}),Mr("甜度")]),nc]),L("div",rc,[ic,L("div",ac,[oc,et(c,{class:"faIcon",icon:["fas","circle-user"],style:{color:"#b0b0b0"}})]),sc,lc,fc,cc])]),L("div",uc,[L("div",dc,[L("span",mc,"總金額："+an(i.value)+"元",1),L("div",hc,[L("button",{onClick:l[0]||(l[0]=()=>o(-1))},"–"),yl(L("input",{type:"number","onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u)},null,512),[[Ff,n.value]]),L("button",{onClick:l[2]||(l[2]=()=>o(1))},"＋")])]),pc])],64)}}}),bc=Lo(vc,[["__scopeId","data-v-8bd67104"]]),yc={components:{Card:bc}};function xc(t,e,n,r,i,a){const o=mo("Card");return Po(),Zl(o,{title:"卡片標題",descripitionImage:"圖片樣式描述",price:"100",textColor:"#000",borderRadius:"4px",descBoxColor:"#eee",warningBoxColor:"#ffedf5",infoBoxColor:"#fff3d9",descripitionBox:"商品詳細介紹"})}const _c=Lo(yc,[["render",xc]]);function ca(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ca(Object(n),!0).forEach(function(r){nt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ca(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Fn(t){"@babel/helpers - typeof";return Fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fn(t)}function wc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ua(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ac(t,e,n){return e&&ua(t.prototype,e),n&&ua(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function di(t,e){return Cc(t)||Sc(t,e)||Fo(t,e)||Pc()}function Je(t){return kc(t)||Ec(t)||Fo(t)||Oc()}function kc(t){if(Array.isArray(t))return Fr(t)}function Cc(t){if(Array.isArray(t))return t}function Ec(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Sc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Fo(t,e){if(t){if(typeof t=="string")return Fr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fr(t,e)}}function Fr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Oc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var da=function(){},mi={},jo={},zo=null,Bo={mark:da,measure:da};try{typeof window<"u"&&(mi=window),typeof document<"u"&&(jo=document),typeof MutationObserver<"u"&&(zo=MutationObserver),typeof performance<"u"&&(Bo=performance)}catch{}var Ic=mi.navigator||{},ma=Ic.userAgent,ha=ma===void 0?"":ma,Xt=mi,X=jo,pa=zo,dn=Bo;Xt.document;var Dt=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Do=~ha.indexOf("MSIE")||~ha.indexOf("Trident/"),mn,hn,pn,gn,vn,Ft="___FONT_AWESOME___",jr=16,$o="fa",Uo="svg-inline--fa",ce="data-fa-i2svg",zr="data-fa-pseudo-element",Tc="data-fa-pseudo-element-pending",hi="data-prefix",pi="data-icon",ga="fontawesome-i2svg",Nc="async",Mc=["HTML","HEAD","STYLE","SCRIPT"],Ho=function(){try{return!0}catch{return!1}}(),G="classic",Z="sharp",gi=[G,Z];function Qe(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[G]}})}var We=Qe((mn={},nt(mn,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),nt(mn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),mn)),Ve=Qe((hn={},nt(hn,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),nt(hn,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),hn)),Ke=Qe((pn={},nt(pn,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),nt(pn,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),pn)),Rc=Qe((gn={},nt(gn,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),nt(gn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),gn)),Lc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Yo="fa-layers-text",Fc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jc=Qe((vn={},nt(vn,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),nt(vn,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),vn)),Wo=[1,2,3,4,5,6,7,8,9,10],zc=Wo.concat([11,12,13,14,15,16,17,18,19,20]),Bc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ge=new Set;Object.keys(Ve[G]).map(Ge.add.bind(Ge));Object.keys(Ve[Z]).map(Ge.add.bind(Ge));var Dc=[].concat(gi,Je(Ge),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(Wo.map(function(t){return"".concat(t,"x")})).concat(zc.map(function(t){return"w-".concat(t)})),ze=Xt.FontAwesomeConfig||{};function $c(t){var e=X.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Uc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(X&&typeof X.querySelector=="function"){var Hc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hc.forEach(function(t){var e=di(t,2),n=e[0],r=e[1],i=Uc($c(n));i!=null&&(ze[r]=i)})}var Vo={styleDefault:"solid",familyDefault:"classic",cssPrefix:$o,replacementClass:Uo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ze.familyPrefix&&(ze.cssPrefix=ze.familyPrefix);var Ee=C(C({},Vo),ze);Ee.autoReplaceSvg||(Ee.observeMutations=!1);var O={};Object.keys(Vo).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){Ee[t]=n,Be.forEach(function(r){return r(O)})},get:function(){return Ee[t]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(e){Ee.cssPrefix=e,Be.forEach(function(n){return n(O)})},get:function(){return Ee.cssPrefix}});Xt.FontAwesomeConfig=O;var Be=[];function Yc(t){return Be.push(t),function(){Be.splice(Be.indexOf(t),1)}}var Ut=jr,Tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wc(t){if(!(!t||!Dt)){var e=X.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=X.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return X.head.insertBefore(e,r),t}}var Vc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xe(){for(var t=12,e="";t-- >0;)e+=Vc[Math.random()*62|0];return e}function Pe(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function vi(t){return t.classList?Pe(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ko(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Ko(t[n]),'" ')},"").trim()}function Qn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function bi(t){return t.size!==Tt.size||t.x!==Tt.x||t.y!==Tt.y||t.rotate!==Tt.rotate||t.flipX||t.flipY}function Gc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Xc(t){var e=t.transform,n=t.width,r=n===void 0?jr:n,i=t.height,a=i===void 0?jr:i,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Do?l+="translate(".concat(e.x/Ut-r/2,"em, ").concat(e.y/Ut-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Ut,"em), calc(-50% + ").concat(e.y/Ut,"em)) "):l+="translate(".concat(e.x/Ut,"em, ").concat(e.y/Ut,"em) "),l+="scale(".concat(e.size/Ut*(e.flipX?-1:1),", ").concat(e.size/Ut*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var qc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Go(){var t=$o,e=Uo,n=O.cssPrefix,r=O.replacementClass,i=qc;if(n!==t||r!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var va=!1;function pr(){O.autoAddCss&&!va&&(Wc(Go()),va=!0)}var Jc={mixout:function(){return{dom:{css:Go,insertCss:pr}}},hooks:function(){return{beforeDOMElementCreation:function(){pr()},beforeI2svg:function(){pr()}}}},jt=Xt||{};jt[Ft]||(jt[Ft]={});jt[Ft].styles||(jt[Ft].styles={});jt[Ft].hooks||(jt[Ft].hooks={});jt[Ft].shims||(jt[Ft].shims=[]);var At=jt[Ft],Xo=[],Qc=function t(){X.removeEventListener("DOMContentLoaded",t),jn=1,Xo.map(function(e){return e()})},jn=!1;Dt&&(jn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),jn||X.addEventListener("DOMContentLoaded",Qc));function Zc(t){Dt&&(jn?setTimeout(t,0):Xo.push(t))}function Ze(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?Ko(t):"<".concat(e," ").concat(Kc(r),">").concat(a.map(Ze).join(""),"</").concat(e,">")}function ba(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var tu=function(e,n){return function(r,i,a,o){return e.call(n,r,i,a,o)}},gr=function(e,n,r,i){var a=Object.keys(e),o=a.length,s=i!==void 0?tu(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[a[0]]):(l=0,u=r);l<o;l++)c=a[l],u=s(u,e[c],c,e);return u};function eu(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((i&1023)<<10)+(a&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Br(t){var e=eu(t);return e.length===1?e[0].toString(16):null}function nu(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ya(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Dr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=ya(e);typeof At.hooks.addPack=="function"&&!i?At.hooks.addPack(t,ya(e)):At.styles[t]=C(C({},At.styles[t]||{}),a),t==="fas"&&Dr("fa",e)}var bn,yn,xn,ve=At.styles,ru=At.shims,iu=(bn={},nt(bn,G,Object.values(Ke[G])),nt(bn,Z,Object.values(Ke[Z])),bn),yi=null,qo={},Jo={},Qo={},Zo={},ts={},au=(yn={},nt(yn,G,Object.keys(We[G])),nt(yn,Z,Object.keys(We[Z])),yn);function ou(t){return~Dc.indexOf(t)}function su(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!ou(i)?i:null}var es=function(){var e=function(a){return gr(ve,function(o,s,l){return o[l]=gr(s,a,{}),o},{})};qo=e(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Jo=e(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),ts=e(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in ve||O.autoFetchSvg,r=gr(ru,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Qo=r.names,Zo=r.unicodes,yi=Zn(O.styleDefault,{family:O.familyDefault})};Yc(function(t){yi=Zn(t.styleDefault,{family:O.familyDefault})});es();function xi(t,e){return(qo[t]||{})[e]}function lu(t,e){return(Jo[t]||{})[e]}function se(t,e){return(ts[t]||{})[e]}function ns(t){return Qo[t]||{prefix:null,iconName:null}}function fu(t){var e=Zo[t],n=xi("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qt(){return yi}var _i=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?G:n,i=We[r][t],a=Ve[r][t]||Ve[r][i],o=t in At.styles?t:null;return a||o||null}var xa=(xn={},nt(xn,G,Object.keys(Ke[G])),nt(xn,Z,Object.keys(Ke[Z])),xn);function tr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(e={},nt(e,G,"".concat(O.cssPrefix,"-").concat(G)),nt(e,Z,"".concat(O.cssPrefix,"-").concat(Z)),e),o=null,s=G;(t.includes(a[G])||t.some(function(c){return xa[G].includes(c)}))&&(s=G),(t.includes(a[Z])||t.some(function(c){return xa[Z].includes(c)}))&&(s=Z);var l=t.reduce(function(c,u){var m=su(O.cssPrefix,u);if(ve[u]?(u=iu[s].includes(u)?Rc[s][u]:u,o=u,c.prefix=u):au[s].indexOf(u)>-1?(o=u,c.prefix=Zn(u,{family:s})):m?c.iconName=m:u!==O.replacementClass&&u!==a[G]&&u!==a[Z]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var v=o==="fa"?ns(c.iconName):{},A=se(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||A||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!ve.far&&ve.fas&&!O.autoFetchSvg&&(c.prefix="fas")}return c},_i());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(ve.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=se(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=qt()||"fas"),l}var cu=function(){function t(){wc(this,t),this.definitions={}}return Ac(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Dr(s,o[s]);var l=Ke[G][s];l&&Dr(l,o[s]),es()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),_a=[],be={},Ae={},uu=Object.keys(Ae);function du(t,e){var n=e.mixoutsTo;return _a=t,be={},Object.keys(Ae).forEach(function(r){uu.indexOf(r)===-1&&delete Ae[r]}),_a.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Fn(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){be[o]||(be[o]=[]),be[o].push(a[o])})}r.provides&&r.provides(Ae)}),n}function $r(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=be[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ue(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=be[t]||[];i.forEach(function(a){a.apply(null,n)})}function zt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ae[t]?Ae[t].apply(null,e):void 0}function Ur(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||qt();if(e)return e=se(n,e)||e,ba(rs.definitions,n,e)||ba(At.styles,n,e)}var rs=new cu,mu=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,ue("noAuto")},hu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Dt?(ue("beforeI2svg",e),zt("pseudoElements2svg",e),zt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,Zc(function(){gu({autoReplaceSvgRoot:n}),ue("watch",e)})}},pu={icon:function(e){if(e===null)return null;if(Fn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:se(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Zn(e[0]);return{prefix:r,iconName:se(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.cssPrefix,"-"))>-1||e.match(Lc))){var i=tr(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||qt(),iconName:se(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var a=qt();return{prefix:a,iconName:se(a,e)||e}}}},vt={noAuto:mu,config:O,dom:hu,parse:pu,library:rs,findIconDefinition:Ur,toHtml:Ze},gu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(At.styles).length>0||O.autoFetchSvg)&&Dt&&O.autoReplaceSvg&&vt.dom.i2svg({node:r})};function er(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ze(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Dt){var r=X.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function vu(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(bi(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=Qn(C(C({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function bu(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(O.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:o}),children:r}]}]}function wi(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,m=t.extra,v=t.watchable,A=v===void 0?!1:v,z=r.found?r:n,N=z.width,$=z.height,w=i==="fak",S=[O.replacementClass,a?"".concat(O.cssPrefix,"-").concat(a):""].filter(function(bt){return m.classes.indexOf(bt)===-1}).filter(function(bt){return bt!==""||!!bt}).concat(m.classes).join(" "),P={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat($)})},B=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/$*16*.0625,"em")}:{};A&&(P.attributes[ce]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||Xe())},children:[l]}),delete P.attributes.title);var H=C(C({},P),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C(C({},B),m.styles)}),F=r.found&&n.found?zt("generateAbstractMask",H)||{children:[],attributes:{}}:zt("generateAbstractIcon",H)||{children:[],attributes:{}},tt=F.children,ct=F.attributes;return H.children=tt,H.attributes=ct,s?bu(H):vu(H)}function wa(t){var e=t.content,n=t.width,r=t.height,i=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=C(C(C({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[ce]="");var u=C({},o.styles);bi(i)&&(u.transform=Xc({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Qn(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),a&&v.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),v}function yu(t){var e=t.content,n=t.title,r=t.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Qn(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vr=At.styles;function Hr(t){var e=t[0],n=t[1],r=t.slice(4),i=di(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(oe.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(oe.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var xu={found:!1,width:512,height:512};function _u(t,e){!Ho&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Yr(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=qt()),new Promise(function(r,i){if(zt("missingIconAbstract"),n==="fa"){var a=ns(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&vr[e]&&vr[e][t]){var o=vr[e][t];return r(Hr(o))}_u(t,e),r(C(C({},xu),{},{icon:O.showMissingIcons&&t?zt("missingIconAbstract")||{}:{}}))})}var Aa=function(){},Wr=O.measurePerformance&&dn&&dn.mark&&dn.measure?dn:{mark:Aa,measure:Aa},Re='FA "6.5.1"',wu=function(e){return Wr.mark("".concat(Re," ").concat(e," begins")),function(){return is(e)}},is=function(e){Wr.mark("".concat(Re," ").concat(e," ends")),Wr.measure("".concat(Re," ").concat(e),"".concat(Re," ").concat(e," begins"),"".concat(Re," ").concat(e," ends"))},Ai={begin:wu,end:is},On=function(){};function ka(t){var e=t.getAttribute?t.getAttribute(ce):null;return typeof e=="string"}function Au(t){var e=t.getAttribute?t.getAttribute(hi):null,n=t.getAttribute?t.getAttribute(pi):null;return e&&n}function ku(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function Cu(){if(O.autoReplaceSvg===!0)return Pn.replace;var t=Pn[O.autoReplaceSvg];return t||Pn.replace}function Eu(t){return X.createElementNS("http://www.w3.org/2000/svg",t)}function Su(t){return X.createElement(t)}function as(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Eu:Su:n;if(typeof t=="string")return X.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){i.appendChild(as(o,{ceFn:r}))}),i}function Ou(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(as(i),n)}),n.getAttribute(ce)===null&&O.keepOriginalSource){var r=X.createComment(Ou(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~vi(n).indexOf(O.replacementClass))return Pn.replace(e);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===O.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Ze(s)}).join(`
`);n.setAttribute(ce,""),n.innerHTML=o}};function Ca(t){t()}function os(t,e){var n=typeof e=="function"?e:On;if(t.length===0)n();else{var r=Ca;O.mutateApproach===Nc&&(r=Xt.requestAnimationFrame||Ca),r(function(){var i=Cu(),a=Ai.begin("mutate");t.map(i),a(),n()})}}var ki=!1;function ss(){ki=!0}function Vr(){ki=!1}var zn=null;function Ea(t){if(pa&&O.observeMutations){var e=t.treeCallback,n=e===void 0?On:e,r=t.nodeCallback,i=r===void 0?On:r,a=t.pseudoElementsCallback,o=a===void 0?On:a,s=t.observeMutationsRoot,l=s===void 0?X:s;zn=new pa(function(c){if(!ki){var u=qt();Pe(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ka(m.addedNodes[0])&&(O.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&O.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ka(m.target)&&~Bc.indexOf(m.attributeName))if(m.attributeName==="class"&&Au(m.target)){var v=tr(vi(m.target)),A=v.prefix,z=v.iconName;m.target.setAttribute(hi,A||u),z&&m.target.setAttribute(pi,z)}else ku(m.target)&&i(m.target)})}}),Dt&&zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pu(){zn&&zn.disconnect()}function Iu(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Tu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=tr(vi(t));return i.prefix||(i.prefix=qt()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=lu(i.prefix,t.innerText)||xi(i.prefix,Br(t.innerText))),!i.iconName&&O.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Nu(t){var e=Pe(t.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||Xe()):(e["aria-hidden"]="true",e.focusable="false")),e}function Mu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Tu(t),r=n.iconName,i=n.prefix,a=n.rest,o=Nu(t),s=$r("parseNodeAttributes",{},t),l=e.styleParser?Iu(t):[];return C({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Ru=At.styles;function ls(t){var e=O.autoReplaceSvg==="nest"?Sa(t,{styleParser:!1}):Sa(t);return~e.extra.classes.indexOf(Yo)?zt("generateLayersText",t,e):zt("generateSvgReplacementMutation",t,e)}var Jt=new Set;gi.map(function(t){Jt.add("fa-".concat(t))});Object.keys(We[G]).map(Jt.add.bind(Jt));Object.keys(We[Z]).map(Jt.add.bind(Jt));Jt=Je(Jt);function Oa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Dt)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(ga,"-").concat(m))},i=function(m){return n.remove("".concat(ga,"-").concat(m))},a=O.autoFetchSvg?Jt:gi.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Ru));a.includes("fa")||a.push("fa");var o=[".".concat(Yo,":not([").concat(ce,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(ce,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Pe(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ai.begin("onTree"),c=s.reduce(function(u,m){try{var v=ls(m);v&&u.push(v)}catch(A){Ho||A.name==="MissingIcon"&&console.error(A)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){os(v,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(v){l(),m(v)})})}function Lu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ls(t).then(function(n){n&&os([n],e)})}function Fu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ur(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ur(i||{})),t(r,C(C({},n),{},{mask:i}))}}var ju=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Tt:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,A=n.titleId,z=A===void 0?null:A,N=n.classes,$=N===void 0?[]:N,w=n.attributes,S=w===void 0?{}:w,P=n.styles,B=P===void 0?{}:P;if(e){var H=e.prefix,F=e.iconName,tt=e.icon;return er(C({type:"icon"},e),function(){return ue("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(v?S["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(z||Xe()):(S["aria-hidden"]="true",S.focusable="false")),wi({icons:{main:Hr(tt),mask:l?Hr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:F,transform:C(C({},Tt),i),symbol:o,title:v,maskId:u,titleId:z,extra:{attributes:S,styles:B,classes:$}})})}},zu={mixout:function(){return{icon:Fu(ju)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Oa,n.nodeCallback=Lu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?X:r,a=n.callback,o=a===void 0?function(){}:a;return Oa(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(A,z){Promise.all([Yr(i,s),u.iconName?Yr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var $=di(N,2),w=$[0],S=$[1];A([n,wi({icons:{main:w,mask:S},prefix:s,iconName:i,transform:l,symbol:c,maskId:m,title:a,titleId:o,extra:v,watchable:!0})])}).catch(z)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Qn(s);l.length>0&&(i.style=l);var c;return bi(o)&&(c=zt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},Bu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return er({type:"layer"},function(){ue("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(Je(a)).join(" ")},children:o}]})}}}},Du={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return er({type:"counter",content:n},function(){return ue("beforeDOMElementCreation",{content:n,params:r}),yu({content:n.toString(),title:a,extra:{attributes:c,styles:m,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(Je(s))}})})}}}},$u={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Tt:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,A=v===void 0?{}:v;return er({type:"text",content:n},function(){return ue("beforeDOMElementCreation",{content:n,params:r}),wa({content:n,transform:C(C({},Tt),a),title:s,extra:{attributes:m,styles:A,classes:["".concat(O.cssPrefix,"-layers-text")].concat(Je(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Do){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wa({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Uu=new RegExp('"',"ug"),Pa=[1105920,1112319];function Hu(t){var e=t.replace(Uu,""),n=nu(e,0),r=n>=Pa[0]&&n<=Pa[1],i=e.length===2?e[0]===e[1]:!1;return{value:Br(i?e[0]:e),isSecondary:r||i}}function Ia(t,e){var n="".concat(Tc).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var a=Pe(t.children),o=a.filter(function(tt){return tt.getAttribute(zr)===e})[0],s=Xt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Fc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:G,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ve[v][l[2].toLowerCase()]:jc[v][c],z=Hu(m),N=z.value,$=z.isSecondary,w=l[0].startsWith("FontAwesome"),S=xi(A,N),P=S;if(w){var B=fu(N);B.iconName&&B.prefix&&(S=B.iconName,A=B.prefix)}if(S&&!$&&(!o||o.getAttribute(hi)!==A||o.getAttribute(pi)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);var H=Mu(),F=H.extra;F.attributes[zr]=e,Yr(S,A).then(function(tt){var ct=wi(C(C({},H),{},{icons:{main:tt,mask:_i()},prefix:A,iconName:P,extra:F,watchable:!0})),bt=X.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(bt,t.firstChild):t.appendChild(bt),bt.outerHTML=ct.map(function(Mt){return Ze(Mt)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Yu(t){return Promise.all([Ia(t,"::before"),Ia(t,"::after")])}function Wu(t){return t.parentNode!==document.head&&!~Mc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(zr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ta(t){if(Dt)return new Promise(function(e,n){var r=Pe(t.querySelectorAll("*")).filter(Wu).map(Yu),i=Ai.begin("searchPseudoElements");ss(),Promise.all(r).then(function(){i(),Vr(),e()}).catch(function(){i(),Vr(),n()})})}var Vu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ta,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?X:r;O.searchPseudoElements&&Ta(i)}}},Na=!1,Ku={mixout:function(){return{dom:{unwatch:function(){ss(),Na=!0}}}},hooks:function(){return{bootstrap:function(){Ea($r("mutationObserverCallbacks",{}))},noAuto:function(){Pu()},watch:function(n){var r=n.observeMutationsRoot;Na?Vr():Ea($r("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ma=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Gu={mixout:function(){return{parse:{transform:function(n){return Ma(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ma(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:v};return{tag:"g",attributes:C({},A.outer),children:[{tag:"g",attributes:C({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),A.path)}]}]}}}},br={x:0,y:0,width:"100%",height:"100%"};function Ra(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Xu(t){return t.tag==="g"?t.children:[t]}var qu={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?tr(i.split(" ").map(function(o){return o.trim()})):_i();return a.prefix||(a.prefix=qt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,m=o.width,v=o.icon,A=Gc({transform:l,containerWidth:m,iconWidth:c}),z={tag:"rect",attributes:C(C({},br),{},{fill:"white"})},N=u.children?{children:u.children.map(Ra)}:{},$={tag:"g",attributes:C({},A.inner),children:[Ra(C({tag:u.tag,attributes:C(C({},u.attributes),A.path)},N))]},w={tag:"g",attributes:C({},A.outer),children:[$]},S="mask-".concat(s||Xe()),P="clip-".concat(s||Xe()),B={tag:"mask",attributes:C(C({},br),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,w]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Xu(v)},B]};return r.push(H,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(S,")")},br)}),{children:r,attributes:i}}}},Ju={provides:function(e){var n=!1;Xt.matchMedia&&(n=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Qu={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Zu=[Jc,zu,Bu,Du,$u,Vu,Ku,Gu,qu,Ju,Qu];du(Zu,{mixoutsTo:vt});vt.noAuto;vt.config;var td=vt.library;vt.dom;var ed=vt.parse;vt.findIconDefinition;vt.toHtml;var nd=vt.icon;vt.layer;vt.text;vt.counter;var rd=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function id(t,e){return e={exports:{}},t(e,e.exports),e.exports}var ad=id(function(t){(function(e){var n=function(w,S,P){if(!c(S)||m(S)||v(S)||A(S)||l(S))return S;var B,H=0,F=0;if(u(S))for(B=[],F=S.length;H<F;H++)B.push(n(w,S[H],P));else{B={};for(var tt in S)Object.prototype.hasOwnProperty.call(S,tt)&&(B[w(tt,P)]=n(w,S[tt],P))}return B},r=function(w,S){S=S||{};var P=S.separator||"_",B=S.split||/(?=[A-Z])/;return w.split(B).join(P)},i=function(w){return z(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(S,P){return P?P.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},a=function(w){var S=i(w);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(w,S){return r(w,S).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},u=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},A=function(w){return s.call(w)=="[object Boolean]"},z=function(w){return w=w-0,w===w},N=function(w,S){var P=S&&"process"in S?S.process:S;return typeof P!="function"?w:function(B,H){return P(B,w,H)}},$={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(w,S){return n(N(i,S),w)},decamelizeKeys:function(w,S){return n(N(o,S),w,S)},pascalizeKeys:function(w,S){return n(N(a,S),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=$:e.humps=$})(rd)}),od=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Kr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sd=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n};function ld(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=ad.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return e[i]=a,e},{})}function fd(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function fs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return fs(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=fd(u);break;case"style":l.style=ld(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=sd(n,["class","style"]);return mf(t.tag,Kr({},e,{class:i.class,style:Kr({},i.style,o)},i.attrs,s),r)}var cs=!1;try{cs=!0}catch{}function cd(){if(!cs&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function yr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Le({},t,e):{}}function ud(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Le(e,"fa-"+t.size,t.size!==null),Le(e,"fa-rotate-"+t.rotation,t.rotation!==null),Le(e,"fa-pull-"+t.pull,t.pull!==null),Le(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function La(t){if(t===null)return null;if((typeof t>"u"?"undefined":od(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var dd=xl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=ne(function(){return La(e.icon)}),a=ne(function(){return yr("classes",ud(e))}),o=ne(function(){return yr("transform",typeof e.transform=="string"?ed.transform(e.transform):e.transform)}),s=ne(function(){return yr("mask",La(e.mask))}),l=ne(function(){return nd(i.value,Kr({},a.value,o.value,s.value,{symbol:e.symbol,title:e.title}))});An(l,function(u){if(!u)return cd("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var c=ne(function(){return l.value?fs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),md={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},hd=md,pd={prefix:"fas",iconName:"star-of-life",icon:[512,512,[],"f621","M208 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V172.9l122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L352 256l122 70.4c15.3 8.8 20.5 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7L304 339.1V480c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32V339.1L86 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7c-8.8-15.3-3.6-34.9 11.7-43.7L160 256 38 185.6c-15.3-8.8-20.5-28.4-11.7-43.7l16-27.7C51.1 98.8 70.7 93.6 86 102.4l122 70.4V32z"]},gd={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},vd={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},bd={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};td.add(vd,hd,bd,pd,gd);Bf(_c).component("font-awesome-icon",dd).mount("#app");
