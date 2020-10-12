import React from 'react';
import {} from 'react-icons/fi';
import './styles/global.css';
import './styles/pages/landing.css';
import logoImg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p> Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </div>
        <a href="" className="enter-app">
          >
        </a>
      </div>
    </div>
  );
}

export default App;
