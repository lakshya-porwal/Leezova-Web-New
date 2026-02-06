import { useState, useEffect, useRef } from "react";
const LeezovaStamp = () => {
  const stampRef = useRef<SVGGElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotateStamp = () => {
      setRotation((prev) => (prev + 0.5) % 360);
    };

    const interval = setInterval(rotateStamp, 20);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="flex justify-center lg:justify-start ">
        <div className="h-20 md:h-48 w-20 md:w-48">
          <svg
            className="w-full h-full"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              ref={stampRef}
              style={{
                transformOrigin: "100px 100px",
                transform: `rotate(${rotation}deg)`,
              }}
            >
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <text
                x="100"
                y="100"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fill="#ffffff"
                fontFamily="monospace"
                fontWeight="bold"
              >
                <textPath href="#circlePath" startOffset="0%">
                  GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH •
                  GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH
                </textPath>
              </text>
              <path
                id="circlePath"
                d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                fill="none"
              />
            </g>
            <g transform="translate(100, 100) scale(0.12) translate(-512, -512)">
              <path
                d="M321 317.25L155 122H321V317.25L155 903H248.163H321V535.52V317.25Z"
                fill="#ffffff"
              />
              <path
                d="M335 122H471.765V697.077H800V834H509.484H335V122Z"
                fill="#ffffff"
              />
              <path d="M484 122L540 122V684H484V122Z" fill="#ffffff" />
              <path
                d="M814.51 698H869V903H335V848.333H814.51V698Z"
                fill="#ffffff"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LeezovaStamp;
