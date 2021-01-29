import React from 'react';
import './Job.css';

const Job = ({ job, addKeywords }) => {
    const keywords = [job.role, job.level, ...job.languages, ...job.tools];

    return (
        <div className={job.featured ? "card featured" : "card"}>
            <div className="profile">
                <img className="company-logo" src={`../images/${job.company}.svg`} alt="err" />
                <div className="detail">
                    <div className="detail__company">
                        <div className="detail__company-name">
                            {job.company}
                        </div>
                        {job.new 
                            ? <div className="detail__company-new">NEW !</div>
                            : ""
                        }
                        {job.featured 
                            ?  <div className="detail__company-fetatured">FEATURED</div>
                            : ""
                        }
                    </div>
                    <div className="detail__position">
                        <div className="detail__position-name">
                            {job.position}
                        </div>
                    </div>
                    <div className="detail__contract">
                        <div> {job.postedAt} </div>
                        <div className="detail__contract-dot"> &#183; </div>
                        <div> {job.contract} </div>
                        <div className="detail__contract-dot"> &#183; </div>
                        <div> {job.location} </div>
                    </div>
                </div>
            </div>
            <div className="keywords">
                {keywords.map((keyword, idx) => (
                    <div key={idx} className="keyword" onClick={() => addKeywords(keyword)}>
                        {keyword}
                    </div>
                )) }
            </div>
        </div>
    );
};

export default Job;