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
    path: "/aboutUs/AboutUs.tsx",
    hasDropdown: false,
    // dropdownItems: [
    //   {
    //     label: "Our Mission",
    //     path: "/about-us/our-mission",
    //     description: "What drives us forward",
    //     image: "/ourMissionSs.png",
    //   },
    //   {
    //     label: "Values",
    //     path: "/about-us/values",
    //     description: "Our core principles",
    //     image: "/ourValuesSs.png",
    //   },
    //   {
    //     label: "Team",
    //     path: "/about-us/team",
    //     description: "Our Culture",
    //     image: "/teamSs.png",
    //   },
    // ],
  },
  {
    label: "Products",
    path:"/products/Erp",
    hasDropdown: false,
    // dropdownItems: [
      
    //   {
    //     label: "Erp",
    //     path: "/products/Erp",
    //     description: "Continuous compliance and re-KYC",
    //     image: "/Platform.webp",
    //   },
     
    // ],
  },
  {
    label: "Trusted By",
    path:  "/trustedBy/RockBottom.tsx",
    hasDropdown: false,
    // dropdownItems: [
      
    //   {
    //     label: "Rock Bottom ",
    //     path: "/trustedBy/RockBottom.tsx",
    //     description: "Experience luxury amidst nature's paradise",
    //     image: "/public/rockBottomSs.png",
    //   },
     
    // ],
  },
  {
    label: "Solutions",
    hasDropdown:false,
    path: "/solutions",
  },
  // {
  //   label: "Careers",
  //    hasDropdown:false,
  //   path: "/careers",
  // },
];

