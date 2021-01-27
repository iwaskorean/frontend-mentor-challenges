import React from 'react';
import CardDetail from './CardDetail';

const CardList = ({ users }) => {
    const renderedList = users.map(user => {
        return(
            <React.Fragment key={user.id}>
            <CardDetail className="card" user={user} />
            </React.Fragment>
        );
    });
    
    return (
        <React.Fragment>
            {renderedList}
        </React.Fragment>
    );
};

export default CardList;