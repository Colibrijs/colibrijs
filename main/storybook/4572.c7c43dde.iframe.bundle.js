(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[4572,5150],{"../../node_modules/@ant-design/icons/es/icons/CloseOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>icons_CloseOutlined});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_CloseOutlined={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),CloseOutlined_CloseOutlined=function CloseOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_CloseOutlined}))};const icons_CloseOutlined=react.forwardRef(CloseOutlined_CloseOutlined)},"../../node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>icons_InfoCircleFilled});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_InfoCircleFilled={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),InfoCircleFilled_InfoCircleFilled=function InfoCircleFilled(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_InfoCircleFilled}))};const icons_InfoCircleFilled=react.forwardRef(InfoCircleFilled_InfoCircleFilled)},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@tanstack/react-query/build/modern/useMutation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>useMutation});var react=__webpack_require__("../../node_modules/react/index.js"),mutation=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/mutation.js"),notifyManager=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/notifyManager.js"),subscribable=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/subscribable.js"),utils=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/utils.js"),MutationObserver=class extends subscribable.Q{#client;#currentResult=void 0;#currentMutation;#mutateOptions;constructor(client,options){super(),this.#client=client,this.setOptions(options),this.bindMethods(),this.#updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(options){const prevOptions=this.options;this.options=this.#client.defaultMutationOptions(options),(0,utils.f8)(this.options,prevOptions)||this.#client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#currentMutation,observer:this}),prevOptions?.mutationKey&&this.options.mutationKey&&(0,utils.EN)(prevOptions.mutationKey)!==(0,utils.EN)(this.options.mutationKey)?this.reset():"pending"===this.#currentMutation?.state.status&&this.#currentMutation.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#currentMutation?.removeObserver(this)}onMutationUpdate(action){this.#updateResult(),this.#notify(action)}getCurrentResult(){return this.#currentResult}reset(){this.#currentMutation?.removeObserver(this),this.#currentMutation=void 0,this.#updateResult(),this.#notify()}mutate(variables,options){return this.#mutateOptions=options,this.#currentMutation?.removeObserver(this),this.#currentMutation=this.#client.getMutationCache().build(this.#client,this.options),this.#currentMutation.addObserver(this),this.#currentMutation.execute(variables)}#updateResult(){const state=this.#currentMutation?.state??(0,mutation.$)();this.#currentResult={...state,isPending:"pending"===state.status,isSuccess:"success"===state.status,isError:"error"===state.status,isIdle:"idle"===state.status,mutate:this.mutate,reset:this.reset}}#notify(action){notifyManager.j.batch((()=>{if(this.#mutateOptions&&this.hasListeners()){const variables=this.#currentResult.variables,context=this.#currentResult.context;"success"===action?.type?(this.#mutateOptions.onSuccess?.(action.data,variables,context),this.#mutateOptions.onSettled?.(action.data,null,variables,context)):"error"===action?.type&&(this.#mutateOptions.onError?.(action.error,variables,context),this.#mutateOptions.onSettled?.(void 0,action.error,variables,context))}this.listeners.forEach((listener=>{listener(this.#currentResult)}))}))}},QueryClientProvider=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),modern_utils=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/utils.js");function useMutation(options,queryClient){const client=(0,QueryClientProvider.jE)(queryClient),[observer]=react.useState((()=>new MutationObserver(client,options)));react.useEffect((()=>{observer.setOptions(options)}),[observer,options]);const result=react.useSyncExternalStore(react.useCallback((onStoreChange=>observer.subscribe(notifyManager.j.batchCalls(onStoreChange))),[observer]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),mutate=react.useCallback(((variables,mutateOptions)=>{observer.mutate(variables,mutateOptions).catch(modern_utils.l)}),[observer]);if(result.error&&(0,modern_utils.G)(observer.options.throwOnError,[result.error]))throw result.error;return{...result,mutate,mutateAsync:result.mutate}}},"../../node_modules/@tanstack/react-query/build/modern/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function shouldThrowError(throwError,params){return"function"==typeof throwError?throwError(...params):!!throwError}function noop(){}__webpack_require__.d(__webpack_exports__,{G:()=>shouldThrowError,l:()=>noop})},"./components/page-add/page-add.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>PageAdd});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/form/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/antd/es/divider/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function PageAdd(param){var defaultValues=param.defaultValues,onReady=param.onReady,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),queryClient=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.jE)(),form=_sliced_to_array(antd__WEBPACK_IMPORTED_MODULE_3__.A.useForm(),1)[0];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _defaultValues_name,_defaultValues_route;form.setFieldsValue({name:null!==(_defaultValues_name=null==defaultValues?void 0:defaultValues.name)&&void 0!==_defaultValues_name?_defaultValues_name:"",route:null!==(_defaultValues_route=null==defaultValues?void 0:defaultValues.route)&&void 0!==_defaultValues_route?_defaultValues_route:""})}),[form,defaultValues]);var _useMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.n)({mutationFn:function(options){return api.pages.post(options)},onSuccess:function(){queryClient.invalidateQueries({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.PE]}),onReady&&onReady()}}),error=_useMutation.error,isPending=_useMutation.isPending,addPage=_useMutation.mutateAsync,rules=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{name:[{required:!0,message:'Параметр "Название" обязательный'}],route:[{required:!0,message:'Параметр "Адрес" обязательный'}]}}),[]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A,{layout:"vertical",form,onFinish:addPage,"data-testid":"page-add"},error&&React.createElement(React.Fragment,null,React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{message:error.message,type:"error","data-testid":"page-add__error"}),React.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.A,{type:"vertical"})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Item,{label:"Название",name:"name",rules:rules.name,"data-testid":"page-add__name",required:!0},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{type:"text","data-testid":"page-add__name-input"})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Item,{label:"Адрес",name:"route",rules:rules.route,"data-testid":"page-add__route",required:!0},React.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{type:"text","data-testid":"page-add__route-input"})),React.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{htmlType:"submit",loading:isPending,type:"primary","data-testid":"page-add__submit"},"Добавить"))}PageAdd.__docgenInfo={description:"",methods:[],displayName:"PageAdd",props:{defaultValues:{required:!1,tsType:{name:"Partial",elements:[{name:"Omit",elements:[{name:"IPage"},{name:"literal",value:"'id'"}],raw:"Omit<IPage, 'id'>"}],raw:"Partial<IPageConstructorOptions>"},description:""},onReady:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./components/page-add/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>PageAddTO});var _colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/pages.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var PageAddTO=function(){function PageAddTO(options){var _options_testId;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PageAddTO),_define_property(this,"rootElement",void 0),_define_property(this,"step",void 0),_define_property(this,"testId",void 0),_define_property(this,"_root",null),this.rootElement=options.rootElement,this.step=options.step,this.testId=null!==(_options_testId=options.testId)&&void 0!==_options_testId?_options_testId:"page-add"}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PageAddTO,[{key:"root",get:function get(){if(this._root)return this._root;var story=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(this.rootElement);return this._root=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(story.getByTestId(this.testId)),this._root}},{key:"fillAndSubmit",value:function fillAndSubmit(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_0__.OE,_this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.fillName(options.name)];case 1:return _state.sent(),[4,_this.fillRoute(options.route)];case 2:return _state.sent(),[4,_this.submit()];case 3:return _state.sent(),[2]}}))}))()}},{key:"fillName",value:function fillName(text){var _this=this;return _async_to_generator((function(){var input;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return input=_this.root.getByTestId("page-add__name-input"),[4,_this.step('Ввожу в поле "Адрес" значение "'.concat(text,'"'),(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.type(input,text)}))];case 1:return _state.sent(),[2]}}))}))()}},{key:"fillRoute",value:function fillRoute(text){var _this=this;return _async_to_generator((function(){var input;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return input=_this.root.getByTestId("page-add__route-input"),[4,_this.step('Ввожу в поле "Адрес" значение "'.concat(text,'"'),(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.type(input,text)}))];case 1:return _state.sent(),[2]}}))}))()}},{key:"submit",value:function submit(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step('Кликаю на кнопку "Добавить"',_async_to_generator((function(){var submit;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return submit=_this.root.getByTestId("page-add__submit"),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(submit)];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"getError",value:function getError(){var _options_strict=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).strict;return void 0===_options_strict||_options_strict?this.root.findByTestId("page-add__error"):Promise.resolve(this.root.queryByTestId("page-add__error"))}},{key:"getNameError",value:function getNameError(){var _options_strict=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).strict,strict=void 0===_options_strict||_options_strict,name=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(this.root.getByTestId("page-add__name"));return strict?name.findByRole("alert"):Promise.resolve(name.queryByRole("alert"))}},{key:"getRouteError",value:function getRouteError(){var _options_strict=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).strict,strict=void 0===_options_strict||_options_strict,route=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(this.root.getByTestId("page-add__route"));return strict?route.findByRole("alert"):Promise.resolve(route.queryByRole("alert"))}}]),PageAddTO}()},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,YT:()=>ELEMENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",ELEMENTS_KEY="elements",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")}}]);