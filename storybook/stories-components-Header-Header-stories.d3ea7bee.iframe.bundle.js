/*! For license information please see stories-components-Header-Header-stories.d3ea7bee.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[3863],{"./src/stories/components/Header/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Header_stories});__webpack_require__("./node_modules/react/index.js");var Header=__webpack_require__("./src/components/Header/Header.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledHeaderGroup=styled_components_browser_esm.Ay.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`,HeaderItem=_ref=>{let{children,className,style}=_ref;return(0,jsx_runtime.jsx)(StyledHeaderGroup,{className,style,children})},HeaderGroup=HeaderItem;HeaderItem.__docgenInfo={description:"",methods:[],displayName:"HeaderItem",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | [React.ReactNode]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"tuple",raw:"[React.ReactNode]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}]}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};var HeaderItem_HeaderItem=__webpack_require__("./src/components/Header/HeaderItem/HeaderItem.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),IconBrandGithub=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandGithub.mjs"),IconBrandLinkedin=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandLinkedin.mjs"),IconSettings=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconSettings.mjs"),Text=__webpack_require__("./src/components/Text/Text.tsx");const Header_stories={title:"Components/Header",component:Header.A,parameters:{layout:"fullscreen"},argTypes:{},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{minHeight:"10rem"},children:(0,jsx_runtime.jsx)(Story,{})})]},Default={render:args=>(0,jsx_runtime.jsxs)(Header.A,{style:{padding:"0 1rem"},children:[(0,jsx_runtime.jsx)(HeaderGroup,{style:{paddingLeft:"1rem"},children:(0,jsx_runtime.jsx)(Text.A,{size:"large",children:"Stelios"})}),(0,jsx_runtime.jsx)(HeaderGroup,{children:(0,jsx_runtime.jsx)(Input.A,{placeholder:"Search",variant:"soft"})}),(0,jsx_runtime.jsxs)(HeaderGroup,{style:{marginRight:"1rem"},children:[(0,jsx_runtime.jsx)(HeaderItem_HeaderItem.A,{children:(0,jsx_runtime.jsx)(IconButton.A,{size:"small",icon:(0,jsx_runtime.jsx)(IconBrandGithub.A,{}),variant:"soft",onClick:()=>{window.open("https://github.com/yuva0","_blank")}})}),(0,jsx_runtime.jsx)(HeaderItem_HeaderItem.A,{children:(0,jsx_runtime.jsx)(IconButton.A,{size:"small",icon:(0,jsx_runtime.jsx)(IconBrandLinkedin.A,{}),variant:"soft",onClick:()=>{window.open("https://www.linkedin.com/in/tanuj-sengupta-872a05129/","_blank")}})}),(0,jsx_runtime.jsx)(HeaderItem_HeaderItem.A,{children:(0,jsx_runtime.jsx)(IconButton.A,{size:"small",icon:(0,jsx_runtime.jsx)(IconSettings.A,{}),variant:"soft"})})]})]}),args:{}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Template",...Default.parameters?.docs?.source}}}},"./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createReactComponent});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const createReactComponent=(type,iconName,iconNamePascal,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,stroke=2,title,className,children,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes[type],width:size,height:size,className:["tabler-icon",`tabler-icon-${iconName}`,className].join(" "),..."filled"===type?{fill:color}:{strokeWidth:stroke,stroke:color},...rest},[title&&(0,react.createElement)("title",{key:"svg-title"},title),...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]])));return Component.displayName=`${iconNamePascal}`,Component}}}]);
//# sourceMappingURL=stories-components-Header-Header-stories.d3ea7bee.iframe.bundle.js.map