import { SquarePen } from "lucide-react";

const Validate = () => {};

export const Avatar = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="rounded-full relative group bg-gray-500 peer w-36 h-36 lg:w-56 lg:h-56 mb-10">
        <div className="absolute rounded-full inset-0 bg-secondary/10 hidden group-hover:flex items-center justify-center">
          <SquarePen
            size={45}
            onClick={() => {
              Validate();
            }}
          />
        </div>
      </div>
    </div>
  );
};
