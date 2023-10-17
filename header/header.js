document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuItems = document.querySelector(".menu-items");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menuItems.classList.toggle("active");
        menu.classList.toggle("active");
    });
});
