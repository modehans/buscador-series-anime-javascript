'use strict';
const onLoad = () => {
  favorites = JSON.parse(localStorage.getItem('data'));
  if (favorites === null) {
    favorites = [];
    localStorage.setItem('data', JSON.stringify(favorites));
    console.log('Ravorites lleno', favorites);
  }
  renderFavSeries();
};

onLoad();
