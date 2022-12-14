import React from "react";

function SearchBox() {
  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input type="text" className="flex-1" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
