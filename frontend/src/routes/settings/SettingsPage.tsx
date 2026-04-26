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
      <Aside title="Настройки">
        {elements.map((item) => (
          <AsideElement
            onClick={() => setIndex(item.id)}
            key={item.id}
            className={`${item.id === index ? "bg-accent hover:bg-none" : "hover:bg-accent/70"}`}
          >
            {item.name}
          </AsideElement>
        ))}
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
            <div>
              Язык
              
            </div>
          </div>
        )}
      </Body>
    </div>
  );
};
