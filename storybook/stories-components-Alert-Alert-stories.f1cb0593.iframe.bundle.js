/*! For license information please see stories-components-Alert-Alert-stories.f1cb0593.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[5991],{"./src/stories/components/Alert/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,LeadingIcon:()=>LeadingIcon,Outlined:()=>Outlined,OutlinedSoft:()=>OutlinedSoft,Playground:()=>Playground,Soft:()=>Soft,TitleIcon:()=>TitleIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Alert_stories});__webpack_require__("./node_modules/react/index.js");var Alert=__webpack_require__("./src/components/Alert/Alert.tsx"),IconAwardFilled=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconAwardFilled.mjs"),createReactComponent=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs"),IconBrandReact=(0,createReactComponent.A)("outline","brand-react","IconBrandReact",[["path",{d:"M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102",key:"svg-0"}],["path",{d:"M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102",key:"svg-1"}],["path",{d:"M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2",key:"svg-2"}],["path",{d:"M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2",key:"svg-3"}],["path",{d:"M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896",key:"svg-4"}],["path",{d:"M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897",key:"svg-5"}],["path",{d:"M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z",key:"svg-6"}]]),IconBrandTypescript=(0,createReactComponent.A)("outline","brand-typescript","IconBrandTypescript",[["path",{d:"M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5",key:"svg-0"}],["path",{d:"M9 12h4",key:"svg-1"}],["path",{d:"M11 12v6",key:"svg-2"}],["path",{d:"M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z",key:"svg-3"}]]),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert_stories={title:"Components/Alert",component:Alert.A,parameters:{layout:"centered"},argTypes:{variant:{description:"Variant of the alert",control:{type:"select",options:["contained","outlined","soft"]}},title:{description:"Title of the alert",control:{type:"text"}},description:{description:"Description of the alert",control:{type:"text"}},leadingIcon:{description:"Leading icon of the alert",options:[(0,jsx_runtime.jsx)(IconAwardFilled.A,{}),void 0],control:{type:"inline-radio"}},titleIcon:{description:"Title icon of the alert",options:[(0,jsx_runtime.jsx)(IconAwardFilled.A,{}),void 0],control:{type:"inline-radio"}}}},AlertTemplate={render:args=>(0,jsx_runtime.jsx)(Alert.A,{...args})},Contained={...AlertTemplate,args:{title:"MERN Stack",description:"The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications."}},Outlined={...AlertTemplate,args:{title:"MEAN Stack",description:"The MEAN stack, consisting of MongoDB, Express, Angular, and Node.js, is a popular full-stack development framework that allows developers to build dynamic web applications using JavaScript from front to back. MongoDB serves as the database, offering a document-based, NoSQL structure that is highly flexible and scalable. Express provides a robust backend framework that simplifies the process of building APIs and handling server-side logic. Angular, a powerful front-end framework, enables the creation of dynamic, single-page applications with rich user interfaces. Node.js ties the stack together with its efficient, event-driven runtime, allowing for scalable and high-performance server-side operations. ",variant:"outlined"}},Soft={...AlertTemplate,args:{title:"React + Java",description:"Combining React with Java creates a powerful duo for building robust and scalable web applications. React, a popular JavaScript library, excels at developing dynamic, responsive user interfaces, enabling developers to create seamless single-page applications with a component-based architecture. On the backend, Java provides a strong, enterprise-level foundation, known for its stability, security, and performance. By using Java for server-side logic, database management, and API development, and React for the front-end interface, developers can leverage the strengths of both technologies. This combination allows for the creation of modern, interactive applications with a clear separation of concerns, where React handles the user experience and Java manages the underlying business logic.",variant:"soft"}},OutlinedSoft={...AlertTemplate,args:{title:"React + Go",description:"Combining React with Go (Golang) offers a powerful and efficient approach to building modern web applications. React, a leading JavaScript library, is well-known for its ability to create dynamic, responsive user interfaces with a component-based architecture, making it ideal for single-page applications. Go, on the other hand, is a statically typed, compiled language renowned for its simplicity, performance, and concurrency capabilities. By using React for the front-end and Go for the backend, developers can create applications that are both user-friendly and highly performant.",variant:"outlined-soft"}},LeadingIcon={...AlertTemplate,args:{title:"React",description:"React is a JavaScript library for building dynamic, interactive user interfaces through reusable components and a virtual DOM.",leadingIcon:(0,jsx_runtime.jsx)(IconBrandReact,{})}},TitleIcon={...AlertTemplate,args:{title:"Typescript",description:"TypeScript is a superset of JavaScript that adds static typing and advanced features to enhance development, improve code quality, and catch errors at compile-time.",titleIcon:(0,jsx_runtime.jsx)(IconBrandTypescript,{})}},Playground={...AlertTemplate,args:{title:"Design Systems",description:"A component design system is a collection of reusable, standardized UI components and guidelines that ensure consistency, efficiency, and scalability in building and maintaining user interfaces across applications."}},__namedExportsOrder=["Contained","Outlined","Soft","OutlinedSoft","LeadingIcon","TitleIcon","Playground"];Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  ...AlertTemplate,\n  args: {\n    title: "MERN Stack",\n    description: "The MERN stack, comprising MongoDB, Express, React, and Node.js, is a powerful combination for full-stack web development. MongoDB, a NoSQL database, provides a flexible and scalable way to manage data, while Express and Node.js handle the server-side logic, enabling efficient data processing and API creation. React, a popular front-end library, brings dynamic and responsive user interfaces, allowing developers to create seamless single-page applications."\n  }\n}',...Contained.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'{\n  ...AlertTemplate,\n  args: {\n    title: "MEAN Stack",\n    description: "The MEAN stack, consisting of MongoDB, Express, Angular, and Node.js, is a popular full-stack development framework that allows developers to build dynamic web applications using JavaScript from front to back. MongoDB serves as the database, offering a document-based, NoSQL structure that is highly flexible and scalable. Express provides a robust backend framework that simplifies the process of building APIs and handling server-side logic. Angular, a powerful front-end framework, enables the creation of dynamic, single-page applications with rich user interfaces. Node.js ties the stack together with its efficient, event-driven runtime, allowing for scalable and high-performance server-side operations. ",\n    variant: "outlined"\n  }\n}',...Outlined.parameters?.docs?.source}}},Soft.parameters={...Soft.parameters,docs:{...Soft.parameters?.docs,source:{originalSource:'{\n  ...AlertTemplate,\n  args: {\n    title: "React + Java",\n    description: "Combining React with Java creates a powerful duo for building robust and scalable web applications. React, a popular JavaScript library, excels at developing dynamic, responsive user interfaces, enabling developers to create seamless single-page applications with a component-based architecture. On the backend, Java provides a strong, enterprise-level foundation, known for its stability, security, and performance. By using Java for server-side logic, database management, and API development, and React for the front-end interface, developers can leverage the strengths of both technologies. This combination allows for the creation of modern, interactive applications with a clear separation of concerns, where React handles the user experience and Java manages the underlying business logic.",\n    variant: "soft"\n  }\n}',...Soft.parameters?.docs?.source}}},OutlinedSoft.parameters={...OutlinedSoft.parameters,docs:{...OutlinedSoft.parameters?.docs,source:{originalSource:'{\n  ...AlertTemplate,\n  args: {\n    title: "React + Go",\n    description: "Combining React with Go (Golang) offers a powerful and efficient approach to building modern web applications. React, a leading JavaScript library, is well-known for its ability to create dynamic, responsive user interfaces with a component-based architecture, making it ideal for single-page applications. Go, on the other hand, is a statically typed, compiled language renowned for its simplicity, performance, and concurrency capabilities. By using React for the front-end and Go for the backend, developers can create applications that are both user-friendly and highly performant.",\n    variant: "outlined-soft"\n  }\n}',...OutlinedSoft.parameters?.docs?.source}}},LeadingIcon.parameters={...LeadingIcon.parameters,docs:{...LeadingIcon.parameters?.docs,source:{originalSource:'{\n  ...AlertTemplate,\n  args: {\n    title: "React",\n    description: "React is a JavaScript library for building dynamic, interactive user interfaces through reusable components and a virtual DOM.",\n    leadingIcon: <IconBrandReact />\n  }\n}',...LeadingIcon.parameters?.docs?.source}}},TitleIcon.parameters={...TitleIcon.parameters,docs:{...TitleIcon.parameters?.docs,source:{originalSource:'{\n  ...AlertTemplate,\n  args: {\n    title: "Typescript",\n    description: "TypeScript is a superset of JavaScript that adds static typing and advanced features to enhance development, improve code quality, and catch errors at compile-time.",\n    titleIcon: <IconBrandTypescript />\n  }\n}',...TitleIcon.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  ...AlertTemplate,\n  args: {\n    title: "Design Systems",\n    description: "A component design system is a collection of reusable, standardized UI components and guidelines that ensure consistency, efficiency, and scalability in building and maintaining user interfaces across applications."\n  }\n}',...Playground.parameters?.docs?.source}}}},"./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createReactComponent});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const createReactComponent=(type,iconName,iconNamePascal,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,stroke=2,title,className,children,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes[type],width:size,height:size,className:["tabler-icon",`tabler-icon-${iconName}`,className].join(" "),..."filled"===type?{fill:color}:{strokeWidth:stroke,stroke:color},...rest},[title&&(0,react.createElement)("title",{key:"svg-title"},title),...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]])));return Component.displayName=`${iconNamePascal}`,Component}},"./node_modules/@tabler/icons-react/dist/esm/icons/IconAwardFilled.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconAwardFilled});var IconAwardFilled=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs").A)("filled","award-filled","IconAwardFilled",[["path",{d:"M19.496 13.983l1.966 3.406a1.001 1.001 0 0 1 -.705 1.488l-.113 .011l-.112 -.001l-2.933 -.19l-1.303 2.636a1.001 1.001 0 0 1 -1.608 .26l-.082 -.094l-.072 -.11l-1.968 -3.407a8.994 8.994 0 0 0 6.93 -3.999z",key:"svg-0"}],["path",{d:"M11.43 17.982l-1.966 3.408a1.001 1.001 0 0 1 -1.622 .157l-.076 -.1l-.064 -.114l-1.304 -2.635l-2.931 .19a1.001 1.001 0 0 1 -1.022 -1.29l.04 -.107l.05 -.1l1.968 -3.409a8.994 8.994 0 0 0 6.927 4.001z",key:"svg-1"}],["path",{d:"M12 2l.24 .004a7 7 0 0 1 6.76 6.996l-.003 .193l-.007 .192l-.018 .245l-.026 .242l-.024 .178a6.985 6.985 0 0 1 -.317 1.268l-.116 .308l-.153 .348a7.001 7.001 0 0 1 -12.688 -.028l-.13 -.297l-.052 -.133l-.08 -.217l-.095 -.294a6.96 6.96 0 0 1 -.093 -.344l-.06 -.271l-.049 -.271l-.02 -.139l-.039 -.323l-.024 -.365l-.006 -.292a7 7 0 0 1 6.76 -6.996l.24 -.004z",key:"svg-2"}]])},"./src/components/Alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/Text.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tokens/colors.json"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/helpers.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert=_ref=>{let{title,titleIcon,description,leadingIcon,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_3__.A.zB.iW,variant="contained",width="400px",style,className,"data-testid":dataTestId,"data-leading-icon":dataLeadingIcon,...props}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.jh)(theme,color),Content=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!title&&!description)return null;const Title=title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledTitleContainer,{children:[titleIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledTitleIcon,{children:titleIcon}),"string"==typeof title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{disableColor:!0,variant:"span",style:{marginTop:"0.2rem"},children:title}):title]}):null,Description=description&&"string"==typeof description?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{disableColor:!0,variant:"paragraph",size:"small",children:description}):description;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledContentContainer,{children:[Title,Description]})}),[title,description,titleIcon]),LeadingIcon=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>leadingIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledIcon,{"data-testid":dataLeadingIcon,children:leadingIcon}):null),[leadingIcon,dataLeadingIcon]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledAlertContainer,{style,className,$width:width,$color:color,$variant:variant,$colorPalette:colorPalette,"data-testid":dataTestId,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LeadingIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Content,{})]})},__WEBPACK_DEFAULT_EXPORT__=Alert,StyledAlertContainer=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0.75rem 1rem 1rem 1rem;
  border-radius: 0.8rem;
  ${props=>{const properties=propsAlertContainerHandler(props.$variant,props.$color,props.$colorPalette);return`\n      background-color: ${properties.background.default};\n      border: ${properties.border.default};\n      border-left: ${properties.borderLeft.default};\n      color: ${properties.color.default};\n      width: ${props.$width};\n    `}}
`,propsAlertContainerHandler=(variant,color,colorPalette)=>({...getVariantProps(variant,color,colorPalette)}),getVariantProps=(variant,color,colorPalette)=>{switch(variant){case"contained":return{background:{default:colorPalette[color].accentScale[8]},border:{default:`2px solid ${colorPalette[color].accentScale[10]}`},borderLeft:{default:`0.5rem solid ${colorPalette[color].accentScale[10]}`},color:{default:colorPalette[color].accentContrast}};case"outlined":return{background:{default:"transparent"},border:{default:`2px solid ${colorPalette[color].accentScale[8]}`},borderLeft:{default:`0.5rem solid ${colorPalette[color].accentScale[8]}`},color:{default:colorPalette[color].accentScale[11]}};case"soft":return{background:{default:colorPalette[color].accentScale[2]},border:{default:`2px solid ${colorPalette[color].accentScale[2]}`},borderLeft:{default:`0.5rem solid ${colorPalette[color].accentScale[6]}`},color:{default:colorPalette[color].accentScale[11]}};case"outlined-soft":return{background:{default:colorPalette[color].accentScale[2]},border:{default:`2px solid ${colorPalette[color].accentScale[8]}`},borderLeft:{default:`0.5rem solid ${colorPalette[color].accentScale[8]}`},color:{default:colorPalette[color].accentScale[11]}}}},StyledContentContainer=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,StyledTitleContainer=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  flex: 1 1 auto;
`,StyledTitleIcon=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  width: 18px;
  height: 18px;
  & svg {
    width: 100%;
    height: 100%;
  }
`,StyledIcon=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  flex: 1 0 auto;
  width: 24px;
  height: 24px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;Alert.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},titleIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft" | "outlined-soft"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"outlined-soft"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"400px"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},"data-leading-icon":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=_ref=>{let{variant="div",strong,children,align="center",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,wrap=!1,size="medium",disableColor=!1,fontSize,lineHeight,style,className,fontFamily,...rest}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;let _styledProps;if(disableColor)_styledProps={$disableColor:disableColor};else{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:color&&colorPalette?colorPalette[color].accentScale[10]:color;_styledProps={$disableColor:disableColor,$color:_color}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",rel:"stylesheet"})]}),(()=>{switch(variant){case"h1":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH1,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h2":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH2,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h3":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH3,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h4":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH4,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h5":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH5,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"h6":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH6,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"div":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledDiv,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"paragraph":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledP,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"label":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children});case"span":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledSpan,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,...rest,..._styledProps,children})}})()]})},__WEBPACK_DEFAULT_EXPORT__=Text,commonStyles="\n  padding: 0;\n  margin: 0;\n",StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h1`
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
//# sourceMappingURL=stories-components-Alert-Alert-stories.f1cb0593.iframe.bundle.js.map