'use client';

import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import Link from 'next/link';

// Simplified — removed spring magnetic tracking which caused continuous repaints on mousemove.
// Kept a clean lift + scale on hover via CSS which is GPU-composited and smooth.
export default function MagneticButton({ children, onClick, variant = 'contained', sx = {}, href }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      style={{ display: 'inline-block' }}
    >
      <Button
        component={href ? Link : 'button'}
        variant={variant}
        onClick={onClick}
        href={href}
        sx={sx}
      >
        {children}
      </Button>
    </motion.div>
  );
}
