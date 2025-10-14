import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Trophy, Users, Award, Sparkles } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Trophy,
      value: 1000,
      suffix: '+',
      label: 'Participants',
      color: 'text-primary-500',
    },
    {
      icon: Users,
      value: 200,
      suffix: '+',
      label: 'Teams',
      color: 'text-neon-blue',
    },
    {
      icon: Award,
      value: 7,
      suffix: '',
      label: 'Categories',
      color: 'text-neon-pink',
    },
    {
      icon: Sparkles,
      value: 100,
      suffix: '+',
      label: 'Awards',
      color: 'text-neon-green',
      format: 'currency',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const Counter = ({ end, duration = 2, suffix = '', format = 'number' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        let startTime;
        const startCount = 0;
        const endCount = end;

        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
          
          const currentCount = Math.floor(progress * (endCount - startCount) + startCount);
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [isVisible, end, duration]);

    const formatValue = (value) => {
      if (format === 'currency') {
        return new Intl.NumberFormat('en-BD').format(value);
      }
      return new Intl.NumberFormat('en-US').format(value);
    };

    return (
      <span>
        {formatValue(count)}{suffix}
      </span>
    );
  };

  return (
    <section id="stats-section" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/5 via-transparent to-transparent rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            By the Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of innovators in Bangladesh's premier technology competition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="card-glass p-8 h-full"
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(143, 31, 148, 0.3)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className={`w-12 h-12 mx-auto ${stat.color}`} />
                </motion.div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    format={stat.format}
                  />
                </div>
                
                <div className="text-lg text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Why Join IWC Bangladesh 2026?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <h4 className="text-lg font-semibold text-primary-400 mb-2">
                  Global Recognition
                </h4>
                <p>Showcase your innovation on an international platform</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-400 mb-2">
                  Expert Mentorship
                </h4>
                <p>Learn from industry leaders and successful entrepreneurs</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-400 mb-2">
                  Networking Opportunities
                </h4>
                <p>Connect with like-minded innovators and potential partners</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
