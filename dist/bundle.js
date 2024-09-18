/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={17:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var a=new(t.bind.apply(t,r));return n&&i(a,n.prototype),a}(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(n){function r(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=function(e,n,r){return n=a(n),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,o()?Reflect.construct(n,r||[],a(e).constructor):n.apply(e,r))}(this,r)).attachShadow({mode:"open"}),e.render(),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(r,n),c=r,u=[{key:"render",value:function(){var t=this;this.shadowRoot.innerHTML='\n          <style> \n            .note-form input, .note-form textarea, .note-form button {\n              display: block;\n              width: 100%;\n              margin-bottom: 8px;\n            }\n            .note-form textarea {\n              resize: vertical;\n            }\n            .error-message {\n              color: red;\n              font-size: 0.9em;\n              text-align: center;\n              margin-top: 8px;\n            }\n              \n            .note-form {\n              margin-bottom: 24px;\n              background-color: #ffffff;\n              padding: 16px;\n              border-radius: 8px;\n              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n            }\n\n            .note-form input,\n            .note-form textarea {\n              display: block;\n              width: 97%;\n              margin-bottom: 12px;\n              padding: 10px;\n              border: 1px solid #ccc;\n              border-radius: 4px;\n              font-size: 1em;\n              transition: border-color 0.3s ease;\n            }\n\n            .note-form input:focus,\n            .note-form textarea:focus {\n              border-color: #007bff;\n              outline: none;\n            }\n\n            .note-form button {\n              display: block;\n              width: 100%;\n              padding: 10px;\n              background-color: #007bff;\n              color: white;\n              border: none;\n              border-radius: 4px;\n              font-size: 1em;\n              cursor: pointer;\n              transition: background-color 0.3s ease;\n            }\n\n            .note-form button:hover {\n              background-color: #0056b3;\n            }\n\n          </style>\n          <form id="note-form" class="note-form">\n            <input type="text" id="title" placeholder="Title" required />\n            <textarea id="body" placeholder="Body" rows="4" required></textarea>\n            <button type="submit">Add Note</button>\n            <div id="form-error" class="error-message"></div>\n          </form>\n        ',this.shadowRoot.getElementById("note-form").addEventListener("submit",(function(e){e.preventDefault();var n=t.shadowRoot.getElementById("title").value,r=t.shadowRoot.getElementById("body").value;""!==n.trim()&&""!==r.trim()?(t.dispatchEvent(new CustomEvent("add-note",{detail:{title:n,body:r},bubbles:!0,composed:!0})),t.shadowRoot.getElementById("note-form").reset(),t.shadowRoot.getElementById("form-error").textContent=""):t.shadowRoot.getElementById("form-error").textContent="All fields are required."})),this.shadowRoot.getElementById("title").addEventListener("input",(function(e){var n=e.target.value,r=t.shadowRoot.getElementById("form-error");""===n.trim()?r.textContent="Title cannot be empty!":r.textContent=""}))}}],u&&e(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("note-form",c)},236:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}function r(t){var e="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var a=new(t.bind.apply(t,r));return n&&i(a,n.prototype),a}(t,arguments,a(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(n){function r(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=function(e,n,r){return n=a(n),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,o()?Reflect.construct(n,r||[],a(e).constructor):n.apply(e,r))}(this,r)).attachShadow({mode:"open"}),e.render(),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(r,n),c=r,(u=[{key:"connectedCallback",value:function(){var t=this.getAttribute("title")||"Untitled",e=this.getAttribute("body")||"No content";this.shadowRoot.querySelector("h3").textContent=t,this.shadowRoot.querySelector("p").textContent=e;var n=this.shadowRoot.querySelector("#delete-btn");n&&n.addEventListener("click",this.handleDelete.bind(this))}},{key:"render",value:function(){this.shadowRoot.innerHTML='\n        <style>\n          .note-item {\n            background: #ffffff;\n            border-radius: 8px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n            padding: 16px;\n            margin-bottom: 16px;\n            transition: box-shadow 0.3s ease;\n          }\n\n          .note-item:hover {\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n          }\n\n          .delete-btn { \n            background-color: #dc3545;\n            color: white;\n            border: none;\n            padding: 8px 12px;\n            border-radius: 4px;\n            font-size: 0.9em;\n            cursor: pointer;\n            transition: background-color 0.3s ease;\n          }\n\n          .delete-btn:hover {\n            background-color: #c82333;\n          }\n\n          h3 {\n            font-size: 1.2em;\n            font-weight: bold;\n            color: #000000;\n            margin-bottom: 8px;\n          }\n\n          p {\n            font-size: 1em;\n            color: #000000;\n            margin-bottom: 12px;\n          }\n        </style>\n        <div class="note-item">\n            <h3></h3>\n            <p></p>\n            <button id="delete-btn" class="delete-btn">Delete</button>\n        </div>\n        '}},{key:"handleDelete",value:function(){var t=this.getAttribute("data-id");this.dispatchEvent(new CustomEvent("delete-note",{detail:{id:t},bubbles:!0,composed:!0}))}}])&&e(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("note-item",c)},919:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([t.id,"body {\n  background-color: rgb(255, 255, 255);\n}\n\nheader {\n  background-color: #dae4eb;\n  color: white;\n  padding: 5px;\n  text-align: center;\n}\n",""]);const c=a},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var f=[].concat(t[s]);r&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var p=n(l),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var h=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var f=n(i[s]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=u}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(72),e=n.n(t),r=n(825),o=n.n(r),i=n(659),a=n.n(i),c=n(56),u=n.n(c),s=n(540),f=n.n(s),l=n(113),p=n.n(l),d=n(919),h={};function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(){v=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new N(r||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",d="suspendedYield",h="executing",m="completed",b={};function g(){}function w(){}function x(){}var E={};s(E,a,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L(A([])));O&&O!==n&&r.call(O,a)&&(E=O);var j=x.prototype=g.prototype=Object.create(E);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==y(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,n,r){var o=p;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=P(c,r);if(u){if(u===b)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var s=l(e,n,r);if("normal"===s.type){if(o=r.done?m:d,s.arg===b)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function P(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=l(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(y(e)+" is not iterable")}return w.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},S(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),b}},e}function m(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){m(i,r,o,a,c,"next",t)}function c(t){m(i,r,o,a,c,"throw",t)}a(void 0)}))}}h.styleTagTransform=p(),h.setAttributes=u(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=f(),e()(d.A,h),d.A&&d.A.locals&&d.A.locals;var g="https://notes-api.dicoding.dev/v2",w=function(){var t=b(v().mark((function t(){var e,n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(g,"/notes"));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.data);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=b(v().mark((function t(e,n){var r,o;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(g,"/notes"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e,body:n})});case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),E=function(){var t=b(v().mark((function t(e){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(g,"/notes/").concat(e),{method:"DELETE"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function O(){O=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new N(r||[]);return o(a,"_invoke",{value:_(t,n,c)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",d="suspendedYield",h="executing",y="completed",v={};function m(){}function b(){}function g(){}var w={};s(w,a,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(A([])));E&&E!==n&&r.call(E,a)&&(w=E);var j=g.prototype=m.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==L(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,n,r){var o=p;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=P(c,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var s=l(e,n,r);if("normal"===s.type){if(o=r.done?y:d,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=y,r.method="throw",r.arg=s.arg)}}}function P(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=l(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(L(e)+" is not iterable")}return b.prototype=g,o(j,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=s(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},S(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function j(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function S(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){j(i,r,o,a,c,"next",t)}function c(t){j(i,r,o,a,c,"throw",t)}a(void 0)}))}}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_(r.key),r)}}function _(t){var e=function(t){if("object"!=L(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==L(e)?e:e+""}function P(t){var e="function"==typeof Map?new Map:void 0;return P=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(T())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var o=new(t.bind.apply(t,r));return n&&R(o,n.prototype),o}(t,arguments,N(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),R(n,t)},P(t)}function T(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(T=function(){return!!t})()}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}var A=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=function(t,e,n){return e=N(e),function(t,e){if(e&&("object"==L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,T()?Reflect.construct(e,n||[],N(t).constructor):e.apply(t,n))}(this,e)).attachShadow({mode:"open"}),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(e,t),n=e,r=[{key:"connectedCallback",value:(o=S(O().mark((function t(){var e,n=this;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.render(),this.showLoading(!0),t.prev=2,t.next=5,w();case 5:e=t.sent,this.showLoading(!1),this.displayNotes(e),this.shadowRoot.getElementById("notes-container").addEventListener("delete-note",function(){var t=S(O().mark((function t(e){var r,o;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.detail.id,t.prev=1,t.next=4,E(r);case 4:(o=n.shadowRoot.querySelector("note-item[data-id='".concat(r,"']")))&&o.remove(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert("Failed to delete note. ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()),this.shadowRoot.querySelector("note-form").addEventListener("add-note",function(){var t=S(O().mark((function t(e){var r,o,i,a;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.detail,o=r.title,i=r.body,n.showLoading(!0),t.prev=2,t.next=5,x(o,i);case 5:a=t.sent,n.showLoading(!1),n.addNoteToList(a.data.title,a.data.body,a.data.id),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),alert("Failed to add note. ".concat(t.t0)),n.showLoading(!1);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),this.showLoading(!1);case 15:case"end":return t.stop()}}),t,this,[[2,12]])}))),function(){return o.apply(this,arguments)})},{key:"render",value:function(){this.shadowRoot.innerHTML='\n        <style>\n          :host {\n           display: block;\n            max-width: 800px;\n            margin: 0 auto;\n            padding: 16px;\n            font-family: "Arial", sans-serif;\n            background-color: #f9f9f9;\n            border-radius: 8px;\n            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n          }\n          .notes-container {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n            gap: 16px;\n          }\n          #loading {\n            display: none;\n            text-align: center;\n            margin: 20px 0;\n            color: black\n          }\n          #loading.active {\n            display: block;\n          }\n        </style>\n        <div id="loading">Loading...</div>\n        <note-form></note-form>\n        <div class="notes-container" id="notes-container"></div>\n      '}},{key:"addNoteToList",value:function(t,e,n){var r=this.shadowRoot.getElementById("notes-container"),o=document.createElement("note-item");o.setAttribute("title",t),o.setAttribute("body",e),o.setAttribute("data-id",n),r.appendChild(o),o.addEventListener("delete-note",function(){var t=S(O().mark((function t(e){return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(e.detail.id);case 3:o.remove(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("Failed to delete ".concat(e.detail.title));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}())}},{key:"displayNotes",value:function(t){var e=this.shadowRoot.getElementById("notes-container");t.forEach((function(t){var n=document.createElement("note-item");n.setAttribute("title",t.title),n.setAttribute("body",t.body),n.setAttribute("data-id",t.id),e.appendChild(n)}))}},{key:"showLoading",value:function(t){var e=this.shadowRoot.getElementById("loading");t?e.classList.add("active"):e.classList.remove("active")}}],r&&k(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r,o}(P(HTMLElement));customElements.define("app-root",A);n(17),n(236),document.addEventListener("DOMContentLoaded",(function(){}))})()})();