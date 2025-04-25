import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Legalo",
  icons: {
    icon: "/logo.png",
  },
  description: "Legal documents don’t have to be complicated. With our tool, you can generate clear, professional agreements in minutes, no legal jargon, no hassle. Just simple, reliable documents tailored to your needs."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}
