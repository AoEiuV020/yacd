var R=Object.defineProperty,w=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var T=(e,t,o)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))N.call(t,o)&&T(e,o,t[o]);if(S)for(var o of S(t))W.call(t,o)&&T(e,o,t[o]);return e},m=(e,t)=>w(e,C(t));import{r as _,b as l,j as a,P as f,d as P,G as k,H as j,w as z,J as I,u as O,C as F,S as M,K as $,L as H,g as A,N as B,h as D,c as E}from"./index.27058ddf.js";import{a as K,F as q}from"./index.esm.f1f118db.js";import{r as G,s as J,f as V}from"./logs.7cc467a0.js";import{d as Y}from"./debounce.d080d5e1.js";import{u as Q}from"./useRemainingViewPortHeight.49042856.js";import{F as U,p as X}from"./Fab.b64825a9.js";import{P as Z,a as ee}from"./play.1bfea717.js";function te(e,t){if(e==null)return{};var o=oe(e,t),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(o[n]=e[n]))}return o}function oe(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,s;for(s=0;s<n.length;s++)r=n[s],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}var x=_.exports.forwardRef(function(e,t){var o=e.color,n=o===void 0?"currentColor":o,r=e.size,s=r===void 0?24:r,g=te(e,["color","size"]);return l("svg",m(p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},g),{children:[a("circle",{cx:"11",cy:"11",r:"8"}),a("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}))});x.propTypes={color:f.string,size:f.oneOfType([f.string,f.number])};x.displayName="Search";var re=x;const ae="_RuleSearch_1gcst_1",ne="_RuleSearchContainer_1gcst_5",se="_inputWrapper_1gcst_10",ce="_input_1gcst_10",ie="_iconWrapper_1gcst_35";var d={RuleSearch:ae,RuleSearchContainer:ne,inputWrapper:se,input:ce,iconWrapper:ie};function le({dispatch:e,searchText:t,updateSearchText:o}){const[n,r]=_.exports.useState(t),s=_.exports.useCallback(i=>{e(o(i))},[e,o]),g=_.exports.useMemo(()=>Y(s,300),[s]),h=i=>{r(i.target.value),g(i.target.value)};return a("div",{className:d.RuleSearch,children:l("div",{className:d.RuleSearchContainer,children:[a("div",{className:d.inputWrapper,children:a("input",{type:"text",value:n,onChange:h,className:d.input})}),a("div",{className:d.iconWrapper,children:a(re,{size:20})})]})})}const ge=e=>({searchText:k(e),updateSearchText:j});var pe=P(ge)(le);const de="_logMeta_1dg5t_1",he="_logType_1dg5t_8",ue="_logTime_1dg5t_18",me="_logText_1dg5t_24",fe="_logsWrapper_1dg5t_37",_e="_logPlaceholder_1dg5t_51",ve="_logPlaceholderIcon_1dg5t_64";var c={logMeta:de,logType:he,logTime:ue,logText:me,logsWrapper:fe,logPlaceholder:_e,logPlaceholderIcon:ve};const{useCallback:b,memo:xe,useEffect:ye}=D,v=30,Se={debug:"#28792c",info:"var(--bg-log-info-tag)",warning:"#b99105",error:"#c11c1c"};function Te({time:e,even:t,payload:o,type:n}){const r=E({even:t},"log");return a("div",{className:r,children:l("div",{className:c.logMeta,children:[a("div",{className:c.logTime,children:e}),a("div",{className:c.logType,style:{backgroundColor:Se[n]},children:n}),a("div",{className:c.logText,children:o})]})})}function be(e,t){return t[e].id}const Pe=xe(({index:e,style:t,data:o})=>{const n=o[e];return a("div",{style:t,children:a(Te,p({},n))})},K);function Le({dispatch:e,logLevel:t,apiConfig:o,logs:n,logStreamingPaused:r}){const s=z(),g=b(()=>{r?G(m(p({},o),{logLevel:t})):J(),s.app.updateAppConfig("logStreamingPaused",!r)},[o,t,r,s.app]),h=b(L=>e(I(L)),[e]);ye(()=>{V(m(p({},o),{logLevel:t}),h)},[o,t,h]);const[i,y]=Q(),{t:u}=O();return l("div",{children:[a(F,{title:u("Logs")}),a(pe,{}),a("div",{ref:i,style:{paddingBottom:v},children:n.length===0?l("div",{className:c.logPlaceholder,style:{height:y-v},children:[a("div",{className:c.logPlaceholderIcon,children:a(M,{width:200,height:200})}),a("div",{children:u("no_logs")})]}):l("div",{className:c.logsWrapper,children:[a(q,{height:y-v,width:"100%",itemCount:n.length,itemSize:80,itemData:n,itemKey:be,children:Pe}),a(U,{icon:r?a(Z,{size:16}):a(ee,{size:16}),mainButtonStyles:r?{background:"#e74c3c"}:{},style:X,text:u(r?"Resume Refresh":"Pause Refresh"),onClick:g})]})})]})}const Re=e=>({logs:$(e),logLevel:H(e),apiConfig:A(e),logStreamingPaused:B(e)});var Oe=P(Re)(Le);export{Oe as default};
