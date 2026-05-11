import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// In Vite, you can either:
// Option 1: Import images as modules (recommended)
// import reactLogo from '../assets/logos/react.png';
// OR
// Option 2: Use public folder (what we'll use)
// Put your logos in public/logos/ and reference them as '/logos/filename.png'

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'API Integration', 'Cloud Deployment'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Automation',
      skills: ['n8n', 'Make', 'Zapier', 'AI Integration'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'DevOps',
      skills: ['Docker','CI/CD'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Graphic Designing',
      skills: [
        'Brand Visuals',
        'Marketing Graphics',
        'Social Media Creatives',
        'Custom Artwork',
        'Character & Icon Design',
        'Creative Visual Storytelling'
      ],
      color: 'from-fuchsia-500 to-rose-500'
    }
  ];

  const technologies = [
    { name: 'ReactJS', logo: '/logos/react.png', type: 'image' },
    { name: 'Next.js', logo: '/logos/nextjs.png', type: 'image' },
    { name: 'Python', logo: '/logos/python.gif', type: 'image' },
    { name: 'MicrosoftAzure', logo: '/logos/microsoft-azure.png', type: 'image' },
    // { name: 'GHL', logo: '/logos/ghl.png', type: 'image' },
    { name: 'Pytorch', logo: '/logos/pytorch.png', type: 'image' },
    { name: 'Figma', logo: '/logos/figma.gif', type: 'image' },
    { name: 'TypeScript', logo: '/logos/typescript.png', type: 'image' },
    { name: 'Adobe Illustrator', logo: '/logos/illustrator.gif', type: 'image' },
    // { name: 'AWS', logo: '☁️', type: 'emoji' },
    // { name: 'GCP', logo: '🌩️', type: 'emoji' },
    // { name: 'Make', logo: '🔧', type: 'emoji' },
    { name: 'TailwindCSS', logo: '/logos/tailwindcss.png', type: 'image' },
    { name: 'JavaScript', logo: '/logos/javascript.gif', type: 'image' },
    { name: 'Node.js', logo: '/logos/node.png', type: 'image' },
    { name: 'Docker', logo: '/logos/docker.png', type: 'image' },
    { name: 'n8n', logo: '/logos/n8n.png', type: 'image' },
    { name: 'Zapier', logo: '/logos/zapier.png', type: 'image' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and tools we use to build exceptional solutions
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 + 0.6 }}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 + 0.8 }}
              className="group"
            >
              <div className="glass rounded-xl p-6 flex flex-col items-center text-center hover:scale-110 transition-all duration-300 hover:glow">
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tech.type === 'image' ? (
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    tech.logo
                  )}
                </div>
                <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 glass rounded-3xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Technologies Mastered', value: '25+' },
              { label: 'Years Combined Experience', value: '50+' },
              { label: 'Lines of Code Written', value: '1M+' },
              { label: 'Successful Deployments', value: '200+' }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;