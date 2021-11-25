import { render, screen } from "@testing-library/react";
import InputLabel from "./InputLabel";

describe("InputLabel", () => {

  it("Planet Name Input - Given the required props, When the component is rendered, Then the label Name and input should be present", () => {
    const mockOnChangeValidate = jest.fn();
    const inputValue = "";
    const inputPlanetNameValidation = (value) => {
      const regex = /^[a-zA-Z0-9]{2,49}$/;
      return regex.test(value)
        ? " "
        : "Must be between 2 and 49 characters. No numbers or special characters.";
    };
    const requiredProps = {
      planetName: "earth",
      labelText:"Planet Name",
      labelId:"planetname",
      inputValue:{inputValue},
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation:{inputPlanetNameValidation},
    };

    render(<InputLabel {...requiredProps} />);

    const planetNameText = screen.getByText("Planet Name");

    expect(planetNameText).toBeInTheDocument();
    
  });
});
