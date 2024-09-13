const express = require('express');
const router = express.Router();
const EventosController = require('../controllers/EventosController');

router.post('/edit', EventosController.editareventopost)
router.get('/edit/:id', EventosController.editarevento)
router.post('/remove',  EventosController.apagarevento)
router.get('/evento/:id', EventosController.verEvento);
router.post('/cadastrar', EventosController.cadastrarEventoPost);
router.get('/cadastrar', EventosController.cadastrarEvento);
router.get('/', EventosController.mostrarEventos);


module.exports = router;
