// app/data/experienceData.ts
const experiences = [
  {
  id: "exp1",
  title: "Application Support – PT Jababeka Tbk",
  date: "August 2025 – December 2025",
  description:
    "Supported financial ERP operations, analyzed business processes, handled issue resolution, and contributed to system development initiatives across internal teams and vendors.",

  details:
    "Supported users in JIFAS for troubleshooting, data validation, and workflow guidance. Collaborated with QA to reproduce and document system bugs, and created user guides plus module-based documentation. Analyzed five key ERP modules (AP, AR, PUM, RU, Cash & Bank) and built financial dashboards in Power BI using DAX. Assisted in developing a Vendor Checker tool using Docker, PostgreSQL, and Excel, and documented requirements for a new Vendor System after vendor discussions. Also developed an Odoo Booking Engine add-on with Python and PostgreSQL, integrated for automated invoicing and payments.",

  features: [
    "User support & issue troubleshooting for JIFAS ERP",
    "Module analysis across AP, AR, PUM, RU, and Cash & Bank",
    "Bug analysis & coordination with QA",
    "Financial dashboard development with Power BI & DAX",
    "Technical documentation, SOPs, and user guides",
    "Vendor data validation tool using Docker & PostgreSQL",
    "Odoo add-on development (Booking Engine module)"
  ],

  technologies: [
    "ERP JIFAS",
    "Power BI",
    "DAX",
    "Excel",
    "Docker",
    "PostgreSQL",
    "Odoo",
    "Python",
    "Jira",
    "Documentation Tools"
  ],

  reportLink:
    "https://www.canva.com/design/DAG3_MjqeuE/D_rxi2-W3lNP4x9buFf2zA/edit?utm_content=DAG3_MjqeuE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",

  subProjects: [
    {
  id: "jaba-odoo-booking",
  title: "Odoo Booking Engine Add-on",
  description:
    "Custom Odoo module developed to streamline internal booking operations. The project began with requirement research and system study, followed by iterative development, testing, and discussion with mentors to ensure accurate workflow alignment before final reporting and deployment preparation.",

  highlights: [
    "Conducted initial research on booking requirements, user roles, workflow gaps, and integration points",
    "Collaborated with mentor for validation on logic, data flow, and financial integration",
    "Developed custom module using Python, PostgreSQL, and the Odoo framework",
    "Implemented automated invoice and payment generation connected to financial modules",
    "Designed booking flow, role-based permissions, and validation rules to ensure accurate processing",
    "Prepared documentation and reports summarizing process analysis, module behavior, and testing results"
  ],

  media: [
        { src: "/projects/odoo/odoo1.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/odoo/odoo2.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/odoo/odoo3.png", alt: "JIFAS ERP User Support & Module Analysis" },    
        { src: "/projects/odoo/odoo4.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/odoo/odoo5.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/odoo/odoo6.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/odoo/odoo7.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/odoo/odoo8.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/odoo/odoo9.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/odoo/odoo10.png", alt: "JIFAS ERP User Support & Module Analysis" },
  ]
},

    {
      id: "jaba-finance-dashboard",
      title: "Finance KPI Dashboard (Power BI)",
      description:
        "Centralized financial dashboard using JIFAS ERP data to support monthly financial analysis and management decision-making.",
      highlights: [
        "KPIs for AP, AR, PUM, RU, and Cash & Bank",
        "DAX-based dynamic filtering, drill-downs, and trend insights",
        "Automated monthly snapshot reports"
      ],
      media: [
        { src: "projects/powerbi/pb1.jpg", alt: "Finance dashboard overview" },
        { src: "projects/powerbi/pb2.jpg", alt: "Module-specific KPI visualization" },
        { src: "projects/powerbi/pb3.jpg", alt: "Interactive Power BI charts and tables" },
        { src: "projects/powerbi/pb4.jpg", alt: "Finance KPI Dashboard overview" },
        { src: "projects/powerbi/pb5.jpg", alt: "Finance KPI Dashboard overview" }
      ]
    },
    {
      id: "jaba-jifas-support",
      title: "JIFAS ERP User Support & Module Analysis",
      description:
        "Day-to-day operational support for JIFAS users, ensuring accurate transactions, smooth workflows, and faster issue resolution.",
      highlights: [
        "Troubleshooting functional errors & process issues",
        "Validating and correcting user-entered financial data",
        "Proposing small workflow improvements for better efficiency"
      ],
      media: [
        { src: "/projects/jifas/jifas1.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/jifas/jifas2.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/jifas/jifas3.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/jifas/jifas4.png", alt: "JIFAS ERP User Support & Module Analysis" },
        { src: "/projects/jifas/jifas5.png", alt: "JIFAS ERP User Support & Module Analysis" },
      ]
    },
    {
      id: "jaba-vendor-checker",
      title: "Vendor Data Checker Tool",
      description:
        "Internal tool used to validate vendor master data, detect duplicates, and ensure data completeness before procurement use.",
      highlights: [
        "Built using Docker, PostgreSQL, and Excel",
        "Duplicate and incomplete vendor record detection",
        "Improved vendor data accuracy for AP workflow"
      ],
      media: [
        { src: "/projects/vendor/vendor1.png", alt: "Vendor checker" },
        { src: "/projects/vendor/vendor2.png", alt: "Vendor checker" },
        { src: "/projects/vendor/vendor3.png", alt: "Vendor checker" },
        { src: "/projects/vendor/vendor4.png", alt: "Vendor checker" },
        { src: "/projects/vendor/vendor5.png", alt: "Vendor checker" },
      ]
    },
    {
      id: "jaba-docs",
      title: "Documentation & Requirement Mapping",
      description:
        "Created structured documentation for JIFAS modules and documented the requirement gathering process for the new Vendor System with external vendors.",
      highlights: [
        "SOPs, user guides, and process documentation",
        "Requirement gathering using Docs & Jira",
        "Meeting facilitation and technical note-taking"
      ],
      media: [
        { src: "/projects/report/report1.png", alt: "documentation" },
        { src: "/projects/report/report2.png", alt: "documentation" },
        { src: "/projects/report/report3.png", alt: "documentation" },
        { src: "/projects/report/report4.png", alt: "documentation" },
        { src: "/projects/report/report5.png", alt: "documentation" },
        { src: "/projects/report/report5.png", alt: "documentation" },
      ]
    },
    {
  id: "jaba-vendor-qa",
  title: "Vendor System QA & Test Case Execution",
  description:
    "Quality assurance and functional testing for the in-progress Vendor System developed by the internal and external developer teams. Focused on validating system logic, detecting issues, and ensuring workflow accuracy before deployment.",
  highlights: [
    "Executed 500+ test cases within one week (±100 TC per day)",
    "Validated end-to-end vendor workflows and system logic",
    "Identified functional bugs, UI inconsistencies, and data validation issues",
    "Logged detailed bug reports and test notes in Jira",
    "Recorded screen sessions of critical bugs and stored them in Google Drive for developer debugging",
    "Collaborated with developers to retest fixes and verify resolutions"
  ],
  media: [
    { src: "/experiences/jababeka/qa/qa1.png", alt: "Vendor System QA testing" },
    { src: "/experiences/jababeka/qa/qa2.png", alt: "Vendor System QA testing" },
    { src: "/experiences/jababeka/qa/qa3.png", alt: "Vendor System QA testing" },
    { src: "/experiences/jababeka/qa/qa4.png", alt: "Vendor System QA testing" },
    { src: "/experiences/jababeka/qa/qa5.png", alt: "Vendor System QA testing" },
    { src: "/experiences/jababeka/qa/qa6.png", alt: "Vendor System QA testing" },

  ]
}
  ]
},


  {
    id: "exp2",
    title: "Social Media Officer Intern (Remote) – Ambivers Foundation",
    date: "April 2025 - September 2025",
    description:
      "Planned and executed social media campaigns to increase engagement & support organizational communication.",
    details:
      "Managed content creation and publishing across Instagram, TikTok, and LinkedIn. Collaborated with design and copy teams to maintain brand consistency. Tracked engagement metrics and analyzed campaign performance to optimize posting strategies. Documented campaign results and prepared reports for internal review, ensuring clear communication of outcomes.",
    features: [
      "Content planning and publishing across multiple platforms",
      "Campaign performance tracking and optimization",
      "Collaboration with design and content writer teams",
      "Documentation and reporting of analytics"
    ],
    technologies: ["Instagram", "TikTok", "LinkedIn", "Canva", "Excel"],
    media: [
      {
        src: "/experiences/ambivers/amb1.png",
        alt: "Example scheduling content calendar"
      },
      {
        src: "/experiences/ambivers/amb2.png",
        alt: "request design workplan"
      },
      {
        src: "/experiences/ambivers/amb3.png",
        alt: "scheduling post in platform"
      },
       {
        src: "/experiences/ambivers/amb4.png",
        alt: "handling ideas for content"
      },
       {
        src: "/experiences/ambivers/amb5.png",
        alt: "handling revisions from design team"
      },
    ],
    link: ""
  }
];

export default experiences;
