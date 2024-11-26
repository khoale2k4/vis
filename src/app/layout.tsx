import React from "react";
import "./[locale]/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Alpha Storage',
  description: 'The remedy to the challenge of storage',
  applicationName: 'Alpha Storage Solution',
  keywords: ["react", "server components", 'nextjs', 'tailwind', 'storage', 'alphastorage'],
  icons: [{ rel: "favicon", type: 'image/ico', url: "/favicon.ico" }],
  generator: 'nhatdev',
  authors: [{ name: 'nhatdev' }],
  creator: 'nhatdev',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};