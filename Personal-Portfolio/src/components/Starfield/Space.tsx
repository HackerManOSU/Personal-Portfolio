import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ArrowDown from './Icons/ArrowDown';
import LinkedIn from './Icons/LinkedIn';
import GitHub from './Icons/GitHub';
import Instagram from './Icons/Instagram';
import './Space.css'
import '../../index.css'

const Starfield: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [showTypewriter, setShowTypewriter] = useState(false);
    const controls = useAnimation(); // Make sure controls is initialized here


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
        controls.start('visible'); // Trigger animation immediately on load
    }, [controls]);

    const containerVariants = {
        hidden: {y: 0, scale: 0.01 },
        visible: {
            y: 0,
            scale: 1,
            transition: { duration: 5 }
        },
    };
    
    const titleVariants = {
        hidden: { y: 60, scale: 0.01 },
        visible: { 
            y: 0, 
            scale: 1,
            transition: { duration: 5, delay: 1 }
        },
    };

    const linkVariants = {
        hidden: { y: -60, scale: 0 },
        visible: { 
            y: 0, 
            scale: 1,
            transition: { duration: 5, delay: 1 }
        },
    };

    const arrowVariants = {
        hidden: { y: 200, scale: 0 },
        visible: { 
            y: 0, 
            scale: 1,
            transition: { duration: 5, delay: 3 }
        },
    };

    return (
        <div className="relative w-full h-screen overflow-hidden text-white">
            <canvas
                ref={canvasRef}
                id="space"
                className="absolute inset-0 w-full h-full z-0"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="absolute inset-0 w-full h-full z-10"
            >

                <div className="relative h-screen flex flex-col items-center">

                    <motion.div
                        className="absolute bottom-[55%] w-[100%] flex items-center justify-center"
                        variants={titleVariants}
                    >
                        <div className="main-text flex flex-col lg:flex-row lg:flex-wrap items-center justify-center text-4xl lg:text-6xl font-bold text-center w-[95%]">
                            <h1 className="pr-4">Hellur, I'm Zane Garvey!</h1>
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
                    </motion.div>

                    <motion.div
                        className="link-box absolute bottom-[45%] flex flex-row justify-evenly items-center w-[80%] text-[4vmin]"
                        variants={linkVariants}
                    >
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
                            <GitHub />
                        </a>

                        <a
                            href="https://www.instagram.com/zanegarvey"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram />
                        </a>
                        
                    </motion.div>

                    <motion.div
                        className="absolute bottom-4 arrow-box"
                        variants={arrowVariants}
                    >
                        <a href="#me" className='arrow'>
                            <ArrowDown />
                        </a>
                    </motion.div>
                </div>

            </motion.div>
    </div>
    );
};

export default Starfield;