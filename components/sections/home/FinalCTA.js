'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Container, Typography, Stack } from '@mui/material';
import MagneticButton from '../../ui/MagneticButton';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      className="section-padding"
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Animated gradient mesh background */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.15) 0%, transparent 50%)',
        animation: 'gradientShift 6s ease infinite',
        backgroundSize: '200% 200%',
      }} />

      {/* Glowing orbs */}
      <Box sx={{
        position: 'absolute', top: '10%', left: '15%', width: 300, height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.3), transparent)',
        filter: 'blur(60px)',
        animation: 'float1 8s ease-in-out infinite',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '10%', right: '15%', width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.2), transparent)',
        filter: 'blur(80px)',
        animation: 'float2 10s ease-in-out infinite',
      }} />

      {/* Grid pattern */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Typography
            variant="overline"
            sx={{ color: '#6366f1', display: 'block', mb: 3 }}
          >
            Ready?
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontFamily: '"Space Grotesk"',
              fontWeight: 900,
              fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem' },
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              mb: 4,
            }}
          >
            LET'S BUILD
            <br />
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease infinite',
              }}
            >
              SOMETHING
            </Box>
            <br />
            POWERFUL.
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: '#64748b', fontWeight: 400, mb: 6, maxWidth: 480, mx: 'auto', lineHeight: 1.7 }}
          >
            Join 50+ brands that trusted Powerhouse to transform their digital presence.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <MagneticButton href="/contact" variant="contained" sx={{ px: 5, py: 1.8, fontSize: '1rem' }}>
              Start Your Project
            </MagneticButton>
            <MagneticButton href="/contact" variant="outlined" sx={{ px: 5, py: 1.8, fontSize: '1rem' }}>
              Contact Us
            </MagneticButton>
          </Box>

          {/* Trust badges */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 6, flexWrap: 'wrap' }}>
            {['No upfront fees', 'Free consultation', '24h response time'].map((badge) => (
              <Box key={badge} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1' }} />
                <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                  {badge}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
