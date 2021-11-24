import { render, screen, fireEvent } from "@testing-library/react";
import WhatIs2plus2 from "./WhatIs2plus2";

describe("WhatIs2plus2", () => {
  it("Component WhatIs2plus2 Render - Given the required props, When the component is rendered, Then the label whatIs2plus2 and input should be present", () => {
    const requiredProps = {
      whatIs2plus2: "What is 2+2?",
    };
    render(<WhatIs2plus2 {...requiredProps} />);
    const whatIs2plus2Text = screen.getByText("What is 2+2?");
    const swhatIs2plus2LabelText = screen.getByLabelText("What is 2+2?");
    expect(swhatIs2plus2LabelText).toBeInTheDocument();
    expect(whatIs2plus2Text).toBeInTheDocument();
  });
});

// What is 2 + 2: "4" must be selected. Selecting "Not 4" should display an error.
it(`Given the required props,
When the input field value changes,
Then error message should be present`, () => {
  const mockOnChangeValidate = jest.fn();

  const requiredProps = {
    whatIs2plus2: "",
    onChangeWhatIs2plus2: mockOnChangeValidate,
  };
  render(<WhatIs2plus2 {...requiredProps} />);
  const inputPlanetName = screen.getByLabelText("What is 2+2?");
  const idErrorMessage = screen.getByTestId("idErrorMessage");
  const errorMessage =
    "error: Human please go back to school - You Must choose 4";

  fireEvent.change(inputPlanetName, { target: { value: "Not 4" } });
  expect(idErrorMessage).toHaveTextContent(errorMessage);
});

// What is 2 + 2: "4" must be selected. Selecting "Not 4" should display an error.
it(`Given the required props,
   When the input field value changes,
   Then error message should NOT be present`, () => {
  const mockOnChangeValidate = jest.fn();

  const requiredProps = {
    whatIs2plus2: "",
    onChangeWhatIs2plus2: mockOnChangeValidate,
  };
  render(<WhatIs2plus2 {...requiredProps} />);
  const inputPlanetName = screen.getByLabelText("What is 2+2?");
  const idErrorMessage = screen.getByTestId("idErrorMessage");
  const errorMessage =
    "error: Human please go back to school - You Must choose 4";

  fireEvent.change(inputPlanetName, { target: { value: "4" } });
  expect(idErrorMessage).not.toHaveTextContent(errorMessage);
});
