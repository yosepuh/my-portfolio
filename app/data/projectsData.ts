// app/data/projectsData.ts
export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  details?: string;
  detailPath: string; // internal route ke halaman detail
  externalLink?: string; // optional link eksternal
  features?: string[];
  technologies?: string[];
  media?: { src: string; alt: string }[]; // now structured for carousel
}

const projects: Project[] = [
  // existing projects (1..6) unchanged...
  {
    id: 1,
    title: "Website Alfa Store (Second-Hand Shoes Marketplace)",
    date: "May 2024 - July 2024",
    description:
      "Web-based marketplace for buying and selling second-hand shoes, built with PHP and MySQL for smooth transactions.",
    details:
      "Developed a web-based marketplace for second-hand shoes using PHP, MySQL, and CSS. The platform enables customers to browse, purchase, and review products, while admins manage inventory and orders efficiently. Focused on building a structured backend workflow and intuitive user interface to ensure seamless transactions for both buyers and sellers.",
    detailPath: "/projects/1",
    features: [
      "User authentication (login & register)",
      "Product listing with images and filters",
      "Purchase via WhatsApp",
      "Admin dashboard for inventory management",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    media: [
      { src: "/projects/aw/aw1.png", alt: "Homepage of Alfa Store" },
      { src: "/projects/aw/aw2.png", alt: "Homepage of Alfa Store" },
      { src: "/projects/aw/aw3.png", alt: "Registration and login page" },
      { src: "/projects/aw/aw4.png", alt: "Product listing and WhatsApp purchase button" },
      { src: "/projects/aw/aw5.png", alt: "Add new product page for admin" },
      { src: "/projects/aw/aw6.png", alt: "delete product confirmation for admin" },
      { src: "/projects/aw/aw7.png", alt: "admin decision dashboard" },
      { src: "/projects/aw/aw8.png", alt: "thank you page after purchase" }
    ]
  },
  // ... other existing project entries (2..6) remain as you had them
  {
    id: 2,
    title: "LMGA Supermarket — Supply Chain Management UI",
    date: "January 2024 - April 2024",
    description:
      "Designed an intuitive UI for LMGA Supermarket’s SCM system, focusing on product flow and operational efficiency.",
    details:
      "Conducted analysis and development of the supply chain management flow for LMGA Supermarket, covering procurement, inventory, and sales processes. I specifically handled the supplier division, including mapping supplier workflows, defining data structures, and organizing end-to-end interaction flows between suppliers and internal departments. The work focused on ensuring clarity, efficiency, and traceability throughout operational processes.",
    detailPath: "/projects/2",
    externalLink: "https://www.figma.com/proto/iBKGqrGibLMj2AEiCI08Dv/figmaproject?node-id=1-25537&t=fSFMg4ovvX51Nih6-1",
    features: [
      "UI wireframes for procurement, inventory, and sales modules",
      "Streamlined layout for data visibility",
      "Focus on supply chain traceability and process flow",
    ],
    technologies: ["Figma", "Miro"],
    media: [
      { src: "/projects/figma/figma1.png", alt: "LMGA login page" },
      { src: "/projects/figma/figma2.png", alt: "analytics dashboard for supply chain overview" },
      { src: "/projects/figma/figma3.png", alt: "product inventory management interface" },
      { src: "/projects/figma/figma4.png", alt: "product addition interface" }
    ]
  },
  {
    id: 3,
    title: "Business Process Analysis  — Online Grocery System",
    date: "Sep 2024 - Dec 2024",
    description:
      "Developed business process flowcharts for an online grocery system to illustrate system interactions and optimize workflows.",
    details:
      "Created detailed business process and use case diagrams using Rational Rose for an online grocery system. The flowcharts map out customer, admin, and supplier interactions to identify process bottlenecks and improve operational efficiency. This project demonstrates strong analytical and process design capabilities aligned with business analysis practices.",
    detailPath: "/projects/3",
    externalLink: "https://drive.google.com/drive/folders/1IsyvN4Ml-5B5dSYYyaIQbFxCpSiJIfpX?usp=drive_link",
    features: [
      "Use case and activity diagrams",
      "Process optimization analysis",
      "System interaction mapping"
    ],
    technologies: ["Rational Rose", "Google Docs"],
    media: [
      { src: "/projects/bad/bad1.jpg", alt: "Flow" },
      { src: "/projects/bad/bad2.jpg", alt: "Flow" },
      { src: "/projects/bad/bad3.jpg", alt: "Flow" },
      { src: "/projects/bad/bad4.jpg", alt: "Flow" },
      { src: "/projects/bad/bad5.jpg", alt: "Flow" },
      { src: "/projects/bad/bad6.jpg", alt: "Flow" },

    ]
  },
  {
  id: 4,
  title: "Epicor ERP Bootcamp",
  date: "Sep 2024 - July 2025",
  description:
    "Hands-on ERP training covering five key modules: production, sales, procurement, inventory, and finance.",
  details: `
Completed a full Make to Order workflow—from part creation, revision setup, BOO/BOM structure, job generation, material issue, labor entry, shipment, invoicing, to payment. A complete execution of an end-to-end production and financial cycle.
  `,
  detailPath: "/projects/4",
  externalLink: "https://docs.google.com/document/d/1CZD-qepdsGe82LdiWedTHGbAjTik5KSUTSZxgw1mJSo/edit?usp=sharing",
  features: [
    "Real-time ERP simulation",
    "End-to-end business process mapping",
    "Data flow analysis across departments"
  ],
  technologies: ["ERP EPICOR"],
  media: [
    { src: "/projects/erp/erp1.png", alt: "ERP Epicor" },
    { src: "/projects/erp/erp2.png", alt: "ERP Epicor" },
    { src: "/projects/erp/erp3.png", alt: "ERP Epicor" },
    { src: "/projects/erp/erp4.png", alt: "ERP Epicor" },
    { src: "/projects/erp/erp5.png", alt: "ERP Epicor" },
    { src: "/projects/erp/erp6.png", alt: "ERP Epicor" },


  ]
},

  {
    id: 5,
    title: "FromHeart — Mobile App Demo & UI Design",
    date: "September 2024 - December 2024",
    description:
      "Developed a tea-selling demo app using Flutter and Dart, featuring an intuitive UI originally designed in Figma.",
    details:
      " Created a cross-platform demo application for a tea-selling business, starting from UI prototyping in Figma to full implementation in Flutter using Dart. Focused on delivering a clean, responsive interface with smooth navigation and order management flow. The project demonstrates both design thinking and technical execution — bridging business logic, user experience, and system functionality.",
    detailPath: "/projects/5",
    externalLink: "https://github.com/rinchigo/MP-FromHeart",
    features: [
      "UI/UX design translated from Figma to Flutter",
      "Product listing and order simulation",
      "Responsive layout for mobile devices",
      "Hosted and showcased via GitHub"
    ],
    technologies: ["Flutter", "Dart", "VsCode", "Figma", "GitHub"],
    media: [
      { src: "/projects/fh/fh1.png", alt: "FH App" },
      { src: "/projects/fh/fh2.png", alt: "FH App" },
      { src: "/projects/fh/fh3.png", alt: "FH App" },
      { src: "/projects/fh/fh4.png", alt: "FH App" },
      { src: "/projects/fh/fh5.png", alt: "FH App" },
      { src: "/projects/fh/fh6.png", alt: "FH App" },
      { src: "/projects/fh/fh7.png", alt: "FH App" },
      { src: "/projects/fh/fh8.png", alt: "FH App" },

    ]
  },

  // NEW: single Project card that points to Experience page (teaser for PT Jababeka)
  {
    id: 6,
    title: "PT Jababeka — Internship Projects (Selected Highlights)",
    date: "August 2025 – December 2025",
    description:
      "Selected highlights from my internship at PT Jababeka covering Odoo prototyping, Finance dashboards (Power BI), vendor validation tooling, and ERP support (JIFAS). Click Learn More to view full experience.",
    detailPath: "/experience/exp1", // <-- this points to the Experience detail page (exp1)
    
  }
];

export default projects;
