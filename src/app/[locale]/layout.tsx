import { Koh_Santepheap } from 'next/font/google';
import './globals.css';
import { LocaleLayout } from '@/components/layout';
import { Toaster } from 'sonner';
import { siteConfig } from '@/common/config';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

const kohSantepheap = Koh_Santepheap({
  subsets: ['khmer', 'latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [{ name: 'Thai Dymong', url: '' }],
  appleWebApp: {
    capable: true,
    statusBarStyle: '#2980B9',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.thumbnailImage,
      },
    ],
  },
  icons: '/favicon.ico',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kohSantepheap.className}`}>
        <Toaster
          richColors
          style={{
            fontFamily: kohSantepheap.style.fontFamily,
            fontSize: '11pt',
          }}
        />
        <LocaleLayout>
          <NuqsAdapter>{children}</NuqsAdapter>
        </LocaleLayout>
      </body>
    </html>
  );
}
