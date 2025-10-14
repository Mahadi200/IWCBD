import { motion } from 'framer-motion';
import {
  Trophy,
  Users,
  Globe,
  Lightbulb,
  Target,
  Award,
  Sparkles,
  Heart,
  Megaphone,
  BookOpen,
  BadgeCheck,
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const About = () => {
  const objectives = [
    {
      icon: Lightbulb,
      title: 'Create a Global Stage',
      description:
        'Provide students and innovators a platform to present their groundbreaking ideas.',
    },
    {
      icon: Globe,
      title: 'Foster International Collaboration',
      description:
        'Connect schools, universities, and research institutions across borders.',
    },
    {
      icon: Award,
      title: 'Recognise Excellence',
      description:
        'Celebrate innovation, invention, and creativity with global recognition.',
    },
    {
      icon: Target,
      title: 'Build an Innovation Ecosystem',
      description:
        'Transform ideas into real-world impact through a strong global network.',
    },
  ];

  const judging = [
    { label: 'Urgency', value: 30 },
    { label: 'Presentation', value: 30 },
    { label: 'Visibility', value: 20 },
    { label: 'Relevance', value: 20 },
  ];

  const awards = [
    { title: 'PLATINUM', desc: 'Overall Best (Top 10) Innovation World Cup 2026' },
    { title: 'MEDALS', desc: 'Gold | Silver | Bronze' },
    { title: 'Country Award', desc: 'Country with the most number of teams' },
    { title: 'Institution Award', desc: 'Institution/School with the most teams' },
    { title: 'Commercialisation', desc: 'Best Project with Commercialisation Value' },
    { title: 'Best SDG Video', desc: 'Best SDG Video Presentation' },
    { title: 'Best Poster', desc: 'Best Poster' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#1a0f2a] to-[#2a0f3b]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp()}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              About <span className="text-[var(--iwc-primary,#8f1f94)]">IWC Bangladesh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Innovation World Cup (IWC) 2026 is a premier international platform that brings
              together young innovators, researchers, educators, and entrepreneurs from around the globe.
              Hosted with MIICA (Malaysia) and in collaboration with UNIKOM (Indonesia), IWC Bangladesh is
              the official national round organised by <b>Dreams of Bangladesh</b>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-10" {...fadeUp()}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Introduction
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Innovation has become the key driver of progress in the 21st century. As the world
                faces complex challenges in sustainability, technology, health, education, and social
                development, there is an urgent need to empower the next generation of innovators.
              </p>
              <p>
                <b>IWC 2026</b> provides a stage where groundbreaking ideas compete, cross-cultural
                collaborations are formed, and solutions for a better future are showcased.
                Simultaneously, the <b>International Invention, Innovation and Creativity Competition (I³C) 2026</b>
                highlights creativity and problem-solving among school and university students.
                By co-hosting both competitions, participants gain exposure to two prestigious awards in one
                historic event, further elevating their achievements and recognition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives & Theme */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 text-center" {...fadeUp()}>
            Objectives & Theme
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Objectives */}
            <motion.div {...fadeUp(0.1)} className="card-glass p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Megaphone className="w-6 h-6 text-[var(--iwc-primary,#8f1f94)]" />
                Objectives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objectives.map((o, idx) => (
                  <motion.div
                    key={o.title}
                    className="p-5 rounded-xl bg-white/5 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <o.icon className="w-7 h-7 text-[var(--iwc-primary,#8f1f94)] mb-3" />
                    <div className="text-white font-semibold">{o.title}</div>
                    <div className="text-gray-300 text-sm mt-1">{o.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Theme */}
            <motion.div {...fadeUp(0.2)} className="card-glass p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Theme</h3>
              <p className="text-xl font-semibold text-[var(--iwc-primary,#8f1f94)] mb-4">
                “Innovate Beyond Borders: Shaping the Future Together”
              </p>
              <p className="text-gray-300 leading-relaxed">
                This theme reflects the spirit of uniting minds across nations to develop
                solutions that transcend geographical and cultural boundaries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* International Collaborators */}
      <section className="py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              International Collaborators
            </h2>
            <p className="text-gray-300">
              Multi-nation collaboration across Asia, the Middle East and Europe.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="card-glass p-6 flex flex-wrap items-center justify-center gap-3 text-2xl"
          >
            {/* Flag emoji row as placeholders; replace with logos/flags as needed */}
            <span>🇧🇩</span><span>🇲🇾</span><span>🇮🇩</span><span>🇵🇭</span>
            <span>🇮🇳</span><span>🇻🇳</span><span>🇹🇷</span><span>🇮🇷</span>
            <span>🇰🇿</span><span>🇦🇪</span><span>🇹🇼</span><span>🇳🇵</span>
            <span>🇲🇰</span><span>🇷🇴</span>
          </motion.div>
        </div>
      </section>

      {/* Mode of Presentation + Judging */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--iwc-primary,#8f1f94)]/10 via-transparent to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-10 text-center" {...fadeUp()}>
            Mode of Presentation
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.ul
              {...fadeUp(0.1)}
              className="card-glass p-8 space-y-4 text-gray-300 leading-relaxed"
            >
              <li>Each participating team will be provided with a table to showcase their project.</li>
              <li>Teams must bring a stand banner (roll-up poster) with title, abstract, and key visuals.</li>
              <li>Prototypes, models, or supporting materials may be displayed on the table.</li>
              <li>Judging will take place at the team’s booth where participants present directly to the jury panel.</li>
            </motion.ul>

            <motion.div {...fadeUp(0.2)} className="card-glass p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <BadgeCheck className="w-6 h-6 text-[var(--iwc-primary,#8f1f94)]" />
                Judging Criteria
              </h3>
              <div className="space-y-5">
                {judging.map((j, i) => (
                  <div key={j.label}>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>{j.label}</span>
                      <span>{j.value}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--iwc-primary,#8f1f94)]"
                        style={{ width: `${j.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates & Medal + Trophy & Cash */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div {...fadeUp(0.1)} className="card-glass p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[var(--iwc-primary,#8f1f94)]" />
                Certificates & Medal
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white font-semibold mb-2">Certificate & Medal of Award</div>
                  <p className="text-gray-300 text-sm">
                    For participants who achieve outstanding results or significant
                    accomplishments during the competition.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white font-semibold mb-2">
                    Certificate & Medal of Appreciation
                  </div>
                  <p className="text-gray-300 text-sm">
                    To honour the dedication and guidance provided by teachers or project supervisors.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="card-glass p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-[var(--iwc-primary,#8f1f94)]" />
                Trophy & Cash Award
              </h3>
              <p className="text-gray-300 leading-relaxed">
                IWC 2026 in conjunction with I³C 2026 will be a milestone global event. By offering
                students and innovators the opportunity to earn <b>two international awards</b> in a single
                event, alongside the prestigious <b>10 Best Innovation Awards</b> with trophies and cash prizes,
                it creates an unforgettable experience while driving real-world impact.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                This event not only honours outstanding achievements but also inspires a new wave of
                collaboration and innovation — proving that the future truly belongs to those who dare to create.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#1a0f2a] to-[#2a0f3b]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Awards
            </h2>
            <p className="text-gray-300">
              Global recognition across multiple categories and special honours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((a, i) => (
              <motion.div
                key={a.title + i}
                className="card-glass p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[var(--iwc-primary,#8f1f94)]" />
                  <h4 className="text-white font-semibold">{a.title}</h4>
                </div>
                <p className="text-gray-300 mt-2 text-sm">{a.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp(0.2)}
            className="mt-14 text-center"
          >
            <a 
              href="https://forms.gle/VaJpdMHoPgZXqmbB8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg bg-[var(--iwc-primary,#8f1f94)] text-white font-semibold hover:opacity-90 transition"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
