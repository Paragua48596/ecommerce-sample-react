import React from 'react';
import logo from './public/images/logo.svg';
import './public/styles/App.css';

//Componentes
import Menu from './components/Menu';
import Slider from './components/Slider';
import Best from './components/Best';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Slider />
      <main>
        <Best />
      </main>
    </div>
  );
}

export default App;
