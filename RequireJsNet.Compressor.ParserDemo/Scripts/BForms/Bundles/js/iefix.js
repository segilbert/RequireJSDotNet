﻿(function(x,b){function y(){var e=a.elements;return"string"==typeof e?e.split(" "):e}function u(e){var f=z[e[A]];f||(f={},d++,e[A]=d,z[d]=f);return f}function B(e,f,g){f||(f=b);if(c){return f.createElement(e)}g||(g=u(f));f=g.cache[e]?g.cache[e].cloneNode():D.test(e)?(g.cache[e]=g.createElem(e)).cloneNode():g.createElem(e);return f.canHaveChildren&&!E.test(e)?g.frag.appendChild(f):f}function F(e,f){if(!f.cache){f.cache={},f.createElem=e.createElement,f.createFrag=e.createDocumentFragment,f.frag=f.createFrag()}e.createElement=function(g){return !a.shivMethods?f.createElem(g):B(g,e,f)};e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+y().join().replace(/\w+/g,function(g){f.createElem(g);f.frag.createElement(g);return'c("'+g+'")'})+");return n}")(a,f.frag)}function C(e){e||(e=b);var f=u(e);if(a.shivCSS&&!v&&!f.hasCSS){var g,h=e;g=h.createElement("p");h=h.getElementsByTagName("head")[0]||h.documentElement;g.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";g=h.insertBefore(g.lastChild,h.firstChild);f.hasCSS=!!g}c||F(e,f);return e}var w=x.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,D=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v,A="_html5shiv",d=0,z={},c;(function(){try{var e=b.createElement("a");e.innerHTML="<xyz></xyz>";v="hidden" in e;var f;if(!(f=1==e.childNodes.length)){b.createElement("a");var g=b.createDocumentFragment();f="undefined"==typeof g.cloneNode||"undefined"==typeof g.createDocumentFragment||"undefined"==typeof g.createElement}c=f}catch(h){c=v=!0}})();var a={elements:w.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==w.shivCSS,supportsUnknownElements:c,shivMethods:!1!==w.shivMethods,type:"default",shivDocument:C,createElement:B,createDocumentFragment:function(f,g){f||(f=b);if(c){return f.createDocumentFragment()}for(var g=g||u(f),i=g.frag.cloneNode(),j=0,k=y(),l=k.length;j<l;j++){i.createElement(k[j])}return i}};x.html5=a;C(b)})(this,document);/* matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/* NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(l,m){var j,h=l.documentElement,i=h.firstElementChild||h.firstChild,k=l.createElement("body"),n=l.createElement("div");n.id="mq-test-1";n.style.cssText="position:absolute;top:-100em";k.style.background="none";k.appendChild(n);return function(a){n.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>';h.insertBefore(k,i);j=n.offsetWidth==42;h.removeChild(k);return{matches:j,media:a}}})(document);
/* Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(B){B.respond={};respond.update=function(){};respond.mediaQueriesSupported=B.matchMedia&&B.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var T=B.document,P=T.documentElement,F=[],H=[],N=[],L={},E=30,C=T.getElementsByTagName("head")[0]||P,D=T.getElementsByTagName("base")[0],y=C.getElementsByTagName("link"),A=[],x=function(){var d=y,f=d.length,b=0,a,g,c,e;for(;b<f;b++){a=d[b],g=a.href,c=a.media,e=a.rel&&a.rel.toLowerCase()==="stylesheet";if(!!g&&e&&!L[g]){if(a.styleSheet&&a.styleSheet.rawCssText){J(a.styleSheet.rawCssText,g,c);L[g]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(g)&&!D)||g.replace(RegExp.$1,"").split("/")[0]===B.location.host){A.push({href:g,media:c})}}}}R()},R=function(){if(A.length){var a=A.shift();K(a.href,function(b){J(b,a.href,a.media);L[a.href]=true;R()})}},J=function(i,k,m){var g=i.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),j=g&&g.length||0,k=k.substring(0,k.lastIndexOf("/")),l=function(n){return n.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+k+"$2$3")},a=!j&&m,d=0,c,e,f,b,h;if(k.length){k+="/"}if(a){j=1}for(;d<j;d++){c=0;if(a){e=m;H.push(l(i))}else{e=g[d].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;H.push(RegExp.$2&&l(RegExp.$2))}b=e.split(",");h=b.length;for(;c<h;c++){f=b[c];F.push({media:f.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:H.length-1,hasquery:f.indexOf("(")>-1,minw:f.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:f.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}G()},I,O,S=function(){var d,a=T.createElement("div"),b=T.body,c=false;a.style.cssText="position:absolute;font-size:1em;width:1em";if(!b){b=c=T.createElement("body");b.style.background="none"}b.appendChild(a);P.insertBefore(b,P.firstChild);d=a.offsetWidth;if(c){P.removeChild(b)}else{b.removeChild(a)}d=M=parseFloat(d);return d},M,G=function(i){var n="clientWidth",b=P[n],h=T.compatMode==="CSS1Compat"&&b||T.body[n]||b,d={},g=y[y.length-1],p=(new Date()).getTime();if(i&&I&&p-I<E){clearTimeout(O);O=setTimeout(G,E);return}else{I=p}for(var e in F){var k=F[e],c=k.minw,j=k.maxw,a=c===null,l=j===null,o="em";if(!!c){c=parseFloat(c)*(c.indexOf(o)>-1?(M||S()):1)}if(!!j){j=parseFloat(j)*(j.indexOf(o)>-1?(M||S()):1)}if(!k.hasquery||(!a||!l)&&(a||h>=c)&&(l||h<=j)){if(!d[k.media]){d[k.media]=[]}d[k.media].push(H[k.rules])}}for(var e in N){if(N[e]&&N[e].parentNode===C){C.removeChild(N[e])}}for(var e in d){var m=T.createElement("style"),f=d[e].join("\n");m.type="text/css";m.media=e;C.insertBefore(m,g.nextSibling);if(m.styleSheet){m.styleSheet.cssText=f}else{m.appendChild(T.createTextNode(f))}N.push(m)}},K=function(a,c){var b=z();if(!b){return}b.open("GET",a,true);b.onreadystatechange=function(){if(b.readyState!=4||b.status!=200&&b.status!=304){return}c(b.responseText)};if(b.readyState==4){return}b.send(null)},z=(function(){var a=false;try{a=new XMLHttpRequest()}catch(b){a=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return a}})();x();respond.update=x;function Q(){G(true)}if(B.addEventListener){B.addEventListener("resize",Q,false)}else{if(B.attachEvent){B.attachEvent("onresize",Q)}}})(this);