import { useState, useRef } from "react";
import { Grid } from "../../components";
import { Arrow } from "../../heroIcons/icons";

export default function Team() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const desktopImagesOrder = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ];
  const mobileImagesOrder = [
    1, 2, 3, 7, 8, 9, 4, 5, 6, 10, 11, 12,
  ];

  const handleImageClick = (imageNumber: number) => {
    setSelectedImage(imageNumber);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  // arrow left right 
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -400, // how much it moves per click
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };



  return (
    <>
      <div className="min-h-screen w-full  mt-5 relative bg-white">
        {/* Header Section */}
        <div className="md:h-[450px] flex flex-col items-center justify-center">
          <div className="text-left flex flex-col pl-4">
            <span className="text-black text-[60px] md:text-[120px] leading-tight">
              Our Journey
            </span>

            <span className="text-[#4169E1] text-[60px] md:text-[120px] font-bold leading-tight mt-1 md:mt-0">
              TOGETHER
            </span>

            <span className="text-black text-[60px] md:text-[120px] leading-tight mt-1 md:mt-0">
              at Leezova
            </span>
          </div>

          {/* Gradient Line */}
          <div className="relative w-full max-w-4xl">
            <div className="h-px block border-none w-full" style={{ background: 'linear-gradient(90deg, #fff0 15%, #ffffffb3 50%, #fff0 85%)' }}></div>
          </div>
        </div>

        {/* Gallery Grid Section */}
        <div
          ref={scrollRef}
          className="flex flex-col md:flex-row items-center h-full gap-8 p-8 pt-22 md:pt-44 md:pb-0 overflow-x-scroll hide-scrollbar scroll-smooth">
          {Array.from({ length: 2 }).map((_, index) => (
            <Grid
              key={index}
              desktopImages={desktopImagesOrder.slice(index * 6, (index + 1) * 6)}
              mobileImages={mobileImagesOrder.slice(index * 6, (index + 1) * 6)}
              onImageClick={handleImageClick}
            />
          ))}
        </div>

        {/* arrow Section */}
        <div className=" hidden lg:flex h-full justify-center items-center gap-6 mb-10">
          <span onClick={scrollLeft} className="cursor-pointer"><Arrow className="rotate-90 h-10 fill-black" /></span>
          <span onClick={scrollRight} className="cursor-pointer"> <Arrow className="-rotate-90 h-10 fill-black" /></span>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          onClick={handleClosePreview}
        >
          <div className="relative w-[90%] h-[90%] md:w-[80%] md:h-[80%] flex flex-col items-center justify-center">
            <button
              className="self-end mb-1 text-white text-xl font-light hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={handleClosePreview}
            >
              ×
            </button>
            <img
              src={`/gallery/${selectedImage}.webp`}
              alt={`Gallery image ${selectedImage}`}
              loading="eager"
              decoding="async"
              className="max-w-full max-h-full object-contain rounded-[40px] border-4 border-gray-400"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}