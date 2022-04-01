import React, { ReactElement } from "react";

const Input: React.FC<{
  placeholder?: string;
  value: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder, value, onChange, label }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-gray-600 font-bold">{label}</label>}
      <input
        type="text"
        className="max-w-[250px] py-[7px] px-3 border border-gray-300 rounded focus:outline-none  focus:ring-1 focus:ring-gray-400"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
