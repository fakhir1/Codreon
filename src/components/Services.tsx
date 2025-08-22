import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Puzzle, Bot, ArrowRight } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and TypeScript. Responsive, fast, and user-friendly.',
      features: ['Responsive Design', 'Performance Optimized', 'SEO Ready', 'Modern Frameworks'],
      gradient: 'from-blue-500 to-cyan-500',
      glowClass: 'glow'
    },
    {
      icon: Puzzle,
      title: 'Chrome Extensions',
      description: 'Powerful browser extensions that enhance productivity and user experience with seamless integration and robust functionality.',
      features: ['Cross-browser Support', 'Secure Architecture', 'User-friendly UI', 'API Integration'],
      gradient: 'from-purple-500 to-pink-500',
      glowClass: 'glow-purple'
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Intelligent automation solutions using cutting-edge AI to streamline workflows and boost business efficiency.',
      features: ['Workflow Automation', 'Smart Integration', 'Scalable Solutions', 'Real-time Analytics'],
      gradient: 'from-green-500 to-teal-500',
      glowClass: 'glow-green'
    }
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to accelerate your business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`glass rounded-3xl p-8 h-full hover:scale-105 transition-all duration-500 hover:${service.glowClass} relative overflow-hidden`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 + 0.8 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className={`w-full glass rounded-xl py-3 font-semibold flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:text-white transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;