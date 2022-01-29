const loadBtn = document.querySelector(".load").querySelector("button");
const PopularElements = document.querySelector(".popularElements");
const removeBtnBox = document.querySelector(".remove");
const removeBtn = removeBtnBox.querySelector("button")


loadBtn.addEventListener("click", () => {
    let items = PopularElements.querySelectorAll(".cardBox");
    if (items.length <= 4) {
        removeBtnBox.classList.add("removeBtnActive")
    }
    jQuery(document).ready(function () {
        for (let index = 0; index < 4; index++) {
            jQuery(PopularElements)
                .append(`<div class="cardBox col-3 p-2 ">
                            <div class="card">
                                <img src="https://picsum.photos/${600 + Math.floor(Math.random() * 50)}/${600 + Math.floor(Math.random() * 50)}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident!</p>
                                    <span><em>$${300 + Math.floor(Math.random() * 500)}.99</em></span>
                                </div>
                                <div class="item-overlay">
                                    <i class="fas fa-plus"></i>
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>
                        </div>`
                );
        }
    });
})
removeBtn.addEventListener("click", () => {
    let items = PopularElements.querySelectorAll(".cardBox");
    if (items.length >= 8) {
        jQuery(document).ready(function () {
            for (let index = 0; index < 4; index++) {
                jQuery(items[items.length - index - 1]).remove();
                console.log(items.length - index - 1)
                if ((items.length - index - 1) <= 5) {
                    removeBtnBox.classList.remove("removeBtnActive")
                }
            }
        });
    }
})
