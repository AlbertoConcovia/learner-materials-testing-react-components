import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const WhatIs2plus2 = ({ whatIs2plus2, onChangeWhatIs2plus2 }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    // What is 2 + 2: "4" must be selected. Selecting "Not 4" should display an error.
    alert(`value ${value}`);
    return value === "4" ? " " : "error: Human please go back to school - You Must choose 4";
  };

  return (
    <div>
      <label htmlFor="fwhatis2plus2">What is 2+2? </label>

      <select
        name="fwhatis2plus2"
        id="fwhatis2plus2"
        type="text"
        value={whatIs2plus2}
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangeWhatIs2plus2(e);
        }}
      >
        <option value="not4">Not 4</option>
        <option value="4">4</option>
      </select>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default WhatIs2plus2;
