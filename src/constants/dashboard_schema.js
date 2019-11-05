import agencies from "./agencies"

/**
 * Dashboard Schema
 * 
 * screen name: [field names]
 * 
 * New fields that need to be added to data schema:
 * 
 */
 const DASHBOARD_SCHEMA = {
     "header": [
         "application_id",
         "batch",
         "application_submitted_on",
         "damaged_address1",
         "damaged_address2",
         "damaged_city",
         "damaged_state"
     ],
     "general_info": {
         "general_information": [
             "survivor_phone",
             "survivor_email",
             "survivor_address1",
             "survivor_address2",
             "survivor_city",
             "survivor_state",
             "fema_number",
             "fire_number"
            ],
         "members_of_household": [
             "members_of_household_count"
            ],
         "additional_contact": [
             "additional_contact_first_name",
             "additional_contact_middle_name",
             "additional_contact_last_name",
             "additional_contact_email",
             "additional_contact_phone",
             "additional_contact_address1",
             "additional_contact_address2",
             "additional_contact_city",
             "additional_contact_state",
             "additional_contact_zip"
            ],
         "united_way_case_manager" : [
             "united_way_case_manager_first_name",
             "united_way_case_manager_middle_name",
             "united_way_case_manager_last_name"
         ]
    },
     "agencies": [
         agencies,
         "case_manager_count",        
        ],
     "document_approval": [
         "photo_id",
         "address_proof",
         "house_damage",
         "receipts",
         "can_content_release"
     ],
     "house_status": [
         "damaged_address1",
         "damaged_address2",
         "damaged_city",
         "damaged_state",
         "damaged_zip",
         "notes"
     ],
     "cash_grant": [
         "cash_grants",
         "notifications"
        ],
     "notes": [
         "dashboard_notes",
         "dashboard_notes_notifications"
     ],
     "application_status": "",
     "last_updates": [{name: "", update: "", date: ""}]
 }