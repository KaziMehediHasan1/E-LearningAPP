"use client";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "@/components/NavBar/NavBar";
import AuthProvider from "@/services/AuthProvider";
import Footer from "@/components/Footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <body className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow min-h-[calc(100vh - 482px)]">
              {children}
            </main>
            <Footer />
            <ToastContainer />
          </body>
        </QueryClientProvider>
      </AuthProvider>
    </html>
  );
}
