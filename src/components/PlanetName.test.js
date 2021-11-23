import { render, screen } from "@testing-library/react";
import PlanetName from "./PlanetName";

test("renders planet name", () => {
  render(<PlanetName />);
  const someHeaderText = screen.getByText(/Planet Name/i);
  expect(someHeaderText).toBeInTheDocument();
});
