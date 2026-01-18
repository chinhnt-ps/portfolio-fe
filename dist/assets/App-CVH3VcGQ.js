import{r as i,j as t,t as Ae,w as Y,c as pt,l as ni,u as Be,d as le,a as go,b as Ee,e as ai,s as si,h as ie,R as or,f as zt,g as ii,i as Ye,k as bn,m as li,n as tt,o as ci,p as vn,q as di,v as ui,x as pi,A as Sr}from"./index-CR4yyjH5.js";const wn=i.createContext(null),fo=()=>{const e=i.useContext(wn);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},gi=({children:e})=>{const[o,r]=i.useState(null),[n,a]=i.useState(!0),s=f=>{try{const y=f.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),b=decodeURIComponent(atob(y).split("").map(S=>"%"+("00"+S.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(b)}catch(m){return console.error("Error decoding JWT:",m),null}};i.useEffect(()=>{(async()=>{const m=Ae.getAccessToken();if(m)try{const y=s(m);if(y&&y.exp){const b=y.exp*1e3;if(Date.now()<b)r({id:y.sub||y.userId||"",email:y.email||"",fullName:y.fullName||y.name||"User",status:y.status||"ACTIVE",role:y.role||"USER"});else{const S=Ae.getRefreshToken();if(S)try{await Y.auth.refreshToken(S);const p=Ae.getAccessToken();if(p){const g=s(p);g&&r({id:g.sub||g.userId||"",email:g.email||"",fullName:g.fullName||g.name||"User",status:g.status||"ACTIVE",role:g.role||"USER"})}}catch{Ae.clearTokens(),r(null)}else Ae.clearTokens(),r(null)}}}catch(y){console.error("Auth check error:",y),Ae.clearTokens(),r(null)}a(!1)})()},[]);const d={user:o,isAuthenticated:!!o,isLoading:n,login:async f=>{var m,y,b,S,p;try{const g=await Y.auth.login(f),w=Ae.getAccessToken();if(w){const h=s(w);r(h?{id:((m=g.user)==null?void 0:m.id)||h.sub||h.userId||"",email:((y=g.user)==null?void 0:y.email)||h.email||f.email,fullName:((b=g.user)==null?void 0:b.fullName)||h.fullName||h.name||"User",status:((S=g.user)==null?void 0:S.status)||h.status||"ACTIVE",role:((p=g.user)==null?void 0:p.role)||h.role||"USER"}:g.user)}else r(g.user)}catch(g){throw g}},logout:async()=>{try{await Y.auth.logout()}catch(f){console.error("Logout error:",f)}finally{Ae.clearTokens(),r(null)}},refreshAuth:async()=>{const f=Ae.getAccessToken();if(!f){r(null);return}try{const m=s(f);if(m&&m.exp){const y=m.exp*1e3;if(Date.now()<y)r({id:m.sub||m.userId||"",email:m.email||"",fullName:m.fullName||m.name||"User",status:m.status||"ACTIVE",role:m.role||"USER"});else{const b=Ae.getRefreshToken();if(b){await Y.auth.refreshToken(b);const S=Ae.getAccessToken();if(S){const p=s(S);p&&r({id:p.sub||p.userId||"",email:p.email||"",fullName:p.fullName||p.name||"User",status:p.status||"ACTIVE",role:p.role||"USER"})}}else throw new Error("No refresh token")}}}catch(m){throw Ae.clearTokens(),r(null),m}}};return t.jsx(wn.Provider,{value:d,children:e})};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mi=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,r,n)=>n?n.toUpperCase():r.toLowerCase()),kr=e=>{const o=mi(e);return o.charAt(0).toUpperCase()+o.slice(1)},$n=(...e)=>e.filter((o,r,n)=>!!o&&o.trim()!==""&&n.indexOf(o)===r).join(" ").trim(),hi=e=>{for(const o in e)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=i.forwardRef(({color:e="currentColor",size:o=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:s,iconNode:c,...l},u)=>i.createElement("svg",{ref:u,...yi,width:o,height:o,stroke:e,strokeWidth:n?Number(r)*24/Number(o):r,className:$n("lucide",a),...!s&&!hi(l)&&{"aria-hidden":"true"},...l},[...c.map(([d,f])=>i.createElement(d,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(e,o)=>{const r=i.forwardRef(({className:n,...a},s)=>i.createElement(xi,{ref:s,iconNode:o,className:$n(`lucide-${fi(kr(e))}`,`lucide-${e}`,n),...a}));return r.displayName=kr(e),r};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]],vi=Z("arrow-down-left",bi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],$i=Z("arrow-up-right",wi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Ni=Z("book",ji);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],ki=Z("car",Si);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],jn=Z("check",Ci);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],rr=Z("chevron-down",Ti);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Cr=Z("chevron-left",Ai);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ri=Z("chevron-right",Ei);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Nn=Z("chevron-up",Ii);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],zi=Z("circle-alert",Di);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Oi=Z("circle-check-big",Pi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],_i=Z("circle-plus",Mi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Fi=Z("dollar-sign",Li);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Vi=Z("ellipsis",Wi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Hi=Z("file-text",Bi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Yi=Z("film",Ui);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Ki=Z("folder-open",qi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Gi=Z("gift",Xi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Qi=Z("heart",Zi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Tr=Z("house",Ji);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],tl=Z("layout-dashboard",el);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ar=Z("loader-circle",ol);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],nl=Z("log-out",rl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],sl=Z("menu",al);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ll=Z("moon",il);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]],dl=Z("piggy-bank",cl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],pl=Z("plus",ul);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],fl=Z("receipt",gl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],hl=Z("search",ml);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],xl=Z("settings",yl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],vl=Z("shopping-bag",bl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],$l=Z("sparkles",wl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Nl=Z("square-pen",jl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],kl=Z("sun",Sl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Tl=Z("trash-2",Cl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],El=Z("trending-up",Al);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Il=Z("user",Rl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],zl=Z("utensils",Dl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],Er=Z("wallet",Pl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nr=Z("x",Ol),Sn={Dashboard:tl,Transactions:fl,Accounts:Er,Categories:Ki,Budgets:dl,Receivables:$i,Liabilities:vi,Assets:Tr,Settings:xl,Menu:sl,Add:pl,Logout:nl,User:Il,Back:Cr,ChevronLeft:Cr,ChevronRight:Ri,ChevronUp:Nn,ChevronDown:rr,Edit:Nl,Delete:Tl,Close:nr,Check:jn,CheckCircle:Oi,Alert:zi,Loading:Ar,Loader:Ar,Sparkles:$l,Wallet:Er,Home:Tr,Sun:kl,Moon:ll,Search:hl,Utensils:zl,Car:ki,ShoppingBag:vl,Film:Yi,Heart:Qi,Book:Ni,FileText:Hi,MoreHorizontal:Vi,DollarSign:Fi,Gift:Gi,TrendingUp:El,PlusCircle:_i},Ml=e=>Sn[e]||null,U=({icon:e,size:o=20,className:r="",color:n})=>{const a=Sn[e];return a?t.jsx(a,{size:o,className:r,color:n,strokeWidth:2}):null},ar=ni`
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
`,_l=({isOpen:e,onToggle:o})=>{const{t:r}=Be(),{currentRoute:n,navigate:a}=et(),s=[{route:"dashboard",icon:"Dashboard",label:r("wallet.navigation.dashboard"),section:"main"},{route:"transactions",icon:"Transactions",label:r("wallet.navigation.transactions"),section:"main"},{route:"accounts",icon:"Accounts",label:r("wallet.navigation.accounts"),section:"main"},{route:"categories",icon:"Categories",label:r("wallet.navigation.categories"),section:"main"},{route:"budgets",icon:"Budgets",label:r("wallet.navigation.budgets"),section:"main"},{route:"receivables",icon:"Receivables",label:r("wallet.navigation.receivables"),section:"debts"},{route:"liabilities",icon:"Liabilities",label:r("wallet.navigation.liabilities"),section:"debts"},{route:"assets",icon:"Assets",label:r("wallet.navigation.assets"),section:"assets"},{route:"settings",icon:"Settings",label:r("wallet.navigation.settings"),section:"settings"}],c=d=>{a(d),o()},l=s.reduce((d,f)=>{const m=f.section||"other";return d[m]||(d[m]=[]),d[m].push(f),d},{}),u={main:r("wallet.sidebar.main"),debts:r("wallet.sidebar.debts"),assets:r("wallet.sidebar.assets"),settings:r("wallet.sidebar.settings")};return t.jsxs(t.Fragment,{children:[t.jsx(Wl,{className:`overlay ${e?"overlay--open":""}`,onClick:o}),t.jsx(Fl,{className:`sidebar-menu-wrapper ${e?"sidebar-menu-wrapper--open":""}`,children:t.jsx("ul",{className:"menu-list",children:Object.entries(l).map(([d,f])=>t.jsxs("div",{children:[t.jsx("div",{className:"menu-section",children:u[d]||d}),f.map(m=>t.jsx("li",{className:"menu-item",children:t.jsxs("button",{className:`menu-link ${n===m.route?"menu-link--active":""}`,onClick:()=>c(m.route),children:[t.jsx("div",{className:"menu-icon-wrapper",children:t.jsx(U,{icon:m.icon,size:20,color:"currentColor"})}),t.jsx("span",{className:"menu-label",children:m.label})]})},m.route))]},d))})})]})},Ll=({onClick:e})=>t.jsx(Vl,{className:"menu-toggle-button-wrapper",onClick:e,"aria-label":"Toggle menu",children:t.jsx(U,{icon:"Menu",size:20,color:"currentColor"})}),Fl=le.aside`
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
`,Bl=()=>{const e=go(),o=Ee(n=>n.theme.mode),r=()=>{e(ai())};return t.jsx(Hl,{className:"theme-toggle-wrapper",onClick:r,"aria-label":o==="dark"?"Switch to light mode":"Switch to dark mode",children:t.jsx(U,{icon:o==="dark"?"Moon":"Sun",size:20,color:"currentColor"})})},Hl=le.button`
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
`,Ul=()=>{const e=go(),o=Ee(a=>a.language.current),{i18n:r}=Be(),n=()=>{const a=o==="vi"?"en":"vi";e(si(a)),r.changeLanguage(a)};return t.jsx(Yl,{className:"language-toggle-wrapper",onClick:n,"aria-label":`Switch to ${o==="vi"?"English":"Tiếng Việt"}`,children:o==="vi"?"VI":"EN"})},Yl=le.button`
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
`,ql=({onMenuToggle:e})=>{const{user:o,logout:r}=fo(),{navigate:n}=et(),{t:a}=Be(),[s,c]=i.useState(!1),l=async()=>{c(!0);try{await r(),n("login")}catch(d){console.error("Logout error:",d),n("login")}finally{c(!1)}},u=()=>{typeof window<"u"&&(window.location.href="/")};return t.jsx(Kl,{className:"wallet-app-header-wrapper",children:t.jsxs("div",{className:"header-content",children:[t.jsxs("div",{className:"branding-section",children:[t.jsx(Ll,{onClick:e}),t.jsx("button",{className:"back-to-portfolio-button",onClick:u,title:a("wallet.header.backToPortfolio")||"Về Portfolio",children:t.jsx(U,{icon:"Home",size:20,color:"currentColor"})}),t.jsxs("div",{className:"logo",onClick:()=>n("dashboard"),children:[t.jsx(U,{icon:"Wallet",size:24,color:"currentColor"}),t.jsx("span",{children:a("wallet.app.title")})]})]}),t.jsxs("div",{className:"user-section",children:[t.jsx(Ul,{}),t.jsx(Bl,{}),t.jsx("span",{className:"user-name",children:(o==null?void 0:o.fullName)||(o==null?void 0:o.email)||"User"}),t.jsxs("button",{className:`logout-button ${s?"logout-button--loading":""}`,onClick:l,disabled:s,children:[t.jsx(U,{icon:s?"Loading":"Logout",size:16,color:"currentColor"}),t.jsx("span",{children:a(s?"wallet.header.loggingOut":"wallet.header.logout")})]})]})]})})},Kl=le.header`
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
`,Xl=()=>{const{t:e}=Be(),{currentRoute:o,navigate:r}=et(),n=[{route:"dashboard",icon:"Dashboard",label:e("wallet.navigation.dashboard")},{route:"transactions",icon:"Transactions",label:e("wallet.navigation.transactions")},{route:"transactions/add",icon:"Add",label:e("wallet.navigation.add")}];return t.jsx(Gl,{className:"wallet-app-navigation-wrapper",children:t.jsx("ul",{className:"nav-list",children:n.map(a=>t.jsx("li",{className:"nav-item",children:t.jsxs("button",{className:`nav-button ${o===a.route?"nav-button--active":""}`,onClick:()=>r(a.route),"aria-label":a.label,children:[t.jsx("div",{className:"nav-icon-wrapper",children:t.jsx(U,{icon:a.icon,size:20,color:"currentColor"})}),t.jsx("span",{className:"nav-label",children:a.label})]})},a.route))})})},Gl=le.nav`
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
`,Zl=({children:e})=>{const[o,r]=i.useState(!1);return t.jsxs(Ql,{className:"wallet-app-layout-wrapper",children:[t.jsx(ql,{onMenuToggle:()=>r(!o)}),t.jsxs("div",{className:"content-wrapper",children:[t.jsx(_l,{isOpen:o,onToggle:()=>r(!o)}),t.jsx("main",{className:"main-content",children:e})]}),t.jsx(Xl,{})]})},Ql=le.div`
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
`,Jl=()=>{const{t:e}=Be(),{login:o}=fo(),{navigate:r}=et(),[n,a]=i.useState(""),[s,c]=i.useState(""),[l,u]=i.useState(null),[d,f]=i.useState(!1),m=async y=>{y.preventDefault(),u(null),f(!0);try{await o({email:n,password:s}),r("dashboard")}catch(b){u(ie(b))}finally{f(!1)}};return t.jsx(ec,{className:"login-wrapper",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"title",children:e("wallet.login.title")}),t.jsx("p",{className:"description",children:e("wallet.login.description")}),t.jsxs("form",{className:"form",onSubmit:m,children:[l&&t.jsx("div",{className:"error-message",children:l}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",htmlFor:"email",children:e("wallet.login.email")}),t.jsx("input",{className:"input",id:"email",type:"email",placeholder:e("wallet.login.emailPlaceholder"),value:n,onChange:y=>a(y.target.value),required:!0,disabled:d,autoComplete:"email"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",htmlFor:"password",children:e("wallet.login.password")}),t.jsx("input",{className:"input",id:"password",type:"password",placeholder:e("wallet.login.passwordPlaceholder"),value:s,onChange:y=>c(y.target.value),required:!0,disabled:d,autoComplete:"current-password"})]}),t.jsx("button",{className:`login-button ${d?"login-button--loading":""}`,type:"submit",disabled:d,children:e(d?"wallet.login.signingIn":"wallet.login.signIn")})]})]})})},ec=le.div`
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
    }
  }
`;function Rr(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)}function wt(...e){return o=>{let r=!1;const n=e.map(a=>{const s=Rr(a,o);return!r&&typeof s=="function"&&(r=!0),s});if(r)return()=>{for(let a=0;a<n.length;a++){const s=n[a];typeof s=="function"?s():Rr(e[a],null)}}}}function de(...e){return i.useCallback(wt(...e),e)}var tc=Symbol.for("react.lazy"),ro=or[" use ".trim().toString()];function oc(e){return typeof e=="object"&&e!==null&&"then"in e}function kn(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===tc&&"_payload"in e&&oc(e._payload)}function Cn(e){const o=nc(e),r=i.forwardRef((n,a)=>{let{children:s,...c}=n;kn(s)&&typeof ro=="function"&&(s=ro(s._payload));const l=i.Children.toArray(s),u=l.find(sc);if(u){const d=u.props.children,f=l.map(m=>m===u?i.Children.count(d)>1?i.Children.only(null):i.isValidElement(d)?d.props.children:null:m);return t.jsx(o,{...c,ref:a,children:i.isValidElement(d)?i.cloneElement(d,void 0,f):null})}return t.jsx(o,{...c,ref:a,children:s})});return r.displayName=`${e}.Slot`,r}var rc=Cn("Slot");function nc(e){const o=i.forwardRef((r,n)=>{let{children:a,...s}=r;if(kn(a)&&typeof ro=="function"&&(a=ro(a._payload)),i.isValidElement(a)){const c=lc(a),l=ic(s,a.props);return a.type!==i.Fragment&&(l.ref=n?wt(n,c):c),i.cloneElement(a,l)}return i.Children.count(a)>1?i.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var ac=Symbol("radix.slottable");function sc(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ac}function ic(e,o){const r={...o};for(const n in o){const a=e[n],s=o[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...l)=>{const u=s(...l);return a(...l),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...s}:n==="className"&&(r[n]=[a,s].filter(Boolean).join(" "))}return{...e,...r}}function lc(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Tn(e){var o,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(o=0;o<a;o++)e[o]&&(r=Tn(e[o]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function An(){for(var e,o,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(o=Tn(e))&&(n&&(n+=" "),n+=o);return n}const Ir=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Dr=An,Pt=(e,o)=>r=>{var n;if((o==null?void 0:o.variants)==null)return Dr(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:a,defaultVariants:s}=o,c=Object.keys(a).map(d=>{const f=r==null?void 0:r[d],m=s==null?void 0:s[d];if(f===null)return null;const y=Ir(f)||Ir(m);return a[d][y]}),l=r&&Object.entries(r).reduce((d,f)=>{let[m,y]=f;return y===void 0||(d[m]=y),d},{}),u=o==null||(n=o.compoundVariants)===null||n===void 0?void 0:n.reduce((d,f)=>{let{class:m,className:y,...b}=f;return Object.entries(b).every(S=>{let[p,g]=S;return Array.isArray(g)?g.includes({...s,...l}[p]):{...s,...l}[p]===g})?[...d,m,y]:d},[]);return Dr(e,c,u,r==null?void 0:r.class,r==null?void 0:r.className)},cc=(e,o)=>{const r=new Array(e.length+o.length);for(let n=0;n<e.length;n++)r[n]=e[n];for(let n=0;n<o.length;n++)r[e.length+n]=o[n];return r},dc=(e,o)=>({classGroupId:e,validator:o}),En=(e=new Map,o=null,r)=>({nextPart:e,validators:o,classGroupId:r}),no="-",zr=[],uc="arbitrary..",pc=e=>{const o=fc(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:c=>{if(c.startsWith("[")&&c.endsWith("]"))return gc(c);const l=c.split(no),u=l[0]===""&&l.length>1?1:0;return Rn(l,u,o)},getConflictingClassGroupIds:(c,l)=>{if(l){const u=n[c],d=r[c];return u?d?cc(d,u):u:d||zr}return r[c]||zr}}},Rn=(e,o,r)=>{if(e.length-o===0)return r.classGroupId;const a=e[o],s=r.nextPart.get(a);if(s){const d=Rn(e,o+1,s);if(d)return d}const c=r.validators;if(c===null)return;const l=o===0?e.join(no):e.slice(o).join(no),u=c.length;for(let d=0;d<u;d++){const f=c[d];if(f.validator(l))return f.classGroupId}},gc=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const o=e.slice(1,-1),r=o.indexOf(":"),n=o.slice(0,r);return n?uc+n:void 0})(),fc=e=>{const{theme:o,classGroups:r}=e;return mc(r,o)},mc=(e,o)=>{const r=En();for(const n in e){const a=e[n];sr(a,r,n,o)}return r},sr=(e,o,r,n)=>{const a=e.length;for(let s=0;s<a;s++){const c=e[s];hc(c,o,r,n)}},hc=(e,o,r,n)=>{if(typeof e=="string"){yc(e,o,r);return}if(typeof e=="function"){xc(e,o,r,n);return}bc(e,o,r,n)},yc=(e,o,r)=>{const n=e===""?o:In(o,e);n.classGroupId=r},xc=(e,o,r,n)=>{if(vc(e)){sr(e(n),o,r,n);return}o.validators===null&&(o.validators=[]),o.validators.push(dc(r,e))},bc=(e,o,r,n)=>{const a=Object.entries(e),s=a.length;for(let c=0;c<s;c++){const[l,u]=a[c];sr(u,In(o,l),r,n)}},In=(e,o)=>{let r=e;const n=o.split(no),a=n.length;for(let s=0;s<a;s++){const c=n[s];let l=r.nextPart.get(c);l||(l=En(),r.nextPart.set(c,l)),r=l}return r},vc=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,wc=e=>{if(e<1)return{get:()=>{},set:()=>{}};let o=0,r=Object.create(null),n=Object.create(null);const a=(s,c)=>{r[s]=c,o++,o>e&&(o=0,n=r,r=Object.create(null))};return{get(s){let c=r[s];if(c!==void 0)return c;if((c=n[s])!==void 0)return a(s,c),c},set(s,c){s in r?r[s]=c:a(s,c)}}},Vo="!",Pr=":",$c=[],Or=(e,o,r,n,a)=>({modifiers:e,hasImportantModifier:o,baseClassName:r,maybePostfixModifierPosition:n,isExternal:a}),jc=e=>{const{prefix:o,experimentalParseClassName:r}=e;let n=a=>{const s=[];let c=0,l=0,u=0,d;const f=a.length;for(let p=0;p<f;p++){const g=a[p];if(c===0&&l===0){if(g===Pr){s.push(a.slice(u,p)),u=p+1;continue}if(g==="/"){d=p;continue}}g==="["?c++:g==="]"?c--:g==="("?l++:g===")"&&l--}const m=s.length===0?a:a.slice(u);let y=m,b=!1;m.endsWith(Vo)?(y=m.slice(0,-1),b=!0):m.startsWith(Vo)&&(y=m.slice(1),b=!0);const S=d&&d>u?d-u:void 0;return Or(s,b,y,S)};if(o){const a=o+Pr,s=n;n=c=>c.startsWith(a)?s(c.slice(a.length)):Or($c,!1,c,void 0,!0)}if(r){const a=n;n=s=>r({className:s,parseClassName:a})}return n},Nc=e=>{const o=new Map;return e.orderSensitiveModifiers.forEach((r,n)=>{o.set(r,1e6+n)}),r=>{const n=[];let a=[];for(let s=0;s<r.length;s++){const c=r[s],l=c[0]==="[",u=o.has(c);l||u?(a.length>0&&(a.sort(),n.push(...a),a=[]),n.push(c)):a.push(c)}return a.length>0&&(a.sort(),n.push(...a)),n}},Sc=e=>({cache:wc(e.cacheSize),parseClassName:jc(e),sortModifiers:Nc(e),...pc(e)}),kc=/\s+/,Cc=(e,o)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a,sortModifiers:s}=o,c=[],l=e.trim().split(kc);let u="";for(let d=l.length-1;d>=0;d-=1){const f=l[d],{isExternal:m,modifiers:y,hasImportantModifier:b,baseClassName:S,maybePostfixModifierPosition:p}=r(f);if(m){u=f+(u.length>0?" "+u:u);continue}let g=!!p,w=n(g?S.substring(0,p):S);if(!w){if(!g){u=f+(u.length>0?" "+u:u);continue}if(w=n(S),!w){u=f+(u.length>0?" "+u:u);continue}g=!1}const h=y.length===0?"":y.length===1?y[0]:s(y).join(":"),$=b?h+Vo:h,N=$+w;if(c.indexOf(N)>-1)continue;c.push(N);const v=a(w,g);for(let A=0;A<v.length;++A){const k=v[A];c.push($+k)}u=f+(u.length>0?" "+u:u)}return u},Tc=(...e)=>{let o=0,r,n,a="";for(;o<e.length;)(r=e[o++])&&(n=Dn(r))&&(a&&(a+=" "),a+=n);return a},Dn=e=>{if(typeof e=="string")return e;let o,r="";for(let n=0;n<e.length;n++)e[n]&&(o=Dn(e[n]))&&(r&&(r+=" "),r+=o);return r},Ac=(e,...o)=>{let r,n,a,s;const c=u=>{const d=o.reduce((f,m)=>m(f),e());return r=Sc(d),n=r.cache.get,a=r.cache.set,s=l,l(u)},l=u=>{const d=n(u);if(d)return d;const f=Cc(u,r);return a(u,f),f};return s=c,(...u)=>s(Tc(...u))},Ec=[],ge=e=>{const o=r=>r[e]||Ec;return o.isThemeGetter=!0,o},zn=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Pn=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Rc=/^\d+\/\d+$/,Ic=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Dc=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,zc=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Pc=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Oc=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,gt=e=>Rc.test(e),Q=e=>!!e&&!Number.isNaN(Number(e)),He=e=>!!e&&Number.isInteger(Number(e)),Co=e=>e.endsWith("%")&&Q(e.slice(0,-1)),Fe=e=>Ic.test(e),Mc=()=>!0,_c=e=>Dc.test(e)&&!zc.test(e),On=()=>!1,Lc=e=>Pc.test(e),Fc=e=>Oc.test(e),Wc=e=>!_(e)&&!L(e),Vc=e=>$t(e,Ln,On),_=e=>zn.test(e),ot=e=>$t(e,Fn,_c),To=e=>$t(e,qc,Q),Mr=e=>$t(e,Mn,On),Bc=e=>$t(e,_n,Fc),Wt=e=>$t(e,Wn,Lc),L=e=>Pn.test(e),At=e=>jt(e,Fn),Hc=e=>jt(e,Kc),_r=e=>jt(e,Mn),Uc=e=>jt(e,Ln),Yc=e=>jt(e,_n),Vt=e=>jt(e,Wn,!0),$t=(e,o,r)=>{const n=zn.exec(e);return n?n[1]?o(n[1]):r(n[2]):!1},jt=(e,o,r=!1)=>{const n=Pn.exec(e);return n?n[1]?o(n[1]):r:!1},Mn=e=>e==="position"||e==="percentage",_n=e=>e==="image"||e==="url",Ln=e=>e==="length"||e==="size"||e==="bg-size",Fn=e=>e==="length",qc=e=>e==="number",Kc=e=>e==="family-name",Wn=e=>e==="shadow",Xc=()=>{const e=ge("color"),o=ge("font"),r=ge("text"),n=ge("font-weight"),a=ge("tracking"),s=ge("leading"),c=ge("breakpoint"),l=ge("container"),u=ge("spacing"),d=ge("radius"),f=ge("shadow"),m=ge("inset-shadow"),y=ge("text-shadow"),b=ge("drop-shadow"),S=ge("blur"),p=ge("perspective"),g=ge("aspect"),w=ge("ease"),h=ge("animate"),$=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],v=()=>[...N(),L,_],A=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],T=()=>[L,_,u],P=()=>[gt,"full","auto",...T()],C=()=>[He,"none","subgrid",L,_],E=()=>["auto",{span:["full",He,L,_]},He,L,_],j=()=>[He,"auto",L,_],z=()=>["auto","min","max","fr",L,_],O=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],H=()=>["start","end","center","stretch","center-safe","end-safe"],F=()=>["auto",...T()],q=()=>[gt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...T()],D=()=>[e,L,_],K=()=>[...N(),_r,Mr,{position:[L,_]}],ne=()=>["no-repeat",{repeat:["","x","y","space","round"]}],fe=()=>["auto","cover","contain",Uc,Vc,{size:[L,_]}],me=()=>[Co,At,ot],ae=()=>["","none","full",d,L,_],se=()=>["",Q,At,ot],pe=()=>["solid","dashed","dotted","double"],Ne=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],x=()=>[Q,Co,_r,Mr],R=()=>["","none",S,L,_],V=()=>["none",Q,L,_],M=()=>["none",Q,L,_],I=()=>[Q,L,_],B=()=>[gt,"full",...T()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Fe],breakpoint:[Fe],color:[Mc],container:[Fe],"drop-shadow":[Fe],ease:["in","out","in-out"],font:[Wc],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Fe],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Fe],shadow:[Fe],spacing:["px",Q],text:[Fe],"text-shadow":[Fe],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",gt,_,L,g]}],container:["container"],columns:[{columns:[Q,_,L,l]}],"break-after":[{"break-after":$()}],"break-before":[{"break-before":$()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:v()}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:P()}],"inset-x":[{"inset-x":P()}],"inset-y":[{"inset-y":P()}],start:[{start:P()}],end:[{end:P()}],top:[{top:P()}],right:[{right:P()}],bottom:[{bottom:P()}],left:[{left:P()}],visibility:["visible","invisible","collapse"],z:[{z:[He,"auto",L,_]}],basis:[{basis:[gt,"full","auto",l,...T()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Q,gt,"auto","initial","none",_]}],grow:[{grow:["",Q,L,_]}],shrink:[{shrink:["",Q,L,_]}],order:[{order:[He,"first","last","none",L,_]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:E()}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:E()}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":z()}],"auto-rows":[{"auto-rows":z()}],gap:[{gap:T()}],"gap-x":[{"gap-x":T()}],"gap-y":[{"gap-y":T()}],"justify-content":[{justify:[...O(),"normal"]}],"justify-items":[{"justify-items":[...H(),"normal"]}],"justify-self":[{"justify-self":["auto",...H()]}],"align-content":[{content:["normal",...O()]}],"align-items":[{items:[...H(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...H(),{baseline:["","last"]}]}],"place-content":[{"place-content":O()}],"place-items":[{"place-items":[...H(),"baseline"]}],"place-self":[{"place-self":["auto",...H()]}],p:[{p:T()}],px:[{px:T()}],py:[{py:T()}],ps:[{ps:T()}],pe:[{pe:T()}],pt:[{pt:T()}],pr:[{pr:T()}],pb:[{pb:T()}],pl:[{pl:T()}],m:[{m:F()}],mx:[{mx:F()}],my:[{my:F()}],ms:[{ms:F()}],me:[{me:F()}],mt:[{mt:F()}],mr:[{mr:F()}],mb:[{mb:F()}],ml:[{ml:F()}],"space-x":[{"space-x":T()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":T()}],"space-y-reverse":["space-y-reverse"],size:[{size:q()}],w:[{w:[l,"screen",...q()]}],"min-w":[{"min-w":[l,"screen","none",...q()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[c]},...q()]}],h:[{h:["screen","lh",...q()]}],"min-h":[{"min-h":["screen","lh","none",...q()]}],"max-h":[{"max-h":["screen","lh",...q()]}],"font-size":[{text:["base",r,At,ot]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,L,To]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Co,_]}],"font-family":[{font:[Hc,_,o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,L,_]}],"line-clamp":[{"line-clamp":[Q,"none",L,To]}],leading:[{leading:[s,...T()]}],"list-image":[{"list-image":["none",L,_]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",L,_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...pe(),"wavy"]}],"text-decoration-thickness":[{decoration:[Q,"from-font","auto",L,ot]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[Q,"auto",L,_]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",L,_]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",L,_]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:K()}],"bg-repeat":[{bg:ne()}],"bg-size":[{bg:fe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},He,L,_],radial:["",L,_],conic:[He,L,_]},Yc,Bc]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:me()}],"gradient-via-pos":[{via:me()}],"gradient-to-pos":[{to:me()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:ae()}],"rounded-s":[{"rounded-s":ae()}],"rounded-e":[{"rounded-e":ae()}],"rounded-t":[{"rounded-t":ae()}],"rounded-r":[{"rounded-r":ae()}],"rounded-b":[{"rounded-b":ae()}],"rounded-l":[{"rounded-l":ae()}],"rounded-ss":[{"rounded-ss":ae()}],"rounded-se":[{"rounded-se":ae()}],"rounded-ee":[{"rounded-ee":ae()}],"rounded-es":[{"rounded-es":ae()}],"rounded-tl":[{"rounded-tl":ae()}],"rounded-tr":[{"rounded-tr":ae()}],"rounded-br":[{"rounded-br":ae()}],"rounded-bl":[{"rounded-bl":ae()}],"border-w":[{border:se()}],"border-w-x":[{"border-x":se()}],"border-w-y":[{"border-y":se()}],"border-w-s":[{"border-s":se()}],"border-w-e":[{"border-e":se()}],"border-w-t":[{"border-t":se()}],"border-w-r":[{"border-r":se()}],"border-w-b":[{"border-b":se()}],"border-w-l":[{"border-l":se()}],"divide-x":[{"divide-x":se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...pe(),"hidden","none"]}],"divide-style":[{divide:[...pe(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...pe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Q,L,_]}],"outline-w":[{outline:["",Q,At,ot]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",f,Vt,Wt]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",m,Vt,Wt]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[Q,ot]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":se()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",y,Vt,Wt]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[Q,L,_]}],"mix-blend":[{"mix-blend":[...Ne(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ne()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Q]}],"mask-image-linear-from-pos":[{"mask-linear-from":x()}],"mask-image-linear-to-pos":[{"mask-linear-to":x()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":x()}],"mask-image-t-to-pos":[{"mask-t-to":x()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":x()}],"mask-image-r-to-pos":[{"mask-r-to":x()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":x()}],"mask-image-b-to-pos":[{"mask-b-to":x()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":x()}],"mask-image-l-to-pos":[{"mask-l-to":x()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":x()}],"mask-image-x-to-pos":[{"mask-x-to":x()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":x()}],"mask-image-y-to-pos":[{"mask-y-to":x()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[L,_]}],"mask-image-radial-from-pos":[{"mask-radial-from":x()}],"mask-image-radial-to-pos":[{"mask-radial-to":x()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":N()}],"mask-image-conic-pos":[{"mask-conic":[Q]}],"mask-image-conic-from-pos":[{"mask-conic-from":x()}],"mask-image-conic-to-pos":[{"mask-conic-to":x()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:K()}],"mask-repeat":[{mask:ne()}],"mask-size":[{mask:fe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",L,_]}],filter:[{filter:["","none",L,_]}],blur:[{blur:R()}],brightness:[{brightness:[Q,L,_]}],contrast:[{contrast:[Q,L,_]}],"drop-shadow":[{"drop-shadow":["","none",b,Vt,Wt]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",Q,L,_]}],"hue-rotate":[{"hue-rotate":[Q,L,_]}],invert:[{invert:["",Q,L,_]}],saturate:[{saturate:[Q,L,_]}],sepia:[{sepia:["",Q,L,_]}],"backdrop-filter":[{"backdrop-filter":["","none",L,_]}],"backdrop-blur":[{"backdrop-blur":R()}],"backdrop-brightness":[{"backdrop-brightness":[Q,L,_]}],"backdrop-contrast":[{"backdrop-contrast":[Q,L,_]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Q,L,_]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Q,L,_]}],"backdrop-invert":[{"backdrop-invert":["",Q,L,_]}],"backdrop-opacity":[{"backdrop-opacity":[Q,L,_]}],"backdrop-saturate":[{"backdrop-saturate":[Q,L,_]}],"backdrop-sepia":[{"backdrop-sepia":["",Q,L,_]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":T()}],"border-spacing-x":[{"border-spacing-x":T()}],"border-spacing-y":[{"border-spacing-y":T()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",L,_]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Q,"initial",L,_]}],ease:[{ease:["linear","initial",w,L,_]}],delay:[{delay:[Q,L,_]}],animate:[{animate:["none",h,L,_]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[p,L,_]}],"perspective-origin":[{"perspective-origin":v()}],rotate:[{rotate:V()}],"rotate-x":[{"rotate-x":V()}],"rotate-y":[{"rotate-y":V()}],"rotate-z":[{"rotate-z":V()}],scale:[{scale:M()}],"scale-x":[{"scale-x":M()}],"scale-y":[{"scale-y":M()}],"scale-z":[{"scale-z":M()}],"scale-3d":["scale-3d"],skew:[{skew:I()}],"skew-x":[{"skew-x":I()}],"skew-y":[{"skew-y":I()}],transform:[{transform:[L,_,"","none","gpu","cpu"]}],"transform-origin":[{origin:v()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:B()}],"translate-x":[{"translate-x":B()}],"translate-y":[{"translate-y":B()}],"translate-z":[{"translate-z":B()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",L,_]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",L,_]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[Q,At,ot,To]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Gc=Ac(Xc);function te(...e){return Gc(An(e))}const Zc=Pt("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),W=i.forwardRef(({className:e,variant:o,size:r,asChild:n=!1,...a},s)=>{const c=n?rc:"button";return t.jsx(c,{className:te(Zc({variant:o,size:r,className:e})),ref:s,...a})});W.displayName="Button";const J=i.forwardRef(({className:e,type:o,...r},n)=>t.jsx("input",{type:o,className:te("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...r}));J.displayName="Input";const ce=i.forwardRef(({className:e,...o},r)=>t.jsx("div",{ref:r,className:te("rounded-lg border bg-card text-card-foreground shadow-sm",e),...o}));ce.displayName="Card";const Qc=i.forwardRef(({className:e,...o},r)=>t.jsx("div",{ref:r,className:te("flex flex-col space-y-1.5 p-6",e),...o}));Qc.displayName="CardHeader";const Jc=i.forwardRef(({className:e,...o},r)=>t.jsx("h3",{ref:r,className:te("text-2xl font-semibold leading-none tracking-tight",e),...o}));Jc.displayName="CardTitle";const ed=i.forwardRef(({className:e,...o},r)=>t.jsx("p",{ref:r,className:te("text-sm text-muted-foreground",e),...o}));ed.displayName="CardDescription";const ye=i.forwardRef(({className:e,...o},r)=>t.jsx("div",{ref:r,className:te("p-6 pt-0",e),...o}));ye.displayName="CardContent";const td=i.forwardRef(({className:e,...o},r)=>t.jsx("div",{ref:r,className:te("flex items-center p-6 pt-0",e),...o}));td.displayName="CardFooter";function ue({className:e,...o}){return t.jsx("div",{className:te("animate-pulse rounded-md bg-muted",e),...o})}const od=Pt("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function he({className:e,variant:o,...r}){return t.jsx("div",{className:te(od({variant:o}),e),...r})}const rd=({onParse:e,isLoading:o=!1,placeholder:r,disabled:n=!1,error:a})=>{const[s,c]=i.useState(""),l=i.useRef(null),u=i.useRef(null);i.useEffect(()=>{var m;(m=l.current)==null||m.focus()},[]),i.useEffect(()=>{},[s,a]);const d=i.useCallback(async()=>{!s.trim()||o||n||(u.current&&(clearTimeout(u.current),u.current=null),await e(s.trim()),c(""))},[s,o,n,e]),f=m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),d())};return t.jsxs(nd,{children:[t.jsxs("div",{className:"input-container",children:[t.jsx(J,{ref:l,type:"text",className:`nlp-input ${a?"error":""}`,value:s,onChange:m=>c(m.target.value),onKeyDown:f,placeholder:r||'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr")',disabled:n||o}),t.jsx(W,{variant:"secondary",onClick:d,disabled:n||o||!s.trim(),className:"parse-button",children:o?t.jsxs(t.Fragment,{children:[t.jsx(U,{icon:"Loader",size:16,color:"currentColor",className:"animate-spin"}),t.jsx("span",{children:"Đang phân tích..."})]}):t.jsxs(t.Fragment,{children:[t.jsx(U,{icon:"Sparkles",size:16,color:"currentColor"}),t.jsx("span",{children:"Phân tích"})]})})]}),a&&t.jsxs("div",{className:"error-message",children:[t.jsx(U,{icon:"Alert",size:16,color:"currentColor"}),t.jsx("span",{children:a})]})]})},nd=le.div`
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
`;function ee(e,o,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return o==null?void 0:o(a)}}function ad(e,o){const r=i.createContext(o),n=s=>{const{children:c,...l}=s,u=i.useMemo(()=>l,Object.values(l));return t.jsx(r.Provider,{value:u,children:c})};n.displayName=e+"Provider";function a(s){const c=i.useContext(r);if(c)return c;if(o!==void 0)return o;throw new Error(`\`${s}\` must be used within \`${e}\``)}return[n,a]}function Ot(e,o=[]){let r=[];function n(s,c){const l=i.createContext(c),u=r.length;r=[...r,c];const d=m=>{var w;const{scope:y,children:b,...S}=m,p=((w=y==null?void 0:y[e])==null?void 0:w[u])||l,g=i.useMemo(()=>S,Object.values(S));return t.jsx(p.Provider,{value:g,children:b})};d.displayName=s+"Provider";function f(m,y){var p;const b=((p=y==null?void 0:y[e])==null?void 0:p[u])||l,S=i.useContext(b);if(S)return S;if(c!==void 0)return c;throw new Error(`\`${m}\` must be used within \`${s}\``)}return[d,f]}const a=()=>{const s=r.map(c=>i.createContext(c));return function(l){const u=(l==null?void 0:l[e])||s;return i.useMemo(()=>({[`__scope${e}`]:{...l,[e]:u}}),[l,u])}};return a.scopeName=e,[n,sd(a,...o)]}function sd(...e){const o=e[0];if(e.length===1)return o;const r=()=>{const n=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const c=n.reduce((l,{useScope:u,scopeName:d})=>{const m=u(s)[`__scope${d}`];return{...l,...m}},{});return i.useMemo(()=>({[`__scope${o.scopeName}`]:c}),[c])}};return r.scopeName=o.scopeName,r}var ve=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},id=or[" useId ".trim().toString()]||(()=>{}),ld=0;function yt(e){const[o,r]=i.useState(id());return ve(()=>{r(n=>n??String(ld++))},[e]),e||(o?`radix-${o}`:"")}var cd=or[" useInsertionEffect ".trim().toString()]||ve;function ao({prop:e,defaultProp:o,onChange:r=()=>{},caller:n}){const[a,s,c]=dd({defaultProp:o,onChange:r}),l=e!==void 0,u=l?e:a;{const f=i.useRef(e!==void 0);i.useEffect(()=>{const m=f.current;m!==l&&console.warn(`${n} is changing from ${m?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=l},[l,n])}const d=i.useCallback(f=>{var m;if(l){const y=ud(f)?f(e):f;y!==e&&((m=c.current)==null||m.call(c,y))}else s(f)},[l,e,s,c]);return[u,d]}function dd({defaultProp:e,onChange:o}){const[r,n]=i.useState(e),a=i.useRef(r),s=i.useRef(o);return cd(()=>{s.current=o},[o]),i.useEffect(()=>{var c;a.current!==r&&((c=s.current)==null||c.call(s,r),a.current=r)},[r,a]),[r,n,s]}function ud(e){return typeof e=="function"}function pd(e){const o=gd(e),r=i.forwardRef((n,a)=>{const{children:s,...c}=n,l=i.Children.toArray(s),u=l.find(md);if(u){const d=u.props.children,f=l.map(m=>m===u?i.Children.count(d)>1?i.Children.only(null):i.isValidElement(d)?d.props.children:null:m);return t.jsx(o,{...c,ref:a,children:i.isValidElement(d)?i.cloneElement(d,void 0,f):null})}return t.jsx(o,{...c,ref:a,children:s})});return r.displayName=`${e}.Slot`,r}function gd(e){const o=i.forwardRef((r,n)=>{const{children:a,...s}=r;if(i.isValidElement(a)){const c=yd(a),l=hd(s,a.props);return a.type!==i.Fragment&&(l.ref=n?wt(n,c):c),i.cloneElement(a,l)}return i.Children.count(a)>1?i.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var fd=Symbol("radix.slottable");function md(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===fd}function hd(e,o){const r={...o};for(const n in o){const a=e[n],s=o[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...l)=>{const u=s(...l);return a(...l),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...s}:n==="className"&&(r[n]=[a,s].filter(Boolean).join(" "))}return{...e,...r}}function yd(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var xd=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],re=xd.reduce((e,o)=>{const r=pd(`Primitive.${o}`),n=i.forwardRef((a,s)=>{const{asChild:c,...l}=a,u=c?r:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(u,{...l,ref:s})});return n.displayName=`Primitive.${o}`,{...e,[o]:n}},{});function Vn(e,o){e&&zt.flushSync(()=>e.dispatchEvent(o))}function Ie(e){const o=i.useRef(e);return i.useEffect(()=>{o.current=e}),i.useMemo(()=>(...r)=>{var n;return(n=o.current)==null?void 0:n.call(o,...r)},[])}function bd(e,o=globalThis==null?void 0:globalThis.document){const r=Ie(e);i.useEffect(()=>{const n=a=>{a.key==="Escape"&&r(a)};return o.addEventListener("keydown",n,{capture:!0}),()=>o.removeEventListener("keydown",n,{capture:!0})},[r,o])}var vd="DismissableLayer",Bo="dismissableLayer.update",wd="dismissableLayer.pointerDownOutside",$d="dismissableLayer.focusOutside",Lr,Bn=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),mo=i.forwardRef((e,o)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:n,onPointerDownOutside:a,onFocusOutside:s,onInteractOutside:c,onDismiss:l,...u}=e,d=i.useContext(Bn),[f,m]=i.useState(null),y=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,b]=i.useState({}),S=de(o,k=>m(k)),p=Array.from(d.layers),[g]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),w=p.indexOf(g),h=f?p.indexOf(f):-1,$=d.layersWithOutsidePointerEventsDisabled.size>0,N=h>=w,v=Nd(k=>{const T=k.target,P=[...d.branches].some(C=>C.contains(T));!N||P||(a==null||a(k),c==null||c(k),k.defaultPrevented||l==null||l())},y),A=Sd(k=>{const T=k.target;[...d.branches].some(C=>C.contains(T))||(s==null||s(k),c==null||c(k),k.defaultPrevented||l==null||l())},y);return bd(k=>{h===d.layers.size-1&&(n==null||n(k),!k.defaultPrevented&&l&&(k.preventDefault(),l()))},y),i.useEffect(()=>{if(f)return r&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(Lr=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),Fr(),()=>{r&&d.layersWithOutsidePointerEventsDisabled.size===1&&(y.body.style.pointerEvents=Lr)}},[f,y,r,d]),i.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),Fr())},[f,d]),i.useEffect(()=>{const k=()=>b({});return document.addEventListener(Bo,k),()=>document.removeEventListener(Bo,k)},[]),t.jsx(re.div,{...u,ref:S,style:{pointerEvents:$?N?"auto":"none":void 0,...e.style},onFocusCapture:ee(e.onFocusCapture,A.onFocusCapture),onBlurCapture:ee(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:ee(e.onPointerDownCapture,v.onPointerDownCapture)})});mo.displayName=vd;var jd="DismissableLayerBranch",Hn=i.forwardRef((e,o)=>{const r=i.useContext(Bn),n=i.useRef(null),a=de(o,n);return i.useEffect(()=>{const s=n.current;if(s)return r.branches.add(s),()=>{r.branches.delete(s)}},[r.branches]),t.jsx(re.div,{...e,ref:a})});Hn.displayName=jd;function Nd(e,o=globalThis==null?void 0:globalThis.document){const r=Ie(e),n=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{const s=l=>{if(l.target&&!n.current){let u=function(){Un(wd,r,d,{discrete:!0})};const d={originalEvent:l};l.pointerType==="touch"?(o.removeEventListener("click",a.current),a.current=u,o.addEventListener("click",a.current,{once:!0})):u()}else o.removeEventListener("click",a.current);n.current=!1},c=window.setTimeout(()=>{o.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(c),o.removeEventListener("pointerdown",s),o.removeEventListener("click",a.current)}},[o,r]),{onPointerDownCapture:()=>n.current=!0}}function Sd(e,o=globalThis==null?void 0:globalThis.document){const r=Ie(e),n=i.useRef(!1);return i.useEffect(()=>{const a=s=>{s.target&&!n.current&&Un($d,r,{originalEvent:s},{discrete:!1})};return o.addEventListener("focusin",a),()=>o.removeEventListener("focusin",a)},[o,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function Fr(){const e=new CustomEvent(Bo);document.dispatchEvent(e)}function Un(e,o,r,{discrete:n}){const a=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});o&&a.addEventListener(e,o,{once:!0}),n?Vn(a,s):a.dispatchEvent(s)}var kd=mo,Cd=Hn,Ao="focusScope.autoFocusOnMount",Eo="focusScope.autoFocusOnUnmount",Wr={bubbles:!1,cancelable:!0},Td="FocusScope",ir=i.forwardRef((e,o)=>{const{loop:r=!1,trapped:n=!1,onMountAutoFocus:a,onUnmountAutoFocus:s,...c}=e,[l,u]=i.useState(null),d=Ie(a),f=Ie(s),m=i.useRef(null),y=de(o,p=>u(p)),b=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(n){let p=function($){if(b.paused||!l)return;const N=$.target;l.contains(N)?m.current=N:Ue(m.current,{select:!0})},g=function($){if(b.paused||!l)return;const N=$.relatedTarget;N!==null&&(l.contains(N)||Ue(m.current,{select:!0}))},w=function($){if(document.activeElement===document.body)for(const v of $)v.removedNodes.length>0&&Ue(l)};document.addEventListener("focusin",p),document.addEventListener("focusout",g);const h=new MutationObserver(w);return l&&h.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",p),document.removeEventListener("focusout",g),h.disconnect()}}},[n,l,b.paused]),i.useEffect(()=>{if(l){Br.add(b);const p=document.activeElement;if(!l.contains(p)){const w=new CustomEvent(Ao,Wr);l.addEventListener(Ao,d),l.dispatchEvent(w),w.defaultPrevented||(Ad(zd(Yn(l)),{select:!0}),document.activeElement===p&&Ue(l))}return()=>{l.removeEventListener(Ao,d),setTimeout(()=>{const w=new CustomEvent(Eo,Wr);l.addEventListener(Eo,f),l.dispatchEvent(w),w.defaultPrevented||Ue(p??document.body,{select:!0}),l.removeEventListener(Eo,f),Br.remove(b)},0)}}},[l,d,f,b]);const S=i.useCallback(p=>{if(!r&&!n||b.paused)return;const g=p.key==="Tab"&&!p.altKey&&!p.ctrlKey&&!p.metaKey,w=document.activeElement;if(g&&w){const h=p.currentTarget,[$,N]=Ed(h);$&&N?!p.shiftKey&&w===N?(p.preventDefault(),r&&Ue($,{select:!0})):p.shiftKey&&w===$&&(p.preventDefault(),r&&Ue(N,{select:!0})):w===h&&p.preventDefault()}},[r,n,b.paused]);return t.jsx(re.div,{tabIndex:-1,...c,ref:y,onKeyDown:S})});ir.displayName=Td;function Ad(e,{select:o=!1}={}){const r=document.activeElement;for(const n of e)if(Ue(n,{select:o}),document.activeElement!==r)return}function Ed(e){const o=Yn(e),r=Vr(o,e),n=Vr(o.reverse(),e);return[r,n]}function Yn(e){const o=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const a=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||a?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)o.push(r.currentNode);return o}function Vr(e,o){for(const r of e)if(!Rd(r,{upTo:o}))return r}function Rd(e,{upTo:o}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(o!==void 0&&e===o)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Id(e){return e instanceof HTMLInputElement&&"select"in e}function Ue(e,{select:o=!1}={}){if(e&&e.focus){const r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&Id(e)&&o&&e.select()}}var Br=Dd();function Dd(){let e=[];return{add(o){const r=e[0];o!==r&&(r==null||r.pause()),e=Hr(e,o),e.unshift(o)},remove(o){var r;e=Hr(e,o),(r=e[0])==null||r.resume()}}}function Hr(e,o){const r=[...e],n=r.indexOf(o);return n!==-1&&r.splice(n,1),r}function zd(e){return e.filter(o=>o.tagName!=="A")}var Pd="Portal",ho=i.forwardRef((e,o)=>{var l;const{container:r,...n}=e,[a,s]=i.useState(!1);ve(()=>s(!0),[]);const c=r||a&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return c?ii.createPortal(t.jsx(re.div,{...n,ref:o}),c):null});ho.displayName=Pd;function Od(e,o){return i.useReducer((r,n)=>o[r][n]??r,e)}var Mt=e=>{const{present:o,children:r}=e,n=Md(o),a=typeof r=="function"?r({present:n.isPresent}):i.Children.only(r),s=de(n.ref,_d(a));return typeof r=="function"||n.isPresent?i.cloneElement(a,{ref:s}):null};Mt.displayName="Presence";function Md(e){const[o,r]=i.useState(),n=i.useRef(null),a=i.useRef(e),s=i.useRef("none"),c=e?"mounted":"unmounted",[l,u]=Od(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const d=Bt(n.current);s.current=l==="mounted"?d:"none"},[l]),ve(()=>{const d=n.current,f=a.current;if(f!==e){const y=s.current,b=Bt(d);e?u("MOUNT"):b==="none"||(d==null?void 0:d.display)==="none"?u("UNMOUNT"):u(f&&y!==b?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,u]),ve(()=>{if(o){let d;const f=o.ownerDocument.defaultView??window,m=b=>{const p=Bt(n.current).includes(CSS.escape(b.animationName));if(b.target===o&&p&&(u("ANIMATION_END"),!a.current)){const g=o.style.animationFillMode;o.style.animationFillMode="forwards",d=f.setTimeout(()=>{o.style.animationFillMode==="forwards"&&(o.style.animationFillMode=g)})}},y=b=>{b.target===o&&(s.current=Bt(n.current))};return o.addEventListener("animationstart",y),o.addEventListener("animationcancel",m),o.addEventListener("animationend",m),()=>{f.clearTimeout(d),o.removeEventListener("animationstart",y),o.removeEventListener("animationcancel",m),o.removeEventListener("animationend",m)}}else u("ANIMATION_END")},[o,u]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:i.useCallback(d=>{n.current=d?getComputedStyle(d):null,r(d)},[])}}function Bt(e){return(e==null?void 0:e.animationName)||"none"}function _d(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Ro=0;function qn(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ur()),document.body.insertAdjacentElement("beforeend",e[1]??Ur()),Ro++,()=>{Ro===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(o=>o.remove()),Ro--}},[])}function Ur(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Qt="right-scroll-bar-position",Jt="width-before-scroll-bar",Ld="with-scroll-bars-hidden",Fd="--removed-body-scroll-bar-size";function Io(e,o){return typeof e=="function"?e(o):e&&(e.current=o),e}function Wd(e,o){var r=i.useState(function(){return{value:e,callback:o,facade:{get current(){return r.value},set current(n){var a=r.value;a!==n&&(r.value=n,r.callback(n,a))}}}})[0];return r.callback=o,r.facade}var Vd=typeof window<"u"?i.useLayoutEffect:i.useEffect,Yr=new WeakMap;function Bd(e,o){var r=Wd(null,function(n){return e.forEach(function(a){return Io(a,n)})});return Vd(function(){var n=Yr.get(r);if(n){var a=new Set(n),s=new Set(e),c=r.current;a.forEach(function(l){s.has(l)||Io(l,null)}),s.forEach(function(l){a.has(l)||Io(l,c)})}Yr.set(r,e)},[e]),r}function Hd(e){return e}function Ud(e,o){o===void 0&&(o=Hd);var r=[],n=!1,a={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(s){var c=o(s,n);return r.push(c),function(){r=r.filter(function(l){return l!==c})}},assignSyncMedium:function(s){for(n=!0;r.length;){var c=r;r=[],c.forEach(s)}r={push:function(l){return s(l)},filter:function(){return r}}},assignMedium:function(s){n=!0;var c=[];if(r.length){var l=r;r=[],l.forEach(s),c=r}var u=function(){var f=c;c=[],f.forEach(s)},d=function(){return Promise.resolve().then(u)};d(),r={push:function(f){c.push(f),d()},filter:function(f){return c=c.filter(f),r}}}};return a}function Yd(e){e===void 0&&(e={});var o=Ud(null);return o.options=Ye({async:!0,ssr:!1},e),o}var Kn=function(e){var o=e.sideCar,r=bn(e,["sideCar"]);if(!o)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=o.read();if(!n)throw new Error("Sidecar medium not found");return i.createElement(n,Ye({},r))};Kn.isSideCarExport=!0;function qd(e,o){return e.useMedium(o),Kn}var Xn=Yd(),Do=function(){},yo=i.forwardRef(function(e,o){var r=i.useRef(null),n=i.useState({onScrollCapture:Do,onWheelCapture:Do,onTouchMoveCapture:Do}),a=n[0],s=n[1],c=e.forwardProps,l=e.children,u=e.className,d=e.removeScrollBar,f=e.enabled,m=e.shards,y=e.sideCar,b=e.noRelative,S=e.noIsolation,p=e.inert,g=e.allowPinchZoom,w=e.as,h=w===void 0?"div":w,$=e.gapMode,N=bn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),v=y,A=Bd([r,o]),k=Ye(Ye({},N),a);return i.createElement(i.Fragment,null,f&&i.createElement(v,{sideCar:Xn,removeScrollBar:d,shards:m,noRelative:b,noIsolation:S,inert:p,setCallbacks:s,allowPinchZoom:!!g,lockRef:r,gapMode:$}),c?i.cloneElement(i.Children.only(l),Ye(Ye({},k),{ref:A})):i.createElement(h,Ye({},k,{className:u,ref:A}),l))});yo.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};yo.classNames={fullWidth:Jt,zeroRight:Qt};var Kd=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Xd(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var o=Kd();return o&&e.setAttribute("nonce",o),e}function Gd(e,o){e.styleSheet?e.styleSheet.cssText=o:e.appendChild(document.createTextNode(o))}function Zd(e){var o=document.head||document.getElementsByTagName("head")[0];o.appendChild(e)}var Qd=function(){var e=0,o=null;return{add:function(r){e==0&&(o=Xd())&&(Gd(o,r),Zd(o)),e++},remove:function(){e--,!e&&o&&(o.parentNode&&o.parentNode.removeChild(o),o=null)}}},Jd=function(){var e=Qd();return function(o,r){i.useEffect(function(){return e.add(o),function(){e.remove()}},[o&&r])}},Gn=function(){var e=Jd(),o=function(r){var n=r.styles,a=r.dynamic;return e(n,a),null};return o},eu={left:0,top:0,right:0,gap:0},zo=function(e){return parseInt(e||"",10)||0},tu=function(e){var o=window.getComputedStyle(document.body),r=o[e==="padding"?"paddingLeft":"marginLeft"],n=o[e==="padding"?"paddingTop":"marginTop"],a=o[e==="padding"?"paddingRight":"marginRight"];return[zo(r),zo(n),zo(a)]},ou=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return eu;var o=tu(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:o[0],top:o[1],right:o[2],gap:Math.max(0,n-r+o[2]-o[0])}},ru=Gn(),xt="data-scroll-locked",nu=function(e,o,r,n){var a=e.left,s=e.top,c=e.right,l=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(Ld,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(l,"px ").concat(n,`;
  }
  body[`).concat(xt,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([o&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(s,`px;
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
    `).concat(Fd,": ").concat(l,`px;
  }
`)},qr=function(){var e=parseInt(document.body.getAttribute(xt)||"0",10);return isFinite(e)?e:0},au=function(){i.useEffect(function(){return document.body.setAttribute(xt,(qr()+1).toString()),function(){var e=qr()-1;e<=0?document.body.removeAttribute(xt):document.body.setAttribute(xt,e.toString())}},[])},su=function(e){var o=e.noRelative,r=e.noImportant,n=e.gapMode,a=n===void 0?"margin":n;au();var s=i.useMemo(function(){return ou(a)},[a]);return i.createElement(ru,{styles:nu(s,!o,a,r?"":"!important")})},Ho=!1;if(typeof window<"u")try{var Ht=Object.defineProperty({},"passive",{get:function(){return Ho=!0,!0}});window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch{Ho=!1}var ft=Ho?{passive:!1}:!1,iu=function(e){return e.tagName==="TEXTAREA"},Zn=function(e,o){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return r[o]!=="hidden"&&!(r.overflowY===r.overflowX&&!iu(e)&&r[o]==="visible")},lu=function(e){return Zn(e,"overflowY")},cu=function(e){return Zn(e,"overflowX")},Kr=function(e,o){var r=o.ownerDocument,n=o;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var a=Qn(e,n);if(a){var s=Jn(e,n),c=s[1],l=s[2];if(c>l)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},du=function(e){var o=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[o,r,n]},uu=function(e){var o=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[o,r,n]},Qn=function(e,o){return e==="v"?lu(o):cu(o)},Jn=function(e,o){return e==="v"?du(o):uu(o)},pu=function(e,o){return e==="h"&&o==="rtl"?-1:1},gu=function(e,o,r,n,a){var s=pu(e,window.getComputedStyle(o).direction),c=s*n,l=r.target,u=o.contains(l),d=!1,f=c>0,m=0,y=0;do{if(!l)break;var b=Jn(e,l),S=b[0],p=b[1],g=b[2],w=p-g-s*S;(S||w)&&Qn(e,l)&&(m+=w,y+=S);var h=l.parentNode;l=h&&h.nodeType===Node.DOCUMENT_FRAGMENT_NODE?h.host:h}while(!u&&l!==document.body||u&&(o.contains(l)||o===l));return(f&&Math.abs(m)<1||!f&&Math.abs(y)<1)&&(d=!0),d},Ut=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Xr=function(e){return[e.deltaX,e.deltaY]},Gr=function(e){return e&&"current"in e?e.current:e},fu=function(e,o){return e[0]===o[0]&&e[1]===o[1]},mu=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},hu=0,mt=[];function yu(e){var o=i.useRef([]),r=i.useRef([0,0]),n=i.useRef(),a=i.useState(hu++)[0],s=i.useState(Gn)[0],c=i.useRef(e);i.useEffect(function(){c.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var p=li([e.lockRef.current],(e.shards||[]).map(Gr),!0).filter(Boolean);return p.forEach(function(g){return g.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),p.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var l=i.useCallback(function(p,g){if("touches"in p&&p.touches.length===2||p.type==="wheel"&&p.ctrlKey)return!c.current.allowPinchZoom;var w=Ut(p),h=r.current,$="deltaX"in p?p.deltaX:h[0]-w[0],N="deltaY"in p?p.deltaY:h[1]-w[1],v,A=p.target,k=Math.abs($)>Math.abs(N)?"h":"v";if("touches"in p&&k==="h"&&A.type==="range")return!1;var T=window.getSelection(),P=T&&T.anchorNode,C=P?P===A||P.contains(A):!1;if(C)return!1;var E=Kr(k,A);if(!E)return!0;if(E?v=k:(v=k==="v"?"h":"v",E=Kr(k,A)),!E)return!1;if(!n.current&&"changedTouches"in p&&($||N)&&(n.current=v),!v)return!0;var j=n.current||v;return gu(j,g,p,j==="h"?$:N)},[]),u=i.useCallback(function(p){var g=p;if(!(!mt.length||mt[mt.length-1]!==s)){var w="deltaY"in g?Xr(g):Ut(g),h=o.current.filter(function(v){return v.name===g.type&&(v.target===g.target||g.target===v.shadowParent)&&fu(v.delta,w)})[0];if(h&&h.should){g.cancelable&&g.preventDefault();return}if(!h){var $=(c.current.shards||[]).map(Gr).filter(Boolean).filter(function(v){return v.contains(g.target)}),N=$.length>0?l(g,$[0]):!c.current.noIsolation;N&&g.cancelable&&g.preventDefault()}}},[]),d=i.useCallback(function(p,g,w,h){var $={name:p,delta:g,target:w,should:h,shadowParent:xu(w)};o.current.push($),setTimeout(function(){o.current=o.current.filter(function(N){return N!==$})},1)},[]),f=i.useCallback(function(p){r.current=Ut(p),n.current=void 0},[]),m=i.useCallback(function(p){d(p.type,Xr(p),p.target,l(p,e.lockRef.current))},[]),y=i.useCallback(function(p){d(p.type,Ut(p),p.target,l(p,e.lockRef.current))},[]);i.useEffect(function(){return mt.push(s),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:y}),document.addEventListener("wheel",u,ft),document.addEventListener("touchmove",u,ft),document.addEventListener("touchstart",f,ft),function(){mt=mt.filter(function(p){return p!==s}),document.removeEventListener("wheel",u,ft),document.removeEventListener("touchmove",u,ft),document.removeEventListener("touchstart",f,ft)}},[]);var b=e.removeScrollBar,S=e.inert;return i.createElement(i.Fragment,null,S?i.createElement(s,{styles:mu(a)}):null,b?i.createElement(su,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function xu(e){for(var o=null;e!==null;)e instanceof ShadowRoot&&(o=e.host,e=e.host),e=e.parentNode;return o}const bu=qd(Xn,yu);var lr=i.forwardRef(function(e,o){return i.createElement(yo,Ye({},e,{ref:o,sideCar:bu}))});lr.classNames=yo.classNames;var vu=function(e){if(typeof document>"u")return null;var o=Array.isArray(e)?e[0]:e;return o.ownerDocument.body},ht=new WeakMap,Yt=new WeakMap,qt={},Po=0,ea=function(e){return e&&(e.host||ea(e.parentNode))},wu=function(e,o){return o.map(function(r){if(e.contains(r))return r;var n=ea(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},$u=function(e,o,r,n){var a=wu(o,Array.isArray(e)?e:[e]);qt[r]||(qt[r]=new WeakMap);var s=qt[r],c=[],l=new Set,u=new Set(a),d=function(m){!m||l.has(m)||(l.add(m),d(m.parentNode))};a.forEach(d);var f=function(m){!m||u.has(m)||Array.prototype.forEach.call(m.children,function(y){if(l.has(y))f(y);else try{var b=y.getAttribute(n),S=b!==null&&b!=="false",p=(ht.get(y)||0)+1,g=(s.get(y)||0)+1;ht.set(y,p),s.set(y,g),c.push(y),p===1&&S&&Yt.set(y,!0),g===1&&y.setAttribute(r,"true"),S||y.setAttribute(n,"true")}catch(w){console.error("aria-hidden: cannot operate on ",y,w)}})};return f(o),l.clear(),Po++,function(){c.forEach(function(m){var y=ht.get(m)-1,b=s.get(m)-1;ht.set(m,y),s.set(m,b),y||(Yt.has(m)||m.removeAttribute(n),Yt.delete(m)),b||m.removeAttribute(r)}),Po--,Po||(ht=new WeakMap,ht=new WeakMap,Yt=new WeakMap,qt={})}},ta=function(e,o,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),a=vu(e);return a?(n.push.apply(n,Array.from(a.querySelectorAll("[aria-live], script"))),$u(n,a,r,"aria-hidden")):function(){return null}};function ju(e){const o=Nu(e),r=i.forwardRef((n,a)=>{const{children:s,...c}=n,l=i.Children.toArray(s),u=l.find(ku);if(u){const d=u.props.children,f=l.map(m=>m===u?i.Children.count(d)>1?i.Children.only(null):i.isValidElement(d)?d.props.children:null:m);return t.jsx(o,{...c,ref:a,children:i.isValidElement(d)?i.cloneElement(d,void 0,f):null})}return t.jsx(o,{...c,ref:a,children:s})});return r.displayName=`${e}.Slot`,r}function Nu(e){const o=i.forwardRef((r,n)=>{const{children:a,...s}=r;if(i.isValidElement(a)){const c=Tu(a),l=Cu(s,a.props);return a.type!==i.Fragment&&(l.ref=n?wt(n,c):c),i.cloneElement(a,l)}return i.Children.count(a)>1?i.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var Su=Symbol("radix.slottable");function ku(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Su}function Cu(e,o){const r={...o};for(const n in o){const a=e[n],s=o[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...l)=>{const u=s(...l);return a(...l),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...s}:n==="className"&&(r[n]=[a,s].filter(Boolean).join(" "))}return{...e,...r}}function Tu(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var xo="Dialog",[oa]=Ot(xo),[Au,Pe]=oa(xo),ra=e=>{const{__scopeDialog:o,children:r,open:n,defaultOpen:a,onOpenChange:s,modal:c=!0}=e,l=i.useRef(null),u=i.useRef(null),[d,f]=ao({prop:n,defaultProp:a??!1,onChange:s,caller:xo});return t.jsx(Au,{scope:o,triggerRef:l,contentRef:u,contentId:yt(),titleId:yt(),descriptionId:yt(),open:d,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(m=>!m),[f]),modal:c,children:r})};ra.displayName=xo;var na="DialogTrigger",Eu=i.forwardRef((e,o)=>{const{__scopeDialog:r,...n}=e,a=Pe(na,r),s=de(o,a.triggerRef);return t.jsx(re.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":ur(a.open),...n,ref:s,onClick:ee(e.onClick,a.onOpenToggle)})});Eu.displayName=na;var cr="DialogPortal",[Ru,aa]=oa(cr,{forceMount:void 0}),sa=e=>{const{__scopeDialog:o,forceMount:r,children:n,container:a}=e,s=Pe(cr,o);return t.jsx(Ru,{scope:o,forceMount:r,children:i.Children.map(n,c=>t.jsx(Mt,{present:r||s.open,children:t.jsx(ho,{asChild:!0,container:a,children:c})}))})};sa.displayName=cr;var so="DialogOverlay",ia=i.forwardRef((e,o)=>{const r=aa(so,e.__scopeDialog),{forceMount:n=r.forceMount,...a}=e,s=Pe(so,e.__scopeDialog);return s.modal?t.jsx(Mt,{present:n||s.open,children:t.jsx(Du,{...a,ref:o})}):null});ia.displayName=so;var Iu=ju("DialogOverlay.RemoveScroll"),Du=i.forwardRef((e,o)=>{const{__scopeDialog:r,...n}=e,a=Pe(so,r);return t.jsx(lr,{as:Iu,allowPinchZoom:!0,shards:[a.contentRef],children:t.jsx(re.div,{"data-state":ur(a.open),...n,ref:o,style:{pointerEvents:"auto",...n.style}})})}),rt="DialogContent",la=i.forwardRef((e,o)=>{const r=aa(rt,e.__scopeDialog),{forceMount:n=r.forceMount,...a}=e,s=Pe(rt,e.__scopeDialog);return t.jsx(Mt,{present:n||s.open,children:s.modal?t.jsx(zu,{...a,ref:o}):t.jsx(Pu,{...a,ref:o})})});la.displayName=rt;var zu=i.forwardRef((e,o)=>{const r=Pe(rt,e.__scopeDialog),n=i.useRef(null),a=de(o,r.contentRef,n);return i.useEffect(()=>{const s=n.current;if(s)return ta(s)},[]),t.jsx(ca,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ee(e.onCloseAutoFocus,s=>{var c;s.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:ee(e.onPointerDownOutside,s=>{const c=s.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&s.preventDefault()}),onFocusOutside:ee(e.onFocusOutside,s=>s.preventDefault())})}),Pu=i.forwardRef((e,o)=>{const r=Pe(rt,e.__scopeDialog),n=i.useRef(!1),a=i.useRef(!1);return t.jsx(ca,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,s),s.defaultPrevented||(n.current||(l=r.triggerRef.current)==null||l.focus(),s.preventDefault()),n.current=!1,a.current=!1},onInteractOutside:s=>{var u,d;(u=e.onInteractOutside)==null||u.call(e,s),s.defaultPrevented||(n.current=!0,s.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const c=s.target;((d=r.triggerRef.current)==null?void 0:d.contains(c))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&a.current&&s.preventDefault()}})}),ca=i.forwardRef((e,o)=>{const{__scopeDialog:r,trapFocus:n,onOpenAutoFocus:a,onCloseAutoFocus:s,...c}=e,l=Pe(rt,r),u=i.useRef(null),d=de(o,u);return qn(),t.jsxs(t.Fragment,{children:[t.jsx(ir,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:a,onUnmountAutoFocus:s,children:t.jsx(mo,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":ur(l.open),...c,ref:d,onDismiss:()=>l.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(Ou,{titleId:l.titleId}),t.jsx(_u,{contentRef:u,descriptionId:l.descriptionId})]})]})}),dr="DialogTitle",da=i.forwardRef((e,o)=>{const{__scopeDialog:r,...n}=e,a=Pe(dr,r);return t.jsx(re.h2,{id:a.titleId,...n,ref:o})});da.displayName=dr;var ua="DialogDescription",pa=i.forwardRef((e,o)=>{const{__scopeDialog:r,...n}=e,a=Pe(ua,r);return t.jsx(re.p,{id:a.descriptionId,...n,ref:o})});pa.displayName=ua;var ga="DialogClose",fa=i.forwardRef((e,o)=>{const{__scopeDialog:r,...n}=e,a=Pe(ga,r);return t.jsx(re.button,{type:"button",...n,ref:o,onClick:ee(e.onClick,()=>a.onOpenChange(!1))})});fa.displayName=ga;function ur(e){return e?"open":"closed"}var ma="DialogTitleWarning",[lm,ha]=ad(ma,{contentName:rt,titleName:dr,docsSlug:"dialog"}),Ou=({titleId:e})=>{const o=ha(ma),r=`\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},Mu="DialogDescriptionWarning",_u=({contentRef:e,descriptionId:o})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ha(Mu).contentName}}.`;return i.useEffect(()=>{var s;const a=(s=e.current)==null?void 0:s.getAttribute("aria-describedby");o&&a&&(document.getElementById(o)||console.warn(n))},[n,e,o]),null},Lu=ra,Fu=sa,ya=ia,xa=la,ba=da,va=pa,Wu=fa;const Nt=Lu,Vu=Fu,wa=i.forwardRef(({className:e,...o},r)=>t.jsx(ya,{ref:r,className:te("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...o}));wa.displayName=ya.displayName;const it=i.forwardRef(({className:e,children:o,...r},n)=>t.jsxs(Vu,{children:[t.jsx(wa,{}),t.jsxs(xa,{ref:n,className:te("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...r,children:[o,t.jsxs(Wu,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[t.jsx(nr,{className:"h-4 w-4"}),t.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));it.displayName=xa.displayName;const lt=({className:e,...o})=>t.jsx("div",{className:te("flex flex-col space-y-1.5 text-center sm:text-left",e),...o});lt.displayName="DialogHeader";const ct=({className:e,...o})=>t.jsx("div",{className:te("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...o});ct.displayName="DialogFooter";const dt=i.forwardRef(({className:e,...o},r)=>t.jsx(ba,{ref:r,className:te("text-lg font-semibold leading-none tracking-tight",e),...o}));dt.displayName=ba.displayName;const ut=i.forwardRef(({className:e,...o},r)=>t.jsx(va,{ref:r,className:te("text-sm text-muted-foreground",e),...o}));ut.displayName=va.displayName;var Bu=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Hu=Bu.reduce((e,o)=>{const r=Cn(`Primitive.${o}`),n=i.forwardRef((a,s)=>{const{asChild:c,...l}=a,u=c?r:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(u,{...l,ref:s})});return n.displayName=`Primitive.${o}`,{...e,[o]:n}},{}),Uu="Label",$a=i.forwardRef((e,o)=>t.jsx(Hu.label,{...e,ref:o,onMouseDown:r=>{var a;r.target.closest("button, input, select, textarea")||((a=e.onMouseDown)==null||a.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));$a.displayName=Uu;var ja=$a;const Yu=Pt("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),X=i.forwardRef(({className:e,...o},r)=>t.jsx(ja,{ref:r,className:te(Yu(),e),...o}));X.displayName=ja.displayName;function Zr(e,[o,r]){return Math.min(r,Math.max(o,e))}function Qr(e){const o=qu(e),r=i.forwardRef((n,a)=>{const{children:s,...c}=n,l=i.Children.toArray(s),u=l.find(Xu);if(u){const d=u.props.children,f=l.map(m=>m===u?i.Children.count(d)>1?i.Children.only(null):i.isValidElement(d)?d.props.children:null:m);return t.jsx(o,{...c,ref:a,children:i.isValidElement(d)?i.cloneElement(d,void 0,f):null})}return t.jsx(o,{...c,ref:a,children:s})});return r.displayName=`${e}.Slot`,r}function qu(e){const o=i.forwardRef((r,n)=>{const{children:a,...s}=r;if(i.isValidElement(a)){const c=Zu(a),l=Gu(s,a.props);return a.type!==i.Fragment&&(l.ref=n?wt(n,c):c),i.cloneElement(a,l)}return i.Children.count(a)>1?i.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var Ku=Symbol("radix.slottable");function Xu(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ku}function Gu(e,o){const r={...o};for(const n in o){const a=e[n],s=o[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...l)=>{const u=s(...l);return a(...l),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...s}:n==="className"&&(r[n]=[a,s].filter(Boolean).join(" "))}return{...e,...r}}function Zu(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Na(e){const o=e+"CollectionProvider",[r,n]=Ot(o),[a,s]=r(o,{collectionRef:{current:null},itemMap:new Map}),c=p=>{const{scope:g,children:w}=p,h=tt.useRef(null),$=tt.useRef(new Map).current;return t.jsx(a,{scope:g,itemMap:$,collectionRef:h,children:w})};c.displayName=o;const l=e+"CollectionSlot",u=Qr(l),d=tt.forwardRef((p,g)=>{const{scope:w,children:h}=p,$=s(l,w),N=de(g,$.collectionRef);return t.jsx(u,{ref:N,children:h})});d.displayName=l;const f=e+"CollectionItemSlot",m="data-radix-collection-item",y=Qr(f),b=tt.forwardRef((p,g)=>{const{scope:w,children:h,...$}=p,N=tt.useRef(null),v=de(g,N),A=s(f,w);return tt.useEffect(()=>(A.itemMap.set(N,{ref:N,...$}),()=>void A.itemMap.delete(N))),t.jsx(y,{[m]:"",ref:v,children:h})});b.displayName=f;function S(p){const g=s(e+"CollectionConsumer",p);return tt.useCallback(()=>{const h=g.collectionRef.current;if(!h)return[];const $=Array.from(h.querySelectorAll(`[${m}]`));return Array.from(g.itemMap.values()).sort((A,k)=>$.indexOf(A.ref.current)-$.indexOf(k.ref.current))},[g.collectionRef,g.itemMap])}return[{Provider:c,Slot:d,ItemSlot:b},S,n]}var Qu=i.createContext(void 0);function Ju(e){const o=i.useContext(Qu);return e||o||"ltr"}const ep=["top","right","bottom","left"],qe=Math.min,ke=Math.max,io=Math.round,Kt=Math.floor,Me=e=>({x:e,y:e}),tp={left:"right",right:"left",bottom:"top",top:"bottom"},op={start:"end",end:"start"};function Uo(e,o,r){return ke(e,qe(o,r))}function We(e,o){return typeof e=="function"?e(o):e}function Ve(e){return e.split("-")[0]}function St(e){return e.split("-")[1]}function pr(e){return e==="x"?"y":"x"}function gr(e){return e==="y"?"height":"width"}const rp=new Set(["top","bottom"]);function Oe(e){return rp.has(Ve(e))?"y":"x"}function fr(e){return pr(Oe(e))}function np(e,o,r){r===void 0&&(r=!1);const n=St(e),a=fr(e),s=gr(a);let c=a==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return o.reference[s]>o.floating[s]&&(c=lo(c)),[c,lo(c)]}function ap(e){const o=lo(e);return[Yo(e),o,Yo(o)]}function Yo(e){return e.replace(/start|end/g,o=>op[o])}const Jr=["left","right"],en=["right","left"],sp=["top","bottom"],ip=["bottom","top"];function lp(e,o,r){switch(e){case"top":case"bottom":return r?o?en:Jr:o?Jr:en;case"left":case"right":return o?sp:ip;default:return[]}}function cp(e,o,r,n){const a=St(e);let s=lp(Ve(e),r==="start",n);return a&&(s=s.map(c=>c+"-"+a),o&&(s=s.concat(s.map(Yo)))),s}function lo(e){return e.replace(/left|right|bottom|top/g,o=>tp[o])}function dp(e){return{top:0,right:0,bottom:0,left:0,...e}}function Sa(e){return typeof e!="number"?dp(e):{top:e,right:e,bottom:e,left:e}}function co(e){const{x:o,y:r,width:n,height:a}=e;return{width:n,height:a,top:r,left:o,right:o+n,bottom:r+a,x:o,y:r}}function tn(e,o,r){let{reference:n,floating:a}=e;const s=Oe(o),c=fr(o),l=gr(c),u=Ve(o),d=s==="y",f=n.x+n.width/2-a.width/2,m=n.y+n.height/2-a.height/2,y=n[l]/2-a[l]/2;let b;switch(u){case"top":b={x:f,y:n.y-a.height};break;case"bottom":b={x:f,y:n.y+n.height};break;case"right":b={x:n.x+n.width,y:m};break;case"left":b={x:n.x-a.width,y:m};break;default:b={x:n.x,y:n.y}}switch(St(o)){case"start":b[c]-=y*(r&&d?-1:1);break;case"end":b[c]+=y*(r&&d?-1:1);break}return b}const up=async(e,o,r)=>{const{placement:n="bottom",strategy:a="absolute",middleware:s=[],platform:c}=r,l=s.filter(Boolean),u=await(c.isRTL==null?void 0:c.isRTL(o));let d=await c.getElementRects({reference:e,floating:o,strategy:a}),{x:f,y:m}=tn(d,n,u),y=n,b={},S=0;for(let p=0;p<l.length;p++){const{name:g,fn:w}=l[p],{x:h,y:$,data:N,reset:v}=await w({x:f,y:m,initialPlacement:n,placement:y,strategy:a,middlewareData:b,rects:d,platform:c,elements:{reference:e,floating:o}});f=h??f,m=$??m,b={...b,[g]:{...b[g],...N}},v&&S<=50&&(S++,typeof v=="object"&&(v.placement&&(y=v.placement),v.rects&&(d=v.rects===!0?await c.getElementRects({reference:e,floating:o,strategy:a}):v.rects),{x:f,y:m}=tn(d,y,u)),p=-1)}return{x:f,y:m,placement:y,strategy:a,middlewareData:b}};async function It(e,o){var r;o===void 0&&(o={});const{x:n,y:a,platform:s,rects:c,elements:l,strategy:u}=e,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:y=!1,padding:b=0}=We(o,e),S=Sa(b),g=l[y?m==="floating"?"reference":"floating":m],w=co(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(g)))==null||r?g:g.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:f,strategy:u})),h=m==="floating"?{x:n,y:a,width:c.floating.width,height:c.floating.height}:c.reference,$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),N=await(s.isElement==null?void 0:s.isElement($))?await(s.getScale==null?void 0:s.getScale($))||{x:1,y:1}:{x:1,y:1},v=co(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:h,offsetParent:$,strategy:u}):h);return{top:(w.top-v.top+S.top)/N.y,bottom:(v.bottom-w.bottom+S.bottom)/N.y,left:(w.left-v.left+S.left)/N.x,right:(v.right-w.right+S.right)/N.x}}const pp=e=>({name:"arrow",options:e,async fn(o){const{x:r,y:n,placement:a,rects:s,platform:c,elements:l,middlewareData:u}=o,{element:d,padding:f=0}=We(e,o)||{};if(d==null)return{};const m=Sa(f),y={x:r,y:n},b=fr(a),S=gr(b),p=await c.getDimensions(d),g=b==="y",w=g?"top":"left",h=g?"bottom":"right",$=g?"clientHeight":"clientWidth",N=s.reference[S]+s.reference[b]-y[b]-s.floating[S],v=y[b]-s.reference[b],A=await(c.getOffsetParent==null?void 0:c.getOffsetParent(d));let k=A?A[$]:0;(!k||!await(c.isElement==null?void 0:c.isElement(A)))&&(k=l.floating[$]||s.floating[S]);const T=N/2-v/2,P=k/2-p[S]/2-1,C=qe(m[w],P),E=qe(m[h],P),j=C,z=k-p[S]-E,O=k/2-p[S]/2+T,H=Uo(j,O,z),F=!u.arrow&&St(a)!=null&&O!==H&&s.reference[S]/2-(O<j?C:E)-p[S]/2<0,q=F?O<j?O-j:O-z:0;return{[b]:y[b]+q,data:{[b]:H,centerOffset:O-H-q,...F&&{alignmentOffset:q}},reset:F}}}),gp=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(o){var r,n;const{placement:a,middlewareData:s,rects:c,initialPlacement:l,platform:u,elements:d}=o,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:y,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:p=!0,...g}=We(e,o);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const w=Ve(a),h=Oe(l),$=Ve(l)===l,N=await(u.isRTL==null?void 0:u.isRTL(d.floating)),v=y||($||!p?[lo(l)]:ap(l)),A=S!=="none";!y&&A&&v.push(...cp(l,p,S,N));const k=[l,...v],T=await It(o,g),P=[];let C=((n=s.flip)==null?void 0:n.overflows)||[];if(f&&P.push(T[w]),m){const O=np(a,c,N);P.push(T[O[0]],T[O[1]])}if(C=[...C,{placement:a,overflows:P}],!P.every(O=>O<=0)){var E,j;const O=(((E=s.flip)==null?void 0:E.index)||0)+1,H=k[O];if(H&&(!(m==="alignment"?h!==Oe(H):!1)||C.every(D=>Oe(D.placement)===h?D.overflows[0]>0:!0)))return{data:{index:O,overflows:C},reset:{placement:H}};let F=(j=C.filter(q=>q.overflows[0]<=0).sort((q,D)=>q.overflows[1]-D.overflows[1])[0])==null?void 0:j.placement;if(!F)switch(b){case"bestFit":{var z;const q=(z=C.filter(D=>{if(A){const K=Oe(D.placement);return K===h||K==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(K=>K>0).reduce((K,ne)=>K+ne,0)]).sort((D,K)=>D[1]-K[1])[0])==null?void 0:z[0];q&&(F=q);break}case"initialPlacement":F=l;break}if(a!==F)return{reset:{placement:F}}}return{}}}};function on(e,o){return{top:e.top-o.height,right:e.right-o.width,bottom:e.bottom-o.height,left:e.left-o.width}}function rn(e){return ep.some(o=>e[o]>=0)}const fp=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(o){const{rects:r}=o,{strategy:n="referenceHidden",...a}=We(e,o);switch(n){case"referenceHidden":{const s=await It(o,{...a,elementContext:"reference"}),c=on(s,r.reference);return{data:{referenceHiddenOffsets:c,referenceHidden:rn(c)}}}case"escaped":{const s=await It(o,{...a,altBoundary:!0}),c=on(s,r.floating);return{data:{escapedOffsets:c,escaped:rn(c)}}}default:return{}}}}},ka=new Set(["left","top"]);async function mp(e,o){const{placement:r,platform:n,elements:a}=e,s=await(n.isRTL==null?void 0:n.isRTL(a.floating)),c=Ve(r),l=St(r),u=Oe(r)==="y",d=ka.has(c)?-1:1,f=s&&u?-1:1,m=We(o,e);let{mainAxis:y,crossAxis:b,alignmentAxis:S}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return l&&typeof S=="number"&&(b=l==="end"?S*-1:S),u?{x:b*f,y:y*d}:{x:y*d,y:b*f}}const hp=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(o){var r,n;const{x:a,y:s,placement:c,middlewareData:l}=o,u=await mp(o,e);return c===((r=l.offset)==null?void 0:r.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:a+u.x,y:s+u.y,data:{...u,placement:c}}}}},yp=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(o){const{x:r,y:n,placement:a}=o,{mainAxis:s=!0,crossAxis:c=!1,limiter:l={fn:g=>{let{x:w,y:h}=g;return{x:w,y:h}}},...u}=We(e,o),d={x:r,y:n},f=await It(o,u),m=Oe(Ve(a)),y=pr(m);let b=d[y],S=d[m];if(s){const g=y==="y"?"top":"left",w=y==="y"?"bottom":"right",h=b+f[g],$=b-f[w];b=Uo(h,b,$)}if(c){const g=m==="y"?"top":"left",w=m==="y"?"bottom":"right",h=S+f[g],$=S-f[w];S=Uo(h,S,$)}const p=l.fn({...o,[y]:b,[m]:S});return{...p,data:{x:p.x-r,y:p.y-n,enabled:{[y]:s,[m]:c}}}}}},xp=function(e){return e===void 0&&(e={}),{options:e,fn(o){const{x:r,y:n,placement:a,rects:s,middlewareData:c}=o,{offset:l=0,mainAxis:u=!0,crossAxis:d=!0}=We(e,o),f={x:r,y:n},m=Oe(a),y=pr(m);let b=f[y],S=f[m];const p=We(l,o),g=typeof p=="number"?{mainAxis:p,crossAxis:0}:{mainAxis:0,crossAxis:0,...p};if(u){const $=y==="y"?"height":"width",N=s.reference[y]-s.floating[$]+g.mainAxis,v=s.reference[y]+s.reference[$]-g.mainAxis;b<N?b=N:b>v&&(b=v)}if(d){var w,h;const $=y==="y"?"width":"height",N=ka.has(Ve(a)),v=s.reference[m]-s.floating[$]+(N&&((w=c.offset)==null?void 0:w[m])||0)+(N?0:g.crossAxis),A=s.reference[m]+s.reference[$]+(N?0:((h=c.offset)==null?void 0:h[m])||0)-(N?g.crossAxis:0);S<v?S=v:S>A&&(S=A)}return{[y]:b,[m]:S}}}},bp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(o){var r,n;const{placement:a,rects:s,platform:c,elements:l}=o,{apply:u=()=>{},...d}=We(e,o),f=await It(o,d),m=Ve(a),y=St(a),b=Oe(a)==="y",{width:S,height:p}=s.floating;let g,w;m==="top"||m==="bottom"?(g=m,w=y===(await(c.isRTL==null?void 0:c.isRTL(l.floating))?"start":"end")?"left":"right"):(w=m,g=y==="end"?"top":"bottom");const h=p-f.top-f.bottom,$=S-f.left-f.right,N=qe(p-f[g],h),v=qe(S-f[w],$),A=!o.middlewareData.shift;let k=N,T=v;if((r=o.middlewareData.shift)!=null&&r.enabled.x&&(T=$),(n=o.middlewareData.shift)!=null&&n.enabled.y&&(k=h),A&&!y){const C=ke(f.left,0),E=ke(f.right,0),j=ke(f.top,0),z=ke(f.bottom,0);b?T=S-2*(C!==0||E!==0?C+E:ke(f.left,f.right)):k=p-2*(j!==0||z!==0?j+z:ke(f.top,f.bottom))}await u({...o,availableWidth:T,availableHeight:k});const P=await c.getDimensions(l.floating);return S!==P.width||p!==P.height?{reset:{rects:!0}}:{}}}};function bo(){return typeof window<"u"}function kt(e){return Ca(e)?(e.nodeName||"").toLowerCase():"#document"}function Ce(e){var o;return(e==null||(o=e.ownerDocument)==null?void 0:o.defaultView)||window}function Le(e){var o;return(o=(Ca(e)?e.ownerDocument:e.document)||window.document)==null?void 0:o.documentElement}function Ca(e){return bo()?e instanceof Node||e instanceof Ce(e).Node:!1}function De(e){return bo()?e instanceof Element||e instanceof Ce(e).Element:!1}function _e(e){return bo()?e instanceof HTMLElement||e instanceof Ce(e).HTMLElement:!1}function nn(e){return!bo()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ce(e).ShadowRoot}const vp=new Set(["inline","contents"]);function _t(e){const{overflow:o,overflowX:r,overflowY:n,display:a}=ze(e);return/auto|scroll|overlay|hidden|clip/.test(o+n+r)&&!vp.has(a)}const wp=new Set(["table","td","th"]);function $p(e){return wp.has(kt(e))}const jp=[":popover-open",":modal"];function vo(e){return jp.some(o=>{try{return e.matches(o)}catch{return!1}})}const Np=["transform","translate","scale","rotate","perspective"],Sp=["transform","translate","scale","rotate","perspective","filter"],kp=["paint","layout","strict","content"];function mr(e){const o=hr(),r=De(e)?ze(e):e;return Np.some(n=>r[n]?r[n]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!o&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!o&&(r.filter?r.filter!=="none":!1)||Sp.some(n=>(r.willChange||"").includes(n))||kp.some(n=>(r.contain||"").includes(n))}function Cp(e){let o=Ke(e);for(;_e(o)&&!vt(o);){if(mr(o))return o;if(vo(o))return null;o=Ke(o)}return null}function hr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Tp=new Set(["html","body","#document"]);function vt(e){return Tp.has(kt(e))}function ze(e){return Ce(e).getComputedStyle(e)}function wo(e){return De(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ke(e){if(kt(e)==="html")return e;const o=e.assignedSlot||e.parentNode||nn(e)&&e.host||Le(e);return nn(o)?o.host:o}function Ta(e){const o=Ke(e);return vt(o)?e.ownerDocument?e.ownerDocument.body:e.body:_e(o)&&_t(o)?o:Ta(o)}function Dt(e,o,r){var n;o===void 0&&(o=[]),r===void 0&&(r=!0);const a=Ta(e),s=a===((n=e.ownerDocument)==null?void 0:n.body),c=Ce(a);if(s){const l=qo(c);return o.concat(c,c.visualViewport||[],_t(a)?a:[],l&&r?Dt(l):[])}return o.concat(a,Dt(a,[],r))}function qo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Aa(e){const o=ze(e);let r=parseFloat(o.width)||0,n=parseFloat(o.height)||0;const a=_e(e),s=a?e.offsetWidth:r,c=a?e.offsetHeight:n,l=io(r)!==s||io(n)!==c;return l&&(r=s,n=c),{width:r,height:n,$:l}}function yr(e){return De(e)?e:e.contextElement}function bt(e){const o=yr(e);if(!_e(o))return Me(1);const r=o.getBoundingClientRect(),{width:n,height:a,$:s}=Aa(o);let c=(s?io(r.width):r.width)/n,l=(s?io(r.height):r.height)/a;return(!c||!Number.isFinite(c))&&(c=1),(!l||!Number.isFinite(l))&&(l=1),{x:c,y:l}}const Ap=Me(0);function Ea(e){const o=Ce(e);return!hr()||!o.visualViewport?Ap:{x:o.visualViewport.offsetLeft,y:o.visualViewport.offsetTop}}function Ep(e,o,r){return o===void 0&&(o=!1),!r||o&&r!==Ce(e)?!1:o}function nt(e,o,r,n){o===void 0&&(o=!1),r===void 0&&(r=!1);const a=e.getBoundingClientRect(),s=yr(e);let c=Me(1);o&&(n?De(n)&&(c=bt(n)):c=bt(e));const l=Ep(s,r,n)?Ea(s):Me(0);let u=(a.left+l.x)/c.x,d=(a.top+l.y)/c.y,f=a.width/c.x,m=a.height/c.y;if(s){const y=Ce(s),b=n&&De(n)?Ce(n):n;let S=y,p=qo(S);for(;p&&n&&b!==S;){const g=bt(p),w=p.getBoundingClientRect(),h=ze(p),$=w.left+(p.clientLeft+parseFloat(h.paddingLeft))*g.x,N=w.top+(p.clientTop+parseFloat(h.paddingTop))*g.y;u*=g.x,d*=g.y,f*=g.x,m*=g.y,u+=$,d+=N,S=Ce(p),p=qo(S)}}return co({width:f,height:m,x:u,y:d})}function $o(e,o){const r=wo(e).scrollLeft;return o?o.left+r:nt(Le(e)).left+r}function Ra(e,o){const r=e.getBoundingClientRect(),n=r.left+o.scrollLeft-$o(e,r),a=r.top+o.scrollTop;return{x:n,y:a}}function Rp(e){let{elements:o,rect:r,offsetParent:n,strategy:a}=e;const s=a==="fixed",c=Le(n),l=o?vo(o.floating):!1;if(n===c||l&&s)return r;let u={scrollLeft:0,scrollTop:0},d=Me(1);const f=Me(0),m=_e(n);if((m||!m&&!s)&&((kt(n)!=="body"||_t(c))&&(u=wo(n)),_e(n))){const b=nt(n);d=bt(n),f.x=b.x+n.clientLeft,f.y=b.y+n.clientTop}const y=c&&!m&&!s?Ra(c,u):Me(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-u.scrollLeft*d.x+f.x+y.x,y:r.y*d.y-u.scrollTop*d.y+f.y+y.y}}function Ip(e){return Array.from(e.getClientRects())}function Dp(e){const o=Le(e),r=wo(e),n=e.ownerDocument.body,a=ke(o.scrollWidth,o.clientWidth,n.scrollWidth,n.clientWidth),s=ke(o.scrollHeight,o.clientHeight,n.scrollHeight,n.clientHeight);let c=-r.scrollLeft+$o(e);const l=-r.scrollTop;return ze(n).direction==="rtl"&&(c+=ke(o.clientWidth,n.clientWidth)-a),{width:a,height:s,x:c,y:l}}const an=25;function zp(e,o){const r=Ce(e),n=Le(e),a=r.visualViewport;let s=n.clientWidth,c=n.clientHeight,l=0,u=0;if(a){s=a.width,c=a.height;const f=hr();(!f||f&&o==="fixed")&&(l=a.offsetLeft,u=a.offsetTop)}const d=$o(n);if(d<=0){const f=n.ownerDocument,m=f.body,y=getComputedStyle(m),b=f.compatMode==="CSS1Compat"&&parseFloat(y.marginLeft)+parseFloat(y.marginRight)||0,S=Math.abs(n.clientWidth-m.clientWidth-b);S<=an&&(s-=S)}else d<=an&&(s+=d);return{width:s,height:c,x:l,y:u}}const Pp=new Set(["absolute","fixed"]);function Op(e,o){const r=nt(e,!0,o==="fixed"),n=r.top+e.clientTop,a=r.left+e.clientLeft,s=_e(e)?bt(e):Me(1),c=e.clientWidth*s.x,l=e.clientHeight*s.y,u=a*s.x,d=n*s.y;return{width:c,height:l,x:u,y:d}}function sn(e,o,r){let n;if(o==="viewport")n=zp(e,r);else if(o==="document")n=Dp(Le(e));else if(De(o))n=Op(o,r);else{const a=Ea(e);n={x:o.x-a.x,y:o.y-a.y,width:o.width,height:o.height}}return co(n)}function Ia(e,o){const r=Ke(e);return r===o||!De(r)||vt(r)?!1:ze(r).position==="fixed"||Ia(r,o)}function Mp(e,o){const r=o.get(e);if(r)return r;let n=Dt(e,[],!1).filter(l=>De(l)&&kt(l)!=="body"),a=null;const s=ze(e).position==="fixed";let c=s?Ke(e):e;for(;De(c)&&!vt(c);){const l=ze(c),u=mr(c);!u&&l.position==="fixed"&&(a=null),(s?!u&&!a:!u&&l.position==="static"&&!!a&&Pp.has(a.position)||_t(c)&&!u&&Ia(e,c))?n=n.filter(f=>f!==c):a=l,c=Ke(c)}return o.set(e,n),n}function _p(e){let{element:o,boundary:r,rootBoundary:n,strategy:a}=e;const c=[...r==="clippingAncestors"?vo(o)?[]:Mp(o,this._c):[].concat(r),n],l=c[0],u=c.reduce((d,f)=>{const m=sn(o,f,a);return d.top=ke(m.top,d.top),d.right=qe(m.right,d.right),d.bottom=qe(m.bottom,d.bottom),d.left=ke(m.left,d.left),d},sn(o,l,a));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Lp(e){const{width:o,height:r}=Aa(e);return{width:o,height:r}}function Fp(e,o,r){const n=_e(o),a=Le(o),s=r==="fixed",c=nt(e,!0,s,o);let l={scrollLeft:0,scrollTop:0};const u=Me(0);function d(){u.x=$o(a)}if(n||!n&&!s)if((kt(o)!=="body"||_t(a))&&(l=wo(o)),n){const b=nt(o,!0,s,o);u.x=b.x+o.clientLeft,u.y=b.y+o.clientTop}else a&&d();s&&!n&&a&&d();const f=a&&!n&&!s?Ra(a,l):Me(0),m=c.left+l.scrollLeft-u.x-f.x,y=c.top+l.scrollTop-u.y-f.y;return{x:m,y,width:c.width,height:c.height}}function Oo(e){return ze(e).position==="static"}function ln(e,o){if(!_e(e)||ze(e).position==="fixed")return null;if(o)return o(e);let r=e.offsetParent;return Le(e)===r&&(r=r.ownerDocument.body),r}function Da(e,o){const r=Ce(e);if(vo(e))return r;if(!_e(e)){let a=Ke(e);for(;a&&!vt(a);){if(De(a)&&!Oo(a))return a;a=Ke(a)}return r}let n=ln(e,o);for(;n&&$p(n)&&Oo(n);)n=ln(n,o);return n&&vt(n)&&Oo(n)&&!mr(n)?r:n||Cp(e)||r}const Wp=async function(e){const o=this.getOffsetParent||Da,r=this.getDimensions,n=await r(e.floating);return{reference:Fp(e.reference,await o(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Vp(e){return ze(e).direction==="rtl"}const Bp={convertOffsetParentRelativeRectToViewportRelativeRect:Rp,getDocumentElement:Le,getClippingRect:_p,getOffsetParent:Da,getElementRects:Wp,getClientRects:Ip,getDimensions:Lp,getScale:bt,isElement:De,isRTL:Vp};function za(e,o){return e.x===o.x&&e.y===o.y&&e.width===o.width&&e.height===o.height}function Hp(e,o){let r=null,n;const a=Le(e);function s(){var l;clearTimeout(n),(l=r)==null||l.disconnect(),r=null}function c(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),s();const d=e.getBoundingClientRect(),{left:f,top:m,width:y,height:b}=d;if(l||o(),!y||!b)return;const S=Kt(m),p=Kt(a.clientWidth-(f+y)),g=Kt(a.clientHeight-(m+b)),w=Kt(f),$={rootMargin:-S+"px "+-p+"px "+-g+"px "+-w+"px",threshold:ke(0,qe(1,u))||1};let N=!0;function v(A){const k=A[0].intersectionRatio;if(k!==u){if(!N)return c();k?c(!1,k):n=setTimeout(()=>{c(!1,1e-7)},1e3)}k===1&&!za(d,e.getBoundingClientRect())&&c(),N=!1}try{r=new IntersectionObserver(v,{...$,root:a.ownerDocument})}catch{r=new IntersectionObserver(v,$)}r.observe(e)}return c(!0),s}function Up(e,o,r,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:c=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=n,d=yr(e),f=a||s?[...d?Dt(d):[],...Dt(o)]:[];f.forEach(w=>{a&&w.addEventListener("scroll",r,{passive:!0}),s&&w.addEventListener("resize",r)});const m=d&&l?Hp(d,r):null;let y=-1,b=null;c&&(b=new ResizeObserver(w=>{let[h]=w;h&&h.target===d&&b&&(b.unobserve(o),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var $;($=b)==null||$.observe(o)})),r()}),d&&!u&&b.observe(d),b.observe(o));let S,p=u?nt(e):null;u&&g();function g(){const w=nt(e);p&&!za(p,w)&&r(),p=w,S=requestAnimationFrame(g)}return r(),()=>{var w;f.forEach(h=>{a&&h.removeEventListener("scroll",r),s&&h.removeEventListener("resize",r)}),m==null||m(),(w=b)==null||w.disconnect(),b=null,u&&cancelAnimationFrame(S)}}const Yp=hp,qp=yp,Kp=gp,Xp=bp,Gp=fp,cn=pp,Zp=xp,Qp=(e,o,r)=>{const n=new Map,a={platform:Bp,...r},s={...a.platform,_c:n};return up(e,o,{...a,platform:s})};var Jp=typeof document<"u",eg=function(){},eo=Jp?i.useLayoutEffect:eg;function uo(e,o){if(e===o)return!0;if(typeof e!=typeof o)return!1;if(typeof e=="function"&&e.toString()===o.toString())return!0;let r,n,a;if(e&&o&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==o.length)return!1;for(n=r;n--!==0;)if(!uo(e[n],o[n]))return!1;return!0}if(a=Object.keys(e),r=a.length,r!==Object.keys(o).length)return!1;for(n=r;n--!==0;)if(!{}.hasOwnProperty.call(o,a[n]))return!1;for(n=r;n--!==0;){const s=a[n];if(!(s==="_owner"&&e.$$typeof)&&!uo(e[s],o[s]))return!1}return!0}return e!==e&&o!==o}function Pa(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function dn(e,o){const r=Pa(e);return Math.round(o*r)/r}function Mo(e){const o=i.useRef(e);return eo(()=>{o.current=e}),o}function tg(e){e===void 0&&(e={});const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:a,elements:{reference:s,floating:c}={},transform:l=!0,whileElementsMounted:u,open:d}=e,[f,m]=i.useState({x:0,y:0,strategy:r,placement:o,middlewareData:{},isPositioned:!1}),[y,b]=i.useState(n);uo(y,n)||b(n);const[S,p]=i.useState(null),[g,w]=i.useState(null),h=i.useCallback(D=>{D!==A.current&&(A.current=D,p(D))},[]),$=i.useCallback(D=>{D!==k.current&&(k.current=D,w(D))},[]),N=s||S,v=c||g,A=i.useRef(null),k=i.useRef(null),T=i.useRef(f),P=u!=null,C=Mo(u),E=Mo(a),j=Mo(d),z=i.useCallback(()=>{if(!A.current||!k.current)return;const D={placement:o,strategy:r,middleware:y};E.current&&(D.platform=E.current),Qp(A.current,k.current,D).then(K=>{const ne={...K,isPositioned:j.current!==!1};O.current&&!uo(T.current,ne)&&(T.current=ne,zt.flushSync(()=>{m(ne)}))})},[y,o,r,E,j]);eo(()=>{d===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,m(D=>({...D,isPositioned:!1})))},[d]);const O=i.useRef(!1);eo(()=>(O.current=!0,()=>{O.current=!1}),[]),eo(()=>{if(N&&(A.current=N),v&&(k.current=v),N&&v){if(C.current)return C.current(N,v,z);z()}},[N,v,z,C,P]);const H=i.useMemo(()=>({reference:A,floating:k,setReference:h,setFloating:$}),[h,$]),F=i.useMemo(()=>({reference:N,floating:v}),[N,v]),q=i.useMemo(()=>{const D={position:r,left:0,top:0};if(!F.floating)return D;const K=dn(F.floating,f.x),ne=dn(F.floating,f.y);return l?{...D,transform:"translate("+K+"px, "+ne+"px)",...Pa(F.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:K,top:ne}},[r,l,F.floating,f.x,f.y]);return i.useMemo(()=>({...f,update:z,refs:H,elements:F,floatingStyles:q}),[f,z,H,F,q])}const og=e=>{function o(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:n,padding:a}=typeof e=="function"?e(r):e;return n&&o(n)?n.current!=null?cn({element:n.current,padding:a}).fn(r):{}:n?cn({element:n,padding:a}).fn(r):{}}}},rg=(e,o)=>({...Yp(e),options:[e,o]}),ng=(e,o)=>({...qp(e),options:[e,o]}),ag=(e,o)=>({...Zp(e),options:[e,o]}),sg=(e,o)=>({...Kp(e),options:[e,o]}),ig=(e,o)=>({...Xp(e),options:[e,o]}),lg=(e,o)=>({...Gp(e),options:[e,o]}),cg=(e,o)=>({...og(e),options:[e,o]});var dg="Arrow",Oa=i.forwardRef((e,o)=>{const{children:r,width:n=10,height:a=5,...s}=e;return t.jsx(re.svg,{...s,ref:o,width:n,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:t.jsx("polygon",{points:"0,0 30,0 15,10"})})});Oa.displayName=dg;var ug=Oa;function pg(e){const[o,r]=i.useState(void 0);return ve(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const s=a[0];let c,l;if("borderBoxSize"in s){const u=s.borderBoxSize,d=Array.isArray(u)?u[0]:u;c=d.inlineSize,l=d.blockSize}else c=e.offsetWidth,l=e.offsetHeight;r({width:c,height:l})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),o}var xr="Popper",[Ma,_a]=Ot(xr),[gg,La]=Ma(xr),Fa=e=>{const{__scopePopper:o,children:r}=e,[n,a]=i.useState(null);return t.jsx(gg,{scope:o,anchor:n,onAnchorChange:a,children:r})};Fa.displayName=xr;var Wa="PopperAnchor",Va=i.forwardRef((e,o)=>{const{__scopePopper:r,virtualRef:n,...a}=e,s=La(Wa,r),c=i.useRef(null),l=de(o,c),u=i.useRef(null);return i.useEffect(()=>{const d=u.current;u.current=(n==null?void 0:n.current)||c.current,d!==u.current&&s.onAnchorChange(u.current)}),n?null:t.jsx(re.div,{...a,ref:l})});Va.displayName=Wa;var br="PopperContent",[fg,mg]=Ma(br),Ba=i.forwardRef((e,o)=>{var x,R,V,M,I,B;const{__scopePopper:r,side:n="bottom",sideOffset:a=0,align:s="center",alignOffset:c=0,arrowPadding:l=0,avoidCollisions:u=!0,collisionBoundary:d=[],collisionPadding:f=0,sticky:m="partial",hideWhenDetached:y=!1,updatePositionStrategy:b="optimized",onPlaced:S,...p}=e,g=La(br,r),[w,h]=i.useState(null),$=de(o,oe=>h(oe)),[N,v]=i.useState(null),A=pg(N),k=(A==null?void 0:A.width)??0,T=(A==null?void 0:A.height)??0,P=n+(s!=="center"?"-"+s:""),C=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},E=Array.isArray(d)?d:[d],j=E.length>0,z={padding:C,boundary:E.filter(yg),altBoundary:j},{refs:O,floatingStyles:H,placement:F,isPositioned:q,middlewareData:D}=tg({strategy:"fixed",placement:P,whileElementsMounted:(...oe)=>Up(...oe,{animationFrame:b==="always"}),elements:{reference:g.anchor},middleware:[rg({mainAxis:a+T,alignmentAxis:c}),u&&ng({mainAxis:!0,crossAxis:!1,limiter:m==="partial"?ag():void 0,...z}),u&&sg({...z}),ig({...z,apply:({elements:oe,rects:we,availableWidth:Se,availableHeight:Te})=>{const{width:Tt,height:ri}=we.reference,Ft=oe.floating.style;Ft.setProperty("--radix-popper-available-width",`${Se}px`),Ft.setProperty("--radix-popper-available-height",`${Te}px`),Ft.setProperty("--radix-popper-anchor-width",`${Tt}px`),Ft.setProperty("--radix-popper-anchor-height",`${ri}px`)}}),N&&cg({element:N,padding:l}),xg({arrowWidth:k,arrowHeight:T}),y&&lg({strategy:"referenceHidden",...z})]}),[K,ne]=Ya(F),fe=Ie(S);ve(()=>{q&&(fe==null||fe())},[q,fe]);const me=(x=D.arrow)==null?void 0:x.x,ae=(R=D.arrow)==null?void 0:R.y,se=((V=D.arrow)==null?void 0:V.centerOffset)!==0,[pe,Ne]=i.useState();return ve(()=>{w&&Ne(window.getComputedStyle(w).zIndex)},[w]),t.jsx("div",{ref:O.setFloating,"data-radix-popper-content-wrapper":"",style:{...H,transform:q?H.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:pe,"--radix-popper-transform-origin":[(M=D.transformOrigin)==null?void 0:M.x,(I=D.transformOrigin)==null?void 0:I.y].join(" "),...((B=D.hide)==null?void 0:B.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:t.jsx(fg,{scope:r,placedSide:K,onArrowChange:v,arrowX:me,arrowY:ae,shouldHideArrow:se,children:t.jsx(re.div,{"data-side":K,"data-align":ne,...p,ref:$,style:{...p.style,animation:q?void 0:"none"}})})})});Ba.displayName=br;var Ha="PopperArrow",hg={top:"bottom",right:"left",bottom:"top",left:"right"},Ua=i.forwardRef(function(o,r){const{__scopePopper:n,...a}=o,s=mg(Ha,n),c=hg[s.placedSide];return t.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[c]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:t.jsx(ug,{...a,ref:r,style:{...a.style,display:"block"}})})});Ua.displayName=Ha;function yg(e){return e!==null}var xg=e=>({name:"transformOrigin",options:e,fn(o){var g,w,h;const{placement:r,rects:n,middlewareData:a}=o,c=((g=a.arrow)==null?void 0:g.centerOffset)!==0,l=c?0:e.arrowWidth,u=c?0:e.arrowHeight,[d,f]=Ya(r),m={start:"0%",center:"50%",end:"100%"}[f],y=(((w=a.arrow)==null?void 0:w.x)??0)+l/2,b=(((h=a.arrow)==null?void 0:h.y)??0)+u/2;let S="",p="";return d==="bottom"?(S=c?m:`${y}px`,p=`${-u}px`):d==="top"?(S=c?m:`${y}px`,p=`${n.floating.height+u}px`):d==="right"?(S=`${-u}px`,p=c?m:`${b}px`):d==="left"&&(S=`${n.floating.width+u}px`,p=c?m:`${b}px`),{data:{x:S,y:p}}}});function Ya(e){const[o,r="center"]=e.split("-");return[o,r]}var bg=Fa,vg=Va,wg=Ba,$g=Ua;function jg(e){const o=Ng(e),r=i.forwardRef((n,a)=>{const{children:s,...c}=n,l=i.Children.toArray(s),u=l.find(kg);if(u){const d=u.props.children,f=l.map(m=>m===u?i.Children.count(d)>1?i.Children.only(null):i.isValidElement(d)?d.props.children:null:m);return t.jsx(o,{...c,ref:a,children:i.isValidElement(d)?i.cloneElement(d,void 0,f):null})}return t.jsx(o,{...c,ref:a,children:s})});return r.displayName=`${e}.Slot`,r}function Ng(e){const o=i.forwardRef((r,n)=>{const{children:a,...s}=r;if(i.isValidElement(a)){const c=Tg(a),l=Cg(s,a.props);return a.type!==i.Fragment&&(l.ref=n?wt(n,c):c),i.cloneElement(a,l)}return i.Children.count(a)>1?i.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var Sg=Symbol("radix.slottable");function kg(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Sg}function Cg(e,o){const r={...o};for(const n in o){const a=e[n],s=o[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...l)=>{const u=s(...l);return a(...l),u}:a&&(r[n]=a):n==="style"?r[n]={...a,...s}:n==="className"&&(r[n]=[a,s].filter(Boolean).join(" "))}return{...e,...r}}function Tg(e){var n,a;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=o&&"isReactWarning"in o&&o.isReactWarning;return r?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=o&&"isReactWarning"in o&&o.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Ag(e){const o=i.useRef({value:e,previous:e});return i.useMemo(()=>(o.current.value!==e&&(o.current.previous=o.current.value,o.current.value=e),o.current.previous),[e])}var qa=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Eg="VisuallyHidden",vr=i.forwardRef((e,o)=>t.jsx(re.span,{...e,ref:o,style:{...qa,...e.style}}));vr.displayName=Eg;var Rg=[" ","Enter","ArrowUp","ArrowDown"],Ig=[" ","Enter"],at="Select",[jo,No,Dg]=Na(at),[Ct]=Ot(at,[Dg,_a]),So=_a(),[zg,Xe]=Ct(at),[Pg,Og]=Ct(at),Ka=e=>{const{__scopeSelect:o,children:r,open:n,defaultOpen:a,onOpenChange:s,value:c,defaultValue:l,onValueChange:u,dir:d,name:f,autoComplete:m,disabled:y,required:b,form:S}=e,p=So(o),[g,w]=i.useState(null),[h,$]=i.useState(null),[N,v]=i.useState(!1),A=Ju(d),[k,T]=ao({prop:n,defaultProp:a??!1,onChange:s,caller:at}),[P,C]=ao({prop:c,defaultProp:l,onChange:u,caller:at}),E=i.useRef(null),j=g?S||!!g.closest("form"):!0,[z,O]=i.useState(new Set),H=Array.from(z).map(F=>F.props.value).join(";");return t.jsx(bg,{...p,children:t.jsxs(zg,{required:b,scope:o,trigger:g,onTriggerChange:w,valueNode:h,onValueNodeChange:$,valueNodeHasChildren:N,onValueNodeHasChildrenChange:v,contentId:yt(),value:P,onValueChange:C,open:k,onOpenChange:T,dir:A,triggerPointerDownPosRef:E,disabled:y,children:[t.jsx(jo.Provider,{scope:o,children:t.jsx(Pg,{scope:e.__scopeSelect,onNativeOptionAdd:i.useCallback(F=>{O(q=>new Set(q).add(F))},[]),onNativeOptionRemove:i.useCallback(F=>{O(q=>{const D=new Set(q);return D.delete(F),D})},[]),children:r})}),j?t.jsxs(xs,{"aria-hidden":!0,required:b,tabIndex:-1,name:f,autoComplete:m,value:P,onChange:F=>C(F.target.value),disabled:y,form:S,children:[P===void 0?t.jsx("option",{value:""}):null,Array.from(z)]},H):null]})})};Ka.displayName=at;var Xa="SelectTrigger",Ga=i.forwardRef((e,o)=>{const{__scopeSelect:r,disabled:n=!1,...a}=e,s=So(r),c=Xe(Xa,r),l=c.disabled||n,u=de(o,c.onTriggerChange),d=No(r),f=i.useRef("touch"),[m,y,b]=vs(p=>{const g=d().filter($=>!$.disabled),w=g.find($=>$.value===c.value),h=ws(g,p,w);h!==void 0&&c.onValueChange(h.value)}),S=p=>{l||(c.onOpenChange(!0),b()),p&&(c.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)})};return t.jsx(vg,{asChild:!0,...s,children:t.jsx(re.button,{type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":bs(c.value)?"":void 0,...a,ref:u,onClick:ee(a.onClick,p=>{p.currentTarget.focus(),f.current!=="mouse"&&S(p)}),onPointerDown:ee(a.onPointerDown,p=>{f.current=p.pointerType;const g=p.target;g.hasPointerCapture(p.pointerId)&&g.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&p.pointerType==="mouse"&&(S(p),p.preventDefault())}),onKeyDown:ee(a.onKeyDown,p=>{const g=m.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&y(p.key),!(g&&p.key===" ")&&Rg.includes(p.key)&&(S(),p.preventDefault())})})})});Ga.displayName=Xa;var Za="SelectValue",Qa=i.forwardRef((e,o)=>{const{__scopeSelect:r,className:n,style:a,children:s,placeholder:c="",...l}=e,u=Xe(Za,r),{onValueNodeHasChildrenChange:d}=u,f=s!==void 0,m=de(o,u.onValueNodeChange);return ve(()=>{d(f)},[d,f]),t.jsx(re.span,{...l,ref:m,style:{pointerEvents:"none"},children:bs(u.value)?t.jsx(t.Fragment,{children:c}):s})});Qa.displayName=Za;var Mg="SelectIcon",Ja=i.forwardRef((e,o)=>{const{__scopeSelect:r,children:n,...a}=e;return t.jsx(re.span,{"aria-hidden":!0,...a,ref:o,children:n||"▼"})});Ja.displayName=Mg;var _g="SelectPortal",es=e=>t.jsx(ho,{asChild:!0,...e});es.displayName=_g;var st="SelectContent",ts=i.forwardRef((e,o)=>{const r=Xe(st,e.__scopeSelect),[n,a]=i.useState();if(ve(()=>{a(new DocumentFragment)},[]),!r.open){const s=n;return s?zt.createPortal(t.jsx(os,{scope:e.__scopeSelect,children:t.jsx(jo.Slot,{scope:e.__scopeSelect,children:t.jsx("div",{children:e.children})})}),s):null}return t.jsx(rs,{...e,ref:o})});ts.displayName=st;var Re=10,[os,Ge]=Ct(st),Lg="SelectContentImpl",Fg=jg("SelectContent.RemoveScroll"),rs=i.forwardRef((e,o)=>{const{__scopeSelect:r,position:n="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:s,onPointerDownOutside:c,side:l,sideOffset:u,align:d,alignOffset:f,arrowPadding:m,collisionBoundary:y,collisionPadding:b,sticky:S,hideWhenDetached:p,avoidCollisions:g,...w}=e,h=Xe(st,r),[$,N]=i.useState(null),[v,A]=i.useState(null),k=de(o,x=>N(x)),[T,P]=i.useState(null),[C,E]=i.useState(null),j=No(r),[z,O]=i.useState(!1),H=i.useRef(!1);i.useEffect(()=>{if($)return ta($)},[$]),qn();const F=i.useCallback(x=>{const[R,...V]=j().map(B=>B.ref.current),[M]=V.slice(-1),I=document.activeElement;for(const B of x)if(B===I||(B==null||B.scrollIntoView({block:"nearest"}),B===R&&v&&(v.scrollTop=0),B===M&&v&&(v.scrollTop=v.scrollHeight),B==null||B.focus(),document.activeElement!==I))return},[j,v]),q=i.useCallback(()=>F([T,$]),[F,T,$]);i.useEffect(()=>{z&&q()},[z,q]);const{onOpenChange:D,triggerPointerDownPosRef:K}=h;i.useEffect(()=>{if($){let x={x:0,y:0};const R=M=>{var I,B;x={x:Math.abs(Math.round(M.pageX)-(((I=K.current)==null?void 0:I.x)??0)),y:Math.abs(Math.round(M.pageY)-(((B=K.current)==null?void 0:B.y)??0))}},V=M=>{x.x<=10&&x.y<=10?M.preventDefault():$.contains(M.target)||D(!1),document.removeEventListener("pointermove",R),K.current=null};return K.current!==null&&(document.addEventListener("pointermove",R),document.addEventListener("pointerup",V,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",R),document.removeEventListener("pointerup",V,{capture:!0})}}},[$,D,K]),i.useEffect(()=>{const x=()=>D(!1);return window.addEventListener("blur",x),window.addEventListener("resize",x),()=>{window.removeEventListener("blur",x),window.removeEventListener("resize",x)}},[D]);const[ne,fe]=vs(x=>{const R=j().filter(I=>!I.disabled),V=R.find(I=>I.ref.current===document.activeElement),M=ws(R,x,V);M&&setTimeout(()=>M.ref.current.focus())}),me=i.useCallback((x,R,V)=>{const M=!H.current&&!V;(h.value!==void 0&&h.value===R||M)&&(P(x),M&&(H.current=!0))},[h.value]),ae=i.useCallback(()=>$==null?void 0:$.focus(),[$]),se=i.useCallback((x,R,V)=>{const M=!H.current&&!V;(h.value!==void 0&&h.value===R||M)&&E(x)},[h.value]),pe=n==="popper"?Ko:ns,Ne=pe===Ko?{side:l,sideOffset:u,align:d,alignOffset:f,arrowPadding:m,collisionBoundary:y,collisionPadding:b,sticky:S,hideWhenDetached:p,avoidCollisions:g}:{};return t.jsx(os,{scope:r,content:$,viewport:v,onViewportChange:A,itemRefCallback:me,selectedItem:T,onItemLeave:ae,itemTextRefCallback:se,focusSelectedItem:q,selectedItemText:C,position:n,isPositioned:z,searchRef:ne,children:t.jsx(lr,{as:Fg,allowPinchZoom:!0,children:t.jsx(ir,{asChild:!0,trapped:h.open,onMountAutoFocus:x=>{x.preventDefault()},onUnmountAutoFocus:ee(a,x=>{var R;(R=h.trigger)==null||R.focus({preventScroll:!0}),x.preventDefault()}),children:t.jsx(mo,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:x=>x.preventDefault(),onDismiss:()=>h.onOpenChange(!1),children:t.jsx(pe,{role:"listbox",id:h.contentId,"data-state":h.open?"open":"closed",dir:h.dir,onContextMenu:x=>x.preventDefault(),...w,...Ne,onPlaced:()=>O(!0),ref:k,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:ee(w.onKeyDown,x=>{const R=x.ctrlKey||x.altKey||x.metaKey;if(x.key==="Tab"&&x.preventDefault(),!R&&x.key.length===1&&fe(x.key),["ArrowUp","ArrowDown","Home","End"].includes(x.key)){let M=j().filter(I=>!I.disabled).map(I=>I.ref.current);if(["ArrowUp","End"].includes(x.key)&&(M=M.slice().reverse()),["ArrowUp","ArrowDown"].includes(x.key)){const I=x.target,B=M.indexOf(I);M=M.slice(B+1)}setTimeout(()=>F(M)),x.preventDefault()}})})})})})})});rs.displayName=Lg;var Wg="SelectItemAlignedPosition",ns=i.forwardRef((e,o)=>{const{__scopeSelect:r,onPlaced:n,...a}=e,s=Xe(st,r),c=Ge(st,r),[l,u]=i.useState(null),[d,f]=i.useState(null),m=de(o,k=>f(k)),y=No(r),b=i.useRef(!1),S=i.useRef(!0),{viewport:p,selectedItem:g,selectedItemText:w,focusSelectedItem:h}=c,$=i.useCallback(()=>{if(s.trigger&&s.valueNode&&l&&d&&p&&g&&w){const k=s.trigger.getBoundingClientRect(),T=d.getBoundingClientRect(),P=s.valueNode.getBoundingClientRect(),C=w.getBoundingClientRect();if(s.dir!=="rtl"){const I=C.left-T.left,B=P.left-I,oe=k.left-B,we=k.width+oe,Se=Math.max(we,T.width),Te=window.innerWidth-Re,Tt=Zr(B,[Re,Math.max(Re,Te-Se)]);l.style.minWidth=we+"px",l.style.left=Tt+"px"}else{const I=T.right-C.right,B=window.innerWidth-P.right-I,oe=window.innerWidth-k.right-B,we=k.width+oe,Se=Math.max(we,T.width),Te=window.innerWidth-Re,Tt=Zr(B,[Re,Math.max(Re,Te-Se)]);l.style.minWidth=we+"px",l.style.right=Tt+"px"}const E=y(),j=window.innerHeight-Re*2,z=p.scrollHeight,O=window.getComputedStyle(d),H=parseInt(O.borderTopWidth,10),F=parseInt(O.paddingTop,10),q=parseInt(O.borderBottomWidth,10),D=parseInt(O.paddingBottom,10),K=H+F+z+D+q,ne=Math.min(g.offsetHeight*5,K),fe=window.getComputedStyle(p),me=parseInt(fe.paddingTop,10),ae=parseInt(fe.paddingBottom,10),se=k.top+k.height/2-Re,pe=j-se,Ne=g.offsetHeight/2,x=g.offsetTop+Ne,R=H+F+x,V=K-R;if(R<=se){const I=E.length>0&&g===E[E.length-1].ref.current;l.style.bottom="0px";const B=d.clientHeight-p.offsetTop-p.offsetHeight,oe=Math.max(pe,Ne+(I?ae:0)+B+q),we=R+oe;l.style.height=we+"px"}else{const I=E.length>0&&g===E[0].ref.current;l.style.top="0px";const oe=Math.max(se,H+p.offsetTop+(I?me:0)+Ne)+V;l.style.height=oe+"px",p.scrollTop=R-se+p.offsetTop}l.style.margin=`${Re}px 0`,l.style.minHeight=ne+"px",l.style.maxHeight=j+"px",n==null||n(),requestAnimationFrame(()=>b.current=!0)}},[y,s.trigger,s.valueNode,l,d,p,g,w,s.dir,n]);ve(()=>$(),[$]);const[N,v]=i.useState();ve(()=>{d&&v(window.getComputedStyle(d).zIndex)},[d]);const A=i.useCallback(k=>{k&&S.current===!0&&($(),h==null||h(),S.current=!1)},[$,h]);return t.jsx(Bg,{scope:r,contentWrapper:l,shouldExpandOnScrollRef:b,onScrollButtonChange:A,children:t.jsx("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:N},children:t.jsx(re.div,{...a,ref:m,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});ns.displayName=Wg;var Vg="SelectPopperPosition",Ko=i.forwardRef((e,o)=>{const{__scopeSelect:r,align:n="start",collisionPadding:a=Re,...s}=e,c=So(r);return t.jsx(wg,{...c,...s,ref:o,align:n,collisionPadding:a,style:{boxSizing:"border-box",...s.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Ko.displayName=Vg;var[Bg,wr]=Ct(st,{}),Xo="SelectViewport",as=i.forwardRef((e,o)=>{const{__scopeSelect:r,nonce:n,...a}=e,s=Ge(Xo,r),c=wr(Xo,r),l=de(o,s.onViewportChange),u=i.useRef(0);return t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:n}),t.jsx(jo.Slot,{scope:r,children:t.jsx(re.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:l,style:{position:"relative",flex:1,overflow:"hidden auto",...a.style},onScroll:ee(a.onScroll,d=>{const f=d.currentTarget,{contentWrapper:m,shouldExpandOnScrollRef:y}=c;if(y!=null&&y.current&&m){const b=Math.abs(u.current-f.scrollTop);if(b>0){const S=window.innerHeight-Re*2,p=parseFloat(m.style.minHeight),g=parseFloat(m.style.height),w=Math.max(p,g);if(w<S){const h=w+b,$=Math.min(S,h),N=h-$;m.style.height=$+"px",m.style.bottom==="0px"&&(f.scrollTop=N>0?N:0,m.style.justifyContent="flex-end")}}}u.current=f.scrollTop})})})]})});as.displayName=Xo;var ss="SelectGroup",[Hg,Ug]=Ct(ss),Yg=i.forwardRef((e,o)=>{const{__scopeSelect:r,...n}=e,a=yt();return t.jsx(Hg,{scope:r,id:a,children:t.jsx(re.div,{role:"group","aria-labelledby":a,...n,ref:o})})});Yg.displayName=ss;var is="SelectLabel",ls=i.forwardRef((e,o)=>{const{__scopeSelect:r,...n}=e,a=Ug(is,r);return t.jsx(re.div,{id:a.id,...n,ref:o})});ls.displayName=is;var po="SelectItem",[qg,cs]=Ct(po),ds=i.forwardRef((e,o)=>{const{__scopeSelect:r,value:n,disabled:a=!1,textValue:s,...c}=e,l=Xe(po,r),u=Ge(po,r),d=l.value===n,[f,m]=i.useState(s??""),[y,b]=i.useState(!1),S=de(o,h=>{var $;return($=u.itemRefCallback)==null?void 0:$.call(u,h,n,a)}),p=yt(),g=i.useRef("touch"),w=()=>{a||(l.onValueChange(n),l.onOpenChange(!1))};if(n==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return t.jsx(qg,{scope:r,value:n,disabled:a,textId:p,isSelected:d,onItemTextChange:i.useCallback(h=>{m($=>$||((h==null?void 0:h.textContent)??"").trim())},[]),children:t.jsx(jo.ItemSlot,{scope:r,value:n,disabled:a,textValue:f,children:t.jsx(re.div,{role:"option","aria-labelledby":p,"data-highlighted":y?"":void 0,"aria-selected":d&&y,"data-state":d?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...c,ref:S,onFocus:ee(c.onFocus,()=>b(!0)),onBlur:ee(c.onBlur,()=>b(!1)),onClick:ee(c.onClick,()=>{g.current!=="mouse"&&w()}),onPointerUp:ee(c.onPointerUp,()=>{g.current==="mouse"&&w()}),onPointerDown:ee(c.onPointerDown,h=>{g.current=h.pointerType}),onPointerMove:ee(c.onPointerMove,h=>{var $;g.current=h.pointerType,a?($=u.onItemLeave)==null||$.call(u):g.current==="mouse"&&h.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ee(c.onPointerLeave,h=>{var $;h.currentTarget===document.activeElement&&(($=u.onItemLeave)==null||$.call(u))}),onKeyDown:ee(c.onKeyDown,h=>{var N;((N=u.searchRef)==null?void 0:N.current)!==""&&h.key===" "||(Ig.includes(h.key)&&w(),h.key===" "&&h.preventDefault())})})})})});ds.displayName=po;var Et="SelectItemText",us=i.forwardRef((e,o)=>{const{__scopeSelect:r,className:n,style:a,...s}=e,c=Xe(Et,r),l=Ge(Et,r),u=cs(Et,r),d=Og(Et,r),[f,m]=i.useState(null),y=de(o,w=>m(w),u.onItemTextChange,w=>{var h;return(h=l.itemTextRefCallback)==null?void 0:h.call(l,w,u.value,u.disabled)}),b=f==null?void 0:f.textContent,S=i.useMemo(()=>t.jsx("option",{value:u.value,disabled:u.disabled,children:b},u.value),[u.disabled,u.value,b]),{onNativeOptionAdd:p,onNativeOptionRemove:g}=d;return ve(()=>(p(S),()=>g(S)),[p,g,S]),t.jsxs(t.Fragment,{children:[t.jsx(re.span,{id:u.textId,...s,ref:y}),u.isSelected&&c.valueNode&&!c.valueNodeHasChildren?zt.createPortal(s.children,c.valueNode):null]})});us.displayName=Et;var ps="SelectItemIndicator",gs=i.forwardRef((e,o)=>{const{__scopeSelect:r,...n}=e;return cs(ps,r).isSelected?t.jsx(re.span,{"aria-hidden":!0,...n,ref:o}):null});gs.displayName=ps;var Go="SelectScrollUpButton",fs=i.forwardRef((e,o)=>{const r=Ge(Go,e.__scopeSelect),n=wr(Go,e.__scopeSelect),[a,s]=i.useState(!1),c=de(o,n.onScrollButtonChange);return ve(()=>{if(r.viewport&&r.isPositioned){let l=function(){const d=u.scrollTop>0;s(d)};const u=r.viewport;return l(),u.addEventListener("scroll",l),()=>u.removeEventListener("scroll",l)}},[r.viewport,r.isPositioned]),a?t.jsx(hs,{...e,ref:c,onAutoScroll:()=>{const{viewport:l,selectedItem:u}=r;l&&u&&(l.scrollTop=l.scrollTop-u.offsetHeight)}}):null});fs.displayName=Go;var Zo="SelectScrollDownButton",ms=i.forwardRef((e,o)=>{const r=Ge(Zo,e.__scopeSelect),n=wr(Zo,e.__scopeSelect),[a,s]=i.useState(!1),c=de(o,n.onScrollButtonChange);return ve(()=>{if(r.viewport&&r.isPositioned){let l=function(){const d=u.scrollHeight-u.clientHeight,f=Math.ceil(u.scrollTop)<d;s(f)};const u=r.viewport;return l(),u.addEventListener("scroll",l),()=>u.removeEventListener("scroll",l)}},[r.viewport,r.isPositioned]),a?t.jsx(hs,{...e,ref:c,onAutoScroll:()=>{const{viewport:l,selectedItem:u}=r;l&&u&&(l.scrollTop=l.scrollTop+u.offsetHeight)}}):null});ms.displayName=Zo;var hs=i.forwardRef((e,o)=>{const{__scopeSelect:r,onAutoScroll:n,...a}=e,s=Ge("SelectScrollButton",r),c=i.useRef(null),l=No(r),u=i.useCallback(()=>{c.current!==null&&(window.clearInterval(c.current),c.current=null)},[]);return i.useEffect(()=>()=>u(),[u]),ve(()=>{var f;const d=l().find(m=>m.ref.current===document.activeElement);(f=d==null?void 0:d.ref.current)==null||f.scrollIntoView({block:"nearest"})},[l]),t.jsx(re.div,{"aria-hidden":!0,...a,ref:o,style:{flexShrink:0,...a.style},onPointerDown:ee(a.onPointerDown,()=>{c.current===null&&(c.current=window.setInterval(n,50))}),onPointerMove:ee(a.onPointerMove,()=>{var d;(d=s.onItemLeave)==null||d.call(s),c.current===null&&(c.current=window.setInterval(n,50))}),onPointerLeave:ee(a.onPointerLeave,()=>{u()})})}),Kg="SelectSeparator",ys=i.forwardRef((e,o)=>{const{__scopeSelect:r,...n}=e;return t.jsx(re.div,{"aria-hidden":!0,...n,ref:o})});ys.displayName=Kg;var Qo="SelectArrow",Xg=i.forwardRef((e,o)=>{const{__scopeSelect:r,...n}=e,a=So(r),s=Xe(Qo,r),c=Ge(Qo,r);return s.open&&c.position==="popper"?t.jsx($g,{...a,...n,ref:o}):null});Xg.displayName=Qo;var Gg="SelectBubbleInput",xs=i.forwardRef(({__scopeSelect:e,value:o,...r},n)=>{const a=i.useRef(null),s=de(n,a),c=Ag(o);return i.useEffect(()=>{const l=a.current;if(!l)return;const u=window.HTMLSelectElement.prototype,f=Object.getOwnPropertyDescriptor(u,"value").set;if(c!==o&&f){const m=new Event("change",{bubbles:!0});f.call(l,o),l.dispatchEvent(m)}},[c,o]),t.jsx(re.select,{...r,style:{...qa,...r.style},ref:s,defaultValue:o})});xs.displayName=Gg;function bs(e){return e===""||e===void 0}function vs(e){const o=Ie(e),r=i.useRef(""),n=i.useRef(0),a=i.useCallback(c=>{const l=r.current+c;o(l),function u(d){r.current=d,window.clearTimeout(n.current),d!==""&&(n.current=window.setTimeout(()=>u(""),1e3))}(l)},[o]),s=i.useCallback(()=>{r.current="",window.clearTimeout(n.current)},[]);return i.useEffect(()=>()=>window.clearTimeout(n.current),[]),[r,a,s]}function ws(e,o,r){const a=o.length>1&&Array.from(o).every(d=>d===o[0])?o[0]:o,s=r?e.indexOf(r):-1;let c=Zg(e,Math.max(s,0));a.length===1&&(c=c.filter(d=>d!==r));const u=c.find(d=>d.textValue.toLowerCase().startsWith(a.toLowerCase()));return u!==r?u:void 0}function Zg(e,o){return e.map((r,n)=>e[(o+n)%e.length])}var Qg=Ka,$s=Ga,Jg=Qa,ef=Ja,tf=es,js=ts,of=as,Ns=ls,Ss=ds,rf=us,nf=gs,ks=fs,Cs=ms,Ts=ys;const $e=Qg,je=Jg,xe=i.forwardRef(({className:e,children:o,...r},n)=>t.jsxs($s,{ref:n,className:te("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...r,children:[o,t.jsx(ef,{asChild:!0,children:t.jsx(rr,{className:"h-4 w-4 opacity-50"})})]}));xe.displayName=$s.displayName;const As=i.forwardRef(({className:e,...o},r)=>t.jsx(ks,{ref:r,className:te("flex cursor-default items-center justify-center py-1",e),...o,children:t.jsx(Nn,{className:"h-4 w-4"})}));As.displayName=ks.displayName;const Es=i.forwardRef(({className:e,...o},r)=>t.jsx(Cs,{ref:r,className:te("flex cursor-default items-center justify-center py-1",e),...o,children:t.jsx(rr,{className:"h-4 w-4"})}));Es.displayName=Cs.displayName;const be=i.forwardRef(({className:e,children:o,position:r="popper",...n},a)=>t.jsx(tf,{children:t.jsxs(js,{ref:a,className:te("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...n,children:[t.jsx(As,{}),t.jsx(of,{className:te("p-1",r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:o}),t.jsx(Es,{})]})}));be.displayName=js.displayName;const af=i.forwardRef(({className:e,...o},r)=>t.jsx(Ns,{ref:r,className:te("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...o}));af.displayName=Ns.displayName;const G=i.forwardRef(({className:e,children:o,...r},n)=>t.jsxs(Ss,{ref:n,className:te("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[t.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:t.jsx(nf,{children:t.jsx(jn,{className:"h-4 w-4"})})}),t.jsx(rf,{children:o})]}));G.displayName=Ss.displayName;const sf=i.forwardRef(({className:e,...o},r)=>t.jsx(Ts,{ref:r,className:te("-mx-1 my-1 h-px bg-muted",e),...o}));sf.displayName=Ts.displayName;const Xt=e=>{if(!e)return"";const r=e.replace(/[+-]\d{2}:\d{2}$/,"").replace(/Z$/,"").match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}):\d{2}$/);if(r){const[,d,f]=r;return`${d}T${f}`}const n=new Date(e),a=n.getUTCFullYear(),s=String(n.getUTCMonth()+1).padStart(2,"0"),c=String(n.getUTCDate()).padStart(2,"0"),l=String(n.getUTCHours()).padStart(2,"0"),u=String(n.getUTCMinutes()).padStart(2,"0");return`${a}-${s}-${c}T${l}:${u}`},Gt=e=>{if(!e){const o=new Date,r=7*60;return new Date(o.getTime()+(r-o.getTimezoneOffset())*6e4).toISOString().slice(0,19)}return`${e}:00`},lf=({open:e,onOpenChange:o,draftData:r,accounts:n,categories:a,onConfirm:s,onCancel:c})=>{var E;const[l,u]=i.useState(null),[d,f]=i.useState(!1),m=i.useRef(null);i.useEffect(()=>{r&&r.draft&&u({...r.draft})},[r]),i.useEffect(()=>{e&&m.current&&setTimeout(()=>{var j;(j=m.current)==null||j.focus()},100)},[e]);const y=async()=>{if(l){f(!0);try{await s(l),o(!1)}catch(j){console.error("Error confirming draft:",j)}finally{f(!1)}}},b=()=>{c&&c(),o(!1)};if(i.useEffect(()=>{const j=z=>{z.key==="Escape"&&e&&!d&&(c?c():o(!1))};if(e)return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[e,d,c,o]),!l||!r)return null;const S=r.draftType==="TRANSACTION",p=r.draftType==="RECEIVABLE",g=r.draftType==="LIABILITY",w=r.draftType==="SETTLEMENT",h=S?l:null,$=p?l:null,N=g?l:null,v=w?l:null,A=(j,z="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:z}).format(j),k=r.needConfirmFields||[],T=r.autoFilledFields||[],P=()=>{switch(r.draftType){case"TRANSACTION":return"Xác nhận giao dịch";case"RECEIVABLE":return"Xác nhận khoản cho vay";case"LIABILITY":return"Xác nhận khoản nợ";case"SETTLEMENT":return(v==null?void 0:v.type)==="RECEIVABLE"?"Xác nhận nhận tiền trả nợ":"Xác nhận trả nợ";default:return"Xác nhận"}},C=()=>S&&h?h.amount&&h.categoryId&&h.accountId:p&&$?$.amount&&$.counterpartyName:g&&N?N.amount&&N.counterpartyName:w&&v?v.amount&&v.accountId&&(v.receivableId||v.liabilityId):!1;return t.jsx(Nt,{open:e,onOpenChange:o,children:t.jsxs(it,{className:"confirm-draft-dialog",style:{maxWidth:"500px"},children:[t.jsxs(lt,{children:[t.jsx(dt,{children:P()}),t.jsx(ut,{children:r.autoFilledFields&&r.autoFilledFields.length>0&&t.jsxs(cf,{children:[t.jsx(U,{icon:"CheckCircle",size:16,color:"currentColor"}),t.jsxs("span",{children:["Đã tự động điền ",r.autoFilledFields.length," trường"]})]})})]}),t.jsxs(df,{children:[S&&h&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Số tiền"}),t.jsx(J,{ref:m,type:"number",value:((E=h.amount)==null?void 0:E.toString())||"",onChange:j=>{const z=j.target.value?parseFloat(j.target.value):void 0;S&&h&&u({...h,amount:z})},placeholder:"Nhập số tiền"}),h.amount?t.jsxs("div",{className:"draft-value",children:[A(h.amount,h.currency),T.find(j=>j.field==="amount")&&t.jsx(he,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(J,{ref:m,type:"number",value:h.amount||"",onChange:j=>{S&&h&&u({...h,amount:parseFloat(j.target.value)||0})},placeholder:"Nhập số tiền",tabIndex:1})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Loại giao dịch"}),t.jsxs($e,{value:h.type||"EXPENSE",onValueChange:j=>{S&&h&&u({...h,type:j})},children:[t.jsx(xe,{children:t.jsx(je,{})}),t.jsxs(be,{children:[t.jsx(G,{value:"EXPENSE",children:"Chi tiêu"}),t.jsx(G,{value:"INCOME",children:"Thu nhập"}),t.jsx(G,{value:"TRANSFER",children:"Chuyển khoản"})]})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(X,{children:["Danh mục ",k.includes("categoryId")&&t.jsx("span",{className:"required",children:"*"})]}),h.categoryId&&h.categoryName?t.jsxs("div",{className:"draft-value",children:[h.categoryName,T.find(j=>j.field==="categoryId")&&t.jsx(he,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsxs($e,{value:h.categoryId||"",onValueChange:j=>{const z=a.find(O=>O.id===j);S&&h&&u({...h,categoryId:j,categoryName:z==null?void 0:z.name})},children:[t.jsx(xe,{children:t.jsx(je,{placeholder:"Chọn danh mục"})}),t.jsx(be,{children:a.filter(j=>!j.isSystem||h.type==="EXPENSE"||h.type==="INCOME").map(j=>t.jsx(G,{value:j.id,children:j.name},j.id))})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(X,{children:["Tài khoản ",k.includes("accountId")&&t.jsx("span",{className:"required",children:"*"})]}),h.accountId&&h.accountName?t.jsxs("div",{className:"draft-value",children:[h.accountName,T.find(j=>j.field==="accountId")&&t.jsx(he,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsxs($e,{value:h.accountId||"",onValueChange:j=>{const z=n.find(O=>O.id===j);S&&h&&u({...h,accountId:j,accountName:z==null?void 0:z.name})},children:[t.jsx(xe,{children:t.jsx(je,{placeholder:"Chọn tài khoản"})}),t.jsx(be,{children:n.map(j=>t.jsx(G,{value:j.id,children:j.name},j.id))})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Ghi chú"}),t.jsx(J,{value:h.note||"",onChange:j=>{S&&h&&u({...h,note:j.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Ngày giao dịch"}),t.jsx(J,{type:"datetime-local",value:Xt(h.occurredAt),onChange:j=>{const z=j.target.value?Gt(j.target.value):new Date().toISOString().slice(0,19);S&&h&&u({...h,occurredAt:z})}})]})]}),p&&$&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(X,{children:["Người vay ",k.includes("counterpartyName")&&t.jsx("span",{className:"required",children:"*"})]}),$.counterpartyName?t.jsxs("div",{className:"draft-value",children:[$.counterpartyName,T.find(j=>j.field==="counterpartyName")&&t.jsx(he,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(J,{value:$.counterpartyName||"",onChange:j=>{p&&$&&u({...$,counterpartyName:j.target.value})},placeholder:"Nhập tên người vay"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(X,{children:["Số tiền ",k.includes("amount")&&t.jsx("span",{className:"required",children:"*"})]}),$.amount?t.jsxs("div",{className:"draft-value",children:[A($.amount,$.currency),T.find(j=>j.field==="amount")&&t.jsx(he,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(J,{type:"number",value:$.amount||"",onChange:j=>{p&&$&&u({...$,amount:parseFloat(j.target.value)||0})},placeholder:"Nhập số tiền"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Ngày cho vay"}),t.jsx(J,{type:"datetime-local",value:Xt($.occurredAt),onChange:j=>{const z=j.target.value?Gt(j.target.value):new Date().toISOString().slice(0,19);p&&$&&u({...$,occurredAt:z})}})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Ghi chú"}),t.jsx(J,{value:$.note||"",onChange:j=>{p&&$&&u({...$,note:j.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]}),g&&N&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(X,{children:["Người cho vay ",k.includes("counterpartyName")&&t.jsx("span",{className:"required",children:"*"})]}),N.counterpartyName?t.jsxs("div",{className:"draft-value",children:[N.counterpartyName,T.find(j=>j.field==="counterpartyName")&&t.jsx(he,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(J,{value:N.counterpartyName||"",onChange:j=>{g&&N&&u({...N,counterpartyName:j.target.value})},placeholder:"Nhập tên người cho vay"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(X,{children:["Số tiền ",k.includes("amount")&&t.jsx("span",{className:"required",children:"*"})]}),N.amount?t.jsxs("div",{className:"draft-value",children:[A(N.amount,N.currency),T.find(j=>j.field==="amount")&&t.jsx(he,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(J,{type:"number",value:N.amount||"",onChange:j=>{g&&N&&u({...N,amount:parseFloat(j.target.value)||0})},placeholder:"Nhập số tiền"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Ngày vay"}),t.jsx(J,{type:"datetime-local",value:Xt(N.occurredAt),onChange:j=>{const z=j.target.value?Gt(j.target.value):new Date().toISOString().slice(0,19);g&&N&&u({...N,occurredAt:z})}})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Ghi chú"}),t.jsx(J,{value:N.note||"",onChange:j=>{g&&N&&u({...N,note:j.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]}),w&&v&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(X,{children:["Loại ",k.includes("type")&&t.jsx("span",{className:"required",children:"*"})]}),t.jsxs($e,{value:v.type||"",onValueChange:j=>{w&&v&&u({...v,type:j,receivableId:j==="RECEIVABLE"?v.receivableId:void 0,liabilityId:j==="LIABILITY"?v.liabilityId:void 0})},children:[t.jsx(xe,{children:t.jsx(je,{placeholder:"Chọn loại"})}),t.jsxs(be,{children:[t.jsx(G,{value:"RECEIVABLE",children:"Nhận tiền trả nợ"}),t.jsx(G,{value:"LIABILITY",children:"Trả nợ"})]})]})]}),v.counterpartyName&&t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Người liên quan"}),t.jsxs("div",{className:"draft-value",children:[v.counterpartyName,T.find(j=>j.field==="receivableId"||j.field==="liabilityId")&&t.jsx(he,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(X,{children:["Số tiền ",k.includes("amount")&&t.jsx("span",{className:"required",children:"*"})]}),v.amount?t.jsxs("div",{className:"draft-value",children:[A(v.amount,v.currency),T.find(j=>j.field==="amount")&&t.jsx(he,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(J,{type:"number",value:v.amount||"",onChange:j=>{w&&v&&u({...v,amount:parseFloat(j.target.value)||0})},placeholder:"Nhập số tiền"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(X,{children:["Tài khoản ",k.includes("accountId")&&t.jsx("span",{className:"required",children:"*"})]}),v.accountId&&v.accountName?t.jsxs("div",{className:"draft-value",children:[v.accountName,T.find(j=>j.field==="accountId")&&t.jsx(he,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsxs($e,{value:v.accountId||"",onValueChange:j=>{const z=n.find(O=>O.id===j);w&&v&&u({...v,accountId:j,accountName:z==null?void 0:z.name})},children:[t.jsx(xe,{children:t.jsx(je,{placeholder:"Chọn tài khoản"})}),t.jsx(be,{children:n.map(j=>t.jsx(G,{value:j.id,children:j.name},j.id))})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Ngày thanh toán"}),t.jsx(J,{type:"datetime-local",value:Xt(v.settledAt),onChange:j=>{const z=j.target.value?Gt(j.target.value):new Date().toISOString().slice(0,19);w&&v&&u({...v,settledAt:z})}})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(X,{children:"Ghi chú"}),t.jsx(J,{value:v.note||"",onChange:j=>{w&&v&&u({...v,note:j.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]})]}),t.jsxs(ct,{children:[t.jsx(W,{variant:"outline",onClick:b,disabled:d,tabIndex:-1,children:"Hủy"}),t.jsx(W,{onClick:y,disabled:d||!C(),tabIndex:-1,children:d?t.jsxs(t.Fragment,{children:[t.jsx(U,{icon:"Loader",size:16,color:"currentColor",className:"animate-spin"}),t.jsx("span",{children:"Đang tạo..."})]}):t.jsx("span",{children:"Xác nhận"})})]})]})})},cf=le.div`
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
`,df=le.div`
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
`,uf=1,pf=1e6;let _o=0;function gf(){return _o=(_o+1)%Number.MAX_SAFE_INTEGER,_o.toString()}const Lo=new Map,un=e=>{if(Lo.has(e))return;const o=setTimeout(()=>{Lo.delete(e),Rt({type:"REMOVE_TOAST",toastId:e})},pf);Lo.set(e,o)},ff=(e,o)=>{switch(o.type){case"ADD_TOAST":return{...e,toasts:[o.toast,...e.toasts].slice(0,uf)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(r=>r.id===o.toast.id?{...r,...o.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=o;return r?un(r):e.toasts.forEach(n=>{un(n.id)}),{...e,toasts:e.toasts.map(n=>n.id===r||r===void 0?{...n,open:!1}:n)}}case"REMOVE_TOAST":return o.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==o.toastId)}}},to=[];let oo={toasts:[]};function Rt(e){oo=ff(oo,e),to.forEach(o=>{o(oo)})}function mf({...e}){const o=gf(),r=a=>Rt({type:"UPDATE_TOAST",toast:{...a,id:o}}),n=()=>Rt({type:"DISMISS_TOAST",toastId:o});return Rt({type:"ADD_TOAST",toast:{...e,id:o,open:!0,onOpenChange:a=>{a||n()}}}),{id:o,dismiss:n,update:r}}function Rs(){const[e,o]=i.useState(oo);return i.useEffect(()=>(to.push(o),()=>{const r=to.indexOf(o);r>-1&&to.splice(r,1)}),[e]),{...e,toast:mf,dismiss:r=>Rt({type:"DISMISS_TOAST",toastId:r})}}const pn=()=>{const{t:e}=Be(),{navigate:o}=et(),{toast:r}=Rs(),[n,a]=i.useState(null),[s,c]=i.useState([]),[l,u]=i.useState(null),[d,f]=i.useState(!1),[m,y]=i.useState(!1),[b,S]=i.useState(!0),[p,g]=i.useState(null),[w,h]=i.useState(!1),[$,N]=i.useState(null),[v,A]=i.useState(!1),[k,T]=i.useState([]),[P,C]=i.useState([]),[E,j]=i.useState({period:"month"}),z=i.useRef(0),O=i.useRef(null),H=i.useRef([]),F=i.useRef([]),q=i.useRef(0),D=5*60*1e3;i.useEffect(()=>{(async()=>{const R=Date.now();if(H.current.length>0&&F.current.length>0&&R-q.current<D){T(H.current),C(F.current);return}try{const[V,M]=await Promise.all([Y.accounts.getAll(),Y.categories.getAll()]);H.current=V,F.current=M,q.current=R,T(V),C(M)}catch(V){console.error("Error loading accounts/categories:",V)}})()},[]),i.useEffect(()=>{(async()=>{S(!0);try{const[R,V,M]=await Promise.all([Y.accounts.getAll(),Y.receivables.getAll(0,1e3),Y.liabilities.getAll(0,1e3)]),I=R.reduce((Se,Te)=>Se+(Te.currentBalance||0),0),B=V.content.reduce((Se,Te)=>Se+(Te.remainingAmount||0),0),oe=M.content.reduce((Se,Te)=>Se+(Te.remainingAmount||0),0),we=I+B-oe;u({totalAssets:we,currentCash:I,totalReceivables:B,totalLiabilities:oe})}catch(R){console.error("Financial overview load error:",R)}finally{S(!1)}})()},[]);const K=i.useMemo(()=>{const x=(I,B=!0)=>{const oe=I.getFullYear(),we=String(I.getMonth()+1).padStart(2,"0"),Se=String(I.getDate()).padStart(2,"0");return`${oe}-${we}-${Se}T${B?"00:00:00":"23:59:59"}`};let R,V;const M=new Date;if(E.period==="30days"){const I=new Date(M);I.setDate(I.getDate()-30),R=x(I,!0),V=x(M,!1)}else if(E.period==="month"){const I=new Date(M.getFullYear(),M.getMonth(),1);R=x(I,!0),V=x(M,!1)}else E.period==="custom"&&(E.startDate&&(R=`${E.startDate}T00:00:00`),E.endDate&&(V=`${E.endDate}T23:59:59`));return{startDate:R,endDate:V}},[E]);i.useEffect(()=>{(async()=>{z.current=window.scrollY||document.documentElement.scrollTop,f(!0),g(null);try{const R=await Y.reports.getDashboard(E.period==="month"?"month":"day",K.startDate,K.endDate);a(R)}catch(R){g(ie(R)),console.error("Dashboard report load error:",R)}finally{f(!1),requestAnimationFrame(()=>{window.scrollTo(0,z.current)})}})()},[E.period,K.startDate,K.endDate]),i.useEffect(()=>{(async()=>{y(!0);try{const R=await Y.transactions.getAll({page:0,size:5,sortBy:"occurredAt",sortOrder:"desc",startDate:K.startDate,endDate:K.endDate});c(R.content)}catch(R){console.error("Transactions load error:",R)}finally{y(!1)}})()},[K.startDate,K.endDate]);const ne=i.useCallback((x,R="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:R}).format(x),[]),fe=i.useCallback(x=>new Date(x).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),[]),me=i.useCallback(x=>{z.current=window.scrollY||document.documentElement.scrollTop,j({period:x})},[]),ae=i.useCallback((x,R)=>{z.current=window.scrollY||document.documentElement.scrollTop,j({period:"custom",startDate:x,endDate:R})},[]),se=i.useCallback(async x=>{h(!0),N(null);try{const R=await Y.nlp.parseTransaction(x);N(R),R.responseType==="CONFIRM_DRAFT"&&A(!0)}catch(R){const V=ie(R);N({responseType:"ERROR",intent:"UNKNOWN",confidence:0,message:V,data:{code:"PARSE_ERROR",message:V,details:void 0}}),console.error("Error parsing text:",R)}finally{h(!1)}},[]),pe=x=>{if(!x){const R=new Date,V=7*60;return new Date(R.getTime()+(V-R.getTimezoneOffset())*6e4).toISOString().slice(0,19)}return x.replace(/[+-]\d{2}:\d{2}$/,"").replace(/Z$/,"").slice(0,19)},Ne=i.useCallback(async x=>{try{if(!x||typeof x!="object")throw new Error("Invalid draft data");if(!$||$.responseType!=="CONFIRM_DRAFT")throw new Error("Invalid response type");const R=$.data;if(R.draftType==="TRANSACTION"){const I=x;if(!I.amount||!I.accountId)throw new Error("Thiếu thông tin bắt buộc: số tiền và tài khoản");const B={type:I.type,amount:I.amount,currency:I.currency||"VND",occurredAt:pe(I.occurredAt),categoryId:I.categoryId,accountId:I.accountId,fromAccountId:I.fromAccountId,toAccountId:I.toAccountId,note:I.note};await Y.transactions.create(B),r({title:"Thành công",description:"Đã tạo giao dịch thành công"})}else if(R.draftType==="RECEIVABLE"){const I=x;if(!I.amount||!I.counterpartyName)throw new Error("Thiếu thông tin bắt buộc: số tiền và tên người vay");const B={counterpartyName:I.counterpartyName,amount:I.amount,currency:I.currency||"VND",occurredAt:pe(I.occurredAt),dueAt:I.dueAt?pe(I.dueAt):void 0,note:I.note};await Y.receivables.create(B),r({title:"Thành công",description:"Đã tạo khoản cho vay thành công"})}else if(R.draftType==="LIABILITY"){const I=x;if(!I.amount||!I.counterpartyName)throw new Error("Thiếu thông tin bắt buộc: số tiền và tên người cho vay");const B={counterpartyName:I.counterpartyName,amount:I.amount,currency:I.currency||"VND",occurredAt:pe(I.occurredAt),dueAt:I.dueAt?pe(I.dueAt):void 0,note:I.note};await Y.liabilities.create(B),r({title:"Thành công",description:"Đã tạo khoản nợ thành công"})}else if(R.draftType==="SETTLEMENT"){const I=x;if(!I.amount||!I.accountId||!I.receivableId&&!I.liabilityId)throw new Error("Thiếu thông tin bắt buộc: số tiền, tài khoản và khoản nợ/khoản cho vay");const B={type:I.type==="RECEIVABLE"?"RECEIVABLE":"LIABILITY",receivableId:I.receivableId,liabilityId:I.liabilityId,amount:I.amount,currency:I.currency||"VND",occurredAt:pe(I.settledAt),note:I.note};await Y.settlements.create(B),r({title:"Thành công",description:"Đã thanh toán thành công"})}else throw new Error("Unknown draft type");const V=K;E.period&&(async()=>{try{const B=await Y.reports.getDashboard(E.period==="month"?"month":"day",V.startDate,V.endDate);a(B)}catch(B){console.error("Error refreshing report:",B)}})(),(async()=>{try{const I=await Y.transactions.getAll({page:0,size:5,sortBy:"occurredAt",sortOrder:"desc",startDate:V.startDate,endDate:V.endDate});c(I.content)}catch(I){console.error("Error refreshing transactions:",I)}})(),q.current=0,A(!1),N(null)}catch(R){const V=ie(R);throw g(V),R}},[E,K,$,r]);return t.jsxs(hf,{ref:O,className:"dashboard-wrapper",children:[t.jsx("h1",{className:"title",children:e("wallet.dashboard.title")}),t.jsxs("section",{className:"section",children:[t.jsx("div",{className:"section-header",children:t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.financialOverview")||"Tổng quan tài chính"})}),b?t.jsx("div",{className:"financial-overview-grid",children:[...Array(4)].map((x,R)=>t.jsx(ce,{children:t.jsxs(ye,{className:"p-6",children:[t.jsx(ue,{className:"h-4 w-24 mb-2"}),t.jsx(ue,{className:"h-8 w-32"})]})},R))}):t.jsxs("div",{className:"financial-overview-grid",children:[t.jsx(ce,{children:t.jsxs(ye,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalAssets")||"Tổng tài sản"}),t.jsx("div",{className:"stat-value",children:l?ne(l.totalAssets,"VND"):"0 ₫"})]})}),t.jsx(ce,{children:t.jsxs(ye,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.currentCash")||"Tiền hiện có"}),t.jsx("div",{className:"stat-value stat-value--positive",children:l?ne(l.currentCash,"VND"):"0 ₫"})]})}),t.jsx(ce,{children:t.jsxs(ye,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalReceivables")||"Khoản cho vay"}),t.jsx("div",{className:"stat-value stat-value--positive",children:l?ne(l.totalReceivables,"VND"):"0 ₫"})]})}),t.jsx(ce,{children:t.jsxs(ye,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalLiabilities")||"Khoản nợ"}),t.jsx("div",{className:"stat-value stat-value--negative",children:l?ne(l.totalLiabilities,"VND"):"0 ₫"})]})})]})]}),t.jsxs("section",{className:"section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.incomeExpense")||"Thu/Chi"}),t.jsxs("div",{className:"filter-controls",children:[t.jsx(W,{variant:E.period==="30days"?"default":"outline",size:"sm",onClick:()=>me("30days"),children:e("wallet.dashboard.last30Days")||"30 ngày gần nhất"}),t.jsx(W,{variant:E.period==="month"?"default":"outline",size:"sm",onClick:()=>me("month"),children:e("wallet.dashboard.thisMonth")||"Tháng này"}),t.jsxs("div",{className:"date-range-picker",children:[t.jsx(J,{type:"date",className:"date-input",value:E.startDate||"",onChange:x=>{x.target.value&&E.endDate?ae(x.target.value,E.endDate):(z.current=window.scrollY||document.documentElement.scrollTop,j(R=>({...R,startDate:x.target.value,period:"custom"})))},placeholder:e("wallet.dashboard.fromDate")||"Từ ngày"}),t.jsx("span",{className:"date-separator",children:"-"}),t.jsx(J,{type:"date",className:"date-input",value:E.endDate||"",onChange:x=>{x.target.value&&E.startDate?ae(E.startDate,x.target.value):(z.current=window.scrollY||document.documentElement.scrollTop,j(R=>({...R,endDate:x.target.value,period:"custom"})))},placeholder:e("wallet.dashboard.toDate")||"Đến ngày"})]})]})]}),d?t.jsx("div",{className:"stats-grid",children:[...Array(3)].map((x,R)=>t.jsx(ce,{children:t.jsxs(ye,{className:"p-6",children:[t.jsx(ue,{className:"h-4 w-24 mb-2"}),t.jsx(ue,{className:"h-8 w-32"})]})},R))}):t.jsxs("div",{className:"stats-grid",children:[t.jsx(ce,{children:t.jsxs(ye,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalIncome")}),t.jsx("div",{className:"stat-value stat-value--positive",children:n?ne(n.totalIncome??0,"VND"):"0 ₫"})]})}),t.jsx(ce,{children:t.jsxs(ye,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalExpense")}),t.jsx("div",{className:"stat-value stat-value--negative",children:n?ne(n.totalExpense??0,"VND"):"0 ₫"})]})}),t.jsx(ce,{children:t.jsxs(ye,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.netSavings")}),t.jsx("div",{className:"stat-value",children:n?ne(n.netSavings??0,"VND"):"0 ₫"})]})})]})]}),t.jsxs("section",{className:"section",children:[t.jsx("div",{className:"section-header",children:t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.addTransaction")||"Thêm giao dịch mới"})}),t.jsx(ce,{children:t.jsx(ye,{className:"p-6",children:t.jsxs("div",{className:"add-transaction-section",children:[t.jsx(rd,{onParse:se,isLoading:w,placeholder:e("wallet.dashboard.commandPlaceholder")||'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr")',error:($==null?void 0:$.responseType)==="ERROR"?$.message:p||null}),t.jsxs(W,{onClick:()=>o("transactions/add"),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.dashboard.addManualTransaction")||"Thêm giao dịch thủ công"})]})]})})})]}),$&&$.responseType==="CONFIRM_DRAFT"&&t.jsx(lf,{open:v,onOpenChange:A,draftData:$.data,accounts:k,categories:P,onConfirm:Ne,onCancel:()=>{N(null),A(!1)}}),t.jsxs("section",{className:"section",children:[t.jsx("div",{className:"section-header",children:t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.recentTransactions")})}),t.jsx(ce,{children:t.jsx(ye,{className:"p-6",children:m?t.jsx("div",{className:"transaction-list",children:[...Array(3)].map((x,R)=>t.jsxs("div",{className:"transaction-item",children:[t.jsxs("div",{className:"transaction-info",children:[t.jsx(ue,{className:"h-4 w-24 mb-2"}),t.jsx(ue,{className:"h-3 w-32"})]}),t.jsx(ue,{className:"h-6 w-20"})]},R))}):s.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:e("wallet.dashboard.noTransactions")}),t.jsx(W,{onClick:()=>o("transactions/add"),className:"mt-4",children:e("wallet.dashboard.addFirstTransaction")})]}):t.jsx("div",{className:"transaction-list",children:s.map(x=>{var R,V,M,I,B;return t.jsx("div",{className:"transaction-card",children:t.jsxs("div",{className:"transaction-main",children:[t.jsxs("div",{className:"transaction-left",children:[t.jsx(he,{variant:x.type==="EXPENSE"?"destructive":x.type==="INCOME"?"default":"secondary",className:`transaction-type-badge transaction-type-badge--${x.type.toLowerCase()}`,children:x.type==="EXPENSE"?e("wallet.transactions.expense"):x.type==="INCOME"?e("wallet.transactions.income"):e("wallet.transactions.transfer")}),t.jsxs("div",{className:"transaction-info",children:[t.jsx("div",{className:"transaction-category",children:((R=x.category)==null?void 0:R.name)||(x.categoryId?(V=P.find(oe=>oe.id===x.categoryId))==null?void 0:V.name:null)||x.type}),t.jsxs("div",{className:"transaction-meta",children:[t.jsx("span",{className:"transaction-date",children:fe(x.occurredAt)}),x.type==="TRANSFER"?t.jsxs("span",{className:"transaction-account",children:[x.fromAccountId?((M=k.find(oe=>oe.id===x.fromAccountId))==null?void 0:M.name)||x.fromAccountId:"N/A"," →",x.toAccountId?((I=k.find(oe=>oe.id===x.toAccountId))==null?void 0:I.name)||x.toAccountId:"N/A"]}):((B=x.account)==null?void 0:B.name)&&t.jsx("span",{className:"transaction-account",children:x.account.name})]}),x.note&&t.jsx("div",{className:"transaction-note",children:x.note})]})]}),t.jsx("div",{className:"transaction-right",children:t.jsx("div",{className:"transaction-amount-wrapper",children:t.jsxs("div",{className:`transaction-amount transaction-amount--${x.type.toLowerCase()}`,children:[x.type==="EXPENSE"?"-":x.type==="INCOME"?"+":"",ne(x.amount,x.currency)]})})})]})},x.id)})})})})]})]})},hf=le.div`
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
`,Ze=i.forwardRef(({className:e,...o},r)=>t.jsx("textarea",{className:te("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...o}));Ze.displayName="Textarea";const yf=({transactionId:e,isOpen:o,onClose:r,onSuccess:n,onDelete:a})=>{const{t:s}=Be(),c=Ee(T=>T.walletAccounts.items),l=Ee(T=>T.categories.items),[u,d]=i.useState(null),[f,m]=i.useState(!1),[y,b]=i.useState(!1),[S,p]=i.useState(!1),[g,w]=i.useState(null),[h,$]=i.useState({});i.useEffect(()=>{o&&e?N():(d(null),$({}),w(null),m(!1))},[o,e]);const N=async()=>{if(e){m(!0),w(null);try{const T=await Y.transactions.getById(e);d(T),$({type:T.type,amount:T.amount,currency:T.currency,accountId:T.accountId,categoryId:T.categoryId,fromAccountId:T.fromAccountId,toAccountId:T.toAccountId,occurredAt:T.occurredAt.split("T")[0],note:T.note})}catch(T){w(ie(T))}finally{m(!1)}}},v=async T=>{T.preventDefault(),w(null),b(!0);try{if(!u)return;await Y.transactions.update(u.id,h),n==null||n(),r()}catch(P){w(ie(P))}finally{b(!1)}},A=i.useCallback(async()=>{if(!(!u||!window.confirm(s("wallet.transactions.confirmDelete")||"Bạn có chắc muốn xóa giao dịch này?"))){p(!0),w(null);try{await Y.transactions.delete(u.id),a==null||a(),r()}catch(T){w(ie(T))}finally{p(!1)}}},[u,a,r,s]),k=(T,P)=>{$(C=>({...C,[T]:P}))};return o?t.jsx(xf,{className:"modal--open",onClick:r,children:t.jsxs("div",{className:"modal-content",onClick:T=>T.stopPropagation(),children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h2",{className:"modal-title",children:s("wallet.transactions.edit")||"Sửa giao dịch"}),t.jsx("button",{className:"close-button",onClick:r,children:t.jsx(U,{icon:"Close",size:20,color:"currentColor"})})]}),f?t.jsx("div",{className:"loading-state",children:s("wallet.common.loading")}):u?t.jsxs("form",{className:"form",onSubmit:v,children:[g&&t.jsx("div",{className:"error-message",children:g}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[s("wallet.transactions.type")," *"]}),t.jsxs("select",{className:"select",value:h.type||u.type,onChange:T=>k("type",T.target.value),required:!0,children:[t.jsx("option",{value:"EXPENSE",children:s("wallet.transactions.expense")}),t.jsx("option",{value:"INCOME",children:s("wallet.transactions.income")}),t.jsx("option",{value:"TRANSFER",children:s("wallet.transactions.transfer")})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[s("wallet.transactions.amount")||"Số tiền"," *"]}),t.jsx("input",{className:"input",type:"number",step:"0.01",min:"0",value:h.amount||u.amount,onChange:T=>k("amount",parseFloat(T.target.value)||0),required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:s("wallet.transactions.currency")||"Tiền tệ"}),t.jsxs("select",{className:"select",value:h.currency||u.currency,onChange:T=>k("currency",T.target.value),children:[t.jsx("option",{value:"VND",children:"VND (₫)"}),t.jsx("option",{value:"USD",children:"USD ($)"}),t.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),(h.type||u.type)==="TRANSFER"?t.jsxs("div",{className:"transfer-fields",children:[t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[s("wallet.transactions.fromAccount")||"Tài khoản nguồn"," *"]}),t.jsxs("select",{className:"select",value:h.fromAccountId||u.fromAccountId||"",onChange:T=>k("fromAccountId",T.target.value),required:!0,children:[t.jsx("option",{value:"",children:s("wallet.transactions.selectFromAccount")||"Chọn tài khoản nguồn"}),c.map(T=>t.jsxs("option",{value:T.id,children:[T.name," (",T.type,")"]},T.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[s("wallet.transactions.toAccount")||"Tài khoản đích"," *"]}),t.jsxs("select",{className:"select",value:h.toAccountId||u.toAccountId||"",onChange:T=>k("toAccountId",T.target.value),required:!0,children:[t.jsx("option",{value:"",children:s("wallet.transactions.selectToAccount")||"Chọn tài khoản đích"}),c.filter(T=>T.id!==(h.fromAccountId||u.fromAccountId)).map(T=>t.jsxs("option",{value:T.id,children:[T.name," (",T.type,")"]},T.id))]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[s("wallet.accounts.title")," *"]}),t.jsx("select",{className:"select",value:h.accountId||u.accountId,onChange:T=>k("accountId",T.target.value),required:!0,children:c.map(T=>t.jsxs("option",{value:T.id,children:[T.name," (",T.type,")"]},T.id))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:s("wallet.categories.title")}),t.jsxs("select",{className:"select",value:h.categoryId||u.categoryId||"",onChange:T=>k("categoryId",T.target.value||void 0),children:[t.jsx("option",{value:"",children:s("wallet.transactions.noCategory")||"Không có"}),l.map(T=>t.jsx("option",{value:T.id,children:T.name},T.id))]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:s("wallet.transactions.date")||"Ngày giao dịch"}),t.jsx("input",{className:"input",type:"date",value:h.occurredAt||u.occurredAt.split("T")[0],onChange:T=>k("occurredAt",T.target.value)})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:s("wallet.transactions.note")||"Ghi chú"}),t.jsx(Ze,{value:h.note||u.note||"",onChange:T=>k("note",T.target.value||void 0),rows:3})]}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{className:"cancel-button",type:"button",onClick:r,disabled:y||S,children:s("wallet.common.cancel")}),t.jsx("button",{className:`submit-button ${y?"submit-button--loading":""}`,type:"submit",disabled:y||S,children:s(y?"wallet.common.saving":"wallet.common.save")})]}),t.jsxs("button",{className:"delete-button",type:"button",onClick:A,disabled:y||S,children:[t.jsx(U,{icon:S?"Loading":"Delete",size:18,color:"currentColor"}),t.jsx("span",{children:S?s("wallet.common.deleting")||"Đang xóa...":s("wallet.transactions.delete")||"Xóa giao dịch"})]})]}):t.jsx("div",{className:"error-message",children:s("wallet.transactions.notFound")||"Không tìm thấy giao dịch"})]})}):null},xf=le.div`
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
`,bf=Pt("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),Qe=i.forwardRef(({className:e,variant:o,...r},n)=>t.jsx("div",{ref:n,role:"alert",className:te(bf({variant:o}),e),...r}));Qe.displayName="Alert";const vf=i.forwardRef(({className:e,...o},r)=>t.jsx("h5",{ref:r,className:te("mb-1 font-medium leading-none tracking-tight",e),...o}));vf.displayName="AlertTitle";const Je=i.forwardRef(({className:e,...o},r)=>t.jsx("div",{ref:r,className:te("text-sm [&_p]:leading-relaxed",e),...o}));Je.displayName="AlertDescription";const wf=()=>{var pe,Ne;const{t:e}=Be(),{navigate:o}=et(),r=go(),n=Ee(x=>x.walletAccounts.items),a=Ee(x=>x.categories.items),[s,c]=i.useState([]),[l,u]=i.useState(null),[d,f]=i.useState(!0),[m,y]=i.useState(null),[b,S]=i.useState(!1),[p,g]=i.useState(""),[w,h]=i.useState(null),[$,N]=i.useState(null),[v,A]=i.useState(!1),k=i.useRef(0),T=i.useRef(null),[P,C]=i.useState({page:0,size:20,sortBy:"occurredAt",sortOrder:"desc"}),E=Ee(x=>x.walletAccounts.lastFetched),j=Ee(x=>x.categories.lastFetched);i.useEffect(()=>{const x=Date.now()-3e5;(!E||E<x)&&r(ci()),(!j||j<x)&&r(vn())},[r,E,j]);const z=i.useMemo(()=>{let x,R;return P.startDate&&(x=P.startDate.includes("T")?P.startDate:`${P.startDate}T00:00:00`),P.endDate&&(R=P.endDate.includes("T")?P.endDate:`${P.endDate}T23:59:59`),{startDate:x,endDate:R}},[P.startDate,P.endDate]),O=i.useCallback(async()=>{k.current=window.scrollY||document.documentElement.scrollTop,f(!0),y(null);try{const x=await Y.transactions.getAll({...P,startDate:z.startDate,endDate:z.endDate,keyword:p||void 0});c(x.content),u(x)}catch(x){y(ie(x)),console.error("Transactions load error:",x)}finally{f(!1),requestAnimationFrame(()=>{window.scrollTo(0,k.current)})}},[P,z.startDate,z.endDate,p]);i.useEffect(()=>{O()},[O]),i.useEffect(()=>{const x=setTimeout(()=>{p!==P.keyword&&C(R=>({...R,keyword:p||void 0,page:0}))},500);return()=>clearTimeout(x)},[p]);const H=i.useCallback((x,R)=>{k.current=window.scrollY||document.documentElement.scrollTop,C(V=>({...V,[x]:R,page:0}))},[]),F=i.useCallback(x=>{if(k.current=window.scrollY||document.documentElement.scrollTop,w===x){h(null),C(M=>({...M,startDate:void 0,endDate:void 0,page:0}));return}h(x);const R=new Date,V=(M,I=!0)=>{const B=M.getFullYear(),oe=String(M.getMonth()+1).padStart(2,"0"),we=String(M.getDate()).padStart(2,"0");return`${B}-${oe}-${we}T${I?"00:00:00":"23:59:59"}`};if(x==="all")C(M=>({...M,startDate:void 0,endDate:void 0,page:0}));else if(x==="30days"){const M=new Date(R);M.setDate(M.getDate()-30),C(I=>({...I,startDate:V(M,!0),endDate:V(R,!1),page:0}))}else if(x==="month"){const M=new Date(R.getFullYear(),R.getMonth(),1);C(I=>({...I,startDate:V(M,!0),endDate:V(R,!1),page:0}))}},[w]),q=i.useCallback(x=>{k.current=window.scrollY||document.documentElement.scrollTop,C(R=>({...R,page:x}))},[]),D=i.useCallback((x,R="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:R}).format(x),[]),K=i.useCallback(x=>new Date(x).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),[]),ne=i.useCallback(x=>{N(x.id),A(!0)},[]),fe=i.useCallback(()=>{A(!1),N(null)},[]),me=i.useCallback(()=>{O()},[O]),ae=i.useCallback(()=>{O()},[O]),se=i.useCallback(async x=>{if(window.confirm(e("wallet.transactions.confirmDelete")||"Bạn có chắc muốn xóa giao dịch này?"))try{await Y.transactions.delete(x.id),await O()}catch(R){y(ie(R))}},[O,e]);return t.jsxs($f,{ref:T,className:"transactions-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:e("wallet.transactions.title")}),t.jsxs(W,{onClick:()=>o("transactions/add"),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.add")})]})]}),m&&t.jsx(Qe,{variant:"destructive",children:t.jsx(Je,{children:m})}),t.jsxs("div",{className:"quick-filters-section",children:[t.jsxs("div",{className:"quick-filters",children:[t.jsx(W,{variant:w==="all"?"default":"outline",size:"sm",onClick:()=>F("all"),children:e("wallet.transactions.all")||"Tất cả"}),t.jsx(W,{variant:w==="30days"?"default":"outline",size:"sm",onClick:()=>F("30days"),children:e("wallet.dashboard.last30Days")||"30 ngày gần nhất"}),t.jsx(W,{variant:w==="month"?"default":"outline",size:"sm",onClick:()=>F("month"),children:e("wallet.dashboard.thisMonth")||"Tháng này"})]}),t.jsxs("div",{className:"search-bar",children:[t.jsx(U,{icon:"Search",size:18,color:"currentColor"}),t.jsx(J,{type:"text",className:"search-input",placeholder:e("wallet.transactions.searchPlaceholder")||"Tìm kiếm giao dịch...",value:p,onChange:x=>g(x.target.value)}),p&&t.jsx(W,{variant:"ghost",size:"icon",className:"clear-search-button",onClick:()=>g(""),title:e("wallet.common.clear")||"Xóa",children:t.jsx(U,{icon:"Close",size:16,color:"currentColor"})})]}),t.jsxs(W,{variant:"outline",className:"toggle-filters-button",onClick:()=>S(!b),children:[t.jsx(U,{icon:b?"ChevronUp":"ChevronDown",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.filters")||"Bộ lọc"})]})]}),b&&t.jsx(ce,{className:"filters-card",children:t.jsx(ye,{className:"p-6",children:t.jsxs("div",{className:"filters-grid",children:[t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.type")}),t.jsxs($e,{value:P.type||"__all__",onValueChange:x=>H("type",x==="__all__"?void 0:x),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{placeholder:e("wallet.transactions.all")})}),t.jsxs(be,{children:[t.jsx(G,{value:"__all__",children:e("wallet.transactions.all")}),t.jsx(G,{value:"EXPENSE",children:e("wallet.transactions.expense")}),t.jsx(G,{value:"INCOME",children:e("wallet.transactions.income")}),t.jsx(G,{value:"TRANSFER",children:e("wallet.transactions.transfer")})]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.fromDate")}),t.jsx(J,{className:"input",type:"date",value:((pe=P.startDate)==null?void 0:pe.split("T")[0])||"",onChange:x=>H("startDate",x.target.value||void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.toDate")}),t.jsx(J,{className:"input",type:"date",value:((Ne=P.endDate)==null?void 0:Ne.split("T")[0])||"",onChange:x=>H("endDate",x.target.value||void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.accounts.title")}),t.jsxs($e,{value:P.accountId||"__all__",onValueChange:x=>H("accountId",x==="__all__"?void 0:x),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{placeholder:e("wallet.transactions.all")})}),t.jsxs(be,{children:[t.jsx(G,{value:"__all__",children:e("wallet.transactions.all")}),n.map(x=>t.jsx(G,{value:x.id,children:x.name},x.id))]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.categories.title")}),t.jsxs($e,{value:P.categoryId||"__all__",onValueChange:x=>H("categoryId",x==="__all__"?void 0:x),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{placeholder:e("wallet.transactions.all")})}),t.jsxs(be,{children:[t.jsx(G,{value:"__all__",children:e("wallet.transactions.all")}),a.map(x=>t.jsx(G,{value:x.id,children:x.name},x.id))]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.minAmount")||"Tối thiểu"}),t.jsx(J,{className:"number-input",type:"number",step:"0.01",min:"0",placeholder:"0",value:P.minAmount||"",onChange:x=>H("minAmount",x.target.value?parseFloat(x.target.value):void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.maxAmount")||"Tối đa"}),t.jsx(J,{className:"number-input",type:"number",step:"0.01",min:"0",placeholder:"0",value:P.maxAmount||"",onChange:x=>H("maxAmount",x.target.value?parseFloat(x.target.value):void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.sortBy")||"Sắp xếp theo"}),t.jsxs($e,{value:P.sortBy||"occurredAt",onValueChange:x=>H("sortBy",x),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{})}),t.jsxs(be,{children:[t.jsx(G,{value:"occurredAt",children:e("wallet.transactions.sortByDate")||"Ngày giao dịch"}),t.jsx(G,{value:"amount",children:e("wallet.transactions.sortByAmount")||"Số tiền"}),t.jsx(G,{value:"createdAt",children:e("wallet.transactions.sortByCreated")||"Ngày tạo"})]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.sortOrder")||"Thứ tự"}),t.jsxs($e,{value:P.sortOrder||"desc",onValueChange:x=>H("sortOrder",x),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{})}),t.jsxs(be,{children:[t.jsx(G,{value:"desc",children:e("wallet.transactions.desc")||"Giảm dần"}),t.jsx(G,{value:"asc",children:e("wallet.transactions.asc")||"Tăng dần"})]})]})]})]})})}),d&&s.length===0?t.jsx("div",{className:"loading-state",children:t.jsx("div",{className:"skeleton-list",children:[...Array(5)].map((x,R)=>t.jsx(ce,{className:"skeleton-card",children:t.jsxs(ye,{className:"p-6",children:[t.jsx(ue,{className:"h-4 w-32 mb-2"}),t.jsx(ue,{className:"h-6 w-24 mb-2"}),t.jsx(ue,{className:"h-3 w-48"})]})},R))})}):s.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("div",{className:"empty-icon",children:t.jsx(U,{icon:"FileText",size:48,color:"currentColor"})}),t.jsx("p",{children:e("wallet.transactions.noTransactions")}),t.jsxs(W,{onClick:()=>o("transactions/add"),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.addFirst")||"Thêm giao dịch đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"transaction-list",children:s.map(x=>{var R,V,M,I,B;return t.jsx("div",{className:"transaction-card",onClick:()=>ne(x),children:t.jsxs("div",{className:"transaction-main",children:[t.jsxs("div",{className:"transaction-left",children:[t.jsx(he,{variant:x.type==="EXPENSE"?"destructive":x.type==="INCOME"?"default":"secondary",className:`transaction-type-badge transaction-type-badge--${x.type.toLowerCase()}`,children:x.type==="EXPENSE"?e("wallet.transactions.expense"):x.type==="INCOME"?e("wallet.transactions.income"):e("wallet.transactions.transfer")}),t.jsxs("div",{className:"transaction-info",children:[t.jsx("div",{className:"transaction-category",children:((R=x.category)==null?void 0:R.name)||(x.categoryId?(V=a.find(oe=>oe.id===x.categoryId))==null?void 0:V.name:null)||x.type}),t.jsxs("div",{className:"transaction-meta",children:[t.jsx("span",{className:"transaction-date",children:K(x.occurredAt)}),x.type==="TRANSFER"?t.jsxs("span",{className:"transaction-account",children:[x.fromAccountId?((M=n.find(oe=>oe.id===x.fromAccountId))==null?void 0:M.name)||x.fromAccountId:"N/A"," →",x.toAccountId?((I=n.find(oe=>oe.id===x.toAccountId))==null?void 0:I.name)||x.toAccountId:"N/A"]}):((B=x.account)==null?void 0:B.name)&&t.jsx("span",{className:"transaction-account",children:x.account.name})]}),x.note&&t.jsx("div",{className:"transaction-note",children:x.note})]})]}),t.jsx("div",{className:"transaction-right",children:t.jsxs("div",{className:"transaction-amount-wrapper",children:[t.jsxs("div",{className:`transaction-amount transaction-amount--${x.type.toLowerCase()}`,children:[x.type==="EXPENSE"?"-":x.type==="INCOME"?"+":"",D(x.amount,x.currency)]}),t.jsxs("div",{className:"transaction-actions",onClick:oe=>oe.stopPropagation(),children:[t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>ne(x),title:e("wallet.common.edit"),children:t.jsx(U,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button icon-button--danger",onClick:()=>se(x),title:e("wallet.common.delete"),children:t.jsx(U,{icon:"Delete",size:16,color:"currentColor"})})]})]})})]})},x.id)})}),l&&l.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsxs(W,{variant:"outline",className:`pagination-button ${l.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>q(l.page-1),disabled:!l.hasPrevious,children:[t.jsx(U,{icon:"ChevronLeft",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.previous")||"Trước"})]}),t.jsxs("div",{className:"pagination-info",children:[t.jsxs("span",{children:[e("wallet.transactions.page")||"Trang"," ",l.page+1," / ",l.totalPages]}),t.jsxs("span",{className:"pagination-total",children:["(",l.totalElements," ",e("wallet.transactions.items")||"giao dịch",")"]})]}),t.jsxs(W,{variant:"outline",className:`pagination-button ${l.hasNext?"":"pagination-button--disabled"}`,onClick:()=>q(l.page+1),disabled:!l.hasNext,children:[t.jsx("span",{children:e("wallet.transactions.next")||"Sau"}),t.jsx(U,{icon:"ChevronRight",size:18,color:"currentColor"})]})]})]}),t.jsx(yf,{transactionId:$||"",isOpen:v&&!!$,onClose:fe,onSuccess:me,onDelete:ae})]})},$f=le.div`
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
`,jf=()=>{const{navigate:e}=et(),[o,r]=i.useState([]),[n,a]=i.useState([]),[s,c]=i.useState(!1),[l,u]=i.useState(null),[d,f]=i.useState({type:"EXPENSE",amount:0,currency:"VND",accountId:"",occurredAt:new Date().toISOString().split("T")[0]});i.useEffect(()=>{m()},[]),i.useEffect(()=>{d.type!=="TRANSFER"&&f(p=>({...p,fromAccountId:void 0,toAccountId:void 0}))},[d.type]);const m=async()=>{try{const[p,g]=await Promise.all([Y.accounts.getAll(),Y.categories.getAll()]);r(p),a(g),p.length>0&&!d.accountId&&f(w=>({...w,accountId:p[0].id}))}catch(p){console.error("Load accounts/categories error:",p)}},y=async p=>{p.preventDefault(),u(null),c(!0);try{if(!d.accountId)throw new Error("Vui lòng chọn tài khoản");if(d.amount<=0)throw new Error("Số tiền phải lớn hơn 0");if(d.type==="TRANSFER"){if(!d.fromAccountId||!d.toAccountId)throw new Error("Vui lòng chọn tài khoản nguồn và đích");if(d.fromAccountId===d.toAccountId)throw new Error("Tài khoản nguồn và đích phải khác nhau")}const g=d.occurredAt?new Date(d.occurredAt).toISOString():new Date().toISOString();await Y.transactions.create({...d,occurredAt:g}),e("transactions")}catch(g){u(ie(g))}finally{c(!1)}},b=(p,g)=>{f(w=>({...w,[p]:g}))},S=()=>{e("transactions")};return t.jsxs(Nf,{className:"add-transaction-wrapper",children:[t.jsxs("div",{className:"page-header",children:[t.jsx("button",{className:"back-button",onClick:S,title:"Quay lại",children:t.jsx(U,{icon:"Back",size:20,color:"currentColor"})}),t.jsx("h1",{className:"title",children:"Thêm giao dịch"})]}),l&&t.jsx("div",{className:"error-message",children:l}),t.jsxs("form",{className:"form",onSubmit:y,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Loại giao dịch *"}),t.jsxs("select",{className:"select",value:d.type,onChange:p=>b("type",p.target.value),required:!0,children:[t.jsx("option",{value:"EXPENSE",children:"Chi tiêu"}),t.jsx("option",{value:"INCOME",children:"Thu nhập"}),t.jsx("option",{value:"TRANSFER",children:"Chuyển khoản"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Số tiền *"}),t.jsx("input",{className:"input",type:"number",step:"0.01",min:"0",value:d.amount||"",onChange:p=>b("amount",parseFloat(p.target.value)||0),placeholder:"0",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tiền tệ"}),t.jsxs("select",{className:"select",value:d.currency,onChange:p=>b("currency",p.target.value),children:[t.jsx("option",{value:"VND",children:"VND (₫)"}),t.jsx("option",{value:"USD",children:"USD ($)"}),t.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),d.type==="TRANSFER"?t.jsxs("div",{className:"transfer-fields",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản nguồn *"}),t.jsxs("select",{className:"select",value:d.fromAccountId||"",onChange:p=>b("fromAccountId",p.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản nguồn"}),o.map(p=>t.jsxs("option",{value:p.id,children:[p.name," (",p.type,")"]},p.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản đích *"}),t.jsxs("select",{className:"select",value:d.toAccountId||"",onChange:p=>b("toAccountId",p.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản đích"}),o.filter(p=>p.id!==d.fromAccountId).map(p=>t.jsxs("option",{value:p.id,children:[p.name," (",p.type,")"]},p.id))]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản *"}),t.jsxs("select",{className:"select",value:d.accountId,onChange:p=>b("accountId",p.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản"}),o.map(p=>t.jsxs("option",{value:p.id,children:[p.name," (",p.type,")"]},p.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Danh mục"}),t.jsxs("select",{className:"select",value:d.categoryId||"",onChange:p=>b("categoryId",p.target.value||void 0),children:[t.jsx("option",{value:"",children:"Không có"}),n.map(p=>t.jsx("option",{value:p.id,children:p.name},p.id))]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ngày giao dịch"}),t.jsx("input",{className:"input",type:"date",value:d.occurredAt||"",onChange:p=>b("occurredAt",p.target.value)})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ghi chú"}),t.jsx(Ze,{value:d.note||"",onChange:p=>b("note",p.target.value||void 0),placeholder:"Thêm ghi chú cho giao dịch này...",rows:3})]}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{className:"cancel-button",type:"button",onClick:()=>e("transactions"),disabled:s,children:"Hủy"}),t.jsx("button",{className:`submit-button ${s?"submit-button--loading":""}`,type:"submit",disabled:s,children:s?"Đang lưu...":"Lưu giao dịch"})]})]})]})},Nf=le.div`
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
`,Sf=()=>{const{navigate:e}=et(),[o,r]=i.useState(null),[n,a]=i.useState([]),[s,c]=i.useState([]),[l,u]=i.useState(!0),[d,f]=i.useState(!1),[m,y]=i.useState(!1),[b,S]=i.useState(null),[p,g]=i.useState(null);i.useEffect(()=>{const k=sessionStorage.getItem("editTransactionId");k?(g(k),sessionStorage.removeItem("editTransactionId")):(S("Không tìm thấy ID giao dịch"),u(!1))},[]);const[w,h]=i.useState({});i.useEffect(()=>{p&&$()},[p]);const $=async()=>{if(p){u(!0),S(null);try{const[k,T,P]=await Promise.all([Y.transactions.getById(p),Y.accounts.getAll(),Y.categories.getAll()]);r(k),a(T),c(P),h({type:k.type,amount:k.amount,currency:k.currency,accountId:k.accountId,categoryId:k.categoryId,fromAccountId:k.fromAccountId,toAccountId:k.toAccountId,occurredAt:k.occurredAt.split("T")[0],note:k.note})}catch(k){S(ie(k))}finally{u(!1)}}},N=async k=>{k.preventDefault(),S(null),f(!0);try{if(!o)return;await Y.transactions.update(o.id,w),e("transactions")}catch(T){S(ie(T))}finally{f(!1)}},v=async()=>{if(!(!o||!window.confirm("Bạn có chắc muốn xóa giao dịch này?"))){y(!0),S(null);try{await Y.transactions.delete(o.id),e("transactions")}catch(k){S(ie(k))}finally{y(!1)}}},A=(k,T)=>{h(P=>({...P,[k]:T}))};return l?t.jsxs(Fo,{className:"edit-transaction-wrapper",children:[t.jsx("h1",{className:"title",children:"Sửa giao dịch"}),t.jsx("div",{className:"loading-state",children:"Đang tải dữ liệu..."})]}):o?t.jsxs(Fo,{className:"edit-transaction-wrapper",children:[t.jsx("h1",{className:"title",children:"Sửa giao dịch"}),b&&t.jsx("div",{className:"error-message",children:b}),t.jsxs("form",{className:"form",onSubmit:N,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Loại giao dịch *"}),t.jsxs("select",{className:"select",value:w.type||o.type,onChange:k=>A("type",k.target.value),required:!0,children:[t.jsx("option",{value:"EXPENSE",children:"Chi tiêu"}),t.jsx("option",{value:"INCOME",children:"Thu nhập"}),t.jsx("option",{value:"TRANSFER",children:"Chuyển khoản"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Số tiền *"}),t.jsx("input",{className:"input",type:"number",step:"0.01",min:"0",value:w.amount||o.amount,onChange:k=>A("amount",parseFloat(k.target.value)||0),required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tiền tệ"}),t.jsxs("select",{className:"select",value:w.currency||o.currency,onChange:k=>A("currency",k.target.value),children:[t.jsx("option",{value:"VND",children:"VND (₫)"}),t.jsx("option",{value:"USD",children:"USD ($)"}),t.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),(w.type||o.type)==="TRANSFER"?t.jsxs("div",{className:"transfer-fields",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản nguồn *"}),t.jsxs("select",{className:"select",value:w.fromAccountId||o.fromAccountId||"",onChange:k=>A("fromAccountId",k.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản nguồn"}),n.map(k=>t.jsxs("option",{value:k.id,children:[k.name," (",k.type,")"]},k.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản đích *"}),t.jsxs("select",{className:"select",value:w.toAccountId||o.toAccountId||"",onChange:k=>A("toAccountId",k.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản đích"}),n.filter(k=>k.id!==(w.fromAccountId||o.fromAccountId)).map(k=>t.jsxs("option",{value:k.id,children:[k.name," (",k.type,")"]},k.id))]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản *"}),t.jsx("select",{className:"select",value:w.accountId||o.accountId,onChange:k=>A("accountId",k.target.value),required:!0,children:n.map(k=>t.jsxs("option",{value:k.id,children:[k.name," (",k.type,")"]},k.id))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Danh mục"}),t.jsxs("select",{className:"select",value:w.categoryId||o.categoryId||"",onChange:k=>A("categoryId",k.target.value||void 0),children:[t.jsx("option",{value:"",children:"Không có"}),s.map(k=>t.jsx("option",{value:k.id,children:k.name},k.id))]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ngày giao dịch"}),t.jsx("input",{className:"input",type:"date",value:w.occurredAt||o.occurredAt.split("T")[0],onChange:k=>A("occurredAt",k.target.value)})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ghi chú"}),t.jsx(Ze,{value:w.note||o.note||"",onChange:k=>A("note",k.target.value||void 0),rows:3})]}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{className:"cancel-button",type:"button",onClick:()=>e("transactions"),disabled:d||m,children:"Hủy"}),t.jsx("button",{className:`submit-button ${d?"submit-button--loading":""}`,type:"submit",disabled:d||m,children:d?"Đang lưu...":"Lưu thay đổi"})]}),t.jsxs("button",{className:"delete-button",type:"button",onClick:v,disabled:d||m,children:[t.jsx(U,{icon:m?"Loading":"Delete",size:18,color:"currentColor"}),t.jsx("span",{children:m?"Đang xóa...":"Xóa giao dịch"})]})]})]}):t.jsxs(Fo,{className:"edit-transaction-wrapper",children:[t.jsx("h1",{className:"title",children:"Sửa giao dịch"}),t.jsx("div",{className:"error-message",children:"Không tìm thấy giao dịch"}),t.jsx("button",{className:"cancel-button",onClick:()=>e("transactions"),style:{marginTop:"16px"},children:"Quay lại"})]})},Fo=le.div`
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
`,kf=()=>{const[e,o]=i.useState([]),[r,n]=i.useState(!0),[a,s]=i.useState(null),[c,l]=i.useState(!1),[u,d]=i.useState(null),[f,m]=i.useState(!1),[y,b]=i.useState({name:"",type:"CASH",currency:"VND",openingBalance:0,note:""});i.useEffect(()=>{S()},[]);const S=async()=>{n(!0),s(null);try{const v=await Y.accounts.getAll();o(v)}catch(v){s(ie(v))}finally{n(!1)}},p=v=>{v?(d(v),b({name:v.name,type:v.type,currency:v.currency,openingBalance:v.openingBalance,note:v.note||""})):(d(null),b({name:"",type:"CASH",currency:"VND",openingBalance:0,note:""})),l(!0)},g=()=>{l(!1),d(null),b({name:"",type:"CASH",currency:"VND",openingBalance:0,note:""})},w=async v=>{v.preventDefault(),s(null),m(!0);try{u?await Y.accounts.update(u.id,y):await Y.accounts.create(y),await S(),g()}catch(A){s(ie(A))}finally{m(!1)}},h=async v=>{if(window.confirm(`Bạn có chắc muốn xóa tài khoản "${v.name}"?`))try{await Y.accounts.delete(v.id),await S()}catch(A){s(ie(A))}},$=(v,A="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:A}).format(v),N=v=>({CASH:"Tiền mặt",BANK:"Ngân hàng",E_WALLET:"Ví điện tử",OTHER:"Khác"})[v]||v;return r?t.jsxs(gn,{className:"accounts-wrapper",children:[t.jsx("h1",{className:"title",children:"Tài khoản"}),t.jsxs("div",{className:"loading-state",children:[t.jsx(ue,{className:"h-8 w-48 mb-4"}),t.jsx(ue,{className:"h-32 w-full"})]})]}):t.jsxs(gn,{className:"accounts-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Tài khoản"}),t.jsxs(W,{onClick:()=>p(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài khoản"})]})]}),a&&t.jsx(Qe,{variant:"destructive",children:t.jsx(Je,{children:a})}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có tài khoản nào"}),t.jsx(W,{onClick:()=>p(),className:"gap-2",style:{marginTop:"16px"},children:"Thêm tài khoản đầu tiên"})]}):t.jsx("div",{className:"accounts-grid",children:e.map(v=>t.jsxs(ce,{className:"account-card",onClick:()=>p(v),children:[t.jsxs("div",{className:"account-header",children:[t.jsx("h3",{className:"account-name",children:v.name}),t.jsx("span",{className:"account-type",children:N(v.type)})]}),t.jsx("div",{className:"account-balance",children:$(v.currentBalance??v.openingBalance??0,v.currency)}),t.jsxs("div",{className:"account-details",children:[t.jsxs("div",{children:["Tiền tệ: ",v.currency]}),v.note&&t.jsx("div",{children:v.note})]}),t.jsxs("div",{className:"account-actions",onClick:A=>A.stopPropagation(),children:[t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>p(v),title:"Sửa",children:t.jsx(U,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>h(v),title:"Xóa",children:t.jsx(U,{icon:"Delete",size:16,color:"currentColor"})})]})]},v.id))}),t.jsx(Nt,{open:c,onOpenChange:v=>!v&&g(),children:t.jsxs(it,{className:"modal-content",children:[t.jsxs(lt,{children:[t.jsx(dt,{className:"modal-title",children:u?"Sửa tài khoản":"Thêm tài khoản"}),t.jsx(ut,{children:u?"Cập nhật thông tin tài khoản của bạn":"Thêm tài khoản mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:w,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Tên tài khoản *"}),t.jsx(J,{className:"input",type:"text",value:y.name,onChange:v=>b({...y,name:v.target.value}),placeholder:"Ví dụ: Ví tiền mặt, Tài khoản ngân hàng...",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Loại *"}),t.jsxs($e,{value:y.type,onValueChange:v=>b({...y,type:v}),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{})}),t.jsxs(be,{children:[t.jsx(G,{value:"CASH",children:"Tiền mặt"}),t.jsx(G,{value:"BANK",children:"Ngân hàng"}),t.jsx(G,{value:"E_WALLET",children:"Ví điện tử"}),t.jsx(G,{value:"OTHER",children:"Khác"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Tiền tệ *"}),t.jsxs($e,{value:y.currency,onValueChange:v=>b({...y,currency:v}),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{})}),t.jsxs(be,{children:[t.jsx(G,{value:"VND",children:"VND (₫)"}),t.jsx(G,{value:"USD",children:"USD ($)"}),t.jsx(G,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Số dư ban đầu"}),t.jsx(J,{className:"input",type:"number",step:"0.01",value:y.openingBalance,onChange:v=>b({...y,openingBalance:parseFloat(v.target.value)||0})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Ghi chú"}),t.jsx(Ze,{value:y.note||"",onChange:v=>b({...y,note:v.target.value}),placeholder:"Thêm ghi chú cho tài khoản này...",rows:3})]}),t.jsxs(ct,{className:"button-group",children:[t.jsx(W,{variant:"outline",type:"button",onClick:g,disabled:f,className:"cancel-button",children:"Hủy"}),t.jsx(W,{type:"submit",disabled:f,className:`submit-button ${f?"submit-button--loading":""}`,children:f?"Đang lưu...":u?"Lưu thay đổi":"Tạo tài khoản"})]})]})]})})]})},gn=le.div`
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
`,Cf=()=>{const{t:e}=Be(),o=go(),r=Ee(N=>N.categories.items),n=Ee(N=>N.categories.isLoading),a=Ee(N=>N.categories.error),s=Ee(N=>N.categories.lastFetched),[c,l]=i.useState(null),[u,d]=i.useState(!1),[f,m]=i.useState(null),[y,b]=i.useState(!1),[S,p]=i.useState({name:"",icon:"Categories",color:"#0ea5e9"});i.useEffect(()=>{const N=Date.now()-3e5;(!s||s<N)&&o(vn())},[o,s]),i.useEffect(()=>{a&&l(a)},[a]);const g=N=>{N?(m(N),p({name:N.name,icon:N.icon||"📁",color:N.color||"#0ea5e9"})):(m(null),p({name:"",icon:"📁",color:"#0ea5e9"})),d(!0)},w=()=>{d(!1),m(null),p({name:"",icon:"📁",color:"#0ea5e9"})},h=async N=>{N.preventDefault(),l(null),b(!0);try{if(f){const v=await Y.categories.update(f.id,S);o(ui(v))}else{const v=await Y.categories.create(S);o(pi(v))}w()}catch(v){l(ie(v))}finally{b(!1)}},$=i.useCallback(async N=>{if(N.isSystem){alert(e("wallet.categories.cannotDeleteSystem")||"Không thể xóa danh mục hệ thống");return}if(window.confirm(e("wallet.categories.confirmDelete",{name:N.name})||`Bạn có chắc muốn xóa danh mục "${N.name}"?`))try{await Y.categories.delete(N.id),o(di(N.id))}catch(v){l(ie(v))}},[o,e]);return t.jsxs(Tf,{className:"categories-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:e("wallet.categories.title")}),t.jsxs(W,{onClick:()=>g(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.categories.add")})]})]}),c&&t.jsx(Qe,{variant:"destructive",children:t.jsx(Je,{children:c})}),n&&r.length===0?t.jsx("div",{className:"loading-state",children:t.jsx("div",{className:"skeleton-grid",children:[...Array(8)].map((N,v)=>t.jsxs(ce,{className:"skeleton-card",children:[t.jsx(ue,{className:"h-16 w-16 rounded-full mb-4"}),t.jsx(ue,{className:"h-4 w-24"})]},v))})}):r.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("div",{className:"empty-icon",children:t.jsx(U,{icon:"Categories",size:48,color:"currentColor"})}),t.jsx("p",{children:e("wallet.categories.noCategories")}),t.jsxs(W,{onClick:()=>g(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.categories.addFirst")||"Thêm danh mục đầu tiên"})]})]}):t.jsx("div",{className:"categories-grid",children:r.map(N=>t.jsxs(ce,{className:"category-card",onClick:()=>!N.isSystem&&g(N),children:[N.isSystem&&t.jsx(he,{variant:"secondary",className:"system-badge",children:e("wallet.categories.system")||"Hệ thống"}),t.jsx("div",{className:"category-icon-wrapper",style:{"--category-color":N.color||"#0ea5e9"},children:N.icon?(()=>{const v=Ml(N.icon);return v?t.jsx(v,{size:40,color:N.color||"#0ea5e9",strokeWidth:2}):t.jsx("span",{className:"category-icon-emoji",children:N.icon})})():t.jsx(U,{icon:"Categories",size:40,color:N.color||"#0ea5e9"})}),t.jsx("div",{className:"category-name",children:N.name}),!N.isSystem&&t.jsxs("div",{className:"category-actions",onClick:v=>v.stopPropagation(),children:[t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>g(N),title:e("wallet.common.edit"),children:t.jsx(U,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button icon-button--danger",onClick:()=>$(N),title:e("wallet.common.delete"),children:t.jsx(U,{icon:"Delete",size:16,color:"currentColor"})})]})]},N.id))}),t.jsx(Nt,{open:u,onOpenChange:N=>!N&&w(),children:t.jsxs(it,{className:"modal-content",children:[t.jsxs(lt,{children:[t.jsx(dt,{className:"modal-title",children:e(f?"wallet.categories.edit":"wallet.categories.add")}),t.jsx(ut,{children:f?"Cập nhật thông tin danh mục":"Thêm danh mục mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:h,children:[t.jsxs("div",{className:"form-group",children:[t.jsxs(X,{className:"label",children:[e("wallet.categories.name")||"Tên danh mục"," *"]}),t.jsx(J,{className:"input",type:"text",value:S.name,onChange:N=>p({...S,name:N.target.value}),placeholder:e("wallet.categories.namePlaceholder")||"Ví dụ: Ăn uống, Mua sắm...",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:e("wallet.categories.icon")||"Icon"}),t.jsx(J,{className:"input",type:"text",value:S.icon,onChange:N=>p({...S,icon:N.target.value}),placeholder:"Categories"}),t.jsx("div",{className:"form-hint",children:e("wallet.categories.iconHint")||"Nhập tên icon từ Lucide (ví dụ: Utensils, Car, ShoppingBag)"})]}),t.jsxs(ct,{className:"button-group",children:[t.jsx(W,{variant:"outline",type:"button",onClick:w,disabled:y,className:"cancel-button",children:e("wallet.common.cancel")}),t.jsx(W,{type:"submit",disabled:y,className:`submit-button ${y?"submit-button--loading":""}`,children:y?e("wallet.common.saving")||"Đang lưu...":f?e("wallet.common.save"):e("wallet.categories.create")||"Tạo danh mục"})]})]})]})})]})},Tf=le.div`
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
`,Af=()=>{const[e,o]=i.useState([]),[r,n]=i.useState(!0),[a,s]=i.useState(null);i.useEffect(()=>{c()},[]);const c=async()=>{n(!0),s(null);try{const d=await Y.budgets.getAll();o(d)}catch(d){s(ie(d))}finally{n(!1)}},l=(d,f="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:f}).format(d),u=d=>{if(!d)return"";let f="";if(typeof d=="string")f=d;else if(typeof d=="object"&&d.year&&d.month)f=`${d.year}-${String(d.month).padStart(2,"0")}`;else return"";const[m,y]=f.split("-");return new Date(parseInt(m),parseInt(y)-1).toLocaleDateString("vi-VN",{month:"long",year:"numeric"})};return r?t.jsxs(fn,{className:"budgets-wrapper",children:[t.jsx("h1",{className:"title",children:"Ngân sách"}),t.jsxs("div",{className:"loading-state",children:[t.jsx(ue,{className:"h-8 w-48 mb-4"}),t.jsx(ue,{className:"h-32 w-full"})]})]}):t.jsxs(fn,{className:"budgets-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Ngân sách"}),t.jsxs(W,{onClick:()=>{alert("Tính năng thêm ngân sách sẽ được implement")},className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm ngân sách"})]})]}),a&&t.jsx(Qe,{variant:"destructive",children:t.jsx(Je,{children:a})}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có ngân sách nào"}),t.jsx(W,{onClick:()=>{alert("Tính năng thêm ngân sách sẽ được implement")},className:"gap-2",style:{marginTop:"16px"},children:"Thêm ngân sách đầu tiên"})]}):t.jsx("div",{className:"budgets-list",children:e.map(d=>{const f=(d.percentageUsed??0)||0,m=(d.amount??0)||0,y=(d.usedAmount??0)||0,b=(d.remainingAmount??0)||0,S=d.month;return t.jsxs(ce,{className:"budget-card",children:[t.jsxs("div",{className:"budget-header",children:[t.jsx("h3",{className:"budget-month",children:u(S)}),t.jsxs("div",{className:"budget-amount",children:[l(y)," / ",l(m)]})]}),t.jsx("div",{className:"progress-bar",children:t.jsx("div",{className:"progress-fill",style:{width:`${Math.max(0,Math.min(f,100))}%`,background:f>=100?"#ef4444":f>=80?"#f59e0b":void 0}})}),t.jsxs("div",{className:"budget-stats",children:[t.jsxs("span",{children:["Đã dùng: ",isNaN(f)?"0.0":f.toFixed(1),"%"]}),t.jsxs("span",{children:["Còn lại: ",l(b)]})]})]},d.id||(typeof S=="string"?S:""))})})]})},fn=le.div`
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
`,Ef=()=>{const[e,o]=i.useState([]),[r,n]=i.useState(null),[a,s]=i.useState(!0),[c,l]=i.useState(null),[u,d]=i.useState(!1),[f,m]=i.useState(null),[y,b]=i.useState(!1),[S,p]=i.useState(0),[g,w]=i.useState({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""}),h=i.useCallback(async(C=0)=>{s(!0),l(null);try{const E=await Y.receivables.getAll(C,10);o(E.content),n(E)}catch(E){l(ie(E))}finally{s(!1)}},[]);i.useEffect(()=>{h(S)},[S,h]);const $=C=>{C?(m(C),w({counterpartyName:C.counterpartyName,amount:C.amount,currency:C.currency,occurredAt:C.occurredAt.split("T")[0],dueAt:C.dueAt?C.dueAt.split("T")[0]:"",note:C.note||""})):(m(null),w({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""})),d(!0)},N=()=>{d(!1),m(null),w({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""})},v=async C=>{C.preventDefault(),l(null),b(!0);try{if(f){const E={counterpartyName:g.counterpartyName,amount:g.amount,currency:g.currency,occurredAt:g.occurredAt?new Date(g.occurredAt).toISOString():void 0,dueAt:g.dueAt?new Date(g.dueAt).toISOString():void 0,note:g.note||void 0};await Y.receivables.update(f.id,E)}else{const E={counterpartyName:g.counterpartyName,amount:g.amount,currency:g.currency,occurredAt:g.occurredAt?new Date(g.occurredAt).toISOString():void 0,dueAt:g.dueAt?new Date(g.dueAt).toISOString():void 0,note:g.note||void 0};await Y.receivables.create(E)}await h(S),N()}catch(E){l(ie(E))}finally{b(!1)}},A=async C=>{if(window.confirm(`Bạn có chắc muốn xóa khoản cho vay "${C.counterpartyName}"?`))try{await Y.receivables.delete(C.id),await h(S)}catch(E){l(ie(E))}},k=(C,E="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:E}).format(C),T=C=>new Date(C).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"}),P=C=>({OPEN:"Mở",PARTIALLY_PAID:"Đã trả một phần",PAID:"Đã trả đủ",OVERDUE:"Quá hạn"})[C]||C;return a&&e.length===0?t.jsxs(mn,{className:"receivables-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Cho vay"}),t.jsxs(W,{onClick:()=>$(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản cho vay"})]})]}),t.jsxs("div",{className:"loading-state",children:[t.jsx(ue,{className:"h-8 w-48 mb-4"}),t.jsx(ue,{className:"h-32 w-full"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(mn,{className:"receivables-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Cho vay"}),t.jsxs(W,{onClick:()=>$(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản cho vay"})]})]}),c&&t.jsx(Qe,{variant:"destructive",children:t.jsx(Je,{children:c})}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có khoản cho vay nào"}),t.jsxs(W,{onClick:()=>$(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản cho vay đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"receivables-grid",children:e.map(C=>t.jsxs(ce,{className:`receivable-card ${C.isOverdue?"receivable-card--overdue":""}`,onClick:()=>$(C),children:[t.jsxs("div",{className:"receivable-header",children:[t.jsx("h3",{className:"receivable-name",children:C.counterpartyName}),t.jsx(he,{variant:C.status==="PAID"?"default":C.isOverdue?"destructive":"secondary",className:`status-badge status-badge--${C.status.toLowerCase()}`,children:P(C.status)})]}),t.jsxs("div",{className:"receivable-details",children:[t.jsxs("div",{children:["Số tiền: ",k(C.amount,C.currency)]}),t.jsxs("div",{children:["Đã trả: ",k(C.paidAmount??0,C.currency)]}),t.jsxs("div",{children:["Còn lại: ",k(C.remainingAmount??0,C.currency)]}),C.dueAt&&t.jsxs("div",{children:["Hạn thanh toán: ",T(C.dueAt)]}),C.note&&t.jsxs("div",{children:["Ghi chú: ",C.note]})]}),t.jsx("div",{className:"receivable-amount",children:k(C.remainingAmount??0,C.currency)}),t.jsxs("div",{className:"receivable-actions",onClick:E=>E.stopPropagation(),children:[t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>$(C),title:"Sửa",children:t.jsx(U,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>A(C),title:"Xóa",children:t.jsx(U,{icon:"Delete",size:16,color:"currentColor"})})]})]},C.id))}),r&&r.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsx(W,{variant:"outline",className:`pagination-button ${r.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>p(r.page-1),disabled:!r.hasPrevious,children:"← Trước"}),t.jsxs("span",{children:["Trang ",r.page+1," / ",r.totalPages]}),t.jsx(W,{variant:"outline",className:`pagination-button ${r.hasNext?"":"pagination-button--disabled"}`,onClick:()=>p(r.page+1),disabled:!r.hasNext,children:"Sau →"})]})]})]}),t.jsx(Nt,{open:u,onOpenChange:C=>!C&&N(),children:t.jsxs(Rf,{className:"modal-content",children:[t.jsxs(lt,{children:[t.jsx(dt,{className:"modal-title",children:f?"Sửa khoản cho vay":"Thêm khoản cho vay"}),t.jsx(ut,{children:f?"Cập nhật thông tin khoản cho vay":"Thêm khoản cho vay mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:v,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Tên người vay *"}),t.jsx(J,{className:"input",type:"text",value:g.counterpartyName,onChange:C=>w({...g,counterpartyName:C.target.value}),placeholder:"Nhập tên người vay",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Số tiền *"}),t.jsx(J,{className:"input",type:"number",step:"0.01",min:"0",value:g.amount||"",onChange:C=>w({...g,amount:parseFloat(C.target.value)||0}),placeholder:"0",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Tiền tệ"}),t.jsxs($e,{value:g.currency,onValueChange:C=>w({...g,currency:C}),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{})}),t.jsxs(be,{children:[t.jsx(G,{value:"VND",children:"VND (₫)"}),t.jsx(G,{value:"USD",children:"USD ($)"}),t.jsx(G,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Ngày cho vay"}),t.jsx(J,{className:"input",type:"date",value:g.occurredAt||"",onChange:C=>w({...g,occurredAt:C.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Hạn thanh toán"}),t.jsx(J,{className:"input",type:"date",value:g.dueAt||"",onChange:C=>w({...g,dueAt:C.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Ghi chú"}),t.jsx(Ze,{value:g.note||"",onChange:C=>w({...g,note:C.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),t.jsxs(ct,{className:"button-group",children:[t.jsx(W,{variant:"outline",type:"button",onClick:N,disabled:y,className:"cancel-button",children:"Hủy"}),t.jsx(W,{type:"submit",disabled:y,className:`submit-button ${y?"submit-button--loading":""}`,children:y?"Đang lưu...":f?"Lưu thay đổi":"Tạo khoản cho vay"})]})]})]})})]})},mn=le.div`
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
`,Rf=le(it)`
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
`,If=()=>{const[e,o]=i.useState([]),[r,n]=i.useState(null),[a,s]=i.useState(!0),[c,l]=i.useState(null),[u,d]=i.useState(!1),[f,m]=i.useState(null),[y,b]=i.useState(!1),[S,p]=i.useState(0),[g,w]=i.useState({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""}),h=i.useCallback(async(C=0)=>{s(!0),l(null);try{const E=await Y.liabilities.getAll(C,10);o(E.content),n(E)}catch(E){l(ie(E))}finally{s(!1)}},[]);i.useEffect(()=>{h(S)},[S,h]);const $=C=>{C?(m(C),w({counterpartyName:C.counterpartyName,amount:C.amount,currency:C.currency,occurredAt:C.occurredAt.split("T")[0],dueAt:C.dueAt?C.dueAt.split("T")[0]:"",note:C.note||""})):(m(null),w({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""})),d(!0)},N=()=>{d(!1),m(null),w({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",note:""})},v=async C=>{C.preventDefault(),l(null),b(!0);try{if(f){const E={counterpartyName:g.counterpartyName,amount:g.amount,currency:g.currency,occurredAt:g.occurredAt?new Date(g.occurredAt).toISOString():void 0,dueAt:g.dueAt?new Date(g.dueAt).toISOString():void 0,note:g.note||void 0};await Y.liabilities.update(f.id,E)}else{const E={counterpartyName:g.counterpartyName,amount:g.amount,currency:g.currency,occurredAt:g.occurredAt?new Date(g.occurredAt).toISOString():void 0,dueAt:g.dueAt?new Date(g.dueAt).toISOString():void 0,note:g.note||void 0};await Y.liabilities.create(E)}await h(S),N()}catch(E){l(ie(E))}finally{b(!1)}},A=async C=>{if(window.confirm(`Bạn có chắc muốn xóa khoản nợ "${C.counterpartyName}"?`))try{await Y.liabilities.delete(C.id),await h(S)}catch(E){l(ie(E))}},k=(C,E="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:E}).format(C),T=C=>new Date(C).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"}),P=C=>({OPEN:"Mở",PARTIALLY_PAID:"Đã trả một phần",PAID:"Đã trả đủ",OVERDUE:"Quá hạn"})[C]||C;return a&&e.length===0?t.jsxs(hn,{className:"liabilities-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Nợ"}),t.jsxs(W,{onClick:()=>$(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản nợ"})]})]}),t.jsxs("div",{className:"loading-state",children:[t.jsx(ue,{className:"h-8 w-48 mb-4"}),t.jsx(ue,{className:"h-32 w-full"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(hn,{className:"liabilities-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Nợ"}),t.jsxs(W,{onClick:()=>$(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản nợ"})]})]}),c&&t.jsx(Qe,{variant:"destructive",children:t.jsx(Je,{children:c})}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có khoản nợ nào"}),t.jsxs(W,{onClick:()=>$(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản nợ đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"liabilities-grid",children:e.map(C=>t.jsxs(ce,{className:`liability-card ${C.isOverdue?"liability-card--overdue":""}`,onClick:()=>$(C),children:[t.jsxs("div",{className:"liability-header",children:[t.jsx("h3",{className:"liability-name",children:C.counterpartyName}),t.jsx(he,{variant:C.status==="PAID"?"default":C.isOverdue?"destructive":"secondary",className:`status-badge status-badge--${C.status.toLowerCase()}`,children:P(C.status)})]}),t.jsxs("div",{className:"liability-details",children:[t.jsxs("div",{children:["Số tiền: ",k(C.amount,C.currency)]}),t.jsxs("div",{children:["Đã trả: ",k(C.paidAmount??0,C.currency)]}),t.jsxs("div",{children:["Còn lại: ",k(C.remainingAmount??0,C.currency)]}),C.dueAt&&t.jsxs("div",{children:["Hạn thanh toán: ",T(C.dueAt)]}),C.note&&t.jsxs("div",{children:["Ghi chú: ",C.note]})]}),t.jsx("div",{className:"liability-amount",children:k(C.remainingAmount??0,C.currency)}),t.jsxs("div",{className:"liability-actions",onClick:E=>E.stopPropagation(),children:[t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>$(C),title:"Sửa",children:t.jsx(U,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>A(C),title:"Xóa",children:t.jsx(U,{icon:"Delete",size:16,color:"currentColor"})})]})]},C.id))}),r&&r.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsx(W,{variant:"outline",className:`pagination-button ${r.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>p(r.page-1),disabled:!r.hasPrevious,children:"← Trước"}),t.jsxs("span",{children:["Trang ",r.page+1," / ",r.totalPages]}),t.jsx(W,{variant:"outline",className:`pagination-button ${r.hasNext?"":"pagination-button--disabled"}`,onClick:()=>p(r.page+1),disabled:!r.hasNext,children:"Sau →"})]})]})]}),t.jsx(Nt,{open:u,onOpenChange:C=>!C&&N(),children:t.jsxs(Df,{className:"modal-content",children:[t.jsxs(lt,{children:[t.jsx(dt,{className:"modal-title",children:f?"Sửa khoản nợ":"Thêm khoản nợ"}),t.jsx(ut,{children:f?"Cập nhật thông tin khoản nợ":"Thêm khoản nợ mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:v,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Tên chủ nợ *"}),t.jsx(J,{className:"input",type:"text",value:g.counterpartyName,onChange:C=>w({...g,counterpartyName:C.target.value}),placeholder:"Nhập tên chủ nợ",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Số tiền *"}),t.jsx(J,{className:"input",type:"number",step:"0.01",min:"0",value:g.amount||"",onChange:C=>w({...g,amount:parseFloat(C.target.value)||0}),placeholder:"0",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Tiền tệ"}),t.jsxs($e,{value:g.currency,onValueChange:C=>w({...g,currency:C}),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{})}),t.jsxs(be,{children:[t.jsx(G,{value:"VND",children:"VND (₫)"}),t.jsx(G,{value:"USD",children:"USD ($)"}),t.jsx(G,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Ngày vay"}),t.jsx(J,{className:"input",type:"date",value:g.occurredAt||"",onChange:C=>w({...g,occurredAt:C.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Hạn thanh toán"}),t.jsx(J,{className:"input",type:"date",value:g.dueAt||"",onChange:C=>w({...g,dueAt:C.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Ghi chú"}),t.jsx(Ze,{value:g.note||"",onChange:C=>w({...g,note:C.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),t.jsxs(ct,{className:"button-group",children:[t.jsx(W,{variant:"outline",type:"button",onClick:N,disabled:y,className:"cancel-button",children:"Hủy"}),t.jsx(W,{type:"submit",disabled:y,className:`submit-button ${y?"submit-button--loading":""}`,children:y?"Đang lưu...":f?"Lưu thay đổi":"Tạo khoản nợ"})]})]})]})})]})},hn=le.div`
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
`,Df=le(it)`
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
`,zf=()=>{const[e,o]=i.useState([]),[r,n]=i.useState(null),[a,s]=i.useState(0),[c,l]=i.useState(!0),[u,d]=i.useState(null),[f,m]=i.useState(!1),[y,b]=i.useState(null),[S,p]=i.useState(!1),[g,w]=i.useState(0),[h,$]=i.useState({name:"",type:"OTHER",estimatedValue:void 0,currency:"VND",acquiredAt:"",note:""}),N=i.useCallback(async(j=0)=>{l(!0),d(null);try{const[z,O]=await Promise.all([Y.assets.getAll(j,10),Y.assets.getTotalValue().catch(()=>0)]);o(z.content),n(z),s(O??0)}catch(z){d(ie(z))}finally{l(!1)}},[]);i.useEffect(()=>{N(g)},[g,N]);const v=j=>{j?(b(j),$({name:j.name,type:j.type,estimatedValue:j.estimatedValue,currency:j.currency,acquiredAt:j.acquiredAt?j.acquiredAt.split("T")[0]:"",note:j.note||""})):(b(null),$({name:"",type:"OTHER",estimatedValue:void 0,currency:"VND",acquiredAt:"",note:""})),m(!0)},A=()=>{m(!1),b(null),$({name:"",type:"OTHER",estimatedValue:void 0,currency:"VND",acquiredAt:"",note:""})},k=async j=>{j.preventDefault(),d(null),p(!0);try{if(y){const z={name:h.name,type:h.type,acquiredAt:h.acquiredAt?new Date(h.acquiredAt).toISOString():void 0,estimatedValue:h.estimatedValue||void 0,currency:h.currency,note:h.note||void 0};await Y.assets.update(y.id,z)}else{const z={name:h.name,type:h.type,acquiredAt:h.acquiredAt?new Date(h.acquiredAt).toISOString():void 0,estimatedValue:h.estimatedValue||void 0,currency:h.currency,note:h.note||void 0};await Y.assets.create(z)}await N(g),A()}catch(z){d(ie(z))}finally{p(!1)}},T=async j=>{if(window.confirm(`Bạn có chắc muốn xóa tài sản "${j.name}"?`))try{await Y.assets.delete(j.id),await N(g)}catch(z){d(ie(z))}},P=(j,z="VND")=>j==null?"Chưa có":new Intl.NumberFormat("vi-VN",{style:"currency",currency:z}).format(j),C=j=>new Date(j).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"}),E=j=>({CASH:"Tiền mặt",ITEM:"Vật phẩm",DEVICE:"Thiết bị",OTHER:"Khác"})[j]||j;return c&&e.length===0?t.jsxs(yn,{className:"assets-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Tài sản"}),t.jsxs(W,{onClick:()=>v(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài sản"})]})]}),t.jsxs("div",{className:"loading-state",children:[t.jsx(ue,{className:"h-8 w-48 mb-4"}),t.jsx(ue,{className:"h-32 w-full"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(yn,{className:"assets-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Tài sản"}),t.jsxs(W,{onClick:()=>v(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài sản"})]})]}),u&&t.jsx(Qe,{variant:"destructive",children:t.jsx(Je,{children:u})}),a>0&&t.jsxs(ce,{className:"summary-card",children:[t.jsx("h3",{className:"summary-title",children:"Tổng giá trị tài sản"}),t.jsx("div",{className:"summary-value",children:P(a,"VND")})]}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có tài sản nào"}),t.jsxs(W,{onClick:()=>v(),className:"gap-2",children:[t.jsx(U,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài sản đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"assets-grid",children:e.map(j=>t.jsxs(ce,{className:"asset-card",onClick:()=>v(j),children:[t.jsxs("div",{className:"asset-header",children:[t.jsx("h3",{className:"asset-name",children:j.name}),t.jsx(he,{variant:"secondary",className:`type-badge type-badge--${j.type.toLowerCase()}`,children:E(j.type)})]}),t.jsxs("div",{className:"asset-details",children:[j.estimatedValue!==void 0&&t.jsxs("div",{children:["Giá trị ước tính: ",P(j.estimatedValue,j.currency)]}),j.acquiredAt&&t.jsxs("div",{children:["Ngày mua: ",C(j.acquiredAt)]}),j.note&&t.jsxs("div",{children:["Ghi chú: ",j.note]})]}),j.estimatedValue!==void 0&&t.jsx("div",{className:"asset-value",children:P(j.estimatedValue,j.currency)}),t.jsxs("div",{className:"asset-actions",onClick:z=>z.stopPropagation(),children:[t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>v(j),title:"Sửa",children:t.jsx(U,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(W,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>T(j),title:"Xóa",children:t.jsx(U,{icon:"Delete",size:16,color:"currentColor"})})]})]},j.id))}),r&&r.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsx(W,{variant:"outline",className:`pagination-button ${r.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>w(r.page-1),disabled:!r.hasPrevious,children:"← Trước"}),t.jsxs("span",{children:["Trang ",r.page+1," / ",r.totalPages]}),t.jsx(W,{variant:"outline",className:`pagination-button ${r.hasNext?"":"pagination-button--disabled"}`,onClick:()=>w(r.page+1),disabled:!r.hasNext,children:"Sau →"})]})]})]}),t.jsx(Nt,{open:f,onOpenChange:j=>!j&&A(),children:t.jsxs(Pf,{className:"modal-content",children:[t.jsxs(lt,{children:[t.jsx(dt,{className:"modal-title",children:y?"Sửa tài sản":"Thêm tài sản"}),t.jsx(ut,{children:y?"Cập nhật thông tin tài sản của bạn":"Thêm tài sản mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:k,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Tên tài sản *"}),t.jsx(J,{className:"input",type:"text",value:h.name,onChange:j=>$({...h,name:j.target.value}),placeholder:"Nhập tên tài sản",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Loại tài sản *"}),t.jsxs($e,{value:h.type,onValueChange:j=>$({...h,type:j}),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{})}),t.jsxs(be,{children:[t.jsx(G,{value:"CASH",children:"Tiền mặt"}),t.jsx(G,{value:"ITEM",children:"Vật phẩm"}),t.jsx(G,{value:"DEVICE",children:"Thiết bị"}),t.jsx(G,{value:"OTHER",children:"Khác"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Giá trị ước tính"}),t.jsx(J,{className:"input",type:"number",step:"0.01",min:"0",value:h.estimatedValue||"",onChange:j=>$({...h,estimatedValue:j.target.value?parseFloat(j.target.value):void 0}),placeholder:"0"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Tiền tệ"}),t.jsxs($e,{value:h.currency,onValueChange:j=>$({...h,currency:j}),children:[t.jsx(xe,{className:"select",children:t.jsx(je,{})}),t.jsxs(be,{children:[t.jsx(G,{value:"VND",children:"VND (₫)"}),t.jsx(G,{value:"USD",children:"USD ($)"}),t.jsx(G,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Ngày mua"}),t.jsx(J,{className:"input",type:"date",value:h.acquiredAt||"",onChange:j=>$({...h,acquiredAt:j.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(X,{className:"label",children:"Ghi chú"}),t.jsx(Ze,{value:h.note||"",onChange:j=>$({...h,note:j.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),t.jsxs(ct,{className:"button-group",children:[t.jsx(W,{variant:"outline",type:"button",onClick:A,disabled:S,className:"cancel-button",children:"Hủy"}),t.jsx(W,{type:"submit",disabled:S,className:`submit-button ${S?"submit-button--loading":""}`,children:S?"Đang lưu...":y?"Lưu thay đổi":"Tạo tài sản"})]})]})]})})]})},yn=le.div`
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
`,Pf=le(it)`
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
`,Of=()=>{const{user:e}=fo(),[o,r]=i.useState(!1),n=async()=>{r(!0);try{alert("Tính năng sync đang được phát triển")}catch(a){console.error("Sync error:",a)}finally{r(!1)}};return t.jsxs(Mf,{className:"settings-wrapper",children:[t.jsx("h1",{className:"title",children:"Cài đặt"}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{className:"section-title",children:"Thông tin tài khoản"}),t.jsx(ce,{className:"card",children:t.jsxs(ye,{className:"p-6",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Email"}),t.jsx("span",{className:"info-value",children:(e==null?void 0:e.email)||"-"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Họ tên"}),t.jsx("span",{className:"info-value",children:(e==null?void 0:e.fullName)||"-"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Trạng thái"}),t.jsx(he,{variant:(e==null?void 0:e.status)==="ACTIVE"?"default":"secondary",className:`status-badge status-badge--${(e==null?void 0:e.status)==="ACTIVE"?"active":"inactive"}`,children:(e==null?void 0:e.status)||"UNKNOWN"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Vai trò"}),t.jsx("span",{className:"info-value",children:(e==null?void 0:e.role)||"-"})]})]})})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{className:"section-title",children:"Đồng bộ dữ liệu"}),t.jsx(ce,{className:"card",children:t.jsxs(ye,{className:"p-6",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Trạng thái"}),t.jsx(he,{variant:"default",className:"status-badge status-badge--active",children:"Đã kết nối"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"API Environment"}),t.jsx("span",{className:"info-value",children:Sr.MODE})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"API Base URL"}),t.jsx("span",{className:"info-value",style:{fontSize:"12px",wordBreak:"break-all"},children:Sr.BASE_URL})]}),t.jsx("div",{style:{marginTop:"16px"},children:t.jsx(W,{className:"sync-button",onClick:n,disabled:o,children:o?"Đang đồng bộ...":"🔄 Đồng bộ ngay"})})]})})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{className:"section-title",children:"Quản lý"}),t.jsx(ce,{className:"card",children:t.jsxs(ye,{className:"p-6",children:[t.jsxs("div",{className:"info-row info-row--clickable",onClick:()=>{window.location.hash="#accounts"},children:[t.jsxs("span",{className:"info-label",style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(U,{icon:"Accounts",size:16,color:"currentColor"}),t.jsx("span",{children:"Tài khoản"})]}),t.jsx("span",{className:"info-value",children:"→"})]}),t.jsxs("div",{className:"info-row info-row--clickable",onClick:()=>{window.location.hash="#categories"},children:[t.jsxs("span",{className:"info-label",style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(U,{icon:"Categories",size:16,color:"currentColor"}),t.jsx("span",{children:"Danh mục"})]}),t.jsx("span",{className:"info-value",children:"→"})]})]})})]})]})},Mf=le.div`
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
`;var $r="ToastProvider",[jr,_f,Lf]=Na("Toast"),[Is]=Ot("Toast",[Lf]),[Ff,ko]=Is($r),Ds=e=>{const{__scopeToast:o,label:r="Notification",duration:n=5e3,swipeDirection:a="right",swipeThreshold:s=50,children:c}=e,[l,u]=i.useState(null),[d,f]=i.useState(0),m=i.useRef(!1),y=i.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${$r}\`. Expected non-empty \`string\`.`),t.jsx(jr.Provider,{scope:o,children:t.jsx(Ff,{scope:o,label:r,duration:n,swipeDirection:a,swipeThreshold:s,toastCount:d,viewport:l,onViewportChange:u,onToastAdd:i.useCallback(()=>f(b=>b+1),[]),onToastRemove:i.useCallback(()=>f(b=>b-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:y,children:c})})};Ds.displayName=$r;var zs="ToastViewport",Wf=["F8"],Jo="toast.viewportPause",er="toast.viewportResume",Ps=i.forwardRef((e,o)=>{const{__scopeToast:r,hotkey:n=Wf,label:a="Notifications ({hotkey})",...s}=e,c=ko(zs,r),l=_f(r),u=i.useRef(null),d=i.useRef(null),f=i.useRef(null),m=i.useRef(null),y=de(o,m,c.onViewportChange),b=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),S=c.toastCount>0;i.useEffect(()=>{const g=w=>{var $;n.length!==0&&n.every(N=>w[N]||w.code===N)&&(($=m.current)==null||$.focus())};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[n]),i.useEffect(()=>{const g=u.current,w=m.current;if(S&&g&&w){const h=()=>{if(!c.isClosePausedRef.current){const A=new CustomEvent(Jo);w.dispatchEvent(A),c.isClosePausedRef.current=!0}},$=()=>{if(c.isClosePausedRef.current){const A=new CustomEvent(er);w.dispatchEvent(A),c.isClosePausedRef.current=!1}},N=A=>{!g.contains(A.relatedTarget)&&$()},v=()=>{g.contains(document.activeElement)||$()};return g.addEventListener("focusin",h),g.addEventListener("focusout",N),g.addEventListener("pointermove",h),g.addEventListener("pointerleave",v),window.addEventListener("blur",h),window.addEventListener("focus",$),()=>{g.removeEventListener("focusin",h),g.removeEventListener("focusout",N),g.removeEventListener("pointermove",h),g.removeEventListener("pointerleave",v),window.removeEventListener("blur",h),window.removeEventListener("focus",$)}}},[S,c.isClosePausedRef]);const p=i.useCallback(({tabbingDirection:g})=>{const h=l().map($=>{const N=$.ref.current,v=[N,...em(N)];return g==="forwards"?v:v.reverse()});return(g==="forwards"?h.reverse():h).flat()},[l]);return i.useEffect(()=>{const g=m.current;if(g){const w=h=>{var v,A,k;const $=h.altKey||h.ctrlKey||h.metaKey;if(h.key==="Tab"&&!$){const T=document.activeElement,P=h.shiftKey;if(h.target===g&&P){(v=d.current)==null||v.focus();return}const j=p({tabbingDirection:P?"backwards":"forwards"}),z=j.findIndex(O=>O===T);Wo(j.slice(z+1))?h.preventDefault():P?(A=d.current)==null||A.focus():(k=f.current)==null||k.focus()}};return g.addEventListener("keydown",w),()=>g.removeEventListener("keydown",w)}},[l,p]),t.jsxs(Cd,{ref:u,role:"region","aria-label":a.replace("{hotkey}",b),tabIndex:-1,style:{pointerEvents:S?void 0:"none"},children:[S&&t.jsx(tr,{ref:d,onFocusFromOutsideViewport:()=>{const g=p({tabbingDirection:"forwards"});Wo(g)}}),t.jsx(jr.Slot,{scope:r,children:t.jsx(re.ol,{tabIndex:-1,...s,ref:y})}),S&&t.jsx(tr,{ref:f,onFocusFromOutsideViewport:()=>{const g=p({tabbingDirection:"backwards"});Wo(g)}})]})});Ps.displayName=zs;var Os="ToastFocusProxy",tr=i.forwardRef((e,o)=>{const{__scopeToast:r,onFocusFromOutsideViewport:n,...a}=e,s=ko(Os,r);return t.jsx(vr,{tabIndex:0,...a,ref:o,style:{position:"fixed"},onFocus:c=>{var d;const l=c.relatedTarget;!((d=s.viewport)!=null&&d.contains(l))&&n()}})});tr.displayName=Os;var Lt="Toast",Vf="toast.swipeStart",Bf="toast.swipeMove",Hf="toast.swipeCancel",Uf="toast.swipeEnd",Ms=i.forwardRef((e,o)=>{const{forceMount:r,open:n,defaultOpen:a,onOpenChange:s,...c}=e,[l,u]=ao({prop:n,defaultProp:a??!0,onChange:s,caller:Lt});return t.jsx(Mt,{present:r||l,children:t.jsx(Kf,{open:l,...c,ref:o,onClose:()=>u(!1),onPause:Ie(e.onPause),onResume:Ie(e.onResume),onSwipeStart:ee(e.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ee(e.onSwipeMove,d=>{const{x:f,y:m}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${m}px`)}),onSwipeCancel:ee(e.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ee(e.onSwipeEnd,d=>{const{x:f,y:m}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${m}px`),u(!1)})})})});Ms.displayName=Lt;var[Yf,qf]=Is(Lt,{onClose(){}}),Kf=i.forwardRef((e,o)=>{const{__scopeToast:r,type:n="foreground",duration:a,open:s,onClose:c,onEscapeKeyDown:l,onPause:u,onResume:d,onSwipeStart:f,onSwipeMove:m,onSwipeCancel:y,onSwipeEnd:b,...S}=e,p=ko(Lt,r),[g,w]=i.useState(null),h=de(o,O=>w(O)),$=i.useRef(null),N=i.useRef(null),v=a||p.duration,A=i.useRef(0),k=i.useRef(v),T=i.useRef(0),{onToastAdd:P,onToastRemove:C}=p,E=Ie(()=>{var H;(g==null?void 0:g.contains(document.activeElement))&&((H=p.viewport)==null||H.focus()),c()}),j=i.useCallback(O=>{!O||O===1/0||(window.clearTimeout(T.current),A.current=new Date().getTime(),T.current=window.setTimeout(E,O))},[E]);i.useEffect(()=>{const O=p.viewport;if(O){const H=()=>{j(k.current),d==null||d()},F=()=>{const q=new Date().getTime()-A.current;k.current=k.current-q,window.clearTimeout(T.current),u==null||u()};return O.addEventListener(Jo,F),O.addEventListener(er,H),()=>{O.removeEventListener(Jo,F),O.removeEventListener(er,H)}}},[p.viewport,v,u,d,j]),i.useEffect(()=>{s&&!p.isClosePausedRef.current&&j(v)},[s,v,p.isClosePausedRef,j]),i.useEffect(()=>(P(),()=>C()),[P,C]);const z=i.useMemo(()=>g?Hs(g):null,[g]);return p.viewport?t.jsxs(t.Fragment,{children:[z&&t.jsx(Xf,{__scopeToast:r,role:"status","aria-live":n==="foreground"?"assertive":"polite",children:z}),t.jsx(Yf,{scope:r,onClose:E,children:zt.createPortal(t.jsx(jr.ItemSlot,{scope:r,children:t.jsx(kd,{asChild:!0,onEscapeKeyDown:ee(l,()=>{p.isFocusedToastEscapeKeyDownRef.current||E(),p.isFocusedToastEscapeKeyDownRef.current=!1}),children:t.jsx(re.li,{tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":p.swipeDirection,...S,ref:h,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ee(e.onKeyDown,O=>{O.key==="Escape"&&(l==null||l(O.nativeEvent),O.nativeEvent.defaultPrevented||(p.isFocusedToastEscapeKeyDownRef.current=!0,E()))}),onPointerDown:ee(e.onPointerDown,O=>{O.button===0&&($.current={x:O.clientX,y:O.clientY})}),onPointerMove:ee(e.onPointerMove,O=>{if(!$.current)return;const H=O.clientX-$.current.x,F=O.clientY-$.current.y,q=!!N.current,D=["left","right"].includes(p.swipeDirection),K=["left","up"].includes(p.swipeDirection)?Math.min:Math.max,ne=D?K(0,H):0,fe=D?0:K(0,F),me=O.pointerType==="touch"?10:2,ae={x:ne,y:fe},se={originalEvent:O,delta:ae};q?(N.current=ae,Zt(Bf,m,se,{discrete:!1})):xn(ae,p.swipeDirection,me)?(N.current=ae,Zt(Vf,f,se,{discrete:!1}),O.target.setPointerCapture(O.pointerId)):(Math.abs(H)>me||Math.abs(F)>me)&&($.current=null)}),onPointerUp:ee(e.onPointerUp,O=>{const H=N.current,F=O.target;if(F.hasPointerCapture(O.pointerId)&&F.releasePointerCapture(O.pointerId),N.current=null,$.current=null,H){const q=O.currentTarget,D={originalEvent:O,delta:H};xn(H,p.swipeDirection,p.swipeThreshold)?Zt(Uf,b,D,{discrete:!0}):Zt(Hf,y,D,{discrete:!0}),q.addEventListener("click",K=>K.preventDefault(),{once:!0})}})})})}),p.viewport)})]}):null}),Xf=e=>{const{__scopeToast:o,children:r,...n}=e,a=ko(Lt,o),[s,c]=i.useState(!1),[l,u]=i.useState(!1);return Qf(()=>c(!0)),i.useEffect(()=>{const d=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(d)},[]),l?null:t.jsx(ho,{asChild:!0,children:t.jsx(vr,{...n,children:s&&t.jsxs(t.Fragment,{children:[a.label," ",r]})})})},Gf="ToastTitle",_s=i.forwardRef((e,o)=>{const{__scopeToast:r,...n}=e;return t.jsx(re.div,{...n,ref:o})});_s.displayName=Gf;var Zf="ToastDescription",Ls=i.forwardRef((e,o)=>{const{__scopeToast:r,...n}=e;return t.jsx(re.div,{...n,ref:o})});Ls.displayName=Zf;var Fs="ToastAction",Ws=i.forwardRef((e,o)=>{const{altText:r,...n}=e;return r.trim()?t.jsx(Bs,{altText:r,asChild:!0,children:t.jsx(Nr,{...n,ref:o})}):(console.error(`Invalid prop \`altText\` supplied to \`${Fs}\`. Expected non-empty \`string\`.`),null)});Ws.displayName=Fs;var Vs="ToastClose",Nr=i.forwardRef((e,o)=>{const{__scopeToast:r,...n}=e,a=qf(Vs,r);return t.jsx(Bs,{asChild:!0,children:t.jsx(re.button,{type:"button",...n,ref:o,onClick:ee(e.onClick,a.onClose)})})});Nr.displayName=Vs;var Bs=i.forwardRef((e,o)=>{const{__scopeToast:r,altText:n,...a}=e;return t.jsx(re.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...a,ref:o})});function Hs(e){const o=[];return Array.from(e.childNodes).forEach(n=>{if(n.nodeType===n.TEXT_NODE&&n.textContent&&o.push(n.textContent),Jf(n)){const a=n.ariaHidden||n.hidden||n.style.display==="none",s=n.dataset.radixToastAnnounceExclude==="";if(!a)if(s){const c=n.dataset.radixToastAnnounceAlt;c&&o.push(c)}else o.push(...Hs(n))}}),o}function Zt(e,o,r,{discrete:n}){const a=r.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});o&&a.addEventListener(e,o,{once:!0}),n?Vn(a,s):a.dispatchEvent(s)}var xn=(e,o,r=0)=>{const n=Math.abs(e.x),a=Math.abs(e.y),s=n>a;return o==="left"||o==="right"?s&&n>r:!s&&a>r};function Qf(e=()=>{}){const o=Ie(e);ve(()=>{let r=0,n=0;return r=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(o)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(n)}},[o])}function Jf(e){return e.nodeType===e.ELEMENT_NODE}function em(e){const o=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const a=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||a?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)o.push(r.currentNode);return o}function Wo(e){const o=document.activeElement;return e.some(r=>r===o?!0:(r.focus(),document.activeElement!==o))}var tm=Ds,Us=Ps,Ys=Ms,qs=_s,Ks=Ls,Xs=Ws,Gs=Nr;const om=tm,Zs=i.forwardRef(({className:e,...o},r)=>t.jsx(Us,{ref:r,className:te("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...o}));Zs.displayName=Us.displayName;const rm=Pt("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Qs=i.forwardRef(({className:e,variant:o,...r},n)=>t.jsx(Ys,{ref:n,className:te(rm({variant:o}),e),...r}));Qs.displayName=Ys.displayName;const nm=i.forwardRef(({className:e,...o},r)=>t.jsx(Xs,{ref:r,className:te("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...o}));nm.displayName=Xs.displayName;const Js=i.forwardRef(({className:e,...o},r)=>t.jsx(Gs,{ref:r,className:te("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...o,children:t.jsx(nr,{className:"h-4 w-4"})}));Js.displayName=Gs.displayName;const ei=i.forwardRef(({className:e,...o},r)=>t.jsx(qs,{ref:r,className:te("text-sm font-semibold",e),...o}));ei.displayName=qs.displayName;const ti=i.forwardRef(({className:e,...o},r)=>t.jsx(Ks,{ref:r,className:te("text-sm opacity-90",e),...o}));ti.displayName=Ks.displayName;function am(){const{toasts:e}=Rs();return t.jsxs(om,{children:[e.map(function({id:o,title:r,description:n,action:a,...s}){return t.jsxs(Qs,{...s,children:[t.jsxs("div",{className:"grid gap-1",children:[r&&t.jsx(ei,{children:r}),n&&t.jsx(ti,{children:n})]}),a,t.jsx(Js,{})]},o)}),t.jsx(Zs,{})]})}const oi=i.createContext(null),et=()=>{const e=i.useContext(oi);if(!e)throw new Error("useWalletAppRouter must be used within WalletAppRouter");return e},sm=()=>{const{isAuthenticated:e,isLoading:o}=fo(),r=()=>{if(typeof window<"u"){const l=window.location.hash.slice(1);if(["login","dashboard","transactions","transactions/add","transactions/edit","accounts","categories","budgets","receivables","liabilities","assets","settings"].includes(l))return l}return e?"dashboard":"login"},[n,a]=i.useState(r);i.useEffect(()=>{typeof window<"u"&&(window.location.hash=n)},[n]),i.useEffect(()=>{const l=()=>{const u=window.location.hash.slice(1);["login","dashboard","transactions","transactions/add","transactions/edit","accounts","categories","budgets","receivables","liabilities","assets","settings"].includes(u)&&a(u)};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]);const s=l=>{a(l)};i.useEffect(()=>{!e&&n!=="login"?a("login"):e&&n==="login"&&a("dashboard")},[e,n]);const c=()=>{switch(n){case"login":return t.jsx(Jl,{});case"dashboard":return t.jsx(pn,{});case"transactions":return t.jsx(wf,{});case"transactions/add":return t.jsx(jf,{});case"transactions/edit":return t.jsx(Sf,{});case"accounts":return t.jsx(kf,{});case"categories":return t.jsx(Cf,{});case"budgets":return t.jsx(Af,{});case"receivables":return t.jsx(Ef,{});case"liabilities":return t.jsx(If,{});case"assets":return t.jsx(zf,{});case"settings":return t.jsx(Of,{});default:return t.jsx(pn,{})}};return o?t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0a0a0a"},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[t.jsx("div",{style:{width:"48px",height:"48px",border:"3px solid rgba(14, 165, 233, 0.2)",borderTopColor:"#0ea5e9",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),t.jsx("style",{children:`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}),t.jsx("span",{style:{color:"#a3a3a3",fontSize:"14px",fontWeight:500},children:"Đang tải..."})]})}):t.jsxs(oi.Provider,{value:{currentRoute:n,navigate:s},children:[n==="login"?c():t.jsx(Zl,{children:c()}),t.jsx(am,{})]})},cm=()=>t.jsx(gi,{children:t.jsx(sm,{})});export{cm as default,et as useWalletAppRouter};
