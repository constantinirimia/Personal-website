/*! For license information please see 5.9ec06098.chunk.js.LICENSE.txt */
(this["webpackJsonpPersonal-website"]=this["webpackJsonpPersonal-website"]||[]).push([[5],{58:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},59:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},77:function(e,t,r){"use strict";var n=r(56),a=r(6),i=r(58);var s=r(59),o=r.n(s),c=r(0),l=r(1),u=["as","disabled"];function d(e){var t=e.tagName,r=e.disabled,n=e.href,a=e.target,i=e.rel,s=e.onClick,o=e.tabIndex,c=void 0===o?0:o,l=e.type;t||(t=null!=n||null!=a||null!=i?"a":"button");var u={tagName:t};if("button"===t)return[{type:l||"button",disabled:r},u];var d=function(e){(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==s||s(e)};return[{role:"button",disabled:void 0,tabIndex:r?void 0:c,href:"a"===t&&r?void 0:n,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?i:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},u]}var b=c.forwardRef((function(e,t){var r=e.as,n=e.disabled,i=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,u),s=d(Object.assign({tagName:r,disabled:n},i)),o=Object(a.a)(s,2),c=o[0],b=o[1].tagName;return Object(l.jsx)(b,Object.assign({},i,c,{ref:t}))}));b.displayName="Button";var f=c.createContext({prefixes:{}});f.Consumer,f.Provider;function p(e,t){var r=Object(c.useContext)(f).prefixes;return e||r[t]||t}var v=["as","bsPrefix","variant","size","active","className"],h=c.forwardRef((function(e,t){var r=e.as,s=e.bsPrefix,c=e.variant,u=e.size,b=e.active,f=e.className,h=function(e,t){if(null==e)return{};var r,n,a=Object(i.a)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,v),j=p(s,"btn"),O=d(Object(n.a)({tagName:r},h)),y=Object(a.a)(O,2),m=y[0],g=y[1].tagName;return Object(l.jsx)(g,Object(n.a)(Object(n.a)(Object(n.a)({},h),m),{},{ref:t,className:o()(f,j,b&&"active",c&&"".concat(j,"-").concat(c),u&&"".concat(j,"-").concat(u),h.href&&h.disabled&&"disabled")}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=h},85:function(e,t,r){"use strict";r.r(t);r(0);var n=r(8),a=r(87),i=r(30),s=r(77),o=r(1),c=function(e){e.title,e.description;var t=e.preview,r=e.link;return Object(o.jsxs)("article",{className:"post markdown",children:[Object(o.jsx)(a.a,{children:t}),Object(o.jsx)("p",{children:Object(o.jsxs)(s.a,{children:[" ",Object(o.jsx)(n.b,{to:r,children:"Read More ..."})," "]})})]})};t.default=function(){return Object(o.jsx)(i.a,{title:"Blog",description:"Read my latest blog articles",children:Object(o.jsxs)("article",{className:"post markdown",id:"blog",children:[Object(o.jsx)("header",{children:Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h2",{children:"BLOG"})})}),Object(o.jsx)(c,{preview:"# This is an article 1\n\nCheck your internet speed in under 30 seconds. The speed test usually transfers less than 40 MB of data, but may transfer more data on fast connections.\n\nTo run the test, you'll be connected to Measurement Lab (M-Lab) and your IP address will be shared with them and processed by them in accordance with their privacy policy. M-Lab conducts the test and publicly publishes all test results to promote internet research. Published information includes your IP address and test results, but doesn\u2019t include any other information about you as an internet user.\n".slice(0,300),link:"/blog/blogpost1"})]})})}}}]);
//# sourceMappingURL=5.9ec06098.chunk.js.map