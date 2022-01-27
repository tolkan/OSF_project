let listItems = document.querySelectorAll(".list-item");
listItems.forEach(element => {
    element.addEventListener("click", () => {
        let title = element.querySelector("h6")
        let item = document.querySelectorAll(`.${title.className}`)
        if (!title.classList.contains("active")) {
            document.querySelectorAll(".active").forEach(e => {
                e.classList.remove("active");
            })
            item.forEach(e => {
                e.classList.add("active")
            })
        }
        else {
            document.querySelectorAll(".active").forEach(e => {
                e.classList.remove("active");
            })
        }
    })
});



