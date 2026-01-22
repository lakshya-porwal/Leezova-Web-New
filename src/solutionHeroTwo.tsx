function SolutionHeroTwo() {
  const powerPlatformApps = [
    {
      name: 'Power Apps',
      logo: '🔄',
      description: 'Build apps in hours instead of months that can easily connect to data, use Excel-like expressions to add logic, and work on the web and on iOS and Android devices.'
    },
    {
      name: 'Power BI',
      logo: '📊',
      description: 'Integrate data from numerous data sources to create interactive, engaging dashboards and reports that provide useful insights and drive business results.'
    },
    {
      name: 'Power automate',
      logo: '✈️',
      description: 'Connect to hundreds of popular apps and services to embed powerful workflow automation directly into your apps without writing code.'
    },
    {
      name: 'Power Virtual Agents',
      logo: '🤖',
      description: 'Easily build chatbots to engage in natural language conversations with customers and employees. No code required.'
    }
  ];

  const office365Apps = [
    {
      name: 'Word',
      logo: '📝',
      description: 'Create impressive documents and improve your writing skills with built-in intelligent features.'
    },
    {
      name: 'Excel',
      logo: '📈',
      description: 'Create impressive documents and improve your writing skills with built-in intelligent features.'
    },
    {
      name: 'Powerpoint',
      logo: '📊',
      description: 'Create impressive documents and improve your writing skills with built-in intelligent features.'
    },
    {
      name: 'Microsoft teams',
      logo: '👥',
      description: 'Create impressive documents and improve your writing skills with built-in intelligent features.'
    },
    {
      name: 'Outlook',
      logo: '📧',
      description: 'Create impressive documents and improve your writing skills with built-in intelligent features.'
    },
    {
      name: 'OneDrive',
      logo: '☁️',
      description: 'Create impressive documents and improve your writing skills with built-in intelligent features.'
    }
  ];

  return (
    <div
      className='min-h-screen w-full relative overflow-hidden h-full'
      style={{
        background: 'linear-gradient(158deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 28%, rgba(1, 1, 26, 1) 55%, rgba(9, 9, 121, 1) 100%)'
      }}
    >

      <div className='relative z-10 px-8 md:px-16 lg:px-24 py-12 md:py-16'>
        {/* Section 1: Power Platform - Business intelligence */}
        <div className='mb-20'>
          <h2 className='text-2xl md:text-3xl font-semibold text-white mb-10'>Power Platform - Business intelligence</h2>

          <div className='relative'>
            {/* Connecting line - passes through the center of circles */}
            <div className='absolute top-10 left-[5%] right-[5%] h-0.5 bg-gray-600/50 hidden lg:block' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative'>
              {powerPlatformApps.map((app, index) => (
                <div key={index} className='flex flex-col items-center'>
                  {/* Logo with circular white background */}
                  <div className='relative mb-5 z-10'>
                    <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-md relative'>
                      {app.logo}
                    </div>
                  </div>

                  {/* App name */}
                  <h3 className='text-lg font-medium text-white mb-3 text-center'>{app.name}</h3>

                  {/* Description */}
                  <p className='text-gray-300 text-sm leading-relaxed text-center'>{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Microsoft Office 365 */}
        <div>
          <h2 className='text-2xl md:text-3xl font-semibold text-white mb-10'>Microsoft Office 365</h2>

          <div className='relative'>
            {/* Connecting lines - two rows, each connecting 3 circles */}
            <div className='absolute top-10 left-[8%] right-[8%] h-0.5 bg-gray-600/50 hidden lg:block' />
            <div className='absolute top-[calc(10rem+2.5rem)] left-[8%] right-[8%] h-0.5 bg-gray-600/50 hidden lg:block' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 relative'>
              {office365Apps.map((app, index) => (
                <div key={index} className='flex flex-col items-center'>
                  {/* Logo with circular white background */}
                  <div className='relative mb-5 z-10'>
                    <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-md relative'>
                      {app.logo}
                    </div>
                  </div>

                  {/* App name */}
                  <h3 className='text-lg font-medium text-white mb-3 text-center'>{app.name}</h3>

                  {/* Description */}
                  <p className='text-gray-300 text-sm leading-relaxed text-center'>{app.description}</p>
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
