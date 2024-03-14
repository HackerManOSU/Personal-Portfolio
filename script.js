// script.js

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('space');
    const c = canvas.getContext('2d');

    let w, h;
    const setCanvasExtents = () => {
        w = document.body.clientWidth;
        h = document.body.clientHeight;
        canvas.width = w;
        canvas.height = h;
    };

    setCanvasExtents();

    window.onresize = () => {
        setCanvasExtents();
    };

    const maxStars = 2500;
    const stars = [];

    class Star {
        constructor() {
            this.reset();
        }
    
        reset() {
            this.x = Math.random() * w - w / 2;
            this.y = Math.random() * h - h / 2;
            this.z = Math.random() * w;
            this.pz = this.z;
        }
    
        update() {
            this.z -= 20;
            if (this.z < 1) {
                this.reset();
                this.z = w; // Make sure stars are reset far back in the "distance"
                this.x = (Math.random() - 0.5) * w / 2;
                this.y = (Math.random() - 0.5) * h / 2;
            }
        }
    
        show() {
            c.beginPath();
            c.fillStyle = "white";
            // Scale stars based on distance to create perspective
            const sx = (this.x / this.z) * w + w / 2;
            const sy = (this.y / this.z) * h + h / 2;
    
            // Star size based on distance
            let r = Math.max(0, 1.5 - this.z / w * 1.5);
            c.arc(sx, sy, r, 0, 2 * Math.PI);
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
});
