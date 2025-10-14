import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  Users, 
  Trophy, 
  Globe, 
  Zap,
  Shield,
  Star
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Cutting-edge technologies and groundbreaking solutions across multiple industries',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
    },
    {
      icon: Target,
      title: 'Multiple Tracks',
      description: 'Competition categories spanning AI, FinTech, HealthTech, GreenTech, and more',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Build diverse teams and collaborate with fellow innovators from across Bangladesh',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      icon: Trophy,
      title: 'Prestigious Awards',
      description: 'Compete for substantial prizes and recognition from industry leaders',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with international innovators and expand your global reach',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
    },
    {
      icon: Zap,
      title: 'Fast-Track Growth',
      description: 'Accelerate your innovation journey with mentorship and resources',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
    },
  ];

  const highlights = [
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Enterprise-grade security for all participants and intellectual property',
    },
    {
      icon: Star,
      title: 'Expert Judges',
      description: 'Evaluation by industry veterans and successful entrepreneurs',
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Why Choose IWC Bangladesh?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most comprehensive innovation competition in Bangladesh, 
            designed to accelerate your journey from idea to impact.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="card-glass p-8 h-full relative overflow-hidden"
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(143, 31, 148, 0.2)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="card-glass p-8 flex items-start space-x-6"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <highlight.icon className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-300">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Innovate?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of innovators who are already building the future. 
              Register now and be part of Bangladesh's premier innovation competition.
            </p>
            <motion.button
              className="btn-primary px-8 py-4 text-lg font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Innovation Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
