const WhatIs2plus2 = ({whatIs2plus2, onChangeWhatIs2plus2}) => (
  <>
    <label htmlFor="fwhatis2plus2">What is 2+2? </label>
    <select name="fwhatis2plus2" id="fwhatis2plus2" value={whatIs2plus2} onChange={onChangeWhatIs2plus2}>
      <option value="not4">Not 4</option>
      <option value="4">4</option>
    </select>
  </>
);

export default WhatIs2plus2;
