import { ChevronLeft } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
};

export const Aside = ({ children, title }: Props) => {
  return (
    <div className="flex gap-3">
    <aside className="h-full select-none p-8 rounded-xl border-2 border-secondary dark:border-dark-secondary">
      <h4 className="text-2xl mb-5">{title}</h4>
      {children}
    </aside>
    <div className="hover:bg-accent/50 flex items-center transition-all"><ChevronLeft size={30} className="mx-auto"/></div>
    </div>
  );
};
