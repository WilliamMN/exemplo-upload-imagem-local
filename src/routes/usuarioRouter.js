const express = require('express');
const router = express.Router();
const upload = require('../util/configUpload');
const usuarioController = require('../controllers/usuarioController');

router.get("", (req, res) => {
  res.render("index")
});

router.post('/cadastro', upload.single('foto'), (req, res) => {
  usuarioController.salvar(req, res);
});

router.get('/:id', upload.single('foto'), (req, res) => {
  usuarioController.buscarUsuarioPeloId(req, res);
});

module.exports = router;

