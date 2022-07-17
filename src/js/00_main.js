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
    const newImage = `https://via.placeholder.com/210x295/fc9303/666666/?text=${oneSerie.title}`;
    html += ` <div class="card js-card">`;
    html += ` <h3 class="card__title">${oneSerie.title}</h3>`;
    if (oneSerie.image === imageNotFound) {
      html += ` <img class="card__image" src="${newImage}"/>`;
    } else {
      html += ` <img class="card__image" src="${oneSerie.image}"/>`;
    }
    html += `</div>`;
  }
  resultsSearch.innerHTML = html;
};
const rendertListSeries = () => {
  const nameUserSerie = userInput.value.toLowerCase();
  fetch(`https://api.jikan.moe/v4/anime?q=${nameUserSerie}`)
    .then((response) => response.json())
    .then((json) => {
      seriesSearch = json.data.map(({ mal_id, title, images }) => ({
        id: mal_id,
        title: title,
        image: images.jpg.image_url,
      }));
      renderCards(seriesSearch);
      console.log(seriesSearch);
    });
};
const handleClickSearch = (ev) => {
  ev.preventDefault();
  rendertListSeries();
};

const handleEnterKey = (ev) => {
  if (ev && ev.key === 'Enter') {
    ev.preventDefault();
    handleClickSearch(ev);
  }
};

buttonSearch.addEventListener('click', handleClickSearch);
userInput.addEventListener('keypress', handleEnterKey);
