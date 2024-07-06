(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[1309,942],{"./components/prop-editor/__stories__/prop-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/layout/sidebar-decorator.tsx"),_prop_editor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/prop-editor/prop-editor.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={component:Default,title:"PropEditor",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),property:{type:"string",description:"description"},value:"some valuev",name:"name"},decorators:[_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__.u]};function Default(param){var name=param.name,value=param.value,property=param.property,onChange=param.onChange,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(newValue){onChange(newValue),setCurrentValue(newValue)}),[onChange]);return React.createElement(_prop_editor__WEBPACK_IMPORTED_MODULE_3__.v,{name,value:currentValue,property,onChange:changeHandler})}Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default<T extends SchemaValues>({\n  name,\n  value,\n  property,\n  onChange\n}: BaseProps<T>) {\n  const [currentValue, setCurrentValue] = useState(value);\n  const changeHandler = useCallback((newValue: T) => {\n    onChange(newValue);\n    setCurrentValue(newValue);\n  }, [onChange]);\n  return <PropEditor name={name} value={currentValue} property={property} onChange={changeHandler} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/prop-editor/__stories__/string-editor.spec.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StringEditorChange:()=>StringEditorChange,StringEditorDescription:()=>StringEditorDescription,StringEditorName:()=>StringEditorName,StringEditorValue:()=>StringEditorValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},__webpack_require__("./components/prop-editor/__stories__/prop-editor.stories.tsx").default),{title:"PropEditor/tests/string-editor"});var _ref,StringEditorValue={name:"Передается value пропс в string-editor инпут",args:{property:{type:"string",description:"description"},name:"Name",onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),value:"Valueff"},play:(_ref=_async_to_generator((function(param){var canvasElement,step,getByTestId,stringEditor;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,getByTestId=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getByTestId,stringEditor=getByTestId("prop-editor__input"),[4,step("Проверяем, что инпуте значение из пропса value",(function(){(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(stringEditor).toHaveValue("Valueff")}))];case 1:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})},StringEditorChange={name:"Вызывается onChange при вводе в инпут в string-editor",args:{property:{type:"string",description:"description"},name:"Name",onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),value:""},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,getByTestId,stringEditor;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,getByTestId=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getByTestId,stringEditor=getByTestId("prop-editor__input"),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(stringEditor,"Kek")];case 1:return _state.sent(),[4,step("Проверяем, что вызвалось onChange событие с введенным текстом",(function(){var _StringEditorChange_args;(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(null===(_StringEditorChange_args=StringEditorChange.args)||void 0===_StringEditorChange_args?void 0:_StringEditorChange_args.onChange).toHaveBeenCalledWith("Kek")}))];case 2:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},StringEditorName={name:"Отображается именование инпута в string-editor",args:{property:{type:"string",description:"description"},name:"Name",onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),value:""},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,getByTestId,label;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,getByTestId=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getByTestId,label=getByTestId("prop-editor__label"),[4,step("Проверяем, что именование инпута - значение пропса name",(function(){(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(label).toHaveTextContent("Name")}))];case 1:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},StringEditorDescription={name:"Отображается описание property в string-editor",args:{property:{type:"string",description:"description"},name:"Name",onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),value:""},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,getByTestId,description;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,getByTestId=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getByTestId,description=getByTestId("prop-editor__description"),[4,step("Проверяем, что описание инпута - значение пропса property.description",(function(){(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(description).toHaveTextContent("description")}))];case 1:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["StringEditorValue","StringEditorChange","StringEditorName","StringEditorDescription"]},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".components-layout-layout-module__root {\n  --header-height: 64px;\n}\n\n.components-layout-layout-module__sidebar {\n  padding: 20px 16px;\n}\n\n.components-layout-layout-module__sidebar_collapsed {\n  padding: 0;\n}\n\n.components-layout-layout-module__content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n","",{version:3,sources:["webpack://./components/layout/layout.module.css"],names:[],mappings:"AAAA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,8CAA8C;EAC9C,aAAa;AACf",sourcesContent:[".root {\n  --header-height: 64px;\n}\n\n.sidebar {\n  padding: 20px 16px;\n}\n\n.sidebar_collapsed {\n  padding: 0;\n}\n\n.content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"components-layout-layout-module__root",sidebar:"components-layout-layout-module__sidebar",sidebar_collapsed:"components-layout-layout-module__sidebar_collapsed",content:"components-layout-layout-module__content"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./components/layout/layout.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.module.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"./components/layout/sidebar-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>SidebarDecorator});var antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),_sidebar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/layout/sidebar.tsx"),layoutStyles={maxWidth:_sidebar__WEBPACK_IMPORTED_MODULE_0__.g,height:"100vh"};function SidebarDecorator(Story){return React.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.A,{style:layoutStyles},React.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_0__.B,null,React.createElement(Story,null)))}SidebarDecorator.__docgenInfo={description:"",methods:[],displayName:"SidebarDecorator"}},"./components/layout/sidebar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Sidebar,g:()=>SIDEBAR_WIDTH});var antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/theme/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/config-provider/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_layout_module_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/layout/layout.module.css");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var SIDEBAR_WIDTH=350;function Sidebar(param){var obj,key,value,children=param.children,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),collapsed=_useState[0],setCollapsed=_useState[1],darkTheme=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{algorithm:antd__WEBPACK_IMPORTED_MODULE_3__.A.darkAlgorithm}}),[]),toggle=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setCollapsed((function(currentlyCollapsed){return!currentlyCollapsed}))}),[]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.A.Sider,{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.A.sidebar,(obj={},key=_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.A.sidebar_collapsed,value=collapsed,key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj)),collapsed,collapsedWidth:0,theme:"dark",width:SIDEBAR_WIDTH,onCollapse:toggle,collapsible:!0},React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.Ay,{theme:darkTheme},children))}Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar"}},"./components/prop-editor/prop-editor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>PropEditor});var es_form=__webpack_require__("../../node_modules/antd/es/form/index.js"),input_number=__webpack_require__("../../node_modules/antd/es/input-number/index.js"),react=__webpack_require__("../../node_modules/react/index.js");function NumberEditor(param){var onChange=param.onChange,value=param.value,property=param.property,name=param.name,testId=param.testId,changeHandler=(0,react.useCallback)((function(value){var numberValue=Number(value);onChange(numberValue)}),[onChange]);return React.createElement(es_form.A.Item,{"data-testid":testId,label:React.createElement("span",{"data-testid":"prop-editor__label"},name),help:React.createElement("span",{"data-testid":"prop-editor__description"},property.description)},React.createElement(input_number.A,{name,value,type:"number","data-testid":"prop-editor__input",onChange:changeHandler}))}NumberEditor.__docgenInfo={description:"",methods:[],displayName:"NumberEditor",props:{testId:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},property:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  type: StringifiedType<T>;\n  description: string;\n}",signature:{properties:[{key:"type",value:{name:"unknown",required:!0}},{key:"description",value:{name:"string",required:!0}}]}},description:"Редактируемое свойство"},value:{required:!0,tsType:{name:"T"},description:"Значение по умолчанию"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Функция, которая будет вызвана, когда пропсы поменяются"}}};var input=__webpack_require__("../../node_modules/antd/es/input/index.js");function StringEditor(param){var onChange=param.onChange,value=param.value,property=param.property,name=param.name,testId=param.testId,changeHandler=(0,react.useCallback)((function(event){var newValue=event.target.value;onChange(newValue)}),[onChange]);return React.createElement(es_form.A.Item,{"data-testid":testId,label:React.createElement("span",{"data-testid":"prop-editor__label"},name),help:React.createElement("span",{"data-testid":"prop-editor__description"},property.description)},React.createElement(input.A,{"data-testid":"prop-editor__input",name,type:"text",value,onChange:changeHandler}))}function PropEditor(param){var property=param.property,onChange=param.onChange,value=param.value,name=param.name,_param_testId=param.testId,testId=void 0===_param_testId?"prop-editor":_param_testId;return React.createElement(React.Fragment,null,"string"===property.type&&React.createElement(StringEditor,{name,property,value,testId,onChange}),"number"===property.type&&React.createElement(NumberEditor,{name,property,value,testId,onChange}))}StringEditor.__docgenInfo={description:"",methods:[],displayName:"StringEditor",props:{testId:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},property:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  type: StringifiedType<T>;\n  description: string;\n}",signature:{properties:[{key:"type",value:{name:"unknown",required:!0}},{key:"description",value:{name:"string",required:!0}}]}},description:"Редактируемое свойство"},value:{required:!0,tsType:{name:"T"},description:"Значение по умолчанию"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Функция, которая будет вызвана, когда пропсы поменяются"}}},PropEditor.__docgenInfo={description:"",methods:[],displayName:"PropEditor",props:{testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'prop-editor'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:""},property:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  type: StringifiedType<T>;\n  description: string;\n}",signature:{properties:[{key:"type",value:{name:"unknown",required:!0}},{key:"description",value:{name:"string",required:!0}}]}},description:"Редактируемое свойство"},value:{required:!0,tsType:{name:"T"},description:"Значение по умолчанию"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Функция, которая будет вызвана, когда пропсы поменяются"}}}}}]);