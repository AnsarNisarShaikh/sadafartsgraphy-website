import { Geist, Geist_Mono, Pacifico, Playwrite_AU_NSW } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/general/Header";
import Footer from "@/components/general/Footer"
import localFont from 'next/font/local';

  const halimun = localFont({
      src: '../public/fonts/Halimun.ttf', // Adjust path as needed
      variable: '--font-halimun',
    });

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playwrite = Playwrite_AU_NSW({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playwrite",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000'),
  title: "Best Calligraphy & Custom Art Services in Riyadh | Sadaf Khan",
  description: "Arabic & English calligraphy, murals, leather art, engraving & bespoke designs in Riyadh. Unique, handcrafted artworks with modern creativity",
  //google search console
  other: {
    "google-site-verification": "xdUH8d4OMk6nITvy47XLeL5OUnAieqJDsOTinjg2CGg",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
  },
  openGraph: {
    title: "Best Calligraphy & Custom Art Services in Riyadh | Sadaf Khan",
    description:
      "Arabic & English calligraphy, murals, leather art, engraving & bespoke designs in Riyadh. Unique, handcrafted artworks with modern creativity",
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    siteName: "sadafartsgraphy",
    images: [
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Sadaf Artsgraphy - Calligraphy & Art Services",
      },
    ],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Calligraphy & Custom Art Services in Riyadh | Sadaf Khan",
    description:
      "Arabic & English calligraphy, murals, leather art, engraving & bespoke designs in Riyadh. Unique, handcrafted artworks with modern creativity",
    images: ["/images/social-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sadaf Artsgraphy",
              url: process.env.NEXT_PUBLIC_WEBSITE_URL,
              sameAs: [
                "https://www.instagram.com/sadafartsgraphy",
                "https://www.linkedin.com/in/sadaf-khan-9894122b2",
                "https://www.facebook.com/sadaf.ambreen.35/about_work_and_education",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${halimun.variable} ${playwrite.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}

      >
        <Header />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
