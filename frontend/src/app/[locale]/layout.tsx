"use server";
import { hasLocale } from "next-intl";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cookies } from "next/headers";
import { ThemeInitializer } from "@/features/theme";
import { setThemeCookie } from "@/features/theme/ui/SetThemeCookie";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const store = await cookies();
  const theme = store.get("theme")?.value;
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  if(!theme){

    setThemeCookie("light");
  }

  return (
    <>
      <ThemeInitializer theme={theme} />
      <Header />
      <main className="px-25 py-[min(10vw,50px)] h-[90vh] dark:bg-dark-main dark:text-dark-accent transition-all duration-700">
        {children}
      </main>
      <Footer />
    </>
  );
}
