"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[41,982],{"./components/components-remove/__stories__/api.spec.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RequestError:()=>RequestError,RequestParameters:()=>RequestParameters,RequestSuccess:()=>RequestSuccess,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../mocks/components.ts"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),_components_remove_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/components-remove/__stories__/components-remove.stories.tsx"),_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./hooks/use-api/mocked.tsx");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const __WEBPACK_DEFAULT_EXPORT__=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_components_remove_stories__WEBPACK_IMPORTED_MODULE_2__.default),{title:"ComponentsRemove/tests/api"});var _ref,RequestParameters={name:"При подтверждении удаления, вызывается api.components.delete с id компонента, переданного в пропсах",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({components:{delete:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)().mockResolvedValue(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.e)}})}))],play:(_ref=_async_to_generator((function(param){var args,canvasElement,step,apiClient,story,remove;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return args=param.args,canvasElement=param.canvasElement,step=param.step,apiClient=args.apiClient,story=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement),remove=story.getByTestId("components-remove__remove"),[4,step('кликаю на кнопку "Удалить"',(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(remove)}))];case 1:return _state.sent(),[4,step("подтверждаю удаление",_async_to_generator((function(){var confirm;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.findByTestId("components-remove__confirm")];case 1:return confirm=_state.sent(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(confirm)];case 2:return _state.sent(),[2]}}))})))];case 2:return _state.sent(),[4,step("проверяю, что api.components.delete был вызван с id компонента в пропсах",(function(){return(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(apiClient.components.delete).toHaveBeenCalledWith(args.component.id)}))];case 3:return _state.sent(),[2]}}))})),function(_){return _ref.apply(this,arguments)})},RequestError={name:"Если при запросе возникла ошибка, появляется уведомление с информацией об ошибке",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({components:{delete:function(){return Promise.reject(new Error("Случилось неладное"))}}})}))],play:function(){var _ref=_async_to_generator((function(param){var canvasElement,step,story,remove;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,(step=param.step)("Предусловие: api.components.delete выбрасывает ошибку",(function(){})),story=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement),remove=story.getByTestId("components-remove__remove"),[4,step('кликаю на кнопку "Удалить"',(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(remove)}))];case 1:return _state.sent(),[4,step("подтверждаю удаление",_async_to_generator((function(){var confirm;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.findByTestId("components-remove__confirm")];case 1:return confirm=_state.sent(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(confirm)];case 2:return _state.sent(),[2]}}))})))];case 2:return _state.sent(),[4,step("проверяю, что появилось уведомление с текстом ошибки",_async_to_generator((function(){var error;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.findByTestId("components-remove__error")];case 1:return error=_state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(error).toHaveTextContent("Случилось неладное")];case 2:return _state.sent(),[2]}}))})))];case 3:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()},RequestSuccess={name:"При успешном выполнении запроса, появляется сообщение о том что компонент успешно удалён",decorators:[(0,_hooks_use_api_mocked__WEBPACK_IMPORTED_MODULE_3__.M)((function(apiClient){apiClient.override({components:{delete:function(){return Promise.resolve(_colibrijs_mocks_components__WEBPACK_IMPORTED_MODULE_0__.e)}}})}))],play:function(){var _ref=_async_to_generator((function(param){var args,canvasElement,step,story,remove;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return args=param.args,canvasElement=param.canvasElement,step=param.step,story=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement),remove=story.getByTestId("components-remove__remove"),[4,step('кликаю на кнопку "Удалить"',(function(){return _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(remove)}))];case 1:return _state.sent(),[4,step("подтверждаю удаление",_async_to_generator((function(){var confirm;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.findByTestId("components-remove__confirm")];case 1:return confirm=_state.sent(),[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(confirm)];case 2:return _state.sent(),[2]}}))})))];case 2:return _state.sent(),[4,step("проверяю, что появилось сообщение о том что компонент успешно удалён",_async_to_generator((function(){var success;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.findByTestId("components-remove__success")];case 1:return success=_state.sent(),[4,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(success).toHaveTextContent("Компонент “".concat(args.component.componentName,"” успешно удалён"))];case 2:return _state.sent(),[2]}}))})))];case 3:return _state.sent(),[2]}}))}));return function(_){return _ref.apply(this,arguments)}}()};const __namedExportsOrder=["RequestParameters","RequestError","RequestSuccess"]},"./components/components-remove/__stories__/components-remove.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>components_remove_stories});var components=__webpack_require__("../mocks/components.ts"),dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),message=__webpack_require__("../../node_modules/antd/es/message/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),DeleteOutlined=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/DeleteOutlined.js"),useMutation=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),popconfirm=__webpack_require__("../../node_modules/antd/es/popconfirm/index.js"),tooltip=__webpack_require__("../../node_modules/antd/es/tooltip/index.js"),es_button=__webpack_require__("../../node_modules/antd/es/button/index.js"),use_api=__webpack_require__("./hooks/use-api/index.ts");function ComponentsRemove(param){var component=param.component,onRemove=param.onRemove,api=(0,use_api.g)(),_useMutation=(0,useMutation.n)({mutationFn:function(){return api.components.delete(component.id)},onError:function(error){return message.Ay.error(react.createElement("span",{"data-testid":"components-remove__error"},error.message))},onSuccess:function(removedComponent){onRemove(removedComponent),message.Ay.success(react.createElement("span",{"data-testid":"components-remove__success"},"Компонент “",component.componentName,"” успешно удалён"))}}),deleteComponent=_useMutation.mutate,isPending=_useMutation.isPending,confirmHandler=(0,react.useCallback)((function(){deleteComponent()}),[deleteComponent]);return react.createElement(popconfirm.A,{title:"Удалить компонент?",description:"Компонент “".concat(component.componentName,"” будет удалён с концами"),okText:react.createElement("span",{"data-testid":"components-remove__confirm"},"Да"),cancelText:"Галя, отмена",onConfirm:confirmHandler},react.createElement(tooltip.A,{title:"Удалить"},react.createElement(es_button.Ay,{loading:isPending,icon:react.createElement(DeleteOutlined.A,null),htmlType:"button","data-testid":"components-remove__remove",shape:"circle",danger:!0})))}ComponentsRemove.__docgenInfo={description:"",methods:[],displayName:"ComponentsRemove",props:{component:{required:!0,tsType:{name:"IComponent"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(component: IComponent) => void",signature:{arguments:[{type:{name:"IComponent"},name:"component"}],return:{name:"void"}}},description:""}}};const components_remove_stories={component:ComponentsRemove,title:"ComponentsRemove",args:{component:components.e,onRemove:(0,dist.fn)()},decorators:[function(Story){return message.Ay.destroy(),react.createElement(Story,null)}]};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>_use_api__WEBPACK_IMPORTED_MODULE_0__.g});var _use_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./hooks/use-api/use-api.ts")}}]);