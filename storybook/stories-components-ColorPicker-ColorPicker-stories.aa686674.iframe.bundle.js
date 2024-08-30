"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[7095],{"./src/stories/components/ColorPicker/ColorPicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,Outlined:()=>Outlined,Playground:()=>Playground,Soft:()=>Soft,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_ColorPicker_ColorPicker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ColorPicker/ColorPicker.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/ColorPicker",component:_components_ColorPicker_ColorPicker__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"centered"},argTypes:{variant:{description:"The variant of the color picker",control:{type:"select",options:["contained","outlined","soft"]}}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{minHeight:"15rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})]},Template={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_ColorPicker_ColorPicker__WEBPACK_IMPORTED_MODULE_1__.A,{...args})},Outlined={...Template,args:{variant:"outlined"}},Contained={...Template,args:{variant:"contained"}},Soft={...Template,args:{variant:"soft"}},Playground={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_ColorPicker_ColorPicker__WEBPACK_IMPORTED_MODULE_1__.A,{...args})},__namedExportsOrder=["Outlined","Contained","Soft","Playground"];Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "outlined"\n  }\n}',...Outlined.parameters?.docs?.source}}},Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "contained"\n  }\n}',...Contained.parameters?.docs?.source}}},Soft.parameters={...Soft.parameters,docs:{...Soft.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "soft"\n  }\n}',...Soft.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <ColorPicker {...args} />;\n  }\n}",...Playground.parameters?.docs?.source}}}},"./src/components/ClickAwayListener/ClickAwayListener.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClickAwayListener=_ref=>{let{children,onClickAway,"data-testid":dataTestId}=_ref;const clickAwayListenerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickAway=e=>{clickAwayListenerRef.current&&!clickAwayListenerRef.current.contains(e.target)&&onClickAway&&onClickAway(e)};return window.addEventListener("click",handleClickAway,!0),()=>{window.removeEventListener("click",handleClickAway,!0)}}),[children,onClickAway]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{"data-testid":dataTestId,ref:clickAwayListenerRef,children})},__WEBPACK_DEFAULT_EXPORT__=ClickAwayListener;ClickAwayListener.__docgenInfo={description:"",methods:[],displayName:"ClickAwayListener",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClickAway:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/ColorPicker/ColorPicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-color/es/index.js"),_Input_Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/Input.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_popper__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),_ClickAwayListener_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ClickAwayListener/ClickAwayListener.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/helpers/helpers.tsx"),_Text_Text__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledChromePickerCtr=styled_components__WEBPACK_IMPORTED_MODULE_9__.Ay.div`
  display: ${props=>props.$open?"block":"none"};
`,ColorPicker=_ref=>{let{label,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,open,size,width,variant="outlined",onChange,errorMessage,"data-testid":dataTestId}=_ref;const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null!=open&&open),anchorElement=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),popperElement=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.jh)(theme,color),[innerColor,setInnerColor]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(colorPalette[color].main),[_errorMessage,setErrorMessage]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(errorMessage);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.jh)(theme,color);setInnerColor(colorPalette[color].main)}),[color,theme]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsOpen(null!=open&&open)}),[open]);const{styles,attributes,update}=(0,react_popper__WEBPACK_IMPORTED_MODULE_10__.E)(anchorElement.current,popperElement.current,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,2.5]}}]}),handleClickAway=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setIsOpen(!1)}),[]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{isOpen&&update&&update()}),[isOpen,update]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ClickAwayListener_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3__.A,{onClickAway:handleClickAway,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_2__.A,{variant,width,size,label,containerRef:anchorElement,value:innerColor,onChange:e=>{(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.o1)(e.target.value)?(setErrorMessage(void 0),setInnerColor(e.target.value),onChange&&onChange(e.target.value)):setErrorMessage("Invalid color")},onClick:()=>{setIsOpen(!isOpen)},color,leadingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{onClick:()=>setIsOpen(!isOpen),style:{width:"100%",height:"100%",backgroundColor:innerColor,borderRadius:"4px"}}),"data-testid":dataTestId}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(StyledChromePickerCtr,{ref:popperElement,$open:isOpen,style:{...styles.popper},...attributes.popper,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_color__WEBPACK_IMPORTED_MODULE_1__.xk,{disableAlpha:!0,color:innerColor,onChange:color=>{(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.o1)(color.hex)?(setErrorMessage(void 0),setInnerColor(color.hex),onChange&&onChange(color.hex)):setErrorMessage("Invalid color")}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:{height:"20px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_7__.A,{color,size:"small",children:_errorMessage})})]})},__WEBPACK_DEFAULT_EXPORT__=ColorPicker;ColorPicker.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{open:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'}]},description:"",defaultValue:{value:'"outlined"',computed:!1}},width:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color?: string) => void",signature:{arguments:[{type:{name:"string"},name:"color"}],return:{name:"void"}}},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);
//# sourceMappingURL=stories-components-ColorPicker-ColorPicker-stories.aa686674.iframe.bundle.js.map