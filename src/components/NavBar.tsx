import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navRoutes } from "./routes";
import emailjs from '@emailjs/browser';

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
    <img src="/logoSmall.png" alt="LEEZOVA" className="h-8 md:h-6 w-auto brightness-0 invert" />
    <img src="/mainLogo.png" alt="LEEZOVA" className="hidden md:block h-2 md:h-4 w-auto brightness-0 invert" />
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
          <div className="w-full h-48 rounded-lg overflow-hidden mb-4 backdrop-blur-md bg-black/20">
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
    <div className="lg:absolute lg:top-full lg:left-0 lg:pt-2 lg:w-[600px] z-50">
      <div className="bg-[#2d3447] lg:rounded-lg shadow-2xl overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 lg:gap-0">
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
  onScheduleClick
}: {
  routes: NavRoute[];
  activeDropdown: string | null;
  hoveredItems: HoveredItems;
  onDropdownEnter: (routeId: string) => void;
  onDropdownLeave: () => void;
  onItemHover: (routeId: string, idx: number | null) => void;
  onScheduleClick: () => void;
}) => (
  <div className="hidden lg:block relative w-full">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 100%)'
      }}
    />
    <div className="w-full px-6 py-4 relative z-10">
      <div className="flex items-center justify-between w-full">
        <Logo />

        <div className="flex items-center space-x-1 justify-center">
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
                    className={`px-4 py-2 rounded-lg transition-colors ${isActive
                        ? 'bg-[#2d3447] text-white'
                        : 'text-gray-300 hover:bg-[#2d3447] hover:text-white'
                      }`}
                  >
                    {route.label}
                  </Link>
                ) : (
                  <div
                    className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${isActive
                        ? 'bg-[#2d3447] text-white'
                        : 'text-gray-300 hover:bg-[#2d3447] hover:text-white'
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

        <button
          onClick={onScheduleClick}
          className="px-6 py-2 bg-[#2d3447] hover:bg-[#3a4155] rounded-lg font-medium transition-colors text-white"
        >
          Contact Us
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
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-[75%] md:w-[60%] bg-[#1f2433] z-50 transform transition-transform duration-300 ease-out overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Sidebar Header */}
        <div className="sticky top-0 bg-[#1f2433] z-10 flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <span className="text-lg font-semibold text-white">Menu</span>
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
                    className="flex items-center justify-between px-3 py-3 rounded-md text-gray-200 hover:bg-[#2d3447] active:bg-[#3a4155] cursor-pointer transition-colors touch-manipulation"
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

// Schedule Modal Component
interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// EmailJS Configuration
// ====================
// To set up EmailJS for sending contact form emails:
// 
// 1. Sign up for a free account at https://www.emailjs.com/
// 2. Go to Email Services and add a service (Gmail, Outlook, etc.)
// 3. Go to Email Templates and create a new template with these variables:
//    - {{to_email}} - recipient email
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{phone}} - sender's phone
//    - {{preferred_date}} - preferred date
//    - {{preferred_time}} - preferred time
//    - {{description}} - message description
//    - {{subject}} - email subject
//    - {{message}} - full message body
// 4. Go to Account > API Keys and copy your Public Key
// 5. Update the constants below with your credentials:
const EMAILJS_SERVICE_ID = 'service_t5pep46'; // Your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_ygfnv6c'; // Replace with your EmailJS Template ID (get from Email Templates section)
const EMAILJS_PUBLIC_KEY = 'XmJ-Y5bkY3VCVlBYh'; // Replace with your EmailJS Public Key (get from Account > API Keys)
const RECIPIENT_EMAIL = 'lakshya.porwal@leezova.com'; // Email address to receive submissions

const ScheduleModal = React.memo(({ isOpen, onClose }: ScheduleModalProps) => {
  // Generate time slots from 10:00 AM to 6:30 PM in 30-minute intervals
  const generateTimeSlots = (): string[] => {
    const slots: string[] = [];
    for (let hour = 10; hour <= 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 18 && minute > 30) break; // Stop at 6:30 PM
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    description: ''
  });
  const [timeError, setTimeError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    } else {
      // Reset form state when modal closes
      setFormData({ name: '', email: '', phone: '', date: '', time: '', description: '' });
      setTimeError('');
      setSubmitStatus('idle');
      setErrorMessage('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const formatTimeForDisplay = (time: string): string => {
    if (!time) return '';
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const time = e.target.value;
    setFormData(prev => ({ ...prev, time }));
    setTimeError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.time) {
      setTimeError('Please select a time slot');
      return;
    }

    // Validate EmailJS configuration
    if (!EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitStatus('error');
      setErrorMessage('Email service is not configured. Please set up EmailJS Template ID and Public Key.');
      return;
    }


    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        preferred_date: formData.date,
        preferred_time: formData.time,
        description: formData.description || 'No additional description provided.',
        subject: `New Contact Request from ${formData.name}`,
        message: `Dear Team,

A potential client wants to set up a call with us. Please find the details below:

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}
- Preferred Date: ${formData.date}
- Preferred Time: ${formData.time}

Description:
${formData.description || 'No additional description provided.'}

Please contact them to schedule the call.

Best regards,
Website Contact Form`
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');

      // Reset form and close modal after a short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', date: '', time: '', description: '' });
        setTimeError('');
        setSubmitStatus('idle');
        setIsSubmitting(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send email. Please try again later or contact us directly.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-5 pt-5 pb-3 border-b border-white/10">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold text-white text-left">Contact Us</h2>
              <p className="text-xs text-gray-300 mt-1">Fill in the details and we'll get back to you.</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-5 pb-5 space-y-3 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1.5">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1.5">
                Email ID <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1.5">
                Phone number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-200 mb-1.5">
                Date <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3.5 py-2.5 pr-10 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all cursor-pointer [color-scheme:dark]"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-200 mb-1.5">
                Time <span className="text-red-400">*</span> <span className="text-xs text-gray-400 font-normal">(10 AM - 6:30 PM)</span>
              </label>
              <div className="relative">
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleTimeChange}
                  className={`w-full px-3.5 py-2.5 pr-10 bg-white/5 backdrop-blur-sm border ${timeError ? 'border-red-400/50' : 'border-white/20'} rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all cursor-pointer appearance-none`}
                >
                  <option value="" className="bg-black text-gray-400">Select time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-black text-white">
                      {formatTimeForDisplay(slot)}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {timeError && (
                <p className="mt-1 text-xs text-red-400">{timeError}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-200 mb-1.5">
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={3}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="pt-2 px-4 py-3 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg">
              <p className="text-sm text-green-300 font-medium">
                ✓ Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="pt-2 px-4 py-3 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg">
              <p className="text-sm text-red-300 font-medium">
                {errorMessage || 'Failed to send message. Please try again.'}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-4 py-2.5 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});
ScheduleModal.displayName = 'ScheduleModal';

export default function Navbar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItems, setHoveredItems] = useState<HoveredItems>({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

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
      <nav className="lg:fixed lg:top-0 lg:left-0 lg:right-0 z-50 text-white relative">
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, rgba(9, 9, 121, 1) 100%)'
          }}
        />
        <div className="relative z-10">
          <DesktopNav
            routes={navRoutes}
            activeDropdown={activeDropdown}
            hoveredItems={hoveredItems}
            onDropdownEnter={handleDropdownEnter}
            onDropdownLeave={handleDropdownLeave}
            onItemHover={handleItemHover}
            onScheduleClick={handleScheduleClick}
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
        </div>
      </nav>
      <ScheduleModal isOpen={scheduleModalOpen} onClose={handleScheduleClose} />
    </>
  );
}