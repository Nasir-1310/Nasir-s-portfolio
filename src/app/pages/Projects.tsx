import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'The Professional Accountants\' Society',
      description: 'Developed and deployed a production-ready UK-based full-stack web platform using Next.js and TypeScript, with optimized server-side rendering (SSR) and SEO-friendly architecture.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdlYnNpdGV8ZW58MHx8fHwxNzQ0NjkwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'AWS S3', 'REST API', 'Node.js', 'Vercel'],
      githubUrl: 'https://github.com/Nasir-1310/Accountant-Society-UK',
      liveUrl: 'https://www.accountantssociety.org/',
      highlights: [
        'Optimized SSR and SEO-friendly architecture',
        'Fully responsive, mobile-first UI reducing page load time by 35%',
        'Cloud deployment with 99.9% uptime (Vercel + AWS S3)'
      ]
    },
    {
      id: 2,
      title: 'AutoDroid - LLM-Guided Android Testing',
      description: 'Developed and extended Droidbot integrating Large Language Models to enhance automated GUI testing coverage for real Android apps.',
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwZGV2ZWxvcG1lbnQlMjB0ZXN0aW5nfGVufDB8fHx8MTc0NDY5MDQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Python', 'Android ADB', 'uiautomator2', 'LLM', 'NetworkX', 'Android SDK'],
      githubUrl: 'https://github.com/Nasir-1310/AutoDroidX',
      highlights: [
        'Integrated LLMs for intelligent automated GUI testing',
        'Smart hybrid strategy: autonomous exploration + LLM guidance',
        'Minimized costly LLM queries while maximizing test coverage'
      ]
    },
    {
      id: 3,
      title: 'BCS Exam Management System',
      description: 'Built full-stack examination platform with auto-grading, bulk question uploads, and real-time result analytics serving 1000+ students with <500ms API response time.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBleGFtJTIwcGxhdGZvcm18ZW58MHx8fHwxNzQ0NjkwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/Nasir-1310/Exam-System',
      liveUrl: 'https://www.exam-systems.com/',
      highlights: [
        'Auto-grading system serving 1000+ students',
        'RESTful API with role-based access control',
        'Scalable PostgreSQL architecture with 12+ normalized tables'
      ]
    },
    {
      id: 4,
      title: 'DroidInspect - Auto UI Inspector',
      description: 'Built an automated Android UI testing tool that generates and executes test cases using ADB and UIAutomator, significantly reducing manual testing overhead.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB0ZXN0aW5nfGVufDB8fHx8MTc0NDY5MDQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'Android SDK', 'ADB', 'UIAutomator'],
      githubUrl: 'https://github.com/Nasir-1310/DroidInspect',
      highlights: [
        'Automated test case generation and execution',
        'Cut manual UI testing effort by 40%',
        'Repeatable emulator-based test execution'
      ]
    },
    {
      id: 5,
      title: 'LearnPhysics - Interactive Learning App',
      description: 'Developed an interactive learning application in C++ using graphics to visualize core physics concepts, making learning intuitive and engaging.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNzJTIwc2ltdWxhdGlvbnxlbnwwfHx8fDE3NDQ2OTA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['C++', 'graphics.h', 'Physics Simulations'],
      githubUrl: 'https://github.com/Nasir-1310/LearnPhysics',
      highlights: [
        'Interactive physics concept visualizations',
        'Simulations for projectile motion, vector analysis, and mechanics',
        'Real-time parameter manipulation for hands-on learning'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A collection of my recent work and side projects showcasing various technologies and solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-2xl transition-all"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/50 text-accent-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-border hover:bg-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-12 rounded-3xl bg-accent/30 border border-border"
        >
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new projects and creative ideas.
          </p>
          <a
            href="https://github.com/Nasir-1310"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}
