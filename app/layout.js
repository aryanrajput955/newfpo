import { Inter, DM_Serif_Display } from "next/font/google";
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
  title: "fpOconnect India Pvt. Ltd. | Empowering FPOs for a Sustainable Rural Future",
  description:
    "Integrated Solutions for Digital Infra, Agri Trade, & Farm Tourism. Custom FPO Portals, ERP & MIS Tools, B2B Agri Trading, Farm Tourism Network.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
