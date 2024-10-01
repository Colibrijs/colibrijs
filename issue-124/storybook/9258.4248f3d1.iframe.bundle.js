"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[9258],{"../../node_modules/antd/es/drawer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>drawer});var react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),es=__webpack_require__("../../node_modules/@rc-component/portal/es/index.js"),useLayoutEffect=__webpack_require__("../../node_modules/rc-util/es/hooks/useLayoutEffect.js"),DrawerContext=react.createContext(null),RefContext=react.createContext({});const context=DrawerContext;var defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),rc_motion_es=__webpack_require__("../../node_modules/rc-motion/es/index.js"),KeyCode=__webpack_require__("../../node_modules/rc-util/es/KeyCode.js"),pickAttrs=__webpack_require__("../../node_modules/rc-util/es/pickAttrs.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),ref=__webpack_require__("../../node_modules/rc-util/es/ref.js"),_excluded=["prefixCls","className","containerRef"];const es_DrawerPanel=function DrawerPanel(props){var prefixCls=props.prefixCls,className=props.className,containerRef=props.containerRef,restProps=(0,objectWithoutProperties.A)(props,_excluded),panelRef=react.useContext(RefContext).panel,mergedRef=(0,ref.xK)(panelRef,containerRef);return react.createElement("div",(0,esm_extends.A)({className:classnames_default()("".concat(prefixCls,"-content"),className),role:"dialog",ref:mergedRef},(0,pickAttrs.A)(props,{aria:!0}),{"aria-modal":"true"},restProps))};var es_warning=__webpack_require__("../../node_modules/rc-util/es/warning.js");function parseWidthHeight(value){return"string"==typeof value&&String(Number(value))===value?((0,es_warning.Ay)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(value)):value}var sentinelStyle={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function DrawerPopup(props,ref){var _ref,_pushConfig$distance,_pushConfig,prefixCls=props.prefixCls,open=props.open,placement=props.placement,inline=props.inline,push=props.push,forceRender=props.forceRender,autoFocus=props.autoFocus,keyboard=props.keyboard,drawerClassNames=props.classNames,rootClassName=props.rootClassName,rootStyle=props.rootStyle,zIndex=props.zIndex,className=props.className,id=props.id,style=props.style,motion=props.motion,width=props.width,height=props.height,children=props.children,mask=props.mask,maskClosable=props.maskClosable,maskMotion=props.maskMotion,maskClassName=props.maskClassName,maskStyle=props.maskStyle,afterOpenChange=props.afterOpenChange,onClose=props.onClose,onMouseEnter=props.onMouseEnter,onMouseOver=props.onMouseOver,onMouseLeave=props.onMouseLeave,onClick=props.onClick,onKeyDown=props.onKeyDown,onKeyUp=props.onKeyUp,styles=props.styles,drawerRender=props.drawerRender,panelRef=react.useRef(),sentinelStartRef=react.useRef(),sentinelEndRef=react.useRef();react.useImperativeHandle(ref,(function(){return panelRef.current}));react.useEffect((function(){var _panelRef$current;open&&autoFocus&&(null===(_panelRef$current=panelRef.current)||void 0===_panelRef$current||_panelRef$current.focus({preventScroll:!0}))}),[open]);var _React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.A)(_React$useState,2),pushed=_React$useState2[0],setPushed=_React$useState2[1],parentContext=react.useContext(context),pushDistance=null!==(_ref=null!==(_pushConfig$distance=null===(_pushConfig="boolean"==typeof push?push?{}:{distance:0}:push||{})||void 0===_pushConfig?void 0:_pushConfig.distance)&&void 0!==_pushConfig$distance?_pushConfig$distance:null==parentContext?void 0:parentContext.pushDistance)&&void 0!==_ref?_ref:180,mergedContext=react.useMemo((function(){return{pushDistance,push:function push(){setPushed(!0)},pull:function pull(){setPushed(!1)}}}),[pushDistance]);react.useEffect((function(){var _parentContext$push,_parentContext$pull;open?null==parentContext||null===(_parentContext$push=parentContext.push)||void 0===_parentContext$push||_parentContext$push.call(parentContext):null==parentContext||null===(_parentContext$pull=parentContext.pull)||void 0===_parentContext$pull||_parentContext$pull.call(parentContext)}),[open]),react.useEffect((function(){return function(){var _parentContext$pull2;null==parentContext||null===(_parentContext$pull2=parentContext.pull)||void 0===_parentContext$pull2||_parentContext$pull2.call(parentContext)}}),[]);var maskNode=mask&&react.createElement(rc_motion_es.Ay,(0,esm_extends.A)({key:"mask"},maskMotion,{visible:open}),(function(_ref2,maskRef){var motionMaskClassName=_ref2.className,motionMaskStyle=_ref2.style;return react.createElement("div",{className:classnames_default()("".concat(prefixCls,"-mask"),motionMaskClassName,null==drawerClassNames?void 0:drawerClassNames.mask,maskClassName),style:(0,objectSpread2.A)((0,objectSpread2.A)((0,objectSpread2.A)({},motionMaskStyle),maskStyle),null==styles?void 0:styles.mask),onClick:maskClosable&&open?onClose:void 0,ref:maskRef})})),motionProps="function"==typeof motion?motion(placement):motion,wrapperStyle={};if(pushed&&pushDistance)switch(placement){case"top":wrapperStyle.transform="translateY(".concat(pushDistance,"px)");break;case"bottom":wrapperStyle.transform="translateY(".concat(-pushDistance,"px)");break;case"left":wrapperStyle.transform="translateX(".concat(pushDistance,"px)");break;default:wrapperStyle.transform="translateX(".concat(-pushDistance,"px)")}"left"===placement||"right"===placement?wrapperStyle.width=parseWidthHeight(width):wrapperStyle.height=parseWidthHeight(height);var eventHandlers={onMouseEnter,onMouseOver,onMouseLeave,onClick,onKeyDown,onKeyUp},panelNode=react.createElement(rc_motion_es.Ay,(0,esm_extends.A)({key:"panel"},motionProps,{visible:open,forceRender,onVisibleChanged:function onVisibleChanged(nextVisible){null==afterOpenChange||afterOpenChange(nextVisible)},removeOnLeave:!1,leavedClassName:"".concat(prefixCls,"-content-wrapper-hidden")}),(function(_ref3,motionRef){var motionClassName=_ref3.className,motionStyle=_ref3.style,content=react.createElement(es_DrawerPanel,(0,esm_extends.A)({id,containerRef:motionRef,prefixCls,className:classnames_default()(className,null==drawerClassNames?void 0:drawerClassNames.content),style:(0,objectSpread2.A)((0,objectSpread2.A)({},style),null==styles?void 0:styles.content)},(0,pickAttrs.A)(props,{aria:!0}),eventHandlers),children);return react.createElement("div",(0,esm_extends.A)({className:classnames_default()("".concat(prefixCls,"-content-wrapper"),null==drawerClassNames?void 0:drawerClassNames.wrapper,motionClassName),style:(0,objectSpread2.A)((0,objectSpread2.A)((0,objectSpread2.A)({},wrapperStyle),motionStyle),null==styles?void 0:styles.wrapper)},(0,pickAttrs.A)(props,{data:!0})),drawerRender?drawerRender(content):content)})),containerStyle=(0,objectSpread2.A)({},rootStyle);return zIndex&&(containerStyle.zIndex=zIndex),react.createElement(context.Provider,{value:mergedContext},react.createElement("div",{className:classnames_default()(prefixCls,"".concat(prefixCls,"-").concat(placement),rootClassName,(0,defineProperty.A)((0,defineProperty.A)({},"".concat(prefixCls,"-open"),open),"".concat(prefixCls,"-inline"),inline)),style:containerStyle,tabIndex:-1,ref:panelRef,onKeyDown:function onPanelKeyDown(event){var keyCode=event.keyCode,shiftKey=event.shiftKey;switch(keyCode){case KeyCode.A.TAB:var _sentinelStartRef$cur;if(keyCode===KeyCode.A.TAB)if(shiftKey||document.activeElement!==sentinelEndRef.current){if(shiftKey&&document.activeElement===sentinelStartRef.current){var _sentinelEndRef$curre;null===(_sentinelEndRef$curre=sentinelEndRef.current)||void 0===_sentinelEndRef$curre||_sentinelEndRef$curre.focus({preventScroll:!0})}}else null===(_sentinelStartRef$cur=sentinelStartRef.current)||void 0===_sentinelStartRef$cur||_sentinelStartRef$cur.focus({preventScroll:!0});break;case KeyCode.A.ESC:onClose&&keyboard&&(event.stopPropagation(),onClose(event))}}},maskNode,react.createElement("div",{tabIndex:0,ref:sentinelStartRef,style:sentinelStyle,"aria-hidden":"true","data-sentinel":"start"}),panelNode,react.createElement("div",{tabIndex:0,ref:sentinelEndRef,style:sentinelStyle,"aria-hidden":"true","data-sentinel":"end"})))}const es_DrawerPopup=react.forwardRef(DrawerPopup);const rc_drawer_es=function Drawer(props){var _props$open=props.open,open=void 0!==_props$open&&_props$open,_props$prefixCls=props.prefixCls,prefixCls=void 0===_props$prefixCls?"rc-drawer":_props$prefixCls,_props$placement=props.placement,placement=void 0===_props$placement?"right":_props$placement,_props$autoFocus=props.autoFocus,autoFocus=void 0===_props$autoFocus||_props$autoFocus,_props$keyboard=props.keyboard,keyboard=void 0===_props$keyboard||_props$keyboard,_props$width=props.width,width=void 0===_props$width?378:_props$width,_props$mask=props.mask,mask=void 0===_props$mask||_props$mask,_props$maskClosable=props.maskClosable,maskClosable=void 0===_props$maskClosable||_props$maskClosable,getContainer=props.getContainer,forceRender=props.forceRender,afterOpenChange=props.afterOpenChange,destroyOnClose=props.destroyOnClose,onMouseEnter=props.onMouseEnter,onMouseOver=props.onMouseOver,onMouseLeave=props.onMouseLeave,onClick=props.onClick,onKeyDown=props.onKeyDown,onKeyUp=props.onKeyUp,panelRef=props.panelRef,_React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.A)(_React$useState,2),animatedVisible=_React$useState2[0],setAnimatedVisible=_React$useState2[1];var _React$useState3=react.useState(!1),_React$useState4=(0,slicedToArray.A)(_React$useState3,2),mounted=_React$useState4[0],setMounted=_React$useState4[1];(0,useLayoutEffect.A)((function(){setMounted(!0)}),[]);var mergedOpen=!!mounted&&open,popupRef=react.useRef(),lastActiveRef=react.useRef();(0,useLayoutEffect.A)((function(){mergedOpen&&(lastActiveRef.current=document.activeElement)}),[mergedOpen]);var refContext=react.useMemo((function(){return{panel:panelRef}}),[panelRef]);if(!forceRender&&!animatedVisible&&!mergedOpen&&destroyOnClose)return null;var eventHandlers={onMouseEnter,onMouseOver,onMouseLeave,onClick,onKeyDown,onKeyUp},drawerPopupProps=(0,objectSpread2.A)((0,objectSpread2.A)({},props),{},{open:mergedOpen,prefixCls,placement,autoFocus,keyboard,width,mask,maskClosable,inline:!1===getContainer,afterOpenChange:function internalAfterOpenChange(nextVisible){var _popupRef$current,_lastActiveRef$curren;(setAnimatedVisible(nextVisible),null==afterOpenChange||afterOpenChange(nextVisible),nextVisible||!lastActiveRef.current||null!==(_popupRef$current=popupRef.current)&&void 0!==_popupRef$current&&_popupRef$current.contains(lastActiveRef.current))||(null===(_lastActiveRef$curren=lastActiveRef.current)||void 0===_lastActiveRef$curren||_lastActiveRef$curren.focus({preventScroll:!0}))},ref:popupRef},eventHandlers);return react.createElement(RefContext.Provider,{value:refContext},react.createElement(es.A,{open:mergedOpen||forceRender||animatedVisible,autoDestroy:!1,getContainer,autoLock:mask&&(mergedOpen||animatedVisible)},react.createElement(es_DrawerPopup,drawerPopupProps)))};var useZIndex=__webpack_require__("../../node_modules/antd/es/_util/hooks/useZIndex.js"),motion=__webpack_require__("../../node_modules/antd/es/_util/motion.js"),zindexContext=__webpack_require__("../../node_modules/antd/es/_util/zindexContext.js"),config_provider_context=__webpack_require__("../../node_modules/antd/es/config-provider/context.js"),form_context=__webpack_require__("../../node_modules/antd/es/form/context.js"),Compact=__webpack_require__("../../node_modules/antd/es/space/Compact.js"),watermark_context=__webpack_require__("../../node_modules/antd/es/watermark/context.js"),useClosable=__webpack_require__("../../node_modules/antd/es/_util/hooks/useClosable.js"),skeleton=__webpack_require__("../../node_modules/antd/es/skeleton/index.js");const drawer_DrawerPanel=props=>{var _a,_b;const{prefixCls,title,footer,extra,loading,onClose,headerStyle,bodyStyle,footerStyle,children,classNames:drawerClassNames,styles:drawerStyles}=props,{drawer:drawerContext}=react.useContext(config_provider_context.QO),customCloseIconRender=react.useCallback((icon=>react.createElement("button",{type:"button",onClick:onClose,"aria-label":"Close",className:`${prefixCls}-close`},icon)),[onClose]),[mergedClosable,mergedCloseIcon]=(0,useClosable.A)((0,useClosable.d)(props),(0,useClosable.d)(drawerContext),{closable:!0,closeIconRender:customCloseIconRender}),headerNode=react.useMemo((()=>{var _a,_b;return title||mergedClosable?react.createElement("div",{style:Object.assign(Object.assign(Object.assign({},null===(_a=null==drawerContext?void 0:drawerContext.styles)||void 0===_a?void 0:_a.header),headerStyle),null==drawerStyles?void 0:drawerStyles.header),className:classnames_default()(`${prefixCls}-header`,{[`${prefixCls}-header-close-only`]:mergedClosable&&!title&&!extra},null===(_b=null==drawerContext?void 0:drawerContext.classNames)||void 0===_b?void 0:_b.header,null==drawerClassNames?void 0:drawerClassNames.header)},react.createElement("div",{className:`${prefixCls}-header-title`},mergedCloseIcon,title&&react.createElement("div",{className:`${prefixCls}-title`},title)),extra&&react.createElement("div",{className:`${prefixCls}-extra`},extra)):null}),[mergedClosable,mergedCloseIcon,extra,headerStyle,prefixCls,title]),footerNode=react.useMemo((()=>{var _a,_b;if(!footer)return null;const footerClassName=`${prefixCls}-footer`;return react.createElement("div",{className:classnames_default()(footerClassName,null===(_a=null==drawerContext?void 0:drawerContext.classNames)||void 0===_a?void 0:_a.footer,null==drawerClassNames?void 0:drawerClassNames.footer),style:Object.assign(Object.assign(Object.assign({},null===(_b=null==drawerContext?void 0:drawerContext.styles)||void 0===_b?void 0:_b.footer),footerStyle),null==drawerStyles?void 0:drawerStyles.footer)},footer)}),[footer,footerStyle,prefixCls]);return react.createElement(react.Fragment,null,headerNode,react.createElement("div",{className:classnames_default()(`${prefixCls}-body`,null==drawerClassNames?void 0:drawerClassNames.body,null===(_a=null==drawerContext?void 0:drawerContext.classNames)||void 0===_a?void 0:_a.body),style:Object.assign(Object.assign(Object.assign({},null===(_b=null==drawerContext?void 0:drawerContext.styles)||void 0===_b?void 0:_b.body),bodyStyle),null==drawerStyles?void 0:drawerStyles.body)},loading?react.createElement(skeleton.A,{active:!0,title:!1,paragraph:{rows:5},className:`${prefixCls}-body-skeleton`}):children),footerNode)};var cssinjs_es=__webpack_require__("../../node_modules/@ant-design/cssinjs/es/index.js"),style=__webpack_require__("../../node_modules/antd/es/style/index.js"),genComponentStyleHook=__webpack_require__("../../node_modules/antd/es/theme/util/genComponentStyleHook.js"),statistic=__webpack_require__("../../node_modules/antd/es/theme/util/statistic.js");const getMoveTranslate=direction=>({left:"translateX(-100%)",right:"translateX(100%)",top:"translateY(-100%)",bottom:"translateY(100%)"}[direction]),getEnterLeaveStyle=(startStyle,endStyle)=>({"&-enter, &-appear":Object.assign(Object.assign({},startStyle),{"&-active":endStyle}),"&-leave":Object.assign(Object.assign({},endStyle),{"&-active":startStyle})}),getFadeStyle=(from,duration)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${duration}`}}},getEnterLeaveStyle({opacity:from},{opacity:1})),getPanelMotionStyles=(direction,duration)=>[getFadeStyle(.7,duration),getEnterLeaveStyle({transform:getMoveTranslate(direction)},{transform:"none"})],style_motion=token=>{const{componentCls,motionDurationSlow}=token;return{[componentCls]:{[`${componentCls}-mask-motion`]:getFadeStyle(0,motionDurationSlow),[`${componentCls}-panel-motion`]:["left","right","top","bottom"].reduce(((obj,direction)=>Object.assign(Object.assign({},obj),{[`&-${direction}`]:getPanelMotionStyles(direction,motionDurationSlow)})),{})}}},genDrawerStyle=token=>{const{borderRadiusSM,componentCls,zIndexPopup,colorBgMask,colorBgElevated,motionDurationSlow,motionDurationMid,paddingXS,padding,paddingLG,fontSizeLG,lineHeightLG,lineWidth,lineType,colorSplit,marginXS,colorIcon,colorIconHover,colorBgTextHover,colorBgTextActive,colorText,fontWeightStrong,footerPaddingBlock,footerPaddingInline,calc}=token,wrapperCls=`${componentCls}-content-wrapper`;return{[componentCls]:{position:"fixed",inset:0,zIndex:zIndexPopup,pointerEvents:"none",color:colorText,"&-pure":{position:"relative",background:colorBgElevated,display:"flex",flexDirection:"column",[`&${componentCls}-left`]:{boxShadow:token.boxShadowDrawerLeft},[`&${componentCls}-right`]:{boxShadow:token.boxShadowDrawerRight},[`&${componentCls}-top`]:{boxShadow:token.boxShadowDrawerUp},[`&${componentCls}-bottom`]:{boxShadow:token.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${componentCls}-mask`]:{position:"absolute",inset:0,zIndex:zIndexPopup,background:colorBgMask,pointerEvents:"auto"},[wrapperCls]:{position:"absolute",zIndex:zIndexPopup,maxWidth:"100vw",transition:`all ${motionDurationSlow}`,"&-hidden":{display:"none"}},[`&-left > ${wrapperCls}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:token.boxShadowDrawerLeft},[`&-right > ${wrapperCls}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:token.boxShadowDrawerRight},[`&-top > ${wrapperCls}`]:{top:0,insetInline:0,boxShadow:token.boxShadowDrawerUp},[`&-bottom > ${wrapperCls}`]:{bottom:0,insetInline:0,boxShadow:token.boxShadowDrawerDown},[`${componentCls}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:colorBgElevated,pointerEvents:"auto"},[`${componentCls}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,cssinjs_es.zA)(padding)} ${(0,cssinjs_es.zA)(paddingLG)}`,fontSize:fontSizeLG,lineHeight:lineHeightLG,borderBottom:`${(0,cssinjs_es.zA)(lineWidth)} ${lineType} ${colorSplit}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${componentCls}-extra`]:{flex:"none"},[`${componentCls}-close`]:Object.assign({display:"inline-flex",width:calc(fontSizeLG).add(paddingXS).equal(),height:calc(fontSizeLG).add(paddingXS).equal(),borderRadius:borderRadiusSM,justifyContent:"center",alignItems:"center",marginInlineEnd:marginXS,color:colorIcon,fontWeight:fontWeightStrong,fontSize:fontSizeLG,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${motionDurationMid}`,textRendering:"auto","&:hover":{color:colorIconHover,backgroundColor:colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:colorBgTextActive}},(0,style.K8)(token)),[`${componentCls}-title`]:{flex:1,margin:0,fontWeight:token.fontWeightStrong,fontSize:fontSizeLG,lineHeight:lineHeightLG},[`${componentCls}-body`]:{flex:1,minWidth:0,minHeight:0,padding:paddingLG,overflow:"auto",[`${componentCls}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center"}},[`${componentCls}-footer`]:{flexShrink:0,padding:`${(0,cssinjs_es.zA)(footerPaddingBlock)} ${(0,cssinjs_es.zA)(footerPaddingInline)}`,borderTop:`${(0,cssinjs_es.zA)(lineWidth)} ${lineType} ${colorSplit}`},"&-rtl":{direction:"rtl"}}}},drawer_style=(0,genComponentStyleHook.OF)("Drawer",(token=>{const drawerToken=(0,statistic.h1)(token,{});return[genDrawerStyle(drawerToken),style_motion(drawerToken)]}),(token=>({zIndexPopup:token.zIndexPopupBase,footerPaddingBlock:token.paddingXS,footerPaddingInline:token.padding})));var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const defaultPushState={distance:180},drawer_Drawer=props=>{const{rootClassName,width,height,size="default",mask=!0,push=defaultPushState,open,afterOpenChange,onClose,prefixCls:customizePrefixCls,getContainer:customizeGetContainer,style,className,visible,afterVisibleChange,maskStyle,drawerStyle,contentWrapperStyle}=props,rest=__rest(props,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer,getPrefixCls,direction,drawer}=react.useContext(config_provider_context.QO),prefixCls=getPrefixCls("drawer",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=drawer_style(prefixCls),getContainer=void 0===customizeGetContainer&&getPopupContainer?()=>getPopupContainer(document.body):customizeGetContainer,drawerClassName=classnames_default()({"no-mask":!mask,[`${prefixCls}-rtl`]:"rtl"===direction},rootClassName,hashId,cssVarCls);const mergedWidth=react.useMemo((()=>null!=width?width:"large"===size?736:378),[width,size]),mergedHeight=react.useMemo((()=>null!=height?height:"large"===size?736:378),[height,size]),maskMotion={motionName:(0,motion.b)(prefixCls,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},panelRef=(0,watermark_context.f)(),[zIndex,contextZIndex]=(0,useZIndex.YK)("Drawer",rest.zIndex),{classNames:propClassNames={},styles:propStyles={}}=rest,{classNames:contextClassNames={},styles:contextStyles={}}=drawer||{};return wrapCSSVar(react.createElement(Compact.K6,null,react.createElement(form_context.XB,{status:!0,override:!0},react.createElement(zindexContext.A.Provider,{value:contextZIndex},react.createElement(rc_drawer_es,Object.assign({prefixCls,onClose,maskMotion,motion:motionPlacement=>({motionName:(0,motion.b)(prefixCls,`panel-motion-${motionPlacement}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500})},rest,{classNames:{mask:classnames_default()(propClassNames.mask,contextClassNames.mask),content:classnames_default()(propClassNames.content,contextClassNames.content),wrapper:classnames_default()(propClassNames.wrapper,contextClassNames.wrapper)},styles:{mask:Object.assign(Object.assign(Object.assign({},propStyles.mask),maskStyle),contextStyles.mask),content:Object.assign(Object.assign(Object.assign({},propStyles.content),drawerStyle),contextStyles.content),wrapper:Object.assign(Object.assign(Object.assign({},propStyles.wrapper),contentWrapperStyle),contextStyles.wrapper)},open:null!=open?open:visible,mask,push,width:mergedWidth,height:mergedHeight,style:Object.assign(Object.assign({},null==drawer?void 0:drawer.style),style),className:classnames_default()(null==drawer?void 0:drawer.className,className),rootClassName:drawerClassName,getContainer,afterOpenChange:null!=afterOpenChange?afterOpenChange:afterVisibleChange,panelRef,zIndex}),react.createElement(drawer_DrawerPanel,Object.assign({prefixCls},rest,{onClose})))))))};drawer_Drawer._InternalPanelDoNotUseOrYouWillBeFired=props=>{const{prefixCls:customizePrefixCls,style,className,placement="right"}=props,restProps=__rest(props,["prefixCls","style","className","placement"]),{getPrefixCls}=react.useContext(config_provider_context.QO),prefixCls=getPrefixCls("drawer",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=drawer_style(prefixCls),cls=classnames_default()(prefixCls,`${prefixCls}-pure`,`${prefixCls}-${placement}`,hashId,cssVarCls,className);return wrapCSSVar(react.createElement("div",{className:cls,style},react.createElement(drawer_DrawerPanel,Object.assign({prefixCls},restProps))))};const drawer=drawer_Drawer}}]);