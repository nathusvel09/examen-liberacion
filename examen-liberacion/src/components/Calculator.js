import React, { useState } from 'react';
import '../styles/Calculator.css';


const Calculator = () => {
  const [cost, setCost] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState(null);

  const calculateTotal = () => {
    const result = parseFloat(cost) * parseInt(quantity);
    setTotal(result);
  };

  return (
    <div className="calculator">
      <div className="form-group">
        <label htmlFor="cost">Costo:</label>
        <input 
          id="cost"
          type="number" 
          value={cost} 
          onChange={(e) => setCost(e.target.value)} 
          className="input"
          placeholder="Ingrese el costo del artículo"
        />
      </div>

      <div className="form-group">
        <label htmlFor="quantity">Cantidad:</label>
        <input 
          id="quantity"
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
          className="input"
          placeholder="Ingrese la cantidad"
        />
      </div>

      <button onClick={calculateTotal} className="btn-calculate">
        Calcular
      </button>

      {total !== null && (
        <div className="result">
          <h4>Total a pagar: {total.toFixed(2)} Bs</h4>
        </div>
      )}
    </div>
  );
};

export default Calculator;
