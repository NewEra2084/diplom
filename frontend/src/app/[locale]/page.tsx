import { useTranslations } from "next-intl";
import GetMe from "@/../public/Download.svg";
import Worker from "@/../public/worker.svg";
import Invisible from "@/../public/invisible.svg";
import clocks from "@/../public/clocks.svg";
import { Block } from "@/widgets/previewBlock/Block";
import { RedSpan } from "@/widgets/previewBlock/ui/RedSpan";
import { Link } from "@/i18n/navigation";
import { AutoScrollCarousel } from "@/widgets/carousel";

export default function Page() {
  const t = useTranslations("HomePage");
  return (
    <>
        <div className="hidden lg:flex overflow-hidden lg:flex-col">
          <Block
            title={"Приятно познакомиться!"}
            subTitle={"Scrumify - Успей все вовремя"}
            first
            image={<img src={Worker.src} alt={"Logo 1"} />}
          >
            <p>
              Представляем сервис, который упрощает работу{" "}
              <RedSpan>Scrum</RedSpan>
              -команд.
            </p>
            <p className="hidden lg:inline">
              Вместо того чтобы тратить время на ручное администрирование,
              менеджеры и сотрудники получают{" "}
              <RedSpan>единую платформу</RedSpan> для постановки задач, контроля
              сроков и анализа результатов.
            </p>
            <p className="hidden lg:inline">
              Система <RedSpan>автоматически</RedSpan> проверяет соблюдение
              правил, снижает количество ошибок и повышает предсказуемость
              спринтов.
            </p>
          </Block>
          <Block
            title={"Тайминги - главное"}
            subTitle={"Оставьте эти заботы на Scrumify"}
            reverse={true}
            image={<img src={clocks.src} alt={"Logo 2"} />}
          >
            <p>
              <RedSpan>Соблюдение сроков спринтов</RedSpan> — это база, на
              которой строится предсказуемость всей разработки.
            </p>
            <p className="hidden lg:inline">
              Когда команда укладывается в установленные временные рамки,
              <RedSpan> бизнесу доступны</RedSpan>: <br />
              - Чёткое планирование новых версий продукта
              <br />
              - Управление ожиданиями заказчиков
              <br />
              - Быстрое реагирование на изменения рынка
              <br />
            </p>
            <p className="hidden lg:inline">
              <RedSpan>Нарушение</RedSpan> же сроков спринтов
              <RedSpan> приводит</RedSpan> к сдвигам релиза, накоплению
              технического долга и потере доверия со стороны стейкхолдеров.
            </p>
          </Block>
          <Block
            title={"Процессы = Прозрачность"}
            subTitle={"Оставьте эти заботы на Scrumify"}
            image={<img src={Invisible.src} alt={"Logo 3"} />}
          >
            <p>
              <RedSpan>Прозрачность процессов</RedSpan> в Scrumify
              <RedSpan> создаёт доверие</RedSpan> внутри команды и перед
              руководством: каждый этап работы виден, а результаты измеримы.
            </p>
            <p className="hidden lg:inline">
              <RedSpan>Автоматический расчёт премии</RedSpan> сотрудника на
              основе объективных данных (закрытые задачи, соблюдение сроков,
              качество выполнения) мотивирует работать честнее и эффективнее.
            </p>
            <p className="hidden lg:inline">
              Когда прозрачность подкрепляется справедливым вознаграждением,
              исчезает почва для субъективной оценки — сотрудник понимает, за
              что получает деньги, а
              <RedSpan> бизнес видит реальный вклад каждого</RedSpan>.
            </p>
          </Block>
        </div>
        <AutoScrollCarousel
          interval={5000}
          slideDistance={312}
          className="flex lg:hidden"
        >
          <Block
            title={"Приятно познакомиться!"}
            subTitle={"Scrumify - Успей все вовремя"}
            first
            image={<img src={Worker.src} alt={"Logo 1"} />}
          >
            <p>
              Представляем сервис, который упрощает работу{" "}
              <RedSpan>Scrum</RedSpan>
              -команд.
            </p>
            <p className="hidden lg:inline">
              Вместо того чтобы тратить время на ручное администрирование,
              менеджеры и сотрудники получают{" "}
              <RedSpan>единую платформу</RedSpan> для постановки задач, контроля
              сроков и анализа результатов.
            </p>
            <p className="hidden lg:inline">
              Система <RedSpan>автоматически</RedSpan> проверяет соблюдение
              правил, снижает количество ошибок и повышает предсказуемость
              спринтов.
            </p>
          </Block>
          <Block
            title={"Тайминги - главное"}
            subTitle={"Оставьте эти заботы на Scrumify"}
            reverse={true}
            image={<img src={clocks.src} alt={"Logo 2"} />}
          >
            <p>
              <RedSpan>Соблюдение сроков спринтов</RedSpan> — это база, на
              которой строится предсказуемость всей разработки.
            </p>
            <p className="hidden lg:inline">
              Когда команда укладывается в установленные временные рамки,
              <RedSpan> бизнесу доступны</RedSpan>: <br />
              - Чёткое планирование новых версий продукта
              <br />
              - Управление ожиданиями заказчиков
              <br />
              - Быстрое реагирование на изменения рынка
              <br />
            </p>
            <p className="hidden lg:inline">
              <RedSpan>Нарушение</RedSpan> же сроков спринтов
              <RedSpan> приводит</RedSpan> к сдвигам релиза, накоплению
              технического долга и потере доверия со стороны стейкхолдеров.
            </p>
          </Block>
          <Block
            title={"Процессы = Прозрачность"}
            subTitle={"Оставьте эти заботы на Scrumify"}
            image={<img src={Invisible.src} alt={"Logo 3"} />}
          >
            <p>
              <RedSpan>Прозрачность процессов</RedSpan> в Scrumify
              <RedSpan> создаёт доверие</RedSpan> внутри команды и перед
              руководством: каждый этап работы виден, а результаты измеримы.
            </p>
            <p className="hidden lg:inline">
              <RedSpan>Автоматический расчёт премии</RedSpan> сотрудника на
              основе объективных данных (закрытые задачи, соблюдение сроков,
              качество выполнения) мотивирует работать честнее и эффективнее.
            </p>
            <p className="hidden lg:inline">
              Когда прозрачность подкрепляется справедливым вознаграждением,
              исчезает почва для субъективной оценки — сотрудник понимает, за
              что получает деньги, а
              <RedSpan> бизнес видит реальный вклад каждого</RedSpan>.
            </p>
          </Block>
        </AutoScrollCarousel>
      <Link
        href={"buy"}
        className="lg:hidden mx-auto flex rounded-2xl gap-3 items-center justify-center border-2 border-accent dark:border-dark-accent p-5 w-fit"
      >
        <span className="text-xl">Получить</span>
        <img src={GetMe.src} alt="Download" />
      </Link>
    </>
  );
}
