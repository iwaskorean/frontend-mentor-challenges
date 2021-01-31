import React, { useState } from 'react';
import axios from 'axios';
import Result from './Result';

const InputBar = () => {
    const [clientUrl, setClientUrl] = useState('');
    const [longUrls, setLongUrls] = useState([]);
    const [shortUrls, setShortUrls] = useState([]);
    const [loading, setLoading] = useState('');
    const [valid, setValid] = useState(true);

    const fetch = () => {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${clientUrl}`, {
          responseType: "json",
        })
        .then((res) => {
            setLongUrls([...longUrls, res.data.result.original_link]);
            setShortUrls([...shortUrls, res.data.result.full_short_link]);
            setLoading(true);
        })
        .catch((err) => {
            console.log(err);
            alert("It must be a invalid url link or an error with the API, Try again later");
            setLoading(false);
        })     
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!clientUrl) {
            setValid(false)
            return null;
        }
        fetch();
        setClientUrl('');
        setLoading('complete');
    };

    return(
        <React.Fragment>
            <form className="section__form" onSubmit={onFormSubmit}>
                <input className={!valid ? 'error' : ''}
                    placeholder="Shorten a link here ... "
                    value={clientUrl}
                    onChange={(e) => setClientUrl(e.target.value)}
                 />
                <button className="button-cyan">
                    Shorten it!
                </button>
                {!valid && <div className="valid-error">Please add a link ...</div>}
            </form>
            <div className="result-container">
            <Result longUrls={longUrls} shortUrls={shortUrls} loading={loading}/>
            </div>
        </React.Fragment>
    )
};

export default InputBar;

