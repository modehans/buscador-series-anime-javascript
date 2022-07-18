'use strict';
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
  console.log(favorites);
  renderFavSeries();
  renderCardsSearch();
  saveLocalStorage();
};

const handleEnterKey = (ev) => {
  if (ev && ev.key === 'Enter') {
    ev.preventDefault();
    handleClickSearch(ev);
  }
};
