import { motion } from 'framer-motion';
import { 
  Trophy, 
  Sparkles, 
  Rocket, 
  ChevronDown,
  Play,
  Calendar,
  MapPin,
  Users
} from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('stats-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Animation */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              delay: 0.2 
            }}
          >
            <div className="relative">
              <Trophy className="w-24 h-24 text-primary-500 mx-auto animate-glow" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-28 h-28 text-neon-blue mx-auto opacity-60" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-white">Innovation World Cup</span>
            <br />
            <span className="text-gradient-neon">Bangladesh 2026</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="text-xl md:text-2xl font-semibold text-gray-300 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Innovate Beyond Borders — <span className="text-gradient-primary">Bangladesh National Round</span>
          </motion.div>

          {/* Description */}
          <motion.div
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="mb-4">
              The official national round of the Innovation World Cup 2026 (IWC International), 
              organized by Dreams of Bangladesh (DoB) under exclusive partnership with MIICA, Malaysia.
            </p>
            <p className="text-primary-400 font-medium">
              Empowering Bangladeshi students, researchers, and innovators to shine on the global stage.
            </p>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary-500/30 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-sm font-medium text-primary-400">
              Official Partner of MIICA | International Round: Bandung, Indonesia (28–31 January 2026)
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="btn-primary px-8 py-4 text-lg font-semibold flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5" />
              <span>Register Your Team</span>
            </motion.button>
            
            <motion.button
              className="btn-secondary px-8 py-4 text-lg font-semibold flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Download Guidelines</span>
            </motion.button>
          </motion.div>

          {/* Event Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              {
                icon: Calendar,
                title: "Event Date",
                subtitle: "January 26-30, 2026",
              },
              {
                icon: MapPin,
                title: "Location",
                subtitle: "Dhaka, Bangladesh",
              },
              {
                icon: Users,
                title: "Participants",
                subtitle: "500+ Innovators",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="card-glass text-center p-6"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        onClick={scrollToNext}
      >
        <motion.div
          className="flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
