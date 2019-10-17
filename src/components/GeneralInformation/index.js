import React from "react";
import states from "../../constants/states";
import SCHEMA from "../../constants/schema";
import FIELDS from "../../constants/component_fields";
import useFormInput from "../../constants/functions";

const GeneralInformation = ({ handleChange }) => {
  const stateOptions = states.map(state => (
    <option key={state.abbreviation} value={state.abbreviation}>
      {state.name}
    </option>
  ));

  const general_information_fields = FIELDS.general_information;

  const general_information_elements = general_information_fields.map(
    (field, idx) => {
      switch (field) {
        case "survivor_state":
          return (
            <select
              key={idx}
              className="general-information"
              name="survivor_state"
              value={SCHEMA[field].initial_value}
              onChange={handleChange}
            >
              {stateOptions}
            </select>
          );
        default:
          return (
            <input
              key={idx}
              className="general-information"
              type="text"
              name={field}
              value={SCHEMA[field].initial_value}
              placeholder={SCHEMA[field].placeholder}
            />
          );
      }
    }
  );

  return (
    <div id="general-information-container">
      {general_information_elements}
    </div>
  );
};

/*

const GeneralInformation2 = () => {
  const stateOptions = states.map(state => (
    <option value={state.abbreviation}>{state.name}</option>
  ));

  const userInput = useFormInput();

  return (
    <div id="general-information-container">
      <h2>General Information</h2>
      <h3>
        Please provide your current information so that we can contact you about
        your case
      </h3>
      <input
        type="text"
        name="survivor_first_name"
        placeholder="First Name"
        value={userInput.value.survivor_first_name}
        onChange={userInput.onChange}
        required
      />
      <input
        type="text"
        name="survivor_middle_name"
        placeholder="Middle Name"
        value={userInput.value.survivor_middle_name}
        onChange={userInput.onChange}
      />
      <input
        type="text"
        name="survivor_last_name"
        placeholder="Last Name"
        value={userInput.value.survivor_last_name}
        onChange={userInput.onChange}
        required
      />
      <input
        type="text"
        name="survivor_phone"
        placeholder="Phone Number"
        value={userInput.value.survivor_phone}
        onChange={userInput.onChange}
        required
      />
      <input
        type="text"
        name="survivor_email"
        placeholder="Email Address"
        value={userInput.value.survivor_email}
        onChange={userInput.onChange}
        required
      />
      <input
        type="text"
        name="survivor_current_address"
        placeholder="Current Address"
        value={userInput.value.survivor_current_address}
        onChange={userInput.onChange}
        required
      />
      <input
        type="text"
        name="survivor_apartment_number"
        placeholder="Apartment Number"
        value={userInput.value.survivor_apartment_number}
        onChange={userInput.onChange}
      />
      <input
        type="text"
        name="survivor_city"
        placeholder="City"
        value={userInput.value.survivor_city}
        onChange={userInput.onChange}
        required
      />
      <select
        name="survivor_state"
        value={userInput.value.survivor_state}
        onChange={userInput.onChange}
      >
        {stateOptions}
      </select>
      <input
        type="text"
        name="survivor_zip"
        placeholder="Zip Code"
        value={userInput.value.survivor_zip}
        onChange={userInput.onChange}
        required
      />
    </div>
  );
};

*/

export default GeneralInformation;
