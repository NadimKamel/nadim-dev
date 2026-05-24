'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  linkedin: string;
  demo: string;
}

export function Projects() {
  const projects: ProjectData[] = [
    {
      id: 1,
      title: 'DivisionWear',
      description:
        'A luxury fashion e-commerce platform with advanced filtering, user authentication, and seamless checkout experience.',
      image: '/project-divisionwear.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      linkedin: 'https://www.linkedin.com/in/nadeemkamel/',
      demo: 'www.divisionwearr.com',
    },
    {
      id: 2,
      title: 'Working Sphere 360',
      description:
        'Comprehensive project management and team collaboration platform with real-time updates and analytics dashboard.',
      image: '/project-workingsphere.jpg',
      technologies: ['React', 'TypeScript', 'WebSocket', 'Node.js'],
      linkedin: 'https://www.linkedin.com/in/nadeemkamel/',
      demo: 'www.workingsphere360.com',
    },
    {
      id: 3,
      title: 'El Malek For Silver',
      description:
        'Premium jewelry e-commerce platform showcasing luxury silver collections with detailed product galleries.',
      image: '/project-elmalek.jpg',
      technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS'],
      linkedin: 'https://www.linkedin.com/in/nadeemkamel/',
      demo: 'https://elmalekforsilver.com/',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 glow-text text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group glass-effect rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.linkedin}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-foreground/20 rounded-lg hover:border-primary hover:text-primary transition-colors text-sm"
                  >
                    <Github size={16} />
                    Linkedin
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Website
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
