const productBox = document.querySelectorAll(".productBox");
const shippingCheckBox = document.querySelectorAll(".form-check")
let shippingCheckBoxValue = 0;


productBox.forEach(element => {
    let plus = element.querySelector(".right");
    let minus = element.querySelector(".left");
    let productCount = element.querySelector(".productCount");
    let productTotalPrice = element.querySelector(".producTotalPriceValue");
    let orderTotal = document.querySelector(".cartOrderTotalPrice");
    let cartSubTotalPrice = document.querySelector(".cartSubTotalPrice");
    let closeBtn = element.querySelector(".closeBtn");
    let productPrice = element.querySelector(".productInfo")
        .querySelector("span")
        .innerHTML
        .slice(1, -3)
        .replace(',', '');

    plus.addEventListener("click", () => {
        if (productCount.innerHTML < 10) {
            productCount.innerHTML++;
            var _productTotalPrice = formatNumber(productTotalPrice.innerHTML)
            productTotalPrice.innerHTML = '$' + (_productTotalPrice + +productPrice) + '.00';

            var _orderTotal = formatNumber(orderTotal.innerHTML)
            orderTotal.innerHTML = '$' + (_orderTotal + +productPrice) + '.00';

            var _cartSubTotalPrice = formatNumber(cartSubTotalPrice.innerHTML)
            cartSubTotalPrice.innerHTML = '$' + (_cartSubTotalPrice + +productPrice) + '.00';
        }
    })
    minus.addEventListener("click", () => {
        if (productCount.innerHTML > 0) {
            productCount.innerHTML--;
            var _productTotalPrice = formatNumber(productTotalPrice.innerHTML)
            productTotalPrice.innerHTML = '$' + (_productTotalPrice - +productPrice) + '.00';

            var _orderTotal = formatNumber(orderTotal.innerHTML)
            orderTotal.innerHTML = '$' + (_orderTotal - +productPrice) + '.00';

            var _cartSubTotalPrice = formatNumber(cartSubTotalPrice.innerHTML)
            cartSubTotalPrice.innerHTML = '$' + (_cartSubTotalPrice - +productPrice) + '.00';
        }
    })
    closeBtn.addEventListener("click", () => {
        var _productTotalPrice = formatNumber(productTotalPrice.innerHTML)
        var _orderTotal = formatNumber(orderTotal.innerHTML)
        orderTotal.innerHTML = '$' + (_orderTotal - _productTotalPrice) + '.00';

        var _cartSubTotalPrice = formatNumber(cartSubTotalPrice.innerHTML)
        cartSubTotalPrice.innerHTML = '$' + (_cartSubTotalPrice - _productTotalPrice) + '.00';
        jQuery(document).ready(function () {
            jQuery(element).remove();
        });

    })

})
shippingCheckBox.forEach(element => {
    let ShippingInput = element.querySelector(".form-check-input");
    let orderTotal = document.querySelector(".cartOrderTotalPrice");

    ShippingInput.addEventListener("change", () => {
        if (ShippingInput.checked) {
            let checkedValue = element.querySelector(".form-check-label em")
            var _orderTotal = formatNumber(orderTotal.innerHTML)
            if (checkedValue) {
                var checkedPrice = formatNumber(element.querySelector(".form-check-label em").innerHTML)
                _orderTotal = _orderTotal - shippingCheckBoxValue;
                orderTotal.innerHTML = '$' + (_orderTotal + checkedPrice) + '.00';
                shippingCheckBoxValue = checkedPrice;
            }
            else {
                _orderTotal = _orderTotal - shippingCheckBoxValue;
                orderTotal.innerHTML = '$' + (_orderTotal) + '.00';
                shippingCheckBoxValue = 0;

            }
        }
    })
});


function formatNumber(number) {
    console.log(number)
    return +number.slice(1, -3).replace(',', '');
}

