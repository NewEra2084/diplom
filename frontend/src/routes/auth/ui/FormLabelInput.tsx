import { Eye, EyeClosed } from "lucide-react";
import { ChangeEvent, useId, useState } from "react";

type Props = {
  title: string;
  value?: string;
  type?: "text" | "password";
  onChange?: (evalue: string) => void;
};

export const FormLabelInput = ({
  title,
  type = "text",
  value,
  onChange,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const [inputState, setInputState] = useState("");
  const id = useId();
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type === "text" ? "text" : visible ? "text" : "password"}
        value={value}
        className="peer border-2 border-secondary focus:border-dark-accent dark:focus:border-dark-secondary focus:bg-secondary dark:focus:bg-dark-main dark:focus:text-dark-secondary focus:text-main  outline-none rounded-lg py-2 px-4 w-full text-secondary"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (onChange) onChange(e.target.value);
          setInputState(e.target.value);
        }}
      />
      <label
        htmlFor={id}
        className={`${inputState != "" ? "-top-5 inset-y-auto border-t-2 border-x-2 bg-main" : "peer-focus:-top-5 peer-focus:inset-y-auto"} absolute inset-y-1 transition-all my-auto peer-focus:text-main peer-focus:bg-secondary rounded-t-lg px-3 peer-focus:border-x-2 peer-focus:border-t-2  left-5 flex items-center`}
      >
        {title}
      </label>
      {type === "password" && (
        <div className="absolute inset-y-0 flex items-center right-5">
          {visible ? (
            <Eye onClick={() => setVisible(false)} className="hover:animate-pulse"/>
          ) : (
            <EyeClosed onClick={() => setVisible(true)} className="hover:animate-pulse"/>
          )}
        </div>
      )}
    </div>
  );
};
