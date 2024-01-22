import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  // variable: "--font-mont",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${montserrat.className} bg-light min-h-screen dark:bg-dark relative`}
    >
      <Navbar />
      <Component {...pageProps} />
      <div className="absolute right-8 md:left-8 bottom-[180px] lg:left-auto lg:right-8 lg:bottom-28 3xl:bottom-[180px]">
        <ScrollToTop />
      </div>
      <Footer />
    </main>
  );
}
