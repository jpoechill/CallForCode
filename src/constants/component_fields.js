const FIELDS = {
  general_information: [
    "survivor_first_name",
    "survivor_middle_name",
    "survivor_last_name",
    "survivor_phone",
    "survivor_email",
    "survivor_address1",
    "survivor_address2",
    "survivor_city",
    "survivor_state",
    "survivor_zip"
  ],
  members_of_household: [
    "household_member_0_first_name",
    "household_member_0_middle_name",
    "household_member_0_last_name",
    "household_member_0_dob",
    "household_member_0_relation"
  ],
  additional_contact_information: [
    "additional_contact_first_name",
    "additional_contact_middle_name",
    "additional_contact_last_name",
    "additional_contact_phone",
    "additional_contact_email",
    "additional_contact_address1",
    "additional_contact_address2",
    "additional_contact_city",
    "additional_contact_state",
    "additional_contact_zip"
  ],
  cash_grant_information: [
    "fema_number",
    "fire_name",
    "damaged_address1",
    "damaged_address2",
    "damaged_city",
    "damaged_state",
    "damaged_zip",
    "landlord_first_name",
    "landlord_middle_name",
    "landlord_last_name",
    "landlord_phone",
    "landlord_email"
  ],
  notes: ["notes"],
  photo_id: ["photo_id"],
  address_proof: ["address_proof"],
  house_damage: ["house_damage"],
  receipts: ["receipts"],
  agencies: ["agencies"],
  signature: ["signature"]
};

export default FIELDS;
