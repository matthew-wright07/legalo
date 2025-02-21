import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Legalo",
  icons: {
    icon: "/logo.png",
  },
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
