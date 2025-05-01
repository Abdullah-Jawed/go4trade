import { useEffect, useMemo, useState } from "react";
import { EarthImg } from '../assets';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from "tsparticles";
import { EarthParticle } from "../assets";

const EarthAnim = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Your downloaded options from TS Particles website

    const particlesOptions = EarthParticle;

    return (
        <div className="container relative max-w-max w-full">
            {init ? (
                <Particles
                    id="tsparticles3"
                    init={initParticlesEngine}
                    options={particlesOptions}
                    className="absolute w-full h-[62%] top-[31%] -translate-y-1/2 z-10"
                />
            ) : ''}

            <div className="image relative flex items-center justify-center">
                <img src={EarthImg} className='mx-auto' alt="image" />
            </div>
        </div>
    )
}

export default EarthAnim