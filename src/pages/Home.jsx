import React from 'react'
import { bannerVideo } from '../assets';
import videoPoster from '../assets/images/video-dummy.png';
import video_icon from '../assets/images/play-icon.png'
import { BubbleButton } from '../components/common';
import { Badge } from '../components/common';
import HighlightBox from '../components/HighlightBox';

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
        <div className="container px-[10px] lg:px-10">
          <div className="video-box">
            <img src={videoPoster} alt="" className='w-full' />
            <button className='video-btn'><img src={video_icon} alt="video icon" /></button>
          </div>
        </div>
      </section>

      <section className='key-highlights'>
        <div className="container">
          <div className="heading text-center">
            <Badge className='mx-auto mb-4'>️Key Highlights</Badge>
            <h2>Change the way you trade</h2>
          </div>
          <HighlightBox />
        </div>
      </section>

      <section className='steps'>
        <div className="container">
          <div className="heading text-center">
            <Badge className='mx-auto mb-4'>️Steps</Badge>
            <h2>Switch to Go4Trades <br />
              In 3 Steps</h2>
            <p className='text-[#CCCCCC] text-[20px] font-extralight'>Join a prop firm designed for the next-generation of traders. Take the <br /> challenge, prove your skills, and keep 90% of your profits.</p>
          </div>
        </div>
      </section>
    </> 
  )
}

export default Home
