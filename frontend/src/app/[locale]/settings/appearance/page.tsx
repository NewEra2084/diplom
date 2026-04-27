import { ThemeSwitcher } from "@/features/theme";

export default function Page () {
  return (
    <>
      <h4 className="text-2xl mb-4">Оформление</h4>
      <div className="px-14 text-lg">
        <div>
          Тема отображения
          <ThemeSwitcher className={"mt-5"} />
        </div>
      </div>
    </>
  );
};
