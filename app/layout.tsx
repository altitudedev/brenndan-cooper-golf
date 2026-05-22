import type { Metadata } from 'next';
import { Kanit, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ScrollProgress from '@/components/ScrollProgress';

const display = Kanit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});
const body = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brenndancoopergolf.com'),
  title: 'Brenndan Cooper Golf — Serious Coaching for Serious Players',
  description:
    'Long-term player development coaching from a two-time Midwest PGA Teacher of the Year. Programs for serious competitive golfers in Kansas City.',
  icons: { icon: '/logo.png' },
  openGraph: {
    title: 'Brenndan Cooper Golf',
    description: 'Serious Coaching for Serious Players',
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brenndan Cooper Golf',
    description: 'Serious Coaching for Serious Players',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-white text-navy-950 font-body">
        <Preloader />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
