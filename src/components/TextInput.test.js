import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
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
      labelText: "Planet Name",
      labelId: "planetname",
      inputValue: { inputValue },
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation: inputPlanetNameValidation,
    };

    render(<TextInput {...requiredProps} />);

    const planetNameText = screen.getByText("Planet Name");

    expect(planetNameText).toBeInTheDocument();
  });

  // Planet Name: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.
  it(`Given the required props,
 When the input field value changes,
 Then error message should be present`, () => {
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
      labelText: "Planet Name",
      labelId: "planetname",
      inputValue: { inputValue },
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation: inputPlanetNameValidation,
    };

    render(<TextInput {...requiredProps} />);

    const inputPlanetName = screen.getByLabelText("Planet Name");
    const idErrorMessage = screen.getByTestId("idErrorMessage");

    fireEvent.change(inputPlanetName, { target: { value: "H" } });
    expect(idErrorMessage).toBeInTheDocument();

    const errorMessage =
      "Must be between 2 and 49 characters. No numbers or special characters.";
    fireEvent.change(inputPlanetName, {
      target: { value: "EAAAAAAAAAEAAAAAAAAAEAAAAAAAAAEAAAAAAAAAEAAAAAAAAA" },
    });
    expect(idErrorMessage).toHaveTextContent(errorMessage);
  });

  it(`Given the required props,
 When the input field value changes,
 Then error message should NOT be present`, () => {
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
      labelText: "Planet Name",
      labelId: "planetname",
      inputValue: { inputValue },
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation: inputPlanetNameValidation,
    };

    render(<TextInput {...requiredProps} />);

    const inputPlanetName = screen.getByLabelText("Planet Name");
    const idErrorMessage = screen.getByTestId("idErrorMessage");
    const errorMessage =
      "Must be between 2 and 49 characters. No numbers or special characters.";

    fireEvent.change(inputPlanetName, {
      target: { value: "Earth" },
    });
    expect(idErrorMessage).not.toHaveTextContent(errorMessage);
  });
});
