'use strict';
function onLoad() {
  favorites = JSON.parse(localStorage.getItem('data'));
  if (favorites !== undefined) {
    renderFavSeries();
    console.log(favorites);
  }
}

onLoad();
