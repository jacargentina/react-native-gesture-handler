(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(338)),i={id:"pinch-gh",title:"PinchGestureHandler",sidebar_label:"Pinch"},c={unversionedId:"api/gesture-handlers/pinch-gh",id:"version-1.10.3/api/gesture-handlers/pinch-gh",isDocsHomePage:!1,title:"PinchGestureHandler",description:"A continuous gesture handler that recognizes pinch gesture. It allows for tracking the distance between two fingers and use that information to scale or zoom your content.",source:"@site/versioned_docs/version-1.10.3/api/gesture-handlers/pinch-gh.md",slug:"/api/gesture-handlers/pinch-gh",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/pinch-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-1.10.3/api/gesture-handlers/pinch-gh.md",version:"1.10.3",sidebar_label:"Pinch",sidebar:"version-1.10.3/docs",previous:{title:"FlingGestureHandler",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/fling-gh"},next:{title:"ForceTouchGestureHandler (iOS only)",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/force-gh"}},s=[{value:"Properties",id:"properties",children:[]},{value:"Event data",id:"event-data",children:[{value:"<code>scale</code>",id:"scale",children:[]},{value:"<code>velocity</code>",id:"velocity",children:[]},{value:"<code>focalX</code>",id:"focalx",children:[]},{value:"<code>focalY</code>",id:"focaly",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A continuous gesture handler that recognizes pinch gesture. It allows for tracking the distance between two fingers and use that information to scale or zoom your content.\nThe handler ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/1.10.3/state#active"}),"activates")," when fingers are placed on the screen and change their position.\nGesture callback can be used for continuous tracking of the pinch gesture. It provides information about velocity, anchor (focal) point of gesture and scale."),Object(o.b)("p",null,"The distance between the fingers is reported as a scale factor. At the beginning of the gesture, the scale factor is 1.0. As the distance between the two fingers increases, the scale factor increases proportionally.\nSimilarly, the scale factor decreases as the distance between the fingers decreases.\nPinch gestures are used most commonly to change the size of objects or content onscreen.\nFor example, map views use pinch gestures to change the zoom level of the map."),Object(o.b)("p",null,"The handler is implemented using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uipinchgesturerecognizer"}),"UIPinchGestureRecognizer")," on iOS and from scratch on Android."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"Properties provided to ",Object(o.b)("inlineCode",{parentName:"p"},"PinchGestureHandler")," do not extend ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"common-gh#properties"}),"common set of properties from base handler class"),"."),Object(o.b)("h2",{id:"event-data"},"Event data"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"common-gh#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",Object(o.b)("inlineCode",{parentName:"p"},"PinchGestureHandler"),":"),Object(o.b)("h3",{id:"scale"},Object(o.b)("inlineCode",{parentName:"h3"},"scale")),Object(o.b)("p",null,"The scale factor relative to the points of the two touches in screen coordinates."),Object(o.b)("h3",{id:"velocity"},Object(o.b)("inlineCode",{parentName:"h3"},"velocity")),Object(o.b)("p",null,"Velocity of the pan gesture the current moment. The value is expressed in point units per second."),Object(o.b)("h3",{id:"focalx"},Object(o.b)("inlineCode",{parentName:"h3"},"focalX")),Object(o.b)("p",null,"Position expressed in points along X axis of center anchor point of gesture"),Object(o.b)("h3",{id:"focaly"},Object(o.b)("inlineCode",{parentName:"h3"},"focalY")),Object(o.b)("p",null,"Position expressed in points along Y axis of center anchor point of gesture"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/recipes/scaleAndRotate/index.tsx"}),"scale and rotation example")," from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"export class PinchableBox extends React.Component {\n  _baseScale = new Animated.Value(1);\n  _pinchScale = new Animated.Value(1);\n  _scale = Animated.multiply(this._baseScale, this._pinchScale);\n  _lastScale = 1;\n  _onPinchGestureEvent = Animated.event(\n    [{ nativeEvent: { scale: this._pinchScale } }],\n    { useNativeDriver: USE_NATIVE_DRIVER }\n  );\n\n  _onPinchHandlerStateChange = (event) => {\n    if (event.nativeEvent.oldState === State.ACTIVE) {\n      this._lastScale *= event.nativeEvent.scale;\n      this._baseScale.setValue(this._lastScale);\n      this._pinchScale.setValue(1);\n    }\n  };\n\n  render() {\n    return (\n      <PinchGestureHandler\n        onGestureEvent={this._onPinchGestureEvent}\n        onHandlerStateChange={this._onPinchHandlerStateChange}>\n        <View style={styles.container} collapsable={false}>\n          <Animated.Image\n            style={[\n              styles.pinchableImage,\n              {\n                transform: [{ perspective: 200 }, { scale: this._scale }],\n              },\n            ]}\n          />\n        </View>\n      </PinchGestureHandler>\n    );\n  }\n}\n")))}p.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,b=d["".concat(i,".").concat(u)]||d[u]||h[u]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);