import { useState } from "react";

export const CustomCheckbox = ({set}) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="hidden" // скрываем стандартный чекбокс
        checked={checked}
        onChange={(e) => {setChecked(e.target.checked); set(prev=>({...prev, }))}}
      />
      <div
        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors
          ${checked ? "bg-blue-500 border-blue-500" : "border-gray-400 bg-white"}`}
        onClick={() => setChecked(!checked)}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </label>
  );
};