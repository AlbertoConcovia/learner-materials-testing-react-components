import { render, screen } from "@testing-library/react";
import ReasonForSparing from "./ReasonForSparing";


describe("PlanetName", () => {

// test("renders reason for sparing", () => {
//   render(<ReasonForSparing />);
//   const reasonForSparingText = screen.getByText(/Reason for sparing/i);
//   expect(reasonForSparingText).toBeInTheDocument();
// });

  it("Component ReasonForSparing Render - Given the required props, When the component is rendered, Then the label Reason for sparing and input should be present", () => {
    const requiredProps = {
      reasonForSparingText: "Reason for sparing"
    };
    render(<ReasonForSparing {...requiredProps} />);
    expect(screen.getByText("Reason for sparing")).toBeInTheDocument();
  });

});
