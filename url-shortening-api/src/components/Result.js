import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Result = ({ loading, longUrls, shortUrls }) => {
  const [clipboard, setClipboard] = useState('');

  const onClickCopy = (url) => {
    setClipboard(url);
  };

  return (
    <React.Fragment>
      {loading && <div className="loading"> Loading ... </div>}
      {longUrls &&
        longUrls.map((url, i) => (
          <div className="result-box" key={i}>
            <div className="url-client">{`${url}`}</div>
            <div className="url-shorten"> {`${shortUrls[i]}`} </div>
            <CopyToClipboard text={shortUrls[i]}>
              {clipboard === shortUrls[i] ? (
                <button
                  className="button-copy copied"
                  type="submit"
                  onClick={() => {
                    onClickCopy(shortUrls[i]);
                  }}
                >
                  copied!
                </button>
              ) : (
                <button
                  className="button-copy"
                  type="submit"
                  onClick={() => {
                    onClickCopy(shortUrls[i]);
                  }}
                >
                  copy
                </button>
              )}
            </CopyToClipboard>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Result;
