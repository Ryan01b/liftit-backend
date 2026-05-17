import React, { useState } from 'react';

function WorkoutForm({ onCreateWorkout }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateWorkout(formData);
    setFormData({ name: '', description: '', duration: '' });
  };

  return (
    <div className="card">
      <h2>Create New Workout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Workout Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Leg Day"
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="e.g., Focus on lower body"
          />
        </div>
        <div className="form-group">
          <label>Duration (minutes)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., 45"
            min="1"
          />
        </div>
        <button type="submit" className="btn">
          Create Workout
        </button>
      </form>
    </div>
  );
}

export default WorkoutForm;