import GetMe from "@/../public/Download.svg";
import { SubTitle } from "./ui/subTitle";
import { Link } from "@/i18n/navigation";
import { ReactElement, ReactNode } from "react";
import { ImageBlock } from "./ui/ImageBlock";

type Props = {
  variant?: "dark" | "light";
  title: string;
  first?: boolean;
  reverse?: boolean;
  subTitle: string;
  children?: ReactNode;
  image: ReactElement<HTMLImageElement> | ReactNode;
};

export const Block = ({
  subTitle,
  children,
  reverse = false,
  title,
  first,
  image,
}: Props) => {
  return (
    <div
      className={`${reverse ? "bg-secondary dark:bg-dark-main" : "bg-main dark:bg-dark-secondary"}`}
    >
      <div className={`flex ${reverse ? "flex-row-reverse" : ""}`}>
        <div>
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
        <ImageBlock>{image}</ImageBlock>
      </div>
      <div className="flex">
        <SubTitle>{subTitle}</SubTitle>
        {first && (
          <Link href={"get"}>
            <span>Получить</span>
            <img src={GetMe.src} alt="Download" />
          </Link>
        )}
      </div>
    </div>
  );
};
