import React, { useState, useEffect } from "react";
import states from "../../constants/states";
import StartPage from "../StartPage";
import PreviewPage from "../PreviewPage";
import CompletePage from "../CompletePage";

const WildfireSurvivorApp = () => {
  const [ state, setState ] = useState(JSON.parse(localStorage.getItem('formData')) || {} )

  const formInput = { 
    value: state, 
    handleChange: (event) => { 
      let newState = { ...state, [event.target.name]: event.target.value }
      localStorage.setItem('formData', JSON.stringify(newState))
      console.log(JSON.parse(localStorage.getItem('formData')))
      setState(newState)     
    }
  }

  const stateOptions = states.map((state) => 
    <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
  );
    return (
      <div id="form-container">
        <div id="general-information-container">
          <h2>General Information</h2>
          <h3>Please provide your current information so that we can contact you about your case</h3>
            <input
              type="text"
              name="survivor_first_name"
              placeholder="First Name"
              value = {formInput.value.survivor_first_name}
              onChange = {formInput.handleChange}
            />
            <input
              type="text"
              name="survivor_middle_name"
              placeholder="Middle Name"
              value = {formInput.value.survivor_middle_name}
              onChange = {formInput.handleChange}
            />
            <input
              type="text"
              name="survivor_last_name"
              placeholder="Last Name"
              value = {formInput.value.survivor_last_name}
              onChange = {formInput.handleChange}
              
            />
            <input
              type="text"
              name="survivor_phone"
              placeholder="Phone Number"
              value = {formInput.value.survivor_phone}
              onChange = {formInput.handleChange}
              
            />
            <input
              type="text"
              name="survivor_email"
              placeholder="Email Address"
              value = {formInput.value.survivor_email}
              onChange = {formInput.handleChange}
              
            />
            <input
              type="text"
              name="survivor_current_address"
              placeholder="Current Address"
              value = {formInput.value.survivor_current_address}
              onChange = {formInput.handleChange}
              
            />
            <input
              type="text"
              name="survivor_apartment_number"
              placeholder="Apartment Number"
              value = {formInput.value.survivor_apartment_number}
              onChange = {formInput.handleChange}
            />
            <input 
              type="text"
              name="survivor_city"
              placeholder="City"
              value={formInput.value.survivor_city}
              onChange={formInput.handleChange}
              />
            <select
              name="survivor_state"
              value={formInput.value.survivor_state}
              onChange={formInput.handleChange} 
            >
              {stateOptions}
            </select>
            <input
              type="text"
              name="survivor_zip"
              placeholder="Zip Code"
              value={formInput.value.survivor_zip}
              onChange={formInput.handleChange}
              />
          </div>
          <div id="additional-contact-container">
            <h2>Additional Contact</h2>
            <h3>Please provide a contact if we are not able to reach you</h3>
              <input
                type="text"
                name="additional_contact_first_name"
                placeholder="First Name"
                value={formInput.value.additional_contact_first_name}
                onChange={formInput.handleChange}
              />
              <input
                type="text"
                name="additional_contact_middle_name"
                placeholder="Middle Name"
                value={formInput.value.additional_contact_middle_name}
                onChange={formInput.handleChange}
              />
              <input
                type="text"
                name="additional_contact_last_name"
                placeholder="Last Name"
                value={formInput.value.additional_contact_last_name}
                onChange={formInput.handleChange}
              />
              <input
                type="text"
                name="additional_contact_phone"
                placeholder="Phone Number"
                value={formInput.value.additional_contact_phone}
                onChange={formInput.handleChange}
              />
              <input
                type="text"
                name="additional_contact_email"
                placeholder="Email Address"
                value={formInput.value.additional_contact_email}
                onChange={formInput.handleChange}
              />
              <input
                type="text"
                name="additional_contact_current_address"
                placeholder="Current Address"
                value={formInput.value.additional_contact_current_address}
                onChange={formInput.handleChange}
              />
              <input
                type="text"
                name="additional_contact_apartment_number"
                placeholder="Apartment Number"
                value={formInput.value.additional_contact_apartment_number}
                onChange={formInput.handleChange}
              />
              <input
                type="text"
                name="additional_contact_city"
                placeholder="City"
                value={formInput.value.additional_contact_city}
                onChange={formInput.handleChange}
              />
              <select
                name="additional_contact_state"
                value={formInput.value.additional_contact_state}
                onChange={formInput.handleChange}
              >
                {stateOptions}
              </select>
              <input
                type="text"
                name="additional_contact_zip"
                placeholder="Zip Code"
                value={formInput.value.additional_contact_zip}
                onChange={formInput.handleChange}
              />
          </div>
          <div id="cash-grant-information">
            <h2>CashGrant Information</h2>
            <h3>Please provide inforomation regarding the home address damaged by the wildfire(s)</h3>
              <input
                type="text"
                name="fema_number" 
                value={formInput.value.fema_number}
                onChange={formInput.handleChange} 
              />
              <select
                name="fire_name"
                value={formInput.value.fire_name}
                onChange={formInput.handleChange}
              >
                <option value="none" />
                <option value="camp">Camp Fire</option>
                <option value="carr">Carr Fire</option>
                <option value="tubbs">Tubbs Fire</option>
              </select>
              <input
                type="text"
                name="damaged_address"
                placeholder="Damaged House Address"
                value={formInput.value.damaged_address}
                onChange={formInput.handleChange}
              />
              <input
                type="text"
                name="damaged_apartment_number"
                placeholder="Apartment Number"
                value={formInput.value.damaged_apartment_number}
                onChange={formInput.handleChange}
              />
              <input
                type="text"
                name="damaged_city"
                placeholder="City" 
                value={formInput.value.damaged_city}
                onChange={formInput.handleChange}
              />
              <select
                name="damaged_state"
                value={formInput.value.damaged_state}
                onChange={formInput.handleChange}
              >
                {stateOptions}
              </select>
              <input
                type="text"
                name="damaged_zip"
                placeholder="zip" 
                value={formInput.value.damaged_zip}
                onChange={formInput.handleChange}
              />
          </div>
          <div id="notes-container">
            <h2>Notes</h2>
            <h3> Briefly describe how you were impacted by the wildfire. Was your primary residence destroyed or damaged?
              To what degree are you insured for any of your losses? (Homeowner's, renters, etc.)
            </h3>
              <input
                type="text"
                name="notes"
                value={formInput.value.notes}
                onChange={formInput.handleChange}
              />
          </div>
          <div id="photo-id-container">
            <h2>PhotoID</h2>
              <input
                type="file"
                name="photo_id_file_upload"
                accept="image/*"
                value={formInput.value.photo_id_file_upload}
                onChange={formInput.handleChange}
                multiple/>
          </div>
          <div id="address-proof-container">
            <h2>Address Proof</h2>
              <input
                type="file"
                name="address_proof_file_upload"
                accept="image/*"
                value={formInput.value.address_proof_file_upload}
                onChange={formInput.handleChange}
                multiple
              />
          </div>
          <div id="house-damage-container">
            <h2>HouseDamage</h2>
              <input
                type="file"
                name="house_damage_file_upload"
                accept="image/*"
                value={formInput.value.house_damage_file_upload}
                onChange={formInput.handleChange}
                multiple
              />
          </div>
          <div id="receipts-container">
            <h2>Receipts</h2>
              <input
                type="file"
                name="receipts_file_upload"
                accept="image/*"
                value={formInput.value.receipts_file_upload}
                onChange={formInput.handleChange}
                multiple
              />
          </div>
          <div id="agencies-container">
            <h2>Agencies</h2>
              <label htmlFor="alliance_for_workforce_development">
                <input
                  type="checkbox"
                  name="alliance_for_workforce_development"
                  value="alliance_for_workforce_development"
                  onChange={formInput.handleChange}
                />
                Alliance for Workforce Development
              </label>

              <label htmlFor="butte_211">
                <input
                  type="checkbox"
                  name="butte_211"
                  value="butte_211"
                  onChange={formInput.handleChange}
                />
                Butte 211
              </label>

              <label htmlFor="caring_choices">
                <input
                  type="checkbox"
                  name="caring_choices"
                  value="caring_choices"
                  onChange={formInput.handleChange}
                />
                Caring Choices
              </label>

              <label htmlFor="catalyst">
                <input
                  type="checkbox"
                  name="catalyst"
                  value="catalyst"
                  onChange={formInput.handleChange}
                />
                Catalyst
              </label>

              <label htmlFor="chip">
                <input
                  type="checkbox"
                  name="chip"
                  value="chip"
                  onChange={formInput.handleChange}
                />
                CHIP
              </label>

              <label htmlFor="dess">
                <input
                  type="checkbox"
                  name="dess"
                  value="dess"
                  onChange={formInput.handleChange}
                />
                DESS
              </label>

              <label htmlFor="fema">
                <input
                  type="checkbox"
                  name="fema"
                  value="fema"
                  onChange={formInput.handleChange}
                />
                FEMA
              </label>

              <label htmlFor="habitat_for_humanity">
                <input
                  type="checkbox"
                  name="habitat_for_humanity"
                  value="habitat_for_humanity"
                  onChange={formInput.handleChange}
                />
                Habitat for Humanity
              </label>

              <label htmlFor="jesus_center">
                <input
                  type="checkbox"
                  name="jesus_center"
                  value="jesus_center"
                  onChange={formInput.handleChange}
                />
                Jesus Center
              </label>

              <label htmlFor="lsnc">
                <input 
                  type="checkbox"
                  name="lsnc"
                  value="lsnc"
                  onChange={formInput.handleChange}
                />
                LSNC
              </label>

              <label htmlFor="ltrg_unmet_needs">
                <input
                  type="checkbox"
                  name="ltrg_unmet_needs"
                  value="ltrg_unmet_needs"
                  onChange={formInput.handleChange}
                />
                LTRG Unmet Needs
              </label>

              <label htmlFor="nvcss">
                <input
                  type="checkbox"
                  name="nvcss"
                  value="nvcss"
                  onChange={formInput.handleChange}
                />
                NVCSS
              </label>

              <label htmlFor="policy_holders_united">
                <input
                  type="checkbox"
                  name="policy_holders_united"
                  value="policy_holders_united"
                  onChange={formInput.handleChange}
                />
                Policy Holders United
              </label>

              <label htmlFor="red_cross">
                <input
                  type="checkbox"
                  name="red_cross"
                  value="red_cross"
                  onChange={formInput.handleChange}
                />
                Red Cross
              </label>

              <label htmlFor="salvation_army">
                <input
                  type="checkbox"
                  name="salvation_army"
                  value="salvation_army"
                  onChange={formInput.handleChange}
                />
                Salvation Army
              </label>

              <label htmlFor="st_vincent_de_paul">
                <input
                  type="checkbox"
                  name="st_vincent_de_paul"
                  value="st_vincent_de_paul"
                  onChange={formInput.handleChange}
                />
                St. Vincent de Paul
              </label>

              <label htmlFor="torres_shelter">
                <input
                  type="checkbox"
                  name="torres_shelter"
                  value="torres_shelter"
                  onChange={formInput.handleChange}
                />
                Torres Shelter
              </label>

              <label htmlFor="tzu_chi">
                <input
                  type="checkbox"
                  name="tzu_chi"
                  value="tzu_chi"
                  onChange={formInput.handleChange}
                />
                Tzu Chi
              </label>

              <label htmlFor="vet_center">
                <input
                  type="checkbox"
                  name="vet_center"
                  value="vet_center"
                  onChange={formInput.handleChange}
                />
                Vet Center
              </label>

              <label htmlFor="youth_for_change">
                <input
                  type="checkbox"
                  name="youth_for_change"
                  value="youth_for_change"
                  onChange={formInput.handleChange}
                />
                Youth for Change
              </label>
        </div>
        <div id="signature-container">
          <h2>Signature</h2>
            <input
              type="text"
              name="signature"
              value={formInput.value.signature}
              onChange={formInput.handleChange} 
            />
        </div>
        <button type="submit" value="preview" name="preview">Preview</button>
        <div id="preview-container">
          <p id="survivor_name_preview">{formInput.value.survivor_first_name + ' ' + formInput.value.survivor_middle_name + ' ' + formInput.value.survivor_last_name}</p>
        </div>
        <button type="submit" value="preview" name="submit">Submit</button>
      </div>
    )
  }


export default WildfireSurvivorApp;
