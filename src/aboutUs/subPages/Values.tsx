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
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <img src="/Integrity.svg" alt="Integrity" className="w-32 h-32 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
      ),
      padding: "md:pt-10 pt-8 ",
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to solve complex challenges and drive progress.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <img src="/Vector (1).svg" alt="Innovation" className="w-32 h-32 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
      ),
      padding: "md:pb-10 pb-0",
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in every project, setting and exceeding industry standards.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <img src="/Vector.svg" alt="Excellence" className="w-32 h-32 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
      ),
      padding: "md:pt-10 pt-0",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our organization and with our clients.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <img src="/Group.svg" alt="Collaboration" className="w-32 h-32 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
      ),
      padding: "md:pt-10 pt-0 ",
    },
    {
      title: "Customer Focus",
      description: "Our clients' success is our success. We prioritize their needs and work tirelessly to deliver value.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <img src="/User Focus.svg" alt="Customer Focus" className="w-32 h-32 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
      ),
      padding: "md:pb-10 pb-0",
    },
    {
      title: "Sustainability",
      description: "We are committed to sustainable practices and long-term thinking in all our endeavors.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <img src="/Sustainability.svg" alt="Sustainability" className="w-32 h-32 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
      ),
      padding: "md:pt-10 pt-0",
    },
  ];

  useEffect(() => {
  if (!containerRef.current) return;

  const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
  if (cards.length !== 6) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    const middleCardIndices = [1, 4];

    cards.forEach((card, index) => {
      const isMiddleCard = middleCardIndices.includes(index);

      gsap.set(card, { y: 0 });

      gsap.to(card, {
        y: isMiddleCard ? 80 : -80,
        ease: "power1.out",
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
  return () => {
    mm.revert();
  };
}, []);


  return (
    <div className="min-h-screen bg-black pt-24 pb-12 relative">
      <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
        <h1 className="mt-8 md:mt-16 md:text-[50px] font-bold text-white  select-none">
   OUR VALUES
</h1>
      </div>
      <div className="w-full h-full flex items-center justify-center my-[100px] relative z-10 md:px-8 px-12 mt-5 md:mt-24">
        <div ref={containerRef} className="flex flex-col  gap-6 md:grid md:grid-cols-3 md:gap-4  mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`h-[400px] flex items-center justify-center w-[350px] px-6 ${value.padding} group`}
            >
              <div
                className={`flex items-center justify-center flex-col ${value.borderColor} border-2 h-full w-full rounded-xl p-1 border-white`}
              >
                <div 
                  className={`flex flex-col ${value.bgColor} h-full w-full rounded-lg relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                      <path
                        d="M 0 200 Q 100 150 200 200 T 400 200"
                        fill="none"
                        stroke="#4169E1"
                        strokeWidth="2"
                        opacity="0.3"
                      />
                      <path
                        d="M 0 250 Q 150 200 300 250 T 400 250"
                        fill="none"
                        stroke="#4169E1"
                        strokeWidth="2"
                        opacity="0.2"
                      />
                    </svg>
                  </div>

                  <div className="w-full h-full flex items-center justify-center p-4 relative z-10">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white/20 via-white/10 to-transparent blur-2xl"></div>
                    </div>
                    <div className="relative z-10">
                      {value.icon}
                    </div>
                  </div>

                  <div className="w-full h-full flex items-center justify-center flex-col gap-2 p-4 relative z-10">
                    <h1 className="text-2xl font-semibold text-[#4169E1] text-center">
                      {value.title}
                    </h1>
                    <p className="text-sm text-gray-400 text-center leading-relaxed max-w-xs">
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

