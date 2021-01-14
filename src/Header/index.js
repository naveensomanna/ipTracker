import React from "react";

const Header = ({ handleChange, handleSearch, searchedIp }) => {
  return (
    <header className="header">
      <h1>Ip Address Tracker</h1>
      <div className="search-container">
        <input type="text" onChange={handleChange} value={searchedIp} />
        <button onClick={handleSearch}> &gt; </button>
      </div>
    </header>
  );
};

export default Header;
