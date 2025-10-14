import { motion } from 'framer-motion';
import { Building2, Award, Users, Globe } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'TechCorp Bangladesh',
      category: 'Technology Partner',
      logo: 'TC',
      type: 'sponsor',
    },
    {
      name: 'Innovation Hub Dhaka',
      category: 'Innovation Partner',
      logo: 'IHD',
      type: 'partner',
    },
    {
      name: 'StartupBD',
      category: 'Ecosystem Partner',
      logo: 'SBD',
      type: 'partner',
    },
    {
      name: 'Digital Bangladesh',
      category: 'Government Partner',
      logo: 'DB',
      type: 'government',
    },
    {
      name: 'Tech University BD',
      category: 'Academic Partner',
      logo: 'TUB',
      type: 'academic',
    },
    {
      name: 'FinTech Solutions',
      category: 'Industry Partner',
      logo: 'FTS',
      type: 'industry',
    },
  ];

  const getPartnerColor = (type) => {
    switch (type) {
      case 'sponsor':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'partner':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'government':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'academic':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'industry':
        return 'text-pink-400 bg-pink-400/10 border-pink-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getPartnerIcon = (type) => {
    switch (type) {
      case 'sponsor':
        return Award;
      case 'partner':
        return Users;
      case 'government':
        return Globe;
      case 'academic':
        return Building2;
      case 'industry':
        return Building2;
      default:
        return Building2;
    }
  };

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
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
            Our Partners & Sponsors
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proudly supported by leading organizations committed to fostering innovation in Bangladesh
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => {
            const IconComponent = getPartnerIcon(partner.type);
            const colorClass = getPartnerColor(partner.type);
            
            return (
              <motion.div
                key={partner.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="card-glass p-8 h-full text-center relative overflow-hidden"
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    boxShadow: '0 25px 50px rgba(143, 31, 148, 0.2)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Logo */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-2xl ${colorClass.split(' ')[1]} border-2 ${colorClass.split(' ')[2]} flex items-center justify-center mb-4`}>
                      <span className="text-2xl font-bold text-white">
                        {partner.logo}
                      </span>
                    </div>
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${colorClass}`}>
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm font-medium">{partner.category}</span>
                    </div>
                  </div>

                  {/* Partner Name */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {partner.name}
                  </h3>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership Benefits */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Partnership Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-primary-400 mb-3">
                  For Organizations
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span>Brand visibility and recognition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span>Access to top talent and innovations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span>Networking with industry leaders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span>Early access to emerging technologies</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-primary-400 mb-3">
                  For Participants
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span>Industry mentorship and guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span>Access to cutting-edge resources</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span>Potential investment opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span>Career advancement prospects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Become a Partner CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-secondary px-8 py-4 text-lg font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
