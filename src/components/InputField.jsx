import { useState } from "react";

const InputField = ({ type, placeholder, icon, name }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-wrapper">
      <input
        type={[isPasswordShown ? "text" : "password"]}
        className="input-field"
        required
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <i className="material-symbols-outlined">{icon}</i>
      {type === "password" && (
        <i
          onClick={() => setIsPasswordShown((prevState) => !prevState)}
          className="material-symbols-outlined eye-icon"
        >
          {isPasswordShown ? "visibility" : "visibility_off"}
        </i>
      )}
      <label class="input-label">{name.toUpperCase()}</label>
    </div>
  );
};

export default InputField;
