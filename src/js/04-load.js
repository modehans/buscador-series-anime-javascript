function onLoad() {
  const dataLS = JSON.parse(localStorage.getItem('data'));
  if (dataLS !== '') {
    favoriteList.innerHTML = renderCards(dataLS);
  } else {
    favoriteList.innerHTML = '';
  }
}

onLoad();
