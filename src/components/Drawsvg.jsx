import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "./common";

gsap.registerPlugin(ScrollTrigger);

const Drawsvg = () => {
    const pathRef = useRef(null);
    const containerRef = useRef(null);
    const pinContainer = useRef(null)

    useEffect(() => {
        if (typeof window === "undefined") return;

        let ctx = gsap.context(() => {
            // Force layout recalc before initialization
            gsap.set([containerRef.current, pinContainer.current], { opacity: 1 });

            // Optional: Load DrawSVGPlugin if needed
            if (window.DrawSVGPlugin) {
                gsap.registerPlugin(window.DrawSVGPlugin);
            }

            // Create a master timeline
            const master = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "30% top",
                    end: "+=1600",
                    scrub: true,
                    pin: pinContainer.current,
                    onRefreshInit: self => {
                        // Ensure end position is calculated properly
                        self.end = self.start + 1600;
                    }
                }
            });

            // Add your animations
            if (window.DrawSVGPlugin && pathRef.current) {
                master.from(pathRef.current, {
                    drawSVG: "0%",
                    duration: 1
                });
            }

            // Double refresh to ensure proper measurements
            setTimeout(() => {
                ScrollTrigger.refresh();
                requestAnimationFrame(() => ScrollTrigger.refresh());
            }, 100);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className='steps overflow-hidden relative' ref={containerRef}>
            <div className="container">
                <div className="heading text-center">
                    <Badge className='mx-auto mb-4'>️Steps</Badge>
                    <h2>Switch to Go4Trades <br />
                        In 3 Steps</h2>
                    <p className='text-[#CCCCCC] text-[20px] font-extralight'>Join a prop firm designed for the next-generation of traders. Take the <br /> challenge, prove your skills, and keep 90% of your profits.</p>
                </div>
            </div>
            <div ref={pinContainer} className="mt-20 mb-40 relative h-screen w-full flex items-center justify-center">

                <svg
                    width="910"
                    height="373"
                    viewBox="0 0 910 373"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        ref={pathRef}
                        d="M0.5 1.5C322 1.5 896.238 26.5 908 169.5C919.762 312.5 660 359.5 483 368.5C341.4 375.7 292 368.5 292 368.5"
                        stroke="url(#paint0_linear_227_1299)"
                        strokeWidth="1.5"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_227_1299"
                            x1="530"
                            y1="39"
                            x2="315"
                            y2="372"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#004986" />
                            <stop offset="1" stopColor="#01111F" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
        </section>

    );
};

export default Drawsvg;
