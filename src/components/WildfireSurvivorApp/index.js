import React, { useState } from "react";
import SCHEMA from "../../constants/schema";
import FIELDS from "../../constants/component_fields";

const WildfireSurvivorApp = () => {
  const initialState = { "start_page": true, "preview_page": false, "confirmation_page": false };

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
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
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
    let newState = { ...state, "start_page": true, "preview_page": false, "confirmation_page": false }
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  const goToPreviewPage = e => {
    let newState = { ...state, "start_page": false, "preview_page": true, "confirmation_page": false }
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  const goToConfirmationPage = e => {
    let newState = { ...state, "start_page": false, "preview_page": false, "confirmation_page": true }
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  return (
    <div id="header">
      <section>
        <div className="container">
          <div className="row pt-5 pb-4">
            <div className="col-md-6">
              <img src={"/images/united-logo.svg"} style={{width: '126px', height: '60px'}} alt="UN-Logo" />
            </div>
            <div className="col-md-6 text-right">
              <h4 className="font-weight-bold text-united-blue">
                United Way of <br /> Northern California
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 p-3 bg-united-orange" />
          </div>
          <div className="row">
            <div className="col-md-12 pt-4 text-center">
              <h4 className="font-weight-bold text-united-blue">
                Wildfire Victim Application
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <svg viewBox="0 0 800 100" id="header-svg" className="d-block m-auto">
                <text x="32" y="25" >Start</text>
                {state["start_page"] ? <circle cx="50" cy="50" r="10" fill="orange" onClick={goToStartPage} /> : <circle cx="50" cy="50" r="10" fill="black" onClick={goToStartPage} />}
                <text x="173" y="25">Preview</text>
                {state["preview_page"] ? <circle cx="200" cy="50" r="10" fill="orange" onClick={goToPreviewPage} /> : <circle cx="200" cy="50" r="10" fill="black" onClick={goToPreviewPage} />}
                <text x="308" y="25">Confirmation</text>
                {state["confirmation_page"] ? <circle cx="350" cy="50" r="10" fill="orange" onClick={goToConfirmationPage} /> : <circle cx="350" cy="50" r="10" fill="black" onClick={goToConfirmationPage} />}
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
const StartPage = ({ state, setState, handleChange }) => {
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
    let newState = { ...state, "start_page": false, "preview_page": true }
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  return (
    <div id="start-page-container">

      <section id="general-information-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">General Information</h4>
              <p>
                Please provide your current information so that we can contact you about your case.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* General Information */}
              {/* {general_information_elements} */}

              {/* Start Static Form Elements*/}
              <form>
                {/* Name */}
                <div class="row pt-1">
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="First Name" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Middle Name" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Last Name" />
                  </div>
                </div>

                {/* Phone and Email */}
                <div className="row pt-3">
                  <div class="col-md-6">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Phone Number" />
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Email Address" />
                  </div>
                </div>

                {/* Current Address */}
                <div className="row pt-3">
                  <div class="col-md-8">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Current Address" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Apt." />
                  </div>
                </div>

                {/* City, State, Zip */}
                <div className="row pt-3">
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="City" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="State" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Zip Code" />
                  </div>
                </div>
              </form>
              {/* End Static Form Elements */}

            </div>
          </div>
        </div>
      </section>

      <section id="members-of-household-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Members of Household</h4>
              <p>
                Please provide information about members of your household.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Member of Household */}
              {/* {members_of_household_elements} */}

              {/* Start Static Form Elements*/}
              <form>
                {/* Name */}
                <div class="row pt-1">
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="First Name" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Middle Name" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Last Name" />
                  </div>
                </div>

                {/* Date of Birth */}
                <div class="row pt-3">
                  <div class="col-md-6">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Date of Birth" />
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Relation" />
                  </div>
                </div>
              </form>

              <br />
              <button class="btn btn-primary" name="add_household_member" onClick={addHouseholdMember}>
                Add Another Member
              </button>

            </div>
          </div>
        </div>
      </section>

      <section id="additional-contact-information-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Additional Contact</h4>
              <p>Please provide a contact if we are not able to reach you.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Additional Contact Info */}
              {/* {additional_contact_information_elements} */}

              {/* Start Static Form Elements */}
              <form>
                {/* Name */}
                <div class="row pt-1">
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="First Name" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Middle Name" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Last Name" />
                  </div>
                </div>

                {/* Phone and Email */}
                <div className="row pt-3">
                  <div class="col-md-6">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Phone Number" />
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Email Address" />
                  </div>
                </div>

                {/* Current Address */}
                <div className="row pt-3">
                  <div class="col-md-8">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Current Address" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Apt." />
                  </div>
                </div>

                {/* City, State, Zip */}
                <div className="row pt-3">
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="City" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="State" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Zip Code" />
                  </div>
                </div>
              </form>
              {/* End Static Form Elements */}

            </div>
          </div>

          <div className="row pt-3">
            <div className="col-md-12">
              <p>
                Can we contact your additional contact anytime and send updates on this case?
              </p>
              <p>
                Yes – contact anytime <br />
                No – contact only if there is an emergency
              </p>
            </div>
          </div>

        </div>
      </section>

      <section id="cash-grant-information-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Cash Grant Information</h4>
              <p>
                Please provide the information about the address where damage
                occurred.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Cash Grant Info */}
              {/* {cash_grant_information_elements} */}

              {/* Start Static Form Elements */}
              <form>
                {/* Name */}
                <div class="row pt-1">
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="FEMA Number" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="CAMP Number" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Fire Name" />
                  </div>
                </div>

                {/* Address */}
                <div class="row pt-3">
                  <div class="col-md-8">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Address where the damage occurred" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Apt." />
                  </div>
                </div>

                {/* City, State, Zip */}
                <div class="row pt-3">
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="City" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="State" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Zip Code" />
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>

      <section id="landlord-information-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <p>If you rented, enter information about your landlord</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Landlord Info */}
              {/* {landlord_information_elements} */}
              
              <form>
                {/* Name */}
                <div class="row pt-1">
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="First Name" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Middle Name" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Last Name" />
                  </div>
                </div>

                {/* Phone, Email */}
                <div class="row pt-3">
                  <div class="col-md-6">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Phone Number" />
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Email Address" />
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>


      <section id="notes-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Notes</h4>
              <p>
                Briefly describe how you were impacted by the wildfire. 
                Was your primary residence destroyed or significantly damaged by the fire? To
                what degree, if any, are you insured for any of your losses?
                (homeowners, renters, etc.)
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Notes */}
              {/* {notes_elements} */}

              <form>
                {/* Notes */}
                <div class="row pt-1">
                  <div class="col-md-12">
                    <textarea class="form-control w-100" rows="8"></textarea>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>

      <section id="photo-id-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Photo of ID</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

            {/* Spacer */}
            <div className="bg-light p-5 mb-4" style={{ minHeight: 300 + "px" }}></div>

            </div>
            <div className="col-md-12 text-center">

              {/* Photo ID */}
              {photo_id_elements}

            </div>
          </div>
        </div>
      </section>

      <section id="address-proof-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Photo of Address Proof</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Spacer */}
              <div className="bg-light p-5 mb-4" style={{ minHeight: 300 + "px" }}></div>

            </div>
            <div className="col-md-12 text-center">

              {/* Address Proof */}
              {address_proof_elements}

            </div>
          </div>
        </div>
      </section>

      <section id="damaged-house-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Photos of Your Damaged House</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

            {/* Spacer */}
            <div className="bg-light p-5 mb-4" style={{ minHeight: 300 + "px" }}></div>

            </div>
            <div className="col-md-12 text-center">

              {/* House Damage */}
              {house_damage_elements}

            </div>
          </div>
        </div>
      </section>

      <section id="receipts-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Photos of Your Receipts</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Spacer */}
              <div className="bg-light p-5 mb-4" style={{ minHeight: 300 + "px" }}></div>

            </div>
            <div className="col-md-12 text-center">

              {/* Receipts */}
              {receipts_elements}

            </div>
          </div>
        </div>
      </section>

      <section id="consent-release-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Coordinated Assistance Network Consent and Release</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Spacer */}
              <div className="bg-light p-5 mb-4" style={{ minHeight: 300 + "px" }}></div>

            </div>
            <div className="col-md-12 text-center">

              {/* Consent Release */}
              {can_content_release_elements}

            </div>
          </div>
        </div>
      </section>

      <section id="agencies-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Other Agencies You Work With</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Agencies */}
              {/* {agencies_elements} */}

              {/* Start Static Form Elements */}
              <form>
                {/* Checkbox Input Elements */}

                {/* Render 4 columns, with a list 5 checkboxes each. */}
                <div class="row pt-1">
                  {/* Iterate 4 times */}
                  {
                    [...Array(4)].map((e, i) => (
                        <div class="col-md-3">

                        {/* Iterate 5 times */}
                        {
                          [...Array(5)].map((e, i) => (
                            
                            <div class="form-check pb-3">
                              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                              <label class="form-check-label" for="defaultCheck1">
                                Agency Name
                              </label>
                            </div> 
                          ))
                        }
                        </div>
                    ))
                  }
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>

      <section id="case-managers-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Case Managers You Work With</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Case Manager Info */}
              {/* {case_managers_information_elements} */}

              <form>
                {/* Dropdown */}
                <div class="row pt-1 pb-1">
                  <div class="col-md-12">
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        List of Case Managers
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>                                      
                </div>

                {/* Name, ID, and Email */}
                <div class="row pt-1">
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="First Name" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Middle Name" />
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Last Name" />
                  </div>
                </div>
                <div class="row pt-1">
                  <div class="col-md-6">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="###-###-####" />
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="Email Address" />
                  </div>
                </div>
              </form>

              <br />
              <button name="add_case_manager" class="btn btn-primary" onClick={addCaseManager}>
                Add Case Manager
              </button>

            </div>
          </div>
        </div>
      </section>

      <section id="sba-loan-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Did You Apply For an SBA Loan?</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* SBA Loan Info */}
              {sba_loan_elements}

            </div>
          </div>
        </div>
      </section>

      <section id="signature-container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Electronic Signature</h4>
              <p>
                By entering my name, I understand this constitutes a legal signature
                confirming that I acknowledge and agree that all information entered
                is correct and truthful.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              {/* Signature */}
              {/* {signature_elements} */}

              <form>
                {/* Name */}
                <div class="row pt-1">
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="" aria-describedby="" placeholder="" />
                  </div>
                </div>
              </form>   

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pb-5 mb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-primary" type="submit" onClick={handlePreview}>Preview</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const PreviewPage = ({ state, setState }) => {
  /**
   * handle submit button click event
   */
  const handleSubmit = (e) => {
    let newState = { ...state, "preview_page": false, "confirmation_page": true }
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  const goToStartPage = e => {
    let newState = { ...state, "start_page": true, "preview_page": false, "confirmation_page": false }
    localStorage.setItem("formData", JSON.stringify(newState));
    setState(newState);
  }

  return (
    <div id="preview-container">

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h4 class="font-weight-bold">Preview</h4>
              <p class="pt-3">
                This is a preview of the information you will be providing United Way of Northern California.
              </p>
              <p>
                Please ensure the information is correct before submitting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">General Information</h4>
              <p id="survivor-name-preview">
                Name:{" " + state["survivor_first_name"] + " " + state["survivor_middle_name"] + " " + state["survivor_last_name"]}
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
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Members of Household</h4>
              <p id="members_of_household_preview"></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Additional Contact</h4>
              <p id="additional_contact_preview">
                <p id="additional_contact_name_preview">
                  Name:{" " + state["additional_contact_first_name"] + " " + state["additional_contact_middle_name"] + " " + state["additional_contact_last_name"]}
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
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Cash Grant Information</h4>
              <p id="fema_preview">
                FEMA #: {" " + state["fema_number"]}
              </p>
              <p id="fire_name_preview">
                Fire Name: {" " + state["fire_name"]}
              </p>
              <p id="fire_name_preview">
                Damaged House Address: {" " + state["damaged_address1"] + " " + state["damaged_address2"] + " " + state["damaged_city"] + ", " + state["damaged_state"] + " " + state["damaged_zip"]}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Landlord Information</h4>
              <p id="landlord_name_preview">
                Name: {" " + state["landlord_first_name"] + " " + state["landlord_middle_name"] + " " + state["landlord_last_name"]}
              </p>
              <p id="landlord_phone_preview">
                Phone: {" " + state["landlord_phone"]}
              </p>
              <p id="landlord_email_preview">
                Email: {" " + state["landlord_email"]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Notes</h4>
              <p id="notes_preview">
                Notes: {" " + state["notes"]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Photo ID</h4>
              <p id="photo_id_preview"></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Address Proof</h4>
              <p id="address_proof_preview"></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Damaged House Photos</h4>
              <p id="damaged_house_preview"></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Receipts</h4>
              <p id="receipts_preview"></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">CAN Consent and Release Form</h4>
              <p id="can_conset_release_preview"></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Agencies You Work With</h4>
              <p id="agencies_preview"></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Case Managers</h4>
              <p id="case_managers_preview"></p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">SBA Loan</h4>
              <p id="sba_loan_preview"></p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 class="font-weight-bold pb-2">Electronic Signature</h4>
              <p id="signature_preview">
                {state["signature"]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pb-5 mb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <button class="btn btn-secondary" type="submit" onClick={goToStartPage}>Back</button>
              <button class="btn btn-primary"  type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

const ConfirmationPage = () => {
  return (
    <div id="confirmation-container">

      <section>
        <div className="container pb-5 mb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h4 class="font-weight-bold">Confirmation Page</h4>
              <p class="pt-5">
                Your Application ID number <strong>CAMP002030</strong> was submitted.
              </p>
              <p>
                All the information was sent to your email at a.kepner@example.com.
              </p>
              <p>
                To view or modify your application, refer to this link: <a href="https://unitedway.com/example_application/example">https://unitedway.com/example_application/example</a>.
              </p>
              <p>
                If you have any questions, please contact us.
              </p>
              <p>
                United Way of Northern California <br/>
                2280 Benton Drive, Building B  <br/>
                Redding, CA 96003
              </p>
              <p>
                Phone: (530) 241-7521 <br/>
                Fax: (530) 241-2053
              </p>
              <p class="pt-5">
                <button class="btn btn-primary">Start a New Application</button>
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
export default WildfireSurvivorApp;