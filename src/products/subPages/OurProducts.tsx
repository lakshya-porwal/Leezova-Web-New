const products = [
  {
    id: 1,
    title: "Rilywa",
    tagline: "Smarter Attendance. Smoother Workdays.",
    description: "Get a complete overview of your workforce at a glance. The Rilywa admin dashboard gives managers instant access to employee data, attendance insights, and quick actions - all from one powerful control center designed to simplify daily operations.",
    image: "/public/ErpDashbord.png",
  },

  {
    id: 2,
    title: "Rilywa",
    tagline: "Smarter Attendance. Smoother Workdays.",
    description: "Start and track workdays in a single tap. With Rilywa's mobile punch-in system, employees can log their shifts instantly while managers get real-time attendance updates - making workforce tracking seamless and accurate.",
    image: "/public/ErpPhoneDashbord.jpeg",
  },

  {
    id: 3,
    title: "Rilywa",
    tagline: "Smarter Attendance. Smoother Workdays.",
    description: "Track, filter, and manage employee leave requests with ease. Rilywa's leave management system keeps everything organized - from request reasons to approval status - helping HR teams make faster, more informed decisions without paperwork chaos.",
    image: "/public/ErpLeaveReport.png",
  },

  {
    id: 4,
    title: "Rilywa",
    tagline: "Smarter Attendance. Smoother Workdays.",
    description: "Employees can view their daily attendance records anytime, anywhere. Rilywa's mobile interface shows punch-in times, punch-out times, and total hours worked in a clean, easy-to-read format - keeping everyone informed and accountable.",
    image: "/public/ErpPhoneRecord2.jpeg",
  },
];


import { useRef, useState } from "react";
import { Arrow } from "../../heroIcons/icons";

function OurProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isFirst = currentIndex === 0
  const isLast = currentIndex === products.length - 1

  const currentProduct = products[currentIndex]

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (isFirst) return;
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    setCurrentIndex(currentIndex - 1);
  };

  const scrollRight = () => {
    if (isLast) return;
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth", });
    setCurrentIndex(currentIndex + 1)
  };


  return (
    <div className="w-full min-h-screen lg:pt-24 md:pt-16 flex flex-col lg:flex-row">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center justify-center px-6 sm:px-6 lg:px-16 py-10 text-center ">

        <div className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-9xl font-bold pb-3 md:pb-2 lg:pb-6 text-blue-600">
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
          className={`flex items-center justify-center h-full ${isFirst ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
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
          className={`flex items-center justify-center h-full${isLast ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
            }`}
        >
          <Arrow className="-rotate-90 h-10 2xl:h-12 fill-white" />
        </span>
      </div>
    </div>
  );
}

export default OurProducts
