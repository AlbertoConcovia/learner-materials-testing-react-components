import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const NumberOfBeings = ({ numberOfBeings, onChangeNumberOfBeings }) => {
  const [errorMessage, setErrorMessage] = useState("");
  
  const validate = (value) => {
    // Number of beings: Numbers ONLY. Must be at least 1000000000.
    const regex = /^[0-9]{10,}$/;
    return regex.test(value)
      ? " "
      : "Must be numbers ONLY and at least 1,000,000,000.";
  };

  return (
    <div>
      <label htmlFor="numberofbeings">Number of beings: </label>
      <input
        id='numberofbeings'
        type='text'
        value={numberOfBeings}
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangeNumberOfBeings(e);
        }
      }
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default NumberOfBeings;
