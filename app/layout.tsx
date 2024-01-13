import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontMont } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-icon-57x57.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen h-[100%] bg-background font-sans antialiased',
          fontMont.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="pt-0 dark:bg-slate-950 flex-grow">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
