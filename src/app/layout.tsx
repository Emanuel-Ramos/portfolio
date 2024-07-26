import Footer from "@/components/GlobalComponents/Footer";
import Header from "@/components/GlobalComponents/Header";
import "@/styles/themes/dark-theme.scss";
import "@/styles/themes/light-theme.scss";
import "@/styles/global.scss";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Head from "next/head";

import classNames from "classnames";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emanuel Portfolio`s",
  description: "My personal portfolio",
};
const cx = classNames.bind(space);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const liClasses = classNames([space.className, classNames("theme", "dark")]);
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/favicon.ico" sizes="any" />
      </Head>
      <body className={liClasses}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
