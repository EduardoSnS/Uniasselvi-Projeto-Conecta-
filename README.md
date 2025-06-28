# Conecta+ 💙

**Conecta+** é um projeto desenvolvido com o objetivo de promover a **inclusão digital de idosos**, oferecendo tutoriais, suporte e eventos sobre o uso consciente da tecnologia.

---

## 🚀 Tecnologias utilizadas

- React.js (Frontend)  
- Express + Node.js (Backend)  
- MongoDB (Banco de Dados)  
- Axios (Consumo de API)  
- SweetAlert2 (Alertas)  
- React Router DOM (Rotas)  
- MongoDB Compass (Interface visual)  

---

## 📁 Estrutura do Projeto

```text
conecta-plus
├── backend (conecta-plus-backend)
├── frontend (na raiz)
├── public/
├── src/
├── .gitignor
├── package-lock.json
├── package.json
└── README.md  
```
---

## 🧪 Funcionalidades

```text
- Formulário de suporte com envio para o banco MongoDB
- Interface acessível com carrossel de imagens
- Contatos de ajuda (WhatsApp, Instagram, etc.)
- Design com foco em tons azul e branco para melhor legibilidade
- Estilo de fonte específico para facilitar leitura
```

---

## 🔧 Como rodar localmente

## 1. Frontend

```text
-npm install
-npm start
```

## 2. Backend
```text
-conecta-plus-backend (terminal integrado)
-npm install
-npm run dev
```

## 📌 Observação sobre o banco de dados
```
Este projeto utiliza uma instância privada do MongoDB Atlas conectada via variável de ambiente.
Caso deseje testar com sua própria base de dados, você pode:

1- Criar uma conta gratuita no MongoDB Atlas.

2- Criar um cluster e liberar o seu IP em "Network Access".

3- Criar um banco chamado conecta_plus.

4- Atualizar o arquivo .env com sua própria MONGO_URI.

MONGO_URI=mongodb+srv://<usuário>:<senha>@<seu-cluster>.mongodb.net/conecta_plus
PORT=5000
```

## 🌐 Objetivo futuro

Transformar a aplicação em um aplicativo mobile (PWA ou React Native)

Incluir tutoriais em vídeo

Melhorar acessibilidade para pessoas com deficiência visual ou auditiva

👨‍💻 Desenvolvedor
Carlos Eduardo

Projeto para disciplina de Análise e Desenvolvimento de Sistemas - Uniasselvi.