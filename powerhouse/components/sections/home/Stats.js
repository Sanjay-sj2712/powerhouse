'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Container, Typography, Grid, Divider } from '@mui/material';
import AnimatedCounter from '../../ui/AnimatedCounter';

const stats = [
  { end: 100, suffix: '+', label: 'Projects Delivered', description: 'Across industries worldwide' },
  { end: 10, suffix: 'M+', label: 'Views Generated', description: 'Organic reach for our clients' },
  { end: 50, suffix: '+', label: 'Brands Worked With', description: 'From startups to enterprises' },
  { end: 95, suffix: '%', label: 'Client Retention', description: 'They keep coming back' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      className="section-padding"
      ref={ref}
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', textAlign: 'center', mb: 2 }}>
            By The Numbers
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Space Grotesk"',
              fontWeight: 800,
              textAlign: 'center',
              color: '#ffffff',
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 8,
            }}
          >
            Results That Speak For{' '}
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Themselves.
            </Box>
          </Typography>
        </motion.div>

        {/* Stats grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 0,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderBottom: { xs: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', md: 'none' },
                  textAlign: 'center',
                  position: 'relative',
                  '&:hover': {
                    background: 'rgba(99,102,241,0.04)',
                  },
                  transition: 'background 0.3s ease',
                }}
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  duration={2200}
                  sx={{
                    fontFamily: '"Space Grotesk"',
                    fontWeight: 900,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    background: 'linear-gradient(135deg, #ffffff, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                    mb: 1,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: '"Space Grotesk"',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontSize: '1rem',
                    mb: 0.5,
                  }}
                >
                  {stat.label}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.8rem' }}>
                  {stat.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
