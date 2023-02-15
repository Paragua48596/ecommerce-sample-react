import React from 'react';
import logo from './public/images/logo.svg';
import './public/styles/App.css';

//Componentes
import Menu from './components/Menu';
import Bannner from './components/Banner';
import Categories from './components/Categories';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Bannner />
      <main>
        <Categories />
      </main>
    </div>
  );
}

export default App;
