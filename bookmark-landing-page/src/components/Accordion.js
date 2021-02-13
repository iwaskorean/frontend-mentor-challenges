import React, { useState } from 'react';

const Accordion = ({ accordion }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = accordion.map((item, index) => {
    const active = index === activeIndex ? 'active' : 'null';

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => setActiveIndex(index)}
        >
          <span>{item.title}</span>
          <img
            className="icon--arrow"
            src="./images/icon-arrow.svg"
            alt="arrow"
          />
        </div>
        <div className={`description__acc ${active}`}>{item.description}</div>
      </React.Fragment>
    );
  });

  return (
    <div className="accordion">
      <div className="heading__sub--centered">Frequently Asked Questions</div>
      <div className="description__sub--centered">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </div>
      <div className="accordion__container">{renderedItems}</div>
      <button className="button-more">More Info</button>
    </div>
  );
};

export default Accordion;
