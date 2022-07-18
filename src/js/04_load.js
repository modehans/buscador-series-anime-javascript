'use strict';
const onLoad = () => {
  favorites = JSON.parse(localStorage.getItem('data'));
  if (favorites.length === 0) {
    console.log('favorites 0', favorites);
  } else {
    renderFavSeries();
    console.log('Ravorites lleno', favorites);
  }
};

onLoad();
