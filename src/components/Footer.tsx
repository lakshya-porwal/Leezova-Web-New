
import { Link } from "react-router-dom";
import { useState } from "react";
import { ScheduleModal } from "./ContactUs";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../heroIcons/icons";
import LeezovaStamp from "../LeezovaStamp";

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
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start">

            {/* RED DIV (HORIZONTAL LINKS) */}
            <div className="lg:col-span-1 rounded-xl py-6 md:px-6 px-10 md:ml-10 md:w-full">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* ABOUT */}
                <div>
                  <h3 className="md:text-lg text-base font-semibold md:mb-3 mb-2 font-mono text-left">ABOUT</h3>
                  <ul className="space-y-2 text-left">

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
                  <h3 className="md:text-lg text-base  font-semibold md:mb-3 mb-2 md:mt-0 mt-2 text-left font-mono">PRODUCTS</h3>
                  <ul className="space-y-2 text-left">
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
                  <h3 className="md:text-lg text-base font-semibold md:mb-3 mb-2 md:mt-0 mt-2 text-left font-mono ">COMPANY</h3>
                  <ul className="space-y-2 text-left">
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

            <div className="lg:col-span-1 flex justify-center pb-4 md:pb-0 items-center">
              <LeezovaStamp />
            </div>

            <div className="lg:col-span-1 rounded-xl border-2 h-48 md:h-56 flex flex-col justify-center gap-2 md:pr-6 px-6 text-white">

              {/* Phone */}
              <div className="flex items-center gap-3 text-right">
                {/* <span className="md:text-lg text-base">📞</span> */}
                <span className="md:text-lg text-base">+91 9202155929</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                {/* <span className="md:text-lg text-base">✉️</span> */}
                <a className="md:text-lg text-base" href="mailto:contact@Leezova.com">
                  contact@Leezova.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3">
                {/* <span className="md:text-lg text-base">📍</span> */}
                <span className="md:text-lg text-base text-left">56-Vigyan Nagar,Indore,Madhya Pradesh 452009</span>
              </div>

              {/* Timing */}
              <div className="flex items-center gap-3">
                {/* <span className="md:text-lg text-base">🕒</span> */}
                <span className="md:text-lg text-base">Monday – Friday: 10:30am –6:30 pm</span>
              </div>

            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 px-4">
            <p className="text-sm font-mono">
              © {currentYear} LEEZOVA. All rights reserved.
            </p>

            <div className="flex gap-3">
              <a
                href="https://facebook.com">
                <FacebookIcon className="h-7 w-10 hover:opacity-80 transition-opacity cursor-pointer" />
              </a>
              <a
                href="https://instagram.com"><InstagramIcon className="h-7 w-10 cursor-pointer" />
              </a>
              <a
                href="https://linkedin.com"><LinkedInIcon className="h-7 w-10 cursor-pointer" /></a>

            </div>
          </div>
        </div>
      </div>

      <ScheduleModal isOpen={scheduleModalOpen} onClose={() => setScheduleModalOpen(false)} />
    </footer>
  );
}