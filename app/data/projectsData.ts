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
  {
    id: 1,
    title: "Website Alfa Store (Second-Hand Shoes Marketplace)",
    date: "2024",
    description:
      "Web-based marketplace for buying and selling second-hand shoes, built with PHP and MySQL for smooth transactions and easy admin management.",
    details:
      "Developed a web-based marketplace for second-hand shoes using PHP, MySQL, and CSS. The platform enables customers to browse, purchase, and review products, while admins manage inventory and orders efficiently. Focused on building a structured backend workflow and intuitive user interface to ensure seamless transactions for both buyers and sellers.",
    detailPath: "/projects/1",
    externalLink: "https://your-alfa-store-link.com",
    features: [
      "User authentication (login & register)",
      "Product listing with images and filters",
      "Purchase via WhatsApp",
      "Admin dashboard for inventory management",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    media: [
      {
        src: "/images/projects/alfa1.png",
        alt: "Homepage of Alfa Store",
      },
      {
        src: "/images/projects/alfa2.png",
        alt: "Admin product management panel",
      },
      {
        src: "/images/projects/alfa3.png",
        alt: "Product listing and WhatsApp purchase button",
      },
    ],
  },
  {
    id: 2,
    title: "LMGA Supermarket — Supply Chain Management UI",
    date: "2024",
    description:
      "Designed an intuitive UI for LMGA Supermarket’s supply chain management system, focusing on product flow and operational efficiency.",
    details:
      "Created the user interface for LMGA Supermarket’s supply chain management system, optimizing the visualization of procurement, inventory, and sales processes. Focused on clear navigation, consistent layout, and functional data presentation to support production and logistic workflows. ",
    detailPath: "/projects/2",
    externalLink: "https://www.figma.com/",
    features: [
      "UI wireframes for procurement, inventory, and sales modules",
      "Streamlined layout for data visibility",
      "Focus on supply chain traceability and process flow",
    ],
    technologies: ["Figma", "Miro"],
    media: [
      {
        src: "/images/projects/lmga1.png",
        alt: "LMGA redesigned homepage layout",
      },
      {
        src: "/images/projects/lmga2.png",
        alt: "Product detail interface",
      },
    ],
  },
  {
    id: 3,
    title: "Business Process Analysis  — Online Grocery System",
    date: "2025",
    description:
      "Developed business process flowcharts for an online grocery system to illustrate system interactions and optimize workflows.",
    details:
      "Created detailed business process and use case diagrams using Rational Rose for an online grocery system. The flowcharts map out customer, admin, and supplier interactions to identify process bottlenecks and improve operational efficiency. This project demonstrates strong analytical and process design capabilities aligned with business analysis practices.",
    detailPath: "/projects/3",
    externalLink: "https://epicor.com/",
    features: [
      "Use case and activity diagrams",
      "Process optimization analysis",
      "System interaction mapping",
    ],
    technologies: ["Rational Rose", "Google Docs"],
    media: [
      {
        src: "/images/projects/epicor1.png",
        alt: "Epicor MTO process diagram",
      },
      {
        src: "/images/projects/epicor2.png",
        alt: "Production order tracking screen",
      },
    ],
  },
  {
    id: 4,
    title: "Epicor ERP Bootcamp",
    date: "2025",
    description:
      "Hands-on ERP training covering five key modules: production, sales, procurement, inventory, and finance.",
    details:
      "Participated in an intensive Epicor ERP bootcamp, focusing on five modules — production, sales, procurement, inventory, and finance. Gained practical experience simulating real-world business processes and improving workflow efficiency through ERP system integration. Strengthened understanding of enterprise resource planning and cross-functional data management.",
    detailPath: "/projects/4",
    externalLink: "https://researchgate.net/",
    features: [
      "Real-time ERP simulation",
      "End-to-end business process mapping",
      "Data flow analysis across departments",
    ],
    technologies: ["ERP EPICOR"],
    media: [
      {
        src: "/images/projects/sap1.png",
        alt: "SLR methodology diagram",
      },
      {
        src: "/images/projects/sap2.png",
        alt: "Research results visualization",
      },
    ],
  },
  {
    id: 5,
    title: "FromHeart — Mobile App Demo & UI Design",
    date: "2025",
    description:
      "Developed a tea-selling demo app using Flutter and Dart, featuring an intuitive UI originally designed in Figma.",
    details:
      " Created a cross-platform demo application for a tea-selling business, starting from UI prototyping in Figma to full implementation in Flutter using Dart. Focused on delivering a clean, responsive interface with smooth navigation and order management flow. The project demonstrates both design thinking and technical execution — bridging business logic, user experience, and system functionality.",
    detailPath: "/projects/5",
    externalLink: "https://instagram.com/jophienne",
    features: [
      "UI/UX design translated from Figma to Flutter",
      "Product listing and order simulation",
      "Responsive layout for mobile devices",
      "Hosted and showcased via GitHub",
    ],
    technologies: ["Flutter", "Dart", "VsCode", "Figma", "GitHub"],
    media: [
      {
        src: "/images/projects/jophienne1.png",
        alt: "Poster design preview",
      },
      {
        src: "/images/projects/jophienne2.png",
        alt: "Instagram layout of creative assets",
      },
    ],
  },

  {
  id: 6,
  title: "Data Analytics Finance Dashboard - PT Jababeka Tbk",
  date: "2025",
  description:
    "Developed a finance analytics dashboard using ERP data to provide actionable insights across key financial modules.",
  details:
    "Collected and processed financial data from the ERP system JIFAS, covering five key modules: Accounts Payable, Accounts Receivable, PUM, RU, and Cash & Bank. Designed and implemented an interactive Power BI dashboard using DAX to visualize trends, track KPIs, and generate reports for decision-making. This project strengthened skills in data modeling, reporting, and business analytics while applying ERP knowledge in a real-world corporate setting.",
  detailPath: "/projects/6",
  externalLink: "https://powerbi.microsoft.com/", // Optional: link to dashboard or Power BI profile if available
  features: [
    "Interactive dashboards with KPIs and financial metrics",
    "Data integration from ERP modules (AP, AR, PUM, RU, Cash & Bank)",
    "DAX calculations and data modeling for reporting",
    "Automated reporting for management insights"
  ],
  technologies: ["Power BI", "DAX", "Excel", "ERP JIFAS"],
  media: [
    {
      src: "/images/projects/jababeka1.png",
      alt: "Finance dashboard overview"
    },
    {
      src: "/images/projects/jababeka2.png",
      alt: "Module-specific KPI visualization"
    },
    {
      src: "/images/projects/jababeka3.png",
      alt: "Interactive Power BI charts and tables"
    }
  ],
},
];

export default projects;
