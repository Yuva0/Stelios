(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[2039,3393],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/stories/components/Switch/Switch.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_Switch_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/Switch/Switch.stories.tsx");function _createMdxContent(props){const _components={h1:"h1",h2:"h2",h4:"h4",p:"p",...(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_3__,name:"Docs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"switch",children:"Switch"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Switch is used to toggle between two states."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"sizes",children:"Sizes:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"small",children:"Small:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_3__.Small}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"medium",children:"Medium:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_3__.Medium}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"large",children:"Large:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_3__.Large}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Customize as per your needs using the controls below"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_3__.Playground}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.H2,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_3__.Playground})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/stories/components/Switch/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Medium:()=>Medium,Playground:()=>Playground,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./src/tokens/colors.json"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch=(0,react.forwardRef)(((_ref2,ref)=>{let{id,value,size="medium",color=colors.A.zB.iW,checked=!1,disabled=!1,label,name,className,style,onChange,...props}=_ref2;const innerRef=react.useRef(null),_ref=null!=ref?ref:innerRef,[isChecked,setIsChecked]=(0,react.useState)(null!=checked&&checked);(0,react.useEffect)((()=>{setIsChecked(null!=checked&&checked)}),[checked]);const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color);return(0,jsx_runtime.jsxs)(StyledSwitch,{role:"switch","aria-checked":isChecked,className,$checked:isChecked,$disabled:disabled,$size:size,$color:color,$colorGradient:colorPalette,...props,children:[(0,jsx_runtime.jsx)("input",{ref:_ref,type:"checkbox",checked:isChecked,name,onChange:event=>{setIsChecked((prev=>!prev)),onChange&&onChange(event)}}),(0,jsx_runtime.jsx)(StyledSwitchContent,{$checked:isChecked,$disabled:disabled,$size:size,$color:color,$colorGradient:colorPalette,children:(0,jsx_runtime.jsx)("span",{className:"".concat(isChecked?"ste-switch-content-selected":"ste-switch-content-unselected")})})]})})),Switch_Switch=Switch,getSize=size=>{switch(size){case"small":return{height:"0.6rem",width:"1rem",contentSize:"0.4rem",top:"0.1rem",unselectedLeft:"0.1rem",selectedLeft:"0.5rem",padding:"0.2rem"};case"medium":return{height:"0.8rem",width:"1.4rem",contentSize:"0.6rem",top:"0.1rem",unselectedLeft:"0.1rem",selectedLeft:"0.7rem",padding:"0.3rem"};case"large":return{height:"1rem",width:"1.8rem",contentSize:"0.8rem",top:"0.1rem",unselectedLeft:"0.1rem",selectedLeft:"0.9rem",padding:"0.5rem"}}},StyledSwitch=styled_components_browser_esm.Ay.span(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  cursor: pointer;\n  padding: ",';\n  border-radius: 1rem;\n  & input[type="checkbox"] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n'])),(props=>getSize(props.$size).padding)),StyledSwitchContent=styled_components_browser_esm.Ay.span(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n  position: relative;\n  border-radius: 1rem;\n  width: ",";\n  height: ",";\n  background-color: ",";\n\n  & span {\n    top: ",";\n    position: absolute;\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    background-color: ",";\n    transition: left 0.2s ease-in-out;\n  }\n\n  & .ste-switch-content-unselected {\n    left: ",";\n  }\n  & .ste-switch-content-selected {\n    left: ",";\n  }\n"])),(props=>getSize(props.$size).width),(props=>getSize(props.$size).height),(props=>props.$checked?props.$colorGradient[props.$color].accentScale[8]:props.$colorGradient[props.$color].grayScale[8]),(props=>getSize(props.$size).top),(props=>getSize(props.$size).contentSize),(props=>getSize(props.$size).contentSize),(props=>"#ffffff"),(props=>getSize(props.$size).unselectedLeft),(props=>getSize(props.$size).selectedLeft));Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{id:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};var FormControlLabel=__webpack_require__("./src/components/FormControlLabel/FormControlLabel.tsx");const Switch_stories={title:"Components/Switch",component:Switch_Switch,parameters:{layout:"centered"},argTypes:{}},Template={render:args=>(0,jsx_runtime.jsx)(FormControlLabel.A,{control:(0,jsx_runtime.jsx)(Switch_Switch,{}),label:"Switch Label",...args})},Small={...Template,args:{size:"small"}},Medium={...Template,args:{size:"medium"}},Large={...Template,args:{size:"large"}},Playground=Template;Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    size: "small"\n  }\n}',...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    size: "medium"\n  }\n}',...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    size: "large"\n  }\n}',...Large.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"Template",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Small","Medium","Large","Playground"]},"./src/components/FormControlLabel/FormControlLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/Text.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledFormControl=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.label(_templateObject||(_templateObject=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(["\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  gap: ","px;\n  cursor: pointer;\n  user-select: none;\n  flex-direction: ",";\n"])),(props=>props.$gap),(props=>(labelPlacement=>{switch(labelPlacement){case"start":return"row-reverse";case"end":default:return"row";case"top":return"column-reverse";case"bottom":return"column"}})(props.$labelPlacement))),FormControlLabel=_ref=>{let{control,label,labelPlacement="end",size="medium",gap=4,disabled=!1,color,...props}=_ref;const _disabled=control.props.disabled||disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledFormControl,{$gap:gap,$labelPlacement:labelPlacement,$disabled:_disabled,$size:size,children:[react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(control,{...!control.props.size&&size&&{size},...!control.props.size&&color&&{color},...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"string"==typeof label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{color,variant:"paragraph",size,children:label}):label})]})},__WEBPACK_DEFAULT_EXPORT__=FormControlLabel;FormControlLabel.__docgenInfo={description:"",methods:[],displayName:"FormControlLabel",props:{labelPlacement:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "top" | "bottom"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"end"',computed:!1}},control:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=_ref=>{let{variant="div",strong,children,align="center",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,wrap=!1,size="medium",disableColor=!1,fontSize,lineHeight,style,className,fontFamily,...rest}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;let _styledProps;if(disableColor)_styledProps={$disableColor:disableColor};else{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:color&&colorPalette?colorPalette[color].accentScale[10]:color;_styledProps={$disableColor:disableColor,$color:_color}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",rel:"stylesheet"})]}),(()=>{switch(variant){case"h1":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH1,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h2":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH2,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h3":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH3,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h4":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH4,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h5":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH5,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h6":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH6,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"div":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledDiv,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"paragraph":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledP,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"label":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"span":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledSpan,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children})}})()]})},__WEBPACK_DEFAULT_EXPORT__=Text,commonStyles="\n  padding: 0;\n  margin: 0;\n",StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h1(_templateObject||(_templateObject=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  ","\n  font-family: ",";\n  ","\n"])),(props=>{var _props$$fontSize;return(null!==(_props$$fontSize=props.$fontSize)&&void 0!==_props$$fontSize?_props$$fontSize:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2.25rem":"2rem"}),(props=>{var _props$$lineHeight;return(null!==(_props$$lineHeight=props.$lineHeight)&&void 0!==_props$$lineHeight?_props$$lineHeight:"large"===props.$lineHeight)?"4rem":"medium"===props.$size?"3.5rem":"3rem"}),(props=>props.$strong?"700":"400"),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),(props=>{var _props$$fontFamily;return null!==(_props$$fontFamily=props.$fontFamily)&&void 0!==_props$$fontFamily?_props$$fontFamily:'"Lato", sans-serif'}),commonStyles),StyledH2=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h2(_templateObject2||(_templateObject2=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize2;return(null!==(_props$$fontSize2=props.$fontSize)&&void 0!==_props$$fontSize2?_props$$fontSize2:"large"===props.$size)?"2.25rem":"medium"===props.$size?"2rem":"1.75rem"}),(props=>{var _props$$lineHeight2;return(null!==(_props$$lineHeight2=props.$lineHeight)&&void 0!==_props$$lineHeight2?_props$$lineHeight2:"large"===props.$size)?"3.5rem":"medium"===props.$size?"3rem":"2.5rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily2;return null!==(_props$$fontFamily2=props.$fontFamily)&&void 0!==_props$$fontFamily2?_props$$fontFamily2:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH3=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h3(_templateObject3||(_templateObject3=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize3;return(null!==(_props$$fontSize3=props.$fontSize)&&void 0!==_props$$fontSize3?_props$$fontSize3:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}),(props=>{var _props$$lineHeight3;return(null!==(_props$$lineHeight3=props.$lineHeight)&&void 0!==_props$$lineHeight3?_props$$lineHeight3:"large"===props.$size)?"3rem":"medium"===props.$size?"2.5rem":"2rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily3;return null!==(_props$$fontFamily3=props.$fontFamily)&&void 0!==_props$$fontFamily3?_props$$fontFamily3:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH4=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h4(_templateObject4||(_templateObject4=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize4;return(null!==(_props$$fontSize4=props.$fontSize)&&void 0!==_props$$fontSize4?_props$$fontSize4:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>{var _props$$lineHeight4;return(null!==(_props$$lineHeight4=props.$lineHeight)&&void 0!==_props$$lineHeight4?_props$$lineHeight4:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2rem":"1.75rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily4;return null!==(_props$$fontFamily4=props.$fontFamily)&&void 0!==_props$$fontFamily4?_props$$fontFamily4:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH5=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h5(_templateObject5||(_templateObject5=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize5;return(null!==(_props$$fontSize5=props.$fontSize)&&void 0!==_props$$fontSize5?_props$$fontSize5:"large"===props.$size)?"1.5rem":"medium"===props.$size?"1.25rem":"1rem"}),(props=>{var _props$$lineHeight5;return(null!==(_props$$lineHeight5=props.$lineHeight)&&void 0!==_props$$lineHeight5?_props$$lineHeight5:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily5;return null!==(_props$$fontFamily5=props.$fontFamily)&&void 0!==_props$$fontFamily5?_props$$fontFamily5:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH6=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h6(_templateObject6||(_templateObject6=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize6;return(null!==(_props$$fontSize6=props.$fontSize)&&void 0!==_props$$fontSize6?_props$$fontSize6:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight6;return(null!==(_props$$lineHeight6=props.$lineHeight)&&void 0!==_props$$lineHeight6?_props$$lineHeight6:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily6;return null!==(_props$$fontFamily6=props.$fontFamily)&&void 0!==_props$$fontFamily6?_props$$fontFamily6:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div(_templateObject7||(_templateObject7=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize7;return(null!==(_props$$fontSize7=props.$fontSize)&&void 0!==_props$$fontSize7?_props$$fontSize7:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight7;return(null!==(_props$$lineHeight7=props.$lineHeight)&&void 0!==_props$$lineHeight7?_props$$lineHeight7:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily7;return null!==(_props$$fontFamily7=props.$fontFamily)&&void 0!==_props$$fontFamily7?_props$$fontFamily7:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.label(_templateObject8||(_templateObject8=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize8;return(null!==(_props$$fontSize8=props.$fontSize)&&void 0!==_props$$fontSize8?_props$$fontSize8:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight8;return(null!==(_props$$lineHeight8=props.$lineHeight)&&void 0!==_props$$lineHeight8?_props$$lineHeight8:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily8;return null!==(_props$$fontFamily8=props.$fontFamily)&&void 0!==_props$$fontFamily8?_props$$fontFamily8:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span(_templateObject9||(_templateObject9=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize9;return(null!==(_props$$fontSize9=props.$fontSize)&&void 0!==_props$$fontSize9?_props$$fontSize9:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight9;return(null!==(_props$$lineHeight9=props.$lineHeight)&&void 0!==_props$$lineHeight9?_props$$lineHeight9:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily9;return null!==(_props$$fontFamily9=props.$fontFamily)&&void 0!==_props$$fontFamily9?_props$$fontFamily9:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledP=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.p(_templateObject10||(_templateObject10=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize10;return(null!==(_props$$fontSize10=props.$fontSize)&&void 0!==_props$$fontSize10?_props$$fontSize10:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight10;return(null!==(_props$$lineHeight10=props.$lineHeight)&&void 0!==_props$$lineHeight10?_props$$lineHeight10:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily10;return null!==(_props$$fontFamily10=props.$fontFamily)&&void 0!==_props$$fontFamily10?_props$$fontFamily10:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles);Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{id:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'| "h1"\n| "h2"\n| "h3"\n| "h4"\n| "h5"\n| "h6"\n| "div"\n| "paragraph"\n| "label"\n| "span"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"div"'},{name:"literal",value:'"paragraph"'},{name:"literal",value:'"label"'},{name:"literal",value:'"span"'}]},description:"",defaultValue:{value:'"div"',computed:!1}},strong:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"justify"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},preciseColor:{required:!1,tsType:{name:"string"},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},lineHeight:{required:!1,tsType:{name:"string"},description:""},disableColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fontFamily:{required:!1,tsType:{name:"string"},description:""}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);