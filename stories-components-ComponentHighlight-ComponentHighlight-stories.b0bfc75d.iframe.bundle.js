"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[3063],{"./src/stories/components/ComponentHighlight/ComponentHighlight.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ComponentHighlight_stories});__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentHighlight=_ref=>{let{children,width="auto",height="auto",gradientColors,borderRadius="1rem",style,className,color=colors.A.zB.iW}=_ref;const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color),CHILDREN="string"==typeof children?(0,jsx_runtime.jsx)(Text.A,{disableColor:!0,children}):children;return(0,jsx_runtime.jsx)(StyledComponentCtr,{style,className,$width:width,$height:height,$borderRadius:borderRadius,$colorPalette:colorPalette,$color:color,$gradientColors:gradientColors,children:CHILDREN})},ComponentHighlight_ComponentHighlight=ComponentHighlight,StyledComponentCtr=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: ",";\n  height: ",";\n  background-color: ",";\n  background-clip: padding-box;\n  border-radius: ",";\n  padding: 0.5rem;\n\n  &::after {\n    position: absolute;\n    top: -3px;\n    bottom: -3px;\n    left: -3px;\n    right: -3px;\n    background: ",';\n    content: "";\n    z-index: -1;\n    border-radius: ',";\n  }\n"])),(props=>props.$width),(props=>props.$height),(props=>props.$colorPalette[props.$color].grayScale[0]),(props=>props.$borderRadius),(props=>props.$gradientColors?"linear-gradient(to bottom left, ".concat(props.$gradientColors.toString(),")"):"linear-gradient(to bottom left, #fb6f92, #f7cb5e)"),(props=>props.$borderRadius));ComponentHighlight.__docgenInfo={description:"",methods:[],displayName:"ComponentHighlight",props:{width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"auto"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"auto"',computed:!1}},gradientColors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"1rem"',computed:!1}},children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}}}};var Button=__webpack_require__("./src/components/Button/Button.tsx");const COMPONENT=(0,jsx_runtime.jsx)(Button.A,{variant:"contained",children:" This is a Button"}),ComponentHighlight_stories={title:"Components/ComponentHighlight",component:ComponentHighlight_ComponentHighlight,parameters:{layout:"centered"},argTypes:{}},Default={...{render:args=>(0,jsx_runtime.jsx)(ComponentHighlight_ComponentHighlight,{...args,children:args.children})},args:{children:COMPONENT,width:"fit-content"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    children: COMPONENT,\n    width: "fit-content"\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button_Button});var taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Text=__webpack_require__("./src/components/Text/Text.tsx"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json");const layout_namespaceObject=JSON.parse('{"W":{"A":{"D":0.25}}}');var _templateObject,_templateObject2,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((_ref,ref)=>{var _innerRef$current;let{leadingIcon,trailingIcon,size="medium",variant="contained",color=colors.A.zB.iW,rounded=!1,disabled=!1,children,isFullWidth=!1,style,onClick,"data-testid":dataTestId,"data-leading-icon":dataLeadingIcon,"data-trailing-icon":dataTrailingIcon,...rest}=_ref;const innerRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,(()=>innerRef.current),[innerRef]);const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color),[borderRadius,setBorderRadius]=react.useState(rounded?innerRef.current?"".concat(innerRef.current.offsetHeight/2,"px"):"":"".concat(layout_namespaceObject.W.A.D,"rem"));return(0,react.useEffect)((()=>{innerRef&&innerRef.current&&setBorderRadius(rounded?"".concat(innerRef.current.offsetHeight/2,"px"):"".concat(layout_namespaceObject.W.A.D,"rem"))}),[rounded,null===(_innerRef$current=innerRef.current)||void 0===_innerRef$current?void 0:_innerRef$current.offsetHeight]),(0,jsx_runtime.jsxs)(StyledButton,{ref:innerRef,$size:size,$variant:variant,$color:color,$colorPalette:colorPalette,$disabled:disabled,$rounded:rounded,$isFullWidth:isFullWidth,$borderRadius:borderRadius,"aria-disabled":disabled,style,onClick,"data-testid":dataTestId,...rest,children:[leadingIcon&&(0,jsx_runtime.jsx)(StyledButtonIcon,{$size:size,"data-testid":dataLeadingIcon,children:leadingIcon}),"string"==typeof children?(0,jsx_runtime.jsx)(Text.A,{disableColor:!0,variant:"span",size,children}):children,trailingIcon&&(0,jsx_runtime.jsx)(StyledButtonIcon,{$size:size,"data-testid":dataTrailingIcon,children:trailingIcon})]})})),Button_Button=Button,StyledButton=styled_components_browser_esm.Ay.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  ","\n"])),(props=>{const properties=propsHandler(props.$variant,props.$color,props.$colorPalette,props.$size,props.$disabled);return"\n      background-color: ".concat(properties.backgroundColor.default,";\n      color: ").concat(properties.color.default,";\n      padding: ").concat(properties.padding,";\n      gap: ").concat(properties.gap,";\n      width: ").concat(props.$isFullWidth?"100%":"auto",";\n      cursor: ").concat(props.$disabled?"not-allowed":"pointer",";\n      border-radius: ").concat(props.$borderRadius,";\n      border: ").concat(properties.border.default,";\n      ").concat((0,helpers.vW)(properties,["boxShadow","default"])?"box-shadow: ".concat(properties.boxShadow.default,";"):"","\n      ").concat(props.$disabled?"":"\n          &:hover {\n          background-color: ".concat(properties.backgroundColor.hover,";\n          color: ").concat(properties.color.hover,";\n          border: ").concat(properties.border.hover,";\n          ").concat((0,helpers.vW)(properties,["boxShadow","hover"])?"box-shadow: ".concat(properties.boxShadow.hover,";"):"","\n        }\n        &:active {\n          background-color: ").concat(properties.backgroundColor.active,";\n          color: ").concat(properties.color.active,";\n          ").concat(properties.border?"border: ".concat(properties.border.active,";"):"","\n          ").concat((0,helpers.vW)(properties,["filter","active"])?"filter: ".concat(properties.filter.active,";"):"",";\n          ").concat((0,helpers.vW)(properties,["boxShadow","active"])?"box-shadow: ".concat(properties.boxShadow.active,";"):"","\n        }  \n        &:focus-visible {\n          outline-offset: 2px;\n          outline: 2px solid ").concat(props.$colorPalette[props.$color].accentScale[8],";\n        }"),"\n\n    ")})),StyledButtonIcon=styled_components_browser_esm.Ay.span(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n  ","\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"])),(props=>{const size=getIconSizeProps(props.$size);return"\n      width: ".concat(size.width,";\n      height: ").concat(size.height,";\n    ")})),propsHandler=(variant,color,colorPalette,size,disabled)=>({...getVariantProps(variant,color,colorPalette,disabled),...getSizeProps(size)}),getVariantProps=(variant,color,colorPalette,disabled)=>{switch(variant){case"contained":return disabled?{backgroundColor:{default:colorPalette[color].grayScale[8]},color:{default:colorPalette[color].accentContrast},border:{default:"2px solid ".concat(colorPalette[color].grayScale[8])}}:{backgroundColor:{default:colorPalette[color].accentScale[8],hover:colorPalette[color].accentScale[9],active:colorPalette[color].accentScale[9]},color:{default:colorPalette[color].accentContrast,hover:colorPalette[color].accentContrast,active:colorPalette[color].accentContrast},border:{default:"2px solid ".concat(colorPalette[color].accentScale[8]),hover:"2px solid ".concat(colorPalette[color].accentScale[9]),active:"2px solid ".concat(colorPalette[color].accentScale[9])},filter:{active:"brightness(0.92) saturate(1.1)"}};case"outlined":return disabled?{backgroundColor:{default:"transparent"},color:{default:colorPalette[color].grayScale[10]},border:{default:"2px solid ".concat(colorPalette[color].grayScale[5])}}:{backgroundColor:{default:"transparent",hover:"transparent",active:"transparent"},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[10],active:colorPalette[color].accentScale[10]},border:{default:"2px solid ".concat(colorPalette[color].accentScale[5]),hover:"2px solid ".concat(colorPalette[color].accentScale[6]),active:"2px solid ".concat(colorPalette[color].accentScale[7])}};case"soft":return disabled?{backgroundColor:{default:colorPalette[color].grayScale[2]},color:{default:colorPalette[color].grayScale[10]},border:{default:"2px solid ".concat(colorPalette[color].grayScale[2])}}:{backgroundColor:{default:colorPalette[color].accentScale[2],hover:colorPalette[color].accentScale[3],active:colorPalette[color].accentScale[3]},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[10],active:colorPalette[color].accentScale[10]},border:{default:"2px solid ".concat(colorPalette[color].accentScale[2]),hover:"2px solid ".concat(colorPalette[color].accentScale[3]),active:"2px solid ".concat(colorPalette[color].accentScale[3])},filter:{active:"brightness(0.92) saturate(1.1)"}};case"outlined-soft":return disabled?{backgroundColor:{default:colorPalette[color].grayScale[2]},color:{default:colorPalette[color].grayScale[10]},border:{default:"2px solid ".concat(colorPalette[color].grayScale[5])}}:{backgroundColor:{default:colorPalette[color].accentScale[2],hover:colorPalette[color].accentScale[3],active:colorPalette[color].accentScale[3]},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[10],active:colorPalette[color].accentScale[10]},border:{default:"2px solid ".concat(colorPalette[color].accentScale[5]),hover:"2px solid ".concat(colorPalette[color].accentScale[6]),active:"2px solid ".concat(colorPalette[color].accentScale[7])}};case"neumorph":return disabled?{backgroundColor:{default:"transparent"},color:{default:colorPalette[color].grayScale[5]},border:{default:"2px solid transparent"},boxShadow:{default:"-6px -6px 14px rgba(255, 255, 255, .7),\n              -6px -6px 10px rgba(255, 255, 255, .5),\n              6px 6px 8px rgba(255, 255, 255, .075),\n              6px 6px 10px rgba(0, 0, 0, .15)"}}:{backgroundColor:{default:"transparent",hover:"transparent",active:"transparent"},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[10],active:colorPalette[color].accentScale[10]},border:{default:"2px solid transparent",hover:"2px solid transparent",active:"2px solid transparent"},boxShadow:{default:"-6px -6px 14px rgba(255, 255, 255, .7),\n              -6px -6px 10px rgba(255, 255, 255, .5),\n              6px 6px 8px rgba(255, 255, 255, .075),\n              6px 6px 10px rgba(0, 0, 0, .15)",hover:"-2px -2px 6px rgba(255, 255, 255, .6),\n              -2px -2px 4px rgba(255, 255, 255, .4),\n              2px 2px 2px rgba(255, 255, 255, .05),\n              2px 2px 4px rgba(0, 0, 0, .1)",active:"inset -2px -2px 6px rgba(255, 255, 255, .7),\n              inset -2px -2px 4px rgba(255, 255, 255, .5),\n              inset 2px 2px 2px rgba(255, 255, 255, .075),\n              inset 2px 2px 4px rgba(0, 0, 0, .15)"}}}},getSizeProps=size=>{switch(size){case"small":return{padding:"0.25rem 0.5rem",gap:"0.5rem"};case"medium":case"large":return{padding:"0.5rem 1rem",gap:"0.75rem"}}},getIconSizeProps=size=>{switch(size){case"small":return{width:"1.25rem",height:"1.25rem"};case"medium":return{width:"1.5rem",height:"1.5rem"};case"large":return{width:"1.75rem",height:"1.75rem"}}};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft" | "outlined-soft" | "neumorph"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"outlined-soft"'},{name:"literal",value:'"neumorph"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colors.default.primary.main",computed:!0}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},"data-leading-icon":{required:!1,tsType:{name:"string"},description:""},"data-trailing-icon":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=_ref=>{let{variant="div",strong,children,align="center",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,wrap=!1,size="medium",disableColor=!1,fontSize,lineHeight,style,className,fontFamily,...rest}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;let _styledProps;if(disableColor)_styledProps={$disableColor:disableColor};else{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:color&&colorPalette?colorPalette[color].accentScale[10]:color;_styledProps={$disableColor:disableColor,$color:_color}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",rel:"stylesheet"})]}),(()=>{switch(variant){case"h1":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH1,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h2":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH2,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h3":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH3,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h4":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH4,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h5":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH5,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h6":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH6,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"div":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledDiv,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"paragraph":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledP,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"label":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"span":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledSpan,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children})}})()]})},__WEBPACK_DEFAULT_EXPORT__=Text,commonStyles="\n  padding: 0;\n  margin: 0;\n",StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h1(_templateObject||(_templateObject=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  ","\n  font-family: ",";\n  ","\n"])),(props=>{var _props$$fontSize;return(null!==(_props$$fontSize=props.$fontSize)&&void 0!==_props$$fontSize?_props$$fontSize:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2.25rem":"2rem"}),(props=>{var _props$$lineHeight;return(null!==(_props$$lineHeight=props.$lineHeight)&&void 0!==_props$$lineHeight?_props$$lineHeight:"large"===props.$lineHeight)?"4rem":"medium"===props.$size?"3.5rem":"3rem"}),(props=>props.$strong?"700":"400"),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),(props=>{var _props$$fontFamily;return null!==(_props$$fontFamily=props.$fontFamily)&&void 0!==_props$$fontFamily?_props$$fontFamily:'"Lato", sans-serif'}),commonStyles),StyledH2=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h2(_templateObject2||(_templateObject2=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize2;return(null!==(_props$$fontSize2=props.$fontSize)&&void 0!==_props$$fontSize2?_props$$fontSize2:"large"===props.$size)?"2.25rem":"medium"===props.$size?"2rem":"1.75rem"}),(props=>{var _props$$lineHeight2;return(null!==(_props$$lineHeight2=props.$lineHeight)&&void 0!==_props$$lineHeight2?_props$$lineHeight2:"large"===props.$size)?"3.5rem":"medium"===props.$size?"3rem":"2.5rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily2;return null!==(_props$$fontFamily2=props.$fontFamily)&&void 0!==_props$$fontFamily2?_props$$fontFamily2:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH3=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h3(_templateObject3||(_templateObject3=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize3;return(null!==(_props$$fontSize3=props.$fontSize)&&void 0!==_props$$fontSize3?_props$$fontSize3:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}),(props=>{var _props$$lineHeight3;return(null!==(_props$$lineHeight3=props.$lineHeight)&&void 0!==_props$$lineHeight3?_props$$lineHeight3:"large"===props.$size)?"3rem":"medium"===props.$size?"2.5rem":"2rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily3;return null!==(_props$$fontFamily3=props.$fontFamily)&&void 0!==_props$$fontFamily3?_props$$fontFamily3:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH4=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h4(_templateObject4||(_templateObject4=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize4;return(null!==(_props$$fontSize4=props.$fontSize)&&void 0!==_props$$fontSize4?_props$$fontSize4:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>{var _props$$lineHeight4;return(null!==(_props$$lineHeight4=props.$lineHeight)&&void 0!==_props$$lineHeight4?_props$$lineHeight4:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2rem":"1.75rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily4;return null!==(_props$$fontFamily4=props.$fontFamily)&&void 0!==_props$$fontFamily4?_props$$fontFamily4:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH5=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h5(_templateObject5||(_templateObject5=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize5;return(null!==(_props$$fontSize5=props.$fontSize)&&void 0!==_props$$fontSize5?_props$$fontSize5:"large"===props.$size)?"1.5rem":"medium"===props.$size?"1.25rem":"1rem"}),(props=>{var _props$$lineHeight5;return(null!==(_props$$lineHeight5=props.$lineHeight)&&void 0!==_props$$lineHeight5?_props$$lineHeight5:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily5;return null!==(_props$$fontFamily5=props.$fontFamily)&&void 0!==_props$$fontFamily5?_props$$fontFamily5:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH6=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h6(_templateObject6||(_templateObject6=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize6;return(null!==(_props$$fontSize6=props.$fontSize)&&void 0!==_props$$fontSize6?_props$$fontSize6:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight6;return(null!==(_props$$lineHeight6=props.$lineHeight)&&void 0!==_props$$lineHeight6?_props$$lineHeight6:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily6;return null!==(_props$$fontFamily6=props.$fontFamily)&&void 0!==_props$$fontFamily6?_props$$fontFamily6:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div(_templateObject7||(_templateObject7=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize7;return(null!==(_props$$fontSize7=props.$fontSize)&&void 0!==_props$$fontSize7?_props$$fontSize7:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight7;return(null!==(_props$$lineHeight7=props.$lineHeight)&&void 0!==_props$$lineHeight7?_props$$lineHeight7:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily7;return null!==(_props$$fontFamily7=props.$fontFamily)&&void 0!==_props$$fontFamily7?_props$$fontFamily7:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.label(_templateObject8||(_templateObject8=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize8;return(null!==(_props$$fontSize8=props.$fontSize)&&void 0!==_props$$fontSize8?_props$$fontSize8:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight8;return(null!==(_props$$lineHeight8=props.$lineHeight)&&void 0!==_props$$lineHeight8?_props$$lineHeight8:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily8;return null!==(_props$$fontFamily8=props.$fontFamily)&&void 0!==_props$$fontFamily8?_props$$fontFamily8:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span(_templateObject9||(_templateObject9=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize9;return(null!==(_props$$fontSize9=props.$fontSize)&&void 0!==_props$$fontSize9?_props$$fontSize9:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight9;return(null!==(_props$$lineHeight9=props.$lineHeight)&&void 0!==_props$$lineHeight9?_props$$lineHeight9:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily9;return null!==(_props$$fontFamily9=props.$fontFamily)&&void 0!==_props$$fontFamily9?_props$$fontFamily9:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledP=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.p(_templateObject10||(_templateObject10=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize10;return(null!==(_props$$fontSize10=props.$fontSize)&&void 0!==_props$$fontSize10?_props$$fontSize10:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight10;return(null!==(_props$$lineHeight10=props.$lineHeight)&&void 0!==_props$$lineHeight10?_props$$lineHeight10:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily10;return null!==(_props$$fontFamily10=props.$fontFamily)&&void 0!==_props$$fontFamily10?_props$$fontFamily10:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles);Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{id:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'| "h1"\n| "h2"\n| "h3"\n| "h4"\n| "h5"\n| "h6"\n| "div"\n| "paragraph"\n| "label"\n| "span"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"div"'},{name:"literal",value:'"paragraph"'},{name:"literal",value:'"label"'},{name:"literal",value:'"span"'}]},description:"",defaultValue:{value:'"div"',computed:!1}},strong:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"justify"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},preciseColor:{required:!1,tsType:{name:"string"},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},lineHeight:{required:!1,tsType:{name:"string"},description:""},disableColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fontFamily:{required:!1,tsType:{name:"string"},description:""}}}}}]);