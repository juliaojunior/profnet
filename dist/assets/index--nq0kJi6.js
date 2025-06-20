const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-D1xG4mrZ.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/LoginView-DL5GvYB1.css","assets/RegisterView-Dg_FfX3n.js","assets/RegisterView-OW3d0rVt.css","assets/ProfileView-CiYeXm55.js","assets/ProfileView-BctrQTjH.css","assets/AdminDashboard-CE3yV18Q.js","assets/AdminDashboard-X5oksnau.css","assets/HomeView-DNVkkext.js","assets/HomeView-C8RNvMKA.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ll(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},Yr=[],Yt=()=>{},hy=()=>!1,sa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ul=t=>t.startsWith("onUpdate:"),ht=Object.assign,hl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fy=Object.prototype.hasOwnProperty,Re=(t,e)=>fy.call(t,e),re=Array.isArray,Xr=t=>wi(t)==="[object Map]",_s=t=>wi(t)==="[object Set]",vh=t=>wi(t)==="[object Date]",fe=t=>typeof t=="function",Be=t=>typeof t=="string",rn=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Yd=t=>(ke(t)||fe(t))&&fe(t.then)&&fe(t.catch),Xd=Object.prototype.toString,wi=t=>Xd.call(t),dy=t=>wi(t).slice(8,-1),Jd=t=>wi(t)==="[object Object]",fl=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},py=/-(\w)/g,Mt=ia(t=>t.replace(py,(e,n)=>n?n.toUpperCase():"")),gy=/\B([A-Z])/g,Or=ia(t=>t.replace(gy,"-$1").toLowerCase()),oa=ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ja=ia(t=>t?`on${oa(t)}`:""),Kn=(t,e)=>!Object.is(t,e),ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Po=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Eh;const aa=()=>Eh||(Eh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dl(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?vy(r):dl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||ke(t))return t}const my=/;(?![^(]*\))/g,_y=/:([^]+)/,yy=/\/\*[^]*?\*\//g;function vy(t){const e={};return t.replace(yy,"").split(my).forEach(n=>{if(n){const r=n.split(_y);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function pl(t){let e="";if(Be(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=pl(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ey="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ty=ll(Ey);function Zd(t){return!!t||t===""}function Iy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=wr(t[r],e[r]);return n}function wr(t,e){if(t===e)return!0;let n=vh(t),r=vh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rn(t),r=rn(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?Iy(t,e):!1;if(n=ke(t),r=ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!wr(t[o],e[o]))return!1}}return String(t)===String(e)}function gl(t,e){return t.findIndex(n=>wr(n,e))}const ep=t=>!!(t&&t.__v_isRef===!0),wy=t=>Be(t)?t:t==null?"":re(t)||ke(t)&&(t.toString===Xd||!fe(t.toString))?ep(t)?wy(t.value):JSON.stringify(t,tp,2):String(t),tp=(t,e)=>ep(e)?tp(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Za(r,i)+" =>"]=s,n),{})}:_s(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Za(n))}:rn(e)?Za(e):ke(e)&&!re(e)&&!Jd(e)?String(e):e,Za=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Ay{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ry(){return yt}let Ce;const ec=new WeakSet;class np{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ec.has(this)&&(ec.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Th(this),ip(this);const e=Ce,n=$t;Ce=this,$t=!0;try{return this.fn()}finally{op(this),Ce=e,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yl(e);this.deps=this.depsTail=void 0,Th(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ec.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ac(this)&&this.run()}get dirty(){return Ac(this)}}let rp=0,Ws,Gs;function sp(t,e=!1){if(t.flags|=8,e){t.next=Gs,Gs=t;return}t.next=Ws,Ws=t}function ml(){rp++}function _l(){if(--rp>0)return;if(Gs){let e=Gs;for(Gs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ip(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function op(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),yl(r),by(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ac(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ap(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ap(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ai)||(t.globalVersion=ai,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ac(t))))return;t.flags|=2;const e=t.dep,n=Ce,r=$t;Ce=t,$t=!0;try{ip(t);const s=t.fn(t._value);(e.version===0||Kn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ce=n,$t=r,op(t),t.flags&=-3}}function yl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)yl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function by(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $t=!0;const cp=[];function An(){cp.push($t),$t=!1}function Rn(){const t=cp.pop();$t=t===void 0?!0:t}function Th(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ce;Ce=void 0;try{e()}finally{Ce=n}}}let ai=0;class Sy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ce||!$t||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new Sy(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,lp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=r)}return n}trigger(e){this.version++,ai++,this.notify(e)}notify(e){ml();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_l()}}}function lp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)lp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Rc=new WeakMap,Tr=Symbol(""),bc=Symbol(""),ci=Symbol("");function at(t,e,n){if($t&&Ce){let r=Rc.get(t);r||Rc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new vl),s.map=r,s.key=n),s.track()}}function _n(t,e,n,r,s,i){const o=Rc.get(t);if(!o){ai++;return}const c=l=>{l&&l.trigger()};if(ml(),e==="clear")o.forEach(c);else{const l=re(t),h=l&&fl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===ci||!rn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(ci)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Tr)),Xr(t)&&c(o.get(bc)));break;case"delete":l||(c(o.get(Tr)),Xr(t)&&c(o.get(bc)));break;case"set":Xr(t)&&c(o.get(Tr));break}}_l()}function Br(t){const e=Ae(t);return e===t?e:(at(e,"iterate",ci),Vt(t)?e:e.map(Je))}function ca(t){return at(t=Ae(t),"iterate",ci),t}const Py={__proto__:null,[Symbol.iterator](){return tc(this,Symbol.iterator,Je)},concat(...t){return Br(this).concat(...t.map(e=>re(e)?Br(e):e))},entries(){return tc(this,"entries",t=>(t[1]=Je(t[1]),t))},every(t,e){return dn(this,"every",t,e,void 0,arguments)},filter(t,e){return dn(this,"filter",t,e,n=>n.map(Je),arguments)},find(t,e){return dn(this,"find",t,e,Je,arguments)},findIndex(t,e){return dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dn(this,"findLast",t,e,Je,arguments)},findLastIndex(t,e){return dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return nc(this,"includes",t)},indexOf(...t){return nc(this,"indexOf",t)},join(t){return Br(this).join(t)},lastIndexOf(...t){return nc(this,"lastIndexOf",t)},map(t,e){return dn(this,"map",t,e,void 0,arguments)},pop(){return Ms(this,"pop")},push(...t){return Ms(this,"push",t)},reduce(t,...e){return Ih(this,"reduce",t,e)},reduceRight(t,...e){return Ih(this,"reduceRight",t,e)},shift(){return Ms(this,"shift")},some(t,e){return dn(this,"some",t,e,void 0,arguments)},splice(...t){return Ms(this,"splice",t)},toReversed(){return Br(this).toReversed()},toSorted(t){return Br(this).toSorted(t)},toSpliced(...t){return Br(this).toSpliced(...t)},unshift(...t){return Ms(this,"unshift",t)},values(){return tc(this,"values",Je)}};function tc(t,e,n){const r=ca(t),s=r[e]();return r!==t&&!Vt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Cy=Array.prototype;function dn(t,e,n,r,s,i){const o=ca(t),c=o!==t&&!Vt(t),l=o[e];if(l!==Cy[e]){const p=l.apply(t,i);return c?Je(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,Je(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Ih(t,e,n,r){const s=ca(t);let i=n;return s!==t&&(Vt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Je(c),l,t)}),s[e](i,...r)}function nc(t,e,n){const r=Ae(t);at(r,"iterate",ci);const s=r[e](...n);return(s===-1||s===!1)&&Il(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ms(t,e,n=[]){An(),ml();const r=Ae(t)[e].apply(t,n);return _l(),Rn(),r}const ky=ll("__proto__,__v_isRef,__isVue"),up=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn));function Oy(t){rn(t)||(t=String(t));const e=Ae(this);return at(e,"has",t),e.hasOwnProperty(t)}class hp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?jy:gp:i?pp:dp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let l;if(o&&(l=Py[n]))return l;if(n==="hasOwnProperty")return Oy}const c=Reflect.get(e,n,ut(e)?e:r);return(rn(n)?up.has(n):ky(n))||(s||at(e,"get",n),i)?c:ut(c)?o&&fl(n)?c:c.value:ke(c)?s?_p(c):Ai(c):c}}class fp extends hp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Xn(i);if(!Vt(r)&&!Xn(r)&&(i=Ae(i),r=Ae(r)),!re(e)&&ut(i)&&!ut(r))return l?!1:(i.value=r,!0)}const o=re(e)&&fl(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,ut(e)?e:s);return e===Ae(s)&&(o?Kn(r,i)&&_n(e,"set",n,r):_n(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&_n(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!up.has(n))&&at(e,"has",n),r}ownKeys(e){return at(e,"iterate",re(e)?"length":Tr),Reflect.ownKeys(e)}}class Dy extends hp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ny=new fp,Vy=new Dy,xy=new fp(!0);const Sc=t=>t,eo=t=>Reflect.getPrototypeOf(t);function My(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Xr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?Sc:e?Co:Je;return!e&&at(i,"iterate",l?bc:Tr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function to(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ly(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(Kn(s,c)&&at(o,"get",s),at(o,"get",c));const{has:l}=eo(o),h=e?Sc:t?Co:Je;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&at(Ae(s),"iterate",Tr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(Kn(s,c)&&at(o,"has",s),at(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),h=e?Sc:t?Co:Je;return!t&&at(l,"iterate",Tr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return ht(n,t?{add:to("add"),set:to("set"),delete:to("delete"),clear:to("clear")}:{add(s){!e&&!Vt(s)&&!Xn(s)&&(s=Ae(s));const i=Ae(this);return eo(i).has.call(i,s)||(i.add(s),_n(i,"add",s,s)),this},set(s,i){!e&&!Vt(i)&&!Xn(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=eo(o);let h=c.call(o,s);h||(s=Ae(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?Kn(i,f)&&_n(o,"set",s,i):_n(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=eo(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&_n(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&_n(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=My(s,t,e)}),n}function El(t,e){const n=Ly(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Uy={get:El(!1,!1)},Fy={get:El(!1,!0)},By={get:El(!0,!1)};const dp=new WeakMap,pp=new WeakMap,gp=new WeakMap,jy=new WeakMap;function $y(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hy(t){return t.__v_skip||!Object.isExtensible(t)?0:$y(dy(t))}function Ai(t){return Xn(t)?t:Tl(t,!1,Ny,Uy,dp)}function mp(t){return Tl(t,!1,xy,Fy,pp)}function _p(t){return Tl(t,!0,Vy,By,gp)}function Tl(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Hy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Jr(t){return Xn(t)?Jr(t.__v_raw):!!(t&&t.__v_isReactive)}function Xn(t){return!!(t&&t.__v_isReadonly)}function Vt(t){return!!(t&&t.__v_isShallow)}function Il(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function qy(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&wc(t,"__v_skip",!0),t}const Je=t=>ke(t)?Ai(t):t,Co=t=>ke(t)?_p(t):t;function ut(t){return t?t.__v_isRef===!0:!1}function zy(t){return yp(t,!1)}function Ky(t){return yp(t,!0)}function yp(t,e){return ut(t)?t:new Wy(t,e)}class Wy{constructor(e,n){this.dep=new vl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:Je(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Vt(e)||Xn(e);e=r?e:Ae(e),Kn(e,n)&&(this._rawValue=e,this._value=r?e:Je(e),this.dep.trigger())}}function Ir(t){return ut(t)?t.value:t}const Gy={get:(t,e,n)=>e==="__v_raw"?t:Ir(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ut(s)&&!ut(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function vp(t){return Jr(t)?t:new Proxy(t,Gy)}class Qy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new vl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return sp(this,!0),!0}get value(){const e=this.dep.track();return ap(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yy(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Qy(r,s,n)}const no={},ko=new WeakMap;let _r;function Xy(t,e=!1,n=_r){if(n){let r=ko.get(n);r||ko.set(n,r=[]),r.push(t)}}function Jy(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=H=>s?H:Vt(H)||s===!1||s===0?yn(H,1):yn(H);let f,p,g,_,k=!1,D=!1;if(ut(t)?(p=()=>t.value,k=Vt(t)):Jr(t)?(p=()=>h(t),k=!0):re(t)?(D=!0,k=t.some(H=>Jr(H)||Vt(H)),p=()=>t.map(H=>{if(ut(H))return H.value;if(Jr(H))return h(H);if(fe(H))return l?l(H,2):H()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){An();try{g()}finally{Rn()}}const H=_r;_r=f;try{return l?l(t,3,[_]):t(_)}finally{_r=H}}:p=Yt,e&&s){const H=p,ce=s===!0?1/0:s;p=()=>yn(H(),ce)}const C=Ry(),U=()=>{f.stop(),C&&C.active&&hl(C.effects,f)};if(i&&e){const H=e;e=(...ce)=>{H(...ce),U()}}let F=D?new Array(t.length).fill(no):no;const $=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const ce=f.run();if(s||k||(D?ce.some((he,w)=>Kn(he,F[w])):Kn(ce,F))){g&&g();const he=_r;_r=f;try{const w=[ce,F===no?void 0:D&&F[0]===no?[]:F,_];F=ce,l?l(e,3,w):e(...w)}finally{_r=he}}}else f.run()};return c&&c($),f=new np(p),f.scheduler=o?()=>o($,!1):$,_=H=>Xy(H,!1,f),g=f.onStop=()=>{const H=ko.get(f);if(H){if(l)l(H,4);else for(const ce of H)ce();ko.delete(f)}},e?r?$(!0):F=f.run():o?o($.bind(null,!0),!0):f.run(),U.pause=f.pause.bind(f),U.resume=f.resume.bind(f),U.stop=U,U}function yn(t,e=1/0,n){if(e<=0||!ke(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ut(t))yn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)yn(t[r],e,n);else if(_s(t)||Xr(t))t.forEach(r=>{yn(r,e,n)});else if(Jd(t)){for(const r in t)yn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&yn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ri(t,e,n,r){try{return r?t(...r):t()}catch(s){la(s,e,n)}}function sn(t,e,n,r){if(fe(t)){const s=Ri(t,e,n,r);return s&&Yd(s)&&s.catch(i=>{la(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}}function la(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){An(),Ri(i,null,10,[t,l,h]),Rn();return}}Zy(t,n,s,r,o)}function Zy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const mt=[];let Wt=-1;const Zr=[];let Fn=null,qr=0;const Ep=Promise.resolve();let Oo=null;function wl(t){const e=Oo||Ep;return t?e.then(this?t.bind(this):t):e}function ev(t){let e=Wt+1,n=mt.length;for(;e<n;){const r=e+n>>>1,s=mt[r],i=li(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Al(t){if(!(t.flags&1)){const e=li(t),n=mt[mt.length-1];!n||!(t.flags&2)&&e>=li(n)?mt.push(t):mt.splice(ev(e),0,t),t.flags|=1,Tp()}}function Tp(){Oo||(Oo=Ep.then(wp))}function tv(t){re(t)?Zr.push(...t):Fn&&t.id===-1?Fn.splice(qr+1,0,t):t.flags&1||(Zr.push(t),t.flags|=1),Tp()}function wh(t,e,n=Wt+1){for(;n<mt.length;n++){const r=mt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;mt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ip(t){if(Zr.length){const e=[...new Set(Zr)].sort((n,r)=>li(n)-li(r));if(Zr.length=0,Fn){Fn.push(...e);return}for(Fn=e,qr=0;qr<Fn.length;qr++){const n=Fn[qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fn=null,qr=0}}const li=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wp(t){try{for(Wt=0;Wt<mt.length;Wt++){const e=mt[Wt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ri(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wt<mt.length;Wt++){const e=mt[Wt];e&&(e.flags&=-2)}Wt=-1,mt.length=0,Ip(),Oo=null,(mt.length||Zr.length)&&wp()}}let bt=null,Ap=null;function Do(t){const e=bt;return bt=t,Ap=t&&t.type.__scopeId||null,e}function nv(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Nh(-1);const i=Do(e);let o;try{o=t(...s)}finally{Do(i),r._d&&Nh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function QP(t,e){if(bt===null)return t;const n=da(bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Pe]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&yn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(An(),sn(l,n,8,[t.el,c,t,e]),Rn())}}const rv=Symbol("_vte"),sv=t=>t.__isTeleport;function Rl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Rl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function bl(t,e){return fe(t)?ht({name:t.name},e,{setup:t}):t}function Rp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qs(t,e,n,r,s=!1){if(re(t)){t.forEach((k,D)=>Qs(k,e&&(re(e)?e[D]:e),n,r,s));return}if(Ys(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?da(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Pe?c.refs={}:c.refs,p=c.setupState,g=Ae(p),_=p===Pe?()=>!1:k=>Re(g,k);if(h!=null&&h!==l&&(Be(h)?(f[h]=null,_(h)&&(p[h]=null)):ut(h)&&(h.value=null)),fe(l))Ri(l,c,12,[o,f]);else{const k=Be(l),D=ut(l);if(k||D){const C=()=>{if(t.f){const U=k?_(l)?p[l]:f[l]:l.value;s?re(U)&&hl(U,i):re(U)?U.includes(i)||U.push(i):k?(f[l]=[i],_(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else k?(f[l]=o,_(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,Rt(C,n)):C()}}}aa().requestIdleCallback;aa().cancelIdleCallback;const Ys=t=>!!t.type.__asyncLoader,bp=t=>t.type.__isKeepAlive;function iv(t,e){Sp(t,"a",e)}function ov(t,e){Sp(t,"da",e)}function Sp(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ua(e,r,n),n){let s=n.parent;for(;s&&s.parent;)bp(s.parent.vnode)&&av(r,e,n,s),s=s.parent}}function av(t,e,n,r){const s=ua(e,t,r,!0);Cp(()=>{hl(r[e],s)},n)}function ua(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{An();const c=bi(n),l=sn(e,n,t,o);return c(),Rn(),l});return r?s.unshift(i):s.push(i),i}}const kn=t=>(e,n=lt)=>{(!hi||t==="sp")&&ua(t,(...r)=>e(...r),n)},cv=kn("bm"),Pp=kn("m"),lv=kn("bu"),uv=kn("u"),hv=kn("bum"),Cp=kn("um"),fv=kn("sp"),dv=kn("rtg"),pv=kn("rtc");function gv(t,e=lt){ua("ec",t,e)}const mv="components";function _v(t,e){return vv(mv,t,!0,e)||t}const yv=Symbol.for("v-ndc");function vv(t,e,n=!0,r=!1){const s=bt||lt;if(s){const i=s.type;{const c=aE(i,!1);if(c&&(c===e||c===Mt(e)||c===oa(Mt(e))))return i}const o=Ah(s[t]||i[t],e)||Ah(s.appContext[t],e);return!o&&r?i:o}}function Ah(t,e){return t&&(t[e]||t[Mt(e)]||t[oa(Mt(e))])}function YP(t,e,n,r){let s;const i=n,o=re(t);if(o||Be(t)){const c=o&&Jr(t);let l=!1,h=!1;c&&(l=!Vt(t),h=Xn(t),t=ca(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?Co(Je(t[f])):Je(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(ke(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Pc=t=>t?Xp(t)?da(t):Pc(t.parent):null,Xs=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pc(t.parent),$root:t=>Pc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Op(t),$forceUpdate:t=>t.f||(t.f=()=>{Al(t.update)}),$nextTick:t=>t.n||(t.n=wl.bind(t.proxy)),$watch:t=>Bv.bind(t)}),rc=(t,e)=>t!==Pe&&!t.__isScriptSetup&&Re(t,e),Ev={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(rc(r,e))return o[e]=1,r[e];if(s!==Pe&&Re(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return o[e]=3,i[e];if(n!==Pe&&Re(n,e))return o[e]=4,n[e];Cc&&(o[e]=0)}}const f=Xs[e];let p,g;if(f)return e==="$attrs"&&at(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Pe&&Re(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Re(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return rc(s,e)?(s[e]=n,!0):r!==Pe&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Pe&&Re(t,o)||rc(e,o)||(c=i[0])&&Re(c,o)||Re(r,o)||Re(Xs,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rh(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cc=!0;function Tv(t){const e=Op(t),n=t.proxy,r=t.ctx;Cc=!1,e.beforeCreate&&bh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:k,activated:D,deactivated:C,beforeDestroy:U,beforeUnmount:F,destroyed:$,unmounted:H,render:ce,renderTracked:he,renderTriggered:w,errorCaptured:v,serverPrefetch:I,expose:A,inheritAttrs:R,components:S,directives:T,filters:dt}=e;if(h&&Iv(h,r,null),o)for(const ye in o){const ge=o[ye];fe(ge)&&(r[ye]=ge.bind(n))}if(s){const ye=s.call(n,n);ke(ye)&&(t.data=Ai(ye))}if(Cc=!0,i)for(const ye in i){const ge=i[ye],wt=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):Yt,Ut=!fe(ge)&&fe(ge.set)?ge.set.bind(n):Yt,Ot=Ze({get:wt,set:Ut});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:De=>Ot.value=De})}if(c)for(const ye in c)kp(c[ye],r,n,ye);if(l){const ye=fe(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(ge=>{fo(ge,ye[ge])})}f&&bh(f,t,"c");function Ue(ye,ge){re(ge)?ge.forEach(wt=>ye(wt.bind(n))):ge&&ye(ge.bind(n))}if(Ue(cv,p),Ue(Pp,g),Ue(lv,_),Ue(uv,k),Ue(iv,D),Ue(ov,C),Ue(gv,v),Ue(pv,he),Ue(dv,w),Ue(hv,F),Ue(Cp,H),Ue(fv,I),re(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(ge=>{Object.defineProperty(ye,ge,{get:()=>n[ge],set:wt=>n[ge]=wt})})}else t.exposed||(t.exposed={});ce&&t.render===Yt&&(t.render=ce),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),T&&(t.directives=T),I&&Rp(t)}function Iv(t,e,n=Yt){re(t)&&(t=kc(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=Xt(s.from||r,s.default,!0):i=Xt(s.from||r):i=Xt(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function bh(t,e,n){sn(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kp(t,e,n,r){let s=r.includes(".")?qp(n,r):()=>n[r];if(Be(t)){const i=e[t];fe(i)&&po(s,i)}else if(fe(t))po(s,t.bind(n));else if(ke(t))if(re(t))t.forEach(i=>kp(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&po(s,i,t)}}function Op(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>No(l,h,o,!0)),No(l,e,o)),ke(e)&&i.set(e,l),l}function No(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&No(t,i,n,!0),s&&s.forEach(o=>No(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=wv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const wv={data:Sh,props:Ph,emits:Ph,methods:Bs,computed:Bs,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Bs,directives:Bs,watch:Rv,provide:Sh,inject:Av};function Sh(t,e){return e?t?function(){return ht(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function Av(t,e){return Bs(kc(t),kc(e))}function kc(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?ht(Object.create(null),t,e):e}function Ph(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:ht(Object.create(null),Rh(t),Rh(e??{})):e}function Rv(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Dp(){return{app:null,config:{isNativeTag:hy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bv=0;function Sv(t,e){return function(r,s=null){fe(r)||(r=ht({},r)),s!=null&&!ke(s)&&(s=null);const i=Dp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:bv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(h,...p)):fe(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const _=h._ceVNode||It(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),l=!0,h._container=f,f.__vue_app__=h,da(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(sn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=es;es=h;try{return f()}finally{es=p}}};return h}}let es=null;function fo(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function Xt(t,e,n=!1){const r=lt||bt;if(r||es){let s=es?es._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const Np={},Vp=()=>Object.create(Np),xp=t=>Object.getPrototypeOf(t)===Np;function Pv(t,e,n,r=!1){const s={},i=Vp();t.propsDefaults=Object.create(null),Mp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:mp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Cv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ha(t.emitsOptions,g))continue;const _=e[g];if(l)if(Re(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const k=Mt(g);s[k]=Oc(l,c,k,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Mp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Or(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Oc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&_n(t.attrs,"set","")}function Mp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ks(l))continue;const h=e[l];let f;s&&Re(s,f=Mt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:ha(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ae(n),h=c||Pe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Oc(s,l,p,h[p],t,!Re(h,p))}}return o}function Oc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=bi(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const kv=new WeakMap;function Lp(t,e,n=!1){const r=n?kv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[g,_]=Lp(p,e,!0);ht(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return ke(t)&&r.set(t,Yr),Yr;if(re(i))for(let f=0;f<i.length;f++){const p=Mt(i[f]);Ch(p)&&(o[p]=Pe)}else if(i)for(const f in i){const p=Mt(f);if(Ch(p)){const g=i[f],_=o[p]=re(g)||fe(g)?{type:g}:ht({},g),k=_.type;let D=!1,C=!0;if(re(k))for(let U=0;U<k.length;++U){const F=k[U],$=fe(F)&&F.name;if($==="Boolean"){D=!0;break}else $==="String"&&(C=!1)}else D=fe(k)&&k.name==="Boolean";_[0]=D,_[1]=C,(D||Re(_,"default"))&&c.push(p)}}const h=[o,c];return ke(t)&&r.set(t,h),h}function Ch(t){return t[0]!=="$"&&!Ks(t)}const Sl=t=>t[0]==="_"||t==="$stable",Pl=t=>re(t)?t.map(Qt):[Qt(t)],Ov=(t,e,n)=>{if(e._n)return e;const r=nv((...s)=>Pl(e(...s)),n);return r._c=!1,r},Up=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Sl(s))continue;const i=t[s];if(fe(i))e[s]=Ov(s,i,r);else if(i!=null){const o=Pl(i);e[s]=()=>o}}},Fp=(t,e)=>{const n=Pl(e);t.slots.default=()=>n},Bp=(t,e,n)=>{for(const r in e)(n||!Sl(r))&&(t[r]=e[r])},Dv=(t,e,n)=>{const r=t.slots=Vp();if(t.vnode.shapeFlag&32){const s=e.__;s&&wc(r,"__",s,!0);const i=e._;i?(Bp(r,e,n),n&&wc(r,"_",i,!0)):Up(e,r)}else e&&Fp(t,e)},Nv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Pe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Bp(s,e,n):(i=!e.$stable,Up(e,s)),o=e}else e&&(Fp(t,e),o={default:1});if(i)for(const c in s)!Sl(c)&&o[c]==null&&delete s[c]},Rt=Wv;function Vv(t){return xv(t)}function xv(t,e){const n=aa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=Yt,insertStaticContent:k}=t,D=(y,E,b,V=null,L=null,x=null,G=void 0,z=null,q=!!E.dynamicChildren)=>{if(y===E)return;y&&!Ls(y,E)&&(V=N(y),De(y,L,x,!0),y=null),E.patchFlag===-2&&(q=!1,E.dynamicChildren=null);const{type:j,ref:ee,shapeFlag:W}=E;switch(j){case fa:C(y,E,b,V);break;case Jn:U(y,E,b,V);break;case go:y==null&&F(E,b,V,G);break;case mn:S(y,E,b,V,L,x,G,z,q);break;default:W&1?ce(y,E,b,V,L,x,G,z,q):W&6?T(y,E,b,V,L,x,G,z,q):(W&64||W&128)&&j.process(y,E,b,V,L,x,G,z,q,J)}ee!=null&&L?Qs(ee,y&&y.ref,x,E||y,!E):ee==null&&y&&y.ref!=null&&Qs(y.ref,null,x,y,!0)},C=(y,E,b,V)=>{if(y==null)r(E.el=c(E.children),b,V);else{const L=E.el=y.el;E.children!==y.children&&h(L,E.children)}},U=(y,E,b,V)=>{y==null?r(E.el=l(E.children||""),b,V):E.el=y.el},F=(y,E,b,V)=>{[y.el,y.anchor]=k(y.children,E,b,V,y.el,y.anchor)},$=({el:y,anchor:E},b,V)=>{let L;for(;y&&y!==E;)L=g(y),r(y,b,V),y=L;r(E,b,V)},H=({el:y,anchor:E})=>{let b;for(;y&&y!==E;)b=g(y),s(y),y=b;s(E)},ce=(y,E,b,V,L,x,G,z,q)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),y==null?he(E,b,V,L,x,G,z,q):I(y,E,L,x,G,z,q)},he=(y,E,b,V,L,x,G,z)=>{let q,j;const{props:ee,shapeFlag:W,transition:Z,dirs:oe}=y;if(q=y.el=o(y.type,x,ee&&ee.is,ee),W&8?f(q,y.children):W&16&&v(y.children,q,null,V,L,sc(y,x),G,z),oe&&gr(y,null,V,"created"),w(q,y,y.scopeId,G,V),ee){for(const de in ee)de!=="value"&&!Ks(de)&&i(q,de,null,ee[de],x,V);"value"in ee&&i(q,"value",null,ee.value,x),(j=ee.onVnodeBeforeMount)&&Kt(j,V,y)}oe&&gr(y,null,V,"beforeMount");const ne=Mv(L,Z);ne&&Z.beforeEnter(q),r(q,E,b),((j=ee&&ee.onVnodeMounted)||ne||oe)&&Rt(()=>{j&&Kt(j,V,y),ne&&Z.enter(q),oe&&gr(y,null,V,"mounted")},L)},w=(y,E,b,V,L)=>{if(b&&_(y,b),V)for(let x=0;x<V.length;x++)_(y,V[x]);if(L){let x=L.subTree;if(E===x||Kp(x.type)&&(x.ssContent===E||x.ssFallback===E)){const G=L.vnode;w(y,G,G.scopeId,G.slotScopeIds,L.parent)}}},v=(y,E,b,V,L,x,G,z,q=0)=>{for(let j=q;j<y.length;j++){const ee=y[j]=z?Bn(y[j]):Qt(y[j]);D(null,ee,E,b,V,L,x,G,z)}},I=(y,E,b,V,L,x,G)=>{const z=E.el=y.el;let{patchFlag:q,dynamicChildren:j,dirs:ee}=E;q|=y.patchFlag&16;const W=y.props||Pe,Z=E.props||Pe;let oe;if(b&&mr(b,!1),(oe=Z.onVnodeBeforeUpdate)&&Kt(oe,b,E,y),ee&&gr(E,y,b,"beforeUpdate"),b&&mr(b,!0),(W.innerHTML&&Z.innerHTML==null||W.textContent&&Z.textContent==null)&&f(z,""),j?A(y.dynamicChildren,j,z,b,V,sc(E,L),x):G||ge(y,E,z,null,b,V,sc(E,L),x,!1),q>0){if(q&16)R(z,W,Z,b,L);else if(q&2&&W.class!==Z.class&&i(z,"class",null,Z.class,L),q&4&&i(z,"style",W.style,Z.style,L),q&8){const ne=E.dynamicProps;for(let de=0;de<ne.length;de++){const ve=ne[de],Ke=W[ve],We=Z[ve];(We!==Ke||ve==="value")&&i(z,ve,Ke,We,L,b)}}q&1&&y.children!==E.children&&f(z,E.children)}else!G&&j==null&&R(z,W,Z,b,L);((oe=Z.onVnodeUpdated)||ee)&&Rt(()=>{oe&&Kt(oe,b,E,y),ee&&gr(E,y,b,"updated")},V)},A=(y,E,b,V,L,x,G)=>{for(let z=0;z<E.length;z++){const q=y[z],j=E[z],ee=q.el&&(q.type===mn||!Ls(q,j)||q.shapeFlag&198)?p(q.el):b;D(q,j,ee,null,V,L,x,G,!0)}},R=(y,E,b,V,L)=>{if(E!==b){if(E!==Pe)for(const x in E)!Ks(x)&&!(x in b)&&i(y,x,E[x],null,L,V);for(const x in b){if(Ks(x))continue;const G=b[x],z=E[x];G!==z&&x!=="value"&&i(y,x,z,G,L,V)}"value"in b&&i(y,"value",E.value,b.value,L)}},S=(y,E,b,V,L,x,G,z,q)=>{const j=E.el=y?y.el:c(""),ee=E.anchor=y?y.anchor:c("");let{patchFlag:W,dynamicChildren:Z,slotScopeIds:oe}=E;oe&&(z=z?z.concat(oe):oe),y==null?(r(j,b,V),r(ee,b,V),v(E.children||[],b,ee,L,x,G,z,q)):W>0&&W&64&&Z&&y.dynamicChildren?(A(y.dynamicChildren,Z,b,L,x,G,z),(E.key!=null||L&&E===L.subTree)&&jp(y,E,!0)):ge(y,E,b,ee,L,x,G,z,q)},T=(y,E,b,V,L,x,G,z,q)=>{E.slotScopeIds=z,y==null?E.shapeFlag&512?L.ctx.activate(E,b,V,G,q):dt(E,b,V,L,x,G,q):kt(y,E,q)},dt=(y,E,b,V,L,x,G)=>{const z=y.component=nE(y,V,L);if(bp(y)&&(z.ctx.renderer=J),rE(z,!1,G),z.asyncDep){if(L&&L.registerDep(z,Ue,G),!y.el){const q=z.subTree=It(Jn);U(null,q,E,b)}}else Ue(z,y,E,b,L,x,G)},kt=(y,E,b)=>{const V=E.component=y.component;if(zv(y,E,b))if(V.asyncDep&&!V.asyncResolved){ye(V,E,b);return}else V.next=E,V.update();else E.el=y.el,V.vnode=E},Ue=(y,E,b,V,L,x,G)=>{const z=()=>{if(y.isMounted){let{next:W,bu:Z,u:oe,parent:ne,vnode:de}=y;{const nt=$p(y);if(nt){W&&(W.el=de.el,ye(y,W,G)),nt.asyncDep.then(()=>{y.isUnmounted||z()});return}}let ve=W,Ke;mr(y,!1),W?(W.el=de.el,ye(y,W,G)):W=de,Z&&ho(Z),(Ke=W.props&&W.props.onVnodeBeforeUpdate)&&Kt(Ke,ne,W,de),mr(y,!0);const We=Oh(y),Dt=y.subTree;y.subTree=We,D(Dt,We,p(Dt.el),N(Dt),y,L,x),W.el=We.el,ve===null&&Kv(y,We.el),oe&&Rt(oe,L),(Ke=W.props&&W.props.onVnodeUpdated)&&Rt(()=>Kt(Ke,ne,W,de),L)}else{let W;const{el:Z,props:oe}=E,{bm:ne,m:de,parent:ve,root:Ke,type:We}=y,Dt=Ys(E);mr(y,!1),ne&&ho(ne),!Dt&&(W=oe&&oe.onVnodeBeforeMount)&&Kt(W,ve,E),mr(y,!0);{Ke.ce&&Ke.ce._def.shadowRoot!==!1&&Ke.ce._injectChildStyle(We);const nt=y.subTree=Oh(y);D(null,nt,b,V,y,L,x),E.el=nt.el}if(de&&Rt(de,L),!Dt&&(W=oe&&oe.onVnodeMounted)){const nt=E;Rt(()=>Kt(W,ve,nt),L)}(E.shapeFlag&256||ve&&Ys(ve.vnode)&&ve.vnode.shapeFlag&256)&&y.a&&Rt(y.a,L),y.isMounted=!0,E=b=V=null}};y.scope.on();const q=y.effect=new np(z);y.scope.off();const j=y.update=q.run.bind(q),ee=y.job=q.runIfDirty.bind(q);ee.i=y,ee.id=y.uid,q.scheduler=()=>Al(ee),mr(y,!0),j()},ye=(y,E,b)=>{E.component=y;const V=y.vnode.props;y.vnode=E,y.next=null,Cv(y,E.props,V,b),Nv(y,E.children,b),An(),wh(y),Rn()},ge=(y,E,b,V,L,x,G,z,q=!1)=>{const j=y&&y.children,ee=y?y.shapeFlag:0,W=E.children,{patchFlag:Z,shapeFlag:oe}=E;if(Z>0){if(Z&128){Ut(j,W,b,V,L,x,G,z,q);return}else if(Z&256){wt(j,W,b,V,L,x,G,z,q);return}}oe&8?(ee&16&&_t(j,L,x),W!==j&&f(b,W)):ee&16?oe&16?Ut(j,W,b,V,L,x,G,z,q):_t(j,L,x,!0):(ee&8&&f(b,""),oe&16&&v(W,b,V,L,x,G,z,q))},wt=(y,E,b,V,L,x,G,z,q)=>{y=y||Yr,E=E||Yr;const j=y.length,ee=E.length,W=Math.min(j,ee);let Z;for(Z=0;Z<W;Z++){const oe=E[Z]=q?Bn(E[Z]):Qt(E[Z]);D(y[Z],oe,b,null,L,x,G,z,q)}j>ee?_t(y,L,x,!0,!1,W):v(E,b,V,L,x,G,z,q,W)},Ut=(y,E,b,V,L,x,G,z,q)=>{let j=0;const ee=E.length;let W=y.length-1,Z=ee-1;for(;j<=W&&j<=Z;){const oe=y[j],ne=E[j]=q?Bn(E[j]):Qt(E[j]);if(Ls(oe,ne))D(oe,ne,b,null,L,x,G,z,q);else break;j++}for(;j<=W&&j<=Z;){const oe=y[W],ne=E[Z]=q?Bn(E[Z]):Qt(E[Z]);if(Ls(oe,ne))D(oe,ne,b,null,L,x,G,z,q);else break;W--,Z--}if(j>W){if(j<=Z){const oe=Z+1,ne=oe<ee?E[oe].el:V;for(;j<=Z;)D(null,E[j]=q?Bn(E[j]):Qt(E[j]),b,ne,L,x,G,z,q),j++}}else if(j>Z)for(;j<=W;)De(y[j],L,x,!0),j++;else{const oe=j,ne=j,de=new Map;for(j=ne;j<=Z;j++){const Ge=E[j]=q?Bn(E[j]):Qt(E[j]);Ge.key!=null&&de.set(Ge.key,j)}let ve,Ke=0;const We=Z-ne+1;let Dt=!1,nt=0;const Nn=new Array(We);for(j=0;j<We;j++)Nn[j]=0;for(j=oe;j<=W;j++){const Ge=y[j];if(Ke>=We){De(Ge,L,x,!0);continue}let Nt;if(Ge.key!=null)Nt=de.get(Ge.key);else for(ve=ne;ve<=Z;ve++)if(Nn[ve-ne]===0&&Ls(Ge,E[ve])){Nt=ve;break}Nt===void 0?De(Ge,L,x,!0):(Nn[Nt-ne]=j+1,Nt>=nt?nt=Nt:Dt=!0,D(Ge,E[Nt],b,null,L,x,G,z,q),Ke++)}const ws=Dt?Lv(Nn):Yr;for(ve=ws.length-1,j=We-1;j>=0;j--){const Ge=ne+j,Nt=E[Ge],Ui=Ge+1<ee?E[Ge+1].el:V;Nn[j]===0?D(null,Nt,b,Ui,L,x,G,z,q):Dt&&(ve<0||j!==ws[ve]?Ot(Nt,b,Ui,2):ve--)}}},Ot=(y,E,b,V,L=null)=>{const{el:x,type:G,transition:z,children:q,shapeFlag:j}=y;if(j&6){Ot(y.component.subTree,E,b,V);return}if(j&128){y.suspense.move(E,b,V);return}if(j&64){G.move(y,E,b,J);return}if(G===mn){r(x,E,b);for(let W=0;W<q.length;W++)Ot(q[W],E,b,V);r(y.anchor,E,b);return}if(G===go){$(y,E,b);return}if(V!==2&&j&1&&z)if(V===0)z.beforeEnter(x),r(x,E,b),Rt(()=>z.enter(x),L);else{const{leave:W,delayLeave:Z,afterLeave:oe}=z,ne=()=>{y.ctx.isUnmounted?s(x):r(x,E,b)},de=()=>{W(x,()=>{ne(),oe&&oe()})};Z?Z(x,ne,de):de()}else r(x,E,b)},De=(y,E,b,V=!1,L=!1)=>{const{type:x,props:G,ref:z,children:q,dynamicChildren:j,shapeFlag:ee,patchFlag:W,dirs:Z,cacheIndex:oe}=y;if(W===-2&&(L=!1),z!=null&&(An(),Qs(z,null,b,y,!0),Rn()),oe!=null&&(E.renderCache[oe]=void 0),ee&256){E.ctx.deactivate(y);return}const ne=ee&1&&Z,de=!Ys(y);let ve;if(de&&(ve=G&&G.onVnodeBeforeUnmount)&&Kt(ve,E,y),ee&6)zt(y.component,b,V);else{if(ee&128){y.suspense.unmount(b,V);return}ne&&gr(y,null,E,"beforeUnmount"),ee&64?y.type.remove(y,E,b,J,V):j&&!j.hasOnce&&(x!==mn||W>0&&W&64)?_t(j,E,b,!1,!0):(x===mn&&W&384||!L&&ee&16)&&_t(q,E,b),V&&Ne(y)}(de&&(ve=G&&G.onVnodeUnmounted)||ne)&&Rt(()=>{ve&&Kt(ve,E,y),ne&&gr(y,null,E,"unmounted")},b)},Ne=y=>{const{type:E,el:b,anchor:V,transition:L}=y;if(E===mn){Dn(b,V);return}if(E===go){H(y);return}const x=()=>{s(b),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(y.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:z}=L,q=()=>G(b,x);z?z(y.el,x,q):q()}else x()},Dn=(y,E)=>{let b;for(;y!==E;)b=g(y),s(y),y=b;s(E)},zt=(y,E,b)=>{const{bum:V,scope:L,job:x,subTree:G,um:z,m:q,a:j,parent:ee,slots:{__:W}}=y;kh(q),kh(j),V&&ho(V),ee&&re(W)&&W.forEach(Z=>{ee.renderCache[Z]=void 0}),L.stop(),x&&(x.flags|=8,De(G,y,E,b)),z&&Rt(z,E),Rt(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},_t=(y,E,b,V=!1,L=!1,x=0)=>{for(let G=x;G<y.length;G++)De(y[G],E,b,V,L)},N=y=>{if(y.shapeFlag&6)return N(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=g(y.anchor||y.el),b=E&&E[rv];return b?g(b):E};let Y=!1;const Q=(y,E,b)=>{y==null?E._vnode&&De(E._vnode,null,null,!0):D(E._vnode||null,y,E,null,null,null,b),E._vnode=y,Y||(Y=!0,wh(),Ip(),Y=!1)},J={p:D,um:De,m:Ot,r:Ne,mt:dt,mc:v,pc:ge,pbc:A,n:N,o:t};return{render:Q,hydrate:void 0,createApp:Sv(Q)}}function sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Mv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jp(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Bn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&jp(o,c)),c.type===fa&&(c.el=o.el),c.type===Jn&&!c.el&&(c.el=o.el)}}function Lv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function $p(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$p(e)}function kh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Uv=Symbol.for("v-scx"),Fv=()=>Xt(Uv);function po(t,e,n){return Hp(t,e,n)}function Hp(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:o}=n,c=ht({},n),l=e&&r||!e&&i!=="post";let h;if(hi){if(i==="sync"){const _=Fv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Yt,_.resume=Yt,_.pause=Yt,_}}const f=lt;c.call=(_,k,D)=>sn(_,f,k,D);let p=!1;i==="post"?c.scheduler=_=>{Rt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,k)=>{k?_():Al(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=Jy(t,e,c);return hi&&(h?h.push(g):l&&g()),g}function Bv(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?qp(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=bi(this),c=Hp(s,i.bind(r),n);return o(),c}function qp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const jv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Mt(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function $v(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),o=i&&jv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Be(f)?f.trim():f)),o.number&&(s=n.map(Po)));let c,l=r[c=Ja(e)]||r[c=Ja(Mt(e))];!l&&i&&(l=r[c=Ja(Or(e))]),l&&sn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,sn(h,t,6,s)}}function zp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=h=>{const f=zp(h,e,!0);f&&(c=!0,ht(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(ke(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):ht(o,i),ke(t)&&r.set(t,o),o)}function ha(t,e){return!t||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Or(e))||Re(t,e))}function Oh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:k,inheritAttrs:D}=t,C=Do(t);let U,F;try{if(n.shapeFlag&4){const H=s||r,ce=H;U=Qt(h.call(ce,H,f,p,_,g,k)),F=c}else{const H=e;U=Qt(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),F=e.props?c:Hv(c)}}catch(H){Js.length=0,la(H,t,1),U=It(Jn)}let $=U;if(F&&D!==!1){const H=Object.keys(F),{shapeFlag:ce}=$;H.length&&ce&7&&(i&&H.some(ul)&&(F=qv(F,i)),$=is($,F,!1,!0))}return n.dirs&&($=is($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Rl($,n.transition),U=$,Do(C),U}const Hv=t=>{let e;for(const n in t)(n==="class"||n==="style"||sa(n))&&((e||(e={}))[n]=t[n]);return e},qv=(t,e)=>{const n={};for(const r in t)(!ul(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Dh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!ha(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Dh(r,o,h):!0:!!o;return!1}function Dh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ha(n,i))return!0}return!1}function Kv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Kp=t=>t.__isSuspense;function Wv(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):tv(t)}const mn=Symbol.for("v-fgt"),fa=Symbol.for("v-txt"),Jn=Symbol.for("v-cmt"),go=Symbol.for("v-stc"),Js=[];let St=null;function mo(t=!1){Js.push(St=t?null:[])}function Gv(){Js.pop(),St=Js[Js.length-1]||null}let ui=1;function Nh(t,e=!1){ui+=t,t<0&&St&&e&&(St.hasOnce=!0)}function Wp(t){return t.dynamicChildren=ui>0?St||Yr:null,Gv(),ui>0&&St&&St.push(t),t}function Vh(t,e,n,r,s,i){return Wp(Yp(t,e,n,r,s,i,!0))}function Gp(t,e,n,r,s){return Wp(It(t,e,n,r,s,!0))}function Vo(t){return t?t.__v_isVNode===!0:!1}function Ls(t,e){return t.type===e.type&&t.key===e.key}const Qp=({key:t})=>t??null,_o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||ut(t)||fe(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function Yp(t,e=null,n=null,r=0,s=null,i=t===mn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qp(e),ref:e&&_o(e),scopeId:Ap,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return c?(Cl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),ui>0&&!o&&St&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&St.push(l),l}const It=Qv;function Qv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===yv)&&(t=Jn),Vo(t)){const c=is(t,e,!0);return n&&Cl(c,n),ui>0&&!i&&St&&(c.shapeFlag&6?St[St.indexOf(t)]=c:St.push(c)),c.patchFlag=-2,c}if(cE(t)&&(t=t.__vccOpts),e){e=Yv(e);let{class:c,style:l}=e;c&&!Be(c)&&(e.class=pl(c)),ke(l)&&(Il(l)&&!re(l)&&(l=ht({},l)),e.style=dl(l))}const o=Be(t)?1:Kp(t)?128:sv(t)?64:ke(t)?4:fe(t)?2:0;return Yp(t,e,n,r,s,o,i,!0)}function Yv(t){return t?Il(t)||xp(t)?ht({},t):t:null}function is(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Zv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Qp(h),ref:e&&e.ref?n&&i?re(i)?i.concat(_o(e)):[i,_o(e)]:_o(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&is(t.ssContent),ssFallback:t.ssFallback&&is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Rl(f,l.clone(f)),f}function Xv(t=" ",e=0){return It(fa,null,t,e)}function Jv(t,e){const n=It(go,null,t);return n.staticCount=e,n}function XP(t="",e=!1){return e?(mo(),Gp(Jn,null,t)):It(Jn,null,t)}function Qt(t){return t==null||typeof t=="boolean"?It(Jn):re(t)?It(mn,null,t.slice()):Vo(t)?Bn(t):It(fa,null,String(t))}function Bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:is(t)}function Cl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Cl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xp(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[Xv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=pl([e.class,r.class]));else if(s==="style")e.style=dl([e.style,r.style]);else if(sa(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){sn(t,e,7,[n,r])}const eE=Dp();let tE=0;function nE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||eE,i={uid:tE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ay(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lp(r,s),emitsOptions:zp(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$v.bind(null,i),t.ce&&t.ce(i),i}let lt=null,xo,Dc;{const t=aa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};xo=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),Dc=e("__VUE_SSR_SETTERS__",n=>hi=n)}const bi=t=>{const e=lt;return xo(t),t.scope.on(),()=>{t.scope.off(),xo(e)}},xh=()=>{lt&&lt.scope.off(),xo(null)};function Xp(t){return t.vnode.shapeFlag&4}let hi=!1;function rE(t,e=!1,n=!1){e&&Dc(e);const{props:r,children:s}=t.vnode,i=Xp(t);Pv(t,r,i,e),Dv(t,s,n||e);const o=i?sE(t,e):void 0;return e&&Dc(!1),o}function sE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ev);const{setup:r}=n;if(r){An();const s=t.setupContext=r.length>1?oE(t):null,i=bi(t),o=Ri(r,t,0,[t.props,s]),c=Yd(o);if(Rn(),i(),(c||t.sp)&&!Ys(t)&&Rp(t),c){if(o.then(xh,xh),e)return o.then(l=>{Mh(t,l)}).catch(l=>{la(l,t,0)});t.asyncDep=o}else Mh(t,o)}else Jp(t)}function Mh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=vp(e)),Jp(t)}function Jp(t,e,n){const r=t.type;t.render||(t.render=r.render||Yt);{const s=bi(t);An();try{Tv(t)}finally{Rn(),s()}}}const iE={get(t,e){return at(t,"get",""),t[e]}};function oE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,iE),slots:t.slots,emit:t.emit,expose:e}}function da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vp(qy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xs)return Xs[n](t)},has(e,n){return n in e||n in Xs}})):t.proxy}function aE(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function cE(t){return fe(t)&&"__vccOpts"in t}const Ze=(t,e)=>Yy(t,e,hi);function Zp(t,e,n){const r=arguments.length;return r===2?ke(e)&&!re(e)?Vo(e)?It(t,null,[e]):It(t,e):It(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vo(n)&&(n=[n]),It(t,e,n))}const lE="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nc;const Lh=typeof window<"u"&&window.trustedTypes;if(Lh)try{Nc=Lh.createPolicy("vue",{createHTML:t=>t})}catch{}const eg=Nc?t=>Nc.createHTML(t):t=>t,uE="http://www.w3.org/2000/svg",hE="http://www.w3.org/1998/Math/MathML",gn=typeof document<"u"?document:null,Uh=gn&&gn.createElement("template"),fE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?gn.createElementNS(uE,t):e==="mathml"?gn.createElementNS(hE,t):n?gn.createElement(t,{is:n}):gn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gn.createTextNode(t),createComment:t=>gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Uh.innerHTML=eg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Uh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dE=Symbol("_vtc");function pE(t,e,n){const r=t[dE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fh=Symbol("_vod"),gE=Symbol("_vsh"),mE=Symbol(""),_E=/(^|;)\s*display\s*:/;function yE(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&yo(r,c,"")}else for(const o in e)n[o]==null&&yo(r,o,"");for(const o in n)o==="display"&&(i=!0),yo(r,o,n[o])}else if(s){if(e!==n){const o=r[mE];o&&(n+=";"+o),r.cssText=n,i=_E.test(n)}}else e&&t.removeAttribute("style");Fh in t&&(t[Fh]=i?r.display:"",t[gE]&&(r.display="none"))}const Bh=/\s*!important$/;function yo(t,e,n){if(re(n))n.forEach(r=>yo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vE(t,e);Bh.test(n)?t.setProperty(Or(r),n.replace(Bh,""),"important"):t[r]=n}}const jh=["Webkit","Moz","ms"],ic={};function vE(t,e){const n=ic[e];if(n)return n;let r=Mt(e);if(r!=="filter"&&r in t)return ic[e]=r;r=oa(r);for(let s=0;s<jh.length;s++){const i=jh[s]+r;if(i in t)return ic[e]=i}return e}const $h="http://www.w3.org/1999/xlink";function Hh(t,e,n,r,s,i=Ty(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($h,e.slice(6,e.length)):t.setAttributeNS($h,e,n):n==null||i&&!Zd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":rn(n)?String(n):n)}function qh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?eg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Zd(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function vn(t,e,n,r){t.addEventListener(e,n,r)}function EE(t,e,n,r){t.removeEventListener(e,n,r)}const zh=Symbol("_vei");function TE(t,e,n,r,s=null){const i=t[zh]||(t[zh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=IE(e);if(r){const h=i[e]=RE(r,s);vn(t,c,h,l)}else o&&(EE(t,c,o,l),i[e]=void 0)}}const Kh=/(?:Once|Passive|Capture)$/;function IE(t){let e;if(Kh.test(t)){e={};let r;for(;r=t.match(Kh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let oc=0;const wE=Promise.resolve(),AE=()=>oc||(wE.then(()=>oc=0),oc=Date.now());function RE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(bE(r,n.value),e,5,[r])};return n.value=t,n.attached=AE(),n}function bE(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,SE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?pE(t,r,o):e==="style"?yE(t,n,r):sa(e)?ul(e)||TE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):PE(t,e,r,o))?(qh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?qh(t,Mt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hh(t,e,r,o))};function PE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wh(e)&&Be(n)?!1:e in t}const Zn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>ho(e,n):e};function CE(t){t.target.composing=!0}function Gh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xt=Symbol("_assign"),Qh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[xt]=Zn(s);const i=r||s.props&&s.props.type==="number";vn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Po(c)),t[xt](c)}),n&&vn(t,"change",()=>{t.value=t.value.trim()}),e||(vn(t,"compositionstart",CE),vn(t,"compositionend",Gh),vn(t,"change",Gh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[xt]=Zn(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Po(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},kE={deep:!0,created(t,e,n){t[xt]=Zn(n),vn(t,"change",()=>{const r=t._modelValue,s=os(t),i=t.checked,o=t[xt];if(re(r)){const c=gl(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),o(h)}}else if(_s(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(tg(t,i))})},mounted:Yh,beforeUpdate(t,e,n){t[xt]=Zn(n),Yh(t,e,n)}};function Yh(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(re(e))s=gl(e,r.props.value)>-1;else if(_s(e))s=e.has(r.props.value);else{if(e===n)return;s=wr(e,tg(t,!0))}t.checked!==s&&(t.checked=s)}const OE={created(t,{value:e},n){t.checked=wr(e,n.props.value),t[xt]=Zn(n),vn(t,"change",()=>{t[xt](os(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[xt]=Zn(r),e!==n&&(t.checked=wr(e,r.props.value))}},DE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=_s(e);vn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Po(os(o)):os(o));t[xt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,wl(()=>{t._assigning=!1})}),t[xt]=Zn(r)},mounted(t,{value:e}){Xh(t,e)},beforeUpdate(t,e,n){t[xt]=Zn(n)},updated(t,{value:e}){t._assigning||Xh(t,e)}};function Xh(t,e){const n=t.multiple,r=re(e);if(!(n&&!r&&!_s(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=os(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=gl(e,c)>-1}else o.selected=e.has(c);else if(wr(os(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function os(t){return"_value"in t?t._value:t.value}function tg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const JP={created(t,e,n){ro(t,e,n,null,"created")},mounted(t,e,n){ro(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){ro(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){ro(t,e,n,r,"updated")}};function NE(t,e){switch(t){case"SELECT":return DE;case"TEXTAREA":return Qh;default:switch(e){case"checkbox":return kE;case"radio":return OE;default:return Qh}}}function ro(t,e,n,r,s){const o=NE(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const VE=["ctrl","shift","alt","meta"],xE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>VE.some(n=>t[`${n}Key`]&&!e.includes(n))},ZP=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=xE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},ME=ht({patchProp:SE},fE);let Jh;function LE(){return Jh||(Jh=Vv(ME))}const UE=(...t)=>{const e=LE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=BE(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,FE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function FE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function BE(t){return Be(t)?document.querySelector(t):t}const jE=()=>{};var Zh={};/**
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
 */const ng=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$E=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ng(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$E(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new HE;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qE=function(t){const e=ng(t);return rg.encodeByteArray(e,!0)},Mo=function(t){return qE(t).replace(/\./g,"")},sg=function(t){try{return rg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KE=()=>zE().__FIREBASE_DEFAULTS__,WE=()=>{if(typeof process>"u"||typeof Zh>"u")return;const t=Zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sg(t[1]);return e&&JSON.parse(e)},pa=()=>{try{return jE()||KE()||WE()||GE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ig=t=>{var e,n;return(n=(e=pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},og=t=>{const e=ig(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ag=()=>{var t;return(t=pa())===null||t===void 0?void 0:t.config},cg=t=>{var e;return(e=pa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class QE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Dr(t){return t.endsWith(".cloudworkstations.dev")}async function kl(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function lg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Mo(JSON.stringify(n)),Mo(JSON.stringify(o)),""].join(".")}const Zs={};function YE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Zs))Zs[e]?t.emulator.push(e):t.prod.push(e);return t}function XE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ef=!1;function Ol(t,e){if(typeof window>"u"||typeof document>"u"||!Dr(window.location.host)||Zs[t]===e||Zs[t]||ef)return;Zs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=YE().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{ef=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=XE(r),_=n("text"),k=document.getElementById(_)||document.createElement("span"),D=n("learnmore"),C=document.getElementById(D)||document.createElement("a"),U=n("preprendIcon"),F=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const $=g.element;c($),f(C,D);const H=h();l(F,U),$.append(F,k,C,H),document.body.appendChild($)}i?(k.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function ZE(){var t;const e=(t=pa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rT(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sT(){return!ZE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iT(){try{return typeof indexedDB=="object"}catch{return!1}}function oT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const aT="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aT,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ln(s,c,r)}}function cT(t,e){return t.replace(lT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lT=/\{\$([^}]+)}/g;function uT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(tf(i)&&tf(o)){if(!Ar(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tf(t){return t!==null&&typeof t=="object"}/**
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
 */function Pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hT(t,e){const n=new fT(t,e);return n.subscribe.bind(n)}class fT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ac),s.error===void 0&&(s.error=ac),s.complete===void 0&&(s.complete=ac);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ac(){}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class pT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mT(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gT(t){return t===yr?void 0:t}function mT(t){return t.instantiationMode==="EAGER"}/**
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
 */class _T{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const yT={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},vT=me.INFO,ET={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},TT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ET[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dl{constructor(e){this.name=e,this._logLevel=vT,this._logHandler=TT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const IT=(t,e)=>e.some(n=>t instanceof n);let nf,rf;function wT(){return nf||(nf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AT(){return rf||(rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ug=new WeakMap,Vc=new WeakMap,hg=new WeakMap,cc=new WeakMap,Nl=new WeakMap;function RT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ug.set(n,t)}).catch(()=>{}),Nl.set(e,t),e}function bT(t){if(Vc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vc.set(t,e)}let xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ST(t){xc=t(xc)}function PT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lc(this),e,...n);return hg.set(r,e.sort?e.sort():[e]),Wn(r)}:AT().includes(t)?function(...e){return t.apply(lc(this),e),Wn(ug.get(this))}:function(...e){return Wn(t.apply(lc(this),e))}}function CT(t){return typeof t=="function"?PT(t):(t instanceof IDBTransaction&&bT(t),IT(t,wT())?new Proxy(t,xc):t)}function Wn(t){if(t instanceof IDBRequest)return RT(t);if(cc.has(t))return cc.get(t);const e=CT(t);return e!==t&&(cc.set(t,e),Nl.set(e,t)),e}const lc=t=>Nl.get(t);function kT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Wn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wn(o.result),l.oldVersion,l.newVersion,Wn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const OT=["get","getKey","getAll","getAllKeys","count"],DT=["put","add","delete","clear"],uc=new Map;function sf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=DT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||OT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return uc.set(e,i),i}ST(t=>({...t,get:(e,n,r)=>sf(e,n)||t.get(e,n,r),has:(e,n)=>!!sf(e,n)||t.has(e,n)}));/**
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
 */class NT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",of="0.13.1";/**
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
 */const bn=new Dl("@firebase/app"),xT="@firebase/app-compat",MT="@firebase/analytics-compat",LT="@firebase/analytics",UT="@firebase/app-check-compat",FT="@firebase/app-check",BT="@firebase/auth",jT="@firebase/auth-compat",$T="@firebase/database",HT="@firebase/data-connect",qT="@firebase/database-compat",zT="@firebase/functions",KT="@firebase/functions-compat",WT="@firebase/installations",GT="@firebase/installations-compat",QT="@firebase/messaging",YT="@firebase/messaging-compat",XT="@firebase/performance",JT="@firebase/performance-compat",ZT="@firebase/remote-config",eI="@firebase/remote-config-compat",tI="@firebase/storage",nI="@firebase/storage-compat",rI="@firebase/firestore",sI="@firebase/ai",iI="@firebase/firestore-compat",oI="firebase",aI="11.9.0";/**
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
 */const Lc="[DEFAULT]",cI={[Mc]:"fire-core",[xT]:"fire-core-compat",[LT]:"fire-analytics",[MT]:"fire-analytics-compat",[FT]:"fire-app-check",[UT]:"fire-app-check-compat",[BT]:"fire-auth",[jT]:"fire-auth-compat",[$T]:"fire-rtdb",[HT]:"fire-data-connect",[qT]:"fire-rtdb-compat",[zT]:"fire-fn",[KT]:"fire-fn-compat",[WT]:"fire-iid",[GT]:"fire-iid-compat",[QT]:"fire-fcm",[YT]:"fire-fcm-compat",[XT]:"fire-perf",[JT]:"fire-perf-compat",[ZT]:"fire-rc",[eI]:"fire-rc-compat",[tI]:"fire-gcs",[nI]:"fire-gcs-compat",[rI]:"fire-fst",[iI]:"fire-fst-compat",[sI]:"fire-vertex","fire-js":"fire-js",[oI]:"fire-js-all"};/**
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
 */const Lo=new Map,lI=new Map,Uc=new Map;function af(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rr(t){const e=t.name;if(Uc.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;Uc.set(e,t);for(const n of Lo.values())af(n,t);for(const n of lI.values())af(n,t);return!0}function ga(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Et(t){return t==null?!1:t.settings!==void 0}/**
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
 */const uI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new Si("app","Firebase",uI);/**
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
 */class hI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
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
 */const Nr=aI;function fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(n||(n=ag()),!n)throw Gn.create("no-options");const i=Lo.get(s);if(i){if(Ar(n,i.options)&&Ar(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const o=new _T(s);for(const l of Uc.values())o.addComponent(l);const c=new hI(n,r,o);return Lo.set(s,c),c}function Vl(t=Lc){const e=Lo.get(t);if(!e&&t===Lc&&ag())return fg();if(!e)throw Gn.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=cI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(c.join(" "));return}Rr(new er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const fI="firebase-heartbeat-database",dI=1,fi="firebase-heartbeat-store";let hc=null;function dg(){return hc||(hc=kT(fI,dI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),hc}async function pI(t){try{const n=(await dg()).transaction(fi),r=await n.objectStore(fi).get(pg(t));return await n.done,r}catch(e){if(e instanceof ln)bn.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function cf(t,e){try{const r=(await dg()).transaction(fi,"readwrite");await r.objectStore(fi).put(e,pg(t)),await r.done}catch(n){if(n instanceof ln)bn.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function pg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gI=1024,mI=30;class _I{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>mI){const o=EI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lf(),{heartbeatsToSend:r,unsentEntries:s}=yI(this._heartbeatsCache.heartbeats),i=Mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return bn.warn(n),""}}}function lf(){return new Date().toISOString().substring(0,10)}function yI(t,e=gI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),uf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iT()?oT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function uf(t){return Mo(JSON.stringify({version:2,heartbeats:t})).length}function EI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function TI(t){Rr(new er("platform-logger",e=>new NT(e),"PRIVATE")),Rr(new er("heartbeat",e=>new _I(e),"PRIVATE")),Jt(Mc,of,t),Jt(Mc,of,"esm2017"),Jt("fire-js","")}TI("");function xl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function gg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const II=gg,mg=new Si("auth","Firebase",gg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new Dl("@firebase/auth");function wI(t,...e){Uo.logLevel<=me.WARN&&Uo.warn(`Auth (${Nr}): ${t}`,...e)}function vo(t,...e){Uo.logLevel<=me.ERROR&&Uo.error(`Auth (${Nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw Ll(t,...e)}function Ht(t,...e){return Ll(t,...e)}function Ml(t,e,n){const r=Object.assign(Object.assign({},II()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return Ml(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function AI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Lt(t,"argument-error"),Ml(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ll(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mg.create(t,...e)}function ie(t,e,...n){if(!t)throw Ll(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function Sn(t,e){t||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RI(){return hf()==="http:"||hf()==="https:"}function hf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RI()||tT()||"connection"in navigator)?navigator.onLine:!0}function SI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=JE()||nT()}get(){return bI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kI=new Ci(3e4,6e4);function ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function On(t,e,n,r,s={}){return yg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Pi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return eT()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Dr(t.emulatorConfig.host)&&(h.credentials="include"),_g.fetch()(await vg(t,t.config.apiHost,n,c),h)})}async function yg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PI),e);try{const s=new DI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw so(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw so(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw so(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ml(t,f,h);Lt(t,f)}}catch(s){if(s instanceof ln)throw s;Lt(t,"network-request-failed",{message:String(s)})}}async function ki(t,e,n,r,s={}){const i=await On(t,e,n,r,s);return"mfaPendingCredential"in i&&Lt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function vg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ul(t.config,s):`${t.config.apiScheme}://${s}`;return CI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function OI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),kI.get())})}}function so(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ht(t,e,r);return s.customData._tokenResponse=n,s}function ff(t){return t!==void 0&&t.enterprise!==void 0}class NI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return OI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function VI(t,e){return On(t,"GET","/v2/recaptchaConfig",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e){return On(t,"POST","/v1/accounts:delete",e)}async function Fo(t,e){return On(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MI(t,e=!1){const n=ze(t),r=await n.getIdToken(e),s=Fl(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ei(fc(s.auth_time)),issuedAtTime:ei(fc(s.iat)),expirationTime:ei(fc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fc(t){return Number(t)*1e3}function Fl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=sg(n);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function df(t){const e=Fl(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&LI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await as(t,Fo(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Eg(i.providerUserInfo):[],c=BI(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Bc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function FI(t){const e=ze(t);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Eg(t){return t.map(e=>{var{providerId:n}=e,r=xl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(t,e){const n=await yg(t,{},async()=>{const r=Pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await vg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Dr(t.emulatorConfig.host)&&(l.credentials="include"),_g.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $I(t,e){return On(t,"POST","/v2/accounts:revokeToken",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=df(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ts;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Bc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await as(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MI(this,e)}reload(){return FI(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await as(this,xI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(c=n.tenantId)!==null&&c!==void 0?c:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(h=n.createdAt)!==null&&h!==void 0?h:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:H,isAnonymous:ce,providerData:he,stsTokenManager:w}=n;ie($&&w,e,"internal-error");const v=ts.fromJSON(this.name,w);ie(typeof $=="string",e,"internal-error"),Ln(p,e.name),Ln(g,e.name),ie(typeof H=="boolean",e,"internal-error"),ie(typeof ce=="boolean",e,"internal-error"),Ln(_,e.name),Ln(k,e.name),Ln(D,e.name),Ln(C,e.name),Ln(U,e.name),Ln(F,e.name);const I=new Bt({uid:$,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:ce,photoURL:k,phoneNumber:_,tenantId:D,stsTokenManager:v,createdAt:U,lastLoginAt:F});return he&&Array.isArray(he)&&(I.providerData=he.map(A=>Object.assign({},A))),C&&(I._redirectEventId=C),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new ts;s.updateFromServerResponse(n);const i=new Bt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Eg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ts;c.updateFromIdToken(r);const l=new Bt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=new Map;function In(t){Sn(t instanceof Function,"Expected a class definition");let e=pf.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pf.set(t,e),e)}/**
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
 */class Tg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tg.type="NONE";const gf=Tg;/**
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
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fo(this.auth,{idToken:e}).catch(()=>{});return n?Bt._fromGetAccountInfoResponse(this.auth,n,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ns(In(gf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||In(gf);const o=Eo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Fo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Bt._fromGetAccountInfoResponse(e,g,f)}else p=Bt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ns(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ns(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ig(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sg(e))return"Blackberry";if(Pg(e))return"Webos";if(wg(e))return"Safari";if((e.includes("chrome/")||Ag(e))&&!e.includes("edge/"))return"Chrome";if(bg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ig(t=ft()){return/firefox\//i.test(t)}function wg(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ag(t=ft()){return/crios\//i.test(t)}function Rg(t=ft()){return/iemobile/i.test(t)}function bg(t=ft()){return/android/i.test(t)}function Sg(t=ft()){return/blackberry/i.test(t)}function Pg(t=ft()){return/webos/i.test(t)}function Bl(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HI(t=ft()){var e;return Bl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qI(){return rT()&&document.documentMode===10}function Cg(t=ft()){return Bl(t)||bg(t)||Pg(t)||Sg(t)||/windows phone/i.test(t)||Rg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t,e=[]){let n;switch(t){case"Browser":n=mf(ft());break;case"Worker":n=`${mf(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nr}/${r}`}/**
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
 */class zI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function KI(t,e={}){return On(t,"GET","/v2/passwordPolicy",ar(t,e))}/**
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
 */const WI=6;class GI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _f(this),this.idTokenSubscription=new _f(this),this.beforeStateQueue=new zI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fo(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(wn(this));const n=e?ze(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KI(this),n=new GI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $I(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(t){return ze(t)}class _f{constructor(e){this.auth=e,this.observer=null,this.addObserver=hT(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YI(t){ma=t}function Og(t){return ma.loadJS(t)}function XI(){return ma.recaptchaEnterpriseScript}function JI(){return ma.gapiScript}function ZI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ew{constructor(){this.enterprise=new tw}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class tw{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const nw="recaptcha-enterprise",Dg="NO_RECAPTCHA";class rw{constructor(e){this.type=nw,this.auth=cr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{VI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new NI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;ff(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Dg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ew().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&ff(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=XI();l.length!==0&&(l+=c),Og(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function yf(t,e,n,r=!1,s=!1){const i=new rw(t);let o;if(s)o=Dg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function jc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await yf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await yf(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t,e){const n=ga(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ar(i,e??{}))return s;Lt(s,"already-initialized")}return n.initialize({options:e})}function iw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ow(t,e,n){const r=cr(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ng(e),{host:o,port:c}=aw(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(Ar(h,r.config.emulator)&&Ar(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Dr(o)?(kl(`${i}//${o}${l}`),Ol("Auth",!0)):cw()}function Ng(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aw(t){const e=Ng(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vf(o)}}}function vf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function lw(t,e){return On(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(t,e){return ki(t,"POST","/v1/accounts:signInWithPassword",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(t,e){return ki(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}async function fw(t,e){return ki(t,"POST","/v1/accounts:signInWithEmailLink",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends jl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new di(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new di(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jc(e,n,"signInWithPassword",uw);case"emailLink":return hw(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jc(e,r,"signUpPassword",lw);case"emailLink":return fw(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e){return ki(t,"POST","/v1/accounts:signInWithIdp",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="http://localhost";class br extends jl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rs(e,n)}buildRequest(){const e={requestUri:dw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gw(t){const e=js($s(t)).link,n=e?js($s(e)).deep_link_id:null,r=js($s(t)).deep_link_id;return(r?js($s(r)).link:null)||r||n||e||t}class $l{constructor(e){var n,r,s,i,o,c;const l=js($s(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=pw((s=l.mode)!==null&&s!==void 0?s:null);ie(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=gw(e);try{return new $l(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$l.parseLink(n);return ie(r,"argument-error"),di._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oi extends Hl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Oi{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Oi{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(t,e){return ki(t,"POST","/v1/accounts:signUp",ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Bt._fromIdTokenResponse(e,r,s),o=Ef(r);return new Sr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ef(r);return new Sr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jo(e,n,r,s)}}function Vg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(t,i,e,r):i})}async function _w(t,e,n=!1){const r=await as(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sr._forOperation(t,"link",r)}/**
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
 */async function yw(t,e,n=!1){const{auth:r}=t;if(Et(r.app))return Promise.reject(wn(r));const s="reauthenticate";try{const i=await as(t,Vg(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=Fl(i.idToken);ie(o,r,"internal-error");const{sub:c}=o;return ie(t.uid===c,r,"user-mismatch"),Sr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t,e,n=!1){if(Et(t.app))return Promise.reject(wn(t));const r="signIn",s=await Vg(t,r,e),i=await Sr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function vw(t,e){return xg(cr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t){const e=cr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ew(t,e,n){if(Et(t.app))return Promise.reject(wn(t));const r=cr(t),o=await jc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Mg(t),l}),c=await Sr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Tw(t,e,n){return Et(t.app)?Promise.reject(wn(t)):vw(ze(t),ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Mg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t,e){return On(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ze(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await as(r,Iw(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Aw(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function Rw(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function bw(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}function Sw(t){return ze(t).signOut()}const $o="__sak";/**
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
 */class Lg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=1e3,Cw=10;class Ug extends Lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Cw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ug.type="LOCAL";const kw=Ug;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg extends Lg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fg.type="SESSION";const Bg=Fg;/**
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
 */function Ow(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _a(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await Ow(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_a.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=ql("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function Nw(t){Zt().location.href=t}/**
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
 */function jg(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function Vw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mw(){return jg()?self:null}/**
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
 */const $g="firebaseLocalStorageDb",Lw=1,Ho="firebaseLocalStorage",Hg="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function Uw(){const t=indexedDB.deleteDatabase($g);return new Di(t).toPromise()}function $c(){const t=indexedDB.open($g,Lw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ho,{keyPath:Hg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ho)?e(r):(r.close(),await Uw(),e(await $c()))})})}async function Tf(t,e,n){const r=ya(t,!0).put({[Hg]:e,value:n});return new Di(r).toPromise()}async function Fw(t,e){const n=ya(t,!1).get(e),r=await new Di(n).toPromise();return r===void 0?null:r.value}function If(t,e){const n=ya(t,!0).delete(e);return new Di(n).toPromise()}const Bw=800,jw=3;class qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_a._getInstance(Mw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vw(),!this.activeServiceWorker)return;this.sender=new Dw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await Tf(e,$o,"1"),await If(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Fw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>If(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ya(s,!1).getAll();return new Di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qg.type="LOCAL";const $w=qg;new Ci(3e4,6e4);/**
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
 */function zg(t,e){return e?In(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zl extends jl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hw(t){return xg(t.auth,new zl(t),t.bypassAuthState)}function qw(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),yw(n,new zl(t),t.bypassAuthState)}async function zw(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),_w(n,new zl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hw;case"linkViaPopup":case"linkViaRedirect":return zw;case"reauthViaPopup":case"reauthViaRedirect":return qw;default:Lt(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new Ci(2e3,1e4);async function Ww(t,e,n){if(Et(t.app))return Promise.reject(Ht(t,"operation-not-supported-in-this-environment"));const r=cr(t);AI(t,e,Hl);const s=zg(r,n);return new vr(r,"signInViaPopup",e,s).executeNotNull()}class vr extends Kg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kw.get())};e()}}vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="pendingRedirect",To=new Map;class Qw extends Kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await Yw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yw(t,e){const n=Zw(e),r=Jw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Xw(t,e){To.set(t._key(),e)}function Jw(t){return In(t._redirectPersistence)}function Zw(t){return Eo(Gw,t.config.apiKey,t.name)}async function eA(t,e,n=!1){if(Et(t.app))return Promise.reject(wn(t));const r=cr(t),s=zg(r,e),o=await new Qw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=10*60*1e3;class nA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tA&&this.cachedEventUids.clear(),this.cachedEventUids.has(wf(e))}saveEventToCache(e){this.cachedEventUids.add(wf(e)),this.lastProcessedEventTime=Date.now()}}function wf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e={}){return On(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oA=/^https?/;async function aA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sA(t);for(const n of e)try{if(cA(n))return}catch{}Lt(t,"unauthorized-domain")}function cA(t){const e=Fc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oA.test(n))return!1;if(iA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const lA=new Ci(3e4,6e4);function Af(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uA(t){return new Promise((e,n)=>{var r,s,i;function o(){Af(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Af(),n(Ht(t,"network-request-failed"))},timeout:lA.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)o();else{const c=ZI("iframefcb");return Zt()[c]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},Og(`${JI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Io=null,e})}let Io=null;function hA(t){return Io=Io||uA(t),Io}/**
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
 */const fA=new Ci(5e3,15e3),dA="__/auth/iframe",pA="emulator/auth/iframe",gA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _A(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ul(e,pA):`https://${t.config.authDomain}/${dA}`,r={apiKey:e.apiKey,appName:t.name,v:Nr},s=mA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pi(r).slice(1)}`}async function yA(t){const e=await hA(t),n=Zt().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:_A(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),c=Zt().setTimeout(()=>{i(o)},fA.get());function l(){Zt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const vA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EA=500,TA=600,IA="_blank",wA="http://localhost";class Rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AA(t,e,n,r=EA,s=TA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},vA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ft().toLowerCase();n&&(c=Ag(h)?IA:n),Ig(h)&&(e=e||wA,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[_,k])=>`${g}${_}=${k},`,"");if(HI(h)&&c!=="_self")return RA(e||"",c),new Rf(null);const p=window.open(e||"",c,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new Rf(p)}function RA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bA="__/auth/handler",SA="emulator/auth/handler",PA=encodeURIComponent("fac");async function bf(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Nr,eventId:s};if(e instanceof Hl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Oi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${PA}=${encodeURIComponent(l)}`:"";return`${CA(t)}?${Pi(c).slice(1)}${h}`}function CA({config:t}){return t.emulator?Ul(t,SA):`https://${t.authDomain}/${bA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="webStorageSupport";class kA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bg,this._completeRedirectFn=eA,this._overrideRedirectResult=Xw}async _openPopup(e,n,r,s){var i;Sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bf(e,n,r,Fc(),s);return AA(e,o,ql())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bf(e,n,r,Fc(),s);return Nw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yA(e),r=new nA(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dc];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cg()||wg()||Bl()}}const OA=kA;var Sf="@firebase/auth",Pf="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VA(t){Rr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kg(t)},h=new QI(r,s,i,l);return iw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rr(new er("auth-internal",e=>{const n=cr(e.getProvider("auth").getImmediate());return(r=>new DA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Sf,Pf,NA(t)),Jt(Sf,Pf,"esm2017")}/**
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
 */const xA=5*60,MA=cg("authIdTokenMaxAge")||xA;let Cf=null;const LA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MA)return;const s=n==null?void 0:n.token;Cf!==s&&(Cf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function UA(t=Vl()){const e=ga(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sw(t,{popupRedirectResolver:OA,persistence:[$w,kw,Bg]}),r=cg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=LA(i.toString());Rw(n,o,()=>o(n.currentUser)),Aw(n,c=>o(c))}}const s=ig("auth");return s&&ow(n,`http://${s}`),n}function FA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ht("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",FA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VA("Browser");var kf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qn,Gg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function I(){}I.prototype=v.prototype,w.D=v.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,R,S){for(var T=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)T[dt-2]=arguments[dt];return v.prototype[R].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)A[R]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(R=0;16>R;++R)A[R]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=w.g[0],I=w.g[1],R=w.g[2];var S=w.g[3],T=v+(S^I&(R^S))+A[0]+3614090360&4294967295;v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[2]+606105819&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[3]+3250441966&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(S^I&(R^S))+A[4]+4118548399&4294967295,v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[6]+2821735955&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[7]+4249261313&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(S^I&(R^S))+A[8]+1770035416&4294967295,v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[10]+4294925233&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[11]+2304563134&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(S^I&(R^S))+A[12]+1804603682&4294967295,v=I+(T<<7&4294967295|T>>>25),T=S+(R^v&(I^R))+A[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(I^S&(v^I))+A[14]+2792965006&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(v^R&(S^v))+A[15]+1236535329&4294967295,I=R+(T<<22&4294967295|T>>>10),T=v+(R^S&(I^R))+A[1]+4129170786&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[11]+643717713&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[0]+3921069994&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(I^R))+A[5]+3593408605&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[15]+3634488961&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[4]+3889429448&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(I^R))+A[9]+568446438&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[3]+4107603335&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[8]+1163531501&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(I^R))+A[13]+2850285829&4294967295,v=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(v^I))+A[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^I&(S^v))+A[7]+1735328473&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^v&(R^S))+A[12]+2368359562&4294967295,I=R+(T<<20&4294967295|T>>>12),T=v+(I^R^S)+A[5]+4294588738&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[11]+1839030562&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[14]+4259657740&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(I^R^S)+A[1]+2763975236&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[7]+4139469664&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[10]+3200236656&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(I^R^S)+A[13]+681279174&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[3]+3572445317&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[6]+76029189&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(I^R^S)+A[9]+3654602809&4294967295,v=I+(T<<4&4294967295|T>>>28),T=S+(v^I^R)+A[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^I)+A[15]+530742520&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^v)+A[2]+3299628645&4294967295,I=R+(T<<23&4294967295|T>>>9),T=v+(R^(I|~S))+A[0]+4096336452&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[14]+2878612391&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[5]+4237533241&4294967295,I=R+(T<<21&4294967295|T>>>11),T=v+(R^(I|~S))+A[12]+1700485571&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[10]+4293915773&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[1]+2240044497&4294967295,I=R+(T<<21&4294967295|T>>>11),T=v+(R^(I|~S))+A[8]+1873313359&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[6]+2734768916&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[13]+1309151649&4294967295,I=R+(T<<21&4294967295|T>>>11),T=v+(R^(I|~S))+A[4]+4149444226&4294967295,v=I+(T<<6&4294967295|T>>>26),T=S+(I^(v|~R))+A[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~I))+A[2]+718787259&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var I=v-this.blockSize,A=this.B,R=this.h,S=0;S<v;){if(R==0)for(;S<=I;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<v;)if(A[R++]=w.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<v;)if(A[R++]=w[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var I=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=I&255,I/=256;for(this.u(w),w=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)w[I++]=this.g[v]>>>A&255;return w};function i(w,v){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=v(w)}function o(w,v){this.h=v;for(var I=[],A=!0,R=w.length-1;0<=R;R--){var S=w[R]|0;A&&S==v||(I[R]=S,A=!1)}this.g=I}var c={};function l(w){return-128<=w&&128>w?i(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return C(h(-w));for(var v=[],I=1,A=0;w>=I;A++)v[A]=w/I|0,I*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return C(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(v,8)),A=p,R=0;R<w.length;R+=8){var S=Math.min(8,w.length-R),T=parseInt(w.substring(R,R+S),v);8>S?(S=h(Math.pow(v,S)),A=A.j(S).add(h(T))):(A=A.j(I),A=A.add(h(T)))}return A}var p=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-C(this).m();for(var w=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(D(this))return"-"+C(this).toString(w);for(var v=h(Math.pow(w,6)),I=this,A="";;){var R=H(I,v).g;I=U(I,R.j(v));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=R,k(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=U(this,w),D(w)?-1:k(w)?0:1};function C(w){for(var v=w.g.length,I=[],A=0;A<v;A++)I[A]=~w.g[A];return new o(I,~w.h).add(g)}t.abs=function(){return D(this)?C(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0,R=0;R<=v;R++){var S=A+(this.i(R)&65535)+(w.i(R)&65535),T=(S>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=T>>>16,S&=65535,T&=65535,I[R]=T<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function U(w,v){return w.add(C(v))}t.j=function(w){if(k(this)||k(w))return p;if(D(this))return D(w)?C(this).j(C(w)):C(C(this).j(w));if(D(w))return C(this.j(C(w)));if(0>this.l(_)&&0>w.l(_))return h(this.m()*w.m());for(var v=this.g.length+w.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var S=this.i(A)>>>16,T=this.i(A)&65535,dt=w.i(R)>>>16,kt=w.i(R)&65535;I[2*A+2*R]+=T*kt,F(I,2*A+2*R),I[2*A+2*R+1]+=S*kt,F(I,2*A+2*R+1),I[2*A+2*R+1]+=T*dt,F(I,2*A+2*R+1),I[2*A+2*R+2]+=S*dt,F(I,2*A+2*R+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new o(I,0)};function F(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function $(w,v){this.g=w,this.h=v}function H(w,v){if(k(v))throw Error("division by zero");if(k(w))return new $(p,p);if(D(w))return v=H(C(w),v),new $(C(v.g),C(v.h));if(D(v))return v=H(w,C(v)),new $(C(v.g),v.h);if(30<w.g.length){if(D(w)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var I=g,A=v;0>=A.l(w);)I=ce(I),A=ce(A);var R=he(I,1),S=he(A,1);for(A=he(A,2),I=he(I,2);!k(A);){var T=S.add(A);0>=T.l(w)&&(R=R.add(I),S=T),A=he(A,1),I=he(I,1)}return v=U(w,R.j(v)),new $(R,v)}for(R=p;0<=w.l(v);){for(I=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(I),T=S.j(v);D(T)||0<T.l(w);)I-=A,S=h(I),T=S.j(v);k(S)&&(S=g),R=R.add(S),w=U(w,T)}return new $(R,w)}t.A=function(w){return H(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function ce(w){for(var v=w.g.length+1,I=[],A=0;A<v;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function he(w,v){var I=v>>5;v%=32;for(var A=w.g.length-I,R=[],S=0;S<A;S++)R[S]=0<v?w.i(S+I)>>>v|w.i(S+I+1)<<32-v:w.i(S+I);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Gg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Qn=o}).apply(typeof kf<"u"?kf:typeof self<"u"?self:typeof window<"u"?window:{});var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qg,Hs,Yg,wo,Hc,Xg,Jg,Zg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof io=="object"&&io];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,P={next:function(){if(!m&&d<a.length){var O=d++;return{value:u(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,P,O){for(var K=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)K[Se-2]=arguments[Se];return u.prototype[P].apply(m,K)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function C(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const P=a.length||0,O=m.length||0;a.length=P+O;for(let K=0;K<O;K++)a[P+K]=m[K]}else a.push(m)}}class U{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ce=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function he(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let O=0;O<I.length;O++)d=I[O],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=wt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class dt{constructor(){this.h=this.g=null}add(u,d){const m=kt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var kt=new U(()=>new Ue,a=>a.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ge=!1,wt=new dt,Ut=()=>{const a=c.Promise.resolve(void 0);ye=()=>{a.then(Ot)}};var Ot=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){S(d)}var u=kt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function De(){this.s=this.s,this.C=this.C}De.prototype.s=!1,De.prototype.ma=function(){this.s||(this.s=!0,this.N())},De.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Dn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function zt(a,u){if(Ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ce){e:{try{H(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_t[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&zt.aa.h.call(this)}}k(zt,Ne);var _t={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Q(a,u,d,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++Y,this.da=this.fa=!1}function J(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,u,d,m,P){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var K=E(a,u,m,P);return-1<K?(u=a[K],d||(u.fa=!1)):(u=new Q(u,this.src,O,!!m,P),u.fa=d,a.push(u)),u};function y(a,u){var d=u.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,u,void 0),O;(O=0<=P)&&Array.prototype.splice.call(m,P,1),O&&(J(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function E(a,u,d,m){for(var P=0;P<a.length;++P){var O=a[P];if(!O.da&&O.listener==u&&O.capture==!!d&&O.ha==m)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),V={};function L(a,u,d,m,P){if(Array.isArray(u)){for(var O=0;O<u.length;O++)L(a,u[O],d,m,P);return null}return d=oe(d),a&&a[N]?a.K(u,d,h(m)?!!m.capture:!1,P):x(a,u,d,!1,m,P)}function x(a,u,d,m,P,O){if(!u)throw Error("Invalid event type");var K=h(P)?!!P.capture:!!P,Se=W(a);if(Se||(a[b]=Se=new Te(a)),d=Se.add(u,d,m,K,O),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Dn||(P=K),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(j(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return u.call(a.src,a.listener,d)}const u=ee;return a}function z(a,u,d,m,P){if(Array.isArray(u))for(var O=0;O<u.length;O++)z(a,u[O],d,m,P);else m=h(m)?!!m.capture:!!m,d=oe(d),a&&a[N]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],d=E(O,d,m,P),-1<d&&(J(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=W(a))&&(u=a.g[u.toString()],a=-1,u&&(a=E(u,d,m,P)),(d=-1<a?u[a]:null)&&q(d))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[N])y(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(j(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=W(u))?(y(d,a),d.h==0&&(d.src=null,u[b]=null)):J(a)}}}function j(a){return a in V?V[a]:V[a]="on"+a}function ee(a,u){if(a.da)a=!0;else{u=new zt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&q(a),a=d.call(m,u)}return a}function W(a){return a=a[b],a instanceof Te?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(u){return a.handleEvent(u)}),a[Z])}function ne(){De.call(this),this.i=new Te(this),this.M=this,this.F=null}k(ne,De),ne.prototype[N]=!0,ne.prototype.removeEventListener=function(a,u,d,m){z(this,a,u,d,m)};function de(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Ne(u,a);else if(u instanceof Ne)u.target=u.target||a;else{var P=u;u=new Ne(m,a),A(u,P)}if(P=!0,d)for(var O=d.length-1;0<=O;O--){var K=u.g=d[O];P=ve(K,m,!0,u)&&P}if(K=u.g=a,P=ve(K,m,!0,u)&&P,P=ve(K,m,!1,u)&&P,d)for(O=0;O<d.length;O++)K=u.g=d[O],P=ve(K,m,!1,u)&&P}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)J(d[m]);delete a.g[u],a.h--}}this.F=null},ne.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},ne.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function ve(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,O=0;O<u.length;++O){var K=u[O];if(K&&!K.da&&K.capture==d){var Se=K.listener,Qe=K.ha||K.src;K.fa&&y(a.i,K),P=Se.call(Qe,m)!==!1&&P}}return P&&!m.defaultPrevented}function Ke(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function We(a){a.g=Ke(()=>{a.g=null,a.i&&(a.i=!1,We(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Dt extends De{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(a){De.call(this),this.h=a,this.g={}}k(nt,De);var Nn=[];function ws(a){he(a.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},a),a.g={}}nt.prototype.N=function(){nt.aa.N.call(this),ws(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ge=c.JSON.stringify,Nt=c.JSON.parse,Ui=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function La(){}La.prototype.h=null;function Pu(a){return a.h||(a.h=a.i())}function Cu(){}var As={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ua(){Ne.call(this,"d")}k(Ua,Ne);function Fa(){Ne.call(this,"c")}k(Fa,Ne);var hr={},ku=null;function Fi(){return ku=ku||new ne}hr.La="serverreachability";function Ou(a){Ne.call(this,hr.La,a)}k(Ou,Ne);function Rs(a){const u=Fi();de(u,new Ou(u))}hr.STAT_EVENT="statevent";function Du(a,u){Ne.call(this,hr.STAT_EVENT,a),this.stat=u}k(Du,Ne);function pt(a){const u=Fi();de(u,new Du(u,a))}hr.Ma="timingevent";function Nu(a,u){Ne.call(this,hr.Ma,a),this.size=u}k(Nu,Ne);function bs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Ss(){this.g=!0}Ss.prototype.xa=function(){this.g=!1};function $_(a,u,d,m,P,O){a.info(function(){if(a.g)if(O)for(var K="",Se=O.split("&"),Qe=0;Qe<Se.length;Qe++){var Ie=Se[Qe].split("=");if(1<Ie.length){var rt=Ie[0];Ie=Ie[1];var st=rt.split("_");K=2<=st.length&&st[1]=="type"?K+(rt+"="+Ie+"&"):K+(rt+"=redacted&")}}else K=null;else K=O;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+K})}function H_(a,u,d,m,P,O,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+O+" "+K})}function Mr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+z_(a,d)+(m?" "+m:"")})}function q_(a,u){a.info(function(){return"TIMEOUT: "+u})}Ss.prototype.info=function(){};function z_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return Ge(d)}catch{return u}}var Bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ba;function ji(){}k(ji,La),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Ba=new ji;function Vn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xu}function xu(){this.i=null,this.g="",this.h=!1}var Mu={},ja={};function $a(a,u,d){a.L=1,a.v=zi(hn(u)),a.m=d,a.P=!0,Lu(a,null)}function Lu(a,u){a.F=Date.now(),$i(a),a.A=hn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Xu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new xu,a.g=gh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Dt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Nn[0]=P.toString()),P=Nn);for(var O=0;O<P.length;O++){var K=L(d,P[O],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Rs(),$_(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const u=this.M;u&&fn(a)==3?u.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const st=fn(this.g);var u=this.g.Ba();const Fr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||sh(this.g)))){this.J||st!=4||u==7||(u==8||0>=Fr?Rs(3):Rs(2)),Ha(this);var d=this.g.Z();this.X=d;t:if(Uu(this)){var m=sh(this.g);a="";var P=m.length,O=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),Ps(this);var K="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(O&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,H_(this.i,this.u,this.A,this.l,this.R,st,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Qe=this.g;if((Se=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Se)){var Ie=Se;break t}}Ie=null}if(d=Ie)Mr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qa(this,d);else{this.o=!1,this.s=3,pt(12),fr(this),Ps(this);break e}}if(this.P){d=!0;let Ft;for(;!this.J&&this.C<K.length;)if(Ft=K_(this,K),Ft==ja){st==4&&(this.s=4,pt(14),d=!1),Mr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Mu){this.s=4,pt(15),Mr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Mr(this.i,this.l,Ft,null),qa(this,Ft);if(Uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||K.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)Mr(this.i,this.l,K,"[Invalid Chunked Response]"),fr(this),Ps(this);else if(0<K.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Ya(rt),rt.M=!0,pt(11))}}else Mr(this.i,this.l,K,null),qa(this,K);st==4&&fr(this),this.o&&!this.J&&(st==4?hh(this.j,this):(this.o=!1,$i(this)))}else ly(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),fr(this),Ps(this)}}}catch{}finally{}};function Uu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function K_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?ja:(d=Number(u.substring(d,m)),isNaN(d)?Mu:(m+=1,m+d>u.length?ja:(u=u.slice(m,m+d),a.C=m+d,u)))}Vn.prototype.cancel=function(){this.J=!0,fr(this)};function $i(a){a.S=Date.now()+a.I,Fu(a,a.I)}function Fu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=bs(g(a.ba,a),u)}function Ha(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(q_(this.i,this.A),this.L!=2&&(Rs(),pt(17)),fr(this),this.s=2,Ps(this)):Fu(this,this.S-a)};function Ps(a){a.j.G==0||a.J||hh(a.j,a)}function fr(a){Ha(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,ws(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function qa(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||za(d.h,a))){if(!a.K&&za(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Xi(d),Qi(d);else break e;Qa(d),pt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=bs(g(d.Za,d),6e3));if(1>=$u(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else pr(d,11)}else if((a.K||d.g==a)&&Xi(d),!F(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Ie=P[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const rt=Ie[3];rt!=null&&(d.la=rt,d.j.info("VER="+d.la));const st=Ie[4];st!=null&&(d.Aa=st,d.j.info("SVER="+d.Aa));const Fr=Ie[5];Fr!=null&&typeof Fr=="number"&&0<Fr&&(m=1.5*Fr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ft=a.g;if(Ft){const Zi=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var O=m.h;O.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ka(O,O.h),O.h=null))}if(m.D){const Xa=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Xa&&(m.ya=Xa,Oe(m.I,m.D,Xa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var K=a;if(m.qa=ph(m,m.J?m.ia:null,m.W),K.K){Hu(m.h,K);var Se=K,Qe=m.L;Qe&&(Se.I=Qe),Se.B&&(Ha(Se),$i(Se)),m.g=K}else lh(m);0<d.i.length&&Yi(d)}else Ie[0]!="stop"&&Ie[0]!="close"||pr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?pr(d,7):Ga(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}Rs(4)}catch{}}var W_=class{constructor(a,u){this.g=a,this.map=u}};function Bu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ju(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function $u(a){return a.h?1:a.g?a.g.size:0}function za(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ka(a,u){a.g?a.g.add(u):a.h=u}function Hu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Bu.prototype.cancel=function(){if(this.i=qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function G_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function Q_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function zu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Q_(a),m=G_(a),P=m.length,O=0;O<P;O++)u.call(void 0,m[O],d&&d[O],a)}var Ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Y_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),P=null;if(0<=m){var O=a[d].substring(0,m);P=a[d].substring(m+1)}else O=a[d];u(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function dr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof dr){this.h=a.h,Hi(this,a.j),this.o=a.o,this.g=a.g,qi(this,a.s),this.l=a.l;var u=a.i,d=new Os;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Wu(this,d),this.m=a.m}else a&&(u=String(a).match(Ku))?(this.h=!1,Hi(this,u[1]||"",!0),this.o=Cs(u[2]||""),this.g=Cs(u[3]||"",!0),qi(this,u[4]),this.l=Cs(u[5]||"",!0),Wu(this,u[6]||"",!0),this.m=Cs(u[7]||"")):(this.h=!1,this.i=new Os(null,this.h))}dr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ks(u,Gu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ks(u,Gu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ks(d,d.charAt(0)=="/"?Z_:J_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ks(d,ty)),a.join("")};function hn(a){return new dr(a)}function Hi(a,u,d){a.j=d?Cs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function qi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Wu(a,u,d){u instanceof Os?(a.i=u,ny(a.i,a.h)):(d||(u=ks(u,ey)),a.i=new Os(u,a.h))}function Oe(a,u,d){a.i.set(u,d)}function zi(a){return Oe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Cs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,X_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function X_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gu=/[#\/\?@]/g,J_=/[#\?:]/g,Z_=/[#\?]/g,ey=/[#\?@]/g,ty=/#/g;function Os(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function xn(a){a.g||(a.g=new Map,a.h=0,a.i&&Y_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Os.prototype,t.add=function(a,u){xn(this),this.i=null,a=Lr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Qu(a,u){xn(a),u=Lr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Yu(a,u){return xn(a),u=Lr(a,u),a.g.has(u)}t.forEach=function(a,u){xn(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){xn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=a[m];for(let O=0;O<P.length;O++)d.push(u[m])}return d},t.V=function(a){xn(this);let u=[];if(typeof a=="string")Yu(this,a)&&(u=u.concat(this.g.get(Lr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return xn(this),this.i=null,a=Lr(this,a),Yu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Xu(a,u,d){Qu(a,u),0<d.length&&(a.i=null,a.g.set(Lr(a,u),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const O=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var P=O;K[m]!==""&&(P+="="+encodeURIComponent(String(K[m]))),a.push(P)}}return this.i=a.join("&")};function Lr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ny(a,u){u&&!a.j&&(xn(a),a.i=null,a.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(Qu(this,m),Xu(this,P,d))},a)),a.j=u}function ry(a,u){const d=new Ss;if(c.Image){const m=new Image;m.onload=_(Mn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Mn,d,"TestLoadImage: error",!1,u,m),m.onabort=_(Mn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Mn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function sy(a,u){const d=new Ss,m=new AbortController,P=setTimeout(()=>{m.abort(),Mn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(P),O.ok?Mn(d,"TestPingServer: ok",!0,u):Mn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Mn(d,"TestPingServer: error",!1,u)})}function Mn(a,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function iy(){this.g=new Ui}function oy(a,u,d){const m=d||"";try{zu(a,function(P,O){let K=P;h(P)&&(K=Ge(P)),u.push(m+O+"="+encodeURIComponent(K))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Ki(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Ki,La),Ki.prototype.g=function(){return new Wi(this.l,this.j)},Ki.prototype.i=function(a){return function(){return a}}({});function Wi(a,u){ne.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Wi,ne),t=Wi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ju(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ju(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ds(this):Ns(this),this.readyState==3&&Ju(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ds(this))},t.Qa=function(a){this.g&&(this.response=a,Ds(this))},t.ga=function(){this.g&&Ds(this)};function Ds(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ns(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zu(a){let u="";return he(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Wa(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Zu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Oe(a,u,d))}function xe(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(xe,ne);var ay=/^https?$/i,cy=["POST","PUT"];t=xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ba.g(),this.v=this.o?Pu(this.o):Pu(Ba),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){eh(this,O);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(cy,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of d)this.g.setRequestHeader(O,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rh(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){eh(this,O)}};function eh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,th(a),Gi(a)}function th(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),Gi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gi(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?nh(this):this.bb())},t.bb=function(){nh(this)};function nh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)Ke(a.Ea,0,a);else if(de(a,"readystatechange"),fn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=K===0){var P=String(a.D).match(Ku)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),m=!ay.test(P?P.toLowerCase():"")}d=m}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var O=2<fn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",th(a)}}finally{Gi(a)}}}}function Gi(a,u){if(a.g){rh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||de(a,"ready");try{d.onreadystatechange=m}catch{}}}function rh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Nt(u)}};function sh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ly(a){const u={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(F(a[m]))continue;var d=R(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=u[P]||[];u[P]=O,O.push(d)}w(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function ih(a){this.Aa=0,this.i=[],this.j=new Ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,a),this.cb=Vs("retryDelaySeedMs",1e4,a),this.Wa=Vs("forwardChannelMaxRetries",2,a),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bu(a&&a.concurrentRequestLimit),this.Da=new iy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ih.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){pt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ph(this,null,this.W),Yi(this)};function Ga(a){if(oh(a),a.G==3){var u=a.U++,d=hn(a.I);if(Oe(d,"SID",a.K),Oe(d,"RID",u),Oe(d,"TYPE","terminate"),xs(a,d),u=new Vn(a,a.j,u),u.L=2,u.v=zi(hn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=gh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$i(u)}dh(a)}function Qi(a){a.g&&(Ya(a),a.g.cancel(),a.g=null)}function oh(a){Qi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Xi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Yi(a){if(!ju(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||Ut(),ge||(ye(),ge=!0),wt.add(u,a),a.B=0}}function uy(a,u){return $u(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=bs(g(a.Ga,a,u),fh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Vn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=ch(this,P,u),d=hn(this.I),Oe(d,"RID",a),Oe(d,"CVER",22),this.D&&Oe(d,"X-HTTP-Session-Id",this.D),xs(this,d),O&&(this.O?u="headers="+encodeURIComponent(String(Zu(O)))+"&"+u:this.m&&Wa(d,this.m,O)),Ka(this.h,P),this.Ua&&Oe(d,"TYPE","init"),this.P?(Oe(d,"$req",u),Oe(d,"SID","null"),P.T=!0,$a(P,d,null)):$a(P,d,u),this.G=2}}else this.G==3&&(a?ah(this,a):this.i.length==0||ju(this.h)||ah(this))};function ah(a,u){var d;u?d=u.l:d=a.U++;const m=hn(a.I);Oe(m,"SID",a.K),Oe(m,"RID",d),Oe(m,"AID",a.T),xs(a,m),a.m&&a.o&&Wa(m,a.m,a.o),d=new Vn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ch(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ka(a.h,d),$a(d,m,u)}function xs(a,u){a.H&&he(a.H,function(d,m){Oe(u,m,d)}),a.l&&zu({},function(d,m){Oe(u,m,d)})}function ch(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let O=-1;for(;;){const K=["count="+d];O==-1?0<d?(O=P[0].g,K.push("ofs="+O)):O=0:K.push("ofs="+O);let Se=!0;for(let Qe=0;Qe<d;Qe++){let Ie=P[Qe].g;const rt=P[Qe].map;if(Ie-=O,0>Ie)O=Math.max(0,P[Qe].g-100),Se=!1;else try{oy(rt,K,"req"+Ie+"_")}catch{m&&m(rt)}}if(Se){m=K.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function lh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||Ut(),ge||(ye(),ge=!0),wt.add(u,a),a.v=0}}function Qa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=bs(g(a.Fa,a),fh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,uh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=bs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Qi(this),uh(this))};function Ya(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function uh(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=hn(a.qa);Oe(u,"RID","rpc"),Oe(u,"SID",a.K),Oe(u,"AID",a.T),Oe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Oe(u,"TO",a.ja),Oe(u,"TYPE","xmlhttp"),xs(a,u),a.m&&a.o&&Wa(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=zi(hn(u)),d.m=null,d.P=!0,Lu(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Qi(this),Qa(this),pt(19))};function Xi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function hh(a,u){var d=null;if(a.g==u){Xi(a),Ya(a),a.g=null;var m=2}else if(za(a.h,u))d=u.D,Hu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=Fi(),de(m,new Nu(m,d)),Yi(a)}else lh(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&uy(a,u)||m==2&&Qa(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:pr(a,5);break;case 4:pr(a,10);break;case 3:pr(a,6);break;default:pr(a,2)}}}function fh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function pr(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const P=!m;m=new dr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Hi(m,"https"),zi(m),P?ry(m.toString(),d):sy(m.toString(),d)}else pt(2);a.G=0,a.l&&a.l.sa(u),dh(a),oh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function dh(a){if(a.G=0,a.ka=[],a.l){const u=qu(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ka,u),C(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function ph(a,u,d){var m=d instanceof dr?hn(d):new dr(d);if(m.g!="")u&&(m.g=u+"."+m.g),qi(m,m.s);else{var P=c.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var O=new dr(null);m&&Hi(O,m),u&&(O.g=u),P&&qi(O,P),d&&(O.l=d),m=O}return d=a.D,u=a.ya,d&&u&&Oe(m,d,u),Oe(m,"VER",a.la),xs(a,m),m}function gh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new xe(new Ki({eb:d})):new xe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mh(){}t=mh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ji(){}Ji.prototype.g=function(a,u){return new At(a,u)};function At(a,u){ne.call(this),this.g=new ih(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Ur(this)}k(At,ne),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Ga(this.g)},At.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ge(a),a=d);u.i.push(new W_(u.Ya++,a)),u.G==3&&Yi(u)},At.prototype.N=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,At.aa.N.call(this)};function _h(a){Ua.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(_h,Ua);function yh(){Fa.call(this),this.status=1}k(yh,Fa);function Ur(a){this.g=a}k(Ur,mh),Ur.prototype.ua=function(){de(this.g,"a")},Ur.prototype.ta=function(a){de(this.g,new _h(a))},Ur.prototype.sa=function(a){de(this.g,new yh)},Ur.prototype.ra=function(){de(this.g,"b")},Ji.prototype.createWebChannel=Ji.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Zg=function(){return new Ji},Jg=function(){return Fi()},Xg=hr,Hc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,wo=Bi,Vu.COMPLETE="complete",Yg=Vu,Cu.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Hs=Cu,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,Qg=xe}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});const Of="@firebase/firestore",Df="4.7.17";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let vs="11.9.0";/**
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
 */const Pr=new Dl("@firebase/firestore");function zr(){return Pr.logLevel}function X(t,...e){if(Pr.logLevel<=me.DEBUG){const n=e.map(Kl);Pr.debug(`Firestore (${vs}): ${t}`,...n)}}function Pn(t,...e){if(Pr.logLevel<=me.ERROR){const n=e.map(Kl);Pr.error(`Firestore (${vs}): ${t}`,...n)}}function cs(t,...e){if(Pr.logLevel<=me.WARN){const n=e.map(Kl);Pr.warn(`Firestore (${vs}): ${t}`,...n)}}function Kl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,em(t,r,n)}function em(t,e,n){let r=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Pn(r),new Error(r)}function be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||em(e,s,r)}function ue(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class tm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class jA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $A{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string",31837,{l:r}),new tm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class HA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class qA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new HA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Nf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Nf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function nm(){return new TextEncoder}/**
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
 */class rm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=KA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function qc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return pe(r,s);{const i=nm(),o=WA(i.encode(Vf(t,n)),i.encode(Vf(e,n)));return o!==0?o:pe(r,s)}}n+=r>65535?2:1}return pe(t.length,e.length)}function Vf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function WA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return pe(t[n],e[n]);return pe(t.length,e.length)}function ls(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const xf=-62135596800,Mf=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Mf);return new $e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xf)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mf}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-xf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new $e(0,0))}static max(){return new le(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Lf="__name__";class Gt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Gt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return pe(e.length,n.length)}static compareSegments(e,n){const r=Gt.isNumericId(e),s=Gt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Gt.extractNumericId(e).compare(Gt.extractNumericId(n)):qc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qn.fromString(e.substring(4,e.length-2))}}class Me extends Gt{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const GA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Gt{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return GA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lf}static keyField(){return new et([Lf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new te(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new te(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Me.fromString(e))}static fromName(e){return new se(Me.fromString(e).popFirst(5))}static empty(){return new se(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Me(e.slice()))}}/**
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
 */const pi=-1;function QA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new tr(s,se.empty(),e)}function YA(t){return new tr(t.readTime,t.key,pi)}class tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(le.min(),se.empty(),pi)}static max(){return new tr(le.max(),se.empty(),pi)}}function XA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Es(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==JA)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function eR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ts(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class va{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}va.le=-1;/**
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
 */const Wl=-1;function Ea(t){return t==null}function qo(t){return t===0&&1/t==-1/0}function tR(t){return typeof t=="number"&&Number.isInteger(t)&&!qo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const sm="";function nR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Uf(e)),e=rR(t.get(n),e);return Uf(e)}function rR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case sm:n+="";break;default:n+=i}}return n}function Uf(t){return t+sm+""}/**
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
 */function Ff(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function im(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bf(this.data.getIterator())}getIteratorFrom(e){return new Bf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Bf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new He(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class om extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new om("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const sR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=sR.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="server_timestamp",cm="__type__",lm="__previous_value__",um="__local_write_time__";function Gl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[cm])===null||n===void 0?void 0:n.stringValue)===am}function Ta(t){const e=t.mapValue.fields[lm];return Gl(e)?Ta(e):e}function gi(t){const e=nr(t.mapValue.fields[um].timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class iR{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const zo="(default)";class mi{constructor(e,n){this.projectId=e,this.database=n||zo}static empty(){return new mi("","")}get isDefaultDatabase(){return this.database===zo}isEqual(e){return e instanceof mi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="__type__",oR="__max__",ao={mapValue:{}},fm="__vector__",Ko="value";function sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gl(t)?4:cR(t)?9007199254740991:aR(t)?10:11:ae(28295,{value:t})}function on(t,e){if(t===e)return!0;const n=sr(t);if(n!==sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gi(t).isEqual(gi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=nr(s.timestampValue),c=nr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return rr(s.bytesValue).isEqual(rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),c=Le(i.doubleValue);return o===c?qo(o)===qo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ff(o)!==Ff(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!on(o[l],c[l])))return!1;return!0}(t,e);default:return ae(52216,{left:t})}}function _i(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function us(t,e){if(t===e)return 0;const n=sr(t),r=sr(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Le(i.integerValue||i.doubleValue),l=Le(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return jf(t.timestampValue,e.timestampValue);case 4:return jf(gi(t),gi(e));case 5:return qc(t.stringValue,e.stringValue);case 6:return function(i,o){const c=rr(i),l=rr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=pe(c[h],l[h]);if(f!==0)return f}return pe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=pe(Le(i.latitude),Le(o.latitude));return c!==0?c:pe(Le(i.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $f(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},g=o.fields||{},_=(c=p[Ko])===null||c===void 0?void 0:c.arrayValue,k=(l=g[Ko])===null||l===void 0?void 0:l.arrayValue,D=pe(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:$f(_,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ao.mapValue&&o===ao.mapValue)return 0;if(i===ao.mapValue)return 1;if(o===ao.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=qc(l[p],f[p]);if(g!==0)return g;const _=us(c[l[p]],h[f[p]]);if(_!==0)return _}return pe(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ae(23264,{Pe:n})}}function jf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=nr(t),r=nr(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function $f(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=us(n[s],r[s]);if(i)return i}return pe(n.length,r.length)}function hs(t){return zc(t)}function zc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=zc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${zc(n.fields[o])}`;return s+"}"}(t.mapValue):ae(61005,{value:t})}function Ao(t){switch(sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ta(t);return e?16+Ao(e):16;case 5:return 2*t.stringValue.length;case 6:return rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ao(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return lr(r.fields,(i,o)=>{s+=i.length+Ao(o)}),s}(t.mapValue);default:throw ae(13486,{value:t})}}function Kc(t){return!!t&&"integerValue"in t}function Ql(t){return!!t&&"arrayValue"in t}function Hf(t){return!!t&&"nullValue"in t}function qf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ro(t){return!!t&&"mapValue"in t}function aR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[hm])===null||n===void 0?void 0:n.stringValue)===fm}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===oR}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ro(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ti(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ro(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ro(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(ti(this.value))}}function dm(t){const e=[];return lr(t.fields,(n,r)=>{const s=new et([n]);if(Ro(r)){const i=dm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Pt(e)}/**
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
 */class ct{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,le.min(),le.min(),le.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,le.min(),le.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,le.min(),le.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wo{constructor(e,n){this.position=e,this.inclusive=n}}function zf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=us(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Go{constructor(e,n="asc"){this.field=e,this.dir=n}}function lR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pm{}class je extends pm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hR(e,n,r):n==="array-contains"?new pR(e,r):n==="in"?new gR(e,r):n==="not-in"?new mR(e,r):n==="array-contains-any"?new _R(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fR(e,r):new dR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(us(n,this.value)):n!==null&&sr(this.value)===sr(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends pm{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new an(e,n)}matches(e){return gm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function gm(t){return t.op==="and"}function mm(t){return uR(t)&&gm(t)}function uR(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function Wc(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(mm(t))return t.filters.map(e=>Wc(e)).join(",");{const e=t.filters.map(n=>Wc(n)).join(",");return`${t.op}(${e})`}}function _m(t,e){return t instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(t,e):t instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&_m(o,s.filters[c]),!0):!1}(t,e):void ae(19439)}function ym(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(ym).join(" ,")+"}"}(t):"Filter"}class hR extends je{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class fR extends je{constructor(e,n){super(e,"in",n),this.keys=vm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dR extends je{constructor(e,n){super(e,"not-in",n),this.keys=vm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class pR extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ql(n)&&_i(n.arrayValue,this.value)}}class gR extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class mR extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!_i(this.value.arrayValue,n)}}class _R extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ql(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}/**
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
 */class yR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function Wf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new yR(t,e,n,r,s,i,o)}function Yl(t){const e=ue(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ea(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hs(r)).join(",")),e.Ie=n}return e.Ie}function Xl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_m(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kf(t.startAt,e.startAt)&&Kf(t.endAt,e.endAt)}function Gc(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ia{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function vR(t,e,n,r,s,i,o,c){return new Ia(t,e,n,r,s,i,o,c)}function Jl(t){return new Ia(t)}function Gf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ER(t){return t.collectionGroup!==null}function ni(t){const e=ue(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new He(et.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Go(i,r))}),n.has(et.keyField().canonicalString())||e.Ee.push(new Go(et.keyField(),r))}return e.Ee}function en(t){const e=ue(t);return e.de||(e.de=TR(e,ni(t))),e.de}function TR(t,e){if(t.limitType==="F")return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Go(s.field,i)});const n=t.endAt?new Wo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wo(t.startAt.position,t.startAt.inclusive):null;return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qc(t,e,n){return new Ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wa(t,e){return Xl(en(t),en(e))&&t.limitType===e.limitType}function Em(t){return`${Yl(en(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ym(s)).join(", ")}]`),Ea(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>hs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>hs(s)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function Aa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ni(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=zf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ni(r),s)||r.endAt&&!function(o,c,l){const h=zf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ni(r),s))}(t,e)}function IR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tm(t){return(e,n)=>{let r=!1;for(const s of ni(t)){const i=wR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wR(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?us(l,h):ae(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
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
 */class Vr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return im(this.inner)}size(){return this.innerSize}}/**
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
 */const AR=new Ve(se.comparator);function Cn(){return AR}const Im=new Ve(se.comparator);function qs(...t){let e=Im;for(const n of t)e=e.insert(n.key,n);return e}function wm(t){let e=Im;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Er(){return ri()}function Am(){return ri()}function ri(){return new Vr(t=>t.toString(),(t,e)=>t.isEqual(e))}const RR=new Ve(se.comparator),bR=new He(se.comparator);function _e(...t){let e=bR;for(const n of t)e=e.add(n);return e}const SR=new He(pe);function PR(){return SR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qo(e)?"-0":e}}function Rm(t){return{integerValue:""+t}}function CR(t,e){return tR(e)?Rm(e):Zl(t,e)}/**
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
 */class Ra{constructor(){this._=void 0}}function kR(t,e,n){return t instanceof Qo?function(s,i){const o={fields:{[cm]:{stringValue:am},[um]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gl(i)&&(i=Ta(i)),i&&(o.fields[lm]=i),{mapValue:o}}(n,e):t instanceof yi?Sm(t,e):t instanceof vi?Pm(t,e):function(s,i){const o=bm(s,i),c=Qf(o)+Qf(s.Re);return Kc(o)&&Kc(s.Re)?Rm(c):Zl(s.serializer,c)}(t,e)}function OR(t,e,n){return t instanceof yi?Sm(t,e):t instanceof vi?Pm(t,e):n}function bm(t,e){return t instanceof Yo?function(r){return Kc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Qo extends Ra{}class yi extends Ra{constructor(e){super(),this.elements=e}}function Sm(t,e){const n=Cm(e);for(const r of t.elements)n.some(s=>on(s,r))||n.push(r);return{arrayValue:{values:n}}}class vi extends Ra{constructor(e){super(),this.elements=e}}function Pm(t,e){let n=Cm(e);for(const r of t.elements)n=n.filter(s=>!on(s,r));return{arrayValue:{values:n}}}class Yo extends Ra{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Qf(t){return Le(t.integerValue||t.doubleValue)}function Cm(t){return Ql(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yi&&s instanceof yi||r instanceof vi&&s instanceof vi?ls(r.elements,s.elements,on):r instanceof Yo&&s instanceof Yo?on(r.Re,s.Re):r instanceof Qo&&s instanceof Qo}(t.transform,e.transform)}class NR{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ba{}function km(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dm(t.key,tn.none()):new Ni(t.key,t.data,tn.none());{const n=t.data,r=Tt.empty();let s=new He(et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ur(t.key,r,new Pt(s.toArray()),tn.none())}}function VR(t,e,n){t instanceof Ni?function(s,i,o){const c=s.value.clone(),l=Xf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(s,i,o){if(!bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Xf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Om(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function si(t,e,n,r){return t instanceof Ni?function(i,o,c,l){if(!bo(i.precondition,o))return c;const h=i.value.clone(),f=Jf(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(i,o,c,l){if(!bo(i.precondition,o))return c;const h=Jf(i.fieldTransforms,l,o),f=o.data;return f.setAll(Om(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function xR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bm(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function Yf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ls(r,s,(i,o)=>DR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ni extends ba{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ur extends ba{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Om(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xf(t,e,n){const r=new Map;be(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,OR(o,c,n[s]))}return r}function Jf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,kR(i,o,e))}return r}class Dm extends ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MR extends ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&VR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Am();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=km(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>Yf(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>Yf(n,r))}}class eu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return RR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new eu(e,n,r,s)}}/**
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
 */class UR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Fe,Ee;function BR(t){switch(t){case B.OK:return ae(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function Nm(t){if(t===void 0)return Pn("GRPC error has no .code"),B.UNKNOWN;switch(t){case Fe.OK:return B.OK;case Fe.CANCELLED:return B.CANCELLED;case Fe.UNKNOWN:return B.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return B.INTERNAL;case Fe.UNAVAILABLE:return B.UNAVAILABLE;case Fe.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Fe.NOT_FOUND:return B.NOT_FOUND;case Fe.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Fe.ABORTED:return B.ABORTED;case Fe.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Fe.DATA_LOSS:return B.DATA_LOSS;default:return ae(39323,{code:t})}}(Ee=Fe||(Fe={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const jR=new Qn([4294967295,4294967295],0);function Zf(t){const e=nm().encode(t),n=new Gg;return n.update(e),new Uint8Array(n.digest())}function ed(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qn([n,r],0),new Qn([s,i],0)]}class tu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zs(`Invalid padding: ${n}`);if(r<0)throw new zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zs(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Qn.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(Qn.fromNumber(r)));return s.compare(jR)===1&&(s=new Qn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Zf(e),[r,s]=ed(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new tu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const n=Zf(e),[r,s]=ed(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sa(le.min(),s,new Ve(pe),Cn(),_e())}}class Vi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vi(r,n,_e(),_e(),_e())}}/**
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
 */class So{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class Vm{constructor(e,n){this.targetId=e,this.Ce=n}}class xm{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class td{constructor(){this.Fe=0,this.Me=nd(),this.xe=tt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=_e(),n=_e(),r=_e();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}}),new Vi(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=nd()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,be(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class $R{constructor(e){this.ze=e,this.je=new Map,this.He=Cn(),this.Je=co(),this.Ye=co(),this.Ze=new Ve(pe)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ae(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(Gc(i))if(r===0){const o=new se(i.path);this.tt(n,o,ct.newNoDocument(o,le.min()))}else be(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=rr(r).toUint8Array()}catch(l){if(l instanceof om)return cs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new tu(o,s,i)}catch(l){return cs(l instanceof zs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&Gc(c.target)){const l=new se(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,ct.newNoDocument(l,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=_e();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this._t(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new Sa(e,n,this.Ze,this.He,r);return this.He=Cn(),this.Je=co(),this.Ye=co(),this.Ze=new Ve(pe),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new td,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new He(pe),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new He(pe),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new td),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function co(){return new Ve(se.comparator)}function nd(){return new Ve(se.comparator)}const HR={asc:"ASCENDING",desc:"DESCENDING"},qR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zR={and:"AND",or:"OR"};class KR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yc(t,e){return t.useProto3Json||Ea(e)?e:{value:e}}function Xo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WR(t,e){return Xo(t,e.toTimestamp())}function nn(t){return be(!!t,49232),le.fromTimestamp(function(n){const r=nr(n);return new $e(r.seconds,r.nanos)}(t))}function nu(t,e){return Xc(t,e).canonicalString()}function Xc(t,e){const n=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lm(t){const e=Me.fromString(t);return be($m(e),10190,{key:e.toString()}),e}function Jc(t,e){return nu(t.databaseId,e.path)}function pc(t,e){const n=Lm(e);if(n.get(1)!==t.databaseId.projectId)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Fm(n))}function Um(t,e){return nu(t.databaseId,e)}function GR(t){const e=Lm(t);return e.length===4?Me.emptyPath():Fm(e)}function Zc(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fm(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rd(t,e,n){return{name:Jc(t,e),fields:n.value.mapValue.fields}}function QR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string",58123),tt.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),tt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?B.UNKNOWN:Nm(h.code);return new te(f,h.message||"")}(o);n=new xm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=pc(t,r.document.name),i=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):le.min(),c=new Tt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new So(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=pc(t,r.document),i=r.readTime?nn(r.readTime):le.min(),o=ct.newNoDocument(s,i),c=r.removedTargetIds||[];n=new So([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=pc(t,r.document),i=r.removedTargetIds||[];n=new So([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new FR(s,i),c=r.targetId;n=new Vm(c,o)}}return n}function YR(t,e){let n;if(e instanceof Ni)n={update:rd(t,e.key,e.value)};else if(e instanceof Dm)n={delete:Jc(t,e.key)};else if(e instanceof ur)n={update:rd(t,e.key,e.data),updateMask:i0(e.fieldMask)};else{if(!(e instanceof MR))return ae(16599,{ft:e.type});n={verify:Jc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Yo)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw ae(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:WR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)}(t,e.precondition)),n}function XR(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?nn(s.updateTime):nn(i);return o.isEqual(le.min())&&(o=nn(i)),new NR(o,s.transformResults||[])}(n,e))):[]}function JR(t,e){return{documents:[Um(t,e.path)]}}function ZR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Um(t,s);const i=function(h){if(h.length!==0)return jm(an.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Wr(g.field),direction:n0(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Yc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:n,parent:s}}function e0(t){let e=GR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Bm(p);return g instanceof an&&mm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(k){return new Go(Gr(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Ea(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new Wo(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new Wo(_,g)}(n.endAt)),vR(e,s,o,i,c,"F",l,h)}function t0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gr(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Gr(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gr(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gr(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(Gr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>Bm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}}(n.compositeFilter.op))}(t):ae(30097,{filter:t})}function n0(t){return HR[t]}function r0(t){return qR[t]}function s0(t){return zR[t]}function Wr(t){return{fieldPath:t.canonicalString()}}function Gr(t){return et.fromServerFormat(t.fieldPath)}function jm(t){return t instanceof je?function(n){if(n.op==="=="){if(qf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NAN"}};if(Hf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NAN"}};if(Hf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(n.field),op:r0(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(s=>jm(s));return r.length===1?r[0]:{compositeFilter:{op:s0(n.op),filters:r}}}(t):ae(54877,{filter:t})}function i0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $m(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class zn{constructor(e,n,r,s,i=le.min(),o=le.min(),c=tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class o0{constructor(e){this.wt=e}}function a0(t){const e=e0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qc(e,e.limit,"L"):e}/**
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
 */class c0{constructor(){this.Cn=new l0}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(tr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class l0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Me.comparator)).toArray()}}/**
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
 */const sd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hm=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Hm,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
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
 */class fs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new fs(0)}static lr(){return new fs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="LruGarbageCollector",u0=1048576;function od([t,e],[n,r]){const s=pe(t,n);return s===0?pe(e,r):s}class h0{constructor(e){this.Er=e,this.buffer=new He(od),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();od(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class f0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){X(id,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ts(n)?X(id,"Ignoring IndexedDB error during garbage collection: ",n):await Es(n)}await this.mr(3e5)})}}class d0{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(va.le);const r=new h0(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(sd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sd):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),zr()<=me.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function p0(t,e){return new d0(t,e)}/**
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
 */class g0{constructor(){this.changes=new Vr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class m0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&si(r.mutation,s,Pt.empty(),$e.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Er();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Er();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Cn();const o=ri(),c=function(){return ri()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ur)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),si(f.mutation,h,f.mutation.getFieldMask(),$e.now())):o.set(h.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new m0(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ri();let s=new Ve((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Pt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Am();f.forEach(g=>{if(!i.has(g)){const _=km(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ER(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Er());let c=pi,l=i;return o.next(h=>M.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,_e())).next(f=>({batchId:c,changes:wm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,l=>{const h=function(p,g){return new Ia(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let c=qs();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&si(f.mutation,h,Pt.empty(),$e.now()),Aa(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return M.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:a0(s.bundledQuery),readTime:nn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class v0{constructor(){this.overlays=new Ve(se.comparator),this.Qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Er();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Er(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Er(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Er(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return M.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UR(n,r));let i=this.Qr.get(n);i===void 0&&(i=_e(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class E0{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class ru{constructor(){this.$r=new He(qe.Ur),this.Kr=new He(qe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new qe(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new qe(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new se(new Me([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new se(new Me([])),r=new qe(n,e),s=new qe(n,e+1);let i=_e();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return se.comparator(e.key,n.key)||pe(e.Zr,n.Zr)}static Wr(e,n){return pe(e.Zr,n.Zr)||se.comparator(e.key,n.key)}}/**
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
 */class T0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new He(qe.Ur)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Xr=this.Xr.add(new qe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Wl:this.nr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const c=this.ei(o.Zr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(pe);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],c=>{r=r.add(c.Zr)})}),M.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new qe(new se(i),0);let c=new He(pe);return this.Xr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Zr)),!0)},o),M.resolve(this.ni(c))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return M.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new qe(n,0),s=this.Xr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class I0{constructor(e){this.ii=e,this.docs=function(){return new Ve(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Cn();const o=n.path,c=new se(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||XA(YA(f),r)<=0||(s.has(f.key)||Aa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}si(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new w0(this)}getSize(e){return M.resolve(this.size)}}class w0 extends g0{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class A0{constructor(e){this.persistence=e,this.oi=new Vr(n=>Yl(n),Xl),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this._i=0,this.ai=new ru,this.targetCount=0,this.ui=fs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),M.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new fs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Tr(n),M.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ai.containsKey(n))}}/**
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
 */class qm{constructor(e,n){this.ci={},this.overlays={},this.li=new va(0),this.hi=!1,this.hi=!0,this.Pi=new E0,this.referenceDelegate=e(this),this.Ti=new A0(this),this.indexManager=new c0,this.remoteDocumentCache=function(s){return new I0(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new o0(n),this.Ei=new y0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new v0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new T0(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new R0(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return M.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class R0 extends ZA{constructor(e){super(),this.currentSequenceNumber=e}}class su{constructor(e){this.persistence=e,this.Vi=new ru,this.mi=null}static fi(e){return new su(e)}get gi(){if(this.mi)return this.mi;throw ae(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.gi,r=>{const s=se.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return M.or([()=>M.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Jo{constructor(e,n){this.persistence=e,this.yi=new Vr(r=>nR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=p0(this,n)}static fi(e,n){return new Jo(e,n)}di(){}Ai(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return M.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ao(e.data.value)),n}Dr(e,n,r){return M.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class iu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new iu(e,n.fromCache,r,s)}}/**
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
 */class b0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class S0{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return sT()?8:eR(ft())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new b0;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.fs)return this.Ds(e,n,o,c.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(zr()<=me.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),M.resolve()):(zr()<=me.DEBUG&&X("QueryEngine","Query:",Kr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(zr()<=me.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):M.resolve())}ws(e,n){if(Gf(n))return M.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Qc(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.ys.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.vs(n,c);return this.Cs(n,h,o,l.readTime)?this.ws(e,Qc(n,null,"F")):this.Fs(e,h,n,l)}))})))}bs(e,n,r,s){return Gf(n)||s.isEqual(le.min())?M.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(zr()<=me.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kr(n)),this.Fs(e,o,n,QA(s,pi)).next(c=>c))})}vs(e,n){let r=new He(Tm(e));return n.forEach((s,i)=>{Aa(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return zr()<=me.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.ys.getDocumentsMatchingQuery(e,n,tr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="LocalStore",P0=3e8;class C0{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Ve(pe),this.Os=new Vr(i=>Yl(i),Xl),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _0(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function k0(t,e,n,r){return new C0(t,e,n,r)}async function zm(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({ks:h,removedBatchIds:o,addedBatchIds:c}))})})}function O0(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let _=M.resolve();return g.forEach(k=>{_=_.next(()=>f.getEntry(l,k)).next(D=>{const C=h.docVersions.get(k);be(C!==null,48541),D.version.compareTo(C)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Km(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function D0(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ti.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(tt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(D,C,U){return D.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=P0?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(g,_,f)&&c.push(n.Ti.updateTargetData(i,_))});let l=Cn(),h=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(N0(i,o,e.documentUpdates).next(f=>{l=f.qs,h=f.Qs})),!r.isEqual(le.min())){const f=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return M.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.xs=s,i))}function N0(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Cn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(ou,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{qs:o,Qs:s}})}function V0(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function x0(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function el(t,e,n){const r=ue(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ts(o))throw o;X(ou,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function ad(t,e,n){const r=ue(t);let s=le.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=ue(l),g=p.Os.get(f);return g!==void 0?M.resolve(p.xs.get(g)):p.Ti.getTargetData(h,f)}(r,o,en(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:_e())).next(c=>(M0(r,IR(e),c),{documents:c,$s:i})))}function M0(t,e,n){let r=t.Ns.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class cd{constructor(){this.activeTargetIds=PR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class L0{constructor(){this.xo=new cd,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new cd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class U0{No(e){}shutdown(){}}/**
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
 */const ld="ConnectivityMonitor";class ud{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){X(ld,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){X(ld,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lo=null;function tl(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="RestConnection",F0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class B0{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===zo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=tl(),c=this.jo(e,n.toUriEncodedString());X(gc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(l,s,i);const{host:h}=new URL(c),f=Dr(h);return this.Jo(e,c,l,r,f).then(p=>(X(gc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw cs(gc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=F0[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class j0{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const it="WebChannelConnection";class $0 extends B0{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=tl();return new Promise((c,l)=>{const h=new Qg;h.setWithCredentials(!0),h.listenOnce(Yg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case wo.NO_ERROR:const p=h.getResponseJson();X(it,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case wo.TIMEOUT:X(it,`RPC '${e}' ${o} timed out`),l(new te(B.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const g=h.getStatus();if(X(it,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const k=_==null?void 0:_.error;if(k&&k.status&&k.message){const D=function(U){const F=U.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(F)>=0?F:B.UNKNOWN}(k.status);l(new te(D,k.message))}else l(new te(B.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new te(B.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{h_:e,streamId:o,P_:h.getLastErrorCode(),T_:h.getLastError()})}}finally{X(it,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);X(it,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}I_(e,n,r){const s=tl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Zg(),c=Jg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(it,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.E_(p);let g=!1,_=!1;const k=new j0({Zo:C=>{_?X(it,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(X(it,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(it,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Xo:()=>p.close()}),D=(C,U,F)=>{C.listen(U,$=>{try{F($)}catch(H){setTimeout(()=>{throw H},0)}})};return D(p,Hs.EventType.OPEN,()=>{_||(X(it,`RPC '${e}' stream ${s} transport opened.`),k.__())}),D(p,Hs.EventType.CLOSE,()=>{_||(_=!0,X(it,`RPC '${e}' stream ${s} transport closed`),k.u_(),this.d_(p))}),D(p,Hs.EventType.ERROR,C=>{_||(_=!0,cs(it,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),k.u_(new te(B.UNAVAILABLE,"The operation could not be completed")))}),D(p,Hs.EventType.MESSAGE,C=>{var U;if(!_){const F=C.data[0];be(!!F,16349);const $=F,H=($==null?void 0:$.error)||((U=$[0])===null||U===void 0?void 0:U.error);if(H){X(it,`RPC '${e}' stream ${s} received error:`,H);const ce=H.status;let he=function(I){const A=Fe[I];if(A!==void 0)return Nm(A)}(ce),w=H.message;he===void 0&&(he=B.INTERNAL,w="Unknown error status: "+ce+" with message "+H.message),_=!0,k.u_(new te(he,w)),p.close()}else X(it,`RPC '${e}' stream ${s} received:`,F),k.c_(F)}}),D(c,Xg.STAT_EVENT,C=>{C.stat===Hc.PROXY?X(it,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Hc.NOPROXY&&X(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.a_()},0),k}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){return new KR(t,!0)}/**
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
 */class Wm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const hd="PersistentStream";class Gm{constructor(e,n,r,s,i,o,c,l){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Wm(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{e(()=>{const s=new te(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return X(hd,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(X(hd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H0 extends Gm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=QR(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?nn(o.readTime):le.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=Zc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Gc(l)?{documents:JR(i,l)}:{query:ZR(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Mm(i,o.resumeToken);const h=Yc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(le.min())>0){c.readTime=Xo(i,o.snapshotVersion.toTimestamp());const h=Yc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=t0(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=Zc(this.serializer),n.removeTarget=e,this.Q_(n)}}class q0 extends Gm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=XR(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=Zc(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YR(this.serializer,r))};this.Q_(n)}}/**
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
 */class z0{}class K0 extends z0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Xc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(B.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Yo(e,Xc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(B.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class W0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Pn(n),this.ua=!1):X("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Cr="RemoteStore";class G0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{r.enqueueAndForget(async()=>{xr(this)&&(X(Cr,"Restarting streams for network reachability change."),await async function(l){const h=ue(l);h.da.add(4),await xi(h),h.Va.set("Unknown"),h.da.delete(4),await Ca(h)}(this))})}),this.Va=new W0(r,s)}}async function Ca(t){if(xr(t))for(const e of t.Aa)await e(!0)}async function xi(t){for(const e of t.Aa)await e(!1)}function Qm(t,e){const n=ue(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),uu(n)?lu(n):Is(n).N_()&&cu(n,e))}function au(t,e){const n=ue(t),r=Is(n);n.Ea.delete(e),r.N_()&&Ym(n,e),n.Ea.size===0&&(r.N_()?r.k_():xr(n)&&n.Va.set("Unknown"))}function cu(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).Z_(e)}function Ym(t,e){t.ma.Ke(e),Is(t).X_(e)}function lu(t){t.ma=new $R({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.Va.ca()}function uu(t){return xr(t)&&!Is(t).O_()&&t.Ea.size>0}function xr(t){return ue(t).da.size===0}function Xm(t){t.ma=void 0}async function Q0(t){t.Va.set("Online")}async function Y0(t){t.Ea.forEach((e,n)=>{cu(t,e)})}async function X0(t,e){Xm(t),uu(t)?(t.Va.Pa(e),lu(t)):t.Va.set("Unknown")}async function J0(t,e,n){if(t.Va.set("Online"),e instanceof xm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.ma.removeTarget(c))}(t,e)}catch(r){X(Cr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zo(t,r)}else if(e instanceof So?t.ma.Xe(e):e instanceof Vm?t.ma.ot(e):t.ma.nt(e),!n.isEqual(le.min()))try{const r=await Km(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.ma.It(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ea.get(l);if(!f)return;i.Ea.set(l,f.withResumeToken(tt.EMPTY_BYTE_STRING,f.snapshotVersion)),Ym(i,l);const p=new zn(f.target,l,h,f.sequenceNumber);cu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(Cr,"Failed to raise snapshot:",r),await Zo(t,r)}}async function Zo(t,e,n){if(!Ts(e))throw e;t.da.add(1),await xi(t),t.Va.set("Offline"),n||(n=()=>Km(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Cr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Ca(t)})}function Jm(t,e){return e().catch(n=>Zo(t,n,e))}async function ka(t){const e=ue(t),n=ir(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Wl;for(;Z0(e);)try{const s=await V0(e.localStore,r);if(s===null){e.Ia.length===0&&n.k_();break}r=s.batchId,eb(e,s)}catch(s){await Zo(e,s)}Zm(e)&&e_(e)}function Z0(t){return xr(t)&&t.Ia.length<10}function eb(t,e){t.Ia.push(e);const n=ir(t);n.N_()&&n.ea&&n.ta(e.mutations)}function Zm(t){return xr(t)&&!ir(t).O_()&&t.Ia.length>0}function e_(t){ir(t).start()}async function tb(t){ir(t).ia()}async function nb(t){const e=ir(t);for(const n of t.Ia)e.ta(n.mutations)}async function rb(t,e,n){const r=t.Ia.shift(),s=eu.from(r,e,n);await Jm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ka(t)}async function sb(t,e){e&&ir(t).ea&&await async function(r,s){if(function(o){return BR(o)&&o!==B.ABORTED}(s.code)){const i=r.Ia.shift();ir(r).L_(),await Jm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ka(r)}}(t,e),Zm(t)&&e_(t)}async function fd(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),X(Cr,"RemoteStore received new credentials");const r=xr(n);n.da.add(3),await xi(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Ca(n)}async function ib(t,e){const n=ue(t);e?(n.da.delete(2),await Ca(n)):e||(n.da.add(2),await xi(n),n.Va.set("Unknown"))}function Is(t){return t.fa||(t.fa=function(n,r,s){const i=ue(n);return i.oa(),new H0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:Q0.bind(null,t),n_:Y0.bind(null,t),i_:X0.bind(null,t),Y_:J0.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),uu(t)?lu(t):t.Va.set("Unknown")):(await t.fa.stop(),Xm(t))})),t.fa}function ir(t){return t.ga||(t.ga=function(n,r,s){const i=ue(n);return i.oa(),new q0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:tb.bind(null,t),i_:sb.bind(null,t),na:nb.bind(null,t),ra:rb.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await ka(t)):(await t.ga.stop(),t.Ia.length>0&&(X(Cr,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
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
 */class hu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new hu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fu(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Ts(t))return new te(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ss{static emptySet(e){return new ss(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class dd{constructor(){this.pa=new Ve(se.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):ae(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ds{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ds(e,n,ss.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ob{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class ab{constructor(){this.queries=pd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=pd(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new te(B.ABORTED,"Firestore shutting down"))}}function pd(){return new Vr(t=>Em(t),wa)}async function cb(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new ob,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=fu(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&du(n)}async function lb(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ub(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Ma(s)&&(r=!0);o.ba=s}}r&&du(n)}function hb(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function du(t){t.Ca.forEach(e=>{e.next()})}var nl,gd;(gd=nl||(nl={})).xa="default",gd.Cache="cache";class fb{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==nl.Cache}}/**
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
 */class t_{constructor(e){this.key=e}}class n_{constructor(e){this.key=e}}class db{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=_e(),this.mutatedKeys=_e(),this.Za=Tm(e),this.Xa=new ss(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new dd,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=Aa(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;g&&_?g.data.isEqual(_.data)?k!==D&&(r.track({type:3,doc:_}),C=!0):this.ru(g,_)||(r.track({type:2,doc:_}),C=!0,(l&&this.Za(_,l)>0||h&&this.Za(_,h)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),C=!0):g&&!_&&(r.track({type:1,doc:g}),C=!0,(l||h)&&(c=!0)),C&&(_?(o=o.add(_),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Xa:o,nu:r,Cs:c,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((f,p)=>function(_,k){const D=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Vt:C})}};return D(_)-D(k)}(f.type,p.type)||this.Za(f.doc,p.doc)),this.iu(r),s=s!=null&&s;const c=n&&!s?this.su():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Ja;return this.Ja=l,o.length!==0||h?{snapshot:new ds(this.query,e.Xa,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:c}:{ou:c}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new dd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=_e(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new n_(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new t_(r))}),n}au(e){this.Ha=e.$s,this.Ya=_e();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return ds.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const pu="SyncEngine";class pb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gb{constructor(e){this.key=e,this.cu=!1}}class mb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new Vr(c=>Em(c),wa),this.Pu=new Map,this.Tu=new Set,this.Iu=new Ve(se.comparator),this.Eu=new Map,this.du=new ru,this.Au={},this.Ru=new Map,this.Vu=fs.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function _b(t,e,n=!0){const r=c_(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await r_(r,e,n,!0),s}async function yb(t,e){const n=c_(t);await r_(n,e,!0,!1)}async function r_(t,e,n,r){const s=await x0(t.localStore,en(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await vb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Qm(t.remoteStore,s),c}async function vb(t,e,n,r,s){t.fu=(p,g,_)=>async function(D,C,U,F){let $=C.view.tu(U);$.Cs&&($=await ad(D.localStore,C.query,!1).then(({documents:w})=>C.view.tu(w,$)));const H=F&&F.targetChanges.get(C.targetId),ce=F&&F.targetMismatches.get(C.targetId)!=null,he=C.view.applyChanges($,D.isPrimaryClient,H,ce);return _d(D,C.targetId,he.ou),he.snapshot}(t,p,g,_);const i=await ad(t.localStore,e,!0),o=new db(e,i.$s),c=o.tu(i.documents),l=Vi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);_d(t,n,h.ou);const f=new pb(e,n,o);return t.hu.set(e,f),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),h.snapshot}async function Eb(t,e,n){const r=ue(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(o=>!wa(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await el(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&au(r.remoteStore,s.targetId),rl(r,s.targetId)}).catch(Es)):(rl(r,s.targetId),await el(r.localStore,s.targetId,!0))}async function Tb(t,e){const n=ue(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),au(n.remoteStore,r.targetId))}async function Ib(t,e,n){const r=Cb(t);try{const s=await function(o,c){const l=ue(o),h=$e.now(),f=c.reduce((_,k)=>_.add(k.key),_e());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let k=Cn(),D=_e();return l.Bs.getEntries(_,f).next(C=>{k=C,k.forEach((U,F)=>{F.isValidDocument()||(D=D.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,k)).next(C=>{p=C;const U=[];for(const F of c){const $=xR(F,p.get(F.key).overlayedDocument);$!=null&&U.push(new ur(F.key,$,dm($.value.mapValue),tn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,U,c)}).next(C=>{g=C;const U=C.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(_,C.batchId,U)})}).then(()=>({batchId:g.batchId,changes:wm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Au[o.currentUser.toKey()];h||(h=new Ve(pe)),h=h.insert(c,l),o.Au[o.currentUser.toKey()]=h}(r,s.batchId,n),await Mi(r,s.changes),await ka(r.remoteStore)}catch(s){const i=fu(s,"Failed to persist write");n.reject(i)}}async function s_(t,e){const n=ue(t);try{const r=await D0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.cu=!0:s.modifiedDocuments.size>0?be(o.cu,14607):s.removedDocuments.size>0&&(be(o.cu,42227),o.cu=!1))}),await Mi(n,r,e)}catch(r){await Es(r)}}function md(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,o)=>{const c=o.view.Fa(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ue(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.Fa(c)&&(h=!0)}),h&&du(l)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wb(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Ve(se.comparator);o=o.insert(i,ct.newNoDocument(i,le.min()));const c=_e().add(i),l=new Sa(le.min(),new Map,new Ve(pe),o,c);await s_(r,l),r.Iu=r.Iu.remove(i),r.Eu.delete(e),gu(r)}else await el(r.localStore,e,!1).then(()=>rl(r,e,n)).catch(Es)}async function Ab(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await O0(n.localStore,e);o_(n,r,null),i_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mi(n,s)}catch(s){await Es(s)}}async function Rb(t,e,n){const r=ue(t);try{const s=await function(o,c){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(be(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);o_(r,e,n),i_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Mi(r,s)}catch(s){await Es(s)}}function i_(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function o_(t,e,n){const r=ue(t);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function rl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||a_(t,r)})}function a_(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(au(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),gu(t))}function _d(t,e,n){for(const r of n)r instanceof t_?(t.du.addReference(r.key,e),bb(t,r)):r instanceof n_?(X(pu,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||a_(t,r.key)):ae(19791,{pu:r})}function bb(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(X(pu,"New document in limbo: "+n),t.Tu.add(r),gu(t))}function gu(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new se(Me.fromString(e)),r=t.Vu.next();t.Eu.set(r,new gb(n)),t.Iu=t.Iu.insert(n,r),Qm(t.remoteStore,new zn(en(Jl(n.path)),r,"TargetPurposeLimboResolution",va.le))}}async function Mi(t,e,n){const r=ue(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach((c,l)=>{o.push(r.fu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=iu.Rs(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.lu.Y_(s),await async function(l,h){const f=ue(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.ds,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>M.forEach(g.As,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Ts(p))throw p;X(ou,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.xs.get(g),k=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(k);f.xs=f.xs.insert(g,D)}}}(r.localStore,i))}async function Sb(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){X(pu,"User change. New user:",e.toKey());const r=await zm(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(c=>{c.forEach(l=>{l.reject(new te(B.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mi(n,r.ks)}}function Pb(t,e){const n=ue(t),r=n.Eu.get(e);if(r&&r.cu)return _e().add(r.key);{let s=_e();const i=n.Pu.get(e);if(!i)return s;for(const o of i){const c=n.hu.get(o);s=s.unionWith(c.view.eu)}return s}}function c_(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=s_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wb.bind(null,e),e.lu.Y_=ub.bind(null,e.eventManager),e.lu.gu=hb.bind(null,e.eventManager),e}function Cb(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ab.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Rb.bind(null,e),e}class ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return k0(this.persistence,new S0,e.initialUser,this.serializer)}Su(e){return new qm(su.fi,this.serializer)}bu(e){return new L0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ea.provider={build:()=>new ea};class kb extends ea{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){be(this.persistence.referenceDelegate instanceof Jo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new f0(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new qm(r=>Jo.fi(r,n),this.serializer)}}class sl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>md(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sb.bind(null,this.syncEngine),await ib(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ab}()}createDatastore(e){const n=Pa(e.databaseInfo.databaseId),r=function(i){return new $0(i)}(e.databaseInfo);return function(i,o,c,l){return new K0(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new G0(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>md(this.syncEngine,n,0),function(){return ud.C()?new ud:new U0}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new mb(s,i,o,c,l,h);return f&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);X(Cr,"RemoteStore shutting down."),i.da.add(5),await xi(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sl.provider={build:()=>new sl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ob{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const or="FirestoreClient";class Db{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=rm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _c(t,e){t.asyncQueue.verifyOperationInProgress(),X(or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Nb(t);X(or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>fd(e.remoteStore,s)),t._onlineComponents=e}async function Nb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(or,"Using user provided OfflineComponentProvider");try{await _c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;cs("Error using user provided cache. Falling back to memory cache: "+n),await _c(t,new ea)}}else X(or,"Using default OfflineComponentProvider"),await _c(t,new kb(void 0));return t._offlineComponents}async function l_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(or,"Using user provided OnlineComponentProvider"),await yd(t,t._uninitializedComponentsProvider._online)):(X(or,"Using default OnlineComponentProvider"),await yd(t,new sl))),t._onlineComponents}function Vb(t){return l_(t).then(e=>e.syncEngine)}async function xb(t){const e=await l_(t),n=e.eventManager;return n.onListen=_b.bind(null,e.syncEngine),n.onUnlisten=Eb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Tb.bind(null,e.syncEngine),n}function Mb(t,e,n={}){const r=new Yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new Ob({next:g=>{f.xu(),o.enqueueAndForget(()=>lb(i,p));const _=g.docs.has(c);!_&&g.fromCache?h.reject(new te(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&l&&l.source==="server"?h.reject(new te(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new fb(Jl(c.path),f,{includeMetadataChanges:!0,Qa:!0});return cb(i,p)}(await xb(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function u_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=new Map;/**
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
 */function Lb(t,e,n){if(!n)throw new te(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ub(t,e,n,r){if(e===!0&&r===!0)throw new te(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ed(t){if(!se.isDocumentKey(t))throw new te(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mu(t);throw new te(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="firestore.googleapis.com",Td=!0;class Id{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=h_,this.ssl=Td}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Td;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<u0)throw new te(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ub("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _u{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Id({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Id(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BA;switch(r.type){case"firstParty":return new qA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vd.get(n);r&&(X("ComponentProvider","Removing Datastore"),vd.delete(n),r.terminate())}(this),Promise.resolve()}}function Fb(t,e,n,r={}){var s;t=kr(t,_u);const i=Dr(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(kl(`https://${l}`),Ol("Firestore",!0)),o.host!==h_&&o.host!==l&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!Ar(h,c)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ot.MOCK_USER;else{f=lg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new te(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(g)}t._authCredentials=new jA(new tm(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yu(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Ei extends yu{constructor(e,n,r){super(e,n,Jl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new se(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function jr(t,e,...n){if(t=ze(t),arguments.length===1&&(e=rm.newId()),Lb("doc","path",e),t instanceof _u){const r=Me.fromString(e,...n);return Ed(r),new Ct(t,null,new se(r))}{if(!(t instanceof Ct||t instanceof Ei))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Ed(r),new Ct(t.firestore,t instanceof Ei?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="AsyncQueue";class Ad{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Wm(this,"async_queue_retry"),this.rc=()=>{const r=mc();r&&X(wd,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new Yn;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Ts(e))throw e;X(wd,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,Pn("INTERNAL UNHANDLED ERROR: ",Rd(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const s=hu.createAndSchedule(this,e,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&ae(47125,{cc:Rd(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function Rd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Oa extends _u{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ad,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ad(e),this._firestoreClient=void 0,await e}}}function Bb(t,e){const n=typeof t=="object"?t:Vl(),r=typeof t=="string"?t:zo,s=ga(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=og("firestore");i&&Fb(s,...i)}return s}function f_(t){if(t._terminated)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jb(t),t._firestoreClient}function jb(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new iR(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,u_(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Db(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ps(tt.fromBase64String(e))}catch(n){throw new te(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ps(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this._methodName=e}}/**
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
 */class Eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */class Tu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const $b=/^__.*__$/;class Hb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ni(e,this.data,n,this.fieldTransforms)}}class d_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function p_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{Ic:t})}}class Iu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Iu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return ta(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(p_(this.Ic)&&$b.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class qb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pa(e)}bc(e,n,r,s=!1){return new Iu({Ic:e,methodName:n,wc:r,path:et.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function g_(t){const e=t._freezeSettings(),n=Pa(t._databaseId);return new qb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zb(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);wu("Data must be an object, but it was:",o,r);const c=m_(r,o);let l,h;if(i.merge)l=new Pt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=il(e,p,n);if(!o.contains(g))throw new te(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);y_(f,g)||f.push(g)}l=new Pt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new Hb(new Tt(c),l,h)}class Na extends vu{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Na}}function Kb(t,e,n,r){const s=t.bc(1,e,n);wu("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();lr(r,(l,h)=>{const f=Au(e,l,n);h=ze(h);const p=s.mc(f);if(h instanceof Na)i.push(f);else{const g=Va(h,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new Pt(i);return new d_(o,c,s.fieldTransforms)}function Wb(t,e,n,r,s,i){const o=t.bc(1,e,n),c=[il(e,r,n)],l=[s];if(i.length%2!=0)throw new te(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(il(e,i[g])),l.push(i[g+1]);const h=[],f=Tt.empty();for(let g=c.length-1;g>=0;--g)if(!y_(h,c[g])){const _=c[g];let k=l[g];k=ze(k);const D=o.mc(_);if(k instanceof Na)h.push(_);else{const C=Va(k,D);C!=null&&(h.push(_),f.set(_,C))}}const p=new Pt(h);return new d_(f,p,o.fieldTransforms)}function Va(t,e){if(__(t=ze(t)))return wu("Unsupported field value:",e,t),m_(t,e);if(t instanceof vu)return function(r,s){if(!p_(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Va(c,s.fc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:Xo(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xo(s.serializer,i)}}if(r instanceof Eu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ps)return{bytesValue:Mm(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tu)return function(o,c){return{mapValue:{fields:{[hm]:{stringValue:fm},[Ko]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.gc("VectorValues must only contain numeric values.");return Zl(c.serializer,h)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${mu(r)}`)}(t,e)}function m_(t,e){const n={};return im(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lr(t,(r,s)=>{const i=Va(s,e.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function __(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof Eu||t instanceof ps||t instanceof Ct||t instanceof vu||t instanceof Tu)}function wu(t,e,n){if(!__(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=mu(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function il(t,e,n){if((e=ze(e))instanceof Da)return e._internalPath;if(typeof e=="string")return Au(t,e);throw ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gb=new RegExp("[~\\*/\\[\\]]");function Au(t,e,n){if(e.search(Gb)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Da(...e.split("."))._internalPath}catch{throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ta(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new te(B.INVALID_ARGUMENT,c+t+l)}function y_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(E_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qb extends v_{data(){return super.data()}}function E_(t,e){return typeof e=="string"?Au(t,e):e instanceof Da?e._internalPath:e._delegate._internalPath}class Yb{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ko].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Le(o.doubleValue));return new Tu(i)}convertGeoPoint(e){return new Eu(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ta(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gi(e));default:return null}}convertTimestamp(e){const n=nr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);be($m(r),9688,{name:e});const s=new mi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class T_ extends v_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zb(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(E_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zb extends T_{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t){t=kr(t,Ct);const e=kr(t.firestore,Oa);return Mb(f_(e),t._key).then(n=>nS(e,t,n))}class eS extends Yb{constructor(e){super(),this.firestore=e}convertBytes(e){return new ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function yc(t,e,n){t=kr(t,Ct);const r=kr(t.firestore,Oa),s=Xb(t.converter,e);return I_(r,[zb(g_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tn.none())])}function tS(t,e,n,...r){t=kr(t,Ct);const s=kr(t.firestore,Oa),i=g_(s);let o;return o=typeof(e=ze(e))=="string"||e instanceof Da?Wb(i,"updateDoc",t._key,e,n,r):Kb(i,"updateDoc",t._key,e),I_(s,[o.toMutation(t._key,tn.exists(!0))])}function I_(t,e){return function(r,s){const i=new Yn;return r.asyncQueue.enqueueAndForget(async()=>Ib(await Vb(r),s,i)),i.promise}(f_(t),e)}function nS(t,e,n){const r=n.docs.get(e._key),s=new eS(t);return new T_(t,s,e._key,r,new Jb(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){vs=s})(Nr),Rr(new er("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Oa(new $A(r.getProvider("auth-internal")),new zA(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mi(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Jt(Of,Df,e),Jt(Of,Df,"esm2017")})();var rS="firebase",sS="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(rS,sS,"app");/**
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
 */const w_="firebasestorage.googleapis.com",iS="storageBucket",oS=2*60*1e3,aS=10*60*1e3;/**
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
 */class un extends ln{constructor(e,n,r=0){super(vc(e),`Firebase Storage: ${n} (${vc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var cn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(cn||(cn={}));function vc(t){return"storage/"+t}function cS(){const t="An unknown error occurred, please check the error payload for server response.";return new un(cn.UNKNOWN,t)}function lS(){return new un(cn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function uS(){return new un(cn.CANCELED,"User canceled the upload/download.")}function hS(t){return new un(cn.INVALID_URL,"Invalid URL '"+t+"'.")}function fS(t){return new un(cn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Sd(t){return new un(cn.INVALID_ARGUMENT,t)}function A_(){return new un(cn.APP_DELETED,"The Firebase app was deleted.")}function dS(t){return new un(cn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw fS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(H){H.path_=decodeURIComponent(H.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),k={bucket:1,path:3},D=n===w_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",U=new RegExp(`^https?://${D}/${s}/${C}`,"i"),$=[{regex:c,indices:l,postModify:i},{regex:_,indices:k,postModify:h},{regex:U,indices:{bucket:1,path:2},postModify:h}];for(let H=0;H<$.length;H++){const ce=$[H],he=ce.regex.exec(e);if(he){const w=he[ce.indices.bucket];let v=he[ce.indices.path];v||(v=""),r=new jt(w,v),ce.postModify(r);break}}if(r==null)throw hS(e);return r}}class pS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function gS(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...C){h||(h=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,t(_,l())},C)}function g(){i&&clearTimeout(i)}function _(C,...U){if(h){g();return}if(C){g(),f.call(null,C,...U);return}if(l()||o){g(),f.call(null,C,...U);return}r<64&&(r*=2);let $;c===1?(c=2,$=0):$=(r+Math.random())*1e3,p($)}let k=!1;function D(C){k||(k=!0,g(),!h&&(s!==null?(C||(c=2),clearTimeout(s),p(0)):C||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},n),D}function mS(t){t(!1)}/**
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
 */function _S(t){return t!==void 0}function Pd(t,e,n,r){if(r<e)throw Sd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Sd(`Invalid value for '${t}'. Expected ${n} or less.`)}function yS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var na;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(na||(na={}));/**
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
 */function vS(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class ES{constructor(e,n,r,s,i,o,c,l,h,f,p,g=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,D)=>{this.resolve_=k,this.reject_=D,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new uo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===na.NO_ERROR,l=i.getStatus();if(!c||vS(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===na.ABORT;r(!1,new uo(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new uo(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());_S(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=cS();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?A_():uS();o(l)}else{const l=lS();o(l)}};this.canceled_?n(!1,new uo(!1,null,!0)):this.backoffId_=gS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class uo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function TS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function RS(t,e,n,r,s,i,o=!0,c=!1){const l=yS(t.urlParams),h=t.url+l,f=Object.assign({},t.headers);return wS(f,e),TS(f,n),IS(f,i),AS(f,r),new ES(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
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
 */function bS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function SS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ra{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ra(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return SS(this._location.path)}get storage(){return this._service}get parent(){const e=bS(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new ra(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dS(e)}}function Cd(t,e){const n=e==null?void 0:e[iS];return n==null?null:jt.makeFromBucketSpec(n,t)}function PS(t,e,n,r={}){t.host=`${e}:${n}`;const s=Dr(e);s&&(kl(`https://${t.host}/b`),Ol("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:lg(i,t.app.options.projectId))}class CS{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=w_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oS,this._maxUploadRetryTime=aS,this._requests=new Set,s!=null?this._bucket=jt.makeFromBucketSpec(s,this._host):this._bucket=Cd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=Cd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ra(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new pS(A_());{const o=RS(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const kd="@firebase/storage",Od="0.13.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="storage";function kS(t=Vl(),e){t=ze(t);const r=ga(t,R_).getImmediate({identifier:e}),s=og("storage");return s&&OS(r,...s),r}function OS(t,e,n,r={}){PS(t,e,n,r)}function DS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new CS(n,r,s,e,Nr)}function NS(){Rr(new er(R_,DS,"PUBLIC").setMultipleInstances(!0)),Jt(kd,Od,""),Jt(kd,Od,"esm2017")}NS();const VS={apiKey:"your-api-key",authDomain:"your-project.firebaseapp.com",projectId:"your-project-id",storageBucket:"your-project.appspot.com",messagingSenderId:"123456789",appId:"your-app-id"},Ru=fg(VS),Us=UA(Ru),$r=Bb(Ru);kS(Ru);const b_=new En;b_.setCustomParameters({prompt:"select_account"});class Hr{static async loginWithEmail(e){try{const n=await Tw(Us,e.email,e.password);return{success:!0,data:await this.getUserData(n.user)}}catch(n){return{success:!1,error:this.getErrorMessage(n.code)}}}static async loginWithGoogle(){try{const n=(await Ww(Us,b_)).user;if((await bd(jr($r,"users",n.uid))).exists())return{success:!0,data:await this.getUserData(n)};{const s={uid:n.uid,email:n.email,displayName:n.displayName||"",photoURL:n.photoURL||void 0,userType:"teacher",createdAt:new Date,updatedAt:new Date};return await yc(jr($r,"users",n.uid),s),{success:!0,data:s}}}catch(e){return{success:!1,error:this.getErrorMessage(e.code)}}}static async register(e){try{if(e.password!==e.confirmPassword)return{success:!1,error:"As senhas não coincidem"};const r=(await Ew(Us,e.email,e.password)).user;await ww(r,{displayName:e.name});const s={uid:r.uid,email:e.email,displayName:e.name,userType:e.userType,profile:{name:e.name,area:e.area,network:e.network},createdAt:new Date,updatedAt:new Date};return await yc(jr($r,"users",r.uid),s),{success:!0,data:s}}catch(n){return{success:!1,error:this.getErrorMessage(n.code)}}}static async logout(){try{return await Sw(Us),{success:!0}}catch{return{success:!1,error:"Erro ao fazer logout"}}}static async getUserData(e){var r,s;const n=await bd(jr($r,"users",e.uid));if(n.exists()){const i=n.data();return{...i,createdAt:((r=i.createdAt)==null?void 0:r.toDate())||new Date,updatedAt:((s=i.updatedAt)==null?void 0:s.toDate())||new Date}}else{const i={uid:e.uid,email:e.email,displayName:e.displayName||"",photoURL:e.photoURL||void 0,userType:"teacher",createdAt:new Date,updatedAt:new Date};return await yc(jr($r,"users",e.uid),i),i}}static async updateUserProfile(e,n){try{return await tS(jr($r,"users",e),{profile:n,updatedAt:new Date}),{success:!0}}catch{return{success:!1,error:"Erro ao atualizar perfil"}}}static onAuthStateChange(e){return bw(Us,async n=>{if(n){const r=await this.getUserData(n);e(r)}else e(null)})}static getErrorMessage(e){return{"auth/user-not-found":"Usuário não encontrado","auth/wrong-password":"Senha incorreta","auth/email-already-in-use":"Este email já está em uso","auth/weak-password":"A senha deve ter pelo menos 6 caracteres","auth/invalid-email":"Email inválido","auth/user-disabled":"Usuário desabilitado","auth/too-many-requests":"Muitas tentativas. Tente novamente mais tarde","auth/network-request-failed":"Erro de conexão. Verifique sua internet","auth/popup-closed-by-user":"Login cancelado pelo usuário","auth/cancelled-popup-request":"Login cancelado","auth/popup-blocked":"Popup bloqueado pelo navegador"}[e]||"Erro desconhecido. Tente novamente"}}const Ye=Ai({user:null,loading:!0,error:null});function S_(){const t=Ze(()=>!!Ye.user),e=Ze(()=>{var C;return((C=Ye.user)==null?void 0:C.userType)==="admin"}),n=Ze(()=>{var C;return((C=Ye.user)==null?void 0:C.userType)==="teacher"}),r=Ze(()=>Ye.user),s=Ze(()=>Ye.loading),i=Ze(()=>Ye.error),o=C=>{Ye.user=C,Ye.loading=!1,Ye.error=null},c=C=>{Ye.loading=C},l=C=>{Ye.error=C},h=()=>{Ye.error=null};return{user:r,isAuthenticated:t,isAdmin:e,isTeacher:n,isLoading:s,error:i,login:async C=>{c(!0),h();const U=await Hr.loginWithEmail(C);return U.success?(o(U.data),{success:!0}):(l(U.error),c(!1),{success:!1,error:U.error})},loginWithGoogle:async()=>{c(!0),h();const C=await Hr.loginWithGoogle();return C.success?(o(C.data),{success:!0}):(l(C.error),c(!1),{success:!1,error:C.error})},register:async C=>{c(!0),h();const U=await Hr.register(C);return U.success?(o(U.data),{success:!0}):(l(U.error),c(!1),{success:!1,error:U.error})},logout:async()=>{c(!0);const C=await Hr.logout();return C.success?o(null):(l(C.error),c(!1)),C},updateProfile:async C=>{if(!Ye.user)return{success:!1,error:"Usuário não autenticado"};c(!0),h();const U=await Hr.updateUserProfile(Ye.user.uid,C);return U.success?(Ye.user.profile={...Ye.user.profile,...C},Ye.user.updatedAt=new Date):l(U.error),c(!1),U},initAuth:()=>Hr.onAuthStateChange(C=>{o(C)}),setError:l,clearError:h}}const xS={id:"app"},MS={key:0,class:"loading-screen"},LS=bl({__name:"App",setup(t){const{isLoading:e,initAuth:n}=S_();return Pp(()=>{n()}),(r,s)=>{const i=_v("router-view");return mo(),Vh("div",xS,[Ir(e)?(mo(),Vh("div",MS,s[0]||(s[0]=[Jv('<div class="loading-content"><div class="logo gradient-bg animate-pulse"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"></path></svg></div><h1 class="gradient-text">Social Teachers</h1><div class="spinner"></div><p>Carregando...</p></div>',1)]))):(mo(),Gp(i,{key:1}))])}}}),US="modulepreload",FS=function(t){return"/"+t},Dd={},Li=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(h=>{if(h=FS(h),h in Dd)return;Dd[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":US,f||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((_,k)=>{g.addEventListener("load",_),g.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Qr=typeof document<"u";function P_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function BS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&P_(t.default)}const we=Object.assign;function Ec(t,e){const n={};for(const r in e){const s=e[r];n[r]=qt(s)?s.map(t):t(s)}return n}const ii=()=>{},qt=Array.isArray,C_=/#/g,jS=/&/g,$S=/\//g,HS=/=/g,qS=/\?/g,k_=/\+/g,zS=/%5B/g,KS=/%5D/g,O_=/%5E/g,WS=/%60/g,D_=/%7B/g,GS=/%7C/g,N_=/%7D/g,QS=/%20/g;function bu(t){return encodeURI(""+t).replace(GS,"|").replace(zS,"[").replace(KS,"]")}function YS(t){return bu(t).replace(D_,"{").replace(N_,"}").replace(O_,"^")}function ol(t){return bu(t).replace(k_,"%2B").replace(QS,"+").replace(C_,"%23").replace(jS,"%26").replace(WS,"`").replace(D_,"{").replace(N_,"}").replace(O_,"^")}function XS(t){return ol(t).replace(HS,"%3D")}function JS(t){return bu(t).replace(C_,"%23").replace(qS,"%3F")}function ZS(t){return t==null?"":JS(t).replace($S,"%2F")}function Ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const eP=/\/$/,tP=t=>t.replace(eP,"");function Tc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=iP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ti(o)}}function nP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gs(e.matched[r],n.matched[s])&&V_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function V_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sP(t[n],e[n]))return!1;return!0}function sP(t,e){return qt(t)?Vd(t,e):qt(e)?Vd(e,t):t===e}function Vd(t,e){return qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function iP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ii;(function(t){t.pop="pop",t.push="push"})(Ii||(Ii={}));var oi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(oi||(oi={}));function oP(t){if(!t)if(Qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tP(t)}const aP=/^[^#]+#/;function cP(t,e){return t.replace(aP,"#")+e}function lP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xa=()=>({left:window.scrollX,top:window.scrollY});function uP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=lP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xd(t,e){return(history.state?history.state.position-e:-1)+t}const al=new Map;function hP(t,e){al.set(t,e)}function fP(t){const e=al.get(t);return al.delete(t),e}let dP=()=>location.protocol+"//"+location.host;function x_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Nd(l,"")}return Nd(n,t)+r+s}function pP(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=x_(t,location),k=n.value,D=e.value;let C=0;if(g){if(n.value=_,e.value=g,o&&o===k){o=null;return}C=D?g.position-D.position:0}else r(_);s.forEach(U=>{U(n.value,k,{delta:C,type:Ii.pop,direction:C?C>0?oi.forward:oi.back:oi.unknown})})};function l(){o=n.value}function h(g){s.push(g);const _=()=>{const k=s.indexOf(g);k>-1&&s.splice(k,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(we({},g.state,{scroll:xa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Md(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?xa():null}}function gP(t){const{history:e,location:n}=window,r={value:x_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:dP()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(l,h){const f=we({},e.state,Md(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=we({},s.value,e.state,{forward:l,scroll:xa()});i(f.current,f,!0);const p=we({},Md(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function mP(t){t=oP(t);const e=gP(t),n=pP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:cP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _P(t){return typeof t=="string"||t&&typeof t=="object"}function M_(t){return typeof t=="string"||typeof t=="symbol"}const L_=Symbol("");var Ld;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ld||(Ld={}));function ms(t,e){return we(new Error,{type:t,[L_]:!0},e)}function pn(t,e){return t instanceof Error&&L_ in t&&(e==null||!!(t.type&e))}const Ud="[^/]+?",yP={sensitive:!1,strict:!1,start:!0,end:!0},vP=/[.+*?^${}()[\]/\\]/g;function EP(t,e){const n=we({},yP,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(vP,"\\$&"),_+=40;else if(g.type===1){const{value:k,repeatable:D,optional:C,regexp:U}=g;i.push({name:k,repeatable:D,optional:C});const F=U||Ud;if(F!==Ud){_+=10;try{new RegExp(`(${F})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${k}" (${F}): `+H.message)}}let $=D?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||($=C&&h.length<2?`(?:/${$})`:"/"+$),C&&($+="?"),s+=$,_+=20,C&&(_+=-8),D&&(_+=-20),F===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",k=i[g-1];p[k.name]=_&&k.repeatable?_.split("/"):_}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:k,repeatable:D,optional:C}=_,U=k in h?h[k]:"";if(qt(U)&&!D)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const F=qt(U)?U.join("/"):U;if(!F)if(C)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function TP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function U_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=TP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Fd(r))return 1;if(Fd(s))return-1}return s.length-r.length}function Fd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const IP={type:0,value:""},wP=/[a-zA-Z0-9_]/;function AP(t){if(!t)return[[]];if(t==="/")return[[IP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:wP.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function RP(t,e,n){const r=EP(AP(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function bP(t,e){const n=[],r=new Map;e=Hd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const k=!_,D=jd(p);D.aliasOf=_&&_.record;const C=Hd(e,p),U=[D];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of H)U.push(jd(we({},D,{components:_?_.record.components:D.components,path:ce,aliasOf:_?_.record:D})))}let F,$;for(const H of U){const{path:ce}=H;if(g&&ce[0]!=="/"){const he=g.record.path,w=he[he.length-1]==="/"?"":"/";H.path=g.record.path+(ce&&w+ce)}if(F=RP(H,g,C),_?_.alias.push(F):($=$||F,$!==F&&$.alias.push(F),k&&p.name&&!$d(F)&&o(p.name)),F_(F)&&l(F),D.children){const he=D.children;for(let w=0;w<he.length;w++)i(he[w],F,_&&_.children[w])}_=_||F}return $?()=>{o($)}:ii}function o(p){if(M_(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=CP(p,n);n.splice(g,0,p),p.record.name&&!$d(p)&&r.set(p.record.name,p)}function h(p,g){let _,k={},D,C;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ms(1,{location:p});C=_.record.name,k=we(Bd(g.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&Bd(p.params,_.keys.map($=>$.name))),D=_.stringify(k)}else if(p.path!=null)D=p.path,_=n.find($=>$.re.test(D)),_&&(k=_.parse(D),C=_.record.name);else{if(_=g.name?r.get(g.name):n.find($=>$.re.test(g.path)),!_)throw ms(1,{location:p,currentLocation:g});C=_.record.name,k=we({},g.params,p.params),D=_.stringify(k)}const U=[];let F=_;for(;F;)U.unshift(F.record),F=F.parent;return{name:C,path:D,params:k,matched:U,meta:PP(U)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Bd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:SP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function SP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $d(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PP(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Hd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function CP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;U_(t,e[i])<0?r=i:n=i+1}const s=kP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function kP(t){let e=t;for(;e=e.parent;)if(F_(e)&&U_(t,e)===0)return e}function F_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function OP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(k_," "),o=i.indexOf("="),c=Ti(o<0?i:i.slice(0,o)),l=o<0?null:Ti(i.slice(o+1));if(c in e){let h=e[c];qt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function qd(t){let e="";for(let n in t){const r=t[n];if(n=XS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qt(r)?r.map(i=>i&&ol(i)):[r&&ol(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function DP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const NP=Symbol(""),zd=Symbol(""),Ma=Symbol(""),B_=Symbol(""),cl=Symbol("");function Fs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(ms(4,{from:n,to:e})):g instanceof Error?l(g):_P(g)?l(ms(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function Ic(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(P_(l)){const f=(l.__vccOpts||l)[e];f&&i.push(jn(f,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=BS(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&jn(_,n,r,o,c,s)()}))}}return i}function Kd(t){const e=Xt(Ma),n=Xt(B_),r=Ze(()=>{const l=Ir(t.to);return e.resolve(l)}),s=Ze(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(gs.bind(null,f));if(g>-1)return g;const _=Wd(l[h-2]);return h>1&&Wd(f)===_&&p[p.length-1].path!==_?p.findIndex(gs.bind(null,l[h-2])):g}),i=Ze(()=>s.value>-1&&UP(n.params,r.value.params)),o=Ze(()=>s.value>-1&&s.value===n.matched.length-1&&V_(n.params,r.value.params));function c(l={}){if(LP(l)){const h=e[Ir(t.replace)?"replace":"push"](Ir(t.to)).catch(ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function VP(t){return t.length===1?t[0]:t}const xP=bl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Kd,setup(t,{slots:e}){const n=Ai(Kd(t)),{options:r}=Xt(Ma),s=Ze(()=>({[Gd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&VP(e.default(n));return t.custom?i:Zp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),MP=xP;function LP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gd=(t,e,n)=>t??e??n,FP=bl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xt(cl),s=Ze(()=>t.route||r.value),i=Xt(zd,0),o=Ze(()=>{let h=Ir(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Ze(()=>s.value.matched[o.value]);fo(zd,Ze(()=>o.value+1)),fo(NP,c),fo(cl,s);const l=zy();return po(()=>[l.value,c.value,t.name],([h,f,p],[g,_,k])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!gs(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return Qd(n.default,{Component:g,route:h});const _=p.props[f],k=_?_===!0?h.params:typeof _=="function"?_(h):_:null,C=Zp(g,we({},k,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Qd(n.default,{Component:C,route:h})||C}}});function Qd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const BP=FP;function jP(t){const e=bP(t.routes,t),n=t.parseQuery||OP,r=t.stringifyQuery||qd,s=t.history,i=Fs(),o=Fs(),c=Fs(),l=Ky(Un);let h=Un;Qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ec.bind(null,N=>""+N),p=Ec.bind(null,ZS),g=Ec.bind(null,Ti);function _(N,Y){let Q,J;return M_(N)?(Q=e.getRecordMatcher(N),J=Y):J=N,e.addRoute(J,Q)}function k(N){const Y=e.getRecordMatcher(N);Y&&e.removeRoute(Y)}function D(){return e.getRoutes().map(N=>N.record)}function C(N){return!!e.getRecordMatcher(N)}function U(N,Y){if(Y=we({},Y||l.value),typeof N=="string"){const b=Tc(n,N,Y.path),V=e.resolve({path:b.path},Y),L=s.createHref(b.fullPath);return we(b,V,{params:g(V.params),hash:Ti(b.hash),redirectedFrom:void 0,href:L})}let Q;if(N.path!=null)Q=we({},N,{path:Tc(n,N.path,Y.path).path});else{const b=we({},N.params);for(const V in b)b[V]==null&&delete b[V];Q=we({},N,{params:p(b)}),Y.params=p(Y.params)}const J=e.resolve(Q,Y),Te=N.hash||"";J.params=f(g(J.params));const y=nP(r,we({},N,{hash:YS(Te),path:J.path})),E=s.createHref(y);return we({fullPath:y,hash:Te,query:r===qd?DP(N.query):N.query||{}},J,{redirectedFrom:void 0,href:E})}function F(N){return typeof N=="string"?Tc(n,N,l.value.path):we({},N)}function $(N,Y){if(h!==N)return ms(8,{from:Y,to:N})}function H(N){return w(N)}function ce(N){return H(we(F(N),{replace:!0}))}function he(N){const Y=N.matched[N.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let J=typeof Q=="function"?Q(N):Q;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=F(J):{path:J},J.params={}),we({query:N.query,hash:N.hash,params:J.path!=null?{}:N.params},J)}}function w(N,Y){const Q=h=U(N),J=l.value,Te=N.state,y=N.force,E=N.replace===!0,b=he(Q);if(b)return w(we(F(b),{state:typeof b=="object"?we({},Te,b.state):Te,force:y,replace:E}),Y||Q);const V=Q;V.redirectedFrom=Y;let L;return!y&&rP(r,J,Q)&&(L=ms(16,{to:V,from:J}),Ot(J,J,!0,!1)),(L?Promise.resolve(L):A(V,J)).catch(x=>pn(x)?pn(x,2)?x:Ut(x):ge(x,V,J)).then(x=>{if(x){if(pn(x,2))return w(we({replace:E},F(x.to),{state:typeof x.to=="object"?we({},Te,x.to.state):Te,force:y}),Y||V)}else x=S(V,J,!0,E,Te);return R(V,J,x),x})}function v(N,Y){const Q=$(N,Y);return Q?Promise.reject(Q):Promise.resolve()}function I(N){const Y=Dn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(N):N()}function A(N,Y){let Q;const[J,Te,y]=$P(N,Y);Q=Ic(J.reverse(),"beforeRouteLeave",N,Y);for(const b of J)b.leaveGuards.forEach(V=>{Q.push(jn(V,N,Y))});const E=v.bind(null,N,Y);return Q.push(E),_t(Q).then(()=>{Q=[];for(const b of i.list())Q.push(jn(b,N,Y));return Q.push(E),_t(Q)}).then(()=>{Q=Ic(Te,"beforeRouteUpdate",N,Y);for(const b of Te)b.updateGuards.forEach(V=>{Q.push(jn(V,N,Y))});return Q.push(E),_t(Q)}).then(()=>{Q=[];for(const b of y)if(b.beforeEnter)if(qt(b.beforeEnter))for(const V of b.beforeEnter)Q.push(jn(V,N,Y));else Q.push(jn(b.beforeEnter,N,Y));return Q.push(E),_t(Q)}).then(()=>(N.matched.forEach(b=>b.enterCallbacks={}),Q=Ic(y,"beforeRouteEnter",N,Y,I),Q.push(E),_t(Q))).then(()=>{Q=[];for(const b of o.list())Q.push(jn(b,N,Y));return Q.push(E),_t(Q)}).catch(b=>pn(b,8)?b:Promise.reject(b))}function R(N,Y,Q){c.list().forEach(J=>I(()=>J(N,Y,Q)))}function S(N,Y,Q,J,Te){const y=$(N,Y);if(y)return y;const E=Y===Un,b=Qr?history.state:{};Q&&(J||E?s.replace(N.fullPath,we({scroll:E&&b&&b.scroll},Te)):s.push(N.fullPath,Te)),l.value=N,Ot(N,Y,Q,E),Ut()}let T;function dt(){T||(T=s.listen((N,Y,Q)=>{if(!zt.listening)return;const J=U(N),Te=he(J);if(Te){w(we(Te,{replace:!0,force:!0}),J).catch(ii);return}h=J;const y=l.value;Qr&&hP(xd(y.fullPath,Q.delta),xa()),A(J,y).catch(E=>pn(E,12)?E:pn(E,2)?(w(we(F(E.to),{force:!0}),J).then(b=>{pn(b,20)&&!Q.delta&&Q.type===Ii.pop&&s.go(-1,!1)}).catch(ii),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ge(E,J,y))).then(E=>{E=E||S(J,y,!1),E&&(Q.delta&&!pn(E,8)?s.go(-Q.delta,!1):Q.type===Ii.pop&&pn(E,20)&&s.go(-1,!1)),R(J,y,E)}).catch(ii)}))}let kt=Fs(),Ue=Fs(),ye;function ge(N,Y,Q){Ut(N);const J=Ue.list();return J.length?J.forEach(Te=>Te(N,Y,Q)):console.error(N),Promise.reject(N)}function wt(){return ye&&l.value!==Un?Promise.resolve():new Promise((N,Y)=>{kt.add([N,Y])})}function Ut(N){return ye||(ye=!N,dt(),kt.list().forEach(([Y,Q])=>N?Q(N):Y()),kt.reset()),N}function Ot(N,Y,Q,J){const{scrollBehavior:Te}=t;if(!Qr||!Te)return Promise.resolve();const y=!Q&&fP(xd(N.fullPath,0))||(J||!Q)&&history.state&&history.state.scroll||null;return wl().then(()=>Te(N,Y,y)).then(E=>E&&uP(E)).catch(E=>ge(E,N,Y))}const De=N=>s.go(N);let Ne;const Dn=new Set,zt={currentRoute:l,listening:!0,addRoute:_,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:D,resolve:U,options:t,push:H,replace:ce,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ue.add,isReady:wt,install(N){const Y=this;N.component("RouterLink",MP),N.component("RouterView",BP),N.config.globalProperties.$router=Y,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Ir(l)}),Qr&&!Ne&&l.value===Un&&(Ne=!0,H(s.location).catch(Te=>{}));const Q={};for(const Te in Un)Object.defineProperty(Q,Te,{get:()=>l.value[Te],enumerable:!0});N.provide(Ma,Y),N.provide(B_,mp(Q)),N.provide(cl,l);const J=N.unmount;Dn.add(N),N.unmount=function(){Dn.delete(N),Dn.size<1&&(h=Un,T&&T(),T=null,l.value=Un,Ne=!1,ye=!1),J()}}};function _t(N){return N.reduce((Y,Q)=>Y.then(()=>I(Q)),Promise.resolve())}return zt}function $P(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>gs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>gs(h,l))||s.push(l))}return[n,r,s]}function tC(){return Xt(Ma)}const HP=()=>Li(()=>import("./LoginView-D1xG4mrZ.js"),__vite__mapDeps([0,1,2])),qP=()=>Li(()=>import("./RegisterView-Dg_FfX3n.js"),__vite__mapDeps([3,1,4])),zP=()=>Li(()=>import("./ProfileView-CiYeXm55.js"),__vite__mapDeps([5,1,6])),KP=()=>Li(()=>import("./AdminDashboard-CE3yV18Q.js"),__vite__mapDeps([7,1,8])),WP=()=>Li(()=>import("./HomeView-DNVkkext.js"),__vite__mapDeps([9,1,10])),GP=[{path:"/",name:"home",component:WP,meta:{requiresAuth:!0,title:"Início",description:"Página inicial da rede social para professores"}},{path:"/login",name:"login",component:HP,meta:{title:"Login",description:"Faça login na sua conta"}},{path:"/register",name:"register",component:qP,meta:{title:"Cadastro",description:"Crie sua conta de professor"}},{path:"/profile",name:"profile",component:zP,meta:{requiresAuth:!0,title:"Perfil",description:"Gerencie seu perfil"}},{path:"/admin",name:"admin",component:KP,meta:{requiresAuth:!0,requiresAdmin:!0,title:"Dashboard Admin",description:"Painel administrativo"}},{path:"/:pathMatch(.*)*",name:"not-found",redirect:"/"}],Su=jP({history:mP(),routes:GP,scrollBehavior(t,e,n){return n||{top:0}}});Su.beforeEach(async(t,e,n)=>{var o,c;const{isAuthenticated:r,isAdmin:s,isLoading:i}=S_();if(i.value&&await new Promise(l=>setTimeout(l,100)),(o=t.meta)!=null&&o.requiresAuth&&!r.value){n({name:"login",query:{redirect:t.fullPath}});return}if((c=t.meta)!=null&&c.requiresAdmin&&!s.value){n({name:"home"});return}if((t.name==="login"||t.name==="register")&&r.value){n({name:"home"});return}n()});Su.afterEach(t=>{var n;const e=(n=t.meta)==null?void 0:n.title;e?document.title=`${e} - Social Teachers`:document.title="Social Teachers"});const j_=UE(LS);j_.use(Su);j_.mount("#app");export{pl as A,Gp as B,mn as F,zy as a,Yp as b,Vh as c,bl as d,YP as e,Jv as f,XP as g,Ir as h,Xv as i,QP as j,JP as k,It as l,nv as m,_v as n,tC as o,mo as p,dl as q,Ai as r,DE as s,wy as t,S_ as u,Qh as v,ZP as w,kE as x,Ze as y,Pp as z};
