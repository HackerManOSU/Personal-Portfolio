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
        threshold: 0.1 // Adjust this value based on when you want the section to trigger
    });

    // Target all sections you want to animate
    $('.main-sections').each(function() {
        observer.observe(this);
    });
});

