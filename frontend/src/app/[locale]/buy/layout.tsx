import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1 className="text-2xl mb-[10vh]">Оформить подписку на месяц</h1>
      {children}
    </div>
  );
}
