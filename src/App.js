import "./App.css";
import W12MForm from "./components/W12MForm";

function App() {
  const onSubmitForm = (e) => {
    console.log(`after submit`);
  };

  return (
    <>
      <h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
      <W12MForm onSubmitForm={onSubmitForm} />
    </>
  );
}

export default App;
