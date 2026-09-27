import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NTZ Group | Business & Strategic Opportunities in DRC",
    template: "%s | NTZ Group",
  },
  description:
    "NTZ Group is a Congolese business group with five companies spanning diamond mining, hydroelectricity, quarrying, forestry and agriculture in the Democratic Republic of Congo.",
  keywords: ["NTZ Group", "Kasai Sud Diamant", "KSD", "Chadila", "Longatshimo Mining Company", "New Terra-Z", "Terrakili", "DRC", "Kinshasa", "Kasai", "diamonds", "agriculture", "forestry"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NTZ Group",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-warm-white text-charcoal">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
