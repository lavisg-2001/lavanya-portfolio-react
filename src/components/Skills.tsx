import { motion } from 'framer-motion';
import javaSpringCert from '../assets/java-spring-cert.pdf';
import dockerCert from '../assets/docker-cert.pdf';
import gcpCert from '../assets/gcp-cert.pdf'; 
import ibmDataCert from '../assets/ibm-data-cert.pdf';
import gitCert from '../assets/git-cert.pdf';
import scalerKafkaCert from '../assets/scaler-kafka.jpg';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Frameworks',
    skills: ['Spring Boot', 'Angular', 'ReactJS', 'JWT Auth'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Rancher', 'CI/CD Pipelines', 'Git', 'ECS', 'EKS'],
  },
  {
    title: 'Data Engineering',
    skills: ['Confluent Kafka', 'IBM DataStage', 'Informatica IICS', 'ETL'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'IBM DB2', 'SQL Server', 'SQLite'],
  },
  {
    title: 'Testing',
    skills: ['JUnit', 'Mockito', 'TDD', 'SonarQube'],
  },
];

const certifications = [
  { name: 'Java Spring Framework 6 with Spring Boot 3', file: javaSpringCert },
  { name: 'Docker for Java Developers', file: dockerCert },
  { name: 'Data Visualization with Python', file: gcpCert },
  { name: 'Data Analytics in Python - IBM', file: ibmDataCert },
  { name: 'Git for Beginners', file: gitCert },
  { name: 'Masterclass on Kafka and ZooKeeper', file: scalerKafkaCert },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Technical <span className="underline-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform"
            >
              <h3 className="font-serif text-xl font-medium mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 glow"
        >
          <h3 className="font-serif text-2xl font-medium mb-6 text-center">
            <span className="underline-accent">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {cert.file ? (
                  <motion.a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    {cert.name}
                  </motion.a>
                ) : (
                  <span className="text-sm">{cert.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <div className="inline-block glass-card rounded-2xl px-8 py-6">
            <h4 className="font-serif text-xl font-medium mb-2">
              Bachelor of Engineering in Computer Science
            </h4>
            <p className="text-primary font-medium">Honors in AI & ML</p>
            <p className="text-muted-foreground text-sm mt-1">
              Savitribai Phule Pune University | June 2019 - May 2023 | CGPA: 8.65
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;