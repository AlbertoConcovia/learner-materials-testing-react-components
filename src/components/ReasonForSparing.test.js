import { render, screen } from "@testing-library/react";
import ReasonForSparing from "./ReasonForSparing";

test("renders reason for sparing", () => {
  render(<ReasonForSparing />);
  const reasonForSparingText = screen.getByText(/Reason for sparing/i);
  expect(reasonForSparingText).toBeInTheDocument();
});
