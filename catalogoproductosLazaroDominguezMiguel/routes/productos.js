var express = require('express');
var router = express.Router();

const controller = require('../controllers/productos_controller');

const customMdw = require('../middleware/custom');


router.get('/', controller.findAll);
router.get('/:id',controller.findById)
router.put('/:id',customMdw.ensureAuthenticated,controller.addComentario)

module.exports = router;