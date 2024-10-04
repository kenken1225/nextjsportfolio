import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { languages } from "@/app/i18n/setting";
import { dir } from "i18next";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });
// Japanese Website
const notosanJp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ken's Portfolio",
  description: "Created by Ken in Tokyo ",
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lng: string } }) {
  const { lng = "en" } = params || {};

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={lng === "ja" ? notosanJp.className : inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
