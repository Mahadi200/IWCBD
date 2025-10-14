import { motion } from 'framer-motion';
import { 
  Trophy, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  Globe,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61581894102576' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/iwc_bd_round?igsh=MW10NjRvMHZ5N3d3Mg%3D%3D&utm_source=qr' },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Competition', href: '/competition' },
    { name: 'Register', href: '/register' },
    { name: 'Contact', href: '/contact' },
  ];

  const footerSections = [
    {
      title: 'Quick Links',
      links: quickLinks,
    },
    {
      title: 'Contact Info',
      items: [
        { icon: Mail, text: 'innovationworldcupbangladesh@gmail.com' },
        { icon: Phone, text: '+8801754002201' },
        { icon: MapPin, text: 'Mohammadpur, Dhaka, Bangladesh' },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-purple-900 to-violet-900 mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Trophy className="w-8 h-8 text-primary-500" />
              </motion.div>
              <div className="text-2xl font-display font-bold text-white">
                IWC<span className="text-gradient-neon">BD</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Innovation World Cup Bangladesh 2026 - National Round. 
              Organized by Dreams of Bangladesh under official partnership with MIICA, Malaysia.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span>Theme: Innovate Beyond Borders</span>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              {section.links ? (
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <item.icon className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

          {/* Social Links - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:bg-primary-500/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-primary-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Innovation World Cup Bangladesh (IWC BD). All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Made by <a href="https://dreamsofbangladesh.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">Dreams of Bangladesh</a> • 2025 
            </p>
            </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
