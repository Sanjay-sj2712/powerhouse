'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple 1.2 second loading screen — no heavy progress tracking
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Box sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)',
          }} />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Typography
              sx={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 900,
                fontSize: '2rem',
                letterSpacing: '-0.04em',
                background: 'linear-gradient(135deg, #ffffff, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              POWERHOUSE
            </Typography>
          </motion.div>

          <Typography sx={{ color: '#64748b', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
            CREATIVE DIGITAL AGENCY
          </Typography>

          {/* Simple pulse dot */}
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            style={{ marginTop: 24 }}
          >
            <Box sx={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
