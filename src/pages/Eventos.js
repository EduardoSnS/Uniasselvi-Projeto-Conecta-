import React from 'react';
import CardEvento from '../components/CardEvento';

function Eventos() {
  const listaEventos = [
    {
      id: 1,
      titulo: 'Oficina de WhatsApp',
      data: '10/07/2025',
      descricao: 'Aprenda na prática a usar o WhatsApp para se comunicar.'
    },
    {
      id: 2,
      titulo: 'Encontro de Inclusão Digital',
      data: '15/07/2025',
      descricao: 'Evento com palestras e oficinas sobre tecnologia para idosos.'
    },
    {
      id: 3,
      titulo: 'Aula de Segurança Online',
      data: '20/07/2025',
      descricao: 'Aprenda como se proteger na internet de forma simples e prática.'
    }
  ];

  return (
    <div>
      <h1>Eventos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {listaEventos.map((evento) => (
          <CardEvento 
            key={evento.id} 
            titulo={evento.titulo} 
            data={evento.data} 
            descricao={evento.descricao} 
          />
        ))}
      </div>
    </div>
  );
}

export default Eventos;
