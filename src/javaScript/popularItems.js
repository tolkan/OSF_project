const loadBtnBox = document.querySelector(".load")
const loadBtn = document.querySelector(".load").querySelector("button");
const PopularElements = document.querySelector(".popularElements");
const removeBtnBox = document.querySelector(".remove");
const removeBtn = removeBtnBox.querySelector("button");

loadBtn.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../json/popularItems.json", true);
    xhr.getResponseHeader("Content-type", "application/json");
    xhr.onload = function () {
        removeBtnBox.classList.add("removeBtnActive");
        loadBtnBox.classList.add("loadBtnPassive");
        const obj = JSON.parse(this.responseText);
        obj.popular_items.forEach(element => {
            jQuery(document).ready(function () {
                jQuery(PopularElements)
                    .append(`<div class="cardBox col-3 p-2 ">
                                    <div class="card">
                                        <img src="${element.item_url}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <p>${element.item_name}</p>
                                            <span><em>$${element.item_price}</em></span>
                                        </div>
                                        <div class="item-overlay">
                                            <i class="fas fa-plus"></i>
                                            <i class="fas fa-heart"></i>
                                        </div>
                                    </div>
                                </div>`
                    );
            });
        });
    }
    xhr.send();
});
removeBtn.addEventListener("click", () => {
    let items = PopularElements.querySelectorAll(".cardBox");
    if (items.length >= 8) {
        jQuery(document).ready(function () {
            for (let index = 0; index < 8; index++) {
                jQuery(items[items.length - index - 1]).remove();
                if ((items.length - index - 1) <= 5) {
                    removeBtnBox.classList.remove("removeBtnActive");
                    loadBtnBox.classList.remove("loadBtnPassive");
                }
            }
        });
    }
})
