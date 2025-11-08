// app/data/experienceData.ts
const experiences = [
  {
  id: "exp1",
  title: "Application Support – PT Jababeka Tbk",
  date: "July 2025 – December 2025",
  description:
    "Provided ERP support, business process analysis, and documentation and user experience.",
  details:
    "Analyzed workflows across five JIFAS ERP modules (Accounts Payable, Accounts Receivable, PUM, RU, Cash & Bank) to identify bottlenecks and propose improvements. Developed interactive Power BI dashboards with DAX for KPI tracking. Created detailed documentation, manuals, and reports for management and end-users. Assisted colleagues in using the ERP system, providing guidance and troubleshooting support to ensure smooth operations.",
  features: [
    "ERP workflow analysis & optimization",
    "Interactive KPI dashboards with Power BI & DAX",
    "Documentation and manuals for ERP processes",
    "User support and troubleshooting across ERP modules"
  ],
  technologies: ["ERP JIFAS", "Power BI", "DAX", "Excel", "Documentation Tools"],
  media: [
    { src: "/images/experience/jababeka-dashboard.png", alt: "Finance KPI Dashboard overview" },
    { src: "/images/experience/jababeka-erp.png", alt: "ERP workflow optimization" },
    { src: "/images/experience/jababeka-docs.png", alt: "ERP process documentation" }
  ],
  link: ""
},

{
  id: "exp2",
  title: "Social Media Officer Intern – Ambivers Foundation",
  date: "January 2025 – March 2025",
  description:
    "Planned and executed social media campaigns to increase engagement, strengthen brand presence, and support organizational communications.",
  details:
    "Managed content creation and publishing across Instagram, TikTok, and LinkedIn. Collaborated with design and copy teams to maintain brand consistency. Tracked engagement metrics and analyzed campaign performance to optimize posting strategies. Documented campaign results and prepared reports for internal review, ensuring clear communication of outcomes.",
  features: [
    "Content planning and publishing across multiple platforms",
    "Campaign performance tracking and optimization",
    "Collaboration with design and copy teams",
    "Documentation and reporting of analytics"
  ],
  technologies: ["Instagram", "TikTok", "LinkedIn", "Canva", "Excel"],
  media: [
    {
      src: "/images/experience/ambivers-post1.png",
      alt: "Example social media post"
    },
    {
      src: "/images/experience/ambivers-analytics.png",
      alt: "Engagement analytics dashboard"
    }
  ],
  link: ""
}

  
];

export default experiences;
