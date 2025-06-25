import React from 'react';
import './CardTutorial.css';

function CardTutorial({ titulo, descricao }) {
  return (
    <div className="card-tutorial">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <button>Ver Tutorial</button>
    </div>
  );
}

export default CardTutorial;
