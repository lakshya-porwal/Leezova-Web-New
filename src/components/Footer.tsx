
import { Link } from "react-router-dom";
import { useState } from "react";
import { ScheduleModal } from "./ContactUs";

export default function Footer() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: "Our Mission", path: "/about-us/our-mission" },
      { label: "Values", path: "/about-us/values" },
      { label: "Team", path: "/about-us/team" },
    ],
    products: [
      { label: "ERP", path: "/products/Erp" }
    ],
    company: [
      { label: "Solutions", path: "/solutions" }
    ],
  };

  return (
    <footer className="relative w-full">
      <div className="relative bg-[#090979]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6 text-sm font-mono">
              <Link
                to="/terms-of-service"
                className="hover:underline transition-colors text-white"
              >
                TERMS OF SERVICE
              </Link>
              <Link
                to="/privacy-policy"
                className="hover:underline transition-colors text-white"
              >
                PRIVACY POLICY
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <img src="/logoSmall.png" alt="LEEZOVA" className="h-4 md:h-8 w-auto brightness-0 invert" />
                <img src="/mainLogo.png" alt="LEEZOVA" className="hidden md:block h-4 md:h-4 w-auto brightness-0 invert" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full h-24 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 L0,95 L150,90 L300,80 L450,65 L600,50 L750,35 L900,25 L1050,18 L1200,12 L1200,0 Z"
              fill="#090979"
            />
            <path
              d="M0,95 L150,90 L300,80 L450,65 L600,50 L750,35 L900,25 L1050,18 L1200,12 L1200,120 L0,120 Z"
              fill="#000000"
            />
          </svg>
        </div>
      </div>

      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                              radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-mono">ABOUT</h3>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-mono">PRODUCTS</h3>
              <ul className="space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-mono">COMPANY</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 font-mono">CONNECT</h3>
              <ul className="space-y-2">
                <li>
                  <div
                    onClick={() => setScheduleModalOpen(true)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contact Us
                  </div>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white text-sm font-mono">
                © {currentYear} LEEZOVA. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm font-mono">
                <Link
                  to="/terms-of-service"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/cookies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-black"></div>
      <ScheduleModal isOpen={scheduleModalOpen} onClose={() => setScheduleModalOpen(false)} />
    </footer>
  );
}

