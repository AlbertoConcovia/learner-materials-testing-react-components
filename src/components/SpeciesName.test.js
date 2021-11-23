import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders Species Name Input', () => {
	render(<SpeciesName/>);
	const speciesNameText = screen.getByText(
		/Species Name/i
	);
	expect(speciesNameText).toBeInTheDocument();
});
