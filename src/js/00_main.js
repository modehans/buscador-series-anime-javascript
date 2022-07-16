'use strict';
const userInput = document.querySelector('.js_userInput');
const buttonSearch = document.querySelector('.js_buttonSearch');
const resultsSearch = document.querySelector('.js_resultsSearch');
let seriesSearch = [];

const renderCards = (arrayData) => {
  let html = '';
  const imageNotFound =
    'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png';

  for (const oneSerie of arrayData) {
    let urlImageSerie = `${oneSerie.images.jpg.image_url}`;
    const newImage = `https://via.placeholder.com/210x295/ffffff/666666/?text=${oneSerie.title}`;
    html += ` <div class="card js-card">`;
    html += ` <h3 class="card__title">${oneSerie.title}</h3>`;
    if (urlImageSerie === imageNotFound) {
      html += ` <img class="card__image" src="${newImage}"/>`;
    } else {
      html += ` <img class="card__image" src="${urlImageSerie}"/>`;
    }
    html += `</div>`;
  }
  resultsSearch.innerHTML = html;
};

const handleClickSearch = (ev) => {
  ev.preventDefault();
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
