import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const SpeciesName = ({ speciesName, onChangeSpeciesName }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    // Must be between 3 and 23 characters. No numbers or special characters allowed!
    const regex = /^[a-zA-Z]{3,23}$/;
    return regex.test(value)
      ? " "
      : "Must be between 3 and 23 characters. No numbers or special characters.";
  };

  return (
    <div>
      <label htmlFor="speciesName">Species Name</label>
      <input
        id="speciesName"
        type="text"
        value={speciesName}
        onChange={(e) => {
          onChangeSpeciesName(e);
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
        }}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default SpeciesName;
