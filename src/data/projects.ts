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
  keyFeatures: string[]; // [+] Fitur Baru untuk halaman detail
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Multimodal Depression Screening System",
    shortDesc: "Sistem web pendeteksi depresi menggunakan integrasi kuesioner klinis dan analisis ekspresi wajah real-time.",
    category: "Web & Computer Vision",
    github: "https://github.com/rezayasaputra/...", 
    demoType: "live",
    demoLink: "https://...",
    image: "/project-1.jpg", 
    metrics: [
      { label: "Model Accuracy", value: "92.5%" },
      { label: "Latency", value: "< 50ms" },
      { label: "False Positive", value: "1.2%" }
    ],
    problem: "Deteksi dini depresi seringkali bias jika hanya mengandalkan kuesioner (self-report).",
    solution: "Membangun antarmuka web yang menggabungkan skor kuesioner dengan model Mini-VGG yang menganalisis mikro-ekspresi wajah via webcam secara real-time.",
    techStack: ["TensorFlow.js", "Next.js", "Mini-VGG", "Python", "Tailwind CSS"],
    visualizations: ["/confusion-matrix-1.jpg", "/loss-graph-1.jpg"],
    keyFeatures: [
      "Real-time facial expression tracking via client-side webcam.",
      "Integration with standard clinical depression questionnaires.",
      "Low-latency inference using TensorFlow.js in the browser.",
      "Secure, privacy-first architecture (no images sent to server)."
    ]
  },
  {
    id: 2,
    title: "EcoSort: CNN Object Classification",
    shortDesc: "Pemrosesan citra untuk memilah jenis sampah secara otomatis menggunakan Custom CNN vs Transfer Learning.",
    category: "Machine Learning",
    github: "https://github.com/rezayasaputra/...", 
    demoType: "colab",
    demoLink: "https://colab.research.google.com/...",
    image: "/project-2.jpg",
    metrics: [
      { label: "Custom CNN Acc", value: "82.1%" },
      { label: "Transfer Learning", value: "94.3%" },
      { label: "Dataset", value: "TrashNet" }
    ],
    problem: "Sistem pemilahan sampah manual tidak efisien dan membutuhkan otomatisasi berbasis visual.",
    solution: "Mengembangkan arsitektur CNN klasik dan membandingkannya dengan model Pre-trained. Evaluasi dilakukan secara komprehensif pada dataset TrashNet.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
    visualizations: ["/confusion-matrix-2.jpg"],
    keyFeatures: [
      "Custom CNN architecture design from scratch.",
      "Transfer learning implementation using ResNet50.",
      "Data augmentation pipeline for robust model training.",
      "Comprehensive evaluation metrics and confusion matrix generation."
    ]
  }
];