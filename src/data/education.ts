export interface EducationHighlight {
  label: string;
  text: string;
}

export interface EducationItem {
  period: string;
  school: string;
  major: string;
  description?: string;
  highlights?: EducationHighlight[];
  featured?: boolean;
}

export const education: EducationItem[] = [
  {
    period: '2022 - 2026',
    school: 'UIN Sultan Syarif Kasim Riau',
    major: 'Informatics Engineering',
    highlights: [
      {
        label: 'Penelitian & Publikasi Ilmiah',
        text: 'Mempublikasikan penelitian tentang deteksi situs web phishing secara real-time menggunakan ekstensi peramban (browser) dan machine learning.',
      },
      {
        label: 'Proyek Keamanan Siber',
        text: 'Mengembangkan Raphish, sebuah sistem deteksi situs web phishing yang menggabungkan teknik blacklist, whitelist, dan machine learning.',
      },
      {
        label: 'Mata Kuliah Keamanan Siber',
        text: 'Mempelajari SIEM, EDR, CTI, Analisis Malware, Forensik Digital, VAPT, Keamanan SDLC, MFA, Kriptografi, dan Steganografi, dengan tugas praktik langsung pada Analisis Malware, Forensik Digital, VAPT, Kriptografi, dan Steganografi.',
      },
      {
        label: 'Pengembangan Frontend',
        text: 'Mengembangkan aplikasi akademik berbasis web menggunakan React.js, TypeScript, Tailwind CSS, dan REST API.',
      },
    ],
    // highlights: [
    //   {
    //     label: 'Research & Scientific Publication',
    //     text: 'Published research on real-time phishing website detection using browser extensions and machine learning.',
    //   },
    //   {
    //     label: 'Cybersecurity Projects',
    //     text: 'Developed Raphish, a phishing website detection system combining blacklist, whitelist, and machine learning techniques.',
    //   },
    //   {
    //     label: 'Cybersecurity Coursework',
    //     text: 'Studied SIEM, EDR, CTI, Malware Analysis, Digital Forensics, VAPT, SDLC Security, MFA, Cryptography, and Steganography, with hands-on assignments in Malware Analysis, Digital Forensics, VAPT, Cryptography, and Steganography.',
    //   },
    //   {
    //     label: 'Frontend Development',
    //     text: 'Developed web-based academic applications using React.js, TypeScript, Tailwind CSS, and REST APIs.',
    //   },
    // ],
    featured: true,
  },
  {
    period: '2019 - 2022',
    school: 'SMA Negeri 1 Tembilahan',
    major: 'Science Major',
    // description:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius justo sit amet suscipit ultrices. Fusce hendrerit tortor elit. Quisque a arcu hendrerit, hendrerit dolor eget, faucibus erat. Vivamus vitae libero ut purus tempus aliquam eget at ligula.',
  },
];
