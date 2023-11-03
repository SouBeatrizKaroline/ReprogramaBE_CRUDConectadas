const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/allHamburguers', menuController.findAllHamburguers)
router.get('/hamburguer/:id', menuController.findHamburguerById)
router.post('/create', menuController.createHamburguer)
router.get('/hamburguer/:hamburguerName', menuController.findByName)
router.get('/hamburguer/:typeBread', menuController.findByBread)
router.get('/hamburguer/:typeMeat', menuController.findByMeat)
router.get('/hamburguer/:typeSauce', menuController.findBySauce)
router.get('/hamburguer/:salad', menuController.findBySalad)
router.get('/user/:username', menuController.findByUser)
router.patch('/update/:id', menuController.updateHamburguerById)
router.patch('/update/:hamburguerName', menuController.updateHamburguerByName)
router.delete('/delete/:id', menuController.deleteById)
router.delete('/delete/user/:username', menuController.deleteByUsername)

module.exports = router;