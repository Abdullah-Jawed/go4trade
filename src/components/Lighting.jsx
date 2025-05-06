import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LightingBlur } from "../assets";
import { CanvasImages } from "../utils/statics";

gsap.registerPlugin(ScrollTrigger);

const Lighting = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);

  useEffect(() => {

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

    function files(index) {
      var data = CanvasImages;
      return data.split("\n")[index];
    }

    const frameCount = 300;
    const images = [];

    const imageSeq = {
      frame: 1
    }

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      // img.style.mixBlendMode = 'color-dodge';
      images.push(img);
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

      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          trigger: canvas,
          start: "top 0%",
          end: "+=3000",
        },
      });

      tl.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        onUpdate: render
      });

      // tl.to(text1.current, { opacity: 0, duration: 1 }, 0.01); // at 50%
      // tl.to(text2.current, { opacity: 1, duration: 1 }, 0.01); // also at 50%

      gsap.to(canvas, {
        scrollTrigger: {
          trigger: section,
          start: 'top 0%',
          ease: "none"
        },
      });

      ScrollTrigger.create({
        trigger: section,
        pin: true,
        anticipatePin: true,
        start: "bottom 100%",
        end: "+=3000",
      });

    });

    return () => ctx.revert();
  }, []);


  return (
    <section ref={sectionRef} className="overflow-hidden h-screen relative bg-[#01111F]">
      <div className="text text-center px-10 absolute top-1/2 left-1/2 -translate-1/2" ref={text1}>
        <h1>Looking for a sign?</h1>
      </div>
      <div className="text text-center px-10 absolute top-1/2 left-1/2 -translate-1/2" ref={text2}>
        <h1>Looking for a </h1>
      </div>
      <img src={LightingBlur} alt="image" className="absolute top-0 left-0 w-full h-[102%]" />
      <canvas id="" ref={canvasRef}></canvas>
    </section>
  );
};

export default Lighting;