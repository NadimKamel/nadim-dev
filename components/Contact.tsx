'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:Nadimkamel@kamelalaadly.com', label: 'Email' },
    { icon: Linkedin, href: 'www.linkedin.com/in/nadeemkamel', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/NadimKamel', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 glow-text text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-lg focus:border-primary outline-none transition-colors text-foreground"
                  required
                  disabled={submitted}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-lg focus:border-primary outline-none transition-colors text-foreground"
                  required
                  disabled={submitted}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-lg focus:border-primary outline-none transition-colors text-foreground resize-none"
                  required
                  disabled={submitted}
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="glass-effect p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-secondary">
                Let&apos;s Connect
              </h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                I&apos;m always interested in hearing about new projects and opportunities.
                Feel free to reach out if you&apos;d like to collaborate or just chat
                about web development!
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-2">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-primary hover:underline"
                  >
                    Nadimkamel@kamelalaadly.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-2">Location</p>
                  <p className="text-foreground">Block 46 District 9 Nasr city</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div className="glass-effect p-6 rounded-2xl">
              <p className="text-sm text-foreground/60 mb-4">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-3 rounded-lg border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-foreground/60 text-sm border-t border-foreground/10 pt-8"
        >
          <p>
            © 2024 Nadim Kamel. All rights reserved. Crafted with React & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
