!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){let o=n(1);e.exports={endpoint:function(e){return o.isDev()?"http://localhost:9999"+e:e},options:function(){let e={credentials:"include"};return o.isDev()&&(e.mode="cors"),e}}},function(e,t){e.exports={isDev:function(){return"localhost"===window.location.hostname}}},function(e,t,n){n(3),n(4);let o=n(5),r=n(6);["os","arch","version"].map(function(e){!function(e){let t="#"+e+" > .button",n=document.querySelectorAll(t),o=document.querySelectorAll("tbody tr"),r=e+"-hide";n.forEach(t=>{t.addEventListener("click",c=>{let i=t.dataset[e];n.forEach(e=>{e.classList.remove("is-success")}),t.classList.add("is-success"),o.forEach(e=>{e.classList.contains(i)?e.classList.remove(r):e.classList.add(r)})})})}(e)}),o.fetch(),document.querySelectorAll(".copy").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),console.log(e.target.href);let t={url:e.target.href};r.event(t).then(()=>{o.fetch()});let n=document.createElement("textarea");return n.value=e.target.href,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),!1})})},function(e,t,n){},function(e,t,n){let o=n(0),r=document.getElementById("remember-me"),c=new Request(o.endpoint("/cookie"));function i(){r.removeEventListener("click",s),r.innerText="Forget me",r.addEventListener("click",u)}function l(){r.removeEventListener("click",u),r.innerText="Remember me",r.addEventListener("click",s)}function s(e){e.preventDefault(),r.disabled=!0,fetch(c,o.options()).then(()=>{i(),r.disabled=!1}).catch(e=>console.log(e))}function u(e){e.preventDefault(),r.disabled=!0,document.cookie="downloadkubernetes=; expires=Thu, 01 Jan 1970 00:00:00 GMT;",location.reload(),l(),r.disabled=!1}document.cookie.includes("downloadkubernetes")?i():l()},function(e,t,n){let o=n(0);e.exports={fetch:function(){if(1!=document.cookie.split(";").filter(e=>e.trim().startsWith("downloadkubernetes=")).length)return;let e=o.endpoint("/recent-downloads");o.options().cache="no-cache",fetch(e,o.options()).then(e=>{e.ok&&e.json().then(e=>{document.querySelectorAll(".recent-marker").forEach(e=>{e.remove()}),e.map(e=>{let t=document.querySelector("tbody"),n=document.querySelector('[href="'+e+'"]');n.insertAdjacentElement("afterend",function(){let e=document.createElement("span");e.classList.add("icon","recent-marker");let t=document.createElement("i");return t.classList.add("fas","fa-star"),e.appendChild(t),e}());let o=n.parentElement.closest("tr");t.insertBefore(o,t.firstChild)})})})}}},function(e,t,n){let o=n(0),r=n(1);e.exports={event:function(e){let t=o.options();return t.method="POST",t.body=JSON.stringify(e),fetch(o.endpoint("/link-copied"),t).then(e=>{r.isDev()&&console.log(e)})}}}]);