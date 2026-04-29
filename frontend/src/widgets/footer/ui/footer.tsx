/* eslint-disable @next/next/no-img-element */
import { Link } from "@/i18n/navigation";
import Github from "@/../public/Github.svg";
import Telegram from "@/../public/Telegram.svg";
import { Logo } from "@/widgets/header/ui/logo";
import { GITHUB, TELEGRAM } from "@/shared/config/env";
import { ThemeSwitcher } from "@/features/theme";
import { LocaleSwitcher } from "@/features/language/LanguageSwitcher";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-main dark:bg-dark-secondary pt-5">
      <div className="pl-8 pr-5 flex gap-2 justify-between">
        <div className="flex-2">
          <Logo className="mb-4" />
          <p className="break-normal text-sm">
            Scrumify.ru — это система для управления задачами в Scrum-командах,
            которая автоматизирует контроль соблюдения методологии, включая
            проверку тайм-боксов. Платформа позволяет менеджерам и
            администраторам эффективно распределять задачи и отслеживать
            прогресс спринтов, снижая ручную нагрузку на команду.
          </p>
        </div>
        <div className="flex-4">
          <div className="flex lg:flex-row flex-col lg:px-10 text-lg pt-3">
            <div>
              <h4 className="text-xl text-right lg:text-left border-b-2 font-bold text-[#DD5957] border-accent">
                Страницы
              </h4>
              <ul className="flex-1 border-l-2 border-l-accent">
                <FooterLink href={"/"} text={"Главная"} />
                <FooterLink href={"/profile"} text={"Профиль"} />
                <FooterLink href={"/settings"} text={"Настройки"} />
                <FooterLink href={"/buy"} text={"Оформить компанию"} />
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-right lg:text-left border-b-2 font-bold text-[#DD5957] border-accent">
                Больше
              </h4>
              <ul className="flex-1 border-l-2 border-l-accent">
                <FooterLink href={GITHUB} text={"Выпуски"} />
                <FooterLink href={GITHUB} text={"GitHub"} />
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-right lg:text-left border-b-2 font-bold text-[#DD5957] border-accent">
                О Scrumify
              </h4>
              <ul className="flex-1 border-l-2 border-l-accent">
                <FooterLink href={GITHUB} text={"GitHub"} />
                <FooterLink href={TELEGRAM} text={"Telegram"} />
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-right lg:text-left border-b-2 font-bold w-full text-[#DD5957] border-accent">
                Рассылка
              </h4>
              <ul className="flex-1 text-sm">
                <form action="">
                  <p className="my-2">
                    Подпишитесь на рассылку чтобы получать свежие обновления
                    первым
                  </p>
                  <div className="flex gap-1 lg:gap-3 rounded-lg border lg:border-2 border-accent p-1 w-fit">
                    <input
                      type="email"
                      className="outline-none w-full text-main"
                      placeholder="placeholder@mail.ru"
                    />
                    <button
                      type="submit"
                      className="border-2 rounded-md lg:p-1"
                    >
                      Отправить
                    </button>
                  </div>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-5 px-5 border-t-2 flex justify-around">
        <p>© {new Date().getFullYear()} Scrumify.ru. Все права защищены.</p>
        <div className="flex gap-4 text-white">
          <Link href={GITHUB}>
            <img
              src={Github.src}
              alt="Github"
              className="w-8 h-8 rounded-lg text-white"
            />
          </Link>
          <Link href={TELEGRAM}>
            <img
              src={Telegram.src}
              alt="Telegram"
              className="w-8 h-8 rounded-lg text-white"
            />
          </Link>
        </div>
      </div>
      <div className="flex gap-3 justify-around items-center pb-5">
        <ThemeSwitcher variant="footer" /> <LocaleSwitcher />
      </div>
    </footer>
  );
};

const FooterLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href}>
      <li className="flex items-center gap-2 lg:pr-10">
        <div className="w-4 h-0.5 bg-accent"></div>
        <span className="hover:text-main/80">{text}</span>
      </li>
    </Link>
  );
};
