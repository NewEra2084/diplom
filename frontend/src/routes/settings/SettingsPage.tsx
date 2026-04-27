import { Aside } from "@/widgets/aside/Aside";
import { Body } from "@/widgets/body/Body";
import { ReactNode } from "react";

const elements = [
  { name: "Оформление", id: 0, link: "appearance" },
  { name: "Язык и текст", id: 1, link: "lang" },
];

export const SettingsPageLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className="flex h-full gap-3">
      <Aside title="Настройки" elements={elements}>
        
      </Aside>
      <Body>
        {children}
      </Body>
    </div>
  );
};
