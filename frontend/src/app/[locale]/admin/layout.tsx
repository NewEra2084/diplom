"use client";
import { useLayoutState } from "@/app/store/useLayoutState";
import { useAuthGuard } from "@/features/auth/useAuthGuard";
import { Aside } from "@/widgets/aside/Aside";
import { Body } from "@/widgets/body/Body";
import { ReactNode } from "react";

const elements = [
  { name: "Workers", id: 0, link: "workers" },
  { name: "Qualifications", id: 1, link: "qualifications" },
  { name: "Jobs", id: 2, link: "jobs" },
];

export default function Page({ children }: { children: ReactNode }) {
  useAuthGuard(["ROLE_ADMIN"]);
  const { asideIsOpen, viewport } = useLayoutState();
  return (
    <div className="flex h-full lg:gap-3">
      <Aside title="Админ панель" elements={elements} />
      {((viewport < 800 && !asideIsOpen) || viewport >= 800) && (
        <Body>{children}</Body>
      )}
    </div>
  );
}
