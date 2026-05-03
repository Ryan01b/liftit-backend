const Workout = require('../models/Workout');

exports.createWorkout = (req, res) => {
  try {
    const newWorkout = Workout.create(req.body);
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllWorkouts = (req, res) => {
  try {
    const workouts = Workout.findAll();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWorkoutById = (req, res) => {
  try {
    const workout = Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateWorkout = (req, res) => {
  try {
    const updated = Workout.update(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteWorkout = (req, res) => {
  try {
    const deleted = Workout.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.status(200).json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};