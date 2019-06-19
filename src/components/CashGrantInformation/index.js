import React from "react";

const CashGrantInformation = () => {
  return (
    <div>
      <h2>CashGrantInformation</h2>
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
      <input type="text" name="damaged_state" placeholder="State" required />
      <input type="text" name="damaged_zip" placeholder="zip" required />
    </div>
  );
};

export default CashGrantInformation;
