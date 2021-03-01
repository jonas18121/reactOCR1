import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Banner from './Banner';
import Cart from './Cart';

function App() {
  return (
    <React.Fragment>
        <Banner/>
        <Cart/>
    </React.Fragment>
  );
}

export default App;