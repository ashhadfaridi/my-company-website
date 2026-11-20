import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-500.css";
import "@fontsource/ibm-plex-sans/latin-600.css";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

const title = "Brightdoor Tech | Websites, software, AI and lead generation for growing businesses";
const description =
  "Brightdoor Tech builds websites, online booking, inventory and custom software, AI tools and lead generation for small and mid-sized businesses, and recovers lost leads for established teams on a pay-per-conversion basis.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Brightdoor Tech",
  },
  description,
  keywords: [
    "small business website",
    "online booking system",
    "inventory management software",
    "custom software",
    "AI solutions for business",
    "lead generation",
    "lead reactivation",
    "IT consulting",
    "business automation",
  ],
  authors: [{ name: "Brightdoor Tech" }],
  creator: "Brightdoor Tech",
  publisher: "Brightdoor Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Brightdoor Tech",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brightdoor Tech",
              description,
              email: "hello@brightdoortech.com",
              founder: { "@type": "Person", name: "Ashhad Faridi" },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
