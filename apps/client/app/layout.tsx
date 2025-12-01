import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import WhatsAppButton from "./components/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Safari Adventures Kenya | Best Kenya Safari Packages & Tours",
    template: "%s | Safari Adventures Kenya",
  },
  description:
    "Discover unforgettable Kenya safari packages with Safari Adventures Kenya. Expert-guided Masai Mara tours, African wildlife safaris, and tailored safari experiences. Book your dream Kenya safari today!",
  keywords: [
    "Kenya safari packages",
    "Masai Mara tours",
    "African wildlife safaris",
    "best Kenya tour operators",
    "Kenya safari holidays",
    "Amboseli safari",
    "Tsavo safari",
    "Kenya safari prices",
    "wildlife safari Kenya",
    "luxury Kenya safari",
  ],
  authors: [{ name: "Safari Adventures Kenya" }],
  creator: "Safari Adventures Kenya",
  publisher: "Safari Adventures Kenya",
  metadataBase: new URL("https://safariadventureskenya.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Safari Adventures Kenya | Best Kenya Safari Packages & Tours",
    description:
      "Discover unforgettable Kenya safari packages with expert guides. Masai Mara tours, wildlife safaris, and tailored African adventures.",
    url: "https://safariadventureskenya.com",
    siteName: "Safari Adventures Kenya",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kenya Safari - Wildlife and Landscapes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Adventures Kenya | Best Kenya Safari Packages",
    description:
      "Discover unforgettable Kenya safari packages. Expert-guided Masai Mara tours and African wildlife safaris.",
    images: ["/images/og-image.jpg"],
    creator: "@SafariAdventuresKE",
  },
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
  verification: {
    google: "your-google-verification-code-here",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Safari Adventures Kenya",
  description:
    "Premier Kenya safari tour operator specializing in Masai Mara tours, wildlife safaris, and tailored African adventures.",
  url: "https://safariadventureskenya.com",
  logo: "https://safariadventureskenya.com/images/logo.png",
  image: "https://safariadventureskenya.com/images/og-image.jpg",
  telephone: "+254-123-456-789",
  email: "info@safariadventureskenya.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Safari Street",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    postalCode: "00100",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.286389,
    longitude: 36.817223,
  },
  sameAs: [
    "https://www.facebook.com/SafariAdventuresKE",
    "https://twitter.com/SafariAdventuresKE",
    "https://www.instagram.com/SafariAdventuresKE",
    "https://www.linkedin.com/company/safari-adventures-kenya",
  ],
  priceRange: "$$-$$$",
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
