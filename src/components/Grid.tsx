export const Grid = ({
  desktopImages,
  mobileImages,
  onImageClick,
}: {
  desktopImages: number[];
  mobileImages: number[];
  onImageClick: (imageNumber: number) => void;
}) => {
  return (
    <div className="flex flex-col md:grid gap-6 md:grid-rows-2 md:grid-cols-11 md:py-2 w-full h-full md:min-w-[1300px]">
      {Array.from({ length: 6 }).map((_, index) => (
        <>
          {/* Mobile Images */}
          <img
            key={`mobile-${index}`}
            src={`/gallery/${mobileImages[index]}.webp`}
            alt={`Gallery image ${mobileImages[index]}`}
            loading="lazy"
            decoding="async"
            onClick={() => onImageClick(mobileImages[index])}
            className={`md:hidden bg-gray-300 w-full rounded-[20px] object-cover cursor-pointer hover:opacity-90 transition-opacity ${(index + 1) % 3 === 0 ? "h-[330px]" : "h-[182px]"}`}
          />
          {/* Desktop Images */}
          <img
            key={`desktop-${index}`}
            src={`/gallery/${desktopImages[index]}.webp`}
            alt={`Gallery image ${desktopImages[index]}`}
            loading="lazy"
            decoding="async"
            onClick={() => onImageClick(desktopImages[index])}
            className={`hidden md:flex items-center justify-center bg-gray-300 h-[260px] w-full rounded-[20px] object-cover cursor-pointer hover:opacity-90 transition-opacity ${[2, 3].includes(index) ? "col-span-3" : "col-span-4"}`}
          />
        </>
      ))}
    </div>
  );
};
