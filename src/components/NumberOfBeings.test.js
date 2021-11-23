import { render, screen } from "@testing-library/react";
import NumberOfBeings from "./NumberOfBeings";

test("renders number f beings", () => {
  render(<NumberOfBeings />);
  const someHeaderText = screen.getByText(/Number of beings/i);
  expect(someHeaderText).toBeInTheDocument();
});
