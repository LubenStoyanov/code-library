import React from "react";

export default function Searchbar({ setSearch }) {
  const handleSubmit = (e) => {
    e.prevent.default;
    setSearch(e.target.firstChild.value);
    e.target.firstChild.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
