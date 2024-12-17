import React from "react";
import InputMask from "react-input-mask";

const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");

const MaskedInput = ({ value, onChange, name, mask, icon}) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value),
      },
    });
  }

  return (
    <div className="input-wrapper">
      <i className="material-symbols-outlined">{icon}</i>
      <InputMask
        name={name}
        mask={mask}
        value={value}
        onChange={handleChange}
        className="input-field"
        required
      />
      <label htmlFor={name} className="input-label">
        {name.toUpperCase()}
      </label>
    </div>
  );
};

export default MaskedInput;
