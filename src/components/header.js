import React from "react";
import "../style/header.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
        Click on field headers to filter by field or use the search box to narrow
        your results with each key stroke.
      </p>
    </header>
  );
};

export default Header;