import React, { useState } from 'react';
import axios from 'axios';
import './Suporte.css';
import Swal from 'sweetalert2';

export default function Support() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    axios.post('http://localhost:5000/api/suporte/enviar', {
      nome,
      email,
      descricao,
    });

    Swal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Seu suporte foi enviado com sucesso.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    }).then(() => {
      window.location.href = '/confirmacao';
    });

    setNome('');
    setEmail('');
    setDescricao('');
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'Erro ao enviar suporte. Tente novamente.',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Ok'
    });
    console.error(error);
  }
};


  return (
    <div className="support-container">
      <div className="support-form">
        <h2>Suporte</h2>
        <p>Preencha o formulário e descreva seu problema:</p>

        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Descreva seu problema:</label>
          <textarea
            placeholder="Explique seu problema..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="support-contacts">
        <h2>Contatos Rápidos</h2>
        <p>Se precisar de uma resposta mais rápida, entre em contato diretamente:</p>

        <ul>
          <li>📱 WhatsApp: (99) 99999-9999</li>
          <li>📸 Instagram: @conecta.mais</li>
          <li>📘 Facebook: Conecta Mais</li>
          <li>✉️ Email: suporte@conectamais.com</li>
        </ul>
      </div>
    </div>
  );
}


