import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";


// Planet Input
describe("TextInput - Planet Input", () => {

  let mockOnChangeValidate;
  let inputValue;
  let inputPlanetNameValidation;
  let requiredProps

  beforeEach(() => {
    mockOnChangeValidate = jest.fn();
    inputValue = "";
    inputPlanetNameValidation = (value) => {
      const regex = /^[a-zA-Z0-9]{2,49}$/;
      return regex.test(value)
        ? " "
        : "Must be between 2 and 49 characters. No numbers or special characters.";
    };
    
    requiredProps = {
      planetName: "earth",
      labelText: "Planet Name",
      labelId: "planetname",
      inputValue: { inputValue },
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation: inputPlanetNameValidation,
    };
  });

  it("Planet Name Input - Given the required props, When the component is rendered, Then the label Name and input should be present", () => {
    render(<TextInput {...requiredProps} />);
    const planetNameText = screen.getByText("Planet Name");

    expect(planetNameText).toBeInTheDocument();
  });

  // Planet Name: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.
  it(`Given the required props,
 When the Planet input field value changes,
 Then error message should be present`, () => {
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

// Species Name Input
describe("SpeciesName", () => {
  it("Species Name Input - Given the required props, When the component is rendered, Then the label Name and input should be present", () => {
    const mockOnChangeValidate = jest.fn();
    const inputValue = "";
    const inputSpeciesNameValidation = (value) => {
      // Must be between 3 and 23 characters. No numbers or special characters allowed!
      const regex = /^[a-zA-Z]{3,23}$/;
      return regex.test(value)
        ? " "
        : "Must be between 3 and 23 characters. No numbers or special characters.";
    };
    const requiredProps = {
      planetName: "Humans",
      labelText: "Species Name",
      labelId: "speciesname",
      inputValue: { inputValue },
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation: inputSpeciesNameValidation,
    };

    render(<TextInput {...requiredProps} />);

    const planetNameText = screen.getByText("Species Name");

    expect(planetNameText).toBeInTheDocument();
  });

  // Planet Name: Must be between 2 and 49 characters. Numbers are allowed, but no special characters.
  it(`Given the required props,
   When the input field value changes,
   Then error message should be present`, () => {
    const mockOnChangeValidate = jest.fn();
    const inputValue = "";
    const inputSpeciesNameValidation = (value) => {
      // Must be between 3 and 23 characters. No numbers or special characters allowed!
      const regex = /^[a-zA-Z]{3,23}$/;
      return regex.test(value)
        ? " "
        : "Must be between 3 and 23 characters. No numbers or special characters.";
    };
    const requiredProps = {
      planetName: "Humans",
      labelText: "Species Name",
      labelId: "speciesname",
      inputValue: { inputValue },
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation: inputSpeciesNameValidation,
    };

    render(<TextInput {...requiredProps} />);

    const inputPlanetName = screen.getByLabelText("Species Name");
    const idErrorMessage = screen.getByTestId("idErrorMessage");

    fireEvent.change(inputPlanetName, { target: { value: "H" } });
    expect(idErrorMessage).toBeInTheDocument();

    const errorMessage =
      "Must be between 3 and 23 characters. No numbers or special characters.";
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
    const inputSpeciesNameValidation = (value) => {
      // Must be between 3 and 23 characters. No numbers or special characters allowed!
      const regex = /^[a-zA-Z]{3,23}$/;
      return regex.test(value)
        ? " "
        : "Must be between 3 and 23 characters. No numbers or special characters.";
    };
    const requiredProps = {
      planetName: "Humans",
      labelText: "Species Name",
      labelId: "speciesname",
      inputValue: { inputValue },
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation: inputSpeciesNameValidation,
    };

    render(<TextInput {...requiredProps} />);

    const inputPlanetName = screen.getByLabelText("Species Name");
    const idErrorMessage = screen.getByTestId("idErrorMessage");
    const errorMessage =
      "Must be between 3 and 23 characters. No numbers or special characters.";

    fireEvent.change(inputPlanetName, {
      target: { value: "Earth" },
    });
    expect(idErrorMessage).not.toHaveTextContent(errorMessage);
  });
});

// Number Of Beings Input
describe("NumberOfBeings", () => {
  it("Number of beings Input - Given the required props, When the component is rendered, Then the label Name and input should be present", () => {
    const mockOnChangeValidate = jest.fn();
    const inputValue = "";
    const inputSpeciesNameValidation = (value) => {
      // Number of beings: Numbers ONLY. Must be at least 1000000000.
      const regex = /^[0-9]{10,}$/;
      return regex.test(value)
        ? " "
        : "Must be numbers ONLY and at least 1,000,000,000.";
    };
    const requiredProps = {
      labelText: "Number of beings",
      labelId: "numberofbeings",
      inputValue: { inputValue },
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation: inputSpeciesNameValidation,
    };

    render(<TextInput {...requiredProps} />);

    const planetNameText = screen.getByText("Number of beings");

    expect(planetNameText).toBeInTheDocument();
  });

  it(`Given the required props,
   When the input field value changes,
   Then error message should be present`, () => {
    const mockOnChangeValidate = jest.fn();
    const inputValue = "";
    const inputSpeciesNameValidation = (value) => {
      // Number of beings: Numbers ONLY. Must be at least 1000000000.
      const regex = /^[0-9]{10,}$/;
      return regex.test(value)
        ? " "
        : "Must be numbers ONLY and at least 1,000,000,000.";
    };
    const requiredProps = {
      labelText: "Number of beings",
      labelId: "numberofbeings",
      inputValue: { inputValue },
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation: inputSpeciesNameValidation,
    };

    render(<TextInput {...requiredProps} />);

    const inputPlanetName = screen.getByLabelText("Number of beings");
    const idErrorMessage = screen.getByTestId("idErrorMessage");

    fireEvent.change(inputPlanetName, { target: { value: "H" } });
    expect(idErrorMessage).toBeInTheDocument();

    const errorMessage = "Must be numbers ONLY and at least 1,000,000,000.";
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
    const inputSpeciesNameValidation = (value) => {
      // Number of beings: Numbers ONLY. Must be at least 1000000000.
      const regex = /^[0-9]{10,}$/;
      return regex.test(value)
        ? " "
        : "Must be numbers ONLY and at least 1,000,000,000.";
    };
    const requiredProps = {
      labelText: "Number of beings",
      labelId: "numberofbeings",
      inputValue: { inputValue },
      onChangeInputValue: mockOnChangeValidate,
      inputValueValidation: inputSpeciesNameValidation,
    };

    render(<TextInput {...requiredProps} />);

    const inputPlanetName = screen.getByLabelText("Number of beings");
    const idErrorMessage = screen.getByTestId("idErrorMessage");

    fireEvent.change(inputPlanetName, { target: { value: "H" } });
    expect(idErrorMessage).toBeInTheDocument();

    const errorMessage = "Must be numbers ONLY and at least 1,000,000,000.";
    fireEvent.change(inputPlanetName, {
      target: { value: "2000000000" },
    });
    expect(idErrorMessage).not.toHaveTextContent(errorMessage);
  });
});
