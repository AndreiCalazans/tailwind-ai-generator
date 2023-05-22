import { SandPackCSS } from "./coms/sandpack-styles";
import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar } from './coms/NavBar';
import Footer from "./coms/Footer";

export { reportWebVitals } from 'next-axiom';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tailwind AI Generator",
  description: "Tailwind component generator powered by LLMs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SandPackCSS />
      </head>
      <body className={`${inter.className} min-h-screen p-6 sm:px-12 xl:px-24`}>
      <NavBar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
