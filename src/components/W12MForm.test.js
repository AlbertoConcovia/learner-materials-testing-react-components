import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import W12MForm from "./W12MForm";

test("renders form element", () => {
  const mockFunction = jest.fn();
  const { container } = render(<W12MForm onSubmitForm={mockFunction}/>);
  expect(container.firstChild).toHaveClass("w12MForm");
});

it(`Given the required props,
When click or pressing enter,
Then function must be called`, () => {

  render(<W12MForm />);
  const idButtonSubmitForm = screen.getByTestId("buttonSubmitForm");

  userEvent.click(idButtonSubmitForm)
  expect(idButtonSubmitForm).toBeChecked()
});
