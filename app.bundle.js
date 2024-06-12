(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>m});var r=t(354),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),d=new URL(t(592),t.b),l=new URL(t(886),t.b),A=a()(o()),u=s()(d),f=s()(l);A.push([n.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1.2;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n@font-face {\n    font-family: 'roboto';\n    src: url(${u}) format('woff2'),\n         url(${f}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'roboto';\n    color: white;\n    background-color: #0ea5e9;\n}\n\ndiv.wrapper {\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nsection.display {\n    display: grid;\n    grid-template-rows: .7fr 2fr 2fr .5fr .7fr;\n    justify-items: center;\n    align-items: center;\n    background-color: #082f49;\n    border-radius: 1rem;\n    padding: 1rem;\n}\n\ndiv.nav {\n    width: 80%;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 10fr .1fr;\n}\n\n.nav>img {\n    cursor: pointer;\n}\n\ninput {\n    border-radius: 1rem;\n}\n\ndiv.condition {\n    display: grid;\n    justify-items: center;\n    grid-template-rows: 8fr 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n    max-height: 15rem;\n}\n\ndiv.condition>div>img {\n    height: 100%;\n    width: auto;\n}\n\nh2#temp-f, h2#temp-c {\n    justify-self: center;\n    align-self: center;\n}\n\ndiv.location {\n    display: grid;\n    grid-template-rows: 2.4fr 1fr 1fr 1fr;\n    justify-items: center;\n}\n\ndiv.other {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    gap: 2rem;\n}\n\ndiv.wind {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n}\n\n`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,qBAAqB;IACrB;+DAC8C;IAC9C,mBAAmB;IACnB,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,qBAAqB;IACrB,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,2BAA2B;IAC3B,kCAAkC;IAClC,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,qBAAqB;AACzB",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1.2;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n@font-face {\n    font-family: 'roboto';\n    src: url('./fonts/roboto.woff2') format('woff2'),\n         url('./fonts/roboto.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'roboto';\n    color: white;\n    background-color: #0ea5e9;\n}\n\ndiv.wrapper {\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\nsection.display {\n    display: grid;\n    grid-template-rows: .7fr 2fr 2fr .5fr .7fr;\n    justify-items: center;\n    align-items: center;\n    background-color: #082f49;\n    border-radius: 1rem;\n    padding: 1rem;\n}\n\ndiv.nav {\n    width: 80%;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 10fr .1fr;\n}\n\n.nav>img {\n    cursor: pointer;\n}\n\ninput {\n    border-radius: 1rem;\n}\n\ndiv.condition {\n    display: grid;\n    justify-items: center;\n    grid-template-rows: 8fr 1fr;\n    grid-template-columns: 1fr 3fr 1fr;\n    max-height: 15rem;\n}\n\ndiv.condition>div>img {\n    height: 100%;\n    width: auto;\n}\n\nh2#temp-f, h2#temp-c {\n    justify-self: center;\n    align-self: center;\n}\n\ndiv.location {\n    display: grid;\n    grid-template-rows: 2.4fr 1fr 1fr 1fr;\n    justify-items: center;\n}\n\ndiv.other {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    gap: 2rem;\n}\n\ndiv.wind {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n}\n\n"],sourceRoot:""}]);const m=A},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,A="".concat(d," ").concat(l);i[d]=l+1;var u=t(A),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:A,updater:m,references:1})}a.push(A)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},886:(n,e,t)=>{n.exports=t.p+"b7136dd9133482dc1af7.woff"},592:(n,e,t)=>{n.exports=t.p+"211a265869084eaced8b.woff2"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),s=t.n(c),d=t(540),l=t.n(d),A=t(113),u=t.n(A),f=t(208),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const p=t.p+"de2fdd568eca64bd5f79.svg";!function(n){const e=document.getElementById("search-btn"),t=document.getElementById("search-box");e.setAttribute("src",p);class r{constructor(n,e,t,r,o,i,a,c,s,d,l,A){this.name=n,this.region=e,this.country=t,this.localTime=r,this.tempC=o,this.tempF=i,this.conditionText=a.text,this.conditionIcon=a.icon,this.windM=c,this.windK=s,this.windDir=d,this.humidity=l,this.uv=A}}async function o(n){if(""===n)console.log("no search term specified");else try{let t=await async function(n){const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=0e47563375ad412e91d222413241106&q=${n}&aqi=no`,{mode:"cors"});if(200==e.status)return await e.json();throw new Error(e.status)}(n);!function(n){console.log(n);const e=document.getElementById("name"),t=document.getElementById("region"),r=document.getElementById("country"),o=document.getElementById("time"),i=document.getElementById("condition-text"),a=document.getElementById("icon"),c=document.getElementById("temp-f"),s=document.getElementById("temp-c"),d=document.getElementById("humidity"),l=document.getElementById("uv"),A=document.getElementById("wind-mph"),u=document.getElementById("wind-kph"),f=document.getElementById("wind-dir");i.textContent=n.conditionText,a.setAttribute("src",n.conditionIcon),r.textContent=n.country,d.textContent=`Humidity: ${n.humidity}%`,o.textContent=`${n.localTime}`,e.textContent=`${n.name}`,t.textContent=`${n.region}`,s.textContent=`${n.tempC}°C`,c.textContent=`${n.tempF}°F`,l.textContent=`UV Index: ${n.uv}`,f.textContent=`Wind Direction: ${n.windDir}`,u.textContent=`${n.windK} km/h`,A.textContent=`${n.windM} mph`}(new r((e=t).location.name,e.location.region,e.location.country,e.location.localtime,e.current.temp_c,e.current.temp_f,e.current.condition,e.current.wind_mph,e.current.wind_kph,e.current.wind_dir,e.current.humidity,e.current.uv)),console.log("Weather Handled")}catch(n){console.error("Problem handling weather!",n)}var e}e.addEventListener("click",(async()=>{let n=document.getElementById("search-box").value;t.value="",n=n.replace(/\s/g,"-");try{await o(n)}catch(n){console.error("There was a problem!",n)}})),window.addEventListener("keydown",(async n=>{if("Enter"==n.key){let n=document.getElementById("search-box").value;t.value="",n=n.replace(/[\s,]/g,"-");try{await o(n)}catch(n){console.error("There was a problem!",n)}}})),window.addEventListener("load",(()=>{o("New York")}))}()})()})();
//# sourceMappingURL=app.bundle.js.map