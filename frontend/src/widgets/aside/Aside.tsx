import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";
import { AsideElement } from "./components/AsideElement";

type Props = {
  children?: ReactNode;
  title: string;
  elementOnClick: (id: number) => void;
  elements: { id: number; name: string }[];
  currentIndex: number;
};

export const Aside = ({
  children,
  currentIndex,
  title,
  elements,
  elementOnClick,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex gap-3">
      {isOpen && (
        <aside
          className={`h-full select-none p-8 rounded-xl border-2 border-secondary dark:border-dark-secondary`}
        >
          <h4 className="text-2xl mb-5">{title}</h4>
          {elements.map((item) => (
            <AsideElement
              onClick={() => elementOnClick(item.id)}
              key={item.id}
              className={`${item.id === currentIndex ? "bg-accent hover:bg-none" : "hover:bg-accent/70"}`}
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
