(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{SASA:function(e,a,t){"use strict";t.r(a);t("f3/d");var n=t("q1tI"),r=t.n(n);var i=function(e){var a=e.children,t=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:t,className:"column static mobile-hidden drawer"},r.a.createElement("div",{className:"sticky"},r.a.createElement("div",{className:"card drawer-content",tabIndex:0},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"input stretched"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-search"},r.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})),r.a.createElement("input",{id:"search",type:"text",autoComplete:"off"}),r.a.createElement("label",{htmlFor:"search"},"Search"))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"menu"},a))))),r.a.createElement("div",{className:"fab"},r.a.createElement("button",{className:"action",tabIndex:-1,onClick:function(){var e=t.current;e&&(e.classList.toggle("opened"),e.classList.toggle("closed"))}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-search"},r.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})))))};var l=function(e){var a=e.name,t=e.items,n=function(e){e.preventDefault();var a=e.target,t=document.querySelector(a.getAttribute("href")||"");t&&t.scrollIntoView()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"header"},a),r.a.createElement("div",{className:"menu"},t.map((function(e){return r.a.createElement("a",{key:e,className:"item",href:"#"+e,onClick:n},e)})))))},s=t("4XLq"),o=(t("KKXr"),t("pIFo"),t("wZee")),c=t.n(o);var u=function(e){var a=e.name,t=e.since,n=e.description,i=e.signature,l=e.examples,s=(e.metadata,e.pkg),o=(n||"").replace(/\{@link (.*)\}/,(function(e,a){var t=a.split(" | ");return'<a href="'+t[0]+'">'+t[1]+"</a>"}));return r.a.createElement("div",{id:a,className:"card snippet"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},a)),r.a.createElement("div",{className:"content"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:o}})),r.a.createElement("div",{className:"collapsible"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:"header"},"Parameters"),r.a.createElement("table",null,r.a.createElement("tbody",null,i.parameters.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,r.a.createElement("code",null,r.a.createElement("strong",null,e.name,": ",e.type))),r.a.createElement("td",null,r.a.createElement("small",null,e.description)))})))),r.a.createElement("p",null,r.a.createElement("small",null,r.a.createElement("strong",null,"Returns")," ",r.a.createElement("code",null,"(",i.returnValue.type,")")," ",i.returnValue.description)),r.a.createElement("h3",{className:"header"},"Metadata"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("small",null,r.a.createElement("strong",null,"version"))),r.a.createElement("td",null,r.a.createElement("small",null,"v",s.version))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("small",null,r.a.createElement("strong",null,"since"))),r.a.createElement("td",null,r.a.createElement("small",null,"v",t))))))),l.map((function(e){return r.a.createElement("pre",{key:e,className:"example language-javascript"},r.a.createElement("code",{dangerouslySetInnerHTML:{__html:c.a.highlight(e,c.a.languages.javascript,"javascript")}}))})))},m=t("T/ln"),p=t("jLYJ");a.default=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:"row"},r.a.createElement(i,null,r.a.createElement(l,{name:p.name,items:m.map((function(e){return e.name}))})),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header"},p.name),r.a.createElement("p",null,p.description),m.map((function(e){return r.a.createElement(u,{key:e.name,name:e.name,since:e.since,description:e.description,signature:e.signature,examples:e.examples,metadata:e.metadata,pkg:p})})))))))}},"T/ln":function(e){e.exports=JSON.parse('[{"name":"isBoolean","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | boolean","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is a boolean or not"}},"examples":[" import { isBoolean } from \\"@commonly/reflect\\"\\r\\risBoolean(true)     //-> true\\risBoolean(false)    //-> true\\risBoolean(NaN)      //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Glossary/boolean | boolean}."},{"name":"isError","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | Error","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is an Error or not"}},"examples":[" import { isError } from \\"@commonly/reflect\\"\\r\\risError(new Error())    //-> true\\risError(TypeError())    //-> true\\risError(NaN)            //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is an {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error | Error}."},{"name":"isFunction","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | TFunction","description":"is a value to check"}],"typeparameters":[{"name":"TFunction","defaultValue":null,"extends":null}],"returnValue":{"type":"boolean","description":"a boolean whether the value is a function or not"}},"examples":[" import { isFunction } from \\"@commonly/reflect\\"\\r\\risFunction(Math.add)        //-> true\\risFunction(() => void 0))   //-> true\\risFunction(Math.PI)         //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Glossary/function | function}."},{"name":"isMap","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | Map","description":"is a value to check"}],"typeparameters":[{"name":"TKey","defaultValue":null,"extends":null},{"name":"TValue","defaultValue":null,"extends":null}],"returnValue":{"type":"boolean","description":"a boolean whether the value is a Map or not"}},"examples":[" import { isMap } from \\"@commonly/reflect\\"\\r\\risMap(new Map())     //-> true\\risMap(NaN)           //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map | Map}."},{"name":"isNil","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | Nil","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is a {@link"}},"examples":[" import { isNil } from \\"@commonly/reflect\\"\\r\\risNil(undefined)   //-> true\\risNil(null)        //-> true\\risNil(NaN)         //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link @commonly/type:Nil | Nil} (either an undefined or a null)."},{"name":"isNull","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | null","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is a null or not"}},"examples":[" import { isNull } from \\"@commonly/reflect\\"\\r\\risNull(null)        //-> true\\risNull(undefined)   //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Glossary/null | null}."},{"name":"isNumber","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | number","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is a number or not"}},"examples":[" import { isNumber } from \\"@commonly/reflect\\"\\r\\risNumber(0)           //-> true\\risNumber(NaN)         //-> true\\risNumber(null)        //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Glossary/number | number}."},{"name":"isObject","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | ","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is an Object or not"}},"examples":[" import { isObject } from \\"@commonly/reflect\\"\\r\\risObject(new Object())      //-> true\\risObject({})                //-> true\\risObject(null)              //-> false\\risObject(undefined)         //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is an {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object | Object}."},{"name":"isPrimitive","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | Primitive","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is a {@link"}},"examples":[" import { isPrimitive } from \\"@commonly/reflect\\"\\r\\risPrimitive(undefined)   //-> true\\risPrimitive(null)        //-> true\\risPrimitive(NaN)         //-> true\\risPrimitive([])          //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link @commonly/type:Primitive | Primitive}."},{"name":"isPromise","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | Promise","description":"is a value to check"}],"typeparameters":[{"name":"TValue","defaultValue":null,"extends":null}],"returnValue":{"type":"boolean","description":"a boolean whether the value is a Promise or not"}},"examples":[" import { isPromise } from \\"@commonly/reflect\\"\\r\\risPromise(new Promise())         //-> true\\risPromise(Promise.resolve())     //-> true\\risPromise(NaN)                   //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise | Promise}."},{"name":"isRegExp","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | RegExp","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is a RegExp or not"}},"examples":[" import { isRegExp } from \\"@commonly/reflect\\"\\r\\risRegExp(new RegExp(\\"ab+c\\"))        //-> true\\risRegExp(/ab+c/)                    //-> true\\risRegExp(NaN)                       //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp | RegExp}."},{"name":"isSet","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | Set","description":"is a value to check"}],"typeparameters":[{"name":"TValue","defaultValue":null,"extends":null}],"returnValue":{"type":"boolean","description":"a boolean whether the value is a Set or not"}},"examples":[" import { isSet } from \\"@commonly/reflect\\"\\r\\risSet(new Set())     //-> true\\risSet(NaN)           //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set | Set}."},{"name":"isString","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | string","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is a string or not"}},"examples":[" import { isString } from \\"@commonly/reflect\\"\\r\\risString(\\"string\\")   //-> true\\risString(null)       //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Glossary/string | string}."},{"name":"isSymbol","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | symbol","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is a symbol or not"}},"examples":[" import { isSymbol } from \\"@commonly/reflect\\"\\r\\risSymbol(Symbol())      //-> true\\risSymbol(NaN)           //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is a {@link https://developer.mozilla.org/en-US/docs/Glossary/symbol | symbol}."},{"name":"isUndefined","since":"1.0.0","remarks":[],"signature":{"parameters":[{"name":"value","type":"unknown | undefined","description":"is a value to check"}],"typeparameters":[],"returnValue":{"type":"boolean","description":"a boolean whether the value is an undefined or not"}},"examples":["import { isUndefined } from \\"@commonly/reflect\\"\\r\\risUndefined(undefined)   //-> true\\risUndefined(null)        //-> false\\r"],"metadata":{"source":null,"specification":null},"description":"Check if a given value is an {@link https://developer.mozilla.org/en-US/docs/Glossary/undefined | undefined}."}]')},jLYJ:function(e){e.exports=JSON.parse('{"name":"@commonly/reflect","version":"0.1.0-next.13","description":"Collection of reflection utilities.","main":"./index.js","types":"./index.d.ts","scripts":{"build":"npm run clean && cmnybuild","clean":"cmnyclean","test":"cmnytest","document":"cmnydocument ./","prepack":"npm run build && npm run test"},"publishConfig":{"access":"public"},"files":["package.json","README.md","CHANGELOG.md","**/*.js","**/*.d.ts","**/*.d.ts.map"],"author":"Mateusz Pietrzak","homepage":"https://github.com/commonlyjs/commonly-buildtools","repository":"https://github.com/commonlyjs/commonly-buildtools","bugs":"https://github.com/commonlyjs/commonly-buildtools/issues","license":"MIT","keywords":["commonly","reflect"]}')},wZee:function(e,a,t){(function(a){t("rGqo"),t("yt8O"),t("RW0V"),t("Oyvg"),t("SRfc"),t("8+KV"),t("HAE/"),t("a1Th"),t("h7Nl"),t("Btvt"),t("pIFo"),t("bWfx"),t("LK8F");var n=function(e){var a=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(a,t){var r,i,l=n.util.type(a);switch(t=t||{},l){case"Object":if(i=n.util.objId(a),t[i])return t[i];for(var s in r={},t[i]=r,a)a.hasOwnProperty(s)&&(r[s]=e(a[s],t));return r;case"Array":return i=n.util.objId(a),t[i]?t[i]:(r=[],t[i]=r,a.forEach((function(a,n){r[n]=e(a,t)})),r);default:return a}}},languages:{extend:function(e,a){var t=n.util.clone(n.languages[e]);for(var r in a)t[r]=a[r];return t},insertBefore:function(e,a,t,r){var i=(r=r||n.languages)[e],l={};for(var s in i)if(i.hasOwnProperty(s)){if(s==a)for(var o in t)t.hasOwnProperty(o)&&(l[o]=t[o]);t.hasOwnProperty(s)||(l[s]=i[s])}var c=r[e];return r[e]=l,n.languages.DFS(n.languages,(function(a,t){t===c&&a!=e&&(this[a]=l)})),l},DFS:function e(a,t,r,i){i=i||{};var l=n.util.objId;for(var s in a)if(a.hasOwnProperty(s)){t.call(a,s,a[s],r||s);var o=a[s],c=n.util.type(o);"Object"!==c||i[l(o)]?"Array"!==c||i[l(o)]||(i[l(o)]=!0,e(o,t,s,i)):(i[l(o)]=!0,e(o,t,null,i))}}},plugins:{},highlightAll:function(e,a){n.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,t){var r={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r);for(var i,l=e.querySelectorAll(r.selector),s=0;i=l[s++];)n.highlightElement(i,!0===a,r.callback)},highlightElement:function(t,r,i){for(var l,s="none",o=t;o&&!a.test(o.className);)o=o.parentNode;o&&(s=(o.className.match(a)||[,"none"])[1].toLowerCase(),l=n.languages[s]),t.className=t.className.replace(a,"").replace(/\s+/g," ")+" language-"+s,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(a,"").replace(/\s+/g," ")+" language-"+s));var c={element:t,language:s,grammar:l,code:t.textContent},u=function(e){c.highlightedCode=e,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,n.hooks.run("after-highlight",c),n.hooks.run("complete",c),i&&i.call(c.element)};if(n.hooks.run("before-sanity-check",c),c.code)if(n.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var m=new Worker(n.filename);m.onmessage=function(e){u(e.data)},m.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(n.highlight(c.code,c.grammar,c.language));else u(n.util.encode(c.code));else n.hooks.run("complete",c)},highlight:function(e,a,t){var i={code:e,grammar:a,language:t};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),r.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,a,t,i,l,s,o){for(var c in t)if(t.hasOwnProperty(c)&&t[c]){if(c==o)return;var u=t[c];u="Array"===n.util.type(u)?u:[u];for(var m=0;m<u.length;++m){var p=u[m],d=p.inside,g=!!p.lookbehind,f=!!p.greedy,h=0,v=p.alias;if(f&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var b=i,k=l;b<a.length;k+=a[b].length,++b){var w=a[b];if(a.length>e.length)return;if(!(w instanceof r)){if(f&&b!=a.length-1){if(p.lastIndex=k,!(A=p.exec(e)))break;for(var E=A.index+(g?A[1].length:0),x=A.index+A[0].length,F=b,N=k,S=a.length;F<S&&(N<x||!a[F].type&&!a[F-1].greedy);++F)E>=(N+=a[F].length)&&(++b,k=N);if(a[b]instanceof r)continue;j=F-b,w=e.slice(k,N),A.index-=k}else{p.lastIndex=0;var A=p.exec(w),j=1}if(A){g&&(h=A[1]?A[1].length:0);x=(E=A.index+h)+(A=A[0].slice(h)).length;var C=w.slice(0,E),P=w.slice(x),O=[b,j];C&&(++b,k+=C.length,O.push(C));var _=new r(c,d?n.tokenize(A,d):A,v,A,f);if(O.push(_),P&&O.push(P),Array.prototype.splice.apply(a,O),1!=j&&n.matchGrammar(e,a,t,b,k,!0,c),s)break}else if(s)break}}}}},tokenize:function(e,a){var t=[e],r=a.rest;if(r){for(var i in r)a[i]=r[i];delete a.rest}return n.matchGrammar(e,t,a,0,0,!1),t},hooks:{all:{},add:function(e,a){var t=n.hooks.all;t[e]=t[e]||[],t[e].push(a)},run:function(e,a){var t=n.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(a)}},Token:r};function r(e,a,t,n,r){this.type=e,this.content=a,this.alias=t,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=n,r.stringify=function(e,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,a)})).join("");var t={type:e.type,content:r.stringify(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(t.classes,i)}n.hooks.run("wrap",t);var l=Object.keys(t.attributes).map((function(e){return e+'="'+(t.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+t.tag+' class="'+t.classes.join(" ")+'"'+(l?" "+l:"")+">"+t.content+"</"+t.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(a){var t=JSON.parse(a.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(n.highlight(i,n.languages[r],r)),l&&e.close()}),!1),n):n;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==a&&(a.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,a){var t={};t["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[a]},t.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};r["language-"+a]={pattern:/[\s\S]+/,inside:n.languages[a]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",i)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var a=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+a.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+a.source+")*?(?=\\s*\\{)"),string:{pattern:a,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var t,r=e.getAttribute("data-src"),i=e,l=/\blang(?:uage)?-([\w-]+)\b/i;i&&!l.test(i.className);)i=i.parentNode;if(i&&(t=(e.className.match(l)||[,""])[1]),!t){var s=(r.match(/\.(\w+)$/)||[,""])[1];t=a[s]||s}var o=document.createElement("code");o.className="language-"+t,e.textContent="",o.textContent="Loading…",e.appendChild(o);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,n.highlightElement(o),e.setAttribute("data-src-loaded","")):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)}})),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",(function(e){var a=e.element.parentNode;if(a&&/pre/i.test(a.nodeName)&&a.hasAttribute("data-src")&&a.hasAttribute("data-download-link")){var t=a.getAttribute("data-src"),n=document.createElement("a");return n.textContent=a.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=t,n}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,t("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-api-tsx-1d56395d569e0b3d9a29.js.map