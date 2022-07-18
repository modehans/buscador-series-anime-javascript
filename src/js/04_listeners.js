'use strict';
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
