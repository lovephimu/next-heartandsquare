import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import FooterBottom from './components/FooterBottom';
import NavigationTop from './components/NavigationTop';
import { Providers } from './providers';

const roboto = Roboto_Slab({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
  title: 'Heart and Square',
  description: 'by Philipp Soeparno',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-firstBlue h-[100dvh]`}>
        <Providers>
          <NavigationTop />
          {children}
          <FooterBottom />
        </Providers>
      </body>
    </html>
  );
}
