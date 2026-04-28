import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";
import { AsideElement } from "./components/AsideElement";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

type Props = {
  children?: ReactNode;
  title: string;
  elements: { id: number; name: string; link: string }[];
};

export const Aside = ({ title, elements }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex h-full gap-3">
      {isOpen && (
        <aside
          className={`h-full flex flex-col select-none p-8 rounded-xl border-2 border-secondary dark:border-dark-secondary`}
        >
          <h4 className="text-2xl mb-5">{title}</h4>
          {elements.map((item) => (
            <AsideElement
              key={item.id}
              to={item.link}
              className={`${pathname == "/" + locale + "/settings/" + item.link ? "bg-accent hover:bg-none" : "hover:bg-accent/70"}`}
            >
              {item.name}
            </AsideElement>
          ))}
        </aside>
      )}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="hover:bg-accent/50 flex items-center transition-all"
      >
        {isOpen ? (
          <ChevronLeft size={30} className="mx-auto" />
        ) : (
          <ChevronRight size={30} className="mx-auto" />
        )}
      </div>
    </div>
  );
};
