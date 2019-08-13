import React from "react";

const AddressProof = () => {
  return (
    <div id="address-proof-container">
      <h2>Address Proof</h2>
      <input type="file" name="address_proof_file_upload" accept="image/*" multiple/>
    </div>
  )
};

export default AddressProof;
