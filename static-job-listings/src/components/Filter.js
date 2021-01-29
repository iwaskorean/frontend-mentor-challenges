import React from 'react';
import FilterItems from './FilterItems';
import './Filter.css';

const Filter = ({ keywords, removeKeywords, clearKeywords }) => {
    return (
        <div className="filter">
            <div className="item-container">
                {keywords.map((keyword, idx) => (
                    <FilterItems key={idx} keyword={keyword} removeKeywords={removeKeywords} />
                ))}
            </div>
            <div className="button-clear" onClick={clearKeywords}>
                Clear
            </div>
         </div> 
    );
};

export default Filter;