import { Inter, Lusitana } from 'next/font/google';

// Define Inter font
export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// ✅ Define Lusitana font and export it
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // Normal (400) and Bold (700)
  variable: '--font-lusitana',
});
