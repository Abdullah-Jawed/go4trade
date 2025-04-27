import React from 'react'
import { bannerVideo } from '../assets';
import { BubbleButton } from '../components/common';
import { Badge } from '../components/common';

const Home = () => {
  return (
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
  )
}

export default Home
