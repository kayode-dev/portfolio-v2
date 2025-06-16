import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";

const raleway = Raleway({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kayode Babalola",
  description: "Hi there, I am Kayode Babalola - Frontend Engineer",
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
        <main className=" p-4 md:p-0 md:w-3/5 mx-auto flex flex-col justify-between h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
