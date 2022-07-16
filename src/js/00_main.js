'use strict';
const userInput = document.querySelector('.js_userInput');
const buttonSearch = document.querySelector('.js_buttonSearch');
const resultsSearch = document.querySelector('.js_resultsSearch');
let seriesSearch = [];

const renderCards = (arrayData) => {
  let html = '';
  for (const oneSerie of arrayData) {
    html += ` <div class="card js-card">`;
    html += ` <h3 class="card__title">${oneSerie.title}</h3>`;
    html += ` <img class="card__image" src="${oneSerie.images.jpg.image_url}"/>`;
    html += `</div>`;
  }
  resultsSearch.innerHTML = html;
};

const handleClickSearch = () => {
  const nameUserSerie = userInput.value.toLowerCase();
  fetch(`https://api.jikan.moe/v4/anime?q=${nameUserSerie}`)
    .then((response) => response.json())
    .then((json) => {
      seriesSearch = json.data;
      renderCards(seriesSearch);
    });
};

const handleEnterKey = (ev) => {
  if (ev && ev.key === 'Enter') {
    ev.preventDefault();
    handleClickSearch(ev);
  }
};

buttonSearch.addEventListener('click', handleClickSearch);
userInput.addEventListener('keypress', handleEnterKey);
