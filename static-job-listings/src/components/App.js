import React, { useState, useEffect } from 'react';
import data from './data';
import Filter from './Filter';
import Job from './Job';
import './App.css';

const App = () => {
    const [jobs, setJobs] = useState([]);
    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        if(keywords) {
            const filtredUser = data.filter(user => {
                return keywords.every(term => {
                    return (
                        user.role === term || user.level === term || 
                        user.languages.includes(term) || user.tools.includes(term)
                    )
                } )
            });
            setJobs(filtredUser);
        } else {
            setJobs(data);
        }
    }, [keywords]);

    const clearKeywords = () => {
        setKeywords([]);
    }

    const addKeywords = keyword => {
        console.log(keywords);
        
        if(!keywords.includes(keyword)) {
            setKeywords([...keywords, keyword]);
        }
    }

    const removeKeywords = item => {
        const updatedKeywords = keywords.filter(keyword => keyword !== item);
        setKeywords(updatedKeywords);
    }

    return (
        <React.Fragment>
            <div className="header__bg" />
            <div className="wrapper">
                    {keywords.length 
                    ? <Filter keywords={keywords} clearKeywords={clearKeywords} removeKeywords={removeKeywords}/>
                    : null
                    }
                <div className="container">
                    {jobs.map(job => 
                        <Job key={job.id} job={job} addKeywords={addKeywords} />
                        )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default App;