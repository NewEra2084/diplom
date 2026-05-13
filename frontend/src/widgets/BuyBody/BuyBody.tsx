import { MouseEvent, ReactNode } from "react";

export const BuyBody = ({
  children,
  onClick,
  text,
  success = false,
}: {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  link: string;
  text?: string;
  success?: boolean;
}) => {
  return (
    <div className="rounded-3xl p-4 lg:p-20 border-2 flex flex-col border-dotted hover:shadow-2xl">
      {children}
      {!success && (
        <div className="text-xl flex gap-2 items-center self-end">
          {!text && <h6>990 руб/месяц</h6>}
          <button
            onClick={onClick}
            className={"rounded-xl bg-accent text-main p-3"}
          >
            {text || "Оформить"} {">"}
          </button>
        </div>
      )}
    </div>
  );
};
