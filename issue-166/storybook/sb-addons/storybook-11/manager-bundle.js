try{
(()=>{var Q=Object.create;var B=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var ee=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty;var P=(t,e)=>()=>(t&&(e=t(t=0)),e);var oe=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var re=(t,e,s,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Z(e))!te.call(t,o)&&o!==s&&B(t,o,{get:()=>e[o],enumerable:!(l=X(e,o))||l.enumerable});return t};var se=(t,e,s)=>(s=t!=null?Q(ee(t)):{},re(e||!t||!t.__esModule?B(s,"default",{value:t,enumerable:!0}):s,t));var a=P(()=>{});var i=P(()=>{});var p=P(()=>{});var q=oe((ar,v)=>{a();i();p();(function(){"use strict";var t={}.hasOwnProperty;function e(){for(var o="",c=0;c<arguments.length;c++){var d=arguments[c];d&&(o=l(o,s(d)))}return o}function s(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return e.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var c="";for(var d in o)t.call(o,d)&&o[d]&&(c=l(c,d));return c}function l(o,c){return c?o?o+" "+c:o+c:o}typeof v<"u"&&v.exports?(e.default=e,v.exports=e):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return e}):window.classNames=e})()});a();i();p();a();i();p();a();i();p();a();i();p();var be=__STORYBOOK_COMPONENTS__,{A:ge,ActionBar:xe,AddonPanel:M,Badge:Ne,Bar:Te,Blockquote:Ce,Button:j,ClipboardCode:ve,Code:Ae,DL:Ee,Div:Oe,DocumentWrapper:Pe,EmptyTabContent:De,ErrorFormatter:ke,FlexBar:we,Form:Re,H1:Le,H2:Ie,H3:Be,H4:Me,H5:je,H6:He,HR:Ue,IconButton:$e,IconButtonSkeleton:qe,Icons:Fe,Img:Ye,LI:ze,Link:Ve,ListItem:We,Loader:Ke,Modal:Je,OL:Ge,P:Qe,Placeholder:Xe,Pre:Ze,ResetWrapper:et,ScrollArea:tt,Separator:ot,Spaced:rt,Span:st,StorybookIcon:nt,StorybookLogo:at,Symbols:it,SyntaxHighlighter:pt,TT:ct,TabBar:lt,TabButton:dt,TabWrapper:mt,Table:ut,Tabs:ht,TabsState:ft,TooltipLinkList:St,TooltipMessage:yt,TooltipNote:_t,UL:bt,WithTooltip:gt,WithTooltipPure:xt,Zoom:Nt,codeCommon:Tt,components:Ct,createCopyToClipboardFunction:vt,getStoryHref:At,icons:Et,interleaveSeparators:Ot,nameSpaceClassNames:Pt,resetComponents:Dt,withReset:kt}=__STORYBOOK_COMPONENTS__;a();i();p();var Bt=__STORYBOOK_API__,{ActiveTabs:Mt,Consumer:jt,ManagerContext:Ht,Provider:Ut,RequestResponseError:$t,addons:D,combineParameters:qt,controlOrMetaKey:Ft,controlOrMetaSymbol:Yt,eventMatchesShortcut:zt,eventToShortcut:Vt,experimental_requestResponse:Wt,isMacLike:Kt,isShortcutTaken:Jt,keyToSymbol:Gt,merge:Qt,mockChannel:Xt,optionOrAltSymbol:Zt,shortcutMatchesShortcut:eo,shortcutToHumanString:to,types:H,useAddonState:oo,useArgTypes:ro,useArgs:so,useChannel:no,useGlobalTypes:ao,useGlobals:io,useParameter:po,useSharedState:co,useStoryPrepared:lo,useStorybookApi:mo,useStorybookState:uo}=__STORYBOOK_API__;a();i();p();var r=__REACT__,{Children:go,Component:xo,Fragment:No,Profiler:To,PureComponent:Co,StrictMode:vo,Suspense:Ao,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Eo,cloneElement:Oo,createContext:Po,createElement:Do,createFactory:ko,createRef:wo,forwardRef:Ro,isValidElement:Lo,lazy:Io,memo:Bo,startTransition:Mo,unstable_act:jo,useCallback:b,useContext:Ho,useDebugValue:Uo,useDeferredValue:$o,useEffect:k,useId:qo,useImperativeHandle:Fo,useInsertionEffect:Yo,useLayoutEffect:zo,useMemo:Vo,useReducer:Wo,useRef:Ko,useState:U,useSyncExternalStore:Jo,useTransition:Go,version:Qo}=__REACT__;a();i();p();async function $(){let t=new URL(window.location.href),e=await fetch(`${t.origin}${t.pathname}screenshots/report.json`);if(!e.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0442\u0435\u0441\u0442\u0430\u0445: ${e.status}: ${e.statusText}`);return await e.json()}a();i();p();var z=se(q());var m={panel:"t",tr:"o",thead:"n",approved:"i",th:"r",td:"e",button:"a",checkbox:"s"};a();i();p();a();i();p();var A=null;async function F(t){if(A!==null)return A;let e=`https://api.github.com/repos/colibrijs/colibrijs/issues/${t}/comments`;return A=await(await fetch(e)).json(),A}var ae="\u041D\u0435 \u043D\u0430\u0448\u0435\u043B body \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0441 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u043E\u0432",ie="\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0430\u043F\u0440\u0443\u0432\u043D\u0443\u0442\u044B\u0445 \u0442\u0435\u0441\u0442\u043E\u0432";function pe(t){if(!t.length)return[];let e=t.find(c=>c.body.includes("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u0430\u0445"));if(!e)return[];let{body:s}=e;if(!s)throw new Error(ae);let l=s.replace(/\s+/g," ").trim().match(/<pre id="screenshots-data">(.*?)<\/pre>/);if(!l||!l.length||!l[1])throw new Error(ie);let o=l[1];return JSON.parse(o)}function w(t,e){return t.some(s=>s.name===e.name&&s.path===e.path)}async function Y(){if(isNaN(167))return[];let e=await F(167);return pe(e)}function V({storiesToApprove:t,stories:e,api:s,onChange:l,approvedStories:o}){let c=r.useCallback(n=>()=>s.selectStory(n.path,n.id),[s]),d=b(n=>{let S=t.findIndex(C=>n.path===C.path&&n.name===C.name),x=[...t];x.splice(S,1),l(x)},[l,t]),g=b(n=>{let S=[...t,n];l(S)},[l,t]),T=b(n=>S=>{S.target.checked?g(n):d(n)},[g,d]);return r.createElement("table",{className:m.panel},r.createElement("thead",{className:m.thead},r.createElement("tr",{className:m.tr},r.createElement("th",{className:m.th}),r.createElement("th",{className:m.th},"Name"),r.createElement("th",{className:m.th},"Title"))),r.createElement("tbody",null,e.map(n=>r.createElement("tr",{key:n.path+n.name,className:(0,z.default)(m.tr,{[m.approved]:w(o,n)})},r.createElement("td",{className:m.td},r.createElement("input",{disabled:w(o,n),className:m.checkbox,onChange:T(n),type:"checkbox"})),r.createElement("td",{className:m.td},n.name),r.createElement("td",{className:m.td},r.createElement("button",{className:m.button,onClick:c(n)},n.title))))))}var W="@colibrijs/screenshots",ce=`${W}/panel`;function le(t){return t.split("").map((e,s)=>e.toUpperCase()===e?`${s!==0?"-":""}${e.toLowerCase()}`:e).join("")}function de({active:t,api:e}){let[s,l]=r.useState([]),[o,c]=r.useState([]),[d,g]=r.useState([]),[T,n]=r.useState(""),[S,x]=U(!0);k(()=>{$().then(y=>{let _=y.testResults.filter(N=>N.status==="passed"?!1:N.name.includes("/screenshot/")||N.name.includes("\\screenshot\\")).flatMap(N=>N.assertionResults.map(R=>{let O=R.ancestorTitles[0].toLowerCase().replaceAll("/","-"),L=R.ancestorTitles[1],I=le(L),J=O+"--"+I,G=e.getData(J).name;return{path:O,name:L,id:I,key:O,title:G}}));l(_)}).catch(y=>{n(y.message)}).finally(()=>{x(!1)})},[e]),k(()=>{Y().then(g).catch(y=>n(y.message))},[]);let C=b(async()=>{let y=[103,104,112,95,120,53,106,101,118,97,68,100,49,71,77,86,73,119,68,114,102,101,80,49,52,85,66,50,79,101,48,90,53,49,49,110,101,78,78,51].map(_=>String.fromCharCode(_)).join(""),E=await fetch("https://api.github.com/repos/colibrijs/colibrijs/actions/workflows/screenshot-approve.yml/dispatches",{method:"POST",headers:{Authorization:`Bearer ${y}`,"Content-Type":"application/json"},body:JSON.stringify({ref:"issue-166",inputs:{"pull-request-number":"167","approved-screenshots":JSON.stringify([...d,...o],null,2)}})});if(E.ok)g(d.concat(o)),c([]);else{let _=await E.json();n(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u043F\u043F\u0440\u0443\u0432\u0430. ${_.status}: ${_.message}`)}},[d,o]);return t?T?r.createElement("div",{className:"screenshot-panel"},r.createElement("p",{className:"screenshot-panel__text"},"\u041D\u0430 \u0432\u043E\u0442, \u043D\u0430\u0432\u0435\u0440\u043D\u0438: "),r.createElement("p",{className:"screenshot-panel__text"},T)):S?r.createElement("div",{className:"screenshot-panel"},r.createElement("p",{className:"screenshot-panel__loading-text"},"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0441\u0442\u043E\u0440\u0438\u0441\u0430\u0445...")):s.length?r.createElement("div",{className:"screenshot-panel"},!!o.length&&r.createElement(j,{size:"medium",onClick:C},"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"),r.createElement("p",{className:"screenshot-panel__text"},"\u0417\u0434\u0435\u0441\u044C \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0443\u043F\u0430\u0432\u0448\u0438\u0445 \u0442\u0435\u0441\u0442\u043E\u0432: "),r.createElement(V,{stories:s,api:e,storiesToApprove:o,approvedStories:d,onChange:c})):r.createElement("div",{className:"screenshot-panel"},r.createElement("p",{className:"screenshot-panel__success-text"},"\u0412\u0441\u0435 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!")):null}function K(){D.register(W,t=>{D.add(ce,{type:H.PANEL,title:"Screenshots",render:({active:e})=>r.createElement(M,{active:!!e},r.createElement(de,{active:!!e,api:t}))})})}K();})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
