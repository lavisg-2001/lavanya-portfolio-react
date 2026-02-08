import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Github, Code2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Let's <span className="underline-accent">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 glow"
        >
          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.a
              href="mailto:lgollapelli891@gmail.com"
              className="flex flex-col items-center p-6 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors group"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium mb-1">Email</span>
              <span className="text-sm text-muted-foreground">lgollapelli891@gmail.com</span>
            </motion.a>

            <motion.div
              className="flex flex-col items-center p-6 bg-secondary/50 rounded-2xl"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium mb-1">Location</span>
              <span className="text-sm text-muted-foreground">Pune, Maharashtra, India</span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-6 bg-secondary/50 rounded-2xl"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium mb-1">Phone</span>
              <span className="text-sm text-muted-foreground">Available on request</span>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/lavanya-gollapelli-245ab61b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/lavisg-2001"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/lavanya_891sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pb-8"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Crafted with passion.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
