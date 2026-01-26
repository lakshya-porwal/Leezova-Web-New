export type CardSize = "large" | "medium";

export type CardProps = {
  text1: string; text2: string; text3: string; text4: string; text5: string; text6: string; text7: string;
  description1: string; description2: string; description3: string; description4: string; description5: string;
  description6: string; description7: string;
  mediaSrc1?: string; mediaSrc2?: string; mediaSrc3?: string;
  mediaSrc4?: string; mediaSrc5?: string; mediaSrc6?: string; mediaSrc7?: string;
  title: string;
};

const Card = ({
  title,
  text1, text2, text3, text4, text5, text6, text7,
  description1, description2, description3, description4, description5, description6, description7,
  mediaSrc1, mediaSrc2, mediaSrc3, mediaSrc4, mediaSrc5, mediaSrc6, mediaSrc7
}: CardProps) => {

  const cardBase =
    "w-full max-w-[290px] md:max-w-[320px] lg:max-w-[420px] h-[95vh] md:h-[85vh] lg:h-[56vh] border border-white rounded-[40px] flex flex-col bg-black";

  return (
    <div className="min-h-screen pt-24 overflow-x-hidden">
      <div className="text-[45px] font-bold flex justify-center pb-3">
        {title}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 place-items-center w-full">

        {/* ROW 1 */}
        <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-8">
          {[{ text: text1, desc: description1, media: mediaSrc1 },
            { text: text2, desc: description2, media: mediaSrc2 }].map((item, i) => (
            <div key={i} className="group p-[3px] rounded-[43px] hover:bg-gray-600 transition">
              <div className={cardBase}>
                <div className="h-[30%] text-white p-4 md:p-6">
                  <div className="text-xl font-bold">{item.text}</div>
                  <p className="text-sm mt-2">{item.desc}</p>
                </div>
                <Media media={item.media} />
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2 */}
        <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-8">
          {[{ text: text3, desc: description3, media: mediaSrc3 },
            { text: text4, desc: description4, media: mediaSrc4 },
            { text: text5, desc: description5, media: mediaSrc5 }].map((item, i) => (
            <div key={i} className="group p-[3px] rounded-[43px] hover:bg-gray-600 transition">
              <div className={cardBase}>
                <div className="h-[25%] text-white p-4 md:p-6">
                  <div className="text-xl font-bold">{item.text}</div>
                  <p className="text-sm mt-2">{item.desc}</p>
                </div>
                <Media media={item.media} />
              </div>
            </div>
          ))}
        </div>

        {/* ROW 3 */}
        <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-8">
          {[{ text: text6, desc: description6, media: mediaSrc6 },
            { text: text7, desc: description7, media: mediaSrc7 }].map((item, i) => (
            <div key={i} className="group p-[3px] rounded-[43px] hover:bg-gray-600 transition">
              <div className={cardBase}>
                <div className="h-[30%] text-white p-4 md:p-6">
                  <div className="text-xl font-bold">{item.text}</div>
                  <p className="text-sm mt-2">{item.desc}</p>
                </div>
                <Media media={item.media} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const Media = ({ media }: { media?: string }) => {
  if (!media) return null;
  const isVideo = media.endsWith("mp4") || media.endsWith("mkv");

  return (
    <div className="h-[70%] relative overflow-hidden rounded-b-[39px]">
      {isVideo ? (
        <video 
          src={media} 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata"
          className="h-full w-full object-cover" 
        />
      ) : (
        <img 
          src={media} 
          alt="Card media"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover" 
        />
      )}
      <div className="absolute inset-0 pointer-events-none gradient" />
    </div>
  );
};

export default Card;
