"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[8649],{"./components/content-editor/__stories__/integration-element-remove.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HidesOnRemove:()=>HidesOnRemove,RemovesOnRemove:()=>RemovesOnRemove,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/elements.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_content_editor_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/content-editor/__stories__/content-editor.stories.ts"),_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./hooks/use-api/mocked.tsx"),_test_object__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/content-editor/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_content_editor_stories__WEBPACK_IMPORTED_MODULE_2__.default),{title:"ContentEditor/tests/integration-element-remove"});var _ref,HidesOnRemove={name:"Когда элемент удаляется, интерфейс редактирования скрывается",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(api){api.override({elements:{delete:function(){return Promise.resolve(_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2)},get:function(){return Promise.resolve([_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2])}}})}))],play:(_ref=_async_to_generator((function(context){var contentEditor,elementRemove;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(contentEditor=new _test_object__WEBPACK_IMPORTED_MODULE_4__.S(context)).selectElement(_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2.id)];case 1:return _state.sent(),[4,(elementRemove=contentEditor.getElementEditorTO().getElementRemoveTO()).clickRemove()];case 2:return _state.sent(),[4,elementRemove.confirm()];case 3:return _state.sent(),[4,contentEditor.getElementEditorTO().isOpened()];case 4:return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3.apply(void 0,[_state.sent(),"Проверяю что интерфейс редактирования элемента скрыт"]).toBe(!1),[2]}}))})),function(context){return _ref.apply(this,arguments)})},RemovesOnRemove={name:"Когда элемент удаляется, он удаляется из дерева",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(api){api.override({elements:{delete:function(){return Promise.resolve(_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2)},get:function(){return Promise.resolve([_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2])}}})}))],play:function(){var _ref=_async_to_generator((function(context){var contentEditor,elementRemove;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(contentEditor=new _test_object__WEBPACK_IMPORTED_MODULE_4__.S(context)).selectElement(_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2.id)];case 1:return _state.sent(),elementRemove=contentEditor.getElementEditorTO().getElementRemoveTO(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(contentEditor.getElementsIds(),"Проверяю что изначально в дереве те элементы, которые вернула апишка").toStrictEqual([_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2.id]),[4,elementRemove.clickRemove()];case 2:return _state.sent(),[4,elementRemove.confirm()];case 3:return _state.sent(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(contentEditor.getElementsIds(),"Проверяю что в дереве нет ни одного элемента").toStrictEqual([]),[2]}}))}));return function(context){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["HidesOnRemove","RemovesOnRemove"]},"./components/content-editor/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>ContentEditorTO});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_element_add_test_object__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/element-add/test-object.ts"),_element_editor_test_object__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/element-editor/test-object.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var ContentEditorTO=function(){function ContentEditorTO(options){var _options_testId;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ContentEditorTO),_define_property(this,"canvasElement",void 0),_define_property(this,"step",void 0),_define_property(this,"testId",void 0),this.canvasElement=options.canvasElement,this.step=options.step,this.testId=null!==(_options_testId=options.testId)&&void 0!==_options_testId?_options_testId:"content-editor"}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(ContentEditorTO,[{key:"root",get:function get(){var canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(this.canvasElement);return(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvas.getByTestId(this.testId))}},{key:"getTreeNodeTitle",value:function getTreeNodeTitle(elementId){return this.root.findByTestId("content-editor__element-".concat(elementId))}},{key:"getElementsIds",value:function getElementsIds(){var elements=this.root.getByTestId("content-editor__elements-tree").querySelectorAll('[data-testid^="content-editor__element-"]');return Array.from(elements).map((function(element){return _sliced_to_array(element.getAttribute("data-testid").split("content-editor__element-"),2)[1]}))}},{key:"selectElement",value:function selectElement(elementId){var _this=this;return _async_to_generator((function(){var element;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.getTreeNodeTitle(elementId)];case 1:return element=_state.sent(),[4,_this.step("Кликаю на элемент с id ".concat(elementId),(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(element)}))];case 2:return _state.sent(),[4,_this.step("Жду пока сработает анимация открытия",(function(){return new Promise((function(resolve){return setTimeout(resolve,400)}))}))];case 3:return _state.sent(),[2]}}))}))()}},{key:"getAddElementTO",value:function getAddElementTO(){return new _element_add_test_object__WEBPACK_IMPORTED_MODULE_1__.D({canvasElement:this.canvasElement,step:this.step})}},{key:"getElementEditorTO",value:function getElementEditorTO(){return new _element_editor_test_object__WEBPACK_IMPORTED_MODULE_2__.H({canvasElement:this.canvasElement,step:this.step})}},{key:"startAddingElement",value:function startAddingElement(){var _this=this;return _async_to_generator((function(){var addElementButton;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return addElementButton=_this.root.getByTestId("content-editor__add-element-button"),[4,_this.step('Кликаю на кнопку "Добавить элемент"',(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(addElementButton)}))];case 1:return _state.sent(),[2]}}))}))()}},{key:"getErrorElement",value:function getErrorElement(){return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.findByTestId("content-editor__error")];case 1:return[2,_state.sent()]}}))}))()}},{key:"getEditorDrawerTitle",value:function getEditorDrawerTitle(){return this.findElement("element-editor-drawer__title",_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj)}},{key:"findElement",value:function findElement(testId){var root=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root,timeout=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,_this=this;return _async_to_generator((function(){var element;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return(element=root.queryByTestId(testId))||timeout<=0?[2,element]:[4,new Promise((function(resolve){return setTimeout(resolve,50)}))];case 1:return _state.sent(),[2,_this.findElement(testId,root,timeout-50)]}}))}))()}}]),ContentEditorTO}()}}]);