import React from "react";
import states from "../../constants/states";

const AdditionalContact = () => {
  const stateOptions = states.map((state) => 
    <option value={state.abbreviation}>{state.name}</option>
  );

  return (
    <div>
      <h2>Additional Contact</h2>
      <h3>Please provide a contact if we are not able to reach you</h3>
      <input
        type="text"
        name="additional_contact_first_name"
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="additional_contact_middle_name"
        placeholder="Middle Name"
      />
      <input
        type="text"
        name="additional_contact_last_name"
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        name="additional_contact_phone"
        placeholder="Phone Number"
        required
      />
      <input
        type="text"
        name="additional_contact_email"
        placeholder="Email Address"
        required
      />
      <input
        type="text"
        name="additional_contact_current_address"
        placeholder="Current Address"
        required
      />
      <input
        type="text"
        name="additional_contact_apartment_number"
        placeholder="Apartment Number"
      />
      <input
        type="text"
        name="additional_contact_city"
        placeholder="City"
        required
      />
      <select name="additional_contact_state" >
        {stateOptions}
      </select>
      <input
        type="text"
        name="additional_contact_zip"
        placeholder="Zip Code"
        required
      />
    </div>
  );
};

export default AdditionalContact;
