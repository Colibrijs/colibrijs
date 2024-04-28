"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[835],{"../../node_modules/@ant-design/icons/es/icons/CloseOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_CloseOutlined});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_CloseOutlined={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),CloseOutlined_CloseOutlined=function CloseOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_CloseOutlined}))};const icons_CloseOutlined=react.forwardRef(CloseOutlined_CloseOutlined)},"../../node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_InfoCircleFilled});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_InfoCircleFilled={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),InfoCircleFilled_InfoCircleFilled=function InfoCircleFilled(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_InfoCircleFilled}))};const icons_InfoCircleFilled=react.forwardRef(InfoCircleFilled_InfoCircleFilled)},"../../node_modules/@tanstack/react-query/build/modern/useMutation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>useMutation});var react=__webpack_require__("../../node_modules/react/index.js"),mutation=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/mutation.js"),notifyManager=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/notifyManager.js"),subscribable=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/subscribable.js"),utils=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/utils.js"),MutationObserver=class extends subscribable.Q{#client;#currentResult=void 0;#currentMutation;#mutateOptions;constructor(client,options){super(),this.#client=client,this.setOptions(options),this.bindMethods(),this.#updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(options){const prevOptions=this.options;this.options=this.#client.defaultMutationOptions(options),(0,utils.f8)(this.options,prevOptions)||this.#client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#currentMutation,observer:this}),prevOptions?.mutationKey&&this.options.mutationKey&&(0,utils.EN)(prevOptions.mutationKey)!==(0,utils.EN)(this.options.mutationKey)?this.reset():"pending"===this.#currentMutation?.state.status&&this.#currentMutation.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#currentMutation?.removeObserver(this)}onMutationUpdate(action){this.#updateResult(),this.#notify(action)}getCurrentResult(){return this.#currentResult}reset(){this.#currentMutation?.removeObserver(this),this.#currentMutation=void 0,this.#updateResult(),this.#notify()}mutate(variables,options){return this.#mutateOptions=options,this.#currentMutation?.removeObserver(this),this.#currentMutation=this.#client.getMutationCache().build(this.#client,this.options),this.#currentMutation.addObserver(this),this.#currentMutation.execute(variables)}#updateResult(){const state=this.#currentMutation?.state??(0,mutation.$)();this.#currentResult={...state,isPending:"pending"===state.status,isSuccess:"success"===state.status,isError:"error"===state.status,isIdle:"idle"===state.status,mutate:this.mutate,reset:this.reset}}#notify(action){notifyManager.j.batch((()=>{if(this.#mutateOptions&&this.hasListeners()){const variables=this.#currentResult.variables,context=this.#currentResult.context;"success"===action?.type?(this.#mutateOptions.onSuccess?.(action.data,variables,context),this.#mutateOptions.onSettled?.(action.data,null,variables,context)):"error"===action?.type&&(this.#mutateOptions.onError?.(action.error,variables,context),this.#mutateOptions.onSettled?.(void 0,action.error,variables,context))}this.listeners.forEach((listener=>{listener(this.#currentResult)}))}))}},QueryClientProvider=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),modern_utils=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/utils.js");function useMutation(options,queryClient){const client=(0,QueryClientProvider.jE)(queryClient),[observer]=react.useState((()=>new MutationObserver(client,options)));react.useEffect((()=>{observer.setOptions(options)}),[observer,options]);const result=react.useSyncExternalStore(react.useCallback((onStoreChange=>observer.subscribe(notifyManager.j.batchCalls(onStoreChange))),[observer]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),mutate=react.useCallback(((variables,mutateOptions)=>{observer.mutate(variables,mutateOptions).catch(modern_utils.l)}),[observer]);if(result.error&&(0,modern_utils.G)(observer.options.throwOnError,[result.error]))throw result.error;return{...result,mutate,mutateAsync:result.mutate}}},"../../node_modules/@tanstack/react-query/build/modern/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function shouldThrowError(throwError,params){return"function"==typeof throwError?throwError(...params):!!throwError}function noop(){}__webpack_require__.d(__webpack_exports__,{G:()=>shouldThrowError,l:()=>noop})},"../../node_modules/antd/es/alert/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>es_alert});var react=__webpack_require__("../../node_modules/react/index.js"),CheckCircleFilled=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js"),CloseCircleFilled=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js"),CloseOutlined=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/CloseOutlined.js"),ExclamationCircleFilled=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js"),InfoCircleFilled=__webpack_require__("../../node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("../../node_modules/rc-motion/es/index.js"),pickAttrs=__webpack_require__("../../node_modules/rc-util/es/pickAttrs.js"),reactNode=__webpack_require__("../../node_modules/antd/es/_util/reactNode.js"),context=__webpack_require__("../../node_modules/antd/es/config-provider/context.js"),cssinjs_es=__webpack_require__("../../node_modules/@ant-design/cssinjs/es/index.js"),style=__webpack_require__("../../node_modules/antd/es/style/index.js"),genComponentStyleHook=__webpack_require__("../../node_modules/antd/es/theme/util/genComponentStyleHook.js");const genAlertTypeStyle=(bgColor,borderColor,iconColor,token,alertCls)=>({background:bgColor,border:`${(0,cssinjs_es.zA)(token.lineWidth)} ${token.lineType} ${borderColor}`,[`${alertCls}-icon`]:{color:iconColor}}),genBaseStyle=token=>{const{componentCls,motionDurationSlow:duration,marginXS,marginSM,fontSize,fontSizeLG,lineHeight,borderRadiusLG:borderRadius,motionEaseInOutCirc,withDescriptionIconSize,colorText,colorTextHeading,withDescriptionPadding,defaultPadding}=token;return{[componentCls]:Object.assign(Object.assign({},(0,style.dF)(token)),{position:"relative",display:"flex",alignItems:"center",padding:defaultPadding,wordWrap:"break-word",borderRadius,[`&${componentCls}-rtl`]:{direction:"rtl"},[`${componentCls}-content`]:{flex:1,minWidth:0},[`${componentCls}-icon`]:{marginInlineEnd:marginXS,lineHeight:0},"&-description":{display:"none",fontSize,lineHeight},"&-message":{color:colorTextHeading},[`&${componentCls}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${duration} ${motionEaseInOutCirc}, opacity ${duration} ${motionEaseInOutCirc},\n        padding-top ${duration} ${motionEaseInOutCirc}, padding-bottom ${duration} ${motionEaseInOutCirc},\n        margin-bottom ${duration} ${motionEaseInOutCirc}`},[`&${componentCls}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${componentCls}-with-description`]:{alignItems:"flex-start",padding:withDescriptionPadding,[`${componentCls}-icon`]:{marginInlineEnd:marginSM,fontSize:withDescriptionIconSize,lineHeight:0},[`${componentCls}-message`]:{display:"block",marginBottom:marginXS,color:colorTextHeading,fontSize:fontSizeLG},[`${componentCls}-description`]:{display:"block",color:colorText}},[`${componentCls}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},genTypeStyle=token=>{const{componentCls,colorSuccess,colorSuccessBorder,colorSuccessBg,colorWarning,colorWarningBorder,colorWarningBg,colorError,colorErrorBorder,colorErrorBg,colorInfo,colorInfoBorder,colorInfoBg}=token;return{[componentCls]:{"&-success":genAlertTypeStyle(colorSuccessBg,colorSuccessBorder,colorSuccess,token,componentCls),"&-info":genAlertTypeStyle(colorInfoBg,colorInfoBorder,colorInfo,token,componentCls),"&-warning":genAlertTypeStyle(colorWarningBg,colorWarningBorder,colorWarning,token,componentCls),"&-error":Object.assign(Object.assign({},genAlertTypeStyle(colorErrorBg,colorErrorBorder,colorError,token,componentCls)),{[`${componentCls}-description > pre`]:{margin:0,padding:0}})}}},genActionStyle=token=>{const{componentCls,iconCls,motionDurationMid,marginXS,fontSizeIcon,colorIcon,colorIconHover}=token;return{[componentCls]:{"&-action":{marginInlineStart:marginXS},[`${componentCls}-close-icon`]:{marginInlineStart:marginXS,padding:0,overflow:"hidden",fontSize:fontSizeIcon,lineHeight:(0,cssinjs_es.zA)(fontSizeIcon),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${iconCls}-close`]:{color:colorIcon,transition:`color ${motionDurationMid}`,"&:hover":{color:colorIconHover}}},"&-close-text":{color:colorIcon,transition:`color ${motionDurationMid}`,"&:hover":{color:colorIconHover}}}}},alert_style=(0,genComponentStyleHook.OF)("Alert",(token=>[genBaseStyle(token),genTypeStyle(token),genActionStyle(token)]),(token=>({withDescriptionIconSize:token.fontSizeHeading3,defaultPadding:`${token.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${token.paddingMD}px ${token.paddingContentHorizontalLG}px`})));var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const iconMapFilled={success:CheckCircleFilled.A,info:InfoCircleFilled.A,error:CloseCircleFilled.A,warning:ExclamationCircleFilled.A},IconNode=props=>{const{icon,prefixCls,type}=props,iconType=iconMapFilled[type]||null;return icon?(0,reactNode.fx)(icon,react.createElement("span",{className:`${prefixCls}-icon`},icon),(()=>({className:classnames_default()(`${prefixCls}-icon`,{[icon.props.className]:icon.props.className})}))):react.createElement(iconType,{className:`${prefixCls}-icon`})},CloseIconNode=props=>{const{isClosable,prefixCls,closeIcon,handleClose,ariaProps}=props,mergedCloseIcon=!0===closeIcon||void 0===closeIcon?react.createElement(CloseOutlined.A,null):closeIcon;return isClosable?react.createElement("button",Object.assign({type:"button",onClick:handleClose,className:`${prefixCls}-close-icon`,tabIndex:0},ariaProps),mergedCloseIcon):null};const alert_Alert=props=>{const{description,prefixCls:customizePrefixCls,message,banner,className,rootClassName,style,onMouseEnter,onMouseLeave,onClick,afterClose,showIcon,closable,closeText,closeIcon,action}=props,otherProps=__rest(props,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[closed,setClosed]=react.useState(!1);const ref=react.useRef(null),{getPrefixCls,direction,alert}=react.useContext(context.QO),prefixCls=getPrefixCls("alert",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=alert_style(prefixCls),handleClose=e=>{var _a;setClosed(!0),null===(_a=props.onClose)||void 0===_a||_a.call(props,e)},type=react.useMemo((()=>void 0!==props.type?props.type:banner?"warning":"info"),[props.type,banner]),isClosable=react.useMemo((()=>!("object"!=typeof closable||!closable.closeIcon)||(!!closeText||("boolean"==typeof closable?closable:!1!==closeIcon&&null!=closeIcon||!!(null==alert?void 0:alert.closable)))),[closeText,closeIcon,closable,null==alert?void 0:alert.closable]),isShowIcon=!(!banner||void 0!==showIcon)||showIcon,alertCls=classnames_default()(prefixCls,`${prefixCls}-${type}`,{[`${prefixCls}-with-description`]:!!description,[`${prefixCls}-no-icon`]:!isShowIcon,[`${prefixCls}-banner`]:!!banner,[`${prefixCls}-rtl`]:"rtl"===direction},null==alert?void 0:alert.className,className,rootClassName,cssVarCls,hashId),restProps=(0,pickAttrs.A)(otherProps,{aria:!0,data:!0}),mergedCloseIcon=react.useMemo((()=>{var _a,_b;return"object"==typeof closable&&closable.closeIcon?closable.closeIcon:closeText||(void 0!==closeIcon?closeIcon:"object"==typeof(null==alert?void 0:alert.closable)&&(null===(_a=null==alert?void 0:alert.closable)||void 0===_a?void 0:_a.closeIcon)?null===(_b=null==alert?void 0:alert.closable)||void 0===_b?void 0:_b.closeIcon:null==alert?void 0:alert.closeIcon)}),[closeIcon,closable,closeText,null==alert?void 0:alert.closeIcon]),mergedAriaProps=react.useMemo((()=>{const merged=null!=closable?closable:null==alert?void 0:alert.closable;if("object"==typeof merged){const{closeIcon:_}=merged;return __rest(merged,["closeIcon"])}return{}}),[closable,null==alert?void 0:alert.closable]);return wrapCSSVar(react.createElement(es.Ay,{visible:!closed,motionName:`${prefixCls}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:node=>({maxHeight:node.offsetHeight}),onLeaveEnd:afterClose},(_ref=>{let{className:motionClassName,style:motionStyle}=_ref;return react.createElement("div",Object.assign({ref,"data-show":!closed,className:classnames_default()(alertCls,motionClassName),style:Object.assign(Object.assign(Object.assign({},null==alert?void 0:alert.style),style),motionStyle),onMouseEnter,onMouseLeave,onClick,role:"alert"},restProps),isShowIcon?react.createElement(IconNode,{description,icon:props.icon,prefixCls,type}):null,react.createElement("div",{className:`${prefixCls}-content`},message?react.createElement("div",{className:`${prefixCls}-message`},message):null,description?react.createElement("div",{className:`${prefixCls}-description`},description):null),action?react.createElement("div",{className:`${prefixCls}-action`},action):null,react.createElement(CloseIconNode,{isClosable,prefixCls,closeIcon:mergedCloseIcon,handleClose,ariaProps:mergedAriaProps}))})))};var classCallCheck=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/createClass.js"),callSuper=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/callSuper.js"),inherits=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/inherits.js");const alert_ErrorBoundary=function(_React$Component){function ErrorBoundary(){var _this;return(0,classCallCheck.A)(this,ErrorBoundary),(_this=(0,callSuper.A)(this,ErrorBoundary,arguments)).state={error:void 0,info:{componentStack:""}},_this}return(0,inherits.A)(ErrorBoundary,_React$Component),(0,createClass.A)(ErrorBoundary,[{key:"componentDidCatch",value:function componentDidCatch(error,info){this.setState({error,info})}},{key:"render",value:function render(){const{message,description,children}=this.props,{error,info}=this.state,componentStack=info&&info.componentStack?info.componentStack:null,errorMessage=void 0===message?(error||"").toString():message,errorDescription=void 0===description?componentStack:description;return error?react.createElement(alert_Alert,{type:"error",message:errorMessage,description:react.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},errorDescription)}):children}}])}(react.Component),es_alert_Alert=alert_Alert;es_alert_Alert.ErrorBoundary=alert_ErrorBoundary;const es_alert=es_alert_Alert},"../../node_modules/antd/es/divider/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>divider});var react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),context=__webpack_require__("../../node_modules/antd/es/config-provider/context.js"),es=__webpack_require__("../../node_modules/@ant-design/cssinjs/es/index.js"),style=__webpack_require__("../../node_modules/antd/es/style/index.js"),genComponentStyleHook=__webpack_require__("../../node_modules/antd/es/theme/util/genComponentStyleHook.js"),statistic=__webpack_require__("../../node_modules/antd/es/theme/util/statistic.js");const genSharedDividerStyle=token=>{const{componentCls,sizePaddingEdgeHorizontal,colorSplit,lineWidth,textPaddingInline,orientationMargin,verticalMarginInline}=token;return{[componentCls]:Object.assign(Object.assign({},(0,style.dF)(token)),{borderBlockStart:`${(0,es.zA)(lineWidth)} solid ${colorSplit}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:verticalMarginInline,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,es.zA)(lineWidth)} solid ${colorSplit}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,es.zA)(token.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${componentCls}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,es.zA)(token.dividerHorizontalWithTextGutterMargin)} 0`,color:token.colorTextHeading,fontWeight:500,fontSize:token.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${colorSplit}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,es.zA)(lineWidth)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${componentCls}-with-text-left`]:{"&::before":{width:`calc(${orientationMargin} * 100%)`},"&::after":{width:`calc(100% - ${orientationMargin} * 100%)`}},[`&-horizontal${componentCls}-with-text-right`]:{"&::before":{width:`calc(100% - ${orientationMargin} * 100%)`},"&::after":{width:`calc(${orientationMargin} * 100%)`}},[`${componentCls}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:textPaddingInline},"&-dashed":{background:"none",borderColor:colorSplit,borderStyle:"dashed",borderWidth:`${(0,es.zA)(lineWidth)} 0 0`},[`&-horizontal${componentCls}-with-text${componentCls}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${componentCls}-dashed`]:{borderInlineStartWidth:lineWidth,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${componentCls}-with-text`]:{color:token.colorText,fontWeight:"normal",fontSize:token.fontSize},[`&-horizontal${componentCls}-with-text-left${componentCls}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${componentCls}-inner-text`]:{paddingInlineStart:sizePaddingEdgeHorizontal}},[`&-horizontal${componentCls}-with-text-right${componentCls}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${componentCls}-inner-text`]:{paddingInlineEnd:sizePaddingEdgeHorizontal}}})}},divider_style=(0,genComponentStyleHook.OF)("Divider",(token=>{const dividerToken=(0,statistic.h1)(token,{dividerHorizontalWithTextGutterMargin:token.margin,dividerHorizontalGutterMargin:token.marginLG,sizePaddingEdgeHorizontal:0});return[genSharedDividerStyle(dividerToken)]}),(token=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:token.marginXS})),{unitless:{orientationMargin:!0}});var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const divider=props=>{const{getPrefixCls,direction,divider}=react.useContext(context.QO),{prefixCls:customizePrefixCls,type="horizontal",orientation="center",orientationMargin,className,rootClassName,children,dashed,plain,style}=props,restProps=__rest(props,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),prefixCls=getPrefixCls("divider",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=divider_style(prefixCls),orientationPrefix=orientation.length>0?`-${orientation}`:orientation,hasChildren=!!children,hasCustomMarginLeft="left"===orientation&&null!=orientationMargin,hasCustomMarginRight="right"===orientation&&null!=orientationMargin,classString=classnames_default()(prefixCls,null==divider?void 0:divider.className,hashId,cssVarCls,`${prefixCls}-${type}`,{[`${prefixCls}-with-text`]:hasChildren,[`${prefixCls}-with-text${orientationPrefix}`]:hasChildren,[`${prefixCls}-dashed`]:!!dashed,[`${prefixCls}-plain`]:!!plain,[`${prefixCls}-rtl`]:"rtl"===direction,[`${prefixCls}-no-default-orientation-margin-left`]:hasCustomMarginLeft,[`${prefixCls}-no-default-orientation-margin-right`]:hasCustomMarginRight},className,rootClassName),memoizedOrientationMargin=react.useMemo((()=>"number"==typeof orientationMargin?orientationMargin:/^\d+$/.test(orientationMargin)?Number(orientationMargin):orientationMargin),[orientationMargin]),innerStyle=Object.assign(Object.assign({},hasCustomMarginLeft&&{marginLeft:memoizedOrientationMargin}),hasCustomMarginRight&&{marginRight:memoizedOrientationMargin});return wrapCSSVar(react.createElement("div",Object.assign({className:classString,style:Object.assign(Object.assign({},null==divider?void 0:divider.style),style)},restProps,{role:"separator"}),children&&"vertical"!==type&&react.createElement("span",{className:`${prefixCls}-inner-text`,style:innerStyle},children)))}}}]);