import{r as s,j as t,t as Te,w as H,c as pt,l as ni,u as Pe,d as le,a as go,b as Ae,e as ai,s as si,h as ne,R as or,f as Dt,g as ii,i as Ke,k as bn,m as li,n as tt,o as ci,p as vn,q as di,v as ui,x as pi,A as Sr}from"./index-CVIT1BGV.js";const wn=s.createContext(null),mo=()=>{const e=s.useContext(wn);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},gi=({children:e})=>{const[o,r]=s.useState(null),[n,a]=s.useState(!0),i=p=>{try{const y=p.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),b=decodeURIComponent(atob(y).split("").map(k=>"%"+("00"+k.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(b)}catch(g){return console.error("Error decoding JWT:",g),null}};s.useEffect(()=>{(async()=>{const g=Te.getAccessToken();if(g)try{const y=i(g);if(y&&y.exp){const b=y.exp*1e3;if(Date.now()<b)r({id:y.sub||y.userId||"",email:y.email||"",fullName:y.fullName||y.name||"User",status:y.status||"ACTIVE",role:y.role||"USER"});else{const k=Te.getRefreshToken();if(k)try{await H.auth.refreshToken(k);const f=Te.getAccessToken();if(f){const x=i(f);x&&r({id:x.sub||x.userId||"",email:x.email||"",fullName:x.fullName||x.name||"User",status:x.status||"ACTIVE",role:x.role||"USER"})}}catch{Te.clearTokens(),r(null)}else Te.clearTokens(),r(null)}}}catch(y){console.error("Auth check error:",y),Te.clearTokens(),r(null)}a(!1)})()},[]);const d={user:o,isAuthenticated:!!o,isLoading:n,login:async p=>{var g,y,b,k,f;try{const x=await H.auth.login(p),w=Te.getAccessToken();if(w){const h=i(w);r(h?{id:((g=x.user)==null?void 0:g.id)||h.sub||h.userId||"",email:((y=x.user)==null?void 0:y.email)||h.email||p.email,fullName:((b=x.user)==null?void 0:b.fullName)||h.fullName||h.name||"User",status:((k=x.user)==null?void 0:k.status)||h.status||"ACTIVE",role:((f=x.user)==null?void 0:f.role)||h.role||"USER"}:x.user)}else r(x.user)}catch(x){throw x}},logout:async()=>{try{await H.auth.logout()}catch(p){console.error("Logout error:",p)}finally{Te.clearTokens(),r(null)}},refreshAuth:async()=>{const p=Te.getAccessToken();if(!p){r(null);return}try{const g=i(p);if(g&&g.exp){const y=g.exp*1e3;if(Date.now()<y)r({id:g.sub||g.userId||"",email:g.email||"",fullName:g.fullName||g.name||"User",status:g.status||"ACTIVE",role:g.role||"USER"});else{const b=Te.getRefreshToken();if(b){await H.auth.refreshToken(b);const k=Te.getAccessToken();if(k){const f=i(k);f&&r({id:f.sub||f.userId||"",email:f.email||"",fullName:f.fullName||f.name||"User",status:f.status||"ACTIVE",role:f.role||"USER"})}}else throw new Error("No refresh token")}}}catch(g){throw Te.clearTokens(),r(null),g}}};return t.jsx(wn.Provider,{value:d,children:e})};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fi=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,r,n)=>n?n.toUpperCase():r.toLowerCase()),kr=e=>{const o=fi(e);return o.charAt(0).toUpperCase()+o.slice(1)},$n=(...e)=>e.filter((o,r,n)=>!!o&&o.trim()!==""&&n.indexOf(o)===r).join(" ").trim(),hi=e=>{for(const o in e)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=s.forwardRef(({color:e="currentColor",size:o=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:i,iconNode:c,...l},u)=>s.createElement("svg",{ref:u,...yi,width:o,height:o,stroke:e,strokeWidth:n?Number(r)*24/Number(o):r,className:$n("lucide",a),...!i&&!hi(l)&&{"aria-hidden":"true"},...l},[...c.map(([d,p])=>s.createElement(d,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=(e,o)=>{const r=s.forwardRef(({className:n,...a},i)=>s.createElement(xi,{ref:i,iconNode:o,className:$n(`lucide-${mi(kr(e))}`,`lucide-${e}`,n),...a}));return r.displayName=kr(e),r};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]],vi=te("arrow-down-left",bi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],$i=te("arrow-up-right",wi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Ni=te("book",ji);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],ki=te("car",Si);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],jn=te("check",Ci);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],rr=te("chevron-down",Ei);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Cr=te("chevron-left",Ti);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ri=te("chevron-right",Ai);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Nn=te("chevron-up",Ii);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Di=te("circle-alert",zi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Oi=te("circle-check-big",Pi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Li=te("circle-plus",Mi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Fi=te("dollar-sign",_i);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Vi=te("ellipsis",Wi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Hi=te("file-text",Bi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Yi=te("film",Ui);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Ki=te("folder-open",qi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Xi=te("gift",Gi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Qi=te("heart",Zi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Er=te("house",Ji);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],tl=te("layout-dashboard",el);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Tr=te("loader-circle",ol);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],nl=te("log-out",rl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],sl=te("menu",al);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ll=te("moon",il);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]],dl=te("piggy-bank",cl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],pl=te("plus",ul);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],ml=te("receipt",gl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],hl=te("search",fl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],xl=te("settings",yl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],vl=te("shopping-bag",bl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],$l=te("sparkles",wl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Nl=te("square-pen",jl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],kl=te("sun",Sl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],El=te("trash-2",Cl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Al=te("trending-up",Tl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Il=te("user",Rl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],Dl=te("utensils",zl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],Ar=te("wallet",Pl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nr=te("x",Ol),Sn={Dashboard:tl,Transactions:ml,Accounts:Ar,Categories:Ki,Budgets:dl,Receivables:$i,Liabilities:vi,Assets:Er,Settings:xl,Menu:sl,Add:pl,Logout:nl,User:Il,Back:Cr,ChevronLeft:Cr,ChevronRight:Ri,ChevronUp:Nn,ChevronDown:rr,Edit:Nl,Delete:El,Close:nr,Check:jn,CheckCircle:Oi,Alert:Di,Loading:Tr,Loader:Tr,Sparkles:$l,Wallet:Ar,Home:Er,Sun:kl,Moon:ll,Search:hl,Utensils:Dl,Car:ki,ShoppingBag:vl,Film:Yi,Heart:Qi,Book:Ni,FileText:Hi,MoreHorizontal:Vi,DollarSign:Fi,Gift:Xi,TrendingUp:Al,PlusCircle:Li},Ml=e=>Sn[e]||null,X=({icon:e,size:o=20,className:r="",color:n})=>{const a=Sn[e];return a?t.jsx(a,{size:o,className:r,color:n,strokeWidth:2}):null},ar=ni`
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
    background: ${({theme:e})=>e.colors.background==="#0a0a0a"||typeof e.colors.background=="string"&&e.colors.background.includes("0a0a0a")?pt.neutral[600]:pt.neutral[400]};
    border-radius: 4px;
    transition: background 0.2s ease;

    &:hover {
      background: ${({theme:e})=>e.colors.background==="#0a0a0a"||typeof e.colors.background=="string"&&e.colors.background.includes("0a0a0a")?pt.neutral[500]:pt.neutral[500]};
    }
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${({theme:e})=>`${e.colors.background==="#0a0a0a"||typeof e.colors.background=="string"&&e.colors.background.includes("0a0a0a")?pt.neutral[600]:pt.neutral[400]} ${e.colors.background}`};
`,Ll=({isOpen:e,onToggle:o})=>{const{t:r}=Pe(),{currentRoute:n,navigate:a}=Ve(),i=[{route:"dashboard",icon:"Dashboard",label:r("wallet.navigation.dashboard"),section:"main"},{route:"transactions",icon:"Transactions",label:r("wallet.navigation.transactions"),section:"main"},{route:"accounts",icon:"Accounts",label:r("wallet.navigation.accounts"),section:"main"},{route:"categories",icon:"Categories",label:r("wallet.navigation.categories"),section:"main"},{route:"budgets",icon:"Budgets",label:r("wallet.navigation.budgets"),section:"main"},{route:"receivables",icon:"Receivables",label:r("wallet.navigation.receivables"),section:"debts"},{route:"liabilities",icon:"Liabilities",label:r("wallet.navigation.liabilities"),section:"debts"},{route:"assets",icon:"Assets",label:r("wallet.navigation.assets"),section:"assets"},{route:"settings",icon:"Settings",label:r("wallet.navigation.settings"),section:"settings"}],c=d=>{a(d),o()},l=i.reduce((d,p)=>{const g=p.section||"other";return d[g]||(d[g]=[]),d[g].push(p),d},{}),u={main:r("wallet.sidebar.main"),debts:r("wallet.sidebar.debts"),assets:r("wallet.sidebar.assets"),settings:r("wallet.sidebar.settings")};return t.jsxs(t.Fragment,{children:[t.jsx(Wl,{className:`overlay ${e?"overlay--open":""}`,onClick:o}),t.jsx(Fl,{className:`sidebar-menu-wrapper ${e?"sidebar-menu-wrapper--open":""}`,children:t.jsx("ul",{className:"menu-list",children:Object.entries(l).map(([d,p])=>t.jsxs("div",{children:[t.jsx("div",{className:"menu-section",children:u[d]||d}),p.map(g=>t.jsx("li",{className:"menu-item",children:t.jsxs("button",{className:`menu-link ${n===g.route?"menu-link--active":""}`,onClick:()=>c(g.route),children:[t.jsx("div",{className:"menu-icon-wrapper",children:t.jsx(X,{icon:g.icon,size:20,color:"currentColor"})}),t.jsx("span",{className:"menu-label",children:g.label})]})},g.route))]},d))})})]})},_l=({onClick:e})=>t.jsx(Vl,{className:"menu-toggle-button-wrapper",onClick:e,"aria-label":"Toggle menu",children:t.jsx(X,{icon:"Menu",size:20,color:"currentColor"})}),Fl=le.aside`
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
  ${ar}

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
      margin-top: ${({theme:e})=>e.spacing[6]};
      margin-bottom: ${({theme:e})=>e.spacing[3]};
      padding: 0 ${({theme:e})=>e.spacing[4]};
      font-size: ${({theme:e})=>e.typography.fontSize.xs};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      color: ${({theme:e})=>e.colors.text.muted};
      text-transform: uppercase;
      letter-spacing: 0.8px;
      
      &:first-child {
        margin-top: 0;
      }
    }
  }
`,Wl=le.div`
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
`,Vl=le.button`
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
`,Bl=()=>{const e=go(),o=Ae(n=>n.theme.mode),r=()=>{e(ai())};return t.jsx(Hl,{className:"theme-toggle-wrapper",onClick:r,"aria-label":o==="dark"?"Switch to light mode":"Switch to dark mode",children:t.jsx(X,{icon:o==="dark"?"Moon":"Sun",size:20,color:"currentColor"})})},Hl=le.button`
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
`,Ul=()=>{const e=go(),o=Ae(a=>a.language.current),{i18n:r}=Pe(),n=()=>{const a=o==="vi"?"en":"vi";e(si(a)),r.changeLanguage(a)};return t.jsx(Yl,{className:"language-toggle-wrapper",onClick:n,"aria-label":`Switch to ${o==="vi"?"English":"Tiếng Việt"}`,children:o==="vi"?"VI":"EN"})},Yl=le.button`
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
`,ql=({onMenuToggle:e})=>{const{user:o,logout:r}=mo(),{navigate:n}=Ve(),{t:a}=Pe(),[i,c]=s.useState(!1),l=async()=>{c(!0);try{await r(),n("login")}catch(d){console.error("Logout error:",d),n("login")}finally{c(!1)}},u=()=>{typeof window<"u"&&(window.location.href="/")};return t.jsx(Kl,{className:"wallet-app-header-wrapper",children:t.jsxs("div",{className:"header-content",children:[t.jsxs("div",{className:"branding-section",children:[t.jsx(_l,{onClick:e}),t.jsx("button",{className:"back-to-portfolio-button",onClick:u,title:a("wallet.header.backToPortfolio")||"Về Portfolio",children:t.jsx(X,{icon:"Home",size:20,color:"currentColor"})}),t.jsxs("div",{className:"logo",onClick:()=>n("dashboard"),children:[t.jsx(X,{icon:"Wallet",size:24,color:"currentColor"}),t.jsx("span",{children:a("wallet.app.title")})]})]}),t.jsxs("div",{className:"user-section",children:[t.jsx(Ul,{}),t.jsx(Bl,{}),t.jsx("span",{className:"user-name",children:(o==null?void 0:o.fullName)||(o==null?void 0:o.email)||"User"}),t.jsxs("button",{className:`logout-button ${i?"logout-button--loading":""}`,onClick:l,disabled:i,children:[t.jsx(X,{icon:i?"Loading":"Logout",size:16,color:"currentColor"}),t.jsx("span",{children:a(i?"wallet.header.loggingOut":"wallet.header.logout")})]})]})]})})},Kl=le.header`
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
`,Gl=()=>{const{t:e}=Pe(),{currentRoute:o,navigate:r}=Ve(),n=[{route:"dashboard",icon:"Dashboard",label:e("wallet.navigation.dashboard")},{route:"transactions",icon:"Transactions",label:e("wallet.navigation.transactions")},{route:"transactions/add",icon:"Add",label:e("wallet.navigation.add")}];return t.jsx(Xl,{className:"wallet-app-navigation-wrapper",children:t.jsx("ul",{className:"nav-list",children:n.map(a=>t.jsx("li",{className:"nav-item",children:t.jsxs("button",{className:`nav-button ${o===a.route?"nav-button--active":""}`,onClick:()=>r(a.route),"aria-label":a.label,children:[t.jsx("div",{className:"nav-icon-wrapper",children:t.jsx(X,{icon:a.icon,size:20,color:"currentColor"})}),t.jsx("span",{className:"nav-label",children:a.label})]})},a.route))})})},Xl=le.nav`
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
`,Zl=({children:e})=>{const[o,r]=s.useState(!1);return t.jsxs(Ql,{className:"wallet-app-layout-wrapper",children:[t.jsx(ql,{onMenuToggle:()=>r(!o)}),t.jsxs("div",{className:"content-wrapper",children:[t.jsx(Ll,{isOpen:o,onToggle:()=>r(!o)}),t.jsx("main",{className:"main-content",children:e})]}),t.jsx(Gl,{})]})},Ql=le.div`
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
      ${ar}

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
`,Jl=()=>{const{t:e}=Pe(),{login:o}=mo(),{navigate:r}=Ve(),[n,a]=s.useState(""),[i,c]=s.useState(""),[l,u]=s.useState(null),[d,p]=s.useState(!1),g=async y=>{y.preventDefault(),u(null),p(!0);try{await o({email:n,password:i}),r("dashboard")}catch(b){u(ne(b))}finally{p(!1)}};return t.jsx(ec,{className:"login-wrapper",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"title",children:e("wallet.login.title")}),t.jsx("p",{className:"description",children:e("wallet.login.description")}),t.jsxs("form",{className:"form",onSubmit:g,children:[l&&t.jsx("div",{className:"error-message",children:l}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",htmlFor:"email",children:e("wallet.login.email")}),t.jsx("input",{className:"input",id:"email",type:"email",placeholder:e("wallet.login.emailPlaceholder"),value:n,onChange:y=>a(y.target.value),required:!0,disabled:d,autoComplete:"email"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",htmlFor:"password",children:e("wallet.login.password")}),t.jsx("input",{className:"input",id:"password",type:"password",placeholder:e("wallet.login.passwordPlaceholder"),value:i,onChange:y=>c(y.target.value),required:!0,disabled:d,autoComplete:"current-password"})]}),t.jsx("button",{className:`login-button ${d?"login-button--loading":""}`,type:"submit",disabled:d,children:e(d?"wallet.login.signingIn":"wallet.login.signIn")}),t.jsxs("div",{className:"register-link",children:[t.jsx("span",{children:e("wallet.login.dontHaveAccount","Chưa có tài khoản?")}),t.jsx("button",{type:"button",className:"link-button",onClick:()=>r("register"),disabled:d,children:e("wallet.login.signUp","Đăng ký")})]})]})]})})},ec=le.div`
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

          &::placeholder {
            color: ${({theme:e})=>e.colors.text.secondary};
            opacity: 0.6;
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
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
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

          &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }
        }
      }
    }
  }
`,tc=()=>{const{t:e}=Pe(),{navigate:o}=Ve(),[r,n]=s.useState(""),[a,i]=s.useState(""),[c,l]=s.useState(""),[u,d]=s.useState(null),[p,g]=s.useState(!1),[y,b]=s.useState({score:0,feedback:""}),k=w=>{let h=0;const m=[];return w.length>=8?h+=1:m.push("Tối thiểu 8 ký tự"),/[a-z]/.test(w)?h+=1:m.push("Có chữ thường"),/[A-Z]/.test(w)?h+=1:m.push("Có chữ hoa"),/[0-9]/.test(w)?h+=1:m.push("Có số"),{score:h,feedback:m.length>0?m.join(", "):"Mật khẩu mạnh"}},f=w=>{i(w),w.length>0?b(k(w)):b({score:0,feedback:""})},x=async w=>{if(w.preventDefault(),d(null),y.score<3){d("Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số");return}g(!0);try{const h=await H.auth.register({email:r,password:a,...c&&{fullName:c}});typeof window<"u"&&sessionStorage.setItem("register_email",r),o("verify-email")}catch(h){d(ne(h))}finally{g(!1)}};return t.jsx(oc,{className:"register-wrapper",children:t.jsxs("div",{className:"register-card",children:[t.jsx("h1",{className:"title",children:e("wallet.register.title","Đăng ký tài khoản")}),t.jsx("p",{className:"description",children:e("wallet.register.description","Tạo tài khoản mới để bắt đầu quản lý chi tiêu")}),t.jsxs("form",{className:"form",onSubmit:x,children:[u&&t.jsx("div",{className:"error-message",children:u}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",htmlFor:"email",children:[e("wallet.register.email","Email")," ",t.jsx("span",{className:"required",children:"*"})]}),t.jsx("input",{className:"input",id:"email",type:"email",placeholder:e("wallet.register.emailPlaceholder","Nhập email của bạn"),value:r,onChange:w=>n(w.target.value),required:!0,disabled:p,autoComplete:"email"})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",htmlFor:"fullName",children:[e("wallet.register.fullName","Họ và tên")," ",t.jsx("span",{className:"optional",children:"(Tùy chọn)"})]}),t.jsx("input",{className:"input",id:"fullName",type:"text",placeholder:e("wallet.register.fullNamePlaceholder","Nhập họ và tên"),value:c,onChange:w=>l(w.target.value),disabled:p,autoComplete:"name"})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",htmlFor:"password",children:[e("wallet.register.password","Mật khẩu")," ",t.jsx("span",{className:"required",children:"*"})]}),t.jsx("input",{className:"input",id:"password",type:"password",placeholder:e("wallet.register.passwordPlaceholder","Nhập mật khẩu"),value:a,onChange:w=>f(w.target.value),required:!0,disabled:p,autoComplete:"new-password"}),a.length>0&&t.jsxs("div",{className:"password-strength",children:[t.jsx("div",{className:"strength-bar",children:t.jsx("div",{className:`strength-fill strength-${y.score}`,style:{width:`${y.score/4*100}%`}})}),t.jsx("span",{className:"strength-feedback",children:y.feedback})]})]}),t.jsx("button",{className:`register-button ${p?"register-button--loading":""}`,type:"submit",disabled:p||y.score<3,children:p?e("wallet.register.registering","Đang đăng ký..."):e("wallet.register.register","Đăng ký")}),t.jsxs("div",{className:"login-link",children:[t.jsx("span",{children:e("wallet.register.alreadyHaveAccount","Đã có tài khoản?")}),t.jsx("button",{type:"button",className:"link-button",onClick:()=>o("login"),disabled:p,children:e("wallet.register.signIn","Đăng nhập")})]})]})]})})},oc=le.div`
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

          &::placeholder {
            color: ${({theme:e})=>e.colors.text.secondary};
            opacity: 0.6;
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
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

              &.strength-0,
              &.strength-1 {
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
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
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

          &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }
        }
      }
    }
  }
`,rc=()=>{const{t:e}=Pe(),{navigate:o}=Ve(),[r,n]=s.useState(""),[a,i]=s.useState(""),[c,l]=s.useState(null),[u,d]=s.useState(!1),[p,g]=s.useState(!1),[y,b]=s.useState(0);s.useEffect(()=>{if(typeof window<"u"){const w=sessionStorage.getItem("register_email");if(w)n(w);else{const m=new URLSearchParams(window.location.search).get("email");m&&n(m)}}},[]),s.useEffect(()=>{if(y>0){const w=setTimeout(()=>{b(y-1)},1e3);return()=>clearTimeout(w)}},[y]);const k=w=>{const h=w.replace(/\D/g,"").slice(0,6);i(h),l(null)},f=async w=>{if(w.preventDefault(),l(null),a.length!==6){l("Vui lòng nhập đầy đủ 6 chữ số");return}if(!r){l("Email không hợp lệ");return}d(!0);try{const h=await H.auth.verifyEmail({email:r,verificationCode:a});typeof window<"u"&&sessionStorage.removeItem("register_email"),h.accessToken&&h.refreshToken?window.location.reload():o("login")}catch(h){const m=ne(h);l(m),i("")}finally{d(!1)}},x=async()=>{if(!(!r||y>0)){g(!0),l(null);try{await H.auth.register({email:r,password:"temp",fullName:""}),b(60)}catch(w){l(ne(w))}finally{g(!1)}}};return t.jsx(nc,{className:"verify-email-wrapper",children:t.jsxs("div",{className:"verify-card",children:[t.jsx("h1",{className:"title",children:e("wallet.verifyEmail.title","Xác nhận email")}),t.jsx("p",{className:"description",children:e("wallet.verifyEmail.description","Chúng tôi đã gửi mã xác nhận 6 chữ số đến email của bạn. Vui lòng kiểm tra và nhập mã để kích hoạt tài khoản.")}),r&&t.jsxs("div",{className:"email-display",children:[t.jsx("span",{className:"email-label",children:e("wallet.verifyEmail.email","Email:")}),t.jsx("span",{className:"email-value",children:r})]}),t.jsxs("form",{className:"form",onSubmit:f,children:[c&&t.jsx("div",{className:"error-message",children:c}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",htmlFor:"verificationCode",children:[e("wallet.verifyEmail.code","Mã xác nhận")," ",t.jsx("span",{className:"required",children:"*"})]}),t.jsx("input",{className:"input code-input",id:"verificationCode",type:"text",inputMode:"numeric",placeholder:e("wallet.verifyEmail.codePlaceholder","Nhập 6 chữ số"),value:a,onChange:w=>k(w.target.value),required:!0,disabled:u,autoComplete:"one-time-code",maxLength:6}),t.jsxs("div",{className:"code-hint",children:[a.length,"/6"]})]}),t.jsx("button",{className:`verify-button ${u?"verify-button--loading":""}`,type:"submit",disabled:u||a.length!==6,children:u?e("wallet.verifyEmail.verifying","Đang xác nhận..."):e("wallet.verifyEmail.verify","Xác nhận")}),t.jsxs("div",{className:"resend-section",children:[t.jsx("span",{className:"resend-text",children:e("wallet.verifyEmail.notReceived","Không nhận được mã?")}),y>0?t.jsx("span",{className:"cooldown-text",children:e("wallet.verifyEmail.resendIn","Gửi lại sau {{seconds}}s",{seconds:y})}):t.jsx("button",{type:"button",className:"resend-button",onClick:x,disabled:p||!r,children:p?e("wallet.verifyEmail.resending","Đang gửi..."):e("wallet.verifyEmail.resend","Gửi lại mã")})]}),t.jsx("div",{className:"back-link",children:t.jsx("button",{type:"button",className:"link-button",onClick:()=>o("login"),disabled:u,children:e("wallet.verifyEmail.backToLogin","← Quay lại đăng nhập")})})]})]})})},nc=le.div`
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

          &::placeholder {
            color: ${({theme:e})=>e.colors.text.secondary};
            opacity: 0.4;
            letter-spacing: normal;
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
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
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
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

      .resend-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({theme:e})=>e.spacing[2]};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};

        .resend-text {
          text-align: center;
        }

        .cooldown-text {
          color: ${({theme:e})=>e.colors.text.secondary};
        }

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

          &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
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
          text-decoration: none;
          padding: 0;

          &:hover:not(:disabled) {
            color: ${({theme:e})=>e.colors.text.primary};
          }

          &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }
        }
      }
    }
  }
`;function Rr(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)}function wt(...e){return o=>{let r=!1;const n=e.map(a=>{const i=Rr(a,o);return!r&&typeof i=="function"&&(r=!0),i});if(r)return()=>{for(let a=0;a<n.length;a++){const i=n[a];typeof i=="function"?i():Rr(e[a],null)}}}}function pe(...e){return s.useCallback(wt(...e),e)}var ac=Symbol.for("react.lazy"),ro=or[" use ".trim().toString()];function sc(e){return typeof e=="object"&&e!==null&&"then"in e}function kn(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===ac&&"_payload"in e&&sc(e._payload)}function Cn(e){const o=lc(e),r=s.forwardRef((n,a)=>{let{children:i,...c}=n;kn(i)&&typeof ro=="function"&&(i=ro(i._payload));const l=s.Children.toArray(i),u=l.find(dc);if(u){const d=u.props.children,p=l.map(g=>g===u?s.Children.count(d)>1?s.Children.only(null):s.isValidElement(d)?d.props.children:null:g);return t.jsx(o,{...c,ref:a,children:s.isValidElement(d)?s.cloneElement(d,void 0,p):null})}return t.jsx(o,{...c,ref:a,children:i})});return r.displayName=`${e}.Slot`,r}var ic=Cn("Slot");function lc(e){const o=s.forwardRef((r,n)=>{let{children:a,...i}=r;if(kn(a)&&typeof ro=="function"&&(a=ro(a._payload)),s.isValidElement(a)){const c=pc(a),l=uc(i,a.props);return a.type!==s.Fragment&&(l.ref=n?wt(n,c):c),s.cloneElement(a,l)}return s.Children.count(a)>1?s.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var cc=Symbol("radix.slottable");function dc(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===cc}function uc(e,o){const r={...o};for(const n in o){const a=e[n],i=o[n];/^on[A-Z]/.test(n)?a&&i?r[n]=(...l)=>{const u=i(...l);return a(...l),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...i}:n==="className"&&(r[n]=[a,i].filter(Boolean).join(" "))}return{...e,...r}}function pc(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function En(e){var o,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(o=0;o<a;o++)e[o]&&(r=En(e[o]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Tn(){for(var e,o,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(o=En(e))&&(n&&(n+=" "),n+=o);return n}const Ir=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,zr=Tn,Pt=(e,o)=>r=>{var n;if((o==null?void 0:o.variants)==null)return zr(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:a,defaultVariants:i}=o,c=Object.keys(a).map(d=>{const p=r==null?void 0:r[d],g=i==null?void 0:i[d];if(p===null)return null;const y=Ir(p)||Ir(g);return a[d][y]}),l=r&&Object.entries(r).reduce((d,p)=>{let[g,y]=p;return y===void 0||(d[g]=y),d},{}),u=o==null||(n=o.compoundVariants)===null||n===void 0?void 0:n.reduce((d,p)=>{let{class:g,className:y,...b}=p;return Object.entries(b).every(k=>{let[f,x]=k;return Array.isArray(x)?x.includes({...i,...l}[f]):{...i,...l}[f]===x})?[...d,g,y]:d},[]);return zr(e,c,u,r==null?void 0:r.class,r==null?void 0:r.className)},gc=(e,o)=>{const r=new Array(e.length+o.length);for(let n=0;n<e.length;n++)r[n]=e[n];for(let n=0;n<o.length;n++)r[e.length+n]=o[n];return r},mc=(e,o)=>({classGroupId:e,validator:o}),An=(e=new Map,o=null,r)=>({nextPart:e,validators:o,classGroupId:r}),no="-",Dr=[],fc="arbitrary..",hc=e=>{const o=xc(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:c=>{if(c.startsWith("[")&&c.endsWith("]"))return yc(c);const l=c.split(no),u=l[0]===""&&l.length>1?1:0;return Rn(l,u,o)},getConflictingClassGroupIds:(c,l)=>{if(l){const u=n[c],d=r[c];return u?d?gc(d,u):u:d||Dr}return r[c]||Dr}}},Rn=(e,o,r)=>{if(e.length-o===0)return r.classGroupId;const a=e[o],i=r.nextPart.get(a);if(i){const d=Rn(e,o+1,i);if(d)return d}const c=r.validators;if(c===null)return;const l=o===0?e.join(no):e.slice(o).join(no),u=c.length;for(let d=0;d<u;d++){const p=c[d];if(p.validator(l))return p.classGroupId}},yc=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const o=e.slice(1,-1),r=o.indexOf(":"),n=o.slice(0,r);return n?fc+n:void 0})(),xc=e=>{const{theme:o,classGroups:r}=e;return bc(r,o)},bc=(e,o)=>{const r=An();for(const n in e){const a=e[n];sr(a,r,n,o)}return r},sr=(e,o,r,n)=>{const a=e.length;for(let i=0;i<a;i++){const c=e[i];vc(c,o,r,n)}},vc=(e,o,r,n)=>{if(typeof e=="string"){wc(e,o,r);return}if(typeof e=="function"){$c(e,o,r,n);return}jc(e,o,r,n)},wc=(e,o,r)=>{const n=e===""?o:In(o,e);n.classGroupId=r},$c=(e,o,r,n)=>{if(Nc(e)){sr(e(n),o,r,n);return}o.validators===null&&(o.validators=[]),o.validators.push(mc(r,e))},jc=(e,o,r,n)=>{const a=Object.entries(e),i=a.length;for(let c=0;c<i;c++){const[l,u]=a[c];sr(u,In(o,l),r,n)}},In=(e,o)=>{let r=e;const n=o.split(no),a=n.length;for(let i=0;i<a;i++){const c=n[i];let l=r.nextPart.get(c);l||(l=An(),r.nextPart.set(c,l)),r=l}return r},Nc=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,Sc=e=>{if(e<1)return{get:()=>{},set:()=>{}};let o=0,r=Object.create(null),n=Object.create(null);const a=(i,c)=>{r[i]=c,o++,o>e&&(o=0,n=r,r=Object.create(null))};return{get(i){let c=r[i];if(c!==void 0)return c;if((c=n[i])!==void 0)return a(i,c),c},set(i,c){i in r?r[i]=c:a(i,c)}}},Vo="!",Pr=":",kc=[],Or=(e,o,r,n,a)=>({modifiers:e,hasImportantModifier:o,baseClassName:r,maybePostfixModifierPosition:n,isExternal:a}),Cc=e=>{const{prefix:o,experimentalParseClassName:r}=e;let n=a=>{const i=[];let c=0,l=0,u=0,d;const p=a.length;for(let f=0;f<p;f++){const x=a[f];if(c===0&&l===0){if(x===Pr){i.push(a.slice(u,f)),u=f+1;continue}if(x==="/"){d=f;continue}}x==="["?c++:x==="]"?c--:x==="("?l++:x===")"&&l--}const g=i.length===0?a:a.slice(u);let y=g,b=!1;g.endsWith(Vo)?(y=g.slice(0,-1),b=!0):g.startsWith(Vo)&&(y=g.slice(1),b=!0);const k=d&&d>u?d-u:void 0;return Or(i,b,y,k)};if(o){const a=o+Pr,i=n;n=c=>c.startsWith(a)?i(c.slice(a.length)):Or(kc,!1,c,void 0,!0)}if(r){const a=n;n=i=>r({className:i,parseClassName:a})}return n},Ec=e=>{const o=new Map;return e.orderSensitiveModifiers.forEach((r,n)=>{o.set(r,1e6+n)}),r=>{const n=[];let a=[];for(let i=0;i<r.length;i++){const c=r[i],l=c[0]==="[",u=o.has(c);l||u?(a.length>0&&(a.sort(),n.push(...a),a=[]),n.push(c)):a.push(c)}return a.length>0&&(a.sort(),n.push(...a)),n}},Tc=e=>({cache:Sc(e.cacheSize),parseClassName:Cc(e),sortModifiers:Ec(e),...hc(e)}),Ac=/\s+/,Rc=(e,o)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a,sortModifiers:i}=o,c=[],l=e.trim().split(Ac);let u="";for(let d=l.length-1;d>=0;d-=1){const p=l[d],{isExternal:g,modifiers:y,hasImportantModifier:b,baseClassName:k,maybePostfixModifierPosition:f}=r(p);if(g){u=p+(u.length>0?" "+u:u);continue}let x=!!f,w=n(x?k.substring(0,f):k);if(!w){if(!x){u=p+(u.length>0?" "+u:u);continue}if(w=n(k),!w){u=p+(u.length>0?" "+u:u);continue}x=!1}const h=y.length===0?"":y.length===1?y[0]:i(y).join(":"),m=b?h+Vo:h,C=m+w;if(c.indexOf(C)>-1)continue;c.push(C);const S=a(w,x);for(let T=0;T<S.length;++T){const E=S[T];c.push(m+E)}u=p+(u.length>0?" "+u:u)}return u},Ic=(...e)=>{let o=0,r,n,a="";for(;o<e.length;)(r=e[o++])&&(n=zn(r))&&(a&&(a+=" "),a+=n);return a},zn=e=>{if(typeof e=="string")return e;let o,r="";for(let n=0;n<e.length;n++)e[n]&&(o=zn(e[n]))&&(r&&(r+=" "),r+=o);return r},zc=(e,...o)=>{let r,n,a,i;const c=u=>{const d=o.reduce((p,g)=>g(p),e());return r=Tc(d),n=r.cache.get,a=r.cache.set,i=l,l(u)},l=u=>{const d=n(u);if(d)return d;const p=Rc(u,r);return a(u,p),p};return i=c,(...u)=>i(Ic(...u))},Dc=[],fe=e=>{const o=r=>r[e]||Dc;return o.isThemeGetter=!0,o},Dn=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Pn=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Pc=/^\d+\/\d+$/,Oc=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Mc=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Lc=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,_c=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Fc=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,gt=e=>Pc.test(e),oe=e=>!!e&&!Number.isNaN(Number(e)),Ye=e=>!!e&&Number.isInteger(Number(e)),Co=e=>e.endsWith("%")&&oe(e.slice(0,-1)),Be=e=>Oc.test(e),Wc=()=>!0,Vc=e=>Mc.test(e)&&!Lc.test(e),On=()=>!1,Bc=e=>_c.test(e),Hc=e=>Fc.test(e),Uc=e=>!V(e)&&!B(e),Yc=e=>$t(e,_n,On),V=e=>Dn.test(e),ot=e=>$t(e,Fn,Vc),Eo=e=>$t(e,Zc,oe),Mr=e=>$t(e,Mn,On),qc=e=>$t(e,Ln,Hc),Wt=e=>$t(e,Wn,Bc),B=e=>Pn.test(e),Tt=e=>jt(e,Fn),Kc=e=>jt(e,Qc),Lr=e=>jt(e,Mn),Gc=e=>jt(e,_n),Xc=e=>jt(e,Ln),Vt=e=>jt(e,Wn,!0),$t=(e,o,r)=>{const n=Dn.exec(e);return n?n[1]?o(n[1]):r(n[2]):!1},jt=(e,o,r=!1)=>{const n=Pn.exec(e);return n?n[1]?o(n[1]):r:!1},Mn=e=>e==="position"||e==="percentage",Ln=e=>e==="image"||e==="url",_n=e=>e==="length"||e==="size"||e==="bg-size",Fn=e=>e==="length",Zc=e=>e==="number",Qc=e=>e==="family-name",Wn=e=>e==="shadow",Jc=()=>{const e=fe("color"),o=fe("font"),r=fe("text"),n=fe("font-weight"),a=fe("tracking"),i=fe("leading"),c=fe("breakpoint"),l=fe("container"),u=fe("spacing"),d=fe("radius"),p=fe("shadow"),g=fe("inset-shadow"),y=fe("text-shadow"),b=fe("drop-shadow"),k=fe("blur"),f=fe("perspective"),x=fe("aspect"),w=fe("ease"),h=fe("animate"),m=()=>["auto","avoid","all","avoid-page","page","left","right","column"],C=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],S=()=>[...C(),B,V],T=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto","contain","none"],$=()=>[B,V,u],A=()=>[gt,"full","auto",...$()],L=()=>[Ye,"none","subgrid",B,V],O=()=>["auto",{span:["full",Ye,B,V]},Ye,B,V],N=()=>[Ye,"auto",B,V],D=()=>["auto","min","max","fr",B,V],P=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],_=()=>["start","end","center","stretch","center-safe","end-safe"],F=()=>["auto",...$()],K=()=>[gt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...$()],I=()=>[e,B,V],Z=()=>[...C(),Lr,Mr,{position:[B,V]}],J=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ue=()=>["auto","cover","contain",Gc,Yc,{size:[B,V]}],ge=()=>[Co,Tt,ot],j=()=>["","none","full",d,B,V],M=()=>["",oe,Tt,ot],ce=()=>["solid","dashed","dotted","double"],Ne=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],v=()=>[oe,Co,Lr,Mr],R=()=>["","none",k,B,V],Y=()=>["none",oe,B,V],W=()=>["none",oe,B,V],z=()=>[oe,B,V],q=()=>[gt,"full",...$()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Be],breakpoint:[Be],color:[Wc],container:[Be],"drop-shadow":[Be],ease:["in","out","in-out"],font:[Uc],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Be],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Be],shadow:[Be],spacing:["px",oe],text:[Be],"text-shadow":[Be],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",gt,V,B,x]}],container:["container"],columns:[{columns:[oe,V,B,l]}],"break-after":[{"break-after":m()}],"break-before":[{"break-before":m()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:S()}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:A()}],"inset-x":[{"inset-x":A()}],"inset-y":[{"inset-y":A()}],start:[{start:A()}],end:[{end:A()}],top:[{top:A()}],right:[{right:A()}],bottom:[{bottom:A()}],left:[{left:A()}],visibility:["visible","invisible","collapse"],z:[{z:[Ye,"auto",B,V]}],basis:[{basis:[gt,"full","auto",l,...$()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[oe,gt,"auto","initial","none",V]}],grow:[{grow:["",oe,B,V]}],shrink:[{shrink:["",oe,B,V]}],order:[{order:[Ye,"first","last","none",B,V]}],"grid-cols":[{"grid-cols":L()}],"col-start-end":[{col:O()}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":L()}],"row-start-end":[{row:O()}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":D()}],"auto-rows":[{"auto-rows":D()}],gap:[{gap:$()}],"gap-x":[{"gap-x":$()}],"gap-y":[{"gap-y":$()}],"justify-content":[{justify:[...P(),"normal"]}],"justify-items":[{"justify-items":[..._(),"normal"]}],"justify-self":[{"justify-self":["auto",..._()]}],"align-content":[{content:["normal",...P()]}],"align-items":[{items:[..._(),{baseline:["","last"]}]}],"align-self":[{self:["auto",..._(),{baseline:["","last"]}]}],"place-content":[{"place-content":P()}],"place-items":[{"place-items":[..._(),"baseline"]}],"place-self":[{"place-self":["auto",..._()]}],p:[{p:$()}],px:[{px:$()}],py:[{py:$()}],ps:[{ps:$()}],pe:[{pe:$()}],pt:[{pt:$()}],pr:[{pr:$()}],pb:[{pb:$()}],pl:[{pl:$()}],m:[{m:F()}],mx:[{mx:F()}],my:[{my:F()}],ms:[{ms:F()}],me:[{me:F()}],mt:[{mt:F()}],mr:[{mr:F()}],mb:[{mb:F()}],ml:[{ml:F()}],"space-x":[{"space-x":$()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":$()}],"space-y-reverse":["space-y-reverse"],size:[{size:K()}],w:[{w:[l,"screen",...K()]}],"min-w":[{"min-w":[l,"screen","none",...K()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[c]},...K()]}],h:[{h:["screen","lh",...K()]}],"min-h":[{"min-h":["screen","lh","none",...K()]}],"max-h":[{"max-h":["screen","lh",...K()]}],"font-size":[{text:["base",r,Tt,ot]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,B,Eo]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Co,V]}],"font-family":[{font:[Kc,V,o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,B,V]}],"line-clamp":[{"line-clamp":[oe,"none",B,Eo]}],leading:[{leading:[i,...$()]}],"list-image":[{"list-image":["none",B,V]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",B,V]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:[oe,"from-font","auto",B,ot]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[oe,"auto",B,V]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",B,V]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",B,V]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Z()}],"bg-repeat":[{bg:J()}],"bg-size":[{bg:ue()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ye,B,V],radial:["",B,V],conic:[Ye,B,V]},Xc,qc]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:ge()}],"gradient-via-pos":[{via:ge()}],"gradient-to-pos":[{to:ge()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:j()}],"rounded-s":[{"rounded-s":j()}],"rounded-e":[{"rounded-e":j()}],"rounded-t":[{"rounded-t":j()}],"rounded-r":[{"rounded-r":j()}],"rounded-b":[{"rounded-b":j()}],"rounded-l":[{"rounded-l":j()}],"rounded-ss":[{"rounded-ss":j()}],"rounded-se":[{"rounded-se":j()}],"rounded-ee":[{"rounded-ee":j()}],"rounded-es":[{"rounded-es":j()}],"rounded-tl":[{"rounded-tl":j()}],"rounded-tr":[{"rounded-tr":j()}],"rounded-br":[{"rounded-br":j()}],"rounded-bl":[{"rounded-bl":j()}],"border-w":[{border:M()}],"border-w-x":[{"border-x":M()}],"border-w-y":[{"border-y":M()}],"border-w-s":[{"border-s":M()}],"border-w-e":[{"border-e":M()}],"border-w-t":[{"border-t":M()}],"border-w-r":[{"border-r":M()}],"border-w-b":[{"border-b":M()}],"border-w-l":[{"border-l":M()}],"divide-x":[{"divide-x":M()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":M()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ce(),"hidden","none"]}],"divide-style":[{divide:[...ce(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...ce(),"none","hidden"]}],"outline-offset":[{"outline-offset":[oe,B,V]}],"outline-w":[{outline:["",oe,Tt,ot]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",p,Vt,Wt]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",g,Vt,Wt]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:M()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[oe,ot]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":M()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",y,Vt,Wt]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[oe,B,V]}],"mix-blend":[{"mix-blend":[...Ne(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ne()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[oe]}],"mask-image-linear-from-pos":[{"mask-linear-from":v()}],"mask-image-linear-to-pos":[{"mask-linear-to":v()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":v()}],"mask-image-t-to-pos":[{"mask-t-to":v()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":v()}],"mask-image-r-to-pos":[{"mask-r-to":v()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":v()}],"mask-image-b-to-pos":[{"mask-b-to":v()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":v()}],"mask-image-l-to-pos":[{"mask-l-to":v()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":v()}],"mask-image-x-to-pos":[{"mask-x-to":v()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":v()}],"mask-image-y-to-pos":[{"mask-y-to":v()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[B,V]}],"mask-image-radial-from-pos":[{"mask-radial-from":v()}],"mask-image-radial-to-pos":[{"mask-radial-to":v()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":C()}],"mask-image-conic-pos":[{"mask-conic":[oe]}],"mask-image-conic-from-pos":[{"mask-conic-from":v()}],"mask-image-conic-to-pos":[{"mask-conic-to":v()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Z()}],"mask-repeat":[{mask:J()}],"mask-size":[{mask:ue()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",B,V]}],filter:[{filter:["","none",B,V]}],blur:[{blur:R()}],brightness:[{brightness:[oe,B,V]}],contrast:[{contrast:[oe,B,V]}],"drop-shadow":[{"drop-shadow":["","none",b,Vt,Wt]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",oe,B,V]}],"hue-rotate":[{"hue-rotate":[oe,B,V]}],invert:[{invert:["",oe,B,V]}],saturate:[{saturate:[oe,B,V]}],sepia:[{sepia:["",oe,B,V]}],"backdrop-filter":[{"backdrop-filter":["","none",B,V]}],"backdrop-blur":[{"backdrop-blur":R()}],"backdrop-brightness":[{"backdrop-brightness":[oe,B,V]}],"backdrop-contrast":[{"backdrop-contrast":[oe,B,V]}],"backdrop-grayscale":[{"backdrop-grayscale":["",oe,B,V]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[oe,B,V]}],"backdrop-invert":[{"backdrop-invert":["",oe,B,V]}],"backdrop-opacity":[{"backdrop-opacity":[oe,B,V]}],"backdrop-saturate":[{"backdrop-saturate":[oe,B,V]}],"backdrop-sepia":[{"backdrop-sepia":["",oe,B,V]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":$()}],"border-spacing-x":[{"border-spacing-x":$()}],"border-spacing-y":[{"border-spacing-y":$()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",B,V]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[oe,"initial",B,V]}],ease:[{ease:["linear","initial",w,B,V]}],delay:[{delay:[oe,B,V]}],animate:[{animate:["none",h,B,V]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,B,V]}],"perspective-origin":[{"perspective-origin":S()}],rotate:[{rotate:Y()}],"rotate-x":[{"rotate-x":Y()}],"rotate-y":[{"rotate-y":Y()}],"rotate-z":[{"rotate-z":Y()}],scale:[{scale:W()}],"scale-x":[{"scale-x":W()}],"scale-y":[{"scale-y":W()}],"scale-z":[{"scale-z":W()}],"scale-3d":["scale-3d"],skew:[{skew:z()}],"skew-x":[{"skew-x":z()}],"skew-y":[{"skew-y":z()}],transform:[{transform:[B,V,"","none","gpu","cpu"]}],"transform-origin":[{origin:S()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:q()}],"translate-x":[{"translate-x":q()}],"translate-y":[{"translate-y":q()}],"translate-z":[{"translate-z":q()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",B,V]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",B,V]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[oe,Tt,ot,Eo]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},ed=zc(Jc);function ae(...e){return ed(Tn(e))}const td=Pt("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),U=s.forwardRef(({className:e,variant:o,size:r,asChild:n=!1,...a},i)=>{const c=n?ic:"button";return t.jsx(c,{className:ae(td({variant:o,size:r,className:e})),ref:i,...a})});U.displayName="Button";const ee=s.forwardRef(({className:e,type:o,...r},n)=>t.jsx("input",{type:o,className:ae("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...r}));ee.displayName="Input";const de=s.forwardRef(({className:e,...o},r)=>t.jsx("div",{ref:r,className:ae("rounded-lg border bg-card text-card-foreground shadow-sm",e),...o}));de.displayName="Card";const od=s.forwardRef(({className:e,...o},r)=>t.jsx("div",{ref:r,className:ae("flex flex-col space-y-1.5 p-6",e),...o}));od.displayName="CardHeader";const rd=s.forwardRef(({className:e,...o},r)=>t.jsx("h3",{ref:r,className:ae("text-2xl font-semibold leading-none tracking-tight",e),...o}));rd.displayName="CardTitle";const nd=s.forwardRef(({className:e,...o},r)=>t.jsx("p",{ref:r,className:ae("text-sm text-muted-foreground",e),...o}));nd.displayName="CardDescription";const we=s.forwardRef(({className:e,...o},r)=>t.jsx("div",{ref:r,className:ae("p-6 pt-0",e),...o}));we.displayName="CardContent";const ad=s.forwardRef(({className:e,...o},r)=>t.jsx("div",{ref:r,className:ae("flex items-center p-6 pt-0",e),...o}));ad.displayName="CardFooter";function me({className:e,...o}){return t.jsx("div",{className:ae("animate-pulse rounded-md bg-muted",e),...o})}const sd=Pt("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function xe({className:e,variant:o,...r}){return t.jsx("div",{className:ae(sd({variant:o}),e),...r})}const id=({onParse:e,isLoading:o=!1,placeholder:r,disabled:n=!1,error:a})=>{const[i,c]=s.useState(""),l=s.useRef(null),u=s.useRef(null);s.useEffect(()=>{var g;(g=l.current)==null||g.focus()},[]),s.useEffect(()=>{},[i,a]);const d=s.useCallback(async()=>{!i.trim()||o||n||(u.current&&(clearTimeout(u.current),u.current=null),await e(i.trim()),c(""))},[i,o,n,e]),p=g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),d())};return t.jsxs(ld,{children:[t.jsxs("div",{className:"input-container",children:[t.jsx(ee,{ref:l,type:"text",className:`nlp-input ${a?"error":""}`,value:i,onChange:g=>c(g.target.value),onKeyDown:p,placeholder:r||'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr")',disabled:n||o}),t.jsx(U,{variant:"secondary",onClick:d,disabled:n||o||!i.trim(),className:"parse-button",children:o?t.jsxs(t.Fragment,{children:[t.jsx(X,{icon:"Loader",size:16,color:"currentColor",className:"animate-spin"}),t.jsx("span",{children:"Đang phân tích..."})]}):t.jsxs(t.Fragment,{children:[t.jsx(X,{icon:"Sparkles",size:16,color:"currentColor"}),t.jsx("span",{children:"Phân tích"})]})})]}),a&&t.jsxs("div",{className:"error-message",children:[t.jsx(X,{icon:"Alert",size:16,color:"currentColor"}),t.jsx("span",{children:a})]})]})},ld=le.div`
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
`;function re(e,o,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return o==null?void 0:o(a)}}function cd(e,o){const r=s.createContext(o),n=i=>{const{children:c,...l}=i,u=s.useMemo(()=>l,Object.values(l));return t.jsx(r.Provider,{value:u,children:c})};n.displayName=e+"Provider";function a(i){const c=s.useContext(r);if(c)return c;if(o!==void 0)return o;throw new Error(`\`${i}\` must be used within \`${e}\``)}return[n,a]}function Ot(e,o=[]){let r=[];function n(i,c){const l=s.createContext(c),u=r.length;r=[...r,c];const d=g=>{var w;const{scope:y,children:b,...k}=g,f=((w=y==null?void 0:y[e])==null?void 0:w[u])||l,x=s.useMemo(()=>k,Object.values(k));return t.jsx(f.Provider,{value:x,children:b})};d.displayName=i+"Provider";function p(g,y){var f;const b=((f=y==null?void 0:y[e])==null?void 0:f[u])||l,k=s.useContext(b);if(k)return k;if(c!==void 0)return c;throw new Error(`\`${g}\` must be used within \`${i}\``)}return[d,p]}const a=()=>{const i=r.map(c=>s.createContext(c));return function(l){const u=(l==null?void 0:l[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...l,[e]:u}}),[l,u])}};return a.scopeName=e,[n,dd(a,...o)]}function dd(...e){const o=e[0];if(e.length===1)return o;const r=()=>{const n=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const c=n.reduce((l,{useScope:u,scopeName:d})=>{const g=u(i)[`__scope${d}`];return{...l,...g}},{});return s.useMemo(()=>({[`__scope${o.scopeName}`]:c}),[c])}};return r.scopeName=o.scopeName,r}var $e=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},ud=or[" useId ".trim().toString()]||(()=>{}),pd=0;function yt(e){const[o,r]=s.useState(ud());return $e(()=>{r(n=>n??String(pd++))},[e]),e||(o?`radix-${o}`:"")}var gd=or[" useInsertionEffect ".trim().toString()]||$e;function ao({prop:e,defaultProp:o,onChange:r=()=>{},caller:n}){const[a,i,c]=md({defaultProp:o,onChange:r}),l=e!==void 0,u=l?e:a;{const p=s.useRef(e!==void 0);s.useEffect(()=>{const g=p.current;g!==l&&console.warn(`${n} is changing from ${g?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=l},[l,n])}const d=s.useCallback(p=>{var g;if(l){const y=fd(p)?p(e):p;y!==e&&((g=c.current)==null||g.call(c,y))}else i(p)},[l,e,i,c]);return[u,d]}function md({defaultProp:e,onChange:o}){const[r,n]=s.useState(e),a=s.useRef(r),i=s.useRef(o);return gd(()=>{i.current=o},[o]),s.useEffect(()=>{var c;a.current!==r&&((c=i.current)==null||c.call(i,r),a.current=r)},[r,a]),[r,n,i]}function fd(e){return typeof e=="function"}function hd(e){const o=yd(e),r=s.forwardRef((n,a)=>{const{children:i,...c}=n,l=s.Children.toArray(i),u=l.find(bd);if(u){const d=u.props.children,p=l.map(g=>g===u?s.Children.count(d)>1?s.Children.only(null):s.isValidElement(d)?d.props.children:null:g);return t.jsx(o,{...c,ref:a,children:s.isValidElement(d)?s.cloneElement(d,void 0,p):null})}return t.jsx(o,{...c,ref:a,children:i})});return r.displayName=`${e}.Slot`,r}function yd(e){const o=s.forwardRef((r,n)=>{const{children:a,...i}=r;if(s.isValidElement(a)){const c=wd(a),l=vd(i,a.props);return a.type!==s.Fragment&&(l.ref=n?wt(n,c):c),s.cloneElement(a,l)}return s.Children.count(a)>1?s.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var xd=Symbol("radix.slottable");function bd(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===xd}function vd(e,o){const r={...o};for(const n in o){const a=e[n],i=o[n];/^on[A-Z]/.test(n)?a&&i?r[n]=(...l)=>{const u=i(...l);return a(...l),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...i}:n==="className"&&(r[n]=[a,i].filter(Boolean).join(" "))}return{...e,...r}}function wd(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var $d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ie=$d.reduce((e,o)=>{const r=hd(`Primitive.${o}`),n=s.forwardRef((a,i)=>{const{asChild:c,...l}=a,u=c?r:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(u,{...l,ref:i})});return n.displayName=`Primitive.${o}`,{...e,[o]:n}},{});function Vn(e,o){e&&Dt.flushSync(()=>e.dispatchEvent(o))}function Ie(e){const o=s.useRef(e);return s.useEffect(()=>{o.current=e}),s.useMemo(()=>(...r)=>{var n;return(n=o.current)==null?void 0:n.call(o,...r)},[])}function jd(e,o=globalThis==null?void 0:globalThis.document){const r=Ie(e);s.useEffect(()=>{const n=a=>{a.key==="Escape"&&r(a)};return o.addEventListener("keydown",n,{capture:!0}),()=>o.removeEventListener("keydown",n,{capture:!0})},[r,o])}var Nd="DismissableLayer",Bo="dismissableLayer.update",Sd="dismissableLayer.pointerDownOutside",kd="dismissableLayer.focusOutside",_r,Bn=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),fo=s.forwardRef((e,o)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:n,onPointerDownOutside:a,onFocusOutside:i,onInteractOutside:c,onDismiss:l,...u}=e,d=s.useContext(Bn),[p,g]=s.useState(null),y=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,b]=s.useState({}),k=pe(o,E=>g(E)),f=Array.from(d.layers),[x]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),w=f.indexOf(x),h=p?f.indexOf(p):-1,m=d.layersWithOutsidePointerEventsDisabled.size>0,C=h>=w,S=Ed(E=>{const $=E.target,A=[...d.branches].some(L=>L.contains($));!C||A||(a==null||a(E),c==null||c(E),E.defaultPrevented||l==null||l())},y),T=Td(E=>{const $=E.target;[...d.branches].some(L=>L.contains($))||(i==null||i(E),c==null||c(E),E.defaultPrevented||l==null||l())},y);return jd(E=>{h===d.layers.size-1&&(n==null||n(E),!E.defaultPrevented&&l&&(E.preventDefault(),l()))},y),s.useEffect(()=>{if(p)return r&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(_r=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(p)),d.layers.add(p),Fr(),()=>{r&&d.layersWithOutsidePointerEventsDisabled.size===1&&(y.body.style.pointerEvents=_r)}},[p,y,r,d]),s.useEffect(()=>()=>{p&&(d.layers.delete(p),d.layersWithOutsidePointerEventsDisabled.delete(p),Fr())},[p,d]),s.useEffect(()=>{const E=()=>b({});return document.addEventListener(Bo,E),()=>document.removeEventListener(Bo,E)},[]),t.jsx(ie.div,{...u,ref:k,style:{pointerEvents:m?C?"auto":"none":void 0,...e.style},onFocusCapture:re(e.onFocusCapture,T.onFocusCapture),onBlurCapture:re(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:re(e.onPointerDownCapture,S.onPointerDownCapture)})});fo.displayName=Nd;var Cd="DismissableLayerBranch",Hn=s.forwardRef((e,o)=>{const r=s.useContext(Bn),n=s.useRef(null),a=pe(o,n);return s.useEffect(()=>{const i=n.current;if(i)return r.branches.add(i),()=>{r.branches.delete(i)}},[r.branches]),t.jsx(ie.div,{...e,ref:a})});Hn.displayName=Cd;function Ed(e,o=globalThis==null?void 0:globalThis.document){const r=Ie(e),n=s.useRef(!1),a=s.useRef(()=>{});return s.useEffect(()=>{const i=l=>{if(l.target&&!n.current){let u=function(){Un(Sd,r,d,{discrete:!0})};const d={originalEvent:l};l.pointerType==="touch"?(o.removeEventListener("click",a.current),a.current=u,o.addEventListener("click",a.current,{once:!0})):u()}else o.removeEventListener("click",a.current);n.current=!1},c=window.setTimeout(()=>{o.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(c),o.removeEventListener("pointerdown",i),o.removeEventListener("click",a.current)}},[o,r]),{onPointerDownCapture:()=>n.current=!0}}function Td(e,o=globalThis==null?void 0:globalThis.document){const r=Ie(e),n=s.useRef(!1);return s.useEffect(()=>{const a=i=>{i.target&&!n.current&&Un(kd,r,{originalEvent:i},{discrete:!1})};return o.addEventListener("focusin",a),()=>o.removeEventListener("focusin",a)},[o,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function Fr(){const e=new CustomEvent(Bo);document.dispatchEvent(e)}function Un(e,o,r,{discrete:n}){const a=r.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});o&&a.addEventListener(e,o,{once:!0}),n?Vn(a,i):a.dispatchEvent(i)}var Ad=fo,Rd=Hn,To="focusScope.autoFocusOnMount",Ao="focusScope.autoFocusOnUnmount",Wr={bubbles:!1,cancelable:!0},Id="FocusScope",ir=s.forwardRef((e,o)=>{const{loop:r=!1,trapped:n=!1,onMountAutoFocus:a,onUnmountAutoFocus:i,...c}=e,[l,u]=s.useState(null),d=Ie(a),p=Ie(i),g=s.useRef(null),y=pe(o,f=>u(f)),b=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(n){let f=function(m){if(b.paused||!l)return;const C=m.target;l.contains(C)?g.current=C:qe(g.current,{select:!0})},x=function(m){if(b.paused||!l)return;const C=m.relatedTarget;C!==null&&(l.contains(C)||qe(g.current,{select:!0}))},w=function(m){if(document.activeElement===document.body)for(const S of m)S.removedNodes.length>0&&qe(l)};document.addEventListener("focusin",f),document.addEventListener("focusout",x);const h=new MutationObserver(w);return l&&h.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",f),document.removeEventListener("focusout",x),h.disconnect()}}},[n,l,b.paused]),s.useEffect(()=>{if(l){Br.add(b);const f=document.activeElement;if(!l.contains(f)){const w=new CustomEvent(To,Wr);l.addEventListener(To,d),l.dispatchEvent(w),w.defaultPrevented||(zd(Ld(Yn(l)),{select:!0}),document.activeElement===f&&qe(l))}return()=>{l.removeEventListener(To,d),setTimeout(()=>{const w=new CustomEvent(Ao,Wr);l.addEventListener(Ao,p),l.dispatchEvent(w),w.defaultPrevented||qe(f??document.body,{select:!0}),l.removeEventListener(Ao,p),Br.remove(b)},0)}}},[l,d,p,b]);const k=s.useCallback(f=>{if(!r&&!n||b.paused)return;const x=f.key==="Tab"&&!f.altKey&&!f.ctrlKey&&!f.metaKey,w=document.activeElement;if(x&&w){const h=f.currentTarget,[m,C]=Dd(h);m&&C?!f.shiftKey&&w===C?(f.preventDefault(),r&&qe(m,{select:!0})):f.shiftKey&&w===m&&(f.preventDefault(),r&&qe(C,{select:!0})):w===h&&f.preventDefault()}},[r,n,b.paused]);return t.jsx(ie.div,{tabIndex:-1,...c,ref:y,onKeyDown:k})});ir.displayName=Id;function zd(e,{select:o=!1}={}){const r=document.activeElement;for(const n of e)if(qe(n,{select:o}),document.activeElement!==r)return}function Dd(e){const o=Yn(e),r=Vr(o,e),n=Vr(o.reverse(),e);return[r,n]}function Yn(e){const o=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const a=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||a?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)o.push(r.currentNode);return o}function Vr(e,o){for(const r of e)if(!Pd(r,{upTo:o}))return r}function Pd(e,{upTo:o}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(o!==void 0&&e===o)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Od(e){return e instanceof HTMLInputElement&&"select"in e}function qe(e,{select:o=!1}={}){if(e&&e.focus){const r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&Od(e)&&o&&e.select()}}var Br=Md();function Md(){let e=[];return{add(o){const r=e[0];o!==r&&(r==null||r.pause()),e=Hr(e,o),e.unshift(o)},remove(o){var r;e=Hr(e,o),(r=e[0])==null||r.resume()}}}function Hr(e,o){const r=[...e],n=r.indexOf(o);return n!==-1&&r.splice(n,1),r}function Ld(e){return e.filter(o=>o.tagName!=="A")}var _d="Portal",ho=s.forwardRef((e,o)=>{var l;const{container:r,...n}=e,[a,i]=s.useState(!1);$e(()=>i(!0),[]);const c=r||a&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return c?ii.createPortal(t.jsx(ie.div,{...n,ref:o}),c):null});ho.displayName=_d;function Fd(e,o){return s.useReducer((r,n)=>o[r][n]??r,e)}var Mt=e=>{const{present:o,children:r}=e,n=Wd(o),a=typeof r=="function"?r({present:n.isPresent}):s.Children.only(r),i=pe(n.ref,Vd(a));return typeof r=="function"||n.isPresent?s.cloneElement(a,{ref:i}):null};Mt.displayName="Presence";function Wd(e){const[o,r]=s.useState(),n=s.useRef(null),a=s.useRef(e),i=s.useRef("none"),c=e?"mounted":"unmounted",[l,u]=Fd(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const d=Bt(n.current);i.current=l==="mounted"?d:"none"},[l]),$e(()=>{const d=n.current,p=a.current;if(p!==e){const y=i.current,b=Bt(d);e?u("MOUNT"):b==="none"||(d==null?void 0:d.display)==="none"?u("UNMOUNT"):u(p&&y!==b?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,u]),$e(()=>{if(o){let d;const p=o.ownerDocument.defaultView??window,g=b=>{const f=Bt(n.current).includes(CSS.escape(b.animationName));if(b.target===o&&f&&(u("ANIMATION_END"),!a.current)){const x=o.style.animationFillMode;o.style.animationFillMode="forwards",d=p.setTimeout(()=>{o.style.animationFillMode==="forwards"&&(o.style.animationFillMode=x)})}},y=b=>{b.target===o&&(i.current=Bt(n.current))};return o.addEventListener("animationstart",y),o.addEventListener("animationcancel",g),o.addEventListener("animationend",g),()=>{p.clearTimeout(d),o.removeEventListener("animationstart",y),o.removeEventListener("animationcancel",g),o.removeEventListener("animationend",g)}}else u("ANIMATION_END")},[o,u]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:s.useCallback(d=>{n.current=d?getComputedStyle(d):null,r(d)},[])}}function Bt(e){return(e==null?void 0:e.animationName)||"none"}function Vd(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Ro=0;function qn(){s.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ur()),document.body.insertAdjacentElement("beforeend",e[1]??Ur()),Ro++,()=>{Ro===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(o=>o.remove()),Ro--}},[])}function Ur(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Qt="right-scroll-bar-position",Jt="width-before-scroll-bar",Bd="with-scroll-bars-hidden",Hd="--removed-body-scroll-bar-size";function Io(e,o){return typeof e=="function"?e(o):e&&(e.current=o),e}function Ud(e,o){var r=s.useState(function(){return{value:e,callback:o,facade:{get current(){return r.value},set current(n){var a=r.value;a!==n&&(r.value=n,r.callback(n,a))}}}})[0];return r.callback=o,r.facade}var Yd=typeof window<"u"?s.useLayoutEffect:s.useEffect,Yr=new WeakMap;function qd(e,o){var r=Ud(null,function(n){return e.forEach(function(a){return Io(a,n)})});return Yd(function(){var n=Yr.get(r);if(n){var a=new Set(n),i=new Set(e),c=r.current;a.forEach(function(l){i.has(l)||Io(l,null)}),i.forEach(function(l){a.has(l)||Io(l,c)})}Yr.set(r,e)},[e]),r}function Kd(e){return e}function Gd(e,o){o===void 0&&(o=Kd);var r=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(i){var c=o(i,n);return r.push(c),function(){r=r.filter(function(l){return l!==c})}},assignSyncMedium:function(i){for(n=!0;r.length;){var c=r;r=[],c.forEach(i)}r={push:function(l){return i(l)},filter:function(){return r}}},assignMedium:function(i){n=!0;var c=[];if(r.length){var l=r;r=[],l.forEach(i),c=r}var u=function(){var p=c;c=[],p.forEach(i)},d=function(){return Promise.resolve().then(u)};d(),r={push:function(p){c.push(p),d()},filter:function(p){return c=c.filter(p),r}}}};return a}function Xd(e){e===void 0&&(e={});var o=Gd(null);return o.options=Ke({async:!0,ssr:!1},e),o}var Kn=function(e){var o=e.sideCar,r=bn(e,["sideCar"]);if(!o)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=o.read();if(!n)throw new Error("Sidecar medium not found");return s.createElement(n,Ke({},r))};Kn.isSideCarExport=!0;function Zd(e,o){return e.useMedium(o),Kn}var Gn=Xd(),zo=function(){},yo=s.forwardRef(function(e,o){var r=s.useRef(null),n=s.useState({onScrollCapture:zo,onWheelCapture:zo,onTouchMoveCapture:zo}),a=n[0],i=n[1],c=e.forwardProps,l=e.children,u=e.className,d=e.removeScrollBar,p=e.enabled,g=e.shards,y=e.sideCar,b=e.noRelative,k=e.noIsolation,f=e.inert,x=e.allowPinchZoom,w=e.as,h=w===void 0?"div":w,m=e.gapMode,C=bn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=y,T=qd([r,o]),E=Ke(Ke({},C),a);return s.createElement(s.Fragment,null,p&&s.createElement(S,{sideCar:Gn,removeScrollBar:d,shards:g,noRelative:b,noIsolation:k,inert:f,setCallbacks:i,allowPinchZoom:!!x,lockRef:r,gapMode:m}),c?s.cloneElement(s.Children.only(l),Ke(Ke({},E),{ref:T})):s.createElement(h,Ke({},E,{className:u,ref:T}),l))});yo.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};yo.classNames={fullWidth:Jt,zeroRight:Qt};var Qd=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Jd(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var o=Qd();return o&&e.setAttribute("nonce",o),e}function eu(e,o){e.styleSheet?e.styleSheet.cssText=o:e.appendChild(document.createTextNode(o))}function tu(e){var o=document.head||document.getElementsByTagName("head")[0];o.appendChild(e)}var ou=function(){var e=0,o=null;return{add:function(r){e==0&&(o=Jd())&&(eu(o,r),tu(o)),e++},remove:function(){e--,!e&&o&&(o.parentNode&&o.parentNode.removeChild(o),o=null)}}},ru=function(){var e=ou();return function(o,r){s.useEffect(function(){return e.add(o),function(){e.remove()}},[o&&r])}},Xn=function(){var e=ru(),o=function(r){var n=r.styles,a=r.dynamic;return e(n,a),null};return o},nu={left:0,top:0,right:0,gap:0},Do=function(e){return parseInt(e||"",10)||0},au=function(e){var o=window.getComputedStyle(document.body),r=o[e==="padding"?"paddingLeft":"marginLeft"],n=o[e==="padding"?"paddingTop":"marginTop"],a=o[e==="padding"?"paddingRight":"marginRight"];return[Do(r),Do(n),Do(a)]},su=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return nu;var o=au(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:o[0],top:o[1],right:o[2],gap:Math.max(0,n-r+o[2]-o[0])}},iu=Xn(),xt="data-scroll-locked",lu=function(e,o,r,n){var a=e.left,i=e.top,c=e.right,l=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(Bd,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(l,"px ").concat(n,`;
  }
  body[`).concat(xt,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([o&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(l,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Qt,` {
    right: `).concat(l,"px ").concat(n,`;
  }
  
  .`).concat(Jt,` {
    margin-right: `).concat(l,"px ").concat(n,`;
  }
  
  .`).concat(Qt," .").concat(Qt,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(Jt," .").concat(Jt,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(xt,`] {
    `).concat(Hd,": ").concat(l,`px;
  }
`)},qr=function(){var e=parseInt(document.body.getAttribute(xt)||"0",10);return isFinite(e)?e:0},cu=function(){s.useEffect(function(){return document.body.setAttribute(xt,(qr()+1).toString()),function(){var e=qr()-1;e<=0?document.body.removeAttribute(xt):document.body.setAttribute(xt,e.toString())}},[])},du=function(e){var o=e.noRelative,r=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n;cu();var i=s.useMemo(function(){return su(a)},[a]);return s.createElement(iu,{styles:lu(i,!o,a,r?"":"!important")})},Ho=!1;if(typeof window<"u")try{var Ht=Object.defineProperty({},"passive",{get:function(){return Ho=!0,!0}});window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch{Ho=!1}var mt=Ho?{passive:!1}:!1,uu=function(e){return e.tagName==="TEXTAREA"},Zn=function(e,o){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return r[o]!=="hidden"&&!(r.overflowY===r.overflowX&&!uu(e)&&r[o]==="visible")},pu=function(e){return Zn(e,"overflowY")},gu=function(e){return Zn(e,"overflowX")},Kr=function(e,o){var r=o.ownerDocument,n=o;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=Qn(e,n);if(a){var i=Jn(e,n),c=i[1],l=i[2];if(c>l)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},mu=function(e){var o=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[o,r,n]},fu=function(e){var o=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[o,r,n]},Qn=function(e,o){return e==="v"?pu(o):gu(o)},Jn=function(e,o){return e==="v"?mu(o):fu(o)},hu=function(e,o){return e==="h"&&o==="rtl"?-1:1},yu=function(e,o,r,n,a){var i=hu(e,window.getComputedStyle(o).direction),c=i*n,l=r.target,u=o.contains(l),d=!1,p=c>0,g=0,y=0;do{if(!l)break;var b=Jn(e,l),k=b[0],f=b[1],x=b[2],w=f-x-i*k;(k||w)&&Qn(e,l)&&(g+=w,y+=k);var h=l.parentNode;l=h&&h.nodeType===Node.DOCUMENT_FRAGMENT_NODE?h.host:h}while(!u&&l!==document.body||u&&(o.contains(l)||o===l));return(p&&Math.abs(g)<1||!p&&Math.abs(y)<1)&&(d=!0),d},Ut=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Gr=function(e){return[e.deltaX,e.deltaY]},Xr=function(e){return e&&"current"in e?e.current:e},xu=function(e,o){return e[0]===o[0]&&e[1]===o[1]},bu=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},vu=0,ft=[];function wu(e){var o=s.useRef([]),r=s.useRef([0,0]),n=s.useRef(),a=s.useState(vu++)[0],i=s.useState(Xn)[0],c=s.useRef(e);s.useEffect(function(){c.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var f=li([e.lockRef.current],(e.shards||[]).map(Xr),!0).filter(Boolean);return f.forEach(function(x){return x.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),f.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var l=s.useCallback(function(f,x){if("touches"in f&&f.touches.length===2||f.type==="wheel"&&f.ctrlKey)return!c.current.allowPinchZoom;var w=Ut(f),h=r.current,m="deltaX"in f?f.deltaX:h[0]-w[0],C="deltaY"in f?f.deltaY:h[1]-w[1],S,T=f.target,E=Math.abs(m)>Math.abs(C)?"h":"v";if("touches"in f&&E==="h"&&T.type==="range")return!1;var $=window.getSelection(),A=$&&$.anchorNode,L=A?A===T||A.contains(T):!1;if(L)return!1;var O=Kr(E,T);if(!O)return!0;if(O?S=E:(S=E==="v"?"h":"v",O=Kr(E,T)),!O)return!1;if(!n.current&&"changedTouches"in f&&(m||C)&&(n.current=S),!S)return!0;var N=n.current||S;return yu(N,x,f,N==="h"?m:C)},[]),u=s.useCallback(function(f){var x=f;if(!(!ft.length||ft[ft.length-1]!==i)){var w="deltaY"in x?Gr(x):Ut(x),h=o.current.filter(function(S){return S.name===x.type&&(S.target===x.target||x.target===S.shadowParent)&&xu(S.delta,w)})[0];if(h&&h.should){x.cancelable&&x.preventDefault();return}if(!h){var m=(c.current.shards||[]).map(Xr).filter(Boolean).filter(function(S){return S.contains(x.target)}),C=m.length>0?l(x,m[0]):!c.current.noIsolation;C&&x.cancelable&&x.preventDefault()}}},[]),d=s.useCallback(function(f,x,w,h){var m={name:f,delta:x,target:w,should:h,shadowParent:$u(w)};o.current.push(m),setTimeout(function(){o.current=o.current.filter(function(C){return C!==m})},1)},[]),p=s.useCallback(function(f){r.current=Ut(f),n.current=void 0},[]),g=s.useCallback(function(f){d(f.type,Gr(f),f.target,l(f,e.lockRef.current))},[]),y=s.useCallback(function(f){d(f.type,Ut(f),f.target,l(f,e.lockRef.current))},[]);s.useEffect(function(){return ft.push(i),e.setCallbacks({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:y}),document.addEventListener("wheel",u,mt),document.addEventListener("touchmove",u,mt),document.addEventListener("touchstart",p,mt),function(){ft=ft.filter(function(f){return f!==i}),document.removeEventListener("wheel",u,mt),document.removeEventListener("touchmove",u,mt),document.removeEventListener("touchstart",p,mt)}},[]);var b=e.removeScrollBar,k=e.inert;return s.createElement(s.Fragment,null,k?s.createElement(i,{styles:bu(a)}):null,b?s.createElement(du,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function $u(e){for(var o=null;e!==null;)e instanceof ShadowRoot&&(o=e.host,e=e.host),e=e.parentNode;return o}const ju=Zd(Gn,wu);var lr=s.forwardRef(function(e,o){return s.createElement(yo,Ke({},e,{ref:o,sideCar:ju}))});lr.classNames=yo.classNames;var Nu=function(e){if(typeof document>"u")return null;var o=Array.isArray(e)?e[0]:e;return o.ownerDocument.body},ht=new WeakMap,Yt=new WeakMap,qt={},Po=0,ea=function(e){return e&&(e.host||ea(e.parentNode))},Su=function(e,o){return o.map(function(r){if(e.contains(r))return r;var n=ea(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},ku=function(e,o,r,n){var a=Su(o,Array.isArray(e)?e:[e]);qt[r]||(qt[r]=new WeakMap);var i=qt[r],c=[],l=new Set,u=new Set(a),d=function(g){!g||l.has(g)||(l.add(g),d(g.parentNode))};a.forEach(d);var p=function(g){!g||u.has(g)||Array.prototype.forEach.call(g.children,function(y){if(l.has(y))p(y);else try{var b=y.getAttribute(n),k=b!==null&&b!=="false",f=(ht.get(y)||0)+1,x=(i.get(y)||0)+1;ht.set(y,f),i.set(y,x),c.push(y),f===1&&k&&Yt.set(y,!0),x===1&&y.setAttribute(r,"true"),k||y.setAttribute(n,"true")}catch(w){console.error("aria-hidden: cannot operate on ",y,w)}})};return p(o),l.clear(),Po++,function(){c.forEach(function(g){var y=ht.get(g)-1,b=i.get(g)-1;ht.set(g,y),i.set(g,b),y||(Yt.has(g)||g.removeAttribute(n),Yt.delete(g)),b||g.removeAttribute(r)}),Po--,Po||(ht=new WeakMap,ht=new WeakMap,Yt=new WeakMap,qt={})}},ta=function(e,o,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=Nu(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live], script"))),ku(n,a,r,"aria-hidden")):function(){return null}};function Cu(e){const o=Eu(e),r=s.forwardRef((n,a)=>{const{children:i,...c}=n,l=s.Children.toArray(i),u=l.find(Au);if(u){const d=u.props.children,p=l.map(g=>g===u?s.Children.count(d)>1?s.Children.only(null):s.isValidElement(d)?d.props.children:null:g);return t.jsx(o,{...c,ref:a,children:s.isValidElement(d)?s.cloneElement(d,void 0,p):null})}return t.jsx(o,{...c,ref:a,children:i})});return r.displayName=`${e}.Slot`,r}function Eu(e){const o=s.forwardRef((r,n)=>{const{children:a,...i}=r;if(s.isValidElement(a)){const c=Iu(a),l=Ru(i,a.props);return a.type!==s.Fragment&&(l.ref=n?wt(n,c):c),s.cloneElement(a,l)}return s.Children.count(a)>1?s.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var Tu=Symbol("radix.slottable");function Au(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Tu}function Ru(e,o){const r={...o};for(const n in o){const a=e[n],i=o[n];/^on[A-Z]/.test(n)?a&&i?r[n]=(...l)=>{const u=i(...l);return a(...l),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...i}:n==="className"&&(r[n]=[a,i].filter(Boolean).join(" "))}return{...e,...r}}function Iu(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var xo="Dialog",[oa]=Ot(xo),[zu,Oe]=oa(xo),ra=e=>{const{__scopeDialog:o,children:r,open:n,defaultOpen:a,onOpenChange:i,modal:c=!0}=e,l=s.useRef(null),u=s.useRef(null),[d,p]=ao({prop:n,defaultProp:a??!1,onChange:i,caller:xo});return t.jsx(zu,{scope:o,triggerRef:l,contentRef:u,contentId:yt(),titleId:yt(),descriptionId:yt(),open:d,onOpenChange:p,onOpenToggle:s.useCallback(()=>p(g=>!g),[p]),modal:c,children:r})};ra.displayName=xo;var na="DialogTrigger",Du=s.forwardRef((e,o)=>{const{__scopeDialog:r,...n}=e,a=Oe(na,r),i=pe(o,a.triggerRef);return t.jsx(ie.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":ur(a.open),...n,ref:i,onClick:re(e.onClick,a.onOpenToggle)})});Du.displayName=na;var cr="DialogPortal",[Pu,aa]=oa(cr,{forceMount:void 0}),sa=e=>{const{__scopeDialog:o,forceMount:r,children:n,container:a}=e,i=Oe(cr,o);return t.jsx(Pu,{scope:o,forceMount:r,children:s.Children.map(n,c=>t.jsx(Mt,{present:r||i.open,children:t.jsx(ho,{asChild:!0,container:a,children:c})}))})};sa.displayName=cr;var so="DialogOverlay",ia=s.forwardRef((e,o)=>{const r=aa(so,e.__scopeDialog),{forceMount:n=r.forceMount,...a}=e,i=Oe(so,e.__scopeDialog);return i.modal?t.jsx(Mt,{present:n||i.open,children:t.jsx(Mu,{...a,ref:o})}):null});ia.displayName=so;var Ou=Cu("DialogOverlay.RemoveScroll"),Mu=s.forwardRef((e,o)=>{const{__scopeDialog:r,...n}=e,a=Oe(so,r);return t.jsx(lr,{as:Ou,allowPinchZoom:!0,shards:[a.contentRef],children:t.jsx(ie.div,{"data-state":ur(a.open),...n,ref:o,style:{pointerEvents:"auto",...n.style}})})}),rt="DialogContent",la=s.forwardRef((e,o)=>{const r=aa(rt,e.__scopeDialog),{forceMount:n=r.forceMount,...a}=e,i=Oe(rt,e.__scopeDialog);return t.jsx(Mt,{present:n||i.open,children:i.modal?t.jsx(Lu,{...a,ref:o}):t.jsx(_u,{...a,ref:o})})});la.displayName=rt;var Lu=s.forwardRef((e,o)=>{const r=Oe(rt,e.__scopeDialog),n=s.useRef(null),a=pe(o,r.contentRef,n);return s.useEffect(()=>{const i=n.current;if(i)return ta(i)},[]),t.jsx(ca,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:re(e.onCloseAutoFocus,i=>{var c;i.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:re(e.onPointerDownOutside,i=>{const c=i.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&i.preventDefault()}),onFocusOutside:re(e.onFocusOutside,i=>i.preventDefault())})}),_u=s.forwardRef((e,o)=>{const r=Oe(rt,e.__scopeDialog),n=s.useRef(!1),a=s.useRef(!1);return t.jsx(ca,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,i),i.defaultPrevented||(n.current||(l=r.triggerRef.current)==null||l.focus(),i.preventDefault()),n.current=!1,a.current=!1},onInteractOutside:i=>{var u,d;(u=e.onInteractOutside)==null||u.call(e,i),i.defaultPrevented||(n.current=!0,i.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const c=i.target;((d=r.triggerRef.current)==null?void 0:d.contains(c))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&a.current&&i.preventDefault()}})}),ca=s.forwardRef((e,o)=>{const{__scopeDialog:r,trapFocus:n,onOpenAutoFocus:a,onCloseAutoFocus:i,...c}=e,l=Oe(rt,r),u=s.useRef(null),d=pe(o,u);return qn(),t.jsxs(t.Fragment,{children:[t.jsx(ir,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:a,onUnmountAutoFocus:i,children:t.jsx(fo,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":ur(l.open),...c,ref:d,onDismiss:()=>l.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(Fu,{titleId:l.titleId}),t.jsx(Vu,{contentRef:u,descriptionId:l.descriptionId})]})]})}),dr="DialogTitle",da=s.forwardRef((e,o)=>{const{__scopeDialog:r,...n}=e,a=Oe(dr,r);return t.jsx(ie.h2,{id:a.titleId,...n,ref:o})});da.displayName=dr;var ua="DialogDescription",pa=s.forwardRef((e,o)=>{const{__scopeDialog:r,...n}=e,a=Oe(ua,r);return t.jsx(ie.p,{id:a.descriptionId,...n,ref:o})});pa.displayName=ua;var ga="DialogClose",ma=s.forwardRef((e,o)=>{const{__scopeDialog:r,...n}=e,a=Oe(ga,r);return t.jsx(ie.button,{type:"button",...n,ref:o,onClick:re(e.onClick,()=>a.onOpenChange(!1))})});ma.displayName=ga;function ur(e){return e?"open":"closed"}var fa="DialogTitleWarning",[pf,ha]=cd(fa,{contentName:rt,titleName:dr,docsSlug:"dialog"}),Fu=({titleId:e})=>{const o=ha(fa),r=`\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},Wu="DialogDescriptionWarning",Vu=({contentRef:e,descriptionId:o})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ha(Wu).contentName}}.`;return s.useEffect(()=>{var i;const a=(i=e.current)==null?void 0:i.getAttribute("aria-describedby");o&&a&&(document.getElementById(o)||console.warn(n))},[n,e,o]),null},Bu=ra,Hu=sa,ya=ia,xa=la,ba=da,va=pa,Uu=ma;const Nt=Bu,Yu=Hu,wa=s.forwardRef(({className:e,...o},r)=>t.jsx(ya,{ref:r,className:ae("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...o}));wa.displayName=ya.displayName;const it=s.forwardRef(({className:e,children:o,...r},n)=>t.jsxs(Yu,{children:[t.jsx(wa,{}),t.jsxs(xa,{ref:n,className:ae("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...r,children:[o,t.jsxs(Uu,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[t.jsx(nr,{className:"h-4 w-4"}),t.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));it.displayName=xa.displayName;const lt=({className:e,...o})=>t.jsx("div",{className:ae("flex flex-col space-y-1.5 text-center sm:text-left",e),...o});lt.displayName="DialogHeader";const ct=({className:e,...o})=>t.jsx("div",{className:ae("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...o});ct.displayName="DialogFooter";const dt=s.forwardRef(({className:e,...o},r)=>t.jsx(ba,{ref:r,className:ae("text-lg font-semibold leading-none tracking-tight",e),...o}));dt.displayName=ba.displayName;const ut=s.forwardRef(({className:e,...o},r)=>t.jsx(va,{ref:r,className:ae("text-sm text-muted-foreground",e),...o}));ut.displayName=va.displayName;var qu=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ku=qu.reduce((e,o)=>{const r=Cn(`Primitive.${o}`),n=s.forwardRef((a,i)=>{const{asChild:c,...l}=a,u=c?r:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(u,{...l,ref:i})});return n.displayName=`Primitive.${o}`,{...e,[o]:n}},{}),Gu="Label",$a=s.forwardRef((e,o)=>t.jsx(Ku.label,{...e,ref:o,onMouseDown:r=>{var a;r.target.closest("button, input, select, textarea")||((a=e.onMouseDown)==null||a.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));$a.displayName=Gu;var ja=$a;const Xu=Pt("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),G=s.forwardRef(({className:e,...o},r)=>t.jsx(ja,{ref:r,className:ae(Xu(),e),...o}));G.displayName=ja.displayName;function Zr(e,[o,r]){return Math.min(r,Math.max(o,e))}function Qr(e){const o=Zu(e),r=s.forwardRef((n,a)=>{const{children:i,...c}=n,l=s.Children.toArray(i),u=l.find(Ju);if(u){const d=u.props.children,p=l.map(g=>g===u?s.Children.count(d)>1?s.Children.only(null):s.isValidElement(d)?d.props.children:null:g);return t.jsx(o,{...c,ref:a,children:s.isValidElement(d)?s.cloneElement(d,void 0,p):null})}return t.jsx(o,{...c,ref:a,children:i})});return r.displayName=`${e}.Slot`,r}function Zu(e){const o=s.forwardRef((r,n)=>{const{children:a,...i}=r;if(s.isValidElement(a)){const c=tp(a),l=ep(i,a.props);return a.type!==s.Fragment&&(l.ref=n?wt(n,c):c),s.cloneElement(a,l)}return s.Children.count(a)>1?s.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var Qu=Symbol("radix.slottable");function Ju(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Qu}function ep(e,o){const r={...o};for(const n in o){const a=e[n],i=o[n];/^on[A-Z]/.test(n)?a&&i?r[n]=(...l)=>{const u=i(...l);return a(...l),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...i}:n==="className"&&(r[n]=[a,i].filter(Boolean).join(" "))}return{...e,...r}}function tp(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Na(e){const o=e+"CollectionProvider",[r,n]=Ot(o),[a,i]=r(o,{collectionRef:{current:null},itemMap:new Map}),c=f=>{const{scope:x,children:w}=f,h=tt.useRef(null),m=tt.useRef(new Map).current;return t.jsx(a,{scope:x,itemMap:m,collectionRef:h,children:w})};c.displayName=o;const l=e+"CollectionSlot",u=Qr(l),d=tt.forwardRef((f,x)=>{const{scope:w,children:h}=f,m=i(l,w),C=pe(x,m.collectionRef);return t.jsx(u,{ref:C,children:h})});d.displayName=l;const p=e+"CollectionItemSlot",g="data-radix-collection-item",y=Qr(p),b=tt.forwardRef((f,x)=>{const{scope:w,children:h,...m}=f,C=tt.useRef(null),S=pe(x,C),T=i(p,w);return tt.useEffect(()=>(T.itemMap.set(C,{ref:C,...m}),()=>void T.itemMap.delete(C))),t.jsx(y,{[g]:"",ref:S,children:h})});b.displayName=p;function k(f){const x=i(e+"CollectionConsumer",f);return tt.useCallback(()=>{const h=x.collectionRef.current;if(!h)return[];const m=Array.from(h.querySelectorAll(`[${g}]`));return Array.from(x.itemMap.values()).sort((T,E)=>m.indexOf(T.ref.current)-m.indexOf(E.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:c,Slot:d,ItemSlot:b},k,n]}var op=s.createContext(void 0);function rp(e){const o=s.useContext(op);return e||o||"ltr"}const np=["top","right","bottom","left"],Ge=Math.min,ke=Math.max,io=Math.round,Kt=Math.floor,Le=e=>({x:e,y:e}),ap={left:"right",right:"left",bottom:"top",top:"bottom"},sp={start:"end",end:"start"};function Uo(e,o,r){return ke(e,Ge(o,r))}function He(e,o){return typeof e=="function"?e(o):e}function Ue(e){return e.split("-")[0]}function St(e){return e.split("-")[1]}function pr(e){return e==="x"?"y":"x"}function gr(e){return e==="y"?"height":"width"}const ip=new Set(["top","bottom"]);function Me(e){return ip.has(Ue(e))?"y":"x"}function mr(e){return pr(Me(e))}function lp(e,o,r){r===void 0&&(r=!1);const n=St(e),a=mr(e),i=gr(a);let c=a==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return o.reference[i]>o.floating[i]&&(c=lo(c)),[c,lo(c)]}function cp(e){const o=lo(e);return[Yo(e),o,Yo(o)]}function Yo(e){return e.replace(/start|end/g,o=>sp[o])}const Jr=["left","right"],en=["right","left"],dp=["top","bottom"],up=["bottom","top"];function pp(e,o,r){switch(e){case"top":case"bottom":return r?o?en:Jr:o?Jr:en;case"left":case"right":return o?dp:up;default:return[]}}function gp(e,o,r,n){const a=St(e);let i=pp(Ue(e),r==="start",n);return a&&(i=i.map(c=>c+"-"+a),o&&(i=i.concat(i.map(Yo)))),i}function lo(e){return e.replace(/left|right|bottom|top/g,o=>ap[o])}function mp(e){return{top:0,right:0,bottom:0,left:0,...e}}function Sa(e){return typeof e!="number"?mp(e):{top:e,right:e,bottom:e,left:e}}function co(e){const{x:o,y:r,width:n,height:a}=e;return{width:n,height:a,top:r,left:o,right:o+n,bottom:r+a,x:o,y:r}}function tn(e,o,r){let{reference:n,floating:a}=e;const i=Me(o),c=mr(o),l=gr(c),u=Ue(o),d=i==="y",p=n.x+n.width/2-a.width/2,g=n.y+n.height/2-a.height/2,y=n[l]/2-a[l]/2;let b;switch(u){case"top":b={x:p,y:n.y-a.height};break;case"bottom":b={x:p,y:n.y+n.height};break;case"right":b={x:n.x+n.width,y:g};break;case"left":b={x:n.x-a.width,y:g};break;default:b={x:n.x,y:n.y}}switch(St(o)){case"start":b[c]-=y*(r&&d?-1:1);break;case"end":b[c]+=y*(r&&d?-1:1);break}return b}const fp=async(e,o,r)=>{const{placement:n="bottom",strategy:a="absolute",middleware:i=[],platform:c}=r,l=i.filter(Boolean),u=await(c.isRTL==null?void 0:c.isRTL(o));let d=await c.getElementRects({reference:e,floating:o,strategy:a}),{x:p,y:g}=tn(d,n,u),y=n,b={},k=0;for(let f=0;f<l.length;f++){const{name:x,fn:w}=l[f],{x:h,y:m,data:C,reset:S}=await w({x:p,y:g,initialPlacement:n,placement:y,strategy:a,middlewareData:b,rects:d,platform:c,elements:{reference:e,floating:o}});p=h??p,g=m??g,b={...b,[x]:{...b[x],...C}},S&&k<=50&&(k++,typeof S=="object"&&(S.placement&&(y=S.placement),S.rects&&(d=S.rects===!0?await c.getElementRects({reference:e,floating:o,strategy:a}):S.rects),{x:p,y:g}=tn(d,y,u)),f=-1)}return{x:p,y:g,placement:y,strategy:a,middlewareData:b}};async function It(e,o){var r;o===void 0&&(o={});const{x:n,y:a,platform:i,rects:c,elements:l,strategy:u}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:g="floating",altBoundary:y=!1,padding:b=0}=He(o,e),k=Sa(b),x=l[y?g==="floating"?"reference":"floating":g],w=co(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(x)))==null||r?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:d,rootBoundary:p,strategy:u})),h=g==="floating"?{x:n,y:a,width:c.floating.width,height:c.floating.height}:c.reference,m=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),C=await(i.isElement==null?void 0:i.isElement(m))?await(i.getScale==null?void 0:i.getScale(m))||{x:1,y:1}:{x:1,y:1},S=co(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:h,offsetParent:m,strategy:u}):h);return{top:(w.top-S.top+k.top)/C.y,bottom:(S.bottom-w.bottom+k.bottom)/C.y,left:(w.left-S.left+k.left)/C.x,right:(S.right-w.right+k.right)/C.x}}const hp=e=>({name:"arrow",options:e,async fn(o){const{x:r,y:n,placement:a,rects:i,platform:c,elements:l,middlewareData:u}=o,{element:d,padding:p=0}=He(e,o)||{};if(d==null)return{};const g=Sa(p),y={x:r,y:n},b=mr(a),k=gr(b),f=await c.getDimensions(d),x=b==="y",w=x?"top":"left",h=x?"bottom":"right",m=x?"clientHeight":"clientWidth",C=i.reference[k]+i.reference[b]-y[b]-i.floating[k],S=y[b]-i.reference[b],T=await(c.getOffsetParent==null?void 0:c.getOffsetParent(d));let E=T?T[m]:0;(!E||!await(c.isElement==null?void 0:c.isElement(T)))&&(E=l.floating[m]||i.floating[k]);const $=C/2-S/2,A=E/2-f[k]/2-1,L=Ge(g[w],A),O=Ge(g[h],A),N=L,D=E-f[k]-O,P=E/2-f[k]/2+$,_=Uo(N,P,D),F=!u.arrow&&St(a)!=null&&P!==_&&i.reference[k]/2-(P<N?L:O)-f[k]/2<0,K=F?P<N?P-N:P-D:0;return{[b]:y[b]+K,data:{[b]:_,centerOffset:P-_-K,...F&&{alignmentOffset:K}},reset:F}}}),yp=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(o){var r,n;const{placement:a,middlewareData:i,rects:c,initialPlacement:l,platform:u,elements:d}=o,{mainAxis:p=!0,crossAxis:g=!0,fallbackPlacements:y,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:f=!0,...x}=He(e,o);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const w=Ue(a),h=Me(l),m=Ue(l)===l,C=await(u.isRTL==null?void 0:u.isRTL(d.floating)),S=y||(m||!f?[lo(l)]:cp(l)),T=k!=="none";!y&&T&&S.push(...gp(l,f,k,C));const E=[l,...S],$=await It(o,x),A=[];let L=((n=i.flip)==null?void 0:n.overflows)||[];if(p&&A.push($[w]),g){const P=lp(a,c,C);A.push($[P[0]],$[P[1]])}if(L=[...L,{placement:a,overflows:A}],!A.every(P=>P<=0)){var O,N;const P=(((O=i.flip)==null?void 0:O.index)||0)+1,_=E[P];if(_&&(!(g==="alignment"?h!==Me(_):!1)||L.every(I=>Me(I.placement)===h?I.overflows[0]>0:!0)))return{data:{index:P,overflows:L},reset:{placement:_}};let F=(N=L.filter(K=>K.overflows[0]<=0).sort((K,I)=>K.overflows[1]-I.overflows[1])[0])==null?void 0:N.placement;if(!F)switch(b){case"bestFit":{var D;const K=(D=L.filter(I=>{if(T){const Z=Me(I.placement);return Z===h||Z==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(Z=>Z>0).reduce((Z,J)=>Z+J,0)]).sort((I,Z)=>I[1]-Z[1])[0])==null?void 0:D[0];K&&(F=K);break}case"initialPlacement":F=l;break}if(a!==F)return{reset:{placement:F}}}return{}}}};function on(e,o){return{top:e.top-o.height,right:e.right-o.width,bottom:e.bottom-o.height,left:e.left-o.width}}function rn(e){return np.some(o=>e[o]>=0)}const xp=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(o){const{rects:r}=o,{strategy:n="referenceHidden",...a}=He(e,o);switch(n){case"referenceHidden":{const i=await It(o,{...a,elementContext:"reference"}),c=on(i,r.reference);return{data:{referenceHiddenOffsets:c,referenceHidden:rn(c)}}}case"escaped":{const i=await It(o,{...a,altBoundary:!0}),c=on(i,r.floating);return{data:{escapedOffsets:c,escaped:rn(c)}}}default:return{}}}}},ka=new Set(["left","top"]);async function bp(e,o){const{placement:r,platform:n,elements:a}=e,i=await(n.isRTL==null?void 0:n.isRTL(a.floating)),c=Ue(r),l=St(r),u=Me(r)==="y",d=ka.has(c)?-1:1,p=i&&u?-1:1,g=He(o,e);let{mainAxis:y,crossAxis:b,alignmentAxis:k}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return l&&typeof k=="number"&&(b=l==="end"?k*-1:k),u?{x:b*p,y:y*d}:{x:y*d,y:b*p}}const vp=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(o){var r,n;const{x:a,y:i,placement:c,middlewareData:l}=o,u=await bp(o,e);return c===((r=l.offset)==null?void 0:r.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:a+u.x,y:i+u.y,data:{...u,placement:c}}}}},wp=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(o){const{x:r,y:n,placement:a}=o,{mainAxis:i=!0,crossAxis:c=!1,limiter:l={fn:x=>{let{x:w,y:h}=x;return{x:w,y:h}}},...u}=He(e,o),d={x:r,y:n},p=await It(o,u),g=Me(Ue(a)),y=pr(g);let b=d[y],k=d[g];if(i){const x=y==="y"?"top":"left",w=y==="y"?"bottom":"right",h=b+p[x],m=b-p[w];b=Uo(h,b,m)}if(c){const x=g==="y"?"top":"left",w=g==="y"?"bottom":"right",h=k+p[x],m=k-p[w];k=Uo(h,k,m)}const f=l.fn({...o,[y]:b,[g]:k});return{...f,data:{x:f.x-r,y:f.y-n,enabled:{[y]:i,[g]:c}}}}}},$p=function(e){return e===void 0&&(e={}),{options:e,fn(o){const{x:r,y:n,placement:a,rects:i,middlewareData:c}=o,{offset:l=0,mainAxis:u=!0,crossAxis:d=!0}=He(e,o),p={x:r,y:n},g=Me(a),y=pr(g);let b=p[y],k=p[g];const f=He(l,o),x=typeof f=="number"?{mainAxis:f,crossAxis:0}:{mainAxis:0,crossAxis:0,...f};if(u){const m=y==="y"?"height":"width",C=i.reference[y]-i.floating[m]+x.mainAxis,S=i.reference[y]+i.reference[m]-x.mainAxis;b<C?b=C:b>S&&(b=S)}if(d){var w,h;const m=y==="y"?"width":"height",C=ka.has(Ue(a)),S=i.reference[g]-i.floating[m]+(C&&((w=c.offset)==null?void 0:w[g])||0)+(C?0:x.crossAxis),T=i.reference[g]+i.reference[m]+(C?0:((h=c.offset)==null?void 0:h[g])||0)-(C?x.crossAxis:0);k<S?k=S:k>T&&(k=T)}return{[y]:b,[g]:k}}}},jp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(o){var r,n;const{placement:a,rects:i,platform:c,elements:l}=o,{apply:u=()=>{},...d}=He(e,o),p=await It(o,d),g=Ue(a),y=St(a),b=Me(a)==="y",{width:k,height:f}=i.floating;let x,w;g==="top"||g==="bottom"?(x=g,w=y===(await(c.isRTL==null?void 0:c.isRTL(l.floating))?"start":"end")?"left":"right"):(w=g,x=y==="end"?"top":"bottom");const h=f-p.top-p.bottom,m=k-p.left-p.right,C=Ge(f-p[x],h),S=Ge(k-p[w],m),T=!o.middlewareData.shift;let E=C,$=S;if((r=o.middlewareData.shift)!=null&&r.enabled.x&&($=m),(n=o.middlewareData.shift)!=null&&n.enabled.y&&(E=h),T&&!y){const L=ke(p.left,0),O=ke(p.right,0),N=ke(p.top,0),D=ke(p.bottom,0);b?$=k-2*(L!==0||O!==0?L+O:ke(p.left,p.right)):E=f-2*(N!==0||D!==0?N+D:ke(p.top,p.bottom))}await u({...o,availableWidth:$,availableHeight:E});const A=await c.getDimensions(l.floating);return k!==A.width||f!==A.height?{reset:{rects:!0}}:{}}}};function bo(){return typeof window<"u"}function kt(e){return Ca(e)?(e.nodeName||"").toLowerCase():"#document"}function Ce(e){var o;return(e==null||(o=e.ownerDocument)==null?void 0:o.defaultView)||window}function We(e){var o;return(o=(Ca(e)?e.ownerDocument:e.document)||window.document)==null?void 0:o.documentElement}function Ca(e){return bo()?e instanceof Node||e instanceof Ce(e).Node:!1}function ze(e){return bo()?e instanceof Element||e instanceof Ce(e).Element:!1}function _e(e){return bo()?e instanceof HTMLElement||e instanceof Ce(e).HTMLElement:!1}function nn(e){return!bo()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ce(e).ShadowRoot}const Np=new Set(["inline","contents"]);function Lt(e){const{overflow:o,overflowX:r,overflowY:n,display:a}=De(e);return/auto|scroll|overlay|hidden|clip/.test(o+n+r)&&!Np.has(a)}const Sp=new Set(["table","td","th"]);function kp(e){return Sp.has(kt(e))}const Cp=[":popover-open",":modal"];function vo(e){return Cp.some(o=>{try{return e.matches(o)}catch{return!1}})}const Ep=["transform","translate","scale","rotate","perspective"],Tp=["transform","translate","scale","rotate","perspective","filter"],Ap=["paint","layout","strict","content"];function fr(e){const o=hr(),r=ze(e)?De(e):e;return Ep.some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!o&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!o&&(r.filter?r.filter!=="none":!1)||Tp.some(n=>(r.willChange||"").includes(n))||Ap.some(n=>(r.contain||"").includes(n))}function Rp(e){let o=Xe(e);for(;_e(o)&&!vt(o);){if(fr(o))return o;if(vo(o))return null;o=Xe(o)}return null}function hr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ip=new Set(["html","body","#document"]);function vt(e){return Ip.has(kt(e))}function De(e){return Ce(e).getComputedStyle(e)}function wo(e){return ze(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Xe(e){if(kt(e)==="html")return e;const o=e.assignedSlot||e.parentNode||nn(e)&&e.host||We(e);return nn(o)?o.host:o}function Ea(e){const o=Xe(e);return vt(o)?e.ownerDocument?e.ownerDocument.body:e.body:_e(o)&&Lt(o)?o:Ea(o)}function zt(e,o,r){var n;o===void 0&&(o=[]),r===void 0&&(r=!0);const a=Ea(e),i=a===((n=e.ownerDocument)==null?void 0:n.body),c=Ce(a);if(i){const l=qo(c);return o.concat(c,c.visualViewport||[],Lt(a)?a:[],l&&r?zt(l):[])}return o.concat(a,zt(a,[],r))}function qo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ta(e){const o=De(e);let r=parseFloat(o.width)||0,n=parseFloat(o.height)||0;const a=_e(e),i=a?e.offsetWidth:r,c=a?e.offsetHeight:n,l=io(r)!==i||io(n)!==c;return l&&(r=i,n=c),{width:r,height:n,$:l}}function yr(e){return ze(e)?e:e.contextElement}function bt(e){const o=yr(e);if(!_e(o))return Le(1);const r=o.getBoundingClientRect(),{width:n,height:a,$:i}=Ta(o);let c=(i?io(r.width):r.width)/n,l=(i?io(r.height):r.height)/a;return(!c||!Number.isFinite(c))&&(c=1),(!l||!Number.isFinite(l))&&(l=1),{x:c,y:l}}const zp=Le(0);function Aa(e){const o=Ce(e);return!hr()||!o.visualViewport?zp:{x:o.visualViewport.offsetLeft,y:o.visualViewport.offsetTop}}function Dp(e,o,r){return o===void 0&&(o=!1),!r||o&&r!==Ce(e)?!1:o}function nt(e,o,r,n){o===void 0&&(o=!1),r===void 0&&(r=!1);const a=e.getBoundingClientRect(),i=yr(e);let c=Le(1);o&&(n?ze(n)&&(c=bt(n)):c=bt(e));const l=Dp(i,r,n)?Aa(i):Le(0);let u=(a.left+l.x)/c.x,d=(a.top+l.y)/c.y,p=a.width/c.x,g=a.height/c.y;if(i){const y=Ce(i),b=n&&ze(n)?Ce(n):n;let k=y,f=qo(k);for(;f&&n&&b!==k;){const x=bt(f),w=f.getBoundingClientRect(),h=De(f),m=w.left+(f.clientLeft+parseFloat(h.paddingLeft))*x.x,C=w.top+(f.clientTop+parseFloat(h.paddingTop))*x.y;u*=x.x,d*=x.y,p*=x.x,g*=x.y,u+=m,d+=C,k=Ce(f),f=qo(k)}}return co({width:p,height:g,x:u,y:d})}function $o(e,o){const r=wo(e).scrollLeft;return o?o.left+r:nt(We(e)).left+r}function Ra(e,o){const r=e.getBoundingClientRect(),n=r.left+o.scrollLeft-$o(e,r),a=r.top+o.scrollTop;return{x:n,y:a}}function Pp(e){let{elements:o,rect:r,offsetParent:n,strategy:a}=e;const i=a==="fixed",c=We(n),l=o?vo(o.floating):!1;if(n===c||l&&i)return r;let u={scrollLeft:0,scrollTop:0},d=Le(1);const p=Le(0),g=_e(n);if((g||!g&&!i)&&((kt(n)!=="body"||Lt(c))&&(u=wo(n)),_e(n))){const b=nt(n);d=bt(n),p.x=b.x+n.clientLeft,p.y=b.y+n.clientTop}const y=c&&!g&&!i?Ra(c,u):Le(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-u.scrollLeft*d.x+p.x+y.x,y:r.y*d.y-u.scrollTop*d.y+p.y+y.y}}function Op(e){return Array.from(e.getClientRects())}function Mp(e){const o=We(e),r=wo(e),n=e.ownerDocument.body,a=ke(o.scrollWidth,o.clientWidth,n.scrollWidth,n.clientWidth),i=ke(o.scrollHeight,o.clientHeight,n.scrollHeight,n.clientHeight);let c=-r.scrollLeft+$o(e);const l=-r.scrollTop;return De(n).direction==="rtl"&&(c+=ke(o.clientWidth,n.clientWidth)-a),{width:a,height:i,x:c,y:l}}const an=25;function Lp(e,o){const r=Ce(e),n=We(e),a=r.visualViewport;let i=n.clientWidth,c=n.clientHeight,l=0,u=0;if(a){i=a.width,c=a.height;const p=hr();(!p||p&&o==="fixed")&&(l=a.offsetLeft,u=a.offsetTop)}const d=$o(n);if(d<=0){const p=n.ownerDocument,g=p.body,y=getComputedStyle(g),b=p.compatMode==="CSS1Compat"&&parseFloat(y.marginLeft)+parseFloat(y.marginRight)||0,k=Math.abs(n.clientWidth-g.clientWidth-b);k<=an&&(i-=k)}else d<=an&&(i+=d);return{width:i,height:c,x:l,y:u}}const _p=new Set(["absolute","fixed"]);function Fp(e,o){const r=nt(e,!0,o==="fixed"),n=r.top+e.clientTop,a=r.left+e.clientLeft,i=_e(e)?bt(e):Le(1),c=e.clientWidth*i.x,l=e.clientHeight*i.y,u=a*i.x,d=n*i.y;return{width:c,height:l,x:u,y:d}}function sn(e,o,r){let n;if(o==="viewport")n=Lp(e,r);else if(o==="document")n=Mp(We(e));else if(ze(o))n=Fp(o,r);else{const a=Aa(e);n={x:o.x-a.x,y:o.y-a.y,width:o.width,height:o.height}}return co(n)}function Ia(e,o){const r=Xe(e);return r===o||!ze(r)||vt(r)?!1:De(r).position==="fixed"||Ia(r,o)}function Wp(e,o){const r=o.get(e);if(r)return r;let n=zt(e,[],!1).filter(l=>ze(l)&&kt(l)!=="body"),a=null;const i=De(e).position==="fixed";let c=i?Xe(e):e;for(;ze(c)&&!vt(c);){const l=De(c),u=fr(c);!u&&l.position==="fixed"&&(a=null),(i?!u&&!a:!u&&l.position==="static"&&!!a&&_p.has(a.position)||Lt(c)&&!u&&Ia(e,c))?n=n.filter(p=>p!==c):a=l,c=Xe(c)}return o.set(e,n),n}function Vp(e){let{element:o,boundary:r,rootBoundary:n,strategy:a}=e;const c=[...r==="clippingAncestors"?vo(o)?[]:Wp(o,this._c):[].concat(r),n],l=c[0],u=c.reduce((d,p)=>{const g=sn(o,p,a);return d.top=ke(g.top,d.top),d.right=Ge(g.right,d.right),d.bottom=Ge(g.bottom,d.bottom),d.left=ke(g.left,d.left),d},sn(o,l,a));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Bp(e){const{width:o,height:r}=Ta(e);return{width:o,height:r}}function Hp(e,o,r){const n=_e(o),a=We(o),i=r==="fixed",c=nt(e,!0,i,o);let l={scrollLeft:0,scrollTop:0};const u=Le(0);function d(){u.x=$o(a)}if(n||!n&&!i)if((kt(o)!=="body"||Lt(a))&&(l=wo(o)),n){const b=nt(o,!0,i,o);u.x=b.x+o.clientLeft,u.y=b.y+o.clientTop}else a&&d();i&&!n&&a&&d();const p=a&&!n&&!i?Ra(a,l):Le(0),g=c.left+l.scrollLeft-u.x-p.x,y=c.top+l.scrollTop-u.y-p.y;return{x:g,y,width:c.width,height:c.height}}function Oo(e){return De(e).position==="static"}function ln(e,o){if(!_e(e)||De(e).position==="fixed")return null;if(o)return o(e);let r=e.offsetParent;return We(e)===r&&(r=r.ownerDocument.body),r}function za(e,o){const r=Ce(e);if(vo(e))return r;if(!_e(e)){let a=Xe(e);for(;a&&!vt(a);){if(ze(a)&&!Oo(a))return a;a=Xe(a)}return r}let n=ln(e,o);for(;n&&kp(n)&&Oo(n);)n=ln(n,o);return n&&vt(n)&&Oo(n)&&!fr(n)?r:n||Rp(e)||r}const Up=async function(e){const o=this.getOffsetParent||za,r=this.getDimensions,n=await r(e.floating);return{reference:Hp(e.reference,await o(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Yp(e){return De(e).direction==="rtl"}const qp={convertOffsetParentRelativeRectToViewportRelativeRect:Pp,getDocumentElement:We,getClippingRect:Vp,getOffsetParent:za,getElementRects:Up,getClientRects:Op,getDimensions:Bp,getScale:bt,isElement:ze,isRTL:Yp};function Da(e,o){return e.x===o.x&&e.y===o.y&&e.width===o.width&&e.height===o.height}function Kp(e,o){let r=null,n;const a=We(e);function i(){var l;clearTimeout(n),(l=r)==null||l.disconnect(),r=null}function c(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),i();const d=e.getBoundingClientRect(),{left:p,top:g,width:y,height:b}=d;if(l||o(),!y||!b)return;const k=Kt(g),f=Kt(a.clientWidth-(p+y)),x=Kt(a.clientHeight-(g+b)),w=Kt(p),m={rootMargin:-k+"px "+-f+"px "+-x+"px "+-w+"px",threshold:ke(0,Ge(1,u))||1};let C=!0;function S(T){const E=T[0].intersectionRatio;if(E!==u){if(!C)return c();E?c(!1,E):n=setTimeout(()=>{c(!1,1e-7)},1e3)}E===1&&!Da(d,e.getBoundingClientRect())&&c(),C=!1}try{r=new IntersectionObserver(S,{...m,root:a.ownerDocument})}catch{r=new IntersectionObserver(S,m)}r.observe(e)}return c(!0),i}function Gp(e,o,r,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=n,d=yr(e),p=a||i?[...d?zt(d):[],...zt(o)]:[];p.forEach(w=>{a&&w.addEventListener("scroll",r,{passive:!0}),i&&w.addEventListener("resize",r)});const g=d&&l?Kp(d,r):null;let y=-1,b=null;c&&(b=new ResizeObserver(w=>{let[h]=w;h&&h.target===d&&b&&(b.unobserve(o),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var m;(m=b)==null||m.observe(o)})),r()}),d&&!u&&b.observe(d),b.observe(o));let k,f=u?nt(e):null;u&&x();function x(){const w=nt(e);f&&!Da(f,w)&&r(),f=w,k=requestAnimationFrame(x)}return r(),()=>{var w;p.forEach(h=>{a&&h.removeEventListener("scroll",r),i&&h.removeEventListener("resize",r)}),g==null||g(),(w=b)==null||w.disconnect(),b=null,u&&cancelAnimationFrame(k)}}const Xp=vp,Zp=wp,Qp=yp,Jp=jp,eg=xp,cn=hp,tg=$p,og=(e,o,r)=>{const n=new Map,a={platform:qp,...r},i={...a.platform,_c:n};return fp(e,o,{...a,platform:i})};var rg=typeof document<"u",ng=function(){},eo=rg?s.useLayoutEffect:ng;function uo(e,o){if(e===o)return!0;if(typeof e!=typeof o)return!1;if(typeof e=="function"&&e.toString()===o.toString())return!0;let r,n,a;if(e&&o&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==o.length)return!1;for(n=r;n--!==0;)if(!uo(e[n],o[n]))return!1;return!0}if(a=Object.keys(e),r=a.length,r!==Object.keys(o).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(o,a[n]))return!1;for(n=r;n--!==0;){const i=a[n];if(!(i==="_owner"&&e.$$typeof)&&!uo(e[i],o[i]))return!1}return!0}return e!==e&&o!==o}function Pa(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function dn(e,o){const r=Pa(e);return Math.round(o*r)/r}function Mo(e){const o=s.useRef(e);return eo(()=>{o.current=e}),o}function ag(e){e===void 0&&(e={});const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:a,elements:{reference:i,floating:c}={},transform:l=!0,whileElementsMounted:u,open:d}=e,[p,g]=s.useState({x:0,y:0,strategy:r,placement:o,middlewareData:{},isPositioned:!1}),[y,b]=s.useState(n);uo(y,n)||b(n);const[k,f]=s.useState(null),[x,w]=s.useState(null),h=s.useCallback(I=>{I!==T.current&&(T.current=I,f(I))},[]),m=s.useCallback(I=>{I!==E.current&&(E.current=I,w(I))},[]),C=i||k,S=c||x,T=s.useRef(null),E=s.useRef(null),$=s.useRef(p),A=u!=null,L=Mo(u),O=Mo(a),N=Mo(d),D=s.useCallback(()=>{if(!T.current||!E.current)return;const I={placement:o,strategy:r,middleware:y};O.current&&(I.platform=O.current),og(T.current,E.current,I).then(Z=>{const J={...Z,isPositioned:N.current!==!1};P.current&&!uo($.current,J)&&($.current=J,Dt.flushSync(()=>{g(J)}))})},[y,o,r,O,N]);eo(()=>{d===!1&&$.current.isPositioned&&($.current.isPositioned=!1,g(I=>({...I,isPositioned:!1})))},[d]);const P=s.useRef(!1);eo(()=>(P.current=!0,()=>{P.current=!1}),[]),eo(()=>{if(C&&(T.current=C),S&&(E.current=S),C&&S){if(L.current)return L.current(C,S,D);D()}},[C,S,D,L,A]);const _=s.useMemo(()=>({reference:T,floating:E,setReference:h,setFloating:m}),[h,m]),F=s.useMemo(()=>({reference:C,floating:S}),[C,S]),K=s.useMemo(()=>{const I={position:r,left:0,top:0};if(!F.floating)return I;const Z=dn(F.floating,p.x),J=dn(F.floating,p.y);return l?{...I,transform:"translate("+Z+"px, "+J+"px)",...Pa(F.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:Z,top:J}},[r,l,F.floating,p.x,p.y]);return s.useMemo(()=>({...p,update:D,refs:_,elements:F,floatingStyles:K}),[p,D,_,F,K])}const sg=e=>{function o(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:a}=typeof e=="function"?e(r):e;return n&&o(n)?n.current!=null?cn({element:n.current,padding:a}).fn(r):{}:n?cn({element:n,padding:a}).fn(r):{}}}},ig=(e,o)=>({...Xp(e),options:[e,o]}),lg=(e,o)=>({...Zp(e),options:[e,o]}),cg=(e,o)=>({...tg(e),options:[e,o]}),dg=(e,o)=>({...Qp(e),options:[e,o]}),ug=(e,o)=>({...Jp(e),options:[e,o]}),pg=(e,o)=>({...eg(e),options:[e,o]}),gg=(e,o)=>({...sg(e),options:[e,o]});var mg="Arrow",Oa=s.forwardRef((e,o)=>{const{children:r,width:n=10,height:a=5,...i}=e;return t.jsx(ie.svg,{...i,ref:o,width:n,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:t.jsx("polygon",{points:"0,0 30,0 15,10"})})});Oa.displayName=mg;var fg=Oa;function hg(e){const[o,r]=s.useState(void 0);return $e(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const i=a[0];let c,l;if("borderBoxSize"in i){const u=i.borderBoxSize,d=Array.isArray(u)?u[0]:u;c=d.inlineSize,l=d.blockSize}else c=e.offsetWidth,l=e.offsetHeight;r({width:c,height:l})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),o}var xr="Popper",[Ma,La]=Ot(xr),[yg,_a]=Ma(xr),Fa=e=>{const{__scopePopper:o,children:r}=e,[n,a]=s.useState(null);return t.jsx(yg,{scope:o,anchor:n,onAnchorChange:a,children:r})};Fa.displayName=xr;var Wa="PopperAnchor",Va=s.forwardRef((e,o)=>{const{__scopePopper:r,virtualRef:n,...a}=e,i=_a(Wa,r),c=s.useRef(null),l=pe(o,c),u=s.useRef(null);return s.useEffect(()=>{const d=u.current;u.current=(n==null?void 0:n.current)||c.current,d!==u.current&&i.onAnchorChange(u.current)}),n?null:t.jsx(ie.div,{...a,ref:l})});Va.displayName=Wa;var br="PopperContent",[xg,bg]=Ma(br),Ba=s.forwardRef((e,o)=>{var v,R,Y,W,z,q;const{__scopePopper:r,side:n="bottom",sideOffset:a=0,align:i="center",alignOffset:c=0,arrowPadding:l=0,avoidCollisions:u=!0,collisionBoundary:d=[],collisionPadding:p=0,sticky:g="partial",hideWhenDetached:y=!1,updatePositionStrategy:b="optimized",onPlaced:k,...f}=e,x=_a(br,r),[w,h]=s.useState(null),m=pe(o,se=>h(se)),[C,S]=s.useState(null),T=hg(C),E=(T==null?void 0:T.width)??0,$=(T==null?void 0:T.height)??0,A=n+(i!=="center"?"-"+i:""),L=typeof p=="number"?p:{top:0,right:0,bottom:0,left:0,...p},O=Array.isArray(d)?d:[d],N=O.length>0,D={padding:L,boundary:O.filter(wg),altBoundary:N},{refs:P,floatingStyles:_,placement:F,isPositioned:K,middlewareData:I}=ag({strategy:"fixed",placement:A,whileElementsMounted:(...se)=>Gp(...se,{animationFrame:b==="always"}),elements:{reference:x.anchor},middleware:[ig({mainAxis:a+$,alignmentAxis:c}),u&&lg({mainAxis:!0,crossAxis:!1,limiter:g==="partial"?cg():void 0,...D}),u&&dg({...D}),ug({...D,apply:({elements:se,rects:je,availableWidth:Se,availableHeight:Ee})=>{const{width:Et,height:ri}=je.reference,Ft=se.floating.style;Ft.setProperty("--radix-popper-available-width",`${Se}px`),Ft.setProperty("--radix-popper-available-height",`${Ee}px`),Ft.setProperty("--radix-popper-anchor-width",`${Et}px`),Ft.setProperty("--radix-popper-anchor-height",`${ri}px`)}}),C&&gg({element:C,padding:l}),$g({arrowWidth:E,arrowHeight:$}),y&&pg({strategy:"referenceHidden",...D})]}),[Z,J]=Ya(F),ue=Ie(k);$e(()=>{K&&(ue==null||ue())},[K,ue]);const ge=(v=I.arrow)==null?void 0:v.x,j=(R=I.arrow)==null?void 0:R.y,M=((Y=I.arrow)==null?void 0:Y.centerOffset)!==0,[ce,Ne]=s.useState();return $e(()=>{w&&Ne(window.getComputedStyle(w).zIndex)},[w]),t.jsx("div",{ref:P.setFloating,"data-radix-popper-content-wrapper":"",style:{..._,transform:K?_.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ce,"--radix-popper-transform-origin":[(W=I.transformOrigin)==null?void 0:W.x,(z=I.transformOrigin)==null?void 0:z.y].join(" "),...((q=I.hide)==null?void 0:q.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:t.jsx(xg,{scope:r,placedSide:Z,onArrowChange:S,arrowX:ge,arrowY:j,shouldHideArrow:M,children:t.jsx(ie.div,{"data-side":Z,"data-align":J,...f,ref:m,style:{...f.style,animation:K?void 0:"none"}})})})});Ba.displayName=br;var Ha="PopperArrow",vg={top:"bottom",right:"left",bottom:"top",left:"right"},Ua=s.forwardRef(function(o,r){const{__scopePopper:n,...a}=o,i=bg(Ha,n),c=vg[i.placedSide];return t.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[c]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:t.jsx(fg,{...a,ref:r,style:{...a.style,display:"block"}})})});Ua.displayName=Ha;function wg(e){return e!==null}var $g=e=>({name:"transformOrigin",options:e,fn(o){var x,w,h;const{placement:r,rects:n,middlewareData:a}=o,c=((x=a.arrow)==null?void 0:x.centerOffset)!==0,l=c?0:e.arrowWidth,u=c?0:e.arrowHeight,[d,p]=Ya(r),g={start:"0%",center:"50%",end:"100%"}[p],y=(((w=a.arrow)==null?void 0:w.x)??0)+l/2,b=(((h=a.arrow)==null?void 0:h.y)??0)+u/2;let k="",f="";return d==="bottom"?(k=c?g:`${y}px`,f=`${-u}px`):d==="top"?(k=c?g:`${y}px`,f=`${n.floating.height+u}px`):d==="right"?(k=`${-u}px`,f=c?g:`${b}px`):d==="left"&&(k=`${n.floating.width+u}px`,f=c?g:`${b}px`),{data:{x:k,y:f}}}});function Ya(e){const[o,r="center"]=e.split("-");return[o,r]}var jg=Fa,Ng=Va,Sg=Ba,kg=Ua;function Cg(e){const o=Eg(e),r=s.forwardRef((n,a)=>{const{children:i,...c}=n,l=s.Children.toArray(i),u=l.find(Ag);if(u){const d=u.props.children,p=l.map(g=>g===u?s.Children.count(d)>1?s.Children.only(null):s.isValidElement(d)?d.props.children:null:g);return t.jsx(o,{...c,ref:a,children:s.isValidElement(d)?s.cloneElement(d,void 0,p):null})}return t.jsx(o,{...c,ref:a,children:i})});return r.displayName=`${e}.Slot`,r}function Eg(e){const o=s.forwardRef((r,n)=>{const{children:a,...i}=r;if(s.isValidElement(a)){const c=Ig(a),l=Rg(i,a.props);return a.type!==s.Fragment&&(l.ref=n?wt(n,c):c),s.cloneElement(a,l)}return s.Children.count(a)>1?s.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var Tg=Symbol("radix.slottable");function Ag(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Tg}function Rg(e,o){const r={...o};for(const n in o){const a=e[n],i=o[n];/^on[A-Z]/.test(n)?a&&i?r[n]=(...l)=>{const u=i(...l);return a(...l),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...i}:n==="className"&&(r[n]=[a,i].filter(Boolean).join(" "))}return{...e,...r}}function Ig(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function zg(e){const o=s.useRef({value:e,previous:e});return s.useMemo(()=>(o.current.value!==e&&(o.current.previous=o.current.value,o.current.value=e),o.current.previous),[e])}var qa=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Dg="VisuallyHidden",vr=s.forwardRef((e,o)=>t.jsx(ie.span,{...e,ref:o,style:{...qa,...e.style}}));vr.displayName=Dg;var Pg=[" ","Enter","ArrowUp","ArrowDown"],Og=[" ","Enter"],at="Select",[jo,No,Mg]=Na(at),[Ct]=Ot(at,[Mg,La]),So=La(),[Lg,Ze]=Ct(at),[_g,Fg]=Ct(at),Ka=e=>{const{__scopeSelect:o,children:r,open:n,defaultOpen:a,onOpenChange:i,value:c,defaultValue:l,onValueChange:u,dir:d,name:p,autoComplete:g,disabled:y,required:b,form:k}=e,f=So(o),[x,w]=s.useState(null),[h,m]=s.useState(null),[C,S]=s.useState(!1),T=rp(d),[E,$]=ao({prop:n,defaultProp:a??!1,onChange:i,caller:at}),[A,L]=ao({prop:c,defaultProp:l,onChange:u,caller:at}),O=s.useRef(null),N=x?k||!!x.closest("form"):!0,[D,P]=s.useState(new Set),_=Array.from(D).map(F=>F.props.value).join(";");return t.jsx(jg,{...f,children:t.jsxs(Lg,{required:b,scope:o,trigger:x,onTriggerChange:w,valueNode:h,onValueNodeChange:m,valueNodeHasChildren:C,onValueNodeHasChildrenChange:S,contentId:yt(),value:A,onValueChange:L,open:E,onOpenChange:$,dir:T,triggerPointerDownPosRef:O,disabled:y,children:[t.jsx(jo.Provider,{scope:o,children:t.jsx(_g,{scope:e.__scopeSelect,onNativeOptionAdd:s.useCallback(F=>{P(K=>new Set(K).add(F))},[]),onNativeOptionRemove:s.useCallback(F=>{P(K=>{const I=new Set(K);return I.delete(F),I})},[]),children:r})}),N?t.jsxs(xs,{"aria-hidden":!0,required:b,tabIndex:-1,name:p,autoComplete:g,value:A,onChange:F=>L(F.target.value),disabled:y,form:k,children:[A===void 0?t.jsx("option",{value:""}):null,Array.from(D)]},_):null]})})};Ka.displayName=at;var Ga="SelectTrigger",Xa=s.forwardRef((e,o)=>{const{__scopeSelect:r,disabled:n=!1,...a}=e,i=So(r),c=Ze(Ga,r),l=c.disabled||n,u=pe(o,c.onTriggerChange),d=No(r),p=s.useRef("touch"),[g,y,b]=vs(f=>{const x=d().filter(m=>!m.disabled),w=x.find(m=>m.value===c.value),h=ws(x,f,w);h!==void 0&&c.onValueChange(h.value)}),k=f=>{l||(c.onOpenChange(!0),b()),f&&(c.triggerPointerDownPosRef.current={x:Math.round(f.pageX),y:Math.round(f.pageY)})};return t.jsx(Ng,{asChild:!0,...i,children:t.jsx(ie.button,{type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":bs(c.value)?"":void 0,...a,ref:u,onClick:re(a.onClick,f=>{f.currentTarget.focus(),p.current!=="mouse"&&k(f)}),onPointerDown:re(a.onPointerDown,f=>{p.current=f.pointerType;const x=f.target;x.hasPointerCapture(f.pointerId)&&x.releasePointerCapture(f.pointerId),f.button===0&&f.ctrlKey===!1&&f.pointerType==="mouse"&&(k(f),f.preventDefault())}),onKeyDown:re(a.onKeyDown,f=>{const x=g.current!=="";!(f.ctrlKey||f.altKey||f.metaKey)&&f.key.length===1&&y(f.key),!(x&&f.key===" ")&&Pg.includes(f.key)&&(k(),f.preventDefault())})})})});Xa.displayName=Ga;var Za="SelectValue",Qa=s.forwardRef((e,o)=>{const{__scopeSelect:r,className:n,style:a,children:i,placeholder:c="",...l}=e,u=Ze(Za,r),{onValueNodeHasChildrenChange:d}=u,p=i!==void 0,g=pe(o,u.onValueNodeChange);return $e(()=>{d(p)},[d,p]),t.jsx(ie.span,{...l,ref:g,style:{pointerEvents:"none"},children:bs(u.value)?t.jsx(t.Fragment,{children:c}):i})});Qa.displayName=Za;var Wg="SelectIcon",Ja=s.forwardRef((e,o)=>{const{__scopeSelect:r,children:n,...a}=e;return t.jsx(ie.span,{"aria-hidden":!0,...a,ref:o,children:n||"▼"})});Ja.displayName=Wg;var Vg="SelectPortal",es=e=>t.jsx(ho,{asChild:!0,...e});es.displayName=Vg;var st="SelectContent",ts=s.forwardRef((e,o)=>{const r=Ze(st,e.__scopeSelect),[n,a]=s.useState();if($e(()=>{a(new DocumentFragment)},[]),!r.open){const i=n;return i?Dt.createPortal(t.jsx(os,{scope:e.__scopeSelect,children:t.jsx(jo.Slot,{scope:e.__scopeSelect,children:t.jsx("div",{children:e.children})})}),i):null}return t.jsx(rs,{...e,ref:o})});ts.displayName=st;var Re=10,[os,Qe]=Ct(st),Bg="SelectContentImpl",Hg=Cg("SelectContent.RemoveScroll"),rs=s.forwardRef((e,o)=>{const{__scopeSelect:r,position:n="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:i,onPointerDownOutside:c,side:l,sideOffset:u,align:d,alignOffset:p,arrowPadding:g,collisionBoundary:y,collisionPadding:b,sticky:k,hideWhenDetached:f,avoidCollisions:x,...w}=e,h=Ze(st,r),[m,C]=s.useState(null),[S,T]=s.useState(null),E=pe(o,v=>C(v)),[$,A]=s.useState(null),[L,O]=s.useState(null),N=No(r),[D,P]=s.useState(!1),_=s.useRef(!1);s.useEffect(()=>{if(m)return ta(m)},[m]),qn();const F=s.useCallback(v=>{const[R,...Y]=N().map(q=>q.ref.current),[W]=Y.slice(-1),z=document.activeElement;for(const q of v)if(q===z||(q==null||q.scrollIntoView({block:"nearest"}),q===R&&S&&(S.scrollTop=0),q===W&&S&&(S.scrollTop=S.scrollHeight),q==null||q.focus(),document.activeElement!==z))return},[N,S]),K=s.useCallback(()=>F([$,m]),[F,$,m]);s.useEffect(()=>{D&&K()},[D,K]);const{onOpenChange:I,triggerPointerDownPosRef:Z}=h;s.useEffect(()=>{if(m){let v={x:0,y:0};const R=W=>{var z,q;v={x:Math.abs(Math.round(W.pageX)-(((z=Z.current)==null?void 0:z.x)??0)),y:Math.abs(Math.round(W.pageY)-(((q=Z.current)==null?void 0:q.y)??0))}},Y=W=>{v.x<=10&&v.y<=10?W.preventDefault():m.contains(W.target)||I(!1),document.removeEventListener("pointermove",R),Z.current=null};return Z.current!==null&&(document.addEventListener("pointermove",R),document.addEventListener("pointerup",Y,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",R),document.removeEventListener("pointerup",Y,{capture:!0})}}},[m,I,Z]),s.useEffect(()=>{const v=()=>I(!1);return window.addEventListener("blur",v),window.addEventListener("resize",v),()=>{window.removeEventListener("blur",v),window.removeEventListener("resize",v)}},[I]);const[J,ue]=vs(v=>{const R=N().filter(z=>!z.disabled),Y=R.find(z=>z.ref.current===document.activeElement),W=ws(R,v,Y);W&&setTimeout(()=>W.ref.current.focus())}),ge=s.useCallback((v,R,Y)=>{const W=!_.current&&!Y;(h.value!==void 0&&h.value===R||W)&&(A(v),W&&(_.current=!0))},[h.value]),j=s.useCallback(()=>m==null?void 0:m.focus(),[m]),M=s.useCallback((v,R,Y)=>{const W=!_.current&&!Y;(h.value!==void 0&&h.value===R||W)&&O(v)},[h.value]),ce=n==="popper"?Ko:ns,Ne=ce===Ko?{side:l,sideOffset:u,align:d,alignOffset:p,arrowPadding:g,collisionBoundary:y,collisionPadding:b,sticky:k,hideWhenDetached:f,avoidCollisions:x}:{};return t.jsx(os,{scope:r,content:m,viewport:S,onViewportChange:T,itemRefCallback:ge,selectedItem:$,onItemLeave:j,itemTextRefCallback:M,focusSelectedItem:K,selectedItemText:L,position:n,isPositioned:D,searchRef:J,children:t.jsx(lr,{as:Hg,allowPinchZoom:!0,children:t.jsx(ir,{asChild:!0,trapped:h.open,onMountAutoFocus:v=>{v.preventDefault()},onUnmountAutoFocus:re(a,v=>{var R;(R=h.trigger)==null||R.focus({preventScroll:!0}),v.preventDefault()}),children:t.jsx(fo,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:v=>v.preventDefault(),onDismiss:()=>h.onOpenChange(!1),children:t.jsx(ce,{role:"listbox",id:h.contentId,"data-state":h.open?"open":"closed",dir:h.dir,onContextMenu:v=>v.preventDefault(),...w,...Ne,onPlaced:()=>P(!0),ref:E,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:re(w.onKeyDown,v=>{const R=v.ctrlKey||v.altKey||v.metaKey;if(v.key==="Tab"&&v.preventDefault(),!R&&v.key.length===1&&ue(v.key),["ArrowUp","ArrowDown","Home","End"].includes(v.key)){let W=N().filter(z=>!z.disabled).map(z=>z.ref.current);if(["ArrowUp","End"].includes(v.key)&&(W=W.slice().reverse()),["ArrowUp","ArrowDown"].includes(v.key)){const z=v.target,q=W.indexOf(z);W=W.slice(q+1)}setTimeout(()=>F(W)),v.preventDefault()}})})})})})})});rs.displayName=Bg;var Ug="SelectItemAlignedPosition",ns=s.forwardRef((e,o)=>{const{__scopeSelect:r,onPlaced:n,...a}=e,i=Ze(st,r),c=Qe(st,r),[l,u]=s.useState(null),[d,p]=s.useState(null),g=pe(o,E=>p(E)),y=No(r),b=s.useRef(!1),k=s.useRef(!0),{viewport:f,selectedItem:x,selectedItemText:w,focusSelectedItem:h}=c,m=s.useCallback(()=>{if(i.trigger&&i.valueNode&&l&&d&&f&&x&&w){const E=i.trigger.getBoundingClientRect(),$=d.getBoundingClientRect(),A=i.valueNode.getBoundingClientRect(),L=w.getBoundingClientRect();if(i.dir!=="rtl"){const z=L.left-$.left,q=A.left-z,se=E.left-q,je=E.width+se,Se=Math.max(je,$.width),Ee=window.innerWidth-Re,Et=Zr(q,[Re,Math.max(Re,Ee-Se)]);l.style.minWidth=je+"px",l.style.left=Et+"px"}else{const z=$.right-L.right,q=window.innerWidth-A.right-z,se=window.innerWidth-E.right-q,je=E.width+se,Se=Math.max(je,$.width),Ee=window.innerWidth-Re,Et=Zr(q,[Re,Math.max(Re,Ee-Se)]);l.style.minWidth=je+"px",l.style.right=Et+"px"}const O=y(),N=window.innerHeight-Re*2,D=f.scrollHeight,P=window.getComputedStyle(d),_=parseInt(P.borderTopWidth,10),F=parseInt(P.paddingTop,10),K=parseInt(P.borderBottomWidth,10),I=parseInt(P.paddingBottom,10),Z=_+F+D+I+K,J=Math.min(x.offsetHeight*5,Z),ue=window.getComputedStyle(f),ge=parseInt(ue.paddingTop,10),j=parseInt(ue.paddingBottom,10),M=E.top+E.height/2-Re,ce=N-M,Ne=x.offsetHeight/2,v=x.offsetTop+Ne,R=_+F+v,Y=Z-R;if(R<=M){const z=O.length>0&&x===O[O.length-1].ref.current;l.style.bottom="0px";const q=d.clientHeight-f.offsetTop-f.offsetHeight,se=Math.max(ce,Ne+(z?j:0)+q+K),je=R+se;l.style.height=je+"px"}else{const z=O.length>0&&x===O[0].ref.current;l.style.top="0px";const se=Math.max(M,_+f.offsetTop+(z?ge:0)+Ne)+Y;l.style.height=se+"px",f.scrollTop=R-M+f.offsetTop}l.style.margin=`${Re}px 0`,l.style.minHeight=J+"px",l.style.maxHeight=N+"px",n==null||n(),requestAnimationFrame(()=>b.current=!0)}},[y,i.trigger,i.valueNode,l,d,f,x,w,i.dir,n]);$e(()=>m(),[m]);const[C,S]=s.useState();$e(()=>{d&&S(window.getComputedStyle(d).zIndex)},[d]);const T=s.useCallback(E=>{E&&k.current===!0&&(m(),h==null||h(),k.current=!1)},[m,h]);return t.jsx(qg,{scope:r,contentWrapper:l,shouldExpandOnScrollRef:b,onScrollButtonChange:T,children:t.jsx("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:C},children:t.jsx(ie.div,{...a,ref:g,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});ns.displayName=Ug;var Yg="SelectPopperPosition",Ko=s.forwardRef((e,o)=>{const{__scopeSelect:r,align:n="start",collisionPadding:a=Re,...i}=e,c=So(r);return t.jsx(Sg,{...c,...i,ref:o,align:n,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Ko.displayName=Yg;var[qg,wr]=Ct(st,{}),Go="SelectViewport",as=s.forwardRef((e,o)=>{const{__scopeSelect:r,nonce:n,...a}=e,i=Qe(Go,r),c=wr(Go,r),l=pe(o,i.onViewportChange),u=s.useRef(0);return t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:n}),t.jsx(jo.Slot,{scope:r,children:t.jsx(ie.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:l,style:{position:"relative",flex:1,overflow:"hidden auto",...a.style},onScroll:re(a.onScroll,d=>{const p=d.currentTarget,{contentWrapper:g,shouldExpandOnScrollRef:y}=c;if(y!=null&&y.current&&g){const b=Math.abs(u.current-p.scrollTop);if(b>0){const k=window.innerHeight-Re*2,f=parseFloat(g.style.minHeight),x=parseFloat(g.style.height),w=Math.max(f,x);if(w<k){const h=w+b,m=Math.min(k,h),C=h-m;g.style.height=m+"px",g.style.bottom==="0px"&&(p.scrollTop=C>0?C:0,g.style.justifyContent="flex-end")}}}u.current=p.scrollTop})})})]})});as.displayName=Go;var ss="SelectGroup",[Kg,Gg]=Ct(ss),Xg=s.forwardRef((e,o)=>{const{__scopeSelect:r,...n}=e,a=yt();return t.jsx(Kg,{scope:r,id:a,children:t.jsx(ie.div,{role:"group","aria-labelledby":a,...n,ref:o})})});Xg.displayName=ss;var is="SelectLabel",ls=s.forwardRef((e,o)=>{const{__scopeSelect:r,...n}=e,a=Gg(is,r);return t.jsx(ie.div,{id:a.id,...n,ref:o})});ls.displayName=is;var po="SelectItem",[Zg,cs]=Ct(po),ds=s.forwardRef((e,o)=>{const{__scopeSelect:r,value:n,disabled:a=!1,textValue:i,...c}=e,l=Ze(po,r),u=Qe(po,r),d=l.value===n,[p,g]=s.useState(i??""),[y,b]=s.useState(!1),k=pe(o,h=>{var m;return(m=u.itemRefCallback)==null?void 0:m.call(u,h,n,a)}),f=yt(),x=s.useRef("touch"),w=()=>{a||(l.onValueChange(n),l.onOpenChange(!1))};if(n==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return t.jsx(Zg,{scope:r,value:n,disabled:a,textId:f,isSelected:d,onItemTextChange:s.useCallback(h=>{g(m=>m||((h==null?void 0:h.textContent)??"").trim())},[]),children:t.jsx(jo.ItemSlot,{scope:r,value:n,disabled:a,textValue:p,children:t.jsx(ie.div,{role:"option","aria-labelledby":f,"data-highlighted":y?"":void 0,"aria-selected":d&&y,"data-state":d?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...c,ref:k,onFocus:re(c.onFocus,()=>b(!0)),onBlur:re(c.onBlur,()=>b(!1)),onClick:re(c.onClick,()=>{x.current!=="mouse"&&w()}),onPointerUp:re(c.onPointerUp,()=>{x.current==="mouse"&&w()}),onPointerDown:re(c.onPointerDown,h=>{x.current=h.pointerType}),onPointerMove:re(c.onPointerMove,h=>{var m;x.current=h.pointerType,a?(m=u.onItemLeave)==null||m.call(u):x.current==="mouse"&&h.currentTarget.focus({preventScroll:!0})}),onPointerLeave:re(c.onPointerLeave,h=>{var m;h.currentTarget===document.activeElement&&((m=u.onItemLeave)==null||m.call(u))}),onKeyDown:re(c.onKeyDown,h=>{var C;((C=u.searchRef)==null?void 0:C.current)!==""&&h.key===" "||(Og.includes(h.key)&&w(),h.key===" "&&h.preventDefault())})})})})});ds.displayName=po;var At="SelectItemText",us=s.forwardRef((e,o)=>{const{__scopeSelect:r,className:n,style:a,...i}=e,c=Ze(At,r),l=Qe(At,r),u=cs(At,r),d=Fg(At,r),[p,g]=s.useState(null),y=pe(o,w=>g(w),u.onItemTextChange,w=>{var h;return(h=l.itemTextRefCallback)==null?void 0:h.call(l,w,u.value,u.disabled)}),b=p==null?void 0:p.textContent,k=s.useMemo(()=>t.jsx("option",{value:u.value,disabled:u.disabled,children:b},u.value),[u.disabled,u.value,b]),{onNativeOptionAdd:f,onNativeOptionRemove:x}=d;return $e(()=>(f(k),()=>x(k)),[f,x,k]),t.jsxs(t.Fragment,{children:[t.jsx(ie.span,{id:u.textId,...i,ref:y}),u.isSelected&&c.valueNode&&!c.valueNodeHasChildren?Dt.createPortal(i.children,c.valueNode):null]})});us.displayName=At;var ps="SelectItemIndicator",gs=s.forwardRef((e,o)=>{const{__scopeSelect:r,...n}=e;return cs(ps,r).isSelected?t.jsx(ie.span,{"aria-hidden":!0,...n,ref:o}):null});gs.displayName=ps;var Xo="SelectScrollUpButton",ms=s.forwardRef((e,o)=>{const r=Qe(Xo,e.__scopeSelect),n=wr(Xo,e.__scopeSelect),[a,i]=s.useState(!1),c=pe(o,n.onScrollButtonChange);return $e(()=>{if(r.viewport&&r.isPositioned){let l=function(){const d=u.scrollTop>0;i(d)};const u=r.viewport;return l(),u.addEventListener("scroll",l),()=>u.removeEventListener("scroll",l)}},[r.viewport,r.isPositioned]),a?t.jsx(hs,{...e,ref:c,onAutoScroll:()=>{const{viewport:l,selectedItem:u}=r;l&&u&&(l.scrollTop=l.scrollTop-u.offsetHeight)}}):null});ms.displayName=Xo;var Zo="SelectScrollDownButton",fs=s.forwardRef((e,o)=>{const r=Qe(Zo,e.__scopeSelect),n=wr(Zo,e.__scopeSelect),[a,i]=s.useState(!1),c=pe(o,n.onScrollButtonChange);return $e(()=>{if(r.viewport&&r.isPositioned){let l=function(){const d=u.scrollHeight-u.clientHeight,p=Math.ceil(u.scrollTop)<d;i(p)};const u=r.viewport;return l(),u.addEventListener("scroll",l),()=>u.removeEventListener("scroll",l)}},[r.viewport,r.isPositioned]),a?t.jsx(hs,{...e,ref:c,onAutoScroll:()=>{const{viewport:l,selectedItem:u}=r;l&&u&&(l.scrollTop=l.scrollTop+u.offsetHeight)}}):null});fs.displayName=Zo;var hs=s.forwardRef((e,o)=>{const{__scopeSelect:r,onAutoScroll:n,...a}=e,i=Qe("SelectScrollButton",r),c=s.useRef(null),l=No(r),u=s.useCallback(()=>{c.current!==null&&(window.clearInterval(c.current),c.current=null)},[]);return s.useEffect(()=>()=>u(),[u]),$e(()=>{var p;const d=l().find(g=>g.ref.current===document.activeElement);(p=d==null?void 0:d.ref.current)==null||p.scrollIntoView({block:"nearest"})},[l]),t.jsx(ie.div,{"aria-hidden":!0,...a,ref:o,style:{flexShrink:0,...a.style},onPointerDown:re(a.onPointerDown,()=>{c.current===null&&(c.current=window.setInterval(n,50))}),onPointerMove:re(a.onPointerMove,()=>{var d;(d=i.onItemLeave)==null||d.call(i),c.current===null&&(c.current=window.setInterval(n,50))}),onPointerLeave:re(a.onPointerLeave,()=>{u()})})}),Qg="SelectSeparator",ys=s.forwardRef((e,o)=>{const{__scopeSelect:r,...n}=e;return t.jsx(ie.div,{"aria-hidden":!0,...n,ref:o})});ys.displayName=Qg;var Qo="SelectArrow",Jg=s.forwardRef((e,o)=>{const{__scopeSelect:r,...n}=e,a=So(r),i=Ze(Qo,r),c=Qe(Qo,r);return i.open&&c.position==="popper"?t.jsx(kg,{...a,...n,ref:o}):null});Jg.displayName=Qo;var em="SelectBubbleInput",xs=s.forwardRef(({__scopeSelect:e,value:o,...r},n)=>{const a=s.useRef(null),i=pe(n,a),c=zg(o);return s.useEffect(()=>{const l=a.current;if(!l)return;const u=window.HTMLSelectElement.prototype,p=Object.getOwnPropertyDescriptor(u,"value").set;if(c!==o&&p){const g=new Event("change",{bubbles:!0});p.call(l,o),l.dispatchEvent(g)}},[c,o]),t.jsx(ie.select,{...r,style:{...qa,...r.style},ref:i,defaultValue:o})});xs.displayName=em;function bs(e){return e===""||e===void 0}function vs(e){const o=Ie(e),r=s.useRef(""),n=s.useRef(0),a=s.useCallback(c=>{const l=r.current+c;o(l),function u(d){r.current=d,window.clearTimeout(n.current),d!==""&&(n.current=window.setTimeout(()=>u(""),1e3))}(l)},[o]),i=s.useCallback(()=>{r.current="",window.clearTimeout(n.current)},[]);return s.useEffect(()=>()=>window.clearTimeout(n.current),[]),[r,a,i]}function ws(e,o,r){const a=o.length>1&&Array.from(o).every(d=>d===o[0])?o[0]:o,i=r?e.indexOf(r):-1;let c=tm(e,Math.max(i,0));a.length===1&&(c=c.filter(d=>d!==r));const u=c.find(d=>d.textValue.toLowerCase().startsWith(a.toLowerCase()));return u!==r?u:void 0}function tm(e,o){return e.map((r,n)=>e[(o+n)%e.length])}var om=Ka,$s=Xa,rm=Qa,nm=Ja,am=es,js=ts,sm=as,Ns=ls,Ss=ds,im=us,lm=gs,ks=ms,Cs=fs,Es=ys;const be=om,ve=rm,he=s.forwardRef(({className:e,children:o,...r},n)=>t.jsxs($s,{ref:n,className:ae("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...r,children:[o,t.jsx(nm,{asChild:!0,children:t.jsx(rr,{className:"h-4 w-4 opacity-50"})})]}));he.displayName=$s.displayName;const Ts=s.forwardRef(({className:e,...o},r)=>t.jsx(ks,{ref:r,className:ae("flex cursor-default items-center justify-center py-1",e),...o,children:t.jsx(Nn,{className:"h-4 w-4"})}));Ts.displayName=ks.displayName;const As=s.forwardRef(({className:e,...o},r)=>t.jsx(Cs,{ref:r,className:ae("flex cursor-default items-center justify-center py-1",e),...o,children:t.jsx(rr,{className:"h-4 w-4"})}));As.displayName=Cs.displayName;const ye=s.forwardRef(({className:e,children:o,position:r="popper",...n},a)=>t.jsx(am,{children:t.jsxs(js,{ref:a,className:ae("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...n,children:[t.jsx(Ts,{}),t.jsx(sm,{className:ae("p-1",r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:o}),t.jsx(As,{})]})}));ye.displayName=js.displayName;const cm=s.forwardRef(({className:e,...o},r)=>t.jsx(Ns,{ref:r,className:ae("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...o}));cm.displayName=Ns.displayName;const Q=s.forwardRef(({className:e,children:o,...r},n)=>t.jsxs(Ss,{ref:n,className:ae("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[t.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:t.jsx(lm,{children:t.jsx(jn,{className:"h-4 w-4"})})}),t.jsx(im,{children:o})]}));Q.displayName=Ss.displayName;const dm=s.forwardRef(({className:e,...o},r)=>t.jsx(Es,{ref:r,className:ae("-mx-1 my-1 h-px bg-muted",e),...o}));dm.displayName=Es.displayName;const Gt=e=>{if(!e)return"";const r=e.replace(/[+-]\d{2}:\d{2}$/,"").replace(/Z$/,"").match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}):\d{2}$/);if(r){const[,d,p]=r;return`${d}T${p}`}const n=new Date(e),a=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,"0"),c=String(n.getUTCDate()).padStart(2,"0"),l=String(n.getUTCHours()).padStart(2,"0"),u=String(n.getUTCMinutes()).padStart(2,"0");return`${a}-${i}-${c}T${l}:${u}`},Xt=e=>{if(!e){const o=new Date,r=7*60;return new Date(o.getTime()+(r-o.getTimezoneOffset())*6e4).toISOString().slice(0,19)}return`${e}:00`},um=({open:e,onOpenChange:o,draftData:r,accounts:n,categories:a,onConfirm:i,onCancel:c})=>{var O;const[l,u]=s.useState(null),[d,p]=s.useState(!1),g=s.useRef(null);s.useEffect(()=>{r&&r.draft&&u({...r.draft})},[r]),s.useEffect(()=>{e&&g.current&&setTimeout(()=>{var N;(N=g.current)==null||N.focus()},100)},[e]);const y=async()=>{if(l){p(!0);try{await i(l),o(!1)}catch(N){console.error("Error confirming draft:",N)}finally{p(!1)}}},b=()=>{c&&c(),o(!1)};if(s.useEffect(()=>{const N=D=>{D.key==="Escape"&&e&&!d&&(c?c():o(!1))};if(e)return document.addEventListener("keydown",N),()=>document.removeEventListener("keydown",N)},[e,d,c,o]),!l||!r)return null;const k=r.draftType==="TRANSACTION",f=r.draftType==="RECEIVABLE",x=r.draftType==="LIABILITY",w=r.draftType==="SETTLEMENT",h=k?l:null,m=f?l:null,C=x?l:null,S=w?l:null,T=(N,D="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:D}).format(N),E=r.needConfirmFields||[],$=r.autoFilledFields||[],A=()=>{switch(r.draftType){case"TRANSACTION":return"Xác nhận giao dịch";case"RECEIVABLE":return"Xác nhận khoản cho vay";case"LIABILITY":return"Xác nhận khoản nợ";case"SETTLEMENT":return(S==null?void 0:S.type)==="RECEIVABLE"?"Xác nhận nhận tiền trả nợ":"Xác nhận trả nợ";default:return"Xác nhận"}},L=()=>k&&h?h.amount&&h.categoryId&&h.accountId:f&&m?m.amount&&m.counterpartyName:x&&C?C.amount&&C.counterpartyName:w&&S?S.amount&&S.accountId&&(S.receivableId||S.liabilityId):!1;return t.jsx(Nt,{open:e,onOpenChange:o,children:t.jsxs(it,{className:"confirm-draft-dialog",style:{maxWidth:"500px"},children:[t.jsxs(lt,{children:[t.jsx(dt,{children:A()}),t.jsx(ut,{children:r.autoFilledFields&&r.autoFilledFields.length>0&&t.jsxs(pm,{children:[t.jsx(X,{icon:"CheckCircle",size:16,color:"currentColor"}),t.jsxs("span",{children:["Đã tự động điền ",r.autoFilledFields.length," trường"]})]})})]}),t.jsxs(gm,{children:[k&&h&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Số tiền"}),t.jsx(ee,{ref:g,type:"number",value:((O=h.amount)==null?void 0:O.toString())||"",onChange:N=>{const D=N.target.value?parseFloat(N.target.value):void 0;k&&h&&u({...h,amount:D})},placeholder:"Nhập số tiền"}),h.amount?t.jsxs("div",{className:"draft-value",children:[T(h.amount,h.currency),$.find(N=>N.field==="amount")&&t.jsx(xe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(ee,{ref:g,type:"number",value:h.amount||"",onChange:N=>{k&&h&&u({...h,amount:parseFloat(N.target.value)||0})},placeholder:"Nhập số tiền",tabIndex:1})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Loại giao dịch"}),t.jsxs(be,{value:h.type||"EXPENSE",onValueChange:N=>{k&&h&&u({...h,type:N})},children:[t.jsx(he,{children:t.jsx(ve,{})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"EXPENSE",children:"Chi tiêu"}),t.jsx(Q,{value:"INCOME",children:"Thu nhập"}),t.jsx(Q,{value:"TRANSFER",children:"Chuyển khoản"})]})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(G,{children:["Danh mục ",E.includes("categoryId")&&t.jsx("span",{className:"required",children:"*"})]}),h.categoryId&&h.categoryName?t.jsxs("div",{className:"draft-value",children:[h.categoryName,$.find(N=>N.field==="categoryId")&&t.jsx(xe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsxs(be,{value:h.categoryId||"",onValueChange:N=>{const D=a.find(P=>P.id===N);k&&h&&u({...h,categoryId:N,categoryName:D==null?void 0:D.name})},children:[t.jsx(he,{children:t.jsx(ve,{placeholder:"Chọn danh mục"})}),t.jsx(ye,{children:a.filter(N=>!N.isSystem||h.type==="EXPENSE"||h.type==="INCOME").map(N=>t.jsx(Q,{value:N.id,children:N.name},N.id))})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(G,{children:["Tài khoản ",E.includes("accountId")&&t.jsx("span",{className:"required",children:"*"})]}),h.accountId&&h.accountName?t.jsxs("div",{className:"draft-value",children:[h.accountName,$.find(N=>N.field==="accountId")&&t.jsx(xe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsxs(be,{value:h.accountId||"",onValueChange:N=>{const D=n.find(P=>P.id===N);k&&h&&u({...h,accountId:N,accountName:D==null?void 0:D.name})},children:[t.jsx(he,{children:t.jsx(ve,{placeholder:"Chọn tài khoản"})}),t.jsx(ye,{children:n.map(N=>t.jsx(Q,{value:N.id,children:N.name},N.id))})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Ghi chú"}),t.jsx(ee,{value:h.note||"",onChange:N=>{k&&h&&u({...h,note:N.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Ngày giao dịch"}),t.jsx(ee,{type:"datetime-local",value:Gt(h.occurredAt),onChange:N=>{const D=N.target.value?Xt(N.target.value):new Date().toISOString().slice(0,19);k&&h&&u({...h,occurredAt:D})}})]})]}),f&&m&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(G,{children:["Người vay ",E.includes("counterpartyName")&&t.jsx("span",{className:"required",children:"*"})]}),m.counterpartyName?t.jsxs("div",{className:"draft-value",children:[m.counterpartyName,$.find(N=>N.field==="counterpartyName")&&t.jsx(xe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(ee,{value:m.counterpartyName||"",onChange:N=>{f&&m&&u({...m,counterpartyName:N.target.value})},placeholder:"Nhập tên người vay"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(G,{children:["Số tiền ",E.includes("amount")&&t.jsx("span",{className:"required",children:"*"})]}),m.amount?t.jsxs("div",{className:"draft-value",children:[T(m.amount,m.currency),$.find(N=>N.field==="amount")&&t.jsx(xe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(ee,{type:"number",value:m.amount||"",onChange:N=>{f&&m&&u({...m,amount:parseFloat(N.target.value)||0})},placeholder:"Nhập số tiền"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Ngày cho vay"}),t.jsx(ee,{type:"datetime-local",value:Gt(m.occurredAt),onChange:N=>{const D=N.target.value?Xt(N.target.value):new Date().toISOString().slice(0,19);f&&m&&u({...m,occurredAt:D})}})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Ghi chú"}),t.jsx(ee,{value:m.note||"",onChange:N=>{f&&m&&u({...m,note:N.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]}),x&&C&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(G,{children:["Người cho vay ",E.includes("counterpartyName")&&t.jsx("span",{className:"required",children:"*"})]}),C.counterpartyName?t.jsxs("div",{className:"draft-value",children:[C.counterpartyName,$.find(N=>N.field==="counterpartyName")&&t.jsx(xe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(ee,{value:C.counterpartyName||"",onChange:N=>{x&&C&&u({...C,counterpartyName:N.target.value})},placeholder:"Nhập tên người cho vay"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(G,{children:["Số tiền ",E.includes("amount")&&t.jsx("span",{className:"required",children:"*"})]}),C.amount?t.jsxs("div",{className:"draft-value",children:[T(C.amount,C.currency),$.find(N=>N.field==="amount")&&t.jsx(xe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(ee,{type:"number",value:C.amount||"",onChange:N=>{x&&C&&u({...C,amount:parseFloat(N.target.value)||0})},placeholder:"Nhập số tiền"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Ngày vay"}),t.jsx(ee,{type:"datetime-local",value:Gt(C.occurredAt),onChange:N=>{const D=N.target.value?Xt(N.target.value):new Date().toISOString().slice(0,19);x&&C&&u({...C,occurredAt:D})}})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Ghi chú"}),t.jsx(ee,{value:C.note||"",onChange:N=>{x&&C&&u({...C,note:N.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]}),w&&S&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(G,{children:["Loại ",E.includes("type")&&t.jsx("span",{className:"required",children:"*"})]}),t.jsxs(be,{value:S.type||"",onValueChange:N=>{w&&S&&u({...S,type:N,receivableId:N==="RECEIVABLE"?S.receivableId:void 0,liabilityId:N==="LIABILITY"?S.liabilityId:void 0})},children:[t.jsx(he,{children:t.jsx(ve,{placeholder:"Chọn loại"})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"RECEIVABLE",children:"Nhận tiền trả nợ"}),t.jsx(Q,{value:"LIABILITY",children:"Trả nợ"})]})]})]}),S.counterpartyName&&t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Người liên quan"}),t.jsxs("div",{className:"draft-value",children:[S.counterpartyName,$.find(N=>N.field==="receivableId"||N.field==="liabilityId")&&t.jsx(xe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(G,{children:["Số tiền ",E.includes("amount")&&t.jsx("span",{className:"required",children:"*"})]}),S.amount?t.jsxs("div",{className:"draft-value",children:[T(S.amount,S.currency),$.find(N=>N.field==="amount")&&t.jsx(xe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(ee,{type:"number",value:S.amount||"",onChange:N=>{w&&S&&u({...S,amount:parseFloat(N.target.value)||0})},placeholder:"Nhập số tiền"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(G,{children:["Tài khoản ",E.includes("accountId")&&t.jsx("span",{className:"required",children:"*"})]}),S.accountId&&S.accountName?t.jsxs("div",{className:"draft-value",children:[S.accountName,$.find(N=>N.field==="accountId")&&t.jsx(xe,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsxs(be,{value:S.accountId||"",onValueChange:N=>{const D=n.find(P=>P.id===N);w&&S&&u({...S,accountId:N,accountName:D==null?void 0:D.name})},children:[t.jsx(he,{children:t.jsx(ve,{placeholder:"Chọn tài khoản"})}),t.jsx(ye,{children:n.map(N=>t.jsx(Q,{value:N.id,children:N.name},N.id))})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Ngày thanh toán"}),t.jsx(ee,{type:"datetime-local",value:Gt(S.settledAt),onChange:N=>{const D=N.target.value?Xt(N.target.value):new Date().toISOString().slice(0,19);w&&S&&u({...S,settledAt:D})}})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(G,{children:"Ghi chú"}),t.jsx(ee,{value:S.note||"",onChange:N=>{w&&S&&u({...S,note:N.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]})]}),t.jsxs(ct,{children:[t.jsx(U,{variant:"outline",onClick:b,disabled:d,tabIndex:-1,children:"Hủy"}),t.jsx(U,{onClick:y,disabled:d||!L(),tabIndex:-1,children:d?t.jsxs(t.Fragment,{children:[t.jsx(X,{icon:"Loader",size:16,color:"currentColor",className:"animate-spin"}),t.jsx("span",{children:"Đang tạo..."})]}):t.jsx("span",{children:"Xác nhận"})})]})]})})},pm=le.div`
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
`,gm=le.div`
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
`,mm=1,fm=1e6;let Lo=0;function hm(){return Lo=(Lo+1)%Number.MAX_SAFE_INTEGER,Lo.toString()}const _o=new Map,un=e=>{if(_o.has(e))return;const o=setTimeout(()=>{_o.delete(e),Rt({type:"REMOVE_TOAST",toastId:e})},fm);_o.set(e,o)},ym=(e,o)=>{switch(o.type){case"ADD_TOAST":return{...e,toasts:[o.toast,...e.toasts].slice(0,mm)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(r=>r.id===o.toast.id?{...r,...o.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=o;return r?un(r):e.toasts.forEach(n=>{un(n.id)}),{...e,toasts:e.toasts.map(n=>n.id===r||r===void 0?{...n,open:!1}:n)}}case"REMOVE_TOAST":return o.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==o.toastId)}}},to=[];let oo={toasts:[]};function Rt(e){oo=ym(oo,e),to.forEach(o=>{o(oo)})}function xm({...e}){const o=hm(),r=a=>Rt({type:"UPDATE_TOAST",toast:{...a,id:o}}),n=()=>Rt({type:"DISMISS_TOAST",toastId:o});return Rt({type:"ADD_TOAST",toast:{...e,id:o,open:!0,onOpenChange:a=>{a||n()}}}),{id:o,dismiss:n,update:r}}function Rs(){const[e,o]=s.useState(oo);return s.useEffect(()=>(to.push(o),()=>{const r=to.indexOf(o);r>-1&&to.splice(r,1)}),[e]),{...e,toast:xm,dismiss:r=>Rt({type:"DISMISS_TOAST",toastId:r})}}const pn=()=>{const{t:e}=Pe(),{navigate:o}=Ve(),{toast:r}=Rs(),[n,a]=s.useState(null),[i,c]=s.useState([]),[l,u]=s.useState(null),[d,p]=s.useState(!1),[g,y]=s.useState(!1),[b,k]=s.useState(!0),[f,x]=s.useState(null),[w,h]=s.useState(!1),[m,C]=s.useState(null),[S,T]=s.useState(!1),[E,$]=s.useState([]),[A,L]=s.useState([]),[O,N]=s.useState({period:"month"}),D=s.useRef(0),P=s.useRef(null),_=s.useRef([]),F=s.useRef([]),K=s.useRef(0),I=5*60*1e3;s.useEffect(()=>{(async()=>{const R=Date.now();if(_.current.length>0&&F.current.length>0&&R-K.current<I){$(_.current),L(F.current);return}try{const[Y,W]=await Promise.all([H.accounts.getAll(),H.categories.getAll()]);_.current=Y,F.current=W,K.current=R,$(Y),L(W)}catch(Y){console.error("Error loading accounts/categories:",Y)}})()},[]),s.useEffect(()=>{(async()=>{k(!0);try{const[R,Y,W]=await Promise.all([H.accounts.getAll(),H.receivables.getAll(0,1e3),H.liabilities.getAll(0,1e3)]),z=R.reduce((Se,Ee)=>Se+(Ee.currentBalance||0),0),q=Y.content.reduce((Se,Ee)=>Se+(Ee.remainingAmount||0),0),se=W.content.reduce((Se,Ee)=>Se+(Ee.remainingAmount||0),0),je=z+q-se;u({totalAssets:je,currentCash:z,totalReceivables:q,totalLiabilities:se})}catch(R){console.error("Financial overview load error:",R)}finally{k(!1)}})()},[]);const Z=s.useMemo(()=>{const v=(z,q=!0)=>{const se=z.getFullYear(),je=String(z.getMonth()+1).padStart(2,"0"),Se=String(z.getDate()).padStart(2,"0");return`${se}-${je}-${Se}T${q?"00:00:00":"23:59:59"}`};let R,Y;const W=new Date;if(O.period==="30days"){const z=new Date(W);z.setDate(z.getDate()-30),R=v(z,!0),Y=v(W,!1)}else if(O.period==="month"){const z=new Date(W.getFullYear(),W.getMonth(),1);R=v(z,!0),Y=v(W,!1)}else O.period==="custom"&&(O.startDate&&(R=`${O.startDate}T00:00:00`),O.endDate&&(Y=`${O.endDate}T23:59:59`));return{startDate:R,endDate:Y}},[O]);s.useEffect(()=>{(async()=>{D.current=window.scrollY||document.documentElement.scrollTop,p(!0),x(null);try{const R=await H.reports.getDashboard(O.period==="month"?"month":"day",Z.startDate,Z.endDate);a(R)}catch(R){x(ne(R)),console.error("Dashboard report load error:",R)}finally{p(!1),requestAnimationFrame(()=>{window.scrollTo(0,D.current)})}})()},[O.period,Z.startDate,Z.endDate]),s.useEffect(()=>{(async()=>{y(!0);try{const R=await H.transactions.getAll({page:0,size:5,sortBy:"occurredAt",sortOrder:"desc",startDate:Z.startDate,endDate:Z.endDate});c(R.content)}catch(R){console.error("Transactions load error:",R)}finally{y(!1)}})()},[Z.startDate,Z.endDate]);const J=s.useCallback((v,R="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:R}).format(v),[]),ue=s.useCallback(v=>new Date(v).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),[]),ge=s.useCallback(v=>{D.current=window.scrollY||document.documentElement.scrollTop,N({period:v})},[]),j=s.useCallback((v,R)=>{D.current=window.scrollY||document.documentElement.scrollTop,N({period:"custom",startDate:v,endDate:R})},[]),M=s.useCallback(async v=>{h(!0),C(null);try{const R=await H.nlp.parseTransaction(v);C(R),R.responseType==="CONFIRM_DRAFT"&&T(!0)}catch(R){const Y=ne(R);C({responseType:"ERROR",intent:"UNKNOWN",confidence:0,message:Y,data:{code:"PARSE_ERROR",message:Y,details:void 0}}),console.error("Error parsing text:",R)}finally{h(!1)}},[]),ce=v=>{if(!v){const R=new Date,Y=7*60;return new Date(R.getTime()+(Y-R.getTimezoneOffset())*6e4).toISOString().slice(0,19)}return v.replace(/[+-]\d{2}:\d{2}$/,"").replace(/Z$/,"").slice(0,19)},Ne=s.useCallback(async v=>{try{if(!v||typeof v!="object")throw new Error("Invalid draft data");if(!m||m.responseType!=="CONFIRM_DRAFT")throw new Error("Invalid response type");const R=m.data;if(R.draftType==="TRANSACTION"){const z=v;if(!z.amount||!z.accountId)throw new Error("Thiếu thông tin bắt buộc: số tiền và tài khoản");const q={type:z.type,amount:z.amount,currency:z.currency||"VND",occurredAt:ce(z.occurredAt),categoryId:z.categoryId,accountId:z.accountId,fromAccountId:z.fromAccountId,toAccountId:z.toAccountId,note:z.note};await H.transactions.create(q),r({title:"Thành công",description:"Đã tạo giao dịch thành công"})}else if(R.draftType==="RECEIVABLE"){const z=v;if(!z.amount||!z.counterpartyName)throw new Error("Thiếu thông tin bắt buộc: số tiền và tên người vay");const q={counterpartyName:z.counterpartyName,amount:z.amount,currency:z.currency||"VND",occurredAt:ce(z.occurredAt),dueAt:z.dueAt?ce(z.dueAt):void 0,note:z.note};await H.receivables.create(q),r({title:"Thành công",description:"Đã tạo khoản cho vay thành công"})}else if(R.draftType==="LIABILITY"){const z=v;if(!z.amount||!z.counterpartyName)throw new Error("Thiếu thông tin bắt buộc: số tiền và tên người cho vay");const q={counterpartyName:z.counterpartyName,amount:z.amount,currency:z.currency||"VND",occurredAt:ce(z.occurredAt),dueAt:z.dueAt?ce(z.dueAt):void 0,note:z.note};await H.liabilities.create(q),r({title:"Thành công",description:"Đã tạo khoản nợ thành công"})}else if(R.draftType==="SETTLEMENT"){const z=v;if(!z.amount||!z.accountId||!z.receivableId&&!z.liabilityId)throw new Error("Thiếu thông tin bắt buộc: số tiền, tài khoản và khoản nợ/khoản cho vay");const q={type:z.type==="RECEIVABLE"?"RECEIVABLE":"LIABILITY",receivableId:z.receivableId,liabilityId:z.liabilityId,amount:z.amount,currency:z.currency||"VND",occurredAt:ce(z.settledAt),note:z.note};await H.settlements.create(q),r({title:"Thành công",description:"Đã thanh toán thành công"})}else throw new Error("Unknown draft type");const Y=Z;O.period&&(async()=>{try{const q=await H.reports.getDashboard(O.period==="month"?"month":"day",Y.startDate,Y.endDate);a(q)}catch(q){console.error("Error refreshing report:",q)}})(),(async()=>{try{const z=await H.transactions.getAll({page:0,size:5,sortBy:"occurredAt",sortOrder:"desc",startDate:Y.startDate,endDate:Y.endDate});c(z.content)}catch(z){console.error("Error refreshing transactions:",z)}})(),K.current=0,T(!1),C(null)}catch(R){const Y=ne(R);throw x(Y),R}},[O,Z,m,r]);return t.jsxs(bm,{ref:P,className:"dashboard-wrapper",children:[t.jsx("h1",{className:"title",children:e("wallet.dashboard.title")}),t.jsxs("section",{className:"section",children:[t.jsx("div",{className:"section-header",children:t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.financialOverview")||"Tổng quan tài chính"})}),b?t.jsx("div",{className:"financial-overview-grid",children:[...Array(4)].map((v,R)=>t.jsx(de,{children:t.jsxs(we,{className:"p-6",children:[t.jsx(me,{className:"h-4 w-24 mb-2"}),t.jsx(me,{className:"h-8 w-32"})]})},R))}):t.jsxs("div",{className:"financial-overview-grid",children:[t.jsx(de,{children:t.jsxs(we,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalAssets")||"Tổng tài sản"}),t.jsx("div",{className:"stat-value",children:l?J(l.totalAssets,"VND"):"0 ₫"})]})}),t.jsx(de,{children:t.jsxs(we,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.currentCash")||"Tiền hiện có"}),t.jsx("div",{className:"stat-value stat-value--positive",children:l?J(l.currentCash,"VND"):"0 ₫"})]})}),t.jsx(de,{children:t.jsxs(we,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalReceivables")||"Khoản cho vay"}),t.jsx("div",{className:"stat-value stat-value--positive",children:l?J(l.totalReceivables,"VND"):"0 ₫"})]})}),t.jsx(de,{children:t.jsxs(we,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalLiabilities")||"Khoản nợ"}),t.jsx("div",{className:"stat-value stat-value--negative",children:l?J(l.totalLiabilities,"VND"):"0 ₫"})]})})]})]}),t.jsxs("section",{className:"section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.incomeExpense")||"Thu/Chi"}),t.jsxs("div",{className:"filter-controls",children:[t.jsx(U,{variant:O.period==="30days"?"default":"outline",size:"sm",onClick:()=>ge("30days"),children:e("wallet.dashboard.last30Days")||"30 ngày gần nhất"}),t.jsx(U,{variant:O.period==="month"?"default":"outline",size:"sm",onClick:()=>ge("month"),children:e("wallet.dashboard.thisMonth")||"Tháng này"}),t.jsxs("div",{className:"date-range-picker",children:[t.jsx(ee,{type:"date",className:"date-input",value:O.startDate||"",onChange:v=>{v.target.value&&O.endDate?j(v.target.value,O.endDate):(D.current=window.scrollY||document.documentElement.scrollTop,N(R=>({...R,startDate:v.target.value,period:"custom"})))},placeholder:e("wallet.dashboard.fromDate")||"Từ ngày"}),t.jsx("span",{className:"date-separator",children:"-"}),t.jsx(ee,{type:"date",className:"date-input",value:O.endDate||"",onChange:v=>{v.target.value&&O.startDate?j(O.startDate,v.target.value):(D.current=window.scrollY||document.documentElement.scrollTop,N(R=>({...R,endDate:v.target.value,period:"custom"})))},placeholder:e("wallet.dashboard.toDate")||"Đến ngày"})]})]})]}),d?t.jsx("div",{className:"stats-grid",children:[...Array(3)].map((v,R)=>t.jsx(de,{children:t.jsxs(we,{className:"p-6",children:[t.jsx(me,{className:"h-4 w-24 mb-2"}),t.jsx(me,{className:"h-8 w-32"})]})},R))}):t.jsxs("div",{className:"stats-grid",children:[t.jsx(de,{children:t.jsxs(we,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalIncome")}),t.jsx("div",{className:"stat-value stat-value--positive",children:n?J(n.totalIncome??0,"VND"):"0 ₫"})]})}),t.jsx(de,{children:t.jsxs(we,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalExpense")}),t.jsx("div",{className:"stat-value stat-value--negative",children:n?J(n.totalExpense??0,"VND"):"0 ₫"})]})}),t.jsx(de,{children:t.jsxs(we,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.netSavings")}),t.jsx("div",{className:"stat-value",children:n?J(n.netSavings??0,"VND"):"0 ₫"})]})})]})]}),t.jsxs("section",{className:"section",children:[t.jsx("div",{className:"section-header",children:t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.addTransaction")||"Thêm giao dịch mới"})}),t.jsx(de,{children:t.jsx(we,{className:"p-6",children:t.jsxs("div",{className:"add-transaction-section",children:[t.jsx(id,{onParse:M,isLoading:w,placeholder:e("wallet.dashboard.commandPlaceholder")||'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr")',error:(m==null?void 0:m.responseType)==="ERROR"?m.message:f||null}),t.jsxs(U,{onClick:()=>o("transactions/add"),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.dashboard.addManualTransaction")||"Thêm giao dịch thủ công"})]})]})})})]}),m&&m.responseType==="CONFIRM_DRAFT"&&t.jsx(um,{open:S,onOpenChange:T,draftData:m.data,accounts:E,categories:A,onConfirm:Ne,onCancel:()=>{C(null),T(!1)}}),t.jsxs("section",{className:"section",children:[t.jsx("div",{className:"section-header",children:t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.recentTransactions")})}),t.jsx(de,{children:t.jsx(we,{className:"p-6",children:g?t.jsx("div",{className:"transaction-list",children:[...Array(3)].map((v,R)=>t.jsxs("div",{className:"transaction-item",children:[t.jsxs("div",{className:"transaction-info",children:[t.jsx(me,{className:"h-4 w-24 mb-2"}),t.jsx(me,{className:"h-3 w-32"})]}),t.jsx(me,{className:"h-6 w-20"})]},R))}):i.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:e("wallet.dashboard.noTransactions")}),t.jsx(U,{onClick:()=>o("transactions/add"),className:"mt-4",children:e("wallet.dashboard.addFirstTransaction")})]}):t.jsx("div",{className:"transaction-list",children:i.map(v=>{var R,Y,W,z,q;return t.jsx("div",{className:"transaction-card",children:t.jsxs("div",{className:"transaction-main",children:[t.jsxs("div",{className:"transaction-left",children:[t.jsx(xe,{variant:v.type==="EXPENSE"?"destructive":v.type==="INCOME"?"default":"secondary",className:`transaction-type-badge transaction-type-badge--${v.type.toLowerCase()}`,children:v.type==="EXPENSE"?e("wallet.transactions.expense"):v.type==="INCOME"?e("wallet.transactions.income"):e("wallet.transactions.transfer")}),t.jsxs("div",{className:"transaction-info",children:[t.jsx("div",{className:"transaction-category",children:((R=v.category)==null?void 0:R.name)||(v.categoryId?(Y=A.find(se=>se.id===v.categoryId))==null?void 0:Y.name:null)||v.type}),t.jsxs("div",{className:"transaction-meta",children:[t.jsx("span",{className:"transaction-date",children:ue(v.occurredAt)}),v.type==="TRANSFER"?t.jsxs("span",{className:"transaction-account",children:[v.fromAccountId?((W=E.find(se=>se.id===v.fromAccountId))==null?void 0:W.name)||v.fromAccountId:"N/A"," →",v.toAccountId?((z=E.find(se=>se.id===v.toAccountId))==null?void 0:z.name)||v.toAccountId:"N/A"]}):((q=v.account)==null?void 0:q.name)&&t.jsx("span",{className:"transaction-account",children:v.account.name})]}),v.note&&t.jsx("div",{className:"transaction-note",children:v.note})]})]}),t.jsx("div",{className:"transaction-right",children:t.jsx("div",{className:"transaction-amount-wrapper",children:t.jsxs("div",{className:`transaction-amount transaction-amount--${v.type.toLowerCase()}`,children:[v.type==="EXPENSE"?"-":v.type==="INCOME"?"+":"",J(v.amount,v.currency)]})})})]})},v.id)})})})})]})]})},bm=le.div`
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

  .error-state {
    padding: ${({theme:e})=>e.spacing[4]};
    background: ${({theme:e})=>e.colors.error}20;
    border: 1px solid ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    color: ${({theme:e})=>e.colors.error};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  .financial-overview-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-bottom: ${({theme:e})=>e.spacing[10]};

    @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.xl}) {
      grid-template-columns: repeat(4, 1fr);
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
        color: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
      }

      &--negative {
        color: ${({theme:e})=>e.colors.error||"#ef4444"};
      }
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[4]};
    margin-bottom: ${({theme:e})=>e.spacing[10]};

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
        color: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
      }

      &--negative {
        color: ${({theme:e})=>e.colors.error||"#ef4444"};
      }
    }
  }

  .section {
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
      /* margin-bottom: ${({theme:e})=>e.spacing[4]}; */
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

      /* Style cho shadcn/ui Button trong filter-controls */
      button {
        height: 36px;
        font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
      }

      .date-range-picker {
        display: flex;
        align-items: center;
        gap: ${({theme:e})=>e.spacing[2]};

        .date-input {
          width: auto;
          min-width: 150px;
          height: 36px;

          &[type="date"] {
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

        .date-separator {
          color: ${({theme:e})=>e.colors.text.secondary};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
        }
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
      margin-bottom: ${({theme:e})=>e.spacing[6]};

      .transaction-card {
        padding: ${({theme:e})=>e.spacing[5]};
        background: ${({theme:e})=>e.colors.surface};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
        box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)":"0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)"};
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

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
              font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
              font-size: ${({theme:e})=>e.typography.fontSize.xs};
              font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
              line-height: ${({theme:e})=>e.typography.lineHeight.normal};
              text-transform: uppercase;
              letter-spacing: 0.5px;
              flex-shrink: 0;

              &--expense {
                background: ${({theme:e})=>e.colors.error}20;
                color: ${({theme:e})=>e.colors.error};
              }

              &--income {
                background: ${({theme:e})=>{var o;return(o=e.colors.success)!=null&&o[500]?`${e.colors.success[500]}20`:"#10b98120"}};
                color: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
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
                font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
                font-size: ${({theme:e})=>e.typography.fontSize.base};
                font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
                line-height: ${({theme:e})=>e.typography.lineHeight.normal};
                color: ${({theme:e})=>e.colors.text.primary};
              }

              .transaction-meta {
                display: flex;
                flex-wrap: wrap;
                gap: ${({theme:e})=>e.spacing[2]};
                font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
                font-size: ${({theme:e})=>e.typography.fontSize.sm};
                font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
                line-height: ${({theme:e})=>e.typography.lineHeight.normal};
                color: ${({theme:e})=>e.colors.text.secondary};

                .transaction-date {
                  display: flex;
                  align-items: center;
                }

                .transaction-account {
                  display: flex;
                  align-items: center;
                }
              }

              .transaction-note {
                font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
                font-size: ${({theme:e})=>e.typography.fontSize.sm};
                font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
                line-height: ${({theme:e})=>e.typography.lineHeight.normal};
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
              font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
              font-size: ${({theme:e})=>e.typography.fontSize.xl};
              font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
              line-height: ${({theme:e})=>e.typography.lineHeight.tight};
              color: ${({theme:e})=>e.colors.text.secondary};
              text-align: right;

              @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
                font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
              }

              &--income {
                color: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
              }

              &--expense {
                color: ${({theme:e})=>e.colors.error||"#ef4444"};
              }
            }
          }
        }
      }
    }
  }

  .add-transaction-section {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};

    .command-input-wrapper {
      display: flex;
      gap: ${({theme:e})=>e.spacing[2]};

      .command-input {
        flex: 1;
        height: 40px;
      }

      /* Style cho shadcn/ui Button trong command-input-wrapper */
      button {
        height: 40px;
        font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      }
    }

    /* Style cho shadcn/ui Button trong add-transaction-section */
    button {
      height: 40px;
      font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: ${({theme:e})=>e.spacing[2]};
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      transition: all 0.2s ease;
    }
  }
`,Fe=s.forwardRef(({className:e,...o},r)=>t.jsx("textarea",{className:ae("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...o}));Fe.displayName="Textarea";const vm=({transactionId:e,isOpen:o,onClose:r,onSuccess:n,onDelete:a})=>{const{t:i}=Pe(),c=Ae($=>$.walletAccounts.items),l=Ae($=>$.categories.items),[u,d]=s.useState(null),[p,g]=s.useState(!1),[y,b]=s.useState(!1),[k,f]=s.useState(!1),[x,w]=s.useState(null),[h,m]=s.useState({});s.useEffect(()=>{o&&e?C():(d(null),m({}),w(null),g(!1))},[o,e]);const C=async()=>{if(e){g(!0),w(null);try{const $=await H.transactions.getById(e);d($),m({type:$.type,amount:$.amount,currency:$.currency,accountId:$.accountId,categoryId:$.categoryId,fromAccountId:$.fromAccountId,toAccountId:$.toAccountId,occurredAt:$.occurredAt.split("T")[0],note:$.note})}catch($){w(ne($))}finally{g(!1)}}},S=async $=>{$.preventDefault(),w(null),b(!0);try{if(!u)return;await H.transactions.update(u.id,h),n==null||n(),r()}catch(A){w(ne(A))}finally{b(!1)}},T=s.useCallback(async()=>{if(!(!u||!window.confirm(i("wallet.transactions.confirmDelete")||"Bạn có chắc muốn xóa giao dịch này?"))){f(!0),w(null);try{await H.transactions.delete(u.id),a==null||a(),r()}catch($){w(ne($))}finally{f(!1)}}},[u,a,r,i]),E=($,A)=>{m(L=>({...L,[$]:A}))};return o?t.jsx(wm,{className:"modal--open",onClick:r,children:t.jsxs("div",{className:"modal-content",onClick:$=>$.stopPropagation(),children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h2",{className:"modal-title",children:i("wallet.transactions.edit")||"Sửa giao dịch"}),t.jsx("button",{className:"close-button",onClick:r,children:t.jsx(X,{icon:"Close",size:20,color:"currentColor"})})]}),p?t.jsx("div",{className:"loading-state",children:i("wallet.common.loading")}):u?t.jsxs("form",{className:"form",onSubmit:S,children:[x&&t.jsx("div",{className:"error-message",children:x}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[i("wallet.transactions.type")," *"]}),t.jsxs("select",{className:"select",value:h.type||u.type,onChange:$=>E("type",$.target.value),required:!0,children:[t.jsx("option",{value:"EXPENSE",children:i("wallet.transactions.expense")}),t.jsx("option",{value:"INCOME",children:i("wallet.transactions.income")}),t.jsx("option",{value:"TRANSFER",children:i("wallet.transactions.transfer")})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[i("wallet.transactions.amount")||"Số tiền"," *"]}),t.jsx("input",{className:"input",type:"number",step:"0.01",min:"0",value:h.amount||u.amount,onChange:$=>E("amount",parseFloat($.target.value)||0),required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:i("wallet.transactions.currency")||"Tiền tệ"}),t.jsxs("select",{className:"select",value:h.currency||u.currency,onChange:$=>E("currency",$.target.value),children:[t.jsx("option",{value:"VND",children:"VND (₫)"}),t.jsx("option",{value:"USD",children:"USD ($)"}),t.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),(h.type||u.type)==="TRANSFER"?t.jsxs("div",{className:"transfer-fields",children:[t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[i("wallet.transactions.fromAccount")||"Tài khoản nguồn"," *"]}),t.jsxs("select",{className:"select",value:h.fromAccountId||u.fromAccountId||"",onChange:$=>E("fromAccountId",$.target.value),required:!0,children:[t.jsx("option",{value:"",children:i("wallet.transactions.selectFromAccount")||"Chọn tài khoản nguồn"}),c.map($=>t.jsxs("option",{value:$.id,children:[$.name," (",$.type,")"]},$.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[i("wallet.transactions.toAccount")||"Tài khoản đích"," *"]}),t.jsxs("select",{className:"select",value:h.toAccountId||u.toAccountId||"",onChange:$=>E("toAccountId",$.target.value),required:!0,children:[t.jsx("option",{value:"",children:i("wallet.transactions.selectToAccount")||"Chọn tài khoản đích"}),c.filter($=>$.id!==(h.fromAccountId||u.fromAccountId)).map($=>t.jsxs("option",{value:$.id,children:[$.name," (",$.type,")"]},$.id))]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[i("wallet.accounts.title")," *"]}),t.jsx("select",{className:"select",value:h.accountId||u.accountId,onChange:$=>E("accountId",$.target.value),required:!0,children:c.map($=>t.jsxs("option",{value:$.id,children:[$.name," (",$.type,")"]},$.id))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:i("wallet.categories.title")}),t.jsxs("select",{className:"select",value:h.categoryId||u.categoryId||"",onChange:$=>E("categoryId",$.target.value||void 0),children:[t.jsx("option",{value:"",children:i("wallet.transactions.noCategory")||"Không có"}),l.map($=>t.jsx("option",{value:$.id,children:$.name},$.id))]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:i("wallet.transactions.date")||"Ngày giao dịch"}),t.jsx("input",{className:"input",type:"date",value:h.occurredAt||u.occurredAt.split("T")[0],onChange:$=>E("occurredAt",$.target.value)})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:i("wallet.transactions.note")||"Ghi chú"}),t.jsx(Fe,{value:h.note||u.note||"",onChange:$=>E("note",$.target.value||void 0),rows:3})]}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{className:"cancel-button",type:"button",onClick:r,disabled:y||k,children:i("wallet.common.cancel")}),t.jsx("button",{className:`submit-button ${y?"submit-button--loading":""}`,type:"submit",disabled:y||k,children:i(y?"wallet.common.saving":"wallet.common.save")})]}),t.jsxs("button",{className:"delete-button",type:"button",onClick:T,disabled:y||k,children:[t.jsx(X,{icon:k?"Loading":"Delete",size:18,color:"currentColor"}),t.jsx("span",{children:k?i("wallet.common.deleting")||"Đang xóa...":i("wallet.transactions.delete")||"Xóa giao dịch"})]})]}):t.jsx("div",{className:"error-message",children:i("wallet.transactions.notFound")||"Không tìm thấy giao dịch"})]})}):null},wm=le.div`
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
`,$m=Pt("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),Je=s.forwardRef(({className:e,variant:o,...r},n)=>t.jsx("div",{ref:n,role:"alert",className:ae($m({variant:o}),e),...r}));Je.displayName="Alert";const jm=s.forwardRef(({className:e,...o},r)=>t.jsx("h5",{ref:r,className:ae("mb-1 font-medium leading-none tracking-tight",e),...o}));jm.displayName="AlertTitle";const et=s.forwardRef(({className:e,...o},r)=>t.jsx("div",{ref:r,className:ae("text-sm [&_p]:leading-relaxed",e),...o}));et.displayName="AlertDescription";const Nm=()=>{var ce,Ne;const{t:e}=Pe(),{navigate:o}=Ve(),r=go(),n=Ae(v=>v.walletAccounts.items),a=Ae(v=>v.categories.items),[i,c]=s.useState([]),[l,u]=s.useState(null),[d,p]=s.useState(!0),[g,y]=s.useState(null),[b,k]=s.useState(!1),[f,x]=s.useState(""),[w,h]=s.useState(null),[m,C]=s.useState(null),[S,T]=s.useState(!1),E=s.useRef(0),$=s.useRef(null),[A,L]=s.useState({page:0,size:20,sortBy:"occurredAt",sortOrder:"desc"}),O=Ae(v=>v.walletAccounts.lastFetched),N=Ae(v=>v.categories.lastFetched);s.useEffect(()=>{const v=Date.now()-3e5;(!O||O<v)&&r(ci()),(!N||N<v)&&r(vn())},[r,O,N]);const D=s.useMemo(()=>{let v,R;return A.startDate&&(v=A.startDate.includes("T")?A.startDate:`${A.startDate}T00:00:00`),A.endDate&&(R=A.endDate.includes("T")?A.endDate:`${A.endDate}T23:59:59`),{startDate:v,endDate:R}},[A.startDate,A.endDate]),P=s.useCallback(async()=>{E.current=window.scrollY||document.documentElement.scrollTop,p(!0),y(null);try{const v=await H.transactions.getAll({...A,startDate:D.startDate,endDate:D.endDate,keyword:f||void 0});c(v.content),u(v)}catch(v){y(ne(v)),console.error("Transactions load error:",v)}finally{p(!1),requestAnimationFrame(()=>{window.scrollTo(0,E.current)})}},[A,D.startDate,D.endDate,f]);s.useEffect(()=>{P()},[P]),s.useEffect(()=>{const v=setTimeout(()=>{f!==A.keyword&&L(R=>({...R,keyword:f||void 0,page:0}))},500);return()=>clearTimeout(v)},[f]);const _=s.useCallback((v,R)=>{E.current=window.scrollY||document.documentElement.scrollTop,L(Y=>({...Y,[v]:R,page:0}))},[]),F=s.useCallback(v=>{if(E.current=window.scrollY||document.documentElement.scrollTop,w===v){h(null),L(W=>({...W,startDate:void 0,endDate:void 0,page:0}));return}h(v);const R=new Date,Y=(W,z=!0)=>{const q=W.getFullYear(),se=String(W.getMonth()+1).padStart(2,"0"),je=String(W.getDate()).padStart(2,"0");return`${q}-${se}-${je}T${z?"00:00:00":"23:59:59"}`};if(v==="all")L(W=>({...W,startDate:void 0,endDate:void 0,page:0}));else if(v==="30days"){const W=new Date(R);W.setDate(W.getDate()-30),L(z=>({...z,startDate:Y(W,!0),endDate:Y(R,!1),page:0}))}else if(v==="month"){const W=new Date(R.getFullYear(),R.getMonth(),1);L(z=>({...z,startDate:Y(W,!0),endDate:Y(R,!1),page:0}))}},[w]),K=s.useCallback(v=>{E.current=window.scrollY||document.documentElement.scrollTop,L(R=>({...R,page:v}))},[]),I=s.useCallback((v,R="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:R}).format(v),[]),Z=s.useCallback(v=>new Date(v).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),[]),J=s.useCallback(v=>{C(v.id),T(!0)},[]),ue=s.useCallback(()=>{T(!1),C(null)},[]),ge=s.useCallback(()=>{P()},[P]),j=s.useCallback(()=>{P()},[P]),M=s.useCallback(async v=>{if(window.confirm(e("wallet.transactions.confirmDelete")||"Bạn có chắc muốn xóa giao dịch này?"))try{await H.transactions.delete(v.id),await P()}catch(R){y(ne(R))}},[P,e]);return t.jsxs(Sm,{ref:$,className:"transactions-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:e("wallet.transactions.title")}),t.jsxs(U,{onClick:()=>o("transactions/add"),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.add")})]})]}),g&&t.jsx(Je,{variant:"destructive",children:t.jsx(et,{children:g})}),t.jsxs("div",{className:"quick-filters-section",children:[t.jsxs("div",{className:"quick-filters",children:[t.jsx(U,{variant:w==="all"?"default":"outline",size:"sm",onClick:()=>F("all"),children:e("wallet.transactions.all")||"Tất cả"}),t.jsx(U,{variant:w==="30days"?"default":"outline",size:"sm",onClick:()=>F("30days"),children:e("wallet.dashboard.last30Days")||"30 ngày gần nhất"}),t.jsx(U,{variant:w==="month"?"default":"outline",size:"sm",onClick:()=>F("month"),children:e("wallet.dashboard.thisMonth")||"Tháng này"})]}),t.jsxs("div",{className:"search-bar",children:[t.jsx(X,{icon:"Search",size:18,color:"currentColor"}),t.jsx(ee,{type:"text",className:"search-input",placeholder:e("wallet.transactions.searchPlaceholder")||"Tìm kiếm giao dịch...",value:f,onChange:v=>x(v.target.value)}),f&&t.jsx(U,{variant:"ghost",size:"icon",className:"clear-search-button",onClick:()=>x(""),title:e("wallet.common.clear")||"Xóa",children:t.jsx(X,{icon:"Close",size:16,color:"currentColor"})})]}),t.jsxs(U,{variant:"outline",className:"toggle-filters-button",onClick:()=>k(!b),children:[t.jsx(X,{icon:b?"ChevronUp":"ChevronDown",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.filters")||"Bộ lọc"})]})]}),b&&t.jsx(de,{className:"filters-card",children:t.jsx(we,{className:"p-6",children:t.jsxs("div",{className:"filters-grid",children:[t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.type")}),t.jsxs(be,{value:A.type||"__all__",onValueChange:v=>_("type",v==="__all__"?void 0:v),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{placeholder:e("wallet.transactions.all")})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"__all__",children:e("wallet.transactions.all")}),t.jsx(Q,{value:"EXPENSE",children:e("wallet.transactions.expense")}),t.jsx(Q,{value:"INCOME",children:e("wallet.transactions.income")}),t.jsx(Q,{value:"TRANSFER",children:e("wallet.transactions.transfer")})]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.fromDate")}),t.jsx(ee,{className:"input",type:"date",value:((ce=A.startDate)==null?void 0:ce.split("T")[0])||"",onChange:v=>_("startDate",v.target.value||void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.toDate")}),t.jsx(ee,{className:"input",type:"date",value:((Ne=A.endDate)==null?void 0:Ne.split("T")[0])||"",onChange:v=>_("endDate",v.target.value||void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.accounts.title")}),t.jsxs(be,{value:A.accountId||"__all__",onValueChange:v=>_("accountId",v==="__all__"?void 0:v),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{placeholder:e("wallet.transactions.all")})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"__all__",children:e("wallet.transactions.all")}),n.map(v=>t.jsx(Q,{value:v.id,children:v.name},v.id))]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.categories.title")}),t.jsxs(be,{value:A.categoryId||"__all__",onValueChange:v=>_("categoryId",v==="__all__"?void 0:v),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{placeholder:e("wallet.transactions.all")})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"__all__",children:e("wallet.transactions.all")}),a.map(v=>t.jsx(Q,{value:v.id,children:v.name},v.id))]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.minAmount")||"Tối thiểu"}),t.jsx(ee,{className:"number-input",type:"number",step:"0.01",min:"0",placeholder:"0",value:A.minAmount||"",onChange:v=>_("minAmount",v.target.value?parseFloat(v.target.value):void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.maxAmount")||"Tối đa"}),t.jsx(ee,{className:"number-input",type:"number",step:"0.01",min:"0",placeholder:"0",value:A.maxAmount||"",onChange:v=>_("maxAmount",v.target.value?parseFloat(v.target.value):void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.sortBy")||"Sắp xếp theo"}),t.jsxs(be,{value:A.sortBy||"occurredAt",onValueChange:v=>_("sortBy",v),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"occurredAt",children:e("wallet.transactions.sortByDate")||"Ngày giao dịch"}),t.jsx(Q,{value:"amount",children:e("wallet.transactions.sortByAmount")||"Số tiền"}),t.jsx(Q,{value:"createdAt",children:e("wallet.transactions.sortByCreated")||"Ngày tạo"})]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.sortOrder")||"Thứ tự"}),t.jsxs(be,{value:A.sortOrder||"desc",onValueChange:v=>_("sortOrder",v),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"desc",children:e("wallet.transactions.desc")||"Giảm dần"}),t.jsx(Q,{value:"asc",children:e("wallet.transactions.asc")||"Tăng dần"})]})]})]})]})})}),d&&i.length===0?t.jsx("div",{className:"loading-state",children:t.jsx("div",{className:"skeleton-list",children:[...Array(5)].map((v,R)=>t.jsx(de,{className:"skeleton-card",children:t.jsxs(we,{className:"p-6",children:[t.jsx(me,{className:"h-4 w-32 mb-2"}),t.jsx(me,{className:"h-6 w-24 mb-2"}),t.jsx(me,{className:"h-3 w-48"})]})},R))})}):i.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("div",{className:"empty-icon",children:t.jsx(X,{icon:"FileText",size:48,color:"currentColor"})}),t.jsx("p",{children:e("wallet.transactions.noTransactions")}),t.jsxs(U,{onClick:()=>o("transactions/add"),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.addFirst")||"Thêm giao dịch đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"transaction-list",children:i.map(v=>{var R,Y,W,z,q;return t.jsx("div",{className:"transaction-card",onClick:()=>J(v),children:t.jsxs("div",{className:"transaction-main",children:[t.jsxs("div",{className:"transaction-left",children:[t.jsx(xe,{variant:v.type==="EXPENSE"?"destructive":v.type==="INCOME"?"default":"secondary",className:`transaction-type-badge transaction-type-badge--${v.type.toLowerCase()}`,children:v.type==="EXPENSE"?e("wallet.transactions.expense"):v.type==="INCOME"?e("wallet.transactions.income"):e("wallet.transactions.transfer")}),t.jsxs("div",{className:"transaction-info",children:[t.jsx("div",{className:"transaction-category",children:((R=v.category)==null?void 0:R.name)||(v.categoryId?(Y=a.find(se=>se.id===v.categoryId))==null?void 0:Y.name:null)||v.type}),t.jsxs("div",{className:"transaction-meta",children:[t.jsx("span",{className:"transaction-date",children:Z(v.occurredAt)}),v.type==="TRANSFER"?t.jsxs("span",{className:"transaction-account",children:[v.fromAccountId?((W=n.find(se=>se.id===v.fromAccountId))==null?void 0:W.name)||v.fromAccountId:"N/A"," →",v.toAccountId?((z=n.find(se=>se.id===v.toAccountId))==null?void 0:z.name)||v.toAccountId:"N/A"]}):((q=v.account)==null?void 0:q.name)&&t.jsx("span",{className:"transaction-account",children:v.account.name})]}),v.note&&t.jsx("div",{className:"transaction-note",children:v.note})]})]}),t.jsx("div",{className:"transaction-right",children:t.jsxs("div",{className:"transaction-amount-wrapper",children:[t.jsxs("div",{className:`transaction-amount transaction-amount--${v.type.toLowerCase()}`,children:[v.type==="EXPENSE"?"-":v.type==="INCOME"?"+":"",I(v.amount,v.currency)]}),t.jsxs("div",{className:"transaction-actions",onClick:se=>se.stopPropagation(),children:[t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>J(v),title:e("wallet.common.edit"),children:t.jsx(X,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button icon-button--danger",onClick:()=>M(v),title:e("wallet.common.delete"),children:t.jsx(X,{icon:"Delete",size:16,color:"currentColor"})})]})]})})]})},v.id)})}),l&&l.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsxs(U,{variant:"outline",className:`pagination-button ${l.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>K(l.page-1),disabled:!l.hasPrevious,children:[t.jsx(X,{icon:"ChevronLeft",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.previous")||"Trước"})]}),t.jsxs("div",{className:"pagination-info",children:[t.jsxs("span",{children:[e("wallet.transactions.page")||"Trang"," ",l.page+1," / ",l.totalPages]}),t.jsxs("span",{className:"pagination-total",children:["(",l.totalElements," ",e("wallet.transactions.items")||"giao dịch",")"]})]}),t.jsxs(U,{variant:"outline",className:`pagination-button ${l.hasNext?"":"pagination-button--disabled"}`,onClick:()=>K(l.page+1),disabled:!l.hasNext,children:[t.jsx("span",{children:e("wallet.transactions.next")||"Sau"}),t.jsx(X,{icon:"ChevronRight",size:18,color:"currentColor"})]})]})]}),t.jsx(vm,{transactionId:m||"",isOpen:S&&!!m,onClose:ue,onSuccess:ge,onDelete:j})]})},Sm=le.div`
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
      font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
      font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      line-height: ${({theme:e})=>e.typography.lineHeight.tight};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;
      letter-spacing: -0.02em;

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
      }
    }

    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
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

      &:hover {
        background: ${({theme:e})=>e.colors.primary[600]||"#0284c7"};
        transform: translateY(-2px);
        box-shadow: 0 4px 16px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.4)":"rgba(14, 165, 233, 0.35)"};
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  /* Error state styles handled by shadcn/ui Alert component */

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
      order: 1;

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        order: 0;
      }

      /* Quick filter button styles handled by shadcn/ui Button component */
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
      transition: all 0.2s ease;
      flex: 1;
      min-width: 0;
      order: 2;

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        order: 1;
      }

      &:focus-within {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.1)":"rgba(14, 165, 233, 0.05)"};
      }

      .search-input {
        flex: 1;
        border: none;
        background: transparent;
        min-width: 0;
        height: 100%;

        /* Other styles handled by shadcn/ui Input component */
      }

      /* Clear search button styles handled by shadcn/ui Button component */
    }

    .toggle-filters-button {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
      height: 40px;
      padding: 0 ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
      line-height: 1.5;
      color: ${({theme:e})=>e.colors.text.secondary};
      cursor: pointer;
      transition: all 0.2s ease;
      align-self: flex-start;
      order: 3;

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        order: 2;
      }

      &:hover {
        border-color: ${({theme:e})=>e.colors.primary};
        color: ${({theme:e})=>e.colors.text.primary};
      }
    }
  }

  .filters-card {
    padding: ${({theme:e})=>e.spacing[6]};
    background: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.xl||e.borderRadius["2xl"]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 2px 8px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)":"0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)"};
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;

      .filters-grid {
      display: grid;
      grid-template-columns: 
        minmax(140px, 160px)    /* Type */
        minmax(150px, 180px)    /* Start Date */
        minmax(150px, 180px)    /* End Date */
        minmax(150px, 200px)    /* Account */
        minmax(150px, 200px)    /* Category */
        minmax(120px, 140px)    /* Min Amount */
        minmax(120px, 140px)    /* Max Amount */
        minmax(150px, 180px)    /* Sort By */
        minmax(130px, 160px)    /* Sort Order */
        minmax(200px, 1fr);     /* Search - takes remaining space */
      gap: ${({theme:e})=>e.spacing[4]};
      width: 100%;
      min-width: 0;
      max-width: 100%;
      
      @media (max-width: 1600px) {
        grid-template-columns: 
          minmax(120px, 140px)
          minmax(130px, 150px)
          minmax(130px, 150px)
          minmax(130px, 170px)
          minmax(130px, 170px)
          minmax(90px, 110px)
          minmax(90px, 110px)
          minmax(130px, 150px)
          minmax(110px, 130px)
          minmax(180px, 1fr);
      }
      
      @media (max-width: 1400px) {
        grid-template-columns: repeat(5, 1fr);
        
        .filter-group:nth-child(10) {
          grid-column: span 5; /* Search takes full width on smaller screens */
        }
      }
      
      @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        
        .filter-group:nth-child(10) {
          grid-column: span 3;
        }
      }
      
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        
        .filter-group:nth-child(10) {
          grid-column: span 2;
        }
      }
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
        
        .filter-group:nth-child(10) {
          grid-column: span 1;
        }
      }

      .filter-group {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[2]};
        min-width: 0; /* Prevent grid overflow */

        .label {
          font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          line-height: 1.5;
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
          width: 100%;
          transition: all 0.2s ease;

          &:focus {
            outline: none;
            border-color: ${({theme:e})=>e.colors.primary};
            box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.2)":"rgba(14, 165, 233, 0.1)"};
          }

          &:hover {
            border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
          }

          &[type="date"],
          &[type="datetime-local"] {
            position: relative;
            cursor: pointer;

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

        .number-input {
          height: 40px;
          padding: 0 ${({theme:e})=>e.spacing[3]};
          background: ${({theme:e})=>e.colors.background};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.lg};
          font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
          line-height: 1.5;
          color: ${({theme:e})=>e.colors.text.primary};
          width: 100%;
          transition: all 0.2s ease;
          text-align: right;

          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            opacity: 1;
            cursor: pointer;
          }

          &:focus {
            outline: none;
            border-color: ${({theme:e})=>e.colors.primary};
            box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.2)":"rgba(14, 165, 233, 0.1)"};
          }

          &:hover {
            border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
          }

          &::placeholder {
            color: ${({theme:e})=>e.colors.text.secondary};
            opacity: 0.5;
          }
        }
      }
    }
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[12]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};

    .empty-icon {
      color: ${({theme:e})=>e.colors.text.secondary};
      opacity: 0.5;
      margin-bottom: ${({theme:e})=>e.spacing[2]};
    }
    
    p {
      font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
      color: ${({theme:e})=>e.colors.text.secondary};
      margin: 0;
    }
    
    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
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

      &:hover {
        background: ${({theme:e})=>e.colors.primary[600]||"#0284c7"};
        transform: translateY(-2px);
        box-shadow: 0 4px 16px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.4)":"rgba(14, 165, 233, 0.35)"};
      }

      &:active {
        transform: translateY(0);
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

    .skeleton-list {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[3]};

      .skeleton-card {
        padding: ${({theme:e})=>e.spacing[5]};
        background: ${({theme:e})=>e.colors.surface};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[3]};

        .skeleton-line {
          height: 16px;
          background: linear-gradient(
            90deg,
            ${({theme:e})=>e.colors.border} 0%,
            ${({theme:e})=>e.colors.background} 50%,
            ${({theme:e})=>e.colors.border} 100%
          );
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
          border-radius: ${({theme:e})=>e.borderRadius.md};

          &--title {
            width: 60%;
            height: 20px;
          }

          &--amount {
            width: 30%;
            height: 24px;
            align-self: flex-end;
          }

          &--detail {
            width: 80%;
            height: 14px;
          }
        }
      }
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .transaction-list {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[3]};
    margin-bottom: ${({theme:e})=>e.spacing[6]};

      .transaction-card {
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
            font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
            font-size: ${({theme:e})=>e.typography.fontSize.xs};
            font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
            line-height: ${({theme:e})=>e.typography.lineHeight.normal};
            text-transform: uppercase;
            letter-spacing: 0.5px;
            flex-shrink: 0;

            &--expense {
              background: ${({theme:e})=>e.colors.error}20;
              color: ${({theme:e})=>e.colors.error};
            }

            &--income {
              background: ${({theme:e})=>{var o;return(o=e.colors.success)!=null&&o[500]?`${e.colors.success[500]}20`:"#10b98120"}};
              color: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
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
              font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
              font-size: ${({theme:e})=>e.typography.fontSize.base};
              font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
              line-height: ${({theme:e})=>e.typography.lineHeight.normal};
              color: ${({theme:e})=>e.colors.text.primary};
            }

            .transaction-meta {
              display: flex;
              flex-wrap: wrap;
              gap: ${({theme:e})=>e.spacing[2]};
              font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
              font-size: ${({theme:e})=>e.typography.fontSize.sm};
              font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
              line-height: ${({theme:e})=>e.typography.lineHeight.normal};
              color: ${({theme:e})=>e.colors.text.secondary};

              .transaction-date {
                display: flex;
                align-items: center;
              }

              .transaction-account {
                display: flex;
                align-items: center;
              }
            }

            .transaction-note {
              font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
              font-size: ${({theme:e})=>e.typography.fontSize.sm};
              font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
              line-height: ${({theme:e})=>e.typography.lineHeight.normal};
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
            font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
            font-size: ${({theme:e})=>e.typography.fontSize.xl};
            font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
            line-height: ${({theme:e})=>e.typography.lineHeight.tight};
            color: ${({theme:e})=>e.colors.text.secondary};
            text-align: right;

            @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
              font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
            }

            &--income {
              color: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
            }

            &--expense {
              color: ${({theme:e})=>e.colors.error||"#ef4444"};
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
              display: flex;
              align-items: center;
              justify-content: center;

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

              &:active {
                transform: translateY(0);
              }
            }
          }
        }
      }
    }
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
      font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
      color: ${({theme:e})=>e.colors.text.secondary};

      .pagination-total {
        font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
        font-size: ${({theme:e})=>e.typography.fontSize.xs};
        font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
        line-height: ${({theme:e})=>e.typography.lineHeight.normal};
        color: ${({theme:e})=>e.colors.text.secondary};
        opacity: 0.7;
      }
    }
  }
`,km=()=>{const{navigate:e}=Ve(),[o,r]=s.useState([]),[n,a]=s.useState([]),[i,c]=s.useState([]),[l,u]=s.useState([]),[d,p]=s.useState(!1),[g,y]=s.useState(null),[b,k]=s.useState({type:"EXPENSE",amount:0,currency:"VND",accountId:"",occurredAt:new Date().toISOString().split("T")[0]});s.useEffect(()=>{f()},[]),s.useEffect(()=>{b.type!=="TRANSFER"&&k(m=>({...m,fromAccountId:void 0,toAccountId:void 0})),b.type!=="RECEIVABLE_SETTLEMENT"&&k(m=>({...m,receivableId:void 0})),b.type!=="LIABILITY_SETTLEMENT"&&k(m=>({...m,liabilityId:void 0}))},[b.type]);const f=async()=>{try{const[m,C,S,T]=await Promise.all([H.accounts.getAll(),H.categories.getAll(),H.receivables.getAll(0,100),H.liabilities.getAll(0,100)]);r(m),a(C),c(S.content||[]),u(T.content||[]),m.length>0&&!b.accountId&&k(E=>({...E,accountId:m[0].id}))}catch(m){console.error("Load accounts/categories error:",m)}},x=async m=>{m.preventDefault(),y(null),p(!0);try{if(!b.accountId)throw new Error("Vui lòng chọn tài khoản");if(b.amount<=0)throw new Error("Số tiền phải lớn hơn 0");if(b.type==="TRANSFER"){if(!b.fromAccountId||!b.toAccountId)throw new Error("Vui lòng chọn tài khoản nguồn và đích");if(b.fromAccountId===b.toAccountId)throw new Error("Tài khoản nguồn và đích phải khác nhau")}else if(b.type==="RECEIVABLE_SETTLEMENT"){if(!b.receivableId)throw new Error("Vui lòng chọn khoản cho vay cần ghi nhận")}else if(b.type==="LIABILITY_SETTLEMENT"&&!b.liabilityId)throw new Error("Vui lòng chọn khoản nợ cần ghi nhận");const C=b.occurredAt?new Date(b.occurredAt).toISOString():new Date().toISOString();await H.transactions.create({...b,occurredAt:C}),e("transactions")}catch(C){y(ne(C))}finally{p(!1)}},w=(m,C)=>{k(S=>({...S,[m]:C}))},h=()=>{e("transactions")};return t.jsxs(Cm,{className:"add-transaction-wrapper",children:[t.jsxs("div",{className:"page-header",children:[t.jsx("button",{className:"back-button",onClick:h,title:"Quay lại",children:t.jsx(X,{icon:"Back",size:20,color:"currentColor"})}),t.jsx("h1",{className:"title",children:"Thêm giao dịch"})]}),g&&t.jsx("div",{className:"error-message",children:g}),t.jsxs("form",{className:"form",onSubmit:x,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Loại giao dịch *"}),t.jsxs("select",{className:"select",value:b.type,onChange:m=>w("type",m.target.value),required:!0,children:[t.jsx("option",{value:"EXPENSE",children:"Chi tiêu"}),t.jsx("option",{value:"INCOME",children:"Thu nhập"}),t.jsx("option",{value:"TRANSFER",children:"Chuyển khoản"}),t.jsx("option",{value:"RECEIVABLE_SETTLEMENT",children:"Nhận tiền cho vay"}),t.jsx("option",{value:"LIABILITY_SETTLEMENT",children:"Trả nợ"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Số tiền *"}),t.jsx("input",{className:"input",type:"number",step:"0.01",min:"0",value:b.amount||"",onChange:m=>w("amount",parseFloat(m.target.value)||0),placeholder:"0",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tiền tệ"}),t.jsxs("select",{className:"select",value:b.currency,onChange:m=>w("currency",m.target.value),children:[t.jsx("option",{value:"VND",children:"VND (₫)"}),t.jsx("option",{value:"USD",children:"USD ($)"}),t.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),b.type==="TRANSFER"?t.jsxs("div",{className:"transfer-fields",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản nguồn *"}),t.jsxs("select",{className:"select",value:b.fromAccountId||"",onChange:m=>w("fromAccountId",m.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản nguồn"}),o.map(m=>t.jsxs("option",{value:m.id,children:[m.name," (",m.type,")"]},m.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản đích *"}),t.jsxs("select",{className:"select",value:b.toAccountId||"",onChange:m=>w("toAccountId",m.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản đích"}),o.filter(m=>m.id!==b.fromAccountId).map(m=>t.jsxs("option",{value:m.id,children:[m.name," (",m.type,")"]},m.id))]})]})]}):b.type==="RECEIVABLE_SETTLEMENT"?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản *"}),t.jsxs("select",{className:"select",value:b.accountId,onChange:m=>w("accountId",m.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản"}),o.map(m=>t.jsxs("option",{value:m.id,children:[m.name," (",m.type,")"]},m.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Khoản cho vay *"}),t.jsxs("select",{className:"select",value:b.receivableId||"",onChange:m=>w("receivableId",m.target.value||void 0),required:!0,children:[t.jsx("option",{value:"",children:"Chọn khoản cho vay"}),i.map(m=>t.jsxs("option",{value:m.id,children:[m.counterpartyName," - Còn lại:"," ",new Intl.NumberFormat("vi-VN",{style:"currency",currency:m.currency}).format(m.remainingAmount)]},m.id))]})]})]}):b.type==="LIABILITY_SETTLEMENT"?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản *"}),t.jsxs("select",{className:"select",value:b.accountId,onChange:m=>w("accountId",m.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản"}),o.map(m=>t.jsxs("option",{value:m.id,children:[m.name," (",m.type,")"]},m.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Khoản nợ *"}),t.jsxs("select",{className:"select",value:b.liabilityId||"",onChange:m=>w("liabilityId",m.target.value||void 0),required:!0,children:[t.jsx("option",{value:"",children:"Chọn khoản nợ"}),l.map(m=>t.jsxs("option",{value:m.id,children:[m.counterpartyName," - Còn lại:"," ",new Intl.NumberFormat("vi-VN",{style:"currency",currency:m.currency}).format(m.remainingAmount)]},m.id))]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản *"}),t.jsxs("select",{className:"select",value:b.accountId,onChange:m=>w("accountId",m.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản"}),o.map(m=>t.jsxs("option",{value:m.id,children:[m.name," (",m.type,")"]},m.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Danh mục"}),t.jsxs("select",{className:"select",value:b.categoryId||"",onChange:m=>w("categoryId",m.target.value||void 0),children:[t.jsx("option",{value:"",children:"Không có"}),n.map(m=>t.jsx("option",{value:m.id,children:m.name},m.id))]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ngày giao dịch"}),t.jsx("input",{className:"input",type:"date",value:b.occurredAt||"",onChange:m=>w("occurredAt",m.target.value)})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ghi chú"}),t.jsx(Fe,{value:b.note||"",onChange:m=>w("note",m.target.value||void 0),placeholder:"Thêm ghi chú cho giao dịch này...",rows:3})]}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{className:"cancel-button",type:"button",onClick:()=>e("transactions"),disabled:d,children:"Hủy"}),t.jsx("button",{className:`submit-button ${d?"submit-button--loading":""}`,type:"submit",disabled:d,children:d?"Đang lưu...":"Lưu giao dịch"})]})]})]})},Cm=le.div`
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

      &:active {
        transform: translateY(0);
      }

      svg {
        color: currentColor;
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

      .input {
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

        &::placeholder {
          color: ${({theme:e})=>e.colors.text.secondary};
          opacity: 0.6;
        }
      }

      .select {
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        color: ${({theme:e})=>e.colors.text.primary};
        cursor: pointer;
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

      .form-group {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[2]};

        .label {
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          color: ${({theme:e})=>e.colors.text.primary};
        }

        .select {
          padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
          background: ${({theme:e})=>e.colors.background};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.md};
          font-size: ${({theme:e})=>e.typography.fontSize.base};
          color: ${({theme:e})=>e.colors.text.primary};
          cursor: pointer;
          transition: all 0.2s ease;

          &:focus {
            outline: none;
            border-color: ${({theme:e})=>e.colors.primary};
            box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
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
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        background: ${({theme:e})=>e.colors.primary};
        color: white;
        border: none;
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        cursor: pointer;
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
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
    }
  }
`,Em=()=>{const{navigate:e}=Ve(),[o,r]=s.useState(null),[n,a]=s.useState([]),[i,c]=s.useState([]),[l,u]=s.useState(!0),[d,p]=s.useState(!1),[g,y]=s.useState(!1),[b,k]=s.useState(null),[f,x]=s.useState(null);s.useEffect(()=>{const E=sessionStorage.getItem("editTransactionId");E?(x(E),sessionStorage.removeItem("editTransactionId")):(k("Không tìm thấy ID giao dịch"),u(!1))},[]);const[w,h]=s.useState({});s.useEffect(()=>{f&&m()},[f]);const m=async()=>{if(f){u(!0),k(null);try{const[E,$,A]=await Promise.all([H.transactions.getById(f),H.accounts.getAll(),H.categories.getAll()]);r(E),a($),c(A),h({type:E.type,amount:E.amount,currency:E.currency,accountId:E.accountId,categoryId:E.categoryId,fromAccountId:E.fromAccountId,toAccountId:E.toAccountId,occurredAt:E.occurredAt.split("T")[0],note:E.note})}catch(E){k(ne(E))}finally{u(!1)}}},C=async E=>{E.preventDefault(),k(null),p(!0);try{if(!o)return;await H.transactions.update(o.id,w),e("transactions")}catch($){k(ne($))}finally{p(!1)}},S=async()=>{if(!(!o||!window.confirm("Bạn có chắc muốn xóa giao dịch này?"))){y(!0),k(null);try{await H.transactions.delete(o.id),e("transactions")}catch(E){k(ne(E))}finally{y(!1)}}},T=(E,$)=>{h(A=>({...A,[E]:$}))};return l?t.jsxs(Fo,{className:"edit-transaction-wrapper",children:[t.jsx("h1",{className:"title",children:"Sửa giao dịch"}),t.jsx("div",{className:"loading-state",children:"Đang tải dữ liệu..."})]}):o?t.jsxs(Fo,{className:"edit-transaction-wrapper",children:[t.jsx("h1",{className:"title",children:"Sửa giao dịch"}),b&&t.jsx("div",{className:"error-message",children:b}),t.jsxs("form",{className:"form",onSubmit:C,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Loại giao dịch *"}),t.jsxs("select",{className:"select",value:w.type||o.type,onChange:E=>T("type",E.target.value),required:!0,children:[t.jsx("option",{value:"EXPENSE",children:"Chi tiêu"}),t.jsx("option",{value:"INCOME",children:"Thu nhập"}),t.jsx("option",{value:"TRANSFER",children:"Chuyển khoản"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Số tiền *"}),t.jsx("input",{className:"input",type:"number",step:"0.01",min:"0",value:w.amount||o.amount,onChange:E=>T("amount",parseFloat(E.target.value)||0),required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tiền tệ"}),t.jsxs("select",{className:"select",value:w.currency||o.currency,onChange:E=>T("currency",E.target.value),children:[t.jsx("option",{value:"VND",children:"VND (₫)"}),t.jsx("option",{value:"USD",children:"USD ($)"}),t.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),(w.type||o.type)==="TRANSFER"?t.jsxs("div",{className:"transfer-fields",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản nguồn *"}),t.jsxs("select",{className:"select",value:w.fromAccountId||o.fromAccountId||"",onChange:E=>T("fromAccountId",E.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản nguồn"}),n.map(E=>t.jsxs("option",{value:E.id,children:[E.name," (",E.type,")"]},E.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản đích *"}),t.jsxs("select",{className:"select",value:w.toAccountId||o.toAccountId||"",onChange:E=>T("toAccountId",E.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản đích"}),n.filter(E=>E.id!==(w.fromAccountId||o.fromAccountId)).map(E=>t.jsxs("option",{value:E.id,children:[E.name," (",E.type,")"]},E.id))]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản *"}),t.jsx("select",{className:"select",value:w.accountId||o.accountId,onChange:E=>T("accountId",E.target.value),required:!0,children:n.map(E=>t.jsxs("option",{value:E.id,children:[E.name," (",E.type,")"]},E.id))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Danh mục"}),t.jsxs("select",{className:"select",value:w.categoryId||o.categoryId||"",onChange:E=>T("categoryId",E.target.value||void 0),children:[t.jsx("option",{value:"",children:"Không có"}),i.map(E=>t.jsx("option",{value:E.id,children:E.name},E.id))]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ngày giao dịch"}),t.jsx("input",{className:"input",type:"date",value:w.occurredAt||o.occurredAt.split("T")[0],onChange:E=>T("occurredAt",E.target.value)})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ghi chú"}),t.jsx(Fe,{value:w.note||o.note||"",onChange:E=>T("note",E.target.value||void 0),rows:3})]}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{className:"cancel-button",type:"button",onClick:()=>e("transactions"),disabled:d||g,children:"Hủy"}),t.jsx("button",{className:`submit-button ${d?"submit-button--loading":""}`,type:"submit",disabled:d||g,children:d?"Đang lưu...":"Lưu thay đổi"})]}),t.jsxs("button",{className:"delete-button",type:"button",onClick:S,disabled:d||g,children:[t.jsx(X,{icon:g?"Loading":"Delete",size:18,color:"currentColor"}),t.jsx("span",{children:g?"Đang xóa...":"Xóa giao dịch"})]})]})]}):t.jsxs(Fo,{className:"edit-transaction-wrapper",children:[t.jsx("h1",{className:"title",children:"Sửa giao dịch"}),t.jsx("div",{className:"error-message",children:"Không tìm thấy giao dịch"}),t.jsx("button",{className:"cancel-button",onClick:()=>e("transactions"),style:{marginTop:"16px"},children:"Quay lại"})]})},Fo=le.div`
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

      .input {
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

      .select {
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        color: ${({theme:e})=>e.colors.text.primary};
        cursor: pointer;

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

      .form-group {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[2]};

        .label {
          font-size: ${({theme:e})=>e.typography.fontSize.sm};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
          color: ${({theme:e})=>e.colors.text.primary};
        }

        .select {
          padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
          background: ${({theme:e})=>e.colors.background};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.md};
          font-size: ${({theme:e})=>e.typography.fontSize.base};
          color: ${({theme:e})=>e.colors.text.primary};
          cursor: pointer;

          &:focus {
            outline: none;
            border-color: ${({theme:e})=>e.colors.primary};
            box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
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
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        background: ${({theme:e})=>e.colors.primary};
        color: white;
        border: none;
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        cursor: pointer;
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
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
`,Tm=()=>{const[e,o]=s.useState([]),[r,n]=s.useState(!0),[a,i]=s.useState(null),[c,l]=s.useState(!1),[u,d]=s.useState(null),[p,g]=s.useState(!1),[y,b]=s.useState({name:"",type:"CASH",currency:"VND",openingBalance:0,note:""});s.useEffect(()=>{k()},[]);const k=async()=>{n(!0),i(null);try{const S=await H.accounts.getAll();o(S)}catch(S){i(ne(S))}finally{n(!1)}},f=S=>{S?(d(S),b({name:S.name,type:S.type,currency:S.currency,openingBalance:S.openingBalance,note:S.note||""})):(d(null),b({name:"",type:"CASH",currency:"VND",openingBalance:0,note:""})),l(!0)},x=()=>{l(!1),d(null),b({name:"",type:"CASH",currency:"VND",openingBalance:0,note:""})},w=async S=>{S.preventDefault(),i(null),g(!0);try{u?await H.accounts.update(u.id,y):await H.accounts.create(y),await k(),x()}catch(T){i(ne(T))}finally{g(!1)}},h=async S=>{if(window.confirm(`Bạn có chắc muốn xóa tài khoản "${S.name}"?`))try{await H.accounts.delete(S.id),await k()}catch(T){i(ne(T))}},m=(S,T="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:T}).format(S),C=S=>({CASH:"Tiền mặt",BANK:"Ngân hàng",E_WALLET:"Ví điện tử",OTHER:"Khác"})[S]||S;return r?t.jsxs(gn,{className:"accounts-wrapper",children:[t.jsx("h1",{className:"title",children:"Tài khoản"}),t.jsxs("div",{className:"loading-state",children:[t.jsx(me,{className:"h-8 w-48 mb-4"}),t.jsx(me,{className:"h-32 w-full"})]})]}):t.jsxs(gn,{className:"accounts-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Tài khoản"}),t.jsxs(U,{onClick:()=>f(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài khoản"})]})]}),a&&t.jsx(Je,{variant:"destructive",children:t.jsx(et,{children:a})}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có tài khoản nào"}),t.jsx(U,{onClick:()=>f(),className:"gap-2",style:{marginTop:"16px"},children:"Thêm tài khoản đầu tiên"})]}):t.jsx("div",{className:"accounts-grid",children:e.map(S=>t.jsxs(de,{className:"account-card",onClick:()=>f(S),children:[t.jsxs("div",{className:"account-header",children:[t.jsx("h3",{className:"account-name",children:S.name}),t.jsx("span",{className:"account-type",children:C(S.type)})]}),t.jsx("div",{className:"account-balance",children:m(S.currentBalance??S.openingBalance??0,S.currency)}),t.jsxs("div",{className:"account-details",children:[t.jsxs("div",{children:["Tiền tệ: ",S.currency]}),S.note&&t.jsx("div",{children:S.note})]}),t.jsxs("div",{className:"account-actions",onClick:T=>T.stopPropagation(),children:[t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>f(S),title:"Sửa",children:t.jsx(X,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>h(S),title:"Xóa",children:t.jsx(X,{icon:"Delete",size:16,color:"currentColor"})})]})]},S.id))}),t.jsx(Nt,{open:c,onOpenChange:S=>!S&&x(),children:t.jsxs(it,{className:"modal-content",children:[t.jsxs(lt,{children:[t.jsx(dt,{className:"modal-title",children:u?"Sửa tài khoản":"Thêm tài khoản"}),t.jsx(ut,{children:u?"Cập nhật thông tin tài khoản của bạn":"Thêm tài khoản mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:w,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Tên tài khoản *"}),t.jsx(ee,{className:"input",type:"text",value:y.name,onChange:S=>b({...y,name:S.target.value}),placeholder:"Ví dụ: Ví tiền mặt, Tài khoản ngân hàng...",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Loại *"}),t.jsxs(be,{value:y.type,onValueChange:S=>b({...y,type:S}),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"CASH",children:"Tiền mặt"}),t.jsx(Q,{value:"BANK",children:"Ngân hàng"}),t.jsx(Q,{value:"E_WALLET",children:"Ví điện tử"}),t.jsx(Q,{value:"OTHER",children:"Khác"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Tiền tệ *"}),t.jsxs(be,{value:y.currency,onValueChange:S=>b({...y,currency:S}),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"VND",children:"VND (₫)"}),t.jsx(Q,{value:"USD",children:"USD ($)"}),t.jsx(Q,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Số dư ban đầu"}),t.jsx(ee,{className:"input",type:"number",step:"0.01",value:y.openingBalance,onChange:S=>b({...y,openingBalance:parseFloat(S.target.value)||0})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Ghi chú"}),t.jsx(Fe,{value:y.note||"",onChange:S=>b({...y,note:S.target.value}),placeholder:"Thêm ghi chú cho tài khoản này...",rows:3})]}),t.jsxs(ct,{className:"button-group",children:[t.jsx(U,{variant:"outline",type:"button",onClick:x,disabled:p,className:"cancel-button",children:"Hủy"}),t.jsx(U,{type:"submit",disabled:p,className:`submit-button ${p?"submit-button--loading":""}`,children:p?"Đang lưu...":u?"Lưu thay đổi":"Tạo tài khoản"})]})]})]})})]})},gn=le.div`
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
  }

  .error-message {
    padding: ${({theme:e})=>e.spacing[3]};
    background: ${({theme:e})=>e.colors.error}20;
    border: 1px solid ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    color: ${({theme:e})=>e.colors.error};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  .accounts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({theme:e})=>e.spacing[4]};

    .account-card {
      padding: ${({theme:e})=>e.spacing[6]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
      box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)":"0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)"};
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
        background: linear-gradient(90deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.primary}80);
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

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        padding: ${({theme:e})=>e.spacing[8]};
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
        }
      }

      .account-balance {
        font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
        font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin-bottom: ${({theme:e})=>e.spacing[2]};
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
          padding: ${({theme:e})=>e.spacing[2]};
          background: ${({theme:e})=>e.colors.surface};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.lg};
          color: ${({theme:e})=>e.colors.text.secondary};
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            border-color: ${({theme:e})=>e.colors.primary};
            color: ${({theme:e})=>e.colors.primary};
            background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.15)":"rgba(14, 165, 233, 0.1)"};
            transform: translateY(-1px);
          }

          &:active {
            transform: translateY(0);
          }
        }
      }
    }
  }

  .modal {
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

    &--open {
      display: flex;
      opacity: 1;
    }

    .modal-content {
      background: ${({theme:e})=>e.colors.surface};
      border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
      padding: ${({theme:e})=>e.spacing[6]};
      max-width: 500px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 20px 60px rgba(0, 0, 0, 0.5)":"0 20px 60px rgba(0, 0, 0, 0.3)"};
      ${ar}

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        padding: ${({theme:e})=>e.spacing[8]};
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${({theme:e})=>e.spacing[6]};

        .modal-title {
          font-size: ${({theme:e})=>e.typography.fontSize.xl};
          font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
          color: ${({theme:e})=>e.colors.text.primary};
          margin: 0;
        }

        .close-button {
          padding: ${({theme:e})=>e.spacing[2]};
          background: transparent;
          border: none;
          color: ${({theme:e})=>e.colors.text.secondary};
          cursor: pointer;
          font-size: 24px;
          line-height: 1;

          &:hover {
            color: ${({theme:e})=>e.colors.text.primary};
          }
        }
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
            font-size: ${({theme:e})=>e.typography.fontSize.sm};
            font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
            color: ${({theme:e})=>e.colors.text.primary};
          }

          .input {
            padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
            background: ${({theme:e})=>e.colors.background};
            border: 1px solid ${({theme:e})=>e.colors.border};
            border-radius: ${({theme:e})=>e.borderRadius.lg};
            font-size: ${({theme:e})=>e.typography.fontSize.base};
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
            padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
            background: ${({theme:e})=>e.colors.background};
            border: 1px solid ${({theme:e})=>e.colors.border};
            border-radius: ${({theme:e})=>e.borderRadius.lg};
            font-size: ${({theme:e})=>e.typography.fontSize.base};
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

        .button-group {
          display: flex;
          gap: ${({theme:e})=>e.spacing[4]};
          margin-top: ${({theme:e})=>e.spacing[6]} !important;

          .submit-button {
            flex: 1;
            padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
            background: ${({theme:e})=>e.colors.primary};
            color: white;
            border: none;
            border-radius: ${({theme:e})=>e.borderRadius.lg};
            font-size: ${({theme:e})=>e.typography.fontSize.base};
            font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
            cursor: pointer;
            opacity: 1;
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
            padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
            background: ${({theme:e})=>e.colors.surface};
            color: ${({theme:e})=>e.colors.text.primary};
            border: 1px solid ${({theme:e})=>e.colors.border};
            border-radius: ${({theme:e})=>e.borderRadius.lg};
            font-size: ${({theme:e})=>e.typography.fontSize.base};
            font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

            &:hover {
              border-color: ${({theme:e})=>e.colors.text.secondary};
              background: ${({theme:e})=>e.colors.hover};
              transform: translateY(-1px);
            }

            &:active {
              transform: translateY(0);
            }
          }
        }
      }
    }
  }
`,Am=()=>{const{t:e}=Pe(),o=go(),r=Ae(C=>C.categories.items),n=Ae(C=>C.categories.isLoading),a=Ae(C=>C.categories.error),i=Ae(C=>C.categories.lastFetched),[c,l]=s.useState(null),[u,d]=s.useState(!1),[p,g]=s.useState(null),[y,b]=s.useState(!1),[k,f]=s.useState({name:"",icon:"Categories",color:"#0ea5e9"});s.useEffect(()=>{const C=Date.now()-3e5;(!i||i<C)&&o(vn())},[o,i]),s.useEffect(()=>{a&&l(a)},[a]);const x=C=>{C?(g(C),f({name:C.name,icon:C.icon||"📁",color:C.color||"#0ea5e9"})):(g(null),f({name:"",icon:"📁",color:"#0ea5e9"})),d(!0)},w=()=>{d(!1),g(null),f({name:"",icon:"📁",color:"#0ea5e9"})},h=async C=>{C.preventDefault(),l(null),b(!0);try{if(p){const S=await H.categories.update(p.id,k);o(ui(S))}else{const S=await H.categories.create(k);o(pi(S))}w()}catch(S){l(ne(S))}finally{b(!1)}},m=s.useCallback(async C=>{if(C.isSystem){alert(e("wallet.categories.cannotDeleteSystem")||"Không thể xóa danh mục hệ thống");return}if(window.confirm(e("wallet.categories.confirmDelete",{name:C.name})||`Bạn có chắc muốn xóa danh mục "${C.name}"?`))try{await H.categories.delete(C.id),o(di(C.id))}catch(S){l(ne(S))}},[o,e]);return t.jsxs(Rm,{className:"categories-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:e("wallet.categories.title")}),t.jsxs(U,{onClick:()=>x(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.categories.add")})]})]}),c&&t.jsx(Je,{variant:"destructive",children:t.jsx(et,{children:c})}),n&&r.length===0?t.jsx("div",{className:"loading-state",children:t.jsx("div",{className:"skeleton-grid",children:[...Array(8)].map((C,S)=>t.jsxs(de,{className:"skeleton-card",children:[t.jsx(me,{className:"h-16 w-16 rounded-full mb-4"}),t.jsx(me,{className:"h-4 w-24"})]},S))})}):r.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("div",{className:"empty-icon",children:t.jsx(X,{icon:"Categories",size:48,color:"currentColor"})}),t.jsx("p",{children:e("wallet.categories.noCategories")}),t.jsxs(U,{onClick:()=>x(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.categories.addFirst")||"Thêm danh mục đầu tiên"})]})]}):t.jsx("div",{className:"categories-grid",children:r.map(C=>t.jsxs(de,{className:"category-card",onClick:()=>!C.isSystem&&x(C),children:[C.isSystem&&t.jsx(xe,{variant:"secondary",className:"system-badge",children:e("wallet.categories.system")||"Hệ thống"}),t.jsx("div",{className:"category-icon-wrapper",style:{"--category-color":C.color||"#0ea5e9"},children:C.icon?(()=>{const S=Ml(C.icon);return S?t.jsx(S,{size:40,color:C.color||"#0ea5e9",strokeWidth:2}):t.jsx("span",{className:"category-icon-emoji",children:C.icon})})():t.jsx(X,{icon:"Categories",size:40,color:C.color||"#0ea5e9"})}),t.jsx("div",{className:"category-name",children:C.name}),!C.isSystem&&t.jsxs("div",{className:"category-actions",onClick:S=>S.stopPropagation(),children:[t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>x(C),title:e("wallet.common.edit"),children:t.jsx(X,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button icon-button--danger",onClick:()=>m(C),title:e("wallet.common.delete"),children:t.jsx(X,{icon:"Delete",size:16,color:"currentColor"})})]})]},C.id))}),t.jsx(Nt,{open:u,onOpenChange:C=>!C&&w(),children:t.jsxs(it,{className:"modal-content",children:[t.jsxs(lt,{children:[t.jsx(dt,{className:"modal-title",children:e(p?"wallet.categories.edit":"wallet.categories.add")}),t.jsx(ut,{children:p?"Cập nhật thông tin danh mục":"Thêm danh mục mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:h,children:[t.jsxs("div",{className:"form-group",children:[t.jsxs(G,{className:"label",children:[e("wallet.categories.name")||"Tên danh mục"," *"]}),t.jsx(ee,{className:"input",type:"text",value:k.name,onChange:C=>f({...k,name:C.target.value}),placeholder:e("wallet.categories.namePlaceholder")||"Ví dụ: Ăn uống, Mua sắm...",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:e("wallet.categories.icon")||"Icon"}),t.jsx(ee,{className:"input",type:"text",value:k.icon,onChange:C=>f({...k,icon:C.target.value}),placeholder:"Categories"}),t.jsx("div",{className:"form-hint",children:e("wallet.categories.iconHint")||"Nhập tên icon từ Lucide (ví dụ: Utensils, Car, ShoppingBag)"})]}),t.jsxs(ct,{className:"button-group",children:[t.jsx(U,{variant:"outline",type:"button",onClick:w,disabled:y,className:"cancel-button",children:e("wallet.common.cancel")}),t.jsx(U,{type:"submit",disabled:y,className:`submit-button ${y?"submit-button--loading":""}`,children:y?e("wallet.common.saving")||"Đang lưu...":p?e("wallet.common.save"):e("wallet.categories.create")||"Tạo danh mục"})]})]})]})})]})},Rm=le.div`
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
      font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
      font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      line-height: ${({theme:e})=>e.typography.lineHeight.tight};
      color: ${({theme:e})=>e.colors.text.primary};
      margin: 0;
      letter-spacing: -0.02em;

      @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
        font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
      }
    }

    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
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

      &:hover {
        background: ${({theme:e})=>e.colors.primary[600]||"#0284c7"};
        transform: translateY(-2px);
        box-shadow: 0 4px 16px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.4)":"rgba(14, 165, 233, 0.35)"};
      }

      &:active {
        transform: translateY(0);
      }
    }
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

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
    font-size: ${({theme:e})=>e.typography.fontSize.base};
    font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    color: ${({theme:e})=>e.colors.text.secondary};

    .skeleton-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: ${({theme:e})=>e.spacing[4]};

      .skeleton-card {
        padding: ${({theme:e})=>e.spacing[6]};
        background: ${({theme:e})=>e.colors.surface};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({theme:e})=>e.spacing[3]};
        min-height: 180px;

        .skeleton-icon {
          width: 64px;
          height: 64px;
          border-radius: ${({theme:e})=>e.borderRadius.lg};
          background: linear-gradient(
            90deg,
            ${({theme:e})=>e.colors.border} 0%,
            ${({theme:e})=>e.colors.background} 50%,
            ${({theme:e})=>e.colors.border} 100%
          );
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
        }

        .skeleton-name {
          width: 80px;
          height: 16px;
          border-radius: ${({theme:e})=>e.borderRadius.md};
          background: linear-gradient(
            90deg,
            ${({theme:e})=>e.colors.border} 0%,
            ${({theme:e})=>e.colors.background} 50%,
            ${({theme:e})=>e.colors.border} 100%
          );
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
        }
      }
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[12]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};

    .empty-icon {
      color: ${({theme:e})=>e.colors.text.secondary};
      opacity: 0.5;
      margin-bottom: ${({theme:e})=>e.spacing[2]};
    }

    p {
      font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
      font-size: ${({theme:e})=>e.typography.fontSize.lg};
      font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
      line-height: ${({theme:e})=>e.typography.lineHeight.normal};
      color: ${({theme:e})=>e.colors.text.secondary};
      margin: 0;
    }

    .action-button {
      display: inline-flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
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

      &:hover {
        background: ${({theme:e})=>e.colors.primary[600]||"#0284c7"};
        transform: translateY(-2px);
        box-shadow: 0 4px 16px ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.4)":"rgba(14, 165, 233, 0.35)"};
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: ${({theme:e})=>e.spacing[4]};

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }

    .category-card {
      padding: ${({theme:e})=>e.spacing[6]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
      box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 2px 8px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)":"0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)"};
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      min-height: 180px;
      cursor: pointer;

      &:hover {
        border-color: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.3)":"rgba(14, 165, 233, 0.2)"};
        box-shadow: ${({theme:e})=>e.colors.background==="#0a0a0a"?"0 4px 16px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.3)":"0 4px 16px rgba(0, 0, 0, 0.1), 0 12px 32px rgba(0, 0, 0, 0.08)"};
        transform: translateY(-4px);

        .category-actions {
          opacity: 1;
        }
      }

      .system-badge {
        position: absolute;
        top: ${({theme:e})=>e.spacing[3]};
        right: ${({theme:e})=>e.spacing[3]};
        padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(115, 115, 115, 0.3)":"rgba(115, 115, 115, 0.15)"};
        color: ${({theme:e})=>e.colors.text.secondary};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
        font-size: ${({theme:e})=>e.typography.fontSize.xs};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        line-height: ${({theme:e})=>e.typography.lineHeight.normal};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        z-index: 1;
      }

      .category-icon-wrapper {
        width: 80px;
        height: 80px;
        border-radius: ${({theme:e})=>e.borderRadius.xl||e.borderRadius["2xl"]};
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.15)":"rgba(14, 165, 233, 0.1)"};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: ${({theme:e})=>e.spacing[4]};
        transition: all 0.2s ease;

        .category-icon-emoji {
          font-size: 40px;
          line-height: 1;
        }
      }

      &:hover .category-icon-wrapper {
        background: ${({theme:e})=>e.colors.background==="#0a0a0a"?"rgba(14, 165, 233, 0.25)":"rgba(14, 165, 233, 0.15)"};
        transform: scale(1.05);
      }

      .category-name {
        font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        line-height: ${({theme:e})=>e.typography.lineHeight.normal};
        color: ${({theme:e})=>e.colors.text.primary};
        margin-bottom: ${({theme:e})=>e.spacing[3]};
        word-break: break-word;
        flex: 1;
      }

      .category-actions {
        display: flex;
        gap: ${({theme:e})=>e.spacing[1]};
        margin-top: auto;
        opacity: 0;
        transition: opacity 0.2s ease;

        .icon-button {
          padding: ${({theme:e})=>e.spacing[2]};
          background: ${({theme:e})=>e.colors.surface};
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.lg};
          color: ${({theme:e})=>e.colors.text.secondary};
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;

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

          &:active {
            transform: translateY(0);
          }
        }
      }
    }
  }

  .modal {
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

    &--open {
      display: flex;
      opacity: 1;
    }

    .modal-content {
      background: ${({theme:e})=>e.colors.surface};
      border-radius: ${({theme:e})=>e.borderRadius["2xl"]};
      padding: ${({theme:e})=>e.spacing[6]};
      max-width: 400px;
      width: 100%;
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

            &::placeholder {
              color: ${({theme:e})=>e.colors.text.secondary};
              opacity: 0.5;
            }
          }

          .form-hint {
            font-family: ${({theme:e})=>e.typography.fontFamily.sans.join(", ")};
            font-size: ${({theme:e})=>e.typography.fontSize.xs};
            font-weight: ${({theme:e})=>e.typography.fontWeight.normal};
            line-height: ${({theme:e})=>e.typography.lineHeight.normal};
            color: ${({theme:e})=>e.colors.text.secondary};
            margin-top: ${({theme:e})=>e.spacing[1]};
            opacity: 0.7;
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
            opacity: 1;
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

            &:hover {
              border-color: ${({theme:e})=>e.colors.text.secondary};
              background: ${({theme:e})=>e.colors.hover};
              transform: translateY(-1px);
            }

            &:active {
              transform: translateY(0);
            }
          }
        }
      }
    }
  }
`,Im=()=>{const[e,o]=s.useState([]),[r,n]=s.useState(!0),[a,i]=s.useState(null);s.useEffect(()=>{c()},[]);const c=async()=>{n(!0),i(null);try{const d=await H.budgets.getAll();o(d)}catch(d){i(ne(d))}finally{n(!1)}},l=(d,p="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:p}).format(d),u=d=>{if(!d)return"";let p="";if(typeof d=="string")p=d;else if(typeof d=="object"&&d.year&&d.month)p=`${d.year}-${String(d.month).padStart(2,"0")}`;else return"";const[g,y]=p.split("-");return new Date(parseInt(g),parseInt(y)-1).toLocaleDateString("vi-VN",{month:"long",year:"numeric"})};return r?t.jsxs(mn,{className:"budgets-wrapper",children:[t.jsx("h1",{className:"title",children:"Ngân sách"}),t.jsxs("div",{className:"loading-state",children:[t.jsx(me,{className:"h-8 w-48 mb-4"}),t.jsx(me,{className:"h-32 w-full"})]})]}):t.jsxs(mn,{className:"budgets-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Ngân sách"}),t.jsxs(U,{onClick:()=>{alert("Tính năng thêm ngân sách sẽ được implement")},className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm ngân sách"})]})]}),a&&t.jsx(Je,{variant:"destructive",children:t.jsx(et,{children:a})}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có ngân sách nào"}),t.jsx(U,{onClick:()=>{alert("Tính năng thêm ngân sách sẽ được implement")},className:"gap-2",style:{marginTop:"16px"},children:"Thêm ngân sách đầu tiên"})]}):t.jsx("div",{className:"budgets-list",children:e.map(d=>{const p=(d.percentageUsed??0)||0,g=(d.amount??0)||0,y=(d.usedAmount??0)||0,b=(d.remainingAmount??0)||0,k=d.month;return t.jsxs(de,{className:"budget-card",children:[t.jsxs("div",{className:"budget-header",children:[t.jsx("h3",{className:"budget-month",children:u(k)}),t.jsxs("div",{className:"budget-amount",children:[l(y)," / ",l(g)]})]}),t.jsx("div",{className:"progress-bar",children:t.jsx("div",{className:"progress-fill",style:{width:`${Math.max(0,Math.min(p,100))}%`,background:p>=100?"#ef4444":p>=80?"#f59e0b":void 0}})}),t.jsxs("div",{className:"budget-stats",children:[t.jsxs("span",{children:["Đã dùng: ",isNaN(p)?"0.0":p.toFixed(1),"%"]}),t.jsxs("span",{children:["Còn lại: ",l(b)]})]})]},d.id||(typeof k=="string"?k:""))})})]})},mn=le.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .title {
    font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0;
    letter-spacing: -0.02em;
    line-height: 1.2;

    @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
      font-size: ${({theme:e})=>e.typography.fontSize["4xl"]};
    }
  }

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
  }

  .error-message {
    padding: ${({theme:e})=>e.spacing[3]};
    background: ${({theme:e})=>e.colors.error}20;
    border: 1px solid ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    color: ${({theme:e})=>e.colors.error};
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};

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
  }

  .budgets-list {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};

    .budget-card {
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
        position: relative;

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
    }
  }
`,zm=()=>{const[e,o]=s.useState([]),[r,n]=s.useState(null),[a,i]=s.useState(!0),[c,l]=s.useState(null),[u,d]=s.useState(!1),[p,g]=s.useState(null),[y,b]=s.useState(!1),[k,f]=s.useState(0),[x,w]=s.useState([]),[h,m]=s.useState([]),[C,S]=s.useState(!1),[T,E]=s.useState(!1),[$,A]=s.useState({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""}),[L,O]=s.useState({amount:0,accountId:"",occurredAt:new Date().toISOString().split("T")[0],note:""}),N=s.useCallback(async(j=0)=>{i(!0),l(null);try{const M=await H.receivables.getAll(j,10);o(M.content),n(M)}catch(M){l(ne(M))}finally{i(!1)}},[]),D=s.useCallback(async()=>{try{const j=await H.accounts.getAll();w(j),j.length>0&&O(M=>({...M,accountId:M.accountId||j[0].id}))}catch(j){console.error("Load accounts error:",j)}},[]),P=s.useCallback(async j=>{S(!0);try{const M=await H.settlements.getByReceivableId(j);m(M)}catch(M){console.error("Load settlements error:",M),l(ne(M))}finally{S(!1)}},[l]);s.useEffect(()=>{N(k)},[k,N]),s.useEffect(()=>{D()},[D]);const _=j=>{var M,ce;j?(g(j),A({counterpartyName:j.counterpartyName,amount:j.amount,currency:j.currency,occurredAt:j.occurredAt.split("T")[0],dueAt:j.dueAt?j.dueAt.split("T")[0]:"",note:j.note||""}),O({amount:0,accountId:L.accountId||((M=x[0])==null?void 0:M.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""}),P(j.id)):(g(null),A({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""}),m([]),O({amount:0,accountId:((ce=x[0])==null?void 0:ce.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""})),d(!0)},F=()=>{var j;d(!1),g(null),A({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""}),m([]),O({amount:0,accountId:((j=x[0])==null?void 0:j.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""})},K=async()=>{if(p){if(L.amount<=0){l("Số tiền nhận phải lớn hơn 0");return}if(!L.accountId){l("Vui lòng chọn tài khoản nhận tiền");return}l(null),E(!0);try{const j=L.occurredAt?new Date(L.occurredAt).toISOString():new Date().toISOString();await H.transactions.create({type:"RECEIVABLE_SETTLEMENT",amount:L.amount,currency:p.currency,accountId:L.accountId,receivableId:p.id,occurredAt:j,note:L.note||void 0}),await Promise.all([N(k),P(p.id)]),O(M=>({...M,amount:0,note:""}))}catch(j){l(ne(j))}finally{E(!1)}}},I=async j=>{j.preventDefault(),l(null),b(!0);try{if(p){const M={counterpartyName:$.counterpartyName,amount:$.amount,currency:$.currency,occurredAt:$.occurredAt?new Date($.occurredAt).toISOString():void 0,dueAt:$.dueAt?new Date($.dueAt).toISOString():void 0,note:$.note||void 0};await H.receivables.update(p.id,M)}else{const M={counterpartyName:$.counterpartyName,amount:$.amount,currency:$.currency,occurredAt:$.occurredAt?new Date($.occurredAt).toISOString():void 0,dueAt:$.dueAt?new Date($.dueAt).toISOString():void 0,note:$.note||void 0};await H.receivables.create(M)}await N(k),F()}catch(M){l(ne(M))}finally{b(!1)}},Z=async j=>{if(window.confirm(`Bạn có chắc muốn xóa khoản cho vay "${j.counterpartyName}"?`))try{await H.receivables.delete(j.id),await N(k)}catch(M){l(ne(M))}},J=(j,M="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:M}).format(j),ue=j=>new Date(j).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"}),ge=j=>({OPEN:"Mở",PARTIALLY_PAID:"Đã trả một phần",PAID:"Đã trả đủ",OVERDUE:"Quá hạn"})[j]||j;return a&&e.length===0?t.jsxs(fn,{className:"receivables-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Cho vay"}),t.jsxs(U,{onClick:()=>_(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản cho vay"})]})]}),t.jsxs("div",{className:"loading-state",children:[t.jsx(me,{className:"h-8 w-48 mb-4"}),t.jsx(me,{className:"h-32 w-full"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(fn,{className:"receivables-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Cho vay"}),t.jsxs(U,{onClick:()=>_(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản cho vay"})]})]}),c&&t.jsx(Je,{variant:"destructive",children:t.jsx(et,{children:c})}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có khoản cho vay nào"}),t.jsxs(U,{onClick:()=>_(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản cho vay đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"receivables-grid",children:e.map(j=>t.jsxs(de,{className:`receivable-card ${j.isOverdue?"receivable-card--overdue":""}`,onClick:()=>_(j),children:[t.jsxs("div",{className:"receivable-header",children:[t.jsx("h3",{className:"receivable-name",children:j.counterpartyName}),t.jsx(xe,{variant:j.status==="PAID"?"default":j.isOverdue?"destructive":"secondary",className:`status-badge status-badge--${j.status.toLowerCase()}`,children:ge(j.status)})]}),t.jsxs("div",{className:"receivable-details",children:[t.jsxs("div",{children:["Số tiền: ",J(j.amount,j.currency)]}),t.jsxs("div",{children:["Đã trả: ",J(j.paidAmount??0,j.currency)]}),t.jsxs("div",{children:["Còn lại: ",J(j.remainingAmount??0,j.currency)]}),j.dueAt&&t.jsxs("div",{children:["Hạn thanh toán: ",ue(j.dueAt)]}),j.note&&t.jsxs("div",{children:["Ghi chú: ",j.note]})]}),t.jsx("div",{className:"receivable-amount",children:J(j.remainingAmount??0,j.currency)}),t.jsxs("div",{className:"receivable-actions",onClick:M=>M.stopPropagation(),children:[t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>_(j),title:"Sửa",children:t.jsx(X,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>Z(j),title:"Xóa",children:t.jsx(X,{icon:"Delete",size:16,color:"currentColor"})})]})]},j.id))}),r&&r.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsx(U,{variant:"outline",className:`pagination-button ${r.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>f(r.page-1),disabled:!r.hasPrevious,children:"← Trước"}),t.jsxs("span",{children:["Trang ",r.page+1," / ",r.totalPages]}),t.jsx(U,{variant:"outline",className:`pagination-button ${r.hasNext?"":"pagination-button--disabled"}`,onClick:()=>f(r.page+1),disabled:!r.hasNext,children:"Sau →"})]})]})]}),t.jsx(Nt,{open:u,onOpenChange:j=>!j&&F(),children:t.jsxs(Dm,{className:"modal-content",children:[t.jsxs(lt,{children:[t.jsx(dt,{className:"modal-title",children:p?"Sửa khoản cho vay":"Thêm khoản cho vay"}),t.jsx(ut,{children:p?"Cập nhật thông tin khoản cho vay":"Thêm khoản cho vay mới vào danh sách"})]}),p&&t.jsxs("div",{className:"settlement-section",children:[t.jsxs("div",{className:"settlement-header",children:[t.jsx("h3",{className:"settlement-title",children:"Lịch sử nhận tiền"}),t.jsx("p",{className:"settlement-subtitle",children:"Xem các lần người vay đã trả tiền cho khoản cho vay này."})]}),t.jsx("div",{className:"settlement-history",children:C?t.jsx("div",{className:"settlement-loading",children:"Đang tải lịch sử thanh toán..."}):h.length===0?t.jsx("div",{className:"settlement-empty",children:"Chưa có lần thanh toán nào."}):t.jsx("div",{className:"settlement-list",children:h.map(j=>t.jsxs("div",{className:"settlement-item",children:[t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Số tiền"}),t.jsx("span",{className:"settlement-value",children:J(j.amount,j.currency)})]}),t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Ngày"}),t.jsx("span",{className:"settlement-value",children:ue(j.occurredAt)})]}),j.note&&t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Ghi chú"}),t.jsx("span",{className:"settlement-value",children:j.note})]})]},j.id))})}),t.jsxs("div",{className:"settlement-form",children:[t.jsx("h4",{className:"settlement-form-title",children:"Nhận tiền một phần"}),t.jsxs("div",{className:"settlement-form-grid",children:[t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(G,{className:"label",children:"Số tiền *"}),t.jsx(ee,{className:"input",type:"number",step:"0.01",min:"0",value:L.amount||"",onChange:j=>O({...L,amount:parseFloat(j.target.value)||0}),placeholder:"0"})]}),t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(G,{className:"label",children:"Tài khoản nhận *"}),t.jsxs(be,{value:L.accountId,onValueChange:j=>O({...L,accountId:j}),children:[t.jsx(he,{className:"select settlement-account-select",children:t.jsx(ve,{placeholder:"Chọn tài khoản"})}),t.jsx(ye,{children:x.map(j=>t.jsx(Q,{value:j.id,children:j.name},j.id))})]})]}),t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(G,{className:"label",children:"Ngày nhận"}),t.jsx(ee,{className:"input",type:"date",value:L.occurredAt,onChange:j=>O({...L,occurredAt:j.target.value})})]})]}),t.jsxs("div",{className:"settlement-form-note",children:[t.jsx(G,{className:"label",children:"Ghi chú"}),t.jsx(Fe,{value:L.note,onChange:j=>O({...L,note:j.target.value}),placeholder:"Ví dụ: Trả lần 1, chuyển khoản...",rows:2})]}),t.jsx("div",{className:"settlement-form-actions",children:t.jsx(U,{type:"button",className:"settlement-submit-button",disabled:T,onClick:K,children:T?"Đang ghi nhận...":"Ghi nhận lần trả này"})})]})]}),t.jsxs("form",{className:"form",onSubmit:I,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Tên người vay *"}),t.jsx(ee,{className:"input",type:"text",value:$.counterpartyName,onChange:j=>A({...$,counterpartyName:j.target.value}),placeholder:"Nhập tên người vay",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Số tiền *"}),t.jsx(ee,{className:"input",type:"number",step:"0.01",min:"0",value:$.amount||"",onChange:j=>A({...$,amount:parseFloat(j.target.value)||0}),placeholder:"0",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Tiền tệ"}),t.jsxs(be,{value:$.currency,onValueChange:j=>A({...$,currency:j}),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"VND",children:"VND (₫)"}),t.jsx(Q,{value:"USD",children:"USD ($)"}),t.jsx(Q,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Ngày cho vay"}),t.jsx(ee,{className:"input",type:"date",value:$.occurredAt||"",onChange:j=>A({...$,occurredAt:j.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Hạn thanh toán"}),t.jsx(ee,{className:"input",type:"date",value:$.dueAt||"",onChange:j=>A({...$,dueAt:j.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Ghi chú"}),t.jsx(Fe,{value:$.note||"",onChange:j=>A({...$,note:j.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),t.jsxs(ct,{className:"button-group",children:[t.jsx(U,{variant:"outline",type:"button",onClick:F,disabled:y,className:"cancel-button",children:"Hủy"}),t.jsx(U,{type:"submit",disabled:y,className:`submit-button ${y?"submit-button--loading":""}`,children:y?"Đang lưu...":p?"Lưu thay đổi":"Tạo khoản cho vay"})]})]})]})})]})},fn=le.div`
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
    }

    .action-button {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
      padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
      background: ${({theme:e})=>e.colors.primary};
      color: white;
      border: none;
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
      }
    }
  }

  .error-state {
    padding: ${({theme:e})=>e.spacing[4]};
    background: ${({theme:e})=>e.colors.error}20;
    border: 1px solid ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    color: ${({theme:e})=>e.colors.error};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};

    .action-button {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
      padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
      background: ${({theme:e})=>e.colors.primary};
      color: white;
      border: none;
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
      }
    }
  }

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  .receivables-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({theme:e})=>e.spacing[4]};

    .receivable-card {
      padding: ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      box-shadow: ${({theme:e})=>e.shadows.md};
      transition: all 0.2s ease;
      position: relative;
      cursor: pointer;

      &:hover {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: ${({theme:e})=>e.shadows.lg};
        transform: translateY(-2px);
      }

      &--overdue {
        border-color: ${({theme:e})=>e.colors.error};
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
          color: white;
          border-radius: ${({theme:e})=>e.borderRadius.sm};
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};

          &--paid {
            background: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
          }

          &--overdue {
            background: ${({theme:e})=>e.colors.error||"#ef4444"};
          }

          &--partially_paid {
            background: ${({theme:e})=>{var o;return((o=e.colors.warning)==null?void 0:o[500])||"#f59e0b"}};
          }

          &--open {
            background: ${({theme:e})=>e.colors.text.secondary};
          }
        }
      }

      .receivable-details {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[2]};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};
      }

      .receivable-amount {
        font-size: ${({theme:e})=>e.typography.fontSize.xl};
        font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin-top: ${({theme:e})=>e.spacing[2]};
      }

      .receivable-actions {
        display: flex;
        gap: ${({theme:e})=>e.spacing[2]};
        margin-top: ${({theme:e})=>e.spacing[3]};

        .icon-button {
          padding: ${({theme:e})=>e.spacing[2]};
          background: transparent;
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.md};
          color: ${({theme:e})=>e.colors.text.primary};
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            border-color: ${({theme:e})=>e.colors.primary};
            color: ${({theme:e})=>e.colors.primary};
          }
        }
      }
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[2]};
    margin-top: ${({theme:e})=>e.spacing[6]};

    .pagination-button {
      padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.primary};
      color: white;
      border: none;
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      cursor: pointer;
      opacity: 1;
      transition: all 0.2s ease;

      &:hover:not(:disabled) {
        opacity: 0.9;
      }

      &:disabled,
      &--disabled {
        background: ${({theme:e})=>e.colors.surface};
        color: ${({theme:e})=>e.colors.text.secondary};
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`,Dm=le(it)`
  .modal-title {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0;
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
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        color: ${({theme:e})=>e.colors.text.primary};
      }

      .input {
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        color: ${({theme:e})=>e.colors.text.primary};

        &:focus {
          outline: none;
          border-color: ${({theme:e})=>e.colors.primary};
          box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
        }
      }

      .select {
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        color: ${({theme:e})=>e.colors.text.primary};
        cursor: pointer;

        &:focus {
          outline: none;
          border-color: ${({theme:e})=>e.colors.primary};
          box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
        }
      }
    }

    .button-group {
      display: flex;
      gap: ${({theme:e})=>e.spacing[4]};
      margin-top: ${({theme:e})=>e.spacing[6]} !important;

      .submit-button {
        flex: 1;
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        background: ${({theme:e})=>e.colors.primary};
        color: white;
        border: none;
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        cursor: pointer;
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
        }

        &:disabled,
        &--loading {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }

      .cancel-button {
        flex: 1;
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
    }
  }

  .settlement-section {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    padding: ${({theme:e})=>e.spacing[4]};
    background: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};

    .settlement-header {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[1]};

      .settlement-title {
        font-size: ${({theme:e})=>e.typography.fontSize.lg};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin: 0;
      }

      .settlement-subtitle {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};
        margin: 0;
      }
    }

    .settlement-history {
      .settlement-loading,
      .settlement-empty {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};
      }

      .settlement-list {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[3]};

        .settlement-item {
          padding: ${({theme:e})=>e.spacing[3]};
          border-radius: ${({theme:e})=>e.borderRadius.md};
          background: ${({theme:e})=>e.colors.background};
          border: 1px solid ${({theme:e})=>e.colors.border};
          display: flex;
          flex-direction: column;
          gap: ${({theme:e})=>e.spacing[1]};

          .settlement-row {
            display: flex;
            justify-content: space-between;
            gap: ${({theme:e})=>e.spacing[2]};
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
      border-top: 1px dashed ${({theme:e})=>e.colors.border};
      padding-top: ${({theme:e})=>e.spacing[4]};
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[3]};

      .settlement-form-title {
        font-size: ${({theme:e})=>e.typography.fontSize.md};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin: 0;
      }

      .settlement-form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: ${({theme:e})=>e.spacing[3]};

        .settlement-form-field {
          display: flex;
          flex-direction: column;
          gap: ${({theme:e})=>e.spacing[1]};
        }
      }

      .settlement-form-note {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[1]};
      }

      .settlement-form-actions {
        display: flex;
        justify-content: flex-end;

        .settlement-submit-button {
          min-width: 180px;
        }
      }
    }
  }
`,Pm=()=>{const[e,o]=s.useState([]),[r,n]=s.useState(null),[a,i]=s.useState(!0),[c,l]=s.useState(null),[u,d]=s.useState(!1),[p,g]=s.useState(null),[y,b]=s.useState(!1),[k,f]=s.useState(0),[x,w]=s.useState([]),[h,m]=s.useState([]),[C,S]=s.useState(!1),[T,E]=s.useState(!1),[$,A]=s.useState({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""}),[L,O]=s.useState({amount:0,accountId:"",occurredAt:new Date().toISOString().split("T")[0],note:""}),N=s.useCallback(async(j=0)=>{i(!0),l(null);try{const M=await H.liabilities.getAll(j,10);o(M.content),n(M)}catch(M){l(ne(M))}finally{i(!1)}},[]),D=s.useCallback(async()=>{try{const j=await H.accounts.getAll();w(j),j.length>0&&O(M=>({...M,accountId:M.accountId||j[0].id}))}catch(j){console.error("Load accounts error:",j)}},[]),P=s.useCallback(async j=>{S(!0);try{const M=await H.settlements.getByLiabilityId(j);m(M)}catch(M){console.error("Load settlements error:",M),l(ne(M))}finally{S(!1)}},[l]);s.useEffect(()=>{N(k)},[k,N]),s.useEffect(()=>{D()},[D]);const _=j=>{var M,ce;j?(g(j),A({counterpartyName:j.counterpartyName,amount:j.amount,currency:j.currency,occurredAt:j.occurredAt.split("T")[0],dueAt:j.dueAt?j.dueAt.split("T")[0]:"",note:j.note||""}),O({amount:0,accountId:L.accountId||((M=x[0])==null?void 0:M.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""}),P(j.id)):(g(null),A({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""}),m([]),O({amount:0,accountId:((ce=x[0])==null?void 0:ce.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""})),d(!0)},F=()=>{var j;d(!1),g(null),A({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""}),m([]),O({amount:0,accountId:((j=x[0])==null?void 0:j.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""})},K=async()=>{if(p){if(L.amount<=0){l("Số tiền trả phải lớn hơn 0");return}if(!L.accountId){l("Vui lòng chọn tài khoản trả nợ");return}l(null),E(!0);try{const j=L.occurredAt?new Date(L.occurredAt).toISOString():new Date().toISOString();await H.transactions.create({type:"LIABILITY_SETTLEMENT",amount:L.amount,currency:p.currency,accountId:L.accountId,liabilityId:p.id,occurredAt:j,note:L.note||void 0}),await Promise.all([N(k),P(p.id)]),O(M=>({...M,amount:0,note:""}))}catch(j){l(ne(j))}finally{E(!1)}}},I=async j=>{j.preventDefault(),l(null),b(!0);try{if(p){const M={counterpartyName:$.counterpartyName,amount:$.amount,currency:$.currency,occurredAt:$.occurredAt?new Date($.occurredAt).toISOString():void 0,dueAt:$.dueAt?new Date($.dueAt).toISOString():void 0,note:$.note||void 0};await H.liabilities.update(p.id,M)}else{const M={counterpartyName:$.counterpartyName,amount:$.amount,currency:$.currency,occurredAt:$.occurredAt?new Date($.occurredAt).toISOString():void 0,dueAt:$.dueAt?new Date($.dueAt).toISOString():void 0,note:$.note||void 0};await H.liabilities.create(M)}await N(k),F()}catch(M){l(ne(M))}finally{b(!1)}},Z=async j=>{if(window.confirm(`Bạn có chắc muốn xóa khoản nợ "${j.counterpartyName}"?`))try{await H.liabilities.delete(j.id),await N(k)}catch(M){l(ne(M))}},J=(j,M="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:M}).format(j),ue=j=>new Date(j).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"}),ge=j=>({OPEN:"Mở",PARTIALLY_PAID:"Đã trả một phần",PAID:"Đã trả đủ",OVERDUE:"Quá hạn"})[j]||j;return a&&e.length===0?t.jsxs(hn,{className:"liabilities-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Nợ"}),t.jsxs(U,{onClick:()=>_(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản nợ"})]})]}),t.jsxs("div",{className:"loading-state",children:[t.jsx(me,{className:"h-8 w-48 mb-4"}),t.jsx(me,{className:"h-32 w-full"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(hn,{className:"liabilities-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Nợ"}),t.jsxs(U,{onClick:()=>_(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản nợ"})]})]}),c&&t.jsx(Je,{variant:"destructive",children:t.jsx(et,{children:c})}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có khoản nợ nào"}),t.jsxs(U,{onClick:()=>_(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản nợ đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"liabilities-grid",children:e.map(j=>t.jsxs(de,{className:`liability-card ${j.isOverdue?"liability-card--overdue":""}`,onClick:()=>_(j),children:[t.jsxs("div",{className:"liability-header",children:[t.jsx("h3",{className:"liability-name",children:j.counterpartyName}),t.jsx(xe,{variant:j.status==="PAID"?"default":j.isOverdue?"destructive":"secondary",className:`status-badge status-badge--${j.status.toLowerCase()}`,children:ge(j.status)})]}),t.jsxs("div",{className:"liability-details",children:[t.jsxs("div",{children:["Số tiền: ",J(j.amount,j.currency)]}),t.jsxs("div",{children:["Đã trả: ",J(j.paidAmount??0,j.currency)]}),t.jsxs("div",{children:["Còn lại: ",J(j.remainingAmount??0,j.currency)]}),j.dueAt&&t.jsxs("div",{children:["Hạn thanh toán: ",ue(j.dueAt)]}),j.note&&t.jsxs("div",{children:["Ghi chú: ",j.note]})]}),t.jsx("div",{className:"liability-amount",children:J(j.remainingAmount??0,j.currency)}),t.jsxs("div",{className:"liability-actions",onClick:M=>M.stopPropagation(),children:[t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>_(j),title:"Sửa",children:t.jsx(X,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>Z(j),title:"Xóa",children:t.jsx(X,{icon:"Delete",size:16,color:"currentColor"})})]})]},j.id))}),r&&r.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsx(U,{variant:"outline",className:`pagination-button ${r.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>f(r.page-1),disabled:!r.hasPrevious,children:"← Trước"}),t.jsxs("span",{children:["Trang ",r.page+1," / ",r.totalPages]}),t.jsx(U,{variant:"outline",className:`pagination-button ${r.hasNext?"":"pagination-button--disabled"}`,onClick:()=>f(r.page+1),disabled:!r.hasNext,children:"Sau →"})]})]})]}),t.jsx(Nt,{open:u,onOpenChange:j=>!j&&F(),children:t.jsxs(Om,{className:"modal-content",children:[t.jsxs(lt,{children:[t.jsx(dt,{className:"modal-title",children:p?"Sửa khoản nợ":"Thêm khoản nợ"}),t.jsx(ut,{children:p?"Cập nhật thông tin khoản nợ":"Thêm khoản nợ mới vào danh sách"})]}),p&&t.jsxs("div",{className:"settlement-section",children:[t.jsxs("div",{className:"settlement-header",children:[t.jsx("h3",{className:"settlement-title",children:"Lịch sử trả nợ"}),t.jsx("p",{className:"settlement-subtitle",children:"Xem các lần bạn đã trả tiền cho khoản nợ này."})]}),t.jsx("div",{className:"settlement-history",children:C?t.jsx("div",{className:"settlement-loading",children:"Đang tải lịch sử trả nợ..."}):h.length===0?t.jsx("div",{className:"settlement-empty",children:"Chưa có lần trả nợ nào."}):t.jsx("div",{className:"settlement-list",children:h.map(j=>t.jsxs("div",{className:"settlement-item",children:[t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Số tiền"}),t.jsx("span",{className:"settlement-value",children:J(j.amount,j.currency)})]}),t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Ngày"}),t.jsx("span",{className:"settlement-value",children:ue(j.occurredAt)})]}),j.note&&t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Ghi chú"}),t.jsx("span",{className:"settlement-value",children:j.note})]})]},j.id))})}),t.jsxs("div",{className:"settlement-form",children:[t.jsx("h4",{className:"settlement-form-title",children:"Trả nợ một phần"}),t.jsxs("div",{className:"settlement-form-grid",children:[t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(G,{className:"label",children:"Số tiền *"}),t.jsx(ee,{className:"input",type:"number",step:"0.01",min:"0",value:L.amount||"",onChange:j=>O({...L,amount:parseFloat(j.target.value)||0}),placeholder:"0"})]}),t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(G,{className:"label",children:"Tài khoản trả *"}),t.jsxs(be,{value:L.accountId,onValueChange:j=>O({...L,accountId:j}),children:[t.jsx(he,{className:"select settlement-account-select",children:t.jsx(ve,{placeholder:"Chọn tài khoản"})}),t.jsx(ye,{children:x.map(j=>t.jsx(Q,{value:j.id,children:j.name},j.id))})]})]}),t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(G,{className:"label",children:"Ngày trả"}),t.jsx(ee,{className:"input",type:"date",value:L.occurredAt,onChange:j=>O({...L,occurredAt:j.target.value})})]})]}),t.jsxs("div",{className:"settlement-form-note",children:[t.jsx(G,{className:"label",children:"Ghi chú"}),t.jsx(Fe,{value:L.note,onChange:j=>O({...L,note:j.target.value}),placeholder:"Ví dụ: Trả lần 1, chuyển khoản...",rows:2})]}),t.jsx("div",{className:"settlement-form-actions",children:t.jsx(U,{type:"button",className:"settlement-submit-button",disabled:T,onClick:K,children:T?"Đang ghi nhận...":"Ghi nhận lần trả này"})})]})]}),t.jsxs("form",{className:"form",onSubmit:I,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Tên chủ nợ *"}),t.jsx(ee,{className:"input",type:"text",value:$.counterpartyName,onChange:j=>A({...$,counterpartyName:j.target.value}),placeholder:"Nhập tên chủ nợ",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Số tiền *"}),t.jsx(ee,{className:"input",type:"number",step:"0.01",min:"0",value:$.amount||"",onChange:j=>A({...$,amount:parseFloat(j.target.value)||0}),placeholder:"0",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Tiền tệ"}),t.jsxs(be,{value:$.currency,onValueChange:j=>A({...$,currency:j}),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"VND",children:"VND (₫)"}),t.jsx(Q,{value:"USD",children:"USD ($)"}),t.jsx(Q,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Ngày vay"}),t.jsx(ee,{className:"input",type:"date",value:$.occurredAt||"",onChange:j=>A({...$,occurredAt:j.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Hạn thanh toán"}),t.jsx(ee,{className:"input",type:"date",value:$.dueAt||"",onChange:j=>A({...$,dueAt:j.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Ghi chú"}),t.jsx(Fe,{value:$.note||"",onChange:j=>A({...$,note:j.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),t.jsxs(ct,{className:"button-group",children:[t.jsx(U,{variant:"outline",type:"button",onClick:F,disabled:y,className:"cancel-button",children:"Hủy"}),t.jsx(U,{type:"submit",disabled:y,className:`submit-button ${y?"submit-button--loading":""}`,children:y?"Đang lưu...":p?"Lưu thay đổi":"Tạo khoản nợ"})]})]})]})})]})},hn=le.div`
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
    }

    .action-button {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
      padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
      background: ${({theme:e})=>e.colors.primary};
      color: white;
      border: none;
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
      }
    }
  }

  .error-state {
    padding: ${({theme:e})=>e.spacing[4]};
    background: ${({theme:e})=>e.colors.error}20;
    border: 1px solid ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    color: ${({theme:e})=>e.colors.error};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};

    .action-button {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
      padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
      background: ${({theme:e})=>e.colors.primary};
      color: white;
      border: none;
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
      }
    }
  }

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  .liabilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({theme:e})=>e.spacing[4]};

    .liability-card {
      padding: ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      box-shadow: ${({theme:e})=>e.shadows.md};
      transition: all 0.2s ease;
      position: relative;
      cursor: pointer;

      &:hover {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: ${({theme:e})=>e.shadows.lg};
        transform: translateY(-2px);
      }

      &--overdue {
        border-color: ${({theme:e})=>e.colors.error};
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
          color: white;
          border-radius: ${({theme:e})=>e.borderRadius.sm};
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};

          &--paid {
            background: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
          }

          &--overdue {
            background: ${({theme:e})=>e.colors.error||"#ef4444"};
          }

          &--partially_paid {
            background: ${({theme:e})=>{var o;return((o=e.colors.warning)==null?void 0:o[500])||"#f59e0b"}};
          }

          &--open {
            background: ${({theme:e})=>e.colors.text.secondary};
          }
        }
      }

      .liability-details {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[2]};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};
      }

      .liability-amount {
        font-size: ${({theme:e})=>e.typography.fontSize.xl};
        font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin-top: ${({theme:e})=>e.spacing[2]};
      }

      .liability-actions {
        display: flex;
        gap: ${({theme:e})=>e.spacing[2]};
        margin-top: ${({theme:e})=>e.spacing[3]};

        .icon-button {
          padding: ${({theme:e})=>e.spacing[2]};
          background: transparent;
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.md};
          color: ${({theme:e})=>e.colors.text.primary};
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            border-color: ${({theme:e})=>e.colors.primary};
            color: ${({theme:e})=>e.colors.primary};
          }
        }
      }
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[2]};
    margin-top: ${({theme:e})=>e.spacing[6]};

    .pagination-button {
      padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.primary};
      color: white;
      border: none;
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      cursor: pointer;
      opacity: 1;
      transition: all 0.2s ease;

      &:hover:not(:disabled) {
        opacity: 0.9;
      }

      &:disabled,
      &--disabled {
        background: ${({theme:e})=>e.colors.surface};
        color: ${({theme:e})=>e.colors.text.secondary};
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`,Om=le(it)`
  .modal-title {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0;
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
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        color: ${({theme:e})=>e.colors.text.primary};
      }

      .input {
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        color: ${({theme:e})=>e.colors.text.primary};

        &:focus {
          outline: none;
          border-color: ${({theme:e})=>e.colors.primary};
          box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
        }
      }

      .select {
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        color: ${({theme:e})=>e.colors.text.primary};
        cursor: pointer;

        &:focus {
          outline: none;
          border-color: ${({theme:e})=>e.colors.primary};
          box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
        }
      }
    }

    .button-group {
      display: flex;
      gap: ${({theme:e})=>e.spacing[4]};
      margin-top: ${({theme:e})=>e.spacing[6]} !important;

      .submit-button {
        flex: 1;
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        background: ${({theme:e})=>e.colors.primary};
        color: white;
        border: none;
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        cursor: pointer;
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
        }

        &:disabled,
        &--loading {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }

      .cancel-button {
        flex: 1;
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
    }
  }

  .settlement-section {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    padding: ${({theme:e})=>e.spacing[4]};
    background: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing[4]};

    .settlement-header {
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[1]};

      .settlement-title {
        font-size: ${({theme:e})=>e.typography.fontSize.lg};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin: 0;
      }

      .settlement-subtitle {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};
        margin: 0;
      }
    }

    .settlement-history {
      .settlement-loading,
      .settlement-empty {
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};
      }

      .settlement-list {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[3]};

        .settlement-item {
          padding: ${({theme:e})=>e.spacing[3]};
          border-radius: ${({theme:e})=>e.borderRadius.md};
          background: ${({theme:e})=>e.colors.background};
          border: 1px solid ${({theme:e})=>e.colors.border};
          display: flex;
          flex-direction: column;
          gap: ${({theme:e})=>e.spacing[1]};

          .settlement-row {
            display: flex;
            justify-content: space-between;
            gap: ${({theme:e})=>e.spacing[2]};
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
      border-top: 1px dashed ${({theme:e})=>e.colors.border};
      padding-top: ${({theme:e})=>e.spacing[4]};
      display: flex;
      flex-direction: column;
      gap: ${({theme:e})=>e.spacing[3]};

      .settlement-form-title {
        font-size: ${({theme:e})=>e.typography.fontSize.md};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin: 0;
      }

      .settlement-form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: ${({theme:e})=>e.spacing[3]};

        .settlement-form-field {
          display: flex;
          flex-direction: column;
          gap: ${({theme:e})=>e.spacing[1]};
        }
      }

      .settlement-form-note {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[1]};
      }

      .settlement-form-actions {
        display: flex;
        justify-content: flex-end;

        .settlement-submit-button {
          min-width: 180px;
        }
      }
    }
  }
`,Mm=()=>{const[e,o]=s.useState([]),[r,n]=s.useState(null),[a,i]=s.useState(0),[c,l]=s.useState(!0),[u,d]=s.useState(null),[p,g]=s.useState(!1),[y,b]=s.useState(null),[k,f]=s.useState(!1),[x,w]=s.useState(0),[h,m]=s.useState({name:"",type:"OTHER",estimatedValue:void 0,currency:"VND",acquiredAt:"",note:""}),C=s.useCallback(async(N=0)=>{l(!0),d(null);try{const[D,P]=await Promise.all([H.assets.getAll(N,10),H.assets.getTotalValue().catch(()=>0)]);o(D.content),n(D),i(P??0)}catch(D){d(ne(D))}finally{l(!1)}},[]);s.useEffect(()=>{C(x)},[x,C]);const S=N=>{N?(b(N),m({name:N.name,type:N.type,estimatedValue:N.estimatedValue,currency:N.currency,acquiredAt:N.acquiredAt?N.acquiredAt.split("T")[0]:"",note:N.note||""})):(b(null),m({name:"",type:"OTHER",estimatedValue:void 0,currency:"VND",acquiredAt:"",note:""})),g(!0)},T=()=>{g(!1),b(null),m({name:"",type:"OTHER",estimatedValue:void 0,currency:"VND",acquiredAt:"",note:""})},E=async N=>{N.preventDefault(),d(null),f(!0);try{if(y){const D={name:h.name,type:h.type,acquiredAt:h.acquiredAt?new Date(h.acquiredAt).toISOString():void 0,estimatedValue:h.estimatedValue||void 0,currency:h.currency,note:h.note||void 0};await H.assets.update(y.id,D)}else{const D={name:h.name,type:h.type,acquiredAt:h.acquiredAt?new Date(h.acquiredAt).toISOString():void 0,estimatedValue:h.estimatedValue||void 0,currency:h.currency,note:h.note||void 0};await H.assets.create(D)}await C(x),T()}catch(D){d(ne(D))}finally{f(!1)}},$=async N=>{if(window.confirm(`Bạn có chắc muốn xóa tài sản "${N.name}"?`))try{await H.assets.delete(N.id),await C(x)}catch(D){d(ne(D))}},A=(N,D="VND")=>N==null?"Chưa có":new Intl.NumberFormat("vi-VN",{style:"currency",currency:D}).format(N),L=N=>new Date(N).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"}),O=N=>({CASH:"Tiền mặt",ITEM:"Vật phẩm",DEVICE:"Thiết bị",OTHER:"Khác"})[N]||N;return c&&e.length===0?t.jsxs(yn,{className:"assets-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Tài sản"}),t.jsxs(U,{onClick:()=>S(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài sản"})]})]}),t.jsxs("div",{className:"loading-state",children:[t.jsx(me,{className:"h-8 w-48 mb-4"}),t.jsx(me,{className:"h-32 w-full"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(yn,{className:"assets-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Tài sản"}),t.jsxs(U,{onClick:()=>S(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài sản"})]})]}),u&&t.jsx(Je,{variant:"destructive",children:t.jsx(et,{children:u})}),a>0&&t.jsxs(de,{className:"summary-card",children:[t.jsx("h3",{className:"summary-title",children:"Tổng giá trị tài sản"}),t.jsx("div",{className:"summary-value",children:A(a,"VND")})]}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có tài sản nào"}),t.jsxs(U,{onClick:()=>S(),className:"gap-2",children:[t.jsx(X,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài sản đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"assets-grid",children:e.map(N=>t.jsxs(de,{className:"asset-card",onClick:()=>S(N),children:[t.jsxs("div",{className:"asset-header",children:[t.jsx("h3",{className:"asset-name",children:N.name}),t.jsx(xe,{variant:"secondary",className:`type-badge type-badge--${N.type.toLowerCase()}`,children:O(N.type)})]}),t.jsxs("div",{className:"asset-details",children:[N.estimatedValue!==void 0&&t.jsxs("div",{children:["Giá trị ước tính: ",A(N.estimatedValue,N.currency)]}),N.acquiredAt&&t.jsxs("div",{children:["Ngày mua: ",L(N.acquiredAt)]}),N.note&&t.jsxs("div",{children:["Ghi chú: ",N.note]})]}),N.estimatedValue!==void 0&&t.jsx("div",{className:"asset-value",children:A(N.estimatedValue,N.currency)}),t.jsxs("div",{className:"asset-actions",onClick:D=>D.stopPropagation(),children:[t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>S(N),title:"Sửa",children:t.jsx(X,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(U,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>$(N),title:"Xóa",children:t.jsx(X,{icon:"Delete",size:16,color:"currentColor"})})]})]},N.id))}),r&&r.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsx(U,{variant:"outline",className:`pagination-button ${r.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>w(r.page-1),disabled:!r.hasPrevious,children:"← Trước"}),t.jsxs("span",{children:["Trang ",r.page+1," / ",r.totalPages]}),t.jsx(U,{variant:"outline",className:`pagination-button ${r.hasNext?"":"pagination-button--disabled"}`,onClick:()=>w(r.page+1),disabled:!r.hasNext,children:"Sau →"})]})]})]}),t.jsx(Nt,{open:p,onOpenChange:N=>!N&&T(),children:t.jsxs(Lm,{className:"modal-content",children:[t.jsxs(lt,{children:[t.jsx(dt,{className:"modal-title",children:y?"Sửa tài sản":"Thêm tài sản"}),t.jsx(ut,{children:y?"Cập nhật thông tin tài sản của bạn":"Thêm tài sản mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:E,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Tên tài sản *"}),t.jsx(ee,{className:"input",type:"text",value:h.name,onChange:N=>m({...h,name:N.target.value}),placeholder:"Nhập tên tài sản",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Loại tài sản *"}),t.jsxs(be,{value:h.type,onValueChange:N=>m({...h,type:N}),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"CASH",children:"Tiền mặt"}),t.jsx(Q,{value:"ITEM",children:"Vật phẩm"}),t.jsx(Q,{value:"DEVICE",children:"Thiết bị"}),t.jsx(Q,{value:"OTHER",children:"Khác"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Giá trị ước tính"}),t.jsx(ee,{className:"input",type:"number",step:"0.01",min:"0",value:h.estimatedValue||"",onChange:N=>m({...h,estimatedValue:N.target.value?parseFloat(N.target.value):void 0}),placeholder:"0"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Tiền tệ"}),t.jsxs(be,{value:h.currency,onValueChange:N=>m({...h,currency:N}),children:[t.jsx(he,{className:"select",children:t.jsx(ve,{})}),t.jsxs(ye,{children:[t.jsx(Q,{value:"VND",children:"VND (₫)"}),t.jsx(Q,{value:"USD",children:"USD ($)"}),t.jsx(Q,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Ngày mua"}),t.jsx(ee,{className:"input",type:"date",value:h.acquiredAt||"",onChange:N=>m({...h,acquiredAt:N.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(G,{className:"label",children:"Ghi chú"}),t.jsx(Fe,{value:h.note||"",onChange:N=>m({...h,note:N.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),t.jsxs(ct,{className:"button-group",children:[t.jsx(U,{variant:"outline",type:"button",onClick:T,disabled:k,className:"cancel-button",children:"Hủy"}),t.jsx(U,{type:"submit",disabled:k,className:`submit-button ${k?"submit-button--loading":""}`,children:k?"Đang lưu...":y?"Lưu thay đổi":"Tạo tài sản"})]})]})]})})]})},yn=le.div`
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
    }

    .action-button {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
      padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
      background: ${({theme:e})=>e.colors.primary};
      color: white;
      border: none;
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
      }
    }
  }

  .error-state {
    padding: ${({theme:e})=>e.spacing[4]};
    background: ${({theme:e})=>e.colors.error}20;
    border: 1px solid ${({theme:e})=>e.colors.error};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    color: ${({theme:e})=>e.colors.error};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
  }

  .summary-card {
    padding: ${({theme:e})=>e.spacing[4]};
    background: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    box-shadow: ${({theme:e})=>e.shadows.md};

    .summary-title {
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
      color: ${({theme:e})=>e.colors.text.secondary};
      margin: 0 0 ${({theme:e})=>e.spacing[2]} 0;
    }

    .summary-value {
      font-size: ${({theme:e})=>e.typography.fontSize["2xl"]};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
      color: ${({theme:e})=>e.colors.primary};
    }
  }

  .empty-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[4]};

    .action-button {
      display: flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing[2]};
      padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
      background: ${({theme:e})=>e.colors.primary};
      color: white;
      border: none;
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.base};
      font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
      }
    }
  }

  .loading-state {
    padding: ${({theme:e})=>e.spacing[8]};
    text-align: center;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  .assets-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({theme:e})=>e.spacing[4]};

    .asset-card {
      padding: ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.surface};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.borderRadius.lg};
      box-shadow: ${({theme:e})=>e.shadows.md};
      transition: all 0.2s ease;
      position: relative;
      cursor: pointer;

      &:hover {
        border-color: ${({theme:e})=>e.colors.primary};
        box-shadow: ${({theme:e})=>e.shadows.lg};
        transform: translateY(-2px);
      }

      .asset-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${({theme:e})=>e.spacing[3]};

        .asset-name {
          font-size: ${({theme:e})=>e.typography.fontSize.lg};
          font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
          color: ${({theme:e})=>e.colors.text.primary};
          margin: 0;
        }

        .type-badge {
          padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
          color: white;
          border-radius: ${({theme:e})=>e.borderRadius.sm};
          font-size: ${({theme:e})=>e.typography.fontSize.xs};
          font-weight: ${({theme:e})=>e.typography.fontWeight.medium};

          &--cash {
            background: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
          }

          &--device {
            background: ${({theme:e})=>e.colors.primary||"#0ea5e9"};
          }

          &--item {
            background: ${({theme:e})=>{var o;return((o=e.colors.warning)==null?void 0:o[500])||"#f59e0b"}};
          }

          &--other {
            background: ${({theme:e})=>e.colors.text.secondary};
          }
        }
      }

      .asset-details {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing[2]};
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        color: ${({theme:e})=>e.colors.text.secondary};
      }

      .asset-value {
        font-size: ${({theme:e})=>e.typography.fontSize.xl};
        font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
        color: ${({theme:e})=>e.colors.text.primary};
        margin-top: ${({theme:e})=>e.spacing[2]};
      }

      .asset-actions {
        display: flex;
        gap: ${({theme:e})=>e.spacing[2]};
        margin-top: ${({theme:e})=>e.spacing[3]};

        .icon-button {
          padding: ${({theme:e})=>e.spacing[2]};
          background: transparent;
          border: 1px solid ${({theme:e})=>e.colors.border};
          border-radius: ${({theme:e})=>e.borderRadius.md};
          color: ${({theme:e})=>e.colors.text.primary};
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            border-color: ${({theme:e})=>e.colors.primary};
            color: ${({theme:e})=>e.colors.primary};
          }
        }
      }
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({theme:e})=>e.spacing[2]};
    margin-top: ${({theme:e})=>e.spacing[6]};

    .pagination-button {
      padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
      background: ${({theme:e})=>e.colors.primary};
      color: white;
      border: none;
      border-radius: ${({theme:e})=>e.borderRadius.md};
      font-size: ${({theme:e})=>e.typography.fontSize.sm};
      cursor: pointer;
      opacity: 1;
      transition: all 0.2s ease;

      &:hover:not(:disabled) {
        opacity: 0.9;
      }

      &:disabled,
      &--disabled {
        background: ${({theme:e})=>e.colors.surface};
        color: ${({theme:e})=>e.colors.text.secondary};
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`,Lm=le(it)`
  .modal-title {
    font-size: ${({theme:e})=>e.typography.fontSize.xl};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
    margin: 0;
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
        font-size: ${({theme:e})=>e.typography.fontSize.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
        color: ${({theme:e})=>e.colors.text.primary};
      }

      .input {
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        color: ${({theme:e})=>e.colors.text.primary};

        &:focus {
          outline: none;
          border-color: ${({theme:e})=>e.colors.primary};
          box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
        }
      }

      .select {
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        background: ${({theme:e})=>e.colors.background};
        border: 1px solid ${({theme:e})=>e.colors.border};
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        color: ${({theme:e})=>e.colors.text.primary};
        cursor: pointer;

        &:focus {
          outline: none;
          border-color: ${({theme:e})=>e.colors.primary};
          box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
        }
      }
    }

    .button-group {
      display: flex;
      gap: ${({theme:e})=>e.spacing[4]};
      margin-top: ${({theme:e})=>e.spacing[6]} !important;

      .submit-button {
        flex: 1;
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        background: ${({theme:e})=>e.colors.primary};
        color: white;
        border: none;
        border-radius: ${({theme:e})=>e.borderRadius.md};
        font-size: ${({theme:e})=>e.typography.fontSize.base};
        font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
        cursor: pointer;
        opacity: 1;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          opacity: 0.9;
        }

        &:disabled,
        &--loading {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }

      .cancel-button {
        flex: 1;
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
    }
  }
`,_m=()=>{const{user:e}=mo(),[o,r]=s.useState(!1),n=async()=>{r(!0);try{alert("Tính năng sync đang được phát triển")}catch(a){console.error("Sync error:",a)}finally{r(!1)}};return t.jsxs(Fm,{className:"settings-wrapper",children:[t.jsx("h1",{className:"title",children:"Cài đặt"}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{className:"section-title",children:"Thông tin tài khoản"}),t.jsx(de,{className:"card",children:t.jsxs(we,{className:"p-6",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Email"}),t.jsx("span",{className:"info-value",children:(e==null?void 0:e.email)||"-"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Họ tên"}),t.jsx("span",{className:"info-value",children:(e==null?void 0:e.fullName)||"-"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Trạng thái"}),t.jsx(xe,{variant:(e==null?void 0:e.status)==="ACTIVE"?"default":"secondary",className:`status-badge status-badge--${(e==null?void 0:e.status)==="ACTIVE"?"active":"inactive"}`,children:(e==null?void 0:e.status)||"UNKNOWN"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Vai trò"}),t.jsx("span",{className:"info-value",children:(e==null?void 0:e.role)||"-"})]})]})})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{className:"section-title",children:"Đồng bộ dữ liệu"}),t.jsx(de,{className:"card",children:t.jsxs(we,{className:"p-6",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Trạng thái"}),t.jsx(xe,{variant:"default",className:"status-badge status-badge--active",children:"Đã kết nối"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"API Environment"}),t.jsx("span",{className:"info-value",children:Sr.MODE})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"API Base URL"}),t.jsx("span",{className:"info-value",style:{fontSize:"12px",wordBreak:"break-all"},children:Sr.BASE_URL})]}),t.jsx("div",{style:{marginTop:"16px"},children:t.jsx(U,{className:"sync-button",onClick:n,disabled:o,children:o?"Đang đồng bộ...":"🔄 Đồng bộ ngay"})})]})})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{className:"section-title",children:"Quản lý"}),t.jsx(de,{className:"card",children:t.jsxs(we,{className:"p-6",children:[t.jsxs("div",{className:"info-row info-row--clickable",onClick:()=>{window.location.hash="#accounts"},children:[t.jsxs("span",{className:"info-label",style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(X,{icon:"Accounts",size:16,color:"currentColor"}),t.jsx("span",{children:"Tài khoản"})]}),t.jsx("span",{className:"info-value",children:"→"})]}),t.jsxs("div",{className:"info-row info-row--clickable",onClick:()=>{window.location.hash="#categories"},children:[t.jsxs("span",{className:"info-label",style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(X,{icon:"Categories",size:16,color:"currentColor"}),t.jsx("span",{children:"Danh mục"})]}),t.jsx("span",{className:"info-value",children:"→"})]})]})})]})]})},Fm=le.div`
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
          background: ${({theme:e})=>{var o;return(((o=e.colors.success)==null?void 0:o[500])||"#10b981")+"20"}};
          color: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
        }

        &--inactive {
          background: ${({theme:e})=>(e.colors.error||"#ef4444")+"20"};
          color: ${({theme:e})=>e.colors.error||"#ef4444"};
        }
      }

      .sync-button {
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
          box-shadow: 0 4px 12px ${({theme:e})=>e.colors.primary}40;
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }
    }
  }
`;var $r="ToastProvider",[jr,Wm,Vm]=Na("Toast"),[Is]=Ot("Toast",[Vm]),[Bm,ko]=Is($r),zs=e=>{const{__scopeToast:o,label:r="Notification",duration:n=5e3,swipeDirection:a="right",swipeThreshold:i=50,children:c}=e,[l,u]=s.useState(null),[d,p]=s.useState(0),g=s.useRef(!1),y=s.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${$r}\`. Expected non-empty \`string\`.`),t.jsx(jr.Provider,{scope:o,children:t.jsx(Bm,{scope:o,label:r,duration:n,swipeDirection:a,swipeThreshold:i,toastCount:d,viewport:l,onViewportChange:u,onToastAdd:s.useCallback(()=>p(b=>b+1),[]),onToastRemove:s.useCallback(()=>p(b=>b-1),[]),isFocusedToastEscapeKeyDownRef:g,isClosePausedRef:y,children:c})})};zs.displayName=$r;var Ds="ToastViewport",Hm=["F8"],Jo="toast.viewportPause",er="toast.viewportResume",Ps=s.forwardRef((e,o)=>{const{__scopeToast:r,hotkey:n=Hm,label:a="Notifications ({hotkey})",...i}=e,c=ko(Ds,r),l=Wm(r),u=s.useRef(null),d=s.useRef(null),p=s.useRef(null),g=s.useRef(null),y=pe(o,g,c.onViewportChange),b=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),k=c.toastCount>0;s.useEffect(()=>{const x=w=>{var m;n.length!==0&&n.every(C=>w[C]||w.code===C)&&((m=g.current)==null||m.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[n]),s.useEffect(()=>{const x=u.current,w=g.current;if(k&&x&&w){const h=()=>{if(!c.isClosePausedRef.current){const T=new CustomEvent(Jo);w.dispatchEvent(T),c.isClosePausedRef.current=!0}},m=()=>{if(c.isClosePausedRef.current){const T=new CustomEvent(er);w.dispatchEvent(T),c.isClosePausedRef.current=!1}},C=T=>{!x.contains(T.relatedTarget)&&m()},S=()=>{x.contains(document.activeElement)||m()};return x.addEventListener("focusin",h),x.addEventListener("focusout",C),x.addEventListener("pointermove",h),x.addEventListener("pointerleave",S),window.addEventListener("blur",h),window.addEventListener("focus",m),()=>{x.removeEventListener("focusin",h),x.removeEventListener("focusout",C),x.removeEventListener("pointermove",h),x.removeEventListener("pointerleave",S),window.removeEventListener("blur",h),window.removeEventListener("focus",m)}}},[k,c.isClosePausedRef]);const f=s.useCallback(({tabbingDirection:x})=>{const h=l().map(m=>{const C=m.ref.current,S=[C,...rf(C)];return x==="forwards"?S:S.reverse()});return(x==="forwards"?h.reverse():h).flat()},[l]);return s.useEffect(()=>{const x=g.current;if(x){const w=h=>{var S,T,E;const m=h.altKey||h.ctrlKey||h.metaKey;if(h.key==="Tab"&&!m){const $=document.activeElement,A=h.shiftKey;if(h.target===x&&A){(S=d.current)==null||S.focus();return}const N=f({tabbingDirection:A?"backwards":"forwards"}),D=N.findIndex(P=>P===$);Wo(N.slice(D+1))?h.preventDefault():A?(T=d.current)==null||T.focus():(E=p.current)==null||E.focus()}};return x.addEventListener("keydown",w),()=>x.removeEventListener("keydown",w)}},[l,f]),t.jsxs(Rd,{ref:u,role:"region","aria-label":a.replace("{hotkey}",b),tabIndex:-1,style:{pointerEvents:k?void 0:"none"},children:[k&&t.jsx(tr,{ref:d,onFocusFromOutsideViewport:()=>{const x=f({tabbingDirection:"forwards"});Wo(x)}}),t.jsx(jr.Slot,{scope:r,children:t.jsx(ie.ol,{tabIndex:-1,...i,ref:y})}),k&&t.jsx(tr,{ref:p,onFocusFromOutsideViewport:()=>{const x=f({tabbingDirection:"backwards"});Wo(x)}})]})});Ps.displayName=Ds;var Os="ToastFocusProxy",tr=s.forwardRef((e,o)=>{const{__scopeToast:r,onFocusFromOutsideViewport:n,...a}=e,i=ko(Os,r);return t.jsx(vr,{tabIndex:0,...a,ref:o,style:{position:"fixed"},onFocus:c=>{var d;const l=c.relatedTarget;!((d=i.viewport)!=null&&d.contains(l))&&n()}})});tr.displayName=Os;var _t="Toast",Um="toast.swipeStart",Ym="toast.swipeMove",qm="toast.swipeCancel",Km="toast.swipeEnd",Ms=s.forwardRef((e,o)=>{const{forceMount:r,open:n,defaultOpen:a,onOpenChange:i,...c}=e,[l,u]=ao({prop:n,defaultProp:a??!0,onChange:i,caller:_t});return t.jsx(Mt,{present:r||l,children:t.jsx(Zm,{open:l,...c,ref:o,onClose:()=>u(!1),onPause:Ie(e.onPause),onResume:Ie(e.onResume),onSwipeStart:re(e.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:re(e.onSwipeMove,d=>{const{x:p,y:g}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${p}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${g}px`)}),onSwipeCancel:re(e.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:re(e.onSwipeEnd,d=>{const{x:p,y:g}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${p}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${g}px`),u(!1)})})})});Ms.displayName=_t;var[Gm,Xm]=Is(_t,{onClose(){}}),Zm=s.forwardRef((e,o)=>{const{__scopeToast:r,type:n="foreground",duration:a,open:i,onClose:c,onEscapeKeyDown:l,onPause:u,onResume:d,onSwipeStart:p,onSwipeMove:g,onSwipeCancel:y,onSwipeEnd:b,...k}=e,f=ko(_t,r),[x,w]=s.useState(null),h=pe(o,P=>w(P)),m=s.useRef(null),C=s.useRef(null),S=a||f.duration,T=s.useRef(0),E=s.useRef(S),$=s.useRef(0),{onToastAdd:A,onToastRemove:L}=f,O=Ie(()=>{var _;(x==null?void 0:x.contains(document.activeElement))&&((_=f.viewport)==null||_.focus()),c()}),N=s.useCallback(P=>{!P||P===1/0||(window.clearTimeout($.current),T.current=new Date().getTime(),$.current=window.setTimeout(O,P))},[O]);s.useEffect(()=>{const P=f.viewport;if(P){const _=()=>{N(E.current),d==null||d()},F=()=>{const K=new Date().getTime()-T.current;E.current=E.current-K,window.clearTimeout($.current),u==null||u()};return P.addEventListener(Jo,F),P.addEventListener(er,_),()=>{P.removeEventListener(Jo,F),P.removeEventListener(er,_)}}},[f.viewport,S,u,d,N]),s.useEffect(()=>{i&&!f.isClosePausedRef.current&&N(S)},[i,S,f.isClosePausedRef,N]),s.useEffect(()=>(A(),()=>L()),[A,L]);const D=s.useMemo(()=>x?Hs(x):null,[x]);return f.viewport?t.jsxs(t.Fragment,{children:[D&&t.jsx(Qm,{__scopeToast:r,role:"status","aria-live":n==="foreground"?"assertive":"polite",children:D}),t.jsx(Gm,{scope:r,onClose:O,children:Dt.createPortal(t.jsx(jr.ItemSlot,{scope:r,children:t.jsx(Ad,{asChild:!0,onEscapeKeyDown:re(l,()=>{f.isFocusedToastEscapeKeyDownRef.current||O(),f.isFocusedToastEscapeKeyDownRef.current=!1}),children:t.jsx(ie.li,{tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":f.swipeDirection,...k,ref:h,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:re(e.onKeyDown,P=>{P.key==="Escape"&&(l==null||l(P.nativeEvent),P.nativeEvent.defaultPrevented||(f.isFocusedToastEscapeKeyDownRef.current=!0,O()))}),onPointerDown:re(e.onPointerDown,P=>{P.button===0&&(m.current={x:P.clientX,y:P.clientY})}),onPointerMove:re(e.onPointerMove,P=>{if(!m.current)return;const _=P.clientX-m.current.x,F=P.clientY-m.current.y,K=!!C.current,I=["left","right"].includes(f.swipeDirection),Z=["left","up"].includes(f.swipeDirection)?Math.min:Math.max,J=I?Z(0,_):0,ue=I?0:Z(0,F),ge=P.pointerType==="touch"?10:2,j={x:J,y:ue},M={originalEvent:P,delta:j};K?(C.current=j,Zt(Ym,g,M,{discrete:!1})):xn(j,f.swipeDirection,ge)?(C.current=j,Zt(Um,p,M,{discrete:!1}),P.target.setPointerCapture(P.pointerId)):(Math.abs(_)>ge||Math.abs(F)>ge)&&(m.current=null)}),onPointerUp:re(e.onPointerUp,P=>{const _=C.current,F=P.target;if(F.hasPointerCapture(P.pointerId)&&F.releasePointerCapture(P.pointerId),C.current=null,m.current=null,_){const K=P.currentTarget,I={originalEvent:P,delta:_};xn(_,f.swipeDirection,f.swipeThreshold)?Zt(Km,b,I,{discrete:!0}):Zt(qm,y,I,{discrete:!0}),K.addEventListener("click",Z=>Z.preventDefault(),{once:!0})}})})})}),f.viewport)})]}):null}),Qm=e=>{const{__scopeToast:o,children:r,...n}=e,a=ko(_t,o),[i,c]=s.useState(!1),[l,u]=s.useState(!1);return tf(()=>c(!0)),s.useEffect(()=>{const d=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(d)},[]),l?null:t.jsx(ho,{asChild:!0,children:t.jsx(vr,{...n,children:i&&t.jsxs(t.Fragment,{children:[a.label," ",r]})})})},Jm="ToastTitle",Ls=s.forwardRef((e,o)=>{const{__scopeToast:r,...n}=e;return t.jsx(ie.div,{...n,ref:o})});Ls.displayName=Jm;var ef="ToastDescription",_s=s.forwardRef((e,o)=>{const{__scopeToast:r,...n}=e;return t.jsx(ie.div,{...n,ref:o})});_s.displayName=ef;var Fs="ToastAction",Ws=s.forwardRef((e,o)=>{const{altText:r,...n}=e;return r.trim()?t.jsx(Bs,{altText:r,asChild:!0,children:t.jsx(Nr,{...n,ref:o})}):(console.error(`Invalid prop \`altText\` supplied to \`${Fs}\`. Expected non-empty \`string\`.`),null)});Ws.displayName=Fs;var Vs="ToastClose",Nr=s.forwardRef((e,o)=>{const{__scopeToast:r,...n}=e,a=Xm(Vs,r);return t.jsx(Bs,{asChild:!0,children:t.jsx(ie.button,{type:"button",...n,ref:o,onClick:re(e.onClick,a.onClose)})})});Nr.displayName=Vs;var Bs=s.forwardRef((e,o)=>{const{__scopeToast:r,altText:n,...a}=e;return t.jsx(ie.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...a,ref:o})});function Hs(e){const o=[];return Array.from(e.childNodes).forEach(n=>{if(n.nodeType===n.TEXT_NODE&&n.textContent&&o.push(n.textContent),of(n)){const a=n.ariaHidden||n.hidden||n.style.display==="none",i=n.dataset.radixToastAnnounceExclude==="";if(!a)if(i){const c=n.dataset.radixToastAnnounceAlt;c&&o.push(c)}else o.push(...Hs(n))}}),o}function Zt(e,o,r,{discrete:n}){const a=r.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});o&&a.addEventListener(e,o,{once:!0}),n?Vn(a,i):a.dispatchEvent(i)}var xn=(e,o,r=0)=>{const n=Math.abs(e.x),a=Math.abs(e.y),i=n>a;return o==="left"||o==="right"?i&&n>r:!i&&a>r};function tf(e=()=>{}){const o=Ie(e);$e(()=>{let r=0,n=0;return r=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(o)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(n)}},[o])}function of(e){return e.nodeType===e.ELEMENT_NODE}function rf(e){const o=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const a=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||a?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)o.push(r.currentNode);return o}function Wo(e){const o=document.activeElement;return e.some(r=>r===o?!0:(r.focus(),document.activeElement!==o))}var nf=zs,Us=Ps,Ys=Ms,qs=Ls,Ks=_s,Gs=Ws,Xs=Nr;const af=nf,Zs=s.forwardRef(({className:e,...o},r)=>t.jsx(Us,{ref:r,className:ae("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...o}));Zs.displayName=Us.displayName;const sf=Pt("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Qs=s.forwardRef(({className:e,variant:o,...r},n)=>t.jsx(Ys,{ref:n,className:ae(sf({variant:o}),e),...r}));Qs.displayName=Ys.displayName;const lf=s.forwardRef(({className:e,...o},r)=>t.jsx(Gs,{ref:r,className:ae("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...o}));lf.displayName=Gs.displayName;const Js=s.forwardRef(({className:e,...o},r)=>t.jsx(Xs,{ref:r,className:ae("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...o,children:t.jsx(nr,{className:"h-4 w-4"})}));Js.displayName=Xs.displayName;const ei=s.forwardRef(({className:e,...o},r)=>t.jsx(qs,{ref:r,className:ae("text-sm font-semibold",e),...o}));ei.displayName=qs.displayName;const ti=s.forwardRef(({className:e,...o},r)=>t.jsx(Ks,{ref:r,className:ae("text-sm opacity-90",e),...o}));ti.displayName=Ks.displayName;function cf(){const{toasts:e}=Rs();return t.jsxs(af,{children:[e.map(function({id:o,title:r,description:n,action:a,...i}){return t.jsxs(Qs,{...i,children:[t.jsxs("div",{className:"grid gap-1",children:[r&&t.jsx(ei,{children:r}),n&&t.jsx(ti,{children:n})]}),a,t.jsx(Js,{})]},o)}),t.jsx(Zs,{})]})}const oi=s.createContext(null),Ve=()=>{const e=s.useContext(oi);if(!e)throw new Error("useWalletAppRouter must be used within WalletAppRouter");return e},df=()=>{const{isAuthenticated:e,isLoading:o}=mo(),r=()=>{if(typeof window<"u"){const d=window.location.hash.slice(1);if(["login","register","verify-email","dashboard","transactions","transactions/add","transactions/edit","accounts","categories","budgets","receivables","liabilities","assets","settings"].includes(d))return d}return e?"dashboard":"login"},[n,a]=s.useState(r);s.useEffect(()=>{typeof window<"u"&&(window.location.hash=n)},[n]),s.useEffect(()=>{const d=()=>{const p=window.location.hash.slice(1);["login","register","verify-email","dashboard","transactions","transactions/add","transactions/edit","accounts","categories","budgets","receivables","liabilities","assets","settings"].includes(p)&&a(p)};return window.addEventListener("hashchange",d),()=>window.removeEventListener("hashchange",d)},[]);const i=d=>{a(d)};s.useEffect(()=>{const d=["login","register","verify-email"];!e&&!d.includes(n)?a("login"):e&&d.includes(n)&&a("dashboard")},[e,n]);const c=()=>{switch(n){case"login":return t.jsx(Jl,{});case"register":return t.jsx(tc,{});case"verify-email":return t.jsx(rc,{});case"dashboard":return t.jsx(pn,{});case"transactions":return t.jsx(Nm,{});case"transactions/add":return t.jsx(km,{});case"transactions/edit":return t.jsx(Em,{});case"accounts":return t.jsx(Tm,{});case"categories":return t.jsx(Am,{});case"budgets":return t.jsx(Im,{});case"receivables":return t.jsx(zm,{});case"liabilities":return t.jsx(Pm,{});case"assets":return t.jsx(Mm,{});case"settings":return t.jsx(_m,{});default:return t.jsx(pn,{})}};if(o)return t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0a0a0a"},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[t.jsx("div",{style:{width:"48px",height:"48px",border:"3px solid rgba(14, 165, 233, 0.2)",borderTopColor:"#0ea5e9",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),t.jsx("style",{children:`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}),t.jsx("span",{style:{color:"#a3a3a3",fontSize:"14px",fontWeight:500},children:"Đang tải..."})]})});const u=["login","register","verify-email"].includes(n);return t.jsxs(oi.Provider,{value:{currentRoute:n,navigate:i},children:[u?c():t.jsx(Zl,{children:c()}),t.jsx(cf,{})]})},gf=()=>t.jsx(gi,{children:t.jsx(df,{})});export{gf as default,Ve as useWalletAppRouter};
