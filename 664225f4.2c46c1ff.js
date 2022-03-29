(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{214:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),r=(a(0),a(338)),i={id:"touchables",title:"Touchables",sidebar_label:"Touchables"},c={unversionedId:"api/components/touchables",id:"api/components/touchables",isDocsHomePage:!1,title:"Touchables",description:"Gesture Handler library provides an implementation of RN's touchable components that are based on native buttons and does not rely on JS responder system utilized by RN. Our touchable implementation follows the same API and aims to be a drop-in replacement for touchables available in React Native.",source:"@site/docs/api/components/touchables.md",slug:"/api/components/touchables",permalink:"/react-native-gesture-handler/docs/next/api/components/touchables",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/api/components/touchables.md",version:"current",sidebar_label:"Touchables",sidebar:"docs",previous:{title:"Swipeable",permalink:"/react-native-gesture-handler/docs/next/api/components/swipeable"},next:{title:"Drawer Layout",permalink:"/react-native-gesture-handler/docs/next/api/components/drawer-layout"}},l=[{value:"Example:",id:"example",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Gesture Handler library provides an implementation of RN's touchable components that are based on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/components/buttons"}),"native buttons")," and does not rely on JS responder system utilized by RN. Our touchable implementation follows the same API and aims to be a drop-in replacement for touchables available in React Native."),Object(r.b)("p",null,"React Native's touchables API can be found here:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/touchablenativefeedback"}),"Touchable Native Feedback")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/touchablehighlight"}),"Touchable Highlight")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/touchableopacity"}),"Touchable Opacity")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/touchablewithoutfeedback"}),"Touchable Without Feedback"))),Object(r.b)("p",null,"All major touchable properties (except from ",Object(r.b)("inlineCode",{parentName:"p"},"pressRetentionOffset"),") have been adopted and should behave in a similar way as with RN's touchables."),Object(r.b)("p",null,"The motivation for using RNGH touchables as a replacement for these imported from React Native is to follow built-in native behavior more closely by utilizing platform native touch system instead of relying on the JS responder system.\nThese touchables and their feedback behavior are deeply integrated with native\ngesture ecosystem and could be connected with other native components (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"ScrollView"),") and Gesture Handlers easily and in a more predictable way, which\nfollows native apps' behavior."),Object(r.b)("p",null,"Our intention was to make switch for these touchables as simple as possible. In order to use RNGH's touchables the only thing you need to do is to change library from which you import touchable components.\nneed only to change imports of touchables."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Gesture Handler's TouchableOpacity uses native driver for animations by default. If this causes problems for you, you can set ",Object(r.b)("inlineCode",{parentName:"p"},"useNativeAnimations")," prop to false."))),Object(r.b)("h3",{id:"example"},"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import {\n  TouchableNativeFeedback,\n  TouchableHighlight,\n  TouchableOpacity,\n  TouchableWithoutFeedback,\n} from 'react-native';\n")),Object(r.b)("p",null,"has to be replaced with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import {\n  TouchableNativeFeedback,\n  TouchableHighlight,\n  TouchableOpacity,\n  TouchableWithoutFeedback,\n} from 'react-native-gesture-handler';\n")),Object(r.b)("p",null,"For a comparison of both touchable implementations see our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/release_tests/touchables/index.tsx"}),"touchables example")))}b.isMDXComponent=!0},338:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||r;return a?o.a.createElement(m,c(c({ref:t},s),{},{components:a})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);