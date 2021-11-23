const PlanetName = ({planetName, onChangePlanetName}) => (
	<div>
		<label htmlFor="planetname">Planet Name </label>
 		<input type="text" id="planetname" value={planetName} onChange={onChangePlanetName}/>
	</div>
);

export default PlanetName;
