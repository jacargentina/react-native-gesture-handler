(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var o=n(2),i=n(6),a=(n(0),n(338)),r=n(340),c=n(342),s={id:"buttons",title:"Buttons",sidebar_label:"Buttons"},l={unversionedId:"api/components/buttons",id:"version-1.10.3/api/components/buttons",isDocsHomePage:!1,title:"Buttons",description:"Gesture handler library provides native components that can act as buttons. These can be treated as a replacement to TouchableHighlight or TouchableOpacity from RN core. Gesture handler's buttons recognize touches in native which makes the recognition process deterministic, allows for rendering ripples on Android in highly performant way (TouchableNativeFeedback requires that touch event does a roundtrip to JS before we can update ripple effect, which makes ripples lag a bit on older phones), and provides native and platform default interaction for buttons that are placed in a scrollable container (in which case the interaction is slightly delayed to prevent button from highlighting when you fling).",source:"@site/versioned_docs/version-1.10.3/api/components/buttons.mdx",slug:"/api/components/buttons",permalink:"/react-native-gesture-handler/docs/1.10.3/api/components/buttons",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-1.10.3/api/components/buttons.mdx",version:"1.10.3",sidebar_label:"Buttons",sidebar:"version-1.10.3/docs",previous:{title:"createNativeWrapper",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/create-native-wrapper"},next:{title:"Swipeable",permalink:"/react-native-gesture-handler/docs/1.10.3/api/components/swipeable"}},b=[{value:"<code>BaseButton</code>",id:"basebutton",children:[{value:"<code>onActiveStateChange</code>",id:"onactivestatechange",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>rippleColor</code> (<strong>Android only</strong>)",id:"ripplecolor-android-only",children:[]},{value:"<code>exclusive</code>",id:"exclusive",children:[]}]},{value:"<code>RectButton</code>",id:"rectbutton",children:[{value:"<code>underlayColor</code>",id:"underlaycolor",children:[]},{value:"<code>activeOpacity</code> (<strong>iOS only</strong>)",id:"activeopacity-ios-only",children:[]}]},{value:"<code>BorderlessButton</code>",id:"borderlessbutton",children:[{value:"<code>borderless</code> (<strong>Android only</strong>)",id:"borderless-android-only",children:[]},{value:"<code>activeOpacity</code> (<strong>iOS only</strong>)",id:"activeopacity-ios-only-1",children:[]}]},{value:"Design patterns",id:"design-patterns",children:[{value:"Lists and action buttons",id:"lists-and-action-buttons",children:[]},{value:"Icon or text only buttons",id:"icon-or-text-only-buttons",children:[]},{value:"<code>PureNativeButton</code>",id:"purenativebutton",children:[]}]}],d={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.a,{mdxType:"GifGallery"},Object(a.b)("img",{src:Object(r.a)("gifs/samplebutton.gif"),width:"280"})),Object(a.b)("p",null,"Gesture handler library provides native components that can act as buttons. These can be treated as a replacement to ",Object(a.b)("inlineCode",{parentName:"p"},"TouchableHighlight")," or ",Object(a.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," from RN core. Gesture handler's buttons recognize touches in native which makes the recognition process deterministic, allows for rendering ripples on Android in highly performant way (",Object(a.b)("inlineCode",{parentName:"p"},"TouchableNativeFeedback")," requires that touch event does a roundtrip to JS before we can update ripple effect, which makes ripples lag a bit on older phones), and provides native and platform default interaction for buttons that are placed in a scrollable container (in which case the interaction is slightly delayed to prevent button from highlighting when you fling)."),Object(a.b)("p",null,"Currently Gesture handler library exposes three components that render native touchable elements under the hood:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"BaseButton")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"RectButton")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"BorderlessButton"))),Object(a.b)("p",null,"On top of that all the buttons are wrapped with ",Object(a.b)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," and therefore allow for all the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#common-gesturehandler-properties"}),"common gesture handler properties")," and ",Object(a.b)("inlineCode",{parentName:"p"},"NativeViewGestureHandler"),"'s ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#nativeviewgesturehandler-extra-properties"}),"extra properties")," to be applied to them."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"IMPORTANT"),": In order to make buttons accessible, you have to wrap your children in a ",Object(a.b)("inlineCode",{parentName:"p"},"View")," with ",Object(a.b)("inlineCode",{parentName:"p"},"accessible")," and ",Object(a.b)("inlineCode",{parentName:"p"},'accessibilityRole="button"')," props.\nExample:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'// Not accessible:\nconst NotAccessibleButton = () => (\n  <RectButton onPress={this._onPress}>\n    <Text>Foo</Text>\n  </RectButton>\n);\n// Accessible:\nconst AccessibleButton = () => (\n  <RectButton onPress={this._onPress}>\n    <View accessible accessibilityRole="button">\n      <Text>Bar</Text>\n    </View>\n  </RectButton>\n);\n')),Object(a.b)("p",null,"It is applicable for both iOS and Android platform. On iOS, you won't be able to even select the button, on Android you won't be able to click it in accessibility mode."),Object(a.b)("h2",{id:"basebutton"},Object(a.b)("inlineCode",{parentName:"h2"},"BaseButton")),Object(a.b)("p",null,"Can be used as a base class if you'd like to implement some custom interaction for when the button is pressed."),Object(a.b)("p",null,"Below is a list of properties specific to ",Object(a.b)("inlineCode",{parentName:"p"},"BaseButton")," component:"),Object(a.b)("h3",{id:"onactivestatechange"},Object(a.b)("inlineCode",{parentName:"h3"},"onActiveStateChange")),Object(a.b)("p",null,"function that gets triggered when button changes from inactive to active and vice versa. It passes active state as a boolean variable as a first parameter for that method."),Object(a.b)("h3",{id:"onpress"},Object(a.b)("inlineCode",{parentName:"h3"},"onPress")),Object(a.b)("p",null,"function that gets triggered when the button gets pressed (analogous to ",Object(a.b)("inlineCode",{parentName:"p"},"onPress")," in ",Object(a.b)("inlineCode",{parentName:"p"},"TouchableHighlight")," from RN core)."),Object(a.b)("h3",{id:"ripplecolor-android-only"},Object(a.b)("inlineCode",{parentName:"h3"},"rippleColor")," (",Object(a.b)("strong",{parentName:"h3"},"Android only"),")"),Object(a.b)("p",null,"defines color of native ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/graphics/drawable/RippleDrawable"}),"ripple")," animation used since API level 21."),Object(a.b)("h3",{id:"exclusive"},Object(a.b)("inlineCode",{parentName:"h3"},"exclusive")),Object(a.b)("p",null,"defines if more than one button could be pressed simultaneously. By default set ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("h2",{id:"rectbutton"},Object(a.b)("inlineCode",{parentName:"h2"},"RectButton")),Object(a.b)("p",null,"This type of button component should be used when you deal with rectangular elements or blocks of content that can be pressed, for example table rows or buttons with text and icons. This component provides a platform specific interaction, rendering a rectangular ripple on Android or highlighting the background on iOS and on older versions of Android. In addition to the props of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#basebutton-component"}),Object(a.b)("inlineCode",{parentName:"a"},"BaseButton")),", it accepts the following:"),Object(a.b)("p",null,"Below is a list of properties specific to ",Object(a.b)("inlineCode",{parentName:"p"},"RectButton")," component:"),Object(a.b)("h3",{id:"underlaycolor"},Object(a.b)("inlineCode",{parentName:"h3"},"underlayColor")),Object(a.b)("p",null,"this is the background color that will be dimmed when button is in active state."),Object(a.b)("h3",{id:"activeopacity-ios-only"},Object(a.b)("inlineCode",{parentName:"h3"},"activeOpacity")," (",Object(a.b)("strong",{parentName:"h3"},"iOS only"),")"),Object(a.b)("p",null,"opacity applied to the underlay when button is in active state."),Object(a.b)("h2",{id:"borderlessbutton"},Object(a.b)("inlineCode",{parentName:"h2"},"BorderlessButton")),Object(a.b)("p",null,"This type of button component should be used with simple icon-only or text-only buttons. The interaction will be different depending on platform: on Android a borderless ripple will be rendered (it means that the ripple will animate into a circle that can span outside of the view bounds), whereas on iOS the button will be dimmed (similar to how ",Object(a.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," works). In addition to the props of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#basebutton-component"}),Object(a.b)("inlineCode",{parentName:"a"},"BaseButton")),", it accepts the following:"),Object(a.b)("p",null,"Below is a list of properties specific to ",Object(a.b)("inlineCode",{parentName:"p"},"BorderlessButton")," component:"),Object(a.b)("h3",{id:"borderless-android-only"},Object(a.b)("inlineCode",{parentName:"h3"},"borderless")," (",Object(a.b)("strong",{parentName:"h3"},"Android only"),")"),Object(a.b)("p",null,"set this to ",Object(a.b)("inlineCode",{parentName:"p"},"false")," if you want the ripple animation to render only within view bounds."),Object(a.b)("h3",{id:"activeopacity-ios-only-1"},Object(a.b)("inlineCode",{parentName:"h3"},"activeOpacity")," (",Object(a.b)("strong",{parentName:"h3"},"iOS only"),")"),Object(a.b)("p",null,"opacity applied to the button when it is in an active state."),Object(a.b)("h2",{id:"design-patterns"},"Design patterns"),Object(a.b)("p",null,"Components listed here were not designed to behave and look in the same way on both platforms but rather to be used for handling similar behaviour on iOS and Android taking into consideration their's design concepts."),Object(a.b)("p",null,"If you wish to get specific information about platforms design patterns, visit ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/controls"}),"official Apple docs")," and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://material.io/design/components/buttons.html#text-button"}),"Material.io guideline"),", which widely describe how to implement coherent design."),Object(a.b)("p",null,"This library allows to use native components with native feedback in adequate situations."),Object(a.b)("p",null,"If you do not wish to implement custom design approach, ",Object(a.b)("inlineCode",{parentName:"p"},"RectButton")," and ",Object(a.b)("inlineCode",{parentName:"p"},"BorderlessButton")," seem to be absolutely enough and there's no need to use anything else. In all the remaining cases you can always rely on ",Object(a.b)("inlineCode",{parentName:"p"},"BaseButton")," which is a superclass for the other button classes and can be used as a generic ",Object(a.b)("inlineCode",{parentName:"p"},"Touchable")," replacement that can be customized to your needs."),Object(a.b)("p",null,"Below we list some of the common usecases for button components to be used along with the type of button that should be used according to the platform specific design guidelines."),Object(a.b)("h3",{id:"lists-and-action-buttons"},"Lists and action buttons"),Object(a.b)("p",null,"If you have a list with clickable items or have an action button that need to display as a separate UI block (vs being inlined in a text) you should use ",Object(a.b)("inlineCode",{parentName:"p"},"RectButton"),". It changes opacity on click and additionally supports a ripple effect on Android."),Object(a.b)(c.a,{mdxType:"GifGallery"},Object(a.b)("img",{src:Object(r.a)("gifs/androidsettings.gif"),width:"280"}),Object(a.b)("img",{src:Object(r.a)("gifs/iossettings.gif"),width:"280"})),Object(a.b)("p",null,"To determine emphasis of button it's vital to use fill color or leave it transparent especially on Android.\nFor medium emphasis you may consider outlined buttons which are used for lower impact than fill buttons."),Object(a.b)(c.a,{mdxType:"GifGallery"},Object(a.b)("img",{src:Object(r.a)("gifs/androidbutton.gif"),width:"280"})),Object(a.b)("h3",{id:"icon-or-text-only-buttons"},"Icon or text only buttons"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"BorderlessButton")," for simple icon-only or text-only buttons. The interaction will be different depending on platform: on Android a borderless ripple will be rendered, whereas on iOS the button will be dimmed.\nIt should be used if you wish to handle non-crucial actions and supportive behaviour."),Object(a.b)(c.a,{mdxType:"GifGallery"},Object(a.b)("img",{src:Object(r.a)("gifs/androidmail.gif"),width:"280"}),Object(a.b)("img",{src:Object(r.a)("gifs/iosmail.gif"),width:"280"})),Object(a.b)("h3",{id:"purenativebutton"},Object(a.b)("inlineCode",{parentName:"h3"},"PureNativeButton")),Object(a.b)("p",null,"Use a ",Object(a.b)("inlineCode",{parentName:"p"},"PureNativeButton")," for accessing the native Component used for build more complex buttons listed above.\nIt's normally is not recommended to use, but it might be useful if we want to wrap it using Animated or Reanimated."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import {\n  createNativeWrapper,\n  PureNativeButton,\n} from 'react-native-gesture-handler';\nimport Animated from 'react-native-reanimated';\nconst { event, Value, createAnimatedComponent } = Animated;\n\nconst AnimatedRawButton = createNativeWrapper(\n  createAnimatedComponent(PureNativeButton),\n  {\n    shouldCancelWhenOutside: false,\n    shouldActivateOnStart: false,\n  }\n);\n\nexport default class App extends React.Component {\n  constructor(props) {\n    super(props);\n    const state = new Value();\n    this._onGestureEvent = event([\n      {\n        nativeEvent: { state },\n      },\n    ]);\n  }\n\n  render() {\n    return <AnimatedRawButton onHandlerStateChange={this._onGestureEvent} />;\n  }\n}\n")))}p.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=o,h=d["".concat(r,".").concat(u)]||d[u]||p[u]||a;return n?i.a.createElement(h,c(c({ref:t},l),{},{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},339:function(e,t,n){"use strict";var o=n(0),i=n(20);t.a=function(){var e=Object(o.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},340:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var o=n(339),i=n(341);function a(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,r=a.forcePrependBaseUrl,c=void 0!==r&&r,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var b=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+b:b}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},341:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}))},342:function(e,t,n){"use strict";var o=n(0),i=n.n(o),a={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.a=function(e){var t=e.children;return i.a.createElement("div",{style:a.container},o.Children.map(t,(function(e){return Object(o.cloneElement)(e,Object.assign({},e.props.style,{style:a.img}))})))}}}]);