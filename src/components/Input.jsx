import React from "react";

export const Input = ({
  type = "",
  placeholder = "",
  value,
  onChange,
  text,
  name,
  suffix,
}) => {
  return (
    <div>
      <label htmlFor={name} className="mb-1 text-xs hidden md:block">
        {text}
      </label>
      <div className="relative">
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className="w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm focus:border-primary focus:outline-none"
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
};
