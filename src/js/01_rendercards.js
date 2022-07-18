'use strict';
const renderCards = (arrayData) => {
  let html = '';
  let classFavorite = '';
  const imageNotFound =
    'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png';

  for (const oneSerie of arrayData) {
    const newImage = `https://via.placeholder.com/210x295/fc9303/666666/?text=${oneSerie.title}`;
    const favBackground = favorites.findIndex((fav) => fav.id === oneSerie.id);
    if (favBackground !== -1) {
      classFavorite = 'favorite';
    } else {
      classFavorite = '';
    }
    html += ` <div class="card js-card ${classFavorite}" id="${oneSerie.id}">`;
    if (oneSerie.image === imageNotFound) {
      html += ` <img class="card__image" src="${newImage}"/>`;
    } else {
      html += ` <img class="card__image" src="${oneSerie.image}"/>`;
    }
    html += ` <h3 class="card__title">${oneSerie.title}</h3>`;
    html += `</div>`;
  }
  return html;
};

const renderCardsSearch = () => {
  resultsSearch.innerHTML = renderCards(seriesSearch);
  cardListener();
};

const renderFavSeries = () => {
  favoriteList.innerHTML = renderCards(favorites);
  cardListener();
};
