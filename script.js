// mobile nav
const menuBtnEl = document.querySelector(".btn-menu");
const closeMenuBtnEl = document.querySelector(".btn-close");
const mainNavEl = document.querySelector(".main-nav");

const syncNav = () => {
    if (window.innerWidth >= 1024) {
        mainNavEl.classList.add("open");
    } else {
        mainNavEl.classList.remove("open");
    }
};

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
syncNav();
window.addEventListener("resize", syncNav);