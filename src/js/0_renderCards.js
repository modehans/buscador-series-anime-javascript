'use strict';
const newImage = `https://via.placeholder.com/200x250/816f9f/000000/?text=`;
const imageNotFound =
  'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png';

const isFavSeries = (serieId) => {
  const favIndex = favourites.findIndex((fav) => fav.id === serieId);
  return favIndex !== -1;
};

const renderCards = (dataList, isResultCard) => {
  let html = '';
  const classCardType = isResultCard ? 'resultCard' : 'favCard';

  dataList.forEach((item) => {
    let favClassName = '';

    if (isResultCard && isFavSeries(item.id)) {
      favClassName = 'favouriteSelect';
    }

    html += ` <li class="card js-card-${classCardType} ${favClassName}" id="card-${item.id}">`;
    html += `<div class="frameImage" >`;
    if (item.image === imageNotFound) {
      html += ` <img class="card__image" src="${newImage}+${item.title}" alt="Portada de ${item.title}"/>`;
    } else {
      html += ` <img class="card__image" src="${item.image}" alt="Portada de ${item.title}"/>`;
    }
    html += `</div>`;
    html += ` <h3 class="card__title3">${item.title}</h3>`;
    if (isResultCard) {
      if (item.score > 7) {
        html += `<p>Puntuación: ${item.score} Recomendada </p>`;
      } else {
        html += `<p>Puntuación: ${item.score} </p>`;
      }
    }
    if (!isResultCard) {
      html += ` <div class="iconDelete js-iconDelete" id="delete-${item.id}"><i class="  fa-solid fa-circle-xmark" ></i></div>`;
    }
    html += `</li>`;
  });

  return html;
};
