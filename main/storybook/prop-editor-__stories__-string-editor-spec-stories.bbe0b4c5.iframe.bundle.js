"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[1309],{"./components/prop-editor/__stories__/prop-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/layout/sidebar-decorator.tsx"),_prop_editor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/prop-editor/prop-editor.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={component:Default,title:"PropEditor",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),property:{type:"string",description:"description"},value:"some valuev",name:"name"},decorators:[_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__.u]};function Default(param){var name=param.name,value=param.value,property=param.property,onChange=param.onChange,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(newValue){onChange(newValue),setCurrentValue(newValue)}),[onChange]);return React.createElement(_prop_editor__WEBPACK_IMPORTED_MODULE_3__.v,{name,testId:"prop-editor",value:currentValue,property,onChange:changeHandler})}Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'function Default<T extends SchemaValues>({\n  name,\n  value,\n  property,\n  onChange\n}: BaseProps<T>) {\n  const [currentValue, setCurrentValue] = useState(value);\n  const changeHandler = useCallback((newValue: T) => {\n    onChange(newValue);\n    setCurrentValue(newValue);\n  }, [onChange]);\n  return <PropEditor name={name} testId="prop-editor" value={currentValue} property={property} onChange={changeHandler} />;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/prop-editor/__stories__/string-editor.spec.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StringEditorChange:()=>StringEditorChange,StringEditorDescription:()=>StringEditorDescription,StringEditorName:()=>StringEditorName,StringEditorValue:()=>StringEditorValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_prop_editor_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/prop-editor/__stories__/prop-editor.stories.tsx"),_test_object__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/prop-editor/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_prop_editor_stories__WEBPACK_IMPORTED_MODULE_1__.default),{title:"PropEditor/tests/string-editor"});var _ref,StringEditorValue={name:"Передается value пропс в string-editor инпут",args:{value:"Valueff"},play:(_ref=_async_to_generator((function(param){var canvasElement,step,args,stringEditorTO,input;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,args=param.args,stringEditorTO=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U(canvasElement,"prop-editor"),input=stringEditorTO.getInput(),[4,step("Проверяем, что инпуте значение из пропса value",(function(){(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(input).toHaveValue(args.value)}))];case 1:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})},StringEditorChange={name:"Вызывается onChange с введённым значением при вводе в инпут в string-editor",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),value:""},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,args;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,args=param.args,[4,new _test_object__WEBPACK_IMPORTED_MODULE_2__.U(canvasElement,"prop-editor").setValue("Kek")];case 1:return _state.sent(),[4,step("Проверяем, что вызвалось onChange событие с введенным текстом",(function(){(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(args.onChange).toHaveBeenCalledWith("Kek")}))];case 2:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},StringEditorName={name:"Отображается именование инпута в string-editor",args:{name:"Name"},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,stringEditorTO,name;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,stringEditorTO=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U(canvasElement,"prop-editor"),name=stringEditorTO.getPropertyName(),[4,step("Проверяем, что именование инпута - значение пропса name",(function(){(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(name).toHaveTextContent("Name")}))];case 1:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},StringEditorDescription={name:"Отображается описание property в string-editor",args:{property:{type:"string",description:"description"}},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,stringEditorTO,description;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,step=param.step,stringEditorTO=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U(canvasElement,"prop-editor"),description=stringEditorTO.getPropertyDescription(),[4,step("Проверяем, что описание инпута - значение пропса property.description",(function(){(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(description).toHaveTextContent("description")}))];case 1:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["StringEditorValue","StringEditorChange","StringEditorName","StringEditorDescription"]}}]);