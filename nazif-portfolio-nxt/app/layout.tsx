// 'use client';
import "./globals.css";
import { Navbar } from "./components/Navbar";
import {ThemeProvider} from "next-themes"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ThemeProvider enableSystem={true} attribute ="class">
      <body>
        
        <Navbar />
        {children}
        
      </body>
      </ThemeProvider>
    </html>
  );
}
