import { useState, useRef, useEffect } from 'react'
import PackagesBox from './common/PackagesBox'
import SectionHeading from './common/SectionHeading'
import { packagesData } from '../utils/statics'

const ChallengesSec = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const span = useRef(null);
    const container = useRef(null);
    useEffect(() => {
        var clickedBtn = container.current.querySelector(`#button-${activeIndex}`);
        if (clickedBtn && span.current) {
            span.current.style.left = `${clickedBtn.offsetLeft}px`;
            span.current.style.width = `${clickedBtn.offsetWidth}px`;
        }
    }, [activeIndex])


    return (
        <section className='challenges relative z-[3] py-[5rem] mt-[-15%]' ref={container}>
            <div className="container">
                <SectionHeading badge="Challenges" heading="Three Ways to Win" para="Simulated capital, real rewards. Take on the challenge, prove your skills, and keep <br /> 90% of your profits. No hidden fees, no unnecessary risks" />

                <div className="package-navs max-w-[830px] w-full border-1 border-[#004986] rounded-full mx-auto mb-9 p-1">
                    <ul className='flex items-center justify-between relative z-[2]'>
                        {packagesData.map((item, index) => (
                            <li key={index} className='w-full'><button id={`button-${index}`} onClick={() => setActiveIndex(index)} type='button' className={`text-[18px] text-[#FFFFFF] font-normal cursor-pointer rounded-full w-full py-3 transition ${activeIndex === index
                                ? 'active'
                                : ''
                                }`}>{item.buttonName}</button></li>
                        ))}
                        <span ref={span} className='bg-border'></span>
                    </ul>
                </div>

                {packagesData.map((item, index) =>
                    activeIndex === index ? (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start mb-5"
                        >
                            {item.packages.map((pkg, pkgIndex) => (
                                <PackagesBox
                                    className={`${pkg.gradient ? 'gradient' : ''}`}
                                    key={pkgIndex}
                                    data={pkg}
                                />
                            ))}
                        </div>
                    ) : null
                )}
                <p className='includes mb-3 text-[#004986] font-medium text-[20px] uppercase mb-0' > All Plans Include</p>

                <div className="flex gap-x-6 flex-wrap">
                    <p className='text-[#FCFCFC] font-extralight text-[20px]'>Trading Period <strong className='ml-2 font-semibold'>Unlimited</strong></p>
                    <p className='text-[#FCFCFC] font-extralight text-[20px]'>Minimum Trading Days <strong className='ml-2 font-semibold'>8</strong></p>
                    <p className='text-[#FCFCFC] font-extralight text-[20px]'>Expert Advisor <strong className='ml-2 font-semibold'>Yes</strong></p>
                    <p className='text-[#FCFCFC] font-extralight text-[20px]'>Trade Copiers <strong className='ml-2 font-semibold'>Yes</strong></p>
                </div>
            </div>
        </section >
    )
}

export default ChallengesSec