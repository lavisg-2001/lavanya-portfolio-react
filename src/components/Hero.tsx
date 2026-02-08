import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Github, Code2 } from 'lucide-react';

import profilePhoto from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Welcome Introduction */}
            <motion.p
              className="text-lg text-muted-foreground mb-"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Hey there👋, I'm
            </motion.p>

            {/* Name Section */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="underline-accent">Lavanya Gollapelli</span>
              </h1>
            </motion.div>

            {/* Role Badge */}
            <motion.span
              className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-8 relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 group-hover:opacity-30 transition-opacity" />
              <span className="relative z-10">Software Engineer</span>
            </motion.span>

            {/* Crafting Section */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
                <span className="text-gradient italic">Crafting Digital Experiences</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Building scalable microservices, real-time systems, and elegant interfaces.
                Passionate about clean architecture and impactful solutions.
              </p>
            </motion.div>

            {/* Contact Info Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="mailto:lgollapelli891@gmail.com"
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>lgollapelli891@gmail.com</span>
              </a>
              <span className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Pune, Maharashtra, India</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://www.linkedin.com/in/lavanya-gollapelli-245ab61b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/lavisg-2001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform"
                whileHover={{ y: -3 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/lavanya_891sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform"
                whileHover={{ y: -3 }}
              >
                <Code2 className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative gradient blob */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl animate-float" />
            </div>

            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glow ring-1 ring-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-xl shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-medium">2+ Years of Experience</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;