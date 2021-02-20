import React from 'react'
import Hero from './components/Hero'
import Specializing from './components/Specializing/Specializing'
import Expertise from './components/Expertise/Expertise'
import Projects from './components/Project/Projects'

const App = (props) => {
  return (
    <div>
      <Hero />
      <Specializing />
      <Expertise />
      <Projects />
    </div>
  );
};

export default App;