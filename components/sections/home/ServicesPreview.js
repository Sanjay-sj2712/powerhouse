'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Container, Typography, Grid } from '@mui/material';
import { MovieCreation, TrendingUp, Palette, Share, Person, Language, Code, ArrowForward } from '@mui/icons-material';
import Link from 'next/link';

const services = [
  { icon: <MovieCreation sx={{ fontSize: 28 }} />, title: 'Video Editing', description: 'Cinematic storytelling that captivates and converts. From short-form reels to full productions.', color: '#6366f1', href: '/services#video-editing' },
  { icon: <TrendingUp sx={{ fontSize: 28 }} />, title: 'Digital Marketing', description: 'Data-driven campaigns that generate real ROI and grow your audience at scale.', color: '#8b5cf6', href: '/services#digital-marketing' },
  { icon: <Palette sx={{ fontSize: 28 }} />, title: 'UI/UX Design', description: 'Interfaces that are intuitive, beautiful, and built for conversion and engagement.', color: '#ec4899', href: '/services#uiux-design' },
  { icon: <Share sx={{ fontSize: 28 }} />, title: 'Social Media Management', description: 'Strategic content that builds communities and drives engagement across all platforms.', color: '#06b6d4', href: '/services#social-media' },
  { icon: <Person sx={{ fontSize: 28 }} />, title: 'Personal Branding', description: 'Build a powerful personal brand that positions you as an authority in your niche.', color: '#f59e0b', href: '/services#personal-branding' },
  { icon: <Language sx={{ fontSize: 28 }} />, title: 'Website Development', description: 'Fast, responsive websites that look stunning and rank high in search engines.', color: '#10b981', href: '/services#web-development' },
  { icon: <Code sx={{ fontSize: 28 }} />, title: 'Custom Software', description: 'Scalable software solutions tailored to your unique business processes and goals.', color: '#f43f5e', href: '/services#software' },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Grid size={{ xs: 12, sm: 6, lg: 4 }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
        style={{ height: '100%' }}
      >
        <Link href={service.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
          <Box sx={{
            p: 3.5,
            height: '100%',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '18px',
            cursor: 'pointer',
            transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
            '&:hover': {
              border: `1px solid ${service.color}35`,
              boxShadow: `0 8px 32px ${service.color}18`,
              transform: 'translateY(-4px)',
              '& .svc-arrow': { opacity: 1 },
            },
          }}>
            {/* Icon */}
            <Box sx={{
              width: 50, height: 50, borderRadius: '12px',
              background: `${service.color}12`,
              border: `1px solid ${service.color}25`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: service.color, mb: 2.5,
            }}>
              {service.icon}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, color: '#ffffff', mb: 1, fontSize: '1rem' }}>
                {service.title}
              </Typography>
              <ArrowForward className="svc-arrow" sx={{ color: service.color, fontSize: '1rem', opacity: 0, transition: 'opacity 0.2s', mt: 0.5 }} />
            </Box>
            <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.85rem' }}>
              {service.description}
            </Typography>
          </Box>
        </Link>
      </motion.div>
    </Grid>
  );
}

export default function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box className="section-padding" sx={{ position: 'relative' }}>
      <Container maxWidth="lg">
        <Box ref={ref} sx={{ textAlign: 'center', mb: 7 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
            <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', mb: 1.5 }}>What We Do</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' }, fontFamily: '"Space Grotesk"', fontWeight: 800, color: '#ffffff', mb: 2 }}>
              Services That Scale{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Brands.</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748b', maxWidth: 480, mx: 'auto' }}>
              Every service engineered to grow your brand and dominate your market.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={2.5}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
