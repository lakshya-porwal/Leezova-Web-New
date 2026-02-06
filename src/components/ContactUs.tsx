import React, { useState, useEffect, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";

export interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as
  | string
  | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
  | string
  | undefined;
const RECIPIENT_EMAIL = import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL as
  | string
  | undefined;

type ScheduleFormData = {
  name: string;
  email: string;
  phone: string;
  description: string;
};

const INITIAL_FORM_DATA: ScheduleFormData = {
  name: "",
  email: "",
  phone: "",
  description: "",
};

export const ScheduleModal = React.memo(
  ({ isOpen, onClose }: ScheduleModalProps) => {
    const [formData, setFormData] =
      useState<ScheduleFormData>(INITIAL_FORM_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
      "idle" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const isEmailConfigured = Boolean(
      EMAILJS_SERVICE_ID &&
        EMAILJS_TEMPLATE_ID &&
        EMAILJS_PUBLIC_KEY &&
        RECIPIENT_EMAIL
    );

    // Reset form and close modal
    const handleClose = useCallback(() => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setFormData(INITIAL_FORM_DATA);
      setSubmitStatus("idle");
      setErrorMessage("");
      setIsSubmitting(false);
      onClose();
    }, [onClose]);

    useEffect(() => {
      if (isOpen) {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = originalStyle;
        };
      }
    }, [isOpen]);

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isOpen) {
          handleClose();
        }
      };

      if (isOpen) {
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
      }
    }, [isOpen, handleClose]);

    useEffect(() => {
      return () => {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
        }
      };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Validate EmailJS configuration
      if (!isEmailConfigured) {
        setSubmitStatus("error");
        setErrorMessage(
          "Email service is not configured. Please complete the EmailJS setup."
        );
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus("idle");
      setErrorMessage("");

      try {
        const trimmedForm = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          description: formData.description.trim(),
        };

        // Prepare template parameters for EmailJS
        const templateParams = {
          to_email: RECIPIENT_EMAIL ?? "",
          from_name: trimmedForm.name,
          from_email: trimmedForm.email,
          phone: trimmedForm.phone || "Not provided",
          description:
            trimmedForm.description || "No additional description provided.",
          subject: `New Contact Request from ${trimmedForm.name}`,
          message: `Dear Team,

A potential client wants to set up a call with us. Please find the details below:

Contact Details:
- Name: ${trimmedForm.name}
- Email: ${trimmedForm.email}
- Phone: ${trimmedForm.phone || "Not provided"}

Description:
${trimmedForm.description || "No additional description provided."}

Please contact them to schedule the call.

Best regards,
Website Contact Form`,
        };

        // Send email using EmailJS
        await emailjs.send(
          EMAILJS_SERVICE_ID as string,
          EMAILJS_TEMPLATE_ID as string,
          templateParams,
          EMAILJS_PUBLIC_KEY as string
        );

        setSubmitStatus("success");
        setIsSubmitting(false);

        // Reset form and close modal after a short delay
        closeTimeoutRef.current = setTimeout(() => {
          handleClose();
        }, 2000);
      } catch (error) {
        console.error("Email sending failed:", error);
        setSubmitStatus("error");
        setErrorMessage(
          "Failed to send email. Please try again later or contact us directly."
        );
        setIsSubmitting(false);
      }
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
      if (submitStatus !== "idle") {
        setSubmitStatus("idle");
        setErrorMessage("");
      }
    };

    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={handleClose}
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
                <h2 className="text-lg font-bold text-white text-left">
                  Start Our Journey Together
                </h2>
                <p className="text-xs text-gray-300 mt-1">
                  Tell us about your vision-let's build it together!
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="px-5 pb-5 space-y-3 text-left overflow-y-auto flex-1 hide-scrollbar"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200 mb-1.5"
              >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-1.5"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-200 mb-1.5"
                >
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

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-200 mb-1.5"
              >
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

            {!isEmailConfigured && (
              <div className="pt-2 px-4 py-3 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-lg">
                <p className="text-sm text-amber-200 font-medium">
                  Email service is not configured. Please complete the EmailJS
                  setup before accepting submissions.
                </p>
              </div>
            )}

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="pt-2 px-4 py-3 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg">
                <p className="text-sm text-green-300 font-medium">
                  ✓ Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="pt-2 px-4 py-3 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg">
                <p className="text-sm text-red-300 font-medium">
                  {errorMessage || "Failed to send message. Please try again."}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1 px-4 py-2.5 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  submitStatus === "success" ||
                  !isEmailConfigured
                }
                className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
);
ScheduleModal.displayName = "ScheduleModal";
