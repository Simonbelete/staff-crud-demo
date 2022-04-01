import React, { ReactElement } from "react";

const Input: React.FC<{
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      className="py-2 px-3"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
