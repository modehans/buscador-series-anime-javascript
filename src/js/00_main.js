'use strict';
const userInput = document.querySelector('.js_userInput');
const buttonSearch = document.querySelector('.js_buttonSearch');
const resultsSearch = document.querySelector('.js_resultsSearch');
let series = [];

const renderCard = () => {
  let html = '';
  for (const oneSerie of series) {
    html += ` <div class="card js-card">`;
    html += ` <h3 class="card__title">${oneSerie.title}</h3>`;
    html += ` <img class="card__image" src="${oneSerie.images.jpg.image_url}"/>`;
    html += `</div>`;
  }
  console.log('Buenos días!!');
  resultsSearch.innerHTML = html;
};

fetch('https://api.jikan.moe/v4/anime?q=naruto')
  .then((response) => response.json())
  .then((json) => {
    series = json.data;
    console.log(series);
    renderCard();
  });
