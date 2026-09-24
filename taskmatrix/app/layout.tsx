import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const font = Rajdhani({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font" });

export const metadata: Metadata = {
  title: "TaskMatrix",
  description: "Kanban task board with full CRUD",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07080d",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
