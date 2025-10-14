import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Globe, 
  Lightbulb, 
  Target,
  Award,
  Sparkles,
  Heart
} from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Lightbulb,
      title: 'Build National Innovation Ecosystem',
      description: 'Align with global standards and create a thriving innovation environment',
    },
    {
      icon: Globe,
      title: 'Promote Creativity & Technology',
      description: 'Foster social innovation and technological advancement',
    },
    {
      icon: Users,
      title: 'Connect Educational Institutions',
      description: 'Bridge schools, universities, and startups through one platform',
    },
    {
      icon: Target,
      title: 'Recognize Best Innovations',
      description: 'Send top Bangladeshi innovations to the global stage',
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do',
      color: 'text-yellow-400',
    },
    {
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking solutions',
      color: 'text-blue-400',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collective intelligence',
      color: 'text-green-400',
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our activities',
      color: 'text-purple-400',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              About <span className="text-gradient-neon">IWC Bangladesh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Innovation World Cup Bangladesh (IWC BD) is the official national round 
              of the global Innovation World Cup 2026, organized by Dreams of Bangladesh 
              under exclusive partnership with MIICA, Malaysia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Purpose & Objectives
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building a bridge between Bangladesh and the world innovation ecosystem. 
              Students, teachers, entrepreneurs, and researchers can present their innovative 
              ideas, research, and inventions on an international platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((point, index) => (
              <motion.div
                key={point.title}
                className="card-glass p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <point.icon className="w-12 h-12 text-primary-500 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-300">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/5 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our commitment to fostering innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card-glass p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className={`text-2xl font-bold ${value.color} mb-4`}>
                  {value.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Theme
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <h3 className="text-2xl font-semibold text-gradient-neon mb-4">
                  "Innovate Beyond Borders: Shaping the Future Together."
                </h3>
                <p className="text-lg">
                  A global call to collaborate beyond boundaries and use innovation 
                  for sustainable progress. This theme encourages participants to 
                  think globally while acting locally, creating solutions that 
                  transcend geographical and cultural barriers.
                </p>
                <p className="text-lg">
                  We believe that innovation knows no boundaries, and through this competition, 
                  we aim to prove that Bangladesh has the talent, creativity, and determination 
                  to lead the next wave of technological advancement.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-glass p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Who Can Participate</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>School Students (Primary & Secondary)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>College & University Students (Diploma, Bachelor's, Master's, PhD)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Teachers, Professionals & Entrepreneurs</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary-500/10 rounded-lg">
                  <p className="text-sm text-primary-400">
                    Teams may have up to 6 members + 1 supervisor/mentor
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Format Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/5 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              National Round Format
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The Bangladesh National Round will be held entirely online with a focus on proposal submission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="card-glass p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Online Proposal Submission
              </h3>
              <p className="text-gray-300">
                Submit a comprehensive PDF proposal following the official structure. 
                No physical exhibition required.
              </p>
            </motion.div>

            <motion.div
              className="card-glass p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                International Qualification
              </h3>
              <p className="text-gray-300">
                Shortlisted teams will represent Bangladesh in the International Round 
                in Bandung, Indonesia (28–31 January 2026).
              </p>
            </motion.div>

            <motion.div
              className="card-glass p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Structured Format
              </h3>
              <p className="text-gray-300">
                800–1200 words, max 6 pages (A4), PDF format. 
                Prototype not mandatory (video or demo link optional).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Be part of a growing community of innovators, entrepreneurs, and technology 
              leaders who are shaping the future of Bangladesh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="btn-primary px-8 py-4 text-lg font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Trophy className="w-5 h-5 inline mr-2" />
                Register Now
              </motion.button>
              <motion.button
                className="btn-secondary px-8 py-4 text-lg font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5 inline mr-2" />
                Become a Partner
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
