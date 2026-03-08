import React from "react";

function Inventory() {
  return (
    <div>

      <h2>Medicine Inventory</h2>

      <input placeholder="Medicine Name" />
      <input placeholder="Batch Number" />
      <input placeholder="Quantity" />
      <input type="date" />

      <button>Add Medicine</button>

    </div>
  );
}

export default Inventory;
