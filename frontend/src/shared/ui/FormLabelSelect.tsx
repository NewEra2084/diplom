import { ChangeEvent, ReactNode, useId } from "react";

type Props = {
  value: string;
  onChange: (e: string) => void;
  children: ReactNode[];
  title: string;
  className?: string
};

export const FormLabelSelect = ({
  value,
  title,
  onChange,
  className,
  children,
}: Props) => {
  const id = useId();
  return (
    <div className={`${className} relative w-full`}>
      <select
      id={id}
        className="w-full border-2 py-2 outline-none border-secondary dark:border-dark-secondary rounded-xl px-5"
        value={value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          if (onChange) onChange(e.target.value);
        }}
      >
        {children}
      </select>
      <label
        htmlFor={id}
        className={`-top-5 w-40 inset-y-auto border-t-2 border-x-2 bg-main dark:border-dark-secondary dark:bg-dark-main absolute transition-all my-auto dark:peer-focus:text-dark-main dark:peer-focus:bg-dark-secondary peer-focus:text-main peer-focus:bg-secondary rounded-t-lg px-3 peer-focus:border-x-2 peer-focus:border-t-2  left-5 flex items-center`}
      >
        {title}
      </label>
    </div>
  );
};
