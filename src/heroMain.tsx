import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero2 from './hero2';
import Hero3 from './hero3';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero1 = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  // const blueDivRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !handRef.current) return;

    const container = containerRef.current;

    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${window.innerHeight * 1.2}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          // Add these for better cleanup
          anticipatePin: 1,
          fastScrollEnd: true,
        },
      });

      tl.to(handRef.current, {
        y: () => {
          const containerHeight = containerRef.current!.offsetHeight;
          const handHeight = handRef.current!.offsetHeight;
          return containerHeight - handHeight - 80;
        },
        ease: "none",
      });

      tl.to(
        textRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        ">-=0.1"
      );
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location]); // Re-run when location changes

  return (

    // GSAP CODE
    // <div
    //   ref={containerRef}
    //   className="relative h-screen w-full overflow-hidden"
    // >
    //   <div className="relative z-0 h-full w-full">
    //     <div className="h-full flex flex-col justify-evenly text-center">
    //       <div className="border-6 border-blue-500 text-7xl">
    //         Leezova
    //       </div>
    //     </div>
    //   </div>

    //   <div className="absolute inset-0 z-50 border border-amber-500 pointer-events-none flex flex-col pb-10 justify-between">
    //     <div ref={handRef} className="items-end flex justify-end border border-red-500 pr-36 pointer-events-none">
    //       <img src="/hand.png" alt="Magic" width={300} height={200} />
    //     </div>
    //     <div ref={blueDivRef} className="border border-red-500 text-left pl-[100px] pr-64 justify-between flex py-auto items-center pointer-events-none">
    //       <div ref={textRef} className='text-3xl text-left'>That's what we do, Leezova's Magic</div>
    //       <img src="/mouse.png" alt="Magic" width={260} height={130} />
    //     </div>

    //   </div>
    //   {/* <Hero2 /> */}

    // </div>
    <div className='h-full w-full flex flex-col'>
      <div className='h-screen w-full flex flex-col italic text-center items-center justify-center text-4xl'>
        Still in development
      </div>
      <div className='h-full w-full flex flex-col'>
        
        <Hero2 />
        <Hero3/>
      </div>
      
    </div>
  );
};

export default Hero1;