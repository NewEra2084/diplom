import Clocks from "@/../public/Frame.svg";
type Props = {
  children: string;
  className?: string;
};

export const SubTitle = ({ children, className }: Props) => {
  return (
    <div className={`flex items-center gap-3 text-xl lg:text-2xl font-bold ${className}`}>
      <img src={Clocks.src} alt="SubLogo" className="h-16"/>
      <p>{children}</p>
    </div>
  );
};
