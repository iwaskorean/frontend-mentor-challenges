import React from 'react';
import './CardDetail.css'
import Filter from './Filter';

const CardDetail = ({ user }) => {
    let filterItems = [];

    const getFilterItems = () => {
        filterItems.push(user.role, user.level)
        if(user.languages || user.tool) {
            filterItems = filterItems.concat(user.languages, user.tools);
            // filterItems = filterItems.concat(user.tools);
        }
    };

    getFilterItems();

    const renderItems = filterItems.map(item => {
        return (
            <React.Fragment key={item}>
                <Filter item={item} />
            </React.Fragment>
        );
    });

    return (
        <div className={user.featured ? "card featured" : "card"}>
            <div className="profile">
                <img className="company-logo" src={`../images/${user.company}.svg`} alt="err" />
                <div className="detail">
                    <div className="detail__company">
                        <div className="detail__company-name">
                            {user.company}
                        </div>
                        {user.new 
                            ? <div className="detail__company-new">NEW !</div>
                            : ""
                        }
                        {user.featured 
                            ?  <div className="detail__company-fetatured">FEATURED</div>
                            : ""
                        }
                    </div>
                    <div className="detail__position">
                        <div className="detail__position-name">
                            {user.position}
                        </div>
                    </div>
                    <div className="detail__contract">
                        <div> {user.postedAt} </div>
                        <div className="detail__contract-dot"> &#183; </div>
                        <div> {user.contract} </div>
                        <div className="detail__contract-dot"> &#183; </div>
                        <div> {user.location} </div>
                    </div>
                </div>
            </div>
            <div className="items">
                {renderItems}
            </div>
        </div>
    );
};

export default CardDetail;