import React from "react";

const GeneralInformation = () => {
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
        name="survivor_apartment_numer"
        placeholder="Apartment Number"
      />
      <input type="text" name="survivor_city" placeholder="City" required />
      <input type="text" name="survivor_state" placeholder="State" required />
      <input type="text" name="survivor_zip" placeholder="Zip Code" required />
    </div>
  );
};

export default GeneralInformation;
