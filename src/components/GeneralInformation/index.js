import React from "react";
import states from "../../constants/states";
import useFormInput from "../../constants/functions";

const GeneralInformation = () => {
  const stateOptions = states.map((state) => 
    <option value={state.abbreviation}>{state.name}</option>
  );

  const userInput = useFormInput()

  return (
    <div>
      <h2>GeneralInformation</h2>
      <input
        type="text"
        name="survivor_first_name"
        placeholder="First Name"
        value = {userInput.survivor_first_name}
        onChange = {userInput.onChange}
        required
      />
      <input
        type="text"
        name="survivor_middle_name"
        placeholder="Middle Name"
        value = {userInput.survivor_middle_name}
        onChange = {userInput.onChange}
      />
      <input
        type="text"
        name="survivor_last_name"
        placeholder="Last Name"
        value = {userInput.survivor_last_name}
        onChange = {userInput.onChange}
        required
      />
      <input
        type="text"
        name="survivor_phone"
        placeholder="Phone Number"
        value = {userInput.survivor_phone}
        onChange = {userInput.onChange}
        required
      />
      <input
        type="text"
        name="survivor_email"
        placeholder="Email Address"
        value = {userInput.survivor_email}
        onChange = {userInput.onChange}
        required
      />
      <input
        type="text"
        name="survivor_current_address"
        placeholder="Current Address"
        value = {userInput.survivor_current_address}
        onChange = {userInput.onChange}
        required
      />
      <input
        type="text"
        name="survivor_apartment_number"
        placeholder="Apartment Number"
        value = {userInput.survivor_apartment_number}
        onChange = {userInput.onChange}
      />
      <input type="text" name="survivor_city" placeholder="City" value = {userInput.survivor_city} onChange = {userInput.onChange} required />
      <select name="survivor_state" value = {userInput.survivor_state} onChange = {userInput.onChange} >
        {stateOptions}
      </select>
      <input type="text" name="survivor_zip" placeholder="Zip Code" value = {userInput.survivor_zip} onChange = {userInput.onChange} required />
      <div>
        {JSON.stringify(userInput)}
      </div>
    </div>
  );
};

export default GeneralInformation;
