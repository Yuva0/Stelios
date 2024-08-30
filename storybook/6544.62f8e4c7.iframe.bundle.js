"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[6544],{"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/Text.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tokens/colors.json"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/helpers.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{let{placeholder,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_3__.A.zB.iW,label,type="text",size="medium",width="15rem",fullWidth,value,leadingIcon,trailingIcon,labelPosition="top",cursor="text",disableSearch,style,className,inputStyle,disabled=!1,variant="contained",containerRef,onChange,onClick,onKeyDown,"data-testid":dataTestId,"data-testid-input":dataTestIdInput,...props}=_ref;const inputRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,(()=>inputRef.current),[inputRef]);const _containerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(containerRef,(()=>_containerRef.current),[_containerRef]);const[isFocused,setIsFocused]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[inputValue,setInputValue]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null!=value?value:"");react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{setInputValue(null!=value?value:"")}),[value]);const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.jh)(theme,color),Label=label?"string"==typeof label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{variant:"label",size,children:label})}):label:null;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledInput,{ref:_containerRef,onClick:e=>{inputRef&&inputRef.current&&inputRef.current.focus(),onClick&&onClick(e)},onKeyDown:e=>{onKeyDown&&onKeyDown(e)},$width:width,style,className,"data-testid":dataTestId,...props,children:[labelPosition&&"top"===labelPosition?Label:null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledInputContent,{$colorPalette:colorPalette,$color:color,$size:size,$isFocused:isFocused,$width:width,$hasLeadingIcon:!!leadingIcon,$hasTrailingIcon:!!trailingIcon,$cursor:cursor,$disabled:disabled,$variant:variant,style:inputStyle,children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledInputIcon,{$variant:variant,$colorPalette:colorPalette,$color:color,$size:size,$hasLeadingIcon:!!leadingIcon,$hasTrailingIcon:!!trailingIcon,$width:width,children:leadingIcon}),disableSearch?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"ste-input-content",style:inputStyle,"data-testid":dataTestIdInput,children:value}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type,value:inputValue,onFocus:()=>{setIsFocused(!0)},onBlur:()=>{setIsFocused(!1)},ref:inputRef,placeholder,onChange:e=>{setInputValue(e.target.value),onChange&&onChange(e)},style:inputStyle,"data-testid":dataTestIdInput}),trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledInputIcon,{$variant:variant,$colorPalette:colorPalette,$color:color,$size:size,$hasLeadingIcon:!!leadingIcon,$hasTrailingIcon:!!trailingIcon,$width:width,children:trailingIcon})]}),labelPosition&&"bottom"===labelPosition?Label:null]})})),__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.memo(Input),StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span`
  margin-left: 4px;
`,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  display: flex;
  flex-direction: column;
  width: ${props=>props.$width};
  gap: 4px;
  user-select: none;
`,StyledInputIcon=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  cursor: pointer;
  flex: 1 0 auto;
  width: ${props=>sizeHandler(props.$size).iconSize};
  height: ${props=>sizeHandler(props.$size).iconSize};
  padding: 0.25rem;
  &:hover {
    background-color: ${props=>props.$colorPalette[props.$color].grayScale[2]};
    border-radius: 50%;
  }
  & svg {
    width: 100%;
    height: 100%;
  }
  ${props=>{const properties=styledIconHandler(props.$variant,props.$colorPalette,props.$color,props.$size);return`\n      color: ${properties.color.default};\n      &:hover {\n        background-color: ${properties.iconHover};\n      }\n    `}}
`,StyledInputContent=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;

  ${props=>{const properties=styledHandler(props.$variant,props.$colorPalette,props.$color,props.$size,props.$hasLeadingIcon,props.$hasTrailingIcon);return`\n      cursor: ${props.$cursor};\n      background-color: ${properties.backgroundColor.default};\n      border: ${properties.border.default};\n      padding: ${properties.padding};\n\n      &:hover {\n        background-color: ${properties.backgroundColor.hover};\n        color: ${properties.color.hover};\n        border: ${properties.border.hover};\n        & input{\n          color: ${properties.color.hover};\n          background-color: ${properties.backgroundColor.hover};\n        }\n\n        & span.ste-input-content {\n          color: ${properties.color.hover};\n          background-color: ${properties.backgroundColor.hover};\n        }\n      }\n      &:active {\n        background-color: ${properties.backgroundColor.active};\n        color: ${properties.color.active};\n        border: ${properties.border.active};\n        & input{\n          color: ${properties.color.active};\n          background-color: ${properties.backgroundColor.active};\n        }\n\n        & span.ste-input-content {\n          color: ${properties.color.active};\n          background-color: ${properties.backgroundColor.active};\n        }\n      }\n\n      & input{\n        padding: 0;\n        margin: 0;\n        border: 0;\n        width: 100%;\n        cursor: ${props.$cursor};\n        line-height: ${properties.lineHeight};\n        font-size: ${properties.fontSize};\n        font-family: 'Varela Round', sans-serif;\n        background-color: ${properties.backgroundColor.default};\n        color: ${properties.color.default};\n\n        &:focus-visible {\n          outline: none;\n        }\n        &::placeholder {\n          color: ${properties.placeholder.default};\n          font-style: italic;\n        }\n      }\n\n      & span.ste-input-content {\n        height: ${properties.lineHeight};\n        font-size: ${properties.fontSize};\n        line-height: ${properties.lineHeight};\n        width: 100%;\n        font-size: ${properties.fontSize};\n        font-family: 'Varela Round', sans-serif;\n        background-color: ${properties.backgroundColor.default};\n        color: ${properties.color.default};\n      }\n    `}}
`,styledHandler=(variant,colorPalette,color,size,hasLeadingIcon,hasTrailingIcon)=>({...variantHandler(variant,colorPalette,color),...sizeHandler(size),...paddingHandler(size,hasLeadingIcon,hasTrailingIcon)}),styledIconHandler=(variant,colorPalette,color,size)=>({...variantHandler(variant,colorPalette,color),...sizeHandler(size)}),variantHandler=(variant,colorPalette,color)=>{switch(variant){case"contained":return{backgroundColor:{default:colorPalette[color].accentScale[8],hover:colorPalette[color].accentScale[9],active:colorPalette[color].accentScale[9]},color:{default:colorPalette[color].accentContrast,hover:colorPalette[color].accentContrast,active:colorPalette[color].accentContrast},border:{default:`2px solid ${colorPalette[color].accentScale[8]}`,hover:`2px solid ${colorPalette[color].accentScale[8]}`,active:`2px solid ${colorPalette[color].accentScale[8]}`},placeholder:{default:colorPalette[color].grayScale[3]},iconHover:colorPalette[color].accentScale[8]};case"outlined":return{backgroundColor:{default:"transparent",hover:"transparent",active:"transparent"},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[11],active:colorPalette[color].accentScale[11]},border:{default:`2px solid ${colorPalette[color].accentScale[8]}`,hover:`2px solid ${colorPalette[color].accentScale[9]}`,active:`2px solid ${colorPalette[color].accentScale[9]}`},placeholder:{default:colorPalette[color].accentScale[6]},iconHover:colorPalette[color].grayScale[2]};case"soft":return{backgroundColor:{default:colorPalette[color].accentScale[3],hover:colorPalette[color].accentScale[4],active:colorPalette[color].accentScale[4]},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[11],active:colorPalette[color].accentScale[11]},border:{default:`2px solid ${colorPalette[color].accentScale[7]}`,hover:`2px solid ${colorPalette[color].accentScale[8]}`,active:`2px solid ${colorPalette[color].accentScale[8]}`},placeholder:{default:colorPalette[color].grayScale[10]},iconHover:colorPalette[color].accentScale[5]}}},sizeHandler=size=>{switch(size){case"small":return{fontSize:"0.875rem",lineHeight:"2rem",iconSize:"1rem"};case"medium":return{fontSize:"1rem",lineHeight:"2.5rem",iconSize:"1.25rem"};case"large":return{fontSize:"1rem",lineHeight:"3rem",iconSize:"1.5rem"}}},paddingHandler=(size,hasLeadingIcon,hasTrailingIcon)=>{switch(size){case"small":return hasLeadingIcon&&hasTrailingIcon?{padding:"0 8px"}:hasLeadingIcon?{padding:"0 12px 0 8px"}:hasTrailingIcon?{padding:"0 8px 0 12px"}:{padding:"0 12px"};case"medium":return hasLeadingIcon&&hasTrailingIcon?{padding:"0 8px"}:hasLeadingIcon?{padding:"0 12px 0 8px"}:hasTrailingIcon?{padding:"0 8px 0 12px"}:{padding:"0 16px"};case"large":return hasLeadingIcon&&hasTrailingIcon?{padding:"0 12px"}:hasLeadingIcon?{padding:"0 16px 0 12px"}:hasTrailingIcon?{padding:"0 12px 0 16px"}:{padding:"0 16px"}}};Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "password" | "number" | "email" | "search"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'},{name:"literal",value:'"number"'},{name:"literal",value:'"email"'},{name:"literal",value:'"search"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},cursor:{required:!1,tsType:{name:"union",raw:'"pointer" | "text"',elements:[{name:"literal",value:'"pointer"'},{name:"literal",value:'"text"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},disableSearch:{required:!1,tsType:{name:"boolean"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"15rem"',computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:'"top" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},containerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement | null>",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}]},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},inputStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},"data-testid-input":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=_ref=>{let{variant="div",strong,children,align="center",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,wrap=!1,size="medium",disableColor=!1,fontSize,lineHeight,style,className,fontFamily,...rest}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;let _styledProps;if(disableColor)_styledProps={$disableColor:disableColor};else{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:color&&colorPalette?colorPalette[color].accentScale[10]:color;_styledProps={$disableColor:disableColor,$color:_color}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",rel:"stylesheet"})]}),(()=>{switch(variant){case"h1":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH1,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h2":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH2,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h3":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH3,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h4":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH4,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h5":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH5,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h6":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH6,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"div":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledDiv,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"paragraph":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledP,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"label":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"span":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledSpan,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children})}})()]})},__WEBPACK_DEFAULT_EXPORT__=Text,commonStyles="\n  padding: 0;\n  margin: 0;\n",StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h1`
  font-size: ${props=>{var _props$$fontSize;return(null!==(_props$$fontSize=props.$fontSize)&&void 0!==_props$$fontSize?_props$$fontSize:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2.25rem":"2rem"}};
  line-height: ${props=>{var _props$$lineHeight;return(null!==(_props$$lineHeight=props.$lineHeight)&&void 0!==_props$$lineHeight?_props$$lineHeight:"large"===props.$lineHeight)?"4rem":"medium"===props.$size?"3.5rem":"3rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  font-family: ${props=>{var _props$$fontFamily;return null!==(_props$$fontFamily=props.$fontFamily)&&void 0!==_props$$fontFamily?_props$$fontFamily:'"Lato", sans-serif'}};
  ${commonStyles}
`,StyledH2=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h2`
  font-size: ${props=>{var _props$$fontSize2;return(null!==(_props$$fontSize2=props.$fontSize)&&void 0!==_props$$fontSize2?_props$$fontSize2:"large"===props.$size)?"2.25rem":"medium"===props.$size?"2rem":"1.75rem"}};
  line-height: ${props=>{var _props$$lineHeight2;return(null!==(_props$$lineHeight2=props.$lineHeight)&&void 0!==_props$$lineHeight2?_props$$lineHeight2:"large"===props.$size)?"3.5rem":"medium"===props.$size?"3rem":"2.5rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily2;return null!==(_props$$fontFamily2=props.$fontFamily)&&void 0!==_props$$fontFamily2?_props$$fontFamily2:'"Lato", sans-serif'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH3=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h3`
  font-size: ${props=>{var _props$$fontSize3;return(null!==(_props$$fontSize3=props.$fontSize)&&void 0!==_props$$fontSize3?_props$$fontSize3:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}};
  line-height: ${props=>{var _props$$lineHeight3;return(null!==(_props$$lineHeight3=props.$lineHeight)&&void 0!==_props$$lineHeight3?_props$$lineHeight3:"large"===props.$size)?"3rem":"medium"===props.$size?"2.5rem":"2rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily3;return null!==(_props$$fontFamily3=props.$fontFamily)&&void 0!==_props$$fontFamily3?_props$$fontFamily3:'"Lato", sans-serif'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH4=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h4`
  font-size: ${props=>{var _props$$fontSize4;return(null!==(_props$$fontSize4=props.$fontSize)&&void 0!==_props$$fontSize4?_props$$fontSize4:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  line-height: ${props=>{var _props$$lineHeight4;return(null!==(_props$$lineHeight4=props.$lineHeight)&&void 0!==_props$$lineHeight4?_props$$lineHeight4:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2rem":"1.75rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily4;return null!==(_props$$fontFamily4=props.$fontFamily)&&void 0!==_props$$fontFamily4?_props$$fontFamily4:'"Lato", sans-serif'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH5=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h5`
  font-size: ${props=>{var _props$$fontSize5;return(null!==(_props$$fontSize5=props.$fontSize)&&void 0!==_props$$fontSize5?_props$$fontSize5:"large"===props.$size)?"1.5rem":"medium"===props.$size?"1.25rem":"1rem"}};
  line-height: ${props=>{var _props$$lineHeight5;return(null!==(_props$$lineHeight5=props.$lineHeight)&&void 0!==_props$$lineHeight5?_props$$lineHeight5:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily5;return null!==(_props$$fontFamily5=props.$fontFamily)&&void 0!==_props$$fontFamily5?_props$$fontFamily5:'"Lato", sans-serif'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH6=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h6`
  font-size: ${props=>{var _props$$fontSize6;return(null!==(_props$$fontSize6=props.$fontSize)&&void 0!==_props$$fontSize6?_props$$fontSize6:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight6;return(null!==(_props$$lineHeight6=props.$lineHeight)&&void 0!==_props$$lineHeight6?_props$$lineHeight6:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily6;return null!==(_props$$fontFamily6=props.$fontFamily)&&void 0!==_props$$fontFamily6?_props$$fontFamily6:'"Lato", sans-serif'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  font-size: ${props=>{var _props$$fontSize7;return(null!==(_props$$fontSize7=props.$fontSize)&&void 0!==_props$$fontSize7?_props$$fontSize7:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight7;return(null!==(_props$$lineHeight7=props.$lineHeight)&&void 0!==_props$$lineHeight7?_props$$lineHeight7:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily7;return null!==(_props$$fontFamily7=props.$fontFamily)&&void 0!==_props$$fontFamily7?_props$$fontFamily7:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.label`
  font-size: ${props=>{var _props$$fontSize8;return(null!==(_props$$fontSize8=props.$fontSize)&&void 0!==_props$$fontSize8?_props$$fontSize8:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight8;return(null!==(_props$$lineHeight8=props.$lineHeight)&&void 0!==_props$$lineHeight8?_props$$lineHeight8:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily8;return null!==(_props$$fontFamily8=props.$fontFamily)&&void 0!==_props$$fontFamily8?_props$$fontFamily8:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span`
  font-size: ${props=>{var _props$$fontSize9;return(null!==(_props$$fontSize9=props.$fontSize)&&void 0!==_props$$fontSize9?_props$$fontSize9:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight9;return(null!==(_props$$lineHeight9=props.$lineHeight)&&void 0!==_props$$lineHeight9?_props$$lineHeight9:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily9;return null!==(_props$$fontFamily9=props.$fontFamily)&&void 0!==_props$$fontFamily9?_props$$fontFamily9:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledP=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.p`
  font-size: ${props=>{var _props$$fontSize10;return(null!==(_props$$fontSize10=props.$fontSize)&&void 0!==_props$$fontSize10?_props$$fontSize10:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight10;return(null!==(_props$$lineHeight10=props.$lineHeight)&&void 0!==_props$$lineHeight10?_props$$lineHeight10:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily10;return null!==(_props$$fontFamily10=props.$fontFamily)&&void 0!==_props$$fontFamily10?_props$$fontFamily10:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`;Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{id:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'| "h1"\n| "h2"\n| "h3"\n| "h4"\n| "h5"\n| "h6"\n| "div"\n| "paragraph"\n| "label"\n| "span"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"div"'},{name:"literal",value:'"paragraph"'},{name:"literal",value:'"label"'},{name:"literal",value:'"span"'}]},description:"",defaultValue:{value:'"div"',computed:!1}},strong:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"justify"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},preciseColor:{required:!1,tsType:{name:"string"},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},lineHeight:{required:!1,tsType:{name:"string"},description:""},disableColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fontFamily:{required:!1,tsType:{name:"string"},description:""}}}}}]);
//# sourceMappingURL=6544.62f8e4c7.iframe.bundle.js.map