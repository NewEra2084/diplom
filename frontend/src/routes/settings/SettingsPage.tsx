import { useLayoutState } from "@/app/store/useLayoutState";
import { Aside } from "@/widgets/aside/Aside";
import { Body } from "@/widgets/body/Body";
import { ReactNode } from "react";

const elements = [
  { name: "Оформление", id: 0, link: "appearance" },
  { name: "Язык и текст", id: 1, link: "lang" },
];

export const SettingsPageLayout = ({ children }: { children: ReactNode }) => {
  const { asideIsOpen, viewport } = useLayoutState();
  return (
    <div className="flex h-full lg:gap-3">
      <Aside title="Настройки" elements={elements} />
      {((viewport < 800 && !asideIsOpen ) || viewport >= 800) && <Body>{children}</Body>}
    </div>
  );
};
