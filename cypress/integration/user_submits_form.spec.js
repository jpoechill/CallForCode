// Import SCHEMA for testing
import SCHEMA from "../../src/constants/schema";

describe('User submits form', () => {
    

    it('User fills out StartPage', () => {
        cy.visit('http://localhost:3000');

        Object.keys(SCHEMA).forEach(fieldName => {
          if (SCHEMA.hasOwnProperty(fieldName)) {
            // Text inputs
            if (SCHEMA[fieldName].input == "text") {
              cy.get('[name=' + fieldName + ']')
                .type(SCHEMA[fieldName].test_value)
            }

            // Select options
            if (SCHEMA[fieldName].input == "select") {
                  cy.get('[name=' + fieldName  + ']')
                    .select(SCHEMA[fieldName].test_value)
            } 

            // Checkboxes or radio buttons
            if (SCHEMA[fieldName].input == "checkbox") {
                  cy.get('[name=' + fieldName  + ']')
                    .check()
            }

            // Radio buttons  
            if (SCHEMA[fieldName].input == "radio") {
              cy.get('[name=' + SCHEMA[fieldName].name + ']')
                .check() 
            }
            
          }
        });
        // *** GENERAL INFORMATION *** //

        /*
        // Populate First Name
        cy.get('[name="survivor_first_name"]')
          .type(testData.survivor_first_name);

        // Populate Middle Name
        cy.get('[name="survivor_middle_name"]')
          .type(testData.survivor_middle_name);

        // Populate Middle Name
        cy.get('[name="survivor_last_name"]')
          .type(testData.survivor_last_name);

        // Populate Phone Number
        cy.get('[name="survivor_phone"]')
          .type(testData.survivor_phone);
        
        // Populate Email
        cy.get('[name="survivor_email"]')
          .type(testData.survivor_email);
        
        // Populate Current Address
        cy.get('[name="survivor_current_address"]')
          .type(testData.survivor_current_address);

        // Populate Apartment Number
        cy.get('[name="survivor_apartment_number"]')
          .type(testData.survivor_apartment_number);

        // Populate City
        cy.get('[name="survivor_city"]')
          .type(testData.survivor_city);
        
        // Populate State
        cy.get('[name="survivor_state"]')
          .select(testData.survivor_state);

        // Populate Zip
        cy.get('[name="survivor_zip"]')
          .type(testData.survivor_zip);

        // *** ADDITIONAL CONTACT ** //

        // Populate First Name
        cy.get('[name="additional_contact_first_name"]')
          .type(testData.additional_contact_first_name);
        
        // Populate Middle Name
        cy.get('[name="additional_contact_middle_name"]')
          .type(testData.additional_contact_middle_name);

        // Populate Middle Name
        cy.get('[name="additional_contact_last_name"]')
          .type(testData.additional_contact_last_name);

        // Populate Phone Number
        cy.get('[name="additional_contact_phone"]')
          .type(testData.additional_contact_phone);
        
        // Populate Email
        cy.get('[name="additional_contact_email"]')
          .type(testData.additional_contact_email);
        
        // Populate Current Address
        cy.get('[name="additional_contact_current_address"]')
          .type(testData.additional_contact_current_address);

        // Populate Apartment Number
        cy.get('[name="additional_contact_apartment_number"]')
          .type(testData.additional_contact_apartment_number);

        // Populate City
        cy.get('[name="additional_contact_city"]')
          .type(testData.additional_contact_city);
        
        // Populate State
        cy.get('[name="additional_contact_state"]')
          .select(testData.additional_contact_state);

        // Populate Zip
        cy.get('[name="additional_contact_zip"]')
          .type(testData.additional_contact_zip);

        // *** CASH GRANT INFORMATION *** //

        // Populate 9 Digit FEMA Number
        cy.get('[name="fema_number"]')
          .type(testData.fema_number);

        // Populate Fire Name
        cy.get('[name="fire_name"]')
          .select(testData.fire_name);

        // Populate Damaged Address
        cy.get('[name="damaged_address"]')
          .type(testData.damaged_address);

        // Populate Apartment Number
        cy.get('[name="damaged_apartment_number"]')
          .type(testData.damaged_apartment_number);

        // Populate City
        cy.get('[name="damaged_city"]')
          .type(testData.damaged_city);
        
        // Populate State
        cy.get('[name="damaged_state"]')
          .select(testData.damaged_state);

        // Populate Zip
        cy.get('[name="damaged_zip"]')
          .type(testData.damaged_zip);

        // *** NOTES *** //
        cy.get('[name="notes"]')
          .type(testData.notes)

        // *** PHOTOID *** //
        const photoIdFileName = 'PhotoID.jpg';
        
        cy.fixture(photoIdFileName).then(fileContent => {
          cy.get('[name="photo_id_file_upload"]').upload(
            { fileContent: fileContent, fileName: photoIdFileName, mimeType: 'image/jpeg'},
            { subjectType: 'input' },
          );
        });

        // *** ADDRESS PROOF *** //
        const addressProofFileName = 'AddressProof.jpg';
        
        cy.fixture(addressProofFileName).then(fileContent => {
          cy.get('[name="address_proof_file_upload"]').upload(
            { fileContent: fileContent, fileName: addressProofFileName, mimeType: 'image/jpeg'},
            { subjectType: 'input' },
          );
        });

        // *** HOUSE DAMAGE *** //

        const houseDamageFileName = 'HouseDamage.jpg';
        
        cy.fixture(houseDamageFileName).then(fileContent => {
          cy.get('[name="house_damage_file_upload"]').upload(
            { fileContent: fileContent, fileName: houseDamageFileName, mimeType: 'image/jpeg'},
            { subjectType: 'input' },
          );
        });
        // *** RECEIPTS *** //
        const receiptsFileName = 'Receipts.jpg';
        
        cy.fixture(receiptsFileName).then(fileContent => {
          cy.get('[name="receipts_file_upload"]').upload(
            { fileContent: fileContent, fileName: receiptsFileName, mimeType: 'image/jpeg'},
            { subjectType: 'input' },
          );
        });

        // *** AGENCIES *** //
        cy.get('[type="checkbox"]')
          .check([
              'alliance_for_workforce_development',
              'butte_211',
              'caring_choices',
              'catalyst',
              'chip',
              'dess',
              'fema',
              'habitat_for_humanity',
              'jesus_center',
              'lsnc',
              'ltrg_unmet_needs',
              'nvcss',
              'policy_holders_united',
              'red_cross',
              'salvation_army',
              'st_vincent_de_paul',
              'torres_shelter',
              'tzu_chi',
              'vet_center',
              'youth_for_change'
          ]);

        // *** ELECTRONIC SIGNATURE *** //
        cy.get('[name="signature"]')
          .type(testData.signature);

        // *** PREVIEW *** //
        cy.get('[name="preview"]')
          .click();

        cy.get('[id="survivor_name_preview"]')
          .should('have.text', testData.survivor_first_name + ' ' + testData.survivor_middle_name + ' ' + testData.survivor_last_name);

        // *** SUBMIT *** //
        cy.get('[name="submit"]')
          .click();
        */
        
    })
})