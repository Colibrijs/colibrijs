"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[3624,942],{"../../node_modules/@ant-design/icons/es/icons/DownOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_DownOutlined});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_DownOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),DownOutlined_DownOutlined=function DownOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_DownOutlined}))};const icons_DownOutlined=react.forwardRef(DownOutlined_DownOutlined)},"./components/prop-editor/__stories__/object-editor.spec.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CorrectDefaultValues:()=>CorrectDefaultValues,NestedObjectsName:()=>NestedObjectsName,ObjectMainName:()=>ObjectMainName,ValueChanging:()=>ValueChanging,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_prop_editor_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/prop-editor/__stories__/prop-editor.stories.tsx"),_test_object__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/prop-editor/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_prop_editor_stories__WEBPACK_IMPORTED_MODULE_1__.default),{title:"PropEditor/tests/object-editor",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),testId:"object-editor",name:"mainObject",value:{name:"kek",age:11,additionalInformation:{isBald:!0}},property:{type:"object",description:"description",properties:{name:{type:"string",description:"your name"},age:{type:"number",description:"your age"},additionalInformation:{type:"object",description:"additional information",properties:{isBald:{type:"boolean",description:"is bald"}}}}}}});var _ref,ObjectMainName={name:"Главный объект имеет заголовок из пропа name",play:(_ref=_async_to_generator((function(param){var canvasElement,step,objectEditor,name;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,objectEditor=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U({canvasElement,step},"object-editor"),name=objectEditor.getPropertyName(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(name,"Проверяем, что именование объекта равно пропсу name").toHaveTextContent("mainObject")];case 1:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})},NestedObjectsName={name:"Корректно именуются вложенные объекты",play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,additionalInformation,additionalInformationName;return _ts_generator(this,(function(_state){return canvasElement=param.canvasElement,step=param.step,additionalInformation=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U({canvasElement,step},"object-editor__additionalInformation"),additionalInformationName=additionalInformation.getPropertyName(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(additionalInformationName,"Проверяем, что имя объекта - именование свойства из properties пропа property").toHaveTextContent("additionalInformation"),[2]}))}));return function(_){return _ref.apply(this,arguments)}}()},ValueChanging={name:"При вводе данных вызывается onChange со всеми данными в property с измененным конкретным свойством",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,args,step;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,args=param.args,step=param.step,[4,new _test_object__WEBPACK_IMPORTED_MODULE_2__.U({canvasElement,step},"object-editor__age").setValue("1")];case 1:return _state.sent(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(args.onChange,"Убеждаемся, что вызвался onChange со значениями из value, а так же с измененными данными age").toHaveBeenCalledWith({name:"kek",age:1,additionalInformation:{isBald:!0}}),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},CorrectDefaultValues={name:"Корректно передаются все значения из value",args:{value:{name:"Thomas",age:14,additionalInformation:{isBald:!0}},onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),name:"mainObject"},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,nameEditor,nameValue,ageEditor,ageValue,isBaldEditor,isBaldValue;return _ts_generator(this,(function(_state){return canvasElement=param.canvasElement,step=param.step,nameEditor=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U({canvasElement,step},"object-editor__name"),nameValue=nameEditor.getValue(),ageEditor=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U({canvasElement,step},"object-editor__age"),ageValue=ageEditor.getValue(),isBaldEditor=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U({canvasElement,step},"object-editor__additionalInformation__isBald"),isBaldValue=isBaldEditor.getValue(),step("Убеждаемся, что значение полей равны данным переданным в value пропсе",(function(){(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(nameValue).toBe("Thomas"),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(ageValue).toBe("14"),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(isBaldValue).toBe(!0)})),[2]}))}));return function(_){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["ObjectMainName","NestedObjectsName","ValueChanging","CorrectDefaultValues"]},"./components/prop-editor/__stories__/prop-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ObjectExampleStory:()=>ObjectExampleStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/layout/sidebar-decorator.tsx"),_prop_editor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/prop-editor/prop-editor.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={component:Default,title:"PropEditor",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),property:{type:"string",description:"description"},value:"some valuev",name:"name",testId:"prop-editor"},decorators:[_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__.u]};function Default(param){var name=param.name,value=param.value,property=param.property,_param_testId=param.testId,testId=void 0===_param_testId?"prop-editor":_param_testId,onChange=param.onChange,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(newValue){onChange(newValue),setCurrentValue(newValue)}),[onChange]);return React.createElement(_prop_editor__WEBPACK_IMPORTED_MODULE_3__.v,{name,testId,value:currentValue,property,onChange:changeHandler})}var ObjectExampleStory={render:function render(args){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(args.value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(newValue){args.onChange(newValue),setCurrentValue(newValue)}),[args]);return React.createElement(_prop_editor__WEBPACK_IMPORTED_MODULE_3__.v,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args),{value:currentValue,onChange:changeHandler}))},args:{name:"objectName",value:{age:228,name:"kek",obj:{isBald:!0}},property:{type:"object",description:"kek",properties:{age:{type:"number",description:"its a number"},name:{type:"string",description:"its a string"},obj:{type:"object",description:"its an object",properties:{isBald:{type:"boolean",description:"its a boolean"}}}}},onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default<T>({\n  name,\n  value,\n  property,\n  testId = 'prop-editor',\n  onChange\n}: BaseProps<T>) {\n  const [currentValue, setCurrentValue] = useState(value);\n  const changeHandler = useCallback((newValue: T) => {\n    onChange(newValue);\n    setCurrentValue(newValue);\n  }, [onChange]);\n  return <PropEditor name={name} testId={testId} value={currentValue} property={property} onChange={changeHandler} />;\n}",...Default.parameters?.docs?.source}}},ObjectExampleStory.parameters={...ObjectExampleStory.parameters,docs:{...ObjectExampleStory.parameters?.docs,source:{originalSource:"{\n  render: function <T>(args: BaseProps<T>) {\n    const [currentValue, setCurrentValue] = useState(args.value);\n    const changeHandler = useCallback((newValue: T) => {\n      args.onChange(newValue);\n      setCurrentValue(newValue);\n    }, [args]);\n    return <PropEditor {...args} value={currentValue} onChange={changeHandler} />;\n  },\n  args: {\n    name: 'objectName',\n    value: {\n      age: 228,\n      name: 'kek',\n      obj: {\n        isBald: true\n      }\n    },\n    property: {\n      type: 'object',\n      description: 'kek',\n      properties: {\n        age: {\n          type: 'number',\n          description: 'its a number'\n        },\n        name: {\n          type: 'string',\n          description: 'its a string'\n        },\n        obj: {\n          type: 'object',\n          description: 'its an object',\n          properties: {\n            isBald: {\n              type: 'boolean',\n              description: 'its a boolean'\n            }\n          }\n        }\n      }\n    },\n    onChange: fn()\n  }\n}",...ObjectExampleStory.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ObjectExampleStory"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".components-layout-layout-module__root {\n  --header-height: 64px;\n}\n\n.components-layout-layout-module__sidebar {\n  padding: 20px 16px;\n}\n\n.components-layout-layout-module__sidebar_collapsed {\n  padding: 0;\n}\n\n.components-layout-layout-module__content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n","",{version:3,sources:["webpack://./components/layout/layout.module.css"],names:[],mappings:"AAAA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,8CAA8C;EAC9C,aAAa;AACf",sourcesContent:[".root {\n  --header-height: 64px;\n}\n\n.sidebar {\n  padding: 20px 16px;\n}\n\n.sidebar_collapsed {\n  padding: 0;\n}\n\n.content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"components-layout-layout-module__root",sidebar:"components-layout-layout-module__sidebar",sidebar_collapsed:"components-layout-layout-module__sidebar_collapsed",content:"components-layout-layout-module__content"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./components/layout/layout.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.module.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"./components/layout/sidebar-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>SidebarDecorator});var antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),_sidebar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/layout/sidebar.tsx"),layoutStyles={maxWidth:_sidebar__WEBPACK_IMPORTED_MODULE_0__.g,height:"100vh"};function SidebarDecorator(Story){return React.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.A,{style:layoutStyles},React.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_0__.B,null,React.createElement(Story,null)))}SidebarDecorator.__docgenInfo={description:"",methods:[],displayName:"SidebarDecorator"}},"./components/layout/sidebar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Sidebar,g:()=>SIDEBAR_WIDTH});var antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/theme/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/config-provider/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_layout_module_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/layout/layout.module.css");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var SIDEBAR_WIDTH=350;function Sidebar(param){var obj,key,value,children=param.children,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),collapsed=_useState[0],setCollapsed=_useState[1],darkTheme=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return{algorithm:antd__WEBPACK_IMPORTED_MODULE_3__.A.darkAlgorithm}}),[]),toggle=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){setCollapsed((function(currentlyCollapsed){return!currentlyCollapsed}))}),[]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.A.Sider,{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.A.sidebar,(obj={},key=_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.A.sidebar_collapsed,value=collapsed,key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj)),collapsed,collapsedWidth:0,theme:"dark",width:SIDEBAR_WIDTH,onCollapse:toggle,collapsible:!0},React.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.Ay,{theme:darkTheme},children))}Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar"}},"./components/prop-editor/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>PropEditorTO});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var PropEditorTO=function(){function PropEditorTO(param,testId){var canvasElement=param.canvasElement,step=param.step;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PropEditorTO),_define_property(this,"editorElement",void 0),_define_property(this,"component",void 0),_define_property(this,"testId",void 0),_define_property(this,"step",void 0),this.step=step,this.editorElement=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getByTestId(testId),this.component=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(this.editorElement),this.testId=testId}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PropEditorTO,[{key:"getPropertyName",value:function getPropertyName(){return this.component.getByTestId("".concat(this.testId,"__label"))}},{key:"getPropertyDescription",value:function getPropertyDescription(){return this.component.getByTestId("prop-editor__description")}},{key:"getInput",value:function getInput(){return this.component.getByTestId("prop-editor__input")}},{key:"getSwitcher",value:function getSwitcher(){return this.component.getByTestId("prop-editor__switcher")}},{key:"toggleSwitcher",value:function toggleSwitcher(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step("Переключаю свитчер",_async_to_generator((function(){var switcher;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return switcher=_this.getSwitcher(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"getValue",value:function getValue(){return"boolean"===this.editorElement.dataset.type?"true"===this.getSwitcher().ariaChecked:this.getInput().value}},{key:"setValue",value:function setValue(value){var _this=this;return _async_to_generator((function(){var switcher;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return"boolean"!==_this.editorElement.dataset.type?[3,5]:(switcher=_this.getSwitcher(),!0!==value||"false"!==switcher.ariaChecked?[3,2]:[4,_this.step("Привожу свитчер в чекнутое состояние",_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 1:return _state.sent(),[2]}}))})))]);case 1:_state.sent(),_state.label=2;case 2:return!1!==value||"true"!==switcher.ariaChecked?[3,4]:[4,_this.step("Привожу свитчер в нечекнутое состояние",_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 1:return _state.sent(),[2]}}))})))];case 3:_state.sent(),_state.label=4;case 4:return[3,7];case 5:return[4,_this.step("Ввожу значение в инпут",_async_to_generator((function(){var input;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return input=_this.getInput(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.clear(input)];case 1:return _state.sent(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(input,value)];case 2:return _state.sent(),[2]}}))})))];case 6:_state.sent(),_state.label=7;case 7:return[2]}}))}))()}}]),PropEditorTO}()}}]);