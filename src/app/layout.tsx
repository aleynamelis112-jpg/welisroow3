
import type {Metadata} from 'next';
import './globals.css';
import {Navigation} from '@/components/Navigation';
import {Footer} from '@/components/Footer';
import {WhatsAppSticky} from '@/components/WhatsAppSticky';
import {MobileBottomNav} from '@/components/MobileBottomNav';
import {Toaster} from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Welis Root Wood | Doğadan Gelen Tasarım',
  description: 'Welis Root Wood ile doğal ahşap dekorasyon, özel tasarım masif mobilya, epoksi tasarımlar ve butik iç-dış mekan çözümlerini keşfedin. İstanbul merkezli yerli üretim.',
  keywords: 'ahşap tasarım, kütük masa, masif mobilya, dekorasyon, iç mekan tasarım, Welis Root Wood, doğal ahşap',
  openGraph: {
    title: 'Welis Root Wood | Doğadan Gelen Tasarım',
    description: 'Doğal ahşabın en saf halini yaşam alanlarınıza taşıyoruz.',
    images: ['/images/urun (1).jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppSticky />
        <MobileBottomNav />
        <Toaster />
      </body>
    </html>
  );
}
