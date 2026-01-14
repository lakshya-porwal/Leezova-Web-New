export type CardSize = "large" | "medium";

export type CardProps = {
  text1: string; text2: string; text3: string; text4: string; text5: string; text6: string; text7: string;
  description1:string; description2:string; description3:string; description4:string; description5:string; 
  description6:string; description7:string; mediaSrc1?: string; mediaSrc2?: string; mediaSrc3?: string;
   mediaSrc4?: string; mediaSrc5?: string; mediaSrc6?: string; mediaSrc7?: string; title:string;
};

const Card = ({title, text1, text2, text3, text4, text5, text6, text7,description1,description2,
  description3,description4,description5,description6,description7, mediaSrc1, mediaSrc2, mediaSrc3, 
  mediaSrc4, mediaSrc5, mediaSrc6, mediaSrc7 }: CardProps) => {
    
    return (
    <div className="min-h-screen pt-24 px-2">
      <div className="text-[45px] text-bold flex justify-center items-center pb-3">
         {title}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5 gap-x-8 p-2 place-items-center">
        {/* Row 1 */}
        <div className="md:col-span-3 cols-span-1 flex md:flex-row justify-center gap-8 flex-col">
          <div className="group border p-[3px] rounded-[43px]
                    transition-all duration-300
                    hover:bg-gray-600">
            <div className="md:w-[420px] md:h-[56vh] w-[270px] h-[95vh] border border-white rounded-[40px] flex flex-col bg-black">
              <div className="h-[30%] flex flex-col justify-center items-center text-white rounded-t-xl p-8">
               <div className="text-xl font-bold text-start">{text1}</div> 
               <div className="text-sm text-start">{description1}</div> 
               </div>
              <div className="h-[70%] relative overflow-hidden">
                {mediaSrc1 && (() => {
                  const extension = mediaSrc1.slice(-3).toLowerCase();
                  const isVideo = extension === "mp4" || extension === "mkv";
                  return isVideo ? (
                    <video
                      src={mediaSrc1}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover rounded-b-[39px]"
                    />
                  ) : (
                    <img
                      src={mediaSrc1}
                      className="h-full w-full object-cover rounded-b-[39px]"
                      alt="image unavailable"
                    />
                  );
                })()}
                <div
                className="absolute inset-0 pointer-events-none gradient rounded-b-[39px]"/>
              </div>
            </div>
          </div>

          <div className="group border p-[3px] rounded-[43px] transition-all duration-300 hover:bg-gray-600">
            <div className="md:w-[420px] md:h-[56vh] w-[270px] h-[95vh] border border-white rounded-[40px] flex flex-col bg-black">
              <div className="h-[30%] flex flex-col justify-center items-center text-white rounded-t-xl p-8">
               <div className="text-xl font-bold text-start ">{text2}</div> 
               <div className="text-sm text-start">{description2}</div> 
               </div>
              <div className="h-[70%] relative overflow-hidden">
                {mediaSrc2 && (() => {
                  const extension = mediaSrc2.slice(-3).toLowerCase();
                  const isVideo = extension === "mp4" || extension === "mkv";
                  return isVideo ? (
                    <video
                      src={mediaSrc2}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover rounded-b-[39px]"
                    />
                  ) : (
                    <img
                      src={mediaSrc2}
                      className="h-full w-full object-cover rounded-b-[39px]"
                      alt="image is not unavailable"
                    />
                  );
                })()}
                <div
                className="absolute inset-0 pointer-events-none gradient rounded-b-[39px]"/>
              </div>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="md:col-span-3 cols-span-1 flex md:flex-row flex-col justify-center gap-8">
          <div className="group border p-[3px] rounded-[43px]
                    transition-all duration-300
                    hover:bg-gray-600">
            <div className="md:w-[280px] md:h-[85vh] w-[280px] h-[95vh] border border-white rounded-[40px] flex flex-col bg-black relative">
              <div className="h-[25%] flex flex-col justify-center items-center text-white rounded-t-xl p-9">
               <div className="text-xl font-bold text-start">{text3}</div> 
               <div className="text-sm text-start">{description3}</div> 
               </div>
              <div className="h-[75%] overflow-hidden relative rounded-b-[39px]">
                {mediaSrc3 && (() => {
                  const extension = mediaSrc3.slice(-3).toLowerCase();
                  const isVideo = extension === "mp4" || extension === "mkv";
                  return isVideo ? (
                    <video
                      src={mediaSrc3}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full  rounded-b-[38px] object-cover"
                    />
                  ) : (
                    <img
                      src={mediaSrc3}
                      className="h-full w-full object-cover rounded-b-[39px]"
                      alt="image unavailable"
                    />
                  );
                })()}
                <div
                className="absolute inset-0 pointer-events-none gradient rounded-b-[39px]"/>
                </div>
            </div>
          </div>

          <div className="group border p-[3px] rounded-[43px]
                    transition-all duration-300
                    hover:bg-gray-600">
            <div className="md:w-[280px] md:h-[85vh] w-[280px] h-[95vh] border border-white rounded-[40px] flex flex-col bg-black">
              <div className="h-[25%] flex flex-col justify-center items-center text-white rounded-t-xl p-9">
               <div className="text-xl font-bold text-start ">{text4}</div> 
               <div className="text-sm text-start">{description4}</div> 
               </div>
              <div className="h-[75%] relative overflow-hidden">
                {mediaSrc4 && (() => {
                  const extension = mediaSrc4.slice(-3).toLowerCase();
                  const isVideo = extension === "mp4" || extension === "mkv";
                  return isVideo ? (
                    <video
                      src={mediaSrc4}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover rounded-b-[39px]"
                    />
                  ) : (
                    <img
                      src={mediaSrc4}

                      className="h-full w-full object-cover rounded-b-[39px]"
                      alt="image unavailable"
                    />
                  );
                })()}
                <div
                className="absolute inset-0 pointer-events-none gradient rounded-b-[39px]"/>
              </div>
            </div>
          </div>

          <div className="group border p-[3px] rounded-[43px] transition-all duration-300 hover:bg-gray-600">
            <div className="md:w-[280px] md:h-[85vh] w-[280px] h-[95vh] border border-white rounded-[40px] flex flex-col bg-black">
              <div className="h-[25%] flex flex-col justify-center items-center  text-white rounded-t-xl p-9">
               <div className="text-xl font-bold text-start">{text5}</div> 
               <div className="text-sm text-start">{description5}</div> 
               </div>
              <div className="h-[75%] relative overflow-hidden">
                {mediaSrc5 && (() => {
                  const extension = mediaSrc5.slice(-3).toLowerCase();
                  const isVideo = extension === "mp4" || extension === "mkv";
                  return isVideo ? (
                    <video
                      src={mediaSrc5}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover rounded-b-[39px]"
                    />
                  ) : (
                    <img
                      src={mediaSrc5}
                      className="h-full w-full object-cover rounded-b-[39px]"
                      alt="image unavailable"
                    />
                  );
                })()}
                <div
                className="absolute inset-0 pointer-events-none gradient rounded-b-[39px]"/>
              </div>
            </div>
          </div>
        </div>
        {/* Row 3 */}
        <div className="md:col-span-3 cols-span-1 flex md:flex-row flex-col justify-center gap-8">
          <div className="group border p-[3px] rounded-[43px] transition-all duration-300 hover:bg-gray-600">
            <div className="md:w-[420px] md:h-[56vh] w-[270px] h-[95vh] border border-white rounded-[40px] flex flex-col bg-black">
              <div className="h-[30%] flex flex-col justify-center items-center  text-white rounded-t-xl p-8">
               <div className="text-xl font-bold text-start">{text6}</div> 
               <div className="text-sm text-start">{description6}</div> 
               </div>
              <div className="h-[70%] relative overflow-hidden">
                {mediaSrc6 && (() => {
                  const extension = mediaSrc6.slice(-3).toLowerCase();
                  const isVideo = extension === "mp4" || extension === "mkv";
                  return isVideo ? (
                    <video
                      src={mediaSrc6}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover rounded-b-[39px]"
                    />
                  ) : (
                    <img
                      src={mediaSrc6}
                      className="h-full w-full object-cover rounded-b-[39px]"
                      alt="image unavailable"
                    />
                  );
                })()}
                <div
                className="absolute inset-0 pointer-events-none gradient rounded-b-[39px]"/>
              </div>
            </div>
          </div>

          <div className="group border p-[3px] rounded-[43px]
                    transition-all duration-300
                    hover:bg-gray-600">
            <div className="md:w-[420px] md:h-[56vh] w-[270px] h-[95vh] border border-white rounded-[40px] flex flex-col bg-black">
              <div className="h-[30%] flex flex-col justify-center items-center  text-white rounded-t-xl p-8">
               <div className="text-xl font-bold text-start ">{text7}</div> 
               <div className="text-sm text-start">{description7}</div> 
               </div>
              <div className="h-[70%] relative overflow-hidden">
                {mediaSrc7 && (() => {
                  const extension = mediaSrc7.slice(-3).toLowerCase();
                  const isVideo = extension === "mp4" || extension === "mkv";
                  return isVideo ? (
                    <video
                      src={mediaSrc7}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover rounded-b-[39px]"
                    />
                  ) : (
                    <img
                      src={mediaSrc7}
                      className="h-full w-full object-cover rounded-b-[39px]"
                      alt="image unavailable"
                    />
                  );
                })()}
                <div
                className="absolute inset-0 pointer-events-none gradient rounded-b-[39px]"/>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Card;