// src/data/projects.ts

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  category: string;
  github: string;
  demoType: "live" | "video" | "colab" | "none";
  demoLink: string;
  image: string;
  metrics: Metric[];
  problem: string;
  solution: string;
  techStack: string[];
  visualizations: string[];
  keyFeatures: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Multimodal Depression Screening System",
    shortDesc: "Sistem skrining awal tingkat depresi berbasis web yang mengintegrasikan kuesioner PHQ-9 dan analisis ekspresi wajah berbasis CNN.",
    category: "Web & Computer Vision",
    github: "https://github.com/Rezayasaputra29/mindcheck.ai", 
    demoType: "video",
    demoLink: "https://youtu.be/link-video-demo-kamu",
    image: "/project1.jpg", 
    metrics: [
      { label: "Global Accuracy", value: "65.3%" },
      { label: "Model Size", value: "13.7 MB" },
      { label: "Inference Interval", value: "2.5s" }
    ],
    problem: "Deteksi dini depresi seringkali bias jika hanya mengandalkan kuesioner mandiri (self-report) karena rentan terhadap manipulasi jawaban atau social desirability bias.",
    solution: "Membangun antarmuka web yang menggabungkan skor kuesioner PHQ-9 dengan model Mini-VGG yang menganalisis mikro-ekspresi wajah via webcam secara real-time sebagai validator objektif.",
    techStack: ["TensorFlow.js", "Next.js", "Mini-VGG", "Drizzle ORM", "Google Gemini AI"],
    visualizations: [
      "/traininglos.png", 
      "/confusion.jpg"
    ],
    keyFeatures: [
      "Pelacakan ekspresi wajah real-time melalui webcam di sisi klien (Client-side Inference).",
      "Algoritma fusi data komputasional yang menggabungkan skor PHQ-9 (60%) dan rasio ekspresi visual negatif (40%).",
      "Menerapkan prinsip Zero Data Retention di mana frame wajah langsung dihapus dari memori peramban tanpa dikirim ke server.",
      "Menghasilkan teks rekomendasi Pertolongan Pertama Psikologis yang terpersonalisasi melalui API Google Gemini."
    ]
  },
  {
    id: 2,
    title: "EcoSort: CNN Object Classification",
    shortDesc: "Pemrosesan citra untuk memilah jenis sampah secara otomatis menggunakan Custom CNN vs Transfer Learning.",
    category: "Machine Learning",
    github: "https://github.com/Rezayasaputra29/ecosort", 
    demoType: "colab",
    demoLink: "https://colab.research.google.com/...",
    image: "/projects/ecosort.png",
    metrics: [
      { label: "Custom CNN Acc", value: "82.1%" },
      { label: "Transfer Learning", value: "94.3%" },
      { label: "Dataset", value: "TrashNet" }
    ],
    problem: "Sistem pemilahan sampah manual tidak efisien dan membutuhkan otomatisasi berbasis visual yang akurat.",
    solution: "Mengembangkan arsitektur CNN klasik dan membandingkannya dengan model Pre-trained (ResNet50). Evaluasi dilakukan secara komprehensif pada dataset TrashNet.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
    visualizations: ["/projects/ecosort-confusion-matrix.png"],
    keyFeatures: [
      "Perancangan arsitektur Custom CNN dari awal (from scratch).",
      "Implementasi Transfer Learning menggunakan arsitektur ResNet50.",
      "Penerapan pipeline augmentasi data untuk pelatihan model yang lebih tangguh (robust).",
      "Evaluasi metrik komprehensif dan pembuatan confusion matrix untuk analisis performa."
    ]
  }
];