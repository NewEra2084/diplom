import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "./providers/QueryProvider";
import { NextIntlClientProvider } from "next-intl";
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
    <html>
      <body className="transition-all">
        <QueryProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
