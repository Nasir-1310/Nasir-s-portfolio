import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Hi, I'm <span className="text-foreground">Nasir Uddin</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                AI/ML Engineer & Full-Stack Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base text-muted-foreground max-w-xl"
              >
                Passionate about building intelligent systems and elegant user experiences. 
                Specializing in machine learning, web development, and cloud architecture.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-all hover:scale-105"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-xl hover:bg-accent transition-colors"
                >
                  Contact Me
                </Link>

                <a
                  href="/src/imports/Nasir_Uddin_Resume_(1).pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-xl hover:bg-accent transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 pt-4"
              >
                <a
                  href="https://github.com/Nasir-1310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border hover:bg-accent transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nasir-uddin-953080391/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border hover:bg-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <ImageWithFallback
                    src="/src/imports/nasir-home.jpg"
                    alt="Profile"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/30 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-accent/20 to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Client Satisfaction', value: '100%' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-accent/50 hover:bg-accent transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A journey through various roles and organizations that shaped my professional career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Software Engineer(Intern)',
                company: 'Samsung R&D Institute Bangladesh',
                period: '3 MAR 2025 - 30 SEP 2025',
                image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwb2ZmaWNlfGVufDB8fHx8MTc0NDY5MDQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
                responsibilities: [
                  'Contributed to quality improvement and innovation initiatives',
                  'Performed Software Quality Assurance (SQA) activities including manual and automated testing',
                  'Developed test cases and test plans in compliance with EAA standards'
                ]
              },
              {
                title: 'Academic Team Member',
                company: 'Bangladesh Mathematics Olympiads',
                period: '2023 - 2025',
                image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGVkdWNhdGlvbnxlbnwwfHx8fDE3NDQ2OTA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                responsibilities: [
                  'Designed and validated 15+ original mathematical problems for regional competitions',
                  'Led a team of problem setters and solvers',
                  'Supported event logistics for 500+ contestants across regional competitions'
                ]
              },
              {
                title: 'Organizing Secretary',
                company: 'IIT Software Engineers\' Community',
                period: '2024 - 2025',
                image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tbXVuaXR5fGVufDB8fHx8MTc0NDY5MDQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
                responsibilities: [
                  'Planned and coordinated impactful events and activities',
                  'Enhanced community engagement through efficient event execution',
                  'Managed logistics and communications for tech community'
                ]
              },
              {
                title: 'Trainer',
                company: 'Dhaka University IT Society',
                period: '2018 - 2020',
                image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGluZyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ0NjkwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                responsibilities: [
                  'Conducted hands-on training sessions for 500+ students',
                  'Developed structured training materials for programming and Microsoft Office',
                  'Mentored students to enhance their technical skills'
                ]
              },
              {
                title: 'Organizing Secretary',
                company: 'IIT Debating Club',
                period: '2022 - 2026',
                image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWJhdGUlMjBjb21wZXRpdGlvbnxlbnwwfHx8fDE3NDQ2OTA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                responsibilities: [
                  'Managed multiple debate sessions and workshops',
                  'Coordinated event planning and organizing',
                  'Facilitated skill development in public speaking'
                ]
              },
              {
                title: 'Math Instructor',
                company: 'Big Bang Academy',
                period: '2022 - 2026',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwdGVhY2hlcnxlbnwwfHx8fDE3NDQ2OTA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                responsibilities: [
                  'Taught and guided over 1000 students in mathematics',
                  'Conducted real-time problem-solving sessions',
                  'Designed interactive teaching strategies to enhance learning outcomes'
                ]
              },
              {
                title: 'Ambassador',
                company: 'ICT Olympiad Bangladesh Season 3',
                period: '2022 - 2026',
                image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBldmVudHxlbnwwfHx8fDE3NDQ2OTA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                responsibilities: [
                  'Developed leadership and communication skills',
                  'Coordinated between organizers and participants',
                  'Assisted event operations for smooth participation'
                ]
              }
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border hover:shadow-2xl transition-all"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85 group-hover:from-background/90 group-hover:via-background/85 group-hover:to-background/80 transition-all" />
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{experience.title}</h3>
                      <p className="text-sm text-muted-foreground">{experience.company}</p>
                    </div>
                    <span className="text-xs bg-accent/80 px-3 py-1 rounded-full whitespace-nowrap">
                      {experience.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {experience.responsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-1 text-xs">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-to-br from-accent/50 to-accent/20 border border-border"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl hover:opacity-90 transition-all hover:scale-105"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
