import React from 'react';
import { Link } from 'react-router-dom';
import './CardHome.css';

function CardHome({ titulo, descricao, link }) {
  return (
    <div className="card-home">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <Link to={link}>
        <button>Acessar</button>
      </Link>
    </div>
  );
}

export default CardHome;
