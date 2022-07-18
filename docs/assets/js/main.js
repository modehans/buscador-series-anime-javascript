"use strict";const userInput=document.querySelector(".js_userInput"),buttonSearch=document.querySelector(".js_buttonSearch"),resultsSearch=document.querySelector(".js_resultsSearch"),favoriteList=document.querySelector(".js_favoriteList");let seriesSearch=[],favorites=[];const renderCards=e=>{let r="",t="";for(const a of e){const e="https://via.placeholder.com/210x295/fc9303/666666/?text="+a.title;t=-1!==favorites.findIndex(e=>e.id===a.id)?"favorite":"",r+=` <div class="card js-card ${t}" id="${a.id}">`,"https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"===a.image?r+=` <img class="card__image" src="${e}"/>`:r+=` <img class="card__image" src="${a.image}"/>`,r+=` <h3 class="card__title">${a.title}</h3>`,r+="</div>"}return r},renderCardsSearch=()=>{resultsSearch.innerHTML=renderCards(seriesSearch),cardListener()},renderFavSeries=()=>{favoriteList.innerHTML=renderCards(favorites),cardListener()},handleClickSearch=e=>{e.preventDefault();const r=userInput.value.toLowerCase();fetch("https://api.jikan.moe/v4/anime?q="+r).then(e=>e.json()).then(e=>{seriesSearch=e.data.map(({mal_id:e,title:r,images:t})=>({id:e,title:r,image:t.jpg.image_url})),renderCardsSearch()}).catch(e=>console.log("Ha sucedido un error: "+e))},handleClickFavorite=e=>{const r=parseInt(e.currentTarget.id),t=seriesSearch.find(e=>e.id===r),a=favorites.findIndex(e=>e.id===r);-1===a?favorites.push(t):favorites.splice(a,1),console.log(favorites),renderFavSeries(),renderCardsSearch(),localStorage.setItem("data",JSON.stringify(favorites))},handleEnterKey=e=>{e&&"Enter"===e.key&&(e.preventDefault(),handleClickSearch(e))},cardListener=()=>{document.querySelectorAll(".js-card").forEach(e=>{e.addEventListener("click",handleClickFavorite)})};function onLoad(){favorites=JSON.parse(localStorage.getItem("data")),""!==favorites&&(renderFavSeries(),console.log(favorites))}buttonSearch.addEventListener("click",handleClickSearch),userInput.addEventListener("keypress",handleEnterKey),onLoad();