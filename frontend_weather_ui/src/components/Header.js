import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
function Header() {
  return (
    <header className="header">
      <h1 className="header-title">☀️ Weather Info Viewer</h1>
      <span className="header-subtitle">
        Search weather by city. Minimal. Fast. Beautiful.
      </span>
    </header>
  );
}

export default Header;
