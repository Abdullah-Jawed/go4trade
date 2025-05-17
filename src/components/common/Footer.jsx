import { useEffect, useState } from "react";
import { FooterBg, logo } from "../../assets";
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from "tsparticles";
import { FooterParticle } from "../../assets";
import SectionHeading from "./SectionHeading";
import ArrowSvg from "./ArrowSvg";
import { FooterSocials, FooterQuickLinks, FooterHelp, FooterLegal } from "../../utils/statics";
import { Link } from "react-router-dom";
// import discordi from '../../assets/images/discordi.png';

const Footer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = FooterParticle;

  return (
    <>
      <div className="container relative mt-[5rem] max-w-max w-full px-0">
        {init ? (
          <Particles
            id="tsparticles4"
            init={initParticlesEngine}
            options={particlesOptions}
            className="absolute w-full h-full top-[31%] left-0 -translate-y-1/2 z-10"
          />
        ) : ''}

        <div className="image relative flex items-center justify-center">
          <img src={FooterBg} className='mx-auto' alt="image" />
        </div>
      </div>

      <footer className='footer pb-5 mt-[-7%]'>
        <div className="container px-8 lg:px-10">

          <div className="flex mb-[3rem]">
            <div className="md:w-[45%] mx-auto">
              <SectionHeading heading="Subscribe to Our Newsletter" />
              <div className="form-group relative">
                <input type="email" name="email" id="email" className="footer-input" placeholder="Enter your email address" />
                <button type="submit" className="footer-btn absolute top-0 right-0"><ArrowSvg /></button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 border-t-1 border-b-1 mb-10 border-[#5B5B5B] py-[3rem]">
            <div className="col-span-2 lg:col-span-1">
              <img src={logo} alt="logo" />
            </div>
            <div className="item">
              <h6 className="font-light text-[#FCFCFC] text-[16px] mb-4">Quick Links</h6>
              <ul>
                {FooterQuickLinks.map((item, index) => (
                  <li key={index} className="mb-3.5"><Link to={item.link} className="text-[14px] font-light text-[#A0A0A0] hover:text-[#004986] transition">{item.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="item">
              <h6 className="font-light text-[#FCFCFC] text-[16px] mb-4">Help</h6>
              <ul>
                {FooterHelp.map((item, index) => (
                  <li key={index} className="mb-3.5"><Link to={item.link} className="text-[14px] font-light text-[#A0A0A0] hover:text-[#004986] transition">{item.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="item">
              <h6 className="font-light text-[#FCFCFC] text-[16px] mb-4">Legal</h6>
              <ul>
                {FooterLegal.map((item, index) => (
                  <li key={index} className="mb-3.5"><Link to={item.link} className="text-[14px] font-light text-[#A0A0A0] hover:text-[#004986] transition">{item.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="item">
              <h6 className="font-light text-[#FCFCFC] text-[16px] mb-4">Community</h6>
              <ul className="flex flex-wrap gap-3 items-center">
                {FooterSocials.map((item, index) => (
                  <li key={index}><a href={item.link}><img src={item.img} alt="image" /></a></li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-[#A0A0A0] text-[12px] font-light">©2024 GO4TRADES PROFESSIONAL AND MANAGEMENT TRAINING SERVICES FZCO. <br /><br />

            All Rights Reserved. The content on this website is copyrighted by the Company and must not be reproduced without permission.
            The website go4trades.com is owned and operated by GO4TRADES PROFESSIONAL AND MANAGEMENT TRAINING SERVICES FZCO  (the “Company”), which holds Educational Services Permit No. 632018 for Accounting and Finance Training issued by the Government of Dubai Knowledge and Development Authority.
            The services provided on this website are for professional skill assessment purposes. The outcome of these services is determined by the individual’s professional skill level and their capacity to perform under the program guidelines and objectives detailed for each service. Clients are advised to conduct a comprehensive review of the program requirements before enrolling in any services. Past performance is not necessarily indicative of future results.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
