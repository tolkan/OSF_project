const Cards = document.querySelectorAll(".card");
const headerCartNumber = document.querySelector(".numberOfCart")
const headerLikeNumber = document.querySelector(".numberOfLike")
const PopularProductsBtnGroup = document.querySelectorAll(".PopularProductsBtnGroup");


Cards.forEach(element => {
    let like = element.querySelector(".fa-heart");
    let addShoppingCard = element.querySelector(".fa-plus");
    let btnPrice =  element.querySelector(".btn-left");
    let btnAddToCard = element.querySelector(".btn-right");

    if (!like == false) {
        like.addEventListener("click", () => {
            var numberoflike = +window.localStorage.getItem('like') + 1;
            localStorage.setItem('like', numberoflike);
            headerLikeNumber.innerHTML = numberoflike;
        })
    }
    if (!addShoppingCard == false) {
        addShoppingCard.addEventListener("click", () => {
            var numberOfCard = +window.localStorage.getItem('shoppingCard') + 1;
            localStorage.setItem('shoppingCard', numberOfCard);
            headerCartNumber.innerHTML = numberOfCard;
        })
    }
    if (!btnPrice == false) {
        btnPrice.addEventListener("click", () => {
            var numberoflike = +window.localStorage.getItem('like') + 1;
            localStorage.setItem('like', numberoflike);
            headerLikeNumber.innerHTML = numberoflike;
        })
    }
    if (!btnAddToCard == false) {
        btnAddToCard.addEventListener("click", () => {
            var numberOfCard = +window.localStorage.getItem('shoppingCard') + 1;
            localStorage.setItem('shoppingCard', numberOfCard);
            headerCartNumber.innerHTML = numberOfCard;
        })
    }
});







