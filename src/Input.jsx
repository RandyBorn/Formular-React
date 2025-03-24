import React from "react";

const Input = ({ name, type, value, onChange }) => {
  if (type === "textarea") {
    return (
      <div className="input">
        <label htmlFor={name}>{name}</label>
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Geben Sie etwas in ${name} ein...`}
        />
      </div>
    );
  }

  return (
    <div className="input">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Geben Sie etwas in ${name} ein...`}
      />
    </div>
  );
};

export default Input;
