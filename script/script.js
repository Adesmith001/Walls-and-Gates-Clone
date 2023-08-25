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

// For Image Slider
document.addEventListener('DOMContentLoaded', function() {
    const imageSliders = document.querySelectorAll('.image-slider');
    const images = ['grow.jpg', 'ideology.jpg', 'compete.jpg', 'think.jpg'];
    let currentIndex = 0;

    function changeImage() {
        imageSliders.forEach(function(imageSlider) {
            imageSlider.src = '/images/' + images[currentIndex];
        });
        currentIndex = (currentIndex + 1) % images.length;
    }

    const intervalId = setInterval(changeImage, 3000);
});

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

//For Youtube Link

function isElementInViewport(elem) {
    var rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}


let videoAppeared = false;

function expandVideo() {
    var videoContainer = document.querySelector('.video-container');
    if (isElementInViewport(videoContainer)) {
        var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        var maxContainerWidth = 560;
        var currentWidth = (scrollPosition / window.innerWidth) * maxContainerWidth;
        if (!videoAppeared) {
            videoContainer.style.width = currentWidth + 'px';
            if (currentWidth >= maxContainerWidth) {
                videoAppeared = true;
            }
        } else {
            videoContainer.style.width = maxContainerWidth + 'px';
        }
    }
}
window.addEventListener('scroll', expandVideo);
window.addEventListener('load', expandVideo);

// Function to check if an element is in the viewport
function isElementInViewport(elem) {
    var rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to handle video visibility
function handleVideoVisibility() {
    var videoContainer = document.querySelector('.video-container');
    if (isElementInViewport(videoContainer)) {
        videoContainer.style.display = 'block'; // Display the video container when it's in view
    }
}

// Listen for scroll events to check video visibility
window.addEventListener('scroll', handleVideoVisibility);
window.addEventListener('load', handleVideoVisibility);

//For Hamburger Icon
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navLinks = document.querySelector('.nav-links');

    hamburgerIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});