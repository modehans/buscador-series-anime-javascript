'use strict';
function onLoad() {
  favorites = JSON.parse(localStorage.getItem('data'));
  if (favorites !== '') {
    renderFavSeries();
  }
}

onLoad();
