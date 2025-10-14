import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Clock, 
  Award,
  Lightbulb,
  Target,
  Star,
  Shield
} from 'lucide-react';

const Competition = () => {
  const educationLevels = [
    {
      icon: Users,
      title: 'Preschool',
      description: 'Early childhood innovators and creative young minds',
      age: '3-5 years',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Target,
      title: 'School (Class 1–5)',
      description: 'Elementary school students exploring fundamental concepts',
      age: '6-10 years',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Star,
      title: 'High School (Class 6–10)',
      description: 'Secondary school innovators developing advanced solutions',
      age: '11-16 years',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'College (Class 11–12)',
      description: 'Pre-university students with specialized knowledge',
      age: '17-18 years',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Trophy,
      title: 'University (Undergraduate / Graduate)',
      description: 'Higher education innovators and research pioneers',
      age: '18+ years',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const projectCategories = [
    {
      icon: Shield,
      title: 'Environmental Sciences',
      description: 'Climate solutions, sustainability, and environmental protection innovations',
      iconColor: 'text-green-400',
      bgColor: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Lightbulb,
      title: 'Life Sciences',
      description: 'Biotechnology, healthcare, and biological research innovations',
      iconColor: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Star,
      title: 'SDG',
      description: 'Solutions addressing UN Sustainable Development Goals for global impact',
      iconColor: 'text-yellow-400',
      bgColor: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: Target,
      title: 'Technology & AI',
      description: 'Artificial intelligence, machine learning, and technological breakthroughs',
      iconColor: 'text-purple-400',
      bgColor: 'from-purple-500/20 to-violet-500/20',
    },
    {
      icon: Users,
      title: 'Social Sciences',
      description: 'Human development, education, and social innovation solutions',
      iconColor: 'text-pink-400',
      bgColor: 'from-pink-500/20 to-rose-500/20',
    },
  ];

  const rules = [
    {
      title: 'Team Formation',
      description: 'Teams of up to 6 members + 1 supervisor/mentor from any background',
    },
    {
      title: 'Online Proposal Submission',
      description: 'Submit comprehensive PDF proposal (800-1200 words, max 6 pages)',
    },
    {
      title: 'No Physical Event',
      description: 'National round is entirely online - no physical exhibition required',
    },
    {
      title: 'International Qualification',
      description: 'Shortlisted teams advance to International Round in Bandung, Indonesia',
    },
    {
      title: 'Plagiarism Free',
      description: 'All data must be original and verifiable - plagiarism strictly prohibited',
    },
    {
      title: 'Ethical Standards',
      description: 'Teams must maintain ethical, safe, and legal practices throughout',
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
              Competition <span className="text-gradient-neon">Framework</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose your education level and project category to compete in Bangladesh's premier innovation platform
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Levels Section */}
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
              <span className="text-gradient-neon">Education Levels</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From preschoolers to university graduates - innovation has no age limit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationLevels.map((level, index) => (
              <motion.div
                key={level.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
                     style={{ background: `linear-gradient(135deg, ${level.color.replace('from-', '').replace('to-', '')})` }}>
                </div>
                <div className="relative card-glass p-8 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${level.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <level.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {level.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {level.description}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-primary-400">
                        Age: {level.age}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
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
              Project <span className="text-gradient-neon">Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your field of innovation and make a lasting impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
                     style={{ background: `linear-gradient(135deg, ${category.bgColor.replace('from-', '').replace('to-', '')})` }}>
                </div>
                <div className="relative card-glass p-8 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-10 h-10 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
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
              Competition Rules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the competition format and requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rules.map((rule, index) => (
              <motion.div
                key={rule.title}
                className="card-glass p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-400">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {rule.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {rule.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Criteria Section */}
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
              Evaluation Criteria
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Projects are reviewed by MIICA and DoB's expert jury. Only shortlisted teams will advance to the international round.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Problem Urgency & Importance', percentage: '30%', color: 'from-red-500 to-red-600' },
              { title: 'Presentation & Clarity', percentage: '30%', color: 'from-blue-500 to-blue-600' },
              { title: 'Visibility & Impact', percentage: '20%', color: 'from-green-500 to-green-600' },
              { title: 'Relevance & Feasibility', percentage: '20%', color: 'from-purple-500 to-purple-600' },
            ].map((criteria, index) => (
              <motion.div
                key={criteria.title}
                className="card-glass p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gradient-neon">
                    {criteria.percentage}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {criteria.title}
                </h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className={`bg-gradient-to-r ${criteria.color} h-2 rounded-full transition-all duration-1000 delay-${index * 200}`}
                    style={{ width: criteria.percentage }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Compete?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join hundreds of innovators and showcase your groundbreaking solutions
            </p>
            <motion.a
              href="https://forms.gle/VaJpdMHoPgZXqmbB8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-5 text-xl font-bold inline-flex items-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trophy className="w-6 h-6 mr-2" />
              Register Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Competition;
