import "./App.css";
import W12MForm from "./components/W12MForm";

function App() {

  const onSubmitForm = (
    planetName,
    speciesname,
    numberofbeings,
    whatIs2plus2,
    reasonForSparing,
  ) => {
    console.log(
      planetName,
      speciesname,
      numberofbeings,
      whatIs2plus2,
      reasonForSparing
    );
  };

  return (
    <>
      <h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
      <W12MForm onSubmitForm={onSubmitForm} />
    </>
  );
}

export default App;
