(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[3609],{"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./components/page-add-modal/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>PageAddModalTO});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var PageAddModalTO=function(){function PageAddModalTO(options){var _options_testId;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PageAddModalTO),_define_property(this,"step",void 0),_define_property(this,"testId",void 0),_define_property(this,"root",null),this.step=options.step,this.testId=null!==(_options_testId=options.testId)&&void 0!==_options_testId?_options_testId:"page-add-modal"}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PageAddModalTO,[{key:"getRoot",value:function getRoot(){var _this=this;return _async_to_generator((function(){var modal;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return _this.root?[2,Promise.resolve(_this.root)]:[4,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.nj.findByTestId(_this.testId)];case 1:return modal=_state.sent(),[2,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(modal)]}}))}))()}},{key:"waitForContent",value:function waitForContent(){var _this=this;return _async_to_generator((function(){var root;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.getRoot()];case 1:return root=_state.sent(),[4,_this.step("Жду появления контента модального окна",_async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((function(){return(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(root.getByTestId("page-add-modal__content")).toBeVisible()}))];case 1:return _state.sent(),[2]}}))})))];case 2:return _state.sent(),[2,root.getByTestId("page-add-modal__content")]}}))}))()}}]),PageAddModalTO}()},"./components/page-add/test-object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>PageAddTO});var _colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/pages.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var PageAddTO=function(){function PageAddTO(options){var _options_testId;!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PageAddTO),_define_property(this,"rootElement",void 0),_define_property(this,"step",void 0),_define_property(this,"testId",void 0),_define_property(this,"_root",null),this.rootElement=options.rootElement,this.step=options.step,this.testId=null!==(_options_testId=options.testId)&&void 0!==_options_testId?_options_testId:"page-add"}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(PageAddTO,[{key:"root",get:function get(){if(this._root)return this._root;var story=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(this.rootElement);return this._root=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(story.getByTestId(this.testId)),this._root}},{key:"fillAndSubmit",value:function fillAndSubmit(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_colibrijs_mocks_pages__WEBPACK_IMPORTED_MODULE_0__.OE,_this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.fillName(options.name)];case 1:return _state.sent(),[4,_this.fillRoute(options.route)];case 2:return _state.sent(),[4,_this.submit()];case 3:return _state.sent(),[2]}}))}))()}},{key:"fillName",value:function fillName(text){var _this=this;return _async_to_generator((function(){var input;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return input=_this.root.getByTestId("page-add__name-input"),[4,_this.step('Ввожу в поле "Адрес" значение "'.concat(text,'"'),(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.type(input,text)}))];case 1:return _state.sent(),[2]}}))}))()}},{key:"fillRoute",value:function fillRoute(text){var _this=this;return _async_to_generator((function(){var input;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return input=_this.root.getByTestId("page-add__route-input"),[4,_this.step('Ввожу в поле "Адрес" значение "'.concat(text,'"'),(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.type(input,text)}))];case 1:return _state.sent(),[2]}}))}))()}},{key:"submit",value:function submit(){var _this=this;return _async_to_generator((function(){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_this.step('Кликаю на кнопку "Добавить"',_async_to_generator((function(){var submit;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return submit=_this.root.getByTestId("page-add__submit"),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(submit)];case 1:return _state.sent(),[2]}}))})))];case 1:return _state.sent(),[2]}}))}))()}},{key:"getError",value:function getError(){var _options_strict=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).strict;return void 0===_options_strict||_options_strict?this.root.findByTestId("page-add__error"):Promise.resolve(this.root.queryByTestId("page-add__error"))}},{key:"getNameError",value:function getNameError(){var _options_strict=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).strict,strict=void 0===_options_strict||_options_strict,name=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(this.root.getByTestId("page-add__name"));return strict?name.findByRole("alert"):Promise.resolve(name.queryByRole("alert"))}},{key:"getRouteError",value:function getRouteError(){var _options_strict=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).strict,strict=void 0===_options_strict||_options_strict,route=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(this.root.getByTestId("page-add__route"));return strict?route.findByRole("alert"):Promise.resolve(route.queryByRole("alert"))}}]),PageAddTO}()}}]);