"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[5205],{"../../node_modules/@ant-design/icons/es/icons/CloseOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_CloseOutlined});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_CloseOutlined={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),CloseOutlined_CloseOutlined=function CloseOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_CloseOutlined}))};const icons_CloseOutlined=react.forwardRef(CloseOutlined_CloseOutlined)},"../../node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_InfoCircleFilled});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_InfoCircleFilled={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),InfoCircleFilled_InfoCircleFilled=function InfoCircleFilled(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_InfoCircleFilled}))};const icons_InfoCircleFilled=react.forwardRef(InfoCircleFilled_InfoCircleFilled)},"../../node_modules/@tanstack/react-query/build/modern/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function shouldThrowError(throwError,params){return"function"==typeof throwError?throwError(...params):!!throwError}function noop(){}__webpack_require__.d(__webpack_exports__,{G:()=>shouldThrowError,l:()=>noop})},"../../node_modules/antd/es/_util/ActionButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/rc-util/es/hooks/useState.js"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/antd/es/button/index.js"),_button_buttonHelpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/button/buttonHelpers.js");function isThenable(thing){return!(!thing||!thing.then)}const __WEBPACK_DEFAULT_EXPORT__=props=>{const{type,children,prefixCls,buttonProps,close,autoFocus,emitEvent,isSilent,quitOnNullishReturnValue,actionFn}=props,clickedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),buttonRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[loading,setLoading]=(0,rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_1__.A)(!1),onInternalClose=function(){null==close||close.apply(void 0,arguments)};react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{let timeoutId=null;return autoFocus&&(timeoutId=setTimeout((()=>{var _a;null===(_a=buttonRef.current)||void 0===_a||_a.focus()}))),()=>{timeoutId&&clearTimeout(timeoutId)}}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.Ay,Object.assign({},(0,_button_buttonHelpers__WEBPACK_IMPORTED_MODULE_3__.DU)(type),{onClick:e=>{if(clickedRef.current)return;if(clickedRef.current=!0,!actionFn)return void onInternalClose();let returnValueOfOnOk;if(emitEvent){if(returnValueOfOnOk=actionFn(e),quitOnNullishReturnValue&&!isThenable(returnValueOfOnOk))return clickedRef.current=!1,void onInternalClose(e)}else if(actionFn.length)returnValueOfOnOk=actionFn(close),clickedRef.current=!1;else if(returnValueOfOnOk=actionFn(),!isThenable(returnValueOfOnOk))return void onInternalClose();(returnValueOfOnOk=>{isThenable(returnValueOfOnOk)&&(setLoading(!0),returnValueOfOnOk.then((function(){setLoading(!1,!0),onInternalClose.apply(void 0,arguments),clickedRef.current=!1}),(e=>{if(setLoading(!1,!0),clickedRef.current=!1,!(null==isSilent?void 0:isSilent()))return Promise.reject(e)})))})(returnValueOfOnOk)},loading,prefixCls},buttonProps,{ref:buttonRef}),children)}},"../../node_modules/antd/es/flex/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>flex});var react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),omit=__webpack_require__("../../node_modules/rc-util/es/omit.js"),gapSize=__webpack_require__("../../node_modules/antd/es/_util/gapSize.js"),context=__webpack_require__("../../node_modules/antd/es/config-provider/context.js"),genComponentStyleHook=__webpack_require__("../../node_modules/antd/es/theme/util/genComponentStyleHook.js"),statistic=__webpack_require__("../../node_modules/antd/es/theme/util/statistic.js");const flexWrapValues=["wrap","nowrap","wrap-reverse"],justifyContentValues=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],alignItemsValues=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];const utils=function createFlexClassNames(prefixCls,props){return classnames_default()(Object.assign(Object.assign(Object.assign({},((prefixCls,props)=>{const wrap=!0===props.wrap?"wrap":props.wrap;return{[`${prefixCls}-wrap-${wrap}`]:wrap&&flexWrapValues.includes(wrap)}})(prefixCls,props)),((prefixCls,props)=>{const alignCls={};return alignItemsValues.forEach((cssKey=>{alignCls[`${prefixCls}-align-${cssKey}`]=props.align===cssKey})),alignCls[`${prefixCls}-align-stretch`]=!props.align&&!!props.vertical,alignCls})(prefixCls,props)),((prefixCls,props)=>{const justifyCls={};return justifyContentValues.forEach((cssKey=>{justifyCls[`${prefixCls}-justify-${cssKey}`]=props.justify===cssKey})),justifyCls})(prefixCls,props)))},genFlexStyle=token=>{const{componentCls}=token;return{[componentCls]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},genFlexGapStyle=token=>{const{componentCls}=token;return{[componentCls]:{"&-gap-small":{gap:token.flexGapSM},"&-gap-middle":{gap:token.flexGap},"&-gap-large":{gap:token.flexGapLG}}}},genFlexWrapStyle=token=>{const{componentCls}=token,wrapStyle={};return flexWrapValues.forEach((value=>{wrapStyle[`${componentCls}-wrap-${value}`]={flexWrap:value}})),wrapStyle},genAlignItemsStyle=token=>{const{componentCls}=token,alignStyle={};return alignItemsValues.forEach((value=>{alignStyle[`${componentCls}-align-${value}`]={alignItems:value}})),alignStyle},genJustifyContentStyle=token=>{const{componentCls}=token,justifyStyle={};return justifyContentValues.forEach((value=>{justifyStyle[`${componentCls}-justify-${value}`]={justifyContent:value}})),justifyStyle},flex_style=(0,genComponentStyleHook.OF)("Flex",(token=>{const{paddingXS,padding,paddingLG}=token,flexToken=(0,statistic.h1)(token,{flexGapSM:paddingXS,flexGap:padding,flexGapLG:paddingLG});return[genFlexStyle(flexToken),genFlexGapStyle(flexToken),genFlexWrapStyle(flexToken),genAlignItemsStyle(flexToken),genJustifyContentStyle(flexToken)]}),(()=>({})),{resetStyle:!1});var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Flex=react.forwardRef(((props,ref)=>{const{prefixCls:customizePrefixCls,rootClassName,className,style,flex,gap,children,vertical=!1,component:Component="div"}=props,othersProps=__rest(props,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:ctxFlex,direction:ctxDirection,getPrefixCls}=react.useContext(context.QO),prefixCls=getPrefixCls("flex",customizePrefixCls),[wrapCSSVar,hashId,cssVarCls]=flex_style(prefixCls),mergedVertical=null!=vertical?vertical:null==ctxFlex?void 0:ctxFlex.vertical,mergedCls=classnames_default()(className,rootClassName,null==ctxFlex?void 0:ctxFlex.className,prefixCls,hashId,cssVarCls,utils(prefixCls,props),{[`${prefixCls}-rtl`]:"rtl"===ctxDirection,[`${prefixCls}-gap-${gap}`]:(0,gapSize.X)(gap),[`${prefixCls}-vertical`]:mergedVertical}),mergedStyle=Object.assign(Object.assign({},null==ctxFlex?void 0:ctxFlex.style),style);return flex&&(mergedStyle.flex=flex),gap&&!(0,gapSize.X)(gap)&&(mergedStyle.gap=gap),wrapCSSVar(react.createElement(Component,Object.assign({ref,className:mergedCls,style:mergedStyle},(0,omit.A)(othersProps,["justify","wrap","align"])),children))}));const flex=Flex},"../../node_modules/rc-util/es/KeyCode.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var KeyCode={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function isTextModifyingKeyEvent(e){var keyCode=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||keyCode>=KeyCode.F1&&keyCode<=KeyCode.F12)return!1;switch(keyCode){case KeyCode.ALT:case KeyCode.CAPS_LOCK:case KeyCode.CONTEXT_MENU:case KeyCode.CTRL:case KeyCode.DOWN:case KeyCode.END:case KeyCode.ESC:case KeyCode.HOME:case KeyCode.INSERT:case KeyCode.LEFT:case KeyCode.MAC_FF_META:case KeyCode.META:case KeyCode.NUMLOCK:case KeyCode.NUM_CENTER:case KeyCode.PAGE_DOWN:case KeyCode.PAGE_UP:case KeyCode.PAUSE:case KeyCode.PRINT_SCREEN:case KeyCode.RIGHT:case KeyCode.SHIFT:case KeyCode.UP:case KeyCode.WIN_KEY:case KeyCode.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function isCharacterKey(keyCode){if(keyCode>=KeyCode.ZERO&&keyCode<=KeyCode.NINE)return!0;if(keyCode>=KeyCode.NUM_ZERO&&keyCode<=KeyCode.NUM_MULTIPLY)return!0;if(keyCode>=KeyCode.A&&keyCode<=KeyCode.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===keyCode)return!0;switch(keyCode){case KeyCode.SPACE:case KeyCode.QUESTION_MARK:case KeyCode.NUM_PLUS:case KeyCode.NUM_MINUS:case KeyCode.NUM_PERIOD:case KeyCode.NUM_DIVISION:case KeyCode.SEMICOLON:case KeyCode.DASH:case KeyCode.EQUALS:case KeyCode.COMMA:case KeyCode.PERIOD:case KeyCode.SLASH:case KeyCode.APOSTROPHE:case KeyCode.SINGLE_QUOTE:case KeyCode.OPEN_SQUARE_BRACKET:case KeyCode.BACKSLASH:case KeyCode.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const __WEBPACK_DEFAULT_EXPORT__=KeyCode}}]);