'use strict';
const userInput = document.querySelector('.js_userInput');
const buttonSearch = document.querySelector('.js_buttonSearch');
const resultsSearch = document.querySelector('.js_resultsSearch');
const favoriteList = document.querySelector('.js_favoriteList');
const buttonDeleteAllFav = document.querySelector('.js_buttonDeleteFavorites');
let seriesSearch = [];
let favorites = [];

const saveLocalStorage = () => {
  localStorage.setItem('data', JSON.stringify(favorites));
};

const renderCards = (arrayData) => {
  let html = '';
  let classFavorite = '';
  const imageNotFound =
    'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png';

  for (const oneSerie of arrayData) {
    const newImage = `https://via.placeholder.com/150x200/816f9f/000000/?text=${oneSerie.title}`;
    const favBorder = favorites.findIndex((fav) => fav.id === oneSerie.id);
    if (favBorder !== -1) {
      classFavorite = 'favoriteSlect';
    } else {
      classFavorite = '';
    }
    html += ` <div class="card js-card ${classFavorite}" id="${oneSerie.id}">`;
    if (oneSerie.image === imageNotFound) {
      html += ` <img class="card__image" src="${newImage}"/>`;
    } else {
      html += ` <img class="card__image" src="${oneSerie.image}"/>`;
    }
    html += ` <h3 class="card__title3">${oneSerie.title}</h3>`;
    html += ` <div class="iconDelete js-iconDelete" nameIcon="${oneSerie.id}"><i class="  fa-solid fa-circle-xmark" ></i></div>`;
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
  iconDeleteListener();
};
const handleClickSearch = (ev) => {
  ev.preventDefault();
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
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
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
  renderFavSeries();
  renderCardsSearch();
  saveLocalStorage();
};
const handleIconDelete = (ev) => {
  console.log(ev.currentTarget);
  const icon = ev.currentTarget.nameIcon;
  console.log(icon);
};

const handleEnterKey = (ev) => {
  if (ev && ev.key === 'Enter') {
    ev.preventDefault();
    handleClickSearch(ev);
  }
};

const handleDeleteAllFavorites = (ev) => {
  ev.preventDefault();
  favorites = [];
  renderFavSeries();
  saveLocalStorage();
};

const cardListener = () => {
  const listCards = document.querySelectorAll('.js-card');
  listCards.forEach((element) => {
    element.addEventListener('click', handleClickFavorite);
  });
};
const iconDeleteListener = () => {
  const iconsDelete = document.querySelectorAll('.js-iconDelete');
  iconsDelete.forEach((element) => {
    element.addEventListener('click', handleIconDelete);
    console.log('icons', iconsDelete);
  });
};

buttonSearch.addEventListener('click', handleClickSearch);
userInput.addEventListener('keypress', handleEnterKey);
buttonDeleteAllFav.addEventListener('click', handleDeleteAllFavorites);

const onLoad = () => {
  favorites = JSON.parse(localStorage.getItem('data'));
  if (favorites === null) {
    favorites = [];
    saveLocalStorage();
  }
  renderFavSeries();
};

onLoad();
