import React, { useState, useEffect } from "react";
import SCHEMA from "../../constants/schema";
import FIELDS from "../../constants/component_fields";

const WildfireSurvivorApp = () => {
  const initialState = {"start_page": true, "preview_page": false, "confirmation_page": false};

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

  /**
   * update state and localStorage
   * @param {event} e
   */
  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.type == "checkbox" ? e.target.checked : e.target.value
    let newState = { ...state, [name]: value };
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  };

  return (
    <div>
      <Header state={state} setState={setState} />
    {state["start_page"] ? <StartPage state={state} setState={setState} handleChange={handleChange} /> : null}
    {state["preview_page"] ? <PreviewPage state={state} setState={setState} /> : null}
    {state["confirmation_page"] ? <ConfirmationPage /> : null}
    </div>
  )

}

const Header = ({ state, setState }) => {
  const goToStartPage = e => {
    let newState = {...state, "start_page": true, "preview_page": false, "confirmation_page": false}
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  const goToPreviewPage = e => {
    let newState = {...state, "start_page": false, "preview_page": true, "confirmation_page": false}
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  const goToConfirmationPage = e => {
    let newState = {...state, "start_page": false, "preview_page": false, "confirmation_page": true}
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  return (
    <div id="header">
      <svg viewBox="0 0 800 100"id="header-svg">
        <text x="32" y="25" >Start</text>
        {state["start_page"] ? <circle cx="50" cy="50" r="10" fill="orange" onClick={goToStartPage} /> : <circle cx="50" cy="50" r="10" fill="black" onClick={goToStartPage}/>}
        <text x="173" y="25">Preview</text>
        {state["preview_page"] ? <circle cx="200" cy="50" r="10" fill="orange" onClick={goToPreviewPage}/> : <circle cx="200" cy="50" r="10" fill="black" onClick={goToPreviewPage}/>}
        <text x="308" y="25">Confirmation</text>
        {state["confirmation_page"] ? <circle cx="350" cy="50" r="10" fill="orange" onClick={goToConfirmationPage}/> : <circle cx="350" cy="50" r="10" fill="black" onClick={goToConfirmationPage}/>}
      </svg>
    </div>
  )
}
const StartPage = ({state, setState, handleChange}) => {
  /**
   * lookup category in FIELDS, and fields in SCHEMA
   * return elements used for form inputs
   * @param {string} category 
   * @return {Array}
   */
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
       case "radio":
         let radio = state[field] ? (<label htmlFor={SCHEMA[field].name}>
          <input
            key={idx}
            className={category}
            type={SCHEMA[field].input}
            name={SCHEMA[field].name}
            placeholder={SCHEMA[field].placeholder}
            onChange={handleChange}
            checked
          />
          {SCHEMA[field].label}
          </label>) : (<label htmlFor={SCHEMA[field].name}>
             <input
               key={idx}
               className={category}
               type={SCHEMA[field].input}
               name={SCHEMA[field].name}
               placeholder={SCHEMA[field].placeholder}
               onChange={handleChange}
             />
             {SCHEMA[field].label}
           </label>);
           return radio;
       case "checkbox":
         // Return checkbox as checked if user has clicked it
         let checkbox = state[field] ? (<label htmlFor={field}>
          <input
            key={idx}
            className={category}
            type={SCHEMA[field].input}
            name={field}
            placeholder={SCHEMA[field].placeholder}
            onChange={handleChange}
            checked
          />
          {SCHEMA[field].label}
        </label>) : (<label htmlFor={field}>
             <input
               key={idx}
               className={category}
               type={SCHEMA[field].input}
               name={field}
               placeholder={SCHEMA[field].placeholder}
               onChange={handleChange}
             />
             {SCHEMA[field].label}
           </label>);
         return (
           checkbox
         );
       case null:
         break;
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

  // Get input elements for each category on the Start Page
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
   * used as event handler for button clicked to add household member
   * form inputs
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
      "members_of_household_count": current_household_member_count + 1
    };
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  };

  /**
   * Add case manager member data to SCHEMA and FIELDS
   * used as event handler for button clicked to add household member
   * form inputs
   */
  const addCaseManager = () => {
    let current_case_manager_count = state["case_manager_count"];
    const prefix = "case_manager_" + current_case_manager_count;
    const schema_values = [
      SCHEMA["case_manager_0_referring_agency"],
      SCHEMA["case_manager_0_first_name"],
      SCHEMA["case_manager_0_middle_name"],
      SCHEMA["case_manager_0_last_name"],
      SCHEMA["case_manager_0_phone"],
      SCHEMA["case_manager_0_email"]
    ];

    const schema_keys = [
      "_referring_agency",
      "_first_name",
      "_middle_name",
      "_last_name",
      "_phone",
      "_email"
    ].map(key => prefix + key);

    // Update FIELDS
    for (let i = 0; i < schema_keys.length; i++) {
      FIELDS["case_managers"].push(schema_keys[i]);
    }

    // Update SCHEMA
    for (let i = 0; i < schema_keys.length; i++) {
      SCHEMA[schema_keys[i]] = schema_values[i];
    }

    let newState = {
      ...state,
      "case_manager_count": current_case_manager_count + 1
    };
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  };

  /**
   * handle preview button click event
   */
  const handlePreview = (e) => {
    let newState = { ...state, "start_page": false, "preview_page": true}
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  return (
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
          <button name="add_case_manager" onClick={addCaseManager}>
            Add Case Manager
          </button>
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
        <button type="submit" onClick={handlePreview}>Preview</button>
      </div>
  );
};

const PreviewPage = ({ state, setState }) => {
  /**
   * handle submit button click event
   */
  const handleSubmit = (e) => {
    let newState = { ...state, "preview_page": false, "confirmation_page": true}
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  const goToStartPage = e => {
    let newState = {...state, "start_page": true, "preview_page": false, "confirmation_page": false}
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  return (
    <div id="preview-container">
      <h2>General Information</h2>
      <p id="survivor-name-preview">
        Name:{ " " + state["survivor_first_name"] + " " + state["survivor_middle_name"] + " " + state["survivor_last_name"]}
      </p>
      <p id="survivor_phone_preview">
        Phone:{" " + state["survivor_phone"]}
      </p>
      <p id="survivor_email_preview">
        Email:{" " + state["survivor_email"]}
      </p>
      <p id="survivor_address_preview">
        Address:{" " + state["survivor_address1"] + " " + state["survivor_address2"] + " " + state["survivor_city"] + ", " + state["survivor_state"] + " " + state["survivor_zip"]}
      </p>
      <h2>Members of Household</h2>
      <p id="members_of_household_preview"></p>
      <h2>Additional Contact</h2>
      <p id="additional_contact_preview">
      <p id="additional_contact_name_preview">
        Name:{ " " + state["additional_contact_first_name"] + " " + state["additional_contact_middle_name"] + " " + state["additional_contact_last_name"]}
      </p>
      <p id="survivor_phone_preview">
        Phone:{" " + state["additional_contact_phone"]}
      </p>
      <p id="additional_contact_email_preview">
        Email:{" " + state["additional_contact_email"]}
      </p>
      <p id="survivor_address_preview">
        Address:{" " + state["additional_contact_address1"] + " " + state["additional_contact_address2"] + ", " + state["additional_contact_city"] + ", " + state["additional_contact_state"] + " " + state["additional_contact_zip"]}
      </p>
      <h2>Members of Household</h2>
      <p id="members_of_household_preview"></p>
      </p>
      <h2>Cash Grant Information</h2>
      <p id="fema_preview">
        FEMA #: {" " + state["fema_number"]}
      </p>
      <p id="fire_name_preview">
        Fire Name: {" " + state["fire_name"]}
      </p>
      <p id="fire_name_preview">
        Damaged House Address: {" " + state["damaged_address1"] + " " + state["damaged_address2"] + " " + state["damaged_city"] + ", " + state["damaged_state"] + " " + state["damaged_zip"]}
      </p>
      <h2>Landlord Information</h2>
      <p id="landlord_name_preview">
        Name: {" " + state["landlord_first_name"] + " " + state["landlord_middle_name"] + " " + state["landlord_last_name"]}
      </p>
      <p id="landlord_phone_preview">
        Phone: {" " + state["landlord_phone"]}
      </p>
      <p id="landlord_email_preview">
        Email: {" " + state["landlord_email"]}
      </p>
      <h2>Notes</h2>
      <p id="notes_preview">
        Notes: {" " + state["notes"]}
      </p>
      <h2>Photo ID</h2>
      <p id="photo_id_preview">

      </p>
      <h2>Address Proof</h2>
      <p id="address_proof_preview">

      </p>
      <h2>Damaged House Photos</h2>
      <p id="damaged_house_preview">

      </p>
      <h2>Receipts</h2>
      <p id="receipts_preview">

      </p>
      <h2>CAN Consent and Release Form</h2>
      <p id="can_conset_release_preview">

      </p>
      <h2>Agencies You Work With</h2>
      <p id="agencies_preview">

      </p>
      <h2>Case Managers</h2>
      <p id="case_managers_preview">
        
      </p>
      <h2>SBA Loan</h2>
      <p id="sba_loan_preview">

      </p>
      <h2>Electronic Signature</h2>
      <p id="signature_preview">
        {state["signature"]}
      </p>
      <button type="submit" onClick={goToStartPage}>Back</button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

const ConfirmationPage = () => {
  return (
    <div id="confirmation-container">
      <h2>Confirmation Page</h2>
    </div>
  )
}
export default WildfireSurvivorApp;
