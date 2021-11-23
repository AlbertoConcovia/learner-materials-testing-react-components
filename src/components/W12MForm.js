import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import WhatIs2plus2 from "./WhatIs2plus2";

const W12MForm = () => {
  return (
    <section className="w12MForm">
      <W12MHeader />
      <form>
        <SpeciesName />
        <PlanetName />
       	<NumberOfBeings/>
		<WhatIs2plus2/>
		{/* <ReasonForSparing/> */}
      </form>
    </section>
  );
};

export default W12MForm;
