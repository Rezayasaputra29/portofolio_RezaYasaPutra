# 🧠 KONTEKS PROYEK: DATA-DRIVEN PORTFOLIO WEBSITE

## 1. IDENTITAS PROYEK
- **Deskripsi:** Website portofolio profesional untuk Data Analyst / Business Intelligence / Machine Learning Engineer.
- **Tujuan Utama:** Menampilkan *showcase* proyek data dengan UI/UX kelas atas bergaya eksekutif (SaaS/Agency style), bukan sekadar *template* kaku.
- **Fitur Utama:** Mendukung sistem dua bahasa (Bilingual: EN/ID), tema gelap eksklusif (Dark Mode), efek *Glassmorphism*, dan interaksi animasi 3D/Hover.

## 2. TECH STACK & LIBRARIES
- **Framework Utama:** Next.js (Dynamic Routing untuk halaman detail).
- **Styling:** Tailwind CSS.
- **Animasi:** Framer Motion (untuk transisi halaman, efek melayang/hover, stagger).
- **Icons:** `lucide-react` (untuk UI umum) & `react-icons` (seperti `FaGithub`, `FaDownload`, dan logo teknologi).
- **State Management:** React Context (`LanguageContext` untuk toggle EN/ID).

## 3. ATURAN DESAIN (UI/UX GUIDELINES)
AI atau developer yang menulis kode untuk proyek ini **WAJIB** mengikuti panduan visual berikut:
1. **Aesthetic Utama:** Gelap elegan (`bg-[#020617]`), menggunakan elemen *Glassmorphism* (`bg-slate-800/40`, `backdrop-blur-sm`, `border-slate-700/50`).
2. **Hindari Template Kaku:** Dilarang menggunakan kotak-kotak pembatas yang kaku dan padat. Gunakan spasi (*whitespace*) yang lega (`gap-8`, `gap-12`).
3. **Typography:** Gunakan kontras warna untuk teks (misal: `text-white` untuk judul utama, `text-cyan-400` untuk sub-judul/highlight, `text-slate-400` untuk paragraf).
4. **Restraint / Anti-Slop (WAJIB):** Tampilan premium datang dari *keterbatasan*, bukan dari banyaknya efek. Aturan ini mengikat:
   - **DILARANG** memakai `shadow-[0_0_NNpx...]` (glow neon) pada tombol, kartu, ikon, atau bullet. Gunakan `hover:border-cyan-400/60` + `transition-colors` untuk menyatakan interaksi.
   - **DILARANG** memakai orb blur dekoratif (`blur-[100px]`, `rounded-full` besar) sebagai latar section.
   - **DILARANG** memakai animasi loop permanen yang tidak punya makna (float acak, `rotate: 360`, `animate-pulse` pada elemen dekoratif). Animasi hanya boleh sebagai umpan balik interaksi (`whileHover`) atau reveal saat masuk viewport.
   - **DILARANG** memakai `tracking-widest` pada teks panjang/label besar. Gunakan `tracking-tight` atau normal.
   - **DILARANG** membuat efek tipa dekoratif (typewriter, kursor berkedip, counter angka).
   - **DILARANG** mengulang gradient `from-cyan-400 to-emerald-400` di setiap heading. Gradien hanya untuk aksen satu kata kunci, bukan di seluruh section.
   - Jangan pernah me-render placeholder/teks debug ke UI.
5. **Responsivitas (Mobile-First):** Selalu gunakan struktur susun bawah (`flex-col`) pada layar kecil, dan menyamping (`lg:flex-row`, `lg:grid-cols-12`) pada layar besar.

## 4. STRUKTUR DATA (`src/data/projects.ts`)
Semua proyek menggunakan TypeScript interface berikut. **DILARANG** merusak atau mengubah struktur ini saat menambahkan data baru:

```typescript
export interface Metric {
  label: { en: string; id: string };
  value: string;
}

export interface Visualization {
  label: { en: string; id: string };
  url: string;
  description?: { en: string; id: string }; // WAJIB opsional (?)
}

export interface Project {
  id: number;
  title: { en: string; id: string };
  shortDesc: { en: string; id: string };
  category: string;
  github: string; // Kosongkan string ("") jika tidak ada source code
  demoType: "live" | "video" | "colab" | "excel" | "pdf" | "none"; 
  demoLink: string;
  datasetLink?: string; // Tautan ke file raw dataset (CSV/XLSX)
  image: string;
  metrics: Metric[];
  problem: { en: string; id: string };
  solution: { en: string; id: string };
  techStack: string[];
  visualizations: Visualization[];
  keyFeatures: { en: string[]; id: string[] };
}