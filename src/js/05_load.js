'use strict';
const onLoad = () => {
  favorites = JSON.parse(localStorage.getItem('data'));
  if (favorites === null) {
    favorites = [];
    saveLocalStorage();
  }
  renderFavSeries();
};

onLoad();
