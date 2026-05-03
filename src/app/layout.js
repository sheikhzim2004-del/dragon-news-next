import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

// defult vabe poppins use kora but jodi ami onno font use korte cai so jkhane use korbo shekhane import kore classname e use korte parbo. tai akhn theke export kore rekhe dilam.
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata = {
  title: "Dragon News",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
      data-theme="light"
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
        </body>
    </html>
  );
}
