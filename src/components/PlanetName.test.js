import { render, screen, fireEvent } from "@testing-library/react";
import PlanetName from "./PlanetName";

describe("PlanetName", () => {
  it("Component Render - Given the required props, When the component is rendered, Then the label Planet Name and input should be present", () => {
    const requiredProps = {
      planetName: "earth",
    };

    render(<PlanetName {...requiredProps} />);

    const planetNameText = screen.getByText("Planet Name");
    const planetNameLabelText = screen.getByLabelText("Planet Name");

    expect(planetNameLabelText).toBeInTheDocument();
    expect(planetNameText).toBeInTheDocument();
  });

  it("Display input fields value - Given the required props, When the component is rendered, Then the input fields value should be present", () => {
    const requiredProps = {
      planetName: "earth",
    };

    render(<PlanetName {...requiredProps} />);

    expect(screen.getByLabelText("Planet Name")).toHaveValue("earth");
  });

 // Planet Name: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.
  it(`Given the required props,
  When the input field value changes,
  Then error message should be present`, () => {
    const mockOnChangeValidate = jest.fn();

    const requiredProps = {
      planetName: "",
      onChangePlanetName: mockOnChangeValidate,
    };

    render(<PlanetName {...requiredProps} />);

    const inputPlanetName = screen.getByLabelText("Planet Name");
    const idErrorMessage = screen.getByTestId("idErrorMessage");
    const errorMessage =
    "Must be between 2 and 49 characters. No numbers or special characters.";

    fireEvent.change(inputPlanetName, { target: { value: "H" } });
    expect(idErrorMessage).toHaveTextContent(errorMessage);

    fireEvent.change(inputPlanetName, { target: { value: "EAAAAAAAAAEAAAAAAAAAEAAAAAAAAAEAAAAAAAAAEAAAAAAAAA" } });
    expect(idErrorMessage).toHaveTextContent(errorMessage);

  });
  
  
 it(`Given the required props,
 When the input field value changes,
 Then error message should NOT be present`, () => {
   const mockOnChangeValidate = jest.fn();

   const requiredProps = {
     planetName: "",
     onChangePlanetName: mockOnChangeValidate,
   };
   render(<PlanetName {...requiredProps} />);
   const inputPlanetName = screen.getByLabelText("Planet Name");
   const idErrorMessage = screen.getByTestId("idErrorMessage");
   const errorMessage =
   "Must be between 2 and 49 characters. No numbers or special characters.";

   fireEvent.change(inputPlanetName, { target: { value: "Earth" } });
   expect(idErrorMessage).not.toHaveTextContent(errorMessage);

   fireEvent.change(inputPlanetName, { target: { value: "EA" } });
   expect(idErrorMessage).not.toHaveTextContent(errorMessage);

   fireEvent.change(inputPlanetName, { target: { value: "EAAAAAAAAAEAAAAAAAAAEAAAAAAAAAEAAAAAAAAAEAAAAAAAA" } });
   expect(idErrorMessage).not.toHaveTextContent(errorMessage);
 });

});
