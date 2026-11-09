export interface ExperienceHighlight {
  text: string;
  /** Frasa di dalam `text` yang ditampilkan tebal dan ungu */
  emphasis?: string[];
}

export interface ExperienceItem {
  role: string;
  period: string;
  /** Teks tambahan setelah periode pada badge, mis. "Magang" */
  periodNote?: string;
  company: string;
  /** Label konteks yang tampil sebagai badge di kanan kartu */
  tag?: string;
  description: string;
  /** Poin-poin pekerjaan — tampil sebagai daftar bernomor */
  highlights?: ExperienceHighlight[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Web Developer',
    period: '2024',
    periodNote: 'Magang',
    company: 'TIF UIN Suska Riau Dev Team',
    tag: 'Dashboard TIF',
    description:
      'Berperan sebagai Frontend Web Developer dalam pengembangan modul Seminar Kerja Praktik untuk aplikasi berbasis web Dashboard TIF.',
    highlights: [
      {
        text: 'Mengembangkan antarmuka pengguna yang responsif menggunakan React.js, TypeScript, Tailwind CSS, dan Shadcn UI.',
        emphasis: ['React.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
      },
      {
        text: 'Mengimplementasikan berbagai fitur termasuk pendaftaran seminar, unggah dan validasi dokumen, penjadwalan seminar, manajemen nilai, dan dasbor berbasis peran.',
      },
      {
        text: 'Mengembangkan dasbor khusus untuk mahasiswa, koordinator, dosen pembimbing akademik, dan dosen penguji berdasarkan peran dan kebutuhan masing-masing.',
      },
      {
        text: 'Mengintegrasikan aplikasi frontend dengan REST API untuk pengambilan, pengiriman, dan manajemen data.',
        emphasis: ['REST API'],
      },
      {
        text: 'Melakukan Black Box Testing untuk memverifikasi fungsionalitas aplikasi dan memastikan kesesuaiannya dengan kebutuhan sistem.',
        emphasis: ['Black Box Testing'],
      },
    ],
    // description:
    //   'Served as a Frontend Web Developer in the development of the Internship Seminar module for the web-based Dashboard TIF application.',
    // highlights: [
    //   {
    //     text: 'Developed responsive user interfaces using React.js, TypeScript, Tailwind CSS, and Shadcn UI.',
    //     emphasis: ['React.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    //   },
    //   {
    //     text: 'Implemented features including seminar applications, document upload and validation, seminar scheduling, grade management, and role-based dashboards.',
    //   },
    //   {
    //     text: 'Developed dashboards for students, coordinators, academic supervisors, and examiners based on their respective roles and requirements.',
    //   },
    //   {
    //     text: 'Integrated frontend applications with REST APIs for data retrieval, submission, and management.',
    //     emphasis: ['REST APIs'],
    //   },
    //   {
    //     text: 'Conducted API testing using Postman and performed Black Box Testing to verify application functionality and ensure compliance with system requirements.',
    //     emphasis: ['Black Box Testing'],
    //   },
    // ],
  },
  // {
  //   role: 'Coming Soon',
  //   period: '????',
  //   company: '????',
  //   description: '????',
  // },
];
