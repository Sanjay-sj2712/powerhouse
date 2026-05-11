'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Box, Container, Typography, Grid, Chip, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const categories = ['All', 'Video Editing', 'Branding', 'UI/UX', 'Marketing', 'Web Development', 'Software'];

const allProjects = [
  { title: 'NovaBrand Full Identity', category: 'Branding', description: 'Complete brand system for a fintech startup.', image: 'https://images.unsplash.com/photo-1636955816868-fcb881e57954?w=800&q=80', tags: ['Brand Strategy', 'Visual Identity'], year: '2025', color: '#8b5cf6' },
  { title: 'Pulse Social Campaign', category: 'Marketing', description: '10M+ impressions for a global fitness brand.', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80', tags: ['Social Media', 'Paid Ads'], year: '2025', color: '#6366f1' },
  { title: 'FlowApp Redesign', category: 'UI/UX', description: 'SaaS product redesign. +340% engagement.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', tags: ['UX Research', 'UI Design'], year: '2024', color: '#ec4899' },
  { title: 'Vora E-Commerce', category: 'Web Development', description: 'High-converting store with 3x conversion rate.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', tags: ['Next.js', 'Commerce'], year: '2025', color: '#10b981' },
  { title: 'MotionReel Brand Film', category: 'Video Editing', description: 'Cinematic film with 5M+ views in 72 hours.', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80', tags: ['Cinematography', 'Color Grade'], year: '2025', color: '#f59e0b' },
  { title: 'Horizon Dashboard', category: 'Software', description: 'Custom analytics for 1M+ daily data points.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', tags: ['React', 'Node.js'], year: '2024', color: '#f43f5e' },
  { title: 'Luminary Personal Brand', category: 'Branding', description: '0 to 100k followers for a tech influencer.', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80', tags: ['Personal Brand', 'Strategy'], year: '2024', color: '#8b5cf6' },
  { title: 'Apex Fitness Reels', category: 'Video Editing', description: '3M+ monthly views with short-form content.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', tags: ['Reels', 'Short-Form'], year: '2025', color: '#f59e0b' },
  { title: 'BuildScale Web App', category: 'Software', description: 'B2B project management with real-time features.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', tags: ['Full-Stack', 'Real-time'], year: '2025', color: '#f43f5e' },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <Grid size={{ xs: 12, sm: 6, lg: 4 }} ref={ref}>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}>
        <Box sx={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', cursor: 'pointer', transition: 'all 0.4s ease', '&:hover': { border: `1px solid ${project.color}40`, boxShadow: `0 20px 60px ${project.color}25`, transform: 'translateY(-6px)', '& .proj-img': { transform: 'scale(1.06)' }, '& .proj-overlay': { opacity: 1 } } }}>
          <Box sx={{ position: 'relative', height: 220, overflow: 'hidden' }}>
            <Box className="proj-img" sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)' }} />
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,7,0.9) 0%, transparent 60%)' }} />
            <Box className="proj-overlay" sx={{ position: 'absolute', inset: 0, background: 'rgba(99,102,241,0.25)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ px: 2.5, py: 1, borderRadius: '100px', background: 'rgba(99,102,241,0.9)', display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ color: '#fff', fontFamily: '"Space Grotesk"', fontWeight: 600, fontSize: '0.85rem' }}>View Case Study</Typography>
                <ArrowForward sx={{ fontSize: '0.9rem', color: '#fff' }} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ p: 3 }}>
            <Chip label={project.category} size="small" sx={{ background: `${project.color}20`, border: `1px solid ${project.color}40`, color: project.color, fontFamily: '"Space Grotesk"', fontWeight: 600, fontSize: '0.7rem', mb: 1.5 }} />
            <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, color: '#ffffff', fontSize: '1rem', mb: 1 }}>{project.title}</Typography>
            <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem', mb: 2 }}>{project.description}</Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {project.tags.map((tag) => (
                <Box key={tag} sx={{ px: 1.5, py: 0.4, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', fontSize: '0.7rem', color: '#94a3b8', fontFamily: '"Space Grotesk"', fontWeight: 500 }}>{tag}</Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });
  const filtered = activeCategory === 'All' ? allProjects : allProjects.filter((p) => p.category === activeCategory);

  return (
    <Box sx={{ pt: 12, background: '#050507', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box ref={headerRef} sx={{ pt: 8, pb: 6, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', mb: 2 }}>Our Portfolio</Typography>
            <Typography component="h1" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 900, fontSize: { xs: '3rem', md: '5.5rem' }, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#ffffff', mb: 3 }}>
              WORK THAT{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MOVES.</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', fontWeight: 400, maxWidth: 500, mx: 'auto' }}>A curated selection of projects that shaped brands and drove results.</Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5, mb: 8 }}>
          {categories.map((cat) => (
            <Box key={cat} onClick={() => setActiveCategory(cat)} sx={{ px: 3, py: 1.2, borderRadius: '100px', border: '1px solid', borderColor: activeCategory === cat ? '#6366f1' : 'rgba(255,255,255,0.1)', background: activeCategory === cat ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255,255,255,0.03)', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { borderColor: '#6366f1' } }}>
              <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 600, fontSize: '0.85rem', color: activeCategory === cat ? '#ffffff' : '#94a3b8', whiteSpace: 'nowrap' }}>{cat}</Typography>
            </Box>
          ))}
        </Box>

        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Grid container spacing={3} sx={{ mb: 12 }}>
              {filtered.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
