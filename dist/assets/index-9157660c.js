(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function _E(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qg={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),EE=Symbol.for("react.portal"),IE=Symbol.for("react.fragment"),TE=Symbol.for("react.strict_mode"),SE=Symbol.for("react.profiler"),kE=Symbol.for("react.provider"),AE=Symbol.for("react.context"),CE=Symbol.for("react.forward_ref"),PE=Symbol.for("react.suspense"),RE=Symbol.for("react.memo"),bE=Symbol.for("react.lazy"),vm=Symbol.iterator;function NE(t){return t===null||typeof t!="object"?null:(t=vm&&t[vm]||t["@@iterator"],typeof t=="function"?t:null)}var Yg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xg=Object.assign,Jg={};function Li(t,e,n){this.props=t,this.context=e,this.refs=Jg,this.updater=n||Yg}Li.prototype.isReactComponent={};Li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zg(){}Zg.prototype=Li.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=Jg,this.updater=n||Yg}var Uh=Fh.prototype=new Zg;Uh.constructor=Fh;Xg(Uh,Li.prototype);Uh.isPureReactComponent=!0;var wm=Array.isArray,ey=Object.prototype.hasOwnProperty,jh={current:null},ty={key:!0,ref:!0,__self:!0,__source:!0};function ny(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)ey.call(e,r)&&!ty.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ps,type:t,key:o,ref:s,props:i,_owner:jh.current}}function xE(t,e){return{$$typeof:ps,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ps}function OE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _m=/\/+/g;function Fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OE(""+t.key):e.toString(36)}function _a(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ps:case EE:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Fu(s,0):r,wm(i)?(n="",t!=null&&(n=t.replace(_m,"$&/")+"/"),_a(i,e,n,"",function(h){return h})):i!=null&&(Bh(i)&&(i=xE(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_m,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",wm(t))for(var l=0;l<t.length;l++){o=t[l];var u=r+Fu(o,l);s+=_a(o,e,n,u,i)}else if(u=NE(t),typeof u=="function")for(t=u.call(t),l=0;!(o=t.next()).done;)o=o.value,u=r+Fu(o,l++),s+=_a(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ys(t,e,n){if(t==null)return t;var r=[],i=0;return _a(t,r,"","",function(o){return e.call(n,o,i++)}),r}function DE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rt={current:null},Ea={transition:null},ME={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:jh};function ry(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Ys,forEach:function(t,e,n){Ys(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ys(t,function(){e++}),e},toArray:function(t){return Ys(t,function(e){return e})||[]},only:function(t){if(!Bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Li;Y.Fragment=IE;Y.Profiler=SE;Y.PureComponent=Fh;Y.StrictMode=TE;Y.Suspense=PE;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ME;Y.act=ry;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xg({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=jh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ey.call(e,u)&&!ty.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:ps,type:t.type,key:i,ref:o,props:r,_owner:s}};Y.createContext=function(t){return t={$$typeof:AE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kE,_context:t},t.Consumer=t};Y.createElement=ny;Y.createFactory=function(t){var e=ny.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:CE,render:t}};Y.isValidElement=Bh;Y.lazy=function(t){return{$$typeof:bE,_payload:{_status:-1,_result:t},_init:DE}};Y.memo=function(t,e){return{$$typeof:RE,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};Y.unstable_act=ry;Y.useCallback=function(t,e){return rt.current.useCallback(t,e)};Y.useContext=function(t){return rt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return rt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return rt.current.useEffect(t,e)};Y.useId=function(){return rt.current.useId()};Y.useImperativeHandle=function(t,e,n){return rt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return rt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return rt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return rt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return rt.current.useReducer(t,e,n)};Y.useRef=function(t){return rt.current.useRef(t)};Y.useState=function(t){return rt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return rt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return rt.current.useTransition()};Y.version="18.3.1";Qg.exports=Y;var M=Qg.exports;const P=_E(M);var kc={},iy={exports:{}},vt={},oy={exports:{}},sy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var G=$.length;$.push(K);e:for(;0<G;){var de=G-1>>>1,re=$[de];if(0<i(re,K))$[de]=K,$[G]=re,G=de;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],G=$.pop();if(G!==K){$[0]=G;e:for(var de=0,re=$.length,Ee=re>>>1;de<Ee;){var nn=2*(de+1)-1,rn=$[nn],on=nn+1,$t=$[on];if(0>i(rn,G))on<re&&0>i($t,rn)?($[de]=$t,$[on]=G,de=on):($[de]=rn,$[nn]=G,de=nn);else if(on<re&&0>i($t,G))$[de]=$t,$[on]=G,de=on;else break e}}return K}function i($,K){var G=$.sortIndex-K.sortIndex;return G!==0?G:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],h=[],f=1,p=null,y=3,k=!1,C=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w($){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=$)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function x($){if(N=!1,w($),!C)if(n(u)!==null)C=!0,qi(V);else{var K=n(h);K!==null&&tn(x,K.startTime-$)}}function V($,K){C=!1,N&&(N=!1,_(g),g=-1),k=!0;var G=y;try{for(w(K),p=n(u);p!==null&&(!(p.expirationTime>K)||$&&!A());){var de=p.callback;if(typeof de=="function"){p.callback=null,y=p.priorityLevel;var re=de(p.expirationTime<=K);K=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(u)&&r(u),w(K)}else r(u);p=n(u)}if(p!==null)var Ee=!0;else{var nn=n(h);nn!==null&&tn(x,nn.startTime-K),Ee=!1}return Ee}finally{p=null,y=G,k=!1}}var j=!1,I=null,g=-1,E=5,T=-1;function A(){return!(t.unstable_now()-T<E)}function b(){if(I!==null){var $=t.unstable_now();T=$;var K=!0;try{K=I(!0,$)}finally{K?S():(j=!1,I=null)}}else j=!1}var S;if(typeof v=="function")S=function(){v(b)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,hr=_t.port2;_t.port1.onmessage=b,S=function(){hr.postMessage(null)}}else S=function(){D(b,0)};function qi($){I=$,j||(j=!0,S())}function tn($,K){g=D(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||k||(C=!0,qi(V))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var G=y;y=K;try{return $()}finally{y=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var G=y;y=$;try{return K()}finally{y=G}},t.unstable_scheduleCallback=function($,K,G){var de=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?de+G:de):G=de,$){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=G+re,$={id:f++,callback:K,priorityLevel:$,startTime:G,expirationTime:re,sortIndex:-1},G>de?($.sortIndex=G,e(h,$),n(u)===null&&$===n(h)&&(N?(_(g),g=-1):N=!0,tn(x,G-de))):($.sortIndex=re,e(u,$),C||k||(C=!0,qi(V))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var K=y;return function(){var G=y;y=K;try{return $.apply(this,arguments)}finally{y=G}}}})(sy);oy.exports=sy;var LE=oy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE=M,yt=LE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ay=new Set,Bo={};function Br(t,e){Ti(t,e),Ti(t+"Capture",e)}function Ti(t,e){for(Bo[t]=e,t=0;t<e.length;t++)ay.add(e[t])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=Object.prototype.hasOwnProperty,FE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Em={},Im={};function UE(t){return Ac.call(Im,t)?!0:Ac.call(Em,t)?!1:FE.test(t)?Im[t]=!0:(Em[t]=!0,!1)}function jE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BE(t,e,n,r){if(e===null||typeof e>"u"||jE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($h,zh);Ue[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($h,zh);Ue[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($h,zh);Ue[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hh(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BE(e,n,i,r)&&(n=null),r||i===null?UE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cn=VE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xs=Symbol.for("react.element"),ei=Symbol.for("react.portal"),ti=Symbol.for("react.fragment"),Wh=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),ly=Symbol.for("react.provider"),uy=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),Pc=Symbol.for("react.suspense"),Rc=Symbol.for("react.suspense_list"),Kh=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),cy=Symbol.for("react.offscreen"),Tm=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Uu;function wo(t){if(Uu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uu=e&&e[1]||""}return`
`+Uu+t}var ju=!1;function Bu(t,e){if(!t||ju)return"";ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=l);break}}}finally{ju=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function $E(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=Bu(t.type,!1),t;case 11:return t=Bu(t.type.render,!1),t;case 1:return t=Bu(t.type,!0),t;default:return""}}function bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ti:return"Fragment";case ei:return"Portal";case Cc:return"Profiler";case Wh:return"StrictMode";case Pc:return"Suspense";case Rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uy:return(t.displayName||"Context")+".Consumer";case ly:return(t._context.displayName||"Context")+".Provider";case qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kh:return e=t.displayName||null,e!==null?e:bc(t.type)||"Memo";case Dn:e=t._payload,t=t._init;try{return bc(t(e))}catch{}}return null}function zE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bc(e);case 8:return e===Wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HE(t){var e=hy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Js(t){t._valueTracker||(t._valueTracker=HE(t))}function dy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nc(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fy(t,e){e=e.checked,e!=null&&Hh(t,"checked",e,!1)}function xc(t,e){fy(t,e);var n=nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Oc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Oc(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function km(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Oc(t,e,n){(e!=="number"||Ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Dc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(_o(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function my(t,e){var n=nr(e.value),r=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function py(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?py(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zs,gy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},WE=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){WE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function yy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function vy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var qE=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lc(t,e){if(e){if(qE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fc=null;function Gh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uc=null,mi=null,pi=null;function Pm(t){if(t=vs(t)){if(typeof Uc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Fl(e),Uc(t.stateNode,t.type,e))}}function wy(t){mi?pi?pi.push(t):pi=[t]:mi=t}function _y(){if(mi){var t=mi,e=pi;if(pi=mi=null,Pm(t),e)for(t=0;t<e.length;t++)Pm(e[t])}}function Ey(t,e){return t(e)}function Iy(){}var $u=!1;function Ty(t,e,n){if($u)return t(e,n);$u=!0;try{return Ey(t,e,n)}finally{$u=!1,(mi!==null||pi!==null)&&(Iy(),_y())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var r=Fl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var jc=!1;if(_n)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){jc=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{jc=!1}function KE(t,e,n,r,i,o,s,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Co=!1,$a=null,za=!1,Bc=null,GE={onError:function(t){Co=!0,$a=t}};function QE(t,e,n,r,i,o,s,l,u){Co=!1,$a=null,KE.apply(GE,arguments)}function YE(t,e,n,r,i,o,s,l,u){if(QE.apply(this,arguments),Co){if(Co){var h=$a;Co=!1,$a=null}else throw Error(F(198));za||(za=!0,Bc=h)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rm(t){if($r(t)!==t)throw Error(F(188))}function XE(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Rm(i),t;if(o===r)return Rm(i),e;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function ky(t){return t=XE(t),t!==null?Ay(t):null}function Ay(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ay(t);if(e!==null)return e;t=t.sibling}return null}var Cy=yt.unstable_scheduleCallback,bm=yt.unstable_cancelCallback,JE=yt.unstable_shouldYield,ZE=yt.unstable_requestPaint,Ie=yt.unstable_now,eI=yt.unstable_getCurrentPriorityLevel,Qh=yt.unstable_ImmediatePriority,Py=yt.unstable_UserBlockingPriority,Ha=yt.unstable_NormalPriority,tI=yt.unstable_LowPriority,Ry=yt.unstable_IdlePriority,Dl=null,qt=null;function nI(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:oI,rI=Math.log,iI=Math.LN2;function oI(t){return t>>>=0,t===0?32:31-(rI(t)/iI|0)|0}var ea=64,ta=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Eo(l):(o&=s,o!==0&&(r=Eo(o)))}else s=n&~i,s!==0?r=Eo(s):o!==0&&(r=Eo(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Lt(e),i=1<<n,r|=t[n],e&=~i;return r}function sI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Lt(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=sI(l,e)):u<=e&&(t.expiredLanes|=l),o&=~l}}function $c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function by(){var t=ea;return ea<<=1,!(ea&4194240)&&(ea=64),t}function zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Lt(e),t[e]=n}function lI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Lt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Yh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function Ny(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xy,Xh,Oy,Dy,My,zc=!1,na=[],Hn=null,Wn=null,qn=null,Ho=new Map,Wo=new Map,Ln=[],uI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nm(t,e){switch(t){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function lo(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=vs(e),e!==null&&Xh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cI(t,e,n,r,i){switch(e){case"focusin":return Hn=lo(Hn,t,e,n,r,i),!0;case"dragenter":return Wn=lo(Wn,t,e,n,r,i),!0;case"mouseover":return qn=lo(qn,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ho.set(o,lo(Ho.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wo.set(o,lo(Wo.get(o)||null,t,e,n,r,i)),!0}return!1}function Ly(t){var e=Er(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=Sy(n),e!==null){t.blockedOn=e,My(t.priority,function(){Oy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ia(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fc=r,n.target.dispatchEvent(r),Fc=null}else return e=vs(n),e!==null&&Xh(e),t.blockedOn=n,!1;e.shift()}return!0}function xm(t,e,n){Ia(t)&&n.delete(e)}function hI(){zc=!1,Hn!==null&&Ia(Hn)&&(Hn=null),Wn!==null&&Ia(Wn)&&(Wn=null),qn!==null&&Ia(qn)&&(qn=null),Ho.forEach(xm),Wo.forEach(xm)}function uo(t,e){t.blockedOn===e&&(t.blockedOn=null,zc||(zc=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,hI)))}function qo(t){function e(i){return uo(i,t)}if(0<na.length){uo(na[0],t);for(var n=1;n<na.length;n++){var r=na[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hn!==null&&uo(Hn,t),Wn!==null&&uo(Wn,t),qn!==null&&uo(qn,t),Ho.forEach(e),Wo.forEach(e),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)Ly(n),n.blockedOn===null&&Ln.shift()}var gi=Cn.ReactCurrentBatchConfig,qa=!0;function dI(t,e,n,r){var i=ne,o=gi.transition;gi.transition=null;try{ne=1,Jh(t,e,n,r)}finally{ne=i,gi.transition=o}}function fI(t,e,n,r){var i=ne,o=gi.transition;gi.transition=null;try{ne=4,Jh(t,e,n,r)}finally{ne=i,gi.transition=o}}function Jh(t,e,n,r){if(qa){var i=Hc(t,e,n,r);if(i===null)Zu(t,e,r,Ka,n),Nm(t,r);else if(cI(i,t,e,n,r))r.stopPropagation();else if(Nm(t,r),e&4&&-1<uI.indexOf(t)){for(;i!==null;){var o=vs(i);if(o!==null&&xy(o),o=Hc(t,e,n,r),o===null&&Zu(t,e,r,Ka,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Zu(t,e,r,null,n)}}var Ka=null;function Hc(t,e,n,r){if(Ka=null,t=Gh(r),t=Er(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ka=t,null}function Vy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eI()){case Qh:return 1;case Py:return 4;case Ha:case tI:return 16;case Ry:return 536870912;default:return 16}default:return 16}}var $n=null,Zh=null,Ta=null;function Fy(){if(Ta)return Ta;var t,e=Zh,n=e.length,r,i="value"in $n?$n.value:$n.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Ta=i.slice(t,1<r?1-r:void 0)}function Sa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ra(){return!0}function Om(){return!1}function wt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ra:Om,this.isPropagationStopped=Om,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),e}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=wt(Vi),ys=ye({},Vi,{view:0,detail:0}),mI=wt(ys),Hu,Wu,co,Ml=ye({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Hu=t.screenX-co.screenX,Wu=t.screenY-co.screenY):Wu=Hu=0,co=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),Dm=wt(Ml),pI=ye({},Ml,{dataTransfer:0}),gI=wt(pI),yI=ye({},ys,{relatedTarget:0}),qu=wt(yI),vI=ye({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),wI=wt(vI),_I=ye({},Vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EI=wt(_I),II=ye({},Vi,{data:0}),Mm=wt(II),TI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kI[t])?!!e[t]:!1}function td(){return AI}var CI=ye({},ys,{key:function(t){if(t.key){var e=TI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:td,charCode:function(t){return t.type==="keypress"?Sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PI=wt(CI),RI=ye({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=wt(RI),bI=ye({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:td}),NI=wt(bI),xI=ye({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),OI=wt(xI),DI=ye({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MI=wt(DI),LI=[9,13,27,32],nd=_n&&"CompositionEvent"in window,Po=null;_n&&"documentMode"in document&&(Po=document.documentMode);var VI=_n&&"TextEvent"in window&&!Po,Uy=_n&&(!nd||Po&&8<Po&&11>=Po),Vm=String.fromCharCode(32),Fm=!1;function jy(t,e){switch(t){case"keyup":return LI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function By(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ni=!1;function FI(t,e){switch(t){case"compositionend":return By(e);case"keypress":return e.which!==32?null:(Fm=!0,Vm);case"textInput":return t=e.data,t===Vm&&Fm?null:t;default:return null}}function UI(t,e){if(ni)return t==="compositionend"||!nd&&jy(t,e)?(t=Fy(),Ta=Zh=$n=null,ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uy&&e.locale!=="ko"?null:e.data;default:return null}}var jI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jI[t.type]:e==="textarea"}function $y(t,e,n,r){wy(r),e=Ga(e,"onChange"),0<e.length&&(n=new ed("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ro=null,Ko=null;function BI(t){Zy(t,0)}function Ll(t){var e=oi(t);if(dy(e))return t}function $I(t,e){if(t==="change")return e}var zy=!1;if(_n){var Ku;if(_n){var Gu="oninput"in document;if(!Gu){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),Gu=typeof jm.oninput=="function"}Ku=Gu}else Ku=!1;zy=Ku&&(!document.documentMode||9<document.documentMode)}function Bm(){Ro&&(Ro.detachEvent("onpropertychange",Hy),Ko=Ro=null)}function Hy(t){if(t.propertyName==="value"&&Ll(Ko)){var e=[];$y(e,Ko,t,Gh(t)),Ty(BI,e)}}function zI(t,e,n){t==="focusin"?(Bm(),Ro=e,Ko=n,Ro.attachEvent("onpropertychange",Hy)):t==="focusout"&&Bm()}function HI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(Ko)}function WI(t,e){if(t==="click")return Ll(e)}function qI(t,e){if(t==="input"||t==="change")return Ll(e)}function KI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:KI;function Go(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ac.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function $m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,e){var n=$m(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$m(n)}}function Wy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qy(){for(var t=window,e=Ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ba(t.document)}return e}function rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GI(t){var e=qy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wy(n.ownerDocument.documentElement,n)){if(r!==null&&rd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=zm(n,o);var s=zm(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QI=_n&&"documentMode"in document&&11>=document.documentMode,ri=null,Wc=null,bo=null,qc=!1;function Hm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qc||ri==null||ri!==Ba(r)||(r=ri,"selectionStart"in r&&rd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Go(bo,r)||(bo=r,r=Ga(Wc,"onSelect"),0<r.length&&(e=new ed("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ri)))}function ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ii={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},Qu={},Ky={};_n&&(Ky=document.createElement("div").style,"AnimationEvent"in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),"TransitionEvent"in window||delete ii.transitionend.transition);function Vl(t){if(Qu[t])return Qu[t];if(!ii[t])return t;var e=ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ky)return Qu[t]=e[n];return t}var Gy=Vl("animationend"),Qy=Vl("animationiteration"),Yy=Vl("animationstart"),Xy=Vl("transitionend"),Jy=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){Jy.set(t,e),Br(e,[t])}for(var Yu=0;Yu<Wm.length;Yu++){var Xu=Wm[Yu],YI=Xu.toLowerCase(),XI=Xu[0].toUpperCase()+Xu.slice(1);ar(YI,"on"+XI)}ar(Gy,"onAnimationEnd");ar(Qy,"onAnimationIteration");ar(Yy,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(Xy,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function qm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YE(r,e,void 0,t),t.currentTarget=null}function Zy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;qm(i,l,h),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,h=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;qm(i,l,h),o=u}}}if(za)throw t=Bc,za=!1,Bc=null,t}function ue(t,e){var n=e[Xc];n===void 0&&(n=e[Xc]=new Set);var r=t+"__bubble";n.has(r)||(ev(e,t,2,!1),n.add(r))}function Ju(t,e,n){var r=0;e&&(r|=4),ev(n,t,r,e)}var oa="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[oa]){t[oa]=!0,ay.forEach(function(n){n!=="selectionchange"&&(JI.has(n)||Ju(n,!1,t),Ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oa]||(e[oa]=!0,Ju("selectionchange",!1,e))}}function ev(t,e,n,r){switch(Vy(e)){case 1:var i=dI;break;case 4:i=fI;break;default:i=Jh}n=i.bind(null,e,n,t),i=void 0,!jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zu(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Er(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Ty(function(){var h=o,f=Gh(n),p=[];e:{var y=Jy.get(t);if(y!==void 0){var k=ed,C=t;switch(t){case"keypress":if(Sa(n)===0)break e;case"keydown":case"keyup":k=PI;break;case"focusin":C="focus",k=qu;break;case"focusout":C="blur",k=qu;break;case"beforeblur":case"afterblur":k=qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=gI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=NI;break;case Gy:case Qy:case Yy:k=wI;break;case Xy:k=OI;break;case"scroll":k=mI;break;case"wheel":k=MI;break;case"copy":case"cut":case"paste":k=EI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Lm}var N=(e&4)!==0,D=!N&&t==="scroll",_=N?y!==null?y+"Capture":null:y;N=[];for(var v=h,w;v!==null;){w=v;var x=w.stateNode;if(w.tag===5&&x!==null&&(w=x,_!==null&&(x=zo(v,_),x!=null&&N.push(Yo(v,x,w)))),D)break;v=v.return}0<N.length&&(y=new k(y,C,null,n,f),p.push({event:y,listeners:N}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",y&&n!==Fc&&(C=n.relatedTarget||n.fromElement)&&(Er(C)||C[En]))break e;if((k||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,k?(C=n.relatedTarget||n.toElement,k=h,C=C?Er(C):null,C!==null&&(D=$r(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(k=null,C=h),k!==C)){if(N=Dm,x="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=Lm,x="onPointerLeave",_="onPointerEnter",v="pointer"),D=k==null?y:oi(k),w=C==null?y:oi(C),y=new N(x,v+"leave",k,n,f),y.target=D,y.relatedTarget=w,x=null,Er(f)===h&&(N=new N(_,v+"enter",C,n,f),N.target=w,N.relatedTarget=D,x=N),D=x,k&&C)t:{for(N=k,_=C,v=0,w=N;w;w=Jr(w))v++;for(w=0,x=_;x;x=Jr(x))w++;for(;0<v-w;)N=Jr(N),v--;for(;0<w-v;)_=Jr(_),w--;for(;v--;){if(N===_||_!==null&&N===_.alternate)break t;N=Jr(N),_=Jr(_)}N=null}else N=null;k!==null&&Km(p,y,k,N,!1),C!==null&&D!==null&&Km(p,D,C,N,!0)}}e:{if(y=h?oi(h):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var V=$I;else if(Um(y))if(zy)V=qI;else{V=HI;var j=zI}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(V=WI);if(V&&(V=V(t,h))){$y(p,V,n,f);break e}j&&j(t,y,h),t==="focusout"&&(j=y._wrapperState)&&j.controlled&&y.type==="number"&&Oc(y,"number",y.value)}switch(j=h?oi(h):window,t){case"focusin":(Um(j)||j.contentEditable==="true")&&(ri=j,Wc=h,bo=null);break;case"focusout":bo=Wc=ri=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Hm(p,n,f);break;case"selectionchange":if(QI)break;case"keydown":case"keyup":Hm(p,n,f)}var I;if(nd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ni?jy(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Uy&&n.locale!=="ko"&&(ni||g!=="onCompositionStart"?g==="onCompositionEnd"&&ni&&(I=Fy()):($n=f,Zh="value"in $n?$n.value:$n.textContent,ni=!0)),j=Ga(h,g),0<j.length&&(g=new Mm(g,t,null,n,f),p.push({event:g,listeners:j}),I?g.data=I:(I=By(n),I!==null&&(g.data=I)))),(I=VI?FI(t,n):UI(t,n))&&(h=Ga(h,"onBeforeInput"),0<h.length&&(f=new Mm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=I))}Zy(p,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ga(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zo(t,n),o!=null&&r.unshift(Yo(t,o,i)),o=zo(t,e),o!=null&&r.push(Yo(t,o,i))),t=t.return}return r}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Km(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=zo(n,o),u!=null&&s.unshift(Yo(n,u,l))):i||(u=zo(n,o),u!=null&&s.push(Yo(n,u,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var ZI=/\r\n?/g,e1=/\u0000|\uFFFD/g;function Gm(t){return(typeof t=="string"?t:""+t).replace(ZI,`
`).replace(e1,"")}function sa(t,e,n){if(e=Gm(e),Gm(t)!==e&&n)throw Error(F(425))}function Qa(){}var Kc=null,Gc=null;function Qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,t1=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,n1=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(t){return Qm.resolve(null).then(t).catch(r1)}:Yc;function r1(t){setTimeout(function(){throw t})}function ec(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qo(e)}function Kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ym(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Fi,Xo="__reactProps$"+Fi,En="__reactContainer$"+Fi,Xc="__reactEvents$"+Fi,i1="__reactListeners$"+Fi,o1="__reactHandles$"+Fi;function Er(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[En]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ym(t);t!==null;){if(n=t[Wt])return n;t=Ym(t)}return e}t=n,n=t.parentNode}return null}function vs(t){return t=t[Wt]||t[En],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Fl(t){return t[Xo]||null}var Jc=[],si=-1;function lr(t){return{current:t}}function ce(t){0>si||(t.current=Jc[si],Jc[si]=null,si--)}function se(t,e){si++,Jc[si]=t.current,t.current=e}var rr={},Ye=lr(rr),at=lr(!1),br=rr;function Si(t,e){var n=t.type.contextTypes;if(!n)return rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function lt(t){return t=t.childContextTypes,t!=null}function Ya(){ce(at),ce(Ye)}function Xm(t,e,n){if(Ye.current!==rr)throw Error(F(168));se(Ye,e),se(at,n)}function tv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,zE(t)||"Unknown",i));return ye({},n,r)}function Xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,br=Ye.current,se(Ye,t),se(at,at.current),!0}function Jm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=tv(t,e,br),r.__reactInternalMemoizedMergedChildContext=t,ce(at),ce(Ye),se(Ye,t)):ce(at),se(at,n)}var un=null,Ul=!1,tc=!1;function nv(t){un===null?un=[t]:un.push(t)}function s1(t){Ul=!0,nv(t)}function ur(){if(!tc&&un!==null){tc=!0;var t=0,e=ne;try{var n=un;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Ul=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),Cy(Qh,ur),i}finally{ne=e,tc=!1}}return null}var ai=[],li=0,Ja=null,Za=0,Et=[],It=0,Nr=null,cn=1,hn="";function gr(t,e){ai[li++]=Za,ai[li++]=Ja,Ja=t,Za=e}function rv(t,e,n){Et[It++]=cn,Et[It++]=hn,Et[It++]=Nr,Nr=t;var r=cn;t=hn;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var o=32-Lt(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,cn=1<<32-Lt(e)+i|n<<i|r,hn=o+t}else cn=1<<o|n<<i|r,hn=t}function id(t){t.return!==null&&(gr(t,1),rv(t,1,0))}function od(t){for(;t===Ja;)Ja=ai[--li],ai[li]=null,Za=ai[--li],ai[li]=null;for(;t===Nr;)Nr=Et[--It],Et[It]=null,hn=Et[--It],Et[It]=null,cn=Et[--It],Et[It]=null}var pt=null,mt=null,he=!1,xt=null;function iv(t,e){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,mt=Kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,mt=null,!0):!1;default:return!1}}function Zc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function eh(t){if(he){var e=mt;if(e){var n=e;if(!Zm(t,e)){if(Zc(t))throw Error(F(418));e=Kn(n.nextSibling);var r=pt;e&&Zm(t,e)?iv(r,n):(t.flags=t.flags&-4097|2,he=!1,pt=t)}}else{if(Zc(t))throw Error(F(418));t.flags=t.flags&-4097|2,he=!1,pt=t}}}function ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function aa(t){if(t!==pt)return!1;if(!he)return ep(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qc(t.type,t.memoizedProps)),e&&(e=mt)){if(Zc(t))throw ov(),Error(F(418));for(;e;)iv(t,e),e=Kn(e.nextSibling)}if(ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=Kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=pt?Kn(t.stateNode.nextSibling):null;return!0}function ov(){for(var t=mt;t;)t=Kn(t.nextSibling)}function ki(){mt=pt=null,he=!1}function sd(t){xt===null?xt=[t]:xt.push(t)}var a1=Cn.ReactCurrentBatchConfig;function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function la(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tp(t){var e=t._init;return e(t._payload)}function sv(t){function e(_,v){if(t){var w=_.deletions;w===null?(_.deletions=[v],_.flags|=16):w.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=Xn(_,v),_.index=0,_.sibling=null,_}function o(_,v,w){return _.index=w,t?(w=_.alternate,w!==null?(w=w.index,w<v?(_.flags|=2,v):w):(_.flags|=2,v)):(_.flags|=1048576,v)}function s(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,v,w,x){return v===null||v.tag!==6?(v=lc(w,_.mode,x),v.return=_,v):(v=i(v,w),v.return=_,v)}function u(_,v,w,x){var V=w.type;return V===ti?f(_,v,w.props.children,x,w.key):v!==null&&(v.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Dn&&tp(V)===v.type)?(x=i(v,w.props),x.ref=ho(_,v,w),x.return=_,x):(x=Na(w.type,w.key,w.props,null,_.mode,x),x.ref=ho(_,v,w),x.return=_,x)}function h(_,v,w,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=uc(w,_.mode,x),v.return=_,v):(v=i(v,w.children||[]),v.return=_,v)}function f(_,v,w,x,V){return v===null||v.tag!==7?(v=Cr(w,_.mode,x,V),v.return=_,v):(v=i(v,w),v.return=_,v)}function p(_,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=lc(""+v,_.mode,w),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xs:return w=Na(v.type,v.key,v.props,null,_.mode,w),w.ref=ho(_,null,v),w.return=_,w;case ei:return v=uc(v,_.mode,w),v.return=_,v;case Dn:var x=v._init;return p(_,x(v._payload),w)}if(_o(v)||so(v))return v=Cr(v,_.mode,w,null),v.return=_,v;la(_,v)}return null}function y(_,v,w,x){var V=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return V!==null?null:l(_,v,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xs:return w.key===V?u(_,v,w,x):null;case ei:return w.key===V?h(_,v,w,x):null;case Dn:return V=w._init,y(_,v,V(w._payload),x)}if(_o(w)||so(w))return V!==null?null:f(_,v,w,x,null);la(_,w)}return null}function k(_,v,w,x,V){if(typeof x=="string"&&x!==""||typeof x=="number")return _=_.get(w)||null,l(v,_,""+x,V);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xs:return _=_.get(x.key===null?w:x.key)||null,u(v,_,x,V);case ei:return _=_.get(x.key===null?w:x.key)||null,h(v,_,x,V);case Dn:var j=x._init;return k(_,v,w,j(x._payload),V)}if(_o(x)||so(x))return _=_.get(w)||null,f(v,_,x,V,null);la(v,x)}return null}function C(_,v,w,x){for(var V=null,j=null,I=v,g=v=0,E=null;I!==null&&g<w.length;g++){I.index>g?(E=I,I=null):E=I.sibling;var T=y(_,I,w[g],x);if(T===null){I===null&&(I=E);break}t&&I&&T.alternate===null&&e(_,I),v=o(T,v,g),j===null?V=T:j.sibling=T,j=T,I=E}if(g===w.length)return n(_,I),he&&gr(_,g),V;if(I===null){for(;g<w.length;g++)I=p(_,w[g],x),I!==null&&(v=o(I,v,g),j===null?V=I:j.sibling=I,j=I);return he&&gr(_,g),V}for(I=r(_,I);g<w.length;g++)E=k(I,_,g,w[g],x),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?g:E.key),v=o(E,v,g),j===null?V=E:j.sibling=E,j=E);return t&&I.forEach(function(A){return e(_,A)}),he&&gr(_,g),V}function N(_,v,w,x){var V=so(w);if(typeof V!="function")throw Error(F(150));if(w=V.call(w),w==null)throw Error(F(151));for(var j=V=null,I=v,g=v=0,E=null,T=w.next();I!==null&&!T.done;g++,T=w.next()){I.index>g?(E=I,I=null):E=I.sibling;var A=y(_,I,T.value,x);if(A===null){I===null&&(I=E);break}t&&I&&A.alternate===null&&e(_,I),v=o(A,v,g),j===null?V=A:j.sibling=A,j=A,I=E}if(T.done)return n(_,I),he&&gr(_,g),V;if(I===null){for(;!T.done;g++,T=w.next())T=p(_,T.value,x),T!==null&&(v=o(T,v,g),j===null?V=T:j.sibling=T,j=T);return he&&gr(_,g),V}for(I=r(_,I);!T.done;g++,T=w.next())T=k(I,_,g,T.value,x),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?g:T.key),v=o(T,v,g),j===null?V=T:j.sibling=T,j=T);return t&&I.forEach(function(b){return e(_,b)}),he&&gr(_,g),V}function D(_,v,w,x){if(typeof w=="object"&&w!==null&&w.type===ti&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Xs:e:{for(var V=w.key,j=v;j!==null;){if(j.key===V){if(V=w.type,V===ti){if(j.tag===7){n(_,j.sibling),v=i(j,w.props.children),v.return=_,_=v;break e}}else if(j.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Dn&&tp(V)===j.type){n(_,j.sibling),v=i(j,w.props),v.ref=ho(_,j,w),v.return=_,_=v;break e}n(_,j);break}else e(_,j);j=j.sibling}w.type===ti?(v=Cr(w.props.children,_.mode,x,w.key),v.return=_,_=v):(x=Na(w.type,w.key,w.props,null,_.mode,x),x.ref=ho(_,v,w),x.return=_,_=x)}return s(_);case ei:e:{for(j=w.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(_,v.sibling),v=i(v,w.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=uc(w,_.mode,x),v.return=_,_=v}return s(_);case Dn:return j=w._init,D(_,v,j(w._payload),x)}if(_o(w))return C(_,v,w,x);if(so(w))return N(_,v,w,x);la(_,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,w),v.return=_,_=v):(n(_,v),v=lc(w,_.mode,x),v.return=_,_=v),s(_)):n(_,v)}return D}var Ai=sv(!0),av=sv(!1),el=lr(null),tl=null,ui=null,ad=null;function ld(){ad=ui=tl=null}function ud(t){var e=el.current;ce(el),t._currentValue=e}function th(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yi(t,e){tl=t,ad=ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(st=!0),t.firstContext=null)}function At(t){var e=t._currentValue;if(ad!==t)if(t={context:t,memoizedValue:e,next:null},ui===null){if(tl===null)throw Error(F(308));ui=t,tl.dependencies={lanes:0,firstContext:t}}else ui=ui.next=t;return e}var Ir=null;function cd(t){Ir===null?Ir=[t]:Ir.push(t)}function lv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cd(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,cd(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yh(t,n)}}function np(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,r){var i=t.updateQueue;Mn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,s===null?o=h:s.next=h,s=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;s=0,f=h=u=null,l=o;do{var y=l.lane,k=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(y=e,k=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){p=C.call(k,p,y);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,y=typeof C=="function"?C.call(k,p,y):C,y==null)break e;p=ye({},p,y);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=p):f=f.next=k,s|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Or|=s,t.lanes=s,t.memoizedState=p}}function rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ws={},Kt=lr(ws),Jo=lr(ws),Zo=lr(ws);function Tr(t){if(t===ws)throw Error(F(174));return t}function dd(t,e){switch(se(Zo,e),se(Jo,t),se(Kt,ws),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mc(e,t)}ce(Kt),se(Kt,e)}function Ci(){ce(Kt),ce(Jo),ce(Zo)}function cv(t){Tr(Zo.current);var e=Tr(Kt.current),n=Mc(e,t.type);e!==n&&(se(Jo,t),se(Kt,n))}function fd(t){Jo.current===t&&(ce(Kt),ce(Jo))}var me=lr(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nc=[];function md(){for(var t=0;t<nc.length;t++)nc[t]._workInProgressVersionPrimary=null;nc.length=0}var Aa=Cn.ReactCurrentDispatcher,rc=Cn.ReactCurrentBatchConfig,xr=0,pe=null,Ae=null,be=null,il=!1,No=!1,es=0,l1=0;function ze(){throw Error(F(321))}function pd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function gd(t,e,n,r,i,o){if(xr=o,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?d1:f1,t=n(r,i),No){o=0;do{if(No=!1,es=0,25<=o)throw Error(F(301));o+=1,be=Ae=null,e.updateQueue=null,Aa.current=m1,t=n(r,i)}while(No)}if(Aa.current=ol,e=Ae!==null&&Ae.next!==null,xr=0,be=Ae=pe=null,il=!1,e)throw Error(F(300));return t}function yd(){var t=es!==0;return es=0,t}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?pe.memoizedState=be=t:be=be.next=t,be}function Ct(){if(Ae===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=be===null?pe.memoizedState:be.next;if(e!==null)be=e,Ae=t;else{if(t===null)throw Error(F(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},be===null?pe.memoizedState=be=t:be=be.next=t}return be}function ts(t,e){return typeof e=="function"?e(t):e}function ic(t){var e=Ct(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,h=o;do{var f=h.lane;if((xr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,s=r):u=u.next=p,pe.lanes|=f,Or|=f}h=h.next}while(h!==null&&h!==o);u===null?s=r:u.next=l,Ft(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,pe.lanes|=o,Or|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function oc(t){var e=Ct(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Ft(o,e.memoizedState)||(st=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function hv(){}function dv(t,e){var n=pe,r=Ct(),i=e(),o=!Ft(r.memoizedState,i);if(o&&(r.memoizedState=i,st=!0),r=r.queue,vd(pv.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,ns(9,mv.bind(null,n,r,i,e),void 0,null),xe===null)throw Error(F(349));xr&30||fv(n,e,i)}return i}function fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mv(t,e,n,r){e.value=n,e.getSnapshot=r,gv(e)&&yv(t)}function pv(t,e,n){return n(function(){gv(e)&&yv(t)})}function gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function yv(t){var e=In(t,1);e!==null&&Vt(e,t,1,-1)}function ip(t){var e=Ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},e.queue=t,t=t.dispatch=h1.bind(null,pe,t),[e.memoizedState,t]}function ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vv(){return Ct().memoizedState}function Ca(t,e,n,r){var i=Ht();pe.flags|=t,i.memoizedState=ns(1|e,n,void 0,r===void 0?null:r)}function jl(t,e,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var s=Ae.memoizedState;if(o=s.destroy,r!==null&&pd(r,s.deps)){i.memoizedState=ns(e,n,o,r);return}}pe.flags|=t,i.memoizedState=ns(1|e,n,o,r)}function op(t,e){return Ca(8390656,8,t,e)}function vd(t,e){return jl(2048,8,t,e)}function wv(t,e){return jl(4,2,t,e)}function _v(t,e){return jl(4,4,t,e)}function Ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Iv(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,Ev.bind(null,e,t),n)}function wd(){}function Tv(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Sv(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kv(t,e,n){return xr&21?(Ft(n,e)||(n=by(),pe.lanes|=n,Or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n)}function u1(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=rc.transition;rc.transition={};try{t(!1),e()}finally{ne=n,rc.transition=r}}function Av(){return Ct().memoizedState}function c1(t,e,n){var r=Yn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cv(t))Pv(e,n);else if(n=lv(t,e,n,r),n!==null){var i=tt();Vt(n,t,r,i),Rv(n,e,r)}}function h1(t,e,n){var r=Yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cv(t))Pv(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,s)){var u=e.interleaved;u===null?(i.next=i,cd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=lv(t,e,i,r),n!==null&&(i=tt(),Vt(n,t,r,i),Rv(n,e,r))}}function Cv(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function Pv(t,e){No=il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yh(t,n)}}var ol={readContext:At,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},d1={readContext:At,useCallback:function(t,e){return Ht().memoizedState=[t,e===void 0?null:e],t},useContext:At,useEffect:op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ca(4194308,4,Ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ca(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ca(4,2,t,e)},useMemo:function(t,e){var n=Ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=c1.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=Ht();return t={current:t},e.memoizedState=t},useState:ip,useDebugValue:wd,useDeferredValue:function(t){return Ht().memoizedState=t},useTransition:function(){var t=ip(!1),e=t[0];return t=u1.bind(null,t[1]),Ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=Ht();if(he){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),xe===null)throw Error(F(349));xr&30||fv(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,op(pv.bind(null,r,o,t),[t]),r.flags|=2048,ns(9,mv.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Ht(),e=xe.identifierPrefix;if(he){var n=hn,r=cn;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=es++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=l1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},f1={readContext:At,useCallback:Tv,useContext:At,useEffect:vd,useImperativeHandle:Iv,useInsertionEffect:wv,useLayoutEffect:_v,useMemo:Sv,useReducer:ic,useRef:vv,useState:function(){return ic(ts)},useDebugValue:wd,useDeferredValue:function(t){var e=Ct();return kv(e,Ae.memoizedState,t)},useTransition:function(){var t=ic(ts)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:dv,useId:Av,unstable_isNewReconciler:!1},m1={readContext:At,useCallback:Tv,useContext:At,useEffect:vd,useImperativeHandle:Iv,useInsertionEffect:wv,useLayoutEffect:_v,useMemo:Sv,useReducer:oc,useRef:vv,useState:function(){return oc(ts)},useDebugValue:wd,useDeferredValue:function(t){var e=Ct();return Ae===null?e.memoizedState=t:kv(e,Ae.memoizedState,t)},useTransition:function(){var t=oc(ts)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:hv,useSyncExternalStore:dv,useId:Av,unstable_isNewReconciler:!1};function bt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bl={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Yn(t),o=gn(r,i);o.payload=e,n!=null&&(o.callback=n),e=Gn(t,o,i),e!==null&&(Vt(e,t,i,r),ka(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Yn(t),o=gn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Gn(t,o,i),e!==null&&(Vt(e,t,i,r),ka(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=Yn(t),i=gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Gn(t,i,r),e!==null&&(Vt(e,t,r,n),ka(e,t,r))}};function sp(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Go(n,r)||!Go(i,o):!0}function bv(t,e,n){var r=!1,i=rr,o=e.contextType;return typeof o=="object"&&o!==null?o=At(o):(i=lt(e)?br:Ye.current,r=e.contextTypes,o=(r=r!=null)?Si(t,i):rr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function ap(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bl.enqueueReplaceState(e,e.state,null)}function rh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},hd(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=At(o):(o=lt(e)?br:Ye.current,i.context=Si(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(nh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Bl.enqueueReplaceState(i,i.state,null),nl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Pi(t,e){try{var n="",r=e;do n+=$E(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ih(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var p1=typeof WeakMap=="function"?WeakMap:Map;function Nv(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){al||(al=!0,mh=r),ih(t,e)},n}function xv(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ih(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ih(t,e),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function lp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new p1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=R1.bind(null,t,e,n),e.then(t,t))}function up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,Gn(n,e,1))),n.lanes|=1),t)}var g1=Cn.ReactCurrentOwner,st=!1;function et(t,e,n,r){e.child=t===null?av(e,null,n,r):Ai(e,t.child,n,r)}function hp(t,e,n,r,i){n=n.render;var o=e.ref;return yi(e,i),r=gd(t,e,n,r,o,i),n=yd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(he&&n&&id(e),e.flags|=1,et(t,e,r,i),e.child)}function dp(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Cd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Ov(t,e,o,r,i)):(t=Na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(s,r)&&t.ref===e.ref)return Tn(t,e,i)}return e.flags|=1,t=Xn(o,r),t.ref=e.ref,t.return=e,e.child=t}function Ov(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Go(o,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(st=!0);else return e.lanes=t.lanes,Tn(t,e,i)}return oh(t,e,n,r,i)}function Dv(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(hi,ft),ft|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(hi,ft),ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,se(hi,ft),ft|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,se(hi,ft),ft|=r;return et(t,e,i,n),e.child}function Mv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function oh(t,e,n,r,i){var o=lt(n)?br:Ye.current;return o=Si(e,o),yi(e,i),n=gd(t,e,n,r,o,i),r=yd(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(he&&r&&id(e),e.flags|=1,et(t,e,n,i),e.child)}function fp(t,e,n,r,i){if(lt(n)){var o=!0;Xa(e)}else o=!1;if(yi(e,i),e.stateNode===null)Pa(t,e),bv(e,n,r),rh(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var u=s.context,h=n.contextType;typeof h=="object"&&h!==null?h=At(h):(h=lt(n)?br:Ye.current,h=Si(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==h)&&ap(e,s,r,h),Mn=!1;var y=e.memoizedState;s.state=y,nl(e,r,s,i),u=e.memoizedState,l!==r||y!==u||at.current||Mn?(typeof f=="function"&&(nh(e,n,f,r),u=e.memoizedState),(l=Mn||sp(e,n,l,r,y,u,h))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=h,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,uv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:bt(e.type,l),s.props=h,p=e.pendingProps,y=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=At(u):(u=lt(n)?br:Ye.current,u=Si(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||y!==u)&&ap(e,s,r,u),Mn=!1,y=e.memoizedState,s.state=y,nl(e,r,s,i);var C=e.memoizedState;l!==p||y!==C||at.current||Mn?(typeof k=="function"&&(nh(e,n,k,r),C=e.memoizedState),(h=Mn||sp(e,n,h,r,y,C,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,C,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,C,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),s.props=r,s.state=C,s.context=u,r=h):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return sh(t,e,n,r,o,i)}function sh(t,e,n,r,i,o){Mv(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Jm(e,n,!1),Tn(t,e,o);r=e.stateNode,g1.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ai(e,t.child,null,o),e.child=Ai(e,null,l,o)):et(t,e,l,o),e.memoizedState=r.state,i&&Jm(e,n,!0),e.child}function Lv(t){var e=t.stateNode;e.pendingContext?Xm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xm(t,e.context,!1),dd(t,e.containerInfo)}function mp(t,e,n,r,i){return ki(),sd(i),e.flags|=256,et(t,e,n,r),e.child}var ah={dehydrated:null,treeContext:null,retryLane:0};function lh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vv(t,e,n){var r=e.pendingProps,i=me.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(me,i&1),t===null)return eh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Hl(s,r,0,null),t=Cr(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=lh(n),e.memoizedState=ah,t):_d(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return y1(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Xn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Xn(l,o):(o=Cr(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?lh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=ah,r}return o=t.child,t=o.sibling,r=Xn(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _d(t,e){return e=Hl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ua(t,e,n,r){return r!==null&&sd(r),Ai(e,t.child,null,n),t=_d(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function y1(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=sc(Error(F(422))),ua(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Hl({mode:"visible",children:r.children},i,0,null),o=Cr(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ai(e,t.child,null,s),e.child.memoizedState=lh(s),e.memoizedState=ah,o);if(!(e.mode&1))return ua(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(F(419)),r=sc(o,r,void 0),ua(t,e,s,r)}if(l=(s&t.childLanes)!==0,st||l){if(r=xe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,In(t,i),Vt(r,t,i,-1))}return Ad(),r=sc(Error(F(421))),ua(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=b1.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,mt=Kn(i.nextSibling),pt=e,he=!0,xt=null,t!==null&&(Et[It++]=cn,Et[It++]=hn,Et[It++]=Nr,cn=t.id,hn=t.overflow,Nr=e),e=_d(e,r.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),th(t.return,e,n)}function ac(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fv(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(et(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ac(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ac(e,!0,n,null,o);break;case"together":ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function v1(t,e,n){switch(e.tag){case 3:Lv(e),ki();break;case 5:cv(e);break;case 1:lt(e.type)&&Xa(e);break;case 4:dd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(el,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?Vv(t,e,n):(se(me,me.current&1),t=Tn(t,e,n),t!==null?t.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,Dv(t,e,n)}return Tn(t,e,n)}var Uv,uh,jv,Bv;Uv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uh=function(){};jv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tr(Kt.current);var o=null;switch(n){case"input":i=Nc(t,i),r=Nc(t,r),o=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":i=Dc(t,i),r=Dc(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qa)}Lc(n,r);var s;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Bo.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ue("scroll",t),o||l===u||(o=[])):(o=o||[]).push(h,u))}n&&(o=o||[]).push("style",n);var h=o;(e.updateQueue=h)&&(e.flags|=4)}};Bv=function(t,e,n,r){n!==r&&(e.flags|=4)};function fo(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function w1(t,e,n){var r=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return lt(e.type)&&Ya(),He(e),null;case 3:return r=e.stateNode,Ci(),ce(at),ce(Ye),md(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xt!==null&&(yh(xt),xt=null))),uh(t,e),He(e),null;case 5:fd(e);var i=Tr(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)jv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return He(e),null}if(t=Tr(Kt.current),aa(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Wt]=e,r[Xo]=o,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<Io.length;i++)ue(Io[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Sm(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":Am(r,o),ue("invalid",r)}Lc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&sa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&sa(r.textContent,l,t),i=["children",""+l]):Bo.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ue("scroll",r)}switch(n){case"input":Js(r),km(r,o,!0);break;case"textarea":Js(r),Cm(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=py(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Wt]=e,t[Xo]=r,Uv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Vc(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<Io.length;i++)ue(Io[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Sm(t,r),i=Nc(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Am(t,r),i=Dc(t,r),ue("invalid",t);break;default:i=r}Lc(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?vy(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gy(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$o(t,u):typeof u=="number"&&$o(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bo.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ue("scroll",t):u!=null&&Hh(t,o,u,s))}switch(n){case"input":Js(t),km(t,r,!1);break;case"textarea":Js(t),Cm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+nr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?fi(t,!!r.multiple,o,!1):r.defaultValue!=null&&fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)Bv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Tr(Zo.current),Tr(Kt.current),aa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(o=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return He(e),null;case 13:if(ce(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&mt!==null&&e.mode&1&&!(e.flags&128))ov(),ki(),e.flags|=98560,o=!1;else if(o=aa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(F(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[Wt]=e}else ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),o=!1}else xt!==null&&(yh(xt),xt=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Ce===0&&(Ce=3):Ad())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return Ci(),uh(t,e),t===null&&Qo(e.stateNode.containerInfo),He(e),null;case 10:return ud(e.type._context),He(e),null;case 17:return lt(e.type)&&Ya(),He(e),null;case 19:if(ce(me),o=e.memoizedState,o===null)return He(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)fo(o,!1);else{if(Ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=rl(t),s!==null){for(e.flags|=128,fo(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(me,me.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ie()>Ri&&(e.flags|=128,r=!0,fo(o,!1),e.lanes=4194304)}else{if(!r)if(t=rl(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!he)return He(e),null}else 2*Ie()-o.renderingStartTime>Ri&&n!==1073741824&&(e.flags|=128,r=!0,fo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ie(),e.sibling=null,n=me.current,se(me,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return kd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ft&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function _1(t,e){switch(od(e),e.tag){case 1:return lt(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ci(),ce(at),ce(Ye),md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fd(e),null;case 13:if(ce(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(me),null;case 4:return Ci(),null;case 10:return ud(e.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var ca=!1,Ke=!1,E1=typeof WeakSet=="function"?WeakSet:Set,z=null;function ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function ch(t,e,n){try{n()}catch(r){we(t,e,r)}}var gp=!1;function I1(t,e){if(Kc=qa,t=qy(),rd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,h=0,f=0,p=t,y=null;t:for(;;){for(var k;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(k=p.firstChild)!==null;)y=p,p=k;for(;;){if(p===t)break t;if(y===n&&++h===i&&(l=s),y===o&&++f===r&&(u=s),(k=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gc={focusedElem:t,selectionRange:n},qa=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,D=C.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?N:bt(e.type,N),D);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(x){we(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return C=gp,gp=!1,C}function xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&ch(e,n,o)}i=i.next}while(i!==r)}}function $l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $v(t){var e=t.alternate;e!==null&&(t.alternate=null,$v(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[Xo],delete e[Xc],delete e[i1],delete e[o1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zv(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qa));else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}function fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}var De=null,Nt=!1;function xn(t,e,n){for(n=n.child;n!==null;)Hv(t,e,n),n=n.sibling}function Hv(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:Ke||ci(n,e);case 6:var r=De,i=Nt;De=null,xn(t,e,n),De=r,Nt=i,De!==null&&(Nt?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Nt?(t=De,n=n.stateNode,t.nodeType===8?ec(t.parentNode,n):t.nodeType===1&&ec(t,n),qo(t)):ec(De,n.stateNode));break;case 4:r=De,i=Nt,De=n.stateNode.containerInfo,Nt=!0,xn(t,e,n),De=r,Nt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ch(n,e,s),i=i.next}while(i!==r)}xn(t,e,n);break;case 1:if(!Ke&&(ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,e,l)}xn(t,e,n);break;case 21:xn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,xn(t,e,n),Ke=r):xn(t,e,n);break;default:xn(t,e,n)}}function vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new E1),e.forEach(function(r){var i=N1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:De=l.stateNode,Nt=!1;break e;case 3:De=l.stateNode.containerInfo,Nt=!0;break e;case 4:De=l.stateNode.containerInfo,Nt=!0;break e}l=l.return}if(De===null)throw Error(F(160));Hv(o,s,i),De=null,Nt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){we(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wv(e,t),e=e.sibling}function Wv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rt(e,t),zt(t),r&4){try{xo(3,t,t.return),$l(3,t)}catch(N){we(t,t.return,N)}try{xo(5,t,t.return)}catch(N){we(t,t.return,N)}}break;case 1:Rt(e,t),zt(t),r&512&&n!==null&&ci(n,n.return);break;case 5:if(Rt(e,t),zt(t),r&512&&n!==null&&ci(n,n.return),t.flags&32){var i=t.stateNode;try{$o(i,"")}catch(N){we(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&fy(i,o),Vc(l,s);var h=Vc(l,o);for(s=0;s<u.length;s+=2){var f=u[s],p=u[s+1];f==="style"?vy(i,p):f==="dangerouslySetInnerHTML"?gy(i,p):f==="children"?$o(i,p):Hh(i,f,p,h)}switch(l){case"input":xc(i,o);break;case"textarea":my(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?fi(i,!!o.multiple,k,!1):y!==!!o.multiple&&(o.defaultValue!=null?fi(i,!!o.multiple,o.defaultValue,!0):fi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xo]=o}catch(N){we(t,t.return,N)}}break;case 6:if(Rt(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(N){we(t,t.return,N)}}break;case 3:if(Rt(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(N){we(t,t.return,N)}break;case 4:Rt(e,t),zt(t);break;case 13:Rt(e,t),zt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Td=Ie())),r&4&&vp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(h=Ke)||f,Rt(e,t),Ke=h):Rt(e,t),zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(z=t,f=t.child;f!==null;){for(p=z=f;z!==null;){switch(y=z,k=y.child,y.tag){case 0:case 11:case 14:case 15:xo(4,y,y.return);break;case 1:ci(y,y.return);var C=y.stateNode;if(typeof C.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){we(r,n,N)}}break;case 5:ci(y,y.return);break;case 22:if(y.memoizedState!==null){_p(p);continue}}k!==null?(k.return=y,z=k):_p(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=yy("display",s))}catch(N){we(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){we(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Rt(e,t),zt(t),r&4&&vp(t);break;case 21:break;default:Rt(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($o(i,""),r.flags&=-33);var o=yp(t);fh(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=yp(t);dh(t,l,s);break;default:throw Error(F(161))}}catch(u){we(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function T1(t,e,n){z=t,qv(t)}function qv(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ca;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ke;l=ca;var h=Ke;if(ca=s,(Ke=u)&&!h)for(z=i;z!==null;)s=z,u=s.child,s.tag===22&&s.memoizedState!==null?Ep(i):u!==null?(u.return=s,z=u):Ep(i);for(;o!==null;)z=o,qv(o),o=o.sibling;z=i,ca=l,Ke=h}wp(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):wp(t)}}function wp(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||$l(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&rp(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rp(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&qo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ke||e.flags&512&&hh(e)}catch(y){we(e,e.return,y)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function _p(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function Ep(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$l(4,e)}catch(u){we(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){we(e,i,u)}}var o=e.return;try{hh(e)}catch(u){we(e,o,u)}break;case 5:var s=e.return;try{hh(e)}catch(u){we(e,s,u)}}}catch(u){we(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var S1=Math.ceil,sl=Cn.ReactCurrentDispatcher,Ed=Cn.ReactCurrentOwner,St=Cn.ReactCurrentBatchConfig,ee=0,xe=null,ke=null,Fe=0,ft=0,hi=lr(0),Ce=0,rs=null,Or=0,zl=0,Id=0,Oo=null,ot=null,Td=0,Ri=1/0,ln=null,al=!1,mh=null,Qn=null,ha=!1,zn=null,ll=0,Do=0,ph=null,Ra=-1,ba=0;function tt(){return ee&6?Ie():Ra!==-1?Ra:Ra=Ie()}function Yn(t){return t.mode&1?ee&2&&Fe!==0?Fe&-Fe:a1.transition!==null?(ba===0&&(ba=by()),ba):(t=ne,t!==0||(t=window.event,t=t===void 0?16:Vy(t.type)),t):1}function Vt(t,e,n,r){if(50<Do)throw Do=0,ph=null,Error(F(185));gs(t,n,r),(!(ee&2)||t!==xe)&&(t===xe&&(!(ee&2)&&(zl|=n),Ce===4&&Vn(t,Fe)),ut(t,r),n===1&&ee===0&&!(e.mode&1)&&(Ri=Ie()+500,Ul&&ur()))}function ut(t,e){var n=t.callbackNode;aI(t,e);var r=Wa(t,t===xe?Fe:0);if(r===0)n!==null&&bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bm(n),e===1)t.tag===0?s1(Ip.bind(null,t)):nv(Ip.bind(null,t)),n1(function(){!(ee&6)&&ur()}),n=null;else{switch(Ny(r)){case 1:n=Qh;break;case 4:n=Py;break;case 16:n=Ha;break;case 536870912:n=Ry;break;default:n=Ha}n=ew(n,Kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kv(t,e){if(Ra=-1,ba=0,ee&6)throw Error(F(327));var n=t.callbackNode;if(vi()&&t.callbackNode!==n)return null;var r=Wa(t,t===xe?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ul(t,r);else{e=r;var i=ee;ee|=2;var o=Qv();(xe!==t||Fe!==e)&&(ln=null,Ri=Ie()+500,Ar(t,e));do try{C1();break}catch(l){Gv(t,l)}while(1);ld(),sl.current=o,ee=i,ke!==null?e=0:(xe=null,Fe=0,e=Ce)}if(e!==0){if(e===2&&(i=$c(t),i!==0&&(r=i,e=gh(t,i))),e===1)throw n=rs,Ar(t,0),Vn(t,r),ut(t,Ie()),n;if(e===6)Vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!k1(i)&&(e=ul(t,r),e===2&&(o=$c(t),o!==0&&(r=o,e=gh(t,o))),e===1))throw n=rs,Ar(t,0),Vn(t,r),ut(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:yr(t,ot,ln);break;case 3:if(Vn(t,r),(r&130023424)===r&&(e=Td+500-Ie(),10<e)){if(Wa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yc(yr.bind(null,t,ot,ln),e);break}yr(t,ot,ln);break;case 4:if(Vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Lt(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S1(r/1960))-r,10<r){t.timeoutHandle=Yc(yr.bind(null,t,ot,ln),r);break}yr(t,ot,ln);break;case 5:yr(t,ot,ln);break;default:throw Error(F(329))}}}return ut(t,Ie()),t.callbackNode===n?Kv.bind(null,t):null}function gh(t,e){var n=Oo;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=ul(t,e),t!==2&&(e=ot,ot=n,e!==null&&yh(e)),t}function yh(t){ot===null?ot=t:ot.push.apply(ot,t)}function k1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ft(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vn(t,e){for(e&=~Id,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Lt(e),r=1<<n;t[n]=-1,e&=~r}}function Ip(t){if(ee&6)throw Error(F(327));vi();var e=Wa(t,0);if(!(e&1))return ut(t,Ie()),null;var n=ul(t,e);if(t.tag!==0&&n===2){var r=$c(t);r!==0&&(e=r,n=gh(t,r))}if(n===1)throw n=rs,Ar(t,0),Vn(t,e),ut(t,Ie()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,ot,ln),ut(t,Ie()),null}function Sd(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Ri=Ie()+500,Ul&&ur())}}function Dr(t){zn!==null&&zn.tag===0&&!(ee&6)&&vi();var e=ee;ee|=1;var n=St.transition,r=ne;try{if(St.transition=null,ne=1,t)return t()}finally{ne=r,St.transition=n,ee=e,!(ee&6)&&ur()}}function kd(){ft=hi.current,ce(hi)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,t1(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(od(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:Ci(),ce(at),ce(Ye),md();break;case 5:fd(r);break;case 4:Ci();break;case 13:ce(me);break;case 19:ce(me);break;case 10:ud(r.type._context);break;case 22:case 23:kd()}n=n.return}if(xe=t,ke=t=Xn(t.current,null),Fe=ft=e,Ce=0,rs=null,Id=zl=Or=0,ot=Oo=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ir=null}return t}function Gv(t,e){do{var n=ke;try{if(ld(),Aa.current=ol,il){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}il=!1}if(xr=0,be=Ae=pe=null,No=!1,es=0,Ed.current=null,n===null||n.return===null){Ce=1,rs=e,ke=null;break}e:{var o=t,s=n.return,l=n,u=e;if(e=Fe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=up(s);if(k!==null){k.flags&=-257,cp(k,s,l,o,e),k.mode&1&&lp(o,h,e),e=k,u=h;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){lp(o,h,e),Ad();break e}u=Error(F(426))}}else if(he&&l.mode&1){var D=up(s);if(D!==null){!(D.flags&65536)&&(D.flags|=256),cp(D,s,l,o,e),sd(Pi(u,l));break e}}o=u=Pi(u,l),Ce!==4&&(Ce=2),Oo===null?Oo=[o]:Oo.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var _=Nv(o,u,e);np(o,_);break e;case 1:l=u;var v=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Qn===null||!Qn.has(w)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=xv(o,l,e);np(o,x);break e}}o=o.return}while(o!==null)}Xv(n)}catch(V){e=V,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function Qv(){var t=sl.current;return sl.current=ol,t===null?ol:t}function Ad(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),xe===null||!(Or&268435455)&&!(zl&268435455)||Vn(xe,Fe)}function ul(t,e){var n=ee;ee|=2;var r=Qv();(xe!==t||Fe!==e)&&(ln=null,Ar(t,e));do try{A1();break}catch(i){Gv(t,i)}while(1);if(ld(),ee=n,sl.current=r,ke!==null)throw Error(F(261));return xe=null,Fe=0,Ce}function A1(){for(;ke!==null;)Yv(ke)}function C1(){for(;ke!==null&&!JE();)Yv(ke)}function Yv(t){var e=Zv(t.alternate,t,ft);t.memoizedProps=t.pendingProps,e===null?Xv(t):ke=e,Ed.current=null}function Xv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_1(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ce=6,ke=null;return}}else if(n=w1(n,e,ft),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Ce===0&&(Ce=5)}function yr(t,e,n){var r=ne,i=St.transition;try{St.transition=null,ne=1,P1(t,e,n,r)}finally{St.transition=i,ne=r}return null}function P1(t,e,n,r){do vi();while(zn!==null);if(ee&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(lI(t,o),t===xe&&(ke=xe=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,ew(Ha,function(){return vi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=St.transition,St.transition=null;var s=ne;ne=1;var l=ee;ee|=4,Ed.current=null,I1(t,n),Wv(n,t),GI(Gc),qa=!!Kc,Gc=Kc=null,t.current=n,T1(n),ZE(),ee=l,ne=s,St.transition=o}else t.current=n;if(ha&&(ha=!1,zn=t,ll=i),o=t.pendingLanes,o===0&&(Qn=null),nI(n.stateNode),ut(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(al)throw al=!1,t=mh,mh=null,t;return ll&1&&t.tag!==0&&vi(),o=t.pendingLanes,o&1?t===ph?Do++:(Do=0,ph=t):Do=0,ur(),null}function vi(){if(zn!==null){var t=Ny(ll),e=St.transition,n=ne;try{if(St.transition=null,ne=16>t?16:t,zn===null)var r=!1;else{if(t=zn,zn=null,ll=0,ee&6)throw Error(F(331));var i=ee;for(ee|=4,z=t.current;z!==null;){var o=z,s=o.child;if(z.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(z=h;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:xo(8,f,o)}var p=f.child;if(p!==null)p.return=f,z=p;else for(;z!==null;){f=z;var y=f.sibling,k=f.return;if($v(f),f===h){z=null;break}if(y!==null){y.return=k,z=y;break}z=k}}}var C=o.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,z=s;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xo(9,o,o.return)}var _=o.sibling;if(_!==null){_.return=o.return,z=_;break e}z=o.return}}var v=t.current;for(z=v;z!==null;){s=z;var w=s.child;if(s.subtreeFlags&2064&&w!==null)w.return=s,z=w;else e:for(s=v;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$l(9,l)}}catch(V){we(l,l.return,V)}if(l===s){z=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,z=x;break e}z=l.return}}if(ee=i,ur(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Dl,t)}catch{}r=!0}return r}finally{ne=n,St.transition=e}}return!1}function Tp(t,e,n){e=Pi(n,e),e=Nv(t,e,1),t=Gn(t,e,1),e=tt(),t!==null&&(gs(t,1,e),ut(t,e))}function we(t,e,n){if(t.tag===3)Tp(t,t,n);else for(;e!==null;){if(e.tag===3){Tp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){t=Pi(n,t),t=xv(e,t,1),e=Gn(e,t,1),t=tt(),e!==null&&(gs(e,1,t),ut(e,t));break}}e=e.return}}function R1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,xe===t&&(Fe&n)===n&&(Ce===4||Ce===3&&(Fe&130023424)===Fe&&500>Ie()-Td?Ar(t,0):Id|=n),ut(t,e)}function Jv(t,e){e===0&&(t.mode&1?(e=ta,ta<<=1,!(ta&130023424)&&(ta=4194304)):e=1);var n=tt();t=In(t,e),t!==null&&(gs(t,e,n),ut(t,n))}function b1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jv(t,n)}function N1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Jv(t,n)}var Zv;Zv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)st=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return st=!1,v1(t,e,n);st=!!(t.flags&131072)}else st=!1,he&&e.flags&1048576&&rv(e,Za,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pa(t,e),t=e.pendingProps;var i=Si(e,Ye.current);yi(e,n),i=gd(null,e,r,t,i,n);var o=yd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,lt(r)?(o=!0,Xa(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hd(e),i.updater=Bl,e.stateNode=i,i._reactInternals=e,rh(e,r,t,n),e=sh(null,e,r,!0,o,n)):(e.tag=0,he&&o&&id(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=O1(r),t=bt(r,t),i){case 0:e=oh(null,e,r,t,n);break e;case 1:e=fp(null,e,r,t,n);break e;case 11:e=hp(null,e,r,t,n);break e;case 14:e=dp(null,e,r,bt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),oh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),fp(t,e,r,i,n);case 3:e:{if(Lv(e),t===null)throw Error(F(387));r=e.pendingProps,o=e.memoizedState,i=o.element,uv(t,e),nl(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Pi(Error(F(423)),e),e=mp(t,e,r,n,i);break e}else if(r!==i){i=Pi(Error(F(424)),e),e=mp(t,e,r,n,i);break e}else for(mt=Kn(e.stateNode.containerInfo.firstChild),pt=e,he=!0,xt=null,n=av(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===i){e=Tn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return cv(e),t===null&&eh(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Qc(r,i)?s=null:o!==null&&Qc(r,o)&&(e.flags|=32),Mv(t,e),et(t,e,s,n),e.child;case 6:return t===null&&eh(e),null;case 13:return Vv(t,e,n);case 4:return dd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ai(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),hp(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,se(el,r._currentValue),r._currentValue=s,o!==null)if(Ft(o.value,s)){if(o.children===i.children&&!at.current){e=Tn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=gn(-1,n&-n),u.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),th(o.return,n,e),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(F(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),th(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yi(e,n),i=At(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),dp(t,e,r,i,n);case 15:return Ov(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Pa(t,e),e.tag=1,lt(r)?(t=!0,Xa(e)):t=!1,yi(e,n),bv(e,r,i),rh(e,r,i,n),sh(null,e,r,!0,t,n);case 19:return Fv(t,e,n);case 22:return Dv(t,e,n)}throw Error(F(156,e.tag))};function ew(t,e){return Cy(t,e)}function x1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,e,n,r){return new x1(t,e,n,r)}function Cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function O1(t){if(typeof t=="function")return Cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qh)return 11;if(t===Kh)return 14}return 2}function Xn(t,e){var n=t.alternate;return n===null?(n=Tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Cd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ti:return Cr(n.children,i,o,e);case Wh:s=8,i|=8;break;case Cc:return t=Tt(12,n,e,i|2),t.elementType=Cc,t.lanes=o,t;case Pc:return t=Tt(13,n,e,i),t.elementType=Pc,t.lanes=o,t;case Rc:return t=Tt(19,n,e,i),t.elementType=Rc,t.lanes=o,t;case cy:return Hl(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ly:s=10;break e;case uy:s=9;break e;case qh:s=11;break e;case Kh:s=14;break e;case Dn:s=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Tt(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Cr(t,e,n,r){return t=Tt(7,t,r,e),t.lanes=n,t}function Hl(t,e,n,r){return t=Tt(22,t,r,e),t.elementType=cy,t.lanes=n,t.stateNode={isHidden:!1},t}function lc(t,e,n){return t=Tt(6,t,null,e),t.lanes=n,t}function uc(t,e,n){return e=Tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function D1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zu(0),this.expirationTimes=zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pd(t,e,n,r,i,o,s,l,u){return t=new D1(t,e,n,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Tt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(o),t}function M1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tw(t){if(!t)return rr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(lt(n))return tv(t,n,e)}return e}function nw(t,e,n,r,i,o,s,l,u){return t=Pd(n,r,!0,t,i,o,s,l,u),t.context=tw(null),n=t.current,r=tt(),i=Yn(n),o=gn(r,i),o.callback=e??null,Gn(n,o,i),t.current.lanes=i,gs(t,i,r),ut(t,r),t}function Wl(t,e,n,r){var i=e.current,o=tt(),s=Yn(i);return n=tw(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Gn(i,e,s),t!==null&&(Vt(t,i,s,o),ka(t,i,s)),s}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rd(t,e){Sp(t,e),(t=t.alternate)&&Sp(t,e)}function L1(){return null}var rw=typeof reportError=="function"?reportError:function(t){console.error(t)};function bd(t){this._internalRoot=t}ql.prototype.render=bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Wl(t,e,null,null)};ql.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){Wl(null,t,null,null)}),e[En]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&Ly(t)}};function Nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kp(){}function V1(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=cl(s);o.call(h)}}var s=nw(e,r,t,0,null,!1,!1,"",kp);return t._reactRootContainer=s,t[En]=s.current,Qo(t.nodeType===8?t.parentNode:t),Dr(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=cl(u);l.call(h)}}var u=Pd(t,0,!1,null,null,!1,!1,"",kp);return t._reactRootContainer=u,t[En]=u.current,Qo(t.nodeType===8?t.parentNode:t),Dr(function(){Wl(e,u,n,r)}),u}function Gl(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=cl(s);l.call(u)}}Wl(e,s,t,i)}else s=V1(n,e,t,i,r);return cl(s)}xy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(Yh(e,n|1),ut(e,Ie()),!(ee&6)&&(Ri=Ie()+500,ur()))}break;case 13:Dr(function(){var r=In(t,1);if(r!==null){var i=tt();Vt(r,t,1,i)}}),Rd(t,1)}};Xh=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=tt();Vt(e,t,134217728,n)}Rd(t,134217728)}};Oy=function(t){if(t.tag===13){var e=Yn(t),n=In(t,e);if(n!==null){var r=tt();Vt(n,t,e,r)}Rd(t,e)}};Dy=function(){return ne};My=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};Uc=function(t,e,n){switch(e){case"input":if(xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Fl(r);if(!i)throw Error(F(90));dy(r),xc(r,i)}}}break;case"textarea":my(t,n);break;case"select":e=n.value,e!=null&&fi(t,!!n.multiple,e,!1)}};Ey=Sd;Iy=Dr;var F1={usingClientEntryPoint:!1,Events:[vs,oi,Fl,wy,_y,Sd]},mo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U1={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ky(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||L1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!da.isDisabled&&da.supportsFiber)try{Dl=da.inject(U1),qt=da}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F1;vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(e))throw Error(F(200));return M1(t,e,null,n)};vt.createRoot=function(t,e){if(!Nd(t))throw Error(F(299));var n=!1,r="",i=rw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pd(t,1,!1,null,null,n,!1,r,i),t[En]=e.current,Qo(t.nodeType===8?t.parentNode:t),new bd(e)};vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=ky(e),t=t===null?null:t.stateNode,t};vt.flushSync=function(t){return Dr(t)};vt.hydrate=function(t,e,n){if(!Kl(e))throw Error(F(200));return Gl(null,t,e,!0,n)};vt.hydrateRoot=function(t,e,n){if(!Nd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=rw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=nw(e,null,t,1,n??null,i,!1,o,s),t[En]=e.current,Qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ql(e)};vt.render=function(t,e,n){if(!Kl(e))throw Error(F(200));return Gl(null,t,e,!1,n)};vt.unmountComponentAtNode=function(t){if(!Kl(t))throw Error(F(40));return t._reactRootContainer?(Dr(function(){Gl(null,null,t,!1,function(){t._reactRootContainer=null,t[En]=null})}),!0):!1};vt.unstable_batchedUpdates=Sd;vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Kl(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Gl(t,e,n,!1,r)};vt.version="18.3.1-next-f1338f8080-20240426";function iw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iw)}catch(t){console.error(t)}}iw(),iy.exports=vt;var j1=iy.exports,Ap=j1;kc.createRoot=Ap.createRoot,kc.hydrateRoot=Ap.hydrateRoot;const B1="modulepreload",$1=function(t){return"/"+t},Cp={},z1=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=$1(o),o in Cp)return;Cp[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const p=i[f];if(p.href===o&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const h=document.createElement("link");if(h.rel=s?"stylesheet":B1,s||(h.as="script",h.crossOrigin=""),h.href=o,document.head.appendChild(h),s)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};var xd={};Object.defineProperty(xd,"__esModule",{value:!0});xd.parse=Y1;xd.serialize=X1;const H1=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,W1=/^[\u0021-\u003A\u003C-\u007E]*$/,q1=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,K1=/^[\u0020-\u003A\u003D-\u007E]*$/,G1=Object.prototype.toString,Q1=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function Y1(t,e){const n=new Q1,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||J1;let o=0;do{const s=t.indexOf("=",o);if(s===-1)break;const l=t.indexOf(";",o),u=l===-1?r:l;if(s>u){o=t.lastIndexOf(";",s-1)+1;continue}const h=Pp(t,o,s),f=Rp(t,s,h),p=t.slice(h,f);if(n[p]===void 0){let y=Pp(t,s+1,u),k=Rp(t,u,y);const C=i(t.slice(y,k));n[p]=C}o=u+1}while(o<r);return n}function Pp(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function Rp(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function X1(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!H1.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!W1.test(i))throw new TypeError(`argument val is invalid: ${e}`);let o=t+"="+i;if(!n)return o;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);o+="; Max-Age="+n.maxAge}if(n.domain){if(!q1.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);o+="; Domain="+n.domain}if(n.path){if(!K1.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);o+="; Path="+n.path}if(n.expires){if(!Z1(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);o+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.partitioned&&(o+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"none":o+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return o}function J1(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function Z1(t){return G1.call(t)==="[object Date]"}var bp="popstate";function eT(t={}){function e(r,i){let{pathname:o,search:s,hash:l}=r.location;return vh("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:is(i)}return nT(e,n,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Yt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tT(){return Math.random().toString(36).substring(2,10)}function Np(t,e){return{usr:t.state,key:t.key,idx:e}}function vh(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ui(e):e,state:n,key:e&&e.key||r||tT()}}function is({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ui(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function nT(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l="POP",u=null,h=f();h==null&&(h=0,s.replaceState({...s.state,idx:h},""));function f(){return(s.state||{idx:null}).idx}function p(){l="POP";let D=f(),_=D==null?null:D-h;h=D,u&&u({action:l,location:N.location,delta:_})}function y(D,_){l="PUSH";let v=vh(N.location,D,_);n&&n(v,D),h=f()+1;let w=Np(v,h),x=N.createHref(v);try{s.pushState(w,"",x)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(x)}o&&u&&u({action:l,location:N.location,delta:1})}function k(D,_){l="REPLACE";let v=vh(N.location,D,_);n&&n(v,D),h=f();let w=Np(v,h),x=N.createHref(v);s.replaceState(w,"",x),o&&u&&u({action:l,location:N.location,delta:0})}function C(D){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof D=="string"?D:is(D);return v=v.replace(/ $/,"%20"),ge(_,`No window.location.(origin|href) available to create URL for href: ${v}`),new URL(v,_)}let N={get action(){return l},get location(){return t(i,s)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(bp,p),u=D,()=>{i.removeEventListener(bp,p),u=null}},createHref(D){return e(i,D)},createURL:C,encodeLocation(D){let _=C(D);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:k,go(D){return s.go(D)}};return N}function ow(t,e,n="/"){return rT(t,e,n,!1)}function rT(t,e,n,r){let i=typeof e=="string"?Ui(e):e,o=Sn(i.pathname||"/",n);if(o==null)return null;let s=sw(t);iT(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let h=pT(o);l=fT(s[u],h,r)}return l}function sw(t,e=[],n=[],r=""){let i=(o,s,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(ge(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let h=yn([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(ge(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),sw(o.children,e,f,h)),!(o.path==null&&!o.index)&&e.push({path:h,score:hT(h,o.index),routesMeta:f})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let u of aw(o.path))i(o,s,u)}),e}function aw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=aw(r.join("/")),l=[];return l.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...s),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function iT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var oT=/^:[\w-]+$/,sT=3,aT=2,lT=1,uT=10,cT=-2,xp=t=>t==="*";function hT(t,e){let n=t.split("/"),r=n.length;return n.some(xp)&&(r+=cT),e&&(r+=aT),n.filter(i=>!xp(i)).reduce((i,o)=>i+(oT.test(o)?sT:o===""?lT:uT),r)}function dT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function fT(t,e,n=!1){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",p=hl({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),y=u.route;if(!p&&h&&n&&!r[r.length-1].route.index&&(p=hl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:yn([o,p.pathname]),pathnameBase:wT(yn([o,p.pathnameBase])),route:y}),p.pathnameBase!=="/"&&(o=yn([o,p.pathnameBase]))}return s}function hl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=mT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,{paramName:f,isOptional:p},y)=>{if(f==="*"){let C=l[y]||"";s=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const k=l[y];return p&&!k?h[f]=void 0:h[f]=(k||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:s,pattern:t}}function mT(t,e=!1,n=!0){Yt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function pT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Sn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function gT(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ui(t):t;return{pathname:n?n.startsWith("/")?n:yT(n,e):e,search:_T(r),hash:ET(i)}}function yT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cc(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lw(t){let e=vT(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function uw(t,e,n,r=!1){let i;typeof t=="string"?i=Ui(t):(i={...t},ge(!i.pathname||!i.pathname.includes("?"),cc("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),cc("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),cc("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let p=e.length-1;if(!r&&s.startsWith("..")){let y=s.split("/");for(;y[0]==="..";)y.shift(),p-=1;i.pathname=y.join("/")}l=p>=0?e[p]:"/"}let u=gT(i,l),h=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}var yn=t=>t.join("/").replace(/\/\/+/g,"/"),wT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_T=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ET=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function IT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var cw=["POST","PUT","PATCH","DELETE"];new Set(cw);var TT=["GET",...cw];new Set(TT);var ji=M.createContext(null);ji.displayName="DataRouter";var Ql=M.createContext(null);Ql.displayName="DataRouterState";var hw=M.createContext({isTransitioning:!1});hw.displayName="ViewTransition";var ST=M.createContext(new Map);ST.displayName="Fetchers";var kT=M.createContext(null);kT.displayName="Await";var en=M.createContext(null);en.displayName="Navigation";var _s=M.createContext(null);_s.displayName="Location";var Pn=M.createContext({outlet:null,matches:[],isDataRoute:!1});Pn.displayName="Route";var Od=M.createContext(null);Od.displayName="RouteError";function AT(t,{relative:e}={}){ge(Es(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=M.useContext(en),{hash:i,pathname:o,search:s}=Is(t,{relative:e}),l=o;return n!=="/"&&(l=o==="/"?n:yn([n,o])),r.createHref({pathname:l,search:s,hash:i})}function Es(){return M.useContext(_s)!=null}function zr(){return ge(Es(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(_s).location}var dw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fw(t){M.useContext(en).static||M.useLayoutEffect(t)}function mw(){let{isDataRoute:t}=M.useContext(Pn);return t?UT():CT()}function CT(){ge(Es(),"useNavigate() may be used only in the context of a <Router> component.");let t=M.useContext(ji),{basename:e,navigator:n}=M.useContext(en),{matches:r}=M.useContext(Pn),{pathname:i}=zr(),o=JSON.stringify(lw(r)),s=M.useRef(!1);return fw(()=>{s.current=!0}),M.useCallback((u,h={})=>{if(Yt(s.current,dw),!s.current)return;if(typeof u=="number"){n.go(u);return}let f=uw(u,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:yn([e,f.pathname])),(h.replace?n.replace:n.push)(f,h.state,h)},[e,n,o,i,t])}M.createContext(null);function Is(t,{relative:e}={}){let{matches:n}=M.useContext(Pn),{pathname:r}=zr(),i=JSON.stringify(lw(n));return M.useMemo(()=>uw(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function PT(t,e){return pw(t,e)}function pw(t,e,n,r){var v;ge(Es(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:o}=M.useContext(en),{matches:s}=M.useContext(Pn),l=s[s.length-1],u=l?l.params:{},h=l?l.pathname:"/",f=l?l.pathnameBase:"/",p=l&&l.route;{let w=p&&p.path||"";gw(h,!p||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let y=zr(),k;if(e){let w=typeof e=="string"?Ui(e):e;ge(f==="/"||((v=w.pathname)==null?void 0:v.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${w.pathname}" was given in the \`location\` prop.`),k=w}else k=y;let C=k.pathname||"/",N=C;if(f!=="/"){let w=f.replace(/^\//,"").split("/");N="/"+C.replace(/^\//,"").split("/").slice(w.length).join("/")}let D=!o&&n&&n.matches&&n.matches.length>0?n.matches:ow(t,{pathname:N});Yt(p||D!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),Yt(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=OT(D&&D.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:yn([f,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?f:yn([f,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&_?M.createElement(_s.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},_):_}function RT(){let t=FT(),e=IT(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:o},"ErrorBoundary")," or"," ",M.createElement("code",{style:o},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,s)}var bT=M.createElement(RT,null),NT=class extends M.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?M.createElement(Pn.Provider,{value:this.props.routeContext},M.createElement(Od.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xT({routeContext:t,match:e,children:n}){let r=M.useContext(ji);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),M.createElement(Pn.Provider,{value:t},n)}function OT(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,o=n==null?void 0:n.errors;if(o!=null){let u=i.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);ge(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let s=!1,l=-1;if(n)for(let u=0;u<i.length;u++){let h=i[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(l=u),h.route.id){let{loaderData:f,errors:p}=n,y=h.route.loader&&!f.hasOwnProperty(h.route.id)&&(!p||p[h.route.id]===void 0);if(h.route.lazy||y){s=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((u,h,f)=>{let p,y=!1,k=null,C=null;n&&(p=o&&h.route.id?o[h.route.id]:void 0,k=h.route.errorElement||bT,s&&(l<0&&f===0?(gw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,C=null):l===f&&(y=!0,C=h.route.hydrateFallbackElement||null)));let N=e.concat(i.slice(0,f+1)),D=()=>{let _;return p?_=k:y?_=C:h.route.Component?_=M.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=u,M.createElement(xT,{match:h,routeContext:{outlet:u,matches:N,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?M.createElement(NT,{location:n.location,revalidation:n.revalidation,component:k,error:p,children:D(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):D()},null)}function Dd(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function DT(t){let e=M.useContext(ji);return ge(e,Dd(t)),e}function MT(t){let e=M.useContext(Ql);return ge(e,Dd(t)),e}function LT(t){let e=M.useContext(Pn);return ge(e,Dd(t)),e}function Md(t){let e=LT(t),n=e.matches[e.matches.length-1];return ge(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function VT(){return Md("useRouteId")}function FT(){var r;let t=M.useContext(Od),e=MT("useRouteError"),n=Md("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function UT(){let{router:t}=DT("useNavigate"),e=Md("useNavigate"),n=M.useRef(!1);return fw(()=>{n.current=!0}),M.useCallback(async(i,o={})=>{Yt(n.current,dw),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...o}))},[t,e])}var Op={};function gw(t,e,n){!e&&!Op[t]&&(Op[t]=!0,Yt(!1,n))}M.memo(jT);function jT({routes:t,future:e,state:n}){return pw(t,void 0,n,e)}function vr(t){ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BT({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){ge(!Es(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=t.replace(/^\/*/,"/"),l=M.useMemo(()=>({basename:s,navigator:i,static:o,future:{}}),[s,i,o]);typeof n=="string"&&(n=Ui(n));let{pathname:u="/",search:h="",hash:f="",state:p=null,key:y="default"}=n,k=M.useMemo(()=>{let C=Sn(u,s);return C==null?null:{location:{pathname:C,search:h,hash:f,state:p,key:y},navigationType:r}},[s,u,h,f,p,y,r]);return Yt(k!=null,`<Router basename="${s}"> is not able to match the URL "${u}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:M.createElement(en.Provider,{value:l},M.createElement(_s.Provider,{children:e,value:k}))}function $T({children:t,location:e}){return PT(wh(t),e)}function wh(t,e=[]){let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let o=[...e,i];if(r.type===M.Fragment){n.push.apply(n,wh(r.props.children,o));return}ge(r.type===vr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=wh(r.props.children,o)),n.push(s)}),n}var xa="get",Oa="application/x-www-form-urlencoded";function Yl(t){return t!=null&&typeof t.tagName=="string"}function zT(t){return Yl(t)&&t.tagName.toLowerCase()==="button"}function HT(t){return Yl(t)&&t.tagName.toLowerCase()==="form"}function WT(t){return Yl(t)&&t.tagName.toLowerCase()==="input"}function qT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function KT(t,e){return t.button===0&&(!e||e==="_self")&&!qT(t)}var fa=null;function GT(){if(fa===null)try{new FormData(document.createElement("form"),0),fa=!1}catch{fa=!0}return fa}var QT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hc(t){return t!=null&&!QT.has(t)?(Yt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oa}"`),null):t}function YT(t,e){let n,r,i,o,s;if(HT(t)){let l=t.getAttribute("action");r=l?Sn(l,e):null,n=t.getAttribute("method")||xa,i=hc(t.getAttribute("enctype"))||Oa,o=new FormData(t)}else if(zT(t)||WT(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?Sn(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||xa,i=hc(t.getAttribute("formenctype"))||hc(l.getAttribute("enctype"))||Oa,o=new FormData(l,t),!GT()){let{name:h,type:f,value:p}=t;if(f==="image"){let y=h?`${h}.`:"";o.append(`${y}x`,"0"),o.append(`${y}y`,"0")}else h&&o.append(h,p)}}else{if(Yl(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=xa,r=null,i=Oa,s=t}return o&&i==="text/plain"&&(s=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:s}}function Ld(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function XT(t,e){if(t.id in e)return e[t.id];try{let n=await z1(()=>import(t.module),[]);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function JT(t){return t!=null&&typeof t.page=="string"}function ZT(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function eS(t,e,n){let r=await Promise.all(t.map(async i=>{let o=e.routes[i.route.id];if(o){let s=await XT(o,n);return s.links?s.links():[]}return[]}));return iS(r.flat(1).filter(ZT).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Dp(t,e,n,r,i,o){let s=(u,h)=>n[h]?u.route.id!==n[h].route.id:!0,l=(u,h)=>{var f;return n[h].pathname!==u.pathname||((f=n[h].route.path)==null?void 0:f.endsWith("*"))&&n[h].params["*"]!==u.params["*"]};return o==="assets"?e.filter((u,h)=>s(u,h)||l(u,h)):o==="data"?e.filter((u,h)=>{var p;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(s(u,h)||l(u,h))return!0;if(u.route.shouldRevalidate){let y=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function tS(t,e,{includeHydrateFallback:n}={}){return nS(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function nS(t){return[...new Set(t)]}function rS(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function iS(t,e){let n=new Set,r=new Set(e);return t.reduce((i,o)=>{if(e&&!JT(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let l=JSON.stringify(rS(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function oS(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&Sn(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function yw(){let t=M.useContext(ji);return Ld(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function sS(){let t=M.useContext(Ql);return Ld(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Vd=M.createContext(void 0);Vd.displayName="FrameworkContext";function vw(){let t=M.useContext(Vd);return Ld(t,"You must render this element inside a <HydratedRouter> element"),t}function aS(t,e){let n=M.useContext(Vd),[r,i]=M.useState(!1),[o,s]=M.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:h,onMouseLeave:f,onTouchStart:p}=e,y=M.useRef(null);M.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let N=_=>{_.forEach(v=>{s(v.isIntersecting)})},D=new IntersectionObserver(N,{threshold:.5});return y.current&&D.observe(y.current),()=>{D.disconnect()}}},[t]),M.useEffect(()=>{if(r){let N=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(N)}}},[r]);let k=()=>{i(!0)},C=()=>{i(!1),s(!1)};return n?t!=="intent"?[o,y,{}]:[o,y,{onFocus:po(l,k),onBlur:po(u,C),onMouseEnter:po(h,k),onMouseLeave:po(f,C),onTouchStart:po(p,k)}]:[!1,y,{}]}function po(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function lS({page:t,...e}){let{router:n}=yw(),r=M.useMemo(()=>ow(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?M.createElement(cS,{page:t,matches:r,...e}):null}function uS(t){let{manifest:e,routeModules:n}=vw(),[r,i]=M.useState([]);return M.useEffect(()=>{let o=!1;return eS(t,e,n).then(s=>{o||i(s)}),()=>{o=!0}},[t,e,n]),r}function cS({page:t,matches:e,...n}){let r=zr(),{manifest:i,routeModules:o}=vw(),{basename:s}=yw(),{loaderData:l,matches:u}=sS(),h=M.useMemo(()=>Dp(t,e,u,i,r,"data"),[t,e,u,i,r]),f=M.useMemo(()=>Dp(t,e,u,i,r,"assets"),[t,e,u,i,r]),p=M.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let C=new Set,N=!1;if(e.forEach(_=>{var w;let v=i.routes[_.route.id];!v||!v.hasLoader||(!h.some(x=>x.route.id===_.route.id)&&_.route.id in l&&((w=o[_.route.id])!=null&&w.shouldRevalidate)||v.hasClientLoader?N=!0:C.add(_.route.id))}),C.size===0)return[];let D=oS(t,s);return N&&C.size>0&&D.searchParams.set("_routes",e.filter(_=>C.has(_.route.id)).map(_=>_.route.id).join(",")),[D.pathname+D.search]},[s,l,r,i,h,e,t,o]),y=M.useMemo(()=>tS(f,i),[f,i]),k=uS(f);return M.createElement(M.Fragment,null,p.map(C=>M.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...n})),y.map(C=>M.createElement("link",{key:C,rel:"modulepreload",href:C,...n})),k.map(({key:C,link:N})=>M.createElement("link",{key:C,...N})))}function hS(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var ww=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ww&&(window.__reactRouterVersion="7.5.0")}catch{}function dS({basename:t,children:e,window:n}){let r=M.useRef();r.current==null&&(r.current=eT({window:n,v5Compat:!0}));let i=r.current,[o,s]=M.useState({action:i.action,location:i.location}),l=M.useCallback(u=>{M.startTransition(()=>s(u))},[s]);return M.useLayoutEffect(()=>i.listen(l),[i,l]),M.createElement(BT,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:i})}var _w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ew=M.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:s,state:l,target:u,to:h,preventScrollReset:f,viewTransition:p,...y},k){let{basename:C}=M.useContext(en),N=typeof h=="string"&&_w.test(h),D,_=!1;if(typeof h=="string"&&N&&(D=h,ww))try{let E=new URL(window.location.href),T=h.startsWith("//")?new URL(E.protocol+h):new URL(h),A=Sn(T.pathname,C);T.origin===E.origin&&A!=null?h=A+T.search+T.hash:_=!0}catch{Yt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=AT(h,{relative:i}),[w,x,V]=aS(r,y),j=pS(h,{replace:s,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function I(E){e&&e(E),E.defaultPrevented||j(E)}let g=M.createElement("a",{...y,...V,href:D||v,onClick:_||o?e:I,ref:hS(k,x),target:u,"data-discover":!N&&n==="render"?"true":void 0});return w&&!N?M.createElement(M.Fragment,null,g,M.createElement(lS,{page:v})):g});Ew.displayName="Link";var wr=M.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:s,viewTransition:l,children:u,...h},f){let p=Is(s,{relative:h.relative}),y=zr(),k=M.useContext(Ql),{navigator:C,basename:N}=M.useContext(en),D=k!=null&&_S(p)&&l===!0,_=C.encodeLocation?C.encodeLocation(p).pathname:p.pathname,v=y.pathname,w=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;n||(v=v.toLowerCase(),w=w?w.toLowerCase():null,_=_.toLowerCase()),w&&N&&(w=Sn(w,N)||w);const x=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let V=v===_||!i&&v.startsWith(_)&&v.charAt(x)==="/",j=w!=null&&(w===_||!i&&w.startsWith(_)&&w.charAt(_.length)==="/"),I={isActive:V,isPending:j,isTransitioning:D},g=V?e:void 0,E;typeof r=="function"?E=r(I):E=[r,V?"active":null,j?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let T=typeof o=="function"?o(I):o;return M.createElement(Ew,{...h,"aria-current":g,className:E,ref:f,style:T,to:s,viewTransition:l},typeof u=="function"?u(I):u)});wr.displayName="NavLink";var fS=M.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:o,method:s=xa,action:l,onSubmit:u,relative:h,preventScrollReset:f,viewTransition:p,...y},k)=>{let C=vS(),N=wS(l,{relative:h}),D=s.toLowerCase()==="get"?"get":"post",_=typeof l=="string"&&_w.test(l),v=w=>{if(u&&u(w),w.defaultPrevented)return;w.preventDefault();let x=w.nativeEvent.submitter,V=(x==null?void 0:x.getAttribute("formmethod"))||s;C(x||w.currentTarget,{fetcherKey:e,method:V,navigate:n,replace:i,state:o,relative:h,preventScrollReset:f,viewTransition:p})};return M.createElement("form",{ref:k,method:D,action:N,onSubmit:r?u:v,...y,"data-discover":!_&&t==="render"?"true":void 0})});fS.displayName="Form";function mS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Iw(t){let e=M.useContext(ji);return ge(e,mS(t)),e}function pS(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:s}={}){let l=mw(),u=zr(),h=Is(t,{relative:o});return M.useCallback(f=>{if(KT(f,e)){f.preventDefault();let p=n!==void 0?n:is(u)===is(h);l(t,{replace:p,state:r,preventScrollReset:i,relative:o,viewTransition:s})}},[u,l,h,n,r,e,t,i,o,s])}var gS=0,yS=()=>`__${String(++gS)}__`;function vS(){let{router:t}=Iw("useSubmit"),{basename:e}=M.useContext(en),n=VT();return M.useCallback(async(r,i={})=>{let{action:o,method:s,encType:l,formData:u,body:h}=YT(r,e);if(i.navigate===!1){let f=i.fetcherKey||yS();await t.fetch(f,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:u,body:h,formMethod:i.method||s,formEncType:i.encType||l,flushSync:i.flushSync})}else await t.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:u,body:h,formMethod:i.method||s,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function wS(t,{relative:e}={}){let{basename:n}=M.useContext(en),r=M.useContext(Pn);ge(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...Is(t||".",{relative:e})},s=zr();if(t==null){o.search=s.search;let l=new URLSearchParams(o.search),u=l.getAll("index");if(u.some(f=>f==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();o.search=f?`?${f}`:""}}return(!t||t===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:yn([n,o.pathname])),is(o)}function _S(t,e={}){let n=M.useContext(hw);ge(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Iw("useViewTransitionState"),i=Is(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=Sn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Sn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return hl(i.pathname,s)!=null||hl(i.pathname,o)!=null}new TextEncoder;function ES(){const t=mw();return P.createElement("div",{className:"homepage"},P.createElement("section",{className:"hero"},P.createElement("div",{className:"hero-text"},P.createElement("h1",null,"Welcome to Menstrual Voices"),P.createElement("p",null,"Read, share, and learn about menstruation without stigma."),P.createElement("div",{className:"hero-buttons"},P.createElement("button",{onClick:()=>t("/stories")},"📚 Explore Stories"),P.createElement("button",{onClick:()=>t("/submit")},"✍️ Share Your Experience"))),P.createElement("img",{src:"img.jpg",alt:"Illustration",className:"hero-img"})),P.createElement("section",{className:"highlights"},P.createElement("h2",null,"What You Can Do Here"),P.createElement("div",{className:"features"},P.createElement("div",{className:"feature"},P.createElement("h3",null,"📖 Read Real Stories"),P.createElement("p",null,"Discover stories from girls and women across India and how they face menstrual stigma.")),P.createElement("div",{className:"feature"},P.createElement("h3",null,"🗣️ Share Your Journey"),P.createElement("p",null,"Your voice matters. Share your experience and help normalize conversations around periods.")),P.createElement("div",{className:"feature"},P.createElement("h3",null,"💡 Get Educated"),P.createElement("p",null,"Understand the biology, myths, and truths about the menstrual cycle in a clear and simple way.")))),P.createElement("section",{className:"about"},P.createElement("h2",null,"Our Mission"),P.createElement("p",null,"Menstrual Voices is a community-driven platform that brings hidden stories to light and aims to break taboos around menstruation through empathy and education.")))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Tw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Sw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=o>>2,p=(o&3)<<4|l>>4;let y=(l&15)<<2|h>>6,k=h&63;u||(k=64,s||(y=64)),r.push(n[f],n[p],n[y],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||h==null||p==null)throw new TS;const y=o<<2|l>>4;if(r.push(y),h!==64){const k=l<<4&240|h>>2;if(r.push(k),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SS=function(t){const e=Tw(t);return Sw.encodeByteArray(e,!0)},dl=function(t){return SS(t).replace(/\./g,"")},kw=function(t){try{return Sw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AS=()=>kS().__FIREBASE_DEFAULTS__,CS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kw(t[1]);return e&&JSON.parse(e)},Xl=()=>{try{return AS()||CS()||PS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Aw=t=>{var e,n;return(n=(e=Xl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RS=t=>{const e=Aw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cw=()=>{var t;return(t=Xl())===null||t===void 0?void 0:t.config},Pw=t=>{var e;return(e=Xl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function NS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[dl(JSON.stringify(n)),dl(JSON.stringify(s)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function OS(){var t;const e=(t=Xl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LS(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VS(){return!OS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bw(){try{return typeof indexedDB=="object"}catch{return!1}}function Nw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function FS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=US,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?jS(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Bt(i,l,r)}}function jS(t,e){return t.replace(BS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BS=/\{\$([^}]+)}/g;function $S(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function os(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Mp(o)&&Mp(s)){if(!os(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function To(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function So(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zS(t,e){const n=new HS(t,e);return n.subscribe.bind(n)}class HS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=dc),i.error===void 0&&(i.error=dc),i.complete===void 0&&(i.complete=dc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dc(){}/**
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
 */const qS=1e3,KS=2,GS=4*60*60*1e3,QS=.5;function Lp(t,e=qS,n=KS){const r=e*Math.pow(n,t),i=Math.round(QS*r*(Math.random()-.5)*2);return Math.min(GS,r+i)}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Ut{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _r="[DEFAULT]";/**
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
 */class YS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JS(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XS(t){return t===_r?void 0:t}function JS(t){return t.instantiationMode==="EAGER"}/**
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
 */class ZS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const ek={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},tk=X.INFO,nk={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},rk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=tk,this._logHandler=rk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const ik=(t,e)=>e.some(n=>t instanceof n);let Vp,Fp;function ok(){return Vp||(Vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sk(){return Fp||(Fp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xw=new WeakMap,_h=new WeakMap,Ow=new WeakMap,fc=new WeakMap,Fd=new WeakMap;function ak(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Jn(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&xw.set(n,t)}).catch(()=>{}),Fd.set(e,t),e}function lk(t){if(_h.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});_h.set(t,e)}let Eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ow.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uk(t){Eh=t(Eh)}function ck(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mc(this),e,...n);return Ow.set(r,e.sort?e.sort():[e]),Jn(r)}:sk().includes(t)?function(...e){return t.apply(mc(this),e),Jn(xw.get(this))}:function(...e){return Jn(t.apply(mc(this),e))}}function hk(t){return typeof t=="function"?ck(t):(t instanceof IDBTransaction&&lk(t),ik(t,ok())?new Proxy(t,Eh):t)}function Jn(t){if(t instanceof IDBRequest)return ak(t);if(fc.has(t))return fc.get(t);const e=hk(t);return e!==t&&(fc.set(t,e),Fd.set(e,t)),e}const mc=t=>Fd.get(t);function Dw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Jn(s);return r&&s.addEventListener("upgradeneeded",u=>{r(Jn(s.result),u.oldVersion,u.newVersion,Jn(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const dk=["get","getKey","getAll","getAllKeys","count"],fk=["put","add","delete","clear"],pc=new Map;function Up(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pc.get(e))return pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dk.includes(n)))return;const o=async function(s,...l){const u=this.transaction(s,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return pc.set(e,o),o}uk(t=>({...t,get:(e,n,r)=>Up(e,n)||t.get(e,n,r),has:(e,n)=>!!Up(e,n)||t.has(e,n)}));/**
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
 */class mk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ih="@firebase/app",jp="0.10.13";/**
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
 */const kn=new Jl("@firebase/app"),gk="@firebase/app-compat",yk="@firebase/analytics-compat",vk="@firebase/analytics",wk="@firebase/app-check-compat",_k="@firebase/app-check",Ek="@firebase/auth",Ik="@firebase/auth-compat",Tk="@firebase/database",Sk="@firebase/data-connect",kk="@firebase/database-compat",Ak="@firebase/functions",Ck="@firebase/functions-compat",Pk="@firebase/installations",Rk="@firebase/installations-compat",bk="@firebase/messaging",Nk="@firebase/messaging-compat",xk="@firebase/performance",Ok="@firebase/performance-compat",Dk="@firebase/remote-config",Mk="@firebase/remote-config-compat",Lk="@firebase/storage",Vk="@firebase/storage-compat",Fk="@firebase/firestore",Uk="@firebase/vertexai-preview",jk="@firebase/firestore-compat",Bk="firebase",$k="10.14.1";/**
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
 */const Th="[DEFAULT]",zk={[Ih]:"fire-core",[gk]:"fire-core-compat",[vk]:"fire-analytics",[yk]:"fire-analytics-compat",[_k]:"fire-app-check",[wk]:"fire-app-check-compat",[Ek]:"fire-auth",[Ik]:"fire-auth-compat",[Tk]:"fire-rtdb",[Sk]:"fire-data-connect",[kk]:"fire-rtdb-compat",[Ak]:"fire-fn",[Ck]:"fire-fn-compat",[Pk]:"fire-iid",[Rk]:"fire-iid-compat",[bk]:"fire-fcm",[Nk]:"fire-fcm-compat",[xk]:"fire-perf",[Ok]:"fire-perf-compat",[Dk]:"fire-rc",[Mk]:"fire-rc-compat",[Lk]:"fire-gcs",[Vk]:"fire-gcs-compat",[Fk]:"fire-fst",[jk]:"fire-fst-compat",[Uk]:"fire-vertex","fire-js":"fire-js",[Bk]:"fire-js-all"};/**
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
 */const fl=new Map,Hk=new Map,Sh=new Map;function Bp(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xt(t){const e=t.name;if(Sh.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Sh.set(e,t);for(const n of fl.values())Bp(n,t);for(const n of Hk.values())Bp(n,t);return!0}function Wr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t.settings!==void 0}/**
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
 */const Wk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Hr("app","Firebase",Wk);/**
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
 */class qk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Bi=$k;function Mw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Th,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=Cw()),!n)throw Zn.create("no-options");const o=fl.get(i);if(o){if(os(n,o.options)&&os(r,o.config))return o;throw Zn.create("duplicate-app",{appName:i})}const s=new ZS(i);for(const u of Sh.values())s.addComponent(u);const l=new qk(n,r,s);return fl.set(i,l),l}function Ud(t=Th){const e=fl.get(t);if(!e&&t===Th&&Cw())return Mw();if(!e)throw Zn.create("no-app",{appName:t});return e}function kt(t,e,n){var r;let i=(r=zk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(l.join(" "));return}Xt(new Ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Kk="firebase-heartbeat-database",Gk=1,ss="firebase-heartbeat-store";let gc=null;function Lw(){return gc||(gc=Dw(Kk,Gk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ss)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),gc}async function Qk(t){try{const n=(await Lw()).transaction(ss),r=await n.objectStore(ss).get(Vw(t));return await n.done,r}catch(e){if(e instanceof Bt)kn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function $p(t,e){try{const r=(await Lw()).transaction(ss,"readwrite");await r.objectStore(ss).put(e,Vw(t)),await r.done}catch(n){if(n instanceof Bt)kn.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function Vw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yk=1024,Xk=30*24*60*60*1e3;class Jk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=zp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=Xk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zp(),{heartbeatsToSend:r,unsentEntries:i}=Zk(this._heartbeatsCache.heartbeats),o=dl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return kn.warn(n),""}}}function zp(){return new Date().toISOString().substring(0,10)}function Zk(t,e=Yk){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Hp(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bw()?Nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $p(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hp(t){return dl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tA(t){Xt(new Ut("platform-logger",e=>new mk(e),"PRIVATE")),Xt(new Ut("heartbeat",e=>new Jk(e),"PRIVATE")),kt(Ih,jp,t),kt(Ih,jp,"esm2017"),kt("fire-js","")}tA("");var nA="firebase",rA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(nA,rA,"app");function jd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Fw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iA=Fw,Uw=new Hr("auth","Firebase",Fw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Jl("@firebase/auth");function oA(t,...e){ml.logLevel<=X.WARN&&ml.warn(`Auth (${Bi}): ${t}`,...e)}function Da(t,...e){ml.logLevel<=X.ERROR&&ml.error(`Auth (${Bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw Bd(t,...e)}function Gt(t,...e){return Bd(t,...e)}function jw(t,e,n){const r=Object.assign(Object.assign({},iA()),{[e]:n});return new Hr("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return jw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Uw.create(t,...e)}function W(t,e,...n){if(!t)throw Bd(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function An(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sA(){return Wp()==="http:"||Wp()==="https:"}function Wp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sA()||Rw()||"connection"in navigator)?navigator.onLine:!0}function lA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=xS()||MS()}get(){return aA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=new Ss(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,r,i={}){return $w(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const l=Ts(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},o);return DS()||(h.referrerPolicy="no-referrer"),Bw.fetch()(zw(t,t.config.apiHost,n,l),h)})}async function $w(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uA),e);try{const i=new dA(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ma(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw ma(t,"user-disabled",s);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jw(t,f,h);jt(t,f)}}catch(i){if(i instanceof Bt)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function Zl(t,e,n,r,i={}){const o=await cr(t,e,n,r,i);return"mfaPendingCredential"in o&&jt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function zw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$d(t.config,i):`${t.config.apiScheme}://${i}`}function hA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),cA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}function qp(t){return t!==void 0&&t.enterprise!==void 0}class fA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function mA(t,e){return cr(t,"GET","/v2/recaptchaConfig",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function Hw(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gA(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=zd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Mo(yc(i.auth_time)),issuedAtTime:Mo(yc(i.iat)),expirationTime:Mo(yc(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function yc(t){return Number(t)*1e3}function zd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const i=kw(n);return i?JSON.parse(i):(Da("Failed to decode base64 JWT payload"),null)}catch(i){return Da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Kp(t){const e=zd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&yA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mo(this.lastLoginAt),this.creationTime=Mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await as(t,Hw(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Ww(o.providerUserInfo):[],l=_A(t.providerData,s),u=t.isAnonymous,h=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ah(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function wA(t){const e=nt(t);await pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _A(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ww(t){return t.map(e=>{var{providerId:n}=e,r=jd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){const n=await $w(t,{},async()=>{const r=Ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=zw(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Bw.fetch()(s,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IA(t,e){return cr(t,"POST","/v2/accounts:revokeToken",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Kp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await EA(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new wi;return r&&(W(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(W(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ah(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await as(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gA(this,e)}reload(){return wA(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await as(this,pA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,k=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,C=(s=n.photoURL)!==null&&s!==void 0?s:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:w,emailVerified:x,isAnonymous:V,providerData:j,stsTokenManager:I}=n;W(w&&I,e,"internal-error");const g=wi.fromJSON(this.name,I);W(typeof w=="string",e,"internal-error"),On(p,e.name),On(y,e.name),W(typeof x=="boolean",e,"internal-error"),W(typeof V=="boolean",e,"internal-error"),On(k,e.name),On(C,e.name),On(N,e.name),On(D,e.name),On(_,e.name),On(v,e.name);const E=new mn({uid:w,auth:e,email:y,emailVerified:x,displayName:p,isAnonymous:V,photoURL:C,phoneNumber:k,tenantId:N,stsTokenManager:g,createdAt:_,lastLoginAt:v});return j&&Array.isArray(j)&&(E.providerData=j.map(T=>Object.assign({},T))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new wi;i.updateFromServerResponse(n);const o=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pl(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Ww(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new wi;l.updateFromIdToken(r);const u=new mn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ah(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new Map;function pn(t){An(t instanceof Function,"Expected a class definition");let e=Gp.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gp.set(t,e),e)}/**
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
 */class qw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qw.type="NONE";const Qp=qw;/**
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
 */function Ma(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ma(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ma("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _i(pn(Qp),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=i[0]||pn(Qp);const s=Ma(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(s);if(f){const p=mn._fromJSON(e,f);h!==o&&(l=p),o=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new _i(o,e,r):(o=u[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(s)}catch{}})),new _i(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jw(e))return"Blackberry";if(Zw(e))return"Webos";if(Gw(e))return"Safari";if((e.includes("chrome/")||Qw(e))&&!e.includes("edge/"))return"Chrome";if(Xw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kw(t=Xe()){return/firefox\//i.test(t)}function Gw(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qw(t=Xe()){return/crios\//i.test(t)}function Yw(t=Xe()){return/iemobile/i.test(t)}function Xw(t=Xe()){return/android/i.test(t)}function Jw(t=Xe()){return/blackberry/i.test(t)}function Zw(t=Xe()){return/webos/i.test(t)}function Hd(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TA(t=Xe()){var e;return Hd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SA(){return LS()&&document.documentMode===10}function e_(t=Xe()){return Hd(t)||Xw(t)||Zw(t)||Jw(t)||/windows phone/i.test(t)||Yw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t,e=[]){let n;switch(t){case"Browser":n=Yp(Xe());break;case"Worker":n=`${Yp(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bi}/${r}`}/**
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
 */class kA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,l)=>{try{const u=e(o);s(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function AA(t,e={}){return cr(t,"GET","/v2/passwordPolicy",qr(t,e))}/**
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
 */const CA=6;class PA{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:CA,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xp(this),this.idTokenSubscription=new Xp(this),this.beforeStateQueue=new kA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hw(this,{idToken:e}),r=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===l)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(er(this));const n=e?nt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AA(this),n=new PA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $i(t){return nt(t)}class Xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=zS(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bA(t){eu=t}function n_(t){return eu.loadJS(t)}function NA(){return eu.recaptchaEnterpriseScript}function xA(){return eu.gapiScript}function OA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const DA="recaptcha-enterprise",MA="NO_RECAPTCHA";class LA{constructor(e){this.type=DA,this.auth=$i(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{mA(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new fA(u);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,s(h.siteKey)}}).catch(u=>{l(u)})})}function i(o,s,l){const u=window.grecaptcha;qp(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(h=>{s(h)}).catch(()=>{s(MA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(l=>{if(!n&&qp(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=NA();u.length!==0&&(u+=l),n_(u).then(()=>{i(l,o,s)}).catch(h=>{s(h)})}}).catch(l=>{s(l)})})}}async function Jp(t,e,n,r=!1){const i=new LA(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Zp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Jp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Jp(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t,e){const n=Wr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(os(o,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function FA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UA(t,e,n){const r=$i(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=r_(e),{host:s,port:l}=jA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||BA()}function r_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jA(t){const e=r_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:eg(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:eg(s)}}}function eg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function $A(t,e){return cr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e){return Zl(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,e){return Zl(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function WA(t,e){return Zl(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Wd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ls(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ls(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zp(e,n,"signInWithPassword",zA);case"emailLink":return HA(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zp(e,r,"signUpPassword",$A);case"emailLink":return WA(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e){return Zl(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="http://localhost";class Mr extends Wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=jd(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Mr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:qA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ts(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GA(t){const e=To(So(t)).link,n=e?To(So(e)).deep_link_id:null,r=To(So(t)).deep_link_id;return(r?To(So(r)).link:null)||r||n||e||t}class qd{constructor(e){var n,r,i,o,s,l;const u=To(So(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=KA((i=u.mode)!==null&&i!==void 0?i:null);W(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=GA(e);try{return new qd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.providerId=zi.PROVIDER_ID}static credential(e,n){return ls._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qd.parseLink(n);return W(r,"argument-error"),ls._fromEmailAndCode(e,r.code,r.tenantId)}}zi.PROVIDER_ID="password";zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ks extends i_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ks{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends ks{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ks{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await mn._fromIdTokenResponse(e,r,i),s=tg(r);return new bi({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tg(r);return new bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function tg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Bt{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gl.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gl(e,n,r,i)}}function o_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?gl._fromErrorAndOperation(t,o,e,r):o})}async function QA(t,e,n=!1){const r=await as(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
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
 */async function YA(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(er(r));const i="reauthenticate";try{const o=await as(t,o_(r,i,e,t),n);W(o.idToken,r,"internal-error");const s=zd(o.idToken);W(s,r,"internal-error");const{sub:l}=s;return W(t.uid===l,r,"user-mismatch"),bi._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(t,e,n=!1){if(dn(t.app))return Promise.reject(er(t));const r="signIn",i=await o_(t,r,e),o=await bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function XA(t,e){return s_($i(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t){const e=$i(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ZA(t,e,n){return dn(t.app)?Promise.reject(er(t)):XA(nt(t),zi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&JA(t),r})}function eC(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function tC(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function nC(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}const yl="__sak";/**
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
 */class a_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=1e3,iC=10;class l_ extends a_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,l,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);SA()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}l_.type="LOCAL";const oC=l_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_ extends a_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u_.type="SESSION";const c_=u_;/**
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
 */function sC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async h=>h(n.origin,o)),u=await sC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,u)=>{const h=Kd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(y.data.response);break;default:clearTimeout(f),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function lC(t){Qt().location.href=t}/**
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
 */function h_(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function uC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hC(){return h_()?self:null}/**
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
 */const d_="firebaseLocalStorageDb",dC=1,vl="firebaseLocalStorage",f_="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nu(t,e){return t.transaction([vl],e?"readwrite":"readonly").objectStore(vl)}function fC(){const t=indexedDB.deleteDatabase(d_);return new As(t).toPromise()}function Ch(){const t=indexedDB.open(d_,dC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vl,{keyPath:f_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vl)?e(r):(r.close(),await fC(),e(await Ch()))})})}async function ng(t,e,n){const r=nu(t,!0).put({[f_]:e,value:n});return new As(r).toPromise()}async function mC(t,e){const n=nu(t,!1).get(e),r=await new As(n).toPromise();return r===void 0?null:r.value}function rg(t,e){const n=nu(t,!0).delete(e);return new As(n).toPromise()}const pC=800,gC=3;class m_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ch(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tu._getInstance(hC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uC(),!this.activeServiceWorker)return;this.sender=new aC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ch();return await ng(e,yl,"1"),await rg(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ng(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=nu(i,!1).getAll();return new As(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m_.type="LOCAL";const yC=m_;new Ss(3e4,6e4);/**
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
 */function vC(t,e){return e?pn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gd extends Wd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wC(t){return s_(t.auth,new Gd(t),t.bypassAuthState)}function _C(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),YA(n,new Gd(t),t.bypassAuthState)}async function EC(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),QA(n,new Gd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wC;case"linkViaPopup":case"linkViaRedirect":return EC;case"reauthViaPopup":case"reauthViaRedirect":return _C;default:jt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new Ss(2e3,1e4);class di extends p_{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IC.get())};e()}}di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="pendingRedirect",La=new Map;class SC extends p_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=La.get(this.auth._key());if(!e){try{const r=await kC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}La.set(this.auth._key(),e)}return this.bypassAuthState||La.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kC(t,e){const n=PC(e),r=CC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function AC(t,e){La.set(t._key(),e)}function CC(t){return pn(t._redirectPersistence)}function PC(t){return Ma(TC,t.config.apiKey,t.name)}async function RC(t,e,n=!1){if(dn(t.app))return Promise.reject(er(t));const r=$i(t),i=vC(r,e),s=await new SC(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=10*60*1e3;class NC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!g_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ig(e))}saveEventToCache(e){this.cachedEventUids.add(ig(e)),this.lastProcessedEventTime=Date.now()}}function ig(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function g_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MC=/^https?/;async function LC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OC(t);for(const n of e)try{if(VC(n))return}catch{}jt(t,"unauthorized-domain")}function VC(t){const e=kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!MC.test(n))return!1;if(DC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const FC=new Ss(3e4,6e4);function og(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UC(t){return new Promise((e,n)=>{var r,i,o;function s(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n(Gt(t,"network-request-failed"))},timeout:FC.get()})}if(!((i=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Qt().gapi)===null||o===void 0)&&o.load)s();else{const l=OA("iframefcb");return Qt()[l]=()=>{gapi.load?s():n(Gt(t,"network-request-failed"))},n_(`${xA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Va=null,e})}let Va=null;function jC(t){return Va=Va||UC(t),Va}/**
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
 */const BC=new Ss(5e3,15e3),$C="__/auth/iframe",zC="emulator/auth/iframe",HC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qC(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$d(e,zC):`https://${t.config.authDomain}/${$C}`,r={apiKey:e.apiKey,appName:t.name,v:Bi},i=WC.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ts(r).slice(1)}`}async function KC(t){const e=await jC(t),n=Qt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:qC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HC,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Gt(t,"network-request-failed"),l=Qt().setTimeout(()=>{o(s)},BC.get());function u(){Qt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
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
 */const GC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QC=500,YC=600,XC="_blank",JC="http://localhost";class sg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZC(t,e,n,r=QC,i=YC){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},GC),{width:r.toString(),height:i.toString(),top:o,left:s}),h=Xe().toLowerCase();n&&(l=Qw(h)?XC:n),Kw(h)&&(e=e||JC,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[k,C])=>`${y}${k}=${C},`,"");if(TA(h)&&l!=="_self")return eP(e||"",l),new sg(null);const p=window.open(e||"",l,f);W(p,t,"popup-blocked");try{p.focus()}catch{}return new sg(p)}function eP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tP="__/auth/handler",nP="emulator/auth/handler",rP=encodeURIComponent("fac");async function ag(t,e,n,r,i,o){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bi,eventId:i};if(e instanceof i_){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",$S(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(o||{}))s[f]=p}if(e instanceof ks){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${rP}=${encodeURIComponent(u)}`:"";return`${iP(t)}?${Ts(l).slice(1)}${h}`}function iP({config:t}){return t.emulator?$d(t,nP):`https://${t.authDomain}/${tP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="webStorageSupport";class oP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c_,this._completeRedirectFn=RC,this._overrideRedirectResult=AC}async _openPopup(e,n,r,i){var o;An((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ag(e,n,r,kh(),i);return ZC(e,s,Kd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await ag(e,n,r,kh(),i);return lC(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(An(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KC(e),r=new NC(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vc,{type:vc},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[vc];s!==void 0&&n(!!s),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e_()||Gw()||Hd()}}const sP=oP;var lg="@firebase/auth",ug="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uP(t){Xt(new Ut("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;W(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(t)},h=new RA(r,i,o,u);return FA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xt(new Ut("auth-internal",e=>{const n=$i(e.getProvider("auth").getImmediate());return(r=>new aP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(lg,ug,lP(t)),kt(lg,ug,"esm2017")}/**
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
 */const cP=5*60,hP=Pw("authIdTokenMaxAge")||cP;let cg=null;const dP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hP)return;const i=n==null?void 0:n.token;cg!==i&&(cg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fP(t=Ud()){const e=Wr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VA(t,{popupRedirectResolver:sP,persistence:[yC,oC,c_]}),r=Pw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=dP(o.toString());tC(n,s,()=>s(n.currentUser)),eC(n,l=>s(l))}}const i=Aw("auth");return i&&UA(n,`http://${i}`),n}function mP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Gt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",mP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uP("Browser");var hg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var y_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function E(){}E.prototype=g.prototype,I.D=g.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(T,A,b){for(var S=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)S[_t-2]=arguments[_t];return g.prototype[A].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,g,E){E||(E=0);var T=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)T[A]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(A=0;16>A;++A)T[A]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=I.g[0],E=I.g[1],A=I.g[2];var b=I.g[3],S=g+(b^E&(A^b))+T[0]+3614090360&4294967295;g=E+(S<<7&4294967295|S>>>25),S=b+(A^g&(E^A))+T[1]+3905402710&4294967295,b=g+(S<<12&4294967295|S>>>20),S=A+(E^b&(g^E))+T[2]+606105819&4294967295,A=b+(S<<17&4294967295|S>>>15),S=E+(g^A&(b^g))+T[3]+3250441966&4294967295,E=A+(S<<22&4294967295|S>>>10),S=g+(b^E&(A^b))+T[4]+4118548399&4294967295,g=E+(S<<7&4294967295|S>>>25),S=b+(A^g&(E^A))+T[5]+1200080426&4294967295,b=g+(S<<12&4294967295|S>>>20),S=A+(E^b&(g^E))+T[6]+2821735955&4294967295,A=b+(S<<17&4294967295|S>>>15),S=E+(g^A&(b^g))+T[7]+4249261313&4294967295,E=A+(S<<22&4294967295|S>>>10),S=g+(b^E&(A^b))+T[8]+1770035416&4294967295,g=E+(S<<7&4294967295|S>>>25),S=b+(A^g&(E^A))+T[9]+2336552879&4294967295,b=g+(S<<12&4294967295|S>>>20),S=A+(E^b&(g^E))+T[10]+4294925233&4294967295,A=b+(S<<17&4294967295|S>>>15),S=E+(g^A&(b^g))+T[11]+2304563134&4294967295,E=A+(S<<22&4294967295|S>>>10),S=g+(b^E&(A^b))+T[12]+1804603682&4294967295,g=E+(S<<7&4294967295|S>>>25),S=b+(A^g&(E^A))+T[13]+4254626195&4294967295,b=g+(S<<12&4294967295|S>>>20),S=A+(E^b&(g^E))+T[14]+2792965006&4294967295,A=b+(S<<17&4294967295|S>>>15),S=E+(g^A&(b^g))+T[15]+1236535329&4294967295,E=A+(S<<22&4294967295|S>>>10),S=g+(A^b&(E^A))+T[1]+4129170786&4294967295,g=E+(S<<5&4294967295|S>>>27),S=b+(E^A&(g^E))+T[6]+3225465664&4294967295,b=g+(S<<9&4294967295|S>>>23),S=A+(g^E&(b^g))+T[11]+643717713&4294967295,A=b+(S<<14&4294967295|S>>>18),S=E+(b^g&(A^b))+T[0]+3921069994&4294967295,E=A+(S<<20&4294967295|S>>>12),S=g+(A^b&(E^A))+T[5]+3593408605&4294967295,g=E+(S<<5&4294967295|S>>>27),S=b+(E^A&(g^E))+T[10]+38016083&4294967295,b=g+(S<<9&4294967295|S>>>23),S=A+(g^E&(b^g))+T[15]+3634488961&4294967295,A=b+(S<<14&4294967295|S>>>18),S=E+(b^g&(A^b))+T[4]+3889429448&4294967295,E=A+(S<<20&4294967295|S>>>12),S=g+(A^b&(E^A))+T[9]+568446438&4294967295,g=E+(S<<5&4294967295|S>>>27),S=b+(E^A&(g^E))+T[14]+3275163606&4294967295,b=g+(S<<9&4294967295|S>>>23),S=A+(g^E&(b^g))+T[3]+4107603335&4294967295,A=b+(S<<14&4294967295|S>>>18),S=E+(b^g&(A^b))+T[8]+1163531501&4294967295,E=A+(S<<20&4294967295|S>>>12),S=g+(A^b&(E^A))+T[13]+2850285829&4294967295,g=E+(S<<5&4294967295|S>>>27),S=b+(E^A&(g^E))+T[2]+4243563512&4294967295,b=g+(S<<9&4294967295|S>>>23),S=A+(g^E&(b^g))+T[7]+1735328473&4294967295,A=b+(S<<14&4294967295|S>>>18),S=E+(b^g&(A^b))+T[12]+2368359562&4294967295,E=A+(S<<20&4294967295|S>>>12),S=g+(E^A^b)+T[5]+4294588738&4294967295,g=E+(S<<4&4294967295|S>>>28),S=b+(g^E^A)+T[8]+2272392833&4294967295,b=g+(S<<11&4294967295|S>>>21),S=A+(b^g^E)+T[11]+1839030562&4294967295,A=b+(S<<16&4294967295|S>>>16),S=E+(A^b^g)+T[14]+4259657740&4294967295,E=A+(S<<23&4294967295|S>>>9),S=g+(E^A^b)+T[1]+2763975236&4294967295,g=E+(S<<4&4294967295|S>>>28),S=b+(g^E^A)+T[4]+1272893353&4294967295,b=g+(S<<11&4294967295|S>>>21),S=A+(b^g^E)+T[7]+4139469664&4294967295,A=b+(S<<16&4294967295|S>>>16),S=E+(A^b^g)+T[10]+3200236656&4294967295,E=A+(S<<23&4294967295|S>>>9),S=g+(E^A^b)+T[13]+681279174&4294967295,g=E+(S<<4&4294967295|S>>>28),S=b+(g^E^A)+T[0]+3936430074&4294967295,b=g+(S<<11&4294967295|S>>>21),S=A+(b^g^E)+T[3]+3572445317&4294967295,A=b+(S<<16&4294967295|S>>>16),S=E+(A^b^g)+T[6]+76029189&4294967295,E=A+(S<<23&4294967295|S>>>9),S=g+(E^A^b)+T[9]+3654602809&4294967295,g=E+(S<<4&4294967295|S>>>28),S=b+(g^E^A)+T[12]+3873151461&4294967295,b=g+(S<<11&4294967295|S>>>21),S=A+(b^g^E)+T[15]+530742520&4294967295,A=b+(S<<16&4294967295|S>>>16),S=E+(A^b^g)+T[2]+3299628645&4294967295,E=A+(S<<23&4294967295|S>>>9),S=g+(A^(E|~b))+T[0]+4096336452&4294967295,g=E+(S<<6&4294967295|S>>>26),S=b+(E^(g|~A))+T[7]+1126891415&4294967295,b=g+(S<<10&4294967295|S>>>22),S=A+(g^(b|~E))+T[14]+2878612391&4294967295,A=b+(S<<15&4294967295|S>>>17),S=E+(b^(A|~g))+T[5]+4237533241&4294967295,E=A+(S<<21&4294967295|S>>>11),S=g+(A^(E|~b))+T[12]+1700485571&4294967295,g=E+(S<<6&4294967295|S>>>26),S=b+(E^(g|~A))+T[3]+2399980690&4294967295,b=g+(S<<10&4294967295|S>>>22),S=A+(g^(b|~E))+T[10]+4293915773&4294967295,A=b+(S<<15&4294967295|S>>>17),S=E+(b^(A|~g))+T[1]+2240044497&4294967295,E=A+(S<<21&4294967295|S>>>11),S=g+(A^(E|~b))+T[8]+1873313359&4294967295,g=E+(S<<6&4294967295|S>>>26),S=b+(E^(g|~A))+T[15]+4264355552&4294967295,b=g+(S<<10&4294967295|S>>>22),S=A+(g^(b|~E))+T[6]+2734768916&4294967295,A=b+(S<<15&4294967295|S>>>17),S=E+(b^(A|~g))+T[13]+1309151649&4294967295,E=A+(S<<21&4294967295|S>>>11),S=g+(A^(E|~b))+T[4]+4149444226&4294967295,g=E+(S<<6&4294967295|S>>>26),S=b+(E^(g|~A))+T[11]+3174756917&4294967295,b=g+(S<<10&4294967295|S>>>22),S=A+(g^(b|~E))+T[2]+718787259&4294967295,A=b+(S<<15&4294967295|S>>>17),S=E+(b^(A|~g))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var E=g-this.blockSize,T=this.B,A=this.h,b=0;b<g;){if(A==0)for(;b<=E;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<g;)if(T[A++]=I.charCodeAt(b++),A==this.blockSize){i(this,T),A=0;break}}else for(;b<g;)if(T[A++]=I[b++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var E=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=E&255,E/=256;for(this.u(I),I=Array(16),g=E=0;4>g;++g)for(var T=0;32>T;T+=8)I[E++]=this.g[g]>>>T&255;return I};function o(I,g){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=g(I)}function s(I,g){this.h=g;for(var E=[],T=!0,A=I.length-1;0<=A;A--){var b=I[A]|0;T&&b==g||(E[A]=b,T=!1)}this.g=E}var l={};function u(I){return-128<=I&&128>I?o(I,function(g){return new s([g|0],0>g?-1:0)}):new s([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return D(h(-I));for(var g=[],E=1,T=0;I>=E;T++)g[T]=I/E|0,E*=4294967296;return new s(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return D(f(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(g,8)),T=p,A=0;A<I.length;A+=8){var b=Math.min(8,I.length-A),S=parseInt(I.substring(A,A+b),g);8>b?(b=h(Math.pow(g,b)),T=T.j(b).add(h(S))):(T=T.j(E),T=T.add(h(S)))}return T}var p=u(0),y=u(1),k=u(16777216);t=s.prototype,t.m=function(){if(N(this))return-D(this).m();for(var I=0,g=1,E=0;E<this.g.length;E++){var T=this.i(E);I+=(0<=T?T:4294967296+T)*g,g*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(N(this))return"-"+D(this).toString(I);for(var g=h(Math.pow(I,6)),E=this,T="";;){var A=x(E,g).g;E=_(E,A.j(g));var b=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=A,C(E))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=_(this,I),N(I)?-1:C(I)?0:1};function D(I){for(var g=I.g.length,E=[],T=0;T<g;T++)E[T]=~I.g[T];return new s(E,~I.h).add(y)}t.abs=function(){return N(this)?D(this):this},t.add=function(I){for(var g=Math.max(this.g.length,I.g.length),E=[],T=0,A=0;A<=g;A++){var b=T+(this.i(A)&65535)+(I.i(A)&65535),S=(b>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=S>>>16,b&=65535,S&=65535,E[A]=S<<16|b}return new s(E,E[E.length-1]&-2147483648?-1:0)};function _(I,g){return I.add(D(g))}t.j=function(I){if(C(this)||C(I))return p;if(N(this))return N(I)?D(this).j(D(I)):D(D(this).j(I));if(N(I))return D(this.j(D(I)));if(0>this.l(k)&&0>I.l(k))return h(this.m()*I.m());for(var g=this.g.length+I.g.length,E=[],T=0;T<2*g;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var b=this.i(T)>>>16,S=this.i(T)&65535,_t=I.i(A)>>>16,hr=I.i(A)&65535;E[2*T+2*A]+=S*hr,v(E,2*T+2*A),E[2*T+2*A+1]+=b*hr,v(E,2*T+2*A+1),E[2*T+2*A+1]+=S*_t,v(E,2*T+2*A+1),E[2*T+2*A+2]+=b*_t,v(E,2*T+2*A+2)}for(T=0;T<g;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=g;T<2*g;T++)E[T]=0;return new s(E,0)};function v(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function w(I,g){this.g=I,this.h=g}function x(I,g){if(C(g))throw Error("division by zero");if(C(I))return new w(p,p);if(N(I))return g=x(D(I),g),new w(D(g.g),D(g.h));if(N(g))return g=x(I,D(g)),new w(D(g.g),g.h);if(30<I.g.length){if(N(I)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var E=y,T=g;0>=T.l(I);)E=V(E),T=V(T);var A=j(E,1),b=j(T,1);for(T=j(T,2),E=j(E,2);!C(T);){var S=b.add(T);0>=S.l(I)&&(A=A.add(E),b=S),T=j(T,1),E=j(E,1)}return g=_(I,A.j(g)),new w(A,g)}for(A=p;0<=I.l(g);){for(E=Math.max(1,Math.floor(I.m()/g.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(E),S=b.j(g);N(S)||0<S.l(I);)E-=T,b=h(E),S=b.j(g);C(b)&&(b=y),A=A.add(b),I=_(I,S)}return new w(A,I)}t.A=function(I){return x(this,I).h},t.and=function(I){for(var g=Math.max(this.g.length,I.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)&I.i(T);return new s(E,this.h&I.h)},t.or=function(I){for(var g=Math.max(this.g.length,I.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)|I.i(T);return new s(E,this.h|I.h)},t.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)^I.i(T);return new s(E,this.h^I.h)};function V(I){for(var g=I.g.length+1,E=[],T=0;T<g;T++)E[T]=I.i(T)<<1|I.i(T-1)>>>31;return new s(E,I.h)}function j(I,g){var E=g>>5;g%=32;for(var T=I.g.length-E,A=[],b=0;b<T;b++)A[b]=0<g?I.i(b+E)>>>g|I.i(b+E+1)<<32-g:I.i(b+E);return new s(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=h,s.fromString=f,y_=s}).apply(typeof hg<"u"?hg:typeof self<"u"?self:typeof window<"u"?window:{});var pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v_,ko,w_,Fa,Ph,__,E_,I_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof pa=="object"&&pa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in d))break e;d=d[R]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function o(a,c){a instanceof String&&(a+="");var d=0,m=!1,R={next:function(){if(!m&&d<a.length){var O=d++;return{value:c(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return o(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),a.apply(c,R)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,y.apply(null,arguments)}function k(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,R,O){for(var B=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)B[ie-2]=arguments[ie];return c.prototype[R].apply(m,B)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function D(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const R=a.length||0,O=m.length||0;a.length=R+O;for(let B=0;B<O;B++)a[R+B]=m[B]}else a.push(m)}}class _{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function w(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var V=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function j(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function I(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)a[d]=m[d];for(let O=0;O<E.length;O++)d=E[O],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function b(a){l.setTimeout(()=>{throw a},0)}function S(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class _t{constructor(){this.h=this.g=null}add(c,d){const m=hr.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var hr=new _(()=>new qi,a=>a.reset());class qi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let tn,$=!1,K=new _t,G=()=>{const a=l.Promise.resolve(void 0);tn=()=>{a.then(de)}};var de=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){b(d)}var c=hr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var nn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function rn(a,c){if(Ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(V){e:{try{x(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:on[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&rn.aa.h.call(this)}}C(rn,Ee);var on={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),H0=0;function W0(a,c,d,m,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=R,this.key=++H0,this.da=this.fa=!1}function xs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Os(a){this.src=a,this.g={},this.h=0}Os.prototype.add=function(a,c,d,m,R){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=pu(a,c,m,R);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new W0(c,this.src,O,!!m,R),c.fa=d,a.push(c)),c};function mu(a,c){var d=c.type;if(d in a.g){var m=a.g[d],R=Array.prototype.indexOf.call(m,c,void 0),O;(O=0<=R)&&Array.prototype.splice.call(m,R,1),O&&(xs(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function pu(a,c,d,m){for(var R=0;R<a.length;++R){var O=a[R];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==m)return R}return-1}var gu="closure_lm_"+(1e6*Math.random()|0),yu={};function vf(a,c,d,m,R){if(m&&m.once)return _f(a,c,d,m,R);if(Array.isArray(c)){for(var O=0;O<c.length;O++)vf(a,c[O],d,m,R);return null}return d=Eu(d),a&&a[$t]?a.K(c,d,h(m)?!!m.capture:!!m,R):wf(a,c,d,!1,m,R)}function wf(a,c,d,m,R,O){if(!c)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,ie=wu(a);if(ie||(a[gu]=ie=new Os(a)),d=ie.add(c,d,m,B,O),d.proxy)return d;if(m=q0(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)nn||(R=B),R===void 0&&(R=!1),a.addEventListener(c.toString(),m,R);else if(a.attachEvent)a.attachEvent(If(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function q0(){function a(d){return c.call(a.src,a.listener,d)}const c=K0;return a}function _f(a,c,d,m,R){if(Array.isArray(c)){for(var O=0;O<c.length;O++)_f(a,c[O],d,m,R);return null}return d=Eu(d),a&&a[$t]?a.L(c,d,h(m)?!!m.capture:!!m,R):wf(a,c,d,!0,m,R)}function Ef(a,c,d,m,R){if(Array.isArray(c))for(var O=0;O<c.length;O++)Ef(a,c[O],d,m,R);else m=h(m)?!!m.capture:!!m,d=Eu(d),a&&a[$t]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],d=pu(O,d,m,R),-1<d&&(xs(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=wu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=pu(c,d,m,R)),(d=-1<a?c[a]:null)&&vu(d))}function vu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[$t])mu(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(If(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=wu(c))?(mu(d,a),d.h==0&&(d.src=null,c[gu]=null)):xs(a)}}}function If(a){return a in yu?yu[a]:yu[a]="on"+a}function K0(a,c){if(a.da)a=!0;else{c=new rn(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&vu(a),a=d.call(m,c)}return a}function wu(a){return a=a[gu],a instanceof Os?a:null}var _u="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eu(a){return typeof a=="function"?a:(a[_u]||(a[_u]=function(c){return a.handleEvent(c)}),a[_u])}function je(){re.call(this),this.i=new Os(this),this.M=this,this.F=null}C(je,re),je.prototype[$t]=!0,je.prototype.removeEventListener=function(a,c,d,m){Ef(this,a,c,d,m)};function Je(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new Ee(c,a);else if(c instanceof Ee)c.target=c.target||a;else{var R=c;c=new Ee(m,a),T(c,R)}if(R=!0,d)for(var O=d.length-1;0<=O;O--){var B=c.g=d[O];R=Ds(B,m,!0,c)&&R}if(B=c.g=a,R=Ds(B,m,!0,c)&&R,R=Ds(B,m,!1,c)&&R,d)for(O=0;O<d.length;O++)B=c.g=d[O],R=Ds(B,m,!1,c)&&R}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)xs(d[m]);delete a.g[c],a.h--}}this.F=null},je.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},je.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Ds(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,O=0;O<c.length;++O){var B=c[O];if(B&&!B.da&&B.capture==d){var ie=B.listener,Oe=B.ha||B.src;B.fa&&mu(a.i,B),R=ie.call(Oe,m)!==!1&&R}}return R&&!m.defaultPrevented}function Tf(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Sf(a){a.g=Tf(()=>{a.g=null,a.i&&(a.i=!1,Sf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class G0 extends re{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Sf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(a){re.call(this),this.h=a,this.g={}}C(Ki,re);var kf=[];function Af(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&vu(c)},a),a.g={}}Ki.prototype.N=function(){Ki.aa.N.call(this),Af(this)},Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Iu=l.JSON.stringify,Q0=l.JSON.parse,Y0=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Tu(){}Tu.prototype.h=null;function Cf(a){return a.h||(a.h=a.i())}function Pf(){}var Gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Su(){Ee.call(this,"d")}C(Su,Ee);function ku(){Ee.call(this,"c")}C(ku,Ee);var dr={},Rf=null;function Ms(){return Rf=Rf||new je}dr.La="serverreachability";function bf(a){Ee.call(this,dr.La,a)}C(bf,Ee);function Qi(a){const c=Ms();Je(c,new bf(c))}dr.STAT_EVENT="statevent";function Nf(a,c){Ee.call(this,dr.STAT_EVENT,a),this.stat=c}C(Nf,Ee);function Ze(a){const c=Ms();Je(c,new Nf(c,a))}dr.Ma="timingevent";function xf(a,c){Ee.call(this,dr.Ma,a),this.size=c}C(xf,Ee);function Yi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Xi(){this.g=!0}Xi.prototype.xa=function(){this.g=!1};function X0(a,c,d,m,R,O){a.info(function(){if(a.g)if(O)for(var B="",ie=O.split("&"),Oe=0;Oe<ie.length;Oe++){var te=ie[Oe].split("=");if(1<te.length){var Be=te[0];te=te[1];var $e=Be.split("_");B=2<=$e.length&&$e[1]=="type"?B+(Be+"="+te+"&"):B+(Be+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+c+`
`+d+`
`+B})}function J0(a,c,d,m,R,O,B){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+c+`
`+d+`
`+O+" "+B})}function Gr(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+eE(a,d)+(m?" "+m:"")})}function Z0(a,c){a.info(function(){return"TIMEOUT: "+c})}Xi.prototype.info=function(){};function eE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Iu(d)}catch{return c}}var Ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Of={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Au;function Vs(){}C(Vs,Tu),Vs.prototype.g=function(){return new XMLHttpRequest},Vs.prototype.i=function(){return{}},Au=new Vs;function Rn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new Ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Df}function Df(){this.i=null,this.g="",this.h=!1}var Mf={},Cu={};function Pu(a,c,d){a.L=1,a.v=Bs(sn(c)),a.m=d,a.P=!0,Lf(a,null)}function Lf(a,c){a.F=Date.now(),Fs(a),a.A=sn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Yf(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Df,a.g=mm(a.j,d?c:null,!a.m),0<a.O&&(a.M=new G0(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(kf[0]=R.toString()),R=kf);for(var O=0;O<R.length;O++){var B=vf(d,R[O],m||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Qi(),X0(a.i,a.u,a.A,a.l,a.R,a.m)}Rn.prototype.ca=function(a){a=a.target;const c=this.M;c&&an(a)==3?c.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const $e=an(this.g);var c=this.g.Ba();const Xr=this.g.Z();if(!(3>$e)&&($e!=3||this.g&&(this.h.h||this.g.oa()||rm(this.g)))){this.J||$e!=4||c==7||(c==8||0>=Xr?Qi(3):Qi(2)),Ru(this);var d=this.g.Z();this.X=d;t:if(Vf(this)){var m=rm(this.g);a="";var R=m.length,O=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),Ji(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(O&&c==R-1)});m.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,J0(this.i,this.u,this.A,this.l,this.R,$e,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,Oe=this.g;if((ie=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ie)){var te=ie;break t}}te=null}if(d=te)Gr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bu(this,d);else{this.o=!1,this.s=3,Ze(12),fr(this),Ji(this);break e}}if(this.P){d=!0;let Pt;for(;!this.J&&this.C<B.length;)if(Pt=tE(this,B),Pt==Cu){$e==4&&(this.s=4,Ze(14),d=!1),Gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Mf){this.s=4,Ze(15),Gr(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Gr(this.i,this.l,Pt,null),bu(this,Pt);if(Vf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$e!=4||B.length!=0||this.h.h||(this.s=1,Ze(16),d=!1),this.o=this.o&&d,!d)Gr(this.i,this.l,B,"[Invalid Chunked Response]"),fr(this),Ji(this);else if(0<B.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Lu(Be),Be.M=!0,Ze(11))}}else Gr(this.i,this.l,B,null),bu(this,B);$e==4&&fr(this),this.o&&!this.J&&($e==4?cm(this.j,this):(this.o=!1,Fs(this)))}else vE(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),fr(this),Ji(this)}}}catch{}finally{}};function Vf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function tE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Cu:(d=Number(c.substring(d,m)),isNaN(d)?Mf:(m+=1,m+d>c.length?Cu:(c=c.slice(m,m+d),a.C=m+d,c)))}Rn.prototype.cancel=function(){this.J=!0,fr(this)};function Fs(a){a.S=Date.now()+a.I,Ff(a,a.I)}function Ff(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Yi(y(a.ba,a),c)}function Ru(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Rn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Z0(this.i,this.A),this.L!=2&&(Qi(),Ze(17)),fr(this),this.s=2,Ji(this)):Ff(this,this.S-a)};function Ji(a){a.j.G==0||a.J||cm(a.j,a)}function fr(a){Ru(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Af(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function bu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Nu(d.h,a))){if(!a.K&&Nu(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ks(d),Ws(d);else break e;Mu(d),Ze(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Yi(y(d.Za,d),6e3));if(1>=Bf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else pr(d,11)}else if((a.K||d.g==a)&&Ks(d),!v(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let te=R[c];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const Be=te[3];Be!=null&&(d.la=Be,d.j.info("VER="+d.la));const $e=te[4];$e!=null&&(d.Aa=$e,d.j.info("SVER="+d.Aa));const Xr=te[5];Xr!=null&&typeof Xr=="number"&&0<Xr&&(m=1.5*Xr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Pt=a.g;if(Pt){const Qs=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qs){var O=m.h;O.g||Qs.indexOf("spdy")==-1&&Qs.indexOf("quic")==-1&&Qs.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(xu(O,O.h),O.h=null))}if(m.D){const Vu=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vu&&(m.ya=Vu,le(m.I,m.D,Vu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var B=a;if(m.qa=fm(m,m.J?m.ia:null,m.W),B.K){$f(m.h,B);var ie=B,Oe=m.L;Oe&&(ie.I=Oe),ie.B&&(Ru(ie),Fs(ie)),m.g=B}else lm(m);0<d.i.length&&qs(d)}else te[0]!="stop"&&te[0]!="close"||pr(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?pr(d,7):Du(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}Qi(4)}catch{}}var nE=class{constructor(a,c){this.g=a,this.map=c}};function Uf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bf(a){return a.h?1:a.g?a.g.size:0}function Nu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function xu(a,c){a.g?a.g.add(c):a.h=c}function $f(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Uf.prototype.cancel=function(){if(this.i=zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function rE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function iE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function Hf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=iE(a),m=rE(a),R=m.length,O=0;O<R;O++)c.call(void 0,m[O],d&&d[O],a)}var Wf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),R=null;if(0<=m){var O=a[d].substring(0,m);R=a[d].substring(m+1)}else O=a[d];c(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof mr){this.h=a.h,Us(this,a.j),this.o=a.o,this.g=a.g,js(this,a.s),this.l=a.l;var c=a.i,d=new to;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),qf(this,d),this.m=a.m}else a&&(c=String(a).match(Wf))?(this.h=!1,Us(this,c[1]||"",!0),this.o=Zi(c[2]||""),this.g=Zi(c[3]||"",!0),js(this,c[4]),this.l=Zi(c[5]||"",!0),qf(this,c[6]||"",!0),this.m=Zi(c[7]||"")):(this.h=!1,this.i=new to(null,this.h))}mr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(eo(c,Kf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(eo(c,Kf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(eo(d,d.charAt(0)=="/"?lE:aE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",eo(d,cE)),a.join("")};function sn(a){return new mr(a)}function Us(a,c,d){a.j=d?Zi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function js(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function qf(a,c,d){c instanceof to?(a.i=c,hE(a.i,a.h)):(d||(c=eo(c,uE)),a.i=new to(c,a.h))}function le(a,c,d){a.i.set(c,d)}function Bs(a){return le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function eo(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,sE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Kf=/[#\/\?@]/g,aE=/[#\?:]/g,lE=/[#\?]/g,uE=/[#\?@]/g,cE=/#/g;function to(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function bn(a){a.g||(a.g=new Map,a.h=0,a.i&&oE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=to.prototype,t.add=function(a,c){bn(this),this.i=null,a=Qr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Gf(a,c){bn(a),c=Qr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Qf(a,c){return bn(a),c=Qr(a,c),a.g.has(c)}t.forEach=function(a,c){bn(this),this.g.forEach(function(d,m){d.forEach(function(R){a.call(c,R,m,this)},this)},this)},t.na=function(){bn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const R=a[m];for(let O=0;O<R.length;O++)d.push(c[m])}return d},t.V=function(a){bn(this);let c=[];if(typeof a=="string")Qf(this,a)&&(c=c.concat(this.g.get(Qr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return bn(this),this.i=null,a=Qr(this,a),Qf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Yf(a,c,d){Gf(a,c),0<d.length&&(a.i=null,a.g.set(Qr(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const O=encodeURIComponent(String(m)),B=this.V(m);for(m=0;m<B.length;m++){var R=O;B[m]!==""&&(R+="="+encodeURIComponent(String(B[m]))),a.push(R)}}return this.i=a.join("&")};function Qr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function hE(a,c){c&&!a.j&&(bn(a),a.i=null,a.g.forEach(function(d,m){var R=m.toLowerCase();m!=R&&(Gf(this,m),Yf(this,R,d))},a)),a.j=c}function dE(a,c){const d=new Xi;if(l.Image){const m=new Image;m.onload=k(Nn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=k(Nn,d,"TestLoadImage: error",!1,c,m),m.onabort=k(Nn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=k(Nn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function fE(a,c){const d=new Xi,m=new AbortController,R=setTimeout(()=>{m.abort(),Nn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(R),O.ok?Nn(d,"TestPingServer: ok",!0,c):Nn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Nn(d,"TestPingServer: error",!1,c)})}function Nn(a,c,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function mE(){this.g=new Y0}function pE(a,c,d){const m=d||"";try{Hf(a,function(R,O){let B=R;h(R)&&(B=Iu(R)),c.push(m+O+"="+encodeURIComponent(B))})}catch(R){throw c.push(m+"type="+encodeURIComponent("_badmap")),R}}function $s(a){this.l=a.Ub||null,this.j=a.eb||!1}C($s,Tu),$s.prototype.g=function(){return new zs(this.l,this.j)},$s.prototype.i=function(a){return function(){return a}}({});function zs(a,c){je.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(zs,je),t=zs.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ro(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,no(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ro(this)),this.g&&(this.readyState=3,ro(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?no(this):ro(this),this.readyState==3&&Xf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,no(this))},t.Qa=function(a){this.g&&(this.response=a,no(this))},t.ga=function(){this.g&&no(this)};function no(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ro(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ro(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jf(a){let c="";return j(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Ou(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Jf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):le(a,c,d))}function ve(a){je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ve,je);var gE=/^https?$/i,yE=["POST","PUT"];t=ve.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Au.g(),this.v=this.o?Cf(this.o):Cf(Au),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){Zf(this,O);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yE,c,void 0))||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of d)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nm(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Zf(this,O)}};function Zf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,em(a),Hs(a)}function em(a){a.A||(a.A=!0,Je(a,"complete"),Je(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Je(this,"complete"),Je(this,"abort"),Hs(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?tm(this):this.bb())},t.bb=function(){tm(this)};function tm(a){if(a.h&&typeof s<"u"&&(!a.v[1]||an(a)!=4||a.Z()!=2)){if(a.u&&an(a)==4)Tf(a.Ea,0,a);else if(Je(a,"readystatechange"),an(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=B===0){var R=String(a.D).match(Wf)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),m=!gE.test(R?R.toLowerCase():"")}d=m}if(d)Je(a,"complete"),Je(a,"success");else{a.m=6;try{var O=2<an(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",em(a)}}finally{Hs(a)}}}}function Hs(a,c){if(a.g){nm(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Je(a,"ready");try{d.onreadystatechange=m}catch{}}}function nm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Q0(c)}};function rm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function vE(a){const c={};a=(a.g&&2<=an(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(v(a[m]))continue;var d=A(a[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[R]||[];c[R]=O,O.push(d)}I(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function io(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function im(a){this.Aa=0,this.i=[],this.j=new Xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=io("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=io("baseRetryDelayMs",5e3,a),this.cb=io("retryDelaySeedMs",1e4,a),this.Wa=io("forwardChannelMaxRetries",2,a),this.wa=io("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Uf(a&&a.concurrentRequestLimit),this.Da=new mE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=im.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){Ze(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=fm(this,null,this.W),qs(this)};function Du(a){if(om(a),a.G==3){var c=a.U++,d=sn(a.I);if(le(d,"SID",a.K),le(d,"RID",c),le(d,"TYPE","terminate"),oo(a,d),c=new Rn(a,a.j,c),c.L=2,c.v=Bs(sn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=mm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Fs(c)}dm(a)}function Ws(a){a.g&&(Lu(a),a.g.cancel(),a.g=null)}function om(a){Ws(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ks(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function qs(a){if(!jf(a.h)&&!a.s){a.s=!0;var c=a.Ga;tn||G(),$||(tn(),$=!0),K.add(c,a),a.B=0}}function wE(a,c){return Bf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Yi(y(a.Ga,a,c),hm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Rn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=g(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=am(this,R,c),d=sn(this.I),le(d,"RID",a),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),oo(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(Jf(O)))+"&"+c:this.m&&Ou(d,this.m,O)),xu(this.h,R),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",c),le(d,"SID","null"),R.T=!0,Pu(R,d,null)):Pu(R,d,c),this.G=2}}else this.G==3&&(a?sm(this,a):this.i.length==0||jf(this.h)||sm(this))};function sm(a,c){var d;c?d=c.l:d=a.U++;const m=sn(a.I);le(m,"SID",a.K),le(m,"RID",d),le(m,"AID",a.T),oo(a,m),a.m&&a.o&&Ou(m,a.m,a.o),d=new Rn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=am(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),xu(a.h,d),Pu(d,m,c)}function oo(a,c){a.H&&j(a.H,function(d,m){le(c,m,d)}),a.l&&Hf({},function(d,m){le(c,m,d)})}function am(a,c,d){d=Math.min(a.i.length,d);var m=a.l?y(a.l.Na,a.l,a):null;e:{var R=a.i;let O=-1;for(;;){const B=["count="+d];O==-1?0<d?(O=R[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let ie=!0;for(let Oe=0;Oe<d;Oe++){let te=R[Oe].g;const Be=R[Oe].map;if(te-=O,0>te)O=Math.max(0,R[Oe].g-100),ie=!1;else try{pE(Be,B,"req"+te+"_")}catch{m&&m(Be)}}if(ie){m=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function lm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;tn||G(),$||(tn(),$=!0),K.add(c,a),a.v=0}}function Mu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Yi(y(a.Fa,a),hm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,um(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Yi(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ze(10),Ws(this),um(this))};function Lu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function um(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=sn(a.qa);le(c,"RID","rpc"),le(c,"SID",a.K),le(c,"AID",a.T),le(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&le(c,"TO",a.ja),le(c,"TYPE","xmlhttp"),oo(a,c),a.m&&a.o&&Ou(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Bs(sn(c)),d.m=null,d.P=!0,Lf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ws(this),Mu(this),Ze(19))};function Ks(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function cm(a,c){var d=null;if(a.g==c){Ks(a),Lu(a),a.g=null;var m=2}else if(Nu(a.h,c))d=c.D,$f(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=a.B;m=Ms(),Je(m,new xf(m,d)),qs(a)}else lm(a);else if(R=c.s,R==3||R==0&&0<c.X||!(m==1&&wE(a,c)||m==2&&Mu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),R){case 1:pr(a,5);break;case 4:pr(a,10);break;case 3:pr(a,6);break;default:pr(a,2)}}}function hm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function pr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),m=a.Xa;const R=!m;m=new mr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Us(m,"https"),Bs(m),R?dE(m.toString(),d):fE(m.toString(),d)}else Ze(2);a.G=0,a.l&&a.l.sa(c),dm(a),om(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function dm(a){if(a.G=0,a.ka=[],a.l){const c=zf(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function fm(a,c,d){var m=d instanceof mr?sn(d):new mr(d);if(m.g!="")c&&(m.g=c+"."+m.g),js(m,m.s);else{var R=l.location;m=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var O=new mr(null);m&&Us(O,m),c&&(O.g=c),R&&js(O,R),d&&(O.l=d),m=O}return d=a.D,c=a.ya,d&&c&&le(m,d,c),le(m,"VER",a.la),oo(a,m),m}function mm(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ve(new $s({eb:d})):new ve(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pm(){}t=pm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Gs(){}Gs.prototype.g=function(a,c){return new dt(a,c)};function dt(a,c){je.call(this),this.g=new im(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Yr(this)}C(dt,je),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){Du(this.g)},dt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Iu(a),a=d);c.i.push(new nE(c.Ya++,a)),c.G==3&&qs(c)},dt.prototype.N=function(){this.g.l=null,delete this.j,Du(this.g),delete this.g,dt.aa.N.call(this)};function gm(a){Su.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(gm,Su);function ym(){ku.call(this),this.status=1}C(ym,ku);function Yr(a){this.g=a}C(Yr,pm),Yr.prototype.ua=function(){Je(this.g,"a")},Yr.prototype.ta=function(a){Je(this.g,new gm(a))},Yr.prototype.sa=function(a){Je(this.g,new ym)},Yr.prototype.ra=function(){Je(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,I_=function(){return new Gs},E_=function(){return Ms()},__=dr,Ph={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ls.NO_ERROR=0,Ls.TIMEOUT=8,Ls.HTTP_ERROR=6,Fa=Ls,Of.COMPLETE="complete",w_=Of,Pf.EventType=Gi,Gi.OPEN="a",Gi.CLOSE="b",Gi.ERROR="c",Gi.MESSAGE="d",je.prototype.listen=je.prototype.K,ko=Pf,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,v_=ve}).apply(typeof pa<"u"?pa:typeof self<"u"?self:typeof window<"u"?window:{});const dg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Jl("@firebase/firestore");function go(){return Lr.logLevel}function H(t,...e){if(Lr.logLevel<=X.DEBUG){const n=e.map(Qd);Lr.debug(`Firestore (${Hi}): ${t}`,...n)}}function Vr(t,...e){if(Lr.logLevel<=X.ERROR){const n=e.map(Qd);Lr.error(`Firestore (${Hi}): ${t}`,...n)}}function wl(t,...e){if(Lr.logLevel<=X.WARN){const n=e.map(Qd);Lr.warn(`Firestore (${Hi}): ${t}`,...n)}}function Qd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Hi}) INTERNAL ASSERTION FAILED: `+t;throw Vr(e),new Error(e)}function Te(t,e){t||J()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class gP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yP{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Pr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new T_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new qe(e)}}class vP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _P{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Te(this.o===void 0);const r=o=>{o.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,H("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new _P(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=IP(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Ni(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Pe(0,0))}static max(){return new fe(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return us.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof us?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends us{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const TP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends us{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return TP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(_e.fromString(e))}static fromName(e){return new Q(_e.fromString(e).popFirst(5))}static empty(){return new Q(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new _e(e.slice()))}}function SP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(r===1e9?new Pe(n+1,0):new Pe(n,r));return new ir(i,Q.empty(),e)}function kP(t){return new ir(t.readTime,t.key,-1)}class ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ir(fe.min(),Q.empty(),-1)}static max(){return new ir(fe.max(),Q.empty(),-1)}}function AP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==CP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let u=0;u<o;u++){const h=u;n(e[h]).next(f=>{s[h]=f,++l,l===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function RP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ru(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class A_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}A_.oe=-1;function Yd(t){return t==null}function _l(t){return t===0&&1/t==-1/0}function bP(t){return typeof t=="number"&&Number.isInteger(t)&&!_l(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function C_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new ht(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ga(this.root,e,this.comparator,!0)}}class ga{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??Me.EMPTY,this.right=o??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,o){return this}insert(e,n,r){return new Me(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mg(this.data.getIterator())}getIteratorFrom(e){return new mg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class mg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Qe(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class NP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new NP("Invalid base64 string: "+o):o}}(e);return new Jt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const xP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(Te(!!t),typeof t=="string"){let e=0;const n=xP.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cs(t){return typeof t=="string"?Jt.fromBase64String(t):Jt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function P_(t){const e=t.mapValue.fields.__previous_value__;return Xd(e)?P_(e):e}function El(t){const e=Fr(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n,r,i,o,s,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Il{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Il("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Il&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xd(t)?4:MP(t)?9007199254740991:DP(t)?10:11:J()}function Zt(t,e){if(t===e)return!0;const n=xi(t);if(n!==xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return El(t).isEqual(El(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Fr(i.timestampValue),l=Fr(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return cs(i.bytesValue).isEqual(cs(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Le(i.geoPointValue.latitude)===Le(o.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Le(i.integerValue)===Le(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Le(i.doubleValue),l=Le(o.doubleValue);return s===l?_l(s)===_l(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return Ni(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(fg(s)!==fg(l))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(l[u]===void 0||!Zt(s[u],l[u])))return!1;return!0}(t,e);default:return J()}}function hs(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function Oi(t,e){if(t===e)return 0;const n=xi(t),r=xi(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=Le(o.integerValue||o.doubleValue),u=Le(s.integerValue||s.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return pg(t.timestampValue,e.timestampValue);case 4:return pg(El(t),El(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(o,s){const l=cs(o),u=cs(s);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),u=s.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=oe(l[h],u[h]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=oe(Le(o.latitude),Le(s.latitude));return l!==0?l:oe(Le(o.longitude),Le(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return gg(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,u,h,f;const p=o.fields||{},y=s.fields||{},k=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(u=y.value)===null||u===void 0?void 0:u.arrayValue,N=oe(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:gg(k,C)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===ya.mapValue&&s===ya.mapValue)return 0;if(o===ya.mapValue)return 1;if(s===ya.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),h=s.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const y=oe(u[p],f[p]);if(y!==0)return y;const k=Oi(l[u[p]],h[f[p]]);if(k!==0)return k}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function pg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Fr(t),r=Fr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function gg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=Oi(n[i],r[i]);if(o)return o}return oe(n.length,r.length)}function Di(t){return Rh(t)}function Rh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Rh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Rh(n.fields[s])}`;return i+"}"}(t.mapValue):J()}function bh(t){return!!t&&"integerValue"in t}function Jd(t){return!!t&&"arrayValue"in t}function Ua(t){return!!t&&"mapValue"in t}function DP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=Lo(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ua(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Cs(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Dt(Lo(this.value))}}function R_(t){const e=[];return Cs(t.fields,(n,r)=>{const i=new Ve([n]);if(Ua(r)){const o=R_(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new Ot(e,0,fe.min(),fe.min(),fe.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ot(e,1,n,fe.min(),r,i,0)}static newNoDocument(e,n){return new Ot(e,2,n,fe.min(),fe.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,fe.min(),fe.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tl{constructor(e,n){this.position=e,this.inclusive=n}}function yg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=Q.comparator(Q.fromName(s.referenceValue),n.key):r=Oi(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function vg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Sl{constructor(e,n="asc"){this.field=e,this.dir=n}}function LP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class b_{}class Ne extends b_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FP(e,n,r):n==="array-contains"?new BP(e,r):n==="in"?new $P(e,r):n==="not-in"?new zP(e,r):n==="array-contains-any"?new HP(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UP(e,r):new jP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Oi(n,this.value)):n!==null&&xi(this.value)===xi(n)&&this.matchesComparison(Oi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class or extends b_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new or(e,n)}matches(e){return N_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function N_(t){return t.op==="and"}function x_(t){return VP(t)&&N_(t)}function VP(t){for(const e of t.filters)if(e instanceof or)return!1;return!0}function Nh(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(x_(t))return t.filters.map(e=>Nh(e)).join(",");{const e=t.filters.map(n=>Nh(n)).join(",");return`${t.op}(${e})`}}function O_(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&Zt(r.value,i.value)}(t,e):t instanceof or?function(r,i){return i instanceof or&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&O_(s,i.filters[l]),!0):!1}(t,e):void J()}function D_(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof or?function(n){return n.op.toString()+" {"+n.getFilters().map(D_).join(" ,")+"}"}(t):"Filter"}class FP extends Ne{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class UP extends Ne{constructor(e,n){super(e,"in",n),this.keys=M_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jP extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=M_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function M_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class BP extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jd(n)&&hs(n.arrayValue,this.value)}}class $P extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hs(this.value.arrayValue,n)}}class zP extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hs(this.value.arrayValue,n)}}class HP extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hs(this.value.arrayValue,r))}}/**
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
 */class WP{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function wg(t,e=null,n=[],r=[],i=null,o=null,s=null){return new WP(t,e,n,r,i,o,s)}function Zd(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Yd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.ue=n}return e.ue}function ef(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!O_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vg(t.startAt,e.startAt)&&vg(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qP(t,e,n,r,i,o,s,l){return new iu(t,e,n,r,i,o,s,l)}function KP(t){return new iu(t)}function _g(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GP(t){return t.collectionGroup!==null}function Vo(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new Qe(Ve.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Sl(o,r))}),n.has(Ve.keyField().canonicalString())||e.ce.push(new Sl(Ve.keyField(),r))}return e.ce}function Rr(t){const e=ae(t);return e.le||(e.le=QP(e,Vo(t))),e.le}function QP(t,e){if(t.limitType==="F")return wg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Sl(i.field,o)});const n=t.endAt?new Tl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tl(t.startAt.position,t.startAt.inclusive):null;return wg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xh(t,e,n){return new iu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function L_(t,e){return ef(Rr(t),Rr(e))&&t.limitType===e.limitType}function V_(t){return`${Zd(Rr(t))}|lt:${t.limitType}`}function yo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>D_(i)).join(", ")}]`),Yd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Di(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Di(i)).join(",")),`Target(${r})`}(Rr(t))}; limitType=${t.limitType})`}function tf(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Vo(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,u){const h=yg(s,l,u);return s.inclusive?h<=0:h<0}(r.startAt,Vo(r),i)||r.endAt&&!function(s,l,u){const h=yg(s,l,u);return s.inclusive?h>=0:h>0}(r.endAt,Vo(r),i))}(t,e)}function YP(t){return(e,n)=>{let r=!1;for(const i of Vo(t)){const o=XP(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function XP(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(o,s,l){const u=s.data.field(o),h=l.data.field(o);return u!==null&&h!==null?Oi(u,h):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return C_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new ht(Q.comparator);function kl(){return JP}const F_=new ht(Q.comparator);function va(...t){let e=F_;for(const n of t)e=e.insert(n.key,n);return e}function U_(t){let e=F_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return Fo()}function j_(){return Fo()}function Fo(){return new Wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZP=new ht(Q.comparator),eR=new Qe(Q.comparator);function Ge(...t){let e=eR;for(const n of t)e=e.add(n);return e}const tR=new Qe(oe);function nR(){return tR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_l(e)?"-0":e}}function B_(t){return{integerValue:""+t}}function rR(t,e){return bP(e)?B_(e):nf(t,e)}/**
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
 */class ou{constructor(){this._=void 0}}function iR(t,e,n){return t instanceof Al?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Xd(o)&&(o=P_(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof ds?z_(t,e):t instanceof fs?H_(t,e):function(i,o){const s=$_(i,o),l=Eg(s)+Eg(i.Pe);return bh(s)&&bh(i.Pe)?B_(l):nf(i.serializer,l)}(t,e)}function oR(t,e,n){return t instanceof ds?z_(t,e):t instanceof fs?H_(t,e):n}function $_(t,e){return t instanceof Cl?function(r){return bh(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Al extends ou{}class ds extends ou{constructor(e){super(),this.elements=e}}function z_(t,e){const n=W_(e);for(const r of t.elements)n.some(i=>Zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class fs extends ou{constructor(e){super(),this.elements=e}}function H_(t,e){let n=W_(e);for(const r of t.elements)n=n.filter(i=>!Zt(i,r));return{arrayValue:{values:n}}}class Cl extends ou{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Eg(t){return Le(t.integerValue||t.doubleValue)}function W_(t){return Jd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ds&&i instanceof ds||r instanceof fs&&i instanceof fs?Ni(r.elements,i.elements,Zt):r instanceof Cl&&i instanceof Cl?Zt(r.Pe,i.Pe):r instanceof Al&&i instanceof Al}(t.transform,e.transform)}class aR{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class su{}function q_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new G_(t.key,vn.none()):new Ps(t.key,t.data,vn.none());{const n=t.data,r=Dt.empty();let i=new Qe(Ve.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Kr(t.key,r,new Mt(i.toArray()),vn.none())}}function lR(t,e,n){t instanceof Ps?function(i,o,s){const l=i.value.clone(),u=Tg(i.fieldTransforms,o,s.transformResults);l.setAll(u),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(i,o,s){if(!ja(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=Tg(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(K_(i)),u.setAll(l),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Uo(t,e,n,r){return t instanceof Ps?function(o,s,l,u){if(!ja(o.precondition,s))return l;const h=o.value.clone(),f=Sg(o.fieldTransforms,u,s);return h.setAll(f),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(o,s,l,u){if(!ja(o.precondition,s))return l;const h=Sg(o.fieldTransforms,u,s),f=s.data;return f.setAll(K_(o)),f.setAll(h),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(o,s,l){return ja(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function uR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=$_(r.transform,i||null);o!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,o))}return n||null}function Ig(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ni(r,i,(o,s)=>sR(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ps extends su{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kr extends su{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function K_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tg(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,oR(s,l,n[i]))}return r}function Sg(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,iR(o,s,e))}return r}class G_ extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cR extends su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&lR(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=j_();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const u=q_(s,l);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ge())}isEqual(e){return this.batchId===e.batchId&&Ni(this.mutations,e.mutations,(n,r)=>Ig(n,r))&&Ni(this.baseMutations,e.baseMutations,(n,r)=>Ig(n,r))}}class rf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return ZP}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new rf(e,n,r,i)}}/**
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
 */class dR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Se,Z;function fR(t){switch(t){default:return J();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function mR(t){if(t===void 0)return Vr("GRPC error has no .code"),U.UNKNOWN;switch(t){case Se.OK:return U.OK;case Se.CANCELLED:return U.CANCELLED;case Se.UNKNOWN:return U.UNKNOWN;case Se.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Se.INTERNAL:return U.INTERNAL;case Se.UNAVAILABLE:return U.UNAVAILABLE;case Se.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Se.NOT_FOUND:return U.NOT_FOUND;case Se.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Se.ABORTED:return U.ABORTED;case Se.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Se.DATA_LOSS:return U.DATA_LOSS;default:return J()}}(Z=Se||(Se={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new y_([4294967295,4294967295],0);class pR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Oh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yR(t,e){return Oh(t,e.toTimestamp())}function Ii(t){return Te(!!t),fe.fromTimestamp(function(n){const r=Fr(n);return new Pe(r.seconds,r.nanos)}(t))}function Q_(t,e){return Dh(t,e).canonicalString()}function Dh(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vR(t){const e=_e.fromString(t);return Te(AR(e)),e}function Mh(t,e){return Q_(t.databaseId,e.path)}function wR(t){const e=vR(t);return e.length===4?_e.emptyPath():ER(e)}function _R(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ER(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kg(t,e,n){return{name:Mh(t,e),fields:n.value.mapValue.fields}}function IR(t,e){let n;if(e instanceof Ps)n={update:kg(t,e.key,e.value)};else if(e instanceof G_)n={delete:Mh(t,e.key)};else if(e instanceof Kr)n={update:kg(t,e.key,e.data),updateMask:kR(e.fieldMask)};else{if(!(e instanceof cR))return J();n={verify:Mh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const l=s.transform;if(l instanceof Al)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ds)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Cl)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:yR(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:J()}(t,e.precondition)),n}function TR(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Ii(i.updateTime):Ii(o);return s.isEqual(fe.min())&&(s=Ii(o)),new aR(s,i.transformResults||[])}(n,e))):[]}function SR(t){let e=wR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(p){const y=Y_(p);return y instanceof or&&x_(y)?y.getFilters():[y]}(n.where));let s=[];n.orderBy&&(s=function(p){return p.map(y=>function(C){return new Sl(Zr(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Yd(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,k=p.values||[];return new Tl(k,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,k=p.values||[];return new Tl(k,y)}(n.endAt)),qP(e,i,s,o,l,"F",u,h)}function Y_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zr(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Zr(n.unaryFilter.field);return Ne.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Zr(n.unaryFilter.field);return Ne.create(s,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(Zr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return or.create(n.compositeFilter.filters.map(r=>Y_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function Zr(t){return Ve.fromServerFormat(t.fieldPath)}function kR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function AR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.ct=e}}function PR(t){const e=SR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xh(e,e.limit,"L"):e}/**
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
 */class RR{constructor(){this.un=new bR}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ir.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class bR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(_e.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Mi(0)}static kn(){return new Mi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.changes=new Wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Uo(r.mutation,i,Mt.empty(),Pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ge()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=va();return o.forEach((l,u)=>{s=s.insert(l,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=kl();const s=Fo(),l=function(){return Fo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Kr)?o=o.insert(h.key,h):f!==void 0?(s.set(h.key,f.mutation.getFieldMask()),Uo(f.mutation,h,f.mutation.getFieldMask(),Pe.now())):s.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((h,f)=>s.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new xR(f,(p=s.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Fo();let i=new ht((s,l)=>s-l),o=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Mt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||Ge()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=j_();f.forEach(y=>{if(!o.has(y)){const k=q_(n.get(y),r.get(y));k!==null&&p.set(y,k),o=o.add(y)}}),s.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return Q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):L.resolve(Sr());let l=-1,u=o;return s.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,o)).next(()=>this.computeViews(e,u,h,Ge())).next(f=>({batchId:l,changes:U_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=va();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=va();return this.indexManager.getCollectionParents(e,o).next(l=>L.forEach(l,u=>{const h=function(p,y){return new iu(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,y)=>{s=s.insert(p,y)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,h)=>{const f=h.getKey();s.get(f)===null&&(s=s.insert(f,Ot.newInvalidDocument(f)))});let l=va();return s.forEach((u,h)=>{const f=o.get(u);f!==void 0&&Uo(f.mutation,h,Mt.empty(),Pe.now()),tf(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ii(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:PR(i.bundledQuery),readTime:Ii(i.readTime)}}(n)),L.resolve()}}/**
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
 */class MR{constructor(){this.overlays=new ht(Q.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return L.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),o=n.length+1,s=new Q(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new ht((h,f)=>h-f);const s=this.overlays.getIterator();for(;s.hasNext();){const h=s.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=o.get(h.largestBatchId);f===null&&(f=Sr(),o=o.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Sr(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new dR(n,r));let o=this.Ir.get(n);o===void 0&&(o=Ge(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class LR{constructor(){this.sessionToken=Jt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.Tr=new Qe(Re.Er),this.dr=new Qe(Re.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Re(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Re(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new _e([])),r=new Re(n,e),i=new Re(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new _e([])),r=new Re(n,e),i=new Re(n,e+1);let o=Ge();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Re(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Qe(Re.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new hR(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.br=this.br.add(new Re(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(s)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return L.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Re(n,0),i=new Re(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const l=this.Dr(s.wr);o.push(l)}),L.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(oe);return n.forEach(i=>{const o=new Re(i,0),s=new Re(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;Q.isDocumentKey(o)||(o=o.child(""));const s=new Re(new Q(o),0);let l=new Qe(oe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},s),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const o=new Re(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Re(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.Mr=e,this.docs=function(){return new ht(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let r=kl();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ot.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=kl();const s=n.path,l=new Q(s.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!s.isPrefixOf(h.path))break;h.path.length>s.length+1||AP(kP(f),r)<=0||(i.has(f.key)||tf(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return L.resolve(o)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UR(this)}getSize(e){return L.resolve(this.size)}}class UR extends NR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.persistence=e,this.Nr=new Wi(n=>Zd(n),ef),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new of,this.targetCount=0,this.kr=Mi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Mi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(o).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),L.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new A_(0),this.Kr=!1,this.Kr=!0,this.$r=new LR,this.referenceDelegate=e(this),this.Ur=new jR(this),this.indexManager=new RR,this.remoteDocumentCache=function(i){return new FR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new CR(n),this.Gr=new DR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new VR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new $R(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class $R extends PP{constructor(e){super(),this.currentSequenceNumber=e}}class sf{constructor(e){this.persistence=e,this.Jr=new of,this.Yr=null}static Zr(e){return new sf(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,fe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Ge(),i=Ge();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new af(e,n.fromCache,r,i)}}/**
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
 */class zR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class HR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return VS()?8:RP(Xe())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new zR;return this.Xi(e,n,s).next(l=>{if(o.result=l,this.zi)return this.es(e,n,s,l.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(go()<=X.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",yo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(go()<=X.DEBUG&&H("QueryEngine","Query:",yo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(go()<=X.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",yo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rr(n))):L.resolve())}Yi(e,n){if(_g(n))return L.resolve(null);let r=Rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xh(n,null,"F"),r=Rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=Ge(...o);return this.Ji.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,s,u.readTime)?this.Yi(e,xh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return _g(n)||i.isEqual(fe.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?L.resolve(null):(go()<=X.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yo(n)),this.rs(e,s,n,SP(i,-1)).next(l=>l))})}ts(e,n){let r=new Qe(YP(e));return n.forEach((i,o)=>{tf(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return go()<=X.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",yo(n)),this.Ji.getDocumentsMatchingQuery(e,n,ir.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ht(oe),this._s=new Wi(o=>Zd(o),ef),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function qR(t,e,n,r){return new WR(t,e,n,r)}async function X_(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let u=Ge();for(const h of i){s.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of o){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:s,addedBatchIds:l}))})})}function KR(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,y=p.keys();let k=L.resolve();return y.forEach(C=>{k=k.next(()=>f.getEntry(u,C)).next(N=>{const D=h.docVersions.get(C);Te(D!==null),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Ge();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function GR(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function QR(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Ag{constructor(){this.activeTargetIds=nR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YR{constructor(){this.so=new Ag,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ag,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XR{_o(e){}shutdown(){}}/**
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
 */class Cg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wa=null;function wc(){return wa===null?wa=function(){return 268435456+Math.round(2147483648*Math.random())}():wa++,"0x"+wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class eb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const l=wc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,o,s),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw wl("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,o,s,l){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=JR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=wc();return new Promise((s,l)=>{const u=new v_;u.setWithCredentials(!0),u.listenOnce(w_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Fa.NO_ERROR:const f=u.getResponseJson();H(We,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case Fa.TIMEOUT:H(We,`RPC '${e}' ${o} timed out`),l(new q(U.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const p=u.getStatus();if(H(We,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const k=y==null?void 0:y.error;if(k&&k.status&&k.message){const C=function(D){const _=D.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(_)>=0?_:U.UNKNOWN}(k.status);l(new q(C,k.message))}else l(new q(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(U.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(We,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);H(We,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=wc(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=I_(),l=E_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=o.join("");H(We,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=s.createWebChannel(f,u);let y=!1,k=!1;const C=new ZR({Io:D=>{k?H(We,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(y||(H(We,`Opening RPC '${e}' stream ${i} transport.`),p.open(),y=!0),H(We,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},To:()=>p.close()}),N=(D,_,v)=>{D.listen(_,w=>{try{v(w)}catch(x){setTimeout(()=>{throw x},0)}})};return N(p,ko.EventType.OPEN,()=>{k||(H(We,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),N(p,ko.EventType.CLOSE,()=>{k||(k=!0,H(We,`RPC '${e}' stream ${i} transport closed`),C.So())}),N(p,ko.EventType.ERROR,D=>{k||(k=!0,wl(We,`RPC '${e}' stream ${i} transport errored:`,D),C.So(new q(U.UNAVAILABLE,"The operation could not be completed")))}),N(p,ko.EventType.MESSAGE,D=>{var _;if(!k){const v=D.data[0];Te(!!v);const w=v,x=w.error||((_=w[0])===null||_===void 0?void 0:_.error);if(x){H(We,`RPC '${e}' stream ${i} received error:`,x);const V=x.status;let j=function(E){const T=Se[E];if(T!==void 0)return mR(T)}(V),I=x.message;j===void 0&&(j=U.INTERNAL,I="Unknown error status: "+V+" with message "+x.message),k=!0,C.So(new q(j,I)),p.close()}else H(We,`RPC '${e}' stream ${i} received:`,v),C.bo(v)}}),N(l,__.STAT_EVENT,D=>{D.stat===Ph.PROXY?H(We,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Ph.NOPROXY&&H(We,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function _c(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){return new pR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,i,o,s,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new J_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Vr(n.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nb extends tb{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Te(!!e.streamToken),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=TR(e.writeResults,e.commitTime),r=Ii(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=_R(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Dh(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(U.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.Lo(e,Dh(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(U.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ib{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{bs(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ae(u);h.L_.add(4),await Rs(h),h.q_.set("Unknown"),h.L_.delete(4),await lu(h)}(this))})}),this.q_=new ib(r,i)}}async function lu(t){if(bs(t))for(const e of t.B_)await e(!0)}async function Rs(t){for(const e of t.B_)await e(!1)}function bs(t){return ae(t).L_.size===0}async function Z_(t,e,n){if(!ru(e))throw e;t.L_.add(1),await Rs(t),t.q_.set("Offline"),n||(n=()=>GR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await lu(t)})}function e0(t,e){return e().catch(n=>Z_(t,n,e))}async function uu(t){const e=ae(t),n=sr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;sb(e);)try{const i=await QR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ab(e,i)}catch(i){await Z_(e,i)}t0(e)&&n0(e)}function sb(t){return bs(t)&&t.O_.length<10}function ab(t,e){t.O_.push(e);const n=sr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function t0(t){return bs(t)&&!sr(t).n_()&&t.O_.length>0}function n0(t){sr(t).start()}async function lb(t){sr(t).p_()}async function ub(t){const e=sr(t);for(const n of t.O_)e.m_(n.mutations)}async function cb(t,e,n){const r=t.O_.shift(),i=rf.from(r,e,n);await e0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await uu(t)}async function hb(t,e){e&&sr(t).V_&&await async function(r,i){if(function(s){return fR(s)&&s!==U.ABORTED}(i.code)){const o=r.O_.shift();sr(r).s_(),await e0(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await uu(r)}}(t,e),t0(t)&&n0(t)}async function Pg(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=bs(n);n.L_.add(3),await Rs(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await lu(n)}async function db(t,e){const n=ae(t);e?(n.L_.delete(2),await lu(n)):e||(n.L_.add(2),await Rs(n),n.q_.set("Unknown"))}function sr(t){return t.U_||(t.U_=function(n,r,i){const o=ae(n);return o.w_(),new nb(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:lb.bind(null,t),mo:hb.bind(null,t),f_:ub.bind(null,t),g_:cb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await uu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new lf(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function r0(t,e){if(Vr("AsyncQueue",`${e}: ${t}`),ru(t))return new q(U.UNAVAILABLE,`${e}: ${t}`);throw t}class fb{constructor(){this.queries=Rg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ae(n),o=i.queries;i.queries=Rg(),o.forEach((s,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(U.ABORTED,"Firestore shutting down"))}}function Rg(){return new Wi(t=>V_(t),L_)}function mb(t){t.Y_.forEach(e=>{e.next()})}var bg,Ng;(Ng=bg||(bg={})).ea="default",Ng.Cache="cache";class pb{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Wi(l=>V_(l),L_),this.Ma=new Map,this.xa=new Set,this.Oa=new ht(Q.comparator),this.Na=new Map,this.La=new of,this.Ba={},this.ka=new Map,this.qa=Mi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gb(t,e,n){const r=_b(t);try{const i=await function(s,l){const u=ae(s),h=Pe.now(),f=l.reduce((k,C)=>k.add(C.key),Ge());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let C=kl(),N=Ge();return u.cs.getEntries(k,f).next(D=>{C=D,C.forEach((_,v)=>{v.isValidDocument()||(N=N.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,C)).next(D=>{p=D;const _=[];for(const v of l){const w=uR(v,p.get(v.key).overlayedDocument);w!=null&&_.push(new Kr(v.key,w,R_(w.value.mapValue),vn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,_,l)}).next(D=>{y=D;const _=D.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(k,D.batchId,_)})}).then(()=>({batchId:y.batchId,changes:U_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,l,u){let h=s.Ba[s.currentUser.toKey()];h||(h=new ht(oe)),h=h.insert(l,u),s.Ba[s.currentUser.toKey()]=h}(r,i.batchId,n),await cu(r,i.changes),await uu(r.remoteStore)}catch(i){const o=r0(i,"Failed to persist write");n.reject(o)}}function xg(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const l=s.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const u=ae(s);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const y of p.j_)y.Z_(l)&&(h=!0)}),h&&mb(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yb(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await KR(n.localStore,e);o0(n,r,null),i0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await cu(n,i)}catch(i){await k_(i)}}async function vb(t,e,n){const r=ae(t);try{const i=await function(s,l){const u=ae(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(Te(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);o0(r,e,n),i0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await cu(r,i)}catch(i){await k_(i)}}function i0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function o0(t,e,n){const r=ae(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function cu(t,e,n){const r=ae(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{s.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=af.Wi(u.targetId,h);o.push(p)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,h){const f=ae(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,y=>L.forEach(y.$i,k=>f.persistence.referenceDelegate.addReference(p,y.targetId,k)).next(()=>L.forEach(y.Ui,k=>f.persistence.referenceDelegate.removeReference(p,y.targetId,k)))))}catch(p){if(!ru(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const k=f.os.get(y),C=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(y,N)}}}(r.localStore,o))}async function wb(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await X_(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(U.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await cu(n,r.hs)}}function _b(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vb.bind(null,e),e}class Pl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=au(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return qR(this.persistence,new HR,e.initialUser,this.serializer)}Ga(e){return new BR(sf.Zr,this.serializer)}Wa(e){return new YR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pl.provider={build:()=>new Pl};class Lh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wb.bind(null,this.syncEngine),await db(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fb}()}createDatastore(e){const n=au(e.databaseInfo.databaseId),r=function(o){return new eb(o)}(e.databaseInfo);return function(o,s,l,u){return new rb(o,s,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new ob(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>xg(this.syncEngine,n,0),function(){return Cg.D()?new Cg:new XR}())}createSyncEngine(e,n){return function(i,o,s,l,u,h,f){const p=new pb(i,o,s,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ae(i);H("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Rs(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Lh.provider={build:()=>new Lh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=S_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=r0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ec(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await X_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Og(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ib(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Pg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Pg(e.remoteStore,i)),t._onlineComponents=e}async function Ib(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ec(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;wl("Error using user provided cache. Falling back to memory cache: "+n),await Ec(t,new Pl)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Ec(t,new Pl);return t._offlineComponents}async function Tb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Og(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Og(t,new Lh))),t._onlineComponents}function Sb(t){return Tb(t).then(e=>e.syncEngine)}/**
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
 */function s0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(t,e,n){if(!n)throw new q(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kb(t,e,n,r){if(e===!0&&r===!0)throw new q(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mg(t){if(!Q.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lg(t){if(Q.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function l0(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uf(t);throw new q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=s0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pP;switch(r.type){case"firstParty":return new wP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Dg.get(n);r&&(H("ComponentProvider","Removing Datastore"),Dg.delete(n),r.terminate())}(this),Promise.resolve()}}function Ab(t,e,n,r={}){var i;const o=(t=l0(t,hu))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&wl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=qe.MOCK_USER;else{l=NS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new qe(h)}t._authCredentials=new gP(new T_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cf(this.firestore,e,this._query)}}class wn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wn(this.firestore,e,this._key)}}class tr extends cf{constructor(e,n,r){super(e,n,KP(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wn(this.firestore,null,new Q(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function Cb(t,e,...n){if(t=nt(t),a0("collection","path",e),t instanceof hu){const r=_e.fromString(e,...n);return Lg(r),new tr(t,null,r)}{if(!(t instanceof wn||t instanceof tr))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Lg(r),new tr(t.firestore,null,r)}}function Pb(t,e,...n){if(t=nt(t),arguments.length===1&&(e=S_.newId()),a0("doc","path",e),t instanceof hu){const r=_e.fromString(e,...n);return Mg(r),new wn(t,null,new Q(r))}{if(!(t instanceof wn||t instanceof tr))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Mg(r),new wn(t.firestore,t instanceof tr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new J_(this,"async_queue_retry"),this.Vu=()=>{const r=_c();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=_c();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=_c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ru(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw Vr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=lf.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class u0 extends hu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Fg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fg(e),this._firestoreClient=void 0,await e}}}function Rb(t,e){const n=typeof t=="object"?t:Ud(),r=typeof t=="string"?t:e||"(default)",i=Wr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=RS("firestore");o&&Ab(i,...o)}return i}function bb(t){if(t._terminated)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Nb(t),t._firestoreClient}function Nb(t){var e,n,r;const i=t._freezeSettings(),o=function(l,u,h,f){return new OP(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,s0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Eb(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ms(Jt.fromBase64String(e))}catch(n){throw new q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ms(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */class f0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=/^__.*__$/;class Ob{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ps(e,this.data,n,this.fieldTransforms)}}function m0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class hf{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new hf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Rl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(m0(this.Cu)&&xb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Db{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||au(e)}Qu(e,n,r,i=!1){return new hf({Cu:e,methodName:n,qu:r,path:Ve.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mb(t){const e=t._freezeSettings(),n=au(t._databaseId);return new Db(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lb(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);v0("Data must be an object, but it was:",s,r);const l=g0(r,s);let u,h;if(o.merge)u=new Mt(s.fieldMask),h=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const p of o.mergeFields){const y=Vb(e,p,n);if(!s.contains(y))throw new q(U.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);jb(f,y)||f.push(y)}u=new Mt(f),h=s.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=s.fieldTransforms;return new Ob(new Dt(l),u,h)}function p0(t,e){if(y0(t=nt(t)))return v0("Unsupported field value:",e,t),g0(t,e);if(t instanceof h0)return function(r,i){if(!m0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const l of r){let u=p0(l,i.Lu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Pe.fromDate(r);return{timestampValue:Oh(i.serializer,o)}}if(r instanceof Pe){const o=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oh(i.serializer,o)}}if(r instanceof d0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ms)return{bytesValue:gR(i.serializer,r._byteString)};if(r instanceof wn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Q_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof f0)return function(s,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return nf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${uf(r)}`)}(t,e)}function g0(t,e){const n={};return C_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(t,(r,i)=>{const o=p0(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function y0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof d0||t instanceof ms||t instanceof wn||t instanceof h0||t instanceof f0)}function v0(t,e,n){if(!y0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=uf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Vb(t,e,n){if((e=nt(e))instanceof c0)return e._internalPath;if(typeof e=="string")return Ub(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Fb=new RegExp("[~\\*/\\[\\]]");function Ub(t,e,n){if(e.search(Fb)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new c0(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new q(U.INVALID_ARGUMENT,l+t+u)}function jb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function $b(t,e){const n=l0(t.firestore,u0),r=Pb(t),i=Bb(t.converter,e);return zb(n,[Lb(Mb(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,vn.exists(!1))]).then(()=>r)}function zb(t,e){return function(r,i){const o=new Pr;return r.asyncQueue.enqueueAndForget(async()=>gb(await Sb(r),i,o)),o.promise}(bb(t),e)}(function(e,n=!0){(function(i){Hi=i})(Bi),Xt(new Ut("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new u0(new yP(r.getProvider("auth-internal")),new EP(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Il(h.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),kt(dg,"4.7.3",e),kt(dg,"4.7.3","esm2017")})();const w0="@firebase/installations",df="0.6.9";/**
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
 */const _0=1e4,E0=`w:${df}`,I0="FIS_v2",Hb="https://firebaseinstallations.googleapis.com/v1",Wb=60*60*1e3,qb="installations",Kb="Installations";/**
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
 */const Gb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ur=new Hr(qb,Kb,Gb);function T0(t){return t instanceof Bt&&t.code.includes("request-failed")}/**
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
 */function S0({projectId:t}){return`${Hb}/projects/${t}/installations`}function k0(t){return{token:t.token,requestStatus:2,expiresIn:Yb(t.expiresIn),creationTime:Date.now()}}async function A0(t,e){const r=(await e.json()).error;return Ur.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function C0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Qb(t,{refreshToken:e}){const n=C0(t);return n.append("Authorization",Xb(e)),n}async function P0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Yb(t){return Number(t.replace("s","000"))}function Xb(t){return`${I0} ${t}`}/**
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
 */async function Jb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=S0(t),i=C0(t),o=e.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const s={fid:n,authVersion:I0,appId:t.appId,sdkVersion:E0},l={method:"POST",headers:i,body:JSON.stringify(s)},u=await P0(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:k0(h.authToken)}}else throw await A0("Create Installation",u)}/**
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
 */function R0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Zb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const e2=/^[cdef][\w-]{21}$/,Vh="";function t2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=n2(t);return e2.test(n)?n:Vh}catch{return Vh}}function n2(t){return Zb(t).substr(0,22)}/**
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
 */function du(t){return`${t.appName}!${t.appId}`}/**
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
 */const b0=new Map;function N0(t,e){const n=du(t);x0(n,e),r2(n,e)}function x0(t,e){const n=b0.get(t);if(n)for(const r of n)r(e)}function r2(t,e){const n=i2();n&&n.postMessage({key:t,fid:e}),o2()}let kr=null;function i2(){return!kr&&"BroadcastChannel"in self&&(kr=new BroadcastChannel("[Firebase] FID Change"),kr.onmessage=t=>{x0(t.data.key,t.data.fid)}),kr}function o2(){b0.size===0&&kr&&(kr.close(),kr=null)}/**
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
 */const s2="firebase-installations-database",a2=1,jr="firebase-installations-store";let Ic=null;function ff(){return Ic||(Ic=Dw(s2,a2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(jr)}}})),Ic}async function bl(t,e){const n=du(t),i=(await ff()).transaction(jr,"readwrite"),o=i.objectStore(jr),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&N0(t,e.fid),e}async function O0(t){const e=du(t),r=(await ff()).transaction(jr,"readwrite");await r.objectStore(jr).delete(e),await r.done}async function fu(t,e){const n=du(t),i=(await ff()).transaction(jr,"readwrite"),o=i.objectStore(jr),s=await o.get(n),l=e(s);return l===void 0?await o.delete(n):await o.put(l,n),await i.done,l&&(!s||s.fid!==l.fid)&&N0(t,l.fid),l}/**
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
 */async function mf(t){let e;const n=await fu(t.appConfig,r=>{const i=l2(r),o=u2(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Vh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function l2(t){const e=t||{fid:t2(),registrationStatus:0};return D0(e)}function u2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ur.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=c2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:h2(t)}:{installationEntry:e}}async function c2(t,e){try{const n=await Jb(t,e);return bl(t.appConfig,n)}catch(n){throw T0(n)&&n.customData.serverCode===409?await O0(t.appConfig):await bl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function h2(t){let e=await Ug(t.appConfig);for(;e.registrationStatus===1;)await R0(100),e=await Ug(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mf(t);return r||n}return e}function Ug(t){return fu(t,e=>{if(!e)throw Ur.create("installation-not-found");return D0(e)})}function D0(t){return d2(t)?{fid:t.fid,registrationStatus:0}:t}function d2(t){return t.registrationStatus===1&&t.registrationTime+_0<Date.now()}/**
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
 */async function f2({appConfig:t,heartbeatServiceProvider:e},n){const r=m2(t,n),i=Qb(t,n),o=e.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const s={installation:{sdkVersion:E0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},u=await P0(()=>fetch(r,l));if(u.ok){const h=await u.json();return k0(h)}else throw await A0("Generate Auth Token",u)}function m2(t,{fid:e}){return`${S0(t)}/${e}/authTokens:generate`}/**
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
 */async function pf(t,e=!1){let n;const r=await fu(t.appConfig,o=>{if(!M0(o))throw Ur.create("not-registered");const s=o.authToken;if(!e&&y2(s))return o;if(s.requestStatus===1)return n=p2(t,e),o;{if(!navigator.onLine)throw Ur.create("app-offline");const l=w2(o);return n=g2(t,l),l}});return n?await n:r.authToken}async function p2(t,e){let n=await jg(t.appConfig);for(;n.authToken.requestStatus===1;)await R0(100),n=await jg(t.appConfig);const r=n.authToken;return r.requestStatus===0?pf(t,e):r}function jg(t){return fu(t,e=>{if(!M0(e))throw Ur.create("not-registered");const n=e.authToken;return _2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function g2(t,e){try{const n=await f2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await bl(t.appConfig,r),n}catch(n){if(T0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await O0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bl(t.appConfig,r)}throw n}}function M0(t){return t!==void 0&&t.registrationStatus===2}function y2(t){return t.requestStatus===2&&!v2(t)}function v2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Wb}function w2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _2(t){return t.requestStatus===1&&t.requestTime+_0<Date.now()}/**
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
 */async function E2(t){const e=t,{installationEntry:n,registrationPromise:r}=await mf(e);return r?r.catch(console.error):pf(e).catch(console.error),n.fid}/**
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
 */async function I2(t,e=!1){const n=t;return await T2(n),(await pf(n,e)).token}async function T2(t){const{registrationPromise:e}=await mf(t);e&&await e}/**
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
 */function S2(t){if(!t||!t.options)throw Tc("App Configuration");if(!t.name)throw Tc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tc(t){return Ur.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="installations",k2="installations-internal",A2=t=>{const e=t.getProvider("app").getImmediate(),n=S2(e),r=Wr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},C2=t=>{const e=t.getProvider("app").getImmediate(),n=Wr(e,L0).getImmediate();return{getId:()=>E2(n),getToken:i=>I2(n,i)}};function P2(){Xt(new Ut(L0,A2,"PUBLIC")),Xt(new Ut(k2,C2,"PRIVATE"))}P2();kt(w0,df);kt(w0,df,"esm2017");/**
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
 */const Nl="analytics",R2="firebase_id",b2="origin",N2=60*1e3,x2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gf="https://www.googletagmanager.com/gtag/js";/**
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
 */const ct=new Jl("@firebase/analytics");/**
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
 */const O2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gt=new Hr("analytics","Analytics",O2);/**
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
 */function D2(t){if(!t.startsWith(gf)){const e=gt.create("invalid-gtag-resource",{gtagURL:t});return ct.warn(e.message),""}return t}function V0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function M2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function L2(t,e){const n=M2("firebase-js-sdk-policy",{createScriptURL:D2}),r=document.createElement("script"),i=`${gf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function V2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function F2(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const u=(await V0(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(l){ct.error(l)}t("config",i,o)}async function U2(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const l=await V0(n);for(const u of s){const h=l.find(p=>p.measurementId===u),f=h&&e[h.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){ct.error(o)}}function j2(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[l,u]=s;await U2(t,e,n,l,u)}else if(o==="config"){const[l,u]=s;await F2(t,e,n,r,l,u)}else if(o==="consent"){const[l,u]=s;t("consent",l,u)}else if(o==="get"){const[l,u,h]=s;t("get",l,u,h)}else if(o==="set"){const[l]=s;t("set",l)}else t(o,...s)}catch(l){ct.error(l)}}return i}function B2(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=j2(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function $2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(gf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=30,H2=1e3;class W2{constructor(e={},n=H2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const F0=new W2;function q2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function K2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:q2(r)},o=x2.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function G2(t,e=F0,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw gt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw gt.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new X2;return setTimeout(async()=>{l.abort()},n!==void 0?n:N2),U0({appId:r,apiKey:i,measurementId:o},s,l,e)}async function U0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=F0){var o;const{appId:s,measurementId:l}=t;try{await Q2(r,e)}catch(u){if(l)return ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:l};throw u}try{const u=await K2(t);return i.deleteThrottleMetadata(s),u}catch(u){const h=u;if(!Y2(h)){if(i.deleteThrottleMetadata(s),l)return ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:l};throw u}const f=Number((o=h==null?void 0:h.customData)===null||o===void 0?void 0:o.httpStatus)===503?Lp(n,i.intervalMillis,z2):Lp(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,p),ct.debug(`Calling attemptFetch again in ${f} millis`),U0(t,p,r,i)}}function Q2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Y2(t){if(!(t instanceof Bt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class X2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function J2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(){if(bw())try{await Nw()}catch(t){return ct.warn(gt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ct.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eN(t,e,n,r,i,o,s){var l;const u=G2(t);u.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>ct.error(k)),e.push(u);const h=Z2().then(k=>{if(k)return r.getId()}),[f,p]=await Promise.all([u,h]);$2(o)||L2(o,f.measurementId),i("js",new Date);const y=(l=s==null?void 0:s.config)!==null&&l!==void 0?l:{};return y[b2]="firebase",y.update=!0,p!=null&&(y[R2]=p),i("config",f.measurementId,y),f.measurementId}/**
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
 */class tN{constructor(e){this.app=e}_delete(){return delete jo[this.app.options.appId],Promise.resolve()}}let jo={},Bg=[];const $g={};let Sc="dataLayer",nN="gtag",zg,j0,Hg=!1;function rN(){const t=[];if(Rw()&&t.push("This is a browser extension environment."),FS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=gt.create("invalid-analytics-context",{errorInfo:e});ct.warn(n.message)}}function iN(t,e,n){rN();const r=t.options.appId;if(!r)throw gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(jo[r]!=null)throw gt.create("already-exists",{id:r});if(!Hg){V2(Sc);const{wrappedGtag:o,gtagCore:s}=B2(jo,Bg,$g,Sc,nN);j0=o,zg=s,Hg=!0}return jo[r]=eN(t,Bg,$g,e,zg,Sc,n),new tN(t)}function oN(t=Ud()){t=nt(t);const e=Wr(t,Nl);return e.isInitialized()?e.getImmediate():sN(t)}function sN(t,e={}){const n=Wr(t,Nl);if(n.isInitialized()){const i=n.getImmediate();if(os(e,n.getOptions()))return i;throw gt.create("already-initialized")}return n.initialize({options:e})}function aN(t,e,n,r){t=nt(t),J2(j0,jo[t.app.options.appId],e,n,r).catch(i=>ct.error(i))}const Wg="@firebase/analytics",qg="0.10.8";function lN(){Xt(new Ut(Nl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return iN(r,i,n)},"PUBLIC")),Xt(new Ut("analytics-internal",t,"PRIVATE")),kt(Wg,qg),kt(Wg,qg,"esm2017");function t(e){try{const n=e.getProvider(Nl).getImmediate();return{logEvent:(r,i,o)=>aN(n,r,i,o)}}catch(n){throw gt.create("interop-component-reg-failed",{reason:n})}}}lN();const uN={apiKey:"AIzaSyDYJkYqi7VZ6c6gm_vGlmS74w67zFiMaNM",authDomain:"menstrual-site.firebaseapp.com",projectId:"menstrual-site",storageBucket:"menstrual-site.appspot.com",messagingSenderId:"944422220037",appId:"1:944422220037:web:2e3242885a71552956876c",measurementId:"G-KJ2XN8WT3G"},yf=Mw(uN),B0=fP(yf);oN(yf);const cN=Rb(yf);function hN(){const[t,e]=M.useState(""),[n,r]=M.useState(""),i=async o=>{o.preventDefault();try{await ZA(B0,t,n),alert("Login successful!")}catch{alert("Login failed. Check your credentials.")}};return P.createElement("div",{className:"login-page"},P.createElement("div",{className:"login-card"},P.createElement("h2",null,"Login"),P.createElement("p",null,"Login to share your own story or comment on others."),P.createElement("form",{onSubmit:i},P.createElement("input",{type:"email",placeholder:"Your Email",required:!0,value:t,onChange:o=>e(o.target.value)}),P.createElement("input",{type:"password",placeholder:"Your Password",required:!0,value:n,onChange:o=>r(o.target.value)}),P.createElement("button",{type:"submit"},"🔐 Log In"))))}function dN(){const[t,e]=M.useState({name:"",age:"",state:"",language:"",content:""}),[n,r]=M.useState(null);M.useEffect(()=>{const s=nC(B0,l=>{r(l)});return()=>s()},[]);const i=s=>{const{name:l,value:u}=s.target;e(h=>({...h,[l]:u}))},o=async s=>{if(s.preventDefault(),!n){alert("Please login first.");return}const{name:l,age:u,state:h,language:f,content:p}=t;if(!l||!u||!h||!f||!p)return alert("Please fill in all fields.");try{await $b(Cb(cN,"stories"),{...t,email:n.email,createdAt:Pe.now()}),alert("✅ Story submitted successfully!"),e({name:"",age:"",state:"",language:"",content:""})}catch(y){alert("❌ Failed to submit story."),console.error("Firestore Error:",y)}};return P.createElement("div",{className:"submit-container"},P.createElement("div",{className:"submit-card"},P.createElement("h2",null,"📝 Share Your Story"),P.createElement("p",null,"Your voice can inspire and empower others. Tell us your journey."),P.createElement("form",{onSubmit:o},P.createElement("input",{type:"text",name:"name",placeholder:"Your Name",value:t.name,onChange:i,required:!0}),P.createElement("input",{type:"number",name:"age",placeholder:"Your Age",value:t.age,onChange:i,required:!0}),P.createElement("input",{type:"text",name:"state",placeholder:"Your State",value:t.state,onChange:i,required:!0}),P.createElement("input",{type:"text",name:"language",placeholder:"Language",value:t.language,onChange:i,required:!0}),P.createElement("textarea",{name:"content",placeholder:"Write your story here...",value:t.content,onChange:i,required:!0}),P.createElement("button",{type:"submit"},"📤 Submit Story"))))}const vo={en:{Rajasthan:[{name:"A Scarf and Strength",age:20,content:`When I first got my period, I was scared and didn't know anything about it, but I told 
my mother, and she helped me. I am comfortable discussing menstruation with close 
female friends and family, but I go blank when it comes to talking about it with 
males. In my family, there aren’t many restrictions, but we do have some, such as 
having to keep a distance during family rituals and worship. My culture has a 
negative view of menstruation, but this is misguided since it does not make us 
impure or effect rituals in negative way. 
I sometimes feel ashamed and embarrassed when I have to talk about menstruation 
or when I'm on my period and something happens, like in eighth grade. I was at 
school, and my period suddenly started, even though it had only been 14 days since 
my last one. I wasn’t prepared and didn’t have a pad with me. At first, I panicked, 
especially since I was new to the school and didn’t have many friends at the time. I 
managed by using a scarf as a temporary solution, but I had a very heavy flow, and 
my clothes were sometimes stained, which made me feel very embarrassed. 
I live in a society where talking about menstruation is considered shameful, and that 
mindset has influenced me. However, in the future, when I have my own family, I 
want menstruation to be a normal topic we can discuss without any hesitation. 
Learning about periods through mobile phones and TV helps, but hearing personal 
experiences from family members or attending school sessions would give a much 
better understanding. Menstruation should be part of school education so teachers 
can provide a clear understanding of it to students, both boys and girls. This way, 
boys can support girls during their periods. It would be helpful to teach this before 
age 12, as many girls begin menstruating around that age. 
If family and friends support girls during menstruation, it makes it easier to handle. 
Periods do affect my studies and daily activities—sometimes I feel angry about being 
female because of the pain and difficulty. During exams, if I have my period, I can’t 
concentrate as well, which affects my marks. Traveling or attending family functions 
is difficult due to my heavy flow and severe cramps, but thankfully, I haven’t missed 
any major opportunities because of my period. I do, however, constantly worry about 
when my next period will start. 
In the past, girls were often required to stay in one room during their periods, which I 
believe was wrong, though it did allow them some rest. Things are changing now, 
which is great, but there’s still a long way to go. Even today, we often have to carry on 
with all our regular activities without being able to tell anyone that we're suffering 
from period cramps. In my life, I haven’t seen much change in attitudes toward 
menstruation. We may use pads now instead of cloth, but open conversations about 
menstruation are still rare. I hope that in the near future, this will change completely`},{name:"Cloth, Courage, and Change",age:19,content:`When I got my period, I was 16 years old, and I didn’t know anything about it. 
My elder sister suggested using cloth during my period and told me not to say 
anything to anyone. I somehow managed through it, but I spent the whole day 
thinking about what was happening and feeling irritated. I thought to myself 
that I didn’t want to live with this pain. Gradually, I learned to manage my 
period. There are no more restrictions now, but when my mother was sick, we 
had to do all the work during our periods. Usually, I had to cook, but in other 
situations, we were restricted from touching water sources and going to the 
kitchen. 
Now, I have two children, and my daughter knows everything about periods. 
She hasn’t gotten her period yet, but she learned about it from mobile devices 
and TV. I want to talk to her about these things, but I feel ashamed. I think that 
when she gets her period, I will definitely tell her everything. I feel 
embarrassed when discussing these topics with anyone, but I believe there 
should be no restrictions regarding this. No one should feel ashamed; it is a 
natural process that helps prevent many diseases.`},{name:"Breaking the Silence with Support",age:33,content:`I got my period when I was 15 years old. I already knew about it from my older sister, but on 
the first day, I felt very tense and irritated. Over time, I learned to manage my periods with 
her help, and it gradually became easier. Back then, sanitary products weren’t readily 
available, so we had to use cloth. 
When it comes to restrictions, we all followed similar practices: we weren’t allowed to touch 
water sources, cook, or perform aarti. However, if there was no other option, we had to do 
the tasks anyway. I wasn’t very comfortable discussing periods with friends and family, but I 
do talk openly with my husband, who is supportive during that time. 
Nowadays, kids learn a lot about periods through social media, but in my time, there 
weren’t as many resources or advanced technology to educate us. I don’t have children yet, 
but I think my family wouldn’t hesitate to talk about periods openly if I did. From the time I 
got my first period until now, many things have changed, and I believe things will continue to 
change even faster in the future.`}],Maharashtra:[{name:"Whispers with My Brother",age:18,content:`On the very first day of my periods, I was home alone and had no idea about what periods 
are. I was a bit frighten but I have heard about periods. I waited the whole day for my 
mother to return and then she helped and discussed it with me. I am comfortable in 
discussing it with my female family member. My brother and I can indirectly talk about it 
without mentioning the words “periods”. I do not talk with my father about it. I can’t pray to 
God, can’t touch food directly, have to be away from worship place and many more. 
Honestly it feels like I am treated as a Covid patient who needs to be isolated. It has negative 
views about menstruation as for them women having periods are considered impure. No, I 
haven’t been embarrassed by my periods as my friends are pretty helpful and 
understanding. I believe that there are many misconceptions about periods such that 
women who are menstruating are impure and should not touched. They should not touch 
food as it will be got rotten and many more. I was educated about periods in a really good 
way in my 10th   and 11th class. It helped me as well as my male classmates to really 
understand what periods are and how women should be treated during her cycle. Books 
were really helpful in teaching us. Honestly emotional support is one of the best things a 
friend or family member can give to someone who is in her periods. Since we have to face a 
lot of physical pain, we need emotional support that helps us to bear the pain. They can also 
help by giving hot water bags and food we crave for. My periods are really bad. I have back 
pain for a whole week and cramps all over my body. This results that I had to skip some of 
my classes or had to attend them in extreme pain. I had skipped many trips to temples or 
festivals celebrations as I was in my periods due to pain as well as the social taboo. As per 
my opinion, I have seen the change regarding menstruation as education plays its role. More 
people getting educated about menstruating cycle results in helping females to discuss with 
friends and colleagues. In a similar way more and more peoples should be educated on this 
topic and continue to spread awareness about It.`},{name:"A Family’s Shared Responsibility",age:20,content:`When my mom is on her period, the household work becomes our responsibility, us men. I 
take over the cooking, and my brother handles the sweeping and mopping. We make sure 
Mom doesn’t have to lift a finger more than necessary. And when my sister is on her period, 
we’re extra mindful of her mood. If she’s irritable or frustrated, we just listen quietly without 
arguing. I don’t nag her or cause any trouble. 
As for my friends or girlfriend, I’m always there to do whatever makes them comfortable. 
Whether it’s chocolates or anything else they like, I get it for them without question. And it’s 
not just about big things; I try to help out with the small gestures, too, like bringing a hot 
water bag or giving a head massage if they need one. For me, it’s just natural to be there for 
them in whatever way I can. ..`},{name:"Emotional Rollercoaster During Exams",age:20,content:`About 15 days before my period, I start to feel like a different person. My mood changes, 
and it always seems to happen around exam time, which makes things even harder. My 
emotions get out of hand, affecting both my studies and my mindset. During those days, I 
just want to sleep, which makes it tough to focus on my work. I struggle with the 
discomfort—pain, sweating, and that unpleasant feeling of not being at my best. 
Despite all this, I push myself to give my best effort so that my academics don’t suffer too 
much. It’s challenging, and it feels like a cycle that just keeps repeating, but I try to keep 
going, no matter how hard it gets.`},{name:"Cycling Away the Cramps",age:19,content:`Back in my school days, I used to experience painful cramps every month. I wasn’t very 
physically active then, and living in a city with poor air quality might have made things 
worse. But since coming to college, things have changed. I got involved in sports for a while 
and started cycling around campus, and now those cramps are practically non-existent. 
Being in an engineering college, I often find myself as the only woman in certain situations. 
Because of this, I’ve learned to be prepared, always carrying a sanitary napkin when my 
period is close. At this point, I don’t feel much about it—it’s just become a part of my 
routine..`},{name:"The Cost of Dignity",age:19,content:`One stigma I’ve observed in my area is that some lower-income families avoid buying 
          sanitary napkins simply because they can’t afford them. This includes many domestic 
          workers, who end up using less hygienic alternatives. The lack of access to sanitary products 
          due to financial constraints often goes unaddressed, leaving these women with limited 
          options. It's a quiet issue, but it affects the health and dignity of many. `},{name:"Pink Room and Temples",age:19,content:`In Maharashtra, I've seen that attitudes toward periods are gradually changing. Girls today 
aren’t as ashamed to talk about it, though one restriction still stands strong: many people, 
myself included, are discouraged from entering temples or touching items used for Puja 
during that time. I imagine that in some villages, these conversations are still avoided, and 
addressing period-related issues openly might be rare. 
Back in my school, there was a “pink room,” a small space for girls reaching that age, almost 
like a rest room for when they had their period. It wasn’t particularly unique, but they kept 
pads available, which was helpful. It’s the kind of resource I believe every school and college 
should have, to make things a little easier for girls when they need it. `},{name:"Inclusivity Needed in Education",age:20,content:`I firmly believe that the stigma surrounding periods will persist until it becomes a topic that 
can be openly discussed. I’ve witnessed instances in college where sessions on menstruation 
were held, inviting all the girls from BTech first-year students to postgraduates. But the 
glaring absence of boys was striking. At this stage, girls are already quite familiar with the 
topic, so it seems equally important for boys to attend these sessions. 
Unfortunately, our mentality often prevents such openness. We don’t even consider 
including boys in these discussions, let alone expect them to participate. When we talk 
about menstrual hygiene and related topics, it shouldn’t solely focus on women; it should be 
inclusive, allowing boys to engage as well. After all, those boys will one day become fathers, 
and they have the power to foster an open-minded culture regarding menstruation, 
ensuring that future generations approach the topic without stigma `}],Haryana:[{name:"Hidden Pain Public Shame",age:18,content:`I got my first period when I was in the 8th grade. I didn’t feel any pain, but I also didn’t want 
anyone to know. Back then, many girls my age felt ashamed to admit they’d started 
menstruating—even I did. We somehow thought it was something to be embarrassed about, 
maybe even dirty. Over time, though, it became normal for me, and I accepted it as just 
another part of life. Yet, I know that some girls still avoid going to temples or doing Puja 
because their families believe they’re “impure” during that time. It’s a tradition that 
continues for many, even now. `},{name:"Discrimination",age:19,content:`I like to think I'm pretty aware when it comes to understanding periods, both the biological 
and physical aspects. Whenever I know that a friend or family member is on their period, I 
try to be a little extra thoughtful. Maybe it’s just making sure I don’t say or do anything that 
might accidentally irritate them, or helping them with small things to lighten their load. I’ve 
found that taking on a few tasks for them, even little ones, can make a difference. 
Sometimes, they may say things they don’t really mean, maybe due to the discomfort or 
mood swings, but I don’t take it personally—I just let it slide. And, of course, I always have 
chocolates ready. You really can’t go wrong with chocolates! 
Most importantly, I believe in treating them with respect, especially during this time when 
they might be feeling extra sensitive or uncomfortable. I make a conscious effort to do so, 
and I can only hope it’s appreciated. But I’ve seen that, sadly, not everyone in our society 
shares the same view. What bothers me is that some people still cling to outdated social 
norms and stigmas around menstruation, which affects how others are treated during their 
periods. Ironically, many of these people are women themselves, often those from older 
generations who grew up with a different mindset. 
One memory sticks out to me, and it really opened my eyes. It was during Diwali, and one of 
my family members wasn’t sitting with us for the puja. I was young then and didn’t fully 
understand why she wasn’t there. Later, I found out she was excluded simply because she 
was on her period. It didn’t feel right to me, and I remember feeling bad about it once I 
understood the reason. It made me realize how deeply ingrained these beliefs are and how 
unfair they can be, even in a setting that should be about togetherness. 
I think this is something that can change with more awareness, especially as people begin to 
question these old practices. Respect, kindness, and understanding should always come first. 
Hopefully, with time, these ideas can take root in more people’s minds, especially those who 
grew up with different views. It’s small actions and open conversations that might bring 
about a real shift in how we approach something as natural as menstruation. `}],AndhraPradesh:[{name:"Celebration Amidst Tension",age:18,content:`My first menstrual cycle has happened when I was in 7th grade. I 
remember it clearly—it was a Sunday morning. I had just woken up 
and noticed a blood stain. I felt a bit tense, as I was unaware of what 
menstruation was. I told my mother, thinking I was unwell, but she 
reassured me and made me feel comfortable. 
In our state, Hindu tradition celebrates a girl's first menstrual cycle 
with a special ceremony. A function is organized, and relatives gather 
to celebrate. Various rituals are performed, like applying turmeric on 
the face and doing an aarti in the evenings. Every morning, my 
grandmother would bathe me using gram flour, a nutritious diet was 
provided, and a separate mattress was arranged for me. 
An incident in 8th grade stands out. I used to get irregular periods, 
and during one break, I got my period unexpectedly. I was insecure 
about it and even cried, worried about staining and what my 
classmates might think. Later, my father came to pick me up from 
school, and I’m grateful that he reassured me. He explained that 
menstruation is a natural process every woman experience, and 
there’s no reason to feel embarrassed. 
Menstruation doesn’t significantly affect my daily activities, though I 
do get cramps and feel like sleeping more during my periods. In my 
opinion, attitudes toward menstruation have evolved; people are 
becoming more educated and understanding. However, in some rural 
areas, it’s still regarded as impure.`},{name:"A Positive First",age:19,content:`n my home and community, there were very few restrictions, so I didn’t feel uncomfortable 
or limited in any way. In my state, when we get our periods, families often celebrate with a 
small function, seeing it as something positive. This belief made my first experience a good 
one, without the stigma or secrecy that sometimes surrounds it. I was able to carry on with 
my daily activities smoothly, feeling supported and at ease.`},{name:"Isolation and Acceptance",age:19,content:`I got my first period in the 10th standard, which felt pretty late compared to all my 
classmates. I was overwhelmed with insecurity and a whirlwind of random fears about what 
it all meant. I was living in a hostel at the time, and one early morning at 6 a.m., I called my 
mom in tears, saying that I was bleeding. To my surprise, she responded with joy, celebrating 
that I had finally gotten my period and was now a “woman.” 
Unfortunately, my sister was suffering from chickenpox at the time, so my parents couldn’t 
take me home. Instead, we went to my grandparents' house in the village. Being with them 
was a challenge because their beliefs about menstruation were rooted in a different 
generation. I felt uncomfortable; I had to sleep on the floor for a few days, despite suffering 
from severe stomach pain. It was strange that nobody, not even my mom, was allowed to 
touch me. 
Additionally, I had to handle all the chores by myself, which was a completely new 
experience for me. The dietary restrictions were also tough; I was only allowed to eat sweets 
and no spicy food at all. These customs made me feel out of place and uncomfortable in my 
grandparents’ home, amplifying the awkwardness of my first period experience.`},{name:"Tradition of Taboos",age:18,content:`I've heard that in many households, girls are restricted from entering the kitchen or touching 
pickles and items related to God when they are on their periods. This practice reflects a 
belief in impurity that still exists in some communities. It’s disheartening to see how these 
traditions can limit a girl's freedom during a natural biological process. Such restrictions not 
only reinforce stigma but can also affect a girl’s self-esteem and sense of belonging within 
her family. These beliefs highlight the need for more open discussions about menstruation 
and the importance of breaking free from outdated customs.`},{name:"A Royal Start, Isolated Aftermath",age:19,content:`In Andhra Pradesh, the onset of menstruation is often celebrated as a significant and festive 
event, especially for the first period. This event is treated almost like a festival, and there are 
many customs that make it a memorable occasion. 
When a girl has her first period, she is treated as a royal guest in her own home. For three 
days, no one is allowed to touch her, and she is given a special place to stay, usually her own 
room or a designated area. All her daily routines, from eating to sleeping, are done 
independently, as per tradition. On the fourth day, her grandmother and mother perform a 
ceremonial bath for her. Family members and relatives gather to celebrate, acknowledging 
this as a rite of passage and an emotional milestone. It is a moment when parents recognize 
that their daughter is maturing, and this celebration marks the transition to womanhood. 
However, after this initial period celebration, subsequent menstruations follow a different, 
much stricter tradition. During these times, she is required to stay isolated. She has a 
designated area in the house where she must remain, often separate from the rest of the 
family. Her bed is also set apart, and no one is allowed to touch it. The sense of isolation can 
feel especially strange, as if she were being set apart from the normal family dynamics. In 
many households, the rules extend to preventing others from touching her. If someone 
accidentally touches her, they must then go through a ritual to cleanse themselves, often 
involving turmeric water, which is considered very purifying. 
This isolation can feel lonely and uncomfortable, especially when experiencing the physical 
pain and emotional shifts of menstruation. While the first period is a celebrated occasion, 
each subsequent cycle can feel like a time of exclusion and restriction. Even her eating 
arrangements change, with separate utensils set aside only for her use during this time. She 
must wash these herself, and on the fourth day, turmeric powder is sprinkled on her as part 
of a cleansing ritual. 
This tradition, passed down through generations, has evolved, but its roots are deeply 
connected to cultural beliefs about purity. In ancient times, the customs were even stricter. 
During her period, a woman was not allowed to see elder family members while they ate, 
and she was provided only a simple mat to sleep on. Although some practices have softened 
over time, this period of isolation remains, creating a challenging experience for many 
women. 
This cultural tradition presents a complex mix of emotions. While the initial celebration is 
joyful, the continued isolation brings its own struggles. The tradition aims to mark an 
important phase of life, but it also reflects a deeply ingrained view of purity that can feel 
difficult, especially when it leads to feelings of separation from family and routine life. `}],WestBengal:[{name:"From Fear To Awareness",age:20,content:` My first period was a mix of surprise and a little bit of fear because 
I didn’t fully understand what was happening. I’d heard about 
periods, but actually experiencing it felt different. I honestly 
thought I might be having some kind of health issue, so I didn’t tell 
my parents at first. But the next month, my grandma noticed, and 
that’s when I finally learned more about it. After that, things got a 
lot easier to handle. 
 I feel okay and comfortable talking about it with close friends and 
family now, especially since people are becoming more open. But 
I’m still careful in some situations. 
 In my culture, there are certain beliefs and practices around 
periods, like staying away from prayer spaces and sometimes even 
the kitchen. In the past, girls were also expected to stay in a 
separate room during their period. But nowadays, people aren’t as 
strict about these things, and many are moving away from such 
practices. 
 I think there’s a mix review. On one hand, some practices seem to 
isolate us during periods, which feels negative. But now, there’s 
more awareness that menstruation is natural, and some people 
are open to talking about it. It’s slowly changing for the better. Yes, 
I’ve sometimes felt a bit embarrassed, especially in school when I 
was younger. 
 One of the most common misconceptions is that periods are 
something 'dirty' or 'unclean.' Some also think that girls shouldn’t 
talk about periods openly, which isn’t true. Menstruation is 
natural, and talking about it helps us understand it better. 
 I learned about menstruation in school, but it was brief and mostly 
scientific. My mom explained more about how to manage it day
to-day. 
 At that time, I didn't think to search for information online or in 
books, but my biology textbook was quite helpful. Nowadays, 
there are numerous books and websites dedicated to discussing 
menstrual health. Additionally, social media platforms provide 
useful information in a simple and accessible manner, making it 
much easier to learn about these topics. 
 Friends or family could be supportive by not making us feel 
uncomfortable if we need to take it easy or need help with 
supplies. Just being understanding and non-judgmental helps a lot. 
 Yes, phrases like, she is on that time of the month, she is having 
mood swing for that, or she is having Petch, instead just say 
'period' openly without any shame helps normalize it. 
 Sometimes, periods do make daily life harder—like cramps, excess 
bleeding or discomfort, makes very hard to do daily activities of 
both household and school/college etc. 
 Yes, I’ve missed a few social events or activities when cramps were 
really bad.  
 Yes, attitudes are changing, especially in cities. Schools, NGO and 
certain articles educating people, and even media is normalizing 
periods more. But there’s still a lot to do in rural areas where there 
is no excess to understand on this topic. 
 I hope menstruation is seen just as a normal part of life, without 
shame. It would be great if boys and men were more informed 
too, so they could understand and support us better. `}],Telangana:[{name:"Supportive Brothers ",age:18,content:`I’ve grown up with two sisters, and from a young age, my mother ensured I 
understood periods. At first, it was confusing, but she explained it’s a natural 
part of life. Now, I help my sisters by getting pads or giving them space when 
they need it. I believe knowing this makes me a better brother and, someday, a 
more understanding husband. Even my friends ask why I’m so aware, and I tell 
them—it’s about respect...`},{name:"Celebrating Womanhood Openly",age:20,content:`In my family, we celebrate the arrival of a girl's first period as a significant milestone. When 
this moment occurs, my parents gather all our relatives and friends to share in the joy, 
serving them delicious food to mark the occasion. During this time, the girl receives special 
treatment, almost like a queen, as everyone acknowledges her transition into womanhood. 
There’s no shyness or embarrassment around the topic; instead, it becomes a moment of 
pride and celebration. This open approach helps create a positive atmosphere, allowing 
young girls to feel valued and supported as they embrace this new phase of life.`},{name:"Climatic Shifts and Cycles",age:20,content:`Coming from the southern part of India, I was accustomed to a different climate, and my 
periods were generally regular. However, everything changed when I moved to a hostel in 
the north. The sudden shift in temperature, coupled with unfamiliar food and a new 
environment, threw my body off balance. 
Adapting to the colder climate and different dietary habits resulted in irregular periods, 
which was difficult for me. I struggled to adjust, both physically and mentally. The change in 
routine, along with the stress of a new life, contributed to my feelings of weakness. It was a 
challenging transition, and I had to find ways to cope with the changes while trying to regain 
my balance.`}],Assam:[{name:"Bridging Tradition and Education",age:19,content:`My first experience with menstruation happened when I was 11 years old and as all women, 
it was a significant time in my life. As I was all new to this, I was terribly scared and told my 
mom as soon as I had it first. My mom calmed me down and explained to me that it's a 
common thing all women have to go through. This gave me strength to start this new phase 
of life. 
In our state, we have a unique approach towards menstruation. When girls get it for the first 
t
 ime, celebrations are conducted in a grand way. Guests are invited to shower blessings to 
the young lady and new clothes and ornaments are gifted to her. She is dressed up like a 
bride in our traditional dress called Mekhela Chador and is married to a banana plant. Yes, a 
banana plant! 
Even though I'm not sure why it is done but as far as I've heard, it's used to represent the 
newly come fertility in the girl's body.  
She is made to fast for a given number of days and proper rest and care are ensured during 
those days. But there was one thing, we were not allowed to enter temples and kitchen 
areas when we were on our periods. 
Apart from this bar on entering or touching certain things, I can say our society is quite open towards 
menstruation. We even worship the menstruating goddess Maa Kamakhya (one of the oldest shakti 
peeth where Sati’s vagina was said to be fallen), which menstruates for 6 days every year around 
June and a huge Ambubachi Mela is held where saints and pilgrims flock to the temple at that time in 
large crowds. So, menstruation may have a positive view in our society to an extent I feel. 
Personally, I haven't faced any embarrassment or shame due to menstruation, thanks to a 
supportive family and even in our school, we were given education about this topic, so we 
just accepted it as a natural thing for women and didn't face that much difficulty in 
communicating about periods. 
But in villages, there still may be girls who are not properly educated about this topic and 
have to go through difficulties as a result. It is important that girls are educated about this 
starting from their home and school. They should be taught that there is nothing to be 
ashamed of and is just as natural as we breathe. Availability of feminine hygiene products 
should be ensured at a subsidized rate and girls should be encouraged to not miss out on an 
important opportunity or occasion just because of her periods. 
The situation, though no doubt has improved a lot from the past, but still we have a long 
way to go to ensure that every girl in our country is free from the regular shame or trauma 
they go through due to menstruation. This is possible through proper awareness from all, 
both men and women, and viewing it as just a natural process in our body.`}],Bihar:[{name:"Clueless and Awkward ",age:19,content:`I didn’t know anything about menstruation until I overheard girls talking about 
‘that time of the month’ in school. I was too embarrassed to ask, so I googled 
it. Even now, I feel awkward when someone mentions periods around me. My 
family never discussed it openly, and I still struggle to understand why it’s such 
a big deal. I wish someone had taught me earlier. ..`}],Uttrakhand:[{name:"Unspoken but Understood",age:18,content:`In my household, discussions about periods have been quite limited. The only person I really 
talk to about it is my mom. My dad seems to understand, likely because my mom shares 
information with him, but I’ve never directly discussed it with him myself. It feels like there’s 
an unspoken rule; I have to hide the pads when I bring them home, or at least not make it 
too obvious. 
While there aren’t strict restrictions regarding entering the temple, my mom does advise me 
to avoid doing so during my periods. She also suggests steering clear of pickles and spicy 
foods during this time, which I find curious. After taking a bath, she insists I should eat 
something immediately, whether it’s just a couple of grains of rice or a small piece of bread. 
I’m not sure why she emphasizes that, but it’s part of our routine. 
Despite these traditions, there’s not a feeling of disgust or shame surrounding menstruation 
in my home. Everyone seems to understand the process; it’s just that we don’t openly 
communicate about it. It’s almost as if there’s an agreement that while we acknowledge it, 
we shouldn’t talk about it too much, as if discussing it would somehow make it wrong. This 
silence creates a sense of discomfort, making it clear that even though it’s understood, it’s 
still a topic shrouded in secrecy..`}],Punjab:[{name:"Confusion and Customs",age:22,content:`I got my period really early, in the 4th standard, and nobody explained to me what was 
happening. I was simply told not to talk about it in front of anyone, which left me feeling a 
sense of guilt about something I didn’t even understand. It wasn't until the 8th standard, 
when my friends started getting their periods too, that I finally began to discuss it with 
others. 
There are also some strange customs associated with menstruation. For instance, when I’m 
on my period, I can’t enter any place of worship. My mom won’t even water the Tulsi plant, 
believing it will wilt, and I have to avoid the area where pickles are drying because they 
might spoil. I have a friend from Maharashtra who experienced even stricter restrictions—
 she wasn’t allowed to sleep on the bed, enter the kitchen, or participate in festivals during 
her period. 
On the other hand, I know a friend who was well-informed about periods before hers began. 
Her first experience was much lighter because she understood what was happening, so she 
didn’t feel any trauma related to it. It's fascinating how these beliefs are wired into our 
brains; even when no one is there to tell us, we end up avoiding Pooja or similar activities 
because society has ingrained the idea that it’s wrong. Plus, there’s this constant need to 
hide pads in public, which adds to the discomfort surrounding the topic. `}],UttarPradesh:[{name:"Secrecy’s Lasting Impact",age:21,content:`Growing up, one of the things that constantly frustrated me was the secrecy surrounding 
menstrual pads in my home. I’d often leave a pad on the bathroom shelf out of convenience, 
or I’d set the packet somewhere in the room where it was easy to reach. But whenever my 
mom spotted them, she’d scold me for leaving them in plain sight. She was especially 
uncomfortable if my father might see them, as if he wasn’t aware of the basics of my needs. 
I always struggled to understand why something so essential to my health and routine had 
to be hidden. 
This secrecy didn’t stop at pads—it extended to any conversation about my menstrual 
health, which wasn’t treated as seriously as I needed. Talking openly about any issues 
related to my periods always felt like tiptoeing on thin ice. Whenever I gathered the courage 
to mention pain or unusual symptoms, I was often met with discomfort or silence, as if 
discussing it was something shameful. Visits to a gynecologist were discouraged, as if it were 
something reserved only for extreme circumstances. 
Eventually, out of desperation, I started reaching out on my own. At times, I’d ask one of my 
friend’s mothers, who was a gynecologist, for advice. Other times, I secretly booked online 
doctor consultations, needing someone to take my symptoms seriously. This avoidance of 
open dialogue and professional help impacted my health significantly. For nearly a year, I 
struggled with a recurring fungal infection. It went untreated until I finally took charge and 
sought medical advice on my own. 
Reflecting on it, this secrecy and reluctance to address menstrual health left a lasting impact. 
In those moments, I realized how important it is to be able to speak openly about health 
without shame or secrecy..`},{name:"Breaking Barriers in Uttar Pradesh",age:21,content:`In my state of Uttar Pradesh, there’s a noticeable shift toward normalizing conversations 
about periods, but discussing this topic in public is still far from common. In many families, it 
remains a taboo subject, often hidden from boys. I believe it’s crucial for boys to be 
educated about menstruation so they can better understand and support the girls and 
women in their lives. 
For many women, periods come with numerous restrictions. We’re often not allowed to 
enter temples or participate in certain activities, like making pickles, even if we feel strong 
enough to handle them. It’s frustrating to hear that these restrictions are supposedly for our 
own good, when in reality, they often feel like an imposition. If a woman doesn’t feel the 
need to rest, why should she be forced to do so simply because of societal beliefs? 
Sadly, many women have to abide by these rules, either willingly or unwillingly, and they 
often suffer in silence, unable to talk about the pain and discomfort they endure. I sincerely 
hope for a future where periods are treated as a normal part of life, and conversations 
around them become commonplace in our society. It’s time to break down these barriers 
and foster a culture of openness and understanding regarding menstruation.`},{name:"Temples and Taboo",age:20,content:`Growing up in Uttar Pradesh, I found that periods are still not openly discussed. Many girls, 
including myself, face restrictions during this time, such as being barred from entering 
temples or participating in poojas. I vividly remember one incident during a trip to 
Vrindavan. On the second day of our visit, I got my period and was unable to visit any 
temples. I felt really bad about being left out, especially in such a spiritual place. 
Despite this, I have never talked about periods in front of my father or elder brother. I 
believe it's their responsibility to help create a comfortable environment where I can openly 
discuss this natural part of life. It’s important for families to break down these barriers and 
foster an atmosphere of understanding and support regarding menstruation.`},{name:"Early Education, Early Acceptance",age:18,content:`Personally, I haven't faced much stigma surrounding periods because my school was quite 
open about it. They conducted awareness sessions before I experienced my first period, 
which helped normalize the conversation. This proactive approach made it easier for us to 
discuss menstruation openly and without shame. It’s encouraging to see educational 
institutions taking such steps, as it creates a more supportive environment for young girls. I 
believe that if more schools adopted similar practices, it would significantly reduce the 
stigma that many still face today.`}],Kerala:[{name:"Normalizing Periods in Friend Groups",age:20,content:`In my friend circle, periods are openly discussed. One of my close friends once 
had a bad cramp during an event, and instead of feeling weird, we all pitched 
in. I went to buy her pads without hesitation, and that moment changed how I 
see things. It’s just normal to help each other out, and I encourage my guy 
friends to be just as open-minded. .`}],Odisha:[{name:"Silent Discomfort",age:17,content:`"I never learned about menstruation until a biology lesson in class 10, and even 
then, the teacher rushed through it. At home, my sister hides her pads, and I’m 
not supposed to ask why. Once, I accidentally found one, and my parents 
scolded me for even touching it. It’s like this forbidden topic that makes 
everyone uncomfortable. I wish I knew more, but no one talks about it.". ..`}],Gujarat:[{name:"Father’s Support, Society’s Stigma",age:19,content:`Living in Gujarat, I’ve noticed that most people—especially women—still feel uncomfortable 
discussing periods with men. But my family has been an exception. My father and brother 
are incredibly supportive, and they go out of their way to make me feel cared for, especially 
during my period. It’s a blessing I’m truly grateful for. 
From my experience, I’ve seen that women of my mother’s generation aren’t at ease talking 
about periods with men. I believe it would make a big difference if they understood just how 
important it is for men to be informed about menstruation. When men are aware and 
supportive, it can create a much more understanding and comfortable environment for 
everyone. ...`},{name:"Silent Struggles, Open Conversations",age:19,content:` When I got my first period, I already knew about menstruation because I was the last girl in 
my friend group to get it. At that time, I was on a family trip, and we were at a temple. My 
period started then, but I didn’t realize it until we got back home. My mother helped me 
through the experience. 
Back in school, I didn’t feel very comfortable discussing periods, but now I can talk openly 
with family and friends. There are some cultural beliefs around menstruation—like not 
touching water sources, staying away from the kitchen and temple, and avoiding washing my 
hair or eating sour foods like pickles. These beliefs are often based on health considerations, 
and I think they can help maintain our well-being. I’m also advised not to run or play too 
much, to encourage rest during this time. 
Luckily, I don’t experience much pain, just mood swings that can be intense—one moment I 
feel angry, and the next, I'm very happy. Growing up in this society, I naturally adopted these 
habits and wasn’t very comfortable discussing periods, but I believe it’s not an embarrassing 
topic. It should be freely discussed. 
Menstruation doesn’t affect my daily activities much, as I don’t have severe pain, so I 
manage everything smoothly and don’t miss any opportunities. Today, we can learn about 
menstruation through social media, and there are many websites with information. Things 
are changing, and I think they’ll continue to improve in the future..`}],MadhyaPradesh:[{name:"Teaching Men, Changing Minds",age:20,content:`Although periods are still considered a taboo subject in many circles, my experience was 
different. Even before I got my first period, my mother took the time to explain everything to 
me. When the day finally came, she was incredibly supportive and helped me navigate the 
process. However, I noticed that this awareness was mostly confined to the women in my 
family. My mother explicitly asked me not to mention my period to my father, which felt 
unnecessary to me. 
Determined to change this mindset, I decided to talk to my brother about menstruation at 
an early age. To my surprise, he was very open and receptive. He didn’t express any disgust, 
which made me really happy and encouraged me to keep the conversation going. 
Yet, the notion that periods are unclean still lingers in our household, and women are not 
allowed to enter sacred places during their menstrual cycle. I believe there’s some spiritual 
reasoning behind this practice, so I don’t see it as a significant issue in our home. For us, 
these limitations are primarily related to visiting the temple. 
I’ve heard stories of women being treated very poorly during their periods in other places, 
but I have personally never faced that kind of treatment. In conclusion, I truly believe our 
society is making progress in terms of period awareness. We can contribute to this positive 
change by teaching the younger generation about menstruation and breaking the stigma 
surrounding it. .`},{name:"Hostel Stories and Home Realities",age:20,content:`Since I started my periods, I’ve never felt the burden of stigma in my home or among my 
relatives. Before coming here to study, I lived in a hostel, where I heard some friends share 
their experiences about being restricted from entering the kitchen or being kept away from 
certain things during their periods. It made me reflect on my own childhood experience 
when I had chickenpox. At that time, I remember being told to stay away from family 
members who were menstruating, as if the illness was somehow contagious. This incident 
highlighted for me how deeply ingrained these beliefs can be in some communities, but 
thankfully, I’ve been fortunate enough to grow up in an environment where such traditions 
didn’t affect me. `},{name:"Routine Rules, No Shame",age:20,content:`In my household, the customs surrounding menstruation are quite normal and similar to 
what happens in many other families. During my periods, I’m not allowed to touch anything 
in the kitchen or enter the mandir, which can feel a bit restrictive at times. On the third day, 
there’s a routine I have to follow: I wash my hair and clean everything I’ve used, like my 
blanket and sofa cover. 
Interestingly, despite these traditions, there isn’t any negative mental stigma associated with 
menstruation in my home. While there are certain rules to follow, they are more about 
adhering to customs rather than fostering feelings of shame or discomfort. It’s a part of life 
that we acknowledge without any judgment, which makes the experience a bit easier to 
navigate. `},{name:"School’s Role in Breaking Stigma",age:18,content:`From what I’ve observed, even today, talking about periods in public remains a stigma. 
People aren’t fully aware of alternatives to pads, or maybe they’re just too accustomed to 
using them to consider other options. Many schools do try to educate students about 
menstruation, but I feel there’s room for improvement in how they approach it. Often, the 
way it’s taught can unintentionally lead to awkwardness or even jokes, making it harder for 
students to take the subject seriously. If schools could create an open, respectful 
environment, it might help reduce the stigma and make students feel more comfortable 
discussing these important topics. `}],Karnataka:[{name:"City Freedom vs Village Constraints",age:19,content:`Growing up in a metropolitan city, I didn’t feel the same stigma around periods that’s often 
felt in rural parts of our country. However, I’ve seen a stark contrast when visiting my village 
in Andhra Pradesh, where many women still lack access to basic sanitary napkins, which 
must be incredibly challenging. Personally, I haven’t faced much stigma on this topic, but I’m 
very aware of the cultural beliefs that exist in many areas, where women are often 
considered “dirty” or “impure” during their periods. I feel strongly about speaking openly on 
this issue and hope that more awareness can bring about change.`}],TamilNadu:[{name:"Celebration with Restriction",age:20,content:`When I first got my period, it was such a weird and new experience. I watched as people 
around me reacted with shock and happiness while I was just trying to figure out what was 
happening. It was a confusing mix of emotions. I felt comfortable sharing this experience 
with my friends and family, but I noticed that people often prefer to address it in a more 
informal, decent manner. 
Reflecting on the cultural beliefs that surrounded my first period, I see both positive and 
negative aspects. On the positive side, it felt like a small celebration; my relatives would give 
me gifts or things I liked. However, on the negative side, there were restrictions, like not 
being allowed to visit temples or pray during my menstrual flow, which seems absurd in this 
current generation. 
If I had ever experienced a visible stain by mistake, I might have felt embarrassed due to the 
stigma surrounding such things in our society. The thought of having a “weird moment” in 
public could definitely cause discomfort. To be honest, I had very little understanding of 
menstruation until I experienced it myself. I learned about how and why it happens, and I 
believe that education about menstruation is crucial for young girls. Schools could facilitate 
this through informative meet-ups, helping girls navigate that initial phase more 
comfortably. 
Taking care of each other and providing support during this time is important, as simple acts 
of kindness can make a big difference. However, I’ve noticed that sometimes guys use 
menstruation as a way to differentiate between men and women, which is frustrating. 
Experiencing mood swings, headaches, or stomach aches can complicate daily life. While I 
may have missed some opportunities because of it, I can’t recall any specific instances at the 
moment. 
Overall, my perception of menstruation has remained the same since then. I truly believe 
that our society's view of menstruation needs to improve, with people of all ages accepting 
it as a natural part of life, regardless of gender. `}],Delhi:[{name:"Periods and Policy Change",age:27,content:`In India, periods are still wrapped in stigma, with traditional beliefs lingering, especially 
among those without formal education. Many still see it as wrong to enter a religious place 
during menstruation—a view common even in places like Delhi. Yet, there is some progress; 
once girls reach puberty, certain schools hold workshops to raise awareness. 
But the reach of this awareness is limited. Non-literate communities often miss out on 
essential information, and empathy on this topic is still lacking at a policy level. I believe 
institutions should introduce a three-day leave policy for women and girls, whether they’re 
studying in universities or working, from daily wage laborers to domestic helps. Unlike at IITJ, 
this kind of support could make a real difference for women, offering them both respect and 
relief during this time. These are just my thoughts, but I believe change is needed.`},{name:"Family Mentality and Menstrual Shame",age:19,content:`The issue of menstrual stigma often stems from family influences and outdated mentalities. 
In my experience, while my school made a concerted effort to encourage us to be vocal 
about the menstrual cycle—through awareness programs and motivational talks—the deep
rooted teachings from childhood made it difficult for us to speak openly. This discomfort has 
become so ingrained that many girls hesitate to discuss their periods, even among 
themselves. 
When it comes to taking official leave for menstrual discomfort, we often find ourselves in a 
bind, unsure of how to articulate our reasons without revealing the actual cause. Many men 
remain largely unaware of the complexities surrounding menstruation; all they know is that 
it occurs monthly and involves bleeding. They often lack understanding of the pain and 
emotional toll it can take, leading to a lack of sympathy or support. 
I believe it’s crucial for both women and men to be educated about menstruation and its 
challenges. It should be seen as a natural part of life, devoid of shame. Open discussions 
about monthly bleeding should be normalized, and men should be encouraged to be 
empathetic and understanding. By fostering an environment where everyone can talk freely 
about these issues, we can break the cycle of stigma and create a more supportive 
community for all.`}]},ha:{Rajasthan:[{name:"A Scarf and Strength",age:20,content:`जब मन्नै पहली बार पीरियड आया था, मैं डर गई थी और इस बारे मैं कुछ ना जाणती थी। पर मैंने अपनी माँ नै बतायो और उन नै मेरी मदद करी। मैं अपने नजदीकी महिला दोस्तों और परिवार वाल्यां सै इस बारे मैं अराम सै बात कर लूं सूं, पर जब मर्दां की बात आवै सै, तो मैं चुप हो जां सूं।
          
          मेरे परिवार मैं जादा रोक-टोक तो ना सै, पर कुछ नियम जरूर सै – जैसे पूजा-पाठ के टाईम दूर रहना पड़ै सै। हमारी संस्कृति मैं पीरियड नै गंदा मान्या जावै सै, पर मैं मानूं सूं ये सोच गलत सै – पीरियड सै ना तो कोई अशुद्ध हो जावै सै और ना ही पूजा-पााठ मैं रुकावट आवै सै।
          
          कई बार शर्म और हिचकिचाहट महसूस होवै सै जब पीरियड की बात करणी पड़े या पीरियड के टाइम कुछ हो जावै। आठवीं क्लास की बात सै – स्कूल मैं पीरियड अचानक आ गया, पिछला पीरियड हुए 14 दिन ही हुए थे। मैं तैयार ना थी, पैड भी ना लाया था। मैं घबरा गई थी, ऊपर सै मैं नये स्कूल मैं थी और कोई दोस्त भी ना थे। मैंने अपना दुपट्टा इस्तेमाल कर लिया, पर बहाव बहुत तेज था, कपड़े भी गंदे हो गए, और बहुत शर्म आई।
          
          हमारे समाज मैं पीरियड की बात करना शर्म की बात समझ्या जावै सै और इस सोच का मन्नै भी असर पड़ा। पर मैं चाहूं सूं जब मेरी अपनी फैमिली हो, तो पीरियड नै एक आम बात बना सकूं। फोन और टीवी सै जानकारी मिलती सै, पर घरवाले और स्कूल मैं बात हो तो और बढ़िया समझ आवै सै।
          
          स्कूल मैं पीरियड की पढ़ाई होणी चाहिए, ता की लड़का-लड़की दोणूं नै समझ आवै। लड़के भी लड़कियों की मदद कर सकैं। 12 साल की उमर सै पहले सिखाणा बढ़िया रहै सै।
          
          अगर परिवार और दोस्त सपोर्ट करें, तो पीरियड को संभालना आसान हो जावै सै। पीरियड मेरी पढ़ाई और रोज के काम मैं असर डालै सै। कई बार गुस्सा भी आवै सै कि लड़की क्यों सूं, इतने दर्द और परेशानी झेलणी पड़ै सै। एग्जाम के टाइम पीरियड हो जावै सै, तो मन लगा के पढ़ाई ना हो पावै सै, मार्क्स भी गिर जावै सै।
          
          पारिवारिक फंक्शन और सफर भी मुश्किल हो जावै सै बहाव और पेट दर्द की वजह सै, पर अब तक मैंने कोई बड़ा मौका ना गवायो सै। पर मैं हर बार ये सोचती रहूं सूं कि अगला पीरियड कब शुरू होवैगा।
          
          पहले जमाने मैं लड़कियों नै एक कमरे मैं बंद कर दिया जावै था पीरियड के टाइम, जो मेरे हिसाब सै गलत सै, पर थोड़ा आराम मिल जाया करता था। अब चीजें बदल रही सै, पर अभी भी लंबा रास्ता बाकी सै। आज भी कई बार बिना कुछ कहे, अपने दर्द नै छुपा के सारे काम करने पड़ैं सै।
          
          मेरी जिंदगी मैं पीरियड को लेकर सोच बहुत ज्यादा ना बदली सै। अब कपड़े की बजाय पैड इस्तेमाल कर लिया सै, पर खुल के बात करना अभी भी कम सै। मैं उम्मीद करूं सूं कि आने वाले टाइम मैं सब कुछ बदल जावै।`},{name:"Cloth, Courage, and Change",age:19,content:`जब मन्नै पीरियड आया, मैं 16 साल की थी और इस बारे मैं कुछ भी ना जाणती थी। मेरी बड़ी बहन नै कहयो कि कपड़ा इस्तेमाल कर और किसी नै कुछ ना बताई। मैं किसी तरह उस दिन सै निपट गई, पर पूरा दिन यही सोचती रह गई कि यो के हो रया सै और बहुत चिढ़चिढ़ा महसूस हो रहया था।

मैं सोचया कि मैं यो दर्द लेकै कैसे जियूं। धीरे-धीरे मैंने इस हालात नै संभालना सीख लिया। अब कोई खास रोक-टोक तो ना सै, पर जब मेरी माँ बीमार थी, तो पीरियड के टाइम सारा काम हमें ही करना पड़ता था। ज्यादातर मैं खाना बनावां सूं, पर और भी काम थे – जैसे पानी नै छूणा मना और रसोई मैं जाणा भी मना।

अब मेरे दो बच्चा सै, और मेरी बेटी नै पीरियड के बारे मैं सब कुछ पता सै। उस नै अभी तक पीरियड आया ना सै, पर फोन और टीवी सै सीख लिया सै। मैं उस सै बात करना चाहूं सूं, पर शर्म आती सै। मैं सोचूं सूं जब उसको पहली बार पीरियड होवैगा, तब जरूर बताऊंगी।

मैं किसी सै इस बारे मैं बात करते शरमा जां सूं, पर मेरा मानना सै कि इस बारे मैं कोई रोक-टोक ना होनी चाहिए। शर्मावण की कोई जरूरत ना सै – यो तो कुदरती चीज सै और कई बीमारी सै भी बचावै सै।`},{name:"Breaking the Silence with Support",age:33,content:`मन्नै 15 साल की उमर मैं पहली बार पीरियड आया था। मेरी बड़ी बहन नै पहले ही मुझे इस बारे मैं बता दियो था, पर पहले दिन बहुत टेंशन और चिढ़चिढ़ापन था। टाइम के साथ बहन की मदद सै सब कुछ आसान होगया। उस टाईम पैड आसानी सै ना मिलते थे, तो कपड़ा इस्तेमाल करना पड़ता था।

जहां तक रोक-टोक की बात सै, हम सब नै एक जैसे नियम माने – जैसे पानी नै ना छूणा, खाना ना बनाणा, और आरती ना करणी। पर अगर कोई और ना हो, तो करना पड़ता था।

मैं अपने दोस्तां और परिवार सै इस बारे मैं खुल के बात ना कर पाई, पर अपने पति सै बिना हिचक बात कर लेवां सूं। वो मेरे पीरियड के टाइम मेरी मदद भी करै सै।

आजकल के बच्चे सोशल मीडिया सै बहुत कुछ सीख लैं सै, पर हमारे टाइम एसी कोई सुविधा ना थी। मेरे खुद के बच्चे तो ना सै, पर अगर होवैंगे, तो मेरा परिवार इस बारे मैं खुल के बात करेगा।

पहले पीरियड सै लेकै अब तक बहुत कुछ बदल गया सै और मैं मानूं सूं कि आने वाले टाइम मैं बदलाव और जल्दी होवैंगे।`}],Maharashtra:[{name:"Whispers with My Brother",age:18,content:`पहले दिन जब मन्नै पीरियड आया, मैं घर पर अकेली थी और मन्नै कुछ ना समझ आया कि यो के हो रया सै। थोड़ा डर तो लगया, पर पीरियड के बारे मैं पहले थोड़ो-बहुत सुन रख्या था। पूरा दिन माँ का इंतजार करती रही और जब वो आई, तो उन नै मेरी मदद करी और समझाया भी।

मैं अपने घर की औरतां सै अराम सै बात कर लूं सूं। मेरा भाई और मैं इस बारे मैं इशारों-इशारों मैं बात कर लैं सैं, बिना “पीरियड” बोलै। पर पापा सै मैं इस बारे मैं कुछ ना कह पाऊं सूं।

पीरियड के टाइम पूजा ना कर सकूं, खाना छूणा मना, मंदिर सै दूर रहणा पड़ै, और बहुत कुछ। कभी-कभी ऐसा लागै सै जैसे मैं कोविड वाला मरीज सूं जिस नै सब सै अलग कर दियो हो।

हमारे समाज मैं पीरियड नै अशुद्धता सै जोड़ दिया गया सै – जैसे महिला गंदी हो गई हो। पर मन्नै कभी शर्मिंदा महसूस ना होया पीरियड की वजह सै – मेरे दोस्त बहुत ही समझदार और मददगार सै।

मैं मानूं सूं कि पीरियड नै लेकै बहुत सारी गलतफहमियां सै – जैसे पीरियड वाली लड़की खाना छू ले तो वो सड़ जावैगा। 10वीं और 11वीं क्लास मैं इस बारे मैं अच्छे सै पढ़ाया गया, और इससे मुझे और मेरे मर्द दोस्तां नै बहुत कुछ समझ आया।

इमोशनल सपोर्ट – यो सबसे जरूरी चीज सै पीरियड के टाइम। अगर कोई दोस्त या परिवार वाला साथ दे, तो दर्द सहन करना आसान हो जावै सै। गर्म पानी की थैली या मनपसंद चीज दिला दे, तो और बढ़िया।

मेरे पीरियड बहुत खराब रहै सै – पूरा हफ्ता पीठ दर्द, पूरे शरीर मैं ऐंठन। कई बार क्लास छोड़नी पड़ी या दर्द मैं बैटना पड़या।

मैं मंदिरों और त्योहारों की कई ट्रिप मिस करी – दर्द और सामाजिक टैबू की वजह सै। पर अब बदलाव दिख रया सै – जितनी पढ़ाई होरी सै, उतनी जागरूकता बढ़ रई सै। ज्यादा सै ज्यादा लोग पीरियड के बारे मैं बात कर रहै सै और जागरूकता फैला रहै सै – यो जरूरी सै।`},{name:"A Family’s Shared Responsibility",age:20,content:`जब मेरी माँ नै पीरियड होवै सै, तब सारा घर का काम हम मर्द लोग संभाल लैं सैं। मैं खाना बनावां सूं, और मेरा भाई झाड़ू-पोंछा करै सै। हम कोशिश करैं सैं कि माँ नै कुछ भी ना करना पड़े।

मेरी बहन नै भी जब पीरियड होवै सै, तो हम उसकी हालत समझै सैं। अगर वो चिड़चिड़ी होवै सै या गुस्से मैं, तो हम कुछ ना कहैं, बस चुपचाप सुन लैं सैं। मैं कोई झगड़ा ना करूं सूं, उल्टा चुपचाप उसकी मदद करूं सूं।

मेरी गर्लफ्रेंड या दोस्त हो, मैं हमेशा साथ देण की कोशिश करूं सूं – चॉकलेट ले आणा हो या जो वो चाहे, मन्नै फिक्र ना सै। गरम पानी की थैली दे दूं, सिर दबा दूं – जो कर सकूं, करूं सूं। मेरे लिए यो सब करना बिल्कुल नार्मल बात सै।`},{name:"Emotional Rollercoaster During Exams",age:20,content:`मेरे पीरियड आन सै 15 दिन पहले ही मेरा मूड बदलण लाग जावै सै। एग्जाम के टाइम ज्यादा असर होवै सै – पढ़ाई मैं मन ना लागै, सोच-समझ भी गड़बड़ा जावै सै।

हर वक्त सुण सै आवै सै – नींद आरी सै, थकावट सै, दर्द सै। फिर भी खुद नै धक्का मार के मेहनत करूं सूं ताकि पढ़ाई प्रभावित ना होवै।

कभी-कभी लागै सै जैसे यो सब एक चक्र सै – बार-बार चल रहया सै। पर मैं हार ना मानूं सूं – जैसे भी हो, जारी राखूं सूं।`},{name:"Cycling Away the Cramps",age:19,content:`स्कूल के दिनां मैं हर महीने बहुत दर्द होवै सै। उस टाईम मैं शारीरिक रूप सै एक्टिव भी ना थी, ऊपर सै शहर की हवा भी गंदी थी – शायद उसी की वजह सै तकलीफ ज्यादा थी।

पर जब सै कॉलेज आई, तो सब बदला। खेलों मैं हिस्सा लिया और साइकिल चलाण लागी – अब तो दर्द नाम मात्र रह गया सै।

मैं इंजीनियरिंग कॉलेज मैं पढ़ूं सूं, जहां कई बार मैं अकेली लड़की होवां सूं। इस कारण मन्नै हमेशा तैयार रहणा पड़ै सै – पैड साथ राखूं सूं। अब तो आदत बन गई सै – बस रूटीन का हिस्सा सै।`},{name:"The Cost of Dignity",age:19,content:`मेरे इलाके मैं मैंने देख्या सै कि कई गरीब परिवार पैड खरीदण नै टाल दैं सै – पैसों की तंगी की वजह सै। घरेलू काम करणी वाली महिलाएं अक्सर साफ-सुथरे उपाय इस्तेमाल भी ना कर पावै सै।

पैसों की वजह सै सैनिटरी प्रोडक्ट्स तक पहुंच ना होण वाली बात अक्सर दबा दी जावै सै, पर यो महिलाओं की सेहत और इज्जत दोणूं पर असर डालै सै।`},{name:"Pink Room and Temples",age:19,content:` महाराष्ट्र मैं मैंने देख्या सै कि अब लोग पीरियड के बारे मैं खुल के बात करणा लाग रहै सै। पर एक चीज अभी भी सख्ती सै लागू सै  मंदिर मैं घुसणा मना और पूजा के सामान नै छूणा मना।

स्कूल मैं एक “पिंक रूम” था – जहाँ लड़कियां आराम कर सकैं जब पीरियड हो। वहां पैड भी मिलते थे, जो बहुत फायदेमंद था। मैं चाहूं सूं कि हर स्कूल-कॉलेज मैं ऐसी सुविधा होवै।
 `},{name:"Inclusivity Needed in Education",age:20,content:`जब तक पीरियड एक आम बातचीत का हिस्सा ना बनै, तब तक टैबू बना रहैगा। कॉलेज मैं सेशंस होवै सैं – पीरियड पर – पर सिर्फ लड़कियां बुलाई जावै सैं, लड़के नहीं।

इस उम्र तक लड़कियां तो सब जानण लाग जावै सैं, पर लड़कां नै भी बुलाणा चाहिए। लड़के भी तो कल नै पिता बनैं गे – अगर वो समझदार होवैंगे, तो समाज सुदरेगा।

हमारा समाज खुद ही लड़कां नै इन सेशंस सै दूर राखै सै। पर अगर हम लड़कां नै भी इन बातां मैं शामिल करें, तो वो भी समझ सकैं सैं कि यो सब कुदरती सै, शर्मावण की बात ना सै। `},{name:"Hidden Pain Public Shame",age:18,content:`जब मैं आठवीं क्लास मैं थी, तब मन्नै पहली बार पीरियड आया। दर्द तो कोई खास ना होया, पर मैं चाहती थी कि किसी नै पता भी ना चलै। उस टाइम मेरे उमर की ज्यादातर लड़कियां इस बात नै लेकै शर्म महसूस करैं थी – और मैं भी। जैसे कि यो कोई गंदी चीज हो।

टाइम के साथ मैं इस नै नार्मल मान लिया और इसे अपनी जिंदगी का हिस्सा बना लिया। पर आज भी कई लड़कियां मंदिर जान नै या पूजा करन नै टालती सै, क्यों कि उनके घर वाले मानैं सै कि पीरियड मैं लड़की “अपवित्र” होवै सै।

यो परंपरा आज भी कई घरां मैं चलती रहै सै।`},{name:"Discrimination",age:19,content:`मैं सोचूं सूं कि मैं पीरियड के जैविक और शारीरिक पहलू नै लेकै काफ़ी जागरूक सूं। जब भी मुझे पता लागै कि कोई दोस्त या परिवार वाला पीरियड मैं सै, तो मैं और ज्यादा ध्यान देण की कोशिश करूं सूं। जैसे – कुछ ना कुछ ऐसा करूं, ता कि उनका बोझ हल्का हो जावै।

कई बार वो कुछ उल्टा-सीधा बोल भी दें, मूड स्विंग या दर्द की वजह सै – पर मैं मन पे ना लेवां सूं। और हाँ – चॉकलेट तो हमेशा रेडी राखूं सूं – चॉकलेट मैं कुछ तो बात सै!

सब तै जरूरी बात यो सै कि मैं पूरी इज्जत सै पेश आूं सूं, खासकर उस टाइम जब लड़की खुद नै थोड़ा कमजोर या असहज महसूस करै सै। मेरी कोशिश रहै सै कि मेरी तरफ सै कोई कमी ना रहै।

पर अफसोस की बात सै कि हर कोई ऐसे ना सोचता। मैंने देख्या सै कि आज भी कई लोग पुरानी सोच पकड़े बैठै सै – खासकर बड़ी उमर की औरतां – जो खुद भी एसी ही सोच मैं पली-बढ़ी सै।

एक किस्सा आज भी याद सै – दिवाली के दिन का। हमारे घर मैं पूजा हो रही थी, और मेरा एक रिश्तेदार (औरत) हम सब सै अलग बैठी थी। मैं छोटा था, समझ ना आया क्यों। बाद मैं पता लागया कि वो पीरियड मैं थी, इस वजह सै पूजा मैं बैठण नै मना था। तब मैं बहुत बुरा महसूस करा।

मन्नै लागै कि यो परंपरा कितनी गहरी सै और कितनी गलत भी। एसी चीजें सिर्फ जागरूकता सै ही बदली जा सकै सै। इज्जत, समझदारी और प्यार – इन तीन चीजां नै अपनाया जावै, तो समाज धीरे-धीरे बदल सकै सै।

खुलके बात करणा और छोटे-छोटे कदम उठाणा – यही तरीका सै टैबू नै खत्म करणा का। `}],AndhraPradesh:[{name:"Celebration Amidst Tension",age:18,content:`मेरा पहला पीरियड 7वीं क्लास मैं होया था। मुझे आज भी याद सै – रविवा का दिन था। मैं ज्यों ही उठी, तो देखा कि कपड़े मैं खून लाग्या सै। मैं घबरा गई, क्यों कि मन्नै कुछ ना पता था कि यो के हो रया सै।

मैं अपनी माँ नै बतायो, सोची कि मैं बीमार सूं, पर माँ नै मुझे शांति सै समझाया और मेरा हौंसला बढ़ाया।

हमारे राज्य मैं जब लड़की नै पहली बार पीरियड आवै सै, तो एक खास फंक्शन होवै सै। सारे रिश्तेदार बुलाए जावैं सैं, और पूजा-वूजा होवै सै। हल्दी लगाया जावै सै, आरती होवै सै, और दादी हर रोज बेसन सै नहलावै सै। बढ़िया खाना दिया जावै सै और अलग बिस्तर भी मिलै सै।

8वीं क्लास का एक किस्सा याद सै – मेरा पीरियड अनियमित था और एक ब्रेक के टाइम अचानक चालू हो गया। मैं बहुत असहज महसूस करी और रो भी पड़ी – डर था कि कहीं कपड़े नै दाग तो ना लाग गया हो।

बाद मैं पापा स्कूल मैं लेने आए और उन्होंने मुझे बहुत समझाया – कि यो एक कुदरती प्रक्रिया सै और शर्मावण की कोई बात ना सै।

पीरियड से मेरे रोज के काम ज्यादा प्रभावित ना होवै सैं, बस कभी-कभी दर्द होवै सै और ज्यादा नींद आवै सै।

मेरे हिसाब सै अब लोगों की सोच बदल री सै – लोग अब ज्यादा समझदार होवै सै। पर गांव के कुछ हिस्सों मैं आज भी लोग पीरियड नै “गंदा” मानै सै।`},{name:"A Positive First",age:19,content:`मेरे घर और मोहल्ले मैं ज्यादा रोक-टोक ना थी, इस वजह सै मैं अराम सै थी और किसी चीज सै डर ना लगा।

हमारे राज्य मैं जब लड़की नै पीरियड होवै सै, तो छोटा फंक्शन करै सै, और इसे एक अच्छा संकेत मानै जावै सै। इसी वजह सै मेरा पहला अनुभव बहुत अच्छा रहा – ना शर्म थी, ना डर।

मैं अपने रोज के काम बिना परेशानी निपटाए और पूरी तरह सपोर्ट महसूस किया।`},{name:"Isolation and Acceptance",age:19,content:`मैंने 10वीं क्लास मैं पहली बार पीरियड अनुभव किया – मेरे सारे क्लासमेट्स सै लेट होया, इस वजह सै खुद मैं असहज और डरी हुई थी।

मैं हॉस्टल मैं रह रही थी और एक सुबह 6 बजे माँ नै फोन कर दिया – रोते हुए बतायो कि खून आ रया सै। माँ बहुत खुश हुई और बोली – तू अब औरत बन गई सै।

उस टाइम मेरी बहन नै चिकनपॉक्स हो राखी थी, तो माँ-बाप घर ना ला सके। दादी-चाचा के गांव भेज दिया। वहां उनके पुराने विचारां की वजह सै मैं बहुत असहज महसूस करा।

मैं नै फर्श पर सोण पड़या, भयंकर दर्द होण के बावजूद कोई हाथ भी ना लगावै सै। मैं नै खुद सारा काम करणा पड़या। खाने मैं सिर्फ मिठाई, मिर्च मसाला मना।

यो सब बहुत अजीब लाग्या – जैसे मैं घर मैं रह के भी अलग-थलग कर दी गई थी।`},{name:"Tradition of Taboos",age:18,content:`मैं नै सुना सै कि कई घरां मैं लड़की नै पीरियड के टाइम किचन मैं घुसण सै और अचार छूण सै मना कर दिया जावै सै। कई घरां मैं भगवान के सामान नै छूणा भी मना सै।

यो मान्यता सै कि लड़की “अपवित्र” हो जावै सै, जो कि लड़की की आज़ादी नै रोकै सै। यो रोक-टोक उसकी आत्म-इज्जत और अपनापन भी कम कर दै सै।

ऐसे रीति-रिवाज दिखावै सै कि इस विषय पर खुल के बात करणा जरूरी सै, और इन पुरानी सोचां नै तोड़ण की बहुत जरूरत सै।`},{name:"A Royal Start, Isolated Aftermath",age:19,content:`आंध्र प्रदेश मैं जब किसी लड़की नै पहला पीरियड होवै सै, तो उस नै एक रानी जैसा सम्मान मिलै सै – बड़ा कार्यक्रम होवै सै, लोग जमा होवै सैं।

तीन दिन तक उस नै कोई छू भी ना सकै सै, और एक खास जगह रहै सै। चौथे दिन माँ और दादी उस नै नहलावै सैं। पूरा परिवार इसे जश्न की तरह मनावै सै – बेटी की बड़े होण की खुशी मनाई जावै सै।

पर पहले पीरियड के बाद के हर पीरियड मैं लड़की नै एक कोना पकड़ा दिया जावै सै, सब सै अलग बैठावै सै, कोई नै छूणा ना – अगर छू लिया, तो हल्दी-पानी सै शुद्धिकरण होवै सै।

खास बर्तन और कपड़े दिए जावै सैं, जिन नै खुद साफ करना पड़ै। चौथे दिन हल्दी छिड़क के उसे “शुद्ध” किया जावै सै।

हालाँकि समय के साथ कुछ बदलाव आया सै, पर यो अलग-थलग करणा आज भी सै – दर्द, अकेलापन और घर सै दूर कर दै सै।`}],WestBengal:[{name:"From Fear To Awareness",age:20,content:`म्हारा पहला पीरियड थोड़ा डर और हैरानी भरा रहया, क्यों कि मन्नै सही तरीके सै समझ ना था कि के हो रया सै। हाँ, पीरियड के बारे मैं सुन रख्या था, पर खुद अनुभव करणा बिल्कुल अलग बात थी।

मैं तो शुरू मैं सोच लिया कि मैं बीमार सूं, इसलिये माँ-बाप नै कुछ ना बतायो। पर अगले महीने मेरी दादी नै देख लिया और तभी मन्नै असली जानकारी मिली। उस के बाद सब थोड़ा आसान होगया।

अब मैं अपने खास दोस्तां और घर वाल्यां सै इस बारे मैं अराम सै बात कर लूं सूं, क्यों कि लोग अब खुले दिमाग सै सोचण लागे सैं। पर कई जगह मैं अभी भी सावधानी बरतूं सूं।

हमारे यहां कुछ परंपराएं सै – जैसे पीरियड के टाइम मंदिर और रसोई सै दूर रहणा। पहले जमाने मैं तो लड़की नै अलग कमरे मैं बैठा दिया जावै सै, पर अब यो सख्ती कम होगई सै।

मेरे ख्याल सै इस बारे मैं सोच मिली-जुली सै – एक तरफ कुछ परंपराएं जो अलगाव पैदा करै सैं, पर दूसरी तरफ अब लोग समझदार भी हो रह्या सै।

कभी-कभी स्कूल मैं शर्म महसूस होई, खासकर जब छोटी थी।

सबसे बड़ी गलतफहमी यो सै कि पीरियड “गंदा” या “अशुद्ध” होवै सै। कई लोग मानै सैं कि इस बारे मैं बात भी ना करणी चाहिए – जो कि बिल्कुल गलत सै। पीरियड एक कुदरती चीज सै और इस बारे मैं बात करणा जरूरी सै।

स्कूल मैं थोड़ी बहुत जानकारी दी गई, पर वो बस विज्ञान तक सीमित थी। असली जानकारी माँ सै मिलगी – कैसे हर रोज इसे संभालणा।

तब मैं नै ऑनलाइन या किताबां मैं कुछ ढूँढा ना था, पर बायोलॉजी की किताब काम की रही। आजकल तो बहुत सारे ऑनलाइन साधन, सोशल मीडिया सै भी जानकारी आसान होगई सै।

दोस्त या परिवार अगर बिना सवाल किए सपोर्ट करें – जैसे सामान दिला दें, अराम करण दे दें – तो बहुत मदद मिलै सै।

हाँ, “वो टाइम ऑफ मंथ”, “मूड स्विंग” जैसे घुमाफिरा के शब्दां की जगह सीधे “पीरियड” बोलणा चाहिए – तभी यो नार्मल होवैगा।

कई बार दर्द और भारी ब्लीडिंग की वजह सै रोजमर्रा के काम मुश्किल हो जावैं सैं – स्कूल, कॉलेज, घर के काम।

कई फंक्शन भी मिस करे सैं जब दर्द ज्यादा होया।

हाँ, शहरां मैं सोच बदल री सै – स्कूल, एनजीओ, मीडिया पीरियड नै सामान्य बना रह्या सै। पर गांवां मैं अभी भी जानकारी की कमी सै।

मैं चाहूं सूं कि पीरियड नै नार्मल जीवन का हिस्सा माना जावै – बिना शर्म या डर के। और लड़के-पुरुष भी यो समझें – तभी वे औरतां नै ठीक से सपोर्ट कर पावैंगे। `}],Telangana:[{name:"Supportive Brothers ",age:18,content:`मैं दो बहना का भाई सूं, और बचपन सै ही माँ नै मुझे पीरियड के बारे मैं समझाया सै। शुरू मैं थोड़ा अजीब लागया, पर माँ नै अच्छे सै समझाया कि यो तो कुदरती बात सै।

अब जब मेरी बहना नै पीरियड होवै सै, तो मैं उनके लिए पैड लिकै आवूं सूं, या उनको अकेलापन महसूस ना हो, इसका ध्यान रखूं सूं।

मन्नै लागै सै कि यो सब जाणणा एक भाई के लिए जरूरी सै – और बाद मैं एक समझदार पति बनणा हो तो और भी जरूरी सै।

मेरे दोस्त भी पूछैं सैं कि मैं इतना समझदार क्यों सूं – मैं बोलूं सूं, यो तो रिस्पेक्ट की बात सै।`},{name:"Celebrating Womanhood Openly",age:20,content:`मेरे घर मैं जब किसी लड़की नै पहला पीरियड आवै सै, तो उस नै खास तरीके सै मनाया जावै सै। सारे रिश्तेदार और दोस्त बुला लिए जावैं सैं – बढ़िया खाना, मिठाई, सब कुछ।

उस लड़की नै रानी जैसा ट्रीटमेंट मिलै सै – क्यों कि यो औरत बनण का पहला कदम सै।
कोई शर्म या झिझक की बात ना सै – उल्टा ये गर्व की बात सै। इस खुलेपन की वजह सै लड़की नै अपनापन और सपोर्ट दोनों महसूस होवै सै।`},{name:"Climatic Shifts and Cycles",age:20,content:`मैं साउथ इंडिया सै सूं, और वहां की गर्मी की आदत पड़ी थी – पीरियड भी नार्मल रहै सैं।

पर जब मैं नॉर्थ मैं हॉस्टल मैं आई, तो सब बदल गया। ठंडी हवा, अलग खाना, नया माहौल – मेरा शरीर गड़बड़ा गया।

पीरियड अनियमित होण लाग्या, शरीर थका-थका रहण लागया और मन भी कमजोर सा लगण लाग्या।

नई जिंदगी, नया रूटीन – सब कुछ अपनाणा मुश्किल होगया। पर धीरे-धीरे खुद नै समझा और ढाल लया।`}],Assam:[{name:"Bridging Tradition and Education",age:19,content:`म्हारा पहला पीरियड 11 साल की उम्र मैं होया था – एकदम नया अनुभव और बहुत डर भी लगया। मैं तुरंत अपनी माँ नै बतायो, क्यों कि मन्नै कुछ समझ ना आ रया था। माँ नै समझाया कि यो हर औरत नै झेलणा पड़ै सै – कुदरती बात सै – और इस सै मुझे हिम्मत मिलगी।

हमारे राज्य मैं जब लड़की नै पहला पीरियड होवै सै, तो बहुत धूमधाम सै त्योहार की तरह मनाया जावै सै। मेहमान बुलावै सैं, लड़की नै नये कपड़े और गहने दिए जावैं सैं। उस नै हमारी पारंपरिक ड्रेस – “मेखेला चादोर” – पहनाई जावै सै और एक केले के पेड़ सै शादी कराई जावै सै।

मन्नै खुद ना पता क्यों करावै सैं, पर सुना सै कि यो लड़की के शरीर मैं आई नई उर्वरता (fertility) का प्रतीक सै।

उसके बाद लड़की नै कुछ दिन उपवास रखवावै सैं और आराम भी करावै सैं। पर एक चीज जरूर रही – पीरियड के टाइम मंदिर और रसोई मैं जाना मना रहै सै।

बाकी बात करूं, तो समाज पीरियड नै लेकै थोड़ा खुला सै। हम तो माँ कामाख्या नै भी पूजैं सैं – जो खुद साल मैं 6 दिन तक पीरियड मैं रहै सै। जून महीने मैं एक बड़ा मेला लागै सै – अंबुबाची मेला – और सारे साधु-संत उस मंदिर मैं आवै सैं।

तो यो कह सकूं सै कि हमारे समाज मैं पीरियड नै लेकै कुछ हद तक सकारात्मक सोच भी सै।

मैं खुद कभी शर्मिंदा महसूस ना करी – माँ-बाप बहुत सपोर्टिव रहै। स्कूल मैं भी जानकारी दी गई, तो हम सब नै पीरियड नै नार्मल समझा।

पर गांवां मैं कई लड़कियां आज भी जानकारी सै वंचित सै – और इसी वजह सै उन्हें मुश्किल होवै सै। घर और स्कूल सै शुरुआत होनी चाहिए – कि यो कोई शर्म वाली बात ना सै – बिल्कुल नार्मल जैसै साँस लैंण।

महिलाओं के लिए सफाई के सामान (sanitary products) सस्ते रेट मैं उपलब्ध होने चाहिए, ताकि कोई भी लड़की अपने पीरियड की वजह सै कोई मौका मिस ना करै।

हालात पहले सै तो काफी सुधर गए सै, पर अभी भी बहुत लंबा रास्ता बाकी सै – जब हर लड़की नै पीरियड के डर, शर्म और तकलीफ सै आज़ादी मिलैगी।

यो तभी हो सकै सै – जब मर्द और औरत दोणूं मिलकै जागरूकता फैलावैं और पीरियड नै एक कुदरती प्रक्रिया के तौर पर अपनावैं।`}],Bihar:[{name:"Clueless and Awkward ",age:19,content:`मन्नै पीरियड के बारे मैं कुछ भी ना पता था, जब तक स्कूल मैं लड़कियां "उस टाइम ऑफ मंथ" की बात ना करन लागी। मैं शर्म की वजह सै किसी सै पूछ भी ना पाई – सीधा गूगल कर लिया।

आज भी जब कोई पीरियड की बात करै सै, तो मुझे थोड़ा अजीब लागै सै। हमारे घर मैं कभी खुल के इस बारे मैं बात ना होई, और मैं आज भी ना समझ पाई सूं कि इस बात नै इतना बड़ा मुद्दा क्यों बनाया जावै सै।

काश! कोई पहले मन्नै समझाया होता।`}],Uttrakhand:[{name:"Unspoken but Understood",age:18,content:`हमारे घर मैं पीरियड की बात ज्यादा ना होवै सै। मैं सिर्फ अपनी माँ सै इस बारे मैं बात करूं सूं। पापा नै शायद सब कुछ पता सै, क्यों कि माँ नै बतायो होवैगा, पर मैं खुद उनके सै कुछ ना बोल्या कभी।

ऐसा लागै सै जैसे घर मैं एक अनकहा नियम सै – पैड नै छुपा के लाओ, या ऐसे मत दिखाओ जैसे कुछ खास चीज हो।

मंदिर में जाने पे सख्त मना तो ना सै, पर माँ कहै सै कि पीरियड मैं मंदिर ना जाया कर। अचार और तीखा खाना भी मना करै सै। और नहाण के बाद माँ कहै सै कि कुछ खा लियो – चाहे एक दाना चावल का या रोटी का टुकड़ा ही क्यों ना हो।

इन सब रीतियों मैं कोई नफरत या गंदगी वाली सोच तो ना सै, पर खुल के इस बारे मैं बात ना करणा – यो ही सबसे बड़ी दिक्कत सै।

ऐसा लागै सै जैसे सब जाणैं सै, पर बोलणा गुनाह हो। और यो चुप्पी ही असली परेशानी बन जावै सै।`}],Punjab:[{name:"Confusion and Customs",age:22,content:`मन्नै अपनी पहली बार पीरियड चौथी क्लास में आ गे थे, और किसी नै ये ना समझाया कि यो के हो रह्या स। बस ए बता दियो कि किसी के आगे यो बात ना करनी। इस बात तै मन्नै बिना समझे ही शर्मिंदगी सी महसूस होई। आठवीं क्लास तक जब मेरी सहेलियां भी पीरियड्स के बारे में बात करन लागी, तै मन्नै भी खुल के बात करणी शुरू करी।

पीरियड्स के ताईं कुछ अजीब रीत-रिवाज भी सैं। जब मन्नै पीरियड्स हों सैं, तै मन्नै मंदिर में जान की इजाजत ना मिलै। मेरी मम्मी तुलसी के पौधे नै पानी भी ना देवे, कहे सै के यो मुरझा जावैगा। अचार सूं भी दूर रहना पड़ै सै, कि कहीं खराब ना हो जावै।

मेरी एक सहेली महाराष्ट्र की सै, और उसनै तो और भी सख्त नियम झेले सैं — पीरियड्स में ना तो बैड पे सोण की इजाजत, ना रसोई में जान की, और ना ही त्योहारों में भाग लेण की।

दूसरी तरफ, एक और सहेली थी जिसनै पीरियड्स के बारे में पहले तै सब समझ रखी थी। उसनै जब पहली बार पीरियड्स आ, तै उसनै ज्यादा दिक्कत ना होई, क्यूंकि उसनै पहले ही जानकारी ले रखी थी। इस बात तै समझ आवै सै के ये सब सोच समाज में इतनी गहराई सूं बैठी होई सै के चाहे कोई कुछ कहे भी ना, फेर भी हम खुद-ब-खुद पूजा-पाठ सूं दूर रहवां लाग जां सैं।

ऊपर सूं टैम्पोन या पैड उठाण में भी शर्म आवै सै, जैसे के यो कोई गंदी चीज हो। पब्लिक में पैड छुपा के रखणा भी इस शर्म का हिस्सा सै।`}],UttarPradesh:[{name:"Secrecy’s Lasting Impact",age:21,content:`जब मैं बड़ी हो री थी, तै सबसे परेशान करण वाली बात यो थी के घर में पैड नै हमेशा छुपा के रख्या जावै। कई बार मन्नै पैड बाथरूम में रख दिया या ऐसे कहीं जहां आसानी सै मिल जावै, पर मेरी मम्मी नै देख लिया तै डांट पड़ी। खासकर अगर पापा देख लेवें, तो और बुरा लागे।

मन्नै समझ ना आओ के मेरी सेहत और जरूरत की चीज नै इतने छुपा के क्यूं रख्या जावै। पैड ही ना, पीरियड्स से जुड़ी कोई भी बात करनी मुश्किल होवैं।

कभी कुछ तकलीफ हो तै कहणा मुश्किल हो जावै — जैसे दर्द हो, या कुछ अलग हो, और डॉक्टर नै दिखावण की बात करो तै चुप कर दिया जावै, जैसे यो बहुत बड़ी बात हो।

आखिर मैं खुद डॉक्टर से ऑनलाइन बात करनी शुरू करी, या अपनी फ्रेंड की मम्मी तै सलाह ले ली। एक साल तक मन्नै फंगल इन्फेक्शन हो रख्या था, पर घर वाले ध्यान ही ना दिए।

यो सब छुपावण, शर्म और बात ना करणा मेरी सेहत पे बहुत असर कर गया। मन्नै तब समझ आ गया के खुलके बात करणा बहुत जरूरी सै।`},{name:"Breaking Barriers in Uttar Pradesh",age:21,content:`हमारे उत्तर प्रदेश में अब बात करणे का चलन थोड़ा-बहुत शुरू हो रह्या सै, पर अभी भी पीरियड्स पे खुले में बात करना बहुत मुश्किल सै।

अक्सर घरा में यो टॉपिक छोरेां सूं छुपाया जावै सै। पर मेरा मानना सै के छोरे भी जाणें पीरियड्स के बारे में ताकि वो अपनी बहनों और बीवियों नै समझ सकें।

बहुत सारी पाबंदियां भी लगाई जावैं सैं — मंदिर में जाना मना, अचार ना छूण, त्योहारों में भाग ना लेण, चाहे लड़की खुद बिल्कुल फिट हो। कहा जावै सै के यो सब उसके भले खातिर सै, पर सच्चाई यो सै के बस पाबंदी सै।

औरतां चुप रह जावै सैं, दर्द सहै सैं, पर कह कुछ ना सकै। मैं चाहूं हूं के एक ऐसा समय आवे जब पीरियड्स पे खुल के बात हो, बिना किसी शर्म के।
`},{name:"Temples and Taboo",age:20,content:`उत्तर प्रदेश में पीरियड्स पे बात करना अब भी टेढ़ी खीर सै। मंदिर में जाना, पूजा में बैठना मना हो जावै सै।

एक बार मन्नै वृंदावन में मंदिर जाणा था, और पीरियड्स आ गे। दूसरे दिन मन्नै मंदिर में ना घुसण दिया — बहुत बुरा लागया, जैसे मैं बाहर कर दी गई।

मैं आज तक अपने पापा या भाई तै पीरियड्स पे बात ना करी। पर मन्नै लागै सै के छोरेां नै खुद आगे बढ़के ऐसा माहौल बनावण चाहिए, जिसमें छोरियां खुलके बात कर सकें।`},{name:"Early Education, Early Acceptance",age:18,content:`मेरे स्कूल में पीरियड्स पे पहले ही अवेयरनेस क्लास हो चुक्की थी। इस कारण जब मन्नै पहली बार पीरियड्स आ, मन्नै कोई डर ना लाग्या, न शर्म।

हम खुलके बात करया करैं, स्कूल में, सहेलियों के बीच। अगर हर स्कूल ऐसा करे, तै बहुत सी छोरियां जो डरती सैं, उन नै हिम्मत मिल जागी।`}],Kerala:[{name:"Normalizing Periods in Friend Groups",age:20,content:`मेरे दोस्तां के बीच पीरियड्स पे खुलके बात हो जावै सै। एक बार मेरी एक सहेली नै इवेंट के बीच में बहुत तेज दर्द होया। पर हम सब नै मिल के मदद करी — मन्नै बिना हिचक के उसके लिए पैड लाया।

उस मोके नै देख के मेरी सोच बदलगी। यो कोई शर्म की बात ना सै — दोस्त होण का मतलब ही यो सै के एक-दूजे की मदद करी जावै, चाहे दर्द हो या कोई जरूरत।

अब मैं अपने छोरे दोस्तां नै भी कहूं हूं के इस बारे में समझदारी दिखाओ। खुलके बात करो। अगर किसी नै दर्द हो रह्या सै, तै मदद करणी जरूरी सै।`}],Odisha:[{name:"Silent Discomfort",age:17,content:`मन्नै पीरियड्स के बारे में कुछ भी ना जाण्या, जब तक दसवीं क्लास में बायोलॉजी की क्लास में टीचर नै थोड़ा बहुत बताया। पर ऊ भी ऐसे ही झटपट निपटा दिया।

घरा में मेरी बहन अपने पैड छुपा के रखे सै, और मन्नै पूछण की भी इजाजत ना सै। एक बार गलती सै मन्नै एक पैड छू लिया, तै मम्मी-पापा नै डांट दिया — जैसे मन्नै कोई बडी गलती कर दी हो।

यो टॉपिक ऐसा बना दिया सै जैसे बोलणा भी गलत हो। घर का माहौल ए सै जैसे कुछ बहुत गंदी चीज हो — बस बात ही मत कर।

मन्नै बस इच्छा सै के कोई खुले में समझावे, खुलके बात हो इस बारे में, जैसे बाकी चीजां पे होवे सै।`}],Gujarat:[{name:"Father’s Support, Society’s Stigma",age:19,content:`गुजरात में ज़्यादातर लोग — खासकर औरतां — पीरियड्स पे मर्दां सूं बात करणे में हिचकिचावैं सैं। पर मेरा घर थोड़ो अलग सै।

मेरे बाबूजी और भाई बहुत सपोर्टिव सैं। पीरियड्स के टाइम मेरी हर चीज़ का ध्यान राखैं सैं — मन्नै बहुत अच्छा लागै सै।

मेरी मम्मी की पीढ़ी की औरतां अब भी इस टॉपिक पे मर्दां तै बात करणे में असहज सैं। पर मन्नै लागै सै अगर मर्द इस बारे में समझदार हो जावै, तै घर का माहौल ही बदल जावै सै।`},{name:"Silent Struggles, Open Conversations",age:19,content:` मेरे पीरियड्स जब पहली बार आए, मन्नै पहले ही जानकारी थी — क्यूंकि मैं अपनी फ्रेंड्स में सबसे आखिरी थी जिसे पीरियड्स आए। उस टैम हम मंदिर गए होए थे, और जब घर वापिस आए, तै मन्नै पता चला।

मेरी मम्मी नै मदद करी और सब समझाया।

पहले स्कूल में मन्नै पीरियड्स पे बात करणा अजीब लागता था। पर अब मैं परिवार और दोस्तों तै खुलके बात करूं सै।

हमारे यहां कुछ परंपराएं सैं — जैसे पीरियड्स में पानी ना छूणा, रसोई सूं दूर रहणा, मंदिर ना जावण, खट्टी चीज ना खाणी, बाल ना धोणा।

कहवैं सैं के यो सब सेहत खातिर सै — आराम मिल जावै सै। मन्नै दौड़-भाग कम कर दी जाती सै ताकि आराम मिल सके।

मन्नै ज्यादा दर्द ना होवे, बस मूड स्विंग्स हो जावैं सैं — एक टैम गुस्सा, दूसरे टैम हंसी।

अब सोशल मीडिया और वेबसाइट्स तै जानकारी मिल जावै सै। चीजें बदल री सैं, और मन्नै लागै सै आगे और बदलाव आवैगा।`}],MadhyaPradesh:[{name:"Teaching Men, Changing Minds",age:20,content:`आज भी पीरियड्स पे बात करना कई जगह टैबू सै, पर मेरी कहानी थोड़ी अलग सै। मेरी मम्मी नै पहली पीरियड्स से पहले ही सब समझा दिया था। जब मन्नै पीरियड्स आए, तै ऊ मेरी पूरी मदद करी।

पर मम्मी ने खास कह दिया के पापा नै ना बताइयो। मन्नै यो बात बेवजह लगी।

फेर मन्नै सोचा के अपने भाई नै खुद समझावां। जब मन्नै उससे बात करी, तै उसने बहुत अच्छे तै समझा और कोई भी नकारात्मक रिएक्शन ना दिया।

घर में मंदिर वगैरह में जाणा मना सै उस टाइम, पर मन्नै लागै सै के यो आध्यात्मिक सोच सै — और घर में इस चीज़ नै लेके कोई शर्म ना सै।

दूसरे जगहों की बात सुनते हैं के औरतां नै बुरा व्यवहार झेलना पड़ै सै पीरियड्स में, पर मन्नै ऐसा कुछ महसूस ना होया।

मन्नै पूरा विश्वास सै के हम नई पीढ़ी नै समझा के इस टैबू नै खत्म कर सकें सैं।`},{name:"Hostel Stories and Home Realities",age:20,content:`जब तै मन्नै पीरियड्स चालू होए, तब तै मन्नै घर में कोई दिक्कत ना होई। पर जब मैं हॉस्टल गई, तै दूसरियों की बातें सुनकर झटका लाग्या।

कुछ फ्रेंड्स बतावैं के उन्हें किचन में जान की मनाही थी, कुछ नै दूर बैठाया जावै सै।

मन्नै याद सै जब मन्नै चिकनपॉक्स हो रख्या था, तब मन्नै भी उन औरतां तै दूर बैठाया गया जो पीरियड्स में थीं — जैसे के पीरियड्स कोई बीमारी हो।

पर मैं किस्मत वाली रही — मेरे घर में ऐसी परंपराएं ना रही।
 `},{name:"Routine Rules, No Shame",age:20,content:`मेरे घर में पीरियड्स के टाइम कुछ नियम जरूर सैं — जैसे रसोई में ना जान, मंदिर में ना घुसण।

तीसरे दिन बाल धोणे, कंबल-तकिया धोन, सब कुछ करना पड़ै सै।

पर कोई शर्म या गंदगी वाली सोच ना सै — बस रीति-रिवाज की तरह। इसलिए मन्नै कभी बुरा ना लाग्या। घर में सब चीज नै एक नेचुरल चीज की तरह मान्या जावै सै।`},{name:"School’s Role in Breaking Stigma",age:18,content:`आज भी लोग पीरियड्स पे खुलके बात ना करैं सैं। स्कूल में कभी जानकारी दी भी जावै, तै वो इतनी जल्दी में होती सै के मजाक बन जावै।

छोरियां खुद हंसी में उड़ा देवैं सैं — ध्यान कम और हिचक ज्यादा।

अगर स्कूल थोड़ा खुला और समझदारी से समझावै, तै छोरियां भी खुल के सवाल पूँछ सकें। `}],Karnataka:[{name:"City Freedom vs Village Constraints",age:19,content:`मैं एक मेट्रो शहर में बड़ी होई, तै मन्नै कभी ज्यादा टैबू महसूस ना होया पीरियड्स को लेके। पर जब मैं अपने गांव (आंध्र प्रदेश) गई, तै असली फर्क दिखा।

वहां बहुत सी औरतां नै सैनिटरी पैड्स तक मयस्सर ना सैं। कपड़ा इस्तेमाल करणा, और पीरियड्स के टाइम गंदगी झेलण — सब आम बात सै।

मन्नै खुद कोई भेदभाव महसूस ना होया, पर मन्नै दूसर्यां की हालत देखके बहुत दुख होया। समाज में अभी भी पीरियड्स नै “गंदा” या “अपवित्र” समझा जावै सै।

मैं चाहूं हूं के औरतां खुलके बात कर सकें — हर गांव-शहर में जागरूकता हो।`}],TamilNadu:[{name:"Celebration with Restriction",age:20,content:`जब मन्नै पहली बार पीरियड्स आए, तै समझ ही ना आ रह्या था के हो के रह्या सै। लोग खुश भी हो रह्या थे, पर मैं तो हक्का-बक्का रहगी।

अपनी सहेलियों और परिवार तै बात करणे में तो कोई दिक्कत ना होई, पर लोगों की बात करने की टोन बड़ी सीधी और 'शालीन' रही।

कहण को तो छोटा-मोटा जश्न होया — तोहफे वगैरह मिले, पर साथ में रोक-टोक भी। मंदिर में ना जावै, पूजा ना करै — अरे भाई, आज के टैम में भी ये सब?

अगर कभी कपड़े पे दाग लग जा, तै शर्म आ जावै — जैसे कुछ ग़लत हो गया।

स्कूल तै पहले कुछ खास जानकारी ना थी — खुद भुगत के ही सीख्या। अब सोचूं हूं के स्कूल में खुली बात होनी चाहिए — मीटिंग्स, सेशंस आदि।

पीरियड्स का मजाक ना उड़ाया जावै — मर्द औरत में फर्क करणे का जरिया ना बनावै इस बात नै।`}],Delhi:[{name:"Periods and Policy Change",age:27,content:`Delhi
1. पॉलिसी बदलो, नजरिया बदलैगा (Periods and Policy Change)
उम्र: 27 साल

इंडिया में आज भी पीरियड्स नै लेके पुरानी सोच बनी हुई सै — मंदिर में ना जाणा, शर्म की बात बनाना।

कुछ स्कूल अवेयरनेस वर्कशॉप करावैं सैं — अच्छा सै। पर जो अनपढ़ लोग सैं, वो इन चीजां तक ना पहुंच पावैं।

सरकारी स्तर पर भी सपोर्ट कम सै। मन्नै लागै सै लड़कियों और औरतों नै हर महीने 3 दिन की छुट्टी मिलनी चाहिए — स्कूल हो या काम।

आईआईटी में ऐसा कुछ था, पर हर जगह लागू होना चाहिए।`},{name:"Family Mentality and Menstrual Shame",age:19,content:`शर्म की शुरुआत घर तै होवैं सै। स्कूल तो कोशिश करै सै समझावण की, पर बचपन की सीखें हमें चुप करवा देवैं सैं।

लड़कियां खुद आपस में भी बात करणे में झिझकती सैं।

अगर छुट्टी लेणी हो, तै असली कारण बताणा भी मुश्किल हो जावै — शर्म आती सै।

लड़के आज भी बस इतना जानैं सै के महीना में एक बार खून आवै सै — दर्द, मूड स्विंग, कमजोरी के बारे में कुछ ना जाणैं।

इसलिए जरूरी सै के छोरे और छोरियां दोनूं नै एक जैसी जानकारी मिले, ताकि समझदारी और इज्जत से बात हो सके।`}]},mr:{Rajasthan:[{name:"A Scarf and Strength",age:20,content:`जेव्हा मला पहिल्यांदा पाळी आली, तेव्हा मी खूप घाबरले होते आणि मला त्याबद्दल काहीच माहिती नव्हती. पण मी माझ्या आईला सांगितलं, आणि तिनं मला खूप मदत केली. मला माझ्या जवळच्या मैत्रिणींबरोबर आणि कुटुंबातील महिलांबरोबर पाळीविषयी बोलायला काहीच अडचण वाटत नाही, पण पुरुषांशी याबद्दल बोलायचं म्हटलं की माझं मन पूर्णपणे कोरडं होतं.

          माझ्या कुटुंबात फारशा बंदिशा नाहीत, पण काही आहेत—जसं की धार्मिक विधी आणि पूजेमध्ये थोडं दूर राहावं लागतं. आमच्या संस्कृतीत पाळीविषयी नकारात्मक दृष्टिकोन आहे, पण तो चुकीचा आहे, कारण पाळी येणं म्हणजे अशुद्ध होणं नाही आणि ते कोणत्याही विधीला वाईट प्रकारे बाधा आणत नाही.
          
          कधी कधी मला पाळीविषयी बोलताना लाज आणि संकोच वाटतो, विशेषतः जेव्हा मी पाळीवर असते आणि काही अनपेक्षित घडतं—जसं आठवीत झालं. मी शाळेत होते, आणि अचानक पाळी सुरू झाली, जरी त्याला फक्त १४ दिवस झाले होते. मी तयार नव्हते आणि माझ्याकडे पॅड नव्हता. सुरुवातीला मी घाबरले, विशेषतः कारण मी नव्या शाळेत होते आणि फारश्या मैत्रिणी नव्हत्या. मी तात्पुरता उपाय म्हणून दुपट्ट्याचा वापर केला, पण पाळी खूप जड होती, आणि कपडे कधी कधी डागाळत होते, त्यामुळे मला खूप लाज वाटायची.
          
          मी अशा समाजात राहते जिथं पाळीबद्दल बोलणं लाजिरवाणं समजलं जातं, आणि ही मानसिकता माझ्यावरही परिणाम करते. पण भविष्यात, जेव्हा माझं स्वतःचं कुटुंब असेल, तेव्हा मला पाळी ही एक सामान्य गोष्ट व्हावी असं वाटतं—जिच्याबद्दल आपण मोकळेपणानं बोलू शकतो.
          
          मोबाईल फोन आणि टीव्हीवरून पाळीविषयी माहिती मिळते, पण घरच्यांचे अनुभव ऐकणं किंवा शाळेतून मिळणाऱ्या सत्रांतून शिकणं जास्त प्रभावी ठरतं. पाळीचं शिक्षण शाळेच्या अभ्यासक्रमाचा भाग असायला हवा, जेणेकरून शिक्षक मुला-मुलींना स्पष्ट माहिती देऊ शकतील. असं झालं तर मुलंही मुलींना मदत करू शकतील. हे शिक्षण वयाच्या १२ पूर्वी दिलं गेलं पाहिजे, कारण अनेक मुलींना त्या वयातच पाळी सुरू होते.
          
          कुटुंब आणि मित्र जर पाळीच्या काळात मुलींचा पाठिंबा देतील, तर हा काळ हाताळणं सोपं होतं. पाळीचा माझ्या अभ्यासावर आणि दैनंदिन जीवनावर परिणाम होतो—कधी कधी मला स्त्री असल्यामुळेच राग येतो, कारण वेदना आणि अडचणी खूप असतात. परीक्षा असेल आणि जर पाळी आली तर मी लक्ष केंद्रित करू शकत नाही, आणि त्यामुळे माझे गुण कमी होतात. प्रवास करणं किंवा कौटुंबिक कार्यक्रमांना जाणं खूप कठीण होतं, कारण मला खूप जड पाळी आणि तीव्र वेदना होतात, पण सुदैवानं मी अद्याप कुठलीही मोठी संधी गमावलेली नाही. मात्र, मला सतत पुढच्या पाळीची चिंता वाटत राहते.
          
          पूर्वीच्या काळात मुलींना पाळीच्या काळात एका खोलीत राहावं लागत होतं, जे मला चुकीचं वाटतं—तरी त्यातून विश्रांती मिळायची. आता परिस्थिती बदलतेय, हे चांगलं आहे, पण अजून खूप वाटचाल बाकी आहे. आजही अनेक वेळा आपल्याला सगळ्या नियमित गोष्टी कराव्या लागतात, पण आपण दुखत आहोत हे कुणालाही सांगता येत नाही.
          
          माझ्या आयुष्यात पाळीविषयीच्या दृष्टिकोनात फारसा बदल पाहायला मिळालेला नाही. आपण आता कापडाऐवजी सॅनिटरी पॅड्स वापरतो, पण पाळीबद्दल खुलेपणाने बोलणं अजूनही दुर्मिळच आहे. मला आशा आहे की लवकरच हे सगळं पूर्णपणे बदलेल.`},{name:"Cloth, Courage, and Change",age:19,content:`जेव्हा मला पाळी आली, तेव्हा मी १६ वर्षांची होते, आणि मला त्याबद्दल काहीच माहिती नव्हती.
माझ्या मोठ्या बहिणीने मला कपडा वापरायला सांगितलं आणि कुणाला काही सांगू नको असंही बजावलं.
कसं तरी मी ते सगळं सांभाळलं, पण त्या दिवशी पूर्ण वेळ माझं मन अस्वस्थ होतं आणि चिडचिड वाटत होती.
माझ्या मनात विचार आला की, "मला असं वेदनेत जगायचंच नाही."
हळूहळू मी पाळी हाताळायला शिकले.

आता फारशा बंदिशा नाहीत, पण जेव्हा आई आजारी होती, तेव्हा आम्हालाच पाळीत असतानाही सगळी कामं करावी लागायची.
सामान्यतः मला स्वयंपाक करावा लागायचा, पण काही वेळा आम्हाला पाणी स्पर्श करण्यास आणि स्वयंपाकघरात जाण्यास बंदी होती.

आता माझं दोन मुलं आहेत, आणि माझ्या मुलीला पाळीबद्दल सगळं माहीत आहे.
तिला अजून पाळी सुरू झालेली नाही, पण तिने मोबाईल आणि टीव्हीवरून याबद्दल शिकलेलं आहे.
मला तिच्याशी या गोष्टींबद्दल बोलायचं आहे, पण मला लाज वाटते.
माझं असं वाटतं की जेव्हा तिला पाळी सुरू होईल, तेव्हा मी तिला सगळं सांगेन.
मला या विषयावर कुणाशी बोलताना संकोच वाटतो, पण मी असं मानते की यावर कोणत्याही प्रकारची बंदी असू नये.
कोणालाही लाज वाटता कामा नये; ही एक नैसर्गिक प्रक्रिया आहे जी अनेक आजार टाळायला मदत करते.`},{name:"Breaking the Silence with Support",age:33,content:`मला पाळी १५ वर्षांची असताना आली. माझ्या मोठ्या बहिणीकडून मला आधीच याबद्दल माहिती होती, पण पहिल्या दिवशी मला खूप तणाव आणि चिडचिड वाटली.
हळूहळू मी तिच्या मदतीने पाळी हाताळायला शिकले, आणि नंतर सगळं सोपं वाटू लागलं. त्या वेळी सॅनिटरी उत्पादने सहज मिळत नव्हती, त्यामुळे आम्हाला कपड्याचाच वापर करावा लागायचा.

बंदिशींच्या बाबतीत, आम्ही सगळ्यांनी साधारण एकसारखे नियम पाळले—पाण्याच्या स्रोतांना हात लावायची परवानगी नसे, स्वयंपाक करता येत नसे, आणि आरती करायला मनाई असे.
पण जर दुसरा पर्याय नसेल, तर कामं करावीच लागायची.

मला मित्रमैत्रिणी किंवा कुटुंबीयांशी पाळीबद्दल मोकळेपणाने बोलायला खूपसा आरामदायक वाटत नसे, पण मी माझ्या नवऱ्याशी मोकळेपणाने बोलते, आणि तो त्या काळात माझा खूप आधार देतो.

आजकाल मुले समाजमाध्यमांद्वारे पाळीबद्दल बरीच माहिती घेतात, पण आमच्या काळात अशा सुविधा आणि प्रगत तंत्रज्ञान नव्हतं, जे आमचं योग्य मार्गदर्शन करू शकलं असतं.

माझी अजून मुले नाहीत, पण मला असं वाटतं की माझं कुटुंब जर असतं, तर पाळीबद्दल मोकळेपणाने बोलण्यात त्यांना काही अडचण वाटली नसती.
माझ्या पहिल्या पाळीपासून आजपर्यंत खूप काही बदलले आहे, आणि मला विश्वास आहे की भविष्यात हे बदल आणखी वेगाने होतील.`}],Maharashtra:[{name:"Whispers with My Brother",age:18,content:`पाळीच्या पहिल्याच दिवशी मी घरी एकटीच होते आणि पाळी म्हणजे काय याबद्दल काहीच कल्पना नव्हती.
थोडी घाबरले होते, पण पाळीबद्दल ऐकलेलं मात्र होतं. मी दिवसभर आईची वाट पाहिली आणि जेव्हा ती घरी आली, तेव्हा तिने मला समजावलं आणि मदत केली.

माझ्या महिला नातेवाईकांशी मी या विषयावर मोकळेपणाने बोलू शकते.
माझ्या भावाशीही थोडंफार अप्रत्यक्षपणे बोलता येतं, पण “पाळी” हे शब्द वापरत नाही.
पण वडिलांशी यावर मी अजिबात बोलू शकत नाही.

पाळीच्या काळात मला देवाची पूजा करता येत नाही, अन्नाला हात लावता येत नाही, पूजेच्या जागेपासून दूर राहावं लागतं आणि अजून खूप काही.
खरं सांगायचं तर, अशावेळी असं वाटतं की माझ्याशी एखाद्या कोविड रुग्णासारखं वागलं जातं — जणू वेगळं काढावं लागतं.
पाळीबाबत समाजात नकारात्मक दृष्टिकोन आहे, कारण त्यांना वाटतं की पाळी आलेल्या स्त्रिया अपवित्र असतात.

माझा असा अनुभव नाही की पाळीमुळे मला कधी लाज वाटली, कारण माझ्या मैत्रिणी खूप मदतीच्या आणि समजूतदार आहेत.
माझं मत आहे की पाळीबाबत खूप गैरसमज आहेत — जसं की पाळीच्या काळात स्त्रिया अपवित्र असतात, त्यांना स्पर्श करू नये, अन्न खराब होईल इत्यादी.

१०वी आणि ११वी मध्ये मला पाळीबद्दल खूप चांगल्या पद्धतीने शिक्षण मिळालं.
त्यामुळे मला आणि माझ्या वर्गातील मुलांनाही हे समजून घ्यायला मदत झाली की पाळी म्हणजे नेमकं काय, आणि स्त्रियांशी त्या काळात कसं वागावं.
पुस्तकांनी खूप मदत केली.

प्रामाणिकपणे सांगायचं तर, पाळीच्या वेळी भावनिक आधार मिळणं हे फार मोठं सहाय्य असतं.
आपल्याला शारीरिक वेदना सहन कराव्या लागतात, आणि त्या सहन करण्यासाठी मानसिक आधार फार उपयोगी पडतो.
मित्रमैत्रिणी किंवा कुटुंबीय गरम पाण्याच्या बॉटल्स, हवी असलेली खाणं देऊन मदत करू शकतात.

माझी पाळी खूप वाईट असते.
संपूर्ण आठवडाभर पाठीचा त्रास होतो आणि शरीरभर वेदना होतात.
त्यामुळे मला काही वर्ग सोडावे लागले आहेत किंवा खूप वेदनेत क्लास अटेंड करावे लागले.
कधी कधी देवळात जाणं, सण समारंभ टाळावे लागले — केवळ वेदना आणि सामाजिक बंदिशांमुळे.

माझ्या मते, पाळीबाबतचा दृष्टिकोन हळूहळू बदलतो आहे कारण शिक्षण महत्त्वाची भूमिका बजावतं.
अधिकाधिक लोक पाळीच्या चक्राबद्दल समजून घेत आहेत आणि त्यामुळे मुलींना मित्रमैत्रिणी, सहकारी यांच्याशी मोकळेपणाने बोलता येतं.
अशीच जागरूकता पुढेही वाढवली गेली पाहिजे आणि प्रत्येकाला याबद्दल शिक्षित केलं पाहिजे.`},{name:"A Family’s Shared Responsibility",age:20,content:`जेव्हा माझ्या आईला पाळी असते, तेव्हा घरकामाची जबाबदारी आमच्यावर – म्हणजे घरातल्या पुरुषांवर – येते.
मी स्वयंपाकाची जबाबदारी घेतो, आणि माझा भाऊ झाडू-पोछा करतो.
आम्ही हे बघतो की आईला गरजेपेक्षा जास्त काही करावं लागू नये.

आणि जेव्हा माझ्या बहिणीला पाळी असते, तेव्हा आम्ही तिच्या मूडबाबत विशेष जागरूक असतो.
तिला चिडचिड वाटत असेल किंवा त्रास होत असेल, तर आम्ही शांतपणे ऐकतो, काही वाद घालत नाही.
मी तिला त्रास देत नाही, काही मागे लागत नाही.

माझ्या मैत्रिणी किंवा गर्लफ्रेंडबाबतही मी हेच तत्त्व पाळतो – त्यांना जे काही आरामदायक वाटतं, ते करण्यासाठी मी नेहमी तयार असतो.
चॉकेलेट्स असोत किंवा त्यांच्या मनाप्रमाणे काही हवं असेल, तर मी ते विचार न करता आणतो.
आणि हे फक्त मोठ्या गोष्टींसाठीच नाही – गरम पाण्याची बॉटल आणणं, किंवा डोक्यावर हलकं मसाज करणं अशा छोट्या गोष्टींसाठीसुद्धा मी तत्पर असतो.

माझ्यासाठी, हे सगळं अगदी नैसर्गिक आहे – माझ्या परीने जसं जमेल, तसं त्यांच्या सोबत असणं हेच महत्त्वाचं वाटतं.`},{name:"Emotional Rollercoaster During Exams",age:20,content:`पाळी येण्याच्या सुमारे १५ दिवस आधीच मी पूर्ण वेगळी वाटायला लागते.
माझा मूड बदलतो, आणि हे सगळं बऱ्याच वेळा परीक्षेच्या काळात होतं, त्यामुळे सITUATION आणखी कठीण होते.
भावना अनियंत्रित होतात आणि त्याचा परिणाम माझ्या अभ्यासावर आणि मानसिकतेवर होतो.

त्या दिवसांत मला फक्त झोपावंसं वाटतं, आणि त्यामुळे अभ्यासावर लक्ष केंद्रित करणं खूप कठीण जातं.
शारीरिक त्रास — वेदना, घाम येणं, आणि स्वतःच्याच मनःस्थितीबद्दल अस्वस्थ वाटणं — सगळं एकत्र येतं.

तरीसुद्धा, मी स्वतःला झटून मेहनत करायला प्रवृत्त करते, जेणेकरून अभ्यास फारसा बिघडू नये.
हे सगळं खूप कठीण असतं, आणि असं वाटतं की हा त्रास पुन्हा पुन्हा सुरू होणारा एक चक्रच आहे.
पण कितीही अवघड झालं तरी, मी थांबत नाही — मी चालत राहते.`},{name:"Cycling Away the Cramps",age:19,content:`शाळेत असताना मला दर महिन्याला खूप वेदनादायक पाळीच्या वेळी पाठदुखी आणि पोटात कळा यांचा त्रास व्हायचा.
त्यावेळी मी फारशी शारीरिकदृष्ट्या सक्रिय नव्हते, आणि ज्या शहरात मी राहत होते तिथल्या खराब हवामानामुळे कदाचित त्रास अजून वाढला असावा.

पण कॉलेजमध्ये आल्यापासून परिस्थिती खूप बदलली आहे.
मी काही काळ खेळांमध्ये सहभागी झाले आणि कॅम्पसच्या आत सायकल चालवायला सुरुवात केली,
आणि आता जवळपास त्या वेदना पूर्णपणे बंद झाल्या आहेत.

मी इंजिनिअरिंग कॉलेजमध्ये आहे, त्यामुळे बर्‍याच वेळा मी काही परिस्थितींमध्ये एकटीच महिला असते.
त्यामुळे मी सतत सजग राहायला शिकले — जेव्हा पाळी येण्याचा काळ जवळ असतो, तेव्हा नेहमी एक सॅनिटरी नॅपकिन बरोबर ठेवते.

आता मला त्याबद्दल फारसं काही वाटत नाही — ती गोष्ट माझ्या दैनंदिन आयुष्याचा एक सहज भागच बनली आहे.`},{name:"The Cost of Dignity",age:19,content:`माझ्या भागात मी एक गोष्ट नेहमीच पाहिली आहे — काही आर्थिकदृष्ट्या कमकुवत कुटुंबं सॅनिटरी नॅपकिन्स विकत घेणं टाळतात, कारण त्यांची किंमत परवडत नाही.
यामध्ये अनेक घरकाम करणाऱ्या महिलांचा समावेश होतो, ज्या नाईलाजाने कमी स्वच्छतेच्या पर्यायांचा वापर करतात.

आर्थिक अडचणींमुळे महिलांना सॅनिटरी प्रॉडक्ट्स सहज मिळू न शकणं ही एक अशी समस्या आहे, जी फारशी बोलली जात नाही.
पण त्यामुळे त्या महिलांच्या आरोग्यावर आणि सन्मानावर मोठा परिणाम होतो.

ही एक शांत पण गंभीर समस्या आहे — जी अजूनही दुर्लक्षित आहे, पण खूप जणींना प्रत्यक्षात प्रभावित करते. `},{name:"Pink Room and Temples",age:19,content:`महाराष्ट्रात, मी पाहिलं आहे की पाळीच्या बाबतीत लोकांची मानसिकता हळूहळू बदलत आहे.
आजकालच्या मुलींना याबद्दल बोलायला लाज वाटत नाही, तरीही एक बंदी अजूनही कायम आहे:
बर्‍याच लोकांना, आणि मी त्यात समाविष्ट आहे, पाळीच्या काळात मंदिरांमध्ये जाणं किंवा पूजा केलेल्या वस्तूंचा स्पर्श करणं टाळायला सांगितलं जातं.

माझ्या कल्पनेनुसार, काही गावे अशी असतील जिथे अजूनही या चर्चांना टाळलं जातं, आणि पाळीशी संबंधित मुद्दे खुलेपणाने बोलले जात नाहीत.

माझ्या शाळेत एक "पिंक रूम" होता, एक छोटंसं स्पेस जे त्या वयाच्या मुलींसाठी होतं, जसं एक विश्रांती कक्ष, जेव्हा त्यांना पाळी असायची.
ते विशेष काही नव्हतं, पण तेथे सॅनिटरी नॅपकिन्स उपलब्ध होते, जे फार उपयोगी होतं.
माझ्या मते, हे प्रत्येक शाळा आणि कॉलेजमध्ये असायला हवं, जेणेकरून मुलींना त्याची गरज असताना त्यांचा अनुभव थोडा सोप्पा होईल.`},{name:"Inclusivity Needed in Education",age:20,content:`माझं ठाम मत आहे की पाळीशी संबंधित असलेली मडोमोडी (स्टिग्मा) तेव्हा संपुष्टात येईल जेव्हा ती एक अशा विषय बनेल ज्यावर मोकळेपणाने चर्चा केली जाऊ शकते.
कॉलेजमध्ये मी असे काही प्रसंग पाहिले आहेत जिथे पाळीवर शिबिरं घेतली गेली, ज्यात बीटेक पहिल्या वर्षाच्या मुलींपासून ते पदव्युत्तर विद्यार्थिनींना आमंत्रित करण्यात आलं.
पण मुलांचा त्यात पूर्णपणे अभाव होता, जो खूप ठळक दिसला.

या वयात मुली पाळीबद्दल खूप परिचित असतात, त्यामुळे मुलांसाठीही या शिबिरांमध्ये सामील होणं तितकंच महत्त्वाचं वाटतं.
दुर्दैवाने, आपली मानसिकता अशी आहे की आपण अशा खुल्या चर्चांना विरोध करत असतो.
मुलांना या चर्चांमध्ये समाविष्ट करण्याचा विचारही हमखास होत नाही, आणि त्यांना सहभागी होण्याची अपेक्षाही नाही.

पाळीची स्वच्छता आणि संबंधित मुद्द्यांबद्दल बोलताना, त्यावर फक्त महिलांचीच चर्चा न करता, त्यात मुलांचा समावेश होणं गरजेचं आहे.
सर्वात महत्त्वाचं म्हणजे, त्या मुलांमध्ये एक दिवस पिता होणार आहेत, आणि त्यांच्याकडे पाळीशी संबंधित खुल्या मनाचा संस्कृती विकसित करण्याची क्षमता आहे.
तेच भविष्यातील पिढ्यांना पाळीबद्दल मोकळेपणाने विचार करण्यास प्रोत्साहित करू शकतात, आणि त्यामुळे समाजात असलेल्या मडोमोडीला दूर करता येईल `}],Haryana:[{name:"Hidden Pain Public Shame",age:18,content:`माझ्या पाळीचा पहिला अनुभव ८व्या वर्गात झाला. मला वेदना होत्या, पण मला काहीच सांगायचं नव्हतं. त्या वेळी, माझ्या वयाच्या अनेक मुली पाळी सुरू झाल्याचं कबूल करण्यात लाजत होत्या — अगदी मी देखील. आम्ही somehow असं समजत होतो की, हे काहीतरी लाजिरवाणं आहे, कदाचित गंधही असू शकतं.

तथापि, काळानुसार, माझ्यासाठी ते सामान्य झालं आणि मी ते जीवनाच्या एका सामान्य भाग म्हणून स्वीकारलं. तरीही, मला माहित आहे की काही मुली अजूनही मंदिरात जात नाहीत किंवा पूजा करत नाहीत, कारण त्यांच्या कुटुंबांना त्यांचा हा काळ "अशुद्ध" असतो असं मानलं जातं.
ही परंपरा आजही अनेक लोकांच्या कुटुंबांमध्ये जाऊन राहिली आहे.`},{name:"Discrimination",age:19,content:`माझं असं समजणं आहे की, पाळीबद्दलची जैविक आणि शारीरिक बाजू समजून घेणं मला चांगलं येतं. जेव्हा मला माहित असतं की माझी मित्रं किंवा कुटुंबातील सदस्य पाळीवर आहेत, तेव्हा मी थोडं जास्त विचारपूर्वक वागण्याचा प्रयत्न करते. कदाचित ते केवळ त्यांना त्रास देणारं काही न बोलणं किंवा त्यांच्या कामात थोडं मदत करणं, त्यामुळे त्यांचं ओझं हलकं होईल. मी हे जाणलं आहे की, त्यांच्यासाठी काही छोटे छोटे कामं घेतल्याने फरक पडू शकतो.

कधी कधी, ते अशा गोष्टी बोलतात ज्या त्यांना खरंतर म्हणायचं नसतात, कदाचित त्रास किंवा मूड स्विंग्समुळे, पण मी ते वैयक्तिक घेत नाही — मी फक्त त्यांना दुर्लक्ष करते. आणि हो, मी नेहमी चॉकलेट्स तयार ठेवते. चॉकलेट्सवर काहीच चुकत नाही!

सर्वात महत्त्वाचं म्हणजे, मी त्यांना सन्मानाने वागवण्यावर विश्वास ठेवते, विशेषतः त्या वेळी जेव्हा ते अधिक संवेदनशील किंवा अस्वस्थ असू शकतात. मी ते जाणूनबुजून करण्याचा प्रयत्न करते, आणि मला आशा आहे की त्याची कदर होईल. पण मी पाहिलं आहे की, दुर्दैवाने, आपल्यातील सर्व लोक त्याच दृषटिकोनातून पाहत नाहीत. जे मला त्रासदायक वाटतं, ते म्हणजे काही लोक अजूनही जुनी सामाजिक परंपरांशी आणि पाळीवर असलेल्या मडोमोडीशी जडलेले आहेत, ज्यामुळे दुसऱ्या लोकांना त्यांच्या पाळीच्या काळात कसं वागवले जातं हे प्रभावित होतं. विडंबनात्मकपणे, हे लोक अनेक वेळा महिलाच असतात, विशेषतः वृद्ध पिढीतील लोक, ज्यांनी वेगळी मानसिकता वाढवली आहे.

एक आठवण मला खूप स्पष्टपणे आठवते, जी नेहमीच माझ्या डोळ्यात भरून राहिली. ती दिवाळीची वेळ होती, आणि माझ्या कुटुंबातील एक सदस्य पूजा करत असताना आमच्यासोबत बसलेली नव्हती. तेव्हा मी लहान होते आणि तिने पूजा का केली नाही हे पूर्णपणे समजलो नव्हते. नंतर मला कळलं की, ती फक्त पाळीवर होती म्हणून तिला वगळण्यात आलं होतं. ते मला योग्य वाटलं नाही आणि मला ते समजल्यावर मी खूप वाईट वाटलं. ते पाहून मी जाणलं की ही परंपरा किती गडद आणि ठरवलेली आहे आणि किती अन्यायकारक असू शकते, जरी ती एकत्रतेसाठी असलेल्या प्रसंगी घडत असली तरी.

माझं असं मानणं आहे की, यामध्ये अधिक जागरूकतेमुळे बदल होऊ शकतात, विशेषतः जेव्हा लोक या जुन्या परंपरांचा प्रश्न विचारू लागतील. आदर, दयाळूपणा आणि समजून घेणं हंणजे नेहमीच पहिले येणं पाहिजे. आशा आहे की, काळाच्या ओघात, या विचारांना लोकांच्या मनात ठामपणे रुजवता येईल, विशेषतः ज्यांनी वेगळी दृषटिकोन स्वीकारले आहेत. छोट्या कृतींमुळे आणि खुल्या संवादाने पाळीसारख्या नैसर्गिक विषयावर विचारांचा खरा बदल घडवता येईल.`}],AndhraPradesh:[{name:"Celebration Amidst Tension",age:18,content:`माझी पहिली मासिक पाळी 7 व्या इयत्तेत आली. मला ते अगदी स्पष्टपणे आठवते - एक रविवार सकाळी. मी उठले होते आणि मला रक्ताचा डाग दिसला. मी थोडी तणावात होते, कारण मला पाळी काय असते हे माहित नव्हते. मी आईला सांगितले की मी आजारी आहे, पण ती मला शांत केली आणि आरामदायक वाटण्यास मदत केली.

आमच्या राज्यात, हिंदू परंपरेनुसार मुलीच्या पहिल्या मासिक पाळीला एक विशेष सोहळा आयोजित केला जातो. एक फंक्शन केले जाते, आणि नातेवाईक जमतात आणि ते उत्सव साजरे करतात. विविध विधी केले जातात, जसे की चेहऱ्यावर हळद लावणे आणि संध्याकाळी आरती करणे. प्रत्येक सकाळी, माझी आजी मला चणाडाळाने अंघोळ घालायची, पौष्टिक आहार दिला जात असे आणि माझ्यासाठी एक वेगळं गादी ठेवली जात होती.

8 व्या इयत्तेत एक घटक माझ्या मनात ठरलेला आहे. माझ्या मासिक पाळी नियमितपणे येत नव्हत्या, आणि एकदा सुट्टीच्या दरम्यान अचानक पाळी आली. मला त्याबद्दल असुरक्षित वाटले आणि मी रडले, कारण मला काळजी होती की गंध किंवा धक्का लागेल आणि माझ्या वर्गमित्रांना काय वाटेल. नंतर, माझे वडील मला शाळेतून आणायला आले, आणि मी त्यांचे आभारी आहे कारण त्यांनी मला शांत केलं. त्यांनी मला समजावलं की पाळी ही प्रत्येक स्त्रीचा नैतिक अनुभव आहे आणि यावर लाज वाटण्याचं काहीही कारण नाही.

पाळीमुळे माझ्या दैनंदिन क्रियाकलापांवर फारसा परिणाम होत नाही, पण मला पाळी दरम्यान क्रॅम्प्स होतात आणि अधिक झोपायचं मन करतं. माझ्या मते, पाळीबद्दलच्या दृष्टिकोनात बदल झाला आहे; लोक अधिक शिक्षित आणि समजूतदार होत आहेत. तथापि, काही ग्रामीण भागांमध्ये अजूनही ते अपवित्र मानलं जातं.`},{name:"A Positive First",age:19,content:"माझ्या घरात आणि समुदायात फारच कमी निर्बंध होते, त्यामुळे मला कोणत्याही प्रकारे अस्वस्थ किंवा मर्यादित वाटले नाही. आमच्या राज्यात, जेव्हा आपल्याला पाळी येते, तेव्हा कुटुंबे बहुतेक वेळा एक छोटासा सोहळा साजरा करतात, हे एक सकारात्मक गोष्ट म्हणून पाहतात. ही धारणा माझ्या पहिल्या अनुभवाला चांगला बनवते, त्यात कधी कधी असलेल्या कलंक किंवा गुप्ततेशिवाय. मी माझ्या दैनंदिन कार्यांचा सुरळीतपणे अभ्यास केला, आणि मला पूर्णपणे आधार आणि आरामदायक वाटत होतं."},{name:"Isolation and Acceptance",age:19,content:`मी दहावीमध्ये माझी पहिली पाळी अनुभवली, जे माझ्या सर्व सहली विद्यार्थ्यांच्या तुलनेत खूप उशिरा होतं. मला अस्वस्थतेने भरले होते आणि त्या सर्व गोष्टींचा काय अर्थ आहे याबद्दल अनिश्चिततेने मन व्यापले होते. त्या वेळी मी एका वसतिगृहात राहात होतो, आणि एक दिवस पहाटे ६ वाजता, मी रडत रडत आईला फोन केला आणि सांगितलं की मी रक्तस्त्राव करत आहे. आश्चर्याची गोष्ट म्हणजे, ती आनंदाने प्रतिसाद दिली, आणि तिने जाहीर केलं की मी अखेर पाळीला आले आणि आता मी "महिला" झाले आहे.

दुर्दैवाने, त्या वेळी माझ्या बहिणीला चिकनपॉक्स झाला होता, त्यामुळे माझ्या आईवडिलांना मला घरी घेऊन जाता येणार नव्हतं. त्याऐवजी, आम्ही माझ्या आजोबांच्या घरी गावात गेलो. तिथे राहणं एक आव्हान होतं कारण त्यांचे पाळीबद्दलचे विश्वास एका वेगळ्या पिढीचे होते. मला अस्वस्थ वाटत होतं; मला काही दिवस जमिनीवर झोपावं लागलं, जरी मी तीव्र पोटदुखीने त्रस्त होते. हे आश्चर्यकारक होतं की, कुणालाही, अगदी माझ्या आईला सुद्धा, मला स्पर्श करण्याची परवानगी नव्हती.

याव्यतिरिक्त, मला सगळ्या कामांचा जबाबदारी स्वतःच्या गाठीवर घेणं लागलं, जे माझ्यासाठी एक नवा अनुभव होता. आहाराच्या निर्बंधांचं सुद्धा तेच होतं; मला फक्त गोड पदार्थ खाण्याची परवानगी होती आणि मसालेदार पदार्थ एकदाही नाही. या परंपरांनी मला माझ्या आजोबांच्या घरी अस्वस्थ आणि परकेपणाचा अनुभव दिला, आणि माझ्या पहिल्या पाळीचा अनुभव आणखी विचित्र आणि अस्वस्थ झाला.`},{name:"Tradition of Taboos",age:18,content:"मी ऐकलं आहे की अनेक घरांमध्ये मुलींना त्यांच्या पाळीच्या वेळी स्वयंपाकघरात प्रवेश करण्याची किंवा लोणचं आणि देवाशी संबंधित वस्त्रांची गोष्टींना स्पर्श करण्याची बंदी घालली जाते. ही परंपरा अशुद्धतेच्या विश्वासाची आहे, जी काही समाजात अजूनही अस्तित्वात आहे. हे पाहून खूप वाईट वाटतं की हे रिवाज मुलींच्या नैतिक जैविक प्रक्रियेदरम्यान त्यांच्या स्वातंत्र्याला कसा मर्यादा घालतात. अशा बंदीमुळे फक्त कलंक वृद्धी होत नाही, तर मुलींच्या आत्मसन्मानावर आणि त्यांच्या कुटुंबामध्ये आपलेपणावर सुद्धा प्रभाव पडू शकतो. हे विश्वास हे दर्शवतात की पाळीबद्दल अधिक खुलेपणाने चर्चा करण्याची आणि जुन्या परंपरांपासून मुक्त होण्याची आवश्यकता आहे."},{name:"A Royal Start, Isolated Aftermath",age:19,content:`आंध्र प्रदेशात, पाळी सुरू होणे हे विशेष आणि उत्सव म्हणून साजरे केले जाते, विशेषतः पहिले पाळी. हे एक उत्सव म्हणून मानले जाते आणि अनेक रिवाज आहेत जे त्याला एक लक्षात राहणारा प्रसंग बनवतात.

जेव्हा मुलीला तिची पहिली पाळी येते, तेव्हा तिला तिच्या घरात एक शाही पाहुण्या म्हणून वागवले जाते. तीन दिवसांपर्यंत कोणालाही तिला स्पर्श करण्याची परवानगी नसते, आणि तिला एक खास जागा दिली जाते, सामान्यतः तिचं स्वतःचं खोली किंवा एक निर्धारित क्षेत्र. तिच्या सर्व दैनंदिन कार्यांमध्ये, खाणं आणि झोपणे, परंपरेनुसार स्वतंत्रपणे केले जाते. चौथ्या दिवशी, तिची आजी आणि आई तिला एक सांस्कृतिक आंघोळ घालतात. कुटुंबातील सदस्य आणि नातेवाईक एकत्र येऊन हा क्षण साजरा करतात, ज्याला एक जीवनाच्या महत्त्वपूर्ण टप्प्याच्या रूपात ओळखले जाते. हे एक असे क्षण असते जेव्हा पालक समजतात की त्यांची मुलगी प्रौढ होत आहे, आणि हा उत्सव स्त्रीत्वात होणारा संक्रमण दर्शवतो.

पण पहिल्या पाळीच्या उत्सवाच्या नंतर, पुढील पाळ्यांना एक वेगळी, खूपच कडक परंपरा पाळावी लागते. त्या वेळेस तिला वेगळे ठेवले जाते. तिला घरात एक निश्चित क्षेत्र दिले जाते जिथे ती राहते, आणि ती सामान्यत: कुटुंबाच्या इतर सदस्यांपासून वेगळी ठेवली जाते. तिचा पलंग देखील वेगळा असतो, आणि कोणालाही त्याला स्पर्श करण्याची परवानगी नसते. ही वेगळेपणाची भावना विशेषतः विचित्र वाटू शकते, जणू तिला सामान्य कुटुंबातील गतिव्यवहारांपासून वेगळं केलं जातंय. अनेक घरांमध्ये, या नियमांच्या अंतर्गत दुसऱ्या कोणालाही तिला स्पर्श करण्याची परवानगी नसते. जर एखाद्याने तिला चुकून स्पर्श केल्यास, त्याला एक धार्मिक शुद्धीकरण प्रक्रियेपासून जावे लागते, ज्यामध्ये हळदीच्या पाण्याचा उपयोग केला जातो, जे खूप शुद्ध मानले जाते.

ही वेगळी राहण्याची भावना एकटी आणि आरामदायक नसलेली असू शकते, विशेषतः पाळीच्या शारीरिक वेदना आणि भावनिक बदलांच्या वेळी. जरी पहिली पाळी उत्सवासारखी असली तरी, प्रत्येक पुढील पाळी हा बहुधा वगळणी आणि बंदीच्या वेळा असू शकतात. तिच्या जेवणाचे व्यवस्थापन देखील बदलते, आणि फक्त तिच्यासाठी वापरलेली वेगळी भांडी ठेवली जातात. तिला ही स्वतःला धुणं आवश्यक असतं, आणि चौथ्या दिवशी, हळदीचे पावडर तिच्यावर एक शुद्धीकरण विधी म्हणून टाकले जाते.

ही परंपरा, जे पिढ्यान्पिढ्या जात आहे, ती विकसित झाली आहे, पण तिची मुळे संस्कृतीच्या शुद्धतेबद्दलच्या विश्वासाशी खोलपणे संबंधित आहेत. प्राचीन काळी, रिवाज अजून कडक होते. पाळीच्या वेळी, एका स्त्रीला मोठ्या कुटुंबातील सदस्यांनाही त्यांच्या जेवणाची वेळ पहाण्याची परवानगी नसती, आणि तिला एक साधा आसन दिला जात असे. जरी काही प्रथांमध्ये वेळोवेळी सौम्य बदल झाले असले तरी, ही अलगावाची वेळ अजूनही आहे, जी अनेक स्त्रियांसाठी एक आव्हानात्मक अनुभव बनवते.

ही सांस्कृतिक परंपरा भावना आणि विचारांची एक गुंतागुंतीची मिक्स आहे. जरी सुरुवातीचा उत्सव आनंददायक असतो, तरी तो सततचा वेगळेपणाचा अनुभव त्याचे स्वतःचे संघर्ष आणतो. या परंपरेचा उद्देश जीवनाच्या एका महत्त्वपूर्ण टप्प्याला मान्यता देणे आहे, पण तो शुद्धतेच्या दृढ विश्वासाची देखील चित्रण करतो, जो कधी कधी कठीण वाटू शकतो, विशेषतः जेव्हा तो कुटुंबापासून आणि रोजच्या जीवनापासून वेगळेपणाचा अनुभव देतो.`}],WestBengal:[{name:"From Fear To Awareness",age:20,content:`माझ्या पहिल्या पिरियड्सचा अनुभव
माझा पहिला पिरियड थोडासा आश्चर्यकारक आणि थोडासा भीतीसारखा होता कारण मला पूर्णपणे समजलं नव्हतं की काय चाललं आहे. मी पिरियड्सबद्दल ऐकले होते, पण प्रत्यक्षात ते अनुभवणे वेगळं होतं. मला असं वाटलं की काही आरोग्यविषयक समस्या आहे, म्हणून मी सुरुवातीला आई-वडिलांना सांगितलं नाही. पण दुसऱ्या महिन्याला, माझ्या आजीने लक्षात घेतलं आणि तिथूनच मला याबद्दल अधिक माहिती मिळाली. त्यानंतर, हे हँडल करायला खूप सोप्पं झालं.

चर्चा आणि आरामदायकता
आता, मी जवळच्या मित्रांशी आणि कुटुंबासोबत याबद्दल आरामात बोलते. लोक आता अधिक खुले होऊ लागले आहेत, पण काही प्रसंगांत मी अजूनही जरा काळजी घेत असेन.

संस्कृतीतील परंपरा
माझ्या संस्कृतीत, पिरियड्सबद्दल काही विशिष्ट विश्वास आणि प्रथा आहेत, जसे की प्रार्थनेच्या ठिकाणापासून दूर राहणे आणि कधी कधी स्वयंपाकघरापासूनही. पूर्वी, मुलींना पिरियड्स दरम्यान वेगळ्या खोलीत राहायला लागायचं. पण आता, लोक ह्या गोष्टींमध्ये कठोर नाहीत, आणि अनेक लोक ह्या परंपरेपासून दूर जात आहेत.

प्रतिक्रिया आणि बदल
मी असं मानते की या बाबतीत मते मिश्रित आहेत. एका बाजूने, काही प्रथा आपल्याला पिरियड्स दरम्यान वेगळं ठरवतात, जे नकारात्मक वाटू शकतं. पण आता, लोक पिरियड्स हा एक नैतिक प्रक्रिया आहे आणि याबद्दल बोलण्याची जागरूकता वाढली आहे. हळूहळू, यावर सकारात्मक बदल होत आहे. हो, शालेय जीवनात मला कधी कधी थोडं लाज वाटलं आहे, खासकरून लहानपणी.

गहिऱ्या समजुतीचे अभाव
पिरियड्सला "अशुद्ध" किंवा "कचरा" समजले जातात अशी एक सामान्य समज आहे. तसेच, काही लोकं मानतात की मुलींनी पिरियड्सबद्दल खुलेपणाने बोलू नये, जे खरे नाही. पिरियड्स नैतिक आहे आणि याबद्दल बोलल्याने आपल्याला ते अधिक चांगल्या प्रकारे समजण्यास मदत होईल.

शाळेतील शिक्षण
माझ्या शाळेतील शिक्षण थोडक्यात आणि वैज्ञानिक होतं. माझ्या आईने मला त्याचे दररोज व्यवस्थापन कसे करावे याबद्दल अधिक स्पष्टपणे सांगितले.

ऑनलाइन संसाधने
त्या वेळी, मी ऑनलाइन किंवा पुस्तकांमध्ये शोध घेण्याचा विचार केला नाही, पण माझ्या बायोलॉजीच्या पाठ्यपुस्तकाने खूप मदत केली. आजकाल, पिरियड्सची माहिती देणारी बरेच पुस्तके आणि वेबसाइट्स उपलब्ध आहेत. याशिवाय, सोशल मीडिया प्लॅटफॉर्म्स देखील या विषयावर उपयोगी माहिती प्रदान करतात.

मित्रांची आणि कुटुंबाची मदत
मित्र किंवा कुटुंबाने आपल्याला असंवेदनशील वाटू न देणे, जेव्हा आपल्याला आराम करायचा असतो किंवा मदतीची आवश्यकता असते. समजून घेणे आणि निराश न होणे खूप महत्त्वाचे आहे.

शब्दांचा प्रभाव
हो, "ती त्या महिना/समयात आहे", "ती मूड स्विंग करत आहे", किंवा "ती पिच आहे" अशा शब्दांऐवजी "पिरियड" शब्द सरळ वापरणे अधिक सहाजिक आहे आणि यामुळे ह्या गोष्टीला सामान्य बनवता येईल.

दैनंदिन जीवनावर परिणाम
कधी कधी, पिरियड्स दैनंदिन जीवनाला कठीण करतात—जसे की दुखणं, जास्त रक्तस्त्राव किंवा अस्वस्थता, ज्यामुळे घरकाम किंवा शाळा/कॉलेज सारख्या कामात अडचणी येतात.

समारंभ किंवा सामाजिक कार्यक्रमांना हजेरी न देणे
हो, कधी कधी दुखण्यामुळे किंवा पिरियड्समुळे काही सामाजिक कार्यक्रम किंवा क्रियाकलाप चुकवले आहेत.

दृषटिकोनातील बदल
हो, विशेषतः शहरांमध्ये दृषटिकोन बदलत आहे. शाळा, स्वयंसेवी संस्था आणि काही लेख लोकांना शिक्षित करत आहेत, आणि मीडियाद्वारे पिरियड्सला सामान्य बनवले जात आहे. पण अजूनही खूप काही करणे बाकी आहे, विशेषतः ग्रामीण भागात जिथे या विषयी अधिक माहिती नाही.

आशा
माझ्या आशेप्रमाणे, पिरियड्सला एक सामान्य जीवनाचा भाग म्हणून पाहिले जाईल, आणि यावर लज्जा न राहील. हे खूप चांगले होईल जर मुलं आणि पुरुषही याबद्दल अधिक माहिती मिळवू शकतील, त्यामुळे ते अधिक समजून आणि मदतीने आपल्याला सहकार्य करू शकतील.`}],Telangana:[{name:"Supportive Brothers ",age:18,content:"मी दोन बहिणींसोबत वाढलो आहे, आणि लहान वयातच माझ्या आईने मला मासिक पाळीबद्दल समजावून सांगितले. सुरुवातीला ते गोंधळात टाकणारे होते, पण तिने ते नैतिक जीवनाचा एक भाग आहे, असे समजावून सांगितले. आता, मी माझ्या बहिणींना पैड्स आणून किंवा त्यांना आवश्यक तेव्हा थोडी जागा देऊन मदत करतो. मला विश्वास आहे की, यामुळे मी एक चांगला भाऊ बनतो आणि कधी ना कधी, एक समजूतदार पती बनू. अगदी माझे मित्र विचारतात की मी इतका जागरूक का आहे, आणि मी त्यांना सांगतो - हे आदराबद्दल आहे."},{name:"Celebrating Womanhood Openly",age:20,content:""},{name:"Climatic Shifts and Cycles",age:20,content:`भारताच्या दक्षिण भागातून आलेली असल्यामुळे मला वेगळ्या हवामानाची सवय होती आणि माझे मासिक पाळीचे चक्र सामान्यतः नियमित होते. पण जेव्हा मी उत्तर भारतातल्या हॉस्टेलमध्ये राहायला गेले, तेव्हा सगळं बदललं. अचानक तापमानात झालेला बदल, अनोळखी अन्न आणि नवीन वातावरण यामुळे माझ्या शरीराचा समतोल बिघडला.

थंड हवामान आणि वेगळ्या आहारशैलीशी जुळवून घेणं माझ्यासाठी कठीण झालं, त्यामुळे मासिक पाळी अनियमित झाली. मला शारीरिक आणि मानसिक दोन्ही प्रकारे जुळवून घेण्यात खूप अडचण आली. दिनक्रमात झालेला बदल आणि नवीन आयुष्याचा ताण यामुळे मला थकवा जाणवू लागला. हा बदल खूप कठीण होता, आणि मी पुन्हा समतोल मिळवण्यासाठी आणि या सगळ्याशी जुळवून घेण्यासाठी मार्ग शोधावे लागले.`}],Assam:[{name:"Bridging Tradition and Education",age:19,content:`मी माझ्या पहिल्या मासिक पाळीचा अनुभव घेतला तेव्हा मी अकरा वर्षांची होते आणि सर्व स्त्रियांप्रमाणेच, तो क्षण माझ्या आयुष्यात खूप महत्त्वाचा होता. कारण मी याबाबतीत पूर्णपणे नवखी होते, त्यामुळे मला खूप भीती वाटली आणि मी ताबडतोब आईला सांगितलं. आईने मला शांत केलं आणि समजावून सांगितलं की हे सर्व महिलांना येणारंच असतं, एक नैसर्गिक प्रक्रिया आहे. तिच्या समजूतदारपणामुळे मला धैर्य मिळालं आणि आयुष्याच्या या नव्या टप्प्याला सामोरं जाण्यासाठी मी तयार झाले.

आमच्या राज्यात मासिक पाळीविषयी एक वेगळी परंपरा आहे. जेव्हा एखाद्या मुलीला पहिल्यांदा पाळी येते, तेव्हा तिच्या सन्मानार्थ मोठ्या थाटात समारंभ होतो. पाहुण्यांना आमंत्रित केलं जातं, ते तिच्यावर आशीर्वादाचा वर्षाव करतात आणि तिला नवीन कपडे, दागिने दिले जातात. तिला आमच्या पारंपरिक ‘मेखेला चादोर’ या पोशाखात सजवलं जातं आणि एका केळीच्या झाडाशी तिचं लग्न लावलं जातं — हो, केळीच्या झाडाशी!

मला यामागचं कारण पूर्णपणे माहिती नाही, पण ऐकायला मिळालं आहे की हे तिच्या शरीरात आलेल्या नवीन प्रजननशक्तीचं प्रतीक म्हणून केलं जातं. त्या दिवशीपासून काही दिवस उपवास ठेवावा लागतो आणि विश्रांतीसह योग्य काळजी घेतली जाते. मात्र एक गोष्ट अशी होती की पाळीच्या काळात मंदिरात किंवा स्वयंपाकघरात जाण्याची परवानगी नव्हती.

या विशिष्ट अटींव्यतिरिक्त, आमचं समाज पाळीबाबत बरंच खुले आहे असं मी म्हणेन. आपण मासिक पाळी असलेल्या ‘माँ कामाख्या’ देवीचीही पूजा करतो. ती देवी दर वर्षी जून महिन्यात सुमारे सहा दिवस ‘पाळी’ येते अशी समजूत आहे, आणि त्या काळात मोठं ‘अंबुबाची मेळा’ भरतो, ज्यात देशभरातून संत आणि भाविक मोठ्या संख्येने येतात. त्यामुळे काही प्रमाणात का होईना, समाजात मासिक पाळीकडे सकारात्मक दृष्टीने पाहिलं जातं असं मला वाटतं.

वैयक्तिकरित्या, मला मासिक पाळीमुळे लाज वाटण्यासारखी कोणतीच गोष्ट कधीच जाणवली नाही, यामागे माझं पाठिंबा देणारं कुटुंब आणि आमच्या शाळेत मिळालेलं योग्य शिक्षण हे कारण आहे. त्यामुळे आम्ही पाळीकडे एक नैसर्गिक प्रक्रिया म्हणून पाहायला शिकलो आणि या विषयावर बोलायला काही अडचण वाटली नाही.

पण गावांमध्ये अजूनही अशा मुली असतील ज्या याबद्दल योग्य माहितीपासून वंचित आहेत आणि त्यामुळे त्यांना अनेक अडचणींना सामोरं जावं लागतं. त्यामुळे मुलींना या विषयाची योग्य माहिती घरी आणि शाळेत मिळणं फार गरजेचं आहे. त्यांना शिकवलं पाहिजे की यामध्ये लाज वाटण्यासारखं काहीच नाही — ही एक नैसर्गिक गोष्ट आहे, अगदी श्वास घेण्याइतकीच.

स्त्रियांसाठी हायजीन प्रॉडक्ट्स सुलभ दरात उपलब्ध व्हावीत आणि केवळ मासिक पाळीमुळे कुठलीही संधी किंवा कार्यक्रम चुकवावा लागू नये यासाठी त्यांना प्रोत्साहन दिलं पाहिजे. परिस्थिती निश्चितच पूर्वीपेक्षा खूप सुधारली आहे, पण अजूनही आपल्या देशातल्या प्रत्येक मुलीला मासिक पाळीमुळे होणाऱ्या लाज किंवा मानसिक त्रासापासून मुक्त करणं हे आपलं उद्दिष्ट असायला हवं.

हे शक्य आहे — योग्य जागरूकतेने, पुरुष आणि स्त्रिया दोघांनीही हे एक नैसर्गिक शारीरिक चक्र म्हणून पाहिलं पाहिजे`}],Bihar:[{name:"Clueless and Awkward ",age:19,content:`माझं मासिक पाळीबद्दलचं कोणतंही ज्ञान नव्हतं, तोपर्यंत जेव्हा शाळेत काही मुली "त्या दिवसांबद्दल" बोलताना मी ऐकलं. मला त्यांच्याला काही विचारायचं खूप वाटलं, पण लाज वाटली, म्हणून मी गुगलवर शोधलं. आजही, कोणी माझ्यासमोर पाळीचा उल्लेख केला की मला अडचण वाटते.

माझ्या कुटुंबात कधीच यावर उघडपणे चर्चा झाली नाही, आणि अजूनही मला हे समजत नाही की याला इतकं मोठं महत्त्व का दिलं जातं. मला वाटतं, जर कुणीतरी लवकर शिकवलं असतं, तर मला हे इतकं गुंतागुंतीचं वाटलं नसतं…`}],Uttrakhand:[{name:"Unspoken but Understood",age:18,content:`माझ्या घरी मासिक पाळीविषयी फारशी चर्चा होत नाही. याबद्दल मी खरंतर फक्त आईशीच बोलते. वडिलांना कदाचित काही प्रमाणात समज आहे, कारण आई त्यांच्याशी बोलत असेल, पण मी कधीच थेट त्यांच्या समोर पाळीबद्दल बोलले नाही. असं वाटतं जणू एक अलिखित नियमच आहे — पॅड्स घरी आणताना लपवूनच ठेवायचे, किंवा किमान उघडपणे काही दाखवायचं नाही.

मंदिरात जाण्यावर काही कठोर बंदी नाही, पण पाळीच्या काळात आई मला तिथे न जाण्याचा सल्ला देते. ती लोणचं आणि तिखट पदार्थ टाळायला सांगते, जे मला थोडं विचित्र वाटतं. स्नान झाल्यावर काहीतरी खायचंच, मग ते दोन तांदळाचे दाणे असोत किंवा एक लहानसा भाकरीचा तुकडा, हे ती ठामपणे सांगते. का सांगते हे नक्की माहिती नाही, पण आमच्याकडे हा एक भागच झाला आहे.

या सगळ्या परंपरांनंतरही, पाळीबाबत तिरस्कार किंवा लाज असं काही घरात कधीच वाटलं नाही. सगळ्यांना हे नैसर्गिक आहे, याची जाणीव आहे — फक्त यावर उघडपणे बोललं जात नाही. जणू असं समजून घेतलं आहे की पाळी येते, पण त्याबद्दल फारसं बोलायचं नाही, कारण त्यावर चर्चा करणं काहीतरी "चुकतंय" असं मानलं जातं.

ही शांतता एक प्रकारची अस्वस्थता निर्माण करते — जणू पाळीला मान्यता आहे, पण ती अजूनही गुप्ततेच्या पडद्यामागे झाकलेली आहे.`}],Punjab:[{name:"Confusion and Customs",age:22,content:`माझी पाळी खूप लवकर सुरू झाली — चौथ्या इयत्तेतच — आणि मला कुणीही स्पष्टपणे सांगितलं नाही की नेमकं काय होतंय. फक्त एवढंच सांगितलं की "हे कोणासमोर बोलायचं नाही," आणि त्यामुळे मला एक अनोळखी गोष्टीबद्दल अपराधीपणाची भावना वाटायला लागली. आठवीत गेले तेव्हा, जेव्हा माझ्या मैत्रिणींनाही पाळी येऊ लागली, तेव्हाच मी या विषयावर मोकळेपणाने बोलायला लागले.

मासिक पाळीशी संबंधित काही विचित्र परंपराही आहेत. उदाहरणार्थ, पाळीच्या काळात मी कोणत्याही देवळात जाऊ शकत नाही. माझी आई तर तुळशीला पाणी घालत नाही, कारण तिला वाटतं की तुळस वाळून जाईल. मी लोणचं सुकतंय त्या जागेपासूनही दूर राहावं लागतं, कारण ते बिघडेल असं मानलं जातं.

माझ्या एका महाराष्ट्रातल्या मैत्रिणीला तर अजूनच कडक बंधनं होती — पाळीच्या काळात तिला पलंगावर झोपता येत नव्हतं, स्वयंपाकघरात जाता येत नव्हतं, आणि सण-उत्सवात भाग घेण्याचीही परवानगी नव्हती.

मात्र दुसरी एक मैत्रीण अशी होती जिला पाळी येण्याआधीच सगळी माहिती देण्यात आली होती. त्यामुळे तिचा पहिलाच अनुभव खूप सौम्य आणि समजूतदार होता. तिला काही मानसिक धक्का बसला नाही, कारण ती आधीच तयार होती.

हे सगळं पाहून एक गोष्ट प्रकर्षानं जाणवते — हे सगळं आपल्या मनात इतकं खोलवर रुजवलं जातं की कोणी थेट सांगत नसलं तरी आपणच पूजापाठापासून लांब राहतो, जणू काही चुकीचं करत आहोत. आणि हो, सार्वजनिक ठिकाणी पॅड्स लपवण्याची जी गरज सतत जाणवते, ती देखील या विषयाभोवती असलेल्या अस्वस्थतेला अधिक वाढवते.`}],UttarPradesh:[{name:"Secrecy’s Lasting Impact",age:21,content:`लहानपणापासूनच माझ्यासाठी कायम खूप त्रासदायक गोष्ट होती — माझ्या घरी पॅड्सभोवतीचं गुप्त वातावरण. मी नेहमीच सोयीसाठी बाथरूममध्ये पॅड ठेवायचे, किंवा खोलीत कुठेतरी सहज मिळेल अशा जागी ठेवलेली असायची. पण आईला ते दिसलं की ती लगेच रागवायची — "उघड ठिकाणी ठेवू नकोस!" तिला विशेष अडचण वाटायची जर वडिलांनी ते पाहिलं तर, जणू त्यांना माझ्या गरजांविषयी काहीच माहिती नाही!

माझं कधीच समजलं नाही की अशी एक गोष्ट जी माझ्या आरोग्याशी आणि रोजच्या जगण्याशी संबंधित आहे, ती लपवावी का लागते?

ही गुप्तता फक्त पॅडपुरती मर्यादित नव्हती — मासिक पाळीशी संबंधित कोणतीही गोष्ट बोलण्यावरही एक अघोषित बंदी होती. मी कधी पाळीविषयी एखादी समस्या बोलायला गेलं की सगळं खूप अवघडलेलं वाटायचं. कधी हिम्मत करून दुखणं, वेगळं काही वाटतंय असं सांगितलं तर प्रतिसाद म्हणून फक्त मौन, किंवा अस्वस्थ चेहऱ्यांची प्रतिक्रिया मिळायची — जणू हे बोलणंच चुकीचं आहे.

स्त्रीरोगतज्ज्ञाकडे जाणं तर फारच मोठा विषय होता — "ते फक्त खूपच काही गंभीर असेल तेव्हाच जायचं," अशी भावना होती.

शेवटी एक वेळ अशी आली की मला स्वतःहून पावलं उचलावी लागली. कधी माझ्या एका मैत्रीणीच्या आईला — जी स्वतः डॉक्टर होती — सल्ला विचारायचे. तर कधी गुपचुप ऑनलाइन डॉक्टर कन्सल्टेशन घेतले, कारण कोणीतरी तरी माझ्या लक्षणांना गांभीर्याने घ्यावं अशी गरज होती.

या संवादाच्या टाळाटाळीचा आणि व्यावसायिक मदतीपासून दूर ठेवण्याचा माझ्या आरोग्यावर खूप परिणाम झाला. जवळपास एक वर्ष मी एकाच फंगल इन्फेक्शनसाठी त्रास सहन करत होते — कुणीही ते गंभीरपणे घेत नव्हतं, तोपर्यंत जोपर्यंत मी स्वतः पुढे जाऊन डॉक्टरांची मदत घेतली नाही.

आता मागे वळून पाहताना जाणवतं की हे सगळं — ही गुप्तता, ही संकोचाची भावना — मला आतून खोलवर प्रभावित करून गेलं. ते क्षण शिकवून गेले की आरोग्याविषयी मोकळेपणाने बोलणं किती गरजेचं आहे — आणि ते करताना लाज वाटण्याचं काहीच कारण नसतं.`},{name:"Breaking Barriers in Uttar Pradesh",age:21,content:`उत्तर प्रदेशमध्ये हल्ली मासिक पाळीबद्दल मोकळेपणाने बोलण्याकडे एक बदल होताना दिसतो, पण तरीही सार्वजनिक ठिकाणी या विषयावर चर्चा करणे अजूनही फार दुर्मिळ आहे. बऱ्याच घरांमध्ये हा विषय अजूनही टॅबू मानला जातो — विशेषतः मुलांपासून लपवून ठेवला जातो. मला वाटतं की मुलांनाही पाळीबद्दल शिक्षण मिळणं अत्यंत गरजेचं आहे, जेणेकरून ते त्यांच्या आयतील मुली व महिलांना अधिक चांगल्या प्रकारे समजू शकतील आणि साथ देऊ शकतील.

बऱ्याच महिलांसाठी पाळी म्हणजे फक्त शारीरिक त्रास नाही, तर अनेक सामाजिक निर्बंधांचाही सामना. पाळीच्या काळात मंदिरात जाणं, लोणचं घालणं किंवा काही विशिष्ट कामात सहभागी होणं यावर बंदी घातली जाते — जरी त्या स्त्रीला शरीराने त्राण वाटत असेल तरीही. या गोष्टी आपल्यासाठीच आहेत असं सांगितलं जातं, पण खरं पाहिलं तर त्या एक प्रकारचा अकारण बंधन वाटतात. जर एखाद्या स्त्रीला विश्रांतीची गरज नसेल, तरी फक्त समाजाच्या अंधश्रद्धांमुळे तिला ती घ्यायलाच हवी, हे कितपत योग्य आहे?

दुर्दैवाने अनेक महिलांना हे नियम पाळावेच लागतात — कधी आपल्या इच्छेने, तर बरेचदा मनाविरुद्ध — आणि त्या त्रास व वेदना गुपचूप सहन करतात, न बोलता.

माझी खरी इच्छा आहे की भविष्यात मासिक पाळीकडे एक नैसर्गिक प्रक्रिया म्हणून पाहिलं जावं, आणि यावर मुक्तपणे बोलणं समाजात सामान्य गोष्ट बनावी. हे वेळ आहे हे अडथळे बाजूला सारण्याचं, आणि मासिक पाळीबद्दल मोकळेपणा आणि समजूतदारपणाचा एक नवीन संस्कार निर्माण करण्याचं.`},{name:"Temples and Taboo",age:20,content:`उत्तर प्रदेशमध्ये मोठं होत असताना मला नेहमीच जाणवलं की मासिक पाळीबद्दल अजूनही मोकळेपणाने बोललं जात नाही. माझ्यासारख्या अनेक मुलींना या काळात अनेक निर्बंधांना सामोरं जावं लागतं — विशेषतः मंदिरात जाणं किंवा पूजांमध्ये सहभागी होणं बंद केलं जातं.

माझ्या आयुष्यातील एक घटना आजही मला अगदी स्पष्ट आठवते. एकदा वृंदावनला गेले असताना, आमच्या प्रवासाच्या दुसऱ्याच दिवशी मला पाळी आली आणि त्यामुळे मी कोणत्याही मंदिरात जाऊ शकले नाही. त्या आध्यात्मिक वातावरणात सगळ्यांसोबत न जाता एकटीच राहावं लागणं खूप खटकत होतं.

याच्या उलट, मी आजवर कधीही वडिलांसमोर किंवा मोठ्या भावासमोर पाळीबद्दल काही बोलले नाही. पण मला असं वाटतं की ही जबाबदारी त्यांचीही आहे — त्यांनी असं वातावरण निर्माण करायला हवं, जिथे मी ही गोष्ट मोकळेपणाने बोलू शकेन.

मासिक पाळी ही नैसर्गिक गोष्ट आहे, आणि त्यामुळे कुणाला लाज वाटू नये, की कुणी एकटं वाटू नये. कुटुंबांनी हे बंध तोडून एक समजूतदार आणि सहानुभूतीपूर्ण वातावरण निर्माण करणं फार गरजेचं आहे — जेणेकरून प्रत्येक मुलगी स्वतःच्या शरीराशी आणि भावनांशी मोकळेपणाने जोडलेली राहू शकेल.`},{name:"Early Education, Early Acceptance",age:18,content:`Personally, I haven't faced much stigma surrounding periods because my school was quite 
open about it. They conducted awareness sessions before I experienced my first period, 
which helped normalize the conversation. This proactive approach made it easier for us to 
discuss menstruation openly and without shame. It’s encouraging to see educational 
institutions taking such steps, as it creates a more supportive environment for young girls. I 
believe that if more schools adopted similar practices, it would significantly reduce the 
stigma that many still face today.`}],Kerala:[{name:"Normalizing Periods in Friend Groups",age:20,content:`In my friend circle, periods are openly discussed. One of my close friends once 
had a bad cramp during an event, and instead of feeling weird, we all pitched 
in. I went to buy her pads without hesitation, and that moment changed how I 
see things. It’s just normal to help each other out, and I encourage my guy 
friends to be just as open-minded. .`}],Odisha:[{name:"Silent Discomfort",age:17,content:`"I never learned about menstruation until a biology lesson in class 10, and even 
then, the teacher rushed through it. At home, my sister hides her pads, and I’m 
not supposed to ask why. Once, I accidentally found one, and my parents 
scolded me for even touching it. It’s like this forbidden topic that makes 
everyone uncomfortable. I wish I knew more, but no one talks about it.". ..`}],Gujarat:[{name:"Father’s Support, Society’s Stigma",age:19,content:`Living in Gujarat, I’ve noticed that most people—especially women—still feel uncomfortable 
discussing periods with men. But my family has been an exception. My father and brother 
are incredibly supportive, and they go out of their way to make me feel cared for, especially 
during my period. It’s a blessing I’m truly grateful for. 
From my experience, I’ve seen that women of my mother’s generation aren’t at ease talking 
about periods with men. I believe it would make a big difference if they understood just how 
important it is for men to be informed about menstruation. When men are aware and 
supportive, it can create a much more understanding and comfortable environment for 
everyone. ...`},{name:"Silent Struggles, Open Conversations",age:19,content:` When I got my first period, I already knew about menstruation because I was the last girl in 
my friend group to get it. At that time, I was on a family trip, and we were at a temple. My 
period started then, but I didn’t realize it until we got back home. My mother helped me 
through the experience. 
Back in school, I didn’t feel very comfortable discussing periods, but now I can talk openly 
with family and friends. There are some cultural beliefs around menstruation—like not 
touching water sources, staying away from the kitchen and temple, and avoiding washing my 
hair or eating sour foods like pickles. These beliefs are often based on health considerations, 
and I think they can help maintain our well-being. I’m also advised not to run or play too 
much, to encourage rest during this time. 
Luckily, I don’t experience much pain, just mood swings that can be intense—one moment I 
feel angry, and the next, I'm very happy. Growing up in this society, I naturally adopted these 
habits and wasn’t very comfortable discussing periods, but I believe it’s not an embarrassing 
topic. It should be freely discussed. 
Menstruation doesn’t affect my daily activities much, as I don’t have severe pain, so I 
manage everything smoothly and don’t miss any opportunities. Today, we can learn about 
menstruation through social media, and there are many websites with information. Things 
are changing, and I think they’ll continue to improve in the future..`}],MadhyaPradesh:[{name:"Teaching Men, Changing Minds",age:20,content:`Although periods are still considered a taboo subject in many circles, my experience was 
different. Even before I got my first period, my mother took the time to explain everything to 
me. When the day finally came, she was incredibly supportive and helped me navigate the 
process. However, I noticed that this awareness was mostly confined to the women in my 
family. My mother explicitly asked me not to mention my period to my father, which felt 
unnecessary to me. 
Determined to change this mindset, I decided to talk to my brother about menstruation at 
an early age. To my surprise, he was very open and receptive. He didn’t express any disgust, 
which made me really happy and encouraged me to keep the conversation going. 
Yet, the notion that periods are unclean still lingers in our household, and women are not 
allowed to enter sacred places during their menstrual cycle. I believe there’s some spiritual 
reasoning behind this practice, so I don’t see it as a significant issue in our home. For us, 
these limitations are primarily related to visiting the temple. 
I’ve heard stories of women being treated very poorly during their periods in other places, 
but I have personally never faced that kind of treatment. In conclusion, I truly believe our 
society is making progress in terms of period awareness. We can contribute to this positive 
change by teaching the younger generation about menstruation and breaking the stigma 
surrounding it. .`},{name:"Hostel Stories and Home Realities",age:20,content:`Since I started my periods, I’ve never felt the burden of stigma in my home or among my 
relatives. Before coming here to study, I lived in a hostel, where I heard some friends share 
their experiences about being restricted from entering the kitchen or being kept away from 
certain things during their periods. It made me reflect on my own childhood experience 
when I had chickenpox. At that time, I remember being told to stay away from family 
members who were menstruating, as if the illness was somehow contagious. This incident 
highlighted for me how deeply ingrained these beliefs can be in some communities, but 
thankfully, I’ve been fortunate enough to grow up in an environment where such traditions 
didn’t affect me. `},{name:"Routine Rules, No Shame",age:20,content:`In my household, the customs surrounding menstruation are quite normal and similar to 
what happens in many other families. During my periods, I’m not allowed to touch anything 
in the kitchen or enter the mandir, which can feel a bit restrictive at times. On the third day, 
there’s a routine I have to follow: I wash my hair and clean everything I’ve used, like my 
blanket and sofa cover. 
Interestingly, despite these traditions, there isn’t any negative mental stigma associated with 
menstruation in my home. While there are certain rules to follow, they are more about 
adhering to customs rather than fostering feelings of shame or discomfort. It’s a part of life 
that we acknowledge without any judgment, which makes the experience a bit easier to 
navigate. `},{name:"School’s Role in Breaking Stigma",age:18,content:`From what I’ve observed, even today, talking about periods in public remains a stigma. 
People aren’t fully aware of alternatives to pads, or maybe they’re just too accustomed to 
using them to consider other options. Many schools do try to educate students about 
menstruation, but I feel there’s room for improvement in how they approach it. Often, the 
way it’s taught can unintentionally lead to awkwardness or even jokes, making it harder for 
students to take the subject seriously. If schools could create an open, respectful 
environment, it might help reduce the stigma and make students feel more comfortable 
discussing these important topics. `}],Karnataka:[{name:"City Freedom vs Village Constraints",age:19,content:`मी एका महानगरात वाढले, त्यामुळे पाळीविषयीचा तो खास लाजेचा किंवा अपमानाचा अनुभव मला फारसा जाणवला नाही — जो आपल्या देशातल्या ग्रामीण भागात अजूनही मोठ्या प्रमाणावर दिसतो. पण माझं गाव आंध्र प्रदेशात आहे, आणि तिथं गेल्यावर मला खूप वेगळं चित्र दिसलं. अजूनही तिथल्या अनेक महिलांना मुलभूत सॅनिटरी नॅपकिन्सचा सहज प्रवेश नाही, आणि मला वाटतं ही परिस्थिती खूपच कठीण असावी.

माझ्या वैयक्तिक अनुभवात पाळीबद्दल फारसा कलंक भासला नाही, पण मी पूर्णपणे जाणीव ठेवते की अनेक भागांमध्ये अजूनही मासिक पाळीला "अशुद्धतेशी" जोडून पाहिलं जातं. स्त्रियांना अशुद्ध, अपवित्र समजलं जातं — हे ऐकून खूप वाईट वाटतं.

माझा ठाम विश्वास आहे की या विषयावर मोकळेपणाने बोलणं गरजेचं आहे. जोपर्यंत आपण हे खुलेपणाने स्वीकारणार नाही, तोपर्यंत बदल होणार नाही. म्हणूनच मी स्वतः या विषयावर बोलायला तयार असते आणि अशी आशा करते की जास्तीत जास्त जागरूकतेमुळे समाजात खऱ्या अर्थाने सकारात्मक बदल घडतील.`}],TamilNadu:[{name:"Celebration with Restriction",age:20,content:` जेव्हा मी पहिल्यांदा पाळीला आले, तेव्हा ते एक विचित्र आणि नवा अनुभव होता. मी पाहिलं की माझ्या आजुबाजूच्या लोकांमध्ये आश्चर्य आणि आनंद व्यक्त केला जात होता, पण मी फक्त ते काय चाललं आहे ते समजून घेण्याचा प्रयत्न करत होतो. भावनांचा एक गोंधळ असलेला अनुभव होता. मी ह्या अनुभवाबद्दल माझ्या मित्र-परिवाराशी मोकळेपणाने बोलायला आरामदायक वाटत होतं, पण लक्षात आलं की लोक अधिक अनौपचारिक आणि सभ्य पद्धतीने याबद्दल बोलायला पसंत करतात.

माझ्या पहिल्या पाळीच्या आसपास जे सांस्कृतिक विश्वास होते, त्यावर विचार करताना मला सकारात्मक आणि नकारात्मक दोन्ही गोष्टी दिसतात. सकारात्मक बाब म्हणजे, ते एक छोटसं सणासारखं वाटलं; माझ्या नातेवाईकांनी मला गिफ्ट्स किंवा मला आवडणारी गोष्टी दिली. परंतु नकारात्मक बाब म्हणजे, काही निर्बंध होते, जसे की मंदिरात जाणं किंवा पाळीच्या काळात प्रार्थना करणं, जे या आधुनिक काळात हास्यास्पद वाटतं.

जर कधी चुकून दिसलेली डाग झाली असती, तर कदाचित मी लाज वाटली असती कारण आपल्या समाजात अशा गोष्टींवर कलंक आहे. सार्वजनिक ठिकाणी "विचित्र क्षण" असण्याचा विचार निश्चितपणे अस्वस्थता निर्माण करू शकतो. खरंतर, मी स्वतः मासिक पाळीचं काय आणि कसं होतं, हे तेव्हा अनुभवण्याआधी खूप कमी समजत होते. मी शिकले की हे कसं आणि का घडतं, आणि मला असं वाटतं की मासिक पाळीबद्दल शिक्षण देणं मुलींसाठी अत्यंत महत्त्वाचं आहे. शाळा या गोष्टींचा समज देण्यासाठी माहितीपूर्ण कार्यक्रम आयोजित करू शकतात, ज्यामुळे मुलींना त्या प्रारंभिक टप्प्यात अधिक आरामदायकपणे मार्गदर्शन मिळू शकेल.

एकमेकांचा विचार करणं आणि या वेळेस समर्थन देणं महत्त्वाचं आहे, कारण छोटे कृतींचे प्रेम आणि सहकार्य मोठं फरक आणू शकतात. पण मला असं लक्षात आलं की काही वेळा पुरुष मासिक पाळीला एक फरक दाखवण्याचा मार्ग म्हणून वापरतात, आणि ते खूप निराशाजनक आहे.

मूड स्विंग्स, डोकेदुखी किंवा पोटदुखी यांसारख्या समस्यांनी रोजचं जीवन अधिक कठीण होऊ शकतं. जरी मी काही संधी गमावल्या असतील, तरी त्या क्षणांना मला सध्या स्पष्टपणे आठवत नाही.

एकंदरीत, माझं मासिक पाळीबद्दलचं perception तेव्हापासून अजूनही तसंच आहे. मी खरोखर विश्वास ठेवते की आपल्या समाजाची मासिक पाळीविषयीची दृष्टी सुधारायला हवी, आणि सर्व वयोगटातील लोकांना हे एक नैसर्गिक जीवनाचा भाग म्हणून स्वीकारावं, लिंगाची पर्वाह न करता.`}],Delhi:[{name:"Periods and Policy Change",age:27,content:`भारतामध्ये आजही मासिक पाळीला कलंकाशी जोडले जाते, विशेषतः अशा लोकांमध्ये जे औपचारिक शिक्षण घेतलेले नाहीत. अनेक लोकांना अजूनही असं वाटतं की मासिक पाळीच्या वेळी धार्मिक स्थळात जाणं चुकीचं आहे — हे दृष्टिकोन दिल्लीसारख्या शहरांमध्ये देखील सामान्य आहे. तरीसुद्धा, काही प्रगती आहे; जेव्हा मुली प्रौढ होतात, तेव्हा काही शाळांमध्ये जागरूकता वाढवण्यासाठी कार्यशाळा आयोजित केल्या जातात.

परंतु, या जागरूकतेचा पोहोच मर्यादित आहे. निरक्षर समुदायांना महत्वाची माहिती मिळत नाही आणि या विषयावर सहानुभूती अजूनही धोरणात्मक पातळीवर कमी आहे. मला असं वाटतं की संस्थांनी महिलांसाठी आणि मुलींसाठी तीन दिवसांची सुट्टी धोरण लागू करायला हवी, जे शाळेत शिकणाऱ्या किंवा काम करणाऱ्या असतील, त्या रोजंदारी काम करणाऱ्या किंवा घरकाम करणाऱ्या महिलांसाठीही. IITJ प्रमाणे, हा प्रकारची समर्थन महिला आणि मुलींना वास्तविक फरक करू शकतो, त्यांना या वेळेस सन्मान आणि आराम देण्याच्या दृष्टीने.

हे माझे विचार आहेत, पण मला असं वाटतं की बदल आवश्यक आहे.`},{name:"Family Mentality and Menstrual Shame",age:19,content:`मासिक पाळीच्या कलंकेचा प्रश्न प्रामुख्याने कुटुंबाच्या प्रभाव आणि जुनी मानसिकता यांच्यापासून उगम घेतो. माझ्या अनुभवात, जरी माझ्या शाळेने मासिक पाळीच्या सायकलविषयी मोकळेपणाने बोलण्यास प्रोत्साहित करण्यासाठी जागरूकता कार्यक्रम आणि प्रेरणादायक चर्चांसारख्या प्रयत्नांची केले, तरी लहानपणी शिकलेली जुनी शिकवण अशा गोष्टींविषयी मोकळेपणाने बोलण्यास अडचणींना सामोरे जाण्याचं कारण ठरली. हा अस्वस्थतेचा अनुभव इतका खोलवर रुजलेला आहे की अनेक मुली एकमेकांमध्येही मासिक पाळीबद्दल चर्चा करण्यास संकोच करतात.

मासिक पाळीच्या वेदना किंवा अस्वस्थतेसाठी अधिकृत सुट्टी घेणं ही एक कठीण गोष्ट ठरते, कारण आम्ही आमचे कारण कसे सांगू, हे स्पष्टपणे सांगण्याची लाज वाटते. अनेक पुरुष मासिक पाळीच्या जटिलतेपासून अजूनही अपरिचित असतात; त्यांना फक्त एवढंच माहिती असतं की ती प्रत्येक महिन्यात येते आणि रक्तस्राव होतो. ते पाळीच्या वेदना आणि मानसिक ताणाची समज ठेवत नाहीत, ज्यामुळे सहानुभूती किंवा समर्थनाची कमतरता होते.

माझ्या मते, पुरुष आणि महिलांनी मासिक पाळी आणि तिच्या आव्हानांविषयी शिक्षित होणं अत्यंत महत्त्वाचं आहे. याला लज्जा आणि कलंकांशिवाय जीवनाचा नैसर्गिक भाग मानलं पाहिजे. मासिक रक्तस्रावावर खुलेपणाने चर्चा करण्याची प्रक्रिया सामान्य केली पाहिजे, आणि पुरुषांना सहानुभूती आणि समजून घेण्यास प्रोत्साहित केलं पाहिजे. जेव्हा आपल्याला या समस्यांवर मोकळेपणाने बोलता येईल, तेव्हा आपल्याला कलंकेचा चक्र तोडता येईल आणि सगळ्यांसाठी एक अधिक सहकार्यपूर्ण समुदाय निर्माण करता येईल.`}]},te:{Rajasthan:[{name:"A Scarf and Strength",age:20,content:`నేను మొదటి సారి పీరియడ్స్ అనుభవించినప్పుడు, నేను భయపడి, ఈ విషయం గురించి ఏమీ తెలియకపోయాను. కానీ నేను నా తల్లి వద్దకు వెళ్లి, ఆమె నాకు సహాయం చేసింది. నేను నా సమీప మహిళా స్నేహితులు మరియు కుటుంబ సభ్యులతో ఈ విషయం సులభంగా మాట్లాడగలను, కానీ పురుషుల గురించి మాట్లాడేటప్పుడు, నేను మౌనంగా ఉంటాను.

నా కుటుంబంలో ఎక్కువగా నియమాలు ఉన్నట్లు అనిపించదు, కానీ కొన్ని నియమాలు ఉన్నాయి - ఉదాహరణకు, పూజ చేసేటప్పుడు పక్కనే ఉండటం అవసరం. మన సంస్కృతిలో పీరియడ్స్‌ను అపవిత్రంగా భావిస్తారు, కానీ నేను భావిస్తున్నాను ఈ ఆలోచన తప్పు - పీరియడ్స్ కారణంగా ఎవరికీ అపవిత్రత ఉండదు మరియు పూజకు కూడా అడ్డంకి ఏర్పడదు.

పీరియడ్స్ గురించి మాట్లాడాల్సినప్పుడు ఎప్పుడూ ఆశయం మరియు సంకోచం అనిపిస్తుంది. ఎయితవీ, ఎనిమిదవ తరగతిలో పీరియడ్స్ వచ్చాయి, గత పీరియడ్స్ నుండి కేవలం 14 రోజులు మాత్రమే అయ్యింది. నేను సిద్ధంగా లేదు, ప్యాడ్ కూడా తీసుకురాలేదు. నేను భయపడ్డాను, పైగా నేను కొత్త పాఠశాలలో ఉన్నాను మరియు ఎవరూ స్నేహితులు కూడా లేవు. నేను నా దుపట్టాను ఉపయోగించాను, కానీ ప్రవాహం చాలా వేగంగా ఉండింది, దుస్తులు కూడా కలిసిపోయాయి, చాలా ఇబ్బందిగా అనిపించింది.

మన సమాజంలో పీరియడ్స్ గురించి మాట్లాడటం ఒక లజ్జగా భావించబడుతుంది మరియు ఈ ఆలోచన నాకు కూడా ప్రభావితం చేసింది. కానీ నేను కోరుకుంటున్నాను, నా కుటుంబం ఉండగానే, పీరియడ్స్ ఒక సాధారణ విషయంగా మారాలని. ఫోన్ మరియు టీవీ ద్వారా సమాచారం పొందవచ్చు, కానీ కుటుంబంలో మరియు పాఠశాలలో దీనిపై చర్చ చేయడం మరింత ఉపయోగకరంగా ఉంటుంది.

పాఠశాలలో పీరియడ్స్ పై విద్య ఉండాలి, తద్వారా అబ్బాయిలు మరియు అమ్మాయిలు ఇద్దరూ అర్థం చేసుకోవచ్చు. అబ్బాయిలు కూడా అమ్మాయిలకు సహాయం చేయగలుగుతారు. 12 సంవత్సరాల వయస్సు వరకు నేర్పడం మంచి ఆలోచన.

మీ కుటుంబం మరియు స్నేహితులు మద్దతు ఇస్తే, పీరియడ్స్ ను నిర్వహించడం సులభంగా ఉంటుంది. పీరియడ్స్ నా చదువుపై మరియు రోజూ చేసే పనులపై ప్రభావం చూపిస్తాయి. పలు సార్లు నాకు కోపం వస్తుంది, కేవలం అమ్మాయిలేనంటే ఎందుకు ఈ నొప్పి మరియు ఇబ్బందులు అనుభవించాలి. పరీక్షల సమయంలో పీరియడ్స్ వస్తే, మైండ్‌ను సజావుగా పెట్టి చదవడం కష్టం, మార్కులు కూడా తగ్గిపోతాయి.

పారिवारిక ఉత్సవాలు మరియు ప్రయాణాలు కూడా ప్రవాహం మరియు పొట్ట నొప్పి కారణంగా కష్టమవుతాయి, కానీ ఇప్పటి వరకు నేను ఎలాంటి పెద్ద అవకాశం కోల్పోలేదు. కానీ ప్రతిసారీ నేను ఆలోచిస్తూ ఉంటాను, వచ్చే పీరియడ్స్ ఎప్పుడు ప్రారంభమవుతాయో.

మునుపటి కాలంలో అమ్మాయిలను పీరియడ్స్ సమయంలో ఒక గదిలో బంధించి పెట్టేవారు, ఇది నాకు తప్పు అనిపిస్తుంది, కానీ కొంత విశ్రాంతి పొందేవారు. ఇప్పుడు విషయాలు మారిపోతున్నాయి, కానీ ఇంకా చాలా మార్పులు అవసరం. ఇంకా అనేకసార్లు ఏమీ చెప్పకుండానే, నొప్పిని దాచుకొని అన్ని పనులను చేయాలి.

నా జీవితంలో పీరియడ్స్ గురించి ఆలోచన చాలా ఎక్కువగా మారలేదు. ఇప్పుడు దుస్తులకంటే ప్యాడ్ ఉపయోగిస్తున్నాను, కానీ ఇంకా ఈ విషయం మీద చాలా మాట్లాడడం తక్కువ. నేను ఆశిస్తున్నాను భవిష్యత్తులో ప్రతిది మారాలని.`},{name:"Cloth, Courage, and Change",age:19,content:`నేను పీరియడ్స్ అనుభవించినప్పుడు, నేను 16 సంవత్సరాల వయస్సులో ఉన్నాను మరియు ఈ విషయాన్ని నాకు ఏమీ తెలియదు. నా పెద్ద సోదరి నాకు చెప్పింది, "కపెడు ఉపయోగించు మరియు ఎవరికి ఎప్పటికీ చెప్పకు." నేను కొ somehow దినం గడిపాను, కానీ అప్పుడు నేను ఆలోచిస్తూ ఉండాను, ఇది ఏమిటి మరియు చాలా ఇబ్బందిగా అనిపించింది.

నేను ఆలోచించాను, ఈ నొప్పితో నేను ఎలా జీవించగలుగుతాను. క్రమంగా నేను ఈ పరిస్థితిని ఎదుర్కొనడం నేర్చుకున్నాను. ఇప్పుడు ఎక్కువ నియమాలు లేవు, కానీ నా తల్లి అనారోగ్యంగా ఉన్నప్పుడు, పీరియడ్స్ సమయంలో మొత్తం పని మనం తప్పకుండా చేయాలి. సాధారణంగా నేను ఆహారం తయారు చేస్తాను, కానీ ఇంకా మరిన్ని పనులు ఉన్నవి - ఉదాహరణకు నీళ్లు తాకడం నిషేధం మరియు వంటగదిలో కూడా వెళ్ళడం నిషేధం.

ఇప్పుడు నా దగ్గర రెండు పిల్లలు ఉన్నారు, మరియు నా కూతురికి పీరియడ్స్ గురించి అన్ని విషయాలు తెలుసు. ఆమె ఇంకా పీరియడ్స్ అనుభవించలేదు, కానీ ఫోన్ మరియు టీవీ ద్వారా నేర్చుకున్నది. నేను ఆమెతో ఈ విషయం మాట్లాడాలని కోరుకుంటున్నాను, కానీ నాకు అతిగా బాధగా అనిపిస్తుంది. నేను ఆలోచిస్తున్నాను, ఆమెకు మొదటి సారి పీరియడ్స్ వస్తే, తప్పకుండా చెప్పాలని.

నేను ఎవరితో ఈ విషయంపై మాట్లాడటానికి ఓడిపోతాను, కానీ నా అభిప్రాయం ఏమిటంటే ఈ విషయంపై ఎలాంటి ఆపత్కాలం ఉండకూడదు. లజ్జపడే అవసరం లేదు - ఇది సహజమైన విషయం మరియు అనేక వ్యాధుల నుండి రక్షణ కలిగిస్తుంది.`},{name:"Breaking the Silence with Support",age:33,content:`నేను 15 సంవత్సరాల వయస్సులో మొదటిసారి పీరియడ్స్ అనుభవించాను. నా పెద్ద సోదరి నాకు ముందుగా ఈ విషయాన్ని చెప్పారు, కానీ మొదటి రోజు చాలా టెన్షన్ మరియు అసహనత అనిపించింది. కాలంతో, సోదరి సహాయం చేయడంతో అన్నీ సులభంగా అయ్యాయి. ఆ సమయంలో ప్యాడ్స్ సులభంగా అందుబాటులో ఉండవు, కాబట్టి మత్తు ఉపయోగించాల్సి వచ్చింది.

ఎంతవరకు నియమాలు మరియు ఆంక్షలు వస్తే, మనందరం ఒకే రీతిలో నియమాలను పాటించేవాళ్ళం – ఉదాహరణకు నీళ్లు తాకడం, వంట చేయడం, మరియు ఆర్తి చేయడం. కానీ ఎవరూ లేకపోతే, చేయాల్సి ఉంటుంది.

నేను నా స్నేహితులతో మరియు కుటుంబంతో ఈ విషయంపై తేలికగా మాట్లాడలేకపోయాను, కానీ నా భర్తతో बिना ఇబ్బంది లేకుండా మాట్లాడతాను. ఆయన నాకు పీరియడ్స్ సమయంలో సహాయం చేస్తారు.

ఇప్పుడు పిల్లలు సోషల్ మీడియా ద్వారా చాలా విషయాలు నేర్చుకుంటారు, కానీ మన సమయాల్లో అలాంటి సౌకర్యాలు లేవు. నాకు ఎలాంటి పిల్లలు లేరు, కానీ వాండి ఉంటే, నా కుటుంబం ఈ విషయంపై సైతం తెరాసాగా మాట్లాడుతుంది.

మొదటి పీరియడ్స్ నుండి ఇప్పటివరకు చాలా మార్పులు జరిగాయి మరియు నేను భావిస్తున్నాను, రాబోయే కాలంలో మరింత మార్పులు త్వరగా జరుగుతాయి.`}],Maharashtra:[{name:"Whispers with My Brother",age:18,content:`మొదటి రోజు నేను పీరియడ్ అవుతున్నప్పుడు, నేను ఇంట్లో ఒంటరిగా ఉన్నాను మరియు నాకు ఏం జరుగుతుందో అర్థం కాలేదు. కొంత భయం కూడా అనిపించింది, కానీ పీరియడ్స్ గురించి నేను కొంచెం ఎక్కడో విన్నాను. మొత్తం రోజు తల్లి వచ్చేదాకా ఎదురుచూసాను, ఆమె రాగానే ఆమె నాకు సహాయం చేసింది మరియు వివరించింది.

నేను మా ఇంట్లోని మహిళలతో సులభంగా మాట్లాడగలను. నా అన్నతో నేను ఈ విషయంపై సంకేతాలతో మాట్లాడతాను, "పీరియడ్" అని చెప్పకుండా. కానీ నాన్నతో ఈ విషయం గురించి నేను ఎలాంటి మాటలు చెప్పలేను.

పీరియడ్ సమయంలో పూజలు చేయలేను, ఆహారం తాకడం అంగీకరించబడదు, దేవాలయాలకు దూరంగా ఉండాలి, మరియు ఇంకా చాలా వంకలూ ఉన్నాయి. కొన్నిసార్లు నాకు అలా అనిపిస్తుంది, నేను కోవిడ్ రోగిగా పరిగణించబడ్డాను, అందరూ నన్ను వేరు పెట్టారు.

మన సమాజంలో పీరియడ్స్ ను అపవిత్రతతో కలిపి చూస్తారు – যেন మహిళ గందరగోళంలో పడి ఉండి వంటివారు. కానీ నేను పీరియడ్స్ కారణంగా ఎప్పుడూ శర్మగా అనిపించలేదు – నా స్నేహితులు చాలా సహాయపడే వారు మరియు వివేకవంతులు.

నేను భావిస్తున్నాను, పీరియడ్స్ గురించి చాలా తప్పుదృష్టులు ఉన్నాయి – ఉదాహరణకు పీరియడ్ ఉన్న అమ్మాయి ఆహారాన్ని తినితే అది నాశనం అవుతుంది. 10వ మరియు 11వ తరగతుల్లో ఈ విషయం గురించి బాగా నేర్చుకున్నాను, ఈ ప్రక్రియ ద్వారా నాకు మరియు నా పురుష స్నేహితులకు చాలా అర్థం వచ్చిందీ.

భావనాత్మక మద్దతు – ఇది పీరియడ్స్ సమయంలో అత్యంత అవసరమైన విషయం. ఒక స్నేహితుడు లేదా కుటుంబ సభ్యుడు సహాయం చేస్తే, నొప్పిని ఎదుర్కోవడం చాలా సులభంగా ఉంటుంది. వేడి నీటి బ్యాగ్ లేదా నా ఇష్టమైన వస్తువులు ఇవ్వడం మరింత బాగా ఉంటుంది.

నా పీరియడ్స్ చాలా కష్టమైనవి – ఒక వారమంతా వెన్నునొప్పి, మొత్తం శరీరంలో మంట. చాలా సార్లు తరగతిని వదిలి నొప్పితో కూర్చోవాల్సి వచ్చింది.

నేను అనేక ఆలయాలు మరియు పండుగల పర్యటనలను మిస్ చేశాను – నొప్పి మరియు సామాజిక రహస్యాల కారణంగా. కానీ ఇప్పుడు మార్పు కనిపిస్తోంది – ఎంత చదువు జరుగుతుందో, అవగాహన పెరుగుతోంది. మరింత మంది పీరియడ్స్ గురించి మాట్లాడుతున్నారు మరియు అవగాహన పెంచుతున్నారు – ఇది చాలా అవసరం.`},{name:"A Family’s Shared Responsibility",age:20,content:`నా తల్లి పీరియడ్స్ లో ఉన్నప్పుడు, ఆ ఇంట్లోని సర్వసాధారణ పనులు మేము పురుషులు నిర్వహిస్తాము. నేను వంట చేసుకుంటాను, నా అన్న గుమ్మడికొట్టు చేస్తాడు. మేము చూసుకుంటాము, తల్లికి ఏమీ చేయించకుండా చేస్తాము.

నా అక్క కూడా పీరియడ్స్ లో ఉన్నప్పుడు, మేము ఆమె పరిస్థితిని అర్థం చేసుకుంటాము. ఆమె కోపంగా లేదా కోపంగా ఉంటే, మేము ఎవరూ ఏమీ చెప్పరు, కేవలం మౌనంగా వినిపిస్తాము. నేను ఎప్పటికీ వాగ్వాదం చేయను, పక్కన నిలబడీ ఆమెకి సహాయం చేయడం.

నా ప్రియురాలు లేదా స్నేహితులు ఉన్నా, నేను ఎప్పటికీ సహాయం చేయడానికి ప్రయత్నిస్తాను – చాక్లెట్లు తీసుకురావడం లేదా ఆమె కోరుకున్నది చేయడం, నాకు అక్షయంగా ఉంటుంది. వేడి నీటి బ్యాగ్ ఇవ్వడం, తల నొక్కడం – నాకు చేయగలిగిన పనులు చేస్తాను. నా కోసం ఇది అన్నీ సాధారణమైన విషయాలే.`},{name:"Emotional Rollercoaster During Exams",age:20,content:`నా పీరియడ్స్ వచ్చే 15 రోజులు ముందే నా మూడ్ మారిపోతుంది. పరీక్షల సమయం అంటే ఎక్కువగా ప్రభావం పడుతుంది – చదవటానికి మనసు పెట్టుకోలేను, ఆలోచనలు కూడా గందరగోళం అవుతాయి.

ఎప్పుడూ ఇదే వింటాను – నిద్ర పోతున్నాను, అలసిపోయాను, నొప్పి ఉంది. అయినప్పటికీ, నేను నా ఉత్సాహాన్ని పెంచుకుని కష్టపడతాను, జ్ఞానం పొందడానికి చదవటం కొనసాగించాలి.

కప్పినప్పుడు ఈ అన్నిటిని ఒక చక్రంలా అనిపిస్తుంది – ఇది పునరావృతం అవుతోంది. కానీ నేను ఓడిపోవడం లేదు – ఎలాంటి పరిస్థితి వచ్చినా, నేను ఆపకుండా కొనసాగిస్తాను.`},{name:"Cycling Away the Cramps",age:19,content:`పాఠశాల రోజుల్లో ప్రతీ నెలలో చాలా నొప్పి ఉండేది. ఆ సమయంలో శారీరకంగా సక్రియంగా కూడా ఉండేలను, పైగా నగరపు వాయువు కూడా బారిన పడేది – ఆ కారణంగా బాధ ఎక్కువగా ఉండేది.

కానీ కాలేజ్‌కు వచ్చిన తర్వాత, అన్నీ మారిపోయాయి. క్రీడల్లో పాల్గొని సైకిల్ తొక్కడం ప్రారంభించాను – ఇప్పుడు నొప్పి చాలా తక్కువగా మారిపోయింది.

నేను ఇంజినీరింగ్ కాలేజీలో చదువుతున్నాను, అక్కడ నేను చాలా సార్లు ఒంటరిగా ఉన్నాను. ఈ కారణంగా నేను ఎప్పుడూ సిద్ధంగా ఉండాలి – ప్యాడ్ తో ఉండాలి. ఇప్పుడు అది అలవాటు అయిపోయింది – ఇది కేవలం నా రోజువారీ రొటీన్ అవుతుంది.`},{name:"The Cost of Dignity",age:19,content:`నా ప్రాంతంలో నేను చూసిన విషయమేమిటంటే, చాలా పేద కుటుంబాలు ప్యాడ్స్ కొనుగోలును వాయిదా వేస్తుంటాయి – పేదరికం కారణంగా. ఇంటి పనులు చేసే మహిళలు తరచుగా శుభ్రమైన ఉపకరణాలను ఉపయోగించలేకపోతుంటారు.

పెసీల లోపం వల్ల సానిటరీ ఉత్పత్తులకు చేరుకోవడం సాధ్యం కాని విషయం చాలావరకూ మౌనంగా ఉంటుంది, కానీ ఇది మహిళల ఆరోగ్యం మరియు గౌరవాన్ని రెండు వైపులా ప్రభావితం చేస్తుంది.`},{name:"Pink Room and Temples",age:19,content:`మహారాష్ట్రలో నేను చూసిన విషయం ఏమిటంటే, ఇప్పటి వరకు ప్రజలు పీరియడ్స్ గురించి ఓపెన్ గా మాట్లాడటం ప్రారంభించారు. కానీ ఒక విషయం ఇంకా కఠినంగా అమలు అవుతోంది – మందిరాల్లో ప్రవేశించకూడదు మరియు పూజా సామగ్రిని తాకకూడదు.

పాఠశాలలో ఒక "పింక్ రూమ్" ఉండేది – అక్కడ పీరియడ్స్ సమయంలో అమ్మాయిలు విశ్రాంతి తీసుకోవచ్చు. అక్కడ ప్యాడ్స్ కూడా అందుబాటులో ఉండేవి, ఇది చాలా ఉపయోగకరమైనది. నేను కోరుకుంటున్నాను ప్రతి పాఠశాల మరియు కళాశాలలో ఇలాంటి సదుపాయం ఉండాలి.`},{name:"Inclusivity Needed in Education",age:20,content:`పీరియడ్స్ ఒక సాధారణ సంభాషణ భాగం కాకపోతే, అది ఇంకా టాబూ గా కొనసాగుతుంది. కళాశాలలో సెషన్లు ఉంటాయి – పీరియడ్స్ పై – కానీ అవి కేవలం అమ్మాయిలనే పిలుస్తారు, అబ్బాయిలను కాదు.

ఈ వయస్సుకు అమ్మాయిలు సర్వత్రా తెలుసుకుంటారు, కానీ అబ్బాయిలను కూడా పిలవాలి. అబ్బాయిలు కూడా రేపు తండ్రులవుతారు – వారు అవగాహన కలిగి ఉంటే, సమాజం మెరుగుపడుతుంది.

మన సమాజం తానే అమ్మాయిలను ఈ సెషన్ల నుంచి దూరంగా ఉంచుతుంది. కానీ మనం అమ్మాయిలను కూడా ఈ విషయాల్లో చేర్చితే, వారు కూడా అర్థం చేసుకోగలుగుతారు, ఇది సహజమే, లజ్జపడాల్సిన విషయం కాదు.`},{name:"Hidden Pain Public Shame",age:18,content:`నేను ఎడవ తరగతిలో ఉన్నప్పుడు మొదటిసారిగా పీరియడ్స్ వచ్చినవి. గాయం పెద్దగా లేదు, కానీ ఎవరూ తెలుసుకోవద్దని నేను కోరుకున్నాను. ఆ సమయంలో నా వయస్సు గల ఎక్కువ మంది అమ్మాయిలు ఈ విషయంపై షర్మించుకుంటున్నారు – నేను కూడా. ఈది ఒక మురికివాటిగా అనిపిస్తుంది.

కాలం గడిచేకొద్దీ, నేను దీన్ని సాధారణంగా తీసుకొని నా జీవితం భాగంగా మలచుకున్నాను. కానీ ఇప్పటికీ చాలా అమ్మాయిలు ఆలయానికి వెళ్ళడం లేదా పూజ చేయడం తప్పించుకుంటున్నారు, ఎందుకంటే వారి ఇంటివారు పీరియడ్స్ ఉన్నప్పుడు అమ్మాయి "అపవిత్ర" అని నమ్ముతారు.

ఈ సంప్రదాయం ఇప్పటికీ చాలా ఇళ్లలో కొనసాగుతోంది.`},{name:"Discrimination",age:19,content:`నేను పీరియడ్స్ యొక్క జీవశాస్త్ర మరియు శారీరక వైశేషాలను గురించి చాలా అవగాహన కలిగి ఉన్నాను. ఎప్పుడైతే నాకు తెలిసినప్పుడు ఎవరైనా మిత్రుడు లేదా కుటుంబ సభ్యుడు పీరియడ్స్ లో ఉంటే, నేను మరింత శ్రద్ధతో వ్యవహరించడానికి ప్రయత్నిస్తాను. ఉదాహరణకు – ఎలాంటి సహాయం చేయడం, తద్వారా వారి భారం తేలికపడి పోతుంది.

చాలా సందర్భాల్లో వారు వ్యతిరేకంగా మాట్లాడతారు, మూడ్ స్వింగ్స్ లేదా నొప్పి కారణంగా – కానీ నేను వాటిని గమనించకుండా ఉంటాను. మరియు అవును – చాక్లెట్లు ఎప్పటికప్పుడు సిద్ధంగా ఉంచుతాను – చాక్లెట్లతో కొన్ని ప్రత్యేకత ఉంటాయి!

ఇంతలో ముఖ్యమైన విషయం ఏమిటంటే, నేను పూర్తి గౌరవంతో పర్యవేక్షించాలని ప్రయత్నిస్తాను, ముఖ్యంగా ఆ సమయంలో అమ్మాయి స్వయంగా కొంత బలహీనంగా లేదా అసౌకర్యంగా అనుభవిస్తున్నప్పుడు. నా ప్రయత్నం ఇది – నా పక్షం నుంచి ఏమీ కొంత లోపం ఉండకూడదు.

కానీ దురదృష్టవశాత్తూ, ప్రతి ఒక్కరూ ఇలాంటి ఆలోచనను కలిగి ఉండరు. నేను చూస్తున్నాను, ఇంకా చాలా మంది పాత అభిప్రాయాలను పట్టుకుని ఉన్నారు – ముఖ్యంగా పెద్ద వయస్కుల మహిళలు – వారు కూడా ఈ విధమైన ఆలోచనల్లో పెరిగారు.

ఒక సంఘటన నాకు ఇప్పటికీ గుర్తుంది – దీపావళి రోజున. మా ఇంట్లో పూజ జరుగుతుంది, మరియు నా ఒక బంధువు (మహిళ) మనమంతా నుంచి వేరుగా కూర్చుంది. నేను చిన్నవాడిని, ఎందుకు అని అర్థం కాలేదు. తర్వాత నేను తెలిసింది అది పీరియడ్స్ సమయంలో ఉంది, అందువల్ల పూజలో భాగస్వామ్యం ఉండదు. ఆ సమయంలో నేను చాలా బాధపడినాను.

నేను అనుకున్నాను ఈ సంప్రదాయాలు ఎంతగానో ముదురాయి మరియు ఎంత తప్పు. ఇలాంటి విషయాలు కేవలం అవగాహనతోనే మారవచ్చు. గౌరవం, అర్థం మరియు ప్రేమ – ఈ మూడు అంశాలను అంగీకరించవచ్చు, అనేది సమాజం అంగీకరించడంలో మార్పును కలిగిస్తుంది.

ఊహించని మాటలు చెప్పడం మరియు చిన్న చిన్న అడుగులు వేయడం – ఇదే మార్గం టాబూలు తొలగించడానికి.`}],AndhraPradesh:[{name:"Celebration Amidst Tension",age:18,content:`నేను మొదటి సారి పీరియడ్ 7వ తరగతి సమయంలో పొందాను. నాకు ఇప్పటికీ గుర్తుంది – ఆదివారం రోజు. నేను లేచిన వెంటనే, నా బట్టల్లో రక్తం కనపడింది. నేను భయపడిపోయాను, ఎందుకంటే నాకు ఏం జరిగిందో అర్థం కాలేదు.

నేను నా అమ్మకు చెప్పాను, అర్థం చేసుకున్నా, అనుకున్నాను నేను అనారోగ్యంగా ఉన్నాను, కానీ అమ్మ నన్ను శాంతిగా అర్థం చెప్పి నా ధైర్యాన్ని పెంచింది.

మా రాష్ట్రంలో ఒక అమ్మాయి మొదటి సారి పీరియడ్స్ పొందినప్పుడు ఒక ప్రత్యేక కార్యక్రమం ఉంటుంది. మొత్తం బంధువులను ఆహ్వానిస్తారు, మరియు పూజలు జరుగుతాయి. హల్దీ పాకింది, ఆరతి జరిగింది, మరియు నాన్న ప్రతి రోజు బేసన్‌తో ననిపించేరు. మంచి భోజనం అందిస్తారు మరియు వేరే మంచం కూడా ఇచ్చేరు.

8వ తరగతి ఒక ఘటన గుర్తుంది – నా పీరియడ్ అనియమితంగా వచ్చింది మరియు ఒక విరామ సమయంలో చుట్టుముట్టింది. నేను చాలా అసహజంగా అనుభవించాను మరియు ఏడ్చాను – భయపడ్డాను, బట్టల్లో అంగిలు పడిందో అని.

తర్వాత నా నాన్న స్కూల్‌లో నన్ను తీసుకోకపోయారు, ఆయన నన్ను బాగా అర్థం చెప్పారు – ఇది ఒక సహజ ప్రక్రియ మాత్రమే, మరియు నిగ్రహించడానికి కారణం లేదు.

పీరియడ్స్ వల్ల నా రోజువారీ పనులు ఎక్కువగా ప్రభావితం కావు, కేవలం కొన్నిసార్లు నొప్పి ఉంటుంది మరియు ఎక్కువ నిద్ర వస్తుంది.

నా అభిప్రాయంలో, ఇప్పుడు ప్రజల ఆలోచనలు మారుతున్నాయి – ప్రజలు ఎక్కువగా అర్థం చేసుకుంటున్నారు. కానీ గ్రామంలో కొన్ని ప్రాంతాలలో ఇంకా పీరియడ్స్ ను "పరిచయం" గా భావిస్తారు.`},{name:"A Positive First",age:19,content:`నా ఇంటి మరియు పక్కన ఎక్కువ రూకాట్లు లేకపోవడంతో, నేను ప్రశాంతంగా ఉండిపోయాను మరియు ఏదైనా నుండి భయపడలేదు.

మన రాష్ట్రంలో ఒక అమ్మాయి పీరియడ్స్ పొందినప్పుడు, ఒక చిన్న కార్యక్రమం జరుగుతుంది, మరియు దీనిని ఒక మంచి సంకేతంగా భావిస్తారు. అందుకే నా మొదటి అనుభవం చాలా మంచి అనిపించింది – ఎవరు కూడా అప్రతిష్టించేలా, నాకూ భయాలు లేకుండా.

నేను నా రోజువారీ పనులను అడ్డంకులేకుండా పూర్తిచేశాను మరియు పూర్తి మద్దతు పొందాను.`},{name:"Isolation and Acceptance",age:19,content:`నేను 10వ తరగతిలో మొదటిసారిగా పీరియడ్స్ అనుభవించాను – నా అన్ని క్లాస్‌మేట్స్ ఆలస్యంగా వచ్చారు, అందుకే నేను స్వయంగా అసహజంగా మరియు భయపడ్డాను.

నేను హాస్టల్‌లో నివసిస్తున్నాను మరియు ఒక ఉదయం 6 గంటలకు తల్లి ఫోన్ చేసినప్పుడు – ఏడుస్తూ చెప్పాను, రక్తం వస్తుంది. తల్లి చాలా ఆనందంగా ఉందని చెప్పింది – నీవు ఇప్పుడు మహిళగా మారిపోయావు.

ఆ సమయంలో నా చెల్లెలు చికెన్‌పాక్స్‌తో బాధపడుతున్నది, అందువల్ల తల్లిదండ్రులు నన్ను ఇంటికి తీసుకురాలేకపోయారు. నానమ్మ మరియు మామయ్య వద్దకు ఊరికి పంపారు. అక్కడ వారి పాత ఆలోచనల కారణంగా నేను చాలా అసహజంగా అనిపించింది.

నేను భోజనాలు కూడా మాత్రమే స్వీకరించాను – అయినప్పటికీ, నాకు చాలా నొప్పి ఉండటంతో నేనే అన్ని పనులు చేసుకోవలసి వచ్చింది. తినడానికి కేవలం తీపి మిఠాయిలు, మిర్చి మసాలా తప్ప నిస్సందేహంగా నిషేధించబడింది.

ఈ అన్ని అనుభవాలు చాలా విచిత్రంగా అనిపించాయి – ఇలాగే ఉంటే నా ఇల్లు కూడా అన్యాయం చేసినట్టుగా నాకు అనిపించింది.`},{name:"Tradition of Taboos",age:18,content:`నేను వినిపించిందిగా అనేక ఇంటిల్లో అమ్మాయిలను పీరియడ్ సమయంలో వంటగది లోపలికి వెళ్లడం మరియు అचारం స్పర్శించడం తప్పుగా చేయవద్దని నిషేధించబడినట్లు. అనేక ఇంటిల్లో దేవుడి వస్తువులను స్పర్శించడం కూడా నిషేధించబడింది.

ఇది అంగీకరించబడిన భావన ఏమిటంటే అమ్మాయి "అపవిత్ర" అయిపోతుంది, ఇది అమ్మాయి స్వేచ్ఛను అడ్డుకుంటుంది. ఈ నిర్బంధం ఆమె స్వీయ గౌరవం మరియు స్వీయ ప్రేమను తగ్గిస్తుంది.

ఈ విధమైన ఆచారాలు ఈ విషయం గురించి తెరచి మాట్లాడడం అవసరం అని సూచిస్తాయి, మరియు ఈ పాత ఆలోచనలను తిరగరాయడం చాలా అవసరం.`},{name:"A Royal Start, Isolated Aftermath",age:19,content:`ఆంధ్రప్రదేశ్‌లో ఏప్పుడైనా అమ్మాయికి మొదటి పీరియడ్ వచ్చినప్పుడు, ఆమెకు ఒక రాణి లాంటి గౌరవం ఇవ్వబడుతుంది – పెద్ద కార్యక్రమం జరుగుతుంది, ప్రజలు చేరతారు.

మూడు రోజుల పాటు ఆమెను ఎవ్వరూ స్పృశించలేరు, ఒక ప్రత్యేక స్థలంలో ఉండాలి. నాలుగవ రోజున అమ్మ మరియు దాతి ఆమెను కడగడం జరుగుతుంది. మొత్తం కుటుంబం దీన్ని ఒక వేడుకగా జరుపుకుంటుంది – కూతురి పెద్దవడం పై ఆనందం ప్రదర్శిస్తారు.

కానీ మొదటి పీరియడ్ తర్వాత ప్రతి పీరియడ్ సమయంలో అమ్మాయిని ఒక మూలలో పెట్టి, అందరికీ వేరే కూర్చోమని చెప్పబడుతుంది, ఎవ్వరూ ఆమెను స్పృశించరు – ఆమెను తాకితే, పసుపు నీళ్లతో శుద్ధి చేయబడుతుంది.

ప్రత్యేక పాత్రలు మరియు వస్త్రాలు ఇచ్చి, అవి తానే శుభ్రం చేయాలి. నాలుగవ రోజు పసుపు చల్లిన తర్వాత ఆమెను "పవిత్ర" గా అనిపించడం జరుగుతుంది.

కాలం వెళ్ళినప్పటికీ కొంత మార్పు వచ్చింది, కానీ ఈ ఒంటరితనం ఇంకా కొనసాగుతుంది – నొప్పి, ఒంటరితనం మరియు కుటుంబం నుండి దూరం చేస్తుంది.`}],WestBengal:[{name:"From Fear To Awareness",age:20,content:`నా మొదటి పీరియడ్ కొంత భయంతో మరియు ఆశ్చర్యంతో కూడుకున్నది, ఎందుకంటే నాకు సరిగ్గా అర్థం కాలేదు ఏం జరుగుతుందో. హౌ, పీరియడ్ గురించి నేను విన్నాను, కానీ స్వయంగా అనుభవించడం పూర్తిగా వేరే విషయం.

ప్రారంభంలో నేను అనుకున్నాను నేను బీమారిగా ఉన్నాను, అందుకే తల్లిదండ్రులకు చెప్పలేదు. కానీ ఆగిపోయిన నెలలో నా నానమ్మ చూశారు మరియు అప్పుడు నాకు అసలైన సమాచారం లభించింది. ఆ తరువాత చాలా సులభంగా మారిపోయింది.

ఇప్పుడు నేను నా ప్రత్యేక స్నేహితులు మరియు కుటుంబ సభ్యులతో ఈ విషయం సులభంగా చర్చించగలను, ఎందుకంటే ఇప్పుడు ప్రజలు ఓపెన్‌గా ఆలోచించడంలో ఉన్నారు. కానీ ఇంకా కొన్ని చోట్ల నేను జాగ్రత్తగా ఉంటాను.

మన దగ్గర కొన్ని సాంప్రదాయాలు ఉన్నాయి – పీరియడ్ సమయంలో దేవాలయాలు మరియు వంటగదుల నుండి దూరంగా ఉండడం. పాతకాలంలో అమ్మాయిని వేరే గదిలో ఉంచేవారు, కానీ ఇప్పుడు ఆ కఠినతనం తగ్గిపోయింది.

నా అభిప్రాయంలో ఈ విషయం మీద మిశ్రమ ఆలోచనలు ఉన్నాయి – ఒకవైపు కొన్ని సాంప్రదాయాలు వేరుపరచడం చేస్తాయి, కానీ మళ్ళీ ప్రజలు అవగాహన పెంచుకుంటున్నారు.

కొన్నిసార్లు స్కూల్ లో శర్మ అనిపించేది, ముఖ్యంగా నేను చిన్నప్పుడు.

ఇటువంటి తప్పు అర్థం ఏమిటంటే, పీరియడ్ "కల్పించని" లేదా "అశుద్ధమైనది" అని భావించబడింది. చాలా మంది అంటారు ఈ విషయం గురించి మాట్లాడకూడదు – ఇది పూర్తిగా తప్పు. పీరియడ్ ఒక సహజ ప్రక్రియ, మరియు ఈ విషయం గురించి మాట్లాడటం చాలా ముఖ్యమైంది.

స్కూల్ లో కొంత సమాచారం ఇచ్చారు, కానీ అది శాస్త్రం పరిధిలోనే పరిమితం అయింది. అసలైన సమాచారం నాకు అమ్మ నుంచి అందింది – ప్రతిరోజు దీనిని ఎలా నిర్వహించాలి అనేది.

అప్పుడు నేను ఆన్‌లైన్ లేదా పుస్తకాల్లో ఏమీ చూడలేదు, కానీ బయాలజీ పుస్తకం వాడతారు. ఇప్పుడు చాలా ఆన్‌లైన్ వనరులు, సోషల్ మీడియా ద్వారా సమాచారం అందుబాటులో ఉంది.

స్నేహితులు లేదా కుటుంబ సభ్యులు ఎలాంటి ప్రశ్నలు అడగకుండా మద్దతు ఇస్తే – వస్త్రాలు ఇస్తే, విశ్రాంతి ఇవ్వడానికి సహాయం చేస్తే – అది చాలా ఉపయోగకరం.

అవును, "ఆ సమయం", "మూడ్ స్వింగ్" వంటి వాక్యాలు బదులు, నేరుగా "పీరియడ్" అని చెప్పాలి – అప్పుడు ఇది సహజంగా మారుతుంది.

కొన్ని సార్లు నొప్పి మరియు ఎక్కువ రక్తస్రావం కారణంగా రోజువారీ పనులు కష్టంగా మారతాయి – స్కూల్, కళాశాల, ఇంటి పనులు.

ఎన్ని కార్య‌క్ర‌మాలు కూడా మిస్ చేస్తాము, నొప్పి ఎక్కువగా ఉంటే.

అవును, నగరాల్లో ఆలోచనలు మారిపోతున్నాయి – స్కూల్‌లు, ఎన్‌జీఓలు, మీడియా పీరియడ్‌ను సాధారణం చేస్తుంది. కానీ గ్రామాల్లో ఇంకా సమాచారం కొరత ఉంది.

నేను కోరుకుంటున్నాను పీరియడ్‌ను సాధారణ జీవన భాగంగా తీసుకోవాలని – అవమానం లేకుండా, భయంకరం లేకుండా. మరియు పోషకులు మరియు పురుషులు కూడా ఈ విషయం అర్థం చేసుకోవాలి – అప్పుడు వారు మహిళలకు బాగా మద్దతు ఇవ్వగలుగుతారు.`}],Telangana:[{name:"Supportive Brothers ",age:18,content:`నేను ఇద్దరు చెల్లెలు ఉన్న అన్నను, మరియు చిన్నప్పటి నుండీ మా అమ్మ నాకు పీరియడ్ గురించి వివరించింది. ప్రారంభంలో కొంచెం ఆశ్చర్యం గా అనిపించింది, కానీ మా అమ్మ చాలా బాగా వివరించింది ఇది సహజ ప్రక్రియ అని.

ఇప్పుడు నా చెల్లెలు పీరియడ్ పడితే, నేను ఆమె కోసం ప్యాడ్స్ తీసుకురావడం లేదా ఆమె ఒంటరిగా అనిపించకుండా చూసుకోవడం చేస్తాను.

నేను అనుకుంటున్నాను ఇది అన్నగా తెలుసుకోవడం చాలా ముఖ్యం – మరియు తర్వాత మంచి భర్త కావాలని అనుకుంటే, ఇది మరింత ముఖ్యం.

నా స్నేహితులు కూడా అడుగుతారు నేను ఎందుకు అంత అర్ధవంతుడిని అని – నేను చెప్పుకుంటాను, ఇది రిస్పెక్ట్ యొక్క విషయం.`},{name:"Celebrating Womanhood Openly",age:20,content:`నా ఇంట్లో ఏపుడు ఏమైనా అమ్మాయి మొదటి పీరియడ్ పడితే, అది ప్రత్యేకంగా జరుపుకుంటాం. మనసు పూర్వకంగా కుళ్లలు మరియు స్నేహితులను ఆహ్వానిస్తాం – మంచి భోజనం, మిఠాయిలు, అన్నింటి సుగంధం.

ఆ అమ్మాయికి రాణి వంటిది ప్రవర్తన ఇస్తాం – ఎందుకంటే ఇది మహిళగా మారటానికి మొదటి అడుగు. 
ఎలాంటి పరువు లేదా సంకోచం లేదు – నిజానికి ఇది గర్వం కలిగించే విషయం. ఈ తెరిచిన మనసుతో ఆ అమ్మాయికి అభిమానాన్ని మరియు మద్దతును అనుభవించటం చాలా కీలకం.`},{name:"Climatic Shifts and Cycles",age:20,content:`నేను దక్షిణ భారతదేశం నుండి వచ్చాను, అక్కడ వడగళ్ళు నేర్చుకున్నాను – పీరియడ్ కూడా సాధారణంగా ఉండేవి.

కానీ నేను ఉత్తర భారతదేశం లోని హాస్టల్ లో చేరినప్పుడు, ప్రతీది మారిపోయింది. చల్లని గాలులు, భిన్నమైన ఆహారం, కొత్త వాతావరణం – నా శరీరం బాగా కలసి పోయింది.

పీరియడ్ అనియమితంగా మారింది, శరీరం అలసిపోయింది మరియు మనసు కూడా బలహీనంగా అనిపించడానికి ప్రారంభమైంది.

కొత్త జీవితం, కొత్త రోజువారీ విధానం – అన్నీ అంగీకరించడం చాలా కష్టంగా మారింది. కానీ అంగీకరించడానికి అంగీకరించాను మరియు సర్దుకున్నాను.`},{name:"Bridging Tradition and Education",age:19,content:`నా మొదటి పీరియడ్ 11 సంవత్సరాల వయసులో వచ్చాడు – ఇది పూర్తిగా కొత్త అనుభవం మరియు చాలా భయం కూడా కలిగింది. నేను వెంటనే నా తల్లికి చెప్పాను, ఎందుకంటే నాకు ఏమీ అర్థం కాలేదు. నా తల్లి నాకు చెప్పింది ఇది ప్రతి మహిళా అనుభవించాల్సినదే – ఇది ప్రకృతి ప్రక్రియ – అప్పుడు నాకు ధైర్యం లభించింది.

మా రాష్ట్రంలో, మహిళకు మొదటి పీరియడ్ వచ్చాక, అది చాలా ఘనంగా, ఒక వేడుకగా జరుపుకుంటారు. అతిథులను ఆహ్వానిస్తారు, ఆమెకు కొత్త బట్టలు మరియు ఆభరణాలు ఇవ్వబడతాయి. ఆమెను మా సాంప్రదాయ కప్పు – “మేఖెల చాదోర్” – వేసి, ఒక వేపచెట్టు వద్ద పెళ్లి చేయబడుతుంది.

నేను ఎందుకు చేస్తున్నాను అని తెలియదు, కానీ నేను విన్నది ఏమిటంటే ఇది మహిళ శరీరంలో కొత్త ఉత్పాదకత (fertility) యొక్క చిహ్నం అని.

తర్వాత, ఆమె కొన్ని రోజులపాటు ఉపవాసం చేస్తారు మరియు విశ్రాంతి తీసుకుంటారు. కానీ ఒక విషయం మాత్రం ఉంటుందని, పీరియడ్ సమయంలో ఆలయాలు మరియు వంటగదిలో వెళ్ళకూడదు.

ఇప్పుడు, సమాజం పీరియడ్ గురించి కొంత తెరవెనక్కి ఆలోచన చూపిస్తున్నాడు. మేము మాతా కామాఖ్యాను కూడా పూజిస్తాము – ఆమె ప్రతి సంవత్సరం 6 రోజుల పాటు పీరియడ్ సమయంలో ఉంటుంది. జూన్ నెలలో పెద్ద పండుగ – అంబుబాచీ మేళా – జరుగుతుంది, మరియు అన్ని స్వామీజీలు ఆ ఆలయానికి వస్తారు.

అందువల్ల, నేను చెప్పగలను మా సమాజంలో పీరియడ్ గురించి కొంత పాజిటివ్ ఆలోచన ఉంది.

నేను తార్కికంగా ఎప్పుడూ అనుచితంగా అనుభవించలేదు – నా తల్లిదండ్రులు చాలా మద్దతుగా ఉన్నారు. పాఠశాలలో కూడా పీరియడ్ గురించి సమాచారం అందించబడింది, అందువల్ల మనం అందరూ దాన్ని సహజంగా భావించాం.

కానీ గ్రామాలలో, ఇంకా చాలా అమ్మాయిలకు సమాచారం లేదు – అందుకే వారిని కష్టాలు ఎదుర్కోవాల్సి వస్తుంది. ఇంటి నుండి, పాఠశాల నుండి ప్రారంభం కావాలి – ఇది అవమానకరమైన విషయం కాదు – అది సహజంగా శ్వాస తీసుకోవడంలా సాధారణం.

స్త్రీలకు శుభ్రత సామాగ్రి (సానిటరీ ఉత్పత్తులు) తక్కువ ధరలలో అందుబాటులో ఉండాలి, যাতে ఏమైనా అమ్మాయి తన పీరియడ్ కారణంగా ఏ అవకాశం తప్పించకుండా ఉండగలుగుతుంది.

ముందు తులనాత్మకంగా చాలా మెరుగ్గా మారాయి పరిస్థితులు, కానీ ఇంకా చాలా దూరం ఉంది – ఒక రోజు ప్రతి అమ్మాయికి పీరియడ్ భయం, అనుచిత భావనలు మరియు కష్టాల నుండి విముక్తి లభిస్తుంది.

ఇది మాత్రమే జరగగలదు – పురుషులు మరియు మహిళలు కలిసి అవగాహనను వ్యాప్తి చేయగలిగితే మరియు పీరియడ్‌ను ఒక సహజ ప్రక్రియగా అంగీకరించగలిగితే.`}],Bihar:[{name:"Clueless and Awkward ",age:19,content:`నాకు పీరియడ్ గురించి ఎలాంటి అవగాహన లేదు, పాఠశాలలో అమ్మాయిలు "ఆ నెల కాలం" గురించి మాట్లాడటంతో మాత్రమే నాకు అర్థం అయ్యింది. నేను లజ్జ వలన ఎవరికీ అడగలేకపోయాను – నేరుగా గూగుల్‌లో వెతికాను.

ఇప్పుడు కూడా ఎవరైనా పీరియడ్ గురించి మాట్లాడుతుంటే, నాకు కొంత అప్రతిష్టంగా అనిపిస్తుంది. మా ఇంట్లో ఎప్పుడూ ఈ విషయం గురించి స్పష్టంగా మాట్లాడలేదు, ఇంకా నేను అర్థం చేసుకోలేకపోతున్నాను, ఈ విషయాన్ని ఎందుకు అంత పెద్ద ముద్దుగా మార్చారని.

ఆశా! ఎవరైనా ముందు నాకు చెప్పినట్టుంటే.`}],Uttrakhand:[{name:"Unspoken but Understood",age:18,content:`మన ఇంట్లో పీరియడ్ గురించి ఎక్కువగా మాట్లాడరు. నేను కేవలం నా మమ్మీతోనే ఈ విషయం గురించి మాట్లాడుతాను. నాన్నకి అన్ని తెలుసు అన్నట్టు భావిస్తాను, ఎందుకంటే మమ్మీ చెప్పారో, కానీ నేను వాటిని నేరుగా వారితో ఎప్పుడూ చెప్పలేదు.

ఇలా అనిపిస్తుంది, ఇంట్లో ఒక చెప్పుకోని నియమం ఉంది - ప్యాడ్ ను దాచిపెట్టి తీసుకురా, లేకుండా ఇలా ఏదో ప్రత్యేకమైన వస్తువు లాంటి చూపులు ఇయ్యకు.

సంఖ్యలో వెళ్ళేందుకు నిషేధం లేదు, కానీ మమ్మీ అంటారు, పీరియడ్ లో దేవాలయానికి వెళ్ళకూడదు. అचारం మరియు తిక్కు ఆహారం కూడా మమ్మీ నిషేధిస్తారు. అలాగే నాన్న తర్వాత మమ్మీ అంటారు, ఏదో తినిపించుకో – ఒక బియ్యం ధాన్యం లేదా రోటీ యొక్క ముక్క అయినా సరే.

ఈ అన్ని పద్ధతుల్లో కోపం లేదా చెడుతనం ఏమి లేదు, కానీ ఈ విషయం గురించి సూటిగా మాట్లాడకపోవడం – ఇది పెద్ద సమస్య. 

ఇలా అనిపిస్తుంది, అందరికీ తెలుసు, కానీ మాట్లాడడం పాపం. ఈ మౌనం నిజమైన కష్టంగా మారిపోతుంది.`}],Punjab:[{name:"Confusion and Customs",age:22,content:`నేను నా మొదటి పీరియడ్ నాలుగవ తరగతిలో వచ్చాను, మరియు ఎవరికీ ఈ విషయం గురించి చెప్పలేదు. కేవలం ఒకరే చెప్పింది, ఈ విషయం ఎవరితోనైనా మాట్లాడకపోవడం. ఈ మాట విన్నప్పటి నుంచి నాకు అర్థం లేకుండా అనిపించడమే కాకుండా,羞羞గా కూడా అనిపించింది. ఎనిమిదవ తరగతి వరకు నా స్నేహితులు కూడా పీరియడ్స్ గురించి మాట్లాడటం ప్రారంభించినప్పుడు, అప్పుడు నేను కూడా సూటిగా మాట్లాడడం ప్రారంభించాను.

పీరియడ్స్ కు సంబంధించిన కొన్ని వింత శాస్త్రధర్మాలు కూడా ఉన్నాయి. నేను పీరియడ్స్ లో ఉన్నప్పుడు, నాకు దేవాలయానికి వెళ్లడమూ అనుమతి లేదు. నా అమ్మ తులసి చెట్టుకు నీళ్లు పెట్టడానికి కూడా అనుమతించరు, చెట్టుని మురికిగా మారిపోతుందని చెబుతారు. ఆచారం కూడా, చెడిపోకుండా దూరంగా ఉండాలి.

నా ఒక స్నేహితురాలు మహారాష్ట్ర నుండి, ఆమెకు మరింత కఠినమైన నియమాలు ఉన్నాయి — పీరియడ్స్ సమయంలో మంచంపై పడుకోడానికి, వంటగదిలోకి వెళ్లడంలో, లేదా పండగలకు హాజరయ్యే విషయంలో అనుమతి లేదు.

మరో వైపు, నా మరొక స్నేహితురాలు పీరియడ్స్ గురించి మొదటినుంచి తెలుసుకుంది. ఆమెకు మొదటి పీరియడ్ వచ్చినప్పుడు, పెద్దగా కష్టాలు లేవు, ఎందుకంటే ఆమె ముందుగానే అన్ని విషయాలు తెలుసుకుని వచ్చేసింది. ఇది మనసుకు కూడా అర్థమవుతుంది, ఈ ఆలోచనలు సమాజంలో ఎంత లోతుగా వున్నాయో, ఎవరైనా చెప్పకపోయినా, మనం ఆటోమేటిక్ గా ప్రార్థనలు మరియు పూజల నుండి దూరంగా ఉండటం ప్రారంభించాం.

ముందుగా ట్యాంపోన్ లేదా ప్యాడ్ తీసుకోవడంలో కూడా శర్మ అనిపిస్తుంది, ఇది ఒక అస్వచ్చమైన వస్తువు అయి ఉండేలా. ప్రజలలో ప్యాడ్‌ను దాచిపెట్టి పెట్టుకోవడం కూడా ఈ శర్మలో భాగం.`}],UttarPradesh:[{name:"Secrecy’s Lasting Impact",age:21,content:`నేను పెద్దవుతున్నప్పుడు, నాకు ఎక్కువ ఇబ్బంది కలిగించే విషయం ఇది - ఇంట్లో ప్యాడ్ ఎప్పుడూ దాచిపెట్టి ఉంచడం. చాలా సార్లు నేను ప్యాడ్‌ను బాత్రూంలో పెట్టానో లేక మరే చోటు ఉంచానో, కానీ నా అమ్మ చూసినప్పుడు, నాకు డాౕట్ పడ్డారు. ప్రత్యేకంగా నాన్న చూసినట్లైతే, మరింత చెడ్డగా అనిపిస్తుంది.

నా ఆరోగ్యం మరియు అవసరమైన వస్తువులను ఇంతవరకు దాచిపెట్టడం ఎందుకు అని నాకు అర్థం కాలేదు. ప్యాడ్ మాత్రమే కాదు, పీరియడ్స్ గురించి ఏ విషయమూ చెప్పడం కష్టంగా ఉంటుంది.

ఎప్పుడూ ఏదైనా కష్టం అయితే చెప్పడం కూడా కష్టం అవుతుంది — ఉదాహరణకు నొప్పి ఉండటం, లేదా ఏదైనా భిన్నంగా ఉండటం, మరియు డాక్టర్‌ని చూడాలని చెప్పినప్పుడు నోరు మూసేస్తారు, అది చాలా పెద్ద విషయం అని భావించుకుంటారు.

ముగిసిన తర్వాత నేను స్వయంగా డాక్టర్‌తో ఆన్‌లైన్‌లో మాట్లాడటం ప్రారంభించాను, లేదా నా స్నేహితురాలి అమ్మ నుంచి సలహా తీసుకున్నాను. ఒక సంవత్సరం పాటు నాకు ఫంగల్ ఇన్‌ఫెక్షన్ అయింది, కానీ ఇంటి వాళ్లు పట్టించుకోలేదు.

ఈ అన్ని దాచడం, శర్మ, మరియు మాట్లాడకపోవడం నా ఆరోగ్యం పై గొప్ప ప్రభావం చూపింది. అప్పటినుంచి నేను అర్థం చేసుకున్నాను, తెగి మాట్లాడడం చాలా ముఖ్యమని.`},{name:"Breaking Barriers in Uttar Pradesh",age:21,content:`మన ఉత్తరప్రదేశ్‌లో ఇప్పుడు మాట్లాడడం కొంతమేర ప్రారంభమై ఉంది, కానీ ఇంకా పీరియడ్స్ గురించి పారదర్శకంగా మాట్లాడటం చాలా కష్టం.

మొత్తం ఇంట్లో ఈ విషయం అబ్బాయిల నుంచి దాచిపెట్టబడుతుంది. కానీ నా అభిప్రాయం ఏమిటంటే, అబ్బాయిలు కూడా పీరియడ్స్ గురించి తెలుసుకోవాలి, తద్వారా వారు తమ అన్నత మరియు భార్యలను అర్థం చేసుకోగలుగుతారు.

ఎక్కువ పాబందీలను కూడా విధిస్తారు — దేవాలయానికి వెళ్లడం నిషేధించబడింది, అచారం తాకకూడదు, పండగల్లో పాల్గొనకూడదు, ఎంతటి అమ్మాయి అయినా సరే. ఇది అన్నీ ఆమె యొక్క మంచి కోసం అని చెప్పబడుతుంది, కానీ నిజం ఏమిటంటే, ఇది కేవలం నిషేధం మాత్రమే.

మహిళలు మౌనం అవుతారు, నొప్పిని తట్టుకుంటారు, కానీ ఏమీ చెప్పరు. నేను కోరుకుంటున్నాను ఒక రోజు, పీరియడ్స్ గురించి తెగించి మాట్లాడటానికి సమయం రాకపోతే, అది ఎటువంటి అవమానం లేకుండా జరగాలి.`},{name:"Temples and Taboo",age:20,content:`ఉత్తరప్రదేశ్‌లో పీరియడ్స్ గురించి మాట్లాడడం ఇంకా చాలా కష్టం. దేవాలయానికి వెళ్లడం, పూజలో పాల్గొనడం నిషేధించబడుతుంది.

ఒకసారి నాకు వృందావనంలో దేవాలయానికి వెళ్లాల్సి వచ్చింది, అప్పుడు పీరియడ్స్ వచ్చాయి. రెండవ రోజు నాకు దేవాలయానికి చొచ్చుకెళ్లడం అనుమతించలేదు — చాలా చెడ్డగా అనిపించింది, నాకు అనిపించింది నేను బయటికి పంపించబడ్డాను.

ఈరోజు వరకు నేను నా నాన్న లేదా అన్నతో పీరియడ్స్ గురించి మాట్లాడలేదు. కానీ నాకు అర్థమవుతుంది, అబ్బాయిలు కూడా స్వయంగా ముందుకు వచ్చి ఒక పరిసరాన్ని సృష్టించాలి, ఇక్కడ అమ్మాయిలు బహిరంగంగా మాట్లాడగలుగుతారు.`},{name:"Early Education, Early Acceptance",age:18,content:`నా పాఠశాలలో పీరియడ్స్ పై ముందే అవగాహన తరగతి జరిగినది. అందువల్ల నేను మొదటిసారి పీరియడ్స్ వచ్చినప్పుడు నాకు ఎలాంటి భయం లేదు, ఇంకా సందిగ్ధత కూడా లేదు.

మేము తేలికగా మాట్లాడేవాళ్ళం, పాఠశాలలో, స్నేహితుల మధ్య. ప్రతి పాఠశాల ఇలానే చేస్తే, చాలా మంది అమ్మాయిలు, అవి భయపడుతున్న వాళ్ళు, వారికి ధైర్యం రావడం అనేది.`}],Kerala:[{name:"Normalizing Periods in Friend Groups",age:20,content:`నా స్నేహితుల మధ్య పీరియడ్స్ పై తెగ మాట్లాడేవాళ్ళం. ఒకసారి నా స్నేహితురాలు ఈవెంట్ లో చాలా తీవ్రంగా నొప్పి అనుభవించిపోయింది. కానీ మనం అందరం కలిసి సహాయం చేశాం — నేను ఎలాంటి సంకోచం లేకుండా ఆమె కోసం ప్యాడ్ తీసుకెళ్లాను.

ఆ సందర్భాన్ని చూసి నా ఆలోచన మారిపోయింది. ఇది ఏదైనా ఆపత్రత లేదా లజ్జగా భావించాల్సిన విషయం కాదు — స్నేహితులు అంటే ఒకరినొకరు సహాయం చేయడం, నొప్పి ఉన్నా లేక ఏదైనా అవసరం ఉన్నా.

ఇప్పుడు నేను నా అబ్బాయిలు స్నేహితులకి కూడా చెప్తున్నాను, ఈ విషయంపై అవగాహన చూపించండి. తెగ మాట్లాడండి. ఎవరైనా నొప్పి అనుభవిస్తే, సహాయం చేయడం చాలా ముఖ్యం.`}],Odisha:[{name:"Silent Discomfort",age:17,content:`నేను పీరియడ్స్ గురించి ఎప్పుడూ ఏమీ తెలియదు, పదవ తరగతి బయాలజీ తరగతిలో ఉపాధ్యాయుడు కొంచెం వివరించారని కూడా. కానీ ఆ విషయాన్ని అలా త్వరగా ముగించేసారు.

ఇంట్లో నా చెల్లి తన ప్యాడ్లను దాచిపెట్టి ఉంచుతుంది, మరియు నేను అడగడం కూడా అనుమతి లేదు. ఒకసారి తప్పుగా నేను ఒక ప్యాడ్ తాకాను, అప్పటికి మమ్మీ-డాడీ నన్ను పప్పు పెట్టారు — నా దృష్టిలో నేను పెద్ద తప్పు చేసిందేనని అనిపించింది.

ఈ విషయం ఒక పెద్ద అవాంఛనీయ విషయం అన్నట్లుగా మార్చేశారు — దీనిపై మాట్లాడడం కూడా తప్పు అని భావించబడింది. ఇంటి వాతావరణం అలా ఉంటుంది, ఇది ఏదో చాలా చెడ్డ విషయం అన్నట్లుగా — మాట్లాడకపోతే చాలు.

నేను ఏకంగా కోరుకుంటున్నది ఎవరైనా ఇదే విషయం గురించి తెగగా చెప్పి, అనుకూలంగా మాట్లాడాలని, ఎలా ఇతర విషయాలపై మాట్లాడుతామో, అలాగే పీరియడ్స్ గురించి కూడా.`},{name:"Father’s Support, Society’s Stigma",age:19,content:`గుజరాత్ లో ఎక్కువమంది — ముఖ్యంగా మహిళలు — పీరియడ్స్ గురించి పురుషులతో మాట్లాడటానికి సంకోచిస్తారు. కానీ మా కుటుంబం కొంచెం భిన్నంగా ఉంది.

నా అక్కా మరియు నాన్న చాలా సహాయకరంగా ఉంటారు. పీరియడ్స్ సమయంలో నా ప్రతి విషయానికి వారు జాగ్రత్త పడతారు — నాకు చాలా నచ్చుతుంది.

నా అమ్మతల్లి తరానికి చెందిన మహిళలు ఇప్పటికీ ఈ అంశంపై పురుషులతో మాట్లాడడంలో అసహజంగా ఉంటారు. కానీ నేను భావిస్తాను, పురుషులు ఈ విషయంపై అవగాహన పెంచుకుంటే, ఇంటి వాతావరణం మారిపోతుంది.`},{name:"Silent Struggles, Open Conversations",age:19,content:`నా పీరియడ్స్ మొదటి సారి వచ్చినప్పుడు, నాకు ముందే సమాచారం ఉండేది — ఎందుకంటే నేను నా స్నేహితులలో పీరియడ్స్ వచ్చిన ఆఖరి వ్యక్తిని. ఆ సమయంలో మేము ఆలయానికి వెళ్లాము, మరియు ఇంటి వెళ్ళినప్పుడు నాకు తెలిసింది.

నా అమ్మ సహాయం చేసి, అన్నీ వివరించారు.

ప్రస్తుతం పాఠశాలలో పీరియడ్స్ గురించి మాట్లాడటం నాకు అన్యాయం అనిపించింది. కానీ ఇప్పుడు నేను కుటుంబం మరియు స్నేహితులతో తెగగా మాట్లాడుతున్నాను.

ఇక్కడ కొన్ని సంప్రదాయాలు ఉన్నాయి — ఉదాహరణకు పీరియడ్స్ సమయంలో నీటిని తాకకూడదు, వంటగదిలో ఉండకూడదు, ఆలయానికి వెళ్లకూడదు, పొడిగిన ఆహారం తినకూడదు, జుట్టు కడగకూడదు.

ఇవన్నీ ఆరోగ్యం కోసం అని చెప్తారు — విశ్రాంతి కావాలని. నా రన్నింగ్ మరియు శారీరక పనులు తగ్గిస్తారు, ताकि విశ్రాంతి పొందగలుగుతాను.

నా పీరియడ్స్ సమయంలో ఎక్కువ నొప్పి లేదు, కానీ మూడ్ స్వింగ్‌లు ఉంటాయి — ఒకప్పుడు కోపం, మరోప్పుడు నవ్వు.

ఇప్పుడు సోషల్ మీడియా మరియు వెబ్సైట్ల ద్వారా సమాచారం పొందగలుగుతాను. విషయాలు మారిపోతున్నాయి, మరియు నేను భావిస్తాను మరిన్ని మార్పులు రాబోతున్నాయి.`}],MadhyaPradesh:[{name:"Teaching Men, Changing Minds",age:20,content:`ఇప్పటికీ పీరియడ్స్ గురించి మాట్లాడటం అనేక ప్రదేశాల్లో టాబూ గా మారింది, కానీ నా కథ కొంచెం భిన్నంగా ఉంది. నా అమ్మ నాకు మొదటి పీరియడ్స్ ముందు అన్ని వివరించింది. నా పీరియడ్స్ వచ్చినప్పుడు, ఆమె నన్ను పూర్తిగా సహాయం చేసింది.

కానీ అమ్మ ప్రత్యేకంగా చెప్పింది, పాపాకు చెప్పకూడదని. నేను ఆ విషయం అవాంఛనీయంగా అనిపించింది.

తరువాత నేను నా అన్నను స్వయంగా వివరణ ఇవ్వాలని నిర్ణయించుకున్నాను. నేను అతనితో మాట్లాడినప్పుడు, అతను చాలా బాగా అర్థం చేసుకున్నాడు మరియు ఎటువంటి ప్రతికూల స్పందన ఇవ్వలేదు.

ఇంట్లో ఆలయం మరియు ఇతర ప్రదేశాలకు వెళ్లడం ఆ సమయానికి నిషేధించబడింది, కానీ నాకు ఇది ఆధ్యాత్మిక ఆలోచన అని అనిపించింది — ఇంట్లో ఈ విషయం గురించి మాట్లాడటం లో ఎలాంటి లజ్జ లేదు.

ఇతర ప్రదేశాలలో మహిళలు పీరియడ్స్ సమయంలో చెడుగా ప్రవర్తించాల్సి వస్తుందని వింటున్నాము, కానీ నాకు ఎలాంటి అనుభవం లేదు.

నాకు పూర్తిగా నమ్మకం ఉంది, మన కొత్త తరాలను అర్థం చేయడం ద్వారా ఈ టాబూని మనం ముగించగలుగుతామని.`},{name:"Hostel Stories and Home Realities",age:20,content:`నా పీరియడ్స్ మొదలు అయినప్పుడు, నాకు ఇంట్లో ఎలాంటి ఇబ్బందులు ఎదురయ్యే లేదు. కానీ నేను హాస్టెల్‌కి వెళ్లినప్పుడు, ఇతరుల మాటలు వినడం నాకు షాక్ ఇచ్చింది.

కొన్ని స్నేహితులు చెబుతున్నారు, వారికి వంటగదిలో వెళ్లే మనస్సు ఉండదు, ఇంకొన్ని వారు దూరంగా కూర్చోవలసి ఉంటుందని.

నాకు గుర్తు ఉంది, నేను చికెన్ పాక్స్‌కి గురైనప్పుడు, పీరియడ్స్ ఉన్న మహిళల నుండి నాకు కూడా దూరంగా కూర్చోమని చెప్పబడింది — పీరియడ్స్ అనేది ఒక రోగం వంటిది.

కానీ నేను అదృష్టవంతురాలు — మా ఇంట్లో ఇలాంటి సంప్రదాయాలు లేవు.`},{name:"Routine Rules, No Shame",age:20,content:`మా ఇంట్లో పీరియడ్స్ సమయంలో కొన్ని నియమాలు ఉన్నాయి — ఉదాహరణకు వంటగదిలో వెళ్లకూడదు, ఆలయానికి వెళ్లకూడదు.

మూడో రోజు జుట్టు కడగాలి, కమ్బళం-తకియా కడగాలి, అన్నీ చేయాలి.

కానీ దీనికి ఎలాంటి లజ్జ లేదా చెడ్డ ఆలోచన లేదు — ఇది కేవలం సంప్రదాయం వంటిది. అందుకే నాకు ఎప్పుడూ దుఃఖం అనిపించలేదు. ఇంట్లో అన్ని విషయాలు ఒక సహజమైన విషయంగా పరిగణించబడతాయి.`},{name:"School’s Role in Breaking Stigma",age:18,content:`ఇప్పటికీ చాలా మంది పీరియడ్స్ గురించి తెగగా మాట్లాడడంలో సంకోచిస్తారు. పాఠశాలలో ఎప్పుడైనా సమాచారం ఇచ్చినపుడు, అది చాలా త్వరగా చేసి నవ్వులా మారిపోతుంది.

అమ్మాయిలు స్వయంగా ఈ విషయాన్ని నవ్వులో వేసేస్తారు — దృష్టి కొద్దిగా తగ్గిపోతుంది మరియు సంకోచం ఎక్కువ అవుతుంది.

పాఠశాల కొంచెం తెరుచుకొని మరియు అవగాహనతో వివరిస్తే, అమ్మాయిలు కూడా స్వేచ్ఛగా ప్రశ్నలు అడగగలుగుతారు.`}],Karnataka:[{name:"City Freedom vs Village Constraints",age:19,content:`నేను ఒక మెట్రో నగరంలో పెరిగినాను, అందుకే పీరియడ్స్ గురించి ఎప్పుడూ ఎక్కువగా టాబూ అనిపించలేదు. కానీ నేను నా గ్రామం (ఆంధ్రప్రదేశ్) వెళ్ళినప్పుడు, నిజమైన తేడా కనిపించింది.

అక్కడ చాలా మంది మహిళలు సానిటరీ ప్యాడ్స్ ఉపయోగించలేరు. వారు কাপడు ఉపయోగించడం మరియు పీరియడ్స్ సమయంలో చెడిపోవడం — ఇవి సాధారణ విషయాలు.

నేను స్వయంగా ఏ విధమైన వ్యత్యాసం అనుభవించలేదు, కానీ ఇతరుల పరిస్థితిని చూసి నాకు చాలా బాధ కలిగింది. సమాజంలో ఇప్పటికీ పీరియడ్స్ ను "గందరగోళం" లేదా "అపవిత్రం" గా భావిస్తున్నారు.

నేను కోరుకుంటున్నది, మహిళలు తెగగా మాట్లాడగలుగాలని — ప్రతి గ్రామం, ప్రతి నగరంలో అవగాహన పెరగాలని.`}],TamilNadu:[{name:"Celebration with Restriction",age:20,content:`నా పీరియడ్స్ మొదటిసారి వచ్చినప్పుడు, నాకు అర్థం కాలేదు ఏమి జరుగుతున్నదో. ప్రజలు ఆనందంగా ఉన్నారు, కానీ నేను షాక్ లో పడ్డాను.

నా స్నేహితుల మరియు కుటుంబంతో మాట్లాడటంలో ఎలాంటి ఇబ్బంది లేదు, కానీ ఇతరుల మాటల శైలి చాలా నేరుగా మరియు 'శీలవంతంగా' ఉండింది.

సమావేశంలో చిన్న సంబరాలు జరిగాయి — బహుమతులు కూడా వచ్చాయి, కానీ వాటితో పాటుగా నియమాలు కూడా ఉన్నాయి. ఆలయానికి వెళ్ళకూడదు, పూజ చేయకూడదు — అబ్బా, ఈ కాలంలో కూడా ఇవన్నీ?

ఎప్పుడైనా దుస్తులపై మచ్చలు పడితే, చాలా లజ్జగా అనిపిస్తుంది — جیسے ఏదో తప్పు జరిగిందిలా.

పాఠశాల నుండి ముందుగా స్పష్టమైన సమాచారం లేదు — స్వయంగా అనుభవించి నేర్చుకున్నాను. ఇప్పుడు నేను అనుకుంటున్నాను, పాఠశాలలో ఈ విషయంపై తెగగా మాట్లాడటం అవసరం — సమావేశాలు, సెషన్లు మొదలైనవి.

పీరియడ్స్ ను హాస్యంగా తీసుకోవద్దు — పురుషులు మరియు మహిళల మధ్య తేడాను చూపించడానికి ఇది ఒక మార్గం కాకూడదు.`}],Delhi:[{name:"Periods and Policy Change",age:27,content:`డిల్లీ
1. పాలసీ మార్చండి, దృక్పథం మారుతుంది (Periods and Policy Change)
వయస్సు: 27 సంవత్సరాలు

భారతదేశంలో ఈ రోజు కూడా పీరియడ్స్ గురించి పాత ఆలోచనలు కొనసాగుతున్నాయి — ఆలయానికి వెళ్లకూడదు, లజ్జ అని భావించబడుతుంది.

కొన్ని పాఠశాలలు అవగాహన వర్క్‌షాప్‌లు నిర్వహిస్తుంటాయి — ఇది మంచి విషయం. కానీ ఏకమైన వారు ఈ విషయాలను చేరుకోలేరు.

ప్రభుత్వ స్థాయిలో కూడా మద్దతు తక్కువగా ఉంది. నేను భావిస్తున్నాను, అమ్మాయిలు మరియు మహిళలకు ప్రతి నెలా 3 రోజుల సెలవులు ఇవ్వాలి — పాఠశాల లేదా ఉద్యోగం ఏదైనా.

ఐఐటీ లో ఇదేమైనా ఉన్నది, కానీ ఇది అన్ని ప్రదేశాల్లో అమలు చేయబడాలి.`},{name:"Family Mentality and Menstrual Shame",age:19,content:`లజ్జ మొదటి నుంచి ఇంటినుంచి ప్రారంభమవుతుంది. పాఠశాల అవగాహన ఇవ్వడానికి ప్రయత్నిస్తుండొచ్చు, కానీ చిన్నప్పటి నుండి నేర్చుకున్నపాఠాలు మమ్మల్ని మౌనంగా చేయించేస్తాయి.

ఆమెలు కూడా ఒకరికొకరు మాట్లాడటంలో సంకోచిస్తారు.

సెలవు తీసుకోవాలంటే, నిజమైన కారణం చెప్పడం కూడా కష్టం అయిపోతుంది — లజ్జగా అనిపిస్తుంది.

పిల్లలు ఇప్పటికీ అంతటే తెలుసుకోవడం లేదు, నెలలో ఒకసారి రక్తం వస్తుంది — నొప్పి, మూడ్ స్వింగ్స్, శక్తి తగ్గుదల గురించి ఎలాంటి అవగాహన లేదు.

అందుకే చాలా ముఖ్యం, అబ్బాయిలకు మరియు అమ్మాయిలకు ఒకటే స్థాయిలో సమాచారం ఇవ్వాలి, అందరూ అవగాహన మరియు గౌరవంతో మాట్లాడగలుగుతారు.`}]},hi:{Rajasthan:[{name:"A Scarf and Strength",age:20,content:`जब मुझे पहली बार माहवारी आई थी, तो मैं डर गई थी और इस बारे में कुछ नहीं जानती थी। लेकिन मैंने अपनी माँ को बताया और उन्होंने मेरी मदद की। मैं अपनी नज़दीकी महिला दोस्तों और परिवार वालों से इस बारे में आसानी से बात कर लेती हूँ, लेकिन जब पुरुषों की बात आती है, तो मैं चुप हो जाती हूँ।

      मेरे परिवार में ज़्यादा रोक-टोक नहीं है, लेकिन कुछ नियम जरूर हैं – जैसे पूजा-पाठ के समय दूर रहना पड़ता है। हमारी संस्कृति में माहवारी को गंदा माना जाता है, लेकिन मैं मानती हूँ कि यह सोच गलत है – माहवारी से न तो कोई अशुद्ध होता है और न ही पूजा-पाठ में बाधा आती है।

      कई बार शर्म और झिझक महसूस होती है जब माहवारी की बात करनी पड़े या उस समय कुछ हो जाए। आठवीं कक्षा की बात है – स्कूल में अचानक माहवारी आ गई, पिछली माहवारी को सिर्फ 14 दिन हुए थे। मैं तैयार नहीं थी, पैड भी नहीं लायी थी। मैं घबरा गई थी, ऊपर से मैं नए स्कूल में थी और कोई दोस्त भी नहीं थे। मैंने अपना दुपट्टा इस्तेमाल कर लिया, लेकिन प्रवाह बहुत तेज़ था, कपड़े भी गंदे हो गए, और बहुत शर्मिंदगी महसूस हुई।

      हमारे समाज में माहवारी की बात करना शर्म की बात मानी जाती है और इसका मुझ पर भी असर पड़ा। लेकिन मैं चाहती हूँ कि जब मेरा खुद का परिवार हो, तो माहवारी को एक सामान्य बात बना सकूं। फोन और टीवी से जानकारी मिलती है, लेकिन घर और स्कूल में बात हो तो बेहतर समझ आती है।

      स्कूल में माहवारी की पढ़ाई होनी चाहिए, ताकि लड़के-लड़कियां दोनों को समझ आए। लड़के भी लड़कियों की मदद कर सकते हैं। 12 साल की उम्र से पहले सिखाना बेहतर रहेगा।

      अगर परिवार और दोस्त सहयोग करें, तो माहवारी को संभालना आसान हो जाता है। माहवारी मेरी पढ़ाई और रोज़मर्रा के कामों को प्रभावित करती है। कई बार गुस्सा भी आता है कि लड़कियों को ही इतना दर्द और परेशानी क्यों झेलनी पड़ती है। परीक्षा के समय अगर माहवारी आ जाए, तो मन लगाकर पढ़ाई नहीं हो पाती और अंक भी गिर जाते हैं।

      पारिवारिक समारोह और सफर भी प्रवाह और पेट दर्द की वजह से मुश्किल हो जाते हैं, लेकिन अब तक मैंने कोई बड़ा मौका नहीं गँवाया है। पर मैं हर बार यह सोचती रहती हूँ कि अगली माहवारी कब शुरू होगी।

      पहले के ज़माने में लड़कियों को माहवारी के समय एक कमरे में बंद कर दिया जाता था, जो मेरी नज़र में गलत था, लेकिन थोड़ा आराम मिल जाया करता था। अब चीज़ें बदल रही हैं, लेकिन अभी भी लंबा रास्ता बाकी है। आज भी कई बार बिना कुछ कहे, अपने दर्द को छुपाकर सारे काम करने पड़ते हैं।

      मेरी ज़िंदगी में माहवारी को लेकर सोच बहुत ज़्यादा नहीं बदली है। अब कपड़े की बजाय पैड इस्तेमाल करती हूँ, लेकिन खुलकर बात करना अभी भी कम है। मैं उम्मीद करती हूँ कि आने वाले समय में सब कुछ बदल जाएगा।`},{name:"Cloth, Courage, and Change",age:19,content:`जब मुझे पीरियड आया, मैं 16 साल की थी और इस बारे में कुछ भी नहीं जानती थी। मेरी बड़ी बहन ने कहा कि कपड़ा इस्तेमाल करो और किसी को कुछ मत बताना। मैं किसी तरह उस दिन से निपट गई, पर पूरा दिन यही सोचती रही कि यह क्या हो रहा है और बहुत चिड़चिड़ा महसूस हो रहा था।

मैं सोच रही थी कि मैं इस दर्द के साथ कैसे जिऊं। धीरे-धीरे मैंने इस स्थिति को संभालना सीख लिया। अब कोई विशेष रोक-टोक तो नहीं है, लेकिन जब मेरी माँ बीमार थीं, तो पीरियड के समय सारा काम हमें ही करना पड़ता था। ज़्यादातर मैं खाना बनाती थी, पर और भी काम थे – जैसे पानी को छूना मना था और रसोई में जाना भी मना था।

अब मेरे दो बच्चे हैं, और मेरी बेटी को पीरियड के बारे में सब कुछ पता है। उसे अभी तक पीरियड नहीं आया है, लेकिन उसने फोन और टीवी से जानकारी ले ली है। मैं उससे बात करना चाहती हूँ, पर शर्म आती है। मैं सोचती हूँ कि जब उसे पहली बार पीरियड होगा, तब जरूर बताऊंगी।

मैं किसी से इस बारे में बात करते हुए शर्माती हूँ, पर मेरा मानना है कि इस पर कोई रोक-टोक नहीं होनी चाहिए। शर्माने की कोई जरूरत नहीं है – यह तो एक प्राकृतिक चीज है और कई बीमारियों से भी बचाती है।`},{name:"Breaking the Silence with Support",age:33,content:`मैंने 15 साल की उम्र में पहली बार पीरियड अनुभव किया था। मेरी बड़ी बहन ने पहले ही मुझे इस बारे में बता दिया था, लेकिन पहले दिन बहुत टेंशन और चिढ़चिढ़ापन था। समय के साथ बहन की मदद से सब कुछ आसान हो गया। उस वक्त पैड आसानी से नहीं मिलते थे, तो कपड़ा इस्तेमाल करना पड़ता था।

जहाँ तक रोक-टोक की बात है, हम सब ने एक जैसे नियम माने – जैसे पानी न छूना, खाना न बनाना, और आरती न करनी। पर अगर कोई और न हो, तो करना पड़ता था।

मैं अपने दोस्तों और परिवार से इस बारे में खुल कर बात नहीं कर पाई, पर अपने पति से बिना हिचक बात कर लेती हूँ। वह मेरे पीरियड के समय मेरी मदद भी करते हैं।

आजकल के बच्चे सोशल मीडिया से बहुत कुछ सीख लेते हैं, पर हमारे समय ऐसी कोई सुविधा नहीं थी। मेरे खुद के बच्चे तो नहीं हैं, पर अगर होंगे, तो मेरा परिवार इस बारे में खुल कर बात करेगा।

पहले पीरियड से लेकर अब तक बहुत कुछ बदल चुका है और मैं मानती हूँ कि आने वाले समय में और बदलाव होंगे।`}],Maharashtra:[{name:"Whispers with My Brother",age:18,content:`जब मुझे पहली बार पीरियड आया, मैं घर पर अकेली थी और समझ नहीं आया कि यह क्या हो रहा है। थोड़ी घबराहट हुई, लेकिन पीरियड के बारे में थोड़ा बहुत पहले सुन रखा था। पूरा दिन माँ का इंतज़ार करती रही और जब वह आईं, तो उन्होंने मेरी मदद की और मुझे समझाया भी।

मैं अपने घर की महिलाओं से इस विषय में आराम से बात कर लेती हूँ। मेरा भाई और मैं इस बारे में इशारों में बात करते हैं, बिना “पीरियड” शब्द का इस्तेमाल किए। लेकिन पापा से मैं इस बारे में कुछ नहीं कह पाती।

पीरियड के समय पूजा नहीं कर सकती, खाना छूना मना होता है, मंदिर से दूर रहना पड़ता है, और बहुत सारी चीज़ें होती हैं। कभी-कभी ऐसा लगता है जैसे मैं कोविड की मरीज हूँ, जिसे सबसे अलग कर दिया गया हो।

हमारे समाज में पीरियड को अशुद्धता से जोड़ दिया गया है – जैसे कि महिला गंदी हो गई हो। लेकिन मुझे कभी शर्म महसूस नहीं हुई इस वजह से – मेरे दोस्त बहुत समझदार और मददगार हैं।

मैं मानती हूँ कि पीरियड को लेकर बहुत सारी गलतफहमियाँ हैं – जैसे कि अगर पीरियड वाली लड़की खाना छू ले तो वह सड़ जाएगा। 10वीं और 11वीं कक्षा में इस विषय पर अच्छी तरह पढ़ाया गया, जिससे मुझे और मेरे पुरुष दोस्तों को बहुत कुछ समझ आया।

भावनात्मक सहयोग – यह सबसे ज़रूरी चीज़ है पीरियड के समय। अगर कोई दोस्त या परिवार का सदस्य साथ दे, तो दर्द सहना आसान हो जाता है। गरम पानी की थैली या पसंदीदा चीज़ दिला दें, तो और अच्छा लगता है।

मेरे पीरियड बहुत खराब रहे हैं – पूरे हफ्ते पीठ दर्द, शरीर में ऐंठन। कई बार क्लास छोड़नी पड़ी या दर्द में बैठना पड़ा।

मैं मंदिरों और त्योहारों की कई यात्राएं मिस कर चुकी हूँ – दर्द और सामाजिक टैबू की वजह से। लेकिन अब बदलाव दिख रहा है – जितनी पढ़ाई हो रही है, उतनी ही जागरूकता भी बढ़ रही है। ज़्यादा से ज़्यादा लोग अब पीरियड पर बात कर रहे हैं और जागरूकता फैला रहे हैं – यह बहुत ज़रूरी है।`},{name:"A Family’s Shared Responsibility",age:20,content:`जब मेरी माँ को पीरियड्स होते हैं, तो घर के सारे काम हम पुरुष लोग संभाल लेते हैं। मैं खाना बनाता हूँ, और मेरा भाई झाड़ू-पोंछा करता है। हम कोशिश करते हैं कि माँ को कुछ भी न करना पड़े।

मेरी बहन को भी जब पीरियड्स होते हैं, तो हम उसकी हालत समझते हैं। अगर वो चिड़चिड़ी हो या गुस्से में हो, तो हम कुछ नहीं कहते, बस चुपचाप सुन लेते हैं। मैं कोई झगड़ा नहीं करता, उल्टा चुपचाप उसकी मदद करता हूँ।

मेरी गर्लफ्रेंड या दोस्त हो, मैं हमेशा साथ देने की कोशिश करता हूँ – चॉकलेट लाना हो या जो भी वो चाहें, मुझे फर्क नहीं पड़ता। गरम पानी की बोतल दे देना हो या सिर दबा देना हो – जो कर सकूं, करता हूँ। मेरे लिए ये सब करना बिल्कुल सामान्य बात है।`},{name:"Emotional Rollercoaster During Exams",age:20,content:`मेरे पीरियड्स आने से 15 दिन पहले ही मेरा मूड बदलने लग जाता है। एग्जाम के टाइम में ज्यादा असर होता है – पढ़ाई में मन नहीं लगता, सोच-समझ भी गड़बड़ हो जाता है।

हर वक्त सुनाई देता है – नींद आ रही है, थकावट है, दर्द है। फिर भी खुद को धक्का देकर मेहनत करता हूँ ताकि पढ़ाई पर असर न पड़े।

कभी-कभी लगता है जैसे यह सब एक चक्र है – बार-बार चल रहा है। पर मैं हार नहीं मानता – जैसे भी हो, जारी रखता हूँ।`},{name:"Cycling Away the Cramps",age:19,content:`स्कूल के दिनों में हर महीने बहुत दर्द होता था। उस समय शारीरिक रूप से सक्रिय भी नहीं थी, ऊपर से शहर की हवा भी गंदी थी – शायद उसी की वजह से तकलीफ ज्यादा थी।

पर जब कॉलेज आई, तो सब बदल गया। खेलों में हिस्सा लिया और साइकिल चलाना शुरू किया – अब तो दर्द नाममात्र रह गया है।

मैं इंजीनियरिंग कॉलेज में पढ़ाई कर रही हूँ, जहां कई बार मैं अकेली लड़की होती हूँ। इस कारण मुझे हमेशा तैयार रहना पड़ता है – पैड साथ रखती हूँ। अब तो यह आदत बन गई है – बस रूटीन का हिस्सा है।`},{name:"The Cost of Dignity",age:19,content:`मेरे इलाके में मैंने देखा है कि कई गरीब परिवार पैड खरीदने को टाल देते हैं – पैसों की तंगी की वजह से। घरेलू काम करने वाली महिलाएं अक्सर साफ-सुथरे उपाय इस्तेमाल भी नहीं कर पाती हैं।

पैसों की वजह से सैनिटरी प्रोडक्ट्स तक पहुंच न होने की बात अक्सर दबा दी जाती है, पर यह महिलाओं की सेहत और इज्जत दोनों पर असर डालती है।`},{name:"Pink Room and Temples",age:19,content:`महाराष्ट्र में मैंने देखा है कि अब लोग पीरियड्स के बारे में खुलकर बात करने लगे हैं। पर एक चीज अभी भी सख्ती से लागू है – मंदिर में घुसना मना है और पूजा के सामान को छूना मना है।

स्कूल में एक "पिंक रूम" था – जहाँ लड़कियाँ आराम कर सकती थीं जब पीरियड्स हो। वहाँ पैड भी मिलते थे, जो बहुत फायदेमंद था। मैं चाहती हूँ कि हर स्कूल-कॉलेज में ऐसी सुविधा हो।`},{name:"Inclusivity Needed in Education",age:20,content:`जब तक पीरियड्स एक आम बातचीत का हिस्सा नहीं बनेंगे, तब तक यह टैबू बना रहेगा। कॉलेज में सेशन्स होते हैं – पीरियड्स पर – पर सिर्फ लड़कियों को बुलाया जाता है, लड़कों को नहीं।

इस उम्र तक लड़कियाँ तो सब जानने लगती हैं, पर लड़कों को भी बुलाना चाहिए। लड़के भी तो कल पिता बनेंगे – अगर वे समझदार होंगे, तो समाज सुधरेगा।

हमारा समाज खुद ही लड़कों को इन सेशन्स से दूर रखता है। पर अगर हम लड़कों को भी इन बातों में शामिल करें, तो वे भी समझ सकेंगे कि यह सब कुदरती है, शर्माने की बात नहीं है।`},{name:"Hidden Pain Public Shame",age:18,content:`जब मैं आठवीं क्लास में थी, तब मुझे पहली बार पीरियड्स आया। दर्द तो कोई खास नहीं था, पर मैं चाहती थी कि किसी को पता भी न चले। उस समय मेरी उम्र की ज्यादातर लड़कियाँ इस बात को लेकर शर्म महसूस करती थीं – और मैं भी। जैसे कि यह कोई गंदी चीज हो।

समय के साथ मैंने इसे सामान्य मान लिया और इसे अपनी जिंदगी का हिस्सा बना लिया। पर आज भी कई लड़कियाँ मंदिर जाने या पूजा करने को टालती हैं, क्योंकि उनके घर वाले मानते हैं कि पीरियड्स में लड़की "अपवित्र" होती है।

यह परंपरा आज भी कई घरों में चलती रहती है।`},{name:"Discrimination",age:19,content:`मैं सोचता हूँ कि मैं पीरियड्स के जैविक और शारीरिक पहलू को लेकर काफी जागरूक हूँ। जब भी मुझे पता चलता है कि कोई दोस्त या परिवार वाला पीरियड्स में है, तो मैं और ज्यादा ध्यान देने की कोशिश करता हूँ। जैसे – कुछ ना कुछ ऐसा करूँ, ताकि उनका बोझ हल्का हो जाए।

कई बार वो कुछ उल्टा-सीधा बोल भी देती हैं, मूड स्विंग या दर्द की वजह से – पर मैं मन पर नहीं लेता। और हाँ – चॉकलेट तो हमेशा तैयार रखता हूँ – चॉकलेट में कुछ तो बात है!

सबसे जरूरी बात यह है कि मैं पूरी इज्जत से पेश आऊँ, खासकर उस समय जब लड़की खुद को थोड़ा कमजोर या असहज महसूस करती है। मेरी कोशिश रहती है कि मेरी तरफ से कोई कमी न रहे।

पर अफसोस की बात है कि हर कोई ऐसे नहीं सोचता। मैंने देखा है कि आज भी कई लोग पुरानी सोच पकड़े बैठे हैं – खासकर बड़ी उम्र की महिलाएँ – जो खुद भी ऐसी ही सोच में पली-बढ़ी हैं।

एक किस्सा आज भी याद है – दिवाली के दिन का। हमारे घर में पूजा हो रही थी, और मेरी एक रिश्तेदार (महिला) हम सब से अलग बैठी थी। मैं छोटा था, समझ नहीं आया क्यों। बाद में पता चला कि वो पीरियड्स में थी, इस वजह से पूजा में बैठने को मना था। तब मुझे बहुत बुरा महसूस हुआ।

मुझे लगा कि यह परंपरा कितनी गहरी है और कितनी गलत भी। ऐसी चीजें सिर्फ जागरूकता से ही बदली जा सकती हैं। इज्जत, समझदारी और प्यार – इन तीन चीजों को अपनाया जाए, तो समाज धीरे-धीरे बदल सकता है।

खुलकर बात करना और छोटे-छोटे कदम उठाना – यही तरीका है टैबू को खत्म करने का।`}],AndhraPradesh:[{name:"Celebration Amidst Tension",age:18,content:`मेरा पहला पीरियड 7वीं क्लास में हुआ था। मुझे आज भी याद है – रविवार का दिन था। मैं जैसे ही उठी, तो देखा कि कपड़ों में खून लग गया है। मैं घबराई, क्योंकि मुझे कुछ भी नहीं पता था कि यह क्या हो रहा है।

मैंने अपनी माँ को बताया, सोचा कि मैं बीमार हूँ, पर माँ ने मुझे शांति से समझाया और मेरा हौंसला बढ़ाया।

हमारे राज्य में जब लड़की को पहली बार पीरियड आता है, तो एक खास फंक्शन होता है। सारे रिश्तेदार बुलाए जाते हैं, और पूजा-अर्चना होती है। हल्दी लगाई जाती है, आरती होती है, और दादी हर रोज़ बेसन से नहलाती हैं। बढ़िया खाना दिया जाता है और अलग बिस्तर भी मिलता है।

8वीं क्लास का एक किस्सा याद है – मेरा पीरियड अनियमित था और एक ब्रेक के टाइम अचानक शुरू हो गया। मैं बहुत असहज महसूस की और रो भी पड़ी – डर था कि कहीं कपड़े में दाग तो नहीं लग गया हो।

बाद में पापा स्कूल में लेने आए और उन्होंने मुझे बहुत समझाया – कि यह एक कुदरती प्रक्रिया है और शर्माने की कोई बात नहीं है।

पीरियड्स से मेरे रोज़ के काम ज्यादा प्रभावित नहीं होते, बस कभी-कभी दर्द होता है और ज्यादा नींद आती है।

मेरे हिसाब से अब लोगों की सोच बदल रही है – लोग अब ज्यादा समझदार हो रहे हैं। पर गाँव के कुछ हिस्सों में आज भी लोग पीरियड्स को “गंदा” मानते हैं।`},{name:"A Positive First",age:19,content:`मेरे घर और मोहल्ले में ज्यादा रोक-टोक नहीं थी, इस वजह से मैं आराम से थी और किसी चीज से डर नहीं लगा।

हमारे राज्य में जब लड़की को पीरियड आता है, तो एक छोटा फंक्शन किया जाता है, और इसे एक अच्छा संकेत माना जाता है। इसी वजह से मेरा पहला अनुभव बहुत अच्छा रहा – ना शर्म थी, ना डर।

मैं अपने रोज़ के काम बिना परेशानी के निपटाए और पूरी तरह से सपोर्ट महसूस किया।`},{name:"Isolation and Acceptance",age:19,content:`मैंने 10वीं क्लास में पहली बार पीरियड्स अनुभव किया – मेरे सारे क्लासमेट्स से लेट हुआ, इस वजह से खुद मैं असहज और डरी हुई थी।

मैं हॉस्टल में रह रही थी और एक सुबह 6 बजे माँ को फोन कर दिया – रोते हुए बताया कि खून आ रहा है। माँ बहुत खुश हुई और बोली – तू अब औरत बन गई है।

उस समय मेरी बहन को चिकनपॉक्स हो रखा था, तो माँ-बाप मुझे घर नहीं ला सके। दादी-चाचा के गाँव भेज दिया। वहाँ उनके पुराने विचारों की वजह से मैं बहुत असहज महसूस करती थी।

मैंने फर्श पर सोने की कोशिश की, भयंकर दर्द होने के बावजूद कोई मदद नहीं मिली। मुझे खुद सारा काम करना पड़ा। खाने में सिर्फ मिठाई और मिर्च मसाले मना थे।

यह सब बहुत अजीब लगा – जैसे मैं घर में रहकर भी अलग-थलग कर दी गई थी।`},{name:"Tradition of Taboos",age:18,content:`मैंने सुना है कि कई घरों में लड़की को पीरियड के टाइम रसोई में घुसने और अचार छूने से मना कर दिया जाता है। कई घरों में भगवान के सामान को छूने से भी मना है।

यह मान्यता है कि लड़की "अपवित्र" हो जाती है, जो कि लड़की की आज़ादी को रोकती है। यह रोक-टोक उसकी आत्म-इज्जत और अपनापन भी कम कर देती है।

ऐसे रीति-रिवाज दिखाते हैं कि इस विषय पर खुलकर बात करना जरूरी है, और इन पुरानी सोचों को तोड़ने की बहुत जरूरत है।`},{name:"A Royal Start, Isolated Aftermath",age:19,content:`आंध्र प्रदेश में जब किसी लड़की को पहला पीरियड होता है, तो उसे एक रानी जैसा सम्मान मिलता है – बड़ा कार्यक्रम होता है, लोग जमा होते हैं।

तीन दिन तक उसे कोई छू भी नहीं सकता, और वह एक खास जगह पर रहती है। चौथे दिन माँ और दादी उसे नहलाती हैं। पूरा परिवार इसे जश्न की तरह मनाता है – बेटी के बड़े होने की खुशी मनाई जाती है।

पर पहले पीरियड के बाद के हर पीरियड में लड़की को एक कोने में बिठा दिया जाता है, सब से अलग बैठाया जाता है, कोई उसे छू नहीं सकता – अगर छू लिया, तो हल्दी-पानी से शुद्धिकरण किया जाता है।

खास बर्तन और कपड़े दिए जाते हैं, जिन्हें खुद साफ करना पड़ता है। चौथे दिन हल्दी छिड़क कर उसे "शुद्ध" किया जाता है।

हालाँकि समय के साथ कुछ बदलाव आया है, पर यह अलग-थलग करना आज भी है – दर्द, अकेलापन और घर से दूर कर देता है।`}],WestBengal:[{name:"From Fear To Awareness",age:20,content:`मेरा पहला पीरियड थोड़ा डर और हैरानी भरा था, क्योंकि मुझे सही तरीके से समझ नहीं था कि क्या हो रहा था। हाँ, पीरियड के बारे में सुना था, लेकिन खुद अनुभव करना बिल्कुल अलग बात थी।

मैं तो शुरुआत में सोच लिया था कि मैं बीमार हूँ, इसलिये माँ-बाप को कुछ नहीं बताया। लेकिन अगले महीने मेरी दादी ने देख लिया और तभी मुझे असली जानकारी मिली। उसके बाद सब थोड़ा आसान हो गया।

अब मैं अपने खास दोस्तों और परिवार वालों से इस बारे में आराम से बात कर लेती हूँ, क्योंकि लोग अब खुले दिमाग से सोचने लगे हैं। पर कई जगह अभी भी सावधानी बरतती हूँ।

हमारे यहाँ कुछ परंपराएँ हैं – जैसे पीरियड के टाइम मंदिर और रसोई से दूर रहना। पहले जमाने में तो लड़की को अलग कमरे में बैठा दिया जाता था, लेकिन अब यह सख्ती कम हो गई है।

मेरे ख्याल से इस बारे में सोच मिली-जुली है – एक तरफ कुछ परंपराएँ जो अलगाव पैदा करती हैं, लेकिन दूसरी तरफ अब लोग समझदार भी हो रहे हैं।

कभी-कभी स्कूल में शर्म महसूस होती थी, खासकर जब छोटी थी।

सबसे बड़ी गलतफहमी यह है कि पीरियड “गंदा” या “अशुद्ध” होता है। कई लोग मानते हैं कि इस बारे में बात भी नहीं करनी चाहिए – जो कि बिल्कुल गलत है। पीरियड एक कुदरती चीज है और इस बारे में बात करना जरूरी है।

स्कूल में थोड़ी बहुत जानकारी दी गई थी, लेकिन वह बस विज्ञान तक सीमित थी। असली जानकारी माँ से मिली – कैसे हर रोज इसे संभालना है।

तब मैंने ऑनलाइन या किताबों में कुछ नहीं ढूंढा था, लेकिन बायोलॉजी की किताब काम आई। आजकल तो बहुत सारे ऑनलाइन साधन, सोशल मीडिया से भी जानकारी आसानी से मिल जाती है।

दोस्त या परिवार अगर बिना सवाल किए सपोर्ट करें – जैसे सामान दिला दें, आराम करने दे दें – तो बहुत मदद मिलती है।

हाँ, “वो टाइम ऑफ मंथ”, “मूड स्विंग” जैसे घुमा-फिरा के शब्दों की जगह सीधे “पीरियड” कहना चाहिए – तभी यह नार्मल हो पाएगा।

कई बार दर्द और भारी ब्लीडिंग की वजह से रोजमर्रा के काम मुश्किल हो जाते हैं – स्कूल, कॉलेज, घर के काम।

कई फंक्शन्स भी मिस किए हैं जब दर्द ज्यादा था।

हाँ, शहरों में सोच बदल रही है – स्कूल, एनजीओ, मीडिया पीरियड को सामान्य बना रहे हैं। पर गाँवों में अभी भी जानकारी की कमी है।

मैं चाहती हूँ कि पीरियड को नार्मल जीवन का हिस्सा माना जाए – बिना शर्म या डर के। और लड़के-पुरुष भी यह समझें – तभी वे महिलाओं को सही तरीके से सपोर्ट कर पाएंगे।`}],Telangana:[{name:"Supportive Brothers",age:18,content:`मैं दो बहनों का भाई हूँ, और बचपन से ही माँ ने मुझे पीरियड के बारे में समझाया था। शुरू में थोड़ा अजीब लगा, पर माँ ने अच्छे से समझाया कि यह तो कुदरती बात है।

अब जब मेरी बहन को पीरियड आता है, तो मैं उनके लिए पैड लेकर आता हूँ, या उन्हें अकेलापन महसूस न हो, इसका ध्यान रखता हूँ।

मुझे लगता है कि यह सब जानना एक भाई के लिए जरूरी है – और बाद में एक समझदार पति बनने के लिए और भी जरूरी है।

मेरे दोस्त भी पूछते हैं कि मैं इतना समझदार क्यों हूँ – मैं कहता हूँ, यह तो रिस्पेक्ट की बात है।`},{name:"Celebrating Womanhood Openly",age:20,content:`मेरे घर में जब किसी लड़की को पहला पीरियड आता है, तो उसे खास तरीके से मनाया जाता है। सारे रिश्तेदार और दोस्त बुला लिए जाते हैं – बढ़िया खाना, मिठाई, सब कुछ।

उस लड़की को रानी जैसा ट्रीटमेंट मिलता है – क्योंकि यह औरत बनने का पहला कदम है।
कोई शर्म या झिझक की बात नहीं है – उल्टा यह गर्व की बात है। इस खुलेपन की वजह से लड़की को अपनापन और सपोर्ट दोनों महसूस होते हैं।`},{name:"Climatic Shifts and Cycles",age:20,content:`मैं दक्षिण भारत से हूं, और वहां की गर्मी की आदत पड़ी थी – पीरियड भी सामान्य रहते थे।

पर जब मैं उत्तर भारत के हॉस्टल में आई, तो सब बदल गया। ठंडी हवा, अलग खाना, नया माहौल – मेरा शरीर गड़बड़ा गया।

पीरियड अनियमित हो गया, शरीर थका-थका रहने लगा और मन भी कमजोर सा लगने लगा।

नई जिंदगी, नया रूटीन – सब कुछ अपनाना मुश्किल हो गया। पर धीरे-धीरे खुद को समझा और ढाल लिया।`}],Assam:[{name:"Bridging Tradition and Education",age:19,content:`मेरा पहला पीरियड 11 साल की उम्र में हुआ था – एकदम नया अनुभव और बहुत डर भी लग रहा था। मैंने तुरंत अपनी माँ को बताया, क्योंकि मुझे कुछ समझ नहीं आ रहा था। माँ ने समझाया कि यह हर औरत को झेलना पड़ता है – यह एक कुदरती बात है – और इससे मुझे हिम्मत मिली।

हमारे राज्य में जब लड़की को पहला पीरियड होता है, तो बहुत धूमधाम से त्योहार की तरह मनाया जाता है। मेहमान बुलाए जाते हैं, लड़की को नए कपड़े और गहने दिए जाते हैं। उसे हमारी पारंपरिक ड्रेस – “मेखेला चादोर” – पहनाई जाती है और एक केले के पेड़ से शादी कराई जाती है।

मैं खुद नहीं जानती क्यों, पर सुना है कि यह लड़की के शरीर में आई नई उर्वरता (fertility) का प्रतीक है।

उसके बाद लड़की को कुछ दिन उपवास रखने को कहा जाता है और आराम भी दिया जाता है। पर एक चीज जरूर रहती है – पीरियड के टाइम मंदिर और रसोई में जाना मना होता है।

बाकी बात करूं, तो समाज पीरियड के बारे में थोड़ा खुला है। हम तो माँ कामाख्या को भी पूजते हैं – जो खुद साल में 6 दिन तक पीरियड में रहती हैं। जून महीने में एक बड़ा मेला लगता है – अंबुबाची मेला – और सारे साधु-संत उस मंदिर में आते हैं।

तो यह कह सकती हूं कि हमारे समाज में पीरियड के बारे में कुछ हद तक सकारात्मक सोच भी है।

मैं खुद कभी शर्मिंदा महसूस नहीं हुई – माँ-बाप बहुत सपोर्टिव रहे। स्कूल में भी जानकारी दी गई, तो हम सब ने पीरियड को नार्मल समझा।

पर गाँवों में कई लड़कियां आज भी जानकारी से वंचित हैं – और इसी वजह से उन्हें मुश्किल होती है। घर और स्कूल से शुरुआत होनी चाहिए – कि यह कोई शर्म वाली बात नहीं है – यह बिल्कुल नार्मल है जैसे हम साँस लेते हैं।

महिलाओं के लिए सफाई के सामान (sanitary products) सस्ते दामों में उपलब्ध होने चाहिए, ताकि कोई भी लड़की अपने पीरियड के कारण कोई मौका मिस न करे।

हालात पहले से काफी सुधर गए हैं, पर अभी भी बहुत लंबा रास्ता बाकी है – जब हर लड़की को पीरियड के डर, शर्म और तकलीफ से आज़ादी मिलेगी।

यह तभी हो सकता है – जब पुरुष और महिलाएं दोनों मिलकर जागरूकता फैलाएं और पीरियड को एक कुदरती प्रक्रिया के तौर पर अपनाएं।`}],Bihar:[{name:"Clueless and Awkward",age:19,content:`मैंने पीरियड के बारे में कुछ भी नहीं पता था, जब तक स्कूल में लड़कियां "उस टाइम ऑफ मंथ" की बात नहीं करने लगीं। मैं शर्म के कारण किसी से पूछ भी नहीं पाई – सीधा गूगल कर लिया।

आज भी जब कोई पीरियड की बात करता है, तो मुझे थोड़ा अजीब लगता है। हमारे घर में कभी खुलकर इस बारे में बात नहीं हुई, और मैं आज भी नहीं समझ पाई हूं कि इस बात को इतना बड़ा मुद्दा क्यों बनाया जाता है।

काश! कोई पहले मुझे समझा देता।`}],Uttrakhand:[{name:"Unspoken but Understood",age:18,content:`हमारे घर में पीरियड की बात ज्यादा नहीं होती है। मैं सिर्फ अपनी माँ से इस बारे में बात करती हूं। पापा को शायद सब कुछ पता है, क्योंकि माँ ने उन्हें बताया होगा, पर मैंने कभी खुद उनसे कुछ नहीं कहा।

ऐसा लगता है जैसे घर में एक अनकहा नियम है – पैड को छुपाकर लाओ, या इस तरह से मत दिखाओ जैसे कुछ खास चीज हो।

मंदिर में जाने पर सख्त मना तो नहीं है, पर माँ कहती है कि पीरियड में मंदिर मत जाओ। अचार और तीखा खाना भी मना किया जाता है। और नहाने के बाद माँ कहती है कि कुछ खा लो – चाहे एक दाना चावल का या रोटी का टुकड़ा ही क्यों न हो।

इन सब रीति-रिवाजों में कोई नफरत या गंदगी वाली सोच तो नहीं है, पर खुलकर इस बारे में बात न करना – यही सबसे बड़ी दिक्कत है।

ऐसा लगता है जैसे सब जानते हैं, पर बोलना गुनाह हो। और यह चुप्पी ही असली परेशानी बन जाती है।`}],Punjab:[{name:"Confusion and Customs",age:22,content:`मेरे पहले पीरियड चौथी क्लास में आये थे, और किसी ने ये नहीं समझाया कि ये क्या हो रहा है। बस इतना बताया गया कि किसी के सामने ये बात नहीं करनी। इस बात से मुझे बिना समझे ही शर्मिंदगी महसूस हुई। आठवीं क्लास तक जब मेरी सहेलियां भी पीरियड्स के बारे में बात करने लगीं, तब मैंने भी खुलकर बात करनी शुरू की।

पीरियड्स के लिए कुछ अजीब रीत-रिवाज भी हैं। जब मेरे पीरियड्स होते हैं, तो मुझे मंदिर में जाने की इजाजत नहीं मिलती। मेरी माँ तुलसी के पौधे को पानी भी नहीं देतीं, कहती हैं कि ये मुरझा जाएगा। अचार से भी दूर रहना पड़ता है, ताकि वो खराब न हो जाए।

मेरी एक सहेली महाराष्ट्र से है, और उसने तो और भी सख्त नियम झेले हैं — पीरियड्स में ना तो बिस्तर पर सोने की इजाजत, ना रसोई में जाने की, और ना ही त्योहारों में भाग लेने की।

दूसरी तरफ, एक और सहेली थी जिसने पहले ही पीरियड्स के बारे में सब समझ रखा था। जब उसे पहली बार पीरियड्स आये, तो उसे ज्यादा दिक्कत नहीं हुई, क्योंकि उसने पहले ही जानकारी ले रखी थी। इस बात से समझ आता है कि ये सोच समाज में इतनी गहराई से बैठी हुई है कि चाहे कोई कुछ कहे भी न, फिर भी हम खुद-ब-खुद पूजा-पाठ से दूर रहना शुरू कर देते हैं।

ऊपर से टैम्पोन या पैड उठाने में भी शर्म आती है, जैसे कि ये कोई गंदी चीज हो। पब्लिक में पैड छुपाकर रखना भी इस शर्म का हिस्सा है।`},{name:"Secrecy’s Lasting Impact",age:21,content:`जब मैं बड़ी हो रही थी, तो सबसे परेशान करने वाली बात यह थी कि घर में पैड को हमेशा छुपा कर रखा जाता था। कई बार मैंने पैड बाथरूम में रख दिया या कहीं ऐसे रखा जहां आसानी से मिल जाए, पर मेरी मम्मी ने देख लिया तो डांट पड़ी। खासकर अगर पापा देख लेते, तो और भी बुरा लगता।

मुझे समझ नहीं आता था कि मेरी सेहत और जरूरत की चीज को इतने छुपा कर क्यों रखा जाता है। पैड ही नहीं, पीरियड्स से जुड़ी कोई भी बात करना मुश्किल हो जाता।

कभी कुछ तकलीफ हो तो कहना मुश्किल हो जाता — जैसे दर्द हो, या कुछ अलग हो, और डॉक्टर को दिखाने की बात करो तो चुप कर दिया जाता, जैसे यह कोई बहुत बड़ी बात हो।

आखिरकार मैंने खुद डॉक्टर से ऑनलाइन बात करनी शुरू की, या अपनी फ्रेंड की मम्मी से सलाह ले ली। एक साल तक मुझे फंगल इन्फेक्शन हो रखा था, लेकिन घर वालों ने ध्यान ही नहीं दिया।

यह सब छिपाने, शर्म और बात न करने का असर मेरी सेहत पर बहुत पड़ा। तब मुझे समझ आया कि खुलकर बात करना बहुत जरूरी है।`},{name:"Breaking Barriers in Uttar Pradesh",age:21,content:`हमारे उत्तर प्रदेश में अब बात करने का चलन थोड़ा-बहुत शुरू हो रहा है, पर अभी भी पीरियड्स पर खुले में बात करना बहुत मुश्किल है।

अक्सर घर में यह टॉपिक लड़कों से छुपाया जाता है। पर मेरा मानना है कि लड़कों को भी पीरियड्स के बारे में जानना चाहिए ताकि वे अपनी बहनों और बीवियों को समझ सकें।

बहुत सारी पाबंदियां भी लगाई जाती हैं — मंदिर में जाना मना, अचार न छूना, त्योहारों में भाग न लेना, चाहे लड़की खुद बिल्कुल फिट हो। कहा जाता है कि यह सब उसके भले के लिए है, पर सच्चाई यह है कि यह सिर्फ पाबंदी है।

औरतें चुप रहती हैं, दर्द सहती हैं, पर कह कुछ नहीं सकतीं। मैं चाहती हूं कि एक ऐसा समय आए जब पीरियड्स पर खुलकर बात हो, बिना किसी शर्म के।`},{name:"Temples and Taboo",age:20,content:`उत्तर प्रदेश में पीरियड्स पर बात करना अब भी टेढ़ी खीर है। मंदिर में जाना, पूजा में बैठना मना हो जाता है।

एक बार मुझे वृंदावन में मंदिर जाना था, और पीरियड्स आ गए। दूसरे दिन मुझे मंदिर में नहीं घुसने दिया — बहुत बुरा लगा, जैसे मुझे बाहर कर दिया गया।

मैं आज तक अपने पापा या भाई से पीरियड्स पर बात नहीं कर पाई। पर मुझे लगता है कि लड़कों को खुद आगे बढ़कर ऐसा माहौल बनाना चाहिए, जिसमें लड़कियां खुलकर बात कर सकें।`},{name:"Early Education, Early Acceptance",age:18,content:`मेरे स्कूल में पीरियड्स पर पहले ही अवेयरनेस क्लास हो चुकी थी। इस कारण जब मुझे पहली बार पीरियड्स आए, मुझे कोई डर नहीं लगा, न शर्म।

हम खुलकर बात किया करते थे, स्कूल में, सहेलियों के बीच। अगर हर स्कूल ऐसा करे, तो बहुत सी लड़कियां जो डरती हैं, उन्हें हिम्मत मिल जाएगी।`}],Kerala:[{name:"Normalizing Periods in Friend Groups",age:20,content:`मेरे दोस्तों के बीच पीरियड्स पर खुलकर बात हो जाती है। एक बार मेरी एक सहेली को इवेंट के बीच में बहुत तेज दर्द हुआ। पर हम सब ने मिलकर मदद की — मैंने बिना हिचक के उसके लिए पैड लाया।

उस मौके को देखकर मेरी सोच बदल गई। यह कोई शर्म की बात नहीं है — दोस्त होने का मतलब ही यह है कि एक-दूसरे की मदद की जाए, चाहे दर्द हो या कोई जरूरत।

अब मैं अपने लड़के दोस्तों से भी कहता हूं कि इस बारे में समझदारी दिखाओ। खुलकर बात करो। अगर किसी को दर्द हो रहा है, तो मदद करना जरूरी है।`}],Odisha:[{name:"Silent Discomfort",age:17,content:`मैंने पीरियड्स के बारे में कुछ भी नहीं जाना, जब तक दसवीं क्लास में बायोलॉजी की क्लास में टीचर ने थोड़ा बहुत बताया। पर वह भी ऐसे ही झटपट निपटा दिया।

घर में मेरी बहन अपने पैड छुपाकर रखती है, और मुझे पूछने की भी इजाजत नहीं है। एक बार गलती से मैंने एक पैड छू लिया, तो मम्मी-पापा ने डांट दिया — जैसे मैंने कोई बड़ी गलती कर दी हो।

यह टॉपिक ऐसा बना दिया गया है जैसे बोलना भी गलत हो। घर का माहौल ऐसा है जैसे कुछ बहुत गंदी चीज हो — बस बात ही मत करो।

मैं बस चाहता हूं कि कोई खुले में समझाए, खुलकर बात हो इस बारे में, जैसे बाकी चीजों पर होती है।`}],Gujarat:[{name:"Father’s Support, Society’s Stigma",age:19,content:`गुजरात में ज्यादातर लोग — खासकर औरतें — पीरियड्स पर मर्दों से बात करने में हिचकिचाती हैं। लेकिन मेरा घर थोड़ा अलग है।

मेरे बाबूजी और भाई बहुत सपोर्टिव हैं। पीरियड्स के समय मेरी हर चीज़ का ध्यान रखते हैं — मुझे बहुत अच्छा लगता है।

मेरी मम्मी की पीढ़ी की महिलाएं अब भी इस टॉपिक पर मर्दों से बात करने में असहज हैं। लेकिन मुझे लगता है कि अगर मर्द इस बारे में समझदार हो जाएं, तो घर का माहौल ही बदल जाएगा।`},{name:"Silent Struggles, Open Conversations",age:19,content:`मेरे पीरियड्स जब पहली बार आए, मुझे पहले ही जानकारी थी — क्योंकि मैं अपनी फ्रेंड्स में सबसे आखिरी थी जिसे पीरियड्स आए। उस समय हम मंदिर गए हुए थे, और जब घर वापस आए, तो मुझे पता चला।

मेरी मम्मी ने मदद की और सब समझाया।

पहले स्कूल में मुझे पीरियड्स पर बात करना अजीब लगता था। लेकिन अब मैं परिवार और दोस्तों से खुलकर बात करती हूँ।

हमारे यहाँ कुछ परंपराएं हैं — जैसे पीरियड्स में पानी ना छूना, रसोई से दूर रहना, मंदिर ना जाना, खट्टी चीज़ें ना खाना, बाल ना धोना।

कहा जाता है कि ये सब सेहत के लिए है — आराम मिल जाता है। मुझे दौड़-भाग कम कर दी जाती है ताकि आराम मिल सके।

मुझे ज्यादा दर्द नहीं होता, बस मूड स्विंग्स हो जाते हैं — एक समय गुस्सा, दूसरे समय हंसी।

अब सोशल मीडिया और वेबसाइट्स से जानकारी मिल जाती है। चीजें बदल रही हैं, और मुझे लगता है कि आगे और बदलाव आएगा।`}],MadhyaPradesh:[{name:"Teaching Men, Changing Minds",age:20,content:`आज भी पीरियड्स पर बात करना कई जगह टैबू है, लेकिन मेरी कहानी थोड़ी अलग है। मेरी मम्मी ने पहली पीरियड्स से पहले ही सब समझा दिया था। जब मुझे पीरियड्स आए, तो उन्होंने मेरी पूरी मदद की।

पर मम्मी ने खास कहा था कि पापा को ना बताना। मुझे यह बात बेवजह लगी।

फिर मैंने सोचा कि अपने भाई को खुद समझाऊं। जब मैंने उससे बात की, तो उसने बहुत अच्छे से समझा और कोई भी नकारात्मक प्रतिक्रिया नहीं दी।

घर में मंदिर वगैरह में जाना मना है उस समय, लेकिन मुझे लगता है कि यह आध्यात्मिक सोच है — और घर में इस चीज़ पर कोई शर्म नहीं है।

दूसरे जगहों की बातें सुनते हैं कि औरतों को बुरा व्यवहार झेलना पड़ता है पीरियड्स में, लेकिन मुझे ऐसा कुछ महसूस नहीं हुआ।

मुझे पूरा विश्वास है कि हम नई पीढ़ी को समझा कर इस टैबू को खत्म कर सकते हैं।`},{name:"Hostel Stories and Home Realities",age:20,content:`जब से मुझे पीरियड्स शुरू हुए, तब से मुझे घर में कोई दिक्कत नहीं हुई। लेकिन जब मैं हॉस्टल गई, तो दूसरों की बातें सुनकर झटका लगा।

कुछ फ्रेंड्स ने बताया कि उन्हें किचन में जाने की मनाही थी, कुछ को दूर बैठाया जाता था।

मुझे याद है जब मुझे चिकनपॉक्स हो गया था, तब मुझे भी उन औरतों से दूर बैठाया गया जो पीरियड्स में थीं — जैसे पीरियड्स कोई बीमारी हो।

लेकिन मैं किस्मत वाली रही — मेरे घर में ऐसी परंपराएं नहीं थीं।`},{name:"Routine Rules, No Shame",age:20,content:`मेरे घर में पीरियड्स के टाइम कुछ नियम जरूर होते हैं — जैसे रसोई में न जाना, मंदिर में न घुसना।

तीसरे दिन बाल धोने, कंबल-तकिया धोने, सब कुछ करना पड़ता है।

लेकिन इसमें कोई शर्म या गंदगी वाली सोच नहीं होती — बस यह रीति-रिवाज की तरह होता है। इसलिए मुझे कभी बुरा नहीं लगता। घर में हर चीज को एक नेचुरल चीज की तरह माना जाता है।`},{name:"School’s Role in Breaking Stigma",age:18,content:`आज भी लोग पीरियड्स पे खुलकर बात नहीं करते। स्कूल में अगर कभी जानकारी दी भी जाती है, तो वो इतनी जल्दी में होती है कि मजाक बन जाती है।

लड़कियाँ खुद हंसी में उड़ा देती हैं — ध्यान कम और हिचक ज्यादा होती है।

अगर स्कूल थोड़ा खुला और समझदारी से समझाए, तो लड़कियाँ भी खुलकर सवाल पूछ सकें।`}],Karnataka:[{name:"City Freedom vs Village Constraints",age:19,content:`मैं एक मेट्रो शहर में बड़ी हुई, तो मुझे कभी ज्यादा टैबू महसूस नहीं हुआ पीरियड्स को लेकर। पर जब मैं अपने गांव (आंध्र प्रदेश) गई, तो असली फर्क दिखा।

वहां बहुत सी औरतों को सैनिटरी पैड्स तक नहीं मिलते। कपड़ा इस्तेमाल करना, और पीरियड्स के टाइम गंदगी झेलना — सब आम बात है।

मैंने खुद कोई भेदभाव महसूस नहीं किया, पर मैंने दूसरों की हालत देख कर बहुत दुख हुआ। समाज में अभी भी पीरियड्स को “गंदा” या “अपवित्र” समझा जाता है।

मैं चाहती हूँ कि औरतें खुलकर बात कर सकें — हर गांव-शहर में जागरूकता हो।`}],TamilNadu:[{name:"Celebration with Restriction",age:20,content:`जब मुझे पहली बार पीरियड्स आए, तो समझ ही नहीं आ रहा था कि हो क्या रहा है। लोग खुश भी हो रहे थे, पर मैं तो हक्का-बक्का रह गई।

अपनी सहेलियों और परिवार से बात करने में तो कोई दिक्कत नहीं हुई, पर लोगों की बात करने की टोन बड़ी सीधी और 'शालीन' थी।

कहने को तो छोटा-मोटा जश्न हुआ — तोहफे वगैरह मिले, पर साथ में रोक-टोक भी। मंदिर में ना जाना, पूजा ना करना — अरे भाई, आज के टाइम में भी ये सब?

अगर कभी कपड़े पे दाग लग जाए, तो शर्म आ जाए — जैसे कुछ गलत हो गया।

स्कूल से पहले कुछ खास जानकारी नहीं थी — खुद भुगत के ही सीखा। अब सोचती हूँ कि स्कूल में खुलकर बात होनी चाहिए — मीटिंग्स, सेशंस आदि।

पीरियड्स का मजाक ना उड़ाया जाए — मर्द औरत में फर्क करने का जरिया ना बने इस बात से।`}],Delhi:[{name:"Periods and Policy Change",age:27,content:`Delhi
1. पॉलिसी बदलो, नजरिया बदलैगा (Periods and Policy Change)
उम्र: 27 साल

भारत में आज भी पीरियड्स को लेकर पुरानी सोच बनी हुई है — मंदिर में न जाना, शर्म की बात बनाना।

कुछ स्कूल अवेयरनेस वर्कशॉप करवाते हैं — यह अच्छा है। लेकिन जो अनपढ़ लोग हैं, वे इन चीजों तक नहीं पहुंच पाते।

सरकारी स्तर पर भी सपोर्ट कम है। मुझे लगता है कि लड़कियों और महिलाओं को हर महीने 3 दिन की छुट्टी मिलनी चाहिए — चाहे स्कूल हो या काम।

आईआईटी में ऐसा कुछ था, लेकिन यह हर जगह लागू होना चाहिए।`},{name:"Family Mentality and Menstrual Shame",age:19,content:`शर्म की शुरुआत घर से होती है। स्कूल तो कोशिश करता है समझाने की, पर बचपन की सीखें हमें चुप करवा देती हैं।

लड़कियां खुद आपस में भी बात करने में झिझकती हैं।

अगर छुट्टी लेनी हो, तो असली कारण बताना भी मुश्किल हो जाता है — शर्म आती है।

लड़के आज भी बस इतना जानते हैं कि महीने में एक बार खून आता है — दर्द, मूड स्विंग, कमजोरी के बारे में कुछ नहीं जानते।

इसलिए जरूरी है कि लड़कों और लड़कियों दोनों को एक जैसी जानकारी मिले, ताकि समझदारी और इज्जत से बात हो सके।`}]}};const fN=[{code:"en",name:"English"},{code:"hi",name:"Hindi"},{code:"te",name:"Telugu"},{code:"mr",name:"Marathi"},{code:"ha",name:"Haryanvi"}];function mN(){var v;const[t,e]=M.useState("en"),[n,r]=M.useState("light"),[i,o]=M.useState({}),[s,l]=M.useState(1),[u,h]=M.useState("");console.log("Active Lang:",t),console.log("Available States:",Object.keys(vo[t]||{})),console.log("realStories['ha']",vo.ha),console.log("realStories['te']",vo.te);const f=((v=vo[t])==null?void 0:v[u])||[],p=Object.keys(vo[t]||{}),y=5,k=Math.ceil(f.length/y),C=f.slice((s-1)*y,s*y),N=(w,x)=>{o(V=>{var j;return{...V,[w]:{...V[w],[x]:(((j=V[w])==null?void 0:j[x])||0)+1}}})},D=()=>{navigator.clipboard.writeText(window.location.href),alert("Page link copied!")},_=()=>{window.print()};return P.createElement("div",{className:`read-page ${n}`},P.createElement("div",{className:"read-header"},P.createElement("h2",null,"📚 Read Real Stories"),P.createElement("button",{className:"theme-toggle",onClick:()=>r(n==="light"?"dark":"light")},n==="light"?"🌙 Dark":"🌞 Light")),P.createElement("div",{className:"language-buttons"},fN.map(w=>P.createElement("button",{key:w.code,className:t===w.code?"active":"",onClick:()=>{e(w.code),h(""),l(1)}},w.name))),P.createElement("div",{className:"state-select"},P.createElement("label",null,"Select State:"),P.createElement("select",{value:u,onChange:w=>{h(w.target.value),l(1)}},P.createElement("option",{value:""},"-- Choose --"),p.map(w=>P.createElement("option",{key:w,value:w},w)))),C.map((w,x)=>{var V,j,I;return P.createElement("div",{className:"story-card",key:x},P.createElement("div",{className:"story-header"},P.createElement("div",{className:"avatar"},w.name[0]),P.createElement("div",null,P.createElement("h3",null,w.name,", ",w.age),P.createElement("p",{className:"lang-state"},t.toUpperCase()," • ",u))),P.createElement("p",{className:"story-text"},w.content),P.createElement("div",{className:"story-actions"},P.createElement("button",{onClick:()=>N(x,"like")},"❤️ ",((V=i[x])==null?void 0:V.like)||0),P.createElement("button",{onClick:()=>N(x,"love")},"💖 ",((j=i[x])==null?void 0:j.love)||0),P.createElement("button",{onClick:()=>N(x,"support")},"🤝 ",((I=i[x])==null?void 0:I.support)||0),P.createElement("button",{onClick:D},"📎 Copy Link"),P.createElement("button",{onClick:_},"🖨️ Print")))}),k>1&&P.createElement("div",{className:"pagination"},P.createElement("button",{onClick:()=>l(w=>Math.max(1,w-1))},"◀ Prev"),P.createElement("span",null,"Page ",s," of ",k),P.createElement("button",{onClick:()=>l(w=>Math.min(k,w+1))},"Next ▶")))}function pN(){const[t,e]=M.useState(!1),n=()=>e(!t);return P.createElement("div",{className:"info-container"},P.createElement("button",{className:"toggle-button-top",onClick:n},t?"Hide Myths":"Show Menstrual Myths"),P.createElement("section",{className:"about-section"},P.createElement("h2",{className:"section-title"},"Understanding Menstruation"),P.createElement("div",{className:"section-content"},P.createElement("p",null,"The menstrual cycle is a biological process that prepares the female body for pregnancy. It includes menstruation, ovulation, and hormonal shifts. The cycle typically lasts between 28 to 35 days and can vary from person to person."),P.createElement("div",{className:"image-container"},P.createElement("img",{src:"https://www.verywellhealth.com/thmb/5nFHcokyfOlmvSFEQwFZbILjJfc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LutealPhase-final-34f3515f58e744798cebbf4986581591.png",alt:"Menstrual Cycle",className:"cycle-image"})),P.createElement("p",null,"Girls and women may experience emotional and physical symptoms like cramps, fatigue, and mood swings. It's important to talk openly about it and break the stigma that surrounds menstruation."))),P.createElement("section",{className:"societal-views-section"},P.createElement("h2",{className:"section-title"},"Societal Views on Menstruation"),P.createElement("div",{className:"section-content"},P.createElement("p",null,"Across many societies, menstruation is still considered a taboo topic. In some cultures, menstruating women are seen as impure and are excluded from religious ceremonies, social events, and even daily activities. These outdated beliefs not only create stigma but also hinder women from accessing proper menstrual care and support."))),P.createElement("section",{className:"cycle-phases-section"},P.createElement("h2",{className:"section-title"},"Phases of the Menstrual Cycle"),P.createElement("div",{className:"cycle-phases"},[{title:"Menstruation",img:"https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-first-phase.jpg",desc1:"The shedding of the uterine lining, typically lasting 3-7 days.",desc2:"Hormone levels drop, which causes the lining to shed."},{title:"Follicular Phase",img:"https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-follicular-phase.jpg",desc1:"Lasts from end of menstruation to ovulation. Hormones rise.",desc2:"FSH triggers follicle growth; one matures into an egg."},{title:"Ovulation",img:"https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-ovulation-phase.jpg",desc1:"A mature egg is released from the ovary around day 14.",desc2:"Peak fertility phase; the egg may get fertilized."},{title:"Luteal Phase",img:"https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-luteal-phase.jpg",desc1:"After ovulation, body prepares for possible pregnancy.",desc2:"If no fertilization, hormone levels drop, leading to menstruation."}].map((r,i)=>P.createElement("div",{className:"phase",key:i},P.createElement("img",{src:r.img,alt:r.title,className:"phase-image"}),P.createElement("h3",null,r.title),P.createElement("p",null,r.desc1),P.createElement("p",null,r.desc2))))),P.createElement("section",{className:"menstrual-health-tips"},P.createElement("h2",{className:"section-title"},"Menstrual Health Tips"),P.createElement("ul",null,P.createElement("li",null,"Eat nutritious food and stay hydrated."),P.createElement("li",null,"Exercise to reduce cramps and fatigue."),P.createElement("li",null,"Use clean and suitable sanitary products."),P.createElement("li",null,"Track your cycle regularly."),P.createElement("li",null,"Consult a doctor for persistent pain or irregularities."))),P.createElement("section",{className:"breaking-stigma"},P.createElement("h2",{className:"section-title"},"Breaking the Stigma"),P.createElement("p",null,"Menstruation is a natural process but often treated as taboo. Open discussions help normalize it and create supportive spaces for everyone who menstruates.")),P.createElement("section",{className:"call-to-action"},P.createElement("h2",{className:"section-title"},"Join the Conversation"),P.createElement("p",null,"Share your stories, spread awareness, and educate others. Together, we can remove the shame and encourage menstrual health.")),t&&P.createElement("section",{className:"myth-busting-section"},P.createElement("h2",{className:"section-title"},"Common Menstrual Myths"),P.createElement("div",{className:"myth-list"},[{title:"You Can't Get Pregnant During Your Period",truth:"It's rare but possible, especially with a short cycle."},{title:"Menstrual Blood is Unclean",truth:"It's a mix of blood and uterine tissue—completely natural."},{title:"Periods Should Only Last 3 Days",truth:"A normal period lasts 3–7 days. Everyone is different."},{title:"You Shouldn’t Exercise on Your Period",truth:"Light to moderate activity can ease cramps and help mood."},{title:"You Can’t Swim During Your Period",truth:"With proper protection like tampons or cups, it's safe."},{title:"Tampons Can Get Lost Inside",truth:"Tampons can't pass the cervix and can’t get lost."},{title:"Menstruating Women Should Avoid Religious Places",truth:"This is a cultural belief, not a biological necessity."},{title:"All Women Have Painful Periods",truth:"Some do, some don’t. Severity varies greatly."},{title:"Menstrual Cycles are Always Regular",truth:"Cycles can vary due to stress, health, or lifestyle."}].map((r,i)=>P.createElement("div",{className:"myth",key:i},P.createElement("h3",{className:"myth-title"},"Myth: ",r.title),P.createElement("p",null,P.createElement("strong",null,"Truth:")," ",r.truth))))))}var $0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kg=P.createContext&&P.createContext($0),gN=["attr","size","title"];function yN(t,e){if(t==null)return{};var n=vN(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function vN(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl.apply(this,arguments)}function Gg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ol(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gg(Object(n),!0).forEach(function(r){wN(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wN(t,e,n){return e=_N(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _N(t){var e=EN(t,"string");return typeof e=="symbol"?e:e+""}function EN(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function z0(t){return t&&t.map((e,n)=>P.createElement(e.tag,Ol({key:n},e.attr),z0(e.child)))}function Ns(t){return e=>P.createElement(IN,xl({attr:Ol({},t.attr)},e),z0(t.child))}function IN(t){var e=n=>{var{attr:r,size:i,title:o}=t,s=yN(t,gN),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),P.createElement("svg",xl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:Ol(Ol({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&P.createElement("title",null,o),t.children)};return Kg!==void 0?P.createElement(Kg.Consumer,null,n=>e(n)):e($0)}function TN(t){return Ns({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function SN(t){return Ns({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function kN(t){return Ns({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(t)}function AN(t){return Ns({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function CN(t){return Ns({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function PN(){return P.createElement("div",{className:"contact-wrapper"},P.createElement("div",{className:"contact-card"},P.createElement("h2",{className:"contact-title"},"📬 Contact Us"),P.createElement("p",{className:"contact-info"},P.createElement(AN,{className:"icon"})," Email:"," ",P.createElement("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=tonisha@iitj.ac.in",target:"_blank",rel:"noopener noreferrer"},"Prof. Tonisha Guin")),P.createElement("p",{className:"contact-info"},P.createElement(CN,{className:"icon"})," Address: IIT JODHPUR, Rajasthan, India"),P.createElement("div",{className:"social-links"},P.createElement("span",null,"💬 Follow us:"),P.createElement("div",{className:"social-icons"},P.createElement("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer"},P.createElement(SN,null)),P.createElement("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer"},P.createElement(kN,null)),P.createElement("a",{href:"https://github.com",target:"_blank",rel:"noreferrer"},P.createElement(TN,null)))),P.createElement("form",{className:"contact-form",onSubmit:t=>t.preventDefault()},P.createElement("h3",null,"📨 Send us a message"),P.createElement("input",{type:"text",placeholder:"Your Name",required:!0}),P.createElement("input",{type:"email",placeholder:"Your Email",required:!0}),P.createElement("textarea",{placeholder:"Your Message",rows:"4",required:!0}),P.createElement("button",{type:"submit"},"Send Message"))),P.createElement("div",{className:"map-container"},P.createElement("iframe",{title:"IIT Jodhpur Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0050473686457!2d73.1118267!3d26.4689006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5ea672337b%3A0xb6c9a5a9b08db22e!2sIndian%20Institute%20of%20Technology%20(IIT)%2C%20Jodhpur!5e0!3m2!1sen!2sin!4v1686055583363!5m2!1sen!2sin",width:"100%",height:"350",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})))}function RN(){return P.createElement(dS,null,P.createElement("div",{className:"navbar"},P.createElement("h1",{className:"logo"},"Menstrual Reviews"),P.createElement("nav",{className:"toolbar"},P.createElement(wr,{to:"/",className:({isActive:t})=>t?"nav-link active":"nav-link"},"🏠 Home"),P.createElement(wr,{to:"/login",className:({isActive:t})=>t?"nav-link active":"nav-link"},"🔐 Login"),P.createElement(wr,{to:"/submit",className:({isActive:t})=>t?"nav-link active":"nav-link"},"✍️ Share Your Story"),P.createElement(wr,{to:"/stories",className:({isActive:t})=>t?"nav-link active":"nav-link"},"📚 Explore Stories"),P.createElement(wr,{to:"/info",className:({isActive:t})=>t?"nav-link active":"nav-link"},"💡 Menstrual Info"),P.createElement(wr,{to:"/contact",className:({isActive:t})=>t?"nav-link active":"nav-link"},"📞 Contact Us"))),P.createElement("div",{className:"page-container"},P.createElement($T,null,P.createElement(vr,{path:"/",element:P.createElement(ES,null)}),P.createElement(vr,{path:"/login",element:P.createElement(hN,null)}),P.createElement(vr,{path:"/submit",element:P.createElement(dN,null)}),P.createElement(vr,{path:"/stories",element:P.createElement(mN,null)}),P.createElement(vr,{path:"/info",element:P.createElement(pN,null)}),P.createElement(vr,{path:"/contact",element:P.createElement(PN,null)}))))}kc.createRoot(document.getElementById("root")).render(P.createElement(P.StrictMode,null,P.createElement(RN,null)));
