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
  demoType: "live" | "video" | "colab" | "excel" | "none"; // <-- Tambahkan "excel" di sini
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
      id: "Sistem Skrining Depresi Multimodal",
    },
    shortDesc: {
      en: "A web-based early depression screening system integrating the PHQ-9 questionnaire and CNN-based facial expression analysis.",
      id: "Sistem skrining awal tingkat depresi berbasis web yang mengintegrasikan kuesioner PHQ-9 dan analisis ekspresi wajah berbasis CNN.",
    },
    category: "Web & Computer Vision",
    github: "https://github.com/Rezayasaputra29/mindcheck.ai",
    demoType: "video",
    demoLink: "https://youtu.be/link-video-demo-kamu",
    image: "/project1.jpg",
    metrics: [
      {
        label: { en: "Global Accuracy", id: "Akurasi Global" },
        value: "65.3%",
      },
      { label: { en: "Model Size", id: "Ukuran Model" }, value: "13.7 MB" },
      {
        label: { en: "Inference Interval", id: "Interval Inferensi" },
        value: "2.5s",
      },
    ],
    problem: {
      en: "Early detection of depression is often biased when relying solely on self-report questionnaires due to social desirability bias.",
      id: "Deteksi dini depresi seringkali bias jika hanya mengandalkan kuesioner mandiri (self-report) karena rentan terhadap manipulasi jawaban.",
    },
    solution: {
      en: "Built a web interface combining PHQ-9 scores with a Mini-VGG model analyzing micro-expressions via webcam in real-time as an objective validator.",
      id: "Membangun antarmuka web yang menggabungkan skor kuesioner PHQ-9 dengan model Mini-VGG yang menganalisis mikro-ekspresi wajah via webcam secara real-time.",
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
        label: {
          en: "Training & Validation Loss",
          id: "Grafik Training & Validation Loss",
        },
        url: "/traininglos.png",
      },
      {
        label: {
          en: "Confusion Matrix Analysis",
          id: "Analisis Confusion Matrix",
        },
        url: "/confusion.jpg",
      },
    ],
    keyFeatures: {
      en: [
        "Real-time facial expression tracking via client-side inference.",
        "Computational data fusion algorithm combining PHQ-9 score (60%) and negative visual expression ratio (40%).",
        "Implemented Zero Data Retention principle where facial frames are immediately deleted from browser memory.",
        "Generated personalized Psychological First Aid recommendation text via Google Gemini API.",
      ],
      id: [
        "Pelacakan ekspresi wajah real-time melalui webcam di sisi klien (Client-side Inference).",
        "Algoritma fusi data komputasional yang menggabungkan skor PHQ-9 (60%) dan rasio ekspresi visual negatif (40%).",
        "Menerapkan prinsip Zero Data Retention di mana frame wajah langsung dihapus dari memori peramban.",
        "Menghasilkan teks rekomendasi Pertolongan Pertama Psikologis yang terpersonalisasi melalui API Google Gemini.",
      ],
    },
  },
  {
    id: 2,
    title: {
      en: "NLP Model Comparison: IndoBERT vs Residual Network",
      id: "Komparasi Model NLP: IndoBERT vs Residual Network",
    },
    shortDesc: {
      en: "Comparative study of Deep Learning and Transformer architectures for social media sentiment classification.",
      id: "Studi komparatif arsitektur Deep Learning dan Transformer untuk klasifikasi sentimen komentar media sosial IPDN.",
    },
    category: "Machine Learning & NLP",
    github:
      "https://github.com/Rezayasaputra29/Monitoring-sentimen-public-IPDN-WEB",
    demoType: "colab",
    demoLink:
      "https://colab.research.google.com/drive/1nblazh9Bk_Y7QRpUd2AhtyELYa-eh_mr?usp=sharing",
    image: "/negatif.jpg",
    metrics: [
      {
        label: { en: "IndoBERT Accuracy", id: "Akurasi IndoBERT" },
        value: "90.7%",
      },
      {
        label: { en: "Residual DL Acc", id: "Akurasi Residual DL" },
        value: "79.6%",
      },
      { label: { en: "Data Analyzed", id: "Data Dianalisis" }, value: "2,900" },
    ],
    problem: {
      en: "Manual public opinion monitoring is slow and prone to bias. Additionally, informal social media language is hard for traditional models to understand.",
      id: "Pemantauan opini publik manual berjalan lambat dan rentan bias. Selain itu, bahasa media sosial yang informal sulit dipahami oleh model tradisional.",
    },
    solution: {
      en: "Built an ML pipeline comparing Sequential NN, Residual DL, and IndoBERT. The best model was then designed for integration into a Next.js Dashboard.",
      id: "Membangun pipeline Machine Learning yang membandingkan Sequential NN, Residual DL, dan IndoBERT. Model terbaik kemudian dirancang untuk diintegrasikan ke Dashboard Next.js.",
    },
    techStack: ["Python", "IndoBERT", "TensorFlow", "FastAPI", "Next.js"],
    visualizations: [
      {
        label: {
          en: "IndoBERT Superior Performance (90.7%)",
          id: "Performa Unggul IndoBERT (Akurasi 90.7%)",
        },
        url: "/indobert.jpg",
      },
      {
        label: {
          en: "Residual Network Performance (79.6%)",
          id: "Performa Residual Network (Akurasi 79.6%)",
        },
        url: "/residual.jpg",
      },
      {
        label: {
          en: "Exploratory Data Analysis: Sentiment Wordcloud",
          id: "Exploratory Data Analysis: Wordcloud Sentimen",
        },
        url: "/negatif.jpg",
      },
      {
        label: {
          en: "Microservices Architecture & Dashboard Blueprint",
          id: "Rancangan Arsitektur Microservices & Dashboard",
        },
        url: "/rancangan.png",
      },
    ],
    keyFeatures: {
      en: [
        "Fine-tuned the IndoBERT NLP model, significantly outperforming Residual Network (90.72% accuracy).",
        "Processed 2,900 TikTok comments using oversampling and Indonesian-specific text preprocessing.",
        "Conducted Exploratory Data Analysis (EDA) extracting top frequency words and visualizing wordclouds.",
        "Drafted Microservices blueprint and designed Next.js Dashboard UI/UX for future deployment.",
      ],
      id: [
        "Melakukan fine-tuning model NLP IndoBERT yang terbukti mengungguli Residual Network (Akurasi 90.72%).",
        "Memproses 2.900 dataset komentar TikTok menggunakan teknik oversampling dan text preprocessing khusus.",
        "Analisis Data Eksploratif (EDA) mengekstraksi kata-kata dengan frekuensi tertinggi dan visualisasi wordcloud.",
        "Menyusun cetak biru arsitektur Microservices dan mendesain UI/UX Dashboard untuk tahap deployment.",
      ],
    },
  },
  {
    id: 3,
    title: {
      en: "E-Commerce Recommender System: CBF vs CF",
      id: "Sistem Rekomendasi E-Commerce: CBF vs CF",
    },
    shortDesc: {
      en: "Smart product recommendation system addressing the cold-start problem using Content-Based Filtering, TF-IDF, and Cosine Similarity.",
      id: "Sistem rekomendasi produk cerdas untuk mengatasi masalah cold-start menggunakan pendekatan Content-Based Filtering.",
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
      id: "Platform e-commerce terkendala masalah cold-start dan ketiadaan ID pengguna (user_id) yang valid, sehingga Collaborative Filtering (CF) gagal beroperasi.",
    },
    solution: {
      en: "Designed Content-Based Filtering (CBF) analyzing holistic product attributes via Cosine Similarity, while analytically proving CF's limitations.",
      id: "Merancang Content-Based Filtering (CBF) yang menganalisis atribut produk secara holistik menggunakan Cosine Similarity, dan membuktikan keterbatasan CF.",
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
        label: {
          en: "Content-Based Filtering Results (Top 10 Products)",
          id: "Hasil Rekomendasi Content-Based Filtering (Top 10)",
        },
        url: "/rekoemendasi1.png",
      },
      {
        label: {
          en: "Product Similarity Heatmap Analysis",
          id: "Heatmap Kemiripan Antar 10 Produk Pertama",
        },
        url: "/rekomendasi2.png",
      },
    ],
    keyFeatures: {
      en: [
        "Implemented Content-Based Filtering (CBF) to solve the cold-start problem via Cosine Similarity.",
        "Extracted text features from product descriptions using TF-IDF Vectorizer.",
        "Normalized and merged holistic feature matrices using Min-Max Scaling and One-Hot Encoding.",
        "Conducted Deep Learning experiments to quantitatively prove Collaborative Filtering's failure due to data sparsity.",
      ],
      id: [
        "Implementasi Content-Based Filtering (CBF) untuk menyelesaikan masalah cold-start dengan Cosine Similarity.",
        "Ekstraksi fitur teks dari deskripsi produk menggunakan algoritma NLP TF-IDF Vectorizer.",
        "Normalisasi dan penggabungan matriks fitur holistik menggunakan Min-Max Scaling dan One-Hot Encoding.",
        "Melakukan eksperimen model Deep Learning (Keras) untuk membuktikan secara kuantitatif kegagalan CF akibat data sparsity.",
      ],
    },
  },
  {
    id: 4,
    title: {
      en: "Taco Sales Price Prediction Model",
      id: "Model Prediksi Harga Pesanan Taco",
    },
    shortDesc: {
      en: "A machine learning regression project achieving 100% accuracy in predicting taco order prices based on topping count and size.",
      id: "Proyek regresi machine learning yang mencapai akurasi 100% dalam memprediksi harga pesanan taco berdasarkan atribut spesifik.",
    },
    category: "Machine Learning / Predictive Analytics",
    github: "https://github.com/Rezayasaputra29/Predictiv_analitis", // Ganti jika ada link repo spesifik
    demoType: "colab", // Sesuai dengan interface kamu (live | video | colab | none)
    demoLink: "https://github.com/Rezayasaputra29/Predictiv_analitis", // Ganti dengan link Kaggle/Colab notebook kamu
    image: "/taco.png", // Ganti dengan nama file gambar cover yang disiapkan
    metrics: [
      {
        label: { en: "Test Accuracy (R²)", id: "Akurasi Uji (R²)" },
        value: "1.00",
      },
      {
        label: { en: "Error Margin (MAE)", id: "Rata-rata Error" },
        value: "0.00",
      },
      { label: { en: "Dataset Records", id: "Data Pesanan" }, value: "1,000" },
    ],
    problem: {
      en: "In the highly dynamic food delivery market, determining an optimal and responsive pricing strategy is crucial for a business's profitability. A lack of data-driven pricing can lead to lost revenue.",
      id: "Dalam industri pesan-antar makanan yang dinamis, penentuan strategi harga yang optimal sangat krusial bagi profitabilitas bisnis. Kurangnya dasar data dalam menentukan harga dapat menghilangkan potensi pendapatan.",
    },
    solution: {
      en: "Developed a highly accurate Machine Learning regression model to estimate taco prices based on product attributes. Analyzed 1,000 order records and discovered a deterministic pricing structure.",
      id: "Membangun model regresi Machine Learning akurasi tinggi untuk mengestimasi harga taco berdasarkan atribut produk. Menganalisis 1.000 data pesanan dan membuktikan struktur harga yang deterministik.",
    },
    techStack: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Jupyter/Colab"],
    visualizations: [
      {
        label: {
          en: "Linear Regression: Actual vs Predicted Prices",
          id: "Regresi Linear: Harga Aktual vs Prediksi",
        },
        url: "/linear.png", // Ganti dengan nama file gambar Linear Regression
      },
      {
        label: {
          en: "Random Forest: Actual vs Predicted Prices",
          id: "Random Forest: Harga Aktual vs Prediksi",
        },
        url: "/forest.png", // Ganti dengan nama file gambar Random Forest
      },
    ],
    keyFeatures: {
      en: [
        "Performed Comprehensive Exploratory Data Analysis (EDA) on 13 variables.",
        "Conducted robust Data Preparation including datetime conversion, categorical standardization, and One-Hot Encoding.",
        "Utilized Feature Importance Scoring to isolate 'Topping Count' and 'Taco Size' as primary price drivers.",
        "Achieved a perfect 1.0 R-Squared (R²) score on unseen test data using Linear Regression & Random Forest models.",
      ],
      id: [
        "Melakukan Exploratory Data Analysis (EDA) secara komprehensif pada 13 variabel dataset.",
        "Menjalankan Persiapan Data (Data Prep) yang kuat termasuk konversi datetime, standarisasi kategori, dan One-Hot Encoding.",
        "Menggunakan Feature Importance untuk mengisolasi 'Jumlah Topping' dan 'Ukuran Taco' sebagai penentu harga utama.",
        "Mencapai skor R-Squared (R²) 1.0 yang sempurna pada data uji baru dengan model Linear Regression & Random Forest.",
      ],
    },
  },
  {
    id: 5,
    title: {
      en: "PUBG Mobile User Review Sentiment Analysis",
      id: "Analisis Sentimen Ulasan Pengguna PUBG Mobile",
    },
    shortDesc: {
      en: "An NLP pipeline utilizing Lexicon-based labeling and Machine Learning to classify 15,000 PUBG Mobile reviews into positive, negative, and neutral sentiments.",
      id: "Pipeline NLP yang memanfaatkan pelabelan berbasis Lexicon dan Machine Learning untuk mengklasifikasikan 15.000 ulasan PUBG Mobile menjadi sentimen positif, negatif, dan netral.",
    },
    category: "Machine Learning / Natural Language Processing",
    github: "https://github.com/Rezayasaputra29/Projec_Analisis_Sentimen",
    demoType: "colab", // Tipe demo sesuai interfacemu
    demoLink: "https://colab.research.google.com/drive/1pTsmL_2xPDPBLkxsBCJe2aN8TqbVHrkG?usp=sharing",
    image: "/pubg.png", // Ganti dengan nama file gambar cover yang disiapkan
    metrics: [
      {
        label: { en: "Dataset Size", id: "Total Ulasan (Scraping)" },
        value: "15,000",
      },
      { label: { en: "Sentiment Classes", id: "Kelas Sentimen" }, value: "3" },
      {
        label: { en: "Train-Test Split", id: "Rasio Data (Train:Test)" },
        value: "80:20",
      },
    ],
    problem: {
      en: "Game developers constantly receive thousands of user reviews. Manually identifying user satisfaction is impossible. Furthermore, reviews often contain highly unstructured Indonesian slang, typos, and abbreviations that standard models struggle to interpret.",
      id: "Pengembang game menerima ribuan ulasan setiap harinya. Mengidentifikasi kepuasan pengguna secara manual sangat mustahil. Terlebih lagi, ulasan sering kali mengandung bahasa gaul (slang) Indonesia yang sangat tidak terstruktur, salah ketik, dan singkatan yang sulit diinterpretasikan oleh model standar.",
    },
    solution: {
      en: "Engineered a robust Natural Language Processing (NLP) solution. I built a custom text-cleaning pipeline featuring a dedicated Indonesian slang dictionary and Sastrawi stemming. Data was objectively labeled using a Lexicon approach. To prevent model bias towards negative reviews, I applied Oversampling (Resampling) techniques before training.",
      id: "Merancang solusi Natural Language Processing (NLP) yang tangguh. Saya membangun pipeline pembersihan teks khusus dengan kamus bahasa gaul (slang) Indonesia dan stemming Sastrawi. Data dilabeli secara objektif menggunakan pendekatan Lexicon. Untuk mencegah bias model terhadap ulasan negatif, saya menerapkan teknik Oversampling sebelum proses pelatihan.",
    },
    techStack: [
      "Python",
      "Sastrawi (NLP)",
      "NLTK",
      "Scikit-learn",
      "Pandas",
      "Matplotlib/Seaborn",
    ],
    visualizations: [
      {
        label: {
          en: "Hasil testing model",
          id: "Hasil testing model",
        },
        url: "/ujipubg.png", // Screenshot pie chart dari output notebook
      },
      {
        label: {
          en: "Exploratory Data Analysis: Word Cloud",
          id: "Exploratory Data Analysis: Word Cloud",
        },
        url: "/pubgworlcloud.png", // Screenshot word cloud dari output notebook
      },
    ],
    keyFeatures: {
      en: [
        "Collected 15,000 raw app reviews via data scraping.",
        "Constructed an advanced Text Preprocessing pipeline (Case folding, regex link/number removal, stopword filtering).",
        "Created a specialized dictionary to normalize unstructured Indonesian slang words (e.g., 'bgt' -> 'banget', 'jancuk' -> 'anjing').",
        "Categorized sentiments via Lexicon scoring (Positive, Negative, Neutral).",
        "Solved target class imbalance (Negative: 8,192 vs Neutral: 981) by implementing Resample Oversampling, equalizing each class to 5,827 samples.",
      ],
      id: [
        "Mengumpulkan 15.000 data mentah ulasan aplikasi melalui proses scraping.",
        "Membangun pipeline Pra-pemrosesan Teks tingkat lanjut (Case folding, penghapusan tautan/angka dengan regex, pemfilteran stopword).",
        "Membuat kamus khusus untuk menormalisasi kata-kata gaul (slang) bahasa Indonesia yang tidak terstruktur (contoh: 'bgt' -> 'banget').",
        "Mengkategorikan sentimen menggunakan sistem skoring Lexicon (Positif, Negatif, Netral).",
        "Menyelesaikan masalah ketidakseimbangan kelas target (Negatif: 8.192 vs Netral: 981) dengan menerapkan Resample Oversampling, menyamakan tiap kelas menjadi 5.827 sampel.",
      ],
    },
  },
  {
    id: 6,
    title: {
      en: "Poverty Line Classification System",
      id: "Sistem Klasifikasi Garis Kemiskinan"
    },
    shortDesc: {
      en: "A machine learning pipeline evaluating multiple algorithms (SVM, KNN, Decision Tree, Naive Bayes) to classify regional poverty lines, addressing data imbalance via SMOTE.",
      id: "Pipeline machine learning yang mengevaluasi berbagai algoritma (SVM, KNN, Decision Tree, Naive Bayes) untuk klasifikasi garis kemiskinan, menangani ketidakseimbangan data via SMOTE."
    },
    category: "Machine Learning / Classification",
    github: "https://github.com/Rezayasaputra29/Project_ML_Pemula",
    demoType: "colab",
    demoLink: "https://github.com/Rezayasaputra29/Project_ML_Pemula",
    image: "/cm_kemiskinan.png", // Siapkan gambar cover proyek di folder public
    metrics: [
      { label: { en: "Test Accuracy", id: "Akurasi Pengujian" }, value: "1.00" },
      { label: { en: "F1-Score", id: "Skor F1" }, value: "1.00" },
      { label: { en: "Train-Test Split", id: "Rasio Split Data" }, value: "20:80" },
    ],
    problem: {
      en: "Poverty line data often suffers from imbalanced classes and complex regional economic distributions. Classifying this data accurately requires robust preprocessing to prevent models from developing bias towards majority classes.",
      id: "Data garis kemiskinan sering kali memiliki ketidakseimbangan kelas dan distribusi ekonomi daerah yang kompleks. Mengklasifikasikan data ini secara akurat membutuhkan pra-pemrosesan yang kuat untuk mencegah bias model terhadap kelas mayoritas."
    },
    solution: {
      en: "Built a comprehensive Machine Learning pipeline involving MinMax Scaling and One-Hot Encoding. Addressed class imbalance by implementing SMOTE (Synthetic Minority Over-sampling Technique). Evaluated four classifiers, achieving perfect 1.0 metrics across the board due to highly informative dataset features.",
      id: "Membangun pipeline Machine Learning komprehensif yang melibatkan MinMax Scaling dan One-Hot Encoding. Mengatasi ketidakseimbangan kelas dengan menerapkan SMOTE. Mengevaluasi empat pengklasifikasi, dan mencapai metrik 1.0 yang sempurna di semua model akibat fitur dataset yang sangat informatif."
    },
    techStack: [
      "Python",
      "Scikit-learn",
      "Imbalanced-learn",
      "Pandas",
      "Seaborn"
    ],
    visualizations: [
      {
        label: { en: "Perfect Confusion Matrices across 4 Models", id: "Confusion Matrix Sempurna pada 4 Model" },
        url: "/cm_kemiskinan.png", // Screenshot 4 Confusion Matrix yang kamu lampirkan
      },
      {
        label: { en: "Outlier Detection & Data Distribution (Boxplot)", id: "Deteksi Outlier & Distribusi Data (Boxplot)" },
        url: "/outlier.png", // Screenshot Boxplot Distribusi garis kemiskinan
      },
    ],
    keyFeatures: {
      en: [
        "Performed comprehensive Exploratory Data Analysis (EDA) including Correlation Heatmaps and Boxplots for outlier detection.",
        "Handled class imbalance successfully by generating synthetic samples using SMOTE technique.",
        "Trained and compared four distinct ML algorithms: K-Nearest Neighbors, Decision Tree, Gaussian Naive Bayes, and SVM.",
        "Conducted critical post-evaluation analysis, recognizing the perfect 100% accuracy as a potential indicator of overfitting or highly deterministic data.",
        "Formulated strategic recommendations for future improvements, including k-fold cross-validation and testing on external datasets."
      ],
      id: [
        "Melakukan Exploratory Data Analysis (EDA) komprehensif termasuk Heatmap Korelasi dan Boxplot untuk mendeteksi outlier.",
        "Menangani ketidakseimbangan kelas secara sukses dengan menghasilkan sampel sintetis menggunakan teknik SMOTE.",
        "Melatih dan membandingkan empat algoritma ML berbeda: K-Nearest Neighbors, Decision Tree, Gaussian Naive Bayes, dan SVM.",
        "Melakukan analisis pasca-evaluasi yang kritis, mengenali akurasi 100% sempurna sebagai potensi indikator overfitting atau data yang sangat deterministik.",
        "Merumuskan rekomendasi strategis untuk peningkatan model di masa depan, termasuk k-fold cross-validation dan pengujian pada dataset eksternal."
      ]
    },
  },
  {
    id: 7,
    title: {
      en: "E-Commerce Interactive Excel Dashboard",
      id: "Dashboard Interaktif Excel E-Commerce",
    },
    shortDesc: {
      en: "A dynamic and fully automated Microsoft Excel dashboard designed to track key business metrics like net sales, product volume, and customer ratings.",
      id: "Dashboard Microsoft Excel yang dinamis dan sepenuhnya otomatis, dirancang untuk melacak metrik bisnis utama seperti penjualan bersih, volume produk, dan rating pelanggan.",
    },
    category: "Data Analysis & Business Intelligence",
    github: "", // Ganti dengan link repo jika ada
    demoType: "excel", // Sangat disarankan pakai video untuk demo Excel
    demoLink: "/Case Study-Dashboard.xlsx", // Ganti dengan link video YouTube/Drive
    image: "/dasb1.png", // Pastikan file gambar ada di folder public/
    metrics: [
      {
        label: { en: "Total Net Sales", id: "Total Penjualan Bersih" },
        value: "Rp 7.09B",
      },
      {
        label: { en: "Units Sold", id: "Unit Terjual" },
        value: "26,453",
      },
      {
        label: { en: "Processed Records", id: "Data Pesanan" },
        value: "15,000",
      },
    ],
    problem: {
      en: "Stakeholders often struggle to make quick, data-driven decisions because raw sales data is scattered, complex, and requires tedious manual recalculation every time new records are added.",
      id: "Pemangku kepentingan sering kesulitan mengambil keputusan cepat berbasis data karena data penjualan mentah yang tersebar, rumit, dan memerlukan perhitungan ulang manual yang melelahkan setiap kali ada data baru.",
    },
    solution: {
      en: "Engineered a consolidated, automated Excel dashboard using Pivot Tables, Connected Slicers, and dynamic charts. Connected directly to the raw dataset, the dashboard instantly updates all Key Performance Indicators (KPIs) upon data modification.",
      id: "Merancang dashboard Excel yang terpadu dan otomatis menggunakan Pivot Table, Connected Slicer, dan grafik dinamis. Terhubung langsung ke dataset mentah, dashboard ini langsung memperbarui semua Key Performance Indicators (KPI) saat data diubah.",
    },
    techStack: [
      "Microsoft Excel",
      "Pivot Tables",
      "Pivot Charts",
      "Data Modeling",
      "Connected Slicers",
    ],
    visualizations: [
      {
        label: {
          en: "Dynamic Dashboard Interface with Interactive Slicers",
          id: "Antarmuka Dashboard Dinamis dengan Slicer Interaktif",
        },
        url: "/dasb1.png", // Gunakan screenshot dashboard utamamu
      },
      {
        label: {
          en: "Automated KPI Engine Aggregation",
          id: "Agregasi KPI Otomatis",
        },
        url: "/kpi.png", // Opsional: screenshot dari sheet 'Pivot_KPI'
      },
    ],
    keyFeatures: {
      en: [
        "Processed and aggregated 15,000 fashion retail order records spanning various cities, platforms, and payment methods.",
        "Engineered dynamic Pivot Tables and connected Slicers for seamless, one-click data filtering.",
        "Visualized critical business metrics including Total Net Sales (Rp 7 Billion+), Sold Quantity (26,453), and Customer Satisfaction (2.97 Avg).",
        "Built an automated data architecture where all charts and KPIs refresh instantly simply by adding new data to the raw sheet.",
      ],
      id: [
        "Memproses dan mengagregasi 15.000 data pesanan ritel pakaian yang tersebar di berbagai kota, platform, dan metode pembayaran.",
        "Membangun Pivot Table dinamis dan menghubungkannya dengan Slicer untuk pemfilteran data satu klik yang intuitif.",
        "Memvisualisasikan metrik bisnis kritis termasuk Total Penjualan Bersih (Rp 7 Miliar+), Kuantitas Terjual (26.453), dan Kepuasan Pelanggan (Rata-rata 2.97).",
        "Membangun arsitektur data otomatis di mana semua grafik dan KPI diperbarui seketika hanya dengan menambahkan data baru ke sheet mentah.",
      ],
    },
  },
];

