var TextRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.text = '';
    this.tick();
    this.isDeleting = false;
    this.firstIteration = true;
};

TextRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullText = this.toRotate[i];

    if (this.isDeleting) {
        // Use substring based on character length rather than string length
        let lengthToRemove = Array.from(fullText).length - Array.from(this.text).length + 1;
        this.text = Array.from(fullText).slice(0, -lengthToRemove).join('');
    } else {
        this.text = Array.from(fullText).slice(0, Array.from(this.text).length + 1).join('');
    }

    this.el.innerHTML = '<span class="wrap">' + this.text + '</span>';

    var that = this;
    
    //speed can be controlled from here
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 4; }

    if (!this.isDeleting && this.text === fullText) {
        if (i === 0 && this.firstIteration) { // Check if it's the first element and first iteration
            delta = this.period * 5; // Extend the period for the first element
            this.firstIteration = false; // Ensure this only happens once
        } else {
            delta = this.period;
        }
        this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function() {
        that.tick();
    }, delta);
};


window.onload = function() {
    var elements = document.getElementsByClassName('text-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TextRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".text-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};