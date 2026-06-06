import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { ReactNode } from "react";

import BootstrapClient from "../components/bootstrap-client";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Safieh Moghaddam",
  description: "Academic Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        <Navbar />
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}
