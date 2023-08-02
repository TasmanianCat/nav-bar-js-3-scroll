/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBarFunction() {
    var x = document.getElementById("nav__Bar");
    if (x.className === "divnav") {
        x.className += " responsive";
    } else {
        x.className = "divnav";
    }
}

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}