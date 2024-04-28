"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[7344],{"../../node_modules/@ant-design/icons/es/icons/CloseOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_CloseOutlined});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_CloseOutlined={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),CloseOutlined_CloseOutlined=function CloseOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_CloseOutlined}))};const icons_CloseOutlined=react.forwardRef(CloseOutlined_CloseOutlined)},"../../node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_InfoCircleFilled});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_InfoCircleFilled={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),InfoCircleFilled_InfoCircleFilled=function InfoCircleFilled(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_InfoCircleFilled}))};const icons_InfoCircleFilled=react.forwardRef(InfoCircleFilled_InfoCircleFilled)},"./components/page-title/__stories__/page-title.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>page_title_stories});var pages=__webpack_require__("../mocks/pages.ts"),flex=__webpack_require__("../../node_modules/antd/es/flex/index.js"),typography=__webpack_require__("../../node_modules/antd/es/typography/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),page_remove=__webpack_require__("./components/page-remove/page-remove.tsx");function PageTitle(param){var page=param.page;return react.createElement(flex.A,{align:"center",justify:"space-between","data-testid":"page-title"},react.createElement(typography.A.Title,{level:1,"data-testid":"page-title__title"},page.route),react.createElement(page_remove.Q,{page}))}PageTitle.__docgenInfo={description:"",methods:[],displayName:"PageTitle",props:{page:{required:!0,tsType:{name:"IPage"},description:""}}};const page_title_stories={component:PageTitle,title:"PageTitle",args:{page:pages.ab}};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/@tanstack/react-query/build/modern/useMutation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>useMutation});var react=__webpack_require__("../../node_modules/react/index.js"),mutation=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/mutation.js"),notifyManager=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/notifyManager.js"),subscribable=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/subscribable.js"),utils=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/utils.js"),MutationObserver=class extends subscribable.Q{#client;#currentResult=void 0;#currentMutation;#mutateOptions;constructor(client,options){super(),this.#client=client,this.setOptions(options),this.bindMethods(),this.#updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(options){const prevOptions=this.options;this.options=this.#client.defaultMutationOptions(options),(0,utils.f8)(this.options,prevOptions)||this.#client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#currentMutation,observer:this}),prevOptions?.mutationKey&&this.options.mutationKey&&(0,utils.EN)(prevOptions.mutationKey)!==(0,utils.EN)(this.options.mutationKey)?this.reset():"pending"===this.#currentMutation?.state.status&&this.#currentMutation.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#currentMutation?.removeObserver(this)}onMutationUpdate(action){this.#updateResult(),this.#notify(action)}getCurrentResult(){return this.#currentResult}reset(){this.#currentMutation?.removeObserver(this),this.#currentMutation=void 0,this.#updateResult(),this.#notify()}mutate(variables,options){return this.#mutateOptions=options,this.#currentMutation?.removeObserver(this),this.#currentMutation=this.#client.getMutationCache().build(this.#client,this.options),this.#currentMutation.addObserver(this),this.#currentMutation.execute(variables)}#updateResult(){const state=this.#currentMutation?.state??(0,mutation.$)();this.#currentResult={...state,isPending:"pending"===state.status,isSuccess:"success"===state.status,isError:"error"===state.status,isIdle:"idle"===state.status,mutate:this.mutate,reset:this.reset}}#notify(action){notifyManager.j.batch((()=>{if(this.#mutateOptions&&this.hasListeners()){const variables=this.#currentResult.variables,context=this.#currentResult.context;"success"===action?.type?(this.#mutateOptions.onSuccess?.(action.data,variables,context),this.#mutateOptions.onSettled?.(action.data,null,variables,context)):"error"===action?.type&&(this.#mutateOptions.onError?.(action.error,variables,context),this.#mutateOptions.onSettled?.(void 0,action.error,variables,context))}this.listeners.forEach((listener=>{listener(this.#currentResult)}))}))}},QueryClientProvider=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),modern_utils=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/utils.js");function useMutation(options,queryClient){const client=(0,QueryClientProvider.jE)(queryClient),[observer]=react.useState((()=>new MutationObserver(client,options)));react.useEffect((()=>{observer.setOptions(options)}),[observer,options]);const result=react.useSyncExternalStore(react.useCallback((onStoreChange=>observer.subscribe(notifyManager.j.batchCalls(onStoreChange))),[observer]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),mutate=react.useCallback(((variables,mutateOptions)=>{observer.mutate(variables,mutateOptions).catch(modern_utils.l)}),[observer]);if(result.error&&(0,modern_utils.G)(observer.options.throwOnError,[result.error]))throw result.error;return{...result,mutate,mutateAsync:result.mutate}}},"../../node_modules/@tanstack/react-query/build/modern/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function shouldThrowError(throwError,params){return"function"==typeof throwError?throwError(...params):!!throwError}function noop(){}__webpack_require__.d(__webpack_exports__,{G:()=>shouldThrowError,l:()=>noop})},"../../node_modules/antd/es/_util/gapSize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isPresetSize(size){return["small","middle","large"].includes(size)}function isValidGapNumber(size){return!!size&&("number"==typeof size&&!Number.isNaN(size))}__webpack_require__.d(__webpack_exports__,{X:()=>isPresetSize,m:()=>isValidGapNumber})},"../../node_modules/antd/es/flex/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>flex});var react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),omit=__webpack_require__("../../node_modules/rc-util/es/omit.js"),gapSize=__webpack_require__("../../node_modules/antd/es/_util/gapSize.js"),context=__webpack_require__("../../node_modules/antd/es/config-provider/context.js"),genComponentStyleHook=__webpack_require__("../../node_modules/antd/es/theme/util/genComponentStyleHook.js"),statistic=__webpack_require__("../../node_modules/antd/es/theme/util/statistic.js");const flexWrapValues=["wrap","nowrap","wrap-reverse"],justifyContentValues=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],alignItemsValues=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];const utils=function createFlexClassNames(prefixCls,props){return classnames_default()(Object.assign(Object.assign(Object.assign({},((prefixCls,props)=>{const wrapCls={};return flexWrapValues.forEach((cssKey=>{wrapCls[`${prefixCls}-wrap-${cssKey}`]=props.wrap===cssKey})),wrapCls})(prefixCls,props)),((prefixCls,props)=>{const alignCls={};return alignItemsValues.forEach((cssKey=>{alignCls[`${prefixCls}-align-${cssKey}`]=props.align===cssKey})),alignCls[`${prefixCls}-align-stretch`]=!props.align&&!!props.vertical,alignCls})(prefixCls,props)),((prefixCls,props)=>{const justifyCls={};return justifyContentValues.forEach((cssKey=>{justifyCls[`${prefixCls}-justify-${cssKey}`]=props.justify===cssKey})),justifyCls})(prefixCls,props)))},genFlexStyle=token=>{const{componentCls}=token;return{[componentCls]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},genFlexGapStyle=token=>{const{componentCls}=token;return{[componentCls]:{"&-gap-small":{gap:token.flexGapSM},"&-gap-middle":{gap:token.flexGap},"&-gap-large":{gap:token.flexGapLG}}}},genFlexWrapStyle=token=>{const{componentCls}=token,wrapStyle={};return flexWrapValues.forEach((value=>{wrapStyle[`${componentCls}-wrap-${value}`]={flexWrap:value}})),wrapStyle},genAlignItemsStyle=token=>{const{componentCls}=token,alignStyle={};return alignItemsValues.forEach((value=>{alignStyle[`${componentCls}-align-${value}`]={alignItems:value}})),alignStyle},genJustifyContentStyle=token=>{const{componentCls}=token,justifyStyle={};return justifyContentValues.forEach((value=>{justifyStyle[`${componentCls}-justify-${value}`]={justifyContent:value}})),justifyStyle},flex_style=(0,genComponentStyleHook.OF)("Flex",(token=>{const{paddingXS,padding,paddingLG}=token,flexToken=(0,statistic.h1)(token,{flexGapSM:paddingXS,flexGap:padding,flexGapLG:paddingLG});return[genFlexStyle(flexToken),genFlexGapStyle(flexToken),genFlexWrapStyle(flexToken),genAlignItemsStyle(flexToken),genJustifyContentStyle(flexToken)]}),(()=>({})),{resetStyle:!1});var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Flex=react.forwardRef(((props,ref)=>{const{prefixCls:customizePrefixCls,rootClassName,className,style,flex,gap,children,vertical=!1,component:Component="div"}=props,othersProps=__rest(props,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:ctxFlex,direction:ctxDirection,getPrefixCls}=react.useContext(context.QO),prefixCls=getPrefixCls("flex",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=flex_style(prefixCls),mergedVertical=null!=vertical?vertical:null==ctxFlex?void 0:ctxFlex.vertical,mergedCls=classnames_default()(className,rootClassName,null==ctxFlex?void 0:ctxFlex.className,prefixCls,hashId,cssVarCls,utils(prefixCls,props),{[`${prefixCls}-rtl`]:"rtl"===ctxDirection,[`${prefixCls}-gap-${gap}`]:(0,gapSize.X)(gap),[`${prefixCls}-vertical`]:mergedVertical}),mergedStyle=Object.assign(Object.assign({},null==ctxFlex?void 0:ctxFlex.style),style);return flex&&(mergedStyle.flex=flex),gap&&!(0,gapSize.X)(gap)&&(mergedStyle.gap=gap),wrapCSSVar(react.createElement(Component,Object.assign({ref,className:mergedCls,style:mergedStyle},(0,omit.A)(othersProps,["justify","wrap","align"])),children))}));const flex=Flex},"./components/page-remove/page-remove.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>PageRemove});var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/DeleteOutlined.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/useMutation.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/message/index.js"),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/antd/es/popconfirm/index.js"),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/antd/es/tooltip/index.js"),antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/antd/es/button/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./hooks/use-api/index.ts");function PageRemove(param){var page=param.page,api=(0,_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.gf)(),queryClient=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.jE)(),_useMutation=(0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.n)({mutationFn:function(){return api.pages.delete(page.id)},onError:function(error){return antd__WEBPACK_IMPORTED_MODULE_4__.Ay.error(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{"data-testid":"page-remove__error"},error.message))},onSuccess:function(){queryClient.invalidateQueries({queryKey:[_hooks_use_api__WEBPACK_IMPORTED_MODULE_1__.PE]}),antd__WEBPACK_IMPORTED_MODULE_4__.Ay.success(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{"data-testid":"page-remove__success"},"Страница “",page.route,"” успешно удалена"))}}),deletePage=_useMutation.mutate,isPending=_useMutation.isPending,confirmHandler=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){deletePage()}),[deletePage]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.A,{title:"Удалить страницу?",description:"Страница “".concat(page.route,"” будет удалена с концами"),okText:react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{"data-testid":"page-remove__confirm"},"Да"),cancelText:"Галя, отмена",onConfirm:confirmHandler},react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__.A,{title:"Удалить"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.Ay,{loading:isPending,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.A,null),htmlType:"button","data-testid":"page-remove",shape:"circle",danger:!0,ghost:!0})))}PageRemove.__docgenInfo={description:"",methods:[],displayName:"PageRemove",props:{page:{required:!0,tsType:{name:"IPage"},description:""}}}},"./hooks/use-api/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bh:()=>COMPONENTS_KEY,PE:()=>PAGES_KEY,gf:()=>use_api.g});var COMPONENTS_KEY="components",PAGES_KEY="pages",use_api=__webpack_require__("./hooks/use-api/use-api.ts")}}]);