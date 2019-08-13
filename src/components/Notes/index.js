import React from "react";

const Notes = () => {
  // TODO: add useFormInput
  return (
    <div id="notes-container">
      <h2>Notes</h2>
      <h3> Briefly describe how you were impacted by the wildfire. Was your primary residence destroyed or damaged?
        To what degree are you insured for any of your losses? (Homeowner's, renters, etc.)
      </h3>
      <input type="text" name="notes" />
    </div>
  )
};

export default Notes;
