export default function OurMission() {
  const statistics = [
    {
      number: "135+",
      label: "Projects Delivered across multiple industries"
    },
    {
      number: "2+ yrs",
      label: "Experience in IT services and software development"
    },
    {
      number: "97%",
      label: "Client Satisfaction, Built on Trust"
    },
    {
      number: "ERP",
      label: "First ERP Product Developed, built from real operational and client needs"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-8 md:pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Introduction Section */}
        <div className="mb-12 md:mb-16">
          <p className="text-lg text-white leading-relaxed max-w-auto text-left">
            At Leezova Technologies, we deliver reliable and scalable IT services that help businesses grow with confidence. We specialize in IT staff augmentation, custom software development, and digital transformation, while continuously investing in innovation to build solutions shaped by real-world business challenges.
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
                    className="text-xs md:text-sm font-bold whitespace-nowrap border-4"
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
                  <path d="M4 4v16h4V9l6 11h4V4h-4v11l-6-11H4z" />
                  <path d="M16 4v11l-6-11h-4v16h4V9l6 11h4V4h-4z" opacity="0.7" transform="translate(2,0)" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 pt-12 min-h-[200px] flex flex-col items-center justify-center text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-sm md:text-base font-normal">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12">
            Our Story
          </h2>

          <div className="space-y-6 text-lg text-white leading-relaxed">
            <p>
              Leezova Technologies was founded with a clear objective—to provide dependable and flexible IT services to startups and growing enterprises seeking a trusted technology partner. From the beginning, our focus has been on delivering custom development services and skilled technical resources aligned with business goals.
            </p>
            <p>
              As we worked closely with clients on web platforms, applications, and enterprise systems, we gained valuable insights into the operational challenges faced by growing organizations. These experiences led us to design and build our first ERP solution, created to streamline business processes, improve operational visibility, and support scalable growth.
            </p>
            <p>
              While Leezova remains a service-driven company at its core, the development of our ERP platform highlights our technical depth, domain expertise, and ability to translate complex requirements into structured, enterprise-ready solutions.
            </p>
            <p>
              Today, Leezova continues to grow as a trusted technology services partner, delivering IT staff augmentation, custom software development, and solution-driven platforms that support long-term business success.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mt-12 md:mt-16 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              IT Services
            </h3>
            <ul className="space-y-4 text-lg text-white">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>IT staff augmentation and dedicated development teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>Custom software development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>Web and application development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>Ongoing support and maintenance</span>
              </li>
            </ul>
          </div>

          {/* What Drives Us */}
          <div className="mt-8 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Why Choose Leezova Technologies
            </h3>
            <ul className="space-y-4 text-lg text-white">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>Service-first and partnership-driven approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>Skilled developers with real-world project experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>Flexible engagement and staffing models</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>Proven capability in delivering both services and structured platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>Strong focus on long-term value and client success</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
