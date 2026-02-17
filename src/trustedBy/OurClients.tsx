import ClientCard from '../components/ClientCard'
const OurClients = () => {
  return (
    <div>
      <p className="md:text-4xl sm:text-3xl text-blue-600 tracking-widest uppercase md:mt-24 mt-10 px-4 font-semibold">
        Trusted Brands. Elevated Experiences.
      </p>

 <div
    className="h-px block border-none w-full mt-4"
    style={{
      background:
        "linear-gradient(90deg, #fff0 15%, #ffffffb3 50%, #fff0 85%)",
    }}
  ></div>

      <div className="px-4 sm:px-8 md:px-16">
        <ClientCard
          title="Techila Global Services "
          description="Through our developer staffing and augmentation services, Leezova Technologies empowered Techila Global Services with experienced technical talent, enhancing their delivery capacity, scalability, and project efficiency for global clients."
          imgSrc="/techilaWebSs.png"
          link="https://www.techilaservices.com/"
        />

        <ClientCard
          title="LivePoint Solutions"
          description="Leezova Technologies supports LivePoint Solutions through dedicated IT staff augmentation, providing skilled development professionals who help strengthen their project delivery capacity, scalability, and technical execution across multiple digital transformation initiatives."
          imgSrc="\livePointSs.png"
          link="https://www.livepointsolutions.com/"
          reverse
        />

        <ClientCard
          title=" St. Peter School "
          description="Leezova Technologies developed the website and mobile app for St. Peter School, showcasing their academic programs, admissions, events, and school community information. The platform is also used for school management purposes, providing an easy-to-use experience for students, parents, and staff, and helping the school run operations and communicate effectively online."
          imgSrc="/Convent schoolSs.jpeg"
          link="https://st-peter-cdf71.web.app/"
        />

        <ClientCard
          title="Vardhaman Computers (Printing & Flex Services)"
          description="Leezova Technologies created the website and mobile app for Vardhaman Computers, showcasing their printing, flex printing, and branding services. The platform includes customer and printing management features, helping clients explore services and manage orders easily."
          imgSrc="/vardhmanComputerSs.jpeg  "
          link=" https://vardhaman-computers-cfe7a.web.app/"
          reverse
        />

        <ClientCard
          title="Rock Bottom Pool Villas-Luxury Resort "
          description="Leezova Technologies designed and developed the website and mobile application for Rock Bottom Pool Villas, a luxury resort featuring elegant private villas, modern amenities, and serene poolside experiences. Rock Bottom and other hotels use our in-house product, Merutix, for internal booking management, helping streamline operations, enhance guest engagement, and strengthen their digital presence."
          imgSrc="/rock-bottom-bg2.png"
          link="https://rockbottom.in "
        />
        <ClientCard
          title="Agar Mart"
          description="Leezova Technologies designed and developed the website and mobile app for AgarMart, a B2B platform enabling efficient sourcing and trading of Agarbatti (incense sticks) & Raw materials. The platform features a connected supplier network, streamlined order management, WhatsApp."
          imgSrc="/Agar Mart Logo.png"
          reverse
        />
      </div>
      <p className="text-center text-lg md:text-xl mt-12 mb-24 italic tracking-wide">
        …and many more success stories ahead.
      </p>
    </div>
  )
}

export default OurClients



