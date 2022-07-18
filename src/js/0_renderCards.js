'use strict';

const isFavSeries = (serieId) => {
  const favIndex = favourites.findIndex((fav) => fav.id === serieId);
  return favIndex !== -1;
};
//isFavSeries=
const renderCards = (dataList, isResultCard) => {
  let html = '';
  const classCardType = isResultCard ? 'resultCard' : 'favCard';
  const imageNotFound =
    'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png';
  dataList.forEach((item) => {
    let favClassName = '';

    const newImage = `https://via.placeholder.com/150x200/816f9f/000000/?text=${item.title}`;

    if (isResultCard && isFavSeries(item.id)) {
      favClassName = 'favouriteSelect';
    }

    html += ` <li class="card js-card-${classCardType} ${favClassName}" id="card-${item.id}">`;
    if (item.image === imageNotFound) {
      html += ` <img class="card__image" src="${newImage}"/>`;
    } else {
      html += ` <img class="card__image" src="${item.image}"/>`;
    }
    html += ` <h3 class="card__title3">${item.title}</h3>`;
    if (!isResultCard) {
      html += ` <div class="iconDelete js-iconDelete" id="delete-${item.id}"><i class="  fa-solid fa-circle-xmark" ></i></div>`;
    }
    html += `</li>`;
  });

  return html;
};
