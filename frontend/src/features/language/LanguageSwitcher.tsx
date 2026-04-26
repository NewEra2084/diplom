'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation'; // ← заменили
import { routing } from '@/i18n/routing';

export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("SettingsPage.languages");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const locales = routing.locales;

  const switchLocale = (newLocale: string) => {
    // router.push сам подставит новую локаль в URL
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className={className + " flex justify-between"}>
      <span className='flex-2/3'>Язык:</span>
      <select
        value={currentLocale}
        onChange={(e) => switchLocale(e.target.value)}
        className="border w-full border-accent dark:border-dark-accent px-5 rounded-t-xl"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {t(locale)}
          </option>
        ))}
      </select>
    </div>
  );
}