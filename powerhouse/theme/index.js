'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#8b5cf6',
      light: '#a78bfa',
      dark: '#7c3aed',
    },
    background: {
      default: '#050507',
      paper: 'rgba(255,255,255,0.03)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
    divider: 'rgba(255,255,255,0.06)',
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 900,
      lineHeight: 1.0,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.7,
      color: '#94a3b8',
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      color: '#64748b',
    },
    overline: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.15em',
      fontSize: '0.7rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          textTransform: 'none',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 600,
          letterSpacing: '0',
          padding: '12px 28px',
          fontSize: '0.95rem',
          transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          boxShadow: '0 0 30px rgba(99,102,241,0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            boxShadow: '0 0 50px rgba(99,102,241,0.5)',
            transform: 'translateY(-2px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(99,102,241,0.5)',
          color: '#ffffff',
          '&:hover': {
            borderColor: '#6366f1',
            background: 'rgba(99,102,241,0.1)',
            boxShadow: '0 0 30px rgba(99,102,241,0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.03)',
            '& fieldset': {
              borderColor: 'rgba(255,255,255,0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(99,102,241,0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6366f1',
              boxShadow: '0 0 20px rgba(99,102,241,0.2)',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#64748b',
            '&.Mui-focused': {
              color: '#6366f1',
            },
          },
          '& .MuiOutlinedInput-input': {
            color: '#ffffff',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 500,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '12px !important',
          marginBottom: '8px',
          '&:before': { display: 'none' },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '8px 24px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          background: 'rgba(255,255,255,0.03)',
          color: '#ffffff',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255,255,255,0.1)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(99,102,241,0.5)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6366f1',
          },
        },
      },
    },
  },
});

export default theme;
