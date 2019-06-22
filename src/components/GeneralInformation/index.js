import React from "react";
import states from "../../constants/states";

const GeneralInformation = () => {
  const stateOptions = states.map((state) => 
    <option value={state.abbreviation}>{state.name}</option>
  );

  return (
    <div>
      <h2>GeneralInformation</h2>
      <input
        type="text"
        name="survivor_first_name"
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="survivor_middle_name"
        placeholder="Middle Name"
      />
      <input
        type="text"
        name="survivor_last_name"
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        name="survivor_phone"
        placeholder="Phone Number"
        required
      />
      <input
        type="text"
        name="survivor_email"
        placeholder="Email Address"
        required
      />
      <input
        type="text"
        name="survivor_current_address"
        placeholder="Current Address"
        required
      />
      <input
        type="text"
        name="survivor_apartment_number"
        placeholder="Apartment Number"
      />
      <input type="text" name="survivor_city" placeholder="City" required />
      <select name="survivor_state">
        {stateOptions}
      </select>
      <input type="text" name="survivor_zip" placeholder="Zip Code" required />
    </div>
  );
};

export default GeneralInformation;
