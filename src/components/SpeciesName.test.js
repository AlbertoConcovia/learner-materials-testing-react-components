import { render, screen, fireEvent } from "@testing-library/react";
import SpeciesName from "./SpeciesName";

describe("SpeciesName", () => {
  it("Component SpeciesName Render - Given the required props, When the component is rendered, Then the label Planet Name and input should be present", () => {
    const requiredProps = {
      speciesName: "Species Name",
    };
    render(<SpeciesName {...requiredProps} />);
    const speciesNameText = screen.getByText("Species Name");
    const speciesNameLabelText = screen.getByLabelText("Species Name");
    expect(speciesNameLabelText).toBeInTheDocument();
    expect(speciesNameText).toBeInTheDocument();
  });

  it("Display input fields value - Given the required props, When the component is rendered, Then the input fields value should be present", () => {
    const requiredProps = {
      speciesName: "Species Name",
    };
    render(<SpeciesName {...requiredProps} />);
    const speciesNameLabelText = screen.getByLabelText("Species Name");
    expect(speciesNameLabelText).toHaveValue("Species Name");
  });

  // test for NO error message when valid data is entered
  // Must be between 3 and 23 characters. No numbers or special characters allowed!
  it(`Given the required props,
  When the input field value changes,
  Then error message should NOT be present`, () => {
    const mockOnChangeValidate = jest.fn();

    const requiredProps = {
      speciesName: "",
      onChangeSpeciesName: mockOnChangeValidate,
    };

    render(<SpeciesName {...requiredProps} />);

    const inputSpeciesName = screen.getByLabelText("Species Name");

    fireEvent.change(inputSpeciesName, { target: { value: "Humans" } });

    const idErrorMessage = screen.getByTestId("idErrorMessage");

    const errorMessage =
      "Must be between 3 and 23 characters. No numbers or special characters.";

    expect(idErrorMessage).not.toHaveTextContent(errorMessage);
  });

  // Add (multiple tests to each input component to test that the right error message is shown for each type of rule break
  it(`Given the required props,
  When the input field value changes,
  Then error message should be present`, () => {
    const mockOnChangeValidate = jest.fn();

    const requiredProps = {
      speciesName: "",
      onChangeSpeciesName: mockOnChangeValidate,
    };

    render(<SpeciesName {...requiredProps} />);

    const inputSpeciesName = screen.getByLabelText("Species Name");

    fireEvent.change(inputSpeciesName, { target: { value: "Hu" } });

    const idErrorMessage = screen.getByTestId("idErrorMessage");

    const errorMessage =
      "Must be between 3 and 23 characters. No numbers or special characters.";

    expect(idErrorMessage).toHaveTextContent(errorMessage);
  });
});
