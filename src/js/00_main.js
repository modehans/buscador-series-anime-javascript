'use strict';
const userInput = document.querySelector('.js_userInput');
const buttonSearch = document.querySelector('.js_buttonSearch');
const resultsSearch = document.querySelector('.js_resultsSearch');
const favoriteList = document.querySelector('.js_favoriteList');
let seriesSearch = [];
let favorites = [];

const renderCards = (arrayData) => {
  let html = '';
  let classFavorite = '';
  const imageNotFound =
    'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png';

  for (const oneSerie of arrayData) {
    const newImage = `https://via.placeholder.com/210x295/fc9303/666666/?text=${oneSerie.title}`;
    const favBackground = favorites.findIndex((fav) => fav.id === oneSerie.id);
    console.log('fondo', favBackground);
    if (favBackground !== -1) {
      classFavorite = 'favorite';
    } else {
      classFavorite = '';
    }
    html += ` <div class="card js-card ${classFavorite}" id="${oneSerie.id}">`;
    html += ` <h3 class="card__title">${oneSerie.title}</h3>`;
    if (oneSerie.image === imageNotFound) {
      html += ` <img class="card__image" src="${newImage}"/>`;
    } else {
      html += ` <img class="card__image" src="${oneSerie.image}"/>`;
    }
    html += `</div>`;
  }
  return html;
};

const renderCardsSearch = () => {
  resultsSearch.innerHTML = renderCards(seriesSearch);
  cardListener();
};

const renderSearchSeries = () => {
  const nameUserSerie = userInput.value.toLowerCase();
  fetch(`https://api.jikan.moe/v4/anime?q=${nameUserSerie}`)
    .then((response) => response.json())
    .then((json) => {
      seriesSearch = json.data.map(({ mal_id, title, images }) => ({
        id: mal_id,
        title: title,
        image: images.jpg.image_url,
      }));
      renderCardsSearch();
    });
};

const renderFavSeries = () => {
  favoriteList.innerHTML = renderCards(favorites);
  cardListener();
};

const handleClickFavorite = (ev) => {
  const selectedId = parseInt(ev.currentTarget.id);
  const favSerie = seriesSearch.find((serie) => serie.id === selectedId);
  const favoriteFound = favorites.findIndex((fav) => fav.id === selectedId);
  if (favoriteFound === -1) {
    favorites.push(favSerie);
  } else {
    favorites.splice(favoriteFound, 1);
  }
  console.log(favorites);
  renderFavSeries();
  renderCardsSearch();
};

const cardListener = () => {
  const listCards = document.querySelectorAll('.js-card');
  listCards.forEach((element) => {
    element.addEventListener('click', handleClickFavorite);
  });
};

const handleClickSearch = (ev) => {
  ev.preventDefault();
  renderSearchSeries();
};

const handleEnterKey = (ev) => {
  if (ev && ev.key === 'Enter') {
    ev.preventDefault();
    handleClickSearch(ev);
  }
};

buttonSearch.addEventListener('click', handleClickSearch);
userInput.addEventListener('keypress', handleEnterKey);
