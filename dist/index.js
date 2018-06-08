"use strict";

(function () {
    "use strict";
    //модальное окно

    var button = document.querySelector(".js-search");
    var modalWindow = document.querySelector(".modal");
    var closeButton = document.querySelector(".modal__close");

    function showModal() {
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
    var cardsContainers = Array.from(document.querySelectorAll(".js-cards"));
    for (var i = 0; i < cardsContainers.length; i++) {
        cardsContainers[i].addEventListener("mouseover", createTabs);
    }

    function createTabs(event) {
        //найдём конкретный контейнер, где все произошло
        var dataId = event.currentTarget.dataset.id;
        var cardsContainer = cardsContainers[dataId];

        if (event.target.classList.contains("js-card-header")) {

            var cardsHeaders = Array.from(cardsContainer.querySelectorAll(".js-card-header"));

            var cardIndex = cardsHeaders.indexOf(event.target);

            cardsHeaders.map(function (cardHeader) {
                return cardHeader.parentNode.classList.remove("card-toggler--active");
            });

            //добавить класс актив не самой кнопке, а ее обертке.
            event.target.parentNode.classList.add("card-toggler--active");

            var cards = Array.from(cardsContainer.querySelectorAll(".js-card-item"));

            for (var _i = 0; _i < cards.length; _i++) {
                if (cardIndex === _i) {
                    cards[_i].style.display = "block";
                } else {
                    cards[_i].style.display = "none";
                }
            }
        }
    }
})();