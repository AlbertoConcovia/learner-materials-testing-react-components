import { render, screen } from "@testing-library/react";
import NumberOfBeings from "./NumberOfBeings";

test("renders number f beings", () => {
  render(<NumberOfBeings />);
  const numberofbeingsText = screen.getByText(/Number of beings/i);
  expect(numberofbeingsText).toBeInTheDocument();
});
