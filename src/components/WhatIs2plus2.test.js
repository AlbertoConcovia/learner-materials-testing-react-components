import { render, screen } from "@testing-library/react";
import WhatIs2plus2 from "./WhatIs2plus2";

describe("WhatIs2plus2", () => {
  it("Component WhatIs2plus2 Render - Given the required props, When the component is rendered, Then the label whatIs2plus2 and input should be present", () => {
    const requiredProps = {
      whatIs2plus2: "What is 2+2?" 
    };
    render(<WhatIs2plus2 {...requiredProps} />);
    const whatIs2plus2Text = screen.getByText("What is 2+2?");
    const swhatIs2plus2LabelText = screen.getByLabelText("What is 2+2?");
    expect(swhatIs2plus2LabelText).toBeInTheDocument();
    expect(whatIs2plus2Text).toBeInTheDocument();
  });
});
