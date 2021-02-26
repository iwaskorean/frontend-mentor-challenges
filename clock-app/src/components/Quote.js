import React, { useEffect, useState } from 'react';

const Quote = ({ detailActive, alertMsg }) => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuote = async () => {
    return await (await fetch('https://api.kanye.rest'))
      .json()
      .then((response) => {
        setQuote(response);
      })
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
            <p className="quote__container__text">"{quote.quote}"</p>
            <p className="quote__container__author">{quote && 'Kanye West'}</p>
          </div>
          <button
            className="quote__button--refresh"
            onClick={() => {
              setQuote(null);
              getQuote();
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
