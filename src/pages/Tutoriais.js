import React from 'react';
import CardTutorial from '../components/CardTutorial';

function Tutoriais() {
  const listaTutoriais = [
    {
      id: 1,
      titulo: 'Como usar o WhatsApp',
      descricao: 'Aprenda a enviar mensagens, fotos e vídeos pelo WhatsApp.'
    },
    {
      id: 2,
      titulo: 'Como fazer chamadas de vídeo',
      descricao: 'Veja como fazer chamadas de vídeo com amigos e familiares.'
    },
    {
      id: 3,
      titulo: 'Navegando na Internet',
      descricao: 'Dicas de como pesquisar, acessar sites e se proteger online.'
    },
    {
      id: 4,
      titulo: 'Cuidados com o WhatsApp',
      descricao: 'Algumas dicas basicas de cuidado com golpes, fraudes e informações falças.'
    }
  ];

  return (
    <div>
      <h1>Tutoriais</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {listaTutoriais.map((tutorial) => (
          <CardTutorial 
            key={tutorial.id} 
            titulo={tutorial.titulo} 
            descricao={tutorial.descricao} 
          />
        ))}
      </div>
    </div>
  );
}

export default Tutoriais;
