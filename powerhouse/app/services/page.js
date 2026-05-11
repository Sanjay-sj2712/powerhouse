'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Container, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore, MovieCreation, TrendingUp, Palette, Share, Person, Language, Code, CheckCircleOutlined } from '@mui/icons-material';
import MagneticButton from '../../components/ui/MagneticButton';

const services = [
  {
    id: 'video-editing',
    icon: <MovieCreation sx={{ fontSize: 40 }} />,
    title: 'Video Editing',
    tagline: 'Cinematic stories that captivate.',
    description: 'We craft compelling video content that stops the scroll and drives action — from brand films to viral short-form reels.',
    color: '#f59e0b',
    features: ['Brand Films & Commercials', 'Short-Form Reels & TikToks', 'Motion Graphics & VFX', 'Color Grading & Sound Design', 'YouTube & Podcast Production'],
    process: ['Brief & Creative Direction', 'Scripting & Storyboard', 'Shoot / Raw Footage Review', 'Edit & Motion Design', 'Final Delivery & Feedback'],
  },
  {
    id: 'digital-marketing',
    icon: <TrendingUp sx={{ fontSize: 40 }} />,
    title: 'Digital Marketing',
    tagline: 'Growth at scale, data at core.',
    description: 'Performance-driven marketing strategies across all digital channels. We grow audiences, drive traffic, and generate real revenue.',
    color: '#6366f1',
    features: ['SEO & Content Strategy', 'Paid Ads (Meta, Google)', 'Email Marketing Funnels', 'Conversion Rate Optimization', 'Analytics & Reporting'],
    process: ['Audit & Competitor Research', 'Strategy Development', 'Campaign Setup', 'Optimization & A/B Testing', 'Monthly Reporting'],
  },
  {
    id: 'uiux-design',
    icon: <Palette sx={{ fontSize: 40 }} />,
    title: 'UI/UX Design',
    tagline: 'Interfaces built to convert.',
    description: 'Beautiful, intuitive product design that puts user experience first. From wireframes to pixel-perfect UI systems.',
    color: '#ec4899',
    features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Mobile & Web App Design', 'Usability Testing'],
    process: ['Discovery & Research', 'Information Architecture', 'Wireframes & User Flows', 'Visual Design', 'Handoff & Testing'],
  },
  {
    id: 'social-media',
    icon: <Share sx={{ fontSize: 40 }} />,
    title: 'Social Media Management',
    tagline: 'Communities built on strategy.',
    description: 'End-to-end social media management — content creation, scheduling, community management, and growth.',
    color: '#06b6d4',
    features: ['Multi-Platform Management', 'Content Calendar & Scheduling', 'Community Engagement', 'Influencer Partnerships', 'Growth Analytics'],
    process: ['Brand & Audience Audit', 'Content Strategy', 'Content Creation', 'Scheduling & Publishing', 'Monthly Performance Review'],
  },
  {
    id: 'personal-branding',
    icon: <Person sx={{ fontSize: 40 }} />,
    title: 'Personal Branding',
    tagline: 'Become the authority.',
    description: 'Build a powerful personal brand that positions you as a thought leader and drives business opportunities.',
    color: '#a855f7',
    features: ['Brand Identity & Positioning', 'Content Strategy', 'LinkedIn & Social Growth', 'Speaking & PR Opportunities', 'Newsletter & Community'],
    process: ['Brand Discovery Workshop', 'Positioning Strategy', 'Visual Identity', 'Content Roadmap', 'Launch & Ongoing Growth'],
  },
  {
    id: 'web-development',
    icon: <Language sx={{ fontSize: 40 }} />,
    title: 'Website Development',
    tagline: 'Fast. Beautiful. Effective.',
    description: 'Premium websites engineered for performance, conversion, and SEO. Built to impress and built to sell.',
    color: '#10b981',
    features: ['Custom Web Design', 'Next.js & React Development', 'E-Commerce Solutions', 'CMS Integration', 'Speed & SEO Optimization'],
    process: ['Discovery & Sitemap', 'Design & Prototyping', 'Development', 'Testing & QA', 'Launch & Support'],
  },
  {
    id: 'software',
    icon: <Code sx={{ fontSize: 40 }} />,
    title: 'Custom Software Development',
    tagline: 'Built for your exact needs.',
    description: 'Scalable, robust software solutions — from SaaS products to internal tools — engineered for performance and growth.',
    color: '#f43f5e',
    features: ['SaaS Product Development', 'API Design & Integration', 'Database Architecture', 'DevOps & Cloud Deployment', 'Maintenance & Support'],
    process: ['Requirements Analysis', 'System Architecture', 'Agile Development Sprints', 'QA & Testing', 'Deployment & Monitoring'],
  },
];

const faqs = [
  { q: 'How long does a typical project take?', a: 'Project timelines vary by scope. A website typically takes 4-8 weeks, while a brand identity or software project may take 8-16 weeks. We provide detailed timelines during discovery.' },
  { q: 'What is your pricing structure?', a: 'We offer project-based and retainer pricing depending on the service. After a free discovery call, we provide a detailed proposal with clear, transparent pricing.' },
  { q: 'Do you work with startups?', a: 'Absolutely. We work with businesses of all sizes — from early-stage startups to established enterprises. We tailor our approach to your stage and budget.' },
  { q: 'Can I see work samples before committing?', a: 'Yes! We have a full portfolio on our Projects page and can share additional relevant case studies during the discovery call.' },
  { q: 'What makes Powerhouse different from other agencies?', a: 'We are a team of specialists, not generalists. Every service is handled by an expert in that field. We are obsessed with results, not just deliverables.' },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <Box ref={ref} id={service.id} sx={{ mb: 3 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <Box sx={{ p: { xs: 3, md: 5 }, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', transition: 'border 0.3s ease, box-shadow 0.3s ease', '&:hover': { border: `1px solid ${service.color}30`, boxShadow: `0 10px 40px ${service.color}10` } }}>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ width: 64, height: 64, borderRadius: '16px', background: `${service.color}15`, border: `1px solid ${service.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: service.color, mb: 3 }}>{service.icon}</Box>
              <Typography variant="overline" sx={{ color: service.color, display: 'block', mb: 1 }}>{service.tagline}</Typography>
              <Typography variant="h4" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 800, color: '#ffffff', mb: 2 }}>{service.title}</Typography>
              <Typography variant="body1" sx={{ color: '#94a3b8', mb: 3, lineHeight: 1.8 }}>{service.description}</Typography>
              <MagneticButton href="/contact" variant="contained" sx={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}99)`, boxShadow: `0 0 20px ${service.color}30` }}>Get Started</MagneticButton>
            </Grid>
            <Grid size={{ xs: 12, md: 3.5 }}>
              <Typography variant="overline" sx={{ color: '#64748b', display: 'block', mb: 2 }}>What's Included</Typography>
              {service.features.map((f) => (
                <Box key={f} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <CheckCircleOutlined sx={{ color: service.color, fontSize: '1rem' }} />
                  <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem' }}>{f}</Typography>
                </Box>
              ))}
            </Grid>
            <Grid size={{ xs: 12, md: 3.5 }}>
              <Typography variant="overline" sx={{ color: '#64748b', display: 'block', mb: 2 }}>Our Process</Typography>
              {service.process.map((step, i) => (
                <Box key={step} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                  <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: `${service.color}20`, border: `1px solid ${service.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, mt: 0.2 }}>
                    <Typography sx={{ color: service.color, fontSize: '0.65rem', fontWeight: 700 }}>{i + 1}</Typography>
                  </Box>
                  <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>{step}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
}


export default function ServicesPage() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true });

  return (
    <Box sx={{ pt: 12, background: '#050507', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Box ref={heroRef} sx={{ pt: 8, pb: 10, textAlign: 'center', position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.12), transparent)', pointerEvents: 'none' }} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', mb: 2 }}>What We Offer</Typography>
            <Typography component="h1" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 900, fontSize: { xs: '2.8rem', md: '5rem' }, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#ffffff', mb: 3 }}>
              SERVICES THAT{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SCALE BRANDS.</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', fontWeight: 400, maxWidth: 500, mx: 'auto', mb: 4 }}>Every service is engineered to grow your brand, drive revenue, and make an unforgettable impact.</Typography>
          </motion.div>
        </Box>

        {/* Service Cards */}
        {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}

        {/* FAQ */}
        <Box ref={faqRef} sx={{ mt: 12, mb: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <Typography variant="overline" sx={{ color: '#6366f1', display: 'block', textAlign: 'center', mb: 2 }}>FAQ</Typography>
            <Typography variant="h3" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 800, textAlign: 'center', color: '#ffffff', mb: 6 }}>Common Questions</Typography>
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}>
                <Accordion sx={{ mb: 1.5 }}>
                  <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#6366f1' }} />}>
                    <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 600, color: '#ffffff' }}>{faq.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: '#94a3b8', lineHeight: 1.8 }}>{faq.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
