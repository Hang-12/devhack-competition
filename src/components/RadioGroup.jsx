import React from "react";

const RadioGroup = ({ options, value, onChange }) => {
  return (
    <div>
      {options.map((option) => {
        return (
          <label key={option.value} className="inline-flex items-center">
            <input
              id={option.value}
              type="radio"
              className="form-radio h-4 w-4"
              value={option.value}
              checked={value === option.value}
              onChange={() => {
                return onChange(option);
              }}
              required
            />
            <span className="ml-2">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioGroup;