
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'NutriLife Academia',
  description: 'Landing page para NutriLife Academia, redesenhado para um visual moderno e profissional.',
  icons: {
    icon: 'https://placehold.co/32x32.png', // Placeholder for favicon
    apple: 'https://placehold.co/180x180.png', // Placeholder for apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
