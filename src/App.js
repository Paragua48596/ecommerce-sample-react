import React from 'react';
import logo from './public/images/logo.svg';
import './public/styles/App.css';

//Componentes
import Menu from './components/Menu';
import Slider from './components/Slider';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Slider />
    </div>
  );
}

export default App;
