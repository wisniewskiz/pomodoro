parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=t(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return s=e.done,e},e:function(e){l=!0,c=e},f:function(){try{s||null==o.return||o.return()}finally{if(l)throw c}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var o=document.querySelectorAll(".selector__item"),r=document.querySelector("#selectPom"),a=document.querySelector("#selectShort"),c=document.querySelector("#selectLong"),s=document.querySelector(".progress--ring__circle--progress"),l=document.querySelector(".timer__countdown--button"),i=document.querySelector(".timer"),u=document.querySelector(".settings__icon"),g=document.querySelector(".settings__close"),d=document.querySelector(".settings__button"),m=document.querySelector("#pom"),p=document.querySelector("#pomUp"),S=document.querySelector("#pomDown"),v=document.querySelector("#short"),f=document.querySelector("#shortUp"),y=document.querySelector("#shortDown"),L=document.querySelector("#long"),I=document.querySelector("#longUp"),h=document.querySelector("#longDown"),T=document.querySelector(".overlay"),x=document.querySelector(".settings"),q=document.querySelector(".active"),b=document.querySelector("#minutes"),k=document.querySelector("#seconds");localStorage.setItem("pom","25"),localStorage.setItem("short","5"),localStorage.setItem("long","10");var E=document.querySelector(".test");function _(){T.classList.toggle("onOverlay"),x.classList.toggle("modalOpen")}function w(e,t){var n=e.innerText;1==t?(n++,e.innerHTML=n<10?'<span class="b1 kumbh">0'.concat(n,"</span>"):'<span class="b1 kumbh">'.concat(n,"</span>")):(n--,e.innerHTML=n<10?'<span class="b1 kumbh">0'.concat(n,"</span>"):'<span class="b1 kumbh">'.concat(n,"</span>"))}u.addEventListener("click",function(){_()}),g.addEventListener("click",function(){_()}),p.addEventListener("click",function(){w(m,1)}),S.addEventListener("click",function(){w(m,-1)}),f.addEventListener("click",function(){w(v,1)}),y.addEventListener("click",function(){w(v,-1)}),I.addEventListener("click",function(){w(L,1)}),h.addEventListener("click",function(){w(L,-1)}),d.addEventListener("click",function(){_(),localStorage.clear(),localStorage.pom=m.innerText,localStorage.short=v.innerText,localStorage.long=L.innerText,r.classList.contains("active")?b.innerText=parseInt(localStorage.pom):a.classList.contains("active")?b.innerText=parseInt(localStorage.short):b.innerText=parseInt(localStorage.long)});var A,M,D=e(o);try{var O=function(){var e=A.value;e.addEventListener("click",function(){e.classList.toggle("active"),q.classList.toggle("active"),q=e})};for(D.s();!(A=D.n()).done;)O()}catch($){D.e($)}finally{D.f()}r.addEventListener("click",function(){r.classList.contains("active")&&(parseInt(localStorage.pom)<10?b.innerText="0".concat(parseInt(localStorage.pom)):b.innerText=parseInt(localStorage.pom),U=60*parseInt(b.innerText))}),a.addEventListener("click",function(){a.classList.contains("active")&&(parseInt(localStorage.short)<10?b.innerText="0".concat(parseInt(localStorage.short)):b.innerText=parseInt(localStorage.short),U=60*parseInt(b.innerText))}),c.addEventListener("click",function(){c.classList.contains("active")&&(parseInt(localStorage.long)<10?b.innerText="0".concat(parseInt(localStorage.long)):b.innerText=parseInt(localStorage.long),U=60*parseInt(b.innerText))});var P=!1,U=60*parseInt(b.innerText)+parseInt(k.innerText),j=U;function V(){l.classList.toggle("start"),l.classList.toggle("puase")}function H(){i.classList.toggle("timer--flowLarge"),i.classList.toggle("timer--flowSmall")}function C(){var e,t=Math.floor(U/60),n=U%60;t=t<10?"0".concat(t):t,n=n<10?"0".concat(n):n,b.innerText=t,k.innerText=n,e=U/j,s.style.strokeDashoffset=2*s.r.baseVal.value*Math.PI-e*(2*s.r.baseVal.value*Math.PI),U>0?(U--,H()):(clearInterval(M),l.classList.toggle("pause"),l.classList.toggle("reset"),l.innerText="reset",P=!1,r.classList.contains("active")&&(U=60*parseInt(localStorage.pom)),a.classList.contains("active")&&(U=60*parseInt(localStorage.short)),c.classList.contains("active")&&(U=60*parseInt(localStorage.long)),j=U),console.log("running time: "+U)}s.style.strokeDasharray=2*s.r.baseVal.value*Math.PI,l.addEventListener("click",function(){!P&&l.classList.contains("start")?(U=60*parseInt(b.innerText)+parseInt(k.innerText),M=setInterval(C,1e3),P=!0,l.classList.toggle("start"),l.classList.toggle("pause"),l.innerText="pause"):P&&l.classList.contains("pause")?(clearInterval(M),console.log("paused time: "+U),l.innerText="resume",P=!1,l.classList.toggle("start"),l.classList.toggle("pause")):!P&&l.classList.contains("reset")&&(r.classList.contains("active")&&(U=60*parseInt(localStorage.pom)),a.classList.contains("active")&&(U=60*parseInt(localStorage.short)),c.classList.contains("active")&&(U=60*parseInt(localStorage.long)),j=U,C(),l.innerText="start",l.classList.toggle("reset"),l.classList.toggle("start"))});
},{}]},{},["A2T1"], null)