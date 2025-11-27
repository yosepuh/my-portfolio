export interface Organization {
  id: number;
  name: string;
  industry: string;
  role?: string;
  period: string;
  description: string;
  details?: string;
  website?: string;
  logo?: string;
  achievements?: string[];
  technologiesUsed?: string[];
  media?: { src: string; alt: string }[];
}

const organizations: Organization[] = [
  {
    id: 1,
    name: "PUMA IS - President University Major Association",
    industry: "Student Organization / Information Systems",
    period: "October 2024 - October 2025",
    description:
      "Led multimedia and design initiatives, overseeing digital content creation and platform management for the association.",
    details: `
Role: Head of Multimedia and Design (October 2024 - October 2025)
- Directed multimedia design projects including event posters, social media content, and internal communications.
- Managed content planning and ensured consistent branding across all platforms.
- Coordinated a small team of designers to maintain visual identity and deliver high-quality assets.

Previous Role: Member of Design (October 2023 - October 2024)
- Assisted in creating digital assets and designing social media campaigns.
- Supported senior designers in visual content creation for association events.
    `,
    website: "https://www.instagram.com/ispresuniv/",
    logo: "/organizations/ogz1.jpg",
    achievements: [
      "Led rebranding and visual consistency across platforms",
      "Produced high-quality multimedia content for multiple events",
      "Improved team workflow and design output efficiency",
      "Contributed to various promotional campaigns as Member of Design",
    ],
    technologiesUsed: ["Canva", "Figma", "Adobe Illustrator"],
    media: [
      { src: "/op/pumais/pumais1.png", alt: "pumais" },
      { src: "/op/pumais/pumais2.png", alt: "pumais" },
      { src: "/op/pumais/pumais3.png", alt: "pumais" },
      { src: "/op/pumais/pumais4.png", alt: "pumais" },
      { src: "/op/pumais/pumais5.png", alt: "pumais" },
      { src: "/op/pumais/pumais6.png", alt: "pumais" },
      { src: "/op/pumais/pumais7.png", alt: "pumais" },
      { src: "/op/pumais/pumais8.png", alt: "pumais" },
      { src: "/op/pumais/pumais9.png", alt: "pumais" },
      { src: "/op/pumais/pumais10.png", alt: "pumais" },
      { src: "/op/pumais/pumais11.png", alt: "pumais" },
    ],
  },
  
  {
    id: 2,
    name: "Orchestra - President University",
    industry: "Music / Student Organization",
    period: "September 2024 - December 2024",
    description: "Performed as violinist, contributing to university orchestra performances and events.",
    details: `
- Participated in rehearsals and university events, performing both solo and ensemble pieces.
- Assisted in coordinating musical arrangements and sectionals to improve performance quality.
    `,
    website: "https://www.instagram.com/orchestrapresuniv/",
    logo: "/images/organizations/lmga-logo.png",
    achievements: [
      "Performed in multiple university events",
      "Contributed to ensemble arrangements and rehearsals",
    ],
    technologiesUsed: ["Music Sheet Notation", "Rehearsal Planning"],
    media: [
      { src: "/op/orkes/orkes1.jpg", alt: "orkes" },
      { src: "/op/orkes/orkes2.jpg", alt: "orkes" },
    ],
  },
  {
    id: 3,
    name: "Langkah Teman Kamu - Volunteer",
    industry: "Environmental NGO",
    period: "September 2024 - December 2024",
    description: "Volunteered as a Graphic Designer supporting environmental awareness campaigns through visual communication.",
    details: `
    - Designed posters, social media content, and educational infographics for sustainability campaigns.
    - Collaborated with the campaign team to align visuals with messaging, goals, and branding guidelines.
    - Translated complex environmental topics into clear and engaging visual materials.
    `,
    website: "https://www.instagram.com/langkahtemankamu/",
    logo: "/organizations/ogz3.jpg",
    achievements: [
    "Produced cross-platform visual assets for Instagram and community events",
    "Improved clarity and engagement of environmental campaign content",
    "Strengthened visual identity consistency across Langkah Teman Kamu’s campaigns"
    ],
    technologiesUsed: ["Figma", "Canva", "Photoshop"],
    media: [
      { src: "/op/ltk/ltk1.png", alt: "ltk" },
      { src: "/op/ltk/ltk2.png", alt: "ltk" },
      { src: "/op/ltk/ltk3.png", alt: "ltk" },
      { src: "/op/ltk/ltk4.png", alt: "ltk" },
      { src: "/op/ltk/ltk5.png", alt: "ltk" },    ],
  },
  {
    id: 4,
    name: "GMS Church - Volunteer PIC Service and Production KKR Youth 1",
    industry: "Social Services / NGO",
    period: "Nov 2025 · 1 mo",
    description: "Coordinated and supervised service and production aspects for the KKR Coach Youth event.",
    details: `
- Designed and maintained a comprehensive Excel rundown and timeline for the event, coordinating 7+ teams across all sessions.
- Supervised timekeeping and event flow for a 3-hour program, achieving 100% on-time execution from briefing to closing.
- Collaborated with service, production, and communication teams to improve coordination efficiency by 30%, ensuring all segments ran according to plan.
    `,
    website: "https://www.instagram.com/gmscikarang/",
    logo: "/organizations/ogz2.jpg",
    achievements: [
      "Designed detailed event rundown and timeline for teams",
      "Ensured 100% on-time execution of all program segments",
      "Improved team coordination efficiency by 30%",
    ],
    technologiesUsed: ["Excel", "Canva"],
    media: [
      { src: "/op/gms/gms1.jpg", alt: "kkrcoach" },
      { src: "/op/gms/gms2.png", alt: "kkrcoach" },
      { src: "/op/gms/gms3.png", alt: "kkrcoach" },
    ],
  },
];

export default organizations;
