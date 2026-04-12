import { motion } from 'motion/react';
import { Code, Database, Cloud, Brain, Smartphone, Globe } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'TensorFlow, PyTorch, scikit-learn, NLP, Computer Vision',
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS, Motion',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Python, FastAPI, PostgreSQL, MongoDB',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS, Docker, Kubernetes, CI/CD, Terraform',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native, Flutter, iOS, Android',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'REST APIs, GraphQL, WebSockets, Microservices',
    },
  ];

  const experiences = [
    {
      year: '3 MAR 2025 - 30 SEP 2025',
      role: 'Software Engineer(Intern)',
      company: 'Samsung R&D Institute Bangladesh',
      description: 'Contributed to the development of innovative software solutions, collaborating with cross-functional teams to design and implement features that enhance user experience and performance.',
    },
    {
      year: '2025 - Present',
      role: 'Full Stack Developer',
      company: 'Working as a freelancer',
      description: 'Developed web applications and managed cloud infrastructure',
    },
  //   {
  //     year: '2020 - 2022',
  //     role: 'Software Engineer',
  //     company: 'StartUp Ventures',
  //     description: 'Built MVPs and prototypes for various startup projects',
  //   },
  //   {
  //     year: '2019 - 2020',
  //     role: 'Junior Developer',
  //     company: 'CodeCraft Agency',
  //     description: 'Contributed to client projects and learned best practices',
  //   },
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Passionate software engineer with expertise in AI/ML and full-stack development
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-accent/30 border border-border">
            <h2 className="text-2xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a software engineer with a passion for building innovative solutions that make a difference. 
                With over 1 years of experience in the industry, I've had the opportunity to work on diverse 
                projects ranging from AI-powered applications to large-scale web platforms.
              </p>
              <p>
                My journey in tech started with a fascination for how things work, which led me to pursue 
                computer science. Since then, I've continuously expanded my skill set, staying current with 
                the latest technologies and best practices in software development.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, writing technical 
                articles, or exploring new technologies. I believe in continuous learning and sharing knowledge 
                with the community.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-foreground border-4 border-background" />
                
                <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                  <div className="text-sm text-muted-foreground mb-2">{exp.year}</div>
                  <h3 className="font-semibold text-lg mb-1">{exp.role}</h3>
                  <div className="text-sm text-muted-foreground mb-3">{exp.company}</div>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
