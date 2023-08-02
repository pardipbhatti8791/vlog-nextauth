"use client";
import Sidebar from "@/components/partials/Sidebar";
import { Header } from "@/components/partials/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="dark text-bodydark bg-boxdark-2"> */}
      <body>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
