// src/data/experiences.ts

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  image1: string; 
  image2: string; 
  image3: string; // [+] Slot foto ke-3 ditambahkan
}

export const experiencesData: Experience[] = [
  {
    id: 1,
    role: "Data Analyst & IT Support",
    company: "Institut Pemerintahan Dalam Negeri (IPDN)",
    period: "Jul 2025 - Des 2025",
    description: "Spearheaded data analytics initiatives and managed critical IT infrastructure for state protocols, driving operational efficiency through data-driven insights.",
    highlights: [
      "Developed a sentiment analysis dashboard using IndoBERT (>90% accuracy) to analyze 10K+ cross-platform comments.",
      "Cleaned and processed operational data via Excel PivotTables, boosting reporting efficiency by 30%.",
      "Managed IT infrastructure for state events, ensuring zero downtime and seamless national protocols."
    ],
    image1: "/exp-1-ipdn.jpg", 
    image2: "/exp-2-ipdn.jpg",
    image3: "/exp-3-ipdn.jpg", // <-- Jangan lupa siapkan fotonya di folder public/
  },
  {
    id: 2,
    role: "Machine Learning Trainee",
    company: "Dicoding x DBS Foundation",
    period: "Jan 2025 - Jun 2025",
    description: "Intensive training program focusing on end-to-end machine learning application development and large-scale dataset analysis.",
    highlights: [
      "Achieved a 96/100 final project score by developing an end-to-end ML application.",
      "Built predictive models (Classification, NLP, Computer Vision) with 85%+ accuracy.",
      "Analyzed massive datasets using Python & SQL to generate actionable insights in collaborative projects."
    ],
    image1: "/exp-dicoding-1.jpg",
    image2: "/exp-dicoding-2.jpg",
    image3: "/exp-dicoding-3.jpg",
  },
  {
    id: 3,
    role: "Digital Marketing Intern (MSIB)",
    company: "APINDO",
    period: "Sep 2024 - Des 2024",
    description: "Led digital transformation for MSMEs through e-commerce integration, automated workflows, and dynamic operational templates.",
    highlights: [
      "Launched e-commerce storefronts yielding first sales, 200+ new followers, and thousands of organic impressions.",
      "Trained MSMEs in live-streaming, WhatsApp Business automation, and integrated QR catalogs.",
      "Optimized operations with dynamic Excel templates, contributing to the 3rd Place Best Group Award."
    ],
    image1: "/exp-1-msib.jpg",
    image2: "/exp-2-msib.jpg",
    image3: "/exp-3-msib.jpg",
  },
  {
    id: 4,
    role: "Front-End Developer",
    company: "Border Crossing Space Burneh (BCSB)",
    period: "Project Based",
    description: "Architected modern web interfaces and optimized user experience using cutting-edge frontend technologies.",
    highlights: [
      "Built interactive UI components and grid layouts using Next.js, TypeScript, and Tailwind CSS.",
      "Developed dynamic navigation and external routing to optimize user experience.",
      "Managed version control via GitHub (100+ commits) supporting continuous feature updates and API integration."
    ],
    image1: "/exp-bcsb-1.jpg",
    image2: "/exp-bcsb-2.jpg",
    image3: "/exp-bcsb-3.jpg",
  }
];