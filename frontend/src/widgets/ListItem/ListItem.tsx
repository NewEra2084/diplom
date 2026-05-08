import { Pencil, PencilOff, Trash2 } from "lucide-react";

type Props = {
  deleteItem: (id: string) => Promise<boolean>;
  item: any;
  title: string;
  editedState: [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>>,
  ];
  listState: [any[], React.Dispatch<React.SetStateAction<any[]>>];
  children?: React.ReactNode;
};

export const ListItem = ({
  item,
  deleteItem,
  editedState,
  listState,
  children,
  title,
}: Props) => {
  const [edited, setEdited] = editedState;
  const [_, setItems] = listState;
  return (
    <div className="w-full flex justify-between">
      <div
        key={item.id}
        className="p-2 relative w-full rounded-xl border-2 border-secondary flex justify-between items-center"
      >
        {edited !== item.id ? <h4>{title}</h4> : children}
        <div
          className={`p-2 ${edited === item.id ? "absolute top-3 right-5" : "block"} rounded-xl border-2 border-secondary flex items-center justify-center gap-2`}
        >
          {edited === item.id ? (
            <PencilOff onClick={() => setEdited(null)} />
          ) : (
            <Pencil onClick={() => setEdited(item.id)} />
          )}
          <Trash2
            onClick={async () => {
              const success = await deleteItem(item.id);
              if (success) {
                setItems((prev) =>
                  prev.filter((item2) => (item.id !== item2.id)),
                );
              }
            }}
          ></Trash2>
        </div>
      </div>
    </div>
  );
};
