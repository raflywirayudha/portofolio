import dicodingBasicImage from '../assets/certifications/1. Belajar Dasar Pemrograman.webp';
import cssImage from '../assets/certifications/2. CSS (Basic).webp';
import cybersecurityImage from '../assets/certifications/3. Introduction to Cybersecurity.webp';
import llmImage from '../assets/certifications/4. Introduction to Large Language Models.webp';
import aiAgentDesignImage from '../assets/certifications/5. Intelligent by Design Build an AI Agent.webp';
import phishingImage from '../assets/certifications/6. How to Protect Yourself Against Phishing Attacks.webp';
import aiProductivityImage from '../assets/certifications/7. AI Productivity and AI API Integration for Developers.webp';
import reactImage from '../assets/certifications/8. React (Basic).webp';
import aiAgentProgrammingImage from '../assets/certifications/9. AI Agent for Programming.webp';
import offensiveSecurityImage from '../assets/certifications/10. Offensive Security Operations.webp';
import icipImage from '../assets/certifications/11. ICIP - Introduction to Critical Infrastucture Protection.webp';
import ocfaImage from '../assets/certifications/12. OCFA - OPSWAT Cybersecurity Fundamentals Associate.webp';
import reconImage from '../assets/certifications/13. Recon.webp';
import coreImage from '../assets/certifications/14. CORE - Certified Cybersecurity Foundations.webp';
import c3saImage from '../assets/certifications/15. C3SA - Certified Cyber Security Analyst.webp';
import sqlImage from '../assets/certifications/Database Programming with SQL.webp';
import oracleFoundationsImage from '../assets/certifications/Oracle Academy - Database Foundations.webp';
import oraclePlsqlImage from '../assets/certifications/Oracle Academy - PLSQL Database Programming.webp';

export interface Certification {
  issuer: string;
  title: string;
  /** Format YYYY.MM.DD — dipakai untuk sorting & tampilan */
  date: string;
  image: string;
  imageAlt: string;
  /** Tampil sebagai kartu gambar di marquee; sisanya masuk baris arsip */
  featured?: boolean;
}

export const certifications: Certification[] = [
  {
    issuer: 'DICODING',
    title: 'Belajar Dasar Pemrograman Web',
    date: '2023.11.03',
    image: dicodingBasicImage.src,
    imageAlt: 'Dicoding certificate for Belajar Dasar Pemrograman Web',
  },
  {
    issuer: 'HACKERRANK',
    title: 'CSS (Basic)',
    date: '2023.11.11',
    image: cssImage.src,
    imageAlt: 'HackerRank CSS (Basic) certificate',
    featured: true,
  },
  {
    issuer: 'CISCO NETWORKING ACADEMY',
    title: 'Introduction to Cybersecurity',
    date: '2026.03.01',
    image: cybersecurityImage.src,
    imageAlt: 'Cisco Networking Academy Introduction to Cybersecurity certificate',
  },
  {
    issuer: 'IBM SKILLSBUILD',
    title: 'Introduction to Large Language Models',
    date: '2026.07.01',
    image: llmImage.src,
    imageAlt: 'IBM SkillsBuild Introduction to Large Language Models certificate',
  },
  {
    issuer: 'IBM SKILLSBUILD',
    title: 'Intelligent by Design: Build an AI Agent',
    date: '2026.07.03',
    image: aiAgentDesignImage.src,
    imageAlt: 'IBM SkillsBuild Intelligent by Design Build an AI Agent certificate',
  },
  {
    issuer: 'COMMODIOUS',
    title: 'How to Protect Yourself Against Phishing Attacks',
    date: '2026.07.17',
    image: phishingImage.src,
    imageAlt: 'Commodious How to Protect Yourself Against Phishing Attacks certificate',
  },
  {
    issuer: 'HACKTIV8',
    title: 'AI Productivity and AI API Integration for Developers',
    date: '2026.07.15',
    image: aiProductivityImage.src,
    imageAlt: 'Hacktiv8 AI Productivity and AI API Integration for Developers certificate',
  },
  {
    issuer: 'HACKERRANK',
    title: 'React (Basic)',
    date: '2026.07.28',
    image: reactImage.src,
    imageAlt: 'HackerRank React (Basic) certificate',
    featured: true,
  },
  {
    issuer: 'IBM SKILLSBUILD',
    title: 'IT - AI Agent for Programming',
    date: '2026.07.28',
    image: aiAgentProgrammingImage.src,
    imageAlt: 'IBM SkillsBuild IT - AI Agent for Programming certificate',
  },
  {
    issuer: 'CYBRARY',
    title: 'Offensive Security Operations',
    date: '2026.09.10',
    image: offensiveSecurityImage.src,
    imageAlt: 'Cybrary Offensive Security Operations certificate',
  },
  {
    issuer: 'OPSWAT ACADEMY',
    title: 'Introduction to Critical Infrastructure Protection (ICIP)',
    date: '2026.09.17',
    image: icipImage.src,
    imageAlt: 'OPSWAT Academy Introduction to Critical Infrastructure Protection certificate',
    featured: true,
  },
  {
    issuer: 'OPSWAT ACADEMY',
    title: 'OPSWAT Cybersecurity Fundamentals Associate',
    date: '2026.09.17',
    image: ocfaImage.src,
    imageAlt: 'OPSWAT Cybersecurity Fundamentals Associate certificate',
    featured: true,
  },
  {
    issuer: 'PENTESTERLAB',
    title: 'Recon',
    date: '2026.10.13',
    image: reconImage.src,
    imageAlt: 'PentesterLab Recon certificate',
  },
  {
    issuer: 'HACKVISER',
    title: 'Certified Cybersecurity Foundations (CORE)',
    date: '2026.10.20',
    image: coreImage.src,
    imageAlt: 'Hackviser Certified Cybersecurity Foundations certificate',
    featured: true,
  },
  {
    issuer: 'CYBERWARFARE LABS',
    title: 'Certified Cyber Security Analyst (C3SA)',
    date: '2026.10.26',
    image: c3saImage.src,
    imageAlt: 'Cyberwarfare Labs Certified Cyber Security Analyst certificate',
    featured: true,
  },
  {
    issuer: 'ORACLE ACADEMY',
    title: 'Database Programming with SQL',
    date: '2024.01.05',
    image: sqlImage.src,
    imageAlt: 'Oracle Academy Database Programming with SQL certificate',
  },
  {
    issuer: 'ORACLE ACADEMY',
    title: 'Database Foundations',
    date: '2024.01.05',
    image: oracleFoundationsImage.src,
    imageAlt: 'Oracle Academy Database Foundations certificate',
  },
  {
    issuer: 'ORACLE ACADEMY',
    title: 'PL/SQL Database Programming',
    date: '2024.07.02',
    image: oraclePlsqlImage.src,
    imageAlt: 'Oracle Academy PL/SQL Database Programming certificate',
  },
];
