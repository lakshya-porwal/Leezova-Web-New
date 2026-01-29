const MARQUEE_TEXT = 'Click here to experience';
const MARQUEE_COPIES = 16; // ×2 for seamless loop

function RockBottom() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center mt-16 px-16 py-10">
      <div className="h-[450px] w-full flex border border-red-500 gap-1">
        <div className="h-full flex-1 min-w-0 border border-blue-500">1</div>
        <div className="h-full flex-1 min-w-0 border border-blue-500">2</div>
        <div className="h-full flex-[0_0_40%] min-w-0 border border-blue-500">3</div>
        <div className="h-full flex-1 min-w-0 border border-blue-500">4</div>
      </div>
      <div className="h-full w-full flex border border-green-500 gap-1">
        <div className="h-full flex-[0_0_65%] min-w-0 border border-blue-500">1</div>
        <div className="h-full flex-1 min-w-0 border border-blue-500">2</div>
      </div>
      <div className="h-full w-full flex items-center border border-blue-500 overflow-hidden">
        <div className="flex-1 min-w-0 overflow-hidden border border-red-500 py-2">
          <div className="flex gap-6 md:gap-10 w-max animate-marquee-left-to-right whitespace-nowrap text-sm font-medium text-white">
            {Array.from({ length: MARQUEE_COPIES * 2 }, (_, i) => (
              <span key={i}>{MARQUEE_TEXT}</span>
            ))}
          </div>
        </div>
        <a
          href="https://rockbottom.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-medium"
        >
          Visit Rock Bottom
        </a>
      </div>
    </div>
  );
}

export default RockBottom;
