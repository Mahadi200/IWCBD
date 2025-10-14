import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Schedule = () => {
  const schedule = [
    {
      day: 'International Round - January 26-30, 2026',
      events: [
        {
          time: 'Jan 26 - 09:00 - 18:00',
          title: 'International Teams Arrival',
          location: 'Dhaka Airport & Hotels',
          description: 'Welcome international participants and team registration',
        },
        {
          time: 'Jan 27 - 09:00 - 12:00',
          title: 'Opening Ceremony',
          location: 'Main Convention Hall',
          description: 'Welcome address and competition overview for international participants',
        },
        {
          time: 'Jan 27-29 - 09:00 - 18:00',
          title: 'International Competition',
          location: 'Competition Halls',
          description: 'Three days of intense international competition and judging',
        },
        {
          time: 'Jan 30 - 10:00 - 12:00',
          title: 'International Round Results',
          location: 'Main Convention Hall',
          description: 'Announcement of international round winners and qualifiers',
        },
      ],
    },
    {
      day: 'Final Competition - March 15-17, 2026',
      events: [
        {
          time: 'Mar 15 - 09:00 - 10:00',
          title: 'Registration & Welcome',
          location: 'Main Hall',
          description: 'Team registration and welcome ceremony',
        },
        {
          time: 'Mar 15 - 10:00 - 11:00',
          title: 'Opening Keynote',
          location: 'Main Hall',
          description: 'Welcome address by industry leaders',
        },
        {
          time: 'Mar 15 - 11:00 - 12:00',
          title: 'Team Presentations',
          location: 'Presentation Rooms',
          description: 'Initial project presentations',
        },
        {
          time: 'Mar 16 - 09:00 - 12:00',
          title: 'Development Phase',
          location: 'Workshop Areas',
          description: 'Teams work on their projects with mentor support',
        },
        {
          time: 'Mar 16 - 14:00 - 16:00',
          title: 'Mentor Sessions',
          location: 'Mentor Rooms',
          description: 'One-on-one mentoring sessions',
        },
        {
          time: 'Mar 16 - 16:00 - 18:00',
          title: 'Networking Event',
          location: 'Networking Lounge',
          description: 'Connect with industry professionals',
        },
        {
          time: 'Mar 17 - 09:00 - 12:00',
          title: 'Final Presentations',
          location: 'Main Hall',
          description: 'Final project presentations to judges',
        },
        {
          time: 'Mar 17 - 14:00 - 15:00',
          title: 'Judging & Deliberation',
          location: 'Judges Room',
          description: 'Final judging and winner selection',
        },
        {
          time: 'Mar 17 - 15:00 - 17:00',
          title: 'Awards Ceremony',
          location: 'Main Hall',
          description: 'Announcement of winners and prize distribution',
        },
      ],
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
              Event <span className="text-gradient-neon">Schedule</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Three days of innovation, competition, and networking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {schedule.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                className="card-glass p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gradient-neon mb-8">
                  {day.day}
                </h2>
                
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <motion.div
                      key={event.title}
                      className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 p-6 glass rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.01 }}
                    >
                      <div className="flex items-center space-x-4 md:w-1/4">
                        <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span className="text-primary-400 font-semibold">
                          {event.time}
                        </span>
                      </div>
                      
                      <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-300">
                          {event.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2 md:w-1/4">
                        <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-400">
                          {event.location}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/5 to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-glass p-8 text-center">
              <Calendar className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Event Duration
              </h3>
              <p className="text-gray-300">
                3 days of intensive competition and networking
              </p>
            </div>
            
            <div className="card-glass p-8 text-center">
              <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Team Size
              </h3>
              <p className="text-gray-300">
                2-5 members per team maximum
              </p>
            </div>
            
            <div className="card-glass p-8 text-center">
              <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Location
              </h3>
              <p className="text-gray-300">
                Dhaka, Bangladesh - Venue TBD
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
