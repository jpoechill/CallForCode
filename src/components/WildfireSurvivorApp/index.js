import React, { useState, useEffect } from "react";
import states from "../../constants/states";
import agencies from "../../constants/agencies";
import StartPage from "../StartPage";
import PreviewPage from "../PreviewPage";
import CompletePage from "../CompletePage";
import SCHEMA from "../../constants/schema";

const WildfireSurvivorApp = () => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("formData")) || SCHEMA
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
  /**
   * Get state given a set of nested properties
   * @param {string} property1 first child prop of state
   * @param {string} property2 first child propr of state[property1]
   * @return value of state[property1][property2]
   */
  const getState = (property1, property2) => {
    let value;
    if (state[property1]) {
      if (state[property1][property2]) {
        value = state[property1][property2];
      } else {
        value = "";
      }
    }
    return value;
  };

  const getHouseholdMemberState = (property1, property2, property3) => {
    let value;
    if (state[property1]) {
      if (state[property1][property2]) {
        if (state[property1][property2][property3]) {
          value = state[property1][property2][property3];
        } else {
          value = "";
        }
      }
    }
    return value;
  };

  const notes = state.notes ? state.notes.notes : "";

  // Generate list of US states as options
  const stateOptions = states.map(state => (
    <option key={state.abbreviation} value={state.abbreviation}>
      {state.name}
    </option>
  ));

  // Store agencyNames from agencies import for reference in checkedAgencyList
  const agencyNames = agencies.map(agency => agency.name);

  const agencyText = agencies.map(agency => agency.text);
  // Generate agency inputs
  let agencyList = agencies.map(agency => (
    <label key={agency.name + "-label"} htmlFor={agency.name}>
      <input
        key={agency.name}
        className="agencies"
        type="checkbox"
        name={agency.name}
        checked={getState("agencies", agency.name)}
        onChange={handleChange}
      />
      {agency.text}
    </label>
  ));

  /**
   * Get house member data for preview
   */
  const getHouseholdMemberData = () => {
    let id;
    let householdPreviewElements = [];

    for (let i = 0; i <= state.household_members.count; i++) {
      id = "member_of_household_" + i;
      householdPreviewElements.push(
        <p>
          Name:{" "}
          {state["members-of-household"][id]["member_of_household_first_name"] +
            " " +
            state["members-of-household"][id][
              "member_of_household_middle_name"
            ] +
            " " +
            state["members-of-household"][id]["member_of_household_last_name"]}
        </p>
      );
    }
    return householdPreviewElements;
  };
  // TODO: Generate household member inputs
  const getHouseholdMemberInputs = () => {
    let id;
    let householdInputElements = [];
    for (let i = 0; i <= state.household_members.count; i++) {
      id = "member_of_household_" + i;

      householdInputElements.push(
        <div key={id} id={id}>
          <input
            key={id + "_first_name"}
            className="members-of-household"
            type="text"
            name="member_of_household_first_name"
            placeholder="First Name"
            value={getHouseholdMemberState(
              "members-of-household",
              id,
              "member_of_household_first_name"
            )}
            onChange={handleChange}
          />
          <input
            key={id + "_middle_name"}
            className="members-of-household"
            type="text"
            name="member_of_household_middle_name"
            placeholder="Middle Name"
            value={getHouseholdMemberState(
              "members-of-household",
              id,
              "member_of_household_middle_name"
            )}
            onChange={handleChange}
          />
          <input
            key={id + "_last_name"}
            className="members-of-household"
            type="text"
            name="member_of_household_last_name"
            placeholder="Last Name"
            value={getHouseholdMemberState(
              "members-of-household",
              id,
              "member_of_household_last_name"
            )}
            onChange={handleChange}
          />
          <input
            key={id + "_dob"}
            className="members-of-household"
            type="text"
            name="member_of_household_dob"
            placeholder="Date of Birth (MM/DD/YYYY)"
            value={getHouseholdMemberState(
              "members-of-household",
              id,
              "member_of_household_dob"
            )}
            onChange={handleChange}
          />
          <input
            key={id + "_relation"}
            className="members-of-household"
            type="text"
            name="member_of_household_relation"
            placeholder="Relation"
            value={getHouseholdMemberState(
              "members-of-household",
              id,
              "member_of_household_relation"
            )}
            onChange={handleChange}
          />
          <br />
          <br />
        </div>
      );
    }
    return householdInputElements;
  };

  // Generate housePhotos preview img elements
  let housePhotos = Array.isArray(
    getState("images", "house_damage_file_upload")
  )
    ? getState("images", "house_damage_file_upload").map((photo, i) => (
        <img key={i} src={photo} />
      ))
    : getState("images", "house_damage_file_upload");

  // Generate receiptPhotos preview img elements
  let receiptPhotos = Array.isArray(getState("images", "receipts_file_upload"))
    ? getState("images", "receipts_file_upload").map((photo, i) => (
        <img key={i} src={photo} />
      ))
    : getState("images", "receipts_file_upload");

  // Generate agency list preview p elements
  let checkedAgencyList = state.agencies
    ? Object.keys(state.agencies)
        .filter(
          name => agencyNames.includes(name) && state.agencies[name] === true
        )
        .map(name => <p>{agencyText[agencyNames.indexOf(name)]}</p>)
    : [];

  return (
    <div id="form-container">
      <div id="start-page-container">
        <div id="general-information-container">
          <h2>General Information</h2>
          <h3>
            Please provide your current information so that we can contact you
            about your case
          </h3>
          <input
            className="general-information"
            type="text"
            name="survivor_first_name"
            placeholder="First Name"
            value={getState("general-information", "survivor_first_name")}
            onChange={handleChange}
          />
          <input
            className="general-information"
            type="text"
            name="survivor_middle_name"
            placeholder="Middle Name"
            value={getState("general-information", "survivor_middle_name")}
            onChange={handleChange}
          />
          <input
            className="general-information"
            type="text"
            name="survivor_last_name"
            placeholder="Last Name"
            value={getState("general-information", "survivor_last_name")}
            onChange={handleChange}
          />
          <input
            className="general-information"
            type="text"
            name="survivor_phone"
            placeholder="Phone Number"
            value={getState("general-information", "survivor_phone")}
            onChange={handleChange}
          />
          <input
            className="general-information"
            type="text"
            name="survivor_email"
            placeholder="Email Address"
            value={getState("general-information", "survivor_email")}
            onChange={handleChange}
          />
          <input
            className="general-information"
            type="text"
            name="survivor_current_address"
            placeholder="Current Address"
            value={getState("general-information", "survivor_current_address")}
            onChange={handleChange}
          />
          <input
            className="general-information"
            type="text"
            name="survivor_apartment_number"
            placeholder="Apartment Number"
            value={getState("general-information", "survivor_apartment_number")}
            onChange={handleChange}
          />
          <input
            className="general-information"
            type="text"
            name="survivor_city"
            placeholder="City"
            value={getState("general-information", "survivor_city")}
            onChange={handleChange}
          />
          <select
            className="general-information"
            name="survivor_state"
            value={getState("general-information", "survivor_state")}
            onChange={handleChange}
          >
            {stateOptions}
          </select>
          <input
            className="general-information"
            type="text"
            name="survivor_zip"
            placeholder="Zip Code"
            value={getState("general-information", "survivor_zip")}
            onChange={handleChange}
          />
        </div>
        <div id="members-of-household">
          <h2>Members of Household</h2>
          <h3>
            Please provide information about other members of your household
          </h3>
          {getHouseholdMemberInputs()}
          <button
            className="household_members"
            name="count"
            onClick={handleChange}
          >
            Add a household member
          </button>
        </div>
        <div id="additional-contact-container">
          <h2>Additional Contact</h2>
          <h3>Please provide a contact if we are not able to reach you</h3>
          <input
            className="additional-contact-information"
            type="text"
            name="additional_contact_first_name"
            placeholder="First Name"
            value={getState(
              "additional-contact-information",
              "additional_contact_first_name"
            )}
            onChange={handleChange}
          />
          <input
            className="additional-contact-information"
            type="text"
            name="additional_contact_middle_name"
            placeholder="Middle Name"
            value={getState(
              "additional-contact-information",
              "additional_contact_middle_name"
            )}
            onChange={handleChange}
          />
          <input
            className="additional-contact-information"
            type="text"
            name="additional_contact_last_name"
            placeholder="Last Name"
            value={getState(
              "additional-contact-information",
              "additional_contact_last_name"
            )}
            onChange={handleChange}
          />
          <input
            className="additional-contact-information"
            type="text"
            name="additional_contact_phone"
            placeholder="Phone Number"
            value={getState(
              "additional-contact-information",
              "additional_contact_phone"
            )}
            onChange={handleChange}
          />
          <input
            className="additional-contact-information"
            type="text"
            name="additional_contact_email"
            placeholder="Email Address"
            value={getState(
              "additional-contact-information",
              "additional_contact_email"
            )}
            onChange={handleChange}
          />
          <input
            className="additional-contact-information"
            type="text"
            name="additional_contact_current_address"
            placeholder="Current Address"
            value={getState(
              "additional-contact-information",
              "additional_contact_current_address"
            )}
            onChange={handleChange}
          />
          <input
            className="additional-contact-information"
            type="text"
            name="additional_contact_apartment_number"
            placeholder="Apartment Number"
            value={getState(
              "additional-contact-information",
              "additional_contact_apartment_number"
            )}
            onChange={handleChange}
          />
          <input
            className="additional-contact-information"
            type="text"
            name="additional_contact_city"
            placeholder="City"
            value={getState(
              "additional-contact-information",
              "additional_contact_city"
            )}
            onChange={handleChange}
          />
          <select
            className="additional-contact-information"
            name="additional_contact_state"
            value={getState(
              "additional-contact-information",
              "additional_contact_state"
            )}
            onChange={handleChange}
          >
            {stateOptions}
          </select>
          <input
            className="additional-contact-information"
            type="text"
            name="additional_contact_zip"
            placeholder="Zip Code"
            value={getState(
              "additional-contact-information",
              "additional_contact_zip"
            )}
            onChange={handleChange}
          />
        </div>
        <div id="cash-grant-information">
          <h2>CashGrant Information</h2>
          <h3>
            Please provide inforomation regarding the home address damaged by
            the wildfire(s)
          </h3>
          <input
            className="cash-grant-information"
            type="text"
            name="fema_number"
            placeholder="FEMA Number"
            value={getState("cash-grant-information", "fema_number")}
            onChange={handleChange}
          />
          <select
            className="cash-grant-information"
            name="fire_name"
            value={getState("cash-grant-information", "fire_name")}
            onChange={handleChange}
          >
            <option value="none" />
            <option value="camp">Camp Fire</option>
            <option value="carr">Carr Fire</option>
            <option value="tubbs">Tubbs Fire</option>
          </select>
          <input
            className="cash-grant-information"
            type="text"
            name="damaged_address"
            placeholder="Damaged House Address"
            value={getState("cash-grant-information", "damaged_address")}
            onChange={handleChange}
          />
          <input
            className="cash-grant-information"
            type="text"
            name="damaged_apartment_number"
            placeholder="Apartment Number"
            value={getState(
              "cash-grant-information",
              "damaged_apartment_number"
            )}
            onChange={handleChange}
          />
          <input
            className="cash-grant-information"
            type="text"
            name="damaged_city"
            placeholder="City"
            value={getState("cash-grant-information", "damaged_city")}
            onChange={handleChange}
          />
          <select
            className="cash-grant-information"
            name="damaged_state"
            value={getState("cash-grant-information", "damaged_state")}
            onChange={handleChange}
          >
            {stateOptions}
          </select>
          <input
            className="cash-grant-information"
            type="text"
            name="damaged_zip"
            placeholder="zip"
            value={getState("cash-grant-information", "damaged_zip")}
            onChange={handleChange}
          />
          <h3>If you rented, enter information about your landlord</h3>
          <input
            className="cash-grant-information"
            type="text"
            name="landlord_first_name"
            placeholder="First Name"
            value={getState("cash-grant-information", "landlord_first_name")}
            onChange={handleChange}
          />
          <input
            className="cash-grant-information"
            type="text"
            name="landlord_middle_name"
            placeholder="Middle Name"
            value={getState("cash-grant-information", "landlord_middle_name")}
            onChange={handleChange}
          />
          <input
            className="cash-grant-information"
            type="text"
            name="landlord_last_name"
            placeholder="Last Name"
            value={getState("cash-grant-information", "landlord_last_name")}
            onChange={handleChange}
          />
          <input
            className="cash-grant-information"
            type="text"
            name="landlord_phone"
            placeholder="###-###-####"
            value={getState("cash-grant-information", "landlord_phone")}
            onChange={handleChange}
          />
          <input
            className="cash-grant-information"
            type="text"
            name="landlord_email"
            placeholder="Email Address"
            value={getState("cash-grant-information", "landlord_email")}
            onChange={handleChange}
          />
        </div>
        <div id="notes-container">
          <h2>Notes</h2>
          <h3>
            {" "}
            Briefly describe how you were impacted by the wildfire. Was your
            primary residence destroyed or damaged? To what degree are you
            insured for any of your losses? (Homeowner's, renters, etc.)
          </h3>
          <input
            className="notes"
            type="text"
            name="notes"
            value={notes}
            onChange={handleChange}
          />
        </div>
        <div id="photo-id-container">
          <h2>PhotoID</h2>
          <input
            className="images"
            type="file"
            name="photo_id_file_upload"
            accept="image/*"
            onChange={handleChange}
            multiple
          />
        </div>
        <div id="address-proof-container">
          <h2>Address Proof</h2>
          <input
            className="images"
            type="file"
            name="address_proof_file_upload"
            accept="image/*"
            onChange={handleChange}
            multiple
          />
        </div>
        <div id="house-damage-container">
          <h2>HouseDamage</h2>
          <input
            className="images"
            type="file"
            name="house_damage_file_upload"
            accept="image/*"
            onChange={handleChange}
            multiple
          />
        </div>
        <div id="receipts-container">
          <h2>Receipts</h2>
          <input
            className="images"
            type="file"
            name="receipts_file_upload"
            accept="image/*"
            onChange={handleChange}
            multiple
          />
        </div>
        <div id="agencies-container">
          <h2>Agencies</h2>
          {agencyList}
        </div>
        <div id="signature-container">
          <h2>Signature</h2>
          <input
            className="signature"
            type="text"
            name="signature"
            onChange={handleChange}
          />
        </div>
        <button type="submit" value="preview" name="preview">
          Preview
        </button>
      </div>
      <div id="preview-container">
        <h2>General Information</h2>

        <p id="survivor_name_preview">
          Name:{" "}
          {getState("general-information", "survivor_first_name") +
            " " +
            getState("general-information", "survivor_middle_name") +
            " " +
            getState("general-information", "survivor_last_name")}
        </p>
        <p id="survivor_phone_preview">
          Phone: {getState("general-information", "survivor_phone")}
        </p>
        <p id="survivor_email_preview">
          Email: {getState("general-information", "survivor_email")}
        </p>
        <p id="survivor_address_preview">
          Address:{" "}
          {getState("general-information", "survivor_current_address") +
            ", " +
            getState("general-information", "survivor_apartment_number") +
            " " +
            getState("general-information", "survivor_city") +
            ", " +
            getState("general-information", "survivor_state") +
            " " +
            getState("general-information", "survivor_zip")}
        </p>
        <h2>Members of Household</h2>
        <p id="survivor_members_of_household_preview" />
        {getHouseholdMemberData()}

        <h2>Additional Contact</h2>
        <p id="additional_contact_name_preview">
          Name:{" "}
          {getState(
            "additional-contact-information",
            "additional_contact_first_name"
          ) +
            " " +
            getState(
              "additional-contact-information",
              "additional_contact_middle_name"
            ) +
            " " +
            getState(
              "additional-contact-information",
              "additional_contact_last_name"
            )}
        </p>
        <p id="additional_contact_phone_preview">
          Phone:{" "}
          {getState(
            "additional-contact-information",
            "additional_contact_phone"
          )}
        </p>
        <p id="additional_contact_email_preview">
          Email:{" "}
          {getState(
            "additional-contact-information",
            "additional_contact_email"
          )}
        </p>
        <p id="additional_contact_address_preview">
          Address :
          {getState(
            "additional-contact-information",
            "additional_contact_current_address"
          ) +
            ", " +
            getState(
              "additional-contact-information",
              "additional_contact_apartment_number"
            ) +
            " " +
            getState(
              "additional-contact-information",
              "additional_contact_city"
            ) +
            ", " +
            getState(
              "additional-contact-information",
              "additional_contact_state"
            ) +
            " " +
            getState(
              "additional-contact-information",
              "additional_contact_zip"
            )}
        </p>
        <h2>Information for Cash Grant</h2>
        <p id="fema_number_preview">
          FEMA Number: {getState("cash-grant-information", "fema_number")}
        </p>
        <p id="fire_name_preview">
          Fire Name: {getState("cash-grant-information", "fire_name")}
        </p>
        <p id="damaged_address_preview">
          Damaged House Address:{" "}
          {getState("cash-grant-information", "damaged_address") +
            ", " +
            getState("cash-grant-information", "damaged_apartment_number") +
            " " +
            getState("cash-grant-information", "damaged_city") +
            ", " +
            getState("cash-grant-information", "damaged_state") +
            " " +
            getState("cash-grant-information", "damaged_zip")}
        </p>
        <p id="landlord_name_preview">
          Landlord Name:{" "}
          {getState("cash-grant-information", "landlord_first_name") +
            " " +
            getState("cash-grant-information", "landlord_middle_name") +
            " " +
            getState("cash-grant-information", "landlord_last_name")}
        </p>
        <p id="landlord_phone_preview">
          Landlord Phone: {getState("cash-grant-information", "landlord_phone")}
        </p>
        <p id="landlord_email_preview">
          Landlord Email: {getState("cash-grant-information", "landlord_email")}
        </p>
        <h2>Notes</h2>
        <p id="notes_preview">{notes}</p>

        <h2>Photo ID</h2>
        <img
          id="photo_id_preview"
          src={getState("images", "photo_id_file_upload")[0]}
        />

        <h2>Address Proof</h2>
        <img
          id="address_proof_preview"
          src={getState("images", "address_proof_file_upload")[0]}
        />

        <h2>Damaged House Photos</h2>

        {housePhotos}

        <h2>Photos of your Receipts</h2>

        {receiptPhotos}

        <h2>Other Agencies You Work With</h2>

        {checkedAgencyList}

        <button type="submit" value="submit" name="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default WildfireSurvivorApp;
