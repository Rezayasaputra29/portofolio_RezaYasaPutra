// src/data/experiences.ts

export interface Experience {
  id: number;
  role: { en: string; id: string };
  company: string;
  period: { en: string; id: string };
  description: { en: string; id: string };
  highlights: { en: string[]; id: string[] };
  image1: string; 
  image2: string; 
  image3: string;
  deployLink?: string;
}

export const experiencesData: Experience[] = [
  {
    id: 1,
    role: { 
      en: "Data Analyst & IT Support", 
      id: "Data Analyst & IT Support" 
    },
    company: "Institut Pemerintahan Dalam Negeri (IPDN)",
    period: { 
      en: "Jul 2025 - Dec 2025", 
      id: "Jul 2025 - Des 2025" 
    },
    description: { 
      en: "Spearheaded data analytics initiatives and managed critical IT infrastructure for state protocols, driving operational efficiency through data-driven insights.", 
      id: "Memimpin inisiatif analitik data dan mengelola infrastruktur TI kritis untuk keprotokolan negara, mendorong efisiensi operasional melalui wawasan berbasis data." 
    },
    highlights: {
      en: [
        "Developed a sentiment analysis dashboard using IndoBERT (>90% accuracy) to analyze 10K+ cross-platform comments.",
        "Cleaned and processed operational data via Excel PivotTables, boosting reporting efficiency by 30%.",
        "Managed IT infrastructure for state events, ensuring zero downtime and seamless national protocols."
      ],
      id: [
        "Mengembangkan dasbor analisis sentimen menggunakan IndoBERT (akurasi >90%) untuk menganalisis 10.000+ komentar lintas platform.",
        "Membersihkan dan memproses data operasional menggunakan Excel PivotTables, meningkatkan efisiensi pelaporan hingga 30%.",
        "Mengelola infrastruktur TI untuk acara kenegaraan, memastikan nol downtime dan kelancaran protokol nasional."
      ]
    },
    image1: "/exp-1-ipdn.jpg", 
    image2: "/exp-2-ipdn.jpg",
    image3: "/exp-3-ipdn.jpg",
  },
  {
    id: 2,
    role: { 
      en: "Machine Learning Trainee", 
      id: "Trainee Machine Learning" 
    },
    company: "Dicoding x DBS Foundation",
    period: { 
      en: "Jan 2025 - Jun 2025", 
      id: "Jan 2025 - Jun 2025" 
    },
    description: { 
      en: "Intensive training program focusing on end-to-end machine learning application development and large-scale dataset analysis.", 
      id: "Program pelatihan intensif yang berfokus pada pengembangan aplikasi machine learning end-to-end dan analisis dataset skala besar." 
    },
    highlights: {
      en: [
        "Achieved a 96/100 final project score by developing an end-to-end ML application.",
        "Built predictive models (Classification, NLP, Computer Vision) with 85%+ accuracy.",
        "Analyzed massive datasets using Python & SQL to generate actionable insights in collaborative projects."
      ],
      id: [
        "Meraih skor tugas akhir 96/100 dengan membangun aplikasi Machine Learning secara end-to-end.",
        "Membangun model prediktif (Klasifikasi, NLP, Computer Vision) dengan tingkat akurasi 85%+.",
        "Menganalisis dataset masif menggunakan Python & SQL untuk menghasilkan wawasan strategis dalam proyek kolaboratif."
      ]
    },
    image1: "/dbs1.jpg",
    image2: "/cert-1.jpg",
    image3: "/dbs2.png",
  },
  {
    id: 3,
    role: { 
      en: "Digital Marketing Intern (MSIB)", 
      id: "Magang Digital Marketing (MSIB)" 
    },
    company: "APINDO",
    period: { 
      en: "Sep 2024 - Dec 2024", 
      id: "Sep 2024 - Des 2024" 
    },
    description: { 
      en: "Led digital transformation for MSMEs through e-commerce integration, automated workflows, and dynamic operational templates.", 
      id: "Memimpin transformasi digital untuk UMKM melalui integrasi e-commerce, alur kerja otomatis, dan pembuatan templat operasional dinamis." 
    },
    highlights: {
      en: [
        "Launched e-commerce storefronts yielding first sales, 200+ new followers, and thousands of organic impressions.",
        "Trained MSMEs in live-streaming, WhatsApp Business automation, and integrated QR catalogs.",
        "Optimized operations with dynamic Excel templates, contributing to the 3rd Place Best Group Award."
      ],
      id: [
        "Meluncurkan etalase e-commerce yang menghasilkan penjualan pertama, 200+ pengikut baru, dan ribuan impresi organik.",
        "Melatih pelaku UMKM dalam live-streaming, otomatisasi WhatsApp Business, dan pembuatan katalog QR terintegrasi.",
        "Mengoptimalkan operasional dengan templat Excel dinamis, berkontribusi pada pencapaian Penghargaan Kelompok Terbaik Juara 3."
      ]
    },
    image1: "/exp-1-msib.jpg",
    image2: "/exp-2-msib.jpg",
    image3: "/exp-3-msib.jpg",
  },
  {
    id: 4,
    role: { 
      en: "Front-End Developer", 
      id: "Front-End Developer" 
    },
    company: "Border Crossing Space Burneh (BCSB)",
    period: { 
      en: "Project Based", 
      id: "Berbasis Proyek" 
    },
    description: { 
      en: "Architected modern web interfaces and optimized user experience using cutting-edge frontend technologies.", 
      id: "Merancang antarmuka web modern dan mengoptimalkan pengalaman pengguna menggunakan teknologi frontend terkini." 
    },
    highlights: {
      en: [
        "Built interactive UI components and grid layouts using Next.js, TypeScript, and Tailwind CSS.",
        "Developed dynamic navigation and external routing to optimize user experience.",
        "Managed version control via GitHub (100+ commits) supporting continuous feature updates and API integration."
      ],
      id: [
        "Membangun komponen UI interaktif dan tata letak grid menggunakan Next.js, TypeScript, dan Tailwind CSS.",
        "Mengembangkan navigasi dinamis dan perutean eksternal untuk mengoptimalkan pengalaman pengguna.",
        "Mengelola kontrol versi melalui GitHub (100+ commits) untuk mendukung pembaruan fitur berkelanjutan dan integrasi API."
      ]
    },
    image1: "/bcsb.png",
    image2: "/bcsb3.png",
    image3: "/bcsb2.png",
    deployLink: "https://bordercrossingspaceburneh.com/",
  }
  
];