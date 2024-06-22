"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[1436],{"./components/layout/__stories__/layout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Sidebar:()=>Sidebar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>layout_stories});var typography=__webpack_require__("../../node_modules/antd/es/typography/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),layout=__webpack_require__("../../node_modules/antd/es/layout/index.js"),menu=__webpack_require__("../../node_modules/antd/es/menu/index.js"),layout_module=__webpack_require__("./components/layout/layout.module.css"),layout_sidebar=__webpack_require__("./components/layout/sidebar.tsx"),components_link=__webpack_require__("./components/link/index.ts");function Layout(param){var children=param.children,sidebar=param.sidebar,hasSidebar=(0,react.useMemo)((function(){return Boolean(sidebar)}),[sidebar]),menuItems=(0,react.useMemo)((function(){return[{key:"pages",label:react.createElement(components_link.N,{href:"/pages"},"Страницы")},{key:"components",label:react.createElement(components_link.N,{href:"/components/"},"Компоненты")}]}),[]);return react.createElement(layout.A,{className:layout_module.A.root},react.createElement(layout.A.Header,null,react.createElement(menu.A,{items:menuItems,mode:"horizontal",theme:"dark"})),react.createElement(layout.A,{hasSider:hasSidebar},hasSidebar&&react.createElement(layout_sidebar.B,null,sidebar),react.createElement(layout.A.Content,{className:layout_module.A.content},children)))}Layout.__docgenInfo={description:"",methods:[],displayName:"Layout"};const layout_stories={component:Layout,title:"Layout",args:{children:react.createElement(typography.A.Text,null,"Некий контент")}};var Default={},Sidebar={args:{sidebar:react.createElement(typography.A.Text,null,"Сайдбар")}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Sidebar.parameters={...Sidebar.parameters,docs:{...Sidebar.parameters?.docs,source:{originalSource:"{\n  args: {\n    sidebar: <Typography.Text>Сайдбар</Typography.Text>\n  }\n}",...Sidebar.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Sidebar"]},"../../node_modules/antd/es/style/motion/collapse.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=token=>({[token.componentCls]:{[`${token.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${token.motionDurationMid} ${token.motionEaseInOut},\n        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`}},[`${token.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${token.motionDurationMid} ${token.motionEaseInOut},\n        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`}}})},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".components-layout-layout-module__root {\n  --header-height: 64px;\n}\n\n.components-layout-layout-module__sidebar {\n  padding: 20px 16px;\n}\n\n.components-layout-layout-module__content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n","",{version:3,sources:["webpack://./components/layout/layout.module.css"],names:[],mappings:"AAAA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;EAC9C,aAAa;AACf",sourcesContent:[".root {\n  --header-height: 64px;\n}\n\n.sidebar {\n  padding: 20px 16px;\n}\n\n.content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"components-layout-layout-module__root",sidebar:"components-layout-layout-module__sidebar",content:"components-layout-layout-module__content"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/rc-util/es/KeyCode.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var KeyCode={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function isTextModifyingKeyEvent(e){var keyCode=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||keyCode>=KeyCode.F1&&keyCode<=KeyCode.F12)return!1;switch(keyCode){case KeyCode.ALT:case KeyCode.CAPS_LOCK:case KeyCode.CONTEXT_MENU:case KeyCode.CTRL:case KeyCode.DOWN:case KeyCode.END:case KeyCode.ESC:case KeyCode.HOME:case KeyCode.INSERT:case KeyCode.LEFT:case KeyCode.MAC_FF_META:case KeyCode.META:case KeyCode.NUMLOCK:case KeyCode.NUM_CENTER:case KeyCode.PAGE_DOWN:case KeyCode.PAGE_UP:case KeyCode.PAUSE:case KeyCode.PRINT_SCREEN:case KeyCode.RIGHT:case KeyCode.SHIFT:case KeyCode.UP:case KeyCode.WIN_KEY:case KeyCode.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function isCharacterKey(keyCode){if(keyCode>=KeyCode.ZERO&&keyCode<=KeyCode.NINE)return!0;if(keyCode>=KeyCode.NUM_ZERO&&keyCode<=KeyCode.NUM_MULTIPLY)return!0;if(keyCode>=KeyCode.A&&keyCode<=KeyCode.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===keyCode)return!0;switch(keyCode){case KeyCode.SPACE:case KeyCode.QUESTION_MARK:case KeyCode.NUM_PLUS:case KeyCode.NUM_MINUS:case KeyCode.NUM_PERIOD:case KeyCode.NUM_DIVISION:case KeyCode.SEMICOLON:case KeyCode.DASH:case KeyCode.EQUALS:case KeyCode.COMMA:case KeyCode.PERIOD:case KeyCode.SLASH:case KeyCode.APOSTROPHE:case KeyCode.SINGLE_QUOTE:case KeyCode.OPEN_SQUARE_BRACKET:case KeyCode.BACKSLASH:case KeyCode.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const __WEBPACK_DEFAULT_EXPORT__=KeyCode},"./components/layout/layout.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.module.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"./components/layout/sidebar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Sidebar,g:()=>SIDEBAR_WIDTH});var antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/antd/es/theme/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/config-provider/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_layout_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/layout/layout.module.css"),SIDEBAR_WIDTH=350;function Sidebar(param){var children=param.children,darkTheme=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{algorithm:antd__WEBPACK_IMPORTED_MODULE_2__.A.darkAlgorithm}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Sider,{theme:"dark",width:SIDEBAR_WIDTH,className:_layout_module_css__WEBPACK_IMPORTED_MODULE_1__.A.sidebar},react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.Ay,{theme:darkTheme},children))}Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar"}},"./components/link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var typography=__webpack_require__("../../node_modules/antd/es/typography/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),context=__webpack_require__("./hooks/use-router/context.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Link(_param){var children=_param.children,href=_param.href,attributes=_object_without_properties(_param,["children","href"]),router=function useRouter(){return(0,react.useContext)(context.z)}(),clickHandler=(0,react.useCallback)((function(event){"_blank"!==attributes.target&&event.preventDefault(),router.push(href)}),[attributes,href,router]);return react.createElement(typography.A.Link,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},attributes),{href,onClick:clickHandler}),children)}Link.__docgenInfo={description:"",methods:[],displayName:"Link"}}}]);