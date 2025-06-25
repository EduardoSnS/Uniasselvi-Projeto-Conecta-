import React from 'react';
import { Link } from 'react-router-dom';
import './Confirmacao.css';

export default function Confirmacao() {
  return (
    <div className="confirmacao-container">
      <h2>✅ Suporte enviado com sucesso!</h2>
      <p>Em breve nossa equipe entrará em contato com você.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}
