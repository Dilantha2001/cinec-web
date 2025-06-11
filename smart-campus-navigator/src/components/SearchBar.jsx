import React from "react";

export default function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for buildings or rooms..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
