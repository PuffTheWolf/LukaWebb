const menu = document.querySelector('nav');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', function(event) {
    event.stopPropagation();

    if (menu.style.width === "200px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "200px";
    }
});

body.addEventListener('click', function() {
    menu.style.width = "0";
});
