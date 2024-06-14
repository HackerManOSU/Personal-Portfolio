// Smooth Scroll Behavior on link click
document.addEventListener('DOMContentLoaded', function() {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();

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