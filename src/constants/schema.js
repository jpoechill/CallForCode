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
  relation: "parent",
  notes: ""
};

const test_values = {
  first_name: "First Name",
  middle_name: "Middle Name",
  last_name: "Last Name",
  phone: "555-555-5555",
  email: "email@address.com",
  city: "City",
  state: "CA",
  address1: "123 Street",
  address2: "Apt 123",
  zip: "94112",
  dob: "01/01/2019",
  relation: "parent",
  notes: "Test Notes",
  fema_number: "000000000",
  fire_name: "tubbs",
  checked: true
}

const SCHEMA = {
  survivor_first_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "First Name",
    test_value: test_values.first_name,
    validation: () => {}
  },
  survivor_middle_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Middle Name",
    test_value: test_values.middle_name,
    validation: () => {}
  }, 
  survivor_last_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Last Name",
    test_value: test_values.last_name,
    validation: () => {}
  },
  survivor_phone: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "###-###-####",
    test_value: test_values.phone,
    validation: () => {}
  },
  survivor_email: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "email@address.com",
    test_value: test_values.email,
    validation: () => {}
  },
  survivor_address1: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Address 1",
    test_value: test_values.address1,
    validation: () => {}
  },
  survivor_address2: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Address 2",
    test_value: test_values.address2,
    validation: () => {}
  },
  survivor_city: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "City",
    test_value: test_values.city,
    validation: () => {}
  },
  survivor_state: {
    input: "select",
    options: stateOptions,
    type: "string",
    initial_value: "",
    placeholder: null,
    test_value: test_values.state,
    validation: () => {}
  },
  survivor_zip: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "#####",
    test_value: test_values.zip,
    validation: () => {}
  },
  members_of_household_count: {
    input: null,
    type: "number",
    initial_value: 1,
    validation: () => {}
  },
  household_member_0_first_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "First Name",
    test_value: test_values.first_name,
    validation: () => {}
  },
  household_member_0_middle_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Middle Name",
    test_value: test_values.middle_name,
    validation: () => {}
  },
  household_member_0_last_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "Last Name",
    test_value: test_values.last_name,
    validation: () => {}
  },
  household_member_0_dob: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: "MM/DD/YYYY",
    test_value: test_values.dob,
    validation: () => {}
  },
  household_member_0_relation: {
    input: "select",
    type: "string",
    options: relationOptions,
    initial_value: "",
    test_value: test_values.relation,
    validation: () => {}
  },
  additional_contact_first_name: {
    input: "text",
    placeholder: "First Name",
    type: "string",
    initial_value: "",
    test_value: test_values.first_name,
    validation: () => {}
  },
  additional_contact_middle_name: {
    input: "text",
    placeholder: "Middle Name",
    type: "string",
    initial_value: "",
    test_value: test_values.middle_name,
    validation: () => {}
  },
  additional_contact_last_name: {
    input: "text",
    placeholder: "Last Name",
    type: "string",
    initial_value: "",
    test_value: test_values.last_name,
    validation: () => {}
  },
  additional_contact_phone: {
    input: "text",
    placeholder: "###-###-####",
    type: "string",
    initial_value: "",
    test_value: test_values.phone,
    validation: () => {}
  },
  additional_contact_email: {
    input: "text",
    placeholder: "email@address.com",
    type: "string",
    initial_value: "",
    test_value: test_values.email,
    validation: () => {}
  },
  additional_contact_address1: {
    input: "text",
    placeholder: "Address 1",
    type: "string",
    initial_value: "",
    test_value: test_values.address1,
    validation: () => {}
  },
  additional_contact_address2: {
    input: "text",
    placeholder: "Address 2",
    type: "string",
    initial_value: "",
    test_value: test_values.address2,
    validation: () => {}
  },
  additional_contact_city: {
    input: "text",
    placeholder: "City",
    type: "string",
    initial_value: "",
    test_value: test_values.city,
    validation: () => {}
  },
  additional_contact_state: {
    input: "select",
    options: stateOptions,
    type: "string",
    initial_value: "",
    test_value: test_values.state,
    validation: () => {}
  },
  additional_contact_zip: {
    input: "text",
    placeholder: "#####",
    type: "string",
    initial_value: "",
    test_value: test_values.zip,
    validation: () => {}
  },
  fema_number: {
    type: "string",
    placeholder: "#########",
    input: "text",
    initial_value: "",
    test_value: test_values.fema_number,
    validation: () => {}
  },
  fire_name: {
    type: "string",
    input: "select",
    options: fireNameOptions,
    initial_value: "",
    test_value: test_values.fire_name,
    validation: () => {}
  },
  damaged_address1: {
    type: "string",
    placeholder: "Address 1",
    input: "text",
    initial_value: "",
    test_value: test_values.address1,
    validation: () => {}
  },
  damaged_address2: {
    type: "string",
    placeholder: "Address 2",
    input: "text",
    initial_value: "",
    test_value: test_values.address2,
    validation: () => {}
  },
  damaged_city: {
    type: "string",
    placeholder: "City",
    input: "text",
    initial_value: "",
    test_value: test_values.city,
    validation: () => {}
  },
  damaged_state: {
    type: "string",
    options: stateOptions,
    input: "select",
    initial_value: "",
    test_value: test_values.state,
    validation: () => {}
  },
  damaged_zip: {
    type: "string",
    placeholder: "#####",
    input: "text",
    initial_value: "",
    test_value: test_values.zip,
    validation: () => {}
  },
  landlord_first_name: {
    input: "text",
    placeholder: "First Name",
    type: "string",
    initial_value: "",
    test_value: test_values.first_name,
    validation: () => {}
  },
  landlord_middle_name: {
    input: "text",
    placeholder: "Middle Name",
    type: "string",
    initial_value: "",
    test_value: test_values.middle_name,
    validation: () => {}
  },
  landlord_last_name: {
    input: "text",
    placeholder: "Last Name",
    type: "string",
    initial_value: "",
    test_value: test_values.last_name,
    validation: () => {}
  },
  landlord_phone: {
    type: "string",
    placeholder: "###-###-####",
    input: "text",
    initial_value: "",
    test_value: test_values.phone,
    validation: () => {}
  },
  landlord_email: {
    type: "string",
    input: "text",
    initial_value: "",
    test_value: test_values.email,
    validation: () => {}
  },
  notes: {
    type: "string",
    input: "text",
    initial_value: "",
    test_value: test_values.notes,
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
    label: "Alliance for Workplace Development",
    test_value: test_values.checked,
    validation: () => {}
  },
  butte_211: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Butte 211",
    label: "Butte 211",
    test_value: test_values.checked,
    validation: () => {}
  },
  caring_choices: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Caring Choices",
    label: "Caring Choices",
    test_value: test_values.checked,
    validation: () => {}
  },
  chip: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "CHIP",
    label: "CHIP",
    test_value: test_values.checked,
    validation: () => {}
  },
  dess: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "DESS",
    label: "DESS",
    test_value: test_values.checked,
    validation: () => {}
  },
  fema: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "FEMA",
    label: "FEMA",
    test_value: test_values.checked,
    validation: () => {}
  },
  habitat_for_humanity: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Habitat for Humanity",
    label: "Habitat for Humanity",
    test_value: test_values.checked,
    validation: () => {}
  },
  jesus_center: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Jesus Center",
    label: "Jesus Center",
    validation: () => {}
  },
  lsnc: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "LSNC",
    label: "LSNC",
    test_value: test_values.checked,
    validation: () => {}
  },
  ltrg_unmet_needs: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "LTRG Unmet Needs",
    label: "LTRG Unmet Needs",
    test_value: test_values.checked,
    validation: () => {}
  },
  nvcss: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "NVCSS",
    label: "NVCSS",
    test_value: test_values.checked,
    validation: () => {}
  },
  policy_holders_united: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Policy Holders United",
    label: "Policy Holders United",
    test_value: test_values.checked,
    validation: () => {}
  },
  red_cross: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Red Cross",
    label: "Red Cross",
    test_value: test_values.checked,
    validation: () => {}
  },
  salvation_army: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Salvation Army",
    label: "Salvation Army",
    test_value: test_values.checked,
    validation: () => {}
  },
  st_vincent_de_paul: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "St. Vincent de Paul",
    label: "St. Vincent de Paul",
    test_value: test_values.checked,
    validation: () => {}
  },
  torres_shelter: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Torres Shelter",
    label: "Torres Shelter",
    test_value: test_values.checked,
    validation: () => {}
  },
  tzu_chi: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Tzu Chi",
    label: "Tzu Chi",
    test_value: test_values.checked,
    validation: () => {}
  },
  vet_center: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Vet Center",
    label: "Vet Center",
    test_value: test_values.checked,
    validation: () => {}
  },
  youth_for_change: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Youth for Change",
    label: "Youth for Change",
    test_value: test_values.checked,
    validation: () => {}
  },
  case_manager_0_referring_agency: {
    input: "select",
    type: "string",
    options: agencyOptions,
    test_value: "youth_for_change",
    validation: () => {}
  },
  case_manager_count: {
    input: null,
    type: "number",
    initial_value: 1,
    validation: () => {}
  },
  case_manager_0_first_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: placeholders["first_name"],
    test_value: test_values.first_name,
    validation: () => {}
  },
  case_manager_0_middle_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: placeholders["middle_name"],
    test_value: test_values.middle_name,
    validation: () => {}
  },
  case_manager_0_last_name: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: placeholders["last_name"],
    test_value: test_values.last_name,
    validation: () => {}
  },
  case_manager_0_phone: {
    input: "text",
    type: "string",
    initial_value: "",
    placeholder: placeholders["phone"],
    test_value: test_values.phone
  },
  case_manager_0_email: {
    initial_value: "",
    placeholder: placeholders["email"],
    test_value: test_values.email
  },
  sba_loan_yes: {
    input: "radio",
    name: "sba_loan",
    label: "Yes",
    type: "boolean",
    placeholder: "Yes",
    test_value: test_values.checked,
    validation: () => {}
  },
  sba_loan_no: {
    input: "radio",
    name: "sba_loan",
    label: "No",
    type: "boolean",
    placeholder: "No",
    test_value: test_values.checked,
    validation: () => {}
  },
  signature: {
    input: "text",
    type: "string",
    test_value: "signature",
    validation: () => {}
  }
};

export default SCHEMA;
