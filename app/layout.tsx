import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import Providers from "@/utils/Providers";
import connectDB from "@/utils/mongoDB";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Door Automation",
  description: "A collaborative KRS Project!",
};

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connectDB();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SessionProvider>
            {children}
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;