"use strict";

const list = document.querySelector('.projects__items--js');
const button = document.querySelector('.button__more--js');

fetch('https://api.github.com/users/piotrn-87/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repository of repos) {
      const {
        name,
        description,
        homepage,
        html_url
      } = repository;
      list.innerHTML +=
        `<li class="projects__item">
        <div class="projects__wrapper">
        <img class="projects__logo" src="assets/img/github.svg" alt="github icon">
        <h3 class="projects__name">${name}</h3> 
        ${description ? `<p class="projects__description">${description}</p>`: `no description`
        }
        </div>
            <a class="projects__link" 
            href="${repository.html_url}"> ${repository.name}</a></li>`;
    }
  })

  .catch(error => {
    console.log('cant find github API');
  })