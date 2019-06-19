import React from "react";

const AdditionalContact = () => {
  return (
    <div>
      <h2>AdditionalContact</h2>
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
      <input
        type="text"
        name="additional_contact_state"
        placeholder="State"
        required
      />
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
