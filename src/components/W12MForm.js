import { useState } from "react";
import W12MHeader from "./W12MHeader";
import WhatIs2plus2 from "./WhatIs2plus2";
import ReasonForSparing from "./ReasonForSparing";
import SubmitForm from "./SubmitForm";
import TextInput from "./TextInput";
import "../App.css";
import {
  inputPlanetNameValidation,
  inputSpeciesNameValidation,
  inputNumberOfBeingsValidation,
} from "../data/validation";

const W12MForm = ({ onSubmitForm }) => {
  
  const [planetName, setPlanetName] = useState("Earth");
  const [speciesname, setSpeciesname] = useState("Humans");
  const [numberofbeings, setNumberofbeings] = useState("6000000000");
  const [whatIs2plus2, setWhatIs2plus2] = useState(2);
  const [reasonForSparing, setReasonForSparing] = useState("We love E.T. ...........");
  const handleSubmit = (event) => {
      onSubmitForm( planetName, speciesname, numberofbeings, whatIs2plus2, reasonForSparing);
      event.preventDefault();
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form onSubmit={handleSubmit}>
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
