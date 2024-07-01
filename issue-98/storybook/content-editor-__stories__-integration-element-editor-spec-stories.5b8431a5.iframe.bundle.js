"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[620],{"./components/content-editor/__stories__/integration-element-editor.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EventChange:()=>EventChange,EventRemove:()=>EventRemove,HiddenByDefault:()=>HiddenByDefault,Title:()=>Title,VisibleOnSelect:()=>VisibleOnSelect,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/elements.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_content_editor_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/content-editor/__stories__/content-editor.stories.ts"),_test_object__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/content-editor/test-object.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_content_editor_stories__WEBPACK_IMPORTED_MODULE_2__.default),{title:"ContentEditor/tests/integration-element-editor"});var _ref,HiddenByDefault={name:"Редактор элемента спрятан по умолчанию",play:(_ref=_async_to_generator((function(context){var editor;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,new _test_object__WEBPACK_IMPORTED_MODULE_3__.S(context).getEditorDrawerElement()];case 1:return editor=_state.sent(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(editor).toBeNull(),[2]}}))})),function(context){return _ref.apply(this,arguments)})},VisibleOnSelect={name:"При выборе элемента в дереве, открывается редактор этого элемента",args:{content:[_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2]},play:function(){var _ref=_async_to_generator((function(context){var contentEditor,editor;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(contentEditor=new _test_object__WEBPACK_IMPORTED_MODULE_3__.S(context)).selectElement(_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2.id)];case 1:return _state.sent(),[4,contentEditor.getEditorDrawerElement()];case 2:return editor=_state.sent(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(editor).toBeVisible(),[2]}}))}));return function(context){return _ref.apply(this,arguments)}}()},Title={name:"В хедере редактора пропсов выводится название компонента",args:{content:[_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2]},play:function(){var _ref=_async_to_generator((function(context){var contentEditor,editorTitle;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(contentEditor=new _test_object__WEBPACK_IMPORTED_MODULE_3__.S(context)).selectElement(_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2.id)];case 1:return _state.sent(),[4,contentEditor.getEditorDrawerTitle()];case 2:return editorTitle=_state.sent(),(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(editorTitle).toHaveTextContent(_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2.component.name),[2]}}))}));return function(context){return _ref.apply(this,arguments)}}()},EventChange={name:"При редактировании пропсов, вызывается onChange с изменённым контентом",args:{content:[_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2],onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()}},EventRemove={name:"При удалении элемента, вызывается onChange с изменённым контентом",args:{content:[_colibrijs_mocks_elements__WEBPACK_IMPORTED_MODULE_0__.L2],onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()}};const __namedExportsOrder=["HiddenByDefault","VisibleOnSelect","Title","EventChange","EventRemove"]}}]);