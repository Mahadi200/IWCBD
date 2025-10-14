import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Register = () => {
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
              <span className="text-gradient-neon">Register</span> Your Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join the Innovation World Cup Bangladesh 2026 and showcase your groundbreaking ideas
            </p>
            <motion.a
              href="https://forms.gle/VaJpdMHoPgZXqmbB8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Open Registration Form
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Google Form Embed Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Registration Form
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below to register your team for the Innovation World Cup Bangladesh 2026
            </p>
          </motion.div>

          {/* Google Form Embed */}
          <motion.div
            className="glass rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://forms.gle/VaJpdMHoPgZXqmbB8"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-2xl"
              title="Innovation World Cup Bangladesh 2026 Registration Form"
            >
              Loading…
            </iframe>
          </motion.div>

          {/* Alternative Link */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4">
              Having trouble with the embedded form?
            </p>
            <a
              href="https://forms.gle/VaJpdMHoPgZXqmbB8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-primary-400 hover:text-primary-300 transition-colors duration-300 border border-primary-500/30 rounded-lg hover:border-primary-500/50"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in New Tab
            </a>
          </motion.div>
        </div>
      </section>

      {/* Registration Info Section */}
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
              Registration <span className="text-gradient-neon">Information</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know before registering your team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Team Formation",
                description: "Teams can have up to 6 members + 1 supervisor/mentor from any background",
                icon: "👥"
              },
              {
                title: "Deadline",
                description: "Registration closes on October 22, 2025. Don't miss this opportunity!",
                icon: "📅"
              },
              {
                title: "Categories",
                description: "Choose from Environmental Sciences, Life Sciences, SDG, Technology & AI, or Social Sciences",
                icon: "🏆"
              },
              {
                title: "Age Groups",
                description: "Open to Preschool, School, High School, College, and University students",
                icon: "🎓"
              },
              {
                title: "Format",
                description: "National round is entirely online - submit your proposal via Google Form",
                icon: "💻"
              },
              {
                title: "International",
                description: "Top 30 teams will advance to the International Round in Bandung, Indonesia",
                icon: "🌍"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="card-glass p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;