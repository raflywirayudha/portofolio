import type { ImageMetadata } from 'astro';

import raphishImage from '../assets/projects/raphish.png';
import kokiLandingImage from '../assets/projects/koki-akhir-bulan-landing.png';
import kokiChatbotImage from '../assets/projects/koki-akhir-bulan-chatbot.png';
import raflyElektronikImage from '../assets/projects/rafly-elektronik.png';

export interface Project {
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Screenshot kedua (opsional) — ditampilkan bertumpuk */
  secondaryImage?: ImageMetadata;
  secondaryImageAlt?: string;
  tags: string[];
  year: string;
  /** Label kategori di badge atas kartu */
  category?: string;
  /** Jenis produk di samping tahun, mis. "Browser Extension" */
  kind?: string;
  /** Warna badge kategori */
  accent?: 'lime' | 'amber';
  /** Ditampilkan di frame browser palsu */
  domain: string;
  /** Gambar sudah membawa chrome browser sendiri — jangan tambah bar palsu */
  hasOwnBrowserChrome?: boolean;
  demo?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: 'Raphish',
    description:
      'Raphish adalah ekstensi peramban pendeteksi phishing secara real-time yang dibangun dengan arsitektur Multi-Layer Security Filtering. Sistem ini menggabungkan filter daftar hitam (PhishTank API), verifikasi daftar putih (Tranco List API), dan model machine learning XGBoost untuk mendeteksi ancaman zero-day berdasarkan 22 fitur leksikal URL.',
    image: raphishImage,
    imageAlt:
      'Browser window showing the Raphish phishing warning screen in red, with the extension popup listing the detected site and its real-time protection toggle.',
    tags: ['Chrome Extension', 'HTML', 'CSS', 'JavaScript', 'FastAPI', 'PhishTank API', 'Tranco List API', 'XGBoost', 'Manifest V3'],
    year: '2026',
    category: 'Cybersecurity & ML',
    kind: 'Browser Extension',
    accent: 'lime',
    domain: '',
    hasOwnBrowserChrome: true,
    demo: '#',
    repo: 'https://github.com/raflywirayudha/raphish-extension',
  },
  {
    title: 'Koki Akhir Bulan',
    description:
      'Aplikasi ini mengubah bahan apa pun yang tersisa di dapur menjadi resep yang realistis, lalu mencetaknya sebagai kartu bergaya setruk belanja yang bisa langsung Anda jadikan panduan memasak.',
    image: kokiLandingImage,
    imageAlt:
      'Koki Akhir Bulan landing page with an oversized editorial headline and a receipt-style recipe card on the right.',
    secondaryImage: kokiChatbotImage,
    secondaryImageAlt:
      'Koki Akhir Bulan chat interface, with a conversation on the left and the generated recipe details on the right.',
    tags: ['React', 'Express.js', 'Tailwind CSS', 'Vite', 'Gemini AI'],
    year: '2026',
    category: 'AI / Experimental',
    kind: 'Web Application',
    accent: 'amber',
    domain: '',
    demo: '#',
    repo: 'https://github.com/raflywirayudha/koki-akhir-bulan',
  },
  {
    title: 'Rafly Elektronik',
    description:
      'Landing page layanan perbaikan peralatan rumah tangga seperti kompor gas, pompa air, dan dispenser. Dibangun dengan menonjolkan profil kepercayaan.',
    image: raflyElektronikImage,
    imageAlt:
      'Dark navy hero section of Rafly Elektronik with an orange call to action and a photo of appliance shelves.',
    tags: ['Astro', 'Tailwind CSS'],
    year: '2026',
    category: 'Landing Page',
    kind: 'High-Performance',
    accent: 'lime',
    domain: '',
    demo: '#',
    repo: 'https://github.com/raflywirayudha/rafly-elektronik',
  },
  // {
  //   title: 'Raphish',
  //   description:
  //     'A Chrome extension that flags phishing sites against an international blacklist. Instead of a silent warning, it replaces the page with a hard stop screen and a real-time multi-layer defense panel.',
  //   image: raphishImage,
  //   imageAlt:
  //     'Browser window showing the Raphish phishing warning screen in red, with the extension popup listing the detected site and its real-time protection toggle.',
  //   tags: ['Chrome Extension', 'TypeScript', 'Manifest V3'],
  //   year: '2026',
  //   domain: '',
  //   hasOwnBrowserChrome: true,
  //   demo: '#',
  //   repo: '#',
  // },
  // {
  //   title: 'Koki Akhir Bulan',
  //   description:
  //     'An AI kitchen assistant for the end of the month. It turns whatever is left in the kitchen into a realistic recipe, then prints it as a receipt-style card you can actually cook from.',
  //   image: kokiLandingImage,
  //   imageAlt:
  //     'Koki Akhir Bulan landing page with an oversized editorial headline and a receipt-style recipe card on the right.',
  //   secondaryImage: kokiChatbotImage,
  //   secondaryImageAlt:
  //     'Koki Akhir Bulan chat interface, with a conversation on the left and the generated recipe details on the right.',
  //   tags: ['Next.js', 'AI', 'Tailwind'],
  //   year: '2026',
  //   domain: '',
  //   demo: '#',
  //   repo: '#',
  // },
  // {
  //   title: 'Rafly Elektronik',
  //   description:
  //     'A service landing page for home appliance repair — gas stoves, water pumps, and dispensers. Built around trust signals and a WhatsApp-first conversion path for a local business.',
  //   image: raflyElektronikImage,
  //   imageAlt:
  //     'Dark navy hero section of Rafly Elektronik with an orange call to action and a photo of appliance shelves.',
  //   tags: ['Astro', 'Tailwind'],
  //   year: '2026',
  //   domain: '',
  //   demo: '#',
  //   repo: '#',
  // },
];
