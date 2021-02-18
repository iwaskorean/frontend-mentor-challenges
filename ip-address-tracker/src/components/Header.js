import React, { useState } from 'react';

const Header = ({ address, setAddress }) => {
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setAddress(input);
  };

  return (
    <div className="header">
      <div className="heading">IP Address Tracker</div>
      <form className="search-bar" onSubmit={(e) => onSubmit(e)}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          placeholder="Search for any IP address or domain"
        />
        <button className="button-arrow">
          <img src="./images/icon-arrow.svg" alt=">" />
        </button>
      </form>
    </div>
  );
};

export default Header;
