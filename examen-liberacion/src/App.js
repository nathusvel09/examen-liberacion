import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1 className="title">Calculadora de Factura</h1>
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
