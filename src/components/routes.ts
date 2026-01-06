export interface NavRoute {
  label: string;
  path?: string | null;
  hasDropdown?: boolean;
  dropdownItems?: {
    label: string;
    path: string;
    description?: string;
    image?: string;
  }[];
}

export const navRoutes: NavRoute[] = [
  {
    label: "About us",
    path: null,
    hasDropdown: true,
    dropdownItems: [
      {
        label: "Our Mission",
        path: "/about-us/our-mission",
        description: "What drives us forward",
        image: "/Platform.webp",
      },
      {
        label: "Values",
        path: "/about-us/values",
        description: "Our core principles",
        image: "/front-left-side-47.avif",
      },
      {
        label: "Team",
        path: "/about-us/team",
        description: "Meet our experts",
        image: "/Platform.webp",
      },
      {
        label: "Contact Us",
        path: "/about-us/contact-us",
        description: "Get in touch with us",
        image: "/front-left-side-47.avif",
      },
    ],
  },
  {
    label: "Products",
    path: null,
    hasDropdown: true,
    dropdownItems: [
      {
        label: "Our Products",
        path: "/products/ourProduct",
        description: "Explore our complete product portfolio",
        image: "/Platform.webp",
      },
      {
        label: "Onboard",
        path: "/products/onBoards",
        description: "High-converting onboarding journeys",
        image: "/Platform.webp",
      },
      {
        label: "Decide",
        path: "/products/decide",
        description: "Automated case management",
        image: "/front-left-side-47.avif",
      },
      {
        label: "Lifecycle",
        path: "/products/lifeCycle",
        description: "Continuous compliance and re-KYC",
        image: "/Platform.webp",
      },
      {
        label: "Policy engine",
        path: "/products/policyEngine",
        description: "Compliance translated into code",
        image: "/front-left-side-47.avif",
      },
      {
        label: "Data platform",
        path: "/products-dataPlatform",
        description: "Third party orchestration with intelligence",
        image: "/Platform.webp",
      },
    ],
  },
  {
    label: "Solutions",
    hasDropdown:false,
    path: "/solutions",
  },
  {
    label: "Careers",
     hasDropdown:false,
    path: "/careers",
  },
];

