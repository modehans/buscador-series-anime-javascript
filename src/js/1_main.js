'use strict';

const userInput = document.querySelector('.js_userInput');
const buttonSearch = document.querySelector('.js_buttonSearch');
const resultsSearch = document.querySelector('.js_resultsSearch');
const resultNotFound = document.querySelector('.js_searchNotFound');
const buttonClean = document.querySelector('.js_buttonDeleteSearch');
const favouriteList = document.querySelector('.js_favouriteList');
const buttonDeleteAllFav = document.querySelector('.js_buttonDeleteFavourites');
let seriesSearch = [];
let favourites = [];

const saveLocalStorage = () => {
  localStorage.setItem('data', JSON.stringify(favourites));
};

const renderCardResult = () => {
  resultsSearch.innerHTML = renderCards(seriesSearch, true);
  cardResultListener();
};

const renderFavSeries = () => {
  favouriteList.innerHTML = renderCards(favourites, false);
  iconDeleteListener();
};

const handleClickSearch = (ev) => {
  ev.preventDefault();
  const nameUserSerie = userInput.value.toLowerCase();
  fetch(`https://api.jikan.moe/v4/anime?q=${nameUserSerie}`)
    .then((response) => response.json())
    .then((json) => {
      seriesSearch = json.data.map(({ mal_id, title, images }) => {
        const imageNotFound =
          'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png';
        let newImage = '';
        if (images.jpg.image_url === imageNotFound) {
          newImage = `https://via.placeholder.com/256x256/816f9f/000000/?text=${title}`;
        } else {
          newImage = images.jpg.image_url;
        }
        return {
          id: mal_id,
          title: title,
          image: newImage,
        };
      });

      if (seriesSearch.length === 0) {
        resultsSearch.innerHTML = '';
        resultNotFound.innerHTML = `No se ha encontrado ningún resultado para ${nameUserSerie}.`;
      } else {
        resultNotFound.innerHTML = '';
        renderCardResult();
      }
    })
    .catch((error) => console.log(`Ha sucedido un error: ${error}`));
};

const handleClickFavourite = (ev) => {
  const selectedData = ev.currentTarget.id.split('-');
  const selectedId = parseInt(selectedData[1]);
  const favSerie = seriesSearch.find((serie) => serie.id === selectedId);
  const favouriteFound = favourites.findIndex((fav) => fav.id === selectedId);
  if (favouriteFound === -1) {
    favourites.push(favSerie);
  } else {
    favourites.splice(favouriteFound, 1);
  }
  renderFavSeries();
  renderCardResult();
  saveLocalStorage();
};

const handleClickCleanSearch = (ev) => {
  ev.preventDefault();
  userInput.value = '';
  resultsSearch.innerHTML = '';
  resultNotFound.innerHTML = '';
};

const handleEnterKey = (ev) => {
  if (ev && ev.key === 'Enter') {
    ev.preventDefault();
    handleClickSearch(ev);
  }
};

const handleDeleteAllFavourites = (ev) => {
  ev.preventDefault();
  favourites = [];
  renderFavSeries();
  saveLocalStorage();
  renderCardResult();
};

//listener

const cardResultListener = () => {
  const listCards = document.querySelectorAll('.js-card-resultCard');
  listCards.forEach((element) => {
    element.addEventListener('click', handleClickFavourite);
  });
};

const iconDeleteListener = () => {
  const iconsDelete = document.querySelectorAll('.js-iconDelete');
  iconsDelete.forEach((element) => {
    element.addEventListener('click', handleClickFavourite);
  });
};

buttonSearch.addEventListener('click', handleClickSearch);
buttonClean.addEventListener('click', handleClickCleanSearch);
userInput.addEventListener('keypress', handleEnterKey);
buttonDeleteAllFav.addEventListener('click', handleDeleteAllFavourites);

//Al cargar la página
const onLoad = () => {
  favourites = JSON.parse(localStorage.getItem('data'));
  if (favourites === null) {
    favourites = [];
    saveLocalStorage();
  }
  renderFavSeries();
};

onLoad();
