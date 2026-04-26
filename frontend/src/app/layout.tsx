import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { QueryProvider } from "./providers/QueryProvider";
export const metadata: Metadata = {
  title: "Scrumify",
  description: "The scrum management tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="transition-all">
        <QueryProvider>
          <Header />
          <main className="px-25 py-[min(10vw,50px)] h-[90vh] dark:bg-dark-main dark:text-dark-accent transition-all duration-700">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
