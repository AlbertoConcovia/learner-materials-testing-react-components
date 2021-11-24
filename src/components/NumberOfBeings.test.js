import { render, screen , fireEvent} from "@testing-library/react";
import NumberOfBeings from "./NumberOfBeings";

test("renders number f beings", () => {
  render(<NumberOfBeings />);
  const numberofbeingsText = screen.getByText(/Number of beings/i);
  expect(numberofbeingsText).toBeInTheDocument();
});
  
// Number of beings: Numbers ONLY. Must be at least 1000000000.
it(`Given the required props,
When the input field value changes,
Then error message should be present`, () => {
  const mockOnChangeValidate = jest.fn();

  const requiredProps = {
    numberOfBeings: "",
    onChangeNumberOfBeings: mockOnChangeValidate,
  };
  render(<NumberOfBeings {...requiredProps} />);
  const inputPlanetName = screen.getByLabelText("Number of beings");
  const idErrorMessage = screen.getByTestId("idErrorMessage");
  const errorMessage =  "Must be numbers ONLY and at least 1,000,000,000.";

  fireEvent.change(inputPlanetName, { target: { value: 10 } });
  expect(idErrorMessage).toHaveTextContent(errorMessage);
});


// Number of beings: Numbers ONLY. Must be at least 1000000000.
it(`Given the required props,
When the input field value changes,
Then error message should NOT be present`, () => {
  const mockOnChangeValidate = jest.fn();

  const requiredProps = {
    numberOfBeings: "",
    onChangeNumberOfBeings: mockOnChangeValidate,
  };
  render(<NumberOfBeings {...requiredProps} />);
  const inputPlanetName = screen.getByLabelText("Number of beings");
  const idErrorMessage = screen.getByTestId("idErrorMessage");
  const errorMessage =  "Must be numbers ONLY and at least 1,000,000,000.";

  fireEvent.change(inputPlanetName, { target: { value: 4000000000 } });
  expect(idErrorMessage).not.toHaveTextContent(errorMessage);
});


