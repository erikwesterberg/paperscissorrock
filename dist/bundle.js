!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=document.querySelectorAll(".choice"),o=document.querySelector(".modal"),u=document.getElementById("result"),s=document.getElementById("restart"),c=function(e){s.style.display="inline-block";var t=e.target.id,n=a(),r=i(t,n);l(r,n)},a=function(){var e=Math.random();return e<.34?"rock":e<=.67?"paper":"scissors"},i=function(e,t){return e===t?"draw":"rock"===e?"paper"===t?"computer":"user":"user"===e?"scissors"===t?"computer":"user":"scissors"===e?"rock"===t?"computer":"user":void 0},l=function(e,t){u.innerHTML="user"===e?'\n       <h1 class="text-win">You killed it!</h1>\n       <button class="fas fa-hand-'+t+' fa-10x"></button>\n       <p>Computer chose <strong>'+t+"</strong></p>\n       ":"computer"===e?'\n       <h1 class="text-lose">You got killed!</h1>\n       <button class="fas fa-hand-'+t+' fa-10x"></button>\n       <p>Computer chose <strong>'+t+"</strong></p>\n       ":'\n       <h1>"Its A Draw"</h1>\n       <button class="fas fa-hand-'+t+' fa-10x"></button>\n       <p>Computer chose <strong>'+t+"</strong></p>\n       ",o.style.display="block"};r.forEach(function(e){return e.addEventListener("click",c)}),window.addEventListener("click",function(e){e.target==o&&(o.style.display="none")})}]);