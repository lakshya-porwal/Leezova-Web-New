const products = [
  {
    title: "ERP",
    id:1,
    tagline: "Smarter Attendance. Smoother Workdays.",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
    image: "/public/ProductMobileRview.png",
  },
  {
     title: "ERP",
     id:2,
    tagline: "Smarter Attendance. Smoother Workdays.",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/public/rock-bottom-bg2.png",
  },
  {
     title: "ERP",
    tagline: "Smarter Attendance. Smoother Workdays.",
    id:3,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/Platform.webp",
  },
  {
     title: "ERP",
     id:4,
    tagline: "Smarter Attendance. Smoother Workdays.",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/Platform.webp",
  },
];


import { useRef, useState } from "react";
import { Arrow } from "../../heroIcons/icons";

function OurProducts() {
  const [currentIndex , setCurrentIndex] = useState(0)
  const isFirst = currentIndex===0
  const isLast = currentIndex===products.length-1

  const currentProduct = products[currentIndex]

  const scrollRef = useRef<HTMLDivElement | null>(null);
  
    const scrollLeft = () => {
  if (isFirst) return; 
  scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  setCurrentIndex(currentIndex - 1);
};
  
    const scrollRight = () => {
      if(isLast) return;
      scrollRef.current?.scrollBy({left: 400,behavior: "smooth",});
      setCurrentIndex(currentIndex +1)
    };
  

return (
     <div className="w-full min-h-screen lg:pt-24 md:pt-16 flex flex-col lg:flex-row">
      
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center justify-center px-6 sm:px-6 lg:px-16 py-10 text-center ">
        
        <div className="text-5xl sm:text-6xl lg:text-8xl 2xl:text-9xl font-bold pb-3 md:pb-2 lg:pb-6 text-blue-600">
          {currentProduct.title}
        </div>

        <div className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 md:mb-2 tracking-wide text-white">
          {currentProduct.tagline}
        </div>

        {/* IMAGE + ARROWS (MOBILE/TABLET ONLY)*/}
        <div className="lg:hidden flex flex-col items-center w-full">
          <div className="h-[350px] w-[250px] md:h-[450px] md:w-full flex justify-center items-center">
          <img
            src={currentProduct.image}
            className="md:h-full max-h-[300px] object-contain"
          />
          </div>

          {/*Arrows BELOW image*/}
          <div className="flex items-center justify-center gap-10 mt-4">
            <span
              onClick={scrollLeft}
              className={`${isFirst ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <Arrow className="rotate-90 h-8 fill-white" />
            </span>

            <span
              onClick={scrollRight}
              className={`${isLast ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <Arrow className="-rotate-90 h-8 fill-white" />
            </span>
          </div>

          <div className="text-base sm:text-lg leading-relaxed text-gray-400 max-w-xl mt-6">
            {currentProduct.description}
          </div>
        </div>

        {/*DESCRIPTION FOR DESKTOP*/}
        <div className="hidden lg:block text-lg xl:text-xl leading-relaxed text-gray-400 max-w-xl mt-6">
          {currentProduct.description}
        </div>
      </div>

      {/*RIGHT SLIDER (DESKTOP ONLY)*/}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-10 xl:p-16 gap-6">
        
        <span
          onClick={scrollLeft}
          className={`flex items-center justify-center h-full ${
            isFirst ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <Arrow className="rotate-90 h-10 2xl:h-12 fill-white" />
        </span>

        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-8 scroll-smooth 
           snap-x snap-mandatory"
        >
          {products.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              onClick={() => setCurrentIndex(index)}
              className="h-[55vh] xl:h-[65vh] w-full 2xl:h-[75vh] flex-shrink-0 cursor-pointer object-contain snap-center"
            
            />
          ))}
        </div>

        <span
          onClick={scrollRight}
          className={`flex items-center justify-center h-full${
            isLast ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <Arrow className="-rotate-90 h-10 2xl:h-12 fill-white" />
        </span>
      </div>
    </div>
  );
}

export default OurProducts
