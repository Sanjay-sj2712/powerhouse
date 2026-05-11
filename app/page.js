import { Box } from '@mui/material';
import Hero from '../components/sections/home/Hero';
import ServicesPreview from '../components/sections/home/ServicesPreview';
import FeaturedProjects from '../components/sections/home/FeaturedProjects';
import Stats from '../components/sections/home/Stats';
import Testimonials from '../components/sections/home/Testimonials';
import FinalCTA from '../components/sections/home/FinalCTA';

export const metadata = {
  title: 'Powerhouse — We Build Digital Power',
  description:
    'Powerhouse is a premium creative digital agency. From cinematic video editing to powerful software experiences — we help brands dominate attention.',
};

export default function HomePage() {
  return (
    <Box component="div">
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </Box>
  );
}
