import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Footer from "@/components/footer";
import { SiteVersionProvider } from "@/context/SiteVersionContext";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});
const instrumentSans = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-instrument-sans" });

export const metadata: Metadata = {
  title: "JISU",
  description: "JISU S/S 23",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${inter.variable}`}>
      <body className="font-sans">
        <SiteVersionProvider>
          <div className="w-full flex min-h-screen flex-col gap-8 items-center">
            <Navbar />
            <div className="w-full px-4 max-w-screen-sm flex-grow font-sans">{children}</div>
            <Footer />
          </div>
        </SiteVersionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
