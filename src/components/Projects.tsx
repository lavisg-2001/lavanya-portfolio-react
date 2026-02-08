import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Cloud, Scan } from 'lucide-react';

const projects = [
    {
        title: 'Questionnaire Application',
        description: 'Built a responsive full-stack Quiz App with user registration, quizzes, real-time scoring, and rank-based leaderboard functionality.',
        tech: ['Java', 'Spring Boot', 'MySQL', 'ReactJS'],
        icon: Layers,
        githubLink: 'https://github.com/lavisg-2001/QuestionnaireApp',
        liveLink: null,
    },
    {
        title: 'Weather & Air Quality Tracker',
        description: 'Developed a real-time weather and air quality indicator for comprehensive environmental data tracking.',
        tech: ['Java', 'Spring Boot', 'OpenWeatherMap API'],
        icon: Cloud,
        githubLink: 'https://github.com/lavisg-2001/weather-tracker',
        liveLink: null,
    },
    {
        title: 'Automated License Plate Recognition',
        description: 'Built an AI-powered Python system using OpenCV and deep learning for license plate detection with OCR text extraction.',
        tech: ['Python', 'OpenCV', 'Deep Learning', 'OCR'],
        icon: Scan,
        githubLink: null,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
                        Featured <span className="underline-accent">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Personal projects showcasing problem-solving and technical skills
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 glow"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>

                                <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((tech, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="px-2.5 py-1 bg-secondary rounded-md text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.liveLink && (
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View
                                        </motion.a>
                                    )}
                                    {project.githubLink ? (
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm font-medium"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </motion.a>
                                    ) : (
                                        <motion.button
                                            disabled
                                            className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium cursor-not-allowed opacity-50"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </motion.button>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;