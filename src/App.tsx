import './App.css'
import { Route, Routes,useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Solution from './Solution'
import AboutUs from './aboutUs/AboutUs'

import Hero1 from './heroMain'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

import OurClients from './trustedBy/OurClients'
import OurProducts from './Products/OurProducts'
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
    <div className="bg-black min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero1 />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        {/* <Route path="/about-us/our-mission" element={<OurMission />} /> */}
        {/* <Route path="/about-us/values" element={<Values />} /> */}
        {/* <Route path="/about-us/team" element={<Team />} /> */}
        <Route path="/products" element={<OurProducts/>} />
        <Route path="/trustedBy" element={<OurClients/>} />
        <Route path="/solutions" element={<Solution />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App