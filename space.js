// script.js

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('space');
    const c = canvas.getContext('2d');

    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    window.addEventListener('resize', () => {
        w = canvas.offsetWidth;
        h = canvas.offsetHeight;
        canvas.width = w;
        canvas.height = h;
        // Update stars positions based on new dimensions to keep the visual centered and proportional
        stars.forEach(star => {
            star.x = (star.x - prevW / 2) * (w / prevW) + w / 2;
            star.y = (star.y - prevH / 2) * (h / prevH) + h / 2;
            star.z = star.z * (w / prevW);
        });
        prevW = w;
        prevH = h;
    });

    let prevW = w, prevH = h;
    const maxStars = 2500;
    const stars = [];
    let speed = 10;
    let driftSpeed = 0.02; // Initial drift speed, very slow
    let drifting = false;

    class Star {
        constructor() {
            this.reset();
            this.driftX = (Math.random() - 0.5) * driftSpeed;
            this.driftY = (Math.random() - 0.5) * driftSpeed;
        }

        reset() {
            this.x = (Math.random() - 0.5) * w * 0.5 + w / 2;
            this.y = (Math.random() - 0.5) * h * 0.5 + h / 2;
            this.z = Math.random() * w;
            this.pz = this.z;
            this.opacity = Math.random();
            if (drifting) {
                this.driftX = (Math.random() - 0.5) * driftSpeed;
                this.driftY = (Math.random() - 0.5) * driftSpeed;
            }
        }

        update() {
            if (speed > 0) {
                this.z -= speed;
            } else if (drifting) {
                this.x += this.driftX;
                this.y += this.driftY;
            }

            this.opacity = 0.5 + Math.random() * 0.5;

            if (this.z < 1) {
                this.reset();
            }
        }

        show() {
            c.beginPath();
            c.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            const sx = (this.x - w / 2) * (w / this.z);
            const sy = (this.y - h / 2) * (w / this.z);
            const r = 1.5;

            c.arc(sx + w / 2, sy + h / 2, r, 0, 2 * Math.PI);
            c.fill();
        }
    }

    for (let i = 0; i < maxStars; i++) {
        stars.push(new Star());
    }

    function animate() {
        c.fillStyle = "black";
        c.fillRect(0, 0, w, h);
        stars.forEach(star => {
            star.update();
            star.show();
        });
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        const slowDown = () => {
            if (speed > 0) {
                speed -= 0.01; 
            } else {
                drifting = true;
                clearInterval(slowDownInterval);
            }
        };
        let slowDownInterval = setInterval(slowDown, 3);
    }, 2000);

    setTimeout(() => {
        document.querySelector('.Title-Text').classList.add('text-visible');
    }, 1000); // Wait for 1 seconds before making the text visible

    setTimeout(() => {
        document.querySelector('.Links').classList.add('text-visible');
    }, 1000); // Wait for 1 seconds before making the text visible

    setTimeout(() => {
        document.querySelector('.scroll-container').classList.add('text-visible-2');
    }, 8000); // Wait for 1 seconds before making the text visible
    
});
