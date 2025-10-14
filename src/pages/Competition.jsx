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
  const categories = [
    {
      icon: Lightbulb,
      title: 'Technology & AI',
      description: 'Artificial intelligence, machine learning, and technological innovations',
      prize: 'International Medals',
      participants: 'Open',
    },
    {
      icon: Target,
      title: 'Environmental & Life Sciences',
      description: 'Environmental solutions, life sciences, and sustainability innovations',
      prize: 'International Medals',
      participants: 'Open',
    },
    {
      icon: Shield,
      title: 'SDG & Social Impact',
      description: 'Solutions addressing UN Sustainable Development Goals and social impact',
      prize: 'International Medals',
      participants: 'Open',
    },
    {
      icon: Star,
      title: 'Social Sciences',
      description: 'Innovations in social sciences, education, and human development',
      prize: 'International Medals',
      participants: 'Open',
    },
    {
      icon: Users,
      title: 'Preschool',
      description: 'Innovative projects and solutions for early childhood development',
      prize: 'International Medals',
      participants: 'Open',
    },
    {
      icon: Award,
      title: 'Teachers & Professionals',
      description: 'Educational innovations and professional development solutions',
      prize: 'International Medals',
      participants: 'Open',
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
              Competition <span className="text-gradient-neon">Details</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Compete in Bangladesh's most prestigious innovation competition across multiple categories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
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
              Competition Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your category and showcase your innovation in the most relevant field
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="card-glass p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-400">Prize Money</div>
                        <div className="text-lg font-bold text-gradient-neon">
                          {category.prize}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Participants</div>
                        <div className="text-lg font-bold text-primary-400">
                          {category.participants}
                        </div>
                      </div>
                    </div>
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
            <motion.button
              className="btn-primary px-10 py-5 text-xl font-bold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trophy className="w-6 h-6 inline mr-2" />
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Competition;
