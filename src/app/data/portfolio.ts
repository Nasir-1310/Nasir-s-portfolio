/**
 * Single source of truth for all portfolio content.
 * Edit this file to update text, experience, projects and skills across every page.
 */

export const profile = {
  name: 'Nasir Uddin',
  fullName: 'Md. Nasir Uddin',
  initials: 'NU',
  headline: 'Software Engineer',
  roles: ['Research Associate', 'Machine Learning & AI', 'Full-Stack Developer', 'QA & Test Automation'],
  summary:
    'Software Engineering graduate from the University of Dhaka and Research Associate at BIRDI, where I train and evaluate LLMs for Verilog code generation. Former Software QA Intern at Samsung R&D and full-stack developer.',
  availability: 'Research Associate at BIRDI',
  location: 'Dhaka, Bangladesh',
  email: 'bsse1310@iit.du.ac.bd',
  altEmail: 'nasir.iit.du@gmail.com',
  phone: '+880 1580-902180',
  phoneHref: 'tel:+8801580902180',
  photo: '/images/nasir-home.jpg',
  resume: '/Md_Nasir_Uddin_CV.pdf',
  resumeFileName: 'Md_Nasir_Uddin_CV.pdf',
  socials: {
    github: 'https://github.com/Nasir-1310',
    linkedin: 'https://www.linkedin.com/in/nasir-uddin-953080391/',
    twitter: 'https://x.com/Nasir_1310',
  },
};

export const stats = [
  { value: 3.69, decimals: 2, suffix: '', label: 'CGPA', detail: 'B.Sc. in Software Engineering' },
  { value: 300, decimals: 0, suffix: '+', label: 'Problems solved', detail: 'Codeforces & LeetCode' },
  { value: 1000, decimals: 0, suffix: '+', label: 'Students mentored', detail: 'Mathematics & programming' },
  { value: 6378, decimals: 0, suffix: '', label: 'Verified RTL samples', detail: 'Generated for CompositeRTL' },
];

export const focusAreas = [
  {
    icon: 'brain',
    title: 'LLMs for Code Generation',
    description:
      'Research on LLM-guided RTL generation: building verified Verilog datasets, fine-tuning code models with QLoRA and benchmarking them with pass@k.',
    tags: ['PyTorch', 'Hugging Face', 'QLoRA', 'Verilog'],
  },
  {
    icon: 'code',
    title: 'Full-Stack Development',
    description:
      'Production-ready platforms with Next.js, TypeScript, Node.js and FastAPI, with SSR, SEO, role-based APIs and cloud deployment.',
    tags: ['Next.js', 'Node.js', 'FastAPI', 'PostgreSQL'],
  },
  {
    icon: 'shield',
    title: 'Quality Engineering',
    description:
      'Industry SQA experience at Samsung R&D: test plans, manual and automated testing, defect validation and EAA-compliant test design.',
    tags: ['Selenium', 'Postman', 'E2E', 'EAA'],
  },
] as const;

export type ExperienceKind = 'Research' | 'Industry' | 'Leadership' | 'Teaching';

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
    role: 'Research Associate · LLM-Guided RTL Code Generation',
    org: 'Bangladesh Industry of Research, Development and Innovation (BIRDI)',
    period: 'May 2026 — Present',
    kind: 'Research',
    featured: true,
    points: [
      'Research LLM-guided RTL code generation across dataset preparation, model training and benchmark evaluation, focused on the functional accuracy of generated Verilog',
      'Built CompositeRTL, a synthetic multi-behavior extension of VerilogEval: generated 6,378 composite spec–RTL–testbench triples, all functionally verified through an automated Icarus Verilog compile-and-simulate loop with LLM-driven repair',
      'Fine-tuned Qwen2.5-Coder-7B-Instruct with QLoRA (4-bit NF4, TRL SFTTrainer, PEFT) on a single 16 GB GPU, with config-driven pipelines for training, resumable checkpointing, adapter merging and inference',
      'Traced a post-fine-tuning accuracy regression to the training data (~43% of OpenRTLSet samples did not compile) and added a compile-validation cleaning stage plus leakage-free, problem-level train/test splits',
      'Built VerilogEval and RTLLM v2 evaluation harnesses with unbiased pass@k; benchmarked Qwen2.5-Coder (7B/14B), DeepSeek-Coder-6.7B, Qwen3.5-9B and GPT-series models across difficulty tiers',
    ],
    highlight: 'Co-authoring a research paper on the CompositeRTL dataset (in preparation).',
  },
  {
    role: 'Intern · Quality Innovation Group',
    org: 'Samsung R&D Institute Bangladesh',
    period: 'Mar 2025 — Sep 2025',
    kind: 'Industry',
    points: [
      'Performed Software Quality Assurance (manual and automated testing); developed test cases and test plans compliant with EAA standards',
      'Executed tests, analyzed results and validated defects using industry automation frameworks and QA methodologies',
    ],
    highlight:
      'Recognized by the Managing Director for resolving Voice of Customer (VOC) issues on Samsung Notes data-corruption testing.',
  },
  {
    role: 'Short Course Instructor (Part-time)',
    org: 'Institute of Information Technology (IIT), University of Dhaka',
    period: 'Apr 2026 — Present',
    kind: 'Teaching',
    points: [
      'Teach short professional courses on Python programming, Microsoft Office and practical AI tools to students and working professionals',
      'Design course materials, hands-on exercises and assessments aligned with industry needs',
    ],
  },
  {
    role: 'Academic Team Member',
    org: 'Bangladesh Mathematical Olympiad',
    period: '2023 — 2025',
    kind: 'Leadership',
    points: [
      'Designed and validated 15+ original problems for regional rounds, contributing to official national Olympiad problem sets',
      'Led a team of problem setters and solvers, coordinating task distribution and timely delivery',
      'Supported event logistics across multiple Olympiad rounds for 500+ contestants',
    ],
  },
  {
    role: 'Organizing Secretary',
    org: "IIT Software Engineers' Community, University of Dhaka",
    period: '2024 — 2025',
    kind: 'Leadership',
    points: [
      'Planned and coordinated events and knowledge-sharing activities to foster collaboration among members',
      'Managed logistics, communications and event execution to strengthen community engagement',
    ],
  },
  {
    role: 'Trainer',
    org: 'Dhaka University IT Society',
    period: '2024 — 2025',
    kind: 'Teaching',
    points: [
      'Delivered hands-on training on programming, Microsoft Excel and PowerPoint to 500+ students; developed structured training materials',
    ],
  },
  {
    role: 'Mathematics Instructor',
    org: 'Big Bang Academy',
    period: '2023 — 2024',
    kind: 'Teaching',
    points: ['Taught 1,000+ students through interactive, real-time problem-solving sessions'],
  },
];

export type ProjectCategory = 'AI & Research' | 'Full-Stack' | 'Desktop';

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
  githubUrl?: string;
  liveUrl?: string;
  /** Shown instead of links when a project has no public code, e.g. unpublished research */
  status?: string;
  featured?: boolean;
  /** Two hex colors for the generated cover art */
  palette: [string, string];
  cover: ProjectCoverSpec;
}

export const projects: Project[] = [
  {
    slug: 'compositertl',
    title: 'CompositeRTL',
    tagline: 'Verified dataset for LLM Verilog generation',
    category: 'AI & Research',
    description:
      'A synthetic multi-behavior extension of VerilogEval, built at BIRDI to train and benchmark LLMs on generating functionally correct RTL.',
    highlights: [
      'Generated 6,378 composite spec–RTL–testbench triples, all functionally verified',
      'Verified by an automated Icarus Verilog compile-and-simulate loop with LLM-driven repair',
      'Used to fine-tune Qwen2.5-Coder-7B with QLoRA and benchmark models with unbiased pass@k',
    ],
    technologies: ['Python', 'Verilog', 'Icarus Verilog', 'PyTorch', 'Hugging Face', 'QLoRA', 'VerilogEval', 'RTLLM'],
    status: 'Paper in preparation',
    featured: true,
    palette: ['#c026d3', '#4f46e5'],
    cover: {
      kind: 'terminal',
      lines: [
        '$ generate --spec composite --repair llm',
        '› 6,378 spec–RTL–testbench triples',
        '› iverilog compile + simulate',
        '› failing samples → LLM repair',
        '✓ 6,378 / 6,378 samples verified',
      ],
    },
  },
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
    category: 'AI & Research',
    description:
      'An extension of DroidBot that integrates Large Language Models to raise automated GUI testing coverage on real Android apps.',
    highlights: [
      'Hybrid strategy: autonomous exploration for fast initial coverage',
      'LLM guidance triggered only when needed to target unexplored features',
      'Minimizes costly LLM queries while maximizing coverage',
    ],
    technologies: ['Python', 'LLM', 'Android ADB', 'uiautomator2', 'NetworkX', 'Android SDK'],
    githubUrl: 'https://github.com/Nasir-1310/AutoDroidX',
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
    slug: 'learnphysics',
    title: 'LearnPhysics',
    tagline: 'Interactive physics learning app',
    category: 'Desktop',
    description:
      'An interactive C++ graphics application that visualizes core physics concepts, making formulas intuitive and hands-on.',
    highlights: [
      'Simulations of projectile motion, vectors and momentum',
      'Adjustable parameters with real-time visualization',
      'Pairs visualization with interactive controls for deeper understanding',
    ],
    technologies: ['C++', 'graphics.h'],
    githubUrl: 'https://github.com/Nasir-1310/LearnPhysics',
    palette: ['#ea580c', '#db2777'],
    cover: { kind: 'simulation' },
  },
];

export const skillGroups = [
  { icon: 'brain', title: 'LLM & ML', items: ['PyTorch', 'Hugging Face (Transformers, TRL, PEFT)', 'QLoRA / LoRA', 'bitsandbytes', 'Unsloth', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'OpenAI API', 'AWS Bedrock', 'OpenRouter'] },
  { icon: 'cpu', title: 'Hardware Design', items: ['Verilog', 'SystemVerilog', 'Icarus Verilog', 'VerilogEval', 'RTLLM', 'Testbench development'] },
  { icon: 'code', title: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript'] },
  { icon: 'layout', title: 'Web', items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Spring Boot', 'Tailwind CSS', 'REST APIs'] },
  { icon: 'database', title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'] },
  { icon: 'flask', title: 'Testing & DevOps', items: ['Selenium', 'Postman', 'Unit / Integration / E2E', 'EAA testing', 'Docker', 'GitHub Actions', 'CI/CD', 'AWS', 'Vercel', 'Linux/WSL', 'Git'] },
] as const;

export const professionalSkills = [
  'Research & Analytical Thinking',
  'Teaching & Mentorship',
  'Leadership',
  'Communication',
  'Project Planning',
];

export const marqueeTech = [
  'PyTorch', 'Hugging Face', 'QLoRA', 'Verilog', 'Python', 'React', 'Next.js', 'TypeScript', 'Node.js', 'FastAPI',
  'PostgreSQL', 'MongoDB', 'TensorFlow', 'Scikit-learn', 'Docker', 'AWS', 'Selenium', 'C++', 'GitHub Actions',
];

export const achievements = [
  {
    icon: 'award',
    title: 'Recognized by the MD, Samsung R&D Institute Bangladesh',
    description:
      'Recognition gift for outstanding project contributions, including resolving Voice of Customer issues on Samsung Notes data-corruption testing.',
    featured: true,
  },
  {
    icon: 'trophy',
    title: 'ICPC Asia Dhaka Regional 2022',
    description: 'Honorable Mention, Online Preliminary Contest.',
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
    description: 'Bishwa Sahitya Kendra, three consecutive years (2015–2017).',
  },
] as const;

export const education = [
  {
    school: 'University of Dhaka',
    unit: 'Institute of Information Technology (IIT)',
    degree: 'B.Sc. in Software Engineering',
    period: '2022 — Feb 2026',
    score: 'CGPA 3.69 / 4.00',
  },
  {
    school: 'Netrakona Govt. College',
    unit: 'Netrakona',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2018 — 2020',
    score: 'GPA 5.00 / 5.00',
  },
];
