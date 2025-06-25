const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/conecta_plus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado!'))
.catch((err) => console.log('Erro MongoDB:', err));

const SuporteSchema = new mongoose.Schema({
  nome: String,
  email: String,
  descricao: String,
  data: { type: Date, default: Date.now },
});
const Suporte = mongoose.model('Suporte', SuporteSchema);

app.post('/api/suporte/enviar', async (req, res) => {
  const { nome, email, descricao } = req.body;
  if (!nome || !email || !descricao) {
    return res.status(400).json({ message: 'Preencha todos os campos!' });
  }

  try {
    const novoSuporte = new Suporte({ nome, email, descricao });
    await novoSuporte.save();
    return res.status(201).json({ message: 'Solicitação enviada com sucesso!' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao enviar suporte', error });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});