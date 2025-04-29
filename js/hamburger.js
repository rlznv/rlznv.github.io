function toggleBurger() {
    const burgButton = document.getElementById("burger");
    const navMenu = document.getElementById("mobile-nav");
    burgButton.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const burgButton = document.getElementById("burger");
    const navMenu = document.getElementById("mobile-nav");
// event listener. navMenu is active and there is a click not on burgButton and not on navMenu, remove active class from navMenu 
    document.addEventListener("click", function(event) {
        if (navMenu.classList.contains("active") &&
            event.target !== burgButton &&
            !navMenu.contains(event.target)) {
                navMenu.classList.remove("active");
                burgButton.classList.remove("active");
            }
    });
});