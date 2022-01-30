let productInfoBtn = document.querySelectorAll(".productInfoBtn");
let productColors = document.querySelectorAll(".product-color");
const ColorDropDown = document.querySelector(".color");
const colorDropDownBtn = document.querySelector("#dropdownMenuButton1");
const numberOfProductBox = document.querySelector(".number-of")
const plus = numberOfProductBox.querySelector(".right");
const minus = numberOfProductBox.querySelector(".left");
const number = numberOfProductBox.querySelector("p");
const smallImgs = document.querySelector(".product-center").querySelectorAll('img');
const bigImgs = document.querySelector(".product-left").querySelectorAll('img');
const ppAddtoCartBtn = document.querySelector(".product-right").querySelector(".add-to-cart").querySelector("button");
var span = document.querySelectorAll(".close");
let ProductImgModal = document.querySelectorAll('.modal');
const modalArrows = document.querySelector(".modalArrows");
const productAbout = document.querySelector(".product-about");
let readMoreBtn = productAbout.querySelector(".readMore");
let showless = productAbout.querySelector(".showless");


productInfoBtn.forEach(element => {
    element.addEventListener("click", () => {
        let title = element.querySelector("button")
        let item = document.querySelectorAll(`.${title.className}`)

        if (!title.classList.contains("productInfoBtnActive")) {
            document.querySelectorAll(".productInfoBtnActive").forEach(e => {
                e.classList.remove("productInfoBtnActive");
            })
            item.forEach(e => {
                e.classList.add("productInfoBtnActive")
            })
        }
        else {
            document.querySelectorAll(".productInfoBtnActive").forEach(e => {
                e.classList.remove("productInfoBtnActive");
            })
        }
    })
});



productColors.forEach(element => {
    element.addEventListener("click", () => {


        colorDropDownBtn.innerHTML = element.innerHTML;
    })
})

plus.addEventListener("click", () => {
    if (number.innerHTML <= 100) {
        number.innerHTML++;
    }
})
minus.addEventListener("click", () => {
    if (number.innerHTML > 0) {
        number.innerHTML--;
    }
})


smallImgs.forEach(e => {
    e.addEventListener("click", () => {
        bigImgs.forEach(element => {
            element.src = e.src.slice(0, -10) + '.jpg'
        });

    })
});
//ProductModel

modalArrows.addEventListener("click", () => {
    document.querySelector(".product-left").querySelector('.modal').style.display = "block";
})

span.forEach(element => {
    element.addEventListener("click", () => {
        closeModel();
    });
});

window.addEventListener("click", (event) => {
    ProductImgModal.forEach(e => {
        if (event.target == e) {
            e.style.display = "none";
        }
    });
});

function closeModel() {
    ProductImgModal.forEach(e => {
        e.style.display = "none";
    });
}



ppAddtoCartBtn.addEventListener("click", () => {
    let ppNumOfProduct = document.querySelector(".product-right").querySelector(".number-of").querySelector("p");
    var numberOfCard = +window.localStorage.getItem('shoppingCard') + +ppNumOfProduct.innerHTML;
    localStorage.setItem('shoppingCard', numberOfCard);
    headerCartNumber.innerHTML = numberOfCard;
    ppNumOfProduct.innerHTML = 0;

})


readMoreBtn.addEventListener("click", () => {
    let text = productAbout.querySelector(".product-about-text")
    text.innerHTML = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae reiciendis est
    provident asperiores! Iure sequi delectus impedit recusandae sapiente, nemo similique
    perspiciatis nihil cupiditate fuga! Earum fugit mollitia qui.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolore. Possimus sequi
    ipsam vel voluptate accusantium optio reiciendis nesciunt, ipsum tempora aspernatur
    provident saepe atque eos impedit cum, dolore repellat?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae reiciendis est
    provident asperiores! Iure sequi delectus impedit recusandae sapiente, nemo similique
    perspiciatis nihil cupiditate fuga! Earum fugit mollitia qui.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolore. Possimus sequi
    ipsam vel voluptate accusantium optio reiciendis nesciunt, ipsum tempora aspernatur
    provident saepe atque eos impedit cum, dolore repellat?`

    readMoreBtn.style.display ='none';
    showless.style.display ='unset';
})
showless.addEventListener("click", () => {
    let text = productAbout.querySelector(".product-about-text")
    text.innerHTML = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae reiciendis est
    provident asperiores! Iure sequi delectus impedit recusandae sapiente, nemo similique
    perspiciatis nihil cupiditate fuga! Earum fugit mollitia qui.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolore. Possimus sequi
    ipsam vel voluptate accusantium optio reiciendis nesciunt, ipsum tempora aspernatur
    provident saepe atque eos impedit cum, dolore repellat?`

    readMoreBtn.style.display ='unset';
    showless.style.display ='none';
})
