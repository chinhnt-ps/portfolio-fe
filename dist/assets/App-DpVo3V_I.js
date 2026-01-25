import{r as s,j as t,t as Re,w as q,c as xt,l as fi,u as _e,d as me,a as Ye,b as te,e as hi,s as yi,h as de,R as dn,f as Vt,g as xi,i as Je,k as Tr,m as bi,n as it,o as et,p as kt,q as vi,v as wi,x as $i,y as Ni,z as ji,A as Si,B as Pn}from"./index-Kz58KFtH.js";const Ar=s.createContext(null),vo=()=>{const e=s.useContext(Ar);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},ki=({children:e})=>{const[o,n]=s.useState(null),[r,a]=s.useState(!0),i=p=>{try{const b=p.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),$=decodeURIComponent(atob(b).split("").map(v=>"%"+("00"+v.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse($)}catch(g){return console.error("Error decoding JWT:",g),null}};s.useEffect(()=>{(async()=>{const g=Re.getAccessToken();if(g)try{const b=i(g);if(b&&b.exp){const $=b.exp*1e3;if(Date.now()<$)n({id:b.sub||b.userId||"",email:b.email||"",fullName:b.fullName||b.name||"User",status:b.status||"ACTIVE",role:b.role||"USER"});else{const v=Re.getRefreshToken();if(v)try{await q.auth.refreshToken(v);const y=Re.getAccessToken();if(y){const m=i(y);m&&n({id:m.sub||m.userId||"",email:m.email||"",fullName:m.fullName||m.name||"User",status:m.status||"ACTIVE",role:m.role||"USER"})}}catch{Re.clearTokens(),n(null)}else Re.clearTokens(),n(null)}}}catch(b){console.error("Auth check error:",b),Re.clearTokens(),n(null)}a(!1)})()},[]);const u={user:o,isAuthenticated:!!o,isLoading:r,login:async p=>{var g,b,$,v,y;try{const m=await q.auth.login(p),w=Re.getAccessToken();if(w){const h=i(w);n(h?{id:((g=m.user)==null?void 0:g.id)||h.sub||h.userId||"",email:((b=m.user)==null?void 0:b.email)||h.email||p.email,fullName:(($=m.user)==null?void 0:$.fullName)||h.fullName||h.name||"User",status:((v=m.user)==null?void 0:v.status)||h.status||"ACTIVE",role:((y=m.user)==null?void 0:y.role)||h.role||"USER"}:m.user)}else n(m.user)}catch(m){throw m}},logout:async()=>{try{await q.auth.logout()}catch(p){console.error("Logout error:",p)}finally{Re.clearTokens(),n(null)}},refreshAuth:async()=>{const p=Re.getAccessToken();if(!p){n(null);return}try{const g=i(p);if(g&&g.exp){const b=g.exp*1e3;if(Date.now()<b)n({id:g.sub||g.userId||"",email:g.email||"",fullName:g.fullName||g.name||"User",status:g.status||"ACTIVE",role:g.role||"USER"});else{const $=Re.getRefreshToken();if($){await q.auth.refreshToken($);const v=Re.getAccessToken();if(v){const y=i(v);y&&n({id:y.sub||y.userId||"",email:y.email||"",fullName:y.fullName||y.name||"User",status:y.status||"ACTIVE",role:y.role||"USER"})}}else throw new Error("No refresh token")}}}catch(g){throw Re.clearTokens(),n(null),g}}};return t.jsx(Ar.Provider,{value:u,children:e})};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ei=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,n,r)=>r?r.toUpperCase():n.toLowerCase()),Ln=e=>{const o=Ei(e);return o.charAt(0).toUpperCase()+o.slice(1)},Ir=(...e)=>e.filter((o,n,r)=>!!o&&o.trim()!==""&&r.indexOf(o)===n).join(" ").trim(),Ti=e=>{for(const o in e)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ai={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=s.forwardRef(({color:e="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:l,...c},d)=>s.createElement("svg",{ref:d,...Ai,width:o,height:o,stroke:e,strokeWidth:r?Number(n)*24/Number(o):n,className:Ir("lucide",a),...!i&&!Ti(c)&&{"aria-hidden":"true"},...c},[...l.map(([u,p])=>s.createElement(u,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(e,o)=>{const n=s.forwardRef(({className:r,...a},i)=>s.createElement(Ii,{ref:i,iconNode:o,className:Ir(`lucide-${Ci(Ln(e))}`,`lucide-${e}`,r),...a}));return n.displayName=Ln(e),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]],zi=ne("arrow-down-left",Ri);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Pi=ne("arrow-up-right",Di);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Mi=ne("book",Li);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],_i=ne("car",Oi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Rr=ne("check",Fi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],un=ne("chevron-down",Wi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Mn=ne("chevron-left",Vi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Hi=ne("chevron-right",Bi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],zr=ne("chevron-up",Yi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],qi=ne("circle-alert",Ui);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Gi=ne("circle-check-big",Ki);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Zi=ne("circle-plus",Xi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Ji=ne("dollar-sign",Qi);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],tl=ne("ellipsis",el);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],nl=ne("file-text",ol);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],al=ne("film",rl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],il=ne("folder-open",sl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],cl=ne("gift",ll);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],ul=ne("heart",dl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],On=ne("house",pl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],ml=ne("layout-dashboard",gl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],_n=ne("loader-circle",fl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],yl=ne("log-out",hl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],bl=ne("menu",xl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],wl=ne("moon",vl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]],Nl=ne("piggy-bank",$l);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Sl=ne("plus",jl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],Cl=ne("receipt",kl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Tl=ne("search",El);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Il=ne("settings",Al);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],zl=ne("shopping-bag",Rl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Pl=ne("sparkles",Dl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Ml=ne("square-pen",Ll);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],_l=ne("sun",Ol);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Wl=ne("trash-2",Fl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Bl=ne("trending-up",Vl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Yl=ne("user",Hl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],ql=ne("utensils",Ul);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],Fn=ne("wallet",Kl);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pn=ne("x",Gl),Dr={Dashboard:ml,Transactions:Cl,Accounts:Fn,Categories:il,Budgets:Nl,Receivables:Pi,Liabilities:zi,Assets:On,Settings:Il,Menu:bl,Add:Sl,Logout:yl,User:Yl,Back:Mn,ChevronLeft:Mn,ChevronRight:Hi,ChevronUp:zr,ChevronDown:un,Edit:Ml,Delete:Wl,Close:pn,Check:Rr,CheckCircle:Gi,Alert:qi,Loading:_n,Loader:_n,Sparkles:Pl,Wallet:Fn,Home:On,Sun:_l,Moon:wl,Search:Tl,Utensils:ql,Car:_i,ShoppingBag:zl,Film:al,Heart:ul,Book:Mi,FileText:nl,MoreHorizontal:tl,DollarSign:Ji,Gift:cl,TrendingUp:Bl,PlusCircle:Zi},Xl=e=>Dr[e]||null,G=({icon:e,size:o=20,className:n="",color:r})=>{const a=Dr[e];return a?t.jsx(a,{size:o,className:n,color:r,strokeWidth:2}):null},gn=fi`
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
    background: ${({theme:e})=>e.colors.background==="#0a0a0a"||typeof e.colors.background=="string"&&e.colors.background.includes("0a0a0a")?xt.neutral[600]:xt.neutral[400]};
    border-radius: 4px;
    transition: background 0.2s ease;

    &:hover {
      background: ${({theme:e})=>e.colors.background==="#0a0a0a"||typeof e.colors.background=="string"&&e.colors.background.includes("0a0a0a")?xt.neutral[500]:xt.neutral[500]};
    }
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${({theme:e})=>`${e.colors.background==="#0a0a0a"||typeof e.colors.background=="string"&&e.colors.background.includes("0a0a0a")?xt.neutral[600]:xt.neutral[400]} ${e.colors.background}`};
`,Zl=({isOpen:e,onToggle:o})=>{const{t:n}=_e(),{currentRoute:r,navigate:a}=qe(),i=[{route:"dashboard",icon:"Dashboard",label:n("wallet.navigation.dashboard"),section:"main"},{route:"transactions",icon:"Transactions",label:n("wallet.navigation.transactions"),section:"main"},{route:"accounts",icon:"Accounts",label:n("wallet.navigation.accounts"),section:"main"},{route:"categories",icon:"Categories",label:n("wallet.navigation.categories"),section:"main"},{route:"budgets",icon:"Budgets",label:n("wallet.navigation.budgets"),section:"main"},{route:"receivables",icon:"Receivables",label:n("wallet.navigation.receivables"),section:"debts"},{route:"liabilities",icon:"Liabilities",label:n("wallet.navigation.liabilities"),section:"debts"},{route:"assets",icon:"Assets",label:n("wallet.navigation.assets"),section:"assets"},{route:"settings",icon:"Settings",label:n("wallet.navigation.settings"),section:"settings"}],l=u=>{a(u),o()},c=i.reduce((u,p)=>{const g=p.section||"other";return u[g]||(u[g]=[]),u[g].push(p),u},{}),d={main:n("wallet.sidebar.main"),debts:n("wallet.sidebar.debts"),assets:n("wallet.sidebar.assets"),settings:n("wallet.sidebar.settings")};return t.jsxs(t.Fragment,{children:[t.jsx(ec,{className:`overlay ${e?"overlay--open":""}`,onClick:o}),t.jsx(Jl,{className:`sidebar-menu-wrapper ${e?"sidebar-menu-wrapper--open":""}`,children:t.jsx("ul",{className:"menu-list",children:Object.entries(c).map(([u,p])=>t.jsxs("div",{children:[t.jsx("div",{className:"menu-section",children:d[u]||u}),p.map(g=>t.jsx("li",{className:"menu-item",children:t.jsxs("button",{className:`menu-link ${r===g.route?"menu-link--active":""}`,onClick:()=>l(g.route),children:[t.jsx("div",{className:"menu-icon-wrapper",children:t.jsx(G,{icon:g.icon,size:20,color:"currentColor"})}),t.jsx("span",{className:"menu-label",children:g.label})]})},g.route))]},u))})})]})},Ql=({onClick:e})=>t.jsx(tc,{className:"menu-toggle-button-wrapper",onClick:e,"aria-label":"Toggle menu",children:t.jsx(G,{icon:"Menu",size:20,color:"currentColor"})}),Jl=me.aside`
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
  ${gn}

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
`,ec=me.div`
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
`,tc=me.button`
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
`,oc=()=>{const e=Ye(),o=te(r=>r.theme.mode),n=()=>{e(hi())};return t.jsx(nc,{className:"theme-toggle-wrapper",onClick:n,"aria-label":o==="dark"?"Switch to light mode":"Switch to dark mode",children:t.jsx(G,{icon:o==="dark"?"Moon":"Sun",size:20,color:"currentColor"})})},nc=me.button`
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
`,rc=()=>{const e=Ye(),o=te(a=>a.language.current),{i18n:n}=_e(),r=()=>{const a=o==="vi"?"en":"vi";e(yi(a)),n.changeLanguage(a)};return t.jsx(ac,{className:"language-toggle-wrapper",onClick:r,"aria-label":`Switch to ${o==="vi"?"English":"Tiếng Việt"}`,children:o==="vi"?"VI":"EN"})},ac=me.button`
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
`,sc=({onMenuToggle:e})=>{const{user:o,logout:n}=vo(),{navigate:r}=qe(),{t:a}=_e(),[i,l]=s.useState(!1),c=async()=>{l(!0);try{await n(),r("login")}catch(u){console.error("Logout error:",u),r("login")}finally{l(!1)}},d=()=>{typeof window<"u"&&(window.location.href="/")};return t.jsx(ic,{className:"wallet-app-header-wrapper",children:t.jsxs("div",{className:"header-content",children:[t.jsxs("div",{className:"branding-section",children:[t.jsx(Ql,{onClick:e}),t.jsx("button",{className:"back-to-portfolio-button",onClick:d,title:a("wallet.header.backToPortfolio")||"Về Portfolio",children:t.jsx(G,{icon:"Home",size:20,color:"currentColor"})}),t.jsxs("div",{className:"logo",onClick:()=>r("dashboard"),children:[t.jsx(G,{icon:"Wallet",size:24,color:"currentColor"}),t.jsx("span",{children:a("wallet.app.title")})]})]}),t.jsxs("div",{className:"user-section",children:[t.jsx(rc,{}),t.jsx(oc,{}),t.jsx("span",{className:"user-name",children:(o==null?void 0:o.fullName)||(o==null?void 0:o.email)||"User"}),t.jsxs("button",{className:`logout-button ${i?"logout-button--loading":""}`,onClick:c,disabled:i,children:[t.jsx(G,{icon:i?"Loading":"Logout",size:16,color:"currentColor"}),t.jsx("span",{children:a(i?"wallet.header.loggingOut":"wallet.header.logout")})]})]})]})})},ic=me.header`
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
`,lc=()=>{const{t:e}=_e(),{currentRoute:o,navigate:n}=qe(),r=[{route:"dashboard",icon:"Dashboard",label:e("wallet.navigation.dashboard")},{route:"transactions",icon:"Transactions",label:e("wallet.navigation.transactions")},{route:"transactions/add",icon:"Add",label:e("wallet.navigation.add")}];return t.jsx(cc,{className:"wallet-app-navigation-wrapper",children:t.jsx("ul",{className:"nav-list",children:r.map(a=>t.jsx("li",{className:"nav-item",children:t.jsxs("button",{className:`nav-button ${o===a.route?"nav-button--active":""}`,onClick:()=>n(a.route),"aria-label":a.label,children:[t.jsx("div",{className:"nav-icon-wrapper",children:t.jsx(G,{icon:a.icon,size:20,color:"currentColor"})}),t.jsx("span",{className:"nav-label",children:a.label})]})},a.route))})})},cc=me.nav`
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
`,dc=({children:e})=>{const[o,n]=s.useState(!1);return t.jsxs(uc,{className:"wallet-app-layout-wrapper",children:[t.jsx(sc,{onMenuToggle:()=>n(!o)}),t.jsxs("div",{className:"content-wrapper",children:[t.jsx(Zl,{isOpen:o,onToggle:()=>n(!o)}),t.jsx("main",{className:"main-content",children:e})]}),t.jsx(lc,{})]})},uc=me.div`
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
      ${gn}

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
`,pc=()=>{const{t:e}=_e(),{login:o}=vo(),{navigate:n}=qe(),[r,a]=s.useState(""),[i,l]=s.useState(""),[c,d]=s.useState(null),[u,p]=s.useState(!1),g=async b=>{b.preventDefault(),d(null),p(!0);try{await o({email:r,password:i}),n("dashboard")}catch($){d(de($))}finally{p(!1)}};return t.jsx(gc,{className:"login-wrapper",children:t.jsxs("div",{className:"login-card",children:[t.jsx("h1",{className:"title",children:e("wallet.login.title")}),t.jsx("p",{className:"description",children:e("wallet.login.description")}),t.jsxs("form",{className:"form",onSubmit:g,children:[c&&t.jsx("div",{className:"error-message",children:c}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",htmlFor:"email",children:e("wallet.login.email")}),t.jsx("input",{className:"input",id:"email",type:"email",placeholder:e("wallet.login.emailPlaceholder"),value:r,onChange:b=>a(b.target.value),required:!0,disabled:u,autoComplete:"email"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",htmlFor:"password",children:e("wallet.login.password")}),t.jsx("input",{className:"input",id:"password",type:"password",placeholder:e("wallet.login.passwordPlaceholder"),value:i,onChange:b=>l(b.target.value),required:!0,disabled:u,autoComplete:"current-password"})]}),t.jsx("button",{className:`login-button ${u?"login-button--loading":""}`,type:"submit",disabled:u,children:e(u?"wallet.login.signingIn":"wallet.login.signIn")}),t.jsxs("div",{className:"register-link",children:[t.jsx("span",{children:e("wallet.login.dontHaveAccount","Chưa có tài khoản?")}),t.jsx("button",{type:"button",className:"link-button",onClick:()=>n("register"),disabled:u,children:e("wallet.login.signUp","Đăng ký")})]})]})]})})},gc=me.div`
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
`,mc=()=>{const{t:e}=_e(),{navigate:o}=qe(),[n,r]=s.useState(""),[a,i]=s.useState(""),[l,c]=s.useState(""),[d,u]=s.useState(null),[p,g]=s.useState(!1),[b,$]=s.useState({score:0,feedback:""}),v=w=>{let h=0;const N=[];return w.length>=8?h+=1:N.push("Tối thiểu 8 ký tự"),/[a-z]/.test(w)?h+=1:N.push("Có chữ thường"),/[A-Z]/.test(w)?h+=1:N.push("Có chữ hoa"),/[0-9]/.test(w)?h+=1:N.push("Có số"),{score:h,feedback:N.length>0?N.join(", "):"Mật khẩu mạnh"}},y=w=>{i(w),w.length>0?$(v(w)):$({score:0,feedback:""})},m=async w=>{if(w.preventDefault(),u(null),b.score<3){u("Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số");return}g(!0);try{await q.auth.register({email:n,password:a,...l&&{fullName:l}}),typeof window<"u"&&sessionStorage.setItem("register_email",n),o("verify-email")}catch(h){u(de(h))}finally{g(!1)}};return t.jsx(fc,{className:"register-wrapper",children:t.jsxs("div",{className:"register-card",children:[t.jsx("h1",{className:"title",children:e("wallet.register.title","Đăng ký tài khoản")}),t.jsx("p",{className:"description",children:e("wallet.register.description","Tạo tài khoản mới để bắt đầu quản lý chi tiêu")}),t.jsxs("form",{className:"form",onSubmit:m,children:[d&&t.jsx("div",{className:"error-message",children:d}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",htmlFor:"email",children:[e("wallet.register.email","Email")," ",t.jsx("span",{className:"required",children:"*"})]}),t.jsx("input",{className:"input",id:"email",type:"email",placeholder:e("wallet.register.emailPlaceholder","Nhập email của bạn"),value:n,onChange:w=>r(w.target.value),required:!0,disabled:p,autoComplete:"email"})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",htmlFor:"fullName",children:[e("wallet.register.fullName","Họ và tên")," ",t.jsx("span",{className:"optional",children:"(Tùy chọn)"})]}),t.jsx("input",{className:"input",id:"fullName",type:"text",placeholder:e("wallet.register.fullNamePlaceholder","Nhập họ và tên"),value:l,onChange:w=>c(w.target.value),disabled:p,autoComplete:"name"})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",htmlFor:"password",children:[e("wallet.register.password","Mật khẩu")," ",t.jsx("span",{className:"required",children:"*"})]}),t.jsx("input",{className:"input",id:"password",type:"password",placeholder:e("wallet.register.passwordPlaceholder","Nhập mật khẩu"),value:a,onChange:w=>y(w.target.value),required:!0,disabled:p,autoComplete:"new-password"}),a.length>0&&t.jsxs("div",{className:"password-strength",children:[t.jsx("div",{className:"strength-bar",children:t.jsx("div",{className:`strength-fill strength-${b.score}`,style:{width:`${b.score/4*100}%`}})}),t.jsx("span",{className:"strength-feedback",children:b.feedback})]})]}),t.jsx("button",{className:`register-button ${p?"register-button--loading":""}`,type:"submit",disabled:p||b.score<3,children:p?e("wallet.register.registering","Đang đăng ký..."):e("wallet.register.register","Đăng ký")}),t.jsxs("div",{className:"login-link",children:[t.jsx("span",{children:e("wallet.register.alreadyHaveAccount","Đã có tài khoản?")}),t.jsx("button",{type:"button",className:"link-button",onClick:()=>o("login"),disabled:p,children:e("wallet.register.signIn","Đăng nhập")})]})]})]})})},fc=me.div`
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
`,hc=()=>{const{t:e}=_e(),{navigate:o}=qe(),[n,r]=s.useState(""),[a,i]=s.useState(""),[l,c]=s.useState(null),[d,u]=s.useState(!1),[p,g]=s.useState(!1),[b,$]=s.useState(0);s.useEffect(()=>{if(typeof window<"u"){const w=sessionStorage.getItem("register_email");if(w)r(w);else{const N=new URLSearchParams(window.location.search).get("email");N&&r(N)}}},[]),s.useEffect(()=>{if(b>0){const w=setTimeout(()=>{$(b-1)},1e3);return()=>clearTimeout(w)}},[b]);const v=w=>{const h=w.replace(/\D/g,"").slice(0,6);i(h),c(null)},y=async w=>{if(w.preventDefault(),c(null),a.length!==6){c("Vui lòng nhập đầy đủ 6 chữ số");return}if(!n){c("Email không hợp lệ");return}u(!0);try{const h=await q.auth.verifyEmail({email:n,verificationCode:a});typeof window<"u"&&sessionStorage.removeItem("register_email"),h.accessToken&&h.refreshToken?window.location.reload():o("login")}catch(h){const N=de(h);c(N),i("")}finally{u(!1)}},m=async()=>{if(!(!n||b>0)){g(!0),c(null);try{await q.auth.register({email:n,password:"temp",fullName:""}),$(60)}catch(w){c(de(w))}finally{g(!1)}}};return t.jsx(yc,{className:"verify-email-wrapper",children:t.jsxs("div",{className:"verify-card",children:[t.jsx("h1",{className:"title",children:e("wallet.verifyEmail.title","Xác nhận email")}),t.jsx("p",{className:"description",children:e("wallet.verifyEmail.description","Chúng tôi đã gửi mã xác nhận 6 chữ số đến email của bạn. Vui lòng kiểm tra và nhập mã để kích hoạt tài khoản.")}),n&&t.jsxs("div",{className:"email-display",children:[t.jsx("span",{className:"email-label",children:e("wallet.verifyEmail.email","Email:")}),t.jsx("span",{className:"email-value",children:n})]}),t.jsxs("form",{className:"form",onSubmit:y,children:[l&&t.jsx("div",{className:"error-message",children:l}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",htmlFor:"verificationCode",children:[e("wallet.verifyEmail.code","Mã xác nhận")," ",t.jsx("span",{className:"required",children:"*"})]}),t.jsx("input",{className:"input code-input",id:"verificationCode",type:"text",inputMode:"numeric",placeholder:e("wallet.verifyEmail.codePlaceholder","Nhập 6 chữ số"),value:a,onChange:w=>v(w.target.value),required:!0,disabled:d,autoComplete:"one-time-code",maxLength:6}),t.jsxs("div",{className:"code-hint",children:[a.length,"/6"]})]}),t.jsx("button",{className:`verify-button ${d?"verify-button--loading":""}`,type:"submit",disabled:d||a.length!==6,children:d?e("wallet.verifyEmail.verifying","Đang xác nhận..."):e("wallet.verifyEmail.verify","Xác nhận")}),t.jsxs("div",{className:"resend-section",children:[t.jsx("span",{className:"resend-text",children:e("wallet.verifyEmail.notReceived","Không nhận được mã?")}),b>0?t.jsx("span",{className:"cooldown-text",children:e("wallet.verifyEmail.resendIn","Gửi lại sau {{seconds}}s",{seconds:b})}):t.jsx("button",{type:"button",className:"resend-button",onClick:m,disabled:p||!n,children:p?e("wallet.verifyEmail.resending","Đang gửi..."):e("wallet.verifyEmail.resend","Gửi lại mã")})]}),t.jsx("div",{className:"back-link",children:t.jsx("button",{type:"button",className:"link-button",onClick:()=>o("login"),disabled:d,children:e("wallet.verifyEmail.backToLogin","← Quay lại đăng nhập")})})]})]})})},yc=me.div`
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
`;function Wn(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)}function Tt(...e){return o=>{let n=!1;const r=e.map(a=>{const i=Wn(a,o);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<r.length;a++){const i=r[a];typeof i=="function"?i():Wn(e[a],null)}}}}function be(...e){return s.useCallback(Tt(...e),e)}var xc=Symbol.for("react.lazy"),uo=dn[" use ".trim().toString()];function bc(e){return typeof e=="object"&&e!==null&&"then"in e}function Pr(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===xc&&"_payload"in e&&bc(e._payload)}function Lr(e){const o=wc(e),n=s.forwardRef((r,a)=>{let{children:i,...l}=r;Pr(i)&&typeof uo=="function"&&(i=uo(i._payload));const c=s.Children.toArray(i),d=c.find(Nc);if(d){const u=d.props.children,p=c.map(g=>g===d?s.Children.count(u)>1?s.Children.only(null):s.isValidElement(u)?u.props.children:null:g);return t.jsx(o,{...l,ref:a,children:s.isValidElement(u)?s.cloneElement(u,void 0,p):null})}return t.jsx(o,{...l,ref:a,children:i})});return n.displayName=`${e}.Slot`,n}var vc=Lr("Slot");function wc(e){const o=s.forwardRef((n,r)=>{let{children:a,...i}=n;if(Pr(a)&&typeof uo=="function"&&(a=uo(a._payload)),s.isValidElement(a)){const l=Sc(a),c=jc(i,a.props);return a.type!==s.Fragment&&(c.ref=r?Tt(r,l):l),s.cloneElement(a,c)}return s.Children.count(a)>1?s.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var $c=Symbol("radix.slottable");function Nc(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===$c}function jc(e,o){const n={...o};for(const r in o){const a=e[r],i=o[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...c)=>{const d=i(...c);return a(...c),d}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function Sc(e){var r,a;let o=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=o&&"isReactWarning"in o&&o.isReactWarning;return n?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=o&&"isReactWarning"in o&&o.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Mr(e){var o,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(o=0;o<a;o++)e[o]&&(n=Mr(e[o]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Or(){for(var e,o,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(o=Mr(e))&&(r&&(r+=" "),r+=o);return r}const Vn=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Bn=Or,Bt=(e,o)=>n=>{var r;if((o==null?void 0:o.variants)==null)return Bn(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=o,l=Object.keys(a).map(u=>{const p=n==null?void 0:n[u],g=i==null?void 0:i[u];if(p===null)return null;const b=Vn(p)||Vn(g);return a[u][b]}),c=n&&Object.entries(n).reduce((u,p)=>{let[g,b]=p;return b===void 0||(u[g]=b),u},{}),d=o==null||(r=o.compoundVariants)===null||r===void 0?void 0:r.reduce((u,p)=>{let{class:g,className:b,...$}=p;return Object.entries($).every(v=>{let[y,m]=v;return Array.isArray(m)?m.includes({...i,...c}[y]):{...i,...c}[y]===m})?[...u,g,b]:u},[]);return Bn(e,l,d,n==null?void 0:n.class,n==null?void 0:n.className)},kc=(e,o)=>{const n=new Array(e.length+o.length);for(let r=0;r<e.length;r++)n[r]=e[r];for(let r=0;r<o.length;r++)n[e.length+r]=o[r];return n},Cc=(e,o)=>({classGroupId:e,validator:o}),_r=(e=new Map,o=null,n)=>({nextPart:e,validators:o,classGroupId:n}),po="-",Hn=[],Ec="arbitrary..",Tc=e=>{const o=Ic(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:l=>{if(l.startsWith("[")&&l.endsWith("]"))return Ac(l);const c=l.split(po),d=c[0]===""&&c.length>1?1:0;return Fr(c,d,o)},getConflictingClassGroupIds:(l,c)=>{if(c){const d=r[l],u=n[l];return d?u?kc(u,d):d:u||Hn}return n[l]||Hn}}},Fr=(e,o,n)=>{if(e.length-o===0)return n.classGroupId;const a=e[o],i=n.nextPart.get(a);if(i){const u=Fr(e,o+1,i);if(u)return u}const l=n.validators;if(l===null)return;const c=o===0?e.join(po):e.slice(o).join(po),d=l.length;for(let u=0;u<d;u++){const p=l[u];if(p.validator(c))return p.classGroupId}},Ac=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const o=e.slice(1,-1),n=o.indexOf(":"),r=o.slice(0,n);return r?Ec+r:void 0})(),Ic=e=>{const{theme:o,classGroups:n}=e;return Rc(n,o)},Rc=(e,o)=>{const n=_r();for(const r in e){const a=e[r];mn(a,n,r,o)}return n},mn=(e,o,n,r)=>{const a=e.length;for(let i=0;i<a;i++){const l=e[i];zc(l,o,n,r)}},zc=(e,o,n,r)=>{if(typeof e=="string"){Dc(e,o,n);return}if(typeof e=="function"){Pc(e,o,n,r);return}Lc(e,o,n,r)},Dc=(e,o,n)=>{const r=e===""?o:Wr(o,e);r.classGroupId=n},Pc=(e,o,n,r)=>{if(Mc(e)){mn(e(r),o,n,r);return}o.validators===null&&(o.validators=[]),o.validators.push(Cc(n,e))},Lc=(e,o,n,r)=>{const a=Object.entries(e),i=a.length;for(let l=0;l<i;l++){const[c,d]=a[l];mn(d,Wr(o,c),n,r)}},Wr=(e,o)=>{let n=e;const r=o.split(po),a=r.length;for(let i=0;i<a;i++){const l=r[i];let c=n.nextPart.get(l);c||(c=_r(),n.nextPart.set(l,c)),n=c}return n},Mc=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,Oc=e=>{if(e<1)return{get:()=>{},set:()=>{}};let o=0,n=Object.create(null),r=Object.create(null);const a=(i,l)=>{n[i]=l,o++,o>e&&(o=0,r=n,n=Object.create(null))};return{get(i){let l=n[i];if(l!==void 0)return l;if((l=r[i])!==void 0)return a(i,l),l},set(i,l){i in n?n[i]=l:a(i,l)}}},Go="!",Yn=":",_c=[],Un=(e,o,n,r,a)=>({modifiers:e,hasImportantModifier:o,baseClassName:n,maybePostfixModifierPosition:r,isExternal:a}),Fc=e=>{const{prefix:o,experimentalParseClassName:n}=e;let r=a=>{const i=[];let l=0,c=0,d=0,u;const p=a.length;for(let y=0;y<p;y++){const m=a[y];if(l===0&&c===0){if(m===Yn){i.push(a.slice(d,y)),d=y+1;continue}if(m==="/"){u=y;continue}}m==="["?l++:m==="]"?l--:m==="("?c++:m===")"&&c--}const g=i.length===0?a:a.slice(d);let b=g,$=!1;g.endsWith(Go)?(b=g.slice(0,-1),$=!0):g.startsWith(Go)&&(b=g.slice(1),$=!0);const v=u&&u>d?u-d:void 0;return Un(i,$,b,v)};if(o){const a=o+Yn,i=r;r=l=>l.startsWith(a)?i(l.slice(a.length)):Un(_c,!1,l,void 0,!0)}if(n){const a=r;r=i=>n({className:i,parseClassName:a})}return r},Wc=e=>{const o=new Map;return e.orderSensitiveModifiers.forEach((n,r)=>{o.set(n,1e6+r)}),n=>{const r=[];let a=[];for(let i=0;i<n.length;i++){const l=n[i],c=l[0]==="[",d=o.has(l);c||d?(a.length>0&&(a.sort(),r.push(...a),a=[]),r.push(l)):a.push(l)}return a.length>0&&(a.sort(),r.push(...a)),r}},Vc=e=>({cache:Oc(e.cacheSize),parseClassName:Fc(e),sortModifiers:Wc(e),...Tc(e)}),Bc=/\s+/,Hc=(e,o)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:i}=o,l=[],c=e.trim().split(Bc);let d="";for(let u=c.length-1;u>=0;u-=1){const p=c[u],{isExternal:g,modifiers:b,hasImportantModifier:$,baseClassName:v,maybePostfixModifierPosition:y}=n(p);if(g){d=p+(d.length>0?" "+d:d);continue}let m=!!y,w=r(m?v.substring(0,y):v);if(!w){if(!m){d=p+(d.length>0?" "+d:d);continue}if(w=r(v),!w){d=p+(d.length>0?" "+d:d);continue}m=!1}const h=b.length===0?"":b.length===1?b[0]:i(b).join(":"),N=$?h+Go:h,j=N+w;if(l.indexOf(j)>-1)continue;l.push(j);const f=a(w,m);for(let R=0;R<f.length;++R){const A=f[R];l.push(N+A)}d=p+(d.length>0?" "+d:d)}return d},Yc=(...e)=>{let o=0,n,r,a="";for(;o<e.length;)(n=e[o++])&&(r=Vr(n))&&(a&&(a+=" "),a+=r);return a},Vr=e=>{if(typeof e=="string")return e;let o,n="";for(let r=0;r<e.length;r++)e[r]&&(o=Vr(e[r]))&&(n&&(n+=" "),n+=o);return n},Uc=(e,...o)=>{let n,r,a,i;const l=d=>{const u=o.reduce((p,g)=>g(p),e());return n=Vc(u),r=n.cache.get,a=n.cache.set,i=c,c(d)},c=d=>{const u=r(d);if(u)return u;const p=Hc(d,n);return a(d,p),p};return i=l,(...d)=>i(Yc(...d))},qc=[],Se=e=>{const o=n=>n[e]||qc;return o.isThemeGetter=!0,o},Br=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Hr=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Kc=/^\d+\/\d+$/,Gc=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Xc=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Zc=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Qc=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Jc=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,bt=e=>Kc.test(e),re=e=>!!e&&!Number.isNaN(Number(e)),Ze=e=>!!e&&Number.isInteger(Number(e)),Do=e=>e.endsWith("%")&&re(e.slice(0,-1)),Ke=e=>Gc.test(e),ed=()=>!0,td=e=>Xc.test(e)&&!Zc.test(e),Yr=()=>!1,od=e=>Qc.test(e),nd=e=>Jc.test(e),rd=e=>!V(e)&&!B(e),ad=e=>At(e,Kr,Yr),V=e=>Br.test(e),lt=e=>At(e,Gr,td),Po=e=>At(e,dd,re),qn=e=>At(e,Ur,Yr),sd=e=>At(e,qr,nd),Kt=e=>At(e,Xr,od),B=e=>Hr.test(e),Lt=e=>It(e,Gr),id=e=>It(e,ud),Kn=e=>It(e,Ur),ld=e=>It(e,Kr),cd=e=>It(e,qr),Gt=e=>It(e,Xr,!0),At=(e,o,n)=>{const r=Br.exec(e);return r?r[1]?o(r[1]):n(r[2]):!1},It=(e,o,n=!1)=>{const r=Hr.exec(e);return r?r[1]?o(r[1]):n:!1},Ur=e=>e==="position"||e==="percentage",qr=e=>e==="image"||e==="url",Kr=e=>e==="length"||e==="size"||e==="bg-size",Gr=e=>e==="length",dd=e=>e==="number",ud=e=>e==="family-name",Xr=e=>e==="shadow",pd=()=>{const e=Se("color"),o=Se("font"),n=Se("text"),r=Se("font-weight"),a=Se("tracking"),i=Se("leading"),l=Se("breakpoint"),c=Se("container"),d=Se("spacing"),u=Se("radius"),p=Se("shadow"),g=Se("inset-shadow"),b=Se("text-shadow"),$=Se("drop-shadow"),v=Se("blur"),y=Se("perspective"),m=Se("aspect"),w=Se("ease"),h=Se("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],f=()=>[...j(),B,V],R=()=>["auto","hidden","clip","visible","scroll"],A=()=>["auto","contain","none"],E=()=>[B,V,d],I=()=>[bt,"full","auto",...E()],S=()=>[Ze,"none","subgrid",B,V],O=()=>["auto",{span:["full",Ze,B,V]},Ze,B,V],k=()=>[Ze,"auto",B,V],P=()=>["auto","min","max","fr",B,V],C=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],F=()=>["start","end","center","stretch","center-safe","end-safe"],_=()=>["auto",...E()],Y=()=>[bt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...E()],D=()=>[e,B,V],Q=()=>[...j(),Kn,qn,{position:[B,V]}],fe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ae=()=>["auto","cover","contain",ld,ad,{size:[B,V]}],ue=()=>[Do,Lt,lt],se=()=>["","none","full",u,B,V],x=()=>["",re,Lt,lt],W=()=>["solid","dashed","dotted","double"],M=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],z=()=>[re,Do,Kn,qn],X=()=>["","none",v,B,V],ie=()=>["none",re,B,V],L=()=>["none",re,B,V],K=()=>[re,B,V],J=()=>[bt,"full",...E()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ke],breakpoint:[Ke],color:[ed],container:[Ke],"drop-shadow":[Ke],ease:["in","out","in-out"],font:[rd],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ke],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ke],shadow:[Ke],spacing:["px",re],text:[Ke],"text-shadow":[Ke],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",bt,V,B,m]}],container:["container"],columns:[{columns:[re,V,B,c]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:f()}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:I()}],"inset-x":[{"inset-x":I()}],"inset-y":[{"inset-y":I()}],start:[{start:I()}],end:[{end:I()}],top:[{top:I()}],right:[{right:I()}],bottom:[{bottom:I()}],left:[{left:I()}],visibility:["visible","invisible","collapse"],z:[{z:[Ze,"auto",B,V]}],basis:[{basis:[bt,"full","auto",c,...E()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[re,bt,"auto","initial","none",V]}],grow:[{grow:["",re,B,V]}],shrink:[{shrink:["",re,B,V]}],order:[{order:[Ze,"first","last","none",B,V]}],"grid-cols":[{"grid-cols":S()}],"col-start-end":[{col:O()}],"col-start":[{"col-start":k()}],"col-end":[{"col-end":k()}],"grid-rows":[{"grid-rows":S()}],"row-start-end":[{row:O()}],"row-start":[{"row-start":k()}],"row-end":[{"row-end":k()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":P()}],"auto-rows":[{"auto-rows":P()}],gap:[{gap:E()}],"gap-x":[{"gap-x":E()}],"gap-y":[{"gap-y":E()}],"justify-content":[{justify:[...C(),"normal"]}],"justify-items":[{"justify-items":[...F(),"normal"]}],"justify-self":[{"justify-self":["auto",...F()]}],"align-content":[{content:["normal",...C()]}],"align-items":[{items:[...F(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...F(),{baseline:["","last"]}]}],"place-content":[{"place-content":C()}],"place-items":[{"place-items":[...F(),"baseline"]}],"place-self":[{"place-self":["auto",...F()]}],p:[{p:E()}],px:[{px:E()}],py:[{py:E()}],ps:[{ps:E()}],pe:[{pe:E()}],pt:[{pt:E()}],pr:[{pr:E()}],pb:[{pb:E()}],pl:[{pl:E()}],m:[{m:_()}],mx:[{mx:_()}],my:[{my:_()}],ms:[{ms:_()}],me:[{me:_()}],mt:[{mt:_()}],mr:[{mr:_()}],mb:[{mb:_()}],ml:[{ml:_()}],"space-x":[{"space-x":E()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":E()}],"space-y-reverse":["space-y-reverse"],size:[{size:Y()}],w:[{w:[c,"screen",...Y()]}],"min-w":[{"min-w":[c,"screen","none",...Y()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[l]},...Y()]}],h:[{h:["screen","lh",...Y()]}],"min-h":[{"min-h":["screen","lh","none",...Y()]}],"max-h":[{"max-h":["screen","lh",...Y()]}],"font-size":[{text:["base",n,Lt,lt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,B,Po]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Do,V]}],"font-family":[{font:[id,V,o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,B,V]}],"line-clamp":[{"line-clamp":[re,"none",B,Po]}],leading:[{leading:[i,...E()]}],"list-image":[{"list-image":["none",B,V]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",B,V]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:[re,"from-font","auto",B,lt]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[re,"auto",B,V]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",B,V]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",B,V]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Q()}],"bg-repeat":[{bg:fe()}],"bg-size":[{bg:ae()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ze,B,V],radial:["",B,V],conic:[Ze,B,V]},cd,sd]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:ue()}],"gradient-via-pos":[{via:ue()}],"gradient-to-pos":[{to:ue()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:se()}],"rounded-s":[{"rounded-s":se()}],"rounded-e":[{"rounded-e":se()}],"rounded-t":[{"rounded-t":se()}],"rounded-r":[{"rounded-r":se()}],"rounded-b":[{"rounded-b":se()}],"rounded-l":[{"rounded-l":se()}],"rounded-ss":[{"rounded-ss":se()}],"rounded-se":[{"rounded-se":se()}],"rounded-ee":[{"rounded-ee":se()}],"rounded-es":[{"rounded-es":se()}],"rounded-tl":[{"rounded-tl":se()}],"rounded-tr":[{"rounded-tr":se()}],"rounded-br":[{"rounded-br":se()}],"rounded-bl":[{"rounded-bl":se()}],"border-w":[{border:x()}],"border-w-x":[{"border-x":x()}],"border-w-y":[{"border-y":x()}],"border-w-s":[{"border-s":x()}],"border-w-e":[{"border-e":x()}],"border-w-t":[{"border-t":x()}],"border-w-r":[{"border-r":x()}],"border-w-b":[{"border-b":x()}],"border-w-l":[{"border-l":x()}],"divide-x":[{"divide-x":x()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":x()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...W(),"hidden","none"]}],"divide-style":[{divide:[...W(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...W(),"none","hidden"]}],"outline-offset":[{"outline-offset":[re,B,V]}],"outline-w":[{outline:["",re,Lt,lt]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",p,Gt,Kt]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",g,Gt,Kt]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:x()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[re,lt]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":x()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",b,Gt,Kt]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[re,B,V]}],"mix-blend":[{"mix-blend":[...M(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":M()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[re]}],"mask-image-linear-from-pos":[{"mask-linear-from":z()}],"mask-image-linear-to-pos":[{"mask-linear-to":z()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":z()}],"mask-image-t-to-pos":[{"mask-t-to":z()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":z()}],"mask-image-r-to-pos":[{"mask-r-to":z()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":z()}],"mask-image-b-to-pos":[{"mask-b-to":z()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":z()}],"mask-image-l-to-pos":[{"mask-l-to":z()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":z()}],"mask-image-x-to-pos":[{"mask-x-to":z()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":z()}],"mask-image-y-to-pos":[{"mask-y-to":z()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[B,V]}],"mask-image-radial-from-pos":[{"mask-radial-from":z()}],"mask-image-radial-to-pos":[{"mask-radial-to":z()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":j()}],"mask-image-conic-pos":[{"mask-conic":[re]}],"mask-image-conic-from-pos":[{"mask-conic-from":z()}],"mask-image-conic-to-pos":[{"mask-conic-to":z()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Q()}],"mask-repeat":[{mask:fe()}],"mask-size":[{mask:ae()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",B,V]}],filter:[{filter:["","none",B,V]}],blur:[{blur:X()}],brightness:[{brightness:[re,B,V]}],contrast:[{contrast:[re,B,V]}],"drop-shadow":[{"drop-shadow":["","none",$,Gt,Kt]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",re,B,V]}],"hue-rotate":[{"hue-rotate":[re,B,V]}],invert:[{invert:["",re,B,V]}],saturate:[{saturate:[re,B,V]}],sepia:[{sepia:["",re,B,V]}],"backdrop-filter":[{"backdrop-filter":["","none",B,V]}],"backdrop-blur":[{"backdrop-blur":X()}],"backdrop-brightness":[{"backdrop-brightness":[re,B,V]}],"backdrop-contrast":[{"backdrop-contrast":[re,B,V]}],"backdrop-grayscale":[{"backdrop-grayscale":["",re,B,V]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[re,B,V]}],"backdrop-invert":[{"backdrop-invert":["",re,B,V]}],"backdrop-opacity":[{"backdrop-opacity":[re,B,V]}],"backdrop-saturate":[{"backdrop-saturate":[re,B,V]}],"backdrop-sepia":[{"backdrop-sepia":["",re,B,V]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":E()}],"border-spacing-x":[{"border-spacing-x":E()}],"border-spacing-y":[{"border-spacing-y":E()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",B,V]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[re,"initial",B,V]}],ease:[{ease:["linear","initial",w,B,V]}],delay:[{delay:[re,B,V]}],animate:[{animate:["none",h,B,V]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[y,B,V]}],"perspective-origin":[{"perspective-origin":f()}],rotate:[{rotate:ie()}],"rotate-x":[{"rotate-x":ie()}],"rotate-y":[{"rotate-y":ie()}],"rotate-z":[{"rotate-z":ie()}],scale:[{scale:L()}],"scale-x":[{"scale-x":L()}],"scale-y":[{"scale-y":L()}],"scale-z":[{"scale-z":L()}],"scale-3d":["scale-3d"],skew:[{skew:K()}],"skew-x":[{"skew-x":K()}],"skew-y":[{"skew-y":K()}],transform:[{transform:[B,V,"","none","gpu","cpu"]}],"transform-origin":[{origin:f()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:J()}],"translate-x":[{"translate-x":J()}],"translate-y":[{"translate-y":J()}],"translate-z":[{"translate-z":J()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",B,V]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",B,V]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[re,Lt,lt,Po]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},gd=Uc(pd);function le(...e){return gd(Or(e))}const md=Bt("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),H=s.forwardRef(({className:e,variant:o,size:n,asChild:r=!1,...a},i)=>{const l=r?vc:"button";return t.jsx(l,{className:le(md({variant:o,size:n,className:e})),ref:i,...a})});H.displayName="Button";const oe=s.forwardRef(({className:e,type:o,...n},r)=>t.jsx("input",{type:o,className:le("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...n}));oe.displayName="Input";const he=s.forwardRef(({className:e,...o},n)=>t.jsx("div",{ref:n,className:le("rounded-lg border bg-card text-card-foreground shadow-sm",e),...o}));he.displayName="Card";const fd=s.forwardRef(({className:e,...o},n)=>t.jsx("div",{ref:n,className:le("flex flex-col space-y-1.5 p-6",e),...o}));fd.displayName="CardHeader";const hd=s.forwardRef(({className:e,...o},n)=>t.jsx("h3",{ref:n,className:le("text-2xl font-semibold leading-none tracking-tight",e),...o}));hd.displayName="CardTitle";const yd=s.forwardRef(({className:e,...o},n)=>t.jsx("p",{ref:n,className:le("text-sm text-muted-foreground",e),...o}));yd.displayName="CardDescription";const Ce=s.forwardRef(({className:e,...o},n)=>t.jsx("div",{ref:n,className:le("p-6 pt-0",e),...o}));Ce.displayName="CardContent";const xd=s.forwardRef(({className:e,...o},n)=>t.jsx("div",{ref:n,className:le("flex items-center p-6 pt-0",e),...o}));xd.displayName="CardFooter";function ve({className:e,...o}){return t.jsx("div",{className:le("animate-pulse rounded-md bg-muted",e),...o})}const bd=Bt("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ke({className:e,variant:o,...n}){return t.jsx("div",{className:le(bd({variant:o}),e),...n})}const vd=({onParse:e,isLoading:o=!1,placeholder:n,disabled:r=!1,error:a})=>{const[i,l]=s.useState(""),c=s.useRef(null),d=s.useRef(null);s.useEffect(()=>{var g;(g=c.current)==null||g.focus()},[]),s.useEffect(()=>{},[i,a]);const u=s.useCallback(async()=>{!i.trim()||o||r||(d.current&&(clearTimeout(d.current),d.current=null),await e(i.trim()),l(""))},[i,o,r,e]),p=g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),u())};return t.jsxs(wd,{children:[t.jsxs("div",{className:"input-container",children:[t.jsx(oe,{ref:c,type:"text",className:`nlp-input ${a?"error":""}`,value:i,onChange:g=>l(g.target.value),onKeyDown:p,placeholder:n||'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr")',disabled:r||o}),t.jsx(H,{variant:"secondary",onClick:u,disabled:r||o||!i.trim(),className:"parse-button",children:o?t.jsxs(t.Fragment,{children:[t.jsx(G,{icon:"Loader",size:16,color:"currentColor",className:"animate-spin"}),t.jsx("span",{children:"Đang phân tích..."})]}):t.jsxs(t.Fragment,{children:[t.jsx(G,{icon:"Sparkles",size:16,color:"currentColor"}),t.jsx("span",{children:"Phân tích"})]})})]}),a&&t.jsxs("div",{className:"error-message",children:[t.jsx(G,{icon:"Alert",size:16,color:"currentColor"}),t.jsx("span",{children:a})]})]})},wd=me.div`
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
`;function ce(e,o,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return o==null?void 0:o(a)}}function $d(e,o){const n=s.createContext(o),r=i=>{const{children:l,...c}=i,d=s.useMemo(()=>c,Object.values(c));return t.jsx(n.Provider,{value:d,children:l})};r.displayName=e+"Provider";function a(i){const l=s.useContext(n);if(l)return l;if(o!==void 0)return o;throw new Error(`\`${i}\` must be used within \`${e}\``)}return[r,a]}function Ht(e,o=[]){let n=[];function r(i,l){const c=s.createContext(l),d=n.length;n=[...n,l];const u=g=>{var w;const{scope:b,children:$,...v}=g,y=((w=b==null?void 0:b[e])==null?void 0:w[d])||c,m=s.useMemo(()=>v,Object.values(v));return t.jsx(y.Provider,{value:m,children:$})};u.displayName=i+"Provider";function p(g,b){var y;const $=((y=b==null?void 0:b[e])==null?void 0:y[d])||c,v=s.useContext($);if(v)return v;if(l!==void 0)return l;throw new Error(`\`${g}\` must be used within \`${i}\``)}return[u,p]}const a=()=>{const i=n.map(l=>s.createContext(l));return function(c){const d=(c==null?void 0:c[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...c,[e]:d}}),[c,d])}};return a.scopeName=e,[r,Nd(a,...o)]}function Nd(...e){const o=e[0];if(e.length===1)return o;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const l=r.reduce((c,{useScope:d,scopeName:u})=>{const g=d(i)[`__scope${u}`];return{...c,...g}},{});return s.useMemo(()=>({[`__scope${o.scopeName}`]:l}),[l])}};return n.scopeName=o.scopeName,n}var Ee=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},jd=dn[" useId ".trim().toString()]||(()=>{}),Sd=0;function Nt(e){const[o,n]=s.useState(jd());return Ee(()=>{n(r=>r??String(Sd++))},[e]),e||(o?`radix-${o}`:"")}var kd=dn[" useInsertionEffect ".trim().toString()]||Ee;function go({prop:e,defaultProp:o,onChange:n=()=>{},caller:r}){const[a,i,l]=Cd({defaultProp:o,onChange:n}),c=e!==void 0,d=c?e:a;{const p=s.useRef(e!==void 0);s.useEffect(()=>{const g=p.current;g!==c&&console.warn(`${r} is changing from ${g?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=c},[c,r])}const u=s.useCallback(p=>{var g;if(c){const b=Ed(p)?p(e):p;b!==e&&((g=l.current)==null||g.call(l,b))}else i(p)},[c,e,i,l]);return[d,u]}function Cd({defaultProp:e,onChange:o}){const[n,r]=s.useState(e),a=s.useRef(n),i=s.useRef(o);return kd(()=>{i.current=o},[o]),s.useEffect(()=>{var l;a.current!==n&&((l=i.current)==null||l.call(i,n),a.current=n)},[n,a]),[n,r,i]}function Ed(e){return typeof e=="function"}function Td(e){const o=Ad(e),n=s.forwardRef((r,a)=>{const{children:i,...l}=r,c=s.Children.toArray(i),d=c.find(Rd);if(d){const u=d.props.children,p=c.map(g=>g===d?s.Children.count(u)>1?s.Children.only(null):s.isValidElement(u)?u.props.children:null:g);return t.jsx(o,{...l,ref:a,children:s.isValidElement(u)?s.cloneElement(u,void 0,p):null})}return t.jsx(o,{...l,ref:a,children:i})});return n.displayName=`${e}.Slot`,n}function Ad(e){const o=s.forwardRef((n,r)=>{const{children:a,...i}=n;if(s.isValidElement(a)){const l=Dd(a),c=zd(i,a.props);return a.type!==s.Fragment&&(c.ref=r?Tt(r,l):l),s.cloneElement(a,c)}return s.Children.count(a)>1?s.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var Id=Symbol("radix.slottable");function Rd(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Id}function zd(e,o){const n={...o};for(const r in o){const a=e[r],i=o[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...c)=>{const d=i(...c);return a(...c),d}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function Dd(e){var r,a;let o=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=o&&"isReactWarning"in o&&o.isReactWarning;return n?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=o&&"isReactWarning"in o&&o.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Pd=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],pe=Pd.reduce((e,o)=>{const n=Td(`Primitive.${o}`),r=s.forwardRef((a,i)=>{const{asChild:l,...c}=a,d=l?n:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(d,{...c,ref:i})});return r.displayName=`Primitive.${o}`,{...e,[o]:r}},{});function Zr(e,o){e&&Vt.flushSync(()=>e.dispatchEvent(o))}function Le(e){const o=s.useRef(e);return s.useEffect(()=>{o.current=e}),s.useMemo(()=>(...n)=>{var r;return(r=o.current)==null?void 0:r.call(o,...n)},[])}function Ld(e,o=globalThis==null?void 0:globalThis.document){const n=Le(e);s.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return o.addEventListener("keydown",r,{capture:!0}),()=>o.removeEventListener("keydown",r,{capture:!0})},[n,o])}var Md="DismissableLayer",Xo="dismissableLayer.update",Od="dismissableLayer.pointerDownOutside",_d="dismissableLayer.focusOutside",Gn,Qr=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),wo=s.forwardRef((e,o)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:i,onInteractOutside:l,onDismiss:c,...d}=e,u=s.useContext(Qr),[p,g]=s.useState(null),b=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,$]=s.useState({}),v=be(o,A=>g(A)),y=Array.from(u.layers),[m]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),w=y.indexOf(m),h=p?y.indexOf(p):-1,N=u.layersWithOutsidePointerEventsDisabled.size>0,j=h>=w,f=Wd(A=>{const E=A.target,I=[...u.branches].some(S=>S.contains(E));!j||I||(a==null||a(A),l==null||l(A),A.defaultPrevented||c==null||c())},b),R=Vd(A=>{const E=A.target;[...u.branches].some(S=>S.contains(E))||(i==null||i(A),l==null||l(A),A.defaultPrevented||c==null||c())},b);return Ld(A=>{h===u.layers.size-1&&(r==null||r(A),!A.defaultPrevented&&c&&(A.preventDefault(),c()))},b),s.useEffect(()=>{if(p)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Gn=b.body.style.pointerEvents,b.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(p)),u.layers.add(p),Xn(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(b.body.style.pointerEvents=Gn)}},[p,b,n,u]),s.useEffect(()=>()=>{p&&(u.layers.delete(p),u.layersWithOutsidePointerEventsDisabled.delete(p),Xn())},[p,u]),s.useEffect(()=>{const A=()=>$({});return document.addEventListener(Xo,A),()=>document.removeEventListener(Xo,A)},[]),t.jsx(pe.div,{...d,ref:v,style:{pointerEvents:N?j?"auto":"none":void 0,...e.style},onFocusCapture:ce(e.onFocusCapture,R.onFocusCapture),onBlurCapture:ce(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:ce(e.onPointerDownCapture,f.onPointerDownCapture)})});wo.displayName=Md;var Fd="DismissableLayerBranch",Jr=s.forwardRef((e,o)=>{const n=s.useContext(Qr),r=s.useRef(null),a=be(o,r);return s.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),t.jsx(pe.div,{...e,ref:a})});Jr.displayName=Fd;function Wd(e,o=globalThis==null?void 0:globalThis.document){const n=Le(e),r=s.useRef(!1),a=s.useRef(()=>{});return s.useEffect(()=>{const i=c=>{if(c.target&&!r.current){let d=function(){ea(Od,n,u,{discrete:!0})};const u={originalEvent:c};c.pointerType==="touch"?(o.removeEventListener("click",a.current),a.current=d,o.addEventListener("click",a.current,{once:!0})):d()}else o.removeEventListener("click",a.current);r.current=!1},l=window.setTimeout(()=>{o.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),o.removeEventListener("pointerdown",i),o.removeEventListener("click",a.current)}},[o,n]),{onPointerDownCapture:()=>r.current=!0}}function Vd(e,o=globalThis==null?void 0:globalThis.document){const n=Le(e),r=s.useRef(!1);return s.useEffect(()=>{const a=i=>{i.target&&!r.current&&ea(_d,n,{originalEvent:i},{discrete:!1})};return o.addEventListener("focusin",a),()=>o.removeEventListener("focusin",a)},[o,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Xn(){const e=new CustomEvent(Xo);document.dispatchEvent(e)}function ea(e,o,n,{discrete:r}){const a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});o&&a.addEventListener(e,o,{once:!0}),r?Zr(a,i):a.dispatchEvent(i)}var Bd=wo,Hd=Jr,Lo="focusScope.autoFocusOnMount",Mo="focusScope.autoFocusOnUnmount",Zn={bubbles:!1,cancelable:!0},Yd="FocusScope",fn=s.forwardRef((e,o)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:i,...l}=e,[c,d]=s.useState(null),u=Le(a),p=Le(i),g=s.useRef(null),b=be(o,y=>d(y)),$=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(r){let y=function(N){if($.paused||!c)return;const j=N.target;c.contains(j)?g.current=j:Qe(g.current,{select:!0})},m=function(N){if($.paused||!c)return;const j=N.relatedTarget;j!==null&&(c.contains(j)||Qe(g.current,{select:!0}))},w=function(N){if(document.activeElement===document.body)for(const f of N)f.removedNodes.length>0&&Qe(c)};document.addEventListener("focusin",y),document.addEventListener("focusout",m);const h=new MutationObserver(w);return c&&h.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",y),document.removeEventListener("focusout",m),h.disconnect()}}},[r,c,$.paused]),s.useEffect(()=>{if(c){Jn.add($);const y=document.activeElement;if(!c.contains(y)){const w=new CustomEvent(Lo,Zn);c.addEventListener(Lo,u),c.dispatchEvent(w),w.defaultPrevented||(Ud(Zd(ta(c)),{select:!0}),document.activeElement===y&&Qe(c))}return()=>{c.removeEventListener(Lo,u),setTimeout(()=>{const w=new CustomEvent(Mo,Zn);c.addEventListener(Mo,p),c.dispatchEvent(w),w.defaultPrevented||Qe(y??document.body,{select:!0}),c.removeEventListener(Mo,p),Jn.remove($)},0)}}},[c,u,p,$]);const v=s.useCallback(y=>{if(!n&&!r||$.paused)return;const m=y.key==="Tab"&&!y.altKey&&!y.ctrlKey&&!y.metaKey,w=document.activeElement;if(m&&w){const h=y.currentTarget,[N,j]=qd(h);N&&j?!y.shiftKey&&w===j?(y.preventDefault(),n&&Qe(N,{select:!0})):y.shiftKey&&w===N&&(y.preventDefault(),n&&Qe(j,{select:!0})):w===h&&y.preventDefault()}},[n,r,$.paused]);return t.jsx(pe.div,{tabIndex:-1,...l,ref:b,onKeyDown:v})});fn.displayName=Yd;function Ud(e,{select:o=!1}={}){const n=document.activeElement;for(const r of e)if(Qe(r,{select:o}),document.activeElement!==n)return}function qd(e){const o=ta(e),n=Qn(o,e),r=Qn(o.reverse(),e);return[n,r]}function ta(e){const o=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)o.push(n.currentNode);return o}function Qn(e,o){for(const n of e)if(!Kd(n,{upTo:o}))return n}function Kd(e,{upTo:o}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(o!==void 0&&e===o)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Gd(e){return e instanceof HTMLInputElement&&"select"in e}function Qe(e,{select:o=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Gd(e)&&o&&e.select()}}var Jn=Xd();function Xd(){let e=[];return{add(o){const n=e[0];o!==n&&(n==null||n.pause()),e=er(e,o),e.unshift(o)},remove(o){var n;e=er(e,o),(n=e[0])==null||n.resume()}}}function er(e,o){const n=[...e],r=n.indexOf(o);return r!==-1&&n.splice(r,1),n}function Zd(e){return e.filter(o=>o.tagName!=="A")}var Qd="Portal",$o=s.forwardRef((e,o)=>{var c;const{container:n,...r}=e,[a,i]=s.useState(!1);Ee(()=>i(!0),[]);const l=n||a&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return l?xi.createPortal(t.jsx(pe.div,{...r,ref:o}),l):null});$o.displayName=Qd;function Jd(e,o){return s.useReducer((n,r)=>o[n][r]??n,e)}var Yt=e=>{const{present:o,children:n}=e,r=eu(o),a=typeof n=="function"?n({present:r.isPresent}):s.Children.only(n),i=be(r.ref,tu(a));return typeof n=="function"||r.isPresent?s.cloneElement(a,{ref:i}):null};Yt.displayName="Presence";function eu(e){const[o,n]=s.useState(),r=s.useRef(null),a=s.useRef(e),i=s.useRef("none"),l=e?"mounted":"unmounted",[c,d]=Jd(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const u=Xt(r.current);i.current=c==="mounted"?u:"none"},[c]),Ee(()=>{const u=r.current,p=a.current;if(p!==e){const b=i.current,$=Xt(u);e?d("MOUNT"):$==="none"||(u==null?void 0:u.display)==="none"?d("UNMOUNT"):d(p&&b!==$?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,d]),Ee(()=>{if(o){let u;const p=o.ownerDocument.defaultView??window,g=$=>{const y=Xt(r.current).includes(CSS.escape($.animationName));if($.target===o&&y&&(d("ANIMATION_END"),!a.current)){const m=o.style.animationFillMode;o.style.animationFillMode="forwards",u=p.setTimeout(()=>{o.style.animationFillMode==="forwards"&&(o.style.animationFillMode=m)})}},b=$=>{$.target===o&&(i.current=Xt(r.current))};return o.addEventListener("animationstart",b),o.addEventListener("animationcancel",g),o.addEventListener("animationend",g),()=>{p.clearTimeout(u),o.removeEventListener("animationstart",b),o.removeEventListener("animationcancel",g),o.removeEventListener("animationend",g)}}else d("ANIMATION_END")},[o,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:s.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Xt(e){return(e==null?void 0:e.animationName)||"none"}function tu(e){var r,a;let o=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=o&&"isReactWarning"in o&&o.isReactWarning;return n?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=o&&"isReactWarning"in o&&o.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Oo=0;function oa(){s.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??tr()),document.body.insertAdjacentElement("beforeend",e[1]??tr()),Oo++,()=>{Oo===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(o=>o.remove()),Oo--}},[])}function tr(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var ao="right-scroll-bar-position",so="width-before-scroll-bar",ou="with-scroll-bars-hidden",nu="--removed-body-scroll-bar-size";function _o(e,o){return typeof e=="function"?e(o):e&&(e.current=o),e}function ru(e,o){var n=s.useState(function(){return{value:e,callback:o,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=o,n.facade}var au=typeof window<"u"?s.useLayoutEffect:s.useEffect,or=new WeakMap;function su(e,o){var n=ru(null,function(r){return e.forEach(function(a){return _o(a,r)})});return au(function(){var r=or.get(n);if(r){var a=new Set(r),i=new Set(e),l=n.current;a.forEach(function(c){i.has(c)||_o(c,null)}),i.forEach(function(c){a.has(c)||_o(c,l)})}or.set(n,e)},[e]),n}function iu(e){return e}function lu(e,o){o===void 0&&(o=iu);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=o(i,r);return n.push(l),function(){n=n.filter(function(c){return c!==l})}},assignSyncMedium:function(i){for(r=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(c){return i(c)},filter:function(){return n}}},assignMedium:function(i){r=!0;var l=[];if(n.length){var c=n;n=[],c.forEach(i),l=n}var d=function(){var p=l;l=[],p.forEach(i)},u=function(){return Promise.resolve().then(d)};u(),n={push:function(p){l.push(p),u()},filter:function(p){return l=l.filter(p),n}}}};return a}function cu(e){e===void 0&&(e={});var o=lu(null);return o.options=Je({async:!0,ssr:!1},e),o}var na=function(e){var o=e.sideCar,n=Tr(e,["sideCar"]);if(!o)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=o.read();if(!r)throw new Error("Sidecar medium not found");return s.createElement(r,Je({},n))};na.isSideCarExport=!0;function du(e,o){return e.useMedium(o),na}var ra=cu(),Fo=function(){},No=s.forwardRef(function(e,o){var n=s.useRef(null),r=s.useState({onScrollCapture:Fo,onWheelCapture:Fo,onTouchMoveCapture:Fo}),a=r[0],i=r[1],l=e.forwardProps,c=e.children,d=e.className,u=e.removeScrollBar,p=e.enabled,g=e.shards,b=e.sideCar,$=e.noRelative,v=e.noIsolation,y=e.inert,m=e.allowPinchZoom,w=e.as,h=w===void 0?"div":w,N=e.gapMode,j=Tr(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),f=b,R=su([n,o]),A=Je(Je({},j),a);return s.createElement(s.Fragment,null,p&&s.createElement(f,{sideCar:ra,removeScrollBar:u,shards:g,noRelative:$,noIsolation:v,inert:y,setCallbacks:i,allowPinchZoom:!!m,lockRef:n,gapMode:N}),l?s.cloneElement(s.Children.only(c),Je(Je({},A),{ref:R})):s.createElement(h,Je({},A,{className:d,ref:R}),c))});No.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};No.classNames={fullWidth:so,zeroRight:ao};var uu=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function pu(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var o=uu();return o&&e.setAttribute("nonce",o),e}function gu(e,o){e.styleSheet?e.styleSheet.cssText=o:e.appendChild(document.createTextNode(o))}function mu(e){var o=document.head||document.getElementsByTagName("head")[0];o.appendChild(e)}var fu=function(){var e=0,o=null;return{add:function(n){e==0&&(o=pu())&&(gu(o,n),mu(o)),e++},remove:function(){e--,!e&&o&&(o.parentNode&&o.parentNode.removeChild(o),o=null)}}},hu=function(){var e=fu();return function(o,n){s.useEffect(function(){return e.add(o),function(){e.remove()}},[o&&n])}},aa=function(){var e=hu(),o=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return o},yu={left:0,top:0,right:0,gap:0},Wo=function(e){return parseInt(e||"",10)||0},xu=function(e){var o=window.getComputedStyle(document.body),n=o[e==="padding"?"paddingLeft":"marginLeft"],r=o[e==="padding"?"paddingTop":"marginTop"],a=o[e==="padding"?"paddingRight":"marginRight"];return[Wo(n),Wo(r),Wo(a)]},bu=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return yu;var o=xu(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:o[0],top:o[1],right:o[2],gap:Math.max(0,r-n+o[2]-o[0])}},vu=aa(),jt="data-scroll-locked",wu=function(e,o,n,r){var a=e.left,i=e.top,l=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(ou,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(jt,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([o&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ao,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(so,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(ao," .").concat(ao,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(so," .").concat(so,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(jt,`] {
    `).concat(nu,": ").concat(c,`px;
  }
`)},nr=function(){var e=parseInt(document.body.getAttribute(jt)||"0",10);return isFinite(e)?e:0},$u=function(){s.useEffect(function(){return document.body.setAttribute(jt,(nr()+1).toString()),function(){var e=nr()-1;e<=0?document.body.removeAttribute(jt):document.body.setAttribute(jt,e.toString())}},[])},Nu=function(e){var o=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;$u();var i=s.useMemo(function(){return bu(a)},[a]);return s.createElement(vu,{styles:wu(i,!o,a,n?"":"!important")})},Zo=!1;if(typeof window<"u")try{var Zt=Object.defineProperty({},"passive",{get:function(){return Zo=!0,!0}});window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{Zo=!1}var vt=Zo?{passive:!1}:!1,ju=function(e){return e.tagName==="TEXTAREA"},sa=function(e,o){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[o]!=="hidden"&&!(n.overflowY===n.overflowX&&!ju(e)&&n[o]==="visible")},Su=function(e){return sa(e,"overflowY")},ku=function(e){return sa(e,"overflowX")},rr=function(e,o){var n=o.ownerDocument,r=o;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=ia(e,r);if(a){var i=la(e,r),l=i[1],c=i[2];if(l>c)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Cu=function(e){var o=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[o,n,r]},Eu=function(e){var o=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[o,n,r]},ia=function(e,o){return e==="v"?Su(o):ku(o)},la=function(e,o){return e==="v"?Cu(o):Eu(o)},Tu=function(e,o){return e==="h"&&o==="rtl"?-1:1},Au=function(e,o,n,r,a){var i=Tu(e,window.getComputedStyle(o).direction),l=i*r,c=n.target,d=o.contains(c),u=!1,p=l>0,g=0,b=0;do{if(!c)break;var $=la(e,c),v=$[0],y=$[1],m=$[2],w=y-m-i*v;(v||w)&&ia(e,c)&&(g+=w,b+=v);var h=c.parentNode;c=h&&h.nodeType===Node.DOCUMENT_FRAGMENT_NODE?h.host:h}while(!d&&c!==document.body||d&&(o.contains(c)||o===c));return(p&&Math.abs(g)<1||!p&&Math.abs(b)<1)&&(u=!0),u},Qt=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ar=function(e){return[e.deltaX,e.deltaY]},sr=function(e){return e&&"current"in e?e.current:e},Iu=function(e,o){return e[0]===o[0]&&e[1]===o[1]},Ru=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},zu=0,wt=[];function Du(e){var o=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),a=s.useState(zu++)[0],i=s.useState(aa)[0],l=s.useRef(e);s.useEffect(function(){l.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var y=bi([e.lockRef.current],(e.shards||[]).map(sr),!0).filter(Boolean);return y.forEach(function(m){return m.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),y.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=s.useCallback(function(y,m){if("touches"in y&&y.touches.length===2||y.type==="wheel"&&y.ctrlKey)return!l.current.allowPinchZoom;var w=Qt(y),h=n.current,N="deltaX"in y?y.deltaX:h[0]-w[0],j="deltaY"in y?y.deltaY:h[1]-w[1],f,R=y.target,A=Math.abs(N)>Math.abs(j)?"h":"v";if("touches"in y&&A==="h"&&R.type==="range")return!1;var E=window.getSelection(),I=E&&E.anchorNode,S=I?I===R||I.contains(R):!1;if(S)return!1;var O=rr(A,R);if(!O)return!0;if(O?f=A:(f=A==="v"?"h":"v",O=rr(A,R)),!O)return!1;if(!r.current&&"changedTouches"in y&&(N||j)&&(r.current=f),!f)return!0;var k=r.current||f;return Au(k,m,y,k==="h"?N:j)},[]),d=s.useCallback(function(y){var m=y;if(!(!wt.length||wt[wt.length-1]!==i)){var w="deltaY"in m?ar(m):Qt(m),h=o.current.filter(function(f){return f.name===m.type&&(f.target===m.target||m.target===f.shadowParent)&&Iu(f.delta,w)})[0];if(h&&h.should){m.cancelable&&m.preventDefault();return}if(!h){var N=(l.current.shards||[]).map(sr).filter(Boolean).filter(function(f){return f.contains(m.target)}),j=N.length>0?c(m,N[0]):!l.current.noIsolation;j&&m.cancelable&&m.preventDefault()}}},[]),u=s.useCallback(function(y,m,w,h){var N={name:y,delta:m,target:w,should:h,shadowParent:Pu(w)};o.current.push(N),setTimeout(function(){o.current=o.current.filter(function(j){return j!==N})},1)},[]),p=s.useCallback(function(y){n.current=Qt(y),r.current=void 0},[]),g=s.useCallback(function(y){u(y.type,ar(y),y.target,c(y,e.lockRef.current))},[]),b=s.useCallback(function(y){u(y.type,Qt(y),y.target,c(y,e.lockRef.current))},[]);s.useEffect(function(){return wt.push(i),e.setCallbacks({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:b}),document.addEventListener("wheel",d,vt),document.addEventListener("touchmove",d,vt),document.addEventListener("touchstart",p,vt),function(){wt=wt.filter(function(y){return y!==i}),document.removeEventListener("wheel",d,vt),document.removeEventListener("touchmove",d,vt),document.removeEventListener("touchstart",p,vt)}},[]);var $=e.removeScrollBar,v=e.inert;return s.createElement(s.Fragment,null,v?s.createElement(i,{styles:Ru(a)}):null,$?s.createElement(Nu,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Pu(e){for(var o=null;e!==null;)e instanceof ShadowRoot&&(o=e.host,e=e.host),e=e.parentNode;return o}const Lu=du(ra,Du);var hn=s.forwardRef(function(e,o){return s.createElement(No,Je({},e,{ref:o,sideCar:Lu}))});hn.classNames=No.classNames;var Mu=function(e){if(typeof document>"u")return null;var o=Array.isArray(e)?e[0]:e;return o.ownerDocument.body},$t=new WeakMap,Jt=new WeakMap,eo={},Vo=0,ca=function(e){return e&&(e.host||ca(e.parentNode))},Ou=function(e,o){return o.map(function(n){if(e.contains(n))return n;var r=ca(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},_u=function(e,o,n,r){var a=Ou(o,Array.isArray(e)?e:[e]);eo[n]||(eo[n]=new WeakMap);var i=eo[n],l=[],c=new Set,d=new Set(a),u=function(g){!g||c.has(g)||(c.add(g),u(g.parentNode))};a.forEach(u);var p=function(g){!g||d.has(g)||Array.prototype.forEach.call(g.children,function(b){if(c.has(b))p(b);else try{var $=b.getAttribute(r),v=$!==null&&$!=="false",y=($t.get(b)||0)+1,m=(i.get(b)||0)+1;$t.set(b,y),i.set(b,m),l.push(b),y===1&&v&&Jt.set(b,!0),m===1&&b.setAttribute(n,"true"),v||b.setAttribute(r,"true")}catch(w){console.error("aria-hidden: cannot operate on ",b,w)}})};return p(o),c.clear(),Vo++,function(){l.forEach(function(g){var b=$t.get(g)-1,$=i.get(g)-1;$t.set(g,b),i.set(g,$),b||(Jt.has(g)||g.removeAttribute(r),Jt.delete(g)),$||g.removeAttribute(n)}),Vo--,Vo||($t=new WeakMap,$t=new WeakMap,Jt=new WeakMap,eo={})}},da=function(e,o,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=Mu(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live], script"))),_u(r,a,n,"aria-hidden")):function(){return null}};function Fu(e){const o=Wu(e),n=s.forwardRef((r,a)=>{const{children:i,...l}=r,c=s.Children.toArray(i),d=c.find(Bu);if(d){const u=d.props.children,p=c.map(g=>g===d?s.Children.count(u)>1?s.Children.only(null):s.isValidElement(u)?u.props.children:null:g);return t.jsx(o,{...l,ref:a,children:s.isValidElement(u)?s.cloneElement(u,void 0,p):null})}return t.jsx(o,{...l,ref:a,children:i})});return n.displayName=`${e}.Slot`,n}function Wu(e){const o=s.forwardRef((n,r)=>{const{children:a,...i}=n;if(s.isValidElement(a)){const l=Yu(a),c=Hu(i,a.props);return a.type!==s.Fragment&&(c.ref=r?Tt(r,l):l),s.cloneElement(a,c)}return s.Children.count(a)>1?s.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var Vu=Symbol("radix.slottable");function Bu(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Vu}function Hu(e,o){const n={...o};for(const r in o){const a=e[r],i=o[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...c)=>{const d=i(...c);return a(...c),d}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function Yu(e){var r,a;let o=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=o&&"isReactWarning"in o&&o.isReactWarning;return n?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=o&&"isReactWarning"in o&&o.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var jo="Dialog",[ua]=Ht(jo),[Uu,Fe]=ua(jo),pa=e=>{const{__scopeDialog:o,children:n,open:r,defaultOpen:a,onOpenChange:i,modal:l=!0}=e,c=s.useRef(null),d=s.useRef(null),[u,p]=go({prop:r,defaultProp:a??!1,onChange:i,caller:jo});return t.jsx(Uu,{scope:o,triggerRef:c,contentRef:d,contentId:Nt(),titleId:Nt(),descriptionId:Nt(),open:u,onOpenChange:p,onOpenToggle:s.useCallback(()=>p(g=>!g),[p]),modal:l,children:n})};pa.displayName=jo;var ga="DialogTrigger",qu=s.forwardRef((e,o)=>{const{__scopeDialog:n,...r}=e,a=Fe(ga,n),i=be(o,a.triggerRef);return t.jsx(pe.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":bn(a.open),...r,ref:i,onClick:ce(e.onClick,a.onOpenToggle)})});qu.displayName=ga;var yn="DialogPortal",[Ku,ma]=ua(yn,{forceMount:void 0}),fa=e=>{const{__scopeDialog:o,forceMount:n,children:r,container:a}=e,i=Fe(yn,o);return t.jsx(Ku,{scope:o,forceMount:n,children:s.Children.map(r,l=>t.jsx(Yt,{present:n||i.open,children:t.jsx($o,{asChild:!0,container:a,children:l})}))})};fa.displayName=yn;var mo="DialogOverlay",ha=s.forwardRef((e,o)=>{const n=ma(mo,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,i=Fe(mo,e.__scopeDialog);return i.modal?t.jsx(Yt,{present:r||i.open,children:t.jsx(Xu,{...a,ref:o})}):null});ha.displayName=mo;var Gu=Fu("DialogOverlay.RemoveScroll"),Xu=s.forwardRef((e,o)=>{const{__scopeDialog:n,...r}=e,a=Fe(mo,n);return t.jsx(hn,{as:Gu,allowPinchZoom:!0,shards:[a.contentRef],children:t.jsx(pe.div,{"data-state":bn(a.open),...r,ref:o,style:{pointerEvents:"auto",...r.style}})})}),ct="DialogContent",ya=s.forwardRef((e,o)=>{const n=ma(ct,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,i=Fe(ct,e.__scopeDialog);return t.jsx(Yt,{present:r||i.open,children:i.modal?t.jsx(Zu,{...a,ref:o}):t.jsx(Qu,{...a,ref:o})})});ya.displayName=ct;var Zu=s.forwardRef((e,o)=>{const n=Fe(ct,e.__scopeDialog),r=s.useRef(null),a=be(o,n.contentRef,r);return s.useEffect(()=>{const i=r.current;if(i)return da(i)},[]),t.jsx(xa,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ce(e.onCloseAutoFocus,i=>{var l;i.preventDefault(),(l=n.triggerRef.current)==null||l.focus()}),onPointerDownOutside:ce(e.onPointerDownOutside,i=>{const l=i.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&i.preventDefault()}),onFocusOutside:ce(e.onFocusOutside,i=>i.preventDefault())})}),Qu=s.forwardRef((e,o)=>{const n=Fe(ct,e.__scopeDialog),r=s.useRef(!1),a=s.useRef(!1);return t.jsx(xa,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var l,c;(l=e.onCloseAutoFocus)==null||l.call(e,i),i.defaultPrevented||(r.current||(c=n.triggerRef.current)==null||c.focus(),i.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:i=>{var d,u;(d=e.onInteractOutside)==null||d.call(e,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const l=i.target;((u=n.triggerRef.current)==null?void 0:u.contains(l))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&a.current&&i.preventDefault()}})}),xa=s.forwardRef((e,o)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:i,...l}=e,c=Fe(ct,n),d=s.useRef(null),u=be(o,d);return oa(),t.jsxs(t.Fragment,{children:[t.jsx(fn,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:i,children:t.jsx(wo,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":bn(c.open),...l,ref:u,onDismiss:()=>c.onOpenChange(!1)})}),t.jsxs(t.Fragment,{children:[t.jsx(Ju,{titleId:c.titleId}),t.jsx(tp,{contentRef:d,descriptionId:c.descriptionId})]})]})}),xn="DialogTitle",ba=s.forwardRef((e,o)=>{const{__scopeDialog:n,...r}=e,a=Fe(xn,n);return t.jsx(pe.h2,{id:a.titleId,...r,ref:o})});ba.displayName=xn;var va="DialogDescription",wa=s.forwardRef((e,o)=>{const{__scopeDialog:n,...r}=e,a=Fe(va,n);return t.jsx(pe.p,{id:a.descriptionId,...r,ref:o})});wa.displayName=va;var $a="DialogClose",Na=s.forwardRef((e,o)=>{const{__scopeDialog:n,...r}=e,a=Fe($a,n);return t.jsx(pe.button,{type:"button",...r,ref:o,onClick:ce(e.onClick,()=>a.onOpenChange(!1))})});Na.displayName=$a;function bn(e){return e?"open":"closed"}var ja="DialogTitleWarning",[kf,Sa]=$d(ja,{contentName:ct,titleName:xn,docsSlug:"dialog"}),Ju=({titleId:e})=>{const o=Sa(ja),n=`\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},ep="DialogDescriptionWarning",tp=({contentRef:e,descriptionId:o})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Sa(ep).contentName}}.`;return s.useEffect(()=>{var i;const a=(i=e.current)==null?void 0:i.getAttribute("aria-describedby");o&&a&&(document.getElementById(o)||console.warn(r))},[r,e,o]),null},op=pa,np=fa,ka=ha,Ca=ya,Ea=ba,Ta=wa,rp=Na;const Rt=op,ap=np,Aa=s.forwardRef(({className:e,...o},n)=>t.jsx(ka,{ref:n,className:le("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...o}));Aa.displayName=ka.displayName;const gt=s.forwardRef(({className:e,children:o,...n},r)=>t.jsxs(ap,{children:[t.jsx(Aa,{}),t.jsxs(Ca,{ref:r,className:le("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[o,t.jsxs(rp,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[t.jsx(pn,{className:"h-4 w-4"}),t.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));gt.displayName=Ca.displayName;const mt=({className:e,...o})=>t.jsx("div",{className:le("flex flex-col space-y-1.5 text-center sm:text-left",e),...o});mt.displayName="DialogHeader";const ft=({className:e,...o})=>t.jsx("div",{className:le("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...o});ft.displayName="DialogFooter";const ht=s.forwardRef(({className:e,...o},n)=>t.jsx(Ea,{ref:n,className:le("text-lg font-semibold leading-none tracking-tight",e),...o}));ht.displayName=Ea.displayName;const yt=s.forwardRef(({className:e,...o},n)=>t.jsx(Ta,{ref:n,className:le("text-sm text-muted-foreground",e),...o}));yt.displayName=Ta.displayName;var sp=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ip=sp.reduce((e,o)=>{const n=Lr(`Primitive.${o}`),r=s.forwardRef((a,i)=>{const{asChild:l,...c}=a,d=l?n:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(d,{...c,ref:i})});return r.displayName=`Primitive.${o}`,{...e,[o]:r}},{}),lp="Label",Ia=s.forwardRef((e,o)=>t.jsx(ip.label,{...e,ref:o,onMouseDown:n=>{var a;n.target.closest("button, input, select, textarea")||((a=e.onMouseDown)==null||a.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));Ia.displayName=lp;var Ra=Ia;const cp=Bt("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),U=s.forwardRef(({className:e,...o},n)=>t.jsx(Ra,{ref:n,className:le(cp(),e),...o}));U.displayName=Ra.displayName;function ir(e,[o,n]){return Math.min(n,Math.max(o,e))}function lr(e){const o=dp(e),n=s.forwardRef((r,a)=>{const{children:i,...l}=r,c=s.Children.toArray(i),d=c.find(pp);if(d){const u=d.props.children,p=c.map(g=>g===d?s.Children.count(u)>1?s.Children.only(null):s.isValidElement(u)?u.props.children:null:g);return t.jsx(o,{...l,ref:a,children:s.isValidElement(u)?s.cloneElement(u,void 0,p):null})}return t.jsx(o,{...l,ref:a,children:i})});return n.displayName=`${e}.Slot`,n}function dp(e){const o=s.forwardRef((n,r)=>{const{children:a,...i}=n;if(s.isValidElement(a)){const l=mp(a),c=gp(i,a.props);return a.type!==s.Fragment&&(c.ref=r?Tt(r,l):l),s.cloneElement(a,c)}return s.Children.count(a)>1?s.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var up=Symbol("radix.slottable");function pp(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===up}function gp(e,o){const n={...o};for(const r in o){const a=e[r],i=o[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...c)=>{const d=i(...c);return a(...c),d}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function mp(e){var r,a;let o=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=o&&"isReactWarning"in o&&o.isReactWarning;return n?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=o&&"isReactWarning"in o&&o.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function za(e){const o=e+"CollectionProvider",[n,r]=Ht(o),[a,i]=n(o,{collectionRef:{current:null},itemMap:new Map}),l=y=>{const{scope:m,children:w}=y,h=it.useRef(null),N=it.useRef(new Map).current;return t.jsx(a,{scope:m,itemMap:N,collectionRef:h,children:w})};l.displayName=o;const c=e+"CollectionSlot",d=lr(c),u=it.forwardRef((y,m)=>{const{scope:w,children:h}=y,N=i(c,w),j=be(m,N.collectionRef);return t.jsx(d,{ref:j,children:h})});u.displayName=c;const p=e+"CollectionItemSlot",g="data-radix-collection-item",b=lr(p),$=it.forwardRef((y,m)=>{const{scope:w,children:h,...N}=y,j=it.useRef(null),f=be(m,j),R=i(p,w);return it.useEffect(()=>(R.itemMap.set(j,{ref:j,...N}),()=>void R.itemMap.delete(j))),t.jsx(b,{[g]:"",ref:f,children:h})});$.displayName=p;function v(y){const m=i(e+"CollectionConsumer",y);return it.useCallback(()=>{const h=m.collectionRef.current;if(!h)return[];const N=Array.from(h.querySelectorAll(`[${g}]`));return Array.from(m.itemMap.values()).sort((R,A)=>N.indexOf(R.ref.current)-N.indexOf(A.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:l,Slot:u,ItemSlot:$},v,r]}var fp=s.createContext(void 0);function hp(e){const o=s.useContext(fp);return e||o||"ltr"}const yp=["top","right","bottom","left"],tt=Math.min,Ae=Math.max,fo=Math.round,to=Math.floor,Ve=e=>({x:e,y:e}),xp={left:"right",right:"left",bottom:"top",top:"bottom"},bp={start:"end",end:"start"};function Qo(e,o,n){return Ae(e,tt(o,n))}function Ge(e,o){return typeof e=="function"?e(o):e}function Xe(e){return e.split("-")[0]}function zt(e){return e.split("-")[1]}function vn(e){return e==="x"?"y":"x"}function wn(e){return e==="y"?"height":"width"}const vp=new Set(["top","bottom"]);function We(e){return vp.has(Xe(e))?"y":"x"}function $n(e){return vn(We(e))}function wp(e,o,n){n===void 0&&(n=!1);const r=zt(e),a=$n(e),i=wn(a);let l=a==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return o.reference[i]>o.floating[i]&&(l=ho(l)),[l,ho(l)]}function $p(e){const o=ho(e);return[Jo(e),o,Jo(o)]}function Jo(e){return e.replace(/start|end/g,o=>bp[o])}const cr=["left","right"],dr=["right","left"],Np=["top","bottom"],jp=["bottom","top"];function Sp(e,o,n){switch(e){case"top":case"bottom":return n?o?dr:cr:o?cr:dr;case"left":case"right":return o?Np:jp;default:return[]}}function kp(e,o,n,r){const a=zt(e);let i=Sp(Xe(e),n==="start",r);return a&&(i=i.map(l=>l+"-"+a),o&&(i=i.concat(i.map(Jo)))),i}function ho(e){return e.replace(/left|right|bottom|top/g,o=>xp[o])}function Cp(e){return{top:0,right:0,bottom:0,left:0,...e}}function Da(e){return typeof e!="number"?Cp(e):{top:e,right:e,bottom:e,left:e}}function yo(e){const{x:o,y:n,width:r,height:a}=e;return{width:r,height:a,top:n,left:o,right:o+r,bottom:n+a,x:o,y:n}}function ur(e,o,n){let{reference:r,floating:a}=e;const i=We(o),l=$n(o),c=wn(l),d=Xe(o),u=i==="y",p=r.x+r.width/2-a.width/2,g=r.y+r.height/2-a.height/2,b=r[c]/2-a[c]/2;let $;switch(d){case"top":$={x:p,y:r.y-a.height};break;case"bottom":$={x:p,y:r.y+r.height};break;case"right":$={x:r.x+r.width,y:g};break;case"left":$={x:r.x-a.width,y:g};break;default:$={x:r.x,y:r.y}}switch(zt(o)){case"start":$[l]-=b*(n&&u?-1:1);break;case"end":$[l]+=b*(n&&u?-1:1);break}return $}const Ep=async(e,o,n)=>{const{placement:r="bottom",strategy:a="absolute",middleware:i=[],platform:l}=n,c=i.filter(Boolean),d=await(l.isRTL==null?void 0:l.isRTL(o));let u=await l.getElementRects({reference:e,floating:o,strategy:a}),{x:p,y:g}=ur(u,r,d),b=r,$={},v=0;for(let y=0;y<c.length;y++){const{name:m,fn:w}=c[y],{x:h,y:N,data:j,reset:f}=await w({x:p,y:g,initialPlacement:r,placement:b,strategy:a,middlewareData:$,rects:u,platform:l,elements:{reference:e,floating:o}});p=h??p,g=N??g,$={...$,[m]:{...$[m],...j}},f&&v<=50&&(v++,typeof f=="object"&&(f.placement&&(b=f.placement),f.rects&&(u=f.rects===!0?await l.getElementRects({reference:e,floating:o,strategy:a}):f.rects),{x:p,y:g}=ur(u,b,d)),y=-1)}return{x:p,y:g,placement:b,strategy:a,middlewareData:$}};async function _t(e,o){var n;o===void 0&&(o={});const{x:r,y:a,platform:i,rects:l,elements:c,strategy:d}=e,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:g="floating",altBoundary:b=!1,padding:$=0}=Ge(o,e),v=Da($),m=c[b?g==="floating"?"reference":"floating":g],w=yo(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(m)))==null||n?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:u,rootBoundary:p,strategy:d})),h=g==="floating"?{x:r,y:a,width:l.floating.width,height:l.floating.height}:l.reference,N=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),j=await(i.isElement==null?void 0:i.isElement(N))?await(i.getScale==null?void 0:i.getScale(N))||{x:1,y:1}:{x:1,y:1},f=yo(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:h,offsetParent:N,strategy:d}):h);return{top:(w.top-f.top+v.top)/j.y,bottom:(f.bottom-w.bottom+v.bottom)/j.y,left:(w.left-f.left+v.left)/j.x,right:(f.right-w.right+v.right)/j.x}}const Tp=e=>({name:"arrow",options:e,async fn(o){const{x:n,y:r,placement:a,rects:i,platform:l,elements:c,middlewareData:d}=o,{element:u,padding:p=0}=Ge(e,o)||{};if(u==null)return{};const g=Da(p),b={x:n,y:r},$=$n(a),v=wn($),y=await l.getDimensions(u),m=$==="y",w=m?"top":"left",h=m?"bottom":"right",N=m?"clientHeight":"clientWidth",j=i.reference[v]+i.reference[$]-b[$]-i.floating[v],f=b[$]-i.reference[$],R=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let A=R?R[N]:0;(!A||!await(l.isElement==null?void 0:l.isElement(R)))&&(A=c.floating[N]||i.floating[v]);const E=j/2-f/2,I=A/2-y[v]/2-1,S=tt(g[w],I),O=tt(g[h],I),k=S,P=A-y[v]-O,C=A/2-y[v]/2+E,F=Qo(k,C,P),_=!d.arrow&&zt(a)!=null&&C!==F&&i.reference[v]/2-(C<k?S:O)-y[v]/2<0,Y=_?C<k?C-k:C-P:0;return{[$]:b[$]+Y,data:{[$]:F,centerOffset:C-F-Y,..._&&{alignmentOffset:Y}},reset:_}}}),Ap=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(o){var n,r;const{placement:a,middlewareData:i,rects:l,initialPlacement:c,platform:d,elements:u}=o,{mainAxis:p=!0,crossAxis:g=!0,fallbackPlacements:b,fallbackStrategy:$="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...m}=Ge(e,o);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const w=Xe(a),h=We(c),N=Xe(c)===c,j=await(d.isRTL==null?void 0:d.isRTL(u.floating)),f=b||(N||!y?[ho(c)]:$p(c)),R=v!=="none";!b&&R&&f.push(...kp(c,y,v,j));const A=[c,...f],E=await _t(o,m),I=[];let S=((r=i.flip)==null?void 0:r.overflows)||[];if(p&&I.push(E[w]),g){const C=wp(a,l,j);I.push(E[C[0]],E[C[1]])}if(S=[...S,{placement:a,overflows:I}],!I.every(C=>C<=0)){var O,k;const C=(((O=i.flip)==null?void 0:O.index)||0)+1,F=A[C];if(F&&(!(g==="alignment"?h!==We(F):!1)||S.every(D=>We(D.placement)===h?D.overflows[0]>0:!0)))return{data:{index:C,overflows:S},reset:{placement:F}};let _=(k=S.filter(Y=>Y.overflows[0]<=0).sort((Y,D)=>Y.overflows[1]-D.overflows[1])[0])==null?void 0:k.placement;if(!_)switch($){case"bestFit":{var P;const Y=(P=S.filter(D=>{if(R){const Q=We(D.placement);return Q===h||Q==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(Q=>Q>0).reduce((Q,fe)=>Q+fe,0)]).sort((D,Q)=>D[1]-Q[1])[0])==null?void 0:P[0];Y&&(_=Y);break}case"initialPlacement":_=c;break}if(a!==_)return{reset:{placement:_}}}return{}}}};function pr(e,o){return{top:e.top-o.height,right:e.right-o.width,bottom:e.bottom-o.height,left:e.left-o.width}}function gr(e){return yp.some(o=>e[o]>=0)}const Ip=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(o){const{rects:n}=o,{strategy:r="referenceHidden",...a}=Ge(e,o);switch(r){case"referenceHidden":{const i=await _t(o,{...a,elementContext:"reference"}),l=pr(i,n.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:gr(l)}}}case"escaped":{const i=await _t(o,{...a,altBoundary:!0}),l=pr(i,n.floating);return{data:{escapedOffsets:l,escaped:gr(l)}}}default:return{}}}}},Pa=new Set(["left","top"]);async function Rp(e,o){const{placement:n,platform:r,elements:a}=e,i=await(r.isRTL==null?void 0:r.isRTL(a.floating)),l=Xe(n),c=zt(n),d=We(n)==="y",u=Pa.has(l)?-1:1,p=i&&d?-1:1,g=Ge(o,e);let{mainAxis:b,crossAxis:$,alignmentAxis:v}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&typeof v=="number"&&($=c==="end"?v*-1:v),d?{x:$*p,y:b*u}:{x:b*u,y:$*p}}const zp=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(o){var n,r;const{x:a,y:i,placement:l,middlewareData:c}=o,d=await Rp(o,e);return l===((n=c.offset)==null?void 0:n.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:a+d.x,y:i+d.y,data:{...d,placement:l}}}}},Dp=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(o){const{x:n,y:r,placement:a}=o,{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:m=>{let{x:w,y:h}=m;return{x:w,y:h}}},...d}=Ge(e,o),u={x:n,y:r},p=await _t(o,d),g=We(Xe(a)),b=vn(g);let $=u[b],v=u[g];if(i){const m=b==="y"?"top":"left",w=b==="y"?"bottom":"right",h=$+p[m],N=$-p[w];$=Qo(h,$,N)}if(l){const m=g==="y"?"top":"left",w=g==="y"?"bottom":"right",h=v+p[m],N=v-p[w];v=Qo(h,v,N)}const y=c.fn({...o,[b]:$,[g]:v});return{...y,data:{x:y.x-n,y:y.y-r,enabled:{[b]:i,[g]:l}}}}}},Pp=function(e){return e===void 0&&(e={}),{options:e,fn(o){const{x:n,y:r,placement:a,rects:i,middlewareData:l}=o,{offset:c=0,mainAxis:d=!0,crossAxis:u=!0}=Ge(e,o),p={x:n,y:r},g=We(a),b=vn(g);let $=p[b],v=p[g];const y=Ge(c,o),m=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(d){const N=b==="y"?"height":"width",j=i.reference[b]-i.floating[N]+m.mainAxis,f=i.reference[b]+i.reference[N]-m.mainAxis;$<j?$=j:$>f&&($=f)}if(u){var w,h;const N=b==="y"?"width":"height",j=Pa.has(Xe(a)),f=i.reference[g]-i.floating[N]+(j&&((w=l.offset)==null?void 0:w[g])||0)+(j?0:m.crossAxis),R=i.reference[g]+i.reference[N]+(j?0:((h=l.offset)==null?void 0:h[g])||0)-(j?m.crossAxis:0);v<f?v=f:v>R&&(v=R)}return{[b]:$,[g]:v}}}},Lp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(o){var n,r;const{placement:a,rects:i,platform:l,elements:c}=o,{apply:d=()=>{},...u}=Ge(e,o),p=await _t(o,u),g=Xe(a),b=zt(a),$=We(a)==="y",{width:v,height:y}=i.floating;let m,w;g==="top"||g==="bottom"?(m=g,w=b===(await(l.isRTL==null?void 0:l.isRTL(c.floating))?"start":"end")?"left":"right"):(w=g,m=b==="end"?"top":"bottom");const h=y-p.top-p.bottom,N=v-p.left-p.right,j=tt(y-p[m],h),f=tt(v-p[w],N),R=!o.middlewareData.shift;let A=j,E=f;if((n=o.middlewareData.shift)!=null&&n.enabled.x&&(E=N),(r=o.middlewareData.shift)!=null&&r.enabled.y&&(A=h),R&&!b){const S=Ae(p.left,0),O=Ae(p.right,0),k=Ae(p.top,0),P=Ae(p.bottom,0);$?E=v-2*(S!==0||O!==0?S+O:Ae(p.left,p.right)):A=y-2*(k!==0||P!==0?k+P:Ae(p.top,p.bottom))}await d({...o,availableWidth:E,availableHeight:A});const I=await l.getDimensions(c.floating);return v!==I.width||y!==I.height?{reset:{rects:!0}}:{}}}};function So(){return typeof window<"u"}function Dt(e){return La(e)?(e.nodeName||"").toLowerCase():"#document"}function Ie(e){var o;return(e==null||(o=e.ownerDocument)==null?void 0:o.defaultView)||window}function Ue(e){var o;return(o=(La(e)?e.ownerDocument:e.document)||window.document)==null?void 0:o.documentElement}function La(e){return So()?e instanceof Node||e instanceof Ie(e).Node:!1}function Me(e){return So()?e instanceof Element||e instanceof Ie(e).Element:!1}function Be(e){return So()?e instanceof HTMLElement||e instanceof Ie(e).HTMLElement:!1}function mr(e){return!So()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ie(e).ShadowRoot}const Mp=new Set(["inline","contents"]);function Ut(e){const{overflow:o,overflowX:n,overflowY:r,display:a}=Oe(e);return/auto|scroll|overlay|hidden|clip/.test(o+r+n)&&!Mp.has(a)}const Op=new Set(["table","td","th"]);function _p(e){return Op.has(Dt(e))}const Fp=[":popover-open",":modal"];function ko(e){return Fp.some(o=>{try{return e.matches(o)}catch{return!1}})}const Wp=["transform","translate","scale","rotate","perspective"],Vp=["transform","translate","scale","rotate","perspective","filter"],Bp=["paint","layout","strict","content"];function Nn(e){const o=jn(),n=Me(e)?Oe(e):e;return Wp.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!o&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!o&&(n.filter?n.filter!=="none":!1)||Vp.some(r=>(n.willChange||"").includes(r))||Bp.some(r=>(n.contain||"").includes(r))}function Hp(e){let o=ot(e);for(;Be(o)&&!Ct(o);){if(Nn(o))return o;if(ko(o))return null;o=ot(o)}return null}function jn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Yp=new Set(["html","body","#document"]);function Ct(e){return Yp.has(Dt(e))}function Oe(e){return Ie(e).getComputedStyle(e)}function Co(e){return Me(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ot(e){if(Dt(e)==="html")return e;const o=e.assignedSlot||e.parentNode||mr(e)&&e.host||Ue(e);return mr(o)?o.host:o}function Ma(e){const o=ot(e);return Ct(o)?e.ownerDocument?e.ownerDocument.body:e.body:Be(o)&&Ut(o)?o:Ma(o)}function Ft(e,o,n){var r;o===void 0&&(o=[]),n===void 0&&(n=!0);const a=Ma(e),i=a===((r=e.ownerDocument)==null?void 0:r.body),l=Ie(a);if(i){const c=en(l);return o.concat(l,l.visualViewport||[],Ut(a)?a:[],c&&n?Ft(c):[])}return o.concat(a,Ft(a,[],n))}function en(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Oa(e){const o=Oe(e);let n=parseFloat(o.width)||0,r=parseFloat(o.height)||0;const a=Be(e),i=a?e.offsetWidth:n,l=a?e.offsetHeight:r,c=fo(n)!==i||fo(r)!==l;return c&&(n=i,r=l),{width:n,height:r,$:c}}function Sn(e){return Me(e)?e:e.contextElement}function St(e){const o=Sn(e);if(!Be(o))return Ve(1);const n=o.getBoundingClientRect(),{width:r,height:a,$:i}=Oa(o);let l=(i?fo(n.width):n.width)/r,c=(i?fo(n.height):n.height)/a;return(!l||!Number.isFinite(l))&&(l=1),(!c||!Number.isFinite(c))&&(c=1),{x:l,y:c}}const Up=Ve(0);function _a(e){const o=Ie(e);return!jn()||!o.visualViewport?Up:{x:o.visualViewport.offsetLeft,y:o.visualViewport.offsetTop}}function qp(e,o,n){return o===void 0&&(o=!1),!n||o&&n!==Ie(e)?!1:o}function dt(e,o,n,r){o===void 0&&(o=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect(),i=Sn(e);let l=Ve(1);o&&(r?Me(r)&&(l=St(r)):l=St(e));const c=qp(i,n,r)?_a(i):Ve(0);let d=(a.left+c.x)/l.x,u=(a.top+c.y)/l.y,p=a.width/l.x,g=a.height/l.y;if(i){const b=Ie(i),$=r&&Me(r)?Ie(r):r;let v=b,y=en(v);for(;y&&r&&$!==v;){const m=St(y),w=y.getBoundingClientRect(),h=Oe(y),N=w.left+(y.clientLeft+parseFloat(h.paddingLeft))*m.x,j=w.top+(y.clientTop+parseFloat(h.paddingTop))*m.y;d*=m.x,u*=m.y,p*=m.x,g*=m.y,d+=N,u+=j,v=Ie(y),y=en(v)}}return yo({width:p,height:g,x:d,y:u})}function Eo(e,o){const n=Co(e).scrollLeft;return o?o.left+n:dt(Ue(e)).left+n}function Fa(e,o){const n=e.getBoundingClientRect(),r=n.left+o.scrollLeft-Eo(e,n),a=n.top+o.scrollTop;return{x:r,y:a}}function Kp(e){let{elements:o,rect:n,offsetParent:r,strategy:a}=e;const i=a==="fixed",l=Ue(r),c=o?ko(o.floating):!1;if(r===l||c&&i)return n;let d={scrollLeft:0,scrollTop:0},u=Ve(1);const p=Ve(0),g=Be(r);if((g||!g&&!i)&&((Dt(r)!=="body"||Ut(l))&&(d=Co(r)),Be(r))){const $=dt(r);u=St(r),p.x=$.x+r.clientLeft,p.y=$.y+r.clientTop}const b=l&&!g&&!i?Fa(l,d):Ve(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-d.scrollLeft*u.x+p.x+b.x,y:n.y*u.y-d.scrollTop*u.y+p.y+b.y}}function Gp(e){return Array.from(e.getClientRects())}function Xp(e){const o=Ue(e),n=Co(e),r=e.ownerDocument.body,a=Ae(o.scrollWidth,o.clientWidth,r.scrollWidth,r.clientWidth),i=Ae(o.scrollHeight,o.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+Eo(e);const c=-n.scrollTop;return Oe(r).direction==="rtl"&&(l+=Ae(o.clientWidth,r.clientWidth)-a),{width:a,height:i,x:l,y:c}}const fr=25;function Zp(e,o){const n=Ie(e),r=Ue(e),a=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,c=0,d=0;if(a){i=a.width,l=a.height;const p=jn();(!p||p&&o==="fixed")&&(c=a.offsetLeft,d=a.offsetTop)}const u=Eo(r);if(u<=0){const p=r.ownerDocument,g=p.body,b=getComputedStyle(g),$=p.compatMode==="CSS1Compat"&&parseFloat(b.marginLeft)+parseFloat(b.marginRight)||0,v=Math.abs(r.clientWidth-g.clientWidth-$);v<=fr&&(i-=v)}else u<=fr&&(i+=u);return{width:i,height:l,x:c,y:d}}const Qp=new Set(["absolute","fixed"]);function Jp(e,o){const n=dt(e,!0,o==="fixed"),r=n.top+e.clientTop,a=n.left+e.clientLeft,i=Be(e)?St(e):Ve(1),l=e.clientWidth*i.x,c=e.clientHeight*i.y,d=a*i.x,u=r*i.y;return{width:l,height:c,x:d,y:u}}function hr(e,o,n){let r;if(o==="viewport")r=Zp(e,n);else if(o==="document")r=Xp(Ue(e));else if(Me(o))r=Jp(o,n);else{const a=_a(e);r={x:o.x-a.x,y:o.y-a.y,width:o.width,height:o.height}}return yo(r)}function Wa(e,o){const n=ot(e);return n===o||!Me(n)||Ct(n)?!1:Oe(n).position==="fixed"||Wa(n,o)}function eg(e,o){const n=o.get(e);if(n)return n;let r=Ft(e,[],!1).filter(c=>Me(c)&&Dt(c)!=="body"),a=null;const i=Oe(e).position==="fixed";let l=i?ot(e):e;for(;Me(l)&&!Ct(l);){const c=Oe(l),d=Nn(l);!d&&c.position==="fixed"&&(a=null),(i?!d&&!a:!d&&c.position==="static"&&!!a&&Qp.has(a.position)||Ut(l)&&!d&&Wa(e,l))?r=r.filter(p=>p!==l):a=c,l=ot(l)}return o.set(e,r),r}function tg(e){let{element:o,boundary:n,rootBoundary:r,strategy:a}=e;const l=[...n==="clippingAncestors"?ko(o)?[]:eg(o,this._c):[].concat(n),r],c=l[0],d=l.reduce((u,p)=>{const g=hr(o,p,a);return u.top=Ae(g.top,u.top),u.right=tt(g.right,u.right),u.bottom=tt(g.bottom,u.bottom),u.left=Ae(g.left,u.left),u},hr(o,c,a));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function og(e){const{width:o,height:n}=Oa(e);return{width:o,height:n}}function ng(e,o,n){const r=Be(o),a=Ue(o),i=n==="fixed",l=dt(e,!0,i,o);let c={scrollLeft:0,scrollTop:0};const d=Ve(0);function u(){d.x=Eo(a)}if(r||!r&&!i)if((Dt(o)!=="body"||Ut(a))&&(c=Co(o)),r){const $=dt(o,!0,i,o);d.x=$.x+o.clientLeft,d.y=$.y+o.clientTop}else a&&u();i&&!r&&a&&u();const p=a&&!r&&!i?Fa(a,c):Ve(0),g=l.left+c.scrollLeft-d.x-p.x,b=l.top+c.scrollTop-d.y-p.y;return{x:g,y:b,width:l.width,height:l.height}}function Bo(e){return Oe(e).position==="static"}function yr(e,o){if(!Be(e)||Oe(e).position==="fixed")return null;if(o)return o(e);let n=e.offsetParent;return Ue(e)===n&&(n=n.ownerDocument.body),n}function Va(e,o){const n=Ie(e);if(ko(e))return n;if(!Be(e)){let a=ot(e);for(;a&&!Ct(a);){if(Me(a)&&!Bo(a))return a;a=ot(a)}return n}let r=yr(e,o);for(;r&&_p(r)&&Bo(r);)r=yr(r,o);return r&&Ct(r)&&Bo(r)&&!Nn(r)?n:r||Hp(e)||n}const rg=async function(e){const o=this.getOffsetParent||Va,n=this.getDimensions,r=await n(e.floating);return{reference:ng(e.reference,await o(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ag(e){return Oe(e).direction==="rtl"}const sg={convertOffsetParentRelativeRectToViewportRelativeRect:Kp,getDocumentElement:Ue,getClippingRect:tg,getOffsetParent:Va,getElementRects:rg,getClientRects:Gp,getDimensions:og,getScale:St,isElement:Me,isRTL:ag};function Ba(e,o){return e.x===o.x&&e.y===o.y&&e.width===o.width&&e.height===o.height}function ig(e,o){let n=null,r;const a=Ue(e);function i(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function l(c,d){c===void 0&&(c=!1),d===void 0&&(d=1),i();const u=e.getBoundingClientRect(),{left:p,top:g,width:b,height:$}=u;if(c||o(),!b||!$)return;const v=to(g),y=to(a.clientWidth-(p+b)),m=to(a.clientHeight-(g+$)),w=to(p),N={rootMargin:-v+"px "+-y+"px "+-m+"px "+-w+"px",threshold:Ae(0,tt(1,d))||1};let j=!0;function f(R){const A=R[0].intersectionRatio;if(A!==d){if(!j)return l();A?l(!1,A):r=setTimeout(()=>{l(!1,1e-7)},1e3)}A===1&&!Ba(u,e.getBoundingClientRect())&&l(),j=!1}try{n=new IntersectionObserver(f,{...N,root:a.ownerDocument})}catch{n=new IntersectionObserver(f,N)}n.observe(e)}return l(!0),i}function lg(e,o,n,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,u=Sn(e),p=a||i?[...u?Ft(u):[],...Ft(o)]:[];p.forEach(w=>{a&&w.addEventListener("scroll",n,{passive:!0}),i&&w.addEventListener("resize",n)});const g=u&&c?ig(u,n):null;let b=-1,$=null;l&&($=new ResizeObserver(w=>{let[h]=w;h&&h.target===u&&$&&($.unobserve(o),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var N;(N=$)==null||N.observe(o)})),n()}),u&&!d&&$.observe(u),$.observe(o));let v,y=d?dt(e):null;d&&m();function m(){const w=dt(e);y&&!Ba(y,w)&&n(),y=w,v=requestAnimationFrame(m)}return n(),()=>{var w;p.forEach(h=>{a&&h.removeEventListener("scroll",n),i&&h.removeEventListener("resize",n)}),g==null||g(),(w=$)==null||w.disconnect(),$=null,d&&cancelAnimationFrame(v)}}const cg=zp,dg=Dp,ug=Ap,pg=Lp,gg=Ip,xr=Tp,mg=Pp,fg=(e,o,n)=>{const r=new Map,a={platform:sg,...n},i={...a.platform,_c:r};return Ep(e,o,{...a,platform:i})};var hg=typeof document<"u",yg=function(){},io=hg?s.useLayoutEffect:yg;function xo(e,o){if(e===o)return!0;if(typeof e!=typeof o)return!1;if(typeof e=="function"&&e.toString()===o.toString())return!0;let n,r,a;if(e&&o&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==o.length)return!1;for(r=n;r--!==0;)if(!xo(e[r],o[r]))return!1;return!0}if(a=Object.keys(e),n=a.length,n!==Object.keys(o).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(o,a[r]))return!1;for(r=n;r--!==0;){const i=a[r];if(!(i==="_owner"&&e.$$typeof)&&!xo(e[i],o[i]))return!1}return!0}return e!==e&&o!==o}function Ha(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function br(e,o){const n=Ha(e);return Math.round(o*n)/n}function Ho(e){const o=s.useRef(e);return io(()=>{o.current=e}),o}function xg(e){e===void 0&&(e={});const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:a,elements:{reference:i,floating:l}={},transform:c=!0,whileElementsMounted:d,open:u}=e,[p,g]=s.useState({x:0,y:0,strategy:n,placement:o,middlewareData:{},isPositioned:!1}),[b,$]=s.useState(r);xo(b,r)||$(r);const[v,y]=s.useState(null),[m,w]=s.useState(null),h=s.useCallback(D=>{D!==R.current&&(R.current=D,y(D))},[]),N=s.useCallback(D=>{D!==A.current&&(A.current=D,w(D))},[]),j=i||v,f=l||m,R=s.useRef(null),A=s.useRef(null),E=s.useRef(p),I=d!=null,S=Ho(d),O=Ho(a),k=Ho(u),P=s.useCallback(()=>{if(!R.current||!A.current)return;const D={placement:o,strategy:n,middleware:b};O.current&&(D.platform=O.current),fg(R.current,A.current,D).then(Q=>{const fe={...Q,isPositioned:k.current!==!1};C.current&&!xo(E.current,fe)&&(E.current=fe,Vt.flushSync(()=>{g(fe)}))})},[b,o,n,O,k]);io(()=>{u===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,g(D=>({...D,isPositioned:!1})))},[u]);const C=s.useRef(!1);io(()=>(C.current=!0,()=>{C.current=!1}),[]),io(()=>{if(j&&(R.current=j),f&&(A.current=f),j&&f){if(S.current)return S.current(j,f,P);P()}},[j,f,P,S,I]);const F=s.useMemo(()=>({reference:R,floating:A,setReference:h,setFloating:N}),[h,N]),_=s.useMemo(()=>({reference:j,floating:f}),[j,f]),Y=s.useMemo(()=>{const D={position:n,left:0,top:0};if(!_.floating)return D;const Q=br(_.floating,p.x),fe=br(_.floating,p.y);return c?{...D,transform:"translate("+Q+"px, "+fe+"px)",...Ha(_.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:Q,top:fe}},[n,c,_.floating,p.x,p.y]);return s.useMemo(()=>({...p,update:P,refs:F,elements:_,floatingStyles:Y}),[p,P,F,_,Y])}const bg=e=>{function o(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:a}=typeof e=="function"?e(n):e;return r&&o(r)?r.current!=null?xr({element:r.current,padding:a}).fn(n):{}:r?xr({element:r,padding:a}).fn(n):{}}}},vg=(e,o)=>({...cg(e),options:[e,o]}),wg=(e,o)=>({...dg(e),options:[e,o]}),$g=(e,o)=>({...mg(e),options:[e,o]}),Ng=(e,o)=>({...ug(e),options:[e,o]}),jg=(e,o)=>({...pg(e),options:[e,o]}),Sg=(e,o)=>({...gg(e),options:[e,o]}),kg=(e,o)=>({...bg(e),options:[e,o]});var Cg="Arrow",Ya=s.forwardRef((e,o)=>{const{children:n,width:r=10,height:a=5,...i}=e;return t.jsx(pe.svg,{...i,ref:o,width:r,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:t.jsx("polygon",{points:"0,0 30,0 15,10"})})});Ya.displayName=Cg;var Eg=Ya;function Tg(e){const[o,n]=s.useState(void 0);return Ee(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const i=a[0];let l,c;if("borderBoxSize"in i){const d=i.borderBoxSize,u=Array.isArray(d)?d[0]:d;l=u.inlineSize,c=u.blockSize}else l=e.offsetWidth,c=e.offsetHeight;n({width:l,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),o}var kn="Popper",[Ua,qa]=Ht(kn),[Ag,Ka]=Ua(kn),Ga=e=>{const{__scopePopper:o,children:n}=e,[r,a]=s.useState(null);return t.jsx(Ag,{scope:o,anchor:r,onAnchorChange:a,children:n})};Ga.displayName=kn;var Xa="PopperAnchor",Za=s.forwardRef((e,o)=>{const{__scopePopper:n,virtualRef:r,...a}=e,i=Ka(Xa,n),l=s.useRef(null),c=be(o,l),d=s.useRef(null);return s.useEffect(()=>{const u=d.current;d.current=(r==null?void 0:r.current)||l.current,u!==d.current&&i.onAnchorChange(d.current)}),r?null:t.jsx(pe.div,{...a,ref:c})});Za.displayName=Xa;var Cn="PopperContent",[Ig,Rg]=Ua(Cn),Qa=s.forwardRef((e,o)=>{var z,X,ie,L,K,J;const{__scopePopper:n,side:r="bottom",sideOffset:a=0,align:i="center",alignOffset:l=0,arrowPadding:c=0,avoidCollisions:d=!0,collisionBoundary:u=[],collisionPadding:p=0,sticky:g="partial",hideWhenDetached:b=!1,updatePositionStrategy:$="optimized",onPlaced:v,...y}=e,m=Ka(Cn,n),[w,h]=s.useState(null),N=be(o,je=>h(je)),[j,f]=s.useState(null),R=Tg(j),A=(R==null?void 0:R.width)??0,E=(R==null?void 0:R.height)??0,I=r+(i!=="center"?"-"+i:""),S=typeof p=="number"?p:{top:0,right:0,bottom:0,left:0,...p},O=Array.isArray(u)?u:[u],k=O.length>0,P={padding:S,boundary:O.filter(Dg),altBoundary:k},{refs:C,floatingStyles:F,placement:_,isPositioned:Y,middlewareData:D}=xg({strategy:"fixed",placement:I,whileElementsMounted:(...je)=>lg(...je,{animationFrame:$==="always"}),elements:{reference:m.anchor},middleware:[vg({mainAxis:a+E,alignmentAxis:l}),d&&wg({mainAxis:!0,crossAxis:!1,limiter:g==="partial"?$g():void 0,...P}),d&&Ng({...P}),jg({...P,apply:({elements:je,rects:T,availableWidth:ee,availableHeight:Ne})=>{const{width:ge,height:ze}=T.reference,Te=je.floating.style;Te.setProperty("--radix-popper-available-width",`${ee}px`),Te.setProperty("--radix-popper-available-height",`${Ne}px`),Te.setProperty("--radix-popper-anchor-width",`${ge}px`),Te.setProperty("--radix-popper-anchor-height",`${ze}px`)}}),j&&kg({element:j,padding:c}),Pg({arrowWidth:A,arrowHeight:E}),b&&Sg({strategy:"referenceHidden",...P})]}),[Q,fe]=ts(_),ae=Le(v);Ee(()=>{Y&&(ae==null||ae())},[Y,ae]);const ue=(z=D.arrow)==null?void 0:z.x,se=(X=D.arrow)==null?void 0:X.y,x=((ie=D.arrow)==null?void 0:ie.centerOffset)!==0,[W,M]=s.useState();return Ee(()=>{w&&M(window.getComputedStyle(w).zIndex)},[w]),t.jsx("div",{ref:C.setFloating,"data-radix-popper-content-wrapper":"",style:{...F,transform:Y?F.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:W,"--radix-popper-transform-origin":[(L=D.transformOrigin)==null?void 0:L.x,(K=D.transformOrigin)==null?void 0:K.y].join(" "),...((J=D.hide)==null?void 0:J.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:t.jsx(Ig,{scope:n,placedSide:Q,onArrowChange:f,arrowX:ue,arrowY:se,shouldHideArrow:x,children:t.jsx(pe.div,{"data-side":Q,"data-align":fe,...y,ref:N,style:{...y.style,animation:Y?void 0:"none"}})})})});Qa.displayName=Cn;var Ja="PopperArrow",zg={top:"bottom",right:"left",bottom:"top",left:"right"},es=s.forwardRef(function(o,n){const{__scopePopper:r,...a}=o,i=Rg(Ja,r),l=zg[i.placedSide];return t.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[l]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:t.jsx(Eg,{...a,ref:n,style:{...a.style,display:"block"}})})});es.displayName=Ja;function Dg(e){return e!==null}var Pg=e=>({name:"transformOrigin",options:e,fn(o){var m,w,h;const{placement:n,rects:r,middlewareData:a}=o,l=((m=a.arrow)==null?void 0:m.centerOffset)!==0,c=l?0:e.arrowWidth,d=l?0:e.arrowHeight,[u,p]=ts(n),g={start:"0%",center:"50%",end:"100%"}[p],b=(((w=a.arrow)==null?void 0:w.x)??0)+c/2,$=(((h=a.arrow)==null?void 0:h.y)??0)+d/2;let v="",y="";return u==="bottom"?(v=l?g:`${b}px`,y=`${-d}px`):u==="top"?(v=l?g:`${b}px`,y=`${r.floating.height+d}px`):u==="right"?(v=`${-d}px`,y=l?g:`${$}px`):u==="left"&&(v=`${r.floating.width+d}px`,y=l?g:`${$}px`),{data:{x:v,y}}}});function ts(e){const[o,n="center"]=e.split("-");return[o,n]}var Lg=Ga,Mg=Za,Og=Qa,_g=es;function Fg(e){const o=Wg(e),n=s.forwardRef((r,a)=>{const{children:i,...l}=r,c=s.Children.toArray(i),d=c.find(Bg);if(d){const u=d.props.children,p=c.map(g=>g===d?s.Children.count(u)>1?s.Children.only(null):s.isValidElement(u)?u.props.children:null:g);return t.jsx(o,{...l,ref:a,children:s.isValidElement(u)?s.cloneElement(u,void 0,p):null})}return t.jsx(o,{...l,ref:a,children:i})});return n.displayName=`${e}.Slot`,n}function Wg(e){const o=s.forwardRef((n,r)=>{const{children:a,...i}=n;if(s.isValidElement(a)){const l=Yg(a),c=Hg(i,a.props);return a.type!==s.Fragment&&(c.ref=r?Tt(r,l):l),s.cloneElement(a,c)}return s.Children.count(a)>1?s.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var Vg=Symbol("radix.slottable");function Bg(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Vg}function Hg(e,o){const n={...o};for(const r in o){const a=e[r],i=o[r];/^on[A-Z]/.test(r)?a&&i?n[r]=(...c)=>{const d=i(...c);return a(...c),d}:a&&(n[r]=a):r==="style"?n[r]={...a,...i}:r==="className"&&(n[r]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function Yg(e){var r,a;let o=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=o&&"isReactWarning"in o&&o.isReactWarning;return n?e.ref:(o=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=o&&"isReactWarning"in o&&o.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Ug(e){const o=s.useRef({value:e,previous:e});return s.useMemo(()=>(o.current.value!==e&&(o.current.previous=o.current.value,o.current.value=e),o.current.previous),[e])}var os=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),qg="VisuallyHidden",En=s.forwardRef((e,o)=>t.jsx(pe.span,{...e,ref:o,style:{...os,...e.style}}));En.displayName=qg;var Kg=[" ","Enter","ArrowUp","ArrowDown"],Gg=[" ","Enter"],ut="Select",[To,Ao,Xg]=za(ut),[Pt]=Ht(ut,[Xg,qa]),Io=qa(),[Zg,nt]=Pt(ut),[Qg,Jg]=Pt(ut),ns=e=>{const{__scopeSelect:o,children:n,open:r,defaultOpen:a,onOpenChange:i,value:l,defaultValue:c,onValueChange:d,dir:u,name:p,autoComplete:g,disabled:b,required:$,form:v}=e,y=Io(o),[m,w]=s.useState(null),[h,N]=s.useState(null),[j,f]=s.useState(!1),R=hp(u),[A,E]=go({prop:r,defaultProp:a??!1,onChange:i,caller:ut}),[I,S]=go({prop:l,defaultProp:c,onChange:d,caller:ut}),O=s.useRef(null),k=m?v||!!m.closest("form"):!0,[P,C]=s.useState(new Set),F=Array.from(P).map(_=>_.props.value).join(";");return t.jsx(Lg,{...y,children:t.jsxs(Zg,{required:$,scope:o,trigger:m,onTriggerChange:w,valueNode:h,onValueNodeChange:N,valueNodeHasChildren:j,onValueNodeHasChildrenChange:f,contentId:Nt(),value:I,onValueChange:S,open:A,onOpenChange:E,dir:R,triggerPointerDownPosRef:O,disabled:b,children:[t.jsx(To.Provider,{scope:o,children:t.jsx(Qg,{scope:e.__scopeSelect,onNativeOptionAdd:s.useCallback(_=>{C(Y=>new Set(Y).add(_))},[]),onNativeOptionRemove:s.useCallback(_=>{C(Y=>{const D=new Set(Y);return D.delete(_),D})},[]),children:n})}),k?t.jsxs(Cs,{"aria-hidden":!0,required:$,tabIndex:-1,name:p,autoComplete:g,value:I,onChange:_=>S(_.target.value),disabled:b,form:v,children:[I===void 0?t.jsx("option",{value:""}):null,Array.from(P)]},F):null]})})};ns.displayName=ut;var rs="SelectTrigger",as=s.forwardRef((e,o)=>{const{__scopeSelect:n,disabled:r=!1,...a}=e,i=Io(n),l=nt(rs,n),c=l.disabled||r,d=be(o,l.onTriggerChange),u=Ao(n),p=s.useRef("touch"),[g,b,$]=Ts(y=>{const m=u().filter(N=>!N.disabled),w=m.find(N=>N.value===l.value),h=As(m,y,w);h!==void 0&&l.onValueChange(h.value)}),v=y=>{c||(l.onOpenChange(!0),$()),y&&(l.triggerPointerDownPosRef.current={x:Math.round(y.pageX),y:Math.round(y.pageY)})};return t.jsx(Mg,{asChild:!0,...i,children:t.jsx(pe.button,{type:"button",role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":Es(l.value)?"":void 0,...a,ref:d,onClick:ce(a.onClick,y=>{y.currentTarget.focus(),p.current!=="mouse"&&v(y)}),onPointerDown:ce(a.onPointerDown,y=>{p.current=y.pointerType;const m=y.target;m.hasPointerCapture(y.pointerId)&&m.releasePointerCapture(y.pointerId),y.button===0&&y.ctrlKey===!1&&y.pointerType==="mouse"&&(v(y),y.preventDefault())}),onKeyDown:ce(a.onKeyDown,y=>{const m=g.current!=="";!(y.ctrlKey||y.altKey||y.metaKey)&&y.key.length===1&&b(y.key),!(m&&y.key===" ")&&Kg.includes(y.key)&&(v(),y.preventDefault())})})})});as.displayName=rs;var ss="SelectValue",is=s.forwardRef((e,o)=>{const{__scopeSelect:n,className:r,style:a,children:i,placeholder:l="",...c}=e,d=nt(ss,n),{onValueNodeHasChildrenChange:u}=d,p=i!==void 0,g=be(o,d.onValueNodeChange);return Ee(()=>{u(p)},[u,p]),t.jsx(pe.span,{...c,ref:g,style:{pointerEvents:"none"},children:Es(d.value)?t.jsx(t.Fragment,{children:l}):i})});is.displayName=ss;var em="SelectIcon",ls=s.forwardRef((e,o)=>{const{__scopeSelect:n,children:r,...a}=e;return t.jsx(pe.span,{"aria-hidden":!0,...a,ref:o,children:r||"▼"})});ls.displayName=em;var tm="SelectPortal",cs=e=>t.jsx($o,{asChild:!0,...e});cs.displayName=tm;var pt="SelectContent",ds=s.forwardRef((e,o)=>{const n=nt(pt,e.__scopeSelect),[r,a]=s.useState();if(Ee(()=>{a(new DocumentFragment)},[]),!n.open){const i=r;return i?Vt.createPortal(t.jsx(us,{scope:e.__scopeSelect,children:t.jsx(To.Slot,{scope:e.__scopeSelect,children:t.jsx("div",{children:e.children})})}),i):null}return t.jsx(ps,{...e,ref:o})});ds.displayName=pt;var Pe=10,[us,rt]=Pt(pt),om="SelectContentImpl",nm=Fg("SelectContent.RemoveScroll"),ps=s.forwardRef((e,o)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:i,onPointerDownOutside:l,side:c,sideOffset:d,align:u,alignOffset:p,arrowPadding:g,collisionBoundary:b,collisionPadding:$,sticky:v,hideWhenDetached:y,avoidCollisions:m,...w}=e,h=nt(pt,n),[N,j]=s.useState(null),[f,R]=s.useState(null),A=be(o,z=>j(z)),[E,I]=s.useState(null),[S,O]=s.useState(null),k=Ao(n),[P,C]=s.useState(!1),F=s.useRef(!1);s.useEffect(()=>{if(N)return da(N)},[N]),oa();const _=s.useCallback(z=>{const[X,...ie]=k().map(J=>J.ref.current),[L]=ie.slice(-1),K=document.activeElement;for(const J of z)if(J===K||(J==null||J.scrollIntoView({block:"nearest"}),J===X&&f&&(f.scrollTop=0),J===L&&f&&(f.scrollTop=f.scrollHeight),J==null||J.focus(),document.activeElement!==K))return},[k,f]),Y=s.useCallback(()=>_([E,N]),[_,E,N]);s.useEffect(()=>{P&&Y()},[P,Y]);const{onOpenChange:D,triggerPointerDownPosRef:Q}=h;s.useEffect(()=>{if(N){let z={x:0,y:0};const X=L=>{var K,J;z={x:Math.abs(Math.round(L.pageX)-(((K=Q.current)==null?void 0:K.x)??0)),y:Math.abs(Math.round(L.pageY)-(((J=Q.current)==null?void 0:J.y)??0))}},ie=L=>{z.x<=10&&z.y<=10?L.preventDefault():N.contains(L.target)||D(!1),document.removeEventListener("pointermove",X),Q.current=null};return Q.current!==null&&(document.addEventListener("pointermove",X),document.addEventListener("pointerup",ie,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",X),document.removeEventListener("pointerup",ie,{capture:!0})}}},[N,D,Q]),s.useEffect(()=>{const z=()=>D(!1);return window.addEventListener("blur",z),window.addEventListener("resize",z),()=>{window.removeEventListener("blur",z),window.removeEventListener("resize",z)}},[D]);const[fe,ae]=Ts(z=>{const X=k().filter(K=>!K.disabled),ie=X.find(K=>K.ref.current===document.activeElement),L=As(X,z,ie);L&&setTimeout(()=>L.ref.current.focus())}),ue=s.useCallback((z,X,ie)=>{const L=!F.current&&!ie;(h.value!==void 0&&h.value===X||L)&&(I(z),L&&(F.current=!0))},[h.value]),se=s.useCallback(()=>N==null?void 0:N.focus(),[N]),x=s.useCallback((z,X,ie)=>{const L=!F.current&&!ie;(h.value!==void 0&&h.value===X||L)&&O(z)},[h.value]),W=r==="popper"?tn:gs,M=W===tn?{side:c,sideOffset:d,align:u,alignOffset:p,arrowPadding:g,collisionBoundary:b,collisionPadding:$,sticky:v,hideWhenDetached:y,avoidCollisions:m}:{};return t.jsx(us,{scope:n,content:N,viewport:f,onViewportChange:R,itemRefCallback:ue,selectedItem:E,onItemLeave:se,itemTextRefCallback:x,focusSelectedItem:Y,selectedItemText:S,position:r,isPositioned:P,searchRef:fe,children:t.jsx(hn,{as:nm,allowPinchZoom:!0,children:t.jsx(fn,{asChild:!0,trapped:h.open,onMountAutoFocus:z=>{z.preventDefault()},onUnmountAutoFocus:ce(a,z=>{var X;(X=h.trigger)==null||X.focus({preventScroll:!0}),z.preventDefault()}),children:t.jsx(wo,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:z=>z.preventDefault(),onDismiss:()=>h.onOpenChange(!1),children:t.jsx(W,{role:"listbox",id:h.contentId,"data-state":h.open?"open":"closed",dir:h.dir,onContextMenu:z=>z.preventDefault(),...w,...M,onPlaced:()=>C(!0),ref:A,style:{display:"flex",flexDirection:"column",outline:"none",...w.style},onKeyDown:ce(w.onKeyDown,z=>{const X=z.ctrlKey||z.altKey||z.metaKey;if(z.key==="Tab"&&z.preventDefault(),!X&&z.key.length===1&&ae(z.key),["ArrowUp","ArrowDown","Home","End"].includes(z.key)){let L=k().filter(K=>!K.disabled).map(K=>K.ref.current);if(["ArrowUp","End"].includes(z.key)&&(L=L.slice().reverse()),["ArrowUp","ArrowDown"].includes(z.key)){const K=z.target,J=L.indexOf(K);L=L.slice(J+1)}setTimeout(()=>_(L)),z.preventDefault()}})})})})})})});ps.displayName=om;var rm="SelectItemAlignedPosition",gs=s.forwardRef((e,o)=>{const{__scopeSelect:n,onPlaced:r,...a}=e,i=nt(pt,n),l=rt(pt,n),[c,d]=s.useState(null),[u,p]=s.useState(null),g=be(o,A=>p(A)),b=Ao(n),$=s.useRef(!1),v=s.useRef(!0),{viewport:y,selectedItem:m,selectedItemText:w,focusSelectedItem:h}=l,N=s.useCallback(()=>{if(i.trigger&&i.valueNode&&c&&u&&y&&m&&w){const A=i.trigger.getBoundingClientRect(),E=u.getBoundingClientRect(),I=i.valueNode.getBoundingClientRect(),S=w.getBoundingClientRect();if(i.dir!=="rtl"){const K=S.left-E.left,J=I.left-K,je=A.left-J,T=A.width+je,ee=Math.max(T,E.width),Ne=window.innerWidth-Pe,ge=ir(J,[Pe,Math.max(Pe,Ne-ee)]);c.style.minWidth=T+"px",c.style.left=ge+"px"}else{const K=E.right-S.right,J=window.innerWidth-I.right-K,je=window.innerWidth-A.right-J,T=A.width+je,ee=Math.max(T,E.width),Ne=window.innerWidth-Pe,ge=ir(J,[Pe,Math.max(Pe,Ne-ee)]);c.style.minWidth=T+"px",c.style.right=ge+"px"}const O=b(),k=window.innerHeight-Pe*2,P=y.scrollHeight,C=window.getComputedStyle(u),F=parseInt(C.borderTopWidth,10),_=parseInt(C.paddingTop,10),Y=parseInt(C.borderBottomWidth,10),D=parseInt(C.paddingBottom,10),Q=F+_+P+D+Y,fe=Math.min(m.offsetHeight*5,Q),ae=window.getComputedStyle(y),ue=parseInt(ae.paddingTop,10),se=parseInt(ae.paddingBottom,10),x=A.top+A.height/2-Pe,W=k-x,M=m.offsetHeight/2,z=m.offsetTop+M,X=F+_+z,ie=Q-X;if(X<=x){const K=O.length>0&&m===O[O.length-1].ref.current;c.style.bottom="0px";const J=u.clientHeight-y.offsetTop-y.offsetHeight,je=Math.max(W,M+(K?se:0)+J+Y),T=X+je;c.style.height=T+"px"}else{const K=O.length>0&&m===O[0].ref.current;c.style.top="0px";const je=Math.max(x,F+y.offsetTop+(K?ue:0)+M)+ie;c.style.height=je+"px",y.scrollTop=X-x+y.offsetTop}c.style.margin=`${Pe}px 0`,c.style.minHeight=fe+"px",c.style.maxHeight=k+"px",r==null||r(),requestAnimationFrame(()=>$.current=!0)}},[b,i.trigger,i.valueNode,c,u,y,m,w,i.dir,r]);Ee(()=>N(),[N]);const[j,f]=s.useState();Ee(()=>{u&&f(window.getComputedStyle(u).zIndex)},[u]);const R=s.useCallback(A=>{A&&v.current===!0&&(N(),h==null||h(),v.current=!1)},[N,h]);return t.jsx(sm,{scope:n,contentWrapper:c,shouldExpandOnScrollRef:$,onScrollButtonChange:R,children:t.jsx("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:j},children:t.jsx(pe.div,{...a,ref:g,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});gs.displayName=rm;var am="SelectPopperPosition",tn=s.forwardRef((e,o)=>{const{__scopeSelect:n,align:r="start",collisionPadding:a=Pe,...i}=e,l=Io(n);return t.jsx(Og,{...l,...i,ref:o,align:r,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});tn.displayName=am;var[sm,Tn]=Pt(pt,{}),on="SelectViewport",ms=s.forwardRef((e,o)=>{const{__scopeSelect:n,nonce:r,...a}=e,i=rt(on,n),l=Tn(on,n),c=be(o,i.onViewportChange),d=s.useRef(0);return t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),t.jsx(To.Slot,{scope:n,children:t.jsx(pe.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:c,style:{position:"relative",flex:1,overflow:"hidden auto",...a.style},onScroll:ce(a.onScroll,u=>{const p=u.currentTarget,{contentWrapper:g,shouldExpandOnScrollRef:b}=l;if(b!=null&&b.current&&g){const $=Math.abs(d.current-p.scrollTop);if($>0){const v=window.innerHeight-Pe*2,y=parseFloat(g.style.minHeight),m=parseFloat(g.style.height),w=Math.max(y,m);if(w<v){const h=w+$,N=Math.min(v,h),j=h-N;g.style.height=N+"px",g.style.bottom==="0px"&&(p.scrollTop=j>0?j:0,g.style.justifyContent="flex-end")}}}d.current=p.scrollTop})})})]})});ms.displayName=on;var fs="SelectGroup",[im,lm]=Pt(fs),cm=s.forwardRef((e,o)=>{const{__scopeSelect:n,...r}=e,a=Nt();return t.jsx(im,{scope:n,id:a,children:t.jsx(pe.div,{role:"group","aria-labelledby":a,...r,ref:o})})});cm.displayName=fs;var hs="SelectLabel",ys=s.forwardRef((e,o)=>{const{__scopeSelect:n,...r}=e,a=lm(hs,n);return t.jsx(pe.div,{id:a.id,...r,ref:o})});ys.displayName=hs;var bo="SelectItem",[dm,xs]=Pt(bo),bs=s.forwardRef((e,o)=>{const{__scopeSelect:n,value:r,disabled:a=!1,textValue:i,...l}=e,c=nt(bo,n),d=rt(bo,n),u=c.value===r,[p,g]=s.useState(i??""),[b,$]=s.useState(!1),v=be(o,h=>{var N;return(N=d.itemRefCallback)==null?void 0:N.call(d,h,r,a)}),y=Nt(),m=s.useRef("touch"),w=()=>{a||(c.onValueChange(r),c.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return t.jsx(dm,{scope:n,value:r,disabled:a,textId:y,isSelected:u,onItemTextChange:s.useCallback(h=>{g(N=>N||((h==null?void 0:h.textContent)??"").trim())},[]),children:t.jsx(To.ItemSlot,{scope:n,value:r,disabled:a,textValue:p,children:t.jsx(pe.div,{role:"option","aria-labelledby":y,"data-highlighted":b?"":void 0,"aria-selected":u&&b,"data-state":u?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...l,ref:v,onFocus:ce(l.onFocus,()=>$(!0)),onBlur:ce(l.onBlur,()=>$(!1)),onClick:ce(l.onClick,()=>{m.current!=="mouse"&&w()}),onPointerUp:ce(l.onPointerUp,()=>{m.current==="mouse"&&w()}),onPointerDown:ce(l.onPointerDown,h=>{m.current=h.pointerType}),onPointerMove:ce(l.onPointerMove,h=>{var N;m.current=h.pointerType,a?(N=d.onItemLeave)==null||N.call(d):m.current==="mouse"&&h.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ce(l.onPointerLeave,h=>{var N;h.currentTarget===document.activeElement&&((N=d.onItemLeave)==null||N.call(d))}),onKeyDown:ce(l.onKeyDown,h=>{var j;((j=d.searchRef)==null?void 0:j.current)!==""&&h.key===" "||(Gg.includes(h.key)&&w(),h.key===" "&&h.preventDefault())})})})})});bs.displayName=bo;var Mt="SelectItemText",vs=s.forwardRef((e,o)=>{const{__scopeSelect:n,className:r,style:a,...i}=e,l=nt(Mt,n),c=rt(Mt,n),d=xs(Mt,n),u=Jg(Mt,n),[p,g]=s.useState(null),b=be(o,w=>g(w),d.onItemTextChange,w=>{var h;return(h=c.itemTextRefCallback)==null?void 0:h.call(c,w,d.value,d.disabled)}),$=p==null?void 0:p.textContent,v=s.useMemo(()=>t.jsx("option",{value:d.value,disabled:d.disabled,children:$},d.value),[d.disabled,d.value,$]),{onNativeOptionAdd:y,onNativeOptionRemove:m}=u;return Ee(()=>(y(v),()=>m(v)),[y,m,v]),t.jsxs(t.Fragment,{children:[t.jsx(pe.span,{id:d.textId,...i,ref:b}),d.isSelected&&l.valueNode&&!l.valueNodeHasChildren?Vt.createPortal(i.children,l.valueNode):null]})});vs.displayName=Mt;var ws="SelectItemIndicator",$s=s.forwardRef((e,o)=>{const{__scopeSelect:n,...r}=e;return xs(ws,n).isSelected?t.jsx(pe.span,{"aria-hidden":!0,...r,ref:o}):null});$s.displayName=ws;var nn="SelectScrollUpButton",Ns=s.forwardRef((e,o)=>{const n=rt(nn,e.__scopeSelect),r=Tn(nn,e.__scopeSelect),[a,i]=s.useState(!1),l=be(o,r.onScrollButtonChange);return Ee(()=>{if(n.viewport&&n.isPositioned){let c=function(){const u=d.scrollTop>0;i(u)};const d=n.viewport;return c(),d.addEventListener("scroll",c),()=>d.removeEventListener("scroll",c)}},[n.viewport,n.isPositioned]),a?t.jsx(Ss,{...e,ref:l,onAutoScroll:()=>{const{viewport:c,selectedItem:d}=n;c&&d&&(c.scrollTop=c.scrollTop-d.offsetHeight)}}):null});Ns.displayName=nn;var rn="SelectScrollDownButton",js=s.forwardRef((e,o)=>{const n=rt(rn,e.__scopeSelect),r=Tn(rn,e.__scopeSelect),[a,i]=s.useState(!1),l=be(o,r.onScrollButtonChange);return Ee(()=>{if(n.viewport&&n.isPositioned){let c=function(){const u=d.scrollHeight-d.clientHeight,p=Math.ceil(d.scrollTop)<u;i(p)};const d=n.viewport;return c(),d.addEventListener("scroll",c),()=>d.removeEventListener("scroll",c)}},[n.viewport,n.isPositioned]),a?t.jsx(Ss,{...e,ref:l,onAutoScroll:()=>{const{viewport:c,selectedItem:d}=n;c&&d&&(c.scrollTop=c.scrollTop+d.offsetHeight)}}):null});js.displayName=rn;var Ss=s.forwardRef((e,o)=>{const{__scopeSelect:n,onAutoScroll:r,...a}=e,i=rt("SelectScrollButton",n),l=s.useRef(null),c=Ao(n),d=s.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return s.useEffect(()=>()=>d(),[d]),Ee(()=>{var p;const u=c().find(g=>g.ref.current===document.activeElement);(p=u==null?void 0:u.ref.current)==null||p.scrollIntoView({block:"nearest"})},[c]),t.jsx(pe.div,{"aria-hidden":!0,...a,ref:o,style:{flexShrink:0,...a.style},onPointerDown:ce(a.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(r,50))}),onPointerMove:ce(a.onPointerMove,()=>{var u;(u=i.onItemLeave)==null||u.call(i),l.current===null&&(l.current=window.setInterval(r,50))}),onPointerLeave:ce(a.onPointerLeave,()=>{d()})})}),um="SelectSeparator",ks=s.forwardRef((e,o)=>{const{__scopeSelect:n,...r}=e;return t.jsx(pe.div,{"aria-hidden":!0,...r,ref:o})});ks.displayName=um;var an="SelectArrow",pm=s.forwardRef((e,o)=>{const{__scopeSelect:n,...r}=e,a=Io(n),i=nt(an,n),l=rt(an,n);return i.open&&l.position==="popper"?t.jsx(_g,{...a,...r,ref:o}):null});pm.displayName=an;var gm="SelectBubbleInput",Cs=s.forwardRef(({__scopeSelect:e,value:o,...n},r)=>{const a=s.useRef(null),i=be(r,a),l=Ug(o);return s.useEffect(()=>{const c=a.current;if(!c)return;const d=window.HTMLSelectElement.prototype,p=Object.getOwnPropertyDescriptor(d,"value").set;if(l!==o&&p){const g=new Event("change",{bubbles:!0});p.call(c,o),c.dispatchEvent(g)}},[l,o]),t.jsx(pe.select,{...n,style:{...os,...n.style},ref:i,defaultValue:o})});Cs.displayName=gm;function Es(e){return e===""||e===void 0}function Ts(e){const o=Le(e),n=s.useRef(""),r=s.useRef(0),a=s.useCallback(l=>{const c=n.current+l;o(c),function d(u){n.current=u,window.clearTimeout(r.current),u!==""&&(r.current=window.setTimeout(()=>d(""),1e3))}(c)},[o]),i=s.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return s.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,a,i]}function As(e,o,n){const a=o.length>1&&Array.from(o).every(u=>u===o[0])?o[0]:o,i=n?e.indexOf(n):-1;let l=mm(e,Math.max(i,0));a.length===1&&(l=l.filter(u=>u!==n));const d=l.find(u=>u.textValue.toLowerCase().startsWith(a.toLowerCase()));return d!==n?d:void 0}function mm(e,o){return e.map((n,r)=>e[(o+r)%e.length])}var fm=ns,Is=as,hm=is,ym=ls,xm=cs,Rs=ds,bm=ms,zs=ys,Ds=bs,vm=vs,wm=$s,Ps=Ns,Ls=js,Ms=ks;const we=fm,$e=hm,ye=s.forwardRef(({className:e,children:o,...n},r)=>t.jsxs(Is,{ref:r,className:le("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[o,t.jsx(ym,{asChild:!0,children:t.jsx(un,{className:"h-4 w-4 opacity-50"})})]}));ye.displayName=Is.displayName;const Os=s.forwardRef(({className:e,...o},n)=>t.jsx(Ps,{ref:n,className:le("flex cursor-default items-center justify-center py-1",e),...o,children:t.jsx(zr,{className:"h-4 w-4"})}));Os.displayName=Ps.displayName;const _s=s.forwardRef(({className:e,...o},n)=>t.jsx(Ls,{ref:n,className:le("flex cursor-default items-center justify-center py-1",e),...o,children:t.jsx(un,{className:"h-4 w-4"})}));_s.displayName=Ls.displayName;const xe=s.forwardRef(({className:e,children:o,position:n="popper",...r},a)=>t.jsx(xm,{children:t.jsxs(Rs,{ref:a,className:le("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...r,children:[t.jsx(Os,{}),t.jsx(bm,{className:le("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:o}),t.jsx(_s,{})]})}));xe.displayName=Rs.displayName;const $m=s.forwardRef(({className:e,...o},n)=>t.jsx(zs,{ref:n,className:le("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...o}));$m.displayName=zs.displayName;const Z=s.forwardRef(({className:e,children:o,...n},r)=>t.jsxs(Ds,{ref:r,className:le("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[t.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:t.jsx(wm,{children:t.jsx(Rr,{className:"h-4 w-4"})})}),t.jsx(vm,{children:o})]}));Z.displayName=Ds.displayName;const Nm=s.forwardRef(({className:e,...o},n)=>t.jsx(Ms,{ref:n,className:le("-mx-1 my-1 h-px bg-muted",e),...o}));Nm.displayName=Ms.displayName;const oo=e=>{if(!e)return"";const n=e.replace(/[+-]\d{2}:\d{2}$/,"").replace(/Z$/,"").match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}):\d{2}$/);if(n){const[,u,p]=n;return`${u}T${p}`}const r=new Date(e),a=r.getUTCFullYear(),i=String(r.getUTCMonth()+1).padStart(2,"0"),l=String(r.getUTCDate()).padStart(2,"0"),c=String(r.getUTCHours()).padStart(2,"0"),d=String(r.getUTCMinutes()).padStart(2,"0");return`${a}-${i}-${l}T${c}:${d}`},no=e=>{if(!e){const o=new Date,n=7*60;return new Date(o.getTime()+(n-o.getTimezoneOffset())*6e4).toISOString().slice(0,19)}return`${e}:00`},jm=({open:e,onOpenChange:o,draftData:n,accounts:r,categories:a,onConfirm:i,onCancel:l})=>{var O;const[c,d]=s.useState(null),[u,p]=s.useState(!1),g=s.useRef(null);s.useEffect(()=>{n&&n.draft&&d({...n.draft})},[n]),s.useEffect(()=>{e&&g.current&&setTimeout(()=>{var k;(k=g.current)==null||k.focus()},100)},[e]);const b=async()=>{if(c){p(!0);try{await i(c),o(!1)}catch(k){console.error("Error confirming draft:",k)}finally{p(!1)}}},$=()=>{l&&l(),o(!1)};if(s.useEffect(()=>{const k=P=>{P.key==="Escape"&&e&&!u&&(l?l():o(!1))};if(e)return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[e,u,l,o]),!c||!n)return null;const v=n.draftType==="TRANSACTION",y=n.draftType==="RECEIVABLE",m=n.draftType==="LIABILITY",w=n.draftType==="SETTLEMENT",h=v?c:null,N=y?c:null,j=m?c:null,f=w?c:null,R=(k,P="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:P}).format(k),A=n.needConfirmFields||[],E=n.autoFilledFields||[],I=()=>{switch(n.draftType){case"TRANSACTION":return"Xác nhận giao dịch";case"RECEIVABLE":return"Xác nhận khoản cho vay";case"LIABILITY":return"Xác nhận khoản nợ";case"SETTLEMENT":return(f==null?void 0:f.type)==="RECEIVABLE"?"Xác nhận nhận tiền trả nợ":"Xác nhận trả nợ";default:return"Xác nhận"}},S=()=>v&&h?h.type==="TRANSFER"?!!h.amount&&!!h.fromAccountId&&!!h.toAccountId&&h.fromAccountId!==h.toAccountId:!!h.amount&&!!h.categoryId&&!!h.accountId:y&&N?N.amount&&N.counterpartyName:m&&j?j.amount&&j.counterpartyName:w&&f?f.amount&&f.accountId&&(f.receivableId||f.liabilityId):!1;return t.jsx(Rt,{open:e,onOpenChange:o,children:t.jsxs(gt,{className:"confirm-draft-dialog",style:{maxWidth:"500px"},children:[t.jsxs(mt,{children:[t.jsx(ht,{children:I()}),t.jsx(yt,{children:n.autoFilledFields&&n.autoFilledFields.length>0&&t.jsxs(Sm,{children:[t.jsx(G,{icon:"CheckCircle",size:16,color:"currentColor"}),t.jsxs("span",{children:["Đã tự động điền ",n.autoFilledFields.length," trường"]})]})})]}),t.jsxs(km,{children:[v&&h&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Số tiền"}),t.jsx(oe,{ref:g,type:"number",value:((O=h.amount)==null?void 0:O.toString())||"",onChange:k=>{const P=k.target.value?parseFloat(k.target.value):void 0;v&&h&&d({...h,amount:P})},placeholder:"Nhập số tiền"}),h.amount?t.jsxs("div",{className:"draft-value",children:[R(h.amount,h.currency),E.find(k=>k.field==="amount")&&t.jsx(ke,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(oe,{ref:g,type:"number",value:h.amount||"",onChange:k=>{v&&h&&d({...h,amount:parseFloat(k.target.value)||0})},placeholder:"Nhập số tiền",tabIndex:1})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Loại giao dịch"}),t.jsxs(we,{value:h.type||"EXPENSE",onValueChange:k=>{if(v&&h){const P=k;d({...h,type:P,categoryId:P==="TRANSFER"?void 0:h.categoryId,categoryName:P==="TRANSFER"?void 0:h.categoryName,accountId:P==="TRANSFER"?void 0:h.accountId,accountName:P==="TRANSFER"?void 0:h.accountName})}},children:[t.jsx(ye,{children:t.jsx($e,{})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"EXPENSE",children:"Chi tiêu"}),t.jsx(Z,{value:"INCOME",children:"Thu nhập"}),t.jsx(Z,{value:"TRANSFER",children:"Chuyển khoản"})]})]})]}),h.type==="TRANSFER"?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Tài khoản nguồn ",t.jsx("span",{className:"required",children:"*"})]}),t.jsxs(we,{value:h.fromAccountId||"",onValueChange:k=>{const P=r.find(C=>C.id===k);v&&h&&d({...h,fromAccountId:k,fromAccountName:P==null?void 0:P.name,toAccountId:h.toAccountId===k?void 0:h.toAccountId,toAccountName:h.toAccountId===k?void 0:h.toAccountName})},children:[t.jsx(ye,{children:t.jsx($e,{placeholder:"Chọn tài khoản nguồn"})}),t.jsx(xe,{children:r.map(k=>t.jsx(Z,{value:k.id,children:k.name},k.id))})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Tài khoản đích ",t.jsx("span",{className:"required",children:"*"})]}),t.jsxs(we,{value:h.toAccountId||"",onValueChange:k=>{const P=r.find(C=>C.id===k);v&&h&&d({...h,toAccountId:k,toAccountName:P==null?void 0:P.name})},children:[t.jsx(ye,{children:t.jsx($e,{placeholder:"Chọn tài khoản đích"})}),t.jsx(xe,{children:r.filter(k=>k.id!==h.fromAccountId).map(k=>t.jsx(Z,{value:k.id,children:k.name},k.id))})]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Danh mục ",A.includes("categoryId")&&t.jsx("span",{className:"required",children:"*"})]}),h.categoryId&&h.categoryName?t.jsxs("div",{className:"draft-value",children:[h.categoryName,E.find(k=>k.field==="categoryId")&&t.jsx(ke,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsxs(we,{value:h.categoryId||"",onValueChange:k=>{const P=a.find(C=>C.id===k);v&&h&&d({...h,categoryId:k,categoryName:P==null?void 0:P.name})},children:[t.jsx(ye,{children:t.jsx($e,{placeholder:"Chọn danh mục"})}),t.jsx(xe,{children:a.filter(k=>!k.isSystem||h.type==="EXPENSE"||h.type==="INCOME").map(k=>t.jsx(Z,{value:k.id,children:k.name},k.id))})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Tài khoản ",A.includes("accountId")&&t.jsx("span",{className:"required",children:"*"})]}),h.accountId&&h.accountName?t.jsxs("div",{className:"draft-value",children:[h.accountName,E.find(k=>k.field==="accountId")&&t.jsx(ke,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsxs(we,{value:h.accountId||"",onValueChange:k=>{const P=r.find(C=>C.id===k);v&&h&&d({...h,accountId:k,accountName:P==null?void 0:P.name})},children:[t.jsx(ye,{children:t.jsx($e,{placeholder:"Chọn tài khoản"})}),t.jsx(xe,{children:r.map(k=>t.jsx(Z,{value:k.id,children:k.name},k.id))})]})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Ghi chú"}),t.jsx(oe,{value:h.note||"",onChange:k=>{v&&h&&d({...h,note:k.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Ngày giao dịch"}),t.jsx(oe,{type:"datetime-local",value:oo(h.occurredAt),onChange:k=>{const P=k.target.value?no(k.target.value):new Date().toISOString().slice(0,19);v&&h&&d({...h,occurredAt:P})}})]})]}),y&&N&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Người vay ",A.includes("counterpartyName")&&t.jsx("span",{className:"required",children:"*"})]}),N.counterpartyName?t.jsxs("div",{className:"draft-value",children:[N.counterpartyName,E.find(k=>k.field==="counterpartyName")&&t.jsx(ke,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(oe,{value:N.counterpartyName||"",onChange:k=>{y&&N&&d({...N,counterpartyName:k.target.value})},placeholder:"Nhập tên người vay"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Số tiền ",A.includes("amount")&&t.jsx("span",{className:"required",children:"*"})]}),N.amount?t.jsxs("div",{className:"draft-value",children:[R(N.amount,N.currency),E.find(k=>k.field==="amount")&&t.jsx(ke,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(oe,{type:"number",value:N.amount||"",onChange:k=>{y&&N&&d({...N,amount:parseFloat(k.target.value)||0})},placeholder:"Nhập số tiền"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Ngày cho vay"}),t.jsx(oe,{type:"datetime-local",value:oo(N.occurredAt),onChange:k=>{const P=k.target.value?no(k.target.value):new Date().toISOString().slice(0,19);y&&N&&d({...N,occurredAt:P})}})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Ghi chú"}),t.jsx(oe,{value:N.note||"",onChange:k=>{y&&N&&d({...N,note:k.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]}),m&&j&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Người cho vay ",A.includes("counterpartyName")&&t.jsx("span",{className:"required",children:"*"})]}),j.counterpartyName?t.jsxs("div",{className:"draft-value",children:[j.counterpartyName,E.find(k=>k.field==="counterpartyName")&&t.jsx(ke,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(oe,{value:j.counterpartyName||"",onChange:k=>{m&&j&&d({...j,counterpartyName:k.target.value})},placeholder:"Nhập tên người cho vay"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Số tiền ",A.includes("amount")&&t.jsx("span",{className:"required",children:"*"})]}),j.amount?t.jsxs("div",{className:"draft-value",children:[R(j.amount,j.currency),E.find(k=>k.field==="amount")&&t.jsx(ke,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(oe,{type:"number",value:j.amount||"",onChange:k=>{m&&j&&d({...j,amount:parseFloat(k.target.value)||0})},placeholder:"Nhập số tiền"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Ngày vay"}),t.jsx(oe,{type:"datetime-local",value:oo(j.occurredAt),onChange:k=>{const P=k.target.value?no(k.target.value):new Date().toISOString().slice(0,19);m&&j&&d({...j,occurredAt:P})}})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Ghi chú"}),t.jsx(oe,{value:j.note||"",onChange:k=>{m&&j&&d({...j,note:k.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]}),w&&f&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Loại ",A.includes("type")&&t.jsx("span",{className:"required",children:"*"})]}),t.jsxs(we,{value:f.type||"",onValueChange:k=>{w&&f&&d({...f,type:k,receivableId:k==="RECEIVABLE"?f.receivableId:void 0,liabilityId:k==="LIABILITY"?f.liabilityId:void 0})},children:[t.jsx(ye,{children:t.jsx($e,{placeholder:"Chọn loại"})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"RECEIVABLE",children:"Nhận tiền trả nợ"}),t.jsx(Z,{value:"LIABILITY",children:"Trả nợ"})]})]})]}),f.counterpartyName&&t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Người liên quan"}),t.jsxs("div",{className:"draft-value",children:[f.counterpartyName,E.find(k=>k.field==="receivableId"||k.field==="liabilityId")&&t.jsx(ke,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Số tiền ",A.includes("amount")&&t.jsx("span",{className:"required",children:"*"})]}),f.amount?t.jsxs("div",{className:"draft-value",children:[R(f.amount,f.currency),E.find(k=>k.field==="amount")&&t.jsx(ke,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsx(oe,{type:"number",value:f.amount||"",onChange:k=>{w&&f&&d({...f,amount:parseFloat(k.target.value)||0})},placeholder:"Nhập số tiền"})]}),t.jsxs("div",{className:"draft-field",children:[t.jsxs(U,{children:["Tài khoản ",A.includes("accountId")&&t.jsx("span",{className:"required",children:"*"})]}),f.accountId&&f.accountName?t.jsxs("div",{className:"draft-value",children:[f.accountName,E.find(k=>k.field==="accountId")&&t.jsx(ke,{variant:"secondary",className:"auto-filled-badge",children:"Tự động"})]}):t.jsxs(we,{value:f.accountId||"",onValueChange:k=>{const P=r.find(C=>C.id===k);w&&f&&d({...f,accountId:k,accountName:P==null?void 0:P.name})},children:[t.jsx(ye,{children:t.jsx($e,{placeholder:"Chọn tài khoản"})}),t.jsx(xe,{children:r.map(k=>t.jsx(Z,{value:k.id,children:k.name},k.id))})]})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Ngày thanh toán"}),t.jsx(oe,{type:"datetime-local",value:oo(f.settledAt),onChange:k=>{const P=k.target.value?no(k.target.value):new Date().toISOString().slice(0,19);w&&f&&d({...f,settledAt:P})}})]}),t.jsxs("div",{className:"draft-field",children:[t.jsx(U,{children:"Ghi chú"}),t.jsx(oe,{value:f.note||"",onChange:k=>{w&&f&&d({...f,note:k.target.value})},placeholder:"Nhập ghi chú (tùy chọn)"})]})]})]}),t.jsxs(ft,{children:[t.jsx(H,{variant:"outline",onClick:$,disabled:u,tabIndex:-1,children:"Hủy"}),t.jsx(H,{onClick:b,disabled:u||!S(),tabIndex:-1,children:u?t.jsxs(t.Fragment,{children:[t.jsx(G,{icon:"Loader",size:16,color:"currentColor",className:"animate-spin"}),t.jsx("span",{children:"Đang tạo..."})]}):t.jsx("span",{children:"Xác nhận"})})]})]})})},Sm=me.div`
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
`,km=me.div`
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
`,Cm=1,Em=1e6;let Yo=0;function Tm(){return Yo=(Yo+1)%Number.MAX_SAFE_INTEGER,Yo.toString()}const Uo=new Map,vr=e=>{if(Uo.has(e))return;const o=setTimeout(()=>{Uo.delete(e),Ot({type:"REMOVE_TOAST",toastId:e})},Em);Uo.set(e,o)},Am=(e,o)=>{switch(o.type){case"ADD_TOAST":return{...e,toasts:[o.toast,...e.toasts].slice(0,Cm)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===o.toast.id?{...n,...o.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=o;return n?vr(n):e.toasts.forEach(r=>{vr(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return o.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==o.toastId)}}},lo=[];let co={toasts:[]};function Ot(e){co=Am(co,e),lo.forEach(o=>{o(co)})}function Im({...e}){const o=Tm(),n=a=>Ot({type:"UPDATE_TOAST",toast:{...a,id:o}}),r=()=>Ot({type:"DISMISS_TOAST",toastId:o});return Ot({type:"ADD_TOAST",toast:{...e,id:o,open:!0,onOpenChange:a=>{a||r()}}}),{id:o,dismiss:r,update:n}}function Fs(){const[e,o]=s.useState(co);return s.useEffect(()=>(lo.push(o),()=>{const n=lo.indexOf(o);n>-1&&lo.splice(n,1)}),[e]),{...e,toast:Im,dismiss:n=>Ot({type:"DISMISS_TOAST",toastId:n})}}const wr=()=>{const{t:e}=_e(),{navigate:o}=qe(),{toast:n}=Fs(),r=Ye(),a=te(M=>M.walletAccounts.items),i=te(M=>M.categories.items),l=te(M=>M.walletAccounts.lastFetched),c=te(M=>M.categories.lastFetched),d=te(M=>M.walletAccounts.isLoading),u=te(M=>M.categories.isLoading),[p,g]=s.useState(null),[b,$]=s.useState([]),[v,y]=s.useState(null),[m,w]=s.useState(!1),[h,N]=s.useState(!1),[j,f]=s.useState(!0),[R,A]=s.useState(null),[E,I]=s.useState(!1),[S,O]=s.useState(null),[k,P]=s.useState(!1),[C,F]=s.useState({period:"month"}),_=s.useRef(0),Y=s.useRef(null);s.useEffect(()=>{if(d||u)return;const M=Date.now()-5*60*1e3;(!l||l<M)&&r(et()),(!c||c<M)&&r(kt())},[r,l,c,d,u]),s.useEffect(()=>{const M=async()=>{f(!0);try{const[z,X]=await Promise.all([q.receivables.getAll(0,1e3),q.liabilities.getAll(0,1e3)]),ie=a.reduce((T,ee)=>T+(ee.currentBalance||0),0),L=a.filter(T=>T.type!=="SAVINGS"&&T.type!=="INVESTMENT").reduce((T,ee)=>T+(ee.currentBalance||0),0),K=z.content.reduce((T,ee)=>T+(ee.remainingAmount||0),0),J=X.content.reduce((T,ee)=>T+(ee.remainingAmount||0),0),je=ie+K-J;y({totalAssets:je,currentCash:L,totalReceivables:K,totalLiabilities:J})}catch(z){console.error("Financial overview load error:",z)}finally{f(!1)}};a.length>0&&M()},[a]);const D=s.useMemo(()=>{const M=(L,K=!0)=>{const J=L.getFullYear(),je=String(L.getMonth()+1).padStart(2,"0"),T=String(L.getDate()).padStart(2,"0");return`${J}-${je}-${T}T${K?"00:00:00":"23:59:59"}`};let z,X;const ie=new Date;if(C.period==="30days"){const L=new Date(ie);L.setDate(L.getDate()-30),z=M(L,!0),X=M(ie,!1)}else if(C.period==="month"){const L=new Date(ie.getFullYear(),ie.getMonth(),1);z=M(L,!0),X=M(ie,!1)}else C.period==="custom"&&(C.startDate&&(z=`${C.startDate}T00:00:00`),C.endDate&&(X=`${C.endDate}T23:59:59`));return{startDate:z,endDate:X}},[C]);s.useEffect(()=>{(async()=>{_.current=window.scrollY||document.documentElement.scrollTop,w(!0),A(null);try{const z=await q.reports.getDashboard(C.period==="month"?"month":"day",D.startDate,D.endDate);g(z)}catch(z){A(de(z)),console.error("Dashboard report load error:",z)}finally{w(!1),requestAnimationFrame(()=>{window.scrollTo(0,_.current)})}})()},[C.period,D.startDate,D.endDate]),s.useEffect(()=>{(async()=>{N(!0);try{const z=await q.transactions.getAll({page:0,size:5,sortBy:"occurredAt",sortOrder:"desc",startDate:D.startDate,endDate:D.endDate});$(z.content)}catch(z){console.error("Transactions load error:",z)}finally{N(!1)}})()},[D.startDate,D.endDate]);const Q=s.useCallback((M,z="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:z}).format(M),[]),fe=s.useCallback(M=>new Date(M).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),[]),ae=s.useCallback(M=>{_.current=window.scrollY||document.documentElement.scrollTop,F({period:M})},[]),ue=s.useCallback((M,z)=>{_.current=window.scrollY||document.documentElement.scrollTop,F({period:"custom",startDate:M,endDate:z})},[]),se=s.useCallback(async M=>{I(!0),O(null);try{const z=await q.nlp.parseTransaction(M);O(z),z.responseType==="CONFIRM_DRAFT"&&P(!0)}catch(z){const X=de(z);O({responseType:"ERROR",intent:"UNKNOWN",confidence:0,message:X,data:{code:"PARSE_ERROR",message:X,details:void 0}}),console.error("Error parsing text:",z)}finally{I(!1)}},[]),x=M=>{if(!M){const z=new Date,X=7*60;return new Date(z.getTime()+(X-z.getTimezoneOffset())*6e4).toISOString().slice(0,19)}return M.replace(/[+-]\d{2}:\d{2}$/,"").replace(/Z$/,"").slice(0,19)},W=s.useCallback(async M=>{try{if(!M||typeof M!="object")throw new Error("Invalid draft data");if(!S||S.responseType!=="CONFIRM_DRAFT")throw new Error("Invalid response type");const z=S.data;if(z.draftType==="TRANSACTION"){const L=M;if(!L.amount)throw new Error("Thiếu thông tin bắt buộc: số tiền");const K=x(L.occurredAt);if(L.type==="TRANSFER"){if(!L.fromAccountId||!L.toAccountId)throw new Error("Thiếu thông tin bắt buộc: tài khoản nguồn và đích");if(L.fromAccountId===L.toAccountId)throw new Error("Tài khoản nguồn và đích phải khác nhau");await q.transactions.create({type:"TRANSFER",amount:L.amount,currency:L.currency||"VND",occurredAt:K,fromAccountId:L.fromAccountId,toAccountId:L.toAccountId,note:L.note})}else{if(!L.accountId||!L.categoryId)throw new Error("Thiếu thông tin bắt buộc: tài khoản và danh mục");await q.transactions.create({type:L.type,amount:L.amount,currency:L.currency||"VND",occurredAt:K,categoryId:L.categoryId,accountId:L.accountId,note:L.note})}n({title:"Thành công",description:"Đã tạo giao dịch thành công"})}else if(z.draftType==="RECEIVABLE"){const L=M;if(!L.amount||!L.counterpartyName)throw new Error("Thiếu thông tin bắt buộc: số tiền và tên người vay");const K={counterpartyName:L.counterpartyName,amount:L.amount,currency:L.currency||"VND",occurredAt:x(L.occurredAt),dueAt:L.dueAt?x(L.dueAt):void 0,note:L.note};await q.receivables.create(K),n({title:"Thành công",description:"Đã tạo khoản cho vay thành công"})}else if(z.draftType==="LIABILITY"){const L=M;if(!L.amount||!L.counterpartyName)throw new Error("Thiếu thông tin bắt buộc: số tiền và tên người cho vay");const K={counterpartyName:L.counterpartyName,amount:L.amount,currency:L.currency||"VND",occurredAt:x(L.occurredAt),dueAt:L.dueAt?x(L.dueAt):void 0,note:L.note};await q.liabilities.create(K),n({title:"Thành công",description:"Đã tạo khoản nợ thành công"})}else if(z.draftType==="SETTLEMENT"){const L=M;if(!L.amount||!L.accountId||!L.receivableId&&!L.liabilityId)throw new Error("Thiếu thông tin bắt buộc: số tiền, tài khoản và khoản nợ/khoản cho vay");const K={type:L.type==="RECEIVABLE"?"RECEIVABLE":"LIABILITY",receivableId:L.receivableId,liabilityId:L.liabilityId,amount:L.amount,currency:L.currency||"VND",occurredAt:x(L.settledAt),note:L.note};await q.settlements.create(K),n({title:"Thành công",description:"Đã thanh toán thành công"})}else throw new Error("Unknown draft type");const X=D;C.period&&(async()=>{try{const K=await q.reports.getDashboard(C.period==="month"?"month":"day",X.startDate,X.endDate);g(K)}catch(K){console.error("Error refreshing report:",K)}})(),(async()=>{try{const L=await q.transactions.getAll({page:0,size:5,sortBy:"occurredAt",sortOrder:"desc",startDate:X.startDate,endDate:X.endDate});$(L.content)}catch(L){console.error("Error refreshing transactions:",L)}})(),d||r(et()),u||r(kt()),P(!1),O(null)}catch(z){const X=de(z);throw A(X),z}},[d,u,C,D,r,S,n]);return t.jsxs(Rm,{ref:Y,className:"dashboard-wrapper",children:[t.jsx("h1",{className:"title",children:e("wallet.dashboard.title")}),t.jsxs("section",{className:"section",children:[t.jsx("div",{className:"section-header",children:t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.financialOverview")||"Tổng quan tài chính"})}),j?t.jsx("div",{className:"financial-overview-grid",children:[...Array(4)].map((M,z)=>t.jsx(he,{children:t.jsxs(Ce,{className:"p-6",children:[t.jsx(ve,{className:"h-4 w-24 mb-2"}),t.jsx(ve,{className:"h-8 w-32"})]})},z))}):t.jsxs("div",{className:"financial-overview-grid",children:[t.jsx(he,{children:t.jsxs(Ce,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalAssets")||"Tổng tài sản"}),t.jsx("div",{className:"stat-value",children:v?Q(v.totalAssets,"VND"):"0 ₫"})]})}),t.jsx(he,{children:t.jsxs(Ce,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.currentCash")||"Tiền hiện có"}),t.jsx("div",{className:"stat-value stat-value--positive",children:v?Q(v.currentCash,"VND"):"0 ₫"})]})}),t.jsx(he,{children:t.jsxs(Ce,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalReceivables")||"Khoản cho vay"}),t.jsx("div",{className:"stat-value stat-value--positive",children:v?Q(v.totalReceivables,"VND"):"0 ₫"})]})}),t.jsx(he,{children:t.jsxs(Ce,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalLiabilities")||"Khoản nợ"}),t.jsx("div",{className:"stat-value stat-value--negative",children:v?Q(v.totalLiabilities,"VND"):"0 ₫"})]})})]})]}),t.jsxs("section",{className:"section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.incomeExpense")||"Thu/Chi"}),t.jsxs("div",{className:"filter-controls",children:[t.jsx(H,{variant:C.period==="30days"?"default":"outline",size:"sm",onClick:()=>ae("30days"),children:e("wallet.dashboard.last30Days")||"30 ngày gần nhất"}),t.jsx(H,{variant:C.period==="month"?"default":"outline",size:"sm",onClick:()=>ae("month"),children:e("wallet.dashboard.thisMonth")||"Tháng này"}),t.jsxs("div",{className:"date-range-picker",children:[t.jsx(oe,{type:"date",className:"date-input",value:C.startDate||"",onChange:M=>{M.target.value&&C.endDate?ue(M.target.value,C.endDate):(_.current=window.scrollY||document.documentElement.scrollTop,F(z=>({...z,startDate:M.target.value,period:"custom"})))},placeholder:e("wallet.dashboard.fromDate")||"Từ ngày"}),t.jsx("span",{className:"date-separator",children:"-"}),t.jsx(oe,{type:"date",className:"date-input",value:C.endDate||"",onChange:M=>{M.target.value&&C.startDate?ue(C.startDate,M.target.value):(_.current=window.scrollY||document.documentElement.scrollTop,F(z=>({...z,endDate:M.target.value,period:"custom"})))},placeholder:e("wallet.dashboard.toDate")||"Đến ngày"})]})]})]}),m?t.jsx("div",{className:"stats-grid",children:[...Array(3)].map((M,z)=>t.jsx(he,{children:t.jsxs(Ce,{className:"p-6",children:[t.jsx(ve,{className:"h-4 w-24 mb-2"}),t.jsx(ve,{className:"h-8 w-32"})]})},z))}):t.jsxs("div",{className:"stats-grid",children:[t.jsx(he,{children:t.jsxs(Ce,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalIncome")}),t.jsx("div",{className:"stat-value stat-value--positive",children:p?Q(p.totalIncome??0,"VND"):"0 ₫"})]})}),t.jsx(he,{children:t.jsxs(Ce,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.totalExpense")}),t.jsx("div",{className:"stat-value stat-value--negative",children:p?Q(p.totalExpense??0,"VND"):"0 ₫"})]})}),t.jsx(he,{children:t.jsxs(Ce,{className:"p-6",children:[t.jsx("div",{className:"stat-label",children:e("wallet.dashboard.netSavings")}),t.jsx("div",{className:"stat-value",children:p?Q(p.netSavings??0,"VND"):"0 ₫"})]})})]})]}),t.jsxs("section",{className:"section",children:[t.jsx("div",{className:"section-header",children:t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.addTransaction")||"Thêm giao dịch mới"})}),t.jsx(he,{children:t.jsx(Ce,{className:"p-6",children:t.jsxs("div",{className:"add-transaction-section",children:[t.jsx(vd,{onParse:se,isLoading:E,placeholder:e("wallet.dashboard.commandPlaceholder")||'Nhập lệnh... (ví dụ: "ăn bún 50k", "cho Nam vay 2tr")',error:(S==null?void 0:S.responseType)==="ERROR"?S.message:R||null}),t.jsxs(H,{onClick:()=>o("transactions/add"),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.dashboard.addManualTransaction")||"Thêm giao dịch thủ công"})]})]})})})]}),S&&S.responseType==="CONFIRM_DRAFT"&&t.jsx(jm,{open:k,onOpenChange:P,draftData:S.data,accounts:a,categories:i,onConfirm:W,onCancel:()=>{O(null),P(!1)}}),t.jsxs("section",{className:"section",children:[t.jsx("div",{className:"section-header",children:t.jsx("h2",{className:"section-title",children:e("wallet.dashboard.recentTransactions")})}),t.jsx(he,{children:t.jsx(Ce,{className:"p-6",children:h?t.jsx("div",{className:"transaction-list",children:[...Array(3)].map((M,z)=>t.jsxs("div",{className:"transaction-item",children:[t.jsxs("div",{className:"transaction-info",children:[t.jsx(ve,{className:"h-4 w-24 mb-2"}),t.jsx(ve,{className:"h-3 w-32"})]}),t.jsx(ve,{className:"h-6 w-20"})]},z))}):b.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:e("wallet.dashboard.noTransactions")}),t.jsx(H,{onClick:()=>o("transactions/add"),className:"mt-4",children:e("wallet.dashboard.addFirstTransaction")})]}):t.jsx("div",{className:"transaction-list",children:b.map(M=>{var z,X,ie,L,K;return t.jsx("div",{className:"transaction-card",children:t.jsxs("div",{className:"transaction-main",children:[t.jsxs("div",{className:"transaction-left",children:[t.jsx(ke,{variant:M.type==="EXPENSE"?"destructive":M.type==="INCOME"?"default":"secondary",className:`transaction-type-badge transaction-type-badge--${M.type.toLowerCase()}`,children:M.type==="EXPENSE"?e("wallet.transactions.expense"):M.type==="INCOME"?e("wallet.transactions.income"):e("wallet.transactions.transfer")}),t.jsxs("div",{className:"transaction-info",children:[t.jsx("div",{className:"transaction-category",children:((z=M.category)==null?void 0:z.name)||(M.categoryId?(X=i.find(J=>J.id===M.categoryId))==null?void 0:X.name:null)||M.type}),t.jsxs("div",{className:"transaction-meta",children:[t.jsx("span",{className:"transaction-date",children:fe(M.occurredAt)}),M.type==="TRANSFER"?t.jsxs("span",{className:"transaction-account",children:[M.fromAccountId?((ie=a.find(J=>J.id===M.fromAccountId))==null?void 0:ie.name)||M.fromAccountId:"N/A"," →",M.toAccountId?((L=a.find(J=>J.id===M.toAccountId))==null?void 0:L.name)||M.toAccountId:"N/A"]}):((K=M.account)==null?void 0:K.name)&&t.jsx("span",{className:"transaction-account",children:M.account.name})]}),M.note&&t.jsx("div",{className:"transaction-note",children:M.note})]})]}),t.jsx("div",{className:"transaction-right",children:t.jsx("div",{className:"transaction-amount-wrapper",children:t.jsxs("div",{className:`transaction-amount transaction-amount--${M.type.toLowerCase()}`,children:[M.type==="EXPENSE"?"-":M.type==="INCOME"?"+":"",Q(M.amount,M.currency)]})})})]})},M.id)})})})})]})]})},Rm=me.div`
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
`,$r=e=>e===0||isNaN(e)?"":e.toLocaleString("vi-VN"),zm=e=>{const n=e.replace(/[^\d.,]/g,"").replace(/\./g,"").replace(",","."),r=parseFloat(n);return isNaN(r)?0:r},Et=({value:e,onChange:o,placeholder:n="0",className:r,min:a=0,disabled:i=!1,required:l=!1})=>{const[c,d]=s.useState(""),[u,p]=s.useState(!1);s.useEffect(()=>{u||d(e?$r(e):"")},[e,u]);const g=s.useCallback(v=>{const m=v.target.value.replace(/[^\d.,]/g,"");d(m);const w=zm(m);o(w)},[o]),b=s.useCallback(()=>{p(!0),e&&d(e.toString())},[e]),$=s.useCallback(()=>{p(!1),d(e?$r(e):"")},[e]);return t.jsx(oe,{type:"text",inputMode:"numeric",value:c,onChange:g,onFocus:b,onBlur:$,placeholder:n,className:le("text-right",r),disabled:i,required:l,min:a})},He=s.forwardRef(({className:e,...o},n)=>t.jsx("textarea",{className:le("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...o}));He.displayName="Textarea";function Wt(e){if(!e){const o=new Date,n=o.getFullYear(),r=String(o.getMonth()+1).padStart(2,"0"),a=String(o.getDate()).padStart(2,"0"),i=String(o.getHours()).padStart(2,"0"),l=String(o.getMinutes()).padStart(2,"0");return`${n}-${r}-${a}T${i}:${l}`}try{let o;if(!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)){const c=e.split("T");if(c.length===2){const d=c[0],p=c[1].split(".")[0].split(":"),g=parseInt(d.split("-")[0],10),b=parseInt(d.split("-")[1],10)-1,$=parseInt(d.split("-")[2],10),v=parseInt(p[0]||"0",10),y=parseInt(p[1]||"0",10),m=parseInt(p[2]||"0",10);o=new Date(g,b,$,v,y,m)}else o=new Date(e)}else o=new Date(e);if(isNaN(o.getTime())){const c=new Date,d=c.getFullYear(),u=String(c.getMonth()+1).padStart(2,"0"),p=String(c.getDate()).padStart(2,"0"),g=String(c.getHours()).padStart(2,"0"),b=String(c.getMinutes()).padStart(2,"0");return`${d}-${u}-${p}T${g}:${b}`}const n=o.getFullYear(),r=String(o.getMonth()+1).padStart(2,"0"),a=String(o.getDate()).padStart(2,"0"),i=String(o.getHours()).padStart(2,"0"),l=String(o.getMinutes()).padStart(2,"0");return`${n}-${r}-${a}T${i}:${l}`}catch(o){console.error("Error formatting datetime for datetime-local:",o);const n=new Date,r=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),l=String(n.getHours()).padStart(2,"0"),c=String(n.getMinutes()).padStart(2,"0");return`${r}-${a}-${i}T${l}:${c}`}}function An(e){if(!e){const o=new Date,n=o.getFullYear(),r=String(o.getMonth()+1).padStart(2,"0"),a=String(o.getDate()).padStart(2,"0"),i=String(o.getHours()).padStart(2,"0"),l=String(o.getMinutes()).padStart(2,"0"),c=String(o.getSeconds()).padStart(2,"0");return`${n}-${r}-${a}T${i}:${l}:${c}`}try{let o=e;if(!o.includes(":")){console.error("Invalid datetime-local format:",e);const r=new Date,a=r.getFullYear(),i=String(r.getMonth()+1).padStart(2,"0"),l=String(r.getDate()).padStart(2,"0"),c=String(r.getHours()).padStart(2,"0"),d=String(r.getMinutes()).padStart(2,"0"),u=String(r.getSeconds()).padStart(2,"0");return`${a}-${i}-${l}T${c}:${d}:${u}`}const n=o.split("T");if(n.length===2){const r=n[1],a=r.split(":");if(a.length===2)o=`${n[0]}T${r}:00`;else if(a.length===3)o=o;else{console.error("Invalid time format in datetime-local:",e);const i=new Date,l=i.getFullYear(),c=String(i.getMonth()+1).padStart(2,"0"),d=String(i.getDate()).padStart(2,"0"),u=String(i.getHours()).padStart(2,"0"),p=String(i.getMinutes()).padStart(2,"0"),g=String(i.getSeconds()).padStart(2,"0");return`${l}-${c}-${d}T${u}:${p}:${g}`}}return o}catch(o){console.error("Error converting datetime-local to ISO:",o);const n=new Date,r=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),l=String(n.getHours()).padStart(2,"0"),c=String(n.getMinutes()).padStart(2,"0"),d=String(n.getSeconds()).padStart(2,"0");return`${r}-${a}-${i}T${l}:${c}:${d}`}}const Dm=({transactionId:e,isOpen:o,onClose:n,onSuccess:r,onDelete:a})=>{const{t:i}=_e(),l=te(E=>E.walletAccounts.items),c=te(E=>E.categories.items),[d,u]=s.useState(null),[p,g]=s.useState(!1),[b,$]=s.useState(!1),[v,y]=s.useState(!1),[m,w]=s.useState(null),[h,N]=s.useState({});s.useEffect(()=>{o&&e?j():(u(null),N({}),w(null),g(!1))},[o,e]);const j=async()=>{if(e){g(!0),w(null);try{const E=await q.transactions.getById(e);u(E),N({type:E.type,amount:E.amount,currency:E.currency,accountId:E.accountId,categoryId:E.categoryId,fromAccountId:E.fromAccountId,toAccountId:E.toAccountId,occurredAt:Wt(E.occurredAt),note:E.note})}catch(E){w(de(E))}finally{g(!1)}}},f=async E=>{E.preventDefault(),w(null),$(!0);try{if(!d)return;if((h.type||d.type)==="TRANSFER"){const S=h.fromAccountId||d.fromAccountId,O=h.toAccountId||d.toAccountId;if(!S||!O)throw new Error("Vui lòng chọn tài khoản nguồn và đích");if(S===O)throw new Error("Tài khoản nguồn và đích phải khác nhau")}const I={...h,occurredAt:h.occurredAt?An(h.occurredAt):void 0};(h.type||d.type)==="TRANSFER"&&(I.accountId=void 0,I.categoryId=void 0),await q.transactions.update(d.id,I),r==null||r(),n()}catch(I){w(de(I))}finally{$(!1)}},R=s.useCallback(async()=>{if(!(!d||!window.confirm(i("wallet.transactions.confirmDelete")||"Bạn có chắc muốn xóa giao dịch này?"))){y(!0),w(null);try{await q.transactions.delete(d.id),a==null||a(),n()}catch(E){w(de(E))}finally{y(!1)}}},[d,a,n,i]),A=(E,I)=>{N(S=>({...S,[E]:I}))};return o?t.jsx(Pm,{className:"modal--open",onClick:n,children:t.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[t.jsxs("div",{className:"modal-header",children:[t.jsx("h2",{className:"modal-title",children:i("wallet.transactions.edit")||"Sửa giao dịch"}),t.jsx("button",{className:"close-button",onClick:n,children:t.jsx(G,{icon:"Close",size:20,color:"currentColor"})})]}),p?t.jsx("div",{className:"loading-state",children:i("wallet.common.loading")}):d?t.jsxs("form",{className:"form",onSubmit:f,children:[m&&t.jsx("div",{className:"error-message",children:m}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[i("wallet.transactions.type")," *"]}),t.jsxs("select",{className:"select",value:h.type||d.type,onChange:E=>A("type",E.target.value),required:!0,children:[t.jsx("option",{value:"EXPENSE",children:i("wallet.transactions.expense")}),t.jsx("option",{value:"INCOME",children:i("wallet.transactions.income")}),t.jsx("option",{value:"TRANSFER",children:i("wallet.transactions.transfer")})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[i("wallet.transactions.amount")||"Số tiền"," *"]}),t.jsx(Et,{className:"input",value:h.amount??d.amount,onChange:E=>A("amount",E),required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:i("wallet.transactions.currency")||"Tiền tệ"}),t.jsxs("select",{className:"select",value:h.currency||d.currency,onChange:E=>A("currency",E.target.value),children:[t.jsx("option",{value:"VND",children:"VND (₫)"}),t.jsx("option",{value:"USD",children:"USD ($)"}),t.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),(h.type||d.type)==="TRANSFER"?t.jsxs("div",{className:"transfer-fields",children:[t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[i("wallet.transactions.fromAccount")||"Tài khoản nguồn"," *"]}),t.jsxs("select",{className:"select",value:h.fromAccountId||d.fromAccountId||"",onChange:E=>A("fromAccountId",E.target.value),required:!0,children:[t.jsx("option",{value:"",children:i("wallet.transactions.selectFromAccount")||"Chọn tài khoản nguồn"}),l.map(E=>t.jsxs("option",{value:E.id,children:[E.name," (",E.type,")"]},E.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[i("wallet.transactions.toAccount")||"Tài khoản đích"," *"]}),t.jsxs("select",{className:"select",value:h.toAccountId||d.toAccountId||"",onChange:E=>A("toAccountId",E.target.value),required:!0,children:[t.jsx("option",{value:"",children:i("wallet.transactions.selectToAccount")||"Chọn tài khoản đích"}),l.filter(E=>E.id!==(h.fromAccountId||d.fromAccountId)).map(E=>t.jsxs("option",{value:E.id,children:[E.name," (",E.type,")"]},E.id))]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsxs("label",{className:"label",children:[i("wallet.accounts.title")," *"]}),t.jsx("select",{className:"select",value:h.accountId||d.accountId,onChange:E=>A("accountId",E.target.value),required:!0,children:l.map(E=>t.jsxs("option",{value:E.id,children:[E.name," (",E.type,")"]},E.id))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:i("wallet.categories.title")}),t.jsxs("select",{className:"select",value:h.categoryId||d.categoryId||"",onChange:E=>A("categoryId",E.target.value||void 0),children:[t.jsx("option",{value:"",children:i("wallet.transactions.noCategory")||"Không có"}),c.map(E=>t.jsx("option",{value:E.id,children:E.name},E.id))]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:i("wallet.transactions.date")||"Ngày và giờ giao dịch"}),t.jsx("input",{className:"input",type:"datetime-local",value:h.occurredAt||Wt(d.occurredAt),onChange:E=>A("occurredAt",E.target.value)})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:i("wallet.transactions.note")||"Ghi chú"}),t.jsx(He,{value:h.note||d.note||"",onChange:E=>A("note",E.target.value||void 0),rows:3})]}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{className:"cancel-button",type:"button",onClick:n,disabled:b||v,children:i("wallet.common.cancel")}),t.jsx("button",{className:`submit-button ${b?"submit-button--loading":""}`,type:"submit",disabled:b||v,children:i(b?"wallet.common.saving":"wallet.common.save")})]}),t.jsxs("button",{className:"delete-button",type:"button",onClick:R,disabled:b||v,children:[t.jsx(G,{icon:v?"Loading":"Delete",size:18,color:"currentColor"}),t.jsx("span",{children:v?i("wallet.common.deleting")||"Đang xóa...":i("wallet.transactions.delete")||"Xóa giao dịch"})]})]}):t.jsx("div",{className:"error-message",children:i("wallet.transactions.notFound")||"Không tìm thấy giao dịch"})]})}):null},Pm=me.div`
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
`,Lm=Bt("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),at=s.forwardRef(({className:e,variant:o,...n},r)=>t.jsx("div",{ref:r,role:"alert",className:le(Lm({variant:o}),e),...n}));at.displayName="Alert";const Mm=s.forwardRef(({className:e,...o},n)=>t.jsx("h5",{ref:n,className:le("mb-1 font-medium leading-none tracking-tight",e),...o}));Mm.displayName="AlertTitle";const st=s.forwardRef(({className:e,...o},n)=>t.jsx("div",{ref:n,className:le("text-sm [&_p]:leading-relaxed",e),...o}));st.displayName="AlertDescription";const Om=()=>{var J,je;const{t:e}=_e(),{navigate:o}=qe(),n=Ye(),r=te(T=>T.walletAccounts.items),a=te(T=>T.categories.items),[i,l]=s.useState([]),[c,d]=s.useState(null),[u,p]=s.useState(!0),[g,b]=s.useState(null),[$,v]=s.useState(!1),[y,m]=s.useState(""),[w,h]=s.useState(null),[N,j]=s.useState(null),[f,R]=s.useState(!1),A=s.useRef(0),E=s.useRef(null),[I,S]=s.useState({page:0,size:20,sortBy:"occurredAt",sortOrder:"desc"}),O=te(T=>T.walletAccounts.lastFetched),k=te(T=>T.categories.lastFetched),P=te(T=>T.walletAccounts.isLoading),C=te(T=>T.categories.isLoading);s.useEffect(()=>{if(P||C)return;const T=Date.now()-5*60*1e3;(!O||O<T)&&n(et()),(!k||k<T)&&n(kt())},[n,O,k,P,C]);const F=s.useMemo(()=>{let T,ee;return I.startDate&&(T=I.startDate.includes("T")?I.startDate:`${I.startDate}T00:00:00`),I.endDate&&(ee=I.endDate.includes("T")?I.endDate:`${I.endDate}T23:59:59`),{startDate:T,endDate:ee}},[I.startDate,I.endDate]),_=s.useRef(!1),Y=s.useRef(""),D=s.useRef(I),Q=s.useRef(F),fe=s.useRef(y);s.useEffect(()=>{D.current=I,Q.current=F,fe.current=y},[I,F,y]);const ae=s.useCallback(async()=>{if(!_.current){A.current=window.scrollY||document.documentElement.scrollTop,_.current=!0,p(!0),b(null);try{const T=D.current,ee=Q.current,Ne=fe.current,ge=await q.transactions.getAll({...T,startDate:ee.startDate,endDate:ee.endDate,keyword:Ne||void 0});l(ge.content),d(ge)}catch(T){b(de(T)),console.error("Transactions load error:",T)}finally{_.current=!1,p(!1),requestAnimationFrame(()=>{window.scrollTo(0,A.current)})}}},[]);s.useEffect(()=>{const T=JSON.stringify({page:I.page,size:I.size,sortBy:I.sortBy,sortOrder:I.sortOrder,type:I.type,categoryId:I.categoryId,accountId:I.accountId,minAmount:I.minAmount,maxAmount:I.maxAmount,keyword:I.keyword,startDate:F.startDate,endDate:F.endDate});Y.current!==T&&(Y.current=T,ae())},[I.page,I.size,I.sortBy,I.sortOrder,I.type,I.categoryId,I.accountId,I.minAmount,I.maxAmount,I.keyword,F.startDate,F.endDate,y]),s.useEffect(()=>{const T=setTimeout(()=>{y!==I.keyword&&S(ee=>({...ee,keyword:y||void 0,page:0}))},500);return()=>clearTimeout(T)},[y]);const ue=s.useCallback((T,ee)=>{A.current=window.scrollY||document.documentElement.scrollTop,S(Ne=>({...Ne,[T]:ee,page:0}))},[]),se=s.useCallback(T=>{if(A.current=window.scrollY||document.documentElement.scrollTop,w===T){h(null),S(ge=>({...ge,startDate:void 0,endDate:void 0,page:0}));return}h(T);const ee=new Date,Ne=(ge,ze=!0)=>{const Te=ge.getFullYear(),De=String(ge.getMonth()+1).padStart(2,"0"),zo=String(ge.getDate()).padStart(2,"0");return`${Te}-${De}-${zo}T${ze?"00:00:00":"23:59:59"}`};if(T==="all")S(ge=>({...ge,startDate:void 0,endDate:void 0,page:0}));else if(T==="30days"){const ge=new Date(ee);ge.setDate(ge.getDate()-30),S(ze=>({...ze,startDate:Ne(ge,!0),endDate:Ne(ee,!1),page:0}))}else if(T==="month"){const ge=new Date(ee.getFullYear(),ee.getMonth(),1);S(ze=>({...ze,startDate:Ne(ge,!0),endDate:Ne(ee,!1),page:0}))}},[w]),x=s.useCallback(T=>{A.current=window.scrollY||document.documentElement.scrollTop,S(ee=>({...ee,page:T}))},[]),W=s.useCallback((T,ee="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:ee}).format(T),[]),M=s.useCallback(T=>{let ee;if(!T.includes("Z")&&!T.match(/[+-]\d{2}:\d{2}$/)){const Ne=T.split("T");if(Ne.length===2){const ge=Ne[0],Te=Ne[1].split(".")[0].split(":"),De=parseInt(ge.split("-")[0],10),zo=parseInt(ge.split("-")[1],10)-1,Dn=parseInt(ge.split("-")[2],10),pi=parseInt(Te[0]||"0",10),gi=parseInt(Te[1]||"0",10),mi=parseInt(Te[2]||"0",10);ee=new Date(De,zo,Dn,pi,gi,mi)}else ee=new Date(T)}else ee=new Date(T);return ee.toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})},[]),z=s.useCallback(T=>{j(T.id),R(!0)},[]),X=s.useCallback(()=>{R(!1),j(null)},[]),ie=s.useCallback(()=>{ae()},[ae]),L=s.useCallback(()=>{ae()},[ae]),K=s.useCallback(async T=>{if(window.confirm(e("wallet.transactions.confirmDelete")||"Bạn có chắc muốn xóa giao dịch này?"))try{await q.transactions.delete(T.id),await ae()}catch(ee){b(de(ee))}},[ae,e]);return t.jsxs(_m,{ref:E,className:"transactions-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:e("wallet.transactions.title")}),t.jsxs(H,{onClick:()=>o("transactions/add"),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.add")})]})]}),g&&t.jsx(at,{variant:"destructive",children:t.jsx(st,{children:g})}),t.jsxs("div",{className:"quick-filters-section",children:[t.jsxs("div",{className:"quick-filters",children:[t.jsx(H,{variant:w==="all"?"default":"outline",size:"sm",onClick:()=>se("all"),children:e("wallet.transactions.all")||"Tất cả"}),t.jsx(H,{variant:w==="30days"?"default":"outline",size:"sm",onClick:()=>se("30days"),children:e("wallet.dashboard.last30Days")||"30 ngày gần nhất"}),t.jsx(H,{variant:w==="month"?"default":"outline",size:"sm",onClick:()=>se("month"),children:e("wallet.dashboard.thisMonth")||"Tháng này"})]}),t.jsxs("div",{className:"search-bar",children:[t.jsx(G,{icon:"Search",size:18,color:"currentColor"}),t.jsx(oe,{type:"text",className:"search-input",placeholder:e("wallet.transactions.searchPlaceholder")||"Tìm kiếm giao dịch...",value:y,onChange:T=>m(T.target.value)}),y&&t.jsx(H,{variant:"ghost",size:"icon",className:"clear-search-button",onClick:()=>m(""),title:e("wallet.common.clear")||"Xóa",children:t.jsx(G,{icon:"Close",size:16,color:"currentColor"})})]}),t.jsxs(H,{variant:"outline",className:"toggle-filters-button",onClick:()=>v(!$),children:[t.jsx(G,{icon:$?"ChevronUp":"ChevronDown",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.filters")||"Bộ lọc"})]})]}),$&&t.jsx(he,{className:"filters-card",children:t.jsx(Ce,{className:"p-6",children:t.jsxs("div",{className:"filters-grid",children:[t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.type")}),t.jsxs(we,{value:I.type||"__all__",onValueChange:T=>ue("type",T==="__all__"?void 0:T),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{placeholder:e("wallet.transactions.all")})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"__all__",children:e("wallet.transactions.all")}),t.jsx(Z,{value:"EXPENSE",children:e("wallet.transactions.expense")}),t.jsx(Z,{value:"INCOME",children:e("wallet.transactions.income")}),t.jsx(Z,{value:"TRANSFER",children:e("wallet.transactions.transfer")})]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.fromDate")}),t.jsx(oe,{className:"input",type:"date",value:((J=I.startDate)==null?void 0:J.split("T")[0])||"",onChange:T=>ue("startDate",T.target.value||void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.toDate")}),t.jsx(oe,{className:"input",type:"date",value:((je=I.endDate)==null?void 0:je.split("T")[0])||"",onChange:T=>ue("endDate",T.target.value||void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.accounts.title")}),t.jsxs(we,{value:I.accountId||"__all__",onValueChange:T=>ue("accountId",T==="__all__"?void 0:T),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{placeholder:e("wallet.transactions.all")})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"__all__",children:e("wallet.transactions.all")}),r.map(T=>t.jsx(Z,{value:T.id,children:T.name},T.id))]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.categories.title")}),t.jsxs(we,{value:I.categoryId||"__all__",onValueChange:T=>ue("categoryId",T==="__all__"?void 0:T),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{placeholder:e("wallet.transactions.all")})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"__all__",children:e("wallet.transactions.all")}),a.map(T=>t.jsx(Z,{value:T.id,children:T.name},T.id))]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.minAmount")||"Tối thiểu"}),t.jsx(oe,{className:"number-input",type:"number",step:"0.01",min:"0",placeholder:"0",value:I.minAmount||"",onChange:T=>ue("minAmount",T.target.value?parseFloat(T.target.value):void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.maxAmount")||"Tối đa"}),t.jsx(oe,{className:"number-input",type:"number",step:"0.01",min:"0",placeholder:"0",value:I.maxAmount||"",onChange:T=>ue("maxAmount",T.target.value?parseFloat(T.target.value):void 0)})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.sortBy")||"Sắp xếp theo"}),t.jsxs(we,{value:I.sortBy||"occurredAt",onValueChange:T=>ue("sortBy",T),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"occurredAt",children:e("wallet.transactions.sortByDate")||"Ngày giao dịch"}),t.jsx(Z,{value:"amount",children:e("wallet.transactions.sortByAmount")||"Số tiền"}),t.jsx(Z,{value:"createdAt",children:e("wallet.transactions.sortByCreated")||"Ngày tạo"})]})]})]}),t.jsxs("div",{className:"filter-group",children:[t.jsx("label",{className:"label",children:e("wallet.transactions.sortOrder")||"Thứ tự"}),t.jsxs(we,{value:I.sortOrder||"desc",onValueChange:T=>ue("sortOrder",T),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"desc",children:e("wallet.transactions.desc")||"Giảm dần"}),t.jsx(Z,{value:"asc",children:e("wallet.transactions.asc")||"Tăng dần"})]})]})]})]})})}),u&&i.length===0?t.jsx("div",{className:"loading-state",children:t.jsx("div",{className:"skeleton-list",children:[...Array(5)].map((T,ee)=>t.jsx(he,{className:"skeleton-card",children:t.jsxs(Ce,{className:"p-6",children:[t.jsx(ve,{className:"h-4 w-32 mb-2"}),t.jsx(ve,{className:"h-6 w-24 mb-2"}),t.jsx(ve,{className:"h-3 w-48"})]})},ee))})}):i.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("div",{className:"empty-icon",children:t.jsx(G,{icon:"FileText",size:48,color:"currentColor"})}),t.jsx("p",{children:e("wallet.transactions.noTransactions")}),t.jsxs(H,{onClick:()=>o("transactions/add"),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.addFirst")||"Thêm giao dịch đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"transaction-list",children:i.map(T=>{var ee,Ne,ge,ze,Te;return t.jsx("div",{className:"transaction-card",onClick:()=>z(T),children:t.jsxs("div",{className:"transaction-main",children:[t.jsxs("div",{className:"transaction-left",children:[t.jsx(ke,{variant:T.type==="EXPENSE"?"destructive":T.type==="INCOME"||T.type==="RECEIVABLE_SETTLEMENT"?"default":T.type==="LIABILITY_SETTLEMENT"?"destructive":"secondary",className:`transaction-type-badge transaction-type-badge--${T.type.toLowerCase().replace("_","-")}`,children:T.type==="EXPENSE"?e("wallet.transactions.expense"):T.type==="INCOME"?e("wallet.transactions.income"):T.type==="TRANSFER"?e("wallet.transactions.transfer"):T.type==="RECEIVABLE_SETTLEMENT"?e("wallet.transactions.receivableSettlement","Thu nợ"):T.type==="LIABILITY_SETTLEMENT"?e("wallet.transactions.liabilitySettlement","Trả nợ"):T.type}),t.jsxs("div",{className:"transaction-info",children:[t.jsx("div",{className:"transaction-category",children:((ee=T.category)==null?void 0:ee.name)||(T.categoryId?(Ne=a.find(De=>De.id===T.categoryId))==null?void 0:Ne.name:null)||(T.type==="EXPENSE"?e("wallet.transactions.expense"):T.type==="INCOME"?e("wallet.transactions.income"):T.type==="TRANSFER"?e("wallet.transactions.transfer"):T.type==="RECEIVABLE_SETTLEMENT"?e("wallet.transactions.receivableSettlement","Thu nợ"):T.type==="LIABILITY_SETTLEMENT"?e("wallet.transactions.liabilitySettlement","Trả nợ"):T.type)}),t.jsxs("div",{className:"transaction-meta",children:[t.jsx("span",{className:"transaction-date",children:M(T.occurredAt)}),T.type==="TRANSFER"?t.jsxs("span",{className:"transaction-account",children:[T.fromAccountId?((ge=r.find(De=>De.id===T.fromAccountId))==null?void 0:ge.name)||T.fromAccountId:"N/A"," →",T.toAccountId?((ze=r.find(De=>De.id===T.toAccountId))==null?void 0:ze.name)||T.toAccountId:"N/A"]}):((Te=T.account)==null?void 0:Te.name)&&t.jsx("span",{className:"transaction-account",children:T.account.name})]}),T.note&&t.jsx("div",{className:"transaction-note",children:T.note})]})]}),t.jsx("div",{className:"transaction-right",children:t.jsxs("div",{className:"transaction-amount-wrapper",children:[t.jsxs("div",{className:`transaction-amount transaction-amount--${T.type.toLowerCase()}`,children:[T.type==="EXPENSE"||T.type==="LIABILITY_SETTLEMENT"?"-":T.type==="INCOME"||T.type==="RECEIVABLE_SETTLEMENT"?"+":"",W(T.amount,T.currency)]}),t.jsxs("div",{className:"transaction-actions",onClick:De=>De.stopPropagation(),children:[t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>z(T),title:e("wallet.common.edit"),children:t.jsx(G,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button icon-button--danger",onClick:()=>K(T),title:e("wallet.common.delete"),children:t.jsx(G,{icon:"Delete",size:16,color:"currentColor"})})]})]})})]})},T.id)})}),c&&c.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsxs(H,{variant:"outline",className:`pagination-button ${c.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>x(c.page-1),disabled:!c.hasPrevious,children:[t.jsx(G,{icon:"ChevronLeft",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.transactions.previous")||"Trước"})]}),t.jsxs("div",{className:"pagination-info",children:[t.jsxs("span",{children:[e("wallet.transactions.page")||"Trang"," ",c.page+1," / ",c.totalPages]}),t.jsxs("span",{className:"pagination-total",children:["(",c.totalElements," ",e("wallet.transactions.items")||"giao dịch",")"]})]}),t.jsxs(H,{variant:"outline",className:`pagination-button ${c.hasNext?"":"pagination-button--disabled"}`,onClick:()=>x(c.page+1),disabled:!c.hasNext,children:[t.jsx("span",{children:e("wallet.transactions.next")||"Sau"}),t.jsx(G,{icon:"ChevronRight",size:18,color:"currentColor"})]})]})]}),t.jsx(Dm,{transactionId:N||"",isOpen:f&&!!N,onClose:X,onSuccess:ie,onDelete:L})]})},_m=me.div`
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
            min-width: 72px;
            text-align: center;

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

            &--receivable-settlement {
              background: ${({theme:e})=>{var o;return(o=e.colors.success)!=null&&o[500]?`${e.colors.success[500]}20`:"#10b98120"}};
              color: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
            }

            &--liability-settlement {
              background: ${({theme:e})=>{var o;return(o=e.colors.warning)!=null&&o[500]?`${e.colors.warning[500]}20`:"#f59e0b20"}};
              color: ${({theme:e})=>{var o;return((o=e.colors.warning)==null?void 0:o[500])||"#f59e0b"}};
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

            &--receivable_settlement {
              color: ${({theme:e})=>{var o;return((o=e.colors.success)==null?void 0:o[500])||"#10b981"}};
            }

            &--liability_settlement {
              color: ${({theme:e})=>{var o;return((o=e.colors.warning)==null?void 0:o[500])||"#f59e0b"}};
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
`,Fm=()=>{const{navigate:e}=qe(),o=Ye(),n=te(f=>f.walletAccounts.items),r=te(f=>f.categories.items),a=te(f=>f.walletAccounts.lastFetched),i=te(f=>f.categories.lastFetched),l=te(f=>f.walletAccounts.isLoading),c=te(f=>f.categories.isLoading),[d,u]=s.useState([]),[p,g]=s.useState([]),[b,$]=s.useState(!1),[v,y]=s.useState(null),[m,w]=s.useState({type:"EXPENSE",amount:0,currency:"VND",accountId:"",occurredAt:Wt(new Date().toISOString())});s.useEffect(()=>{if(l||c)return;const f=Date.now()-5*60*1e3;(!a||a<f)&&o(et()),(!i||i<f)&&o(kt())},[o,a,i,l,c]),s.useEffect(()=>{(async()=>{try{const[R,A]=await Promise.all([q.receivables.getAll(0,100),q.liabilities.getAll(0,100)]);u(R.content||[]),g(A.content||[])}catch(R){console.error("Load receivables/liabilities error:",R)}})()},[]),s.useEffect(()=>{(m.type==="EXPENSE"||m.type==="INCOME")&&n.length>0&&!m.accountId&&w(f=>({...f,accountId:n[0].id}))},[n,m.accountId,m.type]),s.useEffect(()=>{m.type!=="TRANSFER"?w(f=>({...f,fromAccountId:void 0,toAccountId:void 0})):w(f=>({...f,accountId:"",categoryId:void 0})),m.type!=="RECEIVABLE_SETTLEMENT"&&w(f=>({...f,receivableId:void 0})),m.type!=="LIABILITY_SETTLEMENT"&&w(f=>({...f,liabilityId:void 0}))},[m.type]);const h=async f=>{f.preventDefault(),y(null),$(!0);try{if(m.amount<=0)throw new Error("Số tiền phải lớn hơn 0");if(m.type==="TRANSFER"){if(!m.fromAccountId||!m.toAccountId)throw new Error("Vui lòng chọn tài khoản nguồn và đích");if(m.fromAccountId===m.toAccountId)throw new Error("Tài khoản nguồn và đích phải khác nhau")}else if(m.type==="EXPENSE"||m.type==="INCOME"){if(!m.accountId)throw new Error("Vui lòng chọn tài khoản")}else if(m.type==="RECEIVABLE_SETTLEMENT"){if(!m.receivableId)throw new Error("Vui lòng chọn khoản cho vay cần ghi nhận")}else if(m.type==="LIABILITY_SETTLEMENT"&&!m.liabilityId)throw new Error("Vui lòng chọn khoản nợ cần ghi nhận");const R=m.occurredAt?An(m.occurredAt):new Date().toISOString();m.type==="TRANSFER"?await q.transactions.create({type:"TRANSFER",amount:m.amount,currency:m.currency,occurredAt:R,fromAccountId:m.fromAccountId,toAccountId:m.toAccountId,note:m.note}):m.type==="RECEIVABLE_SETTLEMENT"?await q.transactions.create({type:"RECEIVABLE_SETTLEMENT",amount:m.amount,currency:m.currency,occurredAt:R,accountId:m.accountId||void 0,receivableId:m.receivableId,note:m.note}):m.type==="LIABILITY_SETTLEMENT"?await q.transactions.create({type:"LIABILITY_SETTLEMENT",amount:m.amount,currency:m.currency,occurredAt:R,accountId:m.accountId||void 0,liabilityId:m.liabilityId,note:m.note}):await q.transactions.create({type:m.type,amount:m.amount,currency:m.currency,occurredAt:R,accountId:m.accountId||void 0,categoryId:m.categoryId,note:m.note}),e("transactions")}catch(R){y(de(R))}finally{$(!1)}},N=(f,R)=>{w(A=>({...A,[f]:R}))},j=()=>{e("transactions")};return t.jsxs(Wm,{className:"add-transaction-wrapper",children:[t.jsxs("div",{className:"page-header",children:[t.jsx("button",{className:"back-button",onClick:j,title:"Quay lại",children:t.jsx(G,{icon:"Back",size:20,color:"currentColor"})}),t.jsx("h1",{className:"title",children:"Thêm giao dịch"})]}),v&&t.jsx("div",{className:"error-message",children:v}),t.jsxs("form",{className:"form",onSubmit:h,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Loại giao dịch *"}),t.jsxs("select",{className:"select",value:m.type,onChange:f=>N("type",f.target.value),required:!0,children:[t.jsx("option",{value:"EXPENSE",children:"Chi tiêu"}),t.jsx("option",{value:"INCOME",children:"Thu nhập"}),t.jsx("option",{value:"TRANSFER",children:"Chuyển khoản"}),t.jsx("option",{value:"RECEIVABLE_SETTLEMENT",children:"Nhận tiền cho vay"}),t.jsx("option",{value:"LIABILITY_SETTLEMENT",children:"Trả nợ"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Số tiền *"}),t.jsx(Et,{className:"input",value:m.amount,onChange:f=>N("amount",f),placeholder:"0",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tiền tệ"}),t.jsxs("select",{className:"select",value:m.currency,onChange:f=>N("currency",f.target.value),children:[t.jsx("option",{value:"VND",children:"VND (₫)"}),t.jsx("option",{value:"USD",children:"USD ($)"}),t.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),m.type==="TRANSFER"?t.jsxs("div",{className:"transfer-fields",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản nguồn *"}),t.jsxs("select",{className:"select",value:m.fromAccountId||"",onChange:f=>N("fromAccountId",f.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản nguồn"}),n.map(f=>t.jsxs("option",{value:f.id,children:[f.name," (",f.type,")"]},f.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản đích *"}),t.jsxs("select",{className:"select",value:m.toAccountId||"",onChange:f=>N("toAccountId",f.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản đích"}),n.filter(f=>f.id!==m.fromAccountId).map(f=>t.jsxs("option",{value:f.id,children:[f.name," (",f.type,")"]},f.id))]})]})]}):m.type==="RECEIVABLE_SETTLEMENT"?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản"}),t.jsxs("select",{className:"select",value:m.accountId||"",onChange:f=>N("accountId",f.target.value||void 0),children:[t.jsx("option",{value:"",children:"Không có tài khoản"}),n.map(f=>t.jsxs("option",{value:f.id,children:[f.name," (",f.type,")"]},f.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Khoản cho vay *"}),t.jsxs("select",{className:"select",value:m.receivableId||"",onChange:f=>N("receivableId",f.target.value||void 0),required:!0,children:[t.jsx("option",{value:"",children:"Chọn khoản cho vay"}),d.map(f=>t.jsxs("option",{value:f.id,children:[f.counterpartyName," - Còn lại:"," ",new Intl.NumberFormat("vi-VN",{style:"currency",currency:f.currency}).format(f.remainingAmount)]},f.id))]})]})]}):m.type==="LIABILITY_SETTLEMENT"?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản"}),t.jsxs("select",{className:"select",value:m.accountId||"",onChange:f=>N("accountId",f.target.value||void 0),children:[t.jsx("option",{value:"",children:"Không có tài khoản"}),n.map(f=>t.jsxs("option",{value:f.id,children:[f.name," (",f.type,")"]},f.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Khoản nợ *"}),t.jsxs("select",{className:"select",value:m.liabilityId||"",onChange:f=>N("liabilityId",f.target.value||void 0),required:!0,children:[t.jsx("option",{value:"",children:"Chọn khoản nợ"}),p.map(f=>t.jsxs("option",{value:f.id,children:[f.counterpartyName," - Còn lại:"," ",new Intl.NumberFormat("vi-VN",{style:"currency",currency:f.currency}).format(f.remainingAmount)]},f.id))]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản *"}),t.jsxs("select",{className:"select",value:m.accountId,onChange:f=>N("accountId",f.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản"}),n.map(f=>t.jsxs("option",{value:f.id,children:[f.name," (",f.type,")"]},f.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Danh mục"}),t.jsxs("select",{className:"select",value:m.categoryId||"",onChange:f=>N("categoryId",f.target.value||void 0),children:[t.jsx("option",{value:"",children:"Không có"}),r.map(f=>t.jsx("option",{value:f.id,children:f.name},f.id))]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ngày và giờ giao dịch"}),t.jsx("input",{className:"input",type:"datetime-local",value:m.occurredAt||"",onChange:f=>N("occurredAt",f.target.value)})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ghi chú"}),t.jsx(He,{value:m.note||"",onChange:f=>N("note",f.target.value||void 0),placeholder:"Thêm ghi chú cho giao dịch này...",rows:3})]}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{className:"cancel-button",type:"button",onClick:()=>e("transactions"),disabled:b,children:"Hủy"}),t.jsx("button",{className:`submit-button ${b?"submit-button--loading":""}`,type:"submit",disabled:b,children:b?"Đang lưu...":"Lưu giao dịch"})]})]})]})},Wm=me.div`
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
`,Vm=()=>{const{navigate:e}=qe(),o=Ye(),n=te(S=>S.walletAccounts.items),r=te(S=>S.categories.items),a=te(S=>S.walletAccounts.lastFetched),i=te(S=>S.categories.lastFetched),l=te(S=>S.walletAccounts.isLoading),c=te(S=>S.categories.isLoading),[d,u]=s.useState(null),[p,g]=s.useState(!0),[b,$]=s.useState(!1),[v,y]=s.useState(!1),[m,w]=s.useState(null),[h,N]=s.useState(null);s.useEffect(()=>{const S=sessionStorage.getItem("editTransactionId");S?(N(S),sessionStorage.removeItem("editTransactionId")):(w("Không tìm thấy ID giao dịch"),g(!1))},[]),s.useEffect(()=>{if(l||c)return;const S=Date.now()-5*60*1e3;(!a||a<S)&&o(et()),(!i||i<S)&&o(kt())},[o,a,i,l,c]);const[j,f]=s.useState({});s.useEffect(()=>{h&&R()},[h]);const R=async()=>{if(h){g(!0),w(null);try{const S=await q.transactions.getById(h);u(S),f({type:S.type,amount:S.amount,currency:S.currency,accountId:S.accountId,categoryId:S.categoryId,fromAccountId:S.fromAccountId,toAccountId:S.toAccountId,occurredAt:Wt(S.occurredAt),note:S.note})}catch(S){w(de(S))}finally{g(!1)}}},A=async S=>{S.preventDefault(),w(null),$(!0);try{if(!d)return;if((j.type||d.type)==="TRANSFER"){const k=j.fromAccountId||d.fromAccountId,P=j.toAccountId||d.toAccountId;if(!k||!P)throw new Error("Vui lòng chọn tài khoản nguồn và đích");if(k===P)throw new Error("Tài khoản nguồn và đích phải khác nhau")}const O={...j,occurredAt:j.occurredAt?An(j.occurredAt):void 0};(j.type||d.type)==="TRANSFER"&&(O.accountId=void 0,O.categoryId=void 0),await q.transactions.update(d.id,O),e("transactions")}catch(O){w(de(O))}finally{$(!1)}},E=async()=>{if(!(!d||!window.confirm("Bạn có chắc muốn xóa giao dịch này?"))){y(!0),w(null);try{await q.transactions.delete(d.id),e("transactions")}catch(S){w(de(S))}finally{y(!1)}}},I=(S,O)=>{f(k=>({...k,[S]:O}))};return p?t.jsxs(qo,{className:"edit-transaction-wrapper",children:[t.jsx("h1",{className:"title",children:"Sửa giao dịch"}),t.jsx("div",{className:"loading-state",children:"Đang tải dữ liệu..."})]}):d?t.jsxs(qo,{className:"edit-transaction-wrapper",children:[t.jsx("h1",{className:"title",children:"Sửa giao dịch"}),m&&t.jsx("div",{className:"error-message",children:m}),t.jsxs("form",{className:"form",onSubmit:A,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Loại giao dịch *"}),t.jsxs("select",{className:"select",value:j.type||d.type,onChange:S=>I("type",S.target.value),required:!0,children:[t.jsx("option",{value:"EXPENSE",children:"Chi tiêu"}),t.jsx("option",{value:"INCOME",children:"Thu nhập"}),t.jsx("option",{value:"TRANSFER",children:"Chuyển khoản"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Số tiền *"}),t.jsx("input",{className:"input",type:"number",step:"0.01",min:"0",value:j.amount||d.amount,onChange:S=>I("amount",parseFloat(S.target.value)||0),required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tiền tệ"}),t.jsxs("select",{className:"select",value:j.currency||d.currency,onChange:S=>I("currency",S.target.value),children:[t.jsx("option",{value:"VND",children:"VND (₫)"}),t.jsx("option",{value:"USD",children:"USD ($)"}),t.jsx("option",{value:"EUR",children:"EUR (€)"})]})]}),(j.type||d.type)==="TRANSFER"?t.jsxs("div",{className:"transfer-fields",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản nguồn *"}),t.jsxs("select",{className:"select",value:j.fromAccountId||d.fromAccountId||"",onChange:S=>I("fromAccountId",S.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản nguồn"}),n.map(S=>t.jsxs("option",{value:S.id,children:[S.name," (",S.type,")"]},S.id))]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản đích *"}),t.jsxs("select",{className:"select",value:j.toAccountId||d.toAccountId||"",onChange:S=>I("toAccountId",S.target.value),required:!0,children:[t.jsx("option",{value:"",children:"Chọn tài khoản đích"}),n.filter(S=>S.id!==(j.fromAccountId||d.fromAccountId)).map(S=>t.jsxs("option",{value:S.id,children:[S.name," (",S.type,")"]},S.id))]})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Tài khoản *"}),t.jsx("select",{className:"select",value:j.accountId||d.accountId,onChange:S=>I("accountId",S.target.value),required:!0,children:n.map(S=>t.jsxs("option",{value:S.id,children:[S.name," (",S.type,")"]},S.id))})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Danh mục"}),t.jsxs("select",{className:"select",value:j.categoryId||d.categoryId||"",onChange:S=>I("categoryId",S.target.value||void 0),children:[t.jsx("option",{value:"",children:"Không có"}),r.map(S=>t.jsx("option",{value:S.id,children:S.name},S.id))]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ngày và giờ giao dịch"}),t.jsx("input",{className:"input",type:"datetime-local",value:j.occurredAt||Wt(d.occurredAt),onChange:S=>I("occurredAt",S.target.value)})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"label",children:"Ghi chú"}),t.jsx(He,{value:j.note||d.note||"",onChange:S=>I("note",S.target.value||void 0),rows:3})]}),t.jsxs("div",{className:"button-group",children:[t.jsx("button",{className:"cancel-button",type:"button",onClick:()=>e("transactions"),disabled:b||v,children:"Hủy"}),t.jsx("button",{className:`submit-button ${b?"submit-button--loading":""}`,type:"submit",disabled:b||v,children:b?"Đang lưu...":"Lưu thay đổi"})]}),t.jsxs("button",{className:"delete-button",type:"button",onClick:E,disabled:b||v,children:[t.jsx(G,{icon:v?"Loading":"Delete",size:18,color:"currentColor"}),t.jsx("span",{children:v?"Đang xóa...":"Xóa giao dịch"})]})]})]}):t.jsxs(qo,{className:"edit-transaction-wrapper",children:[t.jsx("h1",{className:"title",children:"Sửa giao dịch"}),t.jsx("div",{className:"error-message",children:"Không tìm thấy giao dịch"}),t.jsx("button",{className:"cancel-button",onClick:()=>e("transactions"),style:{marginTop:"16px"},children:"Quay lại"})]})},qo=me.div`
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
`,Bm=()=>{const e=Ye(),o=te(f=>f.walletAccounts.items),n=te(f=>f.walletAccounts.isLoading),r=te(f=>f.walletAccounts.error),a=te(f=>f.walletAccounts.lastFetched),[i,l]=s.useState(null),[c,d]=s.useState(!1),[u,p]=s.useState(null),[g,b]=s.useState(!1),[$,v]=s.useState({name:"",type:"CASH",currency:"VND",openingBalance:0,note:""});s.useEffect(()=>{if(n)return;const f=Date.now()-5*60*1e3;(!a||a<f)&&e(et())},[e,a,n]),s.useEffect(()=>{r&&l(r)},[r]);const y=f=>{f?(p(f),v({name:f.name,type:f.type,currency:f.currency,openingBalance:f.openingBalance,note:f.note||""})):(p(null),v({name:"",type:"CASH",currency:"VND",openingBalance:0,note:""})),d(!0)},m=()=>{d(!1),p(null),v({name:"",type:"CASH",currency:"VND",openingBalance:0,note:""})},w=async f=>{f.preventDefault(),l(null),b(!0);try{if(u){const R=await q.accounts.update(u.id,$);e(wi(R))}else{const R=await q.accounts.create($);e($i(R))}m()}catch(R){l(de(R))}finally{b(!1)}},h=async f=>{if(window.confirm(`Bạn có chắc muốn xóa tài khoản "${f.name}"?`))try{await q.accounts.delete(f.id),e(vi(f.id))}catch(R){l(de(R))}},N=(f,R="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:R}).format(f),j=f=>({CASH:"Tiền mặt",BANK:"Ngân hàng",E_WALLET:"Ví điện tử",SAVINGS:"Tiết kiệm",INVESTMENT:"Đầu tư",OTHER:"Khác"})[f]||f;return n?t.jsxs(Nr,{className:"accounts-wrapper",children:[t.jsx("h1",{className:"title",children:"Tài khoản"}),t.jsxs("div",{className:"loading-state",children:[t.jsx(ve,{className:"h-8 w-48 mb-4"}),t.jsx(ve,{className:"h-32 w-full"})]})]}):t.jsxs(Nr,{className:"accounts-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Tài khoản"}),t.jsxs(H,{onClick:()=>y(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài khoản"})]})]}),i&&t.jsx(at,{variant:"destructive",children:t.jsx(st,{children:i})}),o.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có tài khoản nào"}),t.jsx(H,{onClick:()=>y(),className:"gap-2",style:{marginTop:"16px"},children:"Thêm tài khoản đầu tiên"})]}):t.jsx("div",{className:"accounts-grid",children:o.map(f=>t.jsxs(he,{className:"account-card",onClick:()=>y(f),children:[t.jsxs("div",{className:"account-header",children:[t.jsx("h3",{className:"account-name",children:f.name}),t.jsx("span",{className:"account-type",children:j(f.type)})]}),t.jsx("div",{className:"account-balance",children:N(f.currentBalance??f.openingBalance??0,f.currency)}),t.jsxs("div",{className:"account-details",children:[t.jsxs("div",{children:["Tiền tệ: ",f.currency]}),f.note&&t.jsx("div",{children:f.note})]}),t.jsxs("div",{className:"account-actions",onClick:R=>R.stopPropagation(),children:[t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>y(f),title:"Sửa",children:t.jsx(G,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>h(f),title:"Xóa",children:t.jsx(G,{icon:"Delete",size:16,color:"currentColor"})})]})]},f.id))}),t.jsx(Rt,{open:c,onOpenChange:f=>!f&&m(),children:t.jsxs(gt,{className:"modal-content",children:[t.jsxs(mt,{children:[t.jsx(ht,{className:"modal-title",children:u?"Sửa tài khoản":"Thêm tài khoản"}),t.jsx(yt,{children:u?"Cập nhật thông tin tài khoản của bạn":"Thêm tài khoản mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:w,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Tên tài khoản *"}),t.jsx(oe,{className:"input",type:"text",value:$.name,onChange:f=>v({...$,name:f.target.value}),placeholder:"Ví dụ: Ví tiền mặt, Tài khoản ngân hàng...",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Loại *"}),t.jsxs(we,{value:$.type,onValueChange:f=>v({...$,type:f}),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"CASH",children:"Tiền mặt"}),t.jsx(Z,{value:"BANK",children:"Ngân hàng"}),t.jsx(Z,{value:"E_WALLET",children:"Ví điện tử"}),t.jsx(Z,{value:"SAVINGS",children:"Tiết kiệm"}),t.jsx(Z,{value:"INVESTMENT",children:"Đầu tư"}),t.jsx(Z,{value:"OTHER",children:"Khác"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Tiền tệ *"}),t.jsxs(we,{value:$.currency,onValueChange:f=>v({...$,currency:f}),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"VND",children:"VND (₫)"}),t.jsx(Z,{value:"USD",children:"USD ($)"}),t.jsx(Z,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Số dư ban đầu"}),t.jsx(oe,{className:"input",type:"number",step:"0.01",value:$.openingBalance,onChange:f=>v({...$,openingBalance:parseFloat(f.target.value)||0})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Ghi chú"}),t.jsx(He,{value:$.note||"",onChange:f=>v({...$,note:f.target.value}),placeholder:"Thêm ghi chú cho tài khoản này...",rows:3})]}),t.jsxs(ft,{className:"button-group",children:[t.jsx(H,{variant:"outline",type:"button",onClick:m,disabled:g,className:"cancel-button",children:"Hủy"}),t.jsx(H,{type:"submit",disabled:g,className:`submit-button ${g?"submit-button--loading":""}`,children:g?"Đang lưu...":u?"Lưu thay đổi":"Tạo tài khoản"})]})]})]})})]})},Nr=me.div`
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
      ${gn}

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
`,Hm=()=>{const{t:e}=_e(),o=Ye(),n=te(j=>j.categories.items),r=te(j=>j.categories.isLoading),a=te(j=>j.categories.error),i=te(j=>j.categories.lastFetched),[l,c]=s.useState(null),[d,u]=s.useState(!1),[p,g]=s.useState(null),[b,$]=s.useState(!1),[v,y]=s.useState({name:"",icon:"Categories",color:"#0ea5e9"});s.useEffect(()=>{if(r)return;const j=Date.now()-5*60*1e3;(!i||i<j)&&o(kt())},[o,i,r]),s.useEffect(()=>{a&&c(a)},[a]);const m=j=>{j?(g(j),y({name:j.name,icon:j.icon||"📁",color:j.color||"#0ea5e9"})):(g(null),y({name:"",icon:"📁",color:"#0ea5e9"})),u(!0)},w=()=>{u(!1),g(null),y({name:"",icon:"📁",color:"#0ea5e9"})},h=async j=>{j.preventDefault(),c(null),$(!0);try{if(p){const f=await q.categories.update(p.id,v);o(ji(f))}else{const f=await q.categories.create(v);o(Si(f))}w()}catch(f){c(de(f))}finally{$(!1)}},N=s.useCallback(async j=>{if(j.isSystem){alert(e("wallet.categories.cannotDeleteSystem")||"Không thể xóa danh mục hệ thống");return}if(window.confirm(e("wallet.categories.confirmDelete",{name:j.name})||`Bạn có chắc muốn xóa danh mục "${j.name}"?`))try{await q.categories.delete(j.id),o(Ni(j.id))}catch(f){c(de(f))}},[o,e]);return t.jsxs(Ym,{className:"categories-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:e("wallet.categories.title")}),t.jsxs(H,{onClick:()=>m(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.categories.add")})]})]}),l&&t.jsx(at,{variant:"destructive",children:t.jsx(st,{children:l})}),r&&n.length===0?t.jsx("div",{className:"loading-state",children:t.jsx("div",{className:"skeleton-grid",children:[...Array(8)].map((j,f)=>t.jsxs(he,{className:"skeleton-card",children:[t.jsx(ve,{className:"h-16 w-16 rounded-full mb-4"}),t.jsx(ve,{className:"h-4 w-24"})]},f))})}):n.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("div",{className:"empty-icon",children:t.jsx(G,{icon:"Categories",size:48,color:"currentColor"})}),t.jsx("p",{children:e("wallet.categories.noCategories")}),t.jsxs(H,{onClick:()=>m(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:e("wallet.categories.addFirst")||"Thêm danh mục đầu tiên"})]})]}):t.jsx("div",{className:"categories-grid",children:n.map(j=>t.jsxs(he,{className:"category-card",onClick:()=>!j.isSystem&&m(j),children:[j.isSystem&&t.jsx(ke,{variant:"secondary",className:"system-badge",children:e("wallet.categories.system")||"Hệ thống"}),t.jsx("div",{className:"category-icon-wrapper",style:{"--category-color":j.color||"#0ea5e9"},children:j.icon?(()=>{const f=Xl(j.icon);return f?t.jsx(f,{size:40,color:j.color||"#0ea5e9",strokeWidth:2}):t.jsx("span",{className:"category-icon-emoji",children:j.icon})})():t.jsx(G,{icon:"Categories",size:40,color:j.color||"#0ea5e9"})}),t.jsx("div",{className:"category-name",children:j.name}),!j.isSystem&&t.jsxs("div",{className:"category-actions",onClick:f=>f.stopPropagation(),children:[t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>m(j),title:e("wallet.common.edit"),children:t.jsx(G,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button icon-button--danger",onClick:()=>N(j),title:e("wallet.common.delete"),children:t.jsx(G,{icon:"Delete",size:16,color:"currentColor"})})]})]},j.id))}),t.jsx(Rt,{open:d,onOpenChange:j=>!j&&w(),children:t.jsxs(gt,{className:"modal-content",children:[t.jsxs(mt,{children:[t.jsx(ht,{className:"modal-title",children:e(p?"wallet.categories.edit":"wallet.categories.add")}),t.jsx(yt,{children:p?"Cập nhật thông tin danh mục":"Thêm danh mục mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:h,children:[t.jsxs("div",{className:"form-group",children:[t.jsxs(U,{className:"label",children:[e("wallet.categories.name")||"Tên danh mục"," *"]}),t.jsx(oe,{className:"input",type:"text",value:v.name,onChange:j=>y({...v,name:j.target.value}),placeholder:e("wallet.categories.namePlaceholder")||"Ví dụ: Ăn uống, Mua sắm...",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:e("wallet.categories.icon")||"Icon"}),t.jsx(oe,{className:"input",type:"text",value:v.icon,onChange:j=>y({...v,icon:j.target.value}),placeholder:"Categories"}),t.jsx("div",{className:"form-hint",children:e("wallet.categories.iconHint")||"Nhập tên icon từ Lucide (ví dụ: Utensils, Car, ShoppingBag)"})]}),t.jsxs(ft,{className:"button-group",children:[t.jsx(H,{variant:"outline",type:"button",onClick:w,disabled:b,className:"cancel-button",children:e("wallet.common.cancel")}),t.jsx(H,{type:"submit",disabled:b,className:`submit-button ${b?"submit-button--loading":""}`,children:b?e("wallet.common.saving")||"Đang lưu...":p?e("wallet.common.save"):e("wallet.categories.create")||"Tạo danh mục"})]})]})]})})]})},Ym=me.div`
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
`,Um=()=>{const[e,o]=s.useState([]),[n,r]=s.useState(!0),[a,i]=s.useState(null),l=s.useRef(!1);s.useEffect(()=>{l.current||(l.current=!0,c())},[]);const c=async()=>{r(!0),i(null);try{const p=await q.budgets.getAll();o(p)}catch(p){i(de(p))}finally{r(!1)}},d=(p,g="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:g}).format(p),u=p=>{if(!p)return"";let g="";if(typeof p=="string")g=p;else if(typeof p=="object"&&p.year&&p.month)g=`${p.year}-${String(p.month).padStart(2,"0")}`;else return"";const[b,$]=g.split("-");return new Date(parseInt(b),parseInt($)-1).toLocaleDateString("vi-VN",{month:"long",year:"numeric"})};return n?t.jsxs(jr,{className:"budgets-wrapper",children:[t.jsx("h1",{className:"title",children:"Ngân sách"}),t.jsxs("div",{className:"loading-state",children:[t.jsx(ve,{className:"h-8 w-48 mb-4"}),t.jsx(ve,{className:"h-32 w-full"})]})]}):t.jsxs(jr,{className:"budgets-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Ngân sách"}),t.jsxs(H,{onClick:()=>{alert("Tính năng thêm ngân sách sẽ được implement")},className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm ngân sách"})]})]}),a&&t.jsx(at,{variant:"destructive",children:t.jsx(st,{children:a})}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có ngân sách nào"}),t.jsx(H,{onClick:()=>{alert("Tính năng thêm ngân sách sẽ được implement")},className:"gap-2",style:{marginTop:"16px"},children:"Thêm ngân sách đầu tiên"})]}):t.jsx("div",{className:"budgets-list",children:e.map(p=>{const g=(p.percentageUsed??0)||0,b=(p.amount??0)||0,$=(p.usedAmount??0)||0,v=(p.remainingAmount??0)||0,y=p.month;return t.jsxs(he,{className:"budget-card",children:[t.jsxs("div",{className:"budget-header",children:[t.jsx("h3",{className:"budget-month",children:u(y)}),t.jsxs("div",{className:"budget-amount",children:[d($)," / ",d(b)]})]}),t.jsx("div",{className:"progress-bar",children:t.jsx("div",{className:"progress-fill",style:{width:`${Math.max(0,Math.min(g,100))}%`,background:g>=100?"#ef4444":g>=80?"#f59e0b":void 0}})}),t.jsxs("div",{className:"budget-stats",children:[t.jsxs("span",{children:["Đã dùng: ",isNaN(g)?"0.0":g.toFixed(1),"%"]}),t.jsxs("span",{children:["Còn lại: ",d(v)]})]})]},p.id||(typeof y=="string"?y:""))})})]})},jr=me.div`
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
`,qm=()=>{const e=Ye(),o=te(x=>x.walletAccounts.items),n=te(x=>x.walletAccounts.lastFetched),r=te(x=>x.walletAccounts.isLoading),[a,i]=s.useState([]),[l,c]=s.useState(null),[d,u]=s.useState(!0),[p,g]=s.useState(null),[b,$]=s.useState(!1),[v,y]=s.useState(null),[m,w]=s.useState(!1),[h,N]=s.useState(0),[j,f]=s.useState([]),[R,A]=s.useState(!1),[E,I]=s.useState(!1),[S,O]=s.useState({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",accountId:"",note:""}),[k,P]=s.useState({amount:0,accountId:"",occurredAt:new Date().toISOString().split("T")[0],note:""}),C=s.useCallback(async(x=0)=>{u(!0),g(null);try{const W=await q.receivables.getAll(x,10);i(W.content),c(W)}catch(W){g(de(W))}finally{u(!1)}},[]);s.useEffect(()=>{if(r)return;const x=Date.now()-5*60*1e3;(!n||n<x)&&e(et())},[e,n,r]),s.useEffect(()=>{o.length>0&&P(x=>({...x,accountId:x.accountId||o[0].id}))},[o]);const F=s.useCallback(async x=>{A(!0);try{const W=await q.settlements.getByReceivableId(x);f(W)}catch(W){console.error("Load settlements error:",W),g(de(W))}finally{A(!1)}},[g]);s.useEffect(()=>{C(h)},[h,C]);const _=x=>{var W,M;x?(y(x),O({counterpartyName:x.counterpartyName,amount:x.amount,currency:x.currency,occurredAt:x.occurredAt.split("T")[0],dueAt:x.dueAt?x.dueAt.split("T")[0]:"",accountId:x.accountId||"",note:x.note||""}),P({amount:0,accountId:k.accountId||((W=o[0])==null?void 0:W.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""}),F(x.id)):(y(null),O({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",accountId:"",note:""}),f([]),P({amount:0,accountId:((M=o[0])==null?void 0:M.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""})),$(!0)},Y=()=>{var x;$(!1),y(null),O({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",accountId:"",note:""}),f([]),P({amount:0,accountId:((x=o[0])==null?void 0:x.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""})},D=async()=>{if(v){if(k.amount<=0){g("Số tiền nhận phải lớn hơn 0");return}g(null),I(!0);try{const x=k.occurredAt?new Date(k.occurredAt).toISOString():new Date().toISOString();await q.transactions.create({type:"RECEIVABLE_SETTLEMENT",amount:k.amount,currency:v.currency,accountId:k.accountId||void 0,receivableId:v.id,occurredAt:x,note:k.note||void 0}),await C(h),Y()}catch(x){g(de(x))}finally{I(!1)}}},Q=async x=>{x.preventDefault(),g(null),w(!0);try{if(v){const W={counterpartyName:S.counterpartyName,amount:S.amount,currency:S.currency,occurredAt:S.occurredAt?new Date(S.occurredAt).toISOString():void 0,dueAt:S.dueAt?new Date(S.dueAt).toISOString():void 0,accountId:S.accountId||void 0,note:S.note||void 0};await q.receivables.update(v.id,W)}else{const W={counterpartyName:S.counterpartyName,amount:S.amount,currency:S.currency,occurredAt:S.occurredAt?new Date(S.occurredAt).toISOString():void 0,dueAt:S.dueAt?new Date(S.dueAt).toISOString():void 0,accountId:S.accountId||void 0,note:S.note||void 0};await q.receivables.create(W)}await C(h),Y()}catch(W){g(de(W))}finally{w(!1)}},fe=async x=>{if(window.confirm(`Bạn có chắc muốn xóa khoản cho vay "${x.counterpartyName}"?`))try{await q.receivables.delete(x.id),await C(h)}catch(W){g(de(W))}},ae=(x,W="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:W}).format(x),ue=x=>new Date(x).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"}),se=x=>({OPEN:"Mở",PARTIALLY_PAID:"Đã trả một phần",PAID:"Đã trả đủ",OVERDUE:"Quá hạn"})[x]||x;return d&&a.length===0?t.jsxs(Sr,{className:"receivables-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Cho vay"}),t.jsxs(H,{onClick:()=>_(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản cho vay"})]})]}),t.jsxs("div",{className:"loading-state",children:[t.jsx(ve,{className:"h-8 w-48 mb-4"}),t.jsx(ve,{className:"h-32 w-full"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(Sr,{className:"receivables-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Cho vay"}),t.jsxs(H,{onClick:()=>_(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản cho vay"})]})]}),p&&t.jsx(at,{variant:"destructive",children:t.jsx(st,{children:p})}),a.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có khoản cho vay nào"}),t.jsxs(H,{onClick:()=>_(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản cho vay đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"receivables-grid",children:a.map(x=>t.jsxs(he,{className:`receivable-card ${x.isOverdue?"receivable-card--overdue":""}`,onClick:()=>_(x),children:[t.jsxs("div",{className:"receivable-header",children:[t.jsx("h3",{className:"receivable-name",children:x.counterpartyName}),t.jsx(ke,{variant:x.status==="PAID"?"default":x.isOverdue?"destructive":"secondary",className:`status-badge status-badge--${x.status.toLowerCase()}`,children:se(x.status)})]}),t.jsxs("div",{className:"receivable-details",children:[t.jsxs("div",{children:["Số tiền: ",ae(x.amount,x.currency)]}),t.jsxs("div",{children:["Đã trả: ",ae(x.paidAmount??0,x.currency)]}),t.jsxs("div",{children:["Còn lại: ",ae(x.remainingAmount??0,x.currency)]}),x.dueAt&&t.jsxs("div",{children:["Hạn thanh toán: ",ue(x.dueAt)]}),x.note&&t.jsxs("div",{children:["Ghi chú: ",x.note]})]}),t.jsx("div",{className:"receivable-amount",children:ae(x.remainingAmount??0,x.currency)}),t.jsxs("div",{className:"receivable-actions",onClick:W=>W.stopPropagation(),children:[t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>_(x),title:"Sửa",children:t.jsx(G,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>fe(x),title:"Xóa",children:t.jsx(G,{icon:"Delete",size:16,color:"currentColor"})})]})]},x.id))}),l&&l.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsx(H,{variant:"outline",className:`pagination-button ${l.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>N(l.page-1),disabled:!l.hasPrevious,children:"← Trước"}),t.jsxs("span",{children:["Trang ",l.page+1," / ",l.totalPages]}),t.jsx(H,{variant:"outline",className:`pagination-button ${l.hasNext?"":"pagination-button--disabled"}`,onClick:()=>N(l.page+1),disabled:!l.hasNext,children:"Sau →"})]})]})]}),t.jsx(Rt,{open:b,onOpenChange:x=>!x&&Y(),children:t.jsxs(Km,{className:"modal-content",children:[t.jsxs(mt,{children:[t.jsx(ht,{className:"modal-title",children:v?"Sửa khoản cho vay":"Thêm khoản cho vay"}),t.jsx(yt,{children:v?"Cập nhật thông tin khoản cho vay":"Thêm khoản cho vay mới vào danh sách"})]}),v&&t.jsxs("div",{className:"settlement-section",children:[t.jsxs("div",{className:"settlement-header",children:[t.jsx("h3",{className:"settlement-title",children:"Lịch sử nhận tiền"}),t.jsx("p",{className:"settlement-subtitle",children:"Xem các lần người vay đã trả tiền cho khoản cho vay này."})]}),t.jsx("div",{className:"settlement-history",children:R?t.jsx("div",{className:"settlement-loading",children:"Đang tải lịch sử thanh toán..."}):j.length===0?t.jsx("div",{className:"settlement-empty",children:"Chưa có lần thanh toán nào."}):t.jsx("div",{className:"settlement-list",children:j.map(x=>t.jsxs("div",{className:"settlement-item",children:[t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Số tiền"}),t.jsx("span",{className:"settlement-value",children:ae(x.amount,x.currency)})]}),t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Ngày"}),t.jsx("span",{className:"settlement-value",children:ue(x.occurredAt)})]}),x.note&&t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Ghi chú"}),t.jsx("span",{className:"settlement-value",children:x.note})]})]},x.id))})}),t.jsxs("div",{className:"settlement-form",children:[t.jsx("h4",{className:"settlement-form-title",children:"Nhận tiền một phần"}),t.jsxs("div",{className:"settlement-form-grid",children:[t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(U,{className:"label",children:"Số tiền *"}),t.jsx(Et,{className:"input",value:k.amount,onChange:x=>P({...k,amount:x}),placeholder:"0"})]}),t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(U,{className:"label",children:"Tài khoản nhận"}),t.jsxs(we,{value:k.accountId||void 0,onValueChange:x=>P({...k,accountId:x||""}),children:[t.jsx(ye,{className:"select settlement-account-select",children:t.jsx($e,{placeholder:"Không có tài khoản"})}),t.jsx(xe,{children:o.map(x=>t.jsx(Z,{value:x.id,children:x.name},x.id))})]})]}),t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(U,{className:"label",children:"Ngày nhận"}),t.jsx(oe,{className:"input",type:"date",value:k.occurredAt,onChange:x=>P({...k,occurredAt:x.target.value})})]})]}),t.jsxs("div",{className:"settlement-form-note",children:[t.jsx(U,{className:"label",children:"Ghi chú"}),t.jsx(He,{value:k.note,onChange:x=>P({...k,note:x.target.value}),placeholder:"Ví dụ: Trả lần 1, chuyển khoản...",rows:2})]}),t.jsx("div",{className:"settlement-form-actions",children:t.jsx(H,{type:"button",className:"settlement-submit-button",disabled:E,onClick:D,children:E?"Đang ghi nhận...":"Ghi nhận lần trả này"})})]})]}),t.jsxs("form",{className:"form",onSubmit:Q,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Tên người vay *"}),t.jsx(oe,{className:"input",type:"text",value:S.counterpartyName,onChange:x=>O({...S,counterpartyName:x.target.value}),placeholder:"Nhập tên người vay",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Số tiền *"}),t.jsx(Et,{className:"input",value:S.amount,onChange:x=>O({...S,amount:x}),placeholder:"0",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Tiền tệ"}),t.jsxs(we,{value:S.currency,onValueChange:x=>O({...S,currency:x}),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"VND",children:"VND (₫)"}),t.jsx(Z,{value:"USD",children:"USD ($)"}),t.jsx(Z,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Tài khoản nhận tiền"}),t.jsxs(we,{value:S.accountId||void 0,onValueChange:x=>O({...S,accountId:x||""}),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{placeholder:"Không có tài khoản"})}),t.jsx(xe,{children:o.map(x=>t.jsx(Z,{value:x.id,children:x.name},x.id))})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Ngày cho vay"}),t.jsx(oe,{className:"input",type:"date",value:S.occurredAt||"",onChange:x=>O({...S,occurredAt:x.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Hạn thanh toán"}),t.jsx(oe,{className:"input",type:"date",value:S.dueAt||"",onChange:x=>O({...S,dueAt:x.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Ghi chú"}),t.jsx(He,{value:S.note||"",onChange:x=>O({...S,note:x.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),t.jsxs(ft,{className:"button-group",children:[t.jsx(H,{variant:"outline",type:"button",onClick:Y,disabled:m,className:"cancel-button",children:"Hủy"}),t.jsx(H,{type:"submit",disabled:m,className:`submit-button ${m?"submit-button--loading":""}`,children:m?"Đang lưu...":v?"Lưu thay đổi":"Tạo khoản cho vay"})]})]})]})})]})},Sr=me.div`
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
`,Km=me(gt)`
  max-height: 90vh;
  max-width: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

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
        font-size: ${({theme:e})=>e.typography.fontSize.base};
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
`,Gm=()=>{const e=Ye(),o=te(x=>x.walletAccounts.items),n=te(x=>x.walletAccounts.lastFetched),r=te(x=>x.walletAccounts.isLoading),[a,i]=s.useState([]),[l,c]=s.useState(null),[d,u]=s.useState(!0),[p,g]=s.useState(null),[b,$]=s.useState(!1),[v,y]=s.useState(null),[m,w]=s.useState(!1),[h,N]=s.useState(0),[j,f]=s.useState([]),[R,A]=s.useState(!1),[E,I]=s.useState(!1),[S,O]=s.useState({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",accountId:"",note:""}),[k,P]=s.useState({amount:0,accountId:"",occurredAt:new Date().toISOString().split("T")[0],note:""}),C=s.useCallback(async(x=0)=>{u(!0),g(null);try{const W=await q.liabilities.getAll(x,10);i(W.content),c(W)}catch(W){g(de(W))}finally{u(!1)}},[]);s.useEffect(()=>{if(r)return;const x=Date.now()-5*60*1e3;(!n||n<x)&&e(et())},[e,n,r]),s.useEffect(()=>{o.length>0&&P(x=>({...x,accountId:x.accountId||o[0].id}))},[o]);const F=s.useCallback(async x=>{A(!0);try{const W=await q.settlements.getByLiabilityId(x);f(W)}catch(W){console.error("Load settlements error:",W),g(de(W))}finally{A(!1)}},[g]);s.useEffect(()=>{C(h)},[h,C]);const _=x=>{var W,M;x?(y(x),O({counterpartyName:x.counterpartyName,amount:x.amount,currency:x.currency,occurredAt:x.occurredAt.split("T")[0],dueAt:x.dueAt?x.dueAt.split("T")[0]:"",accountId:x.accountId||"",note:x.note||""}),P({amount:0,accountId:k.accountId||((W=o[0])==null?void 0:W.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""}),F(x.id)):(y(null),O({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",accountId:"",note:""}),f([]),P({amount:0,accountId:((M=o[0])==null?void 0:M.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""})),$(!0)},Y=()=>{var x;$(!1),y(null),O({counterpartyName:"",amount:0,currency:"VND",occurredAt:new Date().toISOString().split("T")[0],dueAt:"",accountId:"",note:""}),f([]),P({amount:0,accountId:((x=o[0])==null?void 0:x.id)||"",occurredAt:new Date().toISOString().split("T")[0],note:""})},D=async()=>{if(v){if(k.amount<=0){g("Số tiền trả phải lớn hơn 0");return}g(null),I(!0);try{const x=k.occurredAt?new Date(k.occurredAt).toISOString():new Date().toISOString();await q.transactions.create({type:"LIABILITY_SETTLEMENT",amount:k.amount,currency:v.currency,accountId:k.accountId||void 0,liabilityId:v.id,occurredAt:x,note:k.note||void 0}),await C(h),Y()}catch(x){g(de(x))}finally{I(!1)}}},Q=async x=>{x.preventDefault(),g(null),w(!0);try{if(v){const W={counterpartyName:S.counterpartyName,amount:S.amount,currency:S.currency,occurredAt:S.occurredAt?new Date(S.occurredAt).toISOString():void 0,dueAt:S.dueAt?new Date(S.dueAt).toISOString():void 0,accountId:S.accountId||void 0,note:S.note||void 0};await q.liabilities.update(v.id,W)}else{const W={counterpartyName:S.counterpartyName,amount:S.amount,currency:S.currency,occurredAt:S.occurredAt?new Date(S.occurredAt).toISOString():void 0,dueAt:S.dueAt?new Date(S.dueAt).toISOString():void 0,accountId:S.accountId||void 0,note:S.note||void 0};await q.liabilities.create(W)}await C(h),Y()}catch(W){g(de(W))}finally{w(!1)}},fe=async x=>{if(window.confirm(`Bạn có chắc muốn xóa khoản nợ "${x.counterpartyName}"?`))try{await q.liabilities.delete(x.id),await C(h)}catch(W){g(de(W))}},ae=(x,W="VND")=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:W}).format(x),ue=x=>new Date(x).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"}),se=x=>({OPEN:"Mở",PARTIALLY_PAID:"Đã trả một phần",PAID:"Đã trả đủ",OVERDUE:"Quá hạn"})[x]||x;return d&&a.length===0?t.jsxs(kr,{className:"liabilities-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Nợ"}),t.jsxs(H,{onClick:()=>_(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản nợ"})]})]}),t.jsxs("div",{className:"loading-state",children:[t.jsx(ve,{className:"h-8 w-48 mb-4"}),t.jsx(ve,{className:"h-32 w-full"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(kr,{className:"liabilities-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Nợ"}),t.jsxs(H,{onClick:()=>_(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản nợ"})]})]}),p&&t.jsx(at,{variant:"destructive",children:t.jsx(st,{children:p})}),a.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có khoản nợ nào"}),t.jsxs(H,{onClick:()=>_(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm khoản nợ đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"liabilities-grid",children:a.map(x=>t.jsxs(he,{className:`liability-card ${x.isOverdue?"liability-card--overdue":""}`,onClick:()=>_(x),children:[t.jsxs("div",{className:"liability-header",children:[t.jsx("h3",{className:"liability-name",children:x.counterpartyName}),t.jsx(ke,{variant:x.status==="PAID"?"default":x.isOverdue?"destructive":"secondary",className:`status-badge status-badge--${x.status.toLowerCase()}`,children:se(x.status)})]}),t.jsxs("div",{className:"liability-details",children:[t.jsxs("div",{children:["Số tiền: ",ae(x.amount,x.currency)]}),t.jsxs("div",{children:["Đã trả: ",ae(x.paidAmount??0,x.currency)]}),t.jsxs("div",{children:["Còn lại: ",ae(x.remainingAmount??0,x.currency)]}),x.dueAt&&t.jsxs("div",{children:["Hạn thanh toán: ",ue(x.dueAt)]}),x.note&&t.jsxs("div",{children:["Ghi chú: ",x.note]})]}),t.jsx("div",{className:"liability-amount",children:ae(x.remainingAmount??0,x.currency)}),t.jsxs("div",{className:"liability-actions",onClick:W=>W.stopPropagation(),children:[t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>_(x),title:"Sửa",children:t.jsx(G,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>fe(x),title:"Xóa",children:t.jsx(G,{icon:"Delete",size:16,color:"currentColor"})})]})]},x.id))}),l&&l.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsx(H,{variant:"outline",className:`pagination-button ${l.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>N(l.page-1),disabled:!l.hasPrevious,children:"← Trước"}),t.jsxs("span",{children:["Trang ",l.page+1," / ",l.totalPages]}),t.jsx(H,{variant:"outline",className:`pagination-button ${l.hasNext?"":"pagination-button--disabled"}`,onClick:()=>N(l.page+1),disabled:!l.hasNext,children:"Sau →"})]})]})]}),t.jsx(Rt,{open:b,onOpenChange:x=>!x&&Y(),children:t.jsxs(Xm,{className:"modal-content",children:[t.jsxs(mt,{children:[t.jsx(ht,{className:"modal-title",children:v?"Sửa khoản nợ":"Thêm khoản nợ"}),t.jsx(yt,{children:v?"Cập nhật thông tin khoản nợ":"Thêm khoản nợ mới vào danh sách"})]}),v&&t.jsxs("div",{className:"settlement-section",children:[t.jsxs("div",{className:"settlement-header",children:[t.jsx("h3",{className:"settlement-title",children:"Lịch sử trả nợ"}),t.jsx("p",{className:"settlement-subtitle",children:"Xem các lần bạn đã trả tiền cho khoản nợ này."})]}),t.jsx("div",{className:"settlement-history",children:R?t.jsx("div",{className:"settlement-loading",children:"Đang tải lịch sử trả nợ..."}):j.length===0?t.jsx("div",{className:"settlement-empty",children:"Chưa có lần trả nợ nào."}):t.jsx("div",{className:"settlement-list",children:j.map(x=>t.jsxs("div",{className:"settlement-item",children:[t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Số tiền"}),t.jsx("span",{className:"settlement-value",children:ae(x.amount,x.currency)})]}),t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Ngày"}),t.jsx("span",{className:"settlement-value",children:ue(x.occurredAt)})]}),x.note&&t.jsxs("div",{className:"settlement-row",children:[t.jsx("span",{className:"settlement-label",children:"Ghi chú"}),t.jsx("span",{className:"settlement-value",children:x.note})]})]},x.id))})}),t.jsxs("div",{className:"settlement-form",children:[t.jsx("h4",{className:"settlement-form-title",children:"Trả nợ một phần"}),t.jsxs("div",{className:"settlement-form-grid",children:[t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(U,{className:"label",children:"Số tiền *"}),t.jsx(Et,{className:"input",value:k.amount,onChange:x=>P({...k,amount:x}),placeholder:"0"})]}),t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(U,{className:"label",children:"Tài khoản trả"}),t.jsxs(we,{value:k.accountId||void 0,onValueChange:x=>P({...k,accountId:x||""}),children:[t.jsx(ye,{className:"select settlement-account-select",children:t.jsx($e,{placeholder:"Không có tài khoản"})}),t.jsx(xe,{children:o.map(x=>t.jsx(Z,{value:x.id,children:x.name},x.id))})]})]}),t.jsxs("div",{className:"settlement-form-field",children:[t.jsx(U,{className:"label",children:"Ngày trả"}),t.jsx(oe,{className:"input",type:"date",value:k.occurredAt,onChange:x=>P({...k,occurredAt:x.target.value})})]})]}),t.jsxs("div",{className:"settlement-form-note",children:[t.jsx(U,{className:"label",children:"Ghi chú"}),t.jsx(He,{value:k.note,onChange:x=>P({...k,note:x.target.value}),placeholder:"Ví dụ: Trả lần 1, chuyển khoản...",rows:2})]}),t.jsx("div",{className:"settlement-form-actions",children:t.jsx(H,{type:"button",className:"settlement-submit-button",disabled:E,onClick:D,children:E?"Đang ghi nhận...":"Ghi nhận lần trả này"})})]})]}),t.jsxs("form",{className:"form",onSubmit:Q,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Tên chủ nợ *"}),t.jsx(oe,{className:"input",type:"text",value:S.counterpartyName,onChange:x=>O({...S,counterpartyName:x.target.value}),placeholder:"Nhập tên chủ nợ",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Số tiền *"}),t.jsx(Et,{className:"input",value:S.amount,onChange:x=>O({...S,amount:x}),placeholder:"0",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Tiền tệ"}),t.jsxs(we,{value:S.currency,onValueChange:x=>O({...S,currency:x}),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"VND",children:"VND (₫)"}),t.jsx(Z,{value:"USD",children:"USD ($)"}),t.jsx(Z,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Tài khoản trả tiền"}),t.jsxs(we,{value:S.accountId||void 0,onValueChange:x=>O({...S,accountId:x||""}),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{placeholder:"Không có tài khoản"})}),t.jsx(xe,{children:o.map(x=>t.jsx(Z,{value:x.id,children:x.name},x.id))})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Ngày vay"}),t.jsx(oe,{className:"input",type:"date",value:S.occurredAt||"",onChange:x=>O({...S,occurredAt:x.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Hạn thanh toán"}),t.jsx(oe,{className:"input",type:"date",value:S.dueAt||"",onChange:x=>O({...S,dueAt:x.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Ghi chú"}),t.jsx(He,{value:S.note||"",onChange:x=>O({...S,note:x.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),t.jsxs(ft,{className:"button-group",children:[t.jsx(H,{variant:"outline",type:"button",onClick:Y,disabled:m,className:"cancel-button",children:"Hủy"}),t.jsx(H,{type:"submit",disabled:m,className:`submit-button ${m?"submit-button--loading":""}`,children:m?"Đang lưu...":v?"Lưu thay đổi":"Tạo khoản nợ"})]})]})]})})]})},kr=me.div`
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
`,Xm=me(gt)`
  max-height: 90vh;
  max-width: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

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
        font-size: ${({theme:e})=>e.typography.fontSize.base};
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
`,Zm=()=>{const[e,o]=s.useState([]),[n,r]=s.useState(null),[a,i]=s.useState(0),[l,c]=s.useState(!0),[d,u]=s.useState(null),[p,g]=s.useState(!1),[b,$]=s.useState(null),[v,y]=s.useState(!1),[m,w]=s.useState(0),[h,N]=s.useState({name:"",type:"OTHER",estimatedValue:void 0,currency:"VND",acquiredAt:"",note:""}),j=s.useRef({}),f=s.useRef(!1),R=s.useCallback(async(C=0,F=!1)=>{if(!(j.current[C]&&!F||f.current)){f.current=!0,c(!0),u(null),j.current[C]=!0;try{const[_,Y]=await Promise.all([q.assets.getAll(C,10),q.assets.getTotalValue().catch(()=>0)]);o(_.content),r(_),i(Y??0)}catch(_){u(de(_)),j.current[C]=!1}finally{f.current=!1,c(!1)}}},[]);s.useEffect(()=>{R(m)},[m,R]);const A=C=>{C?($(C),N({name:C.name,type:C.type,estimatedValue:C.estimatedValue,currency:C.currency,acquiredAt:C.acquiredAt?C.acquiredAt.split("T")[0]:"",note:C.note||""})):($(null),N({name:"",type:"OTHER",estimatedValue:void 0,currency:"VND",acquiredAt:"",note:""})),g(!0)},E=()=>{g(!1),$(null),N({name:"",type:"OTHER",estimatedValue:void 0,currency:"VND",acquiredAt:"",note:""})},I=async C=>{C.preventDefault(),u(null),y(!0);try{if(b){const F={name:h.name,type:h.type,acquiredAt:h.acquiredAt?new Date(h.acquiredAt).toISOString():void 0,estimatedValue:h.estimatedValue||void 0,currency:h.currency,note:h.note||void 0};await q.assets.update(b.id,F)}else{const F={name:h.name,type:h.type,acquiredAt:h.acquiredAt?new Date(h.acquiredAt).toISOString():void 0,estimatedValue:h.estimatedValue||void 0,currency:h.currency,note:h.note||void 0};await q.assets.create(F)}await R(m,!0),E()}catch(F){u(de(F))}finally{y(!1)}},S=async C=>{if(window.confirm(`Bạn có chắc muốn xóa tài sản "${C.name}"?`))try{await q.assets.delete(C.id),await R(m,!0)}catch(F){u(de(F))}},O=(C,F="VND")=>C==null?"Chưa có":new Intl.NumberFormat("vi-VN",{style:"currency",currency:F}).format(C),k=C=>new Date(C).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"}),P=C=>({CASH:"Tiền mặt",ITEM:"Vật phẩm",DEVICE:"Thiết bị",OTHER:"Khác"})[C]||C;return l&&e.length===0?t.jsxs(Cr,{className:"assets-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Tài sản"}),t.jsxs(H,{onClick:()=>A(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài sản"})]})]}),t.jsxs("div",{className:"loading-state",children:[t.jsx(ve,{className:"h-8 w-48 mb-4"}),t.jsx(ve,{className:"h-32 w-full"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(Cr,{className:"assets-wrapper",children:[t.jsxs("div",{className:"header",children:[t.jsx("h1",{className:"title",children:"Tài sản"}),t.jsxs(H,{onClick:()=>A(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài sản"})]})]}),d&&t.jsx(at,{variant:"destructive",children:t.jsx(st,{children:d})}),a>0&&t.jsxs(he,{className:"summary-card",children:[t.jsx("h3",{className:"summary-title",children:"Tổng giá trị tài sản"}),t.jsx("div",{className:"summary-value",children:O(a,"VND")})]}),e.length===0?t.jsxs("div",{className:"empty-state",children:[t.jsx("p",{children:"Chưa có tài sản nào"}),t.jsxs(H,{onClick:()=>A(),className:"gap-2",children:[t.jsx(G,{icon:"Add",size:18,color:"currentColor"}),t.jsx("span",{children:"Thêm tài sản đầu tiên"})]})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"assets-grid",children:e.map(C=>t.jsxs(he,{className:"asset-card",onClick:()=>A(C),children:[t.jsxs("div",{className:"asset-header",children:[t.jsx("h3",{className:"asset-name",children:C.name}),t.jsx(ke,{variant:"secondary",className:`type-badge type-badge--${C.type.toLowerCase()}`,children:P(C.type)})]}),t.jsxs("div",{className:"asset-details",children:[C.estimatedValue!==void 0&&t.jsxs("div",{children:["Giá trị ước tính: ",O(C.estimatedValue,C.currency)]}),C.acquiredAt&&t.jsxs("div",{children:["Ngày mua: ",k(C.acquiredAt)]}),C.note&&t.jsxs("div",{children:["Ghi chú: ",C.note]})]}),C.estimatedValue!==void 0&&t.jsx("div",{className:"asset-value",children:O(C.estimatedValue,C.currency)}),t.jsxs("div",{className:"asset-actions",onClick:F=>F.stopPropagation(),children:[t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>A(C),title:"Sửa",children:t.jsx(G,{icon:"Edit",size:16,color:"currentColor"})}),t.jsx(H,{variant:"ghost",size:"icon",className:"icon-button",onClick:()=>S(C),title:"Xóa",children:t.jsx(G,{icon:"Delete",size:16,color:"currentColor"})})]})]},C.id))}),n&&n.totalPages>1&&t.jsxs("div",{className:"pagination",children:[t.jsx(H,{variant:"outline",className:`pagination-button ${n.hasPrevious?"":"pagination-button--disabled"}`,onClick:()=>w(n.page-1),disabled:!n.hasPrevious,children:"← Trước"}),t.jsxs("span",{children:["Trang ",n.page+1," / ",n.totalPages]}),t.jsx(H,{variant:"outline",className:`pagination-button ${n.hasNext?"":"pagination-button--disabled"}`,onClick:()=>w(n.page+1),disabled:!n.hasNext,children:"Sau →"})]})]})]}),t.jsx(Rt,{open:p,onOpenChange:C=>!C&&E(),children:t.jsxs(Qm,{className:"modal-content",children:[t.jsxs(mt,{children:[t.jsx(ht,{className:"modal-title",children:b?"Sửa tài sản":"Thêm tài sản"}),t.jsx(yt,{children:b?"Cập nhật thông tin tài sản của bạn":"Thêm tài sản mới vào danh sách"})]}),t.jsxs("form",{className:"form",onSubmit:I,children:[t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Tên tài sản *"}),t.jsx(oe,{className:"input",type:"text",value:h.name,onChange:C=>N({...h,name:C.target.value}),placeholder:"Nhập tên tài sản",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Loại tài sản *"}),t.jsxs(we,{value:h.type,onValueChange:C=>N({...h,type:C}),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"CASH",children:"Tiền mặt"}),t.jsx(Z,{value:"ITEM",children:"Vật phẩm"}),t.jsx(Z,{value:"DEVICE",children:"Thiết bị"}),t.jsx(Z,{value:"OTHER",children:"Khác"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Giá trị ước tính"}),t.jsx(oe,{className:"input",type:"number",step:"0.01",min:"0",value:h.estimatedValue||"",onChange:C=>N({...h,estimatedValue:C.target.value?parseFloat(C.target.value):void 0}),placeholder:"0"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Tiền tệ"}),t.jsxs(we,{value:h.currency,onValueChange:C=>N({...h,currency:C}),children:[t.jsx(ye,{className:"select",children:t.jsx($e,{})}),t.jsxs(xe,{children:[t.jsx(Z,{value:"VND",children:"VND (₫)"}),t.jsx(Z,{value:"USD",children:"USD ($)"}),t.jsx(Z,{value:"EUR",children:"EUR (€)"})]})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Ngày mua"}),t.jsx(oe,{className:"input",type:"date",value:h.acquiredAt||"",onChange:C=>N({...h,acquiredAt:C.target.value})})]}),t.jsxs("div",{className:"form-group",children:[t.jsx(U,{className:"label",children:"Ghi chú"}),t.jsx(He,{value:h.note||"",onChange:C=>N({...h,note:C.target.value}),placeholder:"Thêm ghi chú...",rows:3})]}),t.jsxs(ft,{className:"button-group",children:[t.jsx(H,{variant:"outline",type:"button",onClick:E,disabled:v,className:"cancel-button",children:"Hủy"}),t.jsx(H,{type:"submit",disabled:v,className:`submit-button ${v?"submit-button--loading":""}`,children:v?"Đang lưu...":b?"Lưu thay đổi":"Tạo tài sản"})]})]})]})})]})},Cr=me.div`
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
`,Qm=me(gt)`
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
`,Jm=()=>{const{user:e}=vo(),[o,n]=s.useState(!1),r=async()=>{n(!0);try{alert("Tính năng sync đang được phát triển")}catch(a){console.error("Sync error:",a)}finally{n(!1)}};return t.jsxs(ef,{className:"settings-wrapper",children:[t.jsx("h1",{className:"title",children:"Cài đặt"}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{className:"section-title",children:"Thông tin tài khoản"}),t.jsx(he,{className:"card",children:t.jsxs(Ce,{className:"p-6",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Email"}),t.jsx("span",{className:"info-value",children:(e==null?void 0:e.email)||"-"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Họ tên"}),t.jsx("span",{className:"info-value",children:(e==null?void 0:e.fullName)||"-"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Trạng thái"}),t.jsx(ke,{variant:(e==null?void 0:e.status)==="ACTIVE"?"default":"secondary",className:`status-badge status-badge--${(e==null?void 0:e.status)==="ACTIVE"?"active":"inactive"}`,children:(e==null?void 0:e.status)||"UNKNOWN"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Vai trò"}),t.jsx("span",{className:"info-value",children:(e==null?void 0:e.role)||"-"})]})]})})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{className:"section-title",children:"Đồng bộ dữ liệu"}),t.jsx(he,{className:"card",children:t.jsxs(Ce,{className:"p-6",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"Trạng thái"}),t.jsx(ke,{variant:"default",className:"status-badge status-badge--active",children:"Đã kết nối"})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"API Environment"}),t.jsx("span",{className:"info-value",children:Pn.MODE})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:"API Base URL"}),t.jsx("span",{className:"info-value",style:{fontSize:"12px",wordBreak:"break-all"},children:Pn.BASE_URL})]}),t.jsx("div",{style:{marginTop:"16px"},children:t.jsx(H,{className:"sync-button",onClick:r,disabled:o,children:o?"Đang đồng bộ...":"🔄 Đồng bộ ngay"})})]})})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{className:"section-title",children:"Quản lý"}),t.jsx(he,{className:"card",children:t.jsxs(Ce,{className:"p-6",children:[t.jsxs("div",{className:"info-row info-row--clickable",onClick:()=>{window.location.hash="#accounts"},children:[t.jsxs("span",{className:"info-label",style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(G,{icon:"Accounts",size:16,color:"currentColor"}),t.jsx("span",{children:"Tài khoản"})]}),t.jsx("span",{className:"info-value",children:"→"})]}),t.jsxs("div",{className:"info-row info-row--clickable",onClick:()=>{window.location.hash="#categories"},children:[t.jsxs("span",{className:"info-label",style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(G,{icon:"Categories",size:16,color:"currentColor"}),t.jsx("span",{children:"Danh mục"})]}),t.jsx("span",{className:"info-value",children:"→"})]})]})})]})]})},ef=me.div`
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
`;var In="ToastProvider",[Rn,tf,of]=za("Toast"),[Ws]=Ht("Toast",[of]),[nf,Ro]=Ws(In),Vs=e=>{const{__scopeToast:o,label:n="Notification",duration:r=5e3,swipeDirection:a="right",swipeThreshold:i=50,children:l}=e,[c,d]=s.useState(null),[u,p]=s.useState(0),g=s.useRef(!1),b=s.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${In}\`. Expected non-empty \`string\`.`),t.jsx(Rn.Provider,{scope:o,children:t.jsx(nf,{scope:o,label:n,duration:r,swipeDirection:a,swipeThreshold:i,toastCount:u,viewport:c,onViewportChange:d,onToastAdd:s.useCallback(()=>p($=>$+1),[]),onToastRemove:s.useCallback(()=>p($=>$-1),[]),isFocusedToastEscapeKeyDownRef:g,isClosePausedRef:b,children:l})})};Vs.displayName=In;var Bs="ToastViewport",rf=["F8"],sn="toast.viewportPause",ln="toast.viewportResume",Hs=s.forwardRef((e,o)=>{const{__scopeToast:n,hotkey:r=rf,label:a="Notifications ({hotkey})",...i}=e,l=Ro(Bs,n),c=tf(n),d=s.useRef(null),u=s.useRef(null),p=s.useRef(null),g=s.useRef(null),b=be(o,g,l.onViewportChange),$=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=l.toastCount>0;s.useEffect(()=>{const m=w=>{var N;r.length!==0&&r.every(j=>w[j]||w.code===j)&&((N=g.current)==null||N.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[r]),s.useEffect(()=>{const m=d.current,w=g.current;if(v&&m&&w){const h=()=>{if(!l.isClosePausedRef.current){const R=new CustomEvent(sn);w.dispatchEvent(R),l.isClosePausedRef.current=!0}},N=()=>{if(l.isClosePausedRef.current){const R=new CustomEvent(ln);w.dispatchEvent(R),l.isClosePausedRef.current=!1}},j=R=>{!m.contains(R.relatedTarget)&&N()},f=()=>{m.contains(document.activeElement)||N()};return m.addEventListener("focusin",h),m.addEventListener("focusout",j),m.addEventListener("pointermove",h),m.addEventListener("pointerleave",f),window.addEventListener("blur",h),window.addEventListener("focus",N),()=>{m.removeEventListener("focusin",h),m.removeEventListener("focusout",j),m.removeEventListener("pointermove",h),m.removeEventListener("pointerleave",f),window.removeEventListener("blur",h),window.removeEventListener("focus",N)}}},[v,l.isClosePausedRef]);const y=s.useCallback(({tabbingDirection:m})=>{const h=c().map(N=>{const j=N.ref.current,f=[j,...xf(j)];return m==="forwards"?f:f.reverse()});return(m==="forwards"?h.reverse():h).flat()},[c]);return s.useEffect(()=>{const m=g.current;if(m){const w=h=>{var f,R,A;const N=h.altKey||h.ctrlKey||h.metaKey;if(h.key==="Tab"&&!N){const E=document.activeElement,I=h.shiftKey;if(h.target===m&&I){(f=u.current)==null||f.focus();return}const k=y({tabbingDirection:I?"backwards":"forwards"}),P=k.findIndex(C=>C===E);Ko(k.slice(P+1))?h.preventDefault():I?(R=u.current)==null||R.focus():(A=p.current)==null||A.focus()}};return m.addEventListener("keydown",w),()=>m.removeEventListener("keydown",w)}},[c,y]),t.jsxs(Hd,{ref:d,role:"region","aria-label":a.replace("{hotkey}",$),tabIndex:-1,style:{pointerEvents:v?void 0:"none"},children:[v&&t.jsx(cn,{ref:u,onFocusFromOutsideViewport:()=>{const m=y({tabbingDirection:"forwards"});Ko(m)}}),t.jsx(Rn.Slot,{scope:n,children:t.jsx(pe.ol,{tabIndex:-1,...i,ref:b})}),v&&t.jsx(cn,{ref:p,onFocusFromOutsideViewport:()=>{const m=y({tabbingDirection:"backwards"});Ko(m)}})]})});Hs.displayName=Bs;var Ys="ToastFocusProxy",cn=s.forwardRef((e,o)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...a}=e,i=Ro(Ys,n);return t.jsx(En,{tabIndex:0,...a,ref:o,style:{position:"fixed"},onFocus:l=>{var u;const c=l.relatedTarget;!((u=i.viewport)!=null&&u.contains(c))&&r()}})});cn.displayName=Ys;var qt="Toast",af="toast.swipeStart",sf="toast.swipeMove",lf="toast.swipeCancel",cf="toast.swipeEnd",Us=s.forwardRef((e,o)=>{const{forceMount:n,open:r,defaultOpen:a,onOpenChange:i,...l}=e,[c,d]=go({prop:r,defaultProp:a??!0,onChange:i,caller:qt});return t.jsx(Yt,{present:n||c,children:t.jsx(pf,{open:c,...l,ref:o,onClose:()=>d(!1),onPause:Le(e.onPause),onResume:Le(e.onResume),onSwipeStart:ce(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ce(e.onSwipeMove,u=>{const{x:p,y:g}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${p}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${g}px`)}),onSwipeCancel:ce(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ce(e.onSwipeEnd,u=>{const{x:p,y:g}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${p}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${g}px`),d(!1)})})})});Us.displayName=qt;var[df,uf]=Ws(qt,{onClose(){}}),pf=s.forwardRef((e,o)=>{const{__scopeToast:n,type:r="foreground",duration:a,open:i,onClose:l,onEscapeKeyDown:c,onPause:d,onResume:u,onSwipeStart:p,onSwipeMove:g,onSwipeCancel:b,onSwipeEnd:$,...v}=e,y=Ro(qt,n),[m,w]=s.useState(null),h=be(o,C=>w(C)),N=s.useRef(null),j=s.useRef(null),f=a||y.duration,R=s.useRef(0),A=s.useRef(f),E=s.useRef(0),{onToastAdd:I,onToastRemove:S}=y,O=Le(()=>{var F;(m==null?void 0:m.contains(document.activeElement))&&((F=y.viewport)==null||F.focus()),l()}),k=s.useCallback(C=>{!C||C===1/0||(window.clearTimeout(E.current),R.current=new Date().getTime(),E.current=window.setTimeout(O,C))},[O]);s.useEffect(()=>{const C=y.viewport;if(C){const F=()=>{k(A.current),u==null||u()},_=()=>{const Y=new Date().getTime()-R.current;A.current=A.current-Y,window.clearTimeout(E.current),d==null||d()};return C.addEventListener(sn,_),C.addEventListener(ln,F),()=>{C.removeEventListener(sn,_),C.removeEventListener(ln,F)}}},[y.viewport,f,d,u,k]),s.useEffect(()=>{i&&!y.isClosePausedRef.current&&k(f)},[i,f,y.isClosePausedRef,k]),s.useEffect(()=>(I(),()=>S()),[I,S]);const P=s.useMemo(()=>m?Js(m):null,[m]);return y.viewport?t.jsxs(t.Fragment,{children:[P&&t.jsx(gf,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite",children:P}),t.jsx(df,{scope:n,onClose:O,children:Vt.createPortal(t.jsx(Rn.ItemSlot,{scope:n,children:t.jsx(Bd,{asChild:!0,onEscapeKeyDown:ce(c,()=>{y.isFocusedToastEscapeKeyDownRef.current||O(),y.isFocusedToastEscapeKeyDownRef.current=!1}),children:t.jsx(pe.li,{tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":y.swipeDirection,...v,ref:h,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ce(e.onKeyDown,C=>{C.key==="Escape"&&(c==null||c(C.nativeEvent),C.nativeEvent.defaultPrevented||(y.isFocusedToastEscapeKeyDownRef.current=!0,O()))}),onPointerDown:ce(e.onPointerDown,C=>{C.button===0&&(N.current={x:C.clientX,y:C.clientY})}),onPointerMove:ce(e.onPointerMove,C=>{if(!N.current)return;const F=C.clientX-N.current.x,_=C.clientY-N.current.y,Y=!!j.current,D=["left","right"].includes(y.swipeDirection),Q=["left","up"].includes(y.swipeDirection)?Math.min:Math.max,fe=D?Q(0,F):0,ae=D?0:Q(0,_),ue=C.pointerType==="touch"?10:2,se={x:fe,y:ae},x={originalEvent:C,delta:se};Y?(j.current=se,ro(sf,g,x,{discrete:!1})):Er(se,y.swipeDirection,ue)?(j.current=se,ro(af,p,x,{discrete:!1}),C.target.setPointerCapture(C.pointerId)):(Math.abs(F)>ue||Math.abs(_)>ue)&&(N.current=null)}),onPointerUp:ce(e.onPointerUp,C=>{const F=j.current,_=C.target;if(_.hasPointerCapture(C.pointerId)&&_.releasePointerCapture(C.pointerId),j.current=null,N.current=null,F){const Y=C.currentTarget,D={originalEvent:C,delta:F};Er(F,y.swipeDirection,y.swipeThreshold)?ro(cf,$,D,{discrete:!0}):ro(lf,b,D,{discrete:!0}),Y.addEventListener("click",Q=>Q.preventDefault(),{once:!0})}})})})}),y.viewport)})]}):null}),gf=e=>{const{__scopeToast:o,children:n,...r}=e,a=Ro(qt,o),[i,l]=s.useState(!1),[c,d]=s.useState(!1);return hf(()=>l(!0)),s.useEffect(()=>{const u=window.setTimeout(()=>d(!0),1e3);return()=>window.clearTimeout(u)},[]),c?null:t.jsx($o,{asChild:!0,children:t.jsx(En,{...r,children:i&&t.jsxs(t.Fragment,{children:[a.label," ",n]})})})},mf="ToastTitle",qs=s.forwardRef((e,o)=>{const{__scopeToast:n,...r}=e;return t.jsx(pe.div,{...r,ref:o})});qs.displayName=mf;var ff="ToastDescription",Ks=s.forwardRef((e,o)=>{const{__scopeToast:n,...r}=e;return t.jsx(pe.div,{...r,ref:o})});Ks.displayName=ff;var Gs="ToastAction",Xs=s.forwardRef((e,o)=>{const{altText:n,...r}=e;return n.trim()?t.jsx(Qs,{altText:n,asChild:!0,children:t.jsx(zn,{...r,ref:o})}):(console.error(`Invalid prop \`altText\` supplied to \`${Gs}\`. Expected non-empty \`string\`.`),null)});Xs.displayName=Gs;var Zs="ToastClose",zn=s.forwardRef((e,o)=>{const{__scopeToast:n,...r}=e,a=uf(Zs,n);return t.jsx(Qs,{asChild:!0,children:t.jsx(pe.button,{type:"button",...r,ref:o,onClick:ce(e.onClick,a.onClose)})})});zn.displayName=Zs;var Qs=s.forwardRef((e,o)=>{const{__scopeToast:n,altText:r,...a}=e;return t.jsx(pe.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...a,ref:o})});function Js(e){const o=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&o.push(r.textContent),yf(r)){const a=r.ariaHidden||r.hidden||r.style.display==="none",i=r.dataset.radixToastAnnounceExclude==="";if(!a)if(i){const l=r.dataset.radixToastAnnounceAlt;l&&o.push(l)}else o.push(...Js(r))}}),o}function ro(e,o,n,{discrete:r}){const a=n.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});o&&a.addEventListener(e,o,{once:!0}),r?Zr(a,i):a.dispatchEvent(i)}var Er=(e,o,n=0)=>{const r=Math.abs(e.x),a=Math.abs(e.y),i=r>a;return o==="left"||o==="right"?i&&r>n:!i&&a>n};function hf(e=()=>{}){const o=Le(e);Ee(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(o)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[o])}function yf(e){return e.nodeType===e.ELEMENT_NODE}function xf(e){const o=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)o.push(n.currentNode);return o}function Ko(e){const o=document.activeElement;return e.some(n=>n===o?!0:(n.focus(),document.activeElement!==o))}var bf=Vs,ei=Hs,ti=Us,oi=qs,ni=Ks,ri=Xs,ai=zn;const vf=bf,si=s.forwardRef(({className:e,...o},n)=>t.jsx(ei,{ref:n,className:le("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...o}));si.displayName=ei.displayName;const wf=Bt("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),ii=s.forwardRef(({className:e,variant:o,...n},r)=>t.jsx(ti,{ref:r,className:le(wf({variant:o}),e),...n}));ii.displayName=ti.displayName;const $f=s.forwardRef(({className:e,...o},n)=>t.jsx(ri,{ref:n,className:le("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...o}));$f.displayName=ri.displayName;const li=s.forwardRef(({className:e,...o},n)=>t.jsx(ai,{ref:n,className:le("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...o,children:t.jsx(pn,{className:"h-4 w-4"})}));li.displayName=ai.displayName;const ci=s.forwardRef(({className:e,...o},n)=>t.jsx(oi,{ref:n,className:le("text-sm font-semibold",e),...o}));ci.displayName=oi.displayName;const di=s.forwardRef(({className:e,...o},n)=>t.jsx(ni,{ref:n,className:le("text-sm opacity-90",e),...o}));di.displayName=ni.displayName;function Nf(){const{toasts:e}=Fs();return t.jsxs(vf,{children:[e.map(function({id:o,title:n,description:r,action:a,...i}){return t.jsxs(ii,{...i,children:[t.jsxs("div",{className:"grid gap-1",children:[n&&t.jsx(ci,{children:n}),r&&t.jsx(di,{children:r})]}),a,t.jsx(li,{})]},o)}),t.jsx(si,{})]})}const ui=s.createContext(null),qe=()=>{const e=s.useContext(ui);if(!e)throw new Error("useWalletAppRouter must be used within WalletAppRouter");return e},jf=()=>{const{isAuthenticated:e,isLoading:o}=vo(),n=()=>{if(typeof window<"u"){const u=window.location.hash.slice(1);if(["login","register","verify-email","dashboard","transactions","transactions/add","transactions/edit","accounts","categories","budgets","receivables","liabilities","assets","settings"].includes(u))return u}return e?"dashboard":"login"},[r,a]=s.useState(n);s.useEffect(()=>{typeof window<"u"&&(window.location.hash=r)},[r]),s.useEffect(()=>{const u=()=>{const p=window.location.hash.slice(1);["login","register","verify-email","dashboard","transactions","transactions/add","transactions/edit","accounts","categories","budgets","receivables","liabilities","assets","settings"].includes(p)&&a(p)};return window.addEventListener("hashchange",u),()=>window.removeEventListener("hashchange",u)},[]);const i=u=>{a(u)};s.useEffect(()=>{const u=["login","register","verify-email"];!e&&!u.includes(r)?a("login"):e&&u.includes(r)&&a("dashboard")},[e,r]);const l=()=>{switch(r){case"login":return t.jsx(pc,{});case"register":return t.jsx(mc,{});case"verify-email":return t.jsx(hc,{});case"dashboard":return t.jsx(wr,{});case"transactions":return t.jsx(Om,{});case"transactions/add":return t.jsx(Fm,{});case"transactions/edit":return t.jsx(Vm,{});case"accounts":return t.jsx(Bm,{});case"categories":return t.jsx(Hm,{});case"budgets":return t.jsx(Um,{});case"receivables":return t.jsx(qm,{});case"liabilities":return t.jsx(Gm,{});case"assets":return t.jsx(Zm,{});case"settings":return t.jsx(Jm,{});default:return t.jsx(wr,{})}};if(o)return t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#0a0a0a"},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[t.jsx("div",{style:{width:"48px",height:"48px",border:"3px solid rgba(14, 165, 233, 0.2)",borderTopColor:"#0ea5e9",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),t.jsx("style",{children:`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}),t.jsx("span",{style:{color:"#a3a3a3",fontSize:"14px",fontWeight:500},children:"Đang tải..."})]})});const d=["login","register","verify-email"].includes(r);return t.jsxs(ui.Provider,{value:{currentRoute:r,navigate:i},children:[d?l():t.jsx(dc,{children:l()}),t.jsx(Nf,{})]})},Cf=()=>t.jsx(ki,{children:t.jsx(jf,{})});export{Cf as default,qe as useWalletAppRouter};
