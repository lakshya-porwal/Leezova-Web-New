import { Link } from "react-router-dom";
import { useState } from "react";
import { ScheduleModal } from "./ContactUs";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../heroIcons/icons";

export default function Footer() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    aboutUs: [{ label: "About Us", path: "/aboutUs" }],
    products: [{ label: "Products", path: "/products" }],
    trustedBy: [{ label: "Trusted By", path: "/trustedBy" }],
    solutions: [{ label: "Solutions", path: "/solutions" }],
  };

  return (
    <footer className="relative w-full bg-[#0b1230] text-slate-200">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">

        {/* Top Section - Logo + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 pb-6 border-b border-white/10">
          {/* Brand Section */}
          <div className="flex flex-col justify-center">
            <Link to="/" className="flex items-center justify-center gap-3 mb-2">
              <img src="/logoSmall.png" alt="LEEZOVA Logo" className="h-10 brightness-0 invert" />
              <img src="/mainLogo.png" alt="LEEZOVA" className="hidden md:block h-6 brightness-0 invert" />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Building intelligent digital solutions that help businesses operate smarter, faster, and better.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">Start Your Journey</h4>
            <button
              onClick={() => setScheduleModalOpen(true)}
              className="px-5 py-2 bg-slate-200 hover:bg-slate-100 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a call
            </button>
          </div>

          {/* contact Section */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0b1230] rounded-lg p-3">
              <div className="md:text-2xl text-xl font-bold text-slate-200 mb-1">Email</div>
              <div className="text-xs text-slate-300">
                <a
                  href="mailto:contact@Leezova.com"
                  className="block md:text-sm text-xs text-slate-300 hover:text-blue-400 transition-colors"
                >
                  contact@Leezova.com
                </a>
              </div>
            </div>
            <div className="bg-[#0b1230] rounded-lg p-3">
              <div className="md:text-2xl text-xl font-bold text-slate-200 mb-1">Phone</div>
              <div className="text-xs text-slate-300">
                <a
                  href="tel:+919202155929"
                  className="block md:text-sm text-xs text-slate-300 hover:text-blue-400 transition-colors"
                >
                  +91 9202155929
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid - Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6 items-center">

          {/* Left: Routes in a 2x2 grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  {footerLinks.aboutUs.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-slate-300 relative group inline-block hover:text-blue-400 transition-colors"
                      >
                        <span>{link.label}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-2">
                  {footerLinks.products.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-slate-300 relative group inline-block hover:text-blue-400 transition-colors"
                      >
                        <span>{link.label}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-2">
                  {footerLinks.trustedBy.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-slate-300 relative group inline-block hover:text-blue-400 transition-colors"
                      >
                        <span>{link.label}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-2">
                  {footerLinks.solutions.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-slate-300 relative group inline-block hover:text-blue-400 transition-colors"
                      >
                        <span>{link.label}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Middle: Connect (centered) */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xs font-semibold tracking-widest text-slate-300 mb-6 uppercase">
              Connect
            </h3>
            <div className="flex gap-3 mb-4 justify-center items-center">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0b1230] border border-white/10 hover:bg-slate-700 hover:border-slate-500 transition-all"
              >
                <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-200 transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0b1230] border border-white/10 hover:bg-slate-700 hover:border-slate-500 transition-all"
              >
                <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-200 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0b1230] border border-white/10 hover:bg-slate-700 hover:border-slate-500 transition-all"
              >
                <LinkedInIcon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-200 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right: Map / Address (clickable -> Google Maps) */}
          <div className="lg:col-span-2 flex flex-col justify-center items-center">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Ltd., 56, Vigyan Nagar, Indore, Madhya Pradesh 452009')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col w-full bg-[#0b1230] rounded-lg shadow-md overflow-hidden"
              aria-label="Open Leezova address in Google Maps"
            >
              <div className="w-full h-40 sm:h-48 md:h-40">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.42035397175!2d75.83158438761129!3d22.67539057020986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd02401ec16d%3A0xf152590e82896ba3!2sLeezova%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1770874814293!5m2!1sen!2sin" width="100%" height="100%" className="border-none rounded-xl" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>

              <div className="p-3 sm:p-4 w-full">
                <div className="text-sm font-semibold text-slate-200">LEEZOVA Technology</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1">Ltd., 56, Vigyan Nagar, Indore, Madhya Pradesh 452009</div>
                <div className="mt-2 text-[12px] text-blue-400 font-medium inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6v6" />
                  </svg>
                  View on Google Maps
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center text-sm text-slate-300">
          <div>
            © {currentYear} <span className="font-semibold text-slate-200">LEEZOVA</span>. All rights reserved.
          </div>
        </div>
      </div>

      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </footer>
  );
}
