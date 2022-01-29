let listItems = document.querySelectorAll(".list-item");
listItems.forEach(element => {
    element.addEventListener("click", () => {
        let title = element.querySelector("h6")
        let item = document.querySelectorAll(`.${title.className}`)
        if (!title.classList.contains("footerBtnActive")) {
            document.querySelectorAll(".footerBtnActive").forEach(e => {
                e.classList.remove("footerBtnActive");
            })
            item.forEach(e => {
                e.classList.add("footerBtnActive")
            })
        }
        else {
            document.querySelectorAll(".footerBtnActive").forEach(e => {
                e.classList.remove("footerBtnActive");
            })
        }
    })
});



