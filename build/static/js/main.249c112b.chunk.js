(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),l=(n(13),n(1));n(15);var i=function(e){var t=e.text;return c.a.createElement("h1",null,t)};var u=function(e){var t=e.movie;return c.a.createElement("div",{className:"movie"},c.a.createElement("img",{alt:"Poster for ".concat(t.Title),src:"N/A"===t.Poster?"https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg":t.Poster}),c.a.createElement("a",{href:"https://www.imdb.com/title/".concat(t.imdbID)},c.a.createElement("strong",null,t.Title)),c.a.createElement("span",null,"(",t.Year,") "))};var m=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],o=n[1],i=function(t){e.search(r),o("")};return c.a.createElement("div",{className:"search"},c.a.createElement("form",null,c.a.createElement("input",{value:r,onChange:function(e){return function(e){o(e.target.value)}(e)},type:"text",placeholder:"Type the name"}),c.a.createElement("button",{onClick:function(e){return function e(t){t.preventDefault(),document.querySelector(".search > form:nth-child(1) > input:nth-child(1)").style.width="20rem",t.target.removeEventListener("click",e),t.target.addEventListener("click",i())}(e)}},c.a.createElement("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"20x",height:"20px"},c.a.createElement("path",{d:"M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"})))))};var s=function(){var e="http://www.omdbapi.com/?apikey=44b62668&s=",t=Object(a.useState)(!0),n=Object(l.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)([]),h=Object(l.a)(s,2),f=h[0],p=h[1],v=Object(a.useState)(null),d=Object(l.a)(v,2),E=d[0],b=d[1];return Object(a.useEffect)(function(){fetch("".concat(e,"batman")).then(function(e){return e.json()}).then(function(e){p(e.Search),o(!1)})},[]),c.a.createElement("div",{className:"container"},c.a.createElement(i,{className:"Header",text:"Movie Search App"}),c.a.createElement(m,{search:function(t){o(!0),b(null),fetch(e+t).then(function(e){return e.json()}).then(function(e){"True"===e.Response?(p(e.Search),o(!1)):(b(e.Error),o(!1))})}}),c.a.createElement("div",{className:"movieContainer"},r&&!E?c.a.createElement("p",null,"Loading"):null!==E?c.a.createElement("p",{className:"err"},E):f.map(function(e,t){return c.a.createElement(u,{key:"".concat(e.imdbID,"-").concat(e.Title),movie:e})})))},h=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,18)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null))),h()},4:function(e,t,n){e.exports=n(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.249c112b.chunk.js.map