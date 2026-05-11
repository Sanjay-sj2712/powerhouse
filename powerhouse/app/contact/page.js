'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Container, Typography, Grid, TextField, MenuItem, Button, Alert, Snackbar } from '@mui/material';
import { Email, Phone, LocationOn, CalendarMonth, ArrowForward } from '@mui/icons-material';

const services = ['Video Editing', 'Digital Marketing', 'UI/UX Design', 'Social Media Management', 'Personal Branding', 'Website Development', 'Custom Software Development', 'Multiple Services'];
const budgets = ['Under $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+'];

const contactInfo = [
  { icon: <Email />, label: 'Email', value: 'hello@powerhouse.agency', color: '#6366f1' },
  { icon: <Phone />, label: 'Phone', value: '+1 (555) 000-0000', color: '#8b5cf6' },
  { icon: <LocationOn />, label: 'Location', value: 'New York, NY 10001', color: '#ec4899' },
];

export default function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });

  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  };

  return (
    <Box sx={{ pt: 12, background: '#050507', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Box ref={heroRef} sx={{ pt: 8, pb: 8, textAlign: 'center', position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(236,72,153,0.1), transparent)', pointerEvents: 'none' }} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <Typography variant="overline" sx={{ color: '#ec4899', display: 'block', mb: 2 }}>Get In Touch</Typography>
            <Typography component="h1" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 900, fontSize: { xs: '2.8rem', md: '5.5rem' }, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#ffffff', mb: 3 }}>
              LET'S CREATE{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>IMPACT.</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', fontWeight: 400, maxWidth: 500, mx: 'auto' }}>Tell us about your project. We'll get back to you within 24 hours.</Typography>
          </motion.div>
        </Box>

        <Grid container spacing={6} sx={{ mb: 12 }}>
          {/* Contact Info + Booking */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {/* Contact cards */}
              {contactInfo.map((info, i) => (
                <Box key={info.label} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3, mb: 2, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', transition: 'all 0.3s', '&:hover': { border: `1px solid ${info.color}30`, boxShadow: `0 10px 30px ${info.color}15` } }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: '12px', background: `${info.color}15`, border: `1px solid ${info.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: info.color, flexShrink: 0 }}>{info.icon}</Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.75rem', mb: 0.3 }}>{info.label}</Typography>
                    <Typography sx={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem', fontFamily: '"Space Grotesk"' }}>{info.value}</Typography>
                  </Box>
                </Box>
              ))}

              {/* Booking card */}
              <Box sx={{ mt: 3, p: 4, background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <CalendarMonth sx={{ color: '#6366f1' }} />
                  <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, color: '#ffffff' }}>Schedule a Discovery Call</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.7, mb: 3 }}>Book a free 30-minute strategy session with our team. We'll discuss your goals and how we can help.</Typography>
                <Box sx={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', p: 3, border: '1px solid rgba(255,255,255,0.08)' }}>
                  {['Mon–Fri, 9AM–6PM EST', '30-minute free session', 'No commitment required'].map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1', flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.85rem' }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button variant="contained" fullWidth sx={{ mt: 2 }} endIcon={<ArrowForward />}>Book a Call</Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 8 }} ref={formRef}>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={isFormInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
              <Box sx={{ p: { xs: 3, md: 5 }, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px' }}>
                <Typography variant="h5" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, color: '#ffffff', mb: 4 }}>Tell Us About Your Project</Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Your Name" name="name" value={form.name} onChange={handleChange} required />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Company (Optional)" name="company" value={form.company} onChange={handleChange} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth select label="Service Needed" name="service" value={form.service} onChange={handleChange} required>
                        {services.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth select label="Project Budget" name="budget" value={form.budget} onChange={handleChange}>
                        {budgets.map((b) => <MenuItem key={b} value={b}>{b}</MenuItem>)}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth multiline rows={5} label="Tell us about your project..." name="message" value={form.message} onChange={handleChange} required />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button type="submit" variant="contained" fullWidth size="large" disabled={loading} endIcon={<ArrowForward />} sx={{ py: 1.8, fontSize: '1rem' }}>
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={submitted} autoHideDuration={6000} onClose={() => setSubmitted(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" sx={{ background: 'rgba(16,185,129,0.15)', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)' }}>
          Message sent! We'll be in touch within 24 hours. 🚀
        </Alert>
      </Snackbar>
    </Box>
  );
}
