import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";

const W12MForm = () => {
  return (
    <section className="w12MForm">
      <W12MHeader />
      <form>
        <SpeciesName />
        <PlanetName />
      </form>
       	{/* <NumberOfBeings/> */}
		{/* <WhatIs2plus2/> */}
		{/* <ReasonForSparing/> */}
    </section>
  );
};

export default W12MForm;
