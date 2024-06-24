(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[6520],{"./components/props-editor/__stories__/props-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>props_editor_stories});var dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),schema=__webpack_require__("./components/props-editor/__stories__/schema.ts"),sidebar_decorator=__webpack_require__("./components/layout/sidebar-decorator.tsx");var es_form=__webpack_require__("../../node_modules/antd/es/form/index.js"),input=__webpack_require__("../../node_modules/antd/es/input/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function PropsEditor(param){var schema=param.schema,onChange=param.onChange,value=param.value,propertiesNames=function getPropertiesNames(jsonSchema){return Object.keys(jsonSchema.properties)}(schema),getChangeHandler=(0,react.useCallback)((function(key){return function(event){var newValue=event.target.value;onChange(_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},value),_define_property({},key,newValue)))}}),[onChange,value]);function getType(propName){var _schema_properties_propName;return(null===(_schema_properties_propName=schema.properties[propName])||void 0===_schema_properties_propName?void 0:_schema_properties_propName.type)||"string"}return React.createElement(es_form.A,{layout:"vertical"},propertiesNames.map((function(propName){return React.createElement(es_form.A.Item,{key:propName,label:React.createElement("span",{"data-testid":"props-editor__label"},propName),"data-testid":"props-editor__item"},React.createElement(input.A,{value:value[propName],type:getType(propName),"data-testid":"props-editor__input",onChange:getChangeHandler(propName)}))})))}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}PropsEditor.__docgenInfo={description:"",methods:[],displayName:"PropsEditor",props:{schema:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  $schema: string;\n  $id: string;\n  title: string;\n  description?: string;\n  type: 'object';\n  properties: Properties<T>;\n}",signature:{properties:[{key:"$schema",value:{name:"string",required:!0}},{key:"$id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"type",value:{name:"literal",value:"'object'",required:!0}},{key:"properties",value:{name:"signature",type:"object",raw:"{\n  [K in keyof T]: {\n    type: StringifiedType<T[K]>;\n    description: string;\n  };\n}",signature:{properties:[{key:{name:"T",required:!0},value:{name:"signature",type:"object",raw:"{\n  type: StringifiedType<T[K]>;\n  description: string;\n}",signature:{properties:[{key:"type",value:{name:"unknown",required:!0}},{key:"description",value:{name:"string",required:!0}}]}}}]},required:!0}}]}},description:"JSON схема, которая описывает каким должен быть объект"},value:{required:!0,tsType:{name:"T"},description:"Объект со значением по умолчанию"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Функция, которая будет вызвана, когда пропсы поменяются"}}};const props_editor_stories={component:Default,title:"PropsEditor",args:{onChange:(0,dist.fn)(),schema:schema.w,value:{name:"Kekich",age:228}},decorators:[sidebar_decorator.u]};function Default(param){var value=param.value,_$schema=param.schema,onChange=param.onChange,_useState=_sliced_to_array((0,react.useState)(value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react.useCallback)((function(newValue){onChange(newValue),setCurrentValue(newValue)}),[onChange]);return React.createElement(PropsEditor,{value:currentValue,schema:_$schema,onChange:changeHandler})}Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default<T extends Record<string, SchemaValues>>({\n  value,\n  schema,\n  onChange\n}: Props<T>) {\n  const [currentValue, setCurrentValue] = useState(value);\n  const changeHandler = useCallback((newValue: T) => {\n    onChange(newValue);\n    setCurrentValue(newValue);\n  }, [onChange]);\n  return <PropsEditor value={currentValue} schema={schema} onChange={changeHandler} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".components-layout-layout-module__root {\n  --header-height: 64px;\n}\n\n.components-layout-layout-module__sidebar {\n  padding: 20px 16px;\n}\n\n.components-layout-layout-module__content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n","",{version:3,sources:["webpack://./components/layout/layout.module.css"],names:[],mappings:"AAAA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;EAC9C,aAAa;AACf",sourcesContent:[".root {\n  --header-height: 64px;\n}\n\n.sidebar {\n  padding: 20px 16px;\n}\n\n.content {\n  min-height: calc(100vh - var(--header-height));\n  padding: 20px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"components-layout-layout-module__root",sidebar:"components-layout-layout-module__sidebar",content:"components-layout-layout-module__content"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./components/layout/layout.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./components/layout/layout.module.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_layout_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"./components/layout/sidebar-decorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>SidebarDecorator});var antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),_sidebar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./components/layout/sidebar.tsx"),layoutStyles={maxWidth:_sidebar__WEBPACK_IMPORTED_MODULE_0__.g};function SidebarDecorator(Story){return React.createElement(antd__WEBPACK_IMPORTED_MODULE_1__.A,{style:layoutStyles},React.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_0__.B,null,React.createElement(Story,null)))}SidebarDecorator.__docgenInfo={description:"",methods:[],displayName:"SidebarDecorator"}},"./components/layout/sidebar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Sidebar,g:()=>SIDEBAR_WIDTH});var antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/antd/es/theme/index.js"),antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/antd/es/layout/index.js"),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/antd/es/config-provider/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_layout_module_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/layout/layout.module.css"),SIDEBAR_WIDTH=350;function Sidebar(param){var children=param.children,darkTheme=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{algorithm:antd__WEBPACK_IMPORTED_MODULE_2__.A.darkAlgorithm}}),[]);return React.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.A.Sider,{theme:"dark",width:SIDEBAR_WIDTH,className:_layout_module_css__WEBPACK_IMPORTED_MODULE_1__.A.sidebar},React.createElement(antd__WEBPACK_IMPORTED_MODULE_4__.Ay,{theme:darkTheme},children))}Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar"}},"./components/props-editor/__stories__/schema.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>schema});var schema={$schema:"https://json-schema.org/draft/2020-12/schema",$id:"user",title:"User",type:"object",properties:{name:{description:"Your name",type:"string"},age:{description:"Your age",type:"number"}}}}}]);