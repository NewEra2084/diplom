import GetMe from "@/../public/Download.svg";
import { SubTitle } from "./ui/subTitle";
import { Link } from "@/i18n/navigation";
import { ReactElement, ReactNode } from "react";
import { ImageBlock } from "./ui/ImageBlock";
import * as m from "motion/react-m";

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
  first = false,
  image,
}: Props) => {

  return (
    <div
      className={`${reverse ? "lg:bg-secondary dark:lg:bg-dark-secondary" : ""} bg-main dark:bg-dark-main rounded-xl lg:h-screen min-w-fit flex flex-col items-center justify-center px-5`}
    >
      <div
        className={`${reverse ? "flex-col lg:flex-row-reverse lg:text-right lg:text-main lg:dark:text-dark-main" : "flex-col lg:flex-row"} flex items-center justify-center gap-5`}
      >
        <div className="lg:max-w-[60%] flex flex-col ">
          <m.h3
            initial={reverse? {x:-100, opacity:0} : {x:100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            viewport={{amount:0.2, once:true}}
            transition={{duration:2}}
            className={`w-full text-center ${reverse ? "lg:text-right" : "lg:text-left"} text-xl lg:text-3xl 2xl:text-5xl mb-[10%]`}
          >
            {title}
          </m.h3>
          <m.section
          initial={reverse ? {x:-100, opacity:0} : {x:100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            viewport={{amount:0.2, once:true}}
            transition={{duration:2, delay: 1.5}}
            className={`text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex flex-col ${reverse ? "self-end" : ""} lg:max-w-[80%] gap-5`}
          >
            {children}
          </m.section>
        </div>
        <ImageBlock>{image}</ImageBlock>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-3 justify-around items-center mt-16">
        <SubTitle className={reverse ? "lg:text-main dark:lg:text-dark-main" : ""}>{subTitle}</SubTitle>
        {first && (
          <Link
            href={"get"}
            className="hidden lg:flex rounded-2xl gap-3 items-center justify-center border-2 border-accent dark:border-dark-accent p-5 w-fit"
          >
            <span className="text-xl">Получить</span>
            <img src={GetMe.src} alt="Download" />
          </Link>
        )}
      </div>
    </div>
  );
};
