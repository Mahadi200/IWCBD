import { motion } from 'framer-motion';
import { Rocket, Calendar, Users, Award } from 'lucide-react';

const CTASection = () => {
  const ctaFeatures = [
    {
      icon: Rocket,
      title: 'Launch Your Innovation',
      description: 'Transform your ideas into reality with expert guidance',
    },
    {
      icon: Users,
      title: 'Join the Community',
      description: 'Connect with 500+ like-minded innovators',
    },
    {
      icon: Award,
      title: 'Win Prestigious Awards',
      description: 'Compete for substantial prizes and recognition',
    },
    {
      icon: Calendar,
      title: 'Limited Time',
      description: 'Registration closes on February 15, 2026',
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-purple-500/10 to-blue-500/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Ready to{' '}
              <span className="text-gradient-neon">Innovate Beyond Borders?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join Bangladesh's premier innovation competition and showcase your 
              groundbreaking ideas to the world. The future of technology starts here.
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="btn-primary px-10 py-5 text-xl font-bold flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-6 h-6" />
                <span>Register Now</span>
              </motion.button>
              
              <motion.button
                className="btn-secondary px-10 py-5 text-xl font-bold flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-6 h-6" />
                <span>View Schedule</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {ctaFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card-glass p-6 text-center"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Message */}
          <motion.div
            className="glass rounded-3xl p-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-6">
              The Future Starts With You
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Innovation World Cup Bangladesh 2026 is more than just a competition—it's a 
              movement. It's about pushing boundaries, challenging the status quo, and 
              creating solutions that will shape tomorrow's world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-neon mb-1">
                  Jan 26-30, 2026
                </div>
                <div className="text-gray-400">International Round</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-neon mb-1">
                  March 15-17, 2026
                </div>
                <div className="text-gray-400">Final Competition</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-neon mb-1">
                  Dhaka, Bangladesh
                </div>
                <div className="text-gray-400">Event Location</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-neon mb-1">
                  Feb 15, 2026
                </div>
                <div className="text-gray-400">Registration Deadline</div>
              </div>
            </div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-300 font-semibold">
                Limited spots available - Register before February 15, 2026
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
