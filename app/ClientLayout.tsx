"use client";

import type React from "react";
import { Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { migrateLocalStorageData } from "@/lib/data-migration";
import { ReactQueryProvider } from "@/lib/react-query";

const noto = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    migrateLocalStorageData(); // Run migration on app load
  }, []);

  return (
    <html lang="my">
      <body className={noto.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
