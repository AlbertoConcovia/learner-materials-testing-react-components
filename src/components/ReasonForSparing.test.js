import { render, screen } from "@testing-library/react";
import ReasonForSparing from "./ReasonForSparing";

test("renders reason for sparing", () => {
  render(<ReasonForSparing />);
  const someHeaderText = screen.getByText(/Reason for sparing/i);
  expect(someHeaderText).toBeInTheDocument();
});
