export interface Organization {
  title: string;
  issuer: string;
  description: string;
  image: string;
  link?: string; // optional
}

const certifications: Organization[] = [
  {
    title: "Digital Talent Scholarship - Cloud & AI",
    issuer: "Kementerian Kominfo x Microsoft",
    description: "Completed training in Cloud Computing and Artificial Intelligence.",
    image: "/images/certificates/dts-cloud-ai.png", // pastikan file-nya ada di /public/images/certificates/
    link: "https://example.com/certificate/dts-cloud-ai"
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Coursera x Google",
    description: "Learned UX research, wireframing, prototyping, and usability testing.",
    image: "/images/certificates/google-ux.png",
    link: "https://example.com/certificate/google-ux"
  },
  {
    title: "Front-End Web Development",
    issuer: "Dicoding Indonesia",
    description: "Focused on responsive web design and modern JavaScript frameworks.",
    image: "/images/certificates/dicoding-frontend.png",
    link: "https://example.com/certificate/dicoding-frontend"
  }
];

export default certifications;
