// In-memory storage (no database needed)
let exercises = [];
let nextId = 1;

// CREATE
exports.create = (exerciseData) => {
  const newExercise = {
    id: nextId++,
    workoutId: parseInt(exerciseData.workoutId),
    name: exerciseData.name,
    sets: exerciseData.sets,
    reps: exerciseData.reps,
    weight: exerciseData.weight || 0,
    restTime: exerciseData.restTime || 60,
    notes: exerciseData.notes || ''
  };
  exercises.push(newExercise);
  return newExercise;
};

// FIND BY WORKOUT ID
exports.findByWorkoutId = (workoutId) => {
  return exercises.filter(e => e.workoutId === parseInt(workoutId));
};

// DELETE
exports.delete = (id) => {
  const index = exercises.findIndex(e => e.id === parseInt(id));
  if (index === -1) return false;
  
  exercises.splice(index, 1);
  return true;
};