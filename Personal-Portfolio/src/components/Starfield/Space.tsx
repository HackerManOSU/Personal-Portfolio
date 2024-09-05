import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../App.css';

const Starfield: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [showTypewriter, setShowTypewriter] = useState(false); // Define the state for showTypewriter
    const [showIcons, setShowIcons] = useState(false); // Define the state for showing icons



    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const c = canvas.getContext('2d');
        if (!c) return;

        let w = canvas.offsetWidth;
        let h = canvas.offsetHeight;
        canvas.width = w;
        canvas.height = h;

        let prevW = w, prevH = h;
        const maxStars = 2500;
        const stars: Star[] = [];
        let speed = 10;
        let driftSpeed = 0.02; // Initial drift speed, very slow
        let drifting = false;

        class Star {
            x: number;
            y: number;
            z: number;
            pz: number;
            opacity: number;
            driftX: number;
            driftY: number;

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

        const slowDown = () => {
            if (speed > 0) {
                speed -= 0.01; 
            } else {
                drifting = true;
                clearInterval(slowDownInterval);
            }
        };
        let slowDownInterval = setInterval(slowDown, 3);

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

        return () => {
            clearInterval(slowDownInterval);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setShowTypewriter(true);
        }, 5000); // Delay the typewriter effect by 3 seconds
    }, []);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.title-text')?.classList.add('scale-100');
        }, 1000); // Adjust the delay as needed
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setShowIcons(true);
            document.querySelectorAll('.icon').forEach(icon => {
                icon.classList.add('scale-100');
            });
        }, 1000); // Adjust the delay as needed
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <canvas ref={canvasRef} id="space" className="w-full h-full" />
            <div className="flex items-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[98%] text-opacity-100 transition-opacity duration-2000 text-[5vmin] font-bold">
                <div className="flex flex-col md:flex-row items-center justify-center title-text transform scale-0 transition-transform duration-[5000ms]">
                    <h1 className="text-white">Hey, I'm Zane Garvey!&nbsp;&nbsp;</h1>
                    {showTypewriter && (
                        <Typewriter
                            words={[' Musician 🎸 + 🎹', ' Plant Dad 🌱', ' Coder 🖥️', ' Fisherman 🎣', ' MMA Enthusiast 🥊', ' Cloud Architect ☁️', ' Dirtbiker 🏍️']}
                            loop={false}
                            cursor
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    )}
                </div>
            </div>

            <div className="flex items-center h-[10%] justify-around absolute text-white bottom-[30%] left-1/2 transform -translate-x-1/2 flex space-x-4 w-[80%]">
            <a href="https://www.linkedin.com/in/zane-garvey" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-[5vmin] icon transform scale-0 transition-transform duration-[1000ms]" />
                </a>
                <a href="https://github.com/HackerManOSU" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-[5vmin] icon transform scale-0 transition-transform duration-[1000ms]" />
                </a>
                <a href="https://www.instagram.com/zanegarvey" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="text-[5vmin] icon transform scale-0 transition-transform duration-[1000ms]" />
                </a>
            </div>
        </div>
    );
};

export default Starfield;