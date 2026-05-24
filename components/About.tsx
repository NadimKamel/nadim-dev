'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 glow-text text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Who I Am
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              I&apos;m a passionate Front-End React Developer with a keen eye for
              design and user experience. With several years of experience
              building responsive web applications, I specialize in creating
              intuitive interfaces that users love.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              What I Do
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              I transform ideas into beautiful, functional digital products.
              From concept to deployment, I focus on clean code, performance,
              and creating experiences that are both beautiful and practical.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">My Approach</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'User Focused',
                description: 'Every decision is made with the end user in mind',
              },
              {
                title: 'Performance First',
                description: 'Speed and optimization are core to my work',
              },
              {
                title: 'Clean Code',
                description: 'Maintainable, scalable, and well-documented code',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
