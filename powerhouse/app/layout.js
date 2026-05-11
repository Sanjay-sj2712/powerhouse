import './globals.css';
import ThemeRegistry from '../components/providers/ThemeRegistry';
import SmoothScrollProvider from '../components/providers/SmoothScrollProvider';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoadingScreen from '../components/ui/LoadingScreen';

export const metadata = {
  title: {
    template: '%s | Powerhouse — Creative Digital Agency',
    default: 'Powerhouse — Creative Digital Agency',
  },
  description:
    'Powerhouse is a premium creative digital agency specializing in video editing, digital marketing, UI/UX design, social media management, personal branding, and custom software development.',
  keywords: ['digital agency', 'video editing', 'digital marketing', 'UI/UX design', 'web development', 'software development'],
  openGraph: {
    type: 'website',
    siteName: 'Powerhouse',
    title: 'Powerhouse — Creative Digital Agency',
    description: 'Premium creative digital agency. We build digital power.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>
          <SmoothScrollProvider>
            <LoadingScreen />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
