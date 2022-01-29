const colorBadges = document.querySelectorAll(".badge");
const optionRow = document.querySelector(".optionRow");
const optionRowInputGroupText = document.querySelectorAll(".input-group-text")
const loadBtn = document.querySelector(".load");
const allElements = document.querySelector(".allElements");
const removeBtn = document.querySelector(".remove");


colorBadges.forEach(element => {
    element.addEventListener("click", () => {
        exSelectedColor = document.querySelector(".colorBadgeActive")
        if (!element.classList.contains("colorBadgeActive")) {
            optionRow.classList.forEach(e => {
                if (e.charAt(0) == 'b') {
                    optionRow.classList.remove(`${e}`);
                }
            })
            optionRow.classList.add(`${element.classList[1]}`);
            exSelectedColor.classList.remove("colorBadgeActive");
            element.classList.add("colorBadgeActive");
            if (element.classList[1] == 'bg-primary' ||
                element.classList[1] == 'bg-secondary' ||
                element.classList[1] == 'bg-success' ||
                element.classList[1] == 'bg-danger' ||
                element.classList[1] == 'bg-dark')
                optionRowInputGroupText.forEach(e => {
                    e.classList.add('text-light');
                })
            else {
                optionRowInputGroupText.forEach(e => {
                    e.classList.remove('text-light')
                })
            }
        }
    })
});

loadBtn.addEventListener("click", () => {
    let items = allElements.querySelectorAll(".col-12");
    if (items.length <= 4) {
        removeBtn.classList.add("removeBtnActive")
    }
    jQuery(document).ready(function () {
        for (let index = 0; index < 4; index++) {
            jQuery(allElements).append(`${items[0].outerHTML}`);
        }
    });
})
removeBtn.addEventListener("click", () => {
    let items = allElements.querySelectorAll(".col-12");
    if (items.length >= 8) {
        jQuery(document).ready(function () {
            for (let index = 0; index < 4; index++) {
                jQuery(items[items.length - index -1]).remove();
                console.log(items.length - index -1)
                if((items.length - index -1) <= 5) {
                    removeBtn.classList.remove("removeBtnActive")
                }
            }
        });
    }
})

