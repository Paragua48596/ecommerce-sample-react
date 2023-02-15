import React from 'react';
import logo from './public/images/logo.svg';
import './public/styles/App.css';

//Componentes
import Menu from './components/Menu';
import Bannner from './components/Banner';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Bannner />
    </div>
  );
}

export default App;
