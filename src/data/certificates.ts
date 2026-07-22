// src/data/certificates.ts

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  image: string; // Wajib format .jpg, .png, atau .webp
}

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Machine Learning Engineer Specializing",
    issuer: "Dicoding Indonesia x DBS Foundation",
    issueDate: "July 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-1.jpg", 
  },
  {
    id: 2,
    title: "Microsoft Excel",
    issuer: "Karirnex by PT Ebiz Karisma Internasional",
    issueDate: "June 2026",
    credentialId: "",
    credentialUrl: "",
    image: "/cert-2.jpg",
  },
  {
    id: 3,
    title: "HCIA-AI V3.5",
    issuer: "Huawei",
    issueDate: "December 2024",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-3.jpg",
  },
  {
    id: 4,
    title: "Dasar SQL",
    issuer: "Dicoding Indonesia",
    issueDate: "Februari 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-4.jpg",
  },
  {
    id: 5,
    title: "Machine Learning Terapan",
    issuer: "Dicoding Indonesia",
    issueDate: "Juni 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-6.jpg",
  },
  {
    id: 6,
    title: "Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    issueDate: "February 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-7.jpg",
  },
  {
    id: 7,
    title: "Analisis Data dengan Python",
    issuer: "Dicoding Indonesia",
    issueDate: "March 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-8.jpg",
  },
  {
    id: 8,
    title: "Machine Learning Pemula",
    issuer: "Dicoding Indonesia",
    issueDate: "April 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-9.jpg",
  },
  {
    id: 9,
    title: "Dasar AI",
    issuer: "Dicoding Indonesia",
    issueDate: "February 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-10.jpg",
  },
  {
    id: 10,
    title: "Dasar Data Science",
    issuer: "Dicoding Indonesia",
    issueDate: "Maret 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-11.jpg",
  },
  {
    id: 11,
    title: "Memulai pemograman dengan Python",
    issuer: "Dicoding Indonesia",
    issueDate: "Maret 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-12.jpg",
  },
  {
    id: 12,
    title: "Fundamental Pemrosesan Data",
    issuer: "Dicoding Indonesia",
    issueDate: "Mei 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-13.jpg",
  },
  {
    id: 13,
    title: "Dasar Git Dengan Github",
    issuer: "Dicoding Indonesia",
    issueDate: "Februari 2025",
    credentialId: "",
    credentialUrl: ".",
    image: "/cert-5.jpg",
  },
];