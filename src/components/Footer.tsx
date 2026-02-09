import { Link } from "react-router-dom";
import { useState } from "react";
import { ScheduleModal } from "./ContactUs";
import { TwitterIcon, InstagramIcon, LinkedInIcon } from "../heroIcons/icons";

export default function Footer() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    aboutUs: [
      { label: "About Us", path: "/aboutUs/AboutUs.tsx" },
    ],
    products: [
      { label: "Products", path: "/products/Erp" },
    ],
    trustedBy: [
      { label: "Trusted By", path: "/trustedBy/RockBottom.tsx" },
    ],
    solutions: [
      { label: "Solutions", path: "/solutions" },
    ],
  };

  const quickLinks = [
    { label: "Privacy Policy", path: "#" },
    { label: "Terms of Service", path: "#" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-white via-yellow-50/20 to-white text-slate-700 border-t border-yellow-200">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section - Logo + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 pb-8 border-b border-yellow-100">
          {/* Brand Section */}
          <div className="flex flex-col justify-center">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/logoSmall.png" alt="LEEZOVA Logo" className="h-10" />
              <img src="/mainLogo.png" alt="LEEZOVA" className="hidden md:block h-6" />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Building intelligent digital solutions that help businesses operate smarter, faster, and better.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center items-start lg:items-center">
            <h4 className="text-sm font-semibold text-yellow-600 mb-3 uppercase tracking-wide">Start Your Journey</h4>
            <button
              onClick={() => setScheduleModalOpen(true)}
              className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Demo
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-1">100+</div>
              <div className="text-xs text-slate-600">Happy Clients</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <div className="text-2xl font-bold text-yellow-600 mb-1">50+</div>
              <div className="text-xs text-slate-600">Expert Team</div>
            </div>
          </div>
        </div>

        {/* Main Grid - Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

          {/* About Us */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-yellow-600 mb-6 uppercase">
              About
            </h3>
            <ul className="space-y-3">
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

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-yellow-600 mb-6 uppercase">
              Products
            </h3>
            <ul className="space-y-3">
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

          {/* Trusted By */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-yellow-600 mb-6 uppercase">
              Trusted By
            </h3>
            <ul className="space-y-3">
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

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-yellow-600 mb-6 uppercase">
              Solutions
            </h3>
            <ul className="space-y-3">
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

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-yellow-600 mb-6 uppercase">
              Connect
            </h3>

            <div className="flex gap-4 mb-6 justify-center items-center">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 border border-yellow-200 hover:bg-yellow-400 hover:border-yellow-500 transition-all"
              >
                <TwitterIcon className="h-5 w-5 text-slate-600 hover:text-slate-900 transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 border border-yellow-200 hover:bg-yellow-400 hover:border-yellow-500 transition-all"
              >
                <InstagramIcon className="h-5 w-5 text-slate-600 hover:text-slate-900 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 border border-yellow-200 hover:bg-yellow-400 hover:border-yellow-500 transition-all"
              >
                <LinkedInIcon className="h-5 w-5 text-slate-600 hover:text-slate-900 transition-colors" />
              </a>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Email</p>
                <a
                  href="mailto:contact@Leezova.com"
                  className="block text-sm text-slate-700 hover:text-yellow-600 transition-colors"
                >
                  contact@Leezova.com
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Phone</p>
                <a
                  href="tel:+919202155929"
                  className="block text-sm text-slate-700 hover:text-yellow-600 transition-colors"
                >
                  +91 9202155929
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8 pb-8 border-b border-yellow-100">
          <div className="flex flex-wrap gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-slate-600 hover:text-yellow-600 transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <div>
            © {currentYear} <span className="font-semibold text-slate-700">LEEZOVA</span>. All rights reserved.
          </div>
          <div className="text-xs">
            Made with <span className="text-yellow-600">♥</span> for businesses worldwide
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