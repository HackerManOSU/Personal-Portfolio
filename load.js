// JQuery and Intersection Observer API to section page when in window
$(document).ready(function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('show'); // Assuming 'show' class controls visibility
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.3 // Adjust this value based on when you want the section to trigger
    });

    // Target all sections you want to animate
    $('.main-sections').each(function() {
        observer.observe(this);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Set the duration for scrolling locked
    const lockDuration = 1000;

    // After the lockDuration, re-enable scrolling
    setTimeout(function() {
        document.body.style.overflow = '';
    }, lockDuration);
});


