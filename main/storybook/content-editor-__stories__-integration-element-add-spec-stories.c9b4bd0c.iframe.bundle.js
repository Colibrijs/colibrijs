(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[1488,5102],{"./components/content-editor/__stories__/content-editor.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/elements.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/layout/sidebar-decorator.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./components/content-editor/content-editor.tsx").j,title:"ContentEditor",decorators:[_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__.u],args:{content:_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.Ou,onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/content-editor/__stories__/integration-element-add.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AfterIfSelected:()=>AfterIfSelected,AtEndIfNoSelected:()=>AtEndIfNoSelected,HiddenByDefault:()=>HiddenByDefault,HidesOnAdded:()=>HidesOnAdded,HidesOnClose:()=>HidesOnClose,VisibleOnClick:()=>VisibleOnClick,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},__webpack_require__("./components/content-editor/__stories__/content-editor.stories.ts").default),{title:"ContentEditor/tests/integration-element-add"});var HiddenByDefault={name:"Добавление элемента скрыто по умолчанию"},VisibleOnClick={name:'При клике на кнопку "добавить элемент", начинается добавление элемента'},HidesOnClose={name:"Когда добавление элемента отменено, интерфейс добавления скрывается"},HidesOnAdded={name:"Когда добавляется новый элемент, интерфейс добавления скрывается"},AtEndIfNoSelected={name:"Если ни один из элементов не выбран, новый элемент добавляется в конец дерева"},AfterIfSelected={name:"Если один из элементов выбран, новый элемент добавляется после выбранного"};const __namedExportsOrder=["HiddenByDefault","VisibleOnClick","HidesOnClose","HidesOnAdded","AtEndIfNoSelected","AfterIfSelected"]},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./components/layout/sidebar-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>SidebarDecorator});var antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),_sidebar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/layout/sidebar.tsx"),layoutStyles={maxWidth:_sidebar__WEBPACK_IMPORTED_MODULE_0__.g,height:"100vh"};function SidebarDecorator(Story){return React.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.A,{style:layoutStyles},React.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_0__.B,null,React.createElement(Story,null)))}SidebarDecorator.__docgenInfo={description:"",methods:[],displayName:"SidebarDecorator"}}}]);