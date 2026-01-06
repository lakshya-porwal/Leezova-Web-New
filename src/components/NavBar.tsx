import React, { useState, useCallback} from "react";
import { Link } from "react-router-dom";
import { navRoutes } from "./routes";

const STYLES = {
  navBase: "md:px-4 md:py-2 rounded-lg transition-colors",
  navActive: "bg-[#2d3447] text-white",
  navInactive: "text-gray-300 hover:bg-[#2d3447] hover:text-white",
  dropdownBg: "bg-[#2d3447]",
  dropdownItemBg: "bg-[#252b3f]",
  hoverBg: "hover:bg-[#3a4155]",
} as const;

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
  <Link to="/" className="flex items-center space-x-2">
    <span className="text-xl md:text-2xl font-bold">★</span>
    <span className="text-lg md:text-xl font-semibold">LEEZOVA</span>
  </Link>
));
Logo.displayName = 'Logo';

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
const DropdownPreview = React.memo(({
  item,
  isHovered
}: {
  item: DropdownItem;
  isHovered: boolean;
}) => (
  <div className="md:p-6 bg-[#252b3f]">
    <div className="md:mb-4">
      {item.image ? (
        <div className="w-full h-48 rounded-lg overflow-hidden mb-4 backdrop-blur-md bg-black/20">
          <div className={`w-full h-full rounded-lg transition-all duration-500 ease-in-out ${isHovered ? 'md:ml-0 md:mt-0' : 'md:ml-2 md:mt-2'
            }`}>
            <ImageWithFallback
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
));
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
    <div className="md:absolute md:top-full md:left-0 md:pt-2 md:w-[600px] z-50">
      <div className={`${STYLES.dropdownBg} md:rounded-lg shadow-2xl overflow-hidden`}>
        <div className="md:grid md:grid-cols-2 md:gap-0">
          <div className="md:p-6 md:space-y-4">
            <div className="md:space-y-1">
              {route.dropdownItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className={`md:block md:px-3 md:py-2 md:rounded-md ${STYLES.hoverBg} cursor-pointer transition-colors text-left`}
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
          <DropdownPreview item={activeItem} isHovered={hoveredIdx !== null} />
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
  onItemHover
}: {
  routes: NavRoute[];
  activeDropdown: string | null;
  hoveredItems: HoveredItems;
  onDropdownEnter: (routeId: string) => void;
  onDropdownLeave: () => void;
  onItemHover: (routeId: string, idx: number | null) => void;
}) => (
  <div className="hidden md:block">
    <div className="md:max-w-7xl md:mx-auto md:px-6 md:py-4">
      <div className="md:flex md:items-center md:justify-between">
        <Logo />

        <div className="md:flex md:items-center md:space-x-1">
          {routes.map((route, index) => {
            const routeId = generateRouteId(route, index);
            const isActive = activeDropdown === routeId;
            const navClass = `${STYLES.navBase} ${isActive ? STYLES.navActive : STYLES.navInactive}`;

            return (
              <div
                key={routeId}
                className="md:relative"
                onMouseEnter={() => route.hasDropdown && onDropdownEnter(routeId)}
                onMouseLeave={onDropdownLeave}
              >
                {route.path ? (
                  <Link to={route.path} className={navClass}>
                    {route.label}
                  </Link>
                ) : (
                  <div className={`${navClass} cursor-pointer`}>
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

        <button className="md:px-6 md:py-2 bg-[#2d3447] hover:bg-[#3a4155] rounded-lg font-medium transition-colors">
          Schedule a Call
        </button>
      </div>
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
  onClose
}: {
  routes: NavRoute[];
  isOpen: boolean;
  activeMenu: string | null;
  onToggle: () => void;
  onMenuToggle: (routeId: string) => void;
  onClose: () => void;
}) => (
  <>
    <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#1f2433]">
      <Logo />
      <button onClick={onToggle} className="text-2xl" aria-label="Open menu">
        ☰
      </button>
    </div>

    <div
      className={`fixed top-0 left-0 h-full w-[75%] bg-[#1f2433] z-50 transform transition-transform duration-300 overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
    >      <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
        <span className="text-lg font-semibold">Menu</span>
        <button
          onClick={onClose}
          className="text-xl cursor-pointer"
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
            <div key={routeId}>              <div
                className="flex items-center justify-between px-3 py-2 rounded-md text-gray-200 hover:bg-[#2d3447] cursor-pointer"
                onClick={() => onMenuToggle(routeId)}
              >
                <span>{route.label}</span>
                {route.dropdownItems && (
                  <span className="text-sm">{isMenuOpen ? "-" : "+"}</span>
                )}
              </div>

              {isMenuOpen && route.dropdownItems && (
                <div className="ml-4 mt-2 space-y-2">
                  {route.dropdownItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={onClose}
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

        <button className="mt-4 px-4 py-2 bg-[#2d3447] hover:bg-[#3a4155] rounded-lg">
          Schedule a Call
        </button>
      </div>
    </div>
  </>
));
MobileNav.displayName = 'MobileNav';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItems, setHoveredItems] = useState<HoveredItems>({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
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

  return (
    <nav className="md:fixed md:top-0 md:left-0 md:right-0 z-50 md:bg-transparent text-white">
      <DesktopNav
        routes={navRoutes}
        activeDropdown={activeDropdown}
        hoveredItems={hoveredItems}
        onDropdownEnter={handleDropdownEnter}
        onDropdownLeave={handleDropdownLeave}
        onItemHover={handleItemHover}
      />
      <MobileNav
        routes={navRoutes}
        isOpen={mobileOpen}
        activeMenu={mobileActiveMenu}
        onToggle={handleMobileToggle}
        onMenuToggle={handleMobileMenuToggle}
        onClose={handleMobileClose}
      />
    </nav>
  );
}