import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const PlanetName = ({ planetName, onChangePlanetName }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    // Planet Name: Must be between 2 and 49 characters. No special characters.
    // Numbers are allowed.
    const regex = /^[a-zA-Z0-9]{2,49}$/;
    return regex.test(value)
      ? " "
      : "Must be between 2 and 49 characters. No numbers or special characters.";
  };

  return (
    <div>
      <label htmlFor="planetname">Planet Name</label>
      <input
        id="planetname"
        type="text"
        value={planetName}
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangePlanetName(e);
        }}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default PlanetName;
