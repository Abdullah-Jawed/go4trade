import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from './common/SectionHeading'
import { packagesData } from '../utils/statics';

const AccountsSec = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const span = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        var clickedBtn = container.current.querySelector(`#button-${activeIndex}`);
        if (clickedBtn && span.current) {
            span.current.style.left = `${clickedBtn.offsetLeft}px`;
            span.current.style.width = `${clickedBtn.offsetWidth}px`;
        }
    }, [activeIndex]);


    return (
        <section className='accounts py-[5rem]' ref={container}>
            <div className="container">
                <SectionHeading badge="Go4trades cards" heading="Ways You Could Grow Your <br /> Go4Trades Account" para="The table below shows how your account balance and risk levels change on the Go4Trades Account if you pass <br /> the Challenges, reach a total balance of $400,000 (for example, by combining two $200,000 accounts), and <br /> meet the requirements for the Scaling Plan." />

                <div className="border-1 border-[#004986] rounded-[24px] p-4 max-w-[1140px] mx-auto">
                    <div className="package-navs max-w-[672px] w-full mx-auto mb-9 flex overflow-x-auto">
                        <ul className='flex items-center justify-between relative min-w-max w-full shrink-0 z-[2] border-1 border-[#004986] rounded-full'>
                            {packagesData.map((item, index) => (
                                <li key={index} className='w-full'><button id={`button-${index}`} onClick={() => setActiveIndex(index)} type='button' className={`text-[18px] text-[#FFFFFF] font-normal cursor-pointer rounded-full w-full py-3 px-4 transition ${activeIndex === index
                                    ? 'active'
                                    : ''
                                    }`}>{item.buttonName}</button></li>
                            ))}
                            <span ref={span} className='bg-border'></span>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccountsSec