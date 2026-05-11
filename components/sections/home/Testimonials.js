'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Box, Container, Typography, Avatar, Rating } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'NovaTech',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Powerhouse completely transformed our digital presence. Their video production and marketing strategy generated over 2M views in the first month alone. Absolutely incredible team.',
  },
  {
    name: 'Marcus Reid',
    role: 'Founder',
    company: 'BuildScale',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'The UI/UX design they delivered for our SaaS product was beyond anything we expected. User engagement increased by 340% after the redesign. World-class work.',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'Luminary Co.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'From social media to personal branding, Powerhouse knows how to make brands unforgettable. Our follower count grew 10x in 6 months. Highly recommend.',
  },
  {
    name: 'James Wright',
    role: 'CTO',
    company: 'Horizon Labs',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    rating: 5,
    text: 'The custom software they built for us saved 20+ hours of manual work per week. Clean code, on-time delivery, and exceptional communication throughout.',
  },
  {
    name: 'Aisha Okonkwo',
    role: 'Brand Strategist',
    company: 'Vanta Media',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    rating: 5,
    text: 'Powerhouse is not just an agency — they\'re a genuine growth partner. The website they built for us converts at 3x industry average. Phenomenal results.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <Box
      className="section-padding"
      ref={ref}
      sx={{ background: 'rgba(255,255,255,0.01)', overflow: 'hidden' }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', textAlign: 'center', mb: 2 }}>
            Client Love
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
            What Our Clients{' '}
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, #6366f1, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Say.
            </Box>
          </Typography>
        </motion.div>

        {/* Carousel */}
        <Box sx={{ position: 'relative', maxWidth: 800, mx: 'auto' }}>
          <Box sx={{ overflow: 'hidden', position: 'relative', minHeight: { xs: 450, sm: 340, md: 380 } }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ position: 'absolute', width: '100%' }}
              >
                <Box
                  sx={{
                    p: { xs: 4, md: 6 },
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Quote icon */}
                  <FormatQuote
                    sx={{
                      position: 'absolute',
                      top: 24,
                      right: 32,
                      fontSize: '5rem',
                      color: 'rgba(99,102,241,0.15)',
                    }}
                  />

                  <Rating value={testimonials[current].rating} readOnly sx={{ mb: 3, '& .MuiRating-iconFilled': { color: '#f59e0b' } }} />

                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      color: '#e2e8f0',
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                      mb: 4,
                    }}
                  >
                    "{testimonials[current].text}"
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={testimonials[current].avatar}
                      sx={{ width: 52, height: 52, border: '2px solid rgba(99,102,241,0.4)' }}
                    />
                    <Box>
                      <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>
                        {testimonials[current].name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.8rem' }}>
                        {testimonials[current].role} · {testimonials[current].company}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 4 }}>
            {testimonials.map((_, i) => (
              <Box
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                sx={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: '100px',
                  background: i === current
                    ? 'linear-gradient(90deg, #6366f1, #8b5cf6)'
                    : 'rgba(255,255,255,0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
