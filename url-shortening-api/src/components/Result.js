import React from 'react';

const Result = ({ loading, longUrls, shortUrls}) => {

    return (
        <div className="result-box">
            {loading === "complete" && <div className="loading"> Loading ... </div>}
            {longUrls && longUrls.map((url, i) => 
                <div key={i}  className="url-client">{`${url}`}</div>
            )}
            {shortUrls.map((url, i) => 
                <>
                <div key={i} className="url-shorten">{`${url}`}</div>
                <button className="button-copy" type="submit" >
                    copy
                </button>
                </>
            )}
        </div>
    );
};

export default Result;