type Props = {
  text: string;
};

export const FormButton = ({ text }: Props) => {
  return (
    <button
      className="rounded-xl hover:w-full transition-all hover:animate-pulse bg-secondary dark:bg-dark-main dark:border-2 dark:border-dark-secondary dark:hover:border-0 dark:hover:bg-dark-secondary dark:hover:text-dark-accent text-main dark:text-dark-secondary w-[50%] py-4"
      type="submit"
    >
      {text}
    </button>
  );
};
