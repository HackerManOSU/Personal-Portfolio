import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ArrowDown from '../Icons/ArrowDown';
import LinkedIn from '../Icons/LinkedIn';
import GitHub from '../Icons/GitHub';
import Instagram from '../Icons/Instagram';
import './Space.css'
import '../../index.css'

const Starfield: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [showTypewriter, setShowTypewriter] = useState(false);
    const [showIcons, setShowIcons] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const c = canvas.getContext('2d')!; // Use non-null assertion operator here

        let w = canvas.offsetWidth;
        let h = canvas.offsetHeight;
        canvas.width = w;
        canvas.height = h;

        let prevW = w, prevH = h;
        const maxStars = 2500;
        const stars: Star[] = [];
        let speed = 10;
        let driftSpeed = 0.02 // init drift speed
        let drifting = false;

        class Star {
            c: CanvasRenderingContext2D;
            x!: number;
            y!: number;
            z!: number;
            pz!: number;
            opacity!: number;
            driftX: number;
            driftY: number;

            constructor(c: CanvasRenderingContext2D) {
                this.c = c;
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
                this.c.beginPath();
                this.c.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                const sx = (this.x - w / 2) * (w / this.z);
                const sy = (this.y - h / 2) * (w / this.z);
                const r = 1.5;

                this.c.arc(sx + w / 2, sy + h / 2, r, 0, 2 * Math.PI);
                this.c.fill();
            }
        }

        for (let i = 0; i < maxStars; i++) {
            stars.push(new Star(c));
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

        const handleResize = () => {
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
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(slowDownInterval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const typewriterTimeout = setTimeout(() => {
            setShowTypewriter(true);
        }, 7000);

        return () => clearTimeout(typewriterTimeout);
    }, []);

    useEffect(() => {
        const titleTextTimeout = setTimeout(() => {
            document.querySelector('.title-text')?.classList.add('scale-100');
        }, 1000);

        return () => clearTimeout(titleTextTimeout);
    }, []);

    useEffect(() => {
        const iconsTimeout = setTimeout(() => {
            setShowIcons(true);
            document.querySelectorAll('.custom-icon').forEach(icon => {
                icon.classList.add('scale-100');
            });
        }, 1000);

        return () => clearTimeout(iconsTimeout);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const linksElement = document.querySelector('.links');
            if (linksElement) {
                linksElement.classList.add('links-visible');
            }
        }, 1000);

    }, []);

    useEffect(() => {
        setTimeout(() => {
            const linksElement = document.querySelector('.arrow-down-box');
            if (linksElement) {
                linksElement.classList.add('arrow-down-box-visible');
            }
        }, 1000);

    }, []);


    return (
        <div className="relative w-full h-screen overflow-hidden">
            <canvas ref={canvasRef} id="space" className="w-full h-full" />
            <div className="flex items-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[98%] text-opacity-100 transition-opacity duration-2000 text-[5vmin] font-bold">
                <div className="flex flex-col md:flex-row items-center justify-center title-text transform scale-0 transition-transform duration-[5000ms]">
                    <h1 className="text-white">Hellur, I'm Zane Garvey!&nbsp;&nbsp;</h1>
                    {showTypewriter && (
                        <TypeAnimation
                            sequence={[
                                'Musician 🎸 + 🎹',
                                2000,
                                'Plant Dad 🌱',
                                2000,
                                'Coder 🖥️',
                                2000,
                                'Fisherman 🎣',
                                2000,
                                'MMA Enthusiast 🥊',
                                2000,
                                'Cloud Architect ☁️',
                                2000,
                                'Dirtbiker 🏍️',
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                        />
                    )}
                </div>
            </div>

            <div className="links absolute top-1/2 left-1/2 z-2 flex flex-row justify-evenly items-center text-white text-center w-[80%]">

                    <a
                        href="https://www.linkedin.com/in/zane-garvey"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn />
                    </a>

                    <a
                        href="https://github.com/HackerManOSU"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        < GitHub />
                    </a>

                    <a
                        href="https://www.instagram.com/zanegarvey"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        < Instagram />
                    </a>

            </div>

            <div className="arrow-down-box absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-[3rem]">

                <a href="#projects">
                    <ArrowDown />
                 </a>

            </div>
        </div>
    );
};

export default Starfield;
