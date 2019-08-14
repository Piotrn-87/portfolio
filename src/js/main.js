"use strict";

const list = document.querySelector('.container__projects--js');
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
        `<li class="project">
          <div class="project__wrapper">
          <img class="project__logo" src="assets/img/github.svg" alt="github image">
          <h3 class="project__name">${name}</h3> 
          ${description ? `<p class="project__description">${description}</p>`: 'no description'
          }
          </div>
          <div class="project__footer">
          ${homepage ? `<a class="project__link project__link--active" href="${homepage}" target="_blank" title="Demo : ${name}">Demo</a>` : ''
          }
          <a class="project__link" href="${html_url}" target="_blank" title="source : ${name}">Github</a>
          </div>
        </li>
        `;
    }
  })

  .catch(error => {
    console.log('cant find github API');
  })


$(document).on("scroll", function () {

  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();

  const firstSection = $(".skills-list--first");
  const firstSectionFromTop = firstSection.offset().top;
  const firstSectionHeight = firstSection.height();

  const secondSection = $(".skills-list--second");
  const secondSectionFromTop = secondSection.offset().top;
  const secondSectionHeight = secondSection.height();

  const thirdSection = $(".skills-list--third");
  const thirdSectionFromTop = thirdSection.offset().top;
  const thirdSectionHeight = thirdSection.height();

  if (scrollValue > firstSectionFromTop + firstSectionHeight - windowHeight) {
    firstSection.addClass("active");
  }

  if (scrollValue > secondSectionFromTop + secondSectionHeight - windowHeight) {
    secondSection.addClass("active");
  }
  if (scrollValue > thirdSectionFromTop + thirdSectionHeight - windowHeight) {
    thirdSection.addClass("active");
  }
})