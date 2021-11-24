import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import WhatIs2plus2 from "./WhatIs2plus2";
import ReasonForSparing from "./ReasonForSparing";
import SubmitForm from "./SubmitForm";
import "../App.css";

const W12MForm = ({onSubmitForm}) => {
  const [speciesName, setSpeciesName] = useState("humans");
  const [planetName, setPlanetName] = useState("earth");
  const [numberOfBeings, setNumberOfBeings] = useState(6000000000);
  const [whatIs2plus2, setWhatIs2plus2] = useState();
  const [reasonForSparing, setReasonForSparing] = useState("We love E.T.");
  const handleSubmitForm = (e) =>{
    onSubmitForm();
    console.log(speciesName, planetName, numberOfBeings, whatIs2plus2, reasonForSparing);
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      <form onSubmit={handleSubmitForm()}>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={(e) => setSpeciesName(e.target.value)}
        />
        <PlanetName 
          planetName={planetName}
          onChangePlanetName={(e) => setPlanetName(e.target.value)}
        />
        <NumberOfBeings
          numberOfBeings={numberOfBeings}
          onChangeNumberOfBeings={(e) => setNumberOfBeings(e.target.value)}
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
