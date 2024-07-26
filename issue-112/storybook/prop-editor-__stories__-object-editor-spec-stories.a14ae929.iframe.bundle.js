"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[3624,942],{"./components/prop-editor/__stories__/object-editor.spec.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CorrectDefaultValues:()=>CorrectDefaultValues,NestedObjectsName:()=>NestedObjectsName,ObjectMainName:()=>ObjectMainName,ValueChanging:()=>ValueChanging,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_prop_editor_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/prop-editor/__stories__/prop-editor.stories.tsx"),_test_object__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/prop-editor/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_prop_editor_stories__WEBPACK_IMPORTED_MODULE_1__.default),{title:"PropEditor/tests/object-editor",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),testId:"object-editor",name:"mainObject",value:{name:"kek",age:11,additionalInformation:{isBald:!0}},property:{type:"object",description:"description",properties:{name:{type:"string",description:"your name"},age:{type:"number",description:"your age"},additionalInformation:{type:"object",description:"additional information",properties:{isBald:{type:"boolean",description:"is bald"}}}}}}});var _ref,ObjectMainName={name:"Главный объект имеет заголовок из пропа name",play:(_ref=_async_to_generator((function(param){var canvasElement,objectEditor,name;return _ts_generator(this,(function(_state){return canvasElement=param.canvasElement,objectEditor=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U(canvasElement,"object-editor"),name=objectEditor.getPropertyName(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(name).toHaveTextContent("mainObject"),[2]}))})),function(_){return _ref.apply(this,arguments)})},NestedObjectsName={name:"Корректно именуются вложенные объекты",play:function(){var _ref=_async_to_generator((function(param){var canvasElement,additionalInformation,additionalInformationName;return _ts_generator(this,(function(_state){return canvasElement=param.canvasElement,additionalInformation=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U(canvasElement,"object-editor__additionalInformation"),additionalInformationName=additionalInformation.getPropertyName(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(additionalInformationName).toHaveTextContent("additionalInformation"),[2]}))}));return function(_){return _ref.apply(this,arguments)}}()},ValueChanging={name:"При вводе данных вызывается onChange со всеми данными в property с измененным конкретным свойством",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,args,numberEditor;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,args=param.args,[4,(numberEditor=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U(canvasElement,"object-editor__age")).nextTick()];case 1:return _state.sent(),[4,numberEditor.setValue("1")];case 2:return _state.sent(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(args.onChange).toHaveBeenCalledWith({name:"kek",age:111,additionalInformation:{isBald:!0}}),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},CorrectDefaultValues={name:"Корректно передаются все значения из value",args:{value:{name:"Thomas",age:14,additionalInformation:{isBald:!0}},onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),name:"mainObject"},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,nameEditor,nameValue,ageEditor,ageValue,isBaldEditor,isBaldValue;return _ts_generator(this,(function(_state){return canvasElement=param.canvasElement,nameEditor=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U(canvasElement,"object-editor__name"),nameValue=nameEditor.getValue(),ageEditor=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U(canvasElement,"object-editor__age"),ageValue=ageEditor.getValue(),isBaldEditor=new _test_object__WEBPACK_IMPORTED_MODULE_2__.U(canvasElement,"object-editor__additionalInformation__isBald"),isBaldValue=isBaldEditor.getValue(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(nameValue).toBe("Thomas"),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(ageValue).toBe("14"),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(isBaldValue).toBe(!0),[2]}))}));return function(_){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["ObjectMainName","NestedObjectsName","ValueChanging","CorrectDefaultValues"]},"./components/prop-editor/__stories__/prop-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ObjectExampleStory:()=>ObjectExampleStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/layout/sidebar-decorator.tsx"),_prop_editor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/prop-editor/prop-editor.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={component:Default,title:"PropEditor",args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),property:{type:"string",description:"description"},value:"some valuev",name:"name",testId:"prop-editor"},decorators:[_layout_sidebar_decorator__WEBPACK_IMPORTED_MODULE_2__.u]};function Default(param){var name=param.name,value=param.value,property=param.property,_param_testId=param.testId,testId=void 0===_param_testId?"prop-editor":_param_testId,onChange=param.onChange,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(newValue){onChange(newValue),setCurrentValue(newValue)}),[onChange]);return React.createElement(_prop_editor__WEBPACK_IMPORTED_MODULE_3__.v,{name,testId,value:currentValue,property,onChange:changeHandler})}var ObjectExampleStory={render:function render(args){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(args.value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(newValue){args.onChange(newValue),setCurrentValue(newValue)}),[args]);return React.createElement(_prop_editor__WEBPACK_IMPORTED_MODULE_3__.v,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args),{value:currentValue,onChange:changeHandler}))},args:{name:"objectName",value:{age:228,name:"kek",obj:{isBald:!0}},property:{type:"object",description:"kek",properties:{age:{type:"number",description:"its a number"},name:{type:"string",description:"its a string"},obj:{type:"object",description:"its an object",properties:{isBald:{type:"boolean",description:"its a boolean"}}}}},onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default<T>({\n  name,\n  value,\n  property,\n  testId = 'prop-editor',\n  onChange\n}: BaseProps<T>) {\n  const [currentValue, setCurrentValue] = useState(value);\n  const changeHandler = useCallback((newValue: T) => {\n    onChange(newValue);\n    setCurrentValue(newValue);\n  }, [onChange]);\n  return <PropEditor name={name} testId={testId} value={currentValue} property={property} onChange={changeHandler} />;\n}",...Default.parameters?.docs?.source}}},ObjectExampleStory.parameters={...ObjectExampleStory.parameters,docs:{...ObjectExampleStory.parameters?.docs,source:{originalSource:"{\n  render: function <T>(args: BaseProps<T>) {\n    const [currentValue, setCurrentValue] = useState(args.value);\n    const changeHandler = useCallback((newValue: T) => {\n      args.onChange(newValue);\n      setCurrentValue(newValue);\n    }, [args]);\n    return <PropEditor {...args} value={currentValue} onChange={changeHandler} />;\n  },\n  args: {\n    name: 'objectName',\n    value: {\n      age: 228,\n      name: 'kek',\n      obj: {\n        isBald: true\n      }\n    },\n    property: {\n      type: 'object',\n      description: 'kek',\n      properties: {\n        age: {\n          type: 'number',\n          description: 'its a number'\n        },\n        name: {\n          type: 'string',\n          description: 'its a string'\n        },\n        obj: {\n          type: 'object',\n          description: 'its an object',\n          properties: {\n            isBald: {\n              type: 'boolean',\n              description: 'its a boolean'\n            }\n          }\n        }\n      }\n    },\n    onChange: fn()\n  }\n}",...ObjectExampleStory.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ObjectExampleStory"]},"./components/prop-editor/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>PropEditorTO});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var PropEditorTO=function(){function PropEditorTO(canvasElement,testId){!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PropEditorTO),_define_property(this,"editorElement",void 0),_define_property(this,"component",void 0),_define_property(this,"testId",void 0),this.editorElement=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getByTestId(testId),this.component=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(this.editorElement),this.testId=testId}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PropEditorTO,[{key:"nextTick",value:function nextTick(){return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,new Promise((function(resolve){return resolve(null)}))];case 1:return[2,_state.sent()]}}))}))()}},{key:"getPropertyName",value:function getPropertyName(){return this.component.getByTestId("".concat(this.testId,"__label"))}},{key:"getPropertyDescription",value:function getPropertyDescription(){return this.component.getByTestId("prop-editor__description")}},{key:"getInput",value:function getInput(){return this.component.getByTestId("prop-editor__input")}},{key:"getSwitcher",value:function getSwitcher(){return this.component.getByTestId("prop-editor__switcher")}},{key:"toggleSwitcher",value:function toggleSwitcher(){var _this=this;return _async_to_generator((function(){var switcher;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return switcher=_this.getSwitcher(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 1:return _state.sent(),[2]}}))}))()}},{key:"getValue",value:function getValue(){return"boolean"===this.editorElement.dataset.type?"true"===this.getSwitcher().ariaChecked:this.getInput().value}},{key:"setValue",value:function setValue(value){var _this=this;return _async_to_generator((function(){var switcher,input;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return"boolean"!==_this.editorElement.dataset.type?[3,5]:(switcher=_this.getSwitcher(),!0!==value||"false"!==switcher.ariaChecked?[3,2]:[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)]);case 1:_state.sent(),_state.label=2;case 2:return!1!==value||"true"!==switcher.ariaChecked?[3,4]:[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(switcher)];case 3:_state.sent(),_state.label=4;case 4:return[3,7];case 5:return input=_this.getInput(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(input,value)];case 6:_state.sent(),_state.label=7;case 7:return[2]}}))}))()}}]),PropEditorTO}()}}]);