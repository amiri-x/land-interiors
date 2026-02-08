console.log("Js is linked");

// mobile nav
const menuBtnEl = document.querySelector(".btn-menu");
const closeMenuBtnEl = document.querySelector(".btn-close");
const mainNavEl = document.querySelector(".main-nav");
const mainNavListEl = document.querySelector(".main-nav-list");

const media = window.matchMedia("(min-width: 1024px)");

//  showing the mobile and tablet nav
menuBtnEl.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
        mainNavEl.classList.add("open");

    }

})
// closing the mobile and tablet nav 
closeMenuBtnEl.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
        mainNavEl.classList.remove("open");

    }
})

// always show the nav on bigger divices
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        console.log("big");
        mainNavEl.classList.add("open");
        console.log(mainNavEl.classList);
    }
})





console.log(menuBtnEl);
console.log(closeMenuBtnEl);
console.log(mainNavEl);
