import {render, screen , fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import W12MForm from "./W12MForm";

test("renders form element", () => {
  const mockFunction = jest.fn();
  const { container } = render(<W12MForm onSubmitForm={mockFunction}/>);
  expect(container.firstChild).toHaveClass("w12MForm");
});

// it(`Given the required props, 
// When click or pressing enter,
// Then function must be called`, () => {
//   const mockFunction = jest.fn();
//   render(<W12MForm onSubmitForm={mockFunction}/>);
//   const idButtonSubmitForm = screen.getByTestId("buttonSubmitForm");
//   userEvent.click(idButtonSubmitForm)  ;
//   expect(mockFunction).toHaveBeenCalledTimes(1);

  // fireEvent.keyDown(idButtonSubmitForm, { key: "Enter" })  
  // expect(mockFunction).toHaveBeenCalledTimes(1); 
// });

