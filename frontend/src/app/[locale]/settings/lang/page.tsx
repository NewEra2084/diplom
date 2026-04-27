import { LocaleSwitcher } from "@/features/language/LanguageSwitcher";
export default function Page () {
  return (
    <>
      <h4 className="text-2xl mb-4">Язык</h4>
      <div className="px-14 text-lg">
        <LocaleSwitcher />
      </div>
    </>
  );
};
