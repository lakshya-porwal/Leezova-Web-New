import { useRef, useState } from "react";
import { Arrow } from "../heroIcons/icons";

type ProductCardProps = {
  title: string;
  tagline: string;

  img1: string; desc1: string; view1?: string;
  img2: string; desc2: string; view2?: string;
  img3: string; desc3: string; view3?: string;
  img4: string; desc4: string; view4?: string;
};

function ProductCard({
  title,
  tagline,
  img1, desc1, view1,
  img2, desc2, view2,
  img3, desc3, view3,
  img4, desc4, view4,
}: ProductCardProps) {

  // SAME structure as your old products array
  const products = [
    { id: 1, image: img1, description: desc1, viewType: view1 },
    { id: 2, image: img2, description: desc2, viewType: view2 },
    { id: 3, image: img3, description: desc3, viewType: view3 },
    { id: 4, image: img4, description: desc4, viewType: view4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === products.length - 1;

  const currentProduct = products[currentIndex];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (isFirst) return;
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
    setCurrentIndex(currentIndex - 1);
  };

  const scrollRight = () => {
    if (isLast) return;
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="w-full min-h-screen lg:pt-10 md:pt-16 flex flex-col lg:flex-row">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-6 lg:px-16 py-10 text-center ">

        <div className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-9xl font-bold pb-3 md:pb-2 lg:pb-6 text-blue-600">
          {title}
        </div>

        <div className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 md:mb-2 tracking-wide text-yellow-600">
          {tagline}
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex flex-col items-center w-full">
          <div className="h-[350px] w-[250px] md:h-[450px] md:w-full flex justify-center items-center">
            <img
              src={currentProduct.image}
              className="md:h-full max-h-[300px] object-contain"
            />
          </div>

          <div className="text-sm md:text-base font-semibold text-gray-700 mt-4 mb-8">
            {currentProduct.viewType}
          </div>

          <div className="flex items-center justify-center gap-10 mt-0">
            <span onClick={scrollLeft} className={`${isFirst ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
              <Arrow className="rotate-90 h-8 fill-black" />
            </span>
            <span onClick={scrollRight} className={`${isLast ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
              <Arrow className="-rotate-90 h-8 fill-black" />
            </span>
          </div>

          <div className="text-base sm:text-lg leading-relaxed text-gray-800 max-w-xl mt-6">
            {currentProduct.description}
          </div>
        </div>

        {/* DESKTOP DESCRIPTION */}
        <div className="hidden lg:block text-lg xl:text-xl leading-relaxed text-gray-800 max-w-xl mt-6">
          {currentProduct.description}
        </div>
      </div>

      {/* RIGHT DESKTOP SLIDER */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-10 xl:p-16 gap-6 flex-col">

        <div className="flex items-center justify-center gap-6 w-full">
          <span onClick={scrollLeft} className={`${isFirst ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
            <Arrow className="rotate-90 h-10 2xl:h-12 fill-black" />
          </span>

          <div ref={scrollRef} className="flex overflow-x-hidden gap-8 scroll-smooth snap-x snap-mandatory">
            {products.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                onClick={() => setCurrentIndex(index)}
                className="h-[55vh] xl:h-[65vh] w-full 2xl:h-[75vh] flex-shrink-0 cursor-pointer object-contain snap-center"
              />
            ))}
          </div>

          <span onClick={scrollRight} className={`${isLast ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
            <Arrow className="-rotate-90 h-10 2xl:h-12 fill-black" />
          </span>
        </div>

        <div className="text-base xl:text-lg font-semibold text-gray-700">
          {currentProduct.viewType}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;