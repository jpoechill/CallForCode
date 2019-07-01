describe('User submits form', () => {
    

    it('User fills out StartPage', () => {
        cy.visit('http://localhost:3000');
        // *** GENERAL INFORMATION *** //

        // Populate First Name
        cy.get('[name="survivor_first_name"]')
          .type('First Name');
        
        // Populate Middle Name
        cy.get('[name="survivor_middle_name"]')
          .type('Middle Name');

        // Populate Middle Name
        cy.get('[name="survivor_last_name"]')
          .type('Last Name');

        // Populate Phone Number
        cy.get('[name="survivor_phone"]')
          .type('000-000-0000');
        
        // Populate Email
        cy.get('[name="survivor_email"]')
          .type('email@address.com');
        
        // Populate Current Address
        cy.get('[name="survivor_current_address"]')
          .type('123 Street Name');

        // Populate Apartment Number
        cy.get('[name="survivor_apartment_number"]')
          .type('123');

        // Populate City
        cy.get('[name="survivor_city"]')
          .type('City');
        
        // Populate State
        cy.get('[name="survivor_state"]')
          .select('CA');

        // Populate Zip
        cy.get('[name="survivor_zip"]')
          .type('12345');

        // *** ADDITIONAL CONTACT ** //

        // Populate First Name
        cy.get('[name="additional_contact_first_name"]')
          .type('First Name');
        
        // Populate Middle Name
        cy.get('[name="additional_contact_middle_name"]')
          .type('Middle Name');

        // Populate Middle Name
        cy.get('[name="additional_contact_last_name"]')
          .type('Last Name');

        // Populate Phone Number
        cy.get('[name="additional_contact_phone"]')
          .type('000-000-0000');
        
        // Populate Email
        cy.get('[name="additional_contact_email"]')
          .type('email@address.com');
        
        // Populate Current Address
        cy.get('[name="additional_contact_current_address"]')
          .type('123 Street Name');

        // Populate Apartment Number
        cy.get('[name="additional_contact_apartment_number"]')
          .type('123');

        // Populate City
        cy.get('[name="additional_contact_city"]')
          .type('City');
        
        // Populate State
        cy.get('[name="additional_contact_state"]')
          .select('CA');

        // Populate Zip
        cy.get('[name="additional_contact_zip"]')
          .type('12345');

        // *** CASH GRANT INFORMATION *** //

        // Populate 9 Digit FEMA Number
        cy.get('[name="fema_number"]')
          .type('ABCDEF123');

        // Populate Fire Name
        cy.get('[name="fire_name"]')
          .select('Tubbs Fire');

        // Populate Damaged Address
        cy.get('[name="damaged_address"]')
          .type('123 Street Name');

        // Populate Apartment Number
        cy.get('[name="damaged_apartment_number"]')
          .type('123');

        // Populate City
        cy.get('[name="damaged_city"]')
          .type('City');
        
        // Populate State
        cy.get('[name="damaged_state"]')
          .select('CA');

        // Populate Zip
        cy.get('[name="damaged_zip"]')
          .type('12345');

        // *** NOTES *** //
        cy.get('[name="notes"]')
          .type('Notes')

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
          .type('signature');

        // *** PREVIEW *** //
        cy.get('[name="preview"]')
          .click();

        // *** SUBMIT *** //
        cy.get('[name="submit"]')
          .click();
        
        
    })
})