'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: 'Front-End Web Developer',
      company: 'DivisionWear',
      period: 'May 2025 - Jun 2025',
      description:
        'Developed and maintained a modern fashion e-commerce website with responsive user interfaces and optimized shopping experience.',
      highlights: [
        'Built responsive product pages and shopping flows',
        'Improved mobile responsiveness and UI consistency',
        'Worked with Shopify customization and deployment',
      ],
    },

    {
      title: 'Web Developer',
      company: 'Working Sphere 360',
      period: 'Mar 2025 - May 2025',
      description:
        'Built a coworking space platform focused on usability, accessibility, and modern responsive layouts.',
      highlights: [
        'Implemented responsive front-end components',
        'Optimized layouts for accessibility and user experience',
        'Collaborated remotely on clean UI implementation',
      ],
    },

    {
      title: 'Web Developer',
      company: 'DMS Developer',
      period: 'Jun 2025 - Jul 2025',
      description:
        'Developed a professional company website with modern UI and responsive performance.',
      highlights: [
        'Converted design concepts into clean maintainable code',
        'Improved website responsiveness across devices',
        'Assisted with deployment and hosting workflows',
      ],
    },

    {
      title: 'Self-Employed Web Developer',
      company: 'Freelance & Personal Brand',
      period: '2025 - Present',
      description:
        'Managing and developing e-commerce experiences and personal web projects with focus on branding, responsive design, and user experience.',
      highlights: [
        'Built and managed modern web experiences',
        'Handled hosting, deployment, and domain configuration',
        'Improved branding and digital presentation',
      ],
    },

    {
      title: 'E-Commerce Web Developer',
      company: 'El Malek For Silver',
      period: 'Feb 2026 - Mar 2026',
      description:
        'Built and customized an e-commerce jewelry website with improved online shopping experience.',
      highlights: [
        'Customized Shopify storefront and product pages',
        'Managed hosting and domain setup',
        'Enhanced product presentation and responsiveness',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-20 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/40 to-primary/80 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className={`relative pl-14 md:pl-0 md:w-1/2 ${
                  index % 2 === 0
                    ? 'md:pr-14 md:text-right'
                    : 'md:ml-auto md:pl-14'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-4 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" />

                {/* Card */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                  {/* Job Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>

                  {/* Company */}
                  <p className="text-primary font-medium mb-1">
                    {experience.company}
                  </p>

                  {/* Period */}
                  <p className="text-sm text-white/50 mb-5">
                    {experience.period}
                  </p>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {experience.highlights.map((highlight) => (
                      <motion.li
                        key={highlight}
                        initial={{
                          opacity: 0,
                          x: index % 2 === 0 ? 20 : -20,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className={`flex gap-3 text-sm text-white/60 ${
                          index % 2 === 0
                            ? 'md:justify-end'
                            : 'justify-start'
                        }`}
                      >
                        <ArrowUpRight
                          size={16}
                          className="text-primary mt-1 shrink-0"
                        />

                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}