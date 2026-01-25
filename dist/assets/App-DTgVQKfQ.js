import{r as u,R as ot,j as r,c as Gt,l as Fe,u as Pe,d as K,a as ai,b as ii,t as _d,s as Md,e as Ko,f as Dn,g as Fd,h as $t,i as ci,k as Wd}from"./index--rUSfHhJ.js";var li={exports:{}},di={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sn=u;function Vd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bd=typeof Object.is=="function"?Object.is:Vd,Ud=sn.useState,Hd=sn.useEffect,qd=sn.useLayoutEffect,Kd=sn.useDebugValue;function Yd(e,t){var n=t(),o=Ud({inst:{value:n,getSnapshot:t}}),s=o[0].inst,a=o[1];return qd(function(){s.value=n,s.getSnapshot=t,qr(s)&&a({inst:s})},[e,n,t]),Hd(function(){return qr(s)&&a({inst:s}),e(function(){qr(s)&&a({inst:s})})},[e]),Kd(n),n}function qr(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bd(e,n)}catch{return!0}}function Gd(e,t){return t()}var Xd=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Gd:Yd;di.useSyncExternalStore=sn.useSyncExternalStore!==void 0?sn.useSyncExternalStore:Xd;li.exports=di;var Ds=li.exports;const ui=0,pi=1,fi=2,Ps=3;var Os=Object.prototype.hasOwnProperty;function wo(e,t){var n,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((o=e.length)===t.length)for(;o--&&wo(e[o],t[o]););return o===-1}if(!n||typeof e=="object"){o=0;for(n in e)if(Os.call(e,n)&&++o&&!Os.call(t,n)||!(n in t)||!wo(e[n],t[n]))return!1;return Object.keys(t).length===o}}return e!==e&&t!==t}const mt=new WeakMap,gt=()=>{},ze=gt(),hr=Object,de=e=>e===ze,Xe=e=>typeof e=="function",yt=(e,t)=>({...e,...t}),hi=e=>Xe(e.then),Kr={},Hn={},Yo="undefined",Pn=typeof window!=Yo,$o=typeof document!=Yo,Jd=Pn&&"Deno"in window,Zd=()=>Pn&&typeof window.requestAnimationFrame!=Yo,mi=(e,t)=>{const n=mt.get(e);return[()=>!de(t)&&e.get(t)||Kr,o=>{if(!de(t)){const s=e.get(t);t in Hn||(Hn[t]=s),n[5](t,yt(s,o),s||Kr)}},n[6],()=>!de(t)&&t in Hn?Hn[t]:!de(t)&&e.get(t)||Kr]};let No=!0;const Qd=()=>No,[So,jo]=Pn&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[gt,gt],eu=()=>{const e=$o&&document.visibilityState;return de(e)||e!=="hidden"},tu=e=>($o&&document.addEventListener("visibilitychange",e),So("focus",e),()=>{$o&&document.removeEventListener("visibilitychange",e),jo("focus",e)}),nu=e=>{const t=()=>{No=!0,e()},n=()=>{No=!1};return So("online",t),So("offline",n),()=>{jo("online",t),jo("offline",n)}},ru={isOnline:Qd,isVisible:eu},ou={initFocus:tu,initReconnect:nu},Ls=!ot.useId,tn=!Pn||Jd,su=e=>Zd()?window.requestAnimationFrame(e):setTimeout(e,1),sr=tn?u.useEffect:u.useLayoutEffect,Yr=typeof navigator<"u"&&navigator.connection,zs=!tn&&Yr&&(["slow-2g","2g"].includes(Yr.effectiveType)||Yr.saveData),qn=new WeakMap,au=e=>hr.prototype.toString.call(e),Gr=(e,t)=>e===`[object ${t}]`;let iu=0;const Eo=e=>{const t=typeof e,n=au(e),o=Gr(n,"Date"),s=Gr(n,"RegExp"),a=Gr(n,"Object");let i,c;if(hr(e)===e&&!o&&!s){if(i=qn.get(e),i)return i;if(i=++iu+"~",qn.set(e,i),Array.isArray(e)){for(i="@",c=0;c<e.length;c++)i+=Eo(e[c])+",";qn.set(e,i)}if(a){i="#";const d=hr.keys(e).sort();for(;!de(c=d.pop());)de(e[c])||(i+=c+":"+Eo(e[c])+",");qn.set(e,i)}}else i=o?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return i},Go=e=>{if(Xe(e))try{e=e()}catch{e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Eo(e):"",[e,t]};let cu=0;const Co=()=>++cu;async function gi(...e){const[t,n,o,s]=e,a=yt({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let i=a.populateCache;const c=a.rollbackOnError;let d=a.optimisticData;const l=x=>typeof c=="function"?c(x):c!==!1,p=a.throwOnError;if(Xe(n)){const x=n,b=[],h=t.keys();for(const f of h)!/^\$(inf|sub)\$/.test(f)&&x(t.get(f)._k)&&b.push(f);return Promise.all(b.map(m))}return m(n);async function m(x){const[b]=Go(x);if(!b)return;const[h,f]=mi(t,b),[y,w,g,N]=mt.get(t),$=()=>{const R=y[b];return(Xe(a.revalidate)?a.revalidate(h().data,x):a.revalidate!==!1)&&(delete g[b],delete N[b],R&&R[0])?R[0](fi).then(()=>h().data):h().data};if(e.length<3)return $();let S=o,T,E=!1;const v=Co();w[b]=[v,0];const k=!de(d),O=h(),L=O.data,j=O._c,I=de(j)?L:j;if(k&&(d=Xe(d)?d(I,L):d,f({data:d,_c:I})),Xe(S))try{S=S(I)}catch(R){T=R,E=!0}if(S&&hi(S))if(S=await S.catch(R=>{T=R,E=!0}),v!==w[b][0]){if(E)throw T;return S}else E&&k&&l(T)&&(i=!0,f({data:I,_c:ze}));if(i&&!E)if(Xe(i)){const R=i(S,I);f({data:R,error:ze,_c:ze})}else f({data:S,error:ze,_c:ze});if(w[b][1]=Co(),Promise.resolve($()).then(()=>{f({_c:ze})}),E){if(p)throw T;return}return S}}const _s=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},yi=(e,t)=>{if(!mt.has(e)){const n=yt(ou,t),o=Object.create(null),s=gi.bind(ze,e);let a=gt;const i=Object.create(null),c=(p,m)=>{const x=i[p]||[];return i[p]=x,x.push(m),()=>x.splice(x.indexOf(m),1)},d=(p,m,x)=>{e.set(p,m);const b=i[p];if(b)for(const h of b)h(m,x)},l=()=>{if(!mt.has(e)&&(mt.set(e,[o,Object.create(null),Object.create(null),Object.create(null),s,d,c]),!tn)){const p=n.initFocus(setTimeout.bind(ze,_s.bind(ze,o,ui))),m=n.initReconnect(setTimeout.bind(ze,_s.bind(ze,o,pi)));a=()=>{p&&p(),m&&m(),mt.delete(e)}}};return l(),[e,s,l,a]}return[e,mt.get(e)[4]]},lu=(e,t,n,o,s)=>{const a=n.errorRetryCount,i=s.retryCount,c=~~((Math.random()+.5)*(1<<(i<8?i:8)))*n.errorRetryInterval;!de(a)&&i>a||setTimeout(o,c,s)},du=wo,[Xo,uu]=yi(new Map),xi=yt({onLoadingSlow:gt,onSuccess:gt,onError:gt,onErrorRetry:lu,onDiscarded:gt,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:zs?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:zs?5e3:3e3,compare:du,isPaused:()=>!1,cache:Xo,mutate:uu,fallback:{}},ru),bi=(e,t)=>{const n=yt(e,t);if(t){const{use:o,fallback:s}=e,{use:a,fallback:i}=t;o&&a&&(n.use=o.concat(a)),s&&i&&(n.fallback=yt(s,i))}return n},To=u.createContext({}),pu=e=>{const{value:t}=e,n=u.useContext(To),o=Xe(t),s=u.useMemo(()=>o?t(n):t,[o,n,t]),a=u.useMemo(()=>o?s:bi(n,s),[o,n,s]),i=s&&s.provider,c=u.useRef(ze);i&&!c.current&&(c.current=yi(i(a.cache||Xo),s));const d=c.current;return d&&(a.cache=d[0],a.mutate=d[1]),sr(()=>{if(d)return d[2]&&d[2](),d[3]},[]),u.createElement(To.Provider,yt(e,{value:a}))},fu="$inf$",vi=Pn&&window.__SWR_DEVTOOLS_USE__,hu=vi?window.__SWR_DEVTOOLS_USE__:[],mu=()=>{vi&&(window.__SWR_DEVTOOLS_REACT__=ot)},gu=e=>Xe(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],Et=()=>{const e=u.useContext(To);return u.useMemo(()=>yt(xi,e),[e])},yu=e=>(t,n,o)=>e(t,n&&((...a)=>{const[i]=Go(t),[,,,c]=mt.get(Xo);if(i.startsWith(fu))return n(...a);const d=c[i];return de(d)?n(...a):(delete c[i],d)}),o),xu=hu.concat(yu),bu=e=>function(...n){const o=Et(),[s,a,i]=gu(n),c=bi(o,i);let d=e;const{use:l}=c,p=(l||[]).concat(xu);for(let m=p.length;m--;)d=p[m](d);return d(s,a||c.fetcher||null,c)},vu=(e,t,n)=>{const o=t[e]||(t[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s>=0&&(o[s]=o[o.length-1],o.pop())}};mu();const Xr=ot.use||(e=>{switch(e.status){case"pending":throw e;case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}}),Jr={dedupe:!0},Ms=Promise.resolve(ze),wu=(e,t,n)=>{const{cache:o,compare:s,suspense:a,fallbackData:i,revalidateOnMount:c,revalidateIfStale:d,refreshInterval:l,refreshWhenHidden:p,refreshWhenOffline:m,keepPreviousData:x,strictServerPrefetchWarning:b}=n,[h,f,y,w]=mt.get(o),[g,N]=Go(e),$=u.useRef(!1),S=u.useRef(!1),T=u.useRef(g),E=u.useRef(t),v=u.useRef(n),k=()=>v.current,O=()=>k().isVisible()&&k().isOnline(),[L,j,I,R]=mi(o,g),W=u.useRef({}).current,P=de(i)?de(n.fallback)?ze:n.fallback[g]:i,B=(pe,ge)=>{for(const Te in W){const we=Te;if(we==="data"){if(!s(pe[we],ge[we])&&(!de(pe[we])||!s(Q,ge[we])))return!1}else if(ge[we]!==pe[we])return!1}return!0},A=u.useMemo(()=>{const pe=!g||!t?!1:de(c)?k().isPaused()||a?!1:d!==!1:c,ge=We=>{const ut=yt(We);return delete ut._k,pe?{isValidating:!0,isLoading:!0,...ut}:ut},Te=L(),we=R(),Ye=ge(Te),Yt=Te===we?Ye:ge(we);let Le=Ye;return[()=>{const We=ge(L());return B(We,Le)?(Le.data=We.data,Le.isLoading=We.isLoading,Le.isValidating=We.isValidating,Le.error=We.error,Le):(Le=We,We)},()=>Yt]},[o,g]),q=Ds.useSyncExternalStore(u.useCallback(pe=>I(g,(ge,Te)=>{B(Te,ge)||pe()}),[o,g]),A[0],A[1]),ye=!$.current,xe=h[g]&&h[g].length>0,me=q.data,J=de(me)?P&&hi(P)?Xr(P):P:me,re=q.error,V=u.useRef(J),Q=x?de(me)?de(V.current)?J:V.current:me:J,D=g&&de(J),ee=!tn&&Ds.useSyncExternalStore(()=>gt,()=>!1,()=>!0);b&&ee&&!a&&D&&console.warn(`Missing pre-initiated data for serialized key "${g}" during server-side rendering. Data fethcing should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`);const ve=xe&&!de(re)?!1:ye&&!de(c)?c:k().isPaused()?!1:a?de(J)?!1:d:de(J)||d,ae=!!(g&&t&&ye&&ve),le=de(q.isValidating)?ae:q.isValidating,ie=de(q.isLoading)?ae:q.isLoading,Re=u.useCallback(async pe=>{const ge=E.current;if(!g||!ge||S.current||k().isPaused())return!1;let Te,we,Ye=!0;const Yt=pe||{},Le=!y[g]||!Yt.dedupe,We=()=>Ls?!S.current&&g===T.current&&$.current:g===T.current,ut={isValidating:!1,isLoading:!1},As=()=>{j(ut)},Rs=()=>{const Ke=y[g];Ke&&Ke[1]===we&&delete y[g]},Is={isValidating:!0};de(L().data)&&(Is.isLoading=!0);try{if(Le&&(j(Is),n.loadingTimeout&&de(L().data)&&setTimeout(()=>{Ye&&We()&&k().onLoadingSlow(g,n)},n.loadingTimeout),y[g]=[ge(N),Co()]),[Te,we]=y[g],Te=await Te,Le&&setTimeout(Rs,n.dedupingInterval),!y[g]||y[g][1]!==we)return Le&&We()&&k().onDiscarded(g),!1;ut.error=ze;const Ke=f[g];if(!de(Ke)&&(we<=Ke[0]||we<=Ke[1]||Ke[1]===0))return As(),Le&&We()&&k().onDiscarded(g),!1;const pt=L().data;ut.data=s(pt,Te)?pt:Te,Le&&We()&&k().onSuccess(Te,g,n)}catch(Ke){Rs();const pt=k(),{shouldRetryOnError:Ur}=pt;pt.isPaused()||(ut.error=Ke,Le&&We()&&(pt.onError(Ke,g,pt),(Ur===!0||Xe(Ur)&&Ur(Ke))&&(!k().revalidateOnFocus||!k().revalidateOnReconnect||O())&&pt.onErrorRetry(Ke,g,pt,zd=>{const Hr=h[g];Hr&&Hr[0]&&Hr[0](Ps,zd)},{retryCount:(Yt.retryCount||0)+1,dedupe:!0})))}return Ye=!1,As(),!0},[g,o]),Ue=u.useCallback((...pe)=>gi(o,T.current,...pe),[]);if(sr(()=>{E.current=t,v.current=n,de(me)||(V.current=me)}),sr(()=>{if(!g)return;const pe=Re.bind(ze,Jr);let ge=0;k().revalidateOnFocus&&(ge=Date.now()+k().focusThrottleInterval);const we=vu(g,h,(Ye,Yt={})=>{if(Ye==ui){const Le=Date.now();k().revalidateOnFocus&&Le>ge&&O()&&(ge=Le+k().focusThrottleInterval,pe())}else if(Ye==pi)k().revalidateOnReconnect&&O()&&pe();else{if(Ye==fi)return Re();if(Ye==Ps)return Re(Yt)}});return S.current=!1,T.current=g,$.current=!0,j({_k:N}),ve&&(y[g]||(de(J)||tn?pe():su(pe))),()=>{S.current=!0,we()}},[g]),sr(()=>{let pe;function ge(){const we=Xe(l)?l(L().data):l;we&&pe!==-1&&(pe=setTimeout(Te,we))}function Te(){!L().error&&(p||k().isVisible())&&(m||k().isOnline())?Re(Jr).then(ge):ge()}return ge(),()=>{pe&&(clearTimeout(pe),pe=-1)}},[l,p,m,g]),u.useDebugValue(Q),a){if(!Ls&&tn&&D)throw new Error("Fallback data is required when using Suspense in SSR.");D&&(E.current=t,v.current=n,S.current=!1);const pe=w[g],ge=!de(pe)&&D?Ue(pe):Ms;if(Xr(ge),!de(re)&&D)throw re;const Te=D?Re(Jr):Ms;!de(Q)&&D&&(Te.status="fulfilled",Te.value=!0),Xr(Te)}return{mutate:Ue,get data(){return W.data=!0,Q},get error(){return W.error=!0,re},get isValidating(){return W.isValidating=!0,le},get isLoading(){return W.isLoading=!0,ie}}},$u=hr.defineProperty(pu,"defaultValue",{value:xi}),Ct=bu(wu);function wi(e,t){return function(){return e.apply(t,arguments)}}const{toString:Nu}=Object.prototype,{getPrototypeOf:Jo}=Object,{iterator:jr,toStringTag:$i}=Symbol,Er=(e=>t=>{const n=Nu.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),et=e=>(e=e.toLowerCase(),t=>Er(t)===e),Cr=e=>t=>typeof t===e,{isArray:un}=Array,an=Cr("undefined");function On(e){return e!==null&&!an(e)&&e.constructor!==null&&!an(e.constructor)&&Ve(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ni=et("ArrayBuffer");function Su(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ni(e.buffer),t}const ju=Cr("string"),Ve=Cr("function"),Si=Cr("number"),Ln=e=>e!==null&&typeof e=="object",Eu=e=>e===!0||e===!1,ar=e=>{if(Er(e)!=="object")return!1;const t=Jo(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!($i in e)&&!(jr in e)},Cu=e=>{if(!Ln(e)||On(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Tu=et("Date"),ku=et("File"),Au=et("Blob"),Ru=et("FileList"),Iu=e=>Ln(e)&&Ve(e.pipe),Du=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ve(e.append)&&((t=Er(e))==="formdata"||t==="object"&&Ve(e.toString)&&e.toString()==="[object FormData]"))},Pu=et("URLSearchParams"),[Ou,Lu,zu,_u]=["ReadableStream","Request","Response","Headers"].map(et),Mu=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zn(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,s;if(typeof e!="object"&&(e=[e]),un(e))for(o=0,s=e.length;o<s;o++)t.call(null,e[o],o,e);else{if(On(e))return;const a=n?Object.getOwnPropertyNames(e):Object.keys(e),i=a.length;let c;for(o=0;o<i;o++)c=a[o],t.call(null,e[c],c,e)}}function ji(e,t){if(On(e))return null;t=t.toLowerCase();const n=Object.keys(e);let o=n.length,s;for(;o-- >0;)if(s=n[o],t===s.toLowerCase())return s;return null}const Pt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ei=e=>!an(e)&&e!==Pt;function ko(){const{caseless:e,skipUndefined:t}=Ei(this)&&this||{},n={},o=(s,a)=>{const i=e&&ji(n,a)||a;ar(n[i])&&ar(s)?n[i]=ko(n[i],s):ar(s)?n[i]=ko({},s):un(s)?n[i]=s.slice():(!t||!an(s))&&(n[i]=s)};for(let s=0,a=arguments.length;s<a;s++)arguments[s]&&zn(arguments[s],o);return n}const Fu=(e,t,n,{allOwnKeys:o}={})=>(zn(t,(s,a)=>{n&&Ve(s)?e[a]=wi(s,n):e[a]=s},{allOwnKeys:o}),e),Wu=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Vu=(e,t,n,o)=>{e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Bu=(e,t,n,o)=>{let s,a,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),a=s.length;a-- >0;)i=s[a],(!o||o(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Jo(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Uu=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const o=e.indexOf(t,n);return o!==-1&&o===n},Hu=e=>{if(!e)return null;if(un(e))return e;let t=e.length;if(!Si(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},qu=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Jo(Uint8Array)),Ku=(e,t)=>{const o=(e&&e[jr]).call(e);let s;for(;(s=o.next())&&!s.done;){const a=s.value;t.call(e,a[0],a[1])}},Yu=(e,t)=>{let n;const o=[];for(;(n=e.exec(t))!==null;)o.push(n);return o},Gu=et("HTMLFormElement"),Xu=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,s){return o.toUpperCase()+s}),Fs=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ju=et("RegExp"),Ci=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),o={};zn(n,(s,a)=>{let i;(i=t(s,a,e))!==!1&&(o[a]=i||s)}),Object.defineProperties(e,o)},Zu=e=>{Ci(e,(t,n)=>{if(Ve(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(Ve(o)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Qu=(e,t)=>{const n={},o=s=>{s.forEach(a=>{n[a]=!0})};return un(e)?o(e):o(String(e).split(t)),n},ep=()=>{},tp=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function np(e){return!!(e&&Ve(e.append)&&e[$i]==="FormData"&&e[jr])}const rp=e=>{const t=new Array(10),n=(o,s)=>{if(Ln(o)){if(t.indexOf(o)>=0)return;if(On(o))return o;if(!("toJSON"in o)){t[s]=o;const a=un(o)?[]:{};return zn(o,(i,c)=>{const d=n(i,s+1);!an(d)&&(a[c]=d)}),t[s]=void 0,a}}return o};return n(e,0)},op=et("AsyncFunction"),sp=e=>e&&(Ln(e)||Ve(e))&&Ve(e.then)&&Ve(e.catch),Ti=((e,t)=>e?setImmediate:t?((n,o)=>(Pt.addEventListener("message",({source:s,data:a})=>{s===Pt&&a===n&&o.length&&o.shift()()},!1),s=>{o.push(s),Pt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ve(Pt.postMessage)),ap=typeof queueMicrotask<"u"?queueMicrotask.bind(Pt):typeof process<"u"&&process.nextTick||Ti,ip=e=>e!=null&&Ve(e[jr]),C={isArray:un,isArrayBuffer:Ni,isBuffer:On,isFormData:Du,isArrayBufferView:Su,isString:ju,isNumber:Si,isBoolean:Eu,isObject:Ln,isPlainObject:ar,isEmptyObject:Cu,isReadableStream:Ou,isRequest:Lu,isResponse:zu,isHeaders:_u,isUndefined:an,isDate:Tu,isFile:ku,isBlob:Au,isRegExp:Ju,isFunction:Ve,isStream:Iu,isURLSearchParams:Pu,isTypedArray:qu,isFileList:Ru,forEach:zn,merge:ko,extend:Fu,trim:Mu,stripBOM:Wu,inherits:Vu,toFlatObject:Bu,kindOf:Er,kindOfTest:et,endsWith:Uu,toArray:Hu,forEachEntry:Ku,matchAll:Yu,isHTMLForm:Gu,hasOwnProperty:Fs,hasOwnProp:Fs,reduceDescriptors:Ci,freezeMethods:Zu,toObjectSet:Qu,toCamelCase:Xu,noop:ep,toFiniteNumber:tp,findKey:ji,global:Pt,isContextDefined:Ei,isSpecCompliantForm:np,toJSONObject:rp,isAsyncFn:op,isThenable:sp,setImmediate:Ti,asap:ap,isIterable:ip};function G(e,t,n,o,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),o&&(this.request=o),s&&(this.response=s,this.status=s.status?s.status:null)}C.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.status}}});const ki=G.prototype,Ai={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ai[e]={value:e}});Object.defineProperties(G,Ai);Object.defineProperty(ki,"isAxiosError",{value:!0});G.from=(e,t,n,o,s,a)=>{const i=Object.create(ki);C.toFlatObject(e,i,function(p){return p!==Error.prototype},l=>l!=="isAxiosError");const c=e&&e.message?e.message:"Error",d=t==null&&e?e.code:t;return G.call(i,c,d,n,o,s),e&&i.cause==null&&Object.defineProperty(i,"cause",{value:e,configurable:!0}),i.name=e&&e.name||"Error",a&&Object.assign(i,a),i};const cp=null;function Ao(e){return C.isPlainObject(e)||C.isArray(e)}function Ri(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Ws(e,t,n){return e?e.concat(t).map(function(s,a){return s=Ri(s),!n&&a?"["+s+"]":s}).join(n?".":""):t}function lp(e){return C.isArray(e)&&!e.some(Ao)}const dp=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function Tr(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,y){return!C.isUndefined(y[f])});const o=n.metaTokens,s=n.visitor||p,a=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(s))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(C.isDate(h))return h.toISOString();if(C.isBoolean(h))return h.toString();if(!d&&C.isBlob(h))throw new G("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(h)||C.isTypedArray(h)?d&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function p(h,f,y){let w=h;if(h&&!y&&typeof h=="object"){if(C.endsWith(f,"{}"))f=o?f:f.slice(0,-2),h=JSON.stringify(h);else if(C.isArray(h)&&lp(h)||(C.isFileList(h)||C.endsWith(f,"[]"))&&(w=C.toArray(h)))return f=Ri(f),w.forEach(function(N,$){!(C.isUndefined(N)||N===null)&&t.append(i===!0?Ws([f],$,a):i===null?f:f+"[]",l(N))}),!1}return Ao(h)?!0:(t.append(Ws(y,f,a),l(h)),!1)}const m=[],x=Object.assign(dp,{defaultVisitor:p,convertValue:l,isVisitable:Ao});function b(h,f){if(!C.isUndefined(h)){if(m.indexOf(h)!==-1)throw Error("Circular reference detected in "+f.join("."));m.push(h),C.forEach(h,function(w,g){(!(C.isUndefined(w)||w===null)&&s.call(t,w,C.isString(g)?g.trim():g,f,x))===!0&&b(w,f?f.concat(g):[g])}),m.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Vs(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function Zo(e,t){this._pairs=[],e&&Tr(e,this,t)}const Ii=Zo.prototype;Ii.append=function(t,n){this._pairs.push([t,n])};Ii.toString=function(t){const n=t?function(o){return t.call(this,o,Vs)}:Vs;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function up(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Di(e,t,n){if(!t)return e;const o=n&&n.encode||up;C.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let a;if(s?a=s(t,n):a=C.isURLSearchParams(t)?t.toString():new Zo(t,n).toString(o),a){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Bs{constructor(){this.handlers=[]}use(t,n,o){return this.handlers.push({fulfilled:t,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(o){o!==null&&t(o)})}}const Pi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pp=typeof URLSearchParams<"u"?URLSearchParams:Zo,fp=typeof FormData<"u"?FormData:null,hp=typeof Blob<"u"?Blob:null,mp={isBrowser:!0,classes:{URLSearchParams:pp,FormData:fp,Blob:hp},protocols:["http","https","file","blob","url","data"]},Qo=typeof window<"u"&&typeof document<"u",Ro=typeof navigator=="object"&&navigator||void 0,gp=Qo&&(!Ro||["ReactNative","NativeScript","NS"].indexOf(Ro.product)<0),yp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xp=Qo&&window.location.href||"http://localhost",bp=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qo,hasStandardBrowserEnv:gp,hasStandardBrowserWebWorkerEnv:yp,navigator:Ro,origin:xp},Symbol.toStringTag,{value:"Module"})),Me={...bp,...mp};function vp(e,t){return Tr(e,new Me.classes.URLSearchParams,{visitor:function(n,o,s,a){return Me.isNode&&C.isBuffer(n)?(this.append(o,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}function wp(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $p(e){const t={},n=Object.keys(e);let o;const s=n.length;let a;for(o=0;o<s;o++)a=n[o],t[a]=e[a];return t}function Oi(e){function t(n,o,s,a){let i=n[a++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=a>=n.length;return i=!i&&C.isArray(s)?s.length:i,d?(C.hasOwnProp(s,i)?s[i]=[s[i],o]:s[i]=o,!c):((!s[i]||!C.isObject(s[i]))&&(s[i]=[]),t(n,o,s[i],a)&&C.isArray(s[i])&&(s[i]=$p(s[i])),!c)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(o,s)=>{t(wp(o),s,n,0)}),n}return null}function Np(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const _n={transitional:Pi,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const o=n.getContentType()||"",s=o.indexOf("application/json")>-1,a=C.isObject(t);if(a&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return s?JSON.stringify(Oi(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)||C.isReadableStream(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(a){if(o.indexOf("application/x-www-form-urlencoded")>-1)return vp(t,this.formSerializer).toString();if((c=C.isFileList(t))||o.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Tr(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||s?(n.setContentType("application/json",!1),Np(t)):t}],transformResponse:[function(t){const n=this.transitional||_n.transitional,o=n&&n.forcedJSONParsing,s=this.responseType==="json";if(C.isResponse(t)||C.isReadableStream(t))return t;if(t&&C.isString(t)&&(o&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t,this.parseReviver)}catch(c){if(i)throw c.name==="SyntaxError"?G.from(c,G.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Me.classes.FormData,Blob:Me.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{_n.headers[e]={}});const Sp=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jp=e=>{const t={};let n,o,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),o=i.substring(s+1).trim(),!(!n||t[n]&&Sp[n])&&(n==="set-cookie"?t[n]?t[n].push(o):t[n]=[o]:t[n]=t[n]?t[n]+", "+o:o)}),t},Us=Symbol("internals");function vn(e){return e&&String(e).trim().toLowerCase()}function ir(e){return e===!1||e==null?e:C.isArray(e)?e.map(ir):String(e)}function Ep(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)t[o[1]]=o[2];return t}const Cp=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Zr(e,t,n,o,s){if(C.isFunction(o))return o.call(this,t,n);if(s&&(t=n),!!C.isString(t)){if(C.isString(o))return t.indexOf(o)!==-1;if(C.isRegExp(o))return o.test(t)}}function Tp(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,o)=>n.toUpperCase()+o)}function kp(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(s,a,i){return this[o].call(this,t,s,a,i)},configurable:!0})})}let Be=class{constructor(t){t&&this.set(t)}set(t,n,o){const s=this;function a(c,d,l){const p=vn(d);if(!p)throw new Error("header name must be a non-empty string");const m=C.findKey(s,p);(!m||s[m]===void 0||l===!0||l===void 0&&s[m]!==!1)&&(s[m||d]=ir(c))}const i=(c,d)=>C.forEach(c,(l,p)=>a(l,p,d));if(C.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(C.isString(t)&&(t=t.trim())&&!Cp(t))i(jp(t),n);else if(C.isObject(t)&&C.isIterable(t)){let c={},d,l;for(const p of t){if(!C.isArray(p))throw TypeError("Object iterator must return a key-value pair");c[l=p[0]]=(d=c[l])?C.isArray(d)?[...d,p[1]]:[d,p[1]]:p[1]}i(c,n)}else t!=null&&a(n,t,o);return this}get(t,n){if(t=vn(t),t){const o=C.findKey(this,t);if(o){const s=this[o];if(!n)return s;if(n===!0)return Ep(s);if(C.isFunction(n))return n.call(this,s,o);if(C.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=vn(t),t){const o=C.findKey(this,t);return!!(o&&this[o]!==void 0&&(!n||Zr(this,this[o],o,n)))}return!1}delete(t,n){const o=this;let s=!1;function a(i){if(i=vn(i),i){const c=C.findKey(o,i);c&&(!n||Zr(o,o[c],c,n))&&(delete o[c],s=!0)}}return C.isArray(t)?t.forEach(a):a(t),s}clear(t){const n=Object.keys(this);let o=n.length,s=!1;for(;o--;){const a=n[o];(!t||Zr(this,this[a],a,t,!0))&&(delete this[a],s=!0)}return s}normalize(t){const n=this,o={};return C.forEach(this,(s,a)=>{const i=C.findKey(o,a);if(i){n[i]=ir(s),delete n[a];return}const c=t?Tp(a):String(a).trim();c!==a&&delete n[a],n[c]=ir(s),o[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(o,s)=>{o!=null&&o!==!1&&(n[s]=t&&C.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const o=new this(t);return n.forEach(s=>o.set(s)),o}static accessor(t){const o=(this[Us]=this[Us]={accessors:{}}).accessors,s=this.prototype;function a(i){const c=vn(i);o[c]||(kp(s,i),o[c]=!0)}return C.isArray(t)?t.forEach(a):a(t),this}};Be.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(Be.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(o){this[n]=o}}});C.freezeMethods(Be);function Qr(e,t){const n=this||_n,o=t||n,s=Be.from(o.headers);let a=o.data;return C.forEach(e,function(c){a=c.call(n,a,s.normalize(),t?t.status:void 0)}),s.normalize(),a}function Li(e){return!!(e&&e.__CANCEL__)}function pn(e,t,n){G.call(this,e??"canceled",G.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(pn,G,{__CANCEL__:!0});function zi(e,t,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):t(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ap(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Rp(e,t){e=e||10;const n=new Array(e),o=new Array(e);let s=0,a=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),p=o[a];i||(i=l),n[s]=d,o[s]=l;let m=a,x=0;for(;m!==s;)x+=n[m++],m=m%e;if(s=(s+1)%e,s===a&&(a=(a+1)%e),l-i<t)return;const b=p&&l-p;return b?Math.round(x*1e3/b):void 0}}function Ip(e,t){let n=0,o=1e3/t,s,a;const i=(l,p=Date.now())=>{n=p,s=null,a&&(clearTimeout(a),a=null),e(...l)};return[(...l)=>{const p=Date.now(),m=p-n;m>=o?i(l,p):(s=l,a||(a=setTimeout(()=>{a=null,i(s)},o-m)))},()=>s&&i(s)]}const mr=(e,t,n=3)=>{let o=0;const s=Rp(50,250);return Ip(a=>{const i=a.loaded,c=a.lengthComputable?a.total:void 0,d=i-o,l=s(d),p=i<=c;o=i;const m={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:l||void 0,estimated:l&&c&&p?(c-i)/l:void 0,event:a,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(m)},n)},Hs=(e,t)=>{const n=e!=null;return[o=>t[0]({lengthComputable:n,total:e,loaded:o}),t[1]]},qs=e=>(...t)=>C.asap(()=>e(...t)),Dp=Me.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Me.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Me.origin),Me.navigator&&/(msie|trident)/i.test(Me.navigator.userAgent)):()=>!0,Pp=Me.hasStandardBrowserEnv?{write(e,t,n,o,s,a,i){if(typeof document>"u")return;const c=[`${e}=${encodeURIComponent(t)}`];C.isNumber(n)&&c.push(`expires=${new Date(n).toUTCString()}`),C.isString(o)&&c.push(`path=${o}`),C.isString(s)&&c.push(`domain=${s}`),a===!0&&c.push("secure"),C.isString(i)&&c.push(`SameSite=${i}`),document.cookie=c.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Op(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Lp(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function _i(e,t,n){let o=!Op(t);return e&&(o||n==!1)?Lp(e,t):t}const Ks=e=>e instanceof Be?{...e}:e;function Lt(e,t){t=t||{};const n={};function o(l,p,m,x){return C.isPlainObject(l)&&C.isPlainObject(p)?C.merge.call({caseless:x},l,p):C.isPlainObject(p)?C.merge({},p):C.isArray(p)?p.slice():p}function s(l,p,m,x){if(C.isUndefined(p)){if(!C.isUndefined(l))return o(void 0,l,m,x)}else return o(l,p,m,x)}function a(l,p){if(!C.isUndefined(p))return o(void 0,p)}function i(l,p){if(C.isUndefined(p)){if(!C.isUndefined(l))return o(void 0,l)}else return o(void 0,p)}function c(l,p,m){if(m in t)return o(l,p);if(m in e)return o(void 0,l)}const d={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,p,m)=>s(Ks(l),Ks(p),m,!0)};return C.forEach(Object.keys({...e,...t}),function(p){const m=d[p]||s,x=m(e[p],t[p],p);C.isUndefined(x)&&m!==c||(n[p]=x)}),n}const Mi=e=>{const t=Lt({},e);let{data:n,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:a,headers:i,auth:c}=t;if(t.headers=i=Be.from(i),t.url=Di(_i(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),C.isFormData(n)){if(Me.hasStandardBrowserEnv||Me.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(C.isFunction(n.getHeaders)){const d=n.getHeaders(),l=["content-type","content-length"];Object.entries(d).forEach(([p,m])=>{l.includes(p.toLowerCase())&&i.set(p,m)})}}if(Me.hasStandardBrowserEnv&&(o&&C.isFunction(o)&&(o=o(t)),o||o!==!1&&Dp(t.url))){const d=s&&a&&Pp.read(a);d&&i.set(s,d)}return t},zp=typeof XMLHttpRequest<"u",_p=zp&&function(e){return new Promise(function(n,o){const s=Mi(e);let a=s.data;const i=Be.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:l}=s,p,m,x,b,h;function f(){b&&b(),h&&h(),s.cancelToken&&s.cancelToken.unsubscribe(p),s.signal&&s.signal.removeEventListener("abort",p)}let y=new XMLHttpRequest;y.open(s.method.toUpperCase(),s.url,!0),y.timeout=s.timeout;function w(){if(!y)return;const N=Be.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),S={data:!c||c==="text"||c==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:N,config:e,request:y};zi(function(E){n(E),f()},function(E){o(E),f()},S),y=null}"onloadend"in y?y.onloadend=w:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(w)},y.onabort=function(){y&&(o(new G("Request aborted",G.ECONNABORTED,e,y)),y=null)},y.onerror=function($){const S=$&&$.message?$.message:"Network Error",T=new G(S,G.ERR_NETWORK,e,y);T.event=$||null,o(T),y=null},y.ontimeout=function(){let $=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const S=s.transitional||Pi;s.timeoutErrorMessage&&($=s.timeoutErrorMessage),o(new G($,S.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,e,y)),y=null},a===void 0&&i.setContentType(null),"setRequestHeader"in y&&C.forEach(i.toJSON(),function($,S){y.setRequestHeader(S,$)}),C.isUndefined(s.withCredentials)||(y.withCredentials=!!s.withCredentials),c&&c!=="json"&&(y.responseType=s.responseType),l&&([x,h]=mr(l,!0),y.addEventListener("progress",x)),d&&y.upload&&([m,b]=mr(d),y.upload.addEventListener("progress",m),y.upload.addEventListener("loadend",b)),(s.cancelToken||s.signal)&&(p=N=>{y&&(o(!N||N.type?new pn(null,e,y):N),y.abort(),y=null)},s.cancelToken&&s.cancelToken.subscribe(p),s.signal&&(s.signal.aborted?p():s.signal.addEventListener("abort",p)));const g=Ap(s.url);if(g&&Me.protocols.indexOf(g)===-1){o(new G("Unsupported protocol "+g+":",G.ERR_BAD_REQUEST,e));return}y.send(a||null)})},Mp=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let o=new AbortController,s;const a=function(l){if(!s){s=!0,c();const p=l instanceof Error?l:this.reason;o.abort(p instanceof G?p:new pn(p instanceof Error?p.message:p))}};let i=t&&setTimeout(()=>{i=null,a(new G(`timeout ${t} of ms exceeded`,G.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(a):l.removeEventListener("abort",a)}),e=null)};e.forEach(l=>l.addEventListener("abort",a));const{signal:d}=o;return d.unsubscribe=()=>C.asap(c),d}},Fp=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let o=0,s;for(;o<n;)s=o+t,yield e.slice(o,s),o=s},Wp=async function*(e,t){for await(const n of Vp(e))yield*Fp(n,t)},Vp=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:o}=await t.read();if(n)break;yield o}}finally{await t.cancel()}},Ys=(e,t,n,o)=>{const s=Wp(e,t);let a=0,i,c=d=>{i||(i=!0,o&&o(d))};return new ReadableStream({async pull(d){try{const{done:l,value:p}=await s.next();if(l){c(),d.close();return}let m=p.byteLength;if(n){let x=a+=m;n(x)}d.enqueue(new Uint8Array(p))}catch(l){throw c(l),l}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},Gs=64*1024,{isFunction:Kn}=C,Bp=(({Request:e,Response:t})=>({Request:e,Response:t}))(C.global),{ReadableStream:Xs,TextEncoder:Js}=C.global,Zs=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Up=e=>{e=C.merge.call({skipUndefined:!0},Bp,e);const{fetch:t,Request:n,Response:o}=e,s=t?Kn(t):typeof fetch=="function",a=Kn(n),i=Kn(o);if(!s)return!1;const c=s&&Kn(Xs),d=s&&(typeof Js=="function"?(h=>f=>h.encode(f))(new Js):async h=>new Uint8Array(await new n(h).arrayBuffer())),l=a&&c&&Zs(()=>{let h=!1;const f=new n(Me.origin,{body:new Xs,method:"POST",get duplex(){return h=!0,"half"}}).headers.has("Content-Type");return h&&!f}),p=i&&c&&Zs(()=>C.isReadableStream(new o("").body)),m={stream:p&&(h=>h.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(h=>{!m[h]&&(m[h]=(f,y)=>{let w=f&&f[h];if(w)return w.call(f);throw new G(`Response type '${h}' is not supported`,G.ERR_NOT_SUPPORT,y)})});const x=async h=>{if(h==null)return 0;if(C.isBlob(h))return h.size;if(C.isSpecCompliantForm(h))return(await new n(Me.origin,{method:"POST",body:h}).arrayBuffer()).byteLength;if(C.isArrayBufferView(h)||C.isArrayBuffer(h))return h.byteLength;if(C.isURLSearchParams(h)&&(h=h+""),C.isString(h))return(await d(h)).byteLength},b=async(h,f)=>{const y=C.toFiniteNumber(h.getContentLength());return y??x(f)};return async h=>{let{url:f,method:y,data:w,signal:g,cancelToken:N,timeout:$,onDownloadProgress:S,onUploadProgress:T,responseType:E,headers:v,withCredentials:k="same-origin",fetchOptions:O}=Mi(h),L=t||fetch;E=E?(E+"").toLowerCase():"text";let j=Mp([g,N&&N.toAbortSignal()],$),I=null;const R=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let W;try{if(T&&l&&y!=="get"&&y!=="head"&&(W=await b(v,w))!==0){let xe=new n(f,{method:"POST",body:w,duplex:"half"}),me;if(C.isFormData(w)&&(me=xe.headers.get("content-type"))&&v.setContentType(me),xe.body){const[J,re]=Hs(W,mr(qs(T)));w=Ys(xe.body,Gs,J,re)}}C.isString(k)||(k=k?"include":"omit");const P=a&&"credentials"in n.prototype,B={...O,signal:j,method:y.toUpperCase(),headers:v.normalize().toJSON(),body:w,duplex:"half",credentials:P?k:void 0};I=a&&new n(f,B);let A=await(a?L(I,O):L(f,B));const q=p&&(E==="stream"||E==="response");if(p&&(S||q&&R)){const xe={};["status","statusText","headers"].forEach(V=>{xe[V]=A[V]});const me=C.toFiniteNumber(A.headers.get("content-length")),[J,re]=S&&Hs(me,mr(qs(S),!0))||[];A=new o(Ys(A.body,Gs,J,()=>{re&&re(),R&&R()}),xe)}E=E||"text";let ye=await m[C.findKey(m,E)||"text"](A,h);return!q&&R&&R(),await new Promise((xe,me)=>{zi(xe,me,{data:ye,headers:Be.from(A.headers),status:A.status,statusText:A.statusText,config:h,request:I})})}catch(P){throw R&&R(),P&&P.name==="TypeError"&&/Load failed|fetch/i.test(P.message)?Object.assign(new G("Network Error",G.ERR_NETWORK,h,I),{cause:P.cause||P}):G.from(P,P&&P.code,h,I)}}},Hp=new Map,Fi=e=>{let t=e&&e.env||{};const{fetch:n,Request:o,Response:s}=t,a=[o,s,n];let i=a.length,c=i,d,l,p=Hp;for(;c--;)d=a[c],l=p.get(d),l===void 0&&p.set(d,l=c?new Map:Up(t)),p=l;return l};Fi();const es={http:cp,xhr:_p,fetch:{get:Fi}};C.forEach(es,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Qs=e=>`- ${e}`,qp=e=>C.isFunction(e)||e===null||e===!1;function Kp(e,t){e=C.isArray(e)?e:[e];const{length:n}=e;let o,s;const a={};for(let i=0;i<n;i++){o=e[i];let c;if(s=o,!qp(o)&&(s=es[(c=String(o)).toLowerCase()],s===void 0))throw new G(`Unknown adapter '${c}'`);if(s&&(C.isFunction(s)||(s=s.get(t))))break;a[c||"#"+i]=s}if(!s){const i=Object.entries(a).map(([d,l])=>`adapter ${d} `+(l===!1?"is not supported by the environment":"is not available in the build"));let c=n?i.length>1?`since :
`+i.map(Qs).join(`
`):" "+Qs(i[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s}const Wi={getAdapter:Kp,adapters:es};function eo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pn(null,e)}function ea(e){return eo(e),e.headers=Be.from(e.headers),e.data=Qr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Wi.getAdapter(e.adapter||_n.adapter,e)(e).then(function(o){return eo(e),o.data=Qr.call(e,e.transformResponse,o),o.headers=Be.from(o.headers),o},function(o){return Li(o)||(eo(e),o&&o.response&&(o.response.data=Qr.call(e,e.transformResponse,o.response),o.response.headers=Be.from(o.response.headers))),Promise.reject(o)})}const Vi="1.13.2",kr={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{kr[e]=function(o){return typeof o===e||"a"+(t<1?"n ":" ")+e}});const ta={};kr.transitional=function(t,n,o){function s(a,i){return"[Axios v"+Vi+"] Transitional option '"+a+"'"+i+(o?". "+o:"")}return(a,i,c)=>{if(t===!1)throw new G(s(i," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!ta[i]&&(ta[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,i,c):!0}};kr.spelling=function(t){return(n,o)=>(console.warn(`${o} is likely a misspelling of ${t}`),!0)};function Yp(e,t,n){if(typeof e!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let s=o.length;for(;s-- >0;){const a=o[s],i=t[a];if(i){const c=e[a],d=c===void 0||i(c,a,e);if(d!==!0)throw new G("option "+a+" must be "+d,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+a,G.ERR_BAD_OPTION)}}const cr={assertOptions:Yp,validators:kr},rt=cr.validators;let Ot=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Bs,response:new Bs}}async request(t,n){try{return await this._request(t,n)}catch(o){if(o instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const a=s.stack?s.stack.replace(/^.+\n/,""):"";try{o.stack?a&&!String(o.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+a):o.stack=a}catch{}}throw o}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Lt(this.defaults,n);const{transitional:o,paramsSerializer:s,headers:a}=n;o!==void 0&&cr.assertOptions(o,{silentJSONParsing:rt.transitional(rt.boolean),forcedJSONParsing:rt.transitional(rt.boolean),clarifyTimeoutError:rt.transitional(rt.boolean)},!1),s!=null&&(C.isFunction(s)?n.paramsSerializer={serialize:s}:cr.assertOptions(s,{encode:rt.function,serialize:rt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),cr.assertOptions(n,{baseUrl:rt.spelling("baseURL"),withXsrfToken:rt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=a&&C.merge(a.common,a[n.method]);a&&C.forEach(["delete","get","head","post","put","patch","common"],h=>{delete a[h]}),n.headers=Be.concat(i,a);const c=[];let d=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(d=d&&f.synchronous,c.unshift(f.fulfilled,f.rejected))});const l=[];this.interceptors.response.forEach(function(f){l.push(f.fulfilled,f.rejected)});let p,m=0,x;if(!d){const h=[ea.bind(this),void 0];for(h.unshift(...c),h.push(...l),x=h.length,p=Promise.resolve(n);m<x;)p=p.then(h[m++],h[m++]);return p}x=c.length;let b=n;for(;m<x;){const h=c[m++],f=c[m++];try{b=h(b)}catch(y){f.call(this,y);break}}try{p=ea.call(this,b)}catch(h){return Promise.reject(h)}for(m=0,x=l.length;m<x;)p=p.then(l[m++],l[m++]);return p}getUri(t){t=Lt(this.defaults,t);const n=_i(t.baseURL,t.url,t.allowAbsoluteUrls);return Di(n,t.params,t.paramsSerializer)}};C.forEach(["delete","get","head","options"],function(t){Ot.prototype[t]=function(n,o){return this.request(Lt(o||{},{method:t,url:n,data:(o||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(o){return function(a,i,c){return this.request(Lt(c||{},{method:t,headers:o?{"Content-Type":"multipart/form-data"}:{},url:a,data:i}))}}Ot.prototype[t]=n(),Ot.prototype[t+"Form"]=n(!0)});let Gp=class Bi{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const o=this;this.promise.then(s=>{if(!o._listeners)return;let a=o._listeners.length;for(;a-- >0;)o._listeners[a](s);o._listeners=null}),this.promise.then=s=>{let a;const i=new Promise(c=>{o.subscribe(c),a=c}).then(s);return i.cancel=function(){o.unsubscribe(a)},i},t(function(a,i,c){o.reason||(o.reason=new pn(a,i,c),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=o=>{t.abort(o)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Bi(function(s){t=s}),cancel:t}}};function Xp(e){return function(n){return e.apply(null,n)}}function Jp(e){return C.isObject(e)&&e.isAxiosError===!0}const Io={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Io).forEach(([e,t])=>{Io[t]=e});function Ui(e){const t=new Ot(e),n=wi(Ot.prototype.request,t);return C.extend(n,Ot.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ui(Lt(e,s))},n}const Ee=Ui(_n);Ee.Axios=Ot;Ee.CanceledError=pn;Ee.CancelToken=Gp;Ee.isCancel=Li;Ee.VERSION=Vi;Ee.toFormData=Tr;Ee.AxiosError=G;Ee.Cancel=Ee.CanceledError;Ee.all=function(t){return Promise.all(t)};Ee.spread=Xp;Ee.isAxiosError=Jp;Ee.mergeConfig=Lt;Ee.AxiosHeaders=Be;Ee.formToJSON=e=>Oi(C.isHTMLForm(e)?new FormData(e):e);Ee.getAdapter=Wi.getAdapter;Ee.HttpStatusCode=Io;Ee.default=Ee;const{Axios:Qv,AxiosError:ew,CanceledError:tw,isCancel:nw,CancelToken:rw,VERSION:ow,all:sw,Cancel:aw,isAxiosError:iw,spread:cw,toFormData:lw,AxiosHeaders:dw,HttpStatusCode:uw,formToJSON:pw,getAdapter:fw,mergeConfig:hw}=Ee,to={},ts=(to==null?void 0:to.VITE_API_MODE)||(typeof window<"u"&&window.location.hostname==="localhost"?"localhost":"live"),Zp=()=>{const e="https://portfolio-be-production-0fa6.up.railway.app";return{baseApiUrl:e,walletApiUrl:`${e}/api/v1/wallet`,authApiUrl:`${e}/api/v1/auth`}},na=()=>{const e="https://portfolio-be-production-0fa6.up.railway.app";return{baseApiUrl:e,walletApiUrl:`${e}/api/v1/wallet`,authApiUrl:`${e}/api/v1/auth`}},Qp=()=>{const e="http://localhost:8080";return{baseApiUrl:e,walletApiUrl:`${e}/api/v1/wallet`,authApiUrl:`${e}/api/v1/auth`}},ef=e=>{switch(e){case"dev":return Zp();case"live":return na();case"localhost":return Qp();default:return console.warn(`[API Config] Unknown MODE: ${e}, using live environment`),na()}},tf=ef(ts),{baseApiUrl:Hi,walletApiUrl:nf,authApiUrl:ht}=tf,kn={MODE:ts,BASE_URL:Hi,API_PREFIX:"/api/v1",TIMEOUT:3e4},qi={BASE_URL:ht,LOGIN:`${ht}/login`,REGISTER:`${ht}/register`,REFRESH_TOKEN:`${ht}/refresh`,LOGOUT:`${ht}/logout`,VERIFY_EMAIL:`${ht}/verify-email`,FORGOT_PASSWORD:`${ht}/forgot-password`,RESET_PASSWORD:`${ht}/reset-password`};typeof window<"u"&&(console.log("[API Config] Environment:",ts),console.log("[API Config] Base URL:",Hi),console.log("[API Config] Auth API:",ht),console.log("[API Config] Wallet API:",nf));const Ki=kn.BASE_URL,Yi=kn.API_PREFIX,no="wallet_app_access_token",ro="wallet_app_refresh_token",be={getAccessToken:()=>localStorage.getItem(no),setAccessToken:e=>{localStorage.setItem(no,e)},getRefreshToken:()=>localStorage.getItem(ro),setRefreshToken:e=>{localStorage.setItem(ro,e)},clearTokens:()=>{localStorage.removeItem(no),localStorage.removeItem(ro)}},rf=()=>{const e=Ee.create({baseURL:`${Ki}${Yi}`,timeout:kn.TIMEOUT,headers:{"Content-Type":"application/json"}});return e.interceptors.request.use(t=>{const n=be.getAccessToken();return n&&t.headers&&(t.headers.Authorization=`Bearer ${n}`),t},t=>Promise.reject(t)),e.interceptors.response.use(t=>t,async t=>{var o;const n=t.config;if(((o=t.response)==null?void 0:o.status)===401&&!n._retry){n._retry=!0;const s=be.getRefreshToken();if(s)try{const a=await Ee.post(qi.REFRESH_TOKEN,{refreshToken:s});if(a.data.success&&a.data.data){const{accessToken:i,refreshToken:c}=a.data.data;return!i||!c?(be.clearTokens(),window.location.hash="#login",Promise.reject(t)):(be.setAccessToken(i),be.setRefreshToken(c),n.headers&&(n.headers.Authorization=`Bearer ${i}`),e(n))}}catch(a){return be.clearTokens(),window.location.hash="#login",Promise.reject(a)}else be.clearTokens(),window.location.hash="#login"}return Promise.reject(t)}),e},Y=rf(),fe=e=>{var t;if(Ee.isAxiosError(e)){const n=e;return(t=n.response)!=null&&t.data?n.response.data.message||"Có lỗi xảy ra":n.request?"Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.":n.message||"Có lỗi xảy ra khi gửi request"}return"Có lỗi không xác định xảy ra"},Ar=e=>{var s,a;const t=((s=e.pageable)==null?void 0:s.pageNumber)??e.number??0,n=e.first??!1,o=e.last??!1;return{content:e.content||[],totalElements:e.totalElements||0,totalPages:e.totalPages||0,page:t,size:e.size||((a=e.pageable)==null?void 0:a.pageSize)||20,hasNext:!o,hasPrevious:!n}},of={login:async e=>{const t=await Y.post("/auth/login",e);if(t.data.success&&t.data.data){const n=t.data.data;return n.accessToken&&be.setAccessToken(n.accessToken),n.refreshToken&&be.setRefreshToken(n.refreshToken),n}throw new Error(t.data.message||"Đăng nhập thất bại")},register:async e=>{const t=await Y.post("/auth/register",e);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Đăng ký thất bại")},verifyEmail:async e=>{const t=await Y.post("/auth/verify-email",e);if(t.data.success&&t.data.data){const n=t.data.data;return n.accessToken&&be.setAccessToken(n.accessToken),n.refreshToken&&be.setRefreshToken(n.refreshToken),n}throw new Error(t.data.message||"Xác nhận email thất bại")},refreshToken:async e=>{const t=await Y.post(qi.REFRESH_TOKEN.replace(Ki+Yi,""),{refreshToken:e});if(t.data.success&&t.data.data){const n=t.data.data;return n.accessToken&&be.setAccessToken(n.accessToken),n.refreshToken&&be.setRefreshToken(n.refreshToken),n}throw new Error(t.data.message||"Refresh token thất bại")},logout:async()=>{const e=be.getRefreshToken();if(e)try{await Y.post("/auth/logout",{refreshToken:e})}catch(t){console.error("Logout error:",t)}be.clearTokens()}},$n={getAll:async()=>{const e=await Y.get("/wallet/accounts");if(e.data.success&&e.data.data)return e.data.data.content||[];throw new Error(e.data.message||"Lấy danh sách tài khoản thất bại")},getById:async e=>{const t=await Y.get(`/wallet/accounts/${e}`);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Lấy thông tin tài khoản thất bại")},create:async e=>{const t=await Y.post("/wallet/accounts",e);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Tạo tài khoản thất bại")},update:async(e,t)=>{const n=await Y.put(`/wallet/accounts/${e}`,t);if(n.data.success&&n.data.data)return n.data.data;throw new Error(n.data.message||"Cập nhật tài khoản thất bại")},delete:async e=>{const t=await Y.delete(`/wallet/accounts/${e}`);if(!t.data.success)throw new Error(t.data.message||"Xóa tài khoản thất bại")}},Nn={getAll:async()=>{const e=await Y.get("/wallet/categories");if(e.data.success&&e.data.data)return e.data.data;throw new Error(e.data.message||"Lấy danh sách danh mục thất bại")},create:async e=>{const t=await Y.post("/wallet/categories",e);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Tạo danh mục thất bại")},update:async(e,t)=>{const n=await Y.put(`/wallet/categories/${e}`,t);if(n.data.success&&n.data.data)return n.data.data;throw new Error(n.data.message||"Cập nhật danh mục thất bại")},delete:async e=>{const t=await Y.delete(`/wallet/categories/${e}`);if(!t.data.success)throw new Error(t.data.message||"Xóa danh mục thất bại")}},Sn={getAll:async e=>{const t=new URLSearchParams;e&&(e.startDate&&t.append("startDate",e.startDate),e.endDate&&t.append("endDate",e.endDate),e.type&&t.append("type",e.type),e.categoryId&&t.append("categoryId",e.categoryId),e.accountId&&t.append("accountId",e.accountId),e.minAmount&&t.append("minAmount",e.minAmount.toString()),e.maxAmount&&t.append("maxAmount",e.maxAmount.toString()),e.keyword&&t.append("keyword",e.keyword),e.page&&t.append("page",e.page.toString()),e.size&&t.append("size",e.size.toString()),e.sortBy&&t.append("sortBy",e.sortBy),e.sortOrder&&t.append("sortOrder",e.sortOrder));const n=await Y.get(`/wallet/transactions?${t.toString()}`);if(n.data.success&&n.data.data)return Ar(n.data.data);throw new Error(n.data.message||"Lấy danh sách giao dịch thất bại")},getById:async e=>{const t=await Y.get(`/wallet/transactions/${e}`);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Lấy thông tin giao dịch thất bại")},create:async e=>{const t=await Y.post("/wallet/transactions",e);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Tạo giao dịch thất bại")},update:async(e,t)=>{const n=await Y.put(`/wallet/transactions/${e}`,t);if(n.data.success&&n.data.data)return n.data.data;throw new Error(n.data.message||"Cập nhật giao dịch thất bại")},delete:async e=>{const t=await Y.delete(`/wallet/transactions/${e}`);if(!t.data.success)throw new Error(t.data.message||"Xóa giao dịch thất bại")}},sf={getAll:async()=>{const e=await Y.get("/wallet/budgets");if(e.data.success&&e.data.data)return e.data.data.content||[];throw new Error(e.data.message||"Lấy danh sách ngân sách thất bại")},getByMonth:async e=>{const t=await Y.get(`/wallet/budgets/${e}`);if(t.data.success)return t.data.data||null;throw new Error(t.data.message||"Lấy thông tin ngân sách thất bại")},upsert:async e=>{const t=await Y.post("/wallet/budgets",e);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Tạo/cập nhật ngân sách thất bại")},delete:async e=>{const t=await Y.delete(`/wallet/budgets/${e}`);if(!t.data.success)throw new Error(t.data.message||"Xóa ngân sách thất bại")}},Gi={getDashboard:async(e,t,n)=>{const o=new URLSearchParams;o.append("period",e),t&&o.append("startDate",t),n&&o.append("endDate",n);const s=await Y.get(`/wallet/reports/dashboard?${o.toString()}`);if(s.data.success&&s.data.data)return s.data.data;throw new Error(s.data.message||"Lấy báo cáo dashboard thất bại")}},af={create:async e=>{const t=await Y.post("/wallet/settlements",e);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Tạo thanh toán thất bại")},getByReceivableId:async e=>{const t=await Y.get(`/wallet/settlements/receivable/${e}`);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Lấy lịch sử thanh toán cho khoản cho vay thất bại")},getByLiabilityId:async e=>{const t=await Y.get(`/wallet/settlements/liability/${e}`);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Lấy lịch sử trả nợ thất bại")}},cf={parseTransaction:async(e,t,n)=>{const o=await Y.post("/nlp/parse-transaction",{text:e,timezone:t||"Asia/Ho_Chi_Minh",locale:n||"vi-VN"});if(o.data.success&&o.data.data)return o.data.data;throw new Error(o.data.message||"Phân tích lệnh thất bại")}},jn={getAll:async(e=0,t=20)=>{const n=await Y.get(`/wallet/receivables?page=${e}&size=${t}`);if(n.data.success&&n.data.data)return Ar(n.data.data);throw new Error(n.data.message||"Lấy danh sách khoản cho vay thất bại")},getById:async e=>{const t=await Y.get(`/wallet/receivables/${e}`);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Lấy thông tin khoản cho vay thất bại")},create:async e=>{const t=await Y.post("/wallet/receivables",e);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Tạo khoản cho vay thất bại")},update:async(e,t)=>{const n=await Y.put(`/wallet/receivables/${e}`,t);if(n.data.success&&n.data.data)return n.data.data;throw new Error(n.data.message||"Cập nhật khoản cho vay thất bại")},delete:async e=>{const t=await Y.delete(`/wallet/receivables/${e}`);if(!t.data.success)throw new Error(t.data.message||"Xóa khoản cho vay thất bại")}},En={getAll:async(e=0,t=20)=>{const n=await Y.get(`/wallet/liabilities?page=${e}&size=${t}`);if(n.data.success&&n.data.data)return Ar(n.data.data);throw new Error(n.data.message||"Lấy danh sách khoản nợ thất bại")},getById:async e=>{const t=await Y.get(`/wallet/liabilities/${e}`);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Lấy thông tin khoản nợ thất bại")},create:async e=>{const t=await Y.post("/wallet/liabilities",e);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Tạo khoản nợ thất bại")},update:async(e,t)=>{const n=await Y.put(`/wallet/liabilities/${e}`,t);if(n.data.success&&n.data.data)return n.data.data;throw new Error(n.data.message||"Cập nhật khoản nợ thất bại")},delete:async e=>{const t=await Y.delete(`/wallet/liabilities/${e}`);if(!t.data.success)throw new Error(t.data.message||"Xóa khoản nợ thất bại")}},Dt={getAll:async(e=0,t=20)=>{const n=await Y.get(`/wallet/assets?page=${e}&size=${t}`);if(n.data.success&&n.data.data)return Ar(n.data.data);throw new Error(n.data.message||"Lấy danh sách tài sản thất bại")},getById:async e=>{const t=await Y.get(`/wallet/assets/${e}`);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Lấy thông tin tài sản thất bại")},getTotalValue:async()=>{const e=await Y.get("/wallet/assets/total-value");if(e.data.success&&e.data.data!==void 0){if(typeof e.data.data=="number")return e.data.data;const t=String(e.data.data);return parseFloat(t)||0}throw new Error(e.data.message||"Lấy tổng giá trị tài sản thất bại")},create:async e=>{const t=await Y.post("/wallet/assets",e);if(t.data.success&&t.data.data)return t.data.data;throw new Error(t.data.message||"Tạo tài sản thất bại")},update:async(e,t)=>{const n=await Y.put(`/wallet/assets/${e}`,t);if(n.data.success&&n.data.data)return n.data.data;throw new Error(n.data.message||"Cập nhật tài sản thất bại")},delete:async e=>{const t=await Y.delete(`/wallet/assets/${e}`);if(!t.data.success)throw new Error(t.data.message||"Xóa tài sản thất bại")}},ne={auth:of,accounts:$n,categories:Nn,transactions:Sn,budgets:sf,reports:Gi,receivables:jn,liabilities:En,assets:Dt,settlements:af,nlp:cf},Xi=u.createContext(null),Rr=()=>{const e=u.useContext(Xi);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},lf=({children:e})=>{const[t,n]=u.useState(null),[o,s]=u.useState(!0),a=p=>{try{const x=p.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),b=decodeURIComponent(atob(x).split("").map(h=>"%"+("00"+h.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(b)}catch(m){return console.error("Error decoding JWT:",m),null}};u.useEffect(()=>{(async()=>{const m=be.getAccessToken();if(m)try{const x=a(m);if(x&&x.exp){const b=x.exp*1e3;if(Date.now()<b)n({id:x.sub||x.userId||"",email:x.email||"",fullName:x.fullName||x.name||"User",status:x.status||"ACTIVE",role:x.role||"USER"});else{const h=be.getRefreshToken();if(h)try{await ne.auth.refreshToken(h);const f=be.getAccessToken();if(f){const y=a(f);y&&n({id:y.sub||y.userId||"",email:y.email||"",fullName:y.fullName||y.name||"User",status:y.status||"ACTIVE",role:y.role||"USER"})}}catch{be.clearTokens(),n(null)}else be.clearTokens(),n(null)}}}catch(x){console.error("Auth check error:",x),be.clearTokens(),n(null)}s(!1)})()},[]);const l={user:t,isAuthenticated:!!t,isLoading:o,login:async p=>{var m,x,b,h,f;try{const y=await ne.auth.login(p),w=be.getAccessToken();if(w){const g=a(w);n(g?{id:((m=y.user)==null?void 0:m.id)||g.sub||g.userId||"",email:((x=y.user)==null?void 0:x.email)||g.email||p.email,fullName:((b=y.user)==null?void 0:b.fullName)||g.fullName||g.name||"User",status:((h=y.user)==null?void 0:h.status)||g.status||"ACTIVE",role:((f=y.user)==null?void 0:f.role)||g.role||"USER"}:y.user)}else n(y.user)}catch(y){throw y}},logout:async()=>{try{await ne.auth.logout()}catch(p){console.error("Logout error:",p)}finally{be.clearTokens(),n(null)}},refreshAuth:async()=>{const p=be.getAccessToken();if(!p){n(null);return}try{const m=a(p);if(m&&m.exp){const x=m.exp*1e3;if(Date.now()<x)n({id:m.sub||m.userId||"",email:m.email||"",fullName:m.fullName||m.name||"User",status:m.status||"ACTIVE",role:m.role||"USER"});else{const b=be.getRefreshToken();if(b){await ne.auth.refreshToken(b);const h=be.getAccessToken();if(h){const f=a(h);f&&n({id:f.sub||f.userId||"",email:f.email||"",fullName:f.fullName||f.name||"User",status:f.status||"ACTIVE",role:f.role||"USER"})}}else throw new Error("No refresh token")}}}catch(m){throw be.clearTokens(),n(null),m}}};return r.jsx(Xi.Provider,{value:l,children:e})};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uf=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,o)=>o?o.toUpperCase():n.toLowerCase()),ra=e=>{const t=uf(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ji=(...e)=>e.filter((t,n,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===n).join(" ").trim(),pf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ff={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=u.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:s="",children:a,iconNode:i,...c},d)=>u.createElement("svg",{ref:d,...ff,width:t,height:t,stroke:e,strokeWidth:o?Number(n)*24/Number(t):n,className:Ji("lucide",s),...!a&&!pf(c)&&{"aria-hidden":"true"},...c},[...i.map(([l,p])=>u.createElement(l,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(e,t)=>{const n=u.forwardRef(({className:o,...s},a)=>u.createElement(hf,{ref:a,iconNode:t,className:Ji(`lucide-${df(ra(e))}`,`lucide-${e}`,o),...s}));return n.displayName=ra(e),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]],gf=X("arrow-down-left",mf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],xf=X("arrow-up-right",yf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],vf=X("book",bf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],$f=X("car",wf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Zi=X("check",Nf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ns=X("chevron-down",Sf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],oa=X("chevron-left",jf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Cf=X("chevron-right",Ef);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Qi=X("chevron-up",Tf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],sa=X("circle-alert",kf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Rf=X("circle-check-big",Af);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Df=X("circle-plus",If);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Of=X("dollar-sign",Pf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],zf=X("ellipsis",Lf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Mf=X("file-text",_f);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Wf=X("film",Ff);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Bf=X("folder-open",Vf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Hf=X("gift",Uf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Kf=X("heart",qf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aa=X("house",Yf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],Xf=X("inbox",Gf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Zf=X("layout-dashboard",Jf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ia=X("loader-circle",Qf);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],th=X("log-out",eh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],rh=X("menu",nh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],sh=X("moon",oh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]],ih=X("piggy-bank",ah);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ca=X("plus",ch);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],dh=X("receipt",lh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ph=X("refresh-cw",uh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],hh=X("search",fh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gh=X("settings",mh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],xh=X("shopping-bag",yh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],vh=X("sparkles",bh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],$h=X("square-pen",wh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Sh=X("sun",Nh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Eh=X("trash-2",jh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Th=X("trending-up",Ch);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ah=X("user",kh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],Ih=X("utensils",Rh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],la=X("wallet",Dh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rs=X("x",Ph),ec={Dashboard:Zf,Transactions:dh,Accounts:la,Categories:Bf,Budgets:ih,Receivables:xf,Liabilities:gf,Assets:aa,Settings:gh,Menu:rh,Add:ca,Logout:th,User:Ah,Back:oa,ChevronLeft:oa,ChevronRight:Cf,ChevronUp:Qi,ChevronDown:ns,Edit:$h,Delete:Eh,Close:rs,Check:Zi,CheckCircle:Rf,Alert:sa,Loading:ia,Loader:ia,Sparkles:vh,Wallet:la,Home:aa,Sun:Sh,Moon:sh,Search:hh,Utensils:Ih,Car:$f,ShoppingBag:xh,Film:Wf,Heart:Kf,Book:vf,FileText:Mf,MoreHorizontal:zf,DollarSign:Of,Gift:Hf,TrendingUp:Th,PlusCircle:Df,Plus:ca,RefreshCw:ph,Inbox:Xf,AlertCircle:sa},Oh=e=>ec[e]||null,H=({icon:e,name:t,size:n=20,className:o="",color:s})=>{const a=t||e;if(!a)return null;const i=ec[a];return i?r.jsx(i,{size:n,className:o,color:s,strokeWidth:2}):null},tc=Fe`
  /* Webkit browsers (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.background==="#0a0a0a"||typeof e.colors.background=="string"&&e.colors.background.includes("0a0a0a")?Gt.neutral[600]:Gt.neutral[400]};
    border-radius: 4px;
    transition: background 0.2s ease;

    &:hover {
      background: ${({theme:e})=>e.colors.background==="#0a0a0a"||typeof e.colors.background=="string"&&e.colors.background.includes("0a0a0a")?Gt.neutral[500]:Gt.neutral[500]};
    }
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${({theme:e})=>`${e.colors.background==="#0a0a0a"||typeof e.colors.background=="string"&&e.colors.background.includes("0a0a0a")?Gt.neutral[600]:Gt.neutral[400]} ${e.colors.background}`};
`,Lh=({isOpen:e,onToggle:t})=>{const{t:n}=Pe(),{currentRoute:o,navigate:s}=nt(),a=[{route:"dashboard",icon:"Dashboard",label:n("wallet.navigation.dashboard"),section:"main"},{route:"transactions",icon:"Transactions",label:n("wallet.navigation.transactions"),section:"main"},{route:"accounts",icon:"Accounts",label:n("wallet.navigation.accounts"),section:"main"},{route:"categories",icon:"Categories",label:n("wallet.navigation.categories"),section:"main"},{route:"budgets",icon:"Budgets",label:n("wallet.navigation.budgets"),section:"main"},{route:"receivables",icon:"Receivables",label:n("wallet.navigation.receivables"),section:"debts"},{route:"liabilities",icon:"Liabilities",label:n("wallet.navigation.liabilities"),section:"debts"},{route:"assets",icon:"Assets",label:n("wallet.navigation.assets"),section:"assets"},{route:"settings",icon:"Settings",label:n("wallet.navigation.settings"),section:"settings"}],i=l=>{s(l),t()},c=a.reduce((l,p)=>{const m=p.section||"other";return l[m]||(l[m]=[]),l[m].push(p),l},{}),d={main:n("wallet.sidebar.main"),debts:n("wallet.sidebar.debts"),assets:n("wallet.sidebar.assets"),settings:n("wallet.sidebar.settings")};return r.jsxs(r.Fragment,{children:[r.jsx(Mh,{className:`overlay ${e?"overlay--open":""}`,onClick:t}),r.jsx(_h,{className:`sidebar-menu-wrapper ${e?"sidebar-menu-wrapper--open":""}`,children:r.jsx("ul",{className:"menu-list",children:Object.entries(c).map(([l,p])=>r.jsxs("div",{children:[r.jsx("div",{className:"menu-section",children:d[l]||l}),p.map(m=>r.jsx("li",{className:"menu-item",children:r.jsxs("button",{className:`menu-link ${o===m.route?"menu-link--active":""}`,onClick:()=>i(m.route),children:[r.jsx("div",{className:"menu-icon-wrapper",children:r.jsx(H,{icon:m.icon,size:20,color:"currentColor"})}),r.jsx("span",{className:"menu-label",children:m.label})]})},m.route))]},l))})})]})},zh=({onClick:e})=>r.jsx(Fh,{className:"menu-toggle-button-wrapper",onClick:e,"aria-label":"Toggle menu",children:r.jsx(H,{icon:"Menu",size:20,color:"currentColor"})}),_h=K.aside`
  position: fixed;
  top: 72px;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 280px;
  background: ${({theme:e})=>e.colors.surface};
  border-right: 1px solid ${({theme:e})=>e.colors.border};
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 90;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[4]};
  box-shadow: none;
  ${tc}

  &--open {
    transform: translateX(0);
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 0;
    transform: translateX(0);
    box-shadow: none;
    padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[4]};
  }

  .menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[1]};

    .menu-item {
      /* No specific styles needed */

      .menu-link {
        width: 100%;
        display: flex;
        align-items: center;
        gap: ${({theme:e})=>e.spacing[3]};
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: transparent;
        border: none;
        border-radius: ${({theme:e})=>e.borderRadius.lg};
        color: ${({theme:e})=>e.colors.text.secondary};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        cursor: pointer;
        text-align: left;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: ${({theme:e})=>e.colors.primary};
          border-radius: 0 ${({theme:e})=>e.borderRadius.md} ${({theme:e})=>e.borderRadius.md} 0;
          transition: height 0.2s ease;
        }

        &:hover {
          background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.1)":"rgba(14, 165, 233, 0.05)"};
          color: ${({theme:e})=>e.colors.primary};
          transform: translateX(2px);
        }

        &:active {
          transform: translateX(0);
        }

        &--active {
          background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.15)":"rgba(14, 165, 233, 0.1)"};
          color: ${({theme:e})=>e.colors.primary};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};

          &::before {
            height: 24px;
          }
        }

        .menu-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .menu-label {
          flex: 1;
        }
      }
    }

    .menu-section {
      margin-top: ${({theme:e})=>e.spacing[3]};
      margin-bottom: ${({theme:e})=>e.spacing[3]};
      padding: 0 ${({theme:e})=>e.spacing[4]};
      font-size: ${({theme:e})=>e.typography.fontSize.xs};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      color: ${({theme:e})=>e.colors.text.muted};
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
  }
`,Mh=K.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 85;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &--open {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Fh=K.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.hover};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Wh=()=>{const e=ai(),t=ii(o=>o.theme.mode),n=()=>{e(_d())};return r.jsx(Vh,{className:"theme-toggle-wrapper",onClick:n,"aria-label":t==="dark"?"Switch to light mode":"Switch to dark mode",children:r.jsx(H,{icon:t==="dark"?"Moon":"Sun",size:20,color:"currentColor"})})},Vh=K.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.hover};
    border-color: ${({theme:e})=>e.colors.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary}40;
  }
`,Bh=()=>{const e=ai(),t=ii(s=>s.language.current),{i18n:n}=Pe(),o=()=>{const s=t==="vi"?"en":"vi";e(Md(s)),n.changeLanguage(s)};return r.jsx(Uh,{className:"language-toggle-wrapper",onClick:o,"aria-label":`Switch to ${t==="vi"?"English":"Tiếng Việt"}`,children:t==="vi"?"VI":"EN"})},Uh=K.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 ${({theme:e})=>e.spacing[3]};
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.hover};
    border-color: ${({theme:e})=>e.colors.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary}40;
  }
`,Hh=({onMenuToggle:e})=>{const{user:t,logout:n}=Rr(),{navigate:o}=nt(),{t:s}=Pe(),[a,i]=u.useState(!1),c=async()=>{i(!0);try{await n(),o("login")}catch(l){console.error("Logout error:",l),o("login")}finally{i(!1)}},d=()=>{typeof window<"u"&&(window.location.href="/")};return r.jsx(qh,{className:"wallet-app-header-wrapper",children:r.jsxs("div",{className:"header-content",children:[r.jsxs("div",{className:"branding-section",children:[r.jsx(zh,{onClick:e}),r.jsx("button",{className:"back-to-portfolio-button",onClick:d,title:s("wallet.header.backToPortfolio")||"Về Portfolio",children:r.jsx(H,{icon:"Home",size:20,color:"currentColor"})}),r.jsxs("div",{className:"logo",onClick:()=>o("dashboard"),children:[r.jsx(H,{icon:"Wallet",size:24,color:"currentColor"}),r.jsx("span",{children:s("wallet.app.title")})]})]}),r.jsxs("div",{className:"user-section",children:[r.jsx(Bh,{}),r.jsx(Wh,{}),r.jsx("span",{className:"user-name",children:(t==null?void 0:t.fullName)||(t==null?void 0:t.email)||"User"}),r.jsxs("button",{className:`logout-button ${a?"logout-button--loading":""}`,onClick:c,disabled:a,children:[r.jsx(H,{icon:a?"Loading":"Logout",size:16,color:"currentColor"}),r.jsx("span",{children:s(a?"wallet.header.loggingOut":"wallet.header.logout")})]})]})]})})},qh=K.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  backdrop-filter: blur(12px) saturate(180%);
  background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(10, 10, 10, 0.8)":"rgba(255, 255, 255, 0.8)"};
  box-shadow: 0 1px 0 0 ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    padding: 0 ${({theme:e})=>e.spacing[4]};
    max-width: 1600px;
    margin: 0 auto;
    gap: ${({theme:e})=>e.spacing[4]};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      height: 80px;
      padding: 0 ${({theme:e})=>e.spacing[6]};
    }

    .branding-section {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[4]};
    }

    .back-to-portfolio-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      color: ${({theme:e})=>e.colors.text.secondary};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        border-color: ${({theme:e})=>e.colors.primary};
        color: ${({theme:e})=>e.colors.primary};
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.15)":"rgba(14, 165, 233, 0.1)"};
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(0);
      }

      svg {
        color: currentColor;
      }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[3]};
      font-size: ${({theme:e})=>e.typography.fontSize.xl};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
      cursor: pointer;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.8;
      }

      svg {
        color: ${({theme:e})=>e.colors.primary};
      }
    }

    .user-section {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[4]};

      .user-name {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        color: ${({theme:e})=>e.colors.text.primary};
        display: none;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
          display: inline;
        }
      }

      .logout-button {
        display: flex;
        align-items: center;
        gap: ${({theme:e})=>e.spacing[2]};
        padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.surface};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.lg};
        color: ${({theme:e})=>e.colors.text.secondary};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        cursor: pointer;
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          border-color: ${({theme:e})=>e.colors.error};
          color: ${({theme:e})=>e.colors.error};
          background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(239, 68, 68, 0.1)":"rgba(239, 68, 68, 0.05)"};
          transform: translateY(-1px);
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        &--loading {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }
    }
  }
`,Kh=()=>{const{t:e}=Pe(),{currentRoute:t,navigate:n}=nt(),o=[{route:"dashboard",icon:"Dashboard",label:e("wallet.navigation.dashboard")},{route:"transactions",icon:"Transactions",label:e("wallet.navigation.transactions")},{route:"transactions/add",icon:"Add",label:e("wallet.navigation.add")}];return r.jsx(Yh,{className:"wallet-app-navigation-wrapper",children:r.jsx("ul",{className:"nav-list",children:o.map(s=>r.jsx("li",{className:"nav-item",children:r.jsxs("button",{className:`nav-button ${t===s.route?"nav-button--active":""}`,onClick:()=>n(s.route),"aria-label":s.label,children:[r.jsx("div",{className:"nav-icon-wrapper",children:r.jsx(H,{icon:s.icon,size:20,color:"currentColor"})}),r.jsx("span",{className:"nav-label",children:s.label})]})},s.route))})})},Yh=K.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(10, 10, 10, 0.9)":"rgba(255, 255, 255, 0.9)"};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  backdrop-filter: blur(10px);
  padding: ${({theme:e})=>e.spacing[2]} 0;
  padding-bottom: env(safe-area-inset-bottom, ${({theme:e})=>e.spacing[2]});

  .nav-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 600px;
    margin: 0 auto;

    .nav-item {
      flex: 1;

      .nav-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({theme:e})=>e.spacing[1]};
        padding: ${({theme:e})=>e.spacing[2]};
        color: ${({theme:e})=>e.colors.text.secondary};
        text-decoration: none;
        font-size: ${({theme:e})=>e.typography.fontSize.xs};
        font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
        transition: all 0.2s ease;
        border-radius: ${({theme:e})=>e.borderRadius.md};
        background: transparent;
        border: none;
        cursor: pointer;
        width: 100%;

        &:hover {
          color: ${({theme:e})=>e.colors.primary};
          background: ${({theme:e})=>e.colors.primary}10;
        }

        &--active {
          color: ${({theme:e})=>e.colors.primary};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        }

        .nav-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }

        .nav-label {
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
        }
      }
    }
  }
`,Gh=({children:e})=>{const[t,n]=u.useState(!1);return r.jsxs(Xh,{className:"wallet-app-layout-wrapper",children:[r.jsx(Hh,{onMenuToggle:()=>n(!t)}),r.jsxs("div",{className:"content-wrapper",children:[r.jsx(Lh,{isOpen:t,onToggle:()=>n(!t)}),r.jsx("main",{className:"main-content",children:e})]}),r.jsx(Kh,{})]})},Xh=K.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.background};
  position: relative;

  .content-wrapper {
    display: flex;
    flex: 1;
    margin-top: 72px; /* Header height với spacing */
    margin-bottom: 0;
    position: relative;
    width: 100%;
    padding-bottom: ${({theme:e})=>e.spacing[6]};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      margin-top: 80px;
      padding-bottom: ${({theme:e})=>e.spacing[8]};
    }

    .main-content {
      flex: 1;
      padding: ${({theme:e})=>e.spacing[6]} ${({theme:e})=>e.spacing[4]};
      overflow-y: auto;
      width: 100%;
      min-width: 0;
      max-width: 100%;
      ${tc}

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[6]};
        margin-left: 280px;
        width: calc(100% - 280px);
        max-width: 1400px;
        margin-left: 280px;
        margin-right: auto;
      }

      @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
        padding: ${({theme:e})=>e.spacing[10]} ${({theme:e})=>e.spacing[8]};
      }
    }
  }
`,Jh=()=>{const{t:e}=Pe(),{login:t}=Rr(),{navigate:n}=nt(),[o,s]=u.useState(""),[a,i]=u.useState(""),[c,d]=u.useState(null),[l,p]=u.useState(!1),m=async x=>{x.preventDefault(),d(null),p(!0);try{await t({email:o,password:a}),n("dashboard")}catch(b){d(fe(b))}finally{p(!1)}};return r.jsx(Zh,{className:"login-wrapper",children:r.jsxs("div",{className:"login-card",children:[r.jsx("h1",{className:"title",children:e("wallet.login.title")}),r.jsx("p",{className:"description",children:e("wallet.login.description")}),r.jsxs("form",{className:"form",onSubmit:m,children:[c&&r.jsx("div",{className:"error-message",children:c}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",htmlFor:"email",children:e("wallet.login.email")}),r.jsx("input",{className:"input",id:"email",type:"email",placeholder:e("wallet.login.emailPlaceholder"),value:o,onChange:x=>s(x.target.value),required:!0,disabled:l,autoComplete:"email"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",htmlFor:"password",children:e("wallet.login.password")}),r.jsx("input",{className:"input",id:"password",type:"password",placeholder:e("wallet.login.passwordPlaceholder"),value:a,onChange:x=>i(x.target.value),required:!0,disabled:l,autoComplete:"current-password"})]}),r.jsx("button",{className:`login-button ${l?"login-button--loading":""}`,type:"submit",disabled:l,children:e(l?"wallet.login.signingIn":"wallet.login.signIn")}),r.jsxs("div",{className:"register-link",children:[r.jsx("span",{children:e("wallet.login.dontHaveAccount","Chưa có tài khoản?")}),r.jsx("button",{type:"button",className:"link-button",onClick:()=>n("register"),disabled:l,children:e("wallet.login.signUp","Đăng ký")})]})]})]})})},Zh=K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({theme:e})=>e.spacing[6]};

  .login-card {
    width: 100%;
    max-width: 400px;
    padding: ${({theme:e})=>e.spacing[8]};
    background: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    box-shadow: ${({theme:e})=>e.shadows.lg};

    .title {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0 0 ${({theme:e})=>e.spacing[2]} 0;
      text-align: center;
    }

    .description {
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      color: ${({theme:e})=>e.colors.text.secondary};
      margin: 0 0 ${({theme:e})=>e.spacing[6]} 0;
      text-align: center;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[4]};

      .error-message {
        padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
        background: ${({theme:e})=>e.colors.error}20;
        border: 1px solid ${({theme:e})=>e.colors.error};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        color: ${({theme:e})=>e.colors.error};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[1]};

        .label {
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          color: ${({theme:e})=>e.colors.text.primary};
        }

        .input {
          width: 100%;
          padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
          background: ${({theme:e})=>e.colors.background};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.md};
          font-size: ${({theme:e})=>e.typography.fontSize.base};
          color: ${({theme:e})=>e.colors.text.primary};
          transition: all 0.2s ease;

          &:focus {
            outline: none;
            border-color: ${({theme:e})=>e.colors.primary};
            box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
          }
        }
      }

      .login-button {
        width: 100%;
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        background: ${({theme:e})=>e.colors.primary};
        color: white;
        border: none;
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }

      .register-link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${({theme:e})=>e.spacing[2]};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};

        .link-button {
          background: none;
          border: none;
          color: ${({theme:e})=>e.colors.primary};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          cursor: pointer;
          text-decoration: underline;
          padding: 0;

          &:hover:not(:disabled) {
            opacity: 0.8;
          }
        }
      }
    }
  }
`,Qh=()=>{const{t:e}=Pe(),{navigate:t}=nt(),[n,o]=u.useState(""),[s,a]=u.useState(""),[i,c]=u.useState(""),[d,l]=u.useState(null),[p,m]=u.useState(!1),[x,b]=u.useState({score:0,feedback:""}),h=w=>{let g=0;const N=[];return w.length>=8?g+=1:N.push("Tối thiểu 8 ký tự"),/[a-z]/.test(w)?g+=1:N.push("Có chữ thường"),/[A-Z]/.test(w)?g+=1:N.push("Có chữ hoa"),/[0-9]/.test(w)?g+=1:N.push("Có số"),{score:g,feedback:N.length>0?N.join(", "):"Mật khẩu mạnh"}},f=w=>{a(w),w.length>0?b(h(w)):b({score:0,feedback:""})},y=async w=>{if(w.preventDefault(),l(null),x.score<3){l("Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số");return}m(!0);try{await ne.auth.register({email:n,password:s,...i&&{fullName:i}}),typeof window<"u"&&sessionStorage.setItem("register_email",n),t("verify-email")}catch(g){l(fe(g))}finally{m(!1)}};return r.jsx(em,{className:"register-wrapper",children:r.jsxs("div",{className:"register-card",children:[r.jsx("h1",{className:"title",children:e("wallet.register.title","Đăng ký tài khoản")}),r.jsx("p",{className:"description",children:e("wallet.register.description","Tạo tài khoản mới để bắt đầu quản lý chi tiêu")}),r.jsxs("form",{className:"form",onSubmit:y,children:[d&&r.jsx("div",{className:"error-message",children:d}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"label",htmlFor:"email",children:[e("wallet.register.email","Email")," ",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("input",{className:"input",id:"email",type:"email",placeholder:e("wallet.register.emailPlaceholder","Nhập email của bạn"),value:n,onChange:w=>o(w.target.value),required:!0,disabled:p,autoComplete:"email"})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"label",htmlFor:"fullName",children:[e("wallet.register.fullName","Họ và tên")," ",r.jsx("span",{className:"optional",children:"(Tùy chọn)"})]}),r.jsx("input",{className:"input",id:"fullName",type:"text",placeholder:e("wallet.register.fullNamePlaceholder","Nhập họ và tên"),value:i,onChange:w=>c(w.target.value),disabled:p,autoComplete:"name"})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"label",htmlFor:"password",children:[e("wallet.register.password","Mật khẩu")," ",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("input",{className:"input",id:"password",type:"password",placeholder:e("wallet.register.passwordPlaceholder","Nhập mật khẩu"),value:s,onChange:w=>f(w.target.value),required:!0,disabled:p,autoComplete:"new-password"}),s.length>0&&r.jsxs("div",{className:"password-strength",children:[r.jsx("div",{className:"strength-bar",children:r.jsx("div",{className:`strength-fill strength-${x.score}`,style:{width:`${x.score/4*100}%`}})}),r.jsx("span",{className:"strength-feedback",children:x.feedback})]})]}),r.jsx("button",{className:`register-button ${p?"register-button--loading":""}`,type:"submit",disabled:p||x.score<3,children:p?e("wallet.register.registering","Đang đăng ký..."):e("wallet.register.register","Đăng ký")}),r.jsxs("div",{className:"login-link",children:[r.jsx("span",{children:e("wallet.register.alreadyHaveAccount","Đã có tài khoản?")}),r.jsx("button",{type:"button",className:"link-button",onClick:()=>t("login"),disabled:p,children:e("wallet.register.signIn","Đăng nhập")})]})]})]})})},em=K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({theme:e})=>e.spacing[6]};

  .register-card {
    width: 100%;
    max-width: 400px;
    padding: ${({theme:e})=>e.spacing[8]};
    background: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    box-shadow: ${({theme:e})=>e.shadows.lg};

    .title {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0 0 ${({theme:e})=>e.spacing[2]} 0;
      text-align: center;
    }

    .description {
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      color: ${({theme:e})=>e.colors.text.secondary};
      margin: 0 0 ${({theme:e})=>e.spacing[6]} 0;
      text-align: center;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[4]};

      .error-message {
        padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
        background: ${({theme:e})=>e.colors.error}20;
        border: 1px solid ${({theme:e})=>e.colors.error};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        color: ${({theme:e})=>e.colors.error};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[1]};

        .label {
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          color: ${({theme:e})=>e.colors.text.primary};

          .required {
            color: ${({theme:e})=>e.colors.error};
          }

          .optional {
            color: ${({theme:e})=>e.colors.text.secondary};
            font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
            font-size: ${({theme:e})=>e.typography.fontSize.xs};
          }
        }

        .input {
          width: 100%;
          padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
          background: ${({theme:e})=>e.colors.background};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.md};
          font-size: ${({theme:e})=>e.typography.fontSize.base};
          color: ${({theme:e})=>e.colors.text.primary};
          transition: all 0.2s ease;
          box-sizing: border-box;

          &:focus {
            outline: none;
            border-color: ${({theme:e})=>e.colors.primary};
            box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
          }
        }

        .password-strength {
          margin-top: ${({theme:e})=>e.spacing[1]};
          display: flex;
          flex-direction: column;
          gap: ${({theme:e})=>e.spacing[1]};

          .strength-bar {
            width: 100%;
            height: 4px;
            background: ${({theme:e})=>e.colors.border};
            border-radius: 2px;
            overflow: hidden;

            .strength-fill {
              height: 100%;
              transition: width 0.3s ease, background-color 0.3s ease;
              border-radius: 2px;

              &.strength-0, &.strength-1 {
                background: ${({theme:e})=>e.colors.error};
              }

              &.strength-2 {
                background: #f59e0b;
              }

              &.strength-3 {
                background: #3b82f6;
              }

              &.strength-4 {
                background: #10b981;
              }
            }
          }

          .strength-feedback {
            font-size: ${({theme:e})=>e.typography.fontSize.xs};
            color: ${({theme:e})=>e.colors.text.secondary};
          }
        }
      }

      .register-button {
        width: 100%;
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        background: ${({theme:e})=>e.colors.primary};
        color: white;
        border: none;
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }

      .login-link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${({theme:e})=>e.spacing[2]};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};

        .link-button {
          background: none;
          border: none;
          color: ${({theme:e})=>e.colors.primary};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          cursor: pointer;
          text-decoration: underline;
          padding: 0;

          &:hover:not(:disabled) {
            opacity: 0.8;
          }
        }
      }
    }
  }
`,tm=()=>{const{t:e}=Pe(),{navigate:t}=nt(),[n,o]=u.useState(""),[s,a]=u.useState(""),[i,c]=u.useState(null),[d,l]=u.useState(!1),[p,m]=u.useState(!1),[x,b]=u.useState(0);u.useEffect(()=>{if(typeof window<"u"){const w=sessionStorage.getItem("register_email");if(w)o(w);else{const N=new URLSearchParams(window.location.search).get("email");N&&o(N)}}},[]),u.useEffect(()=>{if(x>0){const w=setTimeout(()=>{b(x-1)},1e3);return()=>clearTimeout(w)}},[x]);const h=w=>{const g=w.replace(/\D/g,"").slice(0,6);a(g),c(null)},f=async w=>{if(w.preventDefault(),c(null),s.length!==6){c("Vui lòng nhập đầy đủ 6 chữ số");return}if(!n){c("Email không hợp lệ");return}l(!0);try{const g=await ne.auth.verifyEmail({email:n,verificationCode:s});typeof window<"u"&&sessionStorage.removeItem("register_email"),g.accessToken&&g.refreshToken?window.location.reload():t("login")}catch(g){const N=fe(g);c(N),a("")}finally{l(!1)}},y=async()=>{if(!(!n||x>0)){m(!0),c(null);try{await ne.auth.register({email:n,password:"temp",fullName:""}),b(60)}catch(w){c(fe(w))}finally{m(!1)}}};return r.jsx(nm,{className:"verify-email-wrapper",children:r.jsxs("div",{className:"verify-card",children:[r.jsx("h1",{className:"title",children:e("wallet.verifyEmail.title","Xác nhận email")}),r.jsx("p",{className:"description",children:e("wallet.verifyEmail.description","Chúng tôi đã gửi mã xác nhận 6 chữ số đến email của bạn. Vui lòng kiểm tra và nhập mã để kích hoạt tài khoản.")}),n&&r.jsxs("div",{className:"email-display",children:[r.jsx("span",{className:"email-label",children:e("wallet.verifyEmail.email","Email:")}),r.jsx("span",{className:"email-value",children:n})]}),r.jsxs("form",{className:"form",onSubmit:f,children:[i&&r.jsx("div",{className:"error-message",children:i}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"label",htmlFor:"verificationCode",children:[e("wallet.verifyEmail.code","Mã xác nhận")," ",r.jsx("span",{className:"required",children:"*"})]}),r.jsx("input",{className:"input code-input",id:"verificationCode",type:"text",inputMode:"numeric",placeholder:e("wallet.verifyEmail.codePlaceholder","Nhập 6 chữ số"),value:s,onChange:w=>h(w.target.value),required:!0,disabled:d,autoComplete:"one-time-code",maxLength:6}),r.jsxs("div",{className:"code-hint",children:[s.length,"/6"]})]}),r.jsx("button",{className:`verify-button ${d?"verify-button--loading":""}`,type:"submit",disabled:d||s.length!==6,children:d?e("wallet.verifyEmail.verifying","Đang xác nhận..."):e("wallet.verifyEmail.verify","Xác nhận")}),r.jsxs("div",{className:"resend-section",children:[r.jsx("span",{className:"resend-text",children:e("wallet.verifyEmail.notReceived","Không nhận được mã?")}),x>0?r.jsx("span",{className:"cooldown-text",children:e("wallet.verifyEmail.resendIn","Gửi lại sau {{seconds}}s",{seconds:x})}):r.jsx("button",{type:"button",className:"resend-button",onClick:y,disabled:p||!n,children:p?e("wallet.verifyEmail.resending","Đang gửi..."):e("wallet.verifyEmail.resend","Gửi lại mã")})]}),r.jsx("div",{className:"back-link",children:r.jsx("button",{type:"button",className:"link-button",onClick:()=>t("login"),disabled:d,children:e("wallet.verifyEmail.backToLogin","← Quay lại đăng nhập")})})]})]})})},nm=K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({theme:e})=>e.spacing[6]};

  .verify-card {
    width: 100%;
    max-width: 400px;
    padding: ${({theme:e})=>e.spacing[8]};
    background: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    box-shadow: ${({theme:e})=>e.shadows.lg};

    .title {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0 0 ${({theme:e})=>e.spacing[2]} 0;
      text-align: center;
    }

    .description {
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      color: ${({theme:e})=>e.colors.text.secondary};
      margin: 0 0 ${({theme:e})=>e.spacing[4]} 0;
      text-align: center;
      line-height: 1.5;
    }

    .email-display {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${({theme:e})=>e.spacing[2]};
      padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
      background: ${({theme:e})=>e.colors.background};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.md};
      margin-bottom: ${({theme:e})=>e.spacing[4]};

      .email-label {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};
      }

      .email-value {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        color: ${({theme:e})=>e.colors.text.primary};
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[4]};

      .error-message {
        padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
        background: ${({theme:e})=>e.colors.error}20;
        border: 1px solid ${({theme:e})=>e.colors.error};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        color: ${({theme:e})=>e.colors.error};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[1]};

        .label {
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          color: ${({theme:e})=>e.colors.text.primary};

          .required {
            color: ${({theme:e})=>e.colors.error};
          }
        }

        .code-input {
          width: 100%;
          padding: ${({theme:e})=>e.spacing[4]};
          background: ${({theme:e})=>e.colors.background};
          border: 2px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.md};
          font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
          font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
          color: ${({theme:e})=>e.colors.text.primary};
          text-align: center;
          letter-spacing: 0.5em;
          transition: all 0.2s ease;
          box-sizing: border-box;

          &:focus {
            outline: none;
            border-color: ${({theme:e})=>e.colors.primary};
            box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
          }
        }

        .code-hint {
          text-align: center;
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
          color: ${({theme:e})=>e.colors.text.secondary};
          margin-top: ${({theme:e})=>e.spacing[1]};
        }
      }

      .verify-button {
        width: 100%;
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        background: ${({theme:e})=>e.colors.primary};
        color: white;
        border: none;
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }

      .resend-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({theme:e})=>e.spacing[2]};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};

        .resend-button {
          background: none;
          border: none;
          color: ${({theme:e})=>e.colors.primary};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          cursor: pointer;
          text-decoration: underline;
          padding: 0;

          &:hover:not(:disabled) {
            opacity: 0.8;
          }
        }
      }

      .back-link {
        display: flex;
        justify-content: center;
        margin-top: ${({theme:e})=>e.spacing[2]};

        .link-button {
          background: none;
          border: none;
          color: ${({theme:e})=>e.colors.text.secondary};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          cursor: pointer;
          padding: 0;

          &:hover:not(:disabled) {
            color: ${({theme:e})=>e.colors.text.primary};
          }
        }
      }
    }
  }
`;function nc(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=nc(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function rc(){for(var e,t,n=0,o="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=nc(e))&&(o&&(o+=" "),o+=t);return o}const rm=(e,t)=>{const n=new Array(e.length+t.length);for(let o=0;o<e.length;o++)n[o]=e[o];for(let o=0;o<t.length;o++)n[e.length+o]=t[o];return n},om=(e,t)=>({classGroupId:e,validator:t}),oc=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),gr="-",da=[],sm="arbitrary..",am=e=>{const t=cm(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{if(i.startsWith("[")&&i.endsWith("]"))return im(i);const c=i.split(gr),d=c[0]===""&&c.length>1?1:0;return sc(c,d,t)},getConflictingClassGroupIds:(i,c)=>{if(c){const d=o[i],l=n[i];return d?l?rm(l,d):d:l||da}return n[i]||da}}},sc=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const s=e[t],a=n.nextPart.get(s);if(a){const l=sc(e,t+1,a);if(l)return l}const i=n.validators;if(i===null)return;const c=t===0?e.join(gr):e.slice(t).join(gr),d=i.length;for(let l=0;l<d;l++){const p=i[l];if(p.validator(c))return p.classGroupId}},im=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),o=t.slice(0,n);return o?sm+o:void 0})(),cm=e=>{const{theme:t,classGroups:n}=e;return lm(n,t)},lm=(e,t)=>{const n=oc();for(const o in e){const s=e[o];os(s,n,o,t)}return n},os=(e,t,n,o)=>{const s=e.length;for(let a=0;a<s;a++){const i=e[a];dm(i,t,n,o)}},dm=(e,t,n,o)=>{if(typeof e=="string"){um(e,t,n);return}if(typeof e=="function"){pm(e,t,n,o);return}fm(e,t,n,o)},um=(e,t,n)=>{const o=e===""?t:ac(t,e);o.classGroupId=n},pm=(e,t,n,o)=>{if(hm(e)){os(e(o),t,n,o);return}t.validators===null&&(t.validators=[]),t.validators.push(om(n,e))},fm=(e,t,n,o)=>{const s=Object.entries(e),a=s.length;for(let i=0;i<a;i++){const[c,d]=s[i];os(d,ac(t,c),n,o)}},ac=(e,t)=>{let n=e;const o=t.split(gr),s=o.length;for(let a=0;a<s;a++){const i=o[a];let c=n.nextPart.get(i);c||(c=oc(),n.nextPart.set(i,c)),n=c}return n},hm=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,mm=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),o=Object.create(null);const s=(a,i)=>{n[a]=i,t++,t>e&&(t=0,o=n,n=Object.create(null))};return{get(a){let i=n[a];if(i!==void 0)return i;if((i=o[a])!==void 0)return s(a,i),i},set(a,i){a in n?n[a]=i:s(a,i)}}},Do="!",ua=":",gm=[],pa=(e,t,n,o,s)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:o,isExternal:s}),ym=e=>{const{prefix:t,experimentalParseClassName:n}=e;let o=s=>{const a=[];let i=0,c=0,d=0,l;const p=s.length;for(let f=0;f<p;f++){const y=s[f];if(i===0&&c===0){if(y===ua){a.push(s.slice(d,f)),d=f+1;continue}if(y==="/"){l=f;continue}}y==="["?i++:y==="]"?i--:y==="("?c++:y===")"&&c--}const m=a.length===0?s:s.slice(d);let x=m,b=!1;m.endsWith(Do)?(x=m.slice(0,-1),b=!0):m.startsWith(Do)&&(x=m.slice(1),b=!0);const h=l&&l>d?l-d:void 0;return pa(a,b,x,h)};if(t){const s=t+ua,a=o;o=i=>i.startsWith(s)?a(i.slice(s.length)):pa(gm,!1,i,void 0,!0)}if(n){const s=o;o=a=>n({className:a,parseClassName:s})}return o},xm=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,o)=>{t.set(n,1e6+o)}),n=>{const o=[];let s=[];for(let a=0;a<n.length;a++){const i=n[a],c=i[0]==="[",d=t.has(i);c||d?(s.length>0&&(s.sort(),o.push(...s),s=[]),o.push(i)):s.push(i)}return s.length>0&&(s.sort(),o.push(...s)),o}},bm=e=>({cache:mm(e.cacheSize),parseClassName:ym(e),sortModifiers:xm(e),...am(e)}),vm=/\s+/,wm=(e,t)=>{const{parseClassName:n,getClassGroupId:o,getConflictingClassGroupIds:s,sortModifiers:a}=t,i=[],c=e.trim().split(vm);let d="";for(let l=c.length-1;l>=0;l-=1){const p=c[l],{isExternal:m,modifiers:x,hasImportantModifier:b,baseClassName:h,maybePostfixModifierPosition:f}=n(p);if(m){d=p+(d.length>0?" "+d:d);continue}let y=!!f,w=o(y?h.substring(0,f):h);if(!w){if(!y){d=p+(d.length>0?" "+d:d);continue}if(w=o(h),!w){d=p+(d.length>0?" "+d:d);continue}y=!1}const g=x.length===0?"":x.length===1?x[0]:a(x).join(":"),N=b?g+Do:g,$=N+w;if(i.indexOf($)>-1)continue;i.push($);const S=s(w,y);for(let T=0;T<S.length;++T){const E=S[T];i.push(N+E)}d=p+(d.length>0?" "+d:d)}return d},$m=(...e)=>{let t=0,n,o,s="";for(;t<e.length;)(n=e[t++])&&(o=ic(n))&&(s&&(s+=" "),s+=o);return s},ic=e=>{if(typeof e=="string")return e;let t,n="";for(let o=0;o<e.length;o++)e[o]&&(t=ic(e[o]))&&(n&&(n+=" "),n+=t);return n},Nm=(e,...t)=>{let n,o,s,a;const i=d=>{const l=t.reduce((p,m)=>m(p),e());return n=bm(l),o=n.cache.get,s=n.cache.set,a=c,c(d)},c=d=>{const l=o(d);if(l)return l;const p=wm(d,n);return s(d,p),p};return a=i,(...d)=>a($m(...d))},Sm=[],Ie=e=>{const t=n=>n[e]||Sm;return t.isThemeGetter=!0,t},cc=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,lc=/^\((?:(\w[\w-]*):)?(.+)\)$/i,jm=/^\d+\/\d+$/,Em=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Cm=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Tm=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,km=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Am=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Xt=e=>jm.test(e),te=e=>!!e&&!Number.isNaN(Number(e)),vt=e=>!!e&&Number.isInteger(Number(e)),oo=e=>e.endsWith("%")&&te(e.slice(0,-1)),ft=e=>Em.test(e),Rm=()=>!0,Im=e=>Cm.test(e)&&!Tm.test(e),dc=()=>!1,Dm=e=>km.test(e),Pm=e=>Am.test(e),Om=e=>!z(e)&&!_(e),Lm=e=>fn(e,fc,dc),z=e=>cc.test(e),It=e=>fn(e,hc,Im),so=e=>fn(e,Wm,te),fa=e=>fn(e,uc,dc),zm=e=>fn(e,pc,Pm),Yn=e=>fn(e,mc,Dm),_=e=>lc.test(e),wn=e=>hn(e,hc),_m=e=>hn(e,Vm),ha=e=>hn(e,uc),Mm=e=>hn(e,fc),Fm=e=>hn(e,pc),Gn=e=>hn(e,mc,!0),fn=(e,t,n)=>{const o=cc.exec(e);return o?o[1]?t(o[1]):n(o[2]):!1},hn=(e,t,n=!1)=>{const o=lc.exec(e);return o?o[1]?t(o[1]):n:!1},uc=e=>e==="position"||e==="percentage",pc=e=>e==="image"||e==="url",fc=e=>e==="length"||e==="size"||e==="bg-size",hc=e=>e==="length",Wm=e=>e==="number",Vm=e=>e==="family-name",mc=e=>e==="shadow",Bm=()=>{const e=Ie("color"),t=Ie("font"),n=Ie("text"),o=Ie("font-weight"),s=Ie("tracking"),a=Ie("leading"),i=Ie("breakpoint"),c=Ie("container"),d=Ie("spacing"),l=Ie("radius"),p=Ie("shadow"),m=Ie("inset-shadow"),x=Ie("text-shadow"),b=Ie("drop-shadow"),h=Ie("blur"),f=Ie("perspective"),y=Ie("aspect"),w=Ie("ease"),g=Ie("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],$=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],S=()=>[...$(),_,z],T=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto","contain","none"],v=()=>[_,z,d],k=()=>[Xt,"full","auto",...v()],O=()=>[vt,"none","subgrid",_,z],L=()=>["auto",{span:["full",vt,_,z]},vt,_,z],j=()=>[vt,"auto",_,z],I=()=>["auto","min","max","fr",_,z],R=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],W=()=>["start","end","center","stretch","center-safe","end-safe"],P=()=>["auto",...v()],B=()=>[Xt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...v()],A=()=>[e,_,z],q=()=>[...$(),ha,fa,{position:[_,z]}],ye=()=>["no-repeat",{repeat:["","x","y","space","round"]}],xe=()=>["auto","cover","contain",Mm,Lm,{size:[_,z]}],me=()=>[oo,wn,It],J=()=>["","none","full",l,_,z],re=()=>["",te,wn,It],V=()=>["solid","dashed","dotted","double"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],D=()=>[te,oo,ha,fa],ee=()=>["","none",h,_,z],ve=()=>["none",te,_,z],ae=()=>["none",te,_,z],le=()=>[te,_,z],ie=()=>[Xt,"full",...v()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ft],breakpoint:[ft],color:[Rm],container:[ft],"drop-shadow":[ft],ease:["in","out","in-out"],font:[Om],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ft],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ft],shadow:[ft],spacing:["px",te],text:[ft],"text-shadow":[ft],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Xt,z,_,y]}],container:["container"],columns:[{columns:[te,z,_,c]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:S()}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:k()}],"inset-x":[{"inset-x":k()}],"inset-y":[{"inset-y":k()}],start:[{start:k()}],end:[{end:k()}],top:[{top:k()}],right:[{right:k()}],bottom:[{bottom:k()}],left:[{left:k()}],visibility:["visible","invisible","collapse"],z:[{z:[vt,"auto",_,z]}],basis:[{basis:[Xt,"full","auto",c,...v()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[te,Xt,"auto","initial","none",z]}],grow:[{grow:["",te,_,z]}],shrink:[{shrink:["",te,_,z]}],order:[{order:[vt,"first","last","none",_,z]}],"grid-cols":[{"grid-cols":O()}],"col-start-end":[{col:L()}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":O()}],"row-start-end":[{row:L()}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":I()}],"auto-rows":[{"auto-rows":I()}],gap:[{gap:v()}],"gap-x":[{"gap-x":v()}],"gap-y":[{"gap-y":v()}],"justify-content":[{justify:[...R(),"normal"]}],"justify-items":[{"justify-items":[...W(),"normal"]}],"justify-self":[{"justify-self":["auto",...W()]}],"align-content":[{content:["normal",...R()]}],"align-items":[{items:[...W(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...W(),{baseline:["","last"]}]}],"place-content":[{"place-content":R()}],"place-items":[{"place-items":[...W(),"baseline"]}],"place-self":[{"place-self":["auto",...W()]}],p:[{p:v()}],px:[{px:v()}],py:[{py:v()}],ps:[{ps:v()}],pe:[{pe:v()}],pt:[{pt:v()}],pr:[{pr:v()}],pb:[{pb:v()}],pl:[{pl:v()}],m:[{m:P()}],mx:[{mx:P()}],my:[{my:P()}],ms:[{ms:P()}],me:[{me:P()}],mt:[{mt:P()}],mr:[{mr:P()}],mb:[{mb:P()}],ml:[{ml:P()}],"space-x":[{"space-x":v()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":v()}],"space-y-reverse":["space-y-reverse"],size:[{size:B()}],w:[{w:[c,"screen",...B()]}],"min-w":[{"min-w":[c,"screen","none",...B()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[i]},...B()]}],h:[{h:["screen","lh",...B()]}],"min-h":[{"min-h":["screen","lh","none",...B()]}],"max-h":[{"max-h":["screen","lh",...B()]}],"font-size":[{text:["base",n,wn,It]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,_,so]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",oo,z]}],"font-family":[{font:[_m,z,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,_,z]}],"line-clamp":[{"line-clamp":[te,"none",_,so]}],leading:[{leading:[a,...v()]}],"list-image":[{"list-image":["none",_,z]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",_,z]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:A()}],"text-color":[{text:A()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:[te,"from-font","auto",_,It]}],"text-decoration-color":[{decoration:A()}],"underline-offset":[{"underline-offset":[te,"auto",_,z]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:v()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",_,z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",_,z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:q()}],"bg-repeat":[{bg:ye()}],"bg-size":[{bg:xe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},vt,_,z],radial:["",_,z],conic:[vt,_,z]},Fm,zm]}],"bg-color":[{bg:A()}],"gradient-from-pos":[{from:me()}],"gradient-via-pos":[{via:me()}],"gradient-to-pos":[{to:me()}],"gradient-from":[{from:A()}],"gradient-via":[{via:A()}],"gradient-to":[{to:A()}],rounded:[{rounded:J()}],"rounded-s":[{"rounded-s":J()}],"rounded-e":[{"rounded-e":J()}],"rounded-t":[{"rounded-t":J()}],"rounded-r":[{"rounded-r":J()}],"rounded-b":[{"rounded-b":J()}],"rounded-l":[{"rounded-l":J()}],"rounded-ss":[{"rounded-ss":J()}],"rounded-se":[{"rounded-se":J()}],"rounded-ee":[{"rounded-ee":J()}],"rounded-es":[{"rounded-es":J()}],"rounded-tl":[{"rounded-tl":J()}],"rounded-tr":[{"rounded-tr":J()}],"rounded-br":[{"rounded-br":J()}],"rounded-bl":[{"rounded-bl":J()}],"border-w":[{border:re()}],"border-w-x":[{"border-x":re()}],"border-w-y":[{"border-y":re()}],"border-w-s":[{"border-s":re()}],"border-w-e":[{"border-e":re()}],"border-w-t":[{"border-t":re()}],"border-w-r":[{"border-r":re()}],"border-w-b":[{"border-b":re()}],"border-w-l":[{"border-l":re()}],"divide-x":[{"divide-x":re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...V(),"hidden","none"]}],"divide-style":[{divide:[...V(),"hidden","none"]}],"border-color":[{border:A()}],"border-color-x":[{"border-x":A()}],"border-color-y":[{"border-y":A()}],"border-color-s":[{"border-s":A()}],"border-color-e":[{"border-e":A()}],"border-color-t":[{"border-t":A()}],"border-color-r":[{"border-r":A()}],"border-color-b":[{"border-b":A()}],"border-color-l":[{"border-l":A()}],"divide-color":[{divide:A()}],"outline-style":[{outline:[...V(),"none","hidden"]}],"outline-offset":[{"outline-offset":[te,_,z]}],"outline-w":[{outline:["",te,wn,It]}],"outline-color":[{outline:A()}],shadow:[{shadow:["","none",p,Gn,Yn]}],"shadow-color":[{shadow:A()}],"inset-shadow":[{"inset-shadow":["none",m,Gn,Yn]}],"inset-shadow-color":[{"inset-shadow":A()}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:A()}],"ring-offset-w":[{"ring-offset":[te,It]}],"ring-offset-color":[{"ring-offset":A()}],"inset-ring-w":[{"inset-ring":re()}],"inset-ring-color":[{"inset-ring":A()}],"text-shadow":[{"text-shadow":["none",x,Gn,Yn]}],"text-shadow-color":[{"text-shadow":A()}],opacity:[{opacity:[te,_,z]}],"mix-blend":[{"mix-blend":[...Q(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Q()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[te]}],"mask-image-linear-from-pos":[{"mask-linear-from":D()}],"mask-image-linear-to-pos":[{"mask-linear-to":D()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":D()}],"mask-image-t-to-pos":[{"mask-t-to":D()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":D()}],"mask-image-r-to-pos":[{"mask-r-to":D()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":D()}],"mask-image-b-to-pos":[{"mask-b-to":D()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":D()}],"mask-image-l-to-pos":[{"mask-l-to":D()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":D()}],"mask-image-x-to-pos":[{"mask-x-to":D()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":D()}],"mask-image-y-to-pos":[{"mask-y-to":D()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[_,z]}],"mask-image-radial-from-pos":[{"mask-radial-from":D()}],"mask-image-radial-to-pos":[{"mask-radial-to":D()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":$()}],"mask-image-conic-pos":[{"mask-conic":[te]}],"mask-image-conic-from-pos":[{"mask-conic-from":D()}],"mask-image-conic-to-pos":[{"mask-conic-to":D()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:q()}],"mask-repeat":[{mask:ye()}],"mask-size":[{mask:xe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",_,z]}],filter:[{filter:["","none",_,z]}],blur:[{blur:ee()}],brightness:[{brightness:[te,_,z]}],contrast:[{contrast:[te,_,z]}],"drop-shadow":[{"drop-shadow":["","none",b,Gn,Yn]}],"drop-shadow-color":[{"drop-shadow":A()}],grayscale:[{grayscale:["",te,_,z]}],"hue-rotate":[{"hue-rotate":[te,_,z]}],invert:[{invert:["",te,_,z]}],saturate:[{saturate:[te,_,z]}],sepia:[{sepia:["",te,_,z]}],"backdrop-filter":[{"backdrop-filter":["","none",_,z]}],"backdrop-blur":[{"backdrop-blur":ee()}],"backdrop-brightness":[{"backdrop-brightness":[te,_,z]}],"backdrop-contrast":[{"backdrop-contrast":[te,_,z]}],"backdrop-grayscale":[{"backdrop-grayscale":["",te,_,z]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[te,_,z]}],"backdrop-invert":[{"backdrop-invert":["",te,_,z]}],"backdrop-opacity":[{"backdrop-opacity":[te,_,z]}],"backdrop-saturate":[{"backdrop-saturate":[te,_,z]}],"backdrop-sepia":[{"backdrop-sepia":["",te,_,z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":v()}],"border-spacing-x":[{"border-spacing-x":v()}],"border-spacing-y":[{"border-spacing-y":v()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",_,z]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[te,"initial",_,z]}],ease:[{ease:["linear","initial",w,_,z]}],delay:[{delay:[te,_,z]}],animate:[{animate:["none",g,_,z]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,_,z]}],"perspective-origin":[{"perspective-origin":S()}],rotate:[{rotate:ve()}],"rotate-x":[{"rotate-x":ve()}],"rotate-y":[{"rotate-y":ve()}],"rotate-z":[{"rotate-z":ve()}],scale:[{scale:ae()}],"scale-x":[{"scale-x":ae()}],"scale-y":[{"scale-y":ae()}],"scale-z":[{"scale-z":ae()}],"scale-3d":["scale-3d"],skew:[{skew:le()}],"skew-x":[{"skew-x":le()}],"skew-y":[{"skew-y":le()}],transform:[{transform:[_,z,"","none","gpu","cpu"]}],"transform-origin":[{origin:S()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ie()}],"translate-x":[{"translate-x":ie()}],"translate-y":[{"translate-y":ie()}],"translate-z":[{"translate-z":ie()}],"translate-none":["translate-none"],accent:[{accent:A()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:A()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",_,z]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":v()}],"scroll-mx":[{"scroll-mx":v()}],"scroll-my":[{"scroll-my":v()}],"scroll-ms":[{"scroll-ms":v()}],"scroll-me":[{"scroll-me":v()}],"scroll-mt":[{"scroll-mt":v()}],"scroll-mr":[{"scroll-mr":v()}],"scroll-mb":[{"scroll-mb":v()}],"scroll-ml":[{"scroll-ml":v()}],"scroll-p":[{"scroll-p":v()}],"scroll-px":[{"scroll-px":v()}],"scroll-py":[{"scroll-py":v()}],"scroll-ps":[{"scroll-ps":v()}],"scroll-pe":[{"scroll-pe":v()}],"scroll-pt":[{"scroll-pt":v()}],"scroll-pr":[{"scroll-pr":v()}],"scroll-pb":[{"scroll-pb":v()}],"scroll-pl":[{"scroll-pl":v()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",_,z]}],fill:[{fill:["none",...A()]}],"stroke-w":[{stroke:[te,wn,It,so]}],stroke:[{stroke:["none",...A()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Um=Nm(Bm);function se(...e){return Um(rc(e))}const Ne=u.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:se("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));Ne.displayName="Card";const Hm=u.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:se("flex flex-col space-y-1.5 p-6",e),...t}));Hm.displayName="CardHeader";const qm=u.forwardRef(({className:e,...t},n)=>r.jsx("h3",{ref:n,className:se("text-2xl font-semibold leading-none tracking-tight",e),...t}));qm.displayName="CardTitle";const Km=u.forwardRef(({className:e,...t},n)=>r.jsx("p",{ref:n,className:se("text-sm text-muted-foreground",e),...t}));Km.displayName="CardDescription";const De=u.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:se("p-6 pt-0",e),...t}));De.displayName="CardContent";const Ym=u.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:se("flex items-center p-6 pt-0",e),...t}));Ym.displayName="CardFooter";function $e({className:e,...t}){return r.jsx("div",{className:se("animate-pulse rounded-md bg-muted",e),...t})}const Gm={revalidateOnFocus:!0,revalidateOnReconnect:!0,dedupingInterval:5e3,errorRetryCount:3,revalidateIfStale:!0,onError:e=>{const t=fe(e);console.error("[SWR Error]:",t)},focusThrottleInterval:5e3},oe={ACCOUNTS:"wallet/accounts",CATEGORIES:"wallet/categories",TRANSACTIONS:"wallet/transactions",ASSETS:"wallet/assets",RECEIVABLES:"wallet/receivables",LIABILITIES:"wallet/liabilities",REPORTS:"wallet/reports"};function lt(){const{mutate:e}=Et(),{data:t,error:n,isLoading:o,isValidating:s,mutate:a}=Ct(oe.ACCOUNTS,()=>$n.getAll(),{revalidateOnFocus:!0,dedupingInterval:5e3}),i=t??[],c=i.reduce((d,l)=>l.type==="POSTPAID"?d-(l.currentDebt??0):d+l.currentBalance,0);return{accounts:i,isLoading:o,isValidating:s,error:n,totalBalance:c,refresh:()=>a(),async createAccount(d){const l=await $n.create(d);return await a(),e(p=>typeof p=="string"&&p.startsWith(oe.REPORTS)),l},async updateAccount(d,l){const p=await $n.update(d,l);return await a(),e(m=>typeof m=="string"&&m.startsWith(oe.REPORTS)),p},async deleteAccount(d){await $n.delete(d),await a(),e(l=>typeof l=="string"&&l.startsWith(oe.REPORTS))},getAccountById(d){return i.find(l=>l.id===d)}}}function Wt(){const{mutate:e}=Et(),{data:t,error:n,isLoading:o,isValidating:s,mutate:a}=Ct(oe.CATEGORIES,()=>Nn.getAll(),{revalidateOnFocus:!0,dedupingInterval:1e4}),i=t??[];return{categories:i,isLoading:o,isValidating:s,error:n,refresh:()=>a(),async createCategory(c){const d=await Nn.create(c);return await a(),d},async updateCategory(c,d){const l=await Nn.update(c,d);return await a(),e(p=>typeof p=="string"&&p.startsWith(oe.TRANSACTIONS)),l},async deleteCategory(c){await Nn.delete(c),await a()},getCategoryById(c){return i.find(d=>d.id===c)}}}function Xm(e={}){const{page:t=0,size:n=20}=e,{mutate:o}=Et(),s=`${oe.ASSETS}?page=${t}&size=${n}`,{data:a,error:i,isLoading:c,isValidating:d,mutate:l}=Ct(s,()=>Dt.getAll(t,n),{revalidateOnFocus:!0,dedupingInterval:5e3}),p=(a==null?void 0:a.content)??[],m=a?{totalElements:a.totalElements,totalPages:a.totalPages,page:a.page,size:a.size,hasNext:a.hasNext,hasPrevious:a.hasPrevious}:null;return{assets:p,pagination:m,isLoading:c,isValidating:d,error:i,refresh:()=>l(),async createAsset(x){const b=await Dt.create(x);return await o(h=>typeof h=="string"&&h.startsWith(oe.ASSETS)),b},async updateAsset(x,b){const h=await Dt.update(x,b);return await o(f=>typeof f=="string"&&f.startsWith(oe.ASSETS)),h},async deleteAsset(x){await Dt.delete(x),await o(b=>typeof b=="string"&&b.startsWith(oe.ASSETS))},async getAssetById(x){return Dt.getById(x)}}}function Jm(){const{data:e,error:t,isLoading:n,mutate:o}=Ct(`${oe.ASSETS}/total-value`,()=>Dt.getTotalValue(),{revalidateOnFocus:!0,dedupingInterval:1e4});return{totalValue:e??0,isLoading:n,error:t,refresh:()=>o()}}function Zm(e){if(!e)return"";const t=new URLSearchParams;return Object.entries(e).forEach(([n,o])=>{o!=null&&o!==""&&t.append(n,String(o))}),t.toString()}function Qm(e){const{mutate:t}=Et(),n=Zm(e),o=n?`${oe.TRANSACTIONS}?${n}`:oe.TRANSACTIONS,{data:s,error:a,isLoading:i,isValidating:c,mutate:d}=Ct(o,()=>Sn.getAll(e),{revalidateOnFocus:!1,dedupingInterval:3e3}),l=(s==null?void 0:s.content)??[],p=s?{totalElements:s.totalElements,totalPages:s.totalPages,page:s.page,size:s.size,hasNext:s.hasNext,hasPrevious:s.hasPrevious}:null;return{transactions:l,pagination:p,isLoading:i,isValidating:c,error:a,refresh:()=>d(),async createTransaction(m){const x=await Sn.create(m);return await t(b=>typeof b=="string"&&b.startsWith(oe.TRANSACTIONS)),await t(oe.ACCOUNTS),await t(b=>typeof b=="string"&&b.startsWith(oe.REPORTS)),x},async updateTransaction(m,x){const b=await Sn.update(m,x);return await t(h=>typeof h=="string"&&h.startsWith(oe.TRANSACTIONS)),await t(oe.ACCOUNTS),await t(h=>typeof h=="string"&&h.startsWith(oe.REPORTS)),b},async deleteTransaction(m){await Sn.delete(m),await t(x=>typeof x=="string"&&x.startsWith(oe.TRANSACTIONS)),await t(oe.ACCOUNTS),await t(x=>typeof x=="string"&&x.startsWith(oe.REPORTS))}}}function eg(e){const{period:t,startDate:n,endDate:o}=e,s=`${oe.REPORTS}/${t}?start=${n||""}&end=${o||""}`,{data:a,error:i,isLoading:c,isValidating:d,mutate:l}=Ct(s,()=>Gi.getDashboard(t,n,o),{revalidateOnFocus:!0,dedupingInterval:1e4});return{report:a,totalIncome:(a==null?void 0:a.totalIncome)??0,totalExpense:(a==null?void 0:a.totalExpense)??0,netSavings:(a==null?void 0:a.netSavings)??0,accountsOverview:(a==null?void 0:a.accountsOverview)??[],topCategories:(a==null?void 0:a.topCategories)??[],isLoading:c,isValidating:d,error:i,refresh:()=>l()}}function gc(e={}){const{page:t=0,size:n=20}=e,{mutate:o}=Et(),s=`${oe.RECEIVABLES}?page=${t}&size=${n}`,{data:a,error:i,isLoading:c,isValidating:d,mutate:l}=Ct(s,()=>jn.getAll(t,n),{revalidateOnFocus:!0,dedupingInterval:5e3}),p=(a==null?void 0:a.content)??[],m=a?{totalElements:a.totalElements,totalPages:a.totalPages,page:a.page,size:a.size,hasNext:a.hasNext,hasPrevious:a.hasPrevious}:null,x=p.reduce((b,h)=>b+h.remainingAmount,0);return{receivables:p,pagination:m,totalReceivables:x,isLoading:c,isValidating:d,error:i,refresh:()=>l(),async createReceivable(b){const h=await jn.create(b);return await o(f=>typeof f=="string"&&f.startsWith(oe.RECEIVABLES)),h},async updateReceivable(b,h){const f=await jn.update(b,h);return await o(y=>typeof y=="string"&&y.startsWith(oe.RECEIVABLES)),f},async deleteReceivable(b){await jn.delete(b),await o(h=>typeof h=="string"&&h.startsWith(oe.RECEIVABLES))},getReceivableById(b){return p.find(h=>h.id===b)}}}function yc(e={}){const{page:t=0,size:n=20}=e,{mutate:o}=Et(),s=`${oe.LIABILITIES}?page=${t}&size=${n}`,{data:a,error:i,isLoading:c,isValidating:d,mutate:l}=Ct(s,()=>En.getAll(t,n),{revalidateOnFocus:!0,dedupingInterval:5e3}),p=(a==null?void 0:a.content)??[],m=a?{totalElements:a.totalElements,totalPages:a.totalPages,page:a.page,size:a.size,hasNext:a.hasNext,hasPrevious:a.hasPrevious}:null,x=p.reduce((b,h)=>b+h.remainingAmount,0);return{liabilities:p,pagination:m,totalLiabilities:x,isLoading:c,isValidating:d,error:i,refresh:()=>l(),async createLiability(b){const h=await En.create(b);return await o(f=>typeof f=="string"&&f.startsWith(oe.LIABILITIES)),h},async updateLiability(b,h){const f=await En.update(b,h);return await o(y=>typeof y=="string"&&y.startsWith(oe.LIABILITIES)),f},async deleteLiability(b){await En.delete(b),await o(h=>typeof h=="string"&&h.startsWith(oe.LIABILITIES))},getLiabilityById(b){return p.find(h=>h.id===b)}}}const ma=e=>e.type==="POSTPAID";function he(e,t="VND"){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:t}).format(e)}function xc(e){return new Date(e).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}function Mn(e){return new Date(e).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"})}function Jt(e){if(!e){const t=new Date,n=7*60;return new Date(t.getTime()+(n-t.getTimezoneOffset())*6e4).toISOString().slice(0,19)}return e.replace(/[+-]\d{2}:\d{2}$/,"").replace(/Z$/,"").slice(0,19)}function Nt(e,t=!0){const n=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${n}-${o}-${s}T${t?"00:00:00":"23:59:59"}`}const tg=()=>{const{t:e}=Pe(),{accounts:t,isLoading:n}=lt(),{receivables:o,isLoading:s}=gc({page:0,size:1e3}),{liabilities:a,isLoading:i}=yc({page:0,size:1e3}),c=n||s||i,d=u.useMemo(()=>{if(t.length===0)return null;const l=t.filter(N=>!ma(N)),p=t.filter(N=>ma(N)),m=l.reduce((N,$)=>N+($.currentBalance||0),0),x=l.filter(N=>N.type!=="SAVINGS"&&N.type!=="INVESTMENT").reduce((N,$)=>N+($.currentBalance||0),0),b=l.filter(N=>N.type==="SAVINGS"||N.type==="INVESTMENT").reduce((N,$)=>N+($.currentBalance||0),0),h=o.reduce((N,$)=>N+($.remainingAmount||0),0),f=a.reduce((N,$)=>N+($.remainingAmount||0),0),y=p.reduce((N,$)=>N+($.currentDebt||0),0),w=f+y;return{totalAssets:m+h-w,currentCash:x,totalSavingsInvestment:b,totalReceivables:h,totalLiabilities:w}},[t,o,a]);return c?r.jsxs(ga,{className:"financial-overview",children:[r.jsx("div",{className:"section-header",children:r.jsx("h2",{className:"section-title",children:e("wallet.dashboard.financialOverview")||"Tổng quan tài chính"})}),r.jsx("div",{className:"financial-grid",children:[...Array(5)].map((l,p)=>r.jsx(Ne,{className:`financial-card ${p<=1?"financial-card--half":"financial-card--third"}`,children:r.jsxs(De,{className:"p-6",children:[r.jsx($e,{className:"h-4 w-24 mb-2"}),r.jsx($e,{className:"h-8 w-32"})]})},p))})]}):r.jsxs(ga,{className:"financial-overview",children:[r.jsx("div",{className:"section-header",children:r.jsx("h2",{className:"section-title",children:e("wallet.dashboard.financialOverview")||"Tổng quan tài chính"})}),r.jsxs("div",{className:"financial-grid",children:[r.jsx(Ne,{className:"financial-card financial-card--half",children:r.jsxs(De,{className:"p-6",children:[r.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalAssets")||"Tổng tài sản"}),r.jsx("div",{className:"stat-value",children:d?he(d.totalAssets):"0 ₫"})]})}),r.jsx(Ne,{className:"financial-card financial-card--half",children:r.jsxs(De,{className:"p-6",children:[r.jsx("div",{className:"stat-label",children:e("wallet.dashboard.currentCash")||"Tiền hiện có"}),r.jsx("div",{className:"stat-value stat-value--positive",children:d?he(d.currentCash):"0 ₫"})]})}),r.jsx(Ne,{className:"financial-card financial-card--third",children:r.jsxs(De,{className:"p-6",children:[r.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalSavingsInvestment")||"Tiết kiệm/Đầu tư"}),r.jsx("div",{className:"stat-value stat-value--positive",children:d?he(d.totalSavingsInvestment):"0 ₫"})]})}),r.jsx(Ne,{className:"financial-card financial-card--third",children:r.jsxs(De,{className:"p-6",children:[r.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalReceivables")||"Khoản cho vay"}),r.jsx("div",{className:"stat-value stat-value--positive",children:d?he(d.totalReceivables):"0 ₫"})]})}),r.jsx(Ne,{className:"financial-card financial-card--third",children:r.jsxs(De,{className:"p-6",children:[r.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalLiabilities")||"Khoản nợ"}),r.jsx("div",{className:"stat-value stat-value--negative",children:d?he(d.totalLiabilities):"0 ₫"})]})})]})]})},ga=K.section`
  margin-bottom: ${({theme:e})=>e.spacing[10]};

  .section-header {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }

  .section-title {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    letter-spacing: -0.01em;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    }
  }

  .financial-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[4]};

    @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
      grid-template-columns: repeat(6, 1fr);
    }

    .financial-card {
      @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
        &--half {
          grid-column: span 3;
        }
        &--third {
          grid-column: span 2;
        }
      }
    }

    .stat-label {
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
      color: ${({theme:e})=>e.colors.text.secondary};
      margin-bottom: ${({theme:e})=>e.spacing[3]};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .stat-value {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
      line-height: 1.2;
      letter-spacing: -0.02em;

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
      }

      &--positive {
        color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
      }

      &--negative {
        color: ${({theme:e})=>e.colors.error||"#ef4444"};
      }
    }
  }
`;function ya(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function mn(...e){return t=>{let n=!1;const o=e.map(s=>{const a=ya(s,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let s=0;s<o.length;s++){const a=o[s];typeof a=="function"?a():ya(e[s],null)}}}}function Ce(...e){return u.useCallback(mn(...e),e)}var ng=Symbol.for("react.lazy"),yr=Ko[" use ".trim().toString()];function rg(e){return typeof e=="object"&&e!==null&&"then"in e}function bc(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===ng&&"_payload"in e&&rg(e._payload)}function vc(e){const t=sg(e),n=u.forwardRef((o,s)=>{let{children:a,...i}=o;bc(a)&&typeof yr=="function"&&(a=yr(a._payload));const c=u.Children.toArray(a),d=c.find(ig);if(d){const l=d.props.children,p=c.map(m=>m===d?u.Children.count(l)>1?u.Children.only(null):u.isValidElement(l)?l.props.children:null:m);return r.jsx(t,{...i,ref:s,children:u.isValidElement(l)?u.cloneElement(l,void 0,p):null})}return r.jsx(t,{...i,ref:s,children:a})});return n.displayName=`${e}.Slot`,n}var og=vc("Slot");function sg(e){const t=u.forwardRef((n,o)=>{let{children:s,...a}=n;if(bc(s)&&typeof yr=="function"&&(s=yr(s._payload)),u.isValidElement(s)){const i=lg(s),c=cg(a,s.props);return s.type!==u.Fragment&&(c.ref=o?mn(o,i):i),u.cloneElement(s,c)}return u.Children.count(s)>1?u.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ag=Symbol("radix.slottable");function ig(e){return u.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ag}function cg(e,t){const n={...t};for(const o in t){const s=e[o],a=t[o];/^on[A-Z]/.test(o)?s&&a?n[o]=(...c)=>{const d=a(...c);return s(...c),d}:s&&(n[o]=s):o==="style"?n[o]={...s,...a}:o==="className"&&(n[o]=[s,a].filter(Boolean).join(" "))}return{...e,...n}}function lg(e){var o,s;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const xa=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,ba=rc,Fn=(e,t)=>n=>{var o;if((t==null?void 0:t.variants)==null)return ba(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:a}=t,i=Object.keys(s).map(l=>{const p=n==null?void 0:n[l],m=a==null?void 0:a[l];if(p===null)return null;const x=xa(p)||xa(m);return s[l][x]}),c=n&&Object.entries(n).reduce((l,p)=>{let[m,x]=p;return x===void 0||(l[m]=x),l},{}),d=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((l,p)=>{let{class:m,className:x,...b}=p;return Object.entries(b).every(h=>{let[f,y]=h;return Array.isArray(y)?y.includes({...a,...c}[f]):{...a,...c}[f]===y})?[...l,m,x]:l},[]);return ba(e,i,d,n==null?void 0:n.class,n==null?void 0:n.className)},dg=Fn("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),F=u.forwardRef(({className:e,variant:t,size:n,asChild:o=!1,...s},a)=>{const i=o?og:"button";return r.jsx(i,{className:se(dg({variant:t,size:n,className:e})),ref:a,...s})});F.displayName="Button";const Z=u.forwardRef(({className:e,type:t,...n},o)=>r.jsx("input",{type:t,className:se("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:o,...n}));Z.displayName="Input";const ug=({dateFilter:e,onFilterChange:t})=>{const{t:n}=Pe(),o=u.useMemo(()=>{let d,l;const p=new Date;if(e.period==="30days"){const m=new Date(p);m.setDate(m.getDate()-30),d=Nt(m,!0),l=Nt(p,!1)}else if(e.period==="month"){const m=new Date(p.getFullYear(),p.getMonth(),1);d=Nt(m,!0),l=Nt(p,!1)}else e.period==="custom"&&(e.startDate&&(d=`${e.startDate}T00:00:00`),e.endDate&&(l=`${e.endDate}T23:59:59`));return{startDate:d,endDate:l}},[e]),{report:s,isLoading:a}=eg({period:e.period==="month"?"month":"day",startDate:o.startDate,endDate:o.endDate}),i=u.useCallback(d=>{t({period:d})},[t]),c=u.useCallback((d,l)=>{const p={...e,[d]:l,period:"custom"};t(p)},[e,t]);return r.jsxs(pg,{className:"income-expense-stats",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h2",{className:"section-title",children:n("wallet.dashboard.incomeExpense")||"Thu/Chi"}),r.jsxs("div",{className:"filter-controls",children:[r.jsx(F,{variant:e.period==="30days"?"default":"outline",size:"sm",onClick:()=>i("30days"),children:n("wallet.dashboard.last30Days")||"30 ngày gần nhất"}),r.jsx(F,{variant:e.period==="month"?"default":"outline",size:"sm",onClick:()=>i("month"),children:n("wallet.dashboard.thisMonth")||"Tháng này"}),r.jsxs("div",{className:"date-range-picker",children:[r.jsx(Z,{type:"date",className:"date-input",value:e.startDate||"",onChange:d=>c("startDate",d.target.value),placeholder:n("wallet.dashboard.fromDate")||"Từ ngày"}),r.jsx("span",{className:"date-separator",children:"-"}),r.jsx(Z,{type:"date",className:"date-input",value:e.endDate||"",onChange:d=>c("endDate",d.target.value),placeholder:n("wallet.dashboard.toDate")||"Đến ngày"})]})]})]}),a?r.jsx("div",{className:"stats-grid",children:[...Array(3)].map((d,l)=>r.jsx(Ne,{children:r.jsxs(De,{className:"p-6",children:[r.jsx($e,{className:"h-4 w-24 mb-2"}),r.jsx($e,{className:"h-8 w-32"})]})},l))}):r.jsxs("div",{className:"stats-grid",children:[r.jsx(Ne,{children:r.jsxs(De,{className:"p-6",children:[r.jsx("div",{className:"stat-label",children:n("wallet.dashboard.totalIncome")}),r.jsx("div",{className:"stat-value stat-value--positive",children:s?he(s.totalIncome??0):"0 ₫"})]})}),r.jsx(Ne,{children:r.jsxs(De,{className:"p-6",children:[r.jsx("div",{className:"stat-label",children:n("wallet.dashboard.totalExpense")}),r.jsx("div",{className:"stat-value stat-value--negative",children:s?he(s.totalExpense??0):"0 ₫"})]})}),r.jsx(Ne,{children:r.jsxs(De,{className:"p-6",children:[r.jsx("div",{className:"stat-label",children:n("wallet.dashboard.netSavings")}),r.jsx("div",{className:"stat-value",children:s?he(s.netSavings??0):"0 ₫"})]})})]})]})},pg=K.section`
  margin-bottom: ${({theme:e})=>e.spacing[10]};

  .section-header {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .section-title {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    letter-spacing: -0.01em;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    }
  }

  .filter-controls {
    display: flex;
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing[2]};
    align-items: center;

    button {
      height: 36px;
    }

    .date-range-picker {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};

      .date-input {
        width: auto;
        min-width: 150px;
        height: 36px;

        &[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.7;
          filter: ${({theme:e})=>e.colors.background==="#0a0a0a"||e.colors.background==="#1a1a1a"?"invert(1) brightness(1.2)":"none"};
        }
      }

      .date-separator {
        color: ${({theme:e})=>e.colors.text.secondary};
      }
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[4]};

    @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }

    .stat-label {
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
      color: ${({theme:e})=>e.colors.text.secondary};
      margin-bottom: ${({theme:e})=>e.spacing[3]};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .stat-value {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
      line-height: 1.2;
      letter-spacing: -0.02em;

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
      }

      &--positive {
        color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
      }

      &--negative {
        color: ${({theme:e})=>e.colors.error||"#ef4444"};
      }
    }
  }
`,fg=({onParse:e,isLoading:t=!1,placeholder:n,disabled:o=!1,error:s})=>{const[a,i]=u.useState(""),c=u.useRef(null),d=u.useRef(null);u.useEffect(()=>{var m;(m=c.current)==null||m.focus()},[]),u.useEffect(()=>{},[a,s]);const l=u.useCallback(async()=>{!a.trim()||t||o||(d.current&&(clearTimeout(d.current),d.current=null),await e(a.trim()),i(""))},[a,t,o,e]),p=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),l())};return r.jsxs(hg,{children:[r.jsxs("div",{className:"input-container",children:[r.jsx(Z,{ref:c,type:"text",className:`nlp-input ${s?"error":""}`,value:a,onChange:m=>i(m.target.value),onKeyDown:p,placeholder:n||'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr")',disabled:o||t}),r.jsx(F,{variant:"secondary",onClick:l,disabled:o||t||!a.trim(),className:"parse-button",children:t?r.jsxs(r.Fragment,{children:[r.jsx(H,{icon:"Loader",size:16,color:"currentColor",className:"animate-spin"}),r.jsx("span",{children:"Đang phân tích..."})]}):r.jsxs(r.Fragment,{children:[r.jsx(H,{icon:"Sparkles",size:16,color:"currentColor"}),r.jsx("span",{children:"Phân tích"})]})})]}),s&&r.jsxs("div",{className:"error-message",children:[r.jsx(H,{icon:"Alert",size:16,color:"currentColor"}),r.jsx("span",{children:s})]})]})},hg=K.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .input-container {
    display: flex;
    gap: ${({theme:e})=>e.spacing[2]};
    width: 100%;
  }

  .nlp-input {
    flex: 1;
    height: 40px;
    transition: border-color 0.2s, box-shadow 0.2s;

    &.error {
      border-color: #ef4444;
      box-shadow: 0 0 0 1px #ef4444;
    }

    &:focus.error {
      border-color: #ef4444;
      box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }
  }

  .parse-button {
    height: 40px;
    min-width: 120px;
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
    font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  }

  .error-message {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 6px;
    color: #dc2626;
    font-size: 14px;
    animation: slideDown 0.2s ease-out;

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;function ce(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function mg(e,t){const n=u.createContext(t),o=a=>{const{children:i,...c}=a,d=u.useMemo(()=>c,Object.values(c));return r.jsx(n.Provider,{value:d,children:i})};o.displayName=e+"Provider";function s(a){const i=u.useContext(n);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[o,s]}function Wn(e,t=[]){let n=[];function o(a,i){const c=u.createContext(i),d=n.length;n=[...n,i];const l=m=>{var w;const{scope:x,children:b,...h}=m,f=((w=x==null?void 0:x[e])==null?void 0:w[d])||c,y=u.useMemo(()=>h,Object.values(h));return r.jsx(f.Provider,{value:y,children:b})};l.displayName=a+"Provider";function p(m,x){var f;const b=((f=x==null?void 0:x[e])==null?void 0:f[d])||c,h=u.useContext(b);if(h)return h;if(i!==void 0)return i;throw new Error(`\`${m}\` must be used within \`${a}\``)}return[l,p]}const s=()=>{const a=n.map(i=>u.createContext(i));return function(c){const d=(c==null?void 0:c[e])||a;return u.useMemo(()=>({[`__scope${e}`]:{...c,[e]:d}}),[c,d])}};return s.scopeName=e,[o,gg(s,...t)]}function gg(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(a){const i=o.reduce((c,{useScope:d,scopeName:l})=>{const m=d(a)[`__scope${l}`];return{...c,...m}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}var _e=globalThis!=null&&globalThis.document?u.useLayoutEffect:()=>{},yg=Ko[" useId ".trim().toString()]||(()=>{}),xg=0;function nn(e){const[t,n]=u.useState(yg());return _e(()=>{n(o=>o??String(xg++))},[e]),e||(t?`radix-${t}`:"")}var bg=Ko[" useInsertionEffect ".trim().toString()]||_e;function xr({prop:e,defaultProp:t,onChange:n=()=>{},caller:o}){const[s,a,i]=vg({defaultProp:t,onChange:n}),c=e!==void 0,d=c?e:s;{const p=u.useRef(e!==void 0);u.useEffect(()=>{const m=p.current;m!==c&&console.warn(`${o} is changing from ${m?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=c},[c,o])}const l=u.useCallback(p=>{var m;if(c){const x=wg(p)?p(e):p;x!==e&&((m=i.current)==null||m.call(i,x))}else a(p)},[c,e,a,i]);return[d,l]}function vg({defaultProp:e,onChange:t}){const[n,o]=u.useState(e),s=u.useRef(n),a=u.useRef(t);return bg(()=>{a.current=t},[t]),u.useEffect(()=>{var i;s.current!==n&&((i=a.current)==null||i.call(a,n),s.current=n)},[n,s]),[n,o,a]}function wg(e){return typeof e=="function"}function $g(e){const t=Ng(e),n=u.forwardRef((o,s)=>{const{children:a,...i}=o,c=u.Children.toArray(a),d=c.find(jg);if(d){const l=d.props.children,p=c.map(m=>m===d?u.Children.count(l)>1?u.Children.only(null):u.isValidElement(l)?l.props.children:null:m);return r.jsx(t,{...i,ref:s,children:u.isValidElement(l)?u.cloneElement(l,void 0,p):null})}return r.jsx(t,{...i,ref:s,children:a})});return n.displayName=`${e}.Slot`,n}function Ng(e){const t=u.forwardRef((n,o)=>{const{children:s,...a}=n;if(u.isValidElement(s)){const i=Cg(s),c=Eg(a,s.props);return s.type!==u.Fragment&&(c.ref=o?mn(o,i):i),u.cloneElement(s,c)}return u.Children.count(s)>1?u.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Sg=Symbol("radix.slottable");function jg(e){return u.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Sg}function Eg(e,t){const n={...t};for(const o in t){const s=e[o],a=t[o];/^on[A-Z]/.test(o)?s&&a?n[o]=(...c)=>{const d=a(...c);return s(...c),d}:s&&(n[o]=s):o==="style"?n[o]={...s,...a}:o==="className"&&(n[o]=[s,a].filter(Boolean).join(" "))}return{...e,...n}}function Cg(e){var o,s;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Tg=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ue=Tg.reduce((e,t)=>{const n=$g(`Primitive.${t}`),o=u.forwardRef((s,a)=>{const{asChild:i,...c}=s,d=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),r.jsx(d,{...c,ref:a})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function wc(e,t){e&&Dn.flushSync(()=>e.dispatchEvent(t))}function Je(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useMemo(()=>(...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}function kg(e,t=globalThis==null?void 0:globalThis.document){const n=Je(e);u.useEffect(()=>{const o=s=>{s.key==="Escape"&&n(s)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[n,t])}var Ag="DismissableLayer",Po="dismissableLayer.update",Rg="dismissableLayer.pointerDownOutside",Ig="dismissableLayer.focusOutside",va,$c=u.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ir=u.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:a,onInteractOutside:i,onDismiss:c,...d}=e,l=u.useContext($c),[p,m]=u.useState(null),x=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,b]=u.useState({}),h=Ce(t,E=>m(E)),f=Array.from(l.layers),[y]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),w=f.indexOf(y),g=p?f.indexOf(p):-1,N=l.layersWithOutsidePointerEventsDisabled.size>0,$=g>=w,S=Pg(E=>{const v=E.target,k=[...l.branches].some(O=>O.contains(v));!$||k||(s==null||s(E),i==null||i(E),E.defaultPrevented||c==null||c())},x),T=Og(E=>{const v=E.target;[...l.branches].some(O=>O.contains(v))||(a==null||a(E),i==null||i(E),E.defaultPrevented||c==null||c())},x);return kg(E=>{g===l.layers.size-1&&(o==null||o(E),!E.defaultPrevented&&c&&(E.preventDefault(),c()))},x),u.useEffect(()=>{if(p)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(va=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(p)),l.layers.add(p),wa(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(x.body.style.pointerEvents=va)}},[p,x,n,l]),u.useEffect(()=>()=>{p&&(l.layers.delete(p),l.layersWithOutsidePointerEventsDisabled.delete(p),wa())},[p,l]),u.useEffect(()=>{const E=()=>b({});return document.addEventListener(Po,E),()=>document.removeEventListener(Po,E)},[]),r.jsx(ue.div,{...d,ref:h,style:{pointerEvents:N?$?"auto":"none":void 0,...e.style},onFocusCapture:ce(e.onFocusCapture,T.onFocusCapture),onBlurCapture:ce(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:ce(e.onPointerDownCapture,S.onPointerDownCapture)})});Ir.displayName=Ag;var Dg="DismissableLayerBranch",Nc=u.forwardRef((e,t)=>{const n=u.useContext($c),o=u.useRef(null),s=Ce(t,o);return u.useEffect(()=>{const a=o.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),r.jsx(ue.div,{...e,ref:s})});Nc.displayName=Dg;function Pg(e,t=globalThis==null?void 0:globalThis.document){const n=Je(e),o=u.useRef(!1),s=u.useRef(()=>{});return u.useEffect(()=>{const a=c=>{if(c.target&&!o.current){let d=function(){Sc(Rg,n,l,{discrete:!0})};const l={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",s.current),s.current=d,t.addEventListener("click",s.current,{once:!0})):d()}else t.removeEventListener("click",s.current);o.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",a),t.removeEventListener("click",s.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function Og(e,t=globalThis==null?void 0:globalThis.document){const n=Je(e),o=u.useRef(!1);return u.useEffect(()=>{const s=a=>{a.target&&!o.current&&Sc(Ig,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function wa(){const e=new CustomEvent(Po);document.dispatchEvent(e)}function Sc(e,t,n,{discrete:o}){const s=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),o?wc(s,a):s.dispatchEvent(a)}var Lg=Ir,zg=Nc,ao="focusScope.autoFocusOnMount",io="focusScope.autoFocusOnUnmount",$a={bubbles:!1,cancelable:!0},_g="FocusScope",ss=u.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:s,onUnmountAutoFocus:a,...i}=e,[c,d]=u.useState(null),l=Je(s),p=Je(a),m=u.useRef(null),x=Ce(t,f=>d(f)),b=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect(()=>{if(o){let f=function(N){if(b.paused||!c)return;const $=N.target;c.contains($)?m.current=$:wt(m.current,{select:!0})},y=function(N){if(b.paused||!c)return;const $=N.relatedTarget;$!==null&&(c.contains($)||wt(m.current,{select:!0}))},w=function(N){if(document.activeElement===document.body)for(const S of N)S.removedNodes.length>0&&wt(c)};document.addEventListener("focusin",f),document.addEventListener("focusout",y);const g=new MutationObserver(w);return c&&g.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",f),document.removeEventListener("focusout",y),g.disconnect()}}},[o,c,b.paused]),u.useEffect(()=>{if(c){Sa.add(b);const f=document.activeElement;if(!c.contains(f)){const w=new CustomEvent(ao,$a);c.addEventListener(ao,l),c.dispatchEvent(w),w.defaultPrevented||(Mg(Ug(jc(c)),{select:!0}),document.activeElement===f&&wt(c))}return()=>{c.removeEventListener(ao,l),setTimeout(()=>{const w=new CustomEvent(io,$a);c.addEventListener(io,p),c.dispatchEvent(w),w.defaultPrevented||wt(f??document.body,{select:!0}),c.removeEventListener(io,p),Sa.remove(b)},0)}}},[c,l,p,b]);const h=u.useCallback(f=>{if(!n&&!o||b.paused)return;const y=f.key==="Tab"&&!f.altKey&&!f.ctrlKey&&!f.metaKey,w=document.activeElement;if(y&&w){const g=f.currentTarget,[N,$]=Fg(g);N&&$?!f.shiftKey&&w===$?(f.preventDefault(),n&&wt(N,{select:!0})):f.shiftKey&&w===N&&(f.preventDefault(),n&&wt($,{select:!0})):w===g&&f.preventDefault()}},[n,o,b.paused]);return r.jsx(ue.div,{tabIndex:-1,...i,ref:x,onKeyDown:h})});ss.displayName=_g;function Mg(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(wt(o,{select:t}),document.activeElement!==n)return}function Fg(e){const t=jc(e),n=Na(t,e),o=Na(t.reverse(),e);return[n,o]}function jc(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Na(e,t){for(const n of e)if(!Wg(n,{upTo:t}))return n}function Wg(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Vg(e){return e instanceof HTMLInputElement&&"select"in e}function wt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Vg(e)&&t&&e.select()}}var Sa=Bg();function Bg(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ja(e,t),e.unshift(t)},remove(t){var n;e=ja(e,t),(n=e[0])==null||n.resume()}}}function ja(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function Ug(e){return e.filter(t=>t.tagName!=="A")}var Hg="Portal",Dr=u.forwardRef((e,t)=>{var c;const{container:n,...o}=e,[s,a]=u.useState(!1);_e(()=>a(!0),[]);const i=n||s&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return i?Fd.createPortal(r.jsx(ue.div,{...o,ref:t}),i):null});Dr.displayName=Hg;function qg(e,t){return u.useReducer((n,o)=>t[n][o]??n,e)}var Vn=e=>{const{present:t,children:n}=e,o=Kg(t),s=typeof n=="function"?n({present:o.isPresent}):u.Children.only(n),a=Ce(o.ref,Yg(s));return typeof n=="function"||o.isPresent?u.cloneElement(s,{ref:a}):null};Vn.displayName="Presence";function Kg(e){const[t,n]=u.useState(),o=u.useRef(null),s=u.useRef(e),a=u.useRef("none"),i=e?"mounted":"unmounted",[c,d]=qg(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return u.useEffect(()=>{const l=Xn(o.current);a.current=c==="mounted"?l:"none"},[c]),_e(()=>{const l=o.current,p=s.current;if(p!==e){const x=a.current,b=Xn(l);e?d("MOUNT"):b==="none"||(l==null?void 0:l.display)==="none"?d("UNMOUNT"):d(p&&x!==b?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,d]),_e(()=>{if(t){let l;const p=t.ownerDocument.defaultView??window,m=b=>{const f=Xn(o.current).includes(CSS.escape(b.animationName));if(b.target===t&&f&&(d("ANIMATION_END"),!s.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",l=p.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},x=b=>{b.target===t&&(a.current=Xn(o.current))};return t.addEventListener("animationstart",x),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{p.clearTimeout(l),t.removeEventListener("animationstart",x),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:u.useCallback(l=>{o.current=l?getComputedStyle(l):null,n(l)},[])}}function Xn(e){return(e==null?void 0:e.animationName)||"none"}function Yg(e){var o,s;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var co=0;function Ec(){u.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ea()),document.body.insertAdjacentElement("beforeend",e[1]??Ea()),co++,()=>{co===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),co--}},[])}function Ea(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var lr="right-scroll-bar-position",dr="width-before-scroll-bar",Gg="with-scroll-bars-hidden",Xg="--removed-body-scroll-bar-size";function lo(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Jg(e,t){var n=u.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(o){var s=n.value;s!==o&&(n.value=o,n.callback(o,s))}}}})[0];return n.callback=t,n.facade}var Zg=typeof window<"u"?u.useLayoutEffect:u.useEffect,Ca=new WeakMap;function Qg(e,t){var n=Jg(null,function(o){return e.forEach(function(s){return lo(s,o)})});return Zg(function(){var o=Ca.get(n);if(o){var s=new Set(o),a=new Set(e),i=n.current;s.forEach(function(c){a.has(c)||lo(c,null)}),a.forEach(function(c){s.has(c)||lo(c,i)})}Ca.set(n,e)},[e]),n}function ey(e){return e}function ty(e,t){t===void 0&&(t=ey);var n=[],o=!1,s={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,o);return n.push(i),function(){n=n.filter(function(c){return c!==i})}},assignSyncMedium:function(a){for(o=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(c){return a(c)},filter:function(){return n}}},assignMedium:function(a){o=!0;var i=[];if(n.length){var c=n;n=[],c.forEach(a),i=n}var d=function(){var p=i;i=[],p.forEach(a)},l=function(){return Promise.resolve().then(d)};l(),n={push:function(p){i.push(p),l()},filter:function(p){return i=i.filter(p),n}}}};return s}function ny(e){e===void 0&&(e={});var t=ty(null);return t.options=$t({async:!0,ssr:!1},e),t}var Cc=function(e){var t=e.sideCar,n=ci(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=t.read();if(!o)throw new Error("Sidecar medium not found");return u.createElement(o,$t({},n))};Cc.isSideCarExport=!0;function ry(e,t){return e.useMedium(t),Cc}var Tc=ny(),uo=function(){},Pr=u.forwardRef(function(e,t){var n=u.useRef(null),o=u.useState({onScrollCapture:uo,onWheelCapture:uo,onTouchMoveCapture:uo}),s=o[0],a=o[1],i=e.forwardProps,c=e.children,d=e.className,l=e.removeScrollBar,p=e.enabled,m=e.shards,x=e.sideCar,b=e.noRelative,h=e.noIsolation,f=e.inert,y=e.allowPinchZoom,w=e.as,g=w===void 0?"div":w,N=e.gapMode,$=ci(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=x,T=Qg([n,t]),E=$t($t({},$),s);return u.createElement(u.Fragment,null,p&&u.createElement(S,{sideCar:Tc,removeScrollBar:l,shards:m,noRelative:b,noIsolation:h,inert:f,setCallbacks:a,allowPinchZoom:!!y,lockRef:n,gapMode:N}),i?u.cloneElement(u.Children.only(c),$t($t({},E),{ref:T})):u.createElement(g,$t({},E,{className:d,ref:T}),c))});Pr.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Pr.classNames={fullWidth:dr,zeroRight:lr};var oy=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function sy(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=oy();return t&&e.setAttribute("nonce",t),e}function ay(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function iy(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var cy=function(){var e=0,t=null;return{add:function(n){e==0&&(t=sy())&&(ay(t,n),iy(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ly=function(){var e=cy();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},kc=function(){var e=ly(),t=function(n){var o=n.styles,s=n.dynamic;return e(o,s),null};return t},dy={left:0,top:0,right:0,gap:0},po=function(e){return parseInt(e||"",10)||0},uy=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],o=t[e==="padding"?"paddingTop":"marginTop"],s=t[e==="padding"?"paddingRight":"marginRight"];return[po(n),po(o),po(s)]},py=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return dy;var t=uy(e),n=document.documentElement.clientWidth,o=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,o-n+t[2]-t[0])}},fy=kc(),rn="data-scroll-locked",hy=function(e,t,n,o){var s=e.left,a=e.top,i=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Gg,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(c,"px ").concat(o,`;
  }
  body[`).concat(rn,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(o,";"),n==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(o,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(lr,` {
    right: `).concat(c,"px ").concat(o,`;
  }
  
  .`).concat(dr,` {
    margin-right: `).concat(c,"px ").concat(o,`;
  }
  
  .`).concat(lr," .").concat(lr,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(dr," .").concat(dr,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(rn,`] {
    `).concat(Xg,": ").concat(c,`px;
  }
`)},Ta=function(){var e=parseInt(document.body.getAttribute(rn)||"0",10);return isFinite(e)?e:0},my=function(){u.useEffect(function(){return document.body.setAttribute(rn,(Ta()+1).toString()),function(){var e=Ta()-1;e<=0?document.body.removeAttribute(rn):document.body.setAttribute(rn,e.toString())}},[])},gy=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,s=o===void 0?"margin":o;my();var a=u.useMemo(function(){return py(s)},[s]);return u.createElement(fy,{styles:hy(a,!t,s,n?"":"!important")})},Oo=!1;if(typeof window<"u")try{var Jn=Object.defineProperty({},"passive",{get:function(){return Oo=!0,!0}});window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Oo=!1}var Zt=Oo?{passive:!1}:!1,yy=function(e){return e.tagName==="TEXTAREA"},Ac=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!yy(e)&&n[t]==="visible")},xy=function(e){return Ac(e,"overflowY")},by=function(e){return Ac(e,"overflowX")},ka=function(e,t){var n=t.ownerDocument,o=t;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var s=Rc(e,o);if(s){var a=Ic(e,o),i=a[1],c=a[2];if(i>c)return!0}o=o.parentNode}while(o&&o!==n.body);return!1},vy=function(e){var t=e.scrollTop,n=e.scrollHeight,o=e.clientHeight;return[t,n,o]},wy=function(e){var t=e.scrollLeft,n=e.scrollWidth,o=e.clientWidth;return[t,n,o]},Rc=function(e,t){return e==="v"?xy(t):by(t)},Ic=function(e,t){return e==="v"?vy(t):wy(t)},$y=function(e,t){return e==="h"&&t==="rtl"?-1:1},Ny=function(e,t,n,o,s){var a=$y(e,window.getComputedStyle(t).direction),i=a*o,c=n.target,d=t.contains(c),l=!1,p=i>0,m=0,x=0;do{if(!c)break;var b=Ic(e,c),h=b[0],f=b[1],y=b[2],w=f-y-a*h;(h||w)&&Rc(e,c)&&(m+=w,x+=h);var g=c.parentNode;c=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!d&&c!==document.body||d&&(t.contains(c)||t===c));return(p&&Math.abs(m)<1||!p&&Math.abs(x)<1)&&(l=!0),l},Zn=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Aa=function(e){return[e.deltaX,e.deltaY]},Ra=function(e){return e&&"current"in e?e.current:e},Sy=function(e,t){return e[0]===t[0]&&e[1]===t[1]},jy=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Ey=0,Qt=[];function Cy(e){var t=u.useRef([]),n=u.useRef([0,0]),o=u.useRef(),s=u.useState(Ey++)[0],a=u.useState(kc)[0],i=u.useRef(e);u.useEffect(function(){i.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var f=Wd([e.lockRef.current],(e.shards||[]).map(Ra),!0).filter(Boolean);return f.forEach(function(y){return y.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),f.forEach(function(y){return y.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var c=u.useCallback(function(f,y){if("touches"in f&&f.touches.length===2||f.type==="wheel"&&f.ctrlKey)return!i.current.allowPinchZoom;var w=Zn(f),g=n.current,N="deltaX"in f?f.deltaX:g[0]-w[0],$="deltaY"in f?f.deltaY:g[1]-w[1],S,T=f.target,E=Math.abs(N)>Math.abs($)?"h":"v";if("touches"in f&&E==="h"&&T.type==="range")return!1;var v=window.getSelection(),k=v&&v.anchorNode,O=k?k===T||k.contains(T):!1;if(O)return!1;var L=ka(E,T);if(!L)return!0;if(L?S=E:(S=E==="v"?"h":"v",L=ka(E,T)),!L)return!1;if(!o.current&&"changedTouches"in f&&(N||$)&&(o.current=S),!S)return!0;var j=o.current||S;return Ny(j,y,f,j==="h"?N:$)},[]),d=u.useCallback(function(f){var y=f;if(!(!Qt.length||Qt[Qt.length-1]!==a)){var w="deltaY"in y?Aa(y):Zn(y),g=t.current.filter(function(S){return S.name===y.type&&(S.target===y.target||y.target===S.shadowParent)&&Sy(S.delta,w)})[0];if(g&&g.should){y.cancelable&&y.preventDefault();return}if(!g){var N=(i.current.shards||[]).map(Ra).filter(Boolean).filter(function(S){return S.contains(y.target)}),$=N.length>0?c(y,N[0]):!i.current.noIsolation;$&&y.cancelable&&y.preventDefault()}}},[]),l=u.useCallback(function(f,y,w,g){var N={name:f,delta:y,target:w,should:g,shadowParent:Ty(w)};t.current.push(N),setTimeout(function(){t.current=t.current.filter(function($){return $!==N})},1)},[]),p=u.useCallback(function(f){n.current=Zn(f),o.current=void 0},[]),m=u.useCallback(function(f){l(f.type,Aa(f),f.target,c(f,e.lockRef.current))},[]),x=u.useCallback(function(f){l(f.type,Zn(f),f.target,c(f,e.lockRef.current))},[]);u.useEffect(function(){return Qt.push(a),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:x}),document.addEventListener("wheel",d,Zt),document.addEventListener("touchmove",d,Zt),document.addEventListener("touchstart",p,Zt),function(){Qt=Qt.filter(function(f){return f!==a}),document.removeEventListener("wheel",d,Zt),document.removeEventListener("touchmove",d,Zt),document.removeEventListener("touchstart",p,Zt)}},[]);var b=e.removeScrollBar,h=e.inert;return u.createElement(u.Fragment,null,h?u.createElement(a,{styles:jy(s)}):null,b?u.createElement(gy,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Ty(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const ky=ry(Tc,Cy);var as=u.forwardRef(function(e,t){return u.createElement(Pr,$t({},e,{ref:t,sideCar:ky}))});as.classNames=Pr.classNames;var Ay=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},en=new WeakMap,Qn=new WeakMap,er={},fo=0,Dc=function(e){return e&&(e.host||Dc(e.parentNode))},Ry=function(e,t){return t.map(function(n){if(e.contains(n))return n;var o=Dc(n);return o&&e.contains(o)?o:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Iy=function(e,t,n,o){var s=Ry(t,Array.isArray(e)?e:[e]);er[n]||(er[n]=new WeakMap);var a=er[n],i=[],c=new Set,d=new Set(s),l=function(m){!m||c.has(m)||(c.add(m),l(m.parentNode))};s.forEach(l);var p=function(m){!m||d.has(m)||Array.prototype.forEach.call(m.children,function(x){if(c.has(x))p(x);else try{var b=x.getAttribute(o),h=b!==null&&b!=="false",f=(en.get(x)||0)+1,y=(a.get(x)||0)+1;en.set(x,f),a.set(x,y),i.push(x),f===1&&h&&Qn.set(x,!0),y===1&&x.setAttribute(n,"true"),h||x.setAttribute(o,"true")}catch(w){console.error("aria-hidden: cannot operate on ",x,w)}})};return p(t),c.clear(),fo++,function(){i.forEach(function(m){var x=en.get(m)-1,b=a.get(m)-1;en.set(m,x),a.set(m,b),x||(Qn.has(m)||m.removeAttribute(o),Qn.delete(m)),b||m.removeAttribute(n)}),fo--,fo||(en=new WeakMap,en=new WeakMap,Qn=new WeakMap,er={})}},Pc=function(e,t,n){n===void 0&&(n="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),s=Ay(e);return s?(o.push.apply(o,Array.from(s.querySelectorAll("[aria-live], script"))),Iy(o,s,n,"aria-hidden")):function(){return null}};function Dy(e){const t=Py(e),n=u.forwardRef((o,s)=>{const{children:a,...i}=o,c=u.Children.toArray(a),d=c.find(Ly);if(d){const l=d.props.children,p=c.map(m=>m===d?u.Children.count(l)>1?u.Children.only(null):u.isValidElement(l)?l.props.children:null:m);return r.jsx(t,{...i,ref:s,children:u.isValidElement(l)?u.cloneElement(l,void 0,p):null})}return r.jsx(t,{...i,ref:s,children:a})});return n.displayName=`${e}.Slot`,n}function Py(e){const t=u.forwardRef((n,o)=>{const{children:s,...a}=n;if(u.isValidElement(s)){const i=_y(s),c=zy(a,s.props);return s.type!==u.Fragment&&(c.ref=o?mn(o,i):i),u.cloneElement(s,c)}return u.Children.count(s)>1?u.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Oy=Symbol("radix.slottable");function Ly(e){return u.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Oy}function zy(e,t){const n={...t};for(const o in t){const s=e[o],a=t[o];/^on[A-Z]/.test(o)?s&&a?n[o]=(...c)=>{const d=a(...c);return s(...c),d}:s&&(n[o]=s):o==="style"?n[o]={...s,...a}:o==="className"&&(n[o]=[s,a].filter(Boolean).join(" "))}return{...e,...n}}function _y(e){var o,s;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Or="Dialog",[Oc]=Wn(Or),[My,tt]=Oc(Or),Lc=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:s,onOpenChange:a,modal:i=!0}=e,c=u.useRef(null),d=u.useRef(null),[l,p]=xr({prop:o,defaultProp:s??!1,onChange:a,caller:Or});return r.jsx(My,{scope:t,triggerRef:c,contentRef:d,contentId:nn(),titleId:nn(),descriptionId:nn(),open:l,onOpenChange:p,onOpenToggle:u.useCallback(()=>p(m=>!m),[p]),modal:i,children:n})};Lc.displayName=Or;var zc="DialogTrigger",Fy=u.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=tt(zc,n),a=Ce(t,s.triggerRef);return r.jsx(ue.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":ls(s.open),...o,ref:a,onClick:ce(e.onClick,s.onOpenToggle)})});Fy.displayName=zc;var is="DialogPortal",[Wy,_c]=Oc(is,{forceMount:void 0}),Mc=e=>{const{__scopeDialog:t,forceMount:n,children:o,container:s}=e,a=tt(is,t);return r.jsx(Wy,{scope:t,forceMount:n,children:u.Children.map(o,i=>r.jsx(Vn,{present:n||a.open,children:r.jsx(Dr,{asChild:!0,container:s,children:i})}))})};Mc.displayName=is;var br="DialogOverlay",Fc=u.forwardRef((e,t)=>{const n=_c(br,e.__scopeDialog),{forceMount:o=n.forceMount,...s}=e,a=tt(br,e.__scopeDialog);return a.modal?r.jsx(Vn,{present:o||a.open,children:r.jsx(By,{...s,ref:t})}):null});Fc.displayName=br;var Vy=Dy("DialogOverlay.RemoveScroll"),By=u.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=tt(br,n);return r.jsx(as,{as:Vy,allowPinchZoom:!0,shards:[s.contentRef],children:r.jsx(ue.div,{"data-state":ls(s.open),...o,ref:t,style:{pointerEvents:"auto",...o.style}})})}),zt="DialogContent",Wc=u.forwardRef((e,t)=>{const n=_c(zt,e.__scopeDialog),{forceMount:o=n.forceMount,...s}=e,a=tt(zt,e.__scopeDialog);return r.jsx(Vn,{present:o||a.open,children:a.modal?r.jsx(Uy,{...s,ref:t}):r.jsx(Hy,{...s,ref:t})})});Wc.displayName=zt;var Uy=u.forwardRef((e,t)=>{const n=tt(zt,e.__scopeDialog),o=u.useRef(null),s=Ce(t,n.contentRef,o);return u.useEffect(()=>{const a=o.current;if(a)return Pc(a)},[]),r.jsx(Vc,{...e,ref:s,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ce(e.onCloseAutoFocus,a=>{var i;a.preventDefault(),(i=n.triggerRef.current)==null||i.focus()}),onPointerDownOutside:ce(e.onPointerDownOutside,a=>{const i=a.detail.originalEvent,c=i.button===0&&i.ctrlKey===!0;(i.button===2||c)&&a.preventDefault()}),onFocusOutside:ce(e.onFocusOutside,a=>a.preventDefault())})}),Hy=u.forwardRef((e,t)=>{const n=tt(zt,e.__scopeDialog),o=u.useRef(!1),s=u.useRef(!1);return r.jsx(Vc,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var i,c;(i=e.onCloseAutoFocus)==null||i.call(e,a),a.defaultPrevented||(o.current||(c=n.triggerRef.current)==null||c.focus(),a.preventDefault()),o.current=!1,s.current=!1},onInteractOutside:a=>{var d,l;(d=e.onInteractOutside)==null||d.call(e,a),a.defaultPrevented||(o.current=!0,a.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const i=a.target;((l=n.triggerRef.current)==null?void 0:l.contains(i))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&s.current&&a.preventDefault()}})}),Vc=u.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:s,onCloseAutoFocus:a,...i}=e,c=tt(zt,n),d=u.useRef(null),l=Ce(t,d);return Ec(),r.jsxs(r.Fragment,{children:[r.jsx(ss,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:s,onUnmountAutoFocus:a,children:r.jsx(Ir,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":ls(c.open),...i,ref:l,onDismiss:()=>c.onOpenChange(!1)})}),r.jsxs(r.Fragment,{children:[r.jsx(qy,{titleId:c.titleId}),r.jsx(Yy,{contentRef:d,descriptionId:c.descriptionId})]})]})}),cs="DialogTitle",Bc=u.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=tt(cs,n);return r.jsx(ue.h2,{id:s.titleId,...o,ref:t})});Bc.displayName=cs;var Uc="DialogDescription",Hc=u.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=tt(Uc,n);return r.jsx(ue.p,{id:s.descriptionId,...o,ref:t})});Hc.displayName=Uc;var qc="DialogClose",Kc=u.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,s=tt(qc,n);return r.jsx(ue.button,{type:"button",...o,ref:t,onClick:ce(e.onClick,()=>s.onOpenChange(!1))})});Kc.displayName=qc;function ls(e){return e?"open":"closed"}var Yc="DialogTitleWarning",[mw,Gc]=mg(Yc,{contentName:zt,titleName:cs,docsSlug:"dialog"}),qy=({titleId:e})=>{const t=Gc(Yc),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return u.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Ky="DialogDescriptionWarning",Yy=({contentRef:e,descriptionId:t})=>{const o=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Gc(Ky).contentName}}.`;return u.useEffect(()=>{var a;const s=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&s&&(document.getElementById(t)||console.warn(o))},[o,e,t]),null},Gy=Lc,Xy=Mc,Xc=Fc,Jc=Wc,Zc=Bc,Qc=Hc,Jy=Kc;const gn=Gy,Zy=Xy,el=u.forwardRef(({className:e,...t},n)=>r.jsx(Xc,{ref:n,className:se("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));el.displayName=Xc.displayName;const Vt=u.forwardRef(({className:e,children:t,...n},o)=>r.jsxs(Zy,{children:[r.jsx(el,{}),r.jsxs(Jc,{ref:o,className:se("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,r.jsxs(Jy,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[r.jsx(rs,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Vt.displayName=Jc.displayName;const Bt=({className:e,...t})=>r.jsx("div",{className:se("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});Bt.displayName="DialogHeader";const Ut=({className:e,...t})=>r.jsx("div",{className:se("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});Ut.displayName="DialogFooter";const Ht=u.forwardRef(({className:e,...t},n)=>r.jsx(Zc,{ref:n,className:se("text-lg font-semibold leading-none tracking-tight",e),...t}));Ht.displayName=Zc.displayName;const qt=u.forwardRef(({className:e,...t},n)=>r.jsx(Qc,{ref:n,className:se("text-sm text-muted-foreground",e),...t}));qt.displayName=Qc.displayName;var Qy=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ex=Qy.reduce((e,t)=>{const n=vc(`Primitive.${t}`),o=u.forwardRef((s,a)=>{const{asChild:i,...c}=s,d=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),r.jsx(d,{...c,ref:a})});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{}),tx="Label",tl=u.forwardRef((e,t)=>r.jsx(ex.label,{...e,ref:t,onMouseDown:n=>{var s;n.target.closest("button, input, select, textarea")||((s=e.onMouseDown)==null||s.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));tl.displayName=tx;var nl=tl;const nx=Fn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),M=u.forwardRef(({className:e,...t},n)=>r.jsx(nl,{ref:n,className:se(nx(),e),...t}));M.displayName=nl.displayName;function Ia(e,[t,n]){return Math.min(n,Math.max(t,e))}function Da(e){const t=rx(e),n=u.forwardRef((o,s)=>{const{children:a,...i}=o,c=u.Children.toArray(a),d=c.find(sx);if(d){const l=d.props.children,p=c.map(m=>m===d?u.Children.count(l)>1?u.Children.only(null):u.isValidElement(l)?l.props.children:null:m);return r.jsx(t,{...i,ref:s,children:u.isValidElement(l)?u.cloneElement(l,void 0,p):null})}return r.jsx(t,{...i,ref:s,children:a})});return n.displayName=`${e}.Slot`,n}function rx(e){const t=u.forwardRef((n,o)=>{const{children:s,...a}=n;if(u.isValidElement(s)){const i=ix(s),c=ax(a,s.props);return s.type!==u.Fragment&&(c.ref=o?mn(o,i):i),u.cloneElement(s,c)}return u.Children.count(s)>1?u.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ox=Symbol("radix.slottable");function sx(e){return u.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ox}function ax(e,t){const n={...t};for(const o in t){const s=e[o],a=t[o];/^on[A-Z]/.test(o)?s&&a?n[o]=(...c)=>{const d=a(...c);return s(...c),d}:s&&(n[o]=s):o==="style"?n[o]={...s,...a}:o==="className"&&(n[o]=[s,a].filter(Boolean).join(" "))}return{...e,...n}}function ix(e){var o,s;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function rl(e){const t=e+"CollectionProvider",[n,o]=Wn(t),[s,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=f=>{const{scope:y,children:w}=f,g=ot.useRef(null),N=ot.useRef(new Map).current;return r.jsx(s,{scope:y,itemMap:N,collectionRef:g,children:w})};i.displayName=t;const c=e+"CollectionSlot",d=Da(c),l=ot.forwardRef((f,y)=>{const{scope:w,children:g}=f,N=a(c,w),$=Ce(y,N.collectionRef);return r.jsx(d,{ref:$,children:g})});l.displayName=c;const p=e+"CollectionItemSlot",m="data-radix-collection-item",x=Da(p),b=ot.forwardRef((f,y)=>{const{scope:w,children:g,...N}=f,$=ot.useRef(null),S=Ce(y,$),T=a(p,w);return ot.useEffect(()=>(T.itemMap.set($,{ref:$,...N}),()=>void T.itemMap.delete($))),r.jsx(x,{[m]:"",ref:S,children:g})});b.displayName=p;function h(f){const y=a(e+"CollectionConsumer",f);return ot.useCallback(()=>{const g=y.collectionRef.current;if(!g)return[];const N=Array.from(g.querySelectorAll(`[${m}]`));return Array.from(y.itemMap.values()).sort((T,E)=>N.indexOf(T.ref.current)-N.indexOf(E.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:i,Slot:l,ItemSlot:b},h,o]}var cx=u.createContext(void 0);function lx(e){const t=u.useContext(cx);return e||t||"ltr"}const dx=["top","right","bottom","left"],St=Math.min,He=Math.max,vr=Math.round,tr=Math.floor,at=e=>({x:e,y:e}),ux={left:"right",right:"left",bottom:"top",top:"bottom"},px={start:"end",end:"start"};function Lo(e,t,n){return He(e,St(t,n))}function xt(e,t){return typeof e=="function"?e(t):e}function bt(e){return e.split("-")[0]}function yn(e){return e.split("-")[1]}function ds(e){return e==="x"?"y":"x"}function us(e){return e==="y"?"height":"width"}const fx=new Set(["top","bottom"]);function st(e){return fx.has(bt(e))?"y":"x"}function ps(e){return ds(st(e))}function hx(e,t,n){n===void 0&&(n=!1);const o=yn(e),s=ps(e),a=us(s);let i=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(i=wr(i)),[i,wr(i)]}function mx(e){const t=wr(e);return[zo(e),t,zo(t)]}function zo(e){return e.replace(/start|end/g,t=>px[t])}const Pa=["left","right"],Oa=["right","left"],gx=["top","bottom"],yx=["bottom","top"];function xx(e,t,n){switch(e){case"top":case"bottom":return n?t?Oa:Pa:t?Pa:Oa;case"left":case"right":return t?gx:yx;default:return[]}}function bx(e,t,n,o){const s=yn(e);let a=xx(bt(e),n==="start",o);return s&&(a=a.map(i=>i+"-"+s),t&&(a=a.concat(a.map(zo)))),a}function wr(e){return e.replace(/left|right|bottom|top/g,t=>ux[t])}function vx(e){return{top:0,right:0,bottom:0,left:0,...e}}function ol(e){return typeof e!="number"?vx(e):{top:e,right:e,bottom:e,left:e}}function $r(e){const{x:t,y:n,width:o,height:s}=e;return{width:o,height:s,top:n,left:t,right:t+o,bottom:n+s,x:t,y:n}}function La(e,t,n){let{reference:o,floating:s}=e;const a=st(t),i=ps(t),c=us(i),d=bt(t),l=a==="y",p=o.x+o.width/2-s.width/2,m=o.y+o.height/2-s.height/2,x=o[c]/2-s[c]/2;let b;switch(d){case"top":b={x:p,y:o.y-s.height};break;case"bottom":b={x:p,y:o.y+o.height};break;case"right":b={x:o.x+o.width,y:m};break;case"left":b={x:o.x-s.width,y:m};break;default:b={x:o.x,y:o.y}}switch(yn(t)){case"start":b[i]-=x*(n&&l?-1:1);break;case"end":b[i]+=x*(n&&l?-1:1);break}return b}const wx=async(e,t,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:a=[],platform:i}=n,c=a.filter(Boolean),d=await(i.isRTL==null?void 0:i.isRTL(t));let l=await i.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:m}=La(l,o,d),x=o,b={},h=0;for(let f=0;f<c.length;f++){const{name:y,fn:w}=c[f],{x:g,y:N,data:$,reset:S}=await w({x:p,y:m,initialPlacement:o,placement:x,strategy:s,middlewareData:b,rects:l,platform:i,elements:{reference:e,floating:t}});p=g??p,m=N??m,b={...b,[y]:{...b[y],...$}},S&&h<=50&&(h++,typeof S=="object"&&(S.placement&&(x=S.placement),S.rects&&(l=S.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:s}):S.rects),{x:p,y:m}=La(l,x,d)),f=-1)}return{x:p,y:m,placement:x,strategy:s,middlewareData:b}};async function An(e,t){var n;t===void 0&&(t={});const{x:o,y:s,platform:a,rects:i,elements:c,strategy:d}=e,{boundary:l="clippingAncestors",rootBoundary:p="viewport",elementContext:m="floating",altBoundary:x=!1,padding:b=0}=xt(t,e),h=ol(b),y=c[x?m==="floating"?"reference":"floating":m],w=$r(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(y)))==null||n?y:y.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:l,rootBoundary:p,strategy:d})),g=m==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,N=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),$=await(a.isElement==null?void 0:a.isElement(N))?await(a.getScale==null?void 0:a.getScale(N))||{x:1,y:1}:{x:1,y:1},S=$r(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:g,offsetParent:N,strategy:d}):g);return{top:(w.top-S.top+h.top)/$.y,bottom:(S.bottom-w.bottom+h.bottom)/$.y,left:(w.left-S.left+h.left)/$.x,right:(S.right-w.right+h.right)/$.x}}const $x=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:s,rects:a,platform:i,elements:c,middlewareData:d}=t,{element:l,padding:p=0}=xt(e,t)||{};if(l==null)return{};const m=ol(p),x={x:n,y:o},b=ps(s),h=us(b),f=await i.getDimensions(l),y=b==="y",w=y?"top":"left",g=y?"bottom":"right",N=y?"clientHeight":"clientWidth",$=a.reference[h]+a.reference[b]-x[b]-a.floating[h],S=x[b]-a.reference[b],T=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l));let E=T?T[N]:0;(!E||!await(i.isElement==null?void 0:i.isElement(T)))&&(E=c.floating[N]||a.floating[h]);const v=$/2-S/2,k=E/2-f[h]/2-1,O=St(m[w],k),L=St(m[g],k),j=O,I=E-f[h]-L,R=E/2-f[h]/2+v,W=Lo(j,R,I),P=!d.arrow&&yn(s)!=null&&R!==W&&a.reference[h]/2-(R<j?O:L)-f[h]/2<0,B=P?R<j?R-j:R-I:0;return{[b]:x[b]+B,data:{[b]:W,centerOffset:R-W-B,...P&&{alignmentOffset:B}},reset:P}}}),Nx=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:s,middlewareData:a,rects:i,initialPlacement:c,platform:d,elements:l}=t,{mainAxis:p=!0,crossAxis:m=!0,fallbackPlacements:x,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:f=!0,...y}=xt(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const w=bt(s),g=st(c),N=bt(c)===c,$=await(d.isRTL==null?void 0:d.isRTL(l.floating)),S=x||(N||!f?[wr(c)]:mx(c)),T=h!=="none";!x&&T&&S.push(...bx(c,f,h,$));const E=[c,...S],v=await An(t,y),k=[];let O=((o=a.flip)==null?void 0:o.overflows)||[];if(p&&k.push(v[w]),m){const R=hx(s,i,$);k.push(v[R[0]],v[R[1]])}if(O=[...O,{placement:s,overflows:k}],!k.every(R=>R<=0)){var L,j;const R=(((L=a.flip)==null?void 0:L.index)||0)+1,W=E[R];if(W&&(!(m==="alignment"?g!==st(W):!1)||O.every(A=>st(A.placement)===g?A.overflows[0]>0:!0)))return{data:{index:R,overflows:O},reset:{placement:W}};let P=(j=O.filter(B=>B.overflows[0]<=0).sort((B,A)=>B.overflows[1]-A.overflows[1])[0])==null?void 0:j.placement;if(!P)switch(b){case"bestFit":{var I;const B=(I=O.filter(A=>{if(T){const q=st(A.placement);return q===g||q==="y"}return!0}).map(A=>[A.placement,A.overflows.filter(q=>q>0).reduce((q,ye)=>q+ye,0)]).sort((A,q)=>A[1]-q[1])[0])==null?void 0:I[0];B&&(P=B);break}case"initialPlacement":P=c;break}if(s!==P)return{reset:{placement:P}}}return{}}}};function za(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function _a(e){return dx.some(t=>e[t]>=0)}const Sx=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...s}=xt(e,t);switch(o){case"referenceHidden":{const a=await An(t,{...s,elementContext:"reference"}),i=za(a,n.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:_a(i)}}}case"escaped":{const a=await An(t,{...s,altBoundary:!0}),i=za(a,n.floating);return{data:{escapedOffsets:i,escaped:_a(i)}}}default:return{}}}}},sl=new Set(["left","top"]);async function jx(e,t){const{placement:n,platform:o,elements:s}=e,a=await(o.isRTL==null?void 0:o.isRTL(s.floating)),i=bt(n),c=yn(n),d=st(n)==="y",l=sl.has(i)?-1:1,p=a&&d?-1:1,m=xt(t,e);let{mainAxis:x,crossAxis:b,alignmentAxis:h}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return c&&typeof h=="number"&&(b=c==="end"?h*-1:h),d?{x:b*p,y:x*l}:{x:x*l,y:b*p}}const Ex=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:s,y:a,placement:i,middlewareData:c}=t,d=await jx(t,e);return i===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:s+d.x,y:a+d.y,data:{...d,placement:i}}}}},Cx=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:s}=t,{mainAxis:a=!0,crossAxis:i=!1,limiter:c={fn:y=>{let{x:w,y:g}=y;return{x:w,y:g}}},...d}=xt(e,t),l={x:n,y:o},p=await An(t,d),m=st(bt(s)),x=ds(m);let b=l[x],h=l[m];if(a){const y=x==="y"?"top":"left",w=x==="y"?"bottom":"right",g=b+p[y],N=b-p[w];b=Lo(g,b,N)}if(i){const y=m==="y"?"top":"left",w=m==="y"?"bottom":"right",g=h+p[y],N=h-p[w];h=Lo(g,h,N)}const f=c.fn({...t,[x]:b,[m]:h});return{...f,data:{x:f.x-n,y:f.y-o,enabled:{[x]:a,[m]:i}}}}}},Tx=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:s,rects:a,middlewareData:i}=t,{offset:c=0,mainAxis:d=!0,crossAxis:l=!0}=xt(e,t),p={x:n,y:o},m=st(s),x=ds(m);let b=p[x],h=p[m];const f=xt(c,t),y=typeof f=="number"?{mainAxis:f,crossAxis:0}:{mainAxis:0,crossAxis:0,...f};if(d){const N=x==="y"?"height":"width",$=a.reference[x]-a.floating[N]+y.mainAxis,S=a.reference[x]+a.reference[N]-y.mainAxis;b<$?b=$:b>S&&(b=S)}if(l){var w,g;const N=x==="y"?"width":"height",$=sl.has(bt(s)),S=a.reference[m]-a.floating[N]+($&&((w=i.offset)==null?void 0:w[m])||0)+($?0:y.crossAxis),T=a.reference[m]+a.reference[N]+($?0:((g=i.offset)==null?void 0:g[m])||0)-($?y.crossAxis:0);h<S?h=S:h>T&&(h=T)}return{[x]:b,[m]:h}}}},kx=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,o;const{placement:s,rects:a,platform:i,elements:c}=t,{apply:d=()=>{},...l}=xt(e,t),p=await An(t,l),m=bt(s),x=yn(s),b=st(s)==="y",{width:h,height:f}=a.floating;let y,w;m==="top"||m==="bottom"?(y=m,w=x===(await(i.isRTL==null?void 0:i.isRTL(c.floating))?"start":"end")?"left":"right"):(w=m,y=x==="end"?"top":"bottom");const g=f-p.top-p.bottom,N=h-p.left-p.right,$=St(f-p[y],g),S=St(h-p[w],N),T=!t.middlewareData.shift;let E=$,v=S;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(v=N),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(E=g),T&&!x){const O=He(p.left,0),L=He(p.right,0),j=He(p.top,0),I=He(p.bottom,0);b?v=h-2*(O!==0||L!==0?O+L:He(p.left,p.right)):E=f-2*(j!==0||I!==0?j+I:He(p.top,p.bottom))}await d({...t,availableWidth:v,availableHeight:E});const k=await i.getDimensions(c.floating);return h!==k.width||f!==k.height?{reset:{rects:!0}}:{}}}};function Lr(){return typeof window<"u"}function xn(e){return al(e)?(e.nodeName||"").toLowerCase():"#document"}function qe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function dt(e){var t;return(t=(al(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function al(e){return Lr()?e instanceof Node||e instanceof qe(e).Node:!1}function Ze(e){return Lr()?e instanceof Element||e instanceof qe(e).Element:!1}function it(e){return Lr()?e instanceof HTMLElement||e instanceof qe(e).HTMLElement:!1}function Ma(e){return!Lr()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof qe(e).ShadowRoot}const Ax=new Set(["inline","contents"]);function Bn(e){const{overflow:t,overflowX:n,overflowY:o,display:s}=Qe(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!Ax.has(s)}const Rx=new Set(["table","td","th"]);function Ix(e){return Rx.has(xn(e))}const Dx=[":popover-open",":modal"];function zr(e){return Dx.some(t=>{try{return e.matches(t)}catch{return!1}})}const Px=["transform","translate","scale","rotate","perspective"],Ox=["transform","translate","scale","rotate","perspective","filter"],Lx=["paint","layout","strict","content"];function fs(e){const t=hs(),n=Ze(e)?Qe(e):e;return Px.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Ox.some(o=>(n.willChange||"").includes(o))||Lx.some(o=>(n.contain||"").includes(o))}function zx(e){let t=jt(e);for(;it(t)&&!cn(t);){if(fs(t))return t;if(zr(t))return null;t=jt(t)}return null}function hs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const _x=new Set(["html","body","#document"]);function cn(e){return _x.has(xn(e))}function Qe(e){return qe(e).getComputedStyle(e)}function _r(e){return Ze(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function jt(e){if(xn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ma(e)&&e.host||dt(e);return Ma(t)?t.host:t}function il(e){const t=jt(e);return cn(t)?e.ownerDocument?e.ownerDocument.body:e.body:it(t)&&Bn(t)?t:il(t)}function Rn(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const s=il(e),a=s===((o=e.ownerDocument)==null?void 0:o.body),i=qe(s);if(a){const c=_o(i);return t.concat(i,i.visualViewport||[],Bn(s)?s:[],c&&n?Rn(c):[])}return t.concat(s,Rn(s,[],n))}function _o(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function cl(e){const t=Qe(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const s=it(e),a=s?e.offsetWidth:n,i=s?e.offsetHeight:o,c=vr(n)!==a||vr(o)!==i;return c&&(n=a,o=i),{width:n,height:o,$:c}}function ms(e){return Ze(e)?e:e.contextElement}function on(e){const t=ms(e);if(!it(t))return at(1);const n=t.getBoundingClientRect(),{width:o,height:s,$:a}=cl(t);let i=(a?vr(n.width):n.width)/o,c=(a?vr(n.height):n.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const Mx=at(0);function ll(e){const t=qe(e);return!hs()||!t.visualViewport?Mx:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Fx(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==qe(e)?!1:t}function _t(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect(),a=ms(e);let i=at(1);t&&(o?Ze(o)&&(i=on(o)):i=on(e));const c=Fx(a,n,o)?ll(a):at(0);let d=(s.left+c.x)/i.x,l=(s.top+c.y)/i.y,p=s.width/i.x,m=s.height/i.y;if(a){const x=qe(a),b=o&&Ze(o)?qe(o):o;let h=x,f=_o(h);for(;f&&o&&b!==h;){const y=on(f),w=f.getBoundingClientRect(),g=Qe(f),N=w.left+(f.clientLeft+parseFloat(g.paddingLeft))*y.x,$=w.top+(f.clientTop+parseFloat(g.paddingTop))*y.y;d*=y.x,l*=y.y,p*=y.x,m*=y.y,d+=N,l+=$,h=qe(f),f=_o(h)}}return $r({width:p,height:m,x:d,y:l})}function Mr(e,t){const n=_r(e).scrollLeft;return t?t.left+n:_t(dt(e)).left+n}function dl(e,t){const n=e.getBoundingClientRect(),o=n.left+t.scrollLeft-Mr(e,n),s=n.top+t.scrollTop;return{x:o,y:s}}function Wx(e){let{elements:t,rect:n,offsetParent:o,strategy:s}=e;const a=s==="fixed",i=dt(o),c=t?zr(t.floating):!1;if(o===i||c&&a)return n;let d={scrollLeft:0,scrollTop:0},l=at(1);const p=at(0),m=it(o);if((m||!m&&!a)&&((xn(o)!=="body"||Bn(i))&&(d=_r(o)),it(o))){const b=_t(o);l=on(o),p.x=b.x+o.clientLeft,p.y=b.y+o.clientTop}const x=i&&!m&&!a?dl(i,d):at(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-d.scrollLeft*l.x+p.x+x.x,y:n.y*l.y-d.scrollTop*l.y+p.y+x.y}}function Vx(e){return Array.from(e.getClientRects())}function Bx(e){const t=dt(e),n=_r(e),o=e.ownerDocument.body,s=He(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=He(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+Mr(e);const c=-n.scrollTop;return Qe(o).direction==="rtl"&&(i+=He(t.clientWidth,o.clientWidth)-s),{width:s,height:a,x:i,y:c}}const Fa=25;function Ux(e,t){const n=qe(e),o=dt(e),s=n.visualViewport;let a=o.clientWidth,i=o.clientHeight,c=0,d=0;if(s){a=s.width,i=s.height;const p=hs();(!p||p&&t==="fixed")&&(c=s.offsetLeft,d=s.offsetTop)}const l=Mr(o);if(l<=0){const p=o.ownerDocument,m=p.body,x=getComputedStyle(m),b=p.compatMode==="CSS1Compat"&&parseFloat(x.marginLeft)+parseFloat(x.marginRight)||0,h=Math.abs(o.clientWidth-m.clientWidth-b);h<=Fa&&(a-=h)}else l<=Fa&&(a+=l);return{width:a,height:i,x:c,y:d}}const Hx=new Set(["absolute","fixed"]);function qx(e,t){const n=_t(e,!0,t==="fixed"),o=n.top+e.clientTop,s=n.left+e.clientLeft,a=it(e)?on(e):at(1),i=e.clientWidth*a.x,c=e.clientHeight*a.y,d=s*a.x,l=o*a.y;return{width:i,height:c,x:d,y:l}}function Wa(e,t,n){let o;if(t==="viewport")o=Ux(e,n);else if(t==="document")o=Bx(dt(e));else if(Ze(t))o=qx(t,n);else{const s=ll(e);o={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return $r(o)}function ul(e,t){const n=jt(e);return n===t||!Ze(n)||cn(n)?!1:Qe(n).position==="fixed"||ul(n,t)}function Kx(e,t){const n=t.get(e);if(n)return n;let o=Rn(e,[],!1).filter(c=>Ze(c)&&xn(c)!=="body"),s=null;const a=Qe(e).position==="fixed";let i=a?jt(e):e;for(;Ze(i)&&!cn(i);){const c=Qe(i),d=fs(i);!d&&c.position==="fixed"&&(s=null),(a?!d&&!s:!d&&c.position==="static"&&!!s&&Hx.has(s.position)||Bn(i)&&!d&&ul(e,i))?o=o.filter(p=>p!==i):s=c,i=jt(i)}return t.set(e,o),o}function Yx(e){let{element:t,boundary:n,rootBoundary:o,strategy:s}=e;const i=[...n==="clippingAncestors"?zr(t)?[]:Kx(t,this._c):[].concat(n),o],c=i[0],d=i.reduce((l,p)=>{const m=Wa(t,p,s);return l.top=He(m.top,l.top),l.right=St(m.right,l.right),l.bottom=St(m.bottom,l.bottom),l.left=He(m.left,l.left),l},Wa(t,c,s));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Gx(e){const{width:t,height:n}=cl(e);return{width:t,height:n}}function Xx(e,t,n){const o=it(t),s=dt(t),a=n==="fixed",i=_t(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const d=at(0);function l(){d.x=Mr(s)}if(o||!o&&!a)if((xn(t)!=="body"||Bn(s))&&(c=_r(t)),o){const b=_t(t,!0,a,t);d.x=b.x+t.clientLeft,d.y=b.y+t.clientTop}else s&&l();a&&!o&&s&&l();const p=s&&!o&&!a?dl(s,c):at(0),m=i.left+c.scrollLeft-d.x-p.x,x=i.top+c.scrollTop-d.y-p.y;return{x:m,y:x,width:i.width,height:i.height}}function ho(e){return Qe(e).position==="static"}function Va(e,t){if(!it(e)||Qe(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return dt(e)===n&&(n=n.ownerDocument.body),n}function pl(e,t){const n=qe(e);if(zr(e))return n;if(!it(e)){let s=jt(e);for(;s&&!cn(s);){if(Ze(s)&&!ho(s))return s;s=jt(s)}return n}let o=Va(e,t);for(;o&&Ix(o)&&ho(o);)o=Va(o,t);return o&&cn(o)&&ho(o)&&!fs(o)?n:o||zx(e)||n}const Jx=async function(e){const t=this.getOffsetParent||pl,n=this.getDimensions,o=await n(e.floating);return{reference:Xx(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Zx(e){return Qe(e).direction==="rtl"}const Qx={convertOffsetParentRelativeRectToViewportRelativeRect:Wx,getDocumentElement:dt,getClippingRect:Yx,getOffsetParent:pl,getElementRects:Jx,getClientRects:Vx,getDimensions:Gx,getScale:on,isElement:Ze,isRTL:Zx};function fl(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function eb(e,t){let n=null,o;const s=dt(e);function a(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function i(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),a();const l=e.getBoundingClientRect(),{left:p,top:m,width:x,height:b}=l;if(c||t(),!x||!b)return;const h=tr(m),f=tr(s.clientWidth-(p+x)),y=tr(s.clientHeight-(m+b)),w=tr(p),N={rootMargin:-h+"px "+-f+"px "+-y+"px "+-w+"px",threshold:He(0,St(1,d))||1};let $=!0;function S(T){const E=T[0].intersectionRatio;if(E!==d){if(!$)return i();E?i(!1,E):o=setTimeout(()=>{i(!1,1e-7)},1e3)}E===1&&!fl(l,e.getBoundingClientRect())&&i(),$=!1}try{n=new IntersectionObserver(S,{...N,root:s.ownerDocument})}catch{n=new IntersectionObserver(S,N)}n.observe(e)}return i(!0),a}function tb(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,l=ms(e),p=s||a?[...l?Rn(l):[],...Rn(t)]:[];p.forEach(w=>{s&&w.addEventListener("scroll",n,{passive:!0}),a&&w.addEventListener("resize",n)});const m=l&&c?eb(l,n):null;let x=-1,b=null;i&&(b=new ResizeObserver(w=>{let[g]=w;g&&g.target===l&&b&&(b.unobserve(t),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var N;(N=b)==null||N.observe(t)})),n()}),l&&!d&&b.observe(l),b.observe(t));let h,f=d?_t(e):null;d&&y();function y(){const w=_t(e);f&&!fl(f,w)&&n(),f=w,h=requestAnimationFrame(y)}return n(),()=>{var w;p.forEach(g=>{s&&g.removeEventListener("scroll",n),a&&g.removeEventListener("resize",n)}),m==null||m(),(w=b)==null||w.disconnect(),b=null,d&&cancelAnimationFrame(h)}}const nb=Ex,rb=Cx,ob=Nx,sb=kx,ab=Sx,Ba=$x,ib=Tx,cb=(e,t,n)=>{const o=new Map,s={platform:Qx,...n},a={...s.platform,_c:o};return wx(e,t,{...s,platform:a})};var lb=typeof document<"u",db=function(){},ur=lb?u.useLayoutEffect:db;function Nr(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,s;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!Nr(e[o],t[o]))return!1;return!0}if(s=Object.keys(e),n=s.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,s[o]))return!1;for(o=n;o--!==0;){const a=s[o];if(!(a==="_owner"&&e.$$typeof)&&!Nr(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function hl(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ua(e,t){const n=hl(e);return Math.round(t*n)/n}function mo(e){const t=u.useRef(e);return ur(()=>{t.current=e}),t}function ub(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:s,elements:{reference:a,floating:i}={},transform:c=!0,whileElementsMounted:d,open:l}=e,[p,m]=u.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[x,b]=u.useState(o);Nr(x,o)||b(o);const[h,f]=u.useState(null),[y,w]=u.useState(null),g=u.useCallback(A=>{A!==T.current&&(T.current=A,f(A))},[]),N=u.useCallback(A=>{A!==E.current&&(E.current=A,w(A))},[]),$=a||h,S=i||y,T=u.useRef(null),E=u.useRef(null),v=u.useRef(p),k=d!=null,O=mo(d),L=mo(s),j=mo(l),I=u.useCallback(()=>{if(!T.current||!E.current)return;const A={placement:t,strategy:n,middleware:x};L.current&&(A.platform=L.current),cb(T.current,E.current,A).then(q=>{const ye={...q,isPositioned:j.current!==!1};R.current&&!Nr(v.current,ye)&&(v.current=ye,Dn.flushSync(()=>{m(ye)}))})},[x,t,n,L,j]);ur(()=>{l===!1&&v.current.isPositioned&&(v.current.isPositioned=!1,m(A=>({...A,isPositioned:!1})))},[l]);const R=u.useRef(!1);ur(()=>(R.current=!0,()=>{R.current=!1}),[]),ur(()=>{if($&&(T.current=$),S&&(E.current=S),$&&S){if(O.current)return O.current($,S,I);I()}},[$,S,I,O,k]);const W=u.useMemo(()=>({reference:T,floating:E,setReference:g,setFloating:N}),[g,N]),P=u.useMemo(()=>({reference:$,floating:S}),[$,S]),B=u.useMemo(()=>{const A={position:n,left:0,top:0};if(!P.floating)return A;const q=Ua(P.floating,p.x),ye=Ua(P.floating,p.y);return c?{...A,transform:"translate("+q+"px, "+ye+"px)",...hl(P.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:q,top:ye}},[n,c,P.floating,p.x,p.y]);return u.useMemo(()=>({...p,update:I,refs:W,elements:P,floatingStyles:B}),[p,I,W,P,B])}const pb=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:s}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?Ba({element:o.current,padding:s}).fn(n):{}:o?Ba({element:o,padding:s}).fn(n):{}}}},fb=(e,t)=>({...nb(e),options:[e,t]}),hb=(e,t)=>({...rb(e),options:[e,t]}),mb=(e,t)=>({...ib(e),options:[e,t]}),gb=(e,t)=>({...ob(e),options:[e,t]}),yb=(e,t)=>({...sb(e),options:[e,t]}),xb=(e,t)=>({...ab(e),options:[e,t]}),bb=(e,t)=>({...pb(e),options:[e,t]});var vb="Arrow",ml=u.forwardRef((e,t)=>{const{children:n,width:o=10,height:s=5,...a}=e;return r.jsx(ue.svg,{...a,ref:t,width:o,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:r.jsx("polygon",{points:"0,0 30,0 15,10"})})});ml.displayName=vb;var wb=ml;function $b(e){const[t,n]=u.useState(void 0);return _e(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const a=s[0];let i,c;if("borderBoxSize"in a){const d=a.borderBoxSize,l=Array.isArray(d)?d[0]:d;i=l.inlineSize,c=l.blockSize}else i=e.offsetWidth,c=e.offsetHeight;n({width:i,height:c})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}var gs="Popper",[gl,yl]=Wn(gs),[Nb,xl]=gl(gs),bl=e=>{const{__scopePopper:t,children:n}=e,[o,s]=u.useState(null);return r.jsx(Nb,{scope:t,anchor:o,onAnchorChange:s,children:n})};bl.displayName=gs;var vl="PopperAnchor",wl=u.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...s}=e,a=xl(vl,n),i=u.useRef(null),c=Ce(t,i),d=u.useRef(null);return u.useEffect(()=>{const l=d.current;d.current=(o==null?void 0:o.current)||i.current,l!==d.current&&a.onAnchorChange(d.current)}),o?null:r.jsx(ue.div,{...s,ref:c})});wl.displayName=vl;var ys="PopperContent",[Sb,jb]=gl(ys),$l=u.forwardRef((e,t)=>{var D,ee,ve,ae,le,ie;const{__scopePopper:n,side:o="bottom",sideOffset:s=0,align:a="center",alignOffset:i=0,arrowPadding:c=0,avoidCollisions:d=!0,collisionBoundary:l=[],collisionPadding:p=0,sticky:m="partial",hideWhenDetached:x=!1,updatePositionStrategy:b="optimized",onPlaced:h,...f}=e,y=xl(ys,n),[w,g]=u.useState(null),N=Ce(t,Re=>g(Re)),[$,S]=u.useState(null),T=$b($),E=(T==null?void 0:T.width)??0,v=(T==null?void 0:T.height)??0,k=o+(a!=="center"?"-"+a:""),O=typeof p=="number"?p:{top:0,right:0,bottom:0,left:0,...p},L=Array.isArray(l)?l:[l],j=L.length>0,I={padding:O,boundary:L.filter(Cb),altBoundary:j},{refs:R,floatingStyles:W,placement:P,isPositioned:B,middlewareData:A}=ub({strategy:"fixed",placement:k,whileElementsMounted:(...Re)=>tb(...Re,{animationFrame:b==="always"}),elements:{reference:y.anchor},middleware:[fb({mainAxis:s+v,alignmentAxis:i}),d&&hb({mainAxis:!0,crossAxis:!1,limiter:m==="partial"?mb():void 0,...I}),d&&gb({...I}),yb({...I,apply:({elements:Re,rects:Ue,availableWidth:Kt,availableHeight:pe})=>{const{width:ge,height:Te}=Ue.reference,we=Re.floating.style;we.setProperty("--radix-popper-available-width",`${Kt}px`),we.setProperty("--radix-popper-available-height",`${pe}px`),we.setProperty("--radix-popper-anchor-width",`${ge}px`),we.setProperty("--radix-popper-anchor-height",`${Te}px`)}}),$&&bb({element:$,padding:c}),Tb({arrowWidth:E,arrowHeight:v}),x&&xb({strategy:"referenceHidden",...I})]}),[q,ye]=jl(P),xe=Je(h);_e(()=>{B&&(xe==null||xe())},[B,xe]);const me=(D=A.arrow)==null?void 0:D.x,J=(ee=A.arrow)==null?void 0:ee.y,re=((ve=A.arrow)==null?void 0:ve.centerOffset)!==0,[V,Q]=u.useState();return _e(()=>{w&&Q(window.getComputedStyle(w).zIndex)},[w]),r.jsx("div",{ref:R.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:B?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:V,"--radix-popper-transform-origin":[(ae=A.transformOrigin)==null?void 0:ae.x,(le=A.transformOrigin)==null?void 0:le.y].join(" "),...((ie=A.hide)==null?void 0:ie.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:r.jsx(Sb,{scope:n,placedSide:q,onArrowChange:S,arrowX:me,arrowY:J,shouldHideArrow:re,children:r.jsx(ue.div,{"data-side":q,"data-align":ye,...f,ref:N,style:{...f.style,animation:B?void 0:"none"}})})})});$l.displayName=ys;var Nl="PopperArrow",Eb={top:"bottom",right:"left",bottom:"top",left:"right"},Sl=u.forwardRef(function(t,n){const{__scopePopper:o,...s}=t,a=jb(Nl,o),i=Eb[a.placedSide];return r.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:r.jsx(wb,{...s,ref:n,style:{...s.style,display:"block"}})})});Sl.displayName=Nl;function Cb(e){return e!==null}var Tb=e=>({name:"transformOrigin",options:e,fn(t){var y,w,g;const{placement:n,rects:o,middlewareData:s}=t,i=((y=s.arrow)==null?void 0:y.centerOffset)!==0,c=i?0:e.arrowWidth,d=i?0:e.arrowHeight,[l,p]=jl(n),m={start:"0%",center:"50%",end:"100%"}[p],x=(((w=s.arrow)==null?void 0:w.x)??0)+c/2,b=(((g=s.arrow)==null?void 0:g.y)??0)+d/2;let h="",f="";return l==="bottom"?(h=i?m:`${x}px`,f=`${-d}px`):l==="top"?(h=i?m:`${x}px`,f=`${o.floating.height+d}px`):l==="right"?(h=`${-d}px`,f=i?m:`${b}px`):l==="left"&&(h=`${o.floating.width+d}px`,f=i?m:`${b}px`),{data:{x:h,y:f}}}});function jl(e){const[t,n="center"]=e.split("-");return[t,n]}var kb=bl,Ab=wl,Rb=$l,Ib=Sl;function Db(e){const t=Pb(e),n=u.forwardRef((o,s)=>{const{children:a,...i}=o,c=u.Children.toArray(a),d=c.find(Lb);if(d){const l=d.props.children,p=c.map(m=>m===d?u.Children.count(l)>1?u.Children.only(null):u.isValidElement(l)?l.props.children:null:m);return r.jsx(t,{...i,ref:s,children:u.isValidElement(l)?u.cloneElement(l,void 0,p):null})}return r.jsx(t,{...i,ref:s,children:a})});return n.displayName=`${e}.Slot`,n}function Pb(e){const t=u.forwardRef((n,o)=>{const{children:s,...a}=n;if(u.isValidElement(s)){const i=_b(s),c=zb(a,s.props);return s.type!==u.Fragment&&(c.ref=o?mn(o,i):i),u.cloneElement(s,c)}return u.Children.count(s)>1?u.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Ob=Symbol("radix.slottable");function Lb(e){return u.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ob}function zb(e,t){const n={...t};for(const o in t){const s=e[o],a=t[o];/^on[A-Z]/.test(o)?s&&a?n[o]=(...c)=>{const d=a(...c);return s(...c),d}:s&&(n[o]=s):o==="style"?n[o]={...s,...a}:o==="className"&&(n[o]=[s,a].filter(Boolean).join(" "))}return{...e,...n}}function _b(e){var o,s;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Mb(e){const t=u.useRef({value:e,previous:e});return u.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var El=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Fb="VisuallyHidden",xs=u.forwardRef((e,t)=>r.jsx(ue.span,{...e,ref:t,style:{...El,...e.style}}));xs.displayName=Fb;var Wb=[" ","Enter","ArrowUp","ArrowDown"],Vb=[" ","Enter"],Mt="Select",[Fr,Wr,Bb]=rl(Mt),[bn]=Wn(Mt,[Bb,yl]),Vr=yl(),[Ub,Tt]=bn(Mt),[Hb,qb]=bn(Mt),Cl=e=>{const{__scopeSelect:t,children:n,open:o,defaultOpen:s,onOpenChange:a,value:i,defaultValue:c,onValueChange:d,dir:l,name:p,autoComplete:m,disabled:x,required:b,form:h}=e,f=Vr(t),[y,w]=u.useState(null),[g,N]=u.useState(null),[$,S]=u.useState(!1),T=lx(l),[E,v]=xr({prop:o,defaultProp:s??!1,onChange:a,caller:Mt}),[k,O]=xr({prop:i,defaultProp:c,onChange:d,caller:Mt}),L=u.useRef(null),j=y?h||!!y.closest("form"):!0,[I,R]=u.useState(new Set),W=Array.from(I).map(P=>P.props.value).join(";");return r.jsx(kb,{...f,children:r.jsxs(Ub,{required:b,scope:t,trigger:y,onTriggerChange:w,valueNode:g,onValueNodeChange:N,valueNodeHasChildren:$,onValueNodeHasChildrenChange:S,contentId:nn(),value:k,onValueChange:O,open:E,onOpenChange:v,dir:T,triggerPointerDownPosRef:L,disabled:x,children:[r.jsx(Fr.Provider,{scope:t,children:r.jsx(Hb,{scope:e.__scopeSelect,onNativeOptionAdd:u.useCallback(P=>{R(B=>new Set(B).add(P))},[]),onNativeOptionRemove:u.useCallback(P=>{R(B=>{const A=new Set(B);return A.delete(P),A})},[]),children:n})}),j?r.jsxs(Jl,{"aria-hidden":!0,required:b,tabIndex:-1,name:p,autoComplete:m,value:k,onChange:P=>O(P.target.value),disabled:x,form:h,children:[k===void 0?r.jsx("option",{value:""}):null,Array.from(I)]},W):null]})})};Cl.displayName=Mt;var Tl="SelectTrigger",kl=u.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:o=!1,...s}=e,a=Vr(n),i=Tt(Tl,n),c=i.disabled||o,d=Ce(t,i.onTriggerChange),l=Wr(n),p=u.useRef("touch"),[m,x,b]=Ql(f=>{const y=l().filter(N=>!N.disabled),w=y.find(N=>N.value===i.value),g=ed(y,f,w);g!==void 0&&i.onValueChange(g.value)}),h=f=>{c||(i.onOpenChange(!0),b()),f&&(i.triggerPointerDownPosRef.current={x:Math.round(f.pageX),y:Math.round(f.pageY)})};return r.jsx(Ab,{asChild:!0,...a,children:r.jsx(ue.button,{type:"button",role:"combobox","aria-controls":i.contentId,"aria-expanded":i.open,"aria-required":i.required,"aria-autocomplete":"none",dir:i.dir,"data-state":i.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":Zl(i.value)?"":void 0,...s,ref:d,onClick:ce(s.onClick,f=>{f.currentTarget.focus(),p.current!=="mouse"&&h(f)}),onPointerDown:ce(s.onPointerDown,f=>{p.current=f.pointerType;const y=f.target;y.hasPointerCapture(f.pointerId)&&y.releasePointerCapture(f.pointerId),f.button===0&&f.ctrlKey===!1&&f.pointerType==="mouse"&&(h(f),f.preventDefault())}),onKeyDown:ce(s.onKeyDown,f=>{const y=m.current!=="";!(f.ctrlKey||f.altKey||f.metaKey)&&f.key.length===1&&x(f.key),!(y&&f.key===" ")&&Wb.includes(f.key)&&(h(),f.preventDefault())})})})});kl.displayName=Tl;var Al="SelectValue",Rl=u.forwardRef((e,t)=>{const{__scopeSelect:n,className:o,style:s,children:a,placeholder:i="",...c}=e,d=Tt(Al,n),{onValueNodeHasChildrenChange:l}=d,p=a!==void 0,m=Ce(t,d.onValueNodeChange);return _e(()=>{l(p)},[l,p]),r.jsx(ue.span,{...c,ref:m,style:{pointerEvents:"none"},children:Zl(d.value)?r.jsx(r.Fragment,{children:i}):a})});Rl.displayName=Al;var Kb="SelectIcon",Il=u.forwardRef((e,t)=>{const{__scopeSelect:n,children:o,...s}=e;return r.jsx(ue.span,{"aria-hidden":!0,...s,ref:t,children:o||"▼"})});Il.displayName=Kb;var Yb="SelectPortal",Dl=e=>r.jsx(Dr,{asChild:!0,...e});Dl.displayName=Yb;var Ft="SelectContent",Pl=u.forwardRef((e,t)=>{const n=Tt(Ft,e.__scopeSelect),[o,s]=u.useState();if(_e(()=>{s(new DocumentFragment)},[]),!n.open){const a=o;return a?Dn.createPortal(r.jsx(Ol,{scope:e.__scopeSelect,children:r.jsx(Fr.Slot,{scope:e.__scopeSelect,children:r.jsx("div",{children:e.children})})}),a):null}return r.jsx(Ll,{...e,ref:t})});Pl.displayName=Ft;var Ge=10,[Ol,kt]=bn(Ft),Gb="SelectContentImpl",Xb=Db("SelectContent.RemoveScroll"),Ll=u.forwardRef((e,t)=>{const{__scopeSelect:n,position:o="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:a,onPointerDownOutside:i,side:c,sideOffset:d,align:l,alignOffset:p,arrowPadding:m,collisionBoundary:x,collisionPadding:b,sticky:h,hideWhenDetached:f,avoidCollisions:y,...w}=e,g=Tt(Ft,n),[N,$]=u.useState(null),[S,T]=u.useState(null),E=Ce(t,D=>$(D)),[v,k]=u.useState(null),[O,L]=u.useState(null),j=Wr(n),[I,R]=u.useState(!1),W=u.useRef(!1);u.useEffect(()=>{if(N)return Pc(N)},[N]),Ec();const P=u.useCallback(D=>{const[ee,...ve]=j().map(ie=>ie.ref.current),[ae]=ve.slice(-1),le=document.activeElement;for(const ie of D)if(ie===le||(ie==null||ie.scrollIntoView({block:"nearest"}),ie===ee&&S&&(S.scrollTop=0),ie===ae&&S&&(S.scrollTop=S.scrollHeight),ie==null||ie.focus(),document.activeElement!==le))return},[j,S]),B=u.useCallback(()=>P([v,N]),[P,v,N]);u.useEffect(()=>{I&&B()},[I,B]);const{onOpenChange:A,triggerPointerDownPosRef:q}=g;u.useEffect(()=>{if(N){let D={x:0,y:0};const ee=ae=>{var le,ie;D={x:Math.abs(Math.round(ae.pageX)-(((le=q.current)==null?void 0:le.x)??0)),y:Math.abs(Math.round(ae.pageY)-(((ie=q.current)==null?void 0:ie.y)??0))}},ve=ae=>{D.x<=10&&D.y<=10?ae.preventDefault():N.contains(ae.target)||A(!1),document.removeEventListener("pointermove",ee),q.current=null};return q.current!==null&&(document.addEventListener("pointermove",ee),document.addEventListener("pointerup",ve,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ee),document.removeEventListener("pointerup",ve,{capture:!0})}}},[N,A,q]),u.useEffect(()=>{const D=()=>A(!1);return window.addEventListener("blur",D),window.addEventListener("resize",D),()=>{window.removeEventListener("blur",D),window.removeEventListener("resize",D)}},[A]);const[ye,xe]=Ql(D=>{const ee=j().filter(le=>!le.disabled),ve=ee.find(le=>le.ref.current===document.activeElement),ae=ed(ee,D,ve);ae&&setTimeout(()=>ae.ref.current.focus())}),me=u.useCallback((D,ee,ve)=>{const ae=!W.current&&!ve;(g.value!==void 0&&g.value===ee||ae)&&(k(D),ae&&(W.current=!0))},[g.value]),J=u.useCallback(()=>N==null?void 0:N.focus(),[N]),re=u.useCallback((D,ee,ve)=>{const ae=!W.current&&!ve;(g.value!==void 0&&g.value===ee||ae)&&L(D)},[g.value]),V=o==="popper"?Mo:zl,Q=V===Mo?{side:c,sideOffset:d,align:l,alignOffset:p,arrowPadding:m,collisionBoundary:x,collisionPadding:b,sticky:h,hideWhenDetached:f,avoidCollisions:y}:{};return r.jsx(Ol,{scope:n,content:N,viewport:S,onViewportChange:T,itemRefCallback:me,selectedItem:v,onItemLeave:J,itemTextRefCallback:re,focusSelectedItem:B,selectedItemText:O,position:o,isPositioned:I,searchRef:ye,children:r.jsx(as,{as:Xb,allowPinchZoom:!0,children:r.jsx(ss,{asChild:!0,trapped:g.open,onMountAutoFocus:D=>{D.preventDefault()},onUnmountAutoFocus:ce(s,D=>{var ee;(ee=g.trigger)==null||ee.focus({preventScroll:!0}),D.preventDefault()}),children:r.jsx(Ir,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:D=>D.preventDefault(),onDismiss:()=>g.onOpenChange(!1),children:r.jsx(V,{role:"listbox",id:g.contentId,"data-state":g.open?"open":"closed",dir:g.dir,onContextMenu:D=>D.preventDefault(),...w,...Q,onPlaced:()=>R(!0),ref:E,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:ce(w.onKeyDown,D=>{const ee=D.ctrlKey||D.altKey||D.metaKey;if(D.key==="Tab"&&D.preventDefault(),!ee&&D.key.length===1&&xe(D.key),["ArrowUp","ArrowDown","Home","End"].includes(D.key)){let ae=j().filter(le=>!le.disabled).map(le=>le.ref.current);if(["ArrowUp","End"].includes(D.key)&&(ae=ae.slice().reverse()),["ArrowUp","ArrowDown"].includes(D.key)){const le=D.target,ie=ae.indexOf(le);ae=ae.slice(ie+1)}setTimeout(()=>P(ae)),D.preventDefault()}})})})})})})});Ll.displayName=Gb;var Jb="SelectItemAlignedPosition",zl=u.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:o,...s}=e,a=Tt(Ft,n),i=kt(Ft,n),[c,d]=u.useState(null),[l,p]=u.useState(null),m=Ce(t,E=>p(E)),x=Wr(n),b=u.useRef(!1),h=u.useRef(!0),{viewport:f,selectedItem:y,selectedItemText:w,focusSelectedItem:g}=i,N=u.useCallback(()=>{if(a.trigger&&a.valueNode&&c&&l&&f&&y&&w){const E=a.trigger.getBoundingClientRect(),v=l.getBoundingClientRect(),k=a.valueNode.getBoundingClientRect(),O=w.getBoundingClientRect();if(a.dir!=="rtl"){const le=O.left-v.left,ie=k.left-le,Re=E.left-ie,Ue=E.width+Re,Kt=Math.max(Ue,v.width),pe=window.innerWidth-Ge,ge=Ia(ie,[Ge,Math.max(Ge,pe-Kt)]);c.style.minWidth=Ue+"px",c.style.left=ge+"px"}else{const le=v.right-O.right,ie=window.innerWidth-k.right-le,Re=window.innerWidth-E.right-ie,Ue=E.width+Re,Kt=Math.max(Ue,v.width),pe=window.innerWidth-Ge,ge=Ia(ie,[Ge,Math.max(Ge,pe-Kt)]);c.style.minWidth=Ue+"px",c.style.right=ge+"px"}const L=x(),j=window.innerHeight-Ge*2,I=f.scrollHeight,R=window.getComputedStyle(l),W=parseInt(R.borderTopWidth,10),P=parseInt(R.paddingTop,10),B=parseInt(R.borderBottomWidth,10),A=parseInt(R.paddingBottom,10),q=W+P+I+A+B,ye=Math.min(y.offsetHeight*5,q),xe=window.getComputedStyle(f),me=parseInt(xe.paddingTop,10),J=parseInt(xe.paddingBottom,10),re=E.top+E.height/2-Ge,V=j-re,Q=y.offsetHeight/2,D=y.offsetTop+Q,ee=W+P+D,ve=q-ee;if(ee<=re){const le=L.length>0&&y===L[L.length-1].ref.current;c.style.bottom="0px";const ie=l.clientHeight-f.offsetTop-f.offsetHeight,Re=Math.max(V,Q+(le?J:0)+ie+B),Ue=ee+Re;c.style.height=Ue+"px"}else{const le=L.length>0&&y===L[0].ref.current;c.style.top="0px";const Re=Math.max(re,W+f.offsetTop+(le?me:0)+Q)+ve;c.style.height=Re+"px",f.scrollTop=ee-re+f.offsetTop}c.style.margin=`${Ge}px 0`,c.style.minHeight=ye+"px",c.style.maxHeight=j+"px",o==null||o(),requestAnimationFrame(()=>b.current=!0)}},[x,a.trigger,a.valueNode,c,l,f,y,w,a.dir,o]);_e(()=>N(),[N]);const[$,S]=u.useState();_e(()=>{l&&S(window.getComputedStyle(l).zIndex)},[l]);const T=u.useCallback(E=>{E&&h.current===!0&&(N(),g==null||g(),h.current=!1)},[N,g]);return r.jsx(Qb,{scope:n,contentWrapper:c,shouldExpandOnScrollRef:b,onScrollButtonChange:T,children:r.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:$},children:r.jsx(ue.div,{...s,ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});zl.displayName=Jb;var Zb="SelectPopperPosition",Mo=u.forwardRef((e,t)=>{const{__scopeSelect:n,align:o="start",collisionPadding:s=Ge,...a}=e,i=Vr(n);return r.jsx(Rb,{...i,...a,ref:t,align:o,collisionPadding:s,style:{boxSizing:"border-box",...a.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Mo.displayName=Zb;var[Qb,bs]=bn(Ft,{}),Fo="SelectViewport",_l=u.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:o,...s}=e,a=kt(Fo,n),i=bs(Fo,n),c=Ce(t,a.onViewportChange),d=u.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),r.jsx(Fr.Slot,{scope:n,children:r.jsx(ue.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:c,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:ce(s.onScroll,l=>{const p=l.currentTarget,{contentWrapper:m,shouldExpandOnScrollRef:x}=i;if(x!=null&&x.current&&m){const b=Math.abs(d.current-p.scrollTop);if(b>0){const h=window.innerHeight-Ge*2,f=parseFloat(m.style.minHeight),y=parseFloat(m.style.height),w=Math.max(f,y);if(w<h){const g=w+b,N=Math.min(h,g),$=g-N;m.style.height=N+"px",m.style.bottom==="0px"&&(p.scrollTop=$>0?$:0,m.style.justifyContent="flex-end")}}}d.current=p.scrollTop})})})]})});_l.displayName=Fo;var Ml="SelectGroup",[e0,t0]=bn(Ml),n0=u.forwardRef((e,t)=>{const{__scopeSelect:n,...o}=e,s=nn();return r.jsx(e0,{scope:n,id:s,children:r.jsx(ue.div,{role:"group","aria-labelledby":s,...o,ref:t})})});n0.displayName=Ml;var Fl="SelectLabel",Wl=u.forwardRef((e,t)=>{const{__scopeSelect:n,...o}=e,s=t0(Fl,n);return r.jsx(ue.div,{id:s.id,...o,ref:t})});Wl.displayName=Fl;var Sr="SelectItem",[r0,Vl]=bn(Sr),Bl=u.forwardRef((e,t)=>{const{__scopeSelect:n,value:o,disabled:s=!1,textValue:a,...i}=e,c=Tt(Sr,n),d=kt(Sr,n),l=c.value===o,[p,m]=u.useState(a??""),[x,b]=u.useState(!1),h=Ce(t,g=>{var N;return(N=d.itemRefCallback)==null?void 0:N.call(d,g,o,s)}),f=nn(),y=u.useRef("touch"),w=()=>{s||(c.onValueChange(o),c.onOpenChange(!1))};if(o==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return r.jsx(r0,{scope:n,value:o,disabled:s,textId:f,isSelected:l,onItemTextChange:u.useCallback(g=>{m(N=>N||((g==null?void 0:g.textContent)??"").trim())},[]),children:r.jsx(Fr.ItemSlot,{scope:n,value:o,disabled:s,textValue:p,children:r.jsx(ue.div,{role:"option","aria-labelledby":f,"data-highlighted":x?"":void 0,"aria-selected":l&&x,"data-state":l?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...i,ref:h,onFocus:ce(i.onFocus,()=>b(!0)),onBlur:ce(i.onBlur,()=>b(!1)),onClick:ce(i.onClick,()=>{y.current!=="mouse"&&w()}),onPointerUp:ce(i.onPointerUp,()=>{y.current==="mouse"&&w()}),onPointerDown:ce(i.onPointerDown,g=>{y.current=g.pointerType}),onPointerMove:ce(i.onPointerMove,g=>{var N;y.current=g.pointerType,s?(N=d.onItemLeave)==null||N.call(d):y.current==="mouse"&&g.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ce(i.onPointerLeave,g=>{var N;g.currentTarget===document.activeElement&&((N=d.onItemLeave)==null||N.call(d))}),onKeyDown:ce(i.onKeyDown,g=>{var $;(($=d.searchRef)==null?void 0:$.current)!==""&&g.key===" "||(Vb.includes(g.key)&&w(),g.key===" "&&g.preventDefault())})})})})});Bl.displayName=Sr;var Cn="SelectItemText",Ul=u.forwardRef((e,t)=>{const{__scopeSelect:n,className:o,style:s,...a}=e,i=Tt(Cn,n),c=kt(Cn,n),d=Vl(Cn,n),l=qb(Cn,n),[p,m]=u.useState(null),x=Ce(t,w=>m(w),d.onItemTextChange,w=>{var g;return(g=c.itemTextRefCallback)==null?void 0:g.call(c,w,d.value,d.disabled)}),b=p==null?void 0:p.textContent,h=u.useMemo(()=>r.jsx("option",{value:d.value,disabled:d.disabled,children:b},d.value),[d.disabled,d.value,b]),{onNativeOptionAdd:f,onNativeOptionRemove:y}=l;return _e(()=>(f(h),()=>y(h)),[f,y,h]),r.jsxs(r.Fragment,{children:[r.jsx(ue.span,{id:d.textId,...a,ref:x}),d.isSelected&&i.valueNode&&!i.valueNodeHasChildren?Dn.createPortal(a.children,i.valueNode):null]})});Ul.displayName=Cn;var Hl="SelectItemIndicator",ql=u.forwardRef((e,t)=>{const{__scopeSelect:n,...o}=e;return Vl(Hl,n).isSelected?r.jsx(ue.span,{"aria-hidden":!0,...o,ref:t}):null});ql.displayName=Hl;var Wo="SelectScrollUpButton",Kl=u.forwardRef((e,t)=>{const n=kt(Wo,e.__scopeSelect),o=bs(Wo,e.__scopeSelect),[s,a]=u.useState(!1),i=Ce(t,o.onScrollButtonChange);return _e(()=>{if(n.viewport&&n.isPositioned){let c=function(){const l=d.scrollTop>0;a(l)};const d=n.viewport;return c(),d.addEventListener("scroll",c),()=>d.removeEventListener("scroll",c)}},[n.viewport,n.isPositioned]),s?r.jsx(Gl,{...e,ref:i,onAutoScroll:()=>{const{viewport:c,selectedItem:d}=n;c&&d&&(c.scrollTop=c.scrollTop-d.offsetHeight)}}):null});Kl.displayName=Wo;var Vo="SelectScrollDownButton",Yl=u.forwardRef((e,t)=>{const n=kt(Vo,e.__scopeSelect),o=bs(Vo,e.__scopeSelect),[s,a]=u.useState(!1),i=Ce(t,o.onScrollButtonChange);return _e(()=>{if(n.viewport&&n.isPositioned){let c=function(){const l=d.scrollHeight-d.clientHeight,p=Math.ceil(d.scrollTop)<l;a(p)};const d=n.viewport;return c(),d.addEventListener("scroll",c),()=>d.removeEventListener("scroll",c)}},[n.viewport,n.isPositioned]),s?r.jsx(Gl,{...e,ref:i,onAutoScroll:()=>{const{viewport:c,selectedItem:d}=n;c&&d&&(c.scrollTop=c.scrollTop+d.offsetHeight)}}):null});Yl.displayName=Vo;var Gl=u.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:o,...s}=e,a=kt("SelectScrollButton",n),i=u.useRef(null),c=Wr(n),d=u.useCallback(()=>{i.current!==null&&(window.clearInterval(i.current),i.current=null)},[]);return u.useEffect(()=>()=>d(),[d]),_e(()=>{var p;const l=c().find(m=>m.ref.current===document.activeElement);(p=l==null?void 0:l.ref.current)==null||p.scrollIntoView({block:"nearest"})},[c]),r.jsx(ue.div,{"aria-hidden":!0,...s,ref:t,style:{flexShrink:0,...s.style},onPointerDown:ce(s.onPointerDown,()=>{i.current===null&&(i.current=window.setInterval(o,50))}),onPointerMove:ce(s.onPointerMove,()=>{var l;(l=a.onItemLeave)==null||l.call(a),i.current===null&&(i.current=window.setInterval(o,50))}),onPointerLeave:ce(s.onPointerLeave,()=>{d()})})}),o0="SelectSeparator",Xl=u.forwardRef((e,t)=>{const{__scopeSelect:n,...o}=e;return r.jsx(ue.div,{"aria-hidden":!0,...o,ref:t})});Xl.displayName=o0;var Bo="SelectArrow",s0=u.forwardRef((e,t)=>{const{__scopeSelect:n,...o}=e,s=Vr(n),a=Tt(Bo,n),i=kt(Bo,n);return a.open&&i.position==="popper"?r.jsx(Ib,{...s,...o,ref:t}):null});s0.displayName=Bo;var a0="SelectBubbleInput",Jl=u.forwardRef(({__scopeSelect:e,value:t,...n},o)=>{const s=u.useRef(null),a=Ce(o,s),i=Mb(t);return u.useEffect(()=>{const c=s.current;if(!c)return;const d=window.HTMLSelectElement.prototype,p=Object.getOwnPropertyDescriptor(d,"value").set;if(i!==t&&p){const m=new Event("change",{bubbles:!0});p.call(c,t),c.dispatchEvent(m)}},[i,t]),r.jsx(ue.select,{...n,style:{...El,...n.style},ref:a,defaultValue:t})});Jl.displayName=a0;function Zl(e){return e===""||e===void 0}function Ql(e){const t=Je(e),n=u.useRef(""),o=u.useRef(0),s=u.useCallback(i=>{const c=n.current+i;t(c),function d(l){n.current=l,window.clearTimeout(o.current),l!==""&&(o.current=window.setTimeout(()=>d(""),1e3))}(c)},[t]),a=u.useCallback(()=>{n.current="",window.clearTimeout(o.current)},[]);return u.useEffect(()=>()=>window.clearTimeout(o.current),[]),[n,s,a]}function ed(e,t,n){const s=t.length>1&&Array.from(t).every(l=>l===t[0])?t[0]:t,a=n?e.indexOf(n):-1;let i=i0(e,Math.max(a,0));s.length===1&&(i=i.filter(l=>l!==n));const d=i.find(l=>l.textValue.toLowerCase().startsWith(s.toLowerCase()));return d!==n?d:void 0}function i0(e,t){return e.map((n,o)=>e[(t+o)%e.length])}var c0=Cl,td=kl,l0=Rl,d0=Il,u0=Dl,nd=Pl,p0=_l,rd=Wl,od=Bl,f0=Ul,h0=ql,sd=Kl,ad=Yl,id=Xl;const ke=c0,Ae=l0,Se=u.forwardRef(({className:e,children:t,...n},o)=>r.jsxs(td,{ref:o,className:se("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[t,r.jsx(d0,{asChild:!0,children:r.jsx(ns,{className:"h-4 w-4 opacity-50"})})]}));Se.displayName=td.displayName;const cd=u.forwardRef(({className:e,...t},n)=>r.jsx(sd,{ref:n,className:se("flex cursor-default items-center justify-center py-1",e),...t,children:r.jsx(Qi,{className:"h-4 w-4"})}));cd.displayName=sd.displayName;const ld=u.forwardRef(({className:e,...t},n)=>r.jsx(ad,{ref:n,className:se("flex cursor-default items-center justify-center py-1",e),...t,children:r.jsx(ns,{className:"h-4 w-4"})}));ld.displayName=ad.displayName;const je=u.forwardRef(({className:e,children:t,position:n="popper",...o},s)=>r.jsx(u0,{children:r.jsxs(nd,{ref:s,className:se("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...o,children:[r.jsx(cd,{}),r.jsx(p0,{className:se("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),r.jsx(ld,{})]})}));je.displayName=nd.displayName;const m0=u.forwardRef(({className:e,...t},n)=>r.jsx(rd,{ref:n,className:se("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));m0.displayName=rd.displayName;const U=u.forwardRef(({className:e,children:t,...n},o)=>r.jsxs(od,{ref:o,className:se("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(h0,{children:r.jsx(Zi,{className:"h-4 w-4"})})}),r.jsx(f0,{children:t})]}));U.displayName=od.displayName;const g0=u.forwardRef(({className:e,...t},n)=>r.jsx(id,{ref:n,className:se("-mx-1 my-1 h-px bg-muted",e),...t}));g0.displayName=id.displayName;const y0=Fn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Oe({className:e,variant:t,...n}){return r.jsx("div",{className:se(y0({variant:t}),e),...n})}const nr=e=>{if(!e)return"";const n=e.replace(/[+-]\d{2}:\d{2}$/,"").replace(/Z$/,"").match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}):\d{2}$/);if(n){const[,l,p]=n;return`${l}T${p}`}const o=new Date(e),s=o.getUTCFullYear(),a=String(o.getUTCMonth()+1).padStart(2,"0"),i=String(o.getUTCDate()).padStart(2,"0"),c=String(o.getUTCHours()).padStart(2,"0"),d=String(o.getUTCMinutes()).padStart(2,"0");return`${s}-${a}-${i}T${c}:${d}`},rr=e=>{if(!e){const t=new Date,n=7*60;return new Date(t.getTime()+(n-t.getTimezoneOffset())*6e4).toISOString().slice(0,19)}return`${e}:00`},x0=({open:e,onOpenChange:t,draftData:n,accounts:o,categories:s,onConfirm:a,onCancel:i})=>{var L;const[c,d]=u.useState(null),[l,p]=u.useState(!1),m=u.useRef(null);u.useEffect(()=>{n&&n.draft&&d({...n.draft})},[n]),u.useEffect(()=>{e&&m.current&&setTimeout(()=>{var j;(j=m.current)==null||j.focus()},100)},[e]);const x=async()=>{if(c){p(!0);try{await a(c),t(!1)}catch(j){console.error("Error confirming draft:",j)}finally{p(!1)}}},b=()=>{i&&i(),t(!1)};if(u.useEffect(()=>{const j=I=>{I.key==="Escape"&&e&&!l&&(i?i():t(!1))};if(e)return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[e,l,i,t]),!c||!n)return null;const h=n.draftType==="TRANSACTION",f=n.draftType==="RECEIVABLE",y=n.draftType==="LIABILITY",w=n.draftType==="SETTLEMENT",g=h?c:null,N=f?c:null,$=y?c:null,S=w?c:null,T=(j,I="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:I}).format(j),E=n.needConfirmFields||[],v=n.autoFilledFields||[],k=()=>{switch(n.draftType){case"TRANSACTION":return"Xác nhận giao dịch";case"RECEIVABLE":return"Xác nhận khoản cho vay";case"LIABILITY":return"Xác nhận khoản nợ";case"SETTLEMENT":return(S==null?void 0:S.type)==="RECEIVABLE"?"Xác nhận nhận tiền trả nợ":"Xác nhận trả nợ";default:return"Xác nhận"}},O=()=>h&&g?g.type==="TRANSFER"?!!g.amount&&!!g.fromAccountId&&!!g.toAccountId&&g.fromAccountId!==g.toAccountId:!!g.amount&&!!g.categoryId&&!!g.accountId:f&&N?N.amount&&N.counterpartyName:y&&$?$.amount&&$.counterpartyName:w&&S?S.amount&&S.accountId&&(S.receivableId||S.liabilityId):!1;return r.jsx(gn,{open:e,onOpenChange:t,children:r.jsxs(Vt,{className:"confirm-draft-dialog",style:{maxWidth:"500px"},children:[r.jsxs(Bt,{children:[r.jsx(Ht,{children:k()}),r.jsx(qt,{children:n.autoFilledFields&&n.autoFilledFields.length>0&&r.jsxs(b0,{children:[r.jsx(H,{icon:"CheckCircle",size:16,color:"currentColor"}),r.jsxs("span",{children:["Đã tự động điền ",n.autoFilledFields.length," trường"]})]})})]}),r.jsxs(v0,{children:[h&&g&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Số tiền"}),r.jsx(Z,{ref:m,type:"number",value:((L=g.amount)==null?void 0:L.toString())||"",onChange:j=>{const I=j.target.value?parseFloat(j.target.value):void 0;h&&g&&d({...g,amount:I})},placeholder:"Nhập số tiền"}),g.amount?r.jsxs("div",{className:"draft-value",children:[T(g.amount,g.currency),v.find(j=>j.field==="amount")&&r.jsx(Oe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):r.jsx(Z,{ref:m,type:"number",value:g.amount||"",onChange:j=>{h&&g&&d({...g,amount:parseFloat(j.target.value)||0})},placeholder:"Nhập số tiền",tabIndex:1})]}),r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Loại giao dịch"}),r.jsxs(ke,{value:g.type||"EXPENSE",onValueChange:j=>{if(h&&g){const I=j;d({...g,type:I,categoryId:I==="TRANSFER"?void 0:g.categoryId,categoryName:I==="TRANSFER"?void 0:g.categoryName,accountId:I==="TRANSFER"?void 0:g.accountId,accountName:I==="TRANSFER"?void 0:g.accountName})}},children:[r.jsx(Se,{children:r.jsx(Ae,{})}),r.jsxs(je,{children:[r.jsx(U,{value:"EXPENSE",children:"Chi tiêu"}),r.jsx(U,{value:"INCOME",children:"Thu nhập"}),r.jsx(U,{value:"TRANSFER",children:"Chuyển khoản"})]})]})]}),g.type==="TRANSFER"?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Tài khoản nguồn ",r.jsx("span",{className:"required",children:"*"})]}),r.jsxs(ke,{value:g.fromAccountId||"",onValueChange:j=>{const I=o.find(R=>R.id===j);h&&g&&d({...g,fromAccountId:j,fromAccountName:I==null?void 0:I.name,toAccountId:g.toAccountId===j?void 0:g.toAccountId,toAccountName:g.toAccountId===j?void 0:g.toAccountName})},children:[r.jsx(Se,{children:r.jsx(Ae,{placeholder:"Chọn tài khoản nguồn"})}),r.jsx(je,{children:o.map(j=>r.jsx(U,{value:j.id,children:j.name},j.id))})]})]}),r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Tài khoản đích ",r.jsx("span",{className:"required",children:"*"})]}),r.jsxs(ke,{value:g.toAccountId||"",onValueChange:j=>{const I=o.find(R=>R.id===j);h&&g&&d({...g,toAccountId:j,toAccountName:I==null?void 0:I.name})},children:[r.jsx(Se,{children:r.jsx(Ae,{placeholder:"Chọn tài khoản đích"})}),r.jsx(je,{children:o.filter(j=>j.id!==g.fromAccountId).map(j=>r.jsx(U,{value:j.id,children:j.name},j.id))})]})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Danh mục ",E.includes("categoryId")&&r.jsx("span",{className:"required",children:"*"})]}),g.categoryId&&g.categoryName?r.jsxs("div",{className:"draft-value",children:[g.categoryName,v.find(j=>j.field==="categoryId")&&r.jsx(Oe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):r.jsxs(ke,{value:g.categoryId||"",onValueChange:j=>{const I=s.find(R=>R.id===j);h&&g&&d({...g,categoryId:j,categoryName:I==null?void 0:I.name})},children:[r.jsx(Se,{children:r.jsx(Ae,{placeholder:"Chọn danh mục"})}),r.jsx(je,{children:s.filter(j=>!j.isSystem||g.type==="EXPENSE"||g.type==="INCOME").map(j=>r.jsx(U,{value:j.id,children:j.name},j.id))})]})]}),r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Tài khoản ",E.includes("accountId")&&r.jsx("span",{className:"required",children:"*"})]}),g.accountId&&g.accountName?r.jsxs("div",{className:"draft-value",children:[g.accountName,v.find(j=>j.field==="accountId")&&r.jsx(Oe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):r.jsxs(ke,{value:g.accountId||"",onValueChange:j=>{const I=o.find(R=>R.id===j);h&&g&&d({...g,accountId:j,accountName:I==null?void 0:I.name})},children:[r.jsx(Se,{children:r.jsx(Ae,{placeholder:"Chọn tài khoản"})}),r.jsx(je,{children:o.map(j=>r.jsx(U,{value:j.id,children:j.name},j.id))})]})]})]}),r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Ghi chú"}),r.jsx(Z,{value:g.note||"",onChange:j=>{h&&g&&d({...g,note:j.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]}),r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Ngày giao dịch"}),r.jsx(Z,{type:"datetime-local",value:nr(g.occurredAt),onChange:j=>{const I=j.target.value?rr(j.target.value):new Date().toISOString().slice(0,19);h&&g&&d({...g,occurredAt:I})}})]})]}),f&&N&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Người vay ",E.includes("counterpartyName")&&r.jsx("span",{className:"required",children:"*"})]}),N.counterpartyName?r.jsxs("div",{className:"draft-value",children:[N.counterpartyName,v.find(j=>j.field==="counterpartyName")&&r.jsx(Oe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):r.jsx(Z,{value:N.counterpartyName||"",onChange:j=>{f&&N&&d({...N,counterpartyName:j.target.value})},placeholder:"Nhập tên người vay"})]}),r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Số tiền ",E.includes("amount")&&r.jsx("span",{className:"required",children:"*"})]}),N.amount?r.jsxs("div",{className:"draft-value",children:[T(N.amount,N.currency),v.find(j=>j.field==="amount")&&r.jsx(Oe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):r.jsx(Z,{type:"number",value:N.amount||"",onChange:j=>{f&&N&&d({...N,amount:parseFloat(j.target.value)||0})},placeholder:"Nhập số tiền"})]}),r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Ngày cho vay"}),r.jsx(Z,{type:"datetime-local",value:nr(N.occurredAt),onChange:j=>{const I=j.target.value?rr(j.target.value):new Date().toISOString().slice(0,19);f&&N&&d({...N,occurredAt:I})}})]}),r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Ghi chú"}),r.jsx(Z,{value:N.note||"",onChange:j=>{f&&N&&d({...N,note:j.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]}),y&&$&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Người cho vay ",E.includes("counterpartyName")&&r.jsx("span",{className:"required",children:"*"})]}),$.counterpartyName?r.jsxs("div",{className:"draft-value",children:[$.counterpartyName,v.find(j=>j.field==="counterpartyName")&&r.jsx(Oe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):r.jsx(Z,{value:$.counterpartyName||"",onChange:j=>{y&&$&&d({...$,counterpartyName:j.target.value})},placeholder:"Nhập tên người cho vay"})]}),r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Số tiền ",E.includes("amount")&&r.jsx("span",{className:"required",children:"*"})]}),$.amount?r.jsxs("div",{className:"draft-value",children:[T($.amount,$.currency),v.find(j=>j.field==="amount")&&r.jsx(Oe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):r.jsx(Z,{type:"number",value:$.amount||"",onChange:j=>{y&&$&&d({...$,amount:parseFloat(j.target.value)||0})},placeholder:"Nhập số tiền"})]}),r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Ngày vay"}),r.jsx(Z,{type:"datetime-local",value:nr($.occurredAt),onChange:j=>{const I=j.target.value?rr(j.target.value):new Date().toISOString().slice(0,19);y&&$&&d({...$,occurredAt:I})}})]}),r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Ghi chú"}),r.jsx(Z,{value:$.note||"",onChange:j=>{y&&$&&d({...$,note:j.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]}),w&&S&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Loại ",E.includes("type")&&r.jsx("span",{className:"required",children:"*"})]}),r.jsxs(ke,{value:S.type||"",onValueChange:j=>{w&&S&&d({...S,type:j,receivableId:j==="RECEIVABLE"?S.receivableId:void 0,liabilityId:j==="LIABILITY"?S.liabilityId:void 0})},children:[r.jsx(Se,{children:r.jsx(Ae,{placeholder:"Chọn loại"})}),r.jsxs(je,{children:[r.jsx(U,{value:"RECEIVABLE",children:"Nhận tiền trả nợ"}),r.jsx(U,{value:"LIABILITY",children:"Trả nợ"})]})]})]}),S.counterpartyName&&r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Người liên quan"}),r.jsxs("div",{className:"draft-value",children:[S.counterpartyName,v.find(j=>j.field==="receivableId"||j.field==="liabilityId")&&r.jsx(Oe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]})]}),r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Số tiền ",E.includes("amount")&&r.jsx("span",{className:"required",children:"*"})]}),S.amount?r.jsxs("div",{className:"draft-value",children:[T(S.amount,S.currency),v.find(j=>j.field==="amount")&&r.jsx(Oe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):r.jsx(Z,{type:"number",value:S.amount||"",onChange:j=>{w&&S&&d({...S,amount:parseFloat(j.target.value)||0})},placeholder:"Nhập số tiền"})]}),r.jsxs("div",{className:"draft-field",children:[r.jsxs(M,{children:["Tài khoản ",E.includes("accountId")&&r.jsx("span",{className:"required",children:"*"})]}),S.accountId&&S.accountName?r.jsxs("div",{className:"draft-value",children:[S.accountName,v.find(j=>j.field==="accountId")&&r.jsx(Oe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):r.jsxs(ke,{value:S.accountId||"",onValueChange:j=>{const I=o.find(R=>R.id===j);w&&S&&d({...S,accountId:j,accountName:I==null?void 0:I.name})},children:[r.jsx(Se,{children:r.jsx(Ae,{placeholder:"Chọn tài khoản"})}),r.jsx(je,{children:o.map(j=>r.jsx(U,{value:j.id,children:j.name},j.id))})]})]}),r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Ngày thanh toán"}),r.jsx(Z,{type:"datetime-local",value:nr(S.settledAt),onChange:j=>{const I=j.target.value?rr(j.target.value):new Date().toISOString().slice(0,19);w&&S&&d({...S,settledAt:I})}})]}),r.jsxs("div",{className:"draft-field",children:[r.jsx(M,{children:"Ghi chú"}),r.jsx(Z,{value:S.note||"",onChange:j=>{w&&S&&d({...S,note:j.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]})]}),r.jsxs(Ut,{children:[r.jsx(F,{variant:"outline",onClick:b,disabled:l,tabIndex:-1,children:"Hủy"}),r.jsx(F,{onClick:x,disabled:l||!O(),tabIndex:-1,children:l?r.jsxs(r.Fragment,{children:[r.jsx(H,{icon:"Loader",size:16,color:"currentColor",className:"animate-spin"}),r.jsx("span",{children:"Đang tạo..."})]}):r.jsx("span",{children:"Xác nhận"})})]})]})})},b0=K.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #10b981;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px 12px;
  background: #f0fdf4;
  border-radius: 6px;
  border: 1px solid #bbf7d0;
`,v0=K.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin: 24px 0; */

  .draft-field {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 14px;
      font-weight: 500;
      color: #1f2937;
      margin-bottom: 4px;

      .required {
        color: #ef4444;
        margin-left: 2px;
      }
    }

    .draft-value {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      font-size: 14px;
      color: #1f2937;
      min-height: 40px;

      .auto-filled-badge {
        font-size: 12px;
        padding: 2px 8px;
        background: #ecfdf5;
        color: #059669;
        border-radius: 4px;
        font-weight: 500;
      }
    }

    /* Style date/datetime-local input calendar icon for dark mode */
    input[type="date"],
    input[type="datetime-local"] {
      &::-webkit-calendar-picker-indicator {
        cursor: pointer;
        opacity: 0.7;
        filter: ${({theme:e})=>e.colors.background==="#0a0a0a"||e.colors.background==="#1a1a1a"?"invert(1) brightness(1.2)":"none"};
      }

      &::-webkit-calendar-picker-indicator:hover {
        opacity: 1;
      }
    }
  }
`,w0=1,$0=1e6;let go=0;function N0(){return go=(go+1)%Number.MAX_SAFE_INTEGER,go.toString()}const yo=new Map,Ha=e=>{if(yo.has(e))return;const t=setTimeout(()=>{yo.delete(e),Tn({type:"REMOVE_TOAST",toastId:e})},$0);yo.set(e,t)},S0=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,w0)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?Ha(n):e.toasts.forEach(o=>{Ha(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===n||n===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},pr=[];let fr={toasts:[]};function Tn(e){fr=S0(fr,e),pr.forEach(t=>{t(fr)})}function j0({...e}){const t=N0(),n=s=>Tn({type:"UPDATE_TOAST",toast:{...s,id:t}}),o=()=>Tn({type:"DISMISS_TOAST",toastId:t});return Tn({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:s=>{s||o()}}}),{id:t,dismiss:o,update:n}}function dd(){const[e,t]=u.useState(fr);return u.useEffect(()=>(pr.push(t),()=>{const n=pr.indexOf(t);n>-1&&pr.splice(n,1)}),[e]),{...e,toast:j0,dismiss:n=>Tn({type:"DISMISS_TOAST",toastId:n})}}const E0=({onTransactionCreated:e})=>{const{t}=Pe(),{navigate:n}=nt(),{toast:o}=dd(),{accounts:s,refresh:a}=lt(),{categories:i,refresh:c}=Wt(),[d,l]=u.useState(!1),[p,m]=u.useState(null),[x,b]=u.useState(!1),[h,f]=u.useState(null),y=u.useCallback(async g=>{l(!0),m(null),f(null);try{const N=await ne.nlp.parseTransaction(g);m(N),N.responseType==="CONFIRM_DRAFT"&&b(!0)}catch(N){const $=fe(N);m({responseType:"ERROR",intent:"UNKNOWN",confidence:0,message:$,data:{code:"PARSE_ERROR",message:$,details:void 0}})}finally{l(!1)}},[]),w=u.useCallback(async g=>{try{if(!g||typeof g!="object")throw new Error("Invalid draft data");if(!p||p.responseType!=="CONFIRM_DRAFT")throw new Error("Invalid response type");const N=p.data;if(N.draftType==="TRANSACTION"){const $=g;if(!$.amount)throw new Error("Thiếu thông tin bắt buộc: số tiền");const S=Jt($.occurredAt);if($.type==="TRANSFER"){if(!$.fromAccountId||!$.toAccountId)throw new Error("Thiếu thông tin bắt buộc: tài khoản nguồn và đích");await ne.transactions.create({type:"TRANSFER",amount:$.amount,currency:$.currency||"VND",occurredAt:S,fromAccountId:$.fromAccountId,toAccountId:$.toAccountId,note:$.note})}else{if(!$.accountId||!$.categoryId)throw new Error("Thiếu thông tin bắt buộc: tài khoản và danh mục");await ne.transactions.create({type:$.type,amount:$.amount,currency:$.currency||"VND",occurredAt:S,categoryId:$.categoryId,accountId:$.accountId,note:$.note})}o({title:"Thành công",description:"Đã tạo giao dịch thành công"})}else if(N.draftType==="RECEIVABLE"){const $=g;if(!$.amount||!$.counterpartyName)throw new Error("Thiếu thông tin bắt buộc: số tiền và tên người vay");await ne.receivables.create({counterpartyName:$.counterpartyName,amount:$.amount,currency:$.currency||"VND",occurredAt:Jt($.occurredAt),dueAt:$.dueAt?Jt($.dueAt):void 0,note:$.note}),o({title:"Thành công",description:"Đã tạo khoản cho vay thành công"})}else if(N.draftType==="LIABILITY"){const $=g;if(!$.amount||!$.counterpartyName)throw new Error("Thiếu thông tin bắt buộc: số tiền và tên người cho vay");await ne.liabilities.create({counterpartyName:$.counterpartyName,amount:$.amount,currency:$.currency||"VND",occurredAt:Jt($.occurredAt),dueAt:$.dueAt?Jt($.dueAt):void 0,note:$.note}),o({title:"Thành công",description:"Đã tạo khoản nợ thành công"})}else if(N.draftType==="SETTLEMENT"){const $=g;if(!$.amount||!$.accountId||!$.receivableId&&!$.liabilityId)throw new Error("Thiếu thông tin bắt buộc: số tiền, tài khoản và khoản nợ/khoản cho vay");await ne.settlements.create({type:$.type==="RECEIVABLE"?"RECEIVABLE":"LIABILITY",receivableId:$.receivableId,liabilityId:$.liabilityId,amount:$.amount,currency:$.currency||"VND",occurredAt:Jt($.settledAt),note:$.note}),o({title:"Thành công",description:"Đã thanh toán thành công"})}a(),c(),e==null||e(),b(!1),m(null)}catch(N){const $=fe(N);throw f($),N}},[p,o,a,c,e]);return r.jsxs(C0,{className:"quick-add-transaction",children:[r.jsx("div",{className:"section-header",children:r.jsx("h2",{className:"section-title",children:t("wallet.dashboard.addTransaction")||"Thêm giao dịch mới"})}),r.jsx(Ne,{children:r.jsx(De,{className:"p-6",children:r.jsxs("div",{className:"add-transaction-section",children:[r.jsx(fg,{onParse:y,isLoading:d,placeholder:t("wallet.dashboard.commandPlaceholder")||'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr")',error:(p==null?void 0:p.responseType)==="ERROR"?p.message:h||null}),r.jsxs(F,{onClick:()=>n("transactions/add"),className:"gap-2",children:[r.jsx(H,{icon:"Add",size:18,color:"currentColor"}),r.jsx("span",{children:t("wallet.dashboard.addManualTransaction")||"Thêm giao dịch thủ công"})]})]})})}),p&&p.responseType==="CONFIRM_DRAFT"&&r.jsx(x0,{open:x,onOpenChange:b,draftData:p.data,accounts:s,categories:i,onConfirm:w,onCancel:()=>{m(null),b(!1)}})]})},C0=K.section`
  margin-bottom: ${({theme:e})=>e.spacing[10]};

  .section-header {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }

  .section-title {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    letter-spacing: -0.01em;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    }
  }

  .add-transaction-section {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};

    button {
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: ${({theme:e})=>e.spacing[2]};
      border-radius: ${({theme:e})=>e.borderRadius.lg};
    }
  }
`,T0=({dateFilter:e})=>{const{t}=Pe(),{navigate:n}=nt(),o=u.useMemo(()=>{let p,m;const x=new Date;if(e.period==="30days"){const b=new Date(x);b.setDate(b.getDate()-30),p=Nt(b,!0),m=Nt(x,!1)}else if(e.period==="month"){const b=new Date(x.getFullYear(),x.getMonth(),1);p=Nt(b,!0),m=Nt(x,!1)}else e.period==="custom"&&(e.startDate&&(p=`${e.startDate}T00:00:00`),e.endDate&&(m=`${e.endDate}T23:59:59`));return{startDate:p,endDate:m}},[e]),{transactions:s,isLoading:a}=Qm({page:0,size:5,sortBy:"occurredAt",sortOrder:"desc",startDate:o.startDate,endDate:o.endDate}),{accounts:i}=lt(),{categories:c}=Wt(),d=p=>{var m;return p?((m=i.find(x=>x.id===p))==null?void 0:m.name)||p:"N/A"},l=(p,m)=>{var x;return m||p&&((x=c.find(b=>b.id===p))==null?void 0:x.name)||null};return a?r.jsxs(qa,{className:"recent-transactions",children:[r.jsx("div",{className:"section-header",children:r.jsx("h2",{className:"section-title",children:t("wallet.dashboard.recentTransactions")})}),r.jsx(Ne,{children:r.jsx(De,{className:"p-6",children:r.jsx("div",{className:"transaction-list",children:[...Array(3)].map((p,m)=>r.jsxs("div",{className:"transaction-item",children:[r.jsxs("div",{className:"transaction-info",children:[r.jsx($e,{className:"h-4 w-24 mb-2"}),r.jsx($e,{className:"h-3 w-32"})]}),r.jsx($e,{className:"h-6 w-20"})]},m))})})})]}):r.jsxs(qa,{className:"recent-transactions",children:[r.jsx("div",{className:"section-header",children:r.jsx("h2",{className:"section-title",children:t("wallet.dashboard.recentTransactions")})}),r.jsx(Ne,{children:r.jsx(De,{className:"p-6",children:s.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("p",{children:t("wallet.dashboard.noTransactions")}),r.jsx(F,{onClick:()=>n("transactions/add"),className:"mt-4",children:t("wallet.dashboard.addFirstTransaction")})]}):r.jsx("div",{className:"transaction-list",children:s.map(p=>{var m,x;return r.jsx("div",{className:"transaction-card",children:r.jsxs("div",{className:"transaction-main",children:[r.jsxs("div",{className:"transaction-left",children:[r.jsx(Oe,{variant:p.type==="EXPENSE"?"destructive":p.type==="INCOME"?"default":"secondary",className:`transaction-type-badge transaction-type-badge--${p.type.toLowerCase()}`,children:p.type==="EXPENSE"?t("wallet.transactions.expense"):p.type==="INCOME"?t("wallet.transactions.income"):t("wallet.transactions.transfer")}),r.jsxs("div",{className:"transaction-info",children:[r.jsx("div",{className:"transaction-category",children:l(p.categoryId,(m=p.category)==null?void 0:m.name)||p.type}),r.jsxs("div",{className:"transaction-meta",children:[r.jsx("span",{className:"transaction-date",children:xc(p.occurredAt)}),p.type==="TRANSFER"?r.jsxs("span",{className:"transaction-account",children:[d(p.fromAccountId)," → ",d(p.toAccountId)]}):((x=p.account)==null?void 0:x.name)&&r.jsx("span",{className:"transaction-account",children:p.account.name})]}),p.note&&r.jsx("div",{className:"transaction-note",children:p.note})]})]}),r.jsx("div",{className:"transaction-right",children:r.jsx("div",{className:"transaction-amount-wrapper",children:r.jsxs("div",{className:`transaction-amount transaction-amount--${p.type.toLowerCase()}`,children:[p.type==="EXPENSE"?"-":p.type==="INCOME"?"+":"",he(p.amount,p.currency)]})})})]})},p.id)})})})})]})},qa=K.section`
  margin-bottom: ${({theme:e})=>e.spacing[10]};

  .section-header {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }

  .section-title {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    letter-spacing: -0.01em;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    }
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  .transaction-list {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};

    .transaction-card {
      padding: ${({theme:e})=>e.spacing[5]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
      box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)":"0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)"};
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
        transform: translateY(-2px);
      }

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        padding: ${({theme:e})=>e.spacing[6]};
      }

      .transaction-main {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: ${({theme:e})=>e.spacing[4]};

        .transaction-left {
          display: flex;
          align-items: flex-start;
          gap: ${({theme:e})=>e.spacing[3]};
          flex: 1;
          min-width: 0;

          .transaction-type-badge {
            padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
            border-radius: ${({theme:e})=>e.borderRadius.md};
            font-size: ${({theme:e})=>e.typography.fontSize.xs};
            font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
            text-transform: uppercase;
            letter-spacing: 0.5px;
            flex-shrink: 0;

            &--expense {
              background: ${({theme:e})=>e.colors.error}20;
              color: ${({theme:e})=>e.colors.error};
            }

            &--income {
              background: ${({theme:e})=>{var t;return(t=e.colors.success)!=null&&t[500]?`${e.colors.success[500]}20`:"#10b98120"}};
              color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
            }

            &--transfer {
              background: ${({theme:e})=>e.colors.primary}20;
              color: ${({theme:e})=>e.colors.primary};
            }
          }

          .transaction-info {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: ${({theme:e})=>e.spacing[1]};

            .transaction-category {
              font-size: ${({theme:e})=>e.typography.fontSize.base};
              font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
              color: ${({theme:e})=>e.colors.text.primary};
            }

            .transaction-meta {
              display: flex;
              flex-wrap: wrap;
              gap: ${({theme:e})=>e.spacing[2]};
              font-size: ${({theme:e})=>e.typography.fontSize.sm};
              color: ${({theme:e})=>e.colors.text.secondary};
            }

            .transaction-note {
              font-size: ${({theme:e})=>e.typography.fontSize.sm};
              color: ${({theme:e})=>e.colors.text.secondary};
              margin-top: ${({theme:e})=>e.spacing[1]};
            }
          }
        }

        .transaction-right {
          display: flex;
          align-items: center;
          flex-shrink: 0;

          .transaction-amount {
            font-size: ${({theme:e})=>e.typography.fontSize.xl};
            font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
            color: ${({theme:e})=>e.colors.text.secondary};
            text-align: right;

            @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
              font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
            }

            &--income {
              color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
            }

            &--expense {
              color: ${({theme:e})=>e.colors.error||"#ef4444"};
            }
          }
        }
      }
    }
  }
`,Ka=()=>{const{t:e}=Pe(),{mutate:t}=Et(),[n,o]=u.useState({period:"month"}),s=u.useCallback(()=>{t(a=>typeof a=="string"&&a.startsWith(oe.TRANSACTIONS)),t(oe.ACCOUNTS),t(a=>typeof a=="string"&&a.startsWith(oe.REPORTS)),t(a=>typeof a=="string"&&a.startsWith(oe.RECEIVABLES)),t(a=>typeof a=="string"&&a.startsWith(oe.LIABILITIES))},[t]);return r.jsxs(k0,{className:"dashboard-wrapper",children:[r.jsx("h1",{className:"title",children:e("wallet.dashboard.title")}),r.jsx(tg,{}),r.jsx(ug,{dateFilter:n,onFilterChange:o}),r.jsx(E0,{onTransactionCreated:s}),r.jsx(T0,{dateFilter:n})]})},k0=K.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .title {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0 0 ${({theme:e})=>e.spacing[10]} 0;
    letter-spacing: -0.02em;
    line-height: 1.2;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
    }
  }
`,Ya=e=>e===0||isNaN(e)?"":e.toLocaleString("vi-VN"),A0=e=>{const n=e.replace(/[^\d.,]/g,"").replace(/\./g,"").replace(",","."),o=parseFloat(n);return isNaN(o)?0:o},ln=({value:e,onChange:t,placeholder:n="0",className:o,min:s=0,disabled:a=!1,required:i=!1})=>{const[c,d]=u.useState(""),[l,p]=u.useState(!1);u.useEffect(()=>{l||d(e?Ya(e):"")},[e,l]);const m=u.useCallback(h=>{const y=h.target.value.replace(/[^\d.,]/g,"");d(y);const w=A0(y);t(w)},[t]),x=u.useCallback(()=>{p(!0),e&&d(e.toString())},[e]),b=u.useCallback(()=>{p(!1),d(e?Ya(e):"")},[e]);return r.jsx(Z,{type:"text",inputMode:"numeric",value:c,onChange:m,onFocus:x,onBlur:b,placeholder:n,className:se("text-right",o),disabled:a,required:i,min:s})},ct=u.forwardRef(({className:e,...t},n)=>r.jsx("textarea",{className:se("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));ct.displayName="Textarea";function In(e){if(!e){const t=new Date,n=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${n}-${o}-${s}T${a}:${i}`}try{let t;if(!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)){const c=e.split("T");if(c.length===2){const d=c[0],p=c[1].split(".")[0].split(":"),m=parseInt(d.split("-")[0],10),x=parseInt(d.split("-")[1],10)-1,b=parseInt(d.split("-")[2],10),h=parseInt(p[0]||"0",10),f=parseInt(p[1]||"0",10),y=parseInt(p[2]||"0",10);t=new Date(m,x,b,h,f,y)}else t=new Date(e)}else t=new Date(e);if(isNaN(t.getTime())){const c=new Date,d=c.getFullYear(),l=String(c.getMonth()+1).padStart(2,"0"),p=String(c.getDate()).padStart(2,"0"),m=String(c.getHours()).padStart(2,"0"),x=String(c.getMinutes()).padStart(2,"0");return`${d}-${l}-${p}T${m}:${x}`}const n=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${n}-${o}-${s}T${a}:${i}`}catch(t){console.error("Error formatting datetime for datetime-local:",t);const n=new Date,o=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0"),i=String(n.getHours()).padStart(2,"0"),c=String(n.getMinutes()).padStart(2,"0");return`${o}-${s}-${a}T${i}:${c}`}}function vs(e){if(!e){const t=new Date,n=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),a=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0"),c=String(t.getSeconds()).padStart(2,"0");return`${n}-${o}-${s}T${a}:${i}:${c}`}try{let t=e;if(!t.includes(":")){console.error("Invalid datetime-local format:",e);const o=new Date,s=o.getFullYear(),a=String(o.getMonth()+1).padStart(2,"0"),i=String(o.getDate()).padStart(2,"0"),c=String(o.getHours()).padStart(2,"0"),d=String(o.getMinutes()).padStart(2,"0"),l=String(o.getSeconds()).padStart(2,"0");return`${s}-${a}-${i}T${c}:${d}:${l}`}const n=t.split("T");if(n.length===2){const o=n[1],s=o.split(":");if(s.length===2)t=`${n[0]}T${o}:00`;else if(s.length===3)t=t;else{console.error("Invalid time format in datetime-local:",e);const a=new Date,i=a.getFullYear(),c=String(a.getMonth()+1).padStart(2,"0"),d=String(a.getDate()).padStart(2,"0"),l=String(a.getHours()).padStart(2,"0"),p=String(a.getMinutes()).padStart(2,"0"),m=String(a.getSeconds()).padStart(2,"0");return`${i}-${c}-${d}T${l}:${p}:${m}`}}return t}catch(t){console.error("Error converting datetime-local to ISO:",t);const n=new Date,o=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0"),i=String(n.getHours()).padStart(2,"0"),c=String(n.getMinutes()).padStart(2,"0"),d=String(n.getSeconds()).padStart(2,"0");return`${o}-${s}-${a}T${i}:${c}:${d}`}}const R0=({transactionId:e,isOpen:t,onClose:n,onSuccess:o,onDelete:s})=>{const{t:a}=Pe(),{accounts:i}=lt(),{categories:c}=Wt(),[d,l]=u.useState(null),[p,m]=u.useState(!1),[x,b]=u.useState(!1),[h,f]=u.useState(!1),[y,w]=u.useState(null),[g,N]=u.useState({});u.useEffect(()=>{t&&e?$():(l(null),N({}),w(null),m(!1))},[t,e]);const $=async()=>{if(e){m(!0),w(null);try{const v=await ne.transactions.getById(e);l(v),N({type:v.type,amount:v.amount,currency:v.currency,accountId:v.accountId,categoryId:v.categoryId,fromAccountId:v.fromAccountId,toAccountId:v.toAccountId,occurredAt:In(v.occurredAt),note:v.note})}catch(v){w(fe(v))}finally{m(!1)}}},S=async v=>{v.preventDefault(),w(null),b(!0);try{if(!d)return;if((g.type||d.type)==="TRANSFER"){const O=g.fromAccountId||d.fromAccountId,L=g.toAccountId||d.toAccountId;if(!O||!L)throw new Error("Vui lòng chọn tài khoản nguồn và đích");if(O===L)throw new Error("Tài khoản nguồn và đích phải khác nhau")}const k={...g,occurredAt:g.occurredAt?vs(g.occurredAt):void 0};(g.type||d.type)==="TRANSFER"&&(k.accountId=void 0,k.categoryId=void 0),await ne.transactions.update(d.id,k),o==null||o(),n()}catch(k){w(fe(k))}finally{b(!1)}},T=u.useCallback(async()=>{if(!(!d||!window.confirm(a("wallet.transactions.confirmDelete")||"Bạn có chắc muốn xóa giao dịch này?"))){f(!0),w(null);try{await ne.transactions.delete(d.id),s==null||s(),n()}catch(v){w(fe(v))}finally{f(!1)}}},[d,s,n,a]),E=(v,k)=>{N(O=>({...O,[v]:k}))};return t?r.jsx(I0,{className:"modal--open",onClick:n,children:r.jsxs("div",{className:"modal-content",onClick:v=>v.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h2",{className:"modal-title",children:a("wallet.transactions.edit")||"Sửa giao dịch"}),r.jsx("button",{className:"close-button",onClick:n,children:r.jsx(H,{icon:"Close",size:20,color:"currentColor"})})]}),p?r.jsx("div",{className:"loading-state",children:a("wallet.common.loading")}):d?r.jsxs("form",{className:"form",onSubmit:S,children:[y&&r.jsx("div",{className:"error-message",children:y}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"label",children:[a("wallet.transactions.type")," *"]}),r.jsxs("select",{className:"select",value:g.type||d.type,onChange:v=>E("type",v.target.value),required:!0,children:[r.jsx("option",{value:"EXPENSE",children:a("wallet.transactions.expense")}),r.jsx("option",{value:"INCOME",children:a("wallet.transactions.income")}),r.jsx("option",{value:"TRANSFER",children:a("wallet.transactions.transfer")})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"label",children:[a("wallet.transactions.amount")||"Số tiền"," *"]}),r.jsx(ln,{className:"input",value:g.amount??d.amount,onChange:v=>E("amount",v),required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:a("wallet.transactions.currency")||"Tiền tệ"}),r.jsxs("select",{className:"select",value:g.currency||d.currency,onChange:v=>E("currency",v.target.value),children:[r.jsx("option",{value:"VND",children:"VND (₫)"}),r.jsx("option",{value:"USD",children:"USD ($)"}),r.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),(g.type||d.type)==="TRANSFER"?r.jsxs("div",{className:"transfer-fields",children:[r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"label",children:[a("wallet.transactions.fromAccount")||"Tài khoản nguồn"," *"]}),r.jsxs("select",{className:"select",value:g.fromAccountId||d.fromAccountId||"",onChange:v=>E("fromAccountId",v.target.value),required:!0,children:[r.jsx("option",{value:"",children:a("wallet.transactions.selectFromAccount")||"Chọn tài khoản nguồn"}),i.map(v=>r.jsxs("option",{value:v.id,children:[v.name," (",v.type,")"]},v.id))]})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"label",children:[a("wallet.transactions.toAccount")||"Tài khoản đích"," *"]}),r.jsxs("select",{className:"select",value:g.toAccountId||d.toAccountId||"",onChange:v=>E("toAccountId",v.target.value),required:!0,children:[r.jsx("option",{value:"",children:a("wallet.transactions.selectToAccount")||"Chọn tài khoản đích"}),i.filter(v=>v.id!==(g.fromAccountId||d.fromAccountId)).map(v=>r.jsxs("option",{value:v.id,children:[v.name," (",v.type,")"]},v.id))]})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"label",children:[a("wallet.accounts.title")," *"]}),r.jsx("select",{className:"select",value:g.accountId||d.accountId,onChange:v=>E("accountId",v.target.value),required:!0,children:i.map(v=>r.jsxs("option",{value:v.id,children:[v.name," (",v.type,")"]},v.id))})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:a("wallet.categories.title")}),r.jsxs("select",{className:"select",value:g.categoryId||d.categoryId||"",onChange:v=>E("categoryId",v.target.value||void 0),children:[r.jsx("option",{value:"",children:a("wallet.transactions.noCategory")||"Không có"}),c.map(v=>r.jsx("option",{value:v.id,children:v.name},v.id))]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:a("wallet.transactions.date")||"Ngày và giờ giao dịch"}),r.jsx("input",{className:"input",type:"datetime-local",value:g.occurredAt||In(d.occurredAt),onChange:v=>E("occurredAt",v.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:a("wallet.transactions.note")||"Ghi chú"}),r.jsx(ct,{value:g.note||d.note||"",onChange:v=>E("note",v.target.value||void 0),rows:3})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{className:"cancel-button",type:"button",onClick:n,disabled:x||h,children:a("wallet.common.cancel")}),r.jsx("button",{className:`submit-button ${x?"submit-button--loading":""}`,type:"submit",disabled:x||h,children:a(x?"wallet.common.saving":"wallet.common.save")})]}),r.jsxs("button",{className:"delete-button",type:"button",onClick:T,disabled:x||h,children:[r.jsx(H,{icon:h?"Loading":"Delete",size:18,color:"currentColor"}),r.jsx("span",{children:h?a("wallet.common.deleting")||"Đang xóa...":a("wallet.transactions.delete")||"Xóa giao dịch"})]})]}):r.jsx("div",{className:"error-message",children:a("wallet.transactions.notFound")||"Không tìm thấy giao dịch"})]})}):null},I0=K.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(0, 0, 0, 0.8)":"rgba(0, 0, 0, 0.5)"};
  backdrop-filter: blur(4px);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({theme:e})=>e.spacing[4]};
  opacity: 0;
  transition: opacity 0.2s ease;

  &.modal--open {
    display: flex;
    opacity: 1;
  }

  .modal-content {
    background: ${({theme:e})=>e.colors.surface};
    border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
    padding: ${({theme:e})=>e.spacing[6]};
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 20px 60px rgba(0, 0, 0, 0.5)":"0 20px 60px rgba(0, 0, 0, 0.3)"};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      padding: ${({theme:e})=>e.spacing[8]};
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${({theme:e})=>e.spacing[6]};

      .modal-title {
        font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
        font-size: ${({theme:e})=>e.typography.fontSize.xl};
        font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
        line-height: ${({theme:e})=>e.typography.lineHeight.tight};
        color: ${({theme:e})=>e.colors.text.primary};
        margin: 0;
      }

      .close-button {
        padding: ${({theme:e})=>e.spacing[2]};
        background: transparent;
        border: none;
        color: ${({theme:e})=>e.colors.text.secondary};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${({theme:e})=>e.borderRadius.md};
        transition: all 0.2s ease;

        &:hover {
          color: ${({theme:e})=>e.colors.text.primary};
          background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
        }
      }
    }

    .loading-state {
      padding: ${({theme:e})=>e.spacing[8]};
      text-align: center;
      font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
      color: ${({theme:e})=>e.colors.text.secondary};
    }

    .error-message {
      padding: ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.error}20;
      border: 1px solid ${({theme:e})=>e.colors.error};
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
      color: ${({theme:e})=>e.colors.error};
      margin-bottom: ${({theme:e})=>e.spacing[4]};
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[4]};

      .form-group {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[2]};

        .label {
          font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          line-height: ${({theme:e})=>e.typography.lineHeight.normal};
          color: ${({theme:e})=>e.colors.text.primary};
        }

        .input {
          height: 40px;
          padding: 0 ${({theme:e})=>e.spacing[4]};
          background: ${({theme:e})=>e.colors.background};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.lg};
          font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
          line-height: 1.5;
          color: ${({theme:e})=>e.colors.text.primary};
          transition: all 0.2s ease;

          &:focus {
            outline: none;
            border-color: ${({theme:e})=>e.colors.primary};
            box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.2)":"rgba(14, 165, 233, 0.1)"};
          }

          &:hover {
            border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
          }
        }

        .select {
          height: 40px;
          padding: 0 ${({theme:e})=>e.spacing[4]};
          background: ${({theme:e})=>e.colors.background};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.lg};
          font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
          line-height: 1.5;
          color: ${({theme:e})=>e.colors.text.primary};
          cursor: pointer;
          transition: all 0.2s ease;

          &:focus {
            outline: none;
            border-color: ${({theme:e})=>e.colors.primary};
            box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.2)":"rgba(14, 165, 233, 0.1)"};
          }

          &:hover {
            border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
          }
        }

      }

      .transfer-fields {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[4]};
        padding: ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.surface};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.lg};

        .form-group {
          display: flex;
          flex-direction: column;
          gap: ${({theme:e})=>e.spacing[2]};

          .label {
            font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
            font-size: ${({theme:e})=>e.typography.fontSize.sm};
            font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
            line-height: ${({theme:e})=>e.typography.lineHeight.normal};
            color: ${({theme:e})=>e.colors.text.primary};
          }

          .select {
            height: 40px;
            padding: 0 ${({theme:e})=>e.spacing[4]};
            background: ${({theme:e})=>e.colors.background};
            border: 1px solid ${({theme:e})=>e.colors.border};
            border-radius: ${({theme:e})=>e.borderRadius.lg};
            font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
            font-size: ${({theme:e})=>e.typography.fontSize.sm};
            font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
            line-height: 1.5;
            color: ${({theme:e})=>e.colors.text.primary};
            cursor: pointer;
            transition: all 0.2s ease;

            &:focus {
              outline: none;
              border-color: ${({theme:e})=>e.colors.primary};
              box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.2)":"rgba(14, 165, 233, 0.1)"};
            }

            &:hover {
              border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
            }
          }
        }
      }

      .button-group {
        display: flex;
        gap: ${({theme:e})=>e.spacing[4]};
        margin-top: ${({theme:e})=>e.spacing[6]} !important;

        .submit-button {
          flex: 1;
          height: 40px;
          padding: 0 ${({theme:e})=>e.spacing[6]};
          background: ${({theme:e})=>e.colors.primary};
          color: white;
          border: none;
          border-radius: ${({theme:e})=>e.borderRadius.lg};
          font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          line-height: 1.5;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.25)"};

          &:hover:not(:disabled) {
            background: ${({theme:e})=>e.colors.primary[600]||"#0284c7"};
            transform: translateY(-1px);
            box-shadow: 0 4px 12px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.4)":"rgba(14, 165, 233, 0.35)"};
          }

          &:active:not(:disabled) {
            transform: translateY(0);
          }

          &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
          }

          &--loading {
            cursor: not-allowed;
            opacity: 0.7;
          }
        }

        .cancel-button {
          flex: 1;
          height: 40px;
          padding: 0 ${({theme:e})=>e.spacing[6]};
          background: ${({theme:e})=>e.colors.surface};
          color: ${({theme:e})=>e.colors.text.primary};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.lg};
          font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          line-height: 1.5;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

          &:hover:not(:disabled) {
            border-color: ${({theme:e})=>e.colors.text.secondary};
            background: ${({theme:e})=>e.colors.hover};
            transform: translateY(-1px);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
          }

          &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
          }
        }
      }

      .delete-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${({theme:e})=>e.spacing[2]};
        height: 40px;
        padding: 0 ${({theme:e})=>e.spacing[6]};
        background: ${({theme:e})=>e.colors.error};
        color: white;
        border: none;
        border-radius: ${({theme:e})=>e.borderRadius.lg};
        font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        line-height: 1.5;
        cursor: pointer;
        transition: all 0.2s ease;
        width: 100%;
        margin-top: ${({theme:e})=>e.spacing[4]};

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }
    }
  }
`,D0=({transaction:e,accounts:t,categories:n,onEdit:o,onDelete:s})=>{var m;const{t:a}=Pe(),i=x=>{var b;return x?((b=t.find(h=>h.id===x))==null?void 0:b.name)||x:"N/A"},c=()=>{var x,b;return(x=e.category)!=null&&x.name?e.category.name:e.categoryId&&((b=n.find(h=>h.id===e.categoryId))==null?void 0:b.name)||null},d=()=>{switch(e.type){case"EXPENSE":case"LIABILITY_SETTLEMENT":return"destructive";case"INCOME":case"RECEIVABLE_SETTLEMENT":return"default";default:return"secondary"}},l=()=>{switch(e.type){case"EXPENSE":return a("wallet.transactions.expense");case"INCOME":return a("wallet.transactions.income");case"TRANSFER":return a("wallet.transactions.transfer");case"RECEIVABLE_SETTLEMENT":return a("wallet.transactions.receivableSettlement","Thu nợ");case"LIABILITY_SETTLEMENT":return a("wallet.transactions.liabilitySettlement","Trả nợ");default:return e.type}},p=()=>e.type==="EXPENSE"||e.type==="LIABILITY_SETTLEMENT"?"-":e.type==="INCOME"||e.type==="RECEIVABLE_SETTLEMENT"?"+":"";return r.jsx(P0,{onClick:()=>o(e),children:r.jsxs("div",{className:"transaction-main",children:[r.jsxs("div",{className:"transaction-left",children:[r.jsx(Oe,{variant:d(),className:`transaction-type-badge transaction-type-badge--${e.type.toLowerCase().replace("_","-")}`,children:l()}),r.jsxs("div",{className:"transaction-info",children:[r.jsx("div",{className:"transaction-category",children:c()||l()}),r.jsxs("div",{className:"transaction-meta",children:[r.jsx("span",{className:"transaction-date",children:xc(e.occurredAt)}),e.type==="TRANSFER"?r.jsxs("span",{className:"transaction-account",children:[i(e.fromAccountId)," → ",i(e.toAccountId)]}):((m=e.account)==null?void 0:m.name)&&r.jsx("span",{className:"transaction-account",children:e.account.name})]}),e.note&&r.jsx("div",{className:"transaction-note",children:e.note})]})]}),r.jsx("div",{className:"transaction-right",children:r.jsxs("div",{className:"transaction-amount-wrapper",children:[r.jsxs("div",{className:`transaction-amount transaction-amount--${e.type.toLowerCase()}`,children:[p(),he(e.amount,e.currency)]}),r.jsxs("div",{className:"transaction-actions",onClick:x=>x.stopPropagation(),children:[r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>o(e),title:a("wallet.common.edit"),children:r.jsx(H,{icon:"Edit",size:16,color:"currentColor"})}),r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button icon-button--danger",onClick:()=>s(e),title:a("wallet.common.delete"),children:r.jsx(H,{icon:"Delete",size:16,color:"currentColor"})})]})]})})]})})},P0=K.div`
  padding: ${({theme:e})=>e.spacing[5]};
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
  box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)":"0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
    box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 4px 16px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)":"0 4px 16px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)"};
    transform: translateY(-2px);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[6]};
  }

  .transaction-main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({theme:e})=>e.spacing[4]};

    .transaction-left {
      display: flex;
      align-items: flex-start;
      gap: ${({theme:e})=>e.spacing[3]};
      flex: 1;
      min-width: 0;

      .transaction-type-badge {
        padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.xs};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        flex-shrink: 0;
        min-width: 72px;
        text-align: center;

        &--expense {
          background: ${({theme:e})=>e.colors.error}20;
          color: ${({theme:e})=>e.colors.error};
        }

        &--income {
          background: ${({theme:e})=>{var t;return(t=e.colors.success)!=null&&t[500]?`${e.colors.success[500]}20`:"#10b98120"}};
          color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
        }

        &--transfer {
          background: ${({theme:e})=>e.colors.primary}20;
          color: ${({theme:e})=>e.colors.primary};
        }

        &--receivable-settlement {
          background: ${({theme:e})=>{var t;return(t=e.colors.success)!=null&&t[500]?`${e.colors.success[500]}20`:"#10b98120"}};
          color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
        }

        &--liability-settlement {
          background: ${({theme:e})=>{var t;return(t=e.colors.warning)!=null&&t[500]?`${e.colors.warning[500]}20`:"#f59e0b20"}};
          color: ${({theme:e})=>{var t;return((t=e.colors.warning)==null?void 0:t[500])||"#f59e0b"}};
        }
      }

      .transaction-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[1]};

        .transaction-category {
          font-size: ${({theme:e})=>e.typography.fontSize.base};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          color: ${({theme:e})=>e.colors.text.primary};
        }

        .transaction-meta {
          display: flex;
          flex-wrap: wrap;
          gap: ${({theme:e})=>e.spacing[2]};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          color: ${({theme:e})=>e.colors.text.secondary};
        }

        .transaction-note {
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          color: ${({theme:e})=>e.colors.text.secondary};
          margin-top: ${({theme:e})=>e.spacing[1]};
        }
      }
    }

    .transaction-right {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[3]};
      flex-shrink: 0;

      .transaction-amount-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: ${({theme:e})=>e.spacing[2]};
      }

      .transaction-amount {
        font-size: ${({theme:e})=>e.typography.fontSize.xl};
        font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
        color: ${({theme:e})=>e.colors.text.secondary};
        text-align: right;

        @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
          font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
        }

        &--income, &--receivable_settlement {
          color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
        }

        &--expense {
          color: ${({theme:e})=>e.colors.error||"#ef4444"};
        }

        &--liability_settlement {
          color: ${({theme:e})=>{var t;return((t=e.colors.warning)==null?void 0:t[500])||"#f59e0b"}};
        }
      }

      .transaction-actions {
        display: flex;
        gap: ${({theme:e})=>e.spacing[1]};

        .icon-button {
          padding: ${({theme:e})=>e.spacing[2]};
          background: ${({theme:e})=>e.colors.surface};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.lg};
          color: ${({theme:e})=>e.colors.text.secondary};
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

          &:hover {
            border-color: ${({theme:e})=>e.colors.primary};
            color: ${({theme:e})=>e.colors.primary};
            background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.15)":"rgba(14, 165, 233, 0.1)"};
            transform: translateY(-1px);
          }

          &--danger:hover {
            border-color: ${({theme:e})=>e.colors.error};
            color: ${({theme:e})=>e.colors.error};
            background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(239, 68, 68, 0.15)":"rgba(239, 68, 68, 0.1)"};
          }
        }
      }
    }
  }
`,O0=({filters:e,accounts:t,categories:n,onFilterChange:o})=>{var a,i;const{t:s}=Pe();return r.jsx(L0,{children:r.jsx(De,{className:"p-6",children:r.jsxs("div",{className:"filters-grid",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{className:"label",children:s("wallet.transactions.type")}),r.jsxs(ke,{value:e.type||"__all__",onValueChange:c=>o("type",c==="__all__"?void 0:c),children:[r.jsx(Se,{className:"select",children:r.jsx(Ae,{placeholder:s("wallet.transactions.all")})}),r.jsxs(je,{children:[r.jsx(U,{value:"__all__",children:s("wallet.transactions.all")}),r.jsx(U,{value:"EXPENSE",children:s("wallet.transactions.expense")}),r.jsx(U,{value:"INCOME",children:s("wallet.transactions.income")}),r.jsx(U,{value:"TRANSFER",children:s("wallet.transactions.transfer")})]})]})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{className:"label",children:s("wallet.transactions.fromDate")}),r.jsx(Z,{className:"input",type:"date",value:((a=e.startDate)==null?void 0:a.split("T")[0])||"",onChange:c=>o("startDate",c.target.value||void 0)})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{className:"label",children:s("wallet.transactions.toDate")}),r.jsx(Z,{className:"input",type:"date",value:((i=e.endDate)==null?void 0:i.split("T")[0])||"",onChange:c=>o("endDate",c.target.value||void 0)})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{className:"label",children:s("wallet.accounts.title")}),r.jsxs(ke,{value:e.accountId||"__all__",onValueChange:c=>o("accountId",c==="__all__"?void 0:c),children:[r.jsx(Se,{className:"select",children:r.jsx(Ae,{placeholder:s("wallet.transactions.all")})}),r.jsxs(je,{children:[r.jsx(U,{value:"__all__",children:s("wallet.transactions.all")}),t.map(c=>r.jsx(U,{value:c.id,children:c.name},c.id))]})]})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{className:"label",children:s("wallet.categories.title")}),r.jsxs(ke,{value:e.categoryId||"__all__",onValueChange:c=>o("categoryId",c==="__all__"?void 0:c),children:[r.jsx(Se,{className:"select",children:r.jsx(Ae,{placeholder:s("wallet.transactions.all")})}),r.jsxs(je,{children:[r.jsx(U,{value:"__all__",children:s("wallet.transactions.all")}),n.map(c=>r.jsx(U,{value:c.id,children:c.name},c.id))]})]})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{className:"label",children:s("wallet.transactions.minAmount")||"Tối thiểu"}),r.jsx(Z,{className:"number-input",type:"number",step:"0.01",min:"0",placeholder:"0",value:e.minAmount||"",onChange:c=>o("minAmount",c.target.value?parseFloat(c.target.value):void 0)})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{className:"label",children:s("wallet.transactions.maxAmount")||"Tối đa"}),r.jsx(Z,{className:"number-input",type:"number",step:"0.01",min:"0",placeholder:"0",value:e.maxAmount||"",onChange:c=>o("maxAmount",c.target.value?parseFloat(c.target.value):void 0)})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{className:"label",children:s("wallet.transactions.sortBy")||"Sắp xếp theo"}),r.jsxs(ke,{value:e.sortBy||"occurredAt",onValueChange:c=>o("sortBy",c),children:[r.jsx(Se,{className:"select",children:r.jsx(Ae,{})}),r.jsxs(je,{children:[r.jsx(U,{value:"occurredAt",children:s("wallet.transactions.sortByDate")||"Ngày giao dịch"}),r.jsx(U,{value:"amount",children:s("wallet.transactions.sortByAmount")||"Số tiền"}),r.jsx(U,{value:"createdAt",children:s("wallet.transactions.sortByCreated")||"Ngày tạo"})]})]})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{className:"label",children:s("wallet.transactions.sortOrder")||"Thứ tự"}),r.jsxs(ke,{value:e.sortOrder||"desc",onValueChange:c=>o("sortOrder",c),children:[r.jsx(Se,{className:"select",children:r.jsx(Ae,{})}),r.jsxs(je,{children:[r.jsx(U,{value:"desc",children:s("wallet.transactions.desc")||"Giảm dần"}),r.jsx(U,{value:"asc",children:s("wallet.transactions.asc")||"Tăng dần"})]})]})]})]})})})},L0=K(Ne)`
  padding: ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.xl||e.borderRadius["2xl"]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 2px 8px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)":"0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)"};
  width: 100%;
  overflow-x: auto;

  .filters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: ${({theme:e})=>e.spacing[4]};

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[2]};

      .label {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        color: ${({theme:e})=>e.colors.text.primary};
      }

      .select, .input, .number-input {
        height: 40px;
        padding: 0 ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.lg};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.primary};
        transition: all 0.2s ease;

        &:focus {
          outline: none;
          border-color: ${({theme:e})=>e.colors.primary};
          box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.2)":"rgba(14, 165, 233, 0.1)"};
        }

        &:hover {
          border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
        }
      }

      .number-input {
        text-align: right;
      }
    }
  }
`,z0=Fn("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),At=u.forwardRef(({className:e,variant:t,...n},o)=>r.jsx("div",{ref:o,role:"alert",className:se(z0({variant:t}),e),...n}));At.displayName="Alert";const _0=u.forwardRef(({className:e,...t},n)=>r.jsx("h5",{ref:n,className:se("mb-1 font-medium leading-none tracking-tight",e),...t}));_0.displayName="AlertTitle";const Rt=u.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:se("text-sm [&_p]:leading-relaxed",e),...t}));Rt.displayName="AlertDescription";const M0=()=>{const{t:e}=Pe(),{navigate:t}=nt(),{accounts:n}=lt(),{categories:o}=Wt(),[s,a]=u.useState([]),[i,c]=u.useState(null),[d,l]=u.useState(!0),[p,m]=u.useState(null),[x,b]=u.useState(!1),[h,f]=u.useState(""),[y,w]=u.useState(null),[g,N]=u.useState(null),[$,S]=u.useState(!1),T=u.useRef(0),E=u.useRef(null),[v,k]=u.useState({page:0,size:20,sortBy:"occurredAt",sortOrder:"desc"}),O=u.useMemo(()=>{let V,Q;return v.startDate&&(V=v.startDate.includes("T")?v.startDate:`${v.startDate}T00:00:00`),v.endDate&&(Q=v.endDate.includes("T")?v.endDate:`${v.endDate}T23:59:59`),{startDate:V,endDate:Q}},[v.startDate,v.endDate]),L=u.useRef(!1),j=u.useRef(""),I=u.useRef(v),R=u.useRef(O),W=u.useRef(h);u.useEffect(()=>{I.current=v,R.current=O,W.current=h},[v,O,h]);const P=u.useCallback(async()=>{if(!L.current){T.current=window.scrollY||document.documentElement.scrollTop,L.current=!0,l(!0),m(null);try{const V=I.current,Q=R.current,D=W.current,ee=await ne.transactions.getAll({...V,startDate:Q.startDate,endDate:Q.endDate,keyword:D||void 0});a(ee.content),c(ee)}catch(V){m(fe(V))}finally{L.current=!1,l(!1),requestAnimationFrame(()=>{window.scrollTo(0,T.current)})}}},[]);u.useEffect(()=>{const V=JSON.stringify({page:v.page,size:v.size,sortBy:v.sortBy,sortOrder:v.sortOrder,type:v.type,categoryId:v.categoryId,accountId:v.accountId,minAmount:v.minAmount,maxAmount:v.maxAmount,keyword:v.keyword,startDate:O.startDate,endDate:O.endDate});j.current!==V&&(j.current=V,P())},[v.page,v.size,v.sortBy,v.sortOrder,v.type,v.categoryId,v.accountId,v.minAmount,v.maxAmount,v.keyword,O.startDate,O.endDate,h,P]),u.useEffect(()=>{const V=setTimeout(()=>{h!==v.keyword&&k(Q=>({...Q,keyword:h||void 0,page:0}))},500);return()=>clearTimeout(V)},[h,v.keyword]);const B=u.useCallback((V,Q)=>{T.current=window.scrollY||document.documentElement.scrollTop,k(D=>({...D,[V]:Q,page:0}))},[]),A=(V,Q=!0)=>{const D=V.getFullYear(),ee=String(V.getMonth()+1).padStart(2,"0"),ve=String(V.getDate()).padStart(2,"0");return`${D}-${ee}-${ve}T${Q?"00:00:00":"23:59:59"}`},q=u.useCallback(V=>{if(T.current=window.scrollY||document.documentElement.scrollTop,y===V){w(null),k(D=>({...D,startDate:void 0,endDate:void 0,page:0}));return}w(V);const Q=new Date;if(V==="all")k(D=>({...D,startDate:void 0,endDate:void 0,page:0}));else if(V==="30days"){const D=new Date(Q);D.setDate(D.getDate()-30),k(ee=>({...ee,startDate:A(D,!0),endDate:A(Q,!1),page:0}))}else if(V==="month"){const D=new Date(Q.getFullYear(),Q.getMonth(),1);k(ee=>({...ee,startDate:A(D,!0),endDate:A(Q,!1),page:0}))}},[y]),ye=u.useCallback(V=>{T.current=window.scrollY||document.documentElement.scrollTop,k(Q=>({...Q,page:V}))},[]),xe=u.useCallback(V=>{N(V.id),S(!0)},[]),me=u.useCallback(()=>{S(!1),N(null)},[]),J=u.useCallback(()=>{P()},[P]),re=u.useCallback(async V=>{if(window.confirm(e("wallet.transactions.confirmDelete")||"Bạn có chắc muốn xóa giao dịch này?"))try{await ne.transactions.delete(V.id),await P()}catch(Q){m(fe(Q))}},[P,e]);return r.jsxs(F0,{ref:E,children:[r.jsxs("div",{className:"header",children:[r.jsx("h1",{className:"title",children:e("wallet.transactions.title")}),r.jsxs(F,{onClick:()=>t("transactions/add"),className:"gap-2",children:[r.jsx(H,{icon:"Add",size:18,color:"currentColor"}),r.jsx("span",{children:e("wallet.transactions.add")})]})]}),p&&r.jsx(At,{variant:"destructive",className:"mb-6",children:r.jsx(Rt,{children:p})}),r.jsxs("div",{className:"quick-filters-section",children:[r.jsxs("div",{className:"quick-filters",children:[r.jsx(F,{variant:y==="all"?"default":"outline",size:"sm",onClick:()=>q("all"),children:e("wallet.transactions.all")||"Tất cả"}),r.jsx(F,{variant:y==="30days"?"default":"outline",size:"sm",onClick:()=>q("30days"),children:e("wallet.dashboard.last30Days")||"30 ngày gần nhất"}),r.jsx(F,{variant:y==="month"?"default":"outline",size:"sm",onClick:()=>q("month"),children:e("wallet.dashboard.thisMonth")||"Tháng này"})]}),r.jsxs("div",{className:"search-bar",children:[r.jsx(H,{icon:"Search",size:18,color:"currentColor"}),r.jsx(Z,{type:"text",className:"search-input",placeholder:e("wallet.transactions.searchPlaceholder")||"Tìm kiếm giao dịch...",value:h,onChange:V=>f(V.target.value)}),h&&r.jsx(F,{variant:"ghost",size:"icon",onClick:()=>f(""),children:r.jsx(H,{icon:"Close",size:16,color:"currentColor"})})]}),r.jsxs(F,{variant:"outline",onClick:()=>b(!x),className:"gap-2",children:[r.jsx(H,{icon:x?"ChevronUp":"ChevronDown",size:18,color:"currentColor"}),r.jsx("span",{children:e("wallet.transactions.filters")||"Bộ lọc"})]})]}),x&&r.jsx(O0,{filters:v,accounts:n,categories:o,onFilterChange:B}),d&&s.length===0?r.jsx("div",{className:"loading-state",children:[...Array(5)].map((V,Q)=>r.jsx(Ne,{children:r.jsxs(De,{className:"p-6",children:[r.jsx($e,{className:"h-4 w-32 mb-2"}),r.jsx($e,{className:"h-6 w-24 mb-2"}),r.jsx($e,{className:"h-3 w-48"})]})},Q))}):s.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx(H,{icon:"FileText",size:48,color:"currentColor"}),r.jsx("p",{children:e("wallet.transactions.noTransactions")}),r.jsxs(F,{onClick:()=>t("transactions/add"),className:"gap-2",children:[r.jsx(H,{icon:"Add",size:18,color:"currentColor"}),r.jsx("span",{children:e("wallet.transactions.addFirst")||"Thêm giao dịch đầu tiên"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"transaction-list",children:s.map(V=>r.jsx(D0,{transaction:V,accounts:n,categories:o,onEdit:xe,onDelete:re},V.id))}),i&&i.totalPages>1&&r.jsxs("div",{className:"pagination",children:[r.jsxs(F,{variant:"outline",onClick:()=>ye(i.page-1),disabled:!i.hasPrevious,className:"gap-2",children:[r.jsx(H,{icon:"ChevronLeft",size:18,color:"currentColor"}),r.jsx("span",{children:e("wallet.transactions.previous")||"Trước"})]}),r.jsxs("div",{className:"pagination-info",children:[r.jsxs("span",{children:[e("wallet.transactions.page")||"Trang"," ",i.page+1," / ",i.totalPages]}),r.jsxs("span",{className:"pagination-total",children:["(",i.totalElements," ",e("wallet.transactions.items")||"giao dịch",")"]})]}),r.jsxs(F,{variant:"outline",onClick:()=>ye(i.page+1),disabled:!i.hasNext,className:"gap-2",children:[r.jsx("span",{children:e("wallet.transactions.next")||"Sau"}),r.jsx(H,{icon:"ChevronRight",size:18,color:"currentColor"})]})]})]}),r.jsx(R0,{transactionId:g||"",isOpen:$&&!!g,onClose:me,onSuccess:J,onDelete:J})]})},F0=K.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing[8]};
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing[4]};

    .title {
      font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;
      letter-spacing: -0.02em;

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
      }
    }
  }

  .quick-filters-section {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .quick-filters {
      display: flex;
      gap: ${({theme:e})=>e.spacing[2]};
      flex-wrap: wrap;
    }

    .search-bar {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
      height: 40px;
      padding: 0 ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      flex: 1;
      min-width: 0;

      &:focus-within {
        border-color: ${({theme:e})=>e.colors.primary};
      }

      .search-input {
        flex: 1;
        border: none;
        background: transparent;
        min-width: 0;
        height: 100%;
      }
    }
  }

  .loading-state {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[12]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};

    p {
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      margin: 0;
    }
  }

  .transaction-list {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-top: ${({theme:e})=>e.spacing[8]};
    padding: ${({theme:e})=>e.spacing[4]};

    .pagination-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[1]};
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      color: ${({theme:e})=>e.colors.text.secondary};

      .pagination-total {
        font-size: ${({theme:e})=>e.typography.fontSize.xs};
        opacity: 0.7;
      }
    }
  }
`,W0=()=>{const{navigate:e}=nt(),{accounts:t}=lt(),{categories:n}=Wt(),{receivables:o}=gc({page:0,size:100}),{liabilities:s}=yc({page:0,size:100}),[a,i]=u.useState(!1),[c,d]=u.useState(null),[l,p]=u.useState({type:"EXPENSE",amount:0,currency:"VND",accountId:"",occurredAt:In(new Date().toISOString())});u.useEffect(()=>{(l.type==="EXPENSE"||l.type==="INCOME")&&t.length>0&&!l.accountId&&p(h=>({...h,accountId:t[0].id}))},[t,l.accountId,l.type]),u.useEffect(()=>{l.type!=="TRANSFER"?p(h=>({...h,fromAccountId:void 0,toAccountId:void 0})):p(h=>({...h,accountId:"",categoryId:void 0})),l.type!=="RECEIVABLE_SETTLEMENT"&&p(h=>({...h,receivableId:void 0})),l.type!=="LIABILITY_SETTLEMENT"&&p(h=>({...h,liabilityId:void 0}))},[l.type]);const m=async h=>{h.preventDefault(),d(null),i(!0);try{if(l.amount<=0)throw new Error("Số tiền phải lớn hơn 0");if(l.type==="TRANSFER"){if(!l.fromAccountId||!l.toAccountId)throw new Error("Vui lòng chọn tài khoản nguồn và đích");if(l.fromAccountId===l.toAccountId)throw new Error("Tài khoản nguồn và đích phải khác nhau")}else if(l.type==="EXPENSE"||l.type==="INCOME"){if(!l.accountId)throw new Error("Vui lòng chọn tài khoản")}else if(l.type==="RECEIVABLE_SETTLEMENT"){if(!l.receivableId)throw new Error("Vui lòng chọn khoản cho vay cần ghi nhận")}else if(l.type==="LIABILITY_SETTLEMENT"&&!l.liabilityId)throw new Error("Vui lòng chọn khoản nợ cần ghi nhận");const f=l.occurredAt?vs(l.occurredAt):new Date().toISOString();l.type==="TRANSFER"?await ne.transactions.create({type:"TRANSFER",amount:l.amount,currency:l.currency,occurredAt:f,fromAccountId:l.fromAccountId,toAccountId:l.toAccountId,note:l.note}):l.type==="RECEIVABLE_SETTLEMENT"?await ne.transactions.create({type:"RECEIVABLE_SETTLEMENT",amount:l.amount,currency:l.currency,occurredAt:f,accountId:l.accountId||void 0,receivableId:l.receivableId,note:l.note}):l.type==="LIABILITY_SETTLEMENT"?await ne.transactions.create({type:"LIABILITY_SETTLEMENT",amount:l.amount,currency:l.currency,occurredAt:f,accountId:l.accountId||void 0,liabilityId:l.liabilityId,note:l.note}):await ne.transactions.create({type:l.type,amount:l.amount,currency:l.currency,occurredAt:f,accountId:l.accountId||void 0,categoryId:l.categoryId,note:l.note}),e("transactions")}catch(f){d(fe(f))}finally{i(!1)}},x=(h,f)=>{p(y=>({...y,[h]:f}))},b=()=>{e("transactions")};return r.jsxs(V0,{className:"add-transaction-wrapper",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("button",{className:"back-button",onClick:b,title:"Quay lại",children:r.jsx(H,{icon:"Back",size:20,color:"currentColor"})}),r.jsx("h1",{className:"title",children:"Thêm giao dịch"})]}),c&&r.jsx("div",{className:"error-message",children:c}),r.jsxs("form",{className:"form",onSubmit:m,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Loại giao dịch *"}),r.jsxs("select",{className:"select",value:l.type,onChange:h=>x("type",h.target.value),required:!0,children:[r.jsx("option",{value:"EXPENSE",children:"Chi tiêu"}),r.jsx("option",{value:"INCOME",children:"Thu nhập"}),r.jsx("option",{value:"TRANSFER",children:"Chuyển khoản"}),r.jsx("option",{value:"RECEIVABLE_SETTLEMENT",children:"Nhận tiền cho vay"}),r.jsx("option",{value:"LIABILITY_SETTLEMENT",children:"Trả nợ"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Số tiền *"}),r.jsx(ln,{className:"input",value:l.amount,onChange:h=>x("amount",h),placeholder:"0",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Tiền tệ"}),r.jsxs("select",{className:"select",value:l.currency,onChange:h=>x("currency",h.target.value),children:[r.jsx("option",{value:"VND",children:"VND (₫)"}),r.jsx("option",{value:"USD",children:"USD ($)"}),r.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),l.type==="TRANSFER"?r.jsxs("div",{className:"transfer-fields",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Tài khoản nguồn *"}),r.jsxs("select",{className:"select",value:l.fromAccountId||"",onChange:h=>x("fromAccountId",h.target.value),required:!0,children:[r.jsx("option",{value:"",children:"Chọn tài khoản nguồn"}),t.map(h=>r.jsxs("option",{value:h.id,children:[h.name," (",h.type,")"]},h.id))]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Tài khoản đích *"}),r.jsxs("select",{className:"select",value:l.toAccountId||"",onChange:h=>x("toAccountId",h.target.value),required:!0,children:[r.jsx("option",{value:"",children:"Chọn tài khoản đích"}),t.filter(h=>h.id!==l.fromAccountId).map(h=>r.jsxs("option",{value:h.id,children:[h.name," (",h.type,")"]},h.id))]})]})]}):l.type==="RECEIVABLE_SETTLEMENT"?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Tài khoản"}),r.jsxs("select",{className:"select",value:l.accountId||"",onChange:h=>x("accountId",h.target.value||void 0),children:[r.jsx("option",{value:"",children:"Không có tài khoản"}),t.map(h=>r.jsxs("option",{value:h.id,children:[h.name," (",h.type,")"]},h.id))]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Khoản cho vay *"}),r.jsxs("select",{className:"select",value:l.receivableId||"",onChange:h=>x("receivableId",h.target.value||void 0),required:!0,children:[r.jsx("option",{value:"",children:"Chọn khoản cho vay"}),o.map(h=>r.jsxs("option",{value:h.id,children:[h.counterpartyName," - Còn lại:"," ",new Intl.NumberFormat("vi-VN",{style:"currency",currency:h.currency}).format(h.remainingAmount)]},h.id))]})]})]}):l.type==="LIABILITY_SETTLEMENT"?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Tài khoản"}),r.jsxs("select",{className:"select",value:l.accountId||"",onChange:h=>x("accountId",h.target.value||void 0),children:[r.jsx("option",{value:"",children:"Không có tài khoản"}),t.map(h=>r.jsxs("option",{value:h.id,children:[h.name," (",h.type,")"]},h.id))]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Khoản nợ *"}),r.jsxs("select",{className:"select",value:l.liabilityId||"",onChange:h=>x("liabilityId",h.target.value||void 0),required:!0,children:[r.jsx("option",{value:"",children:"Chọn khoản nợ"}),s.map(h=>r.jsxs("option",{value:h.id,children:[h.counterpartyName," - Còn lại:"," ",new Intl.NumberFormat("vi-VN",{style:"currency",currency:h.currency}).format(h.remainingAmount)]},h.id))]})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Tài khoản *"}),r.jsxs("select",{className:"select",value:l.accountId,onChange:h=>x("accountId",h.target.value),required:!0,children:[r.jsx("option",{value:"",children:"Chọn tài khoản"}),t.map(h=>r.jsxs("option",{value:h.id,children:[h.name," (",h.type,")"]},h.id))]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Danh mục"}),r.jsxs("select",{className:"select",value:l.categoryId||"",onChange:h=>x("categoryId",h.target.value||void 0),children:[r.jsx("option",{value:"",children:"Không có"}),n.map(h=>r.jsx("option",{value:h.id,children:h.name},h.id))]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Ngày và giờ giao dịch"}),r.jsx("input",{className:"input",type:"datetime-local",value:l.occurredAt||"",onChange:h=>x("occurredAt",h.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Ghi chú"}),r.jsx(ct,{value:l.note||"",onChange:h=>x("note",h.target.value||void 0),placeholder:"Thêm ghi chú cho giao dịch này...",rows:3})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{className:"cancel-button",type:"button",onClick:()=>e("transactions"),disabled:a,children:"Hủy"}),r.jsx("button",{className:`submit-button ${a?"submit-button--loading":""}`,type:"submit",disabled:a,children:a?"Đang lưu...":"Lưu giao dịch"})]})]})]})},V0=K.div`
  max-width: 600px;
  margin: 0 auto;

  .page-header {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-bottom: ${({theme:e})=>e.spacing[8]};

    .back-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      color: ${({theme:e})=>e.colors.text.secondary};
      cursor: pointer;
      transition: all 0.2s ease;
      flex-shrink: 0;

      &:hover {
        border-color: ${({theme:e})=>e.colors.primary};
        color: ${({theme:e})=>e.colors.primary};
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.15)":"rgba(14, 165, 233, 0.1)"};
        transform: translateY(-1px);
      }
    }

    .title {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;
      flex: 1;
    }
  }

  .error-message {
    padding: ${({theme:e})=>e.spacing[3]};
    background: ${({theme:e})=>e.colors.error}20;
    border: 1px solid ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    color: ${({theme:e})=>e.colors.error};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[6]};

    .form-group {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[2]};

      .label {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        color: ${({theme:e})=>e.colors.text.primary};
      }

      .input, .select {
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        color: ${({theme:e})=>e.colors.text.primary};
        transition: all 0.2s ease;

        &:focus {
          outline: none;
          border-color: ${({theme:e})=>e.colors.primary};
          box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
        }
      }
    }

    .transfer-fields {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[4]};
      padding: ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.md};
    }

    .button-group {
      display: flex;
      gap: ${({theme:e})=>e.spacing[4]};
      margin-top: ${({theme:e})=>e.spacing[6]} !important;

      .submit-button, .cancel-button {
        flex: 1;
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .submit-button {
        background: ${({theme:e})=>e.colors.primary};
        color: white;
        border: none;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }

      .cancel-button {
        background: ${({theme:e})=>e.colors.surface};
        color: ${({theme:e})=>e.colors.text.primary};
        border: 1px solid ${({theme:e})=>e.colors.border};

        &:hover {
          border-color: ${({theme:e})=>e.colors.text.secondary};
        }
      }
    }
  }
`,B0=()=>{const{navigate:e}=nt(),{accounts:t}=lt(),{categories:n}=Wt(),[o,s]=u.useState(null),[a,i]=u.useState(!0),[c,d]=u.useState(!1),[l,p]=u.useState(!1),[m,x]=u.useState(null),[b,h]=u.useState(null);u.useEffect(()=>{const S=sessionStorage.getItem("editTransactionId");S?(h(S),sessionStorage.removeItem("editTransactionId")):(x("Không tìm thấy ID giao dịch"),i(!1))},[]);const[f,y]=u.useState({});u.useEffect(()=>{b&&w()},[b]);const w=async()=>{if(b){i(!0),x(null);try{const S=await ne.transactions.getById(b);s(S),y({type:S.type,amount:S.amount,currency:S.currency,accountId:S.accountId,categoryId:S.categoryId,fromAccountId:S.fromAccountId,toAccountId:S.toAccountId,occurredAt:In(S.occurredAt),note:S.note})}catch(S){x(fe(S))}finally{i(!1)}}},g=async S=>{S.preventDefault(),x(null),d(!0);try{if(!o)return;if((f.type||o.type)==="TRANSFER"){const E=f.fromAccountId||o.fromAccountId,v=f.toAccountId||o.toAccountId;if(!E||!v)throw new Error("Vui lòng chọn tài khoản nguồn và đích");if(E===v)throw new Error("Tài khoản nguồn và đích phải khác nhau")}const T={...f,occurredAt:f.occurredAt?vs(f.occurredAt):void 0};(f.type||o.type)==="TRANSFER"&&(T.accountId=void 0,T.categoryId=void 0),await ne.transactions.update(o.id,T),e("transactions")}catch(T){x(fe(T))}finally{d(!1)}},N=async()=>{if(!(!o||!window.confirm("Bạn có chắc muốn xóa giao dịch này?"))){p(!0),x(null);try{await ne.transactions.delete(o.id),e("transactions")}catch(S){x(fe(S))}finally{p(!1)}}},$=(S,T)=>{y(E=>({...E,[S]:T}))};return a?r.jsxs(xo,{className:"edit-transaction-wrapper",children:[r.jsx("h1",{className:"title",children:"Sửa giao dịch"}),r.jsx("div",{className:"loading-state",children:"Đang tải dữ liệu..."})]}):o?r.jsxs(xo,{className:"edit-transaction-wrapper",children:[r.jsx("h1",{className:"title",children:"Sửa giao dịch"}),m&&r.jsx("div",{className:"error-message",children:m}),r.jsxs("form",{className:"form",onSubmit:g,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Loại giao dịch *"}),r.jsxs("select",{className:"select",value:f.type||o.type,onChange:S=>$("type",S.target.value),required:!0,children:[r.jsx("option",{value:"EXPENSE",children:"Chi tiêu"}),r.jsx("option",{value:"INCOME",children:"Thu nhập"}),r.jsx("option",{value:"TRANSFER",children:"Chuyển khoản"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Số tiền *"}),r.jsx("input",{className:"input",type:"number",step:"0.01",min:"0",value:f.amount||o.amount,onChange:S=>$("amount",parseFloat(S.target.value)||0),required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Tiền tệ"}),r.jsxs("select",{className:"select",value:f.currency||o.currency,onChange:S=>$("currency",S.target.value),children:[r.jsx("option",{value:"VND",children:"VND (₫)"}),r.jsx("option",{value:"USD",children:"USD ($)"}),r.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),(f.type||o.type)==="TRANSFER"?r.jsxs("div",{className:"transfer-fields",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Tài khoản nguồn *"}),r.jsxs("select",{className:"select",value:f.fromAccountId||o.fromAccountId||"",onChange:S=>$("fromAccountId",S.target.value),required:!0,children:[r.jsx("option",{value:"",children:"Chọn tài khoản nguồn"}),t.map(S=>r.jsxs("option",{value:S.id,children:[S.name," (",S.type,")"]},S.id))]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Tài khoản đích *"}),r.jsxs("select",{className:"select",value:f.toAccountId||o.toAccountId||"",onChange:S=>$("toAccountId",S.target.value),required:!0,children:[r.jsx("option",{value:"",children:"Chọn tài khoản đích"}),t.filter(S=>S.id!==(f.fromAccountId||o.fromAccountId)).map(S=>r.jsxs("option",{value:S.id,children:[S.name," (",S.type,")"]},S.id))]})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Tài khoản *"}),r.jsx("select",{className:"select",value:f.accountId||o.accountId,onChange:S=>$("accountId",S.target.value),required:!0,children:t.map(S=>r.jsxs("option",{value:S.id,children:[S.name," (",S.type,")"]},S.id))})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Danh mục"}),r.jsxs("select",{className:"select",value:f.categoryId||o.categoryId||"",onChange:S=>$("categoryId",S.target.value||void 0),children:[r.jsx("option",{value:"",children:"Không có"}),n.map(S=>r.jsx("option",{value:S.id,children:S.name},S.id))]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Ngày và giờ giao dịch"}),r.jsx("input",{className:"input",type:"datetime-local",value:f.occurredAt||In(o.occurredAt),onChange:S=>$("occurredAt",S.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"label",children:"Ghi chú"}),r.jsx(ct,{value:f.note||o.note||"",onChange:S=>$("note",S.target.value||void 0),rows:3})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("button",{className:"cancel-button",type:"button",onClick:()=>e("transactions"),disabled:c||l,children:"Hủy"}),r.jsx("button",{className:`submit-button ${c?"submit-button--loading":""}`,type:"submit",disabled:c||l,children:c?"Đang lưu...":"Lưu thay đổi"})]}),r.jsxs("button",{className:"delete-button",type:"button",onClick:N,disabled:c||l,children:[r.jsx(H,{icon:l?"Loading":"Delete",size:18,color:"currentColor"}),r.jsx("span",{children:l?"Đang xóa...":"Xóa giao dịch"})]})]})]}):r.jsxs(xo,{className:"edit-transaction-wrapper",children:[r.jsx("h1",{className:"title",children:"Sửa giao dịch"}),r.jsx("div",{className:"error-message",children:"Không tìm thấy giao dịch"}),r.jsx("button",{className:"cancel-button",onClick:()=>e("transactions"),style:{marginTop:"16px"},children:"Quay lại"})]})},xo=K.div`
  max-width: 600px;
  margin: 0 auto;

  .title {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0 0 ${({theme:e})=>e.spacing[8]} 0;
  }

  .error-message {
    padding: ${({theme:e})=>e.spacing[3]};
    background: ${({theme:e})=>e.colors.error}20;
    border: 1px solid ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    color: ${({theme:e})=>e.colors.error};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  .cancel-button {
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
    background: ${({theme:e})=>e.colors.surface};
    color: ${({theme:e})=>e.colors.text.primary};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    font-size: ${({theme:e})=>e.typography.fontSize.base};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: ${({theme:e})=>e.colors.text.secondary};
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[6]};

    .form-group {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[2]};

      .label {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        color: ${({theme:e})=>e.colors.text.primary};
      }

      .input, .select {
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        color: ${({theme:e})=>e.colors.text.primary};
        transition: all 0.2s ease;

        &:focus {
          outline: none;
          border-color: ${({theme:e})=>e.colors.primary};
          box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
        }
      }
    }

    .transfer-fields {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[4]};
      padding: ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.md};
    }

    .button-group {
      display: flex;
      gap: ${({theme:e})=>e.spacing[4]};
      margin-top: ${({theme:e})=>e.spacing[6]} !important;

      .submit-button, .cancel-button {
        flex: 1;
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .submit-button {
        background: ${({theme:e})=>e.colors.primary};
        color: white;
        border: none;

        &:hover:not(:disabled) {
          opacity: 0.9;
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }
    }

    .delete-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${({theme:e})=>e.spacing[2]};
      padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
      background: ${({theme:e})=>e.colors.error};
      color: white;
      border: none;
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s ease;
      width: 100%;

      &:hover:not(:disabled) {
        opacity: 0.9;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    }
  }
`,dn=({title:e,actionLabel:t,actionIcon:n="Plus",onAction:o,className:s})=>r.jsxs(U0,{className:s,children:[r.jsx("h1",{className:"page-title",children:e}),t&&o&&r.jsxs(F,{onClick:o,className:"action-button",children:[r.jsx(H,{name:n,size:20}),r.jsx("span",{children:t})]})]}),U0=K.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};

  @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .page-title {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0;
    letter-spacing: -0.02em;
    line-height: 1.2;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
    }
  }

  .action-button {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
    background: ${({theme:e})=>e.colors.primary};
    color: white;
    border: none;
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    font-size: ${({theme:e})=>e.typography.fontSize.base};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.25)"};

    &:hover {
      background: ${({theme:e})=>e.colors.primary[600]||"#0284c7"};
      transform: translateY(-2px);
      box-shadow: 0 4px 16px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.4)":"rgba(14, 165, 233, 0.35)"};
    }

    &:active {
      transform: translateY(0);
    }
  }
`,ws=({icon:e="Inbox",title:t,description:n,actionLabel:o,onAction:s,className:a})=>r.jsxs(H0,{className:a,children:[r.jsx("div",{className:"empty-icon",children:r.jsx(H,{name:e,size:48})}),r.jsx("h3",{className:"empty-title",children:t}),n&&r.jsx("p",{className:"empty-description",children:n}),o&&s&&r.jsxs(F,{onClick:s,className:"empty-action",children:[r.jsx(H,{name:"Plus",size:18}),r.jsx("span",{children:o})]})]}),H0=K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[12]};
  text-align: center;
  min-height: 300px;

  .empty-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
    border-radius: 50%;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  .empty-title {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0 0 ${({theme:e})=>e.spacing[2]};
  }

  .empty-description {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
    margin: 0 0 ${({theme:e})=>e.spacing[6]};
    max-width: 300px;
  }

  .empty-action {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[2]};
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[5]};
    background: ${({theme:e})=>e.colors.primary};
    color: white;
    border: none;
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: ${({theme:e})=>e.colors.primary[600]||"#0284c7"};
      transform: translateY(-1px);
    }
  }
`,$s=({count:e=3,variant:t="grid",className:n})=>{const o=Array.from({length:e},(s,a)=>a);return t==="list"?r.jsx(Ga,{className:n,children:r.jsx("div",{className:"loading-list",children:o.map(s=>r.jsxs("div",{className:"loading-list-item",children:[r.jsx($e,{className:"skeleton-icon"}),r.jsxs("div",{className:"skeleton-content",children:[r.jsx($e,{className:"skeleton-title"}),r.jsx($e,{className:"skeleton-subtitle"})]}),r.jsx($e,{className:"skeleton-amount"})]},s))})}):r.jsx(Ga,{className:n,children:r.jsx("div",{className:"loading-grid",children:o.map(s=>r.jsxs("div",{className:"loading-card",children:[r.jsxs("div",{className:"loading-card-header",children:[r.jsx($e,{className:"skeleton-title"}),r.jsx($e,{className:"skeleton-badge"})]}),r.jsx($e,{className:"skeleton-amount"}),r.jsx($e,{className:"skeleton-detail"}),r.jsxs("div",{className:"loading-card-actions",children:[r.jsx($e,{className:"skeleton-button"}),r.jsx($e,{className:"skeleton-button"})]})]},s))})})},Ga=K.div`
  .loading-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({theme:e})=>e.spacing[4]};
  }

  .loading-card {
    padding: ${({theme:e})=>e.spacing[6]};
    background: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius["2xl"]};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      padding: ${({theme:e})=>e.spacing[8]};
    }

    .loading-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: ${({theme:e})=>e.spacing[4]};
    }

    .skeleton-title {
      width: 120px;
      height: 20px;
    }

    .skeleton-badge {
      width: 60px;
      height: 24px;
      border-radius: ${({theme:e})=>e.borderRadius.md};
    }

    .skeleton-amount {
      width: 150px;
      height: 32px;
      margin-bottom: ${({theme:e})=>e.spacing[2]};
    }

    .skeleton-detail {
      width: 100px;
      height: 16px;
      margin-bottom: ${({theme:e})=>e.spacing[4]};
    }

    .loading-card-actions {
      display: flex;
      gap: ${({theme:e})=>e.spacing[2]};
    }

    .skeleton-button {
      width: 80px;
      height: 36px;
      border-radius: ${({theme:e})=>e.borderRadius.lg};
    }
  }

  .loading-list {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};
  }

  .loading-list-item {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};
    padding: ${({theme:e})=>e.spacing[4]};
    background: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.lg};

    .skeleton-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .skeleton-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[1]};

      .skeleton-title {
        width: 60%;
        height: 18px;
      }

      .skeleton-subtitle {
        width: 40%;
        height: 14px;
      }
    }

    .skeleton-amount {
      width: 80px;
      height: 20px;
    }
  }
`;K.div`
  margin-bottom: ${({theme:e})=>e.spacing[4]};

  .error-alert {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
    background: ${({theme:e})=>e.colors.error}20;
    border: 1px solid ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};

    .error-icon {
      flex-shrink: 0;
      color: ${({theme:e})=>e.colors.error};
    }
  }

  .retry-button {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[1]};
    margin-left: auto;
    padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
    background: transparent;
    border: 1px solid currentColor;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
    color: ${({theme:e})=>e.colors.error};
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: ${({theme:e})=>e.colors.error};
      color: white;
    }
  }
`;const Ns=Fe`
  padding: ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
  box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)":"0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[8]};
  }
`,Ss=Fe`
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({theme:e})=>e.colors.primary},
      ${({theme:e})=>e.colors.primary}80
    );
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
    box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 4px 16px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)":"0 4px 16px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)"};
    transform: translateY(-2px);

    &::before {
      opacity: 1;
    }
  }
`,js=Fe`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};

  label {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  input,
  textarea,
  select {
    padding: ${({theme:e})=>e.spacing[3]};
    background: ${({theme:e})=>e.colors.background};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    font-size: ${({theme:e})=>e.typography.fontSize.base};
    color: ${({theme:e})=>e.colors.text.primary};
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.colors.primary};
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary}20;
    }

    &::placeholder {
      color: ${({theme:e})=>e.colors.text.secondary};
      opacity: 0.7;
    }
  }
`;Fe`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
`;const Es=Fe`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-top: ${({theme:e})=>e.spacing[6]};

  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`,ud=Fe`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
`;Fe`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
  background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.2)":"rgba(14, 165, 233, 0.1)"};
  color: ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;Fe`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing[4]};
`;Fe`
  font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  font-variant-numeric: tabular-nums;
`;Fe`
  color: ${({theme:e})=>e.colors.success||"#10b981"};
`;Fe`
  color: ${({theme:e})=>e.colors.error||"#ef4444"};
`;Fe`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
    color: ${({theme:e})=>e.colors.text.primary};
    border-color: ${({theme:e})=>e.colors.primary};
  }
`;Fe`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-top: ${({theme:e})=>e.spacing[4]};
`;Fe`
  padding: ${({theme:e})=>e.spacing[6]};

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[8]};
  }
`;Fe`
  padding: ${({theme:e})=>e.spacing[4]};
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[6]};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[8]};
  }
`;const q0=e=>({CASH:"Tiền mặt",BANK:"Ngân hàng",E_WALLET:"Ví điện tử",SAVINGS:"Tiết kiệm",INVESTMENT:"Đầu tư",POSTPAID:"Trả sau",OTHER:"Khác"})[e]||e,bo=e=>e.type==="POSTPAID",K0=({account:e,onClick:t,onEdit:n,onDelete:o})=>r.jsxs(Y0,{className:`account-card ${bo(e)?"account-card--postpaid":""}`,onClick:t,children:[r.jsxs("div",{className:"account-header",children:[r.jsx("h3",{className:"account-name",children:e.name}),r.jsx("span",{className:`account-type ${bo(e)?"account-type--postpaid":""}`,children:q0(e.type)})]}),bo(e)?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"account-balance account-balance--debt",children:[r.jsx("span",{className:"balance-label",children:"Dư nợ:"}),he(e.currentDebt??0,e.currency)]}),e.creditLimit!=null&&r.jsxs("div",{className:"account-limit",children:[r.jsx("span",{children:"Hạn mức còn lại: "}),he(e.availableLimit??0,e.currency),r.jsxs("span",{className:"limit-total",children:[" / ",he(e.creditLimit,e.currency)]})]})]}):r.jsx("div",{className:"account-balance",children:he(e.currentBalance??e.openingBalance??0,e.currency)}),r.jsxs("div",{className:"account-details",children:[r.jsxs("div",{children:["Tiền tệ: ",e.currency]}),e.note&&r.jsx("div",{children:e.note})]}),r.jsxs("div",{className:"account-actions",onClick:s=>s.stopPropagation(),children:[r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button",onClick:n,title:"Sửa",children:r.jsx(H,{icon:"Edit",size:16,color:"currentColor"})}),r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button",onClick:o,title:"Xóa",children:r.jsx(H,{icon:"Delete",size:16,color:"currentColor"})})]})]}),Y0=K(Ne)`
  ${Ns}
  ${Ss}

  &--postpaid {
    &::before {
      background: linear-gradient(
        90deg,
        ${({theme:e})=>e.colors.error||"#ef4444"},
        ${({theme:e})=>e.colors.error||"#ef4444"}80
      );
    }

    &:hover::before {
      opacity: 1;
    }
  }

  .account-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing[4]};

    .account-name {
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;
    }

    .account-type {
      padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
      background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.2)":"rgba(14, 165, 233, 0.1)"};
      color: ${({theme:e})=>e.colors.primary};
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.xs};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &--postpaid {
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(239, 68, 68, 0.2)":"rgba(239, 68, 68, 0.1)"};
        color: ${({theme:e})=>e.colors.error||"#ef4444"};
      }
    }
  }

  .account-balance {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin-bottom: ${({theme:e})=>e.spacing[2]};

    &--debt {
      color: ${({theme:e})=>e.colors.error||"#ef4444"};

      .balance-label {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        color: ${({theme:e})=>e.colors.text.secondary};
        margin-right: ${({theme:e})=>e.spacing[2]};
      }
    }
  }

  .account-limit {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
    margin-bottom: ${({theme:e})=>e.spacing[2]};

    .limit-total {
      color: ${({theme:e})=>e.colors.text.muted||e.colors.text.secondary};
      opacity: 0.7;
    }
  }

  .account-details {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .account-actions {
    display: flex;
    gap: ${({theme:e})=>e.spacing[2]};

    .icon-button {
      width: 36px;
      height: 36px;
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      color: ${({theme:e})=>e.colors.text.secondary};

      &:hover {
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
        color: ${({theme:e})=>e.colors.text.primary};
      }
    }
  }
`,Xa={name:"",type:"CASH",currency:"VND",openingBalance:0,creditLimit:null,note:""},G0=({open:e,onOpenChange:t,account:n,onSubmit:o,isSaving:s})=>{const[a,i]=u.useState(Xa);u.useEffect(()=>{e&&n?i({name:n.name,type:n.type,currency:n.currency,openingBalance:n.openingBalance,creditLimit:n.creditLimit??null,note:n.note||""}):e&&i(Xa)},[e,n]);const c=async l=>{l.preventDefault(),await o(a)},d=()=>{t(!1)};return r.jsx(gn,{open:e,onOpenChange:t,children:r.jsxs(X0,{className:"modal-content",children:[r.jsxs(Bt,{children:[r.jsx(Ht,{className:"modal-title",children:n?"Sửa tài khoản":"Thêm tài khoản"}),r.jsx(qt,{children:n?"Cập nhật thông tin tài khoản của bạn":"Thêm tài khoản mới vào danh sách"})]}),r.jsxs("form",{className:"form",onSubmit:c,children:[r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Tên tài khoản *"}),r.jsx(Z,{className:"input",type:"text",value:a.name,onChange:l=>i({...a,name:l.target.value}),placeholder:"Ví dụ: Ví tiền mặt, Tài khoản ngân hàng...",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Loại *"}),r.jsxs(ke,{value:a.type,onValueChange:l=>i({...a,type:l}),children:[r.jsx(Se,{className:"select",children:r.jsx(Ae,{})}),r.jsxs(je,{children:[r.jsx(U,{value:"CASH",children:"Tiền mặt"}),r.jsx(U,{value:"BANK",children:"Ngân hàng"}),r.jsx(U,{value:"E_WALLET",children:"Ví điện tử"}),r.jsx(U,{value:"SAVINGS",children:"Tiết kiệm"}),r.jsx(U,{value:"INVESTMENT",children:"Đầu tư"}),r.jsx(U,{value:"POSTPAID",children:"Trả sau"}),r.jsx(U,{value:"OTHER",children:"Khác"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Tiền tệ *"}),r.jsxs(ke,{value:a.currency,onValueChange:l=>i({...a,currency:l}),children:[r.jsx(Se,{className:"select",children:r.jsx(Ae,{})}),r.jsxs(je,{children:[r.jsx(U,{value:"VND",children:"VND (₫)"}),r.jsx(U,{value:"USD",children:"USD ($)"}),r.jsx(U,{value:"EUR",children:"EUR (€)"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:a.type==="POSTPAID"?"Dư nợ ban đầu":"Số dư ban đầu"}),r.jsx(Z,{className:"input",type:"number",step:"0.01",value:a.openingBalance,onChange:l=>i({...a,openingBalance:parseFloat(l.target.value)||0})})]}),a.type==="POSTPAID"&&r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Hạn mức (để trống = không giới hạn)"}),r.jsx(Z,{className:"input",type:"number",step:"0.01",value:a.creditLimit??"",onChange:l=>i({...a,creditLimit:l.target.value?parseFloat(l.target.value):null}),placeholder:"Ví dụ: 10000000"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Ghi chú"}),r.jsx(ct,{value:a.note||"",onChange:l=>i({...a,note:l.target.value}),placeholder:"Thêm ghi chú cho tài khoản này...",rows:3})]}),r.jsxs(Ut,{className:"button-group",children:[r.jsx(F,{variant:"outline",type:"button",onClick:d,disabled:s,className:"cancel-button",children:"Hủy"}),r.jsx(F,{type:"submit",disabled:s,className:`submit-button ${s?"submit-button--loading":""}`,children:s?"Đang lưu...":n?"Lưu thay đổi":"Tạo tài khoản"})]})]})]})})},X0=K(Vt)`
  max-width: 500px;

  .form {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-top: ${({theme:e})=>e.spacing[4]};
  }

  .form-group {
    ${js}
  }

  .button-group {
    ${Es}
    justify-content: flex-end;
  }

  .submit-button {
    min-width: 120px;

    &--loading {
      opacity: 0.7;
    }
  }
`,J0=()=>{const{accounts:e,isLoading:t,createAccount:n,updateAccount:o,deleteAccount:s}=lt(),[a,i]=u.useState(null),[c,d]=u.useState(!1),[l,p]=u.useState(null),[m,x]=u.useState(!1),b=u.useCallback(w=>{p(w||null),d(!0)},[]),h=u.useCallback(()=>{d(!1),p(null)},[]),f=u.useCallback(async w=>{i(null),x(!0);try{l?await o(l.id,w):await n(w),h()}catch(g){i(fe(g))}finally{x(!1)}},[l,o,n,h]),y=u.useCallback(async w=>{if(window.confirm(`Bạn có chắc muốn xóa tài khoản "${w.name}"?`))try{await s(w.id)}catch(g){i(fe(g))}},[s]);return t?r.jsxs(Ja,{className:"accounts-wrapper",children:[r.jsx(dn,{title:"Tài khoản"}),r.jsx($s,{count:6,variant:"grid"})]}):r.jsxs(Ja,{className:"accounts-wrapper",children:[r.jsx(dn,{title:"Tài khoản",actionLabel:"Thêm tài khoản",actionIcon:"Plus",onAction:()=>b()}),a&&r.jsx(At,{variant:"destructive",className:"error-alert",children:r.jsx(Rt,{children:a})}),e.length===0?r.jsx(ws,{icon:"Accounts",title:"Chưa có tài khoản nào",description:"Thêm tài khoản đầu tiên để bắt đầu quản lý tài chính",actionLabel:"Thêm tài khoản đầu tiên",onAction:()=>b()}):r.jsx("div",{className:"accounts-grid",children:e.map(w=>r.jsx(K0,{account:w,onClick:()=>b(w),onEdit:()=>b(w),onDelete:()=>y(w)},w.id))}),r.jsx(G0,{open:c,onOpenChange:w=>!w&&h(),account:l,onSubmit:f,isSaving:m})]})},Ja=K.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .error-alert {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .accounts-grid {
    ${ud}
  }
`,Z0=({category:e,onClick:t,onEdit:n,onDelete:o})=>{const{t:s}=Pe(),a=()=>{!e.isSystem&&t&&t()};return r.jsxs(Q0,{className:`category-card ${e.isSystem?"category-card--system":""}`,onClick:a,children:[e.isSystem&&r.jsx(Oe,{variant:"secondary",className:"system-badge",children:s("wallet.categories.system")||"Hệ thống"}),r.jsx("div",{className:"category-icon-wrapper",style:{"--category-color":e.color||"#0ea5e9"},children:e.icon?(()=>{const i=Oh(e.icon);return i?r.jsx(i,{size:40,color:e.color||"#0ea5e9",strokeWidth:2}):r.jsx("span",{className:"category-icon-emoji",children:e.icon})})():r.jsx(H,{icon:"Categories",size:40,color:e.color||"#0ea5e9"})}),r.jsx("div",{className:"category-name",children:e.name}),!e.isSystem&&r.jsxs("div",{className:"category-actions",onClick:i=>i.stopPropagation(),children:[r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button",onClick:n,title:s("wallet.common.edit"),children:r.jsx(H,{icon:"Edit",size:16,color:"currentColor"})}),r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button icon-button--danger",onClick:o,title:s("wallet.common.delete"),children:r.jsx(H,{icon:"Delete",size:16,color:"currentColor"})})]})]})},Q0=K(Ne)`
  ${Ns}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]};
  position: relative;

  &:not(.category-card--system) {
    ${Ss}
  }

  &.category-card--system {
    cursor: default;
    opacity: 0.8;
  }

  .system-badge {
    position: absolute;
    top: ${({theme:e})=>e.spacing[3]};
    right: ${({theme:e})=>e.spacing[3]};
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
  }

  .category-icon-wrapper {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
    border-radius: 50%;
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    transition: all 0.2s ease;

    .category-icon-emoji {
      font-size: 40px;
      line-height: 1;
    }
  }

  &:hover:not(.category-card--system) .category-icon-wrapper {
    background: color-mix(in srgb, var(--category-color, #0ea5e9) 15%, transparent);
  }

  .category-name {
    font-size: ${({theme:e})=>e.typography.fontSize.base};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .category-actions {
    display: flex;
    gap: ${({theme:e})=>e.spacing[2]};
    opacity: 0;
    transition: opacity 0.2s ease;

    .icon-button {
      width: 32px;
      height: 32px;
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      color: ${({theme:e})=>e.colors.text.secondary};

      &:hover {
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
        color: ${({theme:e})=>e.colors.text.primary};
      }

      &--danger:hover {
        background: ${({theme:e})=>e.colors.error}20;
        color: ${({theme:e})=>e.colors.error};
      }
    }
  }

  &:hover .category-actions {
    opacity: 1;
  }
`,Za={name:"",icon:"Categories",color:"#0ea5e9"},ev=({open:e,onOpenChange:t,category:n,onSubmit:o,isSaving:s})=>{const{t:a}=Pe(),[i,c]=u.useState(Za);u.useEffect(()=>{e&&n?c({name:n.name,icon:n.icon||"Categories",color:n.color||"#0ea5e9"}):e&&c(Za)},[e,n]);const d=async p=>{p.preventDefault(),await o(i)},l=()=>{t(!1)};return r.jsx(gn,{open:e,onOpenChange:t,children:r.jsxs(tv,{className:"modal-content",children:[r.jsxs(Bt,{children:[r.jsx(Ht,{className:"modal-title",children:a(n?"wallet.categories.edit":"wallet.categories.add")}),r.jsx(qt,{children:n?"Cập nhật thông tin danh mục":"Thêm danh mục mới vào danh sách"})]}),r.jsxs("form",{className:"form",onSubmit:d,children:[r.jsxs("div",{className:"form-group",children:[r.jsxs(M,{className:"label",children:[a("wallet.categories.name")||"Tên danh mục"," *"]}),r.jsx(Z,{className:"input",type:"text",value:i.name,onChange:p=>c({...i,name:p.target.value}),placeholder:a("wallet.categories.namePlaceholder")||"Ví dụ: Ăn uống, Mua sắm...",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:a("wallet.categories.icon")||"Icon"}),r.jsx(Z,{className:"input",type:"text",value:i.icon||"",onChange:p=>c({...i,icon:p.target.value}),placeholder:"Categories"}),r.jsx("div",{className:"form-hint",children:a("wallet.categories.iconHint")||"Nhập tên icon từ Lucide (ví dụ: Utensils, Car, ShoppingBag)"})]}),r.jsxs(Ut,{className:"button-group",children:[r.jsx(F,{variant:"outline",type:"button",onClick:l,disabled:s,className:"cancel-button",children:a("wallet.common.cancel")}),r.jsx(F,{type:"submit",disabled:s,className:`submit-button ${s?"submit-button--loading":""}`,children:s?a("wallet.common.saving")||"Đang lưu...":n?a("wallet.common.save"):a("wallet.categories.create")||"Tạo danh mục"})]})]})]})})},tv=K(Vt)`
  max-width: 500px;

  .form {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-top: ${({theme:e})=>e.spacing[4]};
  }

  .form-group {
    ${js}
  }

  .form-hint {
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
    color: ${({theme:e})=>e.colors.text.secondary};
    margin-top: ${({theme:e})=>e.spacing[1]};
  }

  .button-group {
    ${Es}
    justify-content: flex-end;
  }

  .submit-button {
    min-width: 120px;

    &--loading {
      opacity: 0.7;
    }
  }
`,nv=()=>{const{t:e}=Pe(),{categories:t,isLoading:n,createCategory:o,updateCategory:s,deleteCategory:a}=Wt(),[i,c]=u.useState(null),[d,l]=u.useState(!1),[p,m]=u.useState(null),[x,b]=u.useState(!1),h=u.useCallback(g=>{m(g||null),l(!0)},[]),f=u.useCallback(()=>{l(!1),m(null)},[]),y=u.useCallback(async g=>{c(null),b(!0);try{p?await s(p.id,g):await o(g),f()}catch(N){c(fe(N))}finally{b(!1)}},[p,s,o,f]),w=u.useCallback(async g=>{if(g.isSystem){alert(e("wallet.categories.cannotDeleteSystem")||"Không thể xóa danh mục hệ thống");return}if(window.confirm(e("wallet.categories.confirmDelete",{name:g.name})||`Bạn có chắc muốn xóa danh mục "${g.name}"?`))try{await a(g.id)}catch(N){c(fe(N))}},[a,e]);return n&&t.length===0?r.jsxs(Qa,{className:"categories-wrapper",children:[r.jsx(dn,{title:e("wallet.categories.title"),actionLabel:e("wallet.categories.add"),actionIcon:"Plus",onAction:()=>h()}),r.jsx($s,{count:8,variant:"grid"})]}):r.jsxs(Qa,{className:"categories-wrapper",children:[r.jsx(dn,{title:e("wallet.categories.title"),actionLabel:e("wallet.categories.add"),actionIcon:"Plus",onAction:()=>h()}),i&&r.jsx(At,{variant:"destructive",className:"error-alert",children:r.jsx(Rt,{children:i})}),t.length===0?r.jsx(ws,{icon:"Categories",title:e("wallet.categories.noCategories")||"Chưa có danh mục nào",description:"Thêm danh mục để phân loại giao dịch của bạn",actionLabel:e("wallet.categories.addFirst")||"Thêm danh mục đầu tiên",onAction:()=>h()}):r.jsx("div",{className:"categories-grid",children:t.map(g=>r.jsx(Z0,{category:g,onClick:()=>!g.isSystem&&h(g),onEdit:()=>h(g),onDelete:()=>w(g)},g.id))}),r.jsx(ev,{open:d,onOpenChange:g=>!g&&f(),category:p,onSubmit:y,isSaving:x})]})},Qa=K.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .error-alert {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: ${({theme:e})=>e.spacing[4]};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
`,rv=e=>{if(!e)return"";let t="";if(typeof e=="string")t=e;else if(typeof e=="object"&&e.year&&e.month)t=`${e.year}-${String(e.month).padStart(2,"0")}`;else return"";const[n,o]=t.split("-");return new Date(parseInt(n),parseInt(o)-1).toLocaleDateString("vi-VN",{month:"long",year:"numeric"})},ov=({budget:e,onClick:t})=>{const n=(e.percentageUsed??0)||0,o=(e.amount??0)||0,s=(e.usedAmount??0)||0,a=(e.remainingAmount??0)||0,i=()=>{if(n>=100)return"#ef4444";if(n>=80)return"#f59e0b"};return r.jsxs(sv,{onClick:t,children:[r.jsxs("div",{className:"budget-header",children:[r.jsx("h3",{className:"budget-month",children:rv(e.month)}),r.jsxs("div",{className:"budget-amount",children:[he(s)," / ",he(o)]})]}),r.jsx("div",{className:"progress-bar",children:r.jsx("div",{className:"progress-fill",style:{width:`${Math.max(0,Math.min(n,100))}%`,background:i()}})}),r.jsxs("div",{className:"budget-stats",children:[r.jsxs("span",{children:["Đã dùng: ",isNaN(n)?"0.0":n.toFixed(1),"%"]}),r.jsxs("span",{children:["Còn lại: ",he(a)]})]})]})},sv=K(Ne)`
  padding: ${({theme:e})=>e.spacing[6]};
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
  box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)":"0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
    box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 4px 16px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)":"0 4px 16px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)"};
    transform: translateY(-2px);
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing[8]};
  }

  .budget-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing[4]};

    .budget-month {
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;
    }

    .budget-amount {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
    }
  }

  .progress-bar {
    width: 100%;
    height: 10px;
    background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    overflow: hidden;
    margin: ${({theme:e})=>e.spacing[6]} 0;

    .progress-fill {
      height: 100%;
      background: ${({theme:e})=>e.colors.primary};
      transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: ${({theme:e})=>e.borderRadius.full};
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        animation: shimmer 2s infinite;
      }

      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    }
  }

  .budget-stats {
    display: flex;
    justify-content: space-between;
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,av=()=>{const[e,t]=u.useState([]),[n,o]=u.useState(!0),[s,a]=u.useState(null),i=u.useRef(!1);u.useEffect(()=>{i.current||(i.current=!0,c())},[]);const c=async()=>{o(!0),a(null);try{const l=await ne.budgets.getAll();t(l)}catch(l){a(fe(l))}finally{o(!1)}},d=()=>{alert("Tính năng thêm ngân sách sẽ được implement")};return n?r.jsxs(ei,{children:[r.jsx("h1",{className:"title",children:"Ngân sách"}),r.jsxs("div",{className:"loading-state",children:[r.jsx($e,{className:"h-8 w-48 mb-4"}),r.jsx($e,{className:"h-32 w-full"})]})]}):r.jsxs(ei,{children:[r.jsxs("div",{className:"header",children:[r.jsx("h1",{className:"title",children:"Ngân sách"}),r.jsxs(F,{onClick:d,className:"gap-2",children:[r.jsx(H,{icon:"Add",size:18,color:"currentColor"}),r.jsx("span",{children:"Thêm ngân sách"})]})]}),s&&r.jsx(At,{variant:"destructive",className:"mb-6",children:r.jsx(Rt,{children:s})}),e.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("p",{children:"Chưa có ngân sách nào"}),r.jsx(F,{onClick:d,className:"gap-2 mt-4",children:"Thêm ngân sách đầu tiên"})]}):r.jsx("div",{className:"budgets-list",children:e.map(l=>r.jsx(ov,{budget:l,onClick:()=>{}},l.id||(typeof l.month=="string"?l.month:"")))})]})},ei=K.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing[8]};
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing[4]};
  }

  .title {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0;
    letter-spacing: -0.02em;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
    }
  }

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[12]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};

    p {
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      margin: 0;
    }
  }

  .budgets-list {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,iv=e=>({OPEN:"Mở",PARTIALLY_PAID:"Đã thu một phần",PAID:"Đã thu đủ",OVERDUE:"Quá hạn"})[e]||e,cv=({receivable:e,onClick:t,onEdit:n,onDelete:o})=>r.jsxs(lv,{className:`receivable-card ${e.isOverdue?"receivable-card--overdue":""}`,onClick:t,children:[r.jsxs("div",{className:"receivable-header",children:[r.jsx("h3",{className:"receivable-name",children:e.counterpartyName}),r.jsx(Oe,{variant:e.status==="PAID"?"default":e.isOverdue?"destructive":"secondary",className:`status-badge status-badge--${e.status.toLowerCase()}`,children:iv(e.status)})]}),r.jsxs("div",{className:"receivable-details",children:[r.jsxs("div",{children:["Số tiền: ",he(e.amount,e.currency)]}),r.jsxs("div",{children:["Đã thu: ",he(e.paidAmount??0,e.currency)]}),r.jsxs("div",{children:["Còn lại: ",he(e.remainingAmount??0,e.currency)]}),e.dueAt&&r.jsxs("div",{children:["Hạn thu: ",Mn(e.dueAt)]}),e.note&&r.jsxs("div",{children:["Ghi chú: ",e.note]})]}),r.jsx("div",{className:"receivable-amount",children:he(e.remainingAmount??0,e.currency)}),r.jsxs("div",{className:"receivable-actions",onClick:s=>s.stopPropagation(),children:[r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button",onClick:n,title:"Sửa",children:r.jsx(H,{icon:"Edit",size:16,color:"currentColor"})}),r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button",onClick:o,title:"Xóa",children:r.jsx(H,{icon:"Delete",size:16,color:"currentColor"})})]})]}),lv=K(Ne)`
  padding: ${({theme:e})=>e.spacing[5]};
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}},
      ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}}80
    );
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(16, 185, 129, 0.3)":"rgba(16, 185, 129, 0.2)"};
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 4px 16px rgba(0, 0, 0, 0.4)":"0 4px 16px rgba(0, 0, 0, 0.1)"};

    &::before {
      opacity: 1;
    }
  }

  &--overdue {
    border-color: ${({theme:e})=>{var t;return((t=e.colors.warning)==null?void 0:t[500])||"#f59e0b"}}40;

    &::before {
      background: linear-gradient(
        90deg,
        ${({theme:e})=>{var t;return((t=e.colors.warning)==null?void 0:t[500])||"#f59e0b"}},
        ${({theme:e})=>{var t;return((t=e.colors.warning)==null?void 0:t[500])||"#f59e0b"}}80
      );
    }

    &:hover::before {
      opacity: 1;
    }
  }

  .receivable-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing[3]};

    .receivable-name {
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;
    }

    .status-badge {
      padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.xs};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &--paid {
        background: ${({theme:e})=>{var t;return(t=e.colors.success)!=null&&t[500]?`${e.colors.success[500]}20`:"#10b98120"}};
        color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
      }

      &--partially_paid {
        background: ${({theme:e})=>e.colors.primary}20;
        color: ${({theme:e})=>e.colors.primary};
      }

      &--overdue {
        background: ${({theme:e})=>{var t;return(t=e.colors.warning)!=null&&t[500]?`${e.colors.warning[500]}20`:"#f59e0b20"}};
        color: ${({theme:e})=>{var t;return((t=e.colors.warning)==null?void 0:t[500])||"#f59e0b"}};
      }
    }
  }

  .receivable-details {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
    margin-bottom: ${({theme:e})=>e.spacing[3]};
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[1]};
  }

  .receivable-amount {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .receivable-actions {
    display: flex;
    gap: ${({theme:e})=>e.spacing[2]};

    .icon-button {
      width: 36px;
      height: 36px;
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      color: ${({theme:e})=>e.colors.text.secondary};

      &:hover {
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
        color: ${({theme:e})=>e.colors.text.primary};
      }
    }
  }
`,dv=({open:e,onOpenChange:t,receivable:n,accounts:o,onSuccess:s})=>{var E;const[a,i]=u.useState(null),[c,d]=u.useState(!1),[l,p]=u.useState([]),[m,x]=u.useState(!1),[b,h]=u.useState(!1),[f,y]=u.useState({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",accountId:"",note:""}),[w,g]=u.useState({amount:0,accountId:((E=o[0])==null?void 0:E.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""}),N=u.useCallback(async v=>{x(!0);try{const k=await ne.settlements.getByReceivableId(v);p(k)}catch(k){console.error("Load settlements error:",k)}finally{x(!1)}},[]);u.useEffect(()=>{var v,k;e&&n?(y({counterpartyName:n.counterpartyName,amount:n.amount,currency:n.currency,occurredAt:n.occurredAt.split("T")[0],dueAt:n.dueAt?n.dueAt.split("T")[0]:"",accountId:n.accountId||"",note:n.note||""}),g({amount:0,accountId:((v=o[0])==null?void 0:v.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""}),N(n.id)):e&&(y({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",accountId:"",note:""}),p([]),g({amount:0,accountId:((k=o[0])==null?void 0:k.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""})),i(null)},[e,n,o,N]);const $=()=>{t(!1)},S=async()=>{if(n){if(w.amount<=0){i("Số tiền thu phải lớn hơn 0");return}i(null),h(!0);try{const v=w.occurredAt?new Date(w.occurredAt).toISOString():new Date().toISOString();await ne.transactions.create({type:"RECEIVABLE_SETTLEMENT",amount:w.amount,currency:n.currency,accountId:w.accountId||void 0,receivableId:n.id,occurredAt:v,note:w.note||void 0}),s(),$()}catch(v){i(fe(v))}finally{h(!1)}}},T=async v=>{v.preventDefault(),i(null),d(!0);try{if(n){const k={counterpartyName:f.counterpartyName,amount:f.amount,currency:f.currency,occurredAt:f.occurredAt?new Date(f.occurredAt).toISOString():void 0,dueAt:f.dueAt?new Date(f.dueAt).toISOString():void 0,accountId:f.accountId||void 0,note:f.note||void 0};await ne.receivables.update(n.id,k)}else{const k={counterpartyName:f.counterpartyName,amount:f.amount,currency:f.currency,occurredAt:f.occurredAt?new Date(f.occurredAt).toISOString():void 0,dueAt:f.dueAt?new Date(f.dueAt).toISOString():void 0,accountId:f.accountId||void 0,note:f.note||void 0};await ne.receivables.create(k)}s(),$()}catch(k){i(fe(k))}finally{d(!1)}};return r.jsx(gn,{open:e,onOpenChange:t,children:r.jsxs(uv,{children:[r.jsxs(Bt,{children:[r.jsx(Ht,{children:n?"Sửa khoản cho vay":"Thêm khoản cho vay"}),r.jsx(qt,{children:n?"Cập nhật thông tin khoản cho vay":"Thêm khoản cho vay mới vào danh sách"})]}),a&&r.jsx("div",{className:"error-message",children:a}),n&&r.jsxs("div",{className:"settlement-section",children:[r.jsx("div",{className:"settlement-header",children:r.jsx("h3",{className:"settlement-title",children:"Lịch sử thu nợ"})}),r.jsx("div",{className:"settlement-history",children:m?r.jsx("div",{className:"settlement-loading",children:"Đang tải..."}):l.length===0?r.jsx("div",{className:"settlement-empty",children:"Chưa có lần thu nợ nào."}):r.jsx("div",{className:"settlement-list",children:l.map(v=>r.jsxs("div",{className:"settlement-item",children:[r.jsxs("div",{className:"settlement-row",children:[r.jsx("span",{className:"settlement-label",children:"Số tiền"}),r.jsx("span",{className:"settlement-value",children:he(v.amount,v.currency)})]}),r.jsxs("div",{className:"settlement-row",children:[r.jsx("span",{className:"settlement-label",children:"Ngày"}),r.jsx("span",{className:"settlement-value",children:Mn(v.occurredAt)})]}),v.note&&r.jsxs("div",{className:"settlement-row",children:[r.jsx("span",{className:"settlement-label",children:"Ghi chú"}),r.jsx("span",{className:"settlement-value",children:v.note})]})]},v.id))})}),r.jsxs("div",{className:"settlement-form",children:[r.jsx("h4",{className:"settlement-form-title",children:"Thu nợ một phần"}),r.jsxs("div",{className:"settlement-form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Số tiền *"}),r.jsx(ln,{value:w.amount,onChange:v=>g({...w,amount:v}),placeholder:"0"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Tài khoản nhận"}),r.jsxs(ke,{value:w.accountId||void 0,onValueChange:v=>g({...w,accountId:v||""}),children:[r.jsx(Se,{children:r.jsx(Ae,{placeholder:"Không có tài khoản"})}),r.jsx(je,{children:o.map(v=>r.jsx(U,{value:v.id,children:v.name},v.id))})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Ngày thu"}),r.jsx(Z,{type:"date",value:w.occurredAt,onChange:v=>g({...w,occurredAt:v.target.value})})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Ghi chú"}),r.jsx(ct,{value:w.note,onChange:v=>g({...w,note:v.target.value}),placeholder:"Ví dụ: Thu lần 1, tiền mặt...",rows:2})]}),r.jsx(F,{type:"button",disabled:b,onClick:S,className:"w-full",children:b?"Đang ghi nhận...":"Ghi nhận lần thu này"})]})]}),r.jsxs("form",{onSubmit:T,children:[r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Tên con nợ *"}),r.jsx(Z,{type:"text",value:f.counterpartyName,onChange:v=>y({...f,counterpartyName:v.target.value}),placeholder:"Nhập tên con nợ",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Số tiền *"}),r.jsx(ln,{value:f.amount,onChange:v=>y({...f,amount:v}),placeholder:"0"})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Tiền tệ"}),r.jsxs(ke,{value:f.currency,onValueChange:v=>y({...f,currency:v}),children:[r.jsx(Se,{children:r.jsx(Ae,{})}),r.jsxs(je,{children:[r.jsx(U,{value:"VND",children:"VND (₫)"}),r.jsx(U,{value:"USD",children:"USD ($)"}),r.jsx(U,{value:"EUR",children:"EUR (€)"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Tài khoản"}),r.jsxs(ke,{value:f.accountId||void 0,onValueChange:v=>y({...f,accountId:v||""}),children:[r.jsx(Se,{children:r.jsx(Ae,{placeholder:"Không có tài khoản"})}),r.jsx(je,{children:o.map(v=>r.jsx(U,{value:v.id,children:v.name},v.id))})]})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Ngày cho vay"}),r.jsx(Z,{type:"date",value:f.occurredAt||"",onChange:v=>y({...f,occurredAt:v.target.value})})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Hạn thu"}),r.jsx(Z,{type:"date",value:f.dueAt||"",onChange:v=>y({...f,dueAt:v.target.value})})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Ghi chú"}),r.jsx(ct,{value:f.note||"",onChange:v=>y({...f,note:v.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),r.jsxs(Ut,{className:"button-group",children:[r.jsx(F,{variant:"outline",type:"button",onClick:$,disabled:c,children:"Hủy"}),r.jsx(F,{type:"submit",disabled:c,children:c?"Đang lưu...":n?"Lưu thay đổi":"Tạo khoản cho vay"})]})]})]})})},uv=K(Vt)`
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;

  .error-message {
    padding: ${({theme:e})=>e.spacing[3]};
    background: ${({theme:e})=>e.colors.error}20;
    color: ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }

  .form-group {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({theme:e})=>e.spacing[4]};
  }

  .button-group {
    margin-top: ${({theme:e})=>e.spacing[6]};
    display: flex;
    gap: ${({theme:e})=>e.spacing[3]};
    justify-content: flex-end;
  }

  .settlement-section {
    background: ${({theme:e})=>e.colors.background};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    padding: ${({theme:e})=>e.spacing[4]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};

    .settlement-header {
      margin-bottom: ${({theme:e})=>e.spacing[3]};

      .settlement-title {
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin: 0;
      }
    }

    .settlement-history {
      margin-bottom: ${({theme:e})=>e.spacing[4]};

      .settlement-loading,
      .settlement-empty {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};
        padding: ${({theme:e})=>e.spacing[3]};
        text-align: center;
      }

      .settlement-list {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[2]};

        .settlement-item {
          padding: ${({theme:e})=>e.spacing[3]};
          background: ${({theme:e})=>e.colors.surface};
          border-radius: ${({theme:e})=>e.borderRadius.md};

          .settlement-row {
            display: flex;
            justify-content: space-between;
            font-size: ${({theme:e})=>e.typography.fontSize.sm};

            .settlement-label {
              color: ${({theme:e})=>e.colors.text.secondary};
            }

            .settlement-value {
              color: ${({theme:e})=>e.colors.text.primary};
              font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
            }
          }
        }
      }
    }

    .settlement-form {
      border-top: 1px solid ${({theme:e})=>e.colors.border};
      padding-top: ${({theme:e})=>e.spacing[4]};

      .settlement-form-title {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin: 0 0 ${({theme:e})=>e.spacing[3]} 0;
      }

      .settlement-form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: ${({theme:e})=>e.spacing[3]};
        margin-bottom: ${({theme:e})=>e.spacing[3]};

        @media (max-width: 600px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`,pv=()=>{const{accounts:e}=lt(),[t,n]=u.useState([]),[o,s]=u.useState(null),[a,i]=u.useState(!0),[c,d]=u.useState(null),[l,p]=u.useState(!1),[m,x]=u.useState(null),[b,h]=u.useState(0),f=u.useCallback(async($=0)=>{i(!0),d(null);try{const S=await ne.receivables.getAll($,10);n(S.content),s(S)}catch(S){d(fe(S))}finally{i(!1)}},[]);u.useEffect(()=>{f(b)},[b,f]);const y=$=>{x($||null),p(!0)},w=()=>{p(!1),x(null)},g=()=>{f(b)},N=async $=>{if(window.confirm(`Bạn có chắc muốn xóa khoản cho vay "${$.counterpartyName}"?`))try{await ne.receivables.delete($.id),await f(b)}catch(S){d(fe(S))}};return a&&t.length===0?r.jsxs(ti,{children:[r.jsxs("div",{className:"header",children:[r.jsx("h1",{className:"title",children:"Cho vay"}),r.jsxs(F,{onClick:()=>y(),className:"gap-2",children:[r.jsx(H,{icon:"Add",size:18,color:"currentColor"}),r.jsx("span",{children:"Thêm khoản cho vay"})]})]}),r.jsxs("div",{className:"loading-state",children:[r.jsx($e,{className:"h-8 w-48 mb-4"}),r.jsx($e,{className:"h-32 w-full"})]})]}):r.jsxs(ti,{children:[r.jsxs("div",{className:"header",children:[r.jsx("h1",{className:"title",children:"Cho vay"}),r.jsxs(F,{onClick:()=>y(),className:"gap-2",children:[r.jsx(H,{icon:"Add",size:18,color:"currentColor"}),r.jsx("span",{children:"Thêm khoản cho vay"})]})]}),c&&r.jsx(At,{variant:"destructive",className:"mb-6",children:r.jsx(Rt,{children:c})}),t.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("p",{children:"Chưa có khoản cho vay nào"}),r.jsxs(F,{onClick:()=>y(),className:"gap-2",children:[r.jsx(H,{icon:"Add",size:18,color:"currentColor"}),r.jsx("span",{children:"Thêm khoản cho vay đầu tiên"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"receivables-grid",children:t.map($=>r.jsx(cv,{receivable:$,onClick:()=>y($),onEdit:()=>y($),onDelete:()=>N($)},$.id))}),o&&o.totalPages>1&&r.jsxs("div",{className:"pagination",children:[r.jsx(F,{variant:"outline",onClick:()=>h(o.page-1),disabled:!o.hasPrevious,children:"← Trước"}),r.jsxs("span",{children:["Trang ",o.page+1," / ",o.totalPages]}),r.jsx(F,{variant:"outline",onClick:()=>h(o.page+1),disabled:!o.hasNext,children:"Sau →"})]})]}),r.jsx(dv,{open:l,onOpenChange:w,receivable:m,accounts:e,onSuccess:g})]})},ti=K.div`
  max-width: 1200px;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing[4]};

    .title {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
      }
    }
  }

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[12]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};

    p {
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      margin: 0;
    }
  }

  .receivables-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({theme:e})=>e.spacing[4]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-top: ${({theme:e})=>e.spacing[8]};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,fv=e=>({OPEN:"Mở",PARTIALLY_PAID:"Đã trả một phần",PAID:"Đã trả đủ",OVERDUE:"Quá hạn"})[e]||e,hv=({liability:e,onClick:t,onEdit:n,onDelete:o})=>r.jsxs(mv,{className:`liability-card ${e.isOverdue?"liability-card--overdue":""}`,onClick:t,children:[r.jsxs("div",{className:"liability-header",children:[r.jsx("h3",{className:"liability-name",children:e.counterpartyName}),r.jsx(Oe,{variant:e.status==="PAID"?"default":e.isOverdue?"destructive":"secondary",className:`status-badge status-badge--${e.status.toLowerCase()}`,children:fv(e.status)})]}),r.jsxs("div",{className:"liability-details",children:[r.jsxs("div",{children:["Số tiền: ",he(e.amount,e.currency)]}),r.jsxs("div",{children:["Đã trả: ",he(e.paidAmount??0,e.currency)]}),r.jsxs("div",{children:["Còn lại: ",he(e.remainingAmount??0,e.currency)]}),e.dueAt&&r.jsxs("div",{children:["Hạn thanh toán: ",Mn(e.dueAt)]}),e.note&&r.jsxs("div",{children:["Ghi chú: ",e.note]})]}),r.jsx("div",{className:"liability-amount",children:he(e.remainingAmount??0,e.currency)}),r.jsxs("div",{className:"liability-actions",onClick:s=>s.stopPropagation(),children:[r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button",onClick:n,title:"Sửa",children:r.jsx(H,{icon:"Edit",size:16,color:"currentColor"})}),r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button",onClick:o,title:"Xóa",children:r.jsx(H,{icon:"Delete",size:16,color:"currentColor"})})]})]}),mv=K(Ne)`
  padding: ${({theme:e})=>e.spacing[5]};
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({theme:e})=>e.colors.primary},
      ${({theme:e})=>e.colors.primary}80
    );
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 4px 16px rgba(0, 0, 0, 0.4)":"0 4px 16px rgba(0, 0, 0, 0.1)"};

    &::before {
      opacity: 1;
    }
  }

  &--overdue {
    border-color: ${({theme:e})=>e.colors.error||"#ef4444"}40;

    &::before {
      background: linear-gradient(
        90deg,
        ${({theme:e})=>e.colors.error||"#ef4444"},
        ${({theme:e})=>e.colors.error||"#ef4444"}80
      );
    }

    &:hover::before {
      opacity: 1;
    }
  }

  .liability-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing[3]};

    .liability-name {
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;
    }

    .status-badge {
      padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.xs};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &--paid {
        background: ${({theme:e})=>{var t;return(t=e.colors.success)!=null&&t[500]?`${e.colors.success[500]}20`:"#10b98120"}};
        color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
      }

      &--partially_paid {
        background: ${({theme:e})=>{var t;return(t=e.colors.warning)!=null&&t[500]?`${e.colors.warning[500]}20`:"#f59e0b20"}};
        color: ${({theme:e})=>{var t;return((t=e.colors.warning)==null?void 0:t[500])||"#f59e0b"}};
      }

      &--overdue {
        background: ${({theme:e})=>e.colors.error}20;
        color: ${({theme:e})=>e.colors.error};
      }
    }
  }

  .liability-details {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
    margin-bottom: ${({theme:e})=>e.spacing[3]};
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[1]};
  }

  .liability-amount {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.error||"#ef4444"};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .liability-actions {
    display: flex;
    gap: ${({theme:e})=>e.spacing[2]};

    .icon-button {
      width: 36px;
      height: 36px;
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      color: ${({theme:e})=>e.colors.text.secondary};

      &:hover {
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
        color: ${({theme:e})=>e.colors.text.primary};
      }
    }
  }
`,gv=({open:e,onOpenChange:t,liability:n,accounts:o,onSuccess:s})=>{var E;const[a,i]=u.useState(null),[c,d]=u.useState(!1),[l,p]=u.useState([]),[m,x]=u.useState(!1),[b,h]=u.useState(!1),[f,y]=u.useState({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",accountId:"",note:""}),[w,g]=u.useState({amount:0,accountId:((E=o[0])==null?void 0:E.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""}),N=u.useCallback(async v=>{x(!0);try{const k=await ne.settlements.getByLiabilityId(v);p(k)}catch(k){console.error("Load settlements error:",k)}finally{x(!1)}},[]);u.useEffect(()=>{var v,k;e&&n?(y({counterpartyName:n.counterpartyName,amount:n.amount,currency:n.currency,occurredAt:n.occurredAt.split("T")[0],dueAt:n.dueAt?n.dueAt.split("T")[0]:"",accountId:n.accountId||"",note:n.note||""}),g({amount:0,accountId:((v=o[0])==null?void 0:v.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""}),N(n.id)):e&&(y({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",accountId:"",note:""}),p([]),g({amount:0,accountId:((k=o[0])==null?void 0:k.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""})),i(null)},[e,n,o,N]);const $=()=>{t(!1)},S=async()=>{if(n){if(w.amount<=0){i("Số tiền trả phải lớn hơn 0");return}i(null),h(!0);try{const v=w.occurredAt?new Date(w.occurredAt).toISOString():new Date().toISOString();await ne.transactions.create({type:"LIABILITY_SETTLEMENT",amount:w.amount,currency:n.currency,accountId:w.accountId||void 0,liabilityId:n.id,occurredAt:v,note:w.note||void 0}),s(),$()}catch(v){i(fe(v))}finally{h(!1)}}},T=async v=>{v.preventDefault(),i(null),d(!0);try{if(n){const k={counterpartyName:f.counterpartyName,amount:f.amount,currency:f.currency,occurredAt:f.occurredAt?new Date(f.occurredAt).toISOString():void 0,dueAt:f.dueAt?new Date(f.dueAt).toISOString():void 0,accountId:f.accountId||void 0,note:f.note||void 0};await ne.liabilities.update(n.id,k)}else{const k={counterpartyName:f.counterpartyName,amount:f.amount,currency:f.currency,occurredAt:f.occurredAt?new Date(f.occurredAt).toISOString():void 0,dueAt:f.dueAt?new Date(f.dueAt).toISOString():void 0,accountId:f.accountId||void 0,note:f.note||void 0};await ne.liabilities.create(k)}s(),$()}catch(k){i(fe(k))}finally{d(!1)}};return r.jsx(gn,{open:e,onOpenChange:t,children:r.jsxs(yv,{children:[r.jsxs(Bt,{children:[r.jsx(Ht,{children:n?"Sửa khoản nợ":"Thêm khoản nợ"}),r.jsx(qt,{children:n?"Cập nhật thông tin khoản nợ":"Thêm khoản nợ mới vào danh sách"})]}),a&&r.jsx("div",{className:"error-message",children:a}),n&&r.jsxs("div",{className:"settlement-section",children:[r.jsx("div",{className:"settlement-header",children:r.jsx("h3",{className:"settlement-title",children:"Lịch sử trả nợ"})}),r.jsx("div",{className:"settlement-history",children:m?r.jsx("div",{className:"settlement-loading",children:"Đang tải..."}):l.length===0?r.jsx("div",{className:"settlement-empty",children:"Chưa có lần trả nợ nào."}):r.jsx("div",{className:"settlement-list",children:l.map(v=>r.jsxs("div",{className:"settlement-item",children:[r.jsxs("div",{className:"settlement-row",children:[r.jsx("span",{className:"settlement-label",children:"Số tiền"}),r.jsx("span",{className:"settlement-value",children:he(v.amount,v.currency)})]}),r.jsxs("div",{className:"settlement-row",children:[r.jsx("span",{className:"settlement-label",children:"Ngày"}),r.jsx("span",{className:"settlement-value",children:Mn(v.occurredAt)})]}),v.note&&r.jsxs("div",{className:"settlement-row",children:[r.jsx("span",{className:"settlement-label",children:"Ghi chú"}),r.jsx("span",{className:"settlement-value",children:v.note})]})]},v.id))})}),r.jsxs("div",{className:"settlement-form",children:[r.jsx("h4",{className:"settlement-form-title",children:"Trả nợ một phần"}),r.jsxs("div",{className:"settlement-form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Số tiền *"}),r.jsx(ln,{value:w.amount,onChange:v=>g({...w,amount:v}),placeholder:"0"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Tài khoản trả"}),r.jsxs(ke,{value:w.accountId||void 0,onValueChange:v=>g({...w,accountId:v||""}),children:[r.jsx(Se,{children:r.jsx(Ae,{placeholder:"Không có tài khoản"})}),r.jsx(je,{children:o.map(v=>r.jsx(U,{value:v.id,children:v.name},v.id))})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Ngày trả"}),r.jsx(Z,{type:"date",value:w.occurredAt,onChange:v=>g({...w,occurredAt:v.target.value})})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Ghi chú"}),r.jsx(ct,{value:w.note,onChange:v=>g({...w,note:v.target.value}),placeholder:"Ví dụ: Trả lần 1, chuyển khoản...",rows:2})]}),r.jsx(F,{type:"button",disabled:b,onClick:S,className:"w-full",children:b?"Đang ghi nhận...":"Ghi nhận lần trả này"})]})]}),r.jsxs("form",{onSubmit:T,children:[r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Tên chủ nợ *"}),r.jsx(Z,{type:"text",value:f.counterpartyName,onChange:v=>y({...f,counterpartyName:v.target.value}),placeholder:"Nhập tên chủ nợ",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Số tiền *"}),r.jsx(ln,{value:f.amount,onChange:v=>y({...f,amount:v}),placeholder:"0"})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Tiền tệ"}),r.jsxs(ke,{value:f.currency,onValueChange:v=>y({...f,currency:v}),children:[r.jsx(Se,{children:r.jsx(Ae,{})}),r.jsxs(je,{children:[r.jsx(U,{value:"VND",children:"VND (₫)"}),r.jsx(U,{value:"USD",children:"USD ($)"}),r.jsx(U,{value:"EUR",children:"EUR (€)"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Tài khoản"}),r.jsxs(ke,{value:f.accountId||void 0,onValueChange:v=>y({...f,accountId:v||""}),children:[r.jsx(Se,{children:r.jsx(Ae,{placeholder:"Không có tài khoản"})}),r.jsx(je,{children:o.map(v=>r.jsx(U,{value:v.id,children:v.name},v.id))})]})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Ngày vay"}),r.jsx(Z,{type:"date",value:f.occurredAt||"",onChange:v=>y({...f,occurredAt:v.target.value})})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Hạn thanh toán"}),r.jsx(Z,{type:"date",value:f.dueAt||"",onChange:v=>y({...f,dueAt:v.target.value})})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{children:"Ghi chú"}),r.jsx(ct,{value:f.note||"",onChange:v=>y({...f,note:v.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),r.jsxs(Ut,{className:"button-group",children:[r.jsx(F,{variant:"outline",type:"button",onClick:$,disabled:c,children:"Hủy"}),r.jsx(F,{type:"submit",disabled:c,children:c?"Đang lưu...":n?"Lưu thay đổi":"Tạo khoản nợ"})]})]})]})})},yv=K(Vt)`
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;

  .error-message {
    padding: ${({theme:e})=>e.spacing[3]};
    background: ${({theme:e})=>e.colors.error}20;
    color: ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
  }

  .form-group {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({theme:e})=>e.spacing[4]};
  }

  .button-group {
    margin-top: ${({theme:e})=>e.spacing[6]};
    display: flex;
    gap: ${({theme:e})=>e.spacing[3]};
    justify-content: flex-end;
  }

  .settlement-section {
    background: ${({theme:e})=>e.colors.background};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    padding: ${({theme:e})=>e.spacing[4]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};

    .settlement-header {
      margin-bottom: ${({theme:e})=>e.spacing[3]};

      .settlement-title {
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin: 0;
      }
    }

    .settlement-history {
      margin-bottom: ${({theme:e})=>e.spacing[4]};

      .settlement-loading,
      .settlement-empty {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};
        padding: ${({theme:e})=>e.spacing[3]};
        text-align: center;
      }

      .settlement-list {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[2]};

        .settlement-item {
          padding: ${({theme:e})=>e.spacing[3]};
          background: ${({theme:e})=>e.colors.surface};
          border-radius: ${({theme:e})=>e.borderRadius.md};

          .settlement-row {
            display: flex;
            justify-content: space-between;
            font-size: ${({theme:e})=>e.typography.fontSize.sm};

            .settlement-label {
              color: ${({theme:e})=>e.colors.text.secondary};
            }

            .settlement-value {
              color: ${({theme:e})=>e.colors.text.primary};
              font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
            }
          }
        }
      }
    }

    .settlement-form {
      border-top: 1px solid ${({theme:e})=>e.colors.border};
      padding-top: ${({theme:e})=>e.spacing[4]};

      .settlement-form-title {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin: 0 0 ${({theme:e})=>e.spacing[3]} 0;
      }

      .settlement-form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: ${({theme:e})=>e.spacing[3]};
        margin-bottom: ${({theme:e})=>e.spacing[3]};

        @media (max-width: 600px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`,xv=()=>{const{accounts:e}=lt(),[t,n]=u.useState([]),[o,s]=u.useState(null),[a,i]=u.useState(!0),[c,d]=u.useState(null),[l,p]=u.useState(!1),[m,x]=u.useState(null),[b,h]=u.useState(0),f=u.useCallback(async($=0)=>{i(!0),d(null);try{const S=await ne.liabilities.getAll($,10);n(S.content),s(S)}catch(S){d(fe(S))}finally{i(!1)}},[]);u.useEffect(()=>{f(b)},[b,f]);const y=$=>{x($||null),p(!0)},w=()=>{p(!1),x(null)},g=()=>{f(b)},N=async $=>{if(window.confirm(`Bạn có chắc muốn xóa khoản nợ "${$.counterpartyName}"?`))try{await ne.liabilities.delete($.id),await f(b)}catch(S){d(fe(S))}};return a&&t.length===0?r.jsxs(ni,{children:[r.jsxs("div",{className:"header",children:[r.jsx("h1",{className:"title",children:"Nợ"}),r.jsxs(F,{onClick:()=>y(),className:"gap-2",children:[r.jsx(H,{icon:"Add",size:18,color:"currentColor"}),r.jsx("span",{children:"Thêm khoản nợ"})]})]}),r.jsxs("div",{className:"loading-state",children:[r.jsx($e,{className:"h-8 w-48 mb-4"}),r.jsx($e,{className:"h-32 w-full"})]})]}):r.jsxs(ni,{children:[r.jsxs("div",{className:"header",children:[r.jsx("h1",{className:"title",children:"Nợ"}),r.jsxs(F,{onClick:()=>y(),className:"gap-2",children:[r.jsx(H,{icon:"Add",size:18,color:"currentColor"}),r.jsx("span",{children:"Thêm khoản nợ"})]})]}),c&&r.jsx(At,{variant:"destructive",className:"mb-6",children:r.jsx(Rt,{children:c})}),t.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("p",{children:"Chưa có khoản nợ nào"}),r.jsxs(F,{onClick:()=>y(),className:"gap-2",children:[r.jsx(H,{icon:"Add",size:18,color:"currentColor"}),r.jsx("span",{children:"Thêm khoản nợ đầu tiên"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"liabilities-grid",children:t.map($=>r.jsx(hv,{liability:$,onClick:()=>y($),onEdit:()=>y($),onDelete:()=>N($)},$.id))}),o&&o.totalPages>1&&r.jsxs("div",{className:"pagination",children:[r.jsx(F,{variant:"outline",onClick:()=>h(o.page-1),disabled:!o.hasPrevious,children:"← Trước"}),r.jsxs("span",{children:["Trang ",o.page+1," / ",o.totalPages]}),r.jsx(F,{variant:"outline",onClick:()=>h(o.page+1),disabled:!o.hasNext,children:"Sau →"})]})]}),r.jsx(gv,{open:l,onOpenChange:w,liability:m,accounts:e,onSuccess:g})]})},ni=K.div`
  max-width: 1200px;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing[4]};

    .title {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
      }
    }
  }

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[12]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};

    p {
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      margin: 0;
    }
  }

  .liabilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({theme:e})=>e.spacing[4]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-top: ${({theme:e})=>e.spacing[8]};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,bv=e=>({CASH:"Tiền mặt",ITEM:"Vật phẩm",DEVICE:"Thiết bị",OTHER:"Khác"})[e]||e,vv=({asset:e,onClick:t,onEdit:n,onDelete:o})=>r.jsxs(wv,{className:"asset-card",onClick:t,children:[r.jsxs("div",{className:"asset-header",children:[r.jsx("h3",{className:"asset-name",children:e.name}),r.jsx(Oe,{variant:"secondary",className:`type-badge type-badge--${e.type.toLowerCase()}`,children:bv(e.type)})]}),r.jsxs("div",{className:"asset-details",children:[e.estimatedValue!==void 0&&r.jsxs("div",{children:["Giá trị ước tính: ",he(e.estimatedValue,e.currency)]}),e.acquiredAt&&r.jsxs("div",{children:["Ngày mua: ",Mn(e.acquiredAt)]}),e.note&&r.jsxs("div",{children:["Ghi chú: ",e.note]})]}),e.estimatedValue!==void 0&&r.jsx("div",{className:"asset-value",children:he(e.estimatedValue,e.currency)}),r.jsxs("div",{className:"asset-actions",onClick:s=>s.stopPropagation(),children:[r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button",onClick:n,title:"Sửa",children:r.jsx(H,{icon:"Edit",size:16,color:"currentColor"})}),r.jsx(F,{variant:"ghost",size:"icon",className:"icon-button",onClick:o,title:"Xóa",children:r.jsx(H,{icon:"Delete",size:16,color:"currentColor"})})]})]}),wv=K(Ne)`
  ${Ns}
  ${Ss}

  .asset-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:e})=>e.spacing[4]};

    .asset-name {
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;
    }

    .type-badge {
      font-size: ${({theme:e})=>e.typography.fontSize.xs};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .asset-details {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[1]};
  }

  .asset-value {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .asset-actions {
    display: flex;
    gap: ${({theme:e})=>e.spacing[2]};

    .icon-button {
      width: 36px;
      height: 36px;
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      color: ${({theme:e})=>e.colors.text.secondary};

      &:hover {
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
        color: ${({theme:e})=>e.colors.text.primary};
      }
    }
  }
`,ri={name:"",type:"OTHER",estimatedValue:void 0,currency:"VND",acquiredAt:"",note:""},$v=({open:e,onOpenChange:t,asset:n,onSubmit:o,isSaving:s})=>{const[a,i]=u.useState(ri);u.useEffect(()=>{e&&n?i({name:n.name,type:n.type,estimatedValue:n.estimatedValue,currency:n.currency,acquiredAt:n.acquiredAt?n.acquiredAt.split("T")[0]:"",note:n.note||""}):e&&i(ri)},[e,n]);const c=async l=>{l.preventDefault();const p={name:a.name,type:a.type,acquiredAt:a.acquiredAt?new Date(a.acquiredAt).toISOString():void 0,estimatedValue:a.estimatedValue||void 0,currency:a.currency,note:a.note||void 0};await o(p)},d=()=>{t(!1)};return r.jsx(gn,{open:e,onOpenChange:t,children:r.jsxs(Nv,{className:"modal-content",children:[r.jsxs(Bt,{children:[r.jsx(Ht,{className:"modal-title",children:n?"Sửa tài sản":"Thêm tài sản"}),r.jsx(qt,{children:n?"Cập nhật thông tin tài sản của bạn":"Thêm tài sản mới vào danh sách"})]}),r.jsxs("form",{className:"form",onSubmit:c,children:[r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Tên tài sản *"}),r.jsx(Z,{className:"input",type:"text",value:a.name,onChange:l=>i({...a,name:l.target.value}),placeholder:"Nhập tên tài sản",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Loại tài sản *"}),r.jsxs(ke,{value:a.type,onValueChange:l=>i({...a,type:l}),children:[r.jsx(Se,{className:"select",children:r.jsx(Ae,{})}),r.jsxs(je,{children:[r.jsx(U,{value:"CASH",children:"Tiền mặt"}),r.jsx(U,{value:"ITEM",children:"Vật phẩm"}),r.jsx(U,{value:"DEVICE",children:"Thiết bị"}),r.jsx(U,{value:"OTHER",children:"Khác"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Giá trị ước tính"}),r.jsx(Z,{className:"input",type:"number",step:"0.01",value:a.estimatedValue??"",onChange:l=>i({...a,estimatedValue:l.target.value?parseFloat(l.target.value):void 0}),placeholder:"Nhập giá trị ước tính"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Tiền tệ"}),r.jsxs(ke,{value:a.currency,onValueChange:l=>i({...a,currency:l}),children:[r.jsx(Se,{className:"select",children:r.jsx(Ae,{})}),r.jsxs(je,{children:[r.jsx(U,{value:"VND",children:"VND (₫)"}),r.jsx(U,{value:"USD",children:"USD ($)"}),r.jsx(U,{value:"EUR",children:"EUR (€)"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Ngày mua"}),r.jsx(Z,{className:"input",type:"date",value:a.acquiredAt||"",onChange:l=>i({...a,acquiredAt:l.target.value})})]}),r.jsxs("div",{className:"form-group",children:[r.jsx(M,{className:"label",children:"Ghi chú"}),r.jsx(ct,{value:a.note||"",onChange:l=>i({...a,note:l.target.value}),placeholder:"Thêm ghi chú cho tài sản này...",rows:3})]}),r.jsxs(Ut,{className:"button-group",children:[r.jsx(F,{variant:"outline",type:"button",onClick:d,disabled:s,className:"cancel-button",children:"Hủy"}),r.jsx(F,{type:"submit",disabled:s,className:`submit-button ${s?"submit-button--loading":""}`,children:s?"Đang lưu...":n?"Lưu thay đổi":"Tạo tài sản"})]})]})]})})},Nv=K(Vt)`
  max-width: 500px;

  .form {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-top: ${({theme:e})=>e.spacing[4]};
  }

  .form-group {
    ${js}
  }

  .button-group {
    ${Es}
    justify-content: flex-end;
  }

  .submit-button {
    min-width: 120px;

    &--loading {
      opacity: 0.7;
    }
  }
`,Sv=()=>{const[e,t]=u.useState(0),{assets:n,pagination:o,isLoading:s,createAsset:a,updateAsset:i,deleteAsset:c}=Xm({page:e,size:10}),{totalValue:d,isLoading:l}=Jm(),[p,m]=u.useState(null),[x,b]=u.useState(!1),[h,f]=u.useState(null),[y,w]=u.useState(!1),g=u.useCallback(T=>{f(T||null),b(!0)},[]),N=u.useCallback(()=>{b(!1),f(null)},[]),$=u.useCallback(async T=>{m(null),w(!0);try{h?await i(h.id,T):await a(T),N()}catch(E){m(fe(E))}finally{w(!1)}},[h,i,a,N]),S=u.useCallback(async T=>{if(window.confirm(`Bạn có chắc muốn xóa tài sản "${T.name}"?`))try{await c(T.id)}catch(E){m(fe(E))}},[c]);return s&&n.length===0?r.jsxs(oi,{className:"assets-wrapper",children:[r.jsx(dn,{title:"Tài sản",actionLabel:"Thêm tài sản",actionIcon:"Plus",onAction:()=>g()}),r.jsx($s,{count:6,variant:"grid"})]}):r.jsxs(oi,{className:"assets-wrapper",children:[r.jsx(dn,{title:"Tài sản",actionLabel:"Thêm tài sản",actionIcon:"Plus",onAction:()=>g()}),p&&r.jsx(At,{variant:"destructive",className:"error-alert",children:r.jsx(Rt,{children:p})}),!l&&d>0&&r.jsxs(Ne,{className:"summary-card",children:[r.jsx("h3",{className:"summary-title",children:"Tổng giá trị tài sản"}),r.jsx("div",{className:"summary-value",children:he(d)})]}),n.length===0?r.jsx(ws,{icon:"Assets",title:"Chưa có tài sản nào",description:"Thêm tài sản đầu tiên để theo dõi giá trị tài sản của bạn",actionLabel:"Thêm tài sản đầu tiên",onAction:()=>g()}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"assets-grid",children:n.map(T=>r.jsx(vv,{asset:T,onClick:()=>g(T),onEdit:()=>g(T),onDelete:()=>S(T)},T.id))}),o&&o.totalPages>1&&r.jsxs("div",{className:"pagination",children:[r.jsx(F,{variant:"outline",className:`pagination-button ${o.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>t(o.page-1),disabled:!o.hasPrevious,children:"← Trước"}),r.jsxs("span",{className:"pagination-info",children:["Trang ",o.page+1," / ",o.totalPages]}),r.jsx(F,{variant:"outline",className:`pagination-button ${o.hasNext?"":"pagination-button--disabled"}`,onClick:()=>t(o.page+1),disabled:!o.hasNext,children:"Sau →"})]})]}),r.jsx($v,{open:x,onOpenChange:T=>!T&&N(),asset:h,onSubmit:$,isSaving:y})]})},oi=K.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .error-alert {
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .summary-card {
    padding: ${({theme:e})=>e.spacing[6]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    background: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius["2xl"]};

    .summary-title {
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
      color: ${({theme:e})=>e.colors.text.secondary};
      margin: 0 0 ${({theme:e})=>e.spacing[2]};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .summary-value {
      font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
    }
  }

  .assets-grid {
    ${ud}
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-top: ${({theme:e})=>e.spacing[8]};

    .pagination-info {
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      color: ${({theme:e})=>e.colors.text.secondary};
    }

    .pagination-button {
      &--disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`,jv=()=>{const{user:e}=Rr(),[t,n]=u.useState(!1),o=async()=>{n(!0);try{alert("Tính năng sync đang được phát triển")}catch(s){console.error("Sync error:",s)}finally{n(!1)}};return r.jsxs(Ev,{className:"settings-wrapper",children:[r.jsx("h1",{className:"title",children:"Cài đặt"}),r.jsxs("section",{className:"section",children:[r.jsx("h2",{className:"section-title",children:"Thông tin tài khoản"}),r.jsx(Ne,{className:"card",children:r.jsxs(De,{className:"p-6",children:[r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Email"}),r.jsx("span",{className:"info-value",children:(e==null?void 0:e.email)||"-"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Họ tên"}),r.jsx("span",{className:"info-value",children:(e==null?void 0:e.fullName)||"-"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Trạng thái"}),r.jsx(Oe,{variant:(e==null?void 0:e.status)==="ACTIVE"?"default":"secondary",className:`status-badge status-badge--${(e==null?void 0:e.status)==="ACTIVE"?"active":"inactive"}`,children:(e==null?void 0:e.status)||"UNKNOWN"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Vai trò"}),r.jsx("span",{className:"info-value",children:(e==null?void 0:e.role)||"-"})]})]})})]}),r.jsxs("section",{className:"section",children:[r.jsx("h2",{className:"section-title",children:"Đồng bộ dữ liệu"}),r.jsx(Ne,{className:"card",children:r.jsxs(De,{className:"p-6",children:[r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Trạng thái"}),r.jsx(Oe,{variant:"default",className:"status-badge status-badge--active",children:"Đã kết nối"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"API Environment"}),r.jsx("span",{className:"info-value",children:kn.MODE})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"API Base URL"}),r.jsx("span",{className:"info-value",style:{fontSize:"12px",wordBreak:"break-all"},children:kn.BASE_URL})]}),r.jsx("div",{style:{marginTop:"16px"},children:r.jsx(F,{className:"sync-button",onClick:o,disabled:t,children:t?"Đang đồng bộ...":"🔄 Đồng bộ ngay"})})]})})]}),r.jsxs("section",{className:"section",children:[r.jsx("h2",{className:"section-title",children:"Quản lý"}),r.jsx(Ne,{className:"card",children:r.jsxs(De,{className:"p-6",children:[r.jsxs("div",{className:"info-row info-row--clickable",onClick:()=>{window.location.hash="#accounts"},children:[r.jsxs("span",{className:"info-label",style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(H,{icon:"Accounts",size:16,color:"currentColor"}),r.jsx("span",{children:"Tài khoản"})]}),r.jsx("span",{className:"info-value",children:"→"})]}),r.jsxs("div",{className:"info-row info-row--clickable",onClick:()=>{window.location.hash="#categories"},children:[r.jsxs("span",{className:"info-label",style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(H,{icon:"Categories",size:16,color:"currentColor"}),r.jsx("span",{children:"Danh mục"})]}),r.jsx("span",{className:"info-value",children:"→"})]})]})})]})]})},Ev=K.div`
  max-width: 800px;
  margin: 0 auto;

  .title {
    font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0 0 ${({theme:e})=>e.spacing[8]} 0;
  }

  .section {
    margin-bottom: ${({theme:e})=>e.spacing[8]};

    .section-title {
      font-size: ${({theme:e})=>e.typography.fontSize.xl};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0 0 ${({theme:e})=>e.spacing[4]} 0;
    }

    .card {
      padding: ${({theme:e})=>e.spacing[6]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      box-shadow: ${({theme:e})=>e.shadows.md};

      .info-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${({theme:e})=>e.spacing[3]} 0;
        border-bottom: 1px solid ${({theme:e})=>e.colors.border};

        &:last-child {
          border-bottom: none;
        }

        &--clickable {
          cursor: pointer;
        }

        .info-label {
          font-size: ${({theme:e})=>e.typography.fontSize.base};
          color: ${({theme:e})=>e.colors.text.secondary};
        }

        .info-value {
          font-size: ${({theme:e})=>e.typography.fontSize.base};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          color: ${({theme:e})=>e.colors.text.primary};
        }
      }

      .status-badge {
        padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[3]};
        border-radius: ${({theme:e})=>e.borderRadius.sm};
        font-size: ${({theme:e})=>e.typography.fontSize.xs};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};

        &--active {
          background: ${({theme:e})=>{var t;return(((t=e.colors.success)==null?void 0:t[500])||"#10b981")+"20"}};
          color: ${({theme:e})=>{var t;return((t=e.colors.success)==null?void 0:t[500])||"#10b981"}};
        }

        &--inactive {
          background: ${({theme:e})=>(e.colors.error||"#ef4444")+"20"};
          color: ${({theme:e})=>e.colors.error||"#ef4444"};
        }
      }
    }
  }
`;var Cs="ToastProvider",[Ts,Cv,Tv]=rl("Toast"),[pd]=Wn("Toast",[Tv]),[kv,Br]=pd(Cs),fd=e=>{const{__scopeToast:t,label:n="Notification",duration:o=5e3,swipeDirection:s="right",swipeThreshold:a=50,children:i}=e,[c,d]=u.useState(null),[l,p]=u.useState(0),m=u.useRef(!1),x=u.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Cs}\`. Expected non-empty \`string\`.`),r.jsx(Ts.Provider,{scope:t,children:r.jsx(kv,{scope:t,label:n,duration:o,swipeDirection:s,swipeThreshold:a,toastCount:l,viewport:c,onViewportChange:d,onToastAdd:u.useCallback(()=>p(b=>b+1),[]),onToastRemove:u.useCallback(()=>p(b=>b-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:x,children:i})})};fd.displayName=Cs;var hd="ToastViewport",Av=["F8"],Uo="toast.viewportPause",Ho="toast.viewportResume",md=u.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:o=Av,label:s="Notifications ({hotkey})",...a}=e,i=Br(hd,n),c=Cv(n),d=u.useRef(null),l=u.useRef(null),p=u.useRef(null),m=u.useRef(null),x=Ce(t,m,i.onViewportChange),b=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),h=i.toastCount>0;u.useEffect(()=>{const y=w=>{var N;o.length!==0&&o.every($=>w[$]||w.code===$)&&((N=m.current)==null||N.focus())};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[o]),u.useEffect(()=>{const y=d.current,w=m.current;if(h&&y&&w){const g=()=>{if(!i.isClosePausedRef.current){const T=new CustomEvent(Uo);w.dispatchEvent(T),i.isClosePausedRef.current=!0}},N=()=>{if(i.isClosePausedRef.current){const T=new CustomEvent(Ho);w.dispatchEvent(T),i.isClosePausedRef.current=!1}},$=T=>{!y.contains(T.relatedTarget)&&N()},S=()=>{y.contains(document.activeElement)||N()};return y.addEventListener("focusin",g),y.addEventListener("focusout",$),y.addEventListener("pointermove",g),y.addEventListener("pointerleave",S),window.addEventListener("blur",g),window.addEventListener("focus",N),()=>{y.removeEventListener("focusin",g),y.removeEventListener("focusout",$),y.removeEventListener("pointermove",g),y.removeEventListener("pointerleave",S),window.removeEventListener("blur",g),window.removeEventListener("focus",N)}}},[h,i.isClosePausedRef]);const f=u.useCallback(({tabbingDirection:y})=>{const g=c().map(N=>{const $=N.ref.current,S=[$,...Bv($)];return y==="forwards"?S:S.reverse()});return(y==="forwards"?g.reverse():g).flat()},[c]);return u.useEffect(()=>{const y=m.current;if(y){const w=g=>{var S,T,E;const N=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!N){const v=document.activeElement,k=g.shiftKey;if(g.target===y&&k){(S=l.current)==null||S.focus();return}const j=f({tabbingDirection:k?"backwards":"forwards"}),I=j.findIndex(R=>R===v);vo(j.slice(I+1))?g.preventDefault():k?(T=l.current)==null||T.focus():(E=p.current)==null||E.focus()}};return y.addEventListener("keydown",w),()=>y.removeEventListener("keydown",w)}},[c,f]),r.jsxs(zg,{ref:d,role:"region","aria-label":s.replace("{hotkey}",b),tabIndex:-1,style:{pointerEvents:h?void 0:"none"},children:[h&&r.jsx(qo,{ref:l,onFocusFromOutsideViewport:()=>{const y=f({tabbingDirection:"forwards"});vo(y)}}),r.jsx(Ts.Slot,{scope:n,children:r.jsx(ue.ol,{tabIndex:-1,...a,ref:x})}),h&&r.jsx(qo,{ref:p,onFocusFromOutsideViewport:()=>{const y=f({tabbingDirection:"backwards"});vo(y)}})]})});md.displayName=hd;var gd="ToastFocusProxy",qo=u.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:o,...s}=e,a=Br(gd,n);return r.jsx(xs,{tabIndex:0,...s,ref:t,style:{position:"fixed"},onFocus:i=>{var l;const c=i.relatedTarget;!((l=a.viewport)!=null&&l.contains(c))&&o()}})});qo.displayName=gd;var Un="Toast",Rv="toast.swipeStart",Iv="toast.swipeMove",Dv="toast.swipeCancel",Pv="toast.swipeEnd",yd=u.forwardRef((e,t)=>{const{forceMount:n,open:o,defaultOpen:s,onOpenChange:a,...i}=e,[c,d]=xr({prop:o,defaultProp:s??!0,onChange:a,caller:Un});return r.jsx(Vn,{present:n||c,children:r.jsx(zv,{open:c,...i,ref:t,onClose:()=>d(!1),onPause:Je(e.onPause),onResume:Je(e.onResume),onSwipeStart:ce(e.onSwipeStart,l=>{l.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ce(e.onSwipeMove,l=>{const{x:p,y:m}=l.detail.delta;l.currentTarget.setAttribute("data-swipe","move"),l.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${p}px`),l.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${m}px`)}),onSwipeCancel:ce(e.onSwipeCancel,l=>{l.currentTarget.setAttribute("data-swipe","cancel"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ce(e.onSwipeEnd,l=>{const{x:p,y:m}=l.detail.delta;l.currentTarget.setAttribute("data-swipe","end"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),l.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${p}px`),l.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${m}px`),d(!1)})})})});yd.displayName=Un;var[Ov,Lv]=pd(Un,{onClose(){}}),zv=u.forwardRef((e,t)=>{const{__scopeToast:n,type:o="foreground",duration:s,open:a,onClose:i,onEscapeKeyDown:c,onPause:d,onResume:l,onSwipeStart:p,onSwipeMove:m,onSwipeCancel:x,onSwipeEnd:b,...h}=e,f=Br(Un,n),[y,w]=u.useState(null),g=Ce(t,R=>w(R)),N=u.useRef(null),$=u.useRef(null),S=s||f.duration,T=u.useRef(0),E=u.useRef(S),v=u.useRef(0),{onToastAdd:k,onToastRemove:O}=f,L=Je(()=>{var W;(y==null?void 0:y.contains(document.activeElement))&&((W=f.viewport)==null||W.focus()),i()}),j=u.useCallback(R=>{!R||R===1/0||(window.clearTimeout(v.current),T.current=new Date().getTime(),v.current=window.setTimeout(L,R))},[L]);u.useEffect(()=>{const R=f.viewport;if(R){const W=()=>{j(E.current),l==null||l()},P=()=>{const B=new Date().getTime()-T.current;E.current=E.current-B,window.clearTimeout(v.current),d==null||d()};return R.addEventListener(Uo,P),R.addEventListener(Ho,W),()=>{R.removeEventListener(Uo,P),R.removeEventListener(Ho,W)}}},[f.viewport,S,d,l,j]),u.useEffect(()=>{a&&!f.isClosePausedRef.current&&j(S)},[a,S,f.isClosePausedRef,j]),u.useEffect(()=>(k(),()=>O()),[k,O]);const I=u.useMemo(()=>y?Sd(y):null,[y]);return f.viewport?r.jsxs(r.Fragment,{children:[I&&r.jsx(_v,{__scopeToast:n,role:"status","aria-live":o==="foreground"?"assertive":"polite",children:I}),r.jsx(Ov,{scope:n,onClose:L,children:Dn.createPortal(r.jsx(Ts.ItemSlot,{scope:n,children:r.jsx(Lg,{asChild:!0,onEscapeKeyDown:ce(c,()=>{f.isFocusedToastEscapeKeyDownRef.current||L(),f.isFocusedToastEscapeKeyDownRef.current=!1}),children:r.jsx(ue.li,{tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":f.swipeDirection,...h,ref:g,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ce(e.onKeyDown,R=>{R.key==="Escape"&&(c==null||c(R.nativeEvent),R.nativeEvent.defaultPrevented||(f.isFocusedToastEscapeKeyDownRef.current=!0,L()))}),onPointerDown:ce(e.onPointerDown,R=>{R.button===0&&(N.current={x:R.clientX,y:R.clientY})}),onPointerMove:ce(e.onPointerMove,R=>{if(!N.current)return;const W=R.clientX-N.current.x,P=R.clientY-N.current.y,B=!!$.current,A=["left","right"].includes(f.swipeDirection),q=["left","up"].includes(f.swipeDirection)?Math.min:Math.max,ye=A?q(0,W):0,xe=A?0:q(0,P),me=R.pointerType==="touch"?10:2,J={x:ye,y:xe},re={originalEvent:R,delta:J};B?($.current=J,or(Iv,m,re,{discrete:!1})):si(J,f.swipeDirection,me)?($.current=J,or(Rv,p,re,{discrete:!1}),R.target.setPointerCapture(R.pointerId)):(Math.abs(W)>me||Math.abs(P)>me)&&(N.current=null)}),onPointerUp:ce(e.onPointerUp,R=>{const W=$.current,P=R.target;if(P.hasPointerCapture(R.pointerId)&&P.releasePointerCapture(R.pointerId),$.current=null,N.current=null,W){const B=R.currentTarget,A={originalEvent:R,delta:W};si(W,f.swipeDirection,f.swipeThreshold)?or(Pv,b,A,{discrete:!0}):or(Dv,x,A,{discrete:!0}),B.addEventListener("click",q=>q.preventDefault(),{once:!0})}})})})}),f.viewport)})]}):null}),_v=e=>{const{__scopeToast:t,children:n,...o}=e,s=Br(Un,t),[a,i]=u.useState(!1),[c,d]=u.useState(!1);return Wv(()=>i(!0)),u.useEffect(()=>{const l=window.setTimeout(()=>d(!0),1e3);return()=>window.clearTimeout(l)},[]),c?null:r.jsx(Dr,{asChild:!0,children:r.jsx(xs,{...o,children:a&&r.jsxs(r.Fragment,{children:[s.label," ",n]})})})},Mv="ToastTitle",xd=u.forwardRef((e,t)=>{const{__scopeToast:n,...o}=e;return r.jsx(ue.div,{...o,ref:t})});xd.displayName=Mv;var Fv="ToastDescription",bd=u.forwardRef((e,t)=>{const{__scopeToast:n,...o}=e;return r.jsx(ue.div,{...o,ref:t})});bd.displayName=Fv;var vd="ToastAction",wd=u.forwardRef((e,t)=>{const{altText:n,...o}=e;return n.trim()?r.jsx(Nd,{altText:n,asChild:!0,children:r.jsx(ks,{...o,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${vd}\`. Expected non-empty \`string\`.`),null)});wd.displayName=vd;var $d="ToastClose",ks=u.forwardRef((e,t)=>{const{__scopeToast:n,...o}=e,s=Lv($d,n);return r.jsx(Nd,{asChild:!0,children:r.jsx(ue.button,{type:"button",...o,ref:t,onClick:ce(e.onClick,s.onClose)})})});ks.displayName=$d;var Nd=u.forwardRef((e,t)=>{const{__scopeToast:n,altText:o,...s}=e;return r.jsx(ue.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...s,ref:t})});function Sd(e){const t=[];return Array.from(e.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&t.push(o.textContent),Vv(o)){const s=o.ariaHidden||o.hidden||o.style.display==="none",a=o.dataset.radixToastAnnounceExclude==="";if(!s)if(a){const i=o.dataset.radixToastAnnounceAlt;i&&t.push(i)}else t.push(...Sd(o))}}),t}function or(e,t,n,{discrete:o}){const s=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),o?wc(s,a):s.dispatchEvent(a)}var si=(e,t,n=0)=>{const o=Math.abs(e.x),s=Math.abs(e.y),a=o>s;return t==="left"||t==="right"?a&&o>n:!a&&s>n};function Wv(e=()=>{}){const t=Je(e);_e(()=>{let n=0,o=0;return n=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(o)}},[t])}function Vv(e){return e.nodeType===e.ELEMENT_NODE}function Bv(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function vo(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var Uv=fd,jd=md,Ed=yd,Cd=xd,Td=bd,kd=wd,Ad=ks;const Hv=Uv,Rd=u.forwardRef(({className:e,...t},n)=>r.jsx(jd,{ref:n,className:se("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Rd.displayName=jd.displayName;const qv=Fn("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Id=u.forwardRef(({className:e,variant:t,...n},o)=>r.jsx(Ed,{ref:o,className:se(qv({variant:t}),e),...n}));Id.displayName=Ed.displayName;const Kv=u.forwardRef(({className:e,...t},n)=>r.jsx(kd,{ref:n,className:se("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));Kv.displayName=kd.displayName;const Dd=u.forwardRef(({className:e,...t},n)=>r.jsx(Ad,{ref:n,className:se("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:r.jsx(rs,{className:"h-4 w-4"})}));Dd.displayName=Ad.displayName;const Pd=u.forwardRef(({className:e,...t},n)=>r.jsx(Cd,{ref:n,className:se("text-sm font-semibold",e),...t}));Pd.displayName=Cd.displayName;const Od=u.forwardRef(({className:e,...t},n)=>r.jsx(Td,{ref:n,className:se("text-sm opacity-90",e),...t}));Od.displayName=Td.displayName;function Yv(){const{toasts:e}=dd();return r.jsxs(Hv,{children:[e.map(function({id:t,title:n,description:o,action:s,...a}){return r.jsxs(Id,{...a,children:[r.jsxs("div",{className:"grid gap-1",children:[n&&r.jsx(Pd,{children:n}),o&&r.jsx(Od,{children:o})]}),s,r.jsx(Dd,{})]},t)}),r.jsx(Rd,{})]})}const Ld=u.createContext(null),nt=()=>{const e=u.useContext(Ld);if(!e)throw new Error("useWalletAppRouter must be used within WalletAppRouter");return e},Gv=()=>{const{isAuthenticated:e,isLoading:t}=Rr(),n=()=>{if(typeof window<"u"){const l=window.location.hash.slice(1);if(["login","register","verify-email","dashboard","transactions","transactions/add","transactions/edit","accounts","categories","budgets","receivables","liabilities","assets","settings"].includes(l))return l}return e?"dashboard":"login"},[o,s]=u.useState(n);u.useEffect(()=>{typeof window<"u"&&(window.location.hash=o)},[o]),u.useEffect(()=>{const l=()=>{const p=window.location.hash.slice(1);["login","register","verify-email","dashboard","transactions","transactions/add","transactions/edit","accounts","categories","budgets","receivables","liabilities","assets","settings"].includes(p)&&s(p)};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]);const a=l=>{s(l)};u.useEffect(()=>{const l=["login","register","verify-email"];!e&&!l.includes(o)?s("login"):e&&l.includes(o)&&s("dashboard")},[e,o]);const i=()=>{switch(o){case"login":return r.jsx(Jh,{});case"register":return r.jsx(Qh,{});case"verify-email":return r.jsx(tm,{});case"dashboard":return r.jsx(Ka,{});case"transactions":return r.jsx(M0,{});case"transactions/add":return r.jsx(W0,{});case"transactions/edit":return r.jsx(B0,{});case"accounts":return r.jsx(J0,{});case"categories":return r.jsx(nv,{});case"budgets":return r.jsx(av,{});case"receivables":return r.jsx(pv,{});case"liabilities":return r.jsx(xv,{});case"assets":return r.jsx(Sv,{});case"settings":return r.jsx(jv,{});default:return r.jsx(Ka,{})}};if(t)return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0a0a0a"},children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[r.jsx("div",{style:{width:"48px",height:"48px",border:"3px solid rgba(14, 165, 233, 0.2)",borderTopColor:"#0ea5e9",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),r.jsx("style",{children:`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}),r.jsx("span",{style:{color:"#a3a3a3",fontSize:"14px",fontWeight:500},children:"Đang tải..."})]})});const d=["login","register","verify-email"].includes(o);return r.jsxs(Ld.Provider,{value:{currentRoute:o,navigate:a},children:[d?i():r.jsx(Gh,{children:i()}),r.jsx(Yv,{})]})},gw=()=>r.jsx($u,{value:Gm,children:r.jsx(lf,{children:r.jsx(Gv,{})})});export{gw as default,nt as useWalletAppRouter};
