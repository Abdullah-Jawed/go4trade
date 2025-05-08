import React from 'react'
import { bannerVideo, DiscordIcon, LockImg, SecurityVideo, WhatsAppIcon } from '../assets';
import { VideoSectionVideo } from '../assets';
import videoPoster from '../assets/images/video-dummy.png';
import video_icon from '../assets/images/play-icon.png'
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
import JoinBox from '../components/common/JoinBox';
import Lighting from '../components/Lighting';
import Getimage from '../components/Getimage';
import PackagesBox from '../components/common/PackagesBox';
import { packagesData } from '../utils/statics';
import ChallemgesAnim from '../components/ChallemgesAnim';

const Home = () => {
  return (
    <>
      <section className='hero-banner bg-[#01111F]'>
        <video autoPlay muted loop playsInline src={bannerVideo} className='w-full h-full object-top object-cover'></video>

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
          <BubbleButton className='my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition'>Try now</BubbleButton>
        </div>
      </section>

      <section className='video-section'>
        <div className="container">
          <div className="video-box">
            <video src={VideoSectionVideo} autoPlay muted loop playsInline className='w-full'></video>
            <button className='video-btn'><img src={video_icon} alt="video icon" /></button>
          </div>
        </div>
      </section>

      <section className='key-highlights'>
        <div className="container">
          <div className="heading text-center">

            <SectionHeading badge="Key Highlights" heading="Change the way you trade" />

          </div>
          <HighlightBox />
        </div>
      </section>


      <Drawsvg />

      <ChallemgesAnim />

      <section className='challenges relative z-[3] py-[5rem] mt-[-15%]'>
        <div className="container">
          <SectionHeading badge="Challenges" heading="Three Ways to Win" para="Simulated capital, real rewards. Take on the challenge, prove your skills, and keep <br /> 90% of your profits. No hidden fees, no unnecessary risks" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start mb-5">
            {packagesData.map((item, index) => (
              <PackagesBox className={`${(item.gradient) ? 'gradient' : ''}`} key={index} data={item} />
            ))}
          </div>
          <p className='includes mb-3 text-[#004986] font-medium text-[20px] uppercase mb-0'>All Plans Include</p>
          
          <div className="flex gap-x-6 flex-wrap">
            <p className='text-[#FCFCFC] font-extralight text-[20px]'>Trading Period <strong className='ml-2 font-semibold'>Unlimited</strong></p>
            <p className='text-[#FCFCFC] font-extralight text-[20px]'>Minimum Trading Days <strong className='ml-2 font-semibold'>8</strong></p>
            <p className='text-[#FCFCFC] font-extralight text-[20px]'>Expert Advisor <strong className='ml-2 font-semibold'>Yes</strong></p>
            <p className='text-[#FCFCFC] font-extralight text-[20px]'>Trade Copiers <strong className='ml-2 font-semibold'>Yes</strong></p>
          </div>
        </div>
      </section>


      <ConstarAnim />

      <AcedemySec />

      <EarthAnim />

      <section className='trade mt-[-7%] relative z-[2]'>
        <div className="container">
          <SectionHeading className="flex items-center flex-col md:flex-row text-center md:text-left gap-6" heading="Trade with the World. Win Together." para="We’re more than a prop trading firm. <br /> We’re a global trading community. Join thousands of traders in multiple
                languages, all connected in one space." />

          <CountrySlider />

          <div className="grid lg:grid-cols-2 my-10 gap-6">

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

            <div className='grid md:grid-cols-2 gap-6'>

              <div className='social-box min-h-[290px] base-color rounded-[12px] border-[#002E55] border-1 p-[25px] flex flex-col justify-end discord'>
                <h6 className='text-[20px] font-medium text-[#CCCCCC]'>Connect with fellow traders</h6>
              </div>

              <div className='social-box min-h-[290px] base-color rounded-[12px] border-[#002E55] border-1 p-[25px] flex flex-col justify-end whatsapp'>
                <h6 className='text-[20px] font-medium text-[#CCCCCC] mb-2'>Instant support</h6>
                <BubbleButton className="btn btn-primary bg-green-gradient primary-theme hidden lg:block">
                  <WhatsAppicon />

                  Chat Now
                </BubbleButton>
              </div>

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

      <section className='security relative z-[3] py-[8rem] mb-[5rem]'>
        <video src={SecurityVideo} autoPlay muted playsInline loop className='opacity-85 absolute top-0 left-0 w-full h-full object-cover z-[-1] object-center'></video>
        <div className="container">
          <div className='w-full'>
            <img src={LockImg} className='mx-auto mb-6' alt="image" />
            <SectionHeading className="mb-[0]" badge="Go4trades cards" heading="Security you can bank on" para="We prioritize security, transparency, and compliance, ensuring a safe <br /> trading environment." />
          </div>
        </div>
      </section>

      <Lighting />

      <section className='join-us py-[4rem]'>
        <div className="container">
          <div className='grid md:grid-cols-2 gap-6'>

            <JoinBox heading="Join us on Whatsapp Channel" para="Get insights from other users about Go4trades and our experience" img={WhatsAppIcon} link="#" />
            <JoinBox heading="Join Discord Community" para="Get insights from other users about Go4trades and our experience" img={DiscordIcon} link="#" />

          </div>
        </div>
      </section>
    </>
  )
}

export default Home
