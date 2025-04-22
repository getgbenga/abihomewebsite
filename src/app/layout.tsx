import { Playfair_Display } from 'next/font/google';
import './globals.css';
import './partners/partners.css';
import './critical.css'; // Import critical CSS first

// Remove Google Fonts import and use self-hosted fonts
export const metadata = {
  title: 'Abihomes Ltd - Building Excellence, Ensuring Durability',
  description: 'Abihomes Ltd is a premium construction company specializing in high-quality residential and commercial projects across the UK, including the Omega Apartments development.',
  icons: {
    icon: '/images/logo/abihomes_favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo/abihomes_favicon.png" />
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/images/construction/modern_apartment_1.webp" 
          as="image" 
          type="image/webp"
        />
        {/* Self-hosted fonts */}
        <link rel="stylesheet" href="/fonts/fonts.css" />
        {/* Preload critical fonts */}
        <link 
          rel="preload" 
          href="/fonts/playfair-display-700.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/fonts/montserrat-400.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
