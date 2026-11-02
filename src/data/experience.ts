export interface ExperienceItem {
  role: string;
  period: string;
  company: string;
  description: string;
  /** Poin-poin pekerjaan — tampil sebagai daftar */
  highlights?: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Web Developer Intern',
    period: '2024',
    company: 'TIF UIN Suska Riau Dev Team',
    description:
      'Berperan sebagai Frontend Web Developer dalam pengembangan modul Seminar Kerja Praktik untuk aplikasi berbasis web Dashboard TIF.',
    highlights: [
      'Mengembangkan antarmuka pengguna yang responsif menggunakan React.js, TypeScript, Tailwind CSS, dan Shadcn UI.',
      'Mengimplementasikan berbagai fitur termasuk pendaftaran seminar, unggah dan validasi dokumen, penjadwalan seminar, manajemen nilai, dan dasbor berbasis peran.',
      'Mengembangkan dasbor khusus untuk mahasiswa, koordinator, dosen pembimbing akademik, dan dosen penguji berdasarkan peran dan kebutuhan masing-masing.',
      'Mengintegrasikan aplikasi frontend dengan REST API untuk pengambilan, pengiriman, dan manajemen data.',
      'Melakukan Black Box Testing untuk memverifikasi fungsionalitas aplikasi dan memastikan kesesuaiannya dengan kebutuhan sistem.',
    ],
    // description:
    //   'Served as a Frontend WebDeveloper in the development of the Internship Seminar module for the web-based Dashboard TIF application.',
    // highlights: [
    //   'Developed responsive user interfaces using React.js, TypeScript, Tailwind CSS, and Shadcn UI.',
    //   'Implemented features including seminar applications, document upload and validation, seminar scheduling, grade management, and role-based dashboards.',
    //   'Developed dashboards for students, coordinators, academic supervisors, and examiners based on their respective roles and requirements.',
    //   'Integrated frontend applications with REST APIs for data retrieval, submission, and management.',
    //   'Conducted API testing using Postman and performed Black Box Testing to verify application functionality and ensure compliance with system requirements.',
    // ],
  },
  // {
  //   role: 'Coming Soon',
  //   period: '????',
  //   company: '????',
  //   description: '????',
  // },
];
