// app/data/organizationData.ts

export interface Organization {
  id: number;
  name: string;
  industry: string;
  role?: string; // optional, your role or contribution
  period: string; // e.g., "Jan 2024 - Dec 2024"
  description: string;
  details?: string;
  website?: string;
  logo?: string; // path to logo image
  achievements?: string[];
  technologiesUsed?: string[];
  media?: { src: string; alt: string }[]; // for carousel or showcase
}

const organizations: Organization[] = [
  {
    id: 1,
    name: "PUMA IS - President University Major Association",
    industry: "Student Organization / Information Systems",
    role: "Head Of Multimedia and Design",
    period: "2024 - 2025",
    description:
      "Developed and maintained a web-based platform for buying and selling second-hand shoes, integrating inventory management and order tracking.",
    details:
      "Built the front-end and back-end using PHP and MySQL. Focused on responsive design, seamless user authentication, and smooth admin workflows for product management. Implemented WhatsApp-based purchase flow for customer convenience.",
    website: "https://your-alfa-store-link.com",
    logo: "/images/organizations/alfa-logo.png",
    achievements: [
      "Launched platform within 3 months",
      "Integrated image upload and product filtering",
      "Streamlined admin order management",
    ],
    technologiesUsed: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    media: [
      { src: "/images/organizations/alfa1.png", alt: "Alfa Store homepage" },
      { src: "/images/organizations/alfa2.png", alt: "Admin dashboard" },
    ],
  },
  {
    id: 2,
    name: "Orchestra - President University",
    industry: "music / student organization",
    role: "violinist member",
    period: "2024",
    description:
      "Designed UI for LMGA Supermarket’s supply chain management system to optimize operational workflows.",
    details:
      "Created intuitive wireframes and mockups using Figma, ensuring clear data visualization for procurement, inventory, and sales modules. Focused on workflow clarity and process traceability.",
    website: "https://www.figma.com/",
    logo: "/images/organizations/lmga-logo.png",
    achievements: ["Redesigned supply chain dashboards", "Improved usability for inventory tracking"],
    technologiesUsed: ["Figma", "Miro"],
    media: [
      { src: "/images/organizations/lmga1.png", alt: "LMGA homepage UI" },
      { src: "/images/organizations/lmga2.png", alt: "Inventory management interface" },
    ],
  },
  {
    id: 3,
    name: "Langkah Teman Kamu - Volunteer",
    industry: "environmental NGO",
    role: "Graphic Designer Volunteer",
    period: "2025",
    description:
      "Developed a cross-platform demo mobile app for a tea-selling business, implementing UI designed in Figma.",
    details:
      "Translated Figma prototypes into a functional Flutter app using Dart. Focused on responsive layouts, product listing, and order simulation. Demonstrated full-stack approach from design to implementation.",
    website: "https://instagram.com/jophienne",
    logo: "/images/organizations/fromheart-logo.png",
    achievements: [
      "Implemented product listing and ordering flow",
      "Responsive mobile design",
      "Showcased demo on GitHub and social media",
    ],
    technologiesUsed: ["Flutter", "Dart", "Figma", "GitHub"],
    media: [
      { src: "/images/organizations/fromheart1.png", alt: "App home screen" },
      { src: "/images/organizations/fromheart2.png", alt: "Product listing screen" },
    ],
  },

];

export default organizations;
