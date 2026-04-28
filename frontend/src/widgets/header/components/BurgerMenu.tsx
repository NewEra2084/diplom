import { Navigation } from "./Navigation";

export const BurgerMenu = () => {
  return (
    <div className="absolute z-50 top-12 left-0 w-screen h-[calc(100vh-70px)] bg-main dark:bg-dark-main text-secondary dark:text-dark-secondary text-md">
      <div className="px-3 py-5">
        <h3 className="pl-5 text-center mb-4 text-3xl font-bold">
          Панель навигации
        </h3>
        <Navigation />
      </div>
    </div>
  );
};
