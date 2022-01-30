const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = document.querySelector(".mobile-menu-close");
let LoginModel = document.querySelector("#loginModal");
let modals = document.querySelectorAll('.modal');
let loginBtn = document.querySelector("#loginBtn");
var span = document.querySelectorAll(".close");
const eyeBtn = document.querySelector(".eyeBtn")
const password = document.querySelector("#exampleInputPassword1")
let cookieModal = document.querySelector("#cookiesPolicy");
var acceptCookiesBtn = document.querySelector(".acceptCookies")


menuMain.addEventListener("click", (e) => {
   if (!menu.classList.contains("active")) {
      return;
   }
   if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      toggleSubMenu(hasChildren);
   }
});

menuTrigger.addEventListener("click", () => {
   toggleMenu();
})
closeMenu.addEventListener("click", () => {
   toggleMenu();
})

function toggleMenu() {
   let a = menu.classList.toggle("active");
   if (a) {
      menuTrigger.style.display = 'none';
      closeMenu.style.display = 'flex';
   } else {
      closeMenu.style.display = 'none';
      menuTrigger.style.display = 'flex';
   }
}
function toggleSubMenu(hasChildren) {
   let subMenu = hasChildren.querySelector(".sub-menu");
   let a = subMenu.classList.toggle("active");
   let arrowIcon = hasChildren.querySelector(".fa-angle-down");
   console.log(arrowIcon)
   if (a) {
      subMenu.classList.add("active");
      subMenu.style.animation = "slideLeft 0.5s ease forwards";
      arrowIcon.classList.add("active");
   } else {
      arrowIcon.classList.remove("active");
      subMenu.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => {
         subMenu.classList.remove("active");
      }, 300);
   }
}

window.onresize = function () {
   if (this.innerWidth > 991) {
      if (menu.classList.contains("active")) {
         toggleMenu();
      }

   }
}


// When the user clicks the button, open the modal 
loginBtn.addEventListener("click", () => {
   LoginModel.style.display = "block";
});

span.forEach(element => {
   element.addEventListener("click", () => {
      closeModel();
   });
});

window.addEventListener("click", (event) => {
   modals.forEach(e => {
      if (event.target == e) {
         e.style.display = "none";
      }
   });
});

eyeBtn.addEventListener("click", () => {
   if (eyeBtn.classList.contains("fa-eye")) {
      eyeBtn.classList.remove("fa-eye")
      eyeBtn.classList.add("fa-eye-slash")
      password.type = 'text'
   }
   else {
      eyeBtn.classList.add("fa-eye")
      eyeBtn.classList.remove("fa-eye-slash")
      password.type = 'password'
   }
})

acceptCookiesBtn.addEventListener("click", () => {
   window.localStorage.setItem("cookie", true);
   closeModel();
})



window.onload = function () {
   if (!window.localStorage.getItem('cookie')) {
      cookieModal.style.display = "block";
   }
   if (!window.localStorage.getItem("like")) {
      window.localStorage.setItem("like", 0)
   }
   if (!window.localStorage.getItem("shoppingCard")) {
      window.localStorage.setItem("shoppingCard", 0)
   }
   document.querySelector(".numberOfCart").innerHTML = window.localStorage.getItem('shoppingCard')
   document.querySelector(".numberOfLike").innerHTML = window.localStorage.getItem('like')
}
window.onload(() => { });


function closeModel() {
   modals.forEach(e => {
      e.style.display = "none";
   });
}
