(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({25:"page-add-__stories__-callbacks-spec-stories",113:"page-title-__stories__-content-spec-stories",116:"element-add-__stories__-on-close-spec-stories",593:"content-__stories__-render-microfrontends-spec-stories",620:"content-editor-__stories__-integration-element-editor-spec-stories",938:"page-add-__stories__-page-add-stories",942:"prop-editor-__stories__-prop-editor-stories",946:"prop-editor-__stories__-number-editor-spec-stories",1005:"page-add-__stories__-api-spec-stories",1142:"component-remove-__stories__-callbacks-spec-stories",1256:"page-remove-__stories__-api-spec-stories",1309:"prop-editor-__stories__-string-editor-spec-stories",1375:"component-add-__stories__-api-spec-stories",1436:"layout-__stories__-layout-stories",1488:"content-editor-__stories__-integration-element-add-spec-stories",1857:"components-list-__stories__-api-spec-stories",1962:"microfrontend-__stories__-microfrontend-stories",2318:"component-add-__stories__-component-add-stories",2555:"content-editor-__stories__-tree-content-spec-stories",3019:"element-editor-__stories__-common-spec-stories",3135:"element-add-__stories__-on-ready-spec-stories",3353:"page-add-modal-__stories__-page-add-integration-spec-stories",3424:"element-editor-__stories__-element-editor-stories",3624:"prop-editor-__stories__-object-editor-spec-stories",3690:"component-remove-__stories__-api-spec-stories",4282:"pages-list-__stories__-content-spec-stories",4527:"element-add-__stories__-components-select-spec-stories",4531:"element-editor-__stories__-props-spec-stories",4782:"element-remove-__stories__-element-remove-stories",4846:"page-add-modal-__stories__-page-add-modal-stories",4886:"components-list-__stories__-components-list-stories",5102:"content-editor-__stories__-content-editor-stories",5150:"pages-list-__stories__-pages-list-stories",5967:"microfrontend-__stories__-microfrontend-test-stories",6158:"content-__stories__-content-stories",6520:"props-editor-__stories__-props-editor-stories",6912:"component-remove-__stories__-component-remove-stories",7330:"component-add-__stories__-validation-spec-stories",7344:"page-title-__stories__-page-title-stories",8196:"props-editor-__stories__-common-test-stories",8200:"page-add-__stories__-validation-spec-stories",8359:"element-remove-__stories__-api-spec-stories",8394:"element-add-__stories__-element-add-stories",8649:"content-editor-__stories__-integration-element-remove-spec-stories",8728:"element-add-__stories__-visibility-spec-stories",8898:"page-remove-__stories__-page-remove-stories",9293:"page-title-__stories__-screenshot-screenshot-stories",9759:"prop-editor-__stories__-boolean-editor-spec-stories",9945:"pages-list-__stories__-integration-page-add-spec-stories"}[chunkId]||chunkId)+"."+{25:"f1e3b4b8",113:"d0b80edd",116:"64611676",176:"96956cad",261:"6bef9be2",280:"4f68f80d",593:"aabae9b6",620:"b3a49e5c",938:"0572fbc0",942:"9f58a750",946:"247ad72a",1005:"da7da196",1106:"d6b14027",1142:"9e7e56e0",1256:"4a54a472",1309:"812b3e41",1375:"b8a0c689",1413:"94cd385a",1436:"ac7d93f8",1488:"68f3ffc3",1529:"541966a8",1699:"a1dd41e3",1857:"246baafb",1962:"a95df7cb",2184:"40cf151c",2318:"e02b8c54",2450:"eec42842",2466:"04311526",2555:"97013e37",3019:"13b24d03",3135:"b27705f0",3192:"b7ac6ae9",3235:"58fafa42",3278:"fc966256",3353:"d83564ef",3424:"d8bc8086",3624:"606743ab",3690:"60f4514c",3821:"c5429cb8",4282:"a5150da1",4514:"7911ad5f",4527:"4cb79e80",4531:"1ce3d153",4572:"4da00dff",4588:"b95b265d",4782:"83515309",4846:"ee332a65",4886:"c69077b8",5102:"c6e1d270",5150:"2abdb729",5326:"1e0f6939",5395:"b49c5db2",5808:"a20a61ea",5967:"8d4e95e1",6158:"2ab77bc2",6499:"a01199be",6520:"56f49e1e",6824:"ecc255f9",6912:"8e839d77",7067:"c621abf9",7118:"3116c8a7",7330:"c3411a5f",7344:"85ccdc99",7496:"fe7d7b31",7625:"ea7f9a5a",8041:"e6cbd9ce",8093:"4d1c18a7",8118:"5a42853d",8196:"d9542d68",8200:"bf22797a",8238:"0a3c5fc6",8359:"f226a2a8",8394:"5b07aefa",8522:"53aed0a9",8649:"45c6c151",8728:"780cd401",8898:"203a4478",9006:"28f7673b",9258:"4248f3d1",9293:"ccc8af32",9759:"de9bacbf",9791:"4f0b532a",9915:"c4063172",9932:"40192eb2",9945:"0bf4a4eb"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@colibrijs/core:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@colibrijs/core:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),(()=>{__webpack_require__.S={};var initPromises={},initTokens={};__webpack_require__.I=(name,initScope)=>{initScope||(initScope=[]);var initToken=initTokens[name];if(initToken||(initToken=initTokens[name]={}),!(initScope.indexOf(initToken)>=0)){if(initScope.push(initToken),initPromises[name])return initPromises[name];__webpack_require__.o(__webpack_require__.S,name)||(__webpack_require__.S[name]={});__webpack_require__.S[name];var promises=[];return promises.length?initPromises[name]=Promise.all(promises).then((()=>initPromises[name]=1)):initPromises[name]=1}}})(),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();