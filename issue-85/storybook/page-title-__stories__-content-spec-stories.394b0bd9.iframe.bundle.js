(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[113,4846,7344],{"./components/page-title/__stories__/content.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TitleText:()=>TitleText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>content_spec_stories});var pages=__webpack_require__("../mocks/pages.ts"),dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),page_title_stories=__webpack_require__("./components/page-title/__stories__/page-title.stories.ts");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var PageTitleTO=function(){function PageTitleTO(options){var _options_testId;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PageTitleTO),_define_property(this,"rootElement",void 0),_define_property(this,"_root",null),_define_property(this,"testId",void 0),this.rootElement=options.rootElement,this.testId=null!==(_options_testId=options.testId)&&void 0!==_options_testId?_options_testId:"page-title"}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PageTitleTO,[{key:"root",get:function get(){if(this._root)return this._root;var story=(0,dist.ux)(this.rootElement);return this._root=(0,dist.ux)(story.getByTestId(this.testId)),this._root}},{key:"getName",value:function getName(){return this.root.getByTestId("page-title__name")}}]),PageTitleTO}();function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function content_spec_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const content_spec_stories=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){content_spec_stories_define_property(target,key,source[key])}))}return target}({},page_title_stories.default),{title:"PageTitle/tests/content"});var _ref,TitleText={name:"В заголовке отображается значение поля name пропса page",args:{page:pages.ab},play:(_ref=function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(param){var canvasElement,step,pageTitle,nameElement;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,pageTitle=new PageTitleTO({rootElement:canvasElement}),nameElement=pageTitle.getName(),[4,step("Проверяю, что заголовок страницы равен значению поля name",(function(){return(0,dist.E3)(nameElement).toHaveTextContent(pages.ab.name)}))];case 1:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})};const __namedExportsOrder=["TitleText"]},"./components/page-title/__stories__/page-title.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>page_title_stories});var pages=__webpack_require__("../mocks/pages.ts"),flex=__webpack_require__("../../node_modules/antd/es/flex/index.js"),typography=__webpack_require__("../../node_modules/antd/es/typography/index.js"),page_remove=__webpack_require__("./components/page-remove/page-remove.tsx");function PageTitle(param){var page=param.page;return React.createElement(flex.A,{align:"baseline",justify:"space-between","data-testid":"page-title"},React.createElement(typography.A.Title,{level:1,"data-testid":"page-title__name"},page.name),React.createElement(page_remove.Q,{page}))}PageTitle.__docgenInfo={description:"",methods:[],displayName:"PageTitle",props:{page:{required:!0,tsType:{name:"IPage"},description:""}}};const page_title_stories={component:PageTitle,title:"PageTitle",args:{page:pages.ab}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./components/page-remove/page-remove.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>PageRemove});var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/DeleteOutlined.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/popconfirm/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/antd/es/tooltip/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts");function PageRemove(param){var page=param.page,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),queryClient=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.jE)(),_useMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.n)({mutationFn:function(){return api.pages.delete(page.id)},onError:function(error){return antd__WEBPACK_IMPORTED_MODULE_4__.Ay.error(React.createElement("span",{"data-testid":"page-remove__error"},error.message))},onSuccess:function(){queryClient.invalidateQueries({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.PE]}),antd__WEBPACK_IMPORTED_MODULE_4__.Ay.success(React.createElement("span",{"data-testid":"page-remove__success"},"Страница “",page.name,"” (",page.route,") успешно удалена"))}}),deletePage=_useMutation.mutate,isPending=_useMutation.isPending,confirmHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){deletePage()}),[deletePage]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Удалить страницу?",description:"Страница “".concat(page.name,"” (").concat(page.route,") будет удалена с концами"),okText:React.createElement("span",{"data-testid":"page-remove__confirm"},"Да"),cancelText:"Галя, отмена",onConfirm:confirmHandler},React.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.A,{title:"Удалить"},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{loading:isPending,icon:React.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.A,null),htmlType:"button","data-testid":"page-remove",shape:"circle",danger:!0,ghost:!0})))}PageRemove.__docgenInfo={description:"",methods:[],displayName:"PageRemove",props:{page:{required:!0,tsType:{name:"IPage"},description:""}}}},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,YT:()=>ELEMENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",ELEMENTS_KEY="elements",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")}}]);