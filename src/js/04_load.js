'use strict';
function onLoad() {
  favorites = JSON.parse(localStorage.getItem('data'));
  if (favorites.length !== 0) {
    debugger;
    renderFavSeries();
    console.log(favorites);
  }
}

onLoad();
