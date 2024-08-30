/*! For license information please see stories-components-ToggleButton-ToggleButton-stories.40ee03e8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[7225],{"./src/stories/components/ToggleButton/ToggleButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ToggleButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),Text=__webpack_require__("./src/components/Text/Text.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ToggleButton=_ref=>{var _ref2;let{index,children,value,defaultSelected,selected,color=colors.A.zB.iW,size="medium",className,style,onClick}=_ref;const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color),isSelected=null!==(_ref2=null!=selected?selected:defaultSelected)&&void 0!==_ref2&&_ref2;return(0,jsx_runtime.jsx)(StyledToggleBtn,{$size:size,$selected:isSelected,$color:color,$colorPalette:colorPalette,className,style,onClick:e=>{onClick&&onClick(e,value,index)},children})};ToggleButton.displayName="ToggleButton";const ToggleButton_ToggleButton=ToggleButton,getBgColor=(color,colorPalette,selected)=>selected?{default:`${colorPalette[color].accentScale[8]}`}:{default:`${colorPalette[color].accentScale[0]}`,hover:`${colorPalette[color].accentScale[1]}`,active:`${colorPalette[color].accentScale[2]}`},getColor=(color,colorPalette,selected)=>selected?{default:`${colorPalette[color].accentContrast}`}:{default:`${colorPalette[color].accentScale[10]}`},getIconSize=size=>{switch(size){case"small":return"16px";case"medium":default:return"20px";case"large":return"24px"}},StyledToggleBtn=styled_components_browser_esm.Ay.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props=>(size=>{switch(size){case"small":return"4px 8px";case"medium":default:return"8px 16px";case"large":return"12px 18px"}})(props.$size)};
  font-size: 1rem;
  width: 100%;
  gap: ${props=>"small"===props.$size?"0.25rem":"0.5rem"};
  cursor: pointer;
  color: ${props=>getColor(props.$color,props.$colorPalette,props.$selected).default};
  background-color: ${props=>getBgColor(props.$color,props.$colorPalette,props.$selected).default};
  color: ${props=>getColor(props.$color,props.$colorPalette,props.$selected).default};

  &:focus-visible {
    outline-offset: -2px;
    outline: ${props=>{return color=props.$color,`2px solid ${props.$colorPalette[color].accentScale[7]}`;var color}};
  }

  &:hover {
    background-color: ${props=>getBgColor(props.$color,props.$colorPalette,props.$selected).hover};
  }

  &:active {
    background-color: ${props=>getBgColor(props.$color,props.$colorPalette,props.$selected).active};
  }

  & svg {
    width: ${props=>getIconSize(props.$size)};
    height: ${props=>getIconSize(props.$size)};
  }
`;ToggleButton.__docgenInfo={description:"",methods:[],displayName:"ToggleButton",props:{index:{required:!1,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultSelected:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent, value?: string, index?: number) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"},{type:{name:"string"},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const getBorder=(color,colorPalette)=>({default:`1px solid ${colorPalette[color].accentScale[8]}`,hover:`1px solid ${colorPalette[color].accentScale[9]}`,active:`1px solid ${colorPalette[color].accentScale[9]}`}),StyledToggleBtnGroup=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props=>props.$width};
  & > :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  & > :not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  & > :not(:last-child) {
    border-left: ${props=>getBorder(props.$color,props.$colorPalette).default};
    border-top: ${props=>getBorder(props.$color,props.$colorPalette).default};
    border-bottom: ${props=>getBorder(props.$color,props.$colorPalette).default};
    border-right: 0;

    &:hover {
      border-left: ${props=>getBorder(props.$color,props.$colorPalette).hover};
      border-top: ${props=>getBorder(props.$color,props.$colorPalette).hover};
      border-bottom: ${props=>getBorder(props.$color,props.$colorPalette).hover};
    }

    &:active {
      border-left: ${props=>getBorder(props.$color,props.$colorPalette).active};
      border-top: ${props=>getBorder(props.$color,props.$colorPalette).active};
      border-bottom: ${props=>getBorder(props.$color,props.$colorPalette).active};
    }
  }
  & > :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: ${props=>getBorder(props.$color,props.$colorPalette).default};

    &:hover {
      border: ${props=>getBorder(props.$color,props.$colorPalette).hover};
    }
    &:active {
      border: ${props=>getBorder(props.$color,props.$colorPalette).active};
    }
  }
`,getIndexFromValue=(value,children)=>react.Children.toArray(children).findIndex((child=>child.props.value===value)),ToggleButtonGroup=_ref=>{let{children,value,color=colors.A.zB.iW,className,size,style,width="fit-content",onClick}=_ref;const[selectedIndex,setSelectedIndex]=react.useState(value?getIndexFromValue(value,children):null);react.useEffect((()=>{setSelectedIndex(value?getIndexFromValue(value,children):null)}),[value,children]);const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color),_onClick=(e,value,index)=>{setSelectedIndex(null!=index?index:null),onClick&&onClick(e,value)};return(0,jsx_runtime.jsx)(StyledToggleBtnGroup,{$width:width,$color:color,$colorPalette:colorPalette,className,style,children:react.Children.map(children,((child,index)=>{if(react.isValidElement(child)&&child.type){const childElement=child,childType=childElement.type;if("string"==typeof childType)return child;if("ToggleButton"===childType.displayName)return react.cloneElement(childElement,{index,selected:selectedIndex===index,...!childElement.props.color&&color&&{color},...!childElement.props.size&&size&&{size},onClick:_onClick})}return child}))})},ToggleButtonGroup_ToggleButtonGroup=ToggleButtonGroup;ToggleButtonGroup.__docgenInfo={description:"",methods:[],displayName:"ToggleButtonGroup",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"fit-content"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent, value?: string) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};var createReactComponent=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs"),IconSun=(0,createReactComponent.A)("outline","sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]),IconMoon=(0,createReactComponent.A)("outline","moon","IconMoon",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}]]);const ToggleButton_stories={title:"Components/ToggleButton",component:ToggleButton_ToggleButton,parameters:{layout:"centered"},argTypes:{}},Template={render:args=>(0,jsx_runtime.jsxs)(ToggleButtonGroup_ToggleButtonGroup,{size:"small",value:"sun",onClick:(e,value)=>{console.log(e,value)},width:"15rem",...args,children:[(0,jsx_runtime.jsxs)(ToggleButton_ToggleButton,{value:"sun",children:[(0,jsx_runtime.jsx)(IconSun,{}),(0,jsx_runtime.jsx)(Text.A,{disableColor:!0,variant:"paragraph",children:"Light"})]}),(0,jsx_runtime.jsxs)(ToggleButton_ToggleButton,{value:"moon",children:[(0,jsx_runtime.jsx)(IconMoon,{width:20,height:20}),(0,jsx_runtime.jsx)(Text.A,{disableColor:!0,variant:"paragraph",children:"Dark"})]})]})},Default={...Template},Playground=Template,__namedExportsOrder=["Default","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Default.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"Template",...Playground.parameters?.docs?.source}}}},"./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createReactComponent});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const createReactComponent=(type,iconName,iconNamePascal,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,stroke=2,title,className,children,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes[type],width:size,height:size,className:["tabler-icon",`tabler-icon-${iconName}`,className].join(" "),..."filled"===type?{fill:color}:{strokeWidth:stroke,stroke:color},...rest},[title&&(0,react.createElement)("title",{key:"svg-title"},title),...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]])));return Component.displayName=`${iconNamePascal}`,Component}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=_ref=>{let{variant="div",strong,children,align="center",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,wrap=!1,size="medium",disableColor=!1,fontSize,lineHeight,style,className,fontFamily,...rest}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;let _styledProps;if(disableColor)_styledProps={$disableColor:disableColor};else{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:color&&colorPalette?colorPalette[color].accentScale[10]:color;_styledProps={$disableColor:disableColor,$color:_color}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",rel:"stylesheet"})]}),(()=>{switch(variant){case"h1":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH1,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h2":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH2,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h3":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH3,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h4":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH4,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h5":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH5,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h6":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH6,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"div":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledDiv,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"paragraph":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledP,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"label":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"span":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledSpan,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children})}})()]})},__WEBPACK_DEFAULT_EXPORT__=Text,commonStyles="\n  padding: 0;\n  margin: 0;\n",StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h1`
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
//# sourceMappingURL=stories-components-ToggleButton-ToggleButton-stories.40ee03e8.iframe.bundle.js.map