import { render, screen } from "@testing-library/react";
import NumberOfBeings from "./NumberOfBeings";

test("renders Species Name Input", () => {
  render(<NumberOfBeings />);
  const someHeaderText = screen.getByText(/Number of beings/i);
  expect(someHeaderText).toBeInTheDocument();
});
