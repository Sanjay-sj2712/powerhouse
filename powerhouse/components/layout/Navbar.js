'use client';

import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton, useTheme, useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const hasBackground = scrolled || !isHome;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: hasBackground
            ? 'rgba(5, 5, 7, 0.85)'
            : 'transparent',
          backdropFilter: hasBackground ? 'blur(20px)' : 'none',
          borderBottom: hasBackground
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
          zIndex: 9000,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 6 }, py: 1.5, maxWidth: 1400, width: '100%', mx: 'auto' }}>
          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    background: 'linear-gradient(135deg, #ffffff 40%, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                  }}
                >
                  POWERHOUSE
                </Typography>
              </motion.div>
            </Link>
          </Box>

          {/* Desktop Nav / Mobile Menu Icon */}
          {isMobile ? (
            <IconButton
              sx={{ color: '#ffffff' }}
              onClick={() => setDrawerOpen(true)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                    <Box
                      sx={{
                        position: 'relative',
                        px: 2,
                        py: 1,
                        cursor: 'pointer',
                        '&:hover .nav-underline': { width: '100%', opacity: 1 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Space Grotesk", sans-serif',
                          fontWeight: 500,
                          fontSize: '0.9rem',
                          color: isActive ? '#ffffff' : '#94a3b8',
                          transition: 'color 0.3s',
                          '&:hover': { color: '#ffffff' },
                        }}
                      >
                        {link.label}
                      </Typography>
                      {/* Animated underline */}
                      <Box
                        className="nav-underline"
                        sx={{
                          position: 'absolute',
                          bottom: 2,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          height: '1px',
                          width: isActive ? '60%' : 0,
                          opacity: isActive ? 1 : 0,
                          background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                          transition: 'width 0.3s ease, opacity 0.3s ease',
                          borderRadius: 1,
                        }}
                      />
                    </Box>
                  </Link>
                );
              })}

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ marginLeft: 16 }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ px: 3, py: 1, fontSize: '0.85rem' }}
                  >
                    Book a Call
                  </Button>
                </Link>
              </motion.div>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(5,5,7,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ position: 'absolute', top: 20, right: 20, color: '#ffffff' }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #ffffff, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 6,
              }}
            >
              POWERHOUSE
            </Typography>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={link.href} style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: '2rem',
                      color: pathname === link.href ? '#6366f1' : '#ffffff',
                      mb: 2,
                      textAlign: 'center',
                      '&:hover': { color: '#6366f1' },
                      transition: 'color 0.3s',
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: 40 }}
            >
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large" sx={{ px: 4 }}>
                  Book a Call
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
