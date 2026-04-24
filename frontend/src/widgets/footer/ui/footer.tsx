import { Logo } from "@/widgets/header/ui/logo";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-main dark:bg-dark-secondary pt-5">
      <div className="pl-8 pr-5 flex justify-between">
        <div className="flex-2">
          <Logo className="mb-4" />
          <p className="break-normal">
            Scrumify.ru — это система для управления задачами в Scrum-командах,
            которая автоматизирует контроль соблюдения методологии, включая
            проверку Definition of Done и тайм-боксов. Платформа позволяет
            менеджерам и администраторам эффективно распределять задачи,
            отслеживать прогресс спринтов и формировать отчёты, снижая ручную
            нагрузку на команду. Благодаря использованию современных технологий
            (React, Next.js, Spring Boot) и ориентации на российские реалии,
            Scrumify.ru предлагает прозрачную и надёжную альтернативу зарубежным
            аналогам.
          </p>
        </div>
        <div className="flex-5">
          <div className="flex border-b-2">kjk</div>
        </div>
      </div>
      <div className="mt-5 py-5 px-5 border-t-2 flex">Больше контента:</div>
    </footer>
  );
};
