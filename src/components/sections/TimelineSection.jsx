import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Clock, Trophy } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      date: 'Oct 15, 2025',
      title: 'Registration Opens',
      description: 'Official opening of registration for the Innovation World Cup Bangladesh 2026 National Round.',
      icon: Users,
      status: 'current',
    },
    {
      date: 'Oct 25, 2025',
      title: 'Project Proposal Submission Deadline',
      description: 'Last date to submit your project proposals through the official Google Form.',
      icon: Calendar,
      status: 'upcoming',
    },
  
    {
      date: 'Oct 30, 2025',
      title: 'Winners & Top 30 Teams Declaration',
      description: 'National winners and the Top 30 teams selected for the International Round in Indonesia will be declared.',
      icon: Trophy,
      status: 'upcoming',
    },
    {
      date: 'Jan 30, 2026',
      title: 'International Round (Bandung, Indonesia)',
      description: 'The final global stage of the Innovation World Cup 2026, hosted by MIICA in Bandung, Indonesia.',
      icon: Clock,
      status: 'upcoming',
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-500/5 via-transparent to-transparent rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Competition Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mark your calendar and don't miss any important dates in your innovation journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-blue-500 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-4 h-4 rounded-full border-4 border-white ${
                      event.status === 'current'
                        ? 'bg-primary-500 animate-glow'
                        : 'bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>

                {/* Event Card */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`card-glass p-6 ${
                    event.status === 'current' ? 'border-primary-500/50' : ''
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        event.status === 'current'
                          ? 'bg-primary-500/20'
                          : 'bg-gray-700/50'
                      }`}>
                        <event.icon className={`w-6 h-6 ${
                          event.status === 'current'
                            ? 'text-primary-400'
                            : 'text-gray-400'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-primary-400">
                            {event.date}
                          </span>
                          {event.status === 'current' && (
                            <span className="px-2 py-1 text-xs font-semibold bg-primary-500/20 text-primary-400 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Important Reminders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <h4 className="text-lg font-semibold text-primary-400 mb-2">
                  Early Registration
                </h4>
                <p>Register early to secure your spot and get access to exclusive resources</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-400 mb-2">
                  Team Formation
                </h4>
                <p>Form teams of 2-5 members to maximize your innovation potential</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary-400 mb-2">
                  Preparation
                </h4>
                <p>Start preparing your project proposal and presentation materials early</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
