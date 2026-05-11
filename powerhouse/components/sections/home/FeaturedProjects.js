'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const projects = [
  {
    title: 'NovaBrand Identity',
    category: 'Branding',
    categoryColor: '#8b5cf6',
    description: 'Complete visual identity system for a tech startup.',
    image: 'https://images.unsplash.com/photo-1636955816868-fcb881e57954?w=800&q=80',
    span: 2,
  },
  {
    title: 'Pulse Marketing Campaign',
    category: 'Digital Marketing',
    categoryColor: '#6366f1',
    description: '10M+ impressions campaign for a fitness brand.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    span: 1,
  },
  {
    title: 'FlowApp UI/UX',
    category: 'UI/UX Design',
    categoryColor: '#ec4899',
    description: 'End-to-end design for a SaaS productivity platform.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    span: 1,
  },
  {
    title: 'Vora E-Commerce Platform',
    category: 'Web Development',
    categoryColor: '#10b981',
    description: 'High-converting ecommerce store with custom CMS.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    span: 1,
  },
  {
    title: 'MotionReel — Brand Film',
    category: 'Video Editing',
    categoryColor: '#f59e0b',
    description: 'Cinematic brand film that went viral with 5M+ views.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    span: 2,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <Grid
      size={{ xs: 12, md: project.span === 2 ? 8 : 4 }}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Box
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            height: { xs: 280, md: project.span === 2 ? 420 : 320 },
            cursor: 'pointer',
            '&:hover .project-overlay': { opacity: 1 },
            '&:hover .project-image': { transform: 'scale(1.08)' },
          }}
        >
          {/* Image */}
          <Box
            className="project-image"
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
            }}
          />

          {/* Gradient base */}
          <Box sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.3) 50%, transparent 100%)',
          }} />

          {/* Hover overlay */}
          <Box
            className="project-overlay"
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(5,5,7,0.6)',
              backdropFilter: 'blur(4px)',
              opacity: 0,
              transition: 'opacity 0.4s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                px: 3,
                py: 1.5,
                background: 'rgba(99,102,241,0.9)',
                borderRadius: '100px',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography sx={{ color: '#ffffff', fontFamily: '"Space Grotesk"', fontWeight: 600, fontSize: '0.9rem' }}>
                View Case Study
              </Typography>
              <ArrowForward sx={{ fontSize: '1rem', color: '#ffffff' }} />
            </Box>
          </Box>

          {/* Content */}
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3 }}>
            <Chip
              label={project.category}
              size="small"
              sx={{
                background: `${project.categoryColor}20`,
                border: `1px solid ${project.categoryColor}40`,
                color: project.categoryColor,
                fontFamily: '"Space Grotesk"',
                fontWeight: 600,
                fontSize: '0.7rem',
                mb: 1.5,
              }}
            />
            <Typography
              variant="h6"
              sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}
            >
              {project.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', mt: 0.5, fontSize: '0.8rem' }}>
              {project.description}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  );
}

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box className="section-padding" sx={{ background: 'rgba(255,255,255,0.01)' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          ref={ref}
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6, flexWrap: 'wrap', gap: 2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', mb: 1 }}>
              Featured Work
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                fontFamily: '"Space Grotesk"',
                fontWeight: 800,
                color: '#ffffff',
              }}
            >
              Projects That{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Move.
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box
              component="a"
              href="/projects"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: '#6366f1',
                textDecoration: 'none',
                fontFamily: '"Space Grotesk"',
                fontWeight: 600,
                fontSize: '0.9rem',
                '&:hover': { color: '#8b5cf6' },
                transition: 'color 0.3s',
              }}
            >
              View All Projects
              <ArrowForward sx={{ fontSize: '1rem' }} />
            </Box>
          </motion.div>
        </Box>

        <Grid container spacing={3}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
