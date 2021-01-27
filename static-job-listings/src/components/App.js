import React from 'react';
import data from './data';
import CardList from './CardList';
import './App.css';

const App = () => {
    return (
        <React.Fragment>
            <div className="header__bg" />
            <div className="wrapper">
                 <div className="container">
                     <CardList users={data}/>
                 </div>
            </div>
        </React.Fragment>
    );
};

export default App;