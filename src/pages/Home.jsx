import React from 'react'
import { bannerVideo } from '../assets';
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
            <video src={VideoSectionVideo} autoPlay muted loop playsInline className='w-full'></video>
            <button className='video-btn'><img src={video_icon} alt="video icon" /></button>
          </div>
        </div>
      </section>

      <section className='key-highlights'>
        <div className="container px-[30px]">
          <div className="heading text-center">

            <SectionHeading badge="Key Highlights" heading="Change the way you trade" />

          </div>
          <HighlightBox />
        </div>
      </section>


      <Drawsvg />


      <ConstarAnim />

      <AcedemySec />

      <EarthAnim />

    </>
  )
}

export default Home
