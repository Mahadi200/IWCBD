import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Users
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'innovationworldcupbangladesh@gmail.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+8801754002201',
      subtitle: 'Sat-Thu 10AM-6PM (GMT+6)',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '9/25, Block C, Humayun Road',
      subtitle: 'Mohammadpur, Dhaka, Bangladesh',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: '10:00 AM - 6:00 PM',
      subtitle: 'Saturday to Thursday (GMT+6)',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          className="text-center max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-glass p-12">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              Message Sent!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <motion.button
              className="btn-primary px-8 py-4 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

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
              Get in <span className="text-gradient-neon">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Have questions? We're here to help. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8">
                Contact Information
              </h2>
              <div className="mb-8 p-6 glass rounded-xl border border-primary-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Dreams of Bangladesh (DoB) – IWC BD Secretariat
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Official organizer of Innovation World Cup Bangladesh 2026 under exclusive partnership with MIICA, Malaysia.
                </p>
              </div>
              
              <p className="text-gray-300 mb-12 leading-relaxed">
                Ready to be part of the innovation revolution? Get in touch with us 
                for any questions about the competition, registration, or partnerships.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-300 font-medium">
                        {info.details}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {info.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                    <motion.button
                      key={platform}
                      className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="text-primary-400 font-semibold text-sm">
                        {platform[0]}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-glass p-8">
                <div className="text-center mb-8">
                  <MessageCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-display font-bold text-white mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-gray-300">
                    Fill out the form below and we'll get back to you soon
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Enter your message"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
{/* 
      FAQ Section
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/5 to-blue-500/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions about IWC Bangladesh 2026
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What is the registration fee?',
                answer: 'The registration fee is BDT 2,000 per team, payable upon confirmation of your registration.',
              },
              {
                question: 'Can I participate as an individual?',
                answer: 'No, you must form a team of 2-5 members to participate in the competition.',
              },
              {
                question: 'What are the judging criteria?',
                answer: 'Projects are judged based on innovation, feasibility, impact, presentation, and technical implementation.',
              },
              {
                question: 'Is accommodation provided?',
                answer: 'Accommodation is not provided, but we can recommend nearby hotels and guesthouses.',
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                className="card-glass p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
