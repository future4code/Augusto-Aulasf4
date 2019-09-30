import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>FutureTube</h1>
        <input type="text" placeholder="Busca"/>
      </header>
      <div id="conteudo-pagina">
      <menu>
        <ul>
          <li className="li-menu">Inicio</li>
          <li className="li-menu">Em alta</li>
          <li className="li-menu">Inscricoes</li>
          <li className="li-menu li-borda">Originais</li>
          <li className="li-menu">Biblioteca</li>
          <li className="li-menu">Historico</li>
        </ul>
      </menu>
      <section>
        <div className="video-card">
          <img src="assets/video1.png" alt="foto do video 1"/>
          <h3>Titulo do Video</h3>
        </div>
        <div className="video-card">
          <img src="assets/video2.png" alt="foto do video 1"/>
          <h3>Titulo do Video</h3>
        </div>
        <div className="video-card">
          <img src="assets/video1.png" alt="foto do video 1"/>
          <h3>Titulo do Video</h3>
        </div>
        <div className="video-card">
          <img src="assets/video1.png" alt="foto do video 1"/>
          <h3>Titulo do Video</h3>
        </div>
        <div className="video-card">
          <img src="assets/video1.png" alt="foto do video 1"/>
          <h3>Titulo do Video</h3>
        </div>
        <div className="video-card">
          <img src="assets/video1.png" alt="foto do video 1"/>
          <h3>Titulo do Video</h3>
        </div>
        <div className="video-card">
          <img src="assets/video1.png" alt="foto do video 1"/>
          <h3>Titulo do Video</h3>
        </div>
        <div className="video-card">
          <img src="assets/video1.png" alt="foto do video 1"/>
          <h3>Titulo do Video</h3>
        </div>
      </section>
      </div>
      <footer>
        <h2>Oi,eu moro no footer!</h2>
      </footer>
    </div>
  );
}

export default App;
