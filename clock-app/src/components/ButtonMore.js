import React from 'react';

const Button = ({ detailActive, setDetailActive }) => {
  return (
    <button
      className="button--more"
      onClick={() => setDetailActive(!detailActive)}
    >
      {detailActive ? 'LESS' : 'MORE'}
      <div
        className={`${detailActive ? 'icon--arrow active' : 'icon--arrow'}`}
      ></div>
    </button>
  );
};

export default Button;
