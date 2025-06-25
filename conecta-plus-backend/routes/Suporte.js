const express = require('express');
const router = express.Router();
const Suporte = require('../models/Suporte');

// 📥 Rota para enviar uma solicitação de suporte
router.post('/enviar', async (req, res) => {
  const { nome, email, descricao } = req.body;

  if (!nome || !email || !descricao) {
    return res.status(400).json({ message: 'Preencha todos os campos!' });
  }

  try {
    const novoSuporte = new Suporte({ nome, email, descricao });
    await novoSuporte.save();
    res.status(201).json({ message: 'Solicitação enviada com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar suporte', error });
  }
});

// 📃 (Opcional) Ver todas as solicitações de suporte (admin)
router.get('/listar', async (req, res) => {
  try {
    const suportes = await Suporte.find().sort({ data: -1 });
    res.json(suportes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar suportes', error });
  }
});

module.exports = router;
