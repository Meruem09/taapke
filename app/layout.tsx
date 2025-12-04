import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taapke",
  description: "AI handwritten assignments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen m-0 p-0 bg-white text-black">
        {/* Page wrapper */}
        <div className="">
          {/* Outer frame */}
            <div className="top-24 w-full border-t border-black"></div>
            {/* Actual page content */}
            <main className="relative h-full w-full flex flex-col items-center justify-center px-6 sm:px-16">
              {children}
            </main>
          </div>
      </body>
    </html>
  );
}
