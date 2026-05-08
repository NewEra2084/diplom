import { SquarePlus } from "lucide-react";

type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ListPanel = ({ children, isOpen, setIsOpen }: Props) => {
  return (
    <div className="sticky top-0 w-full flex flex-col justify-end-safe p-2 rounded-xl border-2 border-secondary">
      <div className="flex mb-5">
        <SquarePlus size={30} onClick={() => setIsOpen((prev) => !prev)} />
      </div>
      {isOpen && children}
    </div>
  );
};
