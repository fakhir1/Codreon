import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Globe, Puzzle, Bot, Smartphone } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: Globe,
      links: {
        live: '#',
        github: '#'
      },
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Productivity Chrome Extension',
      category: 'Chrome Extension',
      description: 'Browser extension that helps users manage tasks, block distractions, and track productivity.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['JavaScript', 'Chrome APIs', 'Local Storage', 'CSS3'],
      icon: Puzzle,
      links: {
        live: '#',
        github: '#'
      },
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Content Automation',
      category: 'AI Automation',
      description: 'Intelligent system that automates content creation, social media posting, and SEO optimization.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenAI API', 'n8n', 'PostgreSQL'],
      icon: Bot,
      links: {
        live: '#',
        github: '#'
      },
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Mobile-First Dashboard',
      category: 'Web Development',
      description: 'Responsive analytics dashboard with real-time data visualization and mobile optimization.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'TailwindCSS'],
      icon: Smartphone,
      links: {
        live: '#',
        github: '#'
      },
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of our recent work and innovative solutions delivered for clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:glow">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.links.live}
                      className={`flex-1 glass rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-medium hover:bg-gradient-to-r hover:${project.gradient} hover:text-white transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      className="glass rounded-xl py-3 px-4 flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:scale-105 transition-transform duration-300 glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;