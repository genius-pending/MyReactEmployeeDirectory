import React from "react";
import "../style/header.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
        Type in the search bar to begin searching, click on headings to filter.
      </p>
    </header>
  );
};

export default Header;