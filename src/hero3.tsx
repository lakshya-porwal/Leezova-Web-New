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
const GLASS_CARD_CLASSES = "relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-black/40 via-black/50 to-blue-900/60 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 group p-6 pt-12";
const GLOW_EFFECT_CLASSES = "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none";

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
      title: "Analysis/Audit",
      description: "Company analysis and audit is required to understand your company and to get a clear picture of your industry. By this, we determine your company position within your market with respect to your main competitors. A systematic audit determines potential obstacles to the performance of your website and helps build the foundation for your wider digital marketing efforts.",
      imagePosition: "right"
    },
    {
      id: 2,
      title: "Website Business & Marketing Plan",
      description: "Marketing plans are the foundation of product and service success. It is very much required to develop and design a marketing plan before optimizing your business to deliver the best possible experience.",
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Brand Quality Traffic",
      description: "Websites are evaluated on the basis of quantity and quality traffic. Understanding where the traffic is coming from is important as it decides whether your website is marketing in the right direction, bringing in business, and attracting potential clients. Generating quality and relevant traffic is crucial for a strong conversion rate.",
      imagePosition: "right"
    },
    {
      id: 4,
      title: "Audience Engagement",
      description: "Providing the right services, products, and content relevant to your business helps your website attract a potential audience, thereby increasing engagement and driving business growth.",
      imagePosition: "left"
    },
    {
      id: 5,
      title: "Lead & Customer Generation",
      description: "We, with our team, will bring leads to your business and new customers with the services we offer.",
      imagePosition: "right"
    }
  ], []);

  const renderBannerTitle = (title: string) => {
    if (title.includes('/')) {
      const parts = title.split('/').map(part => part.trim());
      return parts.map((part, index) => (
        <div key={index} className="text-white font-bold text-xl md:text-2xl leading-tight uppercase">
          {part}
        </div>
      ));
    }
    
    const words = title.split(' ');
    if (words.length > 2) {
      return (
        <>
          <div className="text-white font-bold text-xl md:text-2xl leading-tight uppercase">
            {words.slice(0, 2).join(' ')}
          </div>
          <div className="text-white font-bold text-xl md:text-2xl leading-tight uppercase">
            {words.slice(2).join(' ')}
          </div>
        </>
      );
    }
    
    return (
      <div className="text-white font-bold text-xl md:text-2xl leading-tight uppercase">
        {title}
      </div>
    );
  };

  return (
    <div className="w-full bg-black/[0.96]">
      {/* Services Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`${GLASS_CARD_CLASSES} min-h-[320px] flex flex-col `}
              >
                <div className={GLOW_EFFECT_CLASSES} />
                
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

      {/* Our Process Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Process
          </h2>
          
          <div className="space-y-6">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className={`${GLASS_CARD_CLASSES} rounded-2xl`}
              >
                <div className={GLOW_EFFECT_CLASSES} />
                
                <div className={`flex flex-col ${step.imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Banner Section */}
                  <div className={`lg:w-64 lg:flex-shrink-0 bg-black p-6 md:p-8 flex flex-col justify-center min-h-[200px] lg:min-h-[240px]`}>
                    <div className="space-y-3">
                      {renderBannerTitle(step.title)}
                      <div className="text-white/90 text-xs md:text-sm mt-4 font-medium">
                        Process Step {step.id}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero3;
