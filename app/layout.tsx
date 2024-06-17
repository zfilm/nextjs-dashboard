import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: '%s | MysAcme Dashboardene' , //%s er title from the page
  default: 'Default Acme Dashboardet'
},
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-vercel-1.vercel.app'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
