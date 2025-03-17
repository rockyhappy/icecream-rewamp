import type { Metadata } from 'next';
import './globals.css';
import '@/styles/components.css';
import '@/styles/fixes.css';
import '@/styles/navigation.css';
import '@/styles/color-override.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'PROGRAMMING CLUB',
  description: 'Programming Club Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#EF334C" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="stylesheet" href="/css/stylesheet.css" />
        <link rel="stylesheet" href="/css/ticker.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter">
        {children}
        <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" strategy="beforeInteractive" />
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
} 