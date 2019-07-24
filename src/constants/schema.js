const SCHEMA = {
  survivor_first_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  survivor_middle_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  survivor_last_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  survivor_phone: { type: "string", initial_value: "", validation: () => {} },
  survivor_email: { type: "string", initial_value: "", validation: () => {} },
  survivor_address1: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  survivor_address2: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  survivor_city: { type: "string", initial_value: "", validation: () => {} },
  survivor_state: { type: "string", initial_value: "", validation: () => {} },
  survivor_zip: { type: "string", initial_value: "", validation: () => {} },
  household_member_0_first_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  household_member_0_middle_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  household_member_0_last_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  household_member_0_dob: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  household_member_0_relation: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_first_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_middle_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_last_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_phone: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_email: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_address1: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_address2: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_city: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_state: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  additional_contact_zip: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  fema_number: { type: "string", initial_value: "", validation: () => {} },
  fire_name: { type: "string", initial_value: "", validation: () => {} },
  damaged_address1: { type: "string", initial_value: "", validation: () => {} },
  damaged_address2: { type: "string", initial_value: "", validation: () => {} },
  damaged_city: { type: "string", initial_value: "", validation: () => {} },
  damaged_state: { type: "string", initial_value: "", validation: () => {} },
  damaged_zip: { type: "string", initial_value: "", validation: () => {} },
  landlord_first_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  landlord_middle_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  landlord_last_name: {
    type: "string",
    initial_value: "",
    validation: () => {}
  },
  landlord_phone: { type: "string", initial_value: "", validation: () => {} },
  landlord_email: { type: "string", initial_value: "", validation: () => {} },
  notes: { type: "string", initial_value: "", validation: () => {} },
  photo_id: { type: "Array", initial_value: [], validation: () => {} },
  address_proof: { type: "Array", initial_value: [], validation: () => {} },
  house_damage: { type: "Array", initial_value: [], validation: () => {} },
  receipts: { type: "Array", initial_value: [], validation: () => {} },
  alliance_for_workplace_development: {
    type: "boolean",
    initial_value: false,
    validation: () => {}
  },
  butte_211: { type: "boolean", initial_value: "", validation: () => {} },
  caring_choices: { type: "boolean", initial_value: "", validation: () => {} },
  chip: { type: "boolean", initial_value: "", validation: () => {} },
  dess: { type: "boolean", initial_value: "", validation: () => {} },
  fema: { type: "boolean", initial_value: "", validation: () => {} },
  habitat_for_humanity: {
    type: "boolean",
    initial_value: "",
    validation: () => {}
  },
  jesus_center: { type: "boolean", initial_value: "", validation: () => {} },
  lsnc: { type: "boolean", initial_value: "", validation: () => {} },
  ltrg_unmet_needs: {
    type: "boolean",
    initial_value: "",
    validation: () => {}
  },
  nvcss: { type: "boolean", initial_value: "", validation: () => {} },
  policy_holders_united: {
    type: "boolean",
    initial_value: "",
    validation: () => {}
  },
  red_cross: { type: "boolean", initial_value: "", validation: () => {} },
  salvation_army: { type: "boolean", initial_value: "", validation: () => {} },
  st_vincent_de_paul: {
    type: "boolean",
    initial_value: "",
    validation: () => {}
  },
  torres_shelter: { type: "boolean", initial_value: "", validation: () => {} },
  tzu_chi: { type: "boolean", initial_value: "", validation: () => {} },
  vet_center: { type: "boolean", initial_value: "", validation: () => {} },
  youth_for_change: {
    type: "boolean",
    initial_value: "",
    validation: () => {}
  },
  signature: { type: "string", initial_value: "", validation: () => {} }
};

export default SCHEMA;
