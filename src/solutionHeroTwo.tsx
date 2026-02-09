function SolutionHeroTwo() {
  const domainSolutions1 = [
    {
      name: 'Healthcare',
      logo: '🏥',
      description: 'Electronic Health Records (EHR), Telemedicine platforms, Patient management systems, Medical billing solutions, and Healthcare analytics dashboards.'
    },
    {
      name: 'Finance & Banking',
      logo: '💳',
      description: 'Core banking systems, Payment processing platforms, Risk management tools, Financial reporting dashboards, and Loan management systems.'
    },
    {
      name: 'E-Commerce & Retail',
      logo: '🛒',
      description: 'Online storefronts, Inventory management systems, Order processing platforms, Customer relationship management, and Analytics dashboards.'
    },
    {
      name: 'Manufacturing',
      logo: '🏭',
      description: 'Production planning systems, Quality control management, Supply chain optimization, Equipment monitoring dashboards, and ERP integration.'
    }
  ];

  const domainSolutions2 = [
    {
      name: 'Education',
      logo: '🎓',
      description: 'Learning Management Systems (LMS), Student information systems, Online course platforms, and Academic performance analytics.'
    },
    {
      name: 'Real Estate',
      logo: '🏠',
      description: 'Property management systems, Virtual tour platforms, CRM for agents, and Real estate analytics dashboards.'
    },
    {
      name: 'Logistics & Transportation',
      logo: '🚚',
      description: 'Fleet management systems, Route optimization tools, Delivery tracking platforms, and Logistics analytics dashboards.'
    },
    {
      name: 'Hospitality',
      logo: '🏨',
      description: 'Hotel management systems, Booking platforms, Guest experience apps, and Revenue management dashboards.'
    },
    {
      name: 'Energy & Utilities',
      logo: '⚡',
      description: 'Smart grid management, Energy monitoring systems, Utility billing platforms, and Consumption analytics dashboards.'
    },
    {
      name: 'Government & Public Sector',
      logo: '🏛️',
      description: 'Citizen service portals, Document management systems, Public service platforms, and Government analytics dashboards.'
    }
  ];

  return (
    <div
      className='min-h-screen w-full relative overflow-hidden h-full'
      style={{
        background: 'linear-gradient(158deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 28%, rgba(254, 252, 232, 1) 55%, rgba(250, 235, 215, 1) 100%)'
      }}
    >

      <div className='relative z-10 px-8 md:px-16 lg:px-24 py-12 md:py-16'>
        {/* Section 1: Core Domains */}
        <div className='mb-20'>
          <h2 className='text-2xl md:text-3xl font-semibold text-black mb-4'>Core Domains & Solutions</h2>
          <div className="h-px block border-none bg-gradient-line w-full mb-10" style={{ background: 'linear-gradient(90deg, #ca8a040 15%, #ca8a04b3 50%, #ca8a040 85%)' }}></div>

          <div className='relative'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative'>
              {domainSolutions1.map((domain, index) => (
                <div key={index} className='flex flex-col items-center'>
                  {/* Logo with circular white background */}
                  <div className='relative mb-5 z-10'>
                    <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-md relative'>
                      {domain.logo}
                    </div>
                  </div>

                  {/* Domain name */}
                  <h3 className='text-lg font-medium text-black mb-3 text-center'>{domain.name}</h3>

                  {/* Description */}
                  <p className='text-gray-700 text-sm leading-relaxed text-center'>{domain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Additional Domains */}
        <div>
          <h2 className='text-2xl md:text-3xl font-semibold text-black mb-4'>Additional Domains & Solutions</h2>
          <div className="h-px block border-none bg-gradient-line w-full mb-10" style={{ background: 'linear-gradient(90deg, #ca8a040 15%, #ca8a04b3 50%, #ca8a040 85%)' }}></div>

          <div className='relative'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 relative'>
              {domainSolutions2.map((domain, index) => (
                <div key={index} className='flex flex-col items-center'>
                  {/* Logo with circular white background */}
                  <div className='relative mb-5 z-10'>
                    <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-md relative'>
                      {domain.logo}
                    </div>
                  </div>

                  {/* Domain name */}
                  <h3 className='text-lg font-medium text-black mb-3 text-center'>{domain.name}</h3>

                  {/* Description */}
                  <p className='text-gray-700 text-sm leading-relaxed text-center'>{domain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionHeroTwo;
