import React, { useEffect } from 'react'
import { ChallengesPageVid } from '../assets'
import SectionHeading from '../components/common/SectionHeading'
import GameBox from '../components/GameBox';

const Challenges = () => {
    useEffect(() => {
        const months = ["January", "March", "February", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        months.sort((a, b) => {
          return Date.parse(`1 ${a} 2000`) - Date.parse(`1 ${b} 2000`);
        });
        
        console.log(months);
    }, []);
    
    return (
        <>
            <section className='top pt-[12rem]'>
                <div className="container relative">
                    <video src={ChallengesPageVid} autoPlay playsInline muted loop className='w-full mx-auto max-w-[1276px]'></video>
                    <div className="text absolute top-[5%] w-full">
                        <p className='text-[#FCFCFC] text-center text-[24px] font-light'>How Go4Trades Works:</p>
                        <SectionHeading heading="Get Funded to Trade Without <br /> Risking Your Own Money" />
                    </div>
                </div>
            </section>

            <section className='become-trader'>
                <div className="container">
                    <div className="grid grid-cols-2 w-full max-w-[1140px] mx-auto rounded-[24px] items-center px-9 py-10 border-1 border-[#002E55] double-gradient">
                        <h4 className='text-[#FCFCFC] text-[30px] md:text-[40px] font-medium leading-[120%]'>Looking <br />
                            to become a funded trader? </h4>


                        <p className='text-[22px] text-[#FCFCFC] font-extralight'>At Go4Trades, we’re not just funding traders. We’re empowering dreamers, doers, and future market leaders. <br /><br />

                            Join our simulated capital challenges, prove your skills, and unlock real trading capital with no personal risk. </p>
                    </div>
                </div>
            </section>

            <GameBox />
        </>
    )
}

export default Challenges