import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Tabs from './Tabs';
import Extensions from './Extensions';
import Accordion from './Accordion';

import './scss/main.scss';
import Footer from './Footer';

const App = () => {
  const tabs = [
    {
      imgSrc: './images/illustration-features-tab-1.svg',
      heading: 'Bookmark in one click',
      description:
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    },
    {
      imgSrc: './images/illustration-features-tab-2.svg',
      heading: 'Intelligent search',
      description:
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    },
    {
      imgSrc: './images/illustration-features-tab-3.svg',
      heading: 'Share your bookmarks',
      description:
        'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    },
  ];

  const accordion = [
    {
      title: 'What is Bookmark?',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
    {
      title: 'How can I request a new browser?',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
    {
      title: 'Is there a mobile app?',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
    {
      title: 'What about other Chromium browsers?',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
  ];
  return (
    <div className="wrapper">
      <Header />
      <Intro />
      <Tabs tabs={tabs} />
      <Extensions />
      <Accordion accordion={accordion} />
      <Footer />
    </div>
  );
};

export default App;
