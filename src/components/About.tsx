import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Trophy, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    { icon: Target, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '80+' },
    { icon: Trophy, label: 'Years Experience', value: '8+' },
    { icon: Zap, label: 'Technologies', value: '25+' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Codreon</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a cutting-edge technology company dedicated to transforming businesses through 
            innovative web solutions, powerful Chrome extensions, and intelligent AI automation systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                enhance efficiency, and create exceptional user experiences. We believe in the power 
                of innovation to transform the digital landscape.
              </p>
              <div className="space-y-4">
                {['Innovation-First Approach', 'Client-Centric Solutions', 'Quality & Performance'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Web Development</span>
                    <span className="text-blue-400 font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '95%' } : {}}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    ></motion.div>
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">AI Automation</span>
                    <span className="text-green-400 font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '90%' } : {}}
                      transition={{ duration: 1.5, delay: 1.0 }}
                    ></motion.div>
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Chrome Extensions</span>
                    <span className="text-purple-400 font-semibold">88%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '88%' } : {}}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;