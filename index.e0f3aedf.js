var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,v,g,m,y,b,_,w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function k(e){return e&&e.__esModule?e.default:e}var E={},S={},T=w.parcelRequire3a11;null==T&&((T=function(e){if(e in E)return E[e].exports;if(e in S){var t=S[e];delete S[e];var r={id:e,exports:{}};return E[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){S[e]=t},w.parcelRequire3a11=T);var O={},L={},M=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
L=M("object"==typeof globalThis&&globalThis)||M("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
M("object"==typeof self&&self)||M("object"==typeof w&&w)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||L||Function("return this")();var $={},N={};// Detect IE8's incomplete defineProperty implementation
$=!(N=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},x={};x=!N(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var F=Function.prototype.call;j=x?F.bind(F):function(){return F.apply(F,arguments)};var C={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;a=P&&!C.call({1:2},1)?function(e){var t=P(this,e);return!!t&&t.enumerable}:C;var A={};A=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var H={},I={},U={},q=Function.prototype,R=q.call,D=x&&q.bind.bind(R,R),z={},B=(U=x?D:function(e){return function(){return R.apply(e,arguments)}})({}.toString),G=U("".slice);z=function(e){return G(B(e),8,-1)};var V=Object,W=U("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
I=N(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!V("z").propertyIsEnumerable(0)})?function(e){return"String"===z(e)?W(e,""):V(e)}:V;var Y={},J={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
J=function(e){return null==e};var K=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
Y=function(e){if(J(e))throw K("Can't call method on "+e);return e},H=function(e){return I(Y(e))};var X={},Q={},Z={},ee={},et={},er="object"==typeof document&&document.all,en=(et={all:er,IS_HTMLDDA:void 0===er&&void 0!==er}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
ee=et.IS_HTMLDDA?function(e){return"function"==typeof e||e===en}:function(e){return"function"==typeof e};var ei=et.all;Z=et.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:ee(e)||e===ei}:function(e){return"object"==typeof e?null!==e:ee(e)};var eo={},ea={};ea=function(e,t){var r;return arguments.length<2?(r=L[e],ee(r)?r:void 0):L[e]&&L[e][t]};var es={};es=U({}.isPrototypeOf);var ec={},eu={},el={},ed={};ed="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ef=L.process,ep=L.Deno,eh=ef&&ef.versions||ep&&ep.version,ev=eh&&eh.v8;ev&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(c=(s=ev.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!c&&ed&&(!(s=ed.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=ed.match(/Chrome\/(\d+)/))&&(c=+s[1]),el=c;var eg=L.String;ec=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(eu=!!Object.getOwnPropertySymbols&&!N(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eg(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&el&&el<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var em=Object;eo=ec?function(e){return"symbol"==typeof e}:function(e){var t=ea("Symbol");return ee(t)&&es(t.prototype,em(e))};var ey={},eb={},e_={},ew=String;e_=function(e){try{return ew(e)}catch(e){return"Object"}};var ek=TypeError;// `Assert: IsCallable(argument) is true`
eb=function(e){if(ee(e))return e;throw ek(e_(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ey=function(e,t){var r=e[t];return J(r)?void 0:eb(r)};var eE={},eS=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eE=function(e,t){var r,n;if("string"===t&&ee(r=e.toString)&&!Z(n=j(r,e))||ee(r=e.valueOf)&&!Z(n=j(r,e))||"string"!==t&&ee(r=e.toString)&&!Z(n=j(r,e)))return n;throw eS("Can't convert object to primitive value")};var eT={},eO={};eO=!1;var eL={},eM={},e$=Object.defineProperty;eM=function(e,t){try{e$(L,e,{value:t,configurable:!0,writable:!0})}catch(r){L[e]=t}return t};var eN="__core-js_shared__";eL=L[eN]||eM(eN,{}),(eT=function(e,t){return eL[e]||(eL[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.2",mode:eO?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var ej={},ex={},eF=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
ex=function(e){return eF(Y(e))};var eC=U({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
ej=Object.hasOwn||function(e,t){return eC(ex(e),t)};var eP={},eA=0,eH=Math.random(),eI=U(1..toString);eP=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eI(++eA+eH,36)};var eU=L.Symbol,eq=eT("wks"),eR=ec?eU.for||eU:eU&&eU.withoutSetter||eP,eD=TypeError,ez=(ej(eq,e="toPrimitive")||(eq[e]=eu&&ej(eU,e)?eU[e]:eR("Symbol."+e)),eq[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
Q=function(e,t){if(!Z(e)||eo(e))return e;var r,n=ey(e,ez);if(n){if(void 0===t&&(t="default"),r=j(n,e,t),!Z(r)||eo(r))return r;throw eD("Can't convert object to primitive value")}return void 0===t&&(t="number"),eE(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
X=function(e){var t=Q(e,"string");return eo(t)?t:t+""};var eB={},eG={},eV=L.document,eW=Z(eV)&&Z(eV.createElement);eG=function(e){return eW?eV.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eB=!$&&!N(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eG("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eY=Object.getOwnPropertyDescriptor;o=$?eY:function(e,t){if(e=H(e),t=X(t),eB)try{return eY(e,t)}catch(e){}if(ej(e,t))return A(!j(a,e,t),e[t])};var eJ={},eK={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eK=$&&N(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eX={},eQ=String,eZ=TypeError;// `Assert: Type(argument) is Object`
eX=function(e){if(Z(e))return e;throw eZ(eQ(e)+" is not an object")};var e0=TypeError,e1=Object.defineProperty,e2=Object.getOwnPropertyDescriptor,e3="enumerable",e9="configurable",e4="writable";u=$?eK?function(e,t,r){if(eX(e),t=X(t),eX(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e4 in r&&!r[e4]){var n=e2(e,t);n&&n[e4]&&(e[t]=r.value,r={configurable:e9 in r?r[e9]:n[e9],enumerable:e3 in r?r[e3]:n[e3],writable:!1})}return e1(e,t,r)}:e1:function(e,t,r){if(eX(e),t=X(t),eX(r),eB)try{return e1(e,t,r)}catch(e){}if("get"in r||"set"in r)throw e0("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eJ=$?function(e,t,r){return u(e,t,A(1,r))}:function(e,t,r){return e[t]=r,e};var e7={},e8={},e5=Function.prototype,e6=$&&Object.getOwnPropertyDescriptor,te=ej(e5,"name")&&(!$||$&&e6(e5,"name").configurable),tt={},tr=U(Function.toString);ee(eL.inspectSource)||(eL.inspectSource=function(e){return tr(e)}),tt=eL.inspectSource;var tn={},ti={},to=L.WeakMap;ti=ee(to)&&/native code/.test(String(to));var ta={},ts=eT("keys");ta=function(e){return ts[e]||(ts[e]=eP(e))};var tc={};tc={};var tu="Object already initialized",tl=L.TypeError,tf=L.WeakMap;if(ti||eL.state){var tp=eL.state||(eL.state=new tf);/* eslint-disable no-self-assign -- prototype methods protection */tp.get=tp.get,tp.has=tp.has,tp.set=tp.set,/* eslint-enable no-self-assign -- prototype methods protection */l=function(e,t){if(tp.has(e))throw tl(tu);return t.facade=e,tp.set(e,t),t},d=function(e){return tp.get(e)||{}},f=function(e){return tp.has(e)}}else{var th=ta("state");tc[th]=!0,l=function(e,t){if(ej(e,th))throw tl(tu);return t.facade=e,eJ(e,th,t),t},d=function(e){return ej(e,th)?e[th]:{}},f=function(e){return ej(e,th)}}var tv=(tn={set:l,get:d,has:f,enforce:function(e){return f(e)?d(e):l(e,{})},getterFor:function(e){return function(t){var r;if(!Z(t)||(r=d(t)).type!==e)throw tl("Incompatible receiver, "+e+" required");return r}}}).enforce,tg=tn.get,tm=String,ty=Object.defineProperty,tb=U("".slice),t_=U("".replace),tw=U([].join),tk=$&&!N(function(){return 8!==ty(function(){},"length",{value:8}).length}),tE=String(String).split("String"),tS=e8=function(e,t,r){"Symbol("===tb(tm(t),0,7)&&(t="["+t_(tm(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ej(e,"name")||te&&e.name!==t)&&($?ty(e,"name",{value:t,configurable:!0}):e.name=t),tk&&r&&ej(r,"arity")&&e.length!==r.arity&&ty(e,"length",{value:r.arity});try{r&&ej(r,"constructor")&&r.constructor?$&&ty(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tv(e);return ej(n,"source")||(n.source=tw(tE,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tS(function(){return ee(this)&&tg(this).source||tt(this)},"toString"),e7=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(ee(r)&&e8(r,o,n),n.global)i?e[t]=r:eM(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:u(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tT={},tO={},tL={},tM={},t$={},tN={},tj=Math.ceil,tx=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tN=Math.trunc||function(e){var t=+e;return(t>0?tx:tj)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
t$=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tN(t)};var tF=Math.max,tC=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tM=function(e,t){var r=t$(e);return r<0?tF(r+t,0):tC(r,t)};var tP={},tA={},tH=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tA=function(e){return e>0?tH(t$(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tP=function(e){return tA(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tI=function(e){return function(t,r,n){var i,o=H(t),a=tP(o),s=tM(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tU={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tI(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tI(!1)}.indexOf,tq=U([].push);tL=function(e,t){var r,n=H(e),i=0,o=[];for(r in n)!ej(tc,r)&&ej(n,r)&&tq(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)ej(n,r=t[i++])&&(~tU(o,r)||tq(o,r));return o};var tR=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tL(e,tR)},h=Object.getOwnPropertySymbols;var tD=U([].concat);// all object keys, includes non-enumerable and symbols
tO=ea("Reflect","ownKeys")||function(e){var t=p(eX(e));return h?tD(t,h(e)):t},tT=function(e,t,r){for(var n=tO(t),i=0;i<n.length;i++){var a=n[i];ej(e,a)||r&&ej(r,a)||u(e,a,o(t,a))}};var tz={},tB=/#|\.prototype\./,tG=function(e,t){var r=tW[tV(e)];return r===tJ||r!==tY&&(ee(t)?N(t):!!t)},tV=tG.normalize=function(e){return String(e).replace(tB,".").toLowerCase()},tW=tG.data={},tY=tG.NATIVE="N",tJ=tG.POLYFILL="P";tz=tG,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/O=function(e,t){var r,n,i,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?L:l?L[c]||eM(c,{}):(L[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],i=e.dontCallGetSet?(s=o(r,n))&&s.value:r[n],!tz(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;tT(a,i)}(e.sham||i&&i.sham)&&eJ(a,"sham",!0),e7(r,n,a,e)}};var tK={},tX={},tQ=Function.prototype,tZ=tQ.apply,t0=tQ.call;// eslint-disable-next-line es/no-reflect -- safe
tX="object"==typeof Reflect&&Reflect.apply||(x?t0.bind(tZ):function(){return t0.apply(tZ,arguments)});var t1={},t2={},t3=(t2=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===z(e))return U(e)})(t2.bind);// optional / simple context binding
t1=function(e,t){return eb(e),void 0===t?e:x?t3(e,t):function(){return e.apply(t,arguments)}};var t9={};t9=ea("document","documentElement");var t4={};t4=U([].slice);var t7={},t8=TypeError;t7=function(e,t){if(e<t)throw t8("Not enough arguments");return e};var t5={};// eslint-disable-next-line redos/no-vulnerable -- safe
t5=/(?:ipad|iphone|ipod).*applewebkit/i.test(ed);var t6={};t6="process"===z(L.process);var re=L.setImmediate,rt=L.clearImmediate,rr=L.process,rn=L.Dispatch,ri=L.Function,ro=L.MessageChannel,ra=L.String,rs=0,rc={},ru="onreadystatechange";N(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
v=L.location});var rl=function(e){if(ej(rc,e)){var t=rc[e];delete rc[e],t()}},rd=function(e){return function(){rl(e)}},rf=function(e){rl(e.data)},rp=function(e){// old engines have not location.origin
L.postMessage(ra(e),v.protocol+"//"+v.host)};re&&rt||(re=function(e){t7(arguments.length,1);var t=ee(e)?e:ri(e),r=t4(arguments,1);return rc[++rs]=function(){tX(t,void 0,r)},g(rs),rs},rt=function(e){delete rc[e]},t6?g=function(e){rr.nextTick(rd(e))}:rn&&rn.now?g=function(e){rn.now(rd(e))}:ro&&!t5?(y=(m=new ro).port2,m.port1.onmessage=rf,g=t1(y.postMessage,y)):L.addEventListener&&ee(L.postMessage)&&!L.importScripts&&v&&"file:"!==v.protocol&&!N(rp)?(g=rp,L.addEventListener("message",rf,!1)):g=ru in eG("script")?function(e){t9.appendChild(eG("script"))[ru]=function(){t9.removeChild(this),rl(e)}}:function(e){setTimeout(rd(e),0)});var rh=(tK={set:re,clear:rt}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
O({global:!0,bind:!0,enumerable:!0,forced:L.clearImmediate!==rh},{clearImmediate:rh});var rv=tK.set,rg={},rm={};/* global Bun -- Deno case */rm="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ry=L.Function,rb=/MSIE .\./.test(ed)||rm&&((t=L.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rg=function(e,t){var r=t?2:1;return rb?function(n,i/* , ...arguments */){var o=t7(arguments.length,1)>r,a=ee(n)?n:ry(n),s=o?t4(arguments,r):[],c=o?function(){tX(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var r_=L.setImmediate?rg(rv,!1):rv;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
O({global:!0,bind:!0,enumerable:!0,forced:L.setImmediate!==r_},{setImmediate:r_});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rw=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new L(o||[]),s=f,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(M([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function M(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=M,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=rw}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rw:Function("r","regeneratorRuntime = r")(rw)}// All the constant will be here.
const rk="https://forkify-api.herokuapp.com/api/v2/recipes/",rE="28eaabe4-b5ab-4dc0-91af-c0648a69e1e2",rS=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rT=async function(e){try{let t=await Promise.race([fetch(e),rS(10)]),r=await t.json();if(!t.ok)throw Error(`${r.message} and (${t.status})`);return r;// console.log(data.data);
}catch(e){throw e}},rO=async function(e,t){try{let r=await Promise.race([fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),rS(10)]),n=await r.json();if(!r.ok)throw Error(`${n.message} and (${r.status})`);return n;// console.log(data.data);
}catch(e){throw e}};var rL={};rL=new URL(T("27Lyk").resolve("eyyUD"),import.meta.url).toString();var rM={},r$="undefined"==typeof document?void 0:document,rN=!!r$&&"content"in r$.createElement("template"),rj=!!r$&&r$.createRange&&"createContextualFragment"in r$.createRange();/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */function rx(e,t){var r,n,i=e.nodeName,o=t.nodeName;return i===o||((r=i.charCodeAt(0),n=o.charCodeAt(0),r<=90&&n>=97)?i===o.toUpperCase():n<=90&&r>=97&&o===i.toUpperCase())}function rF(e,t,r){e[r]!==t[r]&&(e[r]=t[r],e[r]?e.setAttribute(r,""):e.removeAttribute(r))}var rC={OPTION:function(e,t){var r=e.parentNode;if(r){var n=r.nodeName.toUpperCase();"OPTGROUP"===n&&(n=(r=r.parentNode)&&r.nodeName.toUpperCase()),"SELECT"!==n||r.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(// Workaround for MS Edge bug where the 'selected' attribute can only be
// removed if set to a non-empty value:
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
e.setAttribute("selected","selected"),e.removeAttribute("selected")),// We have to reset select element's selectedIndex to -1, otherwise setting
// fromEl.selected using the syncBooleanAttrProp below has no effect.
// The correct selectedIndex will be set in the SELECT special handler below.
r.selectedIndex=-1)}rF(e,t,"selected")},/**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */INPUT:function(e,t){rF(e,t,"checked"),rF(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var r=t.value;e.value!==r&&(e.value=r);var n=e.firstChild;if(n){// Needed for IE. Apparently IE sets the placeholder as the
// node value and vise versa. This ignores an empty update.
var i=n.nodeValue;if(i==r||!r&&i==e.placeholder)return;n.nodeValue=r}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var r,n,i=-1,o=0,a=e.firstChild;a;)if("OPTGROUP"===(n=a.nodeName&&a.nodeName.toUpperCase()))a=(r=a).firstChild;else{if("OPTION"===n){if(a.hasAttribute("selected")){i=o;break}o++}(a=a.nextSibling)||!r||(a=r.nextSibling,r=null)}e.selectedIndex=i}}};function rP(){}function rA(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}r=function(e,t){var r,n,i,o,a=t.attributes;// document-fragments dont have attributes so lets not do anything
if(11!==t.nodeType&&11!==e.nodeType){// update attributes on original DOM element
for(var s=a.length-1;s>=0;s--)n=(r=a[s]).name,i=r.namespaceURI,o=r.value,i?(n=r.localName||n,e.getAttributeNS(i,n)!==o&&("xmlns"===r.prefix&&(n=r.name),e.setAttributeNS(i,n,o))):e.getAttribute(n)!==o&&e.setAttribute(n,o);for(var c=e.attributes,u=c.length-1;u>=0;u--)n=(r=c[u]).name,(i=r.namespaceURI)?(n=r.localName||n,t.hasAttributeNS(i,n)||e.removeAttributeNS(i,n)):t.hasAttribute(n)||e.removeAttribute(n)}},rM=function(e,t,n){if(n||(n={}),"string"==typeof t){if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var i,o,a,s,c,u,l,d,f=t;(t=r$.createElement("html")).innerHTML=f}else i=(i=t).trim(),t=rN?(o=i,(a=r$.createElement("template")).innerHTML=o,a.content.childNodes[0]):rj?(s=i,b||(b=r$.createRange()).selectNode(r$.body),b.createContextualFragment(s).childNodes[0]):(c=i,(u=r$.createElement("body")).innerHTML=c,u.childNodes[0])}else 11===t.nodeType&&(t=t.firstElementChild);var p=n.getNodeKey||rA,h=n.onBeforeNodeAdded||rP,v=n.onNodeAdded||rP,g=n.onBeforeElUpdated||rP,m=n.onElUpdated||rP,y=n.onBeforeNodeDiscarded||rP,_=n.onNodeDiscarded||rP,w=n.onBeforeElChildrenUpdated||rP,k=n.skipFromChildren||rP,E=n.addChild||function(e,t){return e.appendChild(t)},S=!0===n.childrenOnly,T=Object.create(null),O=[];function L(e){O.push(e)}/**
    * Removes a DOM node out of the original DOM
    *
    * @param  {Node} node The node to remove
    * @param  {Node} parentNode The nodes parent
    * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
    * @return {undefined}
    */function M(e,t,r){!1!==y(e)&&(t&&t.removeChild(e),_(e),function e(t,r){if(1===t.nodeType)for(var n=t.firstChild;n;){var i=void 0;r&&(i=p(n))?// to a list so that it can be handled at the very end.
L(i):(// Only report the node as discarded if it is not keyed. We do this because
// at the end we loop through all keyed elements that were unmatched
// and then discard them in one final pass.
_(n),n.firstChild&&e(n,r)),n=n.nextSibling}}(e,r))}!// // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
// function indexTree(root) {
//     var treeWalker = document.createTreeWalker(
//         root,
//         NodeFilter.SHOW_ELEMENT);
//
//     var el;
//     while((el = treeWalker.nextNode())) {
//         var key = getNodeKey(el);
//         if (key) {
//             fromNodesLookup[key] = el;
//         }
//     }
// }
// // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
//
// function indexTree(node) {
//     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
//     var el;
//     while((el = nodeIterator.nextNode())) {
//         var key = getNodeKey(el);
//         if (key) {
//             fromNodesLookup[key] = el;
//         }
//     }
// }
function e(t){if(1===t.nodeType||11===t.nodeType)for(var r=t.firstChild;r;){var n=p(r);n&&(T[n]=r),// Walk recursively
e(r),r=r.nextSibling}}(e);var $=e,N=$.nodeType,j=t.nodeType;if(!S){// Handle the case where we are given two DOM nodes that are not
// compatible (e.g. <div> --> <span> or <div> --> TEXT)
if(1===N)1===j?rx(e,t)||(_(e),$=/**
 * Copies the children of one DOM element to another DOM element
 */function(e,t){for(var r=e.firstChild;r;){var n=r.nextSibling;t.appendChild(r),r=n}return t}(e,(l=t.nodeName,(d=t.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==d?r$.createElementNS(d,l):r$.createElement(l)))):$=t;else if(3===N||8===N){if(j===N)return $.nodeValue!==t.nodeValue&&($.nodeValue=t.nodeValue),$;$=t}}if($===t)// toss out the "from node" and use the "to node"
_(e);else{if(t.isSameNode&&t.isSameNode($))return;// We now need to loop over any keyed nodes that might need to be
// removed. We only do the removal if we know that the keyed node
// never found a match. When a keyed node is matched up we remove
// it out of fromNodesLookup and we use fromNodesLookup to determine
// if a keyed node has been matched up or not
if(function e(t,n,i){var o=p(n);o&&// DOM so clear it out of the saved elements collection
delete T[o],(i||!1!==g(t,n)&&(// update attributes on original DOM element first
r(t,n),// optional
m(t),!1!==w(t,n)))&&("TEXTAREA"!==t.nodeName?function(t,r){var n,i,o,a,s,c=k(t),u=r.firstChild,l=t.firstChild;// walk the children
e:for(;u;){// walk the fromNode children all the way through
for(a=u.nextSibling,n=p(u);!c&&l;){if(o=l.nextSibling,u.isSameNode&&u.isSameNode(l)){u=a,l=o;continue e}i=p(l);var d=l.nodeType,f=void 0;if(d===u.nodeType&&(1===d?(n?n!==i&&((s=T[n])?o===s?// DOM node out of the tree (since that can break CSS transitions, etc.),
// we will instead discard the current node and wait until the next
// iteration to properly match up the keyed target element with its matching
// element in the original tree
f=!1:(// We found a matching keyed element somewhere in the original DOM tree.
// Let's move the original DOM node into the current position and morph
// it.
// NOTE: We use insertBefore instead of replaceChild because we want to go through
// the `removeNode()` function for the node that is being discarded so that
// all lifecycle hooks are correctly invoked
t.insertBefore(s,l),i?// the actual removal to later
L(i)://       still a chance they will be matched up later
M(l,t,!0),l=s):// is no matching keyed node in the source tree
f=!1):i&&(f=!1),(f=!1!==f&&rx(l,u))&&// the current "from" node to match the current
// target DOM node.
// MORPH
e(l,u)):(3===d||8==d)&&(// Both nodes being compared are Text or Comment nodes
f=!0,l.nodeValue!==u.nodeValue&&(l.nodeValue=u.nodeValue))),f){// Advance both the "to" child and the "from" child since we found a match
// Nothing else to do as we already recursively called morphChildren above
u=a,l=o;continue e}i?// the actual removal to later
L(i)://       still a chance they will be matched up later
M(l,t,!0),l=o}// END: while(curFromNodeChild) {}
// If we got this far then we did not find a candidate match for
// our "to node" and we exhausted all of the children "from"
// nodes. Therefore, we will just append the current "to" node
// to the end
if(n&&(s=T[n])&&rx(s,u))c||E(t,s),e(s,u);else{var g=h(u);!1!==g&&(g&&(u=g),u.actualize&&(u=u.actualize(t.ownerDocument||r$)),E(t,u),function t(r){v(r);for(var n=r.firstChild;n;){var i=n.nextSibling,o=p(n);if(o){var a=T[o];// if we find a duplicate #id node in cache, replace `el` with cache value
// and morph it to the child node.
a&&rx(n,a)?(n.parentNode.replaceChild(a,n),e(a,n)):t(n)}else // fromNodesLookup
t(n);n=i}}(u))}u=a,l=o}!function(e,t,r){// We have processed all of the "to nodes". If curFromNodeChild is
// non-null then we still have some from nodes left over that need
// to be removed
for(;t;){var n=t.nextSibling;(r=p(t))?// the actual removal to later
L(r)://       still a chance they will be matched up later
M(t,e,!0),t=n}}(t,l,i);var m=rC[t.nodeName];m&&m(t,r)}// END: morphChildren(...)
(t,n):rC.TEXTAREA(t,n))}($,t,S),O)for(var x=0,F=O.length;x<F;x++){var C=T[O[x]];C&&M(C,C.parentNode,!1)}}return!S&&$!==e&&e.parentNode&&($.actualize&&($=$.actualize(e.ownerDocument||r$)),// If we had to swap out the from node with a new node because the old
// node was not compatible with the target node then we need to
// replace the old DOM node in the original DOM tree. This is only
// possible if the original DOM node was part of a DOM tree which
// we know is the case if it has a parent node.
e.parentNode.replaceChild($,e)),$};class rH{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e,// recipeContainer.textContent = '';
this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",this._generateHTML())}update(e){this._data=e;let t=this._generateHTML(),r=document.createRange().createContextualFragment(t),n=[...r.querySelectorAll("*")],i=[...this._parentElement.querySelectorAll("*")];n.forEach((e,t)=>{let r=i[t];e.innerHTML!==r.innerHTML&&/*@__PURE__*/k(rM)(r,e)});// newElement.forEach((newEl, i) => {
//   const currEl = currElement[i];
//   // console.log(currEl, newEl.isEqualNode(currEl));
//   if (
//     !newEl.isEqualNode(currEl) &&
//     newEl.firstChild.nodeValue.trim() !== ''
//   ) {
//     currEl.textContent = newEl.textContent;
//   }
//   if (!newEl.isEqualNode(currEl)) {
//     [...newEl.attributes].forEach(attr => {
//       currEl.setAttribute(attr.name, attr.value);
//     });
//   }
// });
// console.log(newDOM, newElement);
}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`<div class="spinner">
    <svg>
      <use href="${/*@__PURE__*/k(rL)}#icon-loader"></use>
    </svg>
  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}// render the error
renderError(e=this._errorMessage){let t=`<div class="error">
    <div>
      <svg>
        <use href="${/*@__PURE__*/k(rL)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${e}</p>
  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}// Success message
renderMessage(e=this._Message){let t=`<div class="message">
    <div>
      <svg>
        <use href="${/*@__PURE__*/k(rL)}#icon-smile"></use>
      </svg>
    </div>
    <p>${e}</p>
  </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},i=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(n(this.denominator)){var e=i(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(n(this.numerator)){var e=i(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},_=Fraction;// console.log(Fraction);
class rI extends rH{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find the recpie.Please try another one!";_Message="";// Handling the event
addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}// Update servings
addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n<1||// console.log(goToPage);
e(n)})}// add to bookmark func
addBookMark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateHTML(){return`<figure class="recipe__fig">
    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/k(rL)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/k(rL)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
          <svg>
            <use href="${/*@__PURE__*/k(rL)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
          <svg>
            <use href="${/*@__PURE__*/k(rL)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
    <svg>
      <use href="${/*@__PURE__*/k(rL)}#icon-user"></use>
    </svg>
  </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${/*@__PURE__*/k(rL)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._generateMarkupIngridents).join("")}
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/k(rL)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}_generateMarkupIngridents(e){return`<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/k(rL)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new _(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>`}}var // we should not do this❌❌❌❌❌❌❌❌❌
// import { controlRecipe } from '../controller';
// export const call = function () {
//   return ['hashchange', 'load'].forEach(el =>
//     window.addEventListener(el, controlRecipe)
//   );
// };
// We are no exporting the whole class coz there we have to create new obj instead we are directly exporting the created new obj.
rU=new rI;const rq={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rR=function(e){// -----> Changed the format from the API
let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rD=async function(e){try{// 1) Loading the data here
let t=await rT(`${rk}${e}?key=${rE}`);rq.recipe=rR(t),rq.bookmarks.some(t=>t.id===e)?rq.recipe.bookmarked=!0:rq.recipe.bookmarked=!1}catch(e){// alert(error);
// console.error(error);
throw e;// recepieView.renderError(error);
}},rz=async function(e){try{rq.search.query=e;let t=await rT(`${rk}?search=${e}&key=${rE}`);rq.search.results=t.data.recipes.map(e=>({id:e.id,image:e.image_url,publisher:e.publisher,title:e.title,...e.key&&{key:e.key}})),rq.search.page=1;// return data;
}catch(e){throw e}},rB=function(e=rq.search.page){rq.search.page=e;let t=(e-1)*rq.search.resultsPerPage,r=e*rq.search.resultsPerPage;return rq.search.results.slice(t,r)},rG=function(e){rq.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rq.recipe.servings;//
}),rq.recipe.servings=e},rV=function(){localStorage.setItem("bookmarks",JSON.stringify(rq.bookmarks))},rW=function(e){//Adding the recepie to bookmarks array
rq.bookmarks.push(e),e.id===rq.recipe.id&&(rq.recipe.bookmarked=!0),rV()},rY=function(e){let t=rq.bookmarks.findIndex(t=>t.id===e);rq.bookmarks.splice(t,1),e===rq.recipe.id&&(rq.recipe.bookmarked=!1),rV()};!function(){let e=localStorage.getItem("bookmarks");e&&(rq.bookmarks=JSON.parse(e))}();const rJ=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Worng ingrieidents format");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}});console.log(Object.entries(e));let r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,KEY:rE,cooking_time:e.cookingTime,servings:e.servings,ingredients:t},n=await rO(`${rk}?key=${rE}`,r);rq.recipe=rR(n),// state.recipe.key = KEY;
rW(rq.recipe)}catch(e){throw e}};//my key== d7766536-60d1-41e2-8319-dadb079fd172
class rK{_parentEl=document.querySelector(".search");getQuery(){// console.log(this.#parentEl.querySelector('.search__field').value);
let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rX=new rK;class rQ extends rH{_parentElement=document.querySelector(".results");_errorMessage="No recpie found for it. Please try another one!";_Message="";_generateHTML(){// console.log(this._data);
return this._data.map(this._geneateMarkUp).join(" ")}_geneateMarkUp(e){let t=window.location.hash.slice(1);return`
        <li class="preview">
        <a class="preview__link ${t===e.id?"preview__link--active":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated ${e.key?"":"hidden"}">
              <svg>
                <use href="${/*@__PURE__*/k(rL)}#icon-user"></use>
              </svg>
            </div>
          </div>
            </a>
      </li>
    `}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}var rZ=new rQ;// import { RES_PER_PAGE } from './config';
// import { state } from '../model';
class r0 extends rH{_parentElement=document.querySelector(".pagination");_generateHTML(){console.log(this._data);let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// We are in page-1 and there are other pages
1===this._data.page&&e>1?`
      <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
      <span>Page ${this._data.page+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/k(rL)}#icon-arrow-right"></use>
      </svg>
    </button>
      `:this._data.page<e?`
      <button  data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
         <svg class="search__icon">
           <use href="${/*@__PURE__*/k(rL)}#icon-arrow-left"></use>
         </svg>
         <span>Page ${this._data.page-1}</span>
       </button>

      <button  data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
      <span>Page ${this._data.page+1}</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/k(rL)}#icon-arrow-right"></use>
      </svg>
    </button>
      `:this._data.page===e&&e>1?`<button  data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
         <svg class="search__icon">
           <use href="${/*@__PURE__*/k(rL)}#icon-arrow-left"></use>
         </svg>
         <span>Page ${this._data.page-1}</span>
       </button> `:"");// console.log(numPages);
// return numPages;
// return this._data.map(this._geneateMarkUp).join(' ');
}pageEventHandler(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n);// return gotoBtn;
})}}var r1=new r0;class r2 extends rH{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_Message="";_generateHTML(){return console.log(this._data),this._data.map(this._geneateMarkUp).join(" ")}addBookMarkHandler(e){window.addEventListener("load",e)}_geneateMarkUp(e){let t=window.location.hash.slice(1);return`
        <li class="preview">
        <a class="preview__link ${t===e.id?"preview__link--active":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated ${e.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/k(rL)}#icon-user"></use>
            </svg>
          </div>
          </div>
        </a>
      </li>
    `}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}var r3=new r2;class r9 extends rH{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_Message="Recipe added successfully!";constructor(){super(),this._addHandlerModelOpen(),this._addHandlerModelClose(),this.addHandlerUpload()}toogleClass(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerModelOpen(){this._btnOpen.addEventListener("click",this.toogleClass.bind(this))}_addHandlerModelClose(){this._btnClose.addEventListener("click",this.toogleClass.bind(this)),this._overlay.addEventListener("click",this.toogleClass.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();// FormData API and converted it to array then from array to Object
let r=[...new FormData(this)],n=Object.fromEntries(r);// console.log(data);
e(n)}),this.toogleClass()}}var r4=new r9;document.querySelector(".recipe");const r7=async function(){try{let e=window.location.hash.slice(1);// console.log(id);
if(!e)return;rU.renderSpinner(),rZ.update(rB()),// from the model
await rD(e),rU.render(rq.recipe),// ==========TEST============================================
r5(),r3.render(rq.bookmarks),r3.update(rq.bookmarks)}catch(e){rU.renderError(),console.log(e)}},r8=async function(){try{rZ.renderSpinner();let e=rX.getQuery();if(!e)return;// fetching the data here
await rz(e),rZ.render(rB()),r1.render(rq.search);// console.log(model.state.search.results);
}catch(e){console.log("search results error",e)}},r5=function(e=1){//  update the receoie in the state
rG(e),rU.update(rq.recipe)},r6=async function(e){try{r4.renderSpinner(),await rJ(e),rU.render(rq.recipe),r4.renderMessage(),r3.render(rq.bookmarks),// updating the hash in the URL
window.history.pushState(null,"",`${rq.recipe.id}`),setTimeout(()=>{r4.toogleClass()},2500)}catch(e){console.error(e),r4.renderError(e.message)}// UPload recipe
};r3.addBookMarkHandler(function(){r3.render(rq.bookmarks)}),rU.addHandlerRender(r7),rX.addHandlerSearch(r8),r1.pageEventHandler(function(e){rZ.render(rB(e)),r1.render(rq.search),console.log("CLicked ho clicked")}),rU.addHandlerUpdateServings(r5),rU.addBookMark(function(){rq.recipe.bookmarked?rY(rq.recipe.id):rW(rq.recipe),rU.update(rq.recipe),r3.render(rq.bookmarks);// console.log(model.state.bookmarks);
}),r4.addHandlerUpload(r6);// showRecepie();
// window.addEventListener('hashchange', showRecepie);
// window.addEventListener('load', showRecepie);
// ['hashchange', 'load'].forEach(el =>
//   window.addEventListener(el, controlRecipe)
// );
// we should not do this❌❌❌❌❌❌❌❌❌
// import { call } from './view/recepieView.js';
// call();
//# sourceMappingURL=index.e0f3aedf.js.map

//# sourceMappingURL=index.e0f3aedf.js.map
