import { useState } from "react";
import W12MHeader from "./W12MHeader";
import WhatIs2plus2 from "./WhatIs2plus2";
import ReasonForSparing from "./ReasonForSparing";
import SubmitForm from "./SubmitForm";
import TextInput from "./TextInput";
import "../App.css";

const W12MForm = ({ onSubmitForm }) => {
  const [planetName, setPlanetName] = useState("");
  const [speciesname, setSpeciesname] = useState("");
  const [numberofbeings, setNumberofbeings] = useState("");
  const [whatIs2plus2, setWhatIs2plus2] = useState();
  const [reasonForSparing, setReasonForSparing] = useState("We love E.T.");
  const handleSubmitForm = (e) => {
    onSubmitForm();
    console.log(planetName, speciesname, numberofbeings, whatIs2plus2, reasonForSparing);
  };

  const inputPlanetNameValidation = (value) => {
    const regex = /^[a-zA-Z0-9]{2,49}$/;
    return regex.test(value)
      ? " "
      : "Must be between 2 and 49 characters. No numbers or special characters.";
  };

  const inputSpeciesNameValidation = (value) => {
    // Must be between 3 and 23 characters. No numbers or special characters allowed!
    const regex = /^[a-zA-Z]{3,23}$/;
    return regex.test(value)
      ? " "
      : "Must be between 3 and 23 characters. No numbers or special characters.";
  };

  const inputNumberOfBeingsValidation = (value) => {
    // Number of beings: Numbers ONLY. Must be at least 1000000000.
    const regex = /^[0-9]{10,}$/;
    return regex.test(value)
      ? " "
      : "Must be numbers ONLY and at least 1,000,000,000.";
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form onSubmit={handleSubmitForm()}>

        <TextInput
          labelText="Planet Name"
          labelId="planetname"
          inputValue={planetName}
          onChangeInputValue={(e) => setPlanetName(e.target.value)}
          inputValueValidation={inputPlanetNameValidation}
        />

        <TextInput
          labelText="Species Name"
          labelId="speciesname"
          inputValue={speciesname}
          onChangeInputValue={(e) => setSpeciesname(e.target.value)}
          inputValueValidation={inputSpeciesNameValidation}
        />

        <TextInput
          labelText="Number of beings"
          labelId="numberofbeings"
          inputValue={numberofbeings}
          onChangeInputValue={(e) => setNumberofbeings(e.target.value)}
          inputValueValidation={inputNumberOfBeingsValidation}
        />

        <WhatIs2plus2
          whatIs2plus2={whatIs2plus2}
          onChangeWhatIs2plus2={(e) => setWhatIs2plus2(e.target.value)}
        />

        <ReasonForSparing
          reasonForSparing={reasonForSparing}
          onChangeReasonForSparing={(e) => setReasonForSparing(e.target.value)}
        />

        <SubmitForm />
      </form>
    </section>
  );
};

export default W12MForm;
