/**
 * Single source of truth for all portfolio content.
 * Edit this file to update text, experience, projects and skills across every page.
 */

export const profile = {
  name: 'Nasir Uddin',
  fullName: 'Md. Nasir Uddin',
  initials: 'NU',
  headline: 'Software Engineer',
  roles: ['Full-Stack Developer', 'AI/ML Engineer', 'QA & Test Automation', 'Competitive Programmer'],
  summary:
    'Software Engineer from IIT, University of Dhaka and former Samsung R&D intern. I build fast, production-grade web platforms and LLM-powered tools that make software more reliable.',
  availability: 'Open to software engineering opportunities',
  location: 'Dhaka, Bangladesh',
  email: 'nasir.iit.du@gmail.com',
  altEmail: 'bsse1310@iit.du.ac.bd',
  phone: '01580902180',
  phoneHref: 'tel:+8801580902180',
  photo: '/images/nasir-home.jpg',
  resume: '/Nasir_Uddin_Resume.pdf',
  socials: {
    github: 'https://github.com/Nasir-1310',
    linkedin: 'https://www.linkedin.com/in/nasir-uddin-953080391/',
    twitter: 'https://x.com/Nasir_1310',
  },
};

export const stats = [
  { value: 3.65, decimals: 2, suffix: '', label: 'CGPA', detail: 'B.Sc. in Software Engineering' },
  { value: 300, decimals: 0, suffix: '+', label: 'Problems solved', detail: 'Codeforces & LeetCode' },
  { value: 1000, decimals: 0, suffix: '+', label: 'Students mentored', detail: 'Mathematics & programming' },
  { value: 5, decimals: 0, suffix: '+', label: 'Projects built', detail: 'Web, AI & automation' },
];

export const focusAreas = [
  {
    icon: 'code',
    title: 'Full-Stack Development',
    description:
      'Production-ready platforms with Next.js, TypeScript, Node.js and FastAPI, with SSR, SEO, role-based APIs and cloud deployment.',
    tags: ['Next.js', 'Node.js', 'FastAPI', 'PostgreSQL'],
  },
  {
    icon: 'brain',
    title: 'AI & LLM-Powered Tooling',
    description:
      'Applying LLMs and machine learning to real problems, like guiding automated Android GUI testing to reach features random exploration misses.',
    tags: ['LLMs', 'TensorFlow', 'Scikit-learn', 'NetworkX'],
  },
  {
    icon: 'shield',
    title: 'Quality Engineering',
    description:
      'Industry SQA experience at Samsung R&D: test plans, manual and automated testing, defect validation and EAA-compliant test design.',
    tags: ['Selenium', 'Postman', 'UIAutomator', 'E2E'],
  },
] as const;

export type ExperienceKind = 'Industry' | 'Freelance' | 'Leadership' | 'Teaching';

export interface Experience {
  role: string;
  org: string;
  period: string;
  kind: ExperienceKind;
  points: string[];
  highlight?: string;
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Developer',
    org: 'Freelance',
    period: '2025 — Present',
    kind: 'Freelance',
    points: [
      'Develop and deploy full-stack web applications for clients, including a UK-based professional society platform',
      'Manage cloud infrastructure and deployments on Vercel and AWS S3',
    ],
  },
  {
    role: 'Software Engineer Intern · Quality Innovation Group',
    org: 'Samsung R&D Institute Bangladesh',
    period: 'Mar 2025 — Sep 2025',
    kind: 'Industry',
    featured: true,
    points: [
      'Contributed to quality improvement and innovation initiatives, supporting idea generation and evaluation of software components in an industry-grade R&D environment',
      'Performed SQA activities including manual and automated testing; developed test cases and test plans compliant with EAA standards',
      'Assisted in test execution, analysis and defect validation using automation frameworks and modern QA methodologies',
    ],
    highlight:
      'Recognized with a gift from the Managing Director for resolving Voice of Customer (VOC) issues in Samsung Notes corruption testing.',
  },
  {
    role: 'Academic Team Member',
    org: 'Bangladesh Mathematics Olympiad',
    period: '2023 — 2025',
    kind: 'Leadership',
    points: [
      'Designed and validated 15+ original problems used in official national Olympiad problem sets',
      'Led a team of problem setters and solvers, coordinating task distribution and on-time delivery',
      'Supported event operations for 500+ contestants across regional rounds',
    ],
  },
  {
    role: 'Organizing Secretary',
    org: "IIT Software Engineers' Community",
    period: '2024 — 2025',
    kind: 'Leadership',
    points: [
      'Planned and coordinated events that foster collaboration and knowledge sharing among members',
      'Managed logistics, communications and event execution to grow community engagement',
    ],
  },
  {
    role: 'Trainer',
    org: 'Dhaka University IT Society',
    period: '2024 — 2025',
    kind: 'Teaching',
    points: [
      'Ran hands-on training on programming, Microsoft Excel and PowerPoint for 500+ students',
      'Built structured training materials and mentored students on practical skills',
    ],
  },
  {
    role: 'Ambassador',
    org: 'ICT Olympiad Bangladesh · Season 3',
    period: '2024 — 2025',
    kind: 'Leadership',
    points: [
      'Coordinated between organizers and participants for smooth registration and updates',
      'Assisted event operations across all rounds',
    ],
  },
  {
    role: 'Math Instructor',
    org: 'Big Bang Academy',
    period: '2023 — 2024',
    kind: 'Teaching',
    points: [
      'Taught and guided 1,000+ students in mathematics with real-time problem-solving sessions',
      'Designed interactive teaching strategies to improve engagement and outcomes',
    ],
  },
  {
    role: 'Organizing Secretary',
    org: 'IIT Debating Club',
    period: '2023 — 2024',
    kind: 'Leadership',
    points: ['Planned and organized multiple debate sessions and public-speaking workshops'],
  },
];

export type ProjectCategory = 'Full-Stack' | 'AI & Automation' | 'Desktop';

export type ProjectCoverSpec =
  | { kind: 'browser'; url: string }
  | { kind: 'terminal'; lines: string[] }
  | { kind: 'simulation' };

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  /** Two hex colors for the generated cover art */
  palette: [string, string];
  cover: ProjectCoverSpec;
}

export const projects: Project[] = [
  {
    slug: 'accountants-society',
    title: "The Professional Accountants' Society",
    tagline: 'UK-based full-stack web platform',
    category: 'Full-Stack',
    description:
      'A production-ready full-stack platform built with Next.js and TypeScript, featuring optimized server-side rendering and an SEO-friendly architecture.',
    highlights: [
      'Mobile-first UI with Tailwind CSS, cutting page load time by up to 35%',
      'Cloud deployment and storage on Vercel + AWS S3 with 99.9% uptime',
      'Optimized SSR and SEO-friendly architecture in live production',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'AWS S3', 'Node.js', 'REST API', 'Vercel'],
    githubUrl: 'https://github.com/Nasir-1310/Accountant-Society-UK',
    liveUrl: 'https://www.accountantssociety.org/',
    featured: true,
    palette: ['#7c3aed', '#2563eb'],
    cover: { kind: 'browser', url: 'accountantssociety.org' },
  },
  {
    slug: 'autodroid',
    title: 'AutoDroid',
    tagline: 'LLM-guided Android GUI testing',
    category: 'AI & Automation',
    description:
      'An extension of DroidBot that integrates Large Language Models to raise automated GUI testing coverage on real Android apps.',
    highlights: [
      'Hybrid strategy: autonomous exploration for fast initial coverage',
      'LLM guidance triggered only when needed to target unexplored features',
      'Minimizes costly LLM queries while maximizing coverage',
    ],
    technologies: ['Python', 'LLM', 'Android ADB', 'uiautomator2', 'NetworkX', 'Android SDK'],
    githubUrl: 'https://github.com/Nasir-1310/AutoDroidX',
    featured: true,
    palette: ['#0891b2', '#7c3aed'],
    cover: {
      kind: 'terminal',
      lines: [
        '$ autodroid explore --app target.apk',
        '› autonomous exploration started',
        '› building UI transition graph',
        '› coverage plateau → querying LLM',
        '✓ unexplored feature reached',
      ],
    },
  },
  {
    slug: 'bcs-exam-system',
    title: 'BCS Exam Management System',
    tagline: 'Online examination platform',
    category: 'Full-Stack',
    description:
      'A full-stack examination platform with auto-grading, bulk question uploads and real-time result analytics, serving 1,000+ students with <500ms API responses.',
    highlights: [
      'RESTful API with role-based access for Admin, Moderator, Student and Anonymous users',
      'PostgreSQL schema of 12+ normalized tables supporting concurrent exam sessions',
      'Automated result announcements and a performance analytics dashboard',
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/Nasir-1310/Exam-System',
    liveUrl: 'https://www.exam-systems.com/',
    featured: true,
    palette: ['#4f46e5', '#db2777'],
    cover: { kind: 'browser', url: 'exam-systems.com' },
  },
  {
    slug: 'droidinspect',
    title: 'DroidInspect',
    tagline: 'Automated Android UI inspector',
    category: 'AI & Automation',
    description:
      'An automated Android UI testing tool that generates and executes test cases using ADB and UIAutomator, greatly reducing manual testing overhead.',
    highlights: [
      'Automatic test case generation and execution',
      'Cut manual UI testing effort by ~40%',
      'Repeatable, emulator-based test execution',
    ],
    technologies: ['Python', 'Java', 'JavaScript', 'Android SDK', 'ADB', 'UIAutomator', 'HTML/CSS'],
    githubUrl: 'https://github.com/Nasir-1310/DroidInspect',
    palette: ['#059669', '#0891b2'],
    cover: {
      kind: 'terminal',
      lines: [
        '$ droidinspect run --emulator',
        '› dumping UI hierarchy',
        '› generating test cases',
        '› executing on emulator',
        '✓ test report written',
      ],
    },
  },
  {
    slug: 'learnphysics',
    title: 'LearnPhysics',
    tagline: 'Interactive physics learning app',
    category: 'Desktop',
    description:
      'An interactive C++ graphics application that visualizes core physics concepts, making formulas intuitive and hands-on.',
    highlights: [
      'Simulations for projectile motion, vector analysis and momentum',
      'Real-time parameter manipulation to observe effects instantly',
      'Pairs visualization with interactive controls for deeper understanding',
    ],
    technologies: ['C++', 'graphics.h', 'Physics Simulation'],
    githubUrl: 'https://github.com/Nasir-1310/LearnPhysics',
    palette: ['#ea580c', '#db2777'],
    cover: { kind: 'simulation' },
  },
];

export const skillGroups = [
  { icon: 'layout', title: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
  { icon: 'server', title: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'Java (Spring Boot)', 'PHP', 'RESTful APIs'] },
  { icon: 'code', title: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'] },
  { icon: 'database', title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'] },
  { icon: 'brain', title: 'AI & Machine Learning', items: ['TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'OpenAI API', 'Model Training & Evaluation'] },
  { icon: 'flask', title: 'Testing & QA', items: ['Selenium', 'Postman', 'E2E Testing', 'Unit & Integration', 'API Testing', 'EAA Testing'] },
  { icon: 'cloud', title: 'DevOps & Cloud', items: ['Docker', 'GitHub Actions', 'CI/CD', 'AWS', 'Vercel', 'Netlify', 'Heroku', 'Linux/WSL'] },
  { icon: 'wrench', title: 'Tools', items: ['Git & GitHub', 'VS Code', 'Figma', 'Canva', 'CLI'] },
] as const;

export const professionalSkills = [
  'Leadership & Team Management',
  'Problem Solving & Critical Thinking',
  'Communication & Collaboration',
  'Project Planning & Coordination',
  'Teaching & Mentorship',
  'Research & Analytical Skills',
  'Adaptability & Continuous Learning',
];

export const marqueeTech = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB',
  'TensorFlow', 'Scikit-learn', 'Docker', 'AWS', 'Tailwind CSS', 'Selenium', 'Java', 'C++', 'GitHub Actions', 'Git',
];

export const achievements = [
  {
    icon: 'award',
    title: 'Recognized by the MD, Samsung R&D Institute Bangladesh',
    description:
      'Awarded for excellent performance on Samsung projects: resolved Voice of Customer issues in Samsung Notes corruption testing.',
    featured: true,
  },
  {
    icon: 'trophy',
    title: 'ICPC Asia Dhaka Regional 2022',
    description: 'Honorable mention in the online preliminary contest.',
  },
  {
    icon: 'medal',
    title: 'Finalist, DU ITVerse 2.0',
    description: 'Project showcasing competition, 2024.',
  },
  {
    icon: 'target',
    title: '300+ Problems Solved',
    description: 'Competitive programming on Codeforces and LeetCode.',
  },
  {
    icon: 'book',
    title: "'Shera Pathok' Award",
    description: 'Bisso Sahitya Kendro, three consecutive years (2015–2017).',
  },
] as const;

export const education = [
  {
    school: 'University of Dhaka',
    unit: 'Institute of Information Technology (IIT)',
    degree: 'B.Sc. in Software Engineering',
    period: '2022 — 2026',
    score: 'CGPA 3.65 / 4.00',
  },
  {
    school: 'Netrakona Govt. College',
    unit: 'Netrakona',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2018 — 2020',
    score: 'GPA 5.00 / 5.00',
  },
];
