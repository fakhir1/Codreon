import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  Globe,
  Puzzle,
  ChevronLeft,
  ChevronRight,
  Snowflake,
  Megaphone,
  Rocket,
  ShoppingCart,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Wallet,
  CalendarDays
} from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeImages, setActiveImages] = useState<Record<string, number>>({});
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({});
  const descriptionLimit = 180;

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) {
      return text;
    }

    const trimmed = text.slice(0, limit).trimEnd();
    return `${trimmed}...`;
  };

  const projects = [
    {
      title: 'ApprovU Mortgage Platform - Full-Stack CMS Integration',
      category: 'Full-Stack Platform',
      description: 'Production-ready mortgage platform with Strapi CMS, Supabase auth, RBAC, and Next.js 15 App Router. Migrated 31 pages to dynamic content with fast ISR, plus a full admin dashboard for content and workflow management.',
      images: [
        '/images/projects/approvU%20Mortgage%20Platform_1.png',
        '/images/projects/approvU%20Mortgage%20Platform_2.png'
      ],
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Strapi CMS', 'Supabase', 'TailwindCSS'],
      icon: Globe,
      links: {
        live: 'https://approv-u-morgage.vercel.app/',
        github: '#'
      },
      gradient: 'from-sky-500 to-indigo-500'
    },
     {
    title: 'Bevvy Bullet AI Kickstarter Automation System',
    category: 'AI Growth Infrastructure',
    description:
      'Large-scale AI-powered Kickstarter automation system with 50+ interconnected workflows handling content generation, influencer outreach, multi-platform publishing, lead nurturing, analytics, and campaign optimization for high-growth product launches.',
    images: [
      '/images/projects/bevvy-bullet-1.png',
      // '/images/projects/bevvy-bullet-2.png'
    ],
    technologies: [
      'n8n',
      'GPT-4',
      'DALL·E',
      'Stripe',
      'Discord API',
      'Social APIs',
      'Automation'
    ],
    icon: Rocket,
    links: {
      live: 'https://www.bevvybullet.com/',
      github: '#'
    },
    gradient: 'from-orange-500 to-red-500'
  },
    {
      title: 'Friend Convert - Facebook Automation Extension',
      category: 'Chrome Extension',
      description: 'Custom Chrome extension that automates friend requests by targeting roles (doctors, engineers) and tracks profile engagement with likes, comments, and shares analytics.',
      images: [
        '/images/projects/Friend-convert_1.png',
        '/images/projects/Friend-convert_2.png',
        '/images/projects/Friend-convert_3.png'
      ],
      technologies: ['ReactJS', 'JavaScript', 'Chrome Extension APIs', 'Automation Logic'],
      icon: Puzzle,
      links: {
        live: '#',
        github: 'https://github.com/fakhir1/FriendConvert.github'
      },
      gradient: 'from-emerald-500 to-lime-500'
    },
  {
    title: 'KeptCold Appointment Automation System',
    category: 'AI Operations Automation',
    description:
      'AI-powered automation platform for refrigeration and HVAC operations that streamlines job intake, scheduling, quoting, invoicing, and customer communication across multiple channels. Built to transform manual workflows into a scalable, intelligent operational ecosystem.',
    images: [
      '/images/projects/keptcold-1.png',
      // '/images/projects/keptcold-2.png'
    ],
    technologies: [
      'n8n',
      'OpenAI',
      'WhatsApp API',
      'OCR',
      'Computer Vision',
      'Automation',
      'REST APIs'
    ],
    icon: Snowflake,
    links: {
      live: '#',
      github: '#'
    },
    gradient: 'from-cyan-500 to-blue-600'
  },

  {
    title: 'Unified Marketing CRM & AI Automation Platform',
    category: 'AI Marketing Automation',
    description:
      'End-to-end healthcare marketing automation and CRM ecosystem that converts internal documents into compliant AI-generated campaigns. Includes automated publishing, lead enrichment, CRM synchronization, and analytics-driven sales workflows.',
    images: [
      '/images/projects/unified-marketing-1.png',
      // '/images/projects/unified-marketing-2.png'
    ],
    technologies: [
      'OpenAI',
      'HubSpot',
      'WordPress API',
      'LinkedIn API',
      'Google Ads',
      'Automation',
      'CRM Integration'
    ],
    icon: Megaphone,
    links: {
      live: '#',
      github: '#'
    },
    gradient: 'from-violet-500 to-fuchsia-500'
  },

 

  {
    title: 'Shopify Order Management & Fulfillment Sync System',
    category: 'E-Commerce Automation',
    description:
      'Intelligent Shopify fulfillment synchronization platform that automates order tracking, supplier integrations, tracking retrieval, and fulfillment updates using APIs and browser automation with multi-layer validation logic.',
    images: [
      '/images/projects/shopify-sync-1.png',
      // '/images/projects/shopify-sync-2.png'
    ],
    technologies: [
      'Shopify API',
      'Node.js',
      'Puppeteer',
      'REST APIs',
      'Slack API',
      'Automation',
      'JavaScript'
    ],
    icon: ShoppingCart,
    links: {
      live: '#',
      github: '#'
    },
    gradient: 'from-emerald-500 to-green-600'
  },

  {
    title: 'Flowstate AI Personalized Landing Page System',
    category: 'AI Personalization Platform',
    description:
      'AI-driven personalization engine that generates dynamic landing pages in real time based on visitor business data, goals, and technology stack. Designed to deliver highly tailored conversion-focused experiences at scale.',
    images: [
      '/images/projects/flowstate-1.png',
      // '/images/projects/flowstate-2.png'
    ],
    technologies: [
      'Webflow',
      'Claude AI',
      'JavaScript',
      'Make.com',
      'AI Automation',
      'Dynamic Rendering'
    ],
    icon: Sparkles,
    links: {
      live: '#',
      github: '#'
    },
    gradient: 'from-indigo-500 to-purple-600'
  },

  {
    title: 'Taptic Ticket Support & Verification Automation',
    category: 'Customer Support Automation',
    description:
      'Automated customer support and ticket verification system that handles identity verification, order validation, ticket re-delivery, and escalation workflows using secure authentication and intelligent routing logic.',
    images: [
      '/images/projects/taptic-support-1.png',
      // '/images/projects/taptic-support-2.png'
    ],
    technologies: [
      'n8n',
      'Zendesk',
      'Email APIs',
      'Automation',
      'Verification Systems',
      'REST APIs'
    ],
    icon: ShieldCheck,
    links: {
      live: '#',
      github: '#'
    },
    gradient: 'from-sky-500 to-indigo-500'
  },

  {
    title: 'Upwork Proposal Automation System',
    category: 'AI Productivity Automation',
    description:
      'Real-time Upwork job monitoring and AI proposal generation platform designed to instantly detect relevant freelance opportunities and generate personalized, context-aware proposals within minutes.',
    images: [
      '/images/projects/upwork-automation-1.png',
      // '/images/projects/upwork-automation-2.png'
    ],
    technologies: [
      'OpenAI',
      'Slack API',
      'Automation',
      'Web Scraping',
      'n8n',
      'AI Workflows'
    ],
    icon: Briefcase,
    links: {
      live: '#',
      github: '#'
    },
    gradient: 'from-yellow-400 to-orange-500'
  },

  {
    title: 'Office Budget Management & Expense Tracking System',
    category: 'Business Operations Automation',
    description:
      'WhatsApp-based office expense tracking and budget management platform that enables teams to log expenses conversationally while providing administrators with automated reports and financial oversight.',
    images: [
      '/images/projects/budget-system-1.png',
      // '/images/projects/budget-system-2.png'
    ],
    technologies: [
      'WhatsApp API',
      'Automation',
      'Node.js',
      'Database Systems',
      'Role-Based Access'
    ],
    icon: Wallet,
    links: {
      live: '#',
      github: '#'
    },
    gradient: 'from-teal-500 to-cyan-600'
  },

  {
    title: 'Outlook Event Management & Scheduling Automation',
    category: 'Scheduling Automation',
    description:
      'Conversational scheduling automation system integrated with Microsoft Outlook that enables users to create, update, and manage calendar events directly through WhatsApp using natural language commands.',
    images: [
      '/images/projects/outlook-events-1.png',
      // '/images/projects/outlook-events-2.png'
    ],
    technologies: [
      'Microsoft Outlook API',
      'WhatsApp API',
      'Natural Language Processing',
      'Automation',
      'Node.js'
    ],
    icon: CalendarDays,
    links: {
      live: '#',
      github: '#'
    },
    gradient: 'from-blue-500 to-sky-600'
  }
    // {
    //   title: 'E-Commerce Platform',
    //   category: 'Web Development',
    //   description: 'Modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    //   images: ['https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'],
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    //   icon: Globe,
    //   links: {
    //     live: '#',
    //     github: '#'
    //   },
    //   gradient: 'from-blue-500 to-purple-500'
    // },
    // {
    //   title: 'Productivity Chrome Extension',
    //   category: 'Chrome Extension',
    //   description: 'Browser extension that helps users manage tasks, block distractions, and track productivity.',
    //   images: ['https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'],
    //   technologies: ['JavaScript', 'Chrome APIs', 'Local Storage', 'CSS3'],
    //   icon: Puzzle,
    //   links: {
    //     live: '#',
    //     github: '#'
    //   },
    //   gradient: 'from-purple-500 to-pink-500'
    // },
    // {
    //   title: 'AI Content Automation',
    //   category: 'AI Automation',
    //   description: 'Intelligent system that automates content creation, social media posting, and SEO optimization.',
    //   images: ['https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'],
    //   technologies: ['Python', 'OpenAI API', 'n8n', 'PostgreSQL'],
    //   icon: Bot,
    //   links: {
    //     live: '#',
    //     github: '#'
    //   },
    //   gradient: 'from-green-500 to-teal-500'
    // },
    // {
    //   title: 'Mobile-First Dashboard',
    //   category: 'Web Development',
    //   description: 'Responsive analytics dashboard with real-time data visualization and mobile optimization.',
    //   images: ['https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'],
    //   technologies: ['Next.js', 'TypeScript', 'Chart.js', 'TailwindCSS'],
    //   icon: Smartphone,
    //   links: {
    //     live: '#',
    //     github: '#'
    //   },
    //   gradient: 'from-orange-500 to-red-500'
    // }
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
          {projects.map((project, index) => {
            const totalImages = project.images.length;
            const activeIndex = activeImages[project.title] ?? 0;
            const currentImage = project.images[activeIndex] ?? project.images[0];
            const isExpanded = expandedDescriptions[project.title] ?? false;
            const isLongDescription = project.description.length > descriptionLimit;
            const descriptionText = isExpanded
              ? project.description
              : truncateText(project.description, descriptionLimit);

            const setProjectImage = (nextIndex: number) => {
              setActiveImages((prev) => ({
                ...prev,
                [project.title]: nextIndex
              }));
            };

            const handlePrev = () => {
              if (totalImages <= 1) {
                return;
              }

              const nextIndex = (activeIndex - 1 + totalImages) % totalImages;
              setProjectImage(nextIndex);
            };

            const handleNext = () => {
              if (totalImages <= 1) {
                return;
              }

              const nextIndex = (activeIndex + 1) % totalImages;
              setProjectImage(nextIndex);
            };

            const toggleDescription = () => {
              setExpandedDescriptions((prev) => ({
                ...prev,
                [project.title]: !isExpanded
              }));
            };

            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:glow h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-56 sm:h-60 bg-black/10">
                  <img 
                    src={currentImage} 
                    alt={project.title}
                    className="w-full h-full object-contain"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
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
                  {totalImages > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label="Previous image"
                        onClick={handlePrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        type="button"
                        aria-label="Next image"
                        onClick={handleNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, imageIndex) => (
                          <button
                            key={`${project.title}-dot-${imageIndex}`}
                            type="button"
                            aria-label={`Go to image ${imageIndex + 1}`}
                            onClick={() => setProjectImage(imageIndex)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${imageIndex === activeIndex ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/40'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className={`text-gray-400 mb-4 leading-relaxed ${isExpanded ? '' : 'min-h-[4.5rem] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]'}`}>
                    {descriptionText}
                  </p>
                  {isLongDescription && (
                    <button
                      type="button"
                      onClick={toggleDescription}
                      className="text-sm font-semibold text-white/80 hover:text-white transition-colors mb-4"
                    >
                      {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                  )}

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
                  <div className="flex gap-3 mt-auto">
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
          );
        })}
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