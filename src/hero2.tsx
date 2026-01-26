import { useState, useEffect } from "react";

function Hero2() {
  const [isImmersive, setIsImmersive] = useState(false);

  useEffect(() => {
    const styleId = "hide-scrollbar-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .hide-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="h-full w-full relative overflow-hidden bg-black/[0.96] flex flex-col items-center justify-center py-[25px]">
      <div className="flex items-center gap-6 relative z-50">
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            !isImmersive ? "text-white" : "text-gray-400"
          }`}
        >
          Traditional Web Page
        </span>

        <button
          onClick={() => setIsImmersive(!isImmersive)}
          className={`relative w-[120px] h-[50px] rounded-full border overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black ${
            isImmersive
              ? "border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)]"
              : "bg-gray-800 border-gray-600"
          }`}
        >
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              isImmersive ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/80 via-blue-500/90 to-indigo-600"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-400/50 to-transparent"></div>
          </div>

          <span
            className={`absolute top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full transition-all duration-300 shadow-lg flex items-center justify-center ${
              isImmersive ? "left-[72px]" : "left-[4px]"
            }`}
          >
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </span>
        </button>

        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            isImmersive ? "text-white" : "text-gray-400"
          }`}
        >
          Modern Web Page
        </span>
      </div>

      <div className="h-full w-full flex items-center justify-center px-4 md:px-8 lg:px-12 py-6 relative z-10">
        <div className="relative w-full max-w-6xl mx-auto aspect-[16/10]">
          {isImmersive && (
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-cyan-500/30 rounded-2xl blur-3xl -z-10"
              style={{
                top: "-10%",
                left: "-10%",
                right: "-10%",
                bottom: "-10%",
              }}
            />
          )}
          <div
            className="
    absolute z-10 pointer-events-none
    top-[12%] bottom-[14%]
    left-[11%] right-[11%]
    sm:top-[11%] sm:bottom-[13%] sm:left-[12%] sm:right-[12%]
    md:top-[10.5%] md:bottom-[12%] md:left-[13%] md:right-[13%]
  "
          >
            <div className="h-full w-full rounded-lg transition-all duration-500 overflow-hidden pointer-events-auto">
              <div
                className={`h-full w-full rounded-lg p-3 sm:p-4 md:px-6 md:py-5 lg:px-8 lg:py-6 max-w-full overflow-hidden transition-all duration-500 overflow-y-auto ${
                  isImmersive ? "hide-scrollbar" : ""
                }`}
                style={
                  isImmersive
                    ? {
                        background: "linear-gradient(to top, #000000, #434343)",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }
                    : {
                        background: "#FBF3D1",
                      }
                }
              >
                <div
                  className={`flex justify-between items-center w-full border-b h-14 sm:h-16 md:h-20 px-3 sm:px-4 md:px-6 lg:px-8 mt-4 sm:mt-6 md:mt-6 transition-all duration-500 ${
                    isImmersive
                      ? "bg-black backdrop-blur-md rounded-full border-gray-700/30 shadow-lg"
                      : "bg-[#E8D9B0] border-[#8b6f47] rounded-none shadow-none"
                  }`}
                >
                  {isImmersive && (
                    <div className="flex items-center gap-1.5 sm:gap-2 ">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg ">
                        <span className="text-white font-bold text-sm sm:text-lg">
                          L
                        </span>
                      </div>
                      <span className="text-white font-semibold text-sm sm:text-base md:text-lg hidden sm:block">
                        Leezova
                      </span>
                    </div>
                  )}
                  {!isImmersive && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#5a4a3a] font-semibold text-sm sm:text-base md:text-lg">
                        Leezova
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
                    <a
                      href="#home"
                      className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 transition-all duration-200 text-xs sm:text-sm md:text-base font-medium ${
                        isImmersive
                          ? "text-gray-300 hover:text-white relative group"
                          : "text-[#6b5a4a] hover:text-[#5a4a3a]"
                      }`}
                    >
                      Home
                      {isImmersive && (
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                      )}
                    </a>
                    <a
                      href="#about"
                      className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 transition-all duration-200 text-xs sm:text-sm md:text-base font-medium ${
                        isImmersive
                          ? "text-gray-300 hover:text-white relative group"
                          : "text-[#6b5a4a] hover:text-[#5a4a3a]"
                      }`}
                    >
                      About
                      {isImmersive && (
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                      )}
                    </a>
                    <a
                      href="#contact"
                      className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 transition-all duration-200 text-xs sm:text-sm md:text-base font-medium ${
                        isImmersive
                          ? "text-gray-300 hover:text-white relative group"
                          : "text-[#6b5a4a] hover:text-[#5a4a3a]"
                      }`}
                    >
                      Contact
                      {isImmersive && (
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                      )}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 ">
                    <button
                      className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border transition-all duration-200 flex items-center justify-center shadow-md group ${
                        isImmersive
                          ? "bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 hover:border-blue-500 hover:shadow-blue-500/20"
                          : "bg-[#E8D9B0] border-[#8b6f47]"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-colors duration-200 ${
                          isImmersive
                            ? "text-gray-400 group-hover:text-blue-400"
                            : "text-[#6b5a4a] group-hover:text-[#5a4a3a]"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="px-2 sm:px-4 md:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                  <div
                    className={`max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 transition-all duration-500 ${
                      isImmersive ? "text-center" : "text-left"
                    }`}
                  >
                    <h1
                      className={`font-bold mb-4 sm:mb-5 md:mb-6 leading-tight transition-all duration-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${
                        isImmersive ? "text-white" : "text-[#5a4a3a]"
                      }`}
                      style={
                        !isImmersive
                          ? {
                              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                            }
                          : {}
                      }
                    >
                      {isImmersive ? (
                        <>
                          Immersive Product Experience
                          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            That Engages
                          </span>
                        </>
                      ) : (
                        <>
                          Static Product Pages
                          <span
                            className="block text-[#8b6f47]"
                            style={{
                              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                            }}
                          >
                            That Inform
                          </span>
                        </>
                      )}
                    </h1>
                    <p
                      className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 max-w-2xl transition-all duration-500 ${
                        isImmersive ? "text-gray-300 mx-auto" : "text-[#6b5a4a]"
                      }`}
                    >
                      {isImmersive
                        ? "Experience products in a whole new way with interactive views, immersive environments, and engaging storytelling."
                        : "Traditional product pages with clear information, specifications, and straightforward navigation."}
                    </p>
                    <div
                      className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-500 ${
                        isImmersive ? "justify-center" : "justify-start"
                      }`}
                    >
                      <button
                        className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
                          isImmersive
                            ? "rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
                            : "rounded-none bg-[#8b6f47] text-[#FBF3D1] border-2 border-[#a0826d]"
                        }`}
                      >
                        Get Started
                      </button>
                      <button
                        className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
                          isImmersive
                            ? "rounded-full bg-gray-800/50 backdrop-blur-sm text-white border border-gray-700 hover:border-gray-600"
                            : "rounded-none bg-[#E8D9B0] text-[#6b5a4a] border-2 border-[#8b6f47]"
                        }`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/macBook.png"
            alt="MacBook"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero2;
