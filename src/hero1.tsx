import { useState, useEffect, useRef } from 'react';
import { ReactIcon, ReactQueryIcon, ReduxIcon, CSSIcon, GitIcon, HTMLIcon, JSIcon } from './heroIcons/icons';

function Hero1() {
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
