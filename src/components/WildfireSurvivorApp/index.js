import React, { useState, useEffect } from "react";
import GeneralInformation from "../GeneralInformation";
import states from "../../constants/states";
import agencies from "../../constants/agencies";
import StartPage from "../StartPage";
import PreviewPage from "../PreviewPage";
import CompletePage from "../CompletePage";
import SCHEMA from "../../constants/schema";
import FIELDS from "../../constants/component_fields";

const WildfireSurvivorApp = () => {
  const initialState = {};

  // Set initial state
  Object.keys(SCHEMA).forEach(key => {
    if (SCHEMA.hasOwnProperty(key)) {
      initialState[key] = SCHEMA[key].initial_value;
    }
  });

  // Form data saved to localStorage upon setState
  // Retrieve it from there on re-renders
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("formData")) || initialState
  );

  /*
  const handleChange = event => {
    let eventClass = event.target.className;
    let name;
    let value;
    switch (eventClass) {
      case "household_members":
        name = event.target.name;
        value = state["household_members"]["count"] + 1;
        break;
      case "agencies":
        name = event.target.name;
        value = event.target.checked;
        break;
      case "images":
        name = event.target.name;
        if (event.target.files) {
          let fileDataUrl = Array.prototype.map.call(
            event.target.files,
            file => {
              return URL.createObjectURL(file);
            }
          );
          value = fileDataUrl;
        }
        break;
      case "members-of-household":
        name = event.target.parentElement.id;
        value = state[eventClass]
          ? {
              ...state[eventClass][name],
              [event.target.name]: event.target.value
            }
          : { [event.target.name]: event.target.value };
        break;
      case "general-information":
      case "additional-contact-information":
      case "cash-grant-information":
      case "notes":
      case "signature":
      default:
        name = event.target.name;
        value = event.target.value;
        break;
    }
    let newState = {
      ...state,
      [eventClass]: { ...state[eventClass], [name]: value }
    };
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  };
  */

  /**
   * update state and localStorage
   * @param {event} e
   */
  const handleChange = e => {
    let newState = { ...state, [e.target.name]: e.target.value };
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  };

  const getInputElements = category => {
    return FIELDS[category].map((field, idx) => {
      switch (SCHEMA[field].input) {
        case "file":
          return (
            <input
              key={idx}
              className={category}
              type="file"
              name={field}
              accept="image/*"
              onChange={handleChange}
              multiple
            />
          );
        case "select":
          return (
            <select
              key={idx}
              className={category}
              name={field}
              onChange={handleChange}
            >
              {SCHEMA[field].options}
            </select>
          );
        case "checkbox":
          return (
            <label htmlFor={field}>
              <input
                key={idx}
                className={category}
                type="checkbox"
                name={field}
                value={state[field]}
                placeholder={SCHEMA[field].placeholder}
                onChange={handleChange}
              />
              {SCHEMA[field].name}
            </label>
          );
        case "radio":
          return (
            <label htmlFor={field}>
              <input
                key={idx}
                className={category}
                type="radio"
                name={SCHEMA[field].name}
                onChange={handleChange}
              />
              {SCHEMA[field].placeholder}
            </label>
          );
        case "text":
        default:
          return (
            <input
              key={idx}
              className={category}
              type="text"
              name={field}
              value={state[field]}
              placeholder={SCHEMA[field].placeholder}
              onChange={handleChange}
            />
          );
      }
    });
  };

  // Get input elements
  let general_information_elements = getInputElements("general_information");
  let additional_contact_information_elements = getInputElements(
    "additional_contact_information"
  );
  let cash_grant_information_elements = getInputElements(
    "cash_grant_information"
  );
  let landlord_information_elements = getInputElements("landlord_information");
  let notes_elements = getInputElements("notes");
  let photo_id_elements = getInputElements("photo_id");
  let address_proof_elements = getInputElements("address_proof");
  let house_damage_elements = getInputElements("house_damage");
  let receipts_elements = getInputElements("receipts");
  let agencies_elements = getInputElements("agencies");
  let can_content_release_elements = getInputElements("can_content_release");
  let signature_elements = getInputElements("signature");
  let case_managers_information_elements = getInputElements("case_managers");
  let sba_loan_elements = getInputElements("sba_loan");
  let members_of_household_elements = getInputElements("members_of_household");

  /**
   * Add household member data to SCHEMA and FIELDS
   */
  const addHouseholdMember = () => {
    let current_household_member_count = state["members_of_household_count"];
    const prefix = "household_member_" + current_household_member_count;

    const schema_values = [
      SCHEMA["household_member_0_first_name"],
      SCHEMA["household_member_0_middle_name"],
      SCHEMA["household_member_0_last_name"],
      SCHEMA["household_member_0_dob"],
      SCHEMA["household_member_0_relation"]
    ];

    const schema_keys = [
      "_first_name",
      "_middle_name",
      "_last_name",
      "_dob",
      "_relation"
    ].map(key => prefix + key);

    // Update FIELDS
    for (let i = 0; i < schema_keys.length; i++) {
      FIELDS["members_of_household"].push(schema_keys[i]);
    }

    // Update SCHEMA
    for (let i = 0; i < schema_keys.length; i++) {
      SCHEMA[schema_keys[i]] = schema_values[i];
    }

    let newState = {
      ...state,
      ["members_of_household_count"]: current_household_member_count + 1
    };
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  };

  /**
   * Add case manager to FIELDS and SCHEMA
   */
  const addCaseManager = () => {};
  return (
    <div id="form-container">
      <div id="start-page-container">
        <div id="general-information-container">
          <h2>General Information</h2>
          <h3>
            Please provide your current information so that we can contact you
            about your case
          </h3>
          {general_information_elements}
        </div>
        <div id="members-of-household-container">
          <h2>Members of Household</h2>
          <h3>Please provide information about members of your household</h3>
          {members_of_household_elements}
          <br />
          <button name="add_household_member" onClick={addHouseholdMember}>
            Add Household Member
          </button>
        </div>
        <div id="additional-contact-information-container">
          <h2>Additional Contact</h2>
          <h3>Please provide a contact if we are not able to reach you</h3>
          {additional_contact_information_elements}
        </div>
        <div id="cash-grant-information-container">
          <h2>Cash Grant Information</h2>
          <h3>
            Please provide the information about the address where damage
            occurred
          </h3>
          {cash_grant_information_elements}
        </div>
        <div id="landlord-information-container">
          <h3>If you rented, enter information about your landlord</h3>
          {landlord_information_elements}
        </div>
        <div id="notes-container">
          <h2>Notes</h2>
          <h3>
            Briefly describe how you were impacted by the wildfire. Was your
            primary residence destroyed or significantly damaged by the fire? To
            what degree, if any, are you insured for any of your losses?
            (Homeowners, renters, etc.)
          </h3>
          {notes_elements}
        </div>
        <div id="photo-id-container">
          <h2>Photo of ID</h2>
          {photo_id_elements}
        </div>
        <div id="address-proof-container">
          <h2>Photo of address proof</h2>
          {address_proof_elements}
        </div>
        <div id="damaged-house-container">
          <h2>Photos of your damaged house</h2>
          {house_damage_elements}
        </div>
        <div id="receipts-container">
          <h2>Photos of your receipts</h2>
          {receipts_elements}
        </div>
        <div id="consent-release-container">
          <h2>Coordinated Assistance Network Consent and Release</h2>
          {can_content_release_elements}
        </div>
        <div id="agencies-container">
          <h2>Other agencies you work with</h2>
          {agencies_elements}
        </div>
        <div id="case-managers-container">
          <h2>Case Managers you work with</h2>
          {case_managers_information_elements}
          <br />
          <button name="add_case_manager">Add Case Manager</button>
        </div>
        <div id="sba-loan-container">
          <h2>Did you apply for a SBA loan?</h2>
          {sba_loan_elements}
        </div>
        <div id="signature-container">
          <h2>Electronic Signature</h2>
          <h3>
            By entering my name, I understand this constitutes a legal signature
            confirming that I acknowledge and agree that all information entered
            is correct and truthful
          </h3>
          {signature_elements}
        </div>
      </div>
    </div>
  );
};

export default WildfireSurvivorApp;
