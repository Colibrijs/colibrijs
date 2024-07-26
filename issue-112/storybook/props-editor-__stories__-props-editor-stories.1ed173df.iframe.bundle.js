"use strict";(self.webpackChunk_colibrijs_core=self.webpackChunk_colibrijs_core||[]).push([[6520],{"./components/props-editor/__stories__/props-editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>props_editor_stories});var dist=__webpack_require__("../../node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),schema=__webpack_require__("./components/props-editor/__stories__/schema.ts"),sidebar_decorator=__webpack_require__("./components/layout/sidebar-decorator.tsx"),get_properties_names=__webpack_require__("../schema/utils/get-properties-names.ts"),es_form=__webpack_require__("../../node_modules/antd/es/form/index.js"),prop_editor=__webpack_require__("./components/prop-editor/prop-editor.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function PropsEditor(param){var schema=param.schema,onChange=param.onChange,value=param.value,propertiesNames=(0,get_properties_names.U)(schema),changeHandler=(0,react.useCallback)((function(key){return function(newValue){onChange(_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},value),_define_property({},key,newValue)))}}),[onChange,value]),getValue=(0,react.useCallback)((function(propName){return value[propName]}),[value]),getProperty=(0,react.useCallback)((function(propName){return schema.properties[propName]}),[schema.properties]);return React.createElement(es_form.A,{layout:"vertical"},propertiesNames.map((function(propName){return React.createElement(prop_editor.v,{property:getProperty(propName),key:propName.toString(),name:propName.toString(),value:getValue(propName),testId:"props-editor__".concat(propName.toString()),onChange:changeHandler(propName)})})))}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}PropsEditor.__docgenInfo={description:"",methods:[],displayName:"PropsEditor",props:{schema:{required:!0,tsType:{name:"intersection",raw:"ObjectProperty<T> & {\n  $schema: string;\n  $id: string;\n  title: string;\n}",elements:[{name:"signature",type:"object",raw:"{\n  type: 'object';\n  description?: string;\n  properties: {\n    // eslint-disable-next-line no-use-before-define -- по-другому никак\n    [K in keyof T]: Property<T[K]>;\n  };\n}",signature:{properties:[{key:"type",value:{name:"literal",value:"'object'",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"properties",value:{name:"signature",type:"object",raw:"{\n  // eslint-disable-next-line no-use-before-define -- по-другому никак\n  [K in keyof T]: Property<T[K]>;\n}",signature:{properties:[{key:{name:"T",required:!0},value:{name:"unknown"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{\n  $schema: string;\n  $id: string;\n  title: string;\n}",signature:{properties:[{key:"$schema",value:{name:"string",required:!0}},{key:"$id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}}]}}]},description:"JSON схема, которая описывает каким должен быть объект"},value:{required:!0,tsType:{name:"T"},description:"Объект со значением по умолчанию"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:"Функция, которая будет вызвана, когда пропсы поменяются"}}};const props_editor_stories={component:Default,title:"PropsEditor",args:{onChange:(0,dist.fn)(),schema:schema.w,value:{name:"Kekich",age:228,isBald:!0}},decorators:[sidebar_decorator.u]};function Default(param){var value=param.value,_$schema=param.schema,onChange=param.onChange,_useState=_sliced_to_array((0,react.useState)(value),2),currentValue=_useState[0],setCurrentValue=_useState[1],changeHandler=(0,react.useCallback)((function(newValue){onChange(newValue),setCurrentValue(newValue)}),[onChange]);return React.createElement(PropsEditor,{value:currentValue,schema:_$schema,onChange:changeHandler})}Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"function Default<T extends Record<string, SchemaValues>>({\n  value,\n  schema,\n  onChange\n}: Props<T>) {\n  const [currentValue, setCurrentValue] = useState(value);\n  const changeHandler = useCallback((newValue: T) => {\n    onChange(newValue);\n    setCurrentValue(newValue);\n  }, [onChange]);\n  return <PropsEditor value={currentValue} schema={schema} onChange={changeHandler} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./components/props-editor/__stories__/schema.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>schema});var schema={$schema:"https://json-schema.org/draft/2020-12/schema",$id:"user",title:"User",type:"object",properties:{name:{description:"Your name",type:"string"},age:{description:"Your age",type:"number"},isBald:{description:"Your hair availability",type:"boolean"}}}}}]);