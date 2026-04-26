import { LocaleSwitcher } from "@/features/language/LanguageSwitcher";
import { ThemeSwitcher } from "@/features/theme";
import { Aside } from "@/widgets/aside/Aside";
import { AsideElement } from "@/widgets/aside/components/AsideElement";
import { Body } from "@/widgets/body/Body";
import { useState } from "react";

const elements = [
  { name: "Оформление", id: 0 },
  { name: "Язык и текст", id: 1 },
];

export const SettingsPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex h-full gap-3">
      <Aside title="Настройки" elements={elements} currentIndex={index} elementOnClick={(id) => setIndex(id)}>
        
      </Aside>
      <Body title={elements[index].name}>
        {index === 0 && (
          <div className="px-14 text-lg">
            <div>
              Тема отображения
              <ThemeSwitcher className={"mt-5"} />
            </div>
          </div>
        )}
        {index === 1 && (
          <div className="px-14 text-lg">
            <LocaleSwitcher/>
          </div>
        )}
      </Body>
    </div>
  );
};
