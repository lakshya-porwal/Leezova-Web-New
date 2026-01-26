import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function SolutionHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backscreenRef = useRef<HTMLDivElement>(null);
  const floatingHeadRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !floatingHeadRef.current || !textRef.current) return;

    const container = containerRef.current;
    const floatingHead = floatingHeadRef.current;
    const text = textRef.current;

    // Initial states - center elements using GSAP
    // Face starts hidden behind backscreen (low opacity, positioned lower/behind)
    gsap.set(floatingHead, { 
      xPercent: -50, 
      yPercent: -50, 
      x: 0, 
      y: 100, 
      opacity: 0.2,
      scale: 0.95
    });
    // Text starts visible with semi-transparent white
    gsap.set(text, { 
      xPercent: -50, 
      yPercent: -50, 
      x: 0,
      y: 0,
      opacity: 0.8, 
      color: '#ffffff' 
    });

    // Create hover timeline
    const hoverTimeline = gsap.timeline({ paused: true });

    // Floating head animation: comes up from behind the backscreen
    hoverTimeline.to(floatingHead, {
      y: -10,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power3.out'
    }, 0);

    // Text animation: fade out then fade in (transparent to white)
    hoverTimeline.to(text, {
      opacity: 0,
      duration: 1.0,
      ease: 'power2.in'
    }, 0);

    hoverTimeline.to(text, {
      opacity: 1,
      color: '#ffffff',
      duration: 0.8,
      ease: 'power2.out'
    }, 0.4);

    // Mouse enter
    const handleMouseEnter = () => {
      hoverTimeline.play();
    };

    // Mouse leave (reverse animation)
    const handleMouseLeave = () => {
      hoverTimeline.reverse();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      hoverTimeline.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className='min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden cursor-pointer h-full'
    >
      {/* Blue to black gradient background */}
      <div 
        className='absolute inset-0 z-0'
        style={{
          background: 'radial-gradient(circle,rgba(0, 0, 0, 1) 0%, rgba(9, 9, 121, 1) 58%, rgba(0, 0, 0, 1) 100%)'
        }}
      />

      {/* Layer 1: SOLUTIONS Text (bottom layer - z-[1], behind head and screen) */}
      <h1 
        ref={textRef}
        className='absolute z-[1] text-7xl md:text-8xl lg:text-9xl font-bold pointer-events-none text-white'
        style={{
          top: '25%',
          left: '50%'
        }}
      >
        SOLUTIONS
      </h1>

      {/* Layer 2: Floating Head (middle layer - z-10, on top of text, behind backscreen) */}
      <div 
        ref={floatingHeadRef}
        className='absolute z-10 flex items-center justify-center pointer-events-none'
        style={{
          width: '45%',
          maxWidth: '500px',
          top: '42%',
          left: '50%'
        }}
      >
        <img 
          src="/floating head.svg" 
          alt="Floating Head"
          loading="eager"
          decoding="async"
          className='w-full h-auto object-contain'
        />
      </div>

      {/* Layer 3: Backscreen (top layer - z-20, positioned at bottom exactly 50% height) */}
      <div 
        ref={backscreenRef}
        className='absolute z-20 pointer-events-none overflow-hidden px-10'
        style={{
          width: '100%',
          height: '50%',
          bottom: 0,
          left: 0
        }}
      >
        <img 
          src="/backscreen.svg" 
          alt="Backscreen"
          loading="eager"
          decoding="async"
          className='w-full h-full object-cover'
          style={{
            objectPosition: 'center top'
          }}
        />
      </div>

      {/* Black gradient blend at bottom - TOPMOST layer (z-[30]) for smooth blending */}
      {/* Adjusted to start later so text is more visible */}
      <div 
        className='absolute z-[30] pointer-events-none'
        style={{
          width: '100%',
          height: '50%',
          bottom: 0,
          left: 0,
          background: 'linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 1) 100%)'
        }}
      />
    </div>
  );
}

export default SolutionHero;
