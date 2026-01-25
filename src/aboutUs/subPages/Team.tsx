import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const redDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const columns = gsap.utils.toArray(".team-column") as HTMLElement[];

        if (columns.length === 0) {
          console.warn("No columns found with class 'team-column'");
          return;
        }

        const triggerElement = redDivRef.current;

        if (!triggerElement) return;

        columns.forEach((column) => {
          gsap.set(column, { scale: 1 });

          gsap.fromTo(
            column,
            {
              scale: 1.05,
            },
            {
              scale: 0.95,
              ease: "power2.out",
              scrollTrigger: {
                trigger: triggerElement,
                start: "top bottom",
                end: "center center",
                scrub: 2,
                markers: false,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      }, containerRef);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) {
        ctx.revert();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen w-full md:pt-20 mt-5 relative bg-black" ref={containerRef}>
      <div className="md:h-[450px] flex items-center justify-center">
        <div className="text-left flex flex-col pl-4">
          <span className="text-gray-200 text-[45px] md:text-[108px] leading-tight">
            Moments with
          </span>

          <span className="text-[#4169E1] text-[45px] md:text-[108px] font-bold leading-tight mt-1 md:mt-0">
            LEEZOVA
          </span>

          <span className="text-gray-200 text-[45px] md:text-[108px] leading-tight mt-1 md:mt-0">
            Family
          </span>
        </div>
      </div>

      <div className="h-[100vh] w-full relative items-center content-center" ref={redDivRef}>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center h-[97vh] max-w-full">
          <div style={{
            background: 'radial-gradient(circle,rgba(0, 0, 0, 0) 15%,rgba(0, 0, 0, 0.4) 60%,rgba(0, 0, 0, 1) 100%)'
          }} className="w-full h-[100vh] z-20" />
        </div>

        {/* Mobile Layout (below 768px) */}
        <div className="relative z-10 h-[95vh] md:hidden">
          <div className="h-full flex flex-col gap-4 text-black">
            <div className="flex-1 overflow-x-auto">
              <div className="h-full flex gap-2 pb-2" style={{ width: 'max-content', minWidth: '100%' }}>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 1 </div>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 2</div>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 3</div>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 4</div>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 5</div>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 6</div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-4">
              <div className="w-full h-full border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex items-center justify-center">
                Tisha
              </div>
            </div>
            <div className="flex-1 overflow-x-auto">
              <div className="h-full flex gap-2 pb-2" style={{ width: 'max-content', minWidth: '100%' }}>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 7</div>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 8</div>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 9</div>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 10</div>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 11</div>
                <div className="w-[90vw] border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column flex-shrink-0">IMG 12</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (md and above) */}
        <div className="relative z-10 h-[95vh] hidden md:block">
          <div className="h-full flex flex-col gap-4 text-black">
            <div className="flex-1">
              <div className="h-full flex gap-2">
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 1</div>
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 2</div>
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 3</div>
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 4</div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden relative">
              <div className="h-full flex gap-2">
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column -ml-[10%]">IMG 5</div>
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 6</div>
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 7</div>
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 8</div>
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column -mr-[10%]">IMG 9</div>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-full flex gap-2">
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 10</div>
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 11</div>
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 12</div>
                <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">IMG 13</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center px-6 my-20">
        <div className="w-full max-w-6xl aspect-[21/9] rounded-2xl overflow-hidden bg-gray-900 p-2">
          <div className="w-full h-full rounded-lg">

          </div>
        </div>
      </div>
    </div>
  );
}