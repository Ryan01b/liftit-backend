const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

router.post('/', exerciseController.createExercise);
router.get('/workout/:workoutId', exerciseController.getExercisesByWorkout);
router.delete('/:id', exerciseController.deleteExercise);

module.exports = router;