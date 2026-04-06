type Props = {
  className?: string;
};
type Column = {
  title: string,
  roles?: string[]
}

const columns: Column[] = [
  {title: "Задачи", roles: ["Работник"]},
  {title: "Проекты"},
  {title: "Админка"},
]

export const Navigation = ({ className }: Props) => {
  return (
    <nav>
      <ul className={`${className} flex items-center justify-center gap-3`}>
        {columns.map((item, id)=> <li key={id}>{item.title}</li>)}
      </ul>
    </nav>
  );
};
