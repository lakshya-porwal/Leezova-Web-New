
import { Link } from "react-router-dom";
import { useState } from "react";
import { ScheduleModal } from "./ContactUs";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../heroIcons/icons";

export default function Footer() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: "Our Mission", path: "/about-us/our-mission" },
      { label: "Values", path: "/about-us/values" },
      { label: "Team", path: "/about-us/team" },
    ],
    products: [{ label: "ERP", path: "/products/Erp" }],
    company: [{ label: "Solutions", path: "/solutions" }],
  };

  return (
    <footer className="relative w-full">
      {/* TOP BAR */}
      <div className="relative bg-[#090979]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-4">
          <div className="flex gap-6 text-sm font-mono text-white">
            <Link to="/terms-of-service" className="hover:underline">
              TERMS OF SERVICE
            </Link>
            <Link to="/privacy-policy" className="hover:underline">
              PRIVACY POLICY
            </Link>
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img src="/logoSmall.png" className="h-4 md:h-8 brightness-0 invert" />
            <img src="/mainLogo.png" className="hidden md:block h-4 brightness-0 invert" />
          </Link>
        </div>

        {/* WAVE */}
        <div className="relative w-full h-24 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0 L0,95 L150,90 L300,80 L450,65 L600,50 L750,35 L900,25 L1050,18 L1200,12 L1200,0 Z"
              fill="#090979"
            />
            <path
              d="M0,95 L150,90 L300,80 L450,65 L600,50 L750,35 L900,25 L1050,18 L1200,12 L1200,120 L0,120 Z"
              fill="#000"
            />
          </svg>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative bg-black text-white">
        <div className="relative z-10 max-w-full  py-14">
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-4 items-start">

            {/* RED DIV (HORIZONTAL LINKS) */}
            <div className="lg:col-span-2 rounded-xl py-6 md:pr-10 md:pl-4 px-10 md:ml-10 md:mr-20 mx-10">
              <div className="grid grid-cols-1 sm:grid-cols-3">
                {/* ABOUT */}
                <div>
                  <h3 className="md:text-lg text-base font-semibold md:mb-3 mb-2 font-mono">ABOUT</h3>
                  <ul className="space-y-2">
                    {footerLinks.about.map((link) => (
                      <li key={link.path}>
                        <Link to={link.path} className="text-gray-400 hover:text-white md:text-base text-sm">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PRODUCTS */}
                <div>
                  <h3 className="md:text-lg text-base  font-semibold md:mb-3 mb-2 md:mt-0 mt-2 font-mono">PRODUCTS</h3>
                  <ul className="space-y-2">
                    {footerLinks.products.map((link) => (
                      <li key={link.path}>
                        <Link to={link.path} className="text-gray-400 hover:text-white md:text-base text-sm">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COMPANY */}
                <div>
                  <h3 className="md:text-lg text-base font-semibold md:mb-3 mb-2 md:mt-0 mt-2 font-mono">COMPANY</h3>
                  <ul className="space-y-2">
                    {footerLinks.company.map((link) => (
                      <li key={link.path}>
                        <Link to={link.path} className="text-gray-400 hover:text-white md:text-base text-sm">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* WHITE DIV (SLIGHTLY SMALLER) */}
            <div className="lg:col-span-2 border-2  rounded-xl h-48 md:h-56 flex items-center justify-center md:mr-10 md:ml-0 mx-10">
              {/* <h3 className="text-lg font-semibold mb-4 font-mono">CONNECT</h3>
              
                  <button
                    onClick={() => setScheduleModalOpen(true)}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                  >
                    Contact Us
                  </button> */}
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 px-4">
            <p className="text-sm font-mono">
              © {currentYear} LEEZOVA. All rights reserved.
            </p>

            <div className="flex gap-3">
              <FacebookIcon className="h-7 w-10" />
              <InstagramIcon className="h-7 w-10" />
              <LinkedInIcon className="h-7 w-10" />
            </div>
          </div>
        </div>
      </div>

      <ScheduleModal isOpen={scheduleModalOpen} onClose={() => setScheduleModalOpen(false)} />
    </footer>
  );
}


 {/* <h3 className="text-lg font-semibold mb-4 font-mono">CONNECT</h3>
              
                  <button
                    onClick={() => setScheduleModalOpen(true)}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                  >
                    Contact Us
                  </button> */}