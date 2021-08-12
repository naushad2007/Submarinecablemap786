(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{566:
/*!*****************************************************!*\
  !*** ./src/components/RemoveButton/RemoveButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var o=n(/*! @babel/runtime-corejs3/helpers/toConsumableArray */573),r=n.n(o),a=n(/*! react */0),i=n.n(a),l=(n(/*! core-js/modules/es.array.join.js */274),n(/*! @babel/runtime-corejs3/core-js/instance/filter */31)),c=n.n(l),u=n(/*! @babel/runtime-corejs3/core-js/instance/concat */45),s=n.n(u),p=n(/*! @redwoodjs/router */6),f=n(/*! @heroicons/react/solid */574),d=function(e,t,n){var o,a,i=c()(o=r()(t)).call(o,(function(t){return t!==e.id})),l=1==i.length?s()(a="/".concat(n,"/")).call(a,i[0]):i.length>1?p.routes.multiselect({id:n,ids:i.join(",")}):p.routes.home();return l};t.a=function(e){var t=e.item,n=e.hover,o=e.ids,r=e.type;return n&&n.id==t.id?i.a.createElement(p.Link,{to:d(t,o,r)},i.a.createElement(f.a,{className:"inline-block w-5 h-5 ml-1 -mt-1 text-gray-400 hover:text-tg-blue-darker"})):i.a.createElement(i.a.Fragment,null)}},567:
/*!*******************************************************!*\
  !*** ./src/components/ResultsHeader/ResultsHeader.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";n(/*! core-js/modules/web.dom-collections.for-each.js */180);var o=n(/*! @babel/runtime-corejs3/core-js/object/keys */53),r=n.n(o),a=n(/*! @babel/runtime-corejs3/core-js/object/get-own-property-symbols */134),i=n.n(a),l=n(/*! @babel/runtime-corejs3/core-js/instance/filter */31),c=n.n(l),u=n(/*! @babel/runtime-corejs3/core-js/object/get-own-property-descriptor */99),s=n.n(u),p=n(/*! @babel/runtime-corejs3/core-js/object/get-own-property-descriptors */135),f=n.n(p),d=n(/*! @babel/runtime-corejs3/helpers/defineProperty */181),b=n.n(d),m=n(/*! @babel/runtime-corejs3/helpers/slicedToArray */26),y=n.n(m),g=(n(/*! core-js/modules/es.function.name.js */273),n(/*! react */0)),v=n.n(g),C=n(/*! @redwoodjs/router */6),h=n(/*! react-copy-to-clipboard */568),w=n(/*! @heroicons/react/outline */12);function O(e,t){var n=r()(e);if(i.a){var o=i()(e);t&&(o=c()(o).call(o,(function(t){return s()(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):f.a?Object.defineProperties(e,f()(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,s()(n,t))}))}return e}t.a=function(e){var t=e.name,n=Object(C.useParams)(),o=Object(g.useState)({value:window.location.href,copied:!1}),r=y()(o,2),a=r[0],i=r[1];Object(g.useEffect)((function(){i(E(E({},a),{},{copied:!1}))}),[n]);return v.a.createElement("div",{className:"my-4"},v.a.createElement("h2",null,t),v.a.createElement(h.CopyToClipboard,{text:a.value,onCopy:function(){return i(E(E({},a),{},{copied:!0})),void ga("send","event","Copy","Copied",a.value)}},v.a.createElement("span",{className:"text-sm inline-block leading-4 "+(a.copied?"text-gray-500 hover:text-gray-500 cursor-default":"text-tg-blue hover:text-tg-blue-darker cursor-pointer")},v.a.createElement(w.c,{className:"w-4 h-4 mr-1 float-left"})," ",a.copied?"Copied":"Copy link")))}},568:
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
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(n(/*! react */0)),r=a(n(/*! copy-to-clipboard */570));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(){var e,n;u(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return m(d(n=p(this,(e=f(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,l=t.children,c=t.options,u=o.default.Children.only(l),s=(0,r.default)(a,c);i&&i(a,s),u&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=c(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&s(n.prototype,a),i&&s(n,i),t}(o.default.PureComponent);t.CopyToClipboard=y,m(y,"defaultProps",{onCopy:void 0,options:void 0})},570:
/*!**************************************************!*\
  !*** ../node_modules/copy-to-clipboard/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var o=n(/*! toggle-selection */571),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,l,c,u,s=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),l=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(u),l.selectNodeContents(u),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),u&&document.body.removeChild(u),i()}return s}},571:
/*!*************************************************!*\
  !*** ../node_modules/toggle-selection/index.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},572:
/*!*****************************************************************!*\
  !*** ./src/components/SubmarineCableList/SubmarineCableList.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var o=n(/*! @babel/runtime-corejs3/helpers/slicedToArray */26),r=n.n(o),a=(n(/*! core-js/modules/es.function.name.js */273),n(/*! @babel/runtime-corejs3/core-js/instance/concat */45)),i=n.n(a),l=n(/*! @babel/runtime-corejs3/core-js/instance/map */14),c=n.n(l),u=n(/*! react */0),s=n.n(u),p=n(/*! @redwoodjs/router */6),f=n(/*! ../../contexts/MapContext/MapContext */96),d=n(/*! ../RemoveButton/RemoveButton */566);t.a=function(e){var t=e.submarineCables,n=e.xl,o=e.ids,a=e.toggleLandingTooltip,l=e.rfs,b=e.group_by_rfs,m=Object(u.useState)(null),y=r()(m,2),g=y[0],v=y[1],C=Object(u.useContext)(f.a);return Object(u.useEffect)((function(){if(g){var e,t,n=C.getSubmarineCableCentroid(g.id+"-0"),o=C.getSubmarineCableColor(g.id+"-0");C.openInfoWindowHover({position:n,content:i()(e=i()(t='<div class="cable tooltip" style="background-color:'.concat(o,";border-top-color:")).call(t,o,';">')).call(e,g.name,'<div class="tooltip-pointer"></div></div>')}),ga("send","event","Cable","Sidebar Mouseover",g.id)}else C.infoWindowHover.close();a&&a(!g||null)}),[g]),n?s.a.createElement(s.a.Fragment,null,c()(t).call(t,(function(e){return s.a.createElement(p.Link,{key:e.id,to:p.routes.submarineCable({id:e.id}),onMouseEnter:function(){return v(e)},onMouseLeave:function(){return v(null)},className:"block bg-gray-50 text-black hover:bg-gray-150 hover:text-black py-2 px-8 border-b border-gray-200"},e.name)}))):s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,o?"Selection":b?"RFS "+l:"Submarine Cables"),s.a.createElement("ul",null,c()(t).call(t,(function(e){return s.a.createElement("li",{key:e.id,onMouseEnter:function(){return v(e)},onMouseLeave:function(){return v(null)}},s.a.createElement(p.Link,{to:p.routes.submarineCable({id:e.id}),className:"text-tg-blue hover:text-tg-blue-darker"},e.name,!l&&e.is_planned?s.a.createElement("span",{className:"inline-block align-middle ml-1 -mt-1 px-1.5 rounded-full border border-gray-400 text-xs text-gray-500"},e.rfs_year):""),o&&s.a.createElement(d.a,{item:e,hover:g,ids:o,type:"submarine-cable"}))}))))}},632:
/*!********************************************************!*\
  !*** ./src/pages/LandingPointPage/LandingPointPage.js ***!
  \********************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/Routes.js (referenced with import()) */function(e,t,n){"use strict";n.r(t);var o=n(/*! @babel/runtime-corejs3/helpers/slicedToArray */26),r=n.n(o),a=(n(/*! core-js/modules/es.function.name.js */273),n(/*! react */0)),i=n.n(a),l=n(/*! react-fetch-hook */48),c=n.n(l),u=n(/*! ../../contexts/MapContext/MapContext */96),s=n(/*! ../../contexts/ResultsContext/ResultsContext */98),p=n(/*! ../../components/ResultsHeader/ResultsHeader */567),f=n(/*! ../../components/SubmarineCableList/SubmarineCableList */572);t.default=function(e){var t=e.id,n=c()("/api/v3/landing-point/".concat(t,".json")).data,o=Object(a.useContext)(u.a),l=Object(a.useContext)(s.a),d=r()(l,2),b=(d[0],d[1]),m=Object(a.useState)(null),y=r()(m,2),g=y[0],v=y[1];return Object(a.useEffect)((function(){n&&(b({type:"reset",payload:n}),o.selectLandingPoint(n),ga&&(ga("send","pageview","/landing-point/".concat(t)),ga("send","event","Landing Point","Select",t)))}),[n]),Object(a.useEffect)((function(){g?o.openInfoWindow({position:o.getPointPosition(n.id),content:'<div class="tooltip">'.concat(n.name,'<div class="tooltip-pointer"></div></div>')}):o.infoWindow.close()}),[g]),n?i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{name:n.name}),i.a.createElement(f.a,{submarineCables:n.cables,toggleLandingTooltip:function(e){v(e)}})):i.a.createElement(i.a.Fragment,null)}}}]);