import React, { useEffect } from 'react'
import { bannerVideo } from '../assets';
import { BubbleButton } from '../components/common';
import { Badge } from '../components/common';
import HighlightBox from '../components/HighlightBox';
import Drawsvg from '../components/Drawsvg';
import ConstarAnim from '../components/ConstarAnim';
import AcedemySec from '../components/AcedemySec';
import SectionHeading from '../components/common/SectionHeading';
import EarthAnim from '../components/EarthAnim';
import CountrySlider from '../components/CountrySlider';
import WhatsAppicon from '../components/common/WhatsAppicon';
import CardAnim from '../components/common/CardAnim';
import Lighting from '../components/Lighting';
import ChallemgesAnim from '../components/ChallemgesAnim';
import ChallengesSec from '../components/ChallengesSec';
import VideoSec from '../components/VideoSec';
import TestimonialsSec from '../components/TestimonialsSec';
import AnimatedBorder from '../components/common/AnimatedBorder';
import JoinUsSec from '../components/JoinUsSec';

const Home = () => {
  return (
    <>
      <section className='hero-banner bg-[#01111F] flex items-center'>
        <video autoPlay muted loop playsInline src={bannerVideo} className='w-full h-[70%] md:h-full object-cover'></video>

        <div className="container px-[10px] text-center absolute left-0 top-1/2 transform -translate-y-1/2 right-0">
          <div className="all-center flex-wrap gap-6 mb-8">
            <Badge>Simulated capital</Badge>
            <Badge>Real rewards</Badge>
            <Badge>No risk</Badge>
            <Badge>90% reward split</Badge>
          </div>
          <h1 className='mb-9'>
            A place where dreams <br /> meet reality
          </h1>
          <BubbleButton Tag='a' href='#' className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block'>Try now</BubbleButton>
        </div>
      </section>

      <VideoSec />

      <section className='key-highlights'>
        <div className="container">


          <SectionHeading className="max-md:!mb-0" badge="Key Highlights" heading="Change the way you trade" />


          <HighlightBox />
        </div>
      </section>


      <Drawsvg />

      <ChallemgesAnim />

      <ChallengesSec />


      <ConstarAnim />

      <AcedemySec />

      <EarthAnim />

      <section className='trade mt-[-7%] relative z-[2]'>
        <div className="container">
          <SectionHeading className="flex items-center flex-col md:flex-row text-center md:text-left gap-6" heading="Trade with the World. Win Together." para="We’re more than a prop trading firm. <br /> We’re a global trading community. Join thousands of traders in multiple
                languages, all connected in one space." />

          <CountrySlider />

          <div className="grid lg:grid-cols-2 my-10 gap-6">
            <AnimatedBorder>
              <div className='social-box w-full min-h-[290px] base-color rounded-[12px] border-[#002E55] border-1 p-[25px] flex flex-col justify-end'>
                <h5 className='text-[#CCCCCC] text-[22px] font-medium mb-4'>We’re here for you</h5>

                <div className="flex gap-x-12 gap-y-3 flex-wrap">

                  <div className="count">
                    <h6 className='text-[20px] font-medium text-[#CCCCCC]'>$105M+</h6>
                    <p className='text-[14px] font-extralight text-[#CCCCCC]'>Total Rewards</p>
                  </div>

                  <div className="count">
                    <h6 className='text-[20px] font-medium text-[#CCCCCC]'>$105M+</h6>
                    <p className='text-[14px] font-extralight text-[#CCCCCC]'>Total Rewards</p>
                  </div>

                  <div className="count">
                    <h6 className='text-[20px] font-medium text-[#CCCCCC]'>$105M+</h6>
                    <p className='text-[14px] font-extralight text-[#CCCCCC]'>Total Rewards</p>
                  </div>

                </div>
              </div>
            </AnimatedBorder>

            <div className='grid md:grid-cols-2 gap-6'>

              <AnimatedBorder>
                <div className='social-box min-h-[290px] base-color rounded-[12px] border-[#002E55] border-1 p-[25px] flex flex-col justify-end discord'>
                  <h6 className='text-[20px] font-medium text-[#CCCCCC]'>Connect with fellow traders</h6>
                </div>
              </AnimatedBorder>

              <AnimatedBorder>
                <div className='social-box min-h-[290px] base-color rounded-[12px] border-[#002E55] border-1 p-[25px] flex flex-col justify-end whatsapp'>
                  <h6 className='text-[20px] font-medium text-[#CCCCCC] mb-2'>Instant support</h6>
                  <BubbleButton bubbleColor='#0f6540' className="btn btn-primary bg-green-gradient primary-theme hidden lg:block hover:opacity-65">
                    <WhatsAppicon />

                    Chat Now
                  </BubbleButton>
                </div>
              </AnimatedBorder>

            </div>

          </div>
        </div>
      </section>

      <section className='cards py-[4rem]'>
        <div className="container">
          <SectionHeading className="mb-[20px]" badge="Go4trades cards" heading="Spend Your Profits Anytime, Anywhere" para="Trade. Earn. Spend. Get your exclusive Go4Trades Card for fast, seamless withdrawals." />
          <div className="text-center">
            <BubbleButton className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition'>Reserve your spot</BubbleButton>
          </div>


          <CardAnim />
        </div>
      </section>

      <TestimonialsSec />


      <Lighting />

      <JoinUsSec />
    </>
  )
}

export default Home
