// Import global styles and font settings
import '@/app/ui/global.css'; 
import { inter } from '@/app/ui/fonts'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* 
          inter.className:
          - Applies the Inter font to the entire app.
          - This class is dynamically generated using @next/font/google 
            or a custom font configuration in `fonts.ts`.
          - Ensures that the specified font is properly loaded 
            and applied globally.

          antialiased:
          - A Tailwind CSS utility class that improves font rendering.
          - Uses grayscale antialiasing instead of subpixel rendering.
          - Makes text appear smoother, particularly on high-DPI screens.
        */}
        {children}
      </body>
    </html>
  );
}
