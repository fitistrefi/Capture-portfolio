import React from 'react';
import Aboutus from './pages/AboutUs';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';

import GlobalStyle from './components/GlobalStyled';
function App() {
  return (
    <div className="App">
     
      <GlobalStyle />
      <Nav />
     <Aboutus />
    </div>
  );
}

export default App;
