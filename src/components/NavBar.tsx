import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navRoutes } from "./routes";

const PlaceholderIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className="text-gray-400"
  >
    <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="15" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const NAV_LINK_BASE = "md:px-4 md:py-2 rounded-lg transition-colors";
const NAV_LINK_ACTIVE = "bg-[#2d3447] text-white";
const NAV_LINK_INACTIVE = "text-gray-300 hover:bg-[#2d3447] hover:text-white";
const DEFAULT_DESCRIPTION = "Explore our offerings and discover how we can help you achieve your goals.";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<{ routeId: string; itemIndex: number } | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);


  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) fallback.classList.remove('hidden');
  };

  const handleRightPanelMouseEnter = (routeId: string) => {
    if (hoveredItem?.routeId === routeId) {
      setHoveredItem({ routeId, itemIndex: hoveredItem.itemIndex });
    }
  };

  return (
    <div className="md:fixed md:top-0 md:left-0 md:right-0 z-50 md:bg-transparent text-white ">
      <div className="md:max-w-7xl md:mx-auto md:px-6 md:py-4 hidden md:block">
        <div className="md:flex  md:items-center  md:justify-between">
          <Link to="/" className="md:flex  md:items-center  md:space-x-2">
            <span className="text-2xl font-bold">★</span>
            <span className="text-xl font-semibold">LEEZOVA</span>
          </Link>

          <div className="md:flex  md:items-center md:space-x-1">
            {navRoutes.map((route, index) => {
              const routeId = route.path || `nav-${index}-${route.label.toLowerCase().replace(/\s+/g, '-')}`;
              const isActive = activeDropdown === routeId;
              const navLinkClassName = `${NAV_LINK_BASE} ${isActive ? NAV_LINK_ACTIVE : NAV_LINK_INACTIVE}`;

              const activeItem = route.dropdownItems && (hoveredItem?.routeId === routeId
                ? route.dropdownItems[hoveredItem.itemIndex]
                : route.dropdownItems[0]);

              return (
                <div
                  key={routeId}
                  className=" md:relative"
                  onMouseEnter={() => route.hasDropdown && setActiveDropdown(routeId)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {route.path ? (
                    <Link to={route.path} className={navLinkClassName}>
                      {route.label}
                    </Link>
                  ) : (
                    <div className={`${navLinkClassName} cursor-pointer`}>
                      {route.label}
                    </div>
                  )}

                  {/* dropdown */}

                  {route.hasDropdown && isActive && route.dropdownItems && (
                    <div
                      className="md:absolute  md:top-full  md:left-0  md:pt-2  md:w-[600px] z-50 "
                      onMouseEnter={() => setActiveDropdown(routeId)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="bg-[#2d3447]  md:rounded-lg shadow-2xl overflow-hidden">
                        <div className="md:grid  md:grid-cols-2 md:gap-0">
                          <div className="md:p-6  md:space-y-4">
                            <div className="md:space-y-1">
                              {route.dropdownItems.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className="md:block md:px-3 md:py-2  md:rounded-md hover:bg-[#3a4155] cursor-pointer transition-colors"
                                  onMouseEnter={() => setHoveredItem({ routeId, itemIndex: idx })}
                                  onMouseLeave={() => setHoveredItem(null)}
                                >
                                  <div className="font-medium text-white">{item.label}</div>
                                  {item.description && (
                                    <div className="text-sm text-gray-400">{item.description}</div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div
                            className="md:p-6 bg-[#252b3f]"
                            onMouseEnter={() => handleRightPanelMouseEnter(routeId)}
                          >
                            {activeItem && (
                              <div className=" md:mb-4">
                                {activeItem.image ? (
                                  <div className=" md:w-full  md:h-48 rounded-lg overflow-hidden  md:mb-4 backdrop-blur-md bg-black/20">
                                    <div className={` md:w-full  md:h-full rounded-lg transition-all duration-500 ease-in-out ${hoveredItem?.routeId === routeId ? ' md:ml-0  md:mt-0' : ' md:ml-2  md:mt-2'
                                      }`}>
                                      <img
                                        src={activeItem.image}
                                        alt={activeItem.label}
                                        className=" md:w-full  md:h-full object-cover rounded-lg"
                                        onError={handleImageError}
                                      />
                                      <div className=" md:w-full  md:h-48 bg-[#3a4155] rounded-lg  md:flex items-center justify-center hidden">
                                        <PlaceholderIcon size={48} />
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className=" md:w-16  md:h-16 bg-[#3a4155] rounded-lg  md:flex items-center justify-center  md:mb-4">
                                    <PlaceholderIcon size={24} />
                                  </div>
                                )}
                                <h3 className="text-xl font-semibold text-white  md:mb-2">
                                  {activeItem.label}
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                  {activeItem.description || DEFAULT_DESCRIPTION}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button className=" md:px-6  md:py-2 bg-[#2d3447] hover:bg-[#3a4155] rounded-lg font-medium transition-colors">
            Schedule a Call
          </button>
        </div>
      </div>

      {/* mobile view navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#1f2433]">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">★</span>
          <span className="text-lg font-semibold">LEEZOVA</span>
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="text-2xl"
        >
          ☰
        </button>
      </div>
      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-[#1f2433] z-50 transform transition-transform duration-300 overflow-y-auto overscroll-contain
  ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <div
            onClick={() => setMobileOpen(false)}
            className="text-xl cursor-pointer"
          >
            ✕
          </div>
        </div>

       {/* Nav Links */}
<div className="flex flex-col p-4 space-y-2">
  {navRoutes.map((route, index) => {
    const routeId =
      route.path || `mobile-${index}-${route.label.toLowerCase()}`;

    const isOpen = mobileActiveMenu === routeId;

    return (
      <div key={routeId}>
        {/* MAIN OPTION */}
        <div
          className="flex items-center justify-between px-3 py-2 rounded-md text-gray-200 hover:bg-[#2d3447] cursor-pointer"
          onClick={() =>
            setMobileActiveMenu(isOpen ? null : routeId)
          }
        >
          <span>{route.label}</span>

          {route.dropdownItems && (
            <span className="text-sm">
              {isOpen ? "-" : "+"}
            </span>
          )}
        </div>

        {/* DROPDOWN ITEMS */}
        {isOpen && route.dropdownItems && (
          <div className="ml-4 mt-2 space-y-2">
            {route.dropdownItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => {
                  setMobileOpen(false);
                  setMobileActiveMenu(null);
                }}
                className="block px-3 py-2 text-sm rounded-md text-gray-400 hover:bg-[#2d3447]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  })}

  {/* schedule call btn */}
  <button className="mt-4 px-4 py-2 bg-[#2d3447] hover:bg-[#3a4155] rounded-lg">
    Schedule a Call
  </button>
</div>
</div>
</div>
);
}

