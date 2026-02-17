import { Link } from "react-router-dom";
import { useState } from "react";
import { ScheduleModal } from "./ContactUs";
import { InstagramIcon, LinkedInIcon } from "../heroIcons/icons";

export default function Footer() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full text-slate-200"
      style={{
        backgroundColor: "#000000",
        background:
          "linear-gradient(180deg,rgba(6, 6, 94, 1) 0%, rgba(0, 0, 0, 0.51) 37%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-10">
        
          <div className="relative z-10 flex flex-col gap-3 md:flex-row items-center justify-between">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white my-3">Start Your Journey</h2>
              <p className="text-slate-300 max-w-md">
                Elevate your business with LEEZOVA&apos;s cutting-edge tech solutions and strategic digital expertise.
              </p>
            </div>
            <button
              onClick={() => setScheduleModalOpen(true)}
              className="px-5 py-2 bg-slate-200 hover:bg-slate-100 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Call
            </button>
          </div>
  
        
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-3">
        <div className="space-y-6">
          <h3 className="text-white font-bold text-lg uppercase tracking-wider text-center md:text-left">Quick Links</h3>
          <nav className="flex flex-col gap-4 items-center md:items-start">
            <Link to="/aboutUs" className="text-slate-400 hover:text-white flex items-center justify-center md:justify-start gap-2 group transition-colors">
              <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
              About Us
            </Link>
            <Link to="/products" className="text-slate-400 hover:text-white flex items-center justify-center md:justify-start gap-2 group transition-colors">
              <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
              Products
            </Link>
            <Link to="/trustedBy" className="text-slate-400 hover:text-white flex items-center justify-center md:justify-start gap-2 group transition-colors">
              <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
              Trusted By
            </Link>
            <Link to="/solutions" className="text-slate-400 hover:text-white flex items-center justify-center md:justify-start gap-2 group transition-colors">
              <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
              Solutions
            </Link>
          </nav>
        </div>

        <div className="space-y-6">
          <h3 className="text-white font-bold text-lg uppercase tracking-wider">Contact Us</h3>
          <div className="">
            <a className="flex items-center justify-center md:justify-start gap-4 p-1 rounded-lg transition-colors group" href="mailto:contact@Leezova.com">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 6L12 13L21 6M5 4H19C20.1 4 21 4.9 21 6V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6C3 4.9 3.9 4 5 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-slate-200">contact@Leezova.com</p>
              </div>
            </a>
            <a className="flex items-center justify-center md:justify-start gap-4 p-1 rounded-lg transition-colors group" href="tel:+919202155929">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22 16.92V20C22 20.55 21.55 21 21 21C11.61 21 4 13.39 4 4C4 3.45 4.45 3 5 3H8.09C8.57 3 8.99 3.34 9.09 3.81L9.81 7.27C9.9 7.71 9.74 8.16 9.39 8.45L7.25 10.2C8.35 12.64 10.36 14.65 12.8 15.75L14.55 13.61C14.84 13.26 15.29 13.1 15.73 13.19L19.19 13.91C19.66 14.01 20 14.43 20 14.91V16.92H22Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-slate-200">+91 9202155929</p>
              </div>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-white font-bold text-lg uppercase tracking-wider">Our Location</h3>
          <a
            href="https://maps.app.goo.gl/37RbpNWksCGvYKKX9"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl overflow-hidden border border-white/[0.05] group relative h-32 block"
          >
            <img
              className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 group-hover:blur-sm transition-all duration-700"
              alt="Minimalist dark map showing city streets"
              src="/maps.png"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg className="w-8 h-8 text-blue-400 mb-2 transition-transform duration-300 group-hover:scale-150  " viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21C12 21 5 14.5 5 9.5C5 5.36 8.13 2 12 2C15.87 2 19 5.36 19 9.5C19 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <p className="text-black font-medium">View Our Office Location</p>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-lg uppercase tracking-wider">Follow Us</h3>
          <p className="text-slate-400 text-sm">Join our digital community and stay updated with the latest in tech.</p>
          <div className="flex gap-4 pt-1 items-center justify-center">
            <a
              href="https://x.com/Leezova_Tech"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center transition-all"
            >
              <svg className="w-5 h-5 text-white fill-current transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.24L6.66 22H3.55l7.24-8.27L1.32 2h6.25l4.33 5.7zm-1.07 18.17h1.69L6.66 3.74H4.84z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/leezova_technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center transition-all"
            >
              <InstagramIcon className="w-5 h-5 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
            </a>
            <a
              href="https://www.linkedin.com/company/leezova-technologies-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center transition-all"
            >
              <LinkedInIcon className="w-5 h-5 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logoSmall.png"
              alt="LEEZOVA"
              className="h-8 w-auto brightness-0 invert"
            />
            <img
              src="/mainLogo.png"
              alt="LEEZOVA"
              className="h-4 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-slate-500 text-sm">
            © {currentYear} LEEZOVA. All rights reserved.
           
          </p>
        </div>
      </div>

      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </footer>
  );
}
