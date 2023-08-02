"use client";
import { Provider } from "@/hoc/SessionProvider";
import "./globals.css";
import { ToastContainer } from "@/hoc/ToasterContainer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
        <ToastContainer />
      </body>
    </html>
  );
}
