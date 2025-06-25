import React from 'react';
import CardHome from '../components/CardHome';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import iconsBemVindo from '../assets/icons bem vindos.png';

import imagem1 from '../assets/Idodos celular.jpg';
import imagem2 from '../assets/idoso celular 1.jpg';
import imagem3 from '../assets/idoso celular 2.jpg';

function Home() {
  const opcoes = [
    {
      id: 1,
      titulo: 'Tutoriais',
      descricao: 'Aprenda a usar aplicativos, fazer chamadas de vídeo, navegar na internet e muito mais.',
      link: '/tutoriais'
    },
    {
      id: 2,
      titulo: 'Eventos',
      descricao: 'Participe das nossas oficinas, palestras e encontros sobre tecnologia.',
      link: '/eventos'
    },
    {
      id: 3,
      titulo: 'Suporte',
      descricao: 'Precisa de ajuda? Entre em contato com nossa equipe de suporte.',
      link: '/suporte'
    }
  ];

  return (
    <div>
  {}
  <div style={containerStyle}>
  <div style={textStyle}>
    <img 
      src={iconsBemVindo} 
      alt="Ícones de boas-vindas" 
      style={{ maxWidth: '300px', display: 'block', margin: '0 auto 20px' }} 
    />

    <h1>Bem-vindo ao Conecta+</h1>
    <p>
      Seu portal de inclusão digital! Aqui você encontra tutoriais, eventos e suporte para navegar no mundo digital com facilidade.
    </p>
  </div>

  <div style={imageStyle}>
    <Carousel 
      autoPlay 
      infiniteLoop 
      showThumbs={false} 
      showStatus={false} 
      interval={3000}
    >
      <div>
        <img src={imagem1} alt="Idosos usando tecnologia 1" />
      </div>
      <div>
        <img src={imagem2} alt="Idosos usando tecnologia 2" />
      </div>
      <div>
        <img src={imagem3} alt="Idosos usando tecnologia 3" />
      </div>
    </Carousel>
  </div>
</div>

  <h2 style={{ color: '#26266F' }}>Acesse:</h2>
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {opcoes.map((item) => (
      <CardHome 
        key={item.id} 
        titulo={item.titulo} 
        descricao={item.descricao} 
        link={item.link} 
      />
    ))}
  </div>
</div>
  );
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '20px',
};

const textStyle = {
  flex: '1',
  minWidth: '300px',
};

const imageStyle = {
  flex: '1',
  minWidth: '300px',
};

export default Home;
