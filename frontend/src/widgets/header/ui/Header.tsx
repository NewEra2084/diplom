"use client";
import { ThemeSwitcher } from "@/features/theme";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { useState } from "react";

export const Header = ({}) => {
    const [isOpen, setIsOpen] = useState({is:false, column: null});
    return (
        <header className="flex items-center bg-secondary dark:bg-dark-secondary text-main dark:text-dark-main px-20">
            <Logo/>
            <Navigation/>
        </header>
    );
};