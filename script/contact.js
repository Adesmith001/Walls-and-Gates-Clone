function toggleHeaderBackground() {
    const header = document.querySelector('nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.style.backgroundColor = 'black';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
}

window.addEventListener('load', toggleHeaderBackground);

//Go up button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//For Hamburger Icon
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navLinks = document.querySelector('.nav-links');

    hamburgerIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});