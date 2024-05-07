import { Providers } from '@/styles/providers';
import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/Navbar'));
const NavbarBottom = dynamic(() => import('@/components/layout/NavbarBottom'));

export const metadata: Metadata = {
  title: 'PWA',
  description: 'PWA Application',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['pwa', 'next-pwa'],
  icons: [
    { rel: 'apple-touch-icon', url: 'manifest-icons/icon-128.png' },
    { rel: 'icon', url: 'manifest-icons/icon-128.png' },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  colorScheme: 'light',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>
            <Navbar />
            {children}
          </main>
          <NavbarBottom />
        </Providers>
      </body>
    </html>
  );
}
