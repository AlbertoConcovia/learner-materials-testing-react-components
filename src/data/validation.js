// Planet Validation
const inputPlanetNameValidation = (value) => {
  const regex = /^[a-zA-Z0-9]{2,49}$/;
  return regex.test(value)
    ? " "
    : "Must be between 2 and 49 characters. No numbers or special characters.";
};

// Species Validation
const inputSpeciesNameValidation = (value) => {
  // Must be between 3 and 23 characters. No numbers or special characters allowed!
  const regex = /^[a-zA-Z]{3,23}$/;
  return regex.test(value)
    ? " "
    : "Must be between 3 and 23 characters. No numbers or special characters.";
};

// Number of Beings
const inputNumberOfBeingsValidation = (value) => {
  // Number of beings: Numbers ONLY. Must be at least 1000000000.
  const regex = /^[0-9]{10,}$/;
  return regex.test(value)
    ? " "
    : "Must be numbers ONLY and at least 1,000,000,000.";
};

export {
  inputPlanetNameValidation,
  inputSpeciesNameValidation,
  inputNumberOfBeingsValidation,
};
