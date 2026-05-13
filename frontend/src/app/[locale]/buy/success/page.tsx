"use client";
import { auth } from "@/features/auth/endpoints";
import { useRouter } from "@/i18n/navigation";
import { BuyBody } from "@/widgets/BuyBody";
import { useEffect } from "react";
import { useBuyStore } from "../BuyPageStore";
import { UserStore } from "@/entities/User/model/store";

function Page() {
  const router = useRouter();
  const adminData = useBuyStore((store) => store.admin);
  const setUser = UserStore(store=>store.setUser)
  useEffect(() => {
    if (adminData.login && adminData.password) {
      auth({ login: adminData.login, password: adminData.password }).then((res)=>setUser())
    }
    const timeout1 = setTimeout(() => {
      router.push("/profile");
    }, 3000);

    return () => clearTimeout(timeout1);
  }, [router, adminData]);
  return (
    <div>
      <BuyBody link="profile" success>
        <div className="p-4 flex flex-col gap-3 items-center justify-center dark:border-dark-accent">
          <h1 className="text-4xl mb-5">
            Регистрация компании прошла успешно!
          </h1>
          <h2 className="text-2xl mb-5">Перенаправление в профиль...</h2>
        </div>
      </BuyBody>
    </div>
  );
}

export default Page;
