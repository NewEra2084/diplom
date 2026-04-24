import { User } from "@/entities/user/types";
import { Link } from "lucide-react";
import { Column } from "./Navigation";

type Props = {
  userData: User;
  item: Column;
};
type ProfileProps = {
  logout: () => void;
};

export const NavListItem = ({ item, userData }: Props) => {  
  return (
    <ul className="lg:absolute top-20 text-accent lg:text-main text-md left-0 mt-2 divide-x-2 lg:divide-none w-full flex flex-wrap gap-4 lg:flex-col lg:py-2 lg:items-center lg:rounded-xl lg:bg-secondary lg:dark:bg-dark-secondary lg:border-4 lg:border-accent/50 lg:hover:border-accent/30">
      {item.pages.map(
        (page, pageIdx) =>
          page.roles.includes(userData.rolesName[0]) && (
            <li
              key={pageIdx}
              className="hover:bg-accent pr-3 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg"
            >
              <a href={page.path} className="text-lg">{page.name}</a>
            </li>
          ),
      )}
    </ul>
  );
};
NavListItem.Profile = function Profile({ logout }: ProfileProps) {
  return (
    <ul className="lg:absolute top-20 text-lg text-accent lg:text-main divide-x-2 lg:divide-none left-0 mt-2 w-full flex flex-wrap gap-4 lg:flex-col lg:py-2 lg:items-center lg:rounded-xl lg:bg-secondary lg:dark:bg-dark-secondary lg:border-4 lg:border-accent/50 lg:hover:border-accent/30">
      <li className="hover:bg-accent pr-3 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg">
        <a href={"/profile"}>Профиль</a>
      </li>
      <li className="hover:bg-accent pr-3 lg:hover:bg-accent/30 lg:py-2 lg:px-5 lg:rounded-lg">
        <a onClick={logout} href={"/auth"}>
          Выход
        </a>
      </li>
    </ul>
  );
};
