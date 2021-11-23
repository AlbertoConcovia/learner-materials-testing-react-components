const SpeciesName = ( {speciesName, onChangeSpeciesName} ) => ( 
    <div> 
        <label htmlFor='speciesName'>Species Name</label> 
        <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} /> 
    </div> 
);

export default SpeciesName;
