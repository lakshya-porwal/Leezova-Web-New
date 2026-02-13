import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navRoutes } from "./routes";
import { ScheduleModal } from "./ContactUs";

const DEFAULT_DESCRIPTION = "Explore our offerings and discover how we can help you achieve your goals.";
interface HoveredItems {
  [routeId: string]: number;
}

interface DropdownItem {
  label: string;
  path: string;
  description?: string;
  image?: string;
}

interface NavRoute {
  label: string;
  path?: string | null;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}
const generateRouteId = (route: NavRoute, index: number): string => {
  return route.path || `nav-${index}-${route.label.toLowerCase().replace(/\s+/g, '-')}`;
};
const PlaceholderIcon = React.memo(({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-gray-400">
    <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="15" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
));
PlaceholderIcon.displayName = 'PlaceholderIcon';

const Logo = React.memo(() => (
  <Link to="/" className="flex items-center gap-2">
    <img
      src="/logoSmall.png"
      alt="LEEZOVA"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className="h-8 md:h-6 w-auto brightness-0 invert"
    />
    <img
      src="/mainLogo.png"
      alt="LEEZOVA"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className="hidden md:block h-2 md:h-4 w-auto brightness-0 invert"
    />
  </Link>
));
Logo.displayName = 'Logo';
const DotLogo = React.memo(() => (
  <Link to="/" className="flex items-center justify-center">
    <img
      src="/logoSmall.png"
      alt="LEEZOVA"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className="h-8 w-auto brightness-0 invert"
    />
  </Link>
));
DotLogo.displayName = 'DotLogo';

const ImageWithFallback = React.memo(({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [failed, setFailed] = useState(false);

  return failed ? (
    <div className="w-full h-48 bg-[#3a4155] rounded-lg flex items-center justify-center">
      <PlaceholderIcon size={48} />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
});
ImageWithFallback.displayName = 'ImageWithFallback';
const DropdownPreview = ({
  item,
  isHovered,
  animationKey
}: {
  item: DropdownItem;
  isHovered: boolean;
  animationKey: number | string;
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isHovered) {
      // Reset animation state
      setAnimate(false);
      // Trigger animation in next frame
      const timer = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
        });
      });
      return () => cancelAnimationFrame(timer);
    } else {
      setAnimate(false);
    }
  }, [animationKey, isHovered]);

  return (
    <div className="lg:p-6 bg-[#252b3f]">
      <div className="lg:mb-4">
        {item.image ? (
          <div className="w-72 h-48 rounded-lg overflow-hidden mb-4 backdrop-blur-md bg-black/20">
            <div
              className={`w-full h-full rounded-lg transition-transform duration-500 ease-in-out ${animate ? 'lg:translate-x-0 lg:translate-y-0' : 'lg:translate-x-2 lg:translate-y-2'}`}
            >
              <ImageWithFallback
                key={`img-${animationKey}`}
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ) : (
          <div className="w-16 h-16 bg-[#3a4155] rounded-lg flex items-center justify-center mb-4">
            <PlaceholderIcon size={24} />
          </div>
        )}
        <h3 className="text-xl font-semibold text-white mb-2">{item.label}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          {item.description || DEFAULT_DESCRIPTION}
        </p>
      </div>
    </div>
  );
};
DropdownPreview.displayName = 'DropdownPreview';

const DesktopDropdown = React.memo(({
  route,
  hoveredIdx,
  onItemHover
}: {
  route: NavRoute;
  hoveredIdx: number | null;
  onItemHover: (idx: number | null) => void;
}) => {
  if (!route.dropdownItems) return null;

  const activeItem = route.dropdownItems[hoveredIdx ?? 0];

  return (
    <div className="lg:absolute lg:top-full lg:left-0 lg:pt-2 lg:w-[600px] z-[9999]">
      <div className="bg-[#2d3447] lg:rounded-lg shadow-2xl overflow-hidden">
        <div className=" grid lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-0">
          <div className="lg:p-6 lg:space-y-4">
            <div className="lg:space-y-1">
              {route.dropdownItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="lg:block lg:px-3 lg:py-2 lg:rounded-md hover:bg-[#3a4155] cursor-pointer transition-colors text-left"
                  onMouseEnter={() => onItemHover(idx)}
                  onMouseLeave={() => onItemHover(null)}
                >
                  <div className="font-medium text-white">{item.label}</div>
                  {item.description && (
                    <div className="text-sm text-gray-400">{item.description}</div>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <DropdownPreview
            item={activeItem}
            isHovered={hoveredIdx !== null}
            animationKey={hoveredIdx ?? 'default'}
          />
        </div>
      </div>
    </div>
  );
});
DesktopDropdown.displayName = 'DesktopDropdown';

// DESKTOP NAVIGATION
const DesktopNav = React.memo(({
  routes,
  activeDropdown,
  hoveredItems,
  onDropdownEnter,
  onDropdownLeave,
  onItemHover,
  onScheduleClick,
  isScrollingDown
}: {
  routes: NavRoute[];
  activeDropdown: string | null;
  hoveredItems: HoveredItems;
  onDropdownEnter: (routeId: string) => void;
  onDropdownLeave: () => void;
  onItemHover: (routeId: string, idx: number | null) => void;
  onScheduleClick: () => void;
  isScrollingDown: boolean;
}) => (
  <div className="hidden lg:block relative w-full px-4 pt-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div className="flex-1 flex justify-start">
        <div
        style={{
          background: 'linear-gradient(180deg,rgba(6, 6, 94, 1) 0%, rgba(0, 0, 0, 0.51) 37%, rgba(255, 255, 255, 0) 100%)',
          transition: 'width 0.8s cubic-bezier(0.65, 0, 0.35, 1), height 0.8s cubic-bezier(0.65, 0, 0.35, 1), padding 0.8s cubic-bezier(0.65, 0, 0.35, 1), border-radius 0.8s cubic-bezier(0.65, 0, 0.35, 1)'
        }}
        className={`relative shadow-2xl border border-white/10 backdrop-blur-md overflow-hidden ${
          isScrollingDown
            ? 'w-[54px] h-[54px] rounded-full px-0'
            : 'w-full h-[52px] rounded-full px-6'
        }`}
        >
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isScrollingDown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <DotLogo />
          </div>

          <div className={`h-full flex items-center justify-between gap-4 transition-all duration-500 origin-center ${isScrollingDown ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <Logo />

            <div className="flex-1 flex items-center justify-center space-x-3 whitespace-nowrap">
              {routes.map((route, index) => {
                const routeId = generateRouteId(route, index);
                const isActive = activeDropdown === routeId;

                return (
                  <div
                    key={routeId}
                    className="relative"
                    onMouseEnter={() => route.hasDropdown && onDropdownEnter(routeId)}
                    onMouseLeave={onDropdownLeave}
                  >
                    {route.path ? (
                      <Link
                        to={route.path}
                        className={`px-8 py-2 rounded-full transition-colors ${isActive
                          ? 'bg-[#2d3447] text-white'
                            : 'text-gray-300 hover:bg-black hover:text-white'
                          }`}
                      >
                        {route.label}
                      </Link>
                    ) : (
                      <div
                        className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${isActive
                          ? 'bg-[#2d3447] text-white'
                            : 'text-gray-300 hover:bg-black hover:text-white'
                          }`}
                      >
                        {route.label}
                      </div>
                    )}

                    {route.hasDropdown && isActive && route.dropdownItems && (
                      <DesktopDropdown
                        route={route}
                        hoveredIdx={hoveredItems[routeId] ?? null}
                        onItemHover={(idx) => onItemHover(routeId, idx)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onScheduleClick}
        className="bg-white rounded-full shadow-2xl h-[52px] px-6 text-black hover:bg-gray-100 font-medium transition-colors flex items-center shrink-0"
      >
        Book a call
      </button>
    </div>
  </div>
));
DesktopNav.displayName = 'DesktopNav';
const MobileNav = React.memo(({
  routes,
  isOpen,
  activeMenu,
  onToggle,
  onMenuToggle,
  onClose,
  onScheduleClick
}: {
  routes: NavRoute[];
  isOpen: boolean;
  activeMenu: string | null;
  onToggle: () => void;
  onMenuToggle: (routeId: string) => void;
  onClose: () => void;
  onScheduleClick: () => void;
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Mobile/Tablet Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-[#1f2433]">
        <Logo />
        <button
          onClick={onToggle}
          className="text-2xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#3a4155] rounded p-1"
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-[53%] sm:w-[50%] md:w-[60%] bg-[#1f2433] z-50 transform transition-transform duration-300 ease-out overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Sidebar Header */}
        <div className="sticky top-0 bg-[#1f2433] z-10 flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <span className="text-lg font-semibold text-white pl-4">Menu</span>
          <button
            onClick={onClose}
            className="text-2xl text-gray-300 hover:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3a4155] rounded p-1 transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col p-4 space-y-2">
          {routes.map((route, index) => {
            const routeId = route.path || `mobile-${index}-${route.label.toLowerCase()}`;
            const isMenuOpen = activeMenu === routeId;

            return (
              <div key={routeId}>
                {route.path && !route.hasDropdown ? (
                  <Link
                    to={route.path}
                    onClick={onClose}
                    className="flex items-center justify-start text-left px-3 py-3 rounded-md text-gray-200 hover:bg-[#2d3447] active:bg-[#3a4155] cursor-pointer transition-colors touch-manipulation"
                  >
                    <span className="flex-1">{route.label}</span>
                  </Link>
                ) : (
                  <div
                    className="flex items-center justify-between px-3 py-3 rounded-md text-gray-200 hover:bg-[#2d3447] active:bg-[#3a4155] cursor-pointer transition-colors touch-manipulation"
                    onClick={() => {
                      if (route.hasDropdown && route.dropdownItems) {
                        onMenuToggle(routeId);
                      }
                    }}
                  >
                    <span className="flex-1">{route.label}</span>
                    {route.dropdownItems && (
                      <span className="text-lg font-bold text-gray-400 ml-2">
                        {isMenuOpen ? "−" : "+"}
                      </span>
                    )}
                  </div>
                )}

                {isMenuOpen && route.dropdownItems && (
                  <div className="ml-2 mt-1 mb-2 space-y-1 border-l-2 border-gray-700 pl-4 transition-all duration-200">
                    {route.dropdownItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={onClose}
                        className="block px-3 py-2.5 text-sm rounded-md text-gray-400 hover:bg-[#2d3447] hover:text-white active:bg-[#3a4155] transition-colors touch-manipulation"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <button
            className="mt-6 px-4 py-3 bg-[#2d3447] hover:bg-[#3a4155] active:bg-[#4a5568] rounded-lg font-7xl text-white transition-colors touch-manipulation"
            onClick={() => {
              onScheduleClick();
              onClose();
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
});
MobileNav.displayName = 'MobileNav';

export default function Navbar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItems, setHoveredItems] = useState<HoveredItems>({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide if scrolled down more than 50px
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsScrollingDown(true);
        } else {
          // Scrolling up
          setIsScrollingDown(false);
        }
      } else {
        // At top of page
        setIsScrollingDown(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileActiveMenu(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        setMobileActiveMenu(null);
      }
    };

    if (mobileOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [mobileOpen]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
        setMobileActiveMenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  const handleDropdownEnter = useCallback((routeId: string) => {
    setActiveDropdown(routeId);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const handleItemHover = useCallback((routeId: string, idx: number | null) => {
    setHoveredItems(prev =>
      idx === null
        ? { ...prev, [routeId]: 0 }
        : { ...prev, [routeId]: idx }
    );
  }, []);

  const handleMobileToggle = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  const handleMobileClose = useCallback(() => {
    setMobileOpen(false);
    setMobileActiveMenu(null);
  }, []);

  const handleMobileMenuToggle = useCallback((routeId: string) => {
    setMobileActiveMenu(prev => prev === routeId ? null : routeId);
  }, []);

  const handleScheduleClick = useCallback(() => {
    setScheduleModalOpen(true);
  }, []);

  const handleScheduleClose = useCallback(() => {
    setScheduleModalOpen(false);
  }, []);

  return (
    <>
      <nav className="lg:fixed lg:top-0 lg:left-0 lg:right-0 z-[9999] text-white relative">
        <DesktopNav
          routes={navRoutes}
          activeDropdown={activeDropdown}
          hoveredItems={hoveredItems}
          onDropdownEnter={handleDropdownEnter}
          onDropdownLeave={handleDropdownLeave}
          onItemHover={handleItemHover}
          onScheduleClick={handleScheduleClick}
          isScrollingDown={isScrollingDown}
        />
        <MobileNav
          routes={navRoutes}
          isOpen={mobileOpen}
          activeMenu={mobileActiveMenu}
          onToggle={handleMobileToggle}
          onMenuToggle={handleMobileMenuToggle}
          onClose={handleMobileClose}
          onScheduleClick={handleScheduleClick}
        />
      </nav>
      <ScheduleModal isOpen={scheduleModalOpen} onClose={handleScheduleClose} />
    </>
  );
}