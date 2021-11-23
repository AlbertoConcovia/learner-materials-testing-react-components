const ReasonForSparing = ({reasonForSparing, setReasonForSparing}) => (
  <>
    <label htmlFor="freasonforsparing">Reason for sparing</label>
    <textarea
      id="reasonforsparing"
      placeholder={reasonForSparing}
      rows="5"
      cols="40"
      onChange={setReasonForSparing}
    ></textarea>
  </>
);

export default ReasonForSparing;
