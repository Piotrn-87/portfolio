!function(c){var t={};function e(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return c[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=c,e.c=t,e.d=function(c,t,n){e.o(c,t)||Object.defineProperty(c,t,{enumerable:!0,get:n})},e.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},e.t=function(c,t){if(1&t&&(c=e(c)),8&t)return c;if(4&t&&"object"==typeof c&&c&&c.__esModule)return c;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:c}),2&t&&"string"!=typeof c)for(var r in c)e.d(n,r,function(t){return c[t]}.bind(null,r));return n},e.n=function(c){var t=c&&c.__esModule?function(){return c.default}:function(){return c};return e.d(t,"a",t),t},e.o=function(c,t){return Object.prototype.hasOwnProperty.call(c,t)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\nconst list = document.querySelector(\'.container__projects--js\');\r\nconst button = document.querySelector(\'.button__load--js\');\r\n\r\nconst loadRepo = () => {\r\n  fetch("https://api.github.com/users/piotrn-87/repos?sort=updated&direction=desc")\r\n    .then(resp => resp.json())\r\n    .then(resp => {\r\n      localStorage.setItem(\'data\', JSON.stringify(resp))\r\n      repositories(resp.slice(0, 4));\r\n    })\r\n    .catch((error) => {\r\n      console.log(\'cant find github API\');\r\n    });\r\n}\r\n\r\nconst repositories = (repo) => {\r\n  if (repo.length) {\r\n    let tempData = repo;\r\n    list.innerHTML = \'\';\r\n    let moreData = repo.length + 4;\r\n    button.addEventListener(\'click\', () => {\r\n      let tempData = JSON.parse(localStorage.getItem(\'data\')).slice(0, moreData)\r\n      if (moreData >= JSON.parse(localStorage.getItem(\'data\')).length) {\r\n        button.style.display = \'none\';\r\n      }\r\n      repositories(tempData)\r\n    })\r\n    for (const repository of tempData) {\r\n      const {\r\n        name,\r\n        description,\r\n        homepage,\r\n        html_url\r\n      } = repository;\r\n      list.innerHTML +=\r\n        `<li class="project">\r\n          <div class="project__wrapper">\r\n          <img class="project__logo" src="assets/img/github.svg" alt="github image">\r\n          <h3 class="project__name">${name}</h3> \r\n          ${description ? `<p class="project__description">${description}</p>`: \'no description\'\r\n          }\r\n          </div>\r\n          <div class="project__footer">\r\n          ${homepage ? `<a class="project__link project__link--active" href="${homepage}" target="_blank" title="Demo : ${name}">Demo</a>` : \'\'\r\n          }\r\n          <a class="project__link" href="${html_url}" target="_blank" title="source : ${name}">Github</a>\r\n          </div>\r\n        </li>\r\n        `;\r\n    }\r\n  }\r\n}\r\n\r\nloadRepo();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQyxZQUFZLGlEQUFpRCxZQUFZO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQW1FLFNBQVMsa0NBQWtDLEtBQUs7QUFDL0g7QUFDQSwyQ0FBMkMsU0FBUyxvQ0FBb0MsS0FBSztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX3Byb2plY3RzLS1qcycpO1xyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19sb2FkLS1qcycpO1xyXG5cclxuY29uc3QgbG9hZFJlcG8gPSAoKSA9PiB7XHJcbiAgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3Bpb3Rybi04Ny9yZXBvcz9zb3J0PXVwZGF0ZWQmZGlyZWN0aW9uPWRlc2NcIilcclxuICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXHJcbiAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShyZXNwKSlcclxuICAgICAgcmVwb3NpdG9yaWVzKHJlc3Auc2xpY2UoMCwgNCkpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2NhbnQgZmluZCBnaXRodWIgQVBJJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgcmVwb3NpdG9yaWVzID0gKHJlcG8pID0+IHtcclxuICBpZiAocmVwby5sZW5ndGgpIHtcclxuICAgIGxldCB0ZW1wRGF0YSA9IHJlcG87XHJcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgbGV0IG1vcmVEYXRhID0gcmVwby5sZW5ndGggKyA0O1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgdGVtcERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhJykpLnNsaWNlKDAsIG1vcmVEYXRhKVxyXG4gICAgICBpZiAobW9yZURhdGEgPj0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKS5sZW5ndGgpIHtcclxuICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgICByZXBvc2l0b3JpZXModGVtcERhdGEpXHJcbiAgICB9KVxyXG4gICAgZm9yIChjb25zdCByZXBvc2l0b3J5IG9mIHRlbXBEYXRhKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGhvbWVwYWdlLFxyXG4gICAgICAgIGh0bWxfdXJsXHJcbiAgICAgIH0gPSByZXBvc2l0b3J5O1xyXG4gICAgICBsaXN0LmlubmVySFRNTCArPVxyXG4gICAgICAgIGA8bGkgY2xhc3M9XCJwcm9qZWN0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cInByb2plY3RfX2xvZ29cIiBzcmM9XCJhc3NldHMvaW1nL2dpdGh1Yi5zdmdcIiBhbHQ9XCJnaXRodWIgaW1hZ2VcIj5cclxuICAgICAgICAgIDxoMyBjbGFzcz1cInByb2plY3RfX25hbWVcIj4ke25hbWV9PC9oMz4gXHJcbiAgICAgICAgICAke2Rlc2NyaXB0aW9uID8gYDxwIGNsYXNzPVwicHJvamVjdF9fZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9ufTwvcD5gOiAnbm8gZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X19mb290ZXJcIj5cclxuICAgICAgICAgICR7aG9tZXBhZ2UgPyBgPGEgY2xhc3M9XCJwcm9qZWN0X19saW5rIHByb2plY3RfX2xpbmstLWFjdGl2ZVwiIGhyZWY9XCIke2hvbWVwYWdlfVwiIHRhcmdldD1cIl9ibGFua1wiIHRpdGxlPVwiRGVtbyA6ICR7bmFtZX1cIj5EZW1vPC9hPmAgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJwcm9qZWN0X19saW5rXCIgaHJlZj1cIiR7aHRtbF91cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJzb3VyY2UgOiAke25hbWV9XCI+R2l0aHViPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubG9hZFJlcG8oKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);