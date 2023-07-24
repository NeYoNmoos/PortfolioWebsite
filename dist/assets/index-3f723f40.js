(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function du(n,t){const e=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)e[i[r]]=!0;return t?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const ie={},rs=[],Fn=()=>{},ug=()=>!1,hg=/^on[^a-z]/,Ka=n=>hg.test(n),pu=n=>n.startsWith("onUpdate:"),Le=Object.assign,mu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},fg=Object.prototype.hasOwnProperty,$t=(n,t)=>fg.call(n,t),Nt=Array.isArray,ss=n=>Za(n)==="[object Map]",cp=n=>Za(n)==="[object Set]",Vt=n=>typeof n=="function",be=n=>typeof n=="string",_u=n=>typeof n=="symbol",se=n=>n!==null&&typeof n=="object",up=n=>se(n)&&Vt(n.then)&&Vt(n.catch),hp=Object.prototype.toString,Za=n=>hp.call(n),dg=n=>Za(n).slice(8,-1),fp=n=>Za(n)==="[object Object]",gu=n=>be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ma=du(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ja=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},pg=/-(\w)/g,ms=Ja(n=>n.replace(pg,(t,e)=>e?e.toUpperCase():"")),mg=/\B([A-Z])/g,Ps=Ja(n=>n.replace(mg,"-$1").toLowerCase()),dp=Ja(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sl=Ja(n=>n?`on${dp(n)}`:""),co=(n,t)=>!Object.is(n,t),El=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},Da=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},_g=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Mh;const Ec=()=>Mh||(Mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vu(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=be(i)?yg(i):vu(i);if(r)for(const s in r)t[s]=r[s]}return t}else{if(be(n))return n;if(se(n))return n}}const gg=/;(?![^(]*\))/g,vg=/:([^]+)/,xg=/\/\*[^]*?\*\//g;function yg(n){const t={};return n.replace(xg,"").split(gg).forEach(e=>{if(e){const i=e.split(vg);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Xn(n){let t="";if(be(n))t=n;else if(Nt(n))for(let e=0;e<n.length;e++){const i=Xn(n[e]);i&&(t+=i+" ")}else if(se(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Mg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sg=du(Mg);function pp(n){return!!n||n===""}const zi=n=>be(n)?n:n==null?"":Nt(n)||se(n)&&(n.toString===hp||!Vt(n.toString))?JSON.stringify(n,mp,2):String(n),mp=(n,t)=>t&&t.__v_isRef?mp(n,t.value):ss(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r])=>(e[`${i} =>`]=r,e),{})}:cp(t)?{[`Set(${t.size})`]:[...t.values()]}:se(t)&&!Nt(t)&&!fp(t)?String(t):t;let Dn;class Eg{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dn,!t&&Dn&&(this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Dn;try{return Dn=this,t()}finally{Dn=e}}}on(){Dn=this}off(){Dn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function bg(n,t=Dn){t&&t.active&&t.effects.push(n)}function Tg(){return Dn}const xu=n=>{const t=new Set(n);return t.w=0,t.n=0,t},_p=n=>(n.w&qi)>0,gp=n=>(n.n&qi)>0,wg=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=qi},Ag=n=>{const{deps:t}=n;if(t.length){let e=0;for(let i=0;i<t.length;i++){const r=t[i];_p(r)&&!gp(r)?r.delete(n):t[e++]=r,r.w&=~qi,r.n&=~qi}t.length=e}},bc=new WeakMap;let qs=0,qi=1;const Tc=30;let Un;const pr=Symbol(""),wc=Symbol("");class yu{constructor(t,e=null,i){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,bg(this,i)}run(){if(!this.active)return this.fn();let t=Un,e=ki;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Un,Un=this,ki=!0,qi=1<<++qs,qs<=Tc?wg(this):Sh(this),this.fn()}finally{qs<=Tc&&Ag(this),qi=1<<--qs,Un=this.parent,ki=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Un===this?this.deferStop=!0:this.active&&(Sh(this),this.onStop&&this.onStop(),this.active=!1)}}function Sh(n){const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}let ki=!0;const vp=[];function Ls(){vp.push(ki),ki=!1}function Ds(){const n=vp.pop();ki=n===void 0?!0:n}function rn(n,t,e){if(ki&&Un){let i=bc.get(n);i||bc.set(n,i=new Map);let r=i.get(e);r||i.set(e,r=xu()),xp(r)}}function xp(n,t){let e=!1;qs<=Tc?gp(n)||(n.n|=qi,e=!_p(n)):e=!n.has(Un),e&&(n.add(Un),Un.deps.push(n))}function Mi(n,t,e,i,r,s){const o=bc.get(n);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Nt(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Nt(n)?gu(e)&&a.push(o.get("length")):(a.push(o.get(pr)),ss(n)&&a.push(o.get(wc)));break;case"delete":Nt(n)||(a.push(o.get(pr)),ss(n)&&a.push(o.get(wc)));break;case"set":ss(n)&&a.push(o.get(pr));break}if(a.length===1)a[0]&&Ac(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ac(xu(l))}}function Ac(n,t){const e=Nt(n)?n:[...n];for(const i of e)i.computed&&Eh(i);for(const i of e)i.computed||Eh(i)}function Eh(n,t){(n!==Un||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Rg=du("__proto__,__v_isRef,__isVue"),yp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(_u)),Cg=Mu(),Pg=Mu(!1,!0),Lg=Mu(!0),bh=Dg();function Dg(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=Zt(this);for(let s=0,o=this.length;s<o;s++)rn(i,"get",s+"");const r=i[t](...e);return r===-1||r===!1?i[t](...e.map(Zt)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){Ls();const i=Zt(this)[t].apply(this,e);return Ds(),i}}),n}function Ug(n){const t=Zt(this);return rn(t,"has",n),t.hasOwnProperty(n)}function Mu(n=!1,t=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&s===(n?t?jg:Tp:t?bp:Ep).get(i))return i;const o=Nt(i);if(!n){if(o&&$t(bh,r))return Reflect.get(bh,r,s);if(r==="hasOwnProperty")return Ug}const a=Reflect.get(i,r,s);return(_u(r)?yp.has(r):Rg(r))||(n||rn(i,"get",r),t)?a:Ne(a)?o&&gu(r)?a:a.value:se(a)?n?wp(a):Lo(a):a}}const Ig=Mp(),Ng=Mp(!0);function Mp(n=!1){return function(e,i,r,s){let o=e[i];if(_s(o)&&Ne(o)&&!Ne(r))return!1;if(!n&&(!Ua(r)&&!_s(r)&&(o=Zt(o),r=Zt(r)),!Nt(e)&&Ne(o)&&!Ne(r)))return o.value=r,!0;const a=Nt(e)&&gu(i)?Number(i)<e.length:$t(e,i),l=Reflect.set(e,i,r,s);return e===Zt(s)&&(a?co(r,o)&&Mi(e,"set",i,r):Mi(e,"add",i,r)),l}}function Og(n,t){const e=$t(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&e&&Mi(n,"delete",t,void 0),i}function Fg(n,t){const e=Reflect.has(n,t);return(!_u(t)||!yp.has(t))&&rn(n,"has",t),e}function Bg(n){return rn(n,"iterate",Nt(n)?"length":pr),Reflect.ownKeys(n)}const Sp={get:Cg,set:Ig,deleteProperty:Og,has:Fg,ownKeys:Bg},zg={get:Lg,set(n,t){return!0},deleteProperty(n,t){return!0}},kg=Le({},Sp,{get:Pg,set:Ng}),Su=n=>n,Qa=n=>Reflect.getPrototypeOf(n);function zo(n,t,e=!1,i=!1){n=n.__v_raw;const r=Zt(n),s=Zt(t);e||(t!==s&&rn(r,"get",t),rn(r,"get",s));const{has:o}=Qa(r),a=i?Su:e?Tu:uo;if(o.call(r,t))return a(n.get(t));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(t)}function ko(n,t=!1){const e=this.__v_raw,i=Zt(e),r=Zt(n);return t||(n!==r&&rn(i,"has",n),rn(i,"has",r)),n===r?e.has(n):e.has(n)||e.has(r)}function Ho(n,t=!1){return n=n.__v_raw,!t&&rn(Zt(n),"iterate",pr),Reflect.get(n,"size",n)}function Th(n){n=Zt(n);const t=Zt(this);return Qa(t).has.call(t,n)||(t.add(n),Mi(t,"add",n,n)),this}function wh(n,t){t=Zt(t);const e=Zt(this),{has:i,get:r}=Qa(e);let s=i.call(e,n);s||(n=Zt(n),s=i.call(e,n));const o=r.call(e,n);return e.set(n,t),s?co(t,o)&&Mi(e,"set",n,t):Mi(e,"add",n,t),this}function Ah(n){const t=Zt(this),{has:e,get:i}=Qa(t);let r=e.call(t,n);r||(n=Zt(n),r=e.call(t,n)),i&&i.call(t,n);const s=t.delete(n);return r&&Mi(t,"delete",n,void 0),s}function Rh(){const n=Zt(this),t=n.size!==0,e=n.clear();return t&&Mi(n,"clear",void 0,void 0),e}function Go(n,t){return function(i,r){const s=this,o=s.__v_raw,a=Zt(o),l=t?Su:n?Tu:uo;return!n&&rn(a,"iterate",pr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Vo(n,t,e){return function(...i){const r=this.__v_raw,s=Zt(r),o=ss(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?Su:t?Tu:uo;return!t&&rn(s,"iterate",l?wc:pr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wi(n){return function(...t){return n==="delete"?!1:this}}function Hg(){const n={get(s){return zo(this,s)},get size(){return Ho(this)},has:ko,add:Th,set:wh,delete:Ah,clear:Rh,forEach:Go(!1,!1)},t={get(s){return zo(this,s,!1,!0)},get size(){return Ho(this)},has:ko,add:Th,set:wh,delete:Ah,clear:Rh,forEach:Go(!1,!0)},e={get(s){return zo(this,s,!0)},get size(){return Ho(this,!0)},has(s){return ko.call(this,s,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:Go(!0,!1)},i={get(s){return zo(this,s,!0,!0)},get size(){return Ho(this,!0)},has(s){return ko.call(this,s,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:Go(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Vo(s,!1,!1),e[s]=Vo(s,!0,!1),t[s]=Vo(s,!1,!0),i[s]=Vo(s,!0,!0)}),[n,e,t,i]}const[Gg,Vg,Wg,Xg]=Hg();function Eu(n,t){const e=t?n?Xg:Wg:n?Vg:Gg;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get($t(e,r)&&r in i?e:i,r,s)}const qg={get:Eu(!1,!1)},Yg={get:Eu(!1,!0)},$g={get:Eu(!0,!1)},Ep=new WeakMap,bp=new WeakMap,Tp=new WeakMap,jg=new WeakMap;function Kg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zg(n){return n.__v_skip||!Object.isExtensible(n)?0:Kg(dg(n))}function Lo(n){return _s(n)?n:bu(n,!1,Sp,qg,Ep)}function Jg(n){return bu(n,!1,kg,Yg,bp)}function wp(n){return bu(n,!0,zg,$g,Tp)}function bu(n,t,e,i,r){if(!se(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Zg(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return r.set(n,a),a}function os(n){return _s(n)?os(n.__v_raw):!!(n&&n.__v_isReactive)}function _s(n){return!!(n&&n.__v_isReadonly)}function Ua(n){return!!(n&&n.__v_isShallow)}function Ap(n){return os(n)||_s(n)}function Zt(n){const t=n&&n.__v_raw;return t?Zt(t):n}function Rp(n){return Da(n,"__v_skip",!0),n}const uo=n=>se(n)?Lo(n):n,Tu=n=>se(n)?wp(n):n;function Cp(n){ki&&Un&&(n=Zt(n),xp(n.dep||(n.dep=xu())))}function Pp(n,t){n=Zt(n);const e=n.dep;e&&Ac(e)}function Ne(n){return!!(n&&n.__v_isRef===!0)}function Do(n){return Lp(n,!1)}function Qg(n){return Lp(n,!0)}function Lp(n,t){return Ne(n)?n:new t0(n,t)}class t0{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Zt(t),this._value=e?t:uo(t)}get value(){return Cp(this),this._value}set value(t){const e=this.__v_isShallow||Ua(t)||_s(t);t=e?t:Zt(t),co(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:uo(t),Pp(this))}}function Se(n){return Ne(n)?n.value:n}const e0={get:(n,t,e)=>Se(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Ne(r)&&!Ne(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Dp(n){return os(n)?n:new Proxy(n,e0)}class n0{constructor(t,e,i,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new yu(t,()=>{this._dirty||(this._dirty=!0,Pp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=Zt(this);return Cp(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function i0(n,t,e=!1){let i,r;const s=Vt(n);return s?(i=n,r=Fn):(i=n.get,r=n.set),new n0(i,r,s||!r,e)}function Hi(n,t,e,i){let r;try{r=i?n(...i):n()}catch(s){tl(s,t,e)}return r}function Bn(n,t,e,i){if(Vt(n)){const s=Hi(n,t,e,i);return s&&up(s)&&s.catch(o=>{tl(o,t,e)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Bn(n[s],t,e,i));return r}function tl(n,t,e,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=e;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Hi(l,null,10,[n,o,a]);return}}r0(n,e,r,i)}function r0(n,t,e,i=!0){console.error(n)}let ho=!1,Rc=!1;const Be=[];let $n=0;const as=[];let di=null,ur=0;const Up=Promise.resolve();let wu=null;function Ip(n){const t=wu||Up;return n?t.then(this?n.bind(this):n):t}function s0(n){let t=$n+1,e=Be.length;for(;t<e;){const i=t+e>>>1;fo(Be[i])<n?t=i+1:e=i}return t}function Au(n){(!Be.length||!Be.includes(n,ho&&n.allowRecurse?$n+1:$n))&&(n.id==null?Be.push(n):Be.splice(s0(n.id),0,n),Np())}function Np(){!ho&&!Rc&&(Rc=!0,wu=Up.then(Fp))}function o0(n){const t=Be.indexOf(n);t>$n&&Be.splice(t,1)}function a0(n){Nt(n)?as.push(...n):(!di||!di.includes(n,n.allowRecurse?ur+1:ur))&&as.push(n),Np()}function Ch(n,t=ho?$n+1:0){for(;t<Be.length;t++){const e=Be[t];e&&e.pre&&(Be.splice(t,1),t--,e())}}function Op(n){if(as.length){const t=[...new Set(as)];if(as.length=0,di){di.push(...t);return}for(di=t,di.sort((e,i)=>fo(e)-fo(i)),ur=0;ur<di.length;ur++)di[ur]();di=null,ur=0}}const fo=n=>n.id==null?1/0:n.id,l0=(n,t)=>{const e=fo(n)-fo(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function Fp(n){Rc=!1,ho=!0,Be.sort(l0);const t=Fn;try{for($n=0;$n<Be.length;$n++){const e=Be[$n];e&&e.active!==!1&&Hi(e,null,14)}}finally{$n=0,Be.length=0,Op(),ho=!1,wu=null,(Be.length||as.length)&&Fp()}}function c0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ie;let r=e;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||ie;f&&(r=e.map(d=>be(d)?d.trim():d)),h&&(r=e.map(_g))}let a,l=i[a=Sl(t)]||i[a=Sl(ms(t))];!l&&s&&(l=i[a=Sl(Ps(t))]),l&&Bn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Bn(c,n,6,r)}}function Bp(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Vt(n)){const l=c=>{const u=Bp(c,t,!0);u&&(a=!0,Le(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(se(n)&&i.set(n,null),null):(Nt(s)?s.forEach(l=>o[l]=null):Le(o,s),se(n)&&i.set(n,o),o)}function el(n,t){return!n||!Ka(t)?!1:(t=t.slice(2).replace(/Once$/,""),$t(n,t[0].toLowerCase()+t.slice(1))||$t(n,Ps(t))||$t(n,t))}let Kn=null,nl=null;function Ia(n){const t=Kn;return Kn=n,nl=n&&n.type.__scopeId||null,t}function il(n){nl=n}function rl(){nl=null}function u0(n,t=Kn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&zh(-1);const s=Ia(t);let o;try{o=n(...r)}finally{Ia(s),i._d&&zh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function bl(n){const{type:t,vnode:e,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n;let m,p;const y=Ia(n);try{if(e.shapeFlag&4){const M=r||i;m=qn(u.call(M,M,h,s,d,f,g)),p=l}else{const M=t;m=qn(M.length>1?M(s,{attrs:l,slots:a,emit:c}):M(s,null)),p=t.props?l:h0(l)}}catch(M){Qs.length=0,tl(M,n,1),m=ge(br)}let v=m;if(p&&_!==!1){const M=Object.keys(p),{shapeFlag:E}=v;M.length&&E&7&&(o&&M.some(pu)&&(p=f0(p,o)),v=gs(v,p))}return e.dirs&&(v=gs(v),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition&&(v.transition=e.transition),m=v,Ia(y),m}const h0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ka(e))&&((t||(t={}))[e]=n[e]);return t},f0=(n,t)=>{const e={};for(const i in n)(!pu(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function d0(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Ph(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!el(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ph(i,o,c):!0:!!o;return!1}function Ph(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!el(e,s))return!0}return!1}function p0({vnode:n,parent:t},e){for(;t&&t.subTree===n;)(n=t.vnode).el=e,t=t.parent}const m0=n=>n.__isSuspense;function _0(n,t){t&&t.pendingBranch?Nt(n)?t.effects.push(...n):t.effects.push(n):a0(n)}const Wo={};function Sa(n,t,e){return zp(n,t,e)}function zp(n,t,{immediate:e,deep:i,flush:r,onTrack:s,onTrigger:o}=ie){var a;const l=Tg()===((a=ze)==null?void 0:a.scope)?ze:null;let c,u=!1,h=!1;if(Ne(n)?(c=()=>n.value,u=Ua(n)):os(n)?(c=()=>n,i=!0):Nt(n)?(h=!0,u=n.some(M=>os(M)||Ua(M)),c=()=>n.map(M=>{if(Ne(M))return M.value;if(os(M))return Jr(M);if(Vt(M))return Hi(M,l,2)})):Vt(n)?t?c=()=>Hi(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Bn(n,l,3,[d])}:c=Fn,t&&i){const M=c;c=()=>Jr(M())}let f,d=M=>{f=y.onStop=()=>{Hi(M,l,4)}},g;if(mo)if(d=Fn,t?e&&Bn(t,l,3,[c(),h?[]:void 0,d]):c(),r==="sync"){const M=lv();g=M.__watcherHandles||(M.__watcherHandles=[])}else return Fn;let _=h?new Array(n.length).fill(Wo):Wo;const m=()=>{if(y.active)if(t){const M=y.run();(i||u||(h?M.some((E,T)=>co(E,_[T])):co(M,_)))&&(f&&f(),Bn(t,l,3,[M,_===Wo?void 0:h&&_[0]===Wo?[]:_,d]),_=M)}else y.run()};m.allowRecurse=!!t;let p;r==="sync"?p=m:r==="post"?p=()=>Ze(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),p=()=>Au(m));const y=new yu(c,p);t?e?m():_=y.run():r==="post"?Ze(y.run.bind(y),l&&l.suspense):y.run();const v=()=>{y.stop(),l&&l.scope&&mu(l.scope.effects,y)};return g&&g.push(v),v}function g0(n,t,e){const i=this.proxy,r=be(n)?n.includes(".")?kp(i,n):()=>i[n]:n.bind(i,i);let s;Vt(t)?s=t:(s=t.handler,e=t);const o=ze;vs(this);const a=zp(r,s.bind(i),e);return o?vs(o):mr(),a}function kp(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}function Jr(n,t){if(!se(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Ne(n))Jr(n.value,t);else if(Nt(n))for(let e=0;e<n.length;e++)Jr(n[e],t);else if(cp(n)||ss(n))n.forEach(e=>{Jr(e,t)});else if(fp(n))for(const e in n)Jr(n[e],t);return n}function Qi(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ls(),Bn(l,e,8,[n.el,a,n,t]),Ds())}}function bi(n,t){return Vt(n)?(()=>Le({name:n.name},t,{setup:n}))():n}const Ea=n=>!!n.type.__asyncLoader,Hp=n=>n.type.__isKeepAlive;function v0(n,t){Gp(n,"a",t)}function x0(n,t){Gp(n,"da",t)}function Gp(n,t,e=ze){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(sl(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Hp(r.parent.vnode)&&y0(i,t,e,r),r=r.parent}}function y0(n,t,e,i){const r=sl(t,n,i,!0);Cu(()=>{mu(i[t],r)},e)}function sl(n,t,e=ze,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{if(e.isUnmounted)return;Ls(),vs(e);const a=Bn(t,e,n,o);return mr(),Ds(),a});return i?r.unshift(s):r.push(s),s}}const Ti=n=>(t,e=ze)=>(!mo||n==="sp")&&sl(n,(...i)=>t(...i),e),M0=Ti("bm"),Ru=Ti("m"),S0=Ti("bu"),E0=Ti("u"),b0=Ti("bum"),Cu=Ti("um"),T0=Ti("sp"),w0=Ti("rtg"),A0=Ti("rtc");function R0(n,t=ze){sl("ec",n,t)}const C0=Symbol.for("v-ndc");function Pu(n,t,e,i){let r;const s=e&&e[i];if(Nt(n)||be(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=t(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=t(o+1,o,void 0,s&&s[o])}else if(se(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>t(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=t(n[c],c,a,s&&s[a])}}else r=[];return e&&(e[i]=r),r}const Cc=n=>n?em(n)?Nu(n)||n.proxy:Cc(n.parent):null,Js=Le(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Cc(n.parent),$root:n=>Cc(n.root),$emit:n=>n.emit,$options:n=>Lu(n),$forceUpdate:n=>n.f||(n.f=()=>Au(n.update)),$nextTick:n=>n.n||(n.n=Ip.bind(n.proxy)),$watch:n=>g0.bind(n)}),Tl=(n,t)=>n!==ie&&!n.__isScriptSetup&&$t(n,t),P0={get({_:n},t){const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Tl(i,t))return o[t]=1,i[t];if(r!==ie&&$t(r,t))return o[t]=2,r[t];if((c=n.propsOptions[0])&&$t(c,t))return o[t]=3,s[t];if(e!==ie&&$t(e,t))return o[t]=4,e[t];Pc&&(o[t]=0)}}const u=Js[t];let h,f;if(u)return t==="$attrs"&&rn(n,"get",t),u(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==ie&&$t(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,$t(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Tl(r,t)?(r[t]=e,!0):i!==ie&&$t(i,t)?(i[t]=e,!0):$t(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!e[o]||n!==ie&&$t(n,o)||Tl(t,o)||(a=s[0])&&$t(a,o)||$t(i,o)||$t(Js,o)||$t(r.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:$t(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Lh(n){return Nt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Pc=!0;function L0(n){const t=Lu(n),e=n.proxy,i=n.ctx;Pc=!1,t.beforeCreate&&Dh(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:v,unmounted:M,render:E,renderTracked:T,renderTriggered:A,errorCaptured:D,serverPrefetch:S,expose:w,inheritAttrs:z,components:J,directives:B,filters:G}=t;if(c&&D0(c,i,null),o)for(const F in o){const H=o[F];Vt(H)&&(i[F]=H.bind(e))}if(r){const F=r.call(e,e);se(F)&&(n.data=Lo(F))}if(Pc=!0,s)for(const F in s){const H=s[F],nt=Vt(H)?H.bind(e,e):Vt(H.get)?H.get.bind(e,e):Fn,st=!Vt(H)&&Vt(H.set)?H.set.bind(e):Fn,k=Sn({get:nt,set:st});Object.defineProperty(i,F,{enumerable:!0,configurable:!0,get:()=>k.value,set:j=>k.value=j})}if(a)for(const F in a)Vp(a[F],i,e,F);if(l){const F=Vt(l)?l.call(e):l;Reflect.ownKeys(F).forEach(H=>{ba(H,F[H])})}u&&Dh(u,n,"c");function Z(F,H){Nt(H)?H.forEach(nt=>F(nt.bind(e))):H&&F(H.bind(e))}if(Z(M0,h),Z(Ru,f),Z(S0,d),Z(E0,g),Z(v0,_),Z(x0,m),Z(R0,D),Z(A0,T),Z(w0,A),Z(b0,y),Z(Cu,M),Z(T0,S),Nt(w))if(w.length){const F=n.exposed||(n.exposed={});w.forEach(H=>{Object.defineProperty(F,H,{get:()=>e[H],set:nt=>e[H]=nt})})}else n.exposed||(n.exposed={});E&&n.render===Fn&&(n.render=E),z!=null&&(n.inheritAttrs=z),J&&(n.components=J),B&&(n.directives=B)}function D0(n,t,e=Fn){Nt(n)&&(n=Lc(n));for(const i in n){const r=n[i];let s;se(r)?"default"in r?s=vi(r.from||i,r.default,!0):s=vi(r.from||i):s=vi(r),Ne(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Dh(n,t,e){Bn(Nt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Vp(n,t,e,i){const r=i.includes(".")?kp(e,i):()=>e[i];if(be(n)){const s=t[n];Vt(s)&&Sa(r,s)}else if(Vt(n))Sa(r,n.bind(e));else if(se(n))if(Nt(n))n.forEach(s=>Vp(s,t,e,i));else{const s=Vt(n.handler)?n.handler.bind(e):t[n.handler];Vt(s)&&Sa(r,s,n)}}function Lu(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>Na(l,c,o,!0)),Na(l,t,o)),se(t)&&s.set(t,l),l}function Na(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Na(n,s,e,!0),r&&r.forEach(o=>Na(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=U0[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const U0={data:Uh,props:Ih,emits:Ih,methods:Ys,computed:Ys,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Ys,directives:Ys,watch:N0,provide:Uh,inject:I0};function Uh(n,t){return t?n?function(){return Le(Vt(n)?n.call(this,this):n,Vt(t)?t.call(this,this):t)}:t:n}function I0(n,t){return Ys(Lc(n),Lc(t))}function Lc(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Xe(n,t){return n?[...new Set([].concat(n,t))]:t}function Ys(n,t){return n?Le(Object.create(null),n,t):t}function Ih(n,t){return n?Nt(n)&&Nt(t)?[...new Set([...n,...t])]:Le(Object.create(null),Lh(n),Lh(t??{})):t}function N0(n,t){if(!n)return t;if(!t)return n;const e=Le(Object.create(null),n);for(const i in t)e[i]=Xe(n[i],t[i]);return e}function Wp(){return{app:null,config:{isNativeTag:ug,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let O0=0;function F0(n,t){return function(i,r=null){Vt(i)||(i=Le({},i)),r!=null&&!se(r)&&(r=null);const s=Wp(),o=new Set;let a=!1;const l=s.app={_uid:O0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:cv,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Vt(c.install)?(o.add(c),c.install(l,...u)):Vt(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=ge(i,r);return f.appContext=s,u&&t?t(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Nu(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Oa=l;try{return c()}finally{Oa=null}}};return l}}let Oa=null;function ba(n,t){if(ze){let e=ze.provides;const i=ze.parent&&ze.parent.provides;i===e&&(e=ze.provides=Object.create(i)),e[n]=t}}function vi(n,t,e=!1){const i=ze||Kn;if(i||Oa){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Oa._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Vt(t)?t.call(i&&i.proxy):t}}function B0(n,t,e,i=!1){const r={},s={};Da(s,al,1),n.propsDefaults=Object.create(null),Xp(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:Jg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function z0(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Zt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(el(n.emitsOptions,f))continue;const d=t[f];if(l)if($t(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=ms(f);r[g]=Dc(l,a,g,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Xp(n,t,r,s)&&(c=!0);let u;for(const h in a)(!t||!$t(t,h)&&((u=Ps(h))===h||!$t(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(r[h]=Dc(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!$t(t,h))&&(delete s[h],c=!0)}c&&Mi(n,"set","$attrs")}function Xp(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ma(l))continue;const c=t[l];let u;r&&$t(r,u=ms(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:el(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Zt(e),c=a||ie;for(let u=0;u<s.length;u++){const h=s[u];e[h]=Dc(r,l,h,c[h],n,!$t(c,h))}}return o}function Dc(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=$t(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Vt(l)){const{propsDefaults:c}=r;e in c?i=c[e]:(vs(r),i=c[e]=l.call(null,t),mr())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ps(e))&&(i=!0))}return i}function qp(n,t,e=!1){const i=t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Vt(n)){const u=h=>{l=!0;const[f,d]=qp(h,t,!0);Le(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return se(n)&&i.set(n,rs),rs;if(Nt(s))for(let u=0;u<s.length;u++){const h=ms(s[u]);Nh(h)&&(o[h]=ie)}else if(s)for(const u in s){const h=ms(u);if(Nh(h)){const f=s[u],d=o[h]=Nt(f)||Vt(f)?{type:f}:Le({},f);if(d){const g=Bh(Boolean,d.type),_=Bh(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||$t(d,"default"))&&a.push(h)}}}const c=[o,a];return se(n)&&i.set(n,c),c}function Nh(n){return n[0]!=="$"}function Oh(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function Fh(n,t){return Oh(n)===Oh(t)}function Bh(n,t){return Nt(t)?t.findIndex(e=>Fh(e,n)):Vt(t)&&Fh(t,n)?0:-1}const Yp=n=>n[0]==="_"||n==="$stable",Du=n=>Nt(n)?n.map(qn):[qn(n)],k0=(n,t,e)=>{if(t._n)return t;const i=u0((...r)=>Du(t(...r)),e);return i._c=!1,i},$p=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Yp(r))continue;const s=n[r];if(Vt(s))t[r]=k0(r,s,i);else if(s!=null){const o=Du(s);t[r]=()=>o}}},jp=(n,t)=>{const e=Du(t);n.slots.default=()=>e},H0=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=Zt(t),Da(t,"_",e)):$p(t,n.slots={})}else n.slots={},t&&jp(n,t);Da(n.slots,al,1)},G0=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=ie;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:(Le(r,t),!e&&a===1&&delete r._):(s=!t.$stable,$p(t,r)),o=t}else t&&(jp(n,t),o={default:1});if(s)for(const a in r)!Yp(a)&&!(a in o)&&delete r[a]};function Uc(n,t,e,i,r=!1){if(Nt(n)){n.forEach((f,d)=>Uc(f,t&&(Nt(t)?t[d]:t),e,i,r));return}if(Ea(i)&&!r)return;const s=i.shapeFlag&4?Nu(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(be(c)?(u[c]=null,$t(h,c)&&(h[c]=null)):Ne(c)&&(c.value=null)),Vt(l))Hi(l,a,12,[o,u]);else{const f=be(l),d=Ne(l);if(f||d){const g=()=>{if(n.f){const _=f?$t(h,l)?h[l]:u[l]:l.value;r?Nt(_)&&mu(_,s):Nt(_)?_.includes(s)||_.push(s):f?(u[l]=[s],$t(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,$t(h,l)&&(h[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ze(g,e)):g()}}}const Ze=_0;function V0(n){return W0(n)}function W0(n,t){const e=Ec();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Fn,insertStaticContent:g}=n,_=(x,C,P,I=null,U=null,Y=null,Q=!1,K=null,lt=!!C.dynamicChildren)=>{if(x===C)return;x&&!Fs(x,C)&&(I=V(x),j(x,U,Y,!0),x=null),C.patchFlag===-2&&(lt=!1,C.dynamicChildren=null);const{type:et,ref:Et,shapeFlag:R}=C;switch(et){case ol:m(x,C,P,I);break;case br:p(x,C,P,I);break;case Ta:x==null&&y(C,P,I,Q);break;case un:J(x,C,P,I,U,Y,Q,K,lt);break;default:R&1?E(x,C,P,I,U,Y,Q,K,lt):R&6?B(x,C,P,I,U,Y,Q,K,lt):(R&64||R&128)&&et.process(x,C,P,I,U,Y,Q,K,lt,ut)}Et!=null&&U&&Uc(Et,x&&x.ref,Y,C||x,!C)},m=(x,C,P,I)=>{if(x==null)i(C.el=a(C.children),P,I);else{const U=C.el=x.el;C.children!==x.children&&c(U,C.children)}},p=(x,C,P,I)=>{x==null?i(C.el=l(C.children||""),P,I):C.el=x.el},y=(x,C,P,I)=>{[x.el,x.anchor]=g(x.children,C,P,I,x.el,x.anchor)},v=({el:x,anchor:C},P,I)=>{let U;for(;x&&x!==C;)U=f(x),i(x,P,I),x=U;i(C,P,I)},M=({el:x,anchor:C})=>{let P;for(;x&&x!==C;)P=f(x),r(x),x=P;r(C)},E=(x,C,P,I,U,Y,Q,K,lt)=>{Q=Q||C.type==="svg",x==null?T(C,P,I,U,Y,Q,K,lt):S(x,C,U,Y,Q,K,lt)},T=(x,C,P,I,U,Y,Q,K)=>{let lt,et;const{type:Et,props:R,shapeFlag:b,transition:X,dirs:ot}=x;if(lt=x.el=o(x.type,Y,R&&R.is,R),b&8?u(lt,x.children):b&16&&D(x.children,lt,null,I,U,Y&&Et!=="foreignObject",Q,K),ot&&Qi(x,null,I,"created"),A(lt,x,x.scopeId,Q,I),R){for(const dt in R)dt!=="value"&&!Ma(dt)&&s(lt,dt,null,R[dt],Y,x.children,I,U,St);"value"in R&&s(lt,"value",null,R.value),(et=R.onVnodeBeforeMount)&&Vn(et,I,x)}ot&&Qi(x,null,I,"beforeMount");const ht=(!U||U&&!U.pendingBranch)&&X&&!X.persisted;ht&&X.beforeEnter(lt),i(lt,C,P),((et=R&&R.onVnodeMounted)||ht||ot)&&Ze(()=>{et&&Vn(et,I,x),ht&&X.enter(lt),ot&&Qi(x,null,I,"mounted")},U)},A=(x,C,P,I,U)=>{if(P&&d(x,P),I)for(let Y=0;Y<I.length;Y++)d(x,I[Y]);if(U){let Y=U.subTree;if(C===Y){const Q=U.vnode;A(x,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},D=(x,C,P,I,U,Y,Q,K,lt=0)=>{for(let et=lt;et<x.length;et++){const Et=x[et]=K?Di(x[et]):qn(x[et]);_(null,Et,C,P,I,U,Y,Q,K)}},S=(x,C,P,I,U,Y,Q)=>{const K=C.el=x.el;let{patchFlag:lt,dynamicChildren:et,dirs:Et}=C;lt|=x.patchFlag&16;const R=x.props||ie,b=C.props||ie;let X;P&&tr(P,!1),(X=b.onVnodeBeforeUpdate)&&Vn(X,P,C,x),Et&&Qi(C,x,P,"beforeUpdate"),P&&tr(P,!0);const ot=U&&C.type!=="foreignObject";if(et?w(x.dynamicChildren,et,K,P,I,ot,Y):Q||H(x,C,K,null,P,I,ot,Y,!1),lt>0){if(lt&16)z(K,C,R,b,P,I,U);else if(lt&2&&R.class!==b.class&&s(K,"class",null,b.class,U),lt&4&&s(K,"style",R.style,b.style,U),lt&8){const ht=C.dynamicProps;for(let dt=0;dt<ht.length;dt++){const yt=ht[dt],gt=R[yt],it=b[yt];(it!==gt||yt==="value")&&s(K,yt,gt,it,U,x.children,P,I,St)}}lt&1&&x.children!==C.children&&u(K,C.children)}else!Q&&et==null&&z(K,C,R,b,P,I,U);((X=b.onVnodeUpdated)||Et)&&Ze(()=>{X&&Vn(X,P,C,x),Et&&Qi(C,x,P,"updated")},I)},w=(x,C,P,I,U,Y,Q)=>{for(let K=0;K<C.length;K++){const lt=x[K],et=C[K],Et=lt.el&&(lt.type===un||!Fs(lt,et)||lt.shapeFlag&70)?h(lt.el):P;_(lt,et,Et,null,I,U,Y,Q,!0)}},z=(x,C,P,I,U,Y,Q)=>{if(P!==I){if(P!==ie)for(const K in P)!Ma(K)&&!(K in I)&&s(x,K,P[K],null,Q,C.children,U,Y,St);for(const K in I){if(Ma(K))continue;const lt=I[K],et=P[K];lt!==et&&K!=="value"&&s(x,K,et,lt,Q,C.children,U,Y,St)}"value"in I&&s(x,"value",P.value,I.value)}},J=(x,C,P,I,U,Y,Q,K,lt)=>{const et=C.el=x?x.el:a(""),Et=C.anchor=x?x.anchor:a("");let{patchFlag:R,dynamicChildren:b,slotScopeIds:X}=C;X&&(K=K?K.concat(X):X),x==null?(i(et,P,I),i(Et,P,I),D(C.children,P,Et,U,Y,Q,K,lt)):R>0&&R&64&&b&&x.dynamicChildren?(w(x.dynamicChildren,b,P,U,Y,Q,K),(C.key!=null||U&&C===U.subTree)&&Kp(x,C,!0)):H(x,C,P,Et,U,Y,Q,K,lt)},B=(x,C,P,I,U,Y,Q,K,lt)=>{C.slotScopeIds=K,x==null?C.shapeFlag&512?U.ctx.activate(C,P,I,Q,lt):G(C,P,I,U,Y,Q,lt):W(x,C,lt)},G=(x,C,P,I,U,Y,Q)=>{const K=x.component=ev(x,I,U);if(Hp(x)&&(K.ctx.renderer=ut),nv(K),K.asyncDep){if(U&&U.registerDep(K,Z),!x.el){const lt=K.subTree=ge(br);p(null,lt,C,P)}return}Z(K,x,C,P,U,Y,Q)},W=(x,C,P)=>{const I=C.component=x.component;if(d0(x,C,P))if(I.asyncDep&&!I.asyncResolved){F(I,C,P);return}else I.next=C,o0(I.update),I.update();else C.el=x.el,I.vnode=C},Z=(x,C,P,I,U,Y,Q)=>{const K=()=>{if(x.isMounted){let{next:Et,bu:R,u:b,parent:X,vnode:ot}=x,ht=Et,dt;tr(x,!1),Et?(Et.el=ot.el,F(x,Et,Q)):Et=ot,R&&El(R),(dt=Et.props&&Et.props.onVnodeBeforeUpdate)&&Vn(dt,X,Et,ot),tr(x,!0);const yt=bl(x),gt=x.subTree;x.subTree=yt,_(gt,yt,h(gt.el),V(gt),x,U,Y),Et.el=yt.el,ht===null&&p0(x,yt.el),b&&Ze(b,U),(dt=Et.props&&Et.props.onVnodeUpdated)&&Ze(()=>Vn(dt,X,Et,ot),U)}else{let Et;const{el:R,props:b}=C,{bm:X,m:ot,parent:ht}=x,dt=Ea(C);if(tr(x,!1),X&&El(X),!dt&&(Et=b&&b.onVnodeBeforeMount)&&Vn(Et,ht,C),tr(x,!0),R&&xt){const yt=()=>{x.subTree=bl(x),xt(R,x.subTree,x,U,null)};dt?C.type.__asyncLoader().then(()=>!x.isUnmounted&&yt()):yt()}else{const yt=x.subTree=bl(x);_(null,yt,P,I,x,U,Y),C.el=yt.el}if(ot&&Ze(ot,U),!dt&&(Et=b&&b.onVnodeMounted)){const yt=C;Ze(()=>Vn(Et,ht,yt),U)}(C.shapeFlag&256||ht&&Ea(ht.vnode)&&ht.vnode.shapeFlag&256)&&x.a&&Ze(x.a,U),x.isMounted=!0,C=P=I=null}},lt=x.effect=new yu(K,()=>Au(et),x.scope),et=x.update=()=>lt.run();et.id=x.uid,tr(x,!0),et()},F=(x,C,P)=>{C.component=x;const I=x.vnode.props;x.vnode=C,x.next=null,z0(x,C.props,I,P),G0(x,C.children,P),Ls(),Ch(),Ds()},H=(x,C,P,I,U,Y,Q,K,lt=!1)=>{const et=x&&x.children,Et=x?x.shapeFlag:0,R=C.children,{patchFlag:b,shapeFlag:X}=C;if(b>0){if(b&128){st(et,R,P,I,U,Y,Q,K,lt);return}else if(b&256){nt(et,R,P,I,U,Y,Q,K,lt);return}}X&8?(Et&16&&St(et,U,Y),R!==et&&u(P,R)):Et&16?X&16?st(et,R,P,I,U,Y,Q,K,lt):St(et,U,Y,!0):(Et&8&&u(P,""),X&16&&D(R,P,I,U,Y,Q,K,lt))},nt=(x,C,P,I,U,Y,Q,K,lt)=>{x=x||rs,C=C||rs;const et=x.length,Et=C.length,R=Math.min(et,Et);let b;for(b=0;b<R;b++){const X=C[b]=lt?Di(C[b]):qn(C[b]);_(x[b],X,P,null,U,Y,Q,K,lt)}et>Et?St(x,U,Y,!0,!1,R):D(C,P,I,U,Y,Q,K,lt,R)},st=(x,C,P,I,U,Y,Q,K,lt)=>{let et=0;const Et=C.length;let R=x.length-1,b=Et-1;for(;et<=R&&et<=b;){const X=x[et],ot=C[et]=lt?Di(C[et]):qn(C[et]);if(Fs(X,ot))_(X,ot,P,null,U,Y,Q,K,lt);else break;et++}for(;et<=R&&et<=b;){const X=x[R],ot=C[b]=lt?Di(C[b]):qn(C[b]);if(Fs(X,ot))_(X,ot,P,null,U,Y,Q,K,lt);else break;R--,b--}if(et>R){if(et<=b){const X=b+1,ot=X<Et?C[X].el:I;for(;et<=b;)_(null,C[et]=lt?Di(C[et]):qn(C[et]),P,ot,U,Y,Q,K,lt),et++}}else if(et>b)for(;et<=R;)j(x[et],U,Y,!0),et++;else{const X=et,ot=et,ht=new Map;for(et=ot;et<=b;et++){const Tt=C[et]=lt?Di(C[et]):qn(C[et]);Tt.key!=null&&ht.set(Tt.key,et)}let dt,yt=0;const gt=b-ot+1;let it=!1,Lt=0;const Pt=new Array(gt);for(et=0;et<gt;et++)Pt[et]=0;for(et=X;et<=R;et++){const Tt=x[et];if(yt>=gt){j(Tt,U,Y,!0);continue}let At;if(Tt.key!=null)At=ht.get(Tt.key);else for(dt=ot;dt<=b;dt++)if(Pt[dt-ot]===0&&Fs(Tt,C[dt])){At=dt;break}At===void 0?j(Tt,U,Y,!0):(Pt[At-ot]=et+1,At>=Lt?Lt=At:it=!0,_(Tt,C[At],P,null,U,Y,Q,K,lt),yt++)}const Dt=it?X0(Pt):rs;for(dt=Dt.length-1,et=gt-1;et>=0;et--){const Tt=ot+et,At=C[Tt],zt=Tt+1<Et?C[Tt+1].el:I;Pt[et]===0?_(null,At,P,zt,U,Y,Q,K,lt):it&&(dt<0||et!==Dt[dt]?k(At,P,zt,2):dt--)}}},k=(x,C,P,I,U=null)=>{const{el:Y,type:Q,transition:K,children:lt,shapeFlag:et}=x;if(et&6){k(x.component.subTree,C,P,I);return}if(et&128){x.suspense.move(C,P,I);return}if(et&64){Q.move(x,C,P,ut);return}if(Q===un){i(Y,C,P);for(let R=0;R<lt.length;R++)k(lt[R],C,P,I);i(x.anchor,C,P);return}if(Q===Ta){v(x,C,P);return}if(I!==2&&et&1&&K)if(I===0)K.beforeEnter(Y),i(Y,C,P),Ze(()=>K.enter(Y),U);else{const{leave:R,delayLeave:b,afterLeave:X}=K,ot=()=>i(Y,C,P),ht=()=>{R(Y,()=>{ot(),X&&X()})};b?b(Y,ot,ht):ht()}else i(Y,C,P)},j=(x,C,P,I=!1,U=!1)=>{const{type:Y,props:Q,ref:K,children:lt,dynamicChildren:et,shapeFlag:Et,patchFlag:R,dirs:b}=x;if(K!=null&&Uc(K,null,P,x,!0),Et&256){C.ctx.deactivate(x);return}const X=Et&1&&b,ot=!Ea(x);let ht;if(ot&&(ht=Q&&Q.onVnodeBeforeUnmount)&&Vn(ht,C,x),Et&6)_t(x.component,P,I);else{if(Et&128){x.suspense.unmount(P,I);return}X&&Qi(x,null,C,"beforeUnmount"),Et&64?x.type.remove(x,C,P,U,ut,I):et&&(Y!==un||R>0&&R&64)?St(et,C,P,!1,!0):(Y===un&&R&384||!U&&Et&16)&&St(lt,C,P),I&&pt(x)}(ot&&(ht=Q&&Q.onVnodeUnmounted)||X)&&Ze(()=>{ht&&Vn(ht,C,x),X&&Qi(x,null,C,"unmounted")},P)},pt=x=>{const{type:C,el:P,anchor:I,transition:U}=x;if(C===un){ft(P,I);return}if(C===Ta){M(x);return}const Y=()=>{r(P),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(x.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:K}=U,lt=()=>Q(P,Y);K?K(x.el,Y,lt):lt()}else Y()},ft=(x,C)=>{let P;for(;x!==C;)P=f(x),r(x),x=P;r(C)},_t=(x,C,P)=>{const{bum:I,scope:U,update:Y,subTree:Q,um:K}=x;I&&El(I),U.stop(),Y&&(Y.active=!1,j(Q,x,C,P)),K&&Ze(K,C),Ze(()=>{x.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},St=(x,C,P,I=!1,U=!1,Y=0)=>{for(let Q=Y;Q<x.length;Q++)j(x[Q],C,P,I,U)},V=x=>x.shapeFlag&6?V(x.component.subTree):x.shapeFlag&128?x.suspense.next():f(x.anchor||x.el),rt=(x,C,P)=>{x==null?C._vnode&&j(C._vnode,null,null,!0):_(C._vnode||null,x,C,null,null,null,P),Ch(),Op(),C._vnode=x},ut={p:_,um:j,m:k,r:pt,mt:G,mc:D,pc:H,pbc:w,n:V,o:n};let mt,xt;return t&&([mt,xt]=t(ut)),{render:rt,hydrate:mt,createApp:F0(rt,mt)}}function tr({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function Kp(n,t,e=!1){const i=n.children,r=t.children;if(Nt(i)&&Nt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Di(r[s]),a.el=o.el),e||Kp(o,a)),a.type===ol&&(a.el=o.el)}}function X0(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}const q0=n=>n.__isTeleport,un=Symbol.for("v-fgt"),ol=Symbol.for("v-txt"),br=Symbol.for("v-cmt"),Ta=Symbol.for("v-stc"),Qs=[];let On=null;function $e(n=!1){Qs.push(On=n?null:[])}function Y0(){Qs.pop(),On=Qs[Qs.length-1]||null}let po=1;function zh(n){po+=n}function Zp(n){return n.dynamicChildren=po>0?On||rs:null,Y0(),po>0&&On&&On.push(n),n}function dn(n,t,e,i,r,s){return Zp(Bt(n,t,e,i,r,s,!0))}function Jp(n,t,e,i,r){return Zp(ge(n,t,e,i,r,!0))}function Ic(n){return n?n.__v_isVNode===!0:!1}function Fs(n,t){return n.type===t.type&&n.key===t.key}const al="__vInternal",Qp=({key:n})=>n??null,wa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?be(n)||Ne(n)||Vt(n)?{i:Kn,r:n,k:t,f:!!e}:n:null);function Bt(n,t=null,e=null,i=0,r=null,s=n===un?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Qp(t),ref:t&&wa(t),scopeId:nl,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Kn};return a?(Uu(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=be(e)?8:16),po>0&&!o&&On&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&On.push(l),l}const ge=$0;function $0(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===C0)&&(n=br),Ic(n)){const a=gs(n,t,!0);return e&&Uu(a,e),po>0&&!s&&On&&(a.shapeFlag&6?On[On.indexOf(n)]=a:On.push(a)),a.patchFlag|=-2,a}if(ov(n)&&(n=n.__vccOpts),t){t=j0(t);let{class:a,style:l}=t;a&&!be(a)&&(t.class=Xn(a)),se(l)&&(Ap(l)&&!Nt(l)&&(l=Le({},l)),t.style=vu(l))}const o=be(n)?1:m0(n)?128:q0(n)?64:se(n)?4:Vt(n)?2:0;return Bt(n,t,e,i,r,o,s,!0)}function j0(n){return n?Ap(n)||al in n?Le({},n):n:null}function gs(n,t,e=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=t?J0(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Qp(a),ref:t&&t.ref?e&&r?Nt(r)?r.concat(wa(t)):[r,wa(t)]:wa(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==un?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gs(n.ssContent),ssFallback:n.ssFallback&&gs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function K0(n=" ",t=0){return ge(ol,null,n,t)}function tm(n,t){const e=ge(Ta,null,n);return e.staticCount=t,e}function Z0(n="",t=!1){return t?($e(),Jp(br,null,n)):ge(br,null,n)}function qn(n){return n==null||typeof n=="boolean"?ge(br):Nt(n)?ge(un,null,n.slice()):typeof n=="object"?Di(n):ge(ol,null,String(n))}function Di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gs(n)}function Uu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Nt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Uu(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!(al in t)?t._ctx=Kn:r===3&&Kn&&(Kn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Vt(t)?(t={default:t,_ctx:Kn},e=32):(t=String(t),i&64?(e=16,t=[K0(t)]):e=8);n.children=t,n.shapeFlag|=e}function J0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Xn([t.class,i.class]));else if(r==="style")t.style=vu([t.style,i.style]);else if(Ka(r)){const s=t[r],o=i[r];o&&s!==o&&!(Nt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function Vn(n,t,e,i=null){Bn(n,t,7,[e,i])}const Q0=Wp();let tv=0;function ev(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Q0,s={uid:tv++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qp(i,r),emitsOptions:Bp(i,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=c0.bind(null,s),n.ce&&n.ce(s),s}let ze=null,Iu,Dr,kh="__VUE_INSTANCE_SETTERS__";(Dr=Ec()[kh])||(Dr=Ec()[kh]=[]),Dr.push(n=>ze=n),Iu=n=>{Dr.length>1?Dr.forEach(t=>t(n)):Dr[0](n)};const vs=n=>{Iu(n),n.scope.on()},mr=()=>{ze&&ze.scope.off(),Iu(null)};function em(n){return n.vnode.shapeFlag&4}let mo=!1;function nv(n,t=!1){mo=t;const{props:e,children:i}=n.vnode,r=em(n);B0(n,e,r,t),H0(n,i);const s=r?iv(n,t):void 0;return mo=!1,s}function iv(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=Rp(new Proxy(n.ctx,P0));const{setup:i}=e;if(i){const r=n.setupContext=i.length>1?sv(n):null;vs(n),Ls();const s=Hi(i,n,0,[n.props,r]);if(Ds(),mr(),up(s)){if(s.then(mr,mr),t)return s.then(o=>{Hh(n,o,t)}).catch(o=>{tl(o,n,0)});n.asyncDep=s}else Hh(n,s,t)}else nm(n,t)}function Hh(n,t,e){Vt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:se(t)&&(n.setupState=Dp(t)),nm(n,e)}let Gh;function nm(n,t,e){const i=n.type;if(!n.render){if(!t&&Gh&&!i.render){const r=i.template||Lu(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Le(Le({isCustomElement:s,delimiters:a},o),l);i.render=Gh(r,c)}}n.render=i.render||Fn}vs(n),Ls(),L0(n),Ds(),mr()}function rv(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(t,e){return rn(n,"get","$attrs"),t[e]}}))}function sv(n){const t=e=>{n.exposed=e||{}};return{get attrs(){return rv(n)},slots:n.slots,emit:n.emit,expose:t}}function Nu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Dp(Rp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Js)return Js[e](n)},has(t,e){return e in t||e in Js}}))}function ov(n){return Vt(n)&&"__vccOpts"in n}const Sn=(n,t)=>i0(n,t,mo);function im(n,t,e){const i=arguments.length;return i===2?se(t)&&!Nt(t)?Ic(t)?ge(n,null,[t]):ge(n,t):ge(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Ic(e)&&(e=[e]),ge(n,t,e))}const av=Symbol.for("v-scx"),lv=()=>vi(av),cv="3.3.4",uv="http://www.w3.org/2000/svg",hr=typeof document<"u"?document:null,Vh=hr&&hr.createElement("template"),hv={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t?hr.createElementNS(uv,n):hr.createElement(n,e?{is:e}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>hr.createTextNode(n),createComment:n=>hr.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hr.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Vh.innerHTML=i?`<svg>${n}</svg>`:n;const a=Vh.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function fv(n,t,e){const i=n._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}function dv(n,t,e){const i=n.style,r=be(e);if(e&&!r){if(t&&!be(t))for(const s in t)e[s]==null&&Nc(i,s,"");for(const s in e)Nc(i,s,e[s])}else{const s=i.display;r?t!==e&&(i.cssText=e):t&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Wh=/\s*!important$/;function Nc(n,t,e){if(Nt(e))e.forEach(i=>Nc(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=pv(n,t);Wh.test(e)?n.setProperty(Ps(i),e.replace(Wh,""),"important"):n[i]=e}}const Xh=["Webkit","Moz","ms"],wl={};function pv(n,t){const e=wl[t];if(e)return e;let i=ms(t);if(i!=="filter"&&i in n)return wl[t]=i;i=dp(i);for(let r=0;r<Xh.length;r++){const s=Xh[r]+i;if(s in n)return wl[t]=s}return t}const qh="http://www.w3.org/1999/xlink";function mv(n,t,e,i,r){if(i&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(qh,t.slice(6,t.length)):n.setAttributeNS(qh,t,e);else{const s=Sg(t);e==null||s&&!pp(e)?n.removeAttribute(t):n.setAttribute(t,s?"":e)}}function _v(n,t,e,i,r,s,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,r,s),n[t]=e??"";return}const a=n.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=e;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=e??"";c!==u&&(n.value=u),e==null&&n.removeAttribute(t);return}let l=!1;if(e===""||e==null){const c=typeof n[t];c==="boolean"?e=pp(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(t)}function gv(n,t,e,i){n.addEventListener(t,e,i)}function vv(n,t,e,i){n.removeEventListener(t,e,i)}function xv(n,t,e,i,r=null){const s=n._vei||(n._vei={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=yv(t);if(i){const c=s[t]=Ev(i,r);gv(n,a,c,l)}else o&&(vv(n,a,o,l),s[t]=void 0)}}const Yh=/(?:Once|Passive|Capture)$/;function yv(n){let t;if(Yh.test(n)){t={};let i;for(;i=n.match(Yh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ps(n.slice(2)),t]}let Al=0;const Mv=Promise.resolve(),Sv=()=>Al||(Mv.then(()=>Al=0),Al=Date.now());function Ev(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Bn(bv(i,e.value),t,5,[i])};return e.value=n,e.attached=Sv(),e}function bv(n,t){if(Nt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const $h=/^on[a-z]/,Tv=(n,t,e,i,r=!1,s,o,a,l)=>{t==="class"?fv(n,i,r):t==="style"?dv(n,e,i):Ka(t)?pu(t)||xv(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):wv(n,t,i,r))?_v(n,t,i,s,o,a,l):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),mv(n,t,i,r))};function wv(n,t,e,i){return i?!!(t==="innerHTML"||t==="textContent"||t in n&&$h.test(t)&&Vt(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||$h.test(t)&&be(e)?!1:t in n}const Av=Le({patchProp:Tv},hv);let jh;function Rv(){return jh||(jh=V0(Av))}const Cv=(...n)=>{const t=Rv().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Pv(i);if(!r)return;const s=t._component;!Vt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Pv(n){return be(n)?document.querySelector(n):n}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Kr=typeof window<"u";function Lv(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Qt=Object.assign;function Rl(n,t){const e={};for(const i in t){const r=t[i];e[i]=kn(r)?r.map(n):n(r)}return e}const to=()=>{},kn=Array.isArray,Dv=/\/$/,Uv=n=>n.replace(Dv,"");function Cl(n,t,e="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=n(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Fv(i??t,e),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function Iv(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Kh(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function Nv(n,t,e){const i=t.matched.length-1,r=e.matched.length-1;return i>-1&&i===r&&xs(t.matched[i],e.matched[r])&&rm(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function xs(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function rm(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!Ov(n[e],t[e]))return!1;return!0}function Ov(n,t){return kn(n)?Zh(n,t):kn(t)?Zh(t,n):n===t}function Zh(n,t){return kn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Fv(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var _o;(function(n){n.pop="pop",n.push="push"})(_o||(_o={}));var eo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(eo||(eo={}));function Bv(n){if(!n)if(Kr){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Uv(n)}const zv=/^[^#]+#/;function kv(n,t){return n.replace(zv,"#")+t}function Hv(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const ll=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gv(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=Hv(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Jh(n,t){return(history.state?history.state.position-t:-1)+n}const Oc=new Map;function Vv(n,t){Oc.set(n,t)}function Wv(n){const t=Oc.get(n);return Oc.delete(n),t}let Xv=()=>location.protocol+"//"+location.host;function sm(n,t){const{pathname:e,search:i,hash:r}=t,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Kh(l,"")}return Kh(e,n)+i+r}function qv(n,t,e,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=sm(n,location),g=e.value,_=t.value;let m=0;if(f){if(e.value=d,t.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(d);r.forEach(p=>{p(e.value,g,{delta:m,type:_o.pop,direction:m?m>0?eo.forward:eo.back:eo.unknown})})};function l(){o=e.value}function c(f){r.push(f);const d=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Qt({},f.state,{scroll:ll()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Qh(n,t,e,i=!1,r=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:r?ll():null}}function Yv(n){const{history:t,location:e}=window,i={value:sm(n,e)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(e.host&&document.querySelector("base")?n:n.slice(h))+l:Xv()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),e[u?"replace":"assign"](f)}}function o(l,c){const u=Qt({},t.state,Qh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Qt({},r.value,t.state,{forward:l,scroll:ll()});s(u.current,u,!0);const h=Qt({},Qh(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function $v(n){n=Bv(n);const t=Yv(n),e=qv(n,t.state,t.location,t.replace);function i(s,o=!0){o||e.pauseListeners(),history.go(s)}const r=Qt({location:"",base:n,go:i,createHref:kv.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function jv(n){return typeof n=="string"||n&&typeof n=="object"}function om(n){return typeof n=="string"||typeof n=="symbol"}const Ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},am=Symbol("");var tf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(tf||(tf={}));function ys(n,t){return Qt(new Error,{type:n,[am]:!0},t)}function ri(n,t){return n instanceof Error&&am in n&&(t==null||!!(n.type&t))}const ef="[^/]+?",Kv={sensitive:!1,strict:!1,start:!0,end:!0},Zv=/[.+*?^${}()[\]/\\]/g;function Jv(n,t){const e=Qt({},Kv,t),i=[];let r=e.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];e.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(e.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Zv,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=f;s.push({name:g,repeatable:_,optional:m});const y=p||ef;if(y!==ef){d+=10;try{new RegExp(`(${y})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+M.message)}}let v=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,d+=20,m&&(d+=-8),_&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const o=new RegExp(r,e.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=s[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(kn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=kn(p)?p.join("/"):p;if(!y)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function Qv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function tx(n,t){let e=0;const i=n.score,r=t.score;for(;e<i.length&&e<r.length;){const s=Qv(i[e],r[e]);if(s)return s;e++}if(Math.abs(r.length-i.length)===1){if(nf(i))return 1;if(nf(r))return-1}return r.length-i.length}function nf(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const ex={type:0,value:""},nx=/[a-zA-Z0-9_]/;function ix(n){if(!n)return[[]];if(n==="/")return[[ex]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${c}": ${d}`)}let e=0,i=e;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(e===0?s.push({type:0,value:c}):e===1||e===2||e===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),e=1):f();break;case 4:f(),e=i;break;case 1:l==="("?e=2:nx.test(l)?f():(h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=3:u+=l;break;case 3:h(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function rx(n,t,e){const i=Jv(ix(n.path),e),r=Qt(i,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function sx(n,t){const e=[],i=new Map;t=of({strict:!1,end:!0,sensitive:!1},t);function r(u){return i.get(u)}function s(u,h,f){const d=!f,g=ox(u);g.aliasOf=f&&f.record;const _=of(t,u),m=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of v)m.push(Qt({},g,{components:f?f.record.components:g.components,path:M,aliasOf:f?f.record:g}))}let p,y;for(const v of m){const{path:M}=v;if(h&&M[0]!=="/"){const E=h.record.path,T=E[E.length-1]==="/"?"":"/";v.path=h.record.path+(M&&T+M)}if(p=rx(v,h,_),f?f.alias.push(p):(y=y||p,y!==p&&y.alias.push(p),d&&u.name&&!sf(p)&&o(u.name)),g.children){const E=g.children;for(let T=0;T<E.length;T++)s(E[T],p,f&&f.children[T])}f=f||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return y?()=>{o(y)}:to}function o(u){if(om(u)){const h=i.get(u);h&&(i.delete(u),e.splice(e.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=e.indexOf(u);h>-1&&(e.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return e}function l(u){let h=0;for(;h<e.length&&tx(u,e[h])>=0&&(u.record.path!==e[h].record.path||!lm(u,e[h]));)h++;e.splice(h,0,u),u.record.name&&!sf(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},g,_;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw ys(1,{location:u});_=f.record.name,d=Qt(rf(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&rf(u.params,f.keys.map(y=>y.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=e.find(y=>y.re.test(g)),f&&(d=f.parse(g),_=f.record.name);else{if(f=h.name?i.get(h.name):e.find(y=>y.re.test(h.path)),!f)throw ys(1,{location:u,currentLocation:h});_=f.record.name,d=Qt({},h.params,u.params),g=f.stringify(d)}const m=[];let p=f;for(;p;)m.unshift(p.record),p=p.parent;return{name:_,path:g,params:d,matched:m,meta:lx(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function rf(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function ox(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:ax(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function ax(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="boolean"?e:e[i];return t}function sf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function lx(n){return n.reduce((t,e)=>Qt(t,e.meta),{})}function of(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function lm(n,t){return t.children.some(e=>e===n||lm(n,e))}const cm=/#/g,cx=/&/g,ux=/\//g,hx=/=/g,fx=/\?/g,um=/\+/g,dx=/%5B/g,px=/%5D/g,hm=/%5E/g,mx=/%60/g,fm=/%7B/g,_x=/%7C/g,dm=/%7D/g,gx=/%20/g;function Ou(n){return encodeURI(""+n).replace(_x,"|").replace(dx,"[").replace(px,"]")}function vx(n){return Ou(n).replace(fm,"{").replace(dm,"}").replace(hm,"^")}function Fc(n){return Ou(n).replace(um,"%2B").replace(gx,"+").replace(cm,"%23").replace(cx,"%26").replace(mx,"`").replace(fm,"{").replace(dm,"}").replace(hm,"^")}function xx(n){return Fc(n).replace(hx,"%3D")}function yx(n){return Ou(n).replace(cm,"%23").replace(fx,"%3F")}function Mx(n){return n==null?"":yx(n).replace(ux,"%2F")}function Fa(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Sx(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(um," "),o=s.indexOf("="),a=Fa(o<0?s:s.slice(0,o)),l=o<0?null:Fa(s.slice(o+1));if(a in t){let c=t[a];kn(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function af(n){let t="";for(let e in n){const i=n[e];if(e=xx(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(kn(i)?i.map(s=>s&&Fc(s)):[i&&Fc(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function Ex(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=kn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const bx=Symbol(""),lf=Symbol(""),Fu=Symbol(""),pm=Symbol(""),Bc=Symbol("");function Bs(){let n=[];function t(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n,reset:e}}function Ui(n,t,e,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ys(4,{from:e,to:t})):h instanceof Error?a(h):jv(h)?a(ys(2,{from:t,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=n.call(i&&i.instances[r],t,e,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Pl(n,t,e,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(Tx(a)){const c=(a.__vccOpts||a)[t];c&&r.push(Ui(c,e,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Lv(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&Ui(f,e,i,s,o)()}))}}return r}function Tx(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function cf(n){const t=vi(Fu),e=vi(pm),i=Sn(()=>t.resolve(Se(n.to))),r=Sn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=e.matched;if(!u||!h.length)return-1;const f=h.findIndex(xs.bind(null,u));if(f>-1)return f;const d=uf(l[c-2]);return c>1&&uf(u)===d&&h[h.length-1].path!==d?h.findIndex(xs.bind(null,l[c-2])):f}),s=Sn(()=>r.value>-1&&Cx(e.params,i.value.params)),o=Sn(()=>r.value>-1&&r.value===e.matched.length-1&&rm(e.params,i.value.params));function a(l={}){return Rx(l)?t[Se(n.replace)?"replace":"push"](Se(n.to)).catch(to):Promise.resolve()}return{route:i,href:Sn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const wx=bi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cf,setup(n,{slots:t}){const e=Lo(cf(n)),{options:i}=vi(Fu),r=Sn(()=>({[hf(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[hf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&t.default(e);return n.custom?s:im("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},s)}}}),Ax=wx;function Rx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Cx(n,t){for(const e in t){const i=t[e],r=n[e];if(typeof i=="string"){if(i!==r)return!1}else if(!kn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function uf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const hf=(n,t,e)=>n??t??e,Px=bi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=vi(Bc),r=Sn(()=>n.route||i.value),s=vi(lf,0),o=Sn(()=>{let c=Se(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Sn(()=>r.value.matched[o.value]);ba(lf,Sn(()=>o.value+1)),ba(bx,a),ba(Bc,r);const l=Do();return Sa(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!xs(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return ff(e.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=im(f,Qt({},g,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return ff(e.default,{Component:m,route:c})||m}}});function ff(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const mm=Px;function Lx(n){const t=sx(n.routes,n),e=n.parseQuery||Sx,i=n.stringifyQuery||af,r=n.history,s=Bs(),o=Bs(),a=Bs(),l=Qg(Ai);let c=Ai;Kr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rl.bind(null,V=>""+V),h=Rl.bind(null,Mx),f=Rl.bind(null,Fa);function d(V,rt){let ut,mt;return om(V)?(ut=t.getRecordMatcher(V),mt=rt):mt=V,t.addRoute(mt,ut)}function g(V){const rt=t.getRecordMatcher(V);rt&&t.removeRoute(rt)}function _(){return t.getRoutes().map(V=>V.record)}function m(V){return!!t.getRecordMatcher(V)}function p(V,rt){if(rt=Qt({},rt||l.value),typeof V=="string"){const P=Cl(e,V,rt.path),I=t.resolve({path:P.path},rt),U=r.createHref(P.fullPath);return Qt(P,I,{params:f(I.params),hash:Fa(P.hash),redirectedFrom:void 0,href:U})}let ut;if("path"in V)ut=Qt({},V,{path:Cl(e,V.path,rt.path).path});else{const P=Qt({},V.params);for(const I in P)P[I]==null&&delete P[I];ut=Qt({},V,{params:h(P)}),rt.params=h(rt.params)}const mt=t.resolve(ut,rt),xt=V.hash||"";mt.params=u(f(mt.params));const x=Iv(i,Qt({},V,{hash:vx(xt),path:mt.path})),C=r.createHref(x);return Qt({fullPath:x,hash:xt,query:i===af?Ex(V.query):V.query||{}},mt,{redirectedFrom:void 0,href:C})}function y(V){return typeof V=="string"?Cl(e,V,l.value.path):Qt({},V)}function v(V,rt){if(c!==V)return ys(8,{from:rt,to:V})}function M(V){return A(V)}function E(V){return M(Qt(y(V),{replace:!0}))}function T(V){const rt=V.matched[V.matched.length-1];if(rt&&rt.redirect){const{redirect:ut}=rt;let mt=typeof ut=="function"?ut(V):ut;return typeof mt=="string"&&(mt=mt.includes("?")||mt.includes("#")?mt=y(mt):{path:mt},mt.params={}),Qt({query:V.query,hash:V.hash,params:"path"in mt?{}:V.params},mt)}}function A(V,rt){const ut=c=p(V),mt=l.value,xt=V.state,x=V.force,C=V.replace===!0,P=T(ut);if(P)return A(Qt(y(P),{state:typeof P=="object"?Qt({},xt,P.state):xt,force:x,replace:C}),rt||ut);const I=ut;I.redirectedFrom=rt;let U;return!x&&Nv(i,mt,ut)&&(U=ys(16,{to:I,from:mt}),k(mt,mt,!0,!1)),(U?Promise.resolve(U):w(I,mt)).catch(Y=>ri(Y)?ri(Y,2)?Y:st(Y):H(Y,I,mt)).then(Y=>{if(Y){if(ri(Y,2))return A(Qt({replace:C},y(Y.to),{state:typeof Y.to=="object"?Qt({},xt,Y.to.state):xt,force:x}),rt||I)}else Y=J(I,mt,!0,C,xt);return z(I,mt,Y),Y})}function D(V,rt){const ut=v(V,rt);return ut?Promise.reject(ut):Promise.resolve()}function S(V){const rt=ft.values().next().value;return rt&&typeof rt.runWithContext=="function"?rt.runWithContext(V):V()}function w(V,rt){let ut;const[mt,xt,x]=Dx(V,rt);ut=Pl(mt.reverse(),"beforeRouteLeave",V,rt);for(const P of mt)P.leaveGuards.forEach(I=>{ut.push(Ui(I,V,rt))});const C=D.bind(null,V,rt);return ut.push(C),St(ut).then(()=>{ut=[];for(const P of s.list())ut.push(Ui(P,V,rt));return ut.push(C),St(ut)}).then(()=>{ut=Pl(xt,"beforeRouteUpdate",V,rt);for(const P of xt)P.updateGuards.forEach(I=>{ut.push(Ui(I,V,rt))});return ut.push(C),St(ut)}).then(()=>{ut=[];for(const P of V.matched)if(P.beforeEnter&&!rt.matched.includes(P))if(kn(P.beforeEnter))for(const I of P.beforeEnter)ut.push(Ui(I,V,rt));else ut.push(Ui(P.beforeEnter,V,rt));return ut.push(C),St(ut)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),ut=Pl(x,"beforeRouteEnter",V,rt),ut.push(C),St(ut))).then(()=>{ut=[];for(const P of o.list())ut.push(Ui(P,V,rt));return ut.push(C),St(ut)}).catch(P=>ri(P,8)?P:Promise.reject(P))}function z(V,rt,ut){for(const mt of a.list())S(()=>mt(V,rt,ut))}function J(V,rt,ut,mt,xt){const x=v(V,rt);if(x)return x;const C=rt===Ai,P=Kr?history.state:{};ut&&(mt||C?r.replace(V.fullPath,Qt({scroll:C&&P&&P.scroll},xt)):r.push(V.fullPath,xt)),l.value=V,k(V,rt,ut,C),st()}let B;function G(){B||(B=r.listen((V,rt,ut)=>{if(!_t.listening)return;const mt=p(V),xt=T(mt);if(xt){A(Qt(xt,{replace:!0}),mt).catch(to);return}c=mt;const x=l.value;Kr&&Vv(Jh(x.fullPath,ut.delta),ll()),w(mt,x).catch(C=>ri(C,12)?C:ri(C,2)?(A(C.to,mt).then(P=>{ri(P,20)&&!ut.delta&&ut.type===_o.pop&&r.go(-1,!1)}).catch(to),Promise.reject()):(ut.delta&&r.go(-ut.delta,!1),H(C,mt,x))).then(C=>{C=C||J(mt,x,!1),C&&(ut.delta&&!ri(C,8)?r.go(-ut.delta,!1):ut.type===_o.pop&&ri(C,20)&&r.go(-1,!1)),z(mt,x,C)}).catch(to)}))}let W=Bs(),Z=Bs(),F;function H(V,rt,ut){st(V);const mt=Z.list();return mt.length?mt.forEach(xt=>xt(V,rt,ut)):console.error(V),Promise.reject(V)}function nt(){return F&&l.value!==Ai?Promise.resolve():new Promise((V,rt)=>{W.add([V,rt])})}function st(V){return F||(F=!V,G(),W.list().forEach(([rt,ut])=>V?ut(V):rt()),W.reset()),V}function k(V,rt,ut,mt){const{scrollBehavior:xt}=n;if(!Kr||!xt)return Promise.resolve();const x=!ut&&Wv(Jh(V.fullPath,0))||(mt||!ut)&&history.state&&history.state.scroll||null;return Ip().then(()=>xt(V,rt,x)).then(C=>C&&Gv(C)).catch(C=>H(C,V,rt))}const j=V=>r.go(V);let pt;const ft=new Set,_t={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:_,resolve:p,options:n,push:M,replace:E,go:j,back:()=>j(-1),forward:()=>j(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:nt,install(V){const rt=this;V.component("RouterLink",Ax),V.component("RouterView",mm),V.config.globalProperties.$router=rt,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(l)}),Kr&&!pt&&l.value===Ai&&(pt=!0,M(r.location).catch(xt=>{}));const ut={};for(const xt in Ai)ut[xt]=Sn(()=>l.value[xt]);V.provide(Fu,rt),V.provide(pm,Lo(ut)),V.provide(Bc,l);const mt=V.unmount;ft.add(V),V.unmount=function(){ft.delete(V),ft.size<1&&(c=Ai,B&&B(),B=null,l.value=Ai,pt=!1,F=!1),mt()}}};function St(V){return V.reduce((rt,ut)=>rt.then(()=>S(ut)),Promise.resolve())}return _t}function Dx(n,t){const e=[],i=[],r=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(n.matched.find(c=>xs(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>xs(c,l))||r.push(l))}return[e,i,r]}const Ux=bi({__name:"App",setup(n){return(t,e)=>($e(),Jp(Se(mm)))}}),Ix="modulepreload",Nx=function(n){return"/"+n},df={},Ox=function(t,e,i){if(!e||e.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=Nx(s),s in df)return;df[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Ix,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Fx="/assets/logo-384f4d38.png",Cr=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},Bx={},zx={class:"h-screen flex flex-col justify-center"};function kx(n,t){return $e(),dn("div",zx,">")}const Hx=Cr(Bx,[["render",kx]]),_m=n=>(il("data-v-1e137074"),n=n(),rl(),n),Gx={class:"h-screen flex flex-row-reverse items-center justify-between"},Vx={class:"mr-24 max-w-xxl p-6 mx-auto bgColor text-white"},Wx=_m(()=>Bt("h1",{class:"text-6xl"},"Service",-1)),Xx=_m(()=>Bt("p",{class:"text-md mt-5 max-w-xl"}," There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, ",-1)),qx={class:"grid grid-cols-2 gap-4 mb-2 mt-2"},Yx={class:"text-xl"},$x={class:"material-icons iconStyle"},jx={class:"text-xl"},Kx={class:"w-60 text-md"},Zx=bi({__name:"Service",setup(n){const t=Do([{icon:"code",title:"Webdevelopment",text:"I can code as webdeveloper"},{icon:"developer_board",title:"Fullstack",text:"I am a fullstack developer that knows how to code in Javascript"},{icon:"desktop_windows",title:"Wordpress",text:"I can build Wordpress websites"},{icon:"palette",title:"Design",text:"I love to design websites"}]);return(e,i)=>($e(),dn("div",Gx,[Bt("div",Vx,[Wx,Xx,Bt("div",qx,[($e(!0),dn(un,null,Pu(t.value,(r,s)=>($e(),dn("div",{class:"squareColor p-5 grid grid-cols-1",key:s},[Bt("div",Yx,[Bt("i",$x,zi(r.icon),1)]),Bt("div",jx,zi(r.title),1),Bt("div",Kx,zi(r.text),1)]))),128))])])]))}});const Jx=Cr(Zx,[["__scopeId","data-v-1e137074"]]),gm=n=>(il("data-v-0bdee3e1"),n=n(),rl(),n),Qx={class:"h-screen flex items-center justify-between"},ty={class:"ml-24 max-w-xxl p-6 mx-auto bgColor text-white"},ey=gm(()=>Bt("h1",{class:"text-6xl"},"My latest Projects",-1)),ny=gm(()=>Bt("p",{class:"text-md mt-5 max-w-xl"}," There are many variations of passages of Lorem Ipsum available... ",-1)),iy={class:"grid grid-cols-2 gap-4 mt-5"},ry=["src","alt"],sy={class:"overlay-content absolute inset-0 opacity-0 hover:opacity-100 transition-all duration-200 ease-out p-4 h-full flex flex-col justify-between text-white"},oy={class:"text-xl font-bold"},ay={class:"text-md mb-2"},ly={class:"text-sm description opacity-0 hover:opacity-100 transition-all duration-500 delay-150"},cy=bi({__name:"Portfolio",setup(n){const t=[{title:"Project 1",subtitle:"Subtitle 1",image:"src/assets/icons/quackoLogo1.svg",description:"Lorem ipsum dolor sit amet..."},{title:"Project 2",subtitle:"Subtitle 2",image:"src/assets/icons/quackoLogo1.svg",description:"Consectetur adipiscing elit..."}];return(e,i)=>($e(),dn("div",Qx,[Bt("div",ty,[ey,ny,Bt("div",iy,[($e(),dn(un,null,Pu(t,r=>Bt("div",{key:r.title,class:"relative overflow-hidden project-card transform transition-transform duration-200 hover:scale-105"},[Bt("img",{src:r.image,alt:r.title,class:"w-60 h-full object-cover"},null,8,ry),Bt("div",sy,[Bt("div",null,[Bt("h2",oy,zi(r.title),1),Bt("h3",ay,zi(r.subtitle),1)]),Bt("p",ly,zi(r.description),1)])])),64))])])]))}});const uy=Cr(cy,[["__scopeId","data-v-0bdee3e1"]]),vm=n=>(il("data-v-816128a7"),n=n(),rl(),n),hy={class:"h-screen flex flex-row items-center justify-between"},fy={class:"ml-24 max-w-xxl p-6 mx-auto bgColor text-white"},dy=vm(()=>Bt("h1",{class:"text-6xl"},"About Me",-1)),py=vm(()=>Bt("p",{class:"text-md mt-5 max-w-xl"}," There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, ",-1)),my={class:"flex space-x-4 mb-2 mt-2 text-xl"},_y=["onClick"],gy={class:"text-md mt-5 max-w-xl"},vy=bi({__name:"About",setup(n){const t=[{title:"Main skills",text:"There are many variations of passages of Lorem Ipsum available..."},{title:"Experience",text:"Here are some of my projects..."},{title:"Educatian & Certification",text:"Here are some of my skills..."},{title:"Hobbies",text:"Here's how you can contact me..."}];let e=Do(t[0]);return(i,r)=>($e(),dn("div",hy,[Bt("div",fy,[dy,py,Bt("div",my,[($e(),dn(un,null,Pu(t,s=>Bt("button",{key:s.title,class:Xn(["btn-tab",{activeTab:Se(e).title===s.title}]),onClick:o=>Ne(e)?e.value=s:e=s},zi(s.title),11,_y)),64))]),Bt("p",gy,zi(Se(e).text),1)])]))}});const xy=Cr(vy,[["__scopeId","data-v-816128a7"]]);const yy={},My={class:"overlay h-screen flex flex-row-reverse items-center justify-between"},Sy=tm('<div class="mr-24 max-w-xxl p-6 mx-auto bgColor text-white" data-v-e1d46970><h1 class="text-6xl mb-2" data-v-e1d46970>Kontakt</h1><p data-v-e1d46970>Are you interested or do you have further questions? Get into contact with me!</p><form class="flex flex-col mt-4 space-y-4" data-v-e1d46970><div data-v-e1d46970><label class="block text-sm font-medium" for="name" data-v-e1d46970>Name</label><input class="mt-1 px-2 block w-full h-10 focus:outline-none focus:border-2 focus:border-orange-500 shadow-sm" id="name" type="text" required data-v-e1d46970></div><div data-v-e1d46970><label class="block text-sm font-medium" for="phone" data-v-e1d46970>Phone</label><input class="mt-1 px-2 block w-full h-10 focus:outline-none focus:border-2 focus:border-orange-500 shadow-sm" id="phone" type="tel" required data-v-e1d46970></div><div data-v-e1d46970><label class="block text-sm font-medium" for="email" data-v-e1d46970>E-Mail</label><input class="mt-1 px-2 block w-full h-10 focus:outline-none focus:border-2 focus:border-orange-500 shadow-sm" id="email" type="email" required data-v-e1d46970></div><div data-v-e1d46970><label class="block text-sm font-medium" for="message" data-v-e1d46970>Message</label><textarea class="mt-1 px-2 py-1 block w-full focus:outline-none focus:border-2 focus:border-orange-500 shadow-sm" id="message" rows="4" required data-v-e1d46970></textarea></div><button class="mt-4 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600" type="submit" data-v-e1d46970> Send </button></form></div>',1),Ey=[Sy];function by(n,t){return $e(),dn("div",My,Ey)}const Ty=Cr(yy,[["render",by],["__scopeId","data-v-e1d46970"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bu="154",wy=0,pf=1,Ay=2,xm=1,Ry=2,fi=3,Yi=0,je=1,_i=2,Gi=0,ls=1,mf=2,_f=3,gf=4,Cy=5,Zr=100,Py=101,Ly=102,vf=103,xf=104,Dy=200,Uy=201,Iy=202,Ny=203,ym=204,Mm=205,Oy=206,Fy=207,By=208,zy=209,ky=210,Hy=0,Gy=1,Vy=2,zc=3,Wy=4,Xy=5,qy=6,Yy=7,zu=0,$y=1,jy=2,xi=0,Ky=1,Zy=2,Jy=3,Qy=4,tM=5,Sm=300,Ms=301,Ss=302,kc=303,Hc=304,cl=306,Gc=1e3,In=1001,Vc=1002,Ye=1003,yf=1004,Ll=1005,yn=1006,eM=1007,go=1008,Vi=1009,nM=1010,iM=1011,ku=1012,Em=1013,Ii=1014,Ni=1015,vo=1016,bm=1017,Tm=1018,_r=1020,rM=1021,Nn=1023,sM=1024,oM=1025,gr=1026,Es=1027,aM=1028,wm=1029,lM=1030,Am=1031,Rm=1033,Dl=33776,Ul=33777,Il=33778,Nl=33779,Mf=35840,Sf=35841,Ef=35842,bf=35843,cM=36196,Tf=37492,wf=37496,Af=37808,Rf=37809,Cf=37810,Pf=37811,Lf=37812,Df=37813,Uf=37814,If=37815,Nf=37816,Of=37817,Ff=37818,Bf=37819,zf=37820,kf=37821,Ol=36492,uM=36283,Hf=36284,Gf=36285,Vf=36286,Cm=3e3,vr=3001,hM=3200,fM=3201,Pm=0,dM=1,xr="",Gt="srgb",ti="srgb-linear",Lm="display-p3",Fl=7680,pM=519,mM=512,_M=513,gM=514,vM=515,xM=516,yM=517,MM=518,SM=519,Wf=35044,Xf="300 es",Wc=1035,gi=2e3,Ba=2001;class Us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qf=1234567;const cs=Math.PI/180,xo=180/Math.PI;function Pr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Ue(n,t,e){return Math.max(t,Math.min(e,n))}function Hu(n,t){return(n%t+t)%t}function EM(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function bM(n,t,e){return n!==t?(e-n)/(t-n):0}function no(n,t,e){return(1-e)*n+e*t}function TM(n,t,e,i){return no(n,t,1-Math.exp(-e*i))}function wM(n,t=1){return t-Math.abs(Hu(n,t*2)-t)}function AM(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function RM(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function CM(n,t){return n+Math.floor(Math.random()*(t-n+1))}function PM(n,t){return n+Math.random()*(t-n)}function LM(n){return n*(.5-Math.random())}function DM(n){n!==void 0&&(qf=n);let t=qf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function UM(n){return n*cs}function IM(n){return n*xo}function Xc(n){return(n&n-1)===0&&n!==0}function NM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function za(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function OM(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $s(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wn={DEG2RAD:cs,RAD2DEG:xo,generateUUID:Pr,clamp:Ue,euclideanModulo:Hu,mapLinear:EM,inverseLerp:bM,lerp:no,damp:TM,pingpong:wM,smoothstep:AM,smootherstep:RM,randInt:CM,randFloat:PM,randFloatSpread:LM,seededRandom:DM,degToRad:UM,radToDeg:IM,isPowerOfTwo:Xc,ceilPowerOfTwo:NM,floorPowerOfTwo:za,setQuaternionFromProperEuler:OM,normalize:Ke,denormalize:$s};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,r,s,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],v=r[4],M=r[7],E=r[2],T=r[5],A=r[8];return s[0]=o*_+a*y+l*E,s[3]=o*m+a*v+l*T,s[6]=o*p+a*M+l*A,s[1]=c*_+u*y+h*E,s[4]=c*m+u*v+h*T,s[7]=c*p+u*M+h*A,s[2]=f*_+d*y+g*E,s[5]=f*m+d*v+g*T,s[8]=f*p+d*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=e*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bl.makeScale(t,e)),this}rotate(t){return this.premultiply(Bl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bl=new Wt;function Dm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Yf={};function io(n){n in Yf||(Yf[n]=!0,console.warn(n))}function us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const FM=new Wt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),BM=new Wt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function zM(n){return n.convertSRGBToLinear().applyMatrix3(BM)}function kM(n){return n.applyMatrix3(FM).convertLinearToSRGB()}const HM={[ti]:n=>n,[Gt]:n=>n.convertSRGBToLinear(),[Lm]:zM},GM={[ti]:n=>n,[Gt]:n=>n.convertLinearToSRGB(),[Lm]:kM},Rn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return ti},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=HM[t],r=GM[e];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}};let Ur;class Um{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ur===void 0&&(Ur=yo("canvas")),Ur.width=t.width,Ur.height=t.height;const i=Ur.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ur}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=us(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(us(e[i]/255)*255):e[i]=us(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VM=0;class Im{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Pr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kl(r[o].image)):s.push(kl(r[o]))}else s=kl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Um.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WM=0;class Qe extends Us{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,i=In,r=In,s=yn,o=go,a=Nn,l=Vi,c=Qe.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Pr(),this.name="",this.source=new Im(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===vr?Gt:xr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gc:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gc:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?vr:Cm}set encoding(t){io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===vr?Gt:xr}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Sm;Qe.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,i=0,r=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(d+1)/2,E=(p+1)/2,T=(u+f)/4,A=(h+_)/4,D=(g+m)/4;return v>M&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):M>E?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=D/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=D/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tr extends Us{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vr?Gt:xr),this.texture=new Qe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:yn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Im(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nm extends Qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class XM extends Qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),T=Math.atan2(E,p*y);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}const M=a*y;if(l=l*m+f*M,c=c*m+d*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($f.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($f.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*r-a*i,u=l*i+a*e-s*r,h=l*r+s*i-o*e,f=-s*e-o*i-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hl.copy(this).projectOnVector(t),this.sub(Hl)}reflect(t){return this.sub(Hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hl=new N,$f=new Uo;class Io{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox),Ir.applyMatrix4(t.matrixWorld),this.union(Ir);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)oi.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(oi)}else r.boundingBox===null&&r.computeBoundingBox(),Ir.copy(r.boundingBox),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Xo.subVectors(this.max,zs),Nr.subVectors(t.a,zs),Or.subVectors(t.b,zs),Fr.subVectors(t.c,zs),Ri.subVectors(Or,Nr),Ci.subVectors(Fr,Or),er.subVectors(Nr,Fr);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-er.z,er.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,er.z,0,-er.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-er.y,er.x,0];return!Gl(e,Nr,Or,Fr,Xo)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,Nr,Or,Fr,Xo))?!1:(qo.crossVectors(Ri,Ci),e=[qo.x,qo.y,qo.z],Gl(e,Nr,Or,Fr,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const si=[new N,new N,new N,new N,new N,new N,new N,new N],oi=new N,Ir=new Io,Nr=new N,Or=new N,Fr=new N,Ri=new N,Ci=new N,er=new N,zs=new N,Xo=new N,qo=new N,nr=new N;function Gl(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){nr.fromArray(n,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=t.dot(nr),c=e.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qM=new Io,ks=new N,Vl=new N;class ul{constructor(t=new N,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qM.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);const e=ks.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(Vl)),this.expandByPoint(ks.copy(t.center).sub(Vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new N,Wl=new N,Yo=new N,Pi=new N,Xl=new N,$o=new N,ql=new N;class Om{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Wl.copy(t).add(e).multiplyScalar(.5),Yo.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(Wl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Yo),a=Pi.dot(this.direction),l=-Pi.dot(Yo),c=Pi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wl).addScaledVector(Yo,f),d}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,r,s){Xl.subVectors(e,t),$o.subVectors(i,t),ql.crossVectors(Xl,$o);let o=this.direction.dot(ql),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);const l=a*this.direction.dot($o.crossVectors(Pi,$o));if(l<0)return null;const c=a*this.direction.dot(Xl.cross(Pi));if(c<0||l+c>o)return null;const u=-a*Pi.dot(ql);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,r,s,o,a,l,c,u,h,f,d,g,_,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,f,d,g,_,m)}set(t,e,i,r,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Br.setFromMatrixColumn(t,0).length(),s=1/Br.setFromMatrixColumn(t,1).length(),o=1/Br.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(YM,t,$M)}lookAt(t,e,i){const r=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Li.crossVectors(i,an),Li.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Li.crossVectors(i,an)),Li.normalize(),jo.crossVectors(an,Li),r[0]=Li.x,r[4]=jo.x,r[8]=an.x,r[1]=Li.y,r[5]=jo.y,r[9]=an.y,r[2]=Li.z,r[6]=jo.z,r[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],v=i[7],M=i[11],E=i[15],T=r[0],A=r[4],D=r[8],S=r[12],w=r[1],z=r[5],J=r[9],B=r[13],G=r[2],W=r[6],Z=r[10],F=r[14],H=r[3],nt=r[7],st=r[11],k=r[15];return s[0]=o*T+a*w+l*G+c*H,s[4]=o*A+a*z+l*W+c*nt,s[8]=o*D+a*J+l*Z+c*st,s[12]=o*S+a*B+l*F+c*k,s[1]=u*T+h*w+f*G+d*H,s[5]=u*A+h*z+f*W+d*nt,s[9]=u*D+h*J+f*Z+d*st,s[13]=u*S+h*B+f*F+d*k,s[2]=g*T+_*w+m*G+p*H,s[6]=g*A+_*z+m*W+p*nt,s[10]=g*D+_*J+m*Z+p*st,s[14]=g*S+_*B+m*F+p*k,s[3]=y*T+v*w+M*G+E*H,s[7]=y*A+v*z+M*W+E*nt,s[11]=y*D+v*J+M*Z+E*st,s[15]=y*S+v*B+M*F+E*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+_*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+e*c*h-e*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-e*l*h+e*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,M=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,E=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,T=e*y+i*v+r*M+s*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(_*f*s-h*m*s-_*r*d+i*m*d+h*r*p-i*f*p)*A,t[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*A,t[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*A,t[4]=v*A,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*A,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*A,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*A,t[8]=M*A,t[9]=(g*h*s-u*_*s-g*i*d+e*_*d+u*i*p-e*h*p)*A,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*p+e*a*p)*A,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*d-e*a*d)*A,t[12]=E*A,t[13]=(u*_*r-g*h*r+g*i*f-e*_*f-u*i*m+e*h*m)*A,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*A,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*f+e*a*f)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,y=l*c,v=l*u,M=l*h,E=i.x,T=i.y,A=i.z;return r[0]=(1-(_+p))*E,r[1]=(d+M)*E,r[2]=(g-v)*E,r[3]=0,r[4]=(d-M)*T,r[5]=(1-(f+p))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+v)*A,r[9]=(m-y)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Cn.copy(this);const c=1/s,u=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,e.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=gi){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let d,g;if(a===gi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ba)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=gi){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(o-s),f=(e+t)*c,d=(i+r)*u;let g,_;if(a===gi)g=(o+s)*h,_=-2*h;else if(a===Ba)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Br=new N,Cn=new pe,YM=new N(0,0,0),$M=new N(1,1,1),Li=new N,jo=new N,an=new N,jf=new pe,Kf=new Uo;class hl{constructor(t=0,e=0,i=0,r=hl.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return jf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kf.setFromEuler(this),this.setFromQuaternion(Kf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hl.DEFAULT_ORDER="XYZ";class Fm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jM=0;const Zf=new N,zr=new Uo,li=new pe,Ko=new N,Hs=new N,KM=new N,ZM=new Uo,Jf=new N(1,0,0),Qf=new N(0,1,0),td=new N(0,0,1),JM={type:"added"},ed={type:"removed"};class ve extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new N,e=new hl,i=new Uo,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Wt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(Jf,t)}rotateY(t){return this.rotateOnAxis(Qf,t)}rotateZ(t){return this.rotateOnAxis(td,t)}translateOnAxis(t,e){return Zf.copy(t).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jf,t)}translateY(t){return this.translateOnAxis(Qf,t)}translateZ(t){return this.translateOnAxis(td,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ko.copy(t):Ko.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Hs,Ko,this.up):li.lookAt(Ko,Hs,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(li),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(JM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ed)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ed)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,KM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,ZM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ve.DEFAULT_UP=new N(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new N,ci=new N,Yl=new N,ui=new N,kr=new N,Hr=new N,nd=new N,$l=new N,jl=new N,Kl=new N;let Zo=!1;class Mn{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Pn.subVectors(t,e),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Pn.subVectors(r,e),ci.subVectors(i,e),Yl.subVectors(t,e);const o=Pn.dot(Pn),a=Pn.dot(ci),l=Pn.dot(Yl),c=ci.dot(ci),u=ci.dot(Yl),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(t,e,i,r,s,o,a,l){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),this.getInterpolation(t,e,i,r,s,o,a,l)}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,ui),l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l}static isFrontFacing(t,e,i,r){return Pn.subVectors(i,e),ci.subVectors(t,e),Pn.cross(ci).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Pn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),Mn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return Mn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;kr.subVectors(r,i),Hr.subVectors(s,i),$l.subVectors(t,i);const l=kr.dot($l),c=Hr.dot($l);if(l<=0&&c<=0)return e.copy(i);jl.subVectors(t,r);const u=kr.dot(jl),h=Hr.dot(jl);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(kr,o);Kl.subVectors(t,s);const d=kr.dot(Kl),g=Hr.dot(Kl);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Hr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return nd.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(nd,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(kr,o).addScaledVector(Hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let QM=0;class Is extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=ls,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ym,this.blendDst=Mm,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fl,this.stencilZFail=Fl,this.stencilZPass=Fl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Zl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Gt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Rn.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Rn.workingColorSpace){return this.r=t,this.g=e,this.b=i,Rn.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Rn.workingColorSpace){if(t=Hu(t,1),e=Ue(e,0,1),i=Ue(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Zl(o,s,t+1/3),this.g=Zl(o,s,t),this.b=Zl(o,s,t-1/3)}return Rn.toWorkingColorSpace(this,r),this}setStyle(t,e=Gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Gt){const i=Bm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=zl(t.r),this.g=zl(t.g),this.b=zl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gt){return Rn.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ue(Fe.r*255,0,255))*65536+Math.round(Ue(Fe.g*255,0,255))*256+Math.round(Ue(Fe.b*255,0,255))}getHexString(t=Gt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Rn.workingColorSpace){Rn.fromWorkingColorSpace(Fe.copy(this),e);const i=Fe.r,r=Fe.g,s=Fe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Rn.workingColorSpace){return Rn.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Gt){Rn.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,r=Fe.b;return t!==Gt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ln),Ln.h+=t,Ln.s+=e,Ln.l+=i,this.setHSL(Ln.h,Ln.s,Ln.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(Jo);const i=no(Ln.h,Jo.h,e),r=no(Ln.s,Jo.s,e),s=no(Ln.l,Jo.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Kt;Kt.NAMES=Bm;class Qr extends Is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new N,Qo=new bt;class Jn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wf,this.updateRange={offset:0,count:-1},this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qo.fromBufferAttribute(this,e),Qo.applyMatrix3(t),this.setXY(e,Qo.x,Qo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wf&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class zm extends Jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class km extends Jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends Jn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let tS=0;const gn=new pe,Jl=new ve,Gr=new N,ln=new Io,Gs=new Io,Ce=new N;class _n extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dm(t)?km:zm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,i){return gn.makeTranslation(t,e,i),this.applyMatrix4(gn),this}scale(t,e,i){return gn.makeScale(t,e,i),this.applyMatrix4(gn),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(ln.min,Gs.min),ln.expandByPoint(Ce),Ce.addVectors(ln.max,Gs.max),ln.expandByPoint(Ce)):(ln.expandByPoint(Gs.min),ln.expandByPoint(Gs.max))}ln.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ce.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ce));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ce.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(t,c),Ce.add(Gr)),r=Math.max(r,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new N,u[w]=new N;const h=new N,f=new N,d=new N,g=new bt,_=new bt,m=new bt,p=new N,y=new N;function v(w,z,J){h.fromArray(r,w*3),f.fromArray(r,z*3),d.fromArray(r,J*3),g.fromArray(o,w*2),_.fromArray(o,z*2),m.fromArray(o,J*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);const B=1/(_.x*m.y-m.x*_.y);isFinite(B)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(B),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(B),c[w].add(p),c[z].add(p),c[J].add(p),u[w].add(y),u[z].add(y),u[J].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,z=M.length;w<z;++w){const J=M[w],B=J.start,G=J.count;for(let W=B,Z=B+G;W<Z;W+=3)v(i[W+0],i[W+1],i[W+2])}const E=new N,T=new N,A=new N,D=new N;function S(w){A.fromArray(s,w*3),D.copy(A);const z=c[w];E.copy(z),E.sub(A.multiplyScalar(A.dot(z))).normalize(),T.crossVectors(D,z);const B=T.dot(u[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=B}for(let w=0,z=M.length;w<z;++w){const J=M[w],B=J.start,G=J.count;for(let W=B,Z=B+G;W<Z;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Jn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const id=new pe,ir=new Om,ta=new ul,rd=new N,Vr=new N,Wr=new N,Xr=new N,Ql=new N,ea=new N,na=new bt,ia=new bt,ra=new bt,sd=new N,od=new N,ad=new N,sa=new N,oa=new N;class Pe extends ve{constructor(t=new _n,e=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ql.fromBufferAttribute(h,t),o?ea.addScaledVector(Ql,u):ea.addScaledVector(Ql.sub(e),u))}e.add(ea)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ir.copy(t.ray).recast(t.near),!(ta.containsPoint(ir.origin)===!1&&(ir.intersectSphere(ta,rd)===null||ir.origin.distanceToSquared(rd)>(t.far-t.near)**2))&&(id.copy(s).invert(),ir.copy(t.ray).applyMatrix4(id),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ir)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,E=v;M<E;M+=3){const T=a.getX(M),A=a.getX(M+1),D=a.getX(M+2);r=aa(this,p,t,i,c,u,h,T,A,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);r=aa(this,o,t,i,c,u,h,y,v,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,E=v;M<E;M+=3){const T=M,A=M+1,D=M+2;r=aa(this,p,t,i,c,u,h,T,A,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,M=m+2;r=aa(this,o,t,i,c,u,h,y,v,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function eS(n,t,e,i,r,s,o,a){let l;if(t.side===je?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Yi,a),l===null)return null;oa.copy(a),oa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(oa);return c<e.near||c>e.far?null:{distance:c,point:oa.clone(),object:n}}function aa(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Vr),n.getVertexPosition(l,Wr),n.getVertexPosition(c,Xr);const u=eS(n,t,e,i,Vr,Wr,Xr,sa);if(u){r&&(na.fromBufferAttribute(r,a),ia.fromBufferAttribute(r,l),ra.fromBufferAttribute(r,c),u.uv=Mn.getInterpolation(sa,Vr,Wr,Xr,na,ia,ra,new bt)),s&&(na.fromBufferAttribute(s,a),ia.fromBufferAttribute(s,l),ra.fromBufferAttribute(s,c),u.uv1=Mn.getInterpolation(sa,Vr,Wr,Xr,na,ia,ra,new bt),u.uv2=u.uv1),o&&(sd.fromBufferAttribute(o,a),od.fromBufferAttribute(o,l),ad.fromBufferAttribute(o,c),u.normal=Mn.getInterpolation(sa,Vr,Wr,Xr,sd,od,ad,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Mn.getNormal(Vr,Wr,Xr,h.normal),u.face=h}return u}class yi extends _n{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(h,2));function g(_,m,p,y,v,M,E,T,A,D,S){const w=M/A,z=E/D,J=M/2,B=E/2,G=T/2,W=A+1,Z=D+1;let F=0,H=0;const nt=new N;for(let st=0;st<Z;st++){const k=st*z-B;for(let j=0;j<W;j++){const pt=j*w-J;nt[_]=pt*y,nt[m]=k*v,nt[p]=G,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=T>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(j/A),h.push(1-st/D),F+=1}}for(let st=0;st<D;st++)for(let k=0;k<A;k++){const j=f+k+W*st,pt=f+k+W*(st+1),ft=f+(k+1)+W*(st+1),_t=f+(k+1)+W*st;l.push(j,pt,_t),l.push(pt,ft,_t),H+=6}a.addGroup(d,H,S),d+=H,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function qe(n){const t={};for(let e=0;e<n.length;e++){const i=bs(n[e]);for(const r in i)t[r]=i[r]}return t}function nS(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Hm(n){return n.getRenderTarget()===null?n.outputColorSpace:ti}const iS={clone:bs,merge:qe};var rS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rS,this.fragmentShader=sS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=nS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gm extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends Gm{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qr=-90,Yr=1;class oS extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new hn(qr,Yr,t,e);r.layers=this.layers,this.add(r);const s=new hn(qr,Yr,t,e);s.layers=this.layers,this.add(s);const o=new hn(qr,Yr,t,e);o.layers=this.layers,this.add(o);const a=new hn(qr,Yr,t,e);a.layers=this.layers,this.add(a);const l=new hn(qr,Yr,t,e);l.layers=this.layers,this.add(l);const c=new hn(qr,Yr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=xi,t.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,r),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=d,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Vm extends Qe{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class aS extends Tr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===vr?Gt:xr),this.texture=new Vm(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yi(5,5,5),s=new wr({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:Gi});s.uniforms.tEquirect.value=e;const o=new Pe(r,s),a=e.minFilter;return e.minFilter===go&&(e.minFilter=yn),new oS(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const tc=new N,lS=new N,cS=new Wt;class ar{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=tc.subVectors(i,e).cross(lS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||cS.getNormalMatrix(t),r=this.coplanarPoint(tc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new ul,la=new N;class Gu{constructor(t=new ar,e=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gi){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,m-d,M-p).normalize(),i[1].setComponents(l+s,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+u,m+g,M+y).normalize(),i[3].setComponents(l-o,f-u,m-g,M-y).normalize(),i[4].setComponents(l-a,f-h,m-_,M-v).normalize(),e===gi)i[5].setComponents(l+a,f+h,m+_,M+v).normalize();else if(e===Ba)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(la.x=r.normal.x>0?t.max.x:t.min.x,la.y=r.normal.y>0?t.max.y:t.min.y,la.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wm(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function uS(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;n.bindBuffer(h,c),d.count===-1?n.bufferSubData(h,0,f):(e?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Vu extends _n{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let v=0;v<c;v++){const M=v*h-s;g.push(M,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,M=y+c*(p+1),E=y+1+c*(p+1),T=y+1+c*p;d.push(v,M,T),d.push(M,E,T)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vu(t.width,t.height,t.widthSegments,t.heightSegments)}}var hS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ES=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,DS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,US=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zS="gl_FragColor = linearToOutputTexel( gl_FragColor );",kS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,JS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,lE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cE=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,fE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_E=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,gE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ib=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_b=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sb=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ub=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:hS,alphahash_pars_fragment:fS,alphamap_fragment:dS,alphamap_pars_fragment:pS,alphatest_fragment:mS,alphatest_pars_fragment:_S,aomap_fragment:gS,aomap_pars_fragment:vS,begin_vertex:xS,beginnormal_vertex:yS,bsdfs:MS,iridescence_fragment:SS,bumpmap_pars_fragment:ES,clipping_planes_fragment:bS,clipping_planes_pars_fragment:TS,clipping_planes_pars_vertex:wS,clipping_planes_vertex:AS,color_fragment:RS,color_pars_fragment:CS,color_pars_vertex:PS,color_vertex:LS,common:DS,cube_uv_reflection_fragment:US,defaultnormal_vertex:IS,displacementmap_pars_vertex:NS,displacementmap_vertex:OS,emissivemap_fragment:FS,emissivemap_pars_fragment:BS,colorspace_fragment:zS,colorspace_pars_fragment:kS,envmap_fragment:HS,envmap_common_pars_fragment:GS,envmap_pars_fragment:VS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:nE,envmap_vertex:XS,fog_vertex:qS,fog_pars_vertex:YS,fog_fragment:$S,fog_pars_fragment:jS,gradientmap_pars_fragment:KS,lightmap_fragment:ZS,lightmap_pars_fragment:JS,lights_lambert_fragment:QS,lights_lambert_pars_fragment:tE,lights_pars_begin:eE,lights_toon_fragment:iE,lights_toon_pars_fragment:rE,lights_phong_fragment:sE,lights_phong_pars_fragment:oE,lights_physical_fragment:aE,lights_physical_pars_fragment:lE,lights_fragment_begin:cE,lights_fragment_maps:uE,lights_fragment_end:hE,logdepthbuf_fragment:fE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:pE,logdepthbuf_vertex:mE,map_fragment:_E,map_pars_fragment:gE,map_particle_fragment:vE,map_particle_pars_fragment:xE,metalnessmap_fragment:yE,metalnessmap_pars_fragment:ME,morphcolor_vertex:SE,morphnormal_vertex:EE,morphtarget_pars_vertex:bE,morphtarget_vertex:TE,normal_fragment_begin:wE,normal_fragment_maps:AE,normal_pars_fragment:RE,normal_pars_vertex:CE,normal_vertex:PE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:NE,opaque_fragment:OE,packing:FE,premultiplied_alpha_fragment:BE,project_vertex:zE,dithering_fragment:kE,dithering_pars_fragment:HE,roughnessmap_fragment:GE,roughnessmap_pars_fragment:VE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:XE,shadowmap_vertex:qE,shadowmask_pars_fragment:YE,skinbase_vertex:$E,skinning_pars_vertex:jE,skinning_vertex:KE,skinnormal_vertex:ZE,specularmap_fragment:JE,specularmap_pars_fragment:QE,tonemapping_fragment:tb,tonemapping_pars_fragment:eb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:rb,uv_pars_vertex:sb,uv_vertex:ob,worldpos_vertex:ab,background_vert:lb,background_frag:cb,backgroundCube_vert:ub,backgroundCube_frag:hb,cube_vert:fb,cube_frag:db,depth_vert:pb,depth_frag:mb,distanceRGBA_vert:_b,distanceRGBA_frag:gb,equirect_vert:vb,equirect_frag:xb,linedashed_vert:yb,linedashed_frag:Mb,meshbasic_vert:Sb,meshbasic_frag:Eb,meshlambert_vert:bb,meshlambert_frag:Tb,meshmatcap_vert:wb,meshmatcap_frag:Ab,meshnormal_vert:Rb,meshnormal_frag:Cb,meshphong_vert:Pb,meshphong_frag:Lb,meshphysical_vert:Db,meshphysical_frag:Ub,meshtoon_vert:Ib,meshtoon_frag:Nb,points_vert:Ob,points_frag:Fb,shadow_vert:Bb,shadow_frag:zb,sprite_vert:kb,sprite_frag:Hb},Mt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Yn={basic:{uniforms:qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:qe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:qe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:qe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:qe([Mt.points,Mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:qe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:qe([Mt.common,Mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:qe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:qe([Mt.sprite,Mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:qe([Mt.common,Mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:qe([Mt.lights,Mt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Yn.physical={uniforms:qe([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const ca={r:0,b:0,g:0};function Gb(n,t,e,i,r,s,o){const a=new Kt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0),n.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),y=!0;break}(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cl)?(u===void 0&&(u=new Pe(new yi(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:bs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Gt,(h!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pe(new Vu(2,2),new wr({name:"BackgroundMaterial",uniforms:bs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(ca,Hm(n)),i.buffers.color.setClear(ca.r,ca.g,ca.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Vb(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(G,W,Z,F,H){let nt=!1;if(o){const st=_(F,Z,W);c!==st&&(c=st,d(c.object)),nt=p(G,F,Z,H),nt&&y(G,F,Z,H)}else{const st=W.wireframe===!0;(c.geometry!==F.id||c.program!==Z.id||c.wireframe!==st)&&(c.geometry=F.id,c.program=Z.id,c.wireframe=st,nt=!0)}H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(nt||u)&&(u=!1,D(G,W,Z,F),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(G){return i.isWebGL2?n.bindVertexArray(G):s.bindVertexArrayOES(G)}function g(G){return i.isWebGL2?n.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function _(G,W,Z){const F=Z.wireframe===!0;let H=a[G.id];H===void 0&&(H={},a[G.id]=H);let nt=H[W.id];nt===void 0&&(nt={},H[W.id]=nt);let st=nt[F];return st===void 0&&(st=m(f()),nt[F]=st),st}function m(G){const W=[],Z=[],F=[];for(let H=0;H<r;H++)W[H]=0,Z[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:F,object:G,attributes:{},index:null}}function p(G,W,Z,F){const H=c.attributes,nt=W.attributes;let st=0;const k=Z.getAttributes();for(const j in k)if(k[j].location>=0){const ft=H[j];let _t=nt[j];if(_t===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(_t=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(_t=G.instanceColor)),ft===void 0||ft.attribute!==_t||_t&&ft.data!==_t.data)return!0;st++}return c.attributesNum!==st||c.index!==F}function y(G,W,Z,F){const H={},nt=W.attributes;let st=0;const k=Z.getAttributes();for(const j in k)if(k[j].location>=0){let ft=nt[j];ft===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(ft=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(ft=G.instanceColor));const _t={};_t.attribute=ft,ft&&ft.data&&(_t.data=ft.data),H[j]=_t,st++}c.attributes=H,c.attributesNum=st,c.index=F}function v(){const G=c.newAttributes;for(let W=0,Z=G.length;W<Z;W++)G[W]=0}function M(G){E(G,0)}function E(G,W){const Z=c.newAttributes,F=c.enabledAttributes,H=c.attributeDivisors;Z[G]=1,F[G]===0&&(n.enableVertexAttribArray(G),F[G]=1),H[G]!==W&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,W),H[G]=W)}function T(){const G=c.newAttributes,W=c.enabledAttributes;for(let Z=0,F=W.length;Z<F;Z++)W[Z]!==G[Z]&&(n.disableVertexAttribArray(Z),W[Z]=0)}function A(G,W,Z,F,H,nt,st){st===!0?n.vertexAttribIPointer(G,W,Z,H,nt):n.vertexAttribPointer(G,W,Z,F,H,nt)}function D(G,W,Z,F){if(i.isWebGL2===!1&&(G.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const H=F.attributes,nt=Z.getAttributes(),st=W.defaultAttributeValues;for(const k in nt){const j=nt[k];if(j.location>=0){let pt=H[k];if(pt===void 0&&(k==="instanceMatrix"&&G.instanceMatrix&&(pt=G.instanceMatrix),k==="instanceColor"&&G.instanceColor&&(pt=G.instanceColor)),pt!==void 0){const ft=pt.normalized,_t=pt.itemSize,St=e.get(pt);if(St===void 0)continue;const V=St.buffer,rt=St.type,ut=St.bytesPerElement,mt=i.isWebGL2===!0&&(rt===n.INT||rt===n.UNSIGNED_INT||pt.gpuType===Em);if(pt.isInterleavedBufferAttribute){const xt=pt.data,x=xt.stride,C=pt.offset;if(xt.isInstancedInterleavedBuffer){for(let P=0;P<j.locationSize;P++)E(j.location+P,xt.meshPerAttribute);G.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let P=0;P<j.locationSize;P++)M(j.location+P);n.bindBuffer(n.ARRAY_BUFFER,V);for(let P=0;P<j.locationSize;P++)A(j.location+P,_t/j.locationSize,rt,ft,x*ut,(C+_t/j.locationSize*P)*ut,mt)}else{if(pt.isInstancedBufferAttribute){for(let xt=0;xt<j.locationSize;xt++)E(j.location+xt,pt.meshPerAttribute);G.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let xt=0;xt<j.locationSize;xt++)M(j.location+xt);n.bindBuffer(n.ARRAY_BUFFER,V);for(let xt=0;xt<j.locationSize;xt++)A(j.location+xt,_t/j.locationSize,rt,ft,_t*ut,_t/j.locationSize*xt*ut,mt)}}else if(st!==void 0){const ft=st[k];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(j.location,ft);break;case 3:n.vertexAttrib3fv(j.location,ft);break;case 4:n.vertexAttrib4fv(j.location,ft);break;default:n.vertexAttrib1fv(j.location,ft)}}}}T()}function S(){J();for(const G in a){const W=a[G];for(const Z in W){const F=W[Z];for(const H in F)g(F[H].object),delete F[H];delete W[Z]}delete a[G]}}function w(G){if(a[G.id]===void 0)return;const W=a[G.id];for(const Z in W){const F=W[Z];for(const H in F)g(F[H].object),delete F[H];delete W[Z]}delete a[G.id]}function z(G){for(const W in a){const Z=a[W];if(Z[G.id]===void 0)continue;const F=Z[G.id];for(const H in F)g(F[H].object),delete F[H];delete Z[G.id]}}function J(){B(),u=!0,c!==l&&(c=l,d(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:B,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function Wb(n,t,e,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=n,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),e.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Xb(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||t.has("OES_texture_float"),E=v&&M,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:T}}function qb(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new ar,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,v=y*4;let M=p.clippingState||null;l.value=M,M=u(g,f,v,d);for(let E=0;E!==v;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Yb(n){let t=new WeakMap;function e(o,a){return a===kc?o.mapping=Ms:a===Hc&&(o.mapping=Ss),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===kc||a===Hc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new aS(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class $b extends Gm{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ts=4,ld=[.125,.215,.35,.446,.526,.582],fr=20,ec=new $b,cd=new Kt;let nc=null;const lr=(1+Math.sqrt(5))/2,$r=1/lr,ud=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,lr,$r),new N(0,lr,-$r),new N($r,0,lr),new N(-$r,0,lr),new N(lr,$r,0),new N(-lr,$r,0)];class hd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){nc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nc),t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nc=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:vo,format:Nn,colorSpace:ti,depthBuffer:!1},r=fd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jb(s)),this._blurMaterial=Kb(s,t,e)}return r}_compileMaterial(t){const e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,ec)}_sceneToCubeUV(t,e,i,r){const a=new hn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(cd),u.toneMapping=xi,u.autoClear=!1;const d=new Qr({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Pe(new yi,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(cd),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;ua(r,y*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ms||t.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ua(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ec)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ud[(r-1)%ud.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pe(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const p=[];let y=0;for(let A=0;A<fr;++A){const D=A/_,S=Math.exp(-D*D/2);p.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const M=this._sizeLods[r],E=3*M*(r>v-ts?r-v+ts:0),T=4*(this._cubeSize-M);ua(e,E,T,3*M,2*M),l.setRenderTarget(e),l.render(h,ec)}}function jb(n){const t=[],e=[],i=[];let r=n;const s=n-ts+1+ld.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-ts?l=ld[o-n+ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,D=T>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(S,_*g*T),v.set(f,m*g*T);const w=[T,T,T,T,T,T];M.set(w,p*g*T)}const E=new _n;E.setAttribute("position",new Jn(y,_)),E.setAttribute("uv",new Jn(v,m)),E.setAttribute("faceIndex",new Jn(M,p)),t.push(E),r>ts&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fd(n,t,e){const i=new Tr(n,t,e);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Kb(n,t,e){const i=new Float32Array(fr),r=new N(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function dd(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function pd(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Wu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zb(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kc||l===Hc,u=l===Ms||l===Ss;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new hd(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new hd(n));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Jb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qb(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,M=y.length;v<M;v+=3){const E=y[v+0],T=y[v+1],A=y[v+2];f.push(E,T,T,A,A,E)}}else{const y=g.array;_=g.version;for(let v=0,M=y.length/3-1;v<M;v+=3){const E=v+0,T=v+1,A=v+2;f.push(E,T,T,A,A,E)}}const m=new(Dm(f)?km:zm)(f,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function tT(n,t,e,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){n.drawElements(s,d,a,f*l),e.update(d,s,1)}function h(f,d,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,a,f*l,g),e.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function eT(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function nT(n,t){return n[0]-t[0]}function iT(n,t){return Math.abs(t[1])-Math.abs(n[1])}function rT(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let G=function(){J.dispose(),s.delete(u),u.removeEventListener("dispose",G)};_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let D=0;y===!0&&(D=1),v===!0&&(D=2),M===!0&&(D=3);let S=u.attributes.position.count*D,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const z=new Float32Array(S*w*4*g),J=new Nm(z,S,w,g);J.type=Ni,J.needsUpdate=!0;const B=D*4;for(let W=0;W<g;W++){const Z=E[W],F=T[W],H=A[W],nt=S*w*4*W;for(let st=0;st<Z.count;st++){const k=st*B;y===!0&&(o.fromBufferAttribute(Z,st),z[nt+k+0]=o.x,z[nt+k+1]=o.y,z[nt+k+2]=o.z,z[nt+k+3]=0),v===!0&&(o.fromBufferAttribute(F,st),z[nt+k+4]=o.x,z[nt+k+5]=o.y,z[nt+k+6]=o.z,z[nt+k+7]=0),M===!0&&(o.fromBufferAttribute(H,st),z[nt+k+8]=o.x,z[nt+k+9]=o.y,z[nt+k+10]=o.z,z[nt+k+11]=H.itemSize===4?o.w:1)}}_={count:g,texture:J,size:new bt(S,w)},s.set(u,_),u.addEventListener("dispose",G)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<d;v++){const M=g[v];M[0]=v,M[1]=f[v]}g.sort(iT);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(nT);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const M=a[v],E=M[0],T=M[1];E!==Number.MAX_SAFE_INTEGER&&T?(_&&u.getAttribute("morphTarget"+v)!==_[E]&&u.setAttribute("morphTarget"+v,_[E]),m&&u.getAttribute("morphNormal"+v)!==m[E]&&u.setAttribute("morphNormal"+v,m[E]),r[v]=T,p+=T):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function sT(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Xm=new Qe,qm=new Nm,Ym=new XM,$m=new Vm,md=[],_d=[],gd=new Float32Array(16),vd=new Float32Array(9),xd=new Float32Array(4);function Ns(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=md[r];if(s===void 0&&(s=new Float32Array(r),md[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function fl(n,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function oT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function aT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function lT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function cT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function uT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Te(e,i))return;xd.set(i),n.uniformMatrix2fv(this.addr,!1,xd),we(e,i)}}function hT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Te(e,i))return;vd.set(i),n.uniformMatrix3fv(this.addr,!1,vd),we(e,i)}}function fT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Te(e,i))return;gd.set(i),n.uniformMatrix4fv(this.addr,!1,gd),we(e,i)}}function dT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function pT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function mT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function _T(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function gT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function xT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function yT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function MT(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||Xm,r)}function ST(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Ym,r)}function ET(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||$m,r)}function bT(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||qm,r)}function TT(n){switch(n){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return hT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return _T;case 5125:return gT;case 36294:return vT;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return bT}}function wT(n,t){n.uniform1fv(this.addr,t)}function AT(n,t){const e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function RT(n,t){const e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function CT(n,t){const e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function PT(n,t){const e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function LT(n,t){const e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function DT(n,t){const e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function UT(n,t){n.uniform1iv(this.addr,t)}function IT(n,t){n.uniform2iv(this.addr,t)}function NT(n,t){n.uniform3iv(this.addr,t)}function OT(n,t){n.uniform4iv(this.addr,t)}function FT(n,t){n.uniform1uiv(this.addr,t)}function BT(n,t){n.uniform2uiv(this.addr,t)}function zT(n,t){n.uniform3uiv(this.addr,t)}function kT(n,t){n.uniform4uiv(this.addr,t)}function HT(n,t,e){const i=this.cache,r=t.length,s=fl(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Xm,s[o])}function GT(n,t,e){const i=this.cache,r=t.length,s=fl(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ym,s[o])}function VT(n,t,e){const i=this.cache,r=t.length,s=fl(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||$m,s[o])}function WT(n,t,e){const i=this.cache,r=t.length,s=fl(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||qm,s[o])}function XT(n){switch(n){case 5126:return wT;case 35664:return AT;case 35665:return RT;case 35666:return CT;case 35674:return PT;case 35675:return LT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return IT;case 35668:case 35672:return NT;case 35669:case 35673:return OT;case 5125:return FT;case 36294:return BT;case 36295:return zT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return WT}}class qT{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=TT(e.type)}}class YT{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=XT(e.type)}}class $T{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function yd(n,t){n.seq.push(t),n.map[t.id]=t}function jT(n,t,e){const i=n.name,r=i.length;for(ic.lastIndex=0;;){const s=ic.exec(i),o=ic.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yd(e,c===void 0?new qT(a,n,t):new YT(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new $T(a),yd(e,h)),e=h}}}class Aa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);jT(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Md(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let KT=0;function ZT(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function JT(n){switch(n){case ti:return["Linear","( value )"];case Gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Sd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ZT(n.getShaderSource(t),o)}else return r}function QT(n,t){const e=JT(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function t1(n,t){let e;switch(t){case Ky:e="Linear";break;case Zy:e="Reinhard";break;case Jy:e="OptimizedCineon";break;case Qy:e="ACESFilmic";break;case tM:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function e1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(js).join(`
`)}function n1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function i1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function js(n){return n!==""}function Ed(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r1=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(n){return n.replace(r1,o1)}const s1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function o1(n,t){let e=Ht[t];if(e===void 0){const i=s1.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return qc(e)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(n){return n.replace(a1,l1)}function l1(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wd(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function c1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ry?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function u1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ms:case Ss:t="ENVMAP_TYPE_CUBE";break;case cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function f1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zu:t="ENVMAP_BLENDING_MULTIPLY";break;case $y:t="ENVMAP_BLENDING_MIX";break;case jy:t="ENVMAP_BLENDING_ADD";break}return t}function d1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function p1(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=c1(e),c=u1(e),u=h1(e),h=f1(e),f=d1(e),d=e.isWebGL2?"":e1(e),g=n1(s),_=r.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[d,wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==xi?t1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,QT("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=qc(o),o=Ed(o,e),o=bd(o,e),a=qc(a),a=Ed(a,e),a=bd(a,e),o=Td(o),a=Td(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,M=y+p+a,E=Md(r,r.VERTEX_SHADER,v),T=Md(r,r.FRAGMENT_SHADER,M);if(r.attachShader(_,E),r.attachShader(_,T),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),w=r.getShaderInfoLog(E).trim(),z=r.getShaderInfoLog(T).trim();let J=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,T);else{const G=Sd(r,E,"vertex"),W=Sd(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+G+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(w===""||z==="")&&(B=!1);B&&(this.diagnostics={runnable:J,programLog:S,vertexShader:{log:w,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(E),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new Aa(r,_)),A};let D;return this.getAttributes=function(){return D===void 0&&(D=i1(r,_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=KT++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let m1=0;class _1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new g1(t),e.set(t,i)),i}}class g1{constructor(t){this.id=m1++,this.code=t,this.usedTimes=0}}function v1(n,t,e,i,r,s,o){const a=new Fm,l=new _1,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,w,z,J,B){const G=J.fog,W=B.geometry,Z=S.isMeshStandardMaterial?J.environment:null,F=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),H=F&&F.mapping===cl?F.image.height:null,nt=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,k=st!==void 0?st.length:0;let j=0;W.morphAttributes.position!==void 0&&(j=1),W.morphAttributes.normal!==void 0&&(j=2),W.morphAttributes.color!==void 0&&(j=3);let pt,ft,_t,St;if(nt){const Hn=Yn[nt];pt=Hn.vertexShader,ft=Hn.fragmentShader}else pt=S.vertexShader,ft=S.fragmentShader,l.update(S),_t=l.getVertexShaderID(S),St=l.getFragmentShaderID(S);const V=n.getRenderTarget(),rt=B.isInstancedMesh===!0,ut=!!S.map,mt=!!S.matcap,xt=!!F,x=!!S.aoMap,C=!!S.lightMap,P=!!S.bumpMap,I=!!S.normalMap,U=!!S.displacementMap,Y=!!S.emissiveMap,Q=!!S.metalnessMap,K=!!S.roughnessMap,lt=S.anisotropy>0,et=S.clearcoat>0,Et=S.iridescence>0,R=S.sheen>0,b=S.transmission>0,X=lt&&!!S.anisotropyMap,ot=et&&!!S.clearcoatMap,ht=et&&!!S.clearcoatNormalMap,dt=et&&!!S.clearcoatRoughnessMap,yt=Et&&!!S.iridescenceMap,gt=Et&&!!S.iridescenceThicknessMap,it=R&&!!S.sheenColorMap,Lt=R&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,Dt=!!S.specularColorMap,Tt=!!S.specularIntensityMap,At=b&&!!S.transmissionMap,zt=b&&!!S.thicknessMap,ne=!!S.gradientMap,O=!!S.alphaMap,wt=S.alphaTest>0,tt=!!S.alphaHash,vt=!!S.extensions,Rt=!!W.attributes.uv1,jt=!!W.attributes.uv2,oe=!!W.attributes.uv3;return{isWebGL2:u,shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:pt,fragmentShader:ft,defines:S.defines,customVertexShaderID:_t,customFragmentShaderID:St,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:rt,instancingColor:rt&&B.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ti,map:ut,matcap:mt,envMap:xt,envMapMode:xt&&F.mapping,envMapCubeUVHeight:H,aoMap:x,lightMap:C,bumpMap:P,normalMap:I,displacementMap:f&&U,emissiveMap:Y,normalMapObjectSpace:I&&S.normalMapType===dM,normalMapTangentSpace:I&&S.normalMapType===Pm,metalnessMap:Q,roughnessMap:K,anisotropy:lt,anisotropyMap:X,clearcoat:et,clearcoatMap:ot,clearcoatNormalMap:ht,clearcoatRoughnessMap:dt,iridescence:Et,iridescenceMap:yt,iridescenceThicknessMap:gt,sheen:R,sheenColorMap:it,sheenRoughnessMap:Lt,specularMap:Pt,specularColorMap:Dt,specularIntensityMap:Tt,transmission:b,transmissionMap:At,thicknessMap:zt,gradientMap:ne,opaque:S.transparent===!1&&S.blending===ls,alphaMap:O,alphaTest:wt,alphaHash:tt,combine:S.combine,mapUv:ut&&_(S.map.channel),aoMapUv:x&&_(S.aoMap.channel),lightMapUv:C&&_(S.lightMap.channel),bumpMapUv:P&&_(S.bumpMap.channel),normalMapUv:I&&_(S.normalMap.channel),displacementMapUv:U&&_(S.displacementMap.channel),emissiveMapUv:Y&&_(S.emissiveMap.channel),metalnessMapUv:Q&&_(S.metalnessMap.channel),roughnessMapUv:K&&_(S.roughnessMap.channel),anisotropyMapUv:X&&_(S.anisotropyMap.channel),clearcoatMapUv:ot&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ht&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:it&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(S.sheenRoughnessMap.channel),specularMapUv:Pt&&_(S.specularMap.channel),specularColorMapUv:Dt&&_(S.specularColorMap.channel),specularIntensityMapUv:Tt&&_(S.specularIntensityMap.channel),transmissionMapUv:At&&_(S.transmissionMap.channel),thicknessMapUv:zt&&_(S.thicknessMap.channel),alphaMapUv:O&&_(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(I||lt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:jt,vertexUv3s:oe,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(ut||O),fog:!!G,useFog:S.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:xi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_i,flipSided:S.side===je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:vt&&S.extensions.derivatives===!0,extensionFragDepth:vt&&S.extensions.fragDepth===!0,extensionDrawBuffers:vt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:vt&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)w.push(z),w.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(y(w,S),v(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),S.push(a.mask)}function M(S){const w=g[S.type];let z;if(w){const J=Yn[w];z=iS.clone(J.uniforms)}else z=S.uniforms;return z}function E(S,w){let z;for(let J=0,B=c.length;J<B;J++){const G=c[J];if(G.cacheKey===w){z=G,++z.usedTimes;break}}return z===void 0&&(z=new p1(n,w,S,s),c.push(z)),z}function T(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:D}}function x1(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function y1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ad(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Rd(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||y1),i.length>1&&i.sort(f||Ad),r.length>1&&r.sort(f||Ad)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function M1(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Rd,n.set(i,[o])):r>=s.length?(o=new Rd,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function S1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function E1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let b1=0;function T1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function w1(n,t){const e=new S1,i=E1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,o=new pe,a=new pe;function l(u,h){let f=0,d=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let _=0,m=0,p=0,y=0,v=0,M=0,E=0,T=0,A=0,D=0;u.sort(T1);const S=h===!0?Math.PI:1;for(let z=0,J=u.length;z<J;z++){const B=u[z],G=B.color,W=B.intensity,Z=B.distance,F=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=G.r*W*S,d+=G.g*W*S,g+=G.b*W*S;else if(B.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(B.sh.coefficients[H],W);else if(B.isDirectionalLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity*S),B.castShadow){const nt=B.shadow,st=i.get(B);st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,r.directionalShadow[_]=st,r.directionalShadowMap[_]=F,r.directionalShadowMatrix[_]=B.shadow.matrix,M++}r.directional[_]=H,_++}else if(B.isSpotLight){const H=e.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(G).multiplyScalar(W*S),H.distance=Z,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,r.spot[p]=H;const nt=B.shadow;if(B.map&&(r.spotLightMap[A]=B.map,A++,nt.updateMatrices(B),B.castShadow&&D++),r.spotLightMatrix[p]=nt.matrix,B.castShadow){const st=i.get(B);st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,r.spotShadow[p]=st,r.spotShadowMap[p]=F,T++}p++}else if(B.isRectAreaLight){const H=e.get(B);H.color.copy(G).multiplyScalar(W),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=H,y++}else if(B.isPointLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity*S),H.distance=B.distance,H.decay=B.decay,B.castShadow){const nt=B.shadow,st=i.get(B);st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,r.pointShadow[m]=st,r.pointShadowMap[m]=F,r.pointShadowMatrix[m]=B.shadow.matrix,E++}r.point[m]=H,m++}else if(B.isHemisphereLight){const H=e.get(B);H.skyColor.copy(B.color).multiplyScalar(W*S),H.groundColor.copy(B.groundColor).multiplyScalar(W*S),r.hemi[v]=H,v++}}y>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_FLOAT_1,r.rectAreaLTC2=Mt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_HALF_1,r.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==y||w.hemiLength!==v||w.numDirectionalShadows!==M||w.numPointShadows!==E||w.numSpotShadows!==T||w.numSpotMaps!==A)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=T+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,w.directionalLength=_,w.pointLength=m,w.spotLength=p,w.rectAreaLength=y,w.hemiLength=v,w.numDirectionalShadows=M,w.numPointShadows=E,w.numSpotShadows=T,w.numSpotMaps=A,r.version=b1++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const M=u[y];if(M.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(M.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function Cd(n,t){const e=new w1(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function A1(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Cd(n,t),e.set(s,[l])):o>=a.length?(l=new Cd(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class R1 extends Is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class C1 extends Is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const P1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D1(n,t,e){let i=new Gu;const r=new bt,s=new bt,o=new re,a=new R1({depthPacking:fM}),l=new C1,c={},u=e.maxTextureSize,h={[Yi]:je,[je]:Yi,[_i]:_i},f=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:P1,fragmentShader:L1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xm;let p=this.type;this.render=function(E,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const D=n.getRenderTarget(),S=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Gi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const J=p!==fi&&this.type===fi,B=p===fi&&this.type!==fi;for(let G=0,W=E.length;G<W;G++){const Z=E[G],F=Z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const H=F.getFrameExtents();if(r.multiply(H),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,F.mapSize.y=s.y)),F.map===null||J===!0||B===!0){const st=this.type!==fi?{minFilter:Ye,magFilter:Ye}:{};F.map!==null&&F.map.dispose(),F.map=new Tr(r.x,r.y,st),F.map.texture.name=Z.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const nt=F.getViewportCount();for(let st=0;st<nt;st++){const k=F.getViewport(st);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),z.viewport(o),F.updateMatrices(Z,st),i=F.getFrustum(),M(T,A,F.camera,Z,this.type)}F.isPointLightShadow!==!0&&this.type===fi&&y(F,A),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(D,S,w)};function y(E,T){const A=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Tr(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,A,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,A,d,_,null)}function v(E,T,A,D){let S=null;const w=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)S=w;else if(S=A.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=S.uuid,J=T.uuid;let B=c[z];B===void 0&&(B={},c[z]=B);let G=B[J];G===void 0&&(G=S.clone(),B[J]=G),S=G}if(S.visible=T.visible,S.wireframe=T.wireframe,D===fi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=A}return S}function M(E,T,A,D,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===fi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const J=t.update(E),B=E.material;if(Array.isArray(B)){const G=J.groups;for(let W=0,Z=G.length;W<Z;W++){const F=G[W],H=B[F.materialIndex];if(H&&H.visible){const nt=v(E,H,D,S);n.renderBufferDirect(A,null,J,nt,E,F)}}}else if(B.visible){const G=v(E,B,D,S);n.renderBufferDirect(A,null,J,G,E,null)}}const z=E.children;for(let J=0,B=z.length;J<B;J++)M(z[J],T,A,D,S)}}function U1(n,t,e){const i=e.isWebGL2;function r(){let O=!1;const wt=new re;let tt=null;const vt=new re(0,0,0,0);return{setMask:function(Rt){tt!==Rt&&!O&&(n.colorMask(Rt,Rt,Rt,Rt),tt=Rt)},setLocked:function(Rt){O=Rt},setClear:function(Rt,jt,oe,Ae,Hn){Hn===!0&&(Rt*=Ae,jt*=Ae,oe*=Ae),wt.set(Rt,jt,oe,Ae),vt.equals(wt)===!1&&(n.clearColor(Rt,jt,oe,Ae),vt.copy(wt))},reset:function(){O=!1,tt=null,vt.set(-1,0,0,0)}}}function s(){let O=!1,wt=null,tt=null,vt=null;return{setTest:function(Rt){Rt?V(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(Rt){wt!==Rt&&!O&&(n.depthMask(Rt),wt=Rt)},setFunc:function(Rt){if(tt!==Rt){switch(Rt){case Hy:n.depthFunc(n.NEVER);break;case Gy:n.depthFunc(n.ALWAYS);break;case Vy:n.depthFunc(n.LESS);break;case zc:n.depthFunc(n.LEQUAL);break;case Wy:n.depthFunc(n.EQUAL);break;case Xy:n.depthFunc(n.GEQUAL);break;case qy:n.depthFunc(n.GREATER);break;case Yy:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=Rt}},setLocked:function(Rt){O=Rt},setClear:function(Rt){vt!==Rt&&(n.clearDepth(Rt),vt=Rt)},reset:function(){O=!1,wt=null,tt=null,vt=null}}}function o(){let O=!1,wt=null,tt=null,vt=null,Rt=null,jt=null,oe=null,Ae=null,Hn=null;return{setTest:function(ue){O||(ue?V(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(ue){wt!==ue&&!O&&(n.stencilMask(ue),wt=ue)},setFunc:function(ue,Gn,Ve){(tt!==ue||vt!==Gn||Rt!==Ve)&&(n.stencilFunc(ue,Gn,Ve),tt=ue,vt=Gn,Rt=Ve)},setOp:function(ue,Gn,Ve){(jt!==ue||oe!==Gn||Ae!==Ve)&&(n.stencilOp(ue,Gn,Ve),jt=ue,oe=Gn,Ae=Ve)},setLocked:function(ue){O=ue},setClear:function(ue){Hn!==ue&&(n.clearStencil(ue),Hn=ue)},reset:function(){O=!1,wt=null,tt=null,vt=null,Rt=null,jt=null,oe=null,Ae=null,Hn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,M=null,E=null,T=null,A=null,D=null,S=!1,w=null,z=null,J=null,B=null,G=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,F=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=F>=1):H.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=F>=2);let nt=null,st={};const k=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),pt=new re().fromArray(k),ft=new re().fromArray(j);function _t(O,wt,tt,vt){const Rt=new Uint8Array(4),jt=n.createTexture();n.bindTexture(O,jt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<tt;oe++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(wt,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(wt+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return jt}const St={};St[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(St[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),V(n.DEPTH_TEST),l.setFunc(zc),U(!1),Y(pf),V(n.CULL_FACE),P(Gi);function V(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function rt(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function ut(O,wt){return d[O]!==wt?(n.bindFramebuffer(O,wt),d[O]=wt,i&&(O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=wt),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=wt)),!0):!1}function mt(O,wt){let tt=_,vt=!1;if(O)if(tt=g.get(wt),tt===void 0&&(tt=[],g.set(wt,tt)),O.isWebGLMultipleRenderTargets){const Rt=O.texture;if(tt.length!==Rt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let jt=0,oe=Rt.length;jt<oe;jt++)tt[jt]=n.COLOR_ATTACHMENT0+jt;tt.length=Rt.length,vt=!0}}else tt[0]!==n.COLOR_ATTACHMENT0&&(tt[0]=n.COLOR_ATTACHMENT0,vt=!0);else tt[0]!==n.BACK&&(tt[0]=n.BACK,vt=!0);vt&&(e.isWebGL2?n.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function xt(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const x={[Zr]:n.FUNC_ADD,[Py]:n.FUNC_SUBTRACT,[Ly]:n.FUNC_REVERSE_SUBTRACT};if(i)x[vf]=n.MIN,x[xf]=n.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(x[vf]=O.MIN_EXT,x[xf]=O.MAX_EXT)}const C={[Dy]:n.ZERO,[Uy]:n.ONE,[Iy]:n.SRC_COLOR,[ym]:n.SRC_ALPHA,[ky]:n.SRC_ALPHA_SATURATE,[By]:n.DST_COLOR,[Oy]:n.DST_ALPHA,[Ny]:n.ONE_MINUS_SRC_COLOR,[Mm]:n.ONE_MINUS_SRC_ALPHA,[zy]:n.ONE_MINUS_DST_COLOR,[Fy]:n.ONE_MINUS_DST_ALPHA};function P(O,wt,tt,vt,Rt,jt,oe,Ae){if(O===Gi){p===!0&&(rt(n.BLEND),p=!1);return}if(p===!1&&(V(n.BLEND),p=!0),O!==Cy){if(O!==y||Ae!==S){if((v!==Zr||T!==Zr)&&(n.blendEquation(n.FUNC_ADD),v=Zr,T=Zr),Ae)switch(O){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mf:n.blendFunc(n.ONE,n.ONE);break;case _f:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _f:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,E=null,A=null,D=null,y=O,S=Ae}return}Rt=Rt||wt,jt=jt||tt,oe=oe||vt,(wt!==v||Rt!==T)&&(n.blendEquationSeparate(x[wt],x[Rt]),v=wt,T=Rt),(tt!==M||vt!==E||jt!==A||oe!==D)&&(n.blendFuncSeparate(C[tt],C[vt],C[jt],C[oe]),M=tt,E=vt,A=jt,D=oe),y=O,S=!1}function I(O,wt){O.side===_i?rt(n.CULL_FACE):V(n.CULL_FACE);let tt=O.side===je;wt&&(tt=!tt),U(tt),O.blending===ls&&O.transparent===!1?P(Gi):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const vt=O.stencilWrite;c.setTest(vt),vt&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),K(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function U(O){w!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),w=O)}function Y(O){O!==wy?(V(n.CULL_FACE),O!==z&&(O===pf?n.cullFace(n.BACK):O===Ay?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),z=O}function Q(O){O!==J&&(Z&&n.lineWidth(O),J=O)}function K(O,wt,tt){O?(V(n.POLYGON_OFFSET_FILL),(B!==wt||G!==tt)&&(n.polygonOffset(wt,tt),B=wt,G=tt)):rt(n.POLYGON_OFFSET_FILL)}function lt(O){O?V(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function et(O){O===void 0&&(O=n.TEXTURE0+W-1),nt!==O&&(n.activeTexture(O),nt=O)}function Et(O,wt,tt){tt===void 0&&(nt===null?tt=n.TEXTURE0+W-1:tt=nt);let vt=st[tt];vt===void 0&&(vt={type:void 0,texture:void 0},st[tt]=vt),(vt.type!==O||vt.texture!==wt)&&(nt!==tt&&(n.activeTexture(tt),nt=tt),n.bindTexture(O,wt||St[O]),vt.type=O,vt.texture=wt)}function R(){const O=st[nt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(O){pt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),pt.copy(O))}function Tt(O){ft.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ft.copy(O))}function At(O,wt){let tt=h.get(wt);tt===void 0&&(tt=new WeakMap,h.set(wt,tt));let vt=tt.get(O);vt===void 0&&(vt=n.getUniformBlockIndex(wt,O.name),tt.set(O,vt))}function zt(O,wt){const vt=h.get(wt).get(O);u.get(wt)!==vt&&(n.uniformBlockBinding(wt,vt,O.__bindingPointIndex),u.set(wt,vt))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},nt=null,st={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,M=null,E=null,T=null,A=null,D=null,S=!1,w=null,z=null,J=null,B=null,G=null,pt.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:V,disable:rt,bindFramebuffer:ut,drawBuffers:mt,useProgram:xt,setBlending:P,setMaterial:I,setFlipSided:U,setCullFace:Y,setLineWidth:Q,setPolygonOffset:K,setScissorTest:lt,activeTexture:et,bindTexture:Et,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:X,texImage2D:Lt,texImage3D:Pt,updateUBOMapping:At,uniformBlockBinding:zt,texStorage2D:gt,texStorage3D:it,texSubImage2D:ot,texSubImage3D:ht,compressedTexSubImage2D:dt,compressedTexSubImage3D:yt,scissor:Dt,viewport:Tt,reset:ne}}function I1(n,t,e,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,b){return p?new OffscreenCanvas(R,b):yo("canvas")}function v(R,b,X,ot){let ht=1;if((R.width>ot||R.height>ot)&&(ht=ot/Math.max(R.width,R.height)),ht<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const dt=b?za:Math.floor,yt=dt(ht*R.width),gt=dt(ht*R.height);_===void 0&&(_=y(yt,gt));const it=X?y(yt,gt):_;return it.width=yt,it.height=gt,it.getContext("2d").drawImage(R,0,0,yt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+yt+"x"+gt+")."),it}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return Xc(R.width)&&Xc(R.height)}function E(R){return a?!1:R.wrapS!==In||R.wrapT!==In||R.minFilter!==Ye&&R.minFilter!==yn}function T(R,b){return R.generateMipmaps&&b&&R.minFilter!==Ye&&R.minFilter!==yn}function A(R){n.generateMipmap(R)}function D(R,b,X,ot,ht=!1){if(a===!1)return b;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let dt=b;return b===n.RED&&(X===n.FLOAT&&(dt=n.R32F),X===n.HALF_FLOAT&&(dt=n.R16F),X===n.UNSIGNED_BYTE&&(dt=n.R8)),b===n.RG&&(X===n.FLOAT&&(dt=n.RG32F),X===n.HALF_FLOAT&&(dt=n.RG16F),X===n.UNSIGNED_BYTE&&(dt=n.RG8)),b===n.RGBA&&(X===n.FLOAT&&(dt=n.RGBA32F),X===n.HALF_FLOAT&&(dt=n.RGBA16F),X===n.UNSIGNED_BYTE&&(dt=ot===Gt&&ht===!1?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(dt=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(dt=n.RGB5_A1)),(dt===n.R16F||dt===n.R32F||dt===n.RG16F||dt===n.RG32F||dt===n.RGBA16F||dt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function S(R,b,X){return T(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==Ye&&R.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){return R===Ye||R===yf||R===Ll?n.NEAREST:n.LINEAR}function z(R){const b=R.target;b.removeEventListener("dispose",z),B(b),b.isVideoTexture&&g.delete(b)}function J(R){const b=R.target;b.removeEventListener("dispose",J),W(b)}function B(R){const b=i.get(R);if(b.__webglInit===void 0)return;const X=R.source,ot=m.get(X);if(ot){const ht=ot[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&G(R),Object.keys(ot).length===0&&m.delete(X)}i.remove(R)}function G(R){const b=i.get(R);n.deleteTexture(b.__webglTexture);const X=R.source,ot=m.get(X);delete ot[b.__cacheKey],o.memory.textures--}function W(R){const b=R.texture,X=i.get(R),ot=i.get(b);if(ot.__webglTexture!==void 0&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++)n.deleteFramebuffer(X.__webglFramebuffer[ht]),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[ht]);else{if(n.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ht=0;ht<X.__webglColorRenderbuffer.length;ht++)X.__webglColorRenderbuffer[ht]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[ht]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ht=0,dt=b.length;ht<dt;ht++){const yt=i.get(b[ht]);yt.__webglTexture&&(n.deleteTexture(yt.__webglTexture),o.memory.textures--),i.remove(b[ht])}i.remove(b),i.remove(R)}let Z=0;function F(){Z=0}function H(){const R=Z;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),Z+=1,R}function nt(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function st(R,b){const X=i.get(R);if(R.isVideoTexture&&et(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ot=R.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(X,R,b);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+b)}function k(R,b){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ut(X,R,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+b)}function j(R,b){const X=i.get(R);if(R.version>0&&X.__version!==R.version){ut(X,R,b);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+b)}function pt(R,b){const X=i.get(R);if(R.version>0&&X.__version!==R.version){mt(X,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+b)}const ft={[Gc]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[Vc]:n.MIRRORED_REPEAT},_t={[Ye]:n.NEAREST,[yf]:n.NEAREST_MIPMAP_NEAREST,[Ll]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[eM]:n.LINEAR_MIPMAP_NEAREST,[go]:n.LINEAR_MIPMAP_LINEAR},St={[mM]:n.NEVER,[SM]:n.ALWAYS,[_M]:n.LESS,[vM]:n.LEQUAL,[gM]:n.EQUAL,[MM]:n.GEQUAL,[xM]:n.GREATER,[yM]:n.NOTEQUAL};function V(R,b,X){if(X?(n.texParameteri(R,n.TEXTURE_WRAP_S,ft[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ft[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ft[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,_t[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,_t[b.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==In||b.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,w(b.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==Ye&&b.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,St[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ye||b.minFilter!==Ll&&b.minFilter!==go||b.type===Ni&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===vo&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(R,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function rt(R,b){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",z));const ot=b.source;let ht=m.get(ot);ht===void 0&&(ht={},m.set(ot,ht));const dt=nt(b);if(dt!==R.__cacheKey){ht[dt]===void 0&&(ht[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ht[dt].usedTimes++;const yt=ht[R.__cacheKey];yt!==void 0&&(ht[R.__cacheKey].usedTimes--,yt.usedTimes===0&&G(b)),R.__cacheKey=dt,R.__webglTexture=ht[dt].texture}return X}function ut(R,b,X){let ot=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ot=n.TEXTURE_3D);const ht=rt(R,b),dt=b.source;e.bindTexture(ot,R.__webglTexture,n.TEXTURE0+X);const yt=i.get(dt);if(dt.version!==yt.__version||ht===!0){e.activeTexture(n.TEXTURE0+X),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const gt=E(b)&&M(b.image)===!1;let it=v(b.image,gt,!1,u);it=Et(b,it);const Lt=M(it)||a,Pt=s.convert(b.format,b.colorSpace);let Dt=s.convert(b.type),Tt=D(b.internalFormat,Pt,Dt,b.colorSpace);V(ot,b,Lt);let At;const zt=b.mipmaps,ne=a&&b.isVideoTexture!==!0,O=yt.__version===void 0||ht===!0,wt=S(b,it,Lt);if(b.isDepthTexture)Tt=n.DEPTH_COMPONENT,a?b.type===Ni?Tt=n.DEPTH_COMPONENT32F:b.type===Ii?Tt=n.DEPTH_COMPONENT24:b.type===_r?Tt=n.DEPTH24_STENCIL8:Tt=n.DEPTH_COMPONENT16:b.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===gr&&Tt===n.DEPTH_COMPONENT&&b.type!==ku&&b.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ii,Dt=s.convert(b.type)),b.format===Es&&Tt===n.DEPTH_COMPONENT&&(Tt=n.DEPTH_STENCIL,b.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=_r,Dt=s.convert(b.type))),O&&(ne?e.texStorage2D(n.TEXTURE_2D,1,Tt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Tt,it.width,it.height,0,Pt,Dt,null));else if(b.isDataTexture)if(zt.length>0&&Lt){ne&&O&&e.texStorage2D(n.TEXTURE_2D,wt,Tt,zt[0].width,zt[0].height);for(let tt=0,vt=zt.length;tt<vt;tt++)At=zt[tt],ne?e.texSubImage2D(n.TEXTURE_2D,tt,0,0,At.width,At.height,Pt,Dt,At.data):e.texImage2D(n.TEXTURE_2D,tt,Tt,At.width,At.height,0,Pt,Dt,At.data);b.generateMipmaps=!1}else ne?(O&&e.texStorage2D(n.TEXTURE_2D,wt,Tt,it.width,it.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,Pt,Dt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Tt,it.width,it.height,0,Pt,Dt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&O&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Tt,zt[0].width,zt[0].height,it.depth);for(let tt=0,vt=zt.length;tt<vt;tt++)At=zt[tt],b.format!==Nn?Pt!==null?ne?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,it.depth,Pt,At.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Tt,At.width,At.height,it.depth,0,At.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,it.depth,Pt,Dt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Tt,At.width,At.height,it.depth,0,Pt,Dt,At.data)}else{ne&&O&&e.texStorage2D(n.TEXTURE_2D,wt,Tt,zt[0].width,zt[0].height);for(let tt=0,vt=zt.length;tt<vt;tt++)At=zt[tt],b.format!==Nn?Pt!==null?ne?e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Tt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage2D(n.TEXTURE_2D,tt,0,0,At.width,At.height,Pt,Dt,At.data):e.texImage2D(n.TEXTURE_2D,tt,Tt,At.width,At.height,0,Pt,Dt,At.data)}else if(b.isDataArrayTexture)ne?(O&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Tt,it.width,it.height,it.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Pt,Dt,it.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,it.width,it.height,it.depth,0,Pt,Dt,it.data);else if(b.isData3DTexture)ne?(O&&e.texStorage3D(n.TEXTURE_3D,wt,Tt,it.width,it.height,it.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Pt,Dt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,it.width,it.height,it.depth,0,Pt,Dt,it.data);else if(b.isFramebufferTexture){if(O)if(ne)e.texStorage2D(n.TEXTURE_2D,wt,Tt,it.width,it.height);else{let tt=it.width,vt=it.height;for(let Rt=0;Rt<wt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Tt,tt,vt,0,Pt,Dt,null),tt>>=1,vt>>=1}}else if(zt.length>0&&Lt){ne&&O&&e.texStorage2D(n.TEXTURE_2D,wt,Tt,zt[0].width,zt[0].height);for(let tt=0,vt=zt.length;tt<vt;tt++)At=zt[tt],ne?e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Pt,Dt,At):e.texImage2D(n.TEXTURE_2D,tt,Tt,Pt,Dt,At);b.generateMipmaps=!1}else ne?(O&&e.texStorage2D(n.TEXTURE_2D,wt,Tt,it.width,it.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Dt,it)):e.texImage2D(n.TEXTURE_2D,0,Tt,Pt,Dt,it);T(b,Lt)&&A(ot),yt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function mt(R,b,X){if(b.image.length!==6)return;const ot=rt(R,b),ht=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);const dt=i.get(ht);if(ht.version!==dt.__version||ot===!0){e.activeTexture(n.TEXTURE0+X),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const yt=b.isCompressedTexture||b.image[0].isCompressedTexture,gt=b.image[0]&&b.image[0].isDataTexture,it=[];for(let tt=0;tt<6;tt++)!yt&&!gt?it[tt]=v(b.image[tt],!1,!0,c):it[tt]=gt?b.image[tt].image:b.image[tt],it[tt]=Et(b,it[tt]);const Lt=it[0],Pt=M(Lt)||a,Dt=s.convert(b.format,b.colorSpace),Tt=s.convert(b.type),At=D(b.internalFormat,Dt,Tt,b.colorSpace),zt=a&&b.isVideoTexture!==!0,ne=dt.__version===void 0||ot===!0;let O=S(b,Lt,Pt);V(n.TEXTURE_CUBE_MAP,b,Pt);let wt;if(yt){zt&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,O,At,Lt.width,Lt.height);for(let tt=0;tt<6;tt++){wt=it[tt].mipmaps;for(let vt=0;vt<wt.length;vt++){const Rt=wt[vt];b.format!==Nn?Dt!==null?zt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,At,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,Rt.width,Rt.height,Dt,Tt,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,At,Rt.width,Rt.height,0,Dt,Tt,Rt.data)}}}else{wt=b.mipmaps,zt&&ne&&(wt.length>0&&O++,e.texStorage2D(n.TEXTURE_CUBE_MAP,O,At,it[0].width,it[0].height));for(let tt=0;tt<6;tt++)if(gt){zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,it[tt].width,it[tt].height,Dt,Tt,it[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,At,it[tt].width,it[tt].height,0,Dt,Tt,it[tt].data);for(let vt=0;vt<wt.length;vt++){const jt=wt[vt].image[tt].image;zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,jt.width,jt.height,Dt,Tt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,At,jt.width,jt.height,0,Dt,Tt,jt.data)}}else{zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,Tt,it[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,At,Dt,Tt,it[tt]);for(let vt=0;vt<wt.length;vt++){const Rt=wt[vt];zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,Dt,Tt,Rt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,At,Dt,Tt,Rt.image[tt])}}}T(b,Pt)&&A(n.TEXTURE_CUBE_MAP),dt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function xt(R,b,X,ot,ht){const dt=s.convert(X.format,X.colorSpace),yt=s.convert(X.type),gt=D(X.internalFormat,dt,yt,X.colorSpace);i.get(b).__hasExternalTextures||(ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY?e.texImage3D(ht,0,gt,b.width,b.height,b.depth,0,dt,yt,null):e.texImage2D(ht,0,gt,b.width,b.height,0,dt,yt,null)),e.bindFramebuffer(n.FRAMEBUFFER,R),lt(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,ht,i.get(X).__webglTexture,0,K(b)):(ht===n.TEXTURE_2D||ht>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,ht,i.get(X).__webglTexture,0),e.bindFramebuffer(n.FRAMEBUFFER,null)}function x(R,b,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let ot=n.DEPTH_COMPONENT16;if(X||lt(b)){const ht=b.depthTexture;ht&&ht.isDepthTexture&&(ht.type===Ni?ot=n.DEPTH_COMPONENT32F:ht.type===Ii&&(ot=n.DEPTH_COMPONENT24));const dt=K(b);lt(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,ot,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,ot,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ot,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const ot=K(b);X&&lt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,n.DEPTH24_STENCIL8,b.width,b.height):lt(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ot=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ht=0;ht<ot.length;ht++){const dt=ot[ht],yt=s.convert(dt.format,dt.colorSpace),gt=s.convert(dt.type),it=D(dt.internalFormat,yt,gt,dt.colorSpace),Lt=K(b);X&&lt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,it,b.width,b.height):lt(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,it,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,it,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function C(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),st(b.depthTexture,0);const ot=i.get(b.depthTexture).__webglTexture,ht=K(b);if(b.depthTexture.format===gr)lt(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,ht):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(b.depthTexture.format===Es)lt(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,ht):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function P(R){const b=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");C(b.__webglFramebuffer,R)}else if(X){b.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ot]),b.__webglDepthbuffer[ot]=n.createRenderbuffer(),x(b.__webglDepthbuffer[ot],R,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),x(b.__webglDepthbuffer,R,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function I(R,b,X){const ot=i.get(R);b!==void 0&&xt(ot.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),X!==void 0&&P(R)}function U(R){const b=R.texture,X=i.get(R),ot=i.get(b);R.addEventListener("dispose",J),R.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=b.version,o.memory.textures++);const ht=R.isWebGLCubeRenderTarget===!0,dt=R.isWebGLMultipleRenderTargets===!0,yt=M(R)||a;if(ht){X.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)X.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(X.__webglFramebuffer=n.createFramebuffer(),dt)if(r.drawBuffers){const gt=R.texture;for(let it=0,Lt=gt.length;it<Lt;it++){const Pt=i.get(gt[it]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&lt(R)===!1){const gt=dt?b:[b];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let it=0;it<gt.length;it++){const Lt=gt[it];X.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[it]);const Pt=s.convert(Lt.format,Lt.colorSpace),Dt=s.convert(Lt.type),Tt=D(Lt.internalFormat,Pt,Dt,Lt.colorSpace,R.isXRRenderTarget===!0),At=K(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Tt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,X.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),x(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),V(n.TEXTURE_CUBE_MAP,b,yt);for(let gt=0;gt<6;gt++)xt(X.__webglFramebuffer[gt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt);T(b,yt)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){const gt=R.texture;for(let it=0,Lt=gt.length;it<Lt;it++){const Pt=gt[it],Dt=i.get(Pt);e.bindTexture(n.TEXTURE_2D,Dt.__webglTexture),V(n.TEXTURE_2D,Pt,yt),xt(X.__webglFramebuffer,R,Pt,n.COLOR_ATTACHMENT0+it,n.TEXTURE_2D),T(Pt,yt)&&A(n.TEXTURE_2D)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?gt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,ot.__webglTexture),V(gt,b,yt),xt(X.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,gt),T(b,yt)&&A(gt),e.unbindTexture()}R.depthBuffer&&P(R)}function Y(R){const b=M(R)||a,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ot=0,ht=X.length;ot<ht;ot++){const dt=X[ot];if(T(dt,b)){const yt=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,gt=i.get(dt).__webglTexture;e.bindTexture(yt,gt),A(yt),e.unbindTexture()}}}function Q(R){if(a&&R.samples>0&&lt(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,ot=R.height;let ht=n.COLOR_BUFFER_BIT;const dt=[],yt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(R),it=R.isWebGLMultipleRenderTargets===!0;if(it)for(let Lt=0;Lt<b.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){dt.push(n.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&dt.push(yt);const Pt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Pt===!1&&(R.depthBuffer&&(ht|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ht|=n.STENCIL_BUFFER_BIT)),it&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Lt]),Pt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[yt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[yt])),it){const Dt=i.get(b[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Dt,0)}n.blitFramebuffer(0,0,X,ot,0,0,X,ot,ht,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let Lt=0;Lt<b.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Lt]);const Pt=i.get(b[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function K(R){return Math.min(h,R.samples)}function lt(R){const b=i.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function et(R){const b=o.render.frame;g.get(R)!==b&&(g.set(R,b),R.update())}function Et(R,b){const X=R.colorSpace,ot=R.format,ht=R.type;return R.isCompressedTexture===!0||R.format===Wc||X!==ti&&X!==xr&&(X===Gt?a===!1?t.has("EXT_sRGB")===!0&&ot===Nn?(R.format=Wc,R.minFilter=yn,R.generateMipmaps=!1):b=Um.sRGBToLinear(b):(ot!==Nn||ht!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=st,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=pt,this.rebindTextures=I,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=lt}function N1(n,t,e){const i=e.isWebGL2;function r(s,o=xr){let a;if(s===Vi)return n.UNSIGNED_BYTE;if(s===bm)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Tm)return n.UNSIGNED_SHORT_5_5_5_1;if(s===nM)return n.BYTE;if(s===iM)return n.SHORT;if(s===ku)return n.UNSIGNED_SHORT;if(s===Em)return n.INT;if(s===Ii)return n.UNSIGNED_INT;if(s===Ni)return n.FLOAT;if(s===vo)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rM)return n.ALPHA;if(s===Nn)return n.RGBA;if(s===sM)return n.LUMINANCE;if(s===oM)return n.LUMINANCE_ALPHA;if(s===gr)return n.DEPTH_COMPONENT;if(s===Es)return n.DEPTH_STENCIL;if(s===Wc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===aM)return n.RED;if(s===wm)return n.RED_INTEGER;if(s===lM)return n.RG;if(s===Am)return n.RG_INTEGER;if(s===Rm)return n.RGBA_INTEGER;if(s===Dl||s===Ul||s===Il||s===Nl)if(o===Gt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Dl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Dl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ul)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Il)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mf||s===Sf||s===Ef||s===bf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Mf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ef)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cM)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tf||s===wf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Tf)return o===Gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===wf)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Af||s===Rf||s===Cf||s===Pf||s===Lf||s===Df||s===Uf||s===If||s===Nf||s===Of||s===Ff||s===Bf||s===zf||s===kf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Af)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rf)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cf)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pf)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lf)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Df)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uf)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===If)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nf)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Of)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ff)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bf)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zf)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kf)return o===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ol)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ol)return o===Gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===uM||s===Hf||s===Gf||s===Vf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ol)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Hf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_r?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class O1 extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ha extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F1={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ha;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class B1 extends Qe{constructor(t,e,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:gr,u!==gr&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gr&&(i=Ii),i===void 0&&u===Es&&(i=_r),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class z1 extends Us{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=e.getContextAttributes();let m=null,p=null;const y=[],v=[],M=new hn;M.layers.enable(1),M.viewport=new re;const E=new hn;E.layers.enable(2),E.viewport=new re;const T=[M,E],A=new O1;A.layers.enable(1),A.layers.enable(2);let D=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=y[k];return j===void 0&&(j=new rc,y[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=y[k];return j===void 0&&(j=new rc,y[k]=j),j.getGripSpace()},this.getHand=function(k){let j=y[k];return j===void 0&&(j=new rc,y[k]=j),j.getHandSpace()};function w(k){const j=v.indexOf(k.inputSource);if(j===-1)return;const pt=y[j];pt!==void 0&&(pt.update(k.inputSource,k.frame,c||o),pt.dispatchEvent({type:k.type,data:k.inputSource}))}function z(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",J);for(let k=0;k<y.length;k++){const j=v[k];j!==null&&(v[k]=null,y[k].disconnect(j))}D=null,S=null,t.setRenderTarget(m),d=null,f=null,h=null,r=null,p=null,st.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",z),r.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:d}),p=new Tr(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,pt=null,ft=null;_.depth&&(ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?Es:gr,pt=_.stencil?_r:Ii);const _t={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(_t),r.updateRenderState({layers:[f]}),p=new Tr(f.textureWidth,f.textureHeight,{format:Nn,type:Vi,depthTexture:new B1(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const St=t.properties.get(p);St.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(k){for(let j=0;j<k.removed.length;j++){const pt=k.removed[j],ft=v.indexOf(pt);ft>=0&&(v[ft]=null,y[ft].disconnect(pt))}for(let j=0;j<k.added.length;j++){const pt=k.added[j];let ft=v.indexOf(pt);if(ft===-1){for(let St=0;St<y.length;St++)if(St>=v.length){v.push(pt),ft=St;break}else if(v[St]===null){v[St]=pt,ft=St;break}if(ft===-1)break}const _t=y[ft];_t&&_t.connect(pt)}}const B=new N,G=new N;function W(k,j,pt){B.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(pt.matrixWorld);const ft=B.distanceTo(G),_t=j.projectionMatrix.elements,St=pt.projectionMatrix.elements,V=_t[14]/(_t[10]-1),rt=_t[14]/(_t[10]+1),ut=(_t[9]+1)/_t[5],mt=(_t[9]-1)/_t[5],xt=(_t[8]-1)/_t[0],x=(St[8]+1)/St[0],C=V*xt,P=V*x,I=ft/(-xt+x),U=I*-xt;j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(U),k.translateZ(I),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Y=V+I,Q=rt+I,K=C-U,lt=P+(ft-U),et=ut*rt/Q*Y,Et=mt*rt/Q*Y;k.projectionMatrix.makePerspective(K,lt,et,Et,Y,Q),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Z(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;A.near=E.near=M.near=k.near,A.far=E.far=M.far=k.far,(D!==A.near||S!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),D=A.near,S=A.far);const j=k.parent,pt=A.cameras;Z(A,j);for(let ft=0;ft<pt.length;ft++)Z(pt[ft],j);pt.length===2?W(A,M,E):A.projectionMatrix.copy(M.projectionMatrix),F(k,A,j)};function F(k,j,pt){pt===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(pt.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const ft=k.children;for(let _t=0,St=ft.length;_t<St;_t++)ft[_t].updateMatrixWorld(!0);k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=xo*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let H=null;function nt(k,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let ft=!1;pt.length!==A.cameras.length&&(A.cameras.length=0,ft=!0);for(let _t=0;_t<pt.length;_t++){const St=pt[_t];let V=null;if(d!==null)V=d.getViewport(St);else{const ut=h.getViewSubImage(f,St);V=ut.viewport,_t===0&&(t.setRenderTargetTextures(p,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(p))}let rt=T[_t];rt===void 0&&(rt=new hn,rt.layers.enable(_t),rt.viewport=new re,T[_t]=rt),rt.matrix.fromArray(St.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(St.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(V.x,V.y,V.width,V.height),_t===0&&(A.matrix.copy(rt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ft===!0&&A.cameras.push(rt)}}for(let pt=0;pt<y.length;pt++){const ft=v[pt],_t=y[pt];ft!==null&&_t!==void 0&&_t.update(ft,j,c||o)}H&&H(k,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const st=new Wm;st.setAnimationLoop(nt),this.setAnimationLoop=function(k){H=k},this.dispose=function(){}}}function k1(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Hm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H1(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const M=v.program;i.uniformBlockBinding(y,M)}function c(y,v){let M=r[y.id];M===void 0&&(g(y),M=u(y),r[y.id]=M,y.addEventListener("dispose",m));const E=v.program;i.updateUBOMapping(y,E);const T=t.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function u(y){const v=h();y.__bindingPointIndex=v;const M=n.createBuffer(),E=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],M=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=M.length;T<A;T++){const D=M[T];if(d(D,T,E)===!0){const S=D.__offset,w=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let J=0;J<w.length;J++){const B=w[J],G=_(B);typeof B=="number"?(D.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,S+z,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=B.elements[0],D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=B.elements[0],D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=B.elements[0]):(B.toArray(D.__data,z),z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,D.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,v,M){const E=y.value;if(M[v]===void 0){if(typeof E=="number")M[v]=E;else{const T=Array.isArray(E)?E:[E],A=[];for(let D=0;D<T.length;D++)A.push(T[D].clone());M[v]=A}return!0}else if(typeof E=="number"){if(M[v]!==E)return M[v]=E,!0}else{const T=Array.isArray(M[v])?M[v]:[M[v]],A=Array.isArray(E)?E:[E];for(let D=0;D<T.length;D++){const S=T[D];if(S.equals(A[D])===!1)return S.copy(A[D]),!0}}return!1}function g(y){const v=y.uniforms;let M=0;const E=16;let T=0;for(let A=0,D=v.length;A<D;A++){const S=v[A],w={boundary:0,storage:0},z=Array.isArray(S.value)?S.value:[S.value];for(let J=0,B=z.length;J<B;J++){const G=z[J],W=_(G);w.boundary+=W.boundary,w.storage+=W.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,A>0){T=M%E;const J=E-T;T!==0&&J-w.boundary<0&&(M+=E-T,S.__offset=M)}M+=w.storage}return T=M%E,T>0&&(M+=E-T),y.__size=M,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}function G1(){const n=yo("canvas");return n.style.display="block",n}class jm{constructor(t={}){const{canvas:e=G1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Gt,this.useLegacyLights=!0,this.toneMapping=xi,this.toneMappingExposure=1;const v=this;let M=!1,E=0,T=0,A=null,D=-1,S=null;const w=new re,z=new re;let J=null;const B=new Kt(0);let G=0,W=e.width,Z=e.height,F=1,H=null,nt=null;const st=new re(0,0,W,Z),k=new re(0,0,W,Z);let j=!1;const pt=new Gu;let ft=!1,_t=!1,St=null;const V=new pe,rt=new bt,ut=new N,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xt(){return A===null?F:1}let x=i;function C(L,$){for(let at=0;at<L.length;at++){const q=L[at],ct=e.getContext(q,$);if(ct!==null)return ct}return null}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bu}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),x===null){const $=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&$.shift(),x=C($,L),x===null)throw C($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let P,I,U,Y,Q,K,lt,et,Et,R,b,X,ot,ht,dt,yt,gt,it,Lt,Pt,Dt,Tt,At,zt;function ne(){P=new Jb(x),I=new Xb(x,P,t),P.init(I),Tt=new N1(x,P,I),U=new U1(x,P,I),Y=new eT(x),Q=new x1,K=new I1(x,P,U,Q,I,Tt,Y),lt=new Yb(v),et=new Zb(v),Et=new uS(x,I),At=new Vb(x,P,Et,I),R=new Qb(x,Et,Y,At),b=new sT(x,R,Et,Y),Lt=new rT(x,I,K),yt=new qb(Q),X=new v1(v,lt,et,P,I,At,yt),ot=new k1(v,Q),ht=new M1,dt=new A1(P,I),it=new Gb(v,lt,et,U,b,f,l),gt=new D1(v,b,I),zt=new H1(x,Y,I,U),Pt=new Wb(x,P,Y,I),Dt=new tT(x,P,Y,I),Y.programs=X.programs,v.capabilities=I,v.extensions=P,v.properties=Q,v.renderLists=ht,v.shadowMap=gt,v.state=U,v.info=Y}ne();const O=new z1(v,x);this.xr=O,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const L=P.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=P.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(L){L!==void 0&&(F=L,this.setSize(W,Z,!1))},this.getSize=function(L){return L.set(W,Z)},this.setSize=function(L,$,at=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=L,Z=$,e.width=Math.floor(L*F),e.height=Math.floor($*F),at===!0&&(e.style.width=L+"px",e.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(W*F,Z*F).floor()},this.setDrawingBufferSize=function(L,$,at){W=L,Z=$,F=at,e.width=Math.floor(L*at),e.height=Math.floor($*at),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(st)},this.setViewport=function(L,$,at,q){L.isVector4?st.set(L.x,L.y,L.z,L.w):st.set(L,$,at,q),U.viewport(w.copy(st).multiplyScalar(F).floor())},this.getScissor=function(L){return L.copy(k)},this.setScissor=function(L,$,at,q){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,$,at,q),U.scissor(z.copy(k).multiplyScalar(F).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(L){U.setScissorTest(j=L)},this.setOpaqueSort=function(L){H=L},this.setTransparentSort=function(L){nt=L},this.getClearColor=function(L){return L.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(L=!0,$=!0,at=!0){let q=0;if(L){let ct=!1;if(A!==null){const Ct=A.texture.format;ct=Ct===Rm||Ct===Am||Ct===wm}if(ct){const Ct=A.texture.type,Ut=Ct===Vi||Ct===Ii||Ct===ku||Ct===_r||Ct===bm||Ct===Tm,It=it.getClearColor(),Ot=it.getClearAlpha(),Xt=It.r,Ft=It.g,kt=It.b;Ut?(d[0]=Xt,d[1]=Ft,d[2]=kt,d[3]=Ot,x.clearBufferuiv(x.COLOR,0,d)):(g[0]=Xt,g[1]=Ft,g[2]=kt,g[3]=Ot,x.clearBufferiv(x.COLOR,0,g))}else q|=x.COLOR_BUFFER_BIT}$&&(q|=x.DEPTH_BUFFER_BIT),at&&(q|=x.STENCIL_BUFFER_BIT),x.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ht.dispose(),dt.dispose(),Q.dispose(),lt.dispose(),et.dispose(),b.dispose(),At.dispose(),zt.dispose(),X.dispose(),O.dispose(),O.removeEventListener("sessionstart",ue),O.removeEventListener("sessionend",Gn),St&&(St.dispose(),St=null),Ve.stop()};function wt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const L=Y.autoReset,$=gt.enabled,at=gt.autoUpdate,q=gt.needsUpdate,ct=gt.type;ne(),Y.autoReset=L,gt.enabled=$,gt.autoUpdate=at,gt.needsUpdate=q,gt.type=ct}function vt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Rt(L){const $=L.target;$.removeEventListener("dispose",Rt),jt($)}function jt(L){oe(L),Q.remove(L)}function oe(L){const $=Q.get(L).programs;$!==void 0&&($.forEach(function(at){X.releaseProgram(at)}),L.isShaderMaterial&&X.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,at,q,ct,Ct){$===null&&($=mt);const Ut=ct.isMesh&&ct.matrixWorld.determinant()<0,It=og(L,$,at,q,ct);U.setMaterial(q,Ut);let Ot=at.index,Xt=1;q.wireframe===!0&&(Ot=R.getWireframeAttribute(at),Xt=2);const Ft=at.drawRange,kt=at.attributes.position;let he=Ft.start*Xt,me=(Ft.start+Ft.count)*Xt;Ct!==null&&(he=Math.max(he,Ct.start*Xt),me=Math.min(me,(Ct.start+Ct.count)*Xt)),Ot!==null?(he=Math.max(he,0),me=Math.min(me,Ot.count)):kt!=null&&(he=Math.max(he,0),me=Math.min(me,kt.count));const An=me-he;if(An<0||An===1/0)return;At.setup(ct,q,It,at,Ot);let ii,ye=Pt;if(Ot!==null&&(ii=Et.get(Ot),ye=Dt,ye.setIndex(ii)),ct.isMesh)q.wireframe===!0?(U.setLineWidth(q.wireframeLinewidth*xt()),ye.setMode(x.LINES)):ye.setMode(x.TRIANGLES);else if(ct.isLine){let Yt=q.linewidth;Yt===void 0&&(Yt=1),U.setLineWidth(Yt*xt()),ct.isLineSegments?ye.setMode(x.LINES):ct.isLineLoop?ye.setMode(x.LINE_LOOP):ye.setMode(x.LINE_STRIP)}else ct.isPoints?ye.setMode(x.POINTS):ct.isSprite&&ye.setMode(x.TRIANGLES);if(ct.isInstancedMesh)ye.renderInstances(he,An,ct.count);else if(at.isInstancedBufferGeometry){const Yt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,vl=Math.min(at.instanceCount,Yt);ye.renderInstances(he,An,vl)}else ye.render(he,An)},this.compile=function(L,$){function at(q,ct,Ct){q.transparent===!0&&q.side===_i&&q.forceSinglePass===!1?(q.side=je,q.needsUpdate=!0,Bo(q,ct,Ct),q.side=Yi,q.needsUpdate=!0,Bo(q,ct,Ct),q.side=_i):Bo(q,ct,Ct)}m=dt.get(L),m.init(),y.push(m),L.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(v.useLegacyLights),L.traverse(function(q){const ct=q.material;if(ct)if(Array.isArray(ct))for(let Ct=0;Ct<ct.length;Ct++){const Ut=ct[Ct];at(Ut,L,q)}else at(ct,L,q)}),y.pop(),m=null};let Ae=null;function Hn(L){Ae&&Ae(L)}function ue(){Ve.stop()}function Gn(){Ve.start()}const Ve=new Wm;Ve.setAnimationLoop(Hn),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(L){Ae=L,O.setAnimationLoop(L),L===null?Ve.stop():Ve.start()},O.addEventListener("sessionstart",ue),O.addEventListener("sessionend",Gn),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera($),$=O.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,$,A),m=dt.get(L,y.length),m.init(),y.push(m),V.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),pt.setFromProjectionMatrix(V),_t=this.localClippingEnabled,ft=yt.init(this.clippingPlanes,_t),_=ht.get(L,p.length),_.init(),p.push(_),mh(L,$,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,nt),this.info.render.frame++,ft===!0&&yt.beginShadows();const at=m.state.shadowsArray;if(gt.render(at,L,$),ft===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(_,L),m.setupLights(v.useLegacyLights),$.isArrayCamera){const q=$.cameras;for(let ct=0,Ct=q.length;ct<Ct;ct++){const Ut=q[ct];_h(_,L,Ut,Ut.viewport)}}else _h(_,L,$);A!==null&&(K.updateMultisampleRenderTarget(A),K.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(v,L,$),At.resetDefaultState(),D=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function mh(L,$,at,q){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)at=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||pt.intersectsSprite(L)){q&&ut.setFromMatrixPosition(L.matrixWorld).applyMatrix4(V);const Ut=b.update(L),It=L.material;It.visible&&_.push(L,Ut,It,at,ut.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||pt.intersectsObject(L))){const Ut=b.update(L),It=L.material;if(q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ut.copy(L.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ut.copy(Ut.boundingSphere.center)),ut.applyMatrix4(L.matrixWorld).applyMatrix4(V)),Array.isArray(It)){const Ot=Ut.groups;for(let Xt=0,Ft=Ot.length;Xt<Ft;Xt++){const kt=Ot[Xt],he=It[kt.materialIndex];he&&he.visible&&_.push(L,Ut,he,at,ut.z,kt)}}else It.visible&&_.push(L,Ut,It,at,ut.z,null)}}const Ct=L.children;for(let Ut=0,It=Ct.length;Ut<It;Ut++)mh(Ct[Ut],$,at,q)}function _h(L,$,at,q){const ct=L.opaque,Ct=L.transmissive,Ut=L.transparent;m.setupLightsView(at),ft===!0&&yt.setGlobalState(v.clippingPlanes,at),Ct.length>0&&sg(ct,Ct,$,at),q&&U.viewport(w.copy(q)),ct.length>0&&Fo(ct,$,at),Ct.length>0&&Fo(Ct,$,at),Ut.length>0&&Fo(Ut,$,at),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function sg(L,$,at,q){const ct=I.isWebGL2;St===null&&(St=new Tr(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?vo:Vi,minFilter:go,samples:ct?4:0})),v.getDrawingBufferSize(rt),ct?St.setSize(rt.x,rt.y):St.setSize(za(rt.x),za(rt.y));const Ct=v.getRenderTarget();v.setRenderTarget(St),v.getClearColor(B),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear();const Ut=v.toneMapping;v.toneMapping=xi,Fo(L,at,q),K.updateMultisampleRenderTarget(St),K.updateRenderTargetMipmap(St);let It=!1;for(let Ot=0,Xt=$.length;Ot<Xt;Ot++){const Ft=$[Ot],kt=Ft.object,he=Ft.geometry,me=Ft.material,An=Ft.group;if(me.side===_i&&kt.layers.test(q.layers)){const ii=me.side;me.side=je,me.needsUpdate=!0,gh(kt,at,q,he,me,An),me.side=ii,me.needsUpdate=!0,It=!0}}It===!0&&(K.updateMultisampleRenderTarget(St),K.updateRenderTargetMipmap(St)),v.setRenderTarget(Ct),v.setClearColor(B,G),v.toneMapping=Ut}function Fo(L,$,at){const q=$.isScene===!0?$.overrideMaterial:null;for(let ct=0,Ct=L.length;ct<Ct;ct++){const Ut=L[ct],It=Ut.object,Ot=Ut.geometry,Xt=q===null?Ut.material:q,Ft=Ut.group;It.layers.test(at.layers)&&gh(It,$,at,Ot,Xt,Ft)}}function gh(L,$,at,q,ct,Ct){L.onBeforeRender(v,$,at,q,ct,Ct),L.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ct.onBeforeRender(v,$,at,q,L,Ct),ct.transparent===!0&&ct.side===_i&&ct.forceSinglePass===!1?(ct.side=je,ct.needsUpdate=!0,v.renderBufferDirect(at,$,q,ct,L,Ct),ct.side=Yi,ct.needsUpdate=!0,v.renderBufferDirect(at,$,q,ct,L,Ct),ct.side=_i):v.renderBufferDirect(at,$,q,ct,L,Ct),L.onAfterRender(v,$,at,q,ct,Ct)}function Bo(L,$,at){$.isScene!==!0&&($=mt);const q=Q.get(L),ct=m.state.lights,Ct=m.state.shadowsArray,Ut=ct.state.version,It=X.getParameters(L,ct.state,Ct,$,at),Ot=X.getProgramCacheKey(It);let Xt=q.programs;q.environment=L.isMeshStandardMaterial?$.environment:null,q.fog=$.fog,q.envMap=(L.isMeshStandardMaterial?et:lt).get(L.envMap||q.environment),Xt===void 0&&(L.addEventListener("dispose",Rt),Xt=new Map,q.programs=Xt);let Ft=Xt.get(Ot);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===Ut)return vh(L,It),Ft}else It.uniforms=X.getUniforms(L),L.onBuild(at,It,v),L.onBeforeCompile(It,v),Ft=X.acquireProgram(It,Ot),Xt.set(Ot,Ft),q.uniforms=It.uniforms;const kt=q.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(kt.clippingPlanes=yt.uniform),vh(L,It),q.needsLights=lg(L),q.lightsStateVersion=Ut,q.needsLights&&(kt.ambientLightColor.value=ct.state.ambient,kt.lightProbe.value=ct.state.probe,kt.directionalLights.value=ct.state.directional,kt.directionalLightShadows.value=ct.state.directionalShadow,kt.spotLights.value=ct.state.spot,kt.spotLightShadows.value=ct.state.spotShadow,kt.rectAreaLights.value=ct.state.rectArea,kt.ltc_1.value=ct.state.rectAreaLTC1,kt.ltc_2.value=ct.state.rectAreaLTC2,kt.pointLights.value=ct.state.point,kt.pointLightShadows.value=ct.state.pointShadow,kt.hemisphereLights.value=ct.state.hemi,kt.directionalShadowMap.value=ct.state.directionalShadowMap,kt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,kt.spotShadowMap.value=ct.state.spotShadowMap,kt.spotLightMatrix.value=ct.state.spotLightMatrix,kt.spotLightMap.value=ct.state.spotLightMap,kt.pointShadowMap.value=ct.state.pointShadowMap,kt.pointShadowMatrix.value=ct.state.pointShadowMatrix);const he=Ft.getUniforms(),me=Aa.seqWithValue(he.seq,kt);return q.currentProgram=Ft,q.uniformsList=me,Ft}function vh(L,$){const at=Q.get(L);at.outputColorSpace=$.outputColorSpace,at.instancing=$.instancing,at.skinning=$.skinning,at.morphTargets=$.morphTargets,at.morphNormals=$.morphNormals,at.morphColors=$.morphColors,at.morphTargetsCount=$.morphTargetsCount,at.numClippingPlanes=$.numClippingPlanes,at.numIntersection=$.numClipIntersection,at.vertexAlphas=$.vertexAlphas,at.vertexTangents=$.vertexTangents,at.toneMapping=$.toneMapping}function og(L,$,at,q,ct){$.isScene!==!0&&($=mt),K.resetTextureUnits();const Ct=$.fog,Ut=q.isMeshStandardMaterial?$.environment:null,It=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ti,Ot=(q.isMeshStandardMaterial?et:lt).get(q.envMap||Ut),Xt=q.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Ft=!!at.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),kt=!!at.morphAttributes.position,he=!!at.morphAttributes.normal,me=!!at.morphAttributes.color,An=q.toneMapped?v.toneMapping:xi,ii=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ye=ii!==void 0?ii.length:0,Yt=Q.get(q),vl=m.state.lights;if(ft===!0&&(_t===!0||L!==S)){const on=L===S&&q.id===D;yt.setState(q,L,on)}let Re=!1;q.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==vl.state.version||Yt.outputColorSpace!==It||ct.isInstancedMesh&&Yt.instancing===!1||!ct.isInstancedMesh&&Yt.instancing===!0||ct.isSkinnedMesh&&Yt.skinning===!1||!ct.isSkinnedMesh&&Yt.skinning===!0||Yt.envMap!==Ot||q.fog===!0&&Yt.fog!==Ct||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==yt.numPlanes||Yt.numIntersection!==yt.numIntersection)||Yt.vertexAlphas!==Xt||Yt.vertexTangents!==Ft||Yt.morphTargets!==kt||Yt.morphNormals!==he||Yt.morphColors!==me||Yt.toneMapping!==An||I.isWebGL2===!0&&Yt.morphTargetsCount!==ye)&&(Re=!0):(Re=!0,Yt.__version=q.version);let Zi=Yt.currentProgram;Re===!0&&(Zi=Bo(q,$,ct));let xh=!1,Os=!1,xl=!1;const We=Zi.getUniforms(),Ji=Yt.uniforms;if(U.useProgram(Zi.program)&&(xh=!0,Os=!0,xl=!0),q.id!==D&&(D=q.id,Os=!0),xh||S!==L){if(We.setValue(x,"projectionMatrix",L.projectionMatrix),I.logarithmicDepthBuffer&&We.setValue(x,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),S!==L&&(S=L,Os=!0,xl=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const on=We.map.cameraPosition;on!==void 0&&on.setValue(x,ut.setFromMatrixPosition(L.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&We.setValue(x,"isOrthographic",L.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||ct.isSkinnedMesh)&&We.setValue(x,"viewMatrix",L.matrixWorldInverse)}if(ct.isSkinnedMesh){We.setOptional(x,ct,"bindMatrix"),We.setOptional(x,ct,"bindMatrixInverse");const on=ct.skeleton;on&&(I.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),We.setValue(x,"boneTexture",on.boneTexture,K),We.setValue(x,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yl=at.morphAttributes;if((yl.position!==void 0||yl.normal!==void 0||yl.color!==void 0&&I.isWebGL2===!0)&&Lt.update(ct,at,Zi),(Os||Yt.receiveShadow!==ct.receiveShadow)&&(Yt.receiveShadow=ct.receiveShadow,We.setValue(x,"receiveShadow",ct.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ji.envMap.value=Ot,Ji.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Os&&(We.setValue(x,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&ag(Ji,xl),Ct&&q.fog===!0&&ot.refreshFogUniforms(Ji,Ct),ot.refreshMaterialUniforms(Ji,q,F,Z,St),Aa.upload(x,Yt.uniformsList,Ji,K)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Aa.upload(x,Yt.uniformsList,Ji,K),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&We.setValue(x,"center",ct.center),We.setValue(x,"modelViewMatrix",ct.modelViewMatrix),We.setValue(x,"normalMatrix",ct.normalMatrix),We.setValue(x,"modelMatrix",ct.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const on=q.uniformsGroups;for(let Ml=0,cg=on.length;Ml<cg;Ml++)if(I.isWebGL2){const yh=on[Ml];zt.update(yh,Zi),zt.bind(yh,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function ag(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function lg(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,$,at){Q.get(L.texture).__webglTexture=$,Q.get(L.depthTexture).__webglTexture=at;const q=Q.get(L);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=at===void 0,q.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,$){const at=Q.get(L);at.__webglFramebuffer=$,at.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,at=0){A=L,E=$,T=at;let q=!0,ct=null,Ct=!1,Ut=!1;if(L){const Ot=Q.get(L);Ot.__useDefaultFramebuffer!==void 0?(U.bindFramebuffer(x.FRAMEBUFFER,null),q=!1):Ot.__webglFramebuffer===void 0?K.setupRenderTarget(L):Ot.__hasExternalTextures&&K.rebindTextures(L,Q.get(L.texture).__webglTexture,Q.get(L.depthTexture).__webglTexture);const Xt=L.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ut=!0);const Ft=Q.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ct=Ft[$],Ct=!0):I.isWebGL2&&L.samples>0&&K.useMultisampledRTT(L)===!1?ct=Q.get(L).__webglMultisampledFramebuffer:ct=Ft,w.copy(L.viewport),z.copy(L.scissor),J=L.scissorTest}else w.copy(st).multiplyScalar(F).floor(),z.copy(k).multiplyScalar(F).floor(),J=j;if(U.bindFramebuffer(x.FRAMEBUFFER,ct)&&I.drawBuffers&&q&&U.drawBuffers(L,ct),U.viewport(w),U.scissor(z),U.setScissorTest(J),Ct){const Ot=Q.get(L.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot.__webglTexture,at)}else if(Ut){const Ot=Q.get(L.texture),Xt=$||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ot.__webglTexture,at||0,Xt)}D=-1},this.readRenderTargetPixels=function(L,$,at,q,ct,Ct,Ut){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Q.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut]),It){U.bindFramebuffer(x.FRAMEBUFFER,It);try{const Ot=L.texture,Xt=Ot.format,Ft=Ot.type;if(Xt!==Nn&&Tt.convert(Xt)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Ft===vo&&(P.has("EXT_color_buffer_half_float")||I.isWebGL2&&P.has("EXT_color_buffer_float"));if(Ft!==Vi&&Tt.convert(Ft)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===Ni&&(I.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-q&&at>=0&&at<=L.height-ct&&x.readPixels($,at,q,ct,Tt.convert(Xt),Tt.convert(Ft),Ct)}finally{const Ot=A!==null?Q.get(A).__webglFramebuffer:null;U.bindFramebuffer(x.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(L,$,at=0){const q=Math.pow(2,-at),ct=Math.floor($.image.width*q),Ct=Math.floor($.image.height*q);K.setTexture2D($,0),x.copyTexSubImage2D(x.TEXTURE_2D,at,0,0,L.x,L.y,ct,Ct),U.unbindTexture()},this.copyTextureToTexture=function(L,$,at,q=0){const ct=$.image.width,Ct=$.image.height,Ut=Tt.convert(at.format),It=Tt.convert(at.type);K.setTexture2D(at,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,at.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,at.unpackAlignment),$.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,q,L.x,L.y,ct,Ct,Ut,It,$.image.data):$.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,q,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,Ut,$.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,q,L.x,L.y,Ut,It,$.image),q===0&&at.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(L,$,at,q,ct=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=L.max.x-L.min.x+1,Ut=L.max.y-L.min.y+1,It=L.max.z-L.min.z+1,Ot=Tt.convert(q.format),Xt=Tt.convert(q.type);let Ft;if(q.isData3DTexture)K.setTexture3D(q,0),Ft=x.TEXTURE_3D;else if(q.isDataArrayTexture)K.setTexture2DArray(q,0),Ft=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,q.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,q.unpackAlignment);const kt=x.getParameter(x.UNPACK_ROW_LENGTH),he=x.getParameter(x.UNPACK_IMAGE_HEIGHT),me=x.getParameter(x.UNPACK_SKIP_PIXELS),An=x.getParameter(x.UNPACK_SKIP_ROWS),ii=x.getParameter(x.UNPACK_SKIP_IMAGES),ye=at.isCompressedTexture?at.mipmaps[0]:at.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,ye.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ye.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,L.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,L.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,L.min.z),at.isDataTexture||at.isData3DTexture?x.texSubImage3D(Ft,ct,$.x,$.y,$.z,Ct,Ut,It,Ot,Xt,ye.data):at.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(Ft,ct,$.x,$.y,$.z,Ct,Ut,It,Ot,ye.data)):x.texSubImage3D(Ft,ct,$.x,$.y,$.z,Ct,Ut,It,Ot,Xt,ye),x.pixelStorei(x.UNPACK_ROW_LENGTH,kt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,he),x.pixelStorei(x.UNPACK_SKIP_PIXELS,me),x.pixelStorei(x.UNPACK_SKIP_ROWS,An),x.pixelStorei(x.UNPACK_SKIP_IMAGES,ii),ct===0&&q.generateMipmaps&&x.generateMipmap(Ft),U.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?K.setTextureCube(L,0):L.isData3DTexture?K.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?K.setTexture2DArray(L,0):K.setTexture2D(L,0),U.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,U.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?vr:Cm}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===vr?Gt:ti}}class V1 extends jm{}V1.prototype.isWebGL1Renderer=!0;class W1 extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Yc extends Is{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pd=new N,Ld=new N,Dd=new pe,sc=new Om,fa=new ul;class X1 extends ve{constructor(t=new _n,e=new Yc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Pd.fromBufferAttribute(e,r-1),Ld.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Pd.distanceTo(Ld);t.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),fa.radius+=s,t.ray.intersectsSphere(fa)===!1)return;Dd.copy(r).invert(),sc.copy(t.ray).applyMatrix4(Dd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,h=new N,f=new N,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=p,M=y-1;v<M;v+=d){const E=g.getX(v),T=g.getX(v+1);if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,T),sc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(f);D<t.near||D>t.far||e.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let v=p,M=y-1;v<M;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),sc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ud=new N,Id=new N;class Nd extends X1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ud.fromBufferAttribute(e,r),Id.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ud.distanceTo(Id);t.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new bt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new N,r=[],s=[],o=[],a=new N,l=new pe;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ue(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Ue(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xu extends ni{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new bt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class q1 extends Xu{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qu(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const da=new N,oc=new qu,ac=new qu,lc=new qu;class Y1 extends ni{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new N){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(da.subVectors(r[0],r[1]).add(r[0]),c=da);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(da.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=da),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),oc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),ac.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),lc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ac.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),lc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(oc.calc(l),ac.calc(l),lc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new N().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Od(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function $1(n,t){const e=1-n;return e*e*t}function j1(n,t){return 2*(1-n)*n*t}function K1(n,t){return n*n*t}function ro(n,t,e,i){return $1(n,t)+j1(n,e)+K1(n,i)}function Z1(n,t){const e=1-n;return e*e*e*t}function J1(n,t){const e=1-n;return 3*e*e*n*t}function Q1(n,t){return 3*(1-n)*n*n*t}function tw(n,t){return n*n*n*t}function so(n,t,e,i,r){return Z1(n,t)+J1(n,e)+Q1(n,i)+tw(n,r)}class Km extends ni{constructor(t=new bt,e=new bt,i=new bt,r=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new bt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(so(t,r.x,s.x,o.x,a.x),so(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ew extends ni{constructor(t=new N,e=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new N){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(so(t,r.x,s.x,o.x,a.x),so(t,r.y,s.y,o.y,a.y),so(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yu extends ni{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nw extends ni{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zm extends ni{constructor(t=new bt,e=new bt,i=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new bt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ro(t,r.x,s.x,o.x),ro(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iw extends ni{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ro(t,r.x,s.x,o.x),ro(t,r.y,s.y,o.y),ro(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jm extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Od(a,l.x,c.x,u.x,h.x),Od(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new bt().fromArray(r))}return this}}var Qm=Object.freeze({__proto__:null,ArcCurve:q1,CatmullRomCurve3:Y1,CubicBezierCurve:Km,CubicBezierCurve3:ew,EllipseCurve:Xu,LineCurve:Yu,LineCurve3:nw,QuadraticBezierCurve:Zm,QuadraticBezierCurve3:iw,SplineCurve:Jm});class rw extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Yu(e,t))}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new Qm[r.type]().fromJSON(r))}return this}}class $c extends rw{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Yu(this.currentPoint.clone(),new bt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Zm(this.currentPoint.clone(),new bt(t,e),new bt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new Km(this.currentPoint.clone(),new bt(t,e),new bt(i,r),new bt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Jm(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){const c=new Xu(t,e,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $u extends _n{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(d,2));function y(){const M=new N,E=new N;let T=0;const A=(e-t)/i;for(let D=0;D<=s;D++){const S=[],w=D/s,z=w*(e-t)+t;for(let J=0;J<=r;J++){const B=J/r,G=B*l+a,W=Math.sin(G),Z=Math.cos(G);E.x=z*W,E.y=-w*i+m,E.z=z*Z,h.push(E.x,E.y,E.z),M.set(W,A,Z).normalize(),f.push(M.x,M.y,M.z),d.push(B,1-w),S.push(g++)}_.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const w=_[S][D],z=_[S+1][D],J=_[S+1][D+1],B=_[S][D+1];u.push(w,z,B),u.push(z,J,B),T+=6}c.addGroup(p,T,0),p+=T}function v(M){const E=g,T=new bt,A=new N;let D=0;const S=M===!0?t:e,w=M===!0?1:-1;for(let J=1;J<=r;J++)h.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;const z=g;for(let J=0;J<=r;J++){const G=J/r*l+a,W=Math.cos(G),Z=Math.sin(G);A.x=S*Z,A.y=m*w,A.z=S*W,h.push(A.x,A.y,A.z),f.push(0,w,0),T.x=W*.5+.5,T.y=Z*.5*w+.5,d.push(T.x,T.y),g++}for(let J=0;J<r;J++){const B=E+J,G=z+J;M===!0?u.push(G,G+1,B):u.push(G+1,G,B),D+=3}c.addGroup(p,D,M===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $u(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ju extends _n{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(s.slice(),3)),this.setAttribute("uv",new xe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new N,M=new N,E=new N;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],M),d(e[T+2],E),l(v,M,E,y)}function l(y,v,M,E){const T=E+1,A=[];for(let D=0;D<=T;D++){A[D]=[];const S=y.clone().lerp(M,D/T),w=v.clone().lerp(M,D/T),z=T-D;for(let J=0;J<=z;J++)J===0&&D===T?A[D][J]=S:A[D][J]=S.clone().lerp(w,J/z)}for(let D=0;D<T;D++)for(let S=0;S<2*(T-D)-1;S++){const w=Math.floor(S/2);S%2===0?(f(A[D][w+1]),f(A[D+1][w]),f(A[D][w])):(f(A[D][w+1]),f(A[D+1][w+1]),f(A[D+1][w]))}}function c(y){const v=new N;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(y),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function u(){const y=new N;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const M=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;o.push(M,1-E)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const v=o[y+0],M=o[y+2],E=o[y+4],T=Math.max(v,M,E),A=Math.min(v,M,E);T>.9&&A<.1&&(v<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,v){const M=y*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const y=new N,v=new N,M=new N,E=new N,T=new bt,A=new bt,D=new bt;for(let S=0,w=0;S<s.length;S+=9,w+=6){y.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),T.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),D.set(o[w+4],o[w+5]),E.copy(y).add(v).add(M).divideScalar(3);const z=m(E);_(T,w+0,y,z),_(A,w+2,v,z),_(D,w+4,M,z)}}function _(y,v,M,E){E<0&&y.x===1&&(o[v]=y.x-1),M.x===0&&M.z===0&&(o[v]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ju(t.vertices,t.indices,t.radius,t.details)}}class Ku extends ju{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ku(t.radius,t.detail)}}const pa=new N,ma=new N,cc=new N,_a=new Mn;class Fd extends _n{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(cs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=_a;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),_a.getNormal(cc),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const v=(y+1)%3,M=h[y],E=h[v],T=_a[u[y]],A=_a[u[v]],D=`${M}_${E}`,S=`${E}_${M}`;S in f&&f[S]?(cc.dot(f[S].normal)<=s&&(d.push(T.x,T.y,T.z),d.push(A.x,A.y,A.z)),f[S]=null):D in f||(f[D]={index0:c[y],index1:c[v],normal:cc.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];pa.fromBufferAttribute(a,_),ma.fromBufferAttribute(a,m),d.push(pa.x,pa.y,pa.z),d.push(ma.x,ma.y,ma.z)}this.setAttribute("position",new xe(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ra extends $c{constructor(t){super(t),this.uuid=Pr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new $c().fromJSON(r))}return this}}const sw={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=t_(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(i&&(s=uw(n,t,s,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<r;g+=e)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Mo(s,o,e,a,l,d,0),o}};function t_(n,t,e,i,r){let s,o;if(r===Mw(n,t,e,i)>0)for(s=t;s<e;s+=i)o=Bd(s,n[s],n[s+1],o);else for(s=e-i;s>=t;s-=i)o=Bd(s,n[s],n[s+1],o);return o&&dl(o,o.next)&&(Eo(o),o=o.next),o}function Ar(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(dl(e,e.next)||le(e.prev,e,e.next)===0)){if(Eo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Mo(n,t,e,i,r,s,o){if(!n)return;!o&&s&&mw(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?aw(n,i,r,s):ow(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Eo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=lw(Ar(n),t,e),Mo(n,t,e,i,r,s,2)):o===2&&cw(n,t,e,i,r,s):Mo(Ar(n),t,e,i,r,s,1);break}}}function ow(n){const t=n.prev,e=n,i=n.next;if(le(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&es(r,a,s,l,o,c,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function aw(n,t,e,i){const r=n.prev,s=n,o=n.next;if(le(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=jc(d,g,t,e,i),y=jc(_,m,t,e,i);let v=n.prevZ,M=n.nextZ;for(;v&&v.z>=p&&M&&M.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&es(a,u,l,h,c,f,v.x,v.y)&&le(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&es(a,u,l,h,c,f,M.x,M.y)&&le(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&es(a,u,l,h,c,f,v.x,v.y)&&le(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&es(a,u,l,h,c,f,M.x,M.y)&&le(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function lw(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!dl(r,s)&&e_(r,i,i.next,s)&&So(r,s)&&So(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Eo(i),Eo(i.next),i=n=s),i=i.next}while(i!==n);return Ar(i)}function cw(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vw(o,a)){let l=n_(o,a);o=Ar(o,o.next),l=Ar(l,l.next),Mo(o,t,e,i,r,s,0),Mo(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function uw(n,t,e,i){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=t_(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(gw(c));for(r.sort(hw),s=0;s<r.length;s++)e=fw(r[s],e);return e}function hw(n,t){return n.x-t.x}function fw(n,t){const e=dw(n,t);if(!e)return t;const i=n_(e,n);return Ar(i,i.next),Ar(e,e.next)}function dw(n,t){let e=t,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&es(o<c?s:i,o,l,c,o<c?i:s,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(s-e.x),So(e,n)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&pw(r,e)))&&(r=e,u=h)),e=e.next;while(e!==a);return r}function pw(n,t){return le(n.prev,n,t.prev)<0&&le(t.next,n,n.next)<0}function mw(n,t,e,i){let r=n;do r.z===0&&(r.z=jc(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,_w(r)}function _w(n){let t,e,i,r,s,o,a,l,c=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(o>1);return n}function jc(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function gw(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function es(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function vw(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!xw(n,t)&&(So(n,t)&&So(t,n)&&yw(n,t)&&(le(n.prev,n,t.prev)||le(n,t.prev,t))||dl(n,t)&&le(n.prev,n,n.next)>0&&le(t.prev,t,t.next)>0)}function le(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function dl(n,t){return n.x===t.x&&n.y===t.y}function e_(n,t,e,i){const r=va(le(n,t,e)),s=va(le(n,t,i)),o=va(le(e,i,n)),a=va(le(e,i,t));return!!(r!==s&&o!==a||r===0&&ga(n,e,t)||s===0&&ga(n,i,t)||o===0&&ga(e,n,i)||a===0&&ga(e,t,i))}function ga(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function va(n){return n>0?1:n<0?-1:0}function xw(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&e_(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function So(n,t){return le(n.prev,n,n.next)<0?le(n,t,n.next)>=0&&le(n,n.prev,t)>=0:le(n,t,n.prev)<0||le(n,n.next,t)<0}function yw(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function n_(n,t){const e=new Kc(n.i,n.x,n.y),i=new Kc(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Bd(n,t,e,i){const r=new Kc(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Eo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mw(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class hs{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return hs.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];zd(t),kd(i,t);let o=t.length;e.forEach(zd);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,kd(i,e[l]);const a=sw.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function zd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function kd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Zu extends _n{constructor(t=new Ra([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new xe(r,3)),this.setAttribute("uv",new xe(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Sw;let v,M=!1,E,T,A,D;p&&(v=p.getSpacedPoints(u),M=!0,f=!1,E=p.computeFrenetFrames(u,!1),T=new N,A=new N,D=new N),f||(m=0,d=0,g=0,_=0);const S=a.extractPoints(c);let w=S.shape;const z=S.holes;if(!hs.isClockWise(w)){w=w.reverse();for(let x=0,C=z.length;x<C;x++){const P=z[x];hs.isClockWise(P)&&(z[x]=P.reverse())}}const B=hs.triangulateShape(w,z),G=w;for(let x=0,C=z.length;x<C;x++){const P=z[x];w=w.concat(P)}function W(x,C,P){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),x.clone().addScaledVector(C,P)}const Z=w.length,F=B.length;function H(x,C,P){let I,U,Y;const Q=x.x-C.x,K=x.y-C.y,lt=P.x-x.x,et=P.y-x.y,Et=Q*Q+K*K,R=Q*et-K*lt;if(Math.abs(R)>Number.EPSILON){const b=Math.sqrt(Et),X=Math.sqrt(lt*lt+et*et),ot=C.x-K/b,ht=C.y+Q/b,dt=P.x-et/X,yt=P.y+lt/X,gt=((dt-ot)*et-(yt-ht)*lt)/(Q*et-K*lt);I=ot+Q*gt-x.x,U=ht+K*gt-x.y;const it=I*I+U*U;if(it<=2)return new bt(I,U);Y=Math.sqrt(it/2)}else{let b=!1;Q>Number.EPSILON?lt>Number.EPSILON&&(b=!0):Q<-Number.EPSILON?lt<-Number.EPSILON&&(b=!0):Math.sign(K)===Math.sign(et)&&(b=!0),b?(I=-K,U=Q,Y=Math.sqrt(Et)):(I=Q,U=K,Y=Math.sqrt(Et/2))}return new bt(I/Y,U/Y)}const nt=[];for(let x=0,C=G.length,P=C-1,I=x+1;x<C;x++,P++,I++)P===C&&(P=0),I===C&&(I=0),nt[x]=H(G[x],G[P],G[I]);const st=[];let k,j=nt.concat();for(let x=0,C=z.length;x<C;x++){const P=z[x];k=[];for(let I=0,U=P.length,Y=U-1,Q=I+1;I<U;I++,Y++,Q++)Y===U&&(Y=0),Q===U&&(Q=0),k[I]=H(P[I],P[Y],P[Q]);st.push(k),j=j.concat(k)}for(let x=0;x<m;x++){const C=x/m,P=d*Math.cos(C*Math.PI/2),I=g*Math.sin(C*Math.PI/2)+_;for(let U=0,Y=G.length;U<Y;U++){const Q=W(G[U],nt[U],I);V(Q.x,Q.y,-P)}for(let U=0,Y=z.length;U<Y;U++){const Q=z[U];k=st[U];for(let K=0,lt=Q.length;K<lt;K++){const et=W(Q[K],k[K],I);V(et.x,et.y,-P)}}}const pt=g+_;for(let x=0;x<Z;x++){const C=f?W(w[x],j[x],pt):w[x];M?(A.copy(E.normals[0]).multiplyScalar(C.x),T.copy(E.binormals[0]).multiplyScalar(C.y),D.copy(v[0]).add(A).add(T),V(D.x,D.y,D.z)):V(C.x,C.y,0)}for(let x=1;x<=u;x++)for(let C=0;C<Z;C++){const P=f?W(w[C],j[C],pt):w[C];M?(A.copy(E.normals[x]).multiplyScalar(P.x),T.copy(E.binormals[x]).multiplyScalar(P.y),D.copy(v[x]).add(A).add(T),V(D.x,D.y,D.z)):V(P.x,P.y,h/u*x)}for(let x=m-1;x>=0;x--){const C=x/m,P=d*Math.cos(C*Math.PI/2),I=g*Math.sin(C*Math.PI/2)+_;for(let U=0,Y=G.length;U<Y;U++){const Q=W(G[U],nt[U],I);V(Q.x,Q.y,h+P)}for(let U=0,Y=z.length;U<Y;U++){const Q=z[U];k=st[U];for(let K=0,lt=Q.length;K<lt;K++){const et=W(Q[K],k[K],I);M?V(et.x,et.y+v[u-1].y,v[u-1].x+P):V(et.x,et.y,h+P)}}}ft(),_t();function ft(){const x=r.length/3;if(f){let C=0,P=Z*C;for(let I=0;I<F;I++){const U=B[I];rt(U[2]+P,U[1]+P,U[0]+P)}C=u+m*2,P=Z*C;for(let I=0;I<F;I++){const U=B[I];rt(U[0]+P,U[1]+P,U[2]+P)}}else{for(let C=0;C<F;C++){const P=B[C];rt(P[2],P[1],P[0])}for(let C=0;C<F;C++){const P=B[C];rt(P[0]+Z*u,P[1]+Z*u,P[2]+Z*u)}}i.addGroup(x,r.length/3-x,0)}function _t(){const x=r.length/3;let C=0;St(G,C),C+=G.length;for(let P=0,I=z.length;P<I;P++){const U=z[P];St(U,C),C+=U.length}i.addGroup(x,r.length/3-x,1)}function St(x,C){let P=x.length;for(;--P>=0;){const I=P;let U=P-1;U<0&&(U=x.length-1);for(let Y=0,Q=u+m*2;Y<Q;Y++){const K=Z*Y,lt=Z*(Y+1),et=C+I+K,Et=C+U+K,R=C+U+lt,b=C+I+lt;ut(et,Et,R,b)}}}function V(x,C,P){l.push(x),l.push(C),l.push(P)}function rt(x,C,P){mt(x),mt(C),mt(P);const I=r.length/3,U=y.generateTopUV(i,r,I-3,I-2,I-1);xt(U[0]),xt(U[1]),xt(U[2])}function ut(x,C,P,I){mt(x),mt(C),mt(I),mt(C),mt(P),mt(I);const U=r.length/3,Y=y.generateSideWallUV(i,r,U-6,U-3,U-2,U-1);xt(Y[0]),xt(Y[1]),xt(Y[3]),xt(Y[1]),xt(Y[2]),xt(Y[3])}function mt(x){r.push(l[x*3+0]),r.push(l[x*3+1]),r.push(l[x*3+2])}function xt(x){s.push(x.x),s.push(x.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ew(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Qm[r.type]().fromJSON(r)),new Zu(i,t.options)}}const Sw={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new bt(s,o),new bt(a,l),new bt(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new bt(o,1-l),new bt(c,1-h),new bt(f,1-g),new bt(_,1-p)]:[new bt(a,1-l),new bt(u,1-h),new bt(d,1-g),new bt(m,1-p)]}};function Ew(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class pl extends _n{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],v=p/i;let M=0;p===0&&o===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let E=0;E<=e;E++){const T=E/e;h.x=-t*Math.cos(r+T*s)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(r+T*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+M,1-v),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const v=u[p][y+1],M=u[p][y],E=u[p+1][y],T=u[p+1][y+1];(p!==0||o>0)&&d.push(v,M,T),(p!==i-1||l<Math.PI)&&d.push(M,E,T)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class uc extends Is{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pm,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ka={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class bw{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Tw=new bw;class No{constructor(t){this.manager=t!==void 0?t:Tw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}No.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class ww extends Error{constructor(t,e){super(t),this.response=e}}class Aw extends No{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ka.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(hi[t]!==void 0){hi[t].push({onLoad:e,onProgress:i,onError:r});return}hi[t]=[],hi[t].push({onLoad:e,onProgress:i,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=hi[t],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:v,value:M})=>{if(v)p.close();else{_+=M.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let T=0,A=u.length;T<A;T++){const D=u[T];D.onProgress&&D.onProgress(E)}p.enqueue(M),y()}})}}});return new Response(m)}else throw new ww(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ka.add(t,c);const u=hi[t];delete hi[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=hi[t];if(u===void 0)throw this.manager.itemError(t),c;delete hi[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Rw extends No{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ka.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=yo("img");function l(){u(),ka.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Cw extends No{constructor(t){super(t)}load(t,e,i,r){const s=new Qe,o=new Rw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Pw extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const hc=new pe,Hd=new N,Gd=new N;class Lw{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gu,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Hd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hd),Gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gd),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vd=new pe,Vs=new N,fc=new N;class Dw extends Lw{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vs),fc.copy(i.position),fc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(fc),i.updateMatrixWorld(),r.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Vd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd)}}class Wd extends Pw{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Dw}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Uw{constructor(){this.type="ShapePath",this.color=new Kt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new $c,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,r){return this.currentPath.quadraticCurveTo(t,e,i,r),this}bezierCurveTo(t,e,i,r,s,o){return this.currentPath.bezierCurveTo(t,e,i,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const y=[];for(let v=0,M=p.length;v<M;v++){const E=p[v],T=new Ra;T.curves=E.curves,y.push(T)}return y}function i(p,y){const v=y.length;let M=!1;for(let E=v-1,T=0;T<v;E=T++){let A=y[E],D=y[T],S=D.x-A.x,w=D.y-A.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(A=y[T],S=-S,D=y[E],w=-w),p.y<A.y||p.y>D.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{const z=w*(p.x-A.x)-S*(p.y-A.y);if(z===0)return!0;if(z<0)continue;M=!M}}else{if(p.y!==A.y)continue;if(D.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=D.x)return!0}}return M}const r=hs.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Ra,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=t?!u:u;const h=[],f=[];let d=[],g=0,_;f[g]=void 0,d[g]=[];for(let p=0,y=s.length;p<y;p++)a=s[p],_=a.getPoints(),o=r(_),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Ra,p:_},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:_[0]});if(!f[0])return e(s);if(f.length>1){let p=!1,y=0;for(let v=0,M=f.length;v<M;v++)h[v]=[];for(let v=0,M=f.length;v<M;v++){const E=d[v];for(let T=0;T<E.length;T++){const A=E[T];let D=!0;for(let S=0;S<f.length;S++)i(A.p,f[S].p)&&(v!==S&&y++,D?(D=!1,h[S].push(A)):p=!0);D&&h[v].push(A)}}y>0&&p===!1&&(d=h)}let m;for(let p=0,y=f.length;p<y;p++){l=f[p].s,c.push(l),m=d[p];for(let v=0,M=m.length;v<M;v++)l.holes.push(m[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);class Iw extends No{constructor(t){super(t)}load(t,e,i,r){const s=this,o=new Aw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},i,r)}parse(t){return new Nw(t)}}class Nw{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],r=Ow(t,e,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function Ow(n,t,e){const i=Array.from(n),r=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const h=Fw(u,r,a,l,e);a+=h.offsetX,o.push(h.path)}}return o}function Fw(n,t,e,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new Uw;let a,l,c,u,h,f,d,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=_.length;m<p;)switch(_[m++]){case"m":a=_[m++]*t+e,l=_[m++]*t+i,o.moveTo(a,l);break;case"l":a=_[m++]*t+e,l=_[m++]*t+i,o.lineTo(a,l);break;case"q":c=_[m++]*t+e,u=_[m++]*t+i,h=_[m++]*t+e,f=_[m++]*t+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=_[m++]*t+e,u=_[m++]*t+i,h=_[m++]*t+e,f=_[m++]*t+i,d=_[m++]*t+e,g=_[m++]*t+i,o.bezierCurveTo(h,f,d,g,c,u);break}}return{offsetX:s.ha*t,path:o}}class Bw extends Zu{constructor(t,e={}){const i=e.font;if(i===void 0)super();else{const r=i.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}}class zw{constructor(){}getTextMesh(t,e,i,r,s){let o=new Bw(t,{font:s,size:e,height:i,curveSegments:100,bevelEnabled:!0,bevelThickness:1,bevelSize:.02,bevelOffset:0,bevelSegments:0});return new Pe(o,r)}}function pi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function i_(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ts={duration:.5,overwrite:!1,delay:0},Ju,He,fe,En=1e8,ee=1/En,Zc=Math.PI*2,kw=Zc/4,Hw=0,r_=Math.sqrt,Gw=Math.cos,Vw=Math.sin,De=function(t){return typeof t=="string"},de=function(t){return typeof t=="function"},Si=function(t){return typeof t=="number"},Qu=function(t){return typeof t>"u"},ei=function(t){return typeof t=="object"},tn=function(t){return t!==!1},th=function(){return typeof window<"u"},xa=function(t){return de(t)||De(t)},s_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ge=Array.isArray,Jc=/(?:-?\.?\d|\.)+/gi,o_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,a_=/[+-]=-?[.\d]+/,l_=/[^,'"\[\]\s]+/gi,Ww=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ae,xn,Qc,eh,mn={},Ha={},c_,u_=function(t){return(Ha=Rr(t,mn))&&sn},nh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ga=function(t,e){return!e&&console.warn(t)},h_=function(t,e){return t&&(mn[t]=e)&&Ha&&(Ha[t]=e)||mn},bo=function(){return 0},Xw={suppressEvents:!0,isStart:!0,kill:!1},Ca={suppressEvents:!0,kill:!1},qw={suppressEvents:!0},ih={},Wi=[],tu={},f_,cn={},pc={},Xd=30,Pa=[],rh="",sh=function(t){var e=t[0],i,r;if(ei(e)||de(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=Pa.length;r--&&!Pa[r].targetTest(e););i=Pa[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new O_(t[r],i)))||t.splice(r,1);return t},yr=function(t){return t._gsap||sh(bn(t))[0]._gsap},d_=function(t,e,i){return(i=t[e])&&de(i)?t[e]():Qu(i)&&t.getAttribute&&t.getAttribute(e)||i},en=function(t,e){return(t=t.split(",")).forEach(e)||t},_e=function(t){return Math.round(t*1e5)/1e5||0},Ie=function(t){return Math.round(t*1e7)/1e7||0},fs=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},Yw=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Va=function(){var t=Wi.length,e=Wi.slice(0),i,r;for(tu={},Wi.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},p_=function(t,e,i,r){Wi.length&&!He&&Va(),t.render(e,i,r||He&&e<0&&(t._initted||t._startAt)),Wi.length&&!He&&Va()},m_=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(l_).length<2?e:De(t)?t.trim():t},__=function(t){return t},wn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},$w=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Rr=function(t,e){for(var i in e)t[i]=e[i];return t},qd=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ei(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},Wa=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},oo=function(t){var e=t.parent||ae,i=t.keyframes?$w(Ge(t.keyframes)):wn;if(tn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},jw=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},g_=function(t,e,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},ml=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},$i=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Mr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Kw=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},eu=function(t,e,i,r){return t._startAt&&(He?t._startAt.revert(Ca):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Zw=function n(t){return!t||t._ts&&n(t.parent)},Yd=function(t){return t._repeat?ws(t._tTime,t=t.duration()+t._rDelay)*t:0},ws=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Xa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},_l=function(t){return t._end=Ie(t._start+(t._tDur/Math.abs(t._ts||t._rts||ee)||0))},gl=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ie(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),_l(t),i._dirty||Mr(i,t)),t},v_=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Xa(t.rawTime(),e),(!e._dur||Oo(0,e.totalDuration(),i)-e._tTime>ee)&&e.render(i,!0)),Mr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ee}},jn=function(t,e,i,r){return e.parent&&$i(e),e._start=Ie((Si(i)?i:i||t!==ae?vn(t,i,e):t._time)+e._delay),e._end=Ie(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),g_(t,e,"_first","_last",t._sort?"_start":0),nu(e)||(t._recent=e),r||v_(t,e),t._ts<0&&gl(t,t._tTime),t},x_=function(t,e){return(mn.ScrollTrigger||nh("scrollTrigger",e))&&mn.ScrollTrigger.create(e,t)},y_=function(t,e,i,r,s){if(ah(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!He&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&f_!==fn.frame)return Wi.push(t),t._lazy=[s,r],1},Jw=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},nu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Qw=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&Jw(t)&&!(!t._initted&&nu(t))||(t._ts<0||t._dp._ts<0)&&!nu(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=Oo(0,t._tDur,e),u=ws(l,a),t._yoyo&&u&1&&(o=1-o),u!==ws(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||He||r||t._zTime===ee||!e&&t._zTime){if(!t._initted&&y_(t,e,r,i,l))return;for(h=t._zTime,t._zTime=e||(i?ee:0),i||(i=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&eu(t,e,i,!0),t._onUpdate&&!i&&Tn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Tn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&$i(t,1),!i&&!He&&(Tn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},tA=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},As=function(t,e,i,r){var s=t._repeat,o=Ie(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ie(o*(s+1)+t._rDelay*s):o,a>0&&!r&&gl(t,t._tTime=t._tDur*a),t.parent&&_l(t),i||Mr(t.parent,t),t},$d=function(t){return t instanceof Je?Mr(t):As(t,t._dur)},eA={_start:0,endTime:bo,totalDuration:bo},vn=function n(t,e,i){var r=t.labels,s=t._recent||eA,o=t.duration()>=En?s.endTime(!1):t._dur,a,l,c;return De(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Ge(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},ao=function(t,e,i){var r=Si(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=tn(l.vars.inherit)&&l.parent;o.immediateRender=tn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ee(e[0],o,e[s+1])},Ki=function(t,e){return t||t===0?e(t):e},Oo=function(t,e,i){return i<t?t:i>e?e:i},ke=function(t,e){return!De(t)||!(e=Ww.exec(t))?"":e[1]},nA=function(t,e,i){return Ki(i,function(r){return Oo(t,e,r)})},iu=[].slice,M_=function(t,e){return t&&ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ei(t[0]))&&!t.nodeType&&t!==xn},iA=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return De(r)&&!e||M_(r,1)?(s=i).push.apply(s,bn(r)):i.push(r)})||i},bn=function(t,e,i){return fe&&!e&&fe.selector?fe.selector(t):De(t)&&!i&&(Qc||!Rs())?iu.call((e||eh).querySelectorAll(t),0):Ge(t)?iA(t,i):M_(t)?iu.call(t,0):t?[t]:[]},ru=function(t){return t=bn(t)[0]||Ga("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return bn(e,i.querySelectorAll?i:i===t?Ga("Invalid scope")||eh.createElement("div"):t)}},S_=function(t){return t.sort(function(){return .5-Math.random()})},E_=function(t){if(de(t))return t;var e=ei(t)?t:{each:t},i=Sr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,h=r;return De(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,g){var _=(g||e).length,m=o[_],p,y,v,M,E,T,A,D,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,En])[1],!S){for(A=-En;A<(A=g[S++].getBoundingClientRect().left)&&S<_;);S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:r%S,y=S===En?0:l?_*h/S-.5:r/S|0,A=0,D=En,T=0;T<_;T++)v=T%S-p,M=y-(T/S|0),m[T]=E=c?Math.abs(c==="y"?M:v):r_(v*v+M*M),E>A&&(A=E),E<D&&(D=E);r==="random"&&S_(m),m.max=A-D,m.min=D,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=ke(e.amount||e.each)||0,i=i&&_<0?U_(i):i}return _=(m[f]-m.min)/m.max||0,Ie(m.b+(i?i(_):_)*m.v)+m.u}},su=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=Ie(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Si(i)?0:ke(i))}},b_=function(t,e){var i=Ge(t),r,s;return!i&&ei(t)&&(r=i=t.radius||En,t.values?(t=bn(t.values),(s=!Si(t[0]))&&(r*=r)):t=su(t.increment)),Ki(e,i?de(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=En,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:o,s||u===o||Si(o)?u:u+ke(o)}:su(t))},T_=function(t,e,i,r){return Ki(Ge(t)?!e:i===!0?!!(i=0):!r,function(){return Ge(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},rA=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},sA=function(t,e){return function(i){return t(parseFloat(i))+(e||ke(i))}},oA=function(t,e,i){return A_(t,e,0,1,i)},w_=function(t,e,i){return Ki(i,function(r){return t[~~e(r)]})},aA=function n(t,e,i){var r=e-t;return Ge(t)?w_(t,n(0,t.length),e):Ki(i,function(s){return(r+(s-t)%r)%r+t})},lA=function n(t,e,i){var r=e-t,s=r*2;return Ge(t)?w_(t,n(0,t.length-1),e):Ki(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},To=function(t){for(var e=0,i="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?l_:Jc),i+=t.substr(e,r-e)+T_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return i+t.substr(e,t.length-e)},A_=function(t,e,i,r,s){var o=e-t,a=r-i;return Ki(s,function(l){return i+((l-t)/o*a||0)})},cA=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=De(t),a={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(Ge(t)&&!Ge(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(n(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},i=e}else r||(t=Rr(Ge(t)?[]:{},t));if(!u){for(l in e)oh.call(a,t,l,"get",e[l]);s=function(g){return uh(g,a)||(o?t.p:t)}}}return Ki(i,s)},jd=function(t,e,i){var r=t.labels,s=En,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Tn=function(t,e,i){var r=t.vars,s=r[e],o=fe,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,i&&Wi.length&&Va(),a&&(fe=a),u=l?s.apply(c,l):s.call(c),fe=o,u},Ks=function(t){return $i(t),t.scrollTrigger&&t.scrollTrigger.kill(!!He),t.progress()<1&&Tn(t,"onInterrupt"),t},is,R_=[],C_=function(t){if(th()&&t){t=!t.name&&t.default||t;var e=t.name,i=de(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:bo,render:uh,add:oh,kill:TA,modifier:bA,rawVars:0},o={targetTest:0,get:0,getSetter:ch,aliases:{},register:0};if(Rs(),t!==r){if(cn[e])return;wn(r,wn(Wa(t,s),o)),Rr(r.prototype,Rr(s,Wa(t,o))),cn[r.prop=e]=r,t.targetTest&&(Pa.push(r),ih[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}h_(e,r),t.register&&t.register(sn,r,nn)}else t&&R_.push(t)},te=255,Zs={aqua:[0,te,te],lime:[0,te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,te],navy:[0,0,128],white:[te,te,te],olive:[128,128,0],yellow:[te,te,0],orange:[te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[te,0,0],pink:[te,192,203],cyan:[0,te,te],transparent:[te,te,te,0]},mc=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*te+.5|0},P_=function(t,e,i){var r=t?Si(t)?[t>>16,t>>8&te,t&te]:0:Zs.black,s,o,a,l,c,u,h,f,d,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zs[t])r=Zs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&te,r&te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&te,t&te]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(Jc),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=mc(l+1/3,s,o),r[1]=mc(l,s,o),r[2]=mc(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(o_),i&&r.length<4&&(r[3]=1),r}else r=t.match(Jc)||Zs.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/te,o=r[1]/te,a=r[2]/te,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},L_=function(t){var e=[],i=[],r=-1;return t.split(Xi).forEach(function(s){var o=s.match(ns)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},Kd=function(t,e,i){var r="",s=(t+r).match(Xi),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=P_(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=L_(t),l=i.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Xi,"1").split(ns),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(Xi),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Xi=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zs)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),uA=/hsl[a]?\(/,D_=function(t){var e=t.join(" "),i;if(Xi.lastIndex=0,Xi.test(e))return i=uA.test(e),t[1]=Kd(t[1],i),t[0]=Kd(t[0],i,L_(t[1])),!0},wo,fn=function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=n()-r,y=m===!0,v,M,E,T;if(p>t&&(i+=p-e),r+=p,E=r-i,v=E-o,(v>0||y)&&(T=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,o+=v+(v>=s?4:s-v),M=1),y||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](E,f,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){c_&&(!Qc&&th()&&(xn=Qc=window,eh=xn.document||{},mn.gsap=sn,(xn.gsapVersions||(xn.gsapVersions=[])).push(sn.version),u_(Ha||xn.GreenSockGlobals||!xn.gsap&&xn||{}),u=xn.requestAnimationFrame,R_.forEach(C_)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},wo=1,g(2))},sleep:function(){(u?xn.cancelAnimationFrame:clearTimeout)(l),wo=0,c=bo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,y){var v=p?function(M,E,T,A){m(M,E,T,A),h.remove(v)}:m;return h.remove(m),a[y?"unshift":"push"](v),Rs(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Rs=function(){return!wo&&fn.wake()},qt={},hA=/^[\d.\-M][\d.\-,\s]/,fA=/["']/g,dA=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(fA,"").trim():+c,r=l.substr(a+1).trim();return e},pA=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},mA=function(t){var e=(t+"").split("("),i=qt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[dA(e[1])]:pA(t).split(",").map(m_)):qt._CE&&hA.test(t)?qt._CE("",t):i},U_=function(t){return function(e){return 1-t(1-e)}},I_=function n(t,e){for(var i=t._first,r;i;)i instanceof Je?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},Sr=function(t,e){return t&&(de(t)?t:qt[t]||mA(t))||e},Lr=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return en(t,function(a){qt[a]=mn[a]=s,qt[o=a.toLowerCase()]=i;for(var l in s)qt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qt[a+"."+l]=s[l]}),s},N_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},_c=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Zc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Vw((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:N_(a);return s=Zc/s,l.config=function(c,u){return n(t,c,u)},l},gc=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:N_(i);return r.config=function(s){return n(t,s)},r};en("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;Lr(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});qt.Linear.easeNone=qt.none=qt.Linear.easeIn;Lr("Elastic",_c("in"),_c("out"),_c());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};Lr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Lr("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Lr("Circ",function(n){return-(r_(1-n*n)-1)});Lr("Sine",function(n){return n===1?1:-Gw(n*kw)+1});Lr("Back",gc("in"),gc("out"),gc());qt.SteppedEase=qt.steps=mn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-ee;return function(a){return((r*Oo(0,o,a)|0)+s)*i}}};Ts.ease=qt["quad.out"];en("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return rh+=n+","+n+"Params,"});var O_=function(t,e){this.id=Hw++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:d_,this.set=e?e.getSetter:ch},Ao=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,As(this,+e.duration,1,1),this.data=e.data,fe&&(this._ctx=fe,fe.data.push(this)),wo||fn.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,As(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Rs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gl(this,i),!s._dp||s.parent||v_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ee||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),p_(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Yd(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Yd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ws(this._tTime,s)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-ee?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Xa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ee?0:this._rts,this.totalTime(Oo(-Math.abs(this._delay),this._tDur,r),!0),_l(this),Kw(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ee&&(this._tTime-=ee)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&jn(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(tn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xa(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=qw);var r=He;return He=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),He=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,$d(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,$d(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(vn(this,i),tn(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,tn(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ee,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ee)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this;return new Promise(function(s){var o=de(i)?i:__,a=function(){var c=r.then;r.then=null,de(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){Ks(this)},n}();wn(Ao.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ee,_prom:0,_ps:!1,_rts:1});var Je=function(n){i_(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=tn(i.sortChildren),ae&&jn(i.parent||ae,pi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&x_(pi(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return ao(0,arguments,this),this},e.from=function(r,s,o){return ao(1,arguments,this),this},e.fromTo=function(r,s,o,a){return ao(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,oo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ee(r,s,vn(this,o),1),this},e.call=function(r,s,o){return jn(this,Ee.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ee(r,o,vn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,oo(o).immediateRender=tn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,oo(a).immediateRender=tn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ie(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,g,_,m,p,y,v,M,E,T,A;if(this!==ae&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,M=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ie(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),E=ws(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),T&&_&1&&(f=c-f,A=1),_!==E&&!this._lock){var D=T&&E&1,S=D===(T&&_&1);if(_<E&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ie(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Tn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;I_(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=tA(this,Ie(a),Ie(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(Tn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-ee);break}}d=g}else{d=this._last;for(var w=r<0?r:f;d;){if(g=d._prev,(d._act||w<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,s,o||He&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=w?-ee:ee);break}}d=g}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-ee)._zTime=f>=a?1:-1,this._ts))return this._start=M,_l(this),this.render(r,s,o);this._onUpdate&&!s&&Tn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$i(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Tn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Si(s)||(s=vn(this,s,r)),!(r instanceof Ao)){if(Ge(r))return r.forEach(function(a){return o.add(a,s)}),this;if(De(r))return this.addLabel(r,s);if(de(r))r=Ee.delayedCall(0,r);else return this}return this!==r?jn(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-En);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ee?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return De(r)?this.removeLabel(r):de(r)?this.killTweensOf(r):(ml(this,r),r===this._recent&&(this._recent=this._last),Mr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ie(fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=vn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Ee.delayedCall(0,s||bo,o);return a.data="isPause",this._hasPause=1,jn(this,a,vn(this,r))},e.removePause=function(r){var s=this._first;for(r=vn(this,r);s;)s._start===r&&s.data==="isPause"&&$i(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Oi!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=bn(r),l=this._first,c=Si(s),u;l;)l instanceof Ee?Yw(l._targets,a)&&(c?(!Oi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=vn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ee.to(o,wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ee,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&As(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,wn({startAt:{time:vn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),jd(this,vn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),jd(this,vn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ee)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Mr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Mr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=En,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,jn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;As(o,o===ae&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(ae._ts&&(p_(ae,Xa(r,ae)),f_=fn.frame),fn.frame>=Xd){Xd+=pn.autoSleep||120;var s=ae._first;if((!s||!s._ts)&&pn.autoSleep&&fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fn.sleep()}}},t}(Ao);wn(Je.prototype,{_lock:0,_hasPause:0,_forcing:0});var _A=function(t,e,i,r,s,o,a){var l=new nn(this._pt,t,e,0,1,G_,null,s),c=0,u=0,h,f,d,g,_,m,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=To(r)),o&&(y=[i,r],o(y,t,e),i=y[0],r=y[1]),f=i.match(dc)||[];h=dc.exec(r);)g=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?fs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=dc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(a_.test(r)||p)&&(l.e=0),this._pt=l,l},oh=function(t,e,i,r,s,o,a,l,c,u){de(r)&&(r=r(s||0,t,o));var h=t[e],f=i!=="get"?i:de(h)?c?t[e.indexOf("set")||!de(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=de(h)?c?MA:k_:lh,g;if(De(r)&&(~r.indexOf("random(")&&(r=To(r)),r.charAt(1)==="="&&(g=fs(f,r)+(ke(f)||0),(g||g===0)&&(r=g))),!u||f!==r||ou)return!isNaN(f*r)&&r!==""?(g=new nn(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?EA:H_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&nh(e,r),_A.call(this,t,e,f,r,d,l||pn.stringFilter,c))},gA=function(t,e,i,r,s){if(de(t)&&(t=lo(t,s,e,i,r)),!ei(t)||t.style&&t.nodeType||Ge(t)||s_(t))return De(t)?lo(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=lo(t[a],s,e,i,r);return o},F_=function(t,e,i,r,s,o){var a,l,c,u;if(cn[t]&&(a=new cn[t]).init(s,a.rawVars?e[t]:gA(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new nn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==is))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Oi,ou,ah=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,d=r.yoyoEase,g=r.keyframes,_=r.autoRevert,m=t._dur,p=t._startAt,y=t._targets,v=t.parent,M=v&&v.data==="nested"?v.vars.targets:y,E=t._overwrite==="auto"&&!Ju,T=t.timeline,A,D,S,w,z,J,B,G,W,Z,F,H,nt;if(T&&(!g||!s)&&(s="none"),t._ease=Sr(s,Ts.ease),t._yEase=d?U_(Sr(d===!0?s:d,Ts.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!T&&!!r.runBackwards,!T||g&&!r.stagger){if(G=y[0]?yr(y[0]).harness:0,H=G&&r[G.prop],A=Wa(r,ih),p&&(p._zTime<0&&p.progress(1),e<0&&f&&a&&!_?p.render(-1,!0):p.revert(f&&m?Ca:Xw),p._lazy=0),o){if($i(t._startAt=Ee.set(y,wn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!p&&tn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He||!a&&!_)&&t._startAt.revert(Ca),a&&m&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(f&&m&&!p){if(e&&(a=!1),S=wn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&tn(l),immediateRender:a,stagger:0,parent:v},A),H&&(S[G.prop]=H),$i(t._startAt=Ee.set(y,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He?t._startAt.revert(Ca):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,ee,ee);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&tn(l)||l&&!m,D=0;D<y.length;D++){if(z=y[D],B=z._gsap||sh(y)[D]._gsap,t._ptLookup[D]=Z={},tu[B.id]&&Wi.length&&Va(),F=M===y?D:M.indexOf(z),G&&(W=new G).init(z,H||A,t,F,M)!==!1&&(t._pt=w=new nn(t._pt,z,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(st){Z[st]=w}),W.priority&&(J=1)),!G||H)for(S in A)cn[S]&&(W=F_(S,A,t,F,z,M))?W.priority&&(J=1):Z[S]=w=oh.call(t,z,S,"get",A[S],F,M,0,r.stringFilter);t._op&&t._op[D]&&t.kill(z,t._op[D]),E&&t._pt&&(Oi=t,ae.killTweensOf(z,Z,t.globalTime(e)),nt=!t.parent,Oi=0),t._pt&&l&&(tu[B.id]=1)}J&&V_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!nt,g&&e<=0&&T.render(En,!0,!0)},vA=function(t,e,i,r,s,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return ou=1,t.vars[e]="+=0",ah(t,a),ou=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,u.e&&(u.e=_e(i)+ke(u.e)),u.b&&(u.b=c.s+ke(u.b))},xA=function(t,e){var i=t[0]?yr(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=Rr({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},yA=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(Ge(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},lo=function(t,e,i,r,s){return de(t)?t.call(e,i,r,s):De(t)&&~t.indexOf("random(")?To(t):t},B_=rh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",z_={};en(B_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return z_[n]=1});var Ee=function(n){i_(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:oo(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=r.parent||ae,v=(Ge(i)||s_(i)?Si(i[0]):"length"in r)?[i]:bn(i),M,E,T,A,D,S,w,z;if(a._targets=v.length?sh(v):Ga("GSAP target "+i+" not found. https://greensock.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||xa(c)||xa(u)){if(r=a.vars,M=a.timeline=new Je({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),M.kill(),M.parent=M._dp=pi(a),M._start=0,f||xa(c)||xa(u)){if(A=v.length,w=f&&E_(f),ei(f))for(D in f)~B_.indexOf(D)&&(z||(z={}),z[D]=f[D]);for(E=0;E<A;E++)T=Wa(r,z_),T.stagger=0,p&&(T.yoyoEase=p),z&&Rr(T,z),S=v[E],T.duration=+lo(c,pi(a),E,S,v),T.delay=(+lo(u,pi(a),E,S,v)||0)-a._delay,!f&&A===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),M.to(S,T,w?w(E,S,v):0),M._ease=qt.none;M.duration()?c=u=0:a.timeline=0}else if(g){oo(wn(M.vars.defaults,{ease:"none"})),M._ease=Sr(g.ease||r.ease||"none");var J=0,B,G,W;if(Ge(g))g.forEach(function(Z){return M.to(v,Z,">")}),M.duration();else{T={};for(D in g)D==="ease"||D==="easeEach"||yA(D,g[D],T,g.easeEach);for(D in T)for(B=T[D].sort(function(Z,F){return Z.t-F.t}),J=0,E=0;E<B.length;E++)G=B[E],W={ease:G.e,duration:(G.t-(E?B[E-1].t:0))/100*c},W[D]=G.v,M.to(v,W,J),J+=W.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!Ju&&(Oi=pi(a),ae.killTweensOf(v),Oi=0),jn(y,pi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ie(y._time)&&tn(h)&&Zw(pi(a))&&y.data!=="nested")&&(a._tTime=-ee,a.render(Math.max(0,-u)||0)),m&&x_(pi(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-ee&&!u?l:r<ee?0:r,f,d,g,_,m,p,y,v,M;if(!c)Qw(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=Ie(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(M=this._yEase,f=c-f),m=ws(this._tTime,_),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(v&&this._yEase&&I_(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(Ie(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(y_(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!s&&!g&&(Tn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(r<0?r:!f&&p?-ee:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&eu(this,r,s,o),Tn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Tn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&eu(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&$i(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Tn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a){wo||fn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ah(this,l),c=this._ease(l/this._dur),vA(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(gl(this,0),this.parent||g_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ks(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Oi&&Oi.vars.overwrite!==!0)._first||Ks(this),this.parent&&o!==this.timeline.totalDuration()&&As(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?bn(r):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&jw(a,l))return s==="all"&&(this._pt=0),Ks(this);for(h=this._op=this._op||[],s!=="all"&&(De(s)&&(_={},en(s,function(y){return _[y]=1}),s=_),s=xA(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ml(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ks(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return ao(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return ao(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return ae.killTweensOf(r,s,o)},t}(Ao);wn(Ee.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});en("staggerTo,staggerFrom,staggerFromTo",function(n){Ee[n]=function(){var t=new Je,e=iu.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var lh=function(t,e,i){return t[e]=i},k_=function(t,e,i){return t[e](i)},MA=function(t,e,i,r){return t[e](r.fp,i)},SA=function(t,e,i){return t.setAttribute(e,i)},ch=function(t,e){return de(t[e])?k_:Qu(t[e])&&t.setAttribute?SA:lh},H_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},EA=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},G_=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},uh=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},bA=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},TA=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?ml(this,e,"_pt"):e.dep||(i=1),e=r;return!i},wA=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},V_=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},nn=function(){function n(e,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||H_,this.d=l||this,this.set=c||lh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=wA,this.m=i,this.mt=s,this.tween=r},n}();en(rh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return ih[n]=1});mn.TweenMax=mn.TweenLite=Ee;mn.TimelineLite=mn.TimelineMax=Je;ae=new Je({sortChildren:!1,defaults:Ts,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=D_;var Er=[],La={},AA=[],Zd=0,RA=0,vc=function(t){return(La[t]||AA).map(function(e){return e()})},au=function(){var t=Date.now(),e=[];t-Zd>2&&(vc("matchMediaInit"),Er.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=xn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),vc("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i)}),Zd=t,vc("matchMedia"))},W_=function(){function n(e,i){this.selector=i&&ru(i),this.data=[],this._r=[],this.isReverted=!1,this.id=RA++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){de(i)&&(s=r,r=i,i=de);var o=this,a=function(){var c=fe,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=ru(s)),fe=o,h=r.apply(o,arguments),de(h)&&o._r.push(h),fe=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===de?a(o):i?o[i]=a:a},t.ignore=function(i){var r=fe;fe=null,i(this),fe=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ee&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Ee)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=Er.length;a--;)Er[a].id===this.id&&Er.splice(a,1)},t.revert=function(i){this.kill(i||{})},n}(),CA=function(){function n(e){this.contexts=[],this.scope=e}var t=n.prototype;return t.add=function(i,r,s){ei(i)||(i={matches:i});var o=new W_(0,s||this.scope),a=o.conditions={},l,c,u;fe&&!o.selector&&(o.selector=fe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=xn.matchMedia(i[c]),l&&(Er.indexOf(o)<0&&Er.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(au):l.addEventListener("change",au)));return u&&r(o),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),qa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return C_(r)})},timeline:function(t){return new Je(t)},getTweensOf:function(t,e){return ae.getTweensOf(t,e)},getProperty:function(t,e,i,r){De(t)&&(t=bn(t)[0]);var s=yr(t||{}).get,o=i?__:m_;return i==="native"&&(i=""),t&&(e?o((cn[e]&&cn[e].get||s)(t,e,i,r)):function(a,l,c){return o((cn[a]&&cn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=bn(t),t.length>1){var r=t.map(function(u){return sn.quickSetter(u,e,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=cn[e],a=yr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;is._pt=0,h.init(t,i?u+i:u,is,0,[t]),h.render(1,h),is._pt&&uh(1,is)}:a.set(t,l);return o?c:function(u){return c(t,l,i?u+i:u,a,1)}},quickTo:function(t,e,i){var r,s=sn.to(t,Rr((r={},r[e]="+=0.1",r.paused=!0,r),i||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Sr(t.ease,Ts.ease)),qd(Ts,t||{})},config:function(t){return qd(pn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!cn[a]&&!mn[a]&&Ga(e+" effect requires "+a+" plugin.")}),pc[e]=function(a,l,c){return i(bn(a),wn(l||{},s),c)},o&&(Je.prototype[e]=function(a,l,c){return this.add(pc[e](a,ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){qt[t]=Sr(e)},parseEase:function(t,e){return arguments.length?Sr(t,e):qt},getById:function(t){return ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Je(t),r,s;for(i.smoothChildTiming=tn(t.smoothChildTiming),ae.remove(i),i._dp=0,i._time=i._tTime=ae._time,r=ae._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Ee&&r.vars.onComplete===r._targets[0]))&&jn(i,r,r._start-r._delay),r=s;return jn(ae,i,0),i},context:function(t,e){return t?new W_(t,e):fe},matchMedia:function(t){return new CA(t)},matchMediaRefresh:function(){return Er.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||au()},addEventListener:function(t,e){var i=La[t]||(La[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=La[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:aA,wrapYoyo:lA,distribute:E_,random:T_,snap:b_,normalize:oA,getUnit:ke,clamp:nA,splitColor:P_,toArray:bn,selector:ru,mapRange:A_,pipe:rA,unitize:sA,interpolate:cA,shuffle:S_},install:u_,effects:pc,ticker:fn,updateRoot:Je.updateRoot,plugins:cn,globalTimeline:ae,core:{PropTween:nn,globals:h_,Tween:Ee,Timeline:Je,Animation:Ao,getCache:yr,_removeLinkedListItem:ml,reverting:function(){return He},context:function(t){return t&&fe&&(fe.data.push(t),t._ctx=fe),fe},suppressOverwrites:function(t){return Ju=t}}};en("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return qa[n]=Ee[n]});fn.add(Je.updateRoot);is=qa.to({},{duration:0});var PA=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},LA=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=PA(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},xc=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(De(s)&&(l={},en(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}LA(a,s)}}}},sn=qa.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)He?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},xc("roundProps",su),xc("modifiers"),xc("snap",b_))||qa;Ee.version=Je.version=sn.version="3.12.2";c_=1;th()&&Rs();qt.Power0;qt.Power1;qt.Power2;qt.Power3;qt.Power4;qt.Linear;qt.Quad;qt.Cubic;qt.Quart;qt.Quint;qt.Strong;qt.Elastic;qt.Back;qt.SteppedEase;qt.Bounce;qt.Sine;qt.Expo;qt.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jd,Fi,ds,hh,dr,Qd,fh,DA=function(){return typeof window<"u"},Ei={},cr=180/Math.PI,ps=Math.PI/180,jr=Math.atan2,tp=1e8,dh=/([A-Z])/g,UA=/(left|right|width|margin|padding|x)/i,IA=/[\s,\(]\S/,Zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},NA=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},OA=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},FA=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},X_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},q_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},BA=function(t,e,i){return t.style[e]=i},zA=function(t,e,i){return t.style.setProperty(e,i)},kA=function(t,e,i){return t._gsap[e]=i},HA=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},GA=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},VA=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},ce="transform",zn=ce+"Origin",WA=function n(t,e){var i=this,r=this.target,s=r.style;if(t in Ei&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Zn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=mi(r,o)}):this.tfm[t]=r._gsap.x?r._gsap[t]:mi(r,t);else return Zn.transform.split(",").forEach(function(o){return n.call(i,o,e)});if(this.props.indexOf(ce)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(zn,e,"")),t=ce}(s||e)&&this.props.push(t,e,s[t])},Y_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},XA=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(dh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=fh(),(!s||!s.isStart)&&!i[ce]&&(Y_(i),r.uncache=1)}},$_=function(t,e){var i={target:t,props:[],revert:XA,save:WA};return t._gsap||sn.core.getCache(t),e&&e.split(",").forEach(function(r){return i.save(r)}),i},j_,cu=function(t,e){var i=Fi.createElementNS?Fi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Fi.createElement(t);return i.style?i:Fi.createElement(t)},Qn=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(dh,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,Cs(e)||e,1)||""},ep="O,Moz,ms,Ms,Webkit".split(","),Cs=function(t,e,i){var r=e||dr,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ep[o]+t in s););return o<0?null:(o===3?"ms":o>=0?ep[o]:"")+t},uu=function(){DA()&&window.document&&(Jd=window,Fi=Jd.document,ds=Fi.documentElement,dr=cu("div")||{style:{}},cu("div"),ce=Cs(ce),zn=ce+"Origin",dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",j_=!!Cs("perspective"),fh=sn.core.reverting,hh=1)},yc=function n(t){var e=cu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(ds.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),ds.removeChild(e),this.style.cssText=s,o},np=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},K_=function(t){var e;try{e=t.getBBox()}catch{e=yc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===yc||(e=yc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+np(t,["x","cx","x1"])||0,y:+np(t,["y","cy","y1"])||0,width:0,height:0}:e},Z_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&K_(t))},Ro=function(t,e){if(e){var i=t.style;e in Ei&&e!==zn&&(e=ce),i.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(e.replace(dh,"-$1").toLowerCase())):i.removeAttribute(e)}},Bi=function(t,e,i,r,s,o){var a=new nn(t._pt,e,i,0,1,o?q_:X_);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},ip={deg:1,rad:1,turn:1},qA={grid:1,flex:1},ji=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=dr.style,l=UA.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",g,_,m,p;return r===o||!s||ip[r]||ip[o]?s:(o!=="px"&&!f&&(s=n(t,e,i,"px")),p=t.getCTM&&Z_(t),(d||o==="%")&&(Ei[e]||~e.indexOf("adius"))?(g=p?t.getBBox()[l?"width":"height"]:t[u],_e(d?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:r),_=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Fi||!_.appendChild)&&(_=Fi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===fn.time&&!m.uncache?_e(s/m.width*h):((d||o==="%")&&!qA[Qn(_,"display")]&&(a.position=Qn(t,"position")),_===t&&(a.position="static"),_.appendChild(dr),g=dr[u],_.removeChild(dr),a.position="absolute",l&&d&&(m=yr(_),m.time=fn.time,m.width=_[u]),_e(f?g*s/h:g&&s?h/g*s:0))))},mi=function(t,e,i,r){var s;return hh||uu(),e in Zn&&e!=="transform"&&(e=Zn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ei[e]&&e!=="transform"?(s=Po(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:$a(Qn(t,zn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ya[e]&&Ya[e](t,e,i)||Qn(t,e)||d_(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ji(t,e,s,i)+i:s},YA=function(t,e,i,r){if(!i||i==="none"){var s=Cs(e,t,1),o=s&&Qn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=Qn(t,"borderTopColor"))}var a=new nn(this._pt,t.style,e,0,1,G_),l=0,c=0,u,h,f,d,g,_,m,p,y,v,M,E;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(t.style[e]=r,r=Qn(t,e)||r,t.style[e]=i),u=[i,r],D_(u),i=u[0],r=u[1],f=i.match(ns)||[],E=r.match(ns)||[],E.length){for(;h=ns.exec(r);)m=h[0],y=r.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),m.charAt(1)==="="&&(m=fs(d,m)+M),p=parseFloat(m),v=m.substr((p+"").length),l=ns.lastIndex-v.length,v||(v=v||pn.units[e]||M,l===r.length&&(r+=v,a.e+=v)),M!==v&&(d=ji(t,e,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?q_:X_;return a_.test(r)&&(a.e=0),this._pt=a,a},rp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$A=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=rp[i]||i,e[1]=rp[r]||r,e.join(" ")},jA=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ei[a]&&(l=1,a=a==="transformOrigin"?zn:ce),Ro(i,a);l&&(Ro(i,ce),o&&(o.svg&&i.removeAttribute("transform"),Po(i,1),o.uncache=1,Y_(r)))}},Ya={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new nn(t._pt,e,i,0,0,jA);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},Co=[1,0,0,1,0,0],J_={},Q_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},sp=function(t){var e=Qn(t,ce);return Q_(e)?Co:e.substr(7).match(o_).map(_e)},ph=function(t,e){var i=t._gsap||yr(t),r=t.style,s=sp(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Co:s):(s===Co&&!t.offsetParent&&t!==ds&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,ds.appendChild(t)),s=sp(t),l?r.display=l:Ro(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ds.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hu=function(t,e,i,r,s,o){var a=t._gsap,l=s||ph(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],v=e.split(" "),M=parseFloat(v[0])||0,E=parseFloat(v[1])||0,T,A,D,S;i?l!==Co&&(A=d*m-g*_)&&(D=M*(m/A)+E*(-_/A)+(_*y-m*p)/A,S=M*(-g/A)+E*(d/A)-(d*y-g*p)/A,M=D,E=S):(T=K_(t),M=T.x+(~v[0].indexOf("%")?M/100*T.width:M),E=T.y+(~(v[1]||v[0]).indexOf("%")?E/100*T.height:E)),r||r!==!1&&a.smooth?(p=M-c,y=E-u,a.xOffset=h+(p*d+y*_)-p,a.yOffset=f+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=E,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[zn]="0px 0px",o&&(Bi(o,a,"xOrigin",c,M),Bi(o,a,"yOrigin",u,E),Bi(o,a,"xOffset",h,a.xOffset),Bi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+E)},Po=function(t,e){var i=t._gsap||new O_(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Qn(t,zn)||"0",u,h,f,d,g,_,m,p,y,v,M,E,T,A,D,S,w,z,J,B,G,W,Z,F,H,nt,st,k,j,pt,ft,_t;return u=h=f=_=m=p=y=v=M=0,d=g=1,i.svg=!!(t.getCTM&&Z_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ce]!=="none"?l[ce]:"")),r.scale=r.rotate=r.translate="none"),A=ph(t,i.svg),i.svg&&(i.uncache?(H=t.getBBox(),c=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),hu(t,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,A)),E=i.xOrigin||0,T=i.yOrigin||0,A!==Co&&(z=A[0],J=A[1],B=A[2],G=A[3],u=W=A[4],h=Z=A[5],A.length===6?(d=Math.sqrt(z*z+J*J),g=Math.sqrt(G*G+B*B),_=z||J?jr(J,z)*cr:0,y=B||G?jr(B,G)*cr+_:0,y&&(g*=Math.abs(Math.cos(y*ps))),i.svg&&(u-=E-(E*z+T*B),h-=T-(E*J+T*G))):(_t=A[6],pt=A[7],st=A[8],k=A[9],j=A[10],ft=A[11],u=A[12],h=A[13],f=A[14],D=jr(_t,j),m=D*cr,D&&(S=Math.cos(-D),w=Math.sin(-D),F=W*S+st*w,H=Z*S+k*w,nt=_t*S+j*w,st=W*-w+st*S,k=Z*-w+k*S,j=_t*-w+j*S,ft=pt*-w+ft*S,W=F,Z=H,_t=nt),D=jr(-B,j),p=D*cr,D&&(S=Math.cos(-D),w=Math.sin(-D),F=z*S-st*w,H=J*S-k*w,nt=B*S-j*w,ft=G*w+ft*S,z=F,J=H,B=nt),D=jr(J,z),_=D*cr,D&&(S=Math.cos(D),w=Math.sin(D),F=z*S+J*w,H=W*S+Z*w,J=J*S-z*w,Z=Z*S-W*w,z=F,W=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=_e(Math.sqrt(z*z+J*J+B*B)),g=_e(Math.sqrt(Z*Z+_t*_t)),D=jr(W,Z),y=Math.abs(D)>2e-4?D*cr:0,M=ft?1/(ft<0?-ft:ft):0),i.svg&&(F=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Q_(Qn(t,ce)),F&&t.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=_e(d),i.scaleY=_e(g),i.rotation=_e(_)+a,i.rotationX=_e(m)+a,i.rotationY=_e(p)+a,i.skewX=y+a,i.skewY=v+a,i.transformPerspective=M+o,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[zn]=$a(c)),i.xOffset=i.yOffset=0,i.force3D=pn.force3D,i.renderTransform=i.svg?ZA:j_?tg:KA,i.uncache=0,i},$a=function(t){return(t=t.split(" "))[0]+" "+t[1]},Mc=function(t,e,i){var r=ke(e);return _e(parseFloat(e)+parseFloat(ji(t,"x",i+"px",r)))+r},KA=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tg(t,e)},sr="0deg",Ws="0px",or=") ",tg=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,v=i.zOrigin,M="",E=p==="auto"&&t&&t!==1||p===!0;if(v&&(h!==sr||u!==sr)){var T=parseFloat(u)*ps,A=Math.sin(T),D=Math.cos(T),S;T=parseFloat(h)*ps,S=Math.cos(T),o=Mc(y,o,A*S*-v),a=Mc(y,a,-Math.sin(T)*-v),l=Mc(y,l,D*S*-v+v)}m!==Ws&&(M+="perspective("+m+or),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(E||o!==Ws||a!==Ws||l!==Ws)&&(M+=l!==Ws||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+or),c!==sr&&(M+="rotate("+c+or),u!==sr&&(M+="rotateY("+u+or),h!==sr&&(M+="rotateX("+h+or),(f!==sr||d!==sr)&&(M+="skew("+f+", "+d+or),(g!==1||_!==1)&&(M+="scale("+g+", "+_+or),y.style[ce]=M||"translate(0, 0)"},ZA=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,v=parseFloat(o),M=parseFloat(a),E,T,A,D,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ps,c*=ps,E=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-f,D=Math.cos(l-c)*f,c&&(u*=ps,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,D*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,T*=S)),E=_e(E),T=_e(T),A=_e(A),D=_e(D)):(E=h,D=f,T=A=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=ji(d,"x",o,"px"),M=ji(d,"y",a,"px")),(g||_||m||p)&&(v=_e(v+g-(g*E+_*A)+m),M=_e(M+_-(g*T+_*D)+p)),(r||s)&&(S=d.getBBox(),v=_e(v+r/100*S.width),M=_e(M+s/100*S.height)),S="matrix("+E+","+T+","+A+","+D+","+v+","+M+")",d.setAttribute("transform",S),y&&(d.style[ce]=S)},JA=function(t,e,i,r,s){var o=360,a=De(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?cr:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*tp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*tp)%o-~~(c/o)*o)),t._pt=f=new nn(t._pt,e,i,r,c,NA),f.e=u,f.u="deg",t._props.push(i),f},op=function(t,e){for(var i in e)t[i]=e[i];return t},QA=function(t,e,i){var r=op({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,f,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[ce]=e,a=Po(i,1),Ro(i,ce),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ce],o[ce]=e,a=Po(i,1),o[ce]=c);for(l in Ei)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=ke(c),g=ke(u),h=d!==g?ji(i,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new nn(t._pt,a,l,h,f-h,lu),t._pt.u=g||0,t._props.push(l));op(a,r)};en("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});Ya[t>1?"border"+n:n]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return mi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var eg={name:"css",register:uu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,c,u,h,f,d,g,_,m,p,y,v,M,E,T,A,D;hh||uu(),this.styles=this.styles||$_(t),D=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(cn[_]&&F_(_,e,i,r,t,s)))){if(d=typeof u,g=Ya[_],d==="function"&&(u=u.call(i,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=To(u)),g)g(this,t,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Xi.lastIndex=0,Xi.test(c)||(m=ke(c),p=ke(u)),p?m!==p&&(c=ji(t,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],De(c)&&~c.indexOf("random(")&&(c=To(c)),ke(c+"")||(c+=pn.units[_]||ke(mi(t,_))||""),(c+"").charAt(1)==="="&&(c=mi(t,_))):c=mi(t,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Zn&&(_==="autoAlpha"&&(f===1&&mi(t,"visibility")==="hidden"&&h&&(f=0),D.push("visibility",0,a.visibility),Bi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Zn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Ei,v){if(this.styles.save(_),M||(E=t._gsap,E.renderTransform&&!e.parseTransform||Po(t,e.parseTransform),T=e.smoothOrigin!==!1&&E.smooth,M=this._pt=new nn(this._pt,a,ce,0,1,E.renderTransform,E,0,-1),M.dep=1),_==="scale")this._pt=new nn(this._pt,E,"scaleY",E.scaleY,(y?fs(E.scaleY,y+h):h)-E.scaleY||0,lu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(zn,0,a[zn]),u=$A(u),E.svg?hu(t,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Bi(this,E,"zOrigin",E.zOrigin,p),Bi(this,a,_,$a(c),$a(u)));continue}else if(_==="svgOrigin"){hu(t,u,1,T,0,this);continue}else if(_ in J_){JA(this,E,_,f,y?fs(f,y+u):u);continue}else if(_==="smoothOrigin"){Bi(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){QA(this,u,t);continue}}else _ in a||(_=Cs(_)||_);if(v||(h||h===0)&&(f||f===0)&&!IA.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=ke(u)||(_ in pn.units?pn.units[_]:m),m!==p&&(f=ji(t,_,c,p)),this._pt=new nn(this._pt,v?E:a,_,f,(y?fs(f,y+h):h)-f,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?FA:lu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=OA);else if(_ in a)YA.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,r,s);else if(_!=="parseTransform"){nh(_,u);continue}v||(_ in a?D.push(_,0,a[_]):D.push(_,1,c||t[_])),o.push(_)}}A&&V_(this)},render:function(t,e){if(e.tween._time||!fh())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:mi,aliases:Zn,getSetter:function(t,e,i){var r=Zn[e];return r&&r.indexOf(",")<0&&(e=r),e in Ei&&e!==zn&&(t._gsap.x||mi(t,"x"))?i&&Qd===i?e==="scale"?HA:kA:(Qd=i||{})&&(e==="scale"?GA:VA):t.style&&!Qu(t.style[e])?BA:~e.indexOf("-")?zA:ch(t,e)},core:{_removeProperty:Ro,_getMatrix:ph}};sn.utils.checkPrefix=Cs;sn.core.getStyleSaver=$_;(function(n,t,e,i){var r=en(n+","+t+","+e,function(s){Ei[s]=1});en(t,function(s){pn.units[s]="deg",J_[s]=1}),Zn[r[13]]=n+","+t,en(i,function(s){var o=s.split(":");Zn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");en("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){pn.units[n]="px"});sn.registerPlugin(eg);var ja=sn.registerPlugin(eg)||sn;ja.core.Tween;var ya,ap,fu,tR,Sc,lp=new N(0,1,0),fu=new N,Xs=0;function ng(){this.rocket=new ve,this.rocketTween=ja.set(this.rocket.position,{x:0}),this.bodyMat=new uc({color:1934186,wireframe:!1,shading:void 0}),this.ringMat=new uc({color:3808025,wireframe:!1,shading:void 0}),this.metalMat=new uc({color:8488845,wireframe:!1,shading:void 0});var n=new yi(30,10,30);this.top=new ve,this.mid=new ve,this.bot=new ve,this.engine=new ve,this.legs=new ve,this.bodyTopRing=Jt(35,35,10,10,1,this.ringMat),this.bodyTopRing.position.y=0,this.bodyTopBase=Jt(25,30,10,10,1,this.bodyMat),this.bodyTopBase.position.y=10,this.bodyTop=Jt(5,25,30,10,1,this.bodyMat),this.bodyTop.position.y=30,this.bodyTopNippleBase=Jt(5,5,5,10,1,this.ringMat),this.bodyTopNippleBase.position.y=47,this.bodyTopNipple=Jt(2,5,5,10,1,this.ringMat),this.bodyTopNipple.position.y=52,this.bodyTopAntenna=Jt(1,1,25,5,1,this.ringMat),this.bodyTopAntenna.position.y=63,this.bodyTopAntennaBall=new Pe(new pl(2,20,10),this.ringMat),this.bodyTopAntennaBall.position.y=76,this.top.add(this.bodyTopRing),this.top.add(this.bodyTopBase),this.top.add(this.bodyTop),this.top.add(this.bodyTopNippleBase),this.top.add(this.bodyTopNipple),this.top.add(this.bodyTopAntenna),this.top.add(this.bodyTopAntennaBall),this.bodyMidRing=Jt(87,87,12,12,1,this.ringMat),this.bodyMidRing.position.y=0,this.bodyMidBase=Jt(60,80,50,12,1,this.bodyMat),this.bodyMidBase.position.y=31,this.bodyMid=Jt(30,60,120,12,1,this.bodyMat),this.bodyMid.position.y=116,this.mid.add(this.bodyMid),this.mid.add(this.bodyMidBase),this.mid.add(this.bodyMidRing),this.bodyBotRing=Jt(45,45,5,12,1,this.ringMat),this.bodyBotRing.position.y=0,this.bodyBot=Jt(80,45,25,12,1,this.bodyMat),this.bodyBot.position.y=15,this.bot.add(this.bodyBotRing),this.bot.add(this.bodyBot),this.bodyEngineTop=Jt(45,50,5,12,1,this.bodyMat),this.bodyEngineTop.position.y=0,this.bodyEngineRingTop=Jt(55,50,10,12,1,this.ringMat),this.bodyEngineRingTop.position.y=-8,this.bodyEngineMid=Jt(45,45,10,8,1,this.bodyMat),this.bodyEngineMid.position.y=-18,this.bodyEngineRingBot=Jt(50,40,10,12,1,this.ringMat),this.bodyEngineRingBot.position.y=-28,this.bodyEngineNozzle=Jt(45,55,25,12,1,this.metalMat),this.bodyEngineNozzle.position.y=-44,this.bodyEngineNozzleEnd=Jt(60,60,5,12,1,this.metalMat),this.bodyEngineNozzleEnd.position.y=-59,this.engine.add(this.bodyEngineTop),this.engine.add(this.bodyEngineRingTop),this.engine.add(this.bodyEngineMid),this.engine.add(this.bodyEngineRingBot),this.engine.add(this.bodyEngineNozzle),this.engine.add(this.bodyEngineNozzleEnd),this.legA=Jt(5,5,170,6,1,this.ringMat),this.legA.position.set(0,0,-75),this.legA.rotation.x=20*Math.PI/180,this.legB=Jt(5,5,170,6,1,this.ringMat),this.legB.position.set(75,0,0),this.legB.rotation.z=20*Math.PI/180,this.legY=Jt(5,5,170,6,1,this.ringMat),this.legY.position.set(0,0,75),this.legY.rotation.x=-20*Math.PI/180,this.legZ=Jt(5,5,170,6,1,this.ringMat),this.legZ.position.set(-75,0,0),this.legZ.rotation.z=-20*Math.PI/180,this.legs.add(this.legA),this.legs.add(this.legB),this.legs.add(this.legZ),this.legs.add(this.legY),this.legASock=Jt(6,6,50,6,1,this.metalMat),this.legASock.position.set(0,-37,-89),this.legASock.rotation.x=20*Math.PI/180,this.legBSock=Jt(6,6,50,6,1,this.metalMat),this.legBSock.position.set(89,-37,0),this.legBSock.rotation.z=20*Math.PI/180,this.legYSock=Jt(6,6,50,6,1,this.metalMat),this.legYSock.position.set(0,-37,89),this.legYSock.rotation.x=-20*Math.PI/180,this.legZSock=Jt(6,6,50,6,1,this.metalMat),this.legZSock.position.set(-89,-37,0),this.legZSock.rotation.z=-20*Math.PI/180,this.legs.add(this.legASock),this.legs.add(this.legBSock),this.legs.add(this.legYSock),this.legs.add(this.legZSock),this.legAFoot=new Pe(n,this.metalMat),this.legAFoot.position.set(0,-45,0),this.legAFoot.rotation.x=-20*Math.PI/180,this.legBFoot=new Pe(n,this.metalMat),this.legBFoot.position.set(0,-45,0),this.legBFoot.rotation.z=-20*Math.PI/180,this.legYFoot=new Pe(n,this.metalMat),this.legYFoot.position.set(0,-45,0),this.legYFoot.rotation.x=20*Math.PI/180,this.legZFoot=new Pe(n,this.metalMat),this.legZFoot.position.set(0,-45,0),this.legZFoot.rotation.z=20*Math.PI/180,this.legASock.add(this.legAFoot),this.legBSock.add(this.legBFoot),this.legYSock.add(this.legYFoot),this.legZSock.add(this.legZFoot),this.windowXTop=Jt(14,14,2,10,1,this.ringMat),this.windowXTop.position.set(0,-45,57),this.windowXTop.rotation.x=75*Math.PI/180,this.windowXInnerTop=Jt(9,9,2,10,1,this.metalMat),this.windowXInnerTop.position.set(0,2,0),this.windowXBot=Jt(12,12,2,10,1,this.ringMat),this.windowXBot.position.set(0,0,46),this.windowXBot.rotation.x=75*Math.PI/180,this.windowXInnerBot=Jt(7,7,2,10,1,this.metalMat),this.windowXInnerBot.position.set(0,2,0),this.windowXTop.add(this.windowXInnerTop),this.windowXBot.add(this.windowXInnerBot),this.bodyMid.add(this.windowXTop),this.bodyMid.add(this.windowXBot),this.top.position.y=170,this.mid.position.y=0,this.bot.position.y=-33,this.engine.position.y=-38,this.legs.position.y=-40,this.rocket.add(this.top),this.rocket.add(this.mid),this.rocket.add(this.bot),this.rocket.add(this.engine),this.rocket.add(this.legs)}ng.prototype.flyPath=function(){ya=spline.getPoint(Xs),Sc=spline.getTangent(Xs).normalize(),fu.crossVectors(lp,Sc).normalize(),ap=Math.acos(lp.dot(Sc));var n=this.rocket.quaternion.setFromAxisAngle(fu,ap);this.rocketTween.kill(),this.tweenPosition=ja.to(tR.rocket.position,.1,{x:ya.x,y:ya.y,z:ya.z}),this.tweenQuaternion=ja.to(this.rocket.quaternion,.1,{x:n._x,y:n._y,z:n._z}),Xs=Xs>=1?0:Xs+=9e-4};function Jt(n,t,e,i,r,s){var o=new $u(n,t,e,i,r),a=new Pe(o,s);return a}const eR=bi({__name:"Background1",setup(n){const t=Do();let e,i,r,s,o;Ru(async()=>{var Z;window.addEventListener("resize",u,!1);const l=new W1;e=new hn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new jm,i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),e.position.z=30,new Iw().load("/src/assets/fonts/helvetiker_regular.typeface.json",function(F){let H=new zw,nt=new Qr({color:16777215,transparent:!0,opacity:1});s=H.getTextMesh("Hello I'm Matthias",4,.1,nt,F),s.position.set(-21,0,0),s.rotation.set(-Math.PI/15,0,0),o=H.getTextMesh("JS-Engineer",2,.1,nt,F),o.position.set(-7,-4,0),o.rotation.set(-Math.PI/15,0,0),l.add(s),l.add(o)}),window.addEventListener("resize",u,!1);function u(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("scroll",G);const h=new Ku(10,0),f=new Fd(h),d=new Yc({color:14550020}),g=new Nd(f,d);l.add(g);const m=new Cw().load("/src/assets/icons/profile_picture.jpeg"),p=new Qr({map:m,transparent:!0,opacity:0}),y=new yi(10,10,.5),v=new Pe(y,p);v.position.x=25,v.position.z=50,v.position.y=-2,v.rotateY(-.5),l.add(v);const M=new Qr({color:16777215,side:je,transparent:!0,opacity:0}),E=new yi(10.2,10.2,.6),T=new Pe(E,M);T.position.x=25,T.position.z=50,T.position.y=-2,T.rotateY(-.5),l.add(T);const A=[];function D(F,H){const nt=Wn.randFloat(1,5),st=Wn.randFloat(1,5),k=Wn.randFloat(1,5),j=Wn.randFloat(1,5),pt=new yi(nt,st,k,j),ft=new Fd(pt),_t=new Yc({color:16777215}),St=new Nd(ft,_t);let V,rt,ut,mt;do V=Wn.randFloatSpread(H),rt=Wn.randFloatSpread(H),ut=Wn.randFloatSpread(H),mt=Math.sqrt(V*V+rt*rt+ut*ut);while(mt<F||mt>H);V*=H/mt,rt*=H/mt,ut*=H/mt,St.position.set(V,rt,ut),l.add(St),A.push(St)}for(let F=0;F<275;F++)F<=25?D(0,25):F<=50?D(0,50):D(0,75);function S(){const F=Wn.randFloat(.1,1),H=new pl(F,32,32),nt=new Qr({color:16777215}),st=new Pe(H,nt),k=Wn.randFloat(80,200),j=Wn.randFloat(0,2*Math.PI),pt=Math.acos(2*Math.random()-1),ft=k*Math.sin(pt)*Math.cos(j),_t=k*Math.sin(pt)*Math.sin(j),St=k*Math.cos(pt);st.position.set(ft,_t,St),l.add(st);const V=new Wd(16777215,1,50);V.intensity=5,V.position.set(ft,_t,St),l.add(V)}Array(100).fill(0).forEach(S);const w=new Wd(16777215,1,100);w.position.set(0,200,200),w.intensity=5,w.decay=0,l.add(w);let z=new ng().rocket;z.scale.set(.1,.1,.1),z.position.z=130,z.position.x=30,l.add(z);let J=new Kt;J.setHSL(1,1,.5);let B=.05;function G(){if(window){r=window.scrollY,e.position.z=30+r*.05,e.lookAt(l.position);let F=r%360/360;J.setHSL(F,1,.5);let H=400,nt=1e3;if(s&&o){if(r>=nt)s.material.opacity=0,o.material.opacity=0;else if(r>H){let ft=1-(r-H)/(nt-H);s.material.opacity=ft,o.material.opacity=ft}}let st=600,k=1e3,j=1200,pt=1500;if(r<st)v.material.opacity=0;else if(r<k){let ft=(r-st)/(k-st);v.material.opacity=ft,T.material.opacity=ft}else if(r<j)v.material.opacity=1,T.material.opacity=1;else if(r<pt){let ft=1-(r-j)/(pt-j);v.material.opacity=ft,T.material.opacity=ft}else v.material.opacity=0,T.material.opacity=0}}function W(){requestAnimationFrame(W),g.rotation.x+=.01,g.rotation.y+=.01,g.material.color.lerp(J,B),A.forEach(F=>{F.rotation.x+=.002,F.rotation.y+=.002,F.rotation.z+=.002}),z.rotation.y+=.02,i.render(l,e)}i.setSize(window.innerWidth,window.innerHeight),(Z=t.value)==null||Z.appendChild(i.domElement),W()});function a(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}return Cu(()=>{window.removeEventListener("resize",a,!1)}),(l,c)=>($e(),dn("div",{id:"mount",ref_key:"mount",ref:t},null,512))}});const nR=Cr(eR,[["__scopeId","data-v-bc5e2853"]]),ig=n=>(il("data-v-52953a6f"),n=n(),rl(),n),iR={class:"navbar bg-base-0 top sticky top-0 z-50 text-white"},rR=ig(()=>Bt("img",{class:"h-10",src:Fx},null,-1)),sR=[rR],oR=tm('<div class="flex space-x-4 ml-auto mr-4" data-v-52953a6f><a href="https://www.linkedin.com/in/matthias-hefel-1438b81b5/" target="_blank" class="text-white hover:text-blue-500" data-v-52953a6f><i class="fab fa-linkedin fa-lg" data-v-52953a6f></i></a><a href="https://github.com/NeYoNmoos" target="_blank" class="text-white hover:text-gray-500" data-v-52953a6f><i class="fab fa-github fa-lg" data-v-52953a6f></i></a><a href="https://gitlab.com/Matthias.H" target="_blank" class="text-white hover:text-orange-500" data-v-52953a6f><i class="fab fa-gitlab fa-lg" data-v-52953a6f></i></a></div>',1),aR={id:"home",class:"section"},lR={id:"about",class:"section"},cR={id:"service",class:"section"},uR={id:"portfolio",class:"section"},hR={id:"kontakt",class:"section"},fR=ig(()=>Bt("div",{class:"material-icons"},"arrow_upward",-1)),dR=[fR],pR=bi({__name:"TopBar",setup(n){const t=i=>{const r=document.getElementById(i);r&&r.scrollIntoView({behavior:"smooth"})};Ru(()=>{const i=["home","about","service","portfolio","kontakt"],r=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(e.value=o.target.id)})},{threshold:.5});i.forEach(s=>{const o=document.getElementById(s);o&&r.observe(o)})});let e=Do("home");return(i,r)=>($e(),dn(un,null,[Bt("div",iR,[Bt("a",{class:"btn btn-ghost",onClick:r[0]||(r[0]=s=>t("home"))},sR),Bt("a",{class:Xn(["btn btn-ghost normal-case text-xl rounded-none",{"underline-red":Se(e)==="home"}]),onClick:r[1]||(r[1]=s=>t("home"))},"Home",2),Bt("a",{class:Xn(["btn btn-ghost normal-case text-xl rounded-none",{"underline-pink":Se(e)==="about"}]),onClick:r[2]||(r[2]=s=>t("about"))},"About",2),Bt("a",{class:Xn(["btn btn-ghost normal-case text-xl rounded-none",{"underline-blue":Se(e)==="service"}]),onClick:r[3]||(r[3]=s=>t("service"))},"Service",2),Bt("a",{class:Xn(["btn btn-ghost normal-case text-xl rounded-none",{"underline-green":Se(e)==="portfolio"}]),onClick:r[4]||(r[4]=s=>t("portfolio"))},"Portfolio",2),Bt("a",{class:Xn(["btn btn-ghost normal-case text-xl rounded-none",{"underline-red":Se(e)==="kontakt"}]),onClick:r[5]||(r[5]=s=>t("kontakt"))},"Kontakt",2),oR]),Bt("div",aR,[ge(Hx)]),Bt("div",lR,[ge(xy)]),Bt("div",cR,[ge(Jx)]),Bt("div",uR,[ge(uy)]),Bt("div",hR,[ge(Ty)]),Se(e)!="home"?($e(),dn("button",{key:0,class:Xn(["fixed bottom-10 right-5 z-50 flex items-center justify-center h-12 w-12 p-3 rounded-full bg-white text-red-500 hover:bg-red-500 hover:text-white",{"bg-white text-red-500 hover:bg-red-500 hover:text-white":Se(e)==="home","bg-white text-pink-500 hover:bg-pink-500 hover:text-white":Se(e)==="about","bg-white text-blue-500 hover:bg-blue-500 hover:text-white":Se(e)==="service","bg-white text-green-500 hover:bg-green-500 hover:text-white":Se(e)==="portfolio","bg-white text-red-500 hover:bg-red-500 hover:text-white":Se(e)==="kontakt"}]),title:"Go to top",ref:"myBtn",onClick:r[6]||(r[6]=s=>t("home"))},dR,2)):Z0("",!0),Bt("div",null,[ge(nR)])],64))}});const mR=Cr(pR,[["__scopeId","data-v-52953a6f"]]),_R=bi({__name:"HomeView",setup(n){return(t,e)=>($e(),dn("main",null,[ge(mR)]))}});const gR=Lx({history:$v("/"),routes:[{path:"/",name:"home",component:_R},{path:"/about",name:"about",component:()=>Ox(()=>import("./AboutView-090615dc.js"),["assets/AboutView-090615dc.js","assets/AboutView-4d995ba2.css"])}]}),rg=Cv(Ux);rg.use(gR);rg.mount("#app");export{Cr as _,Bt as a,dn as c,$e as o};
