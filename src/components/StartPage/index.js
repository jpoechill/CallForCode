import React from "react";
import GeneralInformation from "../GeneralInformation";
import AdditionalContact from "../AdditionalContact";
import CashGrantInformation from "../CashGrantInformation";
import Notes from "../Notes";
import PhotoID from "../PhotoID";
import AddressProof from "../AddressProof";
import HouseDamage from "../HouseDamage";
import Receipts from "../Receipts";
import Agencies from "../Agencies";
import Signature from "../Signature";
import NotUsingHooks from "../NotUsingHooks";
import UsingHooks from "../UsingHooks";

const StartPage = () => {
  return (
    <div>
      <h1>StartPage</h1>
      <GeneralInformation />
      <AdditionalContact />
      <CashGrantInformation />
      <Notes />
      <PhotoID />
      <AddressProof />
      <HouseDamage />
      <Receipts />
      <Agencies />
      <Signature />
      <button name="preview">Preview</button>
      <NotUsingHooks />
      <UsingHooks />
    </div>
  );
};

export default StartPage;
