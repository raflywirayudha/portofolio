export interface NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export const navLinks: NavLink[] = [
  { href: '#about', label: '<about_me>' },
  { href: '#education', label: '<education>' },
  { href: '#experience', label: '<experience>' },
  { href: '#portfolio', label: '<portfolio>' },
  { href: '#certifications', label: '<certifications>' },
  { href: '#contact', label: '<contact>' },
];