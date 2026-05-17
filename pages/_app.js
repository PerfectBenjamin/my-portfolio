import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${inter.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
