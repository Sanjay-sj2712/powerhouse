'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Typography } from '@mui/material';

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000, sx = {} }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const startValue = 0;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <Typography ref={ref} sx={sx}>
      {prefix}{count.toLocaleString()}{suffix}
    </Typography>
  );
}
