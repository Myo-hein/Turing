var express = require('express');
var router = express.Router();
var reviewController = require('../controller/ReviewController');

router.get('/', reviewController.getAllReview);
router.get('/movie/:movieId',reviewController.getReviewByMovieId);
router.get('/:reviewId', reviewController.getReviewById);
router.post('/',reviewController.saveReview);
router.put('/:reviewId',reviewController.updateReview);
router.delete('/:reviewId',reviewController.deleteReview);

module.exports = router;