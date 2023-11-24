const express = require('express');
const router = express.Router();
const cardapioController = require('../controllers/cardapioController');

router.get('/allHamburguers', cardapioController.findAllHamburguers)
router.get('/hamburguer/:id', cardapioController.findHamburguerById)
router.get('/hamburguer/:hamburguerName', cardapioController.findByName)
router.post('/create', cardapioController.createHamburguer)
router.get('/hamburguer/:hamburguerName', cardapioController.findByName)
router.get('/user/:username', cardapioController.findByUser)
router.patch('/update/:id', cardapioController.updateHamburguerById)
router.patch('/update/:hamburguerName', cardapioController.updateHamburguerByName)
router.delete('/delete/:id', cardapioController.deleteById)
router.delete('/delete/user/:username', cardapioController.deleteByUsername)

module.exports = router;