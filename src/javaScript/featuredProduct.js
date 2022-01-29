const featuredProductLeftBtn = document.querySelector(".angleLeft");
const featuredProductRightBtn = document.querySelector(".angleRight");
const featuredProductCardBox = document.querySelector('.featuredProductCardBox');

// I know this solution is really bad. I couldn't have time to find better solution.

featuredProductRightBtn.addEventListener("click", () => {
    let featuredProductCards = featuredProductCardBox.querySelectorAll(".featuredProductCard");
    jQuery(featuredProductCardBox).ready(function () {
        featuredProductCards[0].remove();
        jQuery(featuredProductCardBox)
            .append(`	<div class="col-12 col-lg-3 p-2 featuredProductCard featuredProductActive">
                            <div class="card">
                                <img src="https://picsum.photos/${200 + Math.floor(Math.random() * 50)}/${100 + Math.floor(Math.random() * 50)}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h6 class="card-title">Card with stretched link</h6>
                                    <a href="#" class="btn ">Go somewhere</a>
                                </div>
                            </div>
                        </div>`
            );
    });
    console.log(featuredProductCards)
})


featuredProductLeftBtn.addEventListener("click", () => {
    let featuredProductCards = featuredProductCardBox.querySelectorAll(".featuredProductCard");
    jQuery(featuredProductCardBox).ready(function () {
        for (let index = 0; index < featuredProductCards.length; index++) {
            featuredProductCards[index].remove();
        }
        let outerHTML = '';
        for (let index = 0; index < featuredProductCards.length - 1; index++) {
            outerHTML = outerHTML + featuredProductCards[index].outerHTML;
        }
        jQuery(featuredProductCardBox)
            .append(`	<div class="col-12 col-lg-3 p-2 featuredProductCard featuredProductActive">
                        <div class="card">
                            <img src="https://picsum.photos/${200 + Math.floor(Math.random() * 50)}/${100 + Math.floor(Math.random() * 50)}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h6 class="card-title">Card with stretched link</h6>
                                <a href="#" class="btn ">Go somewhere</a>
                            </div>
                        </div>
                    </div> 
                    ${outerHTML}
                    `
            );
    });
})


window.onresize = function () {
    let featuredProductCards = featuredProductCardBox.querySelectorAll(".featuredProductCard");
    if (this.innerWidth < 992) {
        for (let index = 0; index < featuredProductCards.length - 1; index++) {
            featuredProductCards[index].remove();
        }
    }
    if (this.innerWidth > 991 && featuredProductCards.length < 4) {
        for (let index = 0; index < 3; index++) {
            jQuery(featuredProductCardBox)
                .append(`	<div class="col-12 col-lg-3 p-2 featuredProductCard featuredProductActive">
                    <div class="card">
                        <img src="https://picsum.photos/${200 + Math.floor(Math.random() * 50)}/${100 + Math.floor(Math.random() * 50)}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h6 class="card-title">Card with stretched link</h6>
                            <a href="#" class="btn ">Go somewhere</a>
                        </div>
                    </div>
                </div> 
                `
                );
        }
    }
}

window.onload = function () {
    let featuredProductCards = featuredProductCardBox.querySelectorAll(".featuredProductCard");
    if (this.innerWidth < 992) {
        for (let index = 0; index < featuredProductCards.length - 1; index++) {
            featuredProductCards[index].remove();
        }
    }
}
window.onload(() => {});

