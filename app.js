// Smooth Scroll Behavior on link click
document.addEventListener('DOMContentLoaded', function() {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            // Store hash
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            // Use smooth scroll behavior
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


// JavaScript for handling smooth scrolling to sections larger than 100vh

// Throttle function to limit the rate at which a function is executed
function throttle(fn, wait) {
    let isThrottling = false;
    return function (...args) {
        if (!isThrottling) {
            fn.apply(this, args);
            isThrottling = true;
            setTimeout(() => {
                isThrottling = false;
            }, wait);
        }
    };
}

// Smooth scroll to a specific element
function smoothScrollTo(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop
    });
}

// Detect scroll direction and scroll to the specific section accordingly
function handleScroll(event) {
    event.preventDefault();
    const sections = document.querySelectorAll('.testing');
    const scrollY = window.pageYOffset;
    const direction = event.deltaY > 0 ? 1 : -1; // Determine scroll direction

    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionStart = section.offsetTop;
        const sectionEnd = sectionStart + section.offsetHeight;

        if (scrollY >= sectionStart && scrollY < sectionEnd) {
            if (direction > 0 && i < sections.length - 1) {
                smoothScrollTo(sections[i + 1]); // Scroll down to next section
            } else {
                break
            }
        }
    }
}

document.addEventListener('wheel', throttle(handleScroll, 1000), {passive: false});





// Stopping arrow bounce
function stopBouncing() {
    var element = document.getElementById("arrow-icon");
    element.classList.remove("fa-bounce");
}

// Function to dynamically resize SVG elements based on viewport width
function resizeSVGs() {
    // Get all SVG elements within the container with the class 'images'
    const svgs = document.querySelectorAll('.svg-icons');

    // Determine new size based on viewport width
    const newSize = window.innerWidth > 700 ? '50px' : '30px';

    // Loop through each SVG and set its width and height to newSize
    svgs.forEach(svg => {
        svg.style.width = newSize;
        svg.style.height = newSize;
    });
}

// Add event listener to resize SVGs on window resize
window.addEventListener('resize', resizeSVGs);

// Call function on initial load
resizeSVGs();

document.addEventListener('scroll', updateProgressBar);

function updateProgressBar() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.pageYOffset;
    const progress = (scrolled / totalHeight) * 100;
    document.getElementById('progressBar').style.width = `${progress*1}%`; // Multiply by 2 to expand in both directions
}