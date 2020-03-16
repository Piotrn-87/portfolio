"use strict";

const list = document.querySelector(".container__projects--js");
const button = document.querySelector(".button__load--js");

let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
  let progressHeight = (window.pageYOffset / (totalHeight * 1.25)) * 100;
  progress.style.height = progressHeight + "%";
};

const loadRepo = () => {
  fetch(
    "https://api.github.com/users/piotrn-87/repos?sort=updated&direction=desc"
  )
    .then(resp => resp.json())
    .then(resp => {
      localStorage.setItem("data", JSON.stringify(resp));
      repositories(resp.slice(0, 4));
    })
    .catch(error => {
      console.log("cant find github API");
    });
};

const repositories = repo => {
  if (repo.length) {
    let tempData = repo;
    list.innerHTML = "";
    let moreData = repo.length + 4;
    button.addEventListener("click", () => {
      let tempData = JSON.parse(localStorage.getItem("data")).slice(
        0,
        moreData
      );
      if (moreData >= JSON.parse(localStorage.getItem("data")).length) {
        button.style.display = "none";
      }
      repositories(tempData);
    });
    for (const repository of tempData) {
      const { name, description, homepage, html_url } = repository;
      list.innerHTML += `<li class="project">
          <div class="project__wrapper">
          <img class="project__logo" src="assets/img/github.svg" alt="github image">
          <h3 class="project__name">${name}</h3> 
          ${
            description
              ? `<p class="project__description">${description}</p>`
              : "no description"
          }
          </div>
          <div class="project__footer">
          ${
            homepage
              ? `<a class="project__link project__link--active" href="${homepage}" target="_blank" title="Demo : ${name}">Demo</a>`
              : ""
          }
          <a class="project__link" href="${html_url}" target="_blank" title="source : ${name}">Github</a>
          </div>
        </li>
        `;
    }
  }
};
loadRepo();
