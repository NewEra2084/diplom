"use client";
import { useLayoutState } from "@/app/store/useLayoutState";
import { useAuthGuard } from "@/features/auth/useAuthGuard";
import { Aside } from "@/widgets/aside/Aside";
import { Body } from "@/widgets/body/Body";
import { ReactNode } from "react";

const elements = [
  { name: "Категории задач", id: 0, link: "categories" },
  { name: "?", id: 1, link: "" },
];

export default function Page({ children }: { children: ReactNode }) {
  useAuthGuard(["ROLE_MANAGER"]);
  const { asideIsOpen, viewport } = useLayoutState();
  return (
    <div className="flex h-full lg:gap-3">
      <Aside title="Менеджер панель" elements={elements} />
      {((viewport < 800 && !asideIsOpen) || viewport >= 800) && (
        <Body>{children}</Body>
      )}
    </div>
  );
}
