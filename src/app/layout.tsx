import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // Import Navbar component
import Footer from "@/components/layout/Footer"; // Import Footer component
import { AuthProvider } from "@/context/AuthContext"; // ✅ Import AuthProvider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura E-Commerce",
  description: "Next.js Clothing Store",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {" "}
          {/* ✅ Wrap everything inside AuthProvider */}
          <Navbar /> {/* Navbar updates instantly after login/logout */}
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
