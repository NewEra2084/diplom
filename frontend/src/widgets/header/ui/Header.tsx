"use client";
import { Logo } from "./logo";
import { Navigation } from "../components/Navigation";
import { Menu, X } from "lucide-react";
import { BurgerMenu } from "../components/BurgerMenu";
import Link from "next/link";
import { HeaderStore } from "../store/HeaderStore";

export const Header = () => {
  const isOpen = HeaderStore((store)=>store.isOpen);
  const setIsOpen = HeaderStore((store)=>store.setIsOpen);

  return (
    <header className="relative hover:shadow-lg select-none py-2 lg:p-0 text-lg shadow-secondary flex justify-between lg:justify-normal items-center bg-secondary dark:bg-dark-secondary text-main dark:text-dark-main lg:px-20 px-10">
      <Link href="/">
        <Logo />
      </Link>
        <Navigation className="mx-auto hidden lg:flex" />
      {!isOpen.is && (
        <Menu
          className="lg:hidden"
          size={30}
          onClick={() => {
            setIsOpen({ is: true, column: null });
          }}
        ></Menu>
      )}
      {isOpen.is && (
        <X
          size={30}
          className="bg-accent dark:bg-dark-accent/50 rounded-lg"
          onClick={() => setIsOpen({ is: false, column: null })}
        ></X>
      )}
      {isOpen.is && !isOpen.column && <BurgerMenu />}
    </header>
  );
};
