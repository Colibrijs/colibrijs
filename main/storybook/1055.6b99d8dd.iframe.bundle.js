"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[1055],{"../../node_modules/@ant-design/icons/es/icons/CheckOutlined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>icons_CheckOutlined});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");const asn_CheckOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var AntdIcon=__webpack_require__("../../node_modules/@ant-design/icons/es/components/AntdIcon.js"),CheckOutlined_CheckOutlined=function CheckOutlined(props,ref){return react.createElement(AntdIcon.A,(0,esm_extends.A)({},props,{ref,icon:asn_CheckOutlined}))};const icons_CheckOutlined=react.forwardRef(CheckOutlined_CheckOutlined)},"../../node_modules/@tanstack/react-query/build/modern/useQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useQuery});var utils=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/utils.js"),notifyManager=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/notifyManager.js"),focusManager=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/focusManager.js"),subscribable=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/subscribable.js"),modern_query=__webpack_require__("../../node_modules/@tanstack/query-core/build/modern/query.js"),QueryObserver=class extends subscribable.Q{constructor(client,options){super(),this.options=options,this.#client=client,this.#selectError=null,this.bindMethods(),this.setOptions(options)}#client;#currentQuery=void 0;#currentQueryInitialState=void 0;#currentResult=void 0;#currentResultState;#currentResultOptions;#selectError;#selectFn;#selectResult;#lastQueryWithDefinedData;#staleTimeoutId;#refetchIntervalId;#currentRefetchInterval;#trackedProps=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#currentQuery.addObserver(this),shouldFetchOnMount(this.#currentQuery,this.options)?this.#executeFetch():this.updateResult(),this.#updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(this.#currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(this.#currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#clearStaleTimeout(),this.#clearRefetchInterval(),this.#currentQuery.removeObserver(this)}setOptions(options,notifyOptions){const prevOptions=this.options,prevQuery=this.#currentQuery;if(this.options=this.#client.defaultQueryOptions(options),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.#updateQuery(),this.#currentQuery.setOptions(this.options),prevOptions._defaulted&&!(0,utils.f8)(this.options,prevOptions)&&this.#client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#currentQuery,observer:this});const mounted=this.hasListeners();mounted&&shouldFetchOptionally(this.#currentQuery,prevQuery,this.options,prevOptions)&&this.#executeFetch(),this.updateResult(notifyOptions),!mounted||this.#currentQuery===prevQuery&&this.options.enabled===prevOptions.enabled&&(0,utils.d2)(this.options.staleTime,this.#currentQuery)===(0,utils.d2)(prevOptions.staleTime,this.#currentQuery)||this.#updateStaleTimeout();const nextRefetchInterval=this.#computeRefetchInterval();!mounted||this.#currentQuery===prevQuery&&this.options.enabled===prevOptions.enabled&&nextRefetchInterval===this.#currentRefetchInterval||this.#updateRefetchInterval(nextRefetchInterval)}getOptimisticResult(options){const query=this.#client.getQueryCache().build(this.#client,options),result=this.createResult(query,options);return function shouldAssignObserverCurrentProperties(observer,optimisticResult){if(!(0,utils.f8)(observer.getCurrentResult(),optimisticResult))return!0;return!1}(this,result)&&(this.#currentResult=result,this.#currentResultOptions=this.options,this.#currentResultState=this.#currentQuery.state),result}getCurrentResult(){return this.#currentResult}trackResult(result,onPropTracked){const trackedResult={};return Object.keys(result).forEach((key=>{Object.defineProperty(trackedResult,key,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(key),onPropTracked?.(key),result[key])})})),trackedResult}trackProp(key){this.#trackedProps.add(key)}getCurrentQuery(){return this.#currentQuery}refetch({...options}={}){return this.fetch({...options})}fetchOptimistic(options){const defaultedOptions=this.#client.defaultQueryOptions(options),query=this.#client.getQueryCache().build(this.#client,defaultedOptions);return query.isFetchingOptimistic=!0,query.fetch().then((()=>this.createResult(query,defaultedOptions)))}fetch(fetchOptions){return this.#executeFetch({...fetchOptions,cancelRefetch:fetchOptions.cancelRefetch??!0}).then((()=>(this.updateResult(),this.#currentResult)))}#executeFetch(fetchOptions){this.#updateQuery();let promise=this.#currentQuery.fetch(this.options,fetchOptions);return fetchOptions?.throwOnError||(promise=promise.catch(utils.lQ)),promise}#updateStaleTimeout(){this.#clearStaleTimeout();const staleTime=(0,utils.d2)(this.options.staleTime,this.#currentQuery);if(utils.S$||this.#currentResult.isStale||!(0,utils.gn)(staleTime))return;const timeout=(0,utils.j3)(this.#currentResult.dataUpdatedAt,staleTime)+1;this.#staleTimeoutId=setTimeout((()=>{this.#currentResult.isStale||this.updateResult()}),timeout)}#computeRefetchInterval(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#currentQuery):this.options.refetchInterval)??!1}#updateRefetchInterval(nextInterval){this.#clearRefetchInterval(),this.#currentRefetchInterval=nextInterval,!utils.S$&&!1!==this.options.enabled&&(0,utils.gn)(this.#currentRefetchInterval)&&0!==this.#currentRefetchInterval&&(this.#refetchIntervalId=setInterval((()=>{(this.options.refetchIntervalInBackground||focusManager.m.isFocused())&&this.#executeFetch()}),this.#currentRefetchInterval))}#updateTimers(){this.#updateStaleTimeout(),this.#updateRefetchInterval(this.#computeRefetchInterval())}#clearStaleTimeout(){this.#staleTimeoutId&&(clearTimeout(this.#staleTimeoutId),this.#staleTimeoutId=void 0)}#clearRefetchInterval(){this.#refetchIntervalId&&(clearInterval(this.#refetchIntervalId),this.#refetchIntervalId=void 0)}createResult(query,options){const prevQuery=this.#currentQuery,prevOptions=this.options,prevResult=this.#currentResult,prevResultState=this.#currentResultState,prevResultOptions=this.#currentResultOptions,queryInitialState=query!==prevQuery?query.state:this.#currentQueryInitialState,{state}=query;let data,newState={...state},isPlaceholderData=!1;if(options._optimisticResults){const mounted=this.hasListeners(),fetchOnMount=!mounted&&shouldFetchOnMount(query,options),fetchOptionally=mounted&&shouldFetchOptionally(query,prevQuery,options,prevOptions);(fetchOnMount||fetchOptionally)&&(newState={...newState,...(0,modern_query.k)(state.data,query.options)}),"isRestoring"===options._optimisticResults&&(newState.fetchStatus="idle")}let{error,errorUpdatedAt,status}=newState;if(options.select&&void 0!==newState.data)if(prevResult&&newState.data===prevResultState?.data&&options.select===this.#selectFn)data=this.#selectResult;else try{this.#selectFn=options.select,data=options.select(newState.data),data=(0,utils.pl)(prevResult?.data,data,options),this.#selectResult=data,this.#selectError=null}catch(selectError){this.#selectError=selectError}else data=newState.data;if(void 0!==options.placeholderData&&void 0===data&&"pending"===status){let placeholderData;if(prevResult?.isPlaceholderData&&options.placeholderData===prevResultOptions?.placeholderData)placeholderData=prevResult.data;else if(placeholderData="function"==typeof options.placeholderData?options.placeholderData(this.#lastQueryWithDefinedData?.state.data,this.#lastQueryWithDefinedData):options.placeholderData,options.select&&void 0!==placeholderData)try{placeholderData=options.select(placeholderData),this.#selectError=null}catch(selectError){this.#selectError=selectError}void 0!==placeholderData&&(status="success",data=(0,utils.pl)(prevResult?.data,placeholderData,options),isPlaceholderData=!0)}this.#selectError&&(error=this.#selectError,data=this.#selectResult,errorUpdatedAt=Date.now(),status="error");const isFetching="fetching"===newState.fetchStatus,isPending="pending"===status,isError="error"===status,isLoading=isPending&&isFetching,hasData=void 0!==data;return{status,fetchStatus:newState.fetchStatus,isPending,isSuccess:"success"===status,isError,isInitialLoading:isLoading,isLoading,data,dataUpdatedAt:newState.dataUpdatedAt,error,errorUpdatedAt,failureCount:newState.fetchFailureCount,failureReason:newState.fetchFailureReason,errorUpdateCount:newState.errorUpdateCount,isFetched:newState.dataUpdateCount>0||newState.errorUpdateCount>0,isFetchedAfterMount:newState.dataUpdateCount>queryInitialState.dataUpdateCount||newState.errorUpdateCount>queryInitialState.errorUpdateCount,isFetching,isRefetching:isFetching&&!isPending,isLoadingError:isError&&!hasData,isPaused:"paused"===newState.fetchStatus,isPlaceholderData,isRefetchError:isError&&hasData,isStale:isStale(query,options),refetch:this.refetch}}updateResult(notifyOptions){const prevResult=this.#currentResult,nextResult=this.createResult(this.#currentQuery,this.options);if(this.#currentResultState=this.#currentQuery.state,this.#currentResultOptions=this.options,void 0!==this.#currentResultState.data&&(this.#lastQueryWithDefinedData=this.#currentQuery),(0,utils.f8)(nextResult,prevResult))return;this.#currentResult=nextResult;const defaultNotifyOptions={};!1!==notifyOptions?.listeners&&(()=>{if(!prevResult)return!0;const{notifyOnChangeProps}=this.options,notifyOnChangePropsValue="function"==typeof notifyOnChangeProps?notifyOnChangeProps():notifyOnChangeProps;if("all"===notifyOnChangePropsValue||!notifyOnChangePropsValue&&!this.#trackedProps.size)return!0;const includedProps=new Set(notifyOnChangePropsValue??this.#trackedProps);return this.options.throwOnError&&includedProps.add("error"),Object.keys(this.#currentResult).some((key=>{const typedKey=key;return this.#currentResult[typedKey]!==prevResult[typedKey]&&includedProps.has(typedKey)}))})()&&(defaultNotifyOptions.listeners=!0),this.#notify({...defaultNotifyOptions,...notifyOptions})}#updateQuery(){const query=this.#client.getQueryCache().build(this.#client,this.options);if(query===this.#currentQuery)return;const prevQuery=this.#currentQuery;this.#currentQuery=query,this.#currentQueryInitialState=query.state,this.hasListeners()&&(prevQuery?.removeObserver(this),query.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#updateTimers()}#notify(notifyOptions){notifyManager.j.batch((()=>{notifyOptions.listeners&&this.listeners.forEach((listener=>{listener(this.#currentResult)})),this.#client.getQueryCache().notify({query:this.#currentQuery,type:"observerResultsUpdated"})}))}};function shouldFetchOnMount(query,options){return function shouldLoadOnMount(query,options){return!1!==options.enabled&&void 0===query.state.data&&!("error"===query.state.status&&!1===options.retryOnMount)}(query,options)||void 0!==query.state.data&&shouldFetchOn(query,options,options.refetchOnMount)}function shouldFetchOn(query,options,field){if(!1!==options.enabled){const value="function"==typeof field?field(query):field;return"always"===value||!1!==value&&isStale(query,options)}return!1}function shouldFetchOptionally(query,prevQuery,options,prevOptions){return(query!==prevQuery||!1===prevOptions.enabled)&&(!options.suspense||"error"!==query.state.status)&&isStale(query,options)}function isStale(query,options){return!1!==options.enabled&&query.isStaleByTime((0,utils.d2)(options.staleTime,query))}var react=__webpack_require__("../../node_modules/react/index.js");__webpack_require__("../../node_modules/react/jsx-runtime.js");function createValue(){let isReset=!1;return{clearReset:()=>{isReset=!1},reset:()=>{isReset=!0},isReset:()=>isReset}}var QueryErrorResetBoundaryContext=react.createContext(createValue()),useQueryErrorResetBoundary=()=>react.useContext(QueryErrorResetBoundaryContext),QueryClientProvider=__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),IsRestoringContext=react.createContext(!1),useIsRestoring=()=>react.useContext(IsRestoringContext),modern_utils=(IsRestoringContext.Provider,__webpack_require__("../../node_modules/@tanstack/react-query/build/modern/utils.js")),ensurePreventErrorBoundaryRetry=(options,errorResetBoundary)=>{(options.suspense||options.throwOnError)&&(errorResetBoundary.isReset()||(options.retryOnMount=!1))},useClearResetErrorBoundary=errorResetBoundary=>{react.useEffect((()=>{errorResetBoundary.clearReset()}),[errorResetBoundary])},getHasError=({result,errorResetBoundary,throwOnError,query})=>result.isError&&!errorResetBoundary.isReset()&&!result.isFetching&&query&&(0,modern_utils.G)(throwOnError,[result.error,query]),ensureStaleTime=defaultedOptions=>{defaultedOptions.suspense&&"number"!=typeof defaultedOptions.staleTime&&(defaultedOptions.staleTime=1e3)},shouldSuspend=(defaultedOptions,result)=>defaultedOptions?.suspense&&result.isPending,fetchOptimistic=(defaultedOptions,observer,errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch((()=>{errorResetBoundary.clearReset()}));function useQuery(options,queryClient){return function useBaseQuery(options,Observer,queryClient){const client=(0,QueryClientProvider.jE)(queryClient),isRestoring=useIsRestoring(),errorResetBoundary=useQueryErrorResetBoundary(),defaultedOptions=client.defaultQueryOptions(options);defaultedOptions._optimisticResults=isRestoring?"isRestoring":"optimistic",ensureStaleTime(defaultedOptions),ensurePreventErrorBoundaryRetry(defaultedOptions,errorResetBoundary),useClearResetErrorBoundary(errorResetBoundary);const[observer]=react.useState((()=>new Observer(client,defaultedOptions))),result=observer.getOptimisticResult(defaultedOptions);if(react.useSyncExternalStore(react.useCallback((onStoreChange=>{const unsubscribe=isRestoring?()=>{}:observer.subscribe(notifyManager.j.batchCalls(onStoreChange));return observer.updateResult(),unsubscribe}),[observer,isRestoring]),(()=>observer.getCurrentResult()),(()=>observer.getCurrentResult())),react.useEffect((()=>{observer.setOptions(defaultedOptions,{listeners:!1})}),[defaultedOptions,observer]),shouldSuspend(defaultedOptions,result))throw fetchOptimistic(defaultedOptions,observer,errorResetBoundary);if(getHasError({result,errorResetBoundary,throwOnError:defaultedOptions.throwOnError,query:client.getQueryCache().get(defaultedOptions.queryHash)}))throw result.error;return defaultedOptions.notifyOnChangeProps?result:observer.trackResult(result)}(options,QueryObserver,queryClient)}},"../../node_modules/antd/es/_util/gapSize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isPresetSize(size){return["small","middle","large"].includes(size)}function isValidGapNumber(size){return!!size&&("number"==typeof size&&!Number.isNaN(size))}__webpack_require__.d(__webpack_exports__,{X:()=>isPresetSize,m:()=>isValidGapNumber})}}]);