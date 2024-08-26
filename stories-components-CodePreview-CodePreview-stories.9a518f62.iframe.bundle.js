"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[6255,4087],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./src/stories/components/CodePreview/CodePreview.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CodePreview_stories});__webpack_require__("./node_modules/react/index.js");var taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),default_highlight=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js");const docco={hljs:{display:"block",overflowX:"auto",padding:"0.5em",color:"#000",background:"#f8f8ff"},"hljs-comment":{color:"#408080",fontStyle:"italic"},"hljs-quote":{color:"#408080",fontStyle:"italic"},"hljs-keyword":{color:"#954121"},"hljs-selector-tag":{color:"#954121"},"hljs-literal":{color:"#954121"},"hljs-subst":{color:"#954121"},"hljs-number":{color:"#40a070"},"hljs-string":{color:"#219161"},"hljs-doctag":{color:"#219161"},"hljs-selector-id":{color:"#19469d"},"hljs-selector-class":{color:"#19469d"},"hljs-section":{color:"#19469d"},"hljs-type":{color:"#19469d"},"hljs-params":{color:"#00f"},"hljs-title":{color:"#458",fontWeight:"bold"},"hljs-tag":{color:"#000080",fontWeight:"normal"},"hljs-name":{color:"#000080",fontWeight:"normal"},"hljs-attribute":{color:"#000080",fontWeight:"normal"},"hljs-variable":{color:"#008080"},"hljs-template-variable":{color:"#008080"},"hljs-regexp":{color:"#b68"},"hljs-link":{color:"#b68"},"hljs-symbol":{color:"#990073"},"hljs-bullet":{color:"#990073"},"hljs-built_in":{color:"#0086b3"},"hljs-builtin-name":{color:"#0086b3"},"hljs-meta":{color:"#999",fontWeight:"bold"},"hljs-deletion":{background:"#fdd"},"hljs-addition":{background:"#dfd"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}};var _templateObject,_templateObject2,_templateObject3,_templateObject4,dark=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CodePreview=_ref=>{let{code,text,width,color=colors.A.zB.iW}=_ref;const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color),appearance=colorPalette?colorPalette[color].appearance:colors.A.$8;return(0,jsx_runtime.jsxs)(StyledCodePreview,{$colorPalette:colorPalette,$width:width,$color:color,children:[(0,jsx_runtime.jsx)(StyledCode,{$colorPalette:colorPalette,$color:color,children:code}),(0,jsx_runtime.jsx)(StyledContainer,{$colorPalette:colorPalette,$color:color,children:(0,jsx_runtime.jsx)(StyledSyntaxHighlighter,{language:"javascript",style:"light"===appearance?docco:dark.A,$colorPalette:colorPalette,$color:color,children:text})})]})},CodePreview_CodePreview=CodePreview,StyledCodePreview=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 0.5rem;\n  width: ",";\n"])),(props=>{var _props$$width;return null!==(_props$$width=props.$width)&&void 0!==_props$$width?_props$$width:"auto"})),StyledCode=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1.5rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  ","\n"])),(props=>"\n      background-color: ".concat(props.$colorPalette[props.$color].accentScale[0],";\n      border: 1px solid ").concat(props.$colorPalette[props.$color].grayScale[5],";\n    "))),StyledContainer=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(['\n  display: block;\n  border-radius: 0 0 0.5rem 0.5rem;\n  padding: 0.5rem 2rem;\n  pre {\n    margin: 0;\n    white-space: pre-wrap;\n    word-break: break-word;\n    code {\n      font-size: 14px;\n      font-family: "Lato", sans-serif;\n    }\n  }\n  ',"\n"])),(props=>"\n      background-color: ".concat(props.$colorPalette[props.$color].accentScale[2],";\n      border: 1px solid ").concat(props.$colorPalette[props.$color].grayScale[5],";\n    "))),StyledSyntaxHighlighter=(0,styled_components_browser_esm.Ay)(default_highlight.A)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)(["\n  background-color: ",' !important;\n  font-family: "Lato", sans-serif;\n'])),(props=>props.$colorPalette[props.$color].accentScale[2]));CodePreview.__docgenInfo={description:"",methods:[],displayName:"CodePreview",props:{text:{required:!0,tsType:{name:"string"},description:""},code:{required:!0,tsType:{name:"union",raw:"React.ReactNode | [React.ReactNode]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"tuple",raw:"[React.ReactNode]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}]}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}}}};var Button=__webpack_require__("./src/components/Button/Button.tsx");const BUTTON_CODE=(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"2rem"},children:[(0,jsx_runtime.jsx)(Button.A,{variant:"contained",children:"Button"}),(0,jsx_runtime.jsx)(Button.A,{variant:"outlined",children:"Button"})]}),CodePreview_stories={title:"Components/CodePreview",component:CodePreview_CodePreview,parameters:{},argTypes:{}},Default={...{render:args=>(0,jsx_runtime.jsx)(CodePreview_CodePreview,{code:BUTTON_CODE,text:'<Button variant="contained"> Contained </Button>\n<Button variant="contained" disabled> Disabled </Button>\n<Button variant="contained" href="#contained-buttons"> Link </Button>'})},args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...CodePreviewTemplate,\n  args: {}\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);