import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedTabsMenu = tabs.map((tab, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div
        key={tab.heading}
        className={`tab ${active}`}
        onClick={() => setActiveIndex(index)}
      >
        {tab.heading}
      </div>
    );
  });

  const renderedTabsContent = tabs.map((tab, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div className={`tab__container ${active}`} key={tab.heading}>
        <img className="tab__hero" src={tab.imgSrc} alt="tab-img" />
        <div className="tab__content">
          <div className="heading__sub">{tab.heading}</div>
          <div className="description__sub">{tab.description}</div>
          <button className="button-more">More Info</button>
        </div>
      </div>
    );
  });

  return (
    <div className="tabs">
      <div className="heading__sub--centered">Features</div>
      <div className="description__sub--centered">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </div>
      <div className="tabs__menu">{renderedTabsMenu}</div>
      {renderedTabsContent}
    </div>
  );
};

export default Tabs;
