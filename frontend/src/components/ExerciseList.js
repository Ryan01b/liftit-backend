import React from 'react';

function ExerciseList({ exercises, onDeleteExercise }) {
  return (
    <div className="card">
      <h2>Exercises ({exercises.length})</h2>
      {exercises.length === 0 ? (
        <p>No exercises added yet. Select a workout and add exercises above!</p>
      ) : (
        exercises.map((exercise) => (
          <div key={exercise.id} className="item">
            <div className="item-header">
              <h3>{exercise.name}</h3>
              <button 
                className="btn btn-delete"
                onClick={() => onDeleteExercise(exercise.id)}
              >
                Delete
              </button>
            </div>
            <small>
              <p>🏋️ Sets: {exercise.sets} | Reps: {exercise.reps}</p>
              {exercise.weight > 0 && <p>⚖️ Weight: {exercise.weight} kg</p>}
              {exercise.restTime > 0 && <p>⏱ Rest: {exercise.restTime} sec</p>}
              {exercise.notes && <p>📝 {exercise.notes}</p>}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default ExerciseList;