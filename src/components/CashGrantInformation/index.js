import React from "react";
import states from "../../constants/states";

const CashGrantInformation = () => {
  const stateOptions = states.map((state) => 
    <option value={state.abbreviation}>{state.name}</option>
  );

  return (
    <div id="cash-grant-information">
      <h2>CashGrant Information</h2>
      <h3>Please provide inforomation regarding the home address damaged by the wildfire(s)</h3>
      <input type="text" name="fema_number" required />
      <select name="fire_name" required>
        <option value="none" />
        <option value="camp">Camp Fire</option>
        <option value="carr">Carr Fire</option>
        <option value="tubbs">Tubbs Fire</option>
      </select>
      <input
        type="text"
        name="damaged_address"
        placeholder="Damaged House Address"
        required
      />
      <input
        type="text"
        name="damaged_apartment_number"
        placeholder="Apartment Number"
      />
      <input type="text" name="damaged_city" placeholder="City" required />
      <select name="damaged_state">
        {stateOptions}
      </select>
      <input type="text" name="damaged_zip" placeholder="zip" required />
    </div>
  );
};

export default CashGrantInformation;
