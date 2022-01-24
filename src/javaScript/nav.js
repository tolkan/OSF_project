
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = document.querySelector(".mobile-menu-close");
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
   if(a){
      subMenu.classList.add("active");
      subMenu.style.animation = "slideLeft 0.5s ease forwards";
      arrowIcon.classList.add("active");
   }else{
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
