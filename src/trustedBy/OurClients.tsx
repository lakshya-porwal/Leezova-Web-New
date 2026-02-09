
import ClientCard from '../components/ClientCard'
const OurClients = () => {
  return (
    <div>
       <p className="md:text-4xl sm:text-3xl text-blue-600 tracking-widest uppercase mt-24 font-">
         Trusted Brands. Elevated Experiences.
        </p>
      <div className="px-4 sm:px-8 md:px-16">
     <ClientCard
  title="Rockbottom.in"
  description="We revamped Rockbottom’s online presence with a faster, modern interface designed to improve engagement and drive more conversions."
  imgSrc="/rock-bottom-bg2.png"
  link="https://rockbottom.in"
/>

<ClientCard
  title="Techila Global Services"
  description="For Techila, we built a professional and performance-focused website that reflects their global IT expertise and strengthens client trust."
  imgSrc="/techilaWebSs.png"
  link="https://www.techilaservices.com/"
  reverse
/>

<ClientCard
  title="Vardhaman Computers"
  description="We helped Vardhaman Computers modernize their digital presence with a clean layout that showcases their products and improves customer inquiries."
  imgSrc="/public/vardhmanComputerSs.jpeg"
  link="#"
/>

<ClientCard
  title="St. Peter Convent Higher Secondary School"
  description="We designed an informative and easy-to-navigate website for St. Peter Convent to better connect with parents, students, and the school community."
  imgSrc="/public/Convent schoolSs.jpeg"
  link="#"
  reverse
/>

<ClientCard
  title="Agar Mart"
  description="For Agar Mart, we created a visually appealing and user-friendly platform that highlights their product range and supports smooth customer interaction."
  imgSrc="/Agar Mart Logo.png"
  link="#"
/>
    </div>
  <p className="text-center text-gray-500 text-lg md:text-xl mt-12 mb-24 italic tracking-wide">
  …and many more success stories ahead.
</p>
    </div>
  )
}

export default OurClients


// function OurClients() {
//     return (
//         <div className="h-full w-full flex flex-col items-center justify-center mt-8 sm:mt-16 px-4 sm:px-8 md:px-16 py-6 sm:py-10">
//             <p className="text-2xl sm:text-3xl md:text-5xl text-blue-400  tracking-widest uppercase">
//                 Trusted By
//             </p>
//             <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight md:mb-3">
//                 Rockbottom.in <br />
//                 <span className="text-blue-500">Elevated by Leezova</span>
//             </h1>
//             <p className="text-gray-300 text-sm sm:text-lg md:text-xl mb-4 px-3 md:px-8">
//                 We transformed Rockbottom’s digital presence with a faster,
//                 modern and conversion-focused website experience.
//             </p>

//             <div className="w-full md:max-w-3xl mx-auto relative group cursor-pointer aspect-[16/9]">

//                 <img
//                     src="/rock-bottom-bg2.png"
//                     alt="Rockbottom Website Preview"
//                     className="w-full h-full object-contain transition duration-500"
//                 />

//                 {/* Grey hover overlay */}
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>

//                 <a
//                     href="https://rockbottom.in"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition duration-500"
//                 >
//                     <span className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold tracking-wide shadow-lg hover:scale-110 transition">
//                         Visit Site ↗
//                     </span>
//                 </a>

//             </div>


//             <div className="w-full p-4 sm:p-8 md:p-12">
//                 <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-3">
//                     The <span className="text-blue-500">Impact</span> We Created
//                 </h2>

//                 <div className="relative w-full max-w-4xl mx-auto mb-6">
//                     <div
//                         className="h-px block border-none w-full"
//                         style={{ background: "linear-gradient(90deg, #fff0 15%, #ffffffb3 50%, #fff0 85%)" }}
//                     ></div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

//                     {/* Card 1 */}
//                     <div className="relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-black/40 via-black/50 to-blue-900/60 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 group p-4 sm:p-6 sm:pt-12 min-h-[280px] sm:min-h-[320px] flex flex-col">
//                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//                         <div className="relative z-10 flex flex-col h-full items-center text-center">

//                             <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-black/30 backdrop-blur-sm border border-white/10 text-3xl sm:text-5xl">
//                                 ⚡
//                             </div>

//                             <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
//                                 Faster Performance
//                             </h3>
//                             <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-grow">
//                                 Optimized speed and smooth loading across all pages for a frictionless experience.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-black/40 via-black/50 to-blue-900/60 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 group p-4 sm:p-6 sm:pt-12 min-h-[280px] sm:min-h-[320px] flex flex-col">
//                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//                         <div className="relative z-10 flex flex-col h-full items-center text-center">

//                             <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-black/30 backdrop-blur-sm border border-white/10 text-3xl sm:text-5xl">
//                                 🎯
//                             </div>

//                             <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
//                                 Higher Conversions
//                             </h3>
//                             <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-grow">
//                                 Strategic layout and CTAs designed to turn visitors into customers.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Card 3 */}
//                     <div className="relative rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-b from-black/40 via-black/50 to-blue-900/60 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 group p-4 sm:p-6 sm:pt-12 min-h-[280px] sm:min-h-[320px] flex flex-col">
//                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//                         <div className="relative z-10 flex flex-col h-full items-center text-center">

//                             <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 bg-black/30 backdrop-blur-sm border border-white/10 text-3xl sm:text-5xl">
//                                 📱
//                             </div>

//                             <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
//                                 Seamless Mobile Experience
//                             </h3>
//                             <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-grow">
//                                 Fully responsive design ensuring perfect usability on every device.
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </div>



//         </div>
//     );
// }

// export default OurClients;
