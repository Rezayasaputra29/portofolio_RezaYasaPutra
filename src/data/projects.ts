// src/data/projects.ts

export interface Metric {
  label: { en: string; id: string };
  value: string;
}

export interface Visualization {
  label: { en: string; id: string };
  url: string;
}

export interface Project {
  id: number;
  title: { en: string; id: string };
  shortDesc: { en: string; id: string };
  category: string;
  github: string;
  demoType: "live" | "video" | "colab" | "none";
  demoLink: string;
  image: string;
  metrics: Metric[];
  problem: { en: string; id: string };
  solution: { en: string; id: string };
  techStack: string[];
  visualizations: Visualization[];
  keyFeatures: { en: string[]; id: string[] };
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: { 
      en: "Multimodal Depression Screening System", 
      id: "Sistem Skrining Depresi Multimodal" 
    },
    shortDesc: {
      en: "A web-based early depression screening system integrating the PHQ-9 questionnaire and CNN-based facial expression analysis.",
      id: "Sistem skrining awal tingkat depresi berbasis web yang mengintegrasikan kuesioner PHQ-9 dan analisis ekspresi wajah berbasis CNN."
    },
    category: "Web & Computer Vision",
    github: "https://github.com/Rezayasaputra29/mindcheck.ai",
    demoType: "video",
    demoLink: "https://youtu.be/link-video-demo-kamu",
    image: "/project1.jpg",
    metrics: [
      { label: { en: "Global Accuracy", id: "Akurasi Global" }, value: "65.3%" },
      { label: { en: "Model Size", id: "Ukuran Model" }, value: "13.7 MB" },
      { label: { en: "Inference Interval", id: "Interval Inferensi" }, value: "2.5s" },
    ],
    problem: {
      en: "Early detection of depression is often biased when relying solely on self-report questionnaires due to social desirability bias.",
      id: "Deteksi dini depresi seringkali bias jika hanya mengandalkan kuesioner mandiri (self-report) karena rentan terhadap manipulasi jawaban."
    },
    solution: {
      en: "Built a web interface combining PHQ-9 scores with a Mini-VGG model analyzing micro-expressions via webcam in real-time as an objective validator.",
      id: "Membangun antarmuka web yang menggabungkan skor kuesioner PHQ-9 dengan model Mini-VGG yang menganalisis mikro-ekspresi wajah via webcam secara real-time."
    },
    techStack: [
      "TensorFlow.js",
      "Next.js",
      "Mini-VGG",
      "Drizzle ORM",
      "Google Gemini AI",
    ],
    visualizations: [
      { 
        label: { en: "Training & Validation Loss", id: "Grafik Training & Validation Loss" }, 
        url: "/traininglos.png" 
      },
      { 
        label: { en: "Confusion Matrix Analysis", id: "Analisis Confusion Matrix" }, 
        url: "/confusion.jpg" 
      },
    ],
    keyFeatures: {
      en: [
        "Real-time facial expression tracking via client-side inference.",
        "Computational data fusion algorithm combining PHQ-9 score (60%) and negative visual expression ratio (40%).",
        "Implemented Zero Data Retention principle where facial frames are immediately deleted from browser memory.",
        "Generated personalized Psychological First Aid recommendation text via Google Gemini API."
      ],
      id: [
        "Pelacakan ekspresi wajah real-time melalui webcam di sisi klien (Client-side Inference).",
        "Algoritma fusi data komputasional yang menggabungkan skor PHQ-9 (60%) dan rasio ekspresi visual negatif (40%).",
        "Menerapkan prinsip Zero Data Retention di mana frame wajah langsung dihapus dari memori peramban.",
        "Menghasilkan teks rekomendasi Pertolongan Pertama Psikologis yang terpersonalisasi melalui API Google Gemini."
      ]
    },
  },
  {
    id: 2,
    title: {
      en: "NLP Model Comparison: IndoBERT vs Residual Network",
      id: "Komparasi Model NLP: IndoBERT vs Residual Network"
    },
    shortDesc: {
      en: "Comparative study of Deep Learning and Transformer architectures for social media sentiment classification.",
      id: "Studi komparatif arsitektur Deep Learning dan Transformer untuk klasifikasi sentimen komentar media sosial IPDN."
    },
    category: "Machine Learning & NLP",
    github: "https://github.com/Rezayasaputra29/Monitoring-sentimen-public-IPDN-WEB",
    demoType: "colab",
    demoLink: "https://colab.research.google.com/drive/1nblazh9Bk_Y7QRpUd2AhtyELYa-eh_mr?usp=sharing",
    image: "/negatif.jpg",
    metrics: [
      { label: { en: "IndoBERT Accuracy", id: "Akurasi IndoBERT" }, value: "90.7%" },
      { label: { en: "Residual DL Acc", id: "Akurasi Residual DL" }, value: "79.6%" },
      { label: { en: "Data Analyzed", id: "Data Dianalisis" }, value: "2,900" },
    ],
    problem: {
      en: "Manual public opinion monitoring is slow and prone to bias. Additionally, informal social media language is hard for traditional models to understand.",
      id: "Pemantauan opini publik manual berjalan lambat dan rentan bias. Selain itu, bahasa media sosial yang informal sulit dipahami oleh model tradisional."
    },
    solution: {
      en: "Built an ML pipeline comparing Sequential NN, Residual DL, and IndoBERT. The best model was then designed for integration into a Next.js Dashboard.",
      id: "Membangun pipeline Machine Learning yang membandingkan Sequential NN, Residual DL, dan IndoBERT. Model terbaik kemudian dirancang untuk diintegrasikan ke Dashboard Next.js."
    },
    techStack: ["Python", "IndoBERT", "TensorFlow", "FastAPI", "Next.js"],
    visualizations: [
      {
        label: { en: "IndoBERT Superior Performance (90.7%)", id: "Performa Unggul IndoBERT (Akurasi 90.7%)" },
        url: "/indobert.jpg",
      },
      {
        label: { en: "Residual Network Performance (79.6%)", id: "Performa Residual Network (Akurasi 79.6%)" },
        url: "/residual.jpg",
      },
      {
        label: { en: "Exploratory Data Analysis: Sentiment Wordcloud", id: "Exploratory Data Analysis: Wordcloud Sentimen" },
        url: "/negatif.jpg",
      },
      {
        label: { en: "Microservices Architecture & Dashboard Blueprint", id: "Rancangan Arsitektur Microservices & Dashboard" },
        url: "/rancangan.png",
      },
    ],
    keyFeatures: {
      en: [
        "Fine-tuned the IndoBERT NLP model, significantly outperforming Residual Network (90.72% accuracy).",
        "Processed 2,900 TikTok comments using oversampling and Indonesian-specific text preprocessing.",
        "Conducted Exploratory Data Analysis (EDA) extracting top frequency words and visualizing wordclouds.",
        "Drafted Microservices blueprint and designed Next.js Dashboard UI/UX for future deployment."
      ],
      id: [
        "Melakukan fine-tuning model NLP IndoBERT yang terbukti mengungguli Residual Network (Akurasi 90.72%).",
        "Memproses 2.900 dataset komentar TikTok menggunakan teknik oversampling dan text preprocessing khusus.",
        "Analisis Data Eksploratif (EDA) mengekstraksi kata-kata dengan frekuensi tertinggi dan visualisasi wordcloud.",
        "Menyusun cetak biru arsitektur Microservices dan mendesain UI/UX Dashboard untuk tahap deployment."
      ]
    },
  },
  {
    id: 3,
    title: {
      en: "E-Commerce Recommender System: CBF vs CF",
      id: "Sistem Rekomendasi E-Commerce: CBF vs CF"
    },
    shortDesc: {
      en: "Smart product recommendation system addressing the cold-start problem using Content-Based Filtering, TF-IDF, and Cosine Similarity.",
      id: "Sistem rekomendasi produk cerdas untuk mengatasi masalah cold-start menggunakan pendekatan Content-Based Filtering."
    },
    category: "Machine Learning",
    github: "https://github.com/Rezayasaputra29/System_rekomendasi",
    demoType: "colab",
    demoLink: "https://github.com/Rezayasaputra29/System_rekomendasi",
    image: "/rekomendasi.png",
    metrics: [
      { label: { en: "CBF Coverage", id: "Cakupan CBF" }, value: "65.11%" },
      { label: { en: "CBF Diversity", id: "Keberagaman CBF" }, value: "0.40" },
      { label: { en: "CF Test AUC", id: "AUC Evaluasi CF" }, value: "0.48" }, 
    ],
    problem: {
      en: "E-commerce platforms face cold-start problems and lack of valid user IDs, rendering traditional Collaborative Filtering ineffective.",
      id: "Platform e-commerce terkendala masalah cold-start dan ketiadaan ID pengguna (user_id) yang valid, sehingga Collaborative Filtering (CF) gagal beroperasi."
    },
    solution: {
      en: "Designed Content-Based Filtering (CBF) analyzing holistic product attributes via Cosine Similarity, while analytically proving CF's limitations.",
      id: "Merancang Content-Based Filtering (CBF) yang menganalisis atribut produk secara holistik menggunakan Cosine Similarity, dan membuktikan keterbatasan CF."
    },
    techStack: [
      "Python",
      "TensorFlow/Keras",
      "Scikit-learn",
      "Pandas",
      "Seaborn",
    ],
    visualizations: [
      {
        label: { en: "Content-Based Filtering Results (Top 10 Products)", id: "Hasil Rekomendasi Content-Based Filtering (Top 10)" },
        url: "/rekoemendasi1.png",
      },
      {
        label: { en: "Product Similarity Heatmap Analysis", id: "Heatmap Kemiripan Antar 10 Produk Pertama" },
        url: "/rekomendasi2.png",
      },
    ],
    keyFeatures: {
      en: [
        "Implemented Content-Based Filtering (CBF) to solve the cold-start problem via Cosine Similarity.",
        "Extracted text features from product descriptions using TF-IDF Vectorizer.",
        "Normalized and merged holistic feature matrices using Min-Max Scaling and One-Hot Encoding.",
        "Conducted Deep Learning experiments to quantitatively prove Collaborative Filtering's failure due to data sparsity."
      ],
      id: [
        "Implementasi Content-Based Filtering (CBF) untuk menyelesaikan masalah cold-start dengan Cosine Similarity.",
        "Ekstraksi fitur teks dari deskripsi produk menggunakan algoritma NLP TF-IDF Vectorizer.",
        "Normalisasi dan penggabungan matriks fitur holistik menggunakan Min-Max Scaling dan One-Hot Encoding.",
        "Melakukan eksperimen model Deep Learning (Keras) untuk membuktikan secara kuantitatif kegagalan CF akibat data sparsity."
      ]
    },
  },
];