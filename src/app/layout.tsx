import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";

const raleway = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Kayode Babalola",
  description: "Kayode Babalola - Frontend Engineer",
  openGraph: {
    title: "Kayode Babalola",
    description: "Kayode Babalola - Frontend Engineer",
    url: "https://kayodedev.com",
    siteName: "Kayode Babalola",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Kayode Babalola",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased h-full w-full md:p-8  text-neutral-200 bg-neutral-950 bg-fixed  pb-0`}
      >
        <main className=" p-4 md:p-0 max-w-4xl mx-auto flex flex-col justify-between h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
