import { useMemo } from 'react';
import type { ReactElement } from 'react';

// Icon components
const MonitorIcon = (): ReactElement => (
  <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MobileIcon = (): ReactElement => (
  <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const ChartIcon = (): ReactElement => (
  <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const EditIcon = (): ReactElement => (
  <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const HeartIcon = (): ReactElement => (
  <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const SearchIcon = (): ReactElement => (
  <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>
);

// Common class names
const GLASS_CARD_CLASSES = "relative rounded-xl overflow-hidden backdrop-blur-md 60 border border-white/50 transition-all duration-300 group p-6 pt-12";
const GLOW_EFFECT_CLASSES = "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none";

interface Service {
  id: number;
  title: string;
  description: string;
  iconColor: string;
  icon: ReactElement;
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
}

function Hero3() {
  const services: Service[] = useMemo(() => [
    {
      id: 1,
      title: "Website Design & Development",
      description: "From responsive designs to robust back-end solutions, we have the skills and creativity to bring your vision to life.",
      iconColor: "bg-yellow-400",
      icon: <MonitorIcon />
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Our expert team combines cutting-edge technology with creative design to deliver seamless user experiences.",
      iconColor: "bg-blue-300",
      icon: <MobileIcon />
    },
    {
      id: 3,
      title: "Online Marketing",
      description: "Our experts use advanced strategies in SEO, social media, and content marketing to boost engagement.",
      iconColor: "bg-orange-300",
      icon: <ChartIcon />
    },
    {
      id: 4,
      title: "Content Writing & Optimization",
      description: "At Leezova, we specialize in crafting compelling content that not only engages your audience but also enhances your online presence.",
      iconColor: "bg-purple-300",
      icon: <EditIcon />
    },
    {
      id: 5,
      title: "Support",
      description: "Our dedicated team is available 24/7 to assist you with any inquiries or issues you may encounter.",
      iconColor: "bg-yellow-400",
      icon: <HeartIcon />
    },
    {
      id: 6,
      title: "Search Engine Optimization (SEO)",
      description: "We tailor our approach to meet your unique business needs, ensuring your brand stands out in the digital landscape.",
      iconColor: "bg-cyan-300",
      icon: <SearchIcon />
    }
  ], []);

  const processSteps: ProcessStep[] = useMemo(() => [
    {
      id: 1,
      title: "Analysis & Audit",
      description: "Understanding your company, industry position, and market competitors to identify opportunities.",
      imagePosition: "right"
    },
    {
      id: 2,
      title: "Strategy & Planning",
      description: "Developing a comprehensive marketing plan tailored to your business goals and target audience.",
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Quality Traffic Generation",
      description: "Driving relevant, high-quality traffic to your website through targeted marketing efforts.",
      imagePosition: "right"
    },
    {
      id: 4,
      title: "Audience Engagement",
      description: "Creating compelling content and experiences that attract and engage your potential customers.",
      imagePosition: "left"
    },
    {
      id: 5,
      title: "Lead Generation",
      description: "Converting engaged visitors into qualified leads and new customers for your business.",
      imagePosition: "right"
    }
  ], []);


  return (
    <div className="w-full bg-black/[0.96]">
      {/* Services Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`${GLASS_CARD_CLASSES}  min-h-[320px] flex flex-col `}
              >
                <div
                  className={GLOW_EFFECT_CLASSES}
                  style={{
                    background: "linear-gradient(90deg,rgba(9, 2, 92, 1) 0%, rgba(12, 12, 133, 0.29) 35%, rgba(255, 255, 255, 0) 100%)"
                  }}
                />

                <div className="relative z-10 flex flex-col h-full items-center text-center">
                  <div className={`w-20 h-20 ${service.iconColor} rounded-full flex items-center justify-center mb-4 bg-black/30 backdrop-blur-sm border border-white/10 flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white text-center mb-6">
            Our Process
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 bg-gradient-to-b from-white via-white/90 to-white hidden md:block" style={{ top: '0.5rem', height: 'calc(100% - 2rem)' }}></div>

            <div className="relative mb-6 sm:mb-8 md:mb-10">
              <div className="h-px block border-none bg-gradient-line w-full" style={{ background: 'linear-gradient(90deg, #fff0 15%, #ffffffb3 50%, #fff0 85%)' }}></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white rounded-full z-10 hidden md:block shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.5)]">
                <div className="absolute inset-0 bg-white/80 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="relative">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {processSteps.map((step) => {
                  const isLeft = step.imagePosition === "left";

                  return (
                    <div
                      key={step.id}
                      className={`relative flex flex-col md:flex-row items-center mt-2 ${isLeft ? "md:flex-row-reverse" : ""
                        }`}
                    >
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white rounded-full z-10 hidden md:block shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.5)]">
                        <div className="absolute inset-0 bg-white/80 rounded-full animate-pulse"></div>
                      </div>

                      <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-8" : "md:pl-8"} relative z-0`}>
                        <div className="relative rounded-xl overflow-hidden backdrop-blur-md bg-black/40 border border-white/20 hover:border-white/20 transition-all duration-300 group p-6 sm:p-7 md:p-8 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex flex-col justify-center">
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "linear-gradient(90deg,rgba(9, 2, 92, 1) 0%, rgba(12, 12, 133, 0.29) 35%, rgba(255, 255, 255, 0) 100%)" }}></div>

                          <div className="relative z-10">
                            <div className="text-white/80 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                              STEP {step.id}
                            </div>

                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-5">
                              {step.title}
                            </h3>

                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="hidden md:block w-[45%]"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-8 sm:mt-12 md:mt-16 z-20">
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-black/50 via-black/60 to-black/70 border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 group p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 text-center">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10">
                    The Road We've Paved Together
                  </h2>

                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                    From humble beginnings to becoming a trusted partner for businesses worldwide, our journey has been defined by innovation, dedication, and unwavering commitment to excellence. Through years of collaboration, we've transformed ideas into digital realities, helping countless companies establish their online presence, reach new audiences, and achieve their business goals. Today, we stand proud as a team that has delivered exceptional results across web development, mobile applications, digital marketing, and beyond.
                  </p>

                  <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                    <div className="w-full max-w-5xl mx-auto aspect-video rounded-xl flex items-center justify-center overflow-hidden">
                      <div className="text-gray-400 text-sm sm:text-base md:text-lg">
                        <img
                          src='/ResultPicture.png'
                          className=''
                          alt='RESULT PICTURE'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero3;
