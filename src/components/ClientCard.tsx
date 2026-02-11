type ClientCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  imgSrc: string;
  link: string;
  reverse?: boolean; 
};

function ClientCard({
  title,
  subtitle,
  description,
  imgSrc,
  link,
  reverse = false,
}: ClientCardProps) {
  return (
    <div
      className={`w-full flex flex-col md:flex-row items-center justify-between gap-10 py-10 ${reverse ? "md:flex-row-reverse" : ""
        }`}
    >

      {/* TEXT SIDE */}
      <div className="md:w-1/2 text-center md:text-left px-4 md:px-8">
        <h1 className="text-3xl md:text-3xl font-bold leading-tight mt-2 text-black">
          {title} <br />
          <span className="text-blue-600">{subtitle}</span>
        </h1>

        <p className="text-gray-700 text-sm sm:text-lg md:text-xl mt-4">
          {description}
        </p>
      </div>

      {/* IMAGE SIDE */}
      <div className="md:w-1/2 relative group cursor-pointer aspect-[16/9] w-full">
        <img
          src={imgSrc}
          alt={title}
           loading="lazy"
          decoding="async"
          className="w-full h-full object-contain transition duration-500 rounded-3xl"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"
        >
          <span className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold tracking-wide shadow-lg hover:scale-110 transition">
            Visit Site ↗
          </span>
        </a>
      </div>
    </div>
  );
}

export default ClientCard;