'use client';

import { Box, Container, Typography, Grid, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Twitter, Instagram, LinkedIn, YouTube, GitHub,
} from '@mui/icons-material';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  'Video Editing',
  'Digital Marketing',
  'UI/UX Design',
  'Social Media',
  'Personal Branding',
  'Web Development',
  'Software Development',
];

const socials = [
  { icon: <Twitter />, href: '#', label: 'Twitter' },
  { icon: <Instagram />, href: '#', label: 'Instagram' },
  { icon: <LinkedIn />, href: '#', label: 'LinkedIn' },
  { icon: <YouTube />, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #050507 0%, #080810 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        pt: 10,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <Box sx={{
        position: 'absolute',
        bottom: -200,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 600,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} mb={6}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #ffffff 40%, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              POWERHOUSE
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748b', mb: 3, maxWidth: 300, lineHeight: 1.7 }}>
              Built for brands that want attention. We craft digital experiences that dominate.
            </Typography>

            {/* Socials */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socials.map((s) => (
                <motion.div key={s.label} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    href={s.href}
                    aria-label={s.label}
                    sx={{
                      color: '#64748b',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '12px',
                      width: 44,
                      height: 44,
                      '&:hover': {
                        color: '#6366f1',
                        borderColor: 'rgba(99,102,241,0.4)',
                        background: 'rgba(99,102,241,0.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {s.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              variant="overline"
              sx={{ color: '#64748b', display: 'block', mb: 3 }}
            >
              Navigation
            </Typography>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                <Typography
                  sx={{
                    color: '#94a3b8',
                    mb: 1.5,
                    fontSize: '0.9rem',
                    '&:hover': { color: '#6366f1' },
                    transition: 'color 0.3s',
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="overline"
              sx={{ color: '#64748b', display: 'block', mb: 3 }}
            >
              Services
            </Typography>
            {services.map((s) => (
              <Typography
                key={s}
                sx={{
                  color: '#94a3b8',
                  mb: 1.5,
                  fontSize: '0.9rem',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                {s}
              </Typography>
            ))}
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="overline"
              sx={{ color: '#64748b', display: 'block', mb: 3 }}
            >
              Get In Touch
            </Typography>
            <Typography sx={{ color: '#94a3b8', mb: 1.5, fontSize: '0.9rem' }}>
              hello@powerhouse.agency
            </Typography>
            <Typography sx={{ color: '#94a3b8', mb: 1.5, fontSize: '0.9rem' }}>
              +1 (555) 000-0000
            </Typography>
            <Typography sx={{ color: '#94a3b8', mb: 3, fontSize: '0.9rem' }}>
              New York, NY 10001
            </Typography>

            {/* CTA */}
            <Box
              sx={{
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '12px',
                p: 2,
              }}
            >
              <Typography sx={{ color: '#6366f1', fontWeight: 600, fontSize: '0.85rem', mb: 0.5 }}>
                Ready to scale?
              </Typography>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: '#94a3b8', fontSize: '0.8rem', '&:hover': { color: '#ffffff' } }}>
                  Book a free discovery call →
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)', mb: 4 }} />

        {/* Bottom bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Powerhouse. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#64748b',
              fontSize: '0.8rem',
              fontStyle: 'italic',
            }}
          >
            "Built for brands that want attention."
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
