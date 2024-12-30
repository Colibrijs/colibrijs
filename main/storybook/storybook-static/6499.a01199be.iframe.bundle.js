"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[6499],{"../../node_modules/@ant-design/icons/es/icons/CheckOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_CheckOutlined});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_CheckOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),CheckOutlined_CheckOutlined=function CheckOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_CheckOutlined}))};const icons_CheckOutlined=react.forwardRef(CheckOutlined_CheckOutlined)},"../../node_modules/antd/es/_util/gapSize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isPresetSize(size){return["small","middle","large"].includes(size)}function isValidGapNumber(size){return!!size&&("number"==typeof size&&!Number.isNaN(size))}__webpack_require__.d(__webpack_exports__,{X:()=>isPresetSize,m:()=>isValidGapNumber})},"../../node_modules/rc-virtual-list/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>rc_virtual_list_es});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),esm_typeof=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/typeof.js"),objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("../../node_modules/rc-resize-observer/es/index.js"),rc_util_es=__webpack_require__("../../node_modules/rc-util/es/index.js"),useLayoutEffect=__webpack_require__("../../node_modules/rc-util/es/hooks/useLayoutEffect.js"),react=__webpack_require__("../../node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/react-dom/index.js"),Filler=react.forwardRef((function(_ref,ref){var height=_ref.height,offsetY=_ref.offsetY,offsetX=_ref.offsetX,children=_ref.children,prefixCls=_ref.prefixCls,onInnerResize=_ref.onInnerResize,innerProps=_ref.innerProps,rtl=_ref.rtl,extra=_ref.extra,outerStyle={},innerStyle={display:"flex",flexDirection:"column"};return void 0!==offsetY&&(outerStyle={height,position:"relative",overflow:"hidden"},innerStyle=(0,objectSpread2.A)((0,objectSpread2.A)({},innerStyle),{},(0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)({transform:"translateY(".concat(offsetY,"px)")},rtl?"marginRight":"marginLeft",-offsetX),"position","absolute"),"left",0),"right",0),"top",0))),react.createElement("div",{style:outerStyle},react.createElement(es.A,{onResize:function onResize(_ref2){_ref2.offsetHeight&&onInnerResize&&onInnerResize()}},react.createElement("div",(0,esm_extends.A)({style:innerStyle,className:classnames_default()((0,defineProperty.A)({},"".concat(prefixCls,"-holder-inner"),prefixCls)),ref},innerProps),children,extra)))}));Filler.displayName="Filler";const es_Filler=Filler;function Item(_ref){var children=_ref.children,setRef=_ref.setRef,refFunc=react.useCallback((function(node){setRef(node)}),[]);return react.cloneElement(children,{ref:refFunc})}function useDiffItem(data,getKey,onDiff){var _React$useState=react.useState(data),_React$useState2=(0,slicedToArray.A)(_React$useState,2),prevData=_React$useState2[0],setPrevData=_React$useState2[1],_React$useState3=react.useState(null),_React$useState4=(0,slicedToArray.A)(_React$useState3,2),diffItem=_React$useState4[0],setDiffItem=_React$useState4[1];return react.useEffect((function(){var diff=function findListDiffIndex(originList,targetList,getKey){var shortList,longList,originLen=originList.length,targetLen=targetList.length;if(0===originLen&&0===targetLen)return null;originLen<targetLen?(shortList=originList,longList=targetList):(shortList=targetList,longList=originList);var notExistKey={__EMPTY_ITEM__:!0};function getItemKey(item){return void 0!==item?getKey(item):notExistKey}for(var diffIndex=null,multiple=1!==Math.abs(originLen-targetLen),i=0;i<longList.length;i+=1){var shortKey=getItemKey(shortList[i]);if(shortKey!==getItemKey(longList[i])){diffIndex=i,multiple=multiple||shortKey!==getItemKey(longList[i+1]);break}}return null===diffIndex?null:{index:diffIndex,multiple}}(prevData||[],data||[],getKey);void 0!==(null==diff?void 0:diff.index)&&(null==onDiff||onDiff(diff.index),setDiffItem(data[diff.index])),setPrevData(data)}),[data]),[diffItem]}var raf=__webpack_require__("../../node_modules/rc-util/es/raf.js");const isFirefox="object"===("undefined"==typeof navigator?"undefined":(0,esm_typeof.A)(navigator))&&/Firefox/i.test(navigator.userAgent),useOriginScroll=function(isScrollAtTop,isScrollAtBottom,isScrollAtLeft,isScrollAtRight){var lockRef=(0,react.useRef)(!1),lockTimeoutRef=(0,react.useRef)(null);var scrollPingRef=(0,react.useRef)({top:isScrollAtTop,bottom:isScrollAtBottom,left:isScrollAtLeft,right:isScrollAtRight});return scrollPingRef.current.top=isScrollAtTop,scrollPingRef.current.bottom=isScrollAtBottom,scrollPingRef.current.left=isScrollAtLeft,scrollPingRef.current.right=isScrollAtRight,function(isHorizontal,delta){var smoothOffset=arguments.length>2&&void 0!==arguments[2]&&arguments[2],originScroll=isHorizontal?delta<0&&scrollPingRef.current.left||delta>0&&scrollPingRef.current.right:delta<0&&scrollPingRef.current.top||delta>0&&scrollPingRef.current.bottom;return smoothOffset&&originScroll?(clearTimeout(lockTimeoutRef.current),lockRef.current=!1):originScroll&&!lockRef.current||function lockScroll(){clearTimeout(lockTimeoutRef.current),lockRef.current=!0,lockTimeoutRef.current=setTimeout((function(){lockRef.current=!1}),50)}(),!lockRef.current&&originScroll}};function useFrameWheel(inVirtual,isScrollAtTop,isScrollAtBottom,isScrollAtLeft,isScrollAtRight,horizontalScroll,onWheelDelta){var offsetRef=(0,react.useRef)(0),nextFrameRef=(0,react.useRef)(null),wheelValueRef=(0,react.useRef)(null),isMouseScrollRef=(0,react.useRef)(!1),originScroll=useOriginScroll(isScrollAtTop,isScrollAtBottom,isScrollAtLeft,isScrollAtRight);var wheelDirectionRef=(0,react.useRef)(null),wheelDirectionCleanRef=(0,react.useRef)(null);return[function onWheel(event){if(inVirtual){raf.A.cancel(wheelDirectionCleanRef.current),wheelDirectionCleanRef.current=(0,raf.A)((function(){wheelDirectionRef.current=null}),2);var deltaX=event.deltaX,deltaY=event.deltaY,shiftKey=event.shiftKey,mergedDeltaX=deltaX,mergedDeltaY=deltaY;("sx"===wheelDirectionRef.current||!wheelDirectionRef.current&&shiftKey&&deltaY&&!deltaX)&&(mergedDeltaX=deltaY,mergedDeltaY=0,wheelDirectionRef.current="sx");var absX=Math.abs(mergedDeltaX),absY=Math.abs(mergedDeltaY);null===wheelDirectionRef.current&&(wheelDirectionRef.current=horizontalScroll&&absX>absY?"x":"y"),"y"===wheelDirectionRef.current?function onWheelY(event,deltaY){raf.A.cancel(nextFrameRef.current),offsetRef.current+=deltaY,wheelValueRef.current=deltaY,originScroll(!1,deltaY)||(isFirefox||event.preventDefault(),nextFrameRef.current=(0,raf.A)((function(){var patchMultiple=isMouseScrollRef.current?10:1;onWheelDelta(offsetRef.current*patchMultiple),offsetRef.current=0})))}(event,mergedDeltaY):function onWheelX(event,deltaX){onWheelDelta(deltaX,!0),isFirefox||event.preventDefault()}(event,mergedDeltaX)}},function onFireFoxScroll(event){inVirtual&&(isMouseScrollRef.current=event.detail===wheelValueRef.current)}]}var findDOMNode=__webpack_require__("../../node_modules/rc-util/es/Dom/findDOMNode.js"),classCallCheck=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/createClass.js");const utils_CacheMap=function(){function CacheMap(){(0,classCallCheck.A)(this,CacheMap),(0,defineProperty.A)(this,"maps",void 0),(0,defineProperty.A)(this,"id",0),this.maps=Object.create(null)}return(0,createClass.A)(CacheMap,[{key:"set",value:function set(key,value){this.maps[key]=value,this.id+=1}},{key:"get",value:function get(key){return this.maps[key]}}]),CacheMap}();var SMOOTH_PTG=14/15;var MAX_TIMES=10;function getPageXY(e,horizontal){return("touches"in e?e.touches[0]:e)[horizontal?"pageX":"pageY"]}const es_ScrollBar=react.forwardRef((function(props,ref){var prefixCls=props.prefixCls,rtl=props.rtl,scrollOffset=props.scrollOffset,scrollRange=props.scrollRange,onStartMove=props.onStartMove,onStopMove=props.onStopMove,onScroll=props.onScroll,horizontal=props.horizontal,spinSize=props.spinSize,containerSize=props.containerSize,style=props.style,propsThumbStyle=props.thumbStyle,_React$useState=react.useState(!1),_React$useState2=(0,slicedToArray.A)(_React$useState,2),dragging=_React$useState2[0],setDragging=_React$useState2[1],_React$useState3=react.useState(null),_React$useState4=(0,slicedToArray.A)(_React$useState3,2),pageXY=_React$useState4[0],setPageXY=_React$useState4[1],_React$useState5=react.useState(null),_React$useState6=(0,slicedToArray.A)(_React$useState5,2),startTop=_React$useState6[0],setStartTop=_React$useState6[1],isLTR=!rtl,scrollbarRef=react.useRef(),thumbRef=react.useRef(),_React$useState7=react.useState(!1),_React$useState8=(0,slicedToArray.A)(_React$useState7,2),visible=_React$useState8[0],setVisible=_React$useState8[1],visibleTimeoutRef=react.useRef(),delayHidden=function delayHidden(){clearTimeout(visibleTimeoutRef.current),setVisible(!0),visibleTimeoutRef.current=setTimeout((function(){setVisible(!1)}),3e3)},enableScrollRange=scrollRange-containerSize||0,enableOffsetRange=containerSize-spinSize||0,top=react.useMemo((function(){return 0===scrollOffset||0===enableScrollRange?0:scrollOffset/enableScrollRange*enableOffsetRange}),[scrollOffset,enableScrollRange,enableOffsetRange]),stateRef=react.useRef({top,dragging,pageY:pageXY,startTop});stateRef.current={top,dragging,pageY:pageXY,startTop};var onThumbMouseDown=function onThumbMouseDown(e){setDragging(!0),setPageXY(getPageXY(e,horizontal)),setStartTop(stateRef.current.top),onStartMove(),e.stopPropagation(),e.preventDefault()};react.useEffect((function(){var onScrollbarTouchStart=function onScrollbarTouchStart(e){e.preventDefault()},scrollbarEle=scrollbarRef.current,thumbEle=thumbRef.current;return scrollbarEle.addEventListener("touchstart",onScrollbarTouchStart),thumbEle.addEventListener("touchstart",onThumbMouseDown),function(){scrollbarEle.removeEventListener("touchstart",onScrollbarTouchStart),thumbEle.removeEventListener("touchstart",onThumbMouseDown)}}),[]);var enableScrollRangeRef=react.useRef();enableScrollRangeRef.current=enableScrollRange;var enableOffsetRangeRef=react.useRef();enableOffsetRangeRef.current=enableOffsetRange,react.useEffect((function(){if(dragging){var moveRafId,onMouseMove=function onMouseMove(e){var _stateRef$current=stateRef.current,stateDragging=_stateRef$current.dragging,statePageY=_stateRef$current.pageY,stateStartTop=_stateRef$current.startTop;raf.A.cancel(moveRafId);var scale=containerSize/scrollbarRef.current.getBoundingClientRect().height;if(stateDragging){var offset=(getPageXY(e,horizontal)-statePageY)*scale,newTop=stateStartTop;!isLTR&&horizontal?newTop-=offset:newTop+=offset;var tmpEnableScrollRange=enableScrollRangeRef.current,tmpEnableOffsetRange=enableOffsetRangeRef.current,ptg=tmpEnableOffsetRange?newTop/tmpEnableOffsetRange:0,newScrollTop=Math.ceil(ptg*tmpEnableScrollRange);newScrollTop=Math.max(newScrollTop,0),newScrollTop=Math.min(newScrollTop,tmpEnableScrollRange),moveRafId=(0,raf.A)((function(){onScroll(newScrollTop,horizontal)}))}},onMouseUp=function onMouseUp(){setDragging(!1),onStopMove()};return window.addEventListener("mousemove",onMouseMove),window.addEventListener("touchmove",onMouseMove),window.addEventListener("mouseup",onMouseUp),window.addEventListener("touchend",onMouseUp),function(){window.removeEventListener("mousemove",onMouseMove),window.removeEventListener("touchmove",onMouseMove),window.removeEventListener("mouseup",onMouseUp),window.removeEventListener("touchend",onMouseUp),raf.A.cancel(moveRafId)}}}),[dragging]),react.useEffect((function(){delayHidden()}),[scrollOffset]),react.useImperativeHandle(ref,(function(){return{delayHidden}}));var scrollbarPrefixCls="".concat(prefixCls,"-scrollbar"),containerStyle={position:"absolute",visibility:visible?null:"hidden"},thumbStyle={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return horizontal?(containerStyle.height=8,containerStyle.left=0,containerStyle.right=0,containerStyle.bottom=0,thumbStyle.height="100%",thumbStyle.width=spinSize,isLTR?thumbStyle.left=top:thumbStyle.right=top):(containerStyle.width=8,containerStyle.top=0,containerStyle.bottom=0,isLTR?containerStyle.right=0:containerStyle.left=0,thumbStyle.width="100%",thumbStyle.height=spinSize,thumbStyle.top=top),react.createElement("div",{ref:scrollbarRef,className:classnames_default()(scrollbarPrefixCls,(0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)({},"".concat(scrollbarPrefixCls,"-horizontal"),horizontal),"".concat(scrollbarPrefixCls,"-vertical"),!horizontal),"".concat(scrollbarPrefixCls,"-visible"),visible)),style:(0,objectSpread2.A)((0,objectSpread2.A)({},containerStyle),style),onMouseDown:function onContainerMouseDown(e){e.stopPropagation(),e.preventDefault()},onMouseMove:delayHidden},react.createElement("div",{ref:thumbRef,className:classnames_default()("".concat(scrollbarPrefixCls,"-thumb"),(0,defineProperty.A)({},"".concat(scrollbarPrefixCls,"-thumb-moving"),dragging)),style:(0,objectSpread2.A)((0,objectSpread2.A)({},thumbStyle),propsThumbStyle),onMouseDown:onThumbMouseDown}))}));var MIN_SIZE=20;function getSpinSize(){var containerSize=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,baseSize=containerSize/(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)*containerSize;return isNaN(baseSize)&&(baseSize=0),baseSize=Math.max(baseSize,MIN_SIZE),Math.floor(baseSize)}var _excluded=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],EMPTY_DATA=[],ScrollStyle={overflowY:"auto",overflowAnchor:"none"};function RawList(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=void 0===_props$prefixCls?"rc-virtual-list":_props$prefixCls,className=props.className,height=props.height,itemHeight=props.itemHeight,_props$fullHeight=props.fullHeight,fullHeight=void 0===_props$fullHeight||_props$fullHeight,style=props.style,data=props.data,children=props.children,itemKey=props.itemKey,virtual=props.virtual,direction=props.direction,scrollWidth=props.scrollWidth,_props$component=props.component,Component=void 0===_props$component?"div":_props$component,onScroll=props.onScroll,onVirtualScroll=props.onVirtualScroll,onVisibleChange=props.onVisibleChange,innerProps=props.innerProps,extraRender=props.extraRender,styles=props.styles,restProps=(0,objectWithoutProperties.A)(props,_excluded),getKey=react.useCallback((function(item){return"function"==typeof itemKey?itemKey(item):null==item?void 0:item[itemKey]}),[itemKey]),_useHeights=function useHeights(getKey,onItemAdd,onItemRemove){var _React$useState=react.useState(0),_React$useState2=(0,slicedToArray.A)(_React$useState,2),updatedMark=_React$useState2[0],setUpdatedMark=_React$useState2[1],instanceRef=(0,react.useRef)(new Map),heightsRef=(0,react.useRef)(new utils_CacheMap),collectRafRef=(0,react.useRef)();function cancelRaf(){raf.A.cancel(collectRafRef.current)}function collectHeight(){var sync=arguments.length>0&&void 0!==arguments[0]&&arguments[0];cancelRaf();var doCollect=function doCollect(){instanceRef.current.forEach((function(element,key){if(element&&element.offsetParent){var htmlElement=(0,findDOMNode.Ay)(element),offsetHeight=htmlElement.offsetHeight;heightsRef.current.get(key)!==offsetHeight&&heightsRef.current.set(key,htmlElement.offsetHeight)}})),setUpdatedMark((function(c){return c+1}))};sync?doCollect():collectRafRef.current=(0,raf.A)(doCollect)}return(0,react.useEffect)((function(){return cancelRaf}),[]),[function setInstanceRef(item,instance){var key=getKey(item),origin=instanceRef.current.get(key);instance?(instanceRef.current.set(key,instance),collectHeight()):instanceRef.current.delete(key),!origin!=!instance&&(instance?null==onItemAdd||onItemAdd(item):null==onItemRemove||onItemRemove(item))},collectHeight,heightsRef.current,updatedMark]}(getKey,null,null),_useHeights2=(0,slicedToArray.A)(_useHeights,4),setInstanceRef=_useHeights2[0],collectHeight=_useHeights2[1],heights=_useHeights2[2],heightUpdatedMark=_useHeights2[3],useVirtual=!(!1===virtual||!height||!itemHeight),containerHeight=react.useMemo((function(){return Object.values(heights.maps).reduce((function(total,curr){return total+curr}),0)}),[heights.id,heights.maps]),inVirtual=useVirtual&&data&&(Math.max(itemHeight*data.length,containerHeight)>height||!!scrollWidth),isRTL="rtl"===direction,mergedClassName=classnames_default()(prefixCls,(0,defineProperty.A)({},"".concat(prefixCls,"-rtl"),isRTL),className),mergedData=data||EMPTY_DATA,componentRef=(0,react.useRef)(),fillerInnerRef=(0,react.useRef)(),containerRef=(0,react.useRef)(),_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.A)(_useState,2),offsetTop=_useState2[0],setOffsetTop=_useState2[1],_useState3=(0,react.useState)(0),_useState4=(0,slicedToArray.A)(_useState3,2),offsetLeft=_useState4[0],setOffsetLeft=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.A)(_useState5,2),scrollMoving=_useState6[0],setScrollMoving=_useState6[1],onScrollbarStartMove=function onScrollbarStartMove(){setScrollMoving(!0)},onScrollbarStopMove=function onScrollbarStopMove(){setScrollMoving(!1)},sharedConfig={getKey};function syncScrollTop(newTop){setOffsetTop((function(origin){var alignedTop=function keepInRange(newScrollTop){var newTop=newScrollTop;Number.isNaN(maxScrollHeightRef.current)||(newTop=Math.min(newTop,maxScrollHeightRef.current));return newTop=Math.max(newTop,0),newTop}("function"==typeof newTop?newTop(origin):newTop);return componentRef.current.scrollTop=alignedTop,alignedTop}))}var rangeRef=(0,react.useRef)({start:0,end:mergedData.length}),diffItemRef=(0,react.useRef)(),_useDiffItem=useDiffItem(mergedData,getKey),diffItem=(0,slicedToArray.A)(_useDiffItem,1)[0];diffItemRef.current=diffItem;var _React$useMemo=react.useMemo((function(){if(!useVirtual)return{scrollHeight:void 0,start:0,end:mergedData.length-1,offset:void 0};var _fillerInnerRef$curre;if(!inVirtual)return{scrollHeight:(null===(_fillerInnerRef$curre=fillerInnerRef.current)||void 0===_fillerInnerRef$curre?void 0:_fillerInnerRef$curre.offsetHeight)||0,start:0,end:mergedData.length-1,offset:void 0};for(var startIndex,startOffset,endIndex,itemTop=0,dataLen=mergedData.length,i=0;i<dataLen;i+=1){var _item=mergedData[i],key=getKey(_item),cacheHeight=heights.get(key),currentItemBottom=itemTop+(void 0===cacheHeight?itemHeight:cacheHeight);currentItemBottom>=offsetTop&&void 0===startIndex&&(startIndex=i,startOffset=itemTop),currentItemBottom>offsetTop+height&&void 0===endIndex&&(endIndex=i),itemTop=currentItemBottom}return void 0===startIndex&&(startIndex=0,startOffset=0,endIndex=Math.ceil(height/itemHeight)),void 0===endIndex&&(endIndex=mergedData.length-1),{scrollHeight:itemTop,start:startIndex,end:endIndex=Math.min(endIndex+1,mergedData.length-1),offset:startOffset}}),[inVirtual,useVirtual,offsetTop,mergedData,heightUpdatedMark,height]),scrollHeight=_React$useMemo.scrollHeight,start=_React$useMemo.start,end=_React$useMemo.end,fillerOffset=_React$useMemo.offset;rangeRef.current.start=start,rangeRef.current.end=end;var _React$useState=react.useState({width:0,height}),_React$useState2=(0,slicedToArray.A)(_React$useState,2),size=_React$useState2[0],setSize=_React$useState2[1],verticalScrollBarRef=(0,react.useRef)(),horizontalScrollBarRef=(0,react.useRef)(),horizontalScrollBarSpinSize=react.useMemo((function(){return getSpinSize(size.width,scrollWidth)}),[size.width,scrollWidth]),verticalScrollBarSpinSize=react.useMemo((function(){return getSpinSize(size.height,scrollHeight)}),[size.height,scrollHeight]),maxScrollHeight=scrollHeight-height,maxScrollHeightRef=(0,react.useRef)(maxScrollHeight);maxScrollHeightRef.current=maxScrollHeight;var isScrollAtTop=offsetTop<=0,isScrollAtBottom=offsetTop>=maxScrollHeight,isScrollAtLeft=offsetLeft<=0,isScrollAtRight=offsetLeft>=scrollWidth,originScroll=useOriginScroll(isScrollAtTop,isScrollAtBottom,isScrollAtLeft,isScrollAtRight),getVirtualScrollInfo=function getVirtualScrollInfo(){return{x:isRTL?-offsetLeft:offsetLeft,y:offsetTop}},lastVirtualScrollInfoRef=(0,react.useRef)(getVirtualScrollInfo()),triggerScroll=(0,rc_util_es._q)((function(params){if(onVirtualScroll){var nextInfo=(0,objectSpread2.A)((0,objectSpread2.A)({},getVirtualScrollInfo()),params);lastVirtualScrollInfoRef.current.x===nextInfo.x&&lastVirtualScrollInfoRef.current.y===nextInfo.y||(onVirtualScroll(nextInfo),lastVirtualScrollInfoRef.current=nextInfo)}}));function onScrollBar(newScrollOffset,horizontal){var newOffset=newScrollOffset;horizontal?((0,react_dom.flushSync)((function(){setOffsetLeft(newOffset)})),triggerScroll()):syncScrollTop(newOffset)}var keepInHorizontalRange=function keepInHorizontalRange(nextOffsetLeft){var tmpOffsetLeft=nextOffsetLeft,max=scrollWidth?scrollWidth-size.width:0;return tmpOffsetLeft=Math.max(tmpOffsetLeft,0),tmpOffsetLeft=Math.min(tmpOffsetLeft,max)},onWheelDelta=(0,rc_util_es._q)((function(offsetXY,fromHorizontal){fromHorizontal?((0,react_dom.flushSync)((function(){setOffsetLeft((function(left){return keepInHorizontalRange(left+(isRTL?-offsetXY:offsetXY))}))})),triggerScroll()):syncScrollTop((function(top){return top+offsetXY}))})),_useFrameWheel=useFrameWheel(useVirtual,isScrollAtTop,isScrollAtBottom,isScrollAtLeft,isScrollAtRight,!!scrollWidth,onWheelDelta),_useFrameWheel2=(0,slicedToArray.A)(_useFrameWheel,2),onRawWheel=_useFrameWheel2[0],onFireFoxScroll=_useFrameWheel2[1];!function useMobileTouchMove(inVirtual,listRef,callback){var cleanUpEvents,touchedRef=(0,react.useRef)(!1),touchXRef=(0,react.useRef)(0),touchYRef=(0,react.useRef)(0),elementRef=(0,react.useRef)(null),intervalRef=(0,react.useRef)(null),onTouchMove=function onTouchMove(e){if(touchedRef.current){var currentX=Math.ceil(e.touches[0].pageX),currentY=Math.ceil(e.touches[0].pageY),offsetX=touchXRef.current-currentX,offsetY=touchYRef.current-currentY,_isHorizontal=Math.abs(offsetX)>Math.abs(offsetY);_isHorizontal?touchXRef.current=currentX:touchYRef.current=currentY,callback(_isHorizontal,_isHorizontal?offsetX:offsetY)&&e.preventDefault(),clearInterval(intervalRef.current),intervalRef.current=setInterval((function(){_isHorizontal?offsetX*=SMOOTH_PTG:offsetY*=SMOOTH_PTG;var offset=Math.floor(_isHorizontal?offsetX:offsetY);(!callback(_isHorizontal,offset,!0)||Math.abs(offset)<=.1)&&clearInterval(intervalRef.current)}),16)}},onTouchEnd=function onTouchEnd(){touchedRef.current=!1,cleanUpEvents()},onTouchStart=function onTouchStart(e){cleanUpEvents(),1!==e.touches.length||touchedRef.current||(touchedRef.current=!0,touchXRef.current=Math.ceil(e.touches[0].pageX),touchYRef.current=Math.ceil(e.touches[0].pageY),elementRef.current=e.target,elementRef.current.addEventListener("touchmove",onTouchMove),elementRef.current.addEventListener("touchend",onTouchEnd))};cleanUpEvents=function cleanUpEvents(){elementRef.current&&(elementRef.current.removeEventListener("touchmove",onTouchMove),elementRef.current.removeEventListener("touchend",onTouchEnd))},(0,useLayoutEffect.A)((function(){return inVirtual&&listRef.current.addEventListener("touchstart",onTouchStart),function(){var _listRef$current;null===(_listRef$current=listRef.current)||void 0===_listRef$current||_listRef$current.removeEventListener("touchstart",onTouchStart),cleanUpEvents(),clearInterval(intervalRef.current)}}),[inVirtual])}(useVirtual,componentRef,(function(isHorizontal,delta,smoothOffset){return!originScroll(isHorizontal,delta,smoothOffset)&&(onRawWheel({preventDefault:function preventDefault(){},deltaX:isHorizontal?delta:0,deltaY:isHorizontal?0:delta}),!0)})),(0,useLayoutEffect.A)((function(){function onMozMousePixelScroll(e){useVirtual&&e.preventDefault()}var componentEle=componentRef.current;return componentEle.addEventListener("wheel",onRawWheel),componentEle.addEventListener("DOMMouseScroll",onFireFoxScroll),componentEle.addEventListener("MozMousePixelScroll",onMozMousePixelScroll),function(){componentEle.removeEventListener("wheel",onRawWheel),componentEle.removeEventListener("DOMMouseScroll",onFireFoxScroll),componentEle.removeEventListener("MozMousePixelScroll",onMozMousePixelScroll)}}),[useVirtual]),(0,useLayoutEffect.A)((function(){if(scrollWidth){var newOffsetLeft=keepInHorizontalRange(offsetLeft);setOffsetLeft(newOffsetLeft),triggerScroll({x:newOffsetLeft})}}),[size.width,scrollWidth]);var delayHideScrollBar=function delayHideScrollBar(){var _verticalScrollBarRef,_horizontalScrollBarR;null===(_verticalScrollBarRef=verticalScrollBarRef.current)||void 0===_verticalScrollBarRef||_verticalScrollBarRef.delayHidden(),null===(_horizontalScrollBarR=horizontalScrollBarRef.current)||void 0===_horizontalScrollBarR||_horizontalScrollBarR.delayHidden()},_scrollTo=function useScrollTo(containerRef,data,heights,itemHeight,getKey,collectHeight,syncScrollTop,triggerFlash){var scrollRef=react.useRef(),_React$useState=react.useState(null),_React$useState2=(0,slicedToArray.A)(_React$useState,2),syncState=_React$useState2[0],setSyncState=_React$useState2[1];return(0,useLayoutEffect.A)((function(){if(syncState&&syncState.times<MAX_TIMES){if(!containerRef.current)return void setSyncState((function(ori){return(0,objectSpread2.A)({},ori)}));collectHeight();var targetAlign=syncState.targetAlign,originAlign=syncState.originAlign,index=syncState.index,offset=syncState.offset,height=containerRef.current.clientHeight,needCollectHeight=!1,newTargetAlign=targetAlign,targetTop=null;if(height){for(var mergedAlign=targetAlign||originAlign,stackTop=0,itemTop=0,itemBottom=0,maxLen=Math.min(data.length-1,index),i=0;i<=maxLen;i+=1){var key=getKey(data[i]);itemTop=stackTop;var cacheHeight=heights.get(key);stackTop=itemBottom=itemTop+(void 0===cacheHeight?itemHeight:cacheHeight)}for(var leftHeight="top"===mergedAlign?offset:height-offset,_i=maxLen;_i>=0;_i-=1){var _key=getKey(data[_i]),_cacheHeight=heights.get(_key);if(void 0===_cacheHeight){needCollectHeight=!0;break}if((leftHeight-=_cacheHeight)<=0)break}switch(mergedAlign){case"top":targetTop=itemTop-offset;break;case"bottom":targetTop=itemBottom-height+offset;break;default:var scrollTop=containerRef.current.scrollTop;itemTop<scrollTop?newTargetAlign="top":itemBottom>scrollTop+height&&(newTargetAlign="bottom")}null!==targetTop&&syncScrollTop(targetTop),targetTop!==syncState.lastTop&&(needCollectHeight=!0)}needCollectHeight&&setSyncState((0,objectSpread2.A)((0,objectSpread2.A)({},syncState),{},{times:syncState.times+1,targetAlign:newTargetAlign,lastTop:targetTop}))}}),[syncState,containerRef.current]),function(arg){if(null!=arg){if(raf.A.cancel(scrollRef.current),"number"==typeof arg)syncScrollTop(arg);else if(arg&&"object"===(0,esm_typeof.A)(arg)){var index,align=arg.align;index="index"in arg?arg.index:data.findIndex((function(item){return getKey(item)===arg.key}));var _arg$offset=arg.offset;setSyncState({times:0,index,offset:void 0===_arg$offset?0:_arg$offset,originAlign:align})}}else triggerFlash()}}(componentRef,mergedData,heights,itemHeight,getKey,(function(){return collectHeight(!0)}),syncScrollTop,delayHideScrollBar);react.useImperativeHandle(ref,(function(){return{nativeElement:containerRef.current,getScrollInfo:getVirtualScrollInfo,scrollTo:function scrollTo(config){!function isPosScroll(arg){return arg&&"object"===(0,esm_typeof.A)(arg)&&("left"in arg||"top"in arg)}(config)?_scrollTo(config):(void 0!==config.left&&setOffsetLeft(keepInHorizontalRange(config.left)),_scrollTo(config.top))}}})),(0,useLayoutEffect.A)((function(){if(onVisibleChange){var renderList=mergedData.slice(start,end+1);onVisibleChange(renderList,mergedData)}}),[start,end,mergedData]);var getSize=function useGetSize(mergedData,getKey,heights,itemHeight){var _React$useMemo=react.useMemo((function(){return[new Map,[]]}),[mergedData,heights.id,itemHeight]),_React$useMemo2=(0,slicedToArray.A)(_React$useMemo,2),key2Index=_React$useMemo2[0],bottomList=_React$useMemo2[1];return function getSize(startKey){var endKey=arguments.length>1&&void 0!==arguments[1]?arguments[1]:startKey,startIndex=key2Index.get(startKey),endIndex=key2Index.get(endKey);if(void 0===startIndex||void 0===endIndex)for(var dataLen=mergedData.length,i=bottomList.length;i<dataLen;i+=1){var _heights$get,item=mergedData[i],key=getKey(item);key2Index.set(key,i);var cacheHeight=null!==(_heights$get=heights.get(key))&&void 0!==_heights$get?_heights$get:itemHeight;if(bottomList[i]=(bottomList[i-1]||0)+cacheHeight,key===startKey&&(startIndex=i),key===endKey&&(endIndex=i),void 0!==startIndex&&void 0!==endIndex)break}return{top:bottomList[startIndex-1]||0,bottom:bottomList[endIndex]}}}(mergedData,getKey,heights,itemHeight),extraContent=null==extraRender?void 0:extraRender({start,end,virtual:inVirtual,offsetX:offsetLeft,offsetY:fillerOffset,rtl:isRTL,getSize}),listChildren=function useChildren(list,startIndex,endIndex,scrollWidth,offsetX,setNodeRef,renderFunc,_ref){var getKey=_ref.getKey;return list.slice(startIndex,endIndex+1).map((function(item,index){var node=renderFunc(item,startIndex+index,{style:{width:scrollWidth},offsetX}),key=getKey(item);return react.createElement(Item,{key,setRef:function setRef(ele){return setNodeRef(item,ele)}},node)}))}(mergedData,start,end,scrollWidth,offsetLeft,setInstanceRef,children,sharedConfig),componentStyle=null;height&&(componentStyle=(0,objectSpread2.A)((0,defineProperty.A)({},fullHeight?"height":"maxHeight",height),ScrollStyle),useVirtual&&(componentStyle.overflowY="hidden",scrollWidth&&(componentStyle.overflowX="hidden"),scrollMoving&&(componentStyle.pointerEvents="none")));var containerProps={};return isRTL&&(containerProps.dir="rtl"),react.createElement("div",(0,esm_extends.A)({ref:containerRef,style:(0,objectSpread2.A)((0,objectSpread2.A)({},style),{},{position:"relative"}),className:mergedClassName},containerProps,restProps),react.createElement(es.A,{onResize:function onHolderResize(sizeInfo){setSize({width:sizeInfo.offsetWidth,height:sizeInfo.offsetHeight})}},react.createElement(Component,{className:"".concat(prefixCls,"-holder"),style:componentStyle,ref:componentRef,onScroll:function onFallbackScroll(e){var newScrollTop=e.currentTarget.scrollTop;newScrollTop!==offsetTop&&syncScrollTop(newScrollTop),null==onScroll||onScroll(e),triggerScroll()},onMouseEnter:delayHideScrollBar},react.createElement(es_Filler,{prefixCls,height:scrollHeight,offsetX:offsetLeft,offsetY:fillerOffset,scrollWidth,onInnerResize:collectHeight,ref:fillerInnerRef,innerProps,rtl:isRTL,extra:extraContent},listChildren))),inVirtual&&scrollHeight>height&&react.createElement(es_ScrollBar,{ref:verticalScrollBarRef,prefixCls,scrollOffset:offsetTop,scrollRange:scrollHeight,rtl:isRTL,onScroll:onScrollBar,onStartMove:onScrollbarStartMove,onStopMove:onScrollbarStopMove,spinSize:verticalScrollBarSpinSize,containerSize:size.height,style:null==styles?void 0:styles.verticalScrollBar,thumbStyle:null==styles?void 0:styles.verticalScrollBarThumb}),inVirtual&&scrollWidth>size.width&&react.createElement(es_ScrollBar,{ref:horizontalScrollBarRef,prefixCls,scrollOffset:offsetLeft,scrollRange:scrollWidth,rtl:isRTL,onScroll:onScrollBar,onStartMove:onScrollbarStartMove,onStopMove:onScrollbarStopMove,spinSize:horizontalScrollBarSpinSize,containerSize:size.width,horizontal:!0,style:null==styles?void 0:styles.horizontalScrollBar,thumbStyle:null==styles?void 0:styles.horizontalScrollBarThumb}))}var List=react.forwardRef(RawList);List.displayName="List";const rc_virtual_list_es=List}}]);