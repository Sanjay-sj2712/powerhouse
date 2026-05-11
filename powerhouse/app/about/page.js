'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Container, Typography, Grid, Avatar, IconButton, Divider } from '@mui/material';
import { Twitter, LinkedIn, GitHub } from '@mui/icons-material';

const timeline = [
  { year: '2020', title: 'Founded in New York', description: 'Powerhouse was born with a mission to help brands dominate their digital presence.' },
  { year: '2021', title: 'First 10 Clients', description: 'Grew our client base rapidly with word-of-mouth referrals from outstanding results.' },
  { year: '2022', title: 'Expanded Services', description: 'Launched our software development and advanced marketing divisions.' },
  { year: '2023', title: '50+ Projects Delivered', description: 'Surpassed 50 projects and generated over 5M views for our clients.' },
  { year: '2024', title: 'International Expansion', description: 'Started working with brands across 3 continents and 10+ industries.' },
  { year: '2025', title: '100+ Projects & Beyond', description: 'Powerhouse now serves 50+ active brands and continues to grow.' },
];

const team = [
  { name: 'Alex Rivera', role: 'Founder & Creative Director', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', bio: '10+ years in brand strategy and creative direction.' },
  { name: 'Priya Patel', role: 'Head of Design', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', bio: 'Former designer at top tech companies. UX obsessed.' },
  { name: 'Marcus Webb', role: 'Lead Developer', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', bio: 'Full-stack engineer with a love for performance & DX.' },
  { name: 'Sofia Chen', role: 'Marketing Director', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', bio: 'Data-driven strategist. Grew brands from 0 to millions.' },
];

const values = [
  { title: 'Obsessed with Results', description: 'We measure success by your growth, not just deliverables.' },
  { title: 'Radical Transparency', description: 'No hidden fees, no jargon. Just honest, clear communication.' },
  { title: 'Craft Over Everything', description: 'Every pixel, every word, every line of code is deliberate.' },
  { title: 'Partnership Mindset', description: 'We treat your business like our own.' },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true });
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true });
  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true });

  return (
    <Box sx={{ pt: 12, background: '#050507', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Box ref={heroRef} sx={{ pt: 8, pb: 8, textAlign: 'center', position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(99,102,241,0.1), transparent)', pointerEvents: 'none' }} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', mb: 2 }}>Our Story</Typography>
            <Typography component="h1" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 900, fontSize: { xs: '2.8rem', md: '5.5rem' }, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#ffffff', mb: 3 }}>
              CREATIVITY
              <br />
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MEETS</Box>
              <br />
              STRATEGY.
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', fontWeight: 400, maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}>
              We are a digital powerhouse helping brands become unforgettable — blending creative excellence with data-driven strategy.
            </Typography>
          </motion.div>
        </Box>

        {/* Mission & Vision */}
        <Box ref={missionRef} sx={{ mb: 12 }}>
          <Grid container spacing={3}>
            {[
              { label: 'Our Mission', title: 'Make Brands Unforgettable', text: 'We exist to help brands break through the noise and build lasting digital legacies. Every project we take on is treated as a partnership — not a transaction.', color: '#6366f1' },
              { label: 'Our Vision', title: 'Redefine What\'s Possible', text: 'We envision a world where every ambitious brand has access to world-class creative and technical excellence. We are building that future, one project at a time.', color: '#ec4899' },
            ].map((item, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.label}>
                <motion.div initial={{ opacity: 0, y: 40 }} animate={isMissionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.15 }}>
                  <Box sx={{ p: { xs: 4, md: 6 }, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', height: '100%', position: 'relative', overflow: 'hidden', '&:hover': { border: `1px solid ${item.color}30` }, transition: 'border 0.3s' }}>
                    <Box sx={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: `radial-gradient(circle, ${item.color}15, transparent)`, filter: 'blur(30px)' }} />
                    <Typography variant="overline" sx={{ color: item.color, display: 'block', mb: 2 }}>{item.label}</Typography>
                    <Typography variant="h4" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 800, color: '#ffffff', mb: 2 }}>{item.title}</Typography>
                    <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 1.8 }}>{item.text}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline */}
        <Box ref={timelineRef} sx={{ mb: 12 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isTimelineInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', textAlign: 'center', mb: 2 }}>Our Journey</Typography>
            <Typography variant="h3" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 800, textAlign: 'center', color: '#ffffff', mb: 8 }}>The Powerhouse Story</Typography>
          </motion.div>
          <Box sx={{ position: 'relative', '&::before': { content: '""', position: 'absolute', left: { xs: 24, md: '50%' }, top: 0, bottom: 0, width: 1, background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.4) 20%, rgba(99,102,241,0.4) 80%, transparent)', transform: { md: 'translateX(-50%)' } } }}>
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} animate={isTimelineInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.1 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: i % 2 === 0 ? 'row-reverse' : 'row' }, mb: 5, position: 'relative', pl: { xs: 8, md: 0 } }}>
                  <Box sx={{ flex: 1, textAlign: { xs: 'left', md: i % 2 === 0 ? 'right' : 'left' }, px: { md: 5 } }}>
                    <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 900, fontSize: '1.5rem', color: '#6366f1', mb: 0.5 }}>{item.year}</Typography>
                    <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, color: '#ffffff', mb: 1 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7 }}>{item.description}</Typography>
                  </Box>
                  <Box sx={{ position: { xs: 'absolute', md: 'relative' }, left: { xs: 12, md: 'auto' }, top: 4, width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', flexShrink: 0, alignSelf: { md: 'flex-start' }, mt: { md: 0.5 }, zIndex: 1 }} />
                  <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Values */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', textAlign: 'center', mb: 2 }}>What We Stand For</Typography>
          <Typography variant="h3" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 800, textAlign: 'center', color: '#ffffff', mb: 6 }}>Our Core Values</Typography>
          <Grid container spacing={3}>
            {values.map((v, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={v.title}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Box sx={{ p: 4, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', '&:hover': { border: '1px solid rgba(99,102,241,0.3)', boxShadow: '0 20px 40px rgba(99,102,241,0.1)' }, transition: 'all 0.3s' }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: '10px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <Typography sx={{ color: '#6366f1', fontWeight: 900, fontSize: '0.9rem' }}>{String(i + 1).padStart(2, '0')}</Typography>
                    </Box>
                    <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, color: '#ffffff', mb: 1 }}>{v.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7 }}>{v.description}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team */}
        <Box ref={teamRef} sx={{ mb: 12 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isTeamInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', textAlign: 'center', mb: 2 }}>Meet the Team</Typography>
            <Typography variant="h3" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 800, textAlign: 'center', color: '#ffffff', mb: 8 }}>The People Behind the Power</Typography>
          </motion.div>
          <Grid container spacing={3}>
            {team.map((member, i) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={member.name}>
                <motion.div initial={{ opacity: 0, y: 40 }} animate={isTeamInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}>
                  <Box sx={{ p: 3, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', textAlign: 'center', transition: 'all 0.3s', '&:hover': { border: '1px solid rgba(99,102,241,0.3)', transform: 'translateY(-6px)', '& .team-avatar': { borderColor: '#6366f1' } } }}>
                    <Avatar className="team-avatar" src={member.avatar} sx={{ width: 80, height: 80, mx: 'auto', mb: 2, border: '2px solid rgba(255,255,255,0.1)', transition: 'border-color 0.3s' }} />
                    <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, color: '#ffffff', mb: 0.5 }}>{member.name}</Typography>
                    <Typography variant="body2" sx={{ color: '#6366f1', fontSize: '0.8rem', mb: 1.5 }}>{member.role}</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.6, mb: 2 }}>{member.bio}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                      {[<Twitter sx={{ fontSize: '1rem' }} />, <LinkedIn sx={{ fontSize: '1rem' }} />].map((icon, j) => (
                        <IconButton key={j} size="small" sx={{ color: '#64748b', '&:hover': { color: '#6366f1' }, transition: 'color 0.3s' }}>{icon}</IconButton>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
