export default function OurMission() {
  const statistics = [
    {
      number: "135",
      label: "Launched Website"
    },
    {
      number: "1M",
      label: "Client Sales"
    },
    {
      number: "97%",
      label: "Customer Satisfaction"
    },
    {
      number: "20",
      label: "Website Templates"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-8 md:pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Introduction Section */}
        <div className="mb-12 md:mb-16">
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-4xl">
            At Leezova, we're on a mission to empower businesses of all sizes. We believe in the limitless potential of services e-commerce and are dedicated to providing the tools and support you need to succeed online.
          </p>
        </div>

        {/* Statistics Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, rgba(15, 15, 35, 1) 0%, rgba(30, 30, 65, 0.95) 100%)',
              }}
            >
              {/* Dotted lines pattern */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                }}
              />
              
              {/* Ribbon-like text overlay wrapping bottom-left */}
              <div className="absolute bottom-0 left-0 overflow-hidden pointer-events-none">
                <div 
                  className="absolute bottom-4 left-4 transform -rotate-12 origin-bottom-left"
                  style={{
                    background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.2) 0%, rgba(135, 206, 235, 0.1) 100%)',
                    padding: '8px 20px',
                    borderRadius: '20px',
                  }}
                >
                  <span 
                    className="text-xs md:text-sm font-bold whitespace-nowrap"
                    style={{
                      color: '#4A90E2',
                      opacity: 0.6,
                    }}
                  >
                    Solutions, Global Grow
                  </span>
                </div>
              </div>

              {/* Angular N/M logo in top-left */}
              <div className="absolute top-3 left-3 z-10">
                <svg 
                  className="w-6 h-6 text-black" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4v16h4V9l6 11h4V4h-4v11l-6-11H4z"/>
                  <path d="M16 4v11l-6-11h-4v16h4V9l6 11h4V4h-4z" opacity="0.7" transform="translate(2,0)"/>
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 pt-12 min-h-[200px] flex flex-col items-center justify-center text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base font-normal">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-8 md:mb-12">
            Our Story
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              At Leezova, we started with a simple idea - to make services e-commerce accessible and successful for everyone. Our journey began when a group of passionate individuals, ranging from tech experts to e-commerce enthusiasts, came together with a shared vision.
            </p>
            <p>
              We recognized that many businesses struggled with the complexities of establishing a strong online presence. Traditional solutions were either too expensive, too complicated, or didn't provide the flexibility needed to adapt to the ever-changing digital landscape.
            </p>
            <p>
              Driven by innovation and a commitment to excellence, we set out to create a platform that would democratize e-commerce services. Our team worked tirelessly, combining cutting-edge technology with user-friendly design principles to develop solutions that empower businesses of all sizes.
            </p>
            <p>
              Today, Leezova stands as a testament to our unwavering dedication. We've helped over 135 businesses launch their online presence, facilitated over 1 million in client sales, and maintained a 97% customer satisfaction rate. Our library of 20 professional website templates continues to grow, each one crafted with attention to detail and optimized for success.
            </p>
            <p>
              But our story doesn't end here. We're continuously evolving, learning from our clients, and pushing the boundaries of what's possible in the e-commerce space. Every project we undertake, every relationship we build, and every challenge we overcome adds a new chapter to our ongoing mission of empowering businesses worldwide.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mt-12 md:mt-16 p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              At Leezova, our mission is to empower businesses with innovative development solutions that drive growth and transformation. We are committed to delivering excellence in every project, combining cutting-edge technology with strategic thinking.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe that every business deserves access to world-class digital solutions. Our team of experts works tirelessly to create products and services that not only meet but exceed our clients' expectations.
            </p>
          </div>

          {/* What Drives Us */}
          <div className="mt-8 p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What Drives Us
            </h3>
            <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Innovation and continuous improvement in everything we do</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Client success and satisfaction as our top priority</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Excellence in delivery, design, and customer service</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                <span>Building lasting partnerships based on trust and results</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
