import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LightingBlur, logo } from "../assets";
import { CanvasImages } from "../utils/statics";

gsap.registerPlugin(ScrollTrigger);

const Lighting = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    document.body.style.overflow = "hidden";

    const canvas = canvasRef.current;
    const section = sectionRef.current;

    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    const imagesMap = import.meta.glob(
      '/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/*.jpg',
      { eager: true, as: 'url' }
    );

    const imagePaths = Object.entries(imagesMap)
      .sort(([a], [b]) => {
        const getIndex = str => parseInt(str.match(/\((\d+)\)/)?.[1] || 0, 10);
        return getIndex(a) - getIndex(b);
      })
      .map(([_, path]) => path);

    const frameCount = 150;
    const images = [];

    const imageSeq = {
      frame: 1
    }



    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === 11 - 1) {
        setIsLoading(false);
        document.body.style.overflow = "unset";
        ScrollTrigger.refresh();
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = imagePaths[i];
      images.push(img);

      img.onload = handleImageLoad;
    }



    function ScaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

    function render() {
      ScaleImage(images[imageSeq.frame], context);
    }

    images[1].onload = render;


    const ctx = gsap.context(() => {

      gsap.set(text2.current, {
        opacity: 0,
      });
      gsap.set(section, {
        opacity: 0,
      })

      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          scrub: 2,
          trigger: canvas,
          start: "top 0%",
          end: "+=1500",
        },
        onUpdate: render
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          anticipatePin: true,
          start: "bottom 100%",
          end: "+=1500",
          scrub: true,
          onUpdate: (self) => {
            if (self.progress.toFixed(1) == '0.5' && self.direction == 1) {
              gsap.to(text1.current, {
                opacity: 0,
                duration: .7,
              });
              gsap.to(text2.current, {
                opacity: 1,
                duration: .7,
              });
            }
            else if (self.progress.toFixed(1) == '0.5' && self.direction == -1) {
              gsap.to(text1.current, {
                opacity: 1,
                duration: .7,
              });
              gsap.to(text2.current, {
                opacity: 0,
                duration: .7,
              });
            }
          },
          onEnter: () => {
            gsap.to(section, {
              opacity: 1,
              duration: 0.6,
            });
          },
          onEnterBack: () => {
            gsap.to(section, {
              opacity: 1,
              duration: 0.6,
            });
          },
          onLeave: () => {
            gsap.to(section, {
              opacity: 0,
              duration: 0.6,
            });
          },
          onLeaveBack: () => {
            gsap.to(section, {
              opacity: 0,
              duration: 0.6,
            });
          }
        }
      });

      ScrollTrigger.refresh();

    });

    return () => ctx.revert();
  }, []);


  return (
    <>
      <div className={`preloader fixed h-full w-full bg-[#01111F] top-0 left-0 flex items-center justify-center z-[9999] ${ (isLoading) ? 'block' : 'hidden' }`}>
        <img src={logo} alt="logo" />
      </div>
      <section ref={sectionRef} className="overflow-hidden h-screen relative bg-[#01111F]">
        <div className="text text-center px-10 absolute top-1/2 left-1/2 -translate-1/2" ref={text1}>
          <h1>Looking for a sign?</h1>
        </div>
        <div className="text text-center px-10 absolute top-1/2 left-1/2 -translate-1/2" ref={text2}>
          <h1>Another Text will appear here. </h1>
        </div>
        <img src={LightingBlur} alt="image" className="absolute top-0 left-0 w-full h-[102%]" />
        <canvas id="" ref={canvasRef}></canvas>
      </section>
    </>
  );
};

export default Lighting;