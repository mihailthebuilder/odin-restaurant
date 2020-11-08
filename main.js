(()=>{"use strict";var n,e,t,r={402:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"body {\n  color: #36494E; \n  background-color: #96ADC8;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  text-align: center;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-left: 3rem; \n  padding-right: 3rem;\n}\n\n#hero {\n  background-color: #D7FFAB;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n}\n\n#hero>h1 {\n  margin-bottom: 4rem;\n}\n\nbutton {\n  font-size: 1.2rem;\n  padding: 1rem 2rem;\n  background-color: #D89D6A;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n#menu {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background-color: #FCFF6C;\n}\n\n#menu>div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 3rem;\n}\n\n#menu img {\n  width: 50%;\n  height: 50%;\n}\n\n.text-img {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#intro {\n  background-color: #FCFF6C;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],d=e.base?c[0]+e.base:c[0],s=t[d]||0,u="".concat(d," ").concat(s);t[d]=s+1;var l=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:u,updater:h(f,e),references:1}),r.push(u)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,u=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function l(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,p=0;function h(n,e){var t,r,o;if(e.singleton){var i=p++;t=m||(m=d(e)),r=l.bind(null,t,i,!1),o=l.bind(null,t,i,!0)}else t=d(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var d=c(n,e),s=0;s<t.length;s++){var u=a(t[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=d}}}}},o={};function i(n){if(o[n])return o[n].exports;var e=o[n]={id:n,exports:{}};return r[n](e,e.exports,i),e.exports}i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=i(379),e=i.n(n),t=i(402),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,document.getElementById("content").insertAdjacentHTML("beforeend",'\n    <header>\n      <nav><h1>Odin Restaurants</h1></nav>\n    </header>\n\n    <section id="hero">\n      <h1>The Best Place to Eat Nordic Food</h1><button type="button">Find out more...</button>\n    </section>\n  \n    <section id="intro">\n      <h2>Why we\'re amazing</h2>\n      <div id="features">\n        <div id="chefs">\n        </div>\n      </div>\n    </section>\n  ')})();