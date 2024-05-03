import type { Metadata, Viewport } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

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
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
