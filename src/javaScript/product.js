let productInfoBtn = document.querySelectorAll(".productInfoBtn");
let productColors = document.querySelectorAll(".product-color");
const ColorDropDown = document.querySelector(".color");
colorDropDownBtn = document.querySelector("button");
const numberOfProductBox = document.querySelector(".number-of")
const plus = numberOfProductBox.querySelector(".right");
const minus = numberOfProductBox.querySelector(".left");
const number = numberOfProductBox.querySelector("p");

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
    if(number.innerHTML <= 100 ){
        number.innerHTML++;
    }
})
minus.addEventListener("click", () => {
    if(number.innerHTML > 0 ){
        number.innerHTML--;
    }
})


