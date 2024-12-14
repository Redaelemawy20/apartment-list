import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const roboto = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Happy home',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
