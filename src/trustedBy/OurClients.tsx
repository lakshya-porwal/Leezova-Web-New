
import ClientCard from '../components/ClientCard'
const OurClients = () => {
  return (
    <div>
      <p className="md:text-4xl text-4xl text-blue-600 tracking-widest uppercase md:mt-24 mt-10 px-4 font-semibold">
        Trusted Brands. Elevated Experiences.
      </p>
      <div className="px-4 sm:px-8 md:px-16">
        <ClientCard
          title="Rockbottom.in"
          description="We revamped Rockbottom’s online presence with a faster, modern interface designed to improve engagement and drive more conversions."
          imgSrc="/rock-bottom-bg2.png"
          link="https://rockbottom.in"
        />

        <ClientCard
          title="Techila Global Services"
          description="For Techila, we built a professional and performance-focused website that reflects their global IT expertise and strengthens client trust."
          imgSrc="/techilaWebSs.png"
          link="https://www.techilaservices.com/"
          reverse
        />

        <ClientCard
          title="Vardhaman Computers"
          description="We helped Vardhaman Computers modernize their digital presence with a clean layout that showcases their products and improves customer inquiries."
          imgSrc="/public/vardhmanComputerSs.jpeg"
          link="#"
        />

        <ClientCard
          title="St. Peter Convent Higher Secondary School"
          description="We designed an informative and easy-to-navigate website for St. Peter Convent to better connect with parents, students, and the school community."
          imgSrc="/public/Convent schoolSs.jpeg"
          link="#"
          reverse
        />

        <ClientCard
          title="Agar Mart"
          description="For Agar Mart, we created a visually appealing and user-friendly platform that highlights their product range and supports smooth customer interaction."
          imgSrc="/Agar Mart Logo.png"
          link="#"
        />
      </div>
      <p className="text-center text-gray-500 text-lg md:text-xl mt-12 mb-24 italic tracking-wide">
        …and many more success stories ahead.
      </p>
    </div>
  )
}

export default OurClients



