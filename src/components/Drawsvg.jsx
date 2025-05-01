import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "./common";
import { Dotsimage } from "../assets";
import SectionHeading from "./common/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const Drawsvg = () => {
    const pathRef = useRef(null);
    const containerRef = useRef(null);
    const pinContainer = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let ctx = gsap.context(() => {
            const isDesktop = window.innerWidth > 1024;

            if (isDesktop) {
                gsap.set('.text-box', { opacity: 0, y: "30%" })
            }
            gsap.set([containerRef.current, pinContainer.current], { opacity: 1 });

            if (window.DrawSVGPlugin) {
                gsap.registerPlugin(window.DrawSVGPlugin);
            }

            const master = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "10% top",
                    end: isDesktop ? "+=4000" : "bottom",
                    scrub: true,
                    pin: isDesktop ? pinContainer.current : false,
                    onRefreshInit: self => {
                        self.end = self.start + (isDesktop ? 4000 : 0);
                    }
                }
            });

            if (window.DrawSVGPlugin && pathRef.current) {
                master.from(pathRef.current, {
                    drawSVG: "0%",
                    duration: 1
                });
            }

            if (isDesktop) {
                master.to(box1.current, {
                    y: "-0%",
                    duration: 0.09,
                    opacity: 1,
                    ease: "none",
                }, 0.01);

                master.to(box2.current, {
                    y: "-0%",
                    duration: 0.09,
                    opacity: 1,
                    ease: "none"
                }, 0.20);

                master.to(box1.current, {
                    y: "20%",
                    duration: 0.09,
                    opacity: 0,
                    ease: "none",
                }, 0.20);

                master.to(box3.current, {
                    y: "-20%",
                    duration: 0.09,
                    opacity: 1,
                    ease: "none"
                }, 0.7);

                master.to(box2.current, {
                    y: "20%",
                    duration: 0.09,
                    opacity: 0,
                    ease: "none"
                }, 0.7);
            }

            const handleResize = () => {
                ScrollTrigger.refresh();
            };

            setTimeout(() => {
                ScrollTrigger.refresh();
                requestAnimationFrame(() => ScrollTrigger.refresh());
            }, 100);

            return () => {
                window.removeEventListener('resize', handleResize);
            };

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className='steps overflow-hidden relative' ref={containerRef}>
            <div className="container">

                <SectionHeading badge="️Steps" heading={`Switch to Go4Trades <br /> In 3 Steps`} para="Join a prop firm designed for the next-generation of traders. Take the <br /> challenge, prove your skills, and keep 90% of your profits." />

            </div>
            <div ref={pinContainer} className="mt-20  relative max-w-[910px] mx-auto w-[90%] lg:w-full lg:flex items-center justify-center">
                <svg className="w-full absolute lg:relative" height="373" viewBox="0 0 910 373" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={pathRef} d="M0.5 1.5C322 1.5 896.238 26.5 908 169.5C919.762 312.5 660 359.5 483 368.5C341.4 375.7 292 368.5 292 368.5" stroke="url(#paint0_linear_2006_920)" strokeWidth="1.5" />
                    <path d="M353.5 12.0005C353.5 12.0005 504 20.0005 621.5 39.5005" stroke="url(#paint1_linear_2006_920)" strokeWidth="3" />
                    <defs>
                        <linearGradient id="paint0_linear_2006_920" x1="530" y1="39" x2="315" y2="372" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#004986" />
                            <stop offset="1" stopColor="#01111F" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2006_920" x1="353.296" y1="14.5365" x2="621.77" y2="36.1379" gradientUnits="userSpaceOnUse">
                            <stop offset="0.000924955" stopColor="#004986" stopOpacity="0" />
                            <stop offset="0.575" stopColor="#80DBB4" />
                            <stop offset="1" stopColor="#004986" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="text-box box-1" ref={box1}>
                    <h5>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 4V7.5H4V8.5H7.5V12H8.5V8.5H12V7.5H8.5V4H7.5Z" fill="#004986" />
                        </svg>
                        Learn and Grow
                    </h5>
                    <p>Learn through KHDA-certified programs and sharpen your skills with simulated capital.</p>
                </div>
                <div className="text-box box-2" ref={box2}>
                    <h5>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 4V7.5H4V8.5H7.5V12H8.5V8.5H12V7.5H8.5V4H7.5Z" fill="#004986" />
                        </svg>
                        Prove Your Skills
                    </h5>
                    <p>Hit the targets and show you’ve got what it takes.</p>
                </div>
                <div className="text-box box-3" ref={box3}>
                    <h5>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 4V7.5H4V8.5H7.5V12H8.5V8.5H12V7.5H8.5V4H7.5Z" fill="#004986" />
                        </svg>
                        Get Funded & Keep 90%
                    </h5>
                    <p>Trade live and cash in your profits.</p>
                </div>


                <img src={Dotsimage} alt="image" className="absolute -top[1px] w-[76%] left-0 hidden lg:block" />
            </div>
        </section>

    );
};

export default Drawsvg;
