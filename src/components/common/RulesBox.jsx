import React, { useEffect, useRef, useState } from 'react'
import { Rules1 } from '../../assets'
import ArrowDown from './ArrowDown';
import gsap, { Power4 } from 'gsap';
import magnetMouseMin from 'magnet-mouse';

const RulesBox = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const [Height, setHeight] = useState(null);
    const paraRef = useRef(null);
    const image = useRef(null);
    const image_box = useRef(null);

    useEffect(() => {
        const box = image_box.current;
        const img = image.current;

        if (!box || !img) return;

        const handleMouseMove = (e) => {

            const bounds = box.getBoundingClientRect();
            const move = e.clientX - bounds.left - bounds.width / 2;
            const moveY = e.clientY - bounds.top - bounds.width / 2;


            gsap.to(img, {
                x: move * 0.2, // Adjust the multiplier for effect strength
                y: moveY * 0.2,
                duration: 0.8,
                ease: "power3.out",
            });
        };

        const handleMouseLeave = () => {

            gsap.killTweensOf(img);

            gsap.to(img, {
                x: 0,
                y: 0,
                duration: 0.4,
                ease: "power2.out",
            });
        };

        box.addEventListener("mousemove", handleMouseMove);
        box.addEventListener("pointerleave", handleMouseLeave);

        return () => {
            box.removeEventListener("mousemove", handleMouseMove);
            box.removeEventListener("pointerleave", handleMouseLeave);
        };
    }, []);



    useEffect(() => {
        // Measure height after rendering
        if (paraRef.current) {
            setHeight(paraRef.current.scrollHeight);
            const maxAllowedHeight = 190; // Adjust height in pixels
            if (paraRef.current.scrollHeight > maxAllowedHeight) {
                setShowToggle(true);
            }
        }
    }, [props.para]);

    const toggleContent = () => {
        setIsExpanded(prev => !prev);
    };

    return (

        <div className="rules-box flex py-10 px-7 max-w-[1140px] flex-col md:flex-row mx-auto w-full items-start gap-6 border-1 border-[#004986] bg-(--base-color) rounded-[32px]">
            <div className='text md:flex-2/3'>
                <h2 className='text-[#FCFCFC] text-[42px] font-medium mb-6 leading-[100%]'>{props.heading}</h2>
                <p ref={paraRef} style={{
                    maxHeight: isExpanded ? Height + "px" : '190px'
                }}
                    className={`text-[#FCFCFC] text-[16px] lg:text-[18px] font-extralight relative transition-all duration-700 overflow-hidden`} dangerouslySetInnerHTML={{ __html: props.para }} />
                {showToggle && (
                    <button
                        onClick={toggleContent}
                        className="flex justify-center mt-4 items-center text-[#FCFCFC] gap-2 cursor-pointer"
                    >
                        {isExpanded ? 'Read less' : 'Read more'} <ArrowDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                )}
            </div>
            <div className='image md:flex-1/3 magnet-image' ref={image_box}>
                <img src={props.img} alt={props.heading} className='pointer-events-none' ref={image} />
            </div>
        </div>
    )
}

export default RulesBox