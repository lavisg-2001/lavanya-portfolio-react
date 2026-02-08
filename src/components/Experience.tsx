import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Infometh Solutions Pvt. Ltd.',
    domain: 'Restaurant Management POS, SaaS',
    period: 'Feb 2025 - Present',
    highlights: [
      'Developed scalable microservices using Java, Spring Boot, Docker, and Amazon ECS for a multi-tenant restaurant POS platform serving 10,000+ daily active users',
      'Implemented JWT, Google OAuth, and RBAC authentication eliminating unauthorized access',
      'Built CI/CD pipelines with GitHub Actions enabling daily zero-downtime deployments',
      'Integrated PhonePe payment gateway with robust error handling and retry mechanisms',
      'Migrated critical tables from MySQL to MongoDB, reducing query times from 3-5 seconds to under 1 second',
      'Created MongoDB aggregation pipelines for real-time business analytics',
      'Built WhatsApp notification system using Business API for automated receipts',
      'Worked on WebSocket communication for real-time restaurant printing',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Manuh Global Technologies Pvt. Ltd.',
    domain: 'Insurance Domain',
    period: 'Oct 2023 - Jan 2025',
    highlights: [
      'Developed enterprise RESTful APIs and microservices using Java, Spring Boot, and JWT authentication',
      'Wrote unit tests achieving 85% code coverage, monitored with SonarQube',
      'Deployed microservices to Amazon EKS using Docker and CI/CD pipelines',
      'Built near real-time data pipelines using Confluent Kafka for event-driven architectures',
      'Executed data migrations using IBM InfoSphere DataStage and Informatica IICS',
      'Participated across end-to-end SDLC phases including development, UAT, and production monitoring',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Career <span className="underline-accent">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
              )}

              <div className="glass-card rounded-2xl p-6 md:p-8 glow">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="font-serif text-2xl font-medium">
                        {exp.role}
                      </h3>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground italic mb-4">{exp.domain}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: hIndex * 0.05 }}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
