import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const ReasonForSparing = ({ reasonForSparing, onChangeReasonForSparing }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    // Reason for sparing: Must be between 17 and 153 characters.
    const regex = /^[ A-Za-z0-9_@./#&+-]{17,153}$/;
    return (regex.test(value))
      ? " "
      : "Do not piss off the aliens - Reason for sparing: Must be between 17 and 153 characters.";
  };

  return (
    <div>
      <label htmlFor="reasonforsparing">Reason for sparing</label>

      <textarea
        id="reasonforsparing"
        name="reasonforsparing"
        rows="5"
        cols="40"
        value={reasonForSparing}
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangeReasonForSparing(e);
        }}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default ReasonForSparing;
