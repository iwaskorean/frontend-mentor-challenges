import React from 'react';
import About from './About';
import Cards from './Cards';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';
// styles
import { GlobalStyle, Wrapper } from './styled/App.styled';

const App = () => {
  const cardContents = [
    {
      id: 0,
      avatar: './assets/avatar-anisha.png',
      name: 'Anisha Li',
      text:
        '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    },
    {
      id: 1,
      avatar: './assets/avatar-ali.png',
      name: 'Ali Bravo',
      text:
        '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.” ',
    },
    {
      id: 2,
      avatar: './assets/avatar-richard.png',
      name: 'Richard Watts',
      text:
        '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!” ',
    },
    {
      id: 3,
      avatar: './assets/avatar-shanai.png',
      name: 'Shanai Gough ',
      text:
        '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.” ',
    },
  ];

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Intro />
        <About />
        <Cards cardContents={cardContents} />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default App;
