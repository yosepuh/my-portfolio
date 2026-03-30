import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

export const metadata = {
  title: 'Grace Josephine | Portfolio',
  description: 'Portfolio of Grace Josephine',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="transition-colors duration-500">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}