import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider";
import { companyConfig } from "@/config/company.config";

export const metadata: Metadata = {
  title: {
    default: companyConfig.name,
    template: `%s — ${companyConfig.shortName}`,
  },
  description:
    "Bengaluru road, air, ocean and warehouse logistics with every handoff accounted for.",
  keywords: [
    "Bengaluru logistics",
    "Peenya freight",
    "shipment tracking",
    "road freight India",
  ],
  openGraph: {
    type: "website",
    siteName: companyConfig.name,
    title: companyConfig.name,
    description: companyConfig.descriptor,
  },
  twitter: {
    card: "summary_large_image",
    title: companyConfig.name,
    description: companyConfig.descriptor,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollRevealProvider />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
