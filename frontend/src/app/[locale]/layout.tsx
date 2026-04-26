import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { QueryProvider } from "../providers/QueryProvider";
export const metadata: Metadata = {
  title: "Scrumify",
  description: "The scrum management tool",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className="transition-all">
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="px-25 py-[min(10vw,50px)] h-[90vh] dark:bg-dark-main dark:text-dark-accent transition-all duration-700">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}