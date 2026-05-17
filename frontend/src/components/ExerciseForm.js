import React, { useState } from 'react';

function ExerciseForm({ workoutId, onCreateExercise }) {
  const [formData, setFormData] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: '',
    restTime: '60',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateExercise({
      ...formData,
      workoutId
    });
    setFormData({
      name: '',
      sets: '',
      reps: '',
      weight: '',
      restTime: '60',
      notes: ''
    });
  };

  return (
    <div className="card exercise-section">
      <h2>Add Exercise to Workout #{workoutId}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Exercise Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Squats"
            required
          />
        </div>
        <div className="form-group">
          <label>Sets *</label>
          <input
            type="number"
            name="sets"
            value={formData.sets}
            onChange={handleChange}
            placeholder="e.g., 4"
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label>Reps *</label>
          <input
            type="text"
            name="reps"
            value={formData.reps}
            onChange={handleChange}
            placeholder="e.g., 12"
            required
          />
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="e.g., 100"
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Rest Time (seconds)</label>
          <input
            type="number"
            name="restTime"
            value={formData.restTime}
            onChange={handleChange}
            placeholder="e.g., 90"
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Notes</label>
          <input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="e.g., Go deep on squats"
          />
        </div>
        <button type="submit" className="btn">
          Add Exercise
        </button>
      </form>
    </div>
  );
}

export default ExerciseForm;