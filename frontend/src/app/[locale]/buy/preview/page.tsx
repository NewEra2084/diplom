"use client"
import { useRouter } from "@/i18n/navigation";
import { BuyBody } from "@/widgets/BuyBody";

function Page() {
  const router = useRouter();
  return (
    <div>
      <BuyBody link="user" onClick={() => router.push("user")}>
        <div className="p-4  dark:border-dark-accent">
          <h3 className="text-4xl mb-5">Наши преимущества:</h3>
          <ul className="text-xl border-l-2 pl-3 border-accent flex flex-col gap-5">
            <li>До 50 сотрудников в компании</li>
            <li>Цена ниже чем у конкурентов</li>
            <li>Каждый знает, кто что делает. Каждый спринт — шаг вперёд.</li>
            <li>Простой интерфейс, ничего лишнего</li>
            <li>Прозрачность для всей команды</li>
          </ul>
        </div>
      </BuyBody>
    </div>
  );
}

export default Page;
