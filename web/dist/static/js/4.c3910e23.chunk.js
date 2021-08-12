(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{566:
/*!*****************************************************!*\
  !*** ./src/components/RemoveButton/RemoveButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var o=n(/*! @babel/runtime-corejs3/helpers/toConsumableArray */573),r=n.n(o),a=n(/*! react */0),l=n.n(a),c=(n(/*! core-js/modules/es.array.join.js */274),n(/*! @babel/runtime-corejs3/core-js/instance/filter */31)),i=n.n(c),s=n(/*! @babel/runtime-corejs3/core-js/instance/concat */45),u=n.n(s),p=n(/*! @redwoodjs/router */6),f=n(/*! @heroicons/react/solid */574),d=function(e,t,n){var o,a,l=i()(o=r()(t)).call(o,(function(t){return t!==e.id})),c=1==l.length?u()(a="/".concat(n,"/")).call(a,l[0]):l.length>1?p.routes.multiselect({id:n,ids:l.join(",")}):p.routes.home();return c};t.a=function(e){var t=e.item,n=e.hover,o=e.ids,r=e.type;return n&&n.id==t.id?l.a.createElement(p.Link,{to:d(t,o,r)},l.a.createElement(f.a,{className:"inline-block w-5 h-5 ml-1 -mt-1 text-gray-400 hover:text-tg-blue-darker"})):l.a.createElement(l.a.Fragment,null)}},567:
/*!*******************************************************!*\
  !*** ./src/components/ResultsHeader/ResultsHeader.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";n(/*! core-js/modules/web.dom-collections.for-each.js */180);var o=n(/*! @babel/runtime-corejs3/core-js/object/keys */53),r=n.n(o),a=n(/*! @babel/runtime-corejs3/core-js/object/get-own-property-symbols */134),l=n.n(a),c=n(/*! @babel/runtime-corejs3/core-js/instance/filter */31),i=n.n(c),s=n(/*! @babel/runtime-corejs3/core-js/object/get-own-property-descriptor */99),u=n.n(s),p=n(/*! @babel/runtime-corejs3/core-js/object/get-own-property-descriptors */135),f=n.n(p),d=n(/*! @babel/runtime-corejs3/helpers/defineProperty */181),m=n.n(d),b=n(/*! @babel/runtime-corejs3/helpers/slicedToArray */26),y=n.n(b),g=(n(/*! core-js/modules/es.function.name.js */273),n(/*! react */0)),v=n.n(g),E=n(/*! @redwoodjs/router */6),h=n(/*! react-copy-to-clipboard */568),w=n(/*! @heroicons/react/outline */12);function C(e,t){var n=r()(e);if(l.a){var o=l()(e);t&&(o=i()(o).call(o,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):f.a?Object.defineProperties(e,f()(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,u()(n,t))}))}return e}t.a=function(e){var t=e.name,n=Object(E.useParams)(),o=Object(g.useState)({value:window.location.href,copied:!1}),r=y()(o,2),a=r[0],l=r[1];Object(g.useEffect)((function(){l(O(O({},a),{},{copied:!1}))}),[n]);return v.a.createElement("div",{className:"my-4"},v.a.createElement("h2",null,t),v.a.createElement(h.CopyToClipboard,{text:a.value,onCopy:function(){return l(O(O({},a),{},{copied:!0})),void ga("send","event","Copy","Copied",a.value)}},v.a.createElement("span",{className:"text-sm inline-block leading-4 "+(a.copied?"text-gray-500 hover:text-gray-500 cursor-default":"text-tg-blue hover:text-tg-blue-darker cursor-pointer")},v.a.createElement(w.c,{className:"w-4 h-4 mr-1 float-left"})," ",a.copied?"Copied":"Copy link")))}},568:
/*!************************************************************!*\
  !*** ../node_modules/react-copy-to-clipboard/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/*! exports used: CopyToClipboard */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var o=n(/*! ./Component */569).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},569:
/*!****************************************************************!*\
  !*** ../node_modules/react-copy-to-clipboard/lib/Component.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(n(/*! react */0)),r=a(n(/*! copy-to-clipboard */570));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(){var e,n;s(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return b(d(n=p(this,(e=f(t)).call.apply(e,[this].concat(l)))),"onClick",(function(e){var t=n.props,a=t.text,l=t.onCopy,c=t.children,i=t.options,s=o.default.Children.only(c),u=(0,r.default)(a,i);l&&l(a,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)})),n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=i(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,a),l&&u(n,l),t}(o.default.PureComponent);t.CopyToClipboard=y,b(y,"defaultProps",{onCopy:void 0,options:void 0})},570:
/*!**************************************************!*\
  !*** ../node_modules/copy-to-clipboard/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var o=n(/*! toggle-selection */571),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,l,c,i,s,u=!1;t||(t={}),n=t.debug||!1;try{if(l=o(),c=document.createRange(),i=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),i.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(c):i.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},571:
/*!*************************************************!*\
  !*** ../node_modules/toggle-selection/index.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},589:
/*!*************************************************************!*\
  !*** ./src/components/LandingPointList/LandingPointList.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var o=n(/*! @babel/runtime-corejs3/helpers/slicedToArray */26),r=n.n(o),a=n(/*! @babel/runtime-corejs3/core-js/instance/map */14),l=n.n(a),c=(n(/*! core-js/modules/es.function.name.js */273),n(/*! react */0)),i=n.n(c),s=n(/*! ../../contexts/MapContext/MapContext */96),u=n(/*! @redwoodjs/router */6),p=n(/*! ../RemoveButton/RemoveButton */566);t.a=function(e){var t=e.landingPoints,n=e.ids,o=Object(c.useState)(null),a=r()(o,2),f=a[0],d=a[1],m=Object(c.useContext)(s.a),b=function(e){return e.is_tbd?"t.b.d., ".concat(e.country):e.name};return Object(c.useEffect)((function(){m&&(f&&m.landingPoints.getFeatureById(f.id)?(m.openInfoWindow({position:m.getPointPosition(f.id),content:'<div class="tooltip">'.concat(b(f),'<div class="tooltip-pointer"></div></div>')}),ga("send","event","Landing Point","Sidebar Mouseover",f.id)):m.infoWindow.close())}),[f]),i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,n?"Selection":"Landing Points"),i.a.createElement("ul",null,l()(t).call(t,(function(e){return i.a.createElement("li",{key:e.id,onMouseEnter:function(){return d(e)},onMouseLeave:function(){return d(null)}},e.is_tbd?i.a.createElement("a",{className:"cursor-not-allowed text-gray-500 hover:text-gray-600"},b(e)):i.a.createElement(u.Link,{to:u.routes.landingPoint({id:e.id})},b(e)),n&&i.a.createElement(p.a,{item:e,hover:f,ids:n,type:"landing-point"}))}))))}},638:
/*!************************************************************************!*\
  !*** ./src/pages/SubmarineCablePage/SubmarineCablePage.js + 1 modules ***!
  \************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime-corejs3/core-js/instance/map.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@redwoodjs/router/dist/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/LandingPointList/LandingPointList.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/components/ResultsHeader/ResultsHeader.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/contexts/MapContext/MapContext.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/contexts/ResultsContext/ResultsContext.js */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-fetch-hook/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,n){"use strict";n.r(t);var o=n(26),r=n.n(o),a=(n(273),n(6)),l=n(0),c=n.n(l),i=n(48),s=n.n(i),u=n(96),p=n(98),f=n(567),d=n(589),m=n(14),b=n.n(m),y=(n(100),n(187),n(184),function(e){var t,n=e.vendors,o=function(e){return e.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^-a-z0-9~\s\.:;+=_]/g,"").replace(/[\s\.:;=+]+/g,"-")};return c.a.createElement(c.a.Fragment,null,b()(t=n.split(",")).call(t,(function(e,t,n){return c.a.createElement("span",{key:o(e)},c.a.createElement(a.Link,{to:a.routes.supplier({id:o(e)})},e),n.length-1===t?" ":", ")})))});t.default=function(e){var t=e.id,n=s()("/api/v3/cable/".concat(t,".json")).data,o=Object(l.useContext)(u.a),i=Object(l.useContext)(p.a),m=r()(i,2),b=(m[0],m[1]);return Object(l.useEffect)((function(){n&&(b({type:"reset",payload:n}),o.selectSubmarineCable(n),ga&&(ga("send","pageview","/submarine-cable/".concat(t)),ga("send","event","Cable","Select",t)))}),[n]),n?c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{name:n.name}),c.a.createElement("ul",null,c.a.createElement("li",{className:"mb-2"},c.a.createElement("span",{className:"block text-xs font-bold"},"RFS"),c.a.createElement(a.Link,{to:a.routes.readyForService({id:n.rfs_year})},n.rfs)),c.a.createElement("li",{className:"mb-2"},c.a.createElement("span",{className:"block text-xs font-bold"},"Cable Length"),n.length?n.length:"n.a."),c.a.createElement("li",{className:"mb-2"},c.a.createElement("span",{className:"block text-xs font-bold"},"Owners"),n.owners),n.suppliers&&c.a.createElement("li",{className:"mb-2"},c.a.createElement("span",{className:"block text-xs font-bold"},"Suppliers"),c.a.createElement(y,{vendors:n.suppliers})),n.url&&c.a.createElement("li",{className:"mb-2"},c.a.createElement("span",{className:"block text-xs font-bold"},"URL"),c.a.createElement("a",{href:n.url},n.url)),n.notes&&c.a.createElement("li",null,c.a.createElement("span",{className:"block text-xs font-bold"},"Notes"),n.notes)),c.a.createElement(d.a,{landingPoints:n.landing_points})):c.a.createElement(c.a.Fragment,null)}}}]);