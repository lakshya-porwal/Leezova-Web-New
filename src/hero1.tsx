import { useState, useEffect, useRef } from 'react';
import { ReactIcon, ReactQueryIcon, ReduxIcon, CSSIcon, GitIcon, HTMLIcon, JSIcon } from './heroIcons/icons';



function Hero1({ onStartProject }: { onStartProject: () => void }) {
    const icons = [ReactIcon, ReactQueryIcon, ReduxIcon, CSSIcon, GitIcon, HTMLIcon, JSIcon];
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [iconGlows, setIconGlows] = useState<number[]>(Array(24).fill(0));
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const updateGlows = () => {
            const newGlows = iconRefs.current.map((iconRef) => {
                if (!iconRef) return 0;

                const rect = iconRef.getBoundingClientRect();
                const iconCenterX = rect.left + rect.width / 2;
                const iconCenterY = rect.top + rect.height / 2;

                const distance = Math.sqrt(
                    Math.pow(mousePosition.x - iconCenterX, 2) +
                    Math.pow(mousePosition.y - iconCenterY, 2)
                );

                // Spotlight radius - adjust this value to change the spotlight size
                const spotlightRadius = 200;
                const glowIntensity = Math.max(0, 1 - distance / spotlightRadius);

                return glowIntensity;
            });

            setIconGlows(newGlows);
        };

        updateGlows();
    }, [mousePosition]);

    return (
        <div
            ref={containerRef}
            className='h-screen w-full flex items-center justify-center relative bg-black overflow-hidden cursor-none'
        >
            {/* Custom rounded cursor */}
            <div
                className='fixed pointer-events-none z-50 mix-blend-difference hidden lg:block'
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'white',
                    transition: 'width 0.2s ease, height 0.2s ease',
                }}
            />

            {/* Hero Content */}
            <div className="relative z-20 px-6 md:px-0 max-w-2xl text-left">
                <h1 className="
    text-white 
    font-semibold
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    leading-tight
    tracking-tight
  ">
                    Where clean UI meets scalable code.
                </h1>
                <p className="
    mt-4
    max-w-xl
    text-gray-300
    text-sm sm:text-base md:text-lg
    leading-relaxed
  ">
                    We design and build digital products that feel effortless and perform flawlessly.
                </p>
                <button
                    onClick={onStartProject}
                    className="
      mt-8
      inline-flex items-center justify-center
      px-7 py-3
      rounded-full
      bg-white/10 backdrop-blur-md
      border border-white/20
      text-white
      text-sm md:text-base
      font-medium
      
      relative group
      shadow-lg
    "

                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-2xl -z-10" style={{ top: '-8px', left: '-8px', right: '-8px', bottom: '-8px' }}></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/40 via-cyan-400/30 to-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-3xl -z-10" style={{ top: '-20px', left: '-20px', right: '-20px', bottom: '-20px' }}></div>
                    Start a Project
                </button>
            </div>


            <div className='absolute top-0 right-0 grid grid-cols-5 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-18 gap-2 xl:gap-12 bg-transparent' style={{ maxHeight: '100vh', maxWidth: '100vw' }}>
                {Array.from({ length: 40 }).map((_, index) => {
                    const IconComponent = icons[index % icons.length];
                    const glowIntensity = iconGlows[index];
                    const glowSize = 1 + glowIntensity * 15;
                    const glowOpacity = 0.5 + glowIntensity * 1.0;

                    return (
                        <div
                            key={index}
                            ref={(el) => { iconRefs.current[index] = el; }}
                            className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24  flex items-center justify-center'
                            style={{
                                filter: glowIntensity > 0
                                    ? `drop-shadow(0 0 ${glowSize}px rgba(255, 255, 255, ${glowOpacity}))`
                                    : 'none',
                                transition: 'filter 0.1s ease-out',
                            }}
                        >
                            <div
                                style={{
                                    filter: glowIntensity > 0
                                        ? `grayscale(${1 - glowIntensity})`
                                        : 'grayscale(1)',
                                    transition: 'filter 0.1s ease-out',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <IconComponent className='w-full h-full p-1 sm:p-2 md:p-1' />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div
                className='absolute inset-0 pointer-events-none'
                style={{
                    background: 'linear-gradient(46deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 21%, rgba(0, 0, 0, 1) 28%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.81) 90%, rgba(0, 0, 0, 0.7) 92%, rgba(0, 0, 0, 0.57) 94%, rgba(0, 0, 0, 0.28) 96%, rgba(0, 0, 0, 0.08) 98%, rgba(0, 0, 0, 0) 100%)'
                }}
            ></div>
        </div>
    )
}

export default Hero1
