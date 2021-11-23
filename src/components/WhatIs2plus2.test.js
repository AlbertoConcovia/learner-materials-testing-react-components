import { render, screen } from "@testing-library/react";
import WhatIs2plus2 from "./WhatIs2plus2";

test("renders Species Name Input", () => {
  render(<WhatIs2plus2 />);
  const someHeaderText = screen.getByText(/What is 2+2?/i);
  expect(someHeaderText).toBeInTheDocument();
});
