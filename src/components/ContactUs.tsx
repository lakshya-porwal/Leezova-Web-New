import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

export interface ScheduleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EMAILJS_SERVICE_ID = 'service_t5pep46'; // Your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_ygfnv6c'; // Replace with your EmailJS Template ID (get from Email Templates section)
const EMAILJS_PUBLIC_KEY = 'XmJ-Y5bkY3VCVlBYh'; // Replace with your EmailJS Public Key (get from Account > API Keys)
const RECIPIENT_EMAIL = 'lakshya.porwal@leezova.com'; // Email address to receive submissions

const CustomTimeDropdown = ({ value, onChange, slots, timeError }: { value: string; onChange: (val: string) => void; slots: string[]; timeError: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const formatTimeForDisplay = (time: string): string => {
        if (!time) return '';
        const [hours, minutes] = time.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
        return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-3.5 py-2.5 pr-10 bg-white/5 backdrop-blur-sm border ${timeError ? 'border-red-400/50' : 'border-white/20'} rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all cursor-pointer text-left flex items-center justify-between`}
            >
                <span className="text-xs sm:text-sm lg:text-base">
                    {value ? formatTimeForDisplay(value) : 'Select Time'}
                    </span>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#1a1f2e] border border-white/20 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                    <div className="p-2 space-y-1">
                        {slots.map((slot) => (
                            <button
                                key={slot}
                                type="button"
                                onClick={() => {
                                    onChange(slot);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-3 py-2 text-sm rounded-md transition-colors text-left ${value === slot
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-300 hover:bg-white/10'
                                    }`}
                            >
                                {formatTimeForDisplay(slot)}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export const ScheduleModal = React.memo(({ isOpen, onClose }: ScheduleModalProps) => {
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


    const handleTimeChange = (time: string) => {
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
                className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative px-5 pt-5 pb-3 border-b border-white/10 flex-shrink-0">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-white text-left">Start a Project</h2>
                            <p className="text-xs text-gray-300 mt-1">Tell us about your idea-we'll take it from here!</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-5 pb-5 space-y-3 text-left overflow-y-auto flex-1 hide-scrollbar">
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
                                Time <span className="text-red-400">*</span> <span className="md:text-xs text-[8px] text-gray-400 font-normal">(10 AM - 6:30 PM)</span>
                            </label>
                            <CustomTimeDropdown
                                value={formData.time}
                                onChange={handleTimeChange}
                                slots={timeSlots}
                                timeError={timeError}
                            />
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
