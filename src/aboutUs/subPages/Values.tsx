import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const values = [
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices in all our interactions.",
      icon: <img src="/Integrity.svg" alt="Integrity" className="w-32 h-32 group-hover:brightness-0 group-hover:invert transition-all" />,
      padding: "md:pt-10 pt-8",
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to solve complex challenges and drive progress.",
      icon: <img src="/Vector (1).svg" alt="Innovation" className="w-32 h-32 group-hover:brightness-0 group-hover:invert transition-all" />,
      padding: "md:pb-10",
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in every project, setting and exceeding industry standards.",
      icon: <img src="/Vector.svg" alt="Excellence" className="w-32 h-32 group-hover:brightness-0 group-hover:invert transition-all" />,
      padding: "md:pt-10",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our organization and with our clients.",
      icon: <img src="/Group.svg" alt="Collaboration" className="w-32 h-32 group-hover:brightness-0 group-hover:invert transition-all" />,
      padding: "md:pt-10",
    },
    {
      title: "Customer Focus",
      description: "Our clients' success is our success. We prioritize their needs and work tirelessly to deliver value.",
      icon: <img src="/User Focus.svg" alt="Customer Focus" className="w-32 h-32 group-hover:brightness-0 group-hover:invert transition-all" />,
      padding: "md:pb-10",
    },
    {
      title: "Sustainability",
      description: "We are committed to sustainable practices and long-term thinking in all our endeavors.",
      icon: <img src="/Sustainability.svg" alt="Sustainability" className="w-32 h-32 group-hover:brightness-0 group-hover:invert transition-all" />,
      padding: "md:pt-10",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const middleCardIndices = [1, 4];

    const mm = gsap.matchMedia();

    // ✅ Enable animation only on lg and above
    mm.add("(min-width: 1024px)", () => {
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: middleCardIndices.includes(index) ? 80 : -80,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.5,
          },
        });
      });

      ScrollTrigger.refresh();
    });

    // No animations on sm and md screens
    mm.add("(max-width: 1023px)", () => {
      cards.forEach((card) => {
        gsap.to(card, { y: 0 });
      });
    });

    return () => {
      mm.revert(); // cleanup on resize/unmount
    };
  }, []);


  return (
    <div className="min-h-screen bg-black pt-24 pb-12 relative">
      <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
        <h1 className="mt-8 md:mt-20 md:text-[50px] text-[40px] font-bold text-white select-none">
          OUR VALUES
        </h1>
      </div>

      <div className="relative z-10 mt-24 px-4 sm:px-6">
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-x-8 place-items-center max-w-7xl mx-auto"
        >
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}

              className={`h-[400px] w-full max-w-[350px] ${value.padding} group px-4 sm:px-0`}
            >
              <div className="h-full w-full border-2 border-white rounded-xl p-1">
                <div className="h-full w-full bg-black rounded-lg flex flex-col justify-between">
                  <div className="flex-1 flex items-center justify-center">
                    {value.icon}
                  </div>

                  <div className="px-4 pb-6 text-center">
                    <h3 className="text-2xl font-semibold text-[#4169E1]">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
