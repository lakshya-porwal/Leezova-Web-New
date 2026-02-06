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
    <footer className="relative w-full bg-[#0b1230] text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <img
            src="/logoSmall.png"
            alt="LEEZOVA Logo"
            loading="lazy"
            decoding="async"
            className="h-6 md:h-8 brightness-0 invert -mt-0.5"
          />
          <img
            src="/mainLogo.png"
            alt="LEEZOVA"
            loading="lazy"
            decoding="async"
            className="hidden md:block h-4 brightness-0 invert mt-0.5"
          />
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-400 mb-4">
              ABOUT
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-400 mb-4">
              OUR PRODUCTS
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-400 mb-4">
              RESOURCES
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-400 mb-2">
              CONNECT
            </h3>
            <div className="flex gap-3">
              <a href="https://facebook.com" aria-label="Facebook">
                <FacebookIcon className="h-6 w-6 text-slate-300 hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <InstagramIcon className="h-6 w-6 text-slate-300 hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <LinkedInIcon className="h-6 w-6 text-slate-300 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://maps.app.goo.gl/MMwzmSQ1XnRjbVwWA"
                aria-label="Google Maps"
              >
                <svg
                  className="h-6 w-6 text-slate-300 hover:text-blue-400 transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.5c-3.59 0-6.5 2.9-6.5 6.5 0 4.69 6.5 12.5 6.5 12.5s6.5-7.81 6.5-12.5c0-3.6-2.91-6.5-6.5-6.5zm0 9.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z" />
                </svg>
              </a>
            </div>
            <div className="mt-3 space-y-1 text-sm text-slate-300">
              <a
                href="mailto:contact@Leezova.com"
                className="hover:text-blue-400 transition-colors"
              >
                contact@Leezova.com
              </a>
              <div>+91 9202155929</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex items-center justify-center text-sm text-slate-400">
          <span>© {currentYear} LEEZOVA. All rights reserved.</span>
        </div>
      </div>

      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </footer>
  );
}
