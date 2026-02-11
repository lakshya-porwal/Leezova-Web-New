import { Link } from "react-router-dom";
import { useState } from "react";
import { ScheduleModal } from "./ContactUs";
import { XIcon, InstagramIcon, LinkedInIcon } from "../heroIcons/icons";

export default function Footer() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    aboutUs: [
      { label: "About Us", path: "/aboutUs" },
    ],
    products: [
      { label: "Products", path: "/products" },
    ],
    trustedBy: [
      { label: "Trusted By", path: "/trustedBy" },
    ],
    solutions: [
      { label: "Solutions", path: "/solutions" },
    ],
  };

  return (
    <footer className="relative w-full bg-yellow-50 text-slate-700 border-t border-yellow-200">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">

        {/* Top Section - Logo + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 pb-6 border-b border-yellow-200">
          {/* Brand Section */}
          <div className="flex flex-col justify-center">
            <Link to="/" className="flex items-center  justify-center gap-3 mb-2">
              <img src="/logoSmall.png" alt="LEEZOVA Logo" className="h-10" />
              <img src="/mainLogo.png" alt="LEEZOVA" className="hidden md:block h-6" />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Building intelligent digital solutions that help businesses operate smarter, faster, and better.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-sm font-semibold text-yellow-600 mb-3 uppercase tracking-wide">Start Your Journey</h4>
            <button
              onClick={() => setScheduleModalOpen(true)}
              className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a call
            </button>
          </div>

          {/* contact Section */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-yellow-50 rounded-lg p-3 ">
              <div className="md:text-2xl text-xl font-bold text-yellow-600 mb-1">Email</div>
              <div className="text-xs text-slate-600">
                <a
                  href="mailto:contact@Leezova.com"
                  className="block md:text-sm text -xs text-slate-700 hover:text-yellow-600 transition-colors"
                >
                  contact@Leezova.com
                </a>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 ">
              <div className="md:text-2xl text-xl font-bold text-yellow-600 mb-1">Phone</div>
              <div className="text-xs text-slate-600">
                <a
                  href="tel:+919202155929"
                  className="block md:text-sm text-xs text-slate-700 hover:text-yellow-600 transition-colors"
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
                        className="text-sm text-slate-600 relative group inline-block hover:text-yellow-600 transition-colors"
                      >
                        <span>{link.label}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-500 transition-all group-hover:w-full"></span>
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
                        className="text-sm text-slate-600 relative group inline-block hover:text-yellow-600 transition-colors"
                      >
                        <span>{link.label}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-500 transition-all group-hover:w-full"></span>
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
                        className="text-sm text-slate-600 relative group inline-block hover:text-yellow-600 transition-colors"
                      >
                        <span>{link.label}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-500 transition-all group-hover:w-full"></span>
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
                        className="text-sm text-slate-600 relative group inline-block hover:text-yellow-600 transition-colors"
                      >
                        <span>{link.label}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-500 transition-all group-hover:w-full"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Middle: Connect (centered) */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xs font-semibold tracking-widest text-yellow-600 mb-6 uppercase">
              Connect
            </h3>
            <div className="flex gap-3 mb-4 justify-center items-center">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow-50 border border-yellow-200 hover:bg-yellow-400 hover:border-yellow-500 transition-all"
              >
                <XIcon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 hover:text-slate-900 transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow-50 border border-yellow-200 hover:bg-yellow-400 hover:border-yellow-500 transition-all"
              >
                <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 hover:text-slate-900 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow-50 border border-yellow-200 hover:bg-yellow-400 hover:border-yellow-500 transition-all"
              >
                <LinkedInIcon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600 hover:text-slate-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right: Map / Address (clickable -> Google Maps) */}
          <div className="lg:col-span-2 flex justify-end items-center">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Ltd., 56, Vigyan Nagar, Indore, Madhya Pradesh 452009')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-stretch max-w-xs w-full bg-yellow-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-0.5"
              aria-label="Open Leezova address in Google Maps"
            >
              <div className="w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 flex-shrink-0">
                <iframe
                  title="Leezova location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2641.225519572002!2d75.83292019999999!3d22.6754863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd02401ec16d%3A0xf152590e82896ba3!2sLeezova%20Technologies%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1770707869960!5m2!1sen!2sin"
                  className="w-full h-full border-0 rounded-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-2.5 sm:p-3 flex-1">
                <div className="text-sm font-semibold text-slate-800">LEEZOVA Technology</div>
                <div className="text-xs text-slate-600 mt-1 leading-snug">Ltd., 56, Vigyan Nagar, Indore,<br />Madhya Pradesh 452009</div>
                <div className="mt-2 text-[12px] text-yellow-600 font-medium inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
        <div className="flex flex-col sm:flex-row justify-center items-center text-sm text-slate-600">
          <div>
            © {currentYear} <span className="font-semibold text-slate-700 ">LEEZOVA</span>. All rights reserved.
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