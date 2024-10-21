import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Archivo_Black,
  Share_Tech,
  Share_Tech_Mono,
  Inter,
} from "next/font/google";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
});

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${shareTech.className} ${archivoBlack.variable} ${shareTech.variable} ${shareTechMono.variable} ${inter.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
