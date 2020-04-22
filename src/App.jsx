import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import KingCon from './components/visualization/KingCon';

const App = () => {

    return(
      <div>
        <Navbar>
          <Navbar.Brand>Common Infectious Diseases in the US</Navbar.Brand>
        </Navbar>
        <KingCon />
        <Navbar fixed="bottom" variant="light">
          <Navbar.Text>Created by Kevin Bagnall; 2020</Navbar.Text>
        </Navbar>
      </div>
    )

}

export default App;
