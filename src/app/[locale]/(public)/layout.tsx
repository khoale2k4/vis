import React from "react";
import PublicLayout from "@/layouts/public_layout";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <PublicLayout>
      {children}
    </PublicLayout>
  );
};