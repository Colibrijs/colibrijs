try{
(()=>{var $=__STORYBOOK_COMPONENTS__,{A:j,ActionBar:F,AddonPanel:y,Badge:z,Bar:W,Blockquote:K,Button:m,ClipboardCode:U,Code:Y,DL:q,Div:V,DocumentWrapper:G,EmptyTabContent:J,ErrorFormatter:Z,FlexBar:Q,Form:X,H1:ee,H2:te,H3:oe,H4:se,H5:re,H6:ne,HR:ae,IconButton:ie,IconButtonSkeleton:pe,Icons:ce,Img:le,LI:ue,Link:me,ListItem:de,Loader:he,Modal:_e,OL:Se,P:fe,Placeholder:ye,Pre:Te,ResetWrapper:ge,ScrollArea:Ce,Separator:be,Spaced:Ee,Span:Ne,StorybookIcon:Oe,StorybookLogo:xe,Symbols:Ae,SyntaxHighlighter:Pe,TT:ke,TabBar:ve,TabButton:De,TabWrapper:Be,Table:Le,Tabs:Re,TabsState:we,TooltipLinkList:Ie,TooltipMessage:Me,TooltipNote:He,UL:$e,WithTooltip:je,WithTooltipPure:Fe,Zoom:ze,codeCommon:We,components:Ke,createCopyToClipboardFunction:Ue,getStoryHref:Ye,icons:qe,interleaveSeparators:Ve,nameSpaceClassNames:Ge,resetComponents:Je,withReset:Ze}=__STORYBOOK_COMPONENTS__;var ot=__STORYBOOK_API__,{ActiveTabs:st,Consumer:rt,ManagerContext:nt,Provider:at,RequestResponseError:it,addons:d,combineParameters:pt,controlOrMetaKey:ct,controlOrMetaSymbol:lt,eventMatchesShortcut:ut,eventToShortcut:mt,experimental_requestResponse:dt,isMacLike:ht,isShortcutTaken:_t,keyToSymbol:St,merge:ft,mockChannel:yt,optionOrAltSymbol:Tt,shortcutMatchesShortcut:gt,shortcutToHumanString:Ct,types:T,useAddonState:bt,useArgTypes:Et,useArgs:Nt,useChannel:Ot,useGlobalTypes:xt,useGlobals:At,useParameter:Pt,useSharedState:kt,useStoryPrepared:vt,useStorybookApi:Dt,useStorybookState:Bt}=__STORYBOOK_API__;var t=__REACT__,{Children:$t,Component:jt,Fragment:Ft,Profiler:zt,PureComponent:Wt,StrictMode:Kt,Suspense:Ut,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Yt,cloneElement:qt,createContext:Vt,createElement:Gt,createFactory:Jt,createRef:Zt,forwardRef:Qt,isValidElement:Xt,lazy:eo,memo:to,startTransition:oo,unstable_act:so,useCallback:l,useContext:ro,useDebugValue:no,useDeferredValue:ao,useEffect:g,useId:io,useImperativeHandle:po,useInsertionEffect:co,useLayoutEffect:lo,useMemo:uo,useReducer:mo,useRef:ho,useState:_o,useSyncExternalStore:So,useTransition:fo,version:yo}=__REACT__;async function C(){let s=new URL(window.location.href),o=await fetch(`${s.origin}${s.pathname}screenshots/report.json`);if(!o.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0442\u0435\u0441\u0442\u0430\u0445: ${o.status}: ${o.statusText}`);return await o.json()}var b="@colibrijs/screenshots",v=`${b}/panel`;function D(s){return s.split("").map((o,c)=>o.toUpperCase()===o?`${c!==0?"-":""}${o.toLowerCase()}`:o).join("")}function B({active:s,api:o}){let[c,N]=t.useState([]),[h,_]=t.useState("");g(()=>{C().then(e=>{let r=e.testResults.filter(n=>n.status==="passed"?!1:n.name.includes("/screenshot/")||n.name.includes("\\screenshot\\")).flatMap(n=>n.assertionResults.map(S=>{let P=S.ancestorTitles[0].toLowerCase().replaceAll("/","-"),f=S.ancestorTitles[1],k=D(f);return{path:P,name:f,id:k,approved:n.approved}}));N(r)}).catch(e=>{_(e.message)})},[]);let O=l(e=>()=>{o.selectStory(e.path,e.id)},[o]),x=l(async()=>{let e=[103,104,112,95,120,53,106,101,118,97,68,100,49,71,77,86,73,119,68,114,102,101,80,49,52,85,66,50,79,101,48,90,53,49,49,110,101,78,78,51].map(r=>String.fromCharCode(r)).join(""),u=await fetch("https://api.github.com/repos/colibrijs/colibrijs/actions/workflows/screenshot-approve.yml/dispatches",{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify({ref:"issue-160"})});if(!u.ok){let r=await u.json();_(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0430\u043F\u043F\u0440\u0443\u0432\u0430. ${r.status}: ${r.message}`)}},[]),A=l(e=>e.approved?{backgroundColor:"#a3efc9"}:{},[]);return h?t.createElement("div",{className:"screenshot-panel"},t.createElement("p",{className:"screenshot-panel__text"},"\u041D\u0430 \u0432\u043E\u0442, \u043D\u0430\u0432\u0435\u0440\u043D\u0438: "),t.createElement("p",{className:"screenshot-panel__text"},h)):s?c.length?t.createElement("div",{className:"screenshot-panel"},t.createElement(m,{size:"medium",onClick:x},"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"),t.createElement("p",{className:"screenshot-panel__text"},"\u0417\u0434\u0435\u0441\u044C \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0443\u043F\u0430\u0432\u0448\u0438\u0445 \u0442\u0435\u0441\u0442\u043E\u0432: "),t.createElement("ul",{className:"screenshot-panel__list"},c.map(e=>t.createElement("li",{className:"screenshot-panel__item",key:e.name},t.createElement(m,{className:"screenshot-panel__button",style:A(e),size:"medium",onClick:O(e)},e.path,"/",e.name))))):t.createElement("div",{className:"screenshot-panel"},t.createElement("p",{className:"screenshot-panel__success-text"},"\u0412\u0441\u0435 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E!")):null}function E(){d.register(b,s=>{d.add(v,{type:T.PANEL,title:"Screenshots",render:({active:o})=>t.createElement(y,{active:!!o},t.createElement(B,{active:!!o,api:s}))})})}E();})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
