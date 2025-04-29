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

                {/* <svg width="910" height="373" viewBox="0 0 910 373" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={pathRef} d="M0.5 1.5C322 1.5 896.238 26.5 908 169.5C919.762 312.5 660 359.5 483 368.5C341.4 375.7 292 368.5 292 368.5" stroke="url(#paint0_linear_3_732)" stroke-width="1.5" />
                    <defs>
                        <linearGradient id="paint0_linear_3_732" x1="530" y1="39" x2="315" y2="372" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#004986" />
                            <stop offset="1" stop-color="#01111F" />
                        </linearGradient>
                    </defs>
                </svg> */}


                <svg width="910" height="373" viewBox="0 0 910 373" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={pathRef} d="M0.5 1.5C322 1.5 896.238 26.5 908 169.5C919.762 312.5 660 359.5 483 368.5C341.4 375.7 292 368.5 292 368.5" stroke="url(#paint0_linear_2006_920)" stroke-width="1.5" />
                    <path d="M353.5 12.0005C353.5 12.0005 504 20.0005 621.5 39.5005" stroke="url(#paint1_linear_2006_920)" stroke-width="3" />
                    <defs>
                        <linearGradient id="paint0_linear_2006_920" x1="530" y1="39" x2="315" y2="372" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#004986" />
                            <stop offset="1" stop-color="#01111F" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2006_920" x1="353.296" y1="14.5365" x2="621.77" y2="36.1379" gradientUnits="userSpaceOnUse">
                            <stop offset="0.000924955" stop-color="#004986" stop-opacity="0" />
                            <stop offset="0.575" stop-color="#80DBB4" />
                            <stop offset="1" stop-color="#004986" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>


            </div>
        </section>

    );
};

export default Drawsvg;
