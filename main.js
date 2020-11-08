(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"body {\n  color: #36494E; \n  background-color: #96ADC8;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  text-align: center;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-left: 3rem; \n  padding-right: 3rem;\n}\n\n#hero {\n  background-color: #D7FFAB;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n}\n\n#hero>h1 {\n  margin-bottom: 4rem;\n}\n\nbutton {\n  font-size: 1.2rem;\n  padding: 1rem 2rem;\n  background-color: #D89D6A;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n#menu {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  background-color: #FCFF6C;\n}\n\n#menu>div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 3rem;\n}\n\n#menu img {\n  width: 50%;\n  height: 50%;\n}\n\n.text-img {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}",""]);const a=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var i,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function o(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},i=[],r=0;r<e.length;r++){var c=e[r],d=n.base?c[0]+n.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=o(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:f(p,n),references:1}),i.push(l)}return i}function d(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=t.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var a=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function p(e,n,t){var i=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,h=0;function f(e,n){var t,i,r;if(n.singleton){var a=h++;t=m||(m=d(n)),i=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=d(n),i=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=o(t[i]);a[r].references--}for(var d=c(e,n),s=0;s<t.length;s++){var l=o(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=d}}}}},n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),i=t(426);n()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const r=t.p+"260c7bb7614c5c50e745460e423dc21f.jpeg",a=t.p+"fb3abbd1b370d5b6823bbbb8417144a7.jpg",o=t.p+"e527f68ee979209257adaa2c5a3c5136.jpg";(()=>{let e=document.getElementById("content"),n=document.createElement("header");n.innerHTML="<nav><h1>Odin Restaurants</h1></nav>",e.appendChild(n);let t=document.createElement("main"),i=document.createElement("section");i.id="hero",i.innerHTML='<h1>The Best Place to Eat Nordic Food</h1><button type="button">See Menu</button>',t.appendChild(i);let c=document.createElement("section");c.id="menu",c.insertAdjacentHTML("beforeend",'<h1>Our Menu</h1>\n    <div id="menu-options">\n      <div class="text-img">\n        <h2>Pizza</h2>\n        <p>This pizza is the best pizza on the planet. It\'s made by Nordic people, which is why it\'s so amazing</p>\n      </div>\n      <div id="img-pizza">\n      </div>\n      <div id="img-pasta">\n      </div>\n      <div class="text-img">\n        <h2>Pasta</h2>\n        <p>This pasta is the best pasta on the planet. It\'s made by Nordic people, which is why it\'s so amazing</p>\n      </div>\n      <div class="text-img">\n        <h2>Lasagna</h2>\n        <p>This lasagna is the best lasagna on the planet. It\'s made by Nordic people, which is why it\'s so amazing</p>\n      </div>\n      <div id="img-lasagna">\n      </div>\n    </div>'),t.appendChild(c),e.appendChild(t);const d=new Image;d.src=r,document.getElementById("img-pizza").appendChild(d);const s=new Image;s.src=a,document.getElementById("img-pasta").appendChild(s);const l=new Image;l.src=o,document.getElementById("img-lasagna").appendChild(l)})()})()})();