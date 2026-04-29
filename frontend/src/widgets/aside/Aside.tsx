import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import { AsideElement } from "./components/AsideElement";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useLayoutState } from "@/app/store/useLayoutState";

type Props = {
  children?: ReactNode;
  title: string;
  elements: { id: number; name: string; link: string }[];
};

export const Aside = ({ title, elements }: Props) => {
  const { asideIsOpen, setAsideIsOpen} = useLayoutState();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex min-h-[80vh] gap-3">
      {asideIsOpen && (
        <aside
          className={`h-full flex flex-col select-none p-8 rounded-xl border-2 border-secondary dark:border-dark-secondary`}
        >
          <h4 className="text-2xl mb-5">{title}</h4>
          {elements.map((item) => (
            <AsideElement
              key={item.id}
              to={item.link}
              className={`${pathname == "/" + locale + "/settings/" + item.link ? "bg-accent dark:bg-dark-secondary hover:bg-none" : "hover:bg-accent/70 dark:hover:bg-dark-secondary/70"}`}
            >
              {item.name}
            </AsideElement>
          ))}
        </aside>
      )}
      <div
        onClick={() => setAsideIsOpen()}
        className="hover:bg-accent/50 dark:hover:bg-dark-secondary/50 flex items-center transition-all"
      >
        {asideIsOpen ? (
          <ChevronLeft size={30} className="mx-auto" />
        ) : (
          <ChevronRight size={30} className="mx-auto" />
        )}
      </div>
    </div>
  );
};
