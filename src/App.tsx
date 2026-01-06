import './App.css'
import { Route, Routes,useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OurProducts from './products/subPages/OurProducts'
import OnBoard from './products/subPages/OnBoard'
import Decide from './products/subPages/Decide'
import LifeCycle from './products/subPages/LifeCycle'
import PolicyEngine from './products/subPages/PolicyEngine'
import DataPlatform from './products/subPages/DataPlatform'
import Solution from './Solution'
import Careers from './Careers' 
import AboutUs from './aboutUs/AboutUs'
import OurMission from './aboutUs/subPages/OurMission'
import Values from './aboutUs/subPages/Values'
import ContactUs from './aboutUs/subPages/ContactUs'
import Team from './aboutUs/subPages/Team'
import Hero1 from './heroMain'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const location = useLocation();

  useEffect(() => {
    // Kill all ScrollTriggers on route change
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);
  return (
    <div>
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<Hero1 />} />
        <Route path="null" element={<AboutUs />} />
        <Route path="/about-us/our-mission" element={<OurMission />} />
        <Route path="/about-us/values" element={<Values />} />
        <Route path="/about-us/team" element={<Team />} />
        <Route path="/about-us/contact-us" element={<ContactUs />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products/our-products" element={<OurProducts />} />
        <Route path="/products/onboard" element={<OnBoard />} />
        <Route path="/products/decide" element={<Decide />} />
        <Route path="/products/lifecycle" element={<LifeCycle />} />
        <Route path="/products/policy-engine" element={<PolicyEngine />} />
        <Route path="/products/data-platform" element={<DataPlatform />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App