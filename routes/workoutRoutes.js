const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

// Define the paths for workouts
router.post('/', workoutController.createWorkout);       // POST /api/workouts
router.get('/', workoutController.getAllWorkouts);       // GET /api/workouts
router.get('/:id', workoutController.getWorkoutById);    // GET /api/workouts/12345
router.put('/:id', workoutController.updateWorkout);     // PUT /api/workouts/12345
router.delete('/:id', workoutController.deleteWorkout);  // DELETE /api/workouts/12345

module.exports = router;