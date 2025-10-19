import type { ReactNode } from 'react';
import Head from 'next/head';
import Header from './components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <Head>
        <title>SaaS Landing Page</title>
        <meta name="description" content="SaaS Landing Page" />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}