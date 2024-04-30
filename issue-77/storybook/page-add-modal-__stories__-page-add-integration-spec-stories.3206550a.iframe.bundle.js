"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[3353,4846],{"./components/page-add-modal/__stories__/page-add-integration.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IntegrationPageAdd:()=>IntegrationPageAdd,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/pages.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_page_add_modal_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/page-add-modal/__stories__/page-add-modal.stories.tsx"),_page_add_test_object__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/page-add/test-object.ts"),_test_object__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/page-add-modal/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_page_add_modal_stories__WEBPACK_IMPORTED_MODULE_2__.default),{title:"PageAddModal/tests/integration-page-add"});var _ref,IntegrationPageAdd={name:"При добавлении страницы, модальное окно автоматически закрывается",args:{open:!0,onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()},play:(_ref=function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(param){var args,step,modalContent;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return args=param.args,step=param.step,[4,new _test_object__WEBPACK_IMPORTED_MODULE_4__.R({step}).waitForContent()];case 1:return modalContent=_state.sent(),[4,new _page_add_test_object__WEBPACK_IMPORTED_MODULE_3__.Y({rootElement:modalContent,step}).fillAndSubmit(_colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_0__.OE)];case 2:return _state.sent(),[4,step("Проверяю, что колбэк onClose вызван",(function(){return(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fm)((function(){return(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(args.onClose).toHaveBeenCalled()}))}))];case 3:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})};const __namedExportsOrder=["IntegrationPageAdd"]},"./components/page-add-modal/__stories__/page-add-modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Opened:()=>Opened,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_page_add_modal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/page-add-modal/page-add-modal.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={component:function Wrapper(param){var defaultOpen=param.open,onClose=param.onClose,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOpen),2),open=_useState[0],setOpen=_useState[1],openModal=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){return setOpen(!0)}),[]),closeHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setOpen(!1),onClose()}),[onClose]);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.Ay,{onClick:openModal,type:"primary"},"Открыть"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_page_add_modal__WEBPACK_IMPORTED_MODULE_2__.k,{open,onClose:closeHandler}))},title:"PageAddModal",args:{open:!1,onClose:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};var Default={},Opened={args:{open:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Opened.parameters={...Opened.parameters,docs:{...Opened.parameters?.docs,source:{originalSource:"{\n  args: {\n    open: true\n  }\n}",...Opened.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Opened"]},"../../node_modules/antd/es/_util/PurePanel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,U:()=>withPureRenderTheme});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/rc-util/es/hooks/useMergedState.js"),_config_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/antd/es/config-provider/index.js"),_config_provider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/config-provider/context.js");function withPureRenderTheme(Component){return props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_2__.Ay,{theme:{token:{motion:!1,zIndexPopupBase:0}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,Object.assign({},props)))}const __WEBPACK_DEFAULT_EXPORT__=(Component,defaultPrefixCls,getDropdownCls,postProps)=>withPureRenderTheme((props=>{const{prefixCls:customizePrefixCls,style}=props,holderRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[popupHeight,setPopupHeight]=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),[popupWidth,setPopupWidth]=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),[open,setOpen]=(0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__.A)(!1,{value:props.open}),{getPrefixCls}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__.QO),prefixCls=getPrefixCls(defaultPrefixCls||"select",customizePrefixCls);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(setOpen(!0),"undefined"!=typeof ResizeObserver){const resizeObserver=new ResizeObserver((entries=>{const element=entries[0].target;setPopupHeight(element.offsetHeight+8),setPopupWidth(element.offsetWidth)})),interval=setInterval((()=>{var _a;const dropdownCls=getDropdownCls?`.${getDropdownCls(prefixCls)}`:`.${prefixCls}-dropdown`,popup=null===(_a=holderRef.current)||void 0===_a?void 0:_a.querySelector(dropdownCls);popup&&(clearInterval(interval),resizeObserver.observe(popup))}),10);return()=>{clearInterval(interval),resizeObserver.disconnect()}}}),[]);let mergedProps=Object.assign(Object.assign({},props),{style:Object.assign(Object.assign({},style),{margin:0}),open,visible:open,getPopupContainer:()=>holderRef.current});postProps&&(mergedProps=postProps(mergedProps));const mergedStyle={paddingBottom:popupHeight,position:"relative",minWidth:popupWidth};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:holderRef,style:mergedStyle},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,Object.assign({},mergedProps)))}))},"./components/page-add-modal/page-add-modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>PageAddModal});var modal=__webpack_require__("../../node_modules/antd/es/modal/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),page_add=__webpack_require__("./components/page-add/page-add.tsx");function PageAddModal(param){var open=param.open,onClose=param.onClose;return react.createElement(modal.A,{footer:null,open,title:"Добавление страницы",onCancel:onClose,"data-testid":"page-add-modal"},react.createElement("div",{"data-testid":"page-add-modal__content"},react.createElement(page_add.$,{onReady:onClose})))}PageAddModal.__docgenInfo={description:"",methods:[],displayName:"PageAddModal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./components/page-add/page-add.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>PageAdd});var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/form/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/antd/es/divider/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/input/index.js"),antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function PageAdd(param){var defaultValues=param.defaultValues,onReady=param.onReady,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),queryClient=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.jE)(),form=_sliced_to_array(antd__WEBPACK_IMPORTED_MODULE_3__.A.useForm(),1)[0];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _defaultValues_name,_defaultValues_route;form.setFieldsValue({name:null!==(_defaultValues_name=null==defaultValues?void 0:defaultValues.name)&&void 0!==_defaultValues_name?_defaultValues_name:"",route:null!==(_defaultValues_route=null==defaultValues?void 0:defaultValues.route)&&void 0!==_defaultValues_route?_defaultValues_route:""})}),[form,defaultValues]);var _useMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.n)({mutationFn:function(options){return api.pages.post(options)},onSuccess:function(){queryClient.invalidateQueries({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.PE]}),onReady&&onReady()}}),error=_useMutation.error,isPending=_useMutation.isPending,addPage=_useMutation.mutateAsync,rules=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{name:[{required:!0,message:'Параметр "Название" обязательный'}],route:[{required:!0,message:'Параметр "Адрес" обязательный'}]}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A,{layout:"vertical",form,onFinish:addPage,"data-testid":"page-add"},error&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{message:error.message,type:"error","data-testid":"page-add__error"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.A,{type:"vertical"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Item,{label:"Название",name:"name",rules:rules.name,"data-testid":"page-add__name",required:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{type:"text","data-testid":"page-add__name-input"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Item,{label:"Адрес",name:"route",rules:rules.route,"data-testid":"page-add__route",required:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.A,{type:"text","data-testid":"page-add__route-input"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.Ay,{htmlType:"submit",loading:isPending,type:"primary","data-testid":"page-add__submit"},"Добавить"))}PageAdd.__docgenInfo={description:"",methods:[],displayName:"PageAdd",props:{defaultValues:{required:!1,tsType:{name:"Partial",elements:[{name:"Omit",elements:[{name:"IPage"},{name:"literal",value:"'id'"}],raw:"Omit<IPage, 'id'>"}],raw:"Partial<IPageConstructorOptions>"},description:""},onReady:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")}}]);