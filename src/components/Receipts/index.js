import React from "react";

const Receipts = () => {
  return (
    <div>
      <h2>Receipts</h2>
      <input type="file" name="receipts_file_upload" accept="image/*" multiple/>
    </div>
  )
};

export default Receipts;
