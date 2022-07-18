'use strict';
const cardListener = () => {
  const listCards = document.querySelectorAll('.js-card');
  listCards.forEach((element) => {
    element.addEventListener('click', handleClickFavorite);
  });
};
buttonSearch.addEventListener('click', handleClickSearch);
userInput.addEventListener('keyup', handleClickSearch);
userInput.addEventListener('keypress', handleEnterKey);
buttonDeleteFavorites.addEventListener('click', handleDeleteFavorites);
