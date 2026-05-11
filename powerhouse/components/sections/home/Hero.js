'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Container, Typography, Stack } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import MagneticButton from '../../ui/MagneticButton';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 60%)',
      }}
    >
      {/* Static gradient orbs — no mousemove tracking */}
      <Box sx={{
        position: 'absolute', top: '15%', left: '5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'float1 10s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'float2 12s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* Grid pattern */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pt: 12 }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <Box sx={{ width: 32, height: 1, background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
            <Typography variant="overline" sx={{ color: '#6366f1', letterSpacing: '0.2em', fontSize: '0.7rem' }}>
              Creative Digital Agency
            </Typography>
          </Box>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 900,
              fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem', lg: '8rem' },
              lineHeight: 0.92,
              letterSpacing: '-0.05em',
              mb: 4,
              color: '#ffffff',
            }}
          >
            WE BUILD
            <br />
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              DIGITAL
            </Box>
            <br />
            POWER.
          </Typography>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Typography
            variant="h6"
            sx={{ color: '#94a3b8', maxWidth: 560, mb: 5, fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '1rem', md: '1.1rem' } }}
          >
            From cinematic video editing to powerful software experiences —
            Powerhouse helps brands dominate attention.
          </Typography>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }}>
            <MagneticButton href="/projects" variant="contained" sx={{ px: 4, py: 1.5, fontSize: '1rem' }}>
              View Projects
            </MagneticButton>
            <MagneticButton href="/contact" variant="outlined" sx={{ px: 4, py: 1.5, fontSize: '1rem' }}>
              Book a Call
            </MagneticButton>
          </Stack>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <Box sx={{ display: 'flex', gap: { xs: 3, md: 6 }, mt: 10, flexWrap: 'wrap' }}>
            {[
              { value: '100+', label: 'Projects' },
              { value: '10M+', label: 'Views Generated' },
              { value: '50+', label: 'Brands' },
              { value: '95%', label: 'Client Retention' },
            ].map((stat) => (
              <Box key={stat.label}>
                <Typography sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  color: '#ffffff',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mt: 0.5, fontSize: '0.8rem' }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <Box sx={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, color: '#64748b' }}>
            <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.15em', fontFamily: '"Space Grotesk"' }}>SCROLL</Typography>
            <KeyboardArrowDown sx={{ fontSize: '1.1rem' }} />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
