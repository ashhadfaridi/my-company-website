import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Velocity Labs - Lightning-Fast Custom Digital Solutions",
    template: "%s | Velocity Labs",
  },
  description:
    "We build custom web applications, AI-powered solutions, and digital products at lightning speed. Expert development team specializing in rapid deployment and cutting-edge technology.",
  keywords: [
    "web development",
    "AI solutions",
    "custom software",
    "rapid development",
    "digital agency",
    "automation",
    "API development",
    "web applications",
    "e-commerce",
  ],
  authors: [{ name: "Velocity Labs" }],
  creator: "Velocity Labs",
  publisher: "Velocity Labs",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://velocitylabs.co",
    siteName: "Velocity Labs",
    title: "Velocity Labs - Lightning-Fast Custom Digital Solutions",
    description:
      "Custom web applications, AI solutions, and digital products built at lightning speed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Velocity Labs - Custom Digital Solutions",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Velocity Labs - Lightning-Fast Custom Digital Solutions",
    description:
      "Custom web applications, AI solutions, and digital products built at lightning speed.",
    images: ["/og-image.png"],
    creator: "@velocitylabs",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
              name: "Velocity Labs",
              url: "https://velocitylabs.co",
              logo: "https://velocitylabs.co/logo.png",
              description: "Custom digital solutions built at lightning speed",
              sameAs: [
                "https://twitter.com/velocitylabs",
                "https://github.com/velocitylabs",
                "https://linkedin.com/company/velocitylabs",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
