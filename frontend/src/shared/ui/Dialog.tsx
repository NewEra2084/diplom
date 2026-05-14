import { useRef, useState } from "react";

export const DialogComponent = ({ onClick, state }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [files, setFiles] = state;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal(); // открывает модальное окно
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    setFiles((prev) => [...selectedFiles]);
    
    console.log(files);
    // Очищаем input, чтобы можно было добавить тот же файл снова
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <button
        onClick={openModal}
        className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
      >
        Добавить файлы
      </button>

      <dialog
        ref={dialogRef}
        className="rounded-lg m-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-main p-6 backdrop:bg-black/50"
      >
        <div className="flex flex-col gap-4">

        <h2 className="text-xl font-bold mb-4">Прикрепите файлы</h2>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          className="border-2 border-secondary p-2 rounded-xl disabled:bg-secondary/40"
        />
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border rounded"
            >
              <span>
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </span>
              <button
                onClick={() => removeFile(index)}
                className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
        {files.length > 0 && (
          <p className="mt-4 text-sm text-gray-600">
            Всего файлов: {files.length}
          </p>
        )}

        <button
          onClick={onClick}
          className="border-2 border-secondary p-2 w-full rounded-xl disabled:bg-secondary/40"
        >
          Отправить
        </button>
        <button
          onClick={closeModal}
          className="border-2 border-secondary p-2 w-full rounded-xl disabled:bg-secondary/40"
        >
          Закрыть
        </button>
        </div>
      </dialog>
    </>
  );
};
