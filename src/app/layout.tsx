import type { Metadata } from "next";
import "./globals.scss";
import  { Poppins } from 'next/font/google'

const inter =  Poppins({
  subsets: ['latin'],
  weight: ['300','400', '500', '600']
})

export const metadata: Metadata = {
  title: "Gustavo Santos",
  description: "Portifólio de Gustavo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
