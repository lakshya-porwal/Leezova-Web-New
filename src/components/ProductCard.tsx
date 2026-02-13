import { useRef, useState } from "react";
import { Arrow } from "../heroIcons/icons";

type ProductCardProps = {
    title: string;
    tagline: string;
    reverse?: boolean;

    img1: string; desc1: string; view1?: string;
    img2: string; desc2: string; view2?: string;
    img3: string; desc3: string; view3?: string;
    img4: string; desc4: string; view4?: string;
};

function ProductCard({
    title,
    tagline,
    reverse = false,
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
        scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
        setCurrentIndex(currentIndex - 1);
    };

    const scrollRight = () => {
        if (isLast) return;
        scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
        setCurrentIndex(currentIndex + 1);
    };

    return (
        <div
            className={`w-full flex flex-col md:flex-row items-center justify-between gap-10 py-5 ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-6 lg:px-16 py-10 text-center ">

                <div className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-9xl font-bold pb-4 md:pb-4 lg:pb-6 text-blue-600">
                    {title}
                </div>

                <div className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 md:mb-2 tracking-wide text-gray-300">
                    {tagline}
                </div>

                {/* MOBILE */}
                <div className="lg:hidden flex flex-col items-center w-full ">
                    <div className="relative h-[350px] w-[250px] md:h-[350px] md:w-[350px] flex justify-center items-center overflow-hidden rounded-xl">

                        {/* 🌫️ Static Blurred Background */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/blurBgImage.png"
                                loading="lazy"
                                decoding="async"
                                alt="blur image"
                                className="w-full h-full object-cover blur-lg scale-125 opacity-80"
                            />
                            {/* Dark blackish overlay */}
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* 📱 Foreground Mobile Screenshot */}
                        <img
                            src={currentProduct.image}
                            loading="lazy"
                            decoding="async"
                            className="relative z-10 md:h-full max-h-[300px] object-contain p-2"
                        />
                    </div>

                    <div className="text-sm md:text-base font-semibold text-slate-300 mt-4 mb-4">
                        {currentProduct.viewType}
                    </div>

                    <div className="flex items-center justify-center gap-10 mt-0">
                        <span onClick={scrollLeft} className={`${isFirst ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
                            <Arrow className="rotate-90 h-8 fill-white" />
                        </span>
                        <span onClick={scrollRight} className={`${isLast ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
                            <Arrow className="-rotate-90 h-8 fill-white" />
                        </span>
                    </div>

                    <div className="text-base sm:text-lg flex text-left pl-2 max-w-xl mt-6">
                        {currentProduct.description}
                    </div>
                </div>

                {/* DESKTOP DESCRIPTION */}
                <div className="hidden lg:block text-lg xl:text-xl leading-relaxed max-w-xl mt-6">
                    {currentProduct.description}
                </div>
            </div>

            {/* RIGHT DESKTOP SLIDER */}
            <div className="hidden lg:flex w-1/2 items-center justify-center p-10 xl:p-16 gap-6 flex-col">

                <div className="flex items-center justify-center gap-6 w-full">
                    <span onClick={scrollLeft} className={`${isFirst ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
                        <Arrow className="rotate-90 h-10 2xl:h-12 fill-white" />
                    </span>

                    <div className="relative w-full h-[55vh] xl:h-[65vh] 2xl:h-[75vh]  overflow-hidden p-4 rounded-3xl">

                        {/* 🌫️ ONE Static Blurred Background */}
                        <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                            <img
                                src="/blurBgImage.png"
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover blur-sm scale-125 opacity-90"
                            />

                            {/* Dark blackish overlay */}
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* 🖼️ Slider Images ABOVE blur */}
                        <div
                            ref={scrollRef}
                            className="relative z-10 flex h-full overflow-x-hidden gap-8 scroll-smooth snap-x snap-mandatory"
                        >
                            {products.map((item, index) => (
                                <img
                                    key={item.id}
                                    loading="lazy"
                                    decoding="async"
                                    src={item.image}
                                    onClick={() => setCurrentIndex(index)}
                                    className="h-full w-full flex-shrink-0 cursor-pointer object-contain snap-center "
                                />
                            ))}
                        </div>

                    </div>

                    <span onClick={scrollRight} className={`${isLast ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
                        <Arrow className="-rotate-90 h-10 2xl:h-12 fill-white" />
                    </span>
                </div>

                <div className="text-base xl:text-lg font-semibold text-slate-300">
                    {currentProduct.viewType}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;