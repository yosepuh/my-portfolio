export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  media?: { src: string; alt: string }[];
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Digital Talent Scholarship - Introduction to Cloud and Artificial Intelligence Applications for Digital Business ",
    issuer: "Epicor",
    date: "2024",
    media: [
      { src: "/images/certifications/digitalent.jpg", alt: "Digital Talent Scholarship Certificate" },
    ],
  },
  // ...sertifikat lainnya
];

export default certifications;
