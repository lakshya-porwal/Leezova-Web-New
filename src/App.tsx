import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Solution from './Solution'
import AboutUs from './aboutUs/AboutUs'
// import OurMission from './aboutUs/subPages/OurMission'
// import Values from './aboutUs/subPages/Values'
// import Team from './aboutUs/subPages/Team'
import Hero1 from './heroMain'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import OurProducts from './products/subPages/OurProducts'
import OurClients from './trustedBy/OurClients'
// import LeezovaStamp from './leezovaStamp'

function App() {
  const location = useLocation();

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    window.scrollTo(0, 0);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero1 />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        {/* <Route path="/about-us/our-mission" element={<OurMission />} /> */}
        {/* <Route path="/about-us/values" element={<Values />} /> */}
        {/* <Route path="/about-us/team" element={<Team />} /> */}
        <Route path="/products" element={<OurProducts />} />
        <Route path="/trustedBy" element={<OurClients />} />
        <Route path="/solutions" element={<Solution />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App