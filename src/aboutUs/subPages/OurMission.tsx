export default function OurMission() {
  const statistics = [
    {
      number: "135+",
      label: "Projects Delivered across multiple industries",
    },
    {
      number: "2+ yrs",
      label: "Experience in IT services and software development",
    },
    {
      number: "97%",
      label: "Client Satisfaction, Built on Trust",
    },
    {
      number: "ERP",
      label:
        "First ERP Product Developed, built from real operational and client needs",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-8 md:pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="mt-8 md:mt-8">
          <h1 className="md:text-[80px] text-[60px] font-bold text-black select-none mb-6 text-center">
            OUR MISSION
          </h1>
          {/* Gradient Line */}
          <div className="relative w-full max-w-4xl mx-auto mb-6">
            <div className="h-px block border-none w-full" style={{ background: 'linear-gradient(90deg, #fff0 15%, #ffffffb3 50%, #fff0 85%)' }}></div>
          </div>
        </div>
        {/* Top Introduction Section */}
        <div className="mb-12 md:mb-16">
          <p className="text-lg text-black leading-relaxed max-w-auto text-left">
            At Leezova Technologies, we deliver reliable and scalable IT
            services that help businesses grow with confidence. We specialize in
            IT staff augmentation, custom software development, and digital
            transformation, while continuously investing in innovation to build
            solutions shaped by real-world business challenges.
          </p>
        </div>

        {/* Statistics Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          {statistics.map((stat, index) => (
            <div
                key={index}
                 className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 border border-amber-200/40 shadow-md hover:shadow-xl transition-all duration-300"
>


              {/* Angular N/M logo in top-left */}
              <div className="absolute top-3 left-3 z-10">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4v16h4V9l6 11h4V4h-4v11l-6-11H4z" />
                  <path
                    d="M16 4v11l-6-11h-4v16h4V9l6 11h4V4h-4z"
                    opacity="0.7"
                    transform="translate(2,0)"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 pt-12 min-h-[200px] flex flex-col items-center justify-center text-center">
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-black text-sm md:text-base font-normal">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold text-black text-center mb-6">
            Our Story
          </h2>
          {/* Gradient Line */}
          <div className="relative w-full mb-8 md:mb-12">
            <div className="h-px block border-none w-full" style={{ background: 'linear-gradient(90deg, #fff0 15%, #ffffffb3 50%, #fff0 85%)' }}></div>
          </div>

          <div className="space-y-6 text-lg text-black leading-relaxed">
            <p>
              Leezova Technologies was founded with a clear objective—to provide
              dependable and flexible IT services to startups and growing
              enterprises seeking a trusted technology partner. From the
              beginning, our focus has been on delivering custom development
              services and skilled technical resources aligned with business
              goals.
            </p>
            <p>
              As we worked closely with clients on web platforms, applications,
              and enterprise systems, we gained valuable insights into the
              operational challenges faced by growing organizations. These
              experiences led us to design and build our first ERP solution,
              created to streamline business processes, improve operational
              visibility, and support scalable growth.
            </p>
            <p>
              While Leezova remains a service-driven company at its core, the
              development of our ERP platform highlights our technical depth,
              domain expertise, and ability to translate complex requirements
              into structured, enterprise-ready solutions.
            </p>
            <p>
              Today, Leezova continues to grow as a trusted technology services
              partner, delivering IT staff augmentation, custom software
              development, and solution-driven platforms that support long-term
              business success.
            </p>
          </div>

          {/* Services & Values Section */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-4xl md:text-6xl font-bold text-black mb-6 text-center">
              Our Services & Values
            </h3>
            {/* Gradient Line */}
            <div className="relative w-full max-w-4xl mx-auto mb-8">
              <div className="h-px block border-none w-full" style={{ background: 'linear-gradient(90deg, #ca8a040 15%, #ca8a04b3 50%, #ca8a040 85%)' }}></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {/* Card 1 - IT Staff Augmentation */}
              <div className="relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-yellow-100/40 via-yellow-50/50 to-amber-100/60 border border-yellow-200/30 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-1 group p-6 pt-12 min-h-[320px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full items-center text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4 bg-white/30 backdrop-blur-sm border border-yellow-200/20 flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    IT Staff Augmentation
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    IT staff augmentation and dedicated development teams
                  </p>
                </div>
              </div>

              {/* Card 2 - Custom Software */}
              <div className="relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-yellow-100/40 via-yellow-50/50 to-amber-100/60 border border-yellow-200/30 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-1 group p-6 pt-12 min-h-[320px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full items-center text-center">
                  <div className="w-20 h-20 bg-purple-300 rounded-full flex items-center justify-center mb-4 bg-white/30 backdrop-blur-sm border border-yellow-200/30 flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Custom Software Development
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    Custom software development
                  </p>
                </div>
              </div>

              {/* Card 3 - Web & Mobile */}
              <div className="relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-yellow-100/40 via-yellow-50/50 to-amber-100/60 border border-yellow-200/30 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-1 group p-6 pt-12 min-h-[320px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full items-center text-center">
                  <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center mb-4 bg-white/30 backdrop-blur-sm border border-yellow-200/30 flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Web & Application Development
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    Web and application development
                  </p>
                </div>
              </div>

              {/* Card 4 - Partnership Approach */}
              <div className="relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-yellow-100/40 via-yellow-50/50 to-amber-100/60 border border-yellow-200/30 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-1 group p-6 pt-12 min-h-[320px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full items-center text-center">
                  <div className="w-20 h-20 bg-orange-300 rounded-full flex items-center justify-center mb-4 bg-white/30 backdrop-blur-sm border border-yellow-200/30 flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Partnership-Driven
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    Service-first and partnership-driven approach with strong
                    focus on long-term value and client success
                  </p>
                </div>
              </div>

              {/* Card 5 - Skilled Team */}
              <div className="relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-yellow-100/40 via-yellow-50/50 to-amber-100/60 border border-yellow-200/30 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-1 group p-6 pt-12 min-h-[320px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full items-center text-center">
                  <div className="w-20 h-20 bg-cyan-300 rounded-full flex items-center justify-center mb-4 bg-white/30 backdrop-blur-sm border border-yellow-200/30 flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Skilled Developers
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    Skilled developers with real-world project experience
                  </p>
                </div>
              </div>

              {/* Card 6 - Flexible & Proven */}
              <div className="relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-yellow-100/40 via-yellow-50/50 to-amber-100/60 border border-yellow-200/30 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-1 group p-6 pt-12 min-h-[320px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full items-center text-center">
                  <div className="w-20 h-20 bg-green-300 rounded-full flex items-center justify-center mb-4 bg-white/30 backdrop-blur-sm border border-yellow-200/30 flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">
                    Flexible & Proven
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    Flexible engagement and staffing models with proven
                    capability in delivering both services and structured
                    platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

