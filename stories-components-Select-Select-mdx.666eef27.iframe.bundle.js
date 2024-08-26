/*! For license information please see stories-components-Select-Select-mdx.666eef27.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[4800,6981],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/stories/components/Select/Select.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_Select_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/Select/Select.stories.tsx");function _createMdxContent(props){const _components={br:"br",h1:"h1",h2:"h2",h4:"h4",p:"p",...(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_3__,name:"Docs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"select",children:"Select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Selects are used to provide a list of options for the user to choose from.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br,{}),"\n","They are used when the user needs to select one or more options from a list of options.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br,{}),"\n","They are used in forms, dialogs, and menus."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Every variant has it's own story. Neither is better than the other, they are just different.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br,{}),"\n","Choose the one that fits your design system the best.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br,{}),"\n","Default is Contained"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"contained",children:"Contained"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_3__.Contained}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"outlined",children:"Outlined"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_3__.Outlined}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"soft",children:"Soft"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_3__.Soft}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"sizes",children:"Sizes:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Selects can be small, medium or large. Default is medium."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"small",children:"Small"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_3__.Small}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"medium",children:"Medium"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_3__.Medium}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"large",children:"Large"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_3__.Large}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"playground",children:"Playground:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Customize as per your needs using the controls below"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_3__.Playground}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.H2,{of:_Select_stories__WEBPACK_IMPORTED_MODULE_3__.Playground})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/stories/components/Select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,Large:()=>Large,Medium:()=>Medium,Outlined:()=>Outlined,Playground:()=>Playground,Small:()=>Small,Soft:()=>Soft,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});var react=__webpack_require__("./node_modules/react/index.js"),Input=__webpack_require__("./src/components/Input/Input.tsx"),IconArrowDown=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowDown.mjs"),Menu=__webpack_require__("./src/components/Menu/Menu.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Select=_ref=>{var _inputRef$current;let{label,open=!1,children,multiSelect,placeholder,variant="contained",size="medium",onClick}=_ref;const inputRef=react.useRef(null),[isOpen,setIsOpen]=react.useState(open),[inputValue,setInputValue]=react.useState("");return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Input.A,{variant,placeholder,value:inputValue,disableSearch:!0,containerRef:inputRef,label,size,trailingIcon:(0,jsx_runtime.jsx)(IconArrowDown.A,{}),cursor:"pointer",onClick:()=>{setIsOpen(!isOpen)}}),(0,jsx_runtime.jsx)(Menu.A,{variant,open:isOpen,anchorElement:inputRef.current,minWidth:"".concat(null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current?void 0:_inputRef$current.offsetWidth,"px"),onClick:(e,_ref4)=>{let{title,value}=_ref4;return multiSelect?((e,_ref2)=>{let{title,value}=_ref2;setInputValue(inputValue?Array.isArray(inputValue)?[...inputValue,title]:[inputValue,title]:title)})(0,{title,value}):((e,_ref3)=>{let{title,value}=_ref3;setIsOpen(!1),setInputValue(title),onClick&&onClick(e,{title,value})})(e,{title,value})},children:react.Children.map(children,(child=>child))})]})},Select_Select=Select;Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiSelect:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  e: React.MouseEvent,\n  { title, value }: MenuItemKeyProps\n) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"},{type:{name:"MenuItemKeyProps"},name:""}],return:{name:"void"}}},description:""}}};var MenuItem=__webpack_require__("./src/components/MenuItem/MenuItem.tsx");const Select_stories={title:"Components/Select",component:Select_Select,parameters:{layout:"centered"},argTypes:{},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{minHeight:"15rem"},children:(0,jsx_runtime.jsx)(Story,{})})]},Template={render:args=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Select_Select,{label:"Select",...args,children:[(0,jsx_runtime.jsx)(MenuItem.A,{value:"1",title:"Test 1"}),(0,jsx_runtime.jsx)(MenuItem.A,{value:"2",title:"Test 2"}),(0,jsx_runtime.jsx)(MenuItem.A,{value:"3",title:"Test 3"})]})})},Contained={...Template,args:{variant:"contained"}},Outlined={...Template,args:{variant:"outlined"}},Soft={...Template,args:{variant:"soft"}},Small={...Template,args:{size:"small"}},Medium={...Template,args:{size:"medium"}},Large={...Template,args:{size:"large"}},Playground=Template;Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "contained"\n  }\n}',...Contained.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "outlined"\n  }\n}',...Outlined.parameters?.docs?.source}}},Soft.parameters={...Soft.parameters,docs:{...Soft.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "soft"\n  }\n}',...Soft.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    size: "small"\n  }\n}',...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    size: "medium"\n  }\n}',...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    size: "large"\n  }\n}',...Large.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"Template",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Contained","Outlined","Soft","Small","Medium","Large","Playground"]},"./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>createReactComponent});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const createReactComponent=(type,iconName,iconNamePascal,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,stroke=2,title,className,children,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes[type],width:size,height:size,className:["tabler-icon",`tabler-icon-${iconName}`,className].join(" "),..."filled"===type?{fill:color}:{strokeWidth:stroke,stroke:color},...rest},[title&&(0,react.createElement)("title",{key:"svg-title"},title),...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]])));return Component.displayName=`${iconNamePascal}`,Component}},"./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowDown.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>IconArrowDown});var IconArrowDown=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs").A)("outline","arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]])},"./src/components/ClickAwayListener/ClickAwayListener.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClickAwayListener=_ref=>{let{children,onClickAway}=_ref;const clickAwayListenerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),handleClickAway=e=>{children&&clickAwayListenerRef.current&&!clickAwayListenerRef.current.contains(e.target)&&onClickAway&&onClickAway(e)};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{window.addEventListener("click",handleClickAway,!0)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{ref:clickAwayListenerRef,children})},__WEBPACK_DEFAULT_EXPORT__=ClickAwayListener;ClickAwayListener.__docgenInfo={description:"",methods:[],displayName:"ClickAwayListener",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The wrapped element."},onClickAway:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"event"}],return:{name:"void"}}},description:'Callback fired when a "click away" event is detected.'}}}},"./src/components/Menu/Menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_popper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),_ClickAwayListener_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ClickAwayListener/ClickAwayListener.tsx"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Menu=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{var _ref2,_ref3;let{children,style,popperStyles,variant="contained",open=!1,minWidth="none",anchorElement,hideOnOutsideClick=!0,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,onClick,onClose}=_ref;const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null!=open&&open),[popperElement,setPopperElement]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsOpen(null!=open&&open)}),[open]);const{styles,attributes}=(0,react_popper__WEBPACK_IMPORTED_MODULE_6__.E)(anchorElement,popperElement,{placement:null!==(_ref2=popperStyles&&popperStyles.placement)&&void 0!==_ref2?_ref2:"bottom-start",modifiers:null!==(_ref3=popperStyles&&popperStyles.modifiers)&&void 0!==_ref3?_ref3:[{name:"offset",options:{offset:[0,2.5]}}]}),theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_onClick=(e,_ref4)=>{let{title,value}=_ref4;onClick&&onClick(e,{title,value})},_onClose=e=>{setIsOpen(!1),onClose&&onClose(e)};if(!children)return null;if(Array.isArray(children)&&0===children.length)return null;const MenuElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuContainer,{ref:setPopperElement,$open:isOpen,$minWidth:minWidth,$colorPalette:colorPalette,$color:color,$variant:variant,style:{...styles.popper,...style},...attributes.popper,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenu,{children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,((child,index)=>{var _child$props$index;return child&&react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{key:null!==(_child$props$index=child.props.index)&&void 0!==_child$props$index?_child$props$index:index,...!child.props.color&&{color},...!child.props.variant&&{variant},onClick:_onClick}):child}))})});return hideOnOutsideClick?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ClickAwayListener_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__.A,{onClickAway:_onClose,children:MenuElement}):MenuElement})),__WEBPACK_DEFAULT_EXPORT__=Menu,StyledMenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay.div(_templateObject4||(_templateObject4=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.A)(["\n  display: ",";\n  min-width: ",";\n  border-radius: 0.5rem;\n  padding: 0.5rem 0;\n  ","\n  \n"])),(props=>props.$open?"block":"none"),(props=>props.$minWidth),(props=>((variant,colorPalette,color)=>{switch(variant){case"contained":return(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.AH)(_templateObject||(_templateObject=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.A)(["\n        background-color: ",";\n        color: ",";\n        border: 2px solid ",";\n      "])),colorPalette[color].accentScale[8],colorPalette[color].accentContrast,colorPalette[color].accentScale[8]);case"outlined":return(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.AH)(_templateObject2||(_templateObject2=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.A)(['\n        background-color: "transparent";\n        color: ',";\n        border: 2px solid ",";\n      "])),colorPalette[color].accentScale[10],colorPalette[color].accentScale[5]);case"soft":return(0,styled_components__WEBPACK_IMPORTED_MODULE_7__.AH)(_templateObject3||(_templateObject3=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.A)(["\n        background-color: ",";\n        color: ",";\n        border: 2px solid ",";\n      "])),colorPalette[color].accentScale[2],colorPalette[color].accentScale[10],colorPalette[color].accentScale[2])}})(props.$variant,props.$colorPalette,props.$color))),StyledMenu=styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay.ul(_templateObject5||(_templateObject5=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  list-style-type: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  user-select: none;\n"])));Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{variant:{defaultValue:{value:'"contained"',computed:!1},required:!1},open:{defaultValue:{value:"false",computed:!1},required:!1},minWidth:{defaultValue:{value:'"none"',computed:!1},required:!1},hideOnOutsideClick:{defaultValue:{value:"true",computed:!1},required:!1},color:{defaultValue:{value:"colorTokens.default.primary.main",computed:!0},required:!1}}}},"./src/components/MenuItem/MenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Text/Text.tsx")),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuItem=_ref=>{let{leadingIcon,trailingIcon,children,title,value,variant="contained",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,onClick}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledMenuItem,{$variant:variant,$colorPalette:colorPalette,$color:color,onClick:event=>{onClick&&onClick(event,{title,value})},children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemIcon,{children:leadingIcon}),children?"string"==typeof children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemContent,{$variant:variant,$color:color,$colorPalette:colorPalette,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{disableColor:!0,variant:"paragraph",children})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemContent,{$variant:variant,$color:color,$colorPalette:colorPalette,children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemContent,{$variant:variant,$color:color,$colorPalette:colorPalette,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{disableColor:!0,variant:"paragraph",children:title})}),trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemContent,{$variant:variant,$color:color,$colorPalette:colorPalette,children:trailingIcon})]})},__WEBPACK_DEFAULT_EXPORT__=MenuItem,StyledMenuItem=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.li(_templateObject||(_templateObject=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0.5rem 1rem 0.5rem 1rem;\n  gap: 0.25rem;\n  cursor: pointer;\n  ","\n"])),(props=>variantStyleHandler(props.$variant,props.$colorPalette,props.$color))),StyledMenuItemContent=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span(_templateObject2||(_templateObject2=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  width: 100%;\n"]))),StyledMenuItemIcon=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span(_templateObject3||(_templateObject3=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.25rem;\n  height: 1.25rem;\n  & svg {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n"]))),variantStyleHandler=(variant,colorPalette,color)=>{switch(variant){case"contained":return(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.AH)(_templateObject4||(_templateObject4=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n        background-color: ",";\n        color: ",";\n\n        &:hover {\n          background-color: ",";\n          color: ",";\n        }\n\n        &:active {\n          background-color: ",";\n          color: ",";\n        }\n      "])),colorPalette[color].accentScale[8],colorPalette[color].accentContrast,colorPalette[color].accentScale[9],colorPalette[color].accentContrast,colorPalette[color].accentScale[9],colorPalette[color].accentContrast);case"outlined":return(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.AH)(_templateObject5||(_templateObject5=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n        background-color: transparent;\n        color: ",";\n\n        &:hover {\n          background-color: ",";\n          color: ",';\n        }\n\n        &:active {\n          background-color: "transparent";\n          color: ',";\n      "])),colorPalette[color].accentScale[10],colorPalette[color].grayScale[1],colorPalette[color].accentScale[10],colorPalette[color].accentScale[10]);case"soft":return(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.AH)(_templateObject6||(_templateObject6=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n        background-color: ",";\n        color: ",";\n\n        &:hover {\n          background-color: ",";\n          color: ",";\n        }\n\n        &:active {\n          background-color: ",";\n          color: ",";\n        }\n      "])),colorPalette[color].accentScale[2],colorPalette[color].accentScale[10],colorPalette[color].accentScale[3],colorPalette[color].accentScale[10],colorPalette[color].accentScale[3],colorPalette[color].accentScale[10])}};MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},key:{required:!1,tsType:{name:"number"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  e: React.MouseEvent<HTMLLIElement>,\n  { value, title }: MenuItemKeyProps\n) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},name:"e"},{type:{name:"MenuItemKeyProps"},name:""}],return:{name:"void"}}},description:""}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);