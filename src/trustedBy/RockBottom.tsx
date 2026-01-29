// import Card from "../components/Card"
// const RockBottom = () => {
//     return (
//         <div className="h-full w-full flex flex-col">
//             <div className="w-full h-76 mt-16 relative">
//                 <img src="/public/rock-bottom-bg.png" className="object-contain" />
//                 {/* image gradient */}
//                 <div
//                     className='absolute inset-0 pointer-events-none z-10 h-76'
//                     style={{
//                         background: `radial-gradient(circle at center,rgba(255,255,255,0) 35%,rgba(0,0,0,0.4) 65%,rgba(0,0,0,0.75) 85%,rgba(0,0,0,0.95) 100%),
//         linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, rgba(117, 117, 117, 0) 15%, rgba(0, 0, 0, 0.6) 43%, rgba(5, 5, 5, 0.81) 57%, rgba(0, 0, 0, 0.96) 75%, rgba(0, 0, 0, 1) 93%)`,
//                     }}></div>
//             </div>

//             <div className=" relative z-20 -translate-y-9 max-w-7xl pb-20 gap-12 items-center justify-center flex">
//                 <div>
//                     <p className="text-sm text-blue-400 mb-3 tracking-widest uppercase ">
//                         Trusted By
//                     </p>
//                     <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//                         Rockbottom.in <br />
//                         <span className="text-blue-500">Elevated by Leezova</span>
//                     </h1>
//                     <p className="text-gray-300 text-lg mb-8">
//                         We transformed Rockbottom’s digital presence with a faster,
//                         modern and conversion-focused website experience.
//                     </p>
//                     <div className="flex gap-4 justify-center items-center">
//                         <a
//                             href="https://rockbottom.in"
//                             target="_blank"
//                             className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white"
//                         >
//                             Visit Live Site
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default RockBottom



const RockBottom = () => {
  return (
    <div className=" mt-20">
         <div className="h-screen flex items-center justify-center px-6 my-20">
          <div className="w-full max-w-6xl aspect-[21/9] rounded-2xl overflow-hidden bg-gray-900 p-2 hide-scrollbar">
            {/* <div className="w-full h-full rounded-lg flex justify-center items-center mt-12"> */}
                 <iframe 
  src="https://rockbottom.in" 
  width="100%" 
  height="600"
  className="rounded-xl border border-white/10"
/> 
            {/* </div> */}
          </div>
        </div>
      </div>


      
   
  )
}

export default RockBottom

