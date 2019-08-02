import React from "react";
import states from "./states";
import fire_names from "./fire_names";
import relations from "./relations";
import agencies from "./agencies";

// Generate Array of US states as options
const stateOptions = states.map(state => (
  <option key={state.abbreviation} value={state.abbreviation}>
    {state.name}
  </option>
));

// Generate Array of fire names as options
const fireNameOptions = fire_names.map(fire_name => (
  <option key={fire_name.value} value={fire_name.value}>
    {fire_name.name}
  </option>
));

// Generate Array of relationships as options
const relationOptions = relations.map(relation => (
  <option key={relation.value} value={relation.value}>
    {relation.name}
  </option>
));

// Generate Array of agencies as options
const agencyOptions = agencies.map(agency => (
  <option key={agency.name} value={agency.name}>
    {agency.text}
  </option>
));

const placeholders = {
  first_name: "First Name",
  middle_name: "Middle Name",
  last_name: "Last Name",
  phone: "###-###-####",
  email: "email@address.com",
  city: "City",
  address1: "Address 1",
  address2: "Address 2",
  zip: "#####",
  dob: "MM/DD/YYYY",
  notes: ""
};

const SCHEMA = {
  survivor_first_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "First Name",
    validation: () => {}
  },
  survivor_middle_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Middle Name",
    validation: () => {}
  },
  survivor_last_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Last Name",
    validation: () => {}
  },
  survivor_phone: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "###-###-####",
    validation: () => {}
  },
  survivor_email: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "email@address.com",
    validation: () => {}
  },
  survivor_address1: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Address 1",
    validation: () => {}
  },
  survivor_address2: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Address 2",
    validation: () => {}
  },
  survivor_city: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "City",
    validation: () => {}
  },
  survivor_state: {
    input: "select",
    options: stateOptions,
    type: "string",
    initial_value: "",
    placeholder: null,
    validation: () => {}
  },
  survivor_zip: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "#####",
    validation: () => {}
  },
  household_member_0_first_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "First Name",
    validation: () => {}
  },
  household_member_0_middle_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Middle Name",
    validation: () => {}
  },
  household_member_0_last_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Last Name",
    validation: () => {}
  },
  household_member_0_dob: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "MM/DD/YYYY",
    validation: () => {}
  },
  household_member_0_relation: {
    input: "select",
    type: "string",
    options: relationOptions,
    initial_value: "",
    validation: () => {}
  },
  additional_contact_first_name: {
    input: "text",
    placeholder: "First Name",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_middle_name: {
    input: "text",
    placeholder: "Middle Name",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_last_name: {
    input: "text",
    placeholder: "Last Name",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_phone: {
    input: "text",
    placeholder: "###-###-####",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_email: {
    input: "text",
    placeholder: "email@address.com",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_address1: {
    input: "text",
    placeholder: "Address 1",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_address2: {
    input: "text",
    placeholder: "Address 2",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_city: {
    input: "text",
    placeholder: "City",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_state: {
    input: "select",
    options: stateOptions,
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_zip: {
    input: "text",
    placeholder: "#####",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  fema_number: {
    type: "string",
    placeholder: "#########",
    input: "text",
    initial_value: "",
    validation: () => {}
  },
  fire_name: {
    type: "string",
    input: "select",
    options: fireNameOptions,
    initial_value: "",
    validation: () => {}
  },
  damaged_address1: {
    type: "string",
    placeholder: "Address 1",
    input: "text",
    initial_value: "",
    validation: () => {}
  },
  damaged_address2: {
    type: "string",
    placeholder: "Address 2",
    input: "text",
    initial_value: "",
    validation: () => {}
  },
  damaged_city: {
    type: "string",
    placeholder: "City",
    input: "text",
    initial_value: "",
    validation: () => {}
  },
  damaged_state: {
    type: "string",
    options: stateOptions,
    input: "select",
    initial_value: "",
    validation: () => {}
  },
  damaged_zip: {
    type: "string",
    placeholder: "#####",
    input: "text",
    initial_value: "",
    validation: () => {}
  },
  landlord_first_name: {
    input: "text",
    placeholder: "First Name",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  landlord_middle_name: {
    input: "text",
    placeholder: "Middle Name",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  landlord_last_name: {
    input: "text",
    placeholder: "Last Name",
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  landlord_phone: {
    type: "string",
    placeholder: "###-###-####",
    input: "text",
    initial_value: "",
    validation: () => {}
  },
  landlord_email: {
    type: "string",
    input: "text",
    initial_value: "",
    validation: () => {}
  },
  notes: {
    type: "string",
    input: "text",
    initial_value: "",
    validation: () => {}
  },
  photo_id: {
    type: "Array",
    input: "file",
    initial_value: [],
    validation: () => {}
  },
  address_proof: {
    type: "Array",
    input: "file",
    initial_value: [],
    validation: () => {}
  },
  house_damage: {
    type: "Array",
    input: "file",
    initial_value: [],
    validation: () => {}
  },
  receipts: {
    type: "Array",
    input: "file",
    initial_value: [],
    validation: () => {}
  },
  can_content_release: {
    type: "Array",
    input: "file",
    initial_value: [],
    validation: () => {}
  },
  alliance_for_workplace_development: {
    input: "checkbox",
    type: "boolean",
    initial_value: false,
    name: "Alliance for Workplace Development",
    validation: () => {}
  },
  butte_211: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Butte 211",
    validation: () => {}
  },
  caring_choices: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Caring Choices",
    validation: () => {}
  },
  chip: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "CHIP",
    validation: () => {}
  },
  dess: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "DESS",
    validation: () => {}
  },
  fema: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "FEMA",
    validation: () => {}
  },
  habitat_for_humanity: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Habitat for Humanity",
    validation: () => {}
  },
  jesus_center: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Jesus Center",
    validation: () => {}
  },
  lsnc: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "LSNC",
    validation: () => {}
  },
  ltrg_unmet_needs: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "LTRG Unmet Needs",
    validation: () => {}
  },
  nvcss: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "NVCSS",
    validation: () => {}
  },
  policy_holders_united: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Policy Holders United",
    validation: () => {}
  },
  red_cross: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Red Cross",
    validation: () => {}
  },
  salvation_army: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Salvation Army",
    validation: () => {}
  },
  st_vincent_de_paul: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "St. Vincent de Paul",
    validation: () => {}
  },
  torres_shelter: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Torres Shelter",
    validation: () => {}
  },
  tzu_chi: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Tzu Chi",
    validation: () => {}
  },
  vet_center: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Vet Center",
    validation: () => {}
  },
  youth_for_change: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Youth for Change",
    validation: () => {}
  },
  referring_agency: {
    input: "select",
    type: "string",
    options: agencyOptions,
    validation: () => {}
  },
  case_manager_first_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: placeholders["first_name"],
    validation: () => {}
  },
  case_manager_middle_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: placeholders["middle_name"],
    validation: () => {}
  },
  case_manager_last_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: placeholders["last_name"],
    validation: () => {}
  },
  case_manager_phone: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: placeholders["phone"]
  },
  case_manager_email: {
    initial_value: "",
    placeholder: placeholders["email"]
  },
  sba_loan_yes: {
    input: "radio",
    name: "sba_loan",
    type: "boolean",
    placeholder: "Yes",
    validation: () => {}
  },
  sba_loan_no: {
    input: "radio",
    name: "sba_loan",
    type: "boolean",
    placeholder: "No",
    validation: () => {}
  },
  signature: {
    input: "text",
    type: "string",
    validation: () => {}
  },
  members_of_household_count: {
    input: null,
    type: "number",
    initial_value: 1,
    validation: () => {}
  }
};

export default SCHEMA;
