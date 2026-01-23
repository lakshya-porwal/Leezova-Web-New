import './App.css'
import { Route, Routes,useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import OurProducts from './products/subPages/OurProducts'
// import OnBoard from './products/subPages/OnBoard'
// import Decide from './products/subPages/Decide'
// // import PolicyEngine from './products/subPages/PolicyEngine'
// import DataPlatform from './products/subPages/DataPlatform'
import Solution from './Solution'
import AboutUs from './aboutUs/AboutUs'
import OurMission from './aboutUs/subPages/OurMission'
import Values from './aboutUs/subPages/Values'
// import ContactUs from './aboutUs/subPages/ContactUs'
import Team from './aboutUs/subPages/Team'
import Hero1 from './heroMain'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Erp from './products/subPages/Erp'
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
        <Route path="null" element={<AboutUs />} />
        <Route path="/about-us/our-mission" element={<OurMission />} />
        <Route path="/about-us/values" element={<Values />} />
        <Route path="/about-us/team" element={<Team />} />
        {/* <Route path="/about-us/contact-us" element={<ContactUs />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/products/our-products" element={<OurProducts />} /> */}
        {/* <Route path="/products/onboard" element={<OnBoard />} /> */}
        {/* <Route path="/products/decide" element={<Decide />} /> */}
        {/* <Route path="/products/policy-engine" element={<PolicyEngine />} /> */}
        {/* <Route path="/products/data-platform" element={<DataPlatform />} /> */}
        <Route path="/products/Erp" element={<Erp/>} />
        <Route path="/solutions" element={<Solution />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App