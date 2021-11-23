import { render, screen } from "@testing-library/react";
import PlanetName from "./PlanetName";

describe("PlanetName", () => {
  it("Component Render - Given the required props, When the component is rendered, Then the label Planet Name and input should be present", () => {
    const requiredProps = {
      planetName: "earth"
    };

    render(<PlanetName {...requiredProps} />);

    const planetNameText = screen.getByText("Planet Name");
    const planetNameLabelText = screen.getByLabelText("Planet Name");

    expect(planetNameLabelText).toBeInTheDocument();
    expect(planetNameText).toBeInTheDocument();
  });


  it("Display input fields value - Given the required props, When the component is rendered, Then the input fields value should be present", () => {
    const requiredProps = {
      planetName: "earth"
    };

    render(<PlanetName {...requiredProps} />);

    expect(screen.getByLabelText("Planet Name")).toHaveValue("earth"); 
  });

});
