"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[617,656],{"./components/components-add/__stories__/components-add.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>components_add_stories});var useMutation=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),es_form=__webpack_require__("../../node_modules/antd/es/form/index.js"),es_alert=__webpack_require__("../../node_modules/antd/es/alert/index.js"),divider=__webpack_require__("../../node_modules/antd/es/divider/index.js"),input=__webpack_require__("../../node_modules/antd/es/input/index.js"),es_button=__webpack_require__("../../node_modules/antd/es/button/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),use_api=__webpack_require__("./hooks/use-api/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ComponentsAdd(param){var defaultValues=param.defaultValues,api=(0,use_api.g)(),form=_sliced_to_array(es_form.A.useForm(),1)[0];(0,react.useEffect)((function(){var _defaultValues_componentName,_defaultValues_libraryName,_defaultValues_src;form.setFieldsValue({componentName:null!==(_defaultValues_componentName=null==defaultValues?void 0:defaultValues.componentName)&&void 0!==_defaultValues_componentName?_defaultValues_componentName:"",libraryName:null!==(_defaultValues_libraryName=null==defaultValues?void 0:defaultValues.libraryName)&&void 0!==_defaultValues_libraryName?_defaultValues_libraryName:"",src:null!==(_defaultValues_src=null==defaultValues?void 0:defaultValues.src)&&void 0!==_defaultValues_src?_defaultValues_src:""})}),[form,defaultValues]);var _useMutation=(0,useMutation.n)({mutationFn:function(options){return api.components.post(options)}}),error=_useMutation.error,isPending=_useMutation.isPending,addComponent=_useMutation.mutateAsync,rules=(0,react.useMemo)((function(){return{componentName:[{required:!0,message:'Параметр "Название компонента" обязательный'}],libraryName:[{required:!0,message:'Параметр "Название библиотеки" обязательный'}],src:[{required:!0,message:'Параметр "Ссылка на сборку" обязательный'},{type:"url",message:'Параметр "Ссылка на сборку" должен быть ссылкой'}]}}),[]);return react.createElement(es_form.A,{layout:"vertical",form,onFinish:addComponent},error&&react.createElement(react.Fragment,null,react.createElement(es_alert.A,{message:error.message,type:"error","data-testid":"components-add__error"}),react.createElement(divider.A,{type:"vertical"})),react.createElement(es_form.A.Item,{label:"Название компонента",name:"componentName",rules:rules.componentName,"data-testid":"components-add__component-name",required:!0},react.createElement(input.A,{type:"text","data-testid":"components-add__component-name-input"})),react.createElement(es_form.A.Item,{label:"Название библиотеки",name:"libraryName",rules:rules.libraryName,"data-testid":"components-add__library-name",required:!0},react.createElement(input.A,{type:"text","data-testid":"components-add__library-name-input"})),react.createElement(es_form.A.Item,{label:"Ссылка на сборку",name:"src",rules:rules.src,"data-testid":"components-add__src",required:!0},react.createElement(input.A,{type:"url","data-testid":"components-add__src-input"})),react.createElement(es_button.Ay,{htmlType:"submit",loading:isPending,type:"primary","data-testid":"components-add__submit"},"Добавить"))}ComponentsAdd.__docgenInfo={description:"",methods:[],displayName:"ComponentsAdd",props:{defaultValues:{required:!1,tsType:{name:"Partial",elements:[{name:"Omit",elements:[{name:"IComponent"},{name:"literal",value:"'id'"}],raw:"Omit<IComponent, 'id'>"}],raw:"Partial<IComponentConstructorOptions>"},description:""}}};const components_add_stories={component:ComponentsAdd,title:"ComponentsAdd"};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/components-add/__stories__/validation.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComponentNameRequired:()=>ComponentNameRequired,LibraryNameRequired:()=>LibraryNameRequired,SrcRequired:()=>SrcRequired,SrcTypeUrl:()=>SrcTypeUrl,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/components.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=_object_spread_props(_object_spread({},__webpack_require__("./components/components-add/__stories__/components-add.stories.ts").default),{title:"ComponentsAdd/tests/validation"});var _ref,ComponentNameRequired={name:'Поле "Название компонента" является обязательным',args:{defaultValues:_object_spread_props(_object_spread({},_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.Q),{componentName:""})},play:(_ref=_async_to_generator((function(param){var canvasElement,step,story,componentName;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,(step=param.step)("Предусловие: изначально все поля, кроме componentName заполнены",(function(){})),story=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement),componentName=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(story.getByTestId("components-add__component-name")),[4,step("Убеждаюсь, что изначально элемента с ошибкой не видно",(function(){var error=componentName.queryByRole("alert");(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeNull()}))];case 1:return _state.sent(),[4,step('Кликаю на кнопку "Добавить"',(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(story.getByTestId("components-add__submit"))}))];case 2:return _state.sent(),[4,step("Убеждаюсь, что теперь элемент с ошибкой виден",_async_to_generator((function(){var error;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,componentName.findByRole("alert")];case 1:return error=_state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeVisible()];case 2:return _state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toHaveTextContent('Параметр "Название компонента" обязательный')];case 3:return _state.sent(),[2]}}))})))];case 3:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})},LibraryNameRequired={name:'Поле "Название библиотеки" является обязательным',args:{defaultValues:_object_spread_props(_object_spread({},_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.Q),{libraryName:""})},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,story,libraryName;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,(step=param.step)("Предусловие: изначально все поля, кроме libraryName заполнены",(function(){})),story=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement),libraryName=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(story.getByTestId("components-add__library-name")),[4,step("Убеждаюсь, что изначально элемента с ошибкой не видно",(function(){var error=libraryName.queryByRole("alert");(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeNull()}))];case 1:return _state.sent(),[4,step('Кликаю на кнопку "Добавить"',(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(story.getByTestId("components-add__submit"))}))];case 2:return _state.sent(),[4,step("Убеждаюсь, что теперь элемент с ошибкой виден",_async_to_generator((function(){var error;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,libraryName.findByRole("alert")];case 1:return error=_state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeVisible()];case 2:return _state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toHaveTextContent('Параметр "Название библиотеки" обязательный')];case 3:return _state.sent(),[2]}}))})))];case 3:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},SrcRequired={name:'Поле "Ссылка на сборку" является обязательным',args:{defaultValues:_object_spread_props(_object_spread({},_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.Q),{src:""})},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,story,src;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,(step=param.step)("Предусловие: изначально все поля, кроме src заполнены",(function(){})),story=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement),src=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(story.getByTestId("components-add__src")),[4,step("Убеждаюсь, что изначально элемента с ошибкой не видно",(function(){var error=src.queryByRole("alert");(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeNull()}))];case 1:return _state.sent(),[4,step('Кликаю на кнопку "Добавить"',(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(story.getByTestId("components-add__submit"))}))];case 2:return _state.sent(),[4,step("Убеждаюсь, что теперь элемент с ошибкой виден",_async_to_generator((function(){var error;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,src.findByRole("alert")];case 1:return error=_state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeVisible()];case 2:return _state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toHaveTextContent('Параметр "Ссылка на сборку" обязательный')];case 3:return _state.sent(),[2]}}))})))];case 3:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},SrcTypeUrl={name:'Поле "Ссылка на сборку" должно быть только ссылкой',args:{defaultValues:_object_spread_props(_object_spread({},_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.Q),{src:""})},play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,story,src;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,(step=param.step)("Предусловие: изначально все поля, кроме src заполнены",(function(){})),story=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement),src=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(story.getByTestId("components-add__src")),[4,step("Убеждаюсь, что изначально элемента с ошибкой не видно",(function(){var error=src.queryByRole("alert");(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeNull()}))];case 1:return _state.sent(),[4,step('Заполняю поле "Ссылка на сборку"',_async_to_generator((function(){var src;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return src=story.getByTestId("components-add__src-input"),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.type(src,"просто текст")];case 1:return _state.sent(),[2]}}))})))];case 2:return _state.sent(),[4,step('Кликаю на кнопку "Добавить"',(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(story.getByTestId("components-add__submit"))}))];case 3:return _state.sent(),[4,step("Убеждаюсь, что теперь элемент с ошибкой виден",_async_to_generator((function(){var error;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,src.findByRole("alert")];case 1:return error=_state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toBeVisible()];case 2:return _state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toHaveTextContent('Параметр "Ссылка на сборку" должен быть ссылкой')];case 3:return _state.sent(),[2]}}))})))];case 4:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["ComponentNameRequired","LibraryNameRequired","SrcRequired","SrcTypeUrl"]},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>_use_api__WEBPACK_IMPORTED_MODULE_0__.g});var _use_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./hooks/use-api/use-api.ts")}}]);