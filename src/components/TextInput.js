import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const TextInput = ({ labelText, labelId,  inputValue, onChangeInputValue , inputValueValidation}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validateValue = (value) => {
    return inputValueValidation(value);
  };

  return (
    <div>
      <label htmlFor={labelId}>{labelText}</label>
      <input
        id="labelId"
        type="text"
        value={inputValue}
        onChange={(e) => {
          const errorMessage = validateValue(e.target.value);
          setErrorMessage(errorMessage);
          onChangeInputValue(e);
        }}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default TextInput;
