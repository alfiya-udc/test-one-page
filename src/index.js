(function(){
"use strict";
//модальное окно
let button = document.querySelector(".js-search");
let modalWindow = document.querySelector (".modal");
let closeButton = document.querySelector(".modal__close");

function showModal () {
    modalWindow.style.display = "block";
}

function hideModal() {
    modalWindow.style.display = "none";
}

function removeModalFromWindow() {
    if (event.target === modalWindow) {
        modalWindow.style.display = "none";
    }
}

button.addEventListener("click", showModal);
closeButton.addEventListener("click", hideModal);
window.addEventListener("click", removeModalFromWindow);

//переключатель
let cardsContainers = Array.from(document.querySelectorAll(".js-cards"));
for (let i = 0; i < cardsContainers.length; i++) {
    cardsContainers[i].addEventListener("mouseover", createTabs);
}

function createTabs(event) {
    //найдём конкретный контейнер, где все произошло
    let dataId = event.currentTarget.dataset.id;
    let cardsContainer = cardsContainers[dataId];

    if (event.target.classList.contains("js-card-header")) {

        let cardsHeaders = Array.from(cardsContainer.querySelectorAll(".js-card-header"));

        let cardIndex = cardsHeaders.indexOf(event.target);

        cardsHeaders.map(cardHeader => cardHeader.parentNode.classList.remove("card-toggler--active"));
        
        //добавить класс актив не самой кнопке, а ее обертке.
        event.target.parentNode.classList.add("card-toggler--active");
  
        let cards = Array.from(cardsContainer.querySelectorAll(".js-card-item"));

        for (let i = 0; i< cards.length; i++) {
            if (cardIndex === i) {
                cards[i].style.display = "block";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}
}());













