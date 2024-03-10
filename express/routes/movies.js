var express = require('express');
var router = express.Router();
var movieController = require('../controller/MovieController');

router.get('/', movieController.getAllMovie);
router.get('/:movieId', movieController.getMovieById);
router.get('/title/:title', movieController.findMovieByTitle);
router.post('/', movieController.newMovie);
router.put('/:movieId', movieController.updateMovie);
router.delete('/:movieId', movieController.deleteMovie);

module.exports = router;