!function(c){var t={};function I(g){if(t[g])return t[g].exports;var n=t[g]={i:g,l:!1,exports:{}};return c[g].call(n.exports,n,n.exports,I),n.l=!0,n.exports}I.m=c,I.c=t,I.d=function(c,t,g){I.o(c,t)||Object.defineProperty(c,t,{enumerable:!0,get:g})},I.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},I.t=function(c,t){if(1&t&&(c=I(c)),8&t)return c;if(4&t&&"object"==typeof c&&c&&c.__esModule)return c;var g=Object.create(null);if(I.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:c}),2&t&&"string"!=typeof c)for(var n in c)I.d(g,n,function(t){return c[t]}.bind(null,n));return g},I.n=function(c){var t=c&&c.__esModule?function(){return c.default}:function(){return c};return I.d(t,"a",t),t},I.o=function(c,t){return Object.prototype.hasOwnProperty.call(c,t)},I.p="",I(I.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\nconst list = document.querySelector(\'.container__projects--js\');\r\nconst button = document.querySelector(\'.button__load--js\');\r\n\r\n// fetch(\'https://api.github.com/users/piotrn-87/repos?sort=updated&direction=desc\')\r\n//   .then(resp => resp.json())\r\n//   .then(resp => {\r\n//     const repos = resp;\r\n\r\n//     for (const repository of repos) {\r\n//       const {\r\n//         name,\r\n//         description,\r\n//         homepage,\r\n//         html_url\r\n//       } = repository;\r\n//       list.innerHTML +=\r\n//         `<li class="project">\r\n//           <div class="project__wrapper">\r\n//           <img class="project__logo" src="assets/img/github.svg" alt="github image">\r\n//           <h3 class="project__name">${name}</h3> \r\n//           ${description ? `<p class="project__description">${description}</p>`: \'no description\'\r\n//           }\r\n//           </div>\r\n//           <div class="project__footer">\r\n//           ${homepage ? `<a class="project__link project__link--active" href="${homepage}" target="_blank" title="Demo : ${name}">Demo</a>` : \'\'\r\n//           }\r\n//           <a class="project__link" href="${html_url}" target="_blank" title="source : ${name}">Github</a>\r\n//           </div>\r\n//         </li>\r\n//         `;\r\n//     }\r\n//   })\r\n//   .catch(error => {\r\n//     console.log(\'cant find github API\');\r\n//   })\r\n\r\nconst loadRepo = () => {\r\n  fetch("https://api.github.com/users/piotrn-87/repos?sort=updated&direction=desc")\r\n    .then(resp => resp.json())\r\n    .then(resp => {\r\n      localStorage.setItem(\'Data\', JSON.stringify(resp))\r\n      repositories(resp.slice(0, 4));\r\n    })\r\n    .catch((error) => {\r\n      console.log(\'cant find github API\');\r\n    });\r\n}\r\n\r\nconst repositories = (e) => {\r\n  if (e.length) {\r\n    let tempData = e;\r\n    list.innerHTML = \'\';\r\n    let moreData = e.length + 4;\r\n    button.addEventListener(\'click\', () => {\r\n      let tempData = JSON.parse(localStorage.getItem(\'Data\')).slice(0, moreData)\r\n      if (moreData >= JSON.parse(localStorage.getItem(\'Data\')).length) {\r\n        buttonMore.style.display = \'none\';\r\n      }\r\n      repositories(tempData)\r\n    })\r\n    for (const repository of tempData) {\r\n      const {\r\n        name,\r\n        description,\r\n        homepage,\r\n        html_url\r\n      } = repository;\r\n      list.innerHTML +=\r\n        `<li class="project">\r\n          <div class="project__wrapper">\r\n          <img class="project__logo" src="assets/img/github.svg" alt="github image">\r\n          <h3 class="project__name">${name}</h3> \r\n          ${description ? `<p class="project__description">${description}</p>`: \'no description\'\r\n          }\r\n          </div>\r\n          <div class="project__footer">\r\n          ${homepage ? `<a class="project__link project__link--active" href="${homepage}" target="_blank" title="Demo : ${name}">Demo</a>` : \'\'\r\n          }\r\n          <a class="project__link" href="${html_url}" target="_blank" title="source : ${name}">Github</a>\r\n          </div>\r\n        </li>\r\n        `;\r\n    }\r\n  }\r\n}\r\n\r\nloadRepo();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLEtBQUs7QUFDOUMsZUFBZSxpREFBaUQsWUFBWTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFtRSxTQUFTLGtDQUFrQyxLQUFLO0FBQ2xJO0FBQ0EsOENBQThDLFNBQVMsb0NBQW9DLEtBQUs7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQyxZQUFZLGlEQUFpRCxZQUFZO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUVBQW1FLFNBQVMsa0NBQWtDLEtBQUs7QUFDL0g7QUFDQSwyQ0FBMkMsU0FBUyxvQ0FBb0MsS0FBSztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX3Byb2plY3RzLS1qcycpO1xyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX19sb2FkLS1qcycpO1xyXG5cclxuLy8gZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvcGlvdHJuLTg3L3JlcG9zP3NvcnQ9dXBkYXRlZCZkaXJlY3Rpb249ZGVzYycpXHJcbi8vICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcclxuLy8gICAudGhlbihyZXNwID0+IHtcclxuLy8gICAgIGNvbnN0IHJlcG9zID0gcmVzcDtcclxuXHJcbi8vICAgICBmb3IgKGNvbnN0IHJlcG9zaXRvcnkgb2YgcmVwb3MpIHtcclxuLy8gICAgICAgY29uc3Qge1xyXG4vLyAgICAgICAgIG5hbWUsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb24sXHJcbi8vICAgICAgICAgaG9tZXBhZ2UsXHJcbi8vICAgICAgICAgaHRtbF91cmxcclxuLy8gICAgICAgfSA9IHJlcG9zaXRvcnk7XHJcbi8vICAgICAgIGxpc3QuaW5uZXJIVE1MICs9XHJcbi8vICAgICAgICAgYDxsaSBjbGFzcz1cInByb2plY3RcIj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X193cmFwcGVyXCI+XHJcbi8vICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdF9fbG9nb1wiIHNyYz1cImFzc2V0cy9pbWcvZ2l0aHViLnN2Z1wiIGFsdD1cImdpdGh1YiBpbWFnZVwiPlxyXG4vLyAgICAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdF9fbmFtZVwiPiR7bmFtZX08L2gzPiBcclxuLy8gICAgICAgICAgICR7ZGVzY3JpcHRpb24gPyBgPHAgY2xhc3M9XCJwcm9qZWN0X19kZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9wPmA6ICdubyBkZXNjcmlwdGlvbidcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2Zvb3RlclwiPlxyXG4vLyAgICAgICAgICAgJHtob21lcGFnZSA/IGA8YSBjbGFzcz1cInByb2plY3RfX2xpbmsgcHJvamVjdF9fbGluay0tYWN0aXZlXCIgaHJlZj1cIiR7aG9tZXBhZ2V9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJEZW1vIDogJHtuYW1lfVwiPkRlbW88L2E+YCA6ICcnXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICA8YSBjbGFzcz1cInByb2plY3RfX2xpbmtcIiBocmVmPVwiJHtodG1sX3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cInNvdXJjZSA6ICR7bmFtZX1cIj5HaXRodWI8L2E+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgIGA7XHJcbi8vICAgICB9XHJcbi8vICAgfSlcclxuLy8gICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2NhbnQgZmluZCBnaXRodWIgQVBJJyk7XHJcbi8vICAgfSlcclxuXHJcbmNvbnN0IGxvYWRSZXBvID0gKCkgPT4ge1xyXG4gIGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9waW90cm4tODcvcmVwb3M/c29ydD11cGRhdGVkJmRpcmVjdGlvbj1kZXNjXCIpXHJcbiAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhJywgSlNPTi5zdHJpbmdpZnkocmVzcCkpXHJcbiAgICAgIHJlcG9zaXRvcmllcyhyZXNwLnNsaWNlKDAsIDQpKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjYW50IGZpbmQgZ2l0aHViIEFQSScpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHJlcG9zaXRvcmllcyA9IChlKSA9PiB7XHJcbiAgaWYgKGUubGVuZ3RoKSB7XHJcbiAgICBsZXQgdGVtcERhdGEgPSBlO1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIGxldCBtb3JlRGF0YSA9IGUubGVuZ3RoICsgNDtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IHRlbXBEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRGF0YScpKS5zbGljZSgwLCBtb3JlRGF0YSlcclxuICAgICAgaWYgKG1vcmVEYXRhID49IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0RhdGEnKSkubGVuZ3RoKSB7XHJcbiAgICAgICAgYnV0dG9uTW9yZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICAgIHJlcG9zaXRvcmllcyh0ZW1wRGF0YSlcclxuICAgIH0pXHJcbiAgICBmb3IgKGNvbnN0IHJlcG9zaXRvcnkgb2YgdGVtcERhdGEpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaG9tZXBhZ2UsXHJcbiAgICAgICAgaHRtbF91cmxcclxuICAgICAgfSA9IHJlcG9zaXRvcnk7XHJcbiAgICAgIGxpc3QuaW5uZXJIVE1MICs9XHJcbiAgICAgICAgYDxsaSBjbGFzcz1cInByb2plY3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0X193cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdF9fbG9nb1wiIHNyYz1cImFzc2V0cy9pbWcvZ2l0aHViLnN2Z1wiIGFsdD1cImdpdGh1YiBpbWFnZVwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdF9fbmFtZVwiPiR7bmFtZX08L2gzPiBcclxuICAgICAgICAgICR7ZGVzY3JpcHRpb24gPyBgPHAgY2xhc3M9XCJwcm9qZWN0X19kZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9wPmA6ICdubyBkZXNjcmlwdGlvbidcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2Zvb3RlclwiPlxyXG4gICAgICAgICAgJHtob21lcGFnZSA/IGA8YSBjbGFzcz1cInByb2plY3RfX2xpbmsgcHJvamVjdF9fbGluay0tYWN0aXZlXCIgaHJlZj1cIiR7aG9tZXBhZ2V9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJEZW1vIDogJHtuYW1lfVwiPkRlbW88L2E+YCA6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8YSBjbGFzcz1cInByb2plY3RfX2xpbmtcIiBocmVmPVwiJHtodG1sX3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cInNvdXJjZSA6ICR7bmFtZX1cIj5HaXRodWI8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5sb2FkUmVwbygpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);