import { Inter, DM_Serif_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "FpoConnect India Pvt. Ltd. | Empowering FPOs for a Sustainable Rural Future",
  description:
    "Integrated Solutions for Digital Infra, Agri Trade, & Farm Tourism. Custom FPO Portals, ERP & MIS Tools, B2B Agri Trading, Farm Tourism Network.",
  keywords: ["FPO", "Farmer Producer Organization", "Agri Tech", "Farm Tourism", "Digital Infrastructure", "Agriculture Trading", "Rural Development", "India"],
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "FpoConnect India Pvt. Ltd. | Empowering FPOs",
    description: "Integrated Solutions for Digital Infra, Agri Trade, & Farm Tourism.",
    url: "https://fpoconnect.in", // Assuming a URL, can be updated later
    siteName: "FpoConnect India",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "FpoConnect India Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FpoConnect India Pvt. Ltd.",
    description: "Empowering FPOs for a Sustainable Rural Future through Digital Infra, Agri Trade, & Farm Tourism.",
    images: ["/logo.jpeg"], // Using logo as the twitter image for now
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
