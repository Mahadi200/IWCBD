import { motion } from 'framer-motion';
import { 
  Trophy, 
  Sparkles, 
  Rocket, 
  Users, 
  Award,
  ChevronDown,
  Play,
  Calendar,
  MapPin
} from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TimelineSection from '../components/sections/TimelineSection';
import PartnersSection from '../components/sections/PartnersSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TimelineSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
};

export default Home;
