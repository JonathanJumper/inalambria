import React, { Component } from 'react';
import logo from '../assets/logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="mb1">
            Prueba Técnica
          </h1>
          <button>
            Actualizar Posts
          </button>
        </header>

        <div className="App-container">
          
        </div>

        <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default App;
