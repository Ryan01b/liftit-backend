const Exercise = require('../models/Exercise');

exports.createExercise = (req, res) => {
  try {
    const newExercise = Exercise.create(req.body);
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getExercisesByWorkout = (req, res) => {
  try {
    const exercises = Exercise.findByWorkoutId(req.params.workoutId);
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteExercise = (req, res) => {
  try {
    const deleted = Exercise.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Exercise not found' });
    }
    res.status(200).json({ message: 'Exercise deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};