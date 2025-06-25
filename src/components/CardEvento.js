import React from 'react';
import './CardEvento.css';

function CardEvento({ titulo, data, descricao }) {
  return (
    <div className="card-evento">
      <h3>{titulo}</h3>
      <p><strong>Data:</strong> {data}</p>
      <p>{descricao}</p>
      <button>Saiba Mais</button>
    </div>
  );
}

export default CardEvento;
