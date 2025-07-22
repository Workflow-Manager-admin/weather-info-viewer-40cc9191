import React, { useState } from "react";
import "../App.css";

// PUBLIC_INTERFACE
function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState("");

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim());
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
        aria-label="City name"
      />
      <button className="search-button" disabled={loading || !input.trim()} type="submit">
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchBar;
