import { render, screen } from "@testing-library/react";
import PlanetName from "./PlanetName";

test("renders Species Name Input", () => {
  render(<PlanetName />);
  const someHeaderText = screen.getByText(/Planet Name/i);
  expect(someHeaderText).toBeInTheDocument();
});
