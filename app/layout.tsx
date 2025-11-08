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
      <body className="transition-colors duration-500">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
