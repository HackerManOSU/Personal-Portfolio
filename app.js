// Smooth Scroll Behavior

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