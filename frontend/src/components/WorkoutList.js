import React from 'react';

function WorkoutList({ workouts, onSelectWorkout, onDeleteWorkout, selectedWorkoutId }) {
  return (
    <div className="card">
      <h2>Your Workouts ({workouts.length})</h2>
      {workouts.length === 0 ? (
        <p>No workouts yet. Create one above!</p>
      ) : (
        workouts.map((workout) => (
          <div 
            key={workout.id} 
            className={`item ${selectedWorkoutId === workout.id ? 'active' : ''}`}
          >
            <div className="item-header">
              <h3>{workout.name}</h3>
              <div>
                <button 
                  className="btn btn-select"
                  onClick={() => onSelectWorkout(workout.id)}
                >
                  Select
                </button>
                <button 
                  className="btn btn-delete"
                  onClick={() => onDeleteWorkout(workout.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <small>
              {workout.description && <p>{workout.description}</p>}
              {workout.duration && <p>⏱ {workout.duration} minutes</p>}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default WorkoutList;