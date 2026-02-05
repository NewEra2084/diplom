"use client";
import { ThemeSwitcher } from "@/features/theme";
import { useHeaderStore } from "./headerStore";
import { PartyPopper,  } from "lucide-react";

export const Header = ({}) => {
    const headerState = useHeaderStore((state) => state.headerText);
    const setHeader = useHeaderStore((state) => state.setHeaderText);
    return (
        <header className="text-5xl bg-amber-400 dark:bg-black flex">
            <ThemeSwitcher/>
        </header>
    );
};
