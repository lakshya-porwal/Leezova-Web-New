export default function Values() {
  const values = [
    {
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical practices in all our interactions.",
      icon: (
        <img
          src="/Integrity.svg"
          alt="Integrity"
          loading="lazy"
          decoding="async"
          className="w-32 h-32 transition-all duration-300 brightness-0 opacity-100 md:opacity-50 md:brightness-100 md:group-hover:brightness-0 md:group-hover:opacity-100"
        />
      ),
      padding: "md:pt-10 pt-8",
    },
    {
      title: "Innovation",
      description:
        "We embrace new technologies and creative solutions to solve complex challenges and drive progress.",
      icon: (
        <img
          src="/Vector (1).svg"
          alt="Innovation"
          loading="lazy"
          decoding="async"
          className="w-32 h-32 transition-all duration-300 brightness-0 opacity-100 md:opacity-50 md:brightness-100 md:group-hover:brightness-0 md:group-hover:opacity-100"
        />
      ),
      padding: "md:pb-10",
    },
    {
      title: "Excellence",
      description:
        "We strive for the highest quality in every project, setting and exceeding industry standards.",
      icon: (
        <img
          src="/Vector.svg"
          alt="Excellence"
          loading="lazy"
          decoding="async"
          className="w-32 h-32 transition-all duration-300 brightness-0 opacity-100 md:opacity-50 md:brightness-100 md:group-hover:brightness-0 md:group-hover:opacity-100"
        />
      ),
      padding: "md:pt-10",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both within our organization and with our clients.",
      icon: (
        <img
          src="/Group.svg"
          alt="Collaboration"
          loading="lazy"
          decoding="async"
          className="w-32 h-32 transition-all duration-300 brightness-0 opacity-100 md:opacity-50 md:brightness-100 md:group-hover:brightness-0 md:group-hover:opacity-100"
        />
      ),
      padding: "md:pt-10",
    },
    {
      title: "Customer Focus",
      description:
        "Our clients' success is our success. We prioritize their needs and work tirelessly to deliver value.",
      icon: (
        <img
          src="/User Focus.svg"
          alt="Customer Focus"
          loading="lazy"
          decoding="async"
          className="w-32 h-32 transition-all duration-300 brightness-0 opacity-100 md:opacity-50 md:brightness-100 md:group-hover:brightness-0 md:group-hover:opacity-100"
        />
      ),
      padding: "md:pb-10",
    },
    {
      title: "Sustainability",
      description:
        "We are committed to sustainable practices and long-term thinking in all our endeavors.",
      icon: (
        <img
          src="/Sustainability.svg"
          alt="Sustainability"
          loading="lazy"
          decoding="async"
          className="w-32 h-32 transition-all duration-300 brightness-0 opacity-100 md:opacity-50 md:brightness-100 md:group-hover:brightness-0 md:group-hover:opacity-100"
        />
      ),
      padding: "md:pt-10",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 relative">
      <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
        <h1 className="mt-8 md:mt-20 md:text-[50px] text-[40px] font-bold text-black select-none mb-10">
          OUR VALUES
        </h1>
      </div>

      <div className="relative z-10 mt-24 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-x-8 place-items-center max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className={`h-[400px] w-full max-w-[350px] ${value.padding} group px-4 sm:px-0`}
            >
              <div className="h-full w-full rounded-xl p-[2px] bg-white shadow-md group-hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="h-full w-full bg-white rounded-lg flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex-1 flex items-center justify-center">
                    {value.icon}
                  </div>

                  <div className="px-4 pb-6 text-center">
                    <h3 className="text-2xl font-semibold text-[#4169E1]">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {value.description}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}