import React, { useEffect, useState } from 'react';

const Quote = ({ detailActive, alertMsg }) => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote(Math.floor(Math.random() * 500));
  }, []);

  const getQuote = async (idx) => {
    return await (await fetch('https://type.fit/api/quotes'))
      .json()
      .then((response) => setQuote(response[idx]))
      .catch((err) => {
        console.log(err);
        alert(alertMsg);
      });
  };

  return (
    <div className={`${!detailActive ? 'quote active' : 'quote'}`}>
      {quote && (
        <>
          <div className="quote__container">
            <p className="quote__container__text">"{quote.text}"</p>
            <p className="quote__container__author">
              {!quote.author ? 'Unknown Author' : quote.author}
            </p>
          </div>
          <button
            className="quote__button--refresh"
            onClick={() => {
              setQuote(null);
              getQuote(Math.floor(Math.random() * 500));
            }}
          >
            <img src="./assets/icon-refresh.svg" alt="" />
          </button>
        </>
      )}
    </div>
  );
};

export default Quote;
