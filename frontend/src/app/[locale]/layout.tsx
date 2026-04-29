"use server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cookies } from "next/headers";
import { ThemeInitializer } from "@/features/theme";
import { QueryProvider } from "../providers/QueryProvider";
import { getMessages } from "next-intl/server";
import MotionProvider from "../providers/MotionProvider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const store = await cookies();
  const theme = store.get("theme")?.value as "light" | "dark";
  const { locale } = await params;
  const messages = await getMessages({ locale });
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <QueryProvider>
        <MotionProvider>
          <ThemeInitializer serverTheme={theme} />
          <Header />
          <main className="px-10 lg:px-25 py-[min(10vw,50px)] dark:bg-dark-main dark:text-dark-accent transition-all duration-700">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </QueryProvider>
    </NextIntlClientProvider>
  );
}
