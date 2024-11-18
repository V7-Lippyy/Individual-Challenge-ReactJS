import React, { useState } from 'react';

export default function RadioButton({ options, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);

  const handleSelectionChange = (value) => {
    setSelected(value);
    onChange(value); // Call onChange prop to update the parent component
  };

  return (
    <div className="flex gap-4">
      {options.map((option, index) => (
        <label
          key={option.value}
          className="flex items-center cursor-pointer gap-2 inline-flex"
        >
          <input
            type="radio"
            name="customRadio"
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleSelectionChange(option.value)}
            className="hidden"
          />
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ease-in-out ${
              selected === option.value
                ? 'bg-[#5A67D8] border-[#5A67D8] shadow-lg'
                : 'border-[#D1D5DB] hover:border-[#5A67D8]'
            }`}
          >
            {selected === option.value && (
              <span className="w-3 h-3 bg-white rounded-full"></span>
            )}
          </span>
          <span
            className={`ml-3 text-base font-medium transition-colors duration-200 ${
              selected === option.value ? 'text-[#2D3748]' : 'text-[#4A5568]'
            }`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}