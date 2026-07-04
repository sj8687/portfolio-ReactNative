import { Ionicons } from '@expo/vector-icons';

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
}

export interface SocialLink {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  url: string;
}

// ---- EDIT EVERYTHING BELOW WITH YOUR OWN DETAILS ----

export const profile = {
  name: 'Shreyash Jadhav',
  title: 'Full-Stack & Mobile Developer',
  tagline: 'I build production-ready web and mobile apps end to end.',
  bio:
    'I am a full-stack developer with hands-on experience across frontend, backend, ' +
    'and database layers. My recent work spans React Native/Expo mobile apps, React ' +
    'web applications, and Node/Express APIs backed by PostgreSQL and Prisma.',
  location: 'Your City, Country',
  email: 'you@example.com',
  phone: '+1 234 567 8900',
  avatar: 'https://i.pravatar.cc/300',
};

export const skills: string[] = [
  'React Native',
  'Expo',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'Prisma',
  'Axios',
  'React Navigation',
  'Tailwind CSS',
  'React Router DOM',
  'REST APIs',
  'Git & GitHub',
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Expo Portfolio App',
    description:
      'A multi-screen React Native portfolio app with authentication, bottom tab ' +
      'navigation, a reusable component library, and a demo backend API layer using axios.',
    stack: ['React Native', 'Expo', 'Context API', 'Axios'],
  },
  {
    id: '2',
    title: 'FTII Website Redesign',
    description:
      'Full multi-page React redesign with a mega-menu, mobile navigation, and ' +
      'section-based homepage.',
    stack: ['React', 'Vite', 'React Router DOM', 'Tailwind CSS'],
  },
  {
    id: '3',
    title: 'Product Browsing Platform',
    description:
      'Full-stack app supporting stable keyset pagination over ~200k products under ' +
      'concurrent writes, verified with live concurrency testing.',
    stack: ['React', 'Express.js', 'PostgreSQL', 'Prisma'],
  },
  {
    id: '4',
    title: 'Store Rating App',
    description:
      'Role-based app (Admin, Normal User, Store Owner) with JWT auth, RBAC, and ' +
      'sortable/filterable tables.',
    stack: ['Express.js', 'PostgreSQL', 'React', 'JWT'],
  },
];

export const experience: Experience[] = [
  {
    id: '1',
    role: 'Full-Stack Developer (Freelance / Internship Projects)',
    organization: 'Self-directed & internship challenges',
    period: '2025 — Present',
    summary:
      'Built production-style full-stack and mobile applications, focusing on clean ' +
      'component architecture, API design, and database performance.',
  },
];

export const socialLinks: SocialLink[] = [
  { id: '1', label: 'GitHub', icon: 'logo-github', url: 'https://github.com/yourusername' },
  { id: '2', label: 'LinkedIn', icon: 'logo-linkedin', url: 'https://linkedin.com/in/yourusername' },
  { id: '3', label: 'Twitter', icon: 'logo-twitter', url: 'https://twitter.com/yourusername' },
  { id: '4', label: 'Email', icon: 'mail-outline', url: 'mailto:you@example.com' },
];
