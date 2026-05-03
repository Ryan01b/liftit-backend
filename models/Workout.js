// In-memory storage (no database needed)
let workouts = [];
let nextId = 1;

// CREATE
exports.create = (workoutData) => {
  const newWorkout = {
    id: nextId++,
    name: workoutData.name,
    description: workoutData.description || '',
    duration: workoutData.duration || 0,
    createdAt: new Date()
  };
  workouts.push(newWorkout);
  return newWorkout;
};

// READ ALL
exports.findAll = () => workouts;

// READ ONE
exports.findById = (id) => {
  return workouts.find(w => w.id === parseInt(id));
};

// UPDATE
exports.update = (id, updateData) => {
  const index = workouts.findIndex(w => w.id === parseInt(id));
  if (index === -1) return null;
  
  workouts[index] = { ...workouts[index], ...updateData };
  return workouts[index];
};

// DELETE
exports.delete = (id) => {
  const index = workouts.findIndex(w => w.id === parseInt(id));
  if (index === -1) return false;
  
  workouts.splice(index, 1);
  return true;
};