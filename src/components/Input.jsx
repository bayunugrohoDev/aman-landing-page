import React from "react";

const Input = ({
  className = "",
  label = "",
  name = "",
  type = "text",
  placeholder = "",
}) => {
  return (
    <div
      className={`col-span-2 flex flex-col gap-1 md:col-span-1 ${className}`}
    >
      <label className="font-bold text-darkGrey">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-white px-4 py-3 placeholder:text-grey"
      />
    </div>
  );
};

export default Input;
