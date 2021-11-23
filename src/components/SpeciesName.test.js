import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

describe("SpeciesName", () => {

	it("Component SpeciesName Render - Given the required props, When the component is rendered, Then the label Planet Name and input should be present", () => {
	  const requiredProps = {
		speciesName: "Species Name"
	  };
	  render(<SpeciesName {...requiredProps} />);
	  const speciesNameText = screen.getByText("Species Name");
	  const speciesNameLabelText = screen.getByLabelText("Species Name");
	  expect(speciesNameLabelText).toBeInTheDocument();
	  expect(speciesNameText).toBeInTheDocument();
	});
    
	it("Display input fields value - Given the required props, When the component is rendered, Then the input fields value should be present", () => {
	  const requiredProps = {
		speciesName: "Species Name"
	  };
	  render(<SpeciesName {...requiredProps} />);
	  const speciesNameLabelText = screen.getByLabelText("Species Name");
	  expect(speciesNameLabelText).toHaveValue("Species Name"); 
	});
});
