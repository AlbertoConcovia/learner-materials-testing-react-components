
const NumberOfBeings = ({numberOfBeings, onChangeNumberOfBeings}) => ( 
    <div>
      <label htmlFor="numberofbeings">Number of beings: </label>
      <input id='numberofbeings' type="text" value={numberOfBeings} onChange={onChangeNumberOfBeings} />
    </div> 
  );


export default NumberOfBeings;
